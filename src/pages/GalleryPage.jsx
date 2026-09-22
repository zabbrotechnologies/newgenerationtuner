import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { studioGallery } from '../data/index.js';

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Commissions" },
    { id: "PPF & Ceramic", label: "PPF & Ceramic" },
    { id: "Paint Correction", label: "Paint Correction" },
    { id: "Custom Armour", label: "Custom Armour" },
    { id: "PPF & Performance", label: "PPF & Performance" }
  ];

  const filteredItems = activeFilter === "all" 
    ? studioGallery 
    : studioGallery.filter(item => item.category === activeFilter);

  return (
    <div className="py-24 md:py-32 bg-[#000000] text-[#FAFAFA]">
      <div className="container space-y-16">
        
        {/* Header */}
        <div className="max-w-2xl space-y-4">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#E10600] font-bold">
            <span className="w-8 h-[2px] bg-[#E10600]"></span>
            <span>PORTFOLIO / SELECTED WORK</span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl text-[#FFFFFF] font-bold uppercase tracking-tight">
            SELECTED WORK.
          </h1>
          <p className="text-sm text-[#8D9398] leading-relaxed">
            Every vehicle in our studio is treated as an individual commission. Explore recent paint restorations, ceramic applications, and custom PPF wraps.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2 pb-6 border-b border-[rgba(255,255,255,0.12)]">
          {filters.map(f => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`font-mono text-[10px] tracking-widest uppercase px-5 py-2.5 border transition-all cursor-pointer ${
                activeFilter === f.id
                  ? 'border-[#E10600] text-white bg-[#E10600] font-bold'
                  : 'border-[rgba(255,255,255,0.12)] text-[#8D9398] hover:border-[rgba(255,255,255,0.3)] hover:text-[#FFFFFF]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Editorial Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map(proj => (
            <div key={proj.id} className="bg-[#080808] border border-[rgba(255,255,255,0.12)] group overflow-hidden">
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  className="w-full h-full object-cover filter brightness-[0.75] contrast-110 group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 font-mono text-[9px] tracking-widest uppercase bg-[#000000]/95 border border-[rgba(255,255,255,0.12)] px-3 py-1 text-[#E10600] font-bold">
                  {proj.category}
                </span>
              </div>

              <div className="p-8 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-[#FFFFFF] group-hover:text-[#E10600] transition-colors">
                      {proj.title}
                    </h3>
                    <div className="font-mono text-xs text-[#8D9398] mt-1">
                      {proj.service}
                    </div>
                  </div>
                </div>

                <p className="text-xs text-[#8D9398] leading-relaxed">
                  {proj.description}
                </p>

                <div className="pt-4 border-t border-[rgba(255,255,255,0.08)] flex flex-wrap gap-2">
                  {proj.metrics.map((m, i) => (
                    <span key={i} className="font-mono text-[10px] text-[#8D9398] bg-[#000000] px-2.5 py-1 border border-[rgba(255,255,255,0.06)]">
                      ✓ {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="pt-12 text-center">
          <Link to="/contact" className="btn-red">
            Book Your Vehicle Commission ↗
          </Link>
        </div>

      </div>
    </div>
  );
}
