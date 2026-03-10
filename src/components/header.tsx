"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Trophy, Menu, X } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Prizes", href: "#prizes" },
    { name: "Schedule", href: "#schedule" },
    { name: "Rules", href: "#rules" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "py-3" : "py-5"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className={`relative flex items-center justify-between px-6 py-2.5 rounded-[2rem] border transition-all duration-500 ${isScrolled ? "bg-white/70 backdrop-blur-xl border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.05)]" : "bg-white/30 backdrop-blur-md border-white/10 shadow-sm"}`}>
          <div className="flex items-center group cursor-pointer">
            <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-xl border border-zinc-200 shadow-sm transition-transform duration-300 group-hover:scale-110">
              <img src="/logo.jpg" alt="SkillCraft Logo" className="h-full w-full object-cover" />
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 rounded-xl text-sm font-black text-zinc-500 hover:text-blue-600 hover:bg-blue-50/50 transition-all uppercase tracking-widest"
              >
                {item.name}
              </a>
            ))}
            <div className="w-px h-6 bg-zinc-200 mx-4" />
            <button className="h-11 px-7 bg-blue-600 text-white hover:bg-blue-700 font-black rounded-xl text-sm inline-flex items-center justify-center transition-all shadow-[0_10px_20px_rgba(37,99,235,0.2)] hover:shadow-blue-300 hover:-translate-y-0.5 uppercase tracking-widest">
              <a href="https://circlechess.com/registration?id=49733">Register</a>
            </button>
          </nav>

          <button
            className="md:hidden p-2 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-600 hover:text-blue-600 transition-all"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 mx-4 mt-4 md:hidden overflow-hidden rounded-[2.5rem] bg-white/95 backdrop-blur-2xl border border-zinc-100 shadow-2xl z-40"
          >
            <div className="p-8 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block rounded-2xl px-6 py-4 text-lg font-black text-zinc-900 hover:bg-blue-50 hover:text-blue-600 transition-all uppercase tracking-widest border border-transparent hover:border-blue-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-6 border-t border-zinc-100 mt-4">
                <button className="w-full bg-blue-600 text-white font-black h-16 rounded-[1.5rem] text-lg inline-flex items-center justify-center transition-all shadow-[0_15px_30px_rgba(37,99,235,0.2)] active:scale-95 uppercase tracking-widest">
                  <a href="https://circlechess.com/registration?id=49733">Register Now</a>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
