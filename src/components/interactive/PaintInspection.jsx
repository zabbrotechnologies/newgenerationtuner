import React, { useState, useRef } from 'react';
import { Search, Sparkles, AlertCircle, CheckCircle, ShieldCheck } from 'lucide-react';

export default function PaintInspection() {
  const [mode, setMode] = useState('inspect'); // 'inspect' | 'correct' | 'refine' | 'protect'
  const [lensPos, setLensPos] = useState({ x: 50, y: 50 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
    setLensPos({ x, y });
  };

  const handleTouchMove = (e) => {
    if (!containerRef.current || !e.touches[0]) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((e.touches[0].clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((e.touches[0].clientY - rect.top) / rect.height) * 100));
    setLensPos({ x, y });
  };

  const stageDescriptions = {
    inspect: {
      tag: 'STAGE 01 · MACRO DEFECT SCAN',
      title: 'Revealing Subsurface Swirls & Acid Etching',
      desc: 'High-intensity 5000K LED inspection lighting exposes random deep scratches (RDS), wash friction swirls, and atmospheric acid etching undetectable in indirect ambient light.',
      findings: [
        { label: 'Defect Density', severity: 'HIGH (45µm Swirl Depth)', isRed: true },
        { label: 'Clear Coat Oxidation', severity: 'MODERATE', isRed: true },
        { label: 'Specular Reflection', severity: 'MUTED / SCATTERED', isRed: true }
      ]
    },
    correct: {
      tag: 'STAGE 02 · ROTARY COMPOUNDING',
      title: 'Precision Levelling & Ridge Removal',
      desc: 'Diminishing micro-abrasives level clear coat peaks down to scratch valleys without compromising factory paint integrity or clear coat warranty thickness.',
      findings: [
        { label: 'Defect Levelling', severity: '90% ELIMINATED', isRed: false },
        { label: 'Clear Coat Removal', severity: '< 2.5µm CONTROLLED', isRed: false },
        { label: 'Residual Haze', severity: 'LIGHT FINISHING HAZE', isRed: true }
      ]
    },
    refine: {
      tag: 'STAGE 03 · JEWELLING BURNISH',
      title: 'Zero-Haze Specular Polish',
      desc: 'Ultra-fine finishing pads polish the resin matrix, creating mirror-depth reflections and true jetting on dark pigmented clear coats.',
      findings: [
        { label: 'Gloss Units (GU)', severity: '99.4 / 100 (MIRROR)', isRed: false },
        { label: 'Micro-Marring', severity: '0.00% DETECTED', isRed: false },
        { label: 'Clarity Index', severity: 'OPTICAL PERFECTION', isRed: false }
      ]
    },
    protect: {
      tag: 'STAGE 04 · 9H+ SiO₂ CERAMIC SHIELD',
      title: 'Molecular Quartz Nanocoating',
      desc: 'Liquid silicon dioxide crosslinks directly into clear coat micropores, curing to an impenetrable 9H quartz barrier with 115° hydrophobic self-cleaning roll-off.',
      findings: [
        { label: 'Hydrophobic Angle', severity: '115.4° BEAD ANGLE', isRed: false },
        { label: 'Chemical Resistance', severity: 'pH 2 – pH 13', isRed: false },
        { label: 'UV Degradation', severity: '100% BLOCKED', isRed: false }
      ]
    }
  };

  return (
    <div className="w-full space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-6 border-b border-[rgba(255,255,255,0.12)]">
        <div>
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#E10600] mb-2 font-bold">
            <span className="w-6 h-[2px] bg-[#E10600]"></span>
            <span>DIAGNOSTIC SYSTEM 01 · SURFACE INSPECTION</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFFFFF] tracking-tight">
            REMOVE THE NOISE.
          </h2>
          <p className="text-xs md:text-sm text-[#8D9398] max-w-xl mt-2 font-normal">
            Move your cursor across the paint substrate. The inspection scanner uncovers micro-defects across each sequential compounding stage.
          </p>
        </div>

        {/* Mode Selector Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#080808] border border-[rgba(255,255,255,0.12)]">
          {[
            { id: 'inspect', label: '01 · INSPECT' },
            { id: 'correct', label: '02 · CORRECT' },
            { id: 'refine', label: '03 · REFINE' },
            { id: 'protect', label: '04 · PROTECT' }
          ].map((s) => (
            <button
              key={s.id}
              onClick={() => setMode(s.id)}
              className={`px-3 py-1.5 font-mono text-[10px] tracking-wider uppercase transition-all ${
                mode === s.id
                  ? 'bg-[#E10600] text-white font-bold'
                  : 'text-[#8D9398] hover:text-[#FFFFFF] hover:bg-white/5'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid Viewport */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Interactive Loupe Scanner Area (col-span-8) */}
        <div className="lg:col-span-8 relative">
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative w-full aspect-[16/10] md:aspect-[16/9] overflow-hidden border border-[rgba(255,255,255,0.12)] bg-[#000000] cursor-crosshair select-none group"
          >
            {/* Background Base Paint Image */}
            <img
              src={
                mode === 'inspect'
                  ? 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1600&q=80'
                  : mode === 'correct'
                  ? 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80'
                  : mode === 'refine'
                  ? 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80'
                  : 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1600&q=80'
              }
              alt="Automotive Paint Substrate"
              className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.2]"
            />

            {/* Dark Studio Lighting Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-[#000000]/60 pointer-events-none"></div>

            {/* Loupe Scanner Ring */}
            <div
              className="absolute pointer-events-none transition-transform duration-75 ease-out"
              style={{
                left: `${lensPos.x}%`,
                top: `${lensPos.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <div className="w-36 h-36 md:w-48 md:h-48 rounded-none border-2 border-[#E10600] bg-[#E10600]/10 shadow-[0_0_30px_rgba(215,25,32,0.45)] backdrop-contrast-150 backdrop-brightness-125 flex items-center justify-center relative overflow-hidden">
                
                {/* Engineering Grid Overlays */}
                <div className="w-full h-[1px] bg-[#E10600]/60 absolute"></div>
                <div className="h-full w-[1px] bg-[#E10600]/60 absolute"></div>
                
                {mode === 'inspect' && (
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#000000_85%)] flex items-center justify-center">
                    <div className="font-mono text-[9px] text-[#E10600] uppercase tracking-widest text-center px-2 bg-[#000000]/90 py-1 border border-[#E10600]">
                      DEFECT: SWIRLS 45µm
                    </div>
                  </div>
                )}

                {mode === 'correct' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="font-mono text-[9px] text-[#FFFFFF] uppercase tracking-widest text-center px-2 bg-[#000000]/90 py-1 border border-white/20">
                      LEVELLING: 90% PASS
                    </div>
                  </div>
                )}

                {mode === 'refine' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="font-mono text-[9px] text-[#FFFFFF] uppercase tracking-widest text-center px-2 bg-[#000000]/90 py-1 border border-white/40">
                      CLARITY: 99.4 GU
                    </div>
                  </div>
                )}

                {mode === 'protect' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="font-mono text-[9px] text-[#E10600] uppercase tracking-widest text-center px-2 bg-[#000000]/90 py-1 border border-[#E10600]">
                      SiO₂ SHIELD: 9H ACTIVE
                    </div>
                  </div>
                )}

                <div className="w-2 h-2 bg-[#E10600]"></div>
              </div>
            </div>

            {/* Static HUD Callouts */}
            <div className="absolute top-4 left-4 font-mono text-[10px] text-[#E10600] bg-[#000000]/90 px-3 py-1.5 border border-[rgba(255,255,255,0.12)]">
              <span>SCANNER: </span>
              <span className="text-[#FFFFFF]">5000K HIGH-CRI LED</span>
            </div>

            <div className="absolute bottom-4 right-4 font-mono text-[10px] text-[#8D9398] bg-[#000000]/90 px-3 py-1.5 border border-[rgba(255,255,255,0.12)]">
              <span>POS: </span>
              <span className="text-[#FFFFFF]">{lensPos.x.toFixed(1)}% X · {lensPos.y.toFixed(1)}% Y</span>
            </div>
          </div>
        </div>

        {/* Telemetry & Analysis Panel (col-span-4) */}
        <div className="lg:col-span-4 flex flex-col justify-between bg-[#080808] border border-[rgba(255,255,255,0.12)] p-6 md:p-8">
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.12)] pb-4">
              <span className="font-mono text-[10px] text-[#E10600] tracking-widest uppercase font-bold">
                {stageDescriptions[mode].tag}
              </span>
              <span className="font-mono text-[10px] text-[#8D9398]">TELEMETRY</span>
            </div>

            <div>
              <h3 className="font-display text-2xl text-[#FFFFFF] font-bold tracking-tight mb-2">
                {stageDescriptions[mode].title}
              </h3>
              <p className="text-xs text-[#8D9398] leading-relaxed">
                {stageDescriptions[mode].desc}
              </p>
            </div>

            {/* Diagnostic Findings */}
            <div className="space-y-2.5 pt-4 border-t border-[rgba(255,255,255,0.08)]">
              <div className="font-mono text-[10px] uppercase text-[#8D9398] tracking-wider">
                Surface Diagnostics
              </div>
              {stageDescriptions[mode].findings.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center bg-[#000000] p-3 border border-[rgba(255,255,255,0.08)] text-xs">
                  <span className="text-[#8D9398] font-mono text-[11px]">{item.label}</span>
                  <span className={`font-mono text-[11px] font-bold ${item.isRed ? 'text-[#E10600]' : 'text-[#FFFFFF]'}`}>
                    {item.severity}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-[rgba(255,255,255,0.12)]">
            <button
              onClick={() => {
                const modes = ['inspect', 'correct', 'refine', 'protect'];
                const nextIndex = (modes.indexOf(mode) + 1) % modes.length;
                setMode(modes[nextIndex]);
              }}
              className="w-full py-3 px-4 bg-[#000000] hover:bg-[#E10600] text-[#FFFFFF] font-mono text-xs uppercase tracking-widest transition-colors border border-[rgba(255,255,255,0.12)] flex items-center justify-center gap-2"
            >
              Advance Protocol Sequence ↗
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
