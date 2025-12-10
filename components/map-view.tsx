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
  wine: { fill: "#065f46", border: "#ecfdf3" },
  cocktail: { fill: "#d97706", border: "#fff7ed" },
  coffee: { fill: "#312e81", border: "#ede9fe" },
  food: { fill: "#111827", border: "#f9fafb" },
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

const mapStyles: google.maps.MapTypeStyle[] = [
  { elementType: "geometry", stylers: [{ color: "#0b0b0b" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#f3f4f6" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#0b0b0b" }] },
  {
    featureType: "administrative",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9ca3af" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9ca3af" }],
  },
  {
    featureType: "poi.business",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#14532d" }],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#c6f6d5" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#1f2937" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#111827" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#e5e7eb" }],
  },
  {
    featureType: "transit",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#0f172a" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#94a3b8" }],
  },
];

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
    const markers: google.maps.marker.AdvancedMarkerElement[] = [];
    let cancelled = false;

    setOptions({
      key: apiKey,
      language: "en",
      region: "FR",
    });

    (async () => {
      try {
        const [{ Map }, { AdvancedMarkerElement, PinElement }] =
          await Promise.all([
            importLibrary("maps") as Promise<google.maps.MapsLibrary>,
            importLibrary("marker") as Promise<google.maps.MarkerLibrary>,
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

          const pin = new PinElement({
            background: fill,
            borderColor: border,
            glyphColor: "#fff",
          });

          const marker = new AdvancedMarkerElement({
            position: { lat: r.location!.lat, lng: r.location!.lon },
            map,
            title: r.name,
            content: pin.element,
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
              </div>
            `,
          });

          marker.addListener("click", () => {
            info.open({ anchor: marker, map });
          });

          markers.push(marker);
          bounds.extend(marker.position!);
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
      markers.forEach((m) => m.map = null);
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
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-black shadow-sm">
      <div ref={mapRef} className="h-[360px] w-full" />
    </div>
  );
}
