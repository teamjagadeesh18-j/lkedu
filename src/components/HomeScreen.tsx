import React, { useState, useEffect } from 'react';
import { ASSETS } from '../data/mockData';
import { Marquee } from '@/components/ui/marquee';
import { AnimatedNumber } from '@/components/core/animated-number';
import { MarqueeLogoScroller } from '@/components/ui/marquee-logo-scroller';
import BlockTextReveal from '@/components/ui/block-text-reveal';
import { HorizontalScroller, TestimonialCard } from '@/components/ui/community-testimonial';

// Premier corporate hiring partners with official vector logos & brand gradients
const RECRUITER_LOGOS = [
  {
    src: '/logos/infosys.svg',
    alt: 'Infosys',
    gradient: { from: '#02529c', via: '#007cc3', to: '#003a70' },
  },
  {
    src: '/logos/wipro.svg',
    alt: 'Wipro',
    gradient: { from: '#e11d48', via: '#8b5cf6', to: '#0284c7' },
  },
  {
    src: '/logos/hdfc-bank.svg',
    alt: 'HDFC Bank',
    gradient: { from: '#004c8f', via: '#002e5b', to: '#ed232a' },
  },
  {
    src: '/logos/icici-bank.svg',
    alt: 'ICICI Bank',
    gradient: { from: '#f37021', via: '#b82924', to: '#6b1411' },
  },
  {
    src: '/logos/accenture.svg',
    alt: 'Accenture',
    gradient: { from: '#a100ff', via: '#7500c0', to: '#3d0066' },
  },
  {
    src: '/logos/tcs.svg',
    alt: 'Tata Consultancy Services (TCS)',
    gradient: { from: '#1e3a8a', via: '#0284c7', to: '#0f172a' },
  },
  {
    src: '/logos/deloitte.svg',
    alt: 'Deloitte',
    gradient: { from: '#1a1a1a', via: '#86b817', to: '#000000' },
  },
  {
    src: '/logos/axis-bank.svg',
    alt: 'Axis Bank',
    gradient: { from: '#97144d', via: '#800033', to: '#4d001f' },
  },
];

// Real training center photos extracted from institutional bootcamps & felicitation sessions in glk
const BOOTCAMP_PHOTOS = [
  {
    src: '/campus/hero-bootcamp-lecture-auditorium.jpg',
    alt: 'Interactive Lecture Hall Session with Full Student Audience',
  },
  {
    src: '/campus/hero-bootcamp-speaker-session.jpg',
    alt: 'Industry Expert Addressing Students in Bootcamp Workshop',
  },
  {
    src: '/campus/hero-bootcamp-cert-ceremony.jpg',
    alt: 'Official Certificate Distribution Ceremony on Stage',
  },
  {
    src: '/campus/hero-bootcamp-student-podium.jpg',
    alt: 'Student Seminar and Project Presentation at Podium',
  },
  {
    src: '/campus/hero-bootcamp-faculty-stage.jpg',
    alt: 'Certified Faculty & Academic Dignitaries on Stage',
  },
  {
    src: '/campus/hero-bootcamp-audience-hall.jpg',
    alt: 'Engaged Student Cohort Attending Live Accounting Session',
  },
  {
    src: '/campus/hero-bootcamp-shawl-felicitation.jpg',
    alt: 'Traditional Dignitary Felicitation & Shawl Honor Ceremony',
  },
  {
    src: '/campus/hero-bootcamp-cert-award.jpg',
    alt: 'Student Receiving Course Completion Certificate of Excellence',
  },
  {
    src: '/campus/hero-bootcamp-interactive-seminar.jpg',
    alt: 'Interactive Student Group Presentation & Career Mentorship',
  },
  {
    src: '/campus/hero-bootcamp-leadership-stage.jpg',
    alt: 'Institutional Leadership & Faculty Honoring Student Achievements',
  },
];

// Student reviews with name initials for DP (no profile pictures)
const STUDENT_TESTIMONIALS_DATA = {
  rows: [
    {
      id: 'row1',
      speed: '42s',
      direction: 'left' as const,
      testimonials: [
        {
          id: 't1',
          quote:
            'I was from a non-commerce background, but LK Education’s ledger case studies made voucher entry and bank reconciliation second nature. Placed within 3 weeks!',
          authorName: 'Anitha Ramasamy',
          authorTitle: 'Accounts Assistant at Supreme Textiles',
        },
        {
          id: 't2',
          quote:
            'The GST simulation lab is unmatched. When I attended interviews, I could already demonstrate how to resolve invoice anomalies in GSTR-2B directly in Tally Prime.',
          authorName: 'Muthu Krishnan',
          authorTitle: 'GST Billing Executive at Madurai Logistics',
        },
        {
          id: 't3',
          quote:
            'The official TEPL certification helped my profile stand out among hundreds of B.Com applicants. The trainers are patient, knowledgeable, and genuinely care.',
          authorName: 'Shanmuga Sundaram',
          authorTitle: 'Accounts Associate at KPR Mills',
        },
        {
          id: 't4',
          quote:
            'Mastering TDS deduction rules under Section 194C and e-way bill generation gave me the exact skills needed for modern manufacturing accounts.',
          authorName: 'K. Priyadharshini',
          authorTitle: 'Junior Accountant at TVS Sundaram',
        },
      ],
    },
    {
      id: 'row2',
      speed: '48s',
      direction: 'right' as const,
      testimonials: [
        {
          id: 't5',
          quote:
            'Working on 50+ real Tirunelveli merchant audit files in the lab eliminated my fear of balance sheets. The faculty gives 1-on-1 practical feedback every session.',
          authorName: 'R. Vignesh Kumar',
          authorTitle: 'Audit Executive at CA Sundaram & Co',
        },
        {
          id: 't6',
          quote:
            'PF, ESI, gratuity computation, and salary voucher automation were taught with live portal case studies. I doubled my confidence in corporate payroll.',
          authorName: 'S. Divya Bharathi',
          authorTitle: 'Payroll Specialist at Tirunelveli Infotech',
        },
        {
          id: 't7',
          quote:
            'Stock category creation, batch-wise details with expiry dates, and POS billing helped me manage retail store operations effortlessly from day one.',
          authorName: 'B. Arumugam',
          authorTitle: 'Inventory Controller at Sri Ramachandra Stores',
        },
        {
          id: 't8',
          quote:
            'Generating multi-currency invoices and filing returns with 100% GSTR-1 accuracy was so smooth after completing the Tally Professional certification.',
          authorName: 'N. Meenakshi',
          authorTitle: 'Tax Associate at Sivakasi Packaging',
        },
      ],
    },
  ],
};

import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Download,
  MapPin,
  Clock,
  Phone,
  ShieldCheck,
  Star,
  Users,
  Award,
  BookOpen,
  Monitor,
  GraduationCap,
  MessageSquare,
  QrCode,
  Building2,
  FileSpreadsheet,
  Briefcase,
  HelpCircle,
  Rocket,
  Maximize2,
  X
} from 'lucide-react';
import { WhatsAppIcon } from './ui/WhatsAppIcon';
import { openEnrollWhatsApp } from '../lib/contact';
import { AnimatedRoadmap } from './ui/AnimatedRoadmap';
import { AnimatedLabLearning } from './ui/AnimatedLabLearning';

