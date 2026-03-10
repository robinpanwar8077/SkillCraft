"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin, Trophy, Sparkles, ChevronRight, GraduationCap, ShieldCheck, Medal, Users } from "lucide-react";
import Image from "next/image";

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
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24 px-4 sm:px-6">

      {/* ── Full-bleed background image ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/chess-tournament.png"
          alt="Chess tournament background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* dark gradient so text pops */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/85 via-zinc-900/75 to-zinc-950/90" />
        {/* subtle blue tint */}
        <div className="absolute inset-0 bg-blue-950/25" />
      </div>

      {/* ── Animated colour blobs ── */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[120px] z-0 pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-600/20 blur-[120px] z-0 pointer-events-none"
      />

      {/* ── Main content ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center"
      >
        {/* Top Badges */}
        <motion.div variants={itemVariants} className="flex flex-col items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-300 text-[9px] sm:text-xs font-black uppercase tracking-[0.2em]">
            <Sparkles className="w-3 h-3 animate-pulse" />
            Below 1800 Classical Chess Series
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            <div className="flex items-center gap-1.5 text-white/80 text-[10px] sm:text-sm font-medium bg-white/10 backdrop-blur-md px-3 py-1 rounded-lg border border-white/15">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              Aicf Code: 430122
            </div>
            <div className="flex items-center gap-1.5 text-white/80 text-[10px] sm:text-sm font-medium bg-white/10 backdrop-blur-md px-3 py-1 rounded-lg border border-white/15">
              <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
              FIDE, AICF &amp; DCA Approved
            </div>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tight mb-4 sm:mb-6 leading-[1.1] max-w-4xl px-2"
        >
          <span className="text-white drop-shadow-lg">2nd SkillCraft International</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-300 via-blue-400 to-blue-600">
            Chess Tournament
          </span>
        </motion.h1>

        {/* Info Highlights */}
        <motion.div variants={itemVariants} className="mb-8 sm:mb-12">
          <div className="text-white/60 text-[10px] sm:text-base font-semibold flex flex-wrap items-center justify-center gap-x-4 gap-y-2 uppercase tracking-widest px-4">
            <div className="flex items-center gap-2">
              <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
              <span>Over 100 Cash Prizes</span>
            </div>
            <span className="w-1 h-1 bg-blue-400/50 rounded-full hidden sm:block" />
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
              <span>125+ Trophies</span>
            </div>
            <span className="w-1 h-1 bg-blue-400/50 rounded-full hidden sm:block" />
            <div className="flex items-center gap-2">
              <Medal className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
              <span>Medals for Everyone</span>
            </div>
          </div>
        </motion.div>

        {/* Date & Venue cards */}
        <motion.div variants={itemVariants} className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl mb-10 sm:mb-12 px-4 sm:px-0">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-5 rounded-3xl flex flex-row sm:flex-col items-center justify-center gap-4 sm:gap-2 group hover:border-blue-400/50 hover:bg-white/15 transition-all text-left sm:text-center shadow-sm">
            <CalendarDays className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 group-hover:scale-110 transition-transform flex-shrink-0" />
            <div>
              <span className="block text-[8px] sm:text-[10px] text-white/40 uppercase font-black tracking-widest mb-1">Dates</span>
              <span className="text-white font-bold text-sm sm:text-lg">27th – 29th March 2026</span>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-5 rounded-3xl flex flex-row sm:flex-col items-center justify-center gap-4 sm:gap-2 group hover:border-blue-400/50 hover:bg-white/15 transition-all text-left sm:text-center shadow-sm">
            <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 group-hover:scale-110 transition-transform flex-shrink-0" />
            <div>
              <span className="block text-[8px] sm:text-[10px] text-white/40 uppercase font-black tracking-widest mb-1">Venue</span>
              <span className="text-white font-bold text-sm sm:text-lg">Thyagraj Sports Complex</span>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full max-w-sm sm:max-w-none justify-center px-4 sm:px-0 mb-10 sm:mb-14">
          <Button
            size="lg"
            className="h-14 sm:h-16 px-8 sm:px-10 rounded-2xl bg-blue-600 text-white hover:bg-blue-500 font-black text-base sm:text-lg w-full sm:w-auto shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transition-all hover:-translate-y-1 active:translate-y-0 group"
            asChild
          >
            <a href="https://circlechess.com/registration?id=49733" target="_blank" rel="noopener noreferrer">
              Register Now
              <ChevronRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-14 sm:h-16 px-8 sm:px-10 rounded-2xl border-2 border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 hover:border-white/50 font-bold text-base sm:text-lg w-full sm:w-auto transition-all shadow-sm"
            asChild
          >
            <a href="/Brochure.pdf" download="Tournament_Brochure.pdf">
              Download Brochure
            </a>
          </Button>
        </motion.div>

        {/* Stat chips
        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-2.5 shadow-md">
            <Trophy className="w-4 h-4 text-blue-400 shrink-0" />
            <div>
              <p className="text-[9px] font-black uppercase text-white/40 tracking-widest leading-none">Prize Pool</p>
              <p className="text-sm font-black text-white leading-tight">₹15,00,000</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-2.5 shadow-md">
            <Users className="w-4 h-4 text-blue-400 shrink-0" />
            <div>
              <p className="text-[9px] font-black uppercase text-white/40 tracking-widest leading-none">Participants</p>
              <p className="text-sm font-black text-white leading-tight">Open to All</p>
            </div>
          </div>
          <motion.div
            animate={{ opacity: [1, 0.6, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex items-center gap-1.5 bg-green-500/20 backdrop-blur-md border border-green-400/30 rounded-2xl px-4 py-2.5 shadow-md"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-green-300">Registrations Open</span>
          </motion.div>
        </motion.div> */}

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 2 }}
          className="absolute bottom-[-15%] sm:bottom-[-5%] hidden sm:flex flex-col items-center gap-2"
        >
          <div className="w-px h-16 bg-gradient-to-b from-blue-400 to-transparent" />
          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-blue-400 rotate-180 [writing-mode:vertical-lr]">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
