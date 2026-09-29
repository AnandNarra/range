export const products = [
  // --- FEEDING SYSTEMS ---
  {
    id: "prod-feed-01",
    slug: "automatic-pan-feeding-system",
    name: "Automatic Pan Feeding System",
    category: "Feeding Systems",
    categorySlug: "feeding-systems",
    model: "OS-FEED-P55",
    shortDesc: "Commercial automated pan feeding system for broilers and breeders with 14-grill feed pans and smart level sensors.",
    fullDesc: "Orange Structures Automatic Pan Feeding System delivers consistent, low-waste feed distribution across the entire poultry shed length. Constructed from virgin anti-aging polypropylene and high-tensile galvanized steel drive pipes, this system guarantees uniform feed availability from day-one chicks to mature harvest birds.",
    image: "/images/pan_feeder.jpg",
    gallery: [
      "/images/pan_feeder.jpg",
      "/images/commercial_broilers.jpg"
    ],
    features: [
      "14-grill high-strength pan design preventing feed wastage",
      "Sensitive capacitive proximity sensor for automatic cutoff",
      "360-degree feed distribution ring with slide shut-off damper",
      "Heavy-duty South Africa / German imported high-tensile flex auger",
      "Seamless hot-dip galvanized suspension cable winch line"
    ],
    specifications: [
      { label: "Pan Diameter", value: "330 mm / 360 mm option" },
      { label: "Bird Capacity", value: "45–55 Broilers per pan" },
      { label: "Pipe Diameter", value: "45 mm galvanized with 3/4 holes" },
      { label: "Drive Motor", value: "0.75 kW / 1.1 kW, 380V/220V, IP55" },
      { label: "Feed Delivery Rate", value: "450 kg/h" }
    ],
    applications: ["Broiler commercial sheds", "Breeder pullet rearing", "Free-range indoor feeding lines"],
    isFeatured: true
  },
  {
    id: "prod-feed-02",
    slug: "galvanized-bulk-feed-silo",
    name: "Galvanized Bulk Feed Storage Silo",
    category: "Feeding Systems",
    categorySlug: "feeding-systems",
    model: "OS-SILO-T12",
    shortDesc: "Corrugated galvanized steel outdoor bulk feed silo with pneumatic filling pipes and viewing ladder.",
    fullDesc: "Designed to preserve feed freshness and protect nutrition against extreme weather, rodents, and moisture. Manufactured with 275g/m² hot-dip zinc coating and precision-engineered corrugated sheets, equipped with transparent inspection windows and an ergonomic bottom cone slide gate.",
    image: "/images/feed_silo.jpg",
    gallery: [
      "/images/feed_silo.jpg"
    ],
    features: [
      "275g/m² heavy galvanized high-strength steel plate construction",
      "Weatherproof silicone seal between all corrugated joints",
      "60-degree steep discharge hopper cone preventing feed bridging",
      "Safety climbing ladder with protective steel safety cage",
      "Standard pneumatic fill pipe and mechanical manhole cover"
    ],
    specifications: [
      { label: "Capacity Range", value: "5 Tons to 32 Tons" },
      { label: "Silo Diameter", value: "1.8 m to 3.6 m" },
      { label: "Zinc Coating", value: "≥ 275 g/m² (Hot-dip galvanized)" },
      { label: "Discharge Cone Angle", value: "60 Degrees" }
    ],
    applications: ["Centralized farm feed intake", "Automated distribution lines", "Feed mill storage hubs"],
    isFeatured: false
  },

  // --- DRINKING SYSTEMS ---
  {
    id: "prod-drink-01",
    slug: "nipple-drinking-system-with-drip-cup",
    name: "Stainless Steel Nipple Drinking Line",
    category: "Drinking Systems",
    categorySlug: "drinking-systems",
    model: "OS-DRINK-N360",
    shortDesc: "Leak-proof 360-degree stainless steel nipple drinker system with round drip cups and pressure regulator.",
    fullDesc: "Ensures uninterrupted clean and fresh water supply while maintaining completely dry litter underneath. Features surgical-grade stainless steel valve pins with double-seal rubber gaskets, heavy-duty square PVC conduits, aluminum suspension profiles, and automated terminal flush kits.",
    image: "/images/nipple_drinker.jpg",
    gallery: [
      "/images/nipple_drinker.jpg",
      "/images/pan_feeder.jpg"
    ],
    features: [
      "360-degree trigger action sensitive for 1-day-old chicks to finish",
      "All metal components precision machined from AISI 304 stainless steel",
      "Single-arm hanging drip cup prevents water wastage and wet litter",
      "Heavy-duty transparent water level indicator tube with float ball",
      "High-pressure flush valve for fast sanitization and line cleaning"
    ],
    specifications: [
      { label: "Water Flow Rate", value: "80–120 ml/min at working head" },
      { label: "Bird Ratio", value: "10–12 Broilers per nipple" },
      { label: "Water Pipe Spec", value: "22mm x 22mm virgin PVC square pipe" },
      { label: "Pressure Regulator", value: "Adjustable 10 cm – 45 cm water column" }
    ],
    applications: ["Broiler floor rearing", "Layer pullet sheds", "Breeder parent stock houses"],
    isFeatured: true
  },

  // --- VENTILATION SYSTEMS ---
  {
    id: "prod-vent-01",
    slug: "industrial-cone-exhaust-fan-50-inch",
    name: "50-Inch Butterfly Cone Exhaust Fan",
    category: "Ventilation Systems",
    categorySlug: "ventilation-systems",
    model: "OS-FAN-C50",
    shortDesc: "High CFM aerodynamic cone exhaust fan with dual butterfly shutters and cast aluminum blades.",
    fullDesc: "Engineered specifically for extreme tunnel ventilation requirements in modern closed poultry housing. The aerodynamic fiberglass cone extension increases air throughput by 10-15% while reducing electricity consumption per CFM compared to standard box fans.",
    image: "/Best-Exhaust-Fan-for-Poultry-Farms-in-India.jpg",
    gallery: [
      "/Best-Exhaust-Fan-for-Poultry-Farms-in-India.jpg",
      "/exhaust-fan-1.jpg"
    ],
    features: [
      "Corrosion-resistant galvanized frame with aerodynamic poly cone",
      "Tight-sealing butterfly backdraft shutter prevents air infiltration",
      "Aviation-grade cast aluminum 3-blade or 6-blade propeller options",
      "High-efficiency IP55 copper-wound fan motor (Siemens/WEG spec)",
      "High-strength Mitsuboshi V-belt drive with automatic belt tensioner"
    ],
    specifications: [
      { label: "Frame Dimensions", value: "1380 x 1380 x 1280 mm" },
      { label: "Air Volume Capacity", value: "44,500 m³/h @ 0 Pa (26,200 CFM)" },
      { label: "Motor Power", value: "1.1 kW / 1.5 HP, 3-Phase 415V 50Hz" },
      { label: "Blade Diameter", value: "1270 mm (50 Inch)" },
      { label: "Noise Level", value: "< 70 dB(A)" }
    ],
    applications: ["Tunnel ventilated broiler sheds", "Layer high-density houses", "Breeders and hatcheries"],
    isFeatured: true
  },
  {
    id: "prod-vent-02",
    slug: "aerodynamic-side-wall-air-inlet",
    name: "Aerodynamic Side Wall Air Inlet Window",
    category: "Ventilation Systems",
    categorySlug: "ventilation-systems",
    model: "OS-INLET-W60",
    shortDesc: "Anti-UV insulated air inlet windows with aerodynamic curved louvers for precision minimum ventilation.",
    fullDesc: "Critical for cold weather and minimum ventilation cycles. Directs incoming fresh air upwards toward the ceiling ridge to mix with warm stagnant air before descending, preventing cold air drafts from dropping directly onto young chicks.",
    image: "/ventillation.jpg",
    gallery: [
      "/ventillation.jpg"
    ],
    features: [
      "Virgin ABS engineering plastic with anti-UV aging additives",
      "Dual stainless steel torsion return springs for firm closing",
      "Curved directional wind baffle deflects air stream to ceiling",
      "Includes external galvanized bird protection mesh screen",
      "Connects to central motorized winch bar for synchronized modulation"
    ],
    specifications: [
      { label: "External Frame Size", value: "600 x 320 x 160 mm" },
      { label: "Air Flow Capacity", value: "1,850 m³/h @ 20 Pa static pressure" },
      { label: "Material Composition", value: "100% Virgin UV-Stabilized ABS" },
      { label: "Weight", value: "3.2 kg per unit" }
    ],
    applications: ["Minimum ventilation stages", "Transitional tunnel ventilation", "Winter cycle fresh air supply"],
    isFeatured: false
  },

  // --- COOLING & CLIMATE CONTROL ---
  {
    id: "prod-cool-01",
    slug: "cellulose-evaporative-cooling-pad-system",
    name: "Cellulose Evaporative Cooling Pad & Gutter System",
    category: "Cooling & Climate Control",
    categorySlug: "cooling-climate-control",
    model: "OS-PAD-7090",
    shortDesc: "High-grade 7090 corrugated kraft paper cooling pads with extruded aluminum top & bottom water gutter profiles.",
    fullDesc: "Provides dramatic temperature drop of 6°C to 12°C during peak summer months. Crafted from premium pure virgin Swedish kraft paper impregnated with anti-rot resins, paired with heavy-duty anti-corrosion aluminum alloy framing and submersible water recirculation pumps.",
    image: "/coolingPad.webp",
    gallery: [
      "/coolingPad.webp"
    ],
    features: [
      "Pure virgin cellulose paper with high water absorption rate (4-5s)",
      "Special resin coating prevents algae and salt buildup",
      "Heavy-gauge anodized aluminum alloy top cover & water tank trough",
      "Uniform distribution perforated PVC header pipe with end drain valves",
      "Submersible continuous-duty IP68 stainless impeller water pump"
    ],
    specifications: [
      { label: "Pad Height / Width", value: "1.5 m / 1.8 m / 2.0 m options x 600 mm width" },
      { label: "Standard Thickness", value: "100 mm / 150 mm" },
      { label: "Corrugation Angle", value: "70° x 90° cross fluted" },
      { label: "Evaporative Efficiency", value: "Up to 88% at standard air velocity" }
    ],
    applications: ["Summer tunnel ventilation", "Closed environmentally controlled broiler houses", "Layer sheds"],
    isFeatured: true
  },
  {
    id: "prod-cool-02",
    slug: "high-pressure-fogging-misting-line",
    name: "High-Pressure Misting & Fogging System",
    category: "Cooling & Climate Control",
    categorySlug: "cooling-climate-control",
    model: "OS-MIST-70B",
    shortDesc: "70 Bar high-pressure ceramic nozzle fogging system for instant shed cooling, dust reduction, and humidity control.",
    fullDesc: "Atomizes water droplets down to ultra-fine 10-15 microns that evaporate instantly in hot air without wetting the birds or bed litter. Equipped with high-pressure triplex ceramic plunger pump, solenoid water valves, and stainless steel distribution pipes.",
    image: "/fogging-and-misting-system.jpg",
    gallery: [
      "/fogging-and-misting-system.jpg",
      "/fog.jpg"
    ],
    features: [
      "70 Bar (1000 PSI) Italian triplex plunger brass pump",
      "Precision ruby/ceramic orifice anti-drip misting nozzles",
      "Seamless 304 stainless steel high pressure tubing",
      "Integrated 5-micron dual sediment and scale filtration unit",
      "Digital interval timer & automatic pressure release valve"
    ],
    specifications: [
      { label: "Operating Pressure", value: "50 to 70 Bar" },
      { label: "Droplet Size", value: "10 – 15 Microns" },
      { label: "Pump Flow Rate", value: "8 to 25 Litres/min options" },
      { label: "Motor Power", value: "2.2 kW / 3.0 HP 380V" }
    ],
    applications: ["Supplementary heatwave cooling", "Disinfection spraying", "Litter dust suppression"],
    isFeatured: false
  },

  // --- HEATING & BROODING ---
  {
    id: "prod-heat-01",
    slug: "infrared-gas-brooder-heater",
    name: "Infrared Radiant Gas Brooder",
    category: "Heating & Brooding",
    categorySlug: "heating-brooding",
    model: "OS-BROOD-G10",
    shortDesc: "Even-heat radiant infrared ceramic gas brooder with thermostat control and dual safety cutoff valves.",
    fullDesc: "Simulates maternal warmth for newborn day-old chicks by converting LPG or natural gas into uniform infrared radiant heat. The radiant heat warms the birds and floor litter directly without squandering energy overheating the entire ceiling airspace.",
    image: "/heatingPad.avif",
    gallery: [
      "/heatingPad.avif",
      "/chicken-heater-2023-2.jpg"
    ],
    features: [
      "High-efficiency porous ceramic honeycomb combustion tiles",
      "Polished aluminum heat reflector dish for wide beam coverage",
      "Thermocouple flameout protection with automatic solenoid shutoff",
      "Clean combustion with minimal CO and NOx emissions",
      "Hanging suspension bracket with adjustable height chains"
    ],
    specifications: [
      { label: "Heating Capacity", value: "10,000 to 12,000 kcal/h" },
      { label: "Chick Capacity", value: "800 – 1,200 Chicks per brooder" },
      { label: "Fuel Type", value: "LPG / Propane / Natural Gas" },
      { label: "Gas Consumption", value: "0.6 – 0.9 kg/h" }
    ],
    applications: ["Day 1 to 14 brooding chambers", "Winter batch heating", "Poultry nursery sheds"],
    isFeatured: true
  },

  // --- AUTOMATION & CONTROLLERS ---
  {
    id: "prod-auto-01",
    slug: "intelligent-poultry-climate-controller-panel",
    name: "Intelligent Environmental Climate Controller Panel",
    category: "Automation & Controllers",
    categorySlug: "automation-controllers",
    model: "OS-CTRL-X900",
    shortDesc: "Microprocessor-based multi-stage environmental controller for ventilation fans, cooling pads, heaters, and alarms.",
    fullDesc: "The central nervous system of any modern commercial poultry house. Regulates temperature, relative humidity, static negative pressure, CO2, and ammonia levels using real-time multi-point sensor feedback to automatically modulate fans, inlets, and cooling pumps for optimum bird comfort and maximum FCR.",
    image: "/images/plc_controller.jpg",
    gallery: [
      "/images/plc_controller.jpg"
    ],
    features: [
      "7-inch industrial color touchscreen with intuitive visual diagrams",
      "Multi-zone temperature curve calculation with automatic day growth progression",
      "Precision differential static pressure sensor with inlet position feedback",
      "Multi-stage fan staging (Minimum, Transitional, Full Tunnel)",
      "High/Low temperature, power failure, and sensor fault audio-visual alarm relays",
      "RS-485 / Modbus communication for Orange Management Software cloud sync"
    ],
    specifications: [
      { label: "Display", value: "7-Inch TFT Color Touch Screen (IP65 front)" },
      { label: "Sensor Inputs", value: "Up to 8 Temperature, 2 Humidity, 1 Pressure, 1 CO2" },
      { label: "Relay Outputs", value: "24 Configurable Heavy-Duty Relays (10A 250V)" },
      { label: "Variable Analog Outputs", value: "4 x 0-10V for VFD Fan modulation" },
      { label: "Power Supply", value: "110-240V AC 50/60Hz with surge suppression" }
    ],
    applications: ["Fully automated broiler sheds", "Layer environmentally controlled barns", "Parent breeder houses"],
    isFeatured: true
  },


  // --- ACCESSORIES & SPARES ---
  {
    id: "prod-acc-01",
    slug: "heavy-duty-winch-motor-suspension-system",
    name: "Heavy-Duty Ceiling Winch Motor System",
    category: "Accessories & Spares",
    categorySlug: "accessories",
    model: "OS-WINCH-M75",
    shortDesc: "Ceiling suspension electric winch hoist with limit switches for synchronized raising of feeder and drinker lines.",
    fullDesc: "Essential for batch clearing, cleaning, and daily flock height adjustment. Heavy-duty worm-gear self-locking electric hoist powered by high-torque motor to effortlessly hoist feeding pipes or water nipple lines safely above human head height during bird harvesting.",
    image: "/images/pan_feeder.jpg",
    gallery: [
      "/images/pan_feeder.jpg"
    ],
    features: [
      "Self-locking worm gearbox prevents sudden dropping in power loss",
      "Adjustable upper and lower mechanical limit switches",
      "Thermal overload protection built into motor windings",
      "Manual emergency crank handle included for power outage operation",
      "Includes galvanized steel wire rope, pulleys, and rope clamps"
    ],
    specifications: [
      { label: "Lifting Capacity", value: "750 kg / 1,500 kg options" },
      { label: "Motor Power", value: "0.55 kW / 0.75 kW 3-Phase 380V or Single Phase 220V" },
      { label: "Lifting Speed", value: "0.25 m/min smooth movement" },
      { label: "Drum Capacity", value: "Up to 50 meters of 5mm steel wire" }
    ],
    applications: ["Feeder line height management", "Drinker line hoisting", "Brooder radiant lamp suspension"],
    isFeatured: false
  }
];
