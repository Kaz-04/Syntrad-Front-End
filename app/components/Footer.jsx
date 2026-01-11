"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { footerData } from "../../public/assets/assets";

const Footer = () => {
  const { brand, quickLinks, contact, socials } = footerData;

  return (
    <footer className="relative bg-gradient-to-br from-red-600 via-black to-black text-white px-6 pt-48 pb-12 overflow-hidden font-sans">
      {/* Wave Shape */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-full h-[140px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,0 C300,100 900,0 1200,100 L1200,0 L0,0 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <Image
            src={brand.logo}
            alt="Logo"
            width={120}
            height={32}
            className="mb-4"
            priority
          />
          <p className="text-gray-300 text-sm leading-relaxed">
            {brand.description}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-200">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="hover:text-white hover:underline transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-200">
            <li>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <a href={`tel:${contact.phone}`}>{contact.phone}</a>
            </li>
            <li>
              <a
                href={contact.locationUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {contact.address}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative z-10 mt-12 border-t border-red-800 pt-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-300 text-sm">{brand.copyright}</p>

        <div className="flex space-x-4 mt-4 md:mt-0">
          {socials.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-500 text-xl transition-colors"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
