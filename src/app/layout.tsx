import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, Cairo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// خطوط عربية احترافية
const ibmArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-arabic",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Vanta Capital — منصتك العربية لفهم الأسواق المالية",
    template: "%s | Vanta Capital",
  },
  description:
    "منصة عربية احترافية تجمع الأخبار الاقتصادية، تعليم التداول، تحليلات الفوركس والأسهم والسلع، ومحتوى أكاديمي مبسّط في مكان واحد.",
  keywords: [
    "تداول",
    "فوركس",
    "أسهم",
    "ذهب",
    "نفط",
    "أخبار اقتصادية",
    "تحليل فني",
    "إدارة المخاطر",
    "Vanta Capital",
  ],
  authors: [{ name: "Vanta Capital" }],
  openGraph: {
    title: "Vanta Capital — منصتك العربية للأسواق المالية",
    description:
      "أخبار اقتصادية، تعليم تداول، وتحليلات منظّمة بالعربية — في مكان واحد.",
    locale: "ar_SA",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${ibmArabic.variable} ${cairo.variable} ${mono.variable}`}
    >
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
