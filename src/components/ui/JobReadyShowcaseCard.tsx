import React, { useState } from 'react';
import {
  Award,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  FileSpreadsheet,
  FileText,
  Mail,
  Presentation,
  Check,
  ChevronRight,
  Briefcase,
  GraduationCap
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { openEnrollWhatsApp } from '../../lib/contact';
import { Reveal } from '../Reveal';

interface JobReadyShowcaseCardProps {
  onOpenCounselor?: (program?: string) => void;
  onNavigate?: (path: string) => void;
}

export const JobReadyShowcaseCard: React.FC<JobReadyShowcaseCardProps> = ({
  onOpenCounselor,
  onNavigate,
}) => {
  const [activeTab, setActiveTab] = useState<'curriculum' | 'outcomes'>('curriculum');

  const handleEnroll = () => {
    openEnrollWhatsApp('Job-Ready in 3 Months (TallyPrime, TallyEssential & MS-Office)');
  };

  return (
    <section className="max-w-7xl mx-auto w-full px-3 sm:px-6 mb-8 lg:mb-12">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0c1424] via-[#101b33] to-[#0a101f] text-white p-5 sm:p-8 lg:p-12 shadow-[0_20px_50px_rgba(12,20,36,0.35)] border border-[#1e293b]">
        {/* Ambient Decorative Lighting */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header Strip: Institute Credentials & Tagline */}
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div className="flex flex-wrap items-center gap-3">
            {/* TEPL Seal */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-300 font-bold uppercase tracking-wider">TEPL</span>
              <span className="text-white/60">•</span>
              <span className="text-white/90">Institute of Tally Learning</span>
            </div>

            <span className="hidden sm:inline-block text-xs font-mono text-white/50 uppercase tracking-widest">
              POWER OF SIMPLICITY
            </span>
          </div>

          {/* Subtitle from the official flyer */}
          <div className="text-left lg:text-right">
            <span className="text-xs sm:text-sm font-serif italic text-amber-300/90 tracking-wide block">
              "Your Better Future In Computerised Accounting"
            </span>
          </div>
        </div>

        {/* Main Showcase Hero Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center pt-8">
          {/* Left Column: Bold Offer & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col gap-5 text-left">
            {/* Job Ready in 3 Months Banner Ribbon */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-gradient-to-r from-red-600 via-rose-600 to-red-600 text-white shadow-[0_4px_20px_rgba(225,29,72,0.4)] border border-rose-400/30 w-fit">
              <Clock className="w-4 h-4 text-white animate-spin-slow" />
              <span className="text-xs sm:text-sm font-black uppercase tracking-wider">
                JOB READY IN 3 MONTHS
              </span>
              <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-bold">
                180 Hrs Lab
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12]">
              Complete TallyPrime, TallyEssential &{' '}
              <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent">
                MS-Office Suite
              </span>
            </h2>

            <p className="text-xs sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              Our flagship vocational career diploma engineered to take fresh college graduates and non-commerce career switchers into confirmed corporate accounting roles in exactly 90 days.
            </p>

            {/* The "GET" 3-Pillar Milestone Ladder (Inspired by the poster art) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {/* Step 1: GET CERTIFIED */}
              <div className="rounded-2xl p-4 bg-white/5 hover:bg-white/10 transition-colors border border-white/10 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400 font-black text-xs">
                    01
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                    STEP 1
                  </span>
                </div>
                <h4 className="text-base font-extrabold text-white flex items-center gap-1.5">
                  <span>GET CERTIFIED</span>
                  <Award className="w-4 h-4 text-amber-400 shrink-0" />
                </h4>
                <p className="text-xs text-slate-300">
                  Official TEPL verifiable certificate with tamper-proof QR code.
                </p>
              </div>

              {/* Step 2: GET RECOGNISED */}
              <div className="rounded-2xl p-4 bg-white/5 hover:bg-white/10 transition-colors border border-white/10 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 font-black text-xs">
                    02
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                    STEP 2
                  </span>
                </div>
                <h4 className="text-base font-extrabold text-white flex items-center gap-1.5">
                  <span>GET RECOGNISED</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                </h4>
                <p className="text-xs text-slate-300">
                  Valued by 300+ corporate firms, audit agencies & MSMEs.
                </p>
              </div>

              {/* Step 3: GET EMPLOYED */}
              <div className="rounded-2xl p-4 bg-white/5 hover:bg-white/10 transition-colors border border-white/10 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-rose-500/20 border border-rose-400/30 flex items-center justify-center text-rose-400 font-black text-xs">
                    03
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                    STEP 3
                  </span>
                </div>
                <h4 className="text-base font-extrabold text-white flex items-center gap-1.5">
                  <span>GET EMPLOYED</span>
                  <Briefcase className="w-4 h-4 text-rose-400 shrink-0" />
                </h4>
                <p className="text-xs text-slate-300">
                  Direct interview drives, resume prep & mock CA interviews.
                </p>
              </div>
            </div>

            {/* CTA Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-3">
              <button
                type="button"
                onClick={handleEnroll}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm shadow-[0_4px_24px_rgba(37,211,102,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Enroll Now on WhatsApp</span>
              </button>

              {onOpenCounselor && (
                <button
                  type="button"
                  onClick={() => onOpenCounselor('Job-Ready in 3 Months (TallyPrime + MS-Office)')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/15 transition-colors cursor-pointer"
                >
                  <span>Talk to Admissions Counselor</span>
                  <ArrowRight className="w-4 h-4 text-slate-300" />
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Visual Art Infographic Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-6 sm:p-7 bg-white/5 backdrop-blur-xl border border-white/15 shadow-2xl flex flex-col gap-6">
              {/* Header with Program Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest block">
                    YOU WILL BE LEARNING
                  </span>
                  <h3 className="text-lg font-black text-white">
                    Core Curriculum Stack
                  </h3>
                </div>

                {/* TallyPrime Official Brand Graphic Emblem */}
                <div className="flex items-center gap-1.5 p-2 rounded-xl bg-white/10 border border-white/15">
                  <div className="w-6 h-6 grid grid-cols-2 gap-0.5">
                    <span className="bg-[#005ba3] rounded-xs" />
                    <span className="bg-[#419bf9] rounded-xs" />
                    <span className="bg-[#ffbf00] rounded-xs" />
                    <span className="bg-[#8cc63f] rounded-xs" />
                  </div>
                  <span className="text-xs font-bold text-white tracking-tight">TallyPrime</span>
                </div>
              </div>

              {/* Module 1: TallyEssential */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h5 className="font-bold text-sm text-white">TallyEssential Levels 1-3</h5>
                    <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md">
                      Foundation to Pro
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1">
                    Double-entry bookkeeping, voucher postings, real-time BRS, and multi-godown stock controls.
                  </p>
                </div>
              </div>

              {/* Module 2: TallyPrime Statutory (GST, TDS & Payroll) */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h5 className="font-bold text-sm text-white">TallyPrime Statutory Compliance</h5>
                    <span className="text-[10px] font-semibold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-md">
                      GST & TDS
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1">
                    GSTR-1, 3B summaries, 2B auto-matching, e-invoicing QR codes, and Form 26Q TDS returns.
                  </p>
                </div>
              </div>

              {/* Module 3: Microsoft Office Suite for Accountants (Directly from flyer) */}
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/50 transition-colors flex flex-col gap-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                      MS-OFFICE PROFICIENCY
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded-md">
                    Corporate Desk
                  </span>
                </div>

                {/* 4 MS Office Icons */}
                <div className="grid grid-cols-4 gap-2 pt-1">
                  {/* Excel */}
                  <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-center">
                    <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white font-black text-xs flex items-center justify-center shadow-xs">
                      X
                    </div>
                    <span className="text-[11px] font-bold text-white mt-1.5">Excel</span>
                    <span className="text-[9px] text-emerald-300">Formulas & Pivot</span>
                  </div>

                  {/* Word */}
                  <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-blue-950/40 border border-blue-500/30 text-center">
                    <div className="w-7 h-7 rounded-lg bg-blue-600 text-white font-black text-xs flex items-center justify-center shadow-xs">
                      W
                    </div>
                    <span className="text-[11px] font-bold text-white mt-1.5">Word</span>
                    <span className="text-[9px] text-blue-300">Audit Reports</span>
                  </div>

                  {/* PowerPoint */}
                  <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-orange-950/40 border border-orange-500/30 text-center">
                    <div className="w-7 h-7 rounded-lg bg-orange-600 text-white font-black text-xs flex items-center justify-center shadow-xs">
                      P
                    </div>
                    <span className="text-[11px] font-bold text-white mt-1.5">PPT</span>
                    <span className="text-[9px] text-orange-300">MIS Slides</span>
                  </div>

                  {/* Outlook */}
                  <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-center">
                    <div className="w-7 h-7 rounded-lg bg-cyan-600 text-white font-black text-xs flex items-center justify-center shadow-xs">
                      O
                    </div>
                    <span className="text-[11px] font-bold text-white mt-1.5">Outlook</span>
                    <span className="text-[9px] text-cyan-300">Client Mails</span>
                  </div>
                </div>
              </div>

              {/* Bottom Guarantee Banner */}
              <div className="pt-2 flex items-center justify-between text-xs text-slate-300">
                <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <Check className="w-4 h-4 shrink-0" />
                  Dual-Monitor Lab Daily Hands-on
                </span>
                <span className="text-[11px] text-slate-400 font-mono">Batch: 10AM / 2PM / 5:30PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
