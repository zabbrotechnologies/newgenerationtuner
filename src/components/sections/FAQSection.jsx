import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Shield, Sparkles } from 'lucide-react';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "What is the difference between a car wash and automotive detailing?",
      a: "A regular car wash only removes superficial dirt from the exterior using automated brushes or abrasive towels, which frequently causes swirl marks and clear coat scratches. Professional automotive detailing is a meticulous, multi-stage restorative process involving chemical decontamination, ultrasonic clear coat depth analysis, rotary/orbital paint defect leveling, and long-term molecular protection (ceramic coating or PPF)."
    },
    {
      q: "What does paint correction actually do?",
      a: "Paint correction is the mechanical leveling of your vehicle's clear coat down to the depth of microscopic scratches, swirl marks, etching, and buffer trails. Using precision dual-action polishers with diminishing micro-abrasives, we eliminate 85% to 98% of clear coat imperfections to reveal deep, specular, mirror-like gloss."
    },
    {
      q: "How long does a 9H+ SiO₂ ceramic coating last?",
      a: "Unlike traditional carnauba waxes that degrade within weeks, our inorganic Silicon Dioxide (SiO₂) and Titanium Dioxide (TiO₂) coatings form permanent covalent bonds with your factory clear coat. Depending on the tier selected, our coatings provide 3-year, 5-year, or multi-year protection against UV rays, acid rain, bird droppings, and chemical fallout."
    },
    {
      q: "What is Paint Protection Film (PPF) and does it self-heal?",
      a: "Paint Protection Film (PPF) is an optical-grade thermoplastic polyurethane (TPU) layer applied directly to high-impact panels (bumpers, bonnet, wings, mirrors) or full bodies. It absorbs physical impacts from road gravel and stone chips. Minor wash scratches and swirl marks disappear automatically when exposed to ambient heat or warm water."
    },
    {
      q: "How long does a full detailing service take at the studio?",
      a: "Because each panel is meticulously treated, paint correction and ceramic coating packages typically require 1 to 3 full studio days. For routine maintenance or diagnostics, we offer expedited 90-minute fast turnaround care on dedicated appointments."
    },
    {
      q: "How should I care for my vehicle after ceramic coating or PPF installation?",
      a: "We recommend periodic maintenance washes using pH-neutral lubricating snow foam, twin-bucket grit guard hand washing, and deionized water. Avoid abrasive automated tunnel car washes. We also offer scheduled maintenance protocols to maintain your coating's hydrophobic performance."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#050505] border-b border-white/[0.08] relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-[#D71920]">
            <HelpCircle size={14} />
            <span>CLARITY &amp; PROTOCOLS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FFFFFF] tracking-tight uppercase">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="font-body text-sm sm:text-base text-[#8E8E93] leading-relaxed font-normal">
            Everything you need to know about our automotive detailing methodology, paint correction science, and surface protection warranties.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className="bg-[#0E0E10] border border-white/[0.08] rounded transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full p-5 sm:p-6 text-left flex justify-between items-center gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D71920]"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base sm:text-lg font-semibold text-[#FFFFFF] tracking-tight">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#D71920] border-[#D71920] text-white' : 'text-[#8E8E93]'}`}>
                    <ChevronDown size={16} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm font-body text-[#AEAEB2] leading-relaxed border-t border-white/[0.04]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="max-w-3xl mx-auto mt-10 p-6 bg-[#141417] border border-white/[0.08] rounded flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display text-base font-semibold text-[#FFFFFF]">Have specific questions about your vehicle's paint?</h4>
            <p className="text-xs text-[#8E8E93]">Talk directly with our studio technicians for a panel thickness audit.</p>
          </div>
          <a href="#assessment-section" className="btn-red text-xs py-2.5 px-6 whitespace-nowrap">
            Ask Our Atelier
          </a>
        </div>

      </div>
    </section>
  );
}
