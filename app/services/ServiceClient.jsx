"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";

import { serviceCards } from "../../public/assets/assets";
import Offer from "../components/Offer";
import RequestQuoteModal from "../components/RequestQuote";

gsap.registerPlugin(ScrollTrigger);

export const servicesPageDescriptions = {
  electrical:
    "Professional design, diagnostics, and repair of electrical systems for residential, commercial, and industrial needs. We ensure safety, efficiency, and compliance in every project.",
  electronics:
    "Expert repair and maintenance for a wide range of electronic devices and components. From diagnostics to precision fixes, we restore functionality with accuracy and care.",
  coffee:
    "Authorised service and expert repairs for premium coffee machines, including SAGE models. Fast, reliable solutions to keep your machine brewing at its best.",
  gym:
    "Specialised repair and maintenance for treadmills, cross trainers, and other fitness machines. We ensure safe, smooth, and reliable performance for home and commercial gyms.",
  catering:
    "Reliable repair and servicing for commercial kitchen and catering equipment. We minimise downtime and keep your appliances running efficiently and safely.",
  medical:
    "Precise diagnostics, repair, and maintenance for non-critical medical devices. We prioritise reliability, safety, and compliance to support healthcare environments.",
  electromechanical:
    "Expert repair and maintenance of systems combining electrical and mechanical components. We ensure smooth, reliable operation across a range of industrial and commercial equipment.",
  clock:
    "Professional repair and servicing for all types of mechanical clocks. We ensure precise timekeeping and careful handling of delicate movements",
  network:
    "Reliable installation, maintenance, and troubleshooting of wired and wireless networks to keep your home or business connected and secure.",
  smarthome:
    "Installation and support for smart home technologies that enhance comfort, security, and energy efficiency in your living or working space.",
};

export default function ServicesClient() {
  const [selectedService, setSelectedService] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-card", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".service-grid",
          start: "top 85%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen text-white bg-gradient-to-br from-red-600 via-black to-black py-20">
      <Offer />
      <h1 className="text-4xl font-semibold text-center mb-16 mt-2">
        Our Services
      </h1>

      <div className="service-grid max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-8">
        {serviceCards.map((service) => (
          <div
            key={service.title}
            className="service-card relative rounded-xl bg-[#0f0f0f] border border-[#1f1f1f] h-[420px] flex flex-col"
          >
            <span className="absolute left-0 top-0 h-full w-[3px] bg-red-600" />

            <Link href={service.link} className="flex-1 p-6 pl-8 block">
              <Image
                src={service.image}
                alt={service.title}
                width={72}
                height={72}
                className="mb-6"
              />
              <h2 className="text-lg font-semibold">{service.title}</h2>
              <p className="text-sm text-gray-400 mt-3">
                {servicesPageDescriptions[service.id]}
              </p>
            </Link>

            <div className="p-6 pt-0">
              <button
                onClick={() => setSelectedService(service.title)}
                className="w-full rounded-md py-2.5 border border-red-600 text-red-500 hover:bg-red-600 hover:text-white"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedService && (
        <RequestQuoteModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
}
