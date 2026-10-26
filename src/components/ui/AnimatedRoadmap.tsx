import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Briefcase, Award, Monitor, Lightbulb } from 'lucide-react';

interface AnimatedRoadmapProps {
  className?: string;
}

export const AnimatedRoadmap: React.FC<AnimatedRoadmapProps> = ({ className = '' }) => {
  const [activeStage, setActiveStage] = useState<number | null>(null);

  // SVG road curve coordinates on the 1200 x 896 canvas
  const roadPathD = 'M 195 850 C 255 815, 315 765, 370 735 C 390 725, 405 715, 420 705 C 470 735, 570 755, 680 715 C 735 685, 715 625, 640 585 C 545 535, 460 505, 440 455 C 430 415, 480 375, 550 335 C 575 315, 555 280, 520 270';

  const milestones = [
    {
      id: 1,
      title: 'Curiosity & Admission',
      desc: 'Step in with an idea & passion to learn',
      icon: Lightbulb,
      x: 235,
      y: 600,
      badgeX: 18,
      badgeY: 67,
    },
    {
      id: 2,
      title: 'Training Institute Labs',
      desc: 'Hands-on Tally Prime & GST dual-screen drills',
      icon: Monitor,
      x: 415,
      y: 705,
      badgeX: 35,
      badgeY: 79,
    },
    {
      id: 3,
      title: 'Authorized Certification',
      desc: 'Official TEPL credential & verifiable transcripts',
      icon: Award,
      x: 595,
      y: 490,
      badgeX: 50,
      badgeY: 55,
    },
    {
      id: 4,
      title: 'Dream Job & Career Summit',
      desc: 'Offer letter, corporate placement & career success',
      icon: Briefcase,
      x: 520,
      y: 260,
      badgeX: 43,
      badgeY: 28,
    },
  ];

  return (
    <div className={`relative w-full max-w-2xl mx-auto select-none ${className}`}>
      {/* 1. Base Illustration (Clean pure white background blending directly into website) */}
      <img
        src="/institute-to-job.jpg"
        alt="Pathway from LK Training Institute to Dream Job"
        loading="lazy"
        decoding="async"
        className="w-full h-auto block object-contain mix-blend-multiply pointer-events-none"
      />

      {/* 2. Interactive Animated SVG Overlay */}
      <svg
        viewBox="0 0 1200 896"
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="roadGradient" x1="0%" y1="100%" x2="50%" y2="0%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="1" />
          </linearGradient>

          <radialGradient id="beaconGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="1" />
            <stop offset="50%" stopColor="#34d399" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.6" />
            <stop offset="60%" stopColor="#f59e0b" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="bulbGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
          </radialGradient>

          {/* Animated Motion Filter */}
          <filter id="glowFilter" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Dynamic Flowing Energy Road Line */}
        <motion.path
          d={roadPathD}
          fill="none"
          stroke="url(#roadGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray="16 20"
          filter="url(#glowFilter)"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -288 }}
          transition={{
            duration: 6,
            ease: 'linear',
            repeat: Infinity,
          }}
          opacity="0.85"
        />

        {/* Luminous Lightbulb Aura (Student's Curiosity at (235, 595)) */}
        <g transform="translate(235, 595)">
          <motion.circle
            r="18"
            fill="url(#bulbGlow)"
            animate={{
              r: [16, 36, 16],
              opacity: [0.6, 0.9, 0.6],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.circle
            r="8"
            fill="#f59e0b"
            animate={{
              scale: [0.9, 1.25, 0.9],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </g>

        {/* Training Institute Activity Energy (Door pulse at (418, 710)) */}
        <g transform="translate(418, 710)">
          <motion.circle
            r="20"
            fill="none"
            stroke="#10b981"
            strokeWidth="2.5"
            strokeDasharray="4 4"
            animate={{
              scale: [0.8, 1.4, 0.8],
              opacity: [0.2, 0.8, 0.2],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          <motion.circle
            r="6"
            fill="#10b981"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </g>

        {/* Certification Shimmer Aura (at (595, 490)) */}
        <g transform="translate(595, 490)">
          <motion.circle
            r="18"
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="2"
            animate={{
              scale: [0.9, 1.3, 0.9],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.6,
            }}
          />
        </g>

        {/* Sun Radiance at the Mountain Peak (at (505, 105)) */}
        <g transform="translate(505, 105)">
          <motion.circle
            r="42"
            fill="url(#sunGlow)"
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.5, 0.9, 0.5],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </g>

        {/* Victory "JOB" Flag Shimmer (at (475, 160)) */}
        <g transform="translate(475, 160)">
          <motion.circle
            r="14"
            fill="#10b981"
            opacity="0.25"
            animate={{
              scale: [1, 1.6, 1],
              opacity: [0.15, 0.45, 0.15],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </g>

        {/* Floating "JOB OFFER" Letter Glow (at (645, 275)) */}
        <g transform="translate(645, 275)">
          <motion.circle
            r="16"
            fill="#f59e0b"
            opacity="0.3"
            animate={{
              y: [-4, 4, -4],
              scale: [0.95, 1.15, 0.95],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </g>

        {/* Summit Achievement Stars */}
        {[
          { cx: 400, cy: 190, delay: 0 },
          { cx: 550, cy: 140, delay: 0.4 },
          { cx: 620, cy: 180, delay: 0.8 },
          { cx: 680, cy: 230, delay: 1.2 },
          { cx: 490, cy: 220, delay: 1.6 },
        ].map((star, idx) => (
          <motion.circle
            key={idx}
            cx={star.cx}
            cy={star.cy}
            r="3.5"
            fill="#f59e0b"
            filter="url(#glowFilter)"
            animate={{
              scale: [0, 1.4, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: star.delay,
            }}
          />
        ))}

        {/* Travelling Career Seeker Pulse (The Glowing Runner moving from Institute to Job) */}
        <g>
          <motion.circle
            r="10"
            fill="url(#beaconGlow)"
            filter="url(#glowFilter)"
            animate={{
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
            }}
          >
            <animateMotion
              path={roadPathD}
              dur="6.5s"
              repeatCount="indefinite"
              rotate="auto"
            />
          </motion.circle>
          <circle r="4.5" fill="#ffffff">
            <animateMotion
              path={roadPathD}
              dur="6.5s"
              repeatCount="indefinite"
              rotate="auto"
            />
          </circle>
        </g>
      </svg>

      {/* 3. Interactive Milestone Hotspots (Positioned via % for responsive overlay) */}
      <div className="absolute inset-0 pointer-events-auto">
        {milestones.map((ms) => {
          const Icon = ms.icon;
          const isHovered = activeStage === ms.id;

          return (
            <div
              key={ms.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{ left: `${ms.badgeX}%`, top: `${ms.badgeY}%` }}
              onMouseEnter={() => setActiveStage(ms.id)}
              onMouseLeave={() => setActiveStage(null)}
              onClick={() => setActiveStage(activeStage === ms.id ? null : ms.id)}
            >
              {/* Subtle Pulsing Target Ring */}
              <div className="relative flex items-center justify-center">
                <span className="absolute w-8 h-8 rounded-full bg-black/10 group-hover:bg-emerald-500/20 group-hover:scale-150 transition-all duration-300 animate-ping opacity-60" />
                <button
                  type="button"
                  aria-label={ms.title}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/95 border-2 border-neutral-900 group-hover:border-emerald-600 text-neutral-900 group-hover:text-emerald-700 flex items-center justify-center shadow-md transition-all group-hover:scale-110 active:scale-95"
                >
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2]" />
                </button>
              </div>

              {/* Informative Popover on Hover / Click */}
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 sm:w-56 p-3 bg-neutral-950 text-white rounded-xl shadow-2xl border border-neutral-800 text-left z-30 pointer-events-none"
                >
                  <p className="text-xs font-bold text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>{ms.title}</span>
                  </p>
                  <p className="text-[11px] text-neutral-300 mt-1 leading-snug">
                    {ms.desc}
                  </p>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-neutral-950" />
                </motion.div>
              )}
            </div>
          );
        })}
      </div>

      {/* 4. Bottom Milestone Strip (Seamless caption under the visual) */}
      <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5 sm:gap-4 text-[10px] sm:text-xs font-semibold text-neutral-600 px-2 text-center">
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <span>1. Curious Learner</span>
        </span>
        <span className="text-neutral-400">➔</span>
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" />
          <span>2. Training Institute</span>
        </span>
        <span className="text-neutral-400">➔</span>
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-purple-600 shrink-0" />
          <span>3. TEPL Certificate</span>
        </span>
        <span className="text-neutral-400">➔</span>
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-bounce shrink-0" />
          <span className="font-bold text-neutral-900">4. Dream Job!</span>
        </span>
      </div>
    </div>
  );
};
