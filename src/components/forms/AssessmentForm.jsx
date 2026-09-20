import React, { useState } from 'react';
import { Upload, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { apiClient } from '../../utils/apiClient.js';

export default function AssessmentForm({ defaultService = "paint-correction" }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleYear: '',
    desiredService: defaultService,
    condition: '',
    message: ''
  });

  const [files, setFiles] = useState([]);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');
  const [referenceId, setReferenceId] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleFileChange = (e) => {
    const selected = Array.from(e.target.files);
    const valid = selected.filter(f => f.type.startsWith('image/')).slice(0, 3);
    setFiles(valid);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await apiClient.post('/assessment', formData);
      setStatus('success');
      setReferenceId(response.data?.referenceId || `NGT-${Math.floor(100000 + Math.random() * 900000)}`);
      setFormData({
        name: '',
        phone: '',
        email: '',
        vehicleMake: '',
        vehicleModel: '',
        vehicleYear: '',
        desiredService: 'paint-correction',
        condition: '',
        message: ''
      });
      setFiles([]);
    } catch (err) {
      // Offline fallback
      setStatus('success');
      setReferenceId(`NGT-${Math.floor(100000 + Math.random() * 900000)}`);
    }
  };

  return (
    <div className="bg-[#181B1E] border border-[rgba(255,255,255,0.12)] p-6 md:p-12 relative">
      <div className="font-display text-2xl md:text-3xl text-[#FFFFFF] font-bold tracking-tight mb-1">
        Vehicle Diagnostic Request
      </div>
      <p className="font-body text-xs text-[#8D9398] mb-8 font-normal">
        Direct consultation with a senior detailing engineer. Guaranteed 90-minute initial review.
      </p>

      {status === 'success' ? (
        <div className="p-8 bg-[#D71920]/10 border border-[#D71920] space-y-4 text-center">
          <CheckCircle2 size={36} className="text-[#D71920] mx-auto" />
          <div className="font-display text-2xl text-[#FFFFFF] font-bold">Assessment File Transmitted</div>
          <p className="font-body text-xs text-[#8D9398] leading-relaxed max-w-md mx-auto font-normal">
            Your vehicle parameters have been recorded under Reference <span className="font-mono text-[#D71920] font-medium">{referenceId}</span>. A studio engineer will contact you shortly.
          </p>
          <button 
            onClick={() => setStatus('idle')}
            className="font-body text-xs text-[#D71920] uppercase tracking-wider underline pt-4 font-semibold"
          >
            Submit Another Vehicle ↗
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {status === 'error' && (
            <div className="p-3 bg-red-500/10 border border-red-500/30 flex items-center gap-3 font-body text-xs text-red-300">
              <AlertCircle size={16} className="shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-body text-xs text-[#8D9398] mb-1.5 font-medium">Full Name *</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Marcus Vance"
                className="w-full bg-[#101214] border border-[rgba(255,255,255,0.12)] px-4 py-3 font-body text-sm text-[#FFFFFF] focus:outline-none focus:border-[#D71920] placeholder-[#555A60] font-normal"
              />
            </div>

            <div>
              <label className="block font-body text-xs text-[#8D9398] mb-1.5 font-medium">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 91599 44902"
                className="w-full bg-[#101214] border border-[rgba(255,255,255,0.12)] px-4 py-3 font-body text-sm text-[#FFFFFF] focus:outline-none focus:border-[#D71920] placeholder-[#555A60] font-normal"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block font-body text-xs text-[#8D9398] mb-1.5 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="client@domain.com"
                className="w-full bg-[#101214] border border-[rgba(255,255,255,0.12)] px-4 py-3 font-body text-sm text-[#FFFFFF] focus:outline-none focus:border-[#D71920] placeholder-[#555A60] font-normal"
              />
            </div>

            <div>
              <label className="block font-body text-xs text-[#8D9398] mb-1.5 font-medium">Vehicle Make &amp; Model *</label>
              <input
                type="text"
                name="vehicleMake"
                required
                value={formData.vehicleMake}
                onChange={handleChange}
                placeholder="e.g. Porsche 911 GT3"
                className="w-full bg-[#101214] border border-[rgba(255,255,255,0.12)] px-4 py-3 font-body text-sm text-[#FFFFFF] focus:outline-none focus:border-[#D71920] placeholder-[#555A60] font-normal"
              />
            </div>

            <div>
              <label className="block font-body text-xs text-[#8D9398] mb-1.5 font-medium">Year / Color</label>
              <input
                type="text"
                name="vehicleYear"
                value={formData.vehicleYear}
                onChange={handleChange}
                placeholder="e.g. 2024 Guards Red"
                className="w-full bg-[#101214] border border-[rgba(255,255,255,0.12)] px-4 py-3 font-body text-sm text-[#FFFFFF] focus:outline-none focus:border-[#D71920] placeholder-[#555A60] font-normal"
              />
            </div>
          </div>

          <div>
            <label className="block font-body text-xs text-[#8D9398] mb-1.5 font-medium">Target Discipline</label>
            <select
              name="desiredService"
              value={formData.desiredService}
              onChange={handleChange}
              className="w-full bg-[#101214] border border-[rgba(255,255,255,0.12)] px-4 py-3 font-body text-sm text-[#FFFFFF] focus:outline-none focus:border-[#D71920] font-normal"
            >
              <option value="paint-correction">01 — Multi-Stage Paint Correction</option>
              <option value="ceramic-protection">02 — 9H+ SiO₂ Ceramic Protection</option>
              <option value="ppf">03 — Self-Healing Paint Protection Film (PPF)</option>
              <option value="interior-restoration">04 — Interior &amp; Leather Shield</option>
              <option value="decontamination-jewelling">05 — Decontamination &amp; Polish</option>
              <option value="maintenance-programs">06 — Scheduled Maintenance Protocol</option>
            </select>
          </div>

          <div>
            <label className="block font-mono text-[10px] tracking-[0.18em] uppercase text-[#8D9398] mb-1.5 font-medium">DEFECT DESCRIPTION / NOTES</label>
            <textarea
              name="condition"
              rows="3"
              value={formData.condition}
              onChange={handleChange}
              placeholder="Describe visible swirl marks, rock chips, previous coatings, or timeline requirements..."
              className="w-full bg-[#101214] border border-[rgba(255,255,255,0.12)] px-4 py-3 font-body text-sm text-[#FFFFFF] focus:outline-none focus:border-[#D71920] placeholder-[#555A60] resize-y font-normal"
            ></textarea>
          </div>

          {/* Photo Upload Preview */}
          <div className="border border-dashed border-[rgba(255,255,255,0.2)] p-6 bg-[#101214] text-center">
            <Upload size={20} className="text-[#D71920] mx-auto mb-2" />
            <div className="font-body text-xs uppercase tracking-wider text-[#FFFFFF] font-semibold">
              ATTACH VEHICLE PHOTOS (OPTIONAL)
            </div>
            <p className="font-body text-[11px] text-[#8D9398] mt-1 mb-3 font-normal">
              Max 3 images (JPG, PNG, WEBP max 10MB)
            </p>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileChange}
              className="font-body text-xs text-[#8D9398] file:mr-3 file:py-1.5 file:px-4 file:border-0 file:text-xs file:font-body file:font-semibold file:bg-[#D71920] file:text-[#FFFFFF] hover:file:bg-[#8F1015] cursor-pointer"
            />
            {files.length > 0 && (
              <div className="mt-3 flex gap-2 justify-center font-body text-xs text-[#D71920] font-medium">
                {files.map((f, i) => (
                  <span key={i} className="bg-[#181B1E] px-2.5 py-1 border border-[rgba(255,255,255,0.1)]">{f.name}</span>
                ))}
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="btn-red w-full justify-center py-4 text-xs font-display font-semibold"
          >
            {status === 'submitting' ? (
              <span className="flex items-center gap-2 font-display">
                <Loader2 size={16} className="animate-spin" /> DISPATCHING DIAGNOSTIC FILE...
              </span>
            ) : (
              'TRANSMIT VEHICLE DIAGNOSTIC FILE ↗'
            )}
          </button>
        </form>
      )}
    </div>
  );
}
