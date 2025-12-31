// "use client";
// import { Mail, MapPin, PhoneCall } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";

// import { Card } from "@/components/ui/card";
// import Link from "next/link";
// import { ScrollView } from "./scroll-view";
// import { useState } from "react";

export default function FeaturesSection() {
  return null;
}

// export default function FeaturesSection() {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setStatus("idle");

//     const formData = new FormData(e.currentTarget);
//     const data = {
//       name: formData.get("name") as string,
//       email: formData.get("email") as string,
//       message: formData.get("message") as string,
//     };

//     try {
//       const response = await fetch("/api/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       const result = await response.json();

//       if (result.success) {
//         setStatus("success");
//         e.currentTarget.reset();
//         setTimeout(() => setStatus("idle"), 5000);
//       } else {
//         throw new Error("Failed to send message");
//       }
//     } catch (error) {
//       setStatus("error");
//       setTimeout(() => setStatus("idle"), 5000);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section id="contact" className="py-16 md:py-32 bg-gray-50 dark:bg-transparent">
//       <div className="mx-auto max-w-6xl px-6">
//         <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
//           <div className="lg:col-span-full">
//             <ScrollView>
//               <Card className="mx-auto mt-12 max-w-lg p-8 shadow-md sm:p-16 w-full">
//                 <div>
//                   <h3 className="text-lg font-semibold">Any questions?</h3>
//                   <p className="mt-4 text-sm">Reach out to me! I&apos;m eager to learn more about how I can assist you.</p>
//                 </div>

//                 <form onSubmit={handleSubmit} className="**:[&>label]:block mt-12 space-y-6 *:space-y-3">
//                   <div>
//                     <Label htmlFor="name">Full name</Label>
//                     <Input type="text" id="name" name="name" required />
//                   </div>

//                   <div>
//                     <Label htmlFor="email">Email</Label>
//                     <Input type="email" id="email" name="email" required />
//                   </div>

//                   <div>
//                     <Label htmlFor="msg">Message</Label>
//                     <Textarea id="msg" name="message" rows={3} required />
//                   </div>

//                   {status === "success" && <p className="text-sm text-green-600 dark:text-green-400">Message sent successfully! Thank you for reaching out.</p>}

//                   {status === "error" && <p className="text-sm text-red-600 dark:text-red-400">Failed to send message. Please try again.</p>}

//                   <Button type="submit" disabled={isSubmitting}>
//                     {isSubmitting ? "Sending..." : "Submit"}
//                   </Button>
//                 </form>
//               </Card>
//             </ScrollView>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
