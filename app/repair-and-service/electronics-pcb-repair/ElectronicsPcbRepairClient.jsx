"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, ShieldCheck, Zap, Settings2, MapPin, CheckCircle2,
  Cpu, History, Power, ZapOff, MonitorX, Radio, Activity,
} from "lucide-react";

import PageHero from "../../components/PageHero";
import SectionHeading from "../../components/SectionHeading";
import UrgentCall from "../../components/UrgentCall";
import Container from "../../components/container";
import ContactPopup from "../../components/ContactPopup";

const heroButtons = [
  { label: "Book an Electronics Repair", href: "/contact", icon: ArrowRight },
  { label: "Discuss a Specialist Device", href: "#discuss-device", icon: ArrowRight, variant: "outline" },
];

const trustPoints = [
  { icon: ShieldCheck, title: "Precision Engineering", desc: <>Component-level care for<br />sensitive electronics.</> },
  { icon: Zap, title: "Rapid Response", desc: <>Fast turnaround to minimise<br />disruption.</> },
  { icon: Settings2, title: "End-to-End Support", desc: <>From diagnostics to<br />ongoing maintenance.</> },
  { icon: MapPin, title: "London Based", desc: <>Serving homes and<br />businesses across the UK.</> },
];

const featureBlocks = [
  {
    title: "Component-Level Repair",
    desc: "Precision fault finding and repair down to individual components on printed circuit boards.",
    checklist: [
      "PCB fault finding & repair",
      "Component-level diagnostics",
      "Surface-mount rework",
      "Sensor & control board repair",
      "Power supply repair",
    ],
    buttonLabel: "Support for Component Repairs",
    href: "/contact",
    img: "/assets/images/circuit-board-testing.jpg",
  },
  {
    title: "Legacy & Specialist Devices",
    desc: "Support for obsolete, bespoke and hard-to-source electronic equipment other repairers can't touch.",
    checklist: [
      "Obsolete & legacy equipment support",
      "Custom & bespoke devices",
      "Reverse engineering & fault tracing",
      "Firmware & calibration support",
      "Prototype & one-off repairs",
    ],
    buttonLabel: "Support for Legacy Equipment",
    href: "/contact",
    img: "/assets/images/industrial-machine-grayscale.jpg",
  },
];

const faults = [
  { icon: Power, title: "No Power", desc: "Device not turning on or losing power intermittently." },
  { icon: ZapOff, title: "Short Circuits", desc: "Shorted components, burnt tracks or blown fuses." },
  { icon: Cpu, title: "Component Failure", desc: "Failed chips, capacitors or other key components." },
  { icon: MonitorX, title: "Display Faults", desc: "Dead, flickering or corrupted screens and displays." },
  { icon: Radio, title: "Sensor Faults", desc: "Faulty sensors, unreliable readings or calibration drift." },
  { icon: Activity, title: "Firmware & Software Faults", desc: "Error codes, corrupted firmware or software issues." },
];

const processSteps = [
  { number: "01", icon: History, title: "Enquiry", desc: "Get in touch with details of your equipment and issue." },
  { number: "02", icon: Cpu, title: "Assessment", desc: "We diagnose the fault and provide a clear quote (upfront, no surprises)." },
  { number: "03", icon: Settings2, title: "Repair", desc: "Our expert technicians carry out the repair using genuine parts." },
  { number: "04", icon: CheckCircle2, title: "Return & Support", desc: "Your equipment is tested, returned and ready to use. Ongoing support available." },
];

