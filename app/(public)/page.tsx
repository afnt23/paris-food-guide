import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover brightness-[0.7]"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70" />

      <div className="relative flex min-h-screen flex-col justify-between px-6 py-10 sm:px-10 md:px-16">
        <header className="flex items-center justify-between text-[11px] uppercase tracking-[0.28em] text-neutral-300">
          <div className="flex items-center gap-3">
            <Image
              src="/oobc-logo.png"
              alt="Oui Oui Baguette Croissant logo"
              width={40}
              height={40}
              className="h-9 w-9 object-contain"
              priority
            />
            <span>Oui Oui Baguette Croissant</span>
          </div>
          <span className="text-neutral-400">Only the good rooms</span>
        </header>

        <div className="flex flex-col gap-6 pb-8 sm:gap-8 sm:pb-14">
          <p className="max-w-xl text-sm text-neutral-200 sm:text-base">
            A cinematic list of where we actually eat and drink in Paris. No
            fluff, just rooms with feeling.
          </p>
          <div className="flex flex-wrap gap-3 text-sm sm:text-base">
            <Link
              href="/restaurants"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-neutral-950 shadow-lg shadow-black/40 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              See the spots
              <span className="h-px w-10 bg-neutral-900 transition-all group-hover:w-14" />
            </Link>
            <Link
              href="/admin"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-4 py-3 text-neutral-50 transition duration-300 hover:border-white hover:text-white"
            >
              Admin
              <span className="text-lg leading-none">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
