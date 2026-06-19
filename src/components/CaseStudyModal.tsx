import { motion } from "motion/react";
import { X, CheckCircle2, TrendingUp, Users, Target, Activity } from "lucide-react";
import { CaseStudy } from "../types";

interface CaseStudyModalProps {
  caseStudy: CaseStudy;
  onClose: () => void;
}

export default function CaseStudyModal({ caseStudy, onClose }: CaseStudyModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-4xl bg-gradient-to-b from-[#141b2f] to-[#0d1222] border border-white/15 rounded-2xl overflow-hidden shadow-2xl z-10 my-8"
      >
        {/* Header Ribbon / Cover */}
        <div className="bg-gradient-to-r from-brand-accent/30 to-brand-teal/20 px-8 py-6 border-b border-white/10 relative">
          <div className="flex items-center justify-between">
            <span className="bg-brand-accent/20 border border-brand-accent/40 text-brand-accent-bright text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-bold">
              {caseStudy.tag}
            </span>
            <button
              onClick={onClose}
              className="p-1.5 text-brand-silver hover:text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-none"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <h3 className="font-heading font-extrabold text-xl md:text-2xl mt-4 text-white leading-tight">
            {caseStudy.title}
          </h3>
          <div className="absolute right-8 top-12 opacity-5 font-heading text-8xl font-black select-none pointer-events-none text-white">
            {caseStudy.num}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 max-h-[70vh] overflow-y-auto space-y-8">
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/5 border border-white/5 p-4 rounded-xl flex items-center gap-4">
              <div className="w-10 h-10 bg-brand-accent/15 border border-brand-accent/30 rounded-lg flex items-center justify-center text-brand-accent-bright flex-shrink-0">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-brand-silver uppercase tracking-wider font-bold">Role & Ownership</p>
                <p className="text-xs font-semibold text-white mt-0.5">{caseStudy.role}</p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/5 p-4 rounded-xl flex items-center gap-4">
              <div className="w-10 h-10 bg-brand-teal/15 border border-brand-teal/30 rounded-lg flex items-center justify-center text-brand-teal flex-shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-brand-silver uppercase tracking-wider font-bold">Key Stakeholders</p>
                <p className="text-xs font-semibold text-white mt-0.5">
                  {caseStudy.stakeholders ? caseStudy.stakeholders.join(", ") : "Product & Dev Teams"}
                </p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/5 p-4 rounded-xl flex items-center gap-4">
              <div className="w-10 h-10 bg-brand-gold/15 border border-brand-gold/30 rounded-lg flex items-center justify-center text-brand-gold flex-shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-brand-silver uppercase tracking-wider font-bold">Primary Outcome</p>
                <p className="text-xs font-semibold text-emerald-400 mt-0.5">
                  {caseStudy.impactMetrics ? caseStudy.impactMetrics[0] : "Successful Release"}
                </p>
              </div>
            </div>
          </div>

          {/* Problem Block */}
          <div className="bg-white/5 border border-white/5 p-5 md:p-6 rounded-xl space-y-2 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-red-500/80" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-red-400 flex items-center gap-2">
              <Activity className="w-4 h-4" />
              The Strategic Challenge
            </h4>
            <p className="text-sm text-brand-mist leading-relaxed font-normal">
              {caseStudy.problem}
            </p>
          </div>

          {/* Core Actions Taken */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-accent-bright flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-accent-bright" />
              Omar's Focus Areas & Key Actions Taken
            </h4>
            <div className="grid grid-cols-1 gap-3">
              {caseStudy.actions.map((action, idx) => (
                <div
                  key={idx}
                  className="bg-[#141b2f] border border-white/5 p-4 rounded-lg flex gap-4 hover:border-white/10 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-brand-accent/15 border border-brand-accent/25 flex items-center justify-center text-xs font-bold text-white flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-sm text-brand-mist leading-relaxed">{action}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Program Impact Metrics */}
          <div className="bg-gradient-to-r from-emerald-950/20 to-teal-950/20 border border-emerald-500/20 p-6 rounded-xl space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              Program Impact Metrics
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {caseStudy.impactMetrics?.map((metric, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/35 flex items-center justify-center text-emerald-400 flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{metric}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-white/5 px-8 py-5 flex justify-between items-center border-t border-white/5">
          <p className="text-xs text-brand-silver">
            Let's discuss this case study in detail.
          </p>
          <button
            onClick={onClose}
            className="bg-brand-accent hover:bg-brand-accent-bright text-white text-xs font-semibold px-5 py-2.5 rounded-lg transition-all"
          >
            Close Study
          </button>
        </div>
      </motion.div>
    </div>
  );
}
