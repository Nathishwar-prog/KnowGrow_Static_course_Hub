import React, { useState } from 'react';
import { 
  ArrowRightLeft, AlertTriangle, Lightbulb, BookOpen, 
  Terminal, Target, RefreshCw, Check, Copy, 
  FileType, Code2, Database, Layers, ArrowDown
} from 'lucide-react';

const CodeSnippetBlock = ({ codeSnippet, title }: { codeSnippet: string, title?: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="mb-6 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm w-full">
      {title && (
        <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{title}</span>
          <div className="flex space-x-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80"></div>
          </div>
        </div>
      )}
      <div className="relative group bg-slate-900 border-t border-slate-800">
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-md bg-slate-800 text-slate-400 hover:bg-purple-600 hover:text-white transition-colors border border-slate-700"
            title="Copy code"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </div>
        <pre className="p-4 overflow-x-auto text-sm font-mono text-purple-300 leading-relaxed">
          <code>{codeSnippet}</code>
        </pre>
      </div>
    </div>
  );
};

const PythonCasting: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);

  const runDemo = (expression: string, result: string, originalType: string, newType: string) => {
    const codeStr = `>>> print(${expression})\n${result}\n>>> print(type(${result}))\n<class '${newType}'>`;
    setConsoleOutput(codeStr.split('\n'));
  };

  const runInputDemo = () => {
    const codeStr = `>>> age = input("Enter your age: ")\nEnter your age: 20\n>>> age = int(age)\n>>> print(age + 5)\n25`;
    setConsoleOutput(codeStr.split('\n'));
  };

  const resetConsole = () => setConsoleOutput([]);

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-900 min-h-screen font-sans text-slate-800 dark:text-slate-200">
      
      {/* 1. Header Area */}
      <header className="max-w-4xl mx-auto text-center mb-16 pt-8">
        <div className="inline-flex items-center justify-center p-4 bg-purple-100 dark:bg-purple-900/30 rounded-2xl mb-6 shadow-sm border border-purple-200 dark:border-purple-800/50">
          <ArrowRightLeft className="w-10 h-10 text-purple-600 dark:text-purple-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Python Casting
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Convert one data type to another effortlessly. Essential for processing user input, math operations, and dynamic programming.
        </p>
      </header>

      {/* 2. What is Casting? & Importance */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 text-purple-500 mr-3" />
            <h2 className="text-2xl font-bold">1️⃣ What is Casting?</h2>
          </div>
          <p className="mb-4 text-slate-600 dark:text-slate-300">
            Casting means converting one data type into another data type. Sometimes we need to change a value from one type to another, for example:
          </p>
          
          <div className="flex flex-col gap-2 mb-6">
            <div className="bg-slate-50 dark:bg-slate-900 px-4 py-3 rounded-xl border border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-100 dark:bg-emerald-900/30 px-2 rounded">String</span>
              <ArrowRightLeft className="w-4 h-4 text-slate-400" />
              <span className="font-mono text-blue-600 dark:text-blue-400 font-bold bg-blue-100 dark:bg-blue-900/30 px-2 rounded">Integer</span>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 px-4 py-3 rounded-xl border border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="font-mono text-blue-600 dark:text-blue-400 font-bold bg-blue-100 dark:bg-blue-900/30 px-2 rounded">Integer</span>
              <ArrowRightLeft className="w-4 h-4 text-slate-400" />
              <span className="font-mono text-orange-600 dark:text-orange-400 font-bold bg-orange-100 dark:bg-orange-900/30 px-2 rounded">Float</span>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 px-4 py-3 rounded-xl border border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="font-mono text-orange-600 dark:text-orange-400 font-bold bg-orange-100 dark:bg-orange-900/30 px-2 rounded">Float</span>
              <ArrowRightLeft className="w-4 h-4 text-slate-400" />
              <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-100 dark:bg-emerald-900/30 px-2 rounded">String</span>
            </div>
          </div>
          <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border-l-4 border-yellow-400">
            <h4 className="font-bold flex items-center text-yellow-800 dark:text-yellow-400 mb-1">
              <span className="mr-2">📌</span> Definition
            </h4>
            <p className="text-sm text-yellow-800 dark:text-yellow-300">
              This process is technically called <strong className="font-bold">Type Casting</strong> or <strong className="font-bold">Type Conversion</strong>.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col justify-between">
          <div>
            <div className="flex items-center mb-4">
              <Code2 className="w-6 h-6 text-blue-500 mr-3" />
              <h2 className="text-2xl font-bold">2️⃣ Why Casting?</h2>
            </div>
            <p className="mb-4 text-slate-600 dark:text-slate-300">
              Programs often receive data in different formats than expected (especially from users or APIs).
            </p>
            <div className="bg-rose-50 dark:bg-rose-900/10 p-5 rounded-xl border border-rose-100 dark:border-rose-800/50 mb-4">
              <h4 className="font-bold text-rose-800 dark:text-rose-400 mb-2 text-sm uppercase tracking-wide">The Problem</h4>
              <p className="text-sm text-rose-700 dark:text-rose-300 mb-3">User enters age from input:</p>
              <code className="bg-white dark:bg-slate-900 px-2 py-1 rounded text-rose-600 dark:text-rose-400 font-mono shadow-sm">age = "20"</code>
              <p className="text-sm text-rose-700 dark:text-rose-300 mt-3">Here "20" is a string. We cannot do math with it!</p>
            </div>
            <div className="bg-emerald-50 dark:bg-emerald-900/10 p-5 rounded-xl border border-emerald-100 dark:border-emerald-800/50">
              <h4 className="font-bold text-emerald-800 dark:text-emerald-400 mb-2 text-sm uppercase tracking-wide">The Solution</h4>
              <p className="text-sm text-emerald-700 dark:text-emerald-300 mb-3">Convert it to a number first:</p>
              <code className="bg-white dark:bg-slate-900 px-2 py-1 rounded text-emerald-600 dark:text-emerald-400 font-mono shadow-sm">age = int("20")</code>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Lab Area */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center">
            <Terminal className="w-8 h-8 mr-3 text-purple-500" />
            Interactive Cast Lab
          </h2>
          <button
            onClick={resetConsole}
            className="flex items-center px-4 py-2 bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 rounded-lg text-sm font-bold uppercase tracking-wider hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shadow-sm"
          >
            <RefreshCw className="w-4 h-4 mr-2" /> Reset
          </button>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-6 pb-4 border-b border-slate-100 dark:border-slate-700">
                Execute Conversions
              </h3>

              <div className="space-y-4">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center">
                  <Database className="w-4 h-4 mr-2" /> Built-in Casting Functions (3️⃣)
                </h4>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {/* int() */}
                  <button onClick={() => runDemo('int(5.8)', '5', 'float', 'int')} className="font-mono text-sm p-3 rounded-xl border border-blue-200 dark:border-blue-800/30 bg-blue-50/50 dark:bg-blue-900/10 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition shadow-sm text-left flex justify-between items-center group">
                    <div><span className="text-blue-600 dark:text-blue-400">int</span>(5.8)</div><Check className="w-4 h-4 text-blue-500 opacity-0 group-hover:opacity-100 transition" />
                  </button>
                  <button onClick={() => runDemo('int("10")', '10', 'str', 'int')} className="font-mono text-sm p-3 rounded-xl border border-blue-200 dark:border-blue-800/30 bg-blue-50/50 dark:bg-blue-900/10 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition shadow-sm text-left flex justify-between items-center group">
                    <div><span className="text-blue-600 dark:text-blue-400">int</span>("10")</div><Check className="w-4 h-4 text-blue-500 opacity-0 group-hover:opacity-100 transition" />
                  </button>

                  {/* float() */}
                  <button onClick={() => runDemo('float(5)', '5.0', 'int', 'float')} className="font-mono text-sm p-3 rounded-xl border border-orange-200 dark:border-orange-800/30 bg-orange-50/50 dark:bg-orange-900/10 hover:bg-orange-100 dark:hover:bg-orange-900/30 transition shadow-sm text-left flex justify-between items-center group">
                    <div><span className="text-orange-600 dark:text-orange-400">float</span>(5)</div><Check className="w-4 h-4 text-orange-500 opacity-0 group-hover:opacity-100 transition" />
                  </button>
                  <button onClick={() => runDemo('float("7.3")', '7.3', 'str', 'float')} className="font-mono text-sm p-3 rounded-xl border border-orange-200 dark:border-orange-800/30 bg-orange-50/50 dark:bg-orange-900/10 hover:bg-orange-100 dark:hover:bg-orange-900/30 transition shadow-sm text-left flex justify-between items-center group">
                    <div><span className="text-orange-600 dark:text-orange-400">float</span>("7.3")</div><Check className="w-4 h-4 text-orange-500 opacity-0 group-hover:opacity-100 transition" />
                  </button>

                  {/* str() */}
                  <button onClick={() => runDemo('str(25)', '"25"', 'int', 'str')} className="font-mono text-sm p-3 rounded-xl border border-emerald-200 dark:border-emerald-800/30 bg-emerald-50/50 dark:bg-emerald-900/10 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition shadow-sm text-left flex justify-between items-center group">
                    <div><span className="text-emerald-600 dark:text-emerald-400">str</span>(25)</div><Check className="w-4 h-4 text-emerald-500 opacity-0 group-hover:opacity-100 transition" />
                  </button>
                  <button onClick={() => runDemo('str(3.14)', '"3.14"', 'float', 'str')} className="font-mono text-sm p-3 rounded-xl border border-emerald-200 dark:border-emerald-800/30 bg-emerald-50/50 dark:bg-emerald-900/10 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition shadow-sm text-left flex justify-between items-center group">
                    <div><span className="text-emerald-600 dark:text-emerald-400">str</span>(3.14)</div><Check className="w-4 h-4 text-emerald-500 opacity-0 group-hover:opacity-100 transition" />
                  </button>
                  
                  {/* bool() */}
                  <button onClick={() => runDemo('bool(1)', 'True', 'int', 'bool')} className="font-mono text-sm p-3 rounded-xl border border-yellow-200 dark:border-yellow-800/30 bg-yellow-50/50 dark:bg-yellow-900/10 hover:bg-yellow-100 dark:hover:bg-yellow-900/30 transition shadow-sm text-left flex justify-between items-center group">
                    <div><span className="text-yellow-600 dark:text-yellow-400">bool</span>(1)</div><Check className="w-4 h-4 text-yellow-500 opacity-0 group-hover:opacity-100 transition" />
                  </button>
                  <button onClick={() => runDemo('bool(0)', 'False', 'int', 'bool')} className="font-mono text-sm p-3 rounded-xl border border-yellow-200 dark:border-yellow-800/30 bg-yellow-50/50 dark:bg-yellow-900/10 hover:bg-yellow-100 dark:hover:bg-yellow-900/30 transition shadow-sm text-left flex justify-between items-center group">
                    <div><span className="text-yellow-600 dark:text-yellow-400">bool</span>(0)</div><Check className="w-4 h-4 text-yellow-500 opacity-0 group-hover:opacity-100 transition" />
                  </button>
                </div>

                {/* Real-world demo */}
                <button onClick={runInputDemo} className="w-full mt-2 font-mono text-sm p-3 rounded-xl border border-purple-200 dark:border-purple-800/30 bg-purple-50 hover:bg-purple-100 dark:bg-purple-900/20 dark:hover:bg-purple-900/40 transition shadow-sm text-left flex justify-between items-center group">
                  <div className="flex items-center">
                    <Layers className="w-4 h-4 mr-2 text-purple-500" />
                    <span>8️⃣ Run Real-World user <span className="text-purple-600 dark:text-purple-400">input()</span> Example</span>
                  </div>
                  <Check className="w-4 h-4 text-purple-500 opacity-0 group-hover:opacity-100 transition" />
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 h-full min-h-[350px] shadow-2xl relative overflow-hidden flex flex-col">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#a855f7 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <h3 className="font-bold text-slate-300 uppercase text-xs tracking-wider flex items-center">
                    <Terminal className="w-4 h-4 mr-2" />
                    Python Console
                  </h3>
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                  </div>
                </div>

                <div className="font-mono text-sm flex flex-col flex-1">
                  {consoleOutput.length === 0 ? (
                    <div className="text-slate-500 animate-pulse flex flex-col items-center justify-center mt-12">
                      <Terminal className="w-12 h-12 mb-4 opacity-20" />
                      <span>Click a cast operation to evaluate...</span>
                    </div>
                  ) : (
                    consoleOutput.map((line, i) => (
                      <div key={i} className={`mb-1.5 animate-fade-in ${
                          line.startsWith('>>>') ? 'text-blue-400 font-bold' :
                          line.startsWith('<class') ? 'text-orange-400 text-xs mt-1 bg-slate-800/50 p-1 rounded inline-block' :
                          line.startsWith('Enter') ? 'text-slate-300 italic' :
                          'text-emerald-300 font-bold text-lg'
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

      {/* 4. Core Castings Breakdown */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 border-b border-slate-200 dark:border-slate-700 pb-4">
          Core Casting Functions
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* int() */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 relative overflow-hidden">
            <div className="w-2 h-full bg-blue-500 absolute top-0 left-0"></div>
            <h3 className="text-xl font-bold mb-4 ml-4">4️⃣ <span className="text-blue-600 dark:text-blue-400 font-mono">int()</span></h3>
            <p className="mb-4 text-slate-600 dark:text-slate-300 ml-4">Converts a value into an integer (whole number).</p>
            <div className="ml-4">
              <CodeSnippetBlock codeSnippet={`x = int(5.8)  # 5\ny = int("10") # 10`} />
              <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-lg text-center mt-2 border border-slate-100 dark:border-slate-700">
                <div className="text-xs text-slate-400 uppercase font-bold mb-1">Visualization</div>
                <div className="font-mono text-sm">5.8 (float)</div>
                <ArrowDown className="w-4 h-4 mx-auto my-1 text-blue-500" />
                <div className="font-mono text-sm font-bold text-blue-600 dark:text-blue-400">5 (int)</div>
              </div>
            </div>
          </div>

          {/* float() */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 relative overflow-hidden">
            <div className="w-2 h-full bg-orange-500 absolute top-0 left-0"></div>
            <h3 className="text-xl font-bold mb-4 ml-4">5️⃣ <span className="text-orange-600 dark:text-orange-400 font-mono">float()</span></h3>
            <p className="mb-4 text-slate-600 dark:text-slate-300 ml-4">Converts values to decimal numbers.</p>
            <div className="ml-4">
              <CodeSnippetBlock codeSnippet={`x = float(5)     # 5.0\ny = float("7.3") # 7.3`} />
              <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-lg text-center mt-2 border border-slate-100 dark:border-slate-700">
                <div className="text-xs text-slate-400 uppercase font-bold mb-1">Visualization</div>
                <div className="font-mono text-sm">5 (integer)</div>
                <ArrowDown className="w-4 h-4 mx-auto my-1 text-orange-500" />
                <div className="font-mono text-sm font-bold text-orange-600 dark:text-orange-400">5.0 (float)</div>
              </div>
            </div>
          </div>

          {/* str() */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 relative overflow-hidden">
            <div className="w-2 h-full bg-emerald-500 absolute top-0 left-0"></div>
            <h3 className="text-xl font-bold mb-4 ml-4">6️⃣ <span className="text-emerald-600 dark:text-emerald-400 font-mono">str()</span></h3>
            <p className="mb-4 text-slate-600 dark:text-slate-300 ml-4">Converts numbers into text.</p>
            <div className="ml-4">
              <CodeSnippetBlock codeSnippet={`x = str(25)   # "25"\ny = str(3.14) # "3.14"`} />
              <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-lg text-center mt-2 border border-slate-100 dark:border-slate-700">
                <div className="text-xs text-slate-400 uppercase font-bold mb-1">Visualization</div>
                <div className="font-mono text-sm">25 (integer)</div>
                <ArrowDown className="w-4 h-4 mx-auto my-1 text-emerald-500" />
                <div className="font-mono text-sm font-bold text-emerald-600 dark:text-emerald-400">"25" (string)</div>
              </div>
            </div>
          </div>
        </div>

        {/* 7 & 9 - type() and boolean */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <FileType className="w-6 h-6 text-slate-500 mr-2" />
              7️⃣ Checking Data Type
            </h3>
            <p className="mb-4 text-slate-600 dark:text-slate-300">Python has a function called <code className="bg-slate-100 dark:bg-slate-900 px-1.5 rounded text-blue-500 font-bold py-0.5 border border-slate-200 dark:border-slate-700">type()</code>.</p>
            <CodeSnippetBlock 
              codeSnippet={`x = 10\ny = str(x)\n\nprint(type(x)) # <class 'int'>\nprint(type(y)) # <class 'str'>`} 
            />
          </div>
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <AlertTriangle className="w-6 h-6 text-yellow-500 mr-2" />
              9️⃣ Boolean Casting
            </h3>
            <p className="mb-4 text-slate-600 dark:text-slate-300">The <code className="bg-slate-100 dark:bg-slate-900 px-1.5 rounded text-yellow-500 font-bold py-0.5 border border-slate-200 dark:border-slate-700">bool()</code> function converts values into True or False.</p>
            <div className="grid grid-cols-2 gap-4">
              <CodeSnippetBlock 
                codeSnippet={`print(bool(1))\nprint(bool(0))\nprint(bool(""))\n\n# True, False, False`} 
              />
              <div className="bg-yellow-50 dark:bg-yellow-900/10 p-4 rounded-xl border border-yellow-200 dark:border-yellow-800/30">
                <h4 className="font-bold text-yellow-800 dark:text-yellow-400 mb-2 border-b border-yellow-200 dark:border-yellow-800/50 pb-2">Logic Rules:</h4>
                <ul className="text-sm space-y-2 text-yellow-900 dark:text-yellow-200 font-medium">
                  <li>Non-zero values &rarr; True</li>
                  <li>Zero value &rarr; False</li>
                  <li>Empty string &rarr; False</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* 10 - Table */}
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <h3 className="text-xl font-bold mb-6">🔟 Casting Between Types <span className="text-slate-400 font-normal uppercase text-sm ml-2">(Summary Table)</span></h3>
          <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300">
                <tr>
                  <th className="p-4 border-b dark:border-slate-700">Original Value</th>
                  <th className="p-4 border-b dark:border-slate-700">Casting Code</th>
                  <th className="p-4 border-b dark:border-slate-700">Result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="p-4 font-mono">"10" (str)</td>
                  <td className="p-4 font-mono text-purple-600 dark:text-purple-400 font-bold">int("10")</td>
                  <td className="p-4 font-mono">10</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="p-4 font-mono">5 (int)</td>
                  <td className="p-4 font-mono text-purple-600 dark:text-purple-400 font-bold">float(5)</td>
                  <td className="p-4 font-mono">5.0</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="p-4 font-mono">10 (int)</td>
                  <td className="p-4 font-mono text-purple-600 dark:text-purple-400 font-bold">str(10)</td>
                  <td className="p-4 font-mono">"10"</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="p-4 font-mono">0 (int)</td>
                  <td className="p-4 font-mono text-purple-600 dark:text-purple-400 font-bold">bool(0)</td>
                  <td className="p-4 font-mono text-rose-500 font-bold">False</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. Developer Recommendations & Tips */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
          <h2 className="text-3xl font-extrabold mb-6 flex items-center relative z-10">
            <Lightbulb className="w-8 h-8 mr-3 text-yellow-300" />
            💡 Developer Recommendations
          </h2>
          <p className="text-blue-100 mb-8 font-medium italic relative z-10 text-lg">From a Developer with 15+ years of Python experience:</p>
          
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <h3 className="font-bold text-xl mb-3">1️⃣ Always Validate Input</h3>
              <p className="text-sm text-blue-100 mb-3">Bad input causes app crashes. Always provide clear prompts.</p>
              <code className="bg-rose-900/50 p-1 rounded text-xs block font-mono mb-1 line-through text-rose-300">age = int(input())</code>
              <code className="bg-emerald-900/50 p-1 mb-1 rounded text-xs block font-mono text-emerald-300 border border-emerald-500/30">age = int(input("Enter age: "))</code>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <h3 className="font-bold text-xl mb-3">2️⃣ Avoid Unnecessary Casts</h3>
              <p className="text-sm text-blue-100 mb-3">Don't cast a type to itself. Only cast when needed.</p>
              <code className="bg-rose-900/50 p-1 rounded text-xs block font-mono mb-1 line-through text-rose-300">x = int(5)</code>
              <code className="bg-emerald-900/50 p-1 rounded text-xs block font-mono text-emerald-300 border border-emerald-500/30">x = 5</code>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <h3 className="font-bold text-xl mb-3">3️⃣ Use for Str Concat</h3>
              <p className="text-sm text-blue-100 mb-3">You MUST cast numbers to strings to combine them with text.</p>
              <code className="bg-black/30 p-2 rounded text-xs block font-mono">age = 20<br/>print("Age: " + str(age))</code>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-8 border-b border-slate-200 dark:border-slate-700 pb-4 flex items-center">
          <Target className="w-8 h-8 text-rose-500 mr-3" />
          🚀 Tips & Tricks
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-lg mb-4 text-blue-600 dark:text-blue-400">Trick 1 — Quick Cast Math</h4>
            <CodeSnippetBlock codeSnippet={`num = int("100")\nprint(num + 50)\n\n# Output: 150`} />
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-lg mb-4 text-orange-600 dark:text-orange-400">Trick 2 — Float Precision</h4>
            <CodeSnippetBlock codeSnippet={`value = float("3.5")\nprint(value * 2)\n\n# Output: 7.0`} />
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-lg mb-4 text-emerald-600 dark:text-emerald-400">Trick 3 — Boolean Check</h4>
            <CodeSnippetBlock codeSnippet={`print(bool("Python"))\n\n\n# Output: True`} />
          </div>
        </div>
      </section>

      {/* 7. Practice */}
      <section className="max-w-4xl mx-auto pb-16">
        <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 p-8 rounded-3xl border border-purple-200 dark:border-purple-700 shadow-lg relative">
          <BookOpen className="absolute top-6 right-6 w-12 h-12 text-purple-500/30" />
          <h2 className="text-2xl font-bold text-purple-900 dark:text-purple-400 mb-4 flex items-center">
            🧩 Practice Exercise (For Students)
          </h2>
          <p className="mb-4 text-purple-800 dark:text-purple-300 font-medium tracking-wide">
            Task: Write a Python program that:
          </p>
          <ul className="list-decimal list-inside space-y-2 mb-6 text-purple-900 dark:text-purple-200 font-bold bg-white/40 dark:bg-black/20 p-4 rounded-xl">
            <li>Converts <code className="bg-black/10 px-1 rounded font-normal text-sm">"50"</code> into an integer</li>
            <li>Converts <code className="bg-black/10 px-1 rounded font-normal text-sm">25</code> into a float</li>
            <li>Converts <code className="bg-black/10 px-1 rounded font-normal text-sm">100</code> into a string</li>
          </ul>
          
          <div className="bg-purple-500/10 dark:bg-purple-900/30 p-5 rounded-xl backdrop-blur-sm border border-purple-500/30 text-center max-w-sm mx-auto">
            <h4 className="font-bold text-sm uppercase tracking-wider text-purple-800 dark:text-purple-400 mb-3">Expected Output</h4>
            <div className="text-lg font-mono font-bold text-purple-700 dark:text-purple-300 bg-white/50 dark:bg-black/30 rounded py-2 shadow-inner">
              50<br/>25.0<br/>100
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PythonCasting;