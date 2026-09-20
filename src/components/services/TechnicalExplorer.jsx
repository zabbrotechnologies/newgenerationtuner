import React, { useState } from 'react';
import { TECHNICAL_LAB_ITEMS } from '../../data/index.js';

export default function TechnicalExplorer() {
  const [activeId, setActiveId] = useState(TECHNICAL_LAB_ITEMS[0].id);
  const activeItem = TECHNICAL_LAB_ITEMS.find(item => item.id === activeId) || TECHNICAL_LAB_ITEMS[0];

  return (
    <div className="w-full">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {TECHNICAL_LAB_ITEMS.map((item) => {
          const isActive = item.id === activeId;
          return (
            <button
              key={item.id}
              onClick={() => setActiveId(item.id)}
              className={`font-mono text-[10px] tracking-widest uppercase px-5 py-3 border transition-all cursor-pointer ${
                isActive 
                  ? 'border-[#D71920] text-white bg-[#D71920] font-bold' 
                  : 'border-[rgba(0,0,0,0.15)] text-[#555A60] hover:border-[rgba(0,0,0,0.4)] hover:text-[#101214]'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {/* Detail Screen */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#FFFFFF] border border-[rgba(0,0,0,0.12)] p-8 md:p-12 shadow-sm">
        <div className="lg:col-span-6 space-y-4">
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#D71920] font-medium">
            {activeItem.category}
          </div>
          <h3 className="font-display text-3xl md:text-4xl text-[#101214] font-bold uppercase leading-tight tracking-tight">
            {activeItem.title}
          </h3>
          <p className="font-body text-sm text-[#555A60] leading-relaxed font-normal">
            {activeItem.description}
          </p>
          <div className="pt-4 border-t border-[rgba(0,0,0,0.08)] font-mono text-[11px] text-[#D71920] font-medium">
            SPECIFICATION: {activeItem.spec}
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="aspect-[16/10] overflow-hidden border border-[rgba(0,0,0,0.12)] relative group bg-[#E8E7E3]">
            <div className="absolute inset-0 skeleton-shimmer-light"></div>
            <img 
              src={activeItem.image} 
              alt={activeItem.title} 
              loading="lazy"
              onLoad={(e) => e.currentTarget.classList.remove('opacity-0')}
              className="w-full h-full object-cover filter brightness-[0.85] contrast-110 group-hover:scale-105 transition-all duration-700 opacity-0 relative z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
