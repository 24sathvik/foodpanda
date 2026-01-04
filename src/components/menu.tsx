"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { Plus, ShoppingCart } from "lucide-react";

type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
};

const MENU_ITEMS: MenuItem[] = [
  {
    id: "n1",
    name: "Spicy Sichuan Noodles",
    description: "Hand-pulled noodles with spicy chili oil and ground pork.",
    price: 249,
    category: "Noodles",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: "n2",
    name: "Classic Beef Lo Mein",
    description: "Stir-fried noodles with tender beef and seasonal vegetables.",
    price: 279,
    category: "Noodles",
    image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: "r1",
    name: "Yangzhou Fried Rice",
    description: "Traditional fried rice with shrimp, ham, and green peas.",
    price: 229,
    category: "Fried Rice",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: "r2",
    name: "Kimchi Fried Rice",
    description: "Spicy fried rice with aged kimchi and a fried egg on top.",
    price: 249,
    category: "Fried Rice",
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: "s1",
    name: "Crispy Spring Rolls",
    description: "Hand-rolled vegetable spring rolls served with sweet chili sauce.",
    price: 149,
    category: "Starters",
    image: "https://images.unsplash.com/photo-1544333346-64e4fe18274b?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: "s2",
    name: "Steamed Chicken Momos",
    description: "Juicy dumplings filled with minced chicken and herbs.",
    price: 199,
    category: "Starters",
    image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: "c1",
    name: "Panda Family Combo",
    description: "2 Noodles, 1 Fried Rice, 2 Starters, and 4 Drinks.",
    price: 899,
    category: "Combos",
    image: "https://images.unsplash.com/photo-1512058560366-cd2427ff2a60?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: "b1",
    name: "Thai Iced Tea",
    description: "Refreshing sweet tea with condensed milk.",
    price: 99,
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=500",
  },
];

const CATEGORIES = ["All", "Noodles", "Fried Rice", "Starters", "Combos", "Beverages"];

export function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { addItem } = useCart();

  const filteredItems = activeCategory === "All" 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-white dark:bg-brand-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold mb-4 text-brand-black dark:text-brand-beige"
          >
            Explore Our <span className="text-brand-red">Menu</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            From fiery noodles to comforting fried rice, our menu is a celebration of authentic flavors crafted with fresh ingredients.
          </motion.p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 transition-all ${
                activeCategory === category 
                  ? "bg-brand-red hover:bg-brand-red/90 text-white border-brand-red shadow-lg shadow-brand-red/20 scale-105" 
                  : "hover:border-brand-red hover:text-brand-red dark:border-white/10"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div 
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-brand-offwhite dark:bg-zinc-900 rounded-3xl overflow-hidden border border-black/5 dark:border-white/5 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                    <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/90 backdrop-blur-md px-3 py-1 rounded-full text-sm font-bold text-brand-red shadow-lg">
                      ₹{item.price.toFixed(0)}
                    </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <Button 
                      className="w-full bg-brand-red hover:bg-brand-red/90 text-white font-bold rounded-xl"
                      onClick={() => addItem(item)}
                    >
                      <Plus className="w-4 h-4 mr-2" /> Add to Cart
                    </Button>
                  </div>
                </div>
                  <div className="p-6">
                    <p className="text-xs font-bold text-brand-red uppercase tracking-widest mb-2">
                      {item.category}
                    </p>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-brand-red transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {item.description}
                    </p>
                    <Button 
                      className="w-full mt-6 bg-brand-red hover:bg-brand-red/90 text-white font-bold rounded-xl md:hidden flex items-center justify-center gap-2"
                      onClick={() => addItem(item)}
                    >
                      <Plus className="w-4 h-4" /> Add to Cart
                    </Button>
                  </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
