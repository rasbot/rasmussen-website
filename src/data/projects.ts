export type ProjectImage = {
  src: string;
  caption: string;
};

export type Project = {
  title: string;
  slug: string;
  summary: string;
  coverImage: string;
  heroImage?: string;
  alt: string;
  category: string;
  featured?: boolean;
  gallery?: ProjectImage[];
  description: string;
  challenges: string[];
  fabrication?: string;
  outcome: string;
};

// Portfolio images live at /public/images/portfolio/{category-folder}/{project-folder}/{filename}.
// Use square_ files for card covers, and use the full/detail images for project pages.
function portfolioImage(categoryFolder: string, projectFolder: string, filename: string) {
  return `/images/portfolio/${categoryFolder}/${projectFolder}/${filename}`;
}

function galleryImage(categoryFolder: string, projectFolder: string, filename: string, caption: string) {
  return {
    src: portfolioImage(categoryFolder, projectFolder, filename),
    caption,
  };
}

export const projects: Project[] = [
  {
    title: "Pickleball tournament awards",
    slug: "pickleball-awards",
    summary:
      "Event awards with a cleaner, more personal feel than a stock trophy.",
    coverImage: portfolioImage(
      "awards-and-recognition",
      "pickleball-awards",
      "square_pickleball-tournament-awards.jpg",
    ),
    heroImage: portfolioImage(
      "awards-and-recognition",
      "pickleball-awards",
      "pickleball-awards-displayed.jpg",
    ),
    alt: "Pickleball tournament awards.",
    category: "awards-recognition",
    featured: true,
    gallery: [
      galleryImage(
        "awards-and-recognition",
        "pickleball-awards",
        "pickleball-awards-displayed.jpg",
        "Finished pickleball awards displayed before handoff.",
      ),
      galleryImage(
        "awards-and-recognition",
        "pickleball-awards",
        "pickleball-3-awards.jpg",
        "Three completed awards from the same event batch.",
      ),
      galleryImage(
        "awards-and-recognition",
        "pickleball-awards",
        "pickleball-printing.jpg",
        "Printed parts in progress before finishing and assembly.",
      ),
    ],
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
    coverImage: portfolioImage(
      "awards-and-recognition",
      "gym-challenge-medals",
      "square_fitness-challenge-medals.jpg",
    ),
    heroImage: portfolioImage(
      "awards-and-recognition",
      "gym-challenge-medals",
      "bingo-challenge-medals.jpg",
    ),
    alt: "Fitness challenge medals.",
    category: "awards-recognition",
    featured: true,
    gallery: [
      galleryImage(
        "awards-and-recognition",
        "gym-challenge-medals",
        "bingo-challenge-medals.jpg",
        "Bingo challenge medals produced as a small recognition batch.",
      ),
      galleryImage(
        "awards-and-recognition",
        "gym-challenge-medals",
        "hiitmas-challenge-medals.jpg",
        "Holiday challenge medals with a different event theme.",
      ),
    ],
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
    coverImage: portfolioImage(
      "awards-and-recognition",
      "company-robot-awards",
      "square_company-robot-awards.jpg",
    ),
    heroImage: portfolioImage(
      "awards-and-recognition",
      "company-robot-awards",
      "company-robot-awards.jpg",
    ),
    alt: "Company robot awards.",
    category: "awards-recognition",
    featured: true,
    gallery: [
      galleryImage(
        "awards-and-recognition",
        "company-robot-awards",
        "company-robot-awards.jpg",
        "Robot award pieces grouped after finishing.",
      ),
      galleryImage(
        "awards-and-recognition",
        "company-robot-awards",
        "finished-award.jpg",
        "Single finished robot award ready for presentation.",
      ),
      galleryImage(
        "awards-and-recognition",
        "company-robot-awards",
        "awards-handed-out.jpg",
        "Awards after being handed out at the company event.",
      ),
    ],
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
    title: "Company logo awards",
    slug: "company-logo-awards",
    summary:
      "Recognition pieces built around a company mark and finished for presentation.",
    coverImage: portfolioImage(
      "awards-and-recognition",
      "company-logo-awards",
      "square_company-logo-awards.jpg",
    ),
    heroImage: portfolioImage(
      "awards-and-recognition",
      "company-logo-awards",
      "comapny-logo-awards.jpg",
    ),
    alt: "Company logo awards.",
    category: "awards-recognition",
    gallery: [
      galleryImage(
        "awards-and-recognition",
        "company-logo-awards",
        "comapny-logo-awards.jpg",
        "Company logo awards finished and prepared as a batch.",
      ),
    ],
    description:
      "A company award project where the logo drove the form, layout, and final presentation.",
    challenges: [
      "Keep the company mark recognizable as a physical object.",
      "Balance brand detail with printability and finish quality.",
      "Prepare the piece for repeatable production.",
    ],
    fabrication:
      "Printed components with finishing and assembly based on the final award design.",
    outcome:
      "A branded recognition piece that could stand on its own as a finished display object.",
  },
  {
    title: "Company goat awards",
    slug: "company-goat-awards",
    summary:
      "Custom recognition pieces using a more character-driven award form.",
    coverImage: portfolioImage(
      "awards-and-recognition",
      "company-goat-awards",
      "square_company-goat-awards.jpg",
    ),
    heroImage: portfolioImage(
      "awards-and-recognition",
      "company-goat-awards",
      "company-goat-awards.jpg",
    ),
    alt: "Company goat awards.",
    category: "awards-recognition",
    gallery: [
      galleryImage(
        "awards-and-recognition",
        "company-goat-awards",
        "company-goat-awards.jpg",
        "Character-driven company awards after final assembly.",
      ),
    ],
    description:
      "A recognition project built around a distinctive award form with enough personality to feel specific to the recipient.",
    challenges: [
      "Make the form feel intentional rather than novelty-only.",
      "Keep the piece sturdy enough for handling and display.",
      "Finish the surface so the printed parts read as a complete object.",
    ],
    fabrication:
      "3D printed parts with surface preparation, finishing, and final assembly.",
    outcome:
      "A displayable award object with a more personal, character-driven feel.",
  },
  {
    title: "Large Space Needle print",
    slug: "large-space-needle-print",
    summary:
      "A 5 1/2-foot printed display build with long print times, many sections, and extensive finishing.",
    coverImage: portfolioImage(
      "display-pieces",
      "large-space-needle-print",
      "square_large-space-needle-print.jpg",
    ),
    heroImage: portfolioImage(
      "display-pieces",
      "large-space-needle-print",
      "large-space-needle-print.jpg",
    ),
    alt: "Large 3D printed Space Needle display piece.",
    category: "display-pieces",
    featured: true,
    gallery: [
      galleryImage(
        "display-pieces",
        "large-space-needle-print",
        "large-space-needle-print.jpg",
        "The completed 5 1/2-foot Space Needle display piece.",
      ),
      galleryImage(
        "display-pieces",
        "large-space-needle-print",
        "assembly.jpg",
        "Printed sections being assembled into the full structure.",
      ),
      galleryImage(
        "display-pieces",
        "large-space-needle-print",
        "before-painting.jpg",
        "Assembled print before final paint and finish work.",
      ),
      galleryImage(
        "display-pieces",
        "large-space-needle-print",
        "halloween-with-spiders.jpg",
        "Seasonal display use after the main build was complete.",
      ),
    ],
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
    title: "Company goat display",
    slug: "company-goat-display",
    summary:
      "A branded display piece built around a bold, character-driven form.",
    coverImage: portfolioImage(
      "display-pieces",
      "company-goat-display",
      "square_company-goat-display.jpg",
    ),
    heroImage: portfolioImage(
      "display-pieces",
      "company-goat-display",
      "company-goat-display.jpg",
    ),
    alt: "Company goat display piece.",
    category: "display-pieces",
    featured: true,
    gallery: [
      galleryImage(
        "display-pieces",
        "company-goat-display",
        "company-goat-display.jpg",
        "Finished display piece shown from the main presentation angle.",
      ),
      galleryImage(
        "display-pieces",
        "company-goat-display",
        "company-goat-display-2.jpg",
        "Additional view showing the finished display form.",
      ),
    ],
    description:
      "A company display project where the form needed to be recognizable, sturdy, and polished enough to stand on its own.",
    challenges: [
      "Keep the character of the form readable at display scale.",
      "Plan the print and finish work around a visible final surface.",
      "Make the object stable enough for presentation and handling.",
    ],
    fabrication:
      "Printed components with surface preparation, finishing, and final assembly.",
    outcome:
      "A branded display object with enough visual presence to anchor a shelf, desk, or event setup.",
  },
  {
    title: "Gym front desk display",
    slug: "gym-front-desk-display",
    summary:
      "A practical branded display piece for a front desk or check-in area.",
    coverImage: portfolioImage(
      "display-pieces",
      "gym-front-desk-display",
      "square_gym-front-desk-display.jpg",
    ),
    heroImage: portfolioImage(
      "display-pieces",
      "gym-front-desk-display",
      "gym-front-desk-display.jpg",
    ),
    alt: "Gym front desk display piece.",
    category: "display-pieces",
    gallery: [
      galleryImage(
        "display-pieces",
        "gym-front-desk-display",
        "gym-front-desk-display.jpg",
        "Finished front desk display piece in its intended setting.",
      ),
    ],
    description:
      "A display piece designed for a gym front desk, where the object needed to be clear, durable, and easy to place in a working environment.",
    challenges: [
      "Keep the display readable without taking up too much counter space.",
      "Balance visual presence with everyday durability.",
      "Finish the piece so it looked intentional in a customer-facing area.",
    ],
    fabrication:
      "Printed parts with finishing and assembly for a completed countertop display.",
    outcome:
      "A compact display piece that supports the space without feeling like temporary signage.",
  },
  {
    title: "Halloween prop pieces",
    slug: "custom-halloween-prop-pieces",
    summary:
      "Decorative prop pieces where shape, surface, and theme carry the effect.",
    coverImage: portfolioImage(
      "art-and-sculpture",
      "custom-halloween-prop-pieces",
      "square_custom-halloween-prop-pieces.jpg",
    ),
    heroImage: portfolioImage(
      "art-and-sculpture",
      "custom-halloween-prop-pieces",
      "skull-flowers.JPG",
    ),
    alt: "Custom Halloween prop pieces.",
    category: "art-sculpture",
    featured: true,
    gallery: [
      galleryImage(
        "art-and-sculpture",
        "custom-halloween-prop-pieces",
        "skull-flowers.JPG",
        "Skull and flower prop piece after printing and finishing.",
      ),
      galleryImage(
        "art-and-sculpture",
        "custom-halloween-prop-pieces",
        "skull-flower.JPG",
        "Alternate skull and floral prop detail.",
      ),
      galleryImage(
        "art-and-sculpture",
        "custom-halloween-prop-pieces",
        "spider-skeleton.jpg",
        "Spider skeleton prop used as part of the themed display work.",
      ),
    ],
    description:
      "A set of Halloween-focused prop pieces where the finished surface, silhouette, and theme mattered more than mechanical function.",
    challenges: [
      "Keep the forms readable and dramatic after printing.",
      "Use finishing choices to support the theme of each piece.",
      "Make the pieces feel complete rather than like raw printed parts.",
    ],
    fabrication:
      "Printed prop forms with surface preparation, finishing, and display-focused cleanup.",
    outcome:
      "Themed prop pieces that work as finished decorative objects rather than simple prints.",
  },
  {
    title: "Organization pieces",
    slug: "organization",
    summary:
      "Practical parts for real dimensions, awkward spaces, and everyday use.",
    coverImage: portfolioImage(
      "functional-design",
      "organization",
      "square_drawer-organizer.jpg",
    ),
    heroImage: portfolioImage(
      "functional-design",
      "organization",
      "drawer-organizer.jpg",
    ),
    alt: "Custom drawer organizer and dividers.",
    category: "functional-design",
    gallery: [
      galleryImage(
        "functional-design",
        "organization",
        "drawer-organizer.jpg",
        "Drawer organizer made to fit the exact space and contents.",
      ),
      galleryImage(
        "functional-design",
        "organization",
        "face-mask-organizer.jpg",
        "Face mask organizer designed around a specific storage need.",
      ),
    ],
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
