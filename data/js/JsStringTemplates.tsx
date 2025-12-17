import React, { useState } from 'react';
import { FileText, Code, Layers, Plus, Check, Copy, Terminal, RefreshCw, Braces, AlignLeft } from 'lucide-react';

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

const JsStringTemplates = () => {
  const [activeTab, setActiveTab] = useState('variables'); // variables, expressions, multiline
  const [name, setName] = useState('Hari');
  const [item, setItem] = useState('Laptop');
  const [price, setPrice] = useState(1000);
  const [tax, setTax] = useState(50);
  const [multiLineText, setMultiLineText] = useState('JavaScript\nTemplate\nStrings');

  const getDemoContent = () => {
    switch (activeTab) {
      case 'variables':
        return {
          title: 'Variable Substitution',
          description: 'Inject variables directly into strings using ${...}.',
          code: `let name = "${name}";
let item = "${item}";

// Old Way
let msg1 = "Hello " + name + ", your " + item + " is ready!";

// Template String (New Way)
let msg2 = \`Hello \${name}, your \${item} is ready!\`;`,
          result: `Hello ${name}, your ${item} is ready!`
        };
      case 'expressions':
        return {
          title: 'Expression Substitution',
          description: 'Perform calculations directly inside the placeholder.',
          code: `let price = ${price};
let tax = ${tax};

// Calculate inside the string
let total = \`Total: \${price + tax}\`;`,
          result: `Total: ${price + tax}`
        };
      case 'multiline':
        return {
          title: 'Multi-line Strings',
          description: 'Create multi-line strings without using \\n characters.',
          code: `let msg = \`
${multiLineText}
\`;`,
          result: multiLineText
        };
      default:
        return {};
    }
  };

  const demo = getDemoContent();

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-yellow-50 dark:from-gray-900 dark:to-gray-900 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl mb-4">
          <FileText className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          Template Literals
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          The modern way to work with strings in JavaScript. Use backticks for powerful string interpolation.
        </p>
      </header>

      {/* Interactive Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Terminal className="w-6 h-6 mr-2 text-yellow-500" />
            Template Lab
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
                Features
              </h3>

              <div className="space-y-3 mb-8">
                <button
                  onClick={() => setActiveTab('variables')}
                  className={`w-full flex items-center p-3 rounded-xl border-2 transition-all duration-200 ${activeTab === 'variables'
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-blue-300'
                    }`}
                >
                  <Braces className={`w-5 h-5 mr-3 ${activeTab === 'variables' ? 'text-blue-600' : 'text-gray-400'}`} />
                  <span className={`font-bold ${activeTab === 'variables' ? 'text-blue-700 dark:text-blue-300' : 'text-gray-600 dark:text-gray-400'}`}>Variables</span>
                </button>

                <button
                  onClick={() => setActiveTab('expressions')}
                  className={`w-full flex items-center p-3 rounded-xl border-2 transition-all duration-200 ${activeTab === 'expressions'
                      ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-purple-300'
                    }`}
                >
                  <Plus className={`w-5 h-5 mr-3 ${activeTab === 'expressions' ? 'text-purple-600' : 'text-gray-400'}`} />
                  <span className={`font-bold ${activeTab === 'expressions' ? 'text-purple-700 dark:text-purple-300' : 'text-gray-600 dark:text-gray-400'}`}>Expressions</span>
                </button>

                <button
                  onClick={() => setActiveTab('multiline')}
                  className={`w-full flex items-center p-3 rounded-xl border-2 transition-all duration-200 ${activeTab === 'multiline'
                      ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-green-300'
                    }`}
                >
                  <AlignLeft className={`w-5 h-5 mr-3 ${activeTab === 'multiline' ? 'text-green-600' : 'text-gray-400'}`} />
                  <span className={`font-bold ${activeTab === 'multiline' ? 'text-green-700 dark:text-green-300' : 'text-gray-600 dark:text-gray-400'}`}>Multi-line</span>
                </button>
              </div>

              {/* Dynamic Inputs */}
              <div className="pt-6 border-t border-gray-100 dark:border-gray-700">
                {activeTab === 'variables' && (
                  <div className="space-y-4 animate-fade-in">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Name</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Item</label>
                      <input
                        type="text"
                        value={item}
                        onChange={(e) => setItem(e.target.value)}
                        className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900"
                      />
                    </div>
                  </div>
                )}

                {activeTab === 'expressions' && (
                  <div className="space-y-4 animate-fade-in">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Price</label>
                      <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(Number(e.target.value))}
                        className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Tax</label>
                      <input
                        type="number"
                        value={tax}
                        onChange={(e) => setTax(Number(e.target.value))}
                        className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900"
                      />
                    </div>
                  </div>
                )}

                {activeTab === 'multiline' && (
                  <div className="space-y-4 animate-fade-in">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Multi-line Text</label>
                      <textarea
                        value={multiLineText}
                        onChange={(e) => setMultiLineText(e.target.value)}
                        rows={4}
                        className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 font-mono text-sm"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Visualization & Code */}
          <div className="lg:col-span-8 space-y-6">
            {/* Live Preview Area */}
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 min-h-[250px] flex flex-col relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#eab308 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

              <div className="relative z-10 flex-1 flex flex-col justify-center">
                <h3 className="font-bold text-gray-700 dark:text-gray-300 mb-4 uppercase text-xs tracking-wider">Output Result</h3>
                <div className="text-2xl font-bold text-gray-900 dark:text-white whitespace-pre-wrap font-mono bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                  {demo.result}
                </div>
              </div>
            </div>

            {/* Generated Code */}
            <CodeSnippetBlock codeSnippet={demo.code} title={demo.title} />
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          Why Use Template Strings?
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-xl border border-red-100 dark:border-red-900/30">
            <h3 className="text-lg font-bold text-red-800 dark:text-red-400 mb-4 flex items-center">
              <span className="bg-red-200 dark:bg-red-900/50 p-1 rounded mr-2 text-xs">OLD</span>
              Normal Strings
            </h3>
            <ul className="space-y-3 text-sm text-red-900 dark:text-red-300">
              <li className="flex items-start"><span className="mr-2">•</span> Hard to read with many variables</li>
              <li className="flex items-start"><span className="mr-2">•</span> Requires <code className="mx-1 bg-white/50 px-1 rounded">+</code> operator for concatenation</li>
              <li className="flex items-start"><span className="mr-2">•</span> No multi-line support (need <code className="mx-1 bg-white/50 px-1 rounded">\n</code>)</li>
            </ul>
            <div className="mt-4 bg-white dark:bg-gray-900 p-3 rounded border border-red-200 dark:border-red-900/30 text-xs font-mono text-gray-600 dark:text-gray-400 opacity-70">
              "Hello " + name + ", welcome!"
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/10 p-6 rounded-xl border border-green-100 dark:border-green-900/30">
            <h3 className="text-lg font-bold text-green-800 dark:text-green-400 mb-4 flex items-center">
              <span className="bg-green-200 dark:bg-green-900/50 p-1 rounded mr-2 text-xs">NEW</span>
              Template Strings
            </h3>
            <ul className="space-y-3 text-sm text-green-900 dark:text-green-300">
              <li className="flex items-start"><span className="mr-2">•</span> Clean and readable syntax</li>
              <li className="flex items-start"><span className="mr-2">•</span> Easy variable injection with <code className="mx-1 bg-white/50 px-1 rounded">{'${}'}</code></li>
              <li className="flex items-start"><span className="mr-2">•</span> Native multi-line support</li>
            </ul>
            <div className="mt-4 bg-white dark:bg-gray-900 p-3 rounded border border-green-200 dark:border-green-900/30 text-xs font-mono text-gray-800 dark:text-gray-200 font-bold">
              `Hello {'${name}'}, welcome!`
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Usage */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          Advanced Usage
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {/* HTML Templates */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg mr-3">
                <Code className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">HTML Templates</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Great for creating dynamic HTML fragments.
            </p>
            <CodeSnippetBlock
              title="HTML Example"
              codeSnippet={`let html = \`
<div>
  <h2>\${title}</h2>
</div>\`;`}
            />
          </div>

          {/* Logic in Strings */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-3">
                <Layers className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Logic Inside</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              You can use ternary operators inside the placeholders.
            </p>
            <CodeSnippetBlock
              title="Logic Example"
              codeSnippet={`let grade = \`Status: \${score > 50 ? 'Pass' : 'Fail'}\`;`}
            />
          </div>

          {/* Function Calls */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                <RefreshCw className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Function Calls</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Call functions directly inside the string interpolation.
            </p>
            <CodeSnippetBlock
              title="Function Example"
              codeSnippet={`console.log(\`Hello \${formatName(user)}\`);`}
            />
          </div>

        </div>
      </section>

    </div>
  );
};

export default JsStringTemplates;