// Vercel Environment Variable Required:
// GOOGLE_PLACES_API_KEY — Google Cloud API key with Places API (New) enabled
// Add via: Vercel Dashboard > Settings > Environment Variables

import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const LOCATIONS = [
  { name: "Scottsdale", placeId: "ChIJIY0JCJR3K4cR2AsN2S1SMsw" },
  { name: "Glendale", placeId: "ChIJhwUwqWFrK4cRcJizcuP0hCI" },
  { name: "Phoenix", placeId: "ChIJP-eZSIRAK4cRrE5xwNZoYdA" },
];

const FIELDS = "displayName,rating,reviews,userRatingCount";

interface GoogleReview {
  authorAttribution?: {
    displayName?: string;
    photoUri?: string;
    uri?: string;
  };
  rating?: number;
  text?: { text?: string };
  relativePublishTimeDescription?: string;
  publishTime?: string;
}

interface PlaceDetailsResponse {
  displayName?: { text?: string };
  rating?: number;
  userRatingCount?: number;
  reviews?: GoogleReview[];
}

async function fetchPlaceDetails(
  placeId: string,
  apiKey: string
): Promise<PlaceDetailsResponse | null> {
  const url = `https://places.googleapis.com/v1/places/${placeId}`;

  const res = await fetch(url, {
    method: "GET",
    headers: {
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": FIELDS,
    },
    next: { revalidate: 86400 }, // 24 hours
  });

  if (!res.ok) {
    console.error(
      `Places API error for ${placeId}: ${res.status} ${res.statusText}`
    );
    return null;
  }

  return res.json();
}

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "GOOGLE_PLACES_API_KEY is not configured" },
      { status: 500 }
    );
  }

  const results = await Promise.all(
    LOCATIONS.map(async (location) => {
      const data = await fetchPlaceDetails(location.placeId, apiKey);

      if (!data) {
        return {
          name: location.name,
          placeId: location.placeId,
          rating: 0,
          totalReviews: 0,
          reviews: [],
        };
      }

      const filteredReviews = (data.reviews || [])
        .filter((r) => (r.rating ?? 0) >= 4)
        .map((r) => ({
          author: r.authorAttribution?.displayName || "Anonymous",
          rating: r.rating ?? 5,
          text: r.text?.text || "",
          time: r.relativePublishTimeDescription || "",
          profilePhoto: r.authorAttribution?.photoUri || null,
        }));

      return {
        name: location.name,
        placeId: location.placeId,
        rating: data.rating ?? 0,
        totalReviews: data.userRatingCount ?? 0,
        reviews: filteredReviews,
      };
    })
  );

  return NextResponse.json(
    { locations: results },
    {
      headers: {
        "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=3600",
      },
    }
  );
}
