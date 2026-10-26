import React, { useState, useEffect, useRef } from 'react';
import { SAMPLE_CERTIFICATES } from '../data/mockData';
import { VerifiableCertificate } from '../types';
import {
  X,
  ShieldCheck,
  Search,
  CheckCircle2,
  Award,
  QrCode,
  Building,
  Printer,
  ExternalLink
} from 'lucide-react';

interface CertificateVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCertId?: string;
}

export const CertificateVerificationModal: React.FC<CertificateVerificationModalProps> = ({
  isOpen,
  onClose,
  defaultCertId = 'LK-1024',
}) => {
  const [certInput, setCertInput] = useState<string>(defaultCertId);
  const [result, setResult] = useState<VerifiableCertificate | null>(SAMPLE_CERTIFICATES[0]);
  const [hasSearched, setHasSearched] = useState<boolean>(true);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    modalRef.current?.focus();

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      const targetId = defaultCertId || 'LK-1024';
      setCertInput(targetId);
      const found = SAMPLE_CERTIFICATES.find(
        (c) => c.certificateId.toUpperCase() === targetId.toUpperCase()
      ) || SAMPLE_CERTIFICATES[0];
      setResult(found);
      setHasSearched(true);
    }
  }, [isOpen, defaultCertId]);

  if (!isOpen) return null;

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const cleanId = certInput.trim().toUpperCase();
    const found = SAMPLE_CERTIFICATES.find(
      (c) => c.certificateId.toUpperCase() === cleanId
    );
    setResult(found || null);
    setHasSearched(true);
  };

  const selectQuickSample = (id: string) => {
    setCertInput(id);
    const found = SAMPLE_CERTIFICATES.find((c) => c.certificateId === id);
    setResult(found || null);
    setHasSearched(true);
  };

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-verification-title"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        className="bg-white rounded-2xl max-w-2xl w-full p-4 sm:p-8 shadow-2xl border border-[#E5E7EB] my-auto max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 outline-none"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#E5E7EB]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 id="cert-verification-title" className="font-title-sm text-title-sm font-bold text-on-surface">
                TEPL Certificate Online Verification
              </h3>
              <p className="text-xs text-on-surface-variant font-mono">
                Tally Education Candidate Registry Database
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="py-4 flex flex-col gap-3">
          <label className="text-xs font-semibold text-on-surface">
            Enter Certificate ID or Scan Reference:
          </label>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-on-surface-variant absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={certInput}
                onChange={(e) => setCertInput(e.target.value)}
                placeholder="e.g. TEPL-TN-2024-8841"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surface-container-low border border-[#E5E7EB] text-sm font-mono uppercase focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-black text-white font-label-md text-label-md font-semibold hover:bg-neutral-800 transition-colors shrink-0"
            >
              Verify Now
            </button>
          </div>

          {/* Quick sample chips */}
          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
            <span className="text-on-surface-variant">Try sample IDs:</span>
            {SAMPLE_CERTIFICATES.map((sample) => (
              <button
                key={sample.certificateId}
                type="button"
                onClick={() => selectQuickSample(sample.certificateId)}
                className="px-2.5 py-1 rounded bg-surface-container-low text-secondary font-mono hover:bg-surface-container transition-colors border border-[#E5E7EB]"
              >
                {sample.certificateId} ({sample.studentName})
              </button>
            ))}
          </div>
        </form>

        {/* Verification Result Card */}
        {hasSearched && (
          <div className="mt-2 pt-4 border-t border-[#E5E7EB]">
            {result ? (
              <div className="bg-surface-container-low rounded-2xl p-6 border border-emerald-300 flex flex-col gap-4 relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-secondary font-label-sm text-label-sm font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Cryptographically Verified</span>
                  </div>
                  <span className="text-xs font-mono text-on-surface-variant">
                    {result.certificateId}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-on-surface-variant font-bold block">
                      Student Candidate Name
                    </span>
                    <span className="font-title-lg text-title-lg font-bold text-on-surface">
                      {result.studentName}
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-on-surface-variant font-bold block">
                      Course Curriculum
                    </span>
                    <span className="font-title-sm text-title-sm font-semibold text-on-surface">
                      {result.courseTitle}
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-on-surface-variant font-bold block">
                      Assessment Grade & Score
                    </span>
                    <span className="font-bold text-secondary text-sm">
                      Grade {result.grade} ({result.score})
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-on-surface-variant font-bold block">
                      Issue Date
                    </span>
                    <span className="font-medium text-on-surface text-sm">
                      {result.issueDate}
                    </span>
                  </div>
                </div>

                {result.certificateId.startsWith('LK-') && (
                  <div className="p-3.5 bg-white rounded-xl border border-indigo-200 flex items-center gap-4">
                    {result.certificateId === 'LK-1024' ? (
                      <img
                        src="/certificate-cropped.png"
                        alt="LK Education Certificate"
                        className="w-16 h-20 object-contain rounded-lg border border-neutral-200 shadow-sm shrink-0"
                      />
                    ) : (
                      <div className="w-16 h-20 bg-white border-2 border-black rounded-lg p-1.5 flex flex-col justify-between shrink-0 shadow-sm">
                        <div className="flex justify-between items-center px-0.5">
                          <span className="w-2 h-2 rounded-full border border-dashed border-indigo-500" />
                          <span className="w-2 h-2 rounded-full border border-dashed border-indigo-500" />
                          <span className="w-2 h-2 rounded-full border border-dashed border-indigo-500" />
                          <span className="w-2 h-2 rounded-full border border-dashed border-indigo-500" />
                        </div>
                        <div className="text-[7px] font-black text-center text-neutral-900 leading-tight">
                          {result.courseTitle}
                        </div>
                        <div className="flex justify-between items-end">
                          <div className="w-4 border-b border-black" />
                          <QrCode className="w-3.5 h-3.5 text-black" />
                        </div>
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-700">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Official LK Education Course Specimen ({result.certificateId})</span>
                      </div>
                      <p className="text-[11px] text-neutral-600 mt-0.5">
                        Authentic course certificate format matching issued credential with QR verification and industry-ready badges.
                      </p>
                    </div>
                  </div>
                )}

                <div className="p-3 bg-white rounded-xl border border-[#E5E7EB] flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-on-surface block">
                      {result.centerName}
                    </span>
                    <span className="text-on-surface-variant">
                      Authorized Center ID: {result.centerId}
                    </span>
                  </div>
                  <div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded-lg border border-[#E5E7EB]">
                    <QrCode className="w-8 h-8 text-on-surface" />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[11px] text-on-surface-variant">
                    TEPL Record: {result.teplCandidateId}
                  </span>
                  <button
                    onClick={() => window.print()}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-on-surface hover:text-black"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    Print Validation Slip
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-6 bg-red-50 rounded-2xl border border-red-200 text-center flex flex-col items-center gap-2">
                <span className="text-sm font-bold text-red-700">Certificate Record Not Found</span>
                <p className="text-xs text-red-600 max-w-sm">
                  Please verify the ID format (e.g. TEPL-TN-2024-8841) or contact our admissions office at{' '}
                  <a href="mailto:lkeduganesh@gmail.com" className="font-semibold underline hover:text-red-800">
                    lkeduganesh@gmail.com
                  </a>{' '}
                  for manual verification.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
