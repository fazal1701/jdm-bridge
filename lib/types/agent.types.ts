// Agent domain types

export type LanguageCode = "en" | "ja" | "es" | "fr" | "de" | "ko" | "zh" | "pt";

export interface AgentProfile {
  id: string;
  name: string;
  rating: number;
  dealCount: number;
  responseTime: number; // minutes
  languages: LanguageCode[];
  specialties: string[];
  status: "online" | "offline" | "away";
  queueLength: number;
  avatar?: string;
  bio?: string;
  location?: string;
  since?: number; // year
  successRate?: number; // percentage
  typicalRange?: string;
  avgSavings?: number;
}


