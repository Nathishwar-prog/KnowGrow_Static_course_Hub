import React, { useState } from 'react';
import { Code, Check, X, AlertCircle, Type, Hash, Braces, FileText, Copy, Terminal } from 'lucide-react';

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

const JsSyntax = () => {
  const [identifierInput, setIdentifierInput] = useState('');
  const [activeTab, setActiveTab] = useState('identifiers'); // identifiers, sensitivity, comments

  // Reserved keywords list (subset)
  const keywords = ['let', 'const', 'var', 'if', 'else', 'function', 'return', 'for', 'while', 'class', 'try', 'catch'];

  const validateIdentifier = (name) => {
    if (!name) return { isValid: null, msg: 'Enter a name to check' };

    // Check if keyword
    if (keywords.includes(name)) {
      return { isValid: false, msg: 'Cannot use reserved keywords' };
    }

    // Check starting character
    if (/^[0-9]/.test(name)) {
      return { isValid: false, msg: 'Cannot start with a number' };
    }

    // Check valid characters (letters, numbers, _, $)
    if (!/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(name)) {
      return { isValid: false, msg: 'Contains invalid characters (only letters, numbers, _, $ allowed)' };
    }

    return { isValid: true, msg: 'Valid identifier!' };
  };

  const validation = validateIdentifier(identifierInput);

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-yellow-50 dark:from-gray-900 dark:to-gray-900 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl mb-4">
          <Braces className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          JavaScript Syntax
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          The grammar of JavaScript. Learn the rules for writing valid and clean code.
        </p>
      </header>

      {/* Interactive Syntax Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Terminal className="w-6 h-6 mr-2 text-yellow-500" />
            Syntax Lab
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
                Explore Rules
              </h3>

              <div className="space-y-3">
                <button
                  onClick={() => setActiveTab('identifiers')}
                  className={`w-full flex items-center p-4 rounded-xl border-2 transition-all duration-200 ${activeTab === 'identifiers'
                      ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-yellow-300 dark:hover:border-yellow-700'
                    }`}
                >
                  <div className={`p-2 rounded-lg mr-4 ${activeTab === 'identifiers' ? 'bg-yellow-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
                    <Type className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900 dark:text-white">Identifiers</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Naming Rules</div>
                  </div>
                </button>

                <button
                  onClick={() => setActiveTab('sensitivity')}
                  className={`w-full flex items-center p-4 rounded-xl border-2 transition-all duration-200 ${activeTab === 'sensitivity'
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700'
                    }`}
                >
                  <div className={`p-2 rounded-lg mr-4 ${activeTab === 'sensitivity' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
                    <Hash className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900 dark:text-white">Case Sensitivity</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">myVar vs MyVar</div>
                  </div>
                </button>

                <button
                  onClick={() => setActiveTab('comments')}
                  className={`w-full flex items-center p-4 rounded-xl border-2 transition-all duration-200 ${activeTab === 'comments'
                      ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-700'
                    }`}
                >
                  <div className={`p-2 rounded-lg mr-4 ${activeTab === 'comments' ? 'bg-green-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
                    <FileText className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900 dark:text-white">Comments</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Code Annotations</div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Visualization Area */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 min-h-[350px] flex flex-col relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#eab308 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

              <div className="relative z-10 flex-1 flex flex-col items-center justify-center">

                {/* Identifiers Validator */}
                {activeTab === 'identifiers' && (
                  <div className="w-full max-w-md">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">Variable Name Validator</h3>
                    <div className="relative">
                      <input
                        type="text"
                        value={identifierInput}
                        onChange={(e) => setIdentifierInput(e.target.value)}
                        placeholder="Type a variable name..."
                        className="w-full p-4 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-yellow-500 focus:outline-none transition-colors text-lg"
                      />
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                        {identifierInput && (
                          validation.isValid
                            ? <Check className="text-green-500 w-6 h-6" />
                            : <X className="text-red-500 w-6 h-6" />
                        )}
                      </div>
                    </div>

                    <div className={`mt-4 p-4 rounded-lg flex items-center justify-center transition-all ${!identifierInput ? 'bg-gray-200 dark:bg-gray-800 text-gray-500' :
                        validation.isValid ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                      }`}>
                      {validation.isValid === false && <AlertCircle className="w-5 h-5 mr-2" />}
                      <span className="font-bold">{validation.msg}</span>
                    </div>

                    <div className="mt-6 text-sm text-gray-600 dark:text-gray-400">
                      <p className="font-bold mb-2">Rules:</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Must start with a letter, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">$</code>, or <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">_</code></li>
                        <li>Cannot start with a number</li>
                        <li>Cannot be a reserved keyword (e.g., <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">let</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">if</code>)</li>
                        <li>Case sensitive</li>
                      </ul>
                    </div>
                  </div>
                )}

                {/* Case Sensitivity Demo */}
                {activeTab === 'sensitivity' && (
                  <div className="w-full max-w-lg text-center">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Case Sensitivity</h3>
                    <div className="flex justify-center gap-8 mb-8">
                      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-2 border-blue-200 dark:border-blue-800">
                        <div className="text-xs text-gray-500 uppercase font-bold mb-2">Variable 1</div>
                        <code className="text-2xl font-mono text-blue-600 dark:text-blue-400 block mb-2">myVar</code>
                        <div className="text-3xl font-bold text-gray-900 dark:text-white">10</div>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <X className="w-8 h-8" />
                        <span className="text-sm font-bold mx-2">NOT EQUAL</span>
                        <X className="w-8 h-8" />
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-2 border-purple-200 dark:border-purple-800">
                        <div className="text-xs text-gray-500 uppercase font-bold mb-2">Variable 2</div>
                        <code className="text-2xl font-mono text-purple-600 dark:text-purple-400 block mb-2">MyVar</code>
                        <div className="text-3xl font-bold text-gray-900 dark:text-white">20</div>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      JavaScript treats <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">lowercase</code> and <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">Uppercase</code> letters as completely different characters.
                    </p>
                  </div>
                )}

                {/* Comments Demo */}
                {activeTab === 'comments' && (
                  <div className="w-full max-w-lg">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">Comments are Ignored</h3>
                    <div className="bg-gray-900 rounded-xl p-6 font-mono text-sm shadow-xl border border-gray-700">
                      <div className="text-gray-500 mb-2">// This is a single-line comment</div>
                      <div className="text-purple-400">let <span className="text-blue-400">x</span> = <span className="text-green-400">5</span>; <span className="text-gray-500">// Can also be here</span></div>
                      <div className="text-gray-500 mt-4">/*</div>
                      <div className="text-gray-500 ml-4">This is a multi-line comment.</div>
                      <div className="text-gray-500 ml-4">It spans multiple lines.</div>
                      <div className="text-gray-500">*/</div>
                      <div className="text-purple-400 mt-2">let <span className="text-blue-400">y</span> = <span className="text-green-400">10</span>;</div>
                    </div>
                    <div className="mt-6 bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 text-center">
                      <p className="text-gray-600 dark:text-gray-300">
                        The browser executes the code but completely skips over the gray text (comments).
                      </p>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Syntax Components Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          Core Syntax Elements
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Literals */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-gray-900 dark:text-white mb-3">Literals</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Fixed values written directly in code.</p>
            <div className="space-y-2 font-mono text-xs">
              <div className="bg-gray-100 dark:bg-gray-900 p-2 rounded"><span className="text-green-600 dark:text-green-400">10.50</span> (Number)</div>
              <div className="bg-gray-100 dark:bg-gray-900 p-2 rounded"><span className="text-yellow-600 dark:text-yellow-400">"John"</span> (String)</div>
            </div>
          </div>

          {/* Variables */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-gray-900 dark:text-white mb-3">Variables</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Containers for storing data values.</p>
            <div className="space-y-2 font-mono text-xs">
              <div className="bg-gray-100 dark:bg-gray-900 p-2 rounded"><span className="text-purple-600 dark:text-purple-400">let</span> x = 5;</div>
              <div className="bg-gray-100 dark:bg-gray-900 p-2 rounded"><span className="text-purple-600 dark:text-purple-400">const</span> PI = 3.14;</div>
            </div>
          </div>

          {/* Operators */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-gray-900 dark:text-white mb-3">Operators</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Symbols used to compute values.</p>
            <div className="space-y-2 font-mono text-xs">
              <div className="bg-gray-100 dark:bg-gray-900 p-2 rounded">x <span className="text-red-500">=</span> 5 <span className="text-red-500">+</span> 6;</div>
              <div className="bg-gray-100 dark:bg-gray-900 p-2 rounded">x <span className="text-red-500">*</span> 10;</div>
            </div>
          </div>

        </div>
      </section>

      {/* Example Code */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Putting it Together</h2>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            A simple script combining variables, literals, operators, and comments.
          </p>
          <CodeSnippetBlock
            title="Syntax Example"
            codeSnippet={`// Define variables
let x = 5;
let y = 6;

// Calculate sum
let z = x + y;

// Output result
console.log(z);`}
          />
        </div>
      </section>

    </div>
  );
};

export default JsSyntax;