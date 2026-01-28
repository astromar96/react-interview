import { createContext, useContext, useReducer, useEffect, useMemo } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type {
  StudyStatus,
  StudyProgress,
  FilterState,
  AppSettings,
  StudyStats,
  CategoryStats,
  Question,
  Category,
} from '../types';
import { categories, allQuestions } from '../data/questions';

// Re-export defaults from types
const defaultProgress: StudyProgress = {
  status: 'not_started',
  timesReviewed: 0,
  bookmarked: false,
};

const defaultSettings: AppSettings = {
  theme: 'system',
  showAnswersByDefault: false,
  enableKeyboardShortcuts: true,
};

const defaultFilters: FilterState = {
  status: 'all',
  category: 'all',
  bookmarked: false,
  searchQuery: '',
};

// State type
interface StudyState {
  progress: Record<string, StudyProgress>;
  settings: AppSettings;
  filters: FilterState;
  expandedQuestions: Set<string>;
  currentQuestionId: string | null;
}

// Action types
type StudyAction =
  | { type: 'SET_STATUS'; questionId: string; status: StudyStatus }
  | { type: 'TOGGLE_BOOKMARK'; questionId: string }
  | { type: 'TOGGLE_EXPANDED'; questionId: string }
  | { type: 'EXPAND_ALL' }
  | { type: 'COLLAPSE_ALL' }
  | { type: 'SET_NOTES'; questionId: string; notes: string }
  | { type: 'SET_FILTER'; filter: Partial<FilterState> }
  | { type: 'CLEAR_FILTERS' }
  | { type: 'SET_SEARCH'; query: string }
  | { type: 'SET_CURRENT_QUESTION'; questionId: string | null }
  | { type: 'SET_SETTING'; setting: Partial<AppSettings> }
  | { type: 'IMPORT_PROGRESS'; data: Record<string, StudyProgress> }
  | { type: 'RESET_PROGRESS' }
  | { type: 'RESET_CATEGORY'; categoryId: string }
  | { type: 'LOAD_PROGRESS'; progress: Record<string, StudyProgress> };

// Reducer
function studyReducer(state: StudyState, action: StudyAction): StudyState {
  switch (action.type) {
    case 'SET_STATUS': {
      const existing = state.progress[action.questionId] || defaultProgress;
      return {
        ...state,
        progress: {
          ...state.progress,
          [action.questionId]: {
            ...existing,
            status: action.status,
            lastStudied: Date.now(),
            timesReviewed: existing.timesReviewed + 1,
          },
        },
      };
    }

    case 'TOGGLE_BOOKMARK': {
      const existing = state.progress[action.questionId] || defaultProgress;
      return {
        ...state,
        progress: {
          ...state.progress,
          [action.questionId]: {
            ...existing,
            bookmarked: !existing.bookmarked,
          },
        },
      };
    }

    case 'TOGGLE_EXPANDED': {
      const newExpanded = new Set(state.expandedQuestions);
      if (newExpanded.has(action.questionId)) {
        newExpanded.delete(action.questionId);
      } else {
        newExpanded.add(action.questionId);
      }
      return { ...state, expandedQuestions: newExpanded };
    }

    case 'EXPAND_ALL': {
      return {
        ...state,
        expandedQuestions: new Set(allQuestions.map(q => q.id)),
      };
    }

    case 'COLLAPSE_ALL': {
      return { ...state, expandedQuestions: new Set() };
    }

    case 'SET_NOTES': {
      const existing = state.progress[action.questionId] || defaultProgress;
      return {
        ...state,
        progress: {
          ...state.progress,
          [action.questionId]: {
            ...existing,
            notes: action.notes,
          },
        },
      };
    }

    case 'SET_FILTER': {
      return {
        ...state,
        filters: { ...state.filters, ...action.filter },
      };
    }

    case 'CLEAR_FILTERS': {
      return { ...state, filters: defaultFilters };
    }

    case 'SET_SEARCH': {
      return {
        ...state,
        filters: { ...state.filters, searchQuery: action.query },
      };
    }

    case 'SET_CURRENT_QUESTION': {
      return { ...state, currentQuestionId: action.questionId };
    }

    case 'SET_SETTING': {
      return {
        ...state,
        settings: { ...state.settings, ...action.setting },
      };
    }

    case 'IMPORT_PROGRESS': {
      return { ...state, progress: action.data };
    }

    case 'RESET_PROGRESS': {
      return { ...state, progress: {} };
    }

    case 'RESET_CATEGORY': {
      const newProgress = { ...state.progress };
      const category = categories.find(c => c.id === action.categoryId);
      if (category) {
        category.questions.forEach(q => {
          delete newProgress[q.id];
        });
      }
      return { ...state, progress: newProgress };
    }

    case 'LOAD_PROGRESS': {
      return { ...state, progress: action.progress };
    }

    default:
      return state;
  }
}

// Context type
interface StudyContextType {
  state: StudyState;
  dispatch: React.Dispatch<StudyAction>;
  // Convenience methods
  setStatus: (questionId: string, status: StudyStatus) => void;
  toggleBookmark: (questionId: string) => void;
  toggleExpanded: (questionId: string) => void;
  setSearch: (query: string) => void;
  setFilter: (filter: Partial<FilterState>) => void;
  getProgress: (questionId: string) => StudyProgress;
  isExpanded: (questionId: string) => boolean;
  // Computed values
  filteredQuestions: Question[];
  stats: StudyStats;
  categoryStats: CategoryStats[];
  categories: Category[];
  allQuestions: Question[];
}

