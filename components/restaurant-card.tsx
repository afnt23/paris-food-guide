import Image from "next/image";
import { Restaurant } from "@/data/restaurants";
import { StatusBadge } from "./status-badge";

type RestaurantCardProps = {
  restaurant: Restaurant;
  href: string;
  showStatus?: boolean;
  variant?: "light" | "dark";
};

function formatCategory(category: string) {
  return category
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function buildMapsUrl(restaurant: Restaurant) {
  const query = restaurant.location?.area
    ? `${restaurant.name} ${restaurant.location.area}`
    : restaurant.name;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    query,
  )}`;
}

export function RestaurantCard({
  restaurant,
  showStatus = false,
  variant = "light",
}: RestaurantCardProps) {
  const isDark = variant === "dark";
  const hasPhoto = Boolean(restaurant.photo);

  const cardClasses = isDark
    ? "border-white/10 bg-white/5 text-white shadow-none hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(0,0,0,0.45)]"
    : "border-neutral-200/80 bg-white/90 text-neutral-900 shadow-sm shadow-black/5 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/10";

  const categoryClasses = isDark ? "text-white/80" : "text-neutral-900";

  const titleClasses = isDark ? "text-white" : "text-neutral-950";

  const descriptionClasses = isDark ? "text-white/70" : "text-neutral-600";
  const linkClasses = isDark || hasPhoto ? "text-white" : "text-neutral-900";

  return (
    <article
      className={`group relative flex flex-col gap-3 overflow-hidden rounded-2xl border p-6 transition duration-300 ${cardClasses}`}
    >
      {hasPhoto ? (
        <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
          <Image
            src={restaurant.photo as string}
            alt={restaurant.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw"
            className="object-cover"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>
      ) : null}

      <div className="relative z-10 flex flex-col gap-3">
        <div
          className={`flex items-center justify-between gap-4 text-[11px] uppercase tracking-[0.2em] ${categoryClasses} ${
            hasPhoto ? "group-hover:text-white" : ""
          }`}
        >
          <span>{formatCategory(restaurant.category)}</span>
          {showStatus ? <StatusBadge status={restaurant.status} /> : null}
        </div>

        <div className="flex flex-col gap-2">
          <h3
            className={`text-xl font-semibold ${titleClasses} ${
              hasPhoto ? "group-hover:text-white" : ""
            }`}
          >
            {restaurant.name}
          </h3>
          <p
            className={`text-sm leading-relaxed ${descriptionClasses} ${
              hasPhoto ? "group-hover:text-white/85" : ""
            }`}
          >
            {restaurant.shortDescription}
          </p>
        </div>

        <a
          href={buildMapsUrl(restaurant)}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-xs font-semibold uppercase tracking-[0.18em] underline-offset-4 transition hover:underline ${linkClasses}`}
        >
          View on Google Maps
        </a>
      </div>
    </article>
  );
}
