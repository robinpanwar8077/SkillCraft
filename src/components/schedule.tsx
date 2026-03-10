"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, Trophy, MapPin, Star, BookmarkIcon, Timer } from "lucide-react";

export function Schedule() {
  const scheduleData = [
    { day: "Day 1", date: "27th March", events: [
      { time: "09:00 AM", event: "Reporting Time", category: "Admin" },
      { time: "09:15 AM", event: "Player's Meeting", category: "Admin" },
      { time: "09:30 AM", event: "Round 1", category: "Match" },
      { time: "12:30 PM", event: "Round 2", category: "Match" },
      { time: "03:30 PM", event: "Round 3", category: "Match" },
    ]},
    { day: "Day 2", date: "28th March", events: [
      { time: "09:00 AM", event: "Round 4", category: "Match" },
      { time: "12:00 PM", event: "Round 5", category: "Match" },
      { time: "03:00 PM", event: "Round 6", category: "Match" },
    ]},
    { day: "Day 3", date: "29th March", events: [
      { time: "08:30 AM", event: "Round 7", category: "Match" },
      { time: "11:30 AM", event: "Round 8", category: "Match" },
      { time: "02:30 PM", event: "Round 9", category: "Match" },
      { time: "06:00 PM", event: "Prize Distribution", category: "Admin" },
    ]},
  ];

  return (
    <section id="schedule" className="py-16 bg-white text-zinc-900 border-t border-zinc-100 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-50/50 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-4">
              <Clock className="w-3 h-3" />
              Event Timeline
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 tracking-tighter mb-4 leading-tight">
              Tournament <span className="text-blue-600">Schedule</span>
            </h2>
            <p className="text-zinc-500 text-sm font-medium max-w-lg leading-relaxed mx-auto">
              9 rounds of strategic competition over three intensive days.
            </p>
          </motion.div>
        </div>

        <Tabs defaultValue="Day 1" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-zinc-100/50 border border-zinc-200 p-1 rounded-2xl h-auto flex gap-1 shadow-sm">
              {scheduleData.map((day) => (
                <TabsTrigger 
                  key={day.day} 
                  value={day.day} 
                  className="px-6 py-2 rounded-xl text-[10px] sm:text-xs font-black uppercase tracking-widest transition-all data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm text-zinc-400 border border-transparent data-[state=active]:border-zinc-50"
                >
                  {day.day}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {scheduleData.map((day) => (
            <TabsContent key={day.day} value={day.day} className="outline-none focus:ring-0">
              <div className="max-w-3xl mx-auto space-y-3">
                {day.events.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.03 }}
                  >
                    <div className="bg-white border border-zinc-200 rounded-2xl p-3 sm:p-4 hover:border-blue-300 hover:bg-blue-50/20 transition-all flex items-center gap-4 shadow-sm group">
                      <div className="flex-shrink-0">
                        <div className="w-20 sm:w-24 bg-blue-50 border border-blue-100 px-3 py-2 rounded-xl flex flex-col items-center justify-center group-hover:bg-blue-600 transition-colors">
                          <span className="text-sm font-black text-blue-700 group-hover:text-white tabular-nums tracking-tighter">
                            {item.time}
                          </span>
                          <span className="text-[8px] font-black text-blue-400 group-hover:text-blue-100 uppercase tracking-widest">Starts</span>
                        </div>
                      </div>

                      <div className="flex-grow">
                        <div className="flex items-center gap-3">
                          <h4 className="text-base sm:text-lg font-black text-zinc-900 tracking-tight uppercase leading-none">{item.event}</h4>
                          <span className={`px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest border ${
                            item.category === 'Match' 
                              ? 'bg-blue-50 text-blue-600 border-blue-100' 
                              : 'bg-zinc-100 text-zinc-500 border-zinc-200'
                          }`}>
                            {item.category}
                          </span>
                        </div>
                      </div>

                      <div className="hidden sm:flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-50 group-hover:bg-white transition-colors">
                        {item.category === 'Match' ? (
                          <Trophy className="w-3.5 h-3.5 text-blue-500" />
                        ) : (
                          <BookmarkIcon className="w-3.5 h-3.5 text-zinc-400" />
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Compact Footer Info */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4 text-center">
            {[
              { label: "Time Control", value: "30 Min + 30 Sec Incr.", icon: Timer },
              { label: "Walk Over Time", value: "Strict 15 Minutes", icon: MapPin },
            ].map((info, idx) => (
              <div key={idx} className="flex items-center justify-center gap-3 bg-zinc-50 px-4 py-3 rounded-2xl border border-zinc-100">
                <info.icon className="w-4 h-4 text-blue-600" />
                <div className="text-left">
                  <span className="block text-[8px] font-black text-zinc-400 uppercase tracking-widest">{info.label}</span>
                  <span className="block text-xs font-black text-zinc-900 tracking-tight">{info.value}</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
