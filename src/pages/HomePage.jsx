import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Sparkles, 
  ArrowUpRight, 
  ChevronRight, 
  Eye, 
  Gauge, 
  CheckCircle2, 
  Phone, 
  Clock, 
  MapPin, 
  Layers,
  Wrench,
  Zap
} from 'lucide-react';
import { motion } from 'framer-motion';
import HeroSection from '../components/sections/HeroSection.jsx';
import FAQSection from '../components/sections/FAQSection.jsx';
import TestimonialSection from '../components/sections/TestimonialSection.jsx';
import BeforeAfterSlider from '../components/media/BeforeAfterSlider.jsx';
import MultiStepAssessment from '../components/forms/MultiStepAssessment.jsx';
import { 
  studioServices, 
  studioGallery, 
  studioCompany, 
  PROCESS_TIMELINE, 
  TECHNICAL_LAB_ITEMS 
} from '../data/index.js';

// Framer Motion Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export default function HomePage() {
  return (
    <div id="main-content" className="bg-[#050505] text-[#F5F5F7] selection:bg-[#D71920] selection:text-[#FFFFFF] overflow-hidden">
      
      {/* ── 01. NAVIGATION (Navbar.jsx) ── */}

      {/* ── 02. HERO SECTION (VIDEO + GLASS OVERLAY) ── */}
      <HeroSection />

      {/* ── 03. TRUST / VALUE STRIP ── */}
      <section id="trust-strip" className="bg-[#0A0B0D] border-b border-white/[0.08] py-8 sm:py-12 relative">
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/[0.08]"
          >
            {/* Stat 01 */}
            <motion.div variants={fadeInUp} className="pt-4 md:pt-0 md:px-4 first:pt-0 first:px-0 space-y-1">
              <div className="font-mono text-xs text-[#D71920] font-semibold tracking-wider uppercase">
                ESTABLISHED 2014
              </div>
              <div className="font-display text-lg sm:text-2xl font-bold text-[#FFFFFF] tracking-tight">
                10+ Years Atelier Care
              </div>
              <div className="font-body text-xs text-[#8E8E93]">
                Dedicated to bespoke vehicle restoration
              </div>
            </motion.div>

            {/* Stat 02 */}
            <motion.div variants={fadeInUp} className="pt-4 md:pt-0 md:px-4 space-y-1">
              <div className="font-mono text-xs text-[#D71920] font-semibold tracking-wider uppercase">
                NANO-CERAMIC
              </div>
              <div className="font-display text-lg sm:text-2xl font-bold text-[#FFFFFF] tracking-tight">
                9H+ SiO₂ Covalent Matrix
              </div>
              <div className="font-body text-xs text-[#8E8E93]">
                110°+ hydrophobic roll-off angle
              </div>
            </motion.div>

            {/* Stat 03 */}
            <motion.div variants={fadeInUp} className="pt-4 md:pt-0 md:px-4 space-y-1">
              <div className="font-mono text-xs text-[#D71920] font-semibold tracking-wider uppercase">
                SURFACE INTEGRITY
              </div>
              <div className="font-display text-lg sm:text-2xl font-bold text-[#FFFFFF] tracking-tight">
                0.1μm Ultrasonic Precision
              </div>
              <div className="font-body text-xs text-[#8E8E93]">
                Non-destructive clear coat diagnostics
              </div>
            </motion.div>

            {/* Stat 04 */}
            <motion.div variants={fadeInUp} className="pt-4 md:pt-0 md:px-4 space-y-1">
              <div className="font-mono text-xs text-[#D71920] font-semibold tracking-wider uppercase">
                PHYSICAL ARMOUR
              </div>
              <div className="font-display text-lg sm:text-2xl font-bold text-[#FFFFFF] tracking-tight">
                Self-Healing TPU Film
              </div>
              <div className="font-body text-xs text-[#8E8E93]">
                Computer-cut wrapped edge coverage
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 04. COMPLETE AUTOMOTIVE DETAILING SOLUTIONS (SERVICES) ── */}
      <section id="services-section" className="py-20 md:py-32 bg-[#050505] border-b border-white/[0.08] relative">
        <div className="container">
          
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-8 mb-12 sm:mb-16 border-b border-white/[0.08]"
          >
            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-widest text-[#D71920]">
                <span className="w-2 h-2 rounded-full bg-[#D71920]"></span>
                <span>DETAILING DISCIPLINES</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FFFFFF] tracking-tight uppercase">
                COMPLETE AUTOMOTIVE DETAILING SOLUTIONS
              </h2>
            </div>
            
            <Link to="/services" className="font-display text-xs text-[#D71920] uppercase tracking-wider hover:text-white flex items-center gap-1.5 font-bold group">
              <span>View All 06 Disciplines</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>

          {/* Services Cards Grid */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {studioServices.map((svc) => (
              <motion.div
                key={svc.id}
                variants={fadeInUp}
                className="bg-[#0E0E10] border border-white/[0.08] hover:border-white/[0.22] transition-all duration-300 rounded-xl overflow-hidden flex flex-col justify-between group hover-lift shadow-lg"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden relative bg-[#141417]">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      loading="lazy"
                      className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.1] group-hover:scale-105 group-hover:brightness-[0.9] transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E10] via-transparent to-transparent"></div>
                    
                    <div className="absolute top-3.5 left-3.5 font-mono text-[11px] text-[#FFFFFF] bg-[#050505]/80 px-2.5 py-1 border border-white/[0.1] backdrop-blur-md rounded">
                      {svc.number}
                    </div>

                    <div className="absolute top-3.5 right-3.5 font-mono text-[10px] text-[#D71920] bg-[#050505]/80 px-2.5 py-1 border border-white/[0.1] backdrop-blur-md uppercase tracking-wider rounded">
                      {svc.category}
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 space-y-3.5">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[#FFFFFF] uppercase tracking-tight group-hover:text-[#D71920] transition-colors">
                      {svc.title}
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-[#8E8E93] leading-relaxed font-normal">
                      {svc.summary}
                    </p>

                    <div className="pt-3 border-t border-white/[0.06] space-y-1.5">
                      {svc.process.slice(0, 3).map((p, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-2 text-xs font-body text-[#AEAEB2]">
                          <CheckCircle2 size={12} className="text-[#D71920] flex-shrink-0" />
                          <span className="truncate">{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-7 pt-0">
                  <Link
                    to="/services"
                    className="w-full py-3 px-4 bg-white/[0.03] hover:bg-[#D71920] text-[#FFFFFF] border border-white/[0.08] hover:border-[#D71920] rounded font-display text-xs uppercase tracking-wider font-semibold flex items-center justify-between transition-all"
                  >
                    <span>Explore Protocol</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ── 05. ABOUT / WHY NGT ("MORE THAN JUST DETAILING") ── */}
      <section className="py-20 md:py-32 bg-[#0A0B0D] border-b border-white/[0.08] relative">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/[0.1] relative group shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80" 
                  alt="Craftsmanship and multi-spectrum inspection" 
                  loading="lazy"
                  className="w-full h-full object-cover filter brightness-[0.8] contrast-[1.15] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0D] via-transparent to-transparent"></div>
                
                <div className="absolute bottom-5 left-5 right-5 p-4 sm:p-5 glass-panel-dark rounded-xl border border-white/[0.1]">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-mono text-[10px] text-[#D71920] uppercase tracking-widest font-semibold">TOLERANCE SPEC</div>
                      <div className="font-display text-lg sm:text-xl font-bold text-[#FFFFFF]">0.1 MICRON AUDIT</div>
                    </div>
                    <Gauge size={24} className="text-[#D71920]" />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-widest text-[#D71920]">
                <span className="w-8 h-[2px] bg-[#D71920]"></span>
                <span>ATELIER PHILOSOPHY</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#FFFFFF] leading-[1.05] uppercase">
                MORE THAN JUST A WASH.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D71920] to-[#FF4D4D]">
                  SURFACE SCIENCE.
                </span>
              </h2>

              <p className="font-body text-[#AEAEB2] text-sm sm:text-base leading-relaxed font-normal">
                Standard car washes create microscopic scratch networks, holograms, and buffer trails that ruin your clear coat's optical depth. At New Generation Tuner's, we treat every vehicle panel as a precision optical surface.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4 border-t border-white/[0.08]">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#FFFFFF] font-display text-base sm:text-lg font-bold">
                    <Eye size={18} className="text-[#D71920]" />
                    <span>High-CRI Inspection</span>
                  </div>
                  <p className="font-body text-xs text-[#8E8E93] leading-relaxed">
                    96+ CRI multi-spectrum lighting simulating solar fidelity to reveal over 90% of hidden clear coat micro-scratches.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#FFFFFF] font-display text-base sm:text-lg font-bold">
                    <Layers size={18} className="text-[#D71920]" />
                    <span>Subsurface Levelling</span>
                  </div>
                  <p className="font-body text-xs text-[#8E8E93] leading-relaxed">
                    Controlled compound sequences that safely level clear coat peaks permanently without filler glazes.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link to="/about" className="btn-ghost-dark text-xs py-3 px-6">
                  <span>Learn About Our Studio</span>
                  <ChevronRight size={14} />
                </Link>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 06. DETAILING PROCESS (01 TO 06 NUMBERED STEPS) ── */}
      <section className="py-20 md:py-32 bg-[#050505] border-b border-white/[0.08] relative">
        <div className="container">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 space-y-3"
          >
            <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-[#D71920]">
              <Wrench size={14} />
              <span>THE 6-STEP PROTOCOL</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FFFFFF] tracking-tight uppercase">
              OUR DETAILING PROCESS
            </h2>
            <p className="font-body text-sm sm:text-base text-[#8E8E93] leading-relaxed font-normal">
              A systematic, lab-grade execution pipeline guaranteeing permanent optical clarity and long-term surface defense.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {PROCESS_TIMELINE.map((item) => (
              <motion.div 
                key={item.step}
                variants={fadeInUp}
                className="bg-[#0E0E10] border border-white/[0.08] p-6 sm:p-7 rounded-xl hover:border-[#D71920]/40 transition-all duration-300 relative group flex flex-col justify-between shadow-lg"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-2xl font-bold text-[#D71920]">{item.step}</span>
                    <span className="font-mono text-[10px] tracking-widest text-[#8E8E93] uppercase">PHASE {item.step}</span>
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-bold text-[#FFFFFF] uppercase tracking-tight group-hover:text-[#D71920] transition-colors">
                    {item.title}
                  </h3>

                  <p className="font-body text-xs text-[#AEAEB2] leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/[0.06] font-mono text-[11px] text-[#8E8E93]">
                  {item.detail}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ── 07. REAL RESULTS & OPTICAL PROOF (TRANSFORMATION SLIDER SECTION) ── */}
      <section className="py-20 md:py-32 bg-[#0A0B0D] border-b border-white/[0.08] relative">
        <div className="container">
          <BeforeAfterSlider />
        </div>
      </section>

      {/* ── 08. GALLERY / OUR WORK (PORTFOLIO GRID) ── */}
      <section className="py-20 md:py-32 bg-[#050505] border-b border-white/[0.08] relative">
        <div className="container">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-8 mb-12 sm:mb-16 border-b border-white/[0.08]"
          >
            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-widest text-[#D71920]">
                <span className="w-2 h-2 rounded-full bg-[#D71920]"></span>
                <span>RECENT ATELIER COMMISSIONS</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FFFFFF] tracking-tight uppercase">
                FEATURED WORK &amp; CLIENT BUILDS
              </h2>
            </div>
            
            <Link to="/gallery" className="font-display text-xs text-[#D71920] uppercase tracking-wider hover:text-white flex items-center gap-1.5 font-bold group">
              <span>Explore Complete Gallery</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {studioGallery.map((item) => (
              <motion.div 
                key={item.id}
                variants={fadeInUp}
                className="bg-[#0E0E10] border border-white/[0.08] rounded-xl overflow-hidden group hover-lift shadow-xl"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover filter brightness-[0.8] contrast-[1.1] group-hover:scale-105 group-hover:brightness-[0.95] transition-all duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E10] via-transparent to-transparent"></div>
                  
                  <div className="absolute top-4 right-4 bg-[#050505]/80 px-3 py-1 font-mono text-[10px] text-[#D71920] border border-white/[0.1] uppercase tracking-wider backdrop-blur-md rounded">
                    {item.category}
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-[#FFFFFF] uppercase tracking-tight">
                      {item.title}
                    </h3>
                    <div className="font-mono text-xs text-[#D71920] font-medium mt-1">
                      {item.service}
                    </div>
                  </div>

                  <p className="font-body text-xs text-[#8E8E93] leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-2">
                    {item.metrics.map((metric, mIdx) => (
                      <span key={mIdx} className="font-mono text-[10px] text-[#AEAEB2] bg-white/[0.04] px-2.5 py-1 border border-white/[0.06] rounded">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ── 09. SHOWREEL / THE STUDIO EXPERIENCE ── */}
      <section className="py-20 md:py-32 bg-[#0A0B0D] border-b border-white/[0.08] relative overflow-hidden">
        <div className="container">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-widest text-[#D71920]">
                <span className="w-8 h-[2px] bg-[#D71920]"></span>
                <span>STUDIO SHOWREEL</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#FFFFFF] leading-[1.05] uppercase">
                THE DETAILING<br />
                <span className="text-[#D71920]">EXPERIENCE.</span>
              </h2>

              <p className="font-body text-sm sm:text-base text-[#AEAEB2] leading-relaxed">
                Step inside our climate-controlled detailing bays. From touchless deionized foam baths to short-wave infrared ceramic baking lamps, witness how our master technicians achieve mirror reflections.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs font-mono text-[#F5F5F7]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D71920]"></span>
                  <span>DUST-FREE CLIMATE-CONTROLLED ATELIER BAYS</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-mono text-[#F5F5F7]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D71920]"></span>
                  <span>96+ CRI HIGH-PRECISION INSPECTION ARRAYS</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-mono text-[#F5F5F7]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D71920]"></span>
                  <span>SHORT-WAVE IR INFRARED CERAMIC BAKING</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
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
                  <source src="/videos/car-detailing.mp4" type="video/mp4" />
                  <source src="/videos/hero.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/60 via-transparent to-transparent pointer-events-none"></div>
                
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center pointer-events-none">
                  <div className="font-mono text-[10px] text-[#FFFFFF] bg-[#050505]/80 px-3 py-1 border border-white/[0.1] backdrop-blur-md rounded">
                    ATELIER LIVE FEED · STUDIO BAY 01
                  </div>
                  <div className="font-mono text-[10px] text-[#D71920] bg-[#050505]/80 px-3 py-1 border border-white/[0.1] backdrop-blur-md flex items-center gap-1.5 rounded">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D71920] animate-ping"></span>
                    ACTIVE DETAILING
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ── 10. TESTIMONIALS (CLIENT REVIEWS) ── */}
      <TestimonialSection />

      {/* ── 11. DETAILING STANDARDS & TECHNOLOGY (TECHNICAL LAB) ── */}
      <section className="py-20 md:py-32 bg-[#050505] border-b border-white/[0.08] relative">
        <div className="container">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 space-y-3"
          >
            <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-[#D71920]">
              <Zap size={14} />
              <span>TECHNICAL LAB STANDARDS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FFFFFF] tracking-tight uppercase">
              PRECISION EQUIPMENT &amp; CHEMISTRY
            </h2>
            <p className="font-body text-sm sm:text-base text-[#8E8E93] leading-relaxed font-normal">
              State-of-the-art diagnostic instruments, German dual-action polishers, and pure silicon dioxide chemistry.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {TECHNICAL_LAB_ITEMS.map((item) => (
              <motion.div 
                key={item.id}
                variants={fadeInUp}
                className="bg-[#0E0E10] border border-white/[0.08] rounded-xl overflow-hidden group hover-lift flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="aspect-[16/9] overflow-hidden relative">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      loading="lazy"
                      className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.1] group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute top-3 left-3 font-mono text-[10px] text-[#FFFFFF] bg-[#050505]/80 px-2.5 py-0.5 border border-white/[0.1] backdrop-blur-md rounded">
                      {item.label}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h4 className="font-display text-lg font-bold text-[#FFFFFF] group-hover:text-[#D71920] transition-colors">
                      {item.title}
                    </h4>
                    <p className="font-body text-xs text-[#8E8E93] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="p-2.5 bg-white/[0.02] border border-white/[0.06] rounded font-mono text-[10px] text-[#D71920] truncate">
                    {item.spec}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ── 12. FAQ ACCORDION ── */}
      <FAQSection />

      {/* ── 13. STUDIO DIRECT / CONSULTATION ASSESSMENT ── */}
      <section id="assessment-section" className="py-20 md:py-32 bg-[#0A0B0D] border-b border-white/[0.08] relative">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Left Info Column */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-6 sm:space-y-8"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-widest text-[#D71920]">
                  <span className="w-8 h-[2px] bg-[#D71920]"></span>
                  <span>DIRECT CONSULTATION</span>
                </div>
                
                <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#FFFFFF] leading-tight uppercase tracking-tight">
                  READY FOR A<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D71920] to-[#FF4D4D]">
                    BETTER FINISH?
                  </span>
                </h2>
                
                <p className="font-body text-sm text-[#8E8E93] leading-relaxed font-normal">
                  Complete our 5-step vehicle assessment. Our master technicians will evaluate your clear coat thickness, swirl severity, and recommend tailored protection protocols within 90 minutes.
                </p>
              </div>

              {/* Direct Studio Coordinates */}
              <div className="p-6 bg-[#121316] border border-white/[0.08] rounded-xl space-y-4 shadow-xl">
                <div>
                  <span className="font-mono text-[10px] tracking-wider uppercase text-[#636366] block mb-1">DIRECT DESK</span>
                  <a href={`tel:${studioCompany.phones.primary}`} className="font-display text-2xl font-bold text-[#FFFFFF] hover:text-[#D71920] transition-colors flex items-center gap-2">
                    <Phone size={20} className="text-[#D71920]" />
                    {studioCompany.phones.primary}
                  </a>
                </div>

                <div className="border-t border-white/[0.06] pt-3 text-xs text-[#8E8E93] flex items-start gap-2">
                  <MapPin size={16} className="text-[#636366] flex-shrink-0 mt-0.5" />
                  <span>{studioCompany.address}</span>
                </div>

                <div className="border-t border-white/[0.06] pt-3 text-xs text-[#AEAEB2] flex items-center gap-2">
                  <Clock size={16} className="text-[#636366]" />
                  <span>{studioCompany.hours}</span>
                </div>
              </div>
            </motion.div>

            {/* Right Interactive Form Column */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <MultiStepAssessment />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 14. FINAL BOOKING CTA ── */}
      <section className="py-20 md:py-28 bg-[#050505] relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-[#D71920]/10 via-transparent to-transparent pointer-events-none"></div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container relative z-10 text-center max-w-4xl mx-auto space-y-6 sm:space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08]">
            <Sparkles size={14} className="text-[#D71920]" />
            <span className="font-mono text-[10px] sm:text-xs tracking-widest uppercase text-[#F5F5F7]">
              EXECUTIVE ATELIER SCHEDULING
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#FFFFFF] leading-[1.08]">
            YOUR CAR DESERVES MORE<br />
            <span className="text-[#D71920]">THAN A QUICK WASH.</span>
          </h2>

          <p className="font-body text-sm sm:text-base lg:text-lg text-[#AEAEB2] max-w-2xl mx-auto leading-relaxed">
            Reserve your studio appointment today. Experience mirror reflection paint correction, permanent 9H+ SiO₂ ceramic coatings, and stealth self-healing PPF.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link 
              to="/contact" 
              className="btn-red w-full sm:w-auto py-4 px-10 text-sm group"
            >
              <span>Schedule Atelier Assessment</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <a 
              href={`https://wa.me/${studioCompany.phones.primary.replace(/[^0-9]/g, '')}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-ghost-dark w-full sm:w-auto py-4 px-10 text-sm"
            >
              <span>Direct WhatsApp Consult</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="pt-6 text-xs font-mono text-[#636366]">
            {studioCompany.promise}
          </div>

        </motion.div>
      </section>

      {/* ── 15. FOOTER (Footer.jsx) ── */}

    </div>
  );
}
