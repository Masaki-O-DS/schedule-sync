import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Schedule Sync App",
  description: "スケジュール調整を最適化するアプリケーション",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP} antialiased bg-bgMyColor`}>
        {children}
      </body>
    </html>
  );
}
