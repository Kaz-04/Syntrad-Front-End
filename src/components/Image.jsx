import React from "react";
import { motion } from "framer-motion";

const ImageSection = () => {
  return (
    <div className="flex justify-center my-8 sm:my-16 px-4 bg-white pt-5 pb-5">
      <div className="bg-black text-white flex flex-col md:flex-row items-center rounded-2xl overflow-hidden max-w-6xl w-full shadow-2xl">
        {/* Image */}
        <div className="w-full md:w-1/3 h-64 sm:h-80 md:h-full">
          <img
            src="/assets/owner.jpeg" // replace with actual image path
            alt="Owner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text with animation */}
        <motion.div
          className="p-6 sm:p-8 md:p-10 flex-1"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }} // <- allow multiple animations
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-red-700">
            Director Of Syntrad Ltd
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-300 mb-3 sm:mb-4">
            Hi, I'm{" "}
            <span className="text-red-700 font-semibold">Kaz Moorjani</span>,
            Director & CEO of SyntraD Ltd. I lead SyntraD Ltd with a hands-on, customer-first 
            approach to technical services and product support. With a strong background in engineering 
            and practical repair expertise, I’ve built SyntraD into a reliable name for high-quality 
            appliance servicing and repair across a range of premium consumer products.
          </p>
          <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-5">
            Under my leadership, SyntraD Ltd operates as an authorised agent for SAGE coffee machines and as a 
            trusted specialist in treadmill and gym equipment repairs. I also lead our work across a wide range of 
            technical services, including electrical engineering, electronics repair, catering equipment servicing, 
            medical equipment maintenance, electromechanical systems, clock repairs, network services, and smart home 
            system installations. 
            </p>

            <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-5">              
            Whether I’m working with individual clients or managing commercial contracts, I ensure every job is completed 
            with precision, transparency, and professionalism. I personally oversee all repair and servicing work to meet 
            or exceed manufacturer standards, and I prioritise fast, friendly, and reliable support for both warranty and 
            non-warranty issues.
           
            I work closely with leading brands like SAGE and fitness equipment providers to ensure consistent quality and 
            authorised service. I also support and mentor our team of technicians, maintaining high service standards across 
            every job we take on—no matter the size or scope.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-gray-300 mb-5 sm:mb-7">
            Beyond the business, I also take on independent projects, offering technical services, 
            small repairs, and custom installations. This hands-on work keeps me closely connected to 
            customers and their everyday needs — helping ensure SyntraD remains practical, responsive, 
            and grounded in real-world service.
          </p>
          <a
            href="https://www.instagram.com/syntradltd/"
            className="inline-block bg-red-700 hover:bg-red-600 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition hero-button"
          >
            My Instagram →
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ImageSection;
