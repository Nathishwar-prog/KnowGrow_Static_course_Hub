import React, { useState } from 'react';
import { 
  Box, BookOpen, Code, Terminal, Target,
  RefreshCw, Check, Copy, AlertTriangle, Lightbulb,
  CheckCircle2, XCircle, Zap, Globe, Database, Layers,
  PlayCircle, ArrowRight, Cog, Layout
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
            className="p-1.5 rounded-md bg-slate-800 text-slate-400 hover:bg-indigo-600 hover:text-white transition-colors border border-slate-700"
            title="Copy code"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </div>
        <pre className="p-4 overflow-x-auto text-sm font-mono text-indigo-300 leading-relaxed">
          <code>{codeSnippet}</code>
        </pre>
      </div>
    </div>
  );
};

const PythonFunctions: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);

  const runDemo = (expression: string, result: string, multiline: boolean = false) => {
    if (multiline) {
        setConsoleOutput([`>>> ${expression}`, ...result.split('\\n')]);
    } else {
        const codeStr = `>>> ${expression}\n${result}`;
        setConsoleOutput(codeStr.split('\n'));
    }
  };

  const resetConsole = () => setConsoleOutput([]);

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-900 min-h-screen font-sans text-slate-800 dark:text-slate-200">
      
      {/* 1. Header Area */}
      <header className="max-w-4xl mx-auto text-center mb-16 pt-8">
        <div className="inline-flex items-center justify-center p-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl mb-6 shadow-sm border border-indigo-200 dark:border-indigo-800/50">
          <Box className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Python Functions
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          A reusable block of code that performs a specific task. Learn to write modular, organized, and perfectly structured Python programs.
        </p>
      </header>

      {/* 2. Introduction & Importance */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col">
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 text-indigo-500 mr-3" />
            <h2 className="text-2xl font-bold">1️⃣ What is a Function?</h2>
          </div>
          <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border-l-4 border-indigo-400 mb-6 flex-1">
            <h4 className="font-bold flex items-center text-indigo-800 dark:text-indigo-400 mb-2">
              <span className="mr-2">☕</span> Real-World Example
            </h4>
            <p className="text-sm text-indigo-800 dark:text-indigo-300 mb-4 leading-relaxed">
              Think of a function like a coffee machine. You press a button (call the function), and the machine performs several steps internally to produce coffee (execute code).
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Instead of writing the same code multiple times, we place the logic inside a function and call it whenever needed.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="bg-emerald-50 dark:bg-emerald-900/20 py-3 px-2 rounded-xl border border-emerald-100 dark:border-emerald-800">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto mb-1" />
              <span className="text-sm font-bold text-emerald-700 dark:text-emerald-300">Reduce Repetition</span>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 py-3 px-2 rounded-xl border border-blue-100 dark:border-blue-800">
              <Layers className="w-5 h-5 text-blue-500 mx-auto mb-1" />
              <span className="text-sm font-bold text-blue-700 dark:text-blue-300">Modular Code</span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-4">
            <Zap className="w-6 h-6 text-amber-500 mr-3" />
            <h2 className="text-2xl font-bold">2️⃣ Why Are They Important?</h2>
          </div>
          <p className="mb-4 text-slate-600 dark:text-slate-300">
            Without functions, large programs become messy and difficult to manage. Look at the difference:
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <h4 className="font-bold text-rose-500 dark:text-rose-400 mb-2 text-xs uppercase flex items-center">
                <XCircle className="w-3 h-3 mr-1" /> Without Function
              </h4>
              <div className="bg-slate-900 p-3 rounded-xl border border-slate-700 font-mono text-xs text-rose-300 h-full">
                print("Hello Issac")<br/>
                print("Welcome")<br/>
                <br/>
                print("Hello Issac")<br/>
                print("Welcome")<br/>
                <br/>
                print("Hello Issac")<br/>
                print("Welcome")
              </div>
            </div>
            <div>
              <h4 className="font-bold text-emerald-500 dark:text-emerald-400 mb-2 text-xs uppercase flex items-center">
                <CheckCircle2 className="w-3 h-3 mr-1" /> With Function
              </h4>
              <div className="bg-slate-900 p-3 rounded-xl border border-slate-700 font-mono text-xs text-emerald-300 h-full">
                def welcome():<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;print("Hello Issac")<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;print("Welcome")<br/>
                <br/>
                welcome()<br/>
                welcome()<br/>
                welcome()
              </div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6 mt-4">
            <span className="flex items-center text-xs font-bold text-slate-500"><Check className="w-4 h-4 text-emerald-500 mr-1" /> Cleaner</span>
            <span className="flex items-center text-xs font-bold text-slate-500"><Check className="w-4 h-4 text-emerald-500 mr-1" /> Reusable</span>
            <span className="flex items-center text-xs font-bold text-slate-500"><Check className="w-4 h-4 text-emerald-500 mr-1" /> Easier Maintenance</span>
          </div>
        </div>
      </section>

      {/* 3. Interactive Lab Area */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center">
            <Terminal className="w-8 h-8 mr-3 text-indigo-500" />
            Interactive Function Lab
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
                Call the Functions
              </h3>

              <div className="space-y-4">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Basic Functions</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button onClick={() => runDemo('greet()', 'Hello, Welcome to Python!')} className="font-mono text-sm p-3 rounded-xl border border-indigo-200 dark:border-indigo-800/30 bg-indigo-50/50 dark:bg-indigo-900/10 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition shadow-sm text-left flex justify-between items-center group">
                    <span>greet()</span><PlayCircle className="w-4 h-4 text-indigo-500 opacity-0 group-hover:opacity-100 transition" />
                  </button>
                  <button onClick={() => runDemo('greet("Issac")', 'Hello Issac')} className="font-mono text-sm p-3 rounded-xl border border-blue-200 dark:border-blue-800/30 bg-blue-50/50 dark:bg-blue-900/10 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition shadow-sm text-left flex justify-between items-center group">
                    <span>greet("Issac")</span><PlayCircle className="w-4 h-4 text-blue-500 opacity-0 group-hover:opacity-100 transition" />
                  </button>
                </div>

                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-6 pt-4 border-t border-slate-100 dark:border-slate-700">Functions with Return Values</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button onClick={() => runDemo('add(5, 3)', '8')} className="font-mono text-sm p-3 rounded-xl border border-emerald-200 dark:border-emerald-800/30 bg-emerald-50/50 dark:bg-emerald-900/10 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition shadow-sm text-left flex justify-between items-center group">
                    <span>sum = add(5, 3)<br/>print(sum)</span><PlayCircle className="w-4 h-4 text-emerald-500 opacity-0 group-hover:opacity-100 transition" />
                  </button>
                  <button onClick={() => runDemo('len([1, 2, 3, 4])', '4')} className="font-mono text-sm p-3 rounded-xl border border-emerald-200 dark:border-emerald-800/30 bg-emerald-50/50 dark:bg-emerald-900/10 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition shadow-sm text-left flex justify-between items-center group">
                    <span>len([1,2,3,4])</span><PlayCircle className="w-4 h-4 text-emerald-500 opacity-0 group-hover:opacity-100 transition" />
                  </button>
                </div>

                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-6 pt-4 border-t border-slate-100 dark:border-slate-700">Advanced</h4>
                <div className="grid grid-cols-1 gap-3">
                  <button onClick={() => runDemo('calculator(10, 5)', 'Addition: 15\\nSubtraction: 5\\nMultiplication: 50\\nDivision: 2.0', true)} className="font-mono text-sm p-3 rounded-xl border border-purple-200 dark:border-purple-800/30 bg-purple-50/50 dark:bg-purple-900/10 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition shadow-sm text-left flex justify-between items-center group">
                    <span>calculator(10, 5)</span><PlayCircle className="w-4 h-4 text-purple-500 opacity-0 group-hover:opacity-100 transition" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 h-full min-h-[350px] shadow-2xl relative overflow-hidden flex flex-col">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
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
                          line.startsWith('>>>') ? 'text-indigo-400 font-bold' :
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

      {/* 4. Deep Dive into Functions */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 border-b border-slate-200 dark:border-slate-700 pb-4">
          Syntax & Structure
        </h2>
        
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 mb-8">
          <h3 className="text-xl font-bold mb-6">3️⃣ Syntax of Python Function</h3>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="mb-4 text-slate-600 dark:text-slate-300">Basic syntax to define a function:</p>
              <CodeSnippetBlock 
                codeSnippet={`def function_name(parameters):\n    # block of code\n    return result`} 
                title="Function Blueprint"
              />
            </div>
            
            <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300">
                  <tr>
                    <th className="p-3 border-b dark:border-slate-700 font-bold">Component</th>
                    <th className="p-3 border-b dark:border-slate-700 font-bold">Meaning</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50"><td className="p-3 font-mono text-indigo-500 font-bold">def</td><td className="p-3">Keyword used to define a function</td></tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50"><td className="p-3 font-mono font-bold text-slate-600 dark:text-slate-300">function_name</td><td className="p-3">Name of the function</td></tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50"><td className="p-3 font-mono font-bold text-purple-500">parameters</td><td className="p-3">Inputs passed to the function</td></tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50"><td className="p-3 font-mono text-rose-500 font-bold">return</td><td className="p-3">Sends result back to caller</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h3 className="text-lg font-bold mb-4 flex items-center">4️⃣ Creating & Calling</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">You define the function once, and call it by its name.</p>
            <CodeSnippetBlock 
                codeSnippet={`def greet():\n    print("Hello, Welcome!")\n\n# Calling the function\ngreet()`} 
                title="Basic Function"
            />
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h3 className="text-lg font-bold mb-4 flex items-center">5️⃣ With Parameters</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">Parameters allow functions to accept input values.</p>
            <CodeSnippetBlock 
                codeSnippet={`def greet(name):\n    print("Hello", name)\n\ngreet("Issac")\ngreet("John")`} 
                title="Input Parameters"
            />
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h3 className="text-lg font-bold mb-4 flex items-center">6️⃣ Return Value</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">Functions can return results using <code className="font-mono text-rose-400">return</code>.</p>
            <CodeSnippetBlock 
                codeSnippet={`def add(a, b):\n    result = a + b\n    return result\n\nprint(add(5, 3))`} 
                title="Returning Data"
            />
          </div>
        </div>

        <div className="bg-indigo-50 dark:bg-indigo-900/10 p-8 rounded-3xl shadow-sm border border-indigo-100 dark:border-indigo-800/30 flex flex-col md:flex-row gap-8 items-center justify-between mb-8">
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-4 flex items-center text-indigo-800 dark:text-indigo-400">
              7️⃣ Visual Flow of Function Execution
            </h3>
            <p className="mb-4 text-indigo-900 dark:text-indigo-200">
              Once a function is called, python stops executing the main program, runs the code inside the function, and then returns to where it left off.
            </p>
          </div>
          <div className="w-full md:w-2/3 p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 text-center relative overflow-hidden">
            <div className="flex flex-col items-center">
              <div className="bg-slate-100 dark:bg-slate-900 px-4 py-2 rounded-lg font-mono font-bold text-slate-800 dark:text-slate-200 mb-2 border border-slate-300 dark:border-slate-700 w-48 shadow-sm">Function Call <br/><span className="text-indigo-500 font-bold">add(5, 3)</span></div>
              <ArrowRight className="w-6 h-6 text-slate-400 rotate-90 my-1" />
              <div className="bg-blue-100 dark:bg-blue-900/50 px-4 py-2 rounded-lg font-mono font-bold text-blue-800 dark:text-blue-200 mb-2 border border-blue-200 dark:border-blue-700 w-48 shadow-sm">Execute Code<br/><span className="text-indigo-500 font-bold">5 + 3</span></div>
              <ArrowRight className="w-6 h-6 text-slate-400 rotate-90 my-1" />
              <div className="bg-emerald-100 dark:bg-emerald-900/50 px-6 py-3 rounded-xl font-bold text-emerald-600 dark:text-emerald-400 shadow-inner border-2 border-emerald-400 dark:border-emerald-600 w-48">Return 8</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Types & Advanced Concepts */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 border-b border-slate-200 dark:border-slate-700 pb-4">
          Advanced Function Features
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Cog className="w-6 h-6 text-slate-500 mr-2" /> 8️⃣ Types of Functions
            </h3>
            <p className="mb-4 text-slate-600 dark:text-slate-300">Python has two main types of functions:</p>
            
            <div className="space-y-4">
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                <span className="font-bold text-emerald-600 dark:text-emerald-400">1. Built-in Functions</span>
                <p className="text-sm mt-1 mb-2 text-slate-600 dark:text-slate-300">Already provided by Python. Like <code className="font-mono bg-slate-200 dark:bg-slate-800 px-1 rounded">print()</code>, <code className="font-mono bg-slate-200 dark:bg-slate-800 px-1 rounded">len()</code>, <code className="font-mono bg-slate-200 dark:bg-slate-800 px-1 rounded">sum()</code>.</p>
                <CodeSnippetBlock codeSnippet={`numbers = [1, 2, 3, 4]\nprint(len(numbers)) # Output: 4`} />
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                <span className="font-bold text-blue-600 dark:text-blue-400">2. User Defined Functions</span>
                <p className="text-sm mt-1 mb-2 text-slate-600 dark:text-slate-300">Functions created by the programmer.</p>
                <CodeSnippetBlock codeSnippet={`def square(num):\n    return num * num`} />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold mb-4">9️⃣ Default Parameters</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">Assign default values to parameters to make them optional.</p>
              <CodeSnippetBlock 
                codeSnippet={`def greet(name="Guest"):\n    print("Hello", name)\n\ngreet()         # Hello Guest\ngreet("Issac")  # Hello Issac`} 
              />
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold mb-4">🔟 Multiple Arguments</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">Functions can take more than one argument separated by commas.</p>
              <CodeSnippetBlock 
                codeSnippet={`def student(name, age, course):\n    print(name, age, course)\n\nstudent("Issac", 19, "Data Science")`} 
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-purple-50 dark:bg-purple-900/10 p-8 rounded-2xl shadow-sm border border-purple-200 dark:border-purple-800/30">
              <h3 className="text-xl font-bold mb-4 text-purple-800 dark:text-purple-400">1️⃣1️⃣ Lambda Functions</h3>
              <p className="text-sm text-purple-900 dark:text-purple-300 mb-4">A lambda function is a small anonymous function defined without a name.</p>
              <CodeSnippetBlock 
                codeSnippet={`square = lambda x: x * x\nprint(square(5)) # Output: 25`} 
              />
            </div>

            <div className="bg-emerald-50 dark:bg-emerald-900/10 p-8 rounded-2xl shadow-sm border border-emerald-200 dark:border-emerald-800/30">
              <h3 className="text-xl font-bold mb-4 text-emerald-800 dark:text-emerald-400">1️⃣2️⃣ Calculator Example</h3>
              <p className="text-sm text-emerald-900 dark:text-emerald-300 mb-4">Putting it all together in a practical mini-calculator.</p>
              <CodeSnippetBlock 
                codeSnippet={`def calculator(a, b):\n    print("Add:", a+b)\n    print("Sub:", a-b)\n    print("Mul:", a*b)\n    print("Div:", a/b)\n\ncalculator(10, 5)`} 
              />
            </div>
        </div>
      </section>

      {/* 6. Developer Tips & Best Practices */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
          <h2 className="text-3xl font-extrabold mb-6 flex items-center relative z-10">
            <Lightbulb className="w-8 h-8 mr-3 text-yellow-300" />
            💡 Developer Tips (15+ Years Exp)
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <h3 className="font-bold text-xl mb-3">One Function = One Job</h3>
              <p className="text-sm text-indigo-100 mb-2">Avoid large functions that do everything.</p>
              <div className="bg-black/30 p-2 rounded text-xs font-mono mb-2 border-l-2 border-rose-400"><span className="text-rose-300">Bad:</span> process_data()</div>
              <div className="bg-black/30 p-2 rounded text-xs font-mono border-l-2 border-emerald-400"><span className="text-emerald-300">Good:</span> load_data(), train(), save()</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <h3 className="font-bold text-xl mb-3">Self-Explanatory Names</h3>
              <p className="text-sm text-indigo-100 mb-2">Don't use vague names like f1() or do().</p>
              <div className="bg-black/30 p-2 rounded text-xs font-mono mb-2 border-l-2 border-rose-400"><span className="text-rose-300">Bad:</span> run() or process()</div>
              <div className="bg-black/30 p-2 rounded text-xs font-mono border-l-2 border-emerald-400"><span className="text-emerald-300">Good:</span> calculate_salary()</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <h3 className="font-bold text-xl mb-3">Reusable Logic</h3>
              <p className="text-sm text-indigo-100 mb-2">The Rule of Three: If you repeat same code 3 times, convert it into a function.</p>
              <p className="text-sm text-indigo-200 mt-2 font-bold italic">Small functions are easier to maintain.</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                <h2 className="text-2xl font-bold mb-6 flex items-center border-b border-slate-200 dark:border-slate-700 pb-4">
                    <CheckCircle2 className="w-8 h-8 text-emerald-500 mr-3" />
                    1️⃣3️⃣ Best Practices
                </h2>
                <ul className="space-y-4">
                    <li className="flex items-start text-slate-700 dark:text-slate-300"><Check className="w-5 h-5 text-emerald-500 mr-2 shrink-0" /> ✔ Use meaningful function names</li>
                    <li className="flex items-start text-slate-700 dark:text-slate-300"><Check className="w-5 h-5 text-emerald-500 mr-2 shrink-0" /> ✔ Keep functions short and focused</li>
                    <li className="flex items-start text-slate-700 dark:text-slate-300"><Check className="w-5 h-5 text-emerald-500 mr-2 shrink-0" /> ✔ Avoid too many parameters (keep it under 4 if possible)</li>
                    <li className="flex items-start text-slate-700 dark:text-slate-300"><Check className="w-5 h-5 text-emerald-500 mr-2 shrink-0" /> ✔ Write reusable functions</li>
                    <li className="flex items-start text-slate-700 dark:text-slate-300"><Check className="w-5 h-5 text-emerald-500 mr-2 shrink-0" /> ✔ Add comments or documentation (docstrings)</li>
                </ul>
                <div className="mt-6">
                    <CodeSnippetBlock codeSnippet={`def calculate_average(marks):\n    """Returns average marks of a student"""\n    return sum(marks)/len(marks)`} />
                </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                <h2 className="text-2xl font-bold mb-6 flex items-center border-b border-slate-200 dark:border-slate-700 pb-4">
                    <AlertTriangle className="w-8 h-8 text-rose-500 mr-3" />
                    1️⃣4️⃣ Beginner Mistakes
                </h2>
                <div className="space-y-6">
                    <div className="bg-rose-50 dark:bg-rose-900/10 p-5 rounded-xl border border-rose-100 dark:border-rose-800/30">
                        <h4 className="font-bold font-sm text-rose-800 dark:text-rose-400 mb-3">❌ Forgetting parentheses to call it</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <div><span className="text-xs text-rose-600 block mb-1">Wrong:</span> <code className="bg-rose-100 dark:bg-rose-900/50 p-1 px-2 rounded text-rose-800 dark:text-rose-300 block font-mono">greet</code></div>
                            <div><span className="text-xs text-emerald-600 block mb-1">Correct:</span> <code className="bg-emerald-100 dark:bg-emerald-900/50 p-1 px-2 rounded text-emerald-800 dark:text-emerald-300 block font-mono">greet()</code></div>
                        </div>
                    </div>
                    
                    <div className="bg-rose-50 dark:bg-rose-900/10 p-5 rounded-xl border border-rose-100 dark:border-rose-800/30">
                        <h4 className="font-bold font-sm text-rose-800 dark:text-rose-400 mb-3">❌ Forgetting return statement</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <span className="text-xs text-rose-600 block mb-1">Wrong:</span> 
                                <div className="bg-rose-100 dark:bg-rose-900/50 p-2 rounded text-rose-800 dark:text-rose-300 font-mono text-xs">def add(a,b):<br/>    a+b</div>
                            </div>
                            <div>
                                <span className="text-xs text-emerald-600 block mb-1">Correct:</span> 
                                <div className="bg-emerald-100 dark:bg-emerald-900/50 p-2 rounded text-emerald-800 dark:text-emerald-300 font-mono text-xs">def add(a,b):<br/>    return a+b</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 7. Real World Usecases */}
      <section className="max-w-4xl mx-auto pb-16">
        <div className="bg-slate-900 p-8 rounded-3xl border border-slate-700 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"></div>
          
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Globe className="w-8 h-8 text-blue-400 mr-3" />
            1️⃣6️⃣ Real-World Use Cases
          </h2>
          <p className="mb-8 text-slate-300">
            Functions are the building blocks of every major software architecture and are heavily used everywhere.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 text-center"><Database className="w-6 h-6 text-blue-400 mx-auto mb-2" /><span className="text-sm font-bold text-slate-200">Data Science</span></div>
            <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 text-center"><Layout className="w-6 h-6 text-emerald-400 mx-auto mb-2" /><span className="text-sm font-bold text-slate-200">Web Development</span></div>
            <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 text-center"><Box className="w-6 h-6 text-purple-400 mx-auto mb-2" /><span className="text-sm font-bold text-slate-200">Machine Learning</span></div>
            <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 text-center"><Cog className="w-6 h-6 text-amber-400 mx-auto mb-2" /><span className="text-sm font-bold text-slate-200">Automation Scripts</span></div>
            <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 text-center"><Globe className="w-6 h-6 text-indigo-400 mx-auto mb-2" /><span className="text-sm font-bold text-slate-200">APIs</span></div>
            <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 text-center"><Code className="w-6 h-6 text-rose-400 mx-auto mb-2" /><span className="text-sm font-bold text-slate-200">Software Dev</span></div>
          </div>
          
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <h4 className="font-bold text-sm uppercase tracking-wider text-slate-400 mb-3 flex items-center">Example in Data Science</h4>
              <CodeSnippetBlock codeSnippet={`def normalize(data):\n    return (data - min(data)) / (max(data) - min(data))`} />
          </div>
        </div>
      </section>

    </div>
  );
};

export default PythonFunctions;