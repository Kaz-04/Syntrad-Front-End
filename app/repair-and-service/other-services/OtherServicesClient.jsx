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
  Stethoscope,
  Clock,
  Network,
  Home,
  Bolt,
  MessageCircle,
  Search,
  Wrench,
} from "lucide-react";

import PageHero from "../../components/PageHero";
import SectionHeading from "../../components/SectionHeading";
import UrgentCall from "../../components/UrgentCall";
import Container from "../../components/container";
import ContactPopup from "../../components/ContactPopup";

const heroButtons = [
  { label: "Request Support", href: "/contact", icon: ArrowRight },
  {
    label: "Discuss Your Equipment",
    href: "#discuss-equipment",
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
        Wide-ranging knowledge
        <br />
        across unusual equipment.
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
        ongoing maintenance.
      </>
    ),
  },
  {
    icon: MapPin,
    title: "London Based",
    desc: (
      <>
        Serving homes, clinics and
        <br />
        businesses across the UK.
      </>
    ),
  },
];

const services = [
  {
    icon: Stethoscope,
    title: "Medical Equipment Service",
    desc: "Precise diagnostics, repair and maintenance for non-critical medical devices, prioritising reliability, safety and compliance.",
    checklist: [
      "Diagnostic equipment servicing",
      "Calibration & compliance checks",
      "Dental & optometry equipment",
      "Preventative maintenance plans",
    ],
    buttonLabel: "Support for Medical Equipment",
    img: "/assets/images/equipment-testing-rig.jpg",
  },
  {
    icon: Clock,
    title: "Clocks",
    desc: "Professional repair, maintenance and restoration for all types of mechanical clocks, with careful handling of delicate movements.",
    checklist: [
      "Mechanical movement repair",
      "Restoration of antique clocks",
      "Precision timekeeping calibration",
      "Careful, delicate handling",
    ],
    buttonLabel: "Support for Clock Repairs",
    img: "/assets/images/industrial-machine-grayscale.jpg",
  },
  {
    icon: Network,
    title: "Network Service",
    desc: "Reliable installation, maintenance and troubleshooting of wired and wireless networks to keep you connected and secure.",
    checklist: [
      "Wi-Fi & network setup",
      "Firewall & security configuration",
      "VPN & remote access",
      "Fault finding & troubleshooting",
    ],
    buttonLabel: "Support for Network Systems",
    img: "/assets/images/server-rack-cabling.jpg",
  },
  {
    icon: Home,
    title: "Smart Home System",
    desc: "Installation and support for smart home technologies that enhance comfort, security and energy efficiency.",
    checklist: [
      "Smart lighting & climate control",
      "Security & access systems",
      "Automation & remote control",
      "Fault finding & diagnostics",
    ],
    buttonLabel: "Support for Smart Home Systems",
    img: "/assets/images/modern-house-exterior.jpg",
  },
  {
    icon: Bolt,
    title: "Electrical Engineering",
    desc: "Professional design, diagnostics and repair of electrical systems for residential, commercial and industrial needs.",
    checklist: [
      "Panel & switchgear installation",
      "Wiring & distribution systems",
      "Compliance & safety testing",
      "Emergency electrical call-outs",
    ],
    buttonLabel: "Support for Electrical Systems",
    img: "/assets/images/electrical-panel-room.jpg",
  },
];

