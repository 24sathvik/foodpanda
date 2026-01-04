"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Menu } from "@/components/menu";
import { CartDrawer } from "@/components/cart-drawer";
import { Footer } from "@/components/footer";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Zap, Heart, ShoppingBag } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { totalItems, totalPrice } = useCart();

  return (
    <main className="min-h-screen">
      <Navbar onCartClick={() => setIsCartOpen(true)} />
      
      <Hero />
      
      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-brand-beige dark:bg-[#151515]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&q=80&w=1000"
                alt="Chef Cooking"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-red/10 mix-blend-multiply" />
            </motion.div>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-black dark:text-brand-beige">
                  Our Story of <br />
                  <span className="text-brand-red">Authentic Passion</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Founded in the heart of the local community, Foodpanda began with a simple mission: to serve the most authentic, soul-warming Chinese fast food with modern speed.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                {[
                  { icon: Heart, title: "Made with Love", desc: "Traditional recipes" },
                  { icon: Zap, title: "Ultra Fast", desc: "Delivery in 30 mins" },
                  { icon: Shield, title: "Freshness First", desc: "Quality ingredients" },
                ].map((feature, i) => (
                  <div key={i} className="flex sm:flex-col items-center sm:items-start gap-4 sm:gap-3">
                    <div className="shrink-0 w-12 h-12 bg-white dark:bg-brand-black rounded-2xl flex items-center justify-center shadow-sm">
                      <feature.icon className="w-6 h-6 text-brand-red" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-sm md:text-base">{feature.title}</h4>
                      <p className="text-xs md:text-sm text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Menu />
      
      <Footer />
      
      <CartDrawer open={isCartOpen} onOpenChange={setIsCartOpen} />

      <AnimatePresence>
        {totalItems > 0 && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-6 left-4 right-4 z-40 md:hidden"
          >
            <Button
              onClick={() => setIsCartOpen(true)}
              className="w-full bg-brand-red hover:bg-brand-red/90 text-white h-14 rounded-2xl shadow-2xl flex items-center justify-between px-6 font-bold border-none"
            >
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <span>{totalItems} {totalItems === 1 ? 'Item' : 'Items'}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm uppercase tracking-wider opacity-80">View Cart</span>
                <span className="text-xl">₹{totalPrice.toFixed(0)}</span>
              </div>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
