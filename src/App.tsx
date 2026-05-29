import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FileText,
  Mail,
  Linkedin,
  Phone,
  Bookmark,
  Award,
  BookOpen,
  Milestone,
  Check,
  ChevronRight,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Target,
  FileSpreadsheet
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { CASE_STUDIES, EXPERIENCE, STRENGTHS, PUBLICATION } from "./data";
import { CaseStudy } from "./types";

import Navbar from "./components/Navbar";
import ExperienceTimeline from "./components/ExperienceTimeline";
import InteractiveToolkit from "./components/InteractiveToolkit";
import CaseStudyModal from "./components/CaseStudyModal";
import AchievementsGrid from "./components/AchievementsGrid";
import ResumeViewer from "./components/ResumeViewer";
import ContactForm from "./components/ContactForm";

// @ts-ignore
import omarPortrait from "./assets/images/1737719683856.jpg";

export default function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Core stats displayed on the Hero and throughout the operations bio
  const stats = [
    { num: "2+", label: "Years in SaaS" },
    { num: "1,200+", label: "Learners Managed" },
    { num: "5+", label: "Enterprise Clients" },
  ];

  return (
    <div className="relative min-h-screen font-sans bg-[#0a0e1a] text-white overflow-x-hidden scroll-smooth selection:bg-brand-accent selection:text-white">
      {/* Background grain texture overlay */}
      <div className="fixed inset-0 pointer-events-none noise-overlay z-0 opacity-20" />

      {/* Modern ambient blurred background blobs */}
      <div className="absolute top-[-10%] left-[5%] w-[80vw] h-[80vw] bg-radial from-brand-accent/15 via-transparent to-transparent opacity-60 z-0 pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[60vw] h-[60vw] bg-radial from-brand-teal/10 via-brand-accent/5 to-transparent opacity-50 z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-[-10%] w-[70vw] h-[70vw] bg-radial from-brand-gold/5 via-transparent to-transparent opacity-40 z-0 pointer-events-none" />

      {/* Global Header Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* ── HERO SECTION ── */}
      <header
        id="hero"
        className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 py-24 md:py-32 xl:px-24 z-10 max-w-7xl mx-auto"
      >
        {/* Subtle geometric line grid accent */}
        <div className="absolute inset-0 bg-linear-[rgba(255,255,255,0.02)_1px,transparent_1px] [background-size:60px_60px] pointer-events-none opacity-40 -z-1" />

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 xl:gap-16 items-center">
          
          {/* Left Column: Biography & Action Cards */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-brand-accent/15 border border-brand-accent/35 text-brand-accent-bright font-heading text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full"
            >
              <Bookmark className="w-3 h-3 fill-brand-accent-bright" />
              Available for PM / Operations Manager Roles
            </motion.div>

            {/* Name & Title display */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-heading font-black text-4xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight text-white leading-[1.05]"
              >
                Omar Hasnain <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent-bright via-brand-teal to-emerald-400">
                  Mahmud
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-heading text-md sm:text-lg md:text-xl font-semibold tracking-wide text-brand-teal"
              >
                Product Manager · SaaS · UX · Execution
              </motion.p>
            </div>

            {/* Positioning declaration statement */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="border-l-4 border-brand-accent pl-5 max-w-2xl py-1 text-md text-[#c8d0de] font-medium leading-relaxed italic"
            >
              "I build and deliver user-focused SaaS products by combining product thinking, UX clarity, and execution discipline."
            </motion.div>

            {/* Core Biography paragraphs */}
            {/* <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xs sm:text-sm md:text-base text-brand-silver max-w-3xl leading-relaxed font-normal"
            >
              Experienced in VC-backed SaaS environments, enterprise client delivery, and cross-functional product execution. Currently shaping Gustav — a hospitality PMS — at Dekko ISHO Venture Capital. Turning complex problems into clean, impactful product experiences.
            </motion.p> */}

            {/* Action CTAs button panel */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-3.5 pt-4"
            >
              <a
                href="#casestudies"
                className="bg-brand-accent hover:bg-brand-accent-bright text-white text-xs font-bold uppercase tracking-widest px-6 py-4 rounded-xl shadow-lg shadow-brand-accent/20 hover:shadow-brand-accent/30 transition-all duration-200"
              >
                📂 View Case Studies
              </a>
            </motion.div>

            {/* Inline Hero numerical counters - Stat indicators (TEMPORARILY HIDDEN for professional profile formulation) */}
            {/*
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-row flex-wrap items-center gap-6 sm:gap-12 pt-8 sm:pt-12 border-t border-white/5 opacity-80"
            >
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-6 sm:gap-12">
                  <div className="space-y-1">
                    <p className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight">
                      {stat.num}
                    </p>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-brand-silver">
                      {stat.label}
                    </p>
                  </div>
                  {i < stats.length - 1 && (
                    <div className="w-[1px] h-8 bg-white/10 hidden sm:block" />
                  )}
                </div>
              ))}
            </motion.div>
            */}
          </div>

          {/* Right Column: Visual Portrait Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative group w-full max-w-[280px] sm:max-w-[340px]">
              {/* Complex circular background glow rings mirroring current theme */}
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-accent to-brand-teal rounded-full blur-2xl opacity-25 group-hover:opacity-35 transition-opacity duration-500" />
              
              {/* Secondary delicate spinning-like border overlay */}
              <div className="absolute -inset-2.5 bg-gradient-to-br from-brand-accent/40 via-transparent to-brand-teal/40 rounded-full border border-white/10 opacity-75 scale-102 group-hover:scale-104 transition-all duration-500" />

              {/* Neomorphic Circular Portrait frame */}
              <div className="relative rounded-full overflow-hidden border-[6px] border-[#0a0e1a] bg-[#141b2f] shadow-2xl shadow-brand-accent/25 aspect-square">
                <img
                  src={omarPortrait}
                  alt="Omar Hasnain Mahmud Portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 duration-700 transition-all select-none"
                />
              </div>

              {/* Overlay Badge 1: PM Role Indicator */}
              <div className="absolute -bottom-3 -left-3 bg-[#1e2538]/95 backdrop-blur-md border border-white/10 rounded-2xl p-3 shadow-xl flex items-center gap-2.5 max-w-[170px] hover:scale-105 transition-transform select-none">
                <div className="w-8 h-8 rounded-lg bg-brand-accent/20 border border-brand-accent/30 flex items-center justify-center text-brand-accent-bright shrink-0">
                  <Target className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-[8px] uppercase font-bold tracking-wider text-brand-silver truncate">Core Alignment</p>
                  <p className="text-xs font-extrabold text-[#ffffff] leading-none mt-0.5">SaaS Product PM</p>
                </div>
              </div>

              {/* Overlay Badge 2: Analytical Mindset / Empathy */}
              <div className="absolute top-10 -right-4 bg-[#141b2f]/95 backdrop-blur-md border border-emerald-500/20 rounded-2xl p-3 shadow-xl flex items-center gap-2.5 max-w-[175px] hover:scale-105 transition-transform select-none">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/35 flex items-center justify-center text-emerald-400 shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-[8px] uppercase font-bold tracking-wider text-brand-silver truncate">Operations Focus</p>
                  <p className="text-xs font-extrabold text-emerald-400 leading-none mt-0.5">Ops Alignment</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </header>

      {/* ── ABOUT ME SECTION ── */}
      <section id="about" className="relative bg-brand-snow text-brand-ink py-20 md:py-32 z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 xl:gap-20 items-start">
            
            {/* Left Narrative details */}
            <div className="space-y-8">
              <div className="space-y-3">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#2563eb] flex items-center gap-2">
                  <span className="w-6 h-[2px] bg-[#2563eb]" />
                  Executive Bio
                </p>
                <h2 className="font-heading font-extrabold text-[#0a0e1a] text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight">
                  Product thinking meets <span className="text-[#2563eb]">real execution</span>
                </h2>
              </div>

              <div className="space-y-5 text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                <p>
                  I'm a Product Manager with hands-on experience in VC-backed SaaS startups. At{" "}
                  <strong>Dekko ISHO Venture Capital</strong>, I work on <strong>Gustav</strong> — a hospitality PMS — handling enterprise clients, requirement gathering, product testing, and cross-functional delivery.
                </p>
                <p>
                  Previously at <strong>Programming Hero</strong>, I managed 1,200+ learners, co-designed the gamified{" "}
                  <strong>"Squid Game"</strong> educational project, and streamlined LMS workflows to reduce user friction and improve submission indices.
                </p>

                {/* Main focus callout block */}
                <div className="bg-[#0a0e1a] text-white p-5 md:p-6 rounded-2xl border-l-4 border-brand-accent-bright flex items-start gap-4 shadow-lg shadow-[#0a0e1a]/10">
                  <span className="text-2xl mt-0.5 select-none text-brand-teal">🎯</span>
                  <div className="space-y-1">
                    <h4 className="font-heading font-bold text-sm text-white">Career Goal Coordinate</h4>
                    <p className="text-xs text-brand-mist leading-relaxed font-normal">
                      Seeking PM or Operations Manager roles at global tech or e-learning companies — where product thinking, UX clarity, and execution discipline drive real impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Quick highlights board */}
            <div className="bg-[#f8faff] border border-black/5 rounded-2xl p-6 md:p-8 space-y-4 shadow-sm">
              <p className="text-[10px] uppercase font-bold tracking-widest text-brand-silver">
                Portfolio Snapshot Directories
              </p>

              <div className="divide-y divide-gray-100">
                {[
                  { label: "Current Role", val: "Key Accounts Manager", sub: "Dekko ISHO VC · Gustav PMS" },
                  { label: "Domain focus", val: "SaaS · Hospitality PMS", sub: "VC-backed startup environment" },
                  { label: "Past Background", val: "Project Executive", sub: "Programming Hero · EdTech platform" },
                  { label: "Academic Landmark", val: "IEEE Conference Publication", sub: "Research paper on binary intrusion detection" },
                  { label: "Role Alignment Target", val: "Global Tech · E-learning", sub: "PM / Operations Manager" },
                ].map((item) => (
                  <div key={item.label} className="py-3.5 first:pt-0 last:pb-0 block space-y-0.5">
                    <p className="text-[9px] uppercase tracking-wider font-extrabold text-[#2563eb]">
                      {item.label}
                    </p>
                    <p className="text-sm font-bold text-[#0a0e1a]">{item.val}</p>
                    <p className="text-xs text-brand-silver">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CORE COMPETENCIES (SKILLS PILLARS) ── */}
      <section id="skills" className="relative bg-brand-cloud text-brand-ink py-20 md:py-32 z-10 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          
          <div className="space-y-3 max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#2563eb] flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#2563eb]" />
              Core Competencies
            </p>
            <h2 className="font-heading font-extrabold text-[#0a0e1a] text-3xl sm:text-4xl tracking-tight">
              Three pillars of <span className="text-[#2563eb]">product excellence</span>
            </h2>
            <p className="text-xs sm:text-sm text-brand-silver leading-relaxed font-normal">
              My approach sits at the intersection of strategy, systems thinking, and user empathy.
            </p>
          </div>

          {/* Dynamic Toolkit component allowing search/filter/hover highlights */}
          <InteractiveToolkit />
        </div>
      </section>

      {/* ── CASE STUDIES WORK SHOWCASE SECTION ── */}
      <section id="casestudies" className="relative py-20 md:py-32 z-10 border-t border-white/5 bg-[#0a0e1a]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          
          <div className="space-y-3 max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-widest text-brand-teal flex items-center gap-2">
              <span className="w-6 h-[2px] bg-brand-teal" />
              Work Showcase
            </p>
            <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl tracking-tight">
              Featured <span className="text-brand-accent-bright">Case Studies</span>
            </h2>
            <p className="text-xs sm:text-sm text-brand-silver leading-relaxed font-normal">
              Deep dives into real product challenges, decisions, and outcomes. Select a study below to view complete mechanics and operational actions.
            </p>
          </div>

          {/* Grid of Case Studies for selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CASE_STUDIES.map((cs) => (
              <motion.div
                key={cs.id}
                whileHover={{ y: -5 }}
                className="bg-[#141b2f] border border-white/5 hover:border-white/15 rounded-2xl p-6 md:p-8 shadow-md relative overflow-hidden group transition-all"
              >
                {/* Visual Number mark */}
                <div className="absolute top-4 right-6 font-heading text-6xl font-black text-white/5 select-none pointer-events-none transition-all duration-300 group-hover:text-white/10 group-hover:scale-105">
                  {cs.num}
                </div>

                <div className="space-y-4">
                  <span className="inline-block bg-[#1e2538] text-brand-teal border border-brand-teal/20 text-[9px] uppercase font-bold tracking-widest px-2.5 py-1 rounded">
                    {cs.tag}
                  </span>

                  <h3 className="font-heading font-bold text-md sm:text-lg text-white leading-snug group-hover:text-brand-accent-bright transition-colors">
                    {cs.title}
                  </h3>

                  {/* Truncated representation paragraph */}
                  <p className="text-xs text-brand-silver leading-relaxed line-clamp-2">
                    {cs.problem}
                  </p>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2.5 py-1 rounded">
                      🚧 Full Case Study Available
                    </span>

                    <button
                      onClick={() => setSelectedCaseStudy(cs)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-teal hover:text-white cursor-pointer select-none"
                    >
                      Deep Dive
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── EXPERIENCE TIMELINE SECTION ── */}
      <section id="experience" className="relative bg-brand-snow text-brand-ink py-20 md:py-32 z-10 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          
          <div className="space-y-3 max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#2563eb] flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#2563eb]" />
              Track Record
            </p>
            <h2 className="font-heading font-extrabold text-[#0a0e1a] text-3xl sm:text-4xl tracking-tight">
              Work <span className="text-[#2563eb]">Experience</span>
            </h2>
            <p className="text-xs sm:text-sm text-brand-silver leading-relaxed font-normal">
              Hands-on product and project delivery across startup and VC-backed SaaS environments.
            </p>
          </div>

          <ExperienceTimeline timeline={EXPERIENCE} />

          {/* 🎓 EDUCATION SUB-SECTION */}
          <div className="pt-12 border-t border-black/5 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h3 className="font-heading font-extrabold text-[#0a0e1a] text-xl tracking-tight flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-[#2563eb]/10 text-[#2563eb]">🎓</span>
                Education
              </h3>
              <div className="bg-white border border-black/5 rounded-2xl p-6 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-heading font-extrabold text-sm sm:text-base text-[#0a0e1a]">
                      BSc. in Computer and Communication Engineering
                    </h4>
                    <p className="text-xs sm:text-sm text-brand-silver font-semibold mt-1">
                      International Islamic University Chittagong (IIUC)
                    </p>
                  </div>
                  <span className="self-start sm:self-center text-[10px] uppercase font-bold tracking-wider px-3 px-3.5 py-2 bg-[#2563eb]/10 text-[#2563eb] rounded-lg">
                    Graduated 2025
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ACADEMIC PUBLICATION SECTION ── */}
      <section id="publication" className="relative bg-brand-ink-soft py-20 md:py-32 z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          
          <div className="space-y-3 max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-widest text-brand-teal flex items-center gap-2">
              <span className="w-6 h-[2px] bg-brand-teal" />
              Academic Research
            </p>
            <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl tracking-tight">
              IEEE <span className="text-brand-accent-bright">Publication</span>
            </h2>
            <p className="text-xs sm:text-sm text-brand-silver leading-relaxed font-normal">
              Contributing to technical discourse at an international academic level.
            </p>
          </div>

          {/* Publication Presentation Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-linear-to-br from-brand-accent/15 to-brand-teal/5 border border-brand-accent/25 rounded-2xl p-6 md:p-8 grid grid-cols-1 lg:grid-cols-[110px_1fr] gap-6 items-start relative overflow-hidden"
          >
            {/* Subtle floating circle element */}
            <div className="absolute top-[-30px] right-[-30px] w-[140px] h-[140px] rounded-full bg-brand-accent/5 pointer-events-none" />

            <div className="bg-brand-accent text-white px-3 py-4 rounded-xl text-center min-w-[90px] flex flex-col justify-center items-center shadow-lg pointer-events-none">
              <BookOpen className="w-6 h-6 text-white mb-2" />
              <p className="font-heading font-black text-md leading-none">IEEE</p>
              <p className="text-[7px] uppercase tracking-wider font-bold opacity-80 mt-1">Conference</p>
            </div>

            <div className="space-y-3">
              <h3 className="font-heading font-bold text-[#ffffff] text-md sm:text-lg">
                {PUBLICATION.title}
              </h3>
              <p className="text-brand-teal text-xs font-semibold uppercase tracking-wider">
                📍 {PUBLICATION.venue}
              </p>
              <p className="text-xs sm:text-sm text-brand-mist leading-relaxed font-normal">
                {PUBLICATION.desc}
              </p>

              {/* simulated DOI link click */}
              <div className="pt-2">
                <a
                  href={PUBLICATION.doiLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 hover:bg-white/10 text-brand-silver hover:text-white border border-white/10 text-xs font-semibold px-4 py-2.5 rounded-lg inline-flex items-center gap-2 select-none duration-250 cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-brand-teal" />
                  Request Academic Abstract & DOI
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── ACHIEVEMENTS & MILESTONES (TEMPORARILY HIDDEN) ── */}
      {/*
      <section id="achievements" className="relative bg-[#0d1222] py-20 md:py-32 z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          
          <div className="space-y-3 max-w-2xl text-left">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#2563eb] flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#2563eb]" />
              Notable Success Metrics
            </p>
            <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl tracking-tight">
              Achievements & <span className="text-brand-accent-bright">Milestones</span>
            </h2>
            <p className="text-xs sm:text-sm text-brand-silver leading-relaxed font-normal">
              SaaS onboarding gains, learner leadership logs, and retention goals achieved.
            </p>
          </div>

          <AchievementsGrid />
        </div>
      </section>
      */}

      {/* ── STRENGTHS / WHAT SETS ME APART ── */}
      <section id="strengths" className="relative py-20 md:py-32 bg-[#0a0e1a] z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          
          <div className="space-y-3 max-w-2xl text-left">
            <p className="text-[10px] font-bold uppercase tracking-widest text-brand-teal flex items-center gap-2">
              <span className="w-6 h-[2px] bg-brand-teal" />
              Product Leadership Traits
            </p>
            <h2 className="font-heading font-extrabold text-[#ffffff] text-3xl sm:text-4xl tracking-tight">
              What Sets <span className="text-brand-accent-bright">Me Apart</span>
            </h2>
            <p className="text-xs sm:text-sm text-brand-silver leading-relaxed font-normal text-left">
              The professional strengths that allow me to organize, align, and deliver in fast-moving software environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STRENGTHS.map((str, index) => (
              <motion.div
                key={str.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white/[0.03] border border-white/5 hover:border-brand-accent/35 hover:bg-brand-accent/5 p-6 rounded-2xl transition-all duration-300 relative group"
              >
                {/* Visual marker */}
                <span className="text-2xl mt-0.5 select-none block mb-4 filter group-hover:brightness-130 transition-all">
                  {str.icon === "Building" ? "🏢" :
                   str.icon === "Rocket" ? "🚀" :
                   str.icon === "MessageSquare" ? "💬" :
                   str.icon === "GitPullRequest" ? "🔗" :
                   str.icon === "HeartRating" ? "❤️" : "📚"}
                </span>

                <div className="space-y-2">
                  <h4 className="font-heading font-extrabold text-white text-md tracking-tight">
                    {str.title}
                  </h4>
                  <p className="text-xs text-brand-silver leading-relaxed font-normal">
                    {str.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── RESUME HUB PREVIEW AND SELECTION SECTION ── */}
      <section id="resume" className="relative bg-brand-snow py-20 z-10 text-brand-ink border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ResumeViewer />
        </div>
      </section>

      {/* ── CONTACT & DISPATCH CONSOLE SECTION ── */}
      <section id="contact" className="relative bg-[#0d1222] text-white py-20 md:py-32 z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-stretch">
            
            {/* Left Column coordinates and links */}
            <div className="flex flex-col justify-between py-2">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-1.5 bg-brand-accent/20 border border-brand-accent/30 text-brand-accent-bright text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full">
                  Instant Contact Coordinate
                </span>
                <h2 className="font-heading font-black text-3xl sm:text-5xl text-white leading-tight">
                  Let's create <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent-bright to-brand-teal">
                    impactful products
                  </span>{" "}
                  <br />
                  together.
                </h2>
                {/* <p className="text-xs sm:text-sm text-brand-silver leading-relaxed font-normal max-w-md">
                  I'm currently looking for Product Manager, Operations Manager, and Product Analyst opportunities at global software structures or EdTech startups. Let's arrange a brief, secure sync.
                </p> */}
              </div>

              {/* Static Anchor channels */}
              <div className="space-y-3.5 mt-8 lg:mt-0">
                <a
                  href="mailto:ohasnainmahmud@gmail.com"
                  className="bg-white/[0.03] border border-white/10 hover:border-brand-accent/45 hover:bg-brand-accent/5 p-4 rounded-xl flex items-center gap-4 transition-all"
                >
                  <div className="w-10 h-10 bg-brand-accent/15 rounded-lg flex items-center justify-center text-brand-accent-bright flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[9px] uppercase font-bold tracking-wider text-brand-silver">Private Mail Coordinate</p>
                    <p className="text-xs font-bold text-white mt-0.5">ohasnainmahmud@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/hasnain-project-manager/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/[0.03] border border-white/10 hover:border-[#0284c7]/45 hover:bg-[#0284c7]/5 p-4 rounded-xl flex items-center gap-4 transition-all"
                >
                  <div className="w-10 h-10 bg-[#0284c7]/15 rounded-lg flex items-center justify-center text-[#38bdf8] flex-shrink-0">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[9px] uppercase font-bold tracking-wider text-brand-silver">LinkedIn Network</p>
                    <p className="text-xs font-bold text-white mt-0.5">Connect on LinkedIn</p>
                  </div>
                </a>

                <div className="bg-white/[0.03] border border-white/10 p-4 rounded-xl flex items-center gap-4">
                  <div className="w-10 h-10 bg-emerald-500/15 rounded-lg flex items-center justify-center text-emerald-400 flex-shrink-0">
                    <FaWhatsapp className="w-5 h-5" />
                  </div>
                  <div>
                    <a href="https://wa.me/8801999333643" target="_blank" rel="noopener noreferrer">
                      <p className="text-[9px] uppercase font-bold tracking-wider text-brand-silver">Quick WhatsApp Reachout</p>
                      <p className="text-xs font-bold text-white mt-0.5">Chat on WhatsApp</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column message client */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ── FOOTER CORE ── */}
      <footer className="bg-[#0a0e1a] border-t border-white/5 py-8 px-6 md:px-12 z-10 relative">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="font-heading font-extrabold text-sm text-brand-silver">
            Omar Hasnain <span className="text-brand-accent-bright">Mahmud</span>
          </div>
          <p className="text-[10px] text-brand-silver leading-relaxed">
            © {new Date().getFullYear()} Omar Mahmud · Product Operations Manager Portfolio. All verified.
          </p>
        </div>
      </footer>

      {/* ── CASE STUDY MODAL DIALOGS OVERWRITES ── */}
      <AnimatePresence>
        {selectedCaseStudy && (
          <CaseStudyModal
            caseStudy={selectedCaseStudy}
            onClose={() => setSelectedCaseStudy(null)}
          />
        )}
      </AnimatePresence>

      {/* ── RESUME MODAL DIALOG OVERWRITE ── */}
      <AnimatePresence>
        {isResumeOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsResumeOpen(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-4xl bg-white border border-black/5 rounded-2xl overflow-y-auto max-h-[90vh]"
            >
              <div className="sticky top-0 right-0 p-4 flex justify-end z-20 bg-brand-snow/80 backdrop-blur border-b border-gray-100">
                <button
                  onClick={() => setIsResumeOpen(false)}
                  className="bg-brand-ink shrink-0 h-9 w-9 text-xs font-black uppercase text-brand-silver hover:text-white bg-brand-[#0a0e1a] rounded-lg transition-all border border-white/5 flex items-center justify-center cursor-pointer"
                >
                  ✕ Close
                </button>
              </div>
              <div className="p-4 md:p-8 bg-brand-snow shadow-inner">
                <ResumeViewer />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── SCROLL TO TOP FLOATING BUTTON ── */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 15 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-brand-accent hover:bg-brand-accent-bright text-white shadow-2xl shadow-brand-accent/30 border border-white/10 cursor-pointer transition-all hover:scale-110 active:scale-95 flex items-center justify-center"
            title="Scroll back to top"
            aria-label="Back to top"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
