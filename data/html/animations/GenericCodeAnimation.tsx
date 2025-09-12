import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    Prism: {
      highlightElement: (element: Element) => void;
    };
  }
}

interface GenericCodeAnimationProps {
    code: string;
    language: string;
}

const GenericCodeAnimation: React.FC<GenericCodeAnimationProps> = ({ code, language }) => {
    const codeRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (codeRef.current && window.Prism) {
            window.Prism.highlightElement(codeRef.current);
        }
    }, [code, language]);
    
    const lines = code.trimEnd().split('\n');
    const lineCount = lines.length;

    return (
        <div 
            className="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800/50 ring-1 ring-black/5 dark:ring-white/10 opacity-0 anim-slide-in"
            style={{ animationDelay: '0.2s' }}
        >
            <div className="overflow-auto">
                <pre className={`language-${language} !m-0 !rounded-none !border-0 text-[14px] flex !p-0`}>
                    <div 
                        className="line-numbers-gutter sticky left-0 bg-gray-50 dark:bg-gray-900/50 p-4 font-mono text-right text-gray-500 dark:text-gray-400 select-none border-r border-gray-200 dark:border-gray-700"
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

export default GenericCodeAnimation;