import type { ImageMetadata } from "astro";
import restaurantEditor from "../assets/work/restaurant-editor.png";
import restaurantSite from "../assets/work/restaurant-site.png";
import fineGrind from "../assets/work/fine-grind.png";
import alex from "../assets/work/alex.png";
import fda from "../assets/work/fda-recall-tracker.png";

export interface Link {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  kind: string;
  year: string;
  summary: string;
  points: string[];
  stack: string[];
  links: Link[];
  image: ImageMetadata;
  imageAlt: string;
  secondImage?: { src: ImageMetadata; alt: string };
}

/** Studio projects. Every fact here is from the project's repo, docs or live site. */
export const projects: Project[] = [
  {
    title: "Restaurant site generator + voice editor",
    kind: "Product prototype",
    year: "2026",
    summary:
      "A fast restaurant website generated from menu JSON, a menu-quality checker, and an editor a busy owner can use from a phone: say or type a change, check it, approve it, publish.",
    points: [
      "Static Astro site with one React island for the cart and Restaurant/Menu JSON-LD; scores 100 in all four Lighthouse categories on mobile and desktop (lab runs).",
      "12 fixed, zod-validated commands. Prices and allergen tags always wait for the owner's approval, and every change can be undone.",
      "A deterministic parser handles common phrasing for free; the AI model is only a fallback, at about $0.0007 per call, behind credits, rate limits and a daily spend cap.",
      "160 tests in GitHub Actions CI, including the API against a real MongoDB.",
    ],
    stack: ["TypeScript", "Astro", "React", "Next.js", "Node.js", "MongoDB", "zod", "Cloudflare Pages", "Vercel"],
    links: [
      { label: "Live site", href: "https://restaurant-site-poc.pages.dev" },
      { label: "Live editor", href: "https://restaurant-site-poc-editor.vercel.app" },
      { label: "Code", href: "https://github.com/anothermoth/restaurant-site-poc" },
    ],
    image: restaurantEditor,
    imageAlt: "The voice editor: a text box and mic on the left, a live preview of the restaurant's menu on the right",
    secondImage: { src: restaurantSite, alt: "The generated restaurant menu page" },
  },
  {
    title: "Fine Grind Fabrication",
    kind: "Small-business website",
    year: "2026",
    summary:
      "The website for a custom metal fabrication shop in Oklahoma City: a gallery of the shop's work, services, and one place for customers to reach the shop.",
    points: [
      "Fast, mobile-responsive static site with on-page SEO: meta and Open Graph tags, schema.org business data, a sitemap, and lazy-loaded responsive images.",
      "A single “Talk to the shop” entry point (voice agent, chat and quote form) feeding one lead inbox, with rate limits and cost caps.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Netlify Functions", "Voice AI"],
    links: [{ label: "Live site", href: "https://finegrindfabrication.com/" }],
    image: fineGrind,
    imageAlt: "Fine Grind Fabrication home page with a steel pavilion photo",
  },
  {
    title: "ALEX drum engine",
    kind: "Audio / DSP · in development",
    year: "2026",
    summary:
      "A drum-sound instrument that layers sample and synthesized channels and shapes them with a master transient section.",
    points: [
      "C++ DSP compiled to WebAssembly and run in a Web Audio AudioWorklet, so it plays in the browser with no install.",
      "The same DSP builds natively as a JUCE VST3 and standalone app.",
    ],
    stack: ["C++", "WebAssembly", "Web Audio", "JUCE", "JavaScript"],
    links: [],
    image: alex,
    imageAlt: "ALEX's POLY8 synth page: oscillators, filter and envelope controls",
  },
  {
    title: "FDA drug recall tracker",
    kind: "Full-stack app",
    year: "2026",
    summary: "Search and filter FDA drug enforcement recalls, from a scheduled openFDA ingest job into PostgreSQL.",
    points: [
      "React (Vite) dashboard with URL-driven filters and a Node.js/Express REST API using PostgreSQL full-text search.",
      "Vitest, Testing Library and Supertest; GitHub Actions CI; AWS CDK infrastructure (Lambda, API Gateway, S3, CloudFront, EventBridge).",
    ],
    stack: ["TypeScript", "React", "Node.js", "Express", "PostgreSQL", "AWS CDK"],
    links: [{ label: "Code", href: "https://github.com/anothermoth/fda-recall-tracker" }],
    image: fda,
    imageAlt: "The recall search page: filters above a table of recent drug recalls",
  },
];

export interface Prototype {
  title: string;
  summary: string;
  stack: string[];
  href?: string;
}

