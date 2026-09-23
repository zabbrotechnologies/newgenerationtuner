import React from 'react';
import { Link } from 'react-router-dom';
import { studioCompany, studioServices } from '../../data/index.js';
import { Phone, Mail, MapPin, Clock, Sparkles, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const navLinks = [
    { label: 'Home',       path: '/' },
    { label: 'About Us',   path: '/about' },
    { label: 'Services',   path: '/services' },
    { label: 'Our Work',   path: '/gallery' },
    { label: 'Contact Us', path: '/contact' },
  ];

  return (
    <footer className="bg-[#050505] border-t border-white/[0.08] pt-16 pb-10 text-[#8E8E93] text-sm relative">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-24 bg-[#D71920]/4 blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-14">

          {/* Brand */}
          <div className="lg:col-span-5 space-y-5">
            <Link to="/" className="block text-[#FFFFFF] hover:text-[#D71920] transition-colors max-w-[260px]">
              <svg viewBox="0 0 500 160" className="w-full h-auto" fill="currentColor">
                <path d="M 90 68 C 170 20, 240 18, 320 40 C 375 55, 425 80, 460 96 C 415 82, 355 64, 305 58 C 240 50, 175 42, 90 68 Z" />
                <path d="M 180 44 C 235 24, 275 24, 310 42 C 265 34, 220 34, 180 44 Z" />
                <text x="250" y="102" fontFamily="'Outfit', 'Space Grotesk', sans-serif" fontWeight="800" fontSize="30" letterSpacing="2" textAnchor="middle">
                  NEW GENERATION TUNER'S
                </text>
                <text x="250" y="128" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="11" letterSpacing="4.2" textAnchor="middle" opacity="0.8">
                  Automotive Detailing &amp; Protection
                </text>
              </svg>
            </Link>
            <p className="font-body text-xs text-[#8E8E93] leading-relaxed max-w-sm font-normal">
              Premier automotive detailing studio specializing in multi-stage paint correction, 9H+ SiO₂ ceramic nano-coatings, and self-healing Paint Protection Film engineering.
            </p>
            <div className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest text-[#D71920] uppercase font-medium bg-[#141417] px-3 py-1.5 border border-white/[0.06] rounded">
              <Sparkles size={12} />
              <span>EST. 2014 · DINDIGUL ATELIER</span>
            </div>

            {/* WhatsApp Quick Link */}
            <a
              href={`https://wa.me/${studioCompany.phones.primary.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest text-[#FFFFFF] uppercase font-semibold bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 hover:border-[#25D366]/60 px-3 py-1.5 rounded transition-all"
            >
              <span>WhatsApp Studio</span>
              <ArrowUpRight size={12} />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <div className="font-mono text-[11px] uppercase tracking-widest text-[#FFFFFF] font-semibold">
              Navigation
            </div>
            <ul className="space-y-2.5 text-xs font-body font-normal">
              {navLinks.map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[#8E8E93] hover:text-[#FFFFFF] transition-all flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-2 h-[1px] bg-[#D71920] transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3 space-y-4">
            <div className="font-mono text-[11px] uppercase tracking-widest text-[#FFFFFF] font-semibold">
              Services
            </div>
            <ul className="space-y-2.5 text-xs font-body font-normal">
              {studioServices.slice(0, 4).map(s => (
                <li key={s.id}>
                  <Link
                    to="/services"
                    className="text-[#8E8E93] hover:text-[#FFFFFF] transition-all flex items-center gap-1.5 group"
                  >
                    <span className="font-mono text-[10px] text-[#636366] group-hover:text-[#D71920] transition-colors">{s.number}</span>
                    <span>{s.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="font-mono text-[10px] text-[#D71920] hover:text-white transition-colors flex items-center gap-1 uppercase tracking-wider">
                  <span>All Services</span>
                  <ArrowUpRight size={10} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio Contact */}
          <div className="lg:col-span-2 space-y-4">
            <div className="font-mono text-[11px] uppercase tracking-widest text-[#FFFFFF] font-semibold">
              Studio
            </div>
            <div className="space-y-3 text-xs font-body">
              <div>
                <a
                  href={`tel:${studioCompany.phones.primary}`}
                  className="font-display text-base font-bold text-[#FFFFFF] hover:text-[#D71920] transition-colors flex items-center gap-1.5"
                >
                  <Phone size={14} className="text-[#D71920]" />
                  {studioCompany.phones.primary}
                </a>
              </div>
              <div className="flex items-start gap-1.5">
                <Clock size={13} className="text-[#636366] flex-shrink-0 mt-0.5" />
                <span className="text-[#8E8E93] leading-relaxed text-[11px]">{studioCompany.hours}</span>
              </div>
              <div className="flex items-start gap-1.5">
                <MapPin size={13} className="text-[#636366] flex-shrink-0 mt-0.5" />
                <span className="text-[#8E8E93] leading-relaxed text-[11px]">Dindigul, Tamil Nadu</span>
              </div>
              <div>
                <a
                  href={`mailto:${studioCompany.email}`}
                  className="text-[11px] text-[#8E8E93] hover:text-[#D71920] font-medium flex items-center gap-1.5 transition-colors"
                >
                  <Mail size={13} className="text-[#636366]" />
                  {studioCompany.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-[#636366]">
          <div>© {new Date().getFullYear()} NEW GENERATION TUNER'S. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-6 text-[11px]">
            <Link to="/services" className="hover:text-[#F5F5F7] transition-colors">SERVICES</Link>
            <Link to="/gallery" className="hover:text-[#F5F5F7] transition-colors">OUR WORK</Link>
            <Link to="/about" className="hover:text-[#F5F5F7] transition-colors">ABOUT</Link>
            <Link to="/contact" className="hover:text-[#F5F5F7] transition-colors">BOOKING</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
