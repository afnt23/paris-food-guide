"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function HeroLogo() {
  const [enlarged, setEnlarged] = useState(true);
  const [animateIn, setAnimateIn] = useState(true);

  const openLogo = () => {
    setEnlarged(true);
    requestAnimationFrame(() => setAnimateIn(true));
  };

  const closeLogo = () => {
    setAnimateIn(false);
    setEnlarged(false);
  };

  return (
    <>
      <button
        onClick={openLogo}
        className="focus:outline-none"
        aria-label="Open logo"
      >
        <Image
          src="/oobc-logo.png"
          alt="Oui Oui Baguette Croissant logo"
          width={112}
          height={112}
          className="h-28 w-28 object-contain"
          priority
        />
      </button>
      {enlarged ? (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity duration-700 ${
            animateIn ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeLogo}
          role="presentation"
        >
          <div className="focus:outline-none">
            <Image
              src="/oobc-logo.png"
              alt="Oui Oui Baguette Croissant logo"
              width={320}
              height={320}
              className={`h-72 w-72 transform object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)] transition-transform duration-1400 ease-out ${
                animateIn ? "scale-110" : "scale-50"
              }`}
              priority
            />
          </div>
        </div>
      ) : null}
    </>
  );
}

export default function HomePage() {
  const [viewportHeight, setViewportHeight] = useState<number | null>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (typeof window === "undefined") return;
      const vv = window.visualViewport;
      const height = vv?.height ?? window.innerHeight;
      setViewportHeight(height);
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    window.addEventListener("orientationchange", updateHeight);
    return () => {
      window.removeEventListener("resize", updateHeight);
      window.removeEventListener("orientationchange", updateHeight);
    };
  }, []);

  return (
    <main
      className="relative min-h-screen min-h-[100svh] min-h-[100dvh] overflow-hidden bg-black text-white"
      style={viewportHeight ? { height: `${viewportHeight}px` } : undefined}
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        style={viewportHeight ? { height: `${viewportHeight}px` } : undefined}
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      <div className="relative flex min-h-[100dvh] flex-col justify-between px-6 pb-[max(env(safe-area-inset-bottom),3.5rem)] pt-[max(env(safe-area-inset-top),1rem)] sm:px-10 sm:pb-[max(env(safe-area-inset-bottom),4rem)] sm:pt-[max(env(safe-area-inset-top),1.5rem)] md:px-16">
        <header className="flex items-center justify-start text-[11px] uppercase tracking-[0.28em] text-neutral-300">
          <div className="flex items-center gap-3">
            <HeroLogo />
          </div>
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
              <span className="text-black">Starving?</span>
              <span className="h-px w-10 bg-neutral-900 transition-all group-hover:w-14" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
