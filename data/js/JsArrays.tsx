import React, { useState } from 'react';
import { List, Plus, Trash2, Search, ArrowRight, Check, Copy, Terminal, Play, Grid, RefreshCw } from 'lucide-react';

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

const JsArrays = () => {
  const [fruits, setFruits] = useState(["Apple", "Banana", "Mango"]);
  const [consoleOutput, setConsoleOutput] = useState([]);
  const [newItem, setNewItem] = useState("Grapes");

  const runDemo = (action) => {
    setConsoleOutput([]);
    let code;
    let newFruits = [...fruits];

    switch (action) {
      case 'push':
        newFruits.push(newItem);
        setFruits(newFruits);
        code = `> fruits.push("${newItem}");\n> console.log(fruits);\n> [${newFruits.map(f => `"${f}"`).join(", ")}]`;
        break;
      case 'pop':
        const popped = newFruits.pop();
        setFruits(newFruits);
        code = `> let removed = fruits.pop();\n> console.log(removed);\n> "${popped}"\n> console.log(fruits);\n> [${newFruits.map(f => `"${f}"`).join(", ")}]`;
        break;
      case 'unshift':
        newFruits.unshift(newItem);
        setFruits(newFruits);
        code = `> fruits.unshift("${newItem}");\n> console.log(fruits);\n> [${newFruits.map(f => `"${f}"`).join(", ")}]`;
        break;
      case 'shift':
        const shifted = newFruits.shift();
        setFruits(newFruits);
        code = `> let removed = fruits.shift();\n> console.log(removed);\n> "${shifted}"\n> console.log(fruits);\n> [${newFruits.map(f => `"${f}"`).join(", ")}]`;
        break;
      case 'sort':
        newFruits.sort();
        setFruits(newFruits);
        code = `> fruits.sort();\n> console.log(fruits);\n> [${newFruits.map(f => `"${f}"`).join(", ")}]`;
        break;
      case 'reverse':
        newFruits.reverse();
        setFruits(newFruits);
        code = `> fruits.reverse();\n> console.log(fruits);\n> [${newFruits.map(f => `"${f}"`).join(", ")}]`;
        break;
      case 'length':
        code = `> console.log(fruits.length);\n> ${fruits.length}`;
        break;
      case 'reset':
        setFruits(["Apple", "Banana", "Mango"]);
        code = `> fruits = ["Apple", "Banana", "Mango"];`;
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
          <List className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          JavaScript Arrays
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Store multiple values in a single variable. Master methods like push, pop, and sort.
        </p>
      </header>

      {/* Interactive Array Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Terminal className="w-6 h-6 mr-2 text-yellow-500" />
            Array Lab
          </h2>
          <button
            onClick={() => runDemo('reset')}
            className="flex items-center px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
          >
            <RefreshCw className="w-3 h-3 mr-1" /> Reset
          </button>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Controls */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-100 dark:border-gray-700">
                Manage Array
              </h3>

              {/* Visual Array Representation */}
              <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg font-mono text-sm mb-6 border border-gray-200 dark:border-gray-700 overflow-x-auto">
                <span className="text-purple-600 dark:text-purple-400">let</span> <span className="text-blue-600 dark:text-blue-400">fruits</span> = [
                <div className="flex flex-wrap gap-2 mt-2">
                  {fruits.map((fruit, index) => (
                    <span key={index} className="bg-white dark:bg-gray-800 px-2 py-1 rounded border border-gray-300 dark:border-gray-600 text-green-600 dark:text-green-400 animate-fade-in">
                      "{fruit}"{index < fruits.length - 1 ? ',' : ''}
                    </span>
                  ))}
                </div>
                ];
              </div>

              <div className="mb-6">
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">New Item</label>
                <input
                  type="text"
                  value={newItem}
                  onChange={(e) => setNewItem(e.target.value)}
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-500 focus:outline-none font-mono text-lg"
                />
              </div>

              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => runDemo('push')}
                  className="flex items-center justify-center p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-green-50 dark:hover:bg-green-900/20 hover:border-green-300 transition-all text-sm font-bold text-gray-700 dark:text-gray-300"
                >
                  <Plus className="w-4 h-4 mr-2 text-green-500" /> Push (End)
                </button>
                <button
                  onClick={() => runDemo('pop')}
                  className="flex items-center justify-center p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-red-50 dark:hover:bg-red-900/20 hover:border-red-300 transition-all text-sm font-bold text-gray-700 dark:text-gray-300"
                >
                  <Trash2 className="w-4 h-4 mr-2 text-red-500" /> Pop (End)
                </button>
                <button
                  onClick={() => runDemo('unshift')}
                  className="flex items-center justify-center p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 transition-all text-sm font-bold text-gray-700 dark:text-gray-300"
                >
                  <ArrowRight className="w-4 h-4 mr-2 text-blue-500 rotate-180" /> Unshift (Start)
                </button>
                <button
                  onClick={() => runDemo('shift')}
                  className="flex items-center justify-center p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:border-orange-300 transition-all text-sm font-bold text-gray-700 dark:text-gray-300"
                >
                  <Trash2 className="w-4 h-4 mr-2 text-orange-500" /> Shift (Start)
                </button>
                <button
                  onClick={() => runDemo('sort')}
                  className="flex items-center justify-center p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:border-purple-300 transition-all text-sm font-bold text-gray-700 dark:text-gray-300"
                >
                  <List className="w-4 h-4 mr-2 text-purple-500" /> Sort A-Z
                </button>
                <button
                  onClick={() => runDemo('length')}
                  className="flex items-center justify-center p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900/20 hover:border-gray-300 transition-all text-sm font-bold text-gray-700 dark:text-gray-300"
                >
                  <Search className="w-4 h-4 mr-2 text-gray-500" /> Length
                </button>
              </div>
            </div>
          </div>

          {/* Visualization & Code */}
          <div className="lg:col-span-7 space-y-6">
            {/* Live Preview Area */}
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 min-h-[300px] flex flex-col relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#eab308 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

              <div className="relative z-10 flex-1 flex flex-col">
                <h3 className="font-bold text-gray-700 dark:text-gray-300 mb-4 uppercase text-xs tracking-wider">Console Output</h3>

                {/* Console Output Simulator */}
                <div className="bg-black rounded-lg border border-gray-800 p-4 font-mono text-sm h-64 overflow-y-auto shadow-inner w-full">
                  <div className="text-gray-500 border-b border-gray-800 pb-1 mb-2">Console</div>
                  {consoleOutput.length === 0 ? (
                    <span className="text-gray-600 italic">Perform an action to see results...</span>
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
          Array Concepts
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Accessing Elements */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                <Search className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Accessing</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Use index numbers starting from 0.
            </p>
            <CodeSnippetBlock
              title="Example"
              codeSnippet={`let fruits = ["Apple", "Mango"];
console.log(fruits[0]); // Apple`}
            />
          </div>

          {/* Looping */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg mr-3">
                <RefreshCw className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Looping</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Use <code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">forEach</code> or <code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">for</code> loops.
            </p>
            <CodeSnippetBlock
              title="Example"
              codeSnippet={`fruits.forEach(item => {
  console.log(item);
});`}
            />
          </div>

          {/* Multidimensional */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-3">
                <Grid className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Multidimensional</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Arrays inside arrays (matrices).
            </p>
            <CodeSnippetBlock
              title="Example"
              codeSnippet={`let matrix = [[1, 2], [3, 4]];
console.log(matrix[1][0]); // 3`}
            />
          </div>

        </div>
      </section>

    </div>
  );
};

export default JsArrays;