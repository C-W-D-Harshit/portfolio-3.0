import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import "@/styles/globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Harshit Sharma",
  description:
    "👨‍💻 Full Stack Developer | Creating Digital Marvel 🌱 Tech Enthusiast | Lifelong Learner Let's build extraordinary digital experiences together! ✨",
  metadataBase: new URL("https://cleverdevloper.in"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    title: {
      default: "Portfolio",
      template: "%s | Portfolio",
    },
    description: "Developed by the one & only HARSHIT!",
    images: [
      {
        url: "https://cleverdevloper.in/profile.jpg",
      },
    ],
    url: "https://cleverdevloper.in/",
    siteName: "Portfolio",
    locale: "en_US",
    type: "website",
  },
  manifest: "/manifest.json",
  icons: { apple: "/profile.jpg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="margin">
        <Toaster position="top-center" reverseOrder={false} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
