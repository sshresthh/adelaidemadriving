"use client";

import { useState, useEffect } from "react";
import { CldImage } from "next-cloudinary";
import type { GalleryImage, GalleryResponse } from "@/lib/cloudinary";

const Gallery = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [nextCursor, setNextCursor] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  const fetchImages = async (cursor?: string) => {
    const params = new URLSearchParams({ limit: "20" });
    if (cursor) params.set("cursor", cursor);

    const res = await fetch(`/api/gallery?${params}`);
    const data: GalleryResponse = await res.json();
    return data;
  };

  useEffect(() => {
    fetchImages().then((data) => {
      setImages(data.images);
      setNextCursor(data.nextCursor);
      setLoading(false);
    });
  }, []);

  const loadMore = async () => {
    if (!nextCursor || loadingMore) return;
    setLoadingMore(true);
    const data = await fetchImages(nextCursor);
    setImages((prev) => [...prev, ...data.images]);
    setNextCursor(data.nextCursor);
    setLoadingMore(false);
  };

  return (
    <section id="gallery" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-6">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            <span className="text-primary text-sm font-semibold">
              Our Success Stories
            </span>
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Passed Students Gallery
          </h2>
          <p className="text-lg text-muted-foreground">
            Celebrating every student who earned their licence with us.
          </p>
        </div>

        {/* Loading skeletons */}
        {loading && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-2xl bg-secondary animate-pulse"
              />
            ))}
          </div>
        )}

        {/* Image grid */}
        {!loading && images.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {images.map((image) => (
              <div
                key={image.public_id}
                className="aspect-square rounded-2xl overflow-hidden bg-secondary"
              >
                <CldImage
                  src={image.public_id}
                  width={300}
                  height={300}
                  alt="Passed student"
                  crop="fill"
                  gravity="face"
                  quality="auto"
                  loading="lazy"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        )}

        {/* Empty state */}
        {!loading && images.length === 0 && (
          <p className="text-center text-muted-foreground">
            No gallery images available yet.
          </p>
        )}

        {/* Load More button */}
        {nextCursor && (
          <div className="text-center mt-10">
            <button
              onClick={loadMore}
              disabled={loadingMore}
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-[#ec5f43] text-white font-semibold rounded-full shadow-[0_16px_30px_-18px_rgba(242,107,79,0.6)] hover:shadow-[0_18px_36px_-18px_rgba(242,107,79,0.7)] hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loadingMore ? "Loading..." : "Load More Photos"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
