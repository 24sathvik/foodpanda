"use client";

import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function CartDrawer({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const { items, updateQuantity, removeItem, totalPrice, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isOrdered, setIsOrdered] = useState(false);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOrdered(true);
    setTimeout(() => {
      clearCart();
      setIsOrdered(false);
      setIsCheckingOut(false);
      onOpenChange(false);
    }, 3000);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0 bg-white dark:bg-brand-black border-l dark:border-white/10">
        <SheetHeader className="p-6 border-b dark:border-white/10">
          <SheetTitle className="flex items-center gap-2 text-2xl font-serif">
            <ShoppingBag className="w-6 h-6 text-brand-red" />
            Your Order
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto p-6">
          <AnimatePresence mode="wait">
            {isOrdered ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-4"
              >
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold italic">Order Placed!</h3>
                <p className="text-muted-foreground">
                  Your delicious food is being prepared and will be with you shortly.
                </p>
                <div className="w-full bg-muted p-4 rounded-xl text-sm">
                  <p className="font-bold mb-2 uppercase tracking-wider text-[10px]">Order Summary</p>
                  {items.map(item => (
                      <div key={item.id} className="flex justify-between py-1">
                        <span>{item.quantity}x {item.name}</span>
                        <span>₹{(item.price * item.quantity).toFixed(0)}</span>
                      </div>
                    ))}
                    <div className="border-t mt-2 pt-2 flex justify-between font-bold text-brand-red">
                      <span>Total Paid</span>
                      <span>₹{totalPrice.toFixed(0)}</span>
                    </div>
                  </div>
                </motion.div>
              ) : isCheckingOut ? (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setIsCheckingOut(false)}
                    className="mb-4 -ml-2 hover:text-brand-red"
                  >
                    ← Back to Cart
                  </Button>
                  <form onSubmit={handlePlaceOrder} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" required placeholder="John Doe" className="rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" required type="tel" placeholder="+91 98765 43210" className="rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Delivery Address</Label>
                      <Input id="address" required placeholder="Street, Area, City, Pincode" className="rounded-xl" />
                    </div>
                    <div className="pt-4">
                      <div className="bg-brand-red/5 p-4 rounded-xl border border-brand-red/10 mb-6">
                        <div className="flex justify-between items-center mb-2 text-sm">
                          <span className="text-muted-foreground">Subtotal</span>
                          <span>₹{totalPrice.toFixed(0)}</span>
                        </div>
                        <div className="flex justify-between items-center mb-2 text-sm">
                          <span className="text-muted-foreground">Delivery Fee</span>
                          <span className="text-green-600 font-bold">FREE</span>
                        </div>
                        <div className="flex justify-between items-center pt-2 border-t border-brand-red/10">
                          <span className="font-bold">Total Amount</span>
                          <span className="text-xl font-bold text-brand-red">₹{totalPrice.toFixed(0)}</span>
                        </div>
                      </div>
                      <Button type="submit" className="w-full bg-brand-red hover:bg-brand-red/90 text-white h-14 rounded-xl text-lg font-bold">
                        Confirm & Place Order
                      </Button>
                    </div>
                  </form>
                </motion.div>
              ) : items.length > 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4 p-4 bg-brand-offwhite dark:bg-zinc-900 rounded-2xl border border-black/5 dark:border-white/5 group">
                      <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div className="flex justify-between">
                          <h4 className="font-bold text-sm leading-tight">{item.name}</h4>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 text-muted-foreground hover:text-brand-red"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="flex justify-between items-end">
                          <p className="font-bold text-brand-red">₹{(item.price * item.quantity).toFixed(0)}</p>
                          <div className="flex items-center gap-3 bg-white dark:bg-black rounded-full px-2 py-1 shadow-sm border border-black/5 dark:border-white/10">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6 rounded-full hover:bg-brand-red/10 hover:text-brand-red"
                              onClick={() => updateQuantity(item.id, -1)}
                            >
                              <Minus className="w-3 h-3" />
                            </Button>
                            <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6 rounded-full hover:bg-brand-red/10 hover:text-brand-red"
                              onClick={() => updateQuantity(item.id, 1)}
                            >
                              <Plus className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-muted-foreground">
                  <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center opacity-50">
                    <ShoppingBag className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-black dark:text-brand-beige italic">Your cart is empty</h3>
                    <p className="text-sm">Looks like you haven&apos;t added any delicious items yet.</p>
                  </div>
                  <Button 
                    variant="outline" 
                    className="rounded-full mt-4"
                    onClick={() => onOpenChange(false)}
                  >
                    Start Ordering
                  </Button>
                </div>
              )}
            </AnimatePresence>
          </div>
  
          {items.length > 0 && !isCheckingOut && !isOrdered && (
            <SheetFooter className="p-6 border-t dark:border-white/10 bg-white/50 dark:bg-brand-black/50 backdrop-blur-sm sm:flex-col gap-4">
              <div className="w-full flex justify-between items-center mb-2">
                <span className="text-muted-foreground font-medium">Subtotal</span>
                <span className="text-2xl font-bold text-brand-red">₹{totalPrice.toFixed(0)}</span>
              </div>
            <Button 
              className="w-full bg-brand-red hover:bg-brand-red/90 text-white h-14 rounded-xl text-lg font-bold group"
              onClick={() => setIsCheckingOut(true)}
            >
              Checkout
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}
