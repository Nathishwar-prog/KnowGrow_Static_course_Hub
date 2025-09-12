import React, { useState, useEffect, useRef } from 'react';

// Make Prism object available globally for TypeScript
declare global {
  interface Window {
    Prism: {
      highlightElement: (element: Element) => void;
    };
  }
}

export const InfoBox: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
  <div className={`p-5 my-6 rounded-lg ${className}`}>
    {children}
  </div>
);

export const CodeBlock: React.FC<{ children: React.ReactNode; language: string; }> = ({ children, language }) => {
  const [isCopied, setIsCopied] = useState(false);
  const codeRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (codeRef.current && window.Prism) {
      window.Prism.highlightElement(codeRef.current);
    }
  }, [children, language]);


  const handleCopy = () => {
    const codeString = React.Children.toArray(children).join('');
    navigator.clipboard.writeText(codeString).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <div className="rounded-lg my-6 overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg">
      <div className="p-3 bg-gray-100 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <h3 className="font-bold text-gray-700 dark:text-gray-200">Example</h3>
        <button
          onClick={handleCopy}
          className="bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 text-gray-800 dark:text-gray-200 text-xs font-bold py-1 px-3 rounded-md transition-colors duration-200 flex items-center"
          aria-label="Copy code to clipboard"
        >
          {isCopied ? (
            <>
              <i className="fa-solid fa-check mr-2"></i> Copied!
            </>
          ) : (
            <>
              <i className="fa-regular fa-copy mr-2"></i> Copy Code
            </>
          )}
        </button>
      </div>
      
      {/* The <pre> tag will be styled by the Prism theme */}
      <pre className={`language-${language} !m-0 !rounded-none !border-0 text-[14px]`}>
          <code ref={codeRef} className={`language-${language}`}>
            {children}
          </code>
      </pre>

      <div className="p-4 bg-gray-100 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-700">
        <a href="#" className="bg-indigo-600 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
          Try it Yourself &raquo;
        </a>
      </div>
    </div>
  );
};

export const PlaceholderContent: React.FC<{ title: string }> = ({ title }) => (
  <>
    <p className="text-lg leading-relaxed">Content for <strong>{title}</strong> is coming soon.</p>
    <InfoBox className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-blue-800 dark:text-blue-300 mt-10">
        <h4 className="font-bold">Under Construction</h4>
        <p>This section is currently being developed. Please check back later for more information!</p>
    </InfoBox>
  </>
);

export const BrowserMockup: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
    <div className="border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg my-6">
        <div className="flex items-center p-2 bg-gray-200 dark:bg-gray-700 border-b border-gray-300 dark:border-gray-600 rounded-t-lg">
            <div className="flex space-x-2 mr-4">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
            <div className="flex-1 bg-white dark:bg-gray-800 rounded-md px-3 py-1 text-sm text-gray-600 dark:text-gray-400">
                <i className="fa-solid fa-lock text-gray-500 mr-2"></i>
                file:///C:/Users/myuser/Desktop/{title}
            </div>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800/50 rounded-b-lg">
            {children}
        </div>
    </div>
);


export const SimpleTable: React.FC<{ headers: string[], rows: (string | React.ReactNode)[][] }> = ({ headers, rows }) => (
    <div className="overflow-x-auto my-6">
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700">
            <thead>
                <tr className="bg-gray-100 dark:bg-gray-700">
                    {headers.map(header => (
                        <th key={header} className="text-left font-bold py-2 px-4 border-b dark:border-gray-600">{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, rowIndex) => (
                    <tr key={rowIndex} className="border-b dark:border-gray-700">
                        {row.map((cell, cellIndex) => (
                            <td key={cellIndex} className="py-2 px-4">{cell}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export const HowItWorks: React.FC = () => (
    <div className="bg-gray-800 dark:bg-black/30 rounded-lg p-8 my-10">
        <h3 className="text-2xl font-bold text-center text-white mb-8">How it works</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-gray-300">
            <div className="flex flex-col items-center p-4">
                <div className="text-5xl mb-4 text-indigo-400"><i className="fa-solid fa-file-circle-plus"></i></div>
                <h4 className="font-bold text-lg">1. Join KnowGrow</h4>
                <p className="text-sm text-gray-400">And create a space.</p>
            </div>
            <div className="flex flex-col items-center p-4">
                 <div className="text-5xl mb-4 text-indigo-400"><i className="fa-solid fa-table-cells-large"></i></div>
                <h4 className="font-bold text-lg">2. Choose a template</h4>
                 <p className="text-sm text-gray-400">Or start from scratch.</p>
            </div>
            <div className="flex flex-col items-center p-4">
                 <div className="text-5xl mb-4 text-indigo-400"><i className="fa-solid fa-code"></i></div>
                <h4 className="font-bold text-lg">3. Edit code</h4>
                 <p className="text-sm text-gray-400">Directly in your browser.</p>
            </div>
            <div className="flex flex-col items-center p-4">
                <div className="text-5xl mb-4 text-indigo-400"><i className="fa-solid fa-globe"></i></div>
                <h4 className="font-bold text-lg">4. Share your page</h4>
                <p className="text-sm text-gray-400">With the world.</p>
            </div>
        </div>
    </div>
);