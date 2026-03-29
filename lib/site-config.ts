/** Central source of truth — swap values here to update the whole site. */

export const SITE = {
  name: "J&B's Tree Service",
  legalName: "J&B's Tree Service of Central Florida, Inc.",
  phoneDisplay: "(386) 804-7145",
  phoneTel: "+13868047145",
  email: "Jeffrey.trapp1@gmail.com",
  owner: "Jeffrey Trapp",
  primaryArea: "Central Florida",
  state: "FL",
  hqCity: "DeBary",
  counties: ["Volusia County", "Seminole County"],
  /** Street address not listed on legacy site — update when you have a verified address. */
  addressLine: "Serving Volusia & Seminole Counties",
  yearsInBusiness: "20+",
  tagline:
    "Licensed, insured tree professionals with fast response and honest pricing.",
  description:
    "J&B's Tree Service provides tree removal, trimming, stump grinding, land clearing, and 24-hour emergency tree service throughout Central Florida.",
  facebookUrl:
    "https://www.facebook.com/pages/JBs-Tree-Service-of-Central-Florida-Inc/109821962424008",
  bbbUrl:
    "https://www.bbb.org/central-florida/business-reviews/tree-service/jandbs-tree-service-in-debary-fl-153251111",
  youtubeIds: ["fDpqn9J7NLc", "F7PWfC6Xxgs"],
  /**
   * Brand logo URL. The file lives at `public/images/logo.png` and is maintained by you—swap that file when the artwork changes.
   * (Do not replace it with placeholder or generated images in tooling.)
   */
  logoSrc: "/images/logo.png" as const,
  /**
   * Opens Google’s review form for your Business Profile. Get it from Google Business Profile
   * → “Ask for reviews” / share review link. Example shape:
   * `https://search.google.com/local/writereview?placeid=ChIJ...`
   */
  googleReviewWriteUrl: "",
  /** Optional: public Google Maps URL to your listing (“View on Google”). */
  googleMapsListingUrl: "",
  businessHours: [
    { label: "Mon–Sat", value: "7:00 AM – 6:00 PM" },
    { label: "Sunday", value: "Emergency calls only" },
    { label: "Emergency", value: "24/7 storm & hazard response" },
  ],
} as const;

/** Default public URL for JSON-LD / OG absolute image paths. Override with NEXT_PUBLIC_SITE_URL when you deploy. */
export const DEFAULT_SITE_URL = "https://www.jandbstreeservices.com";

export function siteAbsoluteUrl(path: string) {
  const base =
    (typeof process !== "undefined" &&
      process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "")) ||
    DEFAULT_SITE_URL;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

/** Local assets in /public/images (includes files downloaded from jandbstreeservices.com). */
export function legacyImage(path: string) {
  return `/images/${path.replace(/^\//, "")}`;
}

/** Featured before/after graphic supplied for marketing (shed / overgrowth project). */
export const FEATURED_BEFORE_AFTER = {
  src: "before-after-shed.png",
  alt: "Before and after — overgrown limbs cleared back from a utility shed and structures",
  caption:
    "Hazardous limb removal to protect property structures — cleaner, safer, and more light.",
} as const;

export const NAV = [
  { href: "/", label: "Home" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services", label: "All Services" },
      { href: "/services/tree-removal", label: "Tree Removal" },
      {
        href: "/services/tree-trimming-pruning",
        label: "Trimming & Pruning",
      },
      { href: "/services/stump-grinding", label: "Stump Grinding" },
      { href: "/services/emergency-tree-service", label: "Emergency Service" },
      { href: "/services/land-clearing", label: "Land Clearing" },
    ],
  },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
] as const;

export type ServiceAreaCity = {
  slug: string;
  name: string;
  county: string;
  blurb: string;
};

