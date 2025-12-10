"use client";

import { importLibrary, setOptions } from "@googlemaps/js-api-loader";
import { useEffect, useRef, useState } from "react";
import { Restaurant } from "@/data/restaurants";

type MapViewProps = {
  restaurants: Restaurant[];
  variant?: "light" | "dark";
};

type PinStyle = { fill: string; border: string };

const palette: Record<string, PinStyle> = {
  wine: { fill: "#0b0b0b", border: "#e5e7eb" },
  cocktail: { fill: "#0b0b0b", border: "#e5e7eb" },
  coffee: { fill: "#0b0b0b", border: "#e5e7eb" },
  food: { fill: "#0b0b0b", border: "#e5e7eb" },
};

function categoryBucket(category: string): keyof typeof palette {
  const c = category.toLowerCase();
  if (c.includes("wine")) return "wine";
  if (c.includes("cocktail") || c.includes("bar") || c.includes("rooftop"))
    return "cocktail";
  if (c.includes("coffee") || c.includes("cafe") || c.includes("tea"))
    return "coffee";
  return "food";
}

const mapStyles: google.maps.MapTypeStyle[] = [];

export function MapView({ restaurants, variant = "light" }: MapViewProps) {
  const mapped = restaurants.filter((r) => r.location);
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [error, setError] = useState<string | null>(null);

  const apiKey =
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ||
    process.env.GOOGLE_MAPS_API_KEY ||
    "";

  useEffect(() => {
    if (!mapRef.current) return;
    if (!apiKey || !mapped.length) return;

    let map: google.maps.Map | null = null;
    const markers: google.maps.Marker[] = [];
    let cancelled = false;

    setOptions({
      key: apiKey,
      language: "en",
      region: "FR",
    });

    (async () => {
      try {
        const [{ Map }] = await Promise.all([
          importLibrary("maps") as Promise<google.maps.MapsLibrary>,
        ]);

        if (cancelled || !mapRef.current) return;

        map = new Map(mapRef.current, {
          center: { lat: mapped[0].location!.lat, lng: mapped[0].location!.lon },
          zoom: 13,
          styles: mapStyles,
          disableDefaultUI: true,
          gestureHandling: "greedy",
          zoomControl: true,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
          backgroundColor: variant === "dark" ? "#000" : "#fff",
        });

        const bounds = new google.maps.LatLngBounds();

        mapped.forEach((r) => {
          const bucket = categoryBucket(r.category);
          const { fill, border } = palette[bucket];
          const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            r.location?.area ? `${r.name} ${r.location.area}` : r.name,
          )}`;

          const marker = new google.maps.Marker({
            position: { lat: r.location!.lat, lng: r.location!.lon },
            map,
            title: r.name,
            icon: {
              path: google.maps.SymbolPath.CIRCLE,
              fillColor: fill,
              fillOpacity: 0.9,
              strokeColor: border,
              strokeWeight: 1.6,
              scale: 6,
            },
          });

          const info = new google.maps.InfoWindow({
            content: `
              <div style="color:#0b0b0b; font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 220px;">
                <div style="font-weight:600; margin-bottom:4px;">${r.name}</div>
                <div style="font-size:12px; letter-spacing:0.08em; text-transform:uppercase; color:#4b5563;">${r.category.replaceAll(
                  "_",
                  " ",
                )}</div>
                ${
                  r.location?.area
                    ? `<div style="margin-top:4px; font-size:12px; color:#6b7280;">${r.location.area}</div>`
                    : ""
                }
                <div style="margin-top:8px;">
                  <a href="${mapsUrl}" target="_blank" rel="noopener" style="color:#111827; font-size:12px; font-weight:600; text-decoration:none;">
                    View on Google Maps ↗
                  </a>
                </div>
              </div>
            `,
          });

          marker.addListener("click", () => {
            info.open({ anchor: marker, map });
          });

          markers.push(marker);
          bounds.extend(marker.getPosition()!);
        });

        map.fitBounds(bounds, 60);
      } catch (err) {
        if (!cancelled) {
          setError((err as Error).message || "Failed to load map");
        }
      }
    })();

    return () => {
      cancelled = true;
      markers.forEach((m) => m.setMap(null));
      if (map) {
        map = null;
      }
    };
  }, [apiKey, mapped, variant]);

  if (!apiKey || !mapped.length) {
    return (
      <div className="flex h-80 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm text-white/70">
        {apiKey ? "No map pins yet for this filter." : "Missing Google Maps API key"}
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-80 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm text-white/70">
        {error}
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
      <div ref={mapRef} className="h-[360px] w-full" />
    </div>
  );
}
