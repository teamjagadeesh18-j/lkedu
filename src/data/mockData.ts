import { Program, FacultyMember, BlogPost, VerifiableCertificate, CertificationProgramItem } from '../types';

export const ASSETS = {
  logo: '/lk-logo.png',
  logoEmblem: '/lk-logo-emblem.png',
  logoOriginal: '/lk-logo-original.png',
  founder: '/campus/founder-director.jpg',
  labFacility: '/campus/hero-bootcamp-speaker-session.jpg',
  facultySenthil: '/campus/faculty-senthil.jpg',
  facultyPriya: '/campus/faculty-priya.jpg',
  facultyVignesh: '/campus/hero-bootcamp-student-podium.jpg',
};

export const FACULTY_DATA: FacultyMember[] = [
  {
    name: 'R. Senthil Nathan',
    experience: '14+ Years Experience',
    role: 'FCA Advisor & Senior Tally Master',
    bio: 'Practicing Chartered Accountant specializing in statutory audits, corporate structuring, and advanced ERP implementation for multi-tier enterprises.',
    specialization: 'Audit & Corporate Taxation',
    image: ASSETS.facultySenthil,
    alt: 'Distinguished South Indian senior Chartered Accountant and Tally educator in his late 40s'
  },
  {
    name: 'Priya Meenakshi',
    experience: '9+ Years Experience',
    role: 'Senior GST & Corporate Taxation Specialist',
    bio: 'Authority on GST portal reconciliation, Input Tax Credit (ITC) audits, and automated payroll computations for manufacturing units.',
    specialization: 'GST Compliance & E-Invoicing',
    image: ASSETS.facultyPriya,
    alt: 'Experienced South Indian female taxation mentor in her mid 30s'
  },
  {
    name: 'K. Vignesh',
    experience: '6+ Years Experience',
    role: 'Tally Prime Certified Professional & Lab Mentor',
    bio: 'Master of speed navigation and real-time ledger diagnostics. Mentors learners individually through complex invoice entry and lab simulations.',
    specialization: 'Tally Prime & Practical Labs',
    image: ASSETS.facultyVignesh,
    alt: 'Young enthusiastic Indian male technology lab mentor in his early 30s'
  }
];

