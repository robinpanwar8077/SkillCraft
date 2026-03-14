import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Globe, CreditCard, ExternalLink, IndianRupee, ShieldCheck, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white border-t border-zinc-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Registration & Fees Details */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-[3rem] blur-2xl"></div>
            <Card className="relative bg-white border-zinc-100 shadow-xl h-full rounded-[3rem] overflow-hidden">
              <CardContent className="p-6 sm:p-10 flex flex-col justify-center h-full">
                <h3 className="text-2xl sm:text-4xl font-black text-zinc-900 mb-8 flex items-center gap-3 border-b border-zinc-100 pb-6 tracking-tighter uppercase">
                  <IndianRupee className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                  Registration
                </h3>

                <div className="space-y-6 text-zinc-600">
                  <div className="bg-blue-50/50 p-6 sm:p-8 rounded-[2rem] border border-blue-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-black px-4 py-1.5 rounded-bl-xl tracking-widest uppercase">Early Bird</div>
                    <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1">Standard Entry Fee</p>
                    <p className="font-black text-blue-600 text-3xl sm:text-5xl tracking-tighter mb-4">₹5,500</p>
                    <ul className="space-y-2 text-xs sm:text-sm text-zinc-500 font-medium">
                      <li className="flex items-center gap-2">• <strong className="text-zinc-900 font-black font-mono text-base sm:text-xl">₹4,500</strong> <span className="opacity-60 text-[10px] uppercase font-bold">(Till 1st Feb)</span></li>
                      <li className="flex items-center gap-2">• <strong className="text-zinc-900 font-black font-mono text-base sm:text-xl">₹5,000</strong> <span className="opacity-60 text-[10px] uppercase font-bold">(Till 15th Feb)</span></li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-zinc-50 p-4 rounded-2xl border border-zinc-200 text-center sm:text-left hover:border-blue-200 transition-colors">
                      <p className="text-[10px] text-zinc-400 font-black uppercase tracking-widest mb-1">Differently Abled</p>
                      <p className="font-black text-zinc-900 text-2xl tracking-tight">₹2,500</p>
                    </div>
                    <div className="bg-red-50/30 p-4 rounded-2xl border border-red-100 text-center sm:text-left hover:border-red-200 transition-colors">
                      <p className="text-[10px] text-red-400 font-black uppercase tracking-widest mb-1">Late Fees</p>
                      <p className="font-black text-red-600 text-2xl tracking-tight">+₹500</p>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col gap-3">
                    <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black h-14 rounded-2xl transition-all shadow-md group" asChild>
                      <a href="https://circlechess.com/registration?id=49733" target="_blank" rel="noopener noreferrer">
                        Register via Circle Chess
                        <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" className="w-full border-2 border-zinc-200 hover:border-blue-600 hover:text-blue-600 font-black h-14 rounded-2xl transition-all" asChild>
                      <a href="https://forms.gle/J5h5TCk1qeXjxRKa9" target="_blank" rel="noopener noreferrer">
                        Register via Google Form
                      </a>
                    </Button>

                    <p className="text-center text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em] mt-2">
                      Deadline: 25th March, 2026 • Non-Refundable
                    </p>
                    <div className="flex items-center justify-center gap-2 bg-zinc-50 py-2 rounded-xl border border-zinc-100">
                      <Trophy className="w-3 h-3 text-blue-600" />
                      <span className="text-[9px] font-black text-zinc-900 uppercase">Medals for all Age Category Players</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Venue & Organizer Details */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl sm:text-6xl font-black tracking-tighter text-zinc-900 mb-8 text-center lg:text-left leading-none uppercase">
              Venue & <span className="text-blue-600">Helpline</span>
            </h2>

            <div className="space-y-4">
              {/* Compact Venue Card */}
              <div className="bg-zinc-50 border border-zinc-200 rounded-[2rem] p-6 sm:p-8 transition-all hover:border-blue-300 shadow-sm relative overflow-hidden group">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
                  <div className="bg-blue-600 p-4 rounded-2xl shadow-lg shadow-blue-200 shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-grow text-center sm:text-left w-full">
                    <h3 className="text-xl sm:text-2xl font-black text-zinc-900 uppercase tracking-tight mb-2">Thyagraj Sports Complex</h3>
                    <p className="text-zinc-500 text-xs sm:text-sm font-bold uppercase tracking-widest mb-6">INA, New Delhi - 110023</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[10px] sm:text-xs font-black uppercase tracking-wider mb-6">
                      <div className="flex items-center justify-center sm:justify-start gap-2 text-blue-600 bg-blue-50 px-4 py-2 rounded-xl border border-blue-100">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
                        Metro: Dilli Haat-INA (Yellow & Pink)
                      </div>
                      <div className="flex items-center justify-center sm:justify-start gap-2 text-zinc-600 bg-white px-4 py-2 rounded-xl border border-zinc-200">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        A/C Arena & Parking
                      </div>
                    </div>

                    <Button size="lg" className="h-12 w-full sm:w-auto px-8 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-[11px] uppercase tracking-widest transition-all shadow-md shadow-blue-200 border-none" asChild>
                      <a href="https://maps.google.com/?q=Thyagraj+Sports+Complex+INA+New+Delhi" target="_blank" rel="noopener noreferrer">
                        <MapPin className="w-4 h-4 mr-2" />
                        View on Google Maps
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Compact Helpline Grid */}
              <div className="bg-white border border-zinc-200 rounded-[2rem] p-5 sm:p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-6">
                  <Phone className="w-4 h-4 text-blue-600" />
                  <h3 className="text-xs font-black text-zinc-400 uppercase tracking-[0.2em]">Official Helpline Directory</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { name: "Mr. Sushant Tiwari", role: "Tournament Director", contact: "+91 9911 07 2629" },
                    { name: "Mr. Sarthak Sikdar", role: "Sponsorship", contact: "+91 9911 80 0399" },

                    { name: "IA Shardul Sharma", role: "Technical Queries", contact: "+91 9667 72 8720" },
                    { name: "Mr. Prabindra Mani", role: "Registration", contact: "+91 9717 13 0205" },
                    { name: "Mr. Hariom Solanki", role: "Registration", contact: "+91 95820 30354" },
                    { name: "Mr. Vatsal Makol", role: "Co-Ordinator", contact: "+91 7709 01 2353" },
                  ].map((item, idx) => (
                    <div key={idx} className="p-3 rounded-2xl bg-zinc-50/50 border border-zinc-100/50 hover:bg-blue-50/30 hover:border-blue-100 transition-all flex flex-col justify-center">
                      <p className="text-[8px] font-black text-blue-400 uppercase tracking-widest leading-none mb-1">{item.role}</p>
                      <p className="text-zinc-900 font-black text-xs sm:text-sm tracking-tight">{item.name}</p>
                      <p className="text-blue-600 font-bold text-[10px] sm:text-xs mt-0.5 tabular-nums">{item.contact}</p>
                    </div>
                  ))}

                  {/* IA Atul Mishra with Email */}
                  <div className="p-3 rounded-2xl bg-zinc-50/50 border border-zinc-100/50 hover:bg-blue-50/30 hover:border-blue-100 transition-all flex flex-col justify-center col-span-1 sm:col-span-2">
                    <p className="text-[8px] font-black text-blue-400 uppercase tracking-widest leading-none mb-1">Chief Arbiter</p>
                    <div className="flex flex-col justify-center gap-1">
                      <p className="text-zinc-900 font-black text-xs sm:text-sm tracking-tight">IA Atul Mishra</p>
                      <p className="text-blue-600 font-black text-[9px] sm:text-xs uppercase tracking-tighter">mishraatul150@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-zinc-100">
                  <div className="flex items-center gap-3 mb-4 bg-blue-50 py-3 px-4 sm:px-6 rounded-xl border border-blue-100 w-full justify-center sm:justify-start transition-colors hover:bg-blue-100/50">
                    <Mail className="w-5 h-5 text-blue-600 shrink-0" />
                    <span className="text-[10px] sm:text-sm font-black text-blue-600 uppercase tracking-widest select-all text-center sm:text-left break-all">Teamskillcraft@skillcraft.co.in</span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="h-px flex-grow bg-blue-100" />
                      <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100 uppercase tracking-[0.2em]">Official Accommodation</span>
                      <div className="h-px flex-grow bg-blue-100" />
                    </div>
                    <Button variant="outline" className="w-full h-12 rounded-2xl text-[10px] font-black uppercase tracking-widest border-zinc-200 hover:border-blue-600 hover:text-blue-600 bg-white shadow-sm" asChild>
                      <a href="https://forms.gle/w8ADhgE5eSAzZBH39" target="_blank" rel="noopener noreferrer">
                        <Globe className="w-3.5 h-3.5 mr-2" /> click here to book accomodation
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
