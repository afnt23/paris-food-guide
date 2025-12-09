import { RestaurantExplorer } from "@/components/restaurant-explorer";
import { getPublishedRestaurants } from "@/data/restaurants";

export const metadata = {
  title: "Restaurants",
};

export default function RestaurantsPage() {
  const publishedRestaurants = getPublishedRestaurants();

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-16 sm:px-10 sm:py-20">
        <header className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.24em] text-white/60">
            Published spots
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Restaurants
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-white/70">
            A tightly edited list of Paris rooms we actually return to—bistro
            counters, natural wine bars, ramen joints, pastry windows.
          </p>
        </header>

        <RestaurantExplorer restaurants={publishedRestaurants} theme="dark" />
      </section>
    </main>
  );
}
