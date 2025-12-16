'use client';

import { useQuestions } from './QuestionsProvider';
import { Minimize2 } from 'lucide-react';

export function CollapseAllButton() {
  const { collapseAll, hasOpenQuestions } = useQuestions();

  return (
    <button
      onClick={collapseAll}
      disabled={!hasOpenQuestions}
      className={`
        fixed bottom-6 right-6 z-50
        flex items-center gap-2 px-5 py-3 rounded-full
        text-white text-sm font-medium
        shadow-lg hover:shadow-xl
        transition-all duration-200
        ${hasOpenQuestions
          ? 'bg-primary-500 hover:bg-primary-600 hover:scale-105 cursor-pointer'
          : 'bg-gray-400 cursor-not-allowed opacity-60'
        }
      `}
      aria-label="Згорнути всі питання"
      title={hasOpenQuestions ? 'Згорнути всі питання' : 'Немає відкритих питань'}
    >
      <Minimize2 className="w-5 h-5" />
      <span className="hidden sm:inline">Згорнути все</span>
    </button>
  );
}
