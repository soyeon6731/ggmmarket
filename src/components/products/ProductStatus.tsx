import type { ProductStatus as Status } from "@/types/product";

interface ProductStatusProps {
  status: Status;
}

export default function ProductStatus({ status }: ProductStatusProps) {
  if (status === "selling") return null;

  const config = {
    reserved: {
      label: "예약중",
      className: "bg-emerald-500",
    },
    sold: {
      label: "거래완료",
      className: "bg-gray-500",
    },
  };

  const { label, className } = config[status];

  return (
    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
      <span
        className={`px-3 py-1 rounded-full text-white text-sm font-medium ${className}`}
      >
        {label}
      </span>
    </div>
  );
}
