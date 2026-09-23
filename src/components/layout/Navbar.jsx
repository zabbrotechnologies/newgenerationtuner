import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { studioCompany } from '../../data/index.js';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 30);

      if (currentScrollY < 60) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current + 12 && currentScrollY > 100) {
        if (!mobileMenuOpen) setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current - 8) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
    setIsVisible(true);
  }, [location]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home',       path: '/' },
    { label: 'About Us',   path: '/about' },
    { label: 'Services',   path: '/services' },
    { label: 'Our Work',   path: '/gallery' },
    { label: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#D71920] focus:text-white focus:font-mono focus:text-xs focus:uppercase focus:outline-none"
      >
        Skip to Main Content
      </a>

      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <header
          className={`transition-all duration-300 ${
            isScrolled
              ? 'py-3 navbar-dark-glass shadow-2xl'
              : 'py-4 bg-gradient-to-b from-[#050505]/95 via-[#050505]/70 to-transparent backdrop-blur-md border-b border-white/[0.05]'
          }`}
        >
          <div className="container flex justify-between items-center">

            {/* Brand Logo */}
            <Link
              to="/"
              className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D71920]"
              aria-label="New Generation Tuner's Home"
            >
              <div className="h-8 sm:h-9 flex items-center text-[#FFFFFF] group-hover:text-[#D71920] transition-colors">
                <svg
                  viewBox="0 0 500 160"
                  className="h-8 sm:h-9 w-auto transition-transform duration-300 group-hover:scale-[1.02]"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M 90 68 C 170 20, 240 18, 320 40 C 375 55, 425 80, 460 96 C 415 82, 355 64, 305 58 C 240 50, 175 42, 90 68 Z" />
                  <path d="M 180 44 C 235 24, 275 24, 310 42 C 265 34, 220 34, 180 44 Z" />
                  <text x="250" y="102" fontFamily="'Outfit', 'Space Grotesk', sans-serif" fontWeight="800" fontSize="30" letterSpacing="2" textAnchor="middle">
                    NEW GENERATION TUNER'S
                  </text>
                  <text x="250" y="128" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="11" letterSpacing="4.2" textAnchor="middle" opacity="0.8">
                    Automotive Detailing &amp; Protection
                  </text>
                </svg>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7" aria-label="Main Desktop Navigation">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    aria-current={isActive ? 'page' : undefined}
                    className={`relative py-1 font-body text-[13px] font-medium tracking-wide transition-all ${
                      isActive
                        ? 'text-[#FFFFFF] font-semibold'
                        : 'text-[#AEAEB2] hover:text-[#FFFFFF]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D71920]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right: BOOK NOW CTA */}
            <div className="hidden lg:flex items-center">
              <Link
                to="/contact"
                className="btn-red text-xs py-2.5 px-6 group"
              >
                <span>Book Now</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-[#F5F5F7] p-2 hover:text-[#D71920] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D71920]"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[60px] z-40 bg-[#050505]/98 backdrop-blur-3xl border-t border-white/[0.08] flex flex-col justify-between p-6 sm:p-8 lg:hidden shadow-2xl overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Drawer"
        >
          <nav className="flex flex-col gap-1 pt-2" aria-label="Mobile Navigation Links">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`font-display text-2xl sm:text-3xl font-semibold tracking-tight transition-colors flex items-center justify-between py-4 border-b border-white/[0.06] ${
                    isActive ? 'text-[#D71920]' : 'text-[#F5F5F7] hover:text-[#D71920]'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={18} className="text-[#636366]" />
                </Link>
              );
            })}
          </nav>

          <div className="pt-8 border-t border-white/[0.08] space-y-4">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-red w-full justify-center py-4 text-sm font-semibold"
            >
              <span>Book Now</span>
              <ArrowUpRight size={16} />
            </Link>

            <div className="p-4 bg-[#0E0E10] border border-white/[0.06] rounded space-y-2">
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#8E8E93]">Studio Line</div>
              <a
                href={`tel:${studioCompany.phones.primary}`}
                className="font-display text-base font-semibold text-[#FFFFFF] block hover:text-[#D71920]"
              >
                {studioCompany.phones.primary}
              </a>
              <div className="text-xs text-[#8E8E93] leading-relaxed pt-1">
                {studioCompany.hours}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
