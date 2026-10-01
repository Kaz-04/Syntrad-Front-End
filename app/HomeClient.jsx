"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Headphones, GraduationCap, Zap, Settings, MapPin,
  Coffee, UtensilsCrossed, Dumbbell, Flame, Snowflake, Cpu, Cog,
  Bot, MoreHorizontal, ShieldCheck, Users, Star, Wrench, Phone, ArrowRight,
} from "lucide-react";

import PageHero from "./components/PageHero";
import SectionHeading from "./components/SectionHeading";
import UrgentCall from "./components/UrgentCall";
import Container from "./components/container";

const trustPoints = [
  { icon: GraduationCap, title: "Specialist Expertise", desc: "Real experience across a wide range of systems" },
  { icon: Zap, title: "Rapid Response", desc: "Fast turnaround to get you back up and running" },
  { icon: Settings, title: "End-to-End Support", desc: "From fault finding to long-term solutions" },
  { icon: MapPin, title: "London Based", desc: "Proudly serving homes and businesses across London and the UK" },
];

const heroButtons = [
  { label: "Repair & Service", href: "/repair-and-service", icon: ArrowRight },
  { label: "Discuss an Engineering Project", href: "/engineering", icon: Headphones, variant: "outline" },
];

const services = [
  { icon: Coffee, title: "Coffee Machines", desc: "Domestic Sage machines and more.", img: "/assets/images/cscfe.png", href: "/repair-and-service/coffee-machines-service" },
  { icon: UtensilsCrossed, title: "Commercial Catering Equipment", desc: "Installation, repairs and maintenance.", img: "/assets/images/commercial-kitchen.jpg", href: "/repair-and-service/hospitality-catering" },
  { icon: Dumbbell, title: "Gym & Fitness Equipment", desc: "Repairs, servicing and performance support.", img: "/assets/images/gym-equipment-floor.jpg", href: "/repair-and-service/gym-fitness-equipment" },
  { icon: Flame, title: "Sauna Systems", desc: "Installation, repairs and control system support.", img: "/assets/images/sauna-interior.jpg", href: "/repair-and-service/sauna&cold-plunge" },
  { icon: Snowflake, title: "Cold Plunge Systems", desc: "Setup, repairs and temperature control.", img: "/assets/images/cold_plunge_image_extracted.png", href: "/repair-and-service/sauna&cold-plunge" },
  { icon: Cpu, title: "Electronics & PCB Repair", desc: "Component level repairs and diagnostics.", img: "/assets/images/circuit-board-testing.jpg", href: "/repair-and-service/electronics-pcb-repair" },
  { icon: Cog, title: "Pumps / Motors & Machinery", desc: "Servicing, fault finding and rebuilds.", img: "/assets/images/industrial-motor.jpg", href: "/repair-and-service/commercial-industrial" },
  { icon: Zap, title: "Electrical & EV", desc: "Electrical systems, EV charging and infrastructure support.", img: "/assets/images/ev-charging-station.jpg", href: "/engineering/ev-charging" },
  { icon: Bot, title: "Automation & Controls", desc: "Design, integration and troubleshooting.", img: "/assets/images/factory-production-line.jpg", href: "/engineering/automation" },
  { icon: MoreHorizontal, title: "Something Else?", desc: "Have a different system or project? We can help.", img: null, href: "/contact" },
];

const whyPoints = [
  { icon: ShieldCheck, title: <>Trusted by Individuals<br />and Businesses</>, desc: "A reputation built on quality, reliability and results." },
  { icon: Settings, title: <>Practical, Real-World<br />Experience</>, desc: "Engineers who understand equipment inside and out." },
  { icon: Users, title: "Personal Service", desc: "Clear communication and honest advice." },
  { icon: Star, title: <>A Long-Term<br />Partner</>, desc: "Ongoing support to keep your systems performing at their best." },
  { icon: Wrench, title: "1000+ Repairs Completed", desc: "Across a wide range of equipment." },
  { icon: Users, title: "Homes & Businesses", desc: "Proudly supporting customers nationwide." },
  { icon: ShieldCheck, title: "Expert Engineers", desc: "Skilled, qualified and experienced." },
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

export default function HomePage() {
  return (
    <main className="w-full overflow-hidden bg-black text-white font-body pt-16 sm:pt-20">

      <PageHero
        pageLabel="Home"
        heading={["Specialist Repairs.", "Advanced Engineering.", "Reliable Solutions."]}
        description="Syntrad supports domestic Sage coffee machines, commercial catering equipment, automation, electronics and specialist systems for homes and businesses."
        buttons={heroButtons}
        features={trustPoints}
        visual={
          <>
            <img
              src="/assets/hero/contact.png"
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

      <section className="border-b border-white/10">
        <Container className="py-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3 mb-2">
            <SectionHeading
              eyebrow="Our Services"
              title="What do you need help with?"
            />
            <p className="text-[#8a8a8a] text-[12px] leading-[1.5] max-w-[340px] lg:text-right">
              From everyday repairs to complex engineering challenges, we provide
              expert support across a wide range of equipment and systems.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.map(({ icon: Icon, title, desc, img, href }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="relative bg-[#0e0e0e] border border-white/10 hover:border-red-700/50 rounded-r-lg overflow-hidden transition-colors"
              >
                {img ? (
                  <div className="relative h-[200px] w-full">
                    <Image src={img} alt={title} fill sizes="20vw" className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/10" />

                    <div className="absolute inset-x-0 bottom-0 pb-3 z-10 flex flex-col">
                      <Icon
                        size={42}
                        strokeWidth={1.5}
                        className="text-red-500 mb-1.5 ml-3 drop-shadow-[0_0_14px_rgba(220,38,38,0.8)]"
                      />
                      <div className="px-3 flex flex-col">
                        <h3 className="font-display font-semibold text-[12.5px] leading-[1.25] text-white mb-1">{title}</h3>
                        <p className="text-gray-300 text-[10.5px] leading-[1.4] mb-2">{desc}</p>
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
                  <div className="h-[200px] w-full flex flex-col items-center justify-center text-center p-3">
                    <div className="w-11 h-11 rounded-full border border-red-600/60 flex items-center justify-center mb-2">
                      <Icon size={20} strokeWidth={1.7} className="text-red-500" />
                    </div>
                    <h3 className="font-display font-semibold text-[12.5px] leading-[1.25] mb-1">{title}</h3>
                    <p className="text-[#8a8a8a] text-[10.5px] leading-[1.4] mb-2">{desc}</p>
                    <Link
                      href={href}
                      className="text-red-500 hover:text-red-400 text-[11px] font-medium inline-flex items-center gap-1 transition-colors"
                    >
                      Learn more
                      <ArrowRight size={10} />
                    </Link>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <section className="border-b border-white/10">
        <Container className="py-6">
          <SectionHeading eyebrow="Why Syntrad" title="Why customers choose Syntrad" />

          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {whyPoints.map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={i} variants={fadeUp} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full border border-red-600/60 flex items-center justify-center shrink-0">
                  <Icon size={16} strokeWidth={1.7} className="text-red-500" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-[12.5px] leading-[1.3] mb-1">{title}</h3>
                  <p className="text-[#8a8a8a] text-[10.5px] leading-[1.45]">{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <UrgentCall
        title={<>Need something designed, integrated<br />or modified?</>}
        subtitle="From custom builds to system integration, our engineering team turns ideas into reliable, real-world solutions."
        buttonLabel="Discuss a Project"
        buttonHref="/contact"
      />

    </main>
  );
}