'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname } from "next/navigation";

import Link from 'next/link';
import {
  Menu,
  X,
  Home,
  Info,
  Phone,
  ChevronDown,
  Briefcase,
  ArrowRight,
  Bot,
  Cpu,
  Settings2,
  PackageSearch,
  CloudCog,
  BatteryCharging,
  Dumbbell,
  UtensilsCrossed,
  Building2,
  ShieldAlert,
  LayoutGrid,
} from 'lucide-react';

const solutionsItems = [
  { href: '/solutions/automation', label: 'Automation & Control Systems', icon: <Bot size={16} /> },
  { href: '/solutions/electrical', label: 'Electrical & Electronic Engineering', icon: <Cpu size={16} /> },
  { href: '/solutions/electromechanical', label: 'Electromechanical Systems', icon: <Settings2 size={16} /> },
  { href: '/solutions/equipment', label: 'Specialist Equipment Engineering', icon: <PackageSearch size={16} /> },
  { href: '/solutions/iot', label: 'Connected Infrastructure & IoT', icon: <CloudCog size={16} /> },
  { href: '/solutions/energy', label: 'Energy & EV Infrastructure', icon: <BatteryCharging size={16} /> },
];

const sectorsItems = [
  { href: '/sectors/leisure-wellness-fitness', label: 'Leisure, Wellness & Fitness', icon: <Dumbbell size={16} /> },
  { href: '/sectors/hospitality-catering', label: 'Hospitality & Catering', icon: <UtensilsCrossed size={16} /> },
  { href: '/sectors/commercial-industrial', label: 'Commercial & Industrial', icon: <Building2 size={16} /> },
  { href: '/sectors/premium-residential', label: 'Premium Residential', icon: <Home size={16} /> },
  { href: '/sectors/specialist-technical-environments', label: 'Specialist Technical Environments', icon: <ShieldAlert size={16} /> },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileSectorsOpen, setMobileSectorsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-red-800/30">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <div className="flex items-center justify-between h-16 sm:h-20">

      {/* LOGO */}
      <Link href="/" className="flex items-center shrink-0">
        <img
          src="/assets/logo.png"
          alt="Syntrad"
          className="h-10 w-auto"
        />
      </Link>

      {/* NAVIGATION + CTA */}
      <div className="hidden md:flex items-center gap-6">

        <nav className="flex items-center gap-5">

          <NavLink href="/">Home</NavLink>

          <DropdownNavLink
            label="Solutions"
            items={solutionsItems}
            viewAllHref="/solutions"
            viewAllLabel="View All Solutions"
          />

          <DropdownNavLink
            label="Sectors"
            items={sectorsItems}
          />

          <NavLink href="/projects">Projects</NavLink>

          <NavLink href="/about">About</NavLink>

          <NavLink href="/contact">Contact</NavLink>

        </nav>

        {/* START A PROJECT */}
        <Link
          href="/contact"
          className="flex items-center gap-2 bg-red-700 hover:bg-red-900 text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors whitespace-nowrap"
        >
          Start a Project
          <ArrowRight size={16} />
        </Link>

      </div>

      {/* MOBILE MENU */}
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

              <MobileDropdown
                label="Solutions"
                icon={<Settings2 size={18} />}
                items={solutionsItems}
                open={mobileSolutionsOpen}
                setOpen={setMobileSolutionsOpen}
                onNavigate={() => setMenuOpen(false)}
                viewAllHref="/solutions"
                viewAllLabel="View All Solutions"
              />

              <MobileDropdown
                label="Sectors"
                icon={<Building2 size={18} />}
                items={sectorsItems}
                open={mobileSectorsOpen}
                setOpen={setMobileSectorsOpen}
                onNavigate={() => setMenuOpen(false)}
              />

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
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 mt-2 bg-red-600 active:bg-red-700 text-white text-base font-semibold px-4 py-3 rounded-xl transition-colors"
              >
                Start a Project
                <ArrowRight size={18} />
              </Link>
            </nav>
          </div>
        )}
      </div>

</header>
  );
}

function NavLink({ href, children }) {
  const pathname = usePathname();

  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`relative px-3 py-2 text-base font-medium ${
        active ? "text-white" : "text-gray-300"
      }`}
    >
      {children}

      <span
        className={`absolute bottom-0 left-0 h-0.5 bg-red-600 transition-all ${
          active ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
}

function DropdownNavLink({ label, items, viewAllHref, viewAllLabel }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);

  const handleEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        className="px-3 py-2 text-base font-medium text-gray-300 hover:text-white flex items-center gap-1.5 relative group"
        onClick={() => setOpen((o) => !o)}
      >
        {label}
        <ChevronDown
          size={15}
          className={`transition-transform ${open ? 'rotate-180' : ''}`}
        />
        <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
      </button>

      {open && (
        <div className="absolute top-full left-0 pt-2 w-72">
          <div className="bg-black border border-red-800/30 rounded-xl shadow-xl shadow-black/50 overflow-hidden">
            {viewAllHref && (
              <>
                <Link
                  href={viewAllHref}
                  className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-white hover:bg-red-900/20 transition-colors"
                >
                  <span className="text-red-500 shrink-0"><LayoutGrid size={16} /></span>
                  <span>{viewAllLabel || `View All ${label}`}</span>
                </Link>
                <div className="h-px bg-white/10" />
              </>
            )}
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-red-900/20 transition-colors"
              >
                <span className="text-red-500 shrink-0">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileLink({ href, icon, children, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium text-gray-300 bg-white/9 active:bg-red-900/30 active:text-white transition-colors"
    >
      {icon}
      {children}
    </Link>
  );
}

function MobileDropdown({ label, icon, items, open, setOpen, onNavigate, viewAllHref, viewAllLabel }) {
  return (
    <div className="rounded-xl bg-white/9 overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-3 px-4 py-3 text-base font-medium text-gray-300 active:text-white transition-colors"
      >
        <span className="flex items-center gap-3">
          {icon}
          {label}
        </span>
        <ChevronDown
          size={18}
          className={`transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div className="pb-2 space-y-1">
          {viewAllHref && (
            <Link
              href={viewAllHref}
              onClick={onNavigate}
              className="flex items-center gap-3 pl-11 pr-4 py-2.5 text-sm font-semibold text-white active:bg-red-900/30 rounded-lg transition-colors"
            >
              <span className="text-red-500 shrink-0"><LayoutGrid size={16} /></span>
              <span>{viewAllLabel || `View All ${label}`}</span>
            </Link>
          )}
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className="flex items-center gap-3 pl-11 pr-4 py-2.5 text-sm font-medium text-gray-400 active:text-white active:bg-red-900/30 rounded-lg transition-colors"
            >
              <span className="text-red-500 shrink-0">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}