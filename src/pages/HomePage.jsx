import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  ChevronRight,
  CheckCircle2,
  Wrench,
} from 'lucide-react';
import { motion } from 'framer-motion';
import HeroSection from '../components/sections/HeroSection.jsx';
import TestimonialSection from '../components/sections/TestimonialSection.jsx';
import BeforeAfterSlider from '../components/media/BeforeAfterSlider.jsx';
import {
  studioServices,
  studioGallery,
  studioCompany,
  PROCESS_TIMELINE,
} from '../data/index.js';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

// Only first 4 services on Home page
const PREVIEW_SERVICES = [
  'paint-correction',
  'ceramic-protection',
  'ppf',
  'interior-restoration',
];

// Simplified process names for Home overview
const PROCESS_STEPS = [
  { step: '01', name: 'Inspect',  desc: 'Panel-by-panel ultrasonic depth audit under high-CRI arrays.' },
  { step: '02', name: 'Prepare',  desc: 'Chemical decontamination, iron fallout removal, and surgical masking.' },
  { step: '03', name: 'Correct',  desc: 'Multi-stage rotary compounding to eliminate 90%+ of clear coat defects.' },
  { step: '04', name: 'Detail',   desc: 'Dual-action jewelling refinement for mirror-depth optical clarity.' },
  { step: '05', name: 'Protect',  desc: 'Installation of SiO₂ ceramic shield or self-healing PPF armour.' },
  { step: '06', name: 'Reveal',   desc: '50-point quality check before client walk-around and delivery.' },
];

