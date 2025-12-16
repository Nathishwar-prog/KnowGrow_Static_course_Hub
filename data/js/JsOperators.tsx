import React, { useState } from 'react';
import { Calculator, Scale, GitMerge, Check, Copy, Play, Terminal, ArrowRight, Divide, Percent, Plus, Minus, X } from 'lucide-react';

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

const JsOperators = () => {
  const [activeTab, setActiveTab] = useState('arithmetic'); // arithmetic, comparison, logical, ternary
  const [consoleOutput, setConsoleOutput] = useState([]);

  const runDemo = (type) => {
    setConsoleOutput([]);

    switch (type) {
      case 'arithmetic':
        setConsoleOutput([
          `> let a = 10, b = 3;`,
          `> a + b // ${10 + 3}`,
          `> a % b // ${10 % 3} (Remainder)`,
          `> a ** b // ${10 ** 3} (Exponentiation)`
        ]);
        break;
      case 'comparison':
        setConsoleOutput([
          `> let x = 5;`,
          `> x == "5" // true (Value check)`,
          `> x === "5" // false (Type check)`,
          `> x !== 5 // false`
        ]);
        break;
      case 'logical':
        setConsoleOutput([
          `> let age = 20;`,
          `> age > 18 && age < 30 // true (AND)`,
          `> age < 18 || age > 60 // false (OR)`,
          `> !true // false (NOT)`
        ]);
        break;
      case 'ternary':
        setConsoleOutput([
          `> let age = 15;`,
          `> let status = (age >= 18) ? "Adult" : "Minor";`,
          `> Output: "Minor"`
        ]);
        break;
      default:
        break;
    }
  };

  const getOperatorData = () => {
    switch (activeTab) {
      case 'arithmetic':
        return {
          title: 'Arithmetic',
          description: 'Perform mathematical calculations like addition, subtraction, multiplication, division, and modulus.',
          code: `let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a % b); // 1 (Remainder)
a++; // Increment`
        };
      case 'comparison':
        return {
          title: 'Comparison',
          description: 'Compare values. Always prefer === (strict equality) over == to avoid type coercion bugs.',
          code: `let x = 5;

console.log(x == "5");  // true (Loose)
console.log(x === "5"); // false (Strict)
console.log(x > 3);     // true`
        };
      case 'logical':
        return {
          title: 'Logical',
          description: 'Combine multiple conditions. && (AND), || (OR), ! (NOT).',
          code: `let age = 25;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("Allowed");
}`
        };
      case 'ternary':
        return {
          title: 'Ternary',
          description: 'A shorthand for if...else statements. Syntax: condition ? trueValue : falseValue',
          code: `let age = 20;
let type = (age >= 18) ? "Adult" : "Minor";`
        };
      default:
        return {};
    }
  };

  const data = getOperatorData();

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-yellow-50 dark:from-gray-900 dark:to-gray-900 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl mb-4">
          <Calculator className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          JavaScript Operators
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Perform calculations, make comparisons, and control logic with powerful symbols.
        </p>
      </header>

      {/* Interactive Operator Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Terminal className="w-6 h-6 mr-2 text-yellow-500" />
            Operator Lab
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
                Operator Types
              </h3>

              <div className="space-y-3">
                <button
                  onClick={() => setActiveTab('arithmetic')}
                  className={`w-full flex items-center p-4 rounded-xl border-2 transition-all duration-200 ${activeTab === 'arithmetic'
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700'
                    }`}
                >
                  <div className={`p-2 rounded-lg mr-4 ${activeTab === 'arithmetic' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
                    <Plus className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900 dark:text-white">Arithmetic</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Math Operations</div>
                  </div>
                </button>

                <button
                  onClick={() => setActiveTab('comparison')}
                  className={`w-full flex items-center p-4 rounded-xl border-2 transition-all duration-200 ${activeTab === 'comparison'
                      ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700'
                    }`}
                >
                  <div className={`p-2 rounded-lg mr-4 ${activeTab === 'comparison' ? 'bg-purple-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
                    <Scale className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900 dark:text-white">Comparison</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">True / False</div>
                  </div>
                </button>

                <button
                  onClick={() => setActiveTab('logical')}
                  className={`w-full flex items-center p-4 rounded-xl border-2 transition-all duration-200 ${activeTab === 'logical'
                      ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-700'
                    }`}
                >
                  <div className={`p-2 rounded-lg mr-4 ${activeTab === 'logical' ? 'bg-green-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
                    <GitMerge className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900 dark:text-white">Logical</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">AND, OR, NOT</div>
                  </div>
                </button>

                <button
                  onClick={() => setActiveTab('ternary')}
                  className={`w-full flex items-center p-4 rounded-xl border-2 transition-all duration-200 ${activeTab === 'ternary'
                      ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-yellow-300 dark:hover:border-yellow-700'
                    }`}
                >
                  <div className={`p-2 rounded-lg mr-4 ${activeTab === 'ternary' ? 'bg-yellow-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
                    <ArrowRight className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900 dark:text-white">Ternary</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Short Condition</div>
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
                    <Play className="w-4 h-4 mr-2" /> Calculate
                  </button>
                </div>

                {/* Console Output Simulator */}
                <div className="bg-black rounded-lg border border-gray-800 p-4 font-mono text-sm h-48 overflow-y-auto shadow-inner flex-1">
                  <div className="text-gray-500 border-b border-gray-800 pb-1 mb-2">Console Output</div>
                  {consoleOutput.length === 0 ? (
                    <span className="text-gray-600 italic">Ready to execute...</span>
                  ) : (
                    consoleOutput.map((line, i) => (
                      <div key={i} className={`mb-1 animate-fade-in ${line.includes('true') ? 'text-green-400' :
                          line.includes('false') ? 'text-red-400' :
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

      {/* Comparison Table */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          Equality: == vs ===
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="bg-red-100 text-red-600 px-2 py-1 rounded mr-2 text-sm">==</span> Loose Equality
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Checks value ONLY. Performs type conversion automatically (can lead to bugs).
            </p>
            <div className="bg-gray-100 dark:bg-gray-900 p-3 rounded font-mono text-xs">
              5 == "5" // true<br />
              1 == true // true
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border-2 border-green-500 dark:border-green-600 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-bl">Best Practice</div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="bg-green-100 text-green-600 px-2 py-1 rounded mr-2 text-sm">===</span> Strict Equality
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Checks BOTH value and type. No type conversion. Always use this.
            </p>
            <div className="bg-gray-100 dark:bg-gray-900 p-3 rounded font-mono text-xs">
              5 === "5" // false<br />
              1 === true // false
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default JsOperators;