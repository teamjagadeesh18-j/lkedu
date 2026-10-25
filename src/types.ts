export interface Program {
  id: string;
  title: string;
  code?: string;
  level: 'Foundation' | 'Intermediate' | 'Advanced' | 'Master';
  duration: string;
  hours: string;
  mode: string;
  certification: string;
  tagline: string;
  description: string;
  keyTopics: string[];
  audience: string[];
  labProjectsCount: number;
  featured?: boolean;
}

export interface FacultyMember {
  name: string;
  experience: string;
  role: string;
  bio: string;
  specialization: string;
  image: string;
  alt: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  publishDate: string;
  excerpt: string;
  author: string;
  content: string[];
  tags: string[];
  sections?: {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
}

export interface VerifiableCertificate {
  certificateId: string;
  studentName: string;
  courseTitle: string;
  grade: 'A+' | 'A' | 'Distinction' | 'A+ Professional';
  score: string;
  issueDate: string;
  centerId: string;
  centerName: string;
  verificationStatus: 'Verified & Authentic' | 'Pending Review' | 'Invalid';
  teplCandidateId: string;
}

export interface InquiryFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  selectedProgram: string;
  batchPreference: 'Morning (10 AM - 12 PM)' | 'Afternoon (2 PM - 4 PM)' | 'Evening (5:30 PM - 7:30 PM)' | 'Weekend Saturday/Sunday';
  background: 'Commerce Graduate' | 'Non-Commerce' | 'Working Professional' | 'Business Owner';
  notes?: string;
}

export interface CertificationProgramItem {
  id: string; // e.g. 'LK-1024'
  title: string;
  category: string;
  description: string;
  issuedYear: string;
  badges: string[];
  keySkills: string[];
  duration: string;
  programSlug?: string;
}
