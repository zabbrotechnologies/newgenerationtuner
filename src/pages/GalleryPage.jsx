import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, CheckCircle2 } from 'lucide-react';
import BeforeAfterSlider from '../components/media/BeforeAfterSlider.jsx';
import { studioGallery, studioCompany } from '../data/index.js';

const FILTERS = [
  { id: 'all',               label: 'All Work' },
  { id: 'Paint Correction',   label: 'Paint Correction' },
  { id: 'PPF & Ceramic',      label: 'Ceramic & PPF' },
  { id: 'Custom Armour',      label: 'Custom Armour & Interior' },
  { id: 'PPF & Performance', label: 'PPF & Performance' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

export default function GalleryPage() {
  const [scrollY, setScrollY] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredItems = activeFilter === 'all'
    ? studioGallery
    : studioGallery.filter(item => item.category === activeFilter);

  return (
    <div className="bg-[#050505] text-[#FAFAFA] selection:bg-[#D71920] selection:text-[#FFFFFF]">

      {/* ── 01. PAGE HERO ── */}
      <section className="relative min-h-[80vh] flex items-center py-24 md:py-32 overflow-hidden bg-[#000000] border-b border-white/[0.08]">
        <div
          className="absolute inset-0 z-0 overflow-hidden"
          style={{ transform: `translateY(${Math.min(scrollY * 0.3, 180)}px)` }}
        >
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=2000&q=85&auto=format&fit=crop"
            alt="Porsche 911 GT finished in studio with mirror reflection"
            className="w-full h-full object-cover brightness-[0.82] contrast-[1.10] scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/75 via-[#000000]/35 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/70 via-transparent to-[#000000]/30" />
        </div>

        <div
          className="container relative z-10"
          style={{ transform: `translateY(${Math.min(-scrollY * 0.1, 0)}px)` }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl space-y-5"
          >
            <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-widest text-[#D71920]">
              <span className="w-8 h-[2px] bg-[#D71920]" />
              <span>PORTFOLIO / SELECTED WORK</span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-[#FFFFFF] leading-[0.95]">
              OUR WORK.
            </h1>
            <p className="font-body text-sm sm:text-base text-[#8E8E93] leading-relaxed max-w-xl">
              Real vehicles. Real transformations. Every commission is treated as an individual craft exercise — not a production line.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#gallery-grid" className="btn-red text-sm py-3 px-6">
                View All Work ↓
              </a>
              <Link to="/contact" className="btn-ghost-dark text-sm py-3 px-6">
                Book Your Detail ↗
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 02. BEFORE / AFTER TRANSFORMATION SLIDER ── */}
      <section className="py-20 md:py-28 bg-[#0A0B0D] border-b border-white/[0.08]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 space-y-2"
          >
            <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-widest text-[#D71920]">
              <span className="w-2 h-2 rounded-full bg-[#D71920]" />
              <span>BEFORE / AFTER</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FFFFFF] tracking-tight uppercase">
              THE TRANSFORMATION.
            </h2>
            <p className="font-body text-sm text-[#8E8E93] leading-relaxed max-w-2xl">
              Click and drag the divider to reveal the undeniable difference surgical paint levelling, ceramic bonding, and precision interior restoration makes.
            </p>
          </motion.div>
          <BeforeAfterSlider />
        </div>
      </section>

      {/* ── 03. FILTERABLE GALLERY ── */}
      <section id="gallery-grid" className="py-20 md:py-28 bg-[#050505]">
        <div className="container">

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-2 mb-10 pb-8 border-b border-white/[0.08]">
            {FILTERS.map(f => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`font-mono text-[10px] tracking-widest uppercase px-5 py-2.5 border transition-all ${
                  activeFilter === f.id
                    ? 'border-[#D71920] text-white bg-[#D71920] font-bold'
                    : 'border-white/[0.12] text-[#8D9398] hover:border-white/[0.3] hover:text-[#FFFFFF]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
            >
              {filteredItems.map(proj => (
                <motion.div
                  key={proj.id}
                  variants={fadeInUp}
                  className="bg-[#0E0E10] border border-white/[0.08] rounded-xl overflow-hidden group hover-lift shadow-xl cursor-pointer hover:border-white/[0.2] transition-all"
                  onClick={() => setSelectedProject(proj)}
                >
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      loading="lazy"
                      className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.1] group-hover:scale-105 group-hover:brightness-[0.9] transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E10] via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 font-mono text-[9px] tracking-widest uppercase bg-[#000000]/90 border border-white/[0.12] px-3 py-1 text-[#D71920] font-bold rounded">
                      {proj.category}
                    </span>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#D71920]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="font-mono text-xs text-white font-semibold bg-[#D71920] px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                        <span>View Details</span>
                        <ArrowUpRight size={13} />
                      </div>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 space-y-3">
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#FFFFFF] group-hover:text-[#D71920] transition-colors">
                        {proj.title}
                      </h3>
                      <div className="font-mono text-xs text-[#D71920] mt-1">{proj.service}</div>
                    </div>
                    <p className="font-body text-xs text-[#8E8E93] leading-relaxed">{proj.description}</p>
                    <div className="pt-3 border-t border-white/[0.06] flex flex-wrap gap-2">
                      {proj.metrics.map((m, i) => (
                        <span key={i} className="font-mono text-[10px] text-[#AEAEB2] bg-white/[0.04] px-2.5 py-1 border border-white/[0.06] rounded">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── 04. BOTTOM CTA ── */}
      <section className="py-20 md:py-24 bg-[#0A0B0D] border-t border-white/[0.08] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(215,25,32,0.07)_0%,transparent_65%)] pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container relative z-10 text-center max-w-3xl mx-auto space-y-6"
        >
          <div className="font-mono text-[11px] uppercase tracking-widest text-[#D71920]">LIKE WHAT YOU SEE?</div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#FFFFFF] leading-tight">
            BOOK YOUR<br />
            <span className="text-[#D71920]">DETAIL.</span>
          </h2>
          <p className="font-body text-sm text-[#AEAEB2] leading-relaxed">
            Let our master technicians create a personalised detailing protocol for your vehicle. Guaranteed 90-minute initial review.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link to="/contact" className="btn-red w-full sm:w-auto py-4 px-10 text-sm group">
              <span>Book Your Appointment</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <a
              href={`https://wa.me/${studioCompany.phones.primary.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-dark w-full sm:w-auto py-4 px-10 text-sm"
            >
              <span>WhatsApp Us</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── PROJECT DETAIL MODAL ── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-[#000000]/90 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#0A0B0D] border border-white/[0.12] rounded-t-2xl sm:rounded-2xl w-full sm:max-w-3xl max-h-[92vh] overflow-y-auto shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              {/* Modal Image */}
              <div className="aspect-[16/9] overflow-hidden relative rounded-t-2xl sm:rounded-t-2xl">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover filter brightness-[0.8] contrast-[1.1]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0D] via-transparent to-transparent" />
                <div className="absolute top-4 left-4 font-mono text-[9px] bg-[#000000]/90 border border-white/[0.12] px-3 py-1 text-[#D71920] uppercase tracking-widest font-bold rounded">
                  {selectedProject.category}
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-9 h-9 bg-[#050505]/90 backdrop-blur-md border border-white/[0.12] rounded-full flex items-center justify-center text-[#FFFFFF] hover:bg-[#D71920] hover:border-[#D71920] transition-all"
                  aria-label="Close project details"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#FFFFFF]">
                    {selectedProject.title}
                  </h2>
                  <div className="font-mono text-sm text-[#D71920] font-medium mt-1.5">{selectedProject.service}</div>
                </div>

                <p className="font-body text-sm text-[#AEAEB2] leading-relaxed">{selectedProject.description}</p>

                <div className="space-y-2">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-[#636366]">RESULTS & METRICS</div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.metrics.map((m, i) => (
                      <div key={i} className="flex items-center gap-1.5 font-mono text-xs text-[#FFFFFF] bg-white/[0.06] border border-white/[0.1] px-3 py-2 rounded-lg">
                        <CheckCircle2 size={12} className="text-[#D71920]" />
                        {m}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/contact"
                    onClick={() => setSelectedProject(null)}
                    className="btn-red flex-1 justify-center py-3 text-sm"
                  >
                    <span>Book Similar Service</span>
                    <ArrowUpRight size={14} />
                  </Link>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="btn-ghost-dark flex-1 justify-center py-3 text-sm"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
