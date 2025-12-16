import React, { useState } from 'react';
import { Box, Lock, RefreshCw, Check, Copy, Play, Terminal, AlertTriangle, Shield, Layers } from 'lucide-react';

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

const JsVariables = () => {
  const [activeType, setActiveType] = useState('let'); // var, let, const
  const [consoleOutput, setConsoleOutput] = useState([]);

  const runDemo = (type) => {
    setConsoleOutput([]);

    if (type === 'var') {
      setConsoleOutput([
        `> var name = "Hari";`,
        `> var name = "JavaScript"; // Redeclaring is allowed`,
        `> Output: "JavaScript"`,
        `> ⚠️ Warning: 'var' has function scope and can lead to bugs.`
      ]);
    } else if (type === 'let') {
      setConsoleOutput([
        `> let score = 50;`,
        `> score = 80; // Updating is allowed`,
        `> Output: 80`,
        `> let score = 90; // ❌ Error: Identifier 'score' has already been declared`
      ]);
    } else if (type === 'const') {
      setConsoleOutput([
        `> const pi = 3.14;`,
        `> pi = 3.14159; // ❌ Error: Assignment to constant variable.`,
        `> Output: Error`
      ]);
    }
  };

  const getVariableData = () => {
    switch (activeType) {
      case 'var':
        return {
          title: 'var (The Old Way)',
          description: 'Function-scoped. Can be redeclared and updated. Avoid using in modern code.',
          code: `var x = 10;
var x = 20; // Allowed (but bad practice)
console.log(x); // 20`
        };
      case 'let':
        return {
          title: 'let (The Modern Way)',
          description: 'Block-scoped. Can be updated but NOT redeclared in the same scope. Preferred for changing values.',
          code: `let score = 10;
score = 20; // Allowed
// let score = 30; // Error!`
        };
      case 'const':
        return {
          title: 'const (Constant)',
          description: 'Block-scoped. Cannot be updated or redeclared. Use for values that should never change.',
          code: `const PI = 3.14;
// PI = 3.15; // Error!
// const PI = 3.14159; // Error!`
        };
      default:
        return {};
    }
  };

  const data = getVariableData();

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-yellow-50 dark:from-gray-900 dark:to-gray-900 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl mb-4">
          <Box className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          JavaScript Variables
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Containers for storing data. Learn when to use <code className="text-yellow-600 dark:text-yellow-400 font-bold">let</code>, <code className="text-yellow-600 dark:text-yellow-400 font-bold">const</code>, and why to avoid <code className="text-red-500 font-bold">var</code>.
        </p>
      </header>

      {/* Interactive Variable Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Terminal className="w-6 h-6 mr-2 text-yellow-500" />
            Variable Lab
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
                Declaration Types
              </h3>

              <div className="space-y-3">
                <button
                  onClick={() => setActiveType('let')}
                  className={`w-full flex items-center p-4 rounded-xl border-2 transition-all duration-200 ${activeType === 'let'
                      ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-700'
                    }`}
                >
                  <div className={`p-2 rounded-lg mr-4 ${activeType === 'let' ? 'bg-green-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
                    <RefreshCw className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900 dark:text-white">let</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Reassignable</div>
                  </div>
                </button>

                <button
                  onClick={() => setActiveType('const')}
                  className={`w-full flex items-center p-4 rounded-xl border-2 transition-all duration-200 ${activeType === 'const'
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700'
                    }`}
                >
                  <div className={`p-2 rounded-lg mr-4 ${activeType === 'const' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
                    <Lock className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900 dark:text-white">const</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Constant</div>
                  </div>
                </button>

                <button
                  onClick={() => setActiveType('var')}
                  className={`w-full flex items-center p-4 rounded-xl border-2 transition-all duration-200 ${activeType === 'var'
                      ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-700'
                    }`}
                >
                  <div className={`p-2 rounded-lg mr-4 ${activeType === 'var' ? 'bg-red-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900 dark:text-white">var</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Deprecated</div>
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
                  <h3 className="font-bold text-gray-700 dark:text-gray-300">{data.title} Demo</h3>
                  <button
                    onClick={() => runDemo(activeType)}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-bold text-sm flex items-center transition-colors shadow-md"
                  >
                    <Play className="w-4 h-4 mr-2" /> Test Behavior
                  </button>
                </div>

                {/* Console Output Simulator */}
                <div className="bg-black rounded-lg border border-gray-800 p-4 font-mono text-sm h-48 overflow-y-auto shadow-inner flex-1">
                  <div className="text-gray-500 border-b border-gray-800 pb-1 mb-2">Console Output</div>
                  {consoleOutput.length === 0 ? (
                    <span className="text-gray-600 italic">Ready to test...</span>
                  ) : (
                    consoleOutput.map((line, i) => (
                      <div key={i} className={`mb-1 animate-fade-in ${line.includes('Error') ? 'text-red-500' :
                          line.includes('Warning') ? 'text-yellow-500' :
                            'text-green-400'
                        }`}>
                        {line}
                      </div>
                    ))
                  )}
                </div>

                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 italic">
                  {data.description}
                </p>
              </div>
            </div>

            {/* Generated Code */}
            <CodeSnippetBlock codeSnippet={data.code} title={`${data.title} Syntax`} />
          </div>
        </div>
      </section>

      {/* Scope & Rules Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          Scope & Rules
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Scope Visualizer */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-3">
                <Layers className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Block Scope</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Variables declared with <code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">let</code> and <code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">const</code> inside <code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">{`{ }`}</code> cannot be accessed from outside.
            </p>
            <CodeSnippetBlock
              title="Scope Example"
              codeSnippet={`if (true) {
  let x = 10; // Only exists inside here
}
// console.log(x); // Error: x is not defined`}
            />
          </div>

          {/* Naming Rules */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Naming Rules</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" /> Start with letter, _, or $</li>
              <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" /> Case-sensitive (myVar ≠ MyVar)</li>
              <li className="flex items-center"><AlertTriangle className="w-4 h-4 text-red-500 mr-2" /> No numbers at start (1name)</li>
              <li className="flex items-center"><AlertTriangle className="w-4 h-4 text-red-500 mr-2" /> No spaces (my name)</li>
            </ul>
          </div>

        </div>
      </section>

    </div>
  );
};

export default JsVariables;