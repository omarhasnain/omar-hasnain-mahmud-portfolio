export interface CaseStudy {
  id: string;
  num: string;
  tag: string;
  title: string;
  problem: string;
  role: string;
  actions: string[];
  outcome: string;
  impactMetrics?: string[];
  stakeholders?: string[];
  isDraft?: boolean;
}

export interface ExperienceItem {
  period: string;
  company: string;
  sub: string;
  role: string;
  highlights: string[];
  clients?: string[];
}

export interface Tool {
  name: string;
  desc: string;
  icon: string;
  category: 'pm' | 'business' | 'communication' | 'execution' | 'ux' | 'data';
}

export interface Strength {
  icon: string;
  title: string;
  desc: string;
}

export interface Publication {
  title: string;
  venue: string;
  desc: string;
  doiLink?: string;
}

export interface Achievement {
  title: string;
  detail: string;
  metric: string;
  category: string;
}
