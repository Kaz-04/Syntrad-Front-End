"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, Headphones, GraduationCap, Zap, ShieldCheck, Building2, MapPin,
  ChefHat, Refrigerator, CheckCircle2, Power, Droplet, Thermometer, Wind,
  Cpu, AlertTriangle, MessageCircle, Search, Wrench,
} from "lucide-react";

import PageHero from "../../components/PageHero";
import SectionHeading from "../../components/SectionHeading";
import Container from "../../components/container";
import ContactPopup from "../../components/ContactPopup";

const heroButtons = [
  { label: "Book a Catering Equipment Repair", href: "/contact", icon: ArrowRight },
  { label: "Request a Service Quote", href: "#service-quote", icon: Headphones, variant: "outline" },
];

const trustPoints = [
  { icon: GraduationCap, title: "Manufacturer Trained Technicians", desc: "" },
  { icon: Zap, title: "Fast Turnaround", desc: "Minimise Kitchen Downtime" },
  { icon: ShieldCheck, title: "Compliant & Safe Repairs", desc: "" },
  { icon: Building2, title: "Restaurants, Hotels & Cafés", desc: "" },
  { icon: MapPin, title: "London Based", desc: "Serving the UK" },
];

const featureBlocks = [
  {
    icon: ChefHat,
    title: "Cooking Equipment",
    desc: "Expert repairs and servicing for commercial cooking equipment across kitchens of every size.",
    checklist: ["Combi & convection ovens", "Fryers & griddles", "Induction & gas hobs", "Grills & salamanders", "Extraction & ventilation", "Dishwashers & glasswashers"],
    href: "/contact",
    img: "/assets/images/commercial-kitchen.jpg",
  },
  {
    icon: Refrigerator,
    title: "Refrigeration & Storage",
    desc: "Reliable support for refrigeration, cold storage and food safety critical equipment.",
    checklist: ["Walk-in cold rooms", "Under-counter fridges & freezers", "Display chillers", "Blast chillers", "Ice machines", "Temperature monitoring & compliance"],
    href: "/contact",
    img: "/assets/images/hvac-cooling-unit.jpg",
  },
];

const faults = [
  { icon: Power, title: "No Power", desc: "Equipment not turning on or tripping the supply." },
  { icon: Droplet, title: "Leaking", desc: "Water or refrigerant leaks from units or connections." },
  { icon: Thermometer, title: "Temperature Issues", desc: "Not heating, not cooling or inconsistent temperatures." },
  { icon: Wind, title: "Ventilation Faults", desc: "Extraction problems, poor airflow or noisy fans." },
  { icon: AlertTriangle, title: "Food Safety Alarms", desc: "Alarm faults, sensor errors or compliance concerns." },
  { icon: Cpu, title: "Electronic Faults", desc: "Error codes, control board issues or display faults." },
];

const processSteps = [
  { number: "01", icon: MessageCircle, title: "Enquiry", desc: "Get in touch with details of your equipment and issue." },
  { number: "02", icon: Search, title: "Assessment", desc: "We diagnose the fault and provide a clear quote (upfront, no surprises)." },
  { number: "03", icon: Wrench, title: "Repair", desc: "Our expert technicians carry out the repair using genuine parts." },
  { number: "04", icon: CheckCircle2, title: "Return & Support", desc: "Your equipment is tested, returned and ready to service. Ongoing support available." },
];

