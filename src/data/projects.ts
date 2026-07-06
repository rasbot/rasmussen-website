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
      "Tournament awards styled around the event, with a more personal feel than a stock trophy.",
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
      "A tournament award project shaped around the event branding, with a playful bronze, silver, and gold treatment to distinguish each placement.",
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
      "Ongoing challenge medals with a consistent event-medal style, branded for each specific gym challenge.",
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
      "An ongoing medal project inspired by running-event medals, with each challenge getting its own branded variation while keeping the overall style consistent across the series.",
    challenges: [
      "Create a recognizable medal style that can carry across multiple challenges.",
      "Give each challenge its own branding and theme without making the series feel inconsistent.",
      "Keep the pieces readable, repeatable, and practical to produce in small batches.",
    ],
    fabrication:
      "Multi-color printed medal components with gluing, finishing, and ribbon added for final presentation.",
    outcome:
      "An ongoing series of achievement pieces that gives each gym challenge a more tangible and memorable result.",
  },
  {
    title: "Company robot awards",
    slug: "company-robot-awards",
    summary:
      "Company event awards built around a branded robot mascot from the business.",
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
      "A company recognition project that used one of the business mascots as the basis for displayable event awards.",
    challenges: [
      "Translate a recognizable company mascot into a physical award object.",
      "Keep the piece displayable and sturdy enough for handling at the event.",
      "Coordinate modeling, printing, finishing, and final assembly while preserving the character of the mascot.",
    ],
    fabrication:
      "Custom printed parts with post-processing, finishing, and assembly into completed robot award pieces.",
    outcome:
      "Branded recognition pieces with enough personality to sit on a desk or shelf after the company event.",
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
      "Personalized data team awards built around an internal company goat mascot.",
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
      "A company recognition project for the data team, combining the internal goat mascot with the company logo to create personalized award pieces.",
    challenges: [
      "Turn an internal mascot into an award form that felt intentional and displayable.",
      "Incorporate the company logo with a goat bust to create a unique award.",
      "Personalize the awards without losing consistency across the set.",
    ],
    fabrication:
      "3D printed goat award forms with logo details, surface preparation, finishing, and final assembly.",
    outcome:
      "Personalized team awards that connected internal company culture with a finished display object.",
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
      "A large company office gift combining the company logo with a giant goat display form.",
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
      "A display project created as a gift for the company office, combining the company logo with a large goat form tied to internal company culture.",
    challenges: [
      "Scale the goat form up into a display piece with enough presence for an office setting.",
      "Incorporate the company logo while keeping the larger goat form clear and readable.",
      "Finish the piece so it felt like a permanent office display rather than a temporary prop.",
    ],
    fabrication:
      "Large printed components with surface preparation, finishing, and final assembly.",
    outcome:
      "A branded office display piece that connected the company logo with an internal mascot in a more substantial finished object.",
  },
  {
    title: "Gym front desk display",
    slug: "gym-front-desk-display",
    summary:
      "A holiday-branded gym gift combining a 3D modeled logo, gym equipment, and seasonal details.",
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
      "A front desk display created as a gift for the gym, combining a 3D modeled logo with gym equipment details and holiday branding like snowflakes and a Santa hat.",
    challenges: [
      "Combine the gym logo, equipment details, and holiday elements into one readable display.",
      "Keep the piece compact enough for a front desk while still feeling like a gift object.",
      "Balance seasonal branding with a polished finish that fit the gym environment.",
    ],
    fabrication:
      "3D modeled and printed display components with finishing, assembly, and seasonal detail work.",
    outcome:
      "A compact front desk display that connected the gym's identity with a seasonal gift piece.",
  },
  {
    title: "Halloween prop pieces",
    slug: "custom-halloween-prop-pieces",
    summary:
      "Custom Halloween prop pieces painted to look like aged, realistic skeletons.",
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
      "A set of custom Halloween prop pieces where unique printed forms were painted and finished to look like real skeletons and decorative bones.",
    challenges: [
      "Keep the forms readable and dramatic after printing.",
      "Use paint and finishing choices to create a more realistic skeleton-like surface.",
      "Make each piece feel unique and complete rather than like a raw printed part.",
    ],
    fabrication:
      "Printed prop forms with surface preparation, painting, finishing, and display-focused cleanup.",
    outcome:
      "Unique Halloween prop pieces that work as finished decorative objects with a more realistic skeletal look.",
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
