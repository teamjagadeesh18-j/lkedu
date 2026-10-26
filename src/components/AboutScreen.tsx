import React, { useState, useEffect } from 'react';
import { ASSETS, FACULTY_DATA } from '../data/mockData';
import { AnimatedNumber } from '@/components/core/animated-number';
import {
  Terminal,
  ShieldCheck,
  Users,
  Check,
  Building2,
  Sparkles,
  ArrowRight,
  Phone,
  FileCheck,
  Award,
  BookOpen,
  QrCode,
  Network,
  Download
} from 'lucide-react';
import { Reveal } from './Reveal';

interface AboutScreenProps {
  onNavigate: (path: string) => void;
  onOpenCounselor: () => void;
  onOpenVerify: () => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({
  onNavigate,
  onOpenCounselor,
  onOpenVerify,
}) => {
  // State for animated statistics counters
  const [statsValue1, setStatsValue1] = useState<number>(0);
  const [statsValue2, setStatsValue2] = useState<number>(0);
  const [statsValue3, setStatsValue3] = useState<number>(0);
  const [statsValue4, setStatsValue4] = useState<number>(0);

  useEffect(() => {
    setStatsValue1(10);
    setStatsValue2(2500);
    setStatsValue3(100);
    setStatsValue4(94);
  }, []);

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <section className="max-w-7xl mx-auto w-full px-3 sm:px-6 mb-8 lg:mb-12">
        <div className="relative overflow-hidden bg-surface-container-lowest rounded-2xl sm:rounded-3xl p-5 sm:p-10 lg:p-16 shadow-[0_4px_20px_-2px_rgba(17,24,39,0.04)] border border-[#E5E7EB]">
          {/* Ledger Grid Ambient Texture */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundSize: '32px 32px',
              backgroundImage:
                'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
            }}
          />

          <div className="relative z-10 max-w-4xl flex flex-col items-start gap-5 sm:gap-6">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-low border border-[#E5E7EB]">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="font-label-eyebrow text-label-eyebrow text-on-surface-variant uppercase tracking-wider">
                ABOUT LK EDUCATION
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight leading-tight">
              Why LK Education Exists, and Who We Built It For
            </h1>

            {/* Short Intro */}
            <p className="text-sm sm:text-base lg:text-lg text-neutral-600 leading-relaxed max-w-3xl">
              Founded in Tirunelveli with a singular mission: to close the gap between textbook college commerce degrees and the real, fast-paced accounting demands of modern businesses. We transform learners into confident, job-ready accounting professionals through hands-on practice, authorized TEPL curriculum, and lifelong career support.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row w-full sm:w-auto items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <button
                onClick={() => onNavigate('programs')}
                className="w-full sm:w-auto inline-flex items-center justify-center font-label-md text-label-md text-on-primary bg-primary hover:bg-neutral-800 active:bg-primary px-8 py-3.5 rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all cursor-pointer font-bold"
              >
                Explore Programs
              </button>
              <button
                onClick={() => onNavigate('contact-us')}
                className="w-full sm:w-auto inline-flex items-center justify-center font-label-md text-label-md text-on-surface bg-surface-container-low hover:bg-surface-container transition-all px-8 py-3.5 rounded-full border border-[#E5E7EB] cursor-pointer"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Four Stat Counters Card */}
      <section className="max-w-7xl mx-auto w-full px-3 sm:px-6 mb-8 lg:mb-12">
        <div className="bg-surface-container-lowest rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 shadow-[0_4px_20px_-2px_rgba(17,24,39,0.04)] border border-[#E5E7EB]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {/* Stat 1: 10+ Years of Dedication */}
            <Reveal delay={0} className="flex flex-col gap-2 p-4 bg-surface-container-low/60 rounded-xl border border-transparent hover:border-[#E5E7EB] transition-colors">
              <div className="flex items-baseline gap-1">
                <AnimatedNumber
                  value={statsValue1}
                  className="font-display text-headline-lg lg:text-display text-on-surface font-extrabold tracking-tight tabular-nums"
                  springOptions={{
                    bounce: 0,
                    duration: 2000,
                  }}
                />
                <span className="font-display text-headline-md text-secondary font-bold">+</span>
              </div>
              <span className="font-title-sm text-title-sm text-on-surface font-semibold">
                Years of Dedication
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Training talent in South Tamil Nadu
              </span>
            </Reveal>

