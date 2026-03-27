import { useState, useEffect } from 'react';

export interface TocHeading {
  id: string;
  text: string;
  level: number;
}

export const useTableOfContents = (dependency: any) => {
  const [headings, setHeadings] = useState<TocHeading[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const extractHeadings = () => {
      const article = document.querySelector('article');
      if (!article) return;

      const elements = Array.from(article.querySelectorAll('h2, h3'));
      const newHeadings: TocHeading[] = elements.map((elem, index) => {
        const text = elem.textContent || '';
        if (!elem.id) {
          const generatedId = text.toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '') || `section-${index}`;
          elem.id = generatedId;
        }
        return {
          id: elem.id,
          text,
          level: Number(elem.tagName.charAt(1))
        };
      });

      if (JSON.stringify(newHeadings) !== JSON.stringify(headings)) {
        setHeadings(newHeadings);
      }
    };

    // Initial extraction
    extractHeadings();

    // Observe for lazy-loaded content or dynamic changes
    const article = document.querySelector('article');
    if (!article) return;

    const observer = new MutationObserver(extractHeadings);
    observer.observe(article, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [dependency]);

  useEffect(() => {
    if (headings.length === 0) return;

    const observerOptions = {
      rootMargin: '-10% 0px -70% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, observerOptions);

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  return { headings, activeId };
};
