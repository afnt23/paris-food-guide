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

function formatArrondissement(area?: string) {
  if (!area) return undefined;
  const direct = area.match(/(\d{2})e/);
  if (direct) return direct[1] + "e";
  const postal = area.match(/75(\d{3})/);
  if (postal) {
    const num = parseInt(postal[1], 10);
    if (!Number.isNaN(num) && num > 0 && num <= 20) return `${num}e`;
  }
  return undefined;
}

export function RestaurantCard({
  restaurant,
  showStatus = false,
  variant = "light",
}: RestaurantCardProps) {
  const isDark = variant === "dark";
  const hasPhoto = Boolean(restaurant.photo);
  const arrondissement = formatArrondissement(restaurant.location?.area);

  const cardClasses = isDark
    ? "border-white/10 bg-neutral-900/75 text-white shadow-[0_18px_50px_rgba(0,0,0,0.35)] hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(0,0,0,0.45)]"
    : "border-neutral-200/80 bg-white text-neutral-900 shadow-[0_14px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 hover:shadow-[0_18px_60px_rgba(0,0,0,0.16)]";

  const photoFrameClasses = isDark
    ? "border-white/10 bg-white/5"
    : "border-neutral-200 bg-neutral-50";

  const pillClasses = isDark
    ? "border border-white/30 bg-white/10 text-white"
    : "border border-neutral-900/90 bg-neutral-900 text-white shadow-sm shadow-black/10";

  const mutedText = isDark ? "text-white/80" : "text-neutral-600";

  return (
    <article
      className={`group relative flex h-full flex-col gap-4 rounded-3xl border p-4 sm:p-5 transition duration-400 ${cardClasses}`}
    >
      {hasPhoto ? (
        <div
          className={`relative overflow-hidden rounded-2xl border ${photoFrameClasses}`}
        >
          <div className="relative aspect-[4/3]">
            <Image
              src={restaurant.photo as string}
              alt={restaurant.name}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-[1.02]"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
          </div>
        </div>
      ) : null}

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span
              className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-[0.16em] ${pillClasses}`}
            >
              {formatCategory(restaurant.category)}
            </span>
            {arrondissement ? (
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold uppercase ${
                  isDark
                    ? "border border-white/20 text-white/80"
                    : "border border-neutral-300 text-neutral-700"
                }`}
              >
                {arrondissement}
              </span>
            ) : null}
          </div>
          <div className="flex items-center gap-3">
            <a
              href={buildMapsUrl(restaurant)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full p-1.5 transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
            >
              <span className="sr-only">Open in Google Maps</span>
              <Image
                src="/Google.png"
                alt="Google Maps"
                width={24}
                height={24}
                className="h-6 w-6 object-contain drop-shadow-md"
              />
            </a>
            {showStatus ? <StatusBadge status={restaurant.status} /> : null}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="text-[22px] font-semibold leading-tight sm:text-[24px]">
            {restaurant.name}
          </h3>
        </div>

        <p className={`text-base leading-relaxed ${mutedText}`}>
          {restaurant.shortDescription}
        </p>

        <div className="mt-auto" />
      </div>
    </article>
  );
}
