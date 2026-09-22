import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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
      
      // Scrolled state
      setIsScrolled(currentScrollY > 40);

      // Hide / Reveal behavior with deadzone
      if (currentScrollY < 60) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current + 10 && currentScrollY > 120) {
        // Scrolling down -> hide navbar smoothly
        if (!mobileMenuOpen) setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current - 8) {
        // Scrolling up -> reveal navbar smoothly
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setIsVisible(true);
  }, [location]);

  // Lock body scroll when mobile menu is open & handle Esc key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
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
    { label: "HOME", path: "/" },
    { label: "SERVICES", path: "/services" },
    { label: "OUR WORK", path: "/gallery" },
    { label: "REVIEWS", path: "/reviews" },
    { label: "STUDIO", path: "/about" },
    { label: "CONTACT", path: "/contact" }
  ];

  return (
    <>
      {/* Skip to Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#E10600] focus:text-white focus:font-mono focus:text-xs focus:uppercase focus:font-bold focus:shadow-2xl focus:outline-none"
      >
        Skip to Main Content
      </a>

      {/* Global Scroll-Aware Header Container */}
      <div 
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Engineered Telemetry Top Rail */}
        <div className={`hidden md:block bg-[#000000] border-b border-[rgba(255,255,255,0.08)] transition-all duration-300 ${
          isScrolled ? 'py-0 h-0 overflow-hidden opacity-0 border-none' : 'py-1.5 opacity-100'
        } text-[10px] font-mono text-[#8D9398] tracking-[0.2em] uppercase font-medium`}>
          <div className="container flex justify-between items-center">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2 text-[#FAFAFA]">
                <span className="w-1.5 h-1.5 bg-[#E10600]"></span>
                NEW GENERATION TUNER'S · COMPLETE AUTO DIAGNOSTICS SOLUTIONS
              </span>
              <span className="text-[#8D9398]">EST. 2014</span>
            </div>
            <div className="flex items-center gap-6">
              <span>DINDIGUL STUDIO · MON–SAT: 09:30–20:30</span>
              <a href={`tel:${studioCompany.phones.primary}`} className="text-[#FAFAFA] hover:text-[#E10600] transition-colors font-medium">
                DIRECT DESK: {studioCompany.phones.primary}
              </a>
            </div>
          </div>
        </div>

        {/* Main Liquid White Glass Navbar */}
        <header className={`transition-all duration-300 navbar-liquid-white ${
          isScrolled ? 'py-2.5 shadow-xl border-b border-black/[0.08]' : 'py-4 border-b border-white/[0.1]'
        }`}>
          <div className="container flex justify-between items-center relative z-10">
            
            {/* Brand Logo with exact aerodynamic car graphic */}
            <Link to="/" className="flex items-center group py-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E10600]" aria-label="New Generation Tuner's Home">
              <div className="h-9 sm:h-11 flex items-center text-[#000000] group-hover:text-[#E10600] transition-colors">
                <svg 
                  viewBox="0 0 500 160" 
                  className="h-9 sm:h-11 w-auto transition-transform duration-300 group-hover:scale-[1.02]"
                  fill="currentColor"
                  aria-hidden="true"
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

            {/* Center Navigation */}
            <nav className="hidden lg:flex items-center gap-7" aria-label="Main Desktop Navigation">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    aria-current={isActive ? 'page' : undefined}
                    className={`relative py-1 font-body font-semibold text-[13px] tracking-wider transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E10600] ${
                      isActive 
                        ? 'text-[#000000] font-bold' 
                        : 'text-[#555A60] hover:text-[#000000]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#E10600] shadow-[0_1px_4px_rgba(215,25,32,0.4)]"></span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Button: Space Grotesk 600 */}
            <div className="hidden lg:flex items-center gap-4">
              <Link 
                to="/contact" 
                className="btn-red text-xs py-2.5 px-5 shadow-lg shadow-red-600/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E10600]"
              >
                Book Assessment ↗
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-[#000000] p-2 hover:text-[#E10600] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E10600]"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Drawer Modal */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 top-[60px] z-40 bg-white/98 backdrop-blur-2xl border-t border-[rgba(0,0,0,0.08)] flex flex-col justify-between p-6 sm:p-8 lg:hidden shadow-2xl overflow-y-auto animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Drawer"
        >
          <nav className="flex flex-col gap-4 pt-2" aria-label="Mobile Navigation Links">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`font-display text-xl sm:text-2xl font-bold uppercase tracking-wide transition-colors flex items-center justify-between py-3 border-b border-[rgba(0,0,0,0.06)] ${
                    isActive ? 'text-[#E10600]' : 'text-[#000000] hover:text-[#E10600]'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-sm text-[#8D9398]">↗</span>
                </Link>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-[rgba(0,0,0,0.08)] space-y-4">
            <Link 
              to="/contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="btn-red w-full justify-center py-3.5 text-sm font-bold shadow-lg shadow-red-600/20"
            >
              Book an Assessment ↗
            </Link>
            <div className="text-center font-mono text-xs text-[#555A60] font-medium">
              STUDIO DESK: <a href={`tel:${studioCompany.phones.primary}`} className="text-[#000000] font-bold hover:text-[#E10600]">{studioCompany.phones.primary}</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

