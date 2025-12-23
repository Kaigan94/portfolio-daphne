import { Mail, MapPin, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ScrollView } from "./scroll-view";

export default function FeaturesSection() {
  return (
    <section id="contact" className="py-16 md:py-32 bg-gray-50 dark:bg-transparent">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
          <div className="lg:col-span-full">
            <ScrollView>
              <Card className="mx-auto mt-12 max-w-lg p-8 shadow-md sm:p-16 w-full">
                <div>
                  <h3 className="text-lg font-semibold">Any questions?</h3>
                  <p className="mt-4 text-sm">Reach out to me! I&apos;m eager to learn more about how I can assist you.</p>
                </div>

                <form action="" className="**:[&>label]:block mt-12 space-y-6 *:space-y-3">
                  <div>
                    <Label htmlFor="name">Full name</Label>
                    <Input type="text" id="name" required />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" required />
                  </div>

                  <div>
                    <Label htmlFor="msg">Message</Label>
                    <Textarea id="msg" rows={3} />
                  </div>

                  <Button>Submit</Button>
                </form>
              </Card>
            </ScrollView>
          </div>
        </div>
      </div>
    </section>
  );
}