export const PROGRAMS_DATA: Program[] = [
  {
    id: 'tally-essentials',
    title: 'Tally Essentials',
    level: 'Foundation',
    duration: '45 Days',
    hours: '90 Hours (Lab Intensive)',
    mode: 'Classroom & Dual-Screen Lab',
    certification: 'TEPL Tally Essentials Certificate',
    tagline: 'Master fundamental vouchers, bank reco, and day-to-day books of account.',
    description: 'Designed for fresh commerce graduates and non-commerce career pivoters who need rock-solid muscle memory for bookkeeping, inventory management, and financial statements.',
    keyTopics: [
      'Fundamentals of Double-Entry Bookkeeping in Tally Prime 4.x',
      'Ledger Configuration, Grouping, and Cost Center Allocation',
      'Sales, Purchase, Payment, Receipt & Journal Vouchers Entry',
      'Real-time Bank Statement Reconciliation (BRS) with Auto-matching',
      'Inventory Tracking: Stock Items, Godowns, Batch Numbers & Expiry',
      'Balance Sheet, Profit & Loss, Trial Balance generation & audit trail'
    ],
    audience: ['B.Com / BBA / M.Com Graduates', 'Office Clerks seeking promotion', 'Small retail shop owners'],
    labProjectsCount: 18,
    featured: true
  },
  {
    id: 'tally-professional',
    title: 'Tally Professional',
    level: 'Advanced',
    duration: '75 Days',
    hours: '150 Hours',
    mode: 'Dual-Monitor Lab + Auditing Drills',
    certification: 'TEPL Tally Professional with Digital QR Badge',
    tagline: 'Comprehensive ERP mastery with multi-currency, advanced inventory, and MIS reporting.',
    description: 'The golden standard curriculum for senior accounting executives and financial supervisors handling complex supply chain accounting, cost tracking, and executive MIS dashboards.',
    keyTopics: [
      'Multi-Currency Transactions and Forex Gain/Loss Adjustments',
      'Bill of Materials (BOM), Manufacturing Vouchers & Job Costing',
      'Order Processing: Purchase Orders, Sales Orders & Delivery Notes',
      'Interest Calculation on Outstanding Receivables & Payables',
      'Advanced Security Controls, User Roles & Audit Trail Compliance',
      'Exporting Data to Excel, XML, JSON, and Auto Email Invoicing'
    ],
    audience: ['Experienced junior accountants', 'Commerce professionals preparing for MNCs', 'Audit assistants'],
    labProjectsCount: 26,
    featured: true
  },
  {
    id: 'tally-prime-basics',
    title: 'Tally Prime Basics',
    level: 'Foundation',
    duration: '20 Days',
    hours: '40 Hours',
    mode: 'Hands-On Computer Lab',
    certification: 'LK Tally Prime Basics Certificate',
    tagline: 'Quick-start primer on Tally Prime interface, company creation, and standard voucher entry.',
    description: 'Ideal for absolute beginners taking their very first step in computerized accounting. Learn software installation, navigation shortcuts, company setup, and primary accounting entries without stress.',
    keyTopics: [
      'Tally Prime Interface, Top Menu Bar & GoTo Navigation',
      'Company Creation, Alteration, Shutting and F11/F12 Features',
      'Creating Groups, Ledgers & Basic Chart of Accounts',
      'Recording Cash and Bank Receipts & Payments',
      'Simple Contra and Journal Voucher Entries',
      'Viewing Day Book, Trial Balance, and Cash Summary'
    ],
    audience: ['School leavers', 'Beginner students', 'Entrepreneurs managing single-proprietorships'],
    labProjectsCount: 10,
    featured: false
  },
  {
    id: 'principles-of-tally-bookkeeping',
    title: 'Principles of Tally Bookkeeping',
    level: 'Foundation',
    duration: '30 Days',
    hours: '60 Hours',
    mode: 'Classroom Theory + Practical Lab',
    certification: 'LK Certificate in Tally Bookkeeping Principles',
    tagline: 'Bridge the gap between theoretical debits/credits and computerized ledger postings.',
    description: 'A structured curriculum reinforcing the core golden rules of accounting applied directly inside Tally Prime. Covers subsidiary books, cash books, rectification of errors, and financial closing.',
    keyTopics: [
      'The 3 Golden Rules of Real, Personal, and Nominal Accounts',
      'Mapping Journal Entries into Tally Prime Voucher System',
      'Petty Cash Book, Three-Column Cash Book Management',
      'Bank Reconciliation Statement (BRS) preparation',
      'Rectification of Errors & Suspense Ledger Handling',
      'Adjusting Entries for Accruals, Prepayments & Depreciation'
    ],
    audience: ['Non-commerce degree holders', 'B.Sc / B.A. graduates pivoting to accounts', 'Administrative assistants'],
    labProjectsCount: 14,
    featured: false
  },
  {
    id: 'tally-prime-gst-fundamentals',
    title: 'Tally Prime with GST Fundamentals',
    level: 'Intermediate',
    duration: '45 Days',
    hours: '90 Hours',
    mode: 'Live GST Sandbox & Lab',
    certification: 'TEPL Tally Prime with GST Fundamentals Certificate',
    tagline: 'Master statutory goods and service tax invoicing, rate setups, and tax returns.',
    description: 'Comprehensive foundation in modern Indian indirect taxation within Tally Prime. Covers intra-state (CGST/SGST), inter-state (IGST), multi-slab tax invoices, debit/credit notes, and compliance rules.',
    keyTopics: [
      'Enabling GST in Tally Prime, State-wise Registration setup',
      'HSN/SAC Code Assignment to Items and Accounting Services',
      'Creating Tax Invoices, Bill of Supply & Delivery Challans',
      'Input Tax Credit (ITC) Availed and Eligible Tax Set-offs',
      'Debit Notes, Credit Notes & Supplementary Invoices',
      'Generating GSTR-1, GSTR-3B summaries and error correction'
    ],
    audience: ['Junior accountants', 'Billing operators', 'Graduates aiming for GST executive roles'],
    labProjectsCount: 20,
    featured: true
  },
  {
    id: 'financial-markets-and-services',
    title: 'Financial Markets and Services',
    level: 'Intermediate',
    duration: '30 Days',
    hours: '60 Hours',
    mode: 'Interactive Case Studies & Finance Lab',
    certification: 'LK Education Financial Markets & Services Certificate',
    tagline: 'Explore capital markets, banking instruments, NBFC operations, and mutual fund services.',
    description: 'Equips candidates with commercial knowledge of modern Indian financial systems, money markets, stock exchanges, depository systems (NSDL/CDSL), working capital credit, and mutual fund operations.',
    keyTopics: [
      'Structure of Indian Financial System (RBI, SEBI, IRDAI, PFRDA)',
      'Primary & Secondary Capital Markets, IPO Mechanics and Trading',
      'Commercial Banking Products, Letters of Credit & Bank Guarantees',
      'Money Market Instruments: Commercial Paper, T-Bills, CDs',
      'Mutual Funds, SIPs, NAV Calculation and Portfolio Management',
      'Working Capital Assessment and Loan Accounting Entries in Tally'
    ],
    audience: ['MBA/BBA Finance students', 'Bank exam aspirants', 'Financial analysts'],
    labProjectsCount: 12,
    featured: false
  },
  {
    id: 'tdl-essentials',
    title: 'TDL Essentials (Tally Definition Language)',
    level: 'Master',
    duration: '40 Days',
    hours: '80 Hours Coding & Prototyping',
    mode: 'Developer Workstation Lab',
    certification: 'TEPL TDL Developer Essentials Certificate',
    tagline: 'Code customized invoices, custom reports, and unique business workflows in Tally.',
    description: 'Specialized developer training in Tally Definition Language (TDL). Learn to modify screens, create custom reports, embed barcodes on invoices, add company-specific fields, and build custom menus.',
    keyTopics: [
      'TDL Architecture, Definitions, Objects, Fields, and Forms',
      'Customizing Default Sales Invoice Templates with Custom Logos/Terms',
      'Adding Custom UDF (User Defined Fields) to Masters & Vouchers',
      'Writing Custom Collections and Filtering Ledger Datasets',
      'Building Custom MIS Reports, Executive Dashboards & Summaries',
      'Packaging TDL into TCP Files and Deploying onto Tally Prime'
    ],
    audience: ['Software developers', 'Tally customization freelancers', 'IT administrators in accounting firms'],
    labProjectsCount: 16,
    featured: false
  },
  {
    id: 'gst-using-tally-prime',
    title: 'GST Using Tally Prime',
    level: 'Master',
    duration: '35 Days',
    hours: '70 Hours Sandbox Rigor',
    mode: 'Live GST Sandbox & Portal Drills',
    certification: 'TEPL Advanced GST with Tally Prime Certificate',
    tagline: 'Advanced GST returns filing, 2B automated matching, E-Invoicing & audit readiness.',
    description: 'Deep-dive practical course focusing on corporate GST statutory compliance, dealing with supplier mismatches in GSTR-2B, reverse charge mechanisms, job work challans, and annual return GSTR-9 prep.',
    keyTopics: [
      'GSTR-2B Auto-Reconciliation with JSON Import in Tally Prime 4.x',
      'E-Invoicing via IRP QR Code generation and API sync',
      'E-Way Bill Generation for Consignments above Rs 50,000',
      'Reverse Charge Mechanism (RCM) on GTA & Unregistered Vendors',
      'GST on Advance Receipts, Vouchers and Refund Vouchers',
      'GSTR-9 Annual Return data compilation and statutory reconciliation'
    ],
    audience: ['CA Article clerks', 'Senior GST accountants', 'Tax consultants'],
    labProjectsCount: 18,
    featured: true
  },
  {
    id: 'tds-using-tally',
    title: 'TDS Using Tally',
    level: 'Intermediate',
    duration: '25 Days',
    hours: '50 Hours',
    mode: 'Dual-Monitor Lab',
    certification: 'LK TDS Specialist Certificate',
    tagline: 'End-to-end direct tax deduction at source, e-challans, and Form 26Q return filing.',
    description: 'Master statutory withholding tax under the Indian Income Tax Act. Learn Section-wise TDS rate setup, threshold exemptions, Challan 281 generation, quarterly Form 26Q return preparation, and TRACES Form 16A download.',
    keyTopics: [
      'Section 194C (Contractors), 194J (Professionals), 194I (Rent)',
      'Higher Rate Deductions for Non-PAN / Inactive PAN Vendors (Sec 206AA)',
      'Recording TDS on Expenses and Bill Booking Vouchers',
      'Generating Tax Payment Challan ITNS-281 online and entering BSR codes',
      'Preparing Form 26Q e-TDS Text file using NSDL RPU and FVU utility',
      'TRACES Portal Navigation: Requesting and Generating Form 16A'
    ],
    audience: ['Accounts executives handling vendor bills', 'Finance officers', 'Tax filing assistants'],
    labProjectsCount: 14,
    featured: false
  },
  {
    id: 'payroll',
    title: 'Payroll',
    level: 'Intermediate',
    duration: '30 Days',
    hours: '60 Hours',
    mode: 'Enterprise Payroll Simulation',
    certification: 'LK Education Certified Payroll Specialist',
    tagline: 'Automated employee salary structuring, EPF, ESI, PT, and payslip disbursement.',
    description: 'End-to-end payroll management inside Tally Prime. Master employee attendance tracking, pay heads configuration, statutory compliance for Provident Fund, ESI, Professional Tax, and bank NEFT payroll sheets.',
    keyTopics: [
      'Configuring Earnings Pay Heads (Basic, DA, HRA, Conveyance, Bonus)',
      'Statutory Deduction Pay Heads: EPF (12%), ESI (0.75%), TN Professional Tax',
      'Employee Group Master setup and Salary Detail configuration',
      'Attendance Voucher & Production Voucher entry (Overtime hours)',
      'Automated Payroll Voucher Processing and Salary Register Generation',
      'Generating Confirmed Pay Slips and Bank Transfer NEFT advice files'
    ],
    audience: ['HR Managers & Executives', 'Payroll Officers', 'Administrative accountants'],
    labProjectsCount: 15,
    featured: true
  },
  {
    id: 'online-offline-courses',
    title: 'Online / Offline Courses',
    level: 'Foundation',
    duration: 'Flexible / 30 - 60 Days',
    hours: 'Live Interactive + Recorded Lab Portals',
    mode: 'Hybrid (Live Online Classrooms or In-Campus Labs)',
    certification: 'LK Education Hybrid Learning Certificate',
    tagline: 'Flexible dual-mode learning for college students, outstation candidates, and working professionals.',
    description: 'Designed for outstation candidates, working accountants, and college students who require flexibility. Access instructor-led live streaming sessions, cloud Tally Prime lab sandbox, doubt-clearing sessions, and weekend in-person practical lab tests.',
    keyTopics: [
      'Live interactive instructor sessions with recorded screen archives',
      'Browser-based Tally Prime Cloud Sandbox for home practice',
      'Step-by-step problem assignments with automated answer-key checks',
      'One-on-one mentor screen sharing for complex ledger troubleshooting',
      'Weekend physical lab access at our Tirunelveli Campus',
      'Direct mock exams and TEPL online certification preparation'
    ],
    audience: ['Working professionals', 'Outstation students across Tamil Nadu & Kerala', 'Distance learners'],
    labProjectsCount: 20,
    featured: true
  },
  {
    id: 'accounting-basics-crash-course',
    title: 'Accounting Basics Crash Course',
    level: 'Foundation',
    duration: '15 Days (Accelerated)',
    hours: '30 Hours High-Impact Immersion',
    mode: 'Crash Bootcamp & Daily Drills',
    certification: 'LK Certificate in Basic Business Accounting',
    tagline: 'High-velocity bootcamp turning beginners into confident bookkeeping practitioners.',
    description: 'Intensive, fast-track bootcamp covering essential practical bookkeeping rules, journal entries, ledger balancing, trial balances, and introductory voucher creation in Tally Prime.',
    keyTopics: [
      'Core Accounting Equation (Assets = Liabilities + Equity)',
      'Identification of Accounts, Debits, Credits and Source Documents',
      'Quick Voucher Posting: Cash sales, Credit Purchases & Payments',
      'Bank statement verification and passbook entries',
      'Compiling Month-End Trial Balance and detecting posting errors',
      'Introduction to Tally Prime for fast ledger lookups and balances'
    ],
    audience: ['Interview candidates needing quick review', 'Startup founders', 'Commerce degree freshers'],
    labProjectsCount: 12,
    featured: false
  }
];

