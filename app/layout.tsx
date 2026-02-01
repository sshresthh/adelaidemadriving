import type { Metadata } from "next";
import { Fraunces, Spline_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

const splineSans = Spline_Sans({
  subsets: ["latin"],
  variable: "--font-spline-sans",
});

export const metadata: Metadata = {
  title: "Adelaide ma Driving School",
  description:
    "Adelaide ma Driving School offers patient, confidence-building driving lessons and test preparation across Southern Adelaide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${splineSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