            {/* Stat 2: 2,500+ Alumni Working Across India */}
            <Reveal delay={0.15} className="flex flex-col gap-2 p-4 bg-surface-container-low/60 rounded-xl border border-transparent hover:border-[#E5E7EB] transition-colors">
              <div className="flex items-baseline gap-1">
                <AnimatedNumber
                  value={statsValue2}
                  className="font-display text-headline-lg lg:text-display text-on-surface font-extrabold tracking-tight tabular-nums"
                  springOptions={{
                    bounce: 0,
                    duration: 2000,
                  }}
                />
                <span className="font-display text-headline-md text-secondary font-bold">+</span>
              </div>
              <span className="font-title-sm text-title-sm text-on-surface font-semibold">
                Alumni Working Across India
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Placed in leading firms and corporate sectors
              </span>
            </Reveal>

            {/* Stat 3: 100% Practical Lab Curriculum */}
            <Reveal delay={0.3} className="flex flex-col gap-2 p-4 bg-surface-container-low/60 rounded-xl border border-transparent hover:border-[#E5E7EB] transition-colors">
              <div className="flex items-baseline gap-1">
                <AnimatedNumber
                  value={statsValue3}
                  className="font-display text-headline-lg lg:text-display text-on-surface font-extrabold tracking-tight tabular-nums"
                  springOptions={{
                    bounce: 0,
                    duration: 2000,
                  }}
                />
                <span className="font-display text-headline-md text-secondary font-bold">%</span>
              </div>
              <span className="font-title-sm text-title-sm text-on-surface font-semibold">
                Practical Lab Curriculum
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Dual-monitor real enterprise accounting
              </span>
            </Reveal>

            {/* Stat 4: 94% Student Satisfaction Rate */}
            <Reveal delay={0.45} className="flex flex-col gap-2 p-4 bg-surface-container-low/60 rounded-xl border border-transparent hover:border-[#E5E7EB] transition-colors">
              <div className="flex items-baseline gap-1">
                <AnimatedNumber
                  value={statsValue4}
                  className="font-display text-headline-lg lg:text-display text-on-surface font-extrabold tracking-tight tabular-nums"
                  springOptions={{
                    bounce: 0,
                    duration: 2000,
                  }}
                />
                <span className="font-display text-headline-md text-secondary font-bold">%</span>
              </div>
              <span className="font-title-sm text-title-sm text-on-surface font-semibold">
                Student Satisfaction Rate
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Independent course exit survey ratings
              </span>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Our Story (Founder Note Card) */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 mb-8 lg:mb-12">
        <div className="bg-surface-container-lowest rounded-lg p-8 sm:p-12 lg:p-16 shadow-[0_4px_20px_-2px_rgba(17,24,39,0.04)] border border-[#E5E7EB]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Founder Portrait */}
            <Reveal delay={0} className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden bg-surface-container shadow-md border border-[#E5E7EB]">
                <img
                  className="w-full h-full object-cover"
                  src={ASSETS.founder}
                  alt="Dignified, professional corporate portrait of Ganesh Kumar, Founder of LK Educations"
                  onError={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = '#2f3131';
                  }}
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-sm border border-[#E5E7EB]">
                  <p className="font-title-sm text-title-sm text-on-surface font-bold">Ganesh Kumar</p>
                  <p className="font-label-sm text-label-sm text-secondary font-medium">
                    Founder & Academic Director
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Founder Quote & Narrative */}
            <Reveal delay={0.2} className="lg:col-span-7 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2">
                <span className="font-serif text-secondary text-3xl font-black leading-none">“</span>
                <span className="font-label-eyebrow text-label-eyebrow text-on-surface-variant uppercase tracking-wider">
                  FOUNDER'S PERSPECTIVE
                </span>
              </div>

              <blockquote className="font-headline-sm text-headline-sm text-on-surface font-semibold leading-relaxed">
                “Most graduates know what a debit and credit are on paper, but freeze when asked to reconcile a GST portal discrepancy or post a multi-state e-way bill voucher. LK Education was born to ensure no student in Tirunelveli ever feels unprepared for their first accounting role.”
              </blockquote>

              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Starting in 2014 from a small computer lab on S.N. High Road, we realized our town possessed thousands of bright young minds graduating from commerce colleges every year without the tactile confidence to sit in front of an enterprise accounting desk. We stripped away rote theory, built direct ties with local chartered accountants, and equipped every desk with authorized software and authentic ledger workflows.
              </p>

