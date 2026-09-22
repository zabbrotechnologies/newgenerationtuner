import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowUpRight, ChevronDown, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function HeroSection() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center overflow-hidden bg-[#050505] border-b border-white/[0.08]">
      
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

      {/* ── 2. FULL-COVER GLASS OVERLAY (SUBTLE GLASSMORPHISM, ULTRA-LOW BLUR) ── */}
      <div className="absolute inset-0 z-10 bg-[#050505]/20 backdrop-blur-[2px] pointer-events-none">
        {/* Directional gradient to guarantee text contrast on the left while keeping right side crisp */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/85 via-[#050505]/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/60"></div>
      </div>

      {/* ── 3. HERO CONTENT (LEFT-ALIGNED, ZERO EXCESS MARGIN GAP) ── */}
      <div className="container relative z-20 px-4 sm:px-6 pt-32 pb-20">
        <div className="max-w-3xl text-left space-y-6 sm:space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#050505]/75 border border-white/[0.12] backdrop-blur-md shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#D71920] animate-pulse"></span>
            <span className="font-mono text-[11px] tracking-widest uppercase text-[#F5F5F7] font-medium">
              PREMIUM AUTOMOTIVE DETAILING STUDIO
            </span>
          </div>

          {/* Sub-headline / Brand Motto */}
          <div className="space-y-3">
            <div className="font-mono text-xs sm:text-sm text-[#D71920] tracking-[0.25em] uppercase font-semibold flex items-center gap-3">
              <span>PRECISION</span>
              <span className="text-[#8E8E93]">•</span>
              <span>PROTECTION</span>
              <span className="text-[#8E8E93]">•</span>
              <span>PERFECTION</span>
            </div>

            {/* Primary Hero Headline */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#FFFFFF] leading-[1.04] uppercase drop-shadow-2xl">
              UNCOMPROMISING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F5F5F7] to-[#A0A0A5]">
                SURFACE FINISH.
              </span>
            </h1>
          </div>

          {/* Paragraph */}
          <p className="font-body text-[#D1D1D6] text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl drop-shadow">
            We do not just wash cars — we engineer optical perfection. Multi-stage paint defect levelling, 9H+ SiO₂ ceramic coatings, and self-healing PPF tailored to your vehicle's physical clear coat.
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <Link 
              to="/contact" 
              className="btn-red w-full sm:w-auto py-3.5 px-8 text-sm group shadow-xl shadow-red-950/40"
            >
              <span>Book an Assessment</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            
            <a 
              href="#services-section" 
              className="btn-ghost-dark w-full sm:w-auto py-3.5 px-8 text-sm bg-[#050505]/60 hover:bg-[#050505]/90 border-white/[0.15]"
            >
              <span>Explore Services</span>
              <ChevronDown size={16} />
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="pt-6 sm:pt-8 border-t border-white/[0.1] grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
            <div className="flex items-center gap-2.5 bg-[#050505]/60 p-3 rounded border border-white/[0.08] backdrop-blur-sm">
              <CheckCircle2 size={16} className="text-[#D71920] flex-shrink-0" />
              <div>
                <div className="font-display text-xs sm:text-sm font-semibold text-[#FFFFFF]">9H+ SiO₂ Ceramic</div>
                <div className="font-mono text-[10px] text-[#8E8E93]">Covalent Nano-Shield</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 bg-[#050505]/60 p-3 rounded border border-white/[0.08] backdrop-blur-sm">
              <CheckCircle2 size={16} className="text-[#D71920] flex-shrink-0" />
              <div>
                <div className="font-display text-xs sm:text-sm font-semibold text-[#FFFFFF]">Self-Healing PPF</div>
                <div className="font-mono text-[10px] text-[#8E8E93]">Impact Polyurethane</div>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-2.5 bg-[#050505]/60 p-3 rounded border border-white/[0.08] backdrop-blur-sm">
              <CheckCircle2 size={16} className="text-[#D71920] flex-shrink-0" />
              <div>
                <div className="font-display text-xs sm:text-sm font-semibold text-[#FFFFFF]">Ultrasonic Gauging</div>
                <div className="font-mono text-[10px] text-[#8E8E93]">0.1μm Subsurface Scan</div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
