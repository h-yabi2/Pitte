import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/app/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "セルフ脱毛サロン Pitte",
  description: "『東京・綾瀬駅』に完全無人のセルフ脱毛サロンがOPEN！！業務用の高品質な脱毛器が格安で使い放題◎",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        {children}
        </body>
    </html>
  );
}
