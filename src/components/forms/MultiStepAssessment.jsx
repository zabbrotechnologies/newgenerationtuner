import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, Shield, Car, Calendar, Sparkles, MessageSquare } from 'lucide-react';
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

  const getGoalLabel = (id) => goals.find(g => g.id === id)?.label || id;
  const getConditionLabel = (id) => conditions.find(c => c.id === id)?.label || id;
  const getTypeLabel = (id) => vehicleTypes.find(t => t.id === id)?.label || id;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null, refId: null });

    const refId = 'NGT-' + Math.floor(100000 + Math.random() * 900000);

    // Save to internal backend API
    try {
      await fetch('/api/assessment', {
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
          message: `Type: ${getTypeLabel(formData.vehicleType)}, Goal: ${getGoalLabel(formData.primaryGoal)}. Notes: ${formData.notes || 'None'}`
        })
      });
    } catch (err) {
      // Continue to WhatsApp redirect regardless of backend network state
    }

    localStorage.removeItem('ngt_assessment_draft');
    setStatus({
      loading: false,
      success: true,
      error: null,
      refId: refId
    });

    // Construct formatted WhatsApp message
    const waText = `*NEW GENERATION TUNERS — VEHICLE BOOKING INQUIRY*
━━━━━━━━━━━━━━━━━━━━
📁 *Ref Code:* ${refId}
👤 *Client Name:* ${formData.clientName}
📱 *Phone:* ${formData.clientPhone}
📧 *Email:* ${formData.clientEmail || 'Not Provided'}

🚗 *Vehicle Details:*
• *Make & Model:* ${formData.vehicleYear} ${formData.vehicleMake} ${formData.vehicleModel}
• *Body Type:* ${getTypeLabel(formData.vehicleType)}

🎯 *Service Required:*
• *Goal:* ${getGoalLabel(formData.primaryGoal)}
• *Current Condition:* ${getConditionLabel(formData.condition)}
📝 *Special Notes:* ${formData.notes || 'None'}
━━━━━━━━━━━━━━━━━━━━`;

    const cleanPhone = (studioCompany.phones?.primary || '919159944902').replace(/[^0-9]/g, '');
    const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(waText)}`;

    // Open WhatsApp in new tab after tiny delay for smooth UI feedback
    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 400);
  };

  return (
    <div className="bg-[#080808] border border-[rgba(255,255,255,0.12)] p-6 md:p-10 shadow-2xl relative">
      {/* Step Indicator Header */}
      <div className="flex justify-between items-center border-b border-[rgba(255,255,255,0.12)] pb-6 mb-8">
        <div>
          <div className="font-mono text-[10px] text-[#E10600] uppercase tracking-widest font-medium">
            DIAGNOSTIC ASSESSMENT PROTOCOL
          </div>
          <div className="font-display text-2xl text-[#FFFFFF] font-bold mt-1">
            STAGE 0{step} / 04
          </div>
        </div>

        {/* Progress Bar */}
        <div className="flex gap-1.5">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`h-1.5 w-8 transition-all ${
                s <= step ? 'bg-[#E10600]' : 'bg-white/10'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Success State */}
      {status.success ? (
        <div className="text-center py-12 space-y-6">
          <div className="w-16 h-16 bg-[#E10600]/20 border border-[#E10600] text-[#E10600] flex items-center justify-center mx-auto">
            <CheckCircle2 size={32} />
          </div>
          <div className="font-mono text-xs text-[#E10600] uppercase tracking-widest font-medium">
            BOOKING GENERATED · REF #{status.refId}
          </div>
          <h3 className="font-display text-3xl sm:text-4xl text-[#FFFFFF] font-bold tracking-tight">
            REDIRECTING TO WHATSAPP...
          </h3>
          <p className="font-body text-sm text-[#8D9398] max-w-md mx-auto leading-relaxed font-normal">
            Your vehicle diagnostic profile has been compiled. You are being redirected to our official Atelier WhatsApp channel (<span className="text-[#FFFFFF] font-body font-semibold">{studioCompany.phones?.primary}</span>) to confirm your slot.
          </p>
          <div className="pt-4 flex flex-wrap gap-4 justify-center">
            <a
              href={`https://wa.me/${(studioCompany.phones?.primary || '919159944902').replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-red inline-flex items-center gap-2"
            >
              <MessageSquare size={16} /> Open WhatsApp Direct ↗
            </a>
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
                  <label className="block font-body text-xs text-[#8D9398] mb-1.5 font-medium">Year *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 2024"
                    value={formData.vehicleYear}
                    onChange={(e) => setFormData({ ...formData, vehicleYear: e.target.value })}
                    className="w-full bg-[#000000] border border-[rgba(255,255,255,0.12)] px-4 py-3 font-body text-sm text-[#FFFFFF] focus:border-[#E10600] outline-none font-normal"
                  />
                </div>
                <div>
                  <label className="block font-body text-xs text-[#8D9398] mb-1.5 font-medium">Make *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Porsche / BMW"
                    value={formData.vehicleMake}
                    onChange={(e) => setFormData({ ...formData, vehicleMake: e.target.value })}
                    className="w-full bg-[#000000] border border-[rgba(255,255,255,0.12)] px-4 py-3 font-body text-sm text-[#FFFFFF] focus:border-[#E10600] outline-none font-normal"
                  />
                </div>
                <div>
                  <label className="block font-body text-xs text-[#8D9398] mb-1.5 font-medium">Model *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 911 GT3 / M4"
                    value={formData.vehicleModel}
                    onChange={(e) => setFormData({ ...formData, vehicleModel: e.target.value })}
                    className="w-full bg-[#000000] border border-[rgba(255,255,255,0.12)] px-4 py-3 font-body text-sm text-[#FFFFFF] focus:border-[#E10600] outline-none font-normal"
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
                          ? 'bg-[#E10600]/15 border-[#E10600] text-[#FFFFFF]'
                          : 'bg-[#000000] border-[rgba(255,255,255,0.08)] text-[#8D9398] hover:border-[rgba(255,255,255,0.2)]'
                      }`}
                    >
                      <span className="font-mono text-[11px] text-[#E10600] font-medium">{vt.num}</span>
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
                        ? 'bg-[#E10600]/15 border-[#E10600] text-[#FFFFFF]'
                        : 'bg-[#000000] border-[rgba(255,255,255,0.08)] text-[#8D9398] hover:border-[rgba(255,255,255,0.2)]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[11px] text-[#E10600] font-medium">{g.num}</span>
                      <span className="font-body text-xs font-medium">{g.label}</span>
                    </div>
                    <span className="text-[#E10600] font-display font-semibold">→</span>
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

          {/* STEP 3: VEHICLE CONDITION & SPECIAL REQUESTS */}
          {step === 3 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="space-y-1">
                <h4 className="font-display text-xl text-[#FFFFFF] font-bold">03 · Surface Condition &amp; Requests</h4>
                <p className="font-body text-xs text-[#8D9398] font-normal">
                  Estimate existing clear coat oxidation or mention any specific preferences.
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
                        ? 'bg-[#E10600]/15 border-[#E10600] text-[#FFFFFF]'
                        : 'bg-[#000000] border-[rgba(255,255,255,0.08)] text-[#8D9398] hover:border-[rgba(255,255,255,0.2)]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[11px] text-[#E10600] font-medium">{c.num}</span>
                      <span className="font-body text-xs font-medium">{c.label}</span>
                    </div>
                    <span className="font-mono text-[10px] text-[#E10600] font-medium">ACTIVE</span>
                  </button>
                ))}
              </div>

              <div>
                <label className="block font-mono text-[10px] tracking-[0.18em] uppercase text-[#8D9398] mb-1.5 font-medium">
                  SPECIAL REQUESTS / TIMELINE REQUIREMENTS (OPTIONAL)
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe visible swirl marks, rock chips, preferred booking dates, or custom requests..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#000000] border border-[rgba(255,255,255,0.12)] p-3 font-body text-sm text-[#FFFFFF] focus:border-[#E10600] outline-none font-normal"
                />
              </div>

              <div className="pt-4 flex justify-between">
                <button type="button" onClick={() => setStep(2)} className="btn-ghost-dark">
                  ← Back
                </button>
                <button type="button" onClick={() => setStep(4)} className="btn-red">
                  Continue to Contact Details ↗
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: CONTACT DETAILS & ONE-CLICK WHATSAPP BOOKING */}
          {step === 4 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="space-y-1">
                <h4 className="font-display text-xl text-[#FFFFFF] font-bold">04 · Contact Information</h4>
                <p className="font-body text-xs text-[#8D9398] font-normal">
                  Your booking details will be sent directly to our studio team on WhatsApp.
                </p>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block font-body text-xs text-[#8D9398] mb-1.5 font-medium">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Marcus Vance"
                    value={formData.clientName}
                    onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                    className="w-full bg-[#000000] border border-[rgba(255,255,255,0.12)] px-4 py-3 font-body text-sm text-[#FFFFFF] focus:border-[#E10600] outline-none font-normal"
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
                    className="w-full bg-[#000000] border border-[rgba(255,255,255,0.12)] px-4 py-3 font-body text-sm text-[#FFFFFF] focus:border-[#E10600] outline-none font-normal"
                  />
                </div>
                <div>
                  <label className="block font-body text-xs text-[#8D9398] mb-1.5 font-medium">Email Address (Optional)</label>
                  <input
                    type="email"
                    placeholder="client@domain.com"
                    value={formData.clientEmail}
                    onChange={(e) => setFormData({ ...formData, clientEmail: e.target.value })}
                    className="w-full bg-[#000000] border border-[rgba(255,255,255,0.12)] px-4 py-3 font-body text-sm text-[#FFFFFF] focus:border-[#E10600] outline-none font-normal"
                  />
                </div>
              </div>

              <div className="p-3.5 bg-[#000000] border border-[rgba(255,255,255,0.08)] flex items-center gap-3">
                <MessageSquare className="text-[#25D366] shrink-0" size={18} />
                <span className="font-body text-xs text-[#8D9398]">
                  Submitting will instantly open WhatsApp pre-filled with all your vehicle details.
                </span>
              </div>

              <div className="pt-4 flex justify-between items-center">
                <button type="button" onClick={() => setStep(3)} className="btn-ghost-dark">
                  ← Back
                </button>
                <button
                  type="submit"
                  disabled={status.loading}
                  className="btn-red inline-flex items-center gap-2"
                >
                  <MessageSquare size={16} />
                  {status.loading ? 'Generating Booking...' : 'Book via WhatsApp ↗'}
                </button>
              </div>
            </div>
          )}

        </form>
      )}
    </div>
  );
}

