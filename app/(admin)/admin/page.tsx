import Link from "next/link";

export const metadata = {
  title: "Admin",
};

export default function AdminHomePage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-semibold tracking-tight">
          Admin – Oui Oui Baguette Croissant
        </h2>
        <p className="max-w-2xl text-neutral-600">
          Lightweight control room for OOBC. Drafts stay hidden on the public
          side; everything shows up here.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link
          href="/admin/restaurants"
          className="inline-flex items-center gap-3 rounded-xl border border-neutral-900/15 bg-neutral-50 px-4 py-3 text-sm font-medium transition hover:-translate-y-0.5 hover:border-neutral-900 hover:bg-white"
        >
          Manage restaurants
          <span aria-hidden className="text-base leading-none">
            →
          </span>
        </Link>
      </div>
    </div>
  );
}
