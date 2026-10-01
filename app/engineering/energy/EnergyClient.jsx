'use client';

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, Headphones, Zap, ShieldCheck, Workflow, Sprout, Wifi, Wallet,
} from "lucide-react";

import PageHero from "../../components/PageHero";
import SectionHeading from "../../components/SectionHeading";
import UrgentCall from "../../components/UrgentCall";
import Container from "../../components/container";
import ContactPopup from "../../components/ContactPopup";

const HERO_DIR = "/assets/hero/";
const IMG_DIR = "/assets/images/";
const ICON_DIR = "/assets/icons/";

function Glyph({ png, size = 48, scale = 1, className = "" }) {
  return (
    <div className={`shrink-0 flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <img
        src={`${ICON_DIR}${png}`}
        alt=""
        className="w-full h-full object-contain object-center"
        style={scale !== 1 ? { transform: `scale(${scale})` } : undefined}
      />
    </div>
  );
}

const resolveHref = (href, projectType) =>
  href ?? `/contact?type=${encodeURIComponent(projectType)}`;

const DEFAULT_TYPE = "Energy & EV Infrastructure";

const heroFeatures = [
  { icon: Zap, title: "Intelligent Power", desc: "Optimised energy use and distribution" },
  { icon: ShieldCheck, title: "Reliable & Safe", desc: "Built-in protection and compliance" },
  { icon: Workflow, title: "Scalable Systems", desc: "From single site to multi-location networks" },
  { icon: Sprout, title: "Sustainable Future", desc: "Lower emissions, smarter energy use" },
];

const capabilities = [
  { png: "02_EV_Charging.png", title: "EV Charging Infrastructure", desc: "End-to-end AC & DC charging solutions for homes, workplaces and public networks.", projectType: DEFAULT_TYPE },
  { png: "icon_transformer.png", title: "Power Distribution Systems", desc: "Robust, safe and efficient distribution infrastructure for EV environments.", projectType: DEFAULT_TYPE },
  { png: "15_Smart_Home_Control.png", title: "Load Management & Balancing", desc: "Dynamic load control to prevent overloads and optimise energy utilisation.", projectType: DEFAULT_TYPE },
  { png: "03_Energy_Management.png", title: "Energy Metering & Monitoring", desc: "Advanced metering with real-time data for smarter energy decision-making.", projectType: DEFAULT_TYPE },
  { png: "08_EV_Charging_Car.png", title: "Smart Charging Solutions", desc: "AI-driven scheduling, tariff optimisation and demand response capabilities.", projectType: DEFAULT_TYPE },
  { png: "17_Eco_Energy.png", title: "Future-Ready Infrastructure", desc: "Modular, scalable and sustainable designs for tomorrow's energy needs.", projectType: DEFAULT_TYPE },
];

const chargingTypes = [
  { title: "Home Charging Solutions", desc: "Smart, safe and convenient charging for modern homes and residences.", image: `${IMG_DIR}modern-house-exterior.jpg`, projectType: DEFAULT_TYPE },
  { title: "Commercial & Fleet Charging", desc: "Scalable charging infrastructure for businesses, fleets and public networks.", image: `${IMG_DIR}ev-charging-row.jpg`, projectType: DEFAULT_TYPE },
];

const energyManagement = [
  { png: "04_Specialist_Diagnostics.png", title: "Real-time Monitoring", desc: "Live visibility of energy usage and charging activity." },
  { png: "03_Energy_Management.png", title: "Demand Response", desc: "Reduce peak demand and lower operational costs." },
  { png: "icon_gears.png", title: "Energy Optimisation", desc: "Intelligent algorithms to balance loads and improve efficiency." },
  { png: "15_Smart_Home_Control.png", title: "Integration Ready", desc: "Seamless integration with BMS, solar, storage and grid systems." },
];

const technicalFeatures = [
  { png: "02_EV_Charging.png", title: "OCPP 1.6J / 2.0.1", desc: "Open protocol compliant" },
  { png: "05_Bespoke_Engineering.png", title: "Modular & Scalable", desc: "Designed for growth and flexibility" },
  { png: "06_Safety_Security.png", title: "Advanced Protection", desc: "Overload, short circuit & surge protection" },
  { png: "15_Smart_Home_Control.png", title: "Remote Management", desc: "Configure, update and monitor remotely" },
  { png: "icon_shield.png", title: "Cybersecure", desc: "Secure communication and data encryption" },
  { png: "icon_maintenance_transparent.png", title: "24/7 Reliability", desc: "Engineered for continuous uptime" },
];

const applications = [
  { title: "Residential Complexes", image: `${IMG_DIR}property_card_4.png`, href: "/sectors/premium-residential" },
  { title: "Workplaces & Campuses", image: `${IMG_DIR}city-skyline-night.jpg`, href: "/sectors/commercial-industrial" },
  { title: "Retail & Commercial", image: `${IMG_DIR}ev-charging-station.jpg`, href: "/sectors/commercial-industrial" },
  { title: "Fleets & Logistics Operations", image: `${IMG_DIR}warehouse-interior.jpg`, href: "/sectors/commercial-industrial" },
];

const caseStudy = {
  title: "Smart Load Management for Commercial EV Charging Hub",
  desc: "We designed and implemented an intelligent load management system for a multi-charger EV hub, reducing peak demand by 32% and improving energy efficiency across operations.",
  image: `${IMG_DIR}ev-charging-station.jpg`,
  projectType: DEFAULT_TYPE,
};

const caseStudyStats = [
  { png: "03_Energy_Management.png", value: "32%", down: true, label: "Peak Demand Reduction" },
  { png: "icon_chart.png", value: "28%", down: true, label: "Energy Cost Savings" },
  { png: "icon_shield.png", value: "99.9%", label: "System Uptime" },
  { png: "02_EV_Charging.png", value: "18", label: "High-Power Chargers" },
];

const dashboardTotals = [
  { icon: Wifi, value: "1,250", unit: "kWh", label: "Total Energy" },
  { icon: Wallet, value: "$156", unit: ".80", label: "Total Cost" },
  { icon: Sprout, value: "320", unit: "kg", label: "CO₂ Saved" },
];

const dashboardStatus = [
  { value: "24", label: "Active Chargers" },
  { value: "56", label: "Charging Sessions" },
  { value: "68%", label: "Load Utilisation" },
  { value: "Stable", label: "Grid Status" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

function EnergyDashboard() {
  return (
    <div className="rounded-lg border border-white/10 bg-[#0e0e0e] p-3">
      <div className="flex items-center justify-between mb-2.5">
        <p className="font-display text-[10px] font-semibold text-gray-100">Energy Overview</p>
        <span className="text-[8px] text-[#999] border border-white/10 rounded px-2 py-0.5">Today ˅</span>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-3">
        {dashboardTotals.map(({ icon: Icon, value, unit, label }) => (
          <div key={label} className="rounded-md border border-white/10 bg-black/50 px-2 py-1.5">
            <p className="flex items-center gap-1 text-[#999] text-[7.5px] mb-0.5">
              <Icon size={8} strokeWidth={1.8} className="text-red-500" /> {label}
            </p>
            <p className="font-display text-[15px] leading-none font-medium text-white">
              {value}<span className="text-[8px] text-[#999] ml-0.5">{unit}</span>
            </p>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mb-1">
        <p className="text-[8.5px] font-semibold text-gray-200">Energy Usage</p>
        <div className="flex items-center gap-2 text-[7px] text-[#999]">
          <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-red-500" />Consumption</span>
          <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-sky-400" />Solar Generation</span>
        </div>
      </div>

      <div className="flex gap-1.5">

        <div className="flex flex-col justify-between text-[7px] leading-none text-[#777] h-[96px] pt-[1px] pb-[1px] text-right w-[18px] shrink-0">
          <span>kWh</span>
          <span>750</span>
          <span>500</span>
          <span>250</span>
          <span>0</span>
        </div>

        <div className="relative flex-1 min-w-0">

          <svg viewBox="0 0 300 100" preserveAspectRatio="none" className="w-full h-[96px]" fill="none">
            <defs>
              <linearGradient id="evFillRed" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ef4444" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="evFillBlue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="evFillAmber" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
              </linearGradient>
            </defs>

            {[6, 29, 52, 75, 98].map((y) => (
              <line key={y} x1="0" x2="300" y1={y} y2={y} stroke="rgba(255,255,255,0.07)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
            ))}

            <path
              d="M0,78 C25,76 50,72 80,62 C105,54 125,42 155,42 C185,42 205,55 235,62 C260,68 280,70 300,68 L300,98 L0,98 Z"
              fill="url(#evFillAmber)"
            />
            <path
              d="M0,78 C25,76 50,72 80,62 C105,54 125,42 155,42 C185,42 205,55 235,62 C260,68 280,70 300,68"
              stroke="#f59e0b" strokeWidth="1.3" strokeLinecap="round" vectorEffect="non-scaling-stroke"
            />

            <path
              d="M0,88 C30,88 55,86 80,80 C105,74 125,58 155,50 C185,42 205,40 232,46 C258,52 280,62 300,66 L300,98 L0,98 Z"
              fill="url(#evFillBlue)"
            />
            <path
              d="M0,88 C30,88 55,86 80,80 C105,74 125,58 155,50 C185,42 205,40 232,46 C258,52 280,62 300,66"
              stroke="#38bdf8" strokeWidth="1.3" strokeLinecap="round" vectorEffect="non-scaling-stroke"
            />

            <path
              d="M0,80 C20,78 35,68 58,60 C80,52 92,30 118,22 C138,16 150,34 166,42 C182,50 196,58 214,46 C232,34 246,30 262,40 C278,50 290,52 300,54 L300,98 L0,98 Z"
              fill="url(#evFillRed)"
            />
            <path
              d="M0,80 C20,78 35,68 58,60 C80,52 92,30 118,22 C138,16 150,34 166,42 C182,50 196,58 214,46 C232,34 246,30 262,40 C278,50 290,52 300,54"
              stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" vectorEffect="non-scaling-stroke"
            />
          </svg>

          <div className="flex justify-between text-[7px] text-[#777] mt-0.5">
            {["00:00", "06:00", "12:00", "18:00", "24:00"].map((t) => <span key={t}>{t}</span>)}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 border-t border-white/10 mt-2.5 pt-2">
        {dashboardStatus.map(({ value, label }) => (
          <div key={label}>
            <p className="text-[#777] text-[7px] leading-tight">{label}</p>
            <p className="font-display text-[10px] font-semibold text-white mt-0.5">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function EnergyClient() {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <main className="w-full overflow-hidden bg-black text-white font-body pt-16 sm:pt-20">

      <div
        onClickCapture={(e) => {
          const link = e.target.closest("a");
          if (link && link.getAttribute("href") === "#technical-advice") {
            e.preventDefault();
            e.stopPropagation();
            setPopupOpen(true);
          }
        }}
      >
        <PageHero
          pageLabel="Energy & EV Infrastructure"
          heading={["Energy & EV", "Infrastructure"]}
          description="Powering the future with intelligent EV charging, energy distribution and load management systems that are efficient, scalable and future-ready."
          buttons={[
            { label: "Explore Solutions", href: "/solutions", icon: ArrowRight },
            { label: "Talk to Our Experts", href: "#technical-advice", icon: Headphones, variant: "outline" },
          ]}
          features={heroFeatures}
          visual={
            <img
              src={`${HERO_DIR}contact.png`}
              alt="EV charging and energy infrastructure"
              className="absolute inset-0 w-full h-full object-cover object-right"
            />
          }
        />
      </div>

      <section className="border-b border-white/10">
        <Container className="pt-2 pb-9">
          <SectionHeading title="Our Infrastructure Solutions" />

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {capabilities.map(({ png, scale, title, desc, projectType }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="group relative flex flex-col items-center text-center bg-[#0e0e0e] border border-white/10 hover:border-red-700/50 rounded-lg px-4 pt-3 pb-3.5 transition-colors"
              >
                <Glyph png={png} scale={scale} size={64} className="mb-2" />
                <h3 className="font-display font-semibold text-[12.5px] leading-[1.25] mb-2 text-gray-100 transition-colors group-hover:text-red-400">{title}</h3>
                <p className="text-[#8a8a8a] text-[10.5px] leading-[1.45]">{desc}</p>
                <span className="mt-auto pt-3 inline-flex items-center gap-1 text-red-500 text-[10.5px] font-semibold">
                  Enquire Now <ArrowRight size={11} />
                </span>

                <Link
                  href={resolveHref(undefined, projectType)}
                  aria-label={`${title}: start an enquiry`}
                  className="absolute inset-0 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-500"
                />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <section className="border-b border-white/10">
        <Container className="pt-2 pb-9">
          <div className="grid grid-cols-1 lg:grid-cols-[46fr_54fr] gap-10 lg:gap-0 lg:divide-x lg:divide-white/10">

            <div className="lg:pr-8 min-w-0">
              <SectionHeading title="Residential & Commercial Charging" />

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6"
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
              >
                {chargingTypes.map(({ title, desc, image, projectType }) => (
                  <motion.div
                    key={title}
                    variants={fadeUp}
                    className="group relative h-[215px] rounded-lg overflow-hidden border border-white/10 hover:border-red-700/50 transition-colors"
                  >
                    <img
                      src={image}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/90" />

                    <div className="absolute inset-x-0 bottom-0 z-10 p-3.5">
                      <h3 className="font-display font-semibold text-[13px] leading-[1.25] text-white mb-1">{title}</h3>
                      <p className="text-[#b5b5b5] text-[10.5px] leading-[1.4]">{desc}</p>
                      <span className="mt-2 inline-flex items-center gap-1 text-red-500 text-[10.5px] font-semibold">
                        Enquire Now <ArrowRight size={11} />
                      </span>
                    </div>

                    <Link
                      href={resolveHref(undefined, projectType)}
                      aria-label={`${title}: start an enquiry`}
                      className="absolute inset-0 z-20 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-500"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="lg:pl-8 min-w-0">
              <SectionHeading title="Smart Energy Management" />

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-[0.8fr_1.35fr] gap-5 mt-6"
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
              >
                <motion.div variants={fadeUp} className="space-y-4">
                  {energyManagement.map(({ png, scale, title, desc }) => (
                    <div key={title} className="flex items-start gap-2.5">
                      <Glyph png={png} scale={scale} size={38} />
                      <div className="min-w-0">
                        <h3 className="font-display font-semibold text-[11px] leading-[1.25] mb-1 text-gray-100">{title}</h3>
                        <p className="text-[#8a8a8a] text-[9.5px] leading-[1.4]">{desc}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>

                <motion.div variants={fadeUp}>
                  <EnergyDashboard />
                </motion.div>
              </motion.div>
            </div>

          </div>
        </Container>
      </section>

      <section className="border-b border-white/10">
        <Container className="pt-2 pb-9">
          <div className="grid grid-cols-1 lg:grid-cols-[46fr_54fr] gap-10 lg:gap-0 lg:divide-x lg:divide-white/10">

            <div className="lg:pr-8 min-w-0">
              <SectionHeading title="Technical Features" />

              <motion.div
                className="grid grid-cols-3 sm:grid-cols-6 gap-x-2 gap-y-5 mt-6"
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
              >
                {technicalFeatures.map(({ png, scale, title, desc }) => (
                  <motion.div key={title} variants={fadeUp} className="flex flex-col items-center text-center">
                    <Glyph png={png} scale={scale} size={46} className="mb-2" />
                    <h3 className="font-display font-semibold text-[9px] leading-[1.25] mb-1 text-gray-100">{title}</h3>
                    <p className="text-[#8a8a8a] text-[8px] leading-[1.4]">{desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="lg:pl-8 min-w-0">
              <SectionHeading title="Featured Applications" />

              <motion.div
                className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-6"
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
              >
                {applications.map(({ title, image, href }) => (
                  <motion.div
                    key={title}
                    variants={fadeUp}
                    className="group relative h-[125px] rounded-md overflow-hidden border border-white/10 hover:border-red-700/50 transition-colors"
                  >
                    <img
                      src={image}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/25 to-black/85" />
                    <div className="absolute inset-x-0 bottom-0 z-10 px-2 pb-2 text-center">
                      <h3 className="font-display font-medium text-[11.5px] leading-[1.25] text-white">{title}</h3>
                    </div>

                    <Link
                      href={href}
                      aria-label={`${title}: view sector`}
                      className="absolute inset-0 z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-500"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>

          </div>
        </Container>
      </section>

      <section className="border-b border-white/10">
        <Container className="pt-2 pb-9">
          <motion.div
            className="flex flex-col lg:flex-row lg:items-center gap-5 rounded-lg border border-white/5 bg-[#0a0a0a] p-3"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <img
              src={caseStudy.image}
              alt={caseStudy.title}
              className="w-full lg:w-[265px] h-[130px] shrink-0 rounded-md object-cover"
            />

            <div className="flex-1 min-w-0 lg:pr-5 lg:border-r lg:border-white/10">
              <p className="text-red-500 text-[9px] font-semibold tracking-[0.08em] uppercase mb-1">Case Study</p>
              <h3 className="font-display font-semibold text-[17px] leading-[1.25] mb-1.5 text-white max-w-[300px]">{caseStudy.title}</h3>
              <p className="text-[#999] text-[10px] leading-[1.5] max-w-[330px]">{caseStudy.desc}</p>
              <Link
                href={resolveHref(undefined, caseStudy.projectType)}
                className="mt-2 inline-flex items-center gap-1 text-red-500 text-[10.5px] font-semibold hover:text-red-400 transition-colors"
              >
                Enquire Now <ArrowRight size={11} />
              </Link>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-4 lg:divide-x lg:divide-white/10 shrink-0 lg:w-[400px]">
              {caseStudyStats.map(({ png, scale, value, down, label }) => (
                <div key={label} className="px-3 flex flex-col items-center text-center">
                  <Glyph png={png} scale={scale} size={38} className="mb-1" />
                  <p className="font-display text-[22px] leading-none font-medium text-white">
                    {value}{down && <span className="text-[16px] ml-0.5">↓</span>}
                  </p>
                  <p className="text-[#999] text-[9.5px] leading-[1.3] mt-1">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      <UrgentCall
        title="Ready to build intelligent, future-ready energy & EV infrastructure?"
        subtitle="Our experts are here to power your next project."
        buttonLabel="Get in Touch Today"
        buttonHref="/contact"
      />

      <ContactPopup open={popupOpen} onClose={() => setPopupOpen(false)} />

    </main>
  );
}