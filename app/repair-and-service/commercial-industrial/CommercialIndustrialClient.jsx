"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, Headphones, ShieldCheck, Zap, Settings2, MapPin, CheckCircle2,
  Bolt, Cog, Wrench, Gauge, PanelsTopLeft, Cable, HardHat, Activity,
} from "lucide-react";

import PageHero from "../../components/PageHero";
import SectionHeading from "../../components/SectionHeading";
import UrgentCall from "../../components/UrgentCall";
import Container from "../../components/container";
import ContactPopup from "../../components/ContactPopup";
import { resetNavTrail } from "../../components/navTrail";

const trustPoints = [
  { icon: ShieldCheck, title: "Certified Engineers", desc: "Qualified electrical and mechanical specialists." },
  { icon: Zap, title: "Rapid Response", desc: "Fast turnaround to minimise production downtime." },
  { icon: Settings2, title: "Full System Support", desc: "From installation to ongoing maintenance." },
  { icon: MapPin, title: "London Based", desc: "Serving commercial and industrial sites across the UK." },
];

const featureBlocks = [
  {
    title: "Electrical Engineering",
    desc: "Safe and efficient electrical system design, installation, diagnostics and repair for commercial and industrial sites.",
    checklist: [
      "Panel & switchgear installation",
      "Wiring & distribution systems",
      "Fault finding & diagnostics",
      "Compliance & safety testing",
      "Emergency electrical call-outs",
    ],
    buttonLabel: "Support for Electrical Systems",
    href: "/contact",
    img: "/assets/images/electrical-panel-room.jpg",
  },
  {
    title: "Pumps, Motors & Machinery",
    desc: "Servicing, fault finding and repairs for pumps, motors, drives and electromechanical machinery.",
    checklist: [
      "Motor & drive repairs",
      "Pump & compressor servicing",
      "Electromechanical fault finding",
      "PLC & control panel support",
      "Preventative maintenance plans",
    ],
    buttonLabel: "Support for Pumps & Machinery",
    href: "/contact",
    img: "/assets/images/industrial-motor.jpg",
  },
];

const keyComponents = [
  { icon: Bolt, title: "Panels & Switchgear", desc: "Installation, upgrades and repair of electrical panels and switchgear.", img: "/assets/images/switchgear-panel-row.jpg", href: "/contact" },
  { icon: Cable, title: "Wiring & Distribution", desc: "Safe, compliant wiring and power distribution for commercial sites.", img: "/assets/images/electrical-panel-room.jpg", href: "/contact" },
  { icon: Cog, title: "Motors & Drives", desc: "Repair and servicing of motors, drives and rotating machinery.", img: "/assets/images/industrial-motor.jpg", href: "/contact" },
  { icon: Gauge, title: "Pumps & Compressors", desc: "Fault finding, servicing and repair for pumps and compressors.", img: "/assets/images/industrial-pumps-piping.jpg", href: "/contact" },
  { icon: PanelsTopLeft, title: "Control Systems & PLCs", desc: "Programming, diagnostics and repair of automation and control systems.", img: "/assets/images/plc-control-panel.jpg", href: "/contact" },
  { icon: Wrench, title: "Electromechanical Repair", desc: "Repair of systems combining electrical and mechanical components.", img: "/assets/images/industrial-motor.jpg", href: "/contact" },
  { icon: HardHat, title: "Safety & Compliance", desc: "Safety systems, fault protection and compliant electrical installations.", img: "/assets/images/switchgear-panel-row.jpg", href: "/contact" },
  { icon: Activity, title: "Diagnostics & Fault Finding", desc: "Expert diagnostics to identify and resolve equipment faults quickly.", img: "/assets/images/circuit-board-testing.jpg", href: "/contact" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function CommercialIndustrialClient() {
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
        pageLabel="Commercial & Industrial"
        heading={["Commercial &", "Industrial Systems."]}
        description="Expert electrical engineering, pumps, motors, machinery and electromechanical support for commercial and industrial sites across the UK."
        buttons={[
          { label: "Discuss a New Installation", href: "/contact", icon: ArrowRight },
          { label: "Request Site Support", href: "#technical-advice", icon: Headphones, variant: "outline" },
        ]}
        features={trustPoints}
        visual={
          <>
            <img
              src="/assets/hero/ci.png"
              alt="Commercial and industrial electrical and mechanical systems"
              className="absolute inset-0 w-full h-full object-cover object-right"
            />
            <div className="hidden lg:flex flex-col items-end absolute right-4 top-1/2 -translate-y-1/2 text-right">
              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/70 leading-[1.8]">
                Systems<br />Running<br />Reliably<br />Every<br />Shift
              </span>
              <span className="block w-6 h-[2px] bg-red-600 mt-2" />
            </div>
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
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
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
                <Image src={img} alt={title} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
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
          <div className="flex items-end justify-between gap-3 mb-2">
            <SectionHeading eyebrow="" title="Key Components & Services" />
            <Link
              href="/repair-and-service"
              onClick={resetNavTrail}
              className="text-red-500 hover:text-red-400 text-[12px] font-medium inline-flex items-center gap-1 whitespace-nowrap transition-colors"
            >
              View all services <ArrowRight size={11} />
            </Link>
          </div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {keyComponents.map(({ icon: Icon, title, desc, img, href }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="relative bg-[#0e0e0e] border border-white/10 hover:border-red-700/50 rounded-lg overflow-hidden transition-colors"
              >
                <div className="relative h-[180px] w-full">
                  <Image src={img} alt={title} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/10" />

                  <div className="absolute inset-x-0 bottom-0 pb-3 z-10 flex flex-col">
                    <Icon
                      size={36}
                      strokeWidth={1.5}
                      className="text-red-500 mb-1.5 ml-3 drop-shadow-[0_0_14px_rgba(220,38,38,0.8)]"
                    />
                    <div className="px-3 flex flex-col">
                      <h3 className="font-display font-semibold text-[12px] leading-[1.25] text-white mb-1">{title}</h3>
                      <p className="text-gray-300 text-[10px] leading-[1.4] mb-2">{desc}</p>
                      <Link
                        href={href}
                        className="text-red-500 hover:text-red-400 text-[10.5px] font-medium inline-flex items-center gap-1 w-fit transition-colors"
                      >
                        Learn more
                        <ArrowRight size={10} />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <UrgentCall
        title={<>Need support for your commercial<br />or industrial equipment?</>}
        subtitle="Our specialist engineers are here to help. Fast response. Reliable, compliant solutions."
        buttonLabel="Get in Touch Today"
        buttonHref="/contact"
      />

      <ContactPopup open={popupOpen} onClose={() => setPopupOpen(false)} />

    </main>
  );
}
