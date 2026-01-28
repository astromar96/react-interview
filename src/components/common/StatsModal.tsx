import {
  X,
  Circle,
  CheckCircle2,
  Clock,
  Star,
  Bookmark,
  Download,
  Upload,
  Trash2,
} from 'lucide-react';
import { useStudy } from '../../context/StudyContext';

interface StatsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function StatsModal({ isOpen, onClose }: StatsModalProps) {
  const { stats, categoryStats, state, dispatch } = useStudy();

  if (!isOpen) return null;

  const completedPercent = Math.round(
    ((stats.studied + stats.mastered) / stats.total) * 100
  );

  const handleExport = () => {
    const data = JSON.stringify(
      {
        version: 1,
        exportedAt: Date.now(),
        progress: state.progress,
      },
      null,
      2
    );

    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `react-study-progress-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;

      try {
        const text = await file.text();
        const data = JSON.parse(text);
        if (data.version === 1 && data.progress) {
          dispatch({ type: 'IMPORT_PROGRESS', data: data.progress });
          alert('Progress imported successfully!');
        } else {
          alert('Invalid file format');
        }
      } catch {
        alert('Failed to import file');
      }
    };
    input.click();
  };

  const handleReset = () => {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
      dispatch({ type: 'RESET_PROGRESS' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white dark:bg-slate-800 w-full max-w-2xl max-h-[90vh] rounded-xl shadow-xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-slate-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Study Statistics</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Overall Progress */}
          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
              Overall Progress
            </h3>
            <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-500"
                style={{ width: `${completedPercent}%` }}
              />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              {stats.studied + stats.mastered} of {stats.total} questions completed ({completedPercent}%)
            </p>
          </div>

          {/* Status Breakdown */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="card p-4 text-center">
              <Circle className="w-6 h-6 mx-auto mb-2 text-gray-400" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {stats.notStarted}
              </div>
              <div className="text-xs text-gray-500">Not Started</div>
            </div>
            <div className="card p-4 text-center">
              <CheckCircle2 className="w-6 h-6 mx-auto mb-2 text-blue-500" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {stats.studied}
              </div>
              <div className="text-xs text-gray-500">Studied</div>
            </div>
            <div className="card p-4 text-center">
              <Clock className="w-6 h-6 mx-auto mb-2 text-amber-500" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {stats.needsReview}
              </div>
              <div className="text-xs text-gray-500">Needs Review</div>
            </div>
            <div className="card p-4 text-center">
              <Star className="w-6 h-6 mx-auto mb-2 text-green-500" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {stats.mastered}
              </div>
              <div className="text-xs text-gray-500">Mastered</div>
            </div>
          </div>

          {/* Bookmarks */}
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <Bookmark className="w-5 h-5 text-amber-500" />
            <span>{stats.bookmarked} bookmarked questions</span>
          </div>

          {/* Category Progress */}
          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
              Progress by Category
            </h3>
            <div className="space-y-3">
              {categoryStats.map(cat => {
                const completed = cat.studied + cat.mastered;
                const percent = Math.round((completed / cat.total) * 100);

                return (
                  <div key={cat.categoryId}>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-gray-700 dark:text-gray-300 truncate">
                        {cat.categoryName}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">
                        {completed}/{cat.total}
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-500 transition-all duration-300"
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Data Management */}
          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
              Data Management
            </h3>
            <div className="flex flex-wrap gap-2">
              <button onClick={handleExport} className="btn btn-secondary">
                <Download className="w-4 h-4 mr-2" />
                Export Progress
              </button>
              <button onClick={handleImport} className="btn btn-secondary">
                <Upload className="w-4 h-4 mr-2" />
                Import Progress
              </button>
              <button
                onClick={handleReset}
                className="btn bg-red-500 text-white hover:bg-red-600"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Reset All
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900/50">
          <button onClick={onClose} className="btn btn-primary w-full">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
