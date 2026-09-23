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
    <div className="bg-[#080808] border border-[rgba(255,255,255,0.12)] p-4 sm:p-7 md:p-10 rounded-2xl shadow-2xl relative">
      {/* Step Indicator Header */}
      <div className="flex justify-between items-center border-b border-[rgba(255,255,255,0.12)] pb-4 sm:pb-6 mb-6 sm:mb-8">
        <div>
          <div className="font-mono text-[9px] sm:text-[10px] text-[#E10600] uppercase tracking-widest font-medium">
            DIAGNOSTIC ASSESSMENT PROTOCOL
          </div>
          <div className="font-display text-xl sm:text-2xl text-[#FFFFFF] font-bold mt-0.5 sm:mt-1">
            STAGE 0{step} / 04
          </div>
        </div>

        {/* Progress Bar */}
        <div className="flex gap-1 sm:gap-1.5">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`h-1.5 w-5 sm:w-8 transition-all rounded-full ${
                s <= step ? 'bg-[#E10600]' : 'bg-white/10'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Success State */}
      {status.success ? (
        <div className="text-center py-8 sm:py-12 space-y-4 sm:space-y-6">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#E10600]/20 border border-[#E10600] text-[#E10600] flex items-center justify-center mx-auto rounded-full">
            <CheckCircle2 size={28} />
          </div>
          <div className="font-mono text-xs text-[#E10600] uppercase tracking-widest font-medium">
            BOOKING GENERATED · REF #{status.refId}
          </div>
          <h3 className="font-display text-2xl sm:text-4xl text-[#FFFFFF] font-bold tracking-tight">
            REDIRECTING TO WHATSAPP...
          </h3>
          <p className="font-body text-xs sm:text-sm text-[#8D9398] max-w-md mx-auto leading-relaxed font-normal">
            Your vehicle diagnostic profile has been compiled. You are being redirected to our official Atelier WhatsApp channel (<span className="text-[#FFFFFF] font-body font-semibold">{studioCompany.phones?.primary}</span>) to confirm your slot.
          </p>
          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`https://wa.me/${(studioCompany.phones?.primary || '919159944902').replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-red inline-flex items-center justify-center gap-2"
            >
              <MessageSquare size={16} /> Open WhatsApp Direct ↗
            </a>
            <button
              onClick={() => {
                setStatus({ loading: false, success: false, error: null, refId: null });
                setStep(1);
              }}
              className="btn-ghost-dark justify-center"
            >
              Submit Another Vehicle Profile ↗
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
          
          {/* STEP 1: VEHICLE INFORMATION */}
          {step === 1 && (
            <div className="space-y-5 sm:space-y-6 animate-fadeIn">
              <div className="space-y-1">
                <h4 className="font-display text-lg sm:text-xl text-[#FFFFFF] font-bold">01 · Specify Your Vehicle</h4>
                <p className="font-body text-xs text-[#8D9398] font-normal">
                  Enter make, model, and year for clear coat thickness and curvature analysis.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                <div>
                  <label className="block font-body text-xs text-[#8D9398] mb-1 font-medium">Year *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 2024"
                    value={formData.vehicleYear}
                    onChange={(e) => setFormData({ ...formData, vehicleYear: e.target.value })}
                    className="w-full bg-[#000000] border border-[rgba(255,255,255,0.12)] px-3.5 py-2.5 sm:py-3 font-body text-xs sm:text-sm text-[#FFFFFF] focus:border-[#E10600] outline-none font-normal rounded"
                  />
                </div>
                <div>
                  <label className="block font-body text-xs text-[#8D9398] mb-1 font-medium">Make *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Porsche / BMW"
                    value={formData.vehicleMake}
                    onChange={(e) => setFormData({ ...formData, vehicleMake: e.target.value })}
                    className="w-full bg-[#000000] border border-[rgba(255,255,255,0.12)] px-3.5 py-2.5 sm:py-3 font-body text-xs sm:text-sm text-[#FFFFFF] focus:border-[#E10600] outline-none font-normal rounded"
                  />
                </div>
                <div>
                  <label className="block font-body text-xs text-[#8D9398] mb-1 font-medium">Model *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 911 GT3 / M4"
                    value={formData.vehicleModel}
                    onChange={(e) => setFormData({ ...formData, vehicleModel: e.target.value })}
                    className="w-full bg-[#000000] border border-[rgba(255,255,255,0.12)] px-3.5 py-2.5 sm:py-3 font-body text-xs sm:text-sm text-[#FFFFFF] focus:border-[#E10600] outline-none font-normal rounded"
                  />
                </div>
              </div>

              <div className="space-y-2 pt-1">
                <label className="block font-body text-xs text-[#8D9398] font-medium">Body Category</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {vehicleTypes.map((vt) => (
                    <button
                      type="button"
                      key={vt.id}
                      onClick={() => setFormData({ ...formData, vehicleType: vt.id })}
                      className={`text-left p-3 sm:p-3.5 border transition-all flex items-center gap-3 rounded ${
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

              <div className="pt-2 sm:pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="btn-red w-full sm:w-auto justify-center"
                >
                  Continue to Goal Selection ↗
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: PRIMARY GOAL */}
          {step === 2 && (
            <div className="space-y-5 sm:space-y-6 animate-fadeIn">
              <div className="space-y-1">
                <h4 className="font-display text-lg sm:text-xl text-[#FFFFFF] font-bold">02 · Primary Objective</h4>
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
                    className={`w-full text-left p-3.5 sm:p-4 border transition-all flex items-center justify-between rounded ${
                      formData.primaryGoal === g.id
                        ? 'bg-[#E10600]/15 border-[#E10600] text-[#FFFFFF]'
                        : 'bg-[#000000] border-[rgba(255,255,255,0.08)] text-[#8D9398] hover:border-[rgba(255,255,255,0.2)]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <span className="font-mono text-[11px] text-[#E10600] font-medium">{g.num}</span>
                      <span className="font-body text-xs font-medium">{g.label}</span>
                    </div>
                    <span className="text-[#E10600] font-display font-semibold ml-2">→</span>
                  </button>
                ))}
              </div>

              <div className="pt-2 sm:pt-4 flex flex-col-reverse sm:flex-row gap-2.5 sm:gap-0 justify-between">
                <button type="button" onClick={() => setStep(1)} className="btn-ghost-dark justify-center">
                  ← Back
                </button>
                <button type="button" onClick={() => setStep(3)} className="btn-red justify-center">
                  Continue to Surface Condition ↗
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: VEHICLE CONDITION & SPECIAL REQUESTS */}
          {step === 3 && (
            <div className="space-y-5 sm:space-y-6 animate-fadeIn">
              <div className="space-y-1">
                <h4 className="font-display text-lg sm:text-xl text-[#FFFFFF] font-bold">03 · Surface Condition &amp; Requests</h4>
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
                    className={`w-full text-left p-3.5 sm:p-4 border transition-all flex items-center justify-between rounded ${
                      formData.condition === c.id
                        ? 'bg-[#E10600]/15 border-[#E10600] text-[#FFFFFF]'
                        : 'bg-[#000000] border-[rgba(255,255,255,0.08)] text-[#8D9398] hover:border-[rgba(255,255,255,0.2)]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <span className="font-mono text-[11px] text-[#E10600] font-medium">{c.num}</span>
                      <span className="font-body text-xs font-medium">{c.label}</span>
                    </div>
                    <span className="font-mono text-[10px] text-[#E10600] font-medium ml-2">ACTIVE</span>
                  </button>
                ))}
              </div>

              <div>
                <label className="block font-mono text-[9px] sm:text-[10px] tracking-[0.18em] uppercase text-[#8D9398] mb-1.5 font-medium">
                  SPECIAL REQUESTS / TIMELINE REQUIREMENTS (OPTIONAL)
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe visible swirl marks, rock chips, preferred booking dates, or custom requests..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#000000] border border-[rgba(255,255,255,0.12)] p-3 font-body text-xs sm:text-sm text-[#FFFFFF] focus:border-[#E10600] outline-none font-normal rounded"
                />
              </div>

              <div className="pt-2 sm:pt-4 flex flex-col-reverse sm:flex-row gap-2.5 sm:gap-0 justify-between">
                <button type="button" onClick={() => setStep(2)} className="btn-ghost-dark justify-center">
                  ← Back
                </button>
                <button type="button" onClick={() => setStep(4)} className="btn-red justify-center">
                  Continue to Contact Details ↗
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: CONTACT DETAILS & ONE-CLICK WHATSAPP BOOKING */}
          {step === 4 && (
            <div className="space-y-5 sm:space-y-6 animate-fadeIn">
              <div className="space-y-1">
                <h4 className="font-display text-lg sm:text-xl text-[#FFFFFF] font-bold">04 · Contact Information</h4>
                <p className="font-body text-xs text-[#8D9398] font-normal">
                  Your booking details will be sent directly to our studio team on WhatsApp.
                </p>
              </div>

              <div className="space-y-2.5 sm:space-y-3">
                <div>
                  <label className="block font-body text-xs text-[#8D9398] mb-1 font-medium">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Marcus Vance"
                    value={formData.clientName}
                    onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                    className="w-full bg-[#000000] border border-[rgba(255,255,255,0.12)] px-3.5 py-2.5 sm:py-3 font-body text-xs sm:text-sm text-[#FFFFFF] focus:border-[#E10600] outline-none font-normal rounded"
                  />
                </div>
                <div>
                  <label className="block font-body text-xs text-[#8D9398] mb-1 font-medium">Mobile Phone (WhatsApp Enabled) *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 91599 44902"
                    value={formData.clientPhone}
                    onChange={(e) => setFormData({ ...formData, clientPhone: e.target.value })}
                    className="w-full bg-[#000000] border border-[rgba(255,255,255,0.12)] px-3.5 py-2.5 sm:py-3 font-body text-xs sm:text-sm text-[#FFFFFF] focus:border-[#E10600] outline-none font-normal rounded"
                  />
                </div>
                <div>
                  <label className="block font-body text-xs text-[#8D9398] mb-1 font-medium">Email Address (Optional)</label>
                  <input
                    type="email"
                    placeholder="client@domain.com"
                    value={formData.clientEmail}
                    onChange={(e) => setFormData({ ...formData, clientEmail: e.target.value })}
                    className="w-full bg-[#000000] border border-[rgba(255,255,255,0.12)] px-3.5 py-2.5 sm:py-3 font-body text-xs sm:text-sm text-[#FFFFFF] focus:border-[#E10600] outline-none font-normal rounded"
                  />
                </div>
              </div>

              <div className="p-3 bg-[#000000] border border-[rgba(255,255,255,0.08)] flex items-center gap-2.5 rounded">
                <MessageSquare className="text-[#25D366] shrink-0" size={16} />
                <span className="font-body text-[11px] sm:text-xs text-[#8D9398]">
                  Submitting will instantly open WhatsApp pre-filled with all your vehicle details.
                </span>
              </div>

              <div className="pt-2 sm:pt-4 flex flex-col-reverse sm:flex-row gap-2.5 sm:gap-0 justify-between items-stretch sm:items-center">
                <button type="button" onClick={() => setStep(3)} className="btn-ghost-dark justify-center">
                  ← Back
                </button>
                <button
                  type="submit"
                  disabled={status.loading}
                  className="btn-red inline-flex items-center justify-center gap-2"
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

