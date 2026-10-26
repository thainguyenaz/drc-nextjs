"use client";

import { CARD_MAX_BYTES, cardContentType, type CardSide, type PreparedCard } from "@/lib/forms-backend";

const MAX_SIDE_PX = 2000;
const JPEG_QUALITY = 0.85;

// Prepare a card file for the AWS upload. JPEG and PNG are re-encoded in the
// browser to JPEG (longest side 2000 px): smaller uploads, and the canvas
// round-trip drops EXIF (including phone GPS location). HEIC/HEIF cannot be
// decoded by most browsers and is sent as chosen. Returns null when the file
// type is not accepted or the result is still over 5 MB.
export async function prepareCard(side: CardSide, file: File): Promise<PreparedCard | null> {
  const type = cardContentType(file.type, file.name);
  if (!type) return null;
  if (type === "image/jpeg" || type === "image/png") {
    const reencoded = await reencode(file).catch(() => null);
    if (reencoded && reencoded.size > 0 && reencoded.size <= CARD_MAX_BYTES) {
      return { side, blob: reencoded, contentType: "image/jpeg" };
    }
  }
  if (file.size > CARD_MAX_BYTES || file.size === 0) return null;
  return { side, blob: file, contentType: type };
}

async function reencode(file: File): Promise<Blob | null> {
  if (typeof createImageBitmap !== "function") return null;
  const bitmap = await createImageBitmap(file, { imageOrientation: "from-image" });
  try {
    const scale = Math.min(1, MAX_SIDE_PX / Math.max(bitmap.width, bitmap.height));
    const w = Math.max(1, Math.round(bitmap.width * scale));
    const h = Math.max(1, Math.round(bitmap.height * scale));
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    // White background so transparent PNGs don't turn black in JPEG.
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, w, h);
    ctx.drawImage(bitmap, 0, 0, w, h);
    return await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/jpeg", JPEG_QUALITY));
  } finally {
    bitmap.close();
  }
}
