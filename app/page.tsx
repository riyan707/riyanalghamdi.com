// app/page.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  InstagramLogo,
  YoutubeLogo,
  TiktokLogo,
  LinkedinLogo,
  GithubLogo,
  EnvelopeSimple,
  ArrowUpRight,
  Sparkle,
  FolderSimple,
  BookOpen,
  UserCircle,
} from "@phosphor-icons/react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

const socials = [
  { label: "Instagram", href: "https://instagram.com/riyanalghamdii", icon: InstagramLogo },
  { label: "YouTube", href: "https://www.youtube.com/@theriyanalghamdi", icon: YoutubeLogo },
  { label: "TikTok", href: "https://www.tiktok.com/@riyanlivee", icon: TiktokLogo },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/riyanalghamdi/", icon: LinkedinLogo },
  { label: "GitHub", href: "https://github.com/riyan707", icon: GithubLogo },
  { label: "Email", href: "mailto:hello@riyanalghamdi.com", icon: EnvelopeSimple },
];

const connectLinks = [
  { label: "Email", href: "mailto:hello@riyanalghamdi.com", icon: EnvelopeSimple },
  { label: "Instagram", href: "https://instagram.com/riyanalghamdii", icon: InstagramLogo },
];

const proofBadges = [
  "Websites",
  "Automation",
  "AI Systems",
  "Funnels",
  "Brand Infrastructure",
  "Content",
  "Built With Intention",
];

const moreBadges = [
  "Next.js",
  "Supabase",
  "Postgres",
  "Shopify",
  "Tailwind",
  "shadcn/ui",
  "n8n",
  "APIs",
  "Automation Pipelines",
  "AI Tooling",
];

const builds = [
  {
    title: "Headless Shopify Store",
    what: "Custom storefront + Shopify backend infrastructure for drops.",
    highlights: ["Product pages", "Cart + checkout wiring", "Collections", "Performance-focused"],
    stack: ["Next.js", "Shopify Storefront API", "shadcn/ui", "Tailwind"],
    status: "Shipping & improving",
  },
  {
    title: "AI-Powered Trading System",
    what: "Live signals + execution + monitoring dashboard with alerts.",
    highlights: ["Ensemble model", "Risk management", "Logging + summaries", "Telegram alerts"],
    stack: ["Python", "ML", "OANDA", "Dashboard"],
    status: "Live on demo",
  },
  {
    title: "Client Acquisition Automation",
    what: "Lead capture → CRM → follow-ups and onboarding automation.",
    highlights: ["Auto follow-up sequences", "Notion CRM pipeline", "Lead status tracking", "Dashboard creation"],
    stack: ["n8n", "Notion", "Email", "APIs"],
    status: "In production",
  },
  {
    title: "Performance-Based Agency Model",
    what: "Branding + funnels + backend systems built to scale clients.",
    highlights: ["Offer positioning", "Landing pages", "Automation layer", "Retainer model"],
    stack: ["Strategy", "Web", "Automation", "Ads"],
    status: "Operating",
  },
];

// Optional “recent posts” placeholders (Ignacio vibe). Replace later or delete section.
const posts = [
  {
    date: "Friday, February 6, 2026",
    title: "Why Fundamentals Will Keep Winning",
    href: "#",
    meta: "• 5 min read",
  },
  {
    date: "Wednesday, December 24, 2025",
    title: "Building Systems: Funnels, Automation, and Leverage",
    href: "#",
    meta: "• 6 min read",
  },
];

// Optional testimonials placeholders (Ignacio vibe). Replace later or delete section.
const testimonials = [
  {
    quote:
      "Riyan moves fast and thinks in systems. Strong execution, clean taste, and constantly improving the infrastructure behind the scenes.",
    name: "— Client / Collaborator",
    role: "Founder",
  },
  {
    quote:
      "He doesn’t just design pages — he builds the full machine: branding, funnel logic, and automation so the business actually runs.",
    name: "— Partner",
    role: "Operator",
  },
];

