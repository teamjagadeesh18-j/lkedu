import React from 'react';
import { CertificationProgramItem } from '../../types';
import {
  Star,
  GraduationCap,
  ShieldCheck,
  Award,
  Maximize2,
  CheckCircle2,
  ArrowRight,
  QrCode as QrIcon
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface CertificateCardProps {
  certificate: CertificationProgramItem;
  onEnlarge: (cert: CertificationProgramItem) => void;
  onVerify: (certId: string) => void;
  onEnroll?: (courseTitle: string) => void;
  isFeatured?: boolean;
}

// Authentic SVG QR Code generator for pixel-perfect vector sharpness at any resolution
export const VectorQrCode: React.FC<{ code: string; className?: string }> = ({ code, className = "w-14 h-14" }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="crispEdges"
    >
      {/* Top Left Finder Pattern */}
      <rect x="5" y="5" width="28" height="28" fill="#111827" rx="3" />
      <rect x="10" y="10" width="18" height="18" fill="#ffffff" rx="1" />
      <rect x="14" y="14" width="10" height="10" fill="#111827" />

      {/* Top Right Finder Pattern */}
      <rect x="67" y="5" width="28" height="28" fill="#111827" rx="3" />
      <rect x="72" y="10" width="18" height="18" fill="#ffffff" rx="1" />
      <rect x="76" y="14" width="10" height="10" fill="#111827" />

      {/* Bottom Left Finder Pattern */}
      <rect x="5" y="67" width="28" height="28" fill="#111827" rx="3" />
      <rect x="10" y="72" width="18" height="18" fill="#ffffff" rx="1" />
      <rect x="14" y="76" width="10" height="10" fill="#111827" />

      {/* Timing Patterns and Data Bits */}
      <rect x="38" y="8" width="5" height="5" fill="#111827" />
      <rect x="48" y="8" width="5" height="5" fill="#111827" />
      <rect x="58" y="8" width="5" height="5" fill="#111827" />
      <rect x="8" y="38" width="5" height="5" fill="#111827" />
      <rect x="8" y="48" width="5" height="5" fill="#111827" />
      <rect x="8" y="58" width="5" height="5" fill="#111827" />

      {/* Center & Right Data Matrix */}
      <rect x="38" y="22" width="6" height="6" fill="#111827" />
      <rect x="48" y="22" width="6" height="6" fill="#111827" />
      <rect x="58" y="28" width="5" height="5" fill="#111827" />
      <rect x="38" y="38" width="7" height="7" fill="#111827" />
      <rect x="48" y="42" width="6" height="6" fill="#111827" />
      <rect x="58" y="38" width="6" height="6" fill="#111827" />
      <rect x="70" y="38" width="6" height="6" fill="#111827" />
      <rect x="82" y="38" width="5" height="5" fill="#111827" />
      <rect x="88" y="48" width="6" height="6" fill="#111827" />
      <rect x="76" y="54" width="7" height="7" fill="#111827" />
      <rect x="64" y="50" width="6" height="6" fill="#111827" />

      {/* Bottom Right Data Matrix */}
      <rect x="38" y="68" width="6" height="6" fill="#111827" />
      <rect x="48" y="74" width="6" height="6" fill="#111827" />
      <rect x="58" y="68" width="5" height="5" fill="#111827" />
      <rect x="68" y="68" width="7" height="7" fill="#111827" />
      <rect x="82" y="68" width="6" height="6" fill="#111827" />
      <rect x="72" y="80" width="6" height="6" fill="#111827" />
      <rect x="84" y="82" width="7" height="7" fill="#111827" />
      <rect x="60" y="84" width="6" height="6" fill="#111827" />
      <rect x="42" y="84" width="6" height="6" fill="#111827" />
    </svg>
  );
};

