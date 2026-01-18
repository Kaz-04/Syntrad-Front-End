"use client";

import { useEffect, useState } from "react";
import {
  X, User, Mail, Phone, Calendar, Clock, MessageSquare
} from "lucide-react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

export default function RequestQuoteModal({ service, onClose }) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: service || "",
    date: "",
    time: "",
    message: "",
  });


  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  
  useEffect(() => {
    setForm(prev => ({ ...prev, service: service || "" }));
  }, [service]);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const closeModal = () => {
    document.body.style.overflow = "auto";
    onClose();
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      toast.success("Request sent");
      closeModal();
    } catch {
      toast.error("Failed to send");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" />

      <div
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center"
        onClick={closeModal}
      >
        <div
          className="bg-white w-full max-w-xl rounded-2xl shadow-2xl p-8 relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={closeModal}
            className="absolute right-6 top-6 text-gray-400 hover:text-black"
          >
            <X size={22} />
          </button>

          <h2 className="text-2xl font-bold mb-6">Request a Quote</h2>

          <form onSubmit={sendEmail} className="space-y-5">
            <div className="grid grid-cols-2 gap-4 text-black">

               <Field label="Name" icon={<User size={16} />}>
                <input name="name" value={form.name} onChange={handleChange} required />
              </Field>
              

              <Field label="Email" icon={<Mail size={16} />}>
                <input type="email" name="email" value={form.email} onChange={handleChange} required />
              </Field>

              <Field label="Phone" icon={<Phone size={16} />}>
                <input
                  type="tel"
                  inputMode="numeric"
                  name="phone"
                  value={form.phone}
                  onChange={(e) =>
                    setForm(prev => ({
                      ...prev,
                      phone: e.target.value.replace(/\D/g, "")
                    }))
                  }
                  required
                />
              </Field>

              <Field label="Service" icon={<MessageSquare size={16} />}>
                <select name="service" value={form.service} onChange={handleChange} required>
                  <option value="">Select service</option>
                  <option>Electrical Engineering</option>
                  <option>Electronics</option>
                  <option>Coffee Machine Service</option>
                  <option>Gym Equipment Repair</option>
                  <option>Catering Equipment Service</option>
                  <option>Medical Equipment Service</option>
                  <option>Electromechanical</option>
                  <option>Clocks</option>
                  <option>Network Service</option>
                  <option>Smart Home System</option>
                  <option>EV Charger</option>
                </select>
              </Field>

              <Field label="Date" icon={<Calendar size={16} />}>
                <input type="date" name="date" value={form.date} onChange={handleChange} />
              </Field>

              <Field label="Time" icon={<Clock size={16} />}>
                <input type="time" name="time" value={form.time} onChange={handleChange} />
              </Field>
            

            <Field label="Message" icon={<MessageSquare size={16} />}>
              <textarea name="message" rows={4} coloms={8} value={form.message} onChange={handleChange} />
            </Field>
</div>

            <button
              disabled={loading}
              className="w-full bg-red-600 text-white py-3 rounded-xl font-semibold"
            >
              {loading ? "Sending..." : "Submit Request"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

function Field({ label, icon, children }) {
  const cls =
    "w-full p-3 border border-slate-200 rounded-xl bg-white text-slate-900";

  return (
    <div>
      <label className="flex gap-2 items-center text-sm font-medium mb-1">
        <span className="text-red-600">{icon}</span>
        {label}
      </label>

      {children.type === "textarea" ? (
        <textarea {...children.props} className={cls} />
      ) : children.type === "select" ? (
        <select {...children.props} className={cls} />
      ) : (
        <input {...children.props} className={cls} />
      )}
    </div>
  );
}
