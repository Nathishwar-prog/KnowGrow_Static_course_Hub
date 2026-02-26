import React, { useState } from 'react';
import { MessageSquare, Check, Copy, Play, Terminal, Eye, EyeOff, AlertCircle, FileText } from 'lucide-react';

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

const JsComments = () => {
  const [activeTab, setActiveTab] = useState('single'); // single, multi, debug
  const [isCodeActive, setIsCodeActive] = useState(true);
  const [consoleOutput, setConsoleOutput] = useState([]);

  const runDemo = (type) => {
    setConsoleOutput([]);
    const timestamp = new Date().toLocaleTimeString();

    if (type === 'single') {
      setConsoleOutput([
        `> // This line is ignored`,
        `> let x = 5; // x is 5`,
        `> Output: 5`
      ]);
    } else if (type === 'multi') {
      setConsoleOutput([
        `> /* Multi-line comment`,
        `>    is completely ignored */`,
        `> let y = 10;`,
        `> Output: 10`
      ]);
    } else if (type === 'debug') {
      if (isCodeActive) {
        setConsoleOutput([
          `> console.log("Code is running!");`,
          `> Output: "Code is running!"`
        ]);
      } else {
        setConsoleOutput([
          `> // console.log("Code is running!");`,
          `> (No Output - Code Commented Out)`
        ]);
      }
    }
  };

  const getCommentData = () => {
    switch (activeTab) {
      case 'single':
        return {
          title: 'Single-Line Comments',
          description: 'Use // to comment out everything after it on the same line. Great for short notes.',
          code: `// This is a comment
let x = 5; // This is also a comment`
        };
      case 'multi':
        return {
          title: 'Multi-Line Comments',
          description: 'Use /* and */ to wrap comments that span multiple lines. Perfect for detailed explanations.',
          code: `/*
  This is a multi-line comment.
  It can span as many lines as needed.
*/
let y = 10;`
        };
      case 'debug':
        return {
          title: 'Debugging',
          description: 'Temporarily disable code by commenting it out instead of deleting it.',
          code: `// console.log("This won't run");
console.log("This will run");`
        };
      default:
        return {};
    }
  };

  const data = getCommentData();

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-yellow-50 dark:from-gray-900 dark:to-gray-900 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl mb-4">
          <MessageSquare className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          JavaScript Comments
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          The silent heroes of code. Explain your logic, document your work, and debug with ease.
        </p>
      </header>

      {/* Interactive Comment Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Terminal className="w-6 h-6 mr-2 text-yellow-500" />
            Comment Lab
          </h2>
          <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-bold uppercase tracking-wider">
            Interactive
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Controls */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-100 dark:border-gray-700">
                Comment Types
              </h3>

              <div className="space-y-3">
                <button
                  onClick={() => setActiveTab('single')}
                  className={`w-full flex items-center p-4 rounded-xl border-2 transition-all duration-200 ${activeTab === 'single'
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700'
                    }`}
                >
                  <div className={`p-2 rounded-lg mr-4 ${activeTab === 'single' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
                    <div className="font-mono text-xs font-bold">//</div>
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900 dark:text-white">Single-Line</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Short Notes</div>
                  </div>
                </button>

                <button
                  onClick={() => setActiveTab('multi')}
                  className={`w-full flex items-center p-4 rounded-xl border-2 transition-all duration-200 ${activeTab === 'multi'
                      ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700'
                    }`}
                >
                  <div className={`p-2 rounded-lg mr-4 ${activeTab === 'multi' ? 'bg-purple-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
                    <div className="font-mono text-xs font-bold">/* */</div>
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900 dark:text-white">Multi-Line</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Documentation</div>
                  </div>
                </button>

                <button
                  onClick={() => setActiveTab('debug')}
                  className={`w-full flex items-center p-4 rounded-xl border-2 transition-all duration-200 ${activeTab === 'debug'
                      ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-700'
                    }`}
                >
                  <div className={`p-2 rounded-lg mr-4 ${activeTab === 'debug' ? 'bg-red-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
                    <EyeOff className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900 dark:text-white">Debugging</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Disable Code</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Debug Toggle (Only for Debug Mode) */}
            {activeTab === 'debug' && (
              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-800/30">
                <h3 className="font-bold text-red-900 dark:text-red-300 mb-4">Toggle Comments</h3>
                <button
                  onClick={() => setIsCodeActive(!isCodeActive)}
                  className={`w-full py-3 rounded-lg font-bold transition-all flex items-center justify-center ${isCodeActive
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-gray-500 text-white hover:bg-gray-600'
                    }`}
                >
                  {isCodeActive ? <Eye className="w-4 h-4 mr-2" /> : <EyeOff className="w-4 h-4 mr-2" />}
                  {isCodeActive ? 'Code Active' : 'Code Commented Out'}
                </button>
              </div>
            )}
          </div>

          {/* Visualization & Code */}
          <div className="lg:col-span-8 space-y-6">
            {/* Live Preview Area */}
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 min-h-[300px] flex flex-col relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#eab308 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-gray-700 dark:text-gray-300">{data.title} Demo</h3>
                  <button
                    onClick={() => runDemo(activeTab)}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-bold text-sm flex items-center transition-colors shadow-md"
                  >
                    <Play className="w-4 h-4 mr-2" /> Execute
                  </button>
                </div>

                {/* Visual Code Representation */}
                <div className="bg-gray-900 rounded-t-lg border border-gray-800 p-4 font-mono text-sm border-b-0">
                  {activeTab === 'single' && (
                    <>
                      <div className="text-gray-500">// This is a comment</div>
                      <div className="text-purple-400">let <span className="text-blue-400">x</span> = <span className="text-green-400">5</span>; <span className="text-gray-500">// Ignored</span></div>
                    </>
                  )}
                  {activeTab === 'multi' && (
                    <>
                      <div className="text-gray-500">/*</div>
                      <div className="text-gray-500 ml-4">Multi-line comment</div>
                      <div className="text-gray-500">*/</div>
                      <div className="text-purple-400">let <span className="text-blue-400">y</span> = <span className="text-green-400">10</span>;</div>
                    </>
                  )}
                  {activeTab === 'debug' && (
                    <div className={!isCodeActive ? 'text-gray-500' : 'text-yellow-300'}>
                      {!isCodeActive && '// '}console.log("Code is running!");
                    </div>
                  )}
                </div>

                {/* Console Output Simulator */}
                <div className="bg-black rounded-b-lg border border-gray-800 p-4 font-mono text-sm h-32 overflow-y-auto shadow-inner flex-1">
                  <div className="text-gray-500 border-b border-gray-800 pb-1 mb-2">Console Output</div>
                  {consoleOutput.length === 0 ? (
                    <span className="text-gray-600 italic">Ready to execute...</span>
                  ) : (
                    consoleOutput.map((line, i) => (
                      <div key={i} className={`mb-1 animate-fade-in ${line.includes('No Output') ? 'text-gray-500 italic' : 'text-green-400'}`}>
                        {line}
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* Generated Code */}
            <CodeSnippetBlock codeSnippet={data.code} title={`${data.title} Syntax`} />
          </div>
        </div>
      </section>

      {/* Best Practices Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          Best Practices
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {/* Be Clear */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg mr-3">
                <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Be Clear</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Explain <strong>why</strong> you did something, not just <strong>what</strong> the code is doing.
            </p>
            <div className="text-xs font-mono bg-gray-100 dark:bg-gray-900 p-2 rounded text-gray-500">
              // Calculate tax (Good)<br />
              // x = y + z (Bad)
            </div>
          </div>

          {/* Don't Over-Comment */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg mr-3">
                <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Avoid Obvious</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Don't state the obvious. Good code should be self-explanatory.
            </p>
            <div className="text-xs font-mono bg-gray-100 dark:bg-gray-900 p-2 rounded text-gray-500">
              let x = 10; // Declaring x (Unnecessary)
            </div>
          </div>

          {/* HTML vs JS */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">HTML vs JS</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Remember the syntax difference!
            </p>
            <div className="text-xs font-mono bg-gray-100 dark:bg-gray-900 p-2 rounded">
              <span className="text-blue-500">&lt;!-- HTML --&gt;</span><br />
              <span className="text-yellow-600 dark:text-yellow-500">// JS Comment</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default JsComments;