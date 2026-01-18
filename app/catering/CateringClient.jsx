"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowLeft, ShieldCheck, Wrench, Clock } from "lucide-react";
import { FaMapMarkerAlt } from "react-icons/fa";

import { models, cateringImages, serviceAreas } from "../../public/assets/assets";

export const metadata = {
  title: "Catering Equipment Repair Services | Commercial Kitchen Specialists | Syntrad UK",
  description:
    "Syntrad UK provides professional catering equipment repair and maintenance services for commercial kitchens. Expert servicing for ovens, fryers, dishwashers, grills, refrigeration units, and more. Fast response, trusted engineers, and premium service across the UK.",
  keywords: [
    "catering equipment repair",
    "commercial kitchen equipment servicing",
    "oven repair",
    "fryer repair",
    "grill maintenance",
    "dishwasher repair",
    "refrigeration unit servicing",
    "commercial kitchen maintenance",
    "emergency catering equipment repair",
    "professional kitchen equipment engineers",
    "trusted catering service UK",
    "fast catering equipment repair",
    "restaurant equipment maintenance",
    "cafe kitchen equipment repair",
    "kitchen appliance repair",
    "food service equipment repair",
    "commercial catering solutions",
    "premium catering equipment service",
    "UK catering equipment specialists",
    "reliable kitchen repair services"
  ],
  openGraph: {
    title: "Catering Equipment Repair Services | Syntrad UK",
    description:
      "Professional catering equipment repair by Syntrad UK. Servicing ovens, fryers, grills, dishwashers, refrigeration units, and more for commercial kitchens. Trusted engineers, fast response, and premium service.",
    url: "https://www.syntradltd.co.uk/catering",
    type: "website",
    images: [
      {
        url: "https://www.syntradltd.co.uk/assets/og-catering.jpg",
        alt: "Syntrad catering equipment repair services",
      },
    ],
  },
};


export default function Catering() {
  const [showRequestQuote, setShowRequestQuote] = useState(false);
  const router = useRouter();

  return (
    <section className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-950/30 via-black to-black text-white">

      {/* HERO */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/mainCatring.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
              Catering Equipment
              <span className="block text-red-600">Repair & Maintenance</span>
            </h1>

            <p className="mt-6 text-lg text-gray-300 max-w-xl">
              Precision repairs for commercial kitchens. Trusted by restaurants,
              hotels, cafés, and food businesses that can’t afford downtime.
            </p>

            {/* Trust Icons */}
            <div className="flex gap-6 mt-8 text-gray-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-red-500" /> Certified Engineers
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-red-500" /> Fast Response
              </div>
              <div className="flex items-center gap-2">
                <Wrench className="text-red-500" /> All Major Brands
              </div>
            </div>

            {/* CTAs */}
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

          {/* Glass Card */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">
            <Image
              src="/assets/mainCatring.jpg"
              alt="Catering Repair"
              width={520}
              height={360}
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>


      <div className="max-w-7xl mx-auto px-6 py-24 bg-black ">
        <h2 className="text-4xl font-bold text-center mb-14">
          Equipment We Specialise In
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {models.map((model, i) => (
            <div
              key={i}
              className="
          group
          bg-gradient-to-br from-black via-[#1a0000] to-black
          border-l-4 border-red-600
          border border-neutral-800 border-l-red-600
          rounded-xl
          p-6
          h-full
          
    min-h-[300px]
          flex flex-col items-center justify-between
          transition
          hover:shadow-lg hover:shadow-red-600/30
        "
            >


              <div className="relative w-full h-[160px] flex items-center justify-center overflow-hidden">
                <Image
                  src={cateringImages[i]}
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
              desc: "Reduce downtime and costly breakdowns with scheduled servicing.",
            },
            {
              title: "Commercial Specialists",
              desc: "We work exclusively with professional catering environments.",
            },
            {
              title: "Rapid Callouts",
              desc: "Same-day & emergency repairs available across London.",
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
              initialService="Catering Equipment Service"
              onClose={() => setShowRequestQuote(false)}
            />
          </div>
        </div>
      )}
    </section>
  );
}
