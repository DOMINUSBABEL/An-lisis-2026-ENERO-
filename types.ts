export interface Demographics {
  male: number;
  female: number;
  youth: number; // 18-25
  adult: number; // 26-55
  senior: number; // 55+
  strata123: number;
  strata456: number;
}

export interface Proposal {
  title: string;
  detail: string;
  category: 'Seguridad' | 'Economía' | 'Social' | 'Justicia' | 'Ambiente';
}

export interface Candidate {
  id: string;
  name: string;
  party: string;
  coalition?: string;
  ideology: 'Derecha' | 'Centro-Derecha' | 'Centro' | 'Centro-Izquierda' | 'Izquierda' | 'Independiente';
  votingIntention: number;
  description: string;
  age: number;
  education: string;
  previousOffice: string;
  slogan: string;
  strengths: string[];
  weaknesses: string[];
  proposals: Proposal[];
  demographics: Demographics;
  image?: string;
}

export interface SocialStats {
  candidate: string;
  platform: 'X' | 'TikTok' | 'Instagram';
  followers: number;
  engagementRate: number;
  sentimentPositive: number;
  sentimentNegative: number;
  sentimentNeutral: number;
}

export interface RegionalData {
  region: string;
  leadingCandidate: string;
  notes: string;
}

export interface TimeSeriesPoint {
  date: string;
  [key: string]: string | number;
}

export interface Issue {
  topic: string;
  percentage: number;
  description: string;
}

// New Types for Digital Intelligence
export interface NarrativeCluster {
  topic: string;
  volume: number; // 1-100 scale
  sentiment: 'positive' | 'negative' | 'neutral' | 'polarized';
  candidates: string[]; // Associated candidates
  description: string;
}

export interface RiskEvent {
  id: string;
  type: 'Fake News' | 'Bot Attack' | 'Old Tweet' | 'Algorithm Change';
  severity: 'High' | 'Medium' | 'Low';
  target: string;
  description: string;
  status: 'Active' | 'Contained' | 'Monitoring';
}

export enum View {
  DASHBOARD = 'dashboard',
  METHODOLOGY = 'methodology',
  COUNTRY_MOOD = 'country_mood',
  POLLS = 'polls',
  EVOLUTION = 'evolution',
  REGIONAL_DETAIL = 'regional_detail',
  SOCIAL = 'social',
  CANDIDATES = 'candidates',
  COMPARATOR = 'comparator',
  SIMULATOR = 'simulator',
  AI_ANALYST = 'ai_analyst',
  // New Digital Strategy Views
  DIGITAL_NARRATIVES = 'digital_narratives',
  DIGITAL_BENCHMARK = 'digital_benchmark',
  DIGITAL_RISKS = 'digital_risks'
}
