import { useState, useCallback, useEffect } from 'react';
import {
  X,
  RotateCcw,
  Check,
  Clock,
  SkipForward,
  Trophy,
  Shuffle,
} from 'lucide-react';
import { useStudy } from '../../context/StudyContext';
import { MarkdownRenderer } from '../questions/MarkdownRenderer';
import type { Question, QuizAnswer } from '../../types';

interface QuizModeProps {
  isOpen: boolean;
  onClose: () => void;
}

type QuizPhase = 'setup' | 'quiz' | 'results';

export function QuizMode({ isOpen, onClose }: QuizModeProps) {
  const { allQuestions, categories, state, setStatus } = useStudy();

  // Quiz setup state
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set(['all']));
  const [questionCount, setQuestionCount] = useState(10);
  const [includeStatuses, setIncludeStatuses] = useState<Set<string>>(
    new Set(['not_started', 'studied', 'needs_review'])
  );
  const [shuffleQuestions, setShuffleQuestions] = useState(true);

  // Quiz state
  const [phase, setPhase] = useState<QuizPhase>('setup');
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);

  // Reset quiz when opened
  useEffect(() => {
    if (isOpen) {
      setPhase('setup');
      setCurrentIndex(0);
      setShowAnswer(false);
      setAnswers([]);
    }
  }, [isOpen]);

  // Filter questions based on setup
  const getFilteredQuestions = useCallback(() => {
    let questions = [...allQuestions];

    // Filter by categories
    if (!selectedCategories.has('all')) {
      questions = questions.filter(q => selectedCategories.has(q.categoryId));
    }

    // Filter by status
    questions = questions.filter(q => {
      const progress = state.progress[q.id];
      const status = progress?.status || 'not_started';
      return includeStatuses.has(status);
    });

    // Shuffle if enabled
    if (shuffleQuestions) {
      questions = questions.sort(() => Math.random() - 0.5);
    }

    // Limit count
    return questions.slice(0, questionCount);
  }, [allQuestions, selectedCategories, includeStatuses, shuffleQuestions, questionCount, state.progress]);

  const startQuiz = () => {
    const questions = getFilteredQuestions();
    if (questions.length === 0) return;

    setQuizQuestions(questions);
    setPhase('quiz');
    setCurrentIndex(0);
    setShowAnswer(false);
    setAnswers([]);
  };

  const handleAnswer = (result: QuizAnswer['result']) => {
    const currentQuestion = quizQuestions[currentIndex];

    setAnswers(prev => [...prev, { questionId: currentQuestion.id, result }]);

    // Update status based on result
    if (result === 'got_it') {
      setStatus(currentQuestion.id, 'studied');
    } else if (result === 'needs_review') {
      setStatus(currentQuestion.id, 'needs_review');
    }

    // Move to next or finish
    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setShowAnswer(false);
    } else {
      setPhase('results');
    }
  };

  const toggleCategorySelection = (categoryId: string) => {
    setSelectedCategories(prev => {
      const next = new Set(prev);

      if (categoryId === 'all') {
        return new Set(['all']);
      }

      next.delete('all');

      if (next.has(categoryId)) {
        next.delete(categoryId);
        if (next.size === 0) {
          return new Set(['all']);
        }
      } else {
        next.add(categoryId);
      }

      return next;
    });
  };

  const toggleStatusSelection = (status: string) => {
    setIncludeStatuses(prev => {
      const next = new Set(prev);
      if (next.has(status)) {
        next.delete(status);
        if (next.size === 0) {
          return new Set([status]); // Keep at least one
        }
      } else {
        next.add(status);
      }
      return next;
    });
  };

  if (!isOpen) return null;

  const currentQuestion = quizQuestions[currentIndex];
  const gotItCount = answers.filter(a => a.result === 'got_it').length;
  const needsReviewCount = answers.filter(a => a.result === 'needs_review').length;
  const skippedCount = answers.filter(a => a.result === 'skipped').length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white dark:bg-slate-800 w-full max-w-3xl max-h-[90vh] rounded-xl shadow-xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-slate-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            {phase === 'setup' && 'Quiz Setup'}
            {phase === 'quiz' && `Question ${currentIndex + 1} of ${quizQuestions.length}`}
            {phase === 'results' && 'Quiz Complete!'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Setup Phase */}
          {phase === 'setup' && (
            <div className="space-y-6">
              {/* Category Selection */}
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-3">
                  Select Categories
                </h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => toggleCategorySelection('all')}
                    className={`btn text-sm ${
                      selectedCategories.has('all') ? 'btn-primary' : 'btn-secondary'
                    }`}
                  >
                    All Categories
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => toggleCategorySelection(cat.id)}
                      className={`btn text-sm ${
                        selectedCategories.has(cat.id) ? 'btn-primary' : 'btn-secondary'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Status Filter */}
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-3">
                  Include Questions With Status
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    { id: 'not_started', label: 'Not Started' },
                    { id: 'studied', label: 'Studied' },
                    { id: 'needs_review', label: 'Needs Review' },
                    { id: 'mastered', label: 'Mastered' },
                  ].map(status => (
                    <button
                      key={status.id}
                      onClick={() => toggleStatusSelection(status.id)}
                      className={`btn text-sm ${
                        includeStatuses.has(status.id) ? 'btn-primary' : 'btn-secondary'
                      }`}
                    >
                      {status.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question Count */}
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-3">
                  Number of Questions
                </h3>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="5"
                    max="50"
                    step="5"
                    value={questionCount}
                    onChange={e => setQuestionCount(parseInt(e.target.value))}
                    className="flex-1"
                  />
                  <span className="text-lg font-medium w-12">{questionCount}</span>
                </div>
              </div>

              {/* Shuffle Toggle */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShuffleQuestions(!shuffleQuestions)}
                  className={`btn ${shuffleQuestions ? 'btn-primary' : 'btn-secondary'}`}
                >
                  <Shuffle className="w-4 h-4 mr-2" />
                  Shuffle Questions
                </button>
              </div>

              {/* Available Questions Count */}
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {getFilteredQuestions().length} questions available with current filters
              </div>
            </div>
          )}

          {/* Quiz Phase */}
          {phase === 'quiz' && currentQuestion && (
            <div className="space-y-6">
              {/* Progress Bar */}
              <div className="h-2 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / quizQuestions.length) * 100}%` }}
                />
              </div>

              {/* Category */}
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {currentQuestion.categoryName}
              </div>

              {/* Question */}
              <div className="text-xl font-semibold text-gray-900 dark:text-white">
                {currentQuestion.question}
              </div>

              {/* Answer Toggle */}
              {!showAnswer ? (
                <button
                  onClick={() => setShowAnswer(true)}
                  className="btn btn-primary w-full py-4 text-lg"
                >
                  Reveal Answer
                </button>
              ) : (
                <>
                  <div className="card p-4 bg-gray-50 dark:bg-slate-900/50">
                    <MarkdownRenderer content={currentQuestion.answer} />
                  </div>

                  {/* Answer Buttons */}
                  <div className="grid grid-cols-3 gap-3">
                    <button
                      onClick={() => handleAnswer('got_it')}
                      className="btn bg-green-500 text-white hover:bg-green-600 py-4"
                    >
                      <Check className="w-5 h-5 mr-2" />
                      Got It
                    </button>
                    <button
                      onClick={() => handleAnswer('needs_review')}
                      className="btn bg-amber-500 text-white hover:bg-amber-600 py-4"
                    >
                      <Clock className="w-5 h-5 mr-2" />
                      Need Review
                    </button>
                    <button
                      onClick={() => handleAnswer('skipped')}
                      className="btn btn-secondary py-4"
                    >
                      <SkipForward className="w-5 h-5 mr-2" />
                      Skip
                    </button>
                  </div>
                </>
              )}
            </div>
          )}

          {/* Results Phase */}
          {phase === 'results' && (
            <div className="text-center space-y-6">
              <Trophy className="w-20 h-20 mx-auto text-amber-500" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Quiz Complete!
              </h3>

              <div className="grid grid-cols-3 gap-4">
                <div className="card p-4 bg-green-50 dark:bg-green-900/20">
                  <div className="text-3xl font-bold text-green-600">{gotItCount}</div>
                  <div className="text-sm text-green-700 dark:text-green-400">Got It</div>
                </div>
                <div className="card p-4 bg-amber-50 dark:bg-amber-900/20">
                  <div className="text-3xl font-bold text-amber-600">{needsReviewCount}</div>
                  <div className="text-sm text-amber-700 dark:text-amber-400">Need Review</div>
                </div>
                <div className="card p-4 bg-gray-50 dark:bg-slate-700">
                  <div className="text-3xl font-bold text-gray-600 dark:text-gray-300">{skippedCount}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Skipped</div>
                </div>
              </div>

              <div className="text-gray-600 dark:text-gray-400">
                Score: {Math.round((gotItCount / quizQuestions.length) * 100)}%
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900/50">
          {phase === 'setup' && (
            <>
              <button onClick={onClose} className="btn btn-secondary">
                Cancel
              </button>
              <button
                onClick={startQuiz}
                className="btn btn-primary"
                disabled={getFilteredQuestions().length === 0}
              >
                Start Quiz ({getFilteredQuestions().length} questions)
              </button>
            </>
          )}

          {phase === 'quiz' && (
            <>
              <button
                onClick={() => {
                  setPhase('setup');
                  setCurrentIndex(0);
                  setShowAnswer(false);
                  setAnswers([]);
                }}
                className="btn btn-secondary"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Restart
              </button>
              <div className="text-sm text-gray-500">
                Press Space to {showAnswer ? 'continue' : 'reveal'}
              </div>
            </>
          )}

          {phase === 'results' && (
            <>
              <button onClick={onClose} className="btn btn-secondary">
                Close
              </button>
              <button
                onClick={() => {
                  setPhase('setup');
                }}
                className="btn btn-primary"
              >
                New Quiz
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
