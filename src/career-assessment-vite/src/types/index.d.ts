// src/types/index.d.ts
declare module 'types' {
  export interface SkillQuestion {
    id: string;
    text: string;
    maps: Record<string, number>;
  }

  export interface PersonalityPair {
    id: string;
    a: string;
    b: string;
  }

  export interface InterestTopic {
    id: string;
    label: string;
  }

  export interface CareerRecipe {
    id: string;
    label: string;
    tags: string[];
  }

  export interface FullAssessmentState {
    skills: Record<string, number>;
    personality: Record<string, 'a' | 'b'>;
    interests: string[];
    timestamp: string | null;
  }

  export interface WeeklyAssessmentEntry {
    date: string;
    answers: Record<string, number>;
  }
}