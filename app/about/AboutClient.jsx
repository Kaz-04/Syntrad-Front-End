'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ImageSection from '../components/DirectorInfo';
import AboutSection from '../components/AboutSection';
import MultiServiceUI from '../components/MultiService';
import ReviewCarousel from '../components/Review';

export const metadata = {
  title: "About Syntrad UK | Expert Repair & Maintenance Services",
  description:
    "Learn about Syntrad UK, a trusted provider of professional repair and maintenance services. Serving homes, businesses, and commercial clients with electrical, electronics, gym, coffee machine, medical equipment, smart home, and EV charger solutions across the UK.",
  keywords: [
    "Syntrad",
    "about Syntrad",
    "professional repair services",
    "maintenance services",
    "electrical services",
    "electronics repair",
    "gym equipment repair",
    "coffee machine repair",
    "medical equipment repair",
    "smart home installation",
    "EV charger installation",
    "trusted service provider",
    "certified engineers",
    "reliable repair company",
    "UK service experts",
    "commercial and residential repair",
    "professional maintenance solutions",
    "UK equipment servicing",
    "full-service repair company",
    "company history Syntrad"
  ],
  openGraph: {
    title: "About Syntrad UK – Trusted Repair & Maintenance Experts",
    description:
      "Discover Syntrad UK, a professional repair and maintenance company providing certified services for electrical, electronics, gym, coffee machine, medical equipment, smart home, and EV charger solutions across the UK.",
    url: "https://www.syntradltd.co.uk/about",
    type: "website",
    images: [
      {
        url: "https://www.syntradltd.co.uk/assets/og-about.jpg",
        alt: "About Syntrad UK – professional repair and maintenance services",
      },
    ],
  },
};

gsap.registerPlugin(ScrollTrigger);

export default function AboutClient() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('.animate-section');

      gsap.set(sections, { opacity: 0, y: 50 });

      sections.forEach((section, index) => {
        ScrollTrigger.create({
          trigger: section,
          start: 'top bottom-=100',
          onEnter: () => {
            gsap.to(section, {
              opacity: 1,
              y: 0,
              duration: 0.4,
              delay: index * 0.1,
              ease: 'power2.out',
            });
          },
          onLeaveBack: () => {
            gsap.to(section, {
              opacity: 0,
              y: 30,
              duration: 0.3,
              ease: 'power2.in',
            });
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={containerRef}
      className="relative min-h-screen bg-black overflow-hidden"
    >
      <section className="animate-section will-change-transform">
        <AboutSection/>
      </section>

      <section className="animate-section will-change-transform">
        <ImageSection/>
      </section>

      <section className="animate-section will-change-transform">
        <MultiServiceUI/>
      </section>

      <section className="animate-section will-change-transform">
        <ReviewCarousel/>
      </section>
    </main>
  );
}
