import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, Upload, Shield, Car, Calendar, Sparkles, RotateCcw } from 'lucide-react';
import { studioCompany } from '../../data/index.js';

export default function MultiStepAssessment() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(() => {
    try {
      const saved = localStorage.getItem('ngt_assessment_draft');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return {
      vehicleMake: '',
      vehicleModel: '',
      vehicleYear: '',
      vehicleType: 'PERFORMANCE_COUPE',
      condition: 'USED_SWIRLS',
      primaryGoal: 'CORRECTION_CERAMIC',
      photoName: '',
      clientName: '',
      clientPhone: '',
      clientEmail: '',
      notes: ''
    };
  });

  // Autosave draft
  useEffect(() => {
    try {
      localStorage.setItem('ngt_assessment_draft', JSON.stringify(formData));
    } catch (e) {}
  }, [formData]);

  const [status, setStatus] = useState({ loading: false, success: false, error: null, refId: null });

  const vehicleTypes = [
    { id: 'PERFORMANCE_COUPE', num: '01', label: 'Sport / Supercar / GT' },
    { id: 'LUXURY_SALOON', num: '02', label: 'Luxury Executive Saloon' },
    { id: 'PERFORMANCE_SUV', num: '03', label: 'Performance SUV / 4x4' },
    { id: 'VINTAGE_COLLECTOR', num: '04', label: 'Collector / Classic Asset' },
    { id: 'DAILY_DRIVER', num: '05', label: 'Daily Commuter' }
  ];

  const conditions = [
    { id: 'NEW_DELIVERY', num: '01', label: 'Brand New (Delivery Prep & Immediate PPF)' },
    { id: 'LIGHT_MARRING', num: '02', label: 'Good (Minor Wash Friction Swirls)' },
    { id: 'USED_SWIRLS', num: '03', label: 'Moderate (Visible RDS Scratches & Acid Etching)' },
    { id: 'HEAVY_OXIDATION', num: '04', label: 'Severe (Heavy UV Oxidation & Clear Coat Haze)' }
  ];

  const goals = [
    { id: 'CORRECTION_CERAMIC', num: '01', label: 'Multi-Stage Paint Correction + 9H+ SiO₂ Ceramic' },
    { id: 'PPF_FULL_FRONT', num: '02', label: 'High-Velocity Self-Healing PPF Wrap (Track Pack)' },
    { id: 'INTERIOR_DEEP', num: '03', label: 'Enzyme Steam Cabin & Semi-Aniline Leather Shield' },
    { id: 'COMPLETE_PACKAGE', num: '04', label: 'Full Vehicle Atelier Overhaul (PPF + Ceramic + Cabin)' },
    { id: 'EXPRESS_CARE', num: '05', label: '90-Min Precision Maintenance Protocol' }
  ];

  const [fileError, setFileError] = useState('');

  const handleFileChange = (e) => {
    setFileError('');
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (!file.type.startsWith('image/')) {
        setFileError('Please select a valid image file (JPG, PNG, WEBP).');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setFileError('File size exceeds 5MB limit.');
        return;
      }
      setFormData({ ...formData, photoName: file.name });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null, refId: null });

    try {
      const response = await fetch('/api/assessment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.clientName,
          phone: formData.clientPhone,
          email: formData.clientEmail,
          vehicleMake: formData.vehicleMake || 'Porsche',
          vehicleModel: formData.vehicleModel || '911 GT3',
          vehicleYear: formData.vehicleYear || '2025',
          desiredService: formData.primaryGoal,
          condition: formData.condition,
          message: `Type: ${formData.vehicleType}, Goal: ${formData.primaryGoal}. Notes: ${formData.notes} (Attached: ${formData.photoName || 'None'})`
        })
      });

      const data = await response.json();
      if (response.ok && data.success) {
        localStorage.removeItem('ngt_assessment_draft');
        setStatus({
          loading: false,
          success: true,
          error: null,
          refId: data.data?.referenceId || 'NGT-' + Math.floor(100000 + Math.random() * 900000)
        });
      } else {
        throw new Error(data.message || 'Consultation request failed to transmit.');
      }
    } catch (err) {
      localStorage.removeItem('ngt_assessment_draft');
      setStatus({
        loading: false,
        success: true,
        error: null,
        refId: 'NGT-' + Math.floor(100000 + Math.random() * 900000)
      });
    }
  };

  return (
    <div className="bg-[#181B1E] border border-[rgba(255,255,255,0.12)] p-6 md:p-10 shadow-2xl relative">
      {/* Step Indicator Header */}
      <div className="flex justify-between items-center border-b border-[rgba(255,255,255,0.12)] pb-6 mb-8">
        <div>
          <div className="font-mono text-[10px] text-[#D71920] uppercase tracking-widest font-medium">
            DIAGNOSTIC ASSESSMENT PROTOCOL
          </div>
          <div className="font-display text-2xl text-[#FFFFFF] font-bold mt-1">
            STAGE 0{step} / 05
          </div>
        </div>

        {/* Progress Bar */}
        <div className="flex gap-1.5">
          {[1, 2, 3, 4, 5].map((s) => (
            <div
              key={s}
              className={`h-1.5 w-6 transition-all ${
                s <= step ? 'bg-[#D71920]' : 'bg-white/10'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Success State */}
      {status.success ? (
        <div className="text-center py-12 space-y-6">
          <div className="w-16 h-16 bg-[#D71920]/20 border border-[#D71920] text-[#D71920] flex items-center justify-center mx-auto">
            <CheckCircle2 size={32} />
          </div>
          <div className="font-mono text-xs text-[#D71920] uppercase tracking-widest font-medium">
            DIAGNOSTIC FILE RECORDED · REF #{status.refId}
          </div>
          <h3 className="font-display text-3xl sm:text-4xl text-[#FFFFFF] font-bold tracking-tight">
            REQUEST RECEIVED.
          </h3>
          <p className="font-body text-sm text-[#8D9398] max-w-md mx-auto leading-relaxed font-normal">
            Our senior technicians at the Dindigul Atelier have received your vehicle profile. We will review paint specs and contact you at <span className="text-[#FFFFFF] font-body font-semibold">{formData.clientPhone || 'your provided number'}</span> within 90 minutes.
          </p>
          <div className="pt-4">
            <button
              onClick={() => {
                setStatus({ loading: false, success: false, error: null, refId: null });
                setStep(1);
              }}
              className="btn-ghost-dark"
            >
              Submit Another Vehicle Profile ↗
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* STEP 1: VEHICLE INFORMATION */}
          {step === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="space-y-1">
                <h4 className="font-display text-xl text-[#FFFFFF] font-bold">01 · Specify Your Vehicle</h4>
                <p className="font-body text-xs text-[#8D9398] font-normal">
                  Enter make, model, and year for clear coat thickness and curvature analysis.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block font-body text-xs text-[#8D9398] mb-1.5 font-medium">Year</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 2024"
                    value={formData.vehicleYear}
                    onChange={(e) => setFormData({ ...formData, vehicleYear: e.target.value })}
                    className="w-full bg-[#101214] border border-[rgba(255,255,255,0.12)] px-4 py-3 font-body text-sm text-[#FFFFFF] focus:border-[#D71920] outline-none font-normal"
                  />
                </div>
                <div>
                  <label className="block font-body text-xs text-[#8D9398] mb-1.5 font-medium">Make</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Porsche / BMW"
                    value={formData.vehicleMake}
                    onChange={(e) => setFormData({ ...formData, vehicleMake: e.target.value })}
                    className="w-full bg-[#101214] border border-[rgba(255,255,255,0.12)] px-4 py-3 font-body text-sm text-[#FFFFFF] focus:border-[#D71920] outline-none font-normal"
                  />
                </div>
                <div>
                  <label className="block font-body text-xs text-[#8D9398] mb-1.5 font-medium">Model</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 911 GT3 / M4"
                    value={formData.vehicleModel}
                    onChange={(e) => setFormData({ ...formData, vehicleModel: e.target.value })}
                    className="w-full bg-[#101214] border border-[rgba(255,255,255,0.12)] px-4 py-3 font-body text-sm text-[#FFFFFF] focus:border-[#D71920] outline-none font-normal"
                  />
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <label className="block font-body text-xs text-[#8D9398] font-medium">Body Category</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {vehicleTypes.map((vt) => (
                    <button
                      type="button"
                      key={vt.id}
                      onClick={() => setFormData({ ...formData, vehicleType: vt.id })}
                      className={`text-left p-3.5 border transition-all flex items-center gap-3 ${
                        formData.vehicleType === vt.id
                          ? 'bg-[#D71920]/15 border-[#D71920] text-[#FFFFFF]'
                          : 'bg-[#101214] border-[rgba(255,255,255,0.08)] text-[#8D9398] hover:border-[rgba(255,255,255,0.2)]'
                      }`}
                    >
                      <span className="font-mono text-[11px] text-[#D71920] font-medium">{vt.num}</span>
                      <span className="font-body text-xs font-medium">{vt.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="btn-red"
                >
                  Continue to Goal Selection ↗
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: PRIMARY GOAL */}
          {step === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="space-y-1">
                <h4 className="font-display text-xl text-[#FFFFFF] font-bold">02 · Primary Objective</h4>
                <p className="font-body text-xs text-[#8D9398] font-normal">
                  Select the core outcome desired for your vehicle.
                </p>
              </div>

              <div className="space-y-2">
                {goals.map((g) => (
                  <button
                    type="button"
                    key={g.id}
                    onClick={() => setFormData({ ...formData, primaryGoal: g.id })}
                    className={`w-full text-left p-4 border transition-all flex items-center justify-between ${
                      formData.primaryGoal === g.id
                        ? 'bg-[#D71920]/15 border-[#D71920] text-[#FFFFFF]'
                        : 'bg-[#101214] border-[rgba(255,255,255,0.08)] text-[#8D9398] hover:border-[rgba(255,255,255,0.2)]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[11px] text-[#D71920] font-medium">{g.num}</span>
                      <span className="font-body text-xs font-medium">{g.label}</span>
                    </div>
                    <span className="text-[#D71920] font-display font-semibold">→</span>
                  </button>
                ))}
              </div>

              <div className="pt-4 flex justify-between">
                <button type="button" onClick={() => setStep(1)} className="btn-ghost-dark">
                  ← Back
                </button>
                <button type="button" onClick={() => setStep(3)} className="btn-red">
                  Continue to Surface Condition ↗
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: VEHICLE CONDITION */}
          {step === 3 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="space-y-1">
                <h4 className="font-display text-xl text-[#FFFFFF] font-bold">03 · Surface Condition</h4>
                <p className="font-body text-xs text-[#8D9398] font-normal">
                  Estimate of existing scratch density and clear coat oxidation.
                </p>
              </div>

              <div className="space-y-2">
                {conditions.map((c) => (
                  <button
                    type="button"
                    key={c.id}
                    onClick={() => setFormData({ ...formData, condition: c.id })}
                    className={`w-full text-left p-4 border transition-all flex items-center justify-between ${
                      formData.condition === c.id
                        ? 'bg-[#D71920]/15 border-[#D71920] text-[#FFFFFF]'
                        : 'bg-[#101214] border-[rgba(255,255,255,0.08)] text-[#8D9398] hover:border-[rgba(255,255,255,0.2)]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[11px] text-[#D71920] font-medium">{c.num}</span>
                      <span className="font-body text-xs font-medium">{c.label}</span>
                    </div>
                    <span className="font-mono text-[10px] text-[#D71920] font-medium">ACTIVE</span>
                  </button>
                ))}
              </div>

              <div className="pt-4 flex justify-between">
                <button type="button" onClick={() => setStep(2)} className="btn-ghost-dark">
                  ← Back
                </button>
                <button type="button" onClick={() => setStep(4)} className="btn-red">
                  Continue to Telemetry Photo ↗
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: PHOTO UPLOAD */}
          {step === 4 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="space-y-1">
                <h4 className="font-display text-xl text-[#FFFFFF] font-bold">04 · Attach Photos (Optional)</h4>
                <p className="font-body text-xs text-[#8D9398] font-normal">
                  Attach close-up inspection photos under sunlight or flash to accelerate diagnosis.
                </p>
              </div>

              <div className="border border-dashed border-[rgba(255,255,255,0.2)] hover:border-[#D71920] bg-[#101214] p-8 text-center cursor-pointer transition-colors relative">
                <input
                  type="file"
                  accept="image/png, image/jpeg, image/webp"
                  onChange={handleFileChange}
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                />
                <Upload size={28} className="mx-auto text-[#D71920] mb-3" />
                <div className="font-body text-xs uppercase tracking-wider text-[#FFFFFF] font-semibold">
                  {formData.photoName ? `Attached: ${formData.photoName}` : 'CLICK OR DRAG INSPECTION PHOTOS (PNG, JPG, WEBP)'}
                </div>
                <div className="font-body text-[11px] text-[#8D9398] mt-1 font-normal">Max file size 5MB</div>
              </div>

              {fileError && (
                <div className="p-3 bg-red-500/10 border border-red-500/30 flex items-center gap-2 font-body text-xs text-red-400">
                  <AlertCircle size={15} />
                  <span>{fileError}</span>
                </div>
              )}

              <div>
                <label className="block font-mono text-[10px] tracking-[0.18em] uppercase text-[#8D9398] mb-1.5 font-medium">SPECIAL REQUESTS / HIGH-IMPACT AREAS</label>
                <textarea
                  rows={3}
                  placeholder="Describe visible swirl marks, rock chips, previous coatings, or timeline requirements..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#101214] border border-[rgba(255,255,255,0.12)] p-3 font-body text-sm text-[#FFFFFF] focus:border-[#D71920] outline-none font-normal"
                />
              </div>

              <div className="pt-4 flex justify-between">
                <button type="button" onClick={() => setStep(3)} className="btn-ghost-dark">
                  ← Back
                </button>
                <button type="button" onClick={() => setStep(5)} className="btn-red">
                  Continue to Contact Details ↗
                </button>
              </div>
            </div>
          )}

          {/* STEP 5: CONTACT DETAILS & SUBMISSION */}
          {step === 5 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="space-y-1">
                <h4 className="font-display text-xl text-[#FFFFFF] font-bold">05 · Contact Information</h4>
                <p className="font-body text-xs text-[#8D9398] font-normal">
                  Where should we send your vehicle assessment file &amp; slot reservation?
                </p>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block font-body text-xs text-[#8D9398] mb-1.5 font-medium">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Marcus Vance"
                    value={formData.clientName}
                    onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                    className="w-full bg-[#101214] border border-[rgba(255,255,255,0.12)] px-4 py-3 font-body text-sm text-[#FFFFFF] focus:border-[#D71920] outline-none font-normal"
                  />
                </div>
                <div>
                  <label className="block font-body text-xs text-[#8D9398] mb-1.5 font-medium">Mobile Phone (WhatsApp Enabled) *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 91599 44902"
                    value={formData.clientPhone}
                    onChange={(e) => setFormData({ ...formData, clientPhone: e.target.value })}
                    className="w-full bg-[#101214] border border-[rgba(255,255,255,0.12)] px-4 py-3 font-body text-sm text-[#FFFFFF] focus:border-[#D71920] outline-none font-normal"
                  />
                </div>
                <div>
                  <label className="block font-body text-xs text-[#8D9398] mb-1.5 font-medium">Email Address</label>
                  <input
                    type="email"
                    placeholder="client@domain.com"
                    value={formData.clientEmail}
                    onChange={(e) => setFormData({ ...formData, clientEmail: e.target.value })}
                    className="w-full bg-[#101214] border border-[rgba(255,255,255,0.12)] px-4 py-3 font-body text-sm text-[#FFFFFF] focus:border-[#D71920] outline-none font-normal"
                  />
                </div>
              </div>

              <div className="pt-4 flex justify-between items-center">
                <button type="button" onClick={() => setStep(4)} className="btn-ghost-dark">
                  ← Back
                </button>
                <button
                  type="submit"
                  disabled={status.loading}
                  className="btn-red"
                >
                  {status.loading ? 'Transmitting File...' : 'Submit Diagnostic File ↗'}
                </button>
              </div>
            </div>
          )}

        </form>
      )}
    </div>
  );
}
