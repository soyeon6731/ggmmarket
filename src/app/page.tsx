import { createClient } from "@/lib/supabase/server";
import Header from "@/components/layout/Header";
import ProductList from "@/components/products/ProductList";
import type { Product } from "@/types/product";

export default async function Home() {
  const supabase = await createClient();

  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching products:", error);
  }

  return (
    <>
      <Header />
      <main className="max-w-screen-xl mx-auto px-4 py-6">
        <ProductList products={(products as Product[]) || []} />
      </main>
    </>
  );
}
