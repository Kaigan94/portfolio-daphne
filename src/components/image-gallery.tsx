"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

interface ImageGalleryProps {
  images: string[];
  projectName: string;
}

export function ImageGallery({ images, projectName }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Gallery</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.slice(0, 2).map((img, idx) => (
            <div key={idx} className="relative w-full aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group" onClick={() => setSelectedImage(img)}>
              <Image src={img} alt={`${projectName} ${idx + 1}`} fill className="object-contain transition-transform duration-500 group-hover:scale-102" />
            </div>
          ))}
        </div>

        {images.length > 2 && (
          <div className="space-y-6">
            {images.slice(2).map((img, idx) => (
              <div key={idx} className="relative w-full aspect-[16/9] rounded-lg overflow-hidden cursor-pointer group" onClick={() => setSelectedImage(img)}>
                <Image src={img} alt={`${projectName} ${idx + 3}`} fill className="object-contain transition-transform duration-500 group-hover:scale-102" />
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={() => setSelectedImage(null)}>
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 p-2"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            aria-label="Close"
          >
            <X className="w-8 h-8 cursor-pointer" />
          </button>
          <div className="relative w-full h-full max-w-7xl max-h-[90vh] cursor-pointer" onClick={(e) => e.stopPropagation()}>
            <Image src={selectedImage} alt="Enlarged view" fill className="object-contain" />
          </div>
        </div>
      )}
    </>
  );
}
