import React, { useState } from 'react';
import { PROGRAMS_DATA } from '../data/mockData';
import { Program } from '../types';
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Check,
  CheckCircle2,
  Clock,
  Award,
  X,
  Monitor,
  ShieldCheck,
  Layers,
  Sparkles,
  BookOpen,
  Users
} from 'lucide-react';
import { WhatsAppIcon } from './ui/WhatsAppIcon';
import { openEnrollWhatsApp } from '../lib/contact';

interface ProgramsScreenProps {
  onNavigate?: (path: string) => void;
  onOpenCounselor: (programTitle?: string) => void;
  onOpenVerify: (defaultId?: string) => void;
}

// 12 Distinct Pastel Palettes exactly matching the color scheme of the reference image
const COURSE_THEMES: Record<string, {
  bgHeader: string;
  borderColor: string;
  tagBg: string;
  tagBorder: string;
  tagText: string;
  titleColor: string;
  accent: string;
}> = {
  // Row 1: Green, Blue, Purple
  'tally-essentials': {
    bgHeader: 'bg-[#eef8eb]',
    borderColor: 'border-[#d6ecd0]',
    tagBg: 'bg-white/90',
    tagBorder: 'border-[#c5e6bd]',
    tagText: 'text-[#2d6a26]',
    titleColor: 'text-[#1b5e20]',
    accent: '#2d6a26'
  },
  'tally-professional': {
    bgHeader: 'bg-[#e6f4fd]',
    borderColor: 'border-[#cbe7fb]',
    tagBg: 'bg-white/90',
    tagBorder: 'border-[#bce0fa]',
    tagText: 'text-[#0d6efd]',
    titleColor: 'text-[#0a58ca]',
    accent: '#0d6efd'
  },
  'tally-prime-basics': {
    bgHeader: 'bg-[#f3edf9]',
    borderColor: 'border-[#e3d5f2]',
    tagBg: 'bg-white/90',
    tagBorder: 'border-[#d8c4ed]',
    tagText: 'text-[#6f42c1]',
    titleColor: 'text-[#59359a]',
    accent: '#6f42c1'
  },

  // Row 2: Peach, Sage, Steel Blue
  'principles-of-tally-bookkeeping': {
    bgHeader: 'bg-[#fef3e8]',
    borderColor: 'border-[#fedec2]',
    tagBg: 'bg-white/90',
    tagBorder: 'border-[#fcd2af]',
    tagText: 'text-[#d9531e]',
    titleColor: 'text-[#b43e0e]',
    accent: '#d9531e'
  },
  'tally-prime-gst-fundamentals': {
    bgHeader: 'bg-[#edf6ed]',
    borderColor: 'border-[#d2ecd2]',
    tagBg: 'bg-white/90',
    tagBorder: 'border-[#bee3be]',
    tagText: 'text-[#2e7d32]',
    titleColor: 'text-[#1b5e20]',
    accent: '#2e7d32'
  },
  'financial-markets-and-services': {
    bgHeader: 'bg-[#e7f1f9]',
    borderColor: 'border-[#cde3f5]',
    tagBg: 'bg-white/90',
    tagBorder: 'border-[#bcdbf2]',
    tagText: 'text-[#1976d2]',
    titleColor: 'text-[#0d47a1]',
    accent: '#1976d2'
  },

  // Row 3: Lilac, Warm Amber, Citron
  'tdl-essentials': {
    bgHeader: 'bg-[#f5eefb]',
    borderColor: 'border-[#e8d5f7]',
    tagBg: 'bg-white/90',
    tagBorder: 'border-[#dec1f4]',
    tagText: 'text-[#7b2cbf]',
    titleColor: 'text-[#5a189a]',
    accent: '#7b2cbf'
  },
  'gst-using-tally-prime': {
    bgHeader: 'bg-[#fef8e7]',
    borderColor: 'border-[#fdeabf]',
    tagBg: 'bg-white/90',
    tagBorder: 'border-[#fcd99a]',
    tagText: 'text-[#b45309]',
    titleColor: 'text-[#92400e]',
    accent: '#b45309'
  },
  'tds-using-tally': {
    bgHeader: 'bg-[#f1f8e9]',
    borderColor: 'border-[#def0cf]',
    tagBg: 'bg-white/90',
    tagBorder: 'border-[#cee8b7]',
    tagText: 'text-[#33691e]',
    titleColor: 'text-[#1b5e20]',
    accent: '#33691e'
  },

  // Row 4: Cyan, Violet, Apricot
  'payroll': {
    bgHeader: 'bg-[#e3f7f8]',
    borderColor: 'border-[#c2eff1]',
    tagBg: 'bg-white/90',
    tagBorder: 'border-[#a9e7ea]',
    tagText: 'text-[#007b8a]',
    titleColor: 'text-[#005f6b]',
    accent: '#007b8a'
  },
  'online-offline-courses': {
    bgHeader: 'bg-[#f0eaff]',
    borderColor: 'border-[#dfd3ff]',
    tagBg: 'bg-white/90',
    tagBorder: 'border-[#cfbeff]',
    tagText: 'text-[#5e2de0]',
    titleColor: 'text-[#4c1d95]',
    accent: '#5e2de0'
  },
  'accounting-basics-crash-course': {
    bgHeader: 'bg-[#fdf2e9]',
    borderColor: 'border-[#fbe0ce]',
    tagBg: 'bg-white/90',
    tagBorder: 'border-[#f8cdb2]',
    tagText: 'text-[#c05621]',
    titleColor: 'text-[#9c4221]',
    accent: '#c05621'
  }
};

