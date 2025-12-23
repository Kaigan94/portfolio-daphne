"use client";
import { Logo } from "@/components/logo";
import Link from "next/link";
import { motion } from "motion/react";
import { ScrollView } from "./scroll-view";
import { FOOTER_LINKS } from "@/content/footer";

export default function FooterSection() {
  return (
    <footer className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollView>
          <Link href="/" aria-label="go home" className="mx-auto block size-fit">
            <Logo />
          </Link>
        </ScrollView>
        <ScrollView stagger delay={0.1}>
          <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
            {FOOTER_LINKS.map((link, index) => (
              <div key={link.title}>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      filter: "blur(0px)",
                    },
                  }}
                >
                  <Link href={link.href} className="text-muted-foreground hover:text-primary block duration-150">
                    <span>{link.title}</span>
                  </Link>
                </motion.div>
              </div>
            ))}
          </div>
        </ScrollView>
        <ScrollView delay={0.15} viewMargin="0px 0px -20px 0px">
          <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
            <Link
              href="https://www.linkedin.com/in/daphne-eriksson-86b258162/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary block"
            >
              <svg className="size-6" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                ></path>
              </svg>
            </Link>
          </div>
        </ScrollView>
        <ScrollView delay={0.2} viewMargin="0px 0px -20px 0px">
          <span className="text-muted-foreground block text-center text-sm"> © {new Date().getFullYear()} Kaigan. All rights reserved</span>
        </ScrollView>
      </div>
    </footer>
  );
}
