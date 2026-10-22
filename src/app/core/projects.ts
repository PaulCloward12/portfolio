export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  tech: string[];
  problem: string;
  role: string;
  outcomes: string;
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    slug: 'remote-health-monitoring',
    title: 'Remote Health Monitoring Platform',
    shortDescription: 'Full product for real-time vital signs and cardiac/other alerts. Angular patient and clinician portals, native Android and iOS apps collecting wearable data via Bluetooth, HIPAA-compliant Firebase Firestore pipeline.',
    tech: ['Angular', 'TypeScript', 'Android', 'iOS', 'Bluetooth', 'Firebase', 'Firestore'],
    problem: 'Patients needed a reliable way to share continuous vital-sign data with clinicians for timely alerts, without complex on-premise infrastructure. The product had to be usable by both patients and clinical staff, collect data from a wearable device, and meet HIPAA requirements.',
    role: 'Founding software engineer and sole planner, coder, and architect of the full product. Designed and built the Angular web application with separate patient and clinician portals, the native Android and iOS apps that paired with the wearable over Bluetooth, and the cloud pipeline that stored data in HIPAA-compliant Firebase Firestore. Later hired and led a software team of eight (six web, one iOS, one Android).',
    outcomes: 'Shipped a complete remote-monitoring platform used in production. The company grew to approximately 30 employees. Left the company in 2024 after disagreements with the main founder; equity is retained.',
    featured: true
  },
  {
    slug: 'patient-portal-iteration',
    title: 'Patient Portal Iteration',
    shortDescription: 'Placeholder — additional work on the patient-facing Angular portal. Replace with real details.',
    tech: ['Angular', 'TypeScript', 'SCSS'],
    problem: 'Placeholder problem statement. Replace with real content.',
    role: 'Placeholder role description. Replace with real content.',
    outcomes: 'Placeholder outcomes. Replace with real content.'
  },
  {
    slug: 'freelance-client-site',
    title: 'Freelance Client Website',
    shortDescription: 'Placeholder — one of the freelance website projects completed after leaving the startup. Replace with real details.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    problem: 'Placeholder problem statement. Replace with real content.',
    role: 'Placeholder role description. Replace with real content.',
    outcomes: 'Placeholder outcomes. Replace with real content.'
  }
];
