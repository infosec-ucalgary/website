import React, { useEffect, useState } from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

marked.setOptions({
    gfm: true,            
    breaks: true,         
});

interface MarkdownRendererProps {
  markdownText: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ markdownText }) => {
  const [sanitizedHtml, setSanitizedHtml] = useState<string>("");

  useEffect(() => {
    const convertMarkdown = async () => {
      // Convert markdown to HTML (handle async return if necessary)
      const rawHtml = await marked(markdownText);
      const cleanHtml = DOMPurify.sanitize(rawHtml);
      setSanitizedHtml(cleanHtml);
    };

    convertMarkdown();
  }, [markdownText]);

  return (
    <div className=' prose prose-invert max-w-full'
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
    />
  );
};

export default MarkdownRenderer;
