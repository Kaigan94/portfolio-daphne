"use client";
import { Mail } from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ScrollView } from "./scroll-view";

export default function ContactCards() {
  return (
    <section id="contact" className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollView>
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        </ScrollView>
        <ScrollView stagger delay={0.1}>
          <div className="flex gap-4 flex-wrap items-center justify-center">
            <Card className="p-6 flex items-center gap-4 hover:shadow-lg transition-shadow">
              <Mail className="w-6 h-6" />
              <a href="mailto:daphnevceriksson@gmail.com" className="text-sm font-medium hover:underline">
                Send Email
              </a>
            </Card>

            <Card className="p-6 flex items-center gap-4 hover:shadow-lg transition-shadow">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <Link
                href="https://www.linkedin.com/in/daphne-eriksson-86b258162/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:underline"
              >
                LinkedIn Profile
              </Link>
            </Card>
          </div>
        </ScrollView>
      </div>
    </section>
  );
}
