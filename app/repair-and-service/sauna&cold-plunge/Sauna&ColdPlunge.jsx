"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Settings2,
  MapPin,
  CheckCircle2,
  Flame,
  ToggleLeft,
  Thermometer,
  Snowflake,
  Cog,
  Radio,
  Activity,
} from "lucide-react";

import PageHero from "../../components/PageHero";
import SectionHeading from "../../components/SectionHeading";
import UrgentCall from "../../components/UrgentCall";
import Container from "../../components/container";
import ContactPopup from "../../components/ContactPopup";

const heroButtons = [
  {
    label: "Request Wellness System Support",
    href: "/contact",
    icon: ArrowRight,
  },
  {
    label: "Discuss a New Installation",
    href: "#discuss-installation",
    icon: ArrowRight,
    variant: "outline",
  },
];

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Specialist Expertise",
    desc: (
      <>
        Real experience across
        <br />
        wellness systems.
      </>
    ),
  },
  {
    icon: Zap,
    title: "Rapid Response",
    desc: (
      <>
        Fast turnaround to get
        <br />
        you back up and running.
      </>
    ),
  },
  {
    icon: Settings2,
    title: "End-to-End Support",
    desc: (
      <>
        From installation to
        <br />
        long-term solutions.
      </>
    ),
  },
  {
    icon: MapPin,
    title: "London Based",
    desc: (
      <>
        Proudly serving homes,
        <br />
        gyms, spas and businesses
        <br />
        across the UK.
      </>
    ),
  },
];

const featureBlocks = [
  {
    title: "Sauna Systems",
    desc: "Complete support for sauna systems, including heater installation and repair, controls, contactors, temperature sensors, automation and diagnostics.",
    checklist: [
      "Heater & control installation",
      "Contactor replacement & repair",
      "Temperature sensing & safety systems",
      "Automation & remote control",
      "Fault finding & diagnostics",
    ],
    buttonLabel: "Support for Sauna Systems",
    href: "/contact",
    img: "/assets/images/sauna-interior.jpg",
  },
  {
    title: "Cold Plunge Systems",
    desc: "Expert support for cold plunge systems, including chillers, pumps, filtration, temperature control, automation and system diagnostics.",
    checklist: [
      "Chiller installation & service",
      "Pumps & filtration systems",
      "Temperature control & monitoring",
      "Automation & remote access",
      "Fault finding & diagnostics",
    ],
    buttonLabel: "Support for Cold Plunge Systems",
    href: "/contact",
    img: "/assets/images/cold_plunge_image_extracted.png",
  },
];

