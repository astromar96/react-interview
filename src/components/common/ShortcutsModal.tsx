import { X } from 'lucide-react';

interface ShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const shortcuts = [
  { key: '/', description: 'Focus search' },
  { key: 'Escape', description: 'Clear search / Close modal' },
  { key: 'j', description: 'Next question' },
  { key: 'k', description: 'Previous question' },
  { key: 'Space', description: 'Toggle answer / Flip quiz card' },
  { key: 'Enter', description: 'Expand/collapse current question' },
  { key: 's', description: 'Mark as studied' },
  { key: 'r', description: 'Mark as needs review' },
  { key: 'm', description: 'Mark as mastered' },
  { key: 'b', description: 'Toggle bookmark' },
  { key: 'e', description: 'Expand all questions' },
  { key: 'c', description: 'Collapse all questions' },
  { key: 'd', description: 'Toggle dark mode' },
  { key: 'q', description: 'Open quiz mode' },
  { key: '?', description: 'Show this help' },
];

export function ShortcutsModal({ isOpen, onClose }: ShortcutsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white dark:bg-slate-800 w-full max-w-md rounded-xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-slate-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Keyboard Shortcuts
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          <div className="space-y-2">
            {shortcuts.map(({ key, description }) => (
              <div
                key={key}
                className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-slate-700 last:border-0"
              >
                <span className="text-gray-700 dark:text-gray-300">{description}</span>
                <kbd className="px-2 py-1 bg-gray-100 dark:bg-slate-700 rounded text-sm font-mono text-gray-600 dark:text-gray-400">
                  {key}
                </kbd>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900/50">
          <button onClick={onClose} className="btn btn-primary w-full">
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
