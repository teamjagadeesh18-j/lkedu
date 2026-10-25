import React from 'react';
import { ASSETS } from '../data/mockData';
import { Phone } from 'lucide-react';
import { WhatsAppIcon } from './ui/WhatsAppIcon';
import { CONTACT_INFO, openGeneralWhatsApp } from '../lib/contact';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenVerify: () => void;
  onOpenCounselor?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenVerify, onOpenCounselor }) => {
  return (
    <footer className="max-w-7xl mx-auto mx-4 mb-4 mt-20 bg-surface-container-lowest rounded-lg p-8 sm:p-12 shadow-[0_4px_20px_-2px_rgba(17,24,39,0.04)] border border-[#E5E7EB]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-12">
        {/* Col 1: Brand Info */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img
              alt="LK Education Logo"
              className="h-14 sm:h-16 w-auto object-contain"
              src={ASSETS.logo}
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="flex items-center">
              <span className="font-title-sm text-title-sm text-on-surface font-bold">LK Educations</span>
            </div>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Premier Tally, GST and accounting vocational training institute empowering practical careers in South India.
          </p>
          <div className="flex items-center gap-2 pt-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-secondary font-medium">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              TEPL Certified Partner
            </span>
          </div>
        </div>

        {/* Col 2: Programs */}
        <div className="flex flex-col gap-3">
          <h4 className="font-title-sm text-title-sm text-on-surface font-bold mb-1">Programs</h4>
          <button
            onClick={() => onNavigate('programs')}
            className="text-left font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
          >
            Tally Essentials
          </button>
          <button
            onClick={() => onNavigate('programs')}
            className="text-left font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
          >
            Tally Professional
          </button>
          <button
            onClick={() => onNavigate('programs')}
            className="text-left font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
          >
            GST with Tally Prime
          </button>
          <button
            onClick={() => onNavigate('programs')}
            className="text-left font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
          >
            TDS & Payroll
          </button>
          <button
            onClick={() => onNavigate('programs')}
            className="text-left font-body-sm text-body-sm text-secondary font-semibold hover:text-black transition-colors"
          >
            All 12 Courses & Syllabi →
          </button>
        </div>

        {/* Col 3: Company */}
        <div className="flex flex-col gap-3">
          <h4 className="font-title-sm text-title-sm text-on-surface font-bold mb-1">Company</h4>
          <button
            onClick={() => onNavigate('about-us')}
            className="text-left font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
          >
            About Us
          </button>
          <button
            onClick={() => onNavigate('about-us')}
            className="text-left font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
          >
            Faculty & Trainers
          </button>
          <button
            onClick={() => onNavigate('certifications')}
            className="text-left font-body-sm text-body-sm text-secondary font-semibold hover:text-black transition-colors"
          >
            Certification Programs (7)
          </button>
          <button
            onClick={onOpenVerify}
            className="text-left font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
          >
            TEPL Credential Verification
          </button>
          <button
            onClick={() => onNavigate('home')}
            className="text-left font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
          >
            Career Placement
          </button>
          <button
            onClick={() => onNavigate('resources')}
            className="text-left font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
          >
            Resources & Assessments
          </button>
          <button
            onClick={() => onNavigate('blogs')}
            className="text-left font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
          >
            Blogs
          </button>
          <button
            onClick={() => onNavigate('terms-and-conditions')}
            className="text-left font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
          >
            Terms & Conditions
          </button>
          <button
            onClick={() => onNavigate('privacy-policy')}
            className="text-left font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
          >
            Privacy Policy
          </button>
        </div>

        {/* Col 4: Contact & Hours */}
        <div className="flex flex-col gap-3">
          <h4 className="font-title-sm text-title-sm text-on-surface font-bold mb-1">Contact & Hours</h4>
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            182, S. N. High Road, Sripuram,<br />
            Tirunelveli Junction, Tirunelveli 627001
          </p>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            <span className="font-semibold text-on-surface">Email:</span> lkeduganesh@gmail.com
          </p>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            <span className="font-semibold text-on-surface">Hours:</span> Mon to Sat 10 AM to 7 PM
          </p>

          {/* 2 Contact Options */}
          <div className="flex flex-col gap-2 pt-1 border-t border-[#E5E7EB]">
            <button
              onClick={onOpenCounselor}
              className="text-left font-body-sm text-body-sm text-on-surface hover:text-black font-semibold flex items-center gap-2 cursor-pointer transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-black" />
              <span>Talk to Team: {CONTACT_INFO.primaryPhone}</span>
            </button>
            <button
              onClick={() => openGeneralWhatsApp('Hi LK Educations, I would like to talk to your team regarding admissions and course syllabus.')}
              className="text-left font-body-sm text-body-sm text-emerald-700 hover:text-emerald-800 font-semibold flex items-center gap-2 cursor-pointer transition-colors"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
              <span>Chat on WhatsApp</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-8 mt-4 bg-surface-container-low/50 -mx-8 -mb-8 sm:-mx-12 sm:-mb-12 p-8 sm:px-12 rounded-b-lg flex flex-col md:flex-row items-center justify-between gap-4 border-t border-[#E5E7EB]">
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          © 2026 LK Education. All Rights Reserved.
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <button
            onClick={() => onNavigate('privacy-policy')}
            className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
          >
            Privacy Policy
          </button>
          <button
            onClick={() => onNavigate('terms-and-conditions')}
            className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
          >
            Terms & Conditions
          </button>
          <button
            onClick={onOpenVerify}
            className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors underline decoration-dotted underline-offset-4 cursor-pointer"
          >
            Certification Verification
          </button>
        </div>
      </div>
    </footer>
  );
};
