"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, Mail, X } from "lucide-react";

const PHONE_HREF = "tel:+442071252397";
const PHONE_TEXT = "+44 20 7125 2397";
const EMAIL = "hello@syntradltd.co.uk";
const EMAIL_HREF = `mailto:${EMAIL}`;

export default function ContactPopup({ open, onClose }) {

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-popup-title"
            className="relative w-full max-w-sm rounded-xl border border-red-600/60 bg-[#0d0d0d] p-6 shadow-2xl shadow-red-900/20"
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-3 top-3 rounded-md p-1 text-gray-400 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>

            <h3 id="contact-popup-title" className="font-display text-lg font-bold mb-1">
              How would you like to reach us?
            </h3>
            <p className="text-[#8a8a8a] text-[12.5px] mb-5">Choose an option below.</p>

            <div className="space-y-3">

              <a
                href={PHONE_HREF}
                onClick={onClose}
                className="flex items-center gap-4 rounded-lg border border-white/10 bg-[#111111] hover:border-red-600/60 hover:bg-red-600/10 px-4 py-3 transition-colors"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-red-600/60">
                  <Phone size={18} strokeWidth={1.7} className="text-red-500" />
                </span>
                <span className="block">
                  <span className="block text-[14px] font-semibold text-white">Call us</span>
                  <span className="block text-[12.5px] text-gray-400">{PHONE_TEXT}</span>
                </span>
              </a>

              <a
                href={EMAIL_HREF}
                onClick={onClose}
                className="flex items-center gap-4 rounded-lg border border-white/10 bg-[#111111] hover:border-red-600/60 hover:bg-red-600/10 px-4 py-3 transition-colors"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-red-600/60">
                  <Mail size={18} strokeWidth={1.7} className="text-red-500" />
                </span>
                <span className="block">
                  <span className="block text-[14px] font-semibold text-white">Email us</span>
                  <span className="block text-[12.5px] text-gray-400">{EMAIL}</span>
                </span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}