              <div className="pt-4 flex items-center gap-4 border-t border-[#E5E7EB]">
                <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center font-title-sm text-title-sm font-bold text-on-surface shrink-0">
                  GK
                </div>
                <div>
                  <p className="font-title-sm text-title-sm text-on-surface font-bold">Ganesh Kumar</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Founder & Academic Director, LK Educations
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. Our Mission & Core Pillars */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 mb-8 lg:mb-12">
        <div className="bg-surface-container-lowest rounded-lg p-8 sm:p-12 lg:p-16 shadow-[0_4px_20px_-2px_rgba(17,24,39,0.04)] border border-[#E5E7EB]">
          {/* Mission Headline Block */}
          <Reveal className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6 mb-12 sm:mb-16">
            <span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-widest font-bold">
              OUR PURPOSE
            </span>
            <h2 className="font-headline-lg text-headline-lg lg:text-[34px] lg:leading-[42px] text-on-surface font-bold text-balance">
              “To empower every commerce student, job seeker, and small business owner in Southern Tamil Nadu with practical, verified accounting mastery and transparent career guidance.”
            </h2>
            <div className="w-20 h-1 bg-secondary rounded-full mt-2" />
          </Reveal>

          {/* Three Core Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <Reveal delay={0} className="bg-surface-container-low rounded-xl p-8 flex flex-col gap-4 border border-[#E5E7EB] transition-transform hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm border border-[#E5E7EB]">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Practical Rigor</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Zero reliance on static slides. Over 80% of student learning hours are spent logging authentic vouchers, resolving discrepancies, and running real-world reports on verified Tally Prime instances.
              </p>
            </Reveal>

            {/* Pillar 2 */}
            <Reveal delay={0.15} className="bg-surface-container-low rounded-xl p-8 flex flex-col gap-4 border border-[#E5E7EB] transition-transform hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-secondary shadow-sm border border-[#E5E7EB]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Institutional Integrity</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                As an authorized TEPL training center, we enforce authentic assessment guidelines, verifiable digital credentials, and uncompromised curriculum benchmarks audited by Tally Education.
              </p>
            </Reveal>

            {/* Pillar 3 */}
            <Reveal delay={0.3} className="bg-surface-container-low rounded-xl p-8 flex flex-col gap-4 border border-[#E5E7EB] transition-transform hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-on-tertiary-container shadow-sm border border-[#E5E7EB]">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Student-Centric Mentorship</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                We operate small batch sizes ensuring one-on-one attention from senior practitioners, complete with personalized interview coaching and continuous post-placement support.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. Delivery Built Around Practice (Split 2-Column Layout) */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 mb-8 lg:mb-12">
        <div className="bg-surface-container-lowest rounded-lg p-8 sm:p-12 lg:p-16 shadow-[0_4px_20px_-2px_rgba(17,24,39,0.04)] border border-[#E5E7EB]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Lab Action Image */}
            <Reveal className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden bg-surface-container shadow-sm aspect-[4/3] group border border-[#E5E7EB]">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={ASSETS.labFacility}
                  alt="Modern computer accounting lab interior in Tirunelveli with dual-screen workstations"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="inline-block px-3 py-1 rounded-full bg-secondary text-white font-label-sm text-label-sm font-semibold mb-2">
                    Live Lab Facility
                  </span>
                  <p className="font-title-sm text-title-sm font-bold text-white">
                    Dual-Screen Workstations at Tirunelveli Center
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Right Column: Content */}
            <Reveal delay={0.2} className="lg:col-span-6 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                <span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-wider">
                  PEDAGOGICAL EXCELLENCE
                </span>
              </div>

              <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
                Delivery Built Around Practice
              </h2>

              <p className="font-headline-sm text-headline-sm text-on-surface-variant font-medium italic">
                “Learn it. Practise it. Prove it.”
              </p>