const HOME_COURSE_THEMES: Record<string, {
  bgHeader: string;
  borderColor: string;
  tagBg: string;
  tagBorder: string;
  tagText: string;
  titleColor: string;
  accent: string;
}> = {
  'tally-essentials': {
    bgHeader: 'bg-[#eef8eb]',
    borderColor: 'border-[#d6ecd0]',
    tagBg: 'bg-white/90',
    tagBorder: 'border-[#c5e6bd]',
    tagText: 'text-[#2d6a26]',
    titleColor: 'text-[#1b5e20]',
    accent: '#2d6a26',
  },
  'tally-professional': {
    bgHeader: 'bg-[#e6f4fd]',
    borderColor: 'border-[#cbe7fb]',
    tagBg: 'bg-white/90',
    tagBorder: 'border-[#bce0fa]',
    tagText: 'text-[#0d6efd]',
    titleColor: 'text-[#0a58ca]',
    accent: '#0d6efd',
  },
  'gst-using-tally-prime': {
    bgHeader: 'bg-[#fef8e7]',
    borderColor: 'border-[#fdeabf]',
    tagBg: 'bg-white/90',
    tagBorder: 'border-[#fcd99a]',
    tagText: 'text-[#b45309]',
    titleColor: 'text-[#92400e]',
    accent: '#b45309',
  },
};

const DEFAULT_HOME_THEME = {
  bgHeader: 'bg-[#eef8eb]',
  borderColor: 'border-[#d6ecd0]',
  tagBg: 'bg-white/90',
  tagBorder: 'border-[#c5e6bd]',
  tagText: 'text-[#2d6a26]',
  titleColor: 'text-[#1b5e20]',
  accent: '#2d6a26',
};

