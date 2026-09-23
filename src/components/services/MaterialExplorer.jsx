import React, { useState } from 'react';
import { Layers, Shield, Car, Wrench, Sparkles, CheckCircle2, ChevronRight, ArrowRight } from 'lucide-react';

export default function MaterialExplorer() {
  const [selectedMaterial, setSelectedMaterial] = useState('paint');

  const materials = [
    {
      id: 'paint',
      number: '01',
      title: 'FACTORY CLEAR COAT',
      subtitle: '35–50µm Polyurethane Resin Matrix',
      description: 'The outermost defensive layer of automotive bodywork. Clear coats protect color pigment from UV oxidation but are easily marred by mechanical wash friction, forming swirl scratches.',
      specs: [
        { label: 'Layer Depth', value: '45 µm avg' },
        { label: 'Hardness', value: '2H – 4H Pencil Scale' },
        { label: 'Refractive Index', value: '1.49 – 1.52' }
      ],
      media: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200&q=80&auto=format&fit=crop',
      treatment: 'Multi-stage rotary optical compounding & micro-finishing jewelling'
    },
    {
      id: 'ceramic',
      number: '02',
      title: 'SiO₂ NANOCERAMIC',
      subtitle: 'Covalent Molecular Barrier (9H+ Hardness)',
      description: 'Liquid silicon dioxide crosslinks into microscopic clear coat pores, curing to an ultra-hard, glass-like quartz layer resistant to acid etching, road salts, and UV degradation.',
      specs: [
        { label: 'Cured Hardness', value: '9H+ Certified' },
        { label: 'Contact Angle', value: '115° Superhydrophobic' },
        { label: 'Durability', value: '3 to 5 Years Matrix' }
      ],
      media: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=1200&q=80&auto=format&fit=crop',
      treatment: 'Twin-layer crosslinked quartz application in temperature-controlled curing bay'
    },
    {
      id: 'film',
      number: '03',
      title: 'THERMOPLASTIC PPF',
      subtitle: '8.0 Mil Self-Healing Polyurethane Film',
      description: 'Optically clear elastomeric polyurethane designed to absorb high-velocity gravel impacts. Micro-scratches disappear automatically under engine bay or solar heat (self-healing memory).',
      specs: [
        { label: 'Film Thickness', value: '8.0 mil (200 µm)' },
        { label: 'Self-Healing Temp', value: '> 40°C / 104°F' },
        { label: 'Clarity', value: 'Zero Orange Peel Optical Film' }
      ],
      media: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80&auto=format&fit=crop',
      treatment: 'Computer-plotted precision edge-wrapped digital pattern installation'
    },
    {
      id: 'leather',
      number: '04',
      title: 'SEMI-ANILINE LEATHER',
      subtitle: 'Breathable Natural Hide & Alcantara',
      description: 'Natural automotive leather requires pH-neutral enzyme cleaning to lift body oils and sunscreen residue without drying the natural moisture barrier or clogging ventilated perforations.',
      specs: [
        { label: 'Treatment pH', value: '7.0 Neutral Balanced' },
        { label: 'Protection Type', value: 'Fluoropolymer Matte Barrier' },
        { label: 'Finish', value: 'OEM Factory Matte (Zero Shine)' }
      ],
      media: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=1200&q=80&auto=format&fit=crop',
      treatment: 'Steam sanitization, horsehair agitation, and ceramic leather encapsulation'
    },
    {
      id: 'carbon',
      number: '05',
      title: 'CARBON COMPOSITE',
      subtitle: 'Resin-Infused Structural Weave',
      description: 'Exposed carbon fiber splitters, diffusers, and mirrors require specialized low-heat polishers to prevent resin blistering while restoring deep 3D optical weave depth.',
      specs: [
        { label: 'Polishing Thermal Cap', value: '< 45°C Controlled' },
        { label: 'UV Resistance', value: 'Class A Resin Sealer' },
        { label: 'Finish', value: 'Specular Gloss Weave' }
      ],
      media: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=1200&q=80&auto=format&fit=crop',
      treatment: 'Precision pneumatic mini-polisher levelling and quartz sealant'
    }
  ];

  const current = materials.find((m) => m.id === selectedMaterial) || materials[0];

  return (
    <div className="w-full space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-6 border-b border-[rgba(255,255,255,0.12)]">
        <div>
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#E10600] mb-2 font-bold">
            <span className="w-6 h-[2px] bg-[#E10600]"></span>
            <span>SUBSTRATE ENGINEERING &amp; MATERIALS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFFFFF] tracking-tight">
            THE MATERIALS MATTER.
          </h2>
          <p className="text-xs md:text-sm text-[#8D9398] max-w-xl mt-2 font-normal">
            Every vehicle surface possesses distinct chemical composition, thermal tolerance, and physical hardness. Select a material substrate to inspect our scientific restoration protocol.
          </p>
        </div>
      </div>

      {/* Horizontal Material Selection Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 border-b border-[rgba(255,255,255,0.12)] pb-4">
        {materials.map((mat) => (
          <button
            key={mat.id}
            onClick={() => setSelectedMaterial(mat.id)}
            className={`text-left p-4 transition-all border ${
              selectedMaterial === mat.id
                ? 'bg-[#080808] border-[#E10600] text-[#FFFFFF]'
                : 'bg-[#000000] border-[rgba(255,255,255,0.08)] text-[#8D9398] hover:border-[rgba(255,255,255,0.2)]'
            }`}
          >
            <div className="font-mono text-[10px] text-[#8D9398]">{mat.number}</div>
            <div className="font-display text-base font-bold mt-1 tracking-tight">{mat.title}</div>
          </button>
        ))}
      </div>

      {/* Active Material Showcase Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#080808] border border-[rgba(255,255,255,0.12)] p-6 md:p-10">
        
        {/* Left Macro Media (col-span-6) */}
        <div className="lg:col-span-6 relative aspect-[4/3] overflow-hidden border border-[rgba(255,255,255,0.12)] bg-[#000000]">
          <div className="absolute inset-0 skeleton-shimmer"></div>
          <img
            src={current.media}
            alt={current.title}
            loading="lazy"
            onLoad={(e) => e.currentTarget.classList.remove('opacity-0')}
            className="w-full h-full object-cover filter brightness-[0.8] contrast-[1.15] opacity-0 transition-opacity duration-500 relative z-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent z-10 pointer-events-none"></div>
          
          <div className="absolute bottom-4 left-4 right-4 bg-[#000000]/95 p-4 border border-[rgba(255,255,255,0.12)] z-20">
            <div className="font-mono text-[9px] text-[#E10600] uppercase tracking-widest font-bold">
              ATELIER PROTOCOL
            </div>
            <div className="font-display text-sm md:text-base font-bold text-[#FFFFFF] mt-1">
              {current.treatment}
            </div>
          </div>
        </div>

        {/* Right Information & Telemetry (col-span-6) */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-[10px] text-[#E10600] uppercase tracking-widest font-bold">
              <span>{current.number} · SUBSTRATE ARCHITECTURE</span>
            </div>

            <h3 className="font-display text-3xl md:text-4xl text-[#FFFFFF] font-bold tracking-tight">
              {current.title}
            </h3>

            <div className="font-mono text-xs text-[#8D9398] uppercase tracking-wider">
              {current.subtitle}
            </div>

            <p className="text-sm text-[#8D9398] leading-relaxed">
              {current.description}
            </p>

            {/* Technical Specs List */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-4 border-t border-[rgba(255,255,255,0.12)]">
              {current.specs.map((spec, i) => (
                <div key={i} className="bg-[#000000] p-3 border border-[rgba(255,255,255,0.08)]">
                  <div className="font-mono text-[9px] text-[#8D9398] uppercase">{spec.label}</div>
                  <div className="font-mono text-xs text-[#FFFFFF] font-bold mt-1">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-[rgba(255,255,255,0.12)] flex items-center justify-between text-xs font-mono text-[#8D9398]">
            <span>ENGINEERED AROUND THE VEHICLE</span>
            <span className="text-[#E10600] font-bold">ZERO GENERIC PACKAGES</span>
          </div>
        </div>

      </div>
    </div>
  );
}
