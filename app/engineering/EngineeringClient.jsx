"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Headphones,
  Cog,
  Zap,
  ShieldCheck,
  MapPin,
  Bot,
  Cpu,
  Cloud,
  BatteryCharging,
  Ruler,
  LayoutGrid,
  Radio,
  ToggleLeft,
  Gauge,
  Activity,
  ArrowUpCircle,
  Search,
  Network,
  Wrench,
  Users,
  Phone,
} from "lucide-react";

import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import UrgentCall from "../components/UrgentCall";
import Container from "../components/container";
import ContactPopup from "../components/ContactPopup";

const heroButtons = [
  { label: "Discuss a Project", href: "/contact", icon: ArrowRight },
  {
    label: "Request Technical Support",
    href: "#technical-support",
    icon: Headphones,
    variant: "outline",
  },
];

const trustPoints = [
  {
    icon: Cog,
    title: "Practical Solutions",
    desc: "Real-world engineering that works",
  },
  {
    icon: Zap,
    title: "Multi-Disciplinary Expertise",
    desc: "Electrical, electronic, mechanical & software",
  },
  {
    icon: ShieldCheck,
    title: "From Concept to Delivery",
    desc: "Design, integrate and support",
  },
  {
    icon: MapPin,
    title: "UK Based",
    desc: "Serving homes, businesses and industry across the UK",
  },
];

const services = [
  {
    icon: Bot,
    title: (
      <>
        Automation &amp;
        <br />
        Control Systems
      </>
    ),
    desc: "Custom automation solutions to optimise performance, safety.",
    img: "/assets/images/factory-production-line.jpg",
    href: "/engineering/automation",
  },
  {
    icon: Cpu,
    title: (
      <>
        Electronics & PCB
        <br />
        Diagnostics
      </>
    ),
    desc: "Design, repair and diagnostics for electronic systems and control boards.",
    img: "/assets/images/circuit-board-testing.jpg",
    href: "/engineering/electrical",
  },
  {
    icon: Cog,
    title: (
      <>
        Electromechanical
        <br />
        Systems
      </>
    ),
    desc: "Precision engineering combining mechanical and electrical systems.",
    img: "/assets/images/industrial-motor.jpg",
    href: "/engineering/electromechanical",
  },
  {
    icon: Cloud,
    title: (
      <>
        Connected
        <br />
        Infrastructure &amp; IoT
      </>
    ),
    desc: "Intelligent connectivity, monitoring and data-driven control systems.",
    img: "/assets/images/cloud-computing-concept.jpg",
    href: "/engineering/iot",
  },
  {
    icon: BatteryCharging,
    title: (
      <>
        EV Charging &amp;
        <br />
        Energy Systems
      </>
    ),
    desc: "EV charging, power distribution and energy systems for a cleaner, more sustainable future.",
    img: "/assets/images/ev-charging-station.jpg",
    href: "/engineering/ev-charging",
  },
  {
    icon: Ruler,
    title: "Bespoke Engineering",
    desc: "Custom-built equipment, modifications and one-off projects for unique requirements.",
    img: "/assets/images/equipment-testing-rig.jpg",
    href: "/engineering/equipment",
  },
];

const capabilities = [
  { icon: LayoutGrid, title: "Control Panels", desc: "Design & build" },
  { icon: Radio, title: "Sensors", desc: "Integration" },
  { icon: ToggleLeft, title: "Relays", desc: "Configuration" },
  { icon: Gauge, title: "Pumps & Motors", desc: "Control & Setup" },
  { icon: Activity, title: "Monitoring", desc: "Data & Alerts" },
  { icon: ArrowUpCircle, title: "Upgrades", desc: "Modernisation" },
  { icon: Search, title: "Diagnostics", desc: "Fault Finding" },
  { icon: Network, title: "Integration", desc: "Complete Systems" },
];

