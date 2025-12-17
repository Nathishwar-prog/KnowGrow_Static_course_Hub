import React, { useState } from 'react';
import { Calculator, RefreshCw, Check, Copy, Terminal, Zap, ArrowUp, ArrowDown, Minus, Hash, Percent } from 'lucide-react';

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

const JsMath = () => {
  const [activeTab, setActiveTab] = useState('rounding'); // rounding, random, power
  const [inputNum, setInputNum] = useState(4.6);
  const [consoleOutput, setConsoleOutput] = useState([]);

  // Random range
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(10);

  const runDemo = (action) => {
    setConsoleOutput([]);
    let code;
    let result;

    switch (action) {
      // Rounding
      case 'round':
        result = Math.round(inputNum);
        code = `> Math.round(${inputNum});\n> ${result}`;
        break;
      case 'ceil':
        result = Math.ceil(inputNum);
        code = `> Math.ceil(${inputNum});\n> ${result}`;
        break;
      case 'floor':
        result = Math.floor(inputNum);
        code = `> Math.floor(${inputNum});\n> ${result}`;
        break;
      case 'trunc':
        result = Math.trunc(inputNum);
        code = `> Math.trunc(${inputNum});\n> ${result}`;
        break;

      // Random
      case 'random':
        result = Math.random();
        code = `> Math.random();\n> ${result.toFixed(4)}...`;
        break;
      case 'randomRange':
        result = Math.floor(Math.random() * (max - min + 1)) + min;
        code = `> Math.floor(Math.random() * (${max} - ${min} + 1)) + ${min};\n> ${result}`;
        break;

      // Power/Root
      case 'pow':
        result = Math.pow(inputNum, 2);
        code = `> Math.pow(${inputNum}, 2);\n> ${result.toFixed(2)}`;
        break;
      case 'sqrt':
        result = Math.sqrt(inputNum);
        code = `> Math.sqrt(${inputNum});\n> ${result.toFixed(4)}`;
        break;
      case 'abs':
        result = Math.abs(inputNum);
        code = `> Math.abs(${inputNum});\n> ${result}`;
        break;

      // Constants
      case 'pi':
        code = `> Math.PI;\n> ${Math.PI}`;
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
          <Calculator className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          JavaScript Math
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Perform powerful calculations with the built-in Math object. No imports required.
        </p>
      </header>

      {/* Interactive Math Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Terminal className="w-6 h-6 mr-2 text-yellow-500" />
            Math Lab
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
                Operations
              </h3>

              {/* Tabs */}
              <div className="flex space-x-2 mb-6">
                <button onClick={() => setActiveTab('rounding')} className={`flex-1 py-2 rounded-lg text-sm font-bold transition-colors ${activeTab === 'rounding' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400'}`}>Rounding</button>
                <button onClick={() => setActiveTab('random')} className={`flex-1 py-2 rounded-lg text-sm font-bold transition-colors ${activeTab === 'random' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400'}`}>Random</button>
                <button onClick={() => setActiveTab('power')} className={`flex-1 py-2 rounded-lg text-sm font-bold transition-colors ${activeTab === 'power' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400'}`}>Power</button>
              </div>

              {/* Dynamic Controls */}
              <div className="space-y-4 min-h-[200px]">

                {/* Rounding Controls */}
                {activeTab === 'rounding' && (
                  <div className="space-y-4 animate-fade-in">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Input Number</label>
                      <input
                        type="number"
                        value={inputNum}
                        onChange={(e) => setInputNum(Number(e.target.value))}
                        step="0.1"
                        className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <button onClick={() => runDemo('round')} className="flex items-center justify-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 border border-gray-200 dark:border-gray-600 text-sm font-semibold">
                        <RefreshCw className="w-4 h-4 mr-2 text-blue-500" /> round()
                      </button>
                      <button onClick={() => runDemo('ceil')} className="flex items-center justify-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 border border-gray-200 dark:border-gray-600 text-sm font-semibold">
                        <ArrowUp className="w-4 h-4 mr-2 text-green-500" /> ceil()
                      </button>
                      <button onClick={() => runDemo('floor')} className="flex items-center justify-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 border border-gray-200 dark:border-gray-600 text-sm font-semibold">
                        <ArrowDown className="w-4 h-4 mr-2 text-red-500" /> floor()
                      </button>
                      <button onClick={() => runDemo('trunc')} className="flex items-center justify-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 border border-gray-200 dark:border-gray-600 text-sm font-semibold">
                        <Minus className="w-4 h-4 mr-2 text-gray-500" /> trunc()
                      </button>
                    </div>
                  </div>
                )}

                {/* Random Controls */}
                {activeTab === 'random' && (
                  <div className="space-y-4 animate-fade-in">
                    <button onClick={() => runDemo('random')} className="w-full p-3 bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 rounded-lg font-bold hover:bg-purple-200 mb-4">
                      Math.random() (0-1)
                    </button>

                    <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Random Range</label>
                      <div className="flex gap-2 mb-3">
                        <input type="number" value={min} onChange={(e) => setMin(Number(e.target.value))} className="w-1/2 p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-sm" placeholder="Min" />
                        <input type="number" value={max} onChange={(e) => setMax(Number(e.target.value))} className="w-1/2 p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-sm" placeholder="Max" />
                      </div>
                      <button onClick={() => runDemo('randomRange')} className="w-full p-3 bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 rounded-lg font-bold hover:bg-gray-200">
                        Generate Random Integer
                      </button>
                    </div>
                  </div>
                )}

                {/* Power Controls */}
                {activeTab === 'power' && (
                  <div className="space-y-4 animate-fade-in">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Input Number</label>
                      <input
                        type="number"
                        value={inputNum}
                        onChange={(e) => setInputNum(Number(e.target.value))}
                        className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900"
                      />
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      <button onClick={() => runDemo('pow')} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 border border-gray-200 dark:border-gray-600 text-sm font-semibold text-left">
                        Math.pow(x, 2) (Square)
                      </button>
                      <button onClick={() => runDemo('sqrt')} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 border border-gray-200 dark:border-gray-600 text-sm font-semibold text-left">
                        Math.sqrt(x) (Square Root)
                      </button>
                      <button onClick={() => runDemo('abs')} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 border border-gray-200 dark:border-gray-600 text-sm font-semibold text-left">
                        Math.abs(x) (Absolute)
                      </button>
                    </div>
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
                <div className="bg-black rounded-lg border border-gray-800 p-4 font-mono text-sm h-64 overflow-y-auto shadow-inner w-full">
                  <div className="text-gray-500 border-b border-gray-800 pb-1 mb-2">Console</div>
                  {consoleOutput.length === 0 ? (
                    <span className="text-gray-600 italic">Select an operation...</span>
                  ) : (
                    consoleOutput.map((line, i) => (
                      <div key={i} className={`mb-1 animate-fade-in ${line.startsWith('>') && !line.includes('Math') ? 'text-green-400 font-bold text-lg' :
                          line.includes('Math') ? 'text-blue-300' :
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
          Math Concepts
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Rounding */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                <RefreshCw className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Rounding</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              <code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">round</code> (nearest), <code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">ceil</code> (up), <code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">floor</code> (down).
            </p>
            <CodeSnippetBlock
              title="Example"
              codeSnippet={`Math.round(4.6); // 5
Math.floor(4.9); // 4`}
            />
          </div>

          {/* Random */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-3">
                <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Random</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Generates a number between 0 (inclusive) and 1 (exclusive).
            </p>
            <CodeSnippetBlock
              title="Example"
              codeSnippet={`let r = Math.random();`}
            />
          </div>

          {/* Constants */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg mr-3">
                <Hash className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Constants</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Access built-in constants like PI.
            </p>
            <CodeSnippetBlock
              title="Example"
              codeSnippet={`console.log(Math.PI);
// 3.14159...`}
            />
          </div>

          {/* Min/Max */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg mr-3">
                <ArrowUp className="w-5 h-5 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Min / Max</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Find the lowest or highest value in a list of arguments.
            </p>
            <CodeSnippetBlock
              title="Example"
              codeSnippet={`Math.min(1, 5, 10); // 1
Math.max(1, 5, 10); // 10`}
            />
          </div>

          {/* Power/Root */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg mr-3">
                <Percent className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Power & Root</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Calculate exponents and square roots.
            </p>
            <CodeSnippetBlock
              title="Example"
              codeSnippet={`Math.pow(2, 3); // 8
Math.sqrt(64); // 8`}
            />
          </div>

        </div>
      </section>

    </div>
  );
};

export default JsMath;