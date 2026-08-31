'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import {
  Settings,
  CircuitBoard,
  ShieldCheck,
  Wrench,
  Target,
  MapPin,
  Brain,
  Handshake,
  Cpu,
  Bot,
  Cloud,
  Boxes,
  Award,
  Zap,
  HeadphonesIcon,
  Headphones,
  ArrowRight,
} from 'lucide-react';

import { directorData } from '../../public/assets/assets';

gsap.registerPlugin(ScrollTrigger);

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const trustPoints = [
  { icon: ShieldCheck, title: "Engineering Excellence", desc: "Certified, experienced and solution-driven" },
  { icon: Zap, title: "Rapid Response", desc: "Fast turnarounds and minimal downtime" },
  { icon: Wrench, title: "End-to-End Delivery", desc: "Design, install, integrate and support" },
  { icon: MapPin, title: "London Based", desc: "Serving clients across the UK" },
];

/* =========================================================
   DATA
========================================================= */

const whatIsChecklist = [
  {
    icon: <Settings size={22} />,
    text: 'Engineering-led company with multidisciplinary expertise',
  },
  {
    icon: <CircuitBoard size={22} />,
    text: 'Solutions tailored to complex, high-value environments',
  },
  {
    icon: <ShieldCheck size={22} />,
    text: 'Focus on reliability, safety and long-term performance',
  },
  {
    icon: <Wrench size={22} />,
    text: 'Practical partner from concept through to completion',
  },
];


const standForCards = [
  {
    icon: <Target size={34} />,
    title: 'Precision',
    description:
      'We design and deliver engineered solutions with accuracy, attention to detail and a focus on doing things right.',
  },
  {
    icon: <ShieldCheck size={34} />,
    title: 'Reliability',
    description:
      'We build systems and partnerships you can depend on. Performance, safety and resilience are at the core of everything we do.',
  },
  {
    icon: <Brain size={34} />,
    title: 'Technical Depth',
    description:
      'Deep expertise across engineering disciplines allows us to solve complex problems and deliver innovative, effective solutions.',
  },
  {
    icon: <Handshake size={34} />,
    title: 'Client Trust',
    description:
      'We earn trust through clear communication, integrity and consistent delivery of results that create value.',
  },
];


const capabilities = [
  {
    icon: <Cpu size={50} />,
    title: 'Electrical Engineering',
    description:
      'Design, analysis and integration of electrical power and control systems.',
  },
  {
    icon: <CircuitBoard size={50} />,
    title: 'Electronics Engineering',
    description:
      'Hardware design, embedded systems and electronic solutions for complex applications.',
  },
  {
    icon: <Bot size={50} />,
    title: 'Automation Systems',
    description:
      'Automation and control systems that improve efficiency, safety and operational performance.',
  },
  {
    icon: <Cloud size={50} />,
    title: 'Connected Infrastructure',
    description:
      'Smart, connected systems and IoT solutions for monitoring, control and data-driven decisions.',
  },
  {
    icon: <Wrench size={50} />,
    title: 'Specialist Equipment',
    description:
      'Design and integration of specialist machinery and high-performance equipment.',
  },
  {
    icon: <Boxes size={50} />,
    title: <>Bespoke<br />Projects</>,
    description:
      'Tailored engineering solutions for unique challenges and specialised needs.',
  },
];


const whyClients = [
  {
    icon: <Settings size={28} />,
    text: 'Engineering-led mindset',
  },
  {
    icon: <Handshake size={28} />,
    text: 'Hands-on approach from start to finish',
  },
  {
    icon: <Award size={28} />,
    text: 'Proven expertise in complex systems',
  },
  {
    icon: <ShieldCheck size={28} />,
    text: 'Commitment to quality, safety and compliance',
  },
  {
    icon: <Zap size={28} />,
    text: 'Responsive, reliable and easy to work with',
  },
];


/* =========================================================
   SECTION HEADING
========================================================= */

function SectionHeading({ children, center = false }) {
  return (
    <div className={center ? 'text-center' : ''}>

      <div
        className={`mb-2 h-[2px] w-[22px] bg-red-600 ${center ? 'mx-auto' : ''
          }`}
      />

      <h2 className="text-[27px] font-bold leading-tight tracking-tight md:text-[29px]">
        {children}
      </h2>

    </div>
  );
}


/* =========================================================
   ABOUT CLIENT
========================================================= */

