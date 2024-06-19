import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import TanstackProvider from "@/context/tanstackProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Hairsense Retail",
    default: "Hairsense Retail",
  },
  description: "Hairsense Retail, your favorite hair care products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TanstackProvider>
          <Navbar />
          {children}
          <Footer />
        </TanstackProvider>
      </body>
    </html>
  );
}
