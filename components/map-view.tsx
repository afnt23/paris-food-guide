"use client";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { Restaurant } from "@/data/restaurants";

type MapViewProps = {
  restaurants: Restaurant[];
  variant?: "light" | "dark";
};

const MAP_CENTER: [number, number] = [48.8588897, 2.320041];

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

function formatCategory(category: string) {
  return category
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function buildIcon(category: string) {
  const bucket = categoryBucket(category);
  const { fill, border } = palette[bucket];
  return L.divIcon({
    className: "",
    html: `<span style="
      display:block;
      width:14px;
      height:14px;
      border-radius:9999px;
      background:${fill};
      border:2px solid ${border};
      box-shadow:0 6px 18px rgba(0,0,0,0.25);
    " />`,
    iconSize: [18, 18],
    iconAnchor: [9, 9],
  });
}

export function MapView({ restaurants, variant = "light" }: MapViewProps) {
  const mapped = restaurants.filter((r) => r.location);
  const isDark = variant === "dark";

  if (!mapped.length) {
    return (
      <div className="flex h-80 items-center justify-center rounded-2xl border border-neutral-200 bg-white text-neutral-500">
        No map pins yet for this filter.
      </div>
    );
  }

  return (
    <div
      className={`overflow-hidden rounded-2xl border shadow-sm ${
        isDark
          ? "border-white/10 bg-black"
          : "border-neutral-200 bg-white"
      }`}
    >
      <MapContainer
        center={MAP_CENTER}
        zoom={13}
        scrollWheelZoom
        style={{ height: "360px", width: "100%" }}
        className="[&_.leaflet-container]:rounded-2xl"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {mapped.map((restaurant) => (
          <Marker
            key={restaurant.slug}
            position={[restaurant.location!.lat, restaurant.location!.lon]}
            icon={buildIcon(restaurant.category)}
          >
            <Popup>
              <div className="space-y-1">
                <p className="font-semibold text-neutral-900">
                  {restaurant.name}
                </p>
                <p className="text-xs uppercase tracking-[0.14em] text-neutral-600">
                  {formatCategory(restaurant.category)}
                </p>
                {restaurant.location?.area ? (
                  <p className="text-xs text-neutral-700">
                    {restaurant.location.area}
                  </p>
                ) : null}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

function MapReady({ onReady }: { onReady: (map: L.Map) => void }) {
  const map = useMap();
  useEffect(() => {
    onReady(map);
  }, [map, onReady]);
  return null;
}

// Keep map sizing correct after filters change
export function MapViewWithSizeFix(props: MapViewProps) {
  const { restaurants, variant } = props;
  const mapped = restaurants.filter((r) => r.location);
  const [mapInstance, setMapInstance] = useState<L.Map | null>(null);
  const isDark = variant === "dark";

  useEffect(() => {
    if (!mapInstance) return;
    const id = setTimeout(() => {
      mapInstance.invalidateSize();
    }, 50);
    return () => clearTimeout(id);
  }, [mapInstance, mapped.length]);

  if (!mapped.length) {
    return (
      <div
        className={`flex h-80 items-center justify-center rounded-2xl border text-sm ${
          isDark ? "border-white/10 bg-black text-white/60" : "border-neutral-200 bg-white text-neutral-500"
        }`}
      >
        No map pins yet for this filter.
      </div>
    );
  }

  return (
    <div
      className={`overflow-hidden rounded-2xl border shadow-sm ${
        isDark ? "border-white/10 bg-black" : "border-neutral-200 bg-white"
      }`}
    >
      <MapContainer
        center={MAP_CENTER}
        zoom={13}
        scrollWheelZoom
        style={{ height: "360px", width: "100%" }}
        className="[&_.leaflet-container]:rounded-2xl"
      >
        <MapReady onReady={setMapInstance} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {mapped.map((restaurant) => (
          <Marker
            key={restaurant.slug}
            position={[restaurant.location!.lat, restaurant.location!.lon]}
            icon={buildIcon(restaurant.category)}
          >
            <Popup>
              <div className="space-y-1">
                <p className="font-semibold text-neutral-900">
                  {restaurant.name}
                </p>
                <p className="text-xs uppercase tracking-[0.14em] text-neutral-600">
                  {formatCategory(restaurant.category)}
                </p>
                {restaurant.location?.area ? (
                  <p className="text-xs text-neutral-700">
                    {restaurant.location.area}
                  </p>
                ) : null}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
