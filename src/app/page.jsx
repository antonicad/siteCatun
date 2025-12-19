'use client';

import { useEffect } from 'react';

import Hero from '@/app/page-components/hero';
import About from '@/app/page-components/about';
import Music from '@/app/page-components/music';
import Concerts from '@/app/page-components/concerts';
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
});

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      <Hero />

      <section id="about" className="scroll-mt-20">
        <About />
      </section>

      <section id="music" className="scroll-mt-20">
        <Music />
      </section>

      <section id="concerts" className="scroll-mt-20">
        <Concerts />
      </section>

<div className="relative z-0">
       <section
      className="
        px-4
        py-12
        md:min-h-screen
        md:flex
        md:items-center
        md:justify-center
      "
    >
      <div className="w-full max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-8">
          Pe unde a ajuns muzica noastră?
        </h2>
        <Map />
      </div>
    </section>
</div>
    </>
  );
}
