import React, { useState } from 'react';
import { Calculator, Plus, Minus, X, Divide, Percent, ArrowUp, ArrowDown, Check, Copy, Play, Terminal, RefreshCw, Hash } from 'lucide-react';

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

const JsArithmetic = () => {
  const [num1, setNum1] = useState(10);
  const [num2, setNum2] = useState(5);
  const [activeOp, setActiveOp] = useState('+'); // +, -, *, /, %
  const [consoleOutput, setConsoleOutput] = useState([]);

  const calculate = (op) => {
    setActiveOp(op);
    let res;
    let code;

    switch (op) {
      case '+':
        res = num1 + num2;
        code = `let a = ${num1};\nlet b = ${num2};\nlet sum = a + b; // ${res}`;
        break;
      case '-':
        res = num1 - num2;
        code = `let a = ${num1};\nlet b = ${num2};\nlet diff = a - b; // ${res}`;
        break;
      case '*':
        res = num1 * num2;
        code = `let a = ${num1};\nlet b = ${num2};\nlet product = a * b; // ${res}`;
        break;
      case '/':
        res = (num1 / num2).toFixed(2).replace(/\.00$/, '');
        code = `let a = ${num1};\nlet b = ${num2};\nlet quotient = a / b; // ${res}`;
        break;
      case '%':
        res = num1 % num2;
        code = `let a = ${num1};\nlet b = ${num2};\nlet remainder = a % b; // ${res}`;
        break;
      default:
        return;
    }

    setConsoleOutput([`> ${code.split('\n')[2]}`]);
  };

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-yellow-50 dark:from-gray-900 dark:to-gray-900 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl mb-4">
          <Calculator className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          JS Arithmetic
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Master the math of JavaScript. From basic addition to modulus and increment operators.
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
                Input Values
              </h3>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Value A</label>
                  <input
                    type="number"
                    value={num1}
                    onChange={(e) => setNum1(Number(e.target.value))}
                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-500 focus:outline-none font-mono text-lg"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Value B</label>
                  <input
                    type="number"
                    value={num2}
                    onChange={(e) => setNum2(Number(e.target.value))}
                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-500 focus:outline-none font-mono text-lg"
                  />
                </div>
              </div>

              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Select Operation</h3>
              <div className="grid grid-cols-5 gap-2">
                {[
                  { op: '+', icon: Plus, label: 'Add' },
                  { op: '-', icon: Minus, label: 'Sub' },
                  { op: '*', icon: X, label: 'Mult' },
                  { op: '/', icon: Divide, label: 'Div' },
                  { op: '%', icon: Percent, label: 'Mod' }
                ].map((item) => (
                  <button
                    key={item.op}
                    onClick={() => calculate(item.op)}
                    className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all duration-200 ${activeOp === item.op
                        ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400'
                        : 'border-gray-200 dark:border-gray-700 hover:border-yellow-300 dark:hover:border-yellow-700 text-gray-500'
                      }`}
                  >
                    <item.icon className="w-5 h-5 mb-1" />
                    <span className="text-xs font-bold">{item.op}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Visualization & Code */}
          <div className="lg:col-span-7 space-y-6">
            {/* Live Preview Area */}
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 min-h-[300px] flex flex-col relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#eab308 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

              <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center">
                <div className="text-6xl font-black text-gray-900 dark:text-white mb-2 tracking-tighter">
                  {activeOp === '+' ? num1 + num2 :
                    activeOp === '-' ? num1 - num2 :
                      activeOp === '*' ? num1 * num2 :
                        activeOp === '/' ? (num1 / num2).toFixed(2).replace(/\.00$/, '') :
                          num1 % num2}
                </div>
                <div className="text-lg text-gray-500 dark:text-gray-400 font-mono bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm border border-gray-200 dark:border-gray-700">
                  {num1} {activeOp} {num2}
                </div>
              </div>

              {/* Console Output Simulator */}
              <div className="mt-6 bg-black rounded-lg border border-gray-800 p-4 font-mono text-sm h-32 overflow-y-auto shadow-inner w-full">
                <div className="text-gray-500 border-b border-gray-800 pb-1 mb-2">Console Output</div>
                {consoleOutput.length === 0 ? (
                  <span className="text-gray-600 italic">Select an operation...</span>
                ) : (
                  consoleOutput.map((line, i) => (
                    <div key={i} className="mb-1 text-green-400 animate-fade-in">
                      {line}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operators Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          Operator Details
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Modulus */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-3">
                <Percent className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Modulus (%)</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Returns the division remainder. Useful for checking even/odd numbers.
            </p>
            <CodeSnippetBlock
              title="Modulus Example"
              codeSnippet={`let a = 10;
let b = 3;
console.log(a % b); // 1`}
            />
          </div>

          {/* Increment */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg mr-3">
                <ArrowUp className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Increment (++)</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Increases a value by 1. Can be used as prefix (<code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">++x</code>) or postfix (<code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">x++</code>).
            </p>
            <CodeSnippetBlock
              title="Increment Example"
              codeSnippet={`let x = 5;
x++;
console.log(x); // 6`}
            />
          </div>

          {/* String Concatenation */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                <Hash className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">String Math</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              The <code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">+</code> operator also joins strings together.
            </p>
            <CodeSnippetBlock
              title="Concatenation"
              codeSnippet={`let text = "JS " + "Math";
console.log(text); // "JS Math"`}
            />
          </div>

        </div>
      </section>

      {/* Precedence */}
      <section className="max-w-4xl mx-auto mb-16">
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-800/30">
          <h3 className="font-bold text-yellow-900 dark:text-yellow-300 mb-4 text-lg">Operator Precedence (BODMAS)</h3>
          <p className="text-sm text-yellow-800 dark:text-yellow-200 mb-4">
            Multiplication and division happen <strong>before</strong> addition and subtraction. Use parentheses to change the order.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
              <div className="text-xs text-gray-500 uppercase font-bold mb-1">Standard Order</div>
              <code className="text-lg font-mono text-gray-900 dark:text-white">10 + 5 * 2 = <span className="text-blue-600 dark:text-blue-400 font-bold">20</span></code>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
              <div className="text-xs text-gray-500 uppercase font-bold mb-1">With Parentheses</div>
              <code className="text-lg font-mono text-gray-900 dark:text-white">(10 + 5) * 2 = <span className="text-green-600 dark:text-green-400 font-bold">30</span></code>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default JsArithmetic;