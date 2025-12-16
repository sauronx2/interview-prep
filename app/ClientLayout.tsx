'use client';

import { QuestionsProvider } from '@/components/QuestionsProvider';
import { ReactNode } from 'react';

export function ClientLayout({ children }: { children: ReactNode }) {
  return <QuestionsProvider>{children}</QuestionsProvider>;
}
