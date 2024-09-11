import type { Metadata } from "next";
import localFont from "next/font/local";
import "nes.css/css/nes.min.css";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";
import Script from "next/script";

//Local Font
const myFont = localFont({
  src: "../../public/fonts/kongtext.ttf",
  weight: "400",
  style: "normal",
});

export const metadata: Metadata = {
  title: "Zacky's Portfolio",
  description: "This is the portfolio of Zacky",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <Sidebar />
        {children}
        <Footer />
        {/* found it here for fixing flowbite js: https://github.com/themesberg/flowbite/issues/51#issuecomment-1035330935*/}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