const processSteps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Enquiry",
    desc: "Get in touch with details of your equipment and issue.",
  },
  {
    number: "02",
    icon: Search,
    title: "Assessment",
    desc: "We diagnose the fault and provide a clear quote (upfront, no surprises).",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Repair",
    desc: "Our expert technicians carry out the repair using genuine parts.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Return & Support",
    desc: "Your equipment is tested, returned and ready to use. Ongoing support available.",
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

export default function OtherServicesClient() {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <main className="w-full overflow-hidden bg-black text-white font-body pt-16 sm:pt-20">
      <div
        onClickCapture={(e) => {
          const link = e.target.closest("a");
          if (link && link.getAttribute("href") === "#discuss-equipment") {
            e.preventDefault();
            e.stopPropagation();
            setPopupOpen(true);
          }
        }}
      >
        <PageHero
          pageLabel="Other Services"
          heading={[
            "Specialist Equipment.",
            "Medical, Clocks & Networks.",
            "Smart Home & Electrical.",
          ]}
          description="Medical equipment servicing, clock repair and restoration, network services and smart home systems — expert support for specialist equipment that doesn't fit neatly into one category."
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
          <SectionHeading eyebrow="" title="What can we help you with?" />

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.map(
              ({ icon: Icon, title, desc, checklist, buttonLabel, img }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  className="relative h-[300px] bg-[#0e0e0e] border border-white/10 hover:border-red-700/50 rounded-lg overflow-hidden transition-colors"
                >
                  <Image
                    src={img}
                    alt={title}
                    fill
                    sizes="50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/5" />

                  <div className="relative z-10 h-full flex flex-col p-4 sm:p-5">
                    <span className="block w-6 h-[2px] bg-red-600 mb-1.5 shadow-[0_0_6px_rgba(0,0,0,0.8)]" />
                    <Icon
                      size={20}
                      strokeWidth={1.6}
                      className="text-red-500 mb-1.5 drop-shadow-[0_0_10px_rgba(220,38,38,0.6)]"
                    />
                    <h3 className="font-display font-semibold text-[16px] sm:text-[17px] leading-[1.2] text-white mb-1 [text-shadow:0_1px_6px_rgba(0,0,0,0.9)]">
                      {title}
                    </h3>
                    <p className="text-gray-300 text-[11.5px] sm:text-[12px] leading-[1.4] mb-2 max-w-[300px] [text-shadow:0_1px_6px_rgba(0,0,0,0.9)]">
                      {desc}
                    </p>
                    <ul className="space-y-0.5 mb-3">
                      {checklist.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-[11px] text-gray-300 [text-shadow:0_1px_6px_rgba(0,0,0,0.9)]"
                        >
                          <CheckCircle2
                            size={12}
                            className="text-red-500 shrink-0 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="mt-auto inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-[12px] font-semibold px-4 py-2 rounded-md transition-colors w-fit"
                    >
                      {buttonLabel} <ArrowRight size={13} />
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
          <SectionHeading eyebrow="" title="Our Process" />

          <motion.div
            className="flex flex-col sm:flex-row items-start gap-6 sm:gap-3 mt-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {processSteps.map(({ number, icon: Icon, title, desc }, i) => (
              <motion.div
                key={number}
                variants={fadeUp}
                className="flex sm:flex-1 items-start sm:items-stretch gap-3"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <span className="w-9 h-9 rounded-full border border-red-600/60 flex items-center justify-center text-red-500 font-display font-semibold text-[12px] shrink-0">
                      {number}
                    </span>
                    <span className="w-9 h-9 rounded-full border border-red-600/60 flex items-center justify-center shrink-0">
                      <Icon
                        size={16}
                        strokeWidth={1.7}
                        className="text-red-500"
                      />
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-[13px] leading-[1.3] text-white mb-1">
                      {title}
                    </h3>
                    <p className="text-[#8a8a8a] text-[11.5px] leading-[1.5] max-w-[220px]">
                      {desc}
                    </p>
                  </div>
                </div>

                {i < processSteps.length - 1 && (
                  <ArrowRight
                    size={16}
                    className="hidden sm:block text-red-600/60 mt-2.5 shrink-0"
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <UrgentCall
        title={
          <>
            Have something that doesn't
            <br />
            fit neatly into a category?
          </>
        }
        subtitle="Send us the details of your equipment and we'll advise on the best solution."
        buttonLabel="Submit a Technical Enquiry"
        buttonHref="/contact"
      />

      <ContactPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
    </main>
  );
}