/** Smaller builds and experiments, described from their READMEs. */
export const prototypes: Prototype[] = [
  {
    title: "Animal Hub",
    summary: "An API and real-time event stream where shelters and rescues post urgent animals, and fosters, adopters and drivers claim them.",
    stack: ["Node.js", "JavaScript"],
    href: "https://github.com/anothermoth/animal-hub",
  },
  {
    title: "Shop console",
    summary: "An admin console for templated small-business sites with AI voice and chat agents: spending, features per shop, and voice-agent tuning with preview and rollback.",
    stack: ["JavaScript", "Cloudflare"],
  },
  {
    title: "Teeline",
    summary: "A timeline visualization tool built on event sourcing: data feeds become an append-only event log, projected into a web timeline.",
    stack: ["JavaScript"],
  },
];

export interface Role {
  org: string;
  role: string;
  dates: string;
  points: string[];
  stack: string[];
}

/** In-house and consulting roles, from Damon's resume. */
export const roles: Role[] = [
  {
    org: "Oklahoma State Department of Health",
    role: "Software engineering",
    dates: "2024 – present",
    points: [
      "Owned a Prescription Drug Monitoring Program (PDMP) application end to end, from idea through shipping, working directly with its users.",
      "Migrated a legacy Microsoft Access / T-SQL public-health application to Azure App Services and Azure SQL.",
      "Led the testing team, mentored junior developers, and helped bring SonarQube into the workflow.",
    ],
    stack: ["TypeScript", "React", "Remix", "Node.js", "Express", "Azure"],
  },
  {
    org: "American Quarter Horse Association",
    role: "Software engineering",
    dates: "2022 – 2024",
    points: [
      "Built the base front end for a next-generation certificate tracking and management system.",
      "Created a Tailwind CSS build process that gave designers and developers a shared design language.",
    ],
    stack: ["C#", "Blazor", "T-SQL", "Tailwind CSS"],
  },
  {
    org: "Nextep",
    role: "Software engineering",
    dates: "2020 – 2022",
    points: [
      "Built front-end components and pages for a PEO / payment processor on Salesforce.",
      "Worked with MuleSoft integrations, C# and Google Cloud Functions alongside the platform.",
    ],
    stack: ["Salesforce LWC", "Aura", "Apex", "MuleSoft", "C#"],
  },
  {
    org: "LegalShield",
    role: "Front-end engineering",
    dates: "2020",
    points: ["Built Angular components and services for an internal application, with Karma tests, Docker and JavaScript build pipelines."],
    stack: ["Angular", "TypeScript", "Docker"],
  },
  {
    org: "TetraTech",
    role: "Senior full-stack developer",
    dates: "2019",
    points: [
      "Built features across the stack, database through CSS, for an FAA safety initiative.",
      "Wrote extensive TypeScript test coverage and mentored teammates on code quality.",
    ],
    stack: ["TypeScript", "Angular", "C#"],
  },
  {
    org: "American Fidelity",
    role: "Salesforce developer / marketing specialist",
    dates: "2013 – 2019",
    points: [
      "Built automated landing-page generation and online enrollment tools for employer clients.",
      "Turned an actuarial Excel rate model into an iPad app that quotes life insurance rates for field agents.",
      "Supported an online appointment-scheduling application and built a planning-metrics tool for administrators.",
    ],
    stack: ["Angular", "PhoneGap", "C# / MVC", "Salesforce LWC"],
  },
  {
    org: "Beacon Environmental Assistance",
    role: "Technology consultant (part-time)",
    dates: "2009 – 2020",
    points: [
      "Designed and built an offline-capable iPad app for on-site inspection of oil well cleanup sites.",
      "Built a management portal on a PHP/MySQL back end, moving legacy Excel data into it.",
    ],
    stack: ["HTML", "JavaScript", "PHP", "MySQL"],
  },
  {
    org: "National HR / Alliance",
    role: "Project work",
    dates: "",
    points: [
      "Built a commissions calculator for 20+ agents and brokerages (over $325M in payroll per year), cutting a week-long manual process to one day with penny-accurate results.",
      "Built a web-based lookup that searches every internal company's database at once to find an employee.",
    ],
    stack: ["SQL", "Scripting", "Web"],
  },
  {
    org: "MyDentist",
    role: "Database administrator",
    dates: "2010 – 2011",
    points: ["Built a SQL Server 2008 / SSRS reporting datastore with NextDDS, and handled backups, restores, scheduled jobs, security and monitoring."],
    stack: ["SQL Server", "SSRS", "T-SQL"],
  },
];
