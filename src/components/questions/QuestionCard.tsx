import React from 'react';
import {
  ChevronDown,
  ChevronRight,
  Bookmark,
  Circle,
  CheckCircle2,
  Clock,
  Star,
} from 'lucide-react';
import { useStudy } from '../../context/StudyContext';
import { MarkdownRenderer } from './MarkdownRenderer';
import type { Question, StudyStatus } from '../../types';

interface QuestionCardProps {
  question: Question;
  index: number;
}

export function QuestionCard({ question, index }: QuestionCardProps) {
  const { getProgress, setStatus, toggleBookmark, toggleExpanded, isExpanded } = useStudy();

  const progress = getProgress(question.id);
  const expanded = isExpanded(question.id);

  const statusConfig: Record<StudyStatus, { icon: React.ReactNode; badge: string; label: string }> = {
    not_started: {
      icon: <Circle className="w-4 h-4" />,
      badge: 'badge-not-started',
      label: 'Not Started',
    },
    studied: {
      icon: <CheckCircle2 className="w-4 h-4" />,
      badge: 'badge-studied',
      label: 'Studied',
    },
    needs_review: {
      icon: <Clock className="w-4 h-4" />,
      badge: 'badge-needs-review',
      label: 'Needs Review',
    },
    mastered: {
      icon: <Star className="w-4 h-4" />,
      badge: 'badge-mastered',
      label: 'Mastered',
    },
  };

  const currentStatus = statusConfig[progress.status];

  const handleStatusClick = (e: React.MouseEvent, status: StudyStatus) => {
    e.stopPropagation();
    setStatus(question.id, status);
  };

  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleBookmark(question.id);
  };

  return (
    <div className="card overflow-hidden animate-fade-in">
      {/* Question Header - Clickable */}
      <button
        onClick={() => toggleExpanded(question.id)}
        className="w-full px-4 py-4 flex items-start gap-3 text-left hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors"
      >
        {/* Expand/Collapse Icon */}
        <div className="mt-0.5 text-gray-400">
          {expanded ? (
            <ChevronDown className="w-5 h-5" />
          ) : (
            <ChevronRight className="w-5 h-5" />
          )}
        </div>

        {/* Question Number */}
        <span className="text-sm text-gray-400 dark:text-gray-500 font-mono mt-0.5">
          #{index + 1}
        </span>

        {/* Question Text */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 dark:text-white leading-snug">
            {question.question}
          </h3>
          <div className="flex items-center gap-2 mt-2 flex-wrap">
            {/* Category Badge */}
            <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-slate-700 px-2 py-0.5 rounded">
              {question.categoryName}
            </span>

            {/* Status Badge */}
            <span className={`badge ${currentStatus.badge}`}>
              {currentStatus.icon}
              <span className="ml-1">{currentStatus.label}</span>
            </span>

            {/* Last studied */}
            {progress.lastStudied && (
              <span className="text-xs text-gray-400">
                Reviewed {new Date(progress.lastStudied).toLocaleDateString()}
              </span>
            )}
          </div>
        </div>

        {/* Bookmark Button */}
        <button
          onClick={handleBookmarkClick}
          className={`p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors ${
            progress.bookmarked ? 'text-amber-500' : 'text-gray-400'
          }`}
          title={progress.bookmarked ? 'Remove bookmark' : 'Add bookmark'}
        >
          <Bookmark className={`w-5 h-5 ${progress.bookmarked ? 'fill-current' : ''}`} />
        </button>
      </button>

      {/* Expanded Answer Section */}
      {expanded && (
        <div className="border-t border-gray-200 dark:border-slate-700">
          {/* Answer Content */}
          <div className="px-4 py-4 bg-gray-50/50 dark:bg-slate-800/50">
            <MarkdownRenderer content={question.answer} />
          </div>

          {/* Action Buttons */}
          <div className="px-4 py-3 bg-white dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700 flex items-center gap-2 flex-wrap">
            <span className="text-sm text-gray-500 dark:text-gray-400 mr-2">
              Mark as:
            </span>

            <button
              onClick={(e) => handleStatusClick(e, 'studied')}
              className={`btn text-sm ${
                progress.status === 'studied'
                  ? 'btn-primary'
                  : 'btn-secondary'
              }`}
            >
              <CheckCircle2 className="w-4 h-4 mr-1" />
              Studied
            </button>

            <button
              onClick={(e) => handleStatusClick(e, 'needs_review')}
              className={`btn text-sm ${
                progress.status === 'needs_review'
                  ? 'bg-amber-500 text-white hover:bg-amber-600'
                  : 'btn-secondary'
              }`}
            >
              <Clock className="w-4 h-4 mr-1" />
              Needs Review
            </button>

            <button
              onClick={(e) => handleStatusClick(e, 'mastered')}
              className={`btn text-sm ${
                progress.status === 'mastered'
                  ? 'bg-green-500 text-white hover:bg-green-600'
                  : 'btn-secondary'
              }`}
            >
              <Star className="w-4 h-4 mr-1" />
              Mastered
            </button>

            {progress.status !== 'not_started' && (
              <button
                onClick={(e) => handleStatusClick(e, 'not_started')}
                className="btn btn-ghost text-sm text-gray-500"
              >
                Reset
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
