import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const OPTIONS = [
  {
    id: "restore",
    number: "01",
    title: "Restore & Correct Swirl Defects",
    description: "Eliminate wash friction scratches, clear coat oxidation, and water spot etching.",
    recommendation: "Multi-Stage Paint Correction + 5-Year SiO₂ Ceramic Protection",
    detail: "Ideal for vehicles with swirl marks, faded gloss, or light scratches requiring surface rejuvenation and permanent ceramic seal."
  },
  {
    id: "new-car",
    number: "02",
    title: "Protect Brand New Delivery",
    description: "Prevent stone chips, acid etching, and highway gravel wear from Day 1.",
    recommendation: "Full Front Self-Healing PPF + SiO₂ Ceramic Shield",
    detail: "Engineered for brand new or freshly acquired vehicles needing stone chip impact protection on vulnerable panels and hydrophobic gloss on the rest."
  },
  {
    id: "gloss",
    number: "03",
    title: "Maximum Specular Gloss & Beading",
    description: "Intense optical candy reflections and effortless 115° self-cleaning maintenance.",
    recommendation: "Signature Covalent Ceramic Nanocoating + Decontamination",
    detail: "Designed for vehicles with good paint condition that need candy glass reflections, UV blockage, and 110° water beading."
  },
  {
    id: "highway",
    number: "04",
    title: "Highway & Track Day Armour",
    description: "Optically clear self-healing physical barrier across all high-impact zones.",
    recommendation: "Full Body Thermoplastic PPF Wrap (Track Pack)",
    detail: "Extreme protection for highway cruisers and performance cars subjected to high-speed gravel, bug splatter, and track debris."
  },
  {
    id: "cabin",
    number: "05",
    title: "Interior Leather & Alcantara Deep Care",
    description: "Enzyme steam extraction, stain removal, and OEM factory matte hide nourishment.",
    recommendation: "Complete Interior Extraction & Fluoropolymer Leather Shield",
    detail: "Complete cabin rejuvenation including steam carpet extraction, matte leather conditioning, and ozone sanitization."
  },
  {
    id: "maintenance",
    number: "06",
    title: "Preserve Existing Ceramic / PPF",
    description: "Scientific recurring preservation for coated or wrapped performance vehicles.",
    recommendation: "Scheduled Maintenance Protocol & SiO₂ Hydrophobic Boost",
    detail: "Safe hand-wash protocol, chemical decontamination, and SiO₂ gloss topper to maintain warranty compliance."
  }
];

export default function ServiceSelector() {
  const [selectedId, setSelectedId] = useState("restore");
  const activeOption = OPTIONS.find(o => o.id === selectedId) || OPTIONS[0];

  return (
    <div className="bg-[#181B1E] border border-[rgba(255,255,255,0.12)] p-6 sm:p-12">
      <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#D71920] mb-2 font-medium">
        <span className="w-6 h-[2px] bg-[#D71920]"></span>
        <span>INITIAL DIAGNOSTIC SELECTOR</span>
      </div>

      <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#FFFFFF] tracking-tight mb-2 uppercase">
        WHAT DOES YOUR VEHICLE NEED?
      </h2>
      <p className="font-body text-sm text-[#8D9398] max-w-xl font-normal mb-8 leading-relaxed">
        Select your vehicle's primary objective to generate an initial engineered treatment path:
      </p>

      {/* Selectable Options Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
        {OPTIONS.map(opt => {
          const isSelected = opt.id === selectedId;
          return (
            <button
              key={opt.id}
              onClick={() => setSelectedId(opt.id)}
              className={`p-5 text-left border transition-all cursor-pointer ${
                isSelected 
                  ? 'bg-[#101214] border-[#D71920] text-[#FFFFFF]' 
                  : 'bg-[#101214]/60 border-[rgba(255,255,255,0.08)] text-[#8D9398] hover:border-[rgba(255,255,255,0.2)]'
              }`}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-mono text-[11px] text-[#D71920] font-medium">{opt.number}</span>
                {isSelected && <span className="font-mono text-[9px] bg-[#D71920] text-white px-2 py-0.5 font-medium">SELECTED</span>}
              </div>
              <div className="font-display text-lg font-bold mb-1.5 tracking-tight text-[#FFFFFF]">
                {opt.title}
              </div>
              <div className="font-body text-xs text-[#8D9398] leading-relaxed font-normal">
                {opt.description}
              </div>
            </button>
          );
        })}
      </div>

      {/* Recommendation Output */}
      <div className="pt-8 border-t border-[rgba(255,255,255,0.12)] flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div>
          <div className="font-mono text-[10px] tracking-widest uppercase text-[#D71920] mb-1 font-medium">
            ENGINEERED TREATMENT RECOMMENDATION
          </div>
          <div className="font-display text-2xl sm:text-3xl text-[#FFFFFF] font-bold tracking-tight mb-2">
            {activeOption.recommendation}
          </div>
          <p className="font-body text-sm text-[#8D9398] max-w-2xl leading-relaxed font-normal">
            {activeOption.detail}
          </p>
        </div>

        <Link to="/contact" className="btn-red shrink-0">
          Request Diagnostic Assessment ↗
        </Link>
      </div>
    </div>
  );
}
