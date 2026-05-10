// app/work/page.tsx
import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "@phosphor-icons/react/dist/ssr";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

const projects = [
  {
    name: "TechMaster",
    url: "https://techmaster.co.uk",
    displayUrl: "techmaster.co.uk",
    description:
      "Auto repair workshop website built for lead generation — booking integration, local SEO, and a clean conversion-focused layout.",
    tag: "Web App",
    cta: "Visit Site",
    self: false,
  },
  {
    name: "Rhazes AI",
    url: "https://rhazes.ai",
    displayUrl: "rhazes.ai",
    description:
      "AI web app rebuilt and launched solo in under 4 weeks. Custom CRM, blog system, and full backend infrastructure.",
    tag: "Web App",
    cta: "Visit Site",
    self: false,
  },
  {
    name: "Fuloos",
    url: "https://fuloos.co.uk",
    displayUrl: "fuloos.co.uk",
    description:
      "Headless Shopify storefront for a London streetwear brand — custom product pages, collections, and performance-tuned checkout flow.",
    tag: "E-commerce",
    cta: "Visit Site",
    self: false,
  },
  {
    name: "DSGNR Labs",
    url: "https://dsgnrlabs.com",
    displayUrl: "dsgnrlabs.com",
    description:
      "Agency website for DSGNR Labs — conversion-focused, dark/light theme, built entirely in Next.js with shadcn/ui.",
    tag: "Agency Website",
    cta: "Visit Site",
    self: false,
  },
  {
    name: "riyanalghamdi.com",
    url: "https://riyanalghamdi.com",
    displayUrl: "riyanalghamdi.com",
    description:
      "This site. A minimal personal portfolio and identity page, built with Next.js and designed from scratch.",
    tag: "Personal Site",
    cta: "You're here",
    self: true,
  },
  {
    name: "QNB — HALA x Revolut",
    url: "https://www.figma.com/design/yyhojoBSAo9MuEfvK82PK7/HALA-REVOLUT-QNB?node-id=2308-15883&t=1B9Q7bPsOwOSmLqk-1",
    displayUrl: "figma.com",
    description:
      "Mobile banking UI concept for QNB — a Revolut-inspired redesign exploring a modern, minimal direction for digital banking in Qatar.",
    tag: "Mobile Design",
    cta: "View Design",
    self: false,
  },
];

export default function WorkPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-120px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-foreground/10 blur-[120px] dark:bg-foreground/5" />
      </div>

      <div className="mx-auto w-full max-w-3xl px-5 py-10">
        {/* Top bar */}
        <div className="mb-10 flex items-center justify-between">
          <Button asChild variant="ghost" size="sm" className="rounded-full text-muted-foreground hover:text-foreground -ml-2">
            <Link href="/">
              <ArrowLeft size={16} weight="light" className="mr-1.5" />
              Back
            </Link>
          </Button>
          <ThemeToggle />
        </div>

        {/* Header */}
        <section className="space-y-3">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Work</h1>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
            A selection of websites, web apps, and mobile design work — built for real clients and personal projects.
          </p>
        </section>

        <Separator className="my-10" />

        {/* Project cards */}
        <section className="space-y-3">
          {projects.map((p) => (
            <Card
              key={p.name}
              className="rounded-2xl border border-border/60 bg-card/60 p-5 backdrop-blur"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-1.5 flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm font-semibold">{p.name}</p>
                    <Badge variant="secondary" className="rounded-full text-[11px]">
                      {p.tag}
                    </Badge>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>

                  {!p.self && (
                    <Link
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {p.displayUrl}
                      <ArrowUpRight size={12} weight="light" />
                    </Link>
                  )}
                </div>

                <div className="flex-shrink-0 self-start">
                  {p.self ? (
                    <Badge variant="outline" className="rounded-full text-[11px] whitespace-nowrap">
                      {p.cta}
                    </Badge>
                  ) : (
                    <Button
                      asChild
                      variant="secondary"
                      size="sm"
                      className="rounded-full text-xs whitespace-nowrap"
                    >
                      <Link href={p.url} target="_blank" rel="noreferrer">
                        {p.cta}
                        <ArrowUpRight size={14} weight="light" className="ml-1" />
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </section>

        <Separator className="my-10" />

        <footer className="space-y-2 pb-6 text-xs text-muted-foreground">
          <p>Based in London • Open to Select Builds & Collaborations</p>
          <p>© {new Date().getFullYear()} Riyan Al-Ghamdi</p>
        </footer>
      </div>
    </main>
  );
}
