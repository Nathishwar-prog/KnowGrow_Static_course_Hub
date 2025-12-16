import React, { useState } from 'react';
import { FileJson, Zap, Globe, Play, Terminal, Code, Layers, Smartphone, Database, Check, Copy, MousePointer } from 'lucide-react';

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

const JsHome = () => {
  const [activeLayer, setActiveLayer] = useState('js'); // html, css, js
  const [demoText, setDemoText] = useState('Hello! Click me.');
  const [demoColor, setDemoColor] = useState('bg-yellow-500');
  const [consoleOutput, setConsoleOutput] = useState([]);

  const handleDemoClick = () => {
    setDemoText(prev => prev === 'Hello! Click me.' ? 'JavaScript is Awesome!' : 'Hello! Click me.');
    setDemoColor(prev => prev === 'bg-yellow-500' ? 'bg-green-500' : 'bg-yellow-500');
  };

  const runOutputDemo = (type) => {
    const timestamp = new Date().toLocaleTimeString();
    if (type === 'alert') {
      alert('Hello! Welcome to JavaScript');
      setConsoleOutput(prev => [...prev, `[${timestamp}] Alert triggered`]);
    } else if (type === 'console') {
      setConsoleOutput(prev => [...prev, `[${timestamp}] > Hello JavaScript`]);
    } else if (type === 'document') {
      setConsoleOutput(prev => [...prev, `[${timestamp}] Document content updated`]);
      // Visual feedback only for this demo
    }
  };

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-yellow-50 dark:from-gray-900 dark:to-gray-900 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl mb-4">
          <FileJson className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          JavaScript
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          The brain of the web. Make your pages dynamic, interactive, and alive.
        </p>
      </header>

      {/* The Web Trinity Interactive */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Layers className="w-6 h-6 mr-2 text-yellow-500" />
            The Web Trinity
          </h2>
          <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-bold uppercase tracking-wider">
            Interactive Concept
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Select a Layer</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setActiveLayer('html')}
                  className={`w-full flex items-center p-3 rounded-lg transition-all ${activeLayer === 'html' ? 'bg-orange-100 text-orange-700 border-orange-200 border' : 'bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                    }`}
                >
                  <Code className="w-4 h-4 mr-3" /> HTML (Structure)
                </button>
                <button
                  onClick={() => setActiveLayer('css')}
                  className={`w-full flex items-center p-3 rounded-lg transition-all ${activeLayer === 'css' ? 'bg-blue-100 text-blue-700 border-blue-200 border' : 'bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                    }`}
                >
                  <Zap className="w-4 h-4 mr-3" /> CSS (Style)
                </button>
                <button
                  onClick={() => setActiveLayer('js')}
                  className={`w-full flex items-center p-3 rounded-lg transition-all ${activeLayer === 'js' ? 'bg-yellow-100 text-yellow-700 border-yellow-200 border' : 'bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                    }`}
                >
                  <MousePointer className="w-4 h-4 mr-3" /> JavaScript (Behavior)
                </button>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-xl border border-yellow-100 dark:border-yellow-800/30">
              <p className="text-sm text-yellow-800 dark:text-yellow-300">
                {activeLayer === 'html' && "HTML provides the skeleton. It's just static content."}
                {activeLayer === 'css' && "CSS adds the skin. It makes the skeleton look good."}
                {activeLayer === 'js' && "JavaScript adds the brain and muscles. It makes the page move and react."}
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 min-h-[300px] flex items-center justify-center relative overflow-hidden">
              <div className="text-center">
                {/* Visual Representation */}
                <div className={`transition-all duration-500 transform ${activeLayer === 'js' ? 'scale-110' : 'scale-100'}`}>
                  {activeLayer === 'html' && (
                    <div className="border-4 border-gray-400 p-8 rounded bg-gray-200 text-gray-500 font-mono">
                      &lt;BUTTON&gt;
                    </div>
                  )}
                  {activeLayer === 'css' && (
                    <div className="bg-blue-500 text-white px-8 py-4 rounded-full shadow-lg font-bold">
                      Styled Button
                    </div>
                  )}
                  {activeLayer === 'js' && (
                    <button
                      onClick={handleDemoClick}
                      className={`${demoColor} text-white px-8 py-4 rounded-full shadow-lg font-bold transform transition-all active:scale-95 hover:shadow-xl cursor-pointer animate-bounce`}
                    >
                      {demoText}
                    </button>
                  )}
                </div>
                {activeLayer === 'js' && <p className="mt-8 text-sm text-gray-500 animate-pulse">Try clicking the button above!</p>}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Output Studio */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Terminal className="w-6 h-6 mr-2 text-yellow-500" />
            Output Studio
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Trigger Outputs</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <code className="text-sm font-mono text-gray-700 dark:text-gray-300">alert("Hello")</code>
                <button onClick={() => runOutputDemo('alert')} className="px-3 py-1 bg-indigo-600 text-white text-xs rounded hover:bg-indigo-700">Run</button>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <code className="text-sm font-mono text-gray-700 dark:text-gray-300">console.log("Hello")</code>
                <button onClick={() => runOutputDemo('console')} className="px-3 py-1 bg-indigo-600 text-white text-xs rounded hover:bg-indigo-700">Run</button>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <code className="text-sm font-mono text-gray-700 dark:text-gray-300">innerHTML = "Hello"</code>
                <button onClick={() => runOutputDemo('document')} className="px-3 py-1 bg-indigo-600 text-white text-xs rounded hover:bg-indigo-700">Run</button>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl shadow-inner border border-gray-800 font-mono text-sm h-64 overflow-y-auto">
            <div className="flex items-center text-gray-500 mb-2 border-b border-gray-800 pb-2">
              <Terminal className="w-4 h-4 mr-2" /> Console Output
            </div>
            {consoleOutput.length === 0 ? (
              <span className="text-gray-600 italic">// Waiting for input...</span>
            ) : (
              consoleOutput.map((log, index) => (
                <div key={index} className="text-green-400 mb-1">{log}</div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Core Concepts Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          Why JavaScript?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Client-Side</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Runs directly in the user's browser. Fast, immediate feedback without reloading the page.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-3">
                <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Event-Driven</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Reacts to user actions like clicks, mouse movements, key presses, and more.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg mr-3">
                <Database className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Versatile</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Used for everything from simple animations to complex web apps, games, and even backend servers (Node.js).
            </p>
          </div>
        </div>
      </section>

      {/* Integration Methods */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">How to Add JavaScript</h2>

        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">1. External (Recommended)</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Keep your code clean by separating it into a different file.</p>
            <CodeSnippetBlock codeSnippet={`<script src="script.js"></script>`} title="HTML" />
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">2. Internal</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Good for small scripts specific to a single page.</p>
            <CodeSnippetBlock codeSnippet={`<script>
  console.log("Hello JavaScript");
</script>`} title="HTML" />
          </div>
        </div>
      </section>

    </div>
  );
};

export default JsHome;