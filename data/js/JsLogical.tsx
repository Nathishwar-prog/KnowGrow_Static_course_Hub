import React, { useState } from 'react';
import { Zap, Check, X, ToggleLeft, ToggleRight, RefreshCw, Copy, Terminal, AlertTriangle, Shield, Power } from 'lucide-react';

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

const JsLogical = () => {
  const [inputA, setInputA] = useState(true);
  const [inputB, setInputB] = useState(false);
  const [operator, setOperator] = useState('AND'); // AND, OR, NOT

  const getResult = () => {
    switch (operator) {
      case 'AND': return inputA && inputB;
      case 'OR': return inputA || inputB;
      case 'NOT': return !inputA;
      default: return false;
    }
  };

  const result = getResult();

  const getOperatorSymbol = () => {
    switch (operator) {
      case 'AND': return '&&';
      case 'OR': return '||';
      case 'NOT': return '!';
      default: return '';
    }
  };

  const getExpression = () => {
    if (operator === 'NOT') {
      return `!${inputA}`;
    }
    return `${inputA} ${getOperatorSymbol()} ${inputB}`;
  };

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-yellow-50 dark:from-gray-900 dark:to-gray-900 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl mb-4">
          <Zap className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          JS Logical Operators
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Combine conditions and control program flow with AND, OR, and NOT.
        </p>
      </header>

      {/* Interactive Logic Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Terminal className="w-6 h-6 mr-2 text-yellow-500" />
            Logic Lab
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
                Configure Logic
              </h3>

              {/* Operator Selection */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                {['AND', 'OR', 'NOT'].map((op) => (
                  <button
                    key={op}
                    onClick={() => setOperator(op)}
                    className={`p-3 rounded-xl font-bold text-sm transition-all ${operator === op
                        ? 'bg-blue-500 text-white shadow-lg transform scale-105'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                  >
                    {op}
                  </button>
                ))}
              </div>

              {/* Inputs */}
              <div className="space-y-6">
                {/* Input A */}
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
                  <span className="font-bold text-gray-700 dark:text-gray-300">Input A</span>
                  <button
                    onClick={() => setInputA(!inputA)}
                    className={`flex items-center px-4 py-2 rounded-lg font-mono font-bold transition-colors ${inputA ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                      }`}
                  >
                    {inputA ? <ToggleRight className="mr-2" /> : <ToggleLeft className="mr-2" />}
                    {String(inputA)}
                  </button>
                </div>

                {/* Input B (Hidden for NOT) */}
                {operator !== 'NOT' && (
                  <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 animate-fade-in">
                    <span className="font-bold text-gray-700 dark:text-gray-300">Input B</span>
                    <button
                      onClick={() => setInputB(!inputB)}
                      className={`flex items-center px-4 py-2 rounded-lg font-mono font-bold transition-colors ${inputB ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                        }`}
                    >
                      {inputB ? <ToggleRight className="mr-2" /> : <ToggleLeft className="mr-2" />}
                      {String(inputB)}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Visualization */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 min-h-[300px] flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#eab308 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

              <div className="relative z-10 w-full max-w-md">
                {/* Circuit Visualization */}
                <div className="flex items-center justify-center mb-8 space-x-4">

                  {/* Input A Node */}
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg shadow-lg transition-all ${inputA ? 'bg-green-500 text-white shadow-green-500/50' : 'bg-gray-300 dark:bg-gray-700 text-gray-500'}`}>
                    A
                  </div>

                  {/* Operator Connection */}
                  <div className="h-1 w-8 bg-gray-300 dark:bg-gray-600"></div>

                  {/* Operator Box */}
                  <div className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg z-10">
                    {getOperatorSymbol()}
                  </div>

                  {/* Input B Node (if needed) */}
                  {operator !== 'NOT' && (
                    <>
                      <div className="h-1 w-8 bg-gray-300 dark:bg-gray-600"></div>
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg shadow-lg transition-all ${inputB ? 'bg-green-500 text-white shadow-green-500/50' : 'bg-gray-300 dark:bg-gray-700 text-gray-500'}`}>
                        B
                      </div>
                    </>
                  )}

                  {/* Result Connection */}
                  <div className="h-1 w-8 bg-gray-300 dark:bg-gray-600"></div>

                  {/* Result Bulb */}
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 ${result ? 'bg-yellow-400 shadow-yellow-400/80 scale-110' : 'bg-gray-800 border-4 border-gray-700'}`}>
                    <Power className={`w-10 h-10 ${result ? 'text-white' : 'text-gray-600'}`} />
                  </div>
                </div>

                {/* Console Output */}
                <div className="bg-black rounded-lg border border-gray-800 p-6 font-mono text-sm shadow-2xl text-center">
                  <div className="text-gray-500 mb-2 text-xs uppercase tracking-widest">Evaluation</div>
                  <div className="text-xl mb-2 text-blue-300">
                    {getExpression()}
                  </div>
                  <div className={`text-4xl font-bold ${result ? 'text-green-500' : 'text-red-500'}`}>
                    {String(result)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concepts Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          Logical Concepts
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* AND */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Logical AND (&&)</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Returns <code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">true</code> only if <strong>both</strong> operands are true.
            </p>
            <CodeSnippetBlock
              title="Example"
              codeSnippet={`let age = 20;
let hasID = true;
if (age >= 18 && hasID) {
  // Allowed
}`}
            />
          </div>

          {/* OR */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-3">
                <ToggleRight className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Logical OR (||)</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Returns <code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">true</code> if <strong>at least one</strong> operand is true.
            </p>
            <CodeSnippetBlock
              title="Example"
              codeSnippet={`let isAdmin = false;
let isEditor = true;
if (isAdmin || isEditor) {
  // Access Granted
}`}
            />
          </div>

          {/* NOT */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg mr-3">
                <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Logical NOT (!)</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Reverses the boolean value. True becomes false, and vice versa.
            </p>
            <CodeSnippetBlock
              title="Example"
              codeSnippet={`let isLoggedIn = false;
if (!isLoggedIn) {
  // Please log in
}`}
            />
          </div>

          {/* Short Circuit */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg mr-3">
                <Zap className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Short-Circuiting</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              JS stops evaluating as soon as the result is determined.
            </p>
            <CodeSnippetBlock
              title="Example"
              codeSnippet={`false && console.log("Skip");
true || console.log("Skip");`}
            />
          </div>

          {/* Truth Table */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg mr-3">
                <Terminal className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Truth Tables</h3>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-bold mb-2 text-blue-600">AND (&&)</h4>
                <div className="grid grid-cols-3 gap-1 bg-gray-50 dark:bg-gray-900 p-2 rounded">
                  <div className="font-mono">T && T</div><div>=</div><div className="text-green-600 font-bold">T</div>
                  <div className="font-mono">T && F</div><div>=</div><div className="text-red-500 font-bold">F</div>
                  <div className="font-mono">F && T</div><div>=</div><div className="text-red-500 font-bold">F</div>
                  <div className="font-mono">F && F</div><div>=</div><div className="text-red-500 font-bold">F</div>
                </div>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-purple-600">OR (||)</h4>
                <div className="grid grid-cols-3 gap-1 bg-gray-50 dark:bg-gray-900 p-2 rounded">
                  <div className="font-mono">T || T</div><div>=</div><div className="text-green-600 font-bold">T</div>
                  <div className="font-mono">T || F</div><div>=</div><div className="text-green-600 font-bold">T</div>
                  <div className="font-mono">F || T</div><div>=</div><div className="text-green-600 font-bold">T</div>
                  <div className="font-mono">F || F</div><div>=</div><div className="text-red-500 font-bold">F</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default JsLogical;