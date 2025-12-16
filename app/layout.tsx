import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';

export const metadata: Metadata = {
  title: 'Interview Preparation - QA Automation Engineer',
  description: 'Comprehensive Q&A guide for QA Automation Engineer interview preparation',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={`dark ${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        {children}
      </body>
    </html>
  );
}
