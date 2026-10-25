import React, { useState } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Layers,
  Zap,
  BarChart3,
  Monitor,
  Smartphone,
  Eye,
  FileSpreadsheet,
  Calculator,
  Clock,
  ArrowRight,
  Sparkles,
  Award,
  Check,
  FileText,
  HelpCircle,
  Laptop,
  Flame,
  Activity,
  UserCheck
} from 'lucide-react';

interface ResourcesScreenProps {
  onNavigate?: (path: string) => void;
  onOpenCounselor: (programTitle?: string) => void;
  onOpenVerify: () => void;
}

export const ResourcesScreen: React.FC<ResourcesScreenProps> = ({
  onNavigate,
  onOpenCounselor,
  onOpenVerify,
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [simSelectedOption, setSimSelectedOption] = useState<number | null>(null);
  const [simShowExplanation, setSimShowExplanation] = useState<boolean>(false);

  const featureTabs = [
    { title: 'Question Bank Management', icon: Activity, id: 'question-bank' },
    { title: 'Powerful Test Taking Experience', icon: Zap, id: 'test-experience' },
    { title: 'Cross-Platform Support', icon: Layers, id: 'cross-platform' },
    { title: 'Advanced Analytics & Reporting', icon: BarChart3, id: 'analytics' },
    { title: 'AI-Based Auto Proctoring', icon: Eye, id: 'proctoring' },
  ];

  return (
    <div className="flex flex-col w-full pb-16 animate-in fade-in duration-200">
      {/* =========================================================================
          1. HERO SECTION (Our Style: Pill Eyebrow, Black Badge Headline, Grand Scale)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 mb-8 lg:mb-12">
        <div className="bg-white rounded-3xl p-8 sm:p-14 lg:p-18 border border-neutral-200/90 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] text-center relative overflow-hidden">
          {/* Subtle Ledger Grid Texture */}
          <div
            className="absolute inset-0 opacity-[0.025] pointer-events-none"
            style={{
              backgroundSize: '36px 36px',
              backgroundImage:
                'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
            }}
          />

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-100/90 border border-neutral-200/80 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="font-label-eyebrow text-[11px] sm:text-xs font-bold text-neutral-500 uppercase tracking-widest">
                TALLYCALCULUS & VOCATIONAL ASSESSMENT PLATFORM
              </span>
            </div>

            {/* Grand Headline with Badge & Accent */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-black text-neutral-900 tracking-[-0.03em] leading-[1.12] sm:leading-[1.08] text-balance">
              Comprehensive Solutions for <br />
              <span className="inline-block bg-neutral-950 text-white px-4 sm:px-6 py-0.5 sm:py-1 rounded-2xl sm:rounded-3xl align-middle mx-1 font-black shadow-sm tracking-tight">
                Assessing
              </span>{' '}
              <span className="text-secondary font-black">& Hiring</span> the Right Talent
            </h1>

            {/* Subtext from reference image adapted to LK Educations */}
            <p className="text-sm sm:text-base md:text-lg text-neutral-600 font-normal leading-relaxed max-w-2xl text-balance">
              <strong className="text-neutral-900 font-semibold">TallyCalculus</strong> is an all-encompassing online assessment platform tailored for corporates, training organizations, educational institutions, universities, colleges, and audit firms. Leveraging cutting-edge technology and best practices, TallyCalculus delivers a seamless, robust experience, enabling organizations to identify, evaluate, and nurture top accounting talent, driving career growth and organizational success.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => onOpenCounselor('TallyCalculus Assessment Platform')}
                className="bg-black text-white hover:bg-neutral-800 transition-all px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold shadow-md inline-flex items-center gap-2"
              >
                <span>Get Started with Assessments</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#platform-features"
                className="bg-neutral-100 hover:bg-neutral-200/80 text-neutral-800 transition-all px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold border border-neutral-200"
              >
                Explore Platform Features ↓
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-3 text-xs font-semibold text-neutral-500">
              <span className="inline-flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-secondary stroke-[3]" /> 38+ Years of Tally Heritage
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-secondary stroke-[3]" /> AI-Powered Anti-Cheating Proctoring
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-secondary stroke-[3]" /> Excel Bulk Question Import
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CREATIVE DESIGNER DRAWING: THE TALLYCALCULUS ASSESSMENT TERMINAL
          An interactive vector drawing illustrating the live assessment architecture
          ========================================================================= */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 mb-12 lg:mb-16">
        <div className="bg-gradient-to-b from-[#f8faf7] via-white to-[#fcfdfc] rounded-3xl p-6 sm:p-10 border border-neutral-200/90 shadow-sm relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[11px] font-bold text-secondary uppercase tracking-widest block mb-1">
              SYSTEM ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
              Built for Commercial Accounting Rigor
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 mt-1">
              Dual-screen candidate evaluation with real-time voucher verification, automatic rubrics, and biometric integrity.
            </p>
          </div>

          {/* Bespoke Accounting Assessment Vector Drawing */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-neutral-200/90 shadow-md p-4 sm:p-8 relative">
            <svg
              viewBox="0 0 800 380"
              className="w-full h-auto"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Grid Background */}
              <defs>
                <pattern id="archGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f0f2ef" strokeWidth="0.8" />
                </pattern>
                <linearGradient id="screenGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0f172a" />
                  <stop offset="100%" stopColor="#1e293b" />
                </linearGradient>
                <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#e7b85e" />
                  <stop offset="100%" stopColor="#e5ab48" />
                </linearGradient>
                <linearGradient id="greenGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#006c49" />
                  <stop offset="100%" stopColor="#004d34" />
                </linearGradient>
              </defs>

              <rect width="800" height="380" fill="url(#archGrid)" rx="16" />

              {/* Connecting Pipeline Curves */}
              <path
                d="M 170 190 C 230 190, 250 190, 310 190"
                stroke="#006c49"
                strokeWidth="2.5"
                strokeDasharray="4 4"
              />
              <path
                d="M 490 190 C 550 190, 570 190, 630 190"
                stroke="#006c49"
                strokeWidth="2.5"
                strokeDasharray="4 4"
              />

              {/* Left Node: Question Bank Engine */}
              <g transform="translate(40, 90)">
                <rect width="130" height="200" rx="14" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
                <rect width="130" height="40" rx="14" fill="#f1f5f9" />
                <rect x="0" y="26" width="130" height="14" fill="#f1f5f9" />
                <circle cx="20" cy="20" r="4" fill="#ef4444" />
                <circle cx="32" cy="20" r="4" fill="#f59e0b" />
                <circle cx="44" cy="20" r="4" fill="#10b981" />
                <text x="60" y="24" fill="#475569" fontSize="10" fontWeight="bold">BANK</text>

                {/* Vouchers & MCQs inside */}
                <rect x="15" y="55" width="100" height="20" rx="4" fill="#e2e8f0" />
                <text x="22" y="69" fill="#334155" fontSize="8" fontWeight="600">Excel Bulk Import</text>

                <rect x="15" y="85" width="100" height="20" rx="4" fill="#eef8eb" stroke="#c5e6bd" />
                <text x="22" y="99" fill="#1b5e20" fontSize="8" fontWeight="bold">GST Vouchers</text>

                <rect x="15" y="115" width="100" height="20" rx="4" fill="#e6f4fd" stroke="#bce0fa" />
                <text x="22" y="129" fill="#0a58ca" fontSize="8" fontWeight="bold">TDS Section 194C</text>

                <rect x="15" y="145" width="100" height="20" rx="4" fill="#fef3e8" stroke="#fcd2af" />
                <text x="22" y="159" fill="#b43e0e" fontSize="8" fontWeight="bold">BRS Auto Rules</text>

                <circle cx="65" cy="180" r="8" fill="#006c49" />
                <path d="M 62 180 L 64 182 L 68 178" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
              </g>

              {/* Center Monitor: Dual-Screen Assessment Engine */}
              <g transform="translate(290, 50)">
                {/* Monitor Stand */}
                <path d="M 110 260 L 110 290 L 70 290 L 150 290 L 110 290" stroke="#94a3b8" strokeWidth="6" strokeLinecap="round" />
                {/* Main Screen Bezel */}
                <rect width="220" height="210" rx="14" fill="#0f172a" stroke="#334155" strokeWidth="3" />
                {/* Camera / AI Proctoring Eye */}
                <circle cx="110" cy="12" r="3.5" fill="#38bdf8" />
                <circle cx="110" cy="12" r="1.5" fill="#ffffff" />

                {/* Display Canvas */}
                <rect x="10" y="24" width="200" height="175" rx="8" fill="#1e293b" />

                {/* Live Tally Voucher Table Header */}
                <rect x="18" y="34" width="184" height="20" rx="4" fill="#334155" />
                <text x="26" y="47" fill="#f8fafc" fontSize="8" fontWeight="bold">TALLYCALCULUS TERMINAL v4.2</text>
                <text x="160" y="47" fill="#4ade80" fontSize="8" fontWeight="bold">28:14</text>

                {/* Ledger entries simulation */}
                <rect x="18" y="60" width="184" height="14" fill="#0f172a" opacity="0.6" />
                <text x="24" y="70" fill="#94a3b8" fontSize="7">Dr. Purchase A/c (18% IGST)</text>
                <text x="162" y="70" fill="#f8fafc" fontSize="7">₹ 45,000</text>

                <rect x="18" y="76" width="184" height="14" fill="#1e293b" />
                <text x="24" y="86" fill="#94a3b8" fontSize="7">Dr. Input Tax Credit CGST</text>
                <text x="167" y="86" fill="#f8fafc" fontSize="7">₹ 4,050</text>

                <rect x="18" y="92" width="184" height="14" fill="#0f172a" opacity="0.6" />
                <text x="24" y="102" fill="#94a3b8" fontSize="7">Dr. Input Tax Credit SGST</text>
                <text x="167" y="102" fill="#f8fafc" fontSize="7">₹ 4,050</text>

                <rect x="18" y="108" width="184" height="14" fill="#1e293b" />
                <text x="24" y="118" fill="#94a3b8" fontSize="7">Cr. Sundry Creditors (Alpha Ltd)</text>
                <text x="162" y="118" fill="#f8fafc" fontSize="7">₹ 53,100</text>

                {/* Interactive Radio Options */}
                <rect x="18" y="128" width="184" height="22" rx="4" fill="#006c49" opacity="0.3" stroke="#10b981" strokeWidth="1" />
                <circle cx="28" cy="139" r="4" fill="#10b981" />
                <text x="38" y="142" fill="#ffffff" fontSize="8" fontWeight="bold">Option A: Correct Input Credit Balance</text>

                <rect x="18" y="154" width="184" height="18" rx="4" fill="#334155" opacity="0.4" />
                <circle cx="28" cy="163" r="4" stroke="#94a3b8" fill="none" />
                <text x="38" y="166" fill="#cbd5e1" fontSize="7">Option B: Ineligible ITC under Sec 17(5)</text>

                {/* Progress Bar */}
                <rect x="18" y="180" width="184" height="6" rx="3" fill="#334155" />
                <rect x="18" y="180" width="140" height="6" rx="3" fill="#10b981" />
              </g>

              {/* Right Node: Analytics & TEPL Verified Dossier */}
              <g transform="translate(620, 90)">
                <rect width="140" height="200" rx="14" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
                <rect width="140" height="40" rx="14" fill="#f1f5f9" />
                <rect x="0" y="26" width="140" height="14" fill="#f1f5f9" />
                <text x="16" y="24" fill="#0f172a" fontSize="10" fontWeight="bold">CANDIDATE DOSSIER</text>

                {/* Score Dial */}
                <circle cx="70" cy="85" r="30" stroke="#e2e8f0" strokeWidth="6" fill="none" />
                <circle cx="70" cy="85" r="30" stroke="#006c49" strokeWidth="6" strokeDasharray="160" strokeDashoffset="25" fill="none" strokeLinecap="round" />
                <text x="56" y="89" fill="#0f172a" fontSize="14" fontWeight="bold">94%</text>

                {/* Domain Badges */}
                <rect x="15" y="125" width="110" height="16" rx="4" fill="#eef8eb" />
                <text x="22" y="136" fill="#1b5e20" fontSize="7" fontWeight="bold">GST: 100% Mastery</text>

                <rect x="15" y="145" width="110" height="16" rx="4" fill="#e6f4fd" />
                <text x="22" y="156" fill="#0a58ca" fontSize="7" fontWeight="bold">Tally Vouchers: 92%</text>

                {/* QR Code Verification Stamp */}
                <g transform="translate(52, 168)">
                  <rect width="36" height="24" rx="4" fill="#0f172a" />
                  <text x="6" y="15" fill="#f8fafc" fontSize="8" fontWeight="bold">VERIFIED</text>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. 3 FOUNDATIONAL PILLARS (38+ Years of Trust, Scalability, Adaptability)
          Matching reference image top 3 cards
          ========================================================================= */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: 38+ Years of Trust */}
          <div className="bg-white rounded-3xl p-8 border border-neutral-200/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all text-left flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight mb-3">
                38+ Years of Trust
              </h3>
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                With a legacy spanning over three decades, Tally is a brand synonymous with trust and excellence. Our foundation is built on unwavering ethics, standardized double-entry rubrics, and industry best practices, ensuring reliability in every partnership.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center gap-2 text-xs font-semibold text-amber-700">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span>Standardized Enterprise Heritage</span>
            </div>
          </div>

          {/* Card 2: Scalability and Security */}
          <div className="bg-white rounded-3xl p-8 border border-neutral-200/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all text-left flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight mb-3">
                Scalability and Security
              </h3>
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                Leveraging the latest in cloud technology and security protocols, we ensure a robust, scalable system that prioritizes data privacy. Our infrastructure is designed to handle high concurrency testing volumes efficiently, safeguarding assessment data with best-in-class measures.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center gap-2 text-xs font-semibold text-amber-700">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span>Bank-Grade Encryption & Audit Trails</span>
            </div>
          </div>

          {/* Card 3: Adaptability and Versatility */}
          <div className="bg-white rounded-3xl p-8 border border-neutral-200/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all text-left flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-6">
                <Layers className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight mb-3">
                Adaptability and Versatility
              </h3>
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                Our solutions are designed to seamlessly adapt to diverse environments, infrastructure setups, and varying internet speeds. This versatility ensures smooth operations, whether in urban corporate headquarters or remote college computer centers.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center gap-2 text-xs font-semibold text-amber-700">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span>Low-Bandwidth Optimized Engine</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. KEY FEATURES OF OUR PLATFORM (Pill Navigation & Detailed Grid)
          Matching reference image middle section
          ========================================================================= */}
      <section id="platform-features" className="max-w-7xl mx-auto w-full px-4 sm:px-6 mb-16">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-[11px] font-bold text-secondary uppercase tracking-widest block mb-1">
            CORE CAPABILITIES
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-neutral-900 tracking-tight">
            Key Features Of Our Platform
          </h2>
          <p className="text-neutral-500 text-xs sm:text-sm mt-2">
            Engineered to streamline question creation, candidate test-taking, and automated assessment reporting.
          </p>
        </div>

        {/* Feature Navigation Tabs (Matching Reference Image) */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-10 max-w-4xl mx-auto">
          {featureTabs.map((tab, idx) => {
            const Icon = tab.icon;
            const isActive = activeTab === idx;

            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-black text-white shadow-md'
                    : 'bg-white text-neutral-700 hover:text-black border border-neutral-200/90 hover:border-neutral-400 shadow-xs'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-secondary' : 'text-amber-600'}`} />
                <span>{tab.title}</span>
              </button>
            );
          })}
        </div>

        {/* 5 Feature Cards Grid (Matching reference image cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left">
          {/* Card 1: Question Bank Management */}
          <div className="bg-white rounded-3xl p-7 border border-neutral-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-700 flex items-center justify-center mb-4">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight mb-4">
                Question Bank Management
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <span><strong>Diverse Question Types:</strong> Multiple Choice, True/False, Descriptive, Image-Based, and Case Study vouchers.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <span><strong>Bulk Import Capability via Excel:</strong> Upload hundreds of questions in seconds with automated syntax validation.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <span><strong>Effortless Question Paper Creation:</strong> Dynamic rules for marks, difficulty tier, and syllabus topics.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <span><strong>Automated Evaluation:</strong> Instant, zero-bias computer grading for all objective and voucher balance queries.</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 mt-6 border-t border-neutral-100 text-[11px] font-semibold text-neutral-400">
              Excel / CSV / Question Paper Generator
            </div>
          </div>

          {/* Card 2: Powerful Test Taking Experience */}
          <div className="bg-white rounded-3xl p-7 border border-neutral-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight mb-4">
                Powerful Test Taking Experience
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <span><strong>Countdown Timer:</strong> Accurate real-time timer tracking remaining test duration with threshold warnings.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <span><strong>Section Palette:</strong> Seamless navigation between Core Tally, GST, TDS, and General Accounting sections.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <span><strong>Question Palette:</strong> Color-coded progress (Answered, Unanswered, Marked for Review).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <span><strong>Quick Access Toolbar:</strong> Next/Prev controls, Clear Response, and an Onscreen Financial Calculator.</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 mt-6 border-t border-neutral-100 text-[11px] font-semibold text-neutral-400">
              Clean, Distraction-Free Terminal UI
            </div>
          </div>

          {/* Card 3: Cross-Platform Support */}
          <div className="bg-white rounded-3xl p-7 border border-neutral-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-700 flex items-center justify-center mb-4">
                <Monitor className="w-5 h-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight mb-4">
                Cross-Platform Support
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                Conduct assessments smoothly on desktop computers, laptops, or mobile devices—flexibility, accessibility, and convenience ensured across all environments.
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <span>Zero software installation required; runs natively on modern web browsers.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <span>Adaptive screen scaling for dual-monitor lab setups and single-screen laptops.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <span>Offline cache fallback prevents exam disconnects during network drops.</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 mt-6 border-t border-neutral-100 text-[11px] font-semibold text-neutral-400">
              Web / Windows / macOS / Android Support
            </div>
          </div>

          {/* Card 4: Advanced Analytics & Reporting */}
          <div className="bg-white rounded-3xl p-7 border border-neutral-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-700 flex items-center justify-center mb-4">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight mb-4">
                Advanced Analytics & Reporting
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <span><strong>Detailed Performance Insights:</strong> From question-level latency to overall accounting domain mastery.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <span><strong>Data-Driven Decision Making:</strong> Objective candidate rankings for college hiring drives and campus shortlists.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <span><strong>Exportable Dossiers:</strong> Download comprehensive PDF and Excel report cards with candidate breakdown.</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 mt-6 border-t border-neutral-100 text-[11px] font-semibold text-neutral-400">
              One-Click PDF Dossiers & CSV Analytics
            </div>
          </div>

          {/* Card 5: AI-Based Auto Proctoring */}
          <div className="bg-white rounded-3xl p-7 border border-neutral-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-700 flex items-center justify-center mb-4">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight mb-4">
                AI-Based Auto Proctoring
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <span><strong>Detailed Audit Logs:</strong> Continuous session monitoring capturing window blur and tab switches.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <span><strong>AI-Driven Monitoring:</strong> Automated face tracking and multi-person detection for high-volume exam halls.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <span><strong>Remote Proctoring:</strong> Periodic image capture, audio anomaly detection, and tamper verification.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <span><strong>Reduced Overhead:</strong> Minimizes physical invigilation requirements without compromising integrity.</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 mt-6 border-t border-neutral-100 text-[11px] font-semibold text-neutral-400">
              Continuous Webcam AI Surveillance
            </div>
          </div>

          {/* Card 6: Corporate & College Onboarding */}
          <div className="bg-neutral-950 text-white rounded-3xl p-7 flex flex-col justify-between shadow-md">
            <div>
              <div className="w-10 h-10 rounded-xl bg-secondary/20 text-secondary flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-2">
                Deploy for Your Institution
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-4">
                Whether you need to assess 50 accounting interns or 1,200 college commerce graduates, TallyCalculus delivers verified, tamper-proof candidate scoring.
              </p>
              <div className="space-y-2 text-xs text-neutral-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-secondary" /> Custom Assessment Creation
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-secondary" /> TEPL Verified QR Certificates
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-secondary" /> Dedicated Training & Support
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onOpenCounselor('College & Corporate Assessment Onboarding')}
              className="mt-6 w-full bg-secondary hover:bg-secondary/90 text-white font-bold text-xs sm:text-sm py-3 rounded-full transition-all text-center inline-flex items-center justify-center gap-2"
            >
              <span>Schedule Institutional Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. INTERACTIVE CANDIDATE EXAM SIMULATOR
          Creative showcase allowing visitors to experience a live question
          ========================================================================= */}
      <section className="max-w-5xl mx-auto w-full px-4 sm:px-6 mb-16">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/90 shadow-sm text-left">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-6 border-b border-neutral-100 gap-4">
            <div>
              <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-secondary/10 text-secondary uppercase tracking-wider inline-block mb-1">
                INTERACTIVE ASSESSMENT DEMO
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight">
                Try a Live TallyCalculus Assessment Question
              </h3>
            </div>
            <div className="flex items-center gap-3 text-xs font-semibold bg-neutral-100 px-3.5 py-1.5 rounded-full text-neutral-700">
              <Clock className="w-3.5 h-3.5 text-amber-600" />
              <span>Time Left: 14:32</span>
            </div>
          </div>

          {/* Question Box */}
          <div className="space-y-4">
            <div className="p-4 bg-neutral-50 rounded-2xl border border-neutral-200/80">
              <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest block mb-1">
                QUESTION 4 OF 25 • GST INPUT TAX CREDIT (ITC) RECONCILIATION
              </span>
              <p className="text-sm sm:text-base font-semibold text-neutral-900 leading-relaxed">
                A supplier issues a commercial tax invoice of ₹ 1,00,000 + 18% IGST (₹ 18,000) dated 12th August. However, upon downloading the GSTR-2B JSON statement for August on 14th September, the invoice does not reflect in your portal ledger. Under Rule 36(4), what is the correct accounting treatment for filing Form GSTR-3B?
              </p>
            </div>

            {/* Multiple Choice Options */}
            <div className="space-y-2.5">
              {[
                {
                  id: 0,
                  text: 'Claim full ₹ 18,000 ITC in GSTR-3B since you possess the physical original tax invoice.',
                  isCorrect: false,
                  reason: 'Incorrect. Possession of the physical invoice is insufficient; credit cannot be availed unless reflected in GSTR-2B under Section 16(2)(aa).'
                },
                {
                  id: 1,
                  text: 'Defer the ₹ 18,000 ITC to "Eligible ITC - Ineligible / Pending in Books" until the supplier files GSTR-1.',
                  isCorrect: true,
                  reason: 'Correct! Under Rule 36(4) and Section 16(2)(aa), ITC can only be availed when the supplier furnishes details in GSTR-1 and it appears in GSTR-2B.'
                },
                {
                  id: 2,
                  text: 'Deduct 50% provisional credit of ₹ 9,000 and carry forward the rest.',
                  isCorrect: false,
                  reason: 'Incorrect. Provisional credit allowances (formerly 5% and 10%) have been abolished; 100% GSTR-2B matching is now strictly required.'
                },
                {
                  id: 3,
                  text: 'Cancel the invoice and write off the IGST amount as an operating loss.',
                  isCorrect: false,
                  reason: 'Incorrect. The invoice is valid; follow up with the vendor to ensure timely upload in their subsequent GSTR-1 return.'
                }
              ].map((opt) => {
                const isSelected = simSelectedOption === opt.id;
                const showFeedback = simShowExplanation;

                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => {
                      setSimSelectedOption(opt.id);
                      setSimShowExplanation(true);
                    }}
                    className={`w-full text-left p-4 rounded-2xl border text-xs sm:text-sm font-medium transition-all flex items-start gap-3 ${
                      isSelected
                        ? opt.isCorrect
                          ? 'border-emerald-500 bg-emerald-50/60 text-emerald-950 ring-1 ring-emerald-500'
                          : 'border-rose-400 bg-rose-50/60 text-rose-950 ring-1 ring-rose-400'
                        : 'border-neutral-200/90 bg-white hover:bg-neutral-50 text-neutral-800'
                    }`}
                  >
                    <span className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 text-[11px] font-bold ${
                      isSelected
                        ? opt.isCorrect
                          ? 'border-emerald-600 bg-emerald-600 text-white'
                          : 'border-rose-600 bg-rose-600 text-white'
                        : 'border-neutral-300 text-neutral-500'
                    }`}>
                      {String.fromCharCode(65 + opt.id)}
                    </span>
                    <div className="flex-1">
                      <span>{opt.text}</span>
                      {showFeedback && isSelected && (
                        <p className={`mt-2 text-xs font-semibold ${opt.isCorrect ? 'text-emerald-700' : 'text-rose-700'}`}>
                          {opt.reason}
                        </p>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. READY TO START YOUR JOURNEY? (Golden Banner CTA matching website theme)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 mb-8">
        <div className="bg-gradient-to-r from-[#e7b85e] via-[#e5ab48] to-[#e8be66] text-neutral-900 rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden shadow-md">
          {/* Subtle concentric circular overlay */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-black/5 blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-4">
            <h2 className="text-2xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              Ready to Modernize Candidate Assessments?
            </h2>

            <p className="text-neutral-800 text-xs sm:text-sm leading-relaxed max-w-lg">
              Deploy TallyCalculus for your corporate recruitment assessments, college semester evaluation, or commercial accounting certifications.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => onOpenCounselor('TallyCalculus Platform Demo')}
                className="bg-black text-white hover:bg-neutral-800 transition-all px-7 py-3 rounded-full text-xs sm:text-sm font-semibold shadow-md inline-flex items-center gap-2"
              >
                <span>Book a Live Platform Demonstration</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {onNavigate && (
                <button
                  type="button"
                  onClick={() => onNavigate('programs')}
                  className="bg-white text-neutral-900 hover:bg-neutral-100 transition-all px-6 py-3 rounded-full text-xs sm:text-sm font-semibold border border-black/10 shadow-sm"
                >
                  <span>Explore Courses</span>
                </button>
              )}
            </div>

            {/* Trust Markers */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-4 text-xs font-semibold text-neutral-800/80">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                38+ Years of Tally Heritage
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                AI-Powered Proctored Engine
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                Authorized TEPL Partner
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
