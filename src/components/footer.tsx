"use client";

import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer id="contact" className="bg-brand-black text-brand-beige py-20 border-t border-white/5">
      <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-red rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">FP</span>
            </div>
            <span className="text-2xl font-serif font-bold tracking-tighter">
              Food<span className="text-brand-red">panda</span>
            </span>
          </Link>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Bringing the authentic taste of Chinese street food to your neighborhood. Fresh, fast, and always flavorful.
          </p>
          <div className="flex gap-4">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-serif font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm text-zinc-400">
            {["Home", "Menu", "About Us", "Contact"].map((item) => (
              <li key={item}>
                <Link href={`#${item.toLowerCase().replace(" ", "")}`} className="hover:text-brand-red transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-red" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-red" />
                <span>hello@foodpanda.in</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-brand-red" />
                <span>45, MG Road, Shivaji Nagar, Bengaluru, KA - 560001</span>
              </li>
            </ul>
          </div>

        <div>
          <h4 className="text-lg font-serif font-bold mb-6">Opening Hours</h4>
          <ul className="space-y-2 text-sm text-zinc-400">
            <li className="flex justify-between">
              <span>Mon - Fri:</span>
              <span>10:00 AM - 11:00 PM</span>
            </li>
            <li className="flex justify-between border-t border-white/5 pt-2">
              <span>Sat - Sun:</span>
              <span>11:00 AM - 12:00 AM</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-20 pt-8 border-t border-white/5 text-center text-xs text-zinc-500">
        <p>© {new Date().getFullYear()} Foodpanda Chinese Fast Food. All rights reserved.</p>
      </div>
    </footer>
  );
}
