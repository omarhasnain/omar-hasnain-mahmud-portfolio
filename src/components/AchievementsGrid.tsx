import { motion } from "motion/react";
import { Award, Zap, TrendingUp, Users, ShieldCheck, Star } from "lucide-react";
import { ACHIEVEMENTS } from "../data";

export default function AchievementsGrid() {
  const getIcon = (category: string) => {
    switch (category) {
      case "SaaS Efficiency":
        return <Zap className="w-5 h-5 text-brand-accent-bright" />;
      case "EdTech Operations":
        return <Users className="w-5 h-5 text-brand-teal" />;
      case "Product Growth":
        return <TrendingUp className="w-5 h-5 text-emerald-400" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-brand-gold" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {ACHIEVEMENTS.map((ach, index) => (
          <motion.div
            key={ach.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-white border border-black/5 hover:border-black/10 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all relative overflow-hidden flex flex-col justify-between"
          >
            {/* Top Row Category & Icon */}
            <div className="flex items-center justify-between">
              <span className="text-[9px] uppercase font-bold tracking-widest text-brand-silver bg-[#f0f4ff] px-2.5 py-1 rounded-md">
                {ach.category}
              </span>
              <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center">
                {getIcon(ach.category)}
              </div>
            </div>

            {/* Giant Metric Display */}
            <div className="my-5">
              <p className="font-heading font-black text-3xl md:text-4xl text-[#0a0e1a] tracking-tight">
                {ach.metric}
              </p>
            </div>

            {/* Title & Explanation */}
            <div className="space-y-1.5">
              <h4 className="font-heading font-bold text-sm text-[#0a0e1a] tracking-tight leading-snug">
                {ach.title}
              </h4>
              <p className="text-xs text-brand-silver leading-relaxed font-normal">
                {ach.detail}
              </p>
            </div>

            {/* Interactive Bottom Accent */}
            <div className="mt-4 pt-3 border-t border-gray-50 flex items-center justify-between text-[10px] font-bold text-brand-accent hover:text-brand-accent-bright select-none cursor-default">
              <span className="flex items-center gap-1">
                <Star className="w-3 h-3 fill-brand-gold text-brand-gold" /> Critical Win
              </span>
              <span>Metric Verified</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Embedded Client Wins Showcase */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-brand-ink-soft to-brand-ink border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-accent/5 rounded-full blur-2xl pointer-events-none" />

        <div className="space-y-2 max-w-xl text-center md:text-left">
          <span className="inline-flex items-center gap-1.5 bg-brand-teal/15 text-brand-teal border border-brand-teal/20 text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full">
            <Award className="w-3 h-3" /> Impact Highlights
          </span>
          <h4 className="font-heading font-extrabold text-[#ffffff] text-lg">
            Bridging the gap between Product Vision and Customer Revenue
          </h4>
          <p className="text-xs text-brand-mist leading-relaxed font-normal">
            By embedding structured QA metrics, defining comprehensive user stories, and conducting face-to-face workshop requirement-gathering reviews, I secure high satisfaction loops and long-term enterprise contract renewals.
          </p>
        </div>

        <div className="flex gap-4 md:border-l border-white/10 md:pl-8 flex-shrink-0 w-full md:w-auto justify-center md:justify-start">
          <div className="text-center bg-white/5 border border-white/5 rounded-xl px-5 py-4 w-28">
            <p className="font-heading font-extrabold text-2xl text-emerald-400">98%</p>
            <p className="text-[9px] uppercase font-bold tracking-wider text-brand-silver mt-1">Client Retention</p>
          </div>
          <div className="text-center bg-white/5 border border-white/5 rounded-xl px-5 py-4 w-28">
            <p className="font-heading font-extrabold text-2xl text-brand-teal">60%</p>
            <p className="text-[9px] uppercase font-bold tracking-wider text-brand-silver mt-1">QA Velocity Boost</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
