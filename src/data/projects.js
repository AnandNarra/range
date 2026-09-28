export const projects = [
  {
    id: "proj-01",
    title: "Environmentally Controlled Commercial Broiler Shed",
    category: "Commercial Broiler",
    categorySlug: "broiler",
    capacity: "35,000 Birds Capacity",
    dimensions: "330 ft x 50 ft Steel PEB",
    location: "South India Agricultural Zone",
    status: "Completed & Commissioned",
    description: "Turnkey pre-engineered steel structure featuring 50mm insulated sandwich roof panels, automated pan feeding lines, stainless nipple drinkers, and high-efficiency tunnel ventilation with 50-inch butterfly cone exhaust fans.",
    highlights: [
      "Target FCR achieved within 35-day growth cycle",
      "Evaporative cooling pads maintaining 26°C even in 42°C summer peaks",
      "Full digital climate control with multi-stage negative pressure management"
    ],
    image: "/images/modern_poultry_farm_shed.jpg",
    gallery: [
      "/images/modern_poultry_farm_shed.jpg",
      "/images/poultry_ventilation_system.jpg",
      "/images/pan_feeder.jpg"
    ],
    isFeatured: true
  },
  {
    id: "proj-02",
    title: "High-Density Commercial Layer Farm Infrastructure",
    category: "Commercial Layer",
    categorySlug: "layer",
    capacity: "60,000 Layer Birds",
    dimensions: "360 ft x 62 ft Multi-Tier Structure",
    location: "Central Farming Hub",
    status: "Completed & Commissioned",
    description: "Structural engineering and climate integration for multi-tier layer cages. High-clearance PEB shed with specialized manure pit foundation and cross-tunnel environmental ventilation architecture.",
    highlights: [
      "Heavy-duty galvanized steel framing engineered for multi-tier loads",
      "Integrated automatic feeding wagons and water pressure manifolds",
      "Automated egg collection conveyor integration readiness"
    ],
    image: "/images/layer_cages.jpg",
    gallery: [
      "/images/layer_cages.jpg",
      "/images/feed_silo.jpg"
    ],
    isFeatured: true
  },
  {
    id: "proj-03",
    title: "Automated Breeder & Hatchery Rearing Shed",
    category: "Breeder Farm",
    categorySlug: "breeder",
    capacity: "12,000 Parent Stock",
    dimensions: "280 ft x 48 ft Controlled Environment",
    location: "Western Farming Belt",
    status: "Completed & Commissioned",
    description: "High-biosecurity parent stock facility featuring precision dark-out light trapping systems, separate rooster & hen feeding lines, and digital static pressure regulation.",
    highlights: [
      "Light-trap modules on all air inlets and cone fans for photoperiod management",
      "Automated nest box egg collection corridors",
      "Integrated disinfection misting line at personnel biosecurity anteroom"
    ],
    image: "/images/broiler_chicks_brooder.jpg",
    gallery: [
      "/images/broiler_chicks_brooder.jpg",
      "/images/nipple_drinker.jpg"
    ],
    isFeatured: true
  },
  {
    id: "proj-04",
    title: "Open Shed to Closed Tunnel Climate Retrofit",
    category: "Retrofit & Automation",
    categorySlug: "retrofit",
    capacity: "25,000 Broilers Converted",
    dimensions: "250 ft x 45 ft Existing Structure",
    location: "Semi-Arid Poultry Region",
    status: "Completed & Commissioned",
    description: "Modernization project converting a traditional open-sided shed into an airtight, environmentally controlled tunnel poultry shed with side curtains, cooling pads, and automated climate panel.",
    highlights: [
      "35% drop in summer flock mortality after climate retrofit",
      "Air leakage sealed with heavy-duty PVC curtains and polyurethane foam",
      "Payback period achieved in under 3 operational flock cycles"
    ],
    image: "/images/commercial_broilers.jpg",
    gallery: [
      "/images/commercial_broilers.jpg",
      "/images/poultry_house_fans.jpg"
    ],
    isFeatured: false
  },
  {
    id: "proj-05",
    title: "Prefabricated Steel Farm Storage & Feed Mill Shed",
    category: "Farm Infrastructure",
    categorySlug: "infrastructure",
    capacity: "Storage + Central Mill",
    dimensions: "180 ft x 40 ft Industrial PEB",
    location: "Agro-Industrial Park",
    status: "Completed & Commissioned",
    description: "Custom industrial storage godown and feed blending shed built with clear-span steel portals, crane provision, and moisture-resistant insulated roofing sheets.",
    highlights: [
      "Zero interior columns for maximum vehicular and forklift maneuvering",
      "Heavy load bearing industrial concrete flooring with hardener coating",
      "Natural ridge ventilation and polycarbonate daylight roof panels"
    ],
    image: "/images/feed_silo.jpg",
    gallery: [
      "/images/feed_silo.jpg",
      "/images/peb_steel_construction.jpg"
    ],
    isFeatured: false
  },
  {
    id: "proj-06",
    title: "High-Efficiency Summer Cooling Pad Installation",
    category: "Retrofit & Automation",
    categorySlug: "retrofit",
    capacity: "Dual Shed Complex (50,000 Birds)",
    dimensions: "Twin 300 ft Sheds",
    location: "High Heat Rural District",
    status: "Completed & Commissioned",
    description: "Installation of 150mm thick high-density cellulose evaporative cooling pads with heavy aluminum water gutters and submerged filtration tanks for two commercial broiler sheds.",
    highlights: [
      "Continuous water recirculation with zero dry spots across 40m pad wall",
      "Instant 8°C temperature relief observed upon automated controller trigger",
      "Equipped with automatic line flushing to prevent hard water scale"
    ],
    image: "/images/poultry_ventilation_system.jpg",
    gallery: [
      "/images/poultry_ventilation_system.jpg",
      "/images/cooling_pad.jpg"
    ],
    isFeatured: true
  }
];

export const projectCategories = [
  { id: "all", name: "All Projects" },
  { id: "broiler", name: "Commercial Broiler" },
  { id: "layer", name: "Commercial Layer" },
  { id: "breeder", name: "Breeder Farm" },
  { id: "retrofit", name: "Retrofit & Climate" },
  { id: "infrastructure", name: "Farm Infrastructure" }
];
