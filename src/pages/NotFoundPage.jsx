import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-24 bg-[#090908] text-center">
      <div className="container max-w-lg space-y-6">
        <div className="font-mono text-xs text-[#C6A03A] tracking-[0.2em] uppercase">
          404 — ROUTE ERROR
        </div>
        <h1 className="font-serif text-6xl text-[#F1EEE7] font-light">
          WRONG TURN.
        </h1>
        <p className="text-sm text-[#AAA59B] leading-relaxed font-light">
          The page or asset you are looking for has been moved or does not exist in our atelier directory.
        </p>
        <div className="pt-4">
          <Link to="/" className="btn-primary inline-flex">
            Return to Studio Home <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
