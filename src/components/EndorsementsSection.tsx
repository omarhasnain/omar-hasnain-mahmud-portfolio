import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, CheckCircle2, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { ENDORSEMENTS } from "../data";
import { Endorsement } from "../types";

interface EndorsementCardProps {
  item: Endorsement;
  index?: number;
  className?: string;
}

// Single Card View used across both Desktop grid and Mobile carousel
function EndorsementCard({ item, index = 0, className = "" }: EndorsementCardProps) {
  const [imageError, setImageError] = useState(false);

  // Generate fallback initials
  const initials = item.name
    .split(" ")
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("");

  return (
    <div
      className={`bg-brand-grey border border-slate-200/90 hover:border-blue-400/50 rounded-2xl p-6 md:p-7 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group relative overflow-hidden h-full ${className}`}
    >
      {/* Decorative subtle gradient splash on hover */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/60 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500 opacity-60" />

      {/* Top Header: Quote Icon & Relationship Tag */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-2xs group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
            <Quote className="w-4 h-4 fill-current rotate-180" />
          </div>
          <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 bg-slate-100/80 px-2.5 py-1 rounded-md border border-slate-200/60">
            {item.relationship}
          </span>
        </div>

        {/* Recommendation quote text */}
        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed font-normal italic relative">
          "{item.recommendation}"
        </p>
      </div>

      {/* Author Details & LinkedIn Link */}
      <div className="pt-6 mt-6 border-t border-slate-150/80">
        <div className="flex items-center gap-3.5 mb-4">
          {/* Avatar Image with graceful fallback */}
          <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-xs bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
            {!imageError ? (
              <img
                src={item.image}
                alt={item.name}
                referrerPolicy="no-referrer"
                onError={() => setImageError(true)}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <span className="font-heading font-extrabold text-blue-700 text-sm">
                {initials}
              </span>
            )}
          </div>

          {/* Name & Designation */}
          <div className="min-w-0 flex-1">
            <h4 className="font-heading font-bold text-sm sm:text-base text-slate-900 group-hover:text-blue-600 transition-colors truncate">
              {item.name}
            </h4>
            <p className="text-xs font-semibold text-blue-600 leading-snug truncate">
              {item.designation}
            </p>
            <p className="text-[11px] text-slate-500 font-normal truncate">
              {item.company}
            </p>
          </div>
        </div>

        {/* LinkedIn icon link and verification status */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          {/* Just the LinkedIn icon button */}
          <a
            href={item.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-blue-50/80 hover:bg-[#0a66c2] text-[#0a66c2] hover:text-white border border-blue-200/70 hover:border-[#0a66c2] flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-110 active:scale-95"
            title={`View ${item.name}'s LinkedIn profile`}
            aria-label={`${item.name} LinkedIn profile`}
          >
            <svg
              className="w-4 h-4 fill-current transition-colors"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>

          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full">
            <CheckCircle2 className="w-3 h-3 text-emerald-500" />
            Verified
          </span>
        </div>
      </div>
    </div>
  );
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
    scale: 0.98,
    transition: {
      duration: 0.25,
      ease: "easeInOut",
    },
  }),
};

export default function EndorsementsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = ENDORSEMENTS.length;

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Autoplay functionality with smooth pause on user activity
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, nextSlide]);

  // Touch Swipe Handlers for mobile gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 40;
    const isRightSwipe = distance < -40;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      id="endorsements"
      className="relative bg-brand-cloud text-slate-800 py-24 md:py-32 z-10 border-t border-slate-200/50"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-10 md:space-y-12">
        {/* Section Heading */}
        <div className="space-y-3 max-w-2xl text-left">
          <p className="text-[10px] font-bold uppercase tracking-widest text-blue-600 flex items-center gap-2">
            <span className="w-6 h-[2px] bg-blue-600" />
            Endorsements & Recommendations
          </p>
          <h2 className="font-heading font-extrabold text-slate-900 text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight">
            What Industry <span className="text-blue-600">Leaders Say</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            Reflections from engineering VPs, startup founders, luxury hospitality enterprise clients, and academic mentors on execution velocity, product leadership, and problem-solving.
          </p>
        </div>

        {/* ── MOBILE CAROUSEL VIEW (Visible on mobile screens < md) ── */}
        <div className="block md:hidden">
          {/* Carousel Status Bar */}
          <div className="flex items-center justify-between pb-3 text-xs text-slate-500 font-medium">
            <span className="inline-flex items-center gap-1.5 font-bold tracking-wider text-[11px] text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
              Leader {currentIndex + 1} of {total}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-slate-400">Swipe or tap arrows</span>
              <button
                onClick={() => setIsAutoPlaying((prev) => !prev)}
                className="p-1 rounded text-slate-400 hover:text-blue-600 transition-colors"
                title={isAutoPlaying ? "Pause autoplay" : "Resume autoplay"}
                aria-label={isAutoPlaying ? "Pause autoplay" : "Resume autoplay"}
              >
                {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Swipeable Card Stage */}
          <div
            className="relative touch-pan-y select-none min-h-[380px] flex items-stretch"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full h-full"
              >
                <EndorsementCard item={ENDORSEMENTS[currentIndex]} index={currentIndex} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Controls: Navigation Arrows + Pagination Dots */}
          <div className="flex items-center justify-between pt-5 px-1">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white border border-slate-200/90 shadow-xs hover:bg-slate-50 text-slate-700 flex items-center justify-center transition-all active:scale-95 cursor-pointer"
              aria-label="Previous endorsement"
            >
              <ChevronLeft className="w-5 h-5 text-slate-700" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {ENDORSEMENTS.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => goToSlide(idx)}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    currentIndex === idx
                      ? "w-7 h-2 bg-blue-600"
                      : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white border border-slate-200/90 shadow-xs hover:bg-slate-50 text-slate-700 flex items-center justify-center transition-all active:scale-95 cursor-pointer"
              aria-label="Next endorsement"
            >
              <ChevronRight className="w-5 h-5 text-slate-700" />
            </button>
          </div>
        </div>

        {/* ── DESKTOP GRID VIEW (Visible on tablet/desktop screens >= md) ── */}
        <div className="hidden md:block space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ENDORSEMENTS.slice(0, 3).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="h-full"
              >
                <EndorsementCard item={item} index={index} />
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:max-w-5xl lg:mx-auto">
            {ENDORSEMENTS.slice(3, 5).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                whileHover={{ y: -4 }}
                className="h-full"
              >
                <EndorsementCard item={item} index={index + 3} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
