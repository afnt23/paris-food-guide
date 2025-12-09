import { RestaurantStatus } from "@/data/restaurants";

type StatusBadgeProps = {
  status: RestaurantStatus;
};

const styles: Record<RestaurantStatus, string> = {
  PUBLISHED:
    "border-emerald-200 bg-emerald-50 text-emerald-800 shadow-[0_0_0_1px_rgba(16,185,129,0.08)]",
  DRAFT:
    "border-amber-200 bg-amber-50 text-amber-800 shadow-[0_0_0_1px_rgba(251,191,36,0.1)]",
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const label = status === "PUBLISHED" ? "Published" : "Draft";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] ${styles[status]}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden />
      {label}
    </span>
  );
}
