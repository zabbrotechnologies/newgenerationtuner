import React from 'react';
import BeforeAfterSlider from '../components/media/BeforeAfterSlider.jsx';
import ServiceSelector from '../components/services/ServiceSelector.jsx';
import TechnicalExplorer from '../components/services/TechnicalExplorer.jsx';
import MaterialExplorer from '../components/services/MaterialExplorer.jsx';
import PaintInspection from '../components/interactive/PaintInspection.jsx';
import WaterBeading from '../components/interactive/WaterBeading.jsx';
import MultiStepAssessment from '../components/forms/MultiStepAssessment.jsx';
import { studioServices, PROCESS_TIMELINE, studioCompany } from '../data/index.js';

export default function ServicesPage() {
  return (
    <div className="space-y-0 text-[#F2F1ED] selection:bg-[#D71920] selection:text-[#FFFFFF]">
      
      {/* ── 01. HERO SECTION (DARK GRAPHITE) ───────────────────── */}
      <section className="relative min-h-[90vh] flex items-center py-28 overflow-hidden bg-[#101214] border-b border-[rgba(255,255,255,0.12)]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=2070&q=85&auto=format&fit=crop"
            onError={(e) => {
              e.currentTarget.src = "/images/hero-car-wash.jpg";
            }}
            alt="Automotive performance detailing atelier car wash in progress"
            className="w-full h-full object-cover brightness-[0.65] contrast-[1.15] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#101214]/90 via-[#101214]/50 to-[#101214]/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#101214] via-transparent to-[#101214]/70"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl space-y-8">
            
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-[#181B1E]/90 border border-[rgba(255,255,255,0.12)] backdrop-blur-md">
              <span className="w-2 h-2 bg-[#D71920]"></span>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#FFFFFF] font-medium">
                DISCIPLINES &amp; SYSTEMS / NEW GENERATION TUNERS
              </span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] uppercase text-[#FFFFFF]">
              THE FINISH<br />
              <span className="text-[#D71920]">IS ONLY THE</span><br />
              BEGINNING.
            </h1>

            <p className="font-body text-[#8D9398] text-base md:text-lg max-w-2xl leading-relaxed font-normal">
              Detailing is not cleaning. It is the surgical discipline of defect correction, paint refinement, and permanent molecular protection engineered around the physical chemistry of modern clear coats.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#assessment-section" className="btn-red text-sm py-3.5 px-7">
                Request Vehicle Assessment ↗
              </a>
              <a href="#service-index-sec" className="btn-ghost-dark text-sm py-3.5 px-7">
                Explore Services ↓
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── 02. EDITORIAL SERVICE DIRECTORY (LIGHT SECTION) ─────── */}
      <section id="service-index-sec" className="py-24 bg-[#F2F1ED] text-[#101214] border-b border-[rgba(0,0,0,0.12)]">
        <div className="container">
          <div className="flex justify-between items-end pb-6 mb-12 border-b border-[rgba(0,0,0,0.12)]">
            <div>
              <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#D71920] mb-2 font-medium">
                <span className="w-8 h-[2px] bg-[#D71920]"></span>
                <span>DISCIPLINES DIRECTORY</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#101214] tracking-tight uppercase">
                DISCIPLINES &amp; SYSTEMS
              </h2>
            </div>
            <span className="font-mono text-xs text-[#666B72] font-medium">06 CORE SPECIALTIES</span>
          </div>

          <div className="divide-y divide-[rgba(0,0,0,0.1)] border-y border-[rgba(0,0,0,0.1)]">
            {studioServices.map((svc) => (
              <a
                key={svc.id}
                href={`#${svc.id}`}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 py-8 items-center group transition-colors hover:bg-black/[0.02]"
              >
                <div className="md:col-span-1 font-mono text-xs tracking-widest text-[#8D9398] group-hover:text-[#D71920] font-medium">
                  {svc.number}
                </div>
                <div className="md:col-span-5 font-display text-2xl md:text-3xl text-[#101214] font-bold uppercase group-hover:text-[#D71920] transition-colors">
                  {svc.title}
                </div>
                <div className="md:col-span-5 font-body text-xs text-[#555A60] leading-relaxed font-normal">
                  {svc.summary}
                </div>
                <div className="md:col-span-1 text-right font-display text-lg text-[#8D9398] group-hover:text-[#D71920] group-hover:translate-x-1 transition-all">
                  ↗
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03. ART-DIRECTED INDIVIDUAL SERVICE CHAPTERS ───────── */}
      
      {/* CHAPTER 01: PAINT CORRECTION (DARK GRAPHITE) */}
      <section id="paint-correction" className="py-28 bg-[#101214] border-b border-[rgba(255,255,255,0.12)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6">
              <div className="aspect-[4/5] overflow-hidden border border-[rgba(255,255,255,0.12)] group">
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80" 
                  alt="Paint correction machine levelling clear coat" 
                  className="w-full h-full object-cover filter brightness-[0.7] contrast-110 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#D71920] block font-medium">
                CHAPTER 01 — RESTORATION &amp; OPTICAL LEVELLING
              </span>
              <h2 className="font-display text-4xl sm:text-5xl text-[#FFFFFF] font-bold uppercase tracking-tight">
                PAINT CORRECTION
              </h2>
              <p className="font-body text-sm text-[#8D9398] leading-relaxed font-normal">
                Paint correction is the controlled, microscopic leveling of the clear coat to eliminate swirl marks, etching, micro-scratches, and severe oxidation. We utilize dual-action and rotary polishers with diminishing abrasives to unlock pure optical clarity.
              </p>

              <div className="bg-[#181B1E] border border-[rgba(255,255,255,0.12)] p-6 space-y-4">
                <div className="font-mono text-[9px] uppercase tracking-widest text-[#D71920] border-b border-[rgba(255,255,255,0.08)] pb-2 font-medium">
                  TECHNICAL SPECIFICATION
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#8D9398] font-body">
                  <div>— Ultrasonic Paint Thickness Scan</div>
                  <div>— Defect Mapping Under High CRI</div>
                  <div>— Single, Two &amp; Multi-Stage Tiers</div>
                  <div>— Rotary &amp; DA Compound Sequence</div>
                </div>
              </div>

              <div className="pt-4">
                <a href="#assessment-section" className="btn-red">
                  Explore Paint Correction ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 02: CERAMIC PROTECTION (LIGHT SECTION) */}
      <section id="ceramic-protection" className="py-28 bg-[#F2F1ED] text-[#101214] border-b border-[rgba(0,0,0,0.12)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#D71920] block font-medium">
                CHAPTER 02 — MOLECULAR COVALENT SHIELD
              </span>
              <h2 className="font-display text-4xl sm:text-5xl text-[#101214] font-bold uppercase tracking-tight">
                CERAMIC PROTECTION
              </h2>
              <p className="font-body text-sm text-[#555A60] leading-relaxed font-normal">
                Unlike temporary waxes or organic sealants that degrade under heat and rainfall, ceramic coatings create a permanent SiO₂ covalent bond across the vehicle substrate. Delivering an impenetrable hydrophobic barrier with self-cleaning behavior and unmatched candy gloss.
              </p>

              <div className="bg-[#FFFFFF] border border-[rgba(0,0,0,0.12)] p-6 space-y-4">
                <div className="font-mono text-[9px] uppercase tracking-widest text-[#D71920] border-b border-[rgba(0,0,0,0.08)] pb-2 font-medium">
                  PERFORMANCE ATTRIBUTES
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#555A60] font-body">
                  <div>— 115.4° Water Contact Angle</div>
                  <div>— 3-Year, 5-Year &amp; Lifetime Tiers</div>
                  <div>— UV &amp; Acid Oxidation Seal</div>
                  <div>— Infrared Thermal Chamber Cure</div>
                </div>
              </div>

              <div className="pt-4">
                <a href="#assessment-section" className="btn-red">
                  Explore Ceramic Protection ↗
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="aspect-[4/5] overflow-hidden border border-[rgba(0,0,0,0.15)] group">
                <img 
                  src="https://images.unsplash.com/photo-1619976215249-f59f22769b86?w=1200&q=80" 
                  alt="Ceramic coating water beading on car paint" 
                  className="w-full h-full object-cover filter brightness-[0.85] contrast-110 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CHAPTER 03: PAINT PROTECTION FILM (DARK GRAPHITE FULL WIDTH) */}
      <section id="ppf" className="py-28 bg-[#101214] border-b border-[rgba(255,255,255,0.12)]">
        <div className="container">
          <div className="max-w-3xl space-y-4 mb-12">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#D71920] font-medium">
              CHAPTER 03 — PHYSICAL HIGH-VELOCITY ARMOUR
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-[#FFFFFF] font-bold uppercase tracking-tight">
              PAINT PROTECTION FILM (PPF)
            </h2>
            <p className="font-body text-sm text-[#8D9398] leading-relaxed font-normal">
              Self-healing optical-grade thermoplastic polyurethane designed to absorb stone chips, high-speed gravel, and minor parking scratches. Computer-cut patterns ensure seamless edge wrapped alignment without razor blades touching your paint.
            </p>
          </div>

          <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden border border-[rgba(255,255,255,0.12)] group">
            <img 
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1800&q=85" 
              alt="PPF installation on exotic supercar" 
              className="w-full h-full object-cover filter brightness-[0.6] group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101214]/95 via-transparent to-transparent flex items-end p-8 md:p-14">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end w-full gap-6">
                <div>
                  <div className="font-mono text-[10px] tracking-widest text-[#D71920] uppercase font-medium">COVERAGE OPTIONS</div>
                  <div className="font-display text-2xl md:text-3xl text-[#FFFFFF] font-bold mt-1 uppercase">
                    Full Front Track Pack · Full Body Gloss · Stealth Satin
                  </div>
                </div>
                <a href="#assessment-section" className="btn-red shrink-0">
                  Request PPF Assessment ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 04. WATER BEADING INTERACTION (DARK GRAPHITE) ──────── */}
      <section className="py-28 bg-[#181B1E] border-b border-[rgba(255,255,255,0.12)]">
        <div className="container">
          <WaterBeading />
        </div>
      </section>

      {/* ── 05. BEFORE / AFTER (LIGHT SECTION) ─────────────────── */}
      <section className="py-28 bg-[#F2F1ED] text-[#101214] border-b border-[rgba(0,0,0,0.12)]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#D71920] font-medium">
              <span className="w-6 h-[2px] bg-[#D71920]"></span>
              <span>OPTICAL TRANSFORMATION</span>
              <span className="w-6 h-[2px] bg-[#D71920]"></span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#101214] uppercase tracking-tight">
              SEE THE DIFFERENCE.
            </h2>
            <p className="font-body text-sm text-[#555A60] font-normal">
              High-magnification defect inspection. Drag the slider to witness swirl removal and specular reflection restoration.
            </p>
          </div>

          <BeforeAfterSlider />
        </div>
      </section>

      {/* ── 06. MATERIAL SCIENCE EXPLORER (DARK CARBON) ────────── */}
      <section className="py-28 bg-[#101214] border-b border-[rgba(255,255,255,0.12)]">
        <div className="container">
          <MaterialExplorer />
        </div>
      </section>

      {/* ── 07. PROCESS TIMELINE (DARK GRAPHITE) ───────────────── */}
      <section className="py-28 bg-[#181B1E] border-b border-[rgba(255,255,255,0.12)]">
        <div className="container">
          <div className="max-w-3xl space-y-3 mb-16">
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#D71920] font-medium">
              <span className="w-8 h-[2px] bg-[#D71920]"></span>
              <span>OPERATING STANDARD</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#FFFFFF] uppercase tracking-tight">
              THE STANDARD OF OUR WORK
            </h2>
            <p className="font-body text-sm text-[#8D9398] font-normal">
              Six methodical stages. We treat every vehicle as a unique commission — never a production line.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PROCESS_TIMELINE.map(pt => (
              <div key={pt.step} className="bg-[#101214] border border-[rgba(255,255,255,0.12)] p-8 space-y-4">
                <span className="font-mono text-xs text-[#D71920] tracking-widest font-medium">{pt.step} · STAGE</span>
                <h3 className="font-display text-2xl font-bold text-[#FFFFFF] uppercase tracking-tight">{pt.title}</h3>
                <p className="font-body text-xs text-[#8D9398] leading-relaxed font-normal">{pt.summary}</p>
                <div className="pt-3 border-t border-[rgba(255,255,255,0.08)] text-[11px] text-[#8D9398] font-body">
                  {pt.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 08. TECHNICAL MATERIALS / LABORATORY (LIGHT SECTION) ─ */}
      <section className="py-28 bg-[#F2F1ED] text-[#101214] border-b border-[rgba(0,0,0,0.12)]">
        <div className="container space-y-12">
          <div className="max-w-2xl space-y-2">
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#D71920] font-medium">
              <span className="w-8 h-[2px] bg-[#D71920]"></span>
              <span>TECHNICAL INVENTORY</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#101214] uppercase tracking-tight">
              LABORATORY GRADE CHEMISTRY &amp; TOOLS
            </h2>
          </div>

          <TechnicalExplorer />
        </div>
      </section>

      {/* ── 09. 5-STEP VEHICLE ASSESSMENT WIZARD (DARK GRAPHITE) ─ */}
      <section id="assessment-section" className="py-28 bg-[#101214]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#D71920] font-medium">
                <span className="w-8 h-[2px] bg-[#D71920]"></span>
                <span>DIRECT ATELIER BLUEPRINT</span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#FFFFFF] leading-[1.02] uppercase tracking-tight">
                YOUR VEHICLE<br />
                <span className="text-[#D71920]">DESERVES MORE</span><br />
                THAN A WASH.
              </h2>
              <p className="font-body text-sm text-[#8D9398] leading-relaxed font-normal">
                Tell us what you drive, what you want to improve, and what level of surface protection you need. Our master technicians will craft a tailored detailing blueprint.
              </p>
              <div className="pt-6 border-t border-[rgba(255,255,255,0.12)] font-body text-xs text-[#8D9398] space-y-2">
                <div>PRIMARY HOTLINE: <a href="tel:+919159944902" className="font-display text-base text-[#FFFFFF] hover:text-[#D71920] font-bold">+91 91599 44902</a></div>
                <div>STUDIO HOURS: MON – SAT · 09:30 AM – 08:30 PM</div>
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
