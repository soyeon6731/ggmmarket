import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "고구마마켓 - 중고거래 플랫폼",
  description: "우리 동네 중고 직거래 마켓",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased bg-gray-50">{children}</body>
    </html>
  );
}