interface HomeScreenProps {
  onNavigate: (path: string) => void;
  onOpenCounselor: (programTitle?: string) => void;
  onOpenVerify: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigate,
  onOpenCounselor,
  onOpenVerify,
}) => {
  // State for FAQ accordion
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [isCertModalOpen, setIsCertModalOpen] = useState<boolean>(false);

  // State for course cards expansion
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);

  // State for Lab Experience Tab (Activity vs Timetable)
  const [activeLabTab, setActiveLabTab] = useState<'activity' | 'timetable'>('activity');

  // State for animated placement stats
  const [statsValue1, setStatsValue1] = useState<number>(0);
  const [statsValue2, setStatsValue2] = useState<number>(0);
  const [statsValue3, setStatsValue3] = useState<number>(0);
  const [statsValue4, setStatsValue4] = useState<number>(0);

  useEffect(() => {
    setStatsValue1(1200);
    setStatsValue2(300);
    setStatsValue3(95);
    setStatsValue4(12);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const [courseCategoryFilter, setCourseCategoryFilter] = useState<string>('All');

  const courses = [
    {
      id: 'tally-essentials',
      title: 'Tally Essentials',
      tag: 'TEPL BASIC',
      category: 'Core Tally',
      badge: 'Most Popular',
      desc: 'Modern fundamentals of recording transactions, ledgers, inventory, and automated reconciliation.',
      duration: '45 Days',
      level: 'Foundation',
      mode: 'In-Lab & Hybrid',
      topics: ['Double entry bookkeeping', 'Stock items & godowns', 'Bank reconciliation', 'Trial balance & Balance sheet']
    },
    {
      id: 'tally-professional',
      title: 'Tally Professional',
      tag: 'ADVANCED ERP',
      category: 'Specialized',
      badge: 'Placement Track',
      desc: 'Advanced accounting, multi-currency transactions, cost center allocations, and financial ratios.',
      duration: '75 Days',
      level: 'Advanced',
      mode: 'Dual-Screen Lab',
      topics: ['Multi-currency adjustments', 'Bill of Materials (BOM)', 'Cost center allocation', 'Executive MIS dashboards']
    },
    {
      id: 'tally-prime-basics',
      title: 'Tally Prime Basics',
      tag: 'STARTER',
      category: 'Core Tally',
      badge: null,
      desc: 'Quick-start primer on Tally Prime interface, company creation, and standard voucher entry.',
      duration: '20 Days',
      level: 'Foundation',
      mode: 'In-Lab',
      topics: ['Tally Prime GoTo interface', 'Company & Ledger creation', 'Cash & bank vouchers', 'Day Book & Trial Balance']
    },
    {
      id: 'principles-of-tally-bookkeeping',
      title: 'Principles of Tally Bookkeeping',
      tag: 'THEORY & LAB',
      category: 'Core Tally',
      badge: null,
      desc: 'Bridge the gap between theoretical debits/credits and computerized ledger postings in Tally Prime.',
      duration: '30 Days',
      level: 'Foundation',
      mode: 'Classroom & Lab',
      topics: ['3 Golden rules of accounting', 'Journal to voucher posting', 'Cash books & petty cash', 'Error rectification']
    },
    {
      id: 'tally-prime-gst-fundamentals',
      title: 'Tally Prime with GST Fundamentals',
      tag: 'GST STARTER',
      category: 'Taxation & GST',
      badge: 'High Demand',
      desc: 'Master statutory goods and service tax invoicing, rate setups, and primary tax return summaries.',
      duration: '45 Days',
      level: 'Intermediate',
      mode: 'GST Sandbox',
      topics: ['CGST, SGST, IGST rates', 'HSN/SAC item mapping', 'Tax invoice & debit notes', 'GSTR-1 & 3B summaries']
    },
    {
      id: 'financial-markets-and-services',
      title: 'Financial Markets and Services',
      tag: 'FINANCE',
      category: 'Specialized',
      badge: null,
      desc: 'Explore capital markets, banking instruments, NBFC operations, and mutual fund services.',
      duration: '30 Days',
      level: 'Intermediate',
      mode: 'Case Studies',
      topics: ['Indian financial system & SEBI', 'Capital markets & IPO mechanics', 'Banking LC/BG products', 'Working capital entries']
    },
    {
      id: 'tdl-essentials',
      title: 'TDL Essentials (Tally Definition Language)',
      tag: 'DEVELOPER',
      category: 'Specialized',
      badge: 'Technical',
      desc: 'Code customized invoices, custom reports, and unique business workflows in Tally Prime.',
      duration: '40 Days',
      level: 'Master',
      mode: 'Coding Lab',
      topics: ['TDL definitions & objects', 'Invoice template customization', 'User defined fields (UDF)', 'Custom TCP deployment']
    },
    {
      id: 'gst-using-tally-prime',
      title: 'GST Using Tally Prime',
      tag: 'TAX RIGOR',
      category: 'Taxation & GST',
      badge: 'Industry Essential',
      desc: 'Practical GSTR-1, GSTR-3B return filing, e-way bills, 2B matching, and reverse charge mechanisms.',
      duration: '35 Days',
      level: 'Master',
      mode: 'Portal Sandbox',
      topics: ['GSTR-2B JSON import matching', 'E-Way bill & E-Invoicing', 'Reverse charge (RCM)', 'GSTR-9 annual compilation']
    },
    {
      id: 'tds-using-tally',
      title: 'TDS Using Tally',
      tag: 'DIRECT TAX',
      category: 'Taxation & GST',
      badge: null,
      desc: 'Direct taxation rules, Form 24Q/26Q workflows, TDS reconciliation, and challan 281 entries.',
      duration: '25 Days',
      level: 'Intermediate',
      mode: 'In-Lab',
      topics: ['Section 194C, 194J, 194I', 'Challan 281 entry & BSR', 'Form 26Q e-TDS text file', 'TRACES Form 16A download']
    },
    {
      id: 'payroll',
      title: 'Payroll',
      tag: 'HR & STATUTORY',
      category: 'Specialized',
      badge: null,
      desc: 'Employee attendance logs, salary structuring, PF/ESI calculations, and automated pay slips.',
      duration: '30 Days',
      level: 'Intermediate',
      mode: 'Simulation',
      topics: ['Pay head configuration', 'EPF & ESI deductions', 'Professional tax slabs', 'Bulk payslip & NEFT sheet']
    },
    {
      id: 'online-offline-courses',
      title: 'Online / Offline Courses',
      tag: 'FLEXIBLE DUAL',
      category: 'Crash & Hybrid',
      badge: 'Hybrid Access',
      desc: 'Flexible dual-mode learning for college students, outstation candidates, and working professionals.',
      duration: 'Flexible',
      level: 'All Levels',
      mode: 'Hybrid Live+Lab',
      topics: ['Live streaming instructor', 'Cloud Tally Prime sandbox', 'Weekend campus lab tests', 'Direct TEPL prep']
    },
    {
      id: 'accounting-basics-crash-course',
      title: 'Accounting Basics Crash Course',
      tag: 'BOOTCAMP',
      category: 'Crash & Hybrid',
      badge: 'Fast Track',
      desc: 'High-velocity bootcamp turning beginners into confident bookkeeping practitioners in 15 days.',
      duration: '15 Days',
      level: 'Foundation',
      mode: 'Crash Drills',
      topics: ['Core accounting equation', 'Quick journal posting', 'Bank statement verification', 'Month-end trial balance']
    }
  ];

  const featuredCourses = [
    courses.find((c) => c.id === 'tally-essentials') || courses[0],
    courses.find((c) => c.id === 'tally-professional') || courses[1],
    courses.find((c) => c.id === 'gst-using-tally-prime') || courses[2],
  ];

  const filteredCourses = courseCategoryFilter === 'All'
    ? courses
    : courses.filter((c) => c.category === courseCategoryFilter);

  const faqs = [
    {
      q: 'Who can enroll in Tally and GST training programs?',
      a: 'Any individual who has completed +2 (HSC), diploma, undergraduate degrees (B.Com, BBA, BSc, BA), or working professionals seeking to upgrade their financial ledger skills can enroll. No prior experience is required for foundation courses.'
    },
    {
      q: 'Is prior commerce or accounting background mandatory?',
      a: 'No, prior accounting knowledge is not mandatory. Our Tally Essentials course starts from the absolute fundamentals of double-entry bookkeeping, debit/credit rules, and basic voucher principles before advancing to corporate accounting.'
    },
    {
      q: 'What is the value of the Tally Education (TEPL) certificate?',
      a: 'The TEPL certificate is issued directly by Tally Solutions Bengaluru and is recognized by thousands of corporations across India and GCC countries. Each certificate carries a cryptographically verifiable QR code linked to the central TEPL candidate directory.'
    },
    {
      q: 'Are weekend and evening batches available for working professionals?',
      a: 'Yes. We operate dedicated evening batches (5:30 PM - 7:30 PM) on weekdays and intensive Saturday & Sunday batches specifically tailored for employed accountants and college students.'
    },
    {
      q: 'How does LK Education assist in job placements?',
      a: 'Our placement cell maintains direct recruitment tie-ups with leading chartered accounting firms, textile manufacturers, and FMCG distributors in Tirunelveli, Tuticorin, Madurai, and Chennai. Certified students receive resume optimization, mock CA interviews, and campus recruitment drives.'
    },
    {
      q: 'What is the course fee structure and are installment options provided?',
      a: 'We maintain student-friendly, transparent pricing with flexible, zero-interest 2 to 3 installment payment plans to ensure quality vocational training remains affordable for every learner.'
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* =========================================================================
          1. HERO SECTION
          ========================================================================= */}
      <section className="max-w-7xl mx-auto w-full px-3 sm:px-6 mb-8 lg:mb-12">
        <div className="relative overflow-hidden bg-surface-container-lowest rounded-3xl p-5 sm:p-10 lg:p-16 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] border border-[#E5E7EB]">
          {/* Ledger Grid Ambient Texture */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundSize: '32px 32px',
              backgroundImage:
                'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
            }}
          />

          <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center gap-5 sm:gap-8">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-neutral-100/90 border border-neutral-200/80 shadow-xs max-w-full">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse shrink-0" />
              <span className="font-label-eyebrow text-[10px] sm:text-xs font-bold text-neutral-500 uppercase tracking-wider truncate">
                INDUSTRY READINESS SYSTEM • TIRUNELVELI
              </span>
            </div>

            {/* Headline matching reference size, badge styling and black/green coloring */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-neutral-900 tracking-[-0.03em] leading-[1.15] sm:leading-[1.08] text-balance max-w-5xl">
              Become{' '}
              <span className="inline-block bg-neutral-950 text-white px-3 sm:px-5 py-0.5 sm:py-1 rounded-xl sm:rounded-2xl align-middle mx-1 font-black shadow-sm tracking-tight text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
                Job-Ready
              </span>{' '}
              in <br className="hidden sm:inline" />
              <span className="text-secondary font-black">3 Months</span> with Tally!
            </h1>

            {/* Subtitle matching reference size, weight and rhythm */}
            <p className="text-sm sm:text-lg md:text-xl text-neutral-600 font-normal leading-relaxed max-w-2xl text-balance">
              Build a strong career in accounting through industry-recognised courses powered by{' '}
              <span className="text-secondary font-bold">Tally Education Pvt. Ltd. (TEPL)</span>.
            </p>

            {/* CTA Buttons - Full width on small mobile, row on tablet & desktop */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-1 w-full sm:w-auto">
              <button
                onClick={() => onNavigate('programs')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-label-md text-label-md text-on-primary bg-primary hover:bg-neutral-800 transition-all px-6 sm:px-8 py-3.5 rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.12)] font-semibold cursor-pointer"
              >
                <span>Explore Programs</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onOpenCounselor()}
                className="w-full sm:w-auto inline-flex items-center justify-center font-label-md text-label-md text-on-surface bg-surface-container-low hover:bg-surface-container transition-all px-6 sm:px-8 py-3.5 rounded-full border border-[#E5E7EB] cursor-pointer"
              >
                Talk to Our Team
              </button>
            </div>

            {/* Real Training Center Photo Marquee Strip */}
            <div className="w-full pt-3 relative overflow-hidden -mx-2 sm:-mx-6 max-w-[calc(100%+1rem)] sm:max-w-[calc(100%+3rem)]">
              <Marquee
                speed={28}
                pauseOnHover={true}
                className="w-full py-1"
              >
                {BOOTCAMP_PHOTOS.map((photo, idx) => (
                  <div
                    key={idx}
                    className="relative shrink-0 h-36 sm:h-48 md:h-56 rounded-xl overflow-hidden border border-[#E5E7EB] shadow-sm bg-surface-container select-none"
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="h-full w-auto object-cover select-none pointer-events-none"
                      loading="eager"
                      draggable={false}
                    />
                  </div>
                ))}
              </Marquee>

              {/* Edge Gradient Mask Overlays for soft cinematic fade */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-surface-container-lowest to-transparent z-10" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-surface-container-lowest to-transparent z-10" />
            </div>

            {/* Clean Trust Badges */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-3 sm:gap-8 pt-2 text-xs sm:text-sm text-neutral-600 font-medium w-full">
              <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2">
                <GraduationCap className="w-4 h-4 text-neutral-500 shrink-0" />
                <span className="truncate">Multi-day Bootcamps</span>
              </div>
              <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2">
                <Users className="w-4 h-4 text-neutral-500 shrink-0" />
                <span className="truncate">Industry Experts</span>
              </div>
              <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2">
                <Rocket className="w-4 h-4 text-neutral-500 shrink-0" />
                <span className="truncate">Project Ready</span>
              </div>
              <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2">
                <CheckCircle2 className="w-4 h-4 text-neutral-500 shrink-0" />
                <span className="truncate">Corporate Standard</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. STAT STRIP CARD
          ========================================================================= */}
      <section className="max-w-7xl mx-auto w-full px-3 sm:px-6 mb-8 lg:mb-12">
        <div className="bg-surface-container-lowest rounded-2xl p-5 sm:p-8 lg:p-10 shadow-[0_4px_20px_-2px_rgba(17,24,39,0.04)] border border-[#E5E7EB]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {/* Stat 1: 1,200+ Students Placed */}
            <div className="flex flex-col gap-2 p-4 bg-surface-container-low/60 rounded-xl border border-transparent hover:border-[#E5E7EB] transition-colors">
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
                Students Placed
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Placed in leading firms & corporate sectors
              </span>
            </div>

            {/* Stat 2: 300+ Hiring Partners */}
            <div className="flex flex-col gap-2 p-4 bg-surface-container-low/60 rounded-xl border border-transparent hover:border-[#E5E7EB] transition-colors">
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
                Hiring Partners
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Active enterprise accounting network
              </span>
            </div>

            {/* Stat 3: 95% Placement Success Rate */}
            <div className="flex flex-col gap-2 p-4 bg-surface-container-low/60 rounded-xl border border-transparent hover:border-[#E5E7EB] transition-colors">
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
                Placement Success Rate
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Verified candidate job transition
              </span>
            </div>

            {/* Stat 4: 12+ Years of Placement Support */}
            <div className="flex flex-col gap-2 p-4 bg-surface-container-low/60 rounded-xl border border-transparent hover:border-[#E5E7EB] transition-colors">
              <div className="flex items-baseline gap-1">
                <AnimatedNumber
                  value={statsValue4}
                  className="font-display text-headline-lg lg:text-display text-on-surface font-extrabold tracking-tight tabular-nums"
                  springOptions={{
                    bounce: 0,
                    duration: 2000,
                  }}
                />
                <span className="font-display text-headline-md text-secondary font-bold">+</span>
              </div>
              <span className="font-title-sm text-title-sm text-on-surface font-semibold">
                Years of Placement Support
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Dedicated counseling & lab mentorship
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2B. HIRING PARTNERS MARQUEE SCROLLER
          ========================================================================= */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 mb-8 lg:mb-12">
        <MarqueeLogoScroller
          title="Top Corporate Hiring Partners"
          description="Leading multinational technology enterprises, nationalized banking networks, and Big-4 audit consultancies actively recruiting LK Educations certified candidates."
          logos={RECRUITER_LOGOS}
          speed="normal"
          className="bg-surface-container-lowest border border-[#E5E7EB] shadow-[0_4px_20px_-2px_rgba(17,24,39,0.04)] rounded-2xl"
        />
      </section>

      {/* =========================================================================
          3. COURSES SECTION ("Accounting and Tally Courses Built for Real Jobs")
          ========================================================================= */}
      <section className="max-w-7xl mx-auto w-full px-3 sm:px-6 mb-8 lg:mb-12">
        <div className="bg-surface-container-lowest rounded-2xl sm:rounded-3xl p-5 sm:p-10 lg:p-16 shadow-[0_4px_20px_-2px_rgba(17,24,39,0.04)] border border-[#E5E7EB]">
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-3 mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low border border-[#E5E7EB]">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              <span className="font-label-eyebrow text-label-eyebrow text-on-surface-variant uppercase tracking-wider">
                FEATURED CURRICULUM
              </span>
            </div>

            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold text-balance">
              Accounting and Tally Courses Built for Real Jobs
            </h2>

            <p className="font-body-md text-body-md text-on-surface-variant">
              Industry-standard modules designed with practical ledger exercises and live GST portal entries.
            </p>
          </div>

          {/* Grid of 3 Featured Course Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredCourses.map((course) => {
              const theme = HOME_COURSE_THEMES[course.id] || DEFAULT_HOME_THEME;
              const isExpanded = expandedCourse === course.id;

              return (
                <div
                  key={course.id}
                  className={`flex flex-col rounded-3xl border ${theme.borderColor} overflow-hidden bg-white shadow-[0_4px_20px_-2px_rgba(17,24,39,0.05)] hover:shadow-[0_20px_40px_-4px_rgba(17,24,39,0.12)] transition-all duration-300 hover:-translate-y-1.5 group`}
                >
                  {/* Top Tinted Pastel Header matching Programs screen */}
                  <div className={`${theme.bgHeader} p-6 sm:p-7 border-b ${theme.borderColor} flex flex-col gap-3 min-h-[145px] sm:min-h-[155px]`}>
                    {/* Top Tags/Pills & Badge */}
                    <div className="flex items-center justify-between gap-2">
                      <span className={`px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-bold ${theme.tagBg} ${theme.tagBorder} ${theme.tagText} border shadow-xs tracking-wider uppercase`}>
                        {course.tag}
                      </span>
                      {course.badge && (
                        <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200/70 text-[10px] sm:text-[11px] font-semibold">
                          {course.badge}
                        </span>
                      )}
                    </div>

                    {/* Course Title */}
                    <h3 className={`font-black text-xl sm:text-2xl tracking-tight leading-snug mt-1 ${theme.titleColor}`}>
                      {course.title}
                    </h3>
                  </div>

                  {/* Bottom White Body */}
                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow gap-5 bg-white">
                    <div className="space-y-4">
                      <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                        {course.desc}
                      </p>

                      {/* Metadata tags (Duration removed) */}
                      <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                        <span className="px-2.5 py-1 rounded-lg bg-neutral-50 border border-neutral-200/80 font-medium text-neutral-700">
                          Level: {course.level}
                        </span>
                        <span className="px-2.5 py-1 rounded-lg bg-neutral-50 border border-neutral-200/80 font-medium text-neutral-700">
                          Modes: {course.mode}
                        </span>
                      </div>

                      {/* Expanded details */}
                      {isExpanded && (
                        <div className="mt-3 pt-3 border-t border-neutral-100 space-y-1.5 animate-in fade-in duration-150">
                          <span className="text-[11px] font-bold text-neutral-800 uppercase tracking-wider block">
                            Key Modules:
                          </span>
                          {course.topics.map((t, idx) => (
                            <div key={idx} className="flex items-center gap-1.5 text-xs text-neutral-700">
                              <Check className="w-3.5 h-3.5 flex-shrink-0" style={{ color: theme.accent }} />
                              <span>{t}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Card Bottom Bar */}
                    <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setExpandedCourse(isExpanded ? null : course.id)}
                        className="text-xs font-bold hover:underline flex items-center gap-1 transition-colors px-2.5 py-1.5 rounded-lg hover:bg-neutral-50"
                        style={{ color: theme.accent }}
                      >
                        <span>{isExpanded ? 'Hide Details' : 'Know more'}</span>
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>

                      <button
                        type="button"
                        onClick={() => openEnrollWhatsApp(course.title)}
                        className="px-4 py-2 rounded-full bg-black hover:bg-neutral-800 text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1.5"
                      >
                        <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Enroll Now</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Prominent Redirect Button to the Entire Programs Page */}
          <div className="flex flex-col items-center justify-center gap-3 mt-12 pt-8 border-t border-[#E5E7EB]">
            <button
              type="button"
              onClick={() => onNavigate('programs')}
              className="inline-flex items-center gap-2.5 font-bold text-sm sm:text-base text-white bg-black hover:bg-neutral-800 transition-all px-8 sm:px-10 py-4 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore All 12 Courses & Full Syllabi</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
            </button>
            <p className="text-xs text-neutral-500 text-center">
              Explore specialized certifications in TDS, Corporate Payroll, TDL, BRS, and Crash Modules on the Programs page.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. 3-STEP PROGRESSION ("Your Roadway from Learner to Corporate Job")
          ========================================================================= */}
      <section className="max-w-7xl mx-auto w-full px-3 sm:px-6 mb-8 lg:mb-12">
        <div className="bg-surface-container-lowest rounded-2xl sm:rounded-3xl p-5 sm:p-10 lg:p-16 shadow-[0_4px_20px_-2px_rgba(17,24,39,0.04)] border border-[#E5E7EB] overflow-hidden">
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-3 mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low border border-[#E5E7EB]">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              <span className="font-label-eyebrow text-label-eyebrow text-on-surface-variant uppercase tracking-wider">
                STEP-BY-STEP PROGRESSION
              </span>
            </div>

            <BlockTextReveal
              as="h2"
              text={"Your Roadway From Learner\nto Corporate Job"}
              align="center"
              textColor="#1a1c1c"
              blockColor="#006c49"
              revealType="lines"
              direction="left"
              speed={50}
              font={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(28px, 4vw, 42px)",
                lineHeight: "1.25em",
                letterSpacing: "-0.025em",
              }}
            />

            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl text-balance">
              Experience our proven step-by-step pathway from your first spark of curiosity, through practical dual-screen lab mastery, to earning verifiable TEPL certification and landing your dream job.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: 3 Structured Progress Steps */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              {/* Step 1 */}
              <div className="bg-surface-container-low rounded-2xl p-6 sm:p-7 border border-[#E5E7EB] flex flex-col gap-3 hover:border-black/20 transition-all">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center font-bold text-on-surface text-xs border border-[#E5E7EB] shadow-xs">
                    01
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-secondary px-2.5 py-0.5 rounded-full bg-secondary/10">
                    ADMISSION & COUNSELING
                  </span>
                </div>
                <h3 className="font-title-lg text-title-lg font-bold text-on-surface">
                  Choose Your Course with Confidence
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Consult our career counselors to pick a beginner or advanced accounting specialization suited to your academic background.
                </p>
                <div className="pt-2 border-t border-[#E5E7EB] flex flex-wrap items-center justify-between gap-2">
                  <button
                    onClick={() => onOpenCounselor()}
                    className="text-xs font-semibold text-secondary hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                    <span>Free Career Counseling</span>
                  </button>
                  <button
                    onClick={() => openEnrollWhatsApp('Tally Essentials')}
                    className="text-xs font-semibold text-emerald-700 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Enroll on WhatsApp</span>
                  </button>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-surface-container-low rounded-2xl p-6 sm:p-7 border border-[#E5E7EB] flex flex-col gap-3 hover:border-black/20 transition-all">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center font-bold text-on-surface text-xs border border-[#E5E7EB] shadow-xs">
                    02
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-black px-2.5 py-0.5 rounded-full bg-black/5">
                    PRACTICAL TRAINING INSTITUTE
                  </span>
                </div>
                <h3 className="font-title-lg text-title-lg font-bold text-on-surface">
                  Hands-On Desktop Lab Practice
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Work on 50+ real Tirunelveli business ledger cases in our dedicated desktop accounting lab with 1-on-1 trainer feedback.
                </p>
                <div className="pt-2 border-t border-[#E5E7EB]">
                  <button
                    onClick={() => onNavigate('programs')}
                    className="text-xs font-semibold text-secondary hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                    <span>Explore 12 Course Syllabi</span>
                  </button>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-surface-container-low rounded-2xl p-6 sm:p-7 border border-[#E5E7EB] flex flex-col gap-3 hover:border-black/20 transition-all">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center font-bold text-on-surface text-xs border border-[#E5E7EB] shadow-xs">
                    03
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 px-2.5 py-0.5 rounded-full bg-emerald-100">
                    CERTIFICATION & JOB SUMMIT
                  </span>
                </div>
                <h3 className="font-title-lg text-title-lg font-bold text-on-surface">
                  Get Certified & Placed in Top Roles
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Pass the official Tally Education TEPL exam, receive your verifiable digital credential, and attend guided campus interviews for accounting jobs.
                </p>
                <div className="pt-2 border-t border-[#E5E7EB]">
                  <button
                    onClick={onOpenVerify}
                    className="text-xs font-semibold text-secondary hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                    <span>Verify Credential Authenticity</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Looping Animated Illustration (Seamlessly blending onto white canvas) */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center">
              <AnimatedRoadmap />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. THE LK ADVANTAGE / SPLIT SECTION WITH STUDENT PORTAL PREVIEW
          ========================================================================= */}
      <section className="max-w-7xl mx-auto w-full px-3 sm:px-6 mb-8 lg:mb-12">
        <div className="bg-surface-container-lowest rounded-2xl sm:rounded-3xl p-5 sm:p-10 lg:p-16 shadow-[0_4px_20px_-2px_rgba(17,24,39,0.04)] border border-[#E5E7EB]">
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-3 mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low border border-[#E5E7EB]">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              <span className="font-label-eyebrow text-label-eyebrow text-on-surface-variant uppercase tracking-wider">
                THE LK ADVANTAGE
              </span>
            </div>

            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold text-balance">
              Learn with Purpose. Grow with Confidence. Succeed with Skill.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Side: 6 feature cards + 1 span-2 installment card */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Feature 1 */}
              <div className="p-5 bg-surface-container-low rounded-xl border border-[#E5E7EB] flex flex-col gap-2">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-secondary shadow-sm">
                  <Monitor className="w-4 h-4" />
                </div>
                <h4 className="font-title-sm text-title-sm font-bold text-on-surface">Hybrid Learning Modules</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Classroom and key laboratory experience coupled with digital review material.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-5 bg-surface-container-low rounded-xl border border-[#E5E7EB] flex flex-col gap-2">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-secondary shadow-sm">
                  <FileSpreadsheet className="w-4 h-4" />
                </div>
                <h4 className="font-title-sm text-title-sm font-bold text-on-surface">Real-Life Case Studies</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Practical ledger exercises derived from actual Tirunelveli traders and firms.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-5 bg-surface-container-low rounded-xl border border-[#E5E7EB] flex flex-col gap-2">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-secondary shadow-sm">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <h4 className="font-title-sm text-title-sm font-bold text-on-surface">Practical Focused Training</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  80% practice and 20% theory ensuring muscle memory for high typing speed.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="p-5 bg-surface-container-low rounded-xl border border-[#E5E7EB] flex flex-col gap-2">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-secondary shadow-sm">
                  <Award className="w-4 h-4" />
                </div>
                <h4 className="font-title-sm text-title-sm font-bold text-on-surface">TEPL Certification</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Authorized training and direct testing certified by Tally Education Bangalore.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="p-5 bg-surface-container-low rounded-xl border border-[#E5E7EB] flex flex-col gap-2">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-secondary shadow-sm">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="font-title-sm text-title-sm font-bold text-on-surface">GST Simulation Lab</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Experience professionals, data preparation, & mock bill generation safely.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="p-5 bg-surface-container-low rounded-xl border border-[#E5E7EB] flex flex-col gap-2">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-secondary shadow-sm">
                  <Users className="w-4 h-4" />
                </div>
                <h4 className="font-title-sm text-title-sm font-bold text-on-surface">Senior Industry Trainers</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Dedicated mentoring preference with 10+ years in commercial accounting.
                </p>
              </div>

              {/* Span 2 Card: Affordable Fees */}
              <div className="sm:col-span-2 p-5 bg-surface-container-low rounded-xl border border-[#E5E7EB] flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-secondary shadow-sm shrink-0 mt-0.5">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-title-sm text-title-sm font-bold text-on-surface">Affordable Fees with Installment Plans</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Empowering students with zero-interest suggested payment options for every family background.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side: Animated Lab Illustration + Interactive Student Portal / Timetable */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              {/* Animated Editorial Line-Art Drawing (Seamlessly blending onto white canvas) */}
              <div className="flex flex-col items-center justify-center">
                <AnimatedLabLearning />
              </div>

              {/* Interactive Portal Activity & Lab Timetable Switcher */}
              <div className="bg-surface-container-low rounded-2xl p-5 sm:p-6 border border-[#E5E7EB] flex flex-col gap-4 shadow-sm">
                <div className="flex items-center justify-between pb-3 border-b border-[#E5E7EB]">
                  {/* Tab Selector */}
                  <div className="flex items-center gap-1.5 p-1 bg-white rounded-xl border border-[#E5E7EB]">
                    <button
                      type="button"
                      onClick={() => setActiveLabTab('activity')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        activeLabTab === 'activity'
                          ? 'bg-neutral-900 text-white shadow-xs'
                          : 'text-on-surface-variant hover:text-on-surface'
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Student Activity</span>
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveLabTab('timetable')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        activeLabTab === 'timetable'
                          ? 'bg-neutral-900 text-white shadow-xs'
                          : 'text-on-surface-variant hover:text-on-surface'
                      }`}
                    >
                      <span>Lab Timetable</span>
                    </button>
                  </div>
                  <span className="text-[11px] font-mono text-on-surface-variant hidden sm:inline">
                    {activeLabTab === 'activity' ? 'Last login: 12m ago' : 'Batch Switcher'}
                  </span>
                </div>

                {activeLabTab === 'activity' ? (
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-[#E5E7EB]">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 text-secondary flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-on-surface">Voucher Entry practice completed</p>
                        <p className="text-[11px] text-on-surface-variant">100% accuracy on Tamil Nadu GST ledger - 45 opp</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-[#E5E7EB]">
                      <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                        <Clock className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-on-surface">Mock interview scheduled</p>
                        <p className="text-[11px] text-on-surface-variant">Today with CA Senthil Nathan Special Advisor</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-[#E5E7EB]">
                      <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center shrink-0 mt-0.5">
                        <Award className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-on-surface">TEPL Certificate Award</p>
                        <p className="text-[11px] text-on-surface-variant">Issued to K. Sivaraman - Grade: Distinction</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2.5">
                    <div className="p-3 bg-white rounded-xl border border-[#E5E7EB] flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-on-surface">Mon & Wed • 10:00 AM</p>
                        <p className="text-[11px] text-on-surface-variant">Tally Cloud Starter Management</p>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-surface-container text-[11px] font-mono text-on-surface font-semibold">
                        Lab 1
                      </span>
                    </div>

                    <div className="p-3 bg-white rounded-xl border border-[#E5E7EB] flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-on-surface">Tue & Thu • 02:00 PM</p>
                        <p className="text-[11px] text-on-surface-variant">GST with GSTR-2B Reporting</p>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-surface-container text-[11px] font-mono text-on-surface font-semibold">
                        Lab 2
                      </span>
                    </div>

                    <div className="p-3 bg-white rounded-xl border border-[#E5E7EB] flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-on-surface">Saturday • 11:00 AM</p>
                        <p className="text-[11px] text-on-surface-variant">Practical Test & Ledger Review</p>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-surface-container text-[11px] font-mono text-on-surface font-semibold">
                        Auditorium
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. PLACEMENT SUPPORT THAT CONNECTS YOU TO EMPLOYERS
          ========================================================================= */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 mb-8 lg:mb-12">
        <div className="bg-surface-container-lowest rounded-lg p-8 sm:p-12 lg:p-16 shadow-[0_4px_20px_-2px_rgba(17,24,39,0.04)] border border-[#E5E7EB]">
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-3 mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low border border-[#E5E7EB]">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              <span className="font-label-eyebrow text-label-eyebrow text-on-surface-variant uppercase tracking-wider">
                CAREER OUTCOMES
              </span>
            </div>

            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold text-balance">
              Placement Support That Connects You to Employers
            </h2>

            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              From Tirunelveli micro-enterprises to Madurai corporate accounting teams, we prepare our learners for immediate corporate recruitment.
            </p>
          </div>

          {/* 4 Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center pb-10 border-b border-[#E5E7EB]">
            <div>
              <span className="font-display text-headline-lg lg:text-display font-extrabold text-on-surface">
                92%
              </span>
              <p className="font-title-sm text-title-sm text-on-surface-variant font-medium mt-1">
                Placement Rate
              </p>
            </div>
            <div>
              <span className="font-display text-headline-lg lg:text-display font-extrabold text-on-surface">
                150<span className="text-secondary">+</span>
              </span>
              <p className="font-title-sm text-title-sm text-on-surface-variant font-medium mt-1">
                Hiring Partners
              </p>
            </div>
            <div>
              <span className="font-display text-headline-lg lg:text-display font-extrabold text-on-surface">
                14
              </span>
              <p className="font-title-sm text-title-sm text-on-surface-variant font-medium mt-1">
                Days Avg. Wait
              </p>
            </div>
            <div>
              <span className="font-display text-headline-lg lg:text-display font-extrabold text-secondary">
                ₹3.2L
              </span>
              <p className="font-title-sm text-title-sm text-on-surface-variant font-medium mt-1">
                Avg. Starting CTC
              </p>
            </div>
          </div>

          {/* Recruiting Employer Logos / Chips */}
          <div className="pt-8 flex flex-col items-center gap-4">
            <span className="text-xs uppercase tracking-widest text-on-surface-variant font-semibold">
              RECRUITING PARTNERS IN SOUTHERN TAMIL NADU
            </span>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {[
                'SRI BALAJI AUDIT',
                'SUPREME RETAIL GROUP',
                'TIRUNELVELI SPINNERS',
                'MADURAI FREIGHT LOGISTICS',
                'KANNAN & ASSOCIATES CA',
              ].map((partner) => (
                <div
                  key={partner}
                  className="px-4 py-2 rounded-xl bg-surface-container-low border border-[#E5E7EB] font-label-sm text-label-sm font-bold text-on-surface flex items-center gap-2"
                >
                  <Building2 className="w-3.5 h-3.5 text-secondary" />
                  <span>{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. EARN A TALLY EDUCATION (TEPL) CERTIFICATE SECTION
          ========================================================================= */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 mb-8 lg:mb-12">
        <div className="bg-surface-container-lowest rounded-lg p-8 sm:p-12 lg:p-16 shadow-[0_4px_20px_-2px_rgba(17,24,39,0.04)] border border-[#E5E7EB]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Info & Bullets */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-surface-container-low font-label-eyebrow text-label-eyebrow font-bold text-secondary uppercase tracking-wider border border-[#E5E7EB]">
                  TEPL AUTHORIZED PARTNER
                </span>
              </div>

              <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold text-balance">
                Earn a Tally Education (TEPL) Certificate
              </h2>

              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                LK Educations is an authorized training partner of Tally Education Pvt. Ltd. (TEPL). Our programs prepare candidates to sit for the direct TEPL online assessment, ensuring credentials that employers across India and the Middle East recognize instantly.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="font-body-sm text-body-sm text-on-surface">
                    Tamper-proof verifiable QR code for instant employer verification
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="font-body-sm text-body-sm text-on-surface">
                    National and Gulf recognition across commercial firms and MSMEs
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="font-body-sm text-body-sm text-on-surface">
                    Direct candidate portal access with official courseware from Bengaluru
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenVerify}
                  className="inline-flex items-center gap-2 font-label-md text-label-md text-white bg-black hover:bg-neutral-800 transition-all px-6 py-3 rounded-full font-semibold shadow-sm"
                >
                  <span>Verify a Credential</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Authentic Certificate Card */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full max-w-md mx-auto">
                {/* Certificate Container with subtle glow and premium frame */}
                <div className="relative group">
                  {/* Subtle ambient glow behind card */}
                  <div className="absolute -inset-1.5 bg-gradient-to-tr from-indigo-500/20 via-blue-500/15 to-purple-500/20 rounded-[28px] blur-xl opacity-70 group-hover:opacity-100 transition duration-500 pointer-events-none" />

                  {/* Main Card Frame */}
                  <div className="relative bg-white rounded-[26px] p-3 sm:p-4 border border-[#E5E7EB] shadow-[0_12px_36px_-6px_rgba(0,0,0,0.12)] transition-all duration-300 hover:shadow-[0_20px_45px_-6px_rgba(0,0,0,0.18)]">
                    
                    {/* Header bar above certificate */}
                    <div className="flex items-center justify-between px-2 pb-2.5 mb-2 border-b border-neutral-100 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="flex h-2 w-2 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="font-bold text-[11px] tracking-wider uppercase text-neutral-800">
                          Original Course Certificate
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setIsCertModalOpen(true)}
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-secondary hover:text-black transition-colors"
                        title="Click to view full certificate"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Enlarge</span>
                      </button>
                    </div>

                    {/* Certificate Image */}
                    <div
                      onClick={() => setIsCertModalOpen(true)}
                      className="cursor-pointer overflow-hidden rounded-2xl bg-neutral-50 flex items-center justify-center group/img relative"
                    >
                      <img
                        src="/certificate-cropped.png"
                        alt="Original LK Education Tally Professional Certificate"
                        className="w-full h-auto object-contain transition-transform duration-300 group-hover/img:scale-[1.015]"
                        loading="eager"
                      />
                      
                      {/* Hover Overlay Hint */}
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                        <span className="bg-black/80 text-white px-3.5 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm inline-flex items-center gap-1.5 shadow-md">
                          <Maximize2 className="w-3.5 h-3.5" />
                          Click to preview high-res
                        </span>
                      </div>
                    </div>

                    {/* 4 Feature Badges matching the Certificate */}
                    <div className="grid grid-cols-4 gap-1.5 pt-3 mt-1 border-t border-neutral-100 text-center">
                      <div className="flex flex-col items-center p-1 rounded-lg bg-indigo-50/70">
                        <Star className="w-3.5 h-3.5 text-indigo-600 mb-0.5" />
                        <span className="text-[10px] font-bold text-indigo-950 leading-tight">Certified</span>
                      </div>
                      <div className="flex flex-col items-center p-1 rounded-lg bg-indigo-50/70">
                        <GraduationCap className="w-3.5 h-3.5 text-indigo-600 mb-0.5" />
                        <span className="text-[10px] font-bold text-indigo-950 leading-tight">Industry Ready</span>
                      </div>
                      <div className="flex flex-col items-center p-1 rounded-lg bg-indigo-50/70">
                        <ShieldCheck className="w-3.5 h-3.5 text-indigo-600 mb-0.5" />
                        <span className="text-[10px] font-bold text-indigo-950 leading-tight">Verified</span>
                      </div>
                      <div className="flex flex-col items-center p-1 rounded-lg bg-indigo-50/70">
                        <Award className="w-3.5 h-3.5 text-indigo-600 mb-0.5" />
                        <span className="text-[10px] font-bold text-indigo-950 leading-tight">Professional</span>
                      </div>
                    </div>

                    {/* Quick Verification Footer */}
                    <div className="mt-2.5 pt-2 border-t border-dashed border-neutral-200 flex items-center justify-between text-xs px-1">
                      <span className="text-[11px] text-neutral-500 font-medium">
                        Certificate ID: <strong className="text-neutral-800 font-mono font-bold">LK-1024</strong>
                      </span>
                      <button
                        type="button"
                        onClick={onOpenVerify}
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-secondary hover:underline"
                      >
                        <QrCode className="w-3.5 h-3.5" />
                        Verify Credential
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-3 text-center">
                  <button
                    type="button"
                    onClick={() => onNavigate('certifications')}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-secondary hover:text-black transition-colors py-1 px-3 rounded-full hover:bg-neutral-100"
                  >
                    <span>Explore All 7 Certificate Programs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. INSIDE OUR TIRUNELVELI TRAINING CENTRE
          ========================================================================= */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 mb-8 lg:mb-12">
        <div className="bg-surface-container-lowest rounded-lg p-8 sm:p-12 lg:p-16 shadow-[0_4px_20px_-2px_rgba(17,24,39,0.04)] border border-[#E5E7EB]">
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low border border-[#E5E7EB]">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              <span className="font-label-eyebrow text-label-eyebrow text-on-surface-variant uppercase tracking-wider">
                OUR CAMPUS & LABS
              </span>
            </div>

            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
              Inside Our Tirunelveli Training Centre
            </h2>

            <p className="font-body-md text-body-md text-on-surface-variant">
              Designed for quiet focus, hands-on ledger entries, and collaborative problem-solving.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Campus Photo 1: Hands-on Practical Lab */}
            <div className="flex flex-col gap-2.5 group">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-surface-container border border-[#E5E7EB] relative">
                <img
                  src="/campus/hero-bootcamp-speaker-session.jpg"
                  alt="Practical Hands-on Accounting Workshop"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <h4 className="font-title-sm text-title-sm font-bold text-on-surface">Practical Computer Lab</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Configured with latest Tally Prime & 1-on-1 mentor guidance
                </p>
              </div>
            </div>

            {/* Campus Photo 2: Dedicated Lecture Hall */}
            <div className="flex flex-col gap-2.5 group">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-surface-container border border-[#E5E7EB] relative">
                <img
                  src="/campus/lecture-hall-session.jpg"
                  alt="Dedicated Seminar & Lecture Hall"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <h4 className="font-title-sm text-title-sm font-bold text-on-surface">Dedicated Lecture Hall</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Interactive audio-visual display for taxation theory & GST
                </p>
              </div>
            </div>

            {/* Campus Photo 3: Interactive Seminar & Student Presentations */}
            <div className="flex flex-col gap-2.5 group">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-surface-container border border-[#E5E7EB] relative">
                <img
                  src="/campus/student-seminar-podium.jpg"
                  alt="Interactive Seminar & Presentation Hall"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <h4 className="font-title-sm text-title-sm font-bold text-on-surface">Interactive Seminar Hall</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Student presentations, career guidance & interview drills
                </p>
              </div>
            </div>

            {/* Campus Photo 4: Official Certificate Convocation */}
            <div className="flex flex-col gap-2.5 group">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-surface-container border border-[#E5E7EB] relative">
                <img
                  src="/campus/certificate-distribution.jpg"
                  alt="Certificate Convocation & Felicitation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <h4 className="font-title-sm text-title-sm font-bold text-on-surface">Certificate Convocation</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Official TEPL certificate distribution & student honors
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. STUDENT TESTIMONIALS ("What Our Students Say")
          ========================================================================= */}
      <section id="testimonials" className="max-w-7xl mx-auto w-full px-4 sm:px-6 mb-8 lg:mb-12">
        <div className="bg-surface-container-lowest rounded-lg p-6 sm:p-10 lg:p-14 shadow-[0_4px_20px_-2px_rgba(17,24,39,0.04)] border border-[#E5E7EB] overflow-hidden">
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-3 mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low border border-[#E5E7EB]">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              <span className="font-label-eyebrow text-label-eyebrow text-on-surface-variant uppercase tracking-wider">
                STUDENT TESTIMONIALS
              </span>
            </div>

            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
              What Our Students Say
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 max-w-xl">
              Hear from graduates placed in leading accounting, audit, and tax firms across Tamil Nadu.
            </p>
          </div>

          <div className="flex flex-col gap-5 w-full overflow-hidden">
            {STUDENT_TESTIMONIALS_DATA.rows.map((row) => (
              <HorizontalScroller
                key={row.id}
                speed={row.speed}
                direction={row.direction}
              >
                {row.testimonials.map((t) => (
                  <TestimonialCard
                    key={t.id}
                    quote={t.quote}
                    authorName={t.authorName}
                    authorTitle={t.authorTitle}
                  />
                ))}
              </HorizontalScroller>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          10. FREQUENTLY ASKED QUESTIONS (ACCORDION)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto w-full px-3 sm:px-6 mb-8 lg:mb-12">
        <div className="bg-surface-container-lowest rounded-2xl sm:rounded-3xl p-5 sm:p-10 lg:p-16 shadow-[0_4px_20px_-2px_rgba(17,24,39,0.04)] border border-[#E5E7EB]">
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-3 mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low border border-[#E5E7EB]">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              <span className="font-label-eyebrow text-label-eyebrow text-on-surface-variant uppercase tracking-wider">
                GET EVERY DETAIL
              </span>
            </div>

            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-surface-container-low rounded-2xl border border-[#E5E7EB] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-title-sm text-title-sm font-bold text-on-surface cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-on-surface-variant shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-on-surface-variant shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-on-surface-variant font-body-sm text-body-sm leading-relaxed border-t border-[#E5E7EB]/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* WhatsApp Guidance Card */}
          <div className="max-w-3xl mx-auto mt-8 p-4 sm:p-5 rounded-2xl bg-surface-container-low border border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-secondary flex items-center justify-center shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <p className="font-title-sm text-title-sm font-bold text-on-surface">Still have questions?</p>
                <p className="text-xs text-on-surface-variant">Our academic advisors are available on WhatsApp for quick guidance.</p>
              </div>
            </div>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-secondary hover:bg-emerald-800 text-white font-label-md text-label-md font-semibold transition-all shadow-sm flex items-center justify-center gap-2 shrink-0 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          11. CLOSING HIGH CONTRAST BANNER
          ========================================================================= */}
      <section className="max-w-7xl mx-auto w-full px-3 sm:px-6 mb-12">
        <div className="bg-primary text-on-primary rounded-2xl sm:rounded-3xl p-6 sm:p-12 lg:p-16 text-center flex flex-col items-center gap-6 shadow-[0_12px_32px_-4px_rgba(0,0,0,0.18)]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm max-w-full">
            <span className="w-2 h-2 rounded-full bg-secondary-fixed shrink-0" />
            <span className="font-label-eyebrow text-[10px] sm:text-xs text-surface-bright uppercase tracking-wider truncate">
              ADMISSIONS OPEN • TIRUNELVELI JUNCTION
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-on-primary tracking-tight max-w-3xl text-balance">
            Ready to Start Your Accounting Career?
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-on-primary/80 max-w-2xl leading-relaxed">
            Join 2,500+ successful learners at Tirunelveli's premier vocational accounts academy. Batches start every Monday.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => onOpenCounselor()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-label-md text-label-md !text-black text-black bg-white hover:bg-neutral-100 active:bg-neutral-200 transition-all px-6 sm:px-8 py-3.5 rounded-full shadow-[0_4px_16px_rgba(255,255,255,0.25)] font-bold cursor-pointer"
            >
              <Phone className="w-4 h-4 text-emerald-700" />
              <span className="!text-black text-black font-bold">Talk to Team</span>
            </button>
            <a
              href="/lk-academy-application-form.pdf"
              download="LK-Academy-Application-Form.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-label-md text-label-md !text-white text-white bg-primary-container hover:bg-neutral-900 active:bg-black px-6 sm:px-8 py-3.5 rounded-full transition-all border border-white/25 font-semibold shadow-sm hover:border-white/50 cursor-pointer"
            >
              <Download className="w-4 h-4 text-emerald-400" />
              <span>Download Form</span>
            </a>
          </div>

          {/* Location & Time Footer Markers */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-white/15 text-xs text-white/70">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>182, S. N. High Road, Tirunelveli</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>Mon - Sat: 10:00 AM - 7:00 PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* High-Resolution Certificate Lightbox Modal */}
      {isCertModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setIsCertModalOpen(false)}
        >
          <div
            className="relative bg-white rounded-3xl max-w-lg w-full p-4 sm:p-6 shadow-2xl border border-neutral-200 my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-neutral-100 mb-3">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-indigo-600" />
                <h3 className="font-bold text-sm text-neutral-900">
                  LK Education Course Certificate • Tally Professional
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsCertModalOpen(false)}
                className="p-1 rounded-full text-neutral-400 hover:text-neutral-800 hover:bg-neutral-100 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="rounded-2xl overflow-hidden bg-neutral-50 border border-neutral-200/80 shadow-inner flex items-center justify-center">
              <img
                src="/certificate-cropped.png"
                alt="Original LK Education Certificate"
                className="w-full h-auto max-h-[72vh] object-contain"
              />
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="text-neutral-600">
                <span className="block font-semibold text-neutral-800">LK Education Official Specimen</span>
                <span>Includes cryptographically verifiable QR Code & ID: LK-1024</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsCertModalOpen(false);
                  onOpenVerify();
                }}
                className="px-4 py-2 rounded-full bg-black text-white font-semibold hover:bg-neutral-800 transition-colors inline-flex items-center gap-1.5"
              >
                <span>Verify Online</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
