import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BeforeAfterSlider from '../components/media/BeforeAfterSlider.jsx';
import ServiceSelector from '../components/services/ServiceSelector.jsx';
import MaterialExplorer from '../components/services/MaterialExplorer.jsx';
import PaintInspection from '../components/interactive/PaintInspection.jsx';
import WaterBeading from '../components/interactive/WaterBeading.jsx';
import MultiStepAssessment from '../components/forms/MultiStepAssessment.jsx';
import { studioServices, studioCompany } from '../data/index.js';

export default function HomePage() {
  const [activeServiceIdx, setActiveServiceIdx] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceImages = [
    {
      title: "PAINT CORRECTION",
      sub: "Microscopic clear coat levelling removing 90%+ wash scratches",
      img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80",
      spec: "0.1 MICRON ACCURACY"
    },
    {
      title: "CERAMIC PROTECTION",
      sub: "9H+ Covalent SiO₂ quartz shield with 115° hydrophobic rolloff",
      img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1400&q=80",
      spec: "115.4° BEAD ANGLE"
    },
    {
      title: "PAINT PROTECTION FILM",
      sub: "Optically clear 8.0 mil self-healing polyurethane gravel barrier",
      img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1400&q=80",
      spec: "8.0 MIL SELF-HEALING"
    },
    {
      title: "INTERIOR RESTORATION",
      sub: "Enzyme steam sanitization and OEM matte leather hide encapsulation",
      img: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=1400&q=80",
      spec: "pH 7.0 BALANCED"
    },
    {
      title: "DECONTAMINATION & POLISH",
      sub: "Chemical iron fallout neutralization and high-gloss single-stage polish",
      img: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1400&q=80",
      spec: "FALLOUT FREE"
    },
    {
      title: "MAINTENANCE PROTOCOLS",
      sub: "Scientific recurring preservation for coated or wrapped track assets",
      img: "https://images.unsplash.com/photo-1619976215249-f59f22769b86?w=1400&q=80",
      spec: "SiO₂ TOPPER BOOST"
    }
  ];

  return (
    <div className="space-y-0 text-[#FAFAFA] selection:bg-[#E10600] selection:text-[#FFFFFF]">
      
      {/* ── 01. HERO (DARK GRAPHITE CINEMATIC) ──────────────────── */}
      <section className="relative min-h-[94vh] flex items-center overflow-hidden py-24 bg-[#000000] border-b border-[rgba(255,255,255,0.12)]">
        <div 
          className="absolute inset-0 z-0 overflow-hidden"
          style={{ transform: `translateY(${Math.min(scrollY * 0.35, 200)}px)` }}
        >
          <video
            src="/videos/hero.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />
          {/* Subtle Dark Gradient Overlay */}
          <div 
            className="absolute inset-0" 
            style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.62) 45%, rgba(0,0,0,0.25) 100%)' }}
          ></div>
          {/* Bottom Gradient for natural transition */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent opacity-90"></div>
        </div>

        <div 
          className="container relative z-10 animate-content-float"
          style={{ transform: `translateY(${Math.min(-scrollY * 0.12, 0)}px)` }}
        >
          <div 
            className="max-w-4xl space-y-8 p-8 sm:p-10"
            style={{
              background: 'rgba(0,0,0,0.25)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.12)'
            }}
          >
            
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-[#080808]/90 border border-[rgba(255,255,255,0.12)] shadow-2xl transition-transform hover:-translate-y-0.5">
              <span className="w-2 h-2 bg-[#E10600] animate-pulse"></span>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#FFFFFF] font-medium">
                AUTOMOTIVE PERFORMANCE DETAILING ATELIER
              </span>
            </div>

            {/* Bold Grotesk Headline */}
            <div className="space-y-2">
              <div className="font-mono text-xs text-[#E10600] tracking-[0.25em] uppercase font-bold flex items-center gap-3">
                <span>PROTECT.</span>
                <span className="text-[#8D9398]">/</span>
                <span>CORRECT.</span>
                <span className="text-[#8D9398]">/</span>
                <span>REFINE.</span>
              </div>

              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] uppercase text-[#FFFFFF] drop-shadow-lg">
                SURFACE.<br />
                <span className="text-[#E10600]">PERFECTED.</span>
              </h1>
            </div>

            <p className="font-body text-[#8D9398] text-base md:text-lg max-w-2xl leading-relaxed font-normal">
              Precision paint correction, 9H+ SiO₂ ceramic coatings, and self-healing PPF engineered around your vehicle's physical clear coat substrate.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#assessment-section" className="btn-red text-sm py-3.5 px-7 shadow-xl shadow-red-950/30">
                Book Your Detail ↗
              </a>
              <a href="#service-discovery" className="btn-ghost-dark text-sm py-3.5 px-7 backdrop-blur-sm">
                Explore The Work ↓
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── 02. BRAND STATEMENT (LIGHT SECTION) ─────────────────── */}
      <section className="py-24 md:py-32 bg-[#FAFAFA] text-[#000000] border-b border-[rgba(0,0,0,0.12)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] overflow-hidden border border-[rgba(0,0,0,0.15)] group">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80" 
                  alt="Detailing craftsmanship and light inspection" 
                  className="w-full h-full object-cover filter brightness-[0.85] contrast-115 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#E10600] font-medium">
                <span className="w-8 h-[2px] bg-[#E10600]"></span>
                <span>PHILOSOPHY / 01</span>
              </div>

              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#000000] leading-[1.02] uppercase">
                A CLEAN CAR ISN'T THE GOAL.<br />
                <span className="text-[#E10600]">THE FINISH IS.</span>
              </h2>

              <p className="font-body text-[#555A60] text-base md:text-lg leading-relaxed font-normal">
                Cleaning removes surface debris. Detailing is the science of restoring factory paintwork to pure optical reflection — leveling microscopic clear coat peaks, eliminating wash friction scratches, and sealing the substrate with permanent molecular protection.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[rgba(0,0,0,0.1)]">
                <div>
                  <h4 className="font-display text-xl text-[#000000] font-bold mb-1">Subsurface Levelling</h4>
                  <p className="font-body text-xs text-[#666B72] leading-relaxed font-normal">Microscopic compounding removing swirl scratches down to pure mirror reflection.</p>
                </div>
                <div>
                  <h4 className="font-display text-xl text-[#000000] font-bold mb-1">Molecular Covalent Seals</h4>
                  <p className="font-body text-xs text-[#666B72] leading-relaxed font-normal">SiO₂ crosslinked matrices resistant to UV oxidation, acid rain, and bird lime etching.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 03. SERVICE DISCOVERY (INTERACTIVE SPLIT CHAPTERS) ───── */}
      <section id="service-discovery" className="py-24 md:py-32 bg-[#000000] border-b border-[rgba(255,255,255,0.12)]">
        <div className="container">
          <div className="flex justify-between items-end pb-6 mb-12 border-b border-[rgba(255,255,255,0.12)]">
            <div>
              <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#E10600] mb-2 font-medium">
                <span className="w-6 h-[2px] bg-[#E10600]"></span>
                <span>SERVICE EXPLORATION</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFFFFF] tracking-tight uppercase">
                WHAT WE DO
              </h2>
            </div>
            <Link to="/services" className="font-body text-xs text-[#E10600] uppercase tracking-wider hover:underline flex items-center gap-1 font-semibold">
              View All 06 Disciplines ↗
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Vertical Interactive List (col-span-6) */}
            <div className="lg:col-span-6 divide-y divide-[rgba(255,255,255,0.08)] border-y border-[rgba(255,255,255,0.08)]">
              {studioServices.map((svc, idx) => (
                <div
                  key={svc.id}
                  onMouseEnter={() => setActiveServiceIdx(idx)}
                  className={`py-6 px-4 transition-all cursor-pointer flex items-center justify-between group ${
                    activeServiceIdx === idx 
                      ? 'bg-[#080808] border-l-4 border-[#E10600]' 
                      : 'hover:bg-white/[0.02]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-[#8D9398] font-medium">{svc.number}</span>
                    <span className={`font-display text-xl sm:text-2xl font-bold tracking-tight uppercase transition-colors ${
                      activeServiceIdx === idx ? 'text-[#FFFFFF]' : 'text-[#8D9398] group-hover:text-[#FFFFFF]'
                    }`}>
                      {svc.title}
                    </span>
                  </div>
                  <span className={`font-display text-base transition-transform ${
                    activeServiceIdx === idx ? 'text-[#E10600] translate-x-1 font-bold' : 'text-[#8D9398]'
                  }`}>
                    →
                  </span>
                </div>
              ))}
            </div>

            {/* Right Dynamic Showcase Panel (col-span-6) */}
            <div className="lg:col-span-6 relative aspect-[4/3] lg:aspect-auto overflow-hidden border border-[rgba(255,255,255,0.12)] bg-[#080808]">
              <img
                src={serviceImages[activeServiceIdx]?.img}
                alt={serviceImages[activeServiceIdx]?.title}
                className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.2] transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#000000]/95 border border-[rgba(255,255,255,0.12)]">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-mono text-[10px] text-[#E10600] uppercase tracking-widest font-medium">
                    DISCIPLINE 0{activeServiceIdx + 1}
                  </span>
                  <span className="font-mono text-[10px] text-[#FFFFFF] bg-[#080808] px-2 py-0.5 border border-white/10 font-medium">
                    {serviceImages[activeServiceIdx]?.spec}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold text-[#FFFFFF] uppercase tracking-tight mb-1">
                  {serviceImages[activeServiceIdx]?.title}
                </h3>
                <p className="font-body text-xs text-[#8D9398] leading-relaxed font-normal">
                  {serviceImages[activeServiceIdx]?.sub}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 04. PAINT CORRECTION (LIGHT SECTION) ─────────────────── */}
      <section className="py-24 md:py-32 bg-[#FAFAFA] text-[#000000] border-b border-[rgba(0,0,0,0.12)]">
        <div className="container">
          <PaintInspection />
        </div>
      </section>

      {/* ── 05. CERAMIC PROTECTION (DARK GRAPHITE) ──────────────── */}
      <section className="py-24 md:py-32 bg-[#000000] border-b border-[rgba(255,255,255,0.12)]">
        <div className="container">
          <WaterBeading />
        </div>
      </section>

      {/* ── 06. PPF LAYERED REVEAL (LIGHT SECTION) ──────────────── */}
      <section className="py-24 md:py-32 bg-[#FAFAFA] text-[#000000] border-b border-[rgba(0,0,0,0.12)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#E10600] font-medium">
                <span className="w-8 h-[2px] bg-[#E10600]"></span>
                <span>PHYSICAL ARMOUR / PPF</span>
              </div>

              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#000000] leading-[1.02] uppercase">
                KEEP THE PAINT.<br />
                <span className="text-[#E10600]">TAKE THE IMPACT.</span>
              </h2>

              <p className="font-body text-[#555A60] text-sm md:text-base leading-relaxed font-normal">
                Self-healing optical-grade thermoplastic polyurethane designed to absorb high-velocity gravel, stone chips, and track debris. Micro-scratches disappear automatically under engine bay or solar heat.
              </p>

              <div className="bg-[#FFFFFF] border border-[rgba(0,0,0,0.12)] p-5 space-y-3">
                <div className="font-mono text-[10px] text-[#E10600] uppercase tracking-widest font-medium">
                  LAYER COMPOSITION
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="bg-[#FAFAFA] p-2 text-center border border-[rgba(0,0,0,0.06)]">
                    <div className="font-mono text-[#8D9398] text-[9px] font-medium">01</div>
                    <div className="font-body font-semibold text-[#000000]">CLEAR COAT</div>
                  </div>
                  <div className="bg-[#E10600]/10 p-2 text-center border border-[#E10600]/40">
                    <div className="font-mono text-[#E10600] text-[9px] font-medium">02</div>
                    <div className="font-body font-semibold text-[#E10600]">8.0 MIL PPF</div>
                  </div>
                  <div className="bg-[#FAFAFA] p-2 text-center border border-[rgba(0,0,0,0.06)]">
                    <div className="font-mono text-[#8D9398] text-[9px] font-medium">03</div>
                    <div className="font-body font-semibold text-[#000000]">CERAMIC TOP</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="aspect-[4/3] overflow-hidden border border-[rgba(0,0,0,0.15)] group relative">
                <img
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80"
                  alt="PPF application"
                  className="w-full h-full object-cover filter brightness-[0.9] contrast-[1.1] group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 07. BEFORE / AFTER FULL-WIDTH TRANSFORMATION ───────── */}
      <section className="py-24 md:py-32 bg-[#000000] border-b border-[rgba(255,255,255,0.12)]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#E10600] font-medium">
              <span className="w-6 h-[2px] bg-[#E10600]"></span>
              <span>OPTICAL TRANSFORMATION</span>
              <span className="w-6 h-[2px] bg-[#E10600]"></span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#FFFFFF] uppercase tracking-tight">
              SEE THE DIFFERENCE.
            </h2>
            <p className="font-body text-sm text-[#8D9398] font-normal">
              High-magnification defect removal. Drag the boundary line to compare damaged clear coat with a 2-stage corrected mirror finish.
            </p>
          </div>

          <BeforeAfterSlider />
        </div>
      </section>

      {/* ── 08. MATERIAL EXPLORER ───────────────────────────────── */}
      <section className="py-24 md:py-32 bg-[#080808] border-b border-[rgba(255,255,255,0.12)]">
        <div className="container">
          <MaterialExplorer />
        </div>
      </section>

      {/* ── 09. INTERACTIVE SERVICE SELECTOR ───────────────────── */}
      <section className="py-24 md:py-32 bg-[#000000] border-b border-[rgba(255,255,255,0.12)]">
        <div className="container">
          <ServiceSelector />
        </div>
      </section>

      {/* ── 10. MULTI-STEP VEHICLE ASSESSMENT WIZARD ───────────── */}
      <section id="assessment-section" className="py-24 md:py-32 bg-[#080808]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#E10600] font-medium">
                <span className="w-8 h-[2px] bg-[#E10600]"></span>
                <span>DIRECT ATELIER CONSULTATION</span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#FFFFFF] leading-tight uppercase tracking-tight">
                READY FOR A<br />
                <span className="text-[#E10600]">BETTER FINISH?</span>
              </h2>
              <p className="font-body text-sm text-[#8D9398] leading-relaxed font-normal">
                Complete our 5-step vehicle assessment. Our master technicians will evaluate your clear coat thickness, swirl severity, and recommend tailored protection protocols within 90 minutes.
              </p>
              
              <div className="pt-6 border-t border-[rgba(255,255,255,0.12)] space-y-2.5">
                <div>
                  <span className="font-mono text-[10px] tracking-wider uppercase text-[#8D9398] block">DIRECT DESK</span>
                  <a href={`tel:${studioCompany.phones.primary}`} className="font-display text-2xl font-bold text-[#FFFFFF] hover:text-[#E10600] transition-colors">
                    {studioCompany.phones.primary}
                  </a>
                </div>
                <div className="font-body text-xs text-[#8D9398]">STUDIO: {studioCompany.address}</div>
                <div className="font-body text-xs text-[#FFFFFF] font-medium">HOURS: {studioCompany.hours}</div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <MultiStepAssessment />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
