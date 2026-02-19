import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "na-portfolio-site",
    template: "%s | na-portfolio-site",
  },
  description: "自分が開発したアプリを紹介するブログ",
  openGraph: {
    type: "website",
    siteName: "na-portfolio-site",
    locale: "ja_JP",
    title: "na-portfolio-site",
    description: "自分が開発したアプリを紹介するブログ",
  },
  twitter: {
    card: "summary_large_image",
    title: "na-portfolio-site",
    description: "自分が開発したアプリを紹介するブログ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
