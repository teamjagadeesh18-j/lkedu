import React from 'react';
import { Calendar, ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';
import { WhatsAppIcon } from './ui/WhatsAppIcon';
import { openGeneralWhatsApp } from '../lib/contact';

interface PrivacyScreenProps {
  onNavigate: (path: string) => void;
  onOpenCounselor: () => void;
  onOpenVerify: () => void;
}

export const PrivacyScreen: React.FC<PrivacyScreenProps> = ({
  onNavigate,
  onOpenCounselor,
  onOpenVerify,
}) => {
  return (
    <div className="w-full min-h-screen py-4 sm:py-8 px-3 sm:px-6 flex flex-col items-center">
      {/* Container wrapper */}
      <div className="max-w-4xl w-full mx-auto">
        {/* Navigation / Switcher Bar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          {/* Quick Tab Switcher between Terms and Privacy */}
          <div className="inline-flex items-center p-1 bg-gray-200/70 rounded-full border border-gray-300/50 text-xs sm:text-sm font-medium">
            <button
              onClick={() => onNavigate('terms-and-conditions')}
              className="px-4 py-1.5 rounded-full text-gray-700 hover:text-black transition-all"
            >
              Terms & Conditions
            </button>
            <button
              onClick={() => onNavigate('privacy-policy')}
              className="px-4 py-1.5 rounded-full bg-black text-white shadow-sm transition-all"
            >
              Privacy Policy
            </button>
          </div>
        </div>

        {/* Main Document Card */}
        <article className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-12 md:p-16 shadow-[0_12px_36px_-6px_rgba(0,0,0,0.06),0_4px_16px_-2px_rgba(0,0,0,0.03)] border border-gray-200/90 text-gray-800">
          {/* Header */}
          <header className="border-b border-gray-100 pb-8 mb-8 sm:mb-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight mb-3">
              Privacy Policy
            </h1>
            <p className="text-sm sm:text-base text-gray-500 font-medium">
              Last Updated: November 1, 2026
            </p>
          </header>

          {/* Content Sections */}
          <div className="space-y-8 sm:space-y-10 text-sm sm:text-base text-gray-600 leading-relaxed">
            {/* Section 1 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-950 mb-3 tracking-tight">
                1. Introduction
              </h2>
              <p>
                Welcome to LK Educations. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website, enroll in our training programs, use our online assessment modules, or visit our Tirunelveli campus, and tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-950 mb-3 tracking-tight">
                2. Data We Collect
              </h2>
              <p className="mb-3">
                We may collect, use, store, and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              <ul className="space-y-2.5 pl-2">
                <li className="flex items-start gap-2">
                  <span className="text-black font-bold">•</span>
                  <div>
                    <strong className="font-semibold text-gray-900">Identity Data:</strong> includes first name, last name, date of birth, gender, student identification number, and photograph (required for student identity badges and Tally Education certification portal enrollment).
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black font-bold">•</span>
                  <div>
                    <strong className="font-semibold text-gray-900">Contact Data:</strong> includes residential postal address, personal email address, and mobile/telephone numbers.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black font-bold">•</span>
                  <div>
                    <strong className="font-semibold text-gray-900">Academic & Assessment Data:</strong> includes academic background, degree, attendance logs, practical lab problem scores, mock assessment records, and TEPL certificate verification details.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black font-bold">•</span>
                  <div>
                    <strong className="font-semibold text-gray-900">Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting, browser plug-in types, operating system, and platform used when accessing our website.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black font-bold">•</span>
                  <div>
                    <strong className="font-semibold text-gray-900">Transaction Data:</strong> includes details of payments made for course enrollments, examination fees, and study material kits (we do not store sensitive credit or debit card details).
                  </div>
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-950 mb-3 tracking-tight">
                3. How We Use Your Data
              </h2>
              <p className="mb-3">
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="space-y-2.5 pl-2">
                <li className="flex items-start gap-2">
                  <span className="text-black font-bold">•</span>
                  <div>To register you as a new student, candidate, or partner institution.</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black font-bold">•</span>
                  <div>To provide personalized mentorship, dual-monitor lab workstation access, and course materials.</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black font-bold">•</span>
                  <div>To enroll you in the official Tally Education Pvt. Ltd. (TEPL) portal for proctored online examinations and verifiable digital certificates.</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black font-bold">•</span>
                  <div>To facilitate our career placement drives and connect qualified students with verified corporate hiring partners.</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black font-bold">•</span>
                  <div>To manage our relationship with you including notifying you about schedule changes, batch timings, or policy updates.</div>
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-950 mb-3 tracking-tight">
                4. Data Security
              </h2>
              <p>
                We have put in place appropriate technical and administrative security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered, or disclosed. Access to student information is strictly limited to authorized academic counselors, faculty members, and administrative staff who require it to perform their official duties.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-950 mb-3 tracking-tight">
                5. Third-Party Sharing & Disclosure
              </h2>
              <p>
                We do not sell, lease, or rent your personal data to third parties. We disclose personal information solely to authorized service partners necessary to fulfill our educational and certification obligations:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600">
                <li><strong className="text-gray-900 font-semibold">Tally Education Pvt. Ltd. (TEPL):</strong> For student registration, certificate generation, and digital credential verification.</li>
                <li><strong className="text-gray-900 font-semibold">Corporate Placement Recruiters:</strong> With your prior explicit consent, your student profile and resume are submitted for relevant accounting and taxation job openings.</li>
                <li><strong className="text-gray-900 font-semibold">Statutory Authorities:</strong> When required by Indian tax or educational regulatory mandates under lawful notice.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-950 mb-3 tracking-tight">
                6. Data Retention
              </h2>
              <p>
                We will retain your student data for as long as necessary to fulfill the purposes of your training, certification, and lifetime credential verification. Academic grades and TEPL certification numbers are retained in our digital registry so future employers can verify your credentials through our online verification system.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-950 mb-3 tracking-tight">
                7. Your Legal Rights
              </h2>
              <p>
                Under applicable Indian laws and standards, you have the right to request access to the personal data we hold about you, request corrections to any inaccurate records, or opt out of promotional messages and admissions newsletters at any time.
              </p>
            </section>

            {/* Section 8 */}
            <section className="pt-4 border-t border-gray-100">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-950 mb-3 tracking-tight">
                8. Contact Us
              </h2>
              <p className="mb-4">
                If you have any questions about this privacy policy or our privacy practices, please contact us:
              </p>
              <div className="bg-gray-50 rounded-2xl p-5 sm:p-6 border border-gray-200/80 space-y-3">
                <div className="flex items-start gap-3 text-sm sm:text-base">
                  <MapPin className="w-5 h-5 text-gray-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">LK Educations</span>
                    <p className="text-gray-600">182, S. N. High Road, Sripuram, Tirunelveli Junction, Tirunelveli 627001, Tamil Nadu</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm sm:text-base">
                  <Mail className="w-5 h-5 text-gray-700 shrink-0" />
                  <span className="text-gray-600">
                    Email:{' '}
                    <a href="mailto:lkeduganesh@gmail.com" className="font-semibold text-black hover:underline">
                      lkeduganesh@gmail.com
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm sm:text-base">
                  <Phone className="w-5 h-5 text-gray-700 shrink-0" />
                  <span className="text-gray-600">
                    Phone (Talk to Team):{' '}
                    <a href="tel:+919443154224" className="font-semibold text-black hover:underline">
                      +91 94431 54224
                    </a>{' '}
                    /{' '}
                    <a href="tel:+919842154224" className="font-semibold text-black hover:underline">
                      +91 98421 54224
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm sm:text-base">
                  <WhatsAppIcon className="w-5 h-5 text-[#25D366] shrink-0" />
                  <span className="text-gray-600">
                    WhatsApp:{' '}
                    <button
                      type="button"
                      onClick={() => openGeneralWhatsApp('Hi LK Educations, I have an inquiry regarding your Privacy Policy.')}
                      className="font-semibold text-[#25D366] hover:underline cursor-pointer"
                    >
                      Chat on WhatsApp (+91 94431 54224)
                    </button>
                  </span>
                </div>
              </div>
            </section>
          </div>
        </article>
      </div>

      {/* Floating Action Button (Matches the screenshot's bottom right action) */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={onOpenCounselor}
          className="inline-flex items-center gap-2.5 bg-black hover:bg-neutral-800 text-white font-semibold text-sm px-5 py-3 rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.2)] transition-all hover:scale-105 active:scale-95"
        >
          <Calendar className="w-4 h-4" />
          <span>Book a Free Demo</span>
        </button>
      </div>
    </div>
  );
};
