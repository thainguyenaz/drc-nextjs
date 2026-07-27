"use client";

import { QRCodeSVG } from "qrcode.react";

interface LeaveAReviewCTAProps {
  reviewUrl: string;
  supportingCopy: string;
  showQr?: boolean;
}

export default function LeaveAReviewCTA({ reviewUrl, supportingCopy, showQr = false }: LeaveAReviewCTAProps) {
  return (
    <section className="py-12 bg-cream">
      <div className="max-w-container mx-auto px-6">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6 text-center">
          <p className="text-gray-600 leading-relaxed text-lg">{supportingCopy}</p>
          <a
            href={reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold hover:bg-gold-dark text-white font-semibold text-base px-8 py-4 rounded-xl transition-all shadow-lg shadow-gold/25 w-full sm:w-auto text-center"
          >
            Leave a Google Review
          </a>
          {showQr && (
            <div className="bg-white border border-gray-100 rounded-xl p-4">
              <QRCodeSVG value={reviewUrl} size={180} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
