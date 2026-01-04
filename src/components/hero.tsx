"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Utensils } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Chinese Pattern */}
      <div className="absolute inset-0 chinese-pattern -z-10" />
      
      {/* Abstract Shapes */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-brand-red/5 text-brand-red px-4 py-2 rounded-full text-sm font-bold mb-6 border border-brand-red/10"
          >
            <Utensils className="w-4 h-4" />
            <span>AUTHENTIC CHINESE FAST FOOD</span>
          </motion.div>
          
            <h1 className="text-5xl md:text-8xl font-serif font-bold text-brand-black dark:text-brand-beige leading-[0.9] mb-6">
              Fast, Fresh & <br />
              <span className="text-brand-red italic">Full of Flavor</span>
            </h1>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
            Experience the vibrant taste of local Chinese street food, delivered hot and fresh to your doorstep in minutes.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-brand-red hover:bg-brand-red/90 text-white rounded-full px-8 h-14 text-lg font-bold shadow-xl shadow-brand-red/20 group"
              onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
            >
              Order Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 h-14 text-lg font-bold border-brand-black/10 dark:border-white/10"
              onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Menu
            </Button>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-white dark:border-brand-black overflow-hidden bg-muted">
                  <img
                    src={`https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&q=80&w=100&h=100`}
                    alt="Customer"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div>
              <p className="font-bold text-brand-black dark:text-brand-beige">5,000+ Happy Customers</p>
              <div className="flex text-brand-gold">
                {"★★★★★".split("").map((s, i) => (
                  <span key={i} className="text-lg">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl shadow-brand-red/20">
            <img
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1000"
              alt="Delicious Chinese Food"
              className="w-full h-auto"
            />
          </div>
          
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-5 -left-5 md:-top-10 md:-left-10 z-20 glass-morphism p-3 md:p-4 rounded-2xl shadow-xl flex items-center gap-3 md:gap-4"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-lg md:text-xl">
                🍜
              </div>
              <div>
                <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider font-bold">Top Rated</p>
                <p className="font-bold text-sm md:text-base">Spicy Ramen</p>
              </div>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-5 -right-5 md:-bottom-10 md:-right-10 z-20 glass-morphism p-3 md:p-4 rounded-2xl shadow-xl flex items-center gap-3 md:gap-4"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-gold rounded-full flex items-center justify-center text-white text-lg md:text-xl">
                🥢
              </div>
              <div>
                <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider font-bold">Delivery</p>
                <p className="font-bold text-sm md:text-base">25-30 Mins</p>
              </div>
            </motion.div>
          
          {/* Decorative Circles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-brand-red/10 rounded-full -z-10 animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-brand-gold/10 rounded-full -z-10 animate-pulse delay-700" />
        </motion.div>
      </div>
    </section>
  );
}
