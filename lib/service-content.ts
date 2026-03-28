import type { Metadata } from "next";
import { SITE } from "@/lib/site-config";

export type ServiceSlug =
  | "tree-removal"
  | "tree-trimming-pruning"
  | "stump-grinding"
  | "emergency-tree-service"
  | "land-clearing";

export type ServiceContent = {
  slug: ServiceSlug;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  intro: string;
  whyMatters: string;
  problems: string[];
  benefits: string[];
  processTitle: string;
  process: string[];
  image: string;
  imageAlt: string;
};

const base = (s: ServiceSlug): ServiceContent => {
  const map: Record<ServiceSlug, ServiceContent> = {
    "tree-removal": {
      slug: "tree-removal",
      title: "Tree Removal",
      metaTitle: `Tree Removal in ${SITE.primaryArea} | ${SITE.name}`,
      metaDescription: `Professional tree removal in ${SITE.primaryArea}. Hazardous trees, storm damage, and controlled sectional takedowns near homes — ${SITE.phoneDisplay}.`,
      heroTitle: "Safe, Controlled Tree Removal",
      heroSubtitle:
        "Dead, leaning, or storm-damaged trees are a liability. We remove them with a plan that protects your home, utilities, and landscaping.",
      intro:
        "Tree removal is not just cutting—it is physics, experience, and cleanup. Whether a pine split in last night’s storm or an oak that has finally declined, we assess lean, decay, obstacles, and the best rigging path before the first cut.",
      whyMatters:
        "Waiting on a hazardous tree can mean roof damage, fence loss, or injury. Professional removal routes debris away from structures and reduces liability compared to informal help or unqualified operators.",
      problems: [
        "Decayed trunk or root rot compromising stability",
        "Storm-damaged trunks and hanging broken tops",
        "Dead, dying, or diseased trees near patios and play areas",
        "Cracks or splits in trunks or heavy limbs over roofs",
        "Trees outgrowing a safe footprint near foundations or pools",
      ],
      benefits: [
        "Controlled sectional takedowns in tight Central Florida lots",
        "Crews trained for hazard trees—not guesswork with a chainsaw",
        "Equipment sized for access: lifts, rigging, and haul-off options",
        "Cleanup-focused so your yard looks cared for when we leave",
        "Emergency options when a tree cannot safely stay overnight",
      ],
      processTitle: "How we handle removals",
      process: [
        "Site walk-through — identify targets, rigging points, and drop zones",
        "Cut plan — sectional lowering to protect structures and landscaping",
        "Removal & haul — chip, cut, and haul per your estimate scope",
        "Final walk — we review the site with you for satisfaction",
      ],
      image: "photo-4.jpg",
      imageAlt: "Tree removal — professional assessment of a decayed tree",
    },
    "tree-trimming-pruning": {
      slug: "tree-trimming-pruning",
      title: "Tree Trimming & Pruning",
      metaTitle: `Tree Trimming & Pruning | ${SITE.name} — ${SITE.primaryArea}`,
      metaDescription: `Expert trimming and pruning for healthier trees and safer yards in ${SITE.primaryArea}. Crown thinning, elevation, and storm prep — ${SITE.phoneDisplay}.`,
      heroTitle: "Trimming & Pruning That Protects Your Property",
      heroSubtitle:
        "Proper cuts improve structure, airflow, and light—while reducing the chance of limbs failing in the next storm.",
      intro:
        "Healthy trees are an asset; neglected canopies become a risk. We prune with purpose—whether elevating limbs over your roof, thinning for wind load, or shaping ornamentals for curb appeal.",
      whyMatters:
        "Random trimming can stress a tree. Strategic pruning supports long-term health, reduces failure points, and keeps branches away from structures and driveways.",
      problems: [
        "Low limbs scraping roofs, gutters, or vehicles",
        "Dense crowns that catch wind like a sail",
        "Weight at the ends of long limbs that can split",
        "Mistletoe and other stressors that weaken branches",
        "Poor visibility at driveways and walkways",
      ],
      benefits: [
        "Clearance for homes, pools, and power-drop awareness",
        "Improved structure and reduced risk of limb failure",
        "Better light and airflow through the canopy",
        "Seasonal maintenance plans for busy properties",
        "Cleanup that respects beds, irrigation, and hardscape",
      ],
      processTitle: "Our pruning approach",
      process: [
        "Goals first — safety, health, clearance, and aesthetics",
        "Selective cuts — remove the right limbs, not ‘hat-racking’",
        "Balance — open the canopy without stripping the tree",
        "Walkthrough — we explain what was done and what to watch next",
      ],
      image: "photo-3.jpg",
      imageAlt: "Professional tree trimming and pruning",
    },
    "stump-grinding": {
      slug: "stump-grinding",
      title: "Stump Grinding",
      metaTitle: `Stump Grinding | ${SITE.name} — ${SITE.primaryArea}`,
      metaDescription: `Stump grinding below grade — remove trip hazards and reclaim yard space. Multiple grinder sizes for access and finish — ${SITE.phoneDisplay}.`,
      heroTitle: "Stump Grinding Below Grade",
      heroSubtitle:
        "Stumps attract pests, damage mower decks, and waste usable space. Grinding is the practical fix.",
      intro:
        "We run the right grinder for your stump—tight side yards, back lawns, and commercial lots. The goal is a level, usable surface with chips managed to match your plan.",
      whyMatters:
        "Leftover stumps are more than ugly—they are obstacles, termite magnets, and regrowth headaches. Grinding completes the job removal started.",
      problems: [
        "Trip hazards for kids, guests, and lawn crews",
        "Insect habitat in rotting wood",
        "Mower damage and difficult landscaping",
        "Sprouting suckers that keep returning",
        "Wasted space where you want turf, beds, or hardscape",
      ],
      benefits: [
        "Economical compared to full stump excavation in many cases",
        "Multiple grinder sizes for access and production",
        "Depth suited to sod, replanting, or future construction",
        "Cleanup options for chips and grindings",
        "Fast turnaround on most residential stumps",
      ],
      processTitle: "Grinding process",
      process: [
        "Locate utilities and irrigation when applicable",
        "Grind stump and primary surface roots to agreed depth",
        "Manage grindings — backfill, mulch, or haul-off per scope",
        "Leave a tidy work area—ready for the next step in your yard",
      ],
      image: "stumpgrinder.jpg",
      imageAlt: "Stump grinder removing a tree stump",
    },
    "emergency-tree-service": {
      slug: "emergency-tree-service",
      title: "Emergency Tree Service",
      metaTitle: `24/7 Emergency Tree Service | ${SITE.name}`,
      metaDescription: `Fallen trees, split trunks, and urgent hazards — fast response across ${SITE.primaryArea}. Call ${SITE.phoneDisplay} now.`,
      heroTitle: "24-Hour Emergency Response",
      heroSubtitle:
        "Severe weather, lightning, and hidden decay do not wait. When a tree threatens people or property, call immediately.",
      intro:
        "Our crews understand hazard trees—how to stabilize, section, and remove under pressure. We prioritize life safety, access, and preventing secondary damage to structures.",
      whyMatters:
        "A hanging limb can shift with the next gust. Fast, professional response reduces risk compared to DIY attempts with ladders and inadequate equipment.",
      problems: [
        "Trees or large limbs on roofs, fences, or vehicles",
        "Split trunks after wind or lightning strikes",
        "Blocked driveways and emergency access",
        "Leaning trees that moved during a storm",
        "Debris creating secondary hazards on walkways",
      ],
      benefits: [
        "24/7 availability for true emergencies",
        "Hazard assessment and controlled dismantling",
        "Coordination with first responders when sites are complex",
        "Experience with Florida storm patterns and insurance timelines",
        "Cleanup options to restore safe access quickly",
      ],
      processTitle: "Emergency workflow",
      process: [
        "Rapid triage — stabilize immediate hazards where possible",
        "Controlled cuts — sectional removal in tight quarters",
        "Debris management — clear access and reduce trip hazards",
        "Follow-up — optional stump grinding and restorative pruning",
      ],
      image: "emergency.jpg",
      imageAlt: "24 hour emergency tree service",
    },
    "land-clearing": {
      slug: "land-clearing",
      title: "Land Clearing",
      metaTitle: `Land Clearing & Lot Prep | ${SITE.name}`,
      metaDescription: `Residential and light commercial land clearing — brush, selective trees, and site prep across ${SITE.primaryArea}. Call ${SITE.phoneDisplay}.`,
      heroTitle: "Land Clearing & Site Prep",
      heroSubtitle:
        "From overgrown fence lines to lot preparation for builds and landscaping—we clear efficiently and safely.",
      intro:
        "Clearing is not only pushing everything over—it is knowing what to keep, what to protect, and how to work around wet ground, utilities, and neighboring trees.",
      whyMatters:
        "Smart clearing saves money versus heavy equipment that tears soil and damages valuable trees you wanted to preserve.",
      problems: [
        "Overgrown lots before fencing, pools, or additions",
        "Brush encroaching on structures and sight lines",
        "Selective clearing for new landscaping plans",
        "Light commercial prep where access is tight",
        "Post-storm lots with mixed debris and standing hazards",
      ],
      benefits: [
        "Skilled operators with forestry mulchers, bobcats, and hauling",
        "Selective removal to preserve desirable trees",
        "Scalable crews for small yards to larger commercial sites",
        "Cleanup and grading coordination as scoped",
        "Safety planning for nearby structures and utilities",
      ],
      processTitle: "How we clear",
      process: [
        "Walk the site — goals, keep/remove trees, access paths",
        "Work plan — sequence clearing to minimize rutting and damage",
        "Removal & processing — chip, haul, or stage material",
        "Site finish — ready for the next contractor or planting",
      ],
      image: "kubota.jpg",
      imageAlt: "Bobcat land clearing and brush removal",
    },
  };
  return map[s];
};

export function getServiceContent(slug: ServiceSlug): ServiceContent {
  return base(slug);
}

export function serviceMetadata(slug: ServiceSlug): Metadata {
  const c = base(slug);
  return {
    title: c.metaTitle,
    description: c.metaDescription,
  };
}
