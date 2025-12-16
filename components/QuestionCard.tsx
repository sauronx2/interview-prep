'use client';

import { Question } from '@/lib/types';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { MarkdownAnswer } from './MarkdownAnswer';

interface QuestionCardProps {
  question: Question;
  index: number;
}

export function QuestionCard({ question, index }: QuestionCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden bg-white dark:bg-gray-950 transition-all duration-200 hover:shadow-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-start justify-between text-left gap-4 group"
      >
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-sm font-semibold">
              {index + 1}
            </span>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {question.question}
            </h3>
          </div>
        </div>
        <div className="flex-shrink-0 mt-1">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-gray-400 transition-transform" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400 transition-transform" />
          )}
        </div>
      </button>

      {isOpen && (
        <div className="px-6 pb-6 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="pt-3 pl-11">
            <MarkdownAnswer content={question.answer} />
          </div>
        </div>
      )}
    </div>
  );
}
