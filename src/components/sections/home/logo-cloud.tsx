import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import Image from "next/image";

export default function LogoCloud() {
  const logos = [
    { src: "/logos/photoshop.svg", alt: "Adobe Photoshop" },
    { src: "/logos/illustrator.svg", alt: "Adobe Illustrator" },
    { src: "/logos/after-effects.svg", alt: "After Effects" },
    { src: "/logos/indesign.svg", alt: "InDesign" },
    { src: "/logos/figma.svg", alt: "Figma" },
  ];

  return (
    <section className=" overflow-hidden py-16">
      <div className="group relative m-auto max-w-7xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:max-w-44 md:border-r md:pr-6">
            <p className="text-end text-sm hidden xl:block">Some of my skills & tools:</p>
          </div>
          <div className="relative py-6 md:w-[calc(100%-11rem)]">
            <InfiniteSlider speedOnHover={20} speed={40} gap={100}>
              {logos.map((logo, index) => (
                <div key={index} className="flex items-center justify-center h-12">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={48}
                    height={48}
                    className="object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                  />
                </div>
              ))}
            </InfiniteSlider>
          </div>
        </div>
      </div>
    </section>
  );
}