export default function AboutClient() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('.animate-section');

      gsap.set(sections, {
        opacity: 0,
        y: 25,
      });

      sections.forEach((section) => {
        gsap.to(section, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 95%',
            toggleActions: 'play reverse play reverse',
          },
        });
      });
    }, containerRef);

    const refresh = () => ScrollTrigger.refresh();

    window.addEventListener('load', refresh);

    if (typeof document !== 'undefined' && document.fonts) {
      document.fonts.ready.then(refresh);
    }

    return () => {
      ctx.revert();
      window.removeEventListener('load', refresh);
    };
  }, []);


  return (
    <main
      ref={containerRef}
      className="relative mt-8 min-h-screen overflow-hidden bg-black text-white"
    >


      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative border-b border-white/10 overflow-hidden">
        <div className="absolute inset-y-0 right-0 w-[48%] bg-red-950/20 blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-[8%] w-[320px] h-[320px] bg-red-700/10 blur-[110px] pointer-events-none" />
      
        <div className="relative max-w-[1220px] mx-auto px-4 lg:px-0 min-h-[350px] flex items-center py-12 md:py-14">
          <div className="grid grid-cols-1 md:grid-cols-[65%_35%] items-center w-full">
      
            {/* LEFT CONTENT */}
            <motion.div
              className="relative z-10 w-full"
              variants={stagger}
              initial="hidden"
              animate="show"
            >
              <motion.h1
                variants={fadeUp}
                className="font-display text-[38px] sm:text-[45px] md:text-[50px] font-bold leading-[1.08] tracking-[-0.02em] max-w-[590px] mb-4"
              >
                Built Around Engineering, Reliability and Practical{" "}
                <span className="text-red-600">Problem-Solving.</span>
              </motion.h1>
      
              <motion.p
                variants={fadeUp}
                className="text-[#8d8d8d] text-[13px] md:text-[14px] leading-[1.65] max-w-[530px] mb-5"
              >
                 Syntrad is an engineering-led company focused on complex
              systems, electronics, automation, specialist equipment and
              high-value technical solutions. We partner with businesses
              to solve difficult problems, improve performance and deliver
              results that matter.
              </motion.p>
      
              <motion.div
                variants={fadeUp}
                className="flex flex-wrap gap-3 mb-7"
              >
                <Link
                  href="/contact"
                  className="bg-red-600 hover:bg-red-700 px-5 py-2.5 rounded-md text-[12px] font-semibold inline-flex items-center justify-center gap-2 transition-colors"
                >
                  Discuss a Project
                  <ArrowRight size={14} />
                </Link>
      
                <Link
                  href="/contact"
                  className="border border-red-600/80 hover:bg-red-600 px-5 py-2.5 rounded-md text-[12px] font-semibold inline-flex items-center justify-center gap-2 transition-colors"
                >
                  Request Technical Support
                  <Headphones size={14} />
                </Link>
              </motion.div>
      
              <motion.div
                variants={fadeUp}
                className="grid grid-cols-4 gap-8 w-full max-w-[850px]"
              >
                {trustPoints.map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    className="flex items-start gap-3 min-w-0"
                  >
                    <Icon
                      className="text-red-600 shrink-0 mt-0.5"
                      size={24}
                      strokeWidth={1.7}
                    />
      
                    <div className="min-w-0">
                      <p className="font-semibold text-[15px] leading-[1.2] whitespace-nowrap mb-1">
                        {title}
                      </p>
      
                      <p className="text-[#777] text-[13px] leading-[1.35]">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
      
            {/* MAIN IMAGE */}
            <motion.div
              className="flex justify-center md:justify-end items-center"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src="/assets/mainImg.png"
                alt="Main Illustration"
                width={750}
                height={650}
                className="w-full max-w-[620px] h-auto object-contain md:translate-x-8"
              />
            </motion.div>
      
          </div>
        </div>
      </section>



      {/* =========================================================
          WHAT IS SYNTRAD
      ========================================================= */}

      <section className="animate-section border-b border-red-900/30 px-6 py-3">

        <div className="mx-auto w-full max-w-[1220px]">

          <SectionHeading>
            What is Syntrad?
          </SectionHeading>


          <div className="mb-4 mt-3 grid grid-cols-1 gap-6 md:grid-cols-2">


            {/* LEFT */}

            <div className="space-y-2 text-[12px] leading-[1.55] text-gray-300 md:text-[13px]">

              <p>
                Syntrad was founded on a simple belief: engineering should
                solve real problems and create real value.
              </p>

              <p>
                We work with organisations across multiple sectors to design,
                build, integrate and support complex technical solutions.
                From initial concept and system design to deployment and
                long-term support, we take a hands-on, engineering-first
                approach to every project.
              </p>

            </div>


            {/* RIGHT CHECKLIST */}

            <ul className="space-y-2.5">

              {whatIsChecklist.map((item, index) => (

                <li
                  key={index}
                  className="flex items-start gap-3"
                >

                  <span className="mt-[1px] shrink-0 text-red-500">
                    {item.icon}
                  </span>

                  <span className="text-[11px] leading-[1.45] text-gray-200 md:text-[12px]">
                    {item.text}
                  </span>

                </li>

              ))}

            </ul>

          </div>



          {/* =====================================================
              DIRECTOR
          ===================================================== */}

          <div className="grid grid-cols-1 items-center gap-5 rounded-lg border border-red-800/40 bg-gradient-to-br from-red-950/45 via-black to-black p-3 md:grid-cols-[295px_1fr]">


            {/* IMAGE */}

            <div className="relative h-[205px] w-full overflow-hidden rounded-md md:h-[215px]">

              <Image
                src={directorData.image}
                alt={directorData.name}
                fill
                className="object-cover"
              />

            </div>


            {/* CONTENT */}

            <div>

              <p className="mb-1 text-[12px] font-semibold tracking-wide text-red-500">
                DIRECTOR &amp; LEAD ENGINEER
              </p>


              <h3 className="mb-2 text-[27px] font-bold leading-tight md:text-[25px]">
                {directorData.name}
              </h3>


              <div className="space-y-2 text-[15px] leading-[1.55] text-gray-300 md:text-[11px]">

                <p>
                  {directorData.intro}
                </p>

                <p>
                  {directorData.leadership}
                </p>

              </div>


              <Link
                href="/about/kaz-moorjani"
                className="mt-3 inline-flex items-center gap-2 rounded-full border border-red-600 px-4 py-1.5 text-[12px] font-semibold text-white transition hover:bg-red-600"
              >
                Learn more about Kaz
                <ArrowRight size={14} />
              </Link>

            </div>

          </div>

        </div>

      </section>



      {/* =========================================================
          WHAT WE STAND FOR
      ========================================================= */}

      <section className="animate-section border-b  border-red-900/30 px-6 py-4">
        <div className="mx-auto w-full max-w-[1220px]">

          <SectionHeading>
            What We Stand For
          </SectionHeading>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 ">

            {standForCards.map((card, index) => (

              <div
                key={index}
                className="flex items-start gap-4 rounded-md border border-gray-500 bg-[#1a1a1a] p-4"
              >

                {/* ICON - LEFT */}
                <div className="shrink-0 pt-0.5 text-red-500">
                  {card.icon}
                </div>

                {/* TEXT - RIGHT */}
                <div className="min-w-0">

                  <h3 className="mb-1.5 text-[16px] font-semibold leading-tight text-white">
                    {card.title}
                  </h3>

                  <p className="text-[13px] leading-[1.45] text-gray-400">
                    {card.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          CAPABILITIES
      ========================================================= */}

      <section className="animate-section border-b border-red-900/30 px-6 py-3">

        <div className="mx-auto w-full max-w-[1220px]">

          <SectionHeading>
            Capabilities
          </SectionHeading>


          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">

            {capabilities.map((cap, index) => (

              <div
                key={index}
                className="flex min-h-[180px] flex-col items-center rounded-md border border-red-800/35 bg-black/70 px-3 py-4 text-center"
              >

                {/* ICON */}

                <div className="mb-3 text-red-500">
                  {cap.icon}
                </div>


                {/* TITLE */}

                <h3 className="mb-2 text-[22px] font-semibold leading-[1.2] md:text-[18px]">
                  {cap.title}
                </h3>


                {/* DESCRIPTION */}

                <p className="text-[18px] leading-[1.5] text-gray-400 md:text-[14px]">
                  {cap.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* =========================================================
          WHY CLIENTS
      ========================================================= */}

      <section className="animate-section px-6 py-3">

        <div className="mx-auto w-full max-w-[1220px] rounded-lg border border-red-800/35 px-5 py-3.5">

          <div className="mb-3">

            <div className="mx-auto mb-2 h-[2px] w-[22px] bg-red-600" />

            <h2 className="text-center text-[25px] font-bold">
              Why Clients Work With Syntrad
            </h2>

          </div>


          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">

            {whyClients.map((item, index) => (

              <div
                key={index}
                className="flex items-start gap-2.5"
              >

                <span className="mt-0.5 shrink-0 text-red-500">
                  {item.icon}
                </span>

                <span className="text-[14px] leading-[1.45] text-gray-200">
                  {item.text}
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* =========================================================
          CTA
      ========================================================= */}

      <section>
        <div className="max-w-[1220px] mx-auto px-4 lg:px-0 py-5">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative rounded-md overflow-hidden border border-red-700/50 bg-gradient-to-r from-[#390505] via-[#240303] to-[#110000] px-5 py-5 flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_20%_50%,rgba(255,40,40,.5),transparent_35%)]" />

            <div className="relative flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-red-600 flex items-center justify-center shrink-0">
                <Headphones className="text-white" size={22} />
              </div>

              <div>
                <h3 className="font-display text-[19px] md:text-[21px] font-bold leading-tight mb-1">
                  Have a system, fault or project that needs serious technical attention?
                </h3>

                <p className="text-[#999] text-[10px]">
                  Our engineers are ready to help. Fast response. Expert solutions. Minimal downtime.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="relative bg-red-600 hover:bg-red-700 px-5 py-2.5 rounded-md text-[11px] font-semibold whitespace-nowrap inline-flex items-center gap-2 transition-colors"
            >
              Get in Touch Today
              <ArrowRight size={12} />
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}