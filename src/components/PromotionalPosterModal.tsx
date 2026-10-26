import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { getWhatsAppUrl } from '../lib/contact';

export const PromotionalPosterModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Shows only once per visit using sessionStorage
    try {
      const hasSeen = sessionStorage.getItem('tally_poster_popup_seen');
      if (hasSeen) return;
    } catch {
      // In case storage access is restricted
    }

    // Appears exactly 2 seconds after page loads
    const timer = setTimeout(() => {
      setIsOpen(true);
      try {
        sessionStorage.setItem('tally_poster_popup_seen', 'true');
      } catch {
        // ignore
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  // Lock page scroll behind the popup while open, and listen for Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Initial accessible focus onto close button
    const focusTimer = setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 50);

    return () => {
      clearTimeout(focusTimer);
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const whatsappInquiryUrl = getWhatsAppUrl(
    'Hi LK Educations, I saw your Institute of Tally Learning promotional poster and want to enroll in the Job-Ready in 3 Months program. Please share batch timings and fees.'
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Institute of Tally Learning offer"
      onClick={(e) => {
        // Closes when clicking dark overlay outside the image
        if (e.target === e.currentTarget) {
          handleClose();
        }
      }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md transition-opacity duration-300 motion-reduce:transition-none"
    >
      {/* 
        Responsive sizing rules:
        - Mobile (< 600px): up to 92vw wide
        - Tablet (600px - 1024px): up to 70vw wide
        - Laptop/desktop (> 1024px): up to 560px wide
        - On every device limited to max-height: 85dvh (so landscape/short screens never cut off)
        - aspect-ratio 1:1 ensures perfect square shape without cropping or stretching
      */}
      <div
        className="relative flex items-center justify-center animate-in fade-in zoom-in-95 duration-300 motion-reduce:animate-none motion-reduce:transform-none select-none poster-modal-box"
        style={{
          width: 'min(92vw, 85dvh)',
          maxWidth: '560px',
          maxHeight: '85dvh',
          aspectRatio: '1 / 1',
        }}
      >
        <style>{`
          @media (min-width: 600px) {
            .poster-modal-box {
              width: min(70vw, 85dvh) !important;
            }
          }
          @media (min-width: 1024px) {
            .poster-modal-box {
              width: min(560px, 85dvh) !important;
            }
          }
        `}</style>

        {/* Circular Close Button: 44px min touch target, always visible against light and dark */}
        <button
          ref={closeBtnRef}
          type="button"
          onClick={handleClose}
          aria-label="Close promotion dialog"
          className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 z-30 w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-neutral-950/95 text-white hover:bg-black border-2 border-white shadow-2xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black cursor-pointer"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Clickable Image opening WhatsApp Inquiry in a new tab */}
        <a
          href={whatsappInquiryUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Click to enroll on WhatsApp"
          className="block w-full h-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-1 ring-black/10 transition-transform active:scale-[0.99] focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400 cursor-pointer"
        >
          <img
            src="/images/tally-poster.jpg"
            alt="Institute of Tally Learning: job ready in 3 months"
            width={1024}
            height={1024}
            loading="eager"
            decoding="async"
            className="w-full h-full aspect-square object-contain rounded-2xl block bg-[#fefcf3]"
          />
        </a>
      </div>
    </div>
  );
};
