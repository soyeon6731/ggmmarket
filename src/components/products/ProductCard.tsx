import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/lib/utils/formatPrice";
import { formatTimeAgo } from "@/lib/utils/formatTime";
import ProductStatus from "./ProductStatus";
import type { ProductStatus as Status } from "@/types/product";

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  location: string;
  imageUrl: string | null;
  status: Status;
  createdAt: string;
  chatCount: number;
  likeCount: number;
}

export default function ProductCard({
  id,
  title,
  price,
  location,
  imageUrl,
  status,
  createdAt,
  chatCount,
  likeCount,
}: ProductCardProps) {
  return (
    <Link href={`/products/${id}`}>
      <article className="bg-white rounded-lg overflow-hidden hover:shadow-md transition-shadow">
        {/* 이미지 영역 */}
        <div className="relative aspect-square bg-gray-100">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          )}
          {status !== "selling" && <ProductStatus status={status} />}
        </div>

        {/* 정보 영역 */}
        <div className="p-2">
          <h3 className="text-gray-900 text-sm font-medium line-clamp-2 mb-0.5">
            {title}
          </h3>
          <p className="text-gray-500 text-xs mb-0.5">
            {location} · {formatTimeAgo(createdAt)}
          </p>
          <p className="text-gray-900 font-bold text-sm">{formatPrice(price)}</p>

          {/* 채팅/관심 수 */}
          {(chatCount > 0 || likeCount > 0) && (
            <div className="flex gap-2 mt-1 text-gray-500 text-xs">
              {chatCount > 0 && (
                <span className="flex items-center gap-0.5">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  {chatCount}
                </span>
              )}
              {likeCount > 0 && (
                <span className="flex items-center gap-0.5">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  {likeCount}
                </span>
              )}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}
