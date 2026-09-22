import React from 'react';
import AssessmentForm from '../components/forms/AssessmentForm.jsx';
import { studioCompany } from '../data/index.js';

export default function ContactPage() {
  return (
    <div className="py-24 md:py-32 bg-[#000000] text-[#FAFAFA]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Direct Studio Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#E10600] font-medium">
                <span className="w-8 h-[2px] bg-[#E10600]"></span>
                <span>DIRECT ATELIER DESK</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#FFFFFF] font-bold uppercase tracking-tight leading-tight">
                LET'S TALK ABOUT YOUR VEHICLE.
              </h1>
              <p className="font-body text-sm text-[#8D9398] leading-relaxed font-normal">
                Connect directly with our master technicians in Dindigul for paint analysis, ceramic quotes, or bespoke PPF wrapping consultations.
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t border-[rgba(255,255,255,0.08)]">
              <div>
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#8D9398] block mb-1 font-medium">PRIMARY HOTLINE</span>
                <a href={`tel:${studioCompany.phones.primary}`} className="font-display text-3xl sm:text-4xl font-bold text-[#FFFFFF] hover:text-[#E10600] transition-colors tracking-tight">
                  {studioCompany.phones.primary}
                </a>
              </div>

              <div>
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#8D9398] block mb-1.5 font-medium">TECHNICAL DIRECT LINES</span>
                <div className="font-body text-sm text-[#FFFFFF] space-y-1 font-medium">
                  <div><a href={`tel:${studioCompany.phones.direct}`} className="hover:text-[#E10600] transition-colors">{studioCompany.phones.direct}</a></div>
                  <div><a href={`tel:${studioCompany.phones.support}`} className="hover:text-[#E10600] transition-colors">{studioCompany.phones.support}</a></div>
                </div>
              </div>

              <div>
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#8D9398] block mb-1 font-medium">STUDIO LOCATION</span>
                <div className="font-body text-sm text-[#8D9398] leading-relaxed font-normal">
                  {studioCompany.address}
                </div>
              </div>

              <div>
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#8D9398] block mb-1 font-medium">OPERATING HOURS</span>
                <div className="font-body text-sm text-[#FFFFFF] font-medium">
                  {studioCompany.hours}
                </div>
              </div>

              <div>
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#8D9398] block mb-1 font-medium">EMAIL TRANSMISSION</span>
                <a href={`mailto:${studioCompany.email}`} className="font-body text-sm text-[#FFFFFF] hover:text-[#E10600] transition-colors font-semibold">
                  {studioCompany.email}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Production Assessment Form */}
          <div className="lg:col-span-7">
            <AssessmentForm />
          </div>

        </div>
      </div>
    </div>
  );
}
