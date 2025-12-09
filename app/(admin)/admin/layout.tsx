import Link from "next/link";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 pb-12 pt-10 sm:px-10 sm:pb-16 sm:pt-12">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-200 pb-6">
          <div className="flex flex-col gap-1">
            <p className="text-[11px] uppercase tracking-[0.22em] text-neutral-500">
              Admin
            </p>
            <h1 className="text-2xl font-semibold leading-tight">
              Paris Food Guide
            </h1>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-900/15 px-4 py-2 text-sm font-medium transition hover:-translate-y-0.5 hover:border-neutral-900 hover:text-neutral-950"
          >
            Back to site
            <span className="text-base leading-none">↗</span>
          </Link>
        </header>

        <main className="pt-8">{children}</main>
      </div>
    </div>
  );
}
