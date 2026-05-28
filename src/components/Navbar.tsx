import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, FileText } from "lucide-react";

interface NavbarProps {
  onOpenResume: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Case Studies", href: "#casestudies" },
    { name: "Experience", href: "#experience" },
    { name: "Publication", href: "#publication" },
    { name: "What Sets Me Apart", href: "#strengths" },
  ];

  return (
    <nav
      id="mainNav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 ${
        scrolled
          ? "bg-[#0a0e1a] shadow-lg border-b border-white/10 py-3"
          : "bg-[#0a0e1a] border-b border-white/5 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#hero" className="font-heading font-extrabold text-xl tracking-tight text-white hover:opacity-90 transition-opacity">
          Omar<span className="text-brand-accent-bright">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wider text-brand-silver hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 pl-4 border-l border-white/10">
            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-teal hover:text-white border border-brand-teal/30 hover:border-brand-teal bg-brand-teal/5 hover:bg-brand-teal/10 px-4 py-2 rounded-lg transition-all duration-200"
            >
              <FileText className="w-3.5 h-3.5" />
              Resume
            </button>
            <a
              href="#contact"
              className="bg-brand-accent hover:bg-brand-accent-bright text-white text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-lg shadow-lg shadow-brand-accent/20 hover:shadow-brand-accent-bright/30 transition-all duration-200"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="flex items-center justify-center p-2 text-brand-teal border border-brand-teal/20 bg-brand-teal/5 rounded-lg text-xs font-medium"
            title="View Resume"
          >
            <FileText className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white hover:text-brand-accent-bright transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-[#0a0e1a] border-b border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-semibold tracking-wide text-brand-silver hover:text-white py-2 border-b border-white/5 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenResume();
                  }}
                  className="flex items-center justify-center gap-2 bg-brand-teal/10 hover:bg-brand-teal/20 text-brand-teal border border-brand-teal/30 text-xs font-bold uppercase tracking-widest py-3 rounded-lg transition-all"
                >
                  <FileText className="w-4 h-4" />
                  Interactive Resume
                </button>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center bg-brand-accent hover:bg-brand-accent-bright text-white text-xs font-bold uppercase tracking-widest py-3 rounded-lg transition-all shadow-lg"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
