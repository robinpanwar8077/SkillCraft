"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin, Trophy, Sparkles, ChevronRight, GraduationCap, ShieldCheck, Medal } from "lucide-react";

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-white pt-24 pb-12 sm:pt-32 sm:pb-20 px-4 sm:px-6">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-100/50 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-50/50 blur-[120px]"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center"
      >
        {/* Top Badges */}
        <motion.div variants={itemVariants} className="flex flex-col items-center gap-3 sm:gap-4 mb-6 sm:mb-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-[9px] sm:text-xs font-black uppercase tracking-[0.2em] shadow-sm">
            <Sparkles className="w-3 h-3 animate-pulse" />
            Below 1800 Classical Chess Series
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            <div className="flex items-center gap-1.5 text-zinc-600 text-[10px] sm:text-sm font-medium bg-zinc-50 px-3 py-1 rounded-lg border border-zinc-200">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              Aicf Code: 430122
            </div>
            <div className="flex items-center gap-1.5 text-zinc-600 text-[10px] sm:text-sm font-medium bg-zinc-50 px-3 py-1 rounded-lg border border-zinc-200">
              <GraduationCap className="w-3.5 h-3.5 text-indigo-500" />
              FIDE, AICF & DCA Approved
            </div>
          </div>
        </motion.div>

        {/* Main Title - Tournament Name */}
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tight mb-4 sm:mb-6 leading-[1.1] max-w-4xl px-2"
        >
          <span className="text-zinc-950">2nd SkillCraft International</span> <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 via-blue-600 to-blue-800 drop-shadow-sm">
            Chess Tournament
          </span>
        </motion.h1>

        {/* Info Highlights */}
        <motion.div variants={itemVariants} className="mb-8 sm:mb-12">
          <div className="text-zinc-500 text-[10px] sm:text-base font-semibold flex flex-wrap items-center justify-center gap-x-4 gap-y-2 uppercase tracking-widest text-center px-4">
            <div className="flex items-center gap-2">
              <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
              <span>Over 100 Cash Prizes</span>
            </div>
            <span className="w-1 h-1 bg-blue-300 rounded-full hidden sm:block" />
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
              <span>125+ Trophies</span>
            </div>
            <span className="w-1 h-1 bg-blue-300 rounded-full hidden sm:block" />
            <div className="flex items-center gap-2">
              <Medal className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
              <span>Medals for Everyone</span>
            </div>
          </div>
        </motion.div>

        {/* Action Grid */}
        <motion.div variants={itemVariants} className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl mb-10 sm:mb-12 px-4 sm:px-0">
          <div className="bg-white/60 backdrop-blur-md border border-zinc-200 p-4 sm:p-5 rounded-3xl flex flex-row sm:flex-col items-center justify-center gap-4 sm:gap-2 group hover:border-blue-400/50 hover:bg-white transition-all text-left sm:text-center shadow-sm hover:shadow-md">
            <CalendarDays className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 group-hover:scale-110 transition-transform flex-shrink-0" />
            <div>
              <span className="block text-[8px] sm:text-[10px] text-zinc-400 uppercase font-black tracking-widest mb-1">Dates</span>
              <span className="text-zinc-950 font-bold text-sm sm:text-lg">27th - 29th March 2026</span>
            </div>
          </div>
          <div className="bg-white/60 backdrop-blur-md border border-zinc-200 p-4 sm:p-5 rounded-3xl flex flex-row sm:flex-col items-center justify-center gap-4 sm:gap-2 group hover:border-blue-400/50 hover:bg-white transition-all text-left sm:text-center shadow-sm hover:shadow-md">
            <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 group-hover:scale-110 transition-transform flex-shrink-0" />
            <div>
              <span className="block text-[8px] sm:text-[10px] text-zinc-400 uppercase font-black tracking-widest mb-1">Venue</span>
              <span className="text-zinc-950 font-bold text-sm sm:text-lg">Thyagraj Sports Complex</span>
            </div>
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full max-w-sm sm:max-w-none justify-center px-4 sm:px-0">
          <Button size="lg" className="h-14 sm:h-16 px-8 sm:px-10 rounded-2xl bg-blue-600 text-white hover:bg-blue-700 font-black text-base sm:text-lg w-full sm:w-auto shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all hover:-translate-y-1 active:translate-y-0 group" asChild>
            <a href="https://circlechess.com/registration?id=49733" target="_blank" rel="noopener noreferrer">
              Register Now
              <ChevronRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button variant="outline" size="lg" className="h-14 sm:h-16 px-8 sm:px-10 rounded-2xl border-2 border-zinc-200 bg-white text-zinc-800 hover:bg-zinc-50 hover:border-zinc-300 font-bold text-base sm:text-lg w-full sm:w-auto transition-all shadow-sm" asChild>
            <a href="/Brochure.pdf" download="Tournament_Brochure.pdf">
              Download Brochure
            </a>
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 2 }}
          className="absolute bottom-[-15%] sm:bottom-[-5%] hidden sm:flex flex-col items-center gap-2"
        >
          <div className="w-px h-16 bg-gradient-to-b from-blue-400 to-transparent"></div>
          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-blue-500 rotate-180 [writing-mode:vertical-lr]">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
