'use client';

import Image from 'next/image';
import Link from 'next/link';
import { serviceCards } from '../../public/assets/assets';

export default function MultiServiceUI() {
  return (
    <section className="bg-black py-6 px-4 text-center">
      <h2 className="text-4xl font-extrabold text-red-600 mb-10 uppercase">
        Explore Our Services
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {serviceCards.map((service, index) => (
          <Link
            key={index}
            href={service.link}
            className="group cursor-pointer flex flex-col items-center p-5
                       bg-gradient-to-b from-white/10 to-black/30
                       border border-red-600/40
                       rounded-2xl
                       shadow-md
                       hover:shadow-red-600/50
                       hover:scale-105
                       transition-all duration-300"
          >
            <div className="relative w-20 h-20 mb-4">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-contain drop-shadow-md
                           group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            <p className="text-white font-semibold text-sm md:text-base">
              {service.title}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
