import React from 'react';
import { Link } from 'react-router-dom';
import { Star, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { REVIEWS } from '../data/index.js';

export default function ReviewsPage() {
  return (
    <div className="py-24 md:py-32 bg-[#101214] text-[#F2F1ED]">
      <div className="container space-y-16">
        
        {/* Header */}
        <div className="max-w-2xl space-y-4">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#D71920] font-bold">
            <span className="w-8 h-[2px] bg-[#D71920]"></span>
            <span>VERIFIED REPUTATION</span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl text-[#FFFFFF] font-bold uppercase tracking-tight">
            CLIENT FEEDBACK.
          </h1>
          <p className="text-sm text-[#8D9398] leading-relaxed">
            Real feedback from owners who trusted their performance and luxury vehicles to our studio.
          </p>
        </div>

        {/* Editorial Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map(rev => (
            <div key={rev.id} className="bg-[#181B1E] border border-[rgba(255,255,255,0.12)] p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex gap-1 text-[#D71920]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="#D71920" />
                  ))}
                </div>
                <blockquote className="font-display text-lg text-[#FFFFFF] font-medium leading-snug">
                  "{rev.quote}"
                </blockquote>
              </div>

              <div className="pt-4 border-t border-[rgba(255,255,255,0.08)] space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-display text-base font-bold text-[#FFFFFF]">{rev.author}</span>
                  {rev.verified && <CheckCircle2 size={14} className="text-[#D71920]" />}
                </div>
                <div className="font-mono text-xs text-[#D71920] font-bold">{rev.vehicle}</div>
                <div className="font-mono text-[11px] text-[#8D9398]">{rev.discipline}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-[#181B1E] border border-[rgba(255,255,255,0.12)] p-12 text-center space-y-4 max-w-3xl mx-auto">
          <h3 className="font-display text-3xl font-bold uppercase text-[#FFFFFF]">Experience the Standard</h3>
          <p className="text-xs text-[#8D9398] max-w-lg mx-auto">
            Book an ultrasonic paint thickness scan and studio consultation for your automobile.
          </p>
          <Link to="/contact" className="btn-red inline-flex">
            Request Vehicle Assessment ↗
          </Link>
        </div>

      </div>
    </div>
  );
}