const DEFAULT_THEME = {
  bgHeader: 'bg-[#f3edf9]',
  borderColor: 'border-[#e3d5f2]',
  tagBg: 'bg-white/90',
  tagBorder: 'border-[#d8c4ed]',
  tagText: 'text-[#6f42c1]',
  titleColor: 'text-[#59359a]',
  accent: '#6f42c1'
};

export const ProgramsScreen: React.FC<ProgramsScreenProps> = ({
  onNavigate,
  onOpenCounselor,
  onOpenVerify,
}) => {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Do I need a commerce degree or prior accounting knowledge?',
      a: 'No prior accounting experience is necessary for our foundation courses like Tally Essentials and Accounting Basics. We start from ground zero—teaching you the golden rules of debits/credits, ledger classification, and real-time vouchers before moving to complex company accounts.'
    },
    {
      q: 'Are the TEPL certificates cryptographically verifiable by employers?',
      a: 'Yes, 100%. As an authorized training partner of Tally Education Pvt. Ltd. (TEPL), all our direct certification assessments grant official digital credentials with tamper-proof QR codes verifiable directly through the central TEPL Bengaluru candidate database.'
    },
    {
      q: 'Can I attend classes online or is campus lab attendance required?',
      a: 'We offer maximum flexibility! You can attend in-person at our air-conditioned dual-monitor lab facility in Tirunelveli, or join our live interactive online batches with full cloud-based Tally Prime software access and recorded lecture libraries.'
    },
    {
      q: 'What software releases and tools do students practice on?',
      a: 'All workstations in our Tirunelveli lab are equipped with licensed Tally Prime 4.x releases, live GST portal simulations, e-invoicing sandboxes, and actual multi-state business ledger vouchers.'
    },
    {
      q: 'What placement and internship assistance do you offer after completion?',
      a: 'We offer structured placement assistance including resume building, mock interviews with practicing Chartered Accountants, and direct job interviews with 50+ commercial organizations and audit firms across Tamil Nadu.'
    }
  ];

  return (
    <div className="flex flex-col w-full pb-16">
      {/* 1. HERO BANNER (Your Fast-Track to the Tech/Accounting Industry) */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 mb-10 sm:mb-14">
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-neutral-200/90 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] text-center relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-600 text-xs font-semibold uppercase tracking-wider mb-5">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span>VOCATIONAL ACCOUNTING CATALOG</span>
          </div>

          {/* Main Headline with black badge matching reference */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-neutral-900 tracking-tight leading-tight max-w-4xl mx-auto">
            Your Fast-Track to the{' '}
            <span className="bg-black text-white px-3 sm:px-4 py-0.5 sm:py-1 rounded-2xl inline-block mx-1 shadow-sm">
              Accounting & Tally
            </span>{' '}
            Industry
          </h1>

          {/* Subtitle */}
          <p className="text-neutral-500 text-sm sm:text-base max-w-2xl mx-auto mt-4 sm:mt-5 leading-relaxed">
            Hands-on vocational curriculum built around dual-monitor live enterprise labs, official TEPL certifications, and practical ledger mastery.
          </p>
        </div>
      </section>

      {/* 2. THE 12 COURSES GRID (Matching the exact pastel card styling from reference image) */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 mb-14 sm:mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {PROGRAMS_DATA.map((prog) => {
            const theme = COURSE_THEMES[prog.id] || DEFAULT_THEME;

            return (
              <div
                key={prog.id}
                className={`flex flex-col rounded-3xl border ${theme.borderColor} overflow-hidden bg-white shadow-[0_4px_20px_-2px_rgba(17,24,39,0.05)] hover:shadow-[0_20px_40px_-4px_rgba(17,24,39,0.12)] transition-all duration-300 hover:-translate-y-1.5 group`}
              >
                {/* Top Tinted Pastel Header */}
                <div className={`${theme.bgHeader} p-6 sm:p-7 border-b ${theme.borderColor} flex flex-col gap-3 min-h-[145px] sm:min-h-[155px]`}>
                  {/* Top Tags/Pills */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold ${theme.tagBg} ${theme.tagBorder} ${theme.tagText} border shadow-xs`}>
                      {prog.level}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold ${theme.tagBg} ${theme.tagBorder} ${theme.tagText} border shadow-xs`}>
                      {prog.code}
                    </span>
                  </div>

                  {/* Course Title */}
                  <h3 className={`font-black text-xl sm:text-2xl tracking-tight leading-snug mt-1 ${theme.titleColor}`}>
                    {prog.title}
                  </h3>
                </div>

                {/* Bottom White Body */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow gap-5 bg-white">
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed line-clamp-3">
                    {prog.description}
                  </p>

                  {/* Card Bottom Bar */}
                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold block">
                        Delivery Mode
                      </span>
                      <span className="font-bold text-neutral-800 text-xs sm:text-sm">
                        {prog.mode}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedProgram(prog)}
                        className="font-bold text-xs hover:underline inline-flex items-center gap-1 transition-all py-1.5 px-2.5 rounded-lg hover:bg-neutral-50"
                        style={{ color: theme.accent }}
                      >
                        <span>Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        type="button"
                        onClick={() => openEnrollWhatsApp(prog.title)}
                        className="bg-black hover:bg-neutral-800 text-white transition-all px-3.5 py-1.5 rounded-full text-xs font-bold inline-flex items-center gap-1.5 shadow-xs"
                      >
                        <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Enroll Now</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. METHODOLOGY SECTION ("The Build-Break-Innovate / Practice-Verify-Master Methodology") */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 mb-14 sm:mb-20">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-neutral-200/90 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col gap-4 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-neutral-900 tracking-tight">
                The Practice-Verify-Master Methodology
              </h2>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                At LK Educations, accounting theory is immediately coupled with real commercial ledger vouchers. You work through simulated enterprise audit books, reconcile active GST mismatches, and build unshakeable workplace competence on dual-screen workstations.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onOpenCounselor('Lab Tour & Methodology')}
                  className="bg-black text-white hover:bg-neutral-800 transition-all px-6 py-3 rounded-full font-semibold text-xs sm:text-sm inline-flex items-center gap-2 shadow-sm"
                >
                  <span>Learn About Lab Training</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Metric Box */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="bg-neutral-100 rounded-3xl p-8 sm:p-10 flex flex-col items-center justify-center border border-neutral-200/80 aspect-square sm:w-72 sm:h-72 w-full text-center shadow-inner">
                <Monitor className="w-10 h-10 text-neutral-400 mb-2 stroke-[1.5]" />
                <span className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
                  100% Practical
                </span>
                <span className="text-xs text-neutral-500 font-medium mt-1">
                  Dual-Screen Enterprise Accounting
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROGRAM FAQS (Interactive Accordion from reference image) */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 mb-14 sm:mb-20">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-neutral-200/90 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest block mb-2">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              Program FAQs
            </h2>
            <p className="text-neutral-500 text-xs sm:text-sm mt-2">
              Get clear answers on curriculum, prerequisites, certifications, and career support.
            </p>
          </div>

          <div className="max-w-3xl mx-auto flex flex-col gap-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-neutral-200/90 bg-neutral-50/50 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-semibold text-neutral-900 text-xs sm:text-sm hover:text-black"
                  >
                    <span>{faq.q}</span>
                    <span className="shrink-0 text-neutral-400">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100/80 animate-in fade-in duration-150">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. READY TO START YOUR JOURNEY? (Golden Gradient Banner matching reference) */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 mb-8">
        <div className="bg-gradient-to-r from-[#e7b85e] via-[#e5ab48] to-[#e8be66] text-neutral-900 rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden shadow-md">
          {/* Subtle concentric circular overlay */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-black/5 blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-4">
            <h2 className="text-2xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              Ready to Start Your Journey?
            </h2>

            <p className="text-neutral-800 text-xs sm:text-sm leading-relaxed max-w-lg">
              Join 2,500+ successful learners who transformed their accounting careers with hands-on Tally and GST training at LK Educations.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => onOpenCounselor()}
                className="bg-black text-white hover:bg-neutral-800 transition-all px-6 py-3 rounded-full text-xs sm:text-sm font-semibold shadow-md inline-flex items-center gap-2"
              >
                <span>Book a Free Counseling Session</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {onNavigate && (
                <button
                  type="button"
                  onClick={() => onNavigate('certifications')}
                  className="bg-white text-neutral-900 hover:bg-neutral-100 transition-all px-6 py-3 rounded-full text-xs sm:text-sm font-semibold border border-black/10 shadow-sm"
                >
                  <span>Explore Certifications</span>
                </button>
              )}
            </div>

            {/* Trust Markers */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-4 text-xs font-semibold text-neutral-800/80">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                Dual-Screen Computer Labs
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                Tirunelveli Campus
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                Authorized TEPL Partner
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. COURSE DETAILS MODAL (When clicking "Know more" on any card) */}
      {selectedProgram && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setSelectedProgram(null)}
        >
          <div
            className="relative bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-neutral-200 my-auto text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-neutral-100">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-secondary/10 text-secondary inline-block mb-1.5">
                  {selectedProgram.level} Level Certification
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-neutral-900">
                  {selectedProgram.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProgram(null)}
                className="p-1.5 rounded-full text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="py-4 space-y-4">
              <p className="text-sm text-neutral-600 leading-relaxed">
                {selectedProgram.description}
              </p>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3.5 bg-neutral-50 rounded-2xl border border-neutral-200 text-xs">
                <div>
                  <span className="text-[10px] uppercase font-bold text-neutral-400 block">Level</span>
                  <span className="font-bold text-neutral-800">{selectedProgram.level}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-neutral-400 block">Mode</span>
                  <span className="font-bold text-neutral-800">{selectedProgram.mode}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-neutral-400 block">Live Invoices</span>
                  <span className="font-bold text-secondary">{selectedProgram.labProjectsCount} Projects</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-neutral-400 block">Certification</span>
                  <span className="font-bold text-neutral-800">TEPL / LK Educations</span>
                </div>
              </div>

              {/* Syllabus / Key Topics */}
              <div>
                <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2">
                  Comprehensive Syllabus & Modules:
                </h4>
                <div className="space-y-2">
                  {selectedProgram.keyTopics.map((topic, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-neutral-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => {
                  setSelectedProgram(null);
                  onOpenVerify();
                }}
                className="text-xs font-semibold text-neutral-600 hover:text-black inline-flex items-center gap-1"
              >
                <ShieldCheck className="w-4 h-4 text-secondary" />
                <span>Verify Specimen Certificate</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  const title = selectedProgram.title;
                  setSelectedProgram(null);
                  openEnrollWhatsApp(title);
                }}
                className="bg-black hover:bg-neutral-800 text-white transition-all px-6 py-2.5 rounded-full text-xs font-bold inline-flex items-center gap-1.5 shadow-sm"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400" />
                <span>Enroll Now on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
