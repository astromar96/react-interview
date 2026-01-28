import React from 'react';
import {
  ChevronDown,
  ChevronRight,
  Filter,
  Bookmark,
  CheckCircle2,
  Circle,
  Clock,
  Star,
  X,
} from 'lucide-react';
import { useStudy } from '../../context/StudyContext';
import type { StudyStatus } from '../../types';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { state, setFilter, categoryStats, stats } = useStudy();
  const { filters } = state;

  const statusOptions: { value: StudyStatus | 'all'; label: string; icon: React.ReactNode; color: string }[] = [
    { value: 'all', label: 'All Questions', icon: <Filter className="w-4 h-4" />, color: '' },
    { value: 'not_started', label: 'Not Started', icon: <Circle className="w-4 h-4" />, color: 'text-gray-500' },
    { value: 'studied', label: 'Studied', icon: <CheckCircle2 className="w-4 h-4" />, color: 'text-blue-500' },
    { value: 'needs_review', label: 'Needs Review', icon: <Clock className="w-4 h-4" />, color: 'text-amber-500' },
    { value: 'mastered', label: 'Mastered', icon: <Star className="w-4 h-4" />, color: 'text-green-500' },
  ];

  const getStatusCount = (status: StudyStatus | 'all'): number => {
    if (status === 'all') return stats.total;
    switch (status) {
      case 'not_started': return stats.notStarted;
      case 'studied': return stats.studied;
      case 'needs_review': return stats.needsReview;
      case 'mastered': return stats.mastered;
    }
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:sticky top-0 left-0 z-50 lg:z-0
          h-screen w-72 lg:w-64
          bg-white dark:bg-slate-800
          border-r border-gray-200 dark:border-slate-700
          transform transition-transform duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          overflow-y-auto
          pt-4 lg:pt-20
        `}
      >
        {/* Mobile close button */}
        <button
          onClick={onClose}
          className="lg:hidden absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="px-4 pb-4">
          {/* Status Filters */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 px-2">
              Filter by Status
            </h3>
            <div className="space-y-1">
              {statusOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setFilter({ status: option.value })}
                  className={`
                    w-full sidebar-item
                    ${filters.status === option.value ? 'active' : ''}
                    ${option.color}
                  `}
                >
                  {option.icon}
                  <span className="flex-1 text-left text-sm">{option.label}</span>
                  <span className="text-xs text-gray-400">
                    {getStatusCount(option.value)}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Bookmarks Filter */}
          <div className="mb-6">
            <button
              onClick={() => setFilter({ bookmarked: !filters.bookmarked })}
              className={`
                w-full sidebar-item
                ${filters.bookmarked ? 'active' : ''}
              `}
            >
              <Bookmark className={`w-4 h-4 ${filters.bookmarked ? 'fill-current' : ''}`} />
              <span className="flex-1 text-left text-sm">Bookmarked</span>
              <span className="text-xs text-gray-400">{stats.bookmarked}</span>
            </button>
          </div>

          {/* Category Filters */}
          <div>
            <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 px-2">
              Categories
            </h3>
            <div className="space-y-1">
              <button
                onClick={() => setFilter({ category: 'all' })}
                className={`
                  w-full sidebar-item
                  ${filters.category === 'all' ? 'active' : ''}
                `}
              >
                <ChevronRight className="w-4 h-4" />
                <span className="flex-1 text-left text-sm">All Categories</span>
                <span className="text-xs text-gray-400">{stats.total}</span>
              </button>

              {categoryStats.map((cat) => {
                const isActive = filters.category === cat.categoryId;
                const completedCount = cat.studied + cat.mastered;
                const progressPercent = Math.round((completedCount / cat.total) * 100);

                return (
                  <button
                    key={cat.categoryId}
                    onClick={() => setFilter({ category: cat.categoryId })}
                    className={`
                      w-full sidebar-item group
                      ${isActive ? 'active' : ''}
                    `}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        {isActive ? (
                          <ChevronDown className="w-4 h-4 flex-shrink-0" />
                        ) : (
                          <ChevronRight className="w-4 h-4 flex-shrink-0" />
                        )}
                        <span className="text-sm truncate">{cat.categoryName}</span>
                      </div>
                      {/* Progress bar */}
                      <div className="ml-6 mt-1">
                        <div className="h-1 bg-gray-200 dark:bg-slate-600 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-green-500 rounded-full transition-all duration-300"
                            style={{ width: `${progressPercent}%` }}
                          />
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-gray-400 flex-shrink-0">
                      {completedCount}/{cat.total}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
