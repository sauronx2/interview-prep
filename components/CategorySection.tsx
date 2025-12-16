'use client';

import { Category } from '@/lib/types';
import { QuestionCard } from './QuestionCard';

interface CategorySectionProps {
  category: Category;
}

export function CategorySection({ category }: CategorySectionProps) {
  return (
    <section id={category.id} className="scroll-mt-24">
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-3">
          <span className="text-5xl" role="img" aria-label={category.title}>
            {category.emoji}
          </span>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              {category.title}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {category.description}
            </p>
          </div>
        </div>
        <div className="h-1 w-24 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"></div>
      </div>

      <div className="space-y-3">
        {category.questions.map((question, index) => (
          <QuestionCard
            key={index}
            question={question}
            index={index}
            questionId={`${category.id}-${index}`}
          />
        ))}
      </div>
    </section>
  );
}
