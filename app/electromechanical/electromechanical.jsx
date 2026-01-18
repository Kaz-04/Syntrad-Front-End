"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowLeft, ShieldCheck, Wrench, Clock } from "lucide-react";
import { FaMapMarkerAlt } from "react-icons/fa";

import RequestQuote from "../components/RequestQuote";

export const metadata = {
  title: "Electromechanical Repair & Maintenance Services | Syntrad UK",
  description:
    "Syntrad UK provides professional electromechanical repair and maintenance services for industrial machinery, motors, pumps, generators, and other equipment. Fast, reliable, and certified engineers for businesses and factories across the UK.",
  keywords: [
    "electromechanical repair",
    "electromechanical maintenance",
    "industrial machinery repair",
    "motor repair services",
    "pump maintenance and repair",
    "generator servicing",
    "mechanical and electrical equipment repair",
    "electromechanical troubleshooting",
    "factory equipment maintenance",
    "commercial electromechanical services",
    "preventive maintenance for machinery",
    "electromechanical engineers UK",
    "industrial equipment repair UK",
    "machine servicing and repair",
    "fast electromechanical repair",
    "reliable industrial equipment service",
    "electromechanical installation and maintenance",
    "industrial machinery servicing",
    "electromechanical solutions",
    "professional electromechanical service"
  ],
  openGraph: {
    title: "Electromechanical Repair & Maintenance | Syntrad UK",
    description:
      "Professional electromechanical repair and maintenance services by Syntrad UK. Expert servicing for industrial machinery, motors, pumps, generators, and other mechanical & electrical equipment. Fast and reliable service across the UK.",
    url: "https://www.syntradltd.co.uk/electromechanical",
    type: "website",
    images: [
      {
        url: "https://www.syntradltd.co.uk/assets/og-electromechanical.jpg",
        alt: "Syntrad electromechanical repair services",
      },
    ],
  },
};


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


export default function Electromechanical() {
  const [showRequestQuote, setShowRequestQuote] = useState(false);
  const router = useRouter();

  return (
    <section className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-950/30 via-black to-black text-white">


      <div className="relative overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/assets/mainMachine.png')" }}
        />


        <div className="relative max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">


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
