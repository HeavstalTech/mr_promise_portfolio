import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://mrpromisee.name.ng"),  
  title: "Ekiverere Promise Edesiri | Software Engineer & CTO",
  description: "Hi there! I'm Mr. Promise, Founder & CTO of Heavstal Tech. I love developing infrastructure that solves and simplifies real-world problems.",
  keywords: [
    "Ekiverere Promise Edesiri",
    "Mr Promise",
    "CTO",
    "Software Engineer",
    "Heavstal Tech",
    "Nigeria",
    "Next.js",
    "React",
    "System Design"
  ],
  authors: [{ name: "Ekiverere Promise Edesiri" }],
  icons: {
    icon: "/mr_promise.png",
    shortcut: "/mr_promise.png",
    apple: "/mr_promise.png",
  },
  openGraph: {
    title: "Ekiverere Promise Edesiri | Software Engineer & CTO",
    description: "Founder & CTO of Heavstal Tech. Building accessible infrastructure for Africa and the world.",
    url: "https://mrpromisee.name.ng", 
    siteName: "Ekiverere Promise Edesiri Portfolio",
    images: [
      {
        url: "/mr_promise.png",
        width: 800,
        height: 800,
        alt: "Ekiverere Promise Edesiri - Mr Promise",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ekiverere Promise Edesiri | Software Engineer & CTO",
    description: "Founder & CTO of Heavstal Tech. Building accessible infrastructure for Africa and the world.",
    images: ["/mr_promise.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ekiverere Promise Edesiri",
    "alternateName": "Mr. Promise",
    "jobTitle": "Founder & CTO",
    "worksFor": {
      "@type": "Organization",
      "name": "Heavstal Tech",
      "url": "https://heavstal.com.ng"
    },
    "url": "https://mrpromisee.name.ng", 
    "sameAs": [
      "https://github.com/HeavstalTech",
      "https://wa.me/2348166546725",
      "https://wa.me/2348137256404",
      "https://t.me/mr_promise818",
      "https://tiktok.com/@mr_promise8181"
    ],
    "knowsAbout": [
      "Software Engineering",
      "System Design",
      "Backend Engineering",
      "Next.js",
      "React",
      "PostgreSQL",
      "Astro",
      "TypeScript",
      "TailwindCSS"
    ],
    "nationality": "Nigerian"
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0F1115] text-white antialiased min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        
        <Footer />
        
      </body>
    </html>
  );
}