export default function Page() {
  const [showMoreSkills, setShowMoreSkills] = React.useState(false);
  return (
    <TooltipProvider>
      <main className="relative min-h-screen bg-background text-foreground">
        {/* Subtle glow background (close to Ignacio feel) */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-120px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-foreground/10 blur-[120px] dark:bg-foreground/5" />
        </div>

        <div className="mx-auto w-full max-w-3xl px-5 py-10">
          {/* Top-right controls */}
          <div className="mb-10 flex items-center justify-end">
            <ThemeToggle />
          </div>

          {/* HERO (Ignacio-ish hierarchy) */}
          <section className="space-y-5">

            <div className="relative h-16 w-16">
              {/* Glow layer */}
              <div className="absolute -inset-3 rounded-full blur-2xl bg-black/40 dark:bg-white/40 opacity-80" />

              {/* Image layer */}
              <div className="relative h-16 w-16 overflow-hidden rounded-full ring-1 ring-border bg-background">
                <Image
                  src="/pfp.jpg"
                  alt="Riyan Al-Ghamdi"
                  fill
                  sizes="64px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Riyan Al-Ghamdi
              </h1>

              <p className="text-base text-muted-foreground">
                <span className="text-foreground font-medium">Builder. Founder. Creator.</span>{" "}
                Focused on websites, automation, and building systems with intention.
              </p>

              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                I build clean digital infrastructure for brands and creators — then document the journey through Islamic reflections,
                discipline, motivation, and honest opinions.
              </p>
            </div>

            {/* Tiny “Learn more” link (Ignacio style) */}
            <div className="pt-1">
              <Link
                href="#built"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Learn more <ArrowUpRight size={16} weight="light" />
              </Link>
            </div>

            {/* Social icons row (minimal) */}
            <div className="flex flex-wrap gap-4 pt-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <Tooltip key={s.label}>
                    <TooltipTrigger asChild>
                      <Link
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={s.label}
                        className="text-muted-foreground transition-colors duration-200 hover:text-foreground"
                      >
                        <Icon size={20} weight="light" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent className="text-xs">{s.label}</TooltipContent>
                  </Tooltip>
                );
              })}
            </div>
          </section>

          {/* FEATURE GRID (big card + 3 small cards) */}
          <section className="mt-10 space-y-4">
            <div className="grid gap-3 sm:grid-cols-3">
              {/* Big card */}
              <Card className="sm:col-span-3 rounded-2xl border border-border/60 bg-card/60 p-5 backdrop-blur">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-xl border border-border/60 bg-background/40 p-2">
                    <Sparkle size={18} weight="light" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold">Systems & Ideas</p>
                    <p className="text-sm text-muted-foreground">
                      I build end-to-end projects — websites, funnels, and automation layers that actually scale.
                    </p>
                  </div>
                </div>
              </Card>

              {/* 3 small cards */}
              <Card className="rounded-2xl border border-border/60 bg-card/60 p-5 backdrop-blur">
                <div className="flex items-start gap-3">
                  <FolderSimple size={18} weight="light" className="mt-0.5 text-muted-foreground" />
                  <div className="space-y-1">
                    <p className="text-sm font-semibold">Things I’ve Built</p>
                    <p className="text-sm text-muted-foreground">Applications, systems, and infrastructure.</p>
                  </div>
                </div>
              </Card>

              <Card className="rounded-2xl border border-border/60 bg-card/60 p-5 backdrop-blur">
                <div className="flex items-start gap-3">
                  <BookOpen size={18} weight="light" className="mt-0.5 text-muted-foreground" />
                  <div className="space-y-1">
                    <p className="text-sm font-semibold">Content</p>
                    <p className="text-sm text-muted-foreground">Islam, discipline, motivation, opinions.</p>
                  </div>
                </div>
              </Card>

              <Card className="rounded-2xl border border-border/60 bg-card/60 p-5 backdrop-blur">
                <div className="flex items-start gap-3">
                  <UserCircle size={18} weight="light" className="mt-0.5 text-muted-foreground" />
                  <div className="space-y-1">
                    <p className="text-sm font-semibold">About</p>
                    <p className="text-sm text-muted-foreground">Builder mindset. Long-term vision.</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Proof pills */}
            <div className="pt-2">
              <div className="flex flex-wrap gap-2 transition-all duration-300">
                {[...proofBadges, ...(showMoreSkills ? moreBadges : [])].map((b) => (
                  <Badge
                    key={b}
                    variant="secondary"
                    className="rounded-full px-3 py-1 text-xs"
                  >
                    {b}
                  </Badge>
                ))}
              </div>
              
              <button
                type="button"
                onClick={() => setShowMoreSkills((v) => !v)}
                className="mt-3 text-sm text-muted-foreground transition hover:text-foreground"
              >
                {showMoreSkills ? "View less..." : "View more..."}
              </button>
            </div>
          </section>

          <Separator className="my-10" />

          {/* BUILDS */}
          <section id="built" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold tracking-wide">
                <span className="text-muted-foreground">##</span>{" "}
                <span className="ml-1">{">"} Things I’ve Built</span>
              </h2>
            </div>

            <div className="grid gap-3">
              {builds.map((p) => (
                <Card key={p.title} className="rounded-2xl border border-border/60 bg-card/60 p-5 backdrop-blur">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <p className="text-sm font-semibold">{p.title}</p>
                        <p className="text-sm text-muted-foreground">{p.what}</p>
                      </div>

                      <Badge variant="outline" className="rounded-full text-[11px]">
                        {p.status}
                      </Badge>
                    </div>

                    <div className="grid gap-1 text-sm text-muted-foreground">
                      {p.highlights.map((h) => (
                        <p key={h}>• {h}</p>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {p.stack.map((t) => (
                        <Badge key={t} variant="secondary" className="rounded-full text-[11px]">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <Separator className="my-10" />


          {/* CONNECT (Ignacio-style card with pill buttons) */}
          <section className="space-y-4">
            <Card className="rounded-3xl border border-border/60 bg-card/60 p-6 backdrop-blur">
              <div className="space-y-2">
                <h2 className="text-lg font-semibold">Let’s connect</h2>
                <p className="text-sm text-muted-foreground">
                  Always open to new opportunities, collaborations, or a quick chat.
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {connectLinks.map((c) => {
                  const Icon = c.icon;
                  return (
                    <Button key={c.label} asChild variant="secondary" className="rounded-full">
                      <Link
                        href={c.href}
                        target={c.href.startsWith("mailto:") ? undefined : "_blank"}
                        rel={c.href.startsWith("mailto:") ? undefined : "noreferrer"}
                      >
                        <Icon size={18} weight="light" className="mr-2" />
                        {c.label}
                      </Link>
                    </Button>
                  );
                })}
              </div>
            </Card>
          </section>

          <Separator className="my-10" />

          {/* FOOTER */}
          <footer className="space-y-2 pb-6 text-xs text-muted-foreground">
            <p>Based in London • Open to Select Builds & Collaborations</p>
            <p>© {new Date().getFullYear()} Riyan Al-Ghamdi</p>
          </footer>
        </div>
      </main>
    </TooltipProvider>
  );
}