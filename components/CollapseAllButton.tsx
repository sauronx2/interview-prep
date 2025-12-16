'use client';

import { useQuestions } from './QuestionsProvider';
import { Minimize2 } from 'lucide-react';

export function CollapseAllButton() {
  const { collapseAll, hasOpenQuestions } = useQuestions();

  if (!hasOpenQuestions) {
    return null;
  }

  return (
    <button
      onClick={collapseAll}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-500 hover:bg-primary-600 text-white text-sm font-medium transition-all hover:scale-105 shadow-sm"
      aria-label="Свернуть все вопросы"
    >
      <Minimize2 className="w-4 h-4" />
      Свернуть все
    </button>
  );
}
