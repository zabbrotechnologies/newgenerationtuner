import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { REVIEWS } from '../../data/index.js';

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
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

export default function TestimonialSection() {
  return (
    <section className="py-20 md:py-32 bg-[#0A0B0D] border-b border-white/[0.08] relative overflow-hidden">
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#D71920]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-8 mb-12 border-b border-white/[0.08]"
        >
          <div className="space-y-2.5">
            <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-widest text-[#D71920]">
              <span className="w-2 h-2 rounded-full bg-[#D71920]"></span>
              <span>CLIENT EXPERIENCES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FFFFFF] tracking-tight uppercase">
              PROVEN STUDIO REPUTATION
            </h2>
          </div>
          
          <div className="flex items-center gap-4 text-xs font-mono text-[#8E8E93] bg-[#141417] px-4 py-2 border border-white/[0.06] rounded-lg">
            <div className="flex text-[#D71920]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <span>5.0 / 5.0 VERIFIED ATELIER RATING</span>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {REVIEWS.map((rev) => (
            <motion.div
              key={rev.id}
              variants={fadeInUp}
              className="bg-[#121316] border border-white/[0.08] hover:border-white/[0.2] transition-all duration-300 p-7 sm:p-8 flex flex-col justify-between rounded-xl hover-lift relative group shadow-xl"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div className="flex text-[#D71920] gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <Quote size={20} className="text-white/[0.1] group-hover:text-[#D71920]/40 transition-colors" />
                </div>

                <p className="font-body text-sm text-[#D1D1D6] leading-relaxed italic font-normal">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.06] space-y-2">
                <div className="flex items-center justify-between">
                  <div className="font-display text-base font-bold text-[#FFFFFF]">
                    {rev.author}
                  </div>
                  {rev.verified && (
                    <span className="flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider text-[#34C759] bg-[#34C759]/10 px-2 py-0.5 rounded-full border border-[#34C759]/20">
                      <CheckCircle2 size={10} />
                      Verified
                    </span>
                  )}
                </div>

                <div className="font-mono text-xs text-[#D71920] font-medium">
                  {rev.vehicle}
                </div>

                <div className="font-body text-[11px] text-[#8E8E93]">
                  {rev.discipline}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
