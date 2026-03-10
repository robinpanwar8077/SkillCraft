import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Info, AlertCircle, Calendar, Shield, MonitorOff, UserX } from "lucide-react";

export function Rules() {
  const rulesList = [
    {
      id: "item-1",
      title: "Tournament System & Time Control",
      icon: <Calendar className="w-5 h-5 text-blue-500" />,
      content: (
        <ul className="list-disc pl-5 space-y-2 text-zinc-600">
          <li>The tournament will be conducted as per FIDE Laws of Chess and FIDE Swiss System with 09 rounds.</li>
          <li>Time control: 30 Minutes + 30 Seconds increment from move 1.</li>
          <li>Default Time (Walk Over Time): 15 minutes.</li>
        </ul>
      )
    },
    {
      id: "item-2",
      title: "Eligibility & AICF Registration",
      icon: <Shield className="w-5 h-5 text-blue-500" />,
      content: (
        <div className="space-y-4 text-zinc-600">
          <ul className="list-decimal pl-5 space-y-2">
            <li>Any rated player whose rating has not crossed 1799 in last 36 months prior to start of the tournament.</li>
            <li>Any Unrated Player is eligible to participate.</li>
            <li>Players who finished first or second in any rating restricted FIDE tournament will not be eligible to play in any rating restricted tournament for one year from the date of such achievement.</li>
          </ul>
          <div className="p-4 bg-blue-50/50 border border-blue-100 rounded-xl">
            <h4 className="font-black text-blue-600 mb-2 uppercase tracking-widest text-xs">AICF Registration (Mandatory)</h4>
            <p className="text-sm font-medium text-zinc-700">All Indian players must be registered with AICF for the year 2025-26.</p>
            <ul className="list-disc pl-5 text-sm mt-2 text-blue-700 font-bold">
               <li>Renewals: <a href="https://prs.aicf.in/players" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800 transition-colors">prs.aicf.in/players</a></li>
               <li>New Players: <a href="https://prs.aicf.in/new-register" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800 transition-colors">prs.aicf.in/new-register</a></li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "item-3",
      title: "Prizes & Tax Regulations",
      icon: <AlertCircle className="w-5 h-5 text-blue-500" />,
      content: (
        <ul className="list-disc pl-5 space-y-2 text-zinc-600">
          <li>Tie Break according to latest AICF guideline. In case of a tie, the latest FIDE Rules shall come in to effect.</li>
          <li>The Cash prizes however will <strong className="text-blue-700">NOT</strong> be shared. One player will get one higher prize only.</li>
          <li>Indian Income Tax Act and rules will be applicable.</li>
          <li>Age category players are eligible for prizes of their own age category only and not for higher age category prizes.</li>
          <li>Best Female prizes will only be awarded to female participants aged 15 and above.</li>
        </ul>
      )
    },
    {
      id: "item-4",
      title: "Protests & Appeals",
      icon: <Info className="w-5 h-5 text-blue-500" />,
      content: (
        <p className="text-zinc-600">
          If any protest against the decision of the Chief Arbiter shall be made, it must be in writing with a protest fee of <strong className="text-blue-700">₹2,000</strong> within 15 minutes of the occurrence of the incident to the appeals committee. The protest fee will be refunded if the appeal is upheld. Before the commencement of the Tournament, an appeals committee of five members will be formed.
        </p>
      )
    },
    {
      id: "item-5",
      title: "Electronic Devices",
      icon: <MonitorOff className="w-5 h-5 text-blue-500" />,
      content: (
        <p className="text-zinc-600">
          All electronic items including <strong className="text-blue-700">all types of wrist watches</strong> are not allowed inside the playing arena.
        </p>
      )
    },
    {
      id: "item-6",
      title: "Withdrawals & Discipline",
      icon: <UserX className="w-5 h-5 text-blue-500" />,
      content: (
        <ul className="list-disc pl-5 space-y-2 text-zinc-600">
          <li><strong className="text-zinc-900">Withdrawals:</strong> A player may withdraw at any stage of the event, after informing the Chief Arbiter. If a player misses a round, they must report to the Chief Arbiter. Failure to do so will be considered a withdrawal, and the player will be removed from the pairings.</li>
          <li><strong className="text-zinc-900">Discipline:</strong> Any player or parent who disrupts the decorum of the tournament will face exclusion from the event.</li>
        </ul>
      )
    }
  ];

  return (
    <section id="rules" className="py-24 bg-white border-t border-zinc-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/2 -ml-24 -mt-24 w-64 h-64 rounded-full bg-blue-50/50 blur-[120px] pointer-events-none"></div>

      <div className="mx-auto max-w-4xl px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-7xl font-black text-zinc-900 tracking-tighter mb-6 leading-none">
            Tournament <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800">
              Rules
            </span>
          </h2>
          <p className="mt-4 text-lg text-zinc-500 font-medium">
            Official regulations and guidelines for the 2nd SkillCraft International.
          </p>
        </div>

        <div className="bg-zinc-50/50 backdrop-blur-sm p-4 sm:p-8 rounded-3xl border border-zinc-200 shadow-xl">
          <Accordion className="w-full">
            {rulesList.map((rule) => (
              <AccordionItem key={rule.id} value={rule.id} className="border-b border-zinc-200/50">
                <AccordionTrigger className="hover:no-underline group transition-colors text-left text-base sm:text-lg font-black text-zinc-900 py-4 sm:py-6">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="bg-blue-50 p-1.5 sm:p-2 rounded-xl border border-blue-100 shadow-sm flex-shrink-0 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300">
                      <div className="group-hover:text-white transition-colors">
                        {rule.icon}
                      </div>
                    </div>
                    <span>{rule.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-6 px-4 sm:px-14 leading-relaxed text-sm sm:text-base">
                  <div className="text-zinc-600 font-medium">
                    {rule.content}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest">
             The Organizer has the right to accept or reject any entry without assigning any reason.
          </p>
        </div>
      </div>
    </section>
  );
}
