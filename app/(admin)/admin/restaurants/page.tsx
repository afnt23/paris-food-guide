import { RestaurantCard } from "@/components/restaurant-card";
import { restaurants } from "@/data/restaurants";

export const metadata = {
  title: "Admin · Restaurants",
};

export default function AdminRestaurantsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <p className="text-[11px] uppercase tracking-[0.22em] text-neutral-500">
          All entries
        </p>
        <h2 className="text-3xl font-semibold tracking-tight">Restaurants</h2>
        <p className="text-neutral-600">
          Drafts stay inside; published entries are live on the public list.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.slug}
            restaurant={restaurant}
            href={`/admin/restaurants/${restaurant.slug}`}
            showStatus
          />
        ))}
      </div>
    </div>
  );
}
