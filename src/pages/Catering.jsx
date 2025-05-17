import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import RequestQuote from "../components/RequestQuote";
import { ArrowLeft } from "lucide-react"; 
import { useNavigate } from "react-router-dom";

import {
  FaMapMarkerAlt,
} from "react-icons/fa";

const Catering = () => {
  const [showRequestQuote, setShowRequestQuote] = useState(false);
  const navigate = useNavigate();
   const models = [
    "Commercial Oven Repair",
    "Grill Maintenance & Repairs",
    "Deep Fryer Servicing",
    "Commercial Dishwasher Repair",
    "Industrial Toaster Service",
    "Commercial Microwave Repair",
    "Hot Plate Repair & Servicing",
  ];

  const cateringImage = [
    {
      image: "assets/oven.webp",
    },
    {
      image: "assets/grill.jpg",
    },
    {
      image: "assets/Gas-Fryer.jpg",
    },
    {
      image: "assets/Glass-washer.webp",
    },
    {
      image: "assets/toaster.jpg",
    },
    {
      image: "assets/microwave.jpg",
    },
    {
      image: "assets/hotplate.webp",
    },
  ];

  const serviceAreas = [
    "Central London",
    "West London ",
    "North London",
    "South London",
    "East London",
    "Greater London Surrounds",
  ];

  return (
    <>
      <Helmet>
        <title>Catering Equipment Repair Services | Syntrad</title>
        <meta
          name="description"
          content="Expert repair and maintenance for catering equipment including ovens, fryers, dishwashers, and more. Serving London, Manchester, and more."
        />
        <meta
          name="keywords"
          content="catering equipment repair, commercial kitchen equipment repair, catering appliance maintenance, catering equipment service London, restaurant equipment repair, professional catering equipment repair, catering equipment servicing, catering machine repair, kitchen appliance repair, catering equipment maintenance service, urgent catering equipment repair, catering equipment breakdown fix, catering equipment repair near me, catering equipment technician, catering equipment repair company"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Catering Equipment Repair Services | Syntrad Ltd"
        />
        <meta
          property="og:description"
          content="Fast and reliable catering equipment repair services across all London. Book a repair today with Syntrad."
        />
        <meta property="og:type" content="website" />
        <meta name="author" content="Kaz Moorjani" />
        <meta
          property="og:url"
          content="https://www.syntrad.com/services/catering"
        />
        <meta
          property="og:image"
          content="https://www.syntrad.com/assets/mainCatring.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Catering Equipment Repair Services | Syntrad"
        />
        <meta
          name="twitter:description"
          content="Skilled engineers for your catering equipment. Serving London, Birmingham, Manchester, and more."
        />
        <meta
          name="twitter:image"
          content="https://www.syntrad.com/assets/mainCatring.png"
        />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-black via-red-950 to-black text-white font-sans py-10 px-4">
        <div className="max-w-7xl mx-auto backdrop-blur-lg bg-gradient-to-br from-red-950/20 to-black/30 border border-red-900/30 rounded-3xl shadow-2xl px-6 md:px-10 py-12">
          {/* Header */}
          <header className="text-center mb-12 px-4 sm:px-6 md:px-10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              {/* Text Section */}
              <div className="md:w-1/2 mb-6 md:mb-0">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-red-500 mb-3">
                  🍳 Catering Equipment Repair
                </h1>
                <p className="text-lg text-white mb-2">
                  <b>
                    Expert Service for Commercial Kitchens & Food Businesses
                  </b>
                </p>
                <p className="text-lg text-gray-400 mb-4">
                  Keep your kitchen running smoothly with our expert catering
                  equipment repair services. From restaurants to mobile food
                  units, we handle repairs quickly and efficiently.
                </p>
                <p className="text-lg text-white">
                  <b>
                    🛠 Trained Engineers | ⏱ Fast Turnaround | 🗕 Preventative
                    Maintenance Plans
                  </b>
                </p>
                <div className="mt-6 flex justify-center">
                  <button
                    onClick={() => navigate("/")}
                    className="flex items-center gap-2 bg-white text-red-600 font-semibold py-2 px-4 rounded-lg shadow hover:bg-gray-200"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    Back
                  </button>
                </div>
              </div>

              {/* Image Section */}
              <div className="md:w-1/2 flex justify-center">
                <img
                  src="assets/mainCatring.jpg" // Replace with actual image URL
                  alt="Catering Machine Repair"
                  className="w-full max-w-xs md:max-w-sm lg:max-w-md rounded-lg shadow-lg"
                />
              </div>
            </div>
          </header>
          {/* Machine Repairs */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-red-500 mb-6 text-center">
              🔌 What We Repair:
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {models.map((model, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-black/40 to-red-900/30 border border-red-700/30 text-center px-5 py-6 rounded-2xl shadow-xl hover:shadow-red-600/40 transition transform hover:scale-105"
                >
                  <img
                    src={cateringImage[i]?.image}
                    alt={model}
                    className="mb-3 mx-auto rounded-lg w-full h-48 object-cover"
                  />
                  <h3 className="text-lg font-semibold text-gray-100">
                    {model}
                  </h3>
                </div>
              ))}
            </div>
            <p className="text-lg text-gray-300 mbt-4 text-center">
              💬 Need help choosing the right repair option?{" "}
              <Link className="text-red-500" to="/contact">
                Contact us here.
              </Link>
            </p>
          </section>
          {/* Diagnostic & Delivery Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-red-500 mb-10 text-center">
              Maintenance & Serving
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Diagnostic & Testing */}
              <div className="bg-gradient-to-br from-black/40 to-red-900/30 border border-red-700/30 rounded-2xl p-6 shadow-xl hover:shadow-red-600/40 transition transform hover:scale-105">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  🗓 Maintenance Contracts
                </h3>
                <p className="text-gray-300 text-base sm:text-lg">
                  Reduce downtime and avoid costly breakdowns with routine
                  servicing. Ask about scheduled maintenance packages.
                </p>
              </div>

              {/* Pickup & Delivery */}
              <div className="bg-gradient-to-br from-black/40 to-red-900/30 border border-red-700/30 rounded-2xl p-6 shadow-xl hover:shadow-red-600/40 transition transform hover:scale-105">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  We Cover Serving:
                </h3>
                <p className="text-gray-300 text-base sm:text-lg">
                  🏪 Restaurants & Cafes 🚚 Food Trucks & Mobile Catering 🏨
                  Hotels & Hospitality 🏫 Schools & Institutions 🌍 London &
                  Surroundings
                </p>
              </div>
            </div>
          </section>
          {/* Service Areas */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-red-500 mb-6 text-center">
              📍 Service Areas
            </h2>
            <p className="text-lg text-gray-300 mb-4 text-center">
              We offer coffee machine repairs in:
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-gray-300">
              {serviceAreas.map((area, i) => (
                <span
                  key={i}
                  className="bg-black/30 border border-red-900/30 px-4 py-2 rounded-full text-sm"
                >
                  <FaMapMarkerAlt className="inline mr-1 text-red-500" /> {area}
                </span>
              ))}
            </div>
            <p className="text-lg text-gray-300 mb-4 text-center">
              💬 Not sure if we cover your area?{" "}
              <Link className="text-red-500" to="/contact">
                Get in touch.
              </Link>
            </p>
          </section>{" "}
          {/* Contact Section */}
          <section className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-red-500 mb-6">
              📞 Book a Repair
            </h2>
            <p className="text-gray-300 mb-4">
              Enjoy fast turnaround, skilled technicians, and peace of mind.
            </p>
          </section>
          {/* Book Now Button */}
          <div className="text-center mb-8">
            <button
              onClick={() => setShowRequestQuote(true)}
              className="px-10 py-4 bg-red-600 hover:bg-red-700 text-white text-xl font-semibold rounded-lg transition transform hover:scale-105 shadow-lg hover:shadow-red-600/30"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Request Quote Modal */}
      {showRequestQuote && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-hidden">
          <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-2xl">
            <RequestQuote
              isModal={true}
              onClose={() => setShowRequestQuote(false)}
              initialService="Catering Equipment Service"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Catering;
