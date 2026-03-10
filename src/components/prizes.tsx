"use client";

import { motion } from "framer-motion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
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
    <section id="prizes" className="py-16 bg-white text-zinc-900 border-t border-zinc-100 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-50/50 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section - Compact */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-4">
              <Trophy className="w-3 h-3" />
              Championship Rewards
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 tracking-tighter mb-4 leading-tight">
              Tournament <span className="text-blue-600">Prize Pool</span>
            </h2>
            <p className="text-zinc-500 text-sm font-medium leading-relaxed">
              Huge rewards across multiple categories. Guaranteed distribution for top performers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-blue-600 p-6 sm:p-8 rounded-[2rem] text-white shadow-xl shadow-blue-200 flex flex-col items-center md:items-end justify-center"
          >
            <span className="text-blue-100 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Total Fund</span>
            <span className="text-4xl sm:text-5xl font-black tracking-tighter leading-none">₹15,00,000</span>
            <div className="mt-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-blue-100">
              <Star className="w-3 h-3 fill-blue-300 text-blue-300" />
              Guaranteed Distribution
            </div>
          </motion.div>
        </div>

        <Tabs defaultValue="main" className="space-y-8">
          <div className="flex justify-center">
            <TabsList className="bg-zinc-100/50 border border-zinc-200 p-1 rounded-2xl h-auto flex flex-wrap justify-center gap-1">
              {[
                { id: "main", label: "Main Open", icon: Trophy },
                { id: "rating", label: "Rating", icon: Star },
                { id: "special", label: "Special", icon: Gem },
                { id: "age", label: "Age Groups", icon: Users },
              ].map((tab) => (
                <TabsTrigger 
                  key={tab.id}
                  value={tab.id} 
                  className="px-4 py-2 text-[10px] sm:text-xs font-black uppercase tracking-widest rounded-xl transition-all data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm text-zinc-500 flex items-center gap-2"
                >
                  <tab.icon className="w-3 h-3" />
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="main" className="outline-none focus:ring-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Top 3 Spotlight */}
              <div className="space-y-4">
                <h4 className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Top Podium</h4>
                <div className="grid grid-cols-1 gap-3">
                  {mainPrizes.slice(0, 3).map((prize, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className={`p-5 rounded-3xl border flex items-center justify-between shadow-sm ${
                        idx === 0 ? 'bg-blue-50 border-blue-200' : 'bg-white border-zinc-200'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 flex items-center justify-center rounded-2xl font-black text-lg ${
                          idx === 0 ? 'bg-blue-600 text-white' : 
                          idx === 1 ? 'bg-zinc-200 text-zinc-900' : 
                          'bg-zinc-100 text-zinc-500'}`}>
                          {idx + 1}
                        </div>
                        <div>
                          <p className={`font-black uppercase tracking-tighter ${idx === 0 ? "text-blue-700" : "text-zinc-900"}`}>{prize.rank}</p>
                          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Placement</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`text-2xl font-black tracking-tighter ${idx === 0 ? "text-blue-600" : "text-zinc-900"}`}>{prize.amount}</p>
                        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Trophy + Cash</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Other Ranks - Compact Table */}
              <div className="bg-zinc-50/50 rounded-[2rem] border border-zinc-200 p-6 overflow-hidden">
                <h4 className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-4 ml-1">Cash Prizes (4th - 40th)</h4>
                <div className="max-h-[300px] overflow-y-auto no-scrollbar pr-2">
                  <div className="space-y-2">
                    {mainPrizes.slice(3).map((prize, idx) => (
                      <div key={idx} className="flex justify-between items-center py-2.5 px-4 bg-white rounded-xl border border-zinc-100 shadow-sm">
                        <span className="text-xs font-black text-zinc-900 uppercase tracking-tight w-24">{prize.rank}</span>
                        <div className="h-px flex-grow bg-zinc-100 mx-4 border-t border-dashed" />
                        <span className="text-sm font-black text-blue-600 tabular-nums">{prize.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-center gap-2 text-zinc-400 text-[10px] font-bold uppercase tracking-widest">
                  <Info className="w-3 h-3" />
                  Scroll to view more
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="rating" className="outline-none">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {ratingCategories.map((cat, idx) => (
                <div key={idx} className="bg-white border border-zinc-200 rounded-3xl p-5 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-sm font-black text-zinc-900 tracking-tight mb-4 border-b border-zinc-100 pb-2 flex items-center gap-2">
                    <Star className="w-4 h-4 text-blue-600 fill-blue-50" />
                    {cat.title}
                  </h4>
                  <div className="space-y-2">
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

          <TabsContent value="special" className="outline-none">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {specialPrizes.map((prize, idx) => (
                <div key={idx} className="p-5 bg-zinc-50/50 border border-zinc-200 rounded-3xl hover:bg-white transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                      <Gem className="w-4 h-4" />
                    </div>
                    <h5 className="text-xs font-black text-zinc-900 uppercase tracking-tight">{prize.category}</h5>
                  </div>
                  <div className="space-y-1.5">
                    {prize.rewards.map((reward, ridx) => (
                      <div key={ridx} className="text-[10px] font-bold text-zinc-600 flex justify-between">
                        <span>{reward.split(" - ")[0]}</span>
                        <span className="text-blue-600 font-black uppercase">{reward.split(" - ")[1]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="age" className="outline-none">
            <Tabs defaultValue="boys" className="space-y-6">
              <div className="flex justify-center">
                <TabsList className="bg-blue-50 p-1 rounded-xl h-auto border border-blue-100">
                  <TabsTrigger value="boys" className="px-5 py-1.5 text-[10px] sm:text-xs font-bold rounded-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white">Boys</TabsTrigger>
                  <TabsTrigger value="girls" className="px-5 py-1.5 text-[10px] sm:text-xs font-bold rounded-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white">Girls</TabsTrigger>
                </TabsList>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {ageCategories.map((age, idx) => (
                  <div key={idx} className="bg-white border border-zinc-200 rounded-3xl p-5 shadow-sm">
                    <div className="flex items-center justify-between mb-4 border-b border-zinc-100 pb-2">
                      <h5 className="text-sm font-black text-zinc-900 tracking-tight">{age}</h5>
                      <div className="w-6 h-6 rounded-lg bg-blue-50 flex items-center justify-center">
                        <Users className="w-3 h-3 text-blue-600" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      {agePrizeRankings.map((p, pi) => (
                        <div key={pi} className="flex justify-between text-[10px] font-bold">
                          <span className="text-zinc-400">{p.rank}</span>
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

        {/* Info badges - Compact */}
        <div className="mt-12 flex flex-wrap justify-center gap-4 text-[9px] font-black text-zinc-400 uppercase tracking-widest pt-8 border-t border-zinc-100">
          {["Prizes non-sharable", "Tax rules applicable", "Age proof mandatory", "One prize per player"].map((info, idx) => (
            <div key={idx} className="flex items-center gap-2 group">
              <div className="w-5 h-5 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-blue-600">
                <Info className="w-2.5 h-2.5" />
              </div>
              <span>{info}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

