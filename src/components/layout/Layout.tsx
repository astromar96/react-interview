import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
  onOpenStats: () => void;
  onOpenShortcuts: () => void;
  onStartQuiz: () => void;
}

export function Layout({ children, onOpenStats, onOpenShortcuts, onStartQuiz }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      <Header
        onOpenStats={onOpenStats}
        onOpenShortcuts={onOpenShortcuts}
        onStartQuiz={onStartQuiz}
      />

      <div className="flex">
        {/* Mobile menu button */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden fixed bottom-4 left-4 z-30 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>

        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <main className="flex-1 min-h-[calc(100vh-64px)] p-4 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
