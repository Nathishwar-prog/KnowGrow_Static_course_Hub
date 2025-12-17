import React, { useState } from 'react';
import { Type, Scissors, Search, RefreshCw, Check, Copy, Terminal, Play, Quote, AlignLeft, Split } from 'lucide-react';

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

const JsStrings = () => {
  const [inputString, setInputString] = useState("Hello JavaScript");
  const [activeMethod, setActiveMethod] = useState('length'); // length, upper, lower, slice, replace, split
  const [consoleOutput, setConsoleOutput] = useState([]);

  // Params for methods
  const [sliceStart, setSliceStart] = useState(0);
  const [sliceEnd, setSliceEnd] = useState(5);
  const [replaceTarget, setReplaceTarget] = useState("Java");
  const [replaceWith, setReplaceWith] = useState("Type");

  const runDemo = (method) => {
    setActiveMethod(method);
    setConsoleOutput([]);
    let code;
    let result;

    switch (method) {
      case 'length':
        result = inputString.length;
        code = `> let text = "${inputString}";\n> console.log(text.length);\n> ${result}`;
        break;
      case 'upper':
        result = inputString.toUpperCase();
        code = `> let text = "${inputString}";\n> console.log(text.toUpperCase());\n> "${result}"`;
        break;
      case 'lower':
        result = inputString.toLowerCase();
        code = `> let text = "${inputString}";\n> console.log(text.toLowerCase());\n> "${result}"`;
        break;
      case 'trim':
        const padded = `  ${inputString}  `;
        result = padded.trim();
        code = `> let text = "  ${inputString}  ";\n> console.log(text.trim());\n> "${result}"`;
        break;
      case 'slice':
        result = inputString.slice(sliceStart, sliceEnd);
        code = `> let text = "${inputString}";\n> console.log(text.slice(${sliceStart}, ${sliceEnd}));\n> "${result}"`;
        break;
      case 'replace':
        result = inputString.replace(replaceTarget, replaceWith);
        code = `> let text = "${inputString}";\n> console.log(text.replace("${replaceTarget}", "${replaceWith}"));\n> "${result}"`;
        break;
      case 'split':
        result = JSON.stringify(inputString.split(" "));
        code = `> let text = "${inputString}";\n> console.log(text.split(" "));\n> ${result}`;
        break;
      case 'template':
        const name = "Hari";
        result = `Hello, ${name}!`;
        code = `> let name = "Hari";\n> let msg = \`Hello, \${name}!\`;\n> "${result}"`;
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
          <Type className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          JavaScript Strings
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Store and manipulate text. Master methods like slice, replace, and template literals.
        </p>
      </header>

      {/* Interactive String Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Terminal className="w-6 h-6 mr-2 text-yellow-500" />
            String Lab
          </h2>
          <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-bold uppercase tracking-wider">
            Interactive
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Controls */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Input Text</h3>
              <input
                type="text"
                value={inputString}
                onChange={(e) => setInputString(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-500 focus:outline-none font-mono text-lg mb-6"
              />

              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Methods</h3>
              <div className="grid grid-cols-2 gap-3">
                <button onClick={() => runDemo('length')} className="p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 hover:border-yellow-300 transition-all text-sm font-bold text-gray-700 dark:text-gray-300 flex items-center justify-center">
                  <AlignLeft className="w-4 h-4 mr-2 text-blue-500" /> .length
                </button>
                <button onClick={() => runDemo('upper')} className="p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 hover:border-yellow-300 transition-all text-sm font-bold text-gray-700 dark:text-gray-300 flex items-center justify-center">
                  <Type className="w-4 h-4 mr-2 text-green-500" /> .toUpperCase()
                </button>
                <button onClick={() => runDemo('lower')} className="p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 hover:border-yellow-300 transition-all text-sm font-bold text-gray-700 dark:text-gray-300 flex items-center justify-center">
                  <Type className="w-3 h-3 mr-2 text-green-500 lowercase" /> .toLowerCase()
                </button>
                <button onClick={() => runDemo('split')} className="p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 hover:border-yellow-300 transition-all text-sm font-bold text-gray-700 dark:text-gray-300 flex items-center justify-center">
                  <Split className="w-4 h-4 mr-2 text-purple-500" /> .split(" ")
                </button>
              </div>

              {/* Complex Methods Inputs */}
              <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700 space-y-4">

                {/* Slice Controls */}
                <div className="bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold uppercase text-gray-500">Slice(start, end)</span>
                    <button onClick={() => runDemo('slice')} className="p-1 bg-blue-100 text-blue-600 rounded hover:bg-blue-200"><Play size={14} /></button>
                  </div>
                  <div className="flex gap-2">
                    <input type="number" value={sliceStart} onChange={(e) => setSliceStart(Number(e.target.value))} className="w-1/2 p-2 rounded border border-gray-300 dark:border-gray-600 text-sm" placeholder="Start" />
                    <input type="number" value={sliceEnd} onChange={(e) => setSliceEnd(Number(e.target.value))} className="w-1/2 p-2 rounded border border-gray-300 dark:border-gray-600 text-sm" placeholder="End" />
                  </div>
                </div>

                {/* Replace Controls */}
                <div className="bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold uppercase text-gray-500">Replace(find, new)</span>
                    <button onClick={() => runDemo('replace')} className="p-1 bg-green-100 text-green-600 rounded hover:bg-green-200"><Play size={14} /></button>
                  </div>
                  <div className="flex gap-2">
                    <input type="text" value={replaceTarget} onChange={(e) => setReplaceTarget(e.target.value)} className="w-1/2 p-2 rounded border border-gray-300 dark:border-gray-600 text-sm" placeholder="Find" />
                    <input type="text" value={replaceWith} onChange={(e) => setReplaceWith(e.target.value)} className="w-1/2 p-2 rounded border border-gray-300 dark:border-gray-600 text-sm" placeholder="New" />
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Visualization & Code */}
          <div className="lg:col-span-7 space-y-6">
            {/* Live Preview Area */}
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 min-h-[300px] flex flex-col relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#eab308 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

              <div className="relative z-10 flex-1 flex flex-col">
                <h3 className="font-bold text-gray-700 dark:text-gray-300 mb-4">Result Preview</h3>

                {/* Console Output Simulator */}
                <div className="bg-black rounded-lg border border-gray-800 p-4 font-mono text-sm h-64 overflow-y-auto shadow-inner w-full">
                  <div className="text-gray-500 border-b border-gray-800 pb-1 mb-2">Console Output</div>
                  {consoleOutput.length === 0 ? (
                    <span className="text-gray-600 italic">Select a method to see the result...</span>
                  ) : (
                    consoleOutput.map((line, i) => (
                      <div key={i} className={`mb-1 animate-fade-in ${line.startsWith('>') && !line.includes('console') ? 'text-green-400 font-bold' :
                          line.includes('console') ? 'text-blue-300' :
                            'text-gray-400'
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

      {/* String Concepts Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          String Concepts
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Creating Strings */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                <Quote className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Creating Strings</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Use single quotes, double quotes, or backticks.
            </p>
            <CodeSnippetBlock
              title="Syntax"
              codeSnippet={`let str1 = "Hello";
let str2 = 'World';
let str3 = \`Backticks\`;`}
            />
          </div>

          {/* Template Literals */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg mr-3">
                <Terminal className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Template Literals</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Embed variables easily using backticks and <code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">{'${}'}</code>.
            </p>
            <CodeSnippetBlock
              title="Example"
              codeSnippet={`let name = "Hari";
let msg = \`Hello, \${name}!\`;
console.log(msg);`}
            />
          </div>

          {/* Accessing Characters */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-3">
                <Search className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Accessing Chars</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Use bracket notation with an index (starts at 0).
            </p>
            <CodeSnippetBlock
              title="Example"
              codeSnippet={`let text = "Hello";
console.log(text[0]); // H`}
            />
          </div>

          {/* Concatenation */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg mr-3">
                <RefreshCw className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Concatenation</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Join strings using <code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">+</code> or <code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">concat()</code>.
            </p>
            <CodeSnippetBlock
              title="Example"
              codeSnippet={`let a = "Hello";
let b = "World";
console.log(a + " " + b);`}
            />
          </div>

          {/* Search Methods */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg mr-3">
                <Search className="w-5 h-5 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Searching</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Find text using <code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">indexOf()</code> or check existence with <code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">includes()</code>.
            </p>
            <CodeSnippetBlock
              title="Example"
              codeSnippet={`let text = "Hello JS";
console.log(text.includes("JS")); // true`}
            />
          </div>

          {/* Escape Characters */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg mr-3">
                <Scissors className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Escape Chars</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Use backslash <code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">\</code> to include special characters like quotes.
            </p>
            <CodeSnippetBlock
              title="Example"
              codeSnippet={`let quote = "He said \\"Hi\\"";
let path = "C:\\\\Users";`}
            />
          </div>

        </div>
      </section>

    </div>
  );
};

export default JsStrings;