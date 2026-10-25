import React, { useState } from 'react';
import { ASSETS } from '../data/mockData';
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
    <div className="sticky top-4 z-50 px-4 sm:px-6">
      <header className="max-w-7xl mx-auto h-16 bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_12px_32px_-4px_rgba(17,24,39,0.08),0_4px_12px_-2px_rgba(17,24,39,0.03)] border border-[#E5E7EB] px-4 sm:px-6 flex items-center justify-between">
        {/* Brand logo & identity */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-lg"
            aria-label="LK Educations Home"
          >
            <img
              alt="LK Educations Logo"
              className="h-11 sm:h-12 w-auto object-contain"
              src={ASSETS.logo}
              onError={(e) => {
                // Fallback styled emblem
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="flex items-center">
              <span className="font-title-sm text-title-sm text-on-surface font-bold tracking-tight">
                LK Educations
              </span>
            </div>
          </button>
        </div>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-8">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;

            return (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`font-label-md text-label-md transition-colors ${
                  isActive
                    ? 'text-on-surface font-bold bg-surface-container rounded-full px-3 py-1.5'
                    : 'text-on-surface-variant hover:text-on-surface py-1.5 px-3'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action & Profile Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenCounselor}
            className="inline-flex items-center justify-center font-label-md text-label-md text-white bg-black hover:bg-neutral-800 active:bg-black px-4 sm:px-5 py-2.5 rounded-full transition-all shadow-[0_4px_12px_rgba(0,0,0,0.1)] shrink-0 cursor-pointer"
          >
            Talk to Team
          </button>

          {/* Quick Account/Center Menu */}
          <div className="relative">
            <button
              onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
              className="w-8 h-8 rounded-full bg-black hover:bg-neutral-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
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
                    className="w-full text-left flex items-center gap-2 px-2.5 py-2 rounded-lg text-sm text-on-surface hover:bg-surface-container transition-colors"
                  >
                    <ShieldCheck className="w-4 h-4 text-secondary" />
                    <span>Verify a Certificate</span>
                  </button>
                  <button
                    onClick={() => {
                      setProfileDropdownOpen(false);
                      onOpenCounselor();
                    }}
                    className="w-full text-left flex items-center gap-2 px-2.5 py-2 rounded-lg text-sm text-on-surface hover:bg-surface-container transition-colors"
                  >
                    <PhoneCall className="w-4 h-4 text-on-surface-variant" />
                    <span>Admissions Help Desk (Phone & WhatsApp)</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-on-surface rounded-lg hover:bg-surface-container focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 bg-white rounded-2xl shadow-xl border border-[#E5E7EB] p-4 flex flex-col gap-2 animate-in fade-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => handleNavClick(link.path)}
              className={`w-full text-left px-4 py-2.5 rounded-xl font-label-md text-label-md transition-colors ${
                currentPath === link.path
                  ? 'bg-surface-container font-bold text-on-surface'
                  : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="border-t border-[#E5E7EB] pt-2 mt-1 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVerify();
              }}
              className="w-full flex items-center gap-2 px-4 py-2.5 rounded-xl text-left font-label-md text-label-md text-secondary bg-secondary/10"
            >
              <ShieldCheck className="w-4 h-4" />
              Verify Certificate
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCounselor();
              }}
              className="w-full py-2.5 rounded-full font-label-md text-label-md text-white bg-black text-center"
            >
              Talk to Our Team
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
