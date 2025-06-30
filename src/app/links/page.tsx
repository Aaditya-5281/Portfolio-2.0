"use client";

import { ThemeToggle } from "@/components/ThemeToggle";
import { AnimateIn } from "@/components/animations/AnimateIn";
import { ArrowUpRight } from "lucide-react";
import { track } from "@vercel/analytics";
import Link from "next/link";

export default function Links() {
  return (
    <main className="text-zinc-900 dark:text-zinc-100 max-w-xl mx-auto px-4 py-4 flex flex-col h-svh justify-between">
      <div>
        <AnimateIn variant="fadeUp">
          <section className="mb-12">
            <AnimateIn variant="fadeUp" delay={0.2}>
              <h1 className="text-lg font-medium tracking-tight mb-8 flex items-baseline justify-between">
                <span>some of my useful links</span>
                <ThemeToggle />
              </h1>
            </AnimateIn>
          </section>
        </AnimateIn>

        <AnimateIn variant="fadeUp" delay={0.4}>
          <div className="flex flex-col gap-2 mb-8">
            <div className="group">
              <Link
                href="https://cal.com/aaditya-kumar-5281"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-lg hover:translate-x-1 transition-all duration-300 ease-out"
                onClick={() => track(`cal_link_clicked`)}
              >
                <span>Book a call</span>
                <ArrowUpRight />
              </Link>
            </div>
          </div>
        </AnimateIn>

        <AnimateIn variant="fadeUp" delay={0.4}>
          <div className="flex flex-col gap-2">
            {/*projectLinks.map((link) => (
              <div key={link.name} className="group">
                <Link
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-lg hover:translate-x-1 transition-all duration-300 ease-out"
                  onClick={() => track(link.track || `${link.name.toLowerCase()}_link_clicked`)}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight />
                </Link>
              </div>
            ))*/}
          </div>
        </AnimateIn>

        <AnimateIn variant="fadeUp" delay={0.4} className="mt-8">
          <div className="flex flex-col gap-2">
            {socialLinks.map((link) => (
              <div key={link.name} className="group">
                <Link
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-lg hover:translate-x-1 transition-all duration-300 ease-out"
                  onClick={() => track(link.track || `${link.name.toLowerCase()}_link_clicked`)}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight />
                </Link>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>

      <AnimateIn variant="fadeUp" delay={0.8} className="">
        <footer className="pt-4 text-xs text-zinc-400 dark:text-zinc-500 flex justify-between items-center">
          <div>Aaditya</div>
          <div>Built with Next.js</div>
        </footer>
      </AnimateIn>
    </main>
  );
}

type Link = {
  name: string;
  url: string;
  track?: string;
};
/*
const projectLinks: Link[] = [
  {
    name: "",
    url: "",
  }
];
*/

const socialLinks: Link[] = [
  {
    name: "calcom",
    url: "https://cal.com/aaditya-kumar-5281",
  },
  {
    name: "github",
    url: "https://github.com/Aaditya-5281",
  },
  {
    name: "x",
    url: "https://x.com/Aaditya26082004",
  },

  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/aaditya-kumar-0b662224a",
  },
  {
    name: "email",
    url: "mailto:aadityakumar26082004@gmail.com",
  }
];
