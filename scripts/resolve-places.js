import fs from "fs";
import path from "path";
import { restaurants } from "../data/restaurants.ts";

const API_KEY = process.env.GOOGLE_MAPS_API_KEY;
const PLACE_API_BASE = "https://maps.googleapis.com/maps/api/place";

async function findPlaceId(name) {
  const params = new URLSearchParams({
    input: name,
    inputtype: "textquery",
    fields: "place_id",
    key: API_KEY || "",
    language: "en",
    region: "fr",
  });
  const res = await fetch(
    `${PLACE_API_BASE}/findplacefromtext/json?${params.toString()}`,
  );
  const data = await res.json();
  if (!data.candidates?.[0]?.place_id) {
    throw new Error(
      `Place ID not found for "${name}" (${data.status} ${data.error_message || ""})`,
    );
  }
  return data.candidates[0].place_id;
}

async function getDetails(placeId) {
  const params = new URLSearchParams({
    place_id: placeId,
    key: API_KEY || "",
    language: "en",
    fields: "name,geometry/location,formatted_address",
  });
  const res = await fetch(
    `${PLACE_API_BASE}/details/json?${params.toString()}`,
  );
  const data = await res.json();
  if (!data.result) {
    throw new Error(
      `Details not found for ${placeId} (${data.status} ${data.error_message || ""})`,
    );
  }
  return {
    address: data.result.formatted_address,
    location: data.result.geometry?.location,
  };
}

async function main() {
  if (!API_KEY) {
    console.error("Missing GOOGLE_MAPS_API_KEY in env");
    process.exit(1);
  }

  const updated = [];
  for (const r of restaurants) {
    try {
      const placeId = await findPlaceId(r.name);
      const details = await getDetails(placeId);
      updated.push({
        ...r,
        placeId,
        location: details.location
          ? {
              lat: details.location.lat,
              lon: details.location.lng,
              area: r.location?.area || details.address,
            }
          : r.location,
      });
      console.log(`✓ ${r.name} → ${placeId}`);
    } catch (err) {
      console.error(`✗ ${r.name}: ${(err).message}`);
      updated.push(r);
    }
  }

  const target = path.join(process.cwd(), "data", "restaurants.ts");
  const contents = `export type RestaurantStatus = "DRAFT" | "PUBLISHED";

export type RestaurantLocation = {
  lat: number;
  lon: number;
  area?: string;
};

export type Restaurant = {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  category: string;
  status: RestaurantStatus;
  location?: RestaurantLocation;
  placeId?: string;
};

export const restaurants: Restaurant[] = ${JSON.stringify(updated, null, 2)} as const;

export function getPublishedRestaurants(): Restaurant[] {
  return restaurants.filter((restaurant) => restaurant.status === "PUBLISHED");
}

export function getRestaurantBySlug(slug: string): Restaurant | undefined {
  return restaurants.find((restaurant) => restaurant.slug === slug);
}

export function getPublishedRestaurantBySlug(
  slug: string,
): Restaurant | undefined {
  const restaurant = getRestaurantBySlug(slug);
  return restaurant && restaurant.status === "PUBLISHED" ? restaurant : undefined;
}
`;

  fs.writeFileSync(target, contents, "utf8");
  console.log("Updated data/restaurants.ts with Place IDs and coordinates.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
