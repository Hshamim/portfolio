import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  title: "Torkfolio - Your Ultimate Personal Portfolio and Resume Template",
  description:
    "Torkfolio is a professional and modern template for personal portfolios, resumes, and creative professionals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />

      </head>
      <body data-bs-theme="dark" className={notoSans.variable}>
        {children}
      </body>
    </html>
  );
}
