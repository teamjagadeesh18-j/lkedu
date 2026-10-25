import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AboutScreen } from './components/AboutScreen';
import { HomeScreen } from './components/HomeScreen';
import { ProgramsScreen } from './components/ProgramsScreen';
import { CertificationsScreen } from './components/CertificationsScreen';
import { BlogsScreen } from './components/BlogsScreen';
import { ResourcesScreen } from './components/ResourcesScreen';
import { ContactScreen } from './components/ContactScreen';
import { TermsScreen } from './components/TermsScreen';
import { PrivacyScreen } from './components/PrivacyScreen';
import { CertificateVerificationModal } from './components/CertificateVerificationModal';
import { CounselorModal } from './components/CounselorModal';

export default function App() {
  // Default to 'home' as requested by the user, or read from hash
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
          <AboutScreen
            onNavigate={handleNavigate}
            onOpenCounselor={() => handleOpenCounselor()}
            onOpenVerify={() => handleOpenVerify()}
          />
        )}

        {currentPath === 'home' && (
          <HomeScreen
            onNavigate={handleNavigate}
            onOpenCounselor={() => handleOpenCounselor()}
            onOpenVerify={() => handleOpenVerify()}
          />
        )}

        {currentPath === 'programs' && (
          <ProgramsScreen
            onNavigate={handleNavigate}
            onOpenCounselor={handleOpenCounselor}
            onOpenVerify={() => handleOpenVerify()}
          />
        )}

        {currentPath === 'certifications' && (
          <CertificationsScreen
            onNavigate={handleNavigate}
            onOpenCounselor={handleOpenCounselor}
            onOpenVerify={handleOpenVerify}
          />
        )}

        {currentPath === 'blogs' && (
          <BlogsScreen
            onNavigate={handleNavigate}
            onOpenCounselor={handleOpenCounselor}
          />
        )}

        {currentPath === 'resources' && (
          <ResourcesScreen
            onNavigate={handleNavigate}
            onOpenCounselor={handleOpenCounselor}
            onOpenVerify={() => handleOpenVerify()}
          />
        )}

        {currentPath === 'contact-us' && <ContactScreen />}

        {(currentPath === 'terms-and-conditions' || currentPath === 'terms' || currentPath === 'terms-of-service') && (
          <TermsScreen
            onNavigate={handleNavigate}
            onOpenCounselor={() => handleOpenCounselor()}
            onOpenVerify={() => handleOpenVerify()}
          />
        )}

        {(currentPath === 'privacy-policy' || currentPath === 'privacy') && (
          <PrivacyScreen
            onNavigate={handleNavigate}
            onOpenCounselor={() => handleOpenCounselor()}
            onOpenVerify={() => handleOpenVerify()}
          />
        )}
      </main>

      {/* Institutional Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenVerify={() => handleOpenVerify()}
        onOpenCounselor={() => handleOpenCounselor()}
      />

      {/* Interactive Counselor & Trial Booking Modal */}
      <CounselorModal
        isOpen={isCounselorOpen}
        onClose={() => setIsCounselorOpen(false)}
        defaultProgram={targetProgram}
      />

      {/* Interactive TEPL Certificate Verification Modal */}
      <CertificateVerificationModal
        isOpen={isVerifyOpen}
        onClose={() => setIsVerifyOpen(false)}
        defaultCertId={targetCertId}
      />
    </div>
  );
}
