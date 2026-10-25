import React, { useState, useEffect } from 'react';
import { BLOG_POSTS } from '../data/mockData';
import { BlogPost } from '../types';
import {
  Search,
  Clock,
  ArrowRight,
  ArrowLeft,
  Share2,
  Copy,
  Check,
  CheckCircle2,
  GraduationCap,
  Mail,
  BookOpen,
  Sparkles,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

interface BlogsScreenProps {
  onNavigate?: (path: string) => void;
  onOpenCounselor: (programTitle?: string) => void;
}

// 18 Distinct Pastel Palettes exactly matching the 6 rows x 3 columns from the reference image
const BLOG_CARD_THEMES = [
  // Row 1: Mint Green, Sky Blue, Lavender
  {
    bg: 'bg-[#eef8eb]',
    border: 'border-[#d6ecd0]',
    title: 'text-[#1b5e20]',
    pillBg: 'bg-white/95',
    pillBorder: 'border-[#c5e6bd]',
    pillText: 'text-[#2d6a26]',
    accent: '#2d6a26'
  },
  {
    bg: 'bg-[#e6f4fd]',
    border: 'border-[#cbe7fb]',
    title: 'text-[#0a58ca]',
    pillBg: 'bg-white/95',
    pillBorder: 'border-[#bce0fa]',
    pillText: 'text-[#0d6efd]',
    accent: '#0d6efd'
  },
  {
    bg: 'bg-[#f3edf9]',
    border: 'border-[#e3d5f2]',
    title: 'text-[#59359a]',
    pillBg: 'bg-white/95',
    pillBorder: 'border-[#d8c4ed]',
    pillText: 'text-[#6f42c1]',
    accent: '#6f42c1'
  },

  // Row 2: Peach, Sage, Steel Blue
  {
    bg: 'bg-[#fef3e8]',
    border: 'border-[#fedec2]',
    title: 'text-[#b43e0e]',
    pillBg: 'bg-white/95',
    pillBorder: 'border-[#fcd2af]',
    pillText: 'text-[#d9531e]',
    accent: '#d9531e'
  },
  {
    bg: 'bg-[#edf6ed]',
    border: 'border-[#d2ecd2]',
    title: 'text-[#1b5e20]',
    pillBg: 'bg-white/95',
    pillBorder: 'border-[#bee3be]',
    pillText: 'text-[#2e7d32]',
    accent: '#2e7d32'
  },
  {
    bg: 'bg-[#e7f1f9]',
    border: 'border-[#cde3f5]',
    title: 'text-[#0d47a1]',
    pillBg: 'bg-white/95',
    pillBorder: 'border-[#bcdbf2]',
    pillText: 'text-[#1976d2]',
    accent: '#1976d2'
  },

  // Row 3: Lilac, Warm Amber, Citron
  {
    bg: 'bg-[#f5eefb]',
    border: 'border-[#e8d5f7]',
    title: 'text-[#5a189a]',
    pillBg: 'bg-white/95',
    pillBorder: 'border-[#dec1f4]',
    pillText: 'text-[#7b2cbf]',
    accent: '#7b2cbf'
  },
  {
    bg: 'bg-[#fef8e7]',
    border: 'border-[#fdeabf]',
    title: 'text-[#92400e]',
    pillBg: 'bg-white/95',
    pillBorder: 'border-[#fcd99a]',
    pillText: 'text-[#b45309]',
    accent: '#b45309'
  },
  {
    bg: 'bg-[#f1f8e9]',
    border: 'border-[#def0cf]',
    title: 'text-[#1b5e20]',
    pillBg: 'bg-white/95',
    pillBorder: 'border-[#cee8b7]',
    pillText: 'text-[#33691e]',
    accent: '#33691e'
  },

  // Row 4: Cyan, Deep Violet, Soft Apricot
  {
    bg: 'bg-[#e3f7f8]',
    border: 'border-[#c2eff1]',
    title: 'text-[#005f6b]',
    pillBg: 'bg-white/95',
    pillBorder: 'border-[#a9e7ea]',
    pillText: 'text-[#007b8a]',
    accent: '#007b8a'
  },
  {
    bg: 'bg-[#f0eaff]',
    border: 'border-[#dfd3ff]',
    title: 'text-[#4c1d95]',
    pillBg: 'bg-white/95',
    pillBorder: 'border-[#cfbeff]',
    pillText: 'text-[#5e2de0]',
    accent: '#5e2de0'
  },
  {
    bg: 'bg-[#fdf2e9]',
    border: 'border-[#fbdcc3]',
    title: 'text-[#a04000]',
    pillBg: 'bg-white/95',
    pillBorder: 'border-[#f7be99]',
    pillText: 'text-[#c0392b]',
    accent: '#c0392b'
  },

  // Row 5: Mint Green, Sky Blue, Lavender
  {
    bg: 'bg-[#eef8eb]',
    border: 'border-[#d6ecd0]',
    title: 'text-[#1b5e20]',
    pillBg: 'bg-white/95',
    pillBorder: 'border-[#c5e6bd]',
    pillText: 'text-[#2d6a26]',
    accent: '#2d6a26'
  },
  {
    bg: 'bg-[#e6f4fd]',
    border: 'border-[#cbe7fb]',
    title: 'text-[#0a58ca]',
    pillBg: 'bg-white/95',
    pillBorder: 'border-[#bce0fa]',
    pillText: 'text-[#0d6efd]',
    accent: '#0d6efd'
  },
  {
    bg: 'bg-[#f3edf9]',
    border: 'border-[#e3d5f2]',
    title: 'text-[#59359a]',
    pillBg: 'bg-white/95',
    pillBorder: 'border-[#d8c4ed]',
    pillText: 'text-[#6f42c1]',
    accent: '#6f42c1'
  },

  // Row 6: Peach, Sage, Lilac
  {
    bg: 'bg-[#fef3e8]',
    border: 'border-[#fedec2]',
    title: 'text-[#b43e0e]',
    pillBg: 'bg-white/95',
    pillBorder: 'border-[#fcd2af]',
    pillText: 'text-[#d9531e]',
    accent: '#d9531e'
  },
  {
    bg: 'bg-[#edf6ed]',
    border: 'border-[#d2ecd2]',
    title: 'text-[#1b5e20]',
    pillBg: 'bg-white/95',
    pillBorder: 'border-[#bee3be]',
    pillText: 'text-[#2e7d32]',
    accent: '#2e7d32'
  },
  {
    bg: 'bg-[#f5eefb]',
    border: 'border-[#e8d5f7]',
    title: 'text-[#5a189a]',
    pillBg: 'bg-white/95',
    pillBorder: 'border-[#dec1f4]',
    pillText: 'text-[#7b2cbf]',
    accent: '#7b2cbf'
  },
];

export const BlogsScreen: React.FC<BlogsScreenProps> = ({ onNavigate, onOpenCounselor }) => {
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Scroll to top when changing active blog
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedBlogId]);

  const categories = [
    'All',
    'Career Roadmap',
    'GST & Tax',
    'Tally Tips',
    'Corporate Accounting',
    'Interview Prep',
    'Campus TPO',
    'Direct Tax',
    'Payroll & HR'
  ];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const activeArticle = selectedBlogId
    ? BLOG_POSTS.find((b) => b.id === selectedBlogId) || null
    : null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
        setNewsletterSubscribed(false);
      }, 3500);
    }
  };

  // =========================================================================
  // VIEW 2: SINGLE BLOG POST DETAIL VIEW (MATCHING IMAGE 2)
  // =========================================================================
  if (activeArticle) {
    const activeThemeIndex = BLOG_POSTS.findIndex((b) => b.id === activeArticle.id) % BLOG_CARD_THEMES.length;
    const activeTheme = BLOG_CARD_THEMES[activeThemeIndex >= 0 ? activeThemeIndex : 0];

    // Related courses to show at the bottom
    const relatedCourses = [
      {
        title: 'Tally Essentials',
        level: 'Foundation to Intermediate',
        duration: '2 Months / 60 Hrs',
        theme: BLOG_CARD_THEMES[0],
        desc: 'Master fundamental double-entry accounting, company creation, inventory control, and Day Book audit reconciliations.'
      },
      {
        title: 'Tally Professional',
        level: 'Advanced',
        duration: '2.5 Months / 75 Hrs',
        theme: BLOG_CARD_THEMES[1],
        desc: 'Advanced enterprise ERP features, multi-currency invoicing, cost centers, budget controls, and audit trails.'
      },
      {
        title: 'GST Using Tally Prime',
        level: 'Mastery',
        duration: '35 Days / 50 Hrs',
        theme: BLOG_CARD_THEMES[2],
        desc: 'Direct GSTR-2B JSON reconciliation, e-way bills, e-invoicing, reverse charge (RCM), and annual return compilation.'
      }
    ];

    return (
      <div className="flex flex-col w-full pb-16 animate-in fade-in duration-200">
        {/* 1. Blog Post Header Card (Matching Image 2) */}
        <section className="max-w-5xl mx-auto w-full px-4 sm:px-6 mb-8 mt-2">
          <div className="bg-white rounded-3xl overflow-hidden border border-neutral-200/90 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)]">
            {/* Top Pastel Hero Banner */}
            <div className={`p-8 sm:p-12 lg:p-14 ${activeTheme.bg} border-b ${activeTheme.border} flex flex-col gap-4 text-left relative overflow-hidden`}>
              {/* Back to all articles link */}
              <button
                type="button"
                onClick={() => setSelectedBlogId(null)}
                className="inline-flex items-center gap-2 text-xs font-bold text-neutral-600 hover:text-black mb-2 transition-colors w-fit"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>ALL ARTICLES</span>
              </button>

              {/* Category Pill Tag */}
              <div>
                <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold ${activeTheme.pillBg} ${activeTheme.pillBorder} ${activeTheme.pillText} border shadow-xs tracking-wider uppercase`}>
                  {activeArticle.category}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight leading-[1.15]">
                {activeArticle.title}
              </h1>

              {/* Metadata Line */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-bold text-neutral-500 uppercase tracking-wider pt-2">
                <span>BY {activeArticle.author.toUpperCase()}</span>
                <span>•</span>
                <span>{activeArticle.publishDate.toUpperCase()}</span>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {activeArticle.readTime.toUpperCase()}
                </span>
              </div>
            </div>

            {/* Social Share & Action Bar */}
            <div className="px-8 sm:px-12 py-4 bg-neutral-50/70 border-b border-neutral-100 flex items-center justify-between text-xs text-neutral-600">
              <div className="flex items-center gap-3">
                <span className="font-semibold text-neutral-400 uppercase tracking-wider text-[11px]">Share Article:</span>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="p-2 rounded-full bg-white border border-neutral-200 hover:border-black text-neutral-700 transition-all flex items-center gap-1.5 px-3"
                  title="Copy Link"
                >
                  {copiedLink ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span className="text-[11px] font-medium">{copiedLink ? 'Copied!' : 'Copy Link'}</span>
                </button>
              </div>

              <button
                type="button"
                onClick={() => setSelectedBlogId(null)}
                className="text-xs font-bold text-neutral-500 hover:text-black transition-colors"
              >
                ← Back to Catalog
              </button>
            </div>

            {/* Article Main Body Content */}
            <div className="p-8 sm:p-12 lg:p-16 max-w-4xl mx-auto text-left">
              {/* Bold Lead Introduction Paragraph */}
              <p className="text-base sm:text-lg font-medium text-neutral-900 leading-relaxed mb-8 border-l-4 border-secondary pl-4 py-1">
                {activeArticle.content[0]}
              </p>

              {/* Content Paragraphs */}
              <div className="space-y-6 text-neutral-700 text-sm sm:text-base leading-relaxed">
                {activeArticle.content.slice(1).map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Detailed Sections with Subtitles and Bullet Checklists */}
              {activeArticle.sections && (
                <div className="mt-10 space-y-10">
                  {activeArticle.sections.map((sec, sIdx) => (
                    <div key={sIdx} className="space-y-4">
                      <h2 className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight">
                        {sec.heading}
                      </h2>
                      {sec.paragraphs.map((p, pIdx) => (
                        <p key={pIdx} className="text-neutral-700 text-sm sm:text-base leading-relaxed">
                          {p}
                        </p>
                      ))}

                      {sec.bullets && (
                        <div className="bg-neutral-50 rounded-2xl p-5 sm:p-6 border border-neutral-200/80 my-4">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">
                            Key Practical Takeaways:
                          </h4>
                          <ul className="space-y-2.5">
                            {sec.bullets.map((b, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-800">
                                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Tags Cloud */}
              <div className="pt-10 mt-10 border-t border-neutral-200 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider mr-2">Tags:</span>
                {activeArticle.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-medium text-neutral-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Mid-Article Callout Box (Matching Image 2) */}
              <div className="bg-[#fef8e7] rounded-3xl p-6 sm:p-8 border border-[#fdeabf] my-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
                <div className="flex items-center gap-4 text-left">
                  <div className="w-12 h-12 rounded-2xl bg-[#fcd99a]/40 text-[#92400e] flex items-center justify-center shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 text-base sm:text-lg">
                      Want this training in your college or company?
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-700 mt-0.5">
                      Bring practical, TEPL-certified accounting and Tally bootcamps directly to your campus or corporate team.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => onOpenCounselor('College & Corporate Workshop')}
                    className="flex-1 sm:flex-none bg-black text-white hover:bg-neutral-800 transition-all px-5 py-2.5 rounded-full text-xs font-semibold shadow-xs"
                  >
                    Contact Us
                  </button>
                  {onNavigate && (
                    <button
                      type="button"
                      onClick={() => onNavigate('programs')}
                      className="flex-1 sm:flex-none bg-white border border-neutral-300 hover:bg-neutral-50 transition-all px-5 py-2.5 rounded-full text-xs font-semibold text-neutral-800"
                    >
                      View Programs
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Continue Reading Bar (Matching Image 2) */}
        <section className="max-w-5xl mx-auto w-full px-4 sm:px-6 mb-6">
          <div className="flex items-center justify-between text-xs font-bold text-neutral-700 px-2">
            <button
              type="button"
              onClick={() => setSelectedBlogId(null)}
              className="inline-flex items-center gap-1.5 hover:text-black transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>ALL ARTICLES</span>
            </button>
            <button
              type="button"
              onClick={() => onOpenCounselor()}
              className="inline-flex items-center gap-1.5 hover:text-black transition-colors"
            >
              <span>Book Free Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </section>

        {/* 3. Golden Banner CTA (Matching Image 2) */}
        <section className="max-w-5xl mx-auto w-full px-4 sm:px-6 mb-14">
          <div className="bg-gradient-to-r from-[#e7b85e] via-[#e5ab48] to-[#e8be66] text-neutral-900 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-md">
            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-4">
              <h2 className="text-2xl sm:text-4xl font-black text-neutral-900 tracking-tight">
                Ready to Build Industry-Ready Talent?
              </h2>

              <p className="text-neutral-800 text-xs sm:text-sm leading-relaxed max-w-lg">
                Join colleges and students across Tamil Nadu transforming commerce education with LK Educations proven vocational bootcamps.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => onOpenCounselor('Campus Bootcamp Partnership')}
                  className="bg-black text-white hover:bg-neutral-800 transition-all px-6 py-3 rounded-full text-xs sm:text-sm font-semibold shadow-md inline-flex items-center gap-2"
                >
                  <span>Request a Campus Bootcamp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {onNavigate && (
                  <button
                    type="button"
                    onClick={() => onNavigate('programs')}
                    className="bg-white text-neutral-900 hover:bg-neutral-100 transition-all px-6 py-3 rounded-full text-xs sm:text-sm font-semibold border border-black/10 shadow-sm"
                  >
                    <span>Download Program Brochure</span>
                  </button>
                )}
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-3 text-xs font-semibold text-neutral-800/80">
                <span className="inline-flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" /> Free Consultation
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" /> No Obligation
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" /> TEPL Certified Partner
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Programs to Boost Your Skills (Matching Image 2) */}
        <section className="max-w-5xl mx-auto w-full px-4 sm:px-6 mb-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest block mb-1">
              CAREER UPSKILLING
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
              Programs to Boost Your Skills
            </h3>
            <p className="text-neutral-500 text-xs sm:text-sm mt-1">
              Ready to take your learning further? Explore our industry-focused programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {relatedCourses.map((c, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-neutral-200/90 overflow-hidden bg-white shadow-xs hover:shadow-md transition-all flex flex-col justify-between text-left"
              >
                <div className={`p-6 ${c.theme.bg} border-b ${c.theme.border}`}>
                  <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold ${c.theme.pillBg} ${c.theme.pillBorder} ${c.theme.pillText} border uppercase tracking-wider mb-2`}>
                    {c.level}
                  </span>
                  <h4 className={`text-lg font-black ${c.theme.title}`}>
                    {c.title}
                  </h4>
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow gap-4">
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {c.desc}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      if (onNavigate) onNavigate('programs');
                    }}
                    className="text-xs font-bold text-neutral-900 hover:text-secondary inline-flex items-center gap-1 self-start"
                  >
                    <span>View Curriculum</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {onNavigate && (
            <div className="text-center">
              <button
                type="button"
                onClick={() => onNavigate('programs')}
                className="bg-black text-white hover:bg-neutral-800 transition-all px-8 py-3 rounded-full text-xs sm:text-sm font-semibold shadow-sm inline-flex items-center gap-2"
              >
                <span>View All 12 Programs</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </section>
      </div>
    );
  }

  // =========================================================================
  // VIEW 1: BLOGS CATALOG / OVERVIEW PAGE (MATCHING IMAGE 1)
  // =========================================================================
  return (
    <div className="flex flex-col w-full pb-16 animate-in fade-in duration-200">
      {/* 1. Hero Section (Matching Image 1) */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 mb-8 lg:mb-12">
        <div className="bg-white rounded-3xl p-8 sm:p-14 lg:p-18 border border-neutral-200/90 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] text-center relative overflow-hidden">
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-4 sm:gap-6">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-100/90 border border-neutral-200/80 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="font-label-eyebrow text-[11px] sm:text-xs font-bold text-neutral-500 uppercase tracking-widest">
                INDUSTRY READINESS INSIGHTS
              </span>
            </div>

            {/* Headline with Black Badge & Colored Accent */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-neutral-900 tracking-[-0.03em] leading-[1.12] sm:leading-[1.08] text-balance">
              Insights for{' '}
              <span className="inline-block bg-neutral-950 text-white px-3.5 sm:px-6 py-0.5 sm:py-1 rounded-2xl sm:rounded-3xl align-middle mx-1 font-black shadow-sm tracking-tight">
                Industry
              </span>{' '}
              <span className="text-secondary font-black">Readiness</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-neutral-600 font-normal leading-relaxed max-w-2xl text-balance">
              Discover career roadmaps, real-world accounting guides, GST return checklists, and corporate hiring expectations for students and fresh graduates.
            </p>

            {/* Search Bar & Category Filter Pills */}
            <div className="w-full max-w-2xl pt-2 flex flex-col gap-3">
              <div className="relative">
                <Search className="w-4 h-4 text-neutral-400 absolute left-4 top-3.5" />
                <input
                  type="text"
                  placeholder="Search articles on GSTR-2B, shortcuts, TDS, interviews, placement..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-full bg-neutral-50 border border-neutral-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-black text-neutral-900 placeholder:text-neutral-400"
                />
              </div>

              {/* Category Pills */}
              <div className="flex items-center justify-center gap-2 overflow-x-auto pb-1 pt-1 flex-wrap">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                      selectedCategory === cat
                        ? 'bg-black text-white shadow-xs'
                        : 'bg-neutral-100/80 text-neutral-600 hover:text-black hover:bg-neutral-200/70 border border-neutral-200/80'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Blog Cards Grid (18 Cards in 6 Rows x 3 Columns, Matching Image 1) */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 mb-16">
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
            Showing {filteredPosts.length} Articles
          </span>
          {selectedCategory !== 'All' && (
            <button
              onClick={() => setSelectedCategory('All')}
              className="text-xs font-bold text-secondary hover:underline"
            >
              Clear filter
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPosts.map((post, index) => {
            const theme = BLOG_CARD_THEMES[index % BLOG_CARD_THEMES.length];

            return (
              <article
                key={post.id}
                onClick={() => {
                  setSelectedBlogId(post.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group cursor-pointer rounded-3xl overflow-hidden border border-neutral-200/90 bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between text-left"
              >
                {/* Top Pastel Header Area */}
                <div className={`p-6 sm:p-7 ${theme.bg} border-b ${theme.border} flex flex-col gap-3 min-h-[160px] justify-start`}>
                  <div className="flex items-center justify-between">
                    <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-bold ${theme.pillBg} ${theme.pillBorder} ${theme.pillText} border shadow-xs tracking-wider uppercase`}>
                      {post.category}
                    </span>
                  </div>
                  <h3 className={`text-lg sm:text-xl font-black ${theme.title} leading-snug group-hover:opacity-90 transition-opacity`}>
                    {post.title}
                  </h3>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow gap-4 bg-white">
                  <p className="text-neutral-600 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-400 font-medium">
                    <span>{post.publishDate}</span>
                    <span className="inline-flex items-center gap-1.5 text-neutral-500 font-semibold">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 3. Browse by Category Section (Matching Image 1) */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 mb-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest block mb-1">
            QUICK NAVIGATION
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-neutral-900 tracking-tight">
            Browse by Category
          </h2>
          <p className="text-neutral-500 text-xs sm:text-sm mt-2">
            Explore articles tailored to your career milestones and skill priorities.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            {
              title: 'Project Prep',
              desc: 'Live simulation audits',
              cat: 'Corporate Accounting'
            },
            {
              title: 'Corporate Skills',
              desc: 'TDS, BRS & GST drills',
              cat: 'GST & Tax'
            },
            {
              title: 'TPO Resources',
              desc: 'Campus hiring blueprints',
              cat: 'Campus TPO'
            },
            {
              title: 'Tech Roadmaps',
              desc: 'Tally Prime & shortcuts',
              cat: 'Tally Tips'
            }
          ].map((item, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setSelectedCategory(item.cat);
                window.scrollTo({ top: 350, behavior: 'smooth' });
              }}
              className="bg-white rounded-2xl p-6 border border-neutral-200/90 shadow-xs hover:shadow-md hover:border-black transition-all text-center flex flex-col items-center justify-center gap-1.5 group"
            >
              <span className="font-bold text-neutral-900 text-sm sm:text-base group-hover:text-secondary transition-colors">
                {item.title}
              </span>
              <span className="text-xs text-neutral-400 font-medium">
                {item.desc}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* 4. Newsletter / Subscription Banner (Matching Image 1) */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 mb-12">
        <div className="bg-neutral-950 text-white rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden shadow-xl border border-neutral-900">
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary uppercase tracking-widest">
              <Mail className="w-3.5 h-3.5" /> LK ACADEMIC NEWSLETTER
            </span>

            <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Stay Updated with Industry Trends
            </h3>

            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-lg">
              Get relevant project ideas, interview alerts, and direct career tips delivered to your inbox every week.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="w-full max-w-md pt-2 flex flex-col sm:flex-row gap-2.5">
              <input
                type="email"
                placeholder="Enter your email address..."
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 px-5 py-3 rounded-full bg-neutral-900 border border-neutral-800 text-xs sm:text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <button
                type="submit"
                className="bg-white text-black hover:bg-neutral-200 transition-all px-7 py-3 rounded-full text-xs sm:text-sm font-bold shadow-md shrink-0"
              >
                {newsletterSubscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>

            <span className="text-[11px] text-neutral-500">
              No spam ever. Unsubscribe at any time with one click.
            </span>
          </div>
        </div>
      </section>

      {/* 5. Institutional Bottom Callout Card (Matching Image 1) */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 mb-8">
        <div className="bg-[#fef8e7] rounded-3xl p-6 sm:p-10 border border-[#fdeabf] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#fcd99a]/40 text-[#92400e] flex items-center justify-center shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-neutral-900 text-base sm:text-lg">
                Want this training in your college?
              </h4>
              <p className="text-xs sm:text-sm text-neutral-700 mt-0.5">
                Bring industry-ready skills to your students with LK Educations hands-on vocational programs.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => onOpenCounselor('College Workshop Inquiry')}
              className="flex-1 sm:flex-none bg-black text-white hover:bg-neutral-800 transition-all px-6 py-3 rounded-full text-xs sm:text-sm font-semibold shadow-xs"
            >
              Contact Us
            </button>
            {onNavigate && (
              <button
                type="button"
                onClick={() => onNavigate('programs')}
                className="flex-1 sm:flex-none bg-white border border-neutral-300 hover:bg-neutral-50 transition-all px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-neutral-800"
              >
                View Programs
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
