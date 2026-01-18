"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowLeft, ShieldCheck, Wrench, Clock } from "lucide-react";
import { FaMapMarkerAlt } from "react-icons/fa";

import RequestQuote from "../components/RequestQuote";

/* ---------------- DATA ---------------- */
const models = [
  "Electric Motor Repair",
  "Industrial Pump Servicing",
  "Gearbox & Actuator Repairs",
  "Control Panel Diagnostics",
  "Ventilation Motor Repairs",
  "Servo Motor Reconditioning",
  "Industrial Robotics Repair",
];

const images = [
  "/assets/moter.webp",
  "/assets/industrialPumps.jpeg",
  "/assets/gearbox.jpeg",
  "/assets/controlPanel.jpg",
  "/assets/fanRepair.jpg",
  "/assets/servo.jpeg",
  "/assets/RoboticRepair2.jpg",
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
export default function Electromechanical() {
  const [showRequestQuote, setShowRequestQuote] = useState(false);
  const router = useRouter();

  return (
    <section className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-950/30 via-black to-black text-white">

      {/* ================= HERO (IDENTICAL TO CATERING) ================= */}
      <div className="relative overflow-hidden">
        {/* BACKGROUND IMAGE LAYER */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/assets/mainMachine.png')" }}
        />

        {/* CONTENT */}
        <div className="relative max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">

          {/* TEXT */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
              Electromechanical
              <span className="block text-red-600">
                Repair & Maintenance
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-300 max-w-xl">
              Precision repair and maintenance for industrial electromechanical
              systems. Trusted by factories, warehouses, and commercial facilities
              where downtime is not an option.
            </p>

            {/* TRUST ICONS */}
            <div className="flex gap-6 mt-8 text-gray-300 flex-wrap">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-red-500" /> Certified Engineers
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-red-500" /> Fast Response
              </div>
              <div className="flex items-center gap-2">
                <Wrench className="text-red-500" /> Industrial Specialists
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

          {/* GLASS IMAGE CARD */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">
            <Image
              src="/assets/mainMachine.png"
              alt="Electromechanical Repair"
              width={520}
              height={360}
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
      {/* ================= END HERO ================= */}

      {/* WHAT WE REPAIR (IDENTICAL CARD UI) */}
      <div className="max-w-7xl mx-auto px-6 py-24 bg-black">
        <h2 className="text-4xl font-bold text-center mb-14">
          Equipment We Specialise In
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {models.map((model, i) => (
            <div
              key={i}
              className="
                bg-gradient-to-br from-black via-[#1a0000] to-black
                border border-neutral-800 border-l-4 border-l-red-600
                rounded-xl p-6 min-h-[300px]
                flex flex-col items-center justify-between
                hover:shadow-lg hover:shadow-red-600/30 transition
              "
            >
              <div className="relative w-full h-[160px] flex items-center justify-center">
                <Image
                  src={images[i]}
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
              title: "Preventive Maintenance",
              desc: "Reduce failures and extend equipment life with scheduled servicing.",
            },
            {
              title: "Industrial Expertise",
              desc: "Specialists in motors, pumps, robotics, and control systems.",
            },
            {
              title: "Rapid Callouts",
              desc: "Emergency and same-day support across the UK.",
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
              initialService="Electromechanical Service"
              onClose={() => setShowRequestQuote(false)}
            />
          </div>
        </div>
      )}
    </section>
  );
}
