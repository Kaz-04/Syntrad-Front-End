'use client';

import { useState } from 'react';
import { usePathname } from "next/navigation";

import Link from 'next/link';
import {
  Menu,
  X,
  Home,
  Info,
  Phone,
  Briefcase,
  ArrowRight,
  Settings2,
  Wrench,
} from 'lucide-react';

import Container from './container';
import { resetNavTrail } from './navTrail';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-red-800/30">
      <Container>
        <div className="flex items-center justify-between h-16 sm:h-20">

          <Link href="/" onClick={resetNavTrail} className="flex items-center shrink-0">
            <img
              src="/assets/logo/syntrad_logo.png"
              alt="Syntrad"
              className="h-20 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center gap-6">

            <nav className="flex items-center gap-5">

              <NavLink href="/">Home</NavLink>

              <NavLink href="/repair-and-service">Repair & Service</NavLink>

              <NavLink href="/engineering">Engineering</NavLink>

              <NavLink href="/projects">Projects</NavLink>

              <NavLink href="/about">About</NavLink>

              <NavLink href="/contact">Contact</NavLink>

            </nav>

            <Link
              href="/contact"
              onClick={resetNavTrail}
              className="flex items-center gap-2 bg-red-700 hover:bg-red-900 text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors whitespace-nowrap"
            >
              Start a Project
              <ArrowRight size={16} />
            </Link>

          </div>

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
              <MobileLink href="/" icon={<Home size={18} />} onClick={() => setMenuOpen(false)}>
                Home
              </MobileLink>

              <MobileLink href="/repair-and-service" icon={<Wrench size={18} />} onClick={() => setMenuOpen(false)}>
                Repair & Service
              </MobileLink>

              <MobileLink href="/engineering" icon={<Settings2 size={18} />} onClick={() => setMenuOpen(false)}>
                Engineering
              </MobileLink>

              <MobileLink href="/projects" icon={<Briefcase size={18} />} onClick={() => setMenuOpen(false)}>
                Projects
              </MobileLink>
              <MobileLink href="/about" icon={<Info size={18} />} onClick={() => setMenuOpen(false)}>
                About
              </MobileLink>
              <MobileLink href="/contact" icon={<Phone size={18} />} onClick={() => setMenuOpen(false)}>
                Contact
              </MobileLink>

              <Link
                href="/contact"
                onClick={() => {
                  resetNavTrail();
                  setMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 mt-2 bg-red-600 active:bg-red-700 text-white text-base font-semibold px-4 py-3 rounded-xl transition-colors"
              >
                Start a Project
                <ArrowRight size={18} />
              </Link>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}

function ActiveUnderline() {
  return (
    <span className="pointer-events-none absolute -bottom-1 inset-x-[5%] h-[2px] rounded-full bg-red-600 shadow-[0_0_4px_0px_rgba(220,38,38,0.45)]" />
  );
}

const navHoverClasses =
  "hover:text-red-500 hover:text-[1.1rem] hover:[text-shadow:0_0_8px_rgba(239,68,68,0.7)]";

function NavLink({ href, children }) {
  const pathname = usePathname();

  const active = pathname === href;

  return (
    <Link
      href={href}
      onClick={resetNavTrail}
      className={`relative px-3 py-2 text-base font-medium transition-all duration-150 ${
        active ? "text-white" : `text-gray-300 ${navHoverClasses}`
      }`}
    >
      {children}
      {active && <ActiveUnderline />}
    </Link>
  );
}

function MobileLink({ href, icon, children, onClick }) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      onClick={() => {
        resetNavTrail();
        onClick?.();
      }}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-colors ${
        active
          ? "bg-red-900/30 text-white"
          : "text-gray-300 bg-white/9 active:bg-red-900/30 active:text-white"
      }`}
    >
      {icon}
      {children}
    </Link>
  );
}