export default function HomePage() {
  const previewServices = studioServices.filter(s => PREVIEW_SERVICES.includes(s.id));

  return (
    <div className="bg-[#050505] text-[#F5F5F7] selection:bg-[#D71920] selection:text-[#FFFFFF] overflow-hidden">

      {/* ── 01. HERO ── */}
      <HeroSection />

      {/* ── 02. TRUST STRIP ── */}
      <section className="bg-[#0A0B0D] border-b border-white/[0.08] py-8 sm:py-10">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-30px' }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/[0.08]"
          >
            {[
              { tag: 'ESTABLISHED 2014', value: '10+ Years', sub: 'Premium atelier care' },
              { tag: 'NANO-CERAMIC',     value: '9H+ SiO₂', sub: '110°+ hydrophobic protection' },
              { tag: 'SURFACE SCIENCE',  value: '0.1μm Precision', sub: 'Ultrasonic clear coat diagnostics' },
              { tag: 'PHYSICAL ARMOUR',  value: 'Self-Healing PPF', sub: 'Computer-cut wrapped edge coverage' },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="pt-4 md:pt-0 md:px-4 first:pt-0 first:px-0 space-y-1"
              >
                <div className="font-mono text-[10px] text-[#D71920] font-semibold tracking-wider uppercase">{item.tag}</div>
                <div className="font-display text-lg sm:text-xl font-bold text-[#FFFFFF] tracking-tight">{item.value}</div>
                <div className="font-body text-xs text-[#8E8E93]">{item.sub}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 03. OUR DETAILING SERVICES ── */}
      <section id="services-section" className="py-20 md:py-28 bg-[#050505] border-b border-white/[0.08]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-8 mb-12 border-b border-white/[0.08]"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-widest text-[#D71920]">
                <span className="w-2 h-2 rounded-full bg-[#D71920]" />
                <span>OUR DETAILING SERVICES</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FFFFFF] tracking-tight uppercase">
                PRECISION FOR EVERY SURFACE.
              </h2>
            </div>
            <Link
              to="/services"
              className="font-display text-xs text-[#D71920] uppercase tracking-wider hover:text-white flex items-center gap-1.5 font-bold group whitespace-nowrap"
            >
              <span>View All Services</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6"
          >
            {previewServices.map((svc) => (
              <motion.div
                key={svc.id}
                variants={fadeInUp}
                className="bg-[#0E0E10] border border-white/[0.08] hover:border-white/[0.22] transition-all duration-300 rounded-xl overflow-hidden flex flex-col group hover-lift shadow-lg"
              >
                <div className="aspect-[16/10] overflow-hidden relative bg-[#141417]">
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
                </div>

                <div className="p-5 flex flex-col flex-1 justify-between space-y-3">
                  <div className="space-y-2">
                    <h3 className="font-display text-lg font-bold text-[#FFFFFF] uppercase tracking-tight group-hover:text-[#D71920] transition-colors">
                      {svc.title}
                    </h3>
                    <p className="font-body text-xs text-[#8E8E93] leading-relaxed">{svc.summary}</p>
                  </div>
                  <Link
                    to="/services"
                    className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-[#D71920] hover:text-white transition-colors font-semibold mt-2"
                  >
                    <span>Learn More</span>
                    <ChevronRight size={12} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 04. OUR APPROACH ── */}
      <section className="py-20 md:py-28 bg-[#0A0B0D] border-b border-white/[0.08]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="lg:col-span-5 relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/[0.1] relative group shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=900&q=80&auto=format&fit=crop"
                  alt="Paint correction machine levelling clear coat"
                  loading="lazy"
                  className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.15] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0D] via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 p-4 bg-[#050505]/85 backdrop-blur-md rounded-xl border border-white/[0.1]">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-mono text-[10px] text-[#D71920] uppercase tracking-widest font-semibold">TOLERANCE SPEC</div>
                      <div className="font-display text-lg font-bold text-[#FFFFFF]">0.1 MICRON AUDIT</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#D71920]/15 border border-[#D71920]/30 flex items-center justify-center">
                      <Wrench size={16} className="text-[#D71920]" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-widest text-[#D71920]">
                <span className="w-8 h-[2px] bg-[#D71920]" />
                <span>OUR APPROACH</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#FFFFFF] leading-[1.05] uppercase">
                MORE THAN<br />
                JUST A WASH.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D71920] to-[#FF4D4D]">
                  SURFACE SCIENCE.
                </span>
              </h2>

              <p className="font-body text-[#AEAEB2] text-sm sm:text-base leading-relaxed">
                Standard car washes create microscopic scratch networks, holograms, and buffer trails that permanently degrade your clear coat's optical depth. At New Generation Tuner's, every vehicle panel is treated as a precision optical surface requiring scientific intervention — not a quick rinse.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/[0.08]">
                {[
                  { title: 'High-CRI Inspection', desc: '96+ CRI multi-spectrum lighting revealing 90%+ of hidden micro-scratches and swirl networks.' },
                  { title: 'Subsurface Levelling', desc: 'Controlled abrasive sequences that permanently level clear coat peaks without filler or glazes.' },
                  { title: 'Molecular Bonding', desc: 'SiO₂ nanoceramic covalent crosslinking for permanent hydrophobic quartz protection.' },
                  { title: 'Physical Armour',  desc: 'Computer-cut self-healing TPU film absorbing high-velocity stone chips and road gravel.' },
                ].map((item, i) => (
                  <div key={i} className="space-y-1.5">
                    <div className="flex items-center gap-2 text-[#FFFFFF] font-display text-sm font-bold">
                      <CheckCircle2 size={14} className="text-[#D71920] flex-shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    <p className="font-body text-xs text-[#8E8E93] leading-relaxed pl-5">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link to="/about" className="btn-ghost-dark text-xs py-3 px-6">
                  <span>About Our Studio</span>
                  <ChevronRight size={14} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 05. OUR PROCESS ── */}
      <section className="py-20 md:py-28 bg-[#050505] border-b border-white/[0.08]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center mb-12 sm:mb-16 space-y-3"
          >
            <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-[#D71920]">
              <span className="w-6 h-[1px] bg-[#D71920]" />
              <span>OUR PROCESS</span>
              <span className="w-6 h-[1px] bg-[#D71920]" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FFFFFF] tracking-tight uppercase">
              SIX STEPS.<br />
              <span className="text-[#D71920]">ONE REFINED FINISH.</span>
            </h2>
            <p className="font-body text-sm sm:text-base text-[#8E8E93] leading-relaxed">
              A systematic, lab-grade execution pipeline guaranteeing permanent optical clarity and long-term surface defence.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {PROCESS_STEPS.map((item) => (
              <motion.div
                key={item.step}
                variants={fadeInUp}
                className="bg-[#0E0E10] border border-white/[0.08] hover:border-[#D71920]/40 transition-all duration-300 rounded-xl p-6 sm:p-7 flex flex-col gap-4 group shadow-lg"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-3xl font-bold text-[#D71920]">{item.step}</span>
                  <span className="font-mono text-[10px] text-[#636366] uppercase tracking-widest">PHASE {item.step}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-[#FFFFFF] uppercase tracking-tight group-hover:text-[#D71920] transition-colors">
                  {item.name}
                </h3>
                <p className="font-body text-xs text-[#AEAEB2] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 06. REAL TRANSFORMATIONS ── */}
      <section className="py-20 md:py-28 bg-[#0A0B0D] border-b border-white/[0.08]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 pb-8 border-b border-white/[0.08]"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-widest text-[#D71920]">
                <span className="w-2 h-2 rounded-full bg-[#D71920]" />
                <span>REAL TRANSFORMATIONS</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FFFFFF] tracking-tight uppercase">
                SEE THE DIFFERENCE.
              </h2>
            </div>
            <Link
              to="/gallery"
              className="font-display text-xs text-[#D71920] uppercase tracking-wider hover:text-white flex items-center gap-1.5 font-bold group whitespace-nowrap"
            >
              <span>View Our Work</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>

          <BeforeAfterSlider />
        </div>
      </section>

      {/* ── 07. FEATURED WORK ── */}
      <section className="py-20 md:py-28 bg-[#050505] border-b border-white/[0.08]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-8 mb-12 border-b border-white/[0.08]"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-widest text-[#D71920]">
                <span className="w-2 h-2 rounded-full bg-[#D71920]" />
                <span>FEATURED WORK</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FFFFFF] tracking-tight uppercase">
                RECENT VEHICLE<br />TRANSFORMATIONS.
              </h2>
            </div>
            <Link
              to="/gallery"
              className="font-display text-xs text-[#D71920] uppercase tracking-wider hover:text-white flex items-center gap-1.5 font-bold group whitespace-nowrap"
            >
              <span>View All Work</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            {studioGallery.slice(0, 4).map((item) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                className="bg-[#0E0E10] border border-white/[0.08] rounded-xl overflow-hidden group hover-lift shadow-xl cursor-pointer"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.1] group-hover:scale-105 group-hover:brightness-[0.9] transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E10] via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 bg-[#050505]/85 px-3 py-1 font-mono text-[10px] text-[#D71920] border border-white/[0.1] uppercase tracking-wider backdrop-blur-md rounded">
                    {item.category}
                  </div>
                </div>

                <div className="p-6 sm:p-7 space-y-3">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[#FFFFFF] uppercase tracking-tight">
                      {item.title}
                    </h3>
                    <div className="font-mono text-xs text-[#D71920] font-medium mt-1">{item.service}</div>
                  </div>
                  <p className="font-body text-xs text-[#8E8E93] leading-relaxed">{item.description}</p>
                  <div className="pt-3 border-t border-white/[0.06] flex flex-wrap gap-2">
                    {item.metrics.map((m, mIdx) => (
                      <span key={mIdx} className="font-mono text-[10px] text-[#AEAEB2] bg-white/[0.04] px-2.5 py-1 border border-white/[0.06] rounded">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-10 text-center">
            <Link to="/gallery" className="btn-ghost-dark text-xs py-3 px-8">
              <span>View All Work</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 08. STUDIO SHOWREEL ── */}
      <section className="py-20 md:py-28 bg-[#0A0B0D] border-b border-white/[0.08] overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-widest text-[#D71920]">
                <span className="w-8 h-[2px] bg-[#D71920]" />
                <span>THE DETAILING EXPERIENCE</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#FFFFFF] leading-[1.05] uppercase">
                INSIDE THE<br />
                <span className="text-[#D71920]">STUDIO.</span>
              </h2>
              <p className="font-body text-sm sm:text-base text-[#AEAEB2] leading-relaxed">
                Step inside our climate-controlled detailing bays. From deionized touchless foam baths to short-wave infrared ceramic baking stations, witness how our master technicians achieve mirror-depth reflections.
              </p>
              <div className="space-y-2.5 pt-2">
                {[
                  'DUST-FREE CLIMATE-CONTROLLED ATELIER BAYS',
                  '96+ CRI HIGH-PRECISION INSPECTION ARRAYS',
                  'SHORT-WAVE IR INFRARED CERAMIC BAKING',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs font-mono text-[#F5F5F7]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D71920] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="lg:col-span-7"
            >
              <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-white/[0.12] bg-[#000000] relative shadow-2xl group">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover filter brightness-[0.8] contrast-[1.1]"
                >
                  <source src="/videos/hero.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center pointer-events-none">
                  <div className="font-mono text-[10px] text-[#FFFFFF] bg-[#050505]/80 px-3 py-1 border border-white/[0.1] backdrop-blur-md rounded">
                    ATELIER LIVE FEED · STUDIO BAY 01
                  </div>
                  <div className="font-mono text-[10px] text-[#D71920] bg-[#050505]/80 px-3 py-1 border border-white/[0.1] backdrop-blur-md flex items-center gap-1.5 rounded">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D71920] animate-ping" />
                    ACTIVE DETAILING
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 09. CLIENT EXPERIENCES ── */}
      <TestimonialSection />

      {/* ── 10. FINAL CTA ── */}
      <section className="py-20 md:py-28 bg-[#050505] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(215,25,32,0.08)_0%,transparent_70%)] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container relative z-10 text-center max-w-4xl mx-auto space-y-6 sm:space-y-8"
        >
          <div className="font-mono text-[11px] uppercase tracking-widest text-[#D71920]">
            BOOK YOUR APPOINTMENT
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#FFFFFF] leading-[1.06]">
            READY FOR A<br />
            <span className="text-[#D71920]">BETTER FINISH?</span>
          </h2>

          <p className="font-body text-sm sm:text-base text-[#AEAEB2] max-w-2xl mx-auto leading-relaxed">
            Your car deserves more than a quick wash. Experience mirror-depth paint correction, permanent 9H+ SiO₂ ceramic coatings, and stealth self-healing PPF at our Dindigul studio.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/contact"
              className="btn-red w-full sm:w-auto py-4 px-10 text-sm group"
            >
              <span>Book Your Appointment</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <a
              href={`https://wa.me/${studioCompany.phones.primary.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-dark w-full sm:w-auto py-4 px-10 text-sm"
            >
              <span>WhatsApp Consultation</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="pt-4 text-xs font-mono text-[#636366]">
            {studioCompany.promise}
          </div>
        </motion.div>
      </section>

    </div>
  );
}
