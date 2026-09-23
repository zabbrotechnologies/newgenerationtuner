import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowUpRight, ChevronDown, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function HeroSection() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="relative min-h-[85vh] lg:min-h-[88vh] flex items-center overflow-hidden bg-[#050505] border-b border-white/[0.08]">
      
      {/* ── 1. FULL-BLEED NATIVE AUTO-LOOP VIDEO BACKGROUND ── */}
      <div className="absolute inset-0 z-0 bg-[#050505] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onLoadedData={() => setVideoLoaded(true)}
          className={`w-full h-full object-cover filter brightness-[0.78] contrast-[1.1] transition-opacity duration-700 ${
            videoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundColor: '#050505' }}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ── 2. CINEMATIC GRADIENT COVER (SERVICES HERO STYLE, ZERO GLASSMORPHISM BLUR) ── */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Left directional gradient for sharp text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/95 via-[#050505]/60 to-[#050505]/30"></div>
        {/* Top and bottom subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/60"></div>
      </div>

      {/* ── 3. HERO CONTENT (MINIMAL TOP GAP, COMPACT SPACING) ── */}
      <div className="container relative z-20 px-4 sm:px-6 pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="max-w-3xl text-left space-y-4 sm:space-y-5">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#050505]/85 border border-white/[0.12] shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D71920] animate-pulse"></span>
            <span className="font-mono text-[10.5px] tracking-widest uppercase text-[#F5F5F7] font-medium">
              PREMIUM AUTOMOTIVE DETAILING STUDIO
            </span>
          </div>

          {/* Sub-headline / Brand Motto */}
          <div className="space-y-1.5">
            <div className="font-mono text-[11px] sm:text-xs text-[#D71920] tracking-[0.25em] uppercase font-semibold flex items-center gap-2.5">
              <span>PRECISION</span>
              <span className="text-[#8E8E93]">•</span>
              <span>PROTECTION</span>
              <span className="text-[#8E8E93]">•</span>
              <span>PERFECTION</span>
            </div>

            {/* Primary Hero Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#FFFFFF] leading-[1.04] uppercase drop-shadow-lg">
              UNCOMPROMISING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F5F5F7] to-[#A0A0A5]">
                SURFACE FINISH.
              </span>
            </h1>
          </div>

          {/* Paragraph */}
          <p className="font-body text-[#D1D1D6] text-xs sm:text-sm lg:text-base leading-relaxed max-w-2xl drop-shadow">
            We do not just wash cars — we engineer optical perfection. Multi-stage paint defect levelling, 9H+ SiO₂ ceramic coatings, and self-healing PPF tailored to your vehicle's physical clear coat.
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
            <Link 
              to="/contact" 
              className="btn-red w-full sm:w-auto py-3 px-7 text-xs sm:text-sm group shadow-lg shadow-red-950/40"
            >
              <span>Book an Assessment</span>
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            
            <a 
              href="#services-section" 
              className="btn-ghost-dark w-full sm:w-auto py-3 px-7 text-xs sm:text-sm bg-[#050505]/70 hover:bg-[#050505]/95 border-white/[0.15]"
            >
              <span>Explore Services</span>
              <ChevronDown size={15} />
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="pt-4 sm:pt-5 border-t border-white/[0.1] grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
            <div className="flex items-center gap-2.5 bg-[#0E0E10]/80 p-2.5 sm:p-3 rounded-lg border border-white/[0.08]">
              <CheckCircle2 size={15} className="text-[#D71920] flex-shrink-0" />
              <div>
                <div className="font-display text-xs sm:text-sm font-semibold text-[#FFFFFF]">9H+ SiO₂ Ceramic</div>
                <div className="font-mono text-[9.5px] text-[#8E8E93]">Covalent Nano-Shield</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 bg-[#0E0E10]/80 p-2.5 sm:p-3 rounded-lg border border-white/[0.08]">
              <CheckCircle2 size={15} className="text-[#D71920] flex-shrink-0" />
              <div>
                <div className="font-display text-xs sm:text-sm font-semibold text-[#FFFFFF]">Self-Healing PPF</div>
                <div className="font-mono text-[9.5px] text-[#8E8E93]">Impact Polyurethane</div>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-2.5 bg-[#0E0E10]/80 p-2.5 sm:p-3 rounded-lg border border-white/[0.08]">
              <CheckCircle2 size={15} className="text-[#D71920] flex-shrink-0" />
              <div>
                <div className="font-display text-xs sm:text-sm font-semibold text-[#FFFFFF]">Ultrasonic Gauging</div>
                <div className="font-mono text-[9.5px] text-[#8E8E93]">0.1μm Subsurface Scan</div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
