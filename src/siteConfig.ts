import type {
  SiteConfiguration,
  NavigationLinks,
  SocialLinks,
} from "@/types.ts";

export const SITE: SiteConfiguration = {
  title: "Barebones",
  description:
    "A barebones starter theme. Built with Astro, Tailwind CSS, and Markdwon.",
  url: "https://astro-barebones-theme.netlify.app",
  author: "SuperWeb Themes",
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
  contact: {
    path: "/contact",
    label: "Contact",
  },
  documentation: {
    path: "https://barebones.superwebthemes.com",
    label: "Documentation",
  },
};

export const SOCIAL_LINKS: SocialLinks = {
  email: {
    label: "Email",
    url: "mailto:info@superwebthemes.com",
  },
  github: {
    label: "GitHub",
    url: "https://github.com/superwebthemes",
  },
  twitter: {
    label: "Twitter",
    url: "https://twitter.com/superwebthemes",
  },
};
