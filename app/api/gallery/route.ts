import { v2 as cloudinary } from "cloudinary";
import { NextRequest, NextResponse } from "next/server";
import type { GalleryImage, GalleryResponse } from "@/lib/cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const cursor = searchParams.get("cursor") || undefined;
  const limit = Math.min(Number(searchParams.get("limit")) || 20, 500);

  try {
    const result = await cloudinary.api.resources_by_asset_folder(
      "passed-students",
      {
        max_results: limit,
        next_cursor: cursor,
      }
    );

    const images: GalleryImage[] = result.resources.map(
      (r: {
        public_id: string;
        width: number;
        height: number;
        format: string;
        created_at: string;
      }) => ({
        public_id: r.public_id,
        width: r.width,
        height: r.height,
        format: r.format,
        created_at: r.created_at,
      })
    );

    const response: GalleryResponse = {
      images,
      nextCursor: result.next_cursor ?? null,
    };

    return NextResponse.json(response, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=300",
      },
    });
  } catch (error) {
    console.error("Gallery API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch gallery images" },
      { status: 500 }
    );
  }
}
