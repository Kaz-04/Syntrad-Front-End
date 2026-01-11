"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Cpu,
  ShieldCheck,
  Zap,
  Smartphone,
  Plug,
  Leaf,
} from "lucide-react";

import { amplinkProduct as product } from "@/public/assets/assets";
import PricingTable from "../components/PricingSection";
import RequestQuoteModal from "../components/RequestQuote";

export default function AmplinkClient() {
  const [activeImage, setActiveImage] = useState(0);
  const [selectedService, setSelectedService] = useState(null);

  return (
    <main className="text-white mt-8"
      style={{
        background: `
        radial-gradient(circle at 20% 0%, rgba(180,0,0,0.35), transparent 40%),
        radial-gradient(circle at 80% 100%, rgba(120,0,0,0.35), transparent 45%),
        linear-gradient(to bottom, #000000, #070707)
      `,
      }}>

      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">
        <div>
          <div className="border bg-white border-gray-800 p-10">
            <Image
              src={product.images[activeImage]}
              alt={product.name}
              width={520}
              height={420}
              className="mx-auto object-contain"
              priority
            />
          </div>
        </div>

        <div>
          <h1 className="text-4xl text-red-600 font-semibold">{product.name}</h1>
          <p className="mt-3 text-sm uppercase tracking-wide text-gray-400">
            {product.subtitle}
          </p>
          <p className="mt-8 text-2xl font-semibold">{product.basePrice}</p>
          <p className="mt-1 text-sm tracking-wide text-gray-400">
            Smart, Connected EV charging with optional WIFI, 4G & RFID control.
          </p>
          <button
            onClick={() => setSelectedService("EV Charger")}

            className="
    w-[15.5rem] py-3 rounded-lg mt-8
    bg-gradient-to-r from-red-600 to-red-700
    text-white font-semibold tracking-wide
    shadow-lg shadow-red-600/30
    hover:from-red-500 hover:to-red-600
    hover:shadow-red-500/50
    focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black
  "
          >
            Request Quote
          </button>


          {selectedService && (
            <RequestQuoteModal
              service={selectedService}
              onClose={() => setSelectedService(null)}
            />
          )}

          {/* INSTALLATION NOTICE */}
          <div className="mt-14 border border-gray-600 p-6">
            <h3 className="text-sm uppercase tracking-wide text-gray-400">
              Installation Pricing Notice
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-gray-300">
              Installation services for the AmpLink start at <strong className="text-white">£475</strong>.
              Final costs vary based on site complexity. A detailed quote is
              provided before any work begins.
            </p>
            <div className="mt-4 h-[1px] w-12 bg-red-700" />
          </div>
          <p className="mt-4 text-2xl text-center font-semibold">Select Color</p>
          <div className="flex gap-3 mt-4 justify-center">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`w-20 h-14 bg-white border ${activeImage === i ? "border-red-700" : "border-gray-700"
                  }`}
              >
                <Image src={img} alt="" width={80} height={56} />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TECHNICAL FEATURES ================= */}
      <section className="py-10 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold">
            Technical Features & Benefits
          </h2>

          <div className="mt-8 grid md:grid-cols-3 gap-10">
            <Tech icon={Zap} title="Fast AC Charging" text="Up to 7.4 KW single-phase, 32A fast AC charging with optimised and reliable power delivery." />
            <Tech icon={ShieldCheck} title="Advanced Protection" text="Built-in RCD, surge & overload protection with multi-layered electrical safety." />
            <Tech icon={Cpu} title="Connectivity Options" text="Wi-Fi & Ethernet (LAN) standard, Optional 4G and RFID access." />
            <Tech icon={Smartphone} title="App Control" text="Remote monitor, schedule, and manage charging anytime from any device." />
            <Tech icon={Plug} title="OCPP Compatible" text="OCPP 1.6J with OTA firmware updates" />
            <Tech icon={Leaf} title="Solar Ready" text="Charge using excess solar power for greener energy use (PV Surplus Detection)." />
          </div>
          <h2 className="text-3xl mt-5 font-semibold">
            Automatic Utility Communication
          </h2>

          <ul className="mt-10 space-y-4 text-gray-300">
            <li><strong className="text-white">Demand Response:</strong> Adapts charging during peak grid demand.</li>
            <li><strong className="text-white">Dynamic Tariffs:</strong> Automatically charges during low-price hours.</li>
            <li><strong className="text-white">Green Energy Integration:</strong> Prioritises renewable grid energy.</li>
          </ul>
        </div>
      </section>

      {/* ================= SOLAR ================= */}
      <section className="py-24 bg-neutral-950 border-t border-gray-900">

        {/* TOP CONTENT (2-column) */}
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-semibold">
              Greener Than Ever —{" "}
              <span className="text-red-700">PV Compatible</span>
            </h2>

            <p className="mt-6 text-gray-300">
              Connect the Syntrad AmpLink Elite X to your solar PV system and charge
              using the power of the sun. The charger automatically uses surplus solar
              energy whenever available with no manual switching required.
            </p>

            <h3 className="mt-8 font-semibold">Smart Solar Integration</h3>

            <p className="mt-3 text-gray-300">
              The Syntrad App intelligently detects excess solar generation and routes
              it directly to your EV—helping you charge greener and save more.
            </p>
          </div>

          <Leaf className="w-40 h-40 text-green-700 mx-auto" />

        </div>

        {/* PRICING TABLE (FULL WIDTH) */}
        <div className="mt-20 mx-auto max-w-6xl border border-black/30 bg-gradient-to-br from-white/60 via-gray-300/40 to-gray-900/40 backdrop-blur-lg p-12 rounded-2xl shadow-xl">
          <PricingTable />
        </div>

      </section>


      {/* ================= METERED ================= */}
      <section className="py-20 border-t border-gray-900">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold">
              Metered EV Charging — Card & App Payments
            </h2>

            <p className="mt-6 text-gray-300">
              Offer your customers a seamless charging experience with our metered EV charger options, fully compatible with debit/credit card payments or mobile app billing. Ideal for residential blocks, commercial sites, rental properties and workplaces, these chargers provide accurate energy metering, transparent pricing, and automated revenue collection.

              Whether you manage a single property or an entire fleet of chargers, our payment-enabled systems ensure secure transactions, usage reports, and plug-and-charge convenience for all drivers.
            </p>

            <ul className="mt-6 space-y-2 text-gray-400 text-sm">
              <li>• Smart metering for your customers</li>
              <li>• Get paid to charge</li>
              <li>• Ideal for residential & commercial sites</li>
            </ul>
          </div>

          <Image
            src="/assets/car.jpeg"
            alt="EV charging station"
            width={500}
            height={350}
            className="border border-gray-800"
          />
        </div>
      </section>

      {/* ================= TRUST ================= */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto bg-white rounded-xl p-12 
                  border-2 border-red-400 
                  shadow-[0_10px_30px_10px_rgba(239,68,68,0.3)]">

          {/* CTA Button */}
          <div className="text-center mb-10">
            <button
              onClick={() => setSelectedService("EV Charger")}

              className="
    w-[15.5rem] py-3 rounded-lg
    bg-gradient-to-r from-red-600 to-red-700
    text-white font-semibold tracking-wide
    shadow-lg shadow-red-600/30
    hover:from-red-500 hover:to-red-600
    hover:shadow-red-500/50
    focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2
  "
            >
              BOOK YOUR INSTALL
            </button>
          </div>

          {/* Section Title */}
          <h2 className="text-center text-2xl md:text-3xl font-semibold text-black mb-12">
            Trusted, Certified, Globally Manufactured
          </h2>

          {/* Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6">
            <Logo src="/assets/zero.png" alt="OZEV Approved" className="mx-auto" />
            <Logo src="/assets/octopus.png" alt="Octopus Energy" className="mx-auto" />
            <Logo src="/assets/unnamed.png" alt="Designed in UK" className="mx-auto" />
            <Logo src="/assets/turkey.png" alt="Made in Turkey" className="mx-auto" />
          </div>

        </div>
      </section>



    </main>
  );
}

/* ---------------- COMPONENTS ---------------- */

const Tech = ({ icon: Icon, title, text }) => (
  <div className="border border-gray-800 p-8">
    <Icon className="w-7 h-7 text-red-700" />
    <h3 className="mt-6 font-semibold">{title}</h3>
    <p className="mt-3 text-sm text-gray-400">{text}</p>
    <div className="mt-4 h-[1px] w-10 bg-red-700" />
  </div>
);

const Logo = ({ src, alt }) => (
  <Image src={src} alt={alt} width={140} height={60} className="mx-auto opacity-90" />
);
