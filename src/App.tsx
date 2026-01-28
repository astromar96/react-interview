import { useState } from 'react';
import { StudyProvider } from './context/StudyContext';
import { ThemeProvider } from './context/ThemeContext';
import { Layout } from './components/layout/Layout';
import { QuestionList } from './components/questions/QuestionList';
import { QuizMode } from './components/quiz/QuizMode';
import { StatsModal } from './components/common/StatsModal';
import { ShortcutsModal } from './components/common/ShortcutsModal';
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts';

function AppContent() {
  const [quizOpen, setQuizOpen] = useState(false);
  const [statsOpen, setStatsOpen] = useState(false);
  const [shortcutsOpen, setShortcutsOpen] = useState(false);

  // Set up keyboard shortcuts
  useKeyboardShortcuts({
    onOpenQuiz: () => setQuizOpen(true),
    onOpenShortcuts: () => setShortcutsOpen(true),
    onOpenStats: () => setStatsOpen(true),
  });

  return (
    <>
      <Layout
        onOpenStats={() => setStatsOpen(true)}
        onOpenShortcuts={() => setShortcutsOpen(true)}
        onStartQuiz={() => setQuizOpen(true)}
      >
        <QuestionList />
      </Layout>

      <QuizMode isOpen={quizOpen} onClose={() => setQuizOpen(false)} />
      <StatsModal isOpen={statsOpen} onClose={() => setStatsOpen(false)} />
      <ShortcutsModal isOpen={shortcutsOpen} onClose={() => setShortcutsOpen(false)} />
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <StudyProvider>
        <AppContent />
      </StudyProvider>
    </ThemeProvider>
  );
}

export default App;
