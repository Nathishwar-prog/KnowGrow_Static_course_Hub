import React from 'react';

function applyHighlight(text: string | number, query: string): React.ReactNode {
  if (!query) return text;
  const textStr = String(text);
  // Escape special characters in the query for safe regex creation
  const escapedQuery = query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  const regex = new RegExp(`(${escapedQuery})`, 'gi');
  const parts = textStr.split(regex);
  
  return parts.map((part, i) => 
    part.toLowerCase() === query.toLowerCase() 
      ? <mark key={i}>{part}</mark> 
      : part
  );
}

const Highlighter: React.FC<{ children: React.ReactNode; query: string }> = ({ children, query }) => {
  if (!query.trim()) {
    return <>{children}</>;
  }

  return React.Children.map(children, child => {
    if (typeof child === 'string' || typeof child === 'number') {
      return applyHighlight(child, query);
    }

    if (React.isValidElement<{ children?: React.ReactNode; language?: string; [key: string]: any; }>(child) && child.props.children) {
      // Don't highlight inside code blocks (identified by `language` prop)
      // or other interactive elements to prevent breaking them.
      if (child.props.language || ['a', 'button'].includes(child.type as string)) {
        return child;
      }

      return React.cloneElement(child, {
        ...child.props,
        children: <Highlighter query={query}>{child.props.children}</Highlighter>,
      });
    }
    
    return child;
  });
};

export default Highlighter;