export const SERVICE_AREAS: ServiceAreaCity[] = [
  {
    slug: "debary",
    name: "DeBary",
    county: "Volusia",
    blurb:
      "Local crews for hazardous removals, storm cleanup, and routine pruning across DeBary neighborhoods.",
  },
  {
    slug: "deltona",
    name: "Deltona",
    county: "Volusia",
    blurb:
      "Fast scheduling for overgrown lots, roof clearance, and emergency response after severe weather.",
  },
  {
    slug: "orange-city",
    name: "Orange City",
    county: "Volusia",
    blurb:
      "Tree trimming and removal with careful cleanup—ideal for busy residential streets and HOAs.",
  },
  {
    slug: "deland",
    name: "DeLand",
    county: "Volusia",
    blurb:
      "Historic properties and new builds alike—safe pruning, removals, and stump grinding.",
  },
  {
    slug: "sanford",
    name: "Sanford",
    county: "Seminole",
    blurb:
      "Lakefront and inland properties—storm prep trimming, removals, and land clearing.",
  },
  {
    slug: "altamonte-springs",
    name: "Altamonte Springs",
    county: "Seminole",
    blurb:
      "Commercial and residential tree care with minimal disruption to parking and access.",
  },
  {
    slug: "casselberry",
    name: "Casselberry",
    county: "Seminole",
    blurb:
      "Precision trimming around structures, driveways, and mature canopy trees.",
  },
  {
    slug: "lake-mary",
    name: "Lake Mary",
    county: "Seminole",
    blurb:
      "High-visibility properties—shape, thin, and elevate for curb appeal and safety.",
  },
  {
    slug: "longwood",
    name: "Longwood",
    county: "Seminole",
    blurb:
      "Large oaks and palms—expert pruning, cabling considerations, and safe removals.",
  },
  {
    slug: "winter-springs",
    name: "Winter Springs",
    county: "Seminole",
    blurb:
      "Storm-damaged limbs, stump grinding, and lot clearing for remodels and new fencing.",
  },
  {
    slug: "orlando",
    name: "Orlando",
    county: "Orange",
    blurb:
      "Broader metro projects—scheduled trimming, removals, and emergency response when hazards threaten property.",
  },
  {
    slug: "winter-park",
    name: "Winter Park",
    county: "Orange",
    blurb:
      "Careful work near homes, pools, and tight lots—cleanup-focused crews.",
  },
];

export const HOME_SERVICES = [
  {
    slug: "/services/tree-removal",
    title: "Tree Removal",
    excerpt:
      "Safe removal of dead, hazardous, or storm-damaged trees—controlled cuts, pro rigging, and thorough cleanup.",
    image: "photo-4.jpg",
    icon: "axe" as const,
  },
  {
    slug: "/services/tree-trimming-pruning",
    title: "Trimming & Pruning",
    excerpt:
      "Improve structure, light, and wind flow while reducing risk of limb failure—healthier trees, better curb appeal.",
    image: "photo-3.jpg",
    icon: "scissors" as const,
  },
  {
    slug: "/services/stump-grinding",
    title: "Stump Grinding",
    excerpt:
      "Grind stumps below grade with the right-sized machine for access and finish—fast, economical, tidy.",
    image: "stumpgrinder.jpg",
    icon: "circle" as const,
  },
  {
    slug: "/services/emergency-tree-service",
    title: "Emergency Tree Service",
    excerpt:
      "24-hour crews for fallen trees, split trunks, and immediate hazards after storms or lightning.",
    image: "emergency.jpg",
    icon: "alert" as const,
    /** Custom illustrated header instead of photo (matches branded emergency tile). */
    headerVariant: "emergency" as const,
  },
  {
    slug: "/services/land-clearing",
    title: "Land Clearing",
    excerpt:
      "From small residential lots to larger commercial clears—brush, selective trees, and haul-away options.",
    image: "kubota.jpg",
    icon: "trees" as const,
  },
];

