import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { FaMoneyBill, FaWrench,FaWhmcs} from "react-icons/fa";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 }); // Trigger when half in view
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const boxVariants = [
    {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
    },
    {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
    },
    {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
    }
  ];

  return (
    <section className="bg-black text-white py-10 px-4 sm:px-8" id="about">
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={controls}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-red-600 mb-4 sm:mb-6">What is SyntraD?</h2>
        <p className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-12">
        SyntraD Ltd is a specialist technical service provider offering expert repair, 
        maintenance, and installation across a wide range of equipment—from coffee machines 
        and gym equipment to medical devices, electronics, and smart home systems. 
        Built on engineering expertise and a commitment to quality, SyntraD delivers reliable, 
        professional service to both residential and commercial clients.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 mb-10">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              variants={boxVariants[i]}
              initial="hidden"
              animate={controls}
              className="bg-red-800 bg-opacity-20 rounded-2xl p-4 sm:p-6 shadow-lg"
            >
              {i === 0 && <FaMoneyBill className="text-white text-3xl sm:text-4xl mb-3 sm:mb-4 mx-auto" />}
              {i === 1 && <FaWrench className="text-white text-3xl sm:text-4xl mb-3 sm:mb-4 mx-auto" />}
              {i === 2 && <FaWhmcs className="text-white text-3xl sm:text-4xl mb-3 sm:mb-4 mx-auto" />}

              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                {i === 0 && "0% Flexible Finance"}
                {i === 1 && "Expert Repair"}
                {i === 2 && "Smart Solutions"}
              </h3>
              <p className="text-sm sm:text-base text-gray-300">
                {i === 0 && "Get the service you need now, without the upfront cost. We offer interest-free finance options (0% APR) on select repairs and installations to make quality more accessible.."}
                {i === 1 && "From coffee machines and catering equipment to medical and gym technology — we bring precision repair and servicing to every job. Our engineering expertise ensures reliability across sectors."}
                {i === 2 && "We don't just fix — we innovate. Discover how our smart home systems and network services can upgrade your space with intelligent, integrated technology."}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
