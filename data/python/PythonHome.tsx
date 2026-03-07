import React, { useState } from 'react';
import { 
  Home, BookOpen, Code, Terminal, Target,
  RefreshCw, Check, Copy, AlertTriangle, Lightbulb,
  CheckCircle2, XCircle, Zap, Globe, Database, Layers,
  PlayCircle, ArrowRight, Settings, Cpu, TrendingUp, Award,
  Box, Search
} from 'lucide-react';

const CodeSnippetBlock = ({ codeSnippet, title, language = 'python' }: { codeSnippet: string, title?: string, language?: string }) => {
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
        <pre className="p-4 overflow-x-auto text-sm font-mono leading-relaxed">
          <code className={language === 'c' ? 'text-blue-300' : 'text-emerald-300'}>{codeSnippet}</code>
        </pre>
      </div>
    </div>
  );
};

const PythonHome: React.FC = () => {
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
        <div className="inline-flex items-center justify-center p-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl mb-6 shadow-sm border border-emerald-200 dark:border-emerald-800/50">
          <Home className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Welcome to Python
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          A powerful, easy-to-learn programming language used to build a wide variety of applications. Focuses on readability and simplicity.
        </p>
      </header>

      {/* 2. Introduction & Why Learn */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col">
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 text-emerald-500 mr-3" />
            <h2 className="text-2xl font-bold">1️⃣ What is Python?</h2>
          </div>
          <p className="mb-4 text-slate-600 dark:text-slate-300">
            Created by <strong>Guido van Rossum</strong> and first released in 1991, Python is one of the best programming languages for beginners because of its simplicity.
          </p>
          
          <div className="mt-4 flex-1">
            <CodeSnippetBlock codeSnippet={`print("Hello, Python!")\n\n# Output:\n# Hello, Python!`} title="First Program" />
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-6">
            <TrendingUp className="w-6 h-6 text-amber-500 mr-3" />
            <h2 className="text-2xl font-bold">2️⃣ Why Learn Python?</h2>
          </div>
          <p className="mb-6 text-slate-600 dark:text-slate-300">
            Python is one of the most demanded programming languages in the world.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex items-center p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 shrink-0" />
              <span className="font-medium text-sm">Easy syntax similar to English</span>
            </div>
            <div className="flex items-center p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 shrink-0" />
              <span className="font-medium text-sm">Large developer community</span>
            </div>
            <div className="flex items-center p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 shrink-0" />
              <span className="font-medium text-sm">Huge collection of libraries</span>
            </div>
            <div className="flex items-center p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 shrink-0" />
              <span className="font-medium text-sm">Cross-platform support</span>
            </div>
            <div className="flex items-center p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800 col-span-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 shrink-0" />
              <span className="font-medium text-sm">Powerful for data and AI</span>
            </div>
          </div>

          <div className="bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800/30">
            <h4 className="font-bold text-emerald-800 dark:text-emerald-400 mb-2 text-xs uppercase tracking-wider">Used By Top Companies:</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-white dark:bg-slate-800 px-3 py-1 rounded-md text-sm font-bold shadow-sm border border-slate-200 dark:border-slate-700">Google</span>
              <span className="bg-white dark:bg-slate-800 px-3 py-1 rounded-md text-sm font-bold shadow-sm border border-slate-200 dark:border-slate-700 text-rose-600 dark:text-rose-400">Netflix</span>
              <span className="bg-white dark:bg-slate-800 px-3 py-1 rounded-md text-sm font-bold shadow-sm border border-slate-200 dark:border-slate-700 text-pink-600 dark:text-pink-400">Instagram</span>
              <span className="bg-white dark:bg-slate-800 px-3 py-1 rounded-md text-sm font-bold shadow-sm border border-slate-200 dark:border-slate-700 text-green-500">Spotify</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Uses and Examples */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 border-b border-slate-200 dark:border-slate-700 pb-4">
          Capabilities & Applications
        </h2>
        
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 mb-8">
          <div className="flex items-center mb-6">
            <Globe className="w-6 h-6 text-blue-500 mr-3" />
            <h3 className="text-2xl font-bold">3️⃣ What Can You Do with Python?</h3>
          </div>
          <p className="mb-6 text-slate-600 dark:text-slate-300">Python can be used in many different fields.</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
              <table className="min-w-full text-left text-sm h-full">
                <thead className="bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300">
                  <tr>
                    <th className="p-4 border-b dark:border-slate-700 font-bold">Field</th>
                    <th className="p-4 border-b dark:border-slate-700 font-bold">Example Use</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-4 font-bold text-blue-600 dark:text-blue-400">Web Development</td>
                    <td className="p-4 text-slate-600 dark:text-slate-300">Build websites</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-4 font-bold text-emerald-600 dark:text-emerald-400">Data Science</td>
                    <td className="p-4 text-slate-600 dark:text-slate-300">Analyze data</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-4 font-bold text-purple-600 dark:text-purple-400">Artificial Intelligence</td>
                    <td className="p-4 text-slate-600 dark:text-slate-300">Train AI models</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-4 font-bold text-amber-600 dark:text-amber-400">Automation</td>
                    <td className="p-4 text-slate-600 dark:text-slate-300">Automate repetitive tasks</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-4 font-bold text-rose-600 dark:text-rose-400">Game Development</td>
                    <td className="p-4 text-slate-600 dark:text-slate-300">Create simple games</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-4 font-bold text-slate-800 dark:text-slate-200">Cybersecurity</td>
                    <td className="p-4 text-slate-600 dark:text-slate-300">Security tools</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <h4 className="font-bold text-slate-700 dark:text-slate-300 mb-3 text-sm uppercase">Example Automation Script</h4>
              <CodeSnippetBlock 
                codeSnippet={`for i in range(5):\n    print("Task Completed")\n\n# Output:\n# Task Completed\n# Task Completed\n# Task Completed\n# Task Completed\n# Task Completed`} 
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Zap className="w-6 h-6 text-yellow-500 mr-2" /> 4️⃣ Why is it Easy?
              </h3>
              <p className="mb-4 text-slate-600 dark:text-slate-300">You can see Python requires less code and is easier to understand compared to other languages.</p>
              
              <div className="grid grid-cols-1 gap-4 mt-auto">
                  <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-xl border border-blue-100 dark:border-blue-800/30">
                      <span className="text-xs text-blue-600 dark:text-blue-400 font-bold block mb-2 uppercase tracking-wide">C Language Example:</span>
                      <pre className="font-mono text-xs text-blue-800 dark:text-blue-300"><code>#include&lt;stdio.h&gt;\nint main()&#123;\n  printf("Hello World");\n  return 0;\n&#125;</code></pre>
                  </div>
                  <div className="bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800/30">
                      <span className="text-xs text-emerald-600 dark:text-emerald-400 font-bold block mb-2 uppercase tracking-wide">Python Equivalent:</span>
                      <pre className="font-mono text-xs text-emerald-800 dark:text-emerald-300 font-bold"><code>print("Hello World")</code></pre>
                  </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Layers className="w-6 h-6 text-purple-500 mr-2" /> 5️⃣ Applications
              </h3>
              <p className="mb-4 text-slate-600 dark:text-slate-300">Python powers many real-world technologies:</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-slate-100 dark:bg-slate-900 px-3 py-1.5 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">Machine Learning models</span>
                <span className="bg-slate-100 dark:bg-slate-900 px-3 py-1.5 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">Web applications</span>
                <span className="bg-slate-100 dark:bg-slate-900 px-3 py-1.5 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">Chatbots</span>
                <span className="bg-slate-100 dark:bg-slate-900 px-3 py-1.5 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">Data analysis systems</span>
                <span className="bg-slate-100 dark:bg-slate-900 px-3 py-1.5 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">Scientific computing</span>
              </div>

              <h4 className="font-bold text-slate-700 dark:text-slate-300 mb-3 text-sm uppercase">Example: Simple Calculator</h4>
              <CodeSnippetBlock 
                codeSnippet={`a = 10\nb = 5\n\nprint("Addition:", a + b)\nprint("Multiplication:", a * b)\n\n# Output:\n# Addition: 15\n# Multiplication: 50`} 
              />
            </div>
        </div>
      </section>

      {/* 4. Execution Flow and Versions */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 border-b border-slate-200 dark:border-slate-700 pb-4">
          How it Works
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Search className="w-6 h-6 text-sky-500 mr-2" /> 6️⃣ Python Versions
              </h3>
              <p className="mb-6 text-slate-600 dark:text-slate-300">There are two main versions of Python.</p>
              
              <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700 mb-6 flex-1">
                <table className="min-w-full text-left text-sm h-full">
                  <thead className="bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300">
                    <tr>
                      <th className="p-4 border-b dark:border-slate-700 font-bold">Version</th>
                      <th className="p-4 border-b dark:border-slate-700 font-bold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 bg-rose-50/10 dark:bg-rose-900/5">
                      <td className="p-4 font-bold text-rose-600 dark:text-rose-400 font-mono">Python 2</td>
                      <td className="p-4 text-slate-600 dark:text-slate-300">No longer supported</td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 bg-emerald-50/30 dark:bg-emerald-900/10">
                      <td className="p-4 font-bold text-emerald-600 dark:text-emerald-400 font-mono">Python 3</td>
                      <td className="p-4 text-slate-600 dark:text-slate-300 font-bold">Current and recommended</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800/50 flex items-center">
                  <AlertTriangle className="w-5 h-5 text-emerald-600 mr-2 shrink-0" />
                  <span className="text-sm text-emerald-800 dark:text-emerald-300 font-medium">Always use Python version 3 for modern development.</span>
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-3xl shadow-lg border border-slate-800 overflow-hidden relative">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-indigo-500 opacity-10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4 flex items-center text-white">
                  <Settings className="w-6 h-6 text-indigo-400 mr-2" /> 7️⃣ Execution Process
                </h3>
                <p className="mb-6 text-slate-300">
                  Python is an interpreted language. This structure makes Python portable and flexible across systems.
                </p>
                <div className="flex flex-col items-center">
                  <div className="bg-slate-800 px-6 py-3 rounded-lg font-mono font-bold text-slate-200 mb-2 border border-slate-700 w-full shadow-sm text-center">Python Code</div>
                  <ArrowRight className="w-6 h-6 text-slate-500 rotate-90 my-1 font-bold" />
                  <div className="bg-indigo-900/60 px-6 py-3 rounded-lg font-mono font-bold text-indigo-200 mb-2 border border-indigo-700 w-full shadow-sm text-center">Python Interpreter</div>
                  <ArrowRight className="w-6 h-6 text-slate-500 rotate-90 my-1 font-bold" />
                  <div className="bg-purple-900/60 px-6 py-3 rounded-lg font-mono font-bold text-purple-200 mb-2 border border-purple-700 w-full shadow-sm text-center">Bytecode Conversion</div>
                  <ArrowRight className="w-6 h-6 text-slate-500 rotate-90 my-1 font-bold" />
                  <div className="bg-emerald-900/60 px-6 py-3 rounded-xl font-bold text-emerald-300 border border-emerald-700 w-full text-center">Execution by Python Virtual Machine</div>
                </div>
              </div>
            </div>
        </div>
      </section>
      
      {/* 5. Interactive Demo Section */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center">
            <Terminal className="w-8 h-8 mr-3 text-emerald-500" />
            8️⃣ Interactive Lab
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
                Simple Beginner Program
              </h3>

              <div className="space-y-4">
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Run the following block to see variables and print statements in action.</p>
                <button onClick={() => runDemo('python script.py', 'Student: Issac\\nCourse: Python Programming', true)} className="w-full font-mono text-sm p-4 rounded-xl border border-emerald-200 dark:border-emerald-800/30 bg-emerald-50/50 dark:bg-emerald-900/10 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition shadow-sm text-left justify-between items-center group flex">
                    <div className="flex flex-col">
                        <span className="text-emerald-700 dark:text-emerald-400 mb-1">name = "Issac"</span>
                        <span className="text-emerald-700 dark:text-emerald-400 mb-2">course = "Python Programming"</span>
                        <span className="text-slate-600 dark:text-slate-400">print("Student:", name)</span>
                        <span className="text-slate-600 dark:text-slate-400">print("Course:", course)</span>
                    </div>
                    <PlayCircle className="w-8 h-8 text-emerald-500 opacity-0 group-hover:opacity-100 transition shrink-0 ml-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 h-full min-h-[300px] shadow-2xl relative overflow-hidden flex flex-col">
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
                      <span>Click the run button to execute...</span>
                    </div>
                  ) : (
                    consoleOutput.map((line, i) => (
                      <div key={i} className={`mb-1.5 animate-fade-in ${
                          line.startsWith('>>>') ? 'text-emerald-400 font-bold' :
                          'text-slate-300'
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

      {/* 6. Developer Tips & Guide */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 dark:from-slate-900 dark:to-black rounded-3xl p-8 text-white shadow-xl relative overflow-hidden mb-12 border border-slate-700">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 opacity-10 rounded-full blur-3xl"></div>
          <h2 className="text-3xl font-extrabold mb-8 flex items-center relative z-10">
            <Award className="w-8 h-8 mr-3 text-yellow-400" />
            9️⃣ Developer Advice (15+ Years Experience)
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-600">
              <h3 className="font-bold text-xl mb-3 border-b border-slate-600 pb-2 text-emerald-400">1. Focus on Logic</h3>
              <p className="text-sm text-slate-300 mb-2">Not just syntax.</p>
              <p className="text-sm text-slate-400 font-medium italic">
                  "Many beginners memorize syntax but ignore problem-solving skills. Good programmers focus on logic building."
              </p>
            </div>
            <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-600">
              <h3 className="font-bold text-xl mb-3 border-b border-slate-600 pb-2 text-sky-400">2. Build Small Projects</h3>
              <p className="text-sm text-slate-300 mb-3">Instead of only reading tutorials, build things like:</p>
              <ul className="text-sm font-bold text-slate-200 bg-slate-900/50 p-3 rounded-lg border border-slate-700 space-y-1">
                  <li>• Calculator</li>
                  <li>• Number guessing game</li>
                  <li>• Password generator</li>
                  <li>• To-do list program</li>
              </ul>
            </div>
            <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-600">
              <h3 className="font-bold text-xl mb-3 border-b border-slate-600 pb-2 text-purple-400">3. Practice Daily</h3>
              <p className="text-sm text-slate-300 mb-2">Consistency over volume.</p>
              <p className="text-sm text-slate-400 font-medium italic">
                  "Even 30 minutes per day can significantly improve your coding skills. Consistency is more important than long study sessions."
              </p>
            </div>
          </div>
        </div>

        {/* Next Steps List */}
        <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-lg border border-slate-200 dark:border-slate-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-50 dark:bg-emerald-900/10 w-full h-full rounded-tr-full rounded-br-full -z-10 translate-x-1/2"></div>
            
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <Target className="w-8 h-8 mr-3 text-emerald-500" />
              🔟 What You Will Learn Next
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-2xl font-medium text-lg">
              After this introduction, you will learn the following Python concepts step by step:
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col items-center text-center group hover:border-emerald-500 transition-colors">
                    <span className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold mb-3 group-hover:bg-emerald-500 group-hover:text-white transition-colors">1</span>
                    <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Python Get Started</span>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col items-center text-center group hover:border-emerald-500 transition-colors">
                    <span className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 flex items-center justify-center font-bold mb-3 group-hover:bg-emerald-500 group-hover:text-white transition-colors">2</span>
                    <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Python Syntax</span>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col items-center text-center group hover:border-emerald-500 transition-colors">
                    <span className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 flex items-center justify-center font-bold mb-3 group-hover:bg-emerald-500 group-hover:text-white transition-colors">3</span>
                    <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Python Variables</span>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col items-center text-center group hover:border-emerald-500 transition-colors">
                    <span className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 flex items-center justify-center font-bold mb-3 group-hover:bg-emerald-500 group-hover:text-white transition-colors">4</span>
                    <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Python Data Types</span>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col items-center text-center group hover:border-emerald-500 transition-colors">
                    <span className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 flex items-center justify-center font-bold mb-3 group-hover:bg-emerald-500 group-hover:text-white transition-colors">5</span>
                    <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Python Operators</span>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col items-center text-center group hover:border-emerald-500 transition-colors">
                    <span className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 flex items-center justify-center font-bold mb-3 group-hover:bg-emerald-500 group-hover:text-white transition-colors">6</span>
                    <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Python Conditions</span>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col items-center text-center group hover:border-emerald-500 transition-colors">
                    <span className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 flex items-center justify-center font-bold mb-3 group-hover:bg-emerald-500 group-hover:text-white transition-colors">7</span>
                    <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Python Loops</span>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col items-center text-center group hover:border-emerald-500 transition-colors">
                    <span className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 flex items-center justify-center font-bold mb-3 group-hover:bg-emerald-500 group-hover:text-white transition-colors">8</span>
                    <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Python Functions</span>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col items-center text-center group hover:border-emerald-500 transition-colors">
                    <span className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 flex items-center justify-center font-bold mb-3 group-hover:bg-emerald-500 group-hover:text-white transition-colors">9</span>
                    <span className="font-bold text-slate-700 dark:text-slate-300 text-sm flexitems-center">Python Classes &<br/>Objects</span>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col items-center text-center group hover:border-emerald-500 transition-colors">
                    <span className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 flex items-center justify-center font-bold mb-3 group-hover:bg-emerald-500 group-hover:text-white transition-colors">10</span>
                    <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Python File Handling</span>
                </div>
            </div>
        </div>
      </section>

    </div>
  );
};

export default PythonHome;