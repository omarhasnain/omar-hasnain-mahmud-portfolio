import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, ClipboardList, TrendingUp, Sparkles, SlidersHorizontal, Settings, HelpCircle, Eye, RefreshCw } from "lucide-react";
import { Tool } from "../types";
import { COMPREHENSIVE_TOOLS } from "../data";

export default function InteractiveToolkit() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [isExpanded, setIsExpanded] = useState(false);

  const categories = [
    { id: "all", name: "All Skills" },
    { id: "pm", name: "Product Thinking" },
    { id: "execution", name: "Execution & Delivery" },
    { id: "ux", name: "UX Understanding" },
    { id: "communication", name: "Communication" },
    { id: "business", name: "Business & Strategy" },
    { id: "data", name: "Data & Reports" },
  ];

  const filteredTools = COMPREHENSIVE_TOOLS.filter((tool) => {
    return activeCategory === "all" || tool.category === activeCategory;
  });

  const displayedTools = isExpanded ? filteredTools : filteredTools.slice(0, 6);

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    setIsExpanded(false); // Reset to compact view for better initial scan
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "clipboard-list":
        return <ClipboardList className="w-5 h-5 text-brand-accent-bright" />;
      case "sort-desc":
        return <SlidersHorizontal className="w-5 h-5 text-brand-gold" />;
      case "briefcase":
        return <TrendingUp className="w-5 h-5 text-brand-teal" />;
      case "activity":
        return <Sparkles className="w-5 h-5 text-brand-emerald" />;
      case "message-circle":
        return <ClipboardList className="w-5 h-5 text-brand-teal" />;
      case "users":
        return <TrendingUp className="w-5 h-5 text-purple-400" />;
      case "settings":
        return <Settings className="w-5 h-5 text-brand-accent-bright" />;
      case "check-check":
        return <Sparkles className="w-5 h-5 text-emerald-400" />;
      case "frame":
        return <Eye className="w-5 h-5 text-pink-400" />;
      case "target":
        return <SlidersHorizontal className="w-5 h-5 text-brand-gold" />;
      case "database":
        return <RefreshCw className="w-5 h-5 text-blue-400" />;
      case "line-chart":
        return <TrendingUp className="w-5 h-5 text-brand-teal" />;
      default:
        return <HelpCircle className="w-5 h-5 text-brand-silver" />;
    }
  };

  const getPillarColor = (category: string) => {
    switch (category) {
      case "pm":
        return "border-l-4 border-brand-accent";
      case "execution":
        return "border-l-4 border-emerald-500";
      case "ux":
        return "border-l-4 border-pink-500";
      case "communication":
        return "border-l-4 border-brand-teal";
      default:
        return "border-l-4 border-brand-gold";
    }
  };

  const chips = [
    "Figma", "Notion", "Jira", "Google Workspace", "Miro", 
    "Slack", "Linear", "Trello", "Zoom", "Agile / Scrum"
  ];

  return (
    <div className="space-y-8">
      {/* Category Filter bar */}
      <div className="bg-[#f8faff] border border-black/5 p-4 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-[10px] uppercase font-extrabold tracking-wider text-brand-silver">
          Filter by Domain area:
        </span>
        {/* Categories Scroll / Flex container */}
        <div className="flex flex-wrap gap-1.5 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`text-[10px] uppercase font-bold tracking-wider px-3.5 py-2.5 rounded-lg transition-colors cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-[#0a0e1a] text-white"
                  : "bg-white hover:bg-black/5 text-[#4b5563]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of filtering competencies */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence mode="popLayout">
          {displayedTools.map((tool) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              key={tool.name}
              className={`bg-white p-5 rounded-xl border border-black/5 hover:border-black/10 shadow-sm hover:shadow-md transition-all flex gap-4 ${getPillarColor(
                tool.category
              )}`}
            >
              <div className="w-10 h-10 bg-[#f0f4ff] border border-brand-accent/5 rounded-lg flex items-center justify-center flex-shrink-0">
                {getIcon(tool.icon)}
              </div>
              <div className="space-y-1">
                <h4 className="font-heading font-bold text-sm text-[#0a0e1a]">{tool.name}</h4>
                <p className="text-xs text-brand-silver leading-relaxed font-normal">{tool.desc}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* See More Expansion Control */}
      {filteredTools.length > 6 && !isExpanded && (
        <div className="flex justify-center pt-2">
          <button
            onClick={() => setIsExpanded(true)}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-accent hover:text-brand-accent-bright transition-all cursor-pointer border border-[#2563eb]/20 hover:border-[#2563eb] px-6 py-3.5 rounded-xl bg-[#2563eb]/5 hover:bg-[#2563eb]/10 shadow-sm"
          >
            <span>See More Competencies</span>
            <span className="text-xs font-extrabold">↓</span>
          </button>
        </div>
      )}

      {/* Show Less Control (for good UX) */}
      {isExpanded && (
        <div className="flex justify-center pt-2">
          <button
            onClick={() => setIsExpanded(false)}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#4b5563] hover:text-brand-accent transition-all cursor-pointer border border-black/10 hover:border-black/20 px-6 py-3.5 rounded-xl bg-black/5 hover:bg-black/10"
          >
            <span>Show Fewer Competencies</span>
            <span className="text-xs font-extrabold">↑</span>
          </button>
        </div>
      )}

      {/* Modern Tool Chips section - Non-clickable static visual indicator */}
      <div className="pt-6 border-t border-black/5">
        <p className="text-[10px] uppercase font-extrabold tracking-wider text-brand-silver mb-3">
          Specialized Software & Frameworks
        </p>

        <div className="flex flex-wrap gap-2">
          {chips.map((chip) => (
            <span
              key={chip}
              className="text-xs font-semibold px-4 py-2 rounded-full border border-black/5 bg-[#f3f4f6] text-slate-700 select-none shadow-xs"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