export const CERTIFICATION_PROGRAMS: CertificationProgramItem[] = [
  {
    id: 'LK-1024',
    title: 'Tally Professional',
    category: 'Tally & ERP',
    description: 'This certificate confirms the successful completion of the Tally Professional program with practical and industry-oriented training.',
    issuedYear: '2026',
    badges: ['Certified', 'Industry Ready', 'Verified', 'Professional'],
    keySkills: ['Advanced Accounting', 'GST Returns', 'Inventory Management', 'Financial Reports'],
    duration: '90 Hours',
    programSlug: 'tally-professional'
  },
  {
    id: 'LK-1025',
    title: 'Tally Prime with GST Fundamentals',
    category: 'GST & Taxation',
    description: 'This certificate confirms the successful completion of the Tally Prime with GST Fundamentals program with practical and industry-oriented training.',
    issuedYear: '2026',
    badges: ['Certified', 'Industry Ready', 'Verified', 'Professional'],
    keySkills: ['GST Invoicing', 'GSTR-1 & 3B', 'Input Tax Credit', 'E-Way Bills'],
    duration: '60 Hours',
    programSlug: 'gst-fundamentals'
  },
  {
    id: 'LK-1026',
    title: 'Financial Markets and Services',
    category: 'Financial Markets',
    description: 'This certificate confirms the successful completion of the Financial Markets and Services program with practical and industry-oriented training.',
    issuedYear: '2026',
    badges: ['Certified', 'Industry Ready', 'Verified', 'Professional'],
    keySkills: ['Capital Markets', 'Banking Operations', 'Securities Analysis', 'Financial Instruments'],
    duration: '45 Hours',
    programSlug: 'financial-markets'
  },
  {
    id: 'LK-1027',
    title: 'TDL Essentials (Tally Definition Language)',
    category: 'ERP Customization',
    description: 'This certificate confirms the successful completion of the TDL Essentials (Tally Definition Language) program with practical and industry-oriented training.',
    issuedYear: '2026',
    badges: ['Certified', 'Industry Ready', 'Verified', 'Professional'],
    keySkills: ['TDL Coding', 'Invoice Customization', 'User Interface Tweaks', 'Custom Reports'],
    duration: '50 Hours',
    programSlug: 'tdl-essentials'
  },
  {
    id: 'LK-1028',
    title: 'TDS Using Tally',
    category: 'Direct Taxation',
    description: 'This certificate confirms the successful completion of the TDS Using Tally program with practical and industry-oriented training.',
    issuedYear: '2026',
    badges: ['Certified', 'Industry Ready', 'Verified', 'Professional'],
    keySkills: ['Tax Deducted at Source', 'Challan 281', 'Form 26Q Returns', 'TDS Certificates'],
    duration: '35 Hours',
    programSlug: 'tds-using-tally'
  },
  {
    id: 'LK-1029',
    title: 'Payroll Using Tally',
    category: 'Payroll & HR',
    description: 'This certificate confirms the successful completion of the Payroll Using Tally program with practical and industry-oriented training.',
    issuedYear: '2026',
    badges: ['Certified', 'Industry Ready', 'Verified', 'Professional'],
    keySkills: ['Pay Head Configuration', 'EPF & ESI Compliance', 'Pay Slip Generation', 'Salary Disbursal'],
    duration: '40 Hours',
    programSlug: 'payroll-using-tally'
  },
  {
    id: 'LK-1030',
    title: 'Accounting Basics Crash Course',
    category: 'Foundations',
    description: 'This certificate confirms the successful completion of the Accounting Basics Crash Course program with practical and industry-oriented training.',
    issuedYear: '2026',
    badges: ['Certified', 'Industry Ready', 'Verified', 'Professional'],
    keySkills: ['Golden Rules of Accounting', 'Ledger & Trial Balance', 'Debit & Credit Mastery', 'Financial Statements'],
    duration: '30 Hours',
    programSlug: 'accounting-basics'
  }
];

