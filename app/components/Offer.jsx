'use client';

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { offerData } from "../../public/assets/assets";
import RequestQuoteModal from "./RequestQuote";

const Offer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section
      ref={ref}
      className="relative bg-black text-white py-32 overflow-hidden"
    >

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[20vw] font-extrabold text-white/5 tracking-tight select-none">
          OFFER
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 items-center gap-16">


        <motion.div
          className="lg:col-span-5 flex justify-center relative"
          initial={{ opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-red-600/20 blur-[120px] rounded-full" />
          <Image
            src={offerData.image}
            alt="Service Offer"
            width={420}
            height={420}
            className="relative w-80 md:w-[420px]"
            priority
          />
        </motion.div>


        <motion.div
          className="lg:col-span-7 space-y-8"
          initial={{ opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05]">
            <span className="block text-red-600">
              {offerData.titleHighlight}
            </span>
            <span className="block text-white">
              {offerData.titleMain}
            </span>
          </h1>


          <div className="w-20 h-[3px] bg-red-600 rounded-full" />

          <p className="text-gray-300 max-w-xl text-lg leading-relaxed">
            {offerData.note}
          </p>


          <div className=" pt-0">
            <motion.button
              onClick={() => setSelectedService("Select a Service")}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="
      group
      inline-flex items-center gap-2
      text-lg font-medium
      text-red-500
      hover:text-red-600
      transition-colors
    "
            >
              Request Quote
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>


              <span className="
      absolute mt-6 h-[1.5px] w-0
      bg-red-500
      transition-all duration-300
      group-hover:w-full
    " />
            </motion.button>
          </div>

          {selectedService && (
            <RequestQuoteModal
              service={selectedService}
              onClose={() => setSelectedService(null)}
            />
          )}

        </motion.div>
      </div>
    </section>
  );
};

export default Offer;
