import { Search, Filter, ChevronUp, ChevronDown } from 'lucide-react';
import { QuestionCard } from './QuestionCard';
import { useStudy } from '../../context/StudyContext';

export function QuestionList() {
  const { filteredQuestions, state, dispatch, stats } = useStudy();
  const { filters } = state;

  const hasFilters =
    filters.status !== 'all' ||
    filters.category !== 'all' ||
    filters.bookmarked ||
    filters.searchQuery.trim() !== '';

  const handleExpandAll = () => {
    dispatch({ type: 'EXPAND_ALL' });
  };

  const handleCollapseAll = () => {
    dispatch({ type: 'COLLAPSE_ALL' });
  };

  const handleClearFilters = () => {
    dispatch({ type: 'CLEAR_FILTERS' });
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Results Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          {hasFilters ? (
            <>
              <Filter className="w-4 h-4" />
              <span>
                Showing {filteredQuestions.length} of {stats.total} questions
              </span>
              <button
                onClick={handleClearFilters}
                className="text-blue-500 hover:text-blue-600 ml-2"
              >
                Clear filters
              </button>
            </>
          ) : (
            <span>{stats.total} questions total</span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleExpandAll}
            className="btn btn-ghost text-sm flex items-center gap-1"
            title="Expand all"
          >
            <ChevronDown className="w-4 h-4" />
            Expand
          </button>
          <button
            onClick={handleCollapseAll}
            className="btn btn-ghost text-sm flex items-center gap-1"
            title="Collapse all"
          >
            <ChevronUp className="w-4 h-4" />
            Collapse
          </button>
        </div>
      </div>

      {/* Question List */}
      {filteredQuestions.length > 0 ? (
        <div className="space-y-4">
          {filteredQuestions.map((question, index) => (
            <QuestionCard key={question.id} question={question} index={index} />
          ))}
        </div>
      ) : (
        <div className="card p-12 text-center">
          <Search className="w-12 h-12 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            No questions found
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            {filters.searchQuery
              ? `No questions match "${filters.searchQuery}"`
              : 'No questions match the current filters'}
          </p>
          <button onClick={handleClearFilters} className="btn btn-primary">
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
