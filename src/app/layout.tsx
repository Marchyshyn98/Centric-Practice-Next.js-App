import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { HeaderNavigation } from "./components/HeaderNavigation";

const openSans = Open_Sans({
  variable: "--open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Welcome to Centric Software",
  description: "Welcome to Centric Software...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} antialiased`}
      >
        <HeaderNavigation />
        <div className="container">
          {children}
        </div>
      </body>
    </html>
  );
}
