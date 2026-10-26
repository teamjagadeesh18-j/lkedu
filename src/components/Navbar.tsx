import React, { useState, useRef, useEffect } from 'react';
import { ASSETS } from '../data/mockData';
import { CONTACT_INFO } from '../lib/contact';
import { Menu, X, User, PhoneCall, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenCounselor: () => void;
  onOpenVerify: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
  onOpenCounselor,
  onOpenVerify,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const profileDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!profileDropdownOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(e.target as Node)) {
        setProfileDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [profileDropdownOpen]);

  const navLinks = [
    { label: 'Home', path: 'home' },
    { label: 'About Us', path: 'about-us' },
    { label: 'Programs', path: 'programs' },
    { label: 'Certifications', path: 'certifications' },
    { label: 'Resources', path: 'resources' },
    { label: 'Blogs', path: 'blogs' },
    { label: 'Contact Us', path: 'contact-us' },
  ];

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <div className="sticky top-2 sm:top-4 z-50 px-3 sm:px-6">
      <header className="max-w-7xl mx-auto h-14 sm:h-16 bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_10px_30px_-4px_rgba(17,24,39,0.08),0_4px_12px_-2px_rgba(17,24,39,0.03)] border border-[#E5E7EB] px-3 sm:px-6 flex items-center justify-between transition-all">
        {/* Brand logo & identity */}
        <div className="flex items-center min-w-0">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 sm:gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-lg group"
            aria-label="LK Educations Home"
          >
            <img
              alt="LK Educations Logo"
              className="h-8 sm:h-11 w-auto object-contain shrink-0 group-hover:scale-105 transition-transform"
              src={ASSETS.logo}
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="flex items-center min-w-0">
              <span className="font-black text-sm sm:text-base lg:text-lg text-neutral-900 tracking-tight whitespace-nowrap">
                LK Educations
              </span>
            </div>
          </button>
        </div>

        {/* Center Desktop Navigation (visible on laptops & large displays) */}
        <nav className="hidden lg:flex items-center gap-2 xl:gap-5">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;

            return (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`text-xs xl:text-sm font-semibold transition-all px-3 py-1.5 rounded-full cursor-pointer ${
                  isActive
                    ? 'text-neutral-950 font-bold bg-neutral-100 shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-50'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right Section: On mobile ONLY the hamburger button is rendered. No other buttons! */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Tablet & Desktop "Talk to Team" CTA - STRICTLY HIDDEN ON MOBILE */}
          <button
            onClick={onOpenCounselor}
            className="hidden md:inline-flex items-center justify-center text-xs sm:text-sm font-bold text-white bg-black hover:bg-neutral-800 active:bg-black px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all shadow-[0_4px_12px_rgba(0,0,0,0.12)] shrink-0 cursor-pointer"
          >
            Talk to Team
          </button>

          {/* Desktop User/Center Menu - STRICTLY HIDDEN ON MOBILE */}
          <div ref={profileDropdownRef} className="hidden lg:block relative">
            <button
              onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
              className="w-8 h-8 rounded-full bg-black hover:bg-neutral-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black cursor-pointer shadow-xs"
              aria-label="Student and verification tools"
            >
              <User className="w-4 h-4" />
            </button>

            {profileDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-xl shadow-xl border border-[#E5E7EB] p-3 z-50 animate-in fade-in slide-in-from-top-1">
                <div className="pb-2 border-b border-[#E5E7EB]">
                  <p className="font-title-sm text-title-sm font-bold text-on-surface">Tirunelveli Campus</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">TEPL Center ID: TEPL-TN-627001</p>
                </div>
                <div className="pt-2 flex flex-col gap-1">
                  <button
                    onClick={() => {
                      setProfileDropdownOpen(false);
                      onOpenVerify();
                    }}
                    className="w-full text-left flex items-center gap-2 px-2.5 py-2 rounded-lg text-sm text-on-surface hover:bg-surface-container transition-colors cursor-pointer"
                  >
                    <ShieldCheck className="w-4 h-4 text-secondary" />
                    <span>Verify a Certificate</span>
                  </button>
                  <button
                    onClick={() => {
                      setProfileDropdownOpen(false);
                      onOpenCounselor();
                    }}
                    className="w-full text-left flex items-center gap-2 px-2.5 py-2 rounded-lg text-sm text-on-surface hover:bg-surface-container transition-colors cursor-pointer"
                  >
                    <PhoneCall className="w-4 h-4 text-on-surface-variant" />
                    <span>Admissions Help Desk</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Mobile & Tablet Hamburger Toggle - On mobile, this is the ONLY interactive element on the right */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-900 rounded-xl hover:bg-neutral-100 active:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-400 transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile & Tablet Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-[#E5E7EB] p-4 sm:p-5 flex flex-col gap-2 max-h-[calc(100vh-5rem)] overflow-y-auto animate-in fade-in slide-in-from-top-2">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors cursor-pointer flex items-center justify-between ${
                  isActive
                    ? 'bg-neutral-100 font-bold text-neutral-950'
                    : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                }`}
              >
                <span>{link.label}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />}
              </button>
            );
          })}

          {/* Drawer Actions */}
          <div className="border-t border-[#E5E7EB] pt-3 mt-1 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVerify();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-secondary bg-secondary/10 hover:bg-secondary/15 transition-colors cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Verify TEPL Certificate</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCounselor();
              }}
              className="w-full py-3 rounded-full text-sm font-bold text-white bg-black hover:bg-neutral-800 transition-colors text-center shadow-sm cursor-pointer"
            >
              Talk to Our Team
            </button>
          </div>

          {/* Direct Campus Help Desk Footer */}
          <div className="pt-2 text-center text-xs text-neutral-500 border-t border-neutral-100">
            <span>Tirunelveli Campus: </span>
            <a href={`tel:${CONTACT_INFO.primaryTel}`} className="text-neutral-900 font-semibold hover:underline">
              {CONTACT_INFO.primaryPhone}
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
