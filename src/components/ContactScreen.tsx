import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Calendar,
  Building,
  ShieldCheck,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { WhatsAppIcon } from './ui/WhatsAppIcon';
import { AnimatedRoadmap } from './ui/AnimatedRoadmap';
import { CONTACT_INFO, openGeneralWhatsApp, triggerPhoneCall } from '../lib/contact';
import { InquiryFormData } from '../types';

export const ContactScreen: React.FC = () => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    selectedProgram: 'Tally Essentials',
    batchPreference: 'Morning (10 AM - 12 PM)',
    background: 'Commerce Graduate',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Header Banner with Career Journey Illustration */}
      <section className="max-w-7xl mx-auto w-full px-3 sm:px-6 mb-8 lg:mb-12">
        <div className="bg-surface-container-lowest rounded-2xl sm:rounded-3xl p-5 sm:p-10 lg:p-14 shadow-[0_4px_24px_-2px_rgba(17,24,39,0.06)] border border-[#E5E7EB] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col gap-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-low border border-[#E5E7EB] w-fit">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                <span className="font-label-eyebrow text-label-eyebrow text-on-surface-variant uppercase tracking-wider">
                  CAMPUS & ADMISSIONS HELP DESK
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight leading-tight">
                Connect with Tirunelveli Campus
              </h1>

              <p className="text-xs sm:text-base lg:text-lg text-neutral-600 leading-relaxed">
                Drop by our dual-monitor laboratory on S. N. High Road for a free live demo session or talk directly with our career counselors.
              </p>

              {/* Journey Narrative Callout */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80 flex items-start gap-3 mt-1">
                <Sparkles className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                  <strong className="text-neutral-900 font-bold">From Institute to Dream Job:</strong> Start with an idea, gain hands-on practical skills in our training institute, earn authorized certification, and step directly onto the roadway to your corporate career.
                </p>
              </div>

              {/* Quick Contact Action Pills */}
              <div className="flex flex-col sm:flex-row w-full sm:w-auto items-stretch sm:items-center gap-3 pt-2">
                <a
                  href={`tel:${CONTACT_INFO.primaryTel}`}
                  onClick={() => triggerPhoneCall(CONTACT_INFO.primaryTel)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-black hover:bg-neutral-800 text-white font-semibold text-xs sm:text-sm transition-all shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Us ({CONTACT_INFO.primaryPhone})</span>
                </a>

                <button
                  type="button"
                  onClick={() => openGeneralWhatsApp('Hi LK Educations, I want to inquire about admissions and batch schedules.')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1da850] text-white font-semibold text-xs sm:text-sm transition-all shadow-sm cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Right Illustration Column - Animated looping pathway seamlessly connecting to page */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <AnimatedRoadmap />
            </div>
          </div>
        </div>
      </section>

      {/* Campus Info & Form Grid */}
      <section className="max-w-7xl mx-auto w-full px-3 sm:px-6 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Campus Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-surface-container-lowest rounded-2xl p-5 sm:p-8 shadow-sm border border-[#E5E7EB] flex flex-col gap-6">
              <h3 className="font-title-lg text-title-lg font-bold text-on-surface">
                Campus Location
              </h3>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-secondary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-title-sm text-title-sm font-bold text-on-surface">
                    LK Educations
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    182, S. N. High Road, Sripuram,<br />
                    Tirunelveli Junction, Tirunelveli 627001,<br />
                    Tamil Nadu, India
                  </p>
                  <p className="text-xs text-secondary font-semibold mt-1">
                    (Opposite Junction Bus Stand Arch / Near Post Office)
                  </p>
                </div>
              </div>

              {/* 2 Contact Options: Talk to Team (Phone) & WhatsApp */}
              <div className="border-t border-[#E5E7EB] pt-5 flex flex-col gap-3">
                <p className="text-xs font-bold text-on-surface uppercase tracking-wider">
                  Contact Admissions & Faculty Desk
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {/* Option 1: Talk to Team (Phone Icon) */}
                  <a
                    href={`tel:${CONTACT_INFO.primaryTel}`}
                    onClick={() => triggerPhoneCall(CONTACT_INFO.primaryTel)}
                    className="p-3.5 rounded-xl border-2 border-neutral-900 bg-neutral-900 text-white hover:bg-neutral-800 transition-all flex items-center gap-3 shadow-xs"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-left">
                      <span className="block text-xs font-bold text-white">Talk to Team</span>
                      <span className="text-[11px] text-neutral-300 font-medium">{CONTACT_INFO.primaryPhone}</span>
                    </div>
                  </a>

                  {/* Option 2: WhatsApp (WhatsApp Icon) */}
                  <button
                    type="button"
                    onClick={() => openGeneralWhatsApp('Hi LK Educations, I would like to talk to your team regarding admissions and course syllabus.')}
                    className="p-3.5 rounded-xl border-2 border-emerald-500 bg-[#25D366] text-white hover:bg-[#20ba59] active:bg-[#1da850] transition-all flex items-center gap-3 shadow-xs"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                      <WhatsAppIcon className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-left">
                      <span className="block text-xs font-bold text-white">WhatsApp Chat</span>
                      <span className="text-[11px] text-emerald-100 font-medium">Instant Response</span>
                    </div>
                  </button>
                </div>
              </div>

              <div className="border-t border-[#E5E7EB] pt-4 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-secondary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-title-sm text-title-sm font-bold text-on-surface">
                    Email Correspondence
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    lkeduganesh@gmail.com
                  </p>
                </div>
              </div>

              <div className="border-t border-[#E5E7EB] pt-4 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-secondary shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-title-sm text-title-sm font-bold text-on-surface">
                    Working Hours
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Monday to Saturday: 10:00 AM to 07:00 PM<br />
                    Sunday: Special Batch Drills & Counseling (10 AM - 2 PM)
                  </p>
                </div>
              </div>
            </div>

            {/* TEPL Accreditation Verification Badge */}
            <div className="p-6 bg-surface-container-low rounded-2xl border border-[#E5E7EB] flex items-center gap-4">
              <ShieldCheck className="w-10 h-10 text-secondary shrink-0" />
              <div>
                <p className="font-title-sm text-title-sm font-bold text-on-surface">
                  Authorized TEPL Examination Center
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Partner ID: TEPL-TN-627001. All lab assessments are monitored by Tally Education.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Admission Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-surface-container-lowest rounded-2xl p-8 sm:p-10 shadow-[0_4px_20px_-2px_rgba(17,24,39,0.04)] border border-[#E5E7EB]">
              {submitted ? (
                <div className="p-8 text-center flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                    Inquiry Received!
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                    Thank you, <span className="font-bold text-on-surface">{formData.fullName}</span>. Our senior counselor Ganesh Kumar will call you at <span className="font-bold text-on-surface">{formData.phoneNumber}</span> within 2 working hours to confirm your lab seat.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-black text-white font-label-md text-label-md"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-1">
                      Schedule a Counseling Call / Lab Visit
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Fill out this quick form to reserve your free lab trial and get batch schedule brochures.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-on-surface mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kannan"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low border border-[#E5E7EB] text-sm focus:outline-none focus:ring-1 focus:ring-black"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-on-surface mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 98421 XXXXX"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low border border-[#E5E7EB] text-sm focus:outline-none focus:ring-1 focus:ring-black"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-on-surface mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. ramesh@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low border border-[#E5E7EB] text-sm focus:outline-none focus:ring-1 focus:ring-black"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-on-surface mb-1.5">
                        Program of Interest
                      </label>
                      <select
                        value={formData.selectedProgram}
                        onChange={(e) => setFormData({ ...formData, selectedProgram: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low border border-[#E5E7EB] text-sm focus:outline-none focus:ring-1 focus:ring-black"
                      >
                        <option>Tally Essentials</option>
                        <option>Tally Professional</option>
                        <option>Tally Prime Basics</option>
                        <option>Principles of Tally Bookkeeping</option>
                        <option>Tally Prime with GST Fundamentals</option>
                        <option>Financial Markets and Services</option>
                        <option>TDL Essentials (Tally Definition Language)</option>
                        <option>GST Using Tally Prime</option>
                        <option>TDS Using Tally</option>
                        <option>Payroll</option>
                        <option>Online / Offline Courses</option>
                        <option>Accounting Basics Crash Course</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-on-surface mb-1.5">
                        Preferred Batch Timing
                      </label>
                      <select
                        value={formData.batchPreference}
                        onChange={(e) => setFormData({ ...formData, batchPreference: e.target.value as any })}
                        className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low border border-[#E5E7EB] text-sm focus:outline-none focus:ring-1 focus:ring-black"
                      >
                        <option>Morning (10 AM - 12 PM)</option>
                        <option>Afternoon (2 PM - 4 PM)</option>
                        <option>Evening (5:30 PM - 7:30 PM)</option>
                        <option>Weekend Saturday/Sunday</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-on-surface mb-1.5">
                        Current Background
                      </label>
                      <select
                        value={formData.background}
                        onChange={(e) => setFormData({ ...formData, background: e.target.value as any })}
                        className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low border border-[#E5E7EB] text-sm focus:outline-none focus:ring-1 focus:ring-black"
                      >
                        <option>Commerce Graduate</option>
                        <option>Non-Commerce</option>
                        <option>Working Professional</option>
                        <option>Business Owner</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-on-surface mb-1.5">
                      Any questions or specific scheduling needs?
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Interested in weekday morning batch starting next Monday..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low border border-[#E5E7EB] text-sm focus:outline-none focus:ring-1 focus:ring-black"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 font-label-md text-label-md text-white bg-black hover:bg-neutral-800 transition-all py-3.5 px-8 rounded-full font-semibold shadow-sm mt-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Counseling Request</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
