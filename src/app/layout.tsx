import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Finance Info Hub",
  description: "금융 정보를 이해하기 쉽게 정리하는 블로그",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="border-b">
          <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
            <a href="/" className="text-lg font-semibold">
              Finance Info Hub
            </a>
            <nav className="text-sm text-gray-600 space-x-4">
              <a href="/posts" className="hover:text-gray-900">전체 글</a>
              <a href="/about" className="hover:text-gray-900">소개</a>
              <a href="/privacy" className="hover:text-gray-900">개인정보처리방침</a>
              <a href="/contact" className="hover:text-gray-900">문의</a>
            </nav>
          </div>
        </header>
        <div className="flex-1">{children}</div>
        <footer className="border-t">
          <div className="mx-auto max-w-3xl px-6 py-6 text-sm text-gray-500">
            © {new Date().getFullYear()} Finance Info Hub
          </div>
        </footer>
      </body>
    </html>
  );
}
