import React, { useState } from 'react';
import { Code, Play, Terminal, Check, Copy, ArrowRight, Zap, Settings, Box, RefreshCw } from 'lucide-react';

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

const JsFunctions = () => {
  const [activeTab, setActiveTab] = useState('declaration'); // declaration, expression, arrow
  const [consoleOutput, setConsoleOutput] = useState([]);
  const [param1, setParam1] = useState(5);
  const [param2, setParam2] = useState(3);

  const runDemo = (type) => {
    setConsoleOutput([]);
    let result;
    let code;

    switch (type) {
      case 'declaration':
        result = param1 + param2;
        code = `> function add(a, b) {\n>   return a + b;\n> }\n> add(${param1}, ${param2}) // ${result}`;
        break;
      case 'expression':
        result = param1 * param2;
        code = `> const multiply = function(x, y) {\n>   return x * y;\n> };\n> multiply(${param1}, ${param2}) // ${result}`;
        break;
      case 'arrow':
        result = param1 * param1; // Example: Square
        code = `> const square = (n) => n * n;\n> square(${param1}) // ${result}`;
        break;
      default:
        return;
    }

    setConsoleOutput(code.split('\n'));
  };

  const getFunctionData = () => {
    switch (activeTab) {
      case 'declaration':
        return {
          title: 'Function Declaration',
          description: 'The standard way to define a function. Hoisted (can be called before definition).',
          code: `function add(a, b) {
  return a + b;
}

console.log(add(5, 3)); // 8`
        };
      case 'expression':
        return {
          title: 'Function Expression',
          description: 'A function stored in a variable. Not hoisted (must be defined before use).',
          code: `const multiply = function(x, y) {
  return x * y;
};

console.log(multiply(4, 5)); // 20`
        };
      case 'arrow':
        return {
          title: 'Arrow Function (ES6)',
          description: 'Shorter syntax. Great for simple functions and callbacks.',
          code: `const square = (n) => n * n;

// Multiple parameters:
const sum = (a, b) => a + b;

console.log(square(5)); // 25`
        };
      default:
        return {};
    }
  };

  const data = getFunctionData();

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-yellow-50 dark:from-gray-900 dark:to-gray-900 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl mb-4">
          <Code className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          JavaScript Functions
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Reusable blocks of code. Master declarations, expressions, and modern arrow functions.
        </p>
      </header>

      {/* Interactive Function Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Terminal className="w-6 h-6 mr-2 text-yellow-500" />
            Function Lab
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
                Function Types
              </h3>

              <div className="space-y-3">
                <button
                  onClick={() => setActiveTab('declaration')}
                  className={`w-full flex items-center p-4 rounded-xl border-2 transition-all duration-200 ${activeTab === 'declaration'
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700'
                    }`}
                >
                  <div className={`p-2 rounded-lg mr-4 ${activeTab === 'declaration' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
                    <Box className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900 dark:text-white">Declaration</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Standard & Hoisted</div>
                  </div>
                </button>

                <button
                  onClick={() => setActiveTab('expression')}
                  className={`w-full flex items-center p-4 rounded-xl border-2 transition-all duration-200 ${activeTab === 'expression'
                      ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700'
                    }`}
                >
                  <div className={`p-2 rounded-lg mr-4 ${activeTab === 'expression' ? 'bg-purple-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
                    <Code className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900 dark:text-white">Expression</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Variable Stored</div>
                  </div>
                </button>

                <button
                  onClick={() => setActiveTab('arrow')}
                  className={`w-full flex items-center p-4 rounded-xl border-2 transition-all duration-200 ${activeTab === 'arrow'
                      ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-700'
                    }`}
                >
                  <div className={`p-2 rounded-lg mr-4 ${activeTab === 'arrow' ? 'bg-green-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
                    <Zap className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900 dark:text-white">Arrow Function</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Modern ES6 Syntax</div>
                  </div>
                </button>
              </div>

              {/* Parameter Inputs */}
              <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                <h4 className="font-bold text-gray-900 dark:text-white mb-4 text-sm uppercase">Test Parameters</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Param 1</label>
                    <input
                      type="number"
                      value={param1}
                      onChange={(e) => setParam1(Number(e.target.value))}
                      className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-sm"
                    />
                  </div>
                  {activeTab !== 'arrow' && (
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Param 2</label>
                      <input
                        type="number"
                        value={param2}
                        onChange={(e) => setParam2(Number(e.target.value))}
                        className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-sm"
                      />
                    </div>
                  )}
                </div>
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
                    <Play className="w-4 h-4 mr-2" /> Call Function
                  </button>
                </div>

                {/* Console Output Simulator */}
                <div className="bg-black rounded-lg border border-gray-800 p-4 font-mono text-sm h-48 overflow-y-auto shadow-inner flex-1">
                  <div className="text-gray-500 border-b border-gray-800 pb-1 mb-2">Console Output</div>
                  {consoleOutput.length === 0 ? (
                    <span className="text-gray-600 italic">Ready to execute...</span>
                  ) : (
                    consoleOutput.map((line, i) => (
                      <div key={i} className={`mb-1 animate-fade-in ${line.includes('//') ? 'text-green-400' :
                          'text-yellow-300'
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

      {/* Concepts Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          Core Concepts
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {/* Default Parameters */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                <Settings className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Default Params</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Provide fallback values if arguments are missing.
            </p>
            <CodeSnippetBlock
              title="Default Example"
              codeSnippet={`function greet(name = "Guest") {
  console.log("Hi " + name);
}`}
            />
          </div>

          {/* Return Statement */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-3">
                <ArrowRight className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Return Values</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Functions can send data back to the caller using <code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">return</code>.
            </p>
            <CodeSnippetBlock
              title="Return Example"
              codeSnippet={`function square(x) {
  return x * x;
}`}
            />
          </div>

          {/* IIFE */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg mr-3">
                <RefreshCw className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">IIFE</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Immediately Invoked Function Expressions run as soon as defined.
            </p>
            <CodeSnippetBlock
              title="IIFE Example"
              codeSnippet={`(function() {
  console.log("Runs now!");
})();`}
            />
          </div>

        </div>
      </section>

    </div>
  );
};

export default JsFunctions;