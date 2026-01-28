// Study status for each question
export type StudyStatus = 'not_started' | 'studied' | 'needs_review' | 'mastered';

// Single question with all parsed content
export interface Question {
  id: string;
  categoryId: string;
  categoryName: string;
  question: string;
  answer: string;
  seniorInsight?: string;
}

// Category containing multiple questions
export interface Category {
  id: string;
  number: number;
  name: string;
  slug: string;
  questions: Question[];
}

// Progress tracking for each question
export interface StudyProgress {
  status: StudyStatus;
  lastStudied?: number;
  timesReviewed: number;
  bookmarked: boolean;
  notes?: string;
}

// Main app state stored in localStorage
export interface AppState {
  progress: Record<string, StudyProgress>;
  settings: AppSettings;
  lastVisited?: string;
}

// App settings
export interface AppSettings {
  theme: 'light' | 'dark' | 'system';
  showAnswersByDefault: boolean;
  enableKeyboardShortcuts: boolean;
}

// Filter state
export interface FilterState {
  status: StudyStatus | 'all';
  category: string | 'all';
  bookmarked: boolean;
  searchQuery: string;
}

// Quiz state
export interface QuizState {
  isActive: boolean;
  questions: Question[];
  currentIndex: number;
  answers: QuizAnswer[];
  showAnswer: boolean;
}

export interface QuizAnswer {
  questionId: string;
  result: 'got_it' | 'needs_review' | 'skipped';
}

// Statistics
export interface StudyStats {
  total: number;
  notStarted: number;
  studied: number;
  needsReview: number;
  mastered: number;
  bookmarked: number;
}

// Category statistics
export interface CategoryStats extends StudyStats {
  categoryId: string;
  categoryName: string;
}

// Default values
export const DEFAULT_PROGRESS: StudyProgress = {
  status: 'not_started',
  timesReviewed: 0,
  bookmarked: false,
};

export const DEFAULT_SETTINGS: AppSettings = {
  theme: 'system',
  showAnswersByDefault: false,
  enableKeyboardShortcuts: true,
};

export const DEFAULT_FILTERS: FilterState = {
  status: 'all',
  category: 'all',
  bookmarked: false,
  searchQuery: '',
};
