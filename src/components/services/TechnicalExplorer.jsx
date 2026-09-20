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
                  ? 'border-[#C6A03A] text-[#C6A03A] bg-[#C6A03A]/10' 
                  : 'border-white/10 text-[#AAA59B] hover:border-white/30 hover:text-[#F1EEE7]'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {/* Detail Screen */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#171714] border border-white/10 p-8 md:p-12">
        <div className="lg:col-span-6 space-y-4">
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#C6A03A]">
            {activeItem.category}
          </div>
          <h3 className="font-serif text-3xl md:text-4xl text-[#F1EEE7] font-light leading-tight">
            {activeItem.title}
          </h3>
          <p className="text-sm text-[#AAA59B] leading-relaxed font-light">
            {activeItem.description}
          </p>
          <div className="pt-4 border-t border-white/5 font-mono text-[11px] text-[#C6A03A]">
            SPECIFICATION: {activeItem.spec}
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="aspect-[16/10] overflow-hidden border border-white/10 relative group">
            <img 
              src={activeItem.image} 
              alt={activeItem.title} 
              className="w-full h-full object-cover filter brightness-[0.75] group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
