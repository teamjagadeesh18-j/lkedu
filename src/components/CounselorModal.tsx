import React, { useState } from 'react';
import { X, Phone, Calendar, CheckCircle2, ShieldCheck, ChevronDown, ChevronUp, Clock, User, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './ui/WhatsAppIcon';
import { CONTACT_INFO, openGeneralWhatsApp, triggerPhoneCall } from '../lib/contact';

interface CounselorModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProgram?: string;
}

export const CounselorModal: React.FC<CounselorModalProps> = ({
  isOpen,
  onClose,
  defaultProgram = 'Tally Essentials',
}) => {
  const [showCallbackForm, setShowCallbackForm] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedProgram, setSelectedProgram] = useState(defaultProgram);
  const [timeSlot, setTimeSlot] = useState('Today (Within 2 Hours)');
  const [mode, setMode] = useState<'callback' | 'lab_visit'>('callback');
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const handleWhatsAppClick = () => {
    const text = defaultProgram
      ? `Hi LK Educations, I would like to talk to your team regarding "${defaultProgram}" admissions and course details.`
      : 'Hi LK Educations, I would like to talk to your team regarding course admissions and batch schedules.';
    openGeneralWhatsApp(text);
    onClose();
  };

  const handlePhoneCallClick = () => {
    triggerPhoneCall(CONTACT_INFO.primaryTel);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
  };

  const handleReset = () => {
    setConfirmed(false);
    setShowCallbackForm(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#E5E7EB] animate-in fade-in zoom-in-95 my-8">
        {/* Modal Header */}
        <div className="flex items-start justify-between pb-4 border-b border-gray-100">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container text-xs font-semibold text-gray-700 mb-1.5">
              <span>Tirunelveli Admissions Desk</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-gray-950 tracking-tight">
              Talk to Our Team
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
              Choose your preferred way to connect with our counselors:
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors shrink-0"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {confirmed ? (
          <div className="py-8 text-center flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-secondary flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-bold text-gray-950">
              Request Received!
            </h4>
            <p className="text-sm text-gray-600 max-w-sm">
              We have noted your details for <span className="font-bold text-black">{selectedProgram}</span>. Our senior counselor will connect with you via {mode === 'callback' ? 'phone call' : 'in-person lab demo'} shortly.
            </p>
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 text-xs text-gray-700 text-left w-full space-y-1.5">
              <div><span className="font-semibold text-gray-900">Candidate:</span> {name}</div>
              <div><span className="font-semibold text-gray-900">Phone:</span> {phone}</div>
              <div><span className="font-semibold text-gray-900">Preferred Slot:</span> {timeSlot}</div>
              <div><span className="font-semibold text-gray-900">Campus:</span> 182, S. N. High Road, Tirunelveli Junction</div>
            </div>
            <button
              onClick={handleReset}
              className="mt-2 w-full py-3 rounded-full bg-black text-white font-semibold text-sm hover:bg-neutral-800 transition-all"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="py-4 space-y-4">
            {/* 2 PRIMARY OPTIONS */}
            <div className="grid grid-cols-1 gap-3.5">
              {/* Option 1: Talk to Team (Phone Icon) */}
              <div className="rounded-2xl border-2 border-gray-200 hover:border-black transition-all p-4 sm:p-5 bg-white shadow-xs group">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-black text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-950 text-base flex items-center gap-2">
                        <span>Talk to Team (Phone)</span>
                      </h4>
                      <p className="text-xs text-gray-500">
                        Speak directly with senior academic counselors
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-1">
                  <a
                    href={`tel:${CONTACT_INFO.primaryTel}`}
                    onClick={handlePhoneCallClick}
                    className="flex-1 py-2.5 px-4 rounded-full bg-black hover:bg-neutral-800 text-white font-semibold text-xs sm:text-sm text-center transition-all inline-flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call {CONTACT_INFO.primaryPhone}</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setShowCallbackForm(!showCallbackForm)}
                    className="py-2.5 px-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-semibold transition-all inline-flex items-center justify-center gap-1"
                  >
                    <span>{showCallbackForm ? 'Hide Form' : 'Request Callback'}</span>
                    {showCallbackForm ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Option 2: WhatsApp (WhatsApp Icon) */}
              <div className="rounded-2xl border-2 border-emerald-500/30 bg-emerald-50/40 hover:border-emerald-600 transition-all p-4 sm:p-5 shadow-xs group">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                      <WhatsAppIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-gray-950 text-base">
                          Chat on WhatsApp
                        </h4>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                          Online Now
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Get instant syllabus PDFs, fees, and batch details
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleWhatsAppClick}
                  className="w-full py-2.5 px-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1da850] text-white font-bold text-xs sm:text-sm transition-all inline-flex items-center justify-center gap-2 shadow-sm hover:shadow"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Start WhatsApp Chat</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Optional Collapsible Callback Request Form */}
            {showCallbackForm && (
              <form onSubmit={handleSubmit} className="pt-2 border-t border-gray-100 space-y-3 animate-in fade-in slide-in-from-top-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                    Schedule a Free Callback / Lab Visit
                  </span>
                  <div className="flex items-center gap-1 p-0.5 bg-gray-100 rounded-lg text-[11px] font-semibold">
                    <button
                      type="button"
                      onClick={() => setMode('callback')}
                      className={`px-2 py-0.5 rounded-md ${mode === 'callback' ? 'bg-white shadow-xs text-black' : 'text-gray-600'}`}
                    >
                      Phone Call
                    </button>
                    <button
                      type="button"
                      onClick={() => setMode('lab_visit')}
                      className={`px-2 py-0.5 rounded-md ${mode === 'lab_visit' ? 'bg-white shadow-xs text-black' : 'text-gray-600'}`}
                    >
                      Lab Visit
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Anandha Krishnan"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Phone / Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 94431 XXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Program of Interest
                    </label>
                    <select
                      value={selectedProgram}
                      onChange={(e) => setSelectedProgram(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 text-xs focus:outline-none focus:ring-1 focus:ring-black"
                    >
                      <option>Tally Essentials</option>
                      <option>Tally Professional</option>
                      <option>GST with Tally Prime</option>
                      <option>TDS & Corporate Payroll</option>
                      <option>Tally Prime Basics</option>
                      <option>All-in-One Accounting Master</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Preferred Time Slot
                    </label>
                    <select
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 text-xs focus:outline-none focus:ring-1 focus:ring-black"
                    >
                      <option>Today (Within 2 Hours)</option>
                      <option>Tomorrow Morning (10 AM - 12 PM)</option>
                      <option>Tomorrow Afternoon (2 PM - 4 PM)</option>
                      <option>Tomorrow Evening (5:30 PM - 7 PM)</option>
                      <option>Weekend Saturday Session</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-full bg-black hover:bg-neutral-800 text-white font-semibold text-xs transition-all shadow-xs"
                >
                  Confirm {mode === 'callback' ? 'Callback Booking' : 'Free Lab Trial'}
                </button>
              </form>
            )}

            <div className="pt-2 text-center">
              <p className="text-[11px] text-gray-500 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-secondary shrink-0" />
                <span>Zero spam policy • Tirunelveli Campus Helpline: {CONTACT_INFO.primaryPhone}</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
