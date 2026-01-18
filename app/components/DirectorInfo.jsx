'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { directorData } from "../../public/assets/assets";

export default function ImageSection() {
  return (
    <section className="relative bg-white py-16 px-4">
      
      <div className="max-w-6xl mx-auto border border-gray-200 rounded-3xl shadow-2xl bg-black">

        <div className="flex flex-col md:flex-row overflow-hidden rounded-3xl">

          
          <div className="relative w-full md:w-2/5 h-72 md:h-auto">
            <Image
              src={directorData.image}
              alt={directorData.name}
              fill
              className="object-cover"
              priority
            />

            
            <div className="absolute inset-0 border-4 border-red-700 pointer-events-none" />
          </div>

          
          <motion.div
            className="relative flex-1 p-8 md:p-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            
            <div className="w-14 h-1 bg-red-700 mb-6" />

            <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-2">
              {directorData.title}
            </h2>

            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
              {directorData.name}
            </h3>

            <p className="text-gray-300 leading-relaxed mb-4">
              {directorData.intro}
            </p>

            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {directorData.leadership}
            </p>

            <p className="text-gray-300 leading-relaxed mb-8">
              {directorData.beyond}
            </p>

            
            <a
              href={directorData.airtasker}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-3
                bg-red-700
                text-white
                px-7 py-3
                rounded-xl
                font-semibold
                shadow-lg shadow-red-700/30
                hover:bg-red-600
                hover:translate-x-1
                transition-all duration-300
              "
            >
              View Profile
              <span className="text-lg">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
