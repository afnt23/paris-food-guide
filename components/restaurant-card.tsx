import Link from "next/link";
import { Restaurant } from "@/data/restaurants";
import { StatusBadge } from "./status-badge";

type RestaurantCardProps = {
  restaurant: Restaurant;
  href: string;
  showStatus?: boolean;
};

function formatCategory(category: string) {
  return category
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function RestaurantCard({
  restaurant,
  href,
  showStatus = false,
}: RestaurantCardProps) {
  return (
    <article className="group relative flex flex-col gap-3 rounded-2xl border border-neutral-200/80 bg-white/90 p-6 shadow-sm shadow-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/10">
      <div className="flex items-center justify-between gap-4 text-[11px] uppercase tracking-[0.2em] text-neutral-500">
        <span>{formatCategory(restaurant.category)}</span>
        {showStatus ? <StatusBadge status={restaurant.status} /> : null}
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-neutral-950">
          {restaurant.name}
        </h3>
        <p className="text-sm leading-relaxed text-neutral-600">
          {restaurant.shortDescription}
        </p>
      </div>

      <Link
        href={href}
        className="mt-2 inline-flex items-center gap-3 text-sm font-medium text-neutral-900"
      >
        <span>Open</span>
        <span className="h-px w-10 bg-neutral-900 transition-all duration-300 group-hover:w-16" />
      </Link>
    </article>
  );
}
