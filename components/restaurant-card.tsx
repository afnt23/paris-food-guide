import Link from "next/link";
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

export function RestaurantCard({
  restaurant,
  href,
  showStatus = false,
  variant = "light",
}: RestaurantCardProps) {
  const isDark = variant === "dark";

  const cardClasses = isDark
    ? "border-white/10 bg-white/5 text-white shadow-none hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(0,0,0,0.45)]"
    : "border-neutral-200/80 bg-white/90 text-neutral-900 shadow-sm shadow-black/5 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/10";

  const categoryClasses = isDark
    ? "text-white/70"
    : "text-neutral-500";

  const titleClasses = isDark
    ? "text-white"
    : "text-neutral-950";

  const descriptionClasses = isDark
    ? "text-white/70"
    : "text-neutral-600";

  const linkClasses = isDark
    ? "text-white"
    : "text-neutral-900";

  const linkBarClasses = isDark
    ? "bg-white"
    : "bg-neutral-900";

  return (
    <article
      className={`group relative flex flex-col gap-3 rounded-2xl border p-6 transition duration-300 ${cardClasses}`}
    >
      <div
        className={`flex items-center justify-between gap-4 text-[11px] uppercase tracking-[0.2em] ${categoryClasses}`}
      >
        <span>{formatCategory(restaurant.category)}</span>
        {showStatus ? <StatusBadge status={restaurant.status} /> : null}
      </div>

      <div className="flex flex-col gap-2">
        <h3 className={`text-xl font-semibold ${titleClasses}`}>
          {restaurant.name}
        </h3>
        <p className={`text-sm leading-relaxed ${descriptionClasses}`}>
          {restaurant.shortDescription}
        </p>
      </div>

      <Link
        href={href}
        className={`mt-2 inline-flex items-center gap-3 text-sm font-medium ${linkClasses}`}
      >
        <span>Open</span>
        <span
          className={`h-px w-10 transition-all duration-300 group-hover:w-16 ${linkBarClasses}`}
        />
      </Link>
    </article>
  );
}
