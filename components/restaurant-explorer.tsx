"use client";

import { useMemo, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Restaurant } from "@/data/restaurants";
import { RestaurantCard } from "./restaurant-card";

type RestaurantExplorerProps = {
  restaurants: Restaurant[];
  theme?: "light" | "dark";
};

function formatCategory(category: string) {
  return category
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function RestaurantExplorer({
  restaurants,
  theme = "light",
}: RestaurantExplorerProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [onlyMapped, setOnlyMapped] = useState(false);
  const [mounted, setMounted] = useState(false);
  const isDark = theme === "dark";

  const categories = useMemo(() => {
    const unique = Array.from(new Set(restaurants.map((r) => r.category)));
    return unique;
  }, [restaurants]);

  const filtered = useMemo(() => {
    return restaurants.filter((restaurant) => {
      if (
        selectedCategories.length > 0 &&
        !selectedCategories.includes(restaurant.category)
      ) {
        return false;
      }
      if (onlyMapped && !restaurant.location) return false;
      return true;
    });
  }, [restaurants, selectedCategories, onlyMapped]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const MapView = useMemo(
    () =>
      dynamic(() => import("./map-view").then((mod) => mod.MapViewWithSizeFix), {
        ssr: false,
      }),
    [],
  );

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) => {
      if (prev.includes(cat)) {
        return prev.filter((c) => c !== cat);
      }
      return [...prev, cat];
    });
  };

  const clearCategories = () => setSelectedCategories([]);

  const allActive = selectedCategories.length === 0;

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex flex-wrap gap-2">
          <FilterChip
            active={allActive}
            label="All"
            onClick={clearCategories}
            theme={theme}
          />
          {categories.map((cat) => (
            <FilterChip
              key={cat}
              active={selectedCategories.includes(cat)}
              label={formatCategory(cat)}
              onClick={() => toggleCategory(cat)}
              onRemove={() =>
                setSelectedCategories((prev) =>
                  prev.filter((c) => c !== cat),
                )
              }
              theme={theme}
            />
          ))}
        </div>
        <div
          className={`ml-auto flex items-center gap-2 text-sm ${
            isDark ? "text-white/80" : "text-neutral-700"
          }`}
        >
          <label className="inline-flex cursor-pointer items-center gap-2">
            <input
              type="checkbox"
              className="h-4 w-4 cursor-pointer accent-black"
              checked={onlyMapped}
              onChange={(e) => setOnlyMapped(e.target.checked)}
            />
            Show only with map pins
          </label>
        </div>
      </div>

      {mounted ? (
        <MapView
          restaurants={filtered}
          variant={isDark ? "dark" : "light"}
        />
      ) : (
        <div className="flex h-[360px] items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm text-white/60">
          Loading map…
        </div>
      )}

      {filtered.length ? (
        <div className="grid w-full gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((restaurant) => (
            <RestaurantCard
              key={restaurant.slug}
              restaurant={restaurant}
              href={`/restaurants/${restaurant.slug}`}
              variant={isDark ? "dark" : "light"}
            />
          ))}
        </div>
      ) : (
        <p className={isDark ? "text-white/70" : "text-neutral-600"}>
          No spots match this filter.
        </p>
      )}
    </div>
  );
}

function FilterChip({
  label,
  active,
  onClick,
  onRemove,
  theme,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  onRemove?: () => void;
  theme: "light" | "dark";
}) {
  const isDark = theme === "dark";
  return (
    <button
      onClick={onClick}
      className={`relative inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm transition ${
        active
          ? isDark
            ? "border-white bg-white text-black shadow-sm shadow-black/30"
            : "border-neutral-900 bg-neutral-900 text-white shadow-sm shadow-black/20"
          : isDark
            ? "border-white/25 bg-white/5 text-white hover:border-white/45"
            : "border-neutral-200 bg-white text-neutral-800 hover:border-neutral-400"
      }`}
      type="button"
    >
      {label}
      {active && onRemove ? (
        <span
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className="absolute flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px] font-semibold leading-none text-white ring-1 ring-white/40"
          style={{ top: -6, right: -6 }}
          aria-label={`Remove ${label}`}
        >
          ×
        </span>
      ) : null}
    </button>
  );
}
