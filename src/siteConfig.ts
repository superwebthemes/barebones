import type {
  SiteConfiguration,
  NavigationLinks,
  SocialLinks,
} from "@/types.ts";

export const SITE: SiteConfiguration = {
  title: "Barebones",
  description:
    "A barebones starter theme. Built with Astro, Tailwind CSS, and Markdown.",
  url: "https://barebones.superwebthemes.com",
  author: "SuperWeb Themes",
  locale: "en-US",
};

export const NAV_LINKS: NavigationLinks = {
  about: {
    path: "/about",
    label: "About",
  },
  blog: {
    path: "/blog",
    label: "Blog",
  },
  projects: {
    path: "/projects",
    label: "Projects",
  },
  contact: {
    path: "/contact",
    label: "Contact",
  },
  documentation: {
    path: "https://docs.superwebthemes.com",
    label: "Documentation",
  },
};

export const SOCIAL_LINKS: SocialLinks = {
  email: {
    label: "Email",
    url: "mailto:support@superwebthemes.com",
  },
  github: {
    label: "GitHub",
    url: "https://github.com/superwebthemes",
  },
  discord: {
    label: "Discord",
    url: "https://discord.gg/V5MCBCsAjJ",
  },
  twitter: {
    label: "Twitter",
    url: "https://twitter.com/superwebthemes",
  },
};
