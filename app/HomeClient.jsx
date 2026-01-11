'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AboutSection from "./components/AboutSection";
import ServicesCard from "./components/ServiceCard";
import RequestQuoteModal from "./components/RequestQuote";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-black text-white">

      {/* HERO SECTION */}
      <section className="relative h-auto w-full flex items-center py-16">
  <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 z-20">

         {/* Text */}
<motion.div
  className="w-full md:w-1/2 text-center md:text-left"
  initial={{ opacity: 0, x: -100 }}      // start 100px to the right, invisible
  animate={{ opacity: 1, x: 0 }}        // slide to original position
  transition={{ duration: 1.5, ease: "easeOut" }}
>
  <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 mt-6">
    Innovative <span className="text-red-600">Solutions</span> for  
    Your Electrical Needs
  </h1>

  <p className="text-gray-300 text-lg mb-8 max-w-xl">
    Welcome to London's Premier Destination for World-class Electronic Engineering Services - Ranked #1 for innovation, Excellence, and Reliability!
  </p>

  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start z-[999] relative">
    <Link
      href="/services"
      className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg text-white font-semibold transition text-center z-[999]"
    >
      Our Services →
    </Link>

    <Link
      href="/contact"
      className="border border-red-600 hover:bg-red-600 px-8 py-3 rounded-lg transition text-white text-center z-[999]"
    >
      Request Quote
    </Link>
  </div>
</motion.div>


          {/* Image */}
          <div className="w-full md:w-1/2 z-20 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-full max-w-lg"
            >
              <Image
                src="/assets/homeMain.png"
                alt="Syntrad Hero"
                width={600}
                height={600}
                priority
                className="w-full object-contain"
              />
            </motion.div>
          </div>

        </div>

        {/* Red Glow */}
        <motion.div
          className="absolute top-0 right-0 w-[50vw] h-[100vh] bg-red-700/30 blur-3xl z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
      </section>

      <ServicesCard/>

      <AboutSection/>

      {/* Read More */}
      <div className="flex justify-center bg-black py-12">
        <Link
          href="/about"
          className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full text-lg transition"
        >
          Read More
        </Link>
      </div>

    </div>
  );
}
