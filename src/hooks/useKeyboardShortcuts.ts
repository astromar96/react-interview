import { useEffect, useCallback } from 'react';
import { useStudy } from '../context/StudyContext';
import { useTheme } from '../context/ThemeContext';

interface UseKeyboardShortcutsOptions {
  onOpenQuiz: () => void;
  onOpenShortcuts: () => void;
  onOpenStats: () => void;
}

export function useKeyboardShortcuts({
  onOpenQuiz,
  onOpenShortcuts,
}: UseKeyboardShortcutsOptions) {
  const { filteredQuestions, state, dispatch, setStatus, toggleBookmark, toggleExpanded } =
    useStudy();
  const { setTheme, isDark } = useTheme();

  // Find current question index based on expanded state
  const getCurrentQuestionIndex = useCallback(() => {
    // Find the first expanded question, or -1 if none
    for (let i = 0; i < filteredQuestions.length; i++) {
      if (state.expandedQuestions.has(filteredQuestions[i].id)) {
        return i;
      }
    }
    return -1;
  }, [filteredQuestions, state.expandedQuestions]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      // Ignore if typing in an input
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        // Allow Escape to blur input
        if (e.key === 'Escape') {
          (e.target as HTMLElement).blur();
          dispatch({ type: 'SET_SEARCH', query: '' });
        }
        return;
      }

      const currentIndex = getCurrentQuestionIndex();
      const currentQuestion = currentIndex >= 0 ? filteredQuestions[currentIndex] : null;

      switch (e.key) {
        case '/':
          e.preventDefault();
          document.getElementById('search-input')?.focus();
          break;

        case 'Escape':
          dispatch({ type: 'SET_SEARCH', query: '' });
          break;

        case 'j':
          e.preventDefault();
          // Next question
          if (filteredQuestions.length > 0) {
            const nextIndex = currentIndex < filteredQuestions.length - 1 ? currentIndex + 1 : 0;
            // Collapse current, expand next
            if (currentQuestion) {
              dispatch({ type: 'TOGGLE_EXPANDED', questionId: currentQuestion.id });
            }
            dispatch({ type: 'TOGGLE_EXPANDED', questionId: filteredQuestions[nextIndex].id });
            // Scroll into view
            setTimeout(() => {
              document.querySelector(`[data-question-id="${filteredQuestions[nextIndex].id}"]`)?.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
              });
            }, 100);
          }
          break;

        case 'k':
          e.preventDefault();
          // Previous question
          if (filteredQuestions.length > 0) {
            const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredQuestions.length - 1;
            // Collapse current, expand previous
            if (currentQuestion) {
              dispatch({ type: 'TOGGLE_EXPANDED', questionId: currentQuestion.id });
            }
            dispatch({ type: 'TOGGLE_EXPANDED', questionId: filteredQuestions[prevIndex].id });
            setTimeout(() => {
              document.querySelector(`[data-question-id="${filteredQuestions[prevIndex].id}"]`)?.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
              });
            }, 100);
          }
          break;

        case ' ':
          e.preventDefault();
          // Toggle current question expansion
          if (currentQuestion) {
            toggleExpanded(currentQuestion.id);
          } else if (filteredQuestions.length > 0) {
            toggleExpanded(filteredQuestions[0].id);
          }
          break;

        case 'Enter':
          e.preventDefault();
          if (currentQuestion) {
            toggleExpanded(currentQuestion.id);
          }
          break;

        case 's':
          e.preventDefault();
          if (currentQuestion) {
            setStatus(currentQuestion.id, 'studied');
          }
          break;

        case 'r':
          e.preventDefault();
          if (currentQuestion) {
            setStatus(currentQuestion.id, 'needs_review');
          }
          break;

        case 'm':
          e.preventDefault();
          if (currentQuestion) {
            setStatus(currentQuestion.id, 'mastered');
          }
          break;

        case 'b':
          e.preventDefault();
          if (currentQuestion) {
            toggleBookmark(currentQuestion.id);
          }
          break;

        case 'e':
          e.preventDefault();
          dispatch({ type: 'EXPAND_ALL' });
          break;

        case 'c':
          e.preventDefault();
          dispatch({ type: 'COLLAPSE_ALL' });
          break;

        case 'd':
          e.preventDefault();
          setTheme(isDark ? 'light' : 'dark');
          break;

        case 'q':
          e.preventDefault();
          onOpenQuiz();
          break;

        case '?':
          e.preventDefault();
          onOpenShortcuts();
          break;

        default:
          break;
      }
    },
    [
      filteredQuestions,
      getCurrentQuestionIndex,
      dispatch,
      toggleExpanded,
      setStatus,
      toggleBookmark,
      setTheme,
      isDark,
      onOpenQuiz,
      onOpenShortcuts,
    ]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);
}
