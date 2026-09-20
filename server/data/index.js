// Genuine Services data from New Generation Tuners Atelier
export const studioServices = [
  {
    id: "paint-correction",
    number: "01",
    title: "Paint Correction",
    category: "Restoration & Levelling",
    summary: "Multi-stage machine polishing removing swirl marks, scratches, and oxidation to restore optical depth.",
    description: "Paint correction is the controlled, microscopic leveling of the clear coat to eliminate swirl marks, etching, micro-scratches, and severe oxidation. We utilize dual-action and rotary polishers with diminishing abrasives to unlock pure optical clarity.",
    process: [
      "Ultrasonic Paint Thickness Scan",
      "Chemical & Mechanical Decontamination",
      "Rotary Heavy Cut Compounding",
      "Dual-Action Jewelling Refinement",
      "High-CRI Multi-Spectrum Final Inspection"
    ],
    idealFor: [
      "Swirl marks & spiderweb scratches",
      "Faded or oxidized clear coats",
      "Buffer trails & holograms",
      "Water spot mineral etching",
      "Pre-coating preparation"
    ],
    specs: {
      equipment: "Rupes BigFoot 21mm & Flex PE14 Rotary",
      abrasives: "Diminishing micro-abrasive aluminium oxide",
      measurement: "PosiTector 200 Ultrasonic Gauge",
      timeframe: "1 to 3 Studio Days"
    },
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
  },
  {
    id: "ceramic-protection",
    number: "02",
    title: "Ceramic Protection",
    category: "Molecular Nanotechnology",
    summary: "Permanent SiO₂ molecular bonding providing intense hydrophobic gloss and chemical UV resistance.",
    description: "Unlike temporary waxes or organic sealants that degrade under heat and rainfall, ceramic coatings create a permanent SiO₂ covalent bond across the vehicle substrate. Delivering an impenetrable hydrophobic barrier with self-cleaning behavior and unmatched candy gloss.",
    process: [
      "Pure IPA & Solvent Panel Wipe",
      "Multi-Layer Base Coat Application",
      "Hydrophobic Top-Coat Infusion",
      "Short-Wave Infrared Thermal Cure",
      "Hydrophobicity & Specular Verification"
    ],
    idealFor: [
      "Brand new vehicles requiring long-term seal",
      "Corrected paint seeking permanent gloss",
      "Protection against bird droppings & road salts",
      "Effortless maintenance washing"
    ],
    specs: {
      chemistry: "9H+ Inorganic Silicon Dioxide (SiO₂) & TiO₂",
      contactAngle: "110°–115° Water Contact Angle",
      durability: "3-Year, 5-Year & Lifetime Tiers",
      curing: "60°C Infrared Thermal Soak"
    },
    image: "https://images.unsplash.com/photo-1619976215249-f59f22769b86?w=1200&q=80"
  },
  {
    id: "ppf",
    number: "03",
    title: "Paint Protection Film",
    category: "Physical Armour",
    summary: "Self-healing thermoplastic urethane barrier engineered to absorb rock chips, road debris, and physical impacts.",
    description: "Self-healing optical-grade thermoplastic polyurethane designed to absorb stone chips, high-speed gravel, and minor parking scratches. Computer-cut patterns ensure seamless edge wrapped alignment without razor blades touching your paint.",
    process: [
      "Digital Vehicle Plotter Pattern Cutting",
      "Sub-Surface Decontamination & Slip Solution Prep",
      "Tension-Free Panel Alignment & Squeegee Wrap",
      "Wrapped Edge Hemming & Post-Heating"
    ],
    idealFor: [
      "Front bumper, bonnet, and fender rock chip zones",
      "Track cars & high-speed highway touring",
      "Door edges, rocker panels & luggage sills",
      "Full stealth satin or gloss transformations"
    ],
    specs: {
      material: "150μm Optical Grade TPU",
      healing: "Elastomeric Thermal Memory Top Coat",
      warranty: "Up to 10-Year Manufacturer Warranty",
      finish: "Ultra-High Gloss or Satin Matte"
    },
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80"
  },
  {
    id: "interior-restoration",
    number: "04",
    title: "Interior Detailing",
    category: "Cabin Sanctuary",
    summary: "Deep steam extraction, leather pore conditioning, and interior trim restoration for cabin preservation.",
    description: "Hot-water extraction removes embedded oils, bacteria, and allergens. High-grade lanolin and ceramic leather nourishment restores factory matte texture without greasy residue.",
    process: [
      "High-Pressure Crevice Blowout & Deep Vacuum",
      "Hot-Water Steam Extraction on Carpets",
      "pH-Neutral Matte Leather Cleansing & Lanolin Conditioning",
      "Medical-Grade Ozone Cabin Sterilization"
    ],
    idealFor: [
      "Stained upholstery & soiled leather pores",
      "Persistent interior odours & bacteria",
      "Piano black & carbon fiber interior scratches",
      "Alcantara & suede deep cleaning"
    ],
    specs: {
      steam: "170°C Dry Vapor Extraction",
      leather: "Natural matte pH-balanced conditioning",
      ozone: "10,000mg/h Ozone Air Purifier",
      finish: "Non-greasy OEM Factory Matte"
    },
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=1200&q=80"
  },
  {
    id: "decontamination-jewelling",
    number: "05",
    title: "Decontamination & Polish",
    category: "Surface Purification",
    summary: "Iron fallout dissolution, clay-bar defect purging, and single-stage jewelling polish.",
    description: "Daily road wear embeds ferrous iron particles, tar, and industrial fallout into the pores of the paint. Our chemical decontamination and synthetic clay treatment dissolves contamination before a fine finishing polish restores vibrant gloss.",
    process: [
      "pH-Neutral Ferrous Iron Chemical Dissolution",
      "Citrus Solvent Tar Removal",
      "Synthetic Clay Bar Mechanical Decontamination",
      "Single-Stage Jewelling Machine Polish"
    ],
    idealFor: [
      "Vehicles with rough, gritty paint feel",
      "Yellow rail dust or brake dust contamination",
      "Annual surface reset before waxing/sealant"
    ],
    specs: {
      chemistry: "Iron-reactive pH neutral formula",
      clay: "Ultra-fine synthetic polymer clay",
      polish: "Ultra-high gloss finishing glaze"
    },
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=1200&q=80"
  },
  {
    id: "maintenance-programs",
    number: "06",
    title: "Maintenance Programs",
    category: "Preservation Protocol",
    summary: "Bespoke recurring care schedules to preserve ceramic coatings and PPF gloss between annual details.",
    description: "Scheduled maintenance washes using pure deionized water, multi-bucket grit guard techniques, and SiO₂ boost toppers to ensure ceramic coatings and PPF maintain their warranty performance and optical brilliance.",
    process: [
      "Touchless Pre-Foam Soak & Rinse",
      "Twin-Bucket Microfiber Hand Wash",
      "Filtered Heated Air Blow-Dry",
      "SiO₂ Coating Rejuvenation Boost"
    ],
    idealFor: [
      "Ceramic-coated & PPF-wrapped vehicles",
      "Clients seeking swirl-free routine washes",
      "Monthly or quarterly studio preservation"
    ],
    specs: {
      water: "0 PPM Deionized Pure Spot-Free Water",
      wash: "pH-neutral lubricating snow foam",
      drying: "Heated filtered air blower (zero towel friction)"
    },
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&q=80"
  }
];

