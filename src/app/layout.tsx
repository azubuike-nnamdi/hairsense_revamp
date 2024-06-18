import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TanstackProvider from "@/context/tanstackProvider";
import React from "react";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";

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
