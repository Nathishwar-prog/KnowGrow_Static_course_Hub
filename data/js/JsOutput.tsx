import React, { useState, useRef } from 'react';
import { Terminal, Monitor, AlertCircle, FileText, Check, Copy, Play, Trash2, Code } from 'lucide-react';

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

const JsOutput = () => {
  const [activeMethod, setActiveMethod] = useState('innerhtml'); // innerhtml, documentwrite, windowalert, consolelog
  const [consoleLogs, setConsoleLogs] = useState([]);
  const [pageContent, setPageContent] = useState('Initial Page Content');
  const [documentWriteTriggered, setDocumentWriteTriggered] = useState(false);

  const runDemo = (method) => {
    const timestamp = new Date().toLocaleTimeString();

    switch (method) {
      case 'innerhtml':
        setPageContent(`Updated via innerHTML at ${timestamp}`);
        break;
      case 'documentwrite':
        setDocumentWriteTriggered(true);
        break;
      case 'windowalert':
        alert(`Hello! This is an alert box triggered at ${timestamp}`);
        break;
      case 'consolelog':
        setConsoleLogs(prev => [...prev, { type: 'log', msg: `Log entry at ${timestamp}` }]);
        break;
      case 'consolewarn':
        setConsoleLogs(prev => [...prev, { type: 'warn', msg: `Warning entry at ${timestamp}` }]);
        break;
      case 'consoleerror':
        setConsoleLogs(prev => [...prev, { type: 'error', msg: `Error entry at ${timestamp}` }]);
        break;
      default:
        break;
    }
  };

  const resetDemo = () => {
    setPageContent('Initial Page Content');
    setDocumentWriteTriggered(false);
    setConsoleLogs([]);
  };

  const getMethodData = () => {
    switch (activeMethod) {
      case 'innerhtml':
        return {
          title: 'innerHTML',
          description: 'The standard way to modify HTML content. Safe, flexible, and widely used.',
          code: `document.getElementById("demo").innerHTML = "Hello JavaScript";`
        };
      case 'documentwrite':
        return {
          title: 'document.write()',
          description: 'Writes directly to the document stream. WARNING: Using this after the page has loaded will overwrite the entire page!',
          code: `document.write("Hello JavaScript");`
        };
      case 'windowalert':
        return {
          title: 'window.alert()',
          description: 'Displays a popup box. Pauses script execution until the user clicks OK. Good for simple notifications.',
          code: `alert("Hello JavaScript");`
        };
      case 'consolelog':
        return {
          title: 'console.log()',
          description: 'Writes to the browser console. Essential for debugging and logging data without affecting the UI.',
          code: `console.log("Hello JavaScript");`
        };
      default:
        return {};
    }
  };

  const methodData = getMethodData();

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-yellow-50 dark:from-gray-900 dark:to-gray-900 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl mb-4">
          <Monitor className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          JavaScript Output
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Display data to your users. From simple alerts to complex DOM manipulation.
        </p>
      </header>

      {/* Interactive Output Studio */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Terminal className="w-6 h-6 mr-2 text-yellow-500" />
            Output Studio
          </h2>
          <button
            onClick={resetDemo}
            className="flex items-center px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
          >
            <Trash2 className="w-3 h-3 mr-1" /> Reset All
          </button>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Controls */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-100 dark:border-gray-700">
                Choose Method
              </h3>

              <div className="space-y-3">
                <button
                  onClick={() => setActiveMethod('innerhtml')}
                  className={`w-full flex items-center p-4 rounded-xl border-2 transition-all duration-200 ${activeMethod === 'innerhtml'
                      ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-yellow-300 dark:hover:border-yellow-700'
                    }`}
                >
                  <div className={`p-2 rounded-lg mr-4 ${activeMethod === 'innerhtml' ? 'bg-yellow-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
                    <Code className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900 dark:text-white">innerHTML</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Modify Elements</div>
                  </div>
                </button>

                <button
                  onClick={() => setActiveMethod('documentwrite')}
                  className={`w-full flex items-center p-4 rounded-xl border-2 transition-all duration-200 ${activeMethod === 'documentwrite'
                      ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-700'
                    }`}
                >
                  <div className={`p-2 rounded-lg mr-4 ${activeMethod === 'documentwrite' ? 'bg-red-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
                    <FileText className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900 dark:text-white">document.write()</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Direct Stream</div>
                  </div>
                </button>

                <button
                  onClick={() => setActiveMethod('windowalert')}
                  className={`w-full flex items-center p-4 rounded-xl border-2 transition-all duration-200 ${activeMethod === 'windowalert'
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700'
                    }`}
                >
                  <div className={`p-2 rounded-lg mr-4 ${activeMethod === 'windowalert' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
                    <AlertCircle className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900 dark:text-white">window.alert()</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Popup Box</div>
                  </div>
                </button>

                <button
                  onClick={() => setActiveMethod('consolelog')}
                  className={`w-full flex items-center p-4 rounded-xl border-2 transition-all duration-200 ${activeMethod === 'consolelog'
                      ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-700'
                    }`}
                >
                  <div className={`p-2 rounded-lg mr-4 ${activeMethod === 'consolelog' ? 'bg-green-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
                    <Terminal className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900 dark:text-white">console.log()</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Debugging</div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Visualization & Code */}
          <div className="lg:col-span-8 space-y-6">
            {/* Live Preview Area */}
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 min-h-[300px] flex flex-col relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#eab308 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-gray-700 dark:text-gray-300">Browser Preview</h3>
                  <button
                    onClick={() => runDemo(activeMethod)}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-bold text-sm flex items-center transition-colors shadow-md"
                  >
                    <Play className="w-4 h-4 mr-2" /> Run {methodData.title}
                  </button>
                </div>

                {/* Simulated Browser Window */}
                <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600 flex-1 flex flex-col">
                  {/* Browser Bar */}
                  <div className="bg-gray-200 dark:bg-gray-700 p-2 flex items-center space-x-2 border-b border-gray-300 dark:border-gray-600">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    <div className="flex-1 bg-white dark:bg-gray-600 rounded px-2 py-0.5 text-xs text-gray-500 dark:text-gray-300 text-center">
                      localhost:3000
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 flex-1 relative">
                    {documentWriteTriggered ? (
                      <div className="absolute inset-0 bg-white dark:bg-gray-800 p-6 flex items-center justify-center text-xl font-mono animate-fade-in">
                        Hello JavaScript
                      </div>
                    ) : (
                      <>
                        <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">My Web Page</h1>
                        <div id="demo" className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded text-gray-800 dark:text-gray-200 transition-all duration-300">
                          {pageContent}
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Console Panel (Only visible for console.log) */}
                {activeMethod === 'consolelog' && (
                  <div className="mt-4 bg-black rounded-lg border border-gray-800 p-4 font-mono text-xs h-32 overflow-y-auto shadow-inner">
                    <div className="text-gray-500 border-b border-gray-800 pb-1 mb-2 flex justify-between">
                      <span>Console</span>
                      <div className="space-x-2">
                        <button onClick={() => runDemo('consolewarn')} className="text-yellow-500 hover:text-yellow-400">Warn</button>
                        <button onClick={() => runDemo('consoleerror')} className="text-red-500 hover:text-red-400">Error</button>
                      </div>
                    </div>
                    {consoleLogs.length === 0 ? (
                      <span className="text-gray-600 italic">No logs yet...</span>
                    ) : (
                      consoleLogs.map((log, i) => (
                        <div key={i} className={`mb-1 ${log.type === 'error' ? 'text-red-500 bg-red-900/20' :
                            log.type === 'warn' ? 'text-yellow-500 bg-yellow-900/20' :
                              'text-green-400'
                          }`}>
                          {log.type === 'error' ? '❌ ' : log.type === 'warn' ? '⚠️ ' : '> '}
                          {log.msg}
                        </div>
                      ))
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Generated Code */}
            <CodeSnippetBlock codeSnippet={methodData.code} title={`${methodData.title} Syntax`} />
          </div>
        </div>
      </section>

      {/* Comparison Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          Method Comparison
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">innerHTML</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">Best for modifying specific elements.</p>
            <div className="flex items-center text-green-600 text-sm font-bold"><Check className="w-4 h-4 mr-1" /> Safe & Flexible</div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">document.write()</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">Only for testing.</p>
            <div className="flex items-center text-red-600 text-sm font-bold"><AlertCircle className="w-4 h-4 mr-1" /> Overwrites Page</div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">window.alert()</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">For urgent messages.</p>
            <div className="flex items-center text-yellow-600 text-sm font-bold"><AlertCircle className="w-4 h-4 mr-1" /> Blocks Execution</div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">console.log()</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">For developers.</p>
            <div className="flex items-center text-blue-600 text-sm font-bold"><Check className="w-4 h-4 mr-1" /> Best for Debugging</div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default JsOutput;