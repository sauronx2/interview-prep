'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

interface MarkdownAnswerProps {
  content: string;
}

export function MarkdownAnswer({ content }: MarkdownAnswerProps) {
  return (
    <div className="prose prose-sm max-w-none prose-invert
      prose-headings:text-gray-100
      prose-p:text-gray-300 prose-p:leading-relaxed
      prose-strong:text-white prose-strong:font-semibold
      prose-code:text-cyan-400 prose-code:bg-slate-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-xs prose-code:before:content-none prose-code:after:content-none
      prose-pre:bg-[#0d1117] prose-pre:border prose-pre:border-slate-700 prose-pre:text-gray-200 prose-pre:p-3 prose-pre:rounded-lg prose-pre:overflow-x-auto prose-pre:shadow-xl
      prose-ul:list-disc prose-ul:pl-5 prose-ul:my-2
      prose-ol:list-decimal prose-ol:pl-5 prose-ol:my-2
      prose-li:text-gray-300 prose-li:my-1
      prose-table:border-collapse prose-td:border prose-td:border-slate-700 prose-td:px-4 prose-td:py-2 prose-th:border prose-th:border-slate-700 prose-th:px-4 prose-th:py-2 prose-th:bg-slate-800 prose-th:font-semibold">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          code: ({ node, inline, className, children, ...props }: any) => {
            if (inline) {
              return (
                <code className="text-cyan-400 bg-slate-800 px-1.5 py-0.5 rounded font-mono text-xs font-semibold" {...props}>
                  {children}
                </code>
              );
            }
            return (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
