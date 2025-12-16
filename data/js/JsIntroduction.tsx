import React, { useState } from 'react';
import { Lightbulb, History, Code, Check, Copy, Play, Terminal, Layers, Globe, Server, Smartphone } from 'lucide-react';

// --- Utility Components ---

const CodeSnippetBlock = ({ codeSnippet, language = 'javascript', title }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="mb-6 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
      {title && (
        <div className="bg-gray-50 dark:bg-gray-800 px-4 py-2 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{title}</span>
          <div className="flex space-x-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
          </div>
        </div>
      )}
      <div className="relative group bg-gray-900">
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-yellow-500 hover:text-gray-900 transition-colors border border-gray-700"
            title="Copy code"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </div>
        <pre className="p-4 overflow-x-auto text-sm font-mono text-yellow-300 leading-relaxed">
          <code>{codeSnippet}</code>
        </pre>
      </div>
    </div>
  );
};

// --- Main Component ---

const JsIntroduction = () => {
  const [consoleLogs, setConsoleLogs] = useState([]);
  const [isRunning, setIsRunning] = useState(false);

  const runCode = () => {
    setIsRunning(true);
    setConsoleLogs([]); // Clear previous logs

    // Simulate line-by-line execution
    setTimeout(() => {
      setConsoleLogs(prev => [...prev, '> Starting execution...']);
    }, 500);

    setTimeout(() => {
      setConsoleLogs(prev => [...prev, '> console.log("JavaScript is running");']);
    }, 1500);

    setTimeout(() => {
      setConsoleLogs(prev => [...prev, 'JavaScript is running']);
      setIsRunning(false);
    }, 2500);
  };

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-yellow-50 dark:from-gray-900 dark:to-gray-900 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl mb-4">
          <Lightbulb className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          Introduction to JavaScript
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          The world's most popular programming language. From simple scripts to complex applications.
        </p>
      </header>

      {/* Interactive Execution Flow */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Play className="w-6 h-6 mr-2 text-yellow-500" />
            Execution Flow
          </h2>
          <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-bold uppercase tracking-wider">
            Interactive Demo
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Code Editor */}
          <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-800 flex flex-col h-full">
            <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
              <span className="text-xs font-bold text-gray-400 uppercase">script.js</span>
              <button
                onClick={runCode}
                disabled={isRunning}
                className={`flex items-center px-3 py-1 rounded text-xs font-bold transition-all ${isRunning
                    ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                    : 'bg-green-600 text-white hover:bg-green-500'
                  }`}
              >
                <Play className="w-3 h-3 mr-1" /> {isRunning ? 'Running...' : 'Run Code'}
              </button>
            </div>
            <div className="p-6 font-mono text-sm text-gray-300 flex-1 relative">
              {isRunning && (
                <div className="absolute top-6 left-0 w-1 h-6 bg-yellow-500 animate-pulse"></div>
              )}
              <div className="opacity-50 mb-2">// JavaScript runs line by line</div>
              <div className="mb-2">console.log("Starting execution...");</div>
              <div className="mb-2">console.log("JavaScript is running");</div>
            </div>
          </div>

          {/* Console Output */}
          <div className="bg-black rounded-xl overflow-hidden shadow-lg border border-gray-800 flex flex-col h-full min-h-[200px]">
            <div className="bg-gray-900 px-4 py-2 flex items-center border-b border-gray-800">
              <Terminal className="w-4 h-4 mr-2 text-gray-500" />
              <span className="text-xs font-bold text-gray-400 uppercase">Console</span>
            </div>
            <div className="p-6 font-mono text-sm text-green-400 flex-1 overflow-y-auto">
              {consoleLogs.length === 0 ? (
                <span className="text-gray-600 italic opacity-50">Waiting for output...</span>
              ) : (
                consoleLogs.map((log, i) => (
                  <div key={i} className="mb-1 animate-fade-in">
                    {log.startsWith('>') ? <span className="text-gray-500">{log}</span> : log}
                  </div>
                ))
              )}
              {isRunning && <span className="inline-block w-2 h-4 bg-green-500 animate-pulse ml-1"></span>}
            </div>
          </div>
        </div>
      </section>

      {/* History & Evolution */}
      <section className="max-w-4xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <History className="w-32 h-32 text-gray-900 dark:text-white" />
          </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 relative z-10">A Brief History</h2>

          <div className="relative border-l-2 border-yellow-200 dark:border-yellow-900/50 ml-3 space-y-8 z-10">
            <div className="ml-6 relative">
              <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-yellow-500 border-4 border-white dark:border-gray-800"></span>
              <h3 className="font-bold text-gray-900 dark:text-white">1995</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Created by Brendan Eich in just 10 days. Originally named <strong>Mocha</strong>, then <strong>LiveScript</strong>.</p>
            </div>
            <div className="ml-6 relative">
              <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-yellow-500 border-4 border-white dark:border-gray-800"></span>
              <h3 className="font-bold text-gray-900 dark:text-white">The Name Change</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Renamed to <strong>JavaScript</strong> to ride the popularity wave of Java, despite having no relation to it.</p>
            </div>
            <div className="ml-6 relative">
              <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-yellow-500 border-4 border-white dark:border-gray-800"></span>
              <h3 className="font-bold text-gray-900 dark:text-white">ECMAScript</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Standardized as ECMAScript (ES) to ensure cross-browser compatibility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          Where is JavaScript Used?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-yellow-400 transition-colors group">
            <Globe className="w-8 h-8 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">Websites</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">Dynamic content, menus, and interactivity.</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-yellow-400 transition-colors group">
            <Server className="w-8 h-8 text-green-500 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">Server-Side</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">Backend development using Node.js.</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-yellow-400 transition-colors group">
            <Smartphone className="w-8 h-8 text-purple-500 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">Mobile Apps</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">Cross-platform apps with React Native.</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-yellow-400 transition-colors group">
            <Layers className="w-8 h-8 text-orange-500 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">Web Apps</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">Complex SPAs like Gmail or Trello.</p>
          </div>
        </div>
      </section>

      {/* Basic Example */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Your First Script</h2>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            A simple example showing how HTML triggers a JavaScript function.
          </p>
          <CodeSnippetBlock
            title="HTML + JS"
            codeSnippet={`<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Example</h2>
<button onclick="sayHello()">Click Me</button>

<script>
  function sayHello() {
    alert("Welcome to JavaScript!");
  }
</script>

</body>
</html>`}
          />
        </div>
      </section>

    </div>
  );
};

export default JsIntroduction;