import React, { useState } from 'react';
import { RefreshCw, Shield, AlertTriangle, Layers, Check, Copy, Play, Terminal, Box, ArrowUp } from 'lucide-react';

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

const JsLet = () => {
  const [activeTab, setActiveTab] = useState('scope'); // scope, redeclare, hoisting
  const [consoleOutput, setConsoleOutput] = useState([]);

  const runDemo = (type) => {
    setConsoleOutput([]);

    switch (type) {
      case 'scope':
        setConsoleOutput([
          `> if (true) {`,
          `>   let x = 10;`,
          `>   console.log(x); // 10`,
          `> }`,
          `> console.log(x); // ❌ ReferenceError: x is not defined`
        ]);
        break;
      case 'redeclare':
        setConsoleOutput([
          `> let x = 10;`,
          `> let x = 20; // ❌ SyntaxError: Identifier 'x' has already been declared`,
          `> // But updating is fine:`,
          `> x = 20; // ✅ Works`
        ]);
        break;
      case 'hoisting':
        setConsoleOutput([
          `> console.log(a); // ❌ ReferenceError: Cannot access 'a' before initialization`,
          `> let a = 10;`,
          `> // This is the Temporal Dead Zone (TDZ)`
        ]);
        break;
      default:
        break;
    }
  };

  const getLetData = () => {
    switch (activeTab) {
      case 'scope':
        return {
          title: 'Block Scope',
          description: 'Variables declared with let are only accessible within the block { } they are defined in.',
          code: `if (true) {
  let x = 10;
  console.log(x); // 10
}
// console.log(x); // Error!`
        };
      case 'redeclare':
        return {
          title: 'No Redeclaration',
          description: 'You cannot declare the same variable twice in the same scope using let.',
          code: `let x = 10;
// let x = 20; // Error!

// Updating is allowed:
x = 20; // OK`
        };
      case 'hoisting':
        return {
          title: 'Hoisting & TDZ',
          description: 'let is hoisted but not initialized. Accessing it before declaration throws an error (Temporal Dead Zone).',
          code: `// console.log(x); // Error!
let x = 5;`
        };
      default:
        return {};
    }
  };

  const data = getLetData();

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-yellow-50 dark:from-gray-900 dark:to-gray-900 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl mb-4">
          <RefreshCw className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          JavaScript Let
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          The modern standard for variables. Block-scoped, safe, and flexible.
        </p>
      </header>

      {/* Interactive Let Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Terminal className="w-6 h-6 mr-2 text-yellow-500" />
            Let Lab
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
                Explore Features
              </h3>

              <div className="space-y-3">
                <button
                  onClick={() => setActiveTab('scope')}
                  className={`w-full flex items-center p-4 rounded-xl border-2 transition-all duration-200 ${activeTab === 'scope'
                      ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700'
                    }`}
                >
                  <div className={`p-2 rounded-lg mr-4 ${activeTab === 'scope' ? 'bg-purple-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
                    <Box className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900 dark:text-white">Block Scope</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Private to {`{ }`}</div>
                  </div>
                </button>

                <button
                  onClick={() => setActiveTab('redeclare')}
                  className={`w-full flex items-center p-4 rounded-xl border-2 transition-all duration-200 ${activeTab === 'redeclare'
                      ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-700'
                    }`}
                >
                  <div className={`p-2 rounded-lg mr-4 ${activeTab === 'redeclare' ? 'bg-red-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900 dark:text-white">Redeclaration</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Not Allowed</div>
                  </div>
                </button>

                <button
                  onClick={() => setActiveTab('hoisting')}
                  className={`w-full flex items-center p-4 rounded-xl border-2 transition-all duration-200 ${activeTab === 'hoisting'
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700'
                    }`}
                >
                  <div className={`p-2 rounded-lg mr-4 ${activeTab === 'hoisting' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
                    <ArrowUp className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900 dark:text-white">Hoisting</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Temporal Dead Zone</div>
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
                    onClick={() => runDemo(activeTab)}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-bold text-sm flex items-center transition-colors shadow-md"
                  >
                    <Play className="w-4 h-4 mr-2" /> Execute
                  </button>
                </div>

                {/* Console Output Simulator */}
                <div className="bg-black rounded-lg border border-gray-800 p-4 font-mono text-sm h-48 overflow-y-auto shadow-inner flex-1">
                  <div className="text-gray-500 border-b border-gray-800 pb-1 mb-2">Console Output</div>
                  {consoleOutput.length === 0 ? (
                    <span className="text-gray-600 italic">Ready to execute...</span>
                  ) : (
                    consoleOutput.map((line, i) => (
                      <div key={i} className={`mb-1 animate-fade-in ${line.includes('Error') ? 'text-red-500' :
                          line.includes('//') ? 'text-gray-500' :
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

      {/* Comparison Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          let vs var
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {/* let */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border-2 border-green-500 dark:border-green-600 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-bl">Recommended</div>
            <div className="flex items-center mb-4">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg mr-3">
                <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Using let</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 mb-4">
              <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" /> Block Scoped</li>
              <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" /> No Redeclaration</li>
              <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" /> Safer Code</li>
            </ul>
            <CodeSnippetBlock
              title="let Example"
              codeSnippet={`if (true) {
  let x = 10;
}
// console.log(x); // Error`}
            />
          </div>

          {/* var */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg mr-3">
                <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Using var</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 mb-4">
              <li className="flex items-center"><AlertTriangle className="w-4 h-4 text-red-500 mr-2" /> Function Scoped</li>
              <li className="flex items-center"><AlertTriangle className="w-4 h-4 text-red-500 mr-2" /> Allows Redeclaration</li>
              <li className="flex items-center"><AlertTriangle className="w-4 h-4 text-red-500 mr-2" /> Prone to Bugs</li>
            </ul>
            <CodeSnippetBlock
              title="var Example"
              codeSnippet={`if (true) {
  var x = 10;
}
console.log(x); // 10 (Leaked!)`}
            />
          </div>

        </div>
      </section>

      {/* Best Practices */}
      <section className="max-w-4xl mx-auto mb-16">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800/30 flex items-start">
          <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-blue-900 dark:text-blue-300 mb-2">Best Practices</h3>
            <ul className="list-disc list-inside text-sm text-blue-800 dark:text-blue-200 space-y-1">
              <li>Always prefer <strong>let</strong> over <strong>var</strong>.</li>
              <li>Use <strong>const</strong> if the value will not change.</li>
              <li>Keep variables scoped as narrowly as possible (inside blocks).</li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
};

export default JsLet;