export const WHY_CHOOSE = [
  {
    title: "Experienced Crew",
    body: `${SITE.yearsInBusiness} years solving Central Florida tree issues—oak, pine, palm, and more.`,
  },
  {
    title: "Licensed & Insured",
    body: "Carry proper coverage so you are not left holding liability on complex removals.",
  },
  {
    title: "Safety First",
    body: "Ropes, rigging, and cut plans designed for tight yards, roofs, and power-line awareness.",
  },
  {
    title: "Fair Pricing",
    body: "Straightforward estimates—know what to expect before we start the work.",
  },
  {
    title: "Local Experts",
    body: "We understand Florida storms, pests, and fast-growing canopy—recommendations you can trust.",
  },
  {
    title: "Professional Equipment",
    body: "Stump grinders, lifts, and hauling matched to the job—done efficiently without cutting corners.",
  },
  {
    title: "Fast Scheduling",
    body: "Responsive office and emergency availability when a tree cannot wait.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "They showed up when promised, walked me through exactly what needed to happen, and left the yard cleaner than they found it.",
    name: "Sarah M.",
    place: "Sanford, FL",
  },
  {
    quote:
      "After a storm dropped a huge limb toward our roof, J&B's crew was out fast and handled it safely. Huge relief.",
    name: "Marcus T.",
    place: "DeBary, FL",
  },
  {
    quote:
      "Fair price for a tricky removal between two houses. No damage to the fence—professional from start to finish.",
    name: "Jennifer L.",
    place: "Deltona, FL",
  },
  {
    quote:
      "Stump grinding was quick and the grindings were managed well. Easy company to work with.",
    name: "David R.",
    place: "Altamonte Springs, FL",
  },
  {
    quote:
      "We needed pruning for insurance photos and curb appeal. Trees look balanced and opened up the light.",
    name: "Elena K.",
    place: "Lake Mary, FL",
  },
];

export const PROCESS_STEPS = [
  {
    step: "1",
    title: "Request an Estimate",
    body: "Call or send details—we discuss urgency, access, and the best time to look at the tree.",
  },
  {
    step: "2",
    title: "On-Site Evaluation",
    body: "We assess hazards, equipment needs, and cleanup—then provide a clear scope and price.",
  },
  {
    step: "3",
    title: "Professional Completion",
    body: "We execute the plan safely, remove debris, and walk the site with you before we leave.",
  },
];

export const TRUST_STRIP = [
  { label: "Serving Central Florida", sub: "Volusia & Seminole focus" },
  { label: "Fast Response", sub: "Calls returned quickly" },
  { label: "Free Estimates", sub: "Know your price upfront" },
  { label: "24/7 Emergency", sub: "Storm & hazard help" },
];

export const GALLERY_ITEMS: {
  src: string;
  alt: string;
  category: "removal" | "trimming" | "stump" | "equipment" | "before-after";
}[] = [
  {
    src: "before-after-shed.png",
    alt: FEATURED_BEFORE_AFTER.alt,
    category: "before-after",
  },
  {
    src: "truck500.jpg",
    alt: "J&B Tree Service truck on a job site",
    category: "equipment",
  },
  {
    src: "dumptruck.jpg",
    alt: "Hauling and cleanup after tree work",
    category: "removal",
  },
  {
    src: "stumpgrinder.jpg",
    alt: "Stump grinder at work",
    category: "stump",
  },
  {
    src: "kubota.jpg",
    alt: "Bobcat land clearing and site work",
    category: "equipment",
  },
  {
    src: "photo-4.jpg",
    alt: "Tree removal — decayed tree example",
    category: "removal",
  },
  {
    src: "photo-3.jpg",
    alt: "Tree trimming and pruning",
    category: "trimming",
  },
  {
    src: "jeff5.jpg",
    alt: "Before tree service",
    category: "before-after",
  },
  {
    src: "jeff6.jpg",
    alt: "After tree service",
    category: "before-after",
  },
  {
    src: "jeff1.jpg",
    alt: "Professional tree crew",
    category: "trimming",
  },
  {
    src: "emergency.jpg",
    alt: "24 hour emergency tree service",
    category: "removal",
  },
];