const brands = ["Rational", "Falcon", "Foster", "Williams", "Blue Seal", "Hobart"];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function HospitalityCateringClient() {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <main className="w-full overflow-hidden bg-black text-white font-body pt-16 sm:pt-20">

      <div
        onClickCapture={(e) => {
          const link = e.target.closest("a");
          if (link && link.getAttribute("href") === "#service-quote") {
            e.preventDefault();
            e.stopPropagation();
            setPopupOpen(true);
          }
        }}
      >
        <PageHero
          pageLabel="Hospitality & Catering"
          heading={["Commercial Catering", "Equipment Repair.", "Hospitality & Catering."]}
          description="Reliable repair and servicing for commercial kitchen and catering equipment. We minimise downtime and keep your appliances running efficiently and safely, for restaurants, hotels, cafés and hospitality businesses."
          buttons={heroButtons}
          features={trustPoints}
          visual={
            <>
              <img
                src="/assets/images/cooking.png"
                alt="Commercial kitchen catering equipment on fire ready for service"
                className="absolute inset-0 w-full h-full object-cover object-right md:scale-[1.05] md:origin-right"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 35%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0) 100%)",
                }}
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
            {featureBlocks.map(({ icon: Icon, title, desc, checklist, href, img }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="relative h-[340px] sm:h-[360px] bg-[#0e0e0e] border border-white/10 hover:border-red-700/50 rounded-lg overflow-hidden transition-colors"
              >
                <Image src={img} alt={title} fill sizes="50vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/5" />

                <div className="relative z-10 h-full flex flex-col p-4 sm:p-5">
                  <span className="block w-6 h-[2px] bg-red-600 mb-1.5 shadow-[0_0_6px_rgba(0,0,0,0.8)]" />
                  <Icon
                    size={20}
                    strokeWidth={1.6}
                    className="text-red-500 mb-1.5 drop-shadow-[0_0_10px_rgba(220,38,38,0.6)]"
                  />
                  <h3 className="font-display font-semibold text-[17px] sm:text-[19px] leading-[1.2] text-white mb-1 [text-shadow:0_1px_6px_rgba(0,0,0,0.9)]">
                    {title}
                  </h3>
                  <p className="text-gray-300 text-[12px] sm:text-[12.5px] leading-[1.4] mb-2 max-w-[280px] [text-shadow:0_1px_6px_rgba(0,0,0,0.9)]">
                    {desc}
                  </p>
                  <ul className="space-y-0.5 mb-3">
                    {checklist.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-[11.5px] text-gray-300 [text-shadow:0_1px_6px_rgba(0,0,0,0.9)]"
                      >
                        <CheckCircle2 size={13} className="text-red-500 shrink-0 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={href}
                    className="mt-auto inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-[12.5px] font-semibold px-4 py-2 rounded-md transition-colors w-fit"
                  >
                    Learn more <ArrowRight size={14} />
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
                diagnose and repair all common catering equipment issues.
              </p>
              <Link
                href="/contact"
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
              A simple, transparent process to get your kitchen back up and running.
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
            Brands We Support
          </span>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
            {brands.map((brand) => (
              <span key={brand} className="font-display font-bold text-[18px] sm:text-[20px] text-gray-400">
                {brand}
              </span>
            ))}
            <span className="text-[#8a8a8a] text-[12px]">and many more...</span>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-r from-red-950/80 via-red-900/40 to-black">
        <Container className="py-8 sm:py-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-start sm:items-center gap-4">
              <span className="w-14 h-14 rounded-full border border-white/60 flex items-center justify-center shrink-0">
                <Headphones size={22} strokeWidth={1.7} className="text-white" />
              </span>
              <div>
                <h3 className="font-display font-semibold text-[18px] sm:text-[20px] leading-[1.3] text-white mb-1">
                  Ready to get your kitchen<br />back to full service?
                </h3>
                <p className="text-gray-300 text-[12.5px] leading-[1.5]">
                  Book a repair or request a quote today. Fast response. Expert care.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white text-[13px] font-semibold px-5 py-2.5 rounded-md transition-colors whitespace-nowrap"
              >
                Book a Catering Equipment Repair <ArrowRight size={15} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-white/40 hover:border-white text-white text-[13px] font-medium px-5 py-2.5 rounded-md transition-colors whitespace-nowrap"
              >
                Request a Service Quote <Headphones size={15} />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <ContactPopup open={popupOpen} onClose={() => setPopupOpen(false)} />

    </main>
  );
}