import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Sparkles, ArrowUpRight, ChevronDown, CheckCircle2 } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20 bg-[#050505] border-b border-white/[0.08]">
      
      {/* ── 1. FULL-BLEED VIDEO BACKGROUND ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-car-wash.jpg"
          className="w-full h-full object-cover filter brightness-[0.45] contrast-[1.15] scale-105"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          <source src="/videos/car-wash.mp4" type="video/mp4" />
          {/* Fallback image if video fails to load */}
          <img
            src="/images/hero-car-wash.jpg"
            alt="New Generation Tuner Detailing Studio"
            className="w-full h-full object-cover"
          />
        </video>

        {/* Cinematic Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-[#050505]/80 pointer-events-none"></div>
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#050505]/30 to-[#050505]/90 pointer-events-none"></div>
      </div>

      {/* ── 2. BLACK GLASSMORPHISM OVERLAY PANEL & CONTENT ── */}
      <div className="container relative z-10 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* The Black Glass Card */}
          <div className="glass-panel-dark rounded-xl p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden border border-white/[0.12]">
            
            {/* Ambient Red Glow in Card Corner */}
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#D71920]/15 rounded-full blur-3xl pointer-events-none"></div>

            <div className="space-y-6 sm:space-y-8 relative z-10 text-center sm:text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.1] backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#D71920] animate-pulse"></span>
                <span className="font-mono text-[11px] tracking-widest uppercase text-[#F5F5F7] font-medium">
                  PREMIUM AUTOMOTIVE DETAILING STUDIO
                </span>
              </div>

              {/* Sub-headline / Brand Motto */}
              <div className="space-y-3">
                <div className="font-mono text-xs sm:text-sm text-[#D71920] tracking-[0.25em] uppercase font-semibold flex items-center justify-center sm:justify-start gap-3">
                  <span>PRECISION</span>
                  <span className="text-[#636366]">•</span>
                  <span>PROTECTION</span>
                  <span className="text-[#636366]">•</span>
                  <span>PERFECTION</span>
                </div>

                {/* Primary Hero Headline */}
                <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#FFFFFF] leading-[1.05] uppercase">
                  UNCOMPROMISING <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F5F5F7] to-[#8E8E93]">
                    SURFACE FINISH.
                  </span>
                </h1>
              </div>

              {/* Paragraph */}
              <p className="font-body text-[#AEAEB2] text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
                We do not just wash cars — we engineer optical perfection. Multi-stage paint defect levelling, 9H+ SiO₂ ceramic coatings, and self-healing PPF tailored to your vehicle's physical clear coat.
              </p>

              {/* Dual Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <Link 
                  to="/contact" 
                  className="btn-red w-full sm:w-auto py-3.5 px-8 text-sm group"
                >
                  <span>Book an Assessment</span>
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
                
                <a 
                  href="#services-section" 
                  className="btn-ghost-dark w-full sm:w-auto py-3.5 px-8 text-sm"
                >
                  <span>Explore Services</span>
                  <ChevronDown size={16} />
                </a>
              </div>

              {/* Trust Indicators inside Glass Panel */}
              <div className="pt-6 sm:pt-8 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-[#D71920] flex-shrink-0" />
                  <div>
                    <div className="font-display text-xs sm:text-sm font-semibold text-[#FFFFFF]">9H+ SiO₂ Ceramic</div>
                    <div className="font-mono text-[10px] text-[#8E8E93]">Covalent Nano-Shield</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-[#D71920] flex-shrink-0" />
                  <div>
                    <div className="font-display text-xs sm:text-sm font-semibold text-[#FFFFFF]">Self-Healing PPF</div>
                    <div className="font-mono text-[10px] text-[#8E8E93]">Impact Polyurethane</div>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-[#D71920] flex-shrink-0" />
                  <div>
                    <div className="font-display text-xs sm:text-sm font-semibold text-[#FFFFFF]">Ultrasonic Gauging</div>
                    <div className="font-mono text-[10px] text-[#8E8E93]">0.1μm Subsurface Scan</div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <a 
        href="#trust-strip" 
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 text-[#8E8E93] hover:text-[#FFFFFF] transition-colors flex flex-col items-center gap-1.5"
        aria-label="Scroll down to content"
      >
        <span className="font-mono text-[9px] tracking-widest uppercase">DISCOVER</span>
        <ChevronDown size={14} className="animate-bounce" />
      </a>

    </section>
  );
}
