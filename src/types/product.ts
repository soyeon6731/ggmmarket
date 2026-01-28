export type ProductStatus = "selling" | "reserved" | "sold";

export interface Product {
  id: string;
  title: string;
  description: string | null;
  price: number;
  location: string;
  image_url: string | null;
  status: ProductStatus;
  view_count: number;
  chat_count: number;
  like_count: number;
  created_at: string;
  updated_at: string;
}
