import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronDown, CheckCircle2 } from 'lucide-react';

const heroStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const heroFadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function HeroSection() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="relative min-h-[85vh] sm:min-h-[88vh] flex items-center overflow-hidden bg-[#050505] border-b border-white/[0.08]">
      
      {/* ── 1. FULL-BLEED NATIVE AUTO-LOOP VIDEO BACKGROUND ── */}
      <div className="absolute inset-0 z-0 bg-[#050505] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onLoadedData={() => setVideoLoaded(true)}
          className={`w-full h-full object-cover filter brightness-[0.85] contrast-[1.05] transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundColor: '#050505' }}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ── 2. CINEMATIC GRADIENT COVER (CALIBRATED VISIBILITY) ── */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Left directional gradient for sharp text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/88 via-[#050505]/58 to-[#050505]/22"></div>
        {/* Top and bottom subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-[#050505]/40"></div>
      </div>

      {/* ── 3. HERO CONTENT (RESPONSIVE ALIGNMENT & ANIMATIONS) ── */}
      <div className="container relative z-20 px-4 sm:px-6 pt-20 sm:pt-24 md:pt-28 pb-10 sm:pb-14 md:pb-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroStagger}
          className="max-w-3xl text-left space-y-3.5 sm:space-y-5"
        >
          
          {/* Badge */}
          <motion.div variants={heroFadeUp} className="inline-flex">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#050505]/85 border border-white/[0.12] shadow-md backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D71920] animate-pulse"></span>
              <span className="font-mono text-[9px] sm:text-[10.5px] tracking-widest uppercase text-[#F5F5F7] font-medium">
                PREMIUM AUTOMOTIVE DETAILING STUDIO
              </span>
            </div>
          </motion.div>

          {/* Sub-headline / Brand Motto */}
          <motion.div variants={heroFadeUp} className="space-y-1 sm:space-y-1.5">
            <div className="font-mono text-[10px] sm:text-xs text-[#D71920] tracking-[0.2em] sm:tracking-[0.25em] uppercase font-semibold flex items-center gap-2 sm:gap-2.5">
              <span>PRECISION</span>
              <span className="text-[#8E8E93]">•</span>
              <span>PROTECTION</span>
              <span className="text-[#8E8E93]">•</span>
              <span>PERFECTION</span>
            </div>

            {/* Primary Hero Headline */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#FFFFFF] leading-[1.05] uppercase drop-shadow-lg">
              UNCOMPROMISING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F5F5F7] to-[#A0A0A5]">
                SURFACE FINISH.
              </span>
            </h1>
          </motion.div>

          {/* Paragraph */}
          <motion.p variants={heroFadeUp} className="font-body text-[#D1D1D6] text-xs sm:text-sm lg:text-base leading-relaxed max-w-2xl drop-shadow">
            We do not just wash cars — we engineer optical perfection. Multi-stage paint defect levelling, 9H+ SiO₂ ceramic coatings, and self-healing PPF tailored to your vehicle's physical clear coat.
          </motion.p>

          {/* Dual Action Buttons */}
          <motion.div variants={heroFadeUp} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-1">
            <Link 
              to="/contact" 
              className="btn-red w-full sm:w-auto py-3 px-6 sm:px-7 text-xs sm:text-sm group shadow-lg shadow-red-950/40 justify-center"
            >
              <span>Book an Assessment</span>
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            
            <a 
              href="#services-section" 
              className="btn-ghost-dark w-full sm:w-auto py-3 px-6 sm:px-7 text-xs sm:text-sm bg-[#050505]/70 hover:bg-[#050505]/95 border-white/[0.15] justify-center"
            >
              <span>Explore Services</span>
              <ChevronDown size={15} />
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div variants={heroFadeUp} className="pt-3 sm:pt-5 border-t border-white/[0.1] grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 text-left">
            <div className="flex items-center gap-2 sm:gap-2.5 bg-[#0E0E10]/85 p-2 sm:p-3 rounded-lg border border-white/[0.08] backdrop-blur-sm">
              <CheckCircle2 size={14} className="text-[#D71920] flex-shrink-0" />
              <div className="min-w-0">
                <div className="font-display text-[11px] sm:text-sm font-semibold text-[#FFFFFF] truncate">9H+ SiO₂ Ceramic</div>
                <div className="font-mono text-[8.5px] sm:text-[9.5px] text-[#8E8E93] truncate">Covalent Nano-Shield</div>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-2.5 bg-[#0E0E10]/85 p-2 sm:p-3 rounded-lg border border-white/[0.08] backdrop-blur-sm">
              <CheckCircle2 size={14} className="text-[#D71920] flex-shrink-0" />
              <div className="min-w-0">
                <div className="font-display text-[11px] sm:text-sm font-semibold text-[#FFFFFF] truncate">Self-Healing PPF</div>
                <div className="font-mono text-[8.5px] sm:text-[9.5px] text-[#8E8E93] truncate">Impact Polyurethane</div>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-2.5 bg-[#0E0E10]/85 p-2.5 sm:p-3 rounded-lg border border-white/[0.08] backdrop-blur-sm">
              <CheckCircle2 size={14} className="text-[#D71920] flex-shrink-0" />
              <div className="min-w-0">
                <div className="font-display text-xs sm:text-sm font-semibold text-[#FFFFFF] truncate">Ultrasonic Gauging</div>
                <div className="font-mono text-[9.5px] text-[#8E8E93] truncate">0.1μm Subsurface Scan</div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>

    </section>
  );
}
