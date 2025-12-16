import React, { useState } from 'react';
import { Database, Type, Hash, ToggleLeft, HelpCircle, Box, List, Code, Check, Copy, Play, Terminal } from 'lucide-react';

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

const JsDataTypes = () => {
  const [activeType, setActiveType] = useState('string'); // string, number, boolean, object, array
  const [consoleOutput, setConsoleOutput] = useState([]);

  const runDemo = (type) => {
    setConsoleOutput([]);

    switch (type) {
      case 'string':
        setConsoleOutput([
          `> let name = "JavaScript";`,
          `> typeof name`,
          `> "string"`
        ]);
        break;
      case 'number':
        setConsoleOutput([
          `> let price = 99.99;`,
          `> typeof price`,
          `> "number"`
        ]);
        break;
      case 'boolean':
        setConsoleOutput([
          `> let isFun = true;`,
          `> typeof isFun`,
          `> "boolean"`
        ]);
        break;
      case 'object':
        setConsoleOutput([
          `> let user = { name: "Hari", age: 21 };`,
          `> typeof user`,
          `> "object"`
        ]);
        break;
      case 'array':
        setConsoleOutput([
          `> let colors = ["red", "green"];`,
          `> typeof colors`,
          `> "object" // Arrays are objects in JS!`
        ]);
        break;
      default:
        break;
    }
  };

  const getDataTypeInfo = () => {
    switch (activeType) {
      case 'string':
        return {
          title: 'String',
          description: 'Used for text. Can be single quotes, double quotes, or backticks.',
          code: `let name = "John";
let msg = 'Hello';
let template = \`Welcome \${name}\`;`
        };
      case 'number':
        return {
          title: 'Number',
          description: 'Used for both integers and decimals. No separate "int" or "float" types.',
          code: `let age = 25;
let price = 19.99;
let negative = -5;`
        };
      case 'boolean':
        return {
          title: 'Boolean',
          description: 'Represents logical values: true or false.',
          code: `let isLoggedIn = true;
let hasPermission = false;`
        };
      case 'object':
        return {
          title: 'Object',
          description: 'Stores collections of data in key-value pairs.',
          code: `let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};`
        };
      case 'array':
        return {
          title: 'Array',
          description: 'Stores multiple values in a single variable. Indexed starting at 0.',
          code: `let cars = ["Saab", "Volvo", "BMW"];
let numbers = [1, 2, 3, 4, 5];`
        };
      default:
        return {};
    }
  };

  const data = getDataTypeInfo();

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-yellow-50 dark:from-gray-900 dark:to-gray-900 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl mb-4">
          <Database className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          JavaScript Data Types
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Understanding the building blocks of data. From simple primitives to complex objects.
        </p>
      </header>

      {/* Interactive Type Inspector */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Terminal className="w-6 h-6 mr-2 text-yellow-500" />
            Type Inspector
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
                Select Type
              </h3>

              <div className="space-y-3">
                <button
                  onClick={() => setActiveType('string')}
                  className={`w-full flex items-center p-3 rounded-xl border-2 transition-all duration-200 ${activeType === 'string'
                      ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-yellow-300 dark:hover:border-yellow-700'
                    }`}
                >
                  <Type className="w-5 h-5 mr-3 text-yellow-600 dark:text-yellow-400" />
                  <span className="font-bold text-gray-900 dark:text-white">String</span>
                </button>

                <button
                  onClick={() => setActiveType('number')}
                  className={`w-full flex items-center p-3 rounded-xl border-2 transition-all duration-200 ${activeType === 'number'
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700'
                    }`}
                >
                  <Hash className="w-5 h-5 mr-3 text-blue-600 dark:text-blue-400" />
                  <span className="font-bold text-gray-900 dark:text-white">Number</span>
                </button>

                <button
                  onClick={() => setActiveType('boolean')}
                  className={`w-full flex items-center p-3 rounded-xl border-2 transition-all duration-200 ${activeType === 'boolean'
                      ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700'
                    }`}
                >
                  <ToggleLeft className="w-5 h-5 mr-3 text-purple-600 dark:text-purple-400" />
                  <span className="font-bold text-gray-900 dark:text-white">Boolean</span>
                </button>

                <button
                  onClick={() => setActiveType('object')}
                  className={`w-full flex items-center p-3 rounded-xl border-2 transition-all duration-200 ${activeType === 'object'
                      ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-700'
                    }`}
                >
                  <Box className="w-5 h-5 mr-3 text-green-600 dark:text-green-400" />
                  <span className="font-bold text-gray-900 dark:text-white">Object</span>
                </button>

                <button
                  onClick={() => setActiveType('array')}
                  className={`w-full flex items-center p-3 rounded-xl border-2 transition-all duration-200 ${activeType === 'array'
                      ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-700'
                    }`}
                >
                  <List className="w-5 h-5 mr-3 text-red-600 dark:text-red-400" />
                  <span className="font-bold text-gray-900 dark:text-white">Array</span>
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
                  <h3 className="font-bold text-gray-700 dark:text-gray-300">{data.title} Inspector</h3>
                  <button
                    onClick={() => runDemo(activeType)}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-bold text-sm flex items-center transition-colors shadow-md"
                  >
                    <Play className="w-4 h-4 mr-2" /> Check Type
                  </button>
                </div>

                {/* Console Output Simulator */}
                <div className="bg-black rounded-lg border border-gray-800 p-4 font-mono text-sm h-48 overflow-y-auto shadow-inner flex-1">
                  <div className="text-gray-500 border-b border-gray-800 pb-1 mb-2">Console Output</div>
                  {consoleOutput.length === 0 ? (
                    <span className="text-gray-600 italic">Ready to inspect...</span>
                  ) : (
                    consoleOutput.map((line, i) => (
                      <div key={i} className={`mb-1 animate-fade-in ${line.includes('string') ? 'text-yellow-400' :
                          line.includes('number') ? 'text-blue-400' :
                            line.includes('boolean') ? 'text-purple-400' :
                              line.includes('object') ? 'text-green-400' :
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

      {/* Comparison Table */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          Primitive vs Reference
        </h2>

        <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <table className="w-full text-left text-sm text-gray-600 dark:text-gray-300">
            <thead className="bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-white font-bold uppercase text-xs">
              <tr>
                <th className="px-6 py-4">Feature</th>
                <th className="px-6 py-4">Primitive Types</th>
                <th className="px-6 py-4">Reference Types</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td className="px-6 py-4 font-bold">Storage</td>
                <td className="px-6 py-4">Stores a single value</td>
                <td className="px-6 py-4">Stores multiple values (collection)</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold">Memory</td>
                <td className="px-6 py-4">Stored in Stack</td>
                <td className="px-6 py-4">Stored in Heap</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold">Mutability</td>
                <td className="px-6 py-4">Immutable (cannot change value)</td>
                <td className="px-6 py-4">Mutable (can modify contents)</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold">Examples</td>
                <td className="px-6 py-4">String, Number, Boolean, Null, Undefined</td>
                <td className="px-6 py-4">Object, Array, Function</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Special Types Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Special Types</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center">
              <HelpCircle className="w-5 h-5 mr-2 text-gray-500" /> Undefined
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Variable declared but not assigned a value.
            </p>
            <code className="block mt-2 text-xs bg-gray-100 dark:bg-gray-900 p-2 rounded">let x; // undefined</code>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center">
              <Box className="w-5 h-5 mr-2 text-gray-500" /> Null
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Represents an intentional empty value.
            </p>
            <code className="block mt-2 text-xs bg-gray-100 dark:bg-gray-900 p-2 rounded">let x = null;</code>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center">
              <Hash className="w-5 h-5 mr-2 text-gray-500" /> BigInt
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              For integers too large for Number type.
            </p>
            <code className="block mt-2 text-xs bg-gray-100 dark:bg-gray-900 p-2 rounded">let x = 9007199254740991n;</code>
          </div>
        </div>
      </section>

    </div>
  );
};

export default JsDataTypes;