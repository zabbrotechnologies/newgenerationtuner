import React, { useState } from 'react';

export default function BeforeAfterSlider({
  beforeImage = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1800&q=85",
  afterImage = "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1800&q=85",
  beforeLabel = "BEFORE · SWIRL DEFECTS & ETCHING",
  afterLabel = "AFTER · 2-STAGE CORRECTION + CERAMIC",
  aspectRatio = "aspect-[16/9] md:aspect-[21/9]"
}) {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX || (e.touches && e.touches[0].clientX);
    if (x) {
      const pos = Math.max(3, Math.min(97, ((x - rect.left) / rect.width) * 100));
      setSliderPos(pos);
    }
  };

  return (
    <div className="w-full">
      <div 
        className={`relative w-full ${aspectRatio} overflow-hidden select-none cursor-ew-resize border border-[rgba(255,255,255,0.12)] bg-[#000000] group`}
        onMouseMove={handleMove}
        onTouchMove={handleMove}
      >
        {/* Before Layer (Base) */}
        <div className="absolute inset-0">
          <img 
            src={beforeImage} 
            alt="Before restoration" 
            className="w-full h-full object-cover filter brightness-[0.4] saturate-[0.4] contrast-125"
          />
          <div className="absolute bottom-6 left-6 z-10">
            <span className="bg-[#000000]/95 px-3.5 py-1.5 border border-[rgba(255,255,255,0.12)] font-mono text-[10px] tracking-widest text-[#8D9398] uppercase">
              {beforeLabel}
            </span>
          </div>
        </div>

        {/* After Layer (Clipped Overlay) */}
        <div 
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <img 
            src={afterImage} 
            alt="After restoration" 
            className="w-full h-full object-cover filter brightness-[0.88] saturate-[1.1] contrast-105"
          />
          <div className="absolute bottom-6 right-6 z-10">
            <span className="bg-[#000000]/95 px-3.5 py-1.5 border border-[#E10600] font-mono text-[10px] tracking-widest text-[#FFFFFF] uppercase">
              <span className="text-[#E10600] mr-1.5">●</span>
              {afterLabel}
            </span>
          </div>
        </div>

        {/* Minimal Engineered Divider Line & Handle */}
        <div 
          className="absolute top-0 bottom-0 w-[2px] bg-[#E10600] z-20 pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-none bg-[#E10600] text-white flex items-center justify-center font-mono text-[10px] font-bold shadow-2xl">
            ↔
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center font-mono text-[10px] tracking-[0.2em] uppercase text-[#8D9398] mt-3">
        <span>[01 / UNTREATED RAW CLEAR COAT]</span>
        <span>DRAG DIVIDER TO COMPARE OPTICAL LEVELLING</span>
        <span>[02 / REFINED SPECULAR FINISH]</span>
      </div>
    </div>
  );
}
