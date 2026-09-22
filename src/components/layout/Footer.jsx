import React from 'react';
import { Link } from 'react-router-dom';
import { studioCompany, studioServices } from '../../data/index.js';
import { Phone, Mail, MapPin, ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/[0.08] pt-20 pb-12 text-[#8E8E93] text-sm relative">
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#D71920]/5 blur-3xl pointer-events-none"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-5">
            <Link to="/" className="block py-1 text-[#FFFFFF] hover:text-[#D71920] transition-colors max-w-[280px]">
              <svg viewBox="0 0 500 160" className="w-full h-auto" fill="currentColor">
                <path d="M 90 68 C 170 20, 240 18, 320 40 C 375 55, 425 80, 460 96 C 415 82, 355 64, 305 58 C 240 50, 175 42, 90 68 Z" />
                <path d="M 180 44 C 235 24, 275 24, 310 42 C 265 34, 220 34, 180 44 Z" />
                <text x="250" y="102" fontFamily="'Outfit', 'Space Grotesk', sans-serif" fontWeight="800" fontSize="30" letterSpacing="2" textAnchor="middle">
                  NEW GENERATION TUNER'S
                </text>
                <text x="250" y="128" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="11" letterSpacing="4.2" textAnchor="middle" opacity="0.8">
                  Automotive Detailing & Protection
                </text>
              </svg>
            </Link>
            <p className="font-body text-xs text-[#8E8E93] leading-relaxed max-w-sm font-normal">
              Premier automotive detailing studio specializing in multi-stage paint defect levelling, 9H+ SiO₂ ceramic nano-coatings, and self-healing PPF engineering.
            </p>
            <div className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest text-[#D71920] uppercase font-medium bg-[#141417] px-3 py-1.5 border border-white/[0.06] rounded">
              <Sparkles size={12} />
              <span>EST. 2014 · DINDIGUL ATELIER</span>
            </div>
          </div>

          {/* Disciplines Col */}
          <div className="lg:col-span-3 space-y-4">
            <div className="font-mono text-[11px] uppercase tracking-widest text-[#FFFFFF] font-semibold">
              Disciplines
            </div>
            <ul className="space-y-2.5 text-xs font-body font-normal">
              {studioServices.map(s => (
                <li key={s.id}>
                  <Link to="/services" className="text-[#8E8E93] hover:text-[#FFFFFF] hover:translate-x-1 transition-all flex items-center gap-2">
                    <span className="font-mono text-[10px] text-[#636366]">{s.number}</span>
                    <span>{s.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Lines Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="font-mono text-[11px] uppercase tracking-widest text-[#FFFFFF] font-semibold">
              Studio & Direct Desk
            </div>
            <div className="space-y-3 text-xs font-body">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#636366] block mb-1">Direct Consultation Desk</span>
                <a href={`tel:${studioCompany.phones.primary}`} className="font-display text-lg font-bold text-[#FFFFFF] hover:text-[#D71920] transition-colors flex items-center gap-2">
                  <Phone size={16} className="text-[#D71920]" />
                  {studioCompany.phones.primary}
                </a>
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#636366] block mb-1">Studio Location</span>
                <div className="text-xs text-[#8E8E93] leading-relaxed flex items-start gap-2">
                  <MapPin size={16} className="text-[#636366] flex-shrink-0 mt-0.5" />
                  <span>{studioCompany.address}</span>
                </div>
              </div>
              <div className="pt-1">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#636366] block mb-1">Official Inquiries</span>
                <a href={`mailto:${studioCompany.email}`} className="text-xs text-[#FFFFFF] hover:text-[#D71920] font-medium flex items-center gap-2">
                  <Mail size={14} className="text-[#636366]" />
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
            <Link to="/about" className="hover:text-[#F5F5F7] transition-colors">ABOUT STUDIO</Link>
            <Link to="/services" className="hover:text-[#F5F5F7] transition-colors">SERVICES</Link>
            <Link to="/contact" className="hover:text-[#F5F5F7] transition-colors">BOOKING</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