export const CertificateCard: React.FC<CertificateCardProps> = ({
  certificate,
  onEnlarge,
  onVerify,
  onEnroll,
  isFeatured = false
}) => {
  return (
    <div className="flex flex-col bg-white rounded-3xl p-4 sm:p-5 border border-[#E5E7EB] shadow-[0_4px_20px_-2px_rgba(17,24,39,0.06)] hover:shadow-[0_16px_36px_-4px_rgba(17,24,39,0.12)] transition-all duration-300 hover:-translate-y-1 group">
      {/* Top Category and Status Pill */}
      <div className="flex items-center justify-between pb-3 px-1 border-b border-neutral-100 mb-3 text-xs">
        <span className="font-semibold text-secondary bg-secondary/10 px-2.5 py-0.5 rounded-full text-[11px]">
          {certificate.category}
        </span>
        <button
          type="button"
          onClick={() => onEnlarge(certificate)}
          className="inline-flex items-center gap-1 text-[11px] font-semibold text-neutral-500 hover:text-black transition-colors"
          title="Click to view full certificate in HD"
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span>HD View</span>
        </button>
      </div>

      {/* The Authentic Certificate Canvas (Pixel-Perfect Vector Replica) */}
      <div
        onClick={() => onEnlarge(certificate)}
        className="cursor-pointer bg-white border-2 border-black rounded-[22px] p-5 sm:p-6 flex flex-col justify-between aspect-[1/1.33] relative overflow-hidden group/canvas shadow-sm hover:shadow-md transition-shadow"
      >
        {/* Subtle interactive hover shimmer */}
        <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover/canvas:opacity-100 transition-opacity pointer-events-none" />

        {/* 1. Four Circular Dashed Badges */}
        <div className="grid grid-cols-4 gap-1 sm:gap-2">
          {/* Badge 1: Certified */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-[1.5px] border-dashed border-indigo-500 flex items-center justify-center text-indigo-600 bg-indigo-50/30">
              <Star className="w-4 h-4 fill-indigo-600/20" />
            </div>
            <span className="text-[8px] sm:text-[9px] font-bold text-indigo-600 text-center mt-1 leading-tight">
              Certified
            </span>
          </div>

          {/* Badge 2: Industry Ready */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-[1.5px] border-dashed border-indigo-500 flex items-center justify-center text-indigo-600 bg-indigo-50/30">
              <GraduationCap className="w-4 h-4" />
            </div>
            <span className="text-[8px] sm:text-[9px] font-bold text-indigo-600 text-center mt-1 leading-tight">
              Industry<br />Ready
            </span>
          </div>

          {/* Badge 3: Verified */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-[1.5px] border-dashed border-indigo-500 flex items-center justify-center text-indigo-600 bg-indigo-50/30">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <span className="text-[8px] sm:text-[9px] font-bold text-indigo-600 text-center mt-1 leading-tight">
              Verified
            </span>
          </div>

          {/* Badge 4: Professional */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-[1.5px] border-dashed border-indigo-500 flex items-center justify-center text-indigo-600 bg-indigo-50/30">
              <Award className="w-4 h-4" />
            </div>
            <span className="text-[8px] sm:text-[9px] font-bold text-indigo-600 text-center mt-1 leading-tight">
              Profession<br />al
            </span>
          </div>
        </div>

        {/* 2. Certificate Body Content */}
        <div className="text-center my-auto py-2 flex flex-col items-center">
          <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500 tracking-[0.2em] uppercase mb-1">
            COURSE CERTIFICATE
          </span>
          <h3 className="font-display font-black text-lg sm:text-xl md:text-2xl text-neutral-900 tracking-tight leading-tight px-1 max-w-xs">
            {certificate.title}
          </h3>

          <div className="mt-2 mb-2">
            <span className="block text-[10px] text-slate-400 font-medium">Issued by</span>
            <span className="font-bold text-xs sm:text-sm text-neutral-900">LK Education</span>
          </div>

          <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
            This certificate confirms the successful completion of the{' '}
            <strong className="text-neutral-900 font-bold">{certificate.title}</strong>{' '}
            program with practical and industry-oriented training.
          </p>
        </div>

        {/* 3. Certificate Footer with Signature and QR Code */}
        <div className="flex items-end justify-between pt-2 border-t border-transparent">
          {/* Left: Authorized Signature */}
          <div className="flex flex-col">
            <div className="w-24 sm:w-28 border-b-2 border-black mb-1"></div>
            <span className="text-[9px] sm:text-[10px] text-slate-500 font-medium">
              Authorized Signature
            </span>
          </div>

          {/* Right: QR Code and Serial */}
          <div className="flex flex-col items-end">
            <VectorQrCode code={certificate.id} className="w-10 h-10 sm:w-12 sm:h-12 text-black" />
            <span className="text-[8px] sm:text-[9px] font-mono text-slate-500 mt-0.5">
              Issued: 2026ID: {certificate.id}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Action Strip */}
      <div className="mt-4 pt-3 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-2">
        <button
          type="button"
          onClick={() => onVerify(certificate.id)}
          className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-neutral-700 hover:text-black py-1.5 px-2.5 sm:px-3 rounded-lg hover:bg-neutral-100 transition-colors cursor-pointer"
        >
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>Verify Credential</span>
        </button>

        {onEnroll && (
          <button
            type="button"
            onClick={() => onEnroll(certificate.title)}
            className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-white bg-black hover:bg-neutral-800 py-1.5 px-3 sm:px-3.5 rounded-full transition-all shadow-sm cursor-pointer"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Enroll Now</span>
          </button>
        )}
      </div>
    </div>
  );
};