const keyComponents = [
  {
    icon: Flame,
    title: "Heaters & Contactors",
    desc: "Installation, repair and replacement of sauna heaters and contactors.",
    img: "/assets/images/sauna-interior.jpg",
    href: "/contact",
  },
  {
    icon: ToggleLeft,
    title: "Controls & Automation",
    desc: "Advanced control systems for precise temperature management and automation.",
    img: "/assets/images/plc-control-panel.jpg",
    href: "/contact",
  },
  {
    icon: Thermometer,
    title: "Temperature Sensors",
    desc: "Reliable temperature sensing and calibration for safe, consistent operation.",
    img: "/assets/images/electrical-panel-room.jpg",
    href: "/contact",
  },
  {
    icon: Snowflake,
    title: "Chillers",
    desc: "Supply, installation and service of high-performance chillers for cold plunge systems.",
    img: "/assets/images/hvac-cooling-unit.jpg",
    href: "/contact",
  },
  {
    icon: Cog,
    title: "Pumps & Filtration",
    desc: "Pumps, filtration and water treatment systems for clean, reliable performance.",
    img: "/assets/images/industrial-pumps-piping.jpg",
    href: "/contact",
  },
  {
    icon: Radio,
    title: "Remote Monitoring",
    desc: "Smart monitoring and remote access for complete peace of mind.",
    img: "/assets/images/rcs.png",
    href: "/contact",
  },
  {
    icon: ShieldCheck,
    title: "Safety Controls",
    desc: "Safety systems, fault protection and compliant electrical installations.",
    img: "/assets/images/switchgear-panel-row.jpg",
    href: "/contact",
  },
  {
    icon: Activity,
    title: "System Diagnostics",
    desc: "Expert fault finding and diagnostics to keep your wellness systems running.",
    img: "/assets/images/circuit-board-testing.jpg",
    href: "/contact",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function SaunaColdPlunge() {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <main className="w-full overflow-hidden bg-black text-white font-body pt-16 sm:pt-20">
      <div
        onClickCapture={(e) => {
          const link = e.target.closest("a");
          if (link && link.getAttribute("href") === "#discuss-installation") {
            e.preventDefault();
            e.stopPropagation();
            setPopupOpen(true);
          }
        }}
      >
        <PageHero
          pageLabel="Sauna & Cold Plunge"
          heading={[
            "Sauna & Cold Plunge.",
            "Specialist Installation.",
            "Reliable Wellness Systems.",
          ]}
          description="Specialist installation support, controls, heaters, contactors, chillers, pumps, filtration, temperature control, automation and system diagnostics for homes, gyms, spas and wellness facilities."
          buttons={heroButtons}
          features={trustPoints}
          visual={
            <>
              <img
                src="/assets/Hero/lwf.png"
                alt="Sauna and cold plunge wellness suite"
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
            {featureBlocks.map(
              ({ title, desc, checklist, buttonLabel, href, img }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  className="relative h-[360px] sm:h-[400px] bg-[#0e0e0e] border border-white/10 hover:border-red-700/50 rounded-lg overflow-hidden transition-colors"
                >
                  <Image
                    src={img}
                    alt={title}
                    fill
                    sizes="50vw"
                    className="object-cover"
                  />

                  <div className="relative z-10 h-full flex flex-col p-5 sm:p-6">
                    <span className="block w-6 h-[2px] bg-red-600 mb-2 shadow-[0_0_6px_rgba(0,0,0,0.8)]" />
                    <h3 className="font-display font-semibold text-[18px] sm:text-[20px] leading-[1.2] text-white mb-1.5 [text-shadow:0_1px_6px_rgba(0,0,0,0.9)]">
                      {title}
                    </h3>
                    <p className="text-gray-300 text-[12px] sm:text-[12.5px] leading-[1.45] mb-3 max-w-[260px] [text-shadow:0_1px_6px_rgba(0,0,0,0.9)]">
                      {desc}
                    </p>
                    <ul className="space-y-1 mb-4">
                      {checklist.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-[11.5px] text-gray-300 [text-shadow:0_1px_6px_rgba(0,0,0,0.9)]"
                        >
                          <CheckCircle2
                            size={13}
                            className="text-red-500 shrink-0 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]"
                          />
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
              ),
            )}
          </motion.div>
        </Container>
      </section>

      <section className="border-b border-white/10">
        <Container className="py-6">
          <div className="flex items-end justify-between gap-3 mb-2">
            <SectionHeading eyebrow="" title="Key Components & Services" />
            <Link
              href="/repair-and-service"
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
            {keyComponents.map(({ icon: Icon, title, desc, img, href }, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="relative bg-[#0e0e0e] border border-white/10 hover:border-red-700/50 rounded-r-lg overflow-hidden transition-colors"
              >
                <div className="relative h-[180px] w-full">
                  <Image
                    src={img}
                    alt={title}
                    fill
                    sizes="25vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/10" />

                  <div className="absolute inset-x-0 bottom-0 pb-3 z-10 flex flex-col">
                    <Icon
                      size={36}
                      strokeWidth={1.5}
                      className="text-red-500 mb-1.5 ml-3 drop-shadow-[0_0_14px_rgba(220,38,38,0.8)]"
                    />
                    <div className="px-3 flex flex-col">
                      <h3 className="font-display font-semibold text-[12px] leading-[1.25] text-white mb-1">
                        {title}
                      </h3>
                      <p className="text-gray-300 text-[10px] leading-[1.4] mb-2">
                        {desc}
                      </p>
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
        title={
          <>
            Ready to install or need support
            <br />
            with your wellness system?
          </>
        }
        subtitle="Our specialist engineers are here to help. Reliable solutions. Healthier environments."
        buttonLabel="Get in Touch Today"
        buttonHref="/contact"
      />

      <ContactPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
    </main>
  );
}
