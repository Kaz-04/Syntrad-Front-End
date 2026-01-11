'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ImageSection from '../components/DirectorInfo';
import AboutSection from '../components/AboutSection';
import MultiServiceUI from '../components/MultiService';
import ReviewCarousel from '../components/Review';



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
