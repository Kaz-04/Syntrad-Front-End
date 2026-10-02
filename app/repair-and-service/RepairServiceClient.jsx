"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Headphones,
  Wrench,
  Zap,
  ShieldCheck,
  Users,
  Coffee,
  UtensilsCrossed,
  Dumbbell,
  Cpu,
  Cog,
  Flame,
  Snowflake,
  MoreHorizontal,
  Mail,
  FileSearch,
  CalendarCheck,
  Settings2,
} from "lucide-react";

import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import UrgentCall from "../components/UrgentCall";
import Container from "../components/container";
import ContactPopup from "../components/ContactPopup";

const heroButtons = [
  { label: "Book a Repair", href: "/contact", icon: ArrowRight },
  {
    label: "Get Technical Advice",
    href: "#technical-advice",
    icon: Headphones,
    variant: "outline",
  },
];

const trustPoints = [
  {
    icon: Wrench,
    title: "Specialist Expertise",
    desc: "Multi-brand knowledge across a wide range of equipment.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    desc: "Minimise downtime with our responsive service.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Repairs",
    desc: "Reliable, lasting solutions using genuine and approved parts.",
  },
  {
    icon: Users,
    title: "Businesses & Homes",
    desc: "Supporting commercial and domestic customers.",
  },
];

const services = [
  {
    icon: Coffee,
    title: "Coffee Machines",
    desc: "Diagnostics, repairs and servicing for domestic and commercial machines.",
    img: "/assets/images/cscfe.png",
    href: "/repair-and-service/coffee-machines-service",
  },
  {
    icon: UtensilsCrossed,
    title: (
      <>
        Commercial Catering
        <br />
        Equipment
      </>
    ),
    desc: "Installation support, repairs and maintenance for all major brands.",
    img: "/assets/images/commercial-kitchen.jpg",
    href: "/repair-and-service/hospitality-catering",
  },
  {
    icon: Dumbbell,
    title: (
      <>
        Gym & Fitness
        <br />
        Equipment
      </>
    ),
    desc: "Repairs, servicing and performance support for fitness systems.",
    img: "/assets/images/gym-equipment-floor.jpg",
    href: "/repair-and-service/gym-fitness-equipment",
  },
  {
    icon: Cpu,
    title: (
      <>
        Electronics & PCB
        <br />
        Repair
      </>
    ),
    desc: "Component level repairs, microelectronics and diagnostic services.",
    img: "/assets/images/circuit-board-testing.jpg",
    href: "/repair-and-service/electronics-pcb-repair",
  },
  {
    icon: Cog,
    title: (
      <>
        Pumps / Motors &<br />
        Machinery
      </>
    ),
    desc: "Servicing, fault finding and repairs for pumps, motors and machinery.",
    img: "/assets/images/industrial-motor.jpg",
    href: "/repair-and-service/commercial-industrial",
  },
  {
    icon: Flame,
    title: "Sauna Systems",
    desc: "Diagnostics, repairs and servicing for sauna control systems and heating equipment.",
    img: "/assets/images/sauna-interior.jpg",
    href: "/repair-and-service/sauna&cold-plunge",
  },
  {
    icon: Snowflake,
    title: "Cold Plunge Systems",
    desc: "Servicing, repairs and temperature control system support.",
    img: "/assets/images/cold_plunge_image_extracted.png",
    href: "/repair-and-service/sauna&cold-plunge",
  },
  {
    icon: MoreHorizontal,
    title: (
      <>
        Other Specialist
        <br />
        Equipment
      </>
    ),
    desc: "Medical, clocks, network and smart home — we repair a wide range of specialist equipment.",
    img: null,
    href: "/repair-and-service/other-services",
  },
];

const processSteps = [
  {
    number: "01",
    icon: Mail,
    title: "Send your enquiry",
    desc: "Tell us about your equipment and the issue you're experiencing.",
  },
  {
    number: "02",
    icon: FileSearch,
    title: "We review the fault",
    desc: "Our experts assess your enquiry and provide next steps.",
  },
  {
    number: "03",
    icon: CalendarCheck,
    title: "Book service or collection",
    desc: "Arrange a convenient time for on-site service or equipment collection.",
  },
  {
    number: "04",
    icon: Settings2,
    title: "Repair and support",
    desc: "We carry out the repair, test everything thoroughly and keep you supported.",
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

export default function RepairServiceClient() {
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
          pageLabel="Repair & Service"
          heading={[
            "Repair & Service.",
            "Specialist Diagnostics.",
            "Reliable Repairs.",
          ]}
          description="From coffee machines and catering equipment to fitness systems, saunas, cold plunges and specialist electronics, Syntrad delivers fast, reliable repairs and ongoing support to keep your equipment performing at its best."
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
              eyebrow="Our Repair & Service Solutions"
              title="What can we help you with?"
            />
            <p className="text-[#8a8a8a] text-[14px] sm:text-[15px] leading-[1.55] max-w-full lg:max-w-[420px] lg:text-right">
              Expert diagnostics, repair and servicing across a wide range of
              domestic and commercial equipment. Select a category below to find
              out more.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.map(({ icon: Icon, title, desc, img, href }, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="relative bg-[#0e0e0e] border border-white/10 hover:border-red-700/50 rounded-r-lg overflow-hidden transition-colors"
              >
                {img ? (
                  <div className="relative h-[200px] w-full">
                    <Image
                      src={img}
                      alt={
                        typeof title === "string" ? title : "Repair & service"
                      }
                      fill
                      sizes="25vw"
                      className="object-cover"
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
                        <Link
                          href={href}
                          className="text-red-500 hover:text-red-400 text-[11px] font-medium inline-flex items-center gap-1 w-fit transition-colors"
                        >
                          Learn more
                          <ArrowRight size={10} />
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="h-[200px] w-full flex flex-col p-3">
                    <Icon
                      size={42}
                      strokeWidth={1.5}
                      className="text-red-500 mb-1.5 ml-0 drop-shadow-[0_0_14px_rgba(220,38,38,0.8)]"
                    />
                    <div className="flex flex-col">
                      <h3 className="font-display font-semibold text-[12.5px] leading-[1.25] text-white mb-1">
                        {title}
                      </h3>
                      <p className="text-gray-300 text-[10.5px] leading-[1.4] mb-2">
                        {desc}
                      </p>
                      <Link
                        href={href}
                        className="text-red-500 hover:text-red-400 text-[11px] font-medium inline-flex items-center gap-1 w-fit transition-colors"
                      >
                        Learn more
                        <ArrowRight size={10} />
                      </Link>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <section className="border-b border-white/10">
        <Container className="py-6">
          <SectionHeading eyebrow="A Simple Process" title="How it works" />

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
            Not sure what category your
            <br />
            equipment falls under?
          </>
        }
        subtitle="Our team is here to help. Send us the details and we'll advise on the best solution."
        buttonLabel="Submit a Technical Enquiry"
        buttonHref="/contact"
      />

      <ContactPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
    </main>
  );
}
