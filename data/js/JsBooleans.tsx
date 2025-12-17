import React, { useState } from 'react';
import { ToggleLeft, Check, X, HelpCircle, RefreshCw, Copy, Terminal, AlertTriangle, Scale, Zap } from 'lucide-react';

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

const JsBooleans = () => {
  const [activeTab, setActiveTab] = useState('truthy'); // truthy, compare
  const [consoleOutput, setConsoleOutput] = useState([]);

  // Truthy/Falsy State
  const [tfValue, setTfValue] = useState<any>("");
  const [tfType, setTfType] = useState("string"); // string, number, expression

  // Comparison State
  const [compA, setCompA] = useState(10);
  const [compB, setCompB] = useState(20);
  const [operator, setOperator] = useState(">");

  const checkTruthy = (val: any, type: string, label?: string) => {
    let actualVal = val;
    let displayVal = label || (typeof val === 'string' ? `"${val}"` : String(val));

    // Handle special types for the demo
    if (type === 'number') actualVal = Number(val);
    if (label === 'null') actualVal = null;
    if (label === 'undefined') actualVal = undefined;
    if (label === 'NaN') actualVal = NaN;
    if (label === 'false') actualVal = false;
    if (label === 'true') actualVal = true;

    const isTruthy = Boolean(actualVal);

    setConsoleOutput([
      `> Boolean(${displayVal})`,
      isTruthy ? "true" : "false"
    ]);
  };

  const runComparison = () => {
    let result = false;
    switch (operator) {
      case '>': result = compA > compB; break;
      case '<': result = compA < compB; break;
      case '>=': result = compA >= compB; break;
      case '<=': result = compA <= compB; break;
      case '==': result = compA == compB; break;
      case '===': result = compA === compB; break;
      case '!=': result = compA != compB; break;
      case '!==': result = compA !== compB; break;
    }

    setConsoleOutput([
      `> ${compA} ${operator} ${compB}`,
      String(result)
    ]);
  };

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-yellow-50 dark:from-gray-900 dark:to-gray-900 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl mb-4">
          <ToggleLeft className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          JavaScript Booleans
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          True or False? Master the logic behind JavaScript's decision making, comparisons, and truthy/falsy values.
        </p>
      </header>

      {/* Interactive Boolean Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Terminal className="w-6 h-6 mr-2 text-yellow-500" />
            Boolean Lab
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
                Experiment
              </h3>

              {/* Tabs */}
              <div className="flex space-x-2 mb-6">
                <button onClick={() => setActiveTab('truthy')} className={`flex-1 py-2 rounded-lg text-sm font-bold transition-colors ${activeTab === 'truthy' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400'}`}>Truthy vs Falsy</button>
                <button onClick={() => setActiveTab('compare')} className={`flex-1 py-2 rounded-lg text-sm font-bold transition-colors ${activeTab === 'compare' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400'}`}>Comparisons</button>
              </div>

              {/* Dynamic Controls */}
              <div className="space-y-4 min-h-[200px]">

                {/* Truthy/Falsy Checker */}
                {activeTab === 'truthy' && (
                  <div className="space-y-4 animate-fade-in">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Click a value to check if it's <span className="text-green-600 font-bold">true</span> or <span className="text-red-500 font-bold">false</span>.</p>

                    <div className="grid grid-cols-2 gap-3">
                      <button onClick={() => checkTruthy(0, 'number')} className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-400 font-mono text-sm hover:bg-red-100 transition-colors">0</button>
                      <button onClick={() => checkTruthy(1, 'number')} className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-400 font-mono text-sm hover:bg-green-100 transition-colors">1</button>

                      <button onClick={() => checkTruthy("", 'string')} className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-400 font-mono text-sm hover:bg-red-100 transition-colors">"" (Empty String)</button>
                      <button onClick={() => checkTruthy("Hello", 'string')} className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-400 font-mono text-sm hover:bg-green-100 transition-colors">"Hello"</button>

                      <button onClick={() => checkTruthy(null, 'special', 'null')} className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-400 font-mono text-sm hover:bg-red-100 transition-colors">null</button>
                      <button onClick={() => checkTruthy(undefined, 'special', 'undefined')} className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-400 font-mono text-sm hover:bg-red-100 transition-colors">undefined</button>

                      <button onClick={() => checkTruthy(NaN, 'special', 'NaN')} className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-400 font-mono text-sm hover:bg-red-100 transition-colors">NaN</button>
                      <button onClick={() => checkTruthy(true, 'special', 'true')} className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-400 font-mono text-sm hover:bg-green-100 transition-colors">true</button>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Custom String Test</label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={tfValue}
                          onChange={(e) => setTfValue(e.target.value)}
                          className="flex-1 p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-sm"
                          placeholder="Type anything..."
                        />
                        <button onClick={() => checkTruthy(tfValue, 'string')} className="px-4 bg-gray-200 dark:bg-gray-700 rounded font-bold text-sm hover:bg-gray-300">Check</button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Comparison Tester */}
                {activeTab === 'compare' && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="flex items-center justify-center space-x-2 bg-gray-50 dark:bg-gray-900 p-4 rounded-xl">
                      <input
                        type="number"
                        value={compA}
                        onChange={(e) => setCompA(Number(e.target.value))}
                        className="w-16 p-2 text-center rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 font-bold"
                      />

                      <select
                        value={operator}
                        onChange={(e) => setOperator(e.target.value)}
                        className="p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 font-mono font-bold text-blue-600"
                      >
                        <option value=">">&gt;</option>
                        <option value="<">&lt;</option>
                        <option value=">=">&gt;=</option>
                        <option value="<=">&lt;=</option>
                        <option value="==">==</option>
                        <option value="===">===</option>
                        <option value="!=">!=</option>
                      </select>

                      <input
                        type="number"
                        value={compB}
                        onChange={(e) => setCompB(Number(e.target.value))}
                        className="w-16 p-2 text-center rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 font-bold"
                      />
                    </div>

                    <button onClick={runComparison} className="w-full p-3 bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 rounded-lg font-bold hover:bg-purple-200 transition-colors">
                      Run Comparison
                    </button>
                  </div>
                )}

              </div>
            </div>
          </div>

          {/* Visualization & Code */}
          <div className="lg:col-span-7 space-y-6">
            {/* Live Preview Area */}
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 min-h-[300px] flex flex-col relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#eab308 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

              <div className="relative z-10 flex-1 flex flex-col">
                <h3 className="font-bold text-gray-700 dark:text-gray-300 mb-4 uppercase text-xs tracking-wider">Result Output</h3>

                {/* Console Output Simulator */}
                <div className="bg-black rounded-lg border border-gray-800 p-4 font-mono text-sm h-64 overflow-y-auto shadow-inner w-full flex flex-col justify-center items-center">
                  {consoleOutput.length === 0 ? (
                    <span className="text-gray-600 italic">Waiting for input...</span>
                  ) : (
                    <>
                      <div className="text-gray-500 mb-2">{consoleOutput[0]}</div>
                      <div className={`text-5xl font-bold animate-bounce-in ${consoleOutput[1] === 'true' ? 'text-green-500' : 'text-red-500'}`}>
                        {consoleOutput[1]}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concepts Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          Boolean Concepts
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Truthy/Falsy */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg mr-3">
                <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Falsy Values</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              6 values are always false: <code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">false</code>, <code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">0</code>, <code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">""</code>, <code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">null</code>, <code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">undefined</code>, <code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">NaN</code>.
            </p>
            <CodeSnippetBlock
              title="Example"
              codeSnippet={`if (0) {
  // This code never runs
}`}
            />
          </div>

          {/* Comparisons */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-3">
                <Scale className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Comparisons</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Operators like <code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">&gt;</code>, <code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">&lt;</code>, <code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">===</code> return booleans.
            </p>
            <CodeSnippetBlock
              title="Example"
              codeSnippet={`let x = 10;
console.log(x > 5); // true`}
            />
          </div>

          {/* Boolean Function */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                <RefreshCw className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Boolean()</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Use the function to convert any value to a boolean.
            </p>
            <CodeSnippetBlock
              title="Example"
              codeSnippet={`Boolean("Hello"); // true
Boolean(""); // false`}
            />
          </div>

          {/* Logical Operators */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg mr-3">
                <Zap className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Logical Ops</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              <code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">&&</code> (AND), <code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">||</code> (OR), <code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">!</code> (NOT).
            </p>
            <CodeSnippetBlock
              title="Example"
              codeSnippet={`true && false; // false
!true; // false`}
            />
          </div>

          {/* Conditional Logic */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg mr-3">
                <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Conditions</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Booleans drive <code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">if</code> statements and loops.
            </p>
            <CodeSnippetBlock
              title="Example"
              codeSnippet={`let age = 18;
if (age >= 18) {
  console.log("Vote!");
}`}
            />
          </div>

        </div>
      </section>

    </div>
  );
};

export default JsBooleans;