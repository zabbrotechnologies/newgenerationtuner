import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';
import MultiStepAssessment from '../components/forms/MultiStepAssessment.jsx';
import { studioCompany } from '../data/index.js';

const FAQ_ITEMS = [
  {
    q: 'How long does a full paint correction take?',
    a: 'A single-stage correction on a mid-size sedan typically takes 6–8 hours. A multi-stage correction (removing 70–90% of swirl marks and deeper defects) can take 1–2 full working days depending on panel condition and vehicle size. We never rush to meet a deadline at the expense of the finish quality.',
  },
  {
    q: 'How long does ceramic coating last?',
    a: 'Entry-level SiO₂ coatings typically last 1–2 years. Our professional-grade 9H+ multi-layer systems are rated for 3–5 years with proper maintenance wash protocol. Premium formulations with manufacturer warranty can extend protection to 7+ years with annual inspections.',
  },
  {
    q: 'Can I drive my car immediately after ceramic coating?',
    a: 'No. After application, the coating requires a minimum 12–24 hour cure window in our climate-controlled bay before light exposure to weather. Full hydrophobic behaviour develops over 7 days, during which high-pressure washing should be avoided.',
  },
  {
    q: 'Does PPF affect paint colour or gloss?',
    a: 'High-clarity optical-grade PPF has near-zero visual impact on gloss or colour — the film is optically transparent. We also offer satin/stealth PPF that converts high-gloss paintwork to a premium factory-satin appearance without respraying.',
  },
  {
    q: 'Do I need to prepare my car before dropping it off?',
    a: 'No pre-washing is required. We prefer to perform an initial deionized rinse ourselves to assess the contamination level before inspection. Removing personal valuables and any non-factory accessories is appreciated.',
  },
  {
    q: 'Do you offer mobile detailing or only studio work?',
    a: 'All precision detailing, paint correction, and ceramic/PPF installation work is performed exclusively in our climate-controlled studio in Dindigul. Mobile services are not offered as environmental contamination risk is unacceptable during coating curing.',
  },
  {
    q: 'Is paint correction safe for all paint types?',
    a: 'Paint correction is safe on all factory clear coats with sufficient film thickness (typically 80μm+). We always perform a pre-measurement scan to verify safe compounding depth. We do not correct painted surfaces with insufficient clear coat, respray work, or wrap films.',
  },
  {
    q: 'What is your booking and payment process?',
    a: 'Submit a consultation request using the form on this page. Our team will contact you within 24 hours to schedule a studio assessment appointment. A 30% advance deposit is required to confirm your booking date. Balance is settled upon vehicle collection.',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

function FAQItem({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/[0.08] hover:border-white/[0.16] rounded-xl overflow-hidden transition-colors">
      <button
        className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D71920]"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-display text-sm sm:text-base font-semibold text-[#FFFFFF] group-hover:text-[#D71920] transition-colors leading-snug">
          {item.q}
        </span>
        <div className={`w-7 h-7 rounded-full border transition-all flex-shrink-0 flex items-center justify-center ${
          open ? 'bg-[#D71920] border-[#D71920] text-white' : 'border-white/[0.2] text-[#8E8E93]'
        }`}>
          {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 pb-5 font-body text-sm text-[#8E8E93] leading-relaxed border-t border-white/[0.06] pt-4">
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="bg-[#000000] text-[#FAFAFA] selection:bg-[#D71920] selection:text-[#FFFFFF]">

      {/* ── 01. PAGE HERO ── */}
      <section className="py-24 md:py-32 bg-[#000000] border-b border-white/[0.08] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(215,25,32,0.07)_0%,transparent_60%)] pointer-events-none" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl space-y-5"
          >
            <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-widest text-[#D71920]">
              <span className="w-8 h-[2px] bg-[#D71920]" />
              <span>BOOKING & CONSULTATION</span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-[#FFFFFF] leading-[0.95]">
              BOOK YOUR<br />
              <span className="text-[#D71920]">APPOINTMENT.</span>
            </h1>
            <p className="font-body text-sm sm:text-base text-[#8E8E93] leading-relaxed max-w-xl">
              Tell us about your vehicle and goals. Our technicians will reach out within 24 hours to build your tailored detailing protocol.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 02. BOOKING FORM + STUDIO DETAILS ── */}
      <section className="py-20 md:py-28 bg-[#050505] border-b border-white/[0.08]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">

            {/* Studio Details */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="lg:col-span-5 space-y-7"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-widest text-[#D71920]">
                  <span className="w-8 h-[2px] bg-[#D71920]" />
                  <span>STUDIO CONTACT</span>
                </div>
                <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-[#FFFFFF]">
                  GET IN TOUCH.
                </h2>
              </div>

              <div className="space-y-4">
                {/* Phone */}
                <a
                  href={`tel:${studioCompany.phones.primary}`}
                  className="flex items-center gap-4 p-5 bg-[#0E0E10] border border-white/[0.08] hover:border-white/[0.2] rounded-xl transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#D71920]/10 border border-[#D71920]/20 flex items-center justify-center text-[#D71920] flex-shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-[#636366]">STUDIO HOTLINE</div>
                    <div className="font-display text-lg sm:text-xl font-bold text-[#FFFFFF] group-hover:text-[#D71920] transition-colors">
                      {studioCompany.phones.primary}
                    </div>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${studioCompany.phones.primary.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-[#0E0E10] border border-[#25D366]/20 hover:border-[#25D366]/50 rounded-xl transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.49" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-[#636366]">WHATSAPP</div>
                    <div className="font-display text-base font-bold text-[#25D366]">
                      Chat with Studio ↗
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${studioCompany.email}`}
                  className="flex items-center gap-4 p-5 bg-[#0E0E10] border border-white/[0.08] hover:border-white/[0.2] rounded-xl transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#D71920]/10 border border-[#D71920]/20 flex items-center justify-center text-[#D71920] flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-[#636366]">EMAIL</div>
                    <div className="font-body text-sm text-[#FFFFFF] group-hover:text-[#D71920] transition-colors font-medium">
                      {studioCompany.email}
                    </div>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4 p-5 bg-[#0E0E10] border border-white/[0.08] rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-[#D71920]/10 border border-[#D71920]/20 flex items-center justify-center text-[#D71920] flex-shrink-0 mt-0.5">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-[#636366]">STUDIO ADDRESS</div>
                    <p className="font-body text-sm text-[#FFFFFF] mt-0.5 leading-relaxed">{studioCompany.address}</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 p-5 bg-[#0E0E10] border border-white/[0.08] rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-[#D71920]/10 border border-[#D71920]/20 flex items-center justify-center text-[#D71920] flex-shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-[#636366]">STUDIO HOURS</div>
                    <p className="font-body text-sm text-[#FFFFFF] mt-0.5">{studioCompany.hours}</p>
                    <p className="font-body text-xs text-[#8E8E93] mt-1">By appointment preferred · Walk-ins welcome</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="lg:col-span-7"
            >
              <MultiStepAssessment />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 03. FAQ ── */}
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
              <span className="w-8 h-[2px] bg-[#D71920]" />
              <span>FREQUENTLY ASKED</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#FFFFFF]">
              COMMON QUESTIONS.
            </h2>
            <p className="font-body text-sm text-[#8E8E93] max-w-xl">
              Everything you need to know before booking your first appointment.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.07 } } }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-4"
          >
            {FAQ_ITEMS.map((item, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <FAQItem item={item} />
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-10 text-center">
            <p className="font-body text-sm text-[#8E8E93] mb-4">Still have questions? Contact us directly.</p>
            <a
              href={`tel:${studioCompany.phones.primary}`}
              className="btn-red inline-flex py-3.5 px-8 text-sm group"
            >
              <Phone size={15} />
              <span>Call the Studio</span>
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
