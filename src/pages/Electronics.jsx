import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import RequestQuote from "../components/RequestQuote";
import { ArrowLeft } from "lucide-react"; // or use any icon library you prefer
import { useNavigate } from "react-router-dom";
import {
  FaMapMarkerAlt,
} from "react-icons/fa";

const Electronic = () => {
  const [showRequestQuote, setShowRequestQuote] = useState(false);
  const navigate = useNavigate();
  const models = [
    "Laptop Repair",
    "Tablet Repair",
    "Gaming Console Repair",
    "Audio System Repair",
    "PCB Repair",
    "Projector Repair",
    "Drone Repair",
    "Home Theater Repair",
  ];

  const electronicImage = [
    {
      image: "assets/laptop.jpeg",
    },
    {
      image: "assets/tablet.jpg",
    },
    {
      image: "assets/console.webp",
    },
    {
      image: "assets/audio.jpeg",
    },
    {
      image: "assets/pcb.jpeg",
    },
    {
      image: "assets/projector.jpg",
    },
    {
      image: "assets/drone.jpg",
    },
    {
      image: "assets/homeTheatre.jpg",
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
        <title>
          Electronic Repair Services | Affordable and Fast Electronics Repairs
        </title>
        <meta
          name="description"
          content="Get fast and affordable repair services for your electronics including laptops, tablets, PCB boards, gaming consoles, and more. Certified technicians. Warranty available."
        />
        <meta
          name="keywords"
          content="electronics repair Central London, electronics repair West London, electronics repair North London, electronics repair South London, electronics repair East London, electronics repair Greater London Surrounds, affordable electronics repair London, fast electronics fix Central London, electronic device repair West London, circuit board repair North London, electronic appliance repair South London, professional electronics service East London, reliable electronics technician Greater London Surrounds"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Kaz Moorjani" />
        <meta
          property="og:title"
          content="Electronic Repair Services | Affordable and Fast Electronics Repairs"
        />
        <meta
          property="og:description"
          content="Get fast and affordable repair services for your electronics including laptops, tablets, PCB Boards, gaming consoles, and more. Certified technicians. Warranty available."
        />
        <meta property="og:image" content="assets/mainelectronics.png" />
        <meta property="og:url" content="your-website-url/electronic-repair" />
        <meta
          name="twitter:title"
          content="Electronic Repair Services | Affordable and Fast Electronics Repairs"
        />
        <meta
          name="twitter:description"
          content="Get fast and affordable repair services for your electronics including laptops, tablets, PCB Boards, gaming consoles, and more. Certified technicians. Warranty available."
        />
        <meta name="twitter:image" content="assets/mainelectronics.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-black via-red-950 to-black text-white font-sans py-10 px-4">
        <div className="max-w-7xl mx-auto backdrop-blur-lg bg-gradient-to-br from-red-950/20 to-black/30 border border-red-900/30 rounded-3xl shadow-2xl px-6 md:px-10 py-12">
          {/* Header */}
          <header className="text-center mb-12 px-4 sm:px-6 md:px-10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              {/* Text Section */}
              <div className="md:w-1/2 mb-6 md:mb-0">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-red-500 mb-3">
                  🔧 Electronic Repair Services
                </h1>
                <p className="text-lg text-white mb-2">
                  <b>Fast, Affordable Repairs for Home & Office Electronics</b>
                </p>
                <p className="text-lg text-gray-400 mb-4">
                  Our expert technicians provide repair solutions for a wide
                  range of electronic devices, restoring functionality and
                  extending the life of your equipment.
                </p>
                <p className="text-lg text-white">
                  <b>
                    🛠 Certified Technicians | 💡 Honest Diagnostics | 📦
                    Warranty Available
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
                  src="assets/mainelectronics.png" // Replace with actual image URL
                  alt="Electronic Machine Repair"
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
                    src={electronicImage[i]?.image}
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
              Diagnostic & Delivery Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Diagnostic & Testing */}
              <div className="bg-gradient-to-br from-black/40 to-red-900/30 border border-red-700/30 rounded-2xl p-6 shadow-xl hover:shadow-red-600/40 transition transform hover:scale-105">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  🧰 Diagnostic & Testing
                </h3>
                <p className="text-gray-300 text-base sm:text-lg">
                  Not sure what's wrong? Bring your device in for a full
                  diagnostic. We'll identify the issue and provide a clear
                  repair plan before any work begins.
                </p>
              </div>

              {/* Pickup & Delivery */}
              <div className="bg-gradient-to-br from-black/40 to-red-900/30 border border-red-700/30 rounded-2xl p-6 shadow-xl hover:shadow-red-600/40 transition transform hover:scale-105">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  🚚 Pickup & Delivery
                </h3>
                <p className="text-gray-300 text-base sm:text-lg">
                  Convenient pickup and delivery options are available for home
                  or business clients in our service area. Save time and avoid
                  the hassle.
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
          </section>
          {/* Contact Section */}{" "}
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
              initialService="Electronics"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Electronic;
