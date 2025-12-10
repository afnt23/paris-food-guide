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
  const [mounted, setMounted] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(true);
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
      return true;
    });
  }, [restaurants, selectedCategories]);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      const isMobile = window.innerWidth < 640;
      setFiltersOpen(!isMobile);
    }
  }, []);

  const MapView = useMemo(
    () =>
      dynamic(() => import("./map-view").then((mod) => mod.MapView), {
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
      <div className="lg:grid lg:grid-cols-[minmax(0,420px)_1fr] lg:items-start lg:gap-8">
        <div className="lg:sticky lg:top-0 lg:z-20 lg:space-y-6 lg:pb-6 lg:pt-[max(env(safe-area-inset-top),0.5rem)] lg:pr-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between sm:hidden">
              <button
                type="button"
                onClick={() => setFiltersOpen((prev) => !prev)}
                className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm ${
                  isDark
                    ? "border-white/30 bg-white/5 text-white"
                    : "border-neutral-300 bg-white text-neutral-900"
                }`}
              >
                {filtersOpen ? "Hide filters" : "Show filters"}
                {selectedCategories.length > 0 ? (
                  <span className="rounded-full bg-black px-2 py-0.5 text-xs text-white">
                    {selectedCategories.length}
                  </span>
                ) : null}
              </button>
            </div>

            <div className={`${filtersOpen ? "flex" : "hidden"} flex-wrap items-center gap-2 sm:flex`}>
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
        </div>

        {filtered.length ? (
          <div className="mt-6 grid w-full gap-6 sm:grid-cols-2 md:grid-cols-3 lg:mt-0 lg:grid-cols-2 xl:grid-cols-3">
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
