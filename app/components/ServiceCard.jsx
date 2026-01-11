"use client";

import Image from "next/image";
import Link from "next/link";
import { serviceCards } from "../../public/assets/assets";

export default function ServicesCard() {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            The Best Services We Provide
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

          {/* First 8 cards */}
          {serviceCards.slice(0, 8).map((card, index) => (
            <Link
              href={card.link}
              key={index}
              className="group bg-gradient-to-b from-black to-red-950 rounded-xl overflow-hidden border border-red-900/20 hover:border-red-600/50 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="relative h-48 bg-white overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-contain p-6 transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-red-500 transition-colors">
                  {card.title}
                </h3>

                <p className="text-gray-400 text-sm line-clamp-2 group-hover:text-gray-300">
                  {card.description}
                </p>

                <div className="mt-4 flex items-center text-red-500 text-sm font-medium">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}

          {/* Last 2 centered */}
          <div className="col-span-full flex flex-wrap justify-center gap-8">
            {serviceCards.slice(8).map((card, index) => (
              <Link
                href={card.link}
                key={index}
                className="w-full sm:w-[48%] lg:w-[30%] xl:w-[22%] group bg-gradient-to-b from-black to-red-950 rounded-xl overflow-hidden border border-red-900/20 hover:border-red-600/50 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="relative h-48 bg-white overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-contain p-6 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-red-500">
                    {card.title}
                  </h3>

                  <p className="text-gray-400 text-sm line-clamp-2 group-hover:text-gray-300">
                    {card.description}
                  </p>

                  <div className="mt-4 flex items-center text-red-500 text-sm font-medium">
                    Learn More
                    <svg
                      className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
