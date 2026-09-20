import React, { useState, useEffect, useRef } from 'react';
import { Droplets, Shield, RefreshCw } from 'lucide-react';

export default function WaterBeading() {
  const [surfaceType, setSurfaceType] = useState('protected'); // 'untreated' | 'protected'
  const canvasRef = useRef(null);
  const animFrameId = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const width = canvas.parentElement.clientWidth;
    const height = canvas.parentElement.clientHeight || 420;
    canvas.width = width;
    canvas.height = height;

    const initialDrops = Array.from({ length: 50 }, () => ({
      x: Math.random() * width,
      y: Math.random() * (height - 60) + 30,
      radius: Math.random() * 4 + (surfaceType === 'protected' ? 6 : 14),
      speedY: surfaceType === 'protected' ? Math.random() * 2 + 1.5 : Math.random() * 0.4 + 0.1,
      speedX: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.4 + 0.6
    }));

    let drops = [...initialDrops];

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render deep graphite paint substrate
      const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
      bgGrad.addColorStop(0, '#101214');
      bgGrad.addColorStop(0.5, '#181B1E');
      bgGrad.addColorStop(1, '#0C0E10');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Specular highlight line across vehicle body curve
      ctx.beginPath();
      ctx.moveTo(0, height * 0.35);
      ctx.bezierCurveTo(width * 0.3, height * 0.3, width * 0.7, height * 0.5, width, height * 0.45);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.lineWidth = 14;
      ctx.stroke();

      // Render droplets based on physics
      drops.forEach((d) => {
        d.y += d.speedY;
        d.x += d.speedX;

        if (d.y > height + 20) {
          d.y = -10;
          d.x = Math.random() * width;
        }

        if (surfaceType === 'protected') {
          // PROTECTED: Tight circular beads (115° contact angle)
          ctx.save();
          ctx.beginPath();
          ctx.arc(d.x, d.y, d.radius, 0, Math.PI * 2);
          
          ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
          ctx.shadowBlur = 8;
          ctx.shadowOffsetX = 2;
          ctx.shadowOffsetY = 4;
          
          const dropGrad = ctx.createRadialGradient(
            d.x - d.radius * 0.3,
            d.y - d.radius * 0.3,
            d.radius * 0.1,
            d.x,
            d.y,
            d.radius
          );
          dropGrad.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
          dropGrad.addColorStop(0.4, 'rgba(215, 25, 32, 0.25)'); // Subtle performance refraction
          dropGrad.addColorStop(0.8, 'rgba(24, 27, 30, 0.7)');
          dropGrad.addColorStop(1, 'rgba(242, 241, 237, 0.8)');

          ctx.fillStyle = dropGrad;
          ctx.fill();

          // High Specular Highlight
          ctx.beginPath();
          ctx.arc(d.x - d.radius * 0.35, d.y - d.radius * 0.35, d.radius * 0.25, 0, Math.PI * 2);
          ctx.fillStyle = '#ffffff';
          ctx.fill();
          ctx.restore();
        } else {
          // UNTREATED: Irregular water sheet pooling
          ctx.save();
          ctx.beginPath();
          ctx.ellipse(d.x, d.y, d.radius * 2.2, d.radius * 0.6, 0, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(242, 241, 237, 0.18)';
          ctx.strokeStyle = 'rgba(242, 241, 237, 0.3)';
          ctx.lineWidth = 1;
          ctx.fill();
          ctx.stroke();
          ctx.restore();
        }
      });

      animFrameId.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [surfaceType]);

  return (
    <div className="w-full space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-6 border-b border-[rgba(255,255,255,0.12)]">
        <div>
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#D71920] mb-2 font-bold">
            <span className="w-6 h-[2px] bg-[#D71920]"></span>
            <span>DIAGNOSTIC SYSTEM 02 · HYDROPHOBIC FLUID DYNAMICS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFFFFF] tracking-tight">
            MAKE WATER WORK FOR YOU.
          </h2>
          <p className="text-xs md:text-sm text-[#8D9398] max-w-xl mt-2 font-normal">
            Compare untreated factory clear coat versus 9H+ SiO₂ ceramic protection. Observe how surface tension transforms flat sheet pools into high-angle 115° self-shedding beads.
          </p>
        </div>

        {/* Substrate Selector */}
        <div className="flex items-center gap-1.5 p-1 bg-[#181B1E] border border-[rgba(255,255,255,0.12)]">
          <button
            onClick={() => setSurfaceType('untreated')}
            className={`px-3 py-2 font-mono text-[10px] tracking-wider uppercase transition-all ${
              surfaceType === 'untreated'
                ? 'bg-red-950/80 text-red-200 border border-red-800/50 font-bold'
                : 'text-[#8D9398] hover:text-[#FFFFFF]'
            }`}
          >
            Untreated Paint (Sheet Pooling)
          </button>
          <button
            onClick={() => setSurfaceType('protected')}
            className={`px-3 py-2 font-mono text-[10px] tracking-wider uppercase transition-all ${
              surfaceType === 'protected'
                ? 'bg-[#D71920] text-white font-bold'
                : 'text-[#8D9398] hover:text-[#FFFFFF]'
            }`}
          >
            SiO₂ Protected (115° Superhydrophobic)
          </button>
        </div>
      </div>

      {/* Viewport Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Canvas Viewport (col-span-8) */}
        <div className="lg:col-span-8 relative">
          <div className="relative w-full h-[380px] md:h-[440px] overflow-hidden border border-[rgba(255,255,255,0.12)] bg-[#101214] select-none">
            <canvas ref={canvasRef} className="w-full h-full block" />

            {/* Overlaid HUD Metrics */}
            <div className="absolute top-4 left-4 bg-[#101214]/90 px-3.5 py-2 border border-[rgba(255,255,255,0.12)] font-mono text-[10px] space-y-1">
              <div className="text-[#8D9398] uppercase tracking-widest">ACTIVE SUBSTRATE</div>
              <div className={surfaceType === 'protected' ? 'text-[#D71920] font-bold' : 'text-red-400 font-bold'}>
                {surfaceType === 'protected' ? 'CERAMIC MATRIX (115° CONTACT ANGLE)' : 'RAW OXIDIZED CLEAR COAT (< 30° ANGLE)'}
              </div>
            </div>

            <div className="absolute bottom-4 right-4 bg-[#101214]/90 px-3.5 py-2 border border-[rgba(255,255,255,0.12)] font-mono text-[10px] text-right space-y-1">
              <div className="text-[#8D9398] uppercase tracking-widest">BEHAVIOR</div>
              <div className="text-[#FFFFFF]">
                {surfaceType === 'protected' ? 'RAPID BEAD ROLLOFF & SELF-CLEANING' : 'WATER LOGGING & CALCIUM ETCHING'}
              </div>
            </div>
          </div>
        </div>

        {/* Telemetry Comparison Table (col-span-4) */}
        <div className="lg:col-span-4 bg-[#181B1E] border border-[rgba(255,255,255,0.12)] p-6 md:p-8 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex justify-between items-center border-b border-[rgba(255,255,255,0.12)] pb-4 font-mono text-[10px] text-[#D71920] uppercase tracking-widest font-bold">
              <span>PHYSICAL METRICS</span>
              <span>ISO 19403</span>
            </div>

            <div className="space-y-4">
              <div className="bg-[#101214] p-4 border border-[rgba(255,255,255,0.08)] space-y-1">
                <div className="font-mono text-[10px] text-[#8D9398] uppercase">Contact Angle</div>
                <div className="font-display text-3xl font-bold text-[#FFFFFF]">
                  {surfaceType === 'protected' ? '115.4°' : '28.1°'}
                </div>
                <p className="text-xs text-[#8D9398]">
                  {surfaceType === 'protected'
                    ? 'High angle forces beads into tight spheres that roll away under 15 km/h airflow.'
                    : 'Low surface energy causes water to flatten and trap mineral salts upon evaporation.'}
                </p>
              </div>

              <div className="bg-[#101214] p-4 border border-[rgba(255,255,255,0.08)] space-y-1">
                <div className="font-mono text-[10px] text-[#8D9398] uppercase">Shedding Velocity</div>
                <div className="font-display text-3xl font-bold text-[#D71920]">
                  {surfaceType === 'protected' ? '< 15 km/h' : '> 85 km/h (Pooled)'}
                </div>
                <p className="text-xs text-[#8D9398]">
                  Minimal vehicle velocity required to achieve 100% dry paint surface.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-[rgba(255,255,255,0.12)]">
            <button
              onClick={() => setSurfaceType(surfaceType === 'protected' ? 'untreated' : 'protected')}
              className="w-full py-3 px-4 bg-[#101214] hover:bg-[#D71920] text-[#FFFFFF] font-mono text-xs uppercase tracking-widest transition-colors border border-[rgba(255,255,255,0.12)] flex items-center justify-center gap-2"
            >
              Toggle Substrate Chemistry ↔
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
