export type SiteConfiguration = {
  title: string;
  description: string;
  url: string;
  author: string;
  locale: string;
};

export type NavigationLinks = {
  [key: string]: NavigationLink;
};

export type NavigationLink = {
  label: string;
  path: string;
};

export type SocialLinks = {
  [key: string]: SocialLink;
};

export type SocialLink = {
  label: string;
  url: string;
};
