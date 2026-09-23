export { studioServices, studioGallery, studioCompany } from '../../server/data/index.js';

export const REVIEWS = [
  {
    id: "rev-1",
    author: "Arjun Krishnamurthy",
    vehicle: "Porsche Macan GTS",
    discipline: "Two-Stage Paint Correction + 5-Year Ceramic",
    quote: "After the two-stage correction my Macan looked better than the day I took delivery. The ceramic coating has maintained deep specular gloss for eighteen months without a single swirl mark.",
    rating: 5,
    verified: true
  },
  {
    id: "rev-2",
    author: "Dr. Vikram Sethupathi",
    vehicle: "BMW M340i xDrive",
    discipline: "Full Front PPF + Graphene Coating",
    quote: "The wrapped edges on the front clip are genuinely invisible. Not a single stone chip after 12,000 km of highway driving. True artisan quality.",
    rating: 5,
    verified: true
  },
  {
    id: "rev-3",
    author: "Kavitha R.",
    vehicle: "Range Rover Sport HSE",
    discipline: "Interior Extraction & Matte Leather Restoration",
    quote: "They restored the white perforated Windsor leather to pristine factory matte condition. Zero greasy shine or chemical smell. Outstanding studio.",
    rating: 5,
    verified: true
  }
];

export const PROCESS_TIMELINE = [
  {
    step: "01",
    title: "Assess & Measure",
    summary: "Panel-by-panel ultrasonic clear coat depth audit and 3D defect mapping under high-CRI inspection arrays.",
    detail: "Every panel is measured down to 0.1 micron. Paint thickness variances guide safe abrasive compound limits."
  },
  {
    step: "02",
    title: "Decontaminate & Mask",
    summary: "Iron fallout dissolution, citrus tar removal, and surgical synthetic clay bar treatment.",
    detail: "Sensitive trim, emblems, rubber weatherstripping, and carbon vents masked with heat-resistant tapes."
  },
  {
    step: "03",
    title: "Level & Correct",
    summary: "Systematic dual-action and rotary polishing to eliminate 85% to 95%+ of all clear coat imperfections.",
    detail: "Graduated compound and pad sequences level microscopic scratch ridges without overheating clear coats."
  },
  {
    step: "04",
    title: "Jewel & Degrease",
    summary: "Ultra-fine finishing jewel pass followed by alcohol degreaser wipes to expose true bare surface clarity.",
    detail: "Guarantees that defects have been permanently removed, not merely temporarily masked with fillers."
  },
  {
    step: "05",
    title: "Molecular Shield",
    summary: "Installation of SiO₂ ceramic coating or computer-cut self-healing Paint Protection Film (PPF).",
    detail: "Applied in a climate-controlled dust-free studio bay with precision humidity regulation."
  },
  {
    step: "06",
    title: "Infrared Cure & Deliver",
    summary: "Short-wave infrared thermal soak curing to maximize covalent cross-linking bond strength.",
    detail: "50-point studio checklist verified before final client walk-around and warranty certificate issuance."
  }
];

export const TECHNICAL_LAB_ITEMS = [
  {
    id: "lighting",
    label: "01 / HIGH-CRI LIGHTING",
    category: "LIGHTING LAB",
    title: "Multi-Spectrum High-CRI Inspection Arrays",
    description: "Standard fluorescent tubes conceal over 70% of micro-scratches. Our inspection bays employ daylight-calibrated 96+ CRI arrays spanning 2700K to 6500K color temperatures to expose defects in true solar fidelity.",
    spec: "VARIABLE SPECTRUM 2700K–6500K · CRI 96+ · ANTI-GLARE",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1000&q=80&auto=format&fit=crop"
  },
  {
    id: "polishing",
    label: "02 / DUAL-ACTION POLISHERS",
    category: "MACHINE LAB",
    title: "Precision Random Orbital & Rotary Systems",
    description: "Rupes BigFoot dual-action and Flex rotary polishers generate oscillating orbits to eliminate paint defects without introducing rotary friction burn or clear coat thinning.",
    spec: "15MM & 21MM ORBITAL THROWS · BALANCED COUNTERWEIGHT MOTORS",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1000&q=80&auto=format&fit=crop"
  },
  {
    id: "chemistry",
    label: "03 / SIO2 CERAMIC CHEMISTRY",
    category: "COATING LAB",
    title: "Pure Silicon Dioxide (SiO₂) Nanostructures",
    description: "Inorganic covalent bonding creates a solid crystalline lattice over the clear coat, delivering permanent chemical defense against pH2-pH12 compounds, road salts, and UV degradation.",
    spec: "9H PENCIL HARDNESS · 110°+ WATER CONTACT ANGLE · COVALENT BOND",
    image: "/images/ceramic-chemistry-lab.jpg"
  },
  {
    id: "gauges",
    label: "04 / ULTRASONIC GAUGES",
    category: "DIAGNOSTIC LAB",
    title: "PosiTector 200 Ultrasonic Clear Coat Measurement",
    description: "Digital non-destructive measurement down to 0.1 micron precision across steel, aluminium, and composite carbon panels to verify clear coat integrity before compounding.",
    spec: "0.1μM TOLERANCE · DUAL-MODE EDDY CURRENT & ULTRASONIC",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1000&q=80&auto=format&fit=crop"
  },
  {
    id: "curing",
    label: "05 / INFRARED CURING",
    category: "CURING BAY",
    title: "Short-Wave Infrared Baking Stations",
    description: "IR heat lamps bake ceramic coatings from the inside out, ensuring instantaneous cross-linking crystallization and maximum hardness before the vehicle leaves the studio.",
    spec: "SHORT-WAVE IR EMITTER · 60°C CONTROLLED THERMAL SOAK",
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=1000&q=80&auto=format&fit=crop"
  }
];
