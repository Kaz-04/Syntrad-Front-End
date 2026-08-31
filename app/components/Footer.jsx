"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Linkedin, Mail, Phone, MapPin, Clock } from "lucide-react";
import { footerData } from "../../public/assets/assets";

const Footer = () => {
  const {
    brand = {},
    quickLinks = [],
    services = [],
    contact = {},
    socials = [],
  } = footerData || {};

  return (
    <footer className="relative bg-black text-white px-6 pt-16 pb-8 overflow-hidden font-sans border-t border-red-800/30">
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <Image
            src={brand.logo}
            alt="Logo"
            width={140}
            height={36}
            className="mb-4"
            priority
          />
          <p className="text-sm font-semibold text-gray-200 mb-3">
            {brand.tagline}
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            {brand.description}
          </p>

          <div className="flex space-x-3 mt-6">
            {socials.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="flex items-center justify-center w-9 h-9 rounded-full border border-red-800/40 text-gray-300 hover:text-white hover:bg-red-900/30 hover:border-red-600 transition-colors"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2.5 text-gray-400 text-sm">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2.5 text-gray-400 text-sm">
            {services.map((service, index) => (
              <li key={index}>
                <Link
                  href={service.href}
                  className="hover:text-white transition-colors"
                >
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-3.5 text-gray-400 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-red-500 mt-0.5 shrink-0" />
              <a
                href={contact.locationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                {contact.address}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-red-500 shrink-0" />
              <a href={`tel:${contact.phone}`} className="hover:text-white transition-colors">
                {contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-red-500 shrink-0" />
              <a href={`mailto:${contact.email}`} className="hover:text-white transition-colors">
                {contact.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock size={16} className="text-red-500 mt-0.5 shrink-0" />
              <span>{contact.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative z-10 mt-12 border-t border-red-800/30 pt-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-400 text-sm">{brand.copyright}</p>

        <div className="flex space-x-6 text-sm text-gray-400">
          <Link href="/privacy-policy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;