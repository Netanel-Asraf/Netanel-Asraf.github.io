import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Spotlight from "@/components/Spotlight";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://netanel-asraf.github.io'),
  title: "Netanel Asraf - Portfolio",
  description: "Computer Science Student & Software Engineer Portfolio",
  openGraph: {
    title: "Netanel Asraf - Portfolio",
    description: "Computer Science Student & Software Engineer Portfolio",
    url: "https://netanel-asraf.github.io/",
    siteName: "Netanel Asraf",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Netanel Asraf Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Spotlight />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
