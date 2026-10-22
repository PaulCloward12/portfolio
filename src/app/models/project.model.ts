export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  problem: string;
  roleAndDecisions: string;
  techStack: string[];
  outcomes: string;
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}