import React, { useState } from 'react';
import { Hash, Calculator, AlertTriangle, RefreshCw, Check, Copy, Terminal, Play, Settings, Info } from 'lucide-react';

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

const JsNumbers = () => {
  const [activeTab, setActiveTab] = useState('methods'); // methods, precision, properties
  const [inputVal, setInputVal] = useState("123.456");
  const [precision, setPrecision] = useState(2);
  const [consoleOutput, setConsoleOutput] = useState([]);

  const runDemo = (action) => {
    setConsoleOutput([]);
    let code;
    let result;

    switch (action) {
      case 'toString':
        result = Number(inputVal).toString();
        code = `> let num = ${inputVal};\n> console.log(num.toString());\n> "${result}"`;
        break;
      case 'toFixed':
        result = Number(inputVal).toFixed(precision);
        code = `> let num = ${inputVal};\n> console.log(num.toFixed(${precision}));\n> "${result}"`;
        break;
      case 'Number':
        result = Number(inputVal);
        code = `> console.log(Number("${inputVal}"));\n> ${result}`;
        break;
      case 'isNaN':
        result = isNaN(Number(inputVal));
        code = `> console.log(isNaN(${inputVal}));\n> ${result}`;
        break;
      case 'precision_bad':
        result = 0.1 + 0.2;
        code = `> let x = 0.1 + 0.2;\n> console.log(x);\n> ${result}`;
        break;
      case 'precision_good':
        result = (0.1 + 0.2).toFixed(2);
        code = `> let x = (0.1 + 0.2).toFixed(2);\n> console.log(x);\n> "${result}"`;
        break;
      case 'max_value':
        code = `> console.log(Number.MAX_VALUE);\n> ${Number.MAX_VALUE}`;
        break;
      case 'infinity':
        code = `> console.log(10 / 0);\n> Infinity`;
        break;
      default:
        return;
    }

    setConsoleOutput(code.split('\n'));
  };

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-yellow-50 dark:from-gray-900 dark:to-gray-900 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl mb-4">
          <Hash className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          JavaScript Numbers
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          One type for all numbers. Master integers, floats, methods, and handle precision like a pro.
        </p>
      </header>

      {/* Interactive Number Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Terminal className="w-6 h-6 mr-2 text-yellow-500" />
            Number Lab
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

              <div className="space-y-3 mb-8">
                <button
                  onClick={() => setActiveTab('methods')}
                  className={`w-full flex items-center p-3 rounded-xl border-2 transition-all duration-200 ${activeTab === 'methods'
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-blue-300'
                    }`}
                >
                  <Settings className={`w-5 h-5 mr-3 ${activeTab === 'methods' ? 'text-blue-600' : 'text-gray-400'}`} />
                  <span className={`font-bold ${activeTab === 'methods' ? 'text-blue-700 dark:text-blue-300' : 'text-gray-600 dark:text-gray-400'}`}>Methods</span>
                </button>

                <button
                  onClick={() => setActiveTab('precision')}
                  className={`w-full flex items-center p-3 rounded-xl border-2 transition-all duration-200 ${activeTab === 'precision'
                      ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-red-300'
                    }`}
                >
                  <AlertTriangle className={`w-5 h-5 mr-3 ${activeTab === 'precision' ? 'text-red-600' : 'text-gray-400'}`} />
                  <span className={`font-bold ${activeTab === 'precision' ? 'text-red-700 dark:text-red-300' : 'text-gray-600 dark:text-gray-400'}`}>Precision</span>
                </button>

                <button
                  onClick={() => setActiveTab('properties')}
                  className={`w-full flex items-center p-3 rounded-xl border-2 transition-all duration-200 ${activeTab === 'properties'
                      ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-purple-300'
                    }`}
                >
                  <Info className={`w-5 h-5 mr-3 ${activeTab === 'properties' ? 'text-purple-600' : 'text-gray-400'}`} />
                  <span className={`font-bold ${activeTab === 'properties' ? 'text-purple-700 dark:text-purple-300' : 'text-gray-600 dark:text-gray-400'}`}>Properties</span>
                </button>
              </div>

              {/* Dynamic Controls */}
              <div className="pt-6 border-t border-gray-100 dark:border-gray-700">
                {activeTab === 'methods' && (
                  <div className="space-y-4 animate-fade-in">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Input Number</label>
                      <input
                        type="text"
                        value={inputVal}
                        onChange={(e) => setInputVal(e.target.value)}
                        className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Decimals (for toFixed)</label>
                      <input
                        type="number"
                        value={precision}
                        min="0" max="20"
                        onChange={(e) => setPrecision(Number(e.target.value))}
                        className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-4">
                      <button onClick={() => runDemo('toString')} className="p-2 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-xs font-bold">toString()</button>
                      <button onClick={() => runDemo('toFixed')} className="p-2 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-xs font-bold">toFixed()</button>
                      <button onClick={() => runDemo('Number')} className="p-2 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-xs font-bold">Number()</button>
                      <button onClick={() => runDemo('isNaN')} className="p-2 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-xs font-bold">isNaN()</button>
                    </div>
                  </div>
                )}

                {activeTab === 'precision' && (
                  <div className="space-y-4 animate-fade-in">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Floating point math can be tricky. Try adding 0.1 + 0.2.
                    </p>
                    <button onClick={() => runDemo('precision_bad')} className="w-full p-3 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-lg font-bold mb-2 hover:bg-red-200">
                      Run: 0.1 + 0.2
                    </button>
                    <button onClick={() => runDemo('precision_good')} className="w-full p-3 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-lg font-bold hover:bg-green-200">
                      Fix: (0.1 + 0.2).toFixed(2)
                    </button>
                  </div>
                )}

                {activeTab === 'properties' && (
                  <div className="space-y-4 animate-fade-in">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Check out special number properties.
                    </p>
                    <button onClick={() => runDemo('max_value')} className="w-full p-3 bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 rounded-lg font-bold mb-2 hover:bg-purple-200">
                      Number.MAX_VALUE
                    </button>
                    <button onClick={() => runDemo('infinity')} className="w-full p-3 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 rounded-lg font-bold hover:bg-blue-200">
                      Infinity (10 / 0)
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Visualization & Code */}
          <div className="lg:col-span-8 space-y-6">
            {/* Live Preview Area */}
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 min-h-[300px] flex flex-col relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#eab308 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

              <div className="relative z-10 flex-1 flex flex-col">
                <h3 className="font-bold text-gray-700 dark:text-gray-300 mb-4 uppercase text-xs tracking-wider">Console Output</h3>

                {/* Console Output Simulator */}
                <div className="bg-black rounded-lg border border-gray-800 p-4 font-mono text-sm h-64 overflow-y-auto shadow-inner w-full">
                  <div className="text-gray-500 border-b border-gray-800 pb-1 mb-2">Console</div>
                  {consoleOutput.length === 0 ? (
                    <span className="text-gray-600 italic">Run a command to see output...</span>
                  ) : (
                    consoleOutput.map((line, i) => (
                      <div key={i} className={`mb-1 animate-fade-in ${line.startsWith('>') && !line.includes('console') ? 'text-green-400 font-bold' :
                          line.includes('console') ? 'text-blue-300' :
                            'text-yellow-300'
                        }`}>
                        {line}
                      </div>
                    ))
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
          Key Concepts
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Number Type */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                <Hash className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">One Number Type</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              JS doesn't have separate types for integers and floats. Everything is a <code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">number</code>.
            </p>
            <CodeSnippetBlock
              title="Example"
              codeSnippet={`let x = 10;   // int
let y = 3.14; // float`}
            />
          </div>

          {/* NaN */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg mr-3">
                <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">NaN (Not a Number)</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Result of invalid math operations. Check with <code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">isNaN()</code>.
            </p>
            <CodeSnippetBlock
              title="Example"
              codeSnippet={`let res = 10 / "abc";
console.log(res); // NaN`}
            />
          </div>

          {/* Infinity */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-3">
                <RefreshCw className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Infinity</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Returned when dividing by zero or exceeding max limit.
            </p>
            <CodeSnippetBlock
              title="Example"
              codeSnippet={`let x = 10 / 0;
console.log(x); // Infinity`}
            />
          </div>

          {/* toFixed */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg mr-3">
                <Calculator className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Rounding</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Use <code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">toFixed(n)</code> to round numbers to <code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">n</code> decimal places.
            </p>
            <CodeSnippetBlock
              title="Example"
              codeSnippet={`let pi = 3.14159;
console.log(pi.toFixed(2)); // "3.14"`}
            />
          </div>

          {/* Conversion */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg mr-3">
                <Settings className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Conversion</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Convert strings to numbers using <code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">Number()</code>.
            </p>
            <CodeSnippetBlock
              title="Example"
              codeSnippet={`let x = Number("10.5");
console.log(x); // 10.5`}
            />
          </div>

        </div>
      </section>

    </div>
  );
};

export default JsNumbers;