/**
 * Fetches public Google reviews via Places API (New).
 * Set in `.env.local` (server-only, never exposed to the client):
 *   GOOGLE_PLACES_API_KEY=...
 *   GOOGLE_MAPS_PLACE_ID=ChIJ...   (from Google Business Profile / Place ID finder)
 *
 * Enable "Places API (New)" in Google Cloud Console for the key.
 */
export type PulledGoogleReview = {
  quote: string;
  name: string;
  rating: number;
  timeAgo?: string;
};

type PlacesReview = {
  rating?: number;
  text?: { text?: string };
  relativePublishTimeDescription?: string;
  authorAttribution?: { displayName?: string };
};

export async function fetchGooglePlaceReviews(): Promise<
  PulledGoogleReview[] | null
> {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_MAPS_PLACE_ID?.trim();
  if (!key || !placeId) return null;

  const pathId = placeId.startsWith("places/")
    ? placeId.slice("places/".length)
    : placeId;

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${encodeURIComponent(pathId)}`,
      {
        headers: {
          "X-Goog-Api-Key": key,
          "X-Goog-FieldMask": "reviews,rating,userRatingCount",
        },
        next: { revalidate: 3600 },
      },
    );

    if (!res.ok) {
      return null;
    }

    const data = (await res.json()) as { reviews?: PlacesReview[] };
    const list = data.reviews ?? [];

    return list.map((r) => {
      const quote =
        typeof r.text?.text === "string"
          ? r.text.text
          : typeof r.text === "string"
            ? r.text
            : "";
      const name = r.authorAttribution?.displayName?.trim() || "Google reviewer";
      return {
        quote,
        name,
        rating: Math.min(5, Math.max(1, Math.round(Number(r.rating) || 5))),
        timeAgo: r.relativePublishTimeDescription,
      };
    });
  } catch {
    return null;
  }
}
