import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import RequestQuote from "../components/RequestQuote";
import { ArrowLeft } from "lucide-react"; 
import { useNavigate } from "react-router-dom";
import {
  FaMapMarkerAlt,
} from "react-icons/fa";

const Medical = () => {
  const [showRequestQuote, setShowRequestQuote] = useState(false);
  const navigate = useNavigate();
  const models = [
    "Dental Chair Repair",
    "Optometry Equipment Repair",
    "Autoclave Servicing",
    "Dental X-Ray Machine Repair",
    "Teeth Whitening Equipment Service",
    "Ophthalmic Diagnostic Equipment Repair",
  ];

  const medicalImage = [
    {
      image: "assets/Deltech-Chair.jpg",
    },
    {
      image: "assets/optometry.webp",
    },
    {
      image: "assets/autoclave.jpg",
    },
    {
      image: "assets/xray.jpeg",
    },
    {
      image: "assets/Teeth.png",
    },
    {
      image: "assets/ophtalmic.webp",
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
        <title>Medical Equipment Repair | Syntrad</title>
        <meta
          name="description"
          content="Syntrad provides expert medical equipment repair for optometry and dental clinics. We specialize in dental chairs, optometry equipment, autoclaves, X-ray machines, and more."
        />
        <meta
          name="keywords"
          content="dental equipment repair London, optician equipment service Central London, dentistry device maintenance West London, optical instrument repair North London, dental machinery servicing South London, optometry equipment fix East London, dental chair repair Greater London Surrounds, optician tools repair London WC2A, dental device calibration London, optical equipment maintenance London"
        />
        <meta property="og:title" content="Syntrad Medical Equipment Repair" />
        <meta
          property="og:description"
          content="Get your medical equipment serviced by certified technicians at Syntrad. We repair and maintain dental and optometry equipment across the UK."
        />
        <meta property="og:image" content="assets/og-medical-repair.jpg" />
        <meta property="og:url" content="https://www.syntrad.com/medical" />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:title"
          content="Medical Equipment Repair | Syntrad"
        />
        <meta
          name="twitter:description"
          content="Expert repair services for dental and optometry equipment, including dental chairs, X-ray machines, and autoclaves, provided by certified technicians."
        />
        <meta name="twitter:image" content="assets/og-medical-repair.jpg" />
        <link rel="canonical" href="https://www.syntrad.com/medical" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-black via-red-950 to-black text-white font-sans py-10 px-4">
        <div className="max-w-7xl mx-auto backdrop-blur-lg bg-gradient-to-br from-red-950/20 to-black/30 border border-red-900/30 rounded-3xl shadow-2xl px-6 md:px-10 py-12">
          {/* Header */}
          <header className="text-center mb-12 px-4 sm:px-6 md:px-10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              {/* Text Section */}
              <div className="md:w-1/2 mb-6 md:mb-0">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-red-500 mb-3">
                  🦷 Medical Equipment Repair for Opticians & Dentists
                </h1>
                <p className="text-lg text-white mb-2">
                  <b>Expert Service for Optometry & Dentistry Clinics</b>
                </p>
                <p className="text-lg text-gray-400 mb-4">
                  Ensure the longevity and safety of your medical equipment with
                  our professional repair services. We specialize in repairing
                  and servicing equipment used in optometry and dental clinics.
                </p>
                <p className="text-lg text-white">
                  <b>
                    🛠 Certified Technicians | ⏱ Fast Turnaround | 🗕 Preventative
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
                  src="assets/mainMedical.png" // Replace with actual image URL
                  alt="Medical Machine Repair"
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
                    src={medicalImage[i]?.image}
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
                  Keep your clinic equipment in top condition with our ongoing
                  maintenance services. Reducing costly downtime and ensuring
                  the highest standards for patient care.
                </p>
              </div>

              {/* Pickup & Delivery */}
              <div className="bg-gradient-to-br from-black/40 to-red-900/30 border border-red-700/30 rounded-2xl p-6 shadow-xl hover:shadow-red-600/40 transition transform hover:scale-105">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  We Cover Serving:
                </h3>
                <p className="text-gray-300 text-base sm:text-lg">
                  🦷 Optometry Clinics 🦷 Dental Clinics 🏥 Private Healthcare
                  Providers 🌍 London & Surroundings
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
              initialService="Medical Equipment Service"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Medical;
