import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Award, Shield, Clock, Wrench } from 'lucide-react';
import { studioCompany } from '../data/index.js';

export default function AboutPage() {
  return (
    <div className="py-24 md:py-32 bg-[#000000] text-[#FAFAFA]">
      <div className="container space-y-24">
        
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] overflow-hidden border border-[rgba(255,255,255,0.12)]">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80" 
                alt="Studio founder & master technician" 
                className="w-full h-full object-cover filter brightness-[0.8] contrast-110"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#E10600] font-bold">
              <span className="w-8 h-[2px] bg-[#E10600]"></span>
              <span>ATELIER HERITAGE &amp; PROCESS</span>
            </div>
            
            <h1 className="font-display text-5xl sm:text-6xl text-[#FFFFFF] font-bold uppercase tracking-tight leading-tight">
              THE MACHINE MOVES.<br />
              <span className="text-[#E10600]">THE EYE DECIDES.</span>
            </h1>

            <p className="text-base text-[#8D9398] leading-relaxed">
              Founded in 2014, New Generation Tuners began with a singular obsession: to elevate automotive preservation from simple cosmetic washing to a precise engineering discipline.
            </p>

            <p className="text-sm text-[#8D9398] leading-relaxed">
              "The right service can make or break your car. Or your schedule. That's why with our portfolio services we ensure that your car gets all the care it needs in 90 minutes flat."
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-[rgba(255,255,255,0.08)] font-mono text-xs text-[#FFFFFF]">
              <div className="bg-[#080808] p-4 border border-[rgba(255,255,255,0.08)]">
                <div className="text-3xl font-display font-bold text-[#E10600] mb-1">10+</div>
                <div className="text-[10px] text-[#8D9398] uppercase tracking-widest">Years Experience</div>
              </div>
              <div className="bg-[#080808] p-4 border border-[rgba(255,255,255,0.08)]">
                <div className="text-3xl font-display font-bold text-[#FFFFFF] mb-1">5,000+</div>
                <div className="text-[10px] text-[#8D9398] uppercase tracking-widest">Automobiles Calibrated</div>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-[rgba(255,255,255,0.12)] pt-16">
          <div className="bg-[#080808] p-8 border border-[rgba(255,255,255,0.12)] space-y-3">
            <Award size={24} className="text-[#E10600]" />
            <h3 className="font-display text-2xl font-bold uppercase text-[#FFFFFF]">Master Technicians</h3>
            <p className="text-xs text-[#8D9398] leading-relaxed">
              Our specialists undergo certified training in rotary compounding, ceramic application chemistry, and plotter-driven PPF wrapping.
            </p>
          </div>

          <div className="bg-[#080808] p-8 border border-[rgba(255,255,255,0.12)] space-y-3">
            <Clock size={24} className="text-[#E10600]" />
            <h3 className="font-display text-2xl font-bold uppercase text-[#FFFFFF]">90-Min Precision Care</h3>
            <p className="text-xs text-[#8D9398] leading-relaxed">
              Strict adherence to estimated delivery schedules. We respect your calendar as meticulously as we preserve your clear coat.
            </p>
          </div>

          <div className="bg-[#080808] p-8 border border-[rgba(255,255,255,0.12)] space-y-3">
            <Shield size={24} className="text-[#E10600]" />
            <h3 className="font-display text-2xl font-bold uppercase text-[#FFFFFF]">Laboratory Grade Tools</h3>
            <p className="text-xs text-[#8D9398] leading-relaxed">
              PosiTector ultrasonic gauges, daylight-spectrum high-CRI inspection arrays, and climate-controlled curing bays.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="pt-8 text-center">
          <Link to="/contact" className="btn-red">
            Schedule a Studio Assessment ↗
          </Link>
        </div>

      </div>
    </div>
  );
}
