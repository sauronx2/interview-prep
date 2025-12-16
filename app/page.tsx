import { interviewData } from '@/lib/data';
import { CategorySection } from '@/components/CategorySection';
import { CollapseAllButton } from '@/components/CollapseAllButton';
import { ClientLayout } from './ClientLayout';
import { BookOpen, Github } from 'lucide-react';

export default function Home() {
  return (
    <ClientLayout>
      <main className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-950/80 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Interview Preparation
                </h1>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  QA Automation Engineer
                </p>
              </div>
            </div>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </a>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-[73px] z-40 backdrop-blur-lg bg-white/90 dark:bg-gray-950/90 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar">
            {interviewData.categories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105 text-gray-700 dark:text-gray-300"
              >
                <span className="mr-2">{category.emoji}</span>
                {category.title}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Intro */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Підготовка до інтерв'ю
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Повний набір питань та відповідей для позиції QA Automation Engineer
          </p>
          <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-500">
            <span>📚 {interviewData.categories.length} категорій</span>
            <span>•</span>
            <span>
              💡{' '}
              {interviewData.categories.reduce(
                (sum, cat) => sum + cat.questions.length,
                0
              )}{' '}
              питань
            </span>
          </div>
          <div className="mt-6 flex items-center justify-center">
            <CollapseAllButton />
          </div>
        </div>

        {/* Categories */}
        <div className="max-w-4xl mx-auto space-y-16">
          {interviewData.categories.map((category) => (
            <CategorySection key={category.id} category={category} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            Створено з використанням Next.js, TypeScript, і Tailwind CSS
          </p>
        </div>
      </footer>
    </main>
    </ClientLayout>
  );
}