const trustStats = [
  {
    icon: Wrench,
    title: "1000+ Projects Completed",
    desc: "Across a wide range of sectors",
  },
  {
    icon: Users,
    title: "Homes & Businesses",
    desc: "Proudly supporting customers nationwide.",
  },
  {
    icon: ShieldCheck,
    title: "Expert Engineers",
    desc: "Skilled, qualified and experienced.",
  },
  { icon: Phone, title: "Get in Touch", desc: "+44 20 7112 5377" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function EngineeringClient() {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <main className="w-full overflow-hidden bg-black text-white font-body pt-16 sm:pt-20">
      <div
        onClickCapture={(e) => {
          const link = e.target.closest("a");
          if (link && link.getAttribute("href") === "#technical-support") {
            e.preventDefault();
            e.stopPropagation();
            setPopupOpen(true);
          }
        }}
      >
        <PageHero
          pageLabel="Engineering"
          heading={[
            "Advanced Engineering.",
            "Design & Integration.",
            "Expert Support.",
          ]}
          description="Practical engineering support for automation, electrical systems, specialist equipment and bespoke technical projects — from initial concept through to long-term integration."
          buttons={heroButtons}
          features={trustPoints}
          visual={
            <>
              <img
                src="/assets/Hero/contact.png"
                alt="Syntrad engineering illustration"
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
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3 mb-2">
            <SectionHeading
              eyebrow="Our Engineering Services"
              title="Engineering Expertise"
            />
            <p className="text-[#8a8a8a] text-[14px] sm:text-[15px] leading-[1.55] max-w-full lg:max-w-[620px] lg:text-right">
              A complete range of engineering services to design, build,
              integrate and support reliable technical systems for homes,
              businesses and specialist applications.
            </p>
          </div>

          <motion.div
            className="flex flex-wrap justify-center gap-3"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.map(({ icon: Icon, title, desc, img, href }, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="relative w-[calc(50%-0.375rem)] sm:w-[calc(33.333%-0.5rem)] lg:w-[calc(25%-0.5625rem)] bg-[#0e0e0e] border border-white/10 hover:border-red-700/50 rounded-r-lg overflow-hidden transition-colors"
              >
                <Link
                  href={href}
                  aria-label={`Learn more about ${title}`}
                  className="block group"
                >
                  <div className="relative h-[200px] w-full">
                    <Image
                      src={img}
                      alt={
                        typeof title === "string"
                          ? title
                          : "Engineering service"
                      }
                      fill
                      sizes="25vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/10" />

                    <div className="absolute inset-x-0 bottom-0 pb-3 z-10 flex flex-col">
                      <Icon
                        size={42}
                        strokeWidth={1.5}
                        className="text-red-500 mb-1.5 ml-3 drop-shadow-[0_0_14px_rgba(220,38,38,0.8)]"
                      />
                      <div className="px-3 flex flex-col">
                        <h3 className="font-display font-semibold text-[12.5px] leading-[1.25] text-white mb-1">
                          {title}
                        </h3>
                        <p className="text-gray-300 text-[10.5px] leading-[1.4] mb-2">
                          {desc}
                        </p>
                        <span className="text-red-500 hover:text-red-400 text-[11px] font-medium inline-flex items-center gap-1 w-fit transition-colors">
                          Learn more
                          <ArrowRight size={10} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <section className="border-b border-white/10">
        <Container className="py-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3 mb-2">
            <SectionHeading
              eyebrow="In Practice"
              title="What we help design, integrate and improve"
            />
            <p className="text-[#8a8a8a] text-[14px] sm:text-[15px] leading-[1.55] max-w-full lg:max-w-[620px] lg:text-right">
              From individual components to complete systems, we provide
              engineering support across a wide range of equipment and
              applications.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {capabilities.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="bg-[#0e0e0e] border border-white/10 hover:border-red-700/50 rounded-lg px-3 py-5 flex flex-col items-center text-center transition-colors"
              >
                <Icon
                  size={22}
                  strokeWidth={1.6}
                  className="text-red-500 mb-2"
                />
                <h3 className="font-display font-semibold text-[11px] leading-[1.25] text-white mb-0.5">
                  {title}
                </h3>
                <p className="text-[#8a8a8a] text-[9.5px] leading-[1.4]">
                  {desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <UrgentCall
        title={
          <>
            Need something engineered,
            <br />
            integrated or modified?
          </>
        }
        subtitle="Our team can help you take your ideas from concept to completion with practical, reliable engineering solutions."
        buttonLabel="Discuss an Engineering Project"
        buttonHref="/contact"
      />

      <section className="border-b border-white/10">
        <Container className="py-8 sm:py-10">
          <motion.div
            className="flex flex-wrap justify-center gap-x-16 gap-y-8 lg:gap-x-20"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {trustStats.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex items-center gap-4 w-[calc(50%-2rem)] sm:w-auto"
              >
                <div className="w-14 h-14 rounded-full border border-red-600/60 flex items-center justify-center shrink-0">
                  <Icon size={24} strokeWidth={1.7} className="text-red-500" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-[17px] leading-[1.3] mb-1">
                    {title}
                  </h3>
                  <p className="text-[#8a8a8a] text-[13px] leading-[1.45]">
                    {desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <ContactPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
    </main>
  );
}