              <div className="flex flex-col gap-5 pt-2">
                {/* Bullet 1 */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-secondary-container/40 text-on-secondary-container flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-secondary stroke-[3]" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-title-sm text-title-sm text-on-surface font-bold">Daily Voucher Entry</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Students solve actual raw invoice bundles from local FMCG distributors, textile retailers, and manufacturing firms across Tirunelveli and Tuticorin.
                    </p>
                  </div>
                </div>

                {/* Bullet 2 */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-secondary-container/40 text-on-secondary-container flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-secondary stroke-[3]" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-title-sm text-title-sm text-on-surface font-bold">Live GST & TDS Portal Sandbox</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Gain firsthand experience generating E-Way Bills, filing mock GSTR-1, GSTR-3B forms, and 26Q TDS summaries before touching a live corporate ledger.
                    </p>
                  </div>
                </div>

                {/* Bullet 3 */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-secondary-container/40 text-on-secondary-container flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-secondary stroke-[3]" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-title-sm text-title-sm text-on-surface font-bold">Regular Practical Drills</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Weekly speed drills for keyboard-only Tally shortcuts, high-volume bank reconciliations, inventory cost center allocations, and trial balance balancing.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. Programs Shaped by Industry Needs (Mirrored Layout) */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 mb-8 lg:mb-12">
        <div className="bg-surface-container-lowest rounded-lg p-8 sm:p-12 lg:p-16 shadow-[0_4px_20px_-2px_rgba(17,24,39,0.04)] border border-[#E5E7EB]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Strategic Content */}
            <Reveal className="lg:col-span-6 flex flex-col gap-6 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                <span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-wider">
                  CURRICULUM ARCHITECTURE
                </span>
              </div>

              <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
                Programs Shaped by Industry Needs
              </h2>

              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                The accounting industry in Tamil Nadu evolves swiftly with quarterly GST revisions, e-invoicing thresholds, and digital payroll compliance. We actively synchronize our lesson plans with corporate reality.
              </p>

              <div className="flex flex-col gap-5 pt-2">
                {/* Strategic Point 1 */}
                <div className="bg-surface-container-low rounded-xl p-5 flex flex-col gap-1.5 border border-[#E5E7EB]">
                  <div className="flex items-center gap-2 text-on-surface font-bold font-title-sm text-title-sm">
                    <ShieldCheck className="w-5 h-5 text-secondary" />
                    Aligned with Official TEPL Curriculum
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Officially audited syllabus constantly updated for the newest Tally Prime releases, ensuring alignment with corporate enterprise standards across India.
                  </p>
                </div>

                {/* Strategic Point 2 */}
                <div className="bg-surface-container-low rounded-xl p-5 flex flex-col gap-1.5 border border-[#E5E7EB]">
                  <div className="flex items-center gap-2 text-on-surface font-bold font-title-sm text-title-sm">
                    <Building2 className="w-5 h-5 text-secondary" />
                    Continuous Input from Auditing Firms
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Leading Chartered Accountants and tax consultants in Tirunelveli and Madurai regularly review coursework to introduce relevant case studies and regulatory changes.
                  </p>
                </div>

                {/* Strategic Point 3 */}
                <div className="bg-surface-container-low rounded-xl p-5 flex flex-col gap-1.5 border border-[#E5E7EB]">
                  <div className="flex items-center gap-2 text-on-surface font-bold font-title-sm text-title-sm">
                    <Sparkles className="w-5 h-5 text-secondary" />
                    Soft Skills & Interview Readiness
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Beyond accounting numbers, we offer resume optimization, professional email etiquette, and mock accounting interview drills with senior recruitment managers.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Right Column: Pipeline Diagram Graphic */}
            <Reveal delay={0.2} className="lg:col-span-6 order-1 lg:order-2">
              <div className="bg-surface-container-low rounded-xl p-6 sm:p-8 flex flex-col gap-6 border border-[#E5E7EB]">
                <div className="flex items-center justify-between pb-4 border-b border-[#E5E7EB]">
                  <div className="flex flex-col">
                    <span className="font-title-sm text-title-sm text-on-surface font-bold">
                      The LK Learning Pipeline
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      From fundamental debit concepts to corporate placement
                    </span>
                  </div>
                  <Network className="w-6 h-6 text-secondary" />
                </div>

                {/* Visual Flow Stages */}
                <div className="space-y-4">
                  {/* Stage 1 */}
                  <div className="bg-surface-container-lowest p-4 rounded-xl flex items-center justify-between shadow-sm border border-[#E5E7EB]">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-surface-container font-label-md text-label-md font-bold flex items-center justify-center text-on-surface">
                        1
                      </div>
                      <div>
                        <h5 className="font-title-sm text-title-sm text-on-surface font-bold">
                          Tally Essentials Level
                        </h5>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Vouchers, Bank Reco, Inventory Mastery
                        </p>
                      </div>
                    </div>
                    <span className="font-label-sm text-label-sm font-semibold text-secondary px-2.5 py-1 rounded-full bg-secondary/10">
                      Foundation
                    </span>
                  </div>

                  {/* Connector */}
                  <div className="flex justify-center -my-2">
                    <ArrowRight className="w-5 h-5 text-outline-variant rotate-90" />
                  </div>

                  {/* Stage 2 */}
                  <div className="bg-surface-container-lowest p-4 rounded-xl flex items-center justify-between shadow-sm border border-[#E5E7EB]">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-surface-container font-label-md text-label-md font-bold flex items-center justify-center text-on-surface">
                        2
                      </div>
                      <div>
                        <h5 className="font-title-sm text-title-sm text-on-surface font-bold">
                          GST, TDS & Payroll Rigor
                        </h5>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Statutory compliance & live sandbox filing
                        </p>
                      </div>
                    </div>
                    <span className="font-label-sm text-label-sm font-semibold text-on-tertiary-container px-2.5 py-1 rounded-full bg-tertiary-fixed">
                      Advanced
                    </span>
                  </div>

                  {/* Connector */}
                  <div className="flex justify-center -my-2">
                    <ArrowRight className="w-5 h-5 text-outline-variant rotate-90" />
                  </div>

                  {/* Stage 3 */}
                  <div className="bg-surface-container-lowest p-4 rounded-xl flex items-center justify-between shadow-sm border border-[#E5E7EB]">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-surface-container font-label-md text-label-md font-bold flex items-center justify-center text-on-surface">
                        3
                      </div>
                      <div>
                        <h5 className="font-title-sm text-title-sm text-on-surface font-bold">
                          TEPL Assessment & Placement
                        </h5>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Verifiable certification & regional interviews
                        </p>
                      </div>
                    </div>
                    <span className="font-label-sm text-label-sm font-semibold text-secondary px-2.5 py-1 rounded-full bg-secondary/10">
                      Outcome
                    </span>
                  </div>
                </div>

                {/* Mini Footnote Card */}
                <div className="p-3 bg-surface-container-lowest/80 rounded-lg flex items-center gap-3 text-on-surface-variant font-body-sm text-body-sm border border-[#E5E7EB]">
                  <Sparkles className="w-5 h-5 text-secondary shrink-0" />
                  <span>100% updated for the latest Tally Prime 4.x features</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. Learn from Professionals (Faculty Section) */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 mb-8 lg:mb-12">
        <div className="bg-surface-container-lowest rounded-lg p-8 sm:p-12 lg:p-16 shadow-[0_4px_20px_-2px_rgba(17,24,39,0.04)] border border-[#E5E7EB]">
          {/* Section Header */}
          <Reveal className="flex flex-col items-center text-center gap-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-low border border-[#E5E7EB]">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              <span className="font-label-eyebrow text-label-eyebrow text-on-surface-variant uppercase tracking-wider">
                OUR FACULTY
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
              Learn from Seasoned Practitioners
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Our mentors are active tax professionals, chartered accountant consultants, and certified Tally specialists with decades of combined corporate experience.
            </p>
          </Reveal>

          {/* Trainer Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FACULTY_DATA.map((trainer, idx) => (
              <Reveal
                key={trainer.name}
                delay={idx * 0.15}
                className="bg-surface-container-low rounded-xl overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-md border border-[#E5E7EB]"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-surface-container">
                  <img
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    src={trainer.image}
                    alt={trainer.alt}
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="font-label-sm text-label-sm font-semibold text-secondary">
                      {trainer.experience}
                    </span>
                    <h3 className="font-title-lg text-title-lg text-on-surface font-bold">
                      {trainer.name}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {trainer.role}
                    </p>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {trainer.bio}
                  </p>
                  <div className="pt-2 border-t border-surface-container-high/60 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-secondary shrink-0" />
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      {trainer.specialization}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Tally Education (TEPL) Certification Partner Card */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 mb-8 lg:mb-12">
        <div className="bg-surface-container-lowest rounded-lg p-8 sm:p-12 lg:p-16 shadow-[0_4px_20px_-2px_rgba(17,24,39,0.04)] border border-[#E5E7EB]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Seal & Description */}
            <Reveal className="lg:col-span-8 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-container font-label-eyebrow text-label-eyebrow font-bold uppercase tracking-wider flex items-center gap-1.5 border border-[#ffb95f]/40">
                  <ShieldCheck className="w-4 h-4" />
                  TEPL AUTHORIZED ACADEMIC PARTNER
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
                Verifiable Credentials with Global Recognition
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                LK Educations is officially recognized by <strong className="text-on-surface">Tally Education Pvt. Ltd. (TEPL)</strong>, the dedicated education wing of Tally Solutions. Every credential issued through our Tirunelveli institute carries a cryptographically verifiable QR code registered directly in Tally's candidate database.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="font-title-sm text-title-sm text-on-surface font-bold">
                      Original Tally Courseware
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Authorised e-content and physical study kits
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <QrCode className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="font-title-sm text-title-sm text-on-surface font-bold">
                      Instant Online Verification
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Direct employer validation through TEPL portal
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="font-title-sm text-title-sm text-on-surface font-bold">
                      Tally Job Portal Access
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Exclusive hiring network for certified students
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="font-title-sm text-title-sm text-on-surface font-bold">
                      Digital LinkedIn Badges
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Verifiable 1-click professional profile badges
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right: Digital Badge Visual */}
            <Reveal delay={0.2} className="lg:col-span-4 flex flex-col items-center">
              <div className="w-full max-w-xs bg-surface-container-low rounded-2xl p-6 text-center flex flex-col items-center gap-4 shadow-sm border border-[#E5E7EB]">
                <div className="w-20 h-20 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-container shadow-sm border border-[#ffb95f]/40">
                  <Award className="w-10 h-10 text-on-tertiary-container" />
                </div>
                <div className="flex flex-col">
                  <span className="font-title-sm text-title-sm text-on-surface font-bold">
                    Tally Education Pvt. Ltd.
                  </span>
                  <span className="font-label-sm text-label-sm text-secondary font-semibold">
                    Authorized Partner ID: TEPL-TN-627001
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Officially authorized center for Tally Prime Essentials, Comprehensive & Professional Certifications.
                </p>
                <button
                  onClick={onOpenVerify}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-white font-label-md text-label-md text-on-surface hover:bg-neutral-100 transition-colors shadow-sm border border-[#E5E7EB]"
                >
                  <span>Verify a Certificate</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 9. Closing High Contrast Banner */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 mb-12">
        <Reveal className="bg-primary text-on-primary rounded-lg p-10 sm:p-14 lg:p-16 text-center flex flex-col items-center gap-6 shadow-[0_12px_32px_-4px_rgba(0,0,0,0.18)]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-secondary-fixed" />
            <span className="font-label-eyebrow text-label-eyebrow text-surface-bright uppercase tracking-wider">
              JOIN LK EDUCATION
            </span>
          </div>

          <h2 className="font-headline-lg text-headline-lg lg:text-display text-on-primary tracking-tight max-w-3xl text-balance">
            Ready to Start Your Accounting Career?
          </h2>

          <p className="font-body-lg text-body-lg text-on-primary/80 max-w-2xl leading-relaxed">
            Talk to our counselors today for personalized course recommendations, lab trial sessions, and weekend batch schedules in Tirunelveli.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={onOpenCounselor}
              className="inline-flex items-center justify-center gap-2 font-label-md text-label-md !text-black text-black bg-white hover:bg-neutral-100 active:bg-neutral-200 transition-all px-8 py-3.5 rounded-full shadow-[0_4px_16px_rgba(255,255,255,0.25)] font-bold cursor-pointer"
            >
              <Phone className="w-4 h-4 text-emerald-700" />
              <span className="!text-black text-black font-bold">Talk to Team</span>
            </button>
            <a
              href="/lk-academy-application-form.pdf"
              download="LK-Academy-Application-Form.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-label-md text-label-md !text-white text-white bg-primary-container hover:bg-neutral-900 active:bg-black px-8 py-3.5 rounded-full transition-all border border-white/25 font-semibold shadow-sm hover:border-white/50 cursor-pointer"
            >
              <Download className="w-4 h-4 text-emerald-400" />
              <span>Download Form</span>
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
};
