import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getPublishedRestaurantBySlug,
  getPublishedRestaurants,
} from "@/data/restaurants";

type RestaurantPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getPublishedRestaurants().map(({ slug }) => ({ slug }));
}

function formatCategory(category: string) {
  return category
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export default function RestaurantPage({ params }: RestaurantPageProps) {
  const restaurant = getPublishedRestaurantBySlug(params.slug);

  if (!restaurant) {
    notFound();
  }

  const categoryLabel = formatCategory(restaurant.category);

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      <section className="mx-auto flex max-w-4xl flex-col gap-10 px-6 py-16 sm:px-10 sm:py-20">
        <header className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">
            {categoryLabel}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {restaurant.name}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600">
            <Link
              href="/restaurants"
              className="underline decoration-neutral-300 underline-offset-4 transition hover:decoration-neutral-900"
            >
              Back to list
            </Link>
          </div>
        </header>

        <div className="flex flex-col gap-5 text-lg leading-relaxed text-neutral-700 sm:text-xl">
          <p>{restaurant.longDescription}</p>
        </div>

        <div className="grid gap-3 rounded-2xl border border-dashed border-neutral-200 bg-white/80 p-6 text-sm text-neutral-700 sm:text-base">
          <h2 className="text-[11px] uppercase tracking-[0.22em] text-neutral-500">
            Coming soon
          </h2>
          <p>
            Space for photos, maps, and vibe tags. We&apos;ll wire them up once
            the content is ready.
          </p>
        </div>
      </section>
    </main>
  );
}
