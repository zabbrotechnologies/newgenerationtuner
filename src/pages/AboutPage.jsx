import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Award, Clock, Shield, Gauge, Wrench } from 'lucide-react';
import { studioCompany } from '../data/index.js';

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export default function AboutPage() {
  return (
    <div className="bg-[#000000] text-[#FAFAFA] selection:bg-[#D71920] selection:text-[#FFFFFF]">

      {/* ── 01. HERO ── */}
      <section className="py-24 md:py-32 bg-[#000000] border-b border-white/[0.08] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(215,25,32,0.07)_0%,transparent_65%)] pointer-events-none" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl space-y-6"
          >
            <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-widest text-[#D71920]">
              <span className="w-8 h-[2px] bg-[#D71920]" />
              <span>ATELIER HERITAGE & PROCESS</span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-[#FFFFFF] leading-[0.95]">
              THE MACHINE MOVES.<br />
              <span className="text-[#D71920]">THE EYE DECIDES.</span>
            </h1>
            <p className="font-body text-base sm:text-lg text-[#8E8E93] leading-relaxed max-w-2xl">
              Founded in 2014 in Dindigul, New Generation Tuners began with a singular obsession: to elevate automotive preservation from simple cosmetic washing to a precise engineering discipline.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 02. STORY SECTION ── */}
      <section className="py-20 md:py-28 bg-[#050505] border-b border-white/[0.08]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="lg:col-span-5"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/[0.1] relative group shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80"
                  alt="New Generation Tuner's master technician"
                  loading="lazy"
                  className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.15] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />

                {/* Stats Overlay */}
                <div className="absolute bottom-5 left-5 right-5 grid grid-cols-2 gap-3">
                  <div className="bg-[#050505]/90 backdrop-blur-md border border-white/[0.1] p-4 rounded-xl text-center">
                    <div className="font-display text-3xl font-bold text-[#D71920]">10+</div>
                    <div className="font-mono text-[9px] text-[#8E8E93] uppercase tracking-widest mt-1">Years Experience</div>
                  </div>
                  <div className="bg-[#050505]/90 backdrop-blur-md border border-white/[0.1] p-4 rounded-xl text-center">
                    <div className="font-display text-3xl font-bold text-[#FFFFFF]">5,000+</div>
                    <div className="font-mono text-[9px] text-[#8E8E93] uppercase tracking-widest mt-1">Vehicles Detailed</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="lg:col-span-7 space-y-7"
            >
              <div className="space-y-5">
                <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#FFFFFF]">
                  ABOUT NEW GENERATION TUNER'S
                </h2>
                <div className="space-y-4 font-body text-sm sm:text-base text-[#8E8E93] leading-relaxed">
                  <p>
                    New Generation Tuners was established in 2014 with a clear conviction: every vehicle's paint surface deserves scientific precision, not a generic machine wash. What began as a specialist polishing workshop in Dindigul, Tamil Nadu has grown into the region's most technically rigorous automotive detailing studio.
                  </p>
                  <p>
                    We treat every vehicle panel as a precision optical surface. Our process begins with 0.1-micron ultrasonic clear coat depth measurement, continues through multi-stage machine compounding, and concludes with permanent molecular ceramic bonding or computer-cut self-healing PPF protection.
                  </p>
                  <p className="italic text-[#AEAEB2] border-l-2 border-[#D71920]/50 pl-4">
                    "The right service can make or break your car — or your schedule. That's why we ensure your vehicle receives all the care it needs within a defined timeframe, without compromise."
                  </p>
                </div>
              </div>

              {/* Key Differentiators */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/[0.08]">
                {[
                  { icon: <Gauge size={18} />, title: '0.1μm Precision', desc: 'Ultrasonic non-destructive paint thickness scanning on every panel before compounding.' },
                  { icon: <Clock size={18} />, title: '90-Min Turnaround', desc: 'Strict adherence to estimated delivery schedules on dedicated maintenance tiers.' },
                  { icon: <Wrench size={18} />, title: 'Lab-Grade Equipment', desc: 'Rupes BigFoot dual-action, Flex rotary, PosiTector gauges, and IR curing stations.' },
                  { icon: <Shield size={18} />, title: 'Permanent Protection', desc: '9H+ SiO₂ ceramic coatings and self-healing PPF with up to 10-year manufacturer warranty.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="w-9 h-9 rounded-full bg-[#D71920]/10 border border-[#D71920]/20 flex items-center justify-center flex-shrink-0 text-[#D71920]">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-display text-sm font-bold text-[#FFFFFF]">{item.title}</div>
                      <p className="font-body text-xs text-[#8E8E93] leading-relaxed mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 03. STUDIO PILLARS ── */}
      <section className="py-20 md:py-28 bg-[#0A0B0D] border-b border-white/[0.08]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center space-y-3"
          >
            <div className="inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-widest text-[#D71920]">
              <span className="w-6 h-[1px] bg-[#D71920]" />
              <span>OUR PHILOSOPHY</span>
              <span className="w-6 h-[1px] bg-[#D71920]" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#FFFFFF]">
              HOW WE WORK.
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: <Award size={22} />,
                title: 'Master Technicians',
                desc: 'Our specialists undergo training in rotary compounding chemistry, ceramic application physics, and computer-aided PPF wrapping techniques. We continuously test new chemistry formulations and machine parameters.',
              },
              {
                icon: <Clock size={22} />,
                title: 'Time-Respected Care',
                desc: 'Every vehicle booking receives a realistic time commitment — and we honour it. We respect your calendar as meticulously as we preserve your clear coat. Dedicated 90-minute fast-turnaround tiers available for maintenance appointments.',
              },
              {
                icon: <Shield size={22} />,
                title: 'Precision Environment',
                desc: 'Climate-controlled, humidity-regulated detailing bays eliminate dust contamination during ceramic coating application. Short-wave infrared curing stations ensure maximum molecular cross-linking bond strength in every coating.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-[#0E0E10] border border-white/[0.08] p-8 rounded-xl space-y-4 hover:border-white/[0.2] transition-all duration-300 shadow-lg"
              >
                <div className="w-12 h-12 rounded-full bg-[#D71920]/10 border border-[#D71920]/20 flex items-center justify-center text-[#D71920]">
                  {item.icon}
                </div>
                <h3 className="font-display text-xl font-bold uppercase text-[#FFFFFF]">{item.title}</h3>
                <p className="font-body text-xs text-[#8E8E93] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 04. STUDIO INFO ── */}
      <section className="py-20 md:py-24 bg-[#050505] border-b border-white/[0.08]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="space-y-5"
            >
              <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-widest text-[#D71920]">
                <span className="w-8 h-[2px] bg-[#D71920]" />
                <span>FIND US</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#FFFFFF]">
                DINDIGUL ATELIER.
              </h2>
              <div className="space-y-4 text-sm font-body text-[#8E8E93]">
                <div className="p-5 bg-[#0E0E10] border border-white/[0.08] rounded-xl space-y-3">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#636366] block mb-1">STUDIO ADDRESS</span>
                    <p className="text-[#FFFFFF] leading-relaxed">{studioCompany.address}</p>
                  </div>
                  <div className="border-t border-white/[0.06] pt-3">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#636366] block mb-1">OPERATING HOURS</span>
                    <p className="text-[#FFFFFF]">{studioCompany.hours}</p>
                  </div>
                  <div className="border-t border-white/[0.06] pt-3">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#636366] block mb-1">PRIMARY HOTLINE</span>
                    <a href={`tel:${studioCompany.phones.primary}`} className="font-display text-xl font-bold text-[#FFFFFF] hover:text-[#D71920] transition-colors">
                      {studioCompany.phones.primary}
                    </a>
                  </div>
                  <div className="border-t border-white/[0.06] pt-3">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#636366] block mb-1">EMAIL</span>
                    <a href={`mailto:${studioCompany.email}`} className="text-[#FFFFFF] hover:text-[#D71920] transition-colors">
                      {studioCompany.email}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="aspect-square rounded-2xl overflow-hidden border border-white/[0.1] bg-[#0A0B0D] flex items-center justify-center"
            >
              {/* Map embed placeholder — Google Maps embed of Dindigul */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.0!2d77.9747!3d10.3673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDIyJzAyLjMiTiA3N8KwNTgnMjkuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(1) invert(0.85) contrast(1.1)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="New Generation Tuner's Studio Location — Dindigul, Tamil Nadu"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 05. FINAL CTA ── */}
      <section className="py-20 md:py-24 bg-[#000000]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container text-center max-w-3xl mx-auto space-y-6"
        >
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#FFFFFF]">
            READY TO EXPERIENCE<br />
            <span className="text-[#D71920]">THE DIFFERENCE?</span>
          </h2>
          <p className="font-body text-sm text-[#AEAEB2] leading-relaxed">
            Schedule a studio assessment. Our master technicians will evaluate your vehicle and recommend a tailored detailing protocol.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link to="/contact" className="btn-red w-full sm:w-auto py-4 px-10 text-sm group">
              <span>Schedule an Assessment</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link to="/services" className="btn-ghost-dark w-full sm:w-auto py-4 px-10 text-sm">
              <span>View Our Services</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
