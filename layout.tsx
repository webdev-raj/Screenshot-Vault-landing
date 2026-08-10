import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Screenshot Vault — Search Your Screenshots by Text",
  description: "Screenshot Vault uses on-device OCR and AI to automatically organize and search every screenshot on your phone. Find receipts, chats, articles, and more — instantly.",
  keywords: ["screenshot search", "OCR app", "organize screenshots", "screenshot manager", "on-device AI"],
  openGraph: {
    title: "Screenshot Vault — Find Any Screenshot, Instantly",
    description: "Stop scrolling through thousands of screenshots. Search by what's inside them.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