export const studioGallery = [
  {
    id: "proj-1",
    title: "Porsche 911 GT3 RS",
    service: "Full Body PPF + 5-Year Ceramic Coating",
    category: "PPF & Ceramic",
    description: "Complete track package protection with wrapped edges on Guards Red finish.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80",
    metrics: ["150μm TPU Coverage", "110° Water Angle", "100% Swirl-Free"]
  },
  {
    id: "proj-2",
    title: "BMW M5 Competition",
    service: "Two-Stage Paint Correction + Ceramic",
    category: "Paint Correction",
    description: "Restoration of Black Sapphire Metallic paintwork after severe dealer wash damage.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    metrics: ["92% Defect Removal", "PosiTector Measured", "9H Surface Shield"]
  },
  {
    id: "proj-3",
    title: "Mercedes-AMG G63",
    service: "Full Stealth PPF + Interior Restoration",
    category: "Custom Armour",
    description: "Matte conversion from gloss Obsidian Black with complete ceramic leather treatment.",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1200&q=80",
    metrics: ["Full Satin Transform", "Hydrophobic Leather", "Ozone Sterilized"]
  },
  {
    id: "proj-4",
    title: "Audi RS6 Avant",
    service: "Front Track Pack PPF + Stage 1 Remap",
    category: "PPF & Performance",
    description: "High-speed gravel defense combined with precision ECU torque optimization.",
    image: "https://images.unsplash.com/photo-1619976215249-f59f22769b86?w=1200&q=80",
    metrics: ["Track Protection", "Dyno Calibrated", "Zero Razor Edge Cuts"]
  }
];

export const studioCompany = {
  name: "New Generation Tuners",
  established: "2014",
  address: "37, AM Complex, Opp. Velu Mahal, Trichy Bypass Road, Rajakkapatti, Dindigul - 624004, Tamil Nadu, India",
  phones: {
    primary: "+91 91599 44902",
    direct: "+91 96598 98206",
    support: "+91 63821 84080"
  },
  email: "info@newgenerationtuners.com",
  hours: "Monday – Saturday: 09:30 AM – 08:30 PM (Sunday Closed)",
  promise: "90-minute fast turnaround care on dedicated diagnostic & maintenance tiers."
};
