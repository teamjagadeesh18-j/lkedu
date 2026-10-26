import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeScreen } from './components/HomeScreen';

// Code-split secondary screens & modals to eliminate monolithic bundle
const AboutScreen = lazy(() => import('./components/AboutScreen').then(m => ({ default: m.AboutScreen })));
const ProgramsScreen = lazy(() => import('./components/ProgramsScreen').then(m => ({ default: m.ProgramsScreen })));
const CertificationsScreen = lazy(() => import('./components/CertificationsScreen').then(m => ({ default: m.CertificationsScreen })));
const BlogsScreen = lazy(() => import('./components/BlogsScreen').then(m => ({ default: m.BlogsScreen })));
const ResourcesScreen = lazy(() => import('./components/ResourcesScreen').then(m => ({ default: m.ResourcesScreen })));
const ContactScreen = lazy(() => import('./components/ContactScreen').then(m => ({ default: m.ContactScreen })));
const TermsScreen = lazy(() => import('./components/TermsScreen').then(m => ({ default: m.TermsScreen })));
const PrivacyScreen = lazy(() => import('./components/PrivacyScreen').then(m => ({ default: m.PrivacyScreen })));
const CounselorModal = lazy(() => import('./components/CounselorModal').then(m => ({ default: m.CounselorModal })));
const CertificateVerificationModal = lazy(() => import('./components/CertificateVerificationModal').then(m => ({ default: m.CertificateVerificationModal })));
const PromotionalPosterModal = lazy(() => import('./components/PromotionalPosterModal').then(m => ({ default: m.PromotionalPosterModal })));

const ROUTE_META: Record<string, { title: string; desc: string }> = {
  home: {
    title: 'LK Educations - Practical Accounting & Tally Prime Mastery | Tirunelveli',
    desc: 'Premier authorized Tally & GST vocational training institute in Tirunelveli offering hands-on accounting mastery, TEPL certification, and career placement.'
  },
  'about-us': {
    title: 'About Us - LK Educations | Tirunelveli Campus & 10+ Years Heritage',
    desc: 'Discover our practical dual-monitor laboratory, authorized TEPL assessment center, and dedicated faculty in Tirunelveli Junction.'
  },
  programs: {
    title: 'Courses & Programs - Tally Prime, GST, TDS & Bookkeeping | LK Educations',
    desc: 'Explore comprehensive vocational programs in Tally Essentials, Tally Professional, GST filing, TDS, and Payroll with 100% lab practice.'
  },
  certifications: {
    title: 'TEPL Certifications & Verifiable Credentials | LK Educations',
    desc: 'Verify authentic Tally Education candidate credentials and certifications recognized across India and Middle East.'
  },
  blogs: {
    title: 'Accounting & GST Insights Blog | LK Educations',
    desc: 'Practical guides, E-Way billing rules, GST updates, and career tips from senior accounting practitioners.'
  },
  resources: {
    title: 'Free Student Learning Resources & Syllabus Downloads | LK Educations',
    desc: 'Download keyboard shortcuts, course brochures, syllabus blueprints, and practice datasets.'
  },
  'contact-us': {
    title: 'Contact Us - Admissions Desk & Campus Visit | LK Educations',
    desc: 'Visit our S. N. High Road campus or connect with counselors directly via phone (+91 94886 87563) or WhatsApp.'
  },
  terms: {
    title: 'Terms & Conditions | LK Educations',
    desc: 'Official terms of admission, attendance requirements, and certification policies at LK Educations.'
  },
  'terms-and-conditions': {
    title: 'Terms & Conditions | LK Educations',
    desc: 'Official terms of admission, attendance requirements, and certification policies at LK Educations.'
  },
  'terms-of-service': {
    title: 'Terms & Conditions | LK Educations',
    desc: 'Official terms of admission, attendance requirements, and certification policies at LK Educations.'
  },
  privacy: {
    title: 'Privacy Policy | LK Educations',
    desc: 'Privacy practices and data protection commitment for students and website visitors at LK Educations.'
  },
  'privacy-policy': {
    title: 'Privacy Policy | LK Educations',
    desc: 'Privacy practices and data protection commitment for students and website visitors at LK Educations.'
  }
};

