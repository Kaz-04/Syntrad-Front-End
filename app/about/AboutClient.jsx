"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Settings,
  CircuitBoard,
  ShieldCheck,
  Wrench,
  Target,
  Brain,
  Handshake,
  Award,
  Zap,
  Headphones,
  ArrowRight,
} from "lucide-react";

import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import UrgentCall from "../components/UrgentCall";
import Container from "../components/container";
import { directorData } from "../../public/assets/assets";

const KAZ_LINKEDIN_URL =
  directorData.linkedin || "https://www.linkedin.com/in/your-profile-here";

const directorParagraphs = [
  "Kaz Moorjani leads Syntrad Ltd with a hands-on, engineering-first approach. With deep expertise in electronics, automation and specialist equipment, he ensures every project is delivered to the highest standard of quality, reliability and safety.",
  "Kaz is passionate about solving complex technical challenges. He works closely with clients to understand their objectives, design the right solutions and deliver systems that perform in demanding environments.",
  "From strategy and design to delivery and ongoing support, Kaz is committed to engineering excellence, integrity and building long-term client partnerships.",
];

const whatIsChecklist = [
  {
    icon: Settings,
    text: "Engineering-led company with multidisciplinary expertise",
  },
  {
    icon: CircuitBoard,
    text: "Solutions tailored to complex, high-value environments",
  },
  {
    icon: ShieldCheck,
    text: "Focus on reliability, safety and long-term performance",
  },
  {
    icon: Wrench,
    text: "Practical partner from concept through to completion",
  },
];

const standForCards = [
  {
    icon: Target,
    title: "Precision",
    desc: "We design and deliver engineered solutions with accuracy, attention to detail and a focus on doing things right.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    desc: "We build systems and partnerships you can depend on. Performance, safety and resilience are at the core of everything we do.",
  },
  {
    icon: Brain,
    title: "Technical Depth",
    desc: "Deep expertise across engineering disciplines allows us to solve complex problems and deliver innovative, effective solutions.",
  },
  {
    icon: Handshake,
    title: "Client Trust",
    desc: "We earn trust through clear communication, integrity and consistent delivery of results that create value.",
  },
];

const capabilities = [
  {
    icon: "/assets/icons/icon_transformer.png",
    title: "Electrical Engineering",
    desc: "Design, analysis and integration of electrical power and control systems.",
  },
  {
    icon: "/assets/icons/icon_electrical_transparent.png",
    title: "Electronics Engineering",
    desc: "Hardware design, embedded systems and electronic solutions for complex applications.",
  },
  {
    icon: "/assets/icons/icon_robot_arm.png",
    title: "Automation Systems",
    desc: "Automation and control systems that improve efficiency, safety and operational performance.",
  },
  {
    icon: "/assets/icons/23_Sensor_Control.png",
    title: "Connected Infrastructure",
    desc: "Smart, connected systems and IoT solutions for monitoring, control and data-driven decisions.",
  },
  {
    icon: "/assets/icons/04_Specialist_Diagnostics.png",
    title: "Specialist Equipment",
    desc: "Design and integration of specialist machinery and high-performance equipment.",
  },
  {
    icon: "/assets/icons/05_Bespoke_Engineering.png",
    title: "Bespoke Projects",
    desc: "Tailored engineering solutions for unique challenges and specialised needs.",
  },
];

