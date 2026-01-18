"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowLeft, ShieldCheck, Wrench, Clock } from "lucide-react";
import { FaMapMarkerAlt } from "react-icons/fa";
import RequestQuote from "../components/RequestQuote";

/* ---------------- SEO ---------------- */
export const metadata = {
  title: "Electronic Repair Services | Affordable and Fast Electronics Repairs",
  description:
    "Get fast and affordable repair services for electronics including laptops, tablets, gaming consoles, audio systems, and more. Certified technicians with warranty available.",
};

/* ---------------- DATA ---------------- */
const models = [
  "Laptop Repair",
  "Tablet Repair",
  "Gaming Console Repair",
  "Audio System Repair",
  "PCB Repair",
  "Projector Repair",
  "Drone Repair",
  "Home Theater Repair",
];

const electronicImages = [
  "/assets/laptop.jpeg",
  "/assets/tablet.jpg",
  "/assets/console.webp",
  "/assets/audio.jpeg",
  "/assets/pcb.jpeg",
  "/assets/projector.jpg",
  "/assets/drone.jpg",
  "/assets/homeTheatre.jpg",
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
export default function Electronic() {
  const [showRequestQuote, setShowRequestQuote] = useState(false);
  const router = useRouter();

  return (
    <section className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-950/30 via-black to-black text-white">

      {/* HERO */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/mainelectronics.png')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">

          {/* TEXT */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
              Electronic
              <span className="block text-red-600">Repair Services</span>
            </h1>

            <p className="mt-6 text-lg text-gray-300 max-w-xl">
              Fast, reliable, and affordable repair services for laptops, tablets, consoles, audio systems, and more. Certified technicians with warranty support.
            </p>

            {/* TRUST ICONS */}
            <div className="flex gap-6 mt-8 text-gray-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-red-500" /> Certified Technicians
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-red-500" /> Quick Diagnostics
              </div>
              <div className="flex items-center gap-2">
                <Wrench className="text-red-500" /> Home & Office
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => setShowRequestQuote(true)}
                className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-xl text-lg font-semibold shadow-lg shadow-red-600/30 transition"
              >
                Book a Repair
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
              src="/assets/mainelectronics.png"
              alt="Electronic Repair"
              width={520}
              height={360}
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* WHAT WE REPAIR */}
      <div className="max-w-7xl mx-auto px-6 py-24 bg-black">
        <h2 className="text-4xl font-bold text-center mb-14">
          Electronics We Repair
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
                  src={electronicImages[i]}
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
              title: "Expert Diagnostics",
              desc:
                "Fast and accurate identification of issues with your devices.",
            },
            {
              title: "Pickup & Delivery",
              desc:
                "Convenient home or office service for hassle-free repairs.",
            },
            {
              title: "Certified Technicians",
              desc:
                "Skilled technicians using genuine parts with warranty support.",
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
              initialService="Electronic Repair"
              onClose={() => setShowRequestQuote(false)}
            />
          </div>
        </div>
      )}
    </section>
  );
}
