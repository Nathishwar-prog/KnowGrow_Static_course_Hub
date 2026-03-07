import React, { useState } from 'react';
import { 
  Rocket, BookOpen, Code, Terminal, Target,
  RefreshCw, Check, Copy, AlertTriangle, Lightbulb,
  CheckCircle2, XCircle, Download, Monitor,
  Settings, PlayCircle, ArrowRight, MonitorPlay, Zap
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
            className="p-1.5 rounded-md bg-slate-800 text-slate-400 hover:bg-sky-600 hover:text-white transition-colors border border-slate-700"
            title="Copy code"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </div>
        <pre className="p-4 overflow-x-auto text-sm font-mono text-sky-300 leading-relaxed">
          <code>{codeSnippet}</code>
        </pre>
      </div>
    </div>
  );
};

const PythonGetStarted: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);

  const runDemo = (command: string, result: string, multiline: boolean = false) => {
    if (multiline) {
        setConsoleOutput([`$ ${command}`, ...result.split('\\n')]);
    } else {
        const codeStr = `$ ${command}\n${result}`;
        setConsoleOutput(codeStr.split('\n'));
    }
  };

  const resetConsole = () => setConsoleOutput([]);

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-900 min-h-screen font-sans text-slate-800 dark:text-slate-200">
      
      {/* 1. Header Area */}
      <header className="max-w-4xl mx-auto text-center mb-16 pt-8">
        <div className="inline-flex items-center justify-center p-4 bg-sky-100 dark:bg-sky-900/30 rounded-2xl mb-6 shadow-sm border border-sky-200 dark:border-sky-800/50">
          <Rocket className="w-10 h-10 text-sky-600 dark:text-sky-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Python Get Started
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Begin your journey with Python. A high-level, interpreted programming language known for its simplicity, readability, and powerful libraries.
        </p>
      </header>

      {/* 2. Introduction & Popularity */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col">
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 text-sky-500 mr-3" />
            <h2 className="text-2xl font-bold">1️⃣ What is Python?</h2>
          </div>
          <p className="mb-4 text-slate-600 dark:text-slate-300">
            Created by <strong>Guido van Rossum</strong> and first released in 1991, Python is widely used across various fields of technology.
          </p>
          <div className="p-4 bg-sky-50 dark:bg-sky-900/20 rounded-xl mb-6 flex-1 border border-sky-100 dark:border-sky-800/50">
            <h4 className="font-bold flex items-center text-sky-800 dark:text-sky-400 mb-3 text-sm uppercase">
              Used Heavily In:
            </h4>
            <div className="grid grid-cols-2 gap-3 text-sm font-medium">
              <span className="flex items-center text-slate-700 dark:text-slate-300"><div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div> Data Science</span>
              <span className="flex items-center text-slate-700 dark:text-slate-300"><div className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></div> AI & ML</span>
              <span className="flex items-center text-slate-700 dark:text-slate-300"><div className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></div> Web Development</span>
              <span className="flex items-center text-slate-700 dark:text-slate-300"><div className="w-2 h-2 rounded-full bg-amber-500 mr-2"></div> Automation</span>
              <span className="flex items-center text-slate-700 dark:text-slate-300"><div className="w-2 h-2 rounded-full bg-rose-500 mr-2"></div> Cybersecurity</span>
              <span className="flex items-center text-slate-700 dark:text-slate-300"><div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div> Software Dev</span>
            </div>
          </div>
          
          <CodeSnippetBlock codeSnippet={`print("Hello, Python!")\n\n# Output:\n# Hello, Python!`} title="Hello World in Python" />
        </div>

        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col justify-between">
          <div>
            <div className="flex items-center mb-6">
              <Zap className="w-6 h-6 text-amber-500 mr-3" />
              <h2 className="text-2xl font-bold">Why is it Popular?</h2>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                <span className="font-medium">Easy to learn and incredibly readable</span>
              </li>
              <li className="flex items-center p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                <span className="font-medium">Clean syntax without complex boilerplate</span>
              </li>
              <li className="flex items-center p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                <span className="font-medium">Huge community support globally</span>
              </li>
              <li className="flex items-center p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                <span className="font-medium">Thousands of built-in and external libraries</span>
              </li>
              <li className="flex items-center p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                <span className="font-medium">Cross-platform (Windows, Mac, Linux)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Getting Installed and Setup */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 border-b border-slate-200 dark:border-slate-700 pb-4">
          Setup & Installation
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Download className="w-6 h-6 text-sky-500 mr-2" /> 2️⃣ Installing Python
            </h3>
            <p className="mb-6 text-slate-600 dark:text-slate-300">Before writing programs, we must install Python from the official website.</p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-sky-100 dark:bg-sky-900 flex items-center justify-center text-sky-600 dark:text-sky-400 font-bold text-xs mr-3 shrink-0 mt-0.5">1</div>
                <p className="text-sm">Go to the official website and download the latest Python version.</p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-sky-100 dark:bg-sky-900 flex items-center justify-center text-sky-600 dark:text-sky-400 font-bold text-xs mr-3 shrink-0 mt-0.5">2</div>
                <p className="text-sm">Run the installer.</p>
              </div>
              <div className="flex items-start bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg border border-yellow-200 dark:border-yellow-800/50">
                <div className="w-6 h-6 rounded-full bg-yellow-200 dark:bg-yellow-800 flex items-center justify-center text-yellow-700 dark:text-yellow-400 font-bold text-xs mr-3 shrink-0 mt-0.5">3</div>
                <div>
                  <p className="text-sm font-bold text-yellow-800 dark:text-yellow-400 mb-1">CRITICAL STEP:</p>
                  <p className="text-xs text-yellow-700 dark:text-yellow-300">Ensure you check the box that says <strong>"Add Python to PATH"</strong> at the bottom of the installer before clicking Next.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-sky-100 dark:bg-sky-900 flex items-center justify-center text-sky-600 dark:text-sky-400 font-bold text-xs mr-3 shrink-0 mt-0.5">4</div>
                <p className="text-sm">Click Install Now.</p>
              </div>
            </div>

            <h4 className="font-bold text-sm mt-8 mb-3 uppercase text-slate-500">Verify Installation</h4>
            <CodeSnippetBlock codeSnippet={`python --version\n\n# Output example:\n# Python 3.12.2`} title="Command Prompt / Terminal" />
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <MonitorPlay className="w-6 h-6 text-purple-500 mr-2" /> 9️⃣ Development Tools
            </h3>
            <p className="mb-6 text-slate-600 dark:text-slate-300">Developers use different tools to write Python code. Beginners often start with Visual Studio Code because it is simple and powerful.</p>
            
            <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700 mb-4 flex-1">
              <table className="min-w-full text-left text-sm h-full">
                <thead className="bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 uppercase tracking-wider text-xs">
                  <tr>
                    <th className="p-4 border-b dark:border-slate-700 font-bold">Tool</th>
                    <th className="p-4 border-b dark:border-slate-700 font-bold">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-4 font-bold text-sky-600 dark:text-sky-400">VS Code</td>
                    <td className="p-4 text-slate-600 dark:text-slate-300">Lightweight code editor</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-4 font-bold text-emerald-600 dark:text-emerald-400">PyCharm</td>
                    <td className="p-4 text-slate-600 dark:text-slate-300">Professional Python IDE</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-4 font-bold text-amber-600 dark:text-amber-400">Jupyter Notebook</td>
                    <td className="p-4 text-slate-600 dark:text-slate-300">Data science projects</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-4 font-bold text-rose-600 dark:text-rose-400">Google Colab</td>
                    <td className="p-4 text-slate-600 dark:text-slate-300">Cloud-based Python</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Simulator */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center">
            <Terminal className="w-8 h-8 mr-3 text-sky-500" />
            3️⃣ Running Your First Program
          </h2>
          <button
            onClick={resetConsole}
            className="flex items-center px-4 py-2 bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 rounded-lg text-sm font-bold uppercase tracking-wider hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shadow-sm"
          >
            <RefreshCw className="w-4 h-4 mr-2" /> Clear
          </button>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-6 pb-4 border-b border-slate-100 dark:border-slate-700">
                Execution Methods
              </h3>

              <div className="space-y-4">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center">
                  <Monitor className="w-4 h-4 mr-2 text-purple-500" /> Method 1 — Python Interpreter
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Run code directly in the terminal step-by-step.</p>
                <div className="grid grid-cols-1 gap-3 mb-6">
                  <button onClick={() => runDemo('python -c "print(\'Hello World\')" ', 'Hello World')} className="font-mono text-sm p-3 rounded-xl border border-purple-200 dark:border-purple-800/30 bg-purple-50/50 dark:bg-purple-900/10 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition shadow-sm text-left flex justify-between items-center group">
                    <span>print("Hello World")</span><PlayCircle className="w-4 h-4 text-purple-500 opacity-0 group-hover:opacity-100 transition" />
                  </button>
                </div>

                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center pt-4 border-t border-slate-100 dark:border-slate-700">
                  <Code className="w-4 h-4 mr-2 text-sky-500" /> Method 2 — Python Script File
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Create a <code className="font-mono bg-slate-100 dark:bg-slate-900 px-1 rounded">hello.py</code> file, write code, then run it.</p>
                <div className="grid grid-cols-1 gap-3 mb-6">
                  <button onClick={() => runDemo('python hello.py', 'Welcome to Python Programming')} className="font-mono text-sm p-3 rounded-xl border border-sky-200 dark:border-sky-800/30 bg-sky-50/50 dark:bg-sky-900/10 hover:bg-sky-100 dark:hover:bg-sky-900/30 transition shadow-sm text-left flex justify-between items-center group">
                    <span>python hello.py</span><PlayCircle className="w-4 h-4 text-sky-500 opacity-0 group-hover:opacity-100 transition" />
                  </button>
                </div>

                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center pt-4 border-t border-slate-100 dark:border-slate-700">
                  <Target className="w-4 h-4 mr-2 text-emerald-500" /> 🔟 Practice Program
                </h4>
                 <div className="grid grid-cols-1 gap-3">
                  <button onClick={() => runDemo('python practice.py', 'Enter your name: Issac\nHello Issac\nWelcome to Python Programming', true)} className="font-mono text-sm p-3 rounded-xl border border-emerald-200 dark:border-emerald-800/30 bg-emerald-50/50 dark:bg-emerald-900/10 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition shadow-sm text-left justify-between items-center group flex">
                    <div className="flex flex-col">
                        <span className="text-slate-500 mb-1"># practice.py</span>
                        <span>name = input("Enter your name: ")</span>
                        <span>print("Hello", name)</span>
                    </div>
                    <PlayCircle className="w-6 h-6 text-emerald-500 opacity-0 group-hover:opacity-100 transition" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 h-full min-h-[350px] shadow-2xl relative overflow-hidden flex flex-col">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#0ea5e9 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <h3 className="font-bold text-slate-300 uppercase text-xs tracking-wider flex items-center">
                    <Terminal className="w-4 h-4 mr-2" />
                    Terminal Output
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
                      <span>Click to run a command...</span>
                    </div>
                  ) : (
                    consoleOutput.map((line, i) => (
                      <div key={i} className={`mb-1.5 animate-fade-in ${
                          line.startsWith('$') ? 'text-emerald-400 font-bold' :
                          line.startsWith('>>>') ? 'text-sky-400 font-bold' :
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

      {/* 4. Deep Dive into Syntax */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 border-b border-slate-200 dark:border-slate-700 pb-4">
          Core Fundamentals
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-bold mb-4">4️⃣ Python Syntax Basics</h3>
            <p className="mb-4 text-slate-600 dark:text-slate-300">
              Python syntax is simple and readable. Unlike many languages like C++ or JavaScript, Python <strong>does not require semicolons (;)</strong> at the end of statements.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-rose-50 dark:bg-rose-900/10 p-4 rounded-xl border border-rose-100 dark:border-rose-800/30">
                    <span className="text-xs text-rose-600 dark:text-rose-400 block mb-2 font-bold flex items-center"><XCircle className="w-3 h-3 mr-1" /> Wrong Style (Not Needed)</span>
                    <code className="font-mono text-xs text-rose-800 dark:text-rose-300 line-through">print("Hello");</code>
                </div>
                <div className="bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800/30">
                    <span className="text-xs text-emerald-600 dark:text-emerald-400 block mb-2 font-bold flex items-center"><CheckCircle2 className="w-3 h-3 mr-1" /> Correct Python Style</span>
                    <code className="font-mono text-xs text-emerald-800 dark:text-emerald-300">print("Hello")</code>
                </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-bold mb-4">5️⃣ Indentation</h3>
            <p className="mb-4 text-slate-600 dark:text-slate-300">
              Instead of curly braces <code className="font-mono bg-slate-100 dark:bg-slate-900 px-1 rounded">&#123; &#125;</code>, Python uses <strong>indentation (spaces)</strong> to define code blocks. If missing, it throws an error.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-rose-50 dark:bg-rose-900/10 p-4 rounded-xl border border-rose-100 dark:border-rose-800/30">
                    <span className="text-xs text-rose-600 dark:text-rose-400 block mb-2 font-bold flex items-center"><XCircle className="w-3 h-3 mr-1" /> Error</span>
                    <pre className="font-mono text-xs text-rose-800 dark:text-rose-300"><code>if 5 &gt; 2:\nprint("Greater")</code></pre>
                </div>
                <div className="bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800/30">
                    <span className="text-xs text-emerald-600 dark:text-emerald-400 block mb-2 font-bold flex items-center"><CheckCircle2 className="w-3 h-3 mr-1" /> Correct Block</span>
                    <pre className="font-mono text-xs text-emerald-800 dark:text-emerald-300"><code>if 5 &gt; 2:\n    print("Greater")</code></pre>
                </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold mb-4">6️⃣ Writing Comments</h3>
              <p className="mb-4 text-slate-600 dark:text-slate-300">Comments explain code and make programs easier to understand for humans. Python ignores them.</p>
              
              <CodeSnippetBlock 
                codeSnippet={`# This is a Single Line comment\nprint("Hello Python")\n\n"""\nThis is a multi-line comment\nused for explanations\n"""\nprint("Learning Python")`} 
                title="Different Comment Types"
              />
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold mb-4">7️⃣ Variables (Quick Preview)</h3>
              <p className="mb-4 text-slate-600 dark:text-slate-300">Variables store data values. Python automatically detects the data type, unlike languages like Java or C++.</p>
              
              <CodeSnippetBlock 
                codeSnippet={`name = "Issac"\nage = 19\n\nprint(name)\nprint(age)\n\n# Output:\n# Issac\n# 19`} 
              />
            </div>
        </div>

        <div className="bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-800 flex flex-col md:flex-row gap-8 items-center justify-between mb-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-sky-500 opacity-10 rounded-full blur-3xl"></div>
          <div className="flex-1 z-10">
            <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
              <Settings className="w-6 h-6 text-sky-400 mr-2" /> 8️⃣ Execution Flow
            </h3>
            <p className="mb-4 text-slate-300">
              Visualizing how Python handles the code you write, reading it line by line from top to bottom.
            </p>
            <CodeSnippetBlock codeSnippet={`print("Hello")\nprint("Python")`} />
          </div>
          <div className="w-full md:w-2/3 p-6 bg-slate-800/80 backdrop-blur-sm mt-4 md:mt-0 rounded-2xl shadow-lg border border-slate-700/50 text-center relative z-10">
            <div className="flex flex-col items-center">
              <div className="bg-slate-700 px-4 py-2 rounded-lg font-mono font-bold text-slate-200 mb-2 border border-slate-600 w-full shadow-sm">Write Python Code</div>
              <ArrowRight className="w-6 h-6 text-slate-400 rotate-90 my-1 font-bold" />
              <div className="bg-sky-900/40 px-4 py-2 rounded-lg font-mono font-bold text-sky-200 mb-2 border border-sky-700 w-full shadow-sm">Interpreter Reads Code</div>
              <ArrowRight className="w-6 h-6 text-slate-400 rotate-90 my-1 font-bold" />
              <div className="bg-purple-900/40 px-4 py-2 rounded-lg font-mono font-bold text-purple-200 mb-2 border border-purple-700 w-full shadow-sm flex flex-col items-center">Executed Line by Line</div>
              <ArrowRight className="w-6 h-6 text-slate-400 rotate-90 my-1 font-bold" />
              <div className="bg-emerald-900/40 px-6 py-3 rounded-xl font-bold text-emerald-400 border border-emerald-700 w-full">Output Displayed: Hello \n Python</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Developer Tips & Best Practices */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
          <h2 className="text-3xl font-extrabold mb-6 flex items-center relative z-10">
            <Lightbulb className="w-8 h-8 mr-3 text-yellow-300" />
            1️⃣2️⃣ Developer Advice (15+ Years Exp)
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <h3 className="font-bold text-xl mb-3 border-b border-white/20 pb-2">Practice Small Daily</h3>
              <p className="text-sm text-emerald-50 mb-2">Consistency is key.</p>
              <p className="text-sm text-white font-medium bg-black/20 p-3 rounded-lg border border-white/10 italic">
                  "Even 10 minutes daily coding builds strong programming skills."
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <h3 className="font-bold text-xl mb-3 border-b border-white/20 pb-2">Focus on Fundamentals</h3>
              <p className="text-sm text-emerald-50 mb-2">Before learning Machine Learning, AI, or Data Science, you MUST master:</p>
              <ul className="text-sm font-mono bg-black/20 p-3 rounded-lg border border-white/10 space-y-1">
                  <li>- Variables</li>
                  <li>- Loops</li>
                  <li>- Functions</li>
                  <li>- Data structures</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <h3 className="font-bold text-xl mb-3 border-b border-white/20 pb-2">Read Others' Code</h3>
              <p className="text-sm text-emerald-50 mb-2">Writing is only half the battle.</p>
              <p className="text-sm text-white font-medium bg-black/20 p-3 rounded-lg border border-white/10 italic">
                  "Reading code improves your understanding faster than only writing code."
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center border-b border-slate-200 dark:border-slate-700 pb-4">
                <AlertTriangle className="w-8 h-8 text-rose-500 mr-3" />
                1️⃣1️⃣ Common Beginner Errors
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-rose-50 dark:bg-rose-900/10 p-5 rounded-xl border border-rose-100 dark:border-rose-800/30">
                    <h4 className="font-bold font-sm text-rose-800 dark:text-rose-400 mb-3 flex items-center">
                        <span className="w-6 h-6 rounded-full bg-rose-200 dark:bg-rose-900/60 text-center leading-6 mr-2 font-mono text-xs">1</span>
                        Missing Quotes
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                        <div><span className="text-xs text-rose-600 block mb-1">Wrong:</span> <code className="bg-rose-100 dark:bg-rose-900/50 p-2 rounded text-rose-800 dark:text-rose-300 block font-mono text-xs">print(Hello)</code></div>
                        <div><span className="text-xs text-emerald-600 block mb-1">Correct:</span> <code className="bg-emerald-100 dark:bg-emerald-900/50 p-2 rounded text-emerald-800 dark:text-emerald-300 block font-mono text-xs">print("Hello")</code></div>
                    </div>
                </div>
                
                <div className="bg-rose-50 dark:bg-rose-900/10 p-5 rounded-xl border border-rose-100 dark:border-rose-800/30">
                    <h4 className="font-bold font-sm text-rose-800 dark:text-rose-400 mb-3 flex items-center">
                        <span className="w-6 h-6 rounded-full bg-rose-200 dark:bg-rose-900/60 text-center leading-6 mr-2 font-mono text-xs">2</span>
                        Indentation Error
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <span className="text-xs text-rose-600 block mb-1">Wrong:</span> 
                            <div className="bg-rose-100 dark:bg-rose-900/50 p-2 rounded text-rose-800 dark:text-rose-300 font-mono text-xs whitespace-pre">if 10 &gt; 5:\nprint("Correct")</div>
                        </div>
                        <div>
                            <span className="text-xs text-emerald-600 block mb-1">Correct:</span> 
                            <div className="bg-emerald-100 dark:bg-emerald-900/50 p-2 rounded text-emerald-800 dark:text-emerald-300 font-mono text-xs whitespace-pre">if 10 &gt; 5:\n    print("Correct")</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 7. Practice Exercises */}
      <section className="max-w-4xl mx-auto pb-16">
        <div className="bg-sky-50 dark:bg-sky-900/10 p-8 rounded-3xl border border-sky-200 dark:border-sky-800 shadow-lg relative">
          <Target className="absolute top-6 right-6 w-12 h-12 text-sky-500/30" />
          <h2 className="text-2xl font-bold text-sky-900 dark:text-sky-400 mb-6 flex items-center">
            1️⃣3️⃣ Mini Practice Exercises
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col">
              <h4 className="font-bold text-sm uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-3">Exercise 1</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 flex-1">Write a program that prints exactly the following text:</p>
              <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded-lg font-mono text-sm border-l-2 border-emerald-500 text-emerald-600 dark:text-emerald-400">Welcome to Python</div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col">
              <h4 className="font-bold text-sm uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-3">Exercise 2</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 flex-1">Create a program that prints your personal info on separate lines:</p>
              <ul className="text-sm font-bold text-slate-700 dark:text-slate-300 space-y-1">
                  <li>• Name</li>
                  <li>• Age</li>
                  <li>• Country</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col">
              <h4 className="font-bold text-sm uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-3">Exercise 3</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 flex-1">Write a Python program that prints the following sentence:</p>
              <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded-lg font-mono text-sm border-l-2 border-emerald-500 text-emerald-600 dark:text-emerald-400">I am learning Python programming</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PythonGetStarted;