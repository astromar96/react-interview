import { Search, Moon, Sun, Monitor, BookOpen, Keyboard, BarChart3 } from 'lucide-react';
import { useStudy } from '../../context/StudyContext';
import { useTheme } from '../../context/ThemeContext';

interface HeaderProps {
  onOpenStats: () => void;
  onOpenShortcuts: () => void;
  onStartQuiz: () => void;
}

export function Header({ onOpenStats, onOpenShortcuts, onStartQuiz }: HeaderProps) {
  const { state, setSearch, stats } = useStudy();
  const { theme, setTheme, isDark } = useTheme();

  const progressPercent = Math.round(
    ((stats.studied + stats.mastered) / stats.total) * 100
  );

  const cycleTheme = () => {
    const themes: ('light' | 'dark' | 'system')[] = ['light', 'dark', 'system'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  const ThemeIcon = theme === 'system' ? Monitor : isDark ? Moon : Sun;

  return (
    <header className="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-slate-700">
      <div className="flex items-center justify-between px-4 py-3 gap-4">
        {/* Logo and Title */}
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-500 rounded-lg">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold text-gray-900 dark:text-white">
              React Interview Prep
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {stats.mastered + stats.studied}/{stats.total} completed ({progressPercent}%)
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search questions... (Press / to focus)"
              value={state.filters.searchQuery}
              onChange={(e) => setSearch(e.target.value)}
              className="input pl-10"
              id="search-input"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={onStartQuiz}
            className="btn btn-primary hidden sm:flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            <span>Quiz</span>
          </button>

          <button
            onClick={onOpenStats}
            className="btn btn-ghost p-2"
            title="View Statistics"
          >
            <BarChart3 className="w-5 h-5" />
          </button>

          <button
            onClick={onOpenShortcuts}
            className="btn btn-ghost p-2 hidden sm:flex"
            title="Keyboard Shortcuts"
          >
            <Keyboard className="w-5 h-5" />
          </button>

          <button
            onClick={cycleTheme}
            className="btn btn-ghost p-2"
            title={`Theme: ${theme}`}
          >
            <ThemeIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
