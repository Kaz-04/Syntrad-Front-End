"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowLeft, ShieldCheck, Clock, Wrench } from "lucide-react";
import { FaMapMarkerAlt } from "react-icons/fa";
import RequestQuote from "../components/RequestQuote";

export const metadata = {
  title: "Gym & Fitness Equipment Repair Services | Syntrad UK",
  description:
    "Syntrad UK provides professional gym and fitness equipment repair, maintenance, and servicing. Expert treadmill, elliptical, and multi-gym repairs, preventive maintenance, and fast, reliable support for gyms, fitness centers, and home gyms across the UK.",
  keywords: [
    "gym equipment repair",
    "fitness equipment servicing",
    "treadmill repair",
    "elliptical machine service",
    "multi-gym maintenance",
    "commercial gym equipment repair",
    "home gym equipment service",
    "exercise machine repair",
    "fitness center maintenance",
    "gym equipment troubleshooting",
    "preventive maintenance for gyms",
    "gym repair services UK",
    "professional gym equipment engineers",
    "reliable fitness equipment repair",
    "gym machine calibration",
    "gym equipment replacement parts",
    "gym equipment servicing UK",
    "fitness machine repair specialists",
    "fast gym equipment repair",
    "trusted gym service providers"
  ],
  openGraph: {
    title: "Gym Equipment Repair & Maintenance | Syntrad UK",
    description:
      "Expert gym and fitness equipment repair, maintenance, and servicing by Syntrad UK. Trusted treadmill, elliptical, and multi-gym repair services for commercial and home gyms across the UK.",
    url: "https://www.syntradltd.co.uk/gym",
    type: "website",
    images: [
      {
        url: "https://www.syntradltd.co.uk/assets/og-gym.jpg",
        alt: "Syntrad gym and fitness equipment repair services",
      },
    ],
  },
};

export default function GymPage() {
  const [showRequestQuote, setShowRequestQuote] = useState(false);
  const router = useRouter();

  const models = [
    "Treadmill Electronics Repair",
    "Motor Diagnostics & Replacement",
    "Control Panel Repair",
    "Belt Alignment & Replacement",
    "Elliptical Machine Repair",
    "Exercise Bike Repair",
    "Gym Equipment Supply",
    "Gym Equipment Assembly",
  ];

  const gymImages = [
    "/assets/treadmillRepair.jpg",
    "/assets/motor.webp",
    "/assets/controlPanel.jpeg",
    "/assets/beltBeplacement.webp",
    "/assets/elliptical.jpeg",
    "/assets/excersiseBike.jpeg",
    "/assets/gymSuppply.jpeg",
    "/assets/assambly.webp",
  ];

  const serviceAreas = [
    "London",
    "Manchester",
    "Birmingham",
    "Leeds",
    "Glasgow",
    "Liverpool",
  ];

  return (
    <section className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-950/30 via-black to-black text-white">

      
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/mainGym.png')] bg-cover bg-center opacity-20" />

        <div className="relative max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">

          
          <div>
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
              Gym Equipment
              <span className="block text-red-600">Repair & Maintenance</span>
            </h1>

            <p className="mt-6 text-lg text-gray-300 max-w-xl">
              Specialist repairs for treadmills and fitness machines.
              Trusted by gyms, studios, and home users who need reliable equipment.
            </p>

            
            <div className="flex gap-6 mt-8 text-gray-300 flex-wrap">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-red-500" /> Certified Technicians
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-red-500" /> Fast Callouts
              </div>
              <div className="flex items-center gap-2">
                <Wrench className="text-red-500" /> All Gym Brands
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
              src="/assets/mainGym.png"
              alt="Gym Equipment Repair"
              width={520}
              height={360}
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>

      
      <div className="max-w-7xl mx-auto px-6 py-24 bg-black">
        <h2 className="text-4xl font-bold text-center mb-14">
          Equipment We Repair
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
                  src={gymImages[i]}
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
              desc: "Keep equipment running smoothly and extend its lifespan.",
            },
            {
              title: "Commercial & Home Gyms",
              desc: "From fitness studios to home gyms and leisure centres.",
            },
            {
              title: "Rapid Repairs",
              desc: "Fast response times to minimise downtime.",
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
              initialService="Gym Equipment Repair"
              onClose={() => setShowRequestQuote(false)}
            />
          </div>
        </div>
      )}
    </section>
  );
}
