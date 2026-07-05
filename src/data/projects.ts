export type Project = {
  title: string;
  slug: string;
  summary: string;
  image: string;
  alt: string;
  category: string;
  featured?: boolean;
  gallery?: string[];
  description: string;
  challenges: string[];
  fabrication?: string;
  outcome: string;
};

export const projects: Project[] = [
  {
    title: "Pickleball tournament awards",
    slug: "pickleball-awards",
    summary:
      "Event awards with a cleaner, more personal feel than a stock trophy.",
    image: "/images/portfolio/pickleball-tournament-awards.jpg",
    alt: "Pickleball tournament awards.",
    category: "awards-recognition",
    featured: true,
    gallery: ["/images/portfolio/pickleball-tournament-awards.jpg"],
    description:
      "A tournament award project focused on presentation, repeatability, and a finished object that felt specific to the event.",
    challenges: [
      "Create an award that felt specific to the tournament.",
      "Balance durable printed parts with a polished final finish.",
      "Plan the design so multiple finished pieces could be produced consistently.",
    ],
    fabrication:
      "3D printed components with finishing, painting, and assembly based on the final design.",
    outcome:
      "Finished tournament awards that felt more personal than a stock trophy or off-the-shelf plaque.",
  },
  {
    title: "Fitness challenge medals",
    slug: "gym-challenge-medals",
    summary:
      "Small-batch medals made for challenge winners and member milestones.",
    image: "/images/portfolio/fitness-challenge-medals.jpg",
    alt: "Fitness challenge medals.",
    category: "awards-recognition",
    featured: true,
    gallery: ["/images/portfolio/fitness-challenge-medals.jpg"],
    description:
      "A compact recognition piece where readability, batch consistency, and a clean handoff mattered more than heavy ornament.",
    challenges: [
      "Keep the medals clean and readable at a small scale.",
      "Make the pieces feel intentional without overcomplicating production.",
      "Maintain consistency across the batch.",
    ],
    fabrication:
      "Printed medal forms with finish work and preparation for final presentation.",
    outcome:
      "A batch of achievement pieces that gave the challenge a more tangible and memorable result.",
  },
  {
    title: "Company robot awards",
    slug: "company-robot-awards",
    summary:
      "Playful recognition pieces built around a robot form and finished for display.",
    image: "/images/portfolio/company-robot-awards.jpg",
    alt: "Company robot awards.",
    category: "awards-recognition",
    featured: true,
    gallery: ["/images/portfolio/company-robot-awards.jpg"],
    description:
      "A company recognition project that used a robot form as the starting point for a displayable award object.",
    challenges: [
      "Translate a brand-friendly idea into a physical object.",
      "Keep the piece displayable and sturdy enough for handling.",
      "Coordinate modeling, printing, finishing, and final assembly.",
    ],
    fabrication:
      "Custom printed parts with post-processing, finishing, and assembly into a completed award object.",
    outcome:
      "Recognition pieces with enough personality to sit on a desk or shelf after the event.",
  },
  {
    title: "Large Space Needle print",
    slug: "large-space-needle-print",
    summary:
      "A 5 1/2-foot printed display build with long print times, many sections, and extensive finishing.",
    image: "/images/portfolio/large-space-needle-print.jpg",
    alt: "Large 3D printed Space Needle display piece.",
    category: "display-pieces",
    featured: true,
    gallery: ["/images/portfolio/large-space-needle-print.jpg"],
    description:
      "A 5 1/2-foot-tall Space Needle build and one of the clearest examples of scale, persistence, and finish work.",
    challenges: [
      "Break a large object into printable, alignable sections.",
      "Manage a long print schedule while keeping parts consistent.",
      "Glue, sand, and paint the final piece so it read as one finished object.",
    ],
    fabrication:
      "Roughly 100 hours of design and modeling, 750 hours of printing, and 100 hours of gluing, sanding, and painting.",
    outcome:
      "A large display piece that shows the difference between printing parts and finishing a complete object.",
  },
  {
    title: "Props and display pieces",
    slug: "custom-props-display-pieces",
    summary:
      "One-off objects where surface, silhouette, and presentation carry the work.",
    image: "/images/portfolio/props-display-pieces.jpg",
    alt: "Props and display pieces.",
    category: "art-sculpture",
    featured: true,
    gallery: ["/images/portfolio/props-display-pieces.jpg"],
    description:
      "Prop and display work where the printed form is only the starting point; the final surface and setting determine whether the piece works.",
    challenges: [
      "Adapt the build process to the intended setting.",
      "Make printed objects feel finished rather than raw.",
      "Balance visual detail with practical fabrication constraints.",
    ],
    fabrication:
      "Printed parts with surface preparation, paint, finish work, and assembly depending on the piece.",
    outcome:
      "One-off objects and display pieces that support the story, theme, or presentation around them.",
  },
  {
    title: "Functional pieces",
    slug: "functional-pieces",
    summary:
      "Practical parts for real dimensions, awkward spaces, and everyday use.",
    image: "/images/portfolio/drawer-organizer.jpg",
    alt: "Custom drawer organizer and dividers.",
    category: "functional-design",
    gallery: ["/images/portfolio/drawer-organizer.jpg"],
    description:
      "Functional printed parts for situations where an off-the-shelf size or layout does not quite solve the problem.",
    challenges: [
      "Fit the object to the actual space it needs to live in.",
      "Keep the design simple enough to be useful every day.",
      "Use printing where a custom size or shape solves the problem better than a store-bought option.",
    ],
    fabrication:
      "Measured, modeled, printed, and adjusted around the final use case.",
    outcome:
      "Practical pieces that solve a specific problem without competing with the more showcase-focused portfolio work.",
  },
];

export type ProjectCategory = {
  id: string;
  title: string;
  intro: string;
  compact?: boolean;
};

export const projectCategories: ProjectCategory[] = [
  {
    id: "awards-recognition",
    title: "Awards & Recognition",
    intro:
      "Awards, medals, and recognition objects where shape, finish, and presentation need to match the event.",
  },
  {
    id: "display-pieces",
    title: "Display Pieces",
    intro:
      "Large or highly visible pieces where scale, surface finish, and assembly quality matter.",
  },
  {
    id: "art-sculpture",
    title: "Art & Sculpture",
    intro:
      "Masks, sculptural forms, props, and expressive objects where character and surface treatment matter.",
  },
  {
    id: "functional-design",
    title: "Functional Design",
    intro:
      "Organizers, storage, brackets, dividers, and other parts that solve a specific physical problem.",
    compact: true,
  },
];

export function getProjectsByCategory(categoryId: string) {
  return projects.filter((project) => project.category === categoryId);
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
