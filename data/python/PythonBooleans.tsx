import React, { useState } from 'react';
import { 
  ToggleLeft, CheckCircle2, XCircle, AlertTriangle, 
  Lightbulb, BookOpen, Code, Terminal, Target,
  RefreshCw, Check, Copy, ShieldCheck, Zap,
  Layers, Lock
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
            className="p-1.5 rounded-md bg-slate-800 text-slate-400 hover:bg-emerald-600 hover:text-white transition-colors border border-slate-700"
            title="Copy code"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </div>
        <pre className="p-4 overflow-x-auto text-sm font-mono text-emerald-300 leading-relaxed">
          <code>{codeSnippet}</code>
        </pre>
      </div>
    </div>
  );
};

const PythonBooleans: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);

  const runDemo = (expression: string, result: string) => {
    const codeStr = `>>> print(${expression})\n${result}`;
    setConsoleOutput(codeStr.split('\n'));
  };

  const resetConsole = () => setConsoleOutput([]);

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-900 min-h-screen font-sans text-slate-800 dark:text-slate-200">
      
      {/* 1. Header Area */}
      <header className="max-w-4xl mx-auto text-center mb-16 pt-8">
        <div className="inline-flex items-center justify-center p-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl mb-6 shadow-sm border border-emerald-200 dark:border-emerald-800/50">
          <ToggleLeft className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Python Booleans
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Master True & False. The foundation of decision-making, logic, and conditional programming in Python.
        </p>
      </header>

      {/* 2. What is a Boolean? & Importance */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 text-emerald-500 mr-3" />
            <h2 className="text-2xl font-bold">1️⃣ What is a Boolean?</h2>
          </div>
          <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border-l-4 border-yellow-400 mb-6">
            <h4 className="font-bold flex items-center text-yellow-800 dark:text-yellow-400 mb-1">
              <span className="mr-2">📌</span> Definition
            </h4>
            <p className="text-sm text-yellow-800 dark:text-yellow-300">
              A Boolean is a data type that represents only two possible values: <code className="bg-yellow-100 dark:bg-yellow-900/50 px-1 rounded">True</code> or <code className="bg-yellow-100 dark:bg-yellow-900/50 px-1 rounded">False</code>. These values are used to represent logical conditions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6 text-center">
            <div className="bg-emerald-50 dark:bg-emerald-900/20 py-4 px-2 rounded-xl border border-emerald-100 dark:border-emerald-800">
              <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
              <span className="text-lg font-bold font-mono text-emerald-700 dark:text-emerald-300">True</span>
            </div>
            <div className="bg-rose-50 dark:bg-rose-900/20 py-4 px-2 rounded-xl border border-rose-100 dark:border-rose-800">
              <XCircle className="w-8 h-8 text-rose-500 mx-auto mb-2" />
              <span className="text-lg font-bold font-mono text-rose-700 dark:text-rose-300">False</span>
            </div>
          </div>
          <div className="flex items-start text-xs text-rose-600 dark:text-rose-400 font-bold bg-rose-50 dark:bg-rose-900/20 p-3 rounded-lg">
            <AlertTriangle className="w-4 h-4 mr-2 shrink-0" />
            <p>⚠️ Important: In Python, the first letter must be capitalized (<code className="font-mono">True</code>, not <code className="font-mono text-slate-500 line-through">true</code>).</p>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col justify-between">
          <div>
            <div className="flex items-center mb-4">
              <Zap className="w-6 h-6 text-amber-500 mr-3" />
              <h2 className="text-2xl font-bold">2️⃣ Why Booleans?</h2>
            </div>
            <p className="mb-4 text-slate-600 dark:text-slate-300">
              Booleans help programs make decisions. Programs use Boolean values to decide what action to take next based on logic.
            </p>
            <h4 className="font-bold text-slate-700 dark:text-slate-300 mb-3 text-sm uppercase">Example Situations:</h4>
            <ul className="space-y-3">
              <li className="flex items-center bg-slate-50 dark:bg-slate-900 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
                <Lock className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
                <span className="text-sm font-medium">Is the user logged in?</span>
              </li>
              <li className="flex items-center bg-slate-50 dark:bg-slate-900 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
                <ShieldCheck className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                <span className="text-sm font-medium">Is the password correct?</span>
              </li>
              <li className="flex items-center bg-slate-50 dark:bg-slate-900 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
                <Code className="w-5 h-5 text-blue-500 mr-3 shrink-0" />
                <span className="text-sm font-medium">Is a number greater than another?</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Interactive Lab Area */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center">
            <Terminal className="w-8 h-8 mr-3 text-emerald-500" />
            Interactive Boolean Lab
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
                Run Expressions
              </h3>

              <div className="space-y-4">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Comparison Operators</h4>
                <div className="grid grid-cols-2 gap-3">
                  <button onClick={() => runDemo('10 > 5', 'True')} className="font-mono text-sm p-3 rounded-xl border border-emerald-200 dark:border-emerald-800/30 bg-emerald-50/50 dark:bg-emerald-900/10 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition shadow-sm text-left flex justify-between items-center group">
                    <span>10 &gt; 5</span><Check className="w-4 h-4 text-emerald-500 opacity-0 group-hover:opacity-100 transition" />
                  </button>
                  <button onClick={() => runDemo('3 == 8', 'False')} className="font-mono text-sm p-3 rounded-xl border border-rose-200 dark:border-rose-800/30 bg-rose-50/50 dark:bg-rose-900/10 hover:bg-rose-100 dark:hover:bg-rose-900/30 transition shadow-sm text-left flex justify-between items-center group">
                    <span>3 == 8</span><Check className="w-4 h-4 text-rose-500 opacity-0 group-hover:opacity-100 transition" />
                  </button>
                  <button onClick={() => runDemo('5 != 3', 'True')} className="font-mono text-sm p-3 rounded-xl border border-emerald-200 dark:border-emerald-800/30 bg-emerald-50/50 dark:bg-emerald-900/10 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition shadow-sm text-left flex justify-between items-center group">
                    <span>5 != 3</span><Check className="w-4 h-4 text-emerald-500 opacity-0 group-hover:opacity-100 transition" />
                  </button>
                  <button onClick={() => runDemo('7 <= 2', 'False')} className="font-mono text-sm p-3 rounded-xl border border-rose-200 dark:border-rose-800/30 bg-rose-50/50 dark:bg-rose-900/10 hover:bg-rose-100 dark:hover:bg-rose-900/30 transition shadow-sm text-left flex justify-between items-center group">
                    <span>7 &lt;= 2</span><Check className="w-4 h-4 text-rose-500 opacity-0 group-hover:opacity-100 transition" />
                  </button>
                </div>

                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-6 pt-4 border-t border-slate-100 dark:border-slate-700">Logical & Values</h4>
                <div className="grid grid-cols-2 gap-3">
                  <button onClick={() => runDemo('bool("")', 'False')} className="font-mono text-sm p-3 rounded-xl border border-blue-200 dark:border-blue-800/30 bg-blue-50/50 dark:bg-blue-900/10 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition shadow-sm text-left flex justify-between items-center group">
                    <span>bool("")</span><Check className="w-4 h-4 text-blue-500 opacity-0 group-hover:opacity-100 transition" />
                  </button>
                  <button onClick={() => runDemo('bool("Hello")', 'True')} className="font-mono text-sm p-3 rounded-xl border border-blue-200 dark:border-blue-800/30 bg-blue-50/50 dark:bg-blue-900/10 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition shadow-sm text-left flex justify-between items-center group">
                    <span>bool("Hello")</span><Check className="w-4 h-4 text-blue-500 opacity-0 group-hover:opacity-100 transition" />
                  </button>
                  <button onClick={() => runDemo('True and False', 'False')} className="font-mono text-sm p-3 rounded-xl border border-purple-200 dark:border-purple-800/30 bg-purple-50/50 dark:bg-purple-900/10 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition shadow-sm text-left flex justify-between items-center group">
                    <span>True and False</span><Check className="w-4 h-4 text-purple-500 opacity-0 group-hover:opacity-100 transition" />
                  </button>
                  <button onClick={() => runDemo('not True', 'False')} className="font-mono text-sm p-3 rounded-xl border border-purple-200 dark:border-purple-800/30 bg-purple-50/50 dark:bg-purple-900/10 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition shadow-sm text-left flex justify-between items-center group">
                    <span>not True</span><Check className="w-4 h-4 text-purple-500 opacity-0 group-hover:opacity-100 transition" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 h-full min-h-[350px] shadow-2xl relative overflow-hidden flex flex-col">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
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
                      <span>Click an expression to evaluate...</span>
                    </div>
                  ) : (
                    consoleOutput.map((line, i) => (
                      <div key={i} className={`mb-1.5 animate-fade-in ${
                          line.startsWith('>>>') ? 'text-blue-400 font-bold' :
                          line === 'True' ? 'text-emerald-400 font-bold text-lg' :
                          line === 'False' ? 'text-rose-400 font-bold text-lg' :
                          'text-emerald-300'
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

      {/* 4. Comparisons & bool() */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 border-b border-slate-200 dark:border-slate-700 pb-4">
          Expressions & Operators
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold mb-4">4️⃣ Boolean Expressions</h3>
              <p className="mb-4 text-slate-600 dark:text-slate-300">A Boolean expression is a comparison that returns True or False.</p>
              <CodeSnippetBlock 
                codeSnippet={`print(10 > 5) # True\nprint(3 == 8) # False`} 
              />
              
              <h3 className="text-xl font-bold mb-4 mt-8">5️⃣ Comparison Operators</h3>
              <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
                <table className="min-w-full text-left text-sm">
                  <thead className="bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 uppercase text-xs tracking-wider">
                    <tr>
                      <th className="p-3 border-b dark:border-slate-700">Operator</th>
                      <th className="p-3 border-b dark:border-slate-700">Meaning</th>
                      <th className="p-3 border-b dark:border-slate-700">Example</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50"><td className="p-3 font-mono text-emerald-600 font-bold">==</td><td className="p-3">Equal to</td><td className="p-3 font-mono">5 == 5</td></tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50"><td className="p-3 font-mono text-emerald-600 font-bold">!=</td><td className="p-3">Not equal</td><td className="p-3 font-mono">5 != 3</td></tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50"><td className="p-3 font-mono text-emerald-600 font-bold">&gt;</td><td className="p-3">Greater than</td><td className="p-3 font-mono">10 &gt; 3</td></tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50"><td className="p-3 font-mono text-emerald-600 font-bold">&lt;</td><td className="p-3">Less than</td><td className="p-3 font-mono">4 &lt; 9</td></tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50"><td className="p-3 font-mono text-emerald-600 font-bold">&gt;=</td><td className="p-3">Greater or equal</td><td className="p-3 font-mono">7 &gt;= 7</td></tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50"><td className="p-3 font-mono text-emerald-600 font-bold">&lt;=</td><td className="p-3">Less or equal</td><td className="p-3 font-mono">5 &lt;= 2</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold mb-4">6️⃣ Booleans in Conditions</h3>
              <p className="mb-4 text-slate-600 dark:text-slate-300">Booleans are mainly used in <code className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-1.5 py-0.5 rounded text-sm text-blue-500">if</code> statements for decision making.</p>
              <CodeSnippetBlock 
                codeSnippet={`age = 18\n\nif age >= 18:\n    print("You are eligible to vote")\n    \n# Output:\n# You are eligible to vote`} 
              />
              <div className="mt-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl font-mono text-sm border-l-4 border-indigo-400">
                <span className="text-slate-500 block mb-2">Visualization: Condition → age &gt;= 18</span>
                <span className="text-emerald-500 block font-bold mb-1">True  → Execute code</span>
                <span className="text-rose-500 block font-bold">False → Skip code</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold mb-4">7️⃣ The bool() Function</h3>
              <p className="mb-4 text-slate-600 dark:text-slate-300">Python has a built-in function called <code className="bg-slate-100 dark:bg-slate-900 px-1.5 rounded">bool()</code>. It converts values into True or False.</p>
              <CodeSnippetBlock 
                codeSnippet={`print(bool(1))       # True\nprint(bool(0))       # False\nprint(bool("Hello")) # True`} 
              />
              
              <h3 className="text-xl font-bold mb-4 mt-8 flex items-center">
                <XCircle className="w-6 h-6 mr-2 text-rose-500" /> 8️⃣ Values That Return False
              </h3>
              <p className="mb-4 text-slate-600 dark:text-slate-300">These values become False when converted to Boolean (often called "falsy" values).</p>
              
              <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
                <table className="min-w-full text-left text-sm">
                  <thead className="bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300">
                    <tr>
                      <th className="p-3 border-b dark:border-slate-700">Value</th>
                      <th className="p-3 border-b dark:border-slate-700">Result</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-rose-50/30 dark:bg-rose-900/10">
                    <tr><td className="p-3 font-mono font-bold">0</td><td className="p-3 text-rose-500 font-bold">False</td></tr>
                    <tr><td className="p-3 font-mono font-bold text-slate-500">None</td><td className="p-3 text-rose-500 font-bold">False</td></tr>
                    <tr><td className="p-3 font-mono font-bold">"" <span className="text-slate-400 font-normal text-xs">(empty string)</span></td><td className="p-3 text-rose-500 font-bold">False</td></tr>
                    <tr><td className="p-3 font-mono font-bold">[] <span className="text-slate-400 font-normal text-xs">(empty list)</span></td><td className="p-3 text-rose-500 font-bold">False</td></tr>
                    <tr><td className="p-3 font-mono font-bold">&#123;&#125; <span className="text-slate-400 font-normal text-xs">(empty dictionary)</span></td><td className="p-3 text-rose-500 font-bold">False</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Layers className="w-6 h-6 text-purple-500 mr-2" />
                9️⃣ Logical Operators
              </h3>
              <p className="mb-4 text-slate-600 dark:text-slate-300">Logical operators combine multiple Boolean expressions.</p>
              
              <div className="space-y-4">
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                  <span className="font-mono text-purple-600 dark:text-purple-400 font-bold bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">and</span>
                  <span className="text-sm ml-3 text-slate-600 dark:text-slate-300">Both conditions must be <strong className="text-emerald-500">True</strong></span>
                  <div className="mt-2 text-xs font-mono text-slate-500 block">print(age &gt; 18 and citizen)</div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                  <span className="font-mono text-purple-600 dark:text-purple-400 font-bold bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">or</span>
                  <span className="text-sm ml-3 text-slate-600 dark:text-slate-300">At least one condition must be <strong className="text-emerald-500">True</strong></span>
                  <div className="mt-2 text-xs font-mono text-slate-500 block">print(5 &gt; 10 or 10 &gt; 5) # True</div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                  <span className="font-mono text-purple-600 dark:text-purple-400 font-bold bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">not</span>
                  <span className="text-sm ml-3 text-slate-600 dark:text-slate-300">Reverses the result</span>
                  <div className="mt-2 text-xs font-mono text-slate-500 block">print(not True) # False</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Real World */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-blue-50 dark:bg-blue-900/10 p-8 rounded-3xl shadow-sm border border-blue-100 dark:border-blue-800/30 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-4 flex items-center text-blue-800 dark:text-blue-400">
              🔟 Real World Example
            </h3>
            <p className="mb-4 text-blue-900 dark:text-blue-200">
              Login verification system checking both username and password simultaneously using the <code className="font-mono font-bold">and</code> operator.
            </p>
            <CodeSnippetBlock 
              codeSnippet={`username = "admin"\npassword = "1234"\n\nif username == "admin" and password == "1234":\n    print("Login Successful")\nelse:\n    print("Login Failed")\n    \n# Output:\n# Login Successful`} 
            />
          </div>
          <div className="w-full md:w-1/3 p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 text-center relative overflow-hidden">
            <h4 className="font-bold text-slate-500 uppercase text-xs tracking-wider mb-6">Boolean Logic Visualization</h4>
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 dark:bg-blue-900/50 px-4 py-2 rounded-lg font-mono font-bold text-blue-800 dark:text-blue-200 mb-2 border border-blue-200 dark:border-blue-700">10 &gt; 5</div>
              <div className="w-0.5 h-6 bg-slate-300 dark:bg-slate-600"></div>
              <div className="text-xs text-slate-400 uppercase font-bold tracking-widest my-1">Returns</div>
              <div className="w-0.5 h-6 bg-slate-300 dark:bg-slate-600"></div>
              <div className="bg-emerald-100 dark:bg-emerald-900/50 px-6 py-3 rounded-xl font-bold text-emerald-600 dark:text-emerald-400 mt-2 shadow-inner border-2 border-emerald-400 dark:border-emerald-600 animate-pulse">True</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Developer Recommendations & Tips */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-r from-teal-500 to-emerald-600 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
          <h2 className="text-3xl font-extrabold mb-6 flex items-center relative z-10">
            <Lightbulb className="w-8 h-8 mr-3 text-yellow-300" />
            💡 Developer Recommendations
          </h2>
          <p className="text-teal-100 mb-8 font-medium italic relative z-10 text-lg">From a Developer with 15+ years of Python experience:</p>
          
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <h3 className="font-bold text-xl mb-3">1️⃣ Use Booleans for Flags</h3>
              <p className="text-sm text-teal-100 mb-3">This makes your code clean, readable, and intent-clear.</p>
              <code className="bg-black/30 p-2 rounded text-xs block font-mono">is_logged_in = True<br/>is_admin = False</code>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <h3 className="font-bold text-xl mb-3 flex items-center">2️⃣ Avoid comparing to True</h3>
              <p className="text-sm text-teal-100 mb-3">Instead of using <span className="text-rose-300 font-mono">== True</span>, use the variable directly. It's cleaner.</p>
              <code className="bg-rose-900/50 p-1 rounded text-xs block font-mono mb-1 line-through text-rose-300 border border-rose-500/30">if login == True:</code>
              <code className="bg-emerald-900/50 p-1 rounded text-xs block font-mono text-emerald-300 border border-emerald-500/30">if login:</code>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <h3 className="font-bold text-xl mb-3">3️⃣ Return Booleans in Functions</h3>
              <p className="text-sm text-teal-100 mb-3">Functions that evaluate logic should return the condition directly.</p>
              <code className="bg-black/30 p-2 rounded text-xs block font-mono">def is_even(num):<br/>  return num % 2 == 0</code>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-8 border-b border-slate-200 dark:border-slate-700 pb-4 flex items-center">
          <Zap className="w-8 h-8 text-yellow-500 mr-3" />
          🚀 Tips & Tricks
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-lg mb-4 text-blue-600 dark:text-blue-400">Trick 1 — Check Empty List</h4>
            <p className="text-sm text-slate-500 mb-4">Empty lists evaluate to False. Use <code className="font-mono">not</code> to check!</p>
            <CodeSnippetBlock codeSnippet={`items = []\n\nif not items:\n    print("List is empty")\n\n# Output:\n# List is empty`} />
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-lg mb-4 text-orange-600 dark:text-orange-400">Trick 2 — Short Print Check</h4>
            <p className="text-sm text-slate-500 mb-4">Print the condition directly to see the Boolean result instantly.</p>
            <CodeSnippetBlock codeSnippet={`age = 20\n\nprint(age > 18)\n\n# Output:\n# True`} />
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-lg mb-4 text-purple-600 dark:text-purple-400">Trick 3 — Booleans in Loops</h4>
            <p className="text-sm text-slate-500 mb-4">Use a Boolean flag to control a while loop's execution state.</p>
            <CodeSnippetBlock codeSnippet={`running = True\nwhile running:\n    print("Running")\n    running = False`} />
          </div>
        </div>
      </section>

      {/* 7. Practice */}
      <section className="max-w-4xl mx-auto pb-16">
        <div className="bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 p-8 rounded-3xl border border-indigo-200 dark:border-indigo-700 shadow-lg relative">
          <Target className="absolute top-6 right-6 w-12 h-12 text-indigo-500/30" />
          <h2 className="text-2xl font-bold text-indigo-900 dark:text-indigo-400 mb-4 flex items-center">
            🧩 Practice Exercise (For Students)
          </h2>
          <p className="mb-4 text-indigo-800 dark:text-indigo-300 font-medium tracking-wide">
            Task: Create a Python program that:
          </p>
          <ul className="list-decimal list-inside space-y-2 mb-6 text-indigo-900 dark:text-indigo-200 font-bold bg-white/40 dark:bg-black/20 p-4 rounded-xl">
            <li>Takes a number</li>
            <li>Checks if it is greater than 50</li>
          </ul>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/60 dark:bg-black/40 p-5 rounded-xl backdrop-blur-sm border border-white/50 dark:border-white/10">
              <h4 className="font-bold text-sm uppercase tracking-wider text-indigo-800 dark:text-indigo-400 mb-3 flex items-center"><Code className="w-4 h-4 mr-2" /> Example Code</h4>
              <CodeSnippetBlock codeSnippet={`num = 60\n\nprint(num > 50)`} />
            </div>
            <div className="bg-emerald-500/10 dark:bg-emerald-900/30 p-5 rounded-xl backdrop-blur-sm border border-emerald-500/30 flex flex-col justify-center items-center">
              <h4 className="font-bold text-sm uppercase tracking-wider text-emerald-800 dark:text-emerald-400 mb-3">Expected Output</h4>
              <div className="text-3xl font-mono font-bold text-emerald-600 dark:text-emerald-400">True</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PythonBooleans;