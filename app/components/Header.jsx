'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Menu,
  X,
  Home,
  Info,
  Settings,
  Phone,
  Plug
} from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-red-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          <Link href="/" className="flex items-center">
            <img
              src="/assets/logo.png"
              alt="Syntrad"
              className="h-10 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <NavLink href="/" icon={<Home size={16} />}>Home</NavLink>
            <NavLink href="/about" icon={<Info size={16} />}>About</NavLink>
            <NavLink href="/services" icon={<Settings size={16} />}>Services</NavLink>
            <NavLink href="/amplink" icon={<Plug size={16} />}>EV Charger</NavLink>
            <NavLink href="/contact" icon={<Phone size={16} />}>Contact</NavLink>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2.5 rounded-full text-gray-300 hover:text-white border border-red-800/30"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-4">
            <nav className="space-y-1">
              <MobileLink href="/" icon={<Home size={18} />} onClick={() => setMenuOpen(false)}>Home</MobileLink>
              <MobileLink href="/about" icon={<Info size={18} />} onClick={() => setMenuOpen(false)}>About</MobileLink>
              <MobileLink href="/services" icon={<Settings size={18} />} onClick={() => setMenuOpen(false)}>Services</MobileLink>
              <MobileLink href="/amplink" icon={<Plug size={18} />} onClick={() => setMenuOpen(false)}>EV Charger</MobileLink>
              <MobileLink href="/contact" icon={<Phone size={18} />} onClick={() => setMenuOpen(false)}>Contact</MobileLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

function NavLink({ href, icon, children }) {
  return (
    <Link
      href={href}
    className="px-3 py-2 text-base font-medium text-gray-300 hover:text-white flex items-center gap-2 relative group"
    >
      <span className="group-hover:text-red-500">{icon}</span>
      {children}
      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
    </Link>
  );
}

function MobileLink({ href, icon, children, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="
        flex items-center gap-3
        px-4 py-3
        rounded-xl
        text-base font-medium     /* ⬅ bigger font */
        text-gray-300
        bg-white/9               /* ⬅ transparent background */
        active:bg-red-900/30     /* ⬅ mobile tap effect */
        active:text-white
        transition-colors
      "
    >
      {icon}
      {children}
    </Link>
  );
}

