import { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StatusBadge } from "@/components/status-badge";
import { getRestaurantBySlug, restaurants } from "@/data/restaurants";

type AdminRestaurantPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return restaurants.map(({ slug }) => ({ slug }));
}

function formatCategory(category: string) {
  return category
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function Field({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="flex flex-col gap-2 rounded-xl border border-neutral-200 bg-white/80 p-4">
      <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">
        {label}
      </p>
      <div className="text-neutral-900">{value}</div>
    </div>
  );
}

export default function AdminRestaurantPage({
  params,
}: AdminRestaurantPageProps) {
  const restaurant = getRestaurantBySlug(params.slug);

  if (!restaurant) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex flex-col gap-3">
          <p className="text-[11px] uppercase tracking-[0.22em] text-neutral-500">
            Restaurant
          </p>
          <h1 className="text-3xl font-semibold tracking-tight">
            {restaurant.name}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-600">
            <StatusBadge status={restaurant.status} />
            <span className="rounded-full bg-neutral-100 px-3 py-1 text-neutral-800">
              {formatCategory(restaurant.category)}
            </span>
            <span className="text-neutral-500">Slug: {restaurant.slug}</span>
          </div>
        </div>

        <Link
          href="/admin/restaurants"
          className="inline-flex items-center gap-2 rounded-full border border-neutral-900/15 px-4 py-2 text-sm font-medium transition hover:-translate-y-0.5 hover:border-neutral-900 hover:text-neutral-950"
        >
          Back to list
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Name" value={restaurant.name} />
        <Field label="Slug" value={restaurant.slug} />
        <Field label="Category" value={formatCategory(restaurant.category)} />
        <Field
          label="Status"
          value={<StatusBadge status={restaurant.status} />}
        />
      </div>

      <Field label="Short description" value={restaurant.shortDescription} />

      <Field
        label="Long description"
        value={
          <p className="leading-relaxed text-neutral-700">
            {restaurant.longDescription}
          </p>
        }
      />
    </div>
  );
}
