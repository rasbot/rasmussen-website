export type Project = {
  title: string;
  slug: string;
  summary: string;
  image: string;
  alt: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "Pickleball awards",
    slug: "pickleball-awards",
    summary:
      "Custom award concepts for tournaments, leagues, and event winners with room for names, logos, and finish details.",
    image: "/images/pickleball-awards.svg",
    alt: "Placeholder artwork for pickleball award designs.",
    tags: ["Awards", "Events", "Finishing"],
  },
  {
    title: "Gym challenge medals",
    slug: "gym-challenge-medals",
    summary:
      "Durable medals and achievement pieces for gym challenges, member milestones, and internal competitions.",
    image: "/images/gym-medals.svg",
    alt: "Placeholder artwork for gym challenge medal designs.",
    tags: ["Medals", "Fitness", "Small batches"],
  },
  {
    title: "Company robot awards",
    slug: "company-robot-awards",
    summary:
      "Playful branded robot awards built for company recognition, team milestones, and memorable desk display.",
    image: "/images/robot-awards.svg",
    alt: "Placeholder artwork for company robot award designs.",
    tags: ["Brand objects", "Awards", "Display"],
  },
  {
    title: "Custom props and display pieces",
    slug: "custom-props-display-pieces",
    summary:
      "One-off and small-run props, display forms, and printed objects designed to look right in person and on camera.",
    image: "/images/props-display.svg",
    alt: "Placeholder artwork for custom props and display pieces.",
    tags: ["Props", "Displays", "Design"],
  },
];
