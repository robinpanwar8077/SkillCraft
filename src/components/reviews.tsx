"use client";

import { motion } from "framer-motion";
import { Star, Trophy, MapPin, Search } from "lucide-react";

export function Reviews() {
  const videos = [
    {
      id: "WxM9_ADHBN4",
      title: "SkillCraft 1st Edition Highlights",
      url: "https://www.youtube.com/watch?v=WxM9_ADHBN4&t=11s"
    },
    {
      id: "z68YxeUfnXM",
      title: "Atmosphere at Thyagraj Stadium",
      url: "https://www.youtube.com/watch?v=z68YxeUfnXM"
    }
  ];

  return (
    <section id="highlights" className="py-24 bg-white border-t border-zinc-100 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-50 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-indigo-50 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-black tracking-widest text-blue-600 uppercase mb-4">Event Legacy</h2>
            <h3 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-7xl mb-6 tracking-tighter uppercase">Tournament Highlights</h3>
            <p className="mt-4 text-lg text-zinc-500 font-medium max-w-none mx-auto whitespace-nowrap hidden md:block">
              Relive the intensity and premium atmosphere of our past editions held at world-class arenas.
            </p>
            <p className="mt-4 text-base text-zinc-500 font-medium max-w-xs mx-auto md:hidden">
              Relive the intensity and premium atmosphere of our past editions.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {videos.map((video, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-video rounded-[2.5rem] overflow-hidden border-2 border-zinc-100 bg-white block shadow-xl hover:border-blue-400/50 transition-all duration-500"
              >
                {/* Thumbnail */}
                <img 
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                />
                
                {/* Play Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-black/5 group-hover:bg-black/20 transition-all duration-500">
                  <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-blue-700 transition-all duration-300 group-hover:shadow-blue-200">
                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[22px] border-l-white border-b-[12px] border-b-transparent ml-2"></div>
                  </div>
                </div>

                {/* Tag removed as requested */}
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 flex flex-col items-center gap-8 border-t border-zinc-100 pt-16">
           <div className="flex items-center gap-6 py-6 px-12 rounded-3xl bg-zinc-50 border border-zinc-200 shadow-sm relative group overflow-hidden">
             <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-colors duration-500"></div>
             <Trophy className="w-10 h-10 text-blue-600 relative z-10" />
             <div className="relative z-10 text-left">
               <span className="block text-zinc-900 text-xl font-black tracking-tight uppercase">FIDE Rated Series</span>
               <span className="block text-blue-600 text-xs font-black font-mono tracking-widest uppercase mt-1">AICF Event Code: 430122</span>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}
