import ProductCard from "./ProductCard";
import type { Product } from "@/types/product";

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="text-6xl mb-4">🍠</div>
        <p className="text-gray-500">등록된 상품이 없습니다.</p>
        <p className="text-gray-400 text-sm mt-1">
          첫 번째 상품을 등록해보세요!
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          location={product.location}
          imageUrl={product.image_url}
          status={product.status}
          createdAt={product.created_at}
          chatCount={product.chat_count}
          likeCount={product.like_count}
        />
      ))}
    </div>
  );
}