export const SAMPLE_CERTIFICATES: VerifiableCertificate[] = [
  {
    certificateId: 'LK-1024',
    studentName: 'S. Kanthimathinathan',
    courseTitle: 'Tally Professional',
    grade: 'A+ Professional',
    score: '98.5%',
    issueDate: 'Issued: 2026',
    centerId: 'LK-EDU-TIRUNELVELI',
    centerName: 'LK Education',
    verificationStatus: 'Verified & Authentic',
    teplCandidateId: 'LK-1024'
  },
  {
    certificateId: 'LK-1025',
    studentName: 'K. Meenakshi Sundaram',
    courseTitle: 'Tally Prime with GST Fundamentals',
    grade: 'A+',
    score: '97.0%',
    issueDate: 'Issued: 2026',
    centerId: 'LK-EDU-TIRUNELVELI',
    centerName: 'LK Education',
    verificationStatus: 'Verified & Authentic',
    teplCandidateId: 'LK-1025'
  },
  {
    certificateId: 'LK-1026',
    studentName: 'R. Ananthapadmanabhan',
    courseTitle: 'Financial Markets and Services',
    grade: 'Distinction',
    score: '99.0%',
    issueDate: 'Issued: 2026',
    centerId: 'LK-EDU-TIRUNELVELI',
    centerName: 'LK Education',
    verificationStatus: 'Verified & Authentic',
    teplCandidateId: 'LK-1026'
  },
  {
    certificateId: 'LK-1027',
    studentName: 'M. Vigneshwaran',
    courseTitle: 'TDL Essentials (Tally Definition Language)',
    grade: 'A+ Professional',
    score: '95.5%',
    issueDate: 'Issued: 2026',
    centerId: 'LK-EDU-TIRUNELVELI',
    centerName: 'LK Education',
    verificationStatus: 'Verified & Authentic',
    teplCandidateId: 'LK-1027'
  },
  {
    certificateId: 'LK-1028',
    studentName: 'G. Selvakumar',
    courseTitle: 'TDS Using Tally',
    grade: 'A+',
    score: '96.0%',
    issueDate: 'Issued: 2026',
    centerId: 'LK-EDU-TIRUNELVELI',
    centerName: 'LK Education',
    verificationStatus: 'Verified & Authentic',
    teplCandidateId: 'LK-1028'
  },
  {
    certificateId: 'LK-1029',
    studentName: 'P. Subbalakshmi',
    courseTitle: 'Payroll Using Tally',
    grade: 'Distinction',
    score: '98.0%',
    issueDate: 'Issued: 2026',
    centerId: 'LK-EDU-TIRUNELVELI',
    centerName: 'LK Education',
    verificationStatus: 'Verified & Authentic',
    teplCandidateId: 'LK-1029'
  },
  {
    certificateId: 'LK-1030',
    studentName: 'V. Muthukrishnan',
    courseTitle: 'Accounting Basics Crash Course',
    grade: 'A',
    score: '94.0%',
    issueDate: 'Issued: 2026',
    centerId: 'LK-EDU-TIRUNELVELI',
    centerName: 'LK Education',
    verificationStatus: 'Verified & Authentic',
    teplCandidateId: 'LK-1030'
  },
  {
    certificateId: 'TEPL-TN-2024-8841',
    studentName: 'Arunkumar P.',
    courseTitle: 'Tally Professional with GST & Payroll Rigor',
    grade: 'A+',
    score: '96.5%',
    issueDate: '14 August 2024',
    centerId: 'TEPL-TN-627001',
    centerName: 'LK Educations, Tirunelveli',
    verificationStatus: 'Verified & Authentic',
    teplCandidateId: 'CAND-627001-8841'
  }
];

export { BLOG_POSTS } from './blogsData';
