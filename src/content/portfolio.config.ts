/*
  STUDENTS: Edit this file only.
  - Change text, links, and section order in `blocks`.
  - Keep every block `id` and `type` stable.

  CHANGE CHECKLIST (non-technical):
  1) Update name/role/email in `profile`.
  2) Update LinkedIn/GitHub/Twitter in `socialLinks`.
  3) Change colors in `themeColors` (optional).
  4) Update section text inside `blocks` (optional).
  5) Do not change any `id` or `type` values.
*/

import type { PortfolioConfig } from "./portfolio.schema";

const withBase = (path: string) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}${path}`;
};

// Quick-edit section: update these values first for most profile/theme changes.
const profile = {
  name: "Abhash Acharya",
  role: "Civil Engineering Educator & Transportation Researcher",
  location: "Nepal",
  email: "acharyaabhash@gmail.com",
  linkedin: "https://www.linkedin.com/in/abhashacharya/",
};

const socialLinks = {
  linkedin: "https://www.linkedin.com/in/abhashacharya/",
  googleScholar: "https://scholar.google.com/citations?user=YsJ0eIsAAAAJ&hl=en",
  youtube: "https://www.youtube.com/@AbhashAcharya",
};

// Single source of truth for brand hue.
// Change this one value to retheme all accent-driven UI parts.
// Using a strong blue and white palette for the new visual theme.
const brandColor = "oklch(0.43 0.30 260)";
const brandTextOnColor = "oklch(0.99 0 0)";

const themeColors = {
  // Keep overrides minimal: all other tokens are derived from these in styles.css.
  brand: brandColor,
  "brand-foreground": brandTextOnColor,
} as const;

export const portfolioConfig: PortfolioConfig = {
  site: {
    name: profile.name,
    role: profile.role,
  },
  person: {
    fullName: profile.name,
    location: profile.location,
    email: profile.email,
    linkedin: profile.linkedin,
  },
  nav: {
    brand: {
      text: profile.name,
      accentText: ".",
      href: "#",
    },
    links: [
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Services", href: "#services" },
      { label: "Experience", href: "#experience" },
      { label: "Contact", href: "#contact" },
    ],
    cta: {
      label: "Hire Me",
      href: "#contact",
    },
  },
  seo: {
    title: `${profile.name} | Civil Engineering Educator & Transportation Researcher`,
    description:
      "Civil engineering educator and transportation researcher focused on sustainable mobility, road safety, and infrastructure design in Nepal.",
    author: profile.name,
    ogImage:
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8a26296c-4b36-46bf-829e-0469bb62ecf2/id-preview-6db04203--557eecb1-1f64-4c35-842e-6bd4d1e84a18.lovable.app-1775816077576.png",
  },
  theme: {
    mode: "light",
    colors: themeColors,
  },
  blocks: [
    {
      id: "hero-main",
      type: "hero",
      badge: profile.role,
      headingPrefix: "Hi, I'm",
      headingHighlight: profile.name,
      description:
        "I lead transportation research, civil engineering education, and infrastructure planning to deliver safer, sustainable mobility solutions.",
      primaryCta: {
        label: "Let's Connect",
        href: "#contact",
      },
      secondaryCta: {
        label: "View Projects",
        href: "#experience",
      },
      image: {
        src: withBase("/images/hero-clipart.png"),
        alt: "Illustration representing academic research and transportation engineering",
        width: 1024,
        height: 1024,
      },
    },
    {
      id: "about-main",
      type: "about",
      title: "About",
      titleHighlight: "Me",
      paragraphs: [
        "I'm a civil engineer and educator specializing in transportation engineering, road safety, and infrastructure design.",
        "As Head of the Civil Engineering Department, I blend academic leadership, research publications, and practical project delivery across Nepal.",
      ],
      image: {
        src: "https://abhashacharya.com.np/wp-content/uploads/2025/02/BT.jpg",
        alt: `${profile.name} - ${profile.role}`,
        width: 500,
        height: 600,
      },
      nameTag: profile.name,
      stats: [
        { value: "10+", label: "Years Experience" },
        { value: "200+", label: "Students Taught" },
        { value: "30+", label: "Research Papers Reviewed" },
        { value: "100%", label: "Academic Focus" },
      ],
    },
    {
      id: "skills-main",
      type: "skills",
      title: "My",
      titleHighlight: "Skills",
      subtitle:
        "A modern engineering toolkit for shipping high-quality products.",
      items: [
        { name: "Transportation Engineering", level: 92 },
        { name: "Civil Infrastructure Design", level: 90 },
        { name: "Road Safety Analysis", level: 88 },
        { name: "Traffic Modeling & Simulation", level: 86 },
        { name: "Academic Leadership", level: 84 },
        { name: "Research & Publication", level: 82 },
        { name: "Project Feasibility", level: 80 },
        { name: "Training & Workshops", level: 78 },
      ],
      image: {
        src: withBase("/images/skills-clipart.png"),
        alt: "Achievement and skills illustration",
        width: 800,
        height: 800,
      },
    },
    {
      id: "services-main",
      type: "services",
      title: "What I",
      titleHighlight: "Do",
      subtitle:
        "End-to-end development services to take products from concept to launch.",
      items: [
        {
          icon: "🏫",
          title: "Civil Engineering Education",
          desc: "Develop and deliver courses, workshops, and training for engineering students and professionals.",
        },
        {
          icon: "🚦",
          title: "Transportation Planning",
          desc: "Traffic studies, mobility analysis, and evidence-based transport research for safer cities.",
        },
        {
          icon: "🛣️",
          title: "Infrastructure Design",
          desc: "Road, intersection, and transport infrastructure design with practical feasibility and cost planning.",
        },
        {
          icon: "📚",
          title: "Research & Publications",
          desc: "Publish peer-reviewed papers, review journals, and support data-driven transportation policy.",
        },
        {
          icon: "🧑‍🎓",
          title: "Project Supervision",
          desc: "Guide final year projects and academic research from concept through completion.",
        },
        {
          icon: "🤝",
          title: "Consulting & Training",
          desc: "Provide consulting, reporting, and capacity building in transport and civil engineering.",
        },
      ],
      image: {
        src: withBase("/images/services-clipart.png"),
        alt: "Illustration representing civil engineering services and transportation planning",
        width: 800,
        height: 800,
      },
    },
    {
      id: "experience-main",
      type: "experience",
      title: "My",
      titleHighlight: "Journey",
      subtitle: "Leading civil engineering education, transport research, and infrastructure projects.",
      items: [
        {
          year: "2023 - Present",
          role: "Head of Department, Civil Engineering",
          company: "Aryan School of Engineering",
          desc: "Leading academic programs, research initiatives, and department operations.",
        },
        {
          year: "2020 - Present",
          role: "Part-Time Faculty",
          company: "Thapathali Campus & Other Engineering Colleges",
          desc: "Teaching civil and transportation engineering courses to undergraduate students.",
        },
        {
          year: "2018 - 2023",
          role: "Lecturer / Year Coordinator",
          company: "Universal Engineering and Science College",
          desc: "Managed academics, student projects, and course delivery for engineering cohorts.",
        },
        {
          year: "2018",
          role: "Civil Engineer",
          company: "Mudbhary and Joshi Construction Pvt. Ltd.",
          desc: "Supported field engineering, site supervision, and construction project execution.",
        },
      ],
    },
    {
      id: "contact-main",
      type: "contact",
      title: "Let's",
      titleHighlight: "Talk",
      subtitle:
        "Need an engineering educator, transport researcher, or infrastructure consultant? Let's connect.",
      cardTitle: "Send a Message",
      submitLabel: "Send Message",
      successMessage: "Thanks for your message. I will get back to you soon.",
      errorMessage: "Unable to send your message right now. Please try again shortly.",
      contactItems: [
        { icon: "✉️", label: "Email", value: profile.email, href: `mailto:${profile.email}` },
        { icon: "📍", label: "Location", value: profile.location },
        { icon: "🔗", label: "LinkedIn", value: profile.linkedin, href: socialLinks.linkedin },
      ],
      image: {
        src: withBase("/images/contact-clipart.png"),
        alt: "Contact and communication illustration",
        width: 800,
        height: 800,
      },
    },
    {
      id: "footer-main",
      type: "footer",
      socialLinks: [
        { label: "LinkedIn", href: socialLinks.linkedin },
        { label: "Google Scholar", href: socialLinks.googleScholar },
        { label: "YouTube", href: socialLinks.youtube },
      ],
      copyrightText: "All rights reserved.",
    },
  ],
};
