import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  title: "Foodpanda | Fast & Fresh Chinese Fast Food",
  description: "The best local Chinese and fast food outlet. Order noodles, fried rice, and more with instant delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
        <body className="antialiased">
        <Providers>
          {children}
        </Providers>
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
