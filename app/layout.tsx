import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Sidebar from "../components/Sidebar";
import FollowSection from "@/components/FollowSection";
import { AppProvider } from "@/contexts/appContext";
import "../styles/main.scss";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// should not use client
export const metadata: Metadata = {
  title: "Sevak Avetisyan — Software Engineer",
  description:
    "Portfolio of Sevak Avetisyan — Software Engineer specializing in React, Micro-frontends, and scalable component architectures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AppProvider>
          <div className="main">
            <Sidebar />
            <div className="main-content">
              <div className="page-content">{children}</div>
              <FollowSection />
              <Footer />
            </div>
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
