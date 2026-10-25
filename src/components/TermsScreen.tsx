import React from 'react';
import { ShieldCheck, Calendar, ArrowLeft, ArrowUpRight, FileText, Phone, Mail, MapPin } from 'lucide-react';
import { WhatsAppIcon } from './ui/WhatsAppIcon';
import { openGeneralWhatsApp } from '../lib/contact';

interface TermsScreenProps {
  onNavigate: (path: string) => void;
  onOpenCounselor: () => void;
  onOpenVerify: () => void;
}

export const TermsScreen: React.FC<TermsScreenProps> = ({
  onNavigate,
  onOpenCounselor,
  onOpenVerify,
}) => {
  return (
    <div className="w-full min-h-screen py-4 sm:py-8 px-4 sm:px-6 flex flex-col items-center">
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
              className="px-4 py-1.5 rounded-full bg-black text-white shadow-sm transition-all"
            >
              Terms & Conditions
            </button>
            <button
              onClick={() => onNavigate('privacy-policy')}
              className="px-4 py-1.5 rounded-full text-gray-700 hover:text-black transition-all"
            >
              Privacy Policy
            </button>
          </div>
        </div>

        {/* Main Document Card */}
        <article className="bg-white rounded-3xl p-8 sm:p-14 md:p-16 shadow-[0_12px_36px_-6px_rgba(0,0,0,0.06),0_4px_16px_-2px_rgba(0,0,0,0.03)] border border-gray-200/90 text-gray-800">
          {/* Header */}
          <header className="border-b border-gray-100 pb-8 mb-8 sm:mb-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight mb-3">
              Terms & Conditions
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
                1. Agreement to Terms
              </h2>
              <p>
                By accessing or using LK Educations&apos; services, website, practical training labs, classroom sessions, or educational portals, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree to these terms, please do not use our services or enroll in our programs.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-950 mb-3 tracking-tight">
                2. Use of Services
              </h2>
              <p className="mb-3">
                You may use our services only for lawful purposes and in accordance with these Terms. You agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Provide accurate, complete, and current information during admission and student enrollment.</li>
                <li>Maintain the strict confidentiality of your student portal credentials, software licenses, and access keys.</li>
                <li>Operate training equipment, dual-monitor lab workstations, and licensed software strictly for curriculum exercises and skill development.</li>
                <li>Refrain from tampering with system configurations, installing unauthorized applications, or introducing malicious code into lab systems.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-950 mb-3 tracking-tight">
                3. Course Content & Intellectual Property
              </h2>
              <p>
                All materials provided in our courses—including lecture presentations, curriculum frameworks, real-time GST case studies, accounting datasets, practical voucher problems, video tutorials, and documentation—are the intellectual property of LK Educations or licensed from Tally Education Pvt. Ltd. (TEPL). You are granted a limited, personal, non-exclusive, non-transferable license to use these materials solely for your own individual educational learning. You may not record, redistribute, resell, publish, or publicly broadcast any instructional materials without prior written consent.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-950 mb-3 tracking-tight">
                4. Refund Policy
              </h2>
              <p>
                Refund requests are handled on a case-by-step basis depending on the program. Generally, once a cohort has started, practical lab credentials have been issued, and course materials have been accessed, refunds may not be available. Course seat reservations or registration fees are non-refundable. Batch reschedule requests may be accommodated at the institute&apos;s sole discretion subject to seat availability in subsequent cohorts.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-950 mb-3 tracking-tight">
                5. Limitation of Liability
              </h2>
              <p>
                LK Educations shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services, lab hardware, online simulation tools, or external certification portals. While we provide 100% placement assistance, resume preparation, and employer interview schedules, final employment and salary offers remain subject to candidate performance and third-party employer hiring decisions.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-950 mb-3 tracking-tight">
                6. Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these terms at any time. We will notify you of any changes by posting the new terms on this page and updating the &ldquo;Last Updated&rdquo; date at the top. Your continued enrollment or use of our services following any update indicates your acceptance of the revised Terms and Conditions.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-950 mb-3 tracking-tight">
                7. Certification & Assessment Integrity
              </h2>
              <p>
                Official TEPL certificates and institutional course completion credentials are awarded solely to candidates who satisfy minimum attendance requirements (80%+) and successfully pass the standardized practical assessments. Any form of academic dishonesty, proxy assessment, or unauthorized assistance during proctored exams will result in immediate disqualification and forfeiture of certification eligibility.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-950 mb-3 tracking-tight">
                8. Governing Law & Jurisdiction
              </h2>
              <p>
                These Terms shall be governed by and interpreted under the laws of the Republic of India. Any legal dispute, claim, or controversy arising out of or relating to these Terms or our services shall be submitted to the exclusive jurisdiction of the competent courts in Tirunelveli, Tamil Nadu, India.
              </p>
            </section>

            {/* Section 9 */}
            <section className="pt-4 border-t border-gray-100">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-950 mb-3 tracking-tight">
                9. Contact Us
              </h2>
              <p className="mb-4">
                If you have any questions or inquiries regarding these Terms & Conditions, please contact our administrative team:
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
                      onClick={() => openGeneralWhatsApp('Hi LK Educations, I have an inquiry regarding your Terms & Conditions.')}
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
