export type GalleryImage = {
  public_id: string;
  width: number;
  height: number;
  format: string;
  created_at: string;
};

export type GalleryResponse = {
  images: GalleryImage[];
  nextCursor: string | null;
};
