import React, { useState } from 'react';
import { List, Check, Copy, Play, Terminal, ArrowRight, GitBranch, Repeat, Box, Code } from 'lucide-react';

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

const JsStatements = () => {
  const [activeType, setActiveType] = useState('declaration'); // declaration, conditional, loop, function
  const [demoOutput, setDemoOutput] = useState([]);

  const runDemo = (type) => {
    setDemoOutput([]); // Clear previous
    const timestamp = new Date().toLocaleTimeString();

    switch (type) {
      case 'declaration':
        setDemoOutput([
          `> let x = 10;`,
          `> const pi = 3.14;`,
          `> Variable 'x' declared with value 10`,
          `> Constant 'pi' declared with value 3.14`
        ]);
        break;
      case 'conditional':
        const age = 20;
        setDemoOutput([
          `> let age = 20;`,
          `> if (age >= 18) { ... }`,
          `> Condition (20 >= 18) is TRUE`,
          `> Output: "Eligible to vote"`
        ]);
        break;
      case 'loop':
        setDemoOutput([
          `> for (let i = 1; i <= 3; i++)`,
          `> Iteration 1: i = 1`,
          `> Iteration 2: i = 2`,
          `> Iteration 3: i = 3`,
          `> Loop finished`
        ]);
        break;
      case 'function':
        setDemoOutput([
          `> function greet() { ... }`,
          `> greet(); // Calling function`,
          `> Executing function body...`,
          `> Output: "Hello JavaScript"`
        ]);
        break;
      default:
        break;
    }
  };

  const getStatementData = () => {
    switch (activeType) {
      case 'declaration':
        return {
          title: 'Declaration Statements',
          description: 'Used to declare variables and constants. They tell the browser to reserve memory for data.',
          code: `let name = "John";
const PI = 3.14;
var age = 25;`
        };
      case 'conditional':
        return {
          title: 'Conditional Statements',
          description: 'Used to perform different actions based on different conditions (decisions).',
          code: `if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}`
        };
      case 'loop':
        return {
          title: 'Looping Statements',
          description: 'Used to repeat a block of code multiple times until a condition is met.',
          code: `for (let i = 0; i < 5; i++) {
  console.log(i);
}`
        };
      case 'function':
        return {
          title: 'Function Statements',
          description: 'Used to define reusable blocks of code that can be called later.',
          code: `function greet(name) {
  return "Hello " + name;
}`
        };
      default:
        return {};
    }
  };

  const data = getStatementData();

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-yellow-50 dark:from-gray-900 dark:to-gray-900 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl mb-4">
          <List className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          JavaScript Statements
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          The building blocks of your code. Instructions that tell the browser what to do.
        </p>
      </header>

      {/* Interactive Statement Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Terminal className="w-6 h-6 mr-2 text-yellow-500" />
            Statement Lab
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
                Statement Types
              </h3>

              <div className="space-y-3">
                <button
                  onClick={() => setActiveType('declaration')}
                  className={`w-full flex items-center p-4 rounded-xl border-2 transition-all duration-200 ${activeType === 'declaration'
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700'
                    }`}
                >
                  <div className={`p-2 rounded-lg mr-4 ${activeType === 'declaration' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
                    <Box className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900 dark:text-white">Declaration</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">let, const, var</div>
                  </div>
                </button>

                <button
                  onClick={() => setActiveType('conditional')}
                  className={`w-full flex items-center p-4 rounded-xl border-2 transition-all duration-200 ${activeType === 'conditional'
                      ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700'
                    }`}
                >
                  <div className={`p-2 rounded-lg mr-4 ${activeType === 'conditional' ? 'bg-purple-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
                    <GitBranch className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900 dark:text-white">Conditional</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">if, else, switch</div>
                  </div>
                </button>

                <button
                  onClick={() => setActiveType('loop')}
                  className={`w-full flex items-center p-4 rounded-xl border-2 transition-all duration-200 ${activeType === 'loop'
                      ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-700'
                    }`}
                >
                  <div className={`p-2 rounded-lg mr-4 ${activeType === 'loop' ? 'bg-green-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
                    <Repeat className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900 dark:text-white">Looping</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">for, while</div>
                  </div>
                </button>

                <button
                  onClick={() => setActiveType('function')}
                  className={`w-full flex items-center p-4 rounded-xl border-2 transition-all duration-200 ${activeType === 'function'
                      ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-yellow-300 dark:hover:border-yellow-700'
                    }`}
                >
                  <div className={`p-2 rounded-lg mr-4 ${activeType === 'function' ? 'bg-yellow-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
                    <Code className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900 dark:text-white">Function</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Reusable Code</div>
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
                    <Play className="w-4 h-4 mr-2" /> Execute
                  </button>
                </div>

                {/* Console Output Simulator */}
                <div className="bg-black rounded-lg border border-gray-800 p-4 font-mono text-sm h-48 overflow-y-auto shadow-inner flex-1">
                  <div className="text-gray-500 border-b border-gray-800 pb-1 mb-2">Console</div>
                  {demoOutput.length === 0 ? (
                    <span className="text-gray-600 italic">Ready to execute...</span>
                  ) : (
                    demoOutput.map((line, i) => (
                      <div key={i} className="mb-1 text-green-400 animate-fade-in">
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

      {/* Additional Concepts Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          Advanced Concepts
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Block Statements */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg mr-3">
                <Box className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Block Statements</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Group multiple statements together using curly braces <code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">{`{ }`}</code>. Essential for functions and loops.
            </p>
            <CodeSnippetBlock
              title="Block Example"
              codeSnippet={`{
  let a = 10;
  let b = 20;
  console.log(a + b);
}`}
            />
          </div>

          {/* Break & Continue */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg mr-3">
                <ArrowRight className="w-5 h-5 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Break & Continue</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Control the flow of loops. <strong className="text-red-500">break</strong> stops the loop completely. <strong className="text-yellow-500">continue</strong> skips the current iteration.
            </p>
            <CodeSnippetBlock
              title="Control Flow"
              codeSnippet={`for (let i = 0; i < 5; i++) {
  if (i === 3) break; // Stops at 3
  console.log(i);
}`}
            />
          </div>

        </div>
      </section>

    </div>
  );
};

export default JsStatements;