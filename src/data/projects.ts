export type Project = {
  title: string;
  slug: string;
  summary: string;
  image: string;
  alt: string;
};

export const projects: Project[] = [
  {
    title: "Pickleball tournament awards",
    slug: "pickleball-awards",
    summary:
      "Custom tournament awards designed, printed, finished, and assembled for a specific event.",
    image: "/images/portfolio/pickleball-tournament-awards.jpg",
    alt: "Pickleball tournament awards.",
  },
  {
    title: "Fitness challenge medals",
    slug: "gym-challenge-medals",
    summary:
      "Small-batch medals and achievement pieces for gym challenges and member milestones.",
    image: "/images/portfolio/fitness-challenge-medals.jpg",
    alt: "Fitness challenge medals.",
  },
  {
    title: "Company robot awards",
    slug: "company-robot-awards",
    summary:
      "Branded recognition pieces with custom modeling, print planning, finishing, and assembly.",
    image: "/images/portfolio/company-robot-awards.jpg",
    alt: "Company robot awards.",
  },
  {
    title: "Large Space Needle print",
    slug: "large-space-needle-print",
    summary:
      "A large-format printed display piece used as a scale and finishing reference for ambitious builds.",
    image: "/images/portfolio/large-space-needle-print.jpg",
    alt: "Large 3D printed Space Needle display piece.",
  },
  {
    title: "Props and display pieces",
    slug: "custom-props-display-pieces",
    summary:
      "One-off props, display forms, and printed objects built for the intended setting.",
    image: "/images/portfolio/props-display-pieces.jpg",
    alt: "Props and display pieces.",
  },
  {
    title: "Functional pieces",
    slug: "functional-pieces",
    summary:
      "Practical custom parts like drawer dividers, organizers, and problem-solving pieces designed for a specific space.",
    image: "/images/portfolio/drawer-organizer.jpg",
    alt: "Custom drawer organizer and dividers.",
  },
];
