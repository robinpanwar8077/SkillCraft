"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Star, Medal, Users, Gem, Info } from "lucide-react";

export function Prizes() {
  const mainPrizes = [
    { rank: "1st", amount: "₹1,11,000", trophy: true },
    { rank: "2nd", amount: "₹70,000", trophy: true },
    { rank: "3rd", amount: "₹50,000", trophy: true },
    { rank: "4th", amount: "₹25,000", trophy: true },
    { rank: "5th", amount: "₹15,000", trophy: true },
    { rank: "6th - 10th", amount: "₹10,000" },
    { rank: "11th - 15th", amount: "₹7,000" },
    { rank: "16th - 20th", amount: "₹6,000" },
    { rank: "21st - 25th", amount: "₹6,000" },
    { rank: "26th - 30th", amount: "₹6,000" },
    { rank: "31st - 35th", amount: "₹5,500" },
    { rank: "36th - 40th", amount: "₹5,500" },
  ];

  const ratingCategories = [
    {
      title: "Best 1700-0",
      prizes: [
        { rank: "1st", amount: "₹1,00,000" },
        { rank: "2nd", amount: "₹60,000" },
        { rank: "3rd", amount: "₹30,000" },
        { rank: "4th", amount: "₹15,000" },
        { rank: "5th", amount: "₹10,000" },
        { rank: "6th - 10th", amount: "₹7,000" },
        { rank: "11th - 15th", amount: "₹6,000" },
      ]
    },
    {
      title: "Best 1550-0",
      prizes: [
        { rank: "1st", amount: "₹1,00,000" },
        { rank: "2nd", amount: "₹60,000" },
        { rank: "3rd", amount: "₹30,000" },
        { rank: "4th", amount: "₹15,000" },
        { rank: "5th", amount: "₹10,000" },
        { rank: "6th - 10th", amount: "₹7,000" },
        { rank: "11th - 15th", amount: "₹6,000" },
      ]
    },
    {
      title: "Best UnRated",
      prizes: [
        { rank: "1st", amount: "₹50,000" },
        { rank: "2nd", amount: "₹25,000" },
        { rank: "3rd", amount: "₹15,000" },
        { rank: "4th", amount: "₹10,000" },
        { rank: "5th", amount: "₹10,000" },
        { rank: "6th - 10th", amount: "₹7,000" },
      ]
    }
  ];

  const specialPrizes = [
    { category: "Best Female (15+)", rewards: ["1st - ₹10,000", "2nd - ₹8,000", "3rd - ₹6,000", "4th & 5th - Trophy"] },
    { category: "Best Veteran (55+)", rewards: ["1st - ₹10,000", "2nd - ₹8,000", "3rd - ₹6,000", "4th & 5th - Trophy"] },
    { category: "Best Differently Abled", rewards: ["1st - ₹10,000", "2nd - ₹8,000", "3rd - ₹6,000", "4th & 5th - Trophy"] },
    { category: "Best Academy", rewards: ["1st - Trophy & 4 Medals", "2nd - Trophy & 4 Medals"] },
    { category: "Best School", rewards: ["1st - Trophy & 4 Medals", "2nd - Trophy & 4 Medals"] },
  ];

  const ageCategories = ["Under 08", "Under 10", "Under 12", "Under 14"];
  const agePrizeRankings = [
    { rank: "1st", amount: "₹10,000", trophy: true },
    { rank: "2nd", amount: "₹8,000", trophy: true },
    { rank: "3rd", amount: "₹6,000", trophy: true },
    { rank: "4th", amount: "Trophy", trophy: true },
    { rank: "5th", amount: "Trophy", trophy: true },
    { rank: "6th - 10th", amount: "Trophy", trophy: true },
  ];

  return (
    <section id="prizes" className="py-12 sm:py-20 bg-white text-zinc-900 border-t border-zinc-100 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Simple Stacked Header for Mobile */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12 text-center lg:text-left">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-4">
              <Trophy className="w-3 h-3" />
              Championship Rewards
            </div>
            <h2 className="text-3xl sm:text-6xl font-black text-zinc-900 tracking-tighter mb-4 leading-tight">
              Tournament <span className="text-blue-600">Prize Pool</span>
            </h2>
            <p className="text-zinc-500 text-xs sm:text-base font-medium max-w-md mx-auto lg:mx-0">
              Huge rewards across multiple categories. Guaranteed distribution for top performers.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} className="w-full max-w-xs sm:max-w-md bg-blue-600 p-6 sm:p-12 rounded-[2rem] sm:rounded-[2.5rem] text-white shadow-2xl shadow-blue-200">
            <span className="block text-[10px] font-black uppercase tracking-[0.2em] mb-2 text-blue-100">Total Fund</span>
            <span className="block text-3xl sm:text-6xl font-black tracking-tighter leading-none mb-3 sm:mb-4">₹15,00,000</span>
            <div className="flex items-center justify-center lg:justify-start gap-2 text-[10px] font-bold uppercase tracking-widest text-blue-100">
              <Star className="w-3 h-3 fill-blue-300" />
              Guaranteed Distribution
            </div>
          </motion.div>
        </div>

        {/* Force Vertical Stack on Mobile */}
        <Tabs defaultValue="main" className="flex flex-col w-full space-y-8">
          <div className="w-full overflow-x-auto no-scrollbar scroll-smooth py-2">
            <TabsList className="bg-zinc-100 p-1 rounded-2xl h-auto flex gap-1 w-max mx-auto border border-zinc-200">
              {[
                { id: "main", label: "Main Open", icon: Trophy },
                { id: "rating", label: "Rating", icon: Star },
                { id: "special", label: "Special", icon: Gem },
                { id: "age", label: "Age Groups", icon: Users },
              ].map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="px-3 sm:px-5 py-2.5 sm:py-3 text-[9px] sm:text-xs font-black uppercase tracking-widest rounded-xl transition-all data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm text-zinc-500 flex items-center gap-1.5 whitespace-nowrap"
                >
                  <tab.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="main" className="w-full outline-none">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-14">
              <div className="w-full space-y-6">
                <h4 className="text-[10px] font-black text-zinc-400 uppercase tracking-widest text-center lg:text-left">Top Podium</h4>
                <div className="flex flex-col gap-3 sm:gap-4">
                  {mainPrizes.slice(0, 3).map((prize, idx) => (
                    <div key={idx} className={`p-4 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] border flex items-center justify-between shadow-sm ${idx === 0 ? 'bg-blue-50 border-blue-200' : 'bg-white border-zinc-200'}`}>
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className={`w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl sm:rounded-2xl font-black text-base sm:text-xl shrink-0 ${idx === 0 ? 'bg-blue-600 text-white' : 'bg-zinc-100 text-zinc-400'}`}>
                          {idx + 1}
                        </div>
                        <div>
                          <p className={`text-sm sm:text-base font-black uppercase tracking-tighter ${idx === 0 ? "text-blue-700" : "text-zinc-900"}`}>{prize.rank}</p>
                          <span className="text-[9px] sm:text-[10px] font-bold text-zinc-400 uppercase">Placement</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`text-lg sm:text-2xl font-black tracking-tighter ${idx === 0 ? "text-blue-600" : "text-zinc-900"}`}>{prize.amount}</p>
                        <span className="text-[9px] sm:text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Prize + Trophy</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full bg-white p-4 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] border border-zinc-200 overflow-hidden">
                <h4 className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-4 sm:mb-6">Cash Prizes (4th - 40th)</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                  {mainPrizes.slice(3).map((prize, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 sm:py-3 px-4 sm:px-6 bg-zinc-50 rounded-xl sm:rounded-2xl border border-zinc-100 shadow-sm">
                      <span className="text-[11px] sm:text-xs font-black text-zinc-900 uppercase w-20 sm:w-24 shrink-0">{prize.rank}</span>
                      <div className="h-px flex-grow bg-zinc-200/50 mx-2 sm:mx-4 border-t border-dashed" />
                      <span className="text-xs sm:text-sm font-black text-blue-600 tabular-nums shrink-0">{prize.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="rating" className="w-full outline-none">
            <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ratingCategories.map((cat, idx) => (
                <div key={idx} className="bg-white border border-zinc-200 rounded-[2rem] p-8 shadow-sm">
                  <h4 className="text-base font-black text-zinc-900 tracking-tight mb-6 pb-4 border-b border-zinc-100 flex items-center gap-2">
                    <Star className="w-5 h-5 text-blue-600" />
                    {cat.title}
                  </h4>
                  <div className="space-y-3">
                    {cat.prizes.map((p, pi) => (
                      <div key={pi} className="flex justify-between text-[11px] font-bold">
                        <span className="text-zinc-400 uppercase">{p.rank}</span>
                        <span className="text-zinc-900 font-black">{p.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="special" className="w-full outline-none">
            <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {specialPrizes.map((prize, idx) => (
                <div key={idx} className="p-8 bg-white border border-zinc-200 rounded-[2rem] shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center">
                      <Gem className="w-5 h-5" />
                    </div>
                    <h5 className="text-sm font-black text-zinc-900 uppercase">{prize.category}</h5>
                  </div>
                  <div className="space-y-3">
                    {prize.rewards.map((reward, ridx) => (
                      <div key={ridx} className="text-xs font-bold text-zinc-900 flex justify-between">
                        <span className="uppercase">{reward.split(" - ")[0]}</span>
                        <span className="text-blue-600 font-black">{reward.split(" - ")[1]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="age" className="w-full outline-none">
            <Tabs defaultValue="boys" className="flex flex-col space-y-8">
              <div className="flex justify-center">
                <TabsList className="bg-blue-50 p-1 rounded-2xl h-auto border border-blue-100">
                  <TabsTrigger value="boys" className="px-6 sm:px-10 py-2.5 sm:py-3 text-xs font-black uppercase rounded-xl data-[state=active]:bg-blue-600 data-[state=active]:text-white">Boys</TabsTrigger>
                  <TabsTrigger value="girls" className="px-6 sm:px-10 py-2.5 sm:py-3 text-xs font-black uppercase rounded-xl data-[state=active]:bg-blue-600 data-[state=active]:text-white">Girls</TabsTrigger>
                </TabsList>
              </div>
              <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {ageCategories.map((age, idx) => (
                  <div key={idx} className="bg-white border border-zinc-200 rounded-[2rem] p-8 shadow-sm">
                    <h5 className="text-base font-black text-zinc-900 mb-6 pb-4 border-b border-zinc-100 flex items-center justify-between">
                      {age}
                      <Users className="w-4 h-4 text-blue-600" />
                    </h5>
                    <div className="space-y-3">
                      {agePrizeRankings.map((p, pi) => (
                        <div key={pi} className="flex justify-between text-[11px] font-bold">
                          <span className="text-zinc-400 uppercase">{p.rank}</span>
                          <span className="text-zinc-900 font-black">{p.amount}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Tabs>
          </TabsContent>
        </Tabs>

        <div className="mt-20 flex flex-wrap justify-center gap-8 text-[11px] font-black text-zinc-900 uppercase tracking-[0.2em] pt-12 border-t-2 border-zinc-200 bg-blue-50/50 py-10 rounded-[3rem]">
          {["Prizes non-sharable", "Tax rules applicable", "Age proof mandatory", "One prize per player"].map((info, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm border border-zinc-100 flex-shrink-0">
              <div className="w-2 h-2 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
              <span>{info}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
