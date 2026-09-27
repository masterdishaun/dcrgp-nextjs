export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Business Strategy", href: "/services/business-strategy" },
      { label: "Advisory Retainers", href: "/services/advisory-retainers" },
      { label: "Operations Optimization", href: "/services/operations-optimization" },
    ],
  },
  {
    label: "Case studies",
    href: "/case-studies",
  },
  {
    label: "Insights",
    href: "/insights",
  },
];

export const ctaButton = {
  label: "Get started",
  href: "/contact",
};

export const footerNavigation = {
  company: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Case studies", href: "/case-studies" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],
  ventures: [
    { label: "Regent Pipeline", href: "/ventures/regent-pipeline" },
    { label: "Mavire Codoir", href: "/ventures/mavire-codoir" },
    { label: "Prompt & Pause", href: "/ventures/prompt-pause" },
    { label: "DC Web Studio", href: "/ventures/dc-web-studio" },
    { label: "Regent AI Labs", href: "/ventures/regent-ai-labs" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};
