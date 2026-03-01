import React, { useState, useEffect, useRef } from 'react';
import { useAnimation } from '../context/AnimationContext';
import { ANIMATION_MAP } from './html/animations';
import CodeMirror from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';

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

export const CodeBlock: React.FC<{ children: React.ReactNode; language: string; animationId?: string; }> = ({ children, language, animationId }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [codeString, setCodeString] = useState(() => React.Children.toArray(children).join('').trimEnd());
  const [output, setOutput] = useState('');
  const [showOutput, setShowOutput] = useState(false);
  const { openAnimationPage } = useAnimation();

  // Keep state synced if children change
  useEffect(() => {
    setCodeString(React.Children.toArray(children).join('').trimEnd());
  }, [children]);

  const getLanguageExtension = (lang: string) => {
    switch (lang) {
      case 'html': return [html()];
      case 'css': return [css()];
      case 'javascript': case 'js': return [javascript({ jsx: true })];
      case 'python': return [python()];
      default: return [];
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  const handleAnimationClick = () => {
    const defaultAnimationId = language === 'html' ? 'html-live-preview' : 'live-typing-animation';
    const finalAnimationId = animationId || defaultAnimationId;

    openAnimationPage({
      animationId: finalAnimationId,
      props: { code: codeString, language }
    });
  };

  const runCode = () => {
    setShowOutput(true);
    if (language === 'html') {
      const iframeContent = `
        <!DOCTYPE html>
        <html>
          <head>
            <style>body { font-family: sans-serif; }</style>
          </head>
          <body>${codeString}</body>
        </html>
      `;
      setOutput(iframeContent);
    } else if (language === 'javascript' || language === 'js') {
      try {
        let logs: string[] = [];
        const originalConsoleLog = console.log;
        console.log = (...args) => {
          logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' '));
        };
        // Use Function to evaluate
        new Function(codeString)();
        console.log = originalConsoleLog;
        setOutput(logs.join('\\n') || 'Execution finished (no output)');
      } catch (err: any) {
        setOutput(err.toString());
      }
    } else {
      setOutput('Output preview is only supported for HTML and JavaScript currently.\\nFor Python/SQL, please use the provided Visualize button.');
    }
  };

  return (
    <div className="rounded-xl my-6 overflow-hidden shadow-lg bg-white dark:bg-gray-800/50 ring-1 ring-black/5 dark:ring-white/10">
      <div className="p-3 bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <h3 className="font-mono text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Interactive Example</h3>
          <span className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
            {language}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 text-xs font-bold py-1 px-3 rounded-md transition-colors duration-200 flex items-center"
          aria-label="Copy code to clipboard"
        >
          {isCopied ? (
            <><i className="fa-solid fa-check mr-2 text-green-500"></i> Copied!</>
          ) : (
            <><i className="fa-regular fa-copy mr-2"></i> Copy</>
          )}
        </button>
      </div>

      <div className="text-[14px] w-full">
        <CodeMirror
          value={codeString}
          height="auto"
          theme={vscodeDark}
          extensions={getLanguageExtension(language)}
          onChange={(val) => setCodeString(val)}
          basicSetup={{
            lineNumbers: true,
            foldGutter: true,
            tabSize: 2,
          }}
          className="border-b border-gray-200 dark:border-gray-700"
        />
      </div>

      <div className="p-4 bg-gray-50 dark:bg-gray-900/50 flex space-x-3 items-center">
        <button
          onClick={runCode}
          className="inline-flex items-center bg-green-600 text-white font-bold py-2 px-5 rounded-full hover:bg-green-700 transition-colors shadow-sm"
        >
          <i className="fa-solid fa-play mr-2"></i>
          Run Code
        </button>
        <button
          onClick={handleAnimationClick}
          className="inline-flex items-center bg-indigo-600 text-white font-bold py-2 px-5 rounded-full hover:bg-indigo-700 transition-colors shadow-sm"
        >
          <i className="fa-solid fa-wand-magic-sparkles mr-2"></i>
          Visualize Flow
        </button>
      </div>

      {showOutput && (
        <div className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
          <div className="p-2 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <span className="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Output</span>
            <button onClick={() => setShowOutput(false)} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
              <i className="fa-solid fa-times"></i>
            </button>
          </div>
          <div className="p-4 overflow-auto max-h-[400px]">
            {language === 'html' ? (
              <iframe
                title="code-output"
                srcDoc={output}
                sandbox="allow-scripts"
                className="w-full min-h-[200px] border border-gray-200 dark:border-gray-700 bg-white rounded"
              />
            ) : (
              <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap">
                {output}
              </pre>
            )}
          </div>
        </div>
      )}
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
      <div className="flex-1 bg-white dark:bg-gray-800 rounded-md px-3 py-1 text-sm text-gray-600 dark:text-gray-400 truncate">
        <i className="fa-solid fa-lock text-gray-500 mr-2"></i>
        {title}
      </div>
    </div>
    <div className="bg-white dark:bg-gray-800/50 rounded-b-lg">
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