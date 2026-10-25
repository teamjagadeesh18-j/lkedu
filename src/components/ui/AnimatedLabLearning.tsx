import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Monitor,
  Award,
  FileSpreadsheet,
  Users,
  Lightbulb,
  CheckCircle2,
} from 'lucide-react';

interface AnimatedLabLearningProps {
  className?: string;
}

export const AnimatedLabLearning: React.FC<AnimatedLabLearningProps> = ({ className = '' }) => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  // SVG Main Closed Flow Circuit (1200 x 896 canvas)
  // Loops through: Lightbulb -> Left Calculator -> Desk Keypad -> Keyboard Hands -> Voucher Screen -> Ledger Book -> GST Checkmarks -> TEPL Ribbon -> Senior Mentor -> Loop Back
  const circuitPathD =
    'M 235 295 C 190 380, 135 450, 160 520 C 175 600, 240 645, 330 655 C 380 660, 420 665, 480 650 C 530 635, 560 630, 580 630 C 530 560, 420 540, 360 480 C 330 420, 380 270, 485 195 C 540 195, 590 205, 645 235 C 685 260, 650 380, 645 465 C 675 480, 750 450, 820 475 C 875 430, 840 330, 760 260 C 680 200, 560 170, 485 195 C 410 195, 360 210, 335 240 C 295 280, 270 270, 235 295';

  // Dedicated Desk & Workstation Cyan Connection Line (matches the user's wireframe in screenshot)
  const deskCircuitD = 'M 160 520 L 160 645 L 430 665 L 550 635 L 645 470';

  // The 5 Milestone Circular Badges exactly matching user's uploaded screenshot locations
  const milestoneBadges = [
    {
      id: 1,
      title: 'Concept Clarity & Logic',
      desc: '80% practical drills turning double-entry accounting rules into instant muscle memory',
      icon: Lightbulb,
      pctX: 21,
      pctY: 43,
      cx: 250,
      cy: 385,
      color: '#f59e0b',
      glowClass: 'group-hover:border-amber-500 group-hover:text-amber-600',
    },
    {
      id: 2,
      title: 'Real-Life Ledger Drills',
      desc: 'Double-entry ledger case studies derived from actual Tirunelveli merchants and firms',
      icon: FileSpreadsheet,
      pctX: 39,
      pctY: 31,
      cx: 470,
      cy: 275,
      color: '#10b981',
      glowClass: 'group-hover:border-emerald-600 group-hover:text-emerald-700',
    },
    {
      id: 3,
      title: 'TEPL Authorized Credential',
      desc: 'Direct certification recognized by Tally Education Bangalore with instant online verification',
      icon: Award,
      pctX: 51,
      pctY: 35,
      cx: 610,
      cy: 310,
      color: '#8b5cf6',
      glowClass: 'group-hover:border-purple-600 group-hover:text-purple-700',
    },
    {
      id: 4,
      title: 'Senior Industry Mentorship',
      desc: 'Dedicated 1-on-1 practical coaching from certified accountants with 10+ years experience',
      icon: Users,
      pctX: 68,
      pctY: 53,
      cx: 820,
      cy: 475,
      color: '#0284c7',
      glowClass: 'group-hover:border-sky-600 group-hover:text-sky-700',
    },
    {
      id: 5,
      title: 'Dual-Screen GST Simulation',
      desc: 'Live high-speed voucher entry, real invoice matching & mock GSTR-2B filing drills',
      icon: Monitor,
      pctX: 36,
      pctY: 74,
      cx: 430,
      cy: 665,
      color: '#059669',
      glowClass: 'group-hover:border-emerald-600 group-hover:text-emerald-700',
    },
  ];

  // 5 exact checkmarks on the GST calculation screen (y: 470, x: 585 -> 710)
  const gstCheckmarks = [
    { cx: 585, cy: 470, delay: 0 },
    { cx: 615, cy: 470, delay: 0.35 },
    { cx: 645, cy: 470, delay: 0.7 },
    { cx: 675, cy: 470, delay: 1.05 },
    { cx: 710, cy: 470, delay: 1.4 },
  ];

  return (
    <div className={`relative w-full max-w-2xl mx-auto select-none ${className}`}>
      {/* 1. Base Illustration (Seamless pure white background with mix-blend-multiply) */}
      <img
        src="/practical-lab-learning.jpg"
        alt="LK Practical Accounting & Dual-Screen GST Lab Learning"
        className="w-full h-auto block object-contain mix-blend-multiply pointer-events-none"
      />

      {/* 2. Interactive Looping Animated SVG Overlay */}
      <svg
        viewBox="0 0 1200 896"
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Main Flow Gradient (Emerald -> Cyan -> Purple -> Amber) */}
          <linearGradient id="labFlowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#06b6d4" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#8b5cf6" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.95" />
          </linearGradient>

          {/* Cyan Wireframe Gradient for Desk Line */}
          <linearGradient id="cyanDeskGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#10b981" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.9" />
          </linearGradient>

          {/* Radial Warm Glow for Lightbulb */}
          <radialGradient id="bulbWarmAura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
          </radialGradient>

          {/* Radial Emerald Checkmark Pulse */}
          <radialGradient id="checkPulseGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#34d399" stopOpacity="1" />
            <stop offset="60%" stopColor="#10b981" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#059669" stopOpacity="0" />
          </radialGradient>

          {/* Travelling Orb Beacon Glow */}
          <radialGradient id="beaconRunnerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="1" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </radialGradient>

          {/* Golden Runner Glow */}
          <radialGradient id="goldRunnerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="1" />
            <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
          </radialGradient>

          {/* Radial Seal Aura */}
          <radialGradient id="teplSealAura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </radialGradient>

          {/* Motion Blur Filter for Glow Elements */}
          <filter id="vibrantGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* =========================================================================
            1. DYNAMIC FLOWING ENERGY CIRCUITS (Continuous Looping Motion)
            ========================================================================= */}
        
        {/* Desk Cyan Wireframe Line (matches user screenshot) */}
        <motion.path
          d={deskCircuitD}
          fill="none"
          stroke="url(#cyanDeskGradient)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeDasharray="8 8"
          filter="url(#vibrantGlow)"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -128 }}
          transition={{
            duration: 4,
            ease: 'linear',
            repeat: Infinity,
          }}
          opacity="0.9"
        />

        {/* Main Comprehensive Learning Energy Loop */}
        <motion.path
          d={circuitPathD}
          fill="none"
          stroke="url(#labFlowGradient)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="16 20"
          filter="url(#vibrantGlow)"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -288 }}
          transition={{
            duration: 6.5,
            ease: 'linear',
            repeat: Infinity,
          }}
          opacity="0.85"
        />

        {/* =========================================================================
            2. TRAVELLING ENERGY BEACONS / PARTICLES (Continuous Endless Runners)
            ========================================================================= */}
        
        {/* Runner 1: Emerald Accounting Data Packet traveling along main circuit */}
        <g>
          <motion.circle
            r="12"
            fill="url(#beaconRunnerGlow)"
            filter="url(#vibrantGlow)"
            animate={{
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
            }}
          >
            <animateMotion
              path={circuitPathD}
              dur="7s"
              repeatCount="indefinite"
              rotate="auto"
            />
          </motion.circle>
          <circle r="5" fill="#ffffff">
            <animateMotion
              path={circuitPathD}
              dur="7s"
              repeatCount="indefinite"
              rotate="auto"
            />
          </circle>
        </g>

        {/* Runner 2: Golden Knowledge Packet (Offset by 3.5s half-loop) */}
        <g>
          <motion.circle
            r="11"
            fill="url(#goldRunnerGlow)"
            filter="url(#vibrantGlow)"
            animate={{
              scale: [1.3, 0.9, 1.3],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
            }}
          >
            <animateMotion
              path={circuitPathD}
              dur="7s"
              begin="3.5s"
              repeatCount="indefinite"
              rotate="auto"
            />
          </motion.circle>
          <circle r="4.5" fill="#ffffff">
            <animateMotion
              path={circuitPathD}
              dur="7s"
              begin="3.5s"
              repeatCount="indefinite"
              rotate="auto"
            />
          </circle>
        </g>

        {/* =========================================================================
            3. ACTIVE SCREEN ANIMATIONS (Voucher Beam & GST Sequential Checkmarks)
            ========================================================================= */}
        
        {/* Left Screen: Animated Horizontal Scanning Beam across Voucher rows */}
        <g transform="translate(340, 480)">
          {/* Active border pulse */}
          <motion.rect
            x="-105"
            y="-75"
            width="210"
            height="145"
            rx="8"
            fill="none"
            stroke="#10b981"
            strokeWidth="2.5"
            opacity="0.4"
            animate={{
              opacity: [0.2, 0.65, 0.2],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          {/* Moving scan line */}
          <motion.line
            x1="-90"
            y1="-60"
            x2="90"
            y2="-60"
            stroke="#10b981"
            strokeWidth="2.5"
            filter="url(#vibrantGlow)"
            animate={{
              y: [0, 115, 0],
              opacity: [0.3, 0.9, 0.3],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </g>

        {/* Right Screen: GST Checkmarks Wave (Continuous 1 -> 2 -> 3 -> 4 -> 5 sequence) */}
        {gstCheckmarks.map((chk, idx) => (
          <g key={idx} transform={`translate(${chk.cx}, ${chk.cy})`}>
            {/* Outer expanding ripple */}
            <motion.circle
              r="12"
              fill="none"
              stroke="#10b981"
              strokeWidth="2.5"
              animate={{
                scale: [0.8, 1.8, 0.8],
                opacity: [0.2, 0.95, 0.2],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: chk.delay,
                ease: 'easeInOut',
              }}
            />
            {/* Inner flashing checkmark star */}
            <motion.circle
              r="5.5"
              fill="#10b981"
              filter="url(#vibrantGlow)"
              animate={{
                scale: [1, 1.45, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: chk.delay,
                ease: 'easeInOut',
              }}
            />
          </g>
        ))}

        {/* Right Screen Border Aura */}
        <g transform="translate(555, 465)">
          <motion.rect
            x="-110"
            y="-75"
            width="220"
            height="145"
            rx="8"
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="2.5"
            opacity="0.35"
            animate={{
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              delay: 0.7,
              ease: 'easeInOut',
            }}
          />
        </g>

        {/* =========================================================================
            4. KEYBOARD TYPING PULSE & HAND ENERGY (Active typing ripple at (550, 635))
            ========================================================================= */}
        <g transform="translate(550, 635)">
          {[0, 0.4, 0.8].map((delay, i) => (
            <motion.circle
              key={i}
              r="16"
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
              animate={{
                scale: [0.5, 2.2],
                opacity: [0.8, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                delay: delay,
                ease: 'easeOut',
              }}
            />
          ))}
          <motion.circle
            r="7"
            fill="#10b981"
            animate={{
              scale: [0.9, 1.3, 0.9],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </g>

        {/* Student Back/Chair Focus Ring at (715, 645) */}
        <g transform="translate(715, 645)">
          <motion.circle
            r="16"
            fill="none"
            stroke="#0284c7"
            strokeWidth="2"
            strokeDasharray="4 4"
            animate={{
              scale: [0.9, 1.3, 0.9],
              opacity: [0.2, 0.7, 0.2],
              rotate: [0, 360],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </g>

        {/* =========================================================================
            5. LIGHTBULB WARMTH & RADIANCE (x: 235, y: 295)
            ========================================================================= */}
        <g transform="translate(235, 295)">
          <motion.circle
            r="44"
            fill="url(#bulbWarmAura)"
            animate={{
              r: [36, 52, 36],
              opacity: [0.5, 0.95, 0.5],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          {/* 8 Radiating Light Rays */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <motion.line
              key={i}
              x1="0"
              y1="-34"
              x2="0"
              y2="-48"
              stroke="#f59e0b"
              strokeWidth="2.5"
              strokeLinecap="round"
              transform={`rotate(${angle})`}
              animate={{
                opacity: [0.3, 0.95, 0.3],
                scaleY: [0.85, 1.25, 0.85],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                delay: i * 0.12,
                ease: 'easeInOut',
              }}
            />
          ))}
        </g>

        {/* =========================================================================
            6. FLOATING CALCULATORS & LEDGER SHIMMER
            ========================================================================= */}
        {/* Left Calculator Bobbing & Floating Symbols at (160, 510) */}
        <g transform="translate(160, 510)">
          <motion.circle
            r="22"
            fill="#10b981"
            opacity="0.2"
            animate={{
              y: [-6, 6, -6],
              scale: [0.95, 1.2, 0.95],
              opacity: [0.15, 0.4, 0.15],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </g>

        {/* Top Calculator at (335, 240) */}
        <g transform="translate(335, 240)">
          <motion.circle
            r="18"
            fill="#10b981"
            opacity="0.2"
            animate={{
              y: [5, -5, 5],
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.4, 0.15],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.4,
            }}
          />
        </g>

        {/* Open Ledger Book Shimmer at (485, 195) */}
        <g transform="translate(485, 195)">
          <motion.line
            x1="-45"
            y1="-20"
            x2="45"
            y2="-20"
            stroke="#10b981"
            strokeWidth="2"
            strokeDasharray="6 6"
            animate={{
              y: [-15, 25, -15],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </g>

        {/* =========================================================================
            7. TEPL CERTIFICATION RIBBON SHIMMER & SPINNING AURA (x: 645, y: 235)
            ========================================================================= */}
        <g transform="translate(645, 235)">
          <motion.circle
            r="46"
            fill="url(#teplSealAura)"
            animate={{
              scale: [0.95, 1.2, 0.95],
              opacity: [0.45, 0.9, 0.45],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          {/* Rotating Dashed Starburst Aura */}
          <motion.circle
            r="35"
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="2"
            strokeDasharray="5 7"
            animate={{
              rotate: [0, 360],
              opacity: [0.35, 0.8, 0.35],
            }}
            transition={{
              rotate: { duration: 16, repeat: Infinity, ease: 'linear' },
              opacity: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
            }}
          />
        </g>

        {/* =========================================================================
            8. SENIOR MENTOR GUIDANCE ORBITAL BEACON (x: 820, y: 475)
            ========================================================================= */}
        <g transform="translate(820, 475)">
          <motion.circle
            r="20"
            fill="none"
            stroke="#0284c7"
            strokeWidth="2"
            strokeDasharray="4 4"
            animate={{
              scale: [0.8, 1.35, 0.8],
              opacity: [0.25, 0.8, 0.25],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          <motion.circle
            r="6"
            fill="#0284c7"
            animate={{
              scale: [1, 1.35, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </g>

        {/* =========================================================================
            9. WHIMSICAL CELEBRATION SPARKLES & ACCOUNTING SYMBOLS
            ========================================================================= */}
        {[
          { cx: 728, cy: 198, color: '#f59e0b', delay: 0 },
          { cx: 708, cy: 338, color: '#8b5cf6', delay: 0.4 },
          { cx: 280, cy: 320, color: '#8b5cf6', delay: 0.8 },
          { cx: 554, cy: 295, color: '#10b981', delay: 1.2 },
          { cx: 435, cy: 310, color: '#f59e0b', delay: 1.6 },
          { cx: 195, cy: 615, color: '#06b6d4', delay: 2.0 },
          { cx: 645, cy: 175, color: '#f59e0b', delay: 2.4 },
        ].map((star, idx) => (
          <motion.circle
            key={idx}
            cx={star.cx}
            cy={star.cy}
            r="3.5"
            fill={star.color}
            filter="url(#vibrantGlow)"
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: star.delay,
            }}
          />
        ))}
      </svg>

      {/* 3. Interactive Milestone Hotspot Badges (Positioned exactly as in user's screenshot) */}
      <div className="absolute inset-0 pointer-events-auto">
        {milestoneBadges.map((feat) => {
          const Icon = feat.icon;
          const isSelected = activeFeature === feat.id;

          return (
            <div
              key={feat.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{ left: `${feat.pctX}%`, top: `${feat.pctY}%` }}
              onMouseEnter={() => setActiveFeature(feat.id)}
              onMouseLeave={() => setActiveFeature(null)}
              onClick={() => setActiveFeature(isSelected ? null : feat.id)}
            >
              {/* Outer Pulsing Aura Ring */}
              <div className="relative flex items-center justify-center">
                <span
                  className="absolute w-9 h-9 sm:w-10 sm:h-10 rounded-full animate-ping opacity-75"
                  style={{ backgroundColor: `${feat.color}33` }}
                />
                <button
                  type="button"
                  aria-label={feat.title}
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/95 border-2 border-neutral-900 ${feat.glowClass} text-neutral-900 flex items-center justify-center shadow-lg transition-all group-hover:scale-115 active:scale-95`}
                >
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2]" />
                </button>
              </div>

              {/* Informative Popover on Hover / Click */}
              <AnimatePresence>
                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-52 sm:w-60 p-3 bg-neutral-950 text-white rounded-xl shadow-2xl border border-neutral-800 text-left z-30 pointer-events-none"
                  >
                    <p className="text-xs font-bold text-white flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{feat.title}</span>
                    </p>
                    <p className="text-[11px] text-neutral-300 mt-1 leading-snug">
                      {feat.desc}
                    </p>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-neutral-950" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* 4. Bottom Milestone Strip (Seamless progress caption matching the flow) */}
      <div className="mt-3 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-semibold text-neutral-600">
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          <span>1. Concept Clarity</span>
        </span>
        <span className="text-neutral-300">➔</span>
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>2. Ledger Drills</span>
        </span>
        <span className="text-neutral-300">➔</span>
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-sky-500" />
          <span>3. 1-on-1 Mentorship</span>
        </span>
        <span className="text-neutral-300">➔</span>
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-purple-600 animate-bounce" />
          <span className="font-bold text-neutral-900">4. TEPL Certified</span>
        </span>
      </div>
    </div>
  );
};
