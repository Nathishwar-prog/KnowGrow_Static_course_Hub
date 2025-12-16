import React, { useState } from 'react';
import { Equal, Plus, Minus, X, Divide, Percent, ArrowRight, Check, Copy, Play, Terminal, RefreshCw, Zap } from 'lucide-react';

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

const JsAssignment = () => {
  const [currentValue, setCurrentValue] = useState(10);
  const [operand, setOperand] = useState(5);
  const [history, setHistory] = useState([]);
  const [lastOperation, setLastOperation] = useState(null);

  const performOperation = (op) => {
    let newValue;
    let symbol;
    let equivalent;

    const prev = currentValue;

    switch (op) {
      case '=':
        newValue = operand;
        symbol = '=';
        equivalent = `x = ${operand}`;
        break;
      case '+=':
        newValue = prev + operand;
        symbol = '+=';
        equivalent = `x = x + ${operand}`;
        break;
      case '-=':
        newValue = prev - operand;
        symbol = '-=';
        equivalent = `x = x - ${operand}`;
        break;
      case '*=':
        newValue = prev * operand;
        symbol = '*=';
        equivalent = `x = x * ${operand}`;
        break;
      case '/=':
        newValue = parseFloat((prev / operand).toFixed(2));
        symbol = '/=';
        equivalent = `x = x / ${operand}`;
        break;
      case '%=':
        newValue = prev % operand;
        symbol = '%=';
        equivalent = `x = x % ${operand}`;
        break;
      case '**=':
        newValue = prev ** operand;
        symbol = '**=';
        equivalent = `x = x ** ${operand}`;
        break;
      default:
        return;
    }

    setCurrentValue(newValue);
    setLastOperation({ prev, op: symbol, operand, result: newValue, equivalent });
    setHistory(prevHist => [`x ${symbol} ${operand} // x is now ${newValue}`, ...prevHist].slice(0, 5));
  };

  const reset = () => {
    setCurrentValue(10);
    setOperand(5);
    setHistory([]);
    setLastOperation(null);
  };

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-yellow-50 dark:from-gray-900 dark:to-gray-900 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl mb-4">
          <ArrowRight className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          Assignment Operators
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Shortcuts for updating variables. Write cleaner, more concise code.
        </p>
      </header>

      {/* Interactive Assignment Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Terminal className="w-6 h-6 mr-2 text-yellow-500" />
            Assignment Lab
          </h2>
          <button
            onClick={reset}
            className="flex items-center px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
          >
            <RefreshCw className="w-3 h-3 mr-1" /> Reset x = 10
          </button>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Controls */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100 dark:border-gray-700">
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg">Current Variable</h3>
                  <div className="text-xs text-gray-500 dark:text-gray-400">The value of 'x'</div>
                </div>
                <div className="text-3xl font-mono font-bold text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 px-4 py-2 rounded-lg">
                  {currentValue}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Operand Value (y)</label>
                <input
                  type="number"
                  value={operand}
                  onChange={(e) => setOperand(Number(e.target.value))}
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-500 focus:outline-none font-mono text-lg"
                />
              </div>

              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Apply Operator</h3>
              <div className="grid grid-cols-4 gap-3">
                {[
                  { op: '=', label: 'Assign' },
                  { op: '+=', label: 'Add' },
                  { op: '-=', label: 'Sub' },
                  { op: '*=', label: 'Mult' },
                  { op: '/=', label: 'Div' },
                  { op: '%=', label: 'Mod' },
                  { op: '**=', label: 'Exp' },
                ].map((item) => (
                  <button
                    key={item.op}
                    onClick={() => performOperation(item.op)}
                    className="flex flex-col items-center justify-center p-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-yellow-400 dark:hover:border-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 transition-all duration-200 group"
                  >
                    <span className="text-lg font-bold text-gray-700 dark:text-gray-300 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 font-mono">{item.op}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Visualization & Code */}
          <div className="lg:col-span-7 space-y-6">
            {/* Live Preview Area */}
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 min-h-[350px] flex flex-col relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#eab308 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

              <div className="relative z-10 flex-1 flex flex-col">
                <h3 className="font-bold text-gray-700 dark:text-gray-300 mb-4">Operation Visualizer</h3>

                {lastOperation ? (
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 mb-6 animate-fade-in">
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
                      <span>Operation</span>
                      <span>Equivalent To</span>
                    </div>
                    <div className="flex items-center justify-between font-mono text-lg font-bold text-gray-900 dark:text-white">
                      <div className="flex items-center">
                        <span className="text-yellow-600 dark:text-yellow-400">x</span>
                        <span className="mx-2 text-gray-400">{lastOperation.op}</span>
                        <span className="text-blue-600 dark:text-blue-400">{lastOperation.operand}</span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400" />
                      <div className="text-green-600 dark:text-green-400">
                        {lastOperation.equivalent}
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 text-center">
                      <span className="text-gray-500 text-sm">Result: </span>
                      <span className="text-2xl font-bold text-gray-900 dark:text-white">{lastOperation.result}</span>
                    </div>
                  </div>
                ) : (
                  <div className="flex-1 flex items-center justify-center text-gray-400 italic border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl mb-6">
                    Select an operator to see the magic
                  </div>
                )}

                {/* Console Output Simulator */}
                <div className="bg-black rounded-lg border border-gray-800 p-4 font-mono text-sm h-40 overflow-y-auto shadow-inner w-full">
                  <div className="text-gray-500 border-b border-gray-800 pb-1 mb-2">History</div>
                  {history.length === 0 ? (
                    <span className="text-gray-600 italic">No operations yet...</span>
                  ) : (
                    history.map((line, i) => (
                      <div key={i} className="mb-1 text-green-400 animate-fade-in">
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

      {/* Operators Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          Operator Reference
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Basic Assignment */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg mr-3">
                <Equal className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Assignment (=)</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Assigns the value on the right to the variable on the left.
            </p>
            <code className="block bg-gray-100 dark:bg-gray-900 p-2 rounded text-xs font-mono">let x = 10;</code>
          </div>

          {/* Add & Assign */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                <Plus className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Add & Assign (+=)</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Adds the value to the variable and assigns the result.
            </p>
            <code className="block bg-gray-100 dark:bg-gray-900 p-2 rounded text-xs font-mono">x += 5; // x = x + 5</code>
          </div>

          {/* Subtract & Assign */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg mr-3">
                <Minus className="w-5 h-5 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Sub & Assign (-=)</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Subtracts the value from the variable and assigns the result.
            </p>
            <code className="block bg-gray-100 dark:bg-gray-900 p-2 rounded text-xs font-mono">x -= 3; // x = x - 3</code>
          </div>

          {/* Multiply & Assign */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-3">
                <X className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Mult & Assign (*=)</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Multiplies the variable by the value and assigns the result.
            </p>
            <code className="block bg-gray-100 dark:bg-gray-900 p-2 rounded text-xs font-mono">x *= 2; // x = x * 2</code>
          </div>

          {/* Divide & Assign */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg mr-3">
                <Divide className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Div & Assign (/=)</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Divides the variable by the value and assigns the result.
            </p>
            <code className="block bg-gray-100 dark:bg-gray-900 p-2 rounded text-xs font-mono">x /= 2; // x = x / 2</code>
          </div>

          {/* Exponentiation & Assign */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg mr-3">
                <Zap className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Exp & Assign (**=)</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Raises the variable to the power of the value.
            </p>
            <code className="block bg-gray-100 dark:bg-gray-900 p-2 rounded text-xs font-mono">x **= 2; // x = x ** 2</code>
          </div>

        </div>
      </section>

      {/* Summary Code */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Combined Example</h2>
        <CodeSnippetBlock
          title="All Operators"
          codeSnippet={`let a = 10;

a += 5;  // 15
a -= 3;  // 12
a *= 2;  // 24
a /= 4;  // 6
a %= 4;  // 2
a **= 3; // 8

console.log(a); // 8`}
        />
      </section>

    </div>
  );
};

export default JsAssignment;