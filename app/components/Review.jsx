"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { reviews } from "../../public/assets/assets";

export default function ReviewCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev === 0 ? reviews.length - visibleCount : prev - 1
    );
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      prev + visibleCount >= reviews.length ? 0 : prev + 1
    );
  };

  return (
    <section className="bg-black flex flex-col items-center text-white px-4 py-12">
      <h2 className="text-2xl font-bold mb-10 uppercase tracking-wide">
        Stories of Success
      </h2>

      <div className="flex items-center gap-4 max-w-6xl w-full">
        {/* Left Arrow */}
        <button onClick={handlePrev} aria-label="Previous reviews">
          <ChevronLeft className="w-8 h-8 text-red-500 hover:text-white transition" />
        </button>

        {/* Reviews */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 flex-1">
          {reviews
            .slice(startIndex, startIndex + visibleCount)
            .map(({ id, name, title, review, stars, image }) => (
              <div
                key={id}
                className="bg-[#1a1a1a] p-6 rounded-xl border border-red-600 shadow-lg flex flex-col"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={image}
                    alt={name}
                    className="w-14 h-14 rounded-full border-2 border-red-500"
                  />
                  <div>
                    <p className="font-semibold text-red-400">{name}</p>
                    <p className="text-sm text-gray-400">{title}</p>
                  </div>
                </div>

                <div className="flex mb-2 text-red-500">
                  {[...Array(stars)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                <p className="text-sm text-gray-200 flex-1">{review}</p>
              </div>
            ))}
        </div>

        {/* Right Arrow */}
        <button onClick={handleNext} aria-label="Next reviews">
          <ChevronRight className="w-8 h-8 text-red-500 hover:text-white transition" />
        </button>
      </div>
    </section>
  );
}
