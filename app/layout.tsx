import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
