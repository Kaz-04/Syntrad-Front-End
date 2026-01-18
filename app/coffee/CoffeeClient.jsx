"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowLeft, ShieldCheck, Wrench, Clock } from "lucide-react";
import { FaMapMarkerAlt } from "react-icons/fa";

import RequestQuote from "../components/RequestQuote";


export const metadata = {
  title: "Coffee Machine Repair Services | Domestic & Commercial | Syntrad UK",
  description:
    "Syntrad UK offers professional coffee machine repair services for domestic and commercial machines. Fast response, genuine parts, certified engineers, preventive maintenance, and emergency repairs across the UK.",
  keywords: [
    "coffee machine repair",
    "domestic coffee machine service",
    "commercial coffee machine repair",
    "espresso machine repair",
    "bean-to-cup machine servicing",
    "coffee machine maintenance",
    "coffee machine troubleshooting",
    "coffee machine spare parts",
    "emergency coffee machine repair",
    "professional coffee machine engineers",
    "fast coffee machine repair",
    "trusted coffee machine service UK",
    "coffee machine installation",
    "cafe coffee machine repair",
    "office coffee machine servicing",
    "coffee machine cleaning and maintenance",
    "barista coffee machine repair",
    "UK coffee machine repair services",
    "genuine coffee machine parts",
    "preventive coffee machine maintenance"
  ],
  openGraph: {
    title: "Coffee Machine Repair Services | Syntrad UK",
    description:
      "Expert coffee machine repair and maintenance services by Syntrad UK. Servicing domestic and commercial machines with fast response, genuine parts, and certified engineers.",
    url: "https://www.syntradltd.co.uk/coffee",
    type: "website",
    images: [
      {
        url: "https://www.syntradltd.co.uk/assets/og-coffee.jpg",
        alt: "Syntrad coffee machine repair services",
      },
    ],
  },
};


const models = [
  "Oracle Touch",
  "Oracle Dual Boiler",
  "Oracle Jet",
  "Barista Touch Impress",
  "Barista Touch",
  "Barista Pro",
  "Barista Express Impress",
  "Barista Express",
  "Duo Temp",
  "Bambino Plus",
  "Bambino",
];

const coffeeImages = [
  "/assets/oracletouch.jpg",
  "/assets/dualboiler.jpg",
  "/assets/oracle.jpg",
  "/assets/baristaTouch.jpeg",
  "/assets/touch-impress.jpeg",
  "/assets/baristapro.jpg",
  "/assets/express.jpeg",
  "/assets/baristaexpress.jpg",
  "/assets/duo-temp.jpeg",
  "/assets/bambino.webp",
  "/assets/bambino.webp",
];

const serviceAreas = [
  "London",
  "Manchester",
  "Birmingham",
  "Leeds",
  "Glasgow",
  "Liverpool",
];


export default function CoffeeRepair() {
  const [showRequestQuote, setShowRequestQuote] = useState(false);
  const router = useRouter();

  return (
    <section className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-950/30 via-black to-black text-white">


      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/mainCoffee.png')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">


          <div>
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
              Coffee Machine
              <span className="block text-red-600">Repair & Servicing</span>
            </h1>

            <p className="mt-6 text-lg text-gray-300 max-w-xl">
              Expert repairs for home & commercial coffee machines. Fast
              diagnostics, genuine parts, and engineers who understand precision.
            </p>


            <div className="flex gap-6 mt-8 text-gray-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-red-500" /> Certified Engineers
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-red-500" /> Fast Turnaround
              </div>
              <div className="flex items-center gap-2">
                <Wrench className="text-red-500" /> All Major Brands
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
              src="/assets/mainCoffee.png"
              alt="Coffee Machine Repair"
              width={520}
              height={360}
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>


      <div className="max-w-7xl mx-auto px-6 py-24 bg-black">
        <h2 className="text-4xl font-bold text-center mb-14">
          Coffee Machines We Repair
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
                  src={coffeeImages[i]}
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
              title: "Fixed Price Diagnostics",
              desc: "Clear pricing with no hidden surprises.",
            },
            {
              title: "Genuine Parts",
              desc: "Only manufacturer-approved components used.",
            },
            {
              title: "Fast Callouts",
              desc: "Same-day service available in most areas.",
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
              initialService="Coffee Machine Service"
              onClose={() => setShowRequestQuote(false)}
            />
          </div>
        </div>
      )}
    </section>
  );
}
