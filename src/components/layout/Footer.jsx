import React from 'react';
import { Link } from 'react-router-dom';
import { studioCompany, studioServices } from '../../data/index.js';

export default function Footer() {
  return (
    <footer className="bg-[#101214] border-t border-[rgba(255,255,255,0.12)] pt-20 pb-12 text-[#8D9398] text-sm">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Col with official aerodynamic emblem (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="block py-1 text-[#FFFFFF] hover:text-[#D71920] transition-colors max-w-[280px]">
              <svg viewBox="0 0 500 160" className="w-full h-auto" fill="currentColor">
                <path d="M 90 68 C 170 20, 240 18, 320 40 C 375 55, 425 80, 460 96 C 415 82, 355 64, 305 58 C 240 50, 175 42, 90 68 Z" />
                <path d="M 180 44 C 235 24, 275 24, 310 42 C 265 34, 220 34, 180 44 Z" />
                <text x="250" y="102" fontFamily="'Space Grotesk', sans-serif" fontWeight="900" fontSize="31" letterSpacing="1.5" textAnchor="middle">
                  NEW GENERATION TUNER'S
                </text>
                <text x="250" y="128" fontFamily="'Manrope', sans-serif" fontWeight="700" fontSize="11.5" letterSpacing="3.8" textAnchor="middle" opacity="0.9">
                  Complete Auto Diagnostics Solutions
                </text>
              </svg>
            </Link>
            <p className="font-body text-xs text-[#8D9398] leading-relaxed max-w-sm font-normal">
              Specialist Automobile Electronics, Remapping, Diagnostics &amp; Car Care Studio. Precision multi-stage paint defect levelling, 9H+ SiO₂ ceramic coatings, and self-healing PPF engineering.
            </p>
            <div className="font-mono text-[10px] tracking-widest text-[#D71920] uppercase font-medium">
              {studioCompany.promise} · EST. 2014
            </div>
          </div>

          {/* Disciplines Col (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FFFFFF] font-medium">
              DISCIPLINES
            </div>
            <ul className="space-y-2 text-xs font-body font-normal">
              {studioServices.map(s => (
                <li key={s.id}>
                  <Link to="/services" className="hover:text-[#D71920] transition-colors flex items-center gap-2">
                    <span className="font-mono text-[10px] text-[#8D9398] font-medium">{s.number}</span>
                    <span>{s.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Lines Col (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FFFFFF] font-medium">
              DIRECT DESK &amp; LOCATION
            </div>
            <div className="space-y-2 text-xs font-body">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-[#8D9398] block mb-0.5 font-medium">PRIMARY ATELIER</span>
                <a href={`tel:${studioCompany.phones.primary}`} className="font-display text-lg font-bold text-[#FFFFFF] hover:text-[#D71920] tracking-tight">
                  {studioCompany.phones.primary}
                </a>
              </div>
              <div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-[#8D9398] block mb-0.5 font-medium">STUDIO ADDRESS</span>
                <div className="text-xs text-[#8D9398] leading-relaxed font-normal">
                  {studioCompany.address}
                </div>
              </div>
              <div className="pt-1">
                <span className="font-mono text-[9px] uppercase tracking-wider text-[#8D9398] block mb-0.5 font-medium">EMAIL</span>
                <a href={`mailto:${studioCompany.email}`} className="text-xs text-[#FFFFFF] hover:text-[#D71920] font-semibold">
                  {studioCompany.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[rgba(255,255,255,0.08)] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-mono text-[#8D9398] font-medium">
          <div>© {new Date().getFullYear()} NEW GENERATION TUNER'S. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#D71920] transition-colors">PRIVACY PROTOCOL</a>
            <a href="#" className="hover:text-[#D71920] transition-colors">TERMS OF SERVICE</a>
            <a href="#" className="hover:text-[#D71920] transition-colors">WARRANTY</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
