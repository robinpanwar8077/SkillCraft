"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Trophy, MapPin, BookmarkIcon, Timer } from "lucide-react";

export function Schedule() {
  const scheduleData = [
    {
      day: "Day 1", date: "27th March", events: [
        { time: "09:00 AM", event: "Reporting Time", category: "Admin" },
        { time: "09:15 AM", event: "Player's Meeting", category: "Admin" },
        { time: "09:30 AM", event: "Round 1", category: "Match" },
        { time: "12:30 PM", event: "Round 2", category: "Match" },
        { time: "03:30 PM", event: "Round 3", category: "Match" },
      ]
    },
    {
      day: "Day 2", date: "28th March", events: [
        { time: "09:00 AM", event: "Round 4", category: "Match" },
        { time: "12:00 PM", event: "Round 5", category: "Match" },
        { time: "03:00 PM", event: "Round 6", category: "Match" },
      ]
    },
    {
      day: "Day 3", date: "29th March", events: [
        { time: "08:30 AM", event: "Round 7", category: "Match" },
        { time: "11:30 AM", event: "Round 8", category: "Match" },
        { time: "02:30 PM", event: "Round 9", category: "Match" },
        { time: "06:00 PM", event: "Prize Distribution", category: "Admin" },
      ]
    },
  ];

  return (
    <section id="schedule" className="py-12 sm:py-20 bg-white text-zinc-900 border-t border-zinc-100 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10 w-full">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-4">
              <Clock className="w-3 h-3" />
              Event Timeline
            </div>
            <h2 className="text-3xl sm:text-6xl font-black text-zinc-900 tracking-tighter mb-4 leading-tight">
              Tournament <span className="text-blue-600">Schedule</span>
            </h2>
            <p className="text-zinc-500 text-xs sm:text-base font-medium max-w-md mx-auto leading-relaxed">
              9 rounds of strategic competition over three intensive days.
            </p>
          </motion.div>
        </div>

        <Tabs defaultValue="Day 1" className="flex flex-col w-full space-y-10">
          <div className="w-full overflow-x-auto no-scrollbar scroll-smooth flex justify-center py-1">
            <TabsList className="bg-zinc-100 p-1 rounded-2xl h-auto flex gap-1 shadow-sm border border-zinc-200 min-w-max">
              {scheduleData.map((day) => (
                <TabsTrigger
                  key={day.day}
                  value={day.day}
                  className="px-8 py-3 rounded-xl text-[10px] sm:text-xs font-black uppercase tracking-widest transition-all data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm text-zinc-400"
                >
                  {day.day}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {scheduleData.map((day) => (
            <TabsContent key={day.day} value={day.day} className="w-full outline-none focus:ring-0">
              <div className="w-full max-w-3xl mx-auto flex flex-col gap-4">
                {day.events.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.03 }}
                    className="w-full"
                  >
                    <div className="w-full bg-white border border-zinc-200 rounded-[2rem] p-5 sm:p-6 hover:border-blue-300 hover:bg-blue-50/10 transition-all flex items-center gap-6 shadow-sm group">
                      <div className="flex-shrink-0">
                        <div className="w-24 sm:w-28 bg-blue-50 border border-blue-100 py-3 rounded-2xl flex flex-col items-center justify-center group-hover:bg-blue-600 transition-colors">
                          <span className="text-xs sm:text-base font-black text-blue-700 group-hover:text-white tabular-nums tracking-tighter">
                            {item.time}
                          </span>
                          <span className="text-[7px] sm:text-[8px] font-black text-blue-400 group-hover:text-blue-100 uppercase mt-1 tracking-widest">Starts</span>
                        </div>
                      </div>

                      <div className="flex-grow min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                          <h4 className="text-base sm:text-2xl font-black text-zinc-900 tracking-tight uppercase leading-tight break-words">{item.event}</h4>
                          <span className={`w-fit px-3 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest border shrink-0 ${item.category === 'Match'
                            ? 'bg-blue-50 text-blue-600 border-blue-100'
                            : 'bg-zinc-100 text-zinc-500 border-zinc-200'
                            }`}>
                            {item.category}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-zinc-50 group-hover:bg-white transition-colors flex-shrink-0 border border-transparent group-hover:border-zinc-100">
                        {item.category === 'Match' ? (
                          <Trophy className="w-5 h-5 text-blue-500" />
                        ) : (
                          <BookmarkIcon className="w-5 h-5 text-zinc-400" />
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Info Cards - Stack on Mobile */}
        <div className="mt-16 flex flex-col lg:flex-row justify-center gap-6 w-full max-w-4xl mx-auto px-4">
          {[
            { label: "Time Control", value: "30 Min + 30 Sec Incr.", icon: Timer },
            { label: "Walk Over Time", value: "Strict 15 Minutes", icon: MapPin },
          ].map((info, idx) => (
            <div key={idx} className="flex items-center gap-6 bg-zinc-50 px-8 py-6 rounded-[2rem] border border-zinc-100 w-full hover:bg-white transition-all shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                <info.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">{info.label}</span>
                <span className="block text-sm sm:text-base font-black text-zinc-900 tracking-tight">{info.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
