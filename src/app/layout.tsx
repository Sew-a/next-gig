import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppProvider } from "@/src/contexts/appContext";
import "../styles/main.scss";
import LayoutWrapper from "@/src/components/LayoutWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ogImage =
  "https://res.cloudinary.com/dlggumsot/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/v1779294439/portfoliopic_ubmfda.jpg";

export const metadata: Metadata = {
  title: "Sevak Avetisyan — Software Engineer",
  description:
    "Portfolio of Sevak Avetisyan — Software Engineer specializing in React, Micro-frontends, and scalable component architectures.",
  openGraph: {
    title: "Sevak Avetisyan — Software Engineer",
    description:
      "Portfolio of Sevak Avetisyan — Software Engineer specializing in React, Micro-frontends, and scalable component architectures.",
    url: "https://sevakavetisyan.com",
    siteName: "Sevak Avetisyan",
    images: [{ url: ogImage, width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sevak Avetisyan — Software Engineer",
    description:
      "Portfolio of Sevak Avetisyan — Software Engineer specializing in React, Micro-frontends, and scalable component architectures.",
    images: [ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        suppressHydrationWarning
      >
        <AppProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </AppProvider>
      </body>
    </html>
  );
}