const industries = ["Retail & POS", "Broadcast & AV", "Industrial Controls", "Test & Measurement", "Consumer Electronics", "Research & Education"];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function ElectronicsPcbRepairClient() {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <main className="w-full overflow-hidden bg-black text-white font-body pt-16 sm:pt-20">

      <div
        onClickCapture={(e) => {
          const link = e.target.closest("a");
          if (link && link.getAttribute("href") === "#discuss-device") {
            e.preventDefault();
            e.stopPropagation();
            setPopupOpen(true);
          }
        }}
      >
        <PageHero
          pageLabel="Electronics & PCB Repair"
          heading={["Electronics & PCB", "Repair & Diagnostics.", "Precision Engineering."]}
          description="Expert repair and maintenance for a wide range of electronic devices and components. From diagnostics to precision fixes, we restore functionality with accuracy and care."
          buttons={heroButtons}
          features={trustPoints}
          visual={
            <>
              <img
                src="/assets/hero/eee.webp"
                alt="Electronics and PCB repair workbench"
                className="absolute inset-0 w-full h-full object-contain object-right md:scale-[1.1] md:origin-right md:translate-x-[8%]"
              />
              <div
                className="absolute inset-y-0 right-0 w-[14%] pointer-events-none"
                style={{
                  background:
                    "linear-gradient(270deg, rgba(127,29,29,0.55) 0%, rgba(69,10,10,0.25) 45%, rgba(0,0,0,0) 100%)",
                }}
              />
            </>
          }
        />
      </div>

      <section className="border-b border-white/10">
        <Container className="py-6">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-4"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {featureBlocks.map(({ title, desc, checklist, buttonLabel, href, img }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="relative h-[360px] sm:h-[400px] bg-[#0e0e0e] border border-white/10 hover:border-red-700/50 rounded-lg overflow-hidden transition-colors"
              >
                <Image src={img} alt={title} fill sizes="50vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/5" />

                <div className="relative z-10 h-full flex flex-col p-5 sm:p-6">
                  <span className="block w-6 h-[2px] bg-red-600 mb-2 shadow-[0_0_6px_rgba(0,0,0,0.8)]" />
                  <h3 className="font-display font-semibold text-[18px] sm:text-[20px] leading-[1.2] text-white mb-1.5 [text-shadow:0_1px_6px_rgba(0,0,0,0.9)]">{title}</h3>
                  <p className="text-gray-300 text-[12px] sm:text-[12.5px] leading-[1.45] mb-3 max-w-[280px] [text-shadow:0_1px_6px_rgba(0,0,0,0.9)]">{desc}</p>
                  <ul className="space-y-1 mb-4">
                    {checklist.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-[11.5px] text-gray-300 [text-shadow:0_1px_6px_rgba(0,0,0,0.9)]">
                        <CheckCircle2 size={13} className="text-red-500 shrink-0 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={href}
                    className="mt-auto inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white text-[12.5px] font-semibold px-4 py-2 rounded-md transition-colors w-fit"
                  >
                    {buttonLabel} <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <section className="border-b border-white/10">
        <Container className="py-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3 mb-2">
            <SectionHeading eyebrow="" title="Common faults we handle" />
            <div className="flex items-center gap-4">
              <p className="text-[#8a8a8a] text-[13px] leading-[1.5] max-w-[420px]">
                From simple fixes to complex failures, our experienced technicians
                diagnose and repair all common electronic faults.
              </p>
              <Link
                href="/repair-and-service"
                className="text-red-500 hover:text-red-400 text-[12px] font-medium inline-flex items-center gap-1 whitespace-nowrap transition-colors"
              >
                View all services <ArrowRight size={11} />
              </Link>
            </div>
          </div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {faults.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="bg-[#0e0e0e] border border-white/10 hover:border-red-700/50 rounded-lg px-3 py-5 flex flex-col items-center text-center transition-colors"
              >
                <span className="w-10 h-10 rounded-full border border-red-600/60 flex items-center justify-center mb-2">
                  <Icon size={18} strokeWidth={1.6} className="text-red-500" />
                </span>
                <h3 className="font-display font-semibold text-[12px] leading-[1.25] text-white mb-1">{title}</h3>
                <p className="text-[#8a8a8a] text-[10.5px] leading-[1.4]">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <section className="border-b border-white/10">
        <Container className="py-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3 mb-2">
            <SectionHeading eyebrow="" title="Our Repair Process" />
            <p className="text-[#8a8a8a] text-[13px] leading-[1.5] max-w-[420px] lg:text-right">
              A simple, transparent process to get your equipment back up and running.
            </p>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row items-start gap-6 sm:gap-3 mt-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {processSteps.map(({ number, icon: Icon, title, desc }, i) => (
              <motion.div key={number} variants={fadeUp} className="flex sm:flex-1 items-start sm:items-stretch gap-3">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <span className="w-9 h-9 rounded-full border border-red-600/60 flex items-center justify-center text-red-500 font-display font-semibold text-[12px] shrink-0">
                      {number}
                    </span>
                    <span className="w-9 h-9 rounded-full border border-red-600/60 flex items-center justify-center shrink-0">
                      <Icon size={16} strokeWidth={1.7} className="text-red-500" />
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-[13px] leading-[1.3] text-white mb-1">{title}</h3>
                    <p className="text-[#8a8a8a] text-[11.5px] leading-[1.5] max-w-[220px]">{desc}</p>
                  </div>
                </div>

                {i < processSteps.length - 1 && (
                  <ArrowRight size={16} className="hidden sm:block text-red-600/60 mt-2.5 shrink-0" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <section className="border-b border-white/10">
        <Container className="py-6">
          <span className="block font-body text-[10px] font-semibold uppercase leading-none tracking-widest text-red-600 mb-4">
            Industries We Support
          </span>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
            {industries.map((industry) => (
              <span key={industry} className="font-display font-bold text-[16px] sm:text-[18px] text-gray-400">
                {industry}
              </span>
            ))}
            <span className="text-[#8a8a8a] text-[12px]">and many more...</span>
          </div>
        </Container>
      </section>

      <UrgentCall
        title={<>Have a device that's stumped<br />everyone else?</>}
        subtitle="Our engineers specialise in the hard-to-diagnose and hard-to-source. Get in touch to discuss it."
        buttonLabel="Submit a Technical Enquiry"
        buttonHref="/contact"
      />

      <ContactPopup open={popupOpen} onClose={() => setPopupOpen(false)} />

    </main>
  );
}