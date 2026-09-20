import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { studioCompany } from '../../data/index.js';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { label: "HOME", path: "/" },
    { label: "SERVICES", path: "/services" },
    { label: "WORK", path: "/gallery" },
    { label: "REVIEWS", path: "/reviews" },
    { label: "STUDIO", path: "/about" },
    { label: "CONTACT", path: "/contact" }
  ];

  return (
    <>
      {/* Engineered Telemetry Top Rail */}
      <div className="hidden md:block bg-[#101214] border-b border-[rgba(255,255,255,0.08)] py-1.5 text-[10px] font-mono text-[#8D9398] tracking-[0.2em] uppercase font-medium">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-[#F2F1ED]">
              <span className="w-1.5 h-1.5 bg-[#D71920]"></span>
              NEW GENERATION TUNER'S · COMPLETE AUTO DIAGNOSTICS SOLUTIONS
            </span>
            <span className="text-[#8D9398]">EST. 2014</span>
          </div>
          <div className="flex items-center gap-6">
            <span>DINDIGUL STUDIO · MON–SAT: 09:30–20:30</span>
            <a href={`tel:${studioCompany.phones.primary}`} className="text-[#F2F1ED] hover:text-[#D71920] transition-colors font-medium">
              DIRECT DESK: {studioCompany.phones.primary}
            </a>
          </div>
        </div>
      </div>

      {/* Main Liquid White Glass Navbar */}
      <header className={`sticky top-0 z-50 transition-all duration-500 navbar-liquid-white ${
        isScrolled ? 'py-2.5 shadow-2xl' : 'py-4'
      }`}>
        <div className="container flex justify-between items-center relative z-10">
          
          {/* Brand Logo with exact aerodynamic car graphic */}
          <Link to="/" className="flex items-center group py-1">
            <div className="h-10 sm:h-12 flex items-center text-[#101214] group-hover:text-[#D71920] transition-colors">
              <svg 
                viewBox="0 0 500 160" 
                className="h-10 sm:h-12 w-auto transition-transform duration-300 group-hover:scale-[1.02]"
                fill="currentColor"
              >
                {/* Aerodynamic Car Silhouette Flow Line */}
                <path d="M 90 68 C 170 20, 240 18, 320 40 C 375 55, 425 80, 460 96 C 415 82, 355 64, 305 58 C 240 50, 175 42, 90 68 Z" />
                {/* Top Canopy Arch Curve */}
                <path d="M 180 44 C 235 24, 275 24, 310 42 C 265 34, 220 34, 180 44 Z" />
                {/* NEW GENERATION TUNER'S Title */}
                <text x="250" y="102" fontFamily="'Space Grotesk', sans-serif" fontWeight="900" fontSize="31" letterSpacing="1.5" textAnchor="middle">
                  NEW GENERATION TUNER'S
                </text>
                {/* Subtitle */}
                <text x="250" y="128" fontFamily="'Manrope', sans-serif" fontWeight="700" fontSize="11.5" letterSpacing="3.8" textAnchor="middle" opacity="0.9">
                  Complete Auto Diagnostics Solutions
                </text>
              </svg>
            </div>
          </Link>

          {/* Center Navigation: Manrope 600 in sleek high-contrast dark */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative py-1.5 font-body font-semibold text-[13px] tracking-wider transition-colors ${
                    isActive 
                      ? 'text-[#101214] font-bold' 
                      : 'text-[#555A60] hover:text-[#101214]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#D71920] shadow-[0_1px_4px_rgba(215,25,32,0.4)]"></span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button: Space Grotesk 600 */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/contact" className="btn-red shadow-lg shadow-red-600/20">
              Book a Detail ↗
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#101214] p-2 hover:text-[#D71920] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[68px] z-40 bg-white/98 backdrop-blur-2xl border-t border-[rgba(0,0,0,0.08)] flex flex-col justify-between p-8 lg:hidden shadow-2xl">
          <nav className="flex flex-col gap-5 pt-4">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-display text-2xl font-bold uppercase tracking-wide transition-colors flex items-center justify-between py-2.5 border-b border-[rgba(0,0,0,0.06)] ${
                    isActive ? 'text-[#D71920]' : 'text-[#101214] hover:text-[#D71920]'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-sm text-[#8D9398]">↗</span>
                </Link>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-[rgba(0,0,0,0.08)] space-y-4">
            <Link to="/contact" className="btn-red w-full justify-center py-4 text-sm font-bold shadow-lg shadow-red-600/20">
              Book a Detail ↗
            </Link>
            <div className="text-center font-mono text-xs text-[#555A60] font-medium">
              STUDIO DESK: <a href={`tel:${studioCompany.phones.primary}`} className="text-[#101214] font-bold hover:text-[#D71920]">{studioCompany.phones.primary}</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
