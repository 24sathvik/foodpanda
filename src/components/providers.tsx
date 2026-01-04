"use client";

import { CartProvider } from "@/hooks/use-cart";
import { Toaster } from "@/components/ui/sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      {children}
      <Toaster position="bottom-right" />
    </CartProvider>
  );
}
