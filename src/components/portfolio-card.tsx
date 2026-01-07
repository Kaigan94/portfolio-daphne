import Image from "next/image";
import { CustomCursorElement } from "./custom-cursor-element";
import { ScrollView } from "./scroll-view";

export default function PortfolioCard({
  card,
  source = "home",
  priority = false,
}: {
  card: {
    id: string;
    name: string;
    description: string;
    img: string;
    url: string;
  };
  source?: "home" | "all-projects";
  priority?: boolean;
}) {
  return (
    <div>
      <CustomCursorElement cursor={<div className="text-zinc-950 text-lg font-medium">View</div>}>
        <ScrollView>
          <div className="group hover:scale-105 transition-all duration-500">
            <a href={`/projects/${card.id}?from=${source}`}>
              <div className="relative w-full h-[200px] overflow-hidden rounded-lg">
                <Image
                  className="grayscale-25 hover:grayscale-0 transition-all duration-500 object-cover"
                  fill
                  src={card.img}
                  alt={card.name}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={priority}
                  quality={85}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNcvWS9PgAGgwLS4TzoJQAAAABJRU5ErkJggg=="
                />
              </div>
              <div className="mt-4">
                <h3 className="text-title text-2xl font-medium">{card.name}</h3>
                <p className="text-muted-foreground">{card.description}</p>
              </div>
            </a>
          </div>
        </ScrollView>
      </CustomCursorElement>
    </div>
  );
}
