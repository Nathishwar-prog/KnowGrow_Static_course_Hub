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
    // Wait for the lazy loaded content to render
    const timer = setTimeout(() => {
      const article = document.querySelector('article');
      if (!article) return;

      const elements = Array.from(article.querySelectorAll('h2, h3'));
      const newHeadings: TocHeading[] = elements.map((elem, index) => {
        let text = elem.textContent || '';
        // If the element doesn't have an ID, generate a safe one
        if (!elem.id) {
          const generatedId = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || `heading-${index}`;
          elem.id = generatedId;
        }
        return {
          id: elem.id,
          text,
          level: Number(elem.tagName.charAt(1))
        };
      });

      setHeadings(newHeadings);
    }, 150); // slight delay to ensure suspense finishes

    return () => clearTimeout(timer);
  }, [dependency]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let currentActive = '';
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            currentActive = entry.target.id;
          }
        });
        if (currentActive) {
          setActiveId(currentActive);
        }
      },
      { rootMargin: '0px 0px -80% 0px' }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [headings]);

  return { headings, activeId };
};
