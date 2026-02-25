"use client";

import { useState, useEffect } from "react";
import { CldImage } from "next-cloudinary";
import type { GalleryImage, GalleryResponse } from "@/lib/cloudinary";

const ROWS = 8;
const ROW_SPEEDS = [40, 32, 45, 36, 42, 30, 48, 34];

const PhotoBackground = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      let all: GalleryImage[] = [];
      let cursor: string | undefined;
      do {
        const params = new URLSearchParams({ limit: "100" });
        if (cursor) params.set("cursor", cursor);
        const res = await fetch(`/api/gallery?${params}`);
        const data: GalleryResponse = await res.json();
        all = [...all, ...data.images];
        cursor = data.nextCursor ?? undefined;
      } while (cursor);
      setImages(all);
      setLoading(false);
    };
    fetchAll();
  }, []);

  const imagesPerRow = Math.ceil(images.length / ROWS);
  const rows = Array.from({ length: ROWS }, (_, i) => {
    const rowImages = images.slice(i * imagesPerRow, (i + 1) * imagesPerRow);
    const offset = i * 3;
    return [...rowImages.slice(offset), ...rowImages.slice(0, offset)];
  }).filter((row) => row.length > 0);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#0a0a0a]">
      <div className="flex flex-col h-full" style={{ gap: "2px" }}>
        {loading
          ? Array.from({ length: ROWS }).map((_, i) => (
              <div key={i} className="flex-1 flex">
                {Array.from({ length: 15 }).map((_, j) => (
                  <div
                    key={j}
                    className="h-full aspect-square flex-shrink-0 pr-[2px] pb-0"
                  >
                    <div className="w-full h-full bg-white/[0.02]" />
                  </div>
                ))}
              </div>
            ))
          : rows.map((row, rowIndex) => (
              <div key={rowIndex} className="flex-1 overflow-hidden">
                <div
                  className="flex h-full will-change-transform"
                  style={{
                    animation: `marquee-left ${ROW_SPEEDS[rowIndex] || 40}s linear infinite`,
                  }}
                >
                  {[...row, ...row].map((img, i) => (
                    <div
                      key={`${img.public_id}-${i}`}
                      className="h-full aspect-square flex-shrink-0 pr-[2px]"
                    >
                      <CldImage
                        src={img.public_id}
                        width={250}
                        height={250}
                        alt="Passed student"
                        crop="fill"
                        gravity="face"
                        quality="auto"
                        loading={rowIndex < 3 ? "eager" : "lazy"}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default PhotoBackground;
