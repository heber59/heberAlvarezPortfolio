import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const siteUrl = "https://heber-alvarez-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Heber Alvarez · Frontend Engineer", template: "%s · Heber Alvarez" },
  description: "Frontend Engineer specialising in React, TypeScript, design systems, data visualisation and scalable user experiences.",
  authors: [{ name: "Heber Santiago Alvarez", url: siteUrl }],
  creator: "Heber Santiago Alvarez",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Heber Alvarez · Frontend Engineer",
    description: "React, TypeScript, design systems, data visualisation and scalable user experiences.",
    siteName: "Heber Alvarez Portfolio",
    locale: "es_CO",
    alternateLocale: ["en_US"],
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Heber Alvarez · Frontend Engineer" }],
  },
  twitter: { card: "summary_large_image", title: "Heber Alvarez · Frontend Engineer", description: "React, TypeScript, design systems and scalable user experiences.", images: ["/opengraph-image"] },
  robots: { index: true, follow: true },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Heber Santiago Alvarez",
  url: siteUrl,
  jobTitle: "Frontend Engineer",
  email: "mailto:hesan0308@gmail.com",
  sameAs: ["https://github.com/heber59", "https://www.linkedin.com/in/heber-santiago-alvarez-rincon-799427230/"],
  knowsAbout: ["React", "TypeScript", "Frontend Architecture", "Design Systems", "Data Visualisation", "Accessibility"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${manrope.variable} ${inter.variable}`}>
        <a href="#main-content" className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition focus:translate-y-0">Skip to content</a>
        <LanguageProvider>{children}</LanguageProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}

