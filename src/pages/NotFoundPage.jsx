import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-24 bg-[#101214] text-center">
      <div className="container max-w-lg space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#181B1E] border border-[rgba(255,255,255,0.12)]">
          <span className="w-2 h-2 bg-[#D71920]"></span>
          <span className="font-mono text-[10px] text-[#D71920] tracking-[0.2em] uppercase font-bold">
            404 — ROUTE UNKNOWN
          </span>
        </div>
        <h1 className="font-display text-5xl sm:text-6xl text-[#FFFFFF] font-bold uppercase tracking-tight">
          COURSE CORRECTION.
        </h1>
        <p className="font-body text-sm text-[#8D9398] leading-relaxed font-normal">
          The requested path or technical document does not exist within the New Generation Tuners directory.
        </p>
        <div className="pt-4">
          <Link to="/" className="btn-red inline-flex">
            Return to Atelier Home ↗
          </Link>
        </div>
      </div>
    </div>
  );
}
