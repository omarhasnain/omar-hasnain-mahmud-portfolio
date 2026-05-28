import { motion } from "motion/react";
import { Briefcase, Calendar, Users, Star } from "lucide-react";
import { ExperienceItem } from "../types";

interface ExperienceTimelineProps {
  timeline: ExperienceItem[];
}

export default function ExperienceTimeline({ timeline }: ExperienceTimelineProps) {
  return (
    <div className="relative mt-12 space-y-12">
      {/* Central Line for timeline (only visible on big screen) */}
      <div className="absolute left-[200px] top-4 bottom-4 w-[2px] bg-brand-accent/20 hidden md:block" />

      {timeline.map((item, index) => (
        <motion.div
          key={item.company}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-12 group"
        >
          {/* Left Metadata column */}
          <div className="space-y-2 md:text-right md:pr-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-accent/15 to-brand-teal/10 border border-brand-accent/30 text-brand-accent-bright text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full md:flex-row-reverse">
              <Calendar className="w-3 h-3 text-brand-teal" />
              {item.period}
            </div>

            <h3 className="font-heading font-extrabold text-[#0a0e1a] text-lg mt-2 leading-snug">
              {item.company}
            </h3>

            <p className="text-xs text-brand-silver font-medium">{item.sub}</p>

            <div className="inline-block bg-[#2563eb] text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md mt-1 shadow-md shadow-brand-accent/10">
              {item.role}
            </div>
          </div>

          {/* Timeline Node Point (centered on the line) */}
          <div className="absolute left-[193px] top-2 w-[15px] h-[15px] rounded-full bg-brand-accent border-[3px] border-brand-snow group-hover:scale-130 transition-transform duration-300 hidden md:block shadow-md shadow-brand-accent/20" />

          {/* Right Content card */}
          <div className="bg-white border border-black/5 hover:border-black/10 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden">
            {/* Subtle background glow on hover */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand-accent/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <h4 className="font-heading font-bold text-[#0a0e1a] text-md mb-4 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-brand-accent" />
              Key Deliverables & Operations Focus
            </h4>

            <ul className="space-y-3">
              {item.highlights.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed">
                  <span className="text-brand-accent font-bold mt-0.5 select-none text-xs">→</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Managed luxury clients category tags if present (e.g. Gustav PMS clients) */}
            {item.clients && (
              <div className="mt-6 pt-5 border-t border-gray-100">
                <p className="text-[10px] uppercase font-bold tracking-wider text-brand-silver flex items-center gap-1.5 mb-2.5">
                  <Users className="w-3.5 h-3.5 text-brand-teal" />
                  Key Accounts & Partners Managed
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.clients.map((client) => (
                    <span
                      key={client}
                      className="bg-[#f0f4ff] hover:bg-brand-accent/10 border border-brand-accent/10 text-[#1e293b] text-xs font-semibold px-3 py-1 rounded-md flex items-center gap-1 transition-colors cursor-default"
                    >
                      <Star className="w-3 h-3 text-brand-gold fill-brand-gold" />
                      {client}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
