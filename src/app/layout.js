import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export const metadata = {
  title: "Mr. Walter Simuyu | Literature & Language",
  description:
    "Official website of Mr. Marshall — Educator, Writer, and Speaker inspiring minds through Literature and Language.",
  keywords: [
    "Mr. Walter Simuyu",
    "English teacher",
    "Literature educator",
    "Language and communication",
    "Poetry and prose",
  ],
  authors: [{ name: "Mr. Walter Simuyu" }],
  openGraph: {
    title: "Mr. Walter Simuyu | Literature & Language",
    description:
      "Explore the world of language, literature, and expression through the teachings and writings of Mr. Marshall.",
    url: "https://mrWalter Simuyu.com",
    siteName: "Mr. Walter Simuyu",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#f9f7f1] text-[#1e293b] font-sans antialiased">
        <Navbar />
        <main className="min-h-screen pt-4 px-4 md:px-8 lg:px-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
