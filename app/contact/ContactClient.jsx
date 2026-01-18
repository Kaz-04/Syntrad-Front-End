"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  User,
  Calendar,
  MessageSquare,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const containerRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power2.out", duration: 0.6 },
      });

      tl.from(".contact-section", {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.8,
        clearProps: "all",
      });

      ScrollTrigger.create({
        trigger: ".contact-section",
        start: "top bottom-=50",
        toggleActions: "play none none reverse",
        animation: tl,
      });

      gsap.set(".contact-section", {
        opacity: 0,
        y: 30,
        willChange: "transform, opacity",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        "service_123456",
        "template_s7dq4z9",
        formData,
        "iqQJ7aU0zbtuutWY0"
      );

      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        time: "",
        message: "",
      });
    } catch (err) {
      toast.error("Failed to send message");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Toaster />
      <div
        ref={containerRef}
        className="min-h-screen bg-gradient-to-br from-black via-[#1a0000] to-black"
      >
        {/* Header */}
        <div className="relative py-20 text-center mt-20">
          <h1 className="text-6xl font-bold text-white mb-4">
            Get in Touch with Our <span className="text-red-600">Experts</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have questions or need assistance? Our team of professionals is here to help you with all your service needs.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 pb-20 mt-10">
          {/* LEFT */}
          <div className="contact-section space-y-8">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20 space-y-6">
              {[
                {
                  icon: MapPin,
                  title: "Location",
                  text: "7, Bell Yard, WC2A 2JR, Greater London, London, United Kingdom",
                },
                { icon: Phone, title: "Phone", text: "+44 20 7112 5377" },
                {
                  icon: Mail,
                  title: "Email",
                  text: "hello@syntradltd.co.uk",
                },
                {
                  icon: Clock,
                  title: "Hours",
                  text: "Monday - Saturday: 11:00 AM - 17:00 PM",
                  text2: "Sunday: 08:30 AM - 20:00 PM"
                },
              ].map((i, idx) => (
                <div key={idx} className="flex gap-5">
                  <div className="bg-red-600 p-6 rounded-full">
                    <i.icon className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{i.title}</h3>
                    <p className="text-gray-300">{i.text}</p>
                    <p className="text-gray-300">{i.text2}</p>
                  </div>
                </div>
                ))}
                <div className="flex items-center gap-4 pt-4">
                  <a href="#" className="bg-red-600 rounded-full p-4 hover:bg-red-700 transition-colors">
                    <Facebook className="w-6 h-6 text-white" />
                  </a>
                  <a href="#" className="bg-red-600 rounded-full p-4 hover:bg-red-700 transition-colors">
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                  <a href="#" className="bg-red-600 rounded-full p-4 hover:bg-red-700 transition-colors">
                    <Twitter className="w-6 h-6 text-white" />
                  </a>
                  <a href="#" className="bg-red-600 rounded-full p-4 hover:bg-red-700 transition-colors">
                    <Linkedin className="w-6 h-6 text-white" />
                  </a>
                </div>
            </div>

            {/* MAP — UNTOUCHED */}
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-red-600" />
                  <span className="text-sm sm:text-base text-gray-300">7, Bell Yard, WC2A 2JR, Greater London, London, United Kingdom</span>
                </div>
              <iframe
                className="w-full h-80 rounded-lg"
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps?q=Bell%20Yard%20London&output=embed"
              />
            </div>
          </div>

          {/* FORM */}
          <div className="contact-section">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Schedule an Appointment
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="text-gray-300">Your Name</label>
                  <div className="relative mt-2">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 py-2 bg-white/10 border border-white/20 rounded text-white"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="text-gray-300">Your Email</label>
                  <div className="relative mt-2">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 py-2 bg-white/10 border border-white/20 rounded text-white"
                      required
                    />
                  </div>
                </div>

                {/* Phone — FIXED */}
                <div>
                  <label className="text-gray-300">Phone Number</label>
                  <div className="relative mt-2">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData((p) => ({
                          ...p,
                          phone: e.target.value.replace(/[^0-9+]/g, ""),
                        }))
                      }
                      className="w-full pl-10 py-2 bg-white/10 border border-white/20 rounded text-white"
                      required
                    />
                  </div>
                </div>

                {/* Service — UNTOUCHED */}
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full py-2 px-3 bg-white/10 border border-white/20 rounded text-white"
                  required
                >
                  <option value="">Select a service</option>
                  {[
                    "Electrical Engineering",
                    "Electronics",
                    "Coffee Machine Service",
                    "Gym Equipment Repair",
                    "Catering Equipment Service",
                    "Medical Equipment Service",
                    "Electromechanical",
                    "Clocks",
                    "Network Service",
                    "Smart Home System",
                    "EV Charger",
                  ].map((s) => (
                    <option key={s} value={s} className="bg-black">
                      {s}
                    </option>
                  ))}
                </select>

                {/* Date & Time — UNTOUCHED */}
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="bg-white/10 border border-white/20 rounded text-white p-2"
                    required
                  />
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="bg-white/10 border border-white/20 rounded text-white p-2"
                    required
                  />
                </div>

                {/* Message */}
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 bg-white/10 border border-white/20 rounded text-white h-28"
                  required
                />

                <button
                  disabled={isLoading}
                  className="w-full bg-red-600 hover:bg-red-700 py-3 rounded text-white font-semibold"
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
