import { NextResponse } from "next/server";

const PLACE_API_BASE = "https://maps.googleapis.com/maps/api/place";

type GoogleFindPlaceResponse = {
  candidates?: { place_id: string }[];
  status: string;
  error_message?: string;
};

type GoogleDetailsResponse = {
  result?: {
    name?: string;
    formatted_address?: string;
    geometry?: { location?: { lat: number; lng: number } };
    url?: string;
  };
  status: string;
  error_message?: string;
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");
  if (!name) {
    return NextResponse.json(
      { error: "Missing name param" },
      { status: 400 },
    );
  }

  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Missing GOOGLE_MAPS_API_KEY env" },
      { status: 500 },
    );
  }

  // Step 1: find Place ID
  const findParams = new URLSearchParams({
    input: name,
    inputtype: "textquery",
    fields: "place_id",
    key: apiKey,
    language: "en",
    region: "fr",
  });

  const findRes = await fetch(
    `${PLACE_API_BASE}/findplacefromtext/json?${findParams.toString()}`,
  );
  const findData = (await findRes.json()) as GoogleFindPlaceResponse;

  const placeId = findData.candidates?.[0]?.place_id;
  if (!placeId) {
    return NextResponse.json(
      {
        error: "Place ID not found",
        status: findData.status,
        details: findData.error_message,
      },
      { status: 404 },
    );
  }

  // Step 2: fetch details
  const detailsParams = new URLSearchParams({
    place_id: placeId,
    key: apiKey,
    language: "en",
    fields: "name,geometry/location,formatted_address,url",
  });

  const detailsRes = await fetch(
    `${PLACE_API_BASE}/details/json?${detailsParams.toString()}`,
  );
  const detailsData = (await detailsRes.json()) as GoogleDetailsResponse;

  if (!detailsData.result) {
    return NextResponse.json(
      {
        error: "Place details not found",
        status: detailsData.status,
        details: detailsData.error_message,
      },
      { status: 404 },
    );
  }

  return NextResponse.json({
    placeId,
    name: detailsData.result.name,
    address: detailsData.result.formatted_address,
    location: detailsData.result.geometry?.location,
    url: detailsData.result.url,
  });
}
