import React, { useState } from 'react';
import { Lock, Shield, AlertTriangle, Box, Check, Copy, Play, Terminal, List, Edit3 } from 'lucide-react';

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

const JsConst = () => {
  const [activeTab, setActiveTab] = useState('primitive'); // primitive, object, array
  const [consoleOutput, setConsoleOutput] = useState([]);

  const runDemo = (type) => {
    setConsoleOutput([]);

    switch (type) {
      case 'primitive':
        setConsoleOutput([
          `> const pi = 3.14;`,
          `> pi = 3.14159; // ❌ TypeError: Assignment to constant variable.`,
          `> // Primitive const values cannot be changed.`
        ]);
        break;
      case 'object':
        setConsoleOutput([
          `> const user = { name: "Hari", age: 20 };`,
          `> user.age = 21; // ✅ Allowed!`,
          `> console.log(user.age); // 21`,
          `> user = { name: "New" }; // ❌ TypeError: Assignment to constant variable.`
        ]);
        break;
      case 'array':
        setConsoleOutput([
          `> const numbers = [1, 2, 3];`,
          `> numbers.push(4); // ✅ Allowed!`,
          `> console.log(numbers); // [1, 2, 3, 4]`,
          `> numbers = [5, 6]; // ❌ TypeError: Assignment to constant variable.`
        ]);
        break;
      default:
        break;
    }
  };

  const getConstData = () => {
    switch (activeTab) {
      case 'primitive':
        return {
          title: 'Primitive Values',
          description: 'For primitives (numbers, strings, booleans), const prevents reassignment completely.',
          code: `const PI = 3.14;
PI = 3.15; // Error!

const name = "JS";
name = "JavaScript"; // Error!`
        };
      case 'object':
        return {
          title: 'Objects are Mutable',
          description: 'You CAN change properties of a const object, but you CANNOT reassign the variable itself.',
          code: `const car = { type: "Fiat", model: "500" };

// Allowed:
car.color = "white";

// Not Allowed:
car = { type: "Volvo" }; // Error`
        };
      case 'array':
        return {
          title: 'Arrays are Mutable',
          description: 'You CAN add/remove elements from a const array, but you CANNOT reassign the variable.',
          code: `const colors = ["Red", "Green"];

// Allowed:
colors.push("Blue");

// Not Allowed:
colors = ["Yellow", "Black"]; // Error`
        };
      default:
        return {};
    }
  };

  const data = getConstData();

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-yellow-50 dark:from-gray-900 dark:to-gray-900 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl mb-4">
          <Lock className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          JavaScript Const
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Declare variables that shouldn't be reassigned. Understand the difference between <span className="font-bold text-yellow-600 dark:text-yellow-400">constant reference</span> and <span className="font-bold text-yellow-600 dark:text-yellow-400">constant value</span>.
        </p>
      </header>

      {/* Interactive Const Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Terminal className="w-6 h-6 mr-2 text-yellow-500" />
            Const Lab
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
                Test Scenarios
              </h3>

              <div className="space-y-3">
                <button
                  onClick={() => setActiveTab('primitive')}
                  className={`w-full flex items-center p-4 rounded-xl border-2 transition-all duration-200 ${activeTab === 'primitive'
                      ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-700'
                    }`}
                >
                  <div className={`p-2 rounded-lg mr-4 ${activeTab === 'primitive' ? 'bg-red-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
                    <Lock className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900 dark:text-white">Primitive</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Strictly Constant</div>
                  </div>
                </button>

                <button
                  onClick={() => setActiveTab('object')}
                  className={`w-full flex items-center p-4 rounded-xl border-2 transition-all duration-200 ${activeTab === 'object'
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700'
                    }`}
                >
                  <div className={`p-2 rounded-lg mr-4 ${activeTab === 'object' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
                    <Box className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900 dark:text-white">Object</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Mutable Properties</div>
                  </div>
                </button>

                <button
                  onClick={() => setActiveTab('array')}
                  className={`w-full flex items-center p-4 rounded-xl border-2 transition-all duration-200 ${activeTab === 'array'
                      ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-700'
                    }`}
                >
                  <div className={`p-2 rounded-lg mr-4 ${activeTab === 'array' ? 'bg-green-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
                    <List className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900 dark:text-white">Array</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Mutable Elements</div>
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
                    <Play className="w-4 h-4 mr-2" /> Attempt Change
                  </button>
                </div>

                {/* Console Output Simulator */}
                <div className="bg-black rounded-lg border border-gray-800 p-4 font-mono text-sm h-48 overflow-y-auto shadow-inner flex-1">
                  <div className="text-gray-500 border-b border-gray-800 pb-1 mb-2">Console Output</div>
                  {consoleOutput.length === 0 ? (
                    <span className="text-gray-600 italic">Ready to execute...</span>
                  ) : (
                    consoleOutput.map((line, i) => (
                      <div key={i} className={`mb-1 animate-fade-in ${line.includes('Error') ? 'text-red-500' :
                          line.includes('Allowed') ? 'text-green-400' :
                            'text-gray-300'
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

      {/* Comparison Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          const vs let
        </h2>

        <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <table className="w-full text-left text-sm text-gray-600 dark:text-gray-300">
            <thead className="bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-white font-bold uppercase text-xs">
              <tr>
                <th className="px-6 py-4">Feature</th>
                <th className="px-6 py-4 text-blue-600 dark:text-blue-400">const</th>
                <th className="px-6 py-4 text-green-600 dark:text-green-400">let</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td className="px-6 py-4 font-bold">Reassign Value</td>
                <td className="px-6 py-4 text-red-500 font-bold">❌ No</td>
                <td className="px-6 py-4 text-green-500 font-bold">✅ Yes</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold">Redeclare</td>
                <td className="px-6 py-4 text-red-500 font-bold">❌ No</td>
                <td className="px-6 py-4 text-red-500 font-bold">❌ No</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold">Initialization</td>
                <td className="px-6 py-4">Must initialize immediately</td>
                <td className="px-6 py-4">Can initialize later</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold">Scope</td>
                <td className="px-6 py-4">Block Scope</td>
                <td className="px-6 py-4">Block Scope</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Best Practices */}
      <section className="max-w-4xl mx-auto mb-16">
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-800/30 flex items-start">
          <Shield className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mr-4 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-yellow-900 dark:text-yellow-300 mb-2">When to use const?</h3>
            <p className="text-sm text-yellow-800 dark:text-yellow-200 mb-2">
              Use <strong>const</strong> by default. Only use <strong>let</strong> if you know the value needs to change.
            </p>
            <ul className="list-disc list-inside text-sm text-yellow-800 dark:text-yellow-200 space-y-1">
              <li>API Keys & URLs</li>
              <li>Configuration settings</li>
              <li>Functions & Arrays (unless you need to replace the entire array)</li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
};

export default JsConst;