const ScreenFallback = () => (
  <div className="min-h-[50vh] flex flex-col items-center justify-center py-16 gap-3">
    <div className="w-8 h-8 rounded-full border-2 border-secondary border-t-transparent animate-spin" />
    <span className="text-xs text-neutral-500 font-mono">Loading LK Educations...</span>
  </div>
);

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash.replace('#', '');
      if (hash) return hash;
    }
    return 'home';
  });
  const [isCounselorOpen, setIsCounselorOpen] = useState<boolean>(false);
  const [isVerifyOpen, setIsVerifyOpen] = useState<boolean>(false);
  const [targetProgram, setTargetProgram] = useState<string>('Tally Essentials');
  const [targetCertId, setTargetCertId] = useState<string>('LK-1024');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setCurrentPath(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Dynamic titles and meta descriptions per active route
  useEffect(() => {
    const meta = ROUTE_META[currentPath] || ROUTE_META.home;
    document.title = meta.title;
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) {
      descMeta.setAttribute('content', meta.desc);
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', meta.title);
    }
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', meta.desc);
    }
  }, [currentPath]);

  // Handle URL hash or direct navigation
  const handleNavigate = (path: string) => {
    setCurrentPath(path);
    window.location.hash = path;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenCounselor = (programTitle?: string) => {
    if (programTitle) {
      setTargetProgram(programTitle);
    }
    setIsCounselorOpen(true);
  };

  const handleOpenVerify = (certId?: string) => {
    if (certId) {
      setTargetCertId(certId);
    }
    setIsVerifyOpen(true);
  };

  return (
    <div className="min-h-screen bg-surface-container-low text-on-surface antialiased flex flex-col justify-between selection:bg-secondary/20 selection:text-secondary">
      {/* Sticky Floating Navbar */}
      <Navbar
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onOpenCounselor={() => handleOpenCounselor()}
        onOpenVerify={() => handleOpenVerify()}
      />

      {/* Main Content Area */}
      <main className="w-full pt-6 sm:pt-8 flex-grow">
        {currentPath === 'about-us' && (
          <Suspense fallback={<ScreenFallback />}>
            <AboutScreen
              onNavigate={handleNavigate}
              onOpenCounselor={() => handleOpenCounselor()}
              onOpenVerify={() => handleOpenVerify()}
            />
          </Suspense>
        )}

        {currentPath === 'home' && (
          <HomeScreen
            onNavigate={handleNavigate}
            onOpenCounselor={() => handleOpenCounselor()}
            onOpenVerify={() => handleOpenVerify()}
          />
        )}

        {currentPath === 'programs' && (
          <Suspense fallback={<ScreenFallback />}>
            <ProgramsScreen
              onNavigate={handleNavigate}
              onOpenCounselor={handleOpenCounselor}
              onOpenVerify={() => handleOpenVerify()}
            />
          </Suspense>
        )}

        {currentPath === 'certifications' && (
          <Suspense fallback={<ScreenFallback />}>
            <CertificationsScreen
              onNavigate={handleNavigate}
              onOpenCounselor={handleOpenCounselor}
              onOpenVerify={handleOpenVerify}
            />
          </Suspense>
        )}

        {currentPath === 'blogs' && (
          <Suspense fallback={<ScreenFallback />}>
            <BlogsScreen
              onNavigate={handleNavigate}
              onOpenCounselor={handleOpenCounselor}
            />
          </Suspense>
        )}

        {currentPath === 'resources' && (
          <Suspense fallback={<ScreenFallback />}>
            <ResourcesScreen
              onNavigate={handleNavigate}
              onOpenCounselor={handleOpenCounselor}
              onOpenVerify={() => handleOpenVerify()}
            />
          </Suspense>
        )}

        {currentPath === 'contact-us' && (
          <Suspense fallback={<ScreenFallback />}>
            <ContactScreen />
          </Suspense>
        )}

        {(currentPath === 'terms-and-conditions' || currentPath === 'terms' || currentPath === 'terms-of-service') && (
          <Suspense fallback={<ScreenFallback />}>
            <TermsScreen
              onNavigate={handleNavigate}
              onOpenCounselor={() => handleOpenCounselor()}
              onOpenVerify={() => handleOpenVerify()}
            />
          </Suspense>
        )}

        {(currentPath === 'privacy-policy' || currentPath === 'privacy') && (
          <Suspense fallback={<ScreenFallback />}>
            <PrivacyScreen
              onNavigate={handleNavigate}
              onOpenCounselor={() => handleOpenCounselor()}
              onOpenVerify={() => handleOpenVerify()}
            />
          </Suspense>
        )}
      </main>

      {/* Institutional Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenVerify={() => handleOpenVerify()}
        onOpenCounselor={() => handleOpenCounselor()}
      />

      {/* Interactive Counselor & Trial Booking Modal */}
      {isCounselorOpen && (
        <Suspense fallback={null}>
          <CounselorModal
            isOpen={isCounselorOpen}
            onClose={() => setIsCounselorOpen(false)}
            defaultProgram={targetProgram}
          />
        </Suspense>
      )}

      {/* Interactive TEPL Certificate Verification Modal */}
      {isVerifyOpen && (
        <Suspense fallback={null}>
          <CertificateVerificationModal
            isOpen={isVerifyOpen}
            onClose={() => setIsVerifyOpen(false)}
            defaultCertId={targetCertId}
          />
        </Suspense>
      )}

      {/* 2-Second Timed Promotional Poster Popup (SessionStorage frequency cap) */}
      <Suspense fallback={null}>
        <PromotionalPosterModal />
      </Suspense>
    </div>
  );
}
