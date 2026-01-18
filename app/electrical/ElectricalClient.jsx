"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowLeft, ShieldCheck, Wrench, Clock } from "lucide-react";
import { FaMapMarkerAlt } from "react-icons/fa";

import RequestQuote from "../components/RequestQuote";

/* ---------------- SEO ---------------- */
export const metadata = {
  title: "Electrical Engineering Services | Syntrad",
  description:
    "Certified electrical engineering services for residential & commercial properties. Rewiring, EV chargers, fire alarms & more.",
};

/* ---------------- DATA ---------------- */
const models = [
  "Full Rewiring",
  "Fuse Board Upgrades",
  "Lighting Design",
  "EV Charger Install",
  "Emergency Repairs",
  "Inspection & Testing",
  "Fire Alarm Systems",
  "Security Lighting",
  "Data & Network Wiring",
];

const electricalImages = [
  "/assets/fullRewire.jpg",
  "/assets/fuseboardUpgrade.jpeg",
  "/assets/lightning.webp",
  "/assets/EV-Charger-Installation.jpg",
  "/assets/emergency.jpg",
  "/assets/testing.jpg",
  "/assets/firealarm.jpg",
  "/assets/home-lighting-security.jpg",
  "/assets/dataWiring.jpg",
];

const serviceAreas = [
  "London",
  "Manchester",
  "Birmingham",
  "Leeds",
  "Glasgow",
  "Liverpool",
];

/* ---------------- PAGE ---------------- */
export default function Electrical() {
  const [showRequestQuote, setShowRequestQuote] = useState(false);
  const router = useRouter();

  return (
    <section className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-950/30 via-black to-black text-white">

      {/* HERO */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/mainElectric.png')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">

          {/* TEXT */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
              Electrical
              <span className="block text-red-600">
                Engineering Services
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-300 max-w-xl">
              Safe, certified, and future-ready electrical solutions for homes
              and commercial properties. Designed for performance, compliance,
              and efficiency.
            </p>

            {/* TRUST ICONS */}
            <div className="flex gap-6 mt-8 text-gray-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-red-500" /> Certified Engineers
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-red-500" /> Rapid Response
              </div>
              <div className="flex items-center gap-2">
                <Wrench className="text-red-500" /> Residential & Commercial
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => setShowRequestQuote(true)}
                className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-xl text-lg font-semibold shadow-lg shadow-red-600/30 transition"
              >
                Book an Electrician
              </button>

              <button
                onClick={() => router.push("/")}
                className="px-8 py-4 rounded-xl border border-white/20 hover:bg-white/10 transition flex items-center gap-2"
              >
                <ArrowLeft size={18} /> Back
              </button>
            </div>
          </div>

          {/* GLASS CARD */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">
            <Image
              src="/assets/mainElectric.png"
              alt="Electrical Services"
              width={520}
              height={360}
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* WHAT WE DO */}
      <div className="max-w-7xl mx-auto px-6 py-24 bg-black">
        <h2 className="text-4xl font-bold text-center mb-14">
          Electrical Services We Provide
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {models.map((model, i) => (
            <div
              key={i}
              className="
                group
                bg-gradient-to-br from-black via-[#1a0000] to-black
                border-l-4 border-red-600
                border border-neutral-800
                rounded-xl
                p-6
                min-h-[300px]
                flex flex-col items-center justify-between
                transition
                hover:shadow-lg hover:shadow-red-600/30
              "
            >
              <div className="relative w-full h-[160px] flex items-center justify-center overflow-hidden">
                <Image
                  src={electricalImages[i]}
                  alt={model}
                  fill
                  className="object-contain"
                />
              </div>

              <h3 className="mt-4 text-center text-lg font-semibold text-gray-200">
                {model}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICE VALUE */}
      <div className="bg-gradient-to-b from-black to-red-950/20 py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Residential Expertise",
              desc:
                "Complete electrical solutions for homes, renovations & new builds.",
            },
            {
              title: "Commercial Compliance",
              desc:
                "3-phase systems, testing & certification for businesses.",
            },
            {
              title: "Emergency Callouts",
              desc:
                "Fast response for urgent electrical faults & failures.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-3 text-red-500">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICE AREAS */}
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold mb-8">Service Areas</h2>

        <div className="flex flex-wrap justify-center gap-4">
          {serviceAreas.map((area, i) => (
            <span
              key={i}
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-lg"
            >
              <FaMapMarkerAlt className="text-red-500" /> {area}
            </span>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {showRequestQuote && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
          <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl">
            <RequestQuote
              isModal
              initialService="Electrical Engineering"
              onClose={() => setShowRequestQuote(false)}
            />
          </div>
        </div>
      )}
    </section>
  );
}
