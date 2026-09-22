import React, { useState, useRef, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Eye, Sparkles, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BeforeAfterSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const slides = [
    {
      id: "front-grille",
      title: "Front Grille & Clear Coat",
      vehicle: "Audi RS Performance",
      before: "/images/transformation/before1.png",
      after: "/images/transformation/after1.png",
      beforeLabel: "Before",
      afterLabel: "After"
    },
    {
      id: "alloy-wheel",
      title: "Alloy Wheel & Brake Caliper",
      vehicle: "BMW M-Performance",
      before: "/images/transformation/before2.png",
      after: "/images/transformation/after2.png",
      beforeLabel: "Before",
      afterLabel: "After"
    },
    {
      id: "leather-interior",
      title: "Cockpit & Matte Leather",
      vehicle: "Executive Interior",
      before: "/images/transformation/before3.png",
      after: "/images/transformation/after3.png",
      beforeLabel: "Before",
      afterLabel: "After"
    },
    {
      id: "rear-paint",
      title: "Rear Quarter & Specular Paint",
      vehicle: "Metallic Body Finish",
      before: "/images/transformation/before4.png",
      after: "/images/transformation/after4.png",
      beforeLabel: "Before",
      afterLabel: "After"
    }
  ];

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(2, Math.min(98, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handleMouseMove = (e) => {
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setSliderPos(50);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setSliderPos(50);
  };

  const slide = slides[currentSlide];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
      
      {/* ── LEFT COLUMN: HEADLINE & 3-STEP PROCESS ── */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="lg:col-span-5 space-y-6 sm:space-y-8"
      >
        {/* Availability Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E0E10] border border-white/[0.1] shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D71920] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D71920]"></span>
          </span>
          <span className="font-mono text-xs font-medium tracking-tight text-[#F5F5F7]">
            Studio Slots Available
          </span>
        </div>

        {/* Big Headline */}
        <div className="space-y-3">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#FFFFFF] leading-[1.05]">
            Real results.<br />
            <span className="text-[#D71920]">Every</span> time.
          </h2>
          <p className="font-body text-sm sm:text-base text-[#8E8E93] leading-relaxed max-w-md">
            See the undeniable difference surgical paint levelling, ceramic bonding, and precision interior restoration makes.
          </p>
        </div>

        {/* OUR PROCESS: Three steps card */}
        <div className="rounded-2xl bg-[#0E0E10] border border-white/[0.08] p-5 sm:p-6 shadow-xl space-y-4">
          <div>
            <span className="font-mono text-[10.5px] font-semibold tracking-[0.2em] text-[#D71920] uppercase">
              OUR PROCESS
            </span>
            <h3 className="font-display text-base sm:text-lg font-bold text-[#FFFFFF] tracking-tight mt-1">
              Three steps to a flawless finish.
            </h3>
          </div>

          <div className="space-y-3 pt-1 border-t border-white/[0.06]">
            {/* Step 1 */}
            <div className="flex items-start gap-3.5 py-2">
              <div className="w-9 h-9 rounded-full bg-[#D71920]/10 border border-[#D71920]/20 flex items-center justify-center flex-shrink-0 text-[#D71920]">
                <Eye size={16} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-[11px] font-bold text-[#D71920]">01</span>
                  <h4 className="font-display text-sm font-bold text-[#FFFFFF]">Deep Inspection</h4>
                </div>
                <p className="font-body text-xs text-[#8E8E93] mt-0.5">
                  Panel-by-panel 0.1μm ultrasonic depth scan and high-CRI defect mapping.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-3.5 py-2 border-t border-white/[0.04]">
              <div className="w-9 h-9 rounded-full bg-[#D71920]/10 border border-[#D71920]/20 flex items-center justify-center flex-shrink-0 text-[#D71920]">
                <Sparkles size={16} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-[11px] font-bold text-[#D71920]">02</span>
                  <h4 className="font-display text-sm font-bold text-[#FFFFFF]">Precision Detailing</h4>
                </div>
                <p className="font-body text-xs text-[#8E8E93] mt-0.5">
                  Multi-stage rotary compounding and dual-action jewelling refinement.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-3.5 py-2 border-t border-white/[0.04]">
              <div className="w-9 h-9 rounded-full bg-[#D71920]/10 border border-[#D71920]/20 flex items-center justify-center flex-shrink-0 text-[#D71920]">
                <ShieldCheck size={16} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-[11px] font-bold text-[#D71920]">03</span>
                  <h4 className="font-display text-sm font-bold text-[#FFFFFF]">Final Protection</h4>
                </div>
                <p className="font-body text-xs text-[#8E8E93] mt-0.5">
                  Sealed with permanent 9H+ SiO₂ ceramic matrix or computer-cut self-healing PPF.
                </p>
              </div>
            </div>
          </div>
        </div>

      </motion.div>

      {/* ── RIGHT COLUMN: BEFORE/AFTER SLIDER & CAROUSEL CONTROLS ── */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="lg:col-span-7 space-y-4"
      >
        {/* Top Transformation Title & Navigation Buttons */}
        <div className="flex justify-between items-center px-1">
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#FFFFFF] tracking-tight">
              Transformation
            </h3>
            <span className="font-mono text-xs text-[#8E8E93]">
              {slide.title} · {slide.vehicle}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-[#0E0E10] hover:bg-[#1C1C20] border border-white/[0.1] text-white flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D71920]"
              aria-label="Previous transformation slide"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-[#0E0E10] hover:bg-[#1C1C20] border border-white/[0.1] text-white flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D71920]"
              aria-label="Next transformation slide"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* The Draggable Interactive Before/After Frame */}
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden select-none cursor-ew-resize border border-white/[0.12] bg-[#0A0B0D] shadow-2xl group"
        >
          {/* Base Layer: After Image (Full Width Underneath) */}
          <div className="absolute inset-0">
            <img 
              src={slide.after} 
              alt={`${slide.title} After Detailing`}
              className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.05]"
            />
            
            {/* After Floating Badge (Top Right) */}
            <div className="absolute top-4 right-4 z-10">
              <span className="bg-[#050505]/80 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/[0.12] font-display text-xs font-semibold text-white tracking-wide shadow-md">
                {slide.afterLabel}
              </span>
            </div>
          </div>

          {/* Top Layer: Before Image (Clipped dynamically by slider position) */}
          <div 
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <img 
              src={slide.before} 
              alt={`${slide.title} Before Detailing`}
              className="w-full h-full object-cover filter brightness-[0.88] contrast-[1.05]"
            />
            
            {/* Before Floating Badge (Top Left) */}
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-[#050505]/80 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/[0.12] font-display text-xs font-semibold text-[#8E8E93] tracking-wide shadow-md">
                {slide.beforeLabel}
              </span>
            </div>
          </div>

          {/* Divider Line */}
          <div 
            className="absolute top-0 bottom-0 w-[2px] bg-white z-20 pointer-events-none shadow-[0_0_10px_rgba(0,0,0,0.5)]"
            style={{ left: `${sliderPos}%` }}
          >
            {/* Central Round Slider Handle */}
            <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold text-xs shadow-2xl border-2 border-black/10">
              <span className="tracking-tighter select-none">‹ ›</span>
            </div>
          </div>
        </div>

        {/* Slide Indicator Dots & Instruction */}
        <div className="flex justify-between items-center pt-2 px-1 text-xs font-mono text-[#8E8E93]">
          <div className="flex items-center gap-1.5">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentSlide(idx);
                  setSliderPos(50);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentSlide === idx ? 'w-6 bg-[#D71920]' : 'w-1.5 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <span className="tracking-wider uppercase text-[10px]">
            DRAG HANDLE TO COMPARE RESULT
          </span>
        </div>

      </motion.div>

    </div>
  );
}
