"use client";

import { Trophy, Mail, Phone, MapPin, ExternalLink, ShieldCheck, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-50 border-t border-zinc-200 pt-20 pb-10 overflow-hidden relative">
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 opacity-20"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

          {/* Logo & Vision */}
          <div className="space-y-6">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-xl border border-zinc-200 shadow-sm">
                <img src="/logo.jpg" alt="SkillCraft Logo" className="h-full w-full object-cover" />
              </div>
            </div>
            <p className="text-zinc-500 text-sm font-medium leading-relaxed">
              Empowering the next generation of chess champions through world-class international tournaments and premium competitive experiences.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-blue-600 hover:border-blue-600 transition-all shadow-sm">
                <ShieldCheck className="w-4 h-4" />
              </a>
              <span className="text-xs text-zinc-400 font-bold uppercase tracking-widest">Under the aegis of AICF & DCA</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-zinc-900 font-black mb-6 uppercase tracking-widest text-[10px]">Event Navigation</h4>
            <ul className="space-y-4">
              {["Prizes", "Schedule", "Rules", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-zinc-500 font-bold hover:text-blue-600 text-sm transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 mr-3 group-hover:bg-blue-600 transition-colors"></span>
                    {link}
                  </a>
                </li>
              ))}
              <li>
                <a href="https://circlechess.com/registration?id=49733" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 text-sm font-black flex items-center gap-2 uppercase tracking-widest">
                  Register Official
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Venue Info */}
          <div>
            <h4 className="text-zinc-900 font-black mb-6 uppercase tracking-widest text-[10px]">The Arena</h4>
            <div className="space-y-4 text-sm text-zinc-600 font-medium">
              <div className="flex gap-3">
                <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Thyagraj Sports Complex, INA, New Delhi - 110023</span>
              </div>
              <div className="flex gap-3">
                <Phone className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Helpdesk: +91 9911 07 2629</span>
              </div>
              <div className="flex gap-3">
                <Mail className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span className="truncate">Teamskillcraft@skillcraft.co.in</span>
              </div>
            </div>
          </div>

          {/* Organizer */}
          <div className="text-center md:text-left">
            <h4 className="text-zinc-900 font-black mb-6 uppercase tracking-widest text-[10px]">Organized By</h4>
            <div className="bg-white p-6 rounded-[2rem] border border-zinc-100 shadow-xl shadow-zinc-200/50 max-w-sm mx-auto md:mx-0">
              <p className="text-blue-600 font-black text-lg mb-1 tracking-tight">SkillCraft International</p>
              <p className="text-zinc-400 font-bold text-[10px] mb-4 uppercase tracking-widest">SkillCraft Sports & Media Ltd.</p>
              <Button className="w-full bg-zinc-900 text-white hover:bg-black text-[10px] h-10 font-black uppercase tracking-widest rounded-xl transition-all shadow-md" asChild>
                <a href="https://skillcraft.co.in" target="_blank" rel="noopener noreferrer">Official Website</a>
              </Button>
            </div>
          </div>

        </div>

        <div className="pt-10 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest text-center md:text-left leading-relaxed">
            © {currentYear} SkillCraft International Chess Tournament. All Rights Reserved. <br />
            <span className="text-zinc-300">Tournament Code: AICF-430122 | FIDE Rated Below 1800 Classical</span>
          </p>

        </div>
      </div>
    </footer>
  );
}

const Button = ({ children, className, asChild, ...props }: any) => {
  return (
    <button className={`inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${className}`} {...props}>
      {children}
    </button>
  );
};
