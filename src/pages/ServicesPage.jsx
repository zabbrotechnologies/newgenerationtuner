import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, ChevronRight } from 'lucide-react';
import ServiceSelector from '../components/services/ServiceSelector.jsx';
import MaterialExplorer from '../components/services/MaterialExplorer.jsx';
import WaterBeading from '../components/interactive/WaterBeading.jsx';
import MultiStepAssessment from '../components/forms/MultiStepAssessment.jsx';
import { studioServices, studioCompany, PROCESS_TIMELINE, TECHNICAL_LAB_ITEMS } from '../data/index.js';

const CATEGORIES = [
  { id: 'all',        label: 'All Services' },
  { id: 'exterior',   label: 'Exterior' },
  { id: 'interior',   label: 'Interior' },
  { id: 'correction', label: 'Correction' },
  { id: 'protection', label: 'Protection' },
];

const SERVICE_CATEGORY_MAP = {
  'paint-correction':          ['exterior', 'correction'],
  'ceramic-protection':        ['exterior', 'protection'],
  'ppf':                       ['exterior', 'protection'],
  'interior-restoration':      ['interior'],
  'decontamination-jewelling': ['exterior', 'correction'],
  'maintenance-programs':      ['exterior', 'interior'],
};

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export default function ServicesPage() {
  const [scrollY, setScrollY] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredServices = activeCategory === 'all'
    ? studioServices
    : studioServices.filter(s => (SERVICE_CATEGORY_MAP[s.id] || []).includes(activeCategory));

  return (
    <div className="text-[#FAFAFA] selection:bg-[#E10600] selection:text-[#FFFFFF]">

      {/* ── 01. HERO ── */}
      <section className="relative min-h-[85vh] flex items-center py-24 overflow-hidden bg-[#000000] border-b border-white/[0.1]">
        <div
          className="absolute inset-0 z-0 overflow-hidden"
          style={{ transform: `translateY(${Math.min(scrollY * 0.3, 180)}px)` }}
        >
          <img
            src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=2070&q=85&auto=format&fit=crop"
            alt="Automotive detailing service in progress"
            className="w-full h-full object-cover brightness-[0.55] contrast-[1.15] scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/95 via-[#000000]/55 to-[#000000]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-[#000000]/60" />
        </div>

        <div
          className="container relative z-10"
          style={{ transform: `translateY(${Math.min(-scrollY * 0.1, 0)}px)` }}
        >
          <div className="max-w-4xl space-y-7">
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-[#080808]/90 border border-white/[0.12] backdrop-blur-md rounded">
              <span className="w-2 h-2 bg-[#E10600] rounded-full animate-pulse" />
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#FFFFFF] font-medium">
                OUR SERVICES / NEW GENERATION TUNERS
              </span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] uppercase text-[#FFFFFF]">
              OUR<br />
              <span className="text-[#E10600]">SERVICES.</span>
            </h1>

            <p className="font-body text-[#8D9398] text-base md:text-lg max-w-2xl leading-relaxed">
              Engineered for the finish. Every service is a precision discipline — surgical, scientific, and permanent.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#service-directory" className="btn-red text-sm py-3.5 px-7 shadow-xl shadow-red-950/30">
                Explore Services ↓
              </a>
              <a href="#assessment-section" className="btn-ghost-dark text-sm py-3.5 px-7 backdrop-blur-sm">
                Book a Consultation ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 02. SERVICE DIRECTORY + CATEGORY FILTER ── */}
      <section id="service-directory" className="py-20 md:py-28 bg-[#050505] border-b border-white/[0.08]">
        <div className="container">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10 pb-8 border-b border-white/[0.08]"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-widest text-[#D71920]">
                <span className="w-2 h-2 rounded-full bg-[#D71920]" />
                <span>OUR SERVICES</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] tracking-tight uppercase">
                DETAILING & PROTECTION SYSTEMS.
              </h2>
            </div>
            <span className="font-mono text-xs text-[#636366]">06 CORE SPECIALTIES</span>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`font-mono text-[10px] tracking-widest uppercase px-5 py-2.5 border transition-all ${
                  activeCategory === cat.id
                    ? 'border-[#D71920] text-white bg-[#D71920] font-bold'
                    : 'border-white/[0.12] text-[#8D9398] hover:border-white/[0.3] hover:text-[#FFFFFF]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Service Cards Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredServices.map((svc) => (
                <motion.div
                  key={svc.id}
                  variants={fadeInUp}
                  className="bg-[#0E0E10] border border-white/[0.08] hover:border-white/[0.2] transition-all duration-300 rounded-xl overflow-hidden flex flex-col group hover-lift shadow-lg"
                >
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      loading="lazy"
                      className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.1] group-hover:scale-105 group-hover:brightness-[0.85] transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E10] via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 font-mono text-[10px] text-[#FFFFFF] bg-[#050505]/85 px-2.5 py-1 border border-white/[0.1] backdrop-blur-md rounded">
                      {svc.number}
                    </div>
                    <div className="absolute top-3 right-3 font-mono text-[10px] text-[#D71920] bg-[#050505]/85 px-2.5 py-1 border border-white/[0.1] backdrop-blur-md uppercase tracking-wider rounded">
                      {svc.category}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col gap-3">
                    <h3 className="font-display text-xl font-bold text-[#FFFFFF] uppercase tracking-tight group-hover:text-[#D71920] transition-colors">
                      {svc.title}
                    </h3>
                    <p className="font-body text-xs text-[#8E8E93] leading-relaxed">{svc.summary}</p>
                    <a
                      href={`#${svc.id}`}
                      className="mt-auto flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-[#D71920] hover:text-white transition-colors font-semibold"
                    >
                      <span>View Details</span>
                      <ChevronRight size={12} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── 03. DETAILED SERVICE CHAPTERS ── */}

      {/* Paint Correction */}
      <section id="paint-correction" className="py-24 md:py-32 bg-[#000000] border-b border-white/[0.1]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="lg:col-span-6"
            >
              <div className="aspect-[4/5] overflow-hidden border border-white/[0.12] rounded-xl group">
                <img
                  src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=1200&q=80&auto=format&fit=crop"
                  alt="Paint correction multi-stage machine levelling"
                  className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.1] group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="lg:col-span-6 space-y-6"
            >
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#E10600] block font-medium">
                01 — RESTORATION & OPTICAL LEVELLING
              </span>
              <h2 className="font-display text-4xl sm:text-5xl text-[#FFFFFF] font-bold uppercase tracking-tight">
                PAINT CORRECTION
              </h2>
              <p className="font-body text-sm text-[#8D9398] leading-relaxed">
                Paint correction is the controlled, microscopic leveling of the clear coat to permanently eliminate swirl marks, etching, micro-scratches, and severe oxidation. Using dual-action and rotary polishers with diminishing abrasives, we restore optical depth and mirror-grade clarity.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {studioServices.find(s => s.id === 'paint-correction')?.idealFor.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs font-body text-[#AEAEB2]">
                    <CheckCircle2 size={13} className="text-[#E10600] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="p-5 bg-[#080808] border border-white/[0.1] rounded-xl space-y-3">
                <div className="font-mono text-[9px] uppercase tracking-widest text-[#E10600] border-b border-white/[0.08] pb-2 font-medium">TECHNICAL SPECIFICATION</div>
                <div className="grid grid-cols-2 gap-2 text-xs text-[#8D9398] font-body">
                  <div>— Ultrasonic Thickness Scan</div>
                  <div>— 96+ CRI Defect Mapping</div>
                  <div>— Single / Two / Multi-Stage</div>
                  <div>— Rotary + DA Compound Sequence</div>
                </div>
              </div>
              <a href="#assessment-section" className="btn-red inline-flex">
                Get a Paint Correction Quote ↗
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ceramic Coating */}
      <section id="ceramic-protection" className="py-24 md:py-32 bg-[#0A0B0D] border-b border-white/[0.08]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="lg:col-span-6 space-y-6 order-2 lg:order-1"
            >
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#D71920] block font-medium">
                02 — MOLECULAR PROTECTION
              </span>
              <h2 className="font-display text-4xl sm:text-5xl text-[#FFFFFF] font-bold uppercase tracking-tight">
                CERAMIC COATING
              </h2>
              <p className="font-body text-sm text-[#8D9398] leading-relaxed">
                Unlike temporary waxes and organic sealants that degrade in weeks, SiO₂ ceramic coatings form a permanent covalent bond directly into the clear coat. This creates an impenetrable quartz barrier with self-cleaning hydrophobic behaviour, candy-gloss depth, and UV resistance for 3–5+ years.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {studioServices.find(s => s.id === 'ceramic-protection')?.idealFor.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs font-body text-[#AEAEB2]">
                    <CheckCircle2 size={13} className="text-[#D71920] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { label: 'Hardness', value: '9H+' },
                  { label: 'Contact Angle', value: '115°' },
                  { label: 'Durability', value: 'Up to 5Yr' },
                  { label: 'Cure', value: 'IR Thermal' },
                ].map((spec, i) => (
                  <div key={i} className="bg-[#0E0E10] border border-white/[0.08] p-3 rounded text-center">
                    <div className="font-mono text-[9px] text-[#8D9398] uppercase">{spec.label}</div>
                    <div className="font-display text-sm font-bold text-[#FFFFFF] mt-1">{spec.value}</div>
                  </div>
                ))}
              </div>
              <a href="#assessment-section" className="btn-red inline-flex">
                Get a Ceramic Coating Quote ↗
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="lg:col-span-6 order-1 lg:order-2"
            >
              <div className="aspect-[4/5] overflow-hidden border border-white/[0.1] rounded-xl group">
                <img
                  src="https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=1200&q=80&auto=format&fit=crop"
                  alt="Ceramic coating water beading on paintwork"
                  className="w-full h-full object-cover filter brightness-[0.8] contrast-[1.1] group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Water Beading Interactive */}
      <section className="py-20 md:py-24 bg-[#050505] border-b border-white/[0.08]">
        <div className="container">
          <WaterBeading />
        </div>
      </section>

      {/* PPF */}
      <section id="ppf" className="py-24 md:py-32 bg-[#000000] border-b border-white/[0.1]">
        <div className="container">
          <div className="max-w-3xl space-y-5 mb-12">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#E10600] font-medium">
              03 — PHYSICAL ARMOUR
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-[#FFFFFF] font-bold uppercase tracking-tight">
              PAINT PROTECTION FILM
            </h2>
            <p className="font-body text-sm text-[#8D9398] leading-relaxed max-w-2xl">
              Self-healing optical-grade thermoplastic polyurethane engineered to absorb stone chips, high-speed gravel, and minor parking impacts. Computer-cut digital patterns ensure seamless edge-wrapped alignment — no razor blades near your paint.
            </p>
          </div>
          <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden border border-white/[0.12] rounded-xl group">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1800&q=85&auto=format&fit=crop"
              alt="PPF installation on high-performance vehicle"
              className="w-full h-full object-cover filter brightness-[0.6] group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/95 via-transparent to-transparent flex items-end p-8 md:p-12">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end w-full gap-6">
                <div>
                  <div className="font-mono text-[10px] tracking-widest text-[#E10600] uppercase font-medium">COVERAGE OPTIONS</div>
                  <div className="font-display text-xl md:text-2xl text-[#FFFFFF] font-bold mt-1 uppercase">
                    Full Front Track Pack · Full Body Gloss · Stealth Satin
                  </div>
                </div>
                <a href="#assessment-section" className="btn-red shrink-0">
                  Request PPF Assessment ↗
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {[
              { title: 'Self-Healing Film', desc: 'Micro-scratches disappear under ambient heat or warm water — elastomeric thermal memory restores clarity automatically.' },
              { title: 'Computer-Cut Patterns', desc: 'Digital plotter precision cuts zero-gap patterns eliminating human error and razor blade risk during installation.' },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-[#0E0E10] border border-white/[0.08] rounded-xl">
                <CheckCircle2 size={18} className="text-[#E10600] mb-3" />
                <h4 className="font-display text-lg font-bold text-[#FFFFFF] mb-2">{item.title}</h4>
                <p className="font-body text-xs text-[#8E8E93] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interior Detailing */}
      <section id="interior-restoration" className="py-24 md:py-32 bg-[#0A0B0D] border-b border-white/[0.08]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="lg:col-span-6"
            >
              <div className="aspect-[4/5] overflow-hidden border border-white/[0.1] rounded-xl group">
                <img
                  src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=1200&q=80&auto=format&fit=crop"
                  alt="Premium interior detailing and leather restoration"
                  className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.1] group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="lg:col-span-6 space-y-6"
            >
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#D71920] block font-medium">
                04 — CABIN SANCTUARY
              </span>
              <h2 className="font-display text-4xl sm:text-5xl text-[#FFFFFF] font-bold uppercase tracking-tight">
                INTERIOR DETAILING
              </h2>
              <p className="font-body text-sm text-[#8D9398] leading-relaxed">
                Hot-water extraction removes embedded oils, bacteria, and allergens from carpet fibres and upholstery. High-grade lanolin and ceramic leather conditioning restores factory matte texture without greasy residue or chemical odour.
              </p>
              <div className="space-y-2">
                {studioServices.find(s => s.id === 'interior-restoration')?.process.map((step, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs font-body text-[#AEAEB2] py-1.5 border-b border-white/[0.04] last:border-0">
                    <span className="font-mono text-[10px] text-[#D71920] font-semibold mt-0.5">{String(i+1).padStart(2,'0')}</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
              <a href="#assessment-section" className="btn-red inline-flex">
                Book Interior Detailing ↗
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 04. PRODUCTS & MATERIALS ── */}
      <section className="py-20 md:py-28 bg-[#000000] border-b border-white/[0.1]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 space-y-2"
          >
            <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-widest text-[#D71920]">
              <span className="w-8 h-[2px] bg-[#D71920]" />
              <span>PRODUCTS & MATERIALS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FFFFFF] tracking-tight uppercase">
              THE MATERIALS BEHIND THE FINISH.
            </h2>
          </motion.div>
          <MaterialExplorer />
        </div>
      </section>

      {/* ── 05. OUR STANDARD + TECHNICAL INVENTORY ── */}
      <section className="py-20 md:py-28 bg-[#080808] border-b border-white/[0.08]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-14 space-y-2"
          >
            <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-widest text-[#D71920]">
              <span className="w-8 h-[2px] bg-[#D71920]" />
              <span>OUR STANDARD</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FFFFFF] tracking-tight uppercase">
              PRECISION AT EVERY STEP.
            </h2>
            <p className="font-body text-sm text-[#8D9398]">
              Six methodical stages, laboratory-grade equipment, and a strict 50-point quality checklist — we treat every vehicle as a unique commission.
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {PROCESS_TIMELINE.map((pt) => (
              <div key={pt.step} className="bg-[#000000] border border-white/[0.1] p-7 rounded-xl space-y-3 hover:border-white/[0.2] transition-colors">
                <span className="font-mono text-xs text-[#D71920] tracking-widest font-medium">{pt.step} · STAGE</span>
                <h3 className="font-display text-xl font-bold text-[#FFFFFF] uppercase tracking-tight">{pt.title}</h3>
                <p className="font-body text-xs text-[#8D9398] leading-relaxed">{pt.summary}</p>
                <div className="pt-3 border-t border-white/[0.06] text-[11px] text-[#8D9398] font-body">{pt.detail}</div>
              </div>
            ))}
          </div>

          {/* Technical Inventory */}
          <div className="border-t border-white/[0.08] pt-14">
            <div className="mb-10 space-y-2">
              <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-widest text-[#D71920]">
                <span className="w-8 h-[2px] bg-[#D71920]" />
                <span>TECHNICAL INVENTORY</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#FFFFFF] uppercase tracking-tight">
                LABORATORY-GRADE EQUIPMENT & CHEMISTRY.
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {TECHNICAL_LAB_ITEMS.map((item) => (
                <div key={item.id} className="bg-[#0A0B0D] border border-white/[0.08] rounded-xl overflow-hidden group hover:border-white/[0.18] transition-colors shadow-lg">
                  <div className="aspect-[16/9] overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.1] group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute top-3 left-3 font-mono text-[10px] text-[#FFFFFF] bg-[#050505]/85 px-2.5 py-1 border border-white/[0.1] backdrop-blur-md rounded">
                      {item.label}
                    </div>
                  </div>
                  <div className="p-5 space-y-2">
                    <h4 className="font-display text-base font-bold text-[#FFFFFF] group-hover:text-[#D71920] transition-colors">{item.title}</h4>
                    <p className="font-body text-xs text-[#8E8E93] leading-relaxed">{item.description}</p>
                    <div className="pt-2 font-mono text-[10px] text-[#D71920] border-t border-white/[0.06]">{item.spec}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 06. ASSESSMENT / BOOKING CTA ── */}
      <section id="assessment-section" className="py-24 md:py-28 bg-[#000000]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-widest text-[#E10600]">
                <span className="w-8 h-[2px] bg-[#E10600]" />
                <span>CHOOSE YOUR DETAILING SERVICE</span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#FFFFFF] leading-tight uppercase tracking-tight">
                BOOK A<br />
                <span className="text-[#E10600]">CONSULTATION.</span>
              </h2>
              <p className="font-body text-sm text-[#8D9398] leading-relaxed">
                Tell us your vehicle, what you want to achieve, and your timeline. Our technicians will craft a personalised detailing protocol.
              </p>
              <div className="pt-4 border-t border-white/[0.1] space-y-2 font-body text-xs text-[#8D9398]">
                <div>PRIMARY HOTLINE: <a href={`tel:${studioCompany.phones.primary}`} className="font-display text-base text-[#FFFFFF] hover:text-[#E10600] font-bold">{studioCompany.phones.primary}</a></div>
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