const StudyContext = createContext<StudyContextType | null>(null);

// Provider component
export function StudyProvider({ children }: { children: React.ReactNode }) {
  // Load saved progress from localStorage
  const [savedProgress, setSavedProgress] = useLocalStorage<Record<string, StudyProgress>>(
    'study-progress',
    {}
  );

  const [savedSettings, setSavedSettings] = useLocalStorage<AppSettings>(
    'study-settings',
    defaultSettings
  );

  // Initialize state
  const initialState: StudyState = {
    progress: savedProgress,
    settings: savedSettings,
    filters: defaultFilters,
    expandedQuestions: new Set(),
    currentQuestionId: null,
  };

  const [state, dispatch] = useReducer(studyReducer, initialState);

  // Sync progress to localStorage
  useEffect(() => {
    setSavedProgress(state.progress);
  }, [state.progress, setSavedProgress]);

  // Sync settings to localStorage
  useEffect(() => {
    setSavedSettings(state.settings);
  }, [state.settings, setSavedSettings]);

  // Convenience methods
  const setStatus = (questionId: string, status: StudyStatus) => {
    dispatch({ type: 'SET_STATUS', questionId, status });
  };

  const toggleBookmark = (questionId: string) => {
    dispatch({ type: 'TOGGLE_BOOKMARK', questionId });
  };

  const toggleExpanded = (questionId: string) => {
    dispatch({ type: 'TOGGLE_EXPANDED', questionId });
  };

  const setSearch = (query: string) => {
    dispatch({ type: 'SET_SEARCH', query });
  };

  const setFilter = (filter: Partial<FilterState>) => {
    dispatch({ type: 'SET_FILTER', filter });
  };

  const getProgress = (questionId: string): StudyProgress => {
    return state.progress[questionId] || defaultProgress;
  };

  const isExpanded = (questionId: string): boolean => {
    return state.expandedQuestions.has(questionId);
  };

  // Computed: filtered questions
  const filteredQuestions = useMemo(() => {
    let questions = [...allQuestions];

    // Filter by category
    if (state.filters.category !== 'all') {
      questions = questions.filter(q => q.categoryId === state.filters.category);
    }

    // Filter by status
    if (state.filters.status !== 'all') {
      questions = questions.filter(q => {
        const progress = state.progress[q.id] || defaultProgress;
        return progress.status === state.filters.status;
      });
    }

    // Filter by bookmarked
    if (state.filters.bookmarked) {
      questions = questions.filter(q => {
        const progress = state.progress[q.id] || defaultProgress;
        return progress.bookmarked;
      });
    }

    // Filter by search query
    if (state.filters.searchQuery.trim()) {
      const query = state.filters.searchQuery.toLowerCase();
      questions = questions.filter(
        q =>
          q.question.toLowerCase().includes(query) ||
          q.answer.toLowerCase().includes(query) ||
          q.categoryName.toLowerCase().includes(query)
      );
    }

    return questions;
  }, [state.filters, state.progress]);

  // Computed: overall stats
  const stats = useMemo((): StudyStats => {
    const total = allQuestions.length;
    let notStarted = 0;
    let studied = 0;
    let needsReview = 0;
    let mastered = 0;
    let bookmarked = 0;

    allQuestions.forEach(q => {
      const progress = state.progress[q.id] || defaultProgress;
      switch (progress.status) {
        case 'not_started':
          notStarted++;
          break;
        case 'studied':
          studied++;
          break;
        case 'needs_review':
          needsReview++;
          break;
        case 'mastered':
          mastered++;
          break;
      }
      if (progress.bookmarked) bookmarked++;
    });

    return { total, notStarted, studied, needsReview, mastered, bookmarked };
  }, [state.progress]);

  // Computed: per-category stats
  const categoryStats = useMemo((): CategoryStats[] => {
    return categories.map(cat => {
      const catQuestions = cat.questions;
      let notStarted = 0;
      let studied = 0;
      let needsReview = 0;
      let mastered = 0;
      let bookmarked = 0;

      catQuestions.forEach(q => {
        const progress = state.progress[q.id] || defaultProgress;
        switch (progress.status) {
          case 'not_started':
            notStarted++;
            break;
          case 'studied':
            studied++;
            break;
          case 'needs_review':
            needsReview++;
            break;
          case 'mastered':
            mastered++;
            break;
        }
        if (progress.bookmarked) bookmarked++;
      });

      return {
        categoryId: cat.id,
        categoryName: cat.name,
        total: catQuestions.length,
        notStarted,
        studied,
        needsReview,
        mastered,
        bookmarked,
      };
    });
  }, [state.progress]);

  const value: StudyContextType = {
    state,
    dispatch,
    setStatus,
    toggleBookmark,
    toggleExpanded,
    setSearch,
    setFilter,
    getProgress,
    isExpanded,
    filteredQuestions,
    stats,
    categoryStats,
    categories,
    allQuestions,
  };

  return <StudyContext.Provider value={value}>{children}</StudyContext.Provider>;
}

// Hook to use the context
export function useStudy() {
  const context = useContext(StudyContext);
  if (!context) {
    throw new Error('useStudy must be used within a StudyProvider');
  }
  return context;
}
