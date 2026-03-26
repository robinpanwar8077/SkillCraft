"use client";

import { motion } from "framer-motion";

export function Sponsor() {
  return (
    <section className="py-16 bg-white border-b border-zinc-100 relative overflow-hidden">
      {/* Decorative background element if needed */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-4">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-black text-[10px] font-black uppercase tracking-[0.3em]"
            >
              Gold Sponsor
            </motion.span>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-6 py-6 px-12 rounded-3xl bg-zinc-50 border border-zinc-200 shadow-sm relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-colors duration-500"></div>
              <img 
                src="/surya-roshni-ltd-logo-vector.svg" 
                alt="Surya Logo" 
                className="h-20 md:h-24 w-auto object-contain relative z-10" 
              />
              <div className="w-px h-16 bg-zinc-200 relative z-10"></div>
              <div className="relative z-10 text-left">
                <span className="block text-zinc-900 text-xl font-black tracking-tight uppercase leading-none">Surya Roshni Ltd</span>
                <span className="block text-blue-600 text-[10px] font-black tracking-widest uppercase mt-1">Lighting the Nation</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
