'use client';

import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { aboutCards } from "../../public/assets/assets";

export default function AboutSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.4 });
    const controls = useAnimation();

    useEffect(() => {
        controls.start(isInView ? "visible" : "hidden");
    }, [isInView, controls]);

    const sectionVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
    };

    return (
        <section
            id="about"
            className="
    bg-black
    text-white
    pt-32 pb-20   /* 👈 pushes content below header */
    px-4 sm:px-8
  "
        >

            <motion.div
                ref={ref}
                variants={sectionVariants}
                initial="hidden"
                animate={controls}
                className="max-w-6xl mx-auto text-center"
            >
                {/* Heading */}
                <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight">
                    <span className="text-red-500">What is</span>{" "}
                    <span className="text-white">SynTrad?</span>
                </h2>


                {/* Description */}
                <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto mb-14 leading-relaxed">
                    Syntrad delivers expert repair and maintenance services for a broad spectrum of electronic engineering and medical equipment throughout London.
                    We specialize in providing end-to-end solutions that ensure critical systems remain fully operational, helping organizations minimize downtime and extend the lifespan of essential equipment. Trusted by businesses across the city, our commitment is to excellence, reliability, and rapid response.
                    We look forward to the opportunity to serve you soon.
                </p>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {aboutCards.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={item.variant}
                            initial="hidden"
                            animate={controls}
                            className="
 bg-gradient-to-br from-red-900 via-red-700 to-red-500
  border border-red-400/30
  rounded-3xl
  p-8
  transition-all duration-300
  hover:shadow-[0_0_10px_rgba(255,255,255,0.6)]
  hover:border-white/40
"

                        >
                            <item.icon className="text-white
    text-4xl
    mb-4
    mx-auto
    drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />

                            <h3 className="text-xl font-semibold mb-3">
                                {item.title}
                            </h3>

                            <p className="text-sm text-gray-300 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
