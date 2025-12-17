import React, { useState } from 'react';
import { Scale, Check, X, AlertTriangle, RefreshCw, Copy, Terminal, Zap, ArrowRight, ShieldCheck } from 'lucide-react';

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

const JsComparisons = () => {
  const [valA, setValA] = useState<string | number>(5);
  const [valB, setValB] = useState<string | number>("5");
  const [operator, setOperator] = useState("==");
  const [consoleOutput, setConsoleOutput] = useState([]);

  // Helper to parse input to number if it looks like one, but keep strings if quoted
  const parseInput = (val: string) => {
    if (val === "true") return true;
    if (val === "false") return false;
    if (!isNaN(Number(val)) && val.trim() !== "") return Number(val);
    return val;
  };

  const runComparison = () => {
    // We need to be careful with types here to simulate JS behavior accurately for the user
    // The inputs are strings from the UI, but we want to simulate "5" vs 5.
    // So we'll use a little trick: if the user types a number in the input, we treat it as a number.
    // If they wrap it in quotes, we treat it as a string.

    // Actually, let's simplify for the UI:
    // We will have a type selector for each input to make it explicit and educational.
    // See the render section below.

    let realA = valA;
    let realB = valB;

    let result = false;
    switch (operator) {
      case '==': result = realA == realB; break;
      case '===': result = realA === realB; break;
      case '!=': result = realA != realB; break;
      case '!==': result = realA !== realB; break;
      case '>': result = realA > realB; break;
      case '<': result = realA < realB; break;
      case '>=': result = realA >= realB; break;
      case '<=': result = realA <= realB; break;
    }

    // Format for display
    const formatVal = (v: any) => typeof v === 'string' ? `"${v}"` : String(v);

    setConsoleOutput([
      `> ${formatVal(realA)} ${operator} ${formatVal(realB)}`,
      String(result),
      // Add explanation for strict vs loose
      (operator === '==' && realA != realB && String(realA) == String(realB)) ? "// False because values differ" :
        (operator === '==' && typeof realA !== typeof realB && result) ? "// True (Type conversion happened)" :
          (operator === '===' && typeof realA !== typeof realB && !result && realA == realB) ? "// False (Types are different)" :
            ""
    ]);
  };

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-yellow-50 dark:from-gray-900 dark:to-gray-900 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl mb-4">
          <Scale className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          JS Comparisons
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Understand the difference between <code className="bg-yellow-100 dark:bg-yellow-900/50 px-1 rounded text-yellow-700 dark:text-yellow-300">==</code> and <code className="bg-green-100 dark:bg-green-900/50 px-1 rounded text-green-700 dark:text-green-300">===</code>. Master logical decision making.
        </p>
      </header>

      {/* Interactive Comparison Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Terminal className="w-6 h-6 mr-2 text-yellow-500" />
            Comparison Lab
          </h2>
          <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-bold uppercase tracking-wider">
            Interactive
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Controls */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-100 dark:border-gray-700">
                Compare Values
              </h3>

              <div className="space-y-6">

                {/* Value A Input */}
                <div className="flex items-center space-x-3">
                  <div className="flex-1">
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Value A</label>
                    <div className="flex">
                      <input
                        type="text"
                        value={valA}
                        onChange={(e) => setValA(parseInput(e.target.value))}
                        className="w-full p-3 rounded-l-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 font-mono"
                      />
                      <div className="bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-r-lg flex items-center text-xs font-bold text-gray-500 uppercase">
                        {typeof valA}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Operator Selector */}
                <div className="flex justify-center">
                  <div className="relative w-full">
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1 text-center">Operator</label>
                    <div className="grid grid-cols-4 gap-2">
                      {['==', '===', '!=', '!==', '>', '<', '>=', '<='].map(op => (
                        <button
                          key={op}
                          onClick={() => setOperator(op)}
                          className={`p-2 rounded-lg font-mono font-bold transition-all ${operator === op
                              ? 'bg-blue-500 text-white shadow-md transform scale-105'
                              : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                            }`}
                        >
                          {op}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Value B Input */}
                <div className="flex items-center space-x-3">
                  <div className="flex-1">
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Value B</label>
                    <div className="flex">
                      <input
                        type="text"
                        value={valB}
                        onChange={(e) => setValB(parseInput(e.target.value))}
                        className="w-full p-3 rounded-l-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 font-mono"
                      />
                      <div className="bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-r-lg flex items-center text-xs font-bold text-gray-500 uppercase">
                        {typeof valB}
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={runComparison}
                  className="w-full p-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  Run Comparison
                </button>

              </div>
            </div>
          </div>

          {/* Visualization & Code */}
          <div className="lg:col-span-7 space-y-6">
            {/* Live Preview Area */}
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 min-h-[300px] flex flex-col relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#eab308 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

              <div className="relative z-10 flex-1 flex flex-col justify-center items-center">
                <h3 className="font-bold text-gray-700 dark:text-gray-300 mb-6 uppercase text-xs tracking-wider absolute top-0 left-0">Result Output</h3>

                {consoleOutput.length === 0 ? (
                  <div className="text-center text-gray-500">
                    <Scale className="w-16 h-16 mx-auto mb-4 opacity-20" />
                    <p>Select values and an operator to compare.</p>
                  </div>
                ) : (
                  <div className="w-full max-w-md">
                    <div className="bg-black rounded-lg border border-gray-800 p-6 font-mono text-sm shadow-2xl">
                      <div className="text-gray-500 mb-2 border-b border-gray-800 pb-2 flex justify-between">
                        <span>Console</span>
                        <span className="text-xs">JS</span>
                      </div>
                      <div className="text-yellow-300 mb-2">{consoleOutput[0]}</div>
                      <div className={`text-4xl font-bold mb-2 ${consoleOutput[1] === 'true' ? 'text-green-500' : 'text-red-500'}`}>
                        {consoleOutput[1]}
                      </div>
                      {consoleOutput[2] && (
                        <div className="text-gray-500 italic text-xs mt-2 border-t border-gray-800 pt-2">
                          {consoleOutput[2]}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concepts Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          Comparison Concepts
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Loose Equality */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg mr-3">
                <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Loose Equality (==)</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Checks value only. Performs type conversion. <span className="text-red-500 font-bold">Not recommended.</span>
            </p>
            <CodeSnippetBlock
              title="Example"
              codeSnippet={`console.log(5 == "5"); 
// true (types ignored)`}
            />
          </div>

          {/* Strict Equality */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg mr-3">
                <ShieldCheck className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Strict Equality (===)</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Checks value AND type. No conversion. <span className="text-green-600 font-bold">Best Practice.</span>
            </p>
            <CodeSnippetBlock
              title="Example"
              codeSnippet={`console.log(5 === "5"); 
// false (types differ)`}
            />
          </div>

          {/* Inequality */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg mr-3">
                <X className="w-5 h-5 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Inequality (!=, !==)</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Checks if values are NOT equal. Always prefer strict <code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">!==</code>.
            </p>
            <CodeSnippetBlock
              title="Example"
              codeSnippet={`console.log(10 !== "10"); 
// true (types differ)`}
            />
          </div>

          {/* Relational */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Relational</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Greater than <code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">&gt;</code>, Less than <code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">&lt;</code>, etc.
            </p>
            <CodeSnippetBlock
              title="Example"
              codeSnippet={`console.log(10 > 5); // true
console.log(5 <= 5); // true`}
            />
          </div>

          {/* String Comparison */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-3">
                <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">String Comparison</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Strings are compared alphabetically (lexicographically).
            </p>
            <CodeSnippetBlock
              title="Example"
              codeSnippet={`console.log("apple" > "banana"); 
// false ("a" comes before "b")`}
            />
          </div>

        </div>
      </section>

    </div>
  );
};

export default JsComparisons;