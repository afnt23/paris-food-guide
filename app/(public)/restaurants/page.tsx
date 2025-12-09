import { RestaurantCard } from "@/components/restaurant-card";
import { getPublishedRestaurants } from "@/data/restaurants";

export const metadata = {
  title: "Restaurants",
};

export default function RestaurantsPage() {
  const publishedRestaurants = getPublishedRestaurants();

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      <section className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-16 sm:px-10 sm:py-20">
        <header className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">
            Published spots
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Restaurants
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-neutral-600">
            A tightly edited list of Paris rooms we actually return to—bistro
            counters, natural wine bars, ramen joints, pastry windows.
          </p>
        </header>

        {publishedRestaurants.length ? (
          <div className="grid gap-6 sm:grid-cols-2">
            {publishedRestaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.slug}
                restaurant={restaurant}
                href={`/restaurants/${restaurant.slug}`}
              />
            ))}
          </div>
        ) : (
          <p className="text-neutral-600">No restaurants published yet.</p>
        )}
      </section>
    </main>
  );
}
