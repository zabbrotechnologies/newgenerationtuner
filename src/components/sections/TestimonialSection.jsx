import React from 'react';
import { Star, ShieldCheck, Quote, CheckCircle2 } from 'lucide-react';
import { REVIEWS } from '../../data/index.js';

export default function TestimonialSection() {
  return (
    <section className="py-24 md:py-32 bg-[#0A0B0D] border-b border-white/[0.08] relative overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#D71920]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-8 mb-12 border-b border-white/[0.08]">
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-widest text-[#D71920]">
              <span className="w-2 h-2 rounded-full bg-[#D71920]"></span>
              <span>CLIENT EXPERIENCES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FFFFFF] tracking-tight uppercase">
              PROVEN STUDIO REPUTATION
            </h2>
          </div>
          
          <div className="flex items-center gap-4 text-xs font-mono text-[#8E8E93] bg-[#141417] px-4 py-2 border border-white/[0.06] rounded">
            <div className="flex text-[#D71920]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <span>5.0 / 5.0 VERIFIED ATELIER RATING</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#121316] border border-white/[0.08] hover:border-white/[0.18] transition-all duration-300 p-8 flex flex-col justify-between rounded hover-lift relative group"
            >
              <div className="space-y-6">
                {/* Quote Icon & Stars */}
                <div className="flex justify-between items-center">
                  <div className="flex text-[#D71920] gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <Quote size={20} className="text-white/[0.1] group-hover:text-[#D71920]/40 transition-colors" />
                </div>

                {/* Quote Body */}
                <p className="font-body text-sm text-[#D1D1D6] leading-relaxed italic font-normal">
                  "{rev.quote}"
                </p>
              </div>

              {/* Author & Vehicle Info */}
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

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
