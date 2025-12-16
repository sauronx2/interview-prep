'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface QuestionsContextType {
  openQuestions: Set<string>;
  toggleQuestion: (id: string) => void;
  collapseAll: () => void;
  expandAll: () => void;
  hasOpenQuestions: boolean;
}

const QuestionsContext = createContext<QuestionsContextType | undefined>(undefined);

export function QuestionsProvider({ children }: { children: ReactNode }) {
  const [openQuestions, setOpenQuestions] = useState<Set<string>>(new Set());

  const toggleQuestion = (id: string) => {
    setOpenQuestions((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const collapseAll = () => {
    setOpenQuestions(new Set());
  };

  const expandAll = () => {
    // This would need all question IDs - we'll implement collapse all for now
    setOpenQuestions(new Set());
  };

  const hasOpenQuestions = openQuestions.size > 0;

  return (
    <QuestionsContext.Provider
      value={{ openQuestions, toggleQuestion, collapseAll, expandAll, hasOpenQuestions }}
    >
      {children}
    </QuestionsContext.Provider>
  );
}

export function useQuestions() {
  const context = useContext(QuestionsContext);
  if (!context) {
    throw new Error('useQuestions must be used within QuestionsProvider');
  }
  return context;
}
