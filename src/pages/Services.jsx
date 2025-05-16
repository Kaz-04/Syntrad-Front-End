import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Offer from "../components/Offer";
import RequestQuote from "../components/RequestQuote";
import { Helmet } from "react-helmet-async";
import {Link} from "react-router-dom";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Electrical Engineering",
    image: "/assets/system.png",
    link: "/electrical",
    description:
      "Professional design, diagnostics, and repair of electrical systems for residential, commercial, and industrial needs. We ensure safety, efficiency, and compliance in every project..",
  },
  {
    title: "Electronics",
    image: "/assets/cpu.png",
    link: "/electronic",
    description:
      "Expert repair and maintenance for a wide range of electronic devices and components. From diagnostics to precision fixes, we restore functionality with accuracy and care.",
  },
  {
    title: "Coffee Machine Service",
    image: "/assets/coffee-machine.png",
    link: "/coffee",
    description:
      "Authorised service and expert repairs for premium coffee machines, including SAGE models. Fast, reliable solutions to keep your machine brewing at its best.",
  },
  {
    title: "Gym Equipment Repair",
    image: "/assets/treadmill.png",
    link: "/gym",
    description:
      "Specialised repair and maintenance for treadmills, cross trainers, and other fitness machines. We ensure safe, smooth, and reliable performance for home and commercial gyms.",
  },
  {
    title: "Catering Equipment Service",
    image: "/assets/oven.png",
    link: "/catering",
    description:
      "Reliable repair and servicing for commercial kitchen and catering equipment. We minimise downtime and keep your appliances running efficiently and safely.",
  },
  {
    title: "Medical Equipment Service",
    image: "/assets/dentist-chair.png",
    link: "/medical",
    description:
      "Precise diagnostics, repair, and maintenance for non-critical medical devices. We prioritise reliability, safety, and compliance to support healthcare environments.",
  },
  {
    title: "Electromechanical",
    image: "/assets/water-pump.png",
    link: "/electromechanical",
    description:
      "Expert repair and maintenance of systems combining electrical and mechanical components. We ensure smooth, reliable operation across a range of industrial and commercial equipment.",
  },
  {
    title: "Clocks",
    image: "/assets/grandfather-clock.png",
    link: "/clocks",
    description: "Professional repair and servicing for all types of mechanical clocks. We ensure precise timekeeping and careful handling of delicate movements.",
  },
  {
    title: "Network Service",
    image: "/assets/router.png",
    link: "/network",
    description: "Reliable installation, maintenance, and troubleshooting of wired and wireless networks to keep your home or business connected and secure.",
  },
  {
    title: "Smart Home System",
    image: "/assets/smart-house.png",
    link: "/smarthome",
    description: "Installation and support for smart home technologies that enhance comfort, security, and energy efficiency in your living or working space.",
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedService]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Batch animations for better performance
      const tl = gsap.timeline({
        defaults: {
          ease: "power2.out",
          duration: 0.3,
          opacity: 0,
          y: 20,
        },
      });

      // Animate cards with better scroll handling
      const cards = gsap.utils.toArray(".service-card");
      cards.forEach((card, index) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top bottom-=100",
          end: "bottom top+=100",
          toggleActions: "play reverse play reverse",
          onEnter: () => {
            gsap.to(card, {
              opacity: 1,
              y: 0,
              duration: 0.3,
              delay: index * 0.05,
              clearProps: "all",
            });
          },
          onLeave: () => {
            gsap.to(card, {
              opacity: 0,
              y: -20,
              duration: 0.2,
            });
          },
          onEnterBack: () => {
            gsap.to(card, {
              opacity: 1,
              y: 0,
              duration: 0.3,
              delay: index * 0.05,
              clearProps: "all",
            });
          },
          onLeaveBack: () => {
            gsap.to(card, {
              opacity: 0,
              y: 20,
              duration: 0.2,
            });
          },
        });

        // Optimize hover animations
        const hoverTl = gsap.timeline({ paused: true });
        hoverTl.to(card, {
          scale: 1.03,
          duration: 0.2,
          ease: "power2.out",
          clearProps: "transform",
        });

        card.addEventListener("mouseenter", () => hoverTl.play());
        card.addEventListener("mouseleave", () => hoverTl.reverse());
      });
    }, containerRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Our Services | Syntrad</title>
        <meta
          name="description"
          content="Explore Syntrad's wide range of professional services including Electrical, Electronics, Coffee Machine Repair, Medical Equipment Servicing, and more."
        />
        <meta
          name="keywords"
          content="Syntrad services, electrical engineering, electronics repair, coffee machine maintenance, medical equipment, smart home service, catering, electromechanical repair"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Syntrad Services" />
        <meta
          property="og:description"
          content="Explore our expert repair and maintenance services for electronics, fitness, coffee machines, and more."
        />
        <meta property="og:image" content="https://syntradltd.co.uk/assets/og-services.jpg" />
        <meta property="og:url" content="https://syntradltd.co.uk/services" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://syntradltd.co.uk/services" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "Service",
                "position": 1,
                "name": "Electrical Engineering",
                "description": "Electrical Engineering Services offer safe and efficient electrical system design, installation, and maintenance.",
                "url": "https://syntradltd.co.uk/services/electrical",
                "image": "https://syntradltd.co.uk/assets/electrical.png"
              },
              {
                "@type": "Service",
                "position": 2,
                "name": "Electronics",
                "description": "Electronics Services include the design, repair, and maintenance of electronic devices and systems.",
                "url": "https://syntradltd.co.uk/services/electronic",
                "image": "https://syntradltd.co.uk/assets/electronics.png"
              },
              {
                "@type": "Service",
                "position": 3,
                "name": "Coffee Machine Service",
                "description": "Includes cleaning, repair, and maintenance to ensure smooth and efficient machine performance.",
                "url": "https://syntradltd.co.uk/services/coffee",
                "image": "https://syntradltd.co.uk/assets/Coffee.png"
              },
              {
                "@type": "Service",
                "position": 4,
                "name": "Gym Equipment Repair",
                "description": "Diagnosing, fixing, and maintaining fitness machines to ensure safe and optimal performance.",
                "url": "https://syntradltd.co.uk/services/gym",
                "image": "https://syntradltd.co.uk/assets/fitnessLogo.png"
              },
              {
                "@type": "Service",
                "position": 5,
                "name": "Catering Equipment Service",
                "description": "Catering equipment maintenance, inspection, and service for efficient food operations.",
                "url": "https://syntradltd.co.uk/services/catering",
                "image": "https://syntradltd.co.uk/assets/catering.png"
              },
              {
                "@type": "Service",
                "position": 6,
                "name": "Medical Equipment Service",
                "description": "Maintenance and repair of critical medical tools and electronic devices.",
                "url": "https://syntradltd.co.uk/services/medical",
                "image": "https://syntradltd.co.uk/assets/medical.png"
              }
            ]
          })}
        </script>
      </Helmet>
      <div
        className="bg-gradient-to-b from-black to-[#330000] text-white py-6 sm:py-10 min-h-screen"
        ref={containerRef}
      >
        <Offer />
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-10 px-4">
          Our Services
        </h1>

        <div className="grid gap-4 sm:gap-6 px-4 sm:px-6 md:px-8 lg:px-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card rounded-xl p-4 sm:p-6 text-white border border-red-600 bg-gradient-to-br from-[#660000] to-black shadow-xl will-change-transform`}
            >
              <Link
                to={service.link}
                key={index}
                className="service-card cursor-pointer rounded-xl p-4 sm:p-6 text-white border border-red-600 bg-gradient-to-br from-[#660000] to-black shadow-xl will-change-transform block"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-20 sm:h-24 mx-auto object-contain mb-3 sm:mb-4"
                />
                <h2 className="text-lg sm:text-xl font-semibold text-white text-center">
                  {service.title}
                </h2>
                <p className="text-xs sm:text-sm text-gray-200 mt-2">
                  {service.description}
                </p>
              </Link>
              <button
                onClick={() => setSelectedService(service.title)}
                className="mt-3 sm:mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition text-sm sm:text-base"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>

        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-hidden">
            <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-2xl">
              <RequestQuote
                isModal={true}
                onClose={() => setSelectedService(null)}
                initialService={selectedService}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
