import React, { useState } from 'react';
import { CERTIFICATION_PROGRAMS } from '../data/mockData';
import { CertificationProgramItem } from '../types';
import { CertificateCard, VectorQrCode } from './ui/CertificateCard';
import {
  ShieldCheck,
  Award,
  TrendingUp,
  Building2,
  ListChecks,
  FileSpreadsheet,
  Monitor,
  Cloud,
  CheckCircle2,
  Search,
  ArrowRight,
  Maximize2,
  X,
  Printer,
  Star,
  GraduationCap
} from 'lucide-react';
import { openEnrollWhatsApp } from '../lib/contact';
import { Reveal } from './Reveal';

interface CertificationsScreenProps {
  onNavigate: (path: string) => void;
  onOpenCounselor: (programTitle?: string) => void;
  onOpenVerify: (defaultId?: string) => void;
}

export const CertificationsScreen: React.FC<CertificationsScreenProps> = ({
  onNavigate,
  onOpenCounselor,
  onOpenVerify,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCertForModal, setSelectedCertForModal] = useState<CertificationProgramItem | null>(null);
  const [viewMode, setViewMode] = useState<'vector' | 'scanned'>('vector');

  const categories = [
    'All',
    'Tally & ERP',
    'GST & Taxation',
    'Financial Markets',
    'ERP Customization',
    'Direct Taxation',
    'Payroll & HR',
    'Foundations',
  ];

  const filteredCertificates = CERTIFICATION_PROGRAMS.filter((cert) => {
    const matchesCategory =
      selectedCategory === 'All' || cert.category === selectedCategory;
    const matchesSearch =
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO HEADER */}
      <section className="max-w-7xl mx-auto w-full px-3 sm:px-6 mb-8 lg:mb-12">
        <div className="bg-surface-container-lowest rounded-2xl sm:rounded-3xl p-5 sm:p-10 lg:p-14 shadow-[0_4px_20px_-2px_rgba(17,24,39,0.04)] border border-[#E5E7EB] text-center">
          <div className="max-w-3xl mx-auto flex flex-col items-center gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-low border border-[#E5E7EB]">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              <span className="font-label-eyebrow text-label-eyebrow text-on-surface-variant uppercase tracking-wider">
                PROFESSIONAL CERTIFICATIONS
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-on-surface tracking-tight">
              Our Certification Programs
            </h1>

            <p className="text-xs sm:text-base text-on-surface-variant leading-relaxed">
              Earn industry-recognized credentials verified through cryptographically secured QR codes and official TEPL candidate directories. Designed for tangible career advancement across commercial accounting, taxation, and financial auditing.
            </p>

            {/* Trust highlights */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-2 text-xs text-neutral-600 font-medium">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Cryptographically Verifiable QR</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Official TEPL Examination Credentials</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Industry-Standard Curriculum</span>
              </span>
            </div>

            {/* Search and Category Filters */}
            <div className="w-full max-w-2xl mt-3 pt-3 border-t border-neutral-100 flex flex-col gap-3">
              <div className="relative w-full">
                <Search className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by course title or certificate ID (e.g. LK-1024, GST)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-2.5 rounded-full bg-surface-container-low border border-[#E5E7EB] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              {/* Filter chips */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-black text-white shadow-sm'
                        : 'bg-surface-container-low text-neutral-600 hover:bg-neutral-200 border border-[#E5E7EB]'
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

      {/* 2. THE CERTIFICATES GRID */}
      <section className="max-w-7xl mx-auto w-full px-3 sm:px-6 mb-12 sm:mb-16">
        <Reveal className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-6 px-1">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-on-surface">
              Featured Course Certificates
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 mt-0.5">
              Showing {filteredCertificates.length} verified vocational program credentials
            </p>
          </div>
          <button
            onClick={() => onOpenVerify('LK-1024')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-on-surface bg-surface-container-lowest hover:bg-surface-container transition-all py-2.5 px-4 rounded-full border border-[#E5E7EB] shadow-sm font-semibold text-xs sm:text-sm cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4 text-secondary shrink-0" />
            <span>Verify Any Credential</span>
          </button>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCertificates.map((cert, idx) => (
            <Reveal key={cert.id} delay={(idx % 6) * 0.15}>
              <CertificateCard
                certificate={cert}
                onEnlarge={(c) => {
                  setSelectedCertForModal(c);
                  setViewMode('vector');
                }}
                onVerify={(id) => onOpenVerify(id)}
                onEnroll={(title) => openEnrollWhatsApp(title)}
              />
            </Reveal>
          ))}
        </div>

        {filteredCertificates.length === 0 && (
          <div className="bg-white rounded-2xl p-12 text-center border border-[#E5E7EB] my-8">
            <Award className="w-12 h-12 text-neutral-400 mx-auto mb-3" />
            <h3 className="font-bold text-neutral-800 text-lg">No certificates found</h3>
            <p className="text-sm text-neutral-500 max-w-md mx-auto mt-1 mb-4">
              Try searching with another keyword or resetting the category filter.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-full bg-black text-white text-xs font-semibold hover:bg-neutral-800"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* 3. KEY CAREER BENEFITS (First Row of 3 Cards) */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 mb-12 sm:mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Career Advancement */}
          <Reveal delay={0} className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E7EB] shadow-[0_4px_20px_-2px_rgba(17,24,39,0.04)] flex flex-col items-center text-center group hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="font-title-sm text-title-sm font-bold text-on-surface mb-2">
              Career Advancement
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Enhance your career prospects with Tally certification, unlocking opportunities in finance, auditing, and business analysis.
            </p>
          </Reveal>

          {/* Card 2: Industry Recognized */}
          <Reveal delay={0.15} className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E7EB] shadow-[0_4px_20px_-2px_rgba(17,24,39,0.04)] flex flex-col items-center text-center group hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4 group-hover:scale-110 transition-transform">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="font-title-sm text-title-sm font-bold text-on-surface mb-2">
              Industry Recognized
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Master industry-standard accounting practices with Tally certification, ensuring you will be highly valued by businesses.
            </p>
          </Reveal>

          {/* Card 3: Comprehensive Skills */}
          <Reveal delay={0.3} className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E7EB] shadow-[0_4px_20px_-2px_rgba(17,24,39,0.04)] flex flex-col items-center text-center group hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4 group-hover:scale-110 transition-transform">
              <ListChecks className="w-6 h-6" />
            </div>
            <h3 className="font-title-sm text-title-sm font-bold text-on-surface mb-2">
              Comprehensive Skills
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Gain comprehensive skills with our certification, unlocking opportunities in bookkeeping, financial management, and business accounting.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 4. KEY OFFERINGS (Heading + Second Row of 3 Cards) */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 mb-16 lg:mb-20">
        <Reveal className="text-center mb-10">
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
            Key Offerings
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto mt-2">
            Integrated practical training ecosystem designed to prepare students for corporate roles from Day 1.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: GST Compliance through Simulation */}
          <Reveal delay={0} className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E7EB] shadow-[0_4px_20px_-2px_rgba(17,24,39,0.04)] flex flex-col items-center text-center group hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4 group-hover:scale-110 transition-transform">
              <FileSpreadsheet className="w-6 h-6" />
            </div>
            <h3 className="font-title-sm text-title-sm font-bold text-on-surface mb-2">
              GST Compliance through Simulation
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Navigate business tax intricacies with hands-on experience in GST compliance, returns, e-way bills, and e-invoicing.
            </p>
          </Reveal>

          {/* Card 2: Online Internships */}
          <Reveal delay={0.15} className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E7EB] shadow-[0_4px_20px_-2px_rgba(17,24,39,0.04)] flex flex-col items-center text-center group hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4 group-hover:scale-110 transition-transform">
              <Monitor className="w-6 h-6" />
            </div>
            <h3 className="font-title-sm text-title-sm font-bold text-on-surface mb-2">
              Online Internships
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Discover Tally online internships aligned with NEP 2020, offering experiential learning for real-world success.
            </p>
          </Reveal>

          {/* Card 3: TallyPrime on Cloud */}
          <Reveal delay={0.3} className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E7EB] shadow-[0_4px_20px_-2px_rgba(17,24,39,0.04)] flex flex-col items-center text-center group hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4 group-hover:scale-110 transition-transform">
              <Cloud className="w-6 h-6" />
            </div>
            <h3 className="font-title-sm text-title-sm font-bold text-on-surface mb-2">
              TallyPrime on Cloud
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Experience hands-on training with TallyPrime on Cloud, giving access to licensed software for continuous online learning.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 5. BOTTOM ENROLLMENT BANNER */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 mb-8 lg:mb-12">
        <Reveal className="bg-primary text-white rounded-3xl p-8 sm:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="max-w-xl text-center md:text-left">
            <span className="px-3 py-1 rounded-full bg-white/10 text-emerald-400 font-mono text-xs font-semibold mb-3 inline-block">
              Authorized Tirunelveli Training Center
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Ready to Earn Your Official Certification?
            </h3>
            <p className="text-neutral-300 text-sm sm:text-base mt-2 leading-relaxed">
              Enroll in upcoming weekday or weekend batches. Learn on live company vouchers, practice in high-tech dual-monitor labs, and earn recognized credentials.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenCounselor()}
              className="px-6 py-3.5 rounded-full bg-white text-black font-semibold hover:bg-neutral-100 transition-colors shadow-md inline-flex items-center gap-2"
            >
              <span>Speak to an Advisor</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('programs')}
              className="px-6 py-3.5 rounded-full bg-neutral-800 text-white font-semibold hover:bg-neutral-700 transition-colors border border-white/20 inline-flex items-center gap-2"
            >
              <span>Browse All Syllabi</span>
            </button>
          </div>
        </Reveal>
      </section>

      {/* 6. HIGH-RESOLUTION MODAL LIGHTBOX */}
      {selectedCertForModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setSelectedCertForModal(null)}
        >
          <div
            className="relative bg-white rounded-3xl max-w-xl w-full p-5 sm:p-7 shadow-2xl border border-neutral-200 my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-neutral-100 mb-4">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-indigo-600" />
                <h3 className="font-bold text-sm sm:text-base text-neutral-900">
                  {selectedCertForModal.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                {selectedCertForModal.id === 'LK-1024' && (
                  <div className="hidden sm:flex items-center bg-neutral-100 rounded-lg p-0.5 text-[11px]">
                    <button
                      onClick={() => setViewMode('vector')}
                      className={`px-2.5 py-1 rounded-md font-semibold transition-colors ${
                        viewMode === 'vector' ? 'bg-white shadow text-black' : 'text-neutral-500'
                      }`}
                    >
                      Vector HD
                    </button>
                    <button
                      onClick={() => setViewMode('scanned')}
                      className={`px-2.5 py-1 rounded-md font-semibold transition-colors ${
                        viewMode === 'scanned' ? 'bg-white shadow text-black' : 'text-neutral-500'
                      }`}
                    >
                      Scanned Specimen
                    </button>
                  </div>
                )}
                <button
                  type="button"
                  onClick={() => setSelectedCertForModal(null)}
                  className="p-1.5 rounded-full text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Certificate Display */}
            <div className="rounded-2xl overflow-hidden bg-neutral-50 border border-neutral-200 flex items-center justify-center p-2 sm:p-4">
              {viewMode === 'scanned' && selectedCertForModal.id === 'LK-1024' ? (
                <img
                  src="/certificate-cropped.png"
                  alt="Scanned original certificate"
                  className="w-full h-auto max-h-[65vh] object-contain rounded-xl shadow"
                />
              ) : (
                /* Pure Vector Highest-Quality Rendering */
                <div className="w-full max-w-md bg-white border-2 border-black rounded-[22px] p-6 sm:p-8 flex flex-col justify-between aspect-[1/1.32] shadow-sm select-none">
                  {/* Badges */}
                  <div className="grid grid-cols-4 gap-2">
                    <div className="flex flex-col items-center">
                      <div className="w-11 h-11 rounded-full border-[1.5px] border-dashed border-indigo-500 flex items-center justify-center text-indigo-600 bg-indigo-50/40">
                        <Star className="w-4 h-4 fill-indigo-600/20" />
                      </div>
                      <span className="text-[9px] font-bold text-indigo-600 text-center mt-1 leading-tight">
                        Certified
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-11 h-11 rounded-full border-[1.5px] border-dashed border-indigo-500 flex items-center justify-center text-indigo-600 bg-indigo-50/40">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <span className="text-[9px] font-bold text-indigo-600 text-center mt-1 leading-tight">
                        Industry Ready
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-11 h-11 rounded-full border-[1.5px] border-dashed border-indigo-500 flex items-center justify-center text-indigo-600 bg-indigo-50/40">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <span className="text-[9px] font-bold text-indigo-600 text-center mt-1 leading-tight">
                        Verified
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-11 h-11 rounded-full border-[1.5px] border-dashed border-indigo-500 flex items-center justify-center text-indigo-600 bg-indigo-50/40">
                        <Award className="w-4 h-4" />
                      </div>
                      <span className="text-[9px] font-bold text-indigo-600 text-center mt-1 leading-tight">
                        Professional
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="text-center my-auto py-3 flex flex-col items-center">
                    <span className="text-[11px] font-semibold text-slate-500 tracking-[0.25em] uppercase mb-1">
                      COURSE CERTIFICATE
                    </span>
                    <h3 className="font-display font-black text-2xl sm:text-3xl text-neutral-900 tracking-tight leading-tight px-1">
                      {selectedCertForModal.title}
                    </h3>

                    <div className="mt-2.5 mb-2.5">
                      <span className="block text-[11px] text-slate-400 font-medium">Issued by</span>
                      <span className="font-bold text-base text-neutral-900">LK Education</span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                      This certificate confirms the successful completion of the{' '}
                      <strong className="text-neutral-900 font-bold">{selectedCertForModal.title}</strong>{' '}
                      program with practical and industry-oriented training.
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="flex items-end justify-between pt-3">
                    <div className="flex flex-col">
                      <div className="w-32 border-b-2 border-black mb-1"></div>
                      <span className="text-[10px] text-slate-500 font-medium">
                        Authorized Signature
                      </span>
                    </div>

                    <div className="flex flex-col items-end">
                      <VectorQrCode code={selectedCertForModal.id} className="w-12 h-12 text-black" />
                      <span className="text-[10px] font-mono text-slate-500 mt-0.5">
                        Issued: 2026ID: {selectedCertForModal.id}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Action Footer */}
            <div className="mt-4 pt-3 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="text-neutral-600">
                <span className="block font-semibold text-neutral-800">
                  Credential ID: <span className="font-mono">{selectedCertForModal.id}</span>
                </span>
                <span className="text-[11px] text-neutral-500">
                  Issued: {selectedCertForModal.issuedYear} • Official LK Education Specimen
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="px-3.5 py-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-semibold transition-colors inline-flex items-center gap-1.5"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const certId = selectedCertForModal.id;
                    setSelectedCertForModal(null);
                    onOpenVerify(certId);
                  }}
                  className="px-4 py-2 rounded-full bg-black text-white font-semibold hover:bg-neutral-800 transition-colors inline-flex items-center gap-1.5 shadow-sm"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Verify Online</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
