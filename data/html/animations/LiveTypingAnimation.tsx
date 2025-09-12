import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    Prism: {
      highlightElement: (element: Element) => void;
    };
  }
}

interface LiveTypingAnimationProps {
    code: string;
    language: string;
}

// The component is no longer a "typing animation" but is now a static code
// display to provide a cleaner and more direct user experience.
const LiveTypingAnimation: React.FC<LiveTypingAnimationProps> = ({ code, language }) => {
    const codeRef = useRef<HTMLElement>(null);

    const lines = code.trimEnd().split('\n');
    const lineCount = lines.length;
    
    useEffect(() => {
        if (codeRef.current && window.Prism) {
            // Highlight the code block whenever the code content changes.
            window.Prism.highlightElement(codeRef.current);
        }
    }, [code, language]);

    return (
        <div 
            // Added a subtle background color to make the editor area distinct from the modal.
            className="rounded-xl overflow-hidden shadow-lg bg-gray-50 dark:bg-gray-900 ring-1 ring-black/5 dark:ring-white/10 h-full flex flex-col"
        >
            <div className="overflow-auto flex-grow">
                <pre className={`language-${language} !m-0 !rounded-none !border-0 text-[14px] flex !p-0 h-full`}>
                    <div 
                        // Adjusted line number background for better contrast.
                        className="line-numbers-gutter sticky left-0 bg-gray-100 dark:bg-gray-800 p-4 font-mono text-right text-gray-500 dark:text-gray-400 select-none border-r border-gray-200 dark:border-gray-700"
                        aria-hidden="true"
                    >
                        {Array.from({ length: lineCount }).map((_, i) => (
                            <div key={i}>{i + 1}</div>
                        ))}
                    </div>
                    <code ref={codeRef} className={`language-${language} block !p-4 flex-1`}>
                        {code}
                    </code>
                </pre>
            </div>
        </div>
    );
};

export default LiveTypingAnimation;