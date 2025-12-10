"use client";

import { importLibrary, setOptions } from "@googlemaps/js-api-loader";
import { useEffect, useRef, useState } from "react";
import { Restaurant } from "@/data/restaurants";

type MapViewProps = {
  restaurants: Restaurant[];
  variant?: "light" | "dark";
  onSelect?: (slug: string | null) => void;
  interactive?: boolean;
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

const mapStyles: google.maps.MapTypeStyle[] = [
  { featureType: "poi.business", stylers: [{ visibility: "off" }] },
  { featureType: "transit", stylers: [{ visibility: "off" }] },
];

export function MapView({
  restaurants,
  variant = "light",
  onSelect,
  interactive = true,
}: MapViewProps) {
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
    let activeInfo: google.maps.InfoWindow | null = null;
    const listeners: google.maps.MapsEventListener[] = [];
    let cancelled = false;
    let styleEl: HTMLStyleElement | null = null;

    setOptions({
      key: apiKey,
      language: "en",
      region: "FR",
    });

    // Inject minimal overrides to remove default padding/close button space
    if (typeof document !== "undefined") {
      if (!document.getElementById("gm-iw-override")) {
        styleEl = document.createElement("style");
        styleEl.id = "gm-iw-override";
        styleEl.textContent = `
          .gm-style .gm-style-iw-c { padding: 0 !important; }
          .gm-style .gm-style-iw-d { overflow: visible !important; padding: 0 !important; }
          .gm-style .gm-style-iw-t button.gm-ui-hover-effect { display: none !important; }
        `;
        document.head.appendChild(styleEl);
      }
    }

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
          clickableIcons: false,
          gestureHandling: "greedy",
          zoomControl: true,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
          backgroundColor: variant === "dark" ? "#000" : "#fff",
        });

        const bounds = new google.maps.LatLngBounds();
        const closeActive = () => {
          if (activeInfo) {
            activeInfo.close();
            activeInfo = null;
          }
          onSelect?.(null);
        };

        if (interactive) {
          listeners.push(map.addListener("click", closeActive));
        }

        mapped.forEach((r) => {
          const bucket = categoryBucket(r.category);
          const { fill, border } = palette[bucket];
          const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            r.location?.area ? `${r.name} ${r.location.area}` : r.name,
          )}`;

          const content = document.createElement("div");
          const html = `
<div style="position:relative; padding:8px 14px 12px 14px; margin:0; color:#0b0b0b; font-family:'Helvetica Neue',Arial,sans-serif;">
  <button data-close style="position:absolute; top:4px; right:4px; width:28px; height:28px; border:none; background:transparent; color:#0b0b0b; cursor:pointer; font-size:20px; line-height:1; padding:0; border-radius:9999px; font-weight:700; outline:none; box-shadow:none; -webkit-appearance:none; -webkit-tap-highlight-color: transparent;">×</button>
  <div style="max-width:220px; margin:0; padding:0; line-height:1.45; color:#0b0b0b;">
    <div style="font-weight:600; margin:0; padding:0 24px 0 0; color:#0b0b0b;">${r.name}</div>
    <div style="font-size:12px; letter-spacing:0.08em; text-transform:uppercase; margin:3px 0 0 0; padding:0; color:#0b0b0b;">
      ${r.category.replaceAll("_", " ")}
    </div>
    ${
      r.location?.area
        ? `<div style="margin:5px 0 0 0; font-size:12px; padding:0; color:#0b0b0b;">${r.location.area}</div>`
        : ""
    }
    <div style="margin:10px 0 0 0; padding:0; display:flex; align-items:center; gap:6px;">
      <a href="${mapsUrl}" target="_blank" rel="noopener" style="color:#0b0b0b; font-size:12px; font-weight:600; text-decoration:none; display:inline-flex; align-items:center; gap:6px; -webkit-tap-highlight-color: transparent;">
        <span>View on Google Maps</span>
        <span style="display:inline-flex; width:14px; height:14px;">
          <svg viewBox="0 0 16 16" fill="none" stroke="#0b0b0b" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 12 12 4" />
            <path d="M6 4h6v6" />
          </svg>
        </span>
      </a>
    </div>
  </div>
</div>
          `.trim();
          content.style.cssText = "margin:0;padding:0;";
          content.innerHTML = html;

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

          const info = new google.maps.InfoWindow({ content, ariaLabel: r.name });

          const closeBtn = content.querySelector("[data-close]");
          if (closeBtn) {
            closeBtn.addEventListener("click", (ev) => {
              ev.stopPropagation();
              closeActive();
            });
          }

          marker.addListener("click", () => {
            if (!interactive) return;
            closeActive();
            activeInfo = info;
            info.open({ anchor: marker, map });
            onSelect?.(r.slug);
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
      if (activeInfo) {
        activeInfo.close();
      }
      listeners.forEach((l) => l.remove());
      markers.forEach((m) => m.setMap(null));
      if (map) {
        map = null;
      }
      onSelect?.(null);
    };
  }, [apiKey, interactive, mapped, onSelect, variant]);

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
