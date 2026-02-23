import type { Metadata, Viewport } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  title: "Torkfolio - Professional Portfolio & Resume Template",
  description:
    "Torkfolio is a modern, high-performance portfolio template for creative professionals, designers, and developers. Showcase your work with style.",
  keywords: ["portfolio", "resume", "creative", "designer", "developer", "nextjs", "react", "tailwindcss"],
  authors: [{ name: "Torkfolio" }],
  openGraph: {
    title: "Torkfolio - Professional Portfolio & Resume Template",
    description: "Showcase your work with style using Torkfolio, a modern portfolio template.",
    url: "https://torkfolio.com",
    siteName: "Torkfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Torkfolio - Professional Portfolio & Resume Template",
    description: "Showcase your work with style using Torkfolio.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body data-bs-theme="dark" className={`${notoSans.variable} font-sans antialiased bg-[#0A0A09] text-white`}>
        {children}
      </body>
    </html>
  );
}