const whyClients = [
  {
    icon: Settings,
    text: (
      <>
        Engineering-led
        <br />
        mindset
      </>
    ),
  },
  {
    icon: Handshake,
    text: (
      <>
        Hands-on approach
        <br />
        from start to finish
      </>
    ),
  },
  {
    icon: Award,
    text: (
      <>
        Proven expertise in
        <br />
        complex systems
      </>
    ),
  },
  {
    icon: ShieldCheck,
    text: (
      <>
        Commitment to quality,
        <br />
        safety and compliance
      </>
    ),
  },
  {
    icon: Zap,
    text: (
      <>
        Responsive, reliable
        <br />
        and easy to work with
      </>
    ),
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function AboutClient() {
  return (
    <main className="w-full overflow-hidden bg-black text-white font-body pt-16 sm:pt-20">
      <PageHero
        pageLabel="About"
        heading={[
          "Built Around Engineering,",
          "Reliability and Practical",
          "Problem-Solving.",
        ]}
        headingAccentIndex={2}
        description="Syntrad is an engineering-led company focused on complex systems, electronics, automation, specialist equipment and high-value technical solutions. We partner with businesses to solve difficult problems, improve performance and deliver results that matter."
        buttons={[
          {
            label: "Discuss a Project",
            href: "/contact",
            icon: ArrowRight,
            variant: "filled",
          },
          {
            label: "Request Technical Support",
            href: "/contact",
            icon: Headphones,
            variant: "outline",
          },
        ]}
        visual={
          <>
            <img
              src="/assets/Hero/contact.png"
              alt="Syntrad engineering illustration"
              className="absolute inset-0 w-full h-full object-contain object-right md:scale-[1.18] md:origin-right md:translate-x-[8%]"
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

      <section>
        <Container className="pt-6 md:pt-8 pb-0">
          <SectionHeading title="What is Syntrad?" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-6">
            <motion.div
              className="space-y-4 text-gray-300 text-[13.5px] leading-[1.65]"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.p variants={fadeUp}>
                Syntrad was founded on a simple belief: engineering should solve
                real problems and create real value.
              </motion.p>
              <motion.p variants={fadeUp}>
                We work with organisations across multiple sectors to design,
                build, integrate and support complex technical solutions. From
                initial concept and system design to deployment and long-term
                support, we take a hands-on, engineering-first approach to every
                project.
              </motion.p>
            </motion.div>

            <motion.ul
              className="space-y-4 lg:pl-6"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {whatIsChecklist.map(({ icon: Icon, text }) => (
                <motion.li
                  key={text}
                  variants={fadeUp}
                  className="flex items-center gap-3"
                >
                  <Icon
                    size={20}
                    strokeWidth={1.5}
                    className="text-red-500 shrink-0"
                  />
                  <span className="text-gray-200 text-[12.5px] leading-[1.4]">
                    {text}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-lg border border-red-800/40 bg-gradient-to-br from-red-950/50 via-black to-black grid grid-cols-1 md:grid-cols-[340px_1fr] items-stretch"
          >
            <div className="relative w-full h-72 md:h-full md:min-h-[260px]">
              <Image
                src={directorData.image}
                alt={directorData.name}
                fill
                className="object-cover object-top"
              />

              <div className="hidden md:block absolute inset-y-0 right-0 w-1/4 bg-gradient-to-r from-transparent to-black/60 pointer-events-none" />
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <p className="text-red-500 text-[11px] font-semibold tracking-widest uppercase mb-1">
                Director &amp; Lead Engineer
              </p>
              <h3 className="font-display text-2xl font-bold mb-3">
                {directorData.name}
              </h3>
              <div className="space-y-2.5 text-gray-300 text-[12px] leading-[1.6]">
                {directorParagraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              <a
                href="https://www.linkedin.com/in/kaz-moorjani/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 self-start inline-flex items-center gap-1.5 text-red-500 text-[12px] font-medium px-4 py-1.5 rounded-md border border-red-600/50 bg-gradient-to-b from-red-600/15 to-red-600/5 hover:border-red-600/70 hover:from-red-600/25 hover:to-red-600/10 transition-colors"
              >
                Learn more about Kaz
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </motion.div>
        </Container>
      </section>

      <section>
        <Container className="pt-6 md:pt-8 pb-0">
          <SectionHeading title="What We Stand For" />

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {standForCards.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="flex items-start gap-3 rounded-lg border border-white/10 bg-[#0e0e0e] hover:border-red-700/50 transition-colors p-4"
              >
                <Icon
                  size={40}
                  strokeWidth={1.2}
                  className="text-red-500 shrink-0"
                  style={{ filter: "drop-shadow(0 0 5px rgba(239,68,68,0.6))" }}
                />
                <div>
                  <h3 className="font-display font-semibold text-[14px] leading-[1.25] mb-1.5 text-white">
                    {title}
                  </h3>
                  <p className="text-[#8a8a8a] text-[10.5px] leading-[1.45]">
                    {desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <section>
        <Container className="pt-6 md:pt-8 pb-0">
          <SectionHeading title="Capabilities" />

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {capabilities.map(({ icon, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="bg-[#0e0e0e] border border-white/10 hover:border-red-700/50 rounded-lg p-4 transition-colors flex flex-col items-center text-center"
              >
                <img
                  src={icon}
                  alt=""
                  className="w-14 h-14 object-contain mb-3"
                />
                <h3 className="font-display font-semibold text-[13.5px] leading-[1.25] mb-2">
                  {title}
                </h3>
                <p className="text-[#8a8a8a] text-[10.5px] leading-[1.45]">
                  {desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <section>
        <Container className="pt-6 md:pt-8 pb-0">
          <div className="rounded-lg border border-white/10 bg-[#0e0e0e] py-5">
            <h2 className="font-display text-lg sm:text-xl font-bold text-center mb-4">
              Why Clients Work With Syntrad
            </h2>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
            >
              {whyClients.map(({ icon: Icon, text }, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-center gap-3 px-5 py-3 border-t border-white/10 first:border-t-0 lg:border-t-0 lg:border-l lg:first:border-l-0"
                >
                  <Icon
                    size={26}
                    strokeWidth={1.4}
                    className="text-red-500 shrink-0"
                  />
                  <span className="text-gray-200 text-[12px] leading-[1.35]">
                    {text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      <UrgentCall
        title={
          <>
            Have a system, fault or project that
            <br />
            needs serious technical attention?
          </>
        }
        subtitle="Our engineers are ready to help. Fast response. Expert solutions. Minimal downtime."
        buttonLabel="Get in Touch Today"
        buttonHref="/contact"
      />
    </main>
  );
}
