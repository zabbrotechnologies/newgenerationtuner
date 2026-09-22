import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Sparkles, ArrowUpRight, ChevronDown, CheckCircle2 } from 'lucide-react';

export default function HeroSection() {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let isReversing = false;
    let animationFrameId = null;
    let lastTimestamp = null;
    const reverseSpeed = 1.0; // Playback speed in reverse

    const reverseStep = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const delta = (timestamp - lastTimestamp) / 1000;
      lastTimestamp = timestamp;

      if (!videoRef.current) return;

      if (video.currentTime <= 0.08 || !isReversing) {
        // Reached the start -> switch back to normal forward playback
        isReversing = false;
        video.currentTime = 0;
        video.play().catch(() => {});
        return;
      }

      // Step backwards smoothly
      video.currentTime = Math.max(0, video.currentTime - (delta * reverseSpeed));
      animationFrameId = requestAnimationFrame(reverseStep);
    };

    const handleTimeUpdate = () => {
      if (isReversing) return;
      // When nearing the end of video, switch to reverse playback
      if (video.duration && video.currentTime >= video.duration - 0.15) {
        isReversing = true;
        video.pause();
        lastTimestamp = null;
        animationFrameId = requestAnimationFrame(reverseStep);
      }
    };

    const handleEnded = () => {
      if (!isReversing) {
        isReversing = true;
        video.pause();
        lastTimestamp = null;
        animationFrameId = requestAnimationFrame(reverseStep);
      }
    };

    const handleLoadedData = () => {
      setVideoLoaded(true);
      video.play().catch(() => {});
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('loadeddata', handleLoadedData);

    // Initial play attempt
    video.play().catch(() => {});

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('loadeddata', handleLoadedData);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-[95vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] border-b border-white/[0.08]">
      
      {/* ── 1. FULL-BLEED VIDEO (NO OLD POSTER FLASH) ── */}
      <div className="absolute inset-0 z-0 bg-[#050505] overflow-hidden">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          className={`w-full h-full object-cover filter brightness-[0.70] contrast-[1.12] transition-opacity duration-700 ${
            videoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundColor: '#050505' }}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ── 2. FULL-COVER GLASS OVERLAY (LOW BLUR, REDUCED OPACITY) ── */}
      <div className="absolute inset-0 z-10 bg-[#050505]/40 backdrop-blur-[5px] pointer-events-none">
        {/* Subtle top & bottom edge gradients for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/70"></div>
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-[#050505]/40"></div>
      </div>

      {/* ── 3. HERO CONTENT ── */}
      <div className="container relative z-20 px-4 sm:px-6 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center sm:text-left space-y-6 sm:space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#050505]/70 border border-white/[0.12] backdrop-blur-md shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#D71920] animate-pulse"></span>
            <span className="font-mono text-[11px] tracking-widest uppercase text-[#F5F5F7] font-medium">
              PREMIUM AUTOMOTIVE DETAILING STUDIO
            </span>
          </div>

          {/* Sub-headline / Brand Motto */}
          <div className="space-y-3">
            <div className="font-mono text-xs sm:text-sm text-[#D71920] tracking-[0.25em] uppercase font-semibold flex items-center justify-center sm:justify-start gap-3">
              <span>PRECISION</span>
              <span className="text-[#8E8E93]">•</span>
              <span>PROTECTION</span>
              <span className="text-[#8E8E93]">•</span>
              <span>PERFECTION</span>
            </div>

            {/* Primary Hero Headline */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#FFFFFF] leading-[1.05] uppercase drop-shadow-2xl">
              UNCOMPROMISING <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F5F5F7] to-[#8E8E93]">
                SURFACE FINISH.
              </span>
            </h1>
          </div>

          {/* Paragraph */}
          <p className="font-body text-[#D1D1D6] text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl drop-shadow">
            We do not just wash cars — we engineer optical perfection. Multi-stage paint defect levelling, 9H+ SiO₂ ceramic coatings, and self-healing PPF tailored to your vehicle's physical clear coat.
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <Link 
              to="/contact" 
              className="btn-red w-full sm:w-auto py-3.5 px-8 text-sm group shadow-xl shadow-red-950/40"
            >
              <span>Book an Assessment</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            
            <a 
              href="#services-section" 
              className="btn-ghost-dark w-full sm:w-auto py-3.5 px-8 text-sm bg-[#050505]/60 hover:bg-[#050505]/90 border-white/[0.15]"
            >
              <span>Explore Services</span>
              <ChevronDown size={16} />
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="pt-6 sm:pt-8 border-t border-white/[0.1] grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
            <div className="flex items-center gap-2.5 bg-[#050505]/50 p-3 rounded border border-white/[0.06] backdrop-blur-sm">
              <CheckCircle2 size={16} className="text-[#D71920] flex-shrink-0" />
              <div>
                <div className="font-display text-xs sm:text-sm font-semibold text-[#FFFFFF]">9H+ SiO₂ Ceramic</div>
                <div className="font-mono text-[10px] text-[#8E8E93]">Covalent Nano-Shield</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 bg-[#050505]/50 p-3 rounded border border-white/[0.06] backdrop-blur-sm">
              <CheckCircle2 size={16} className="text-[#D71920] flex-shrink-0" />
              <div>
                <div className="font-display text-xs sm:text-sm font-semibold text-[#FFFFFF]">Self-Healing PPF</div>
                <div className="font-mono text-[10px] text-[#8E8E93]">Impact Polyurethane</div>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-2.5 bg-[#050505]/50 p-3 rounded border border-white/[0.06] backdrop-blur-sm">
              <CheckCircle2 size={16} className="text-[#D71920] flex-shrink-0" />
              <div>
                <div className="font-display text-xs sm:text-sm font-semibold text-[#FFFFFF]">Ultrasonic Gauging</div>
                <div className="font-mono text-[10px] text-[#8E8E93]">0.1μm Subsurface Scan</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <a 
        href="#trust-strip" 
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 text-[#8E8E93] hover:text-[#FFFFFF] transition-colors flex flex-col items-center gap-1.5"
        aria-label="Scroll down to content"
      >
        <span className="font-mono text-[9px] tracking-widest uppercase">DISCOVER</span>
        <ChevronDown size={14} className="animate-bounce" />
      </a>

    </section>
  );
}
