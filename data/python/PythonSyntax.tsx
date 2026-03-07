import React, { useState } from 'react';
import {
  Code, Terminal, Check, Copy, Quote,
  TerminalSquare, AlertCircle, CheckCircle2,
  Lightbulb, ShieldCheck, MessageSquareText,
  AlignLeft, Hash, Variable, SplitSquareHorizontal,
  BoxSelect
} from 'lucide-react';

const PythonSyntax: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'structure' | 'statements'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'first_program':
        outLines = ['Hello, World!'];
        break;
      case 'indentation':
        outLines = ['Five is greater than two'];
        break;
      case 'variables':
        outLines = ['John', '21'];
        break;
      case 'comments':
        outLines = ['Hello'];
        break;
      case 'case_sensitive':
        outLines = ['John', 'David'];
        break;
      case 'multi_line':
        outLines = ['15'];
        break;
      case 'line_continuation':
        outLines = ['150'];
        break;
      case 'code_blocks':
        outLines = ['You are an adult', '0', '1', '2'];
        break;
      case 'real_world':
        outLines = ['Welcome to Python', 'Hello Alice'];
        break;
    }

    setConsoleOutput(outLines);
  };

  const resetConsole = () => setConsoleOutput([]);

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-900 min-h-screen font-sans text-slate-800 dark:text-slate-200">

      {/* 1. Header Area */}
      <header className="max-w-4xl mx-auto text-center mb-16 pt-8">
        <div className="inline-flex items-center justify-center p-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl mb-6 shadow-sm border border-indigo-200 dark:border-indigo-800/50">
          <TerminalSquare className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Python Syntax
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Python Syntax refers to the rules that define how Python code must be written and structured so that the interpreter can understand and execute it.
        </p>
      </header>

      {/* 2. Intro Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 mb-8">
          <div className="flex items-center mb-6">
            <MessageSquareText className="w-6 h-6 text-indigo-500 mr-3" />
            <h2 className="text-2xl font-bold">1️⃣ Introduction & Core Concept</h2>
          </div>
          <p className="mb-6 text-slate-600 dark:text-slate-300">
            Python is known for its simple and readable syntax, making it one of the easiest programming languages for beginners. Syntax is simply the set of rules that determines how Python programs are written and interpreted.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/10 p-5 rounded-xl border border-blue-100 dark:border-blue-800/30">
            <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">2️⃣ Your First Python Program</h3>
            <p className="text-sm text-blue-700 dark:text-blue-200 mb-4">The simplest Python program prints text to the screen.</p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Example</span>
                </div>
                <pre className="font-mono text-sm text-slate-300">
                  <span className="text-blue-400">print</span>(<span className="text-amber-300">"Hello, World!"</span>)
                </pre>
                <div className="mt-3 p-2 bg-black/40 rounded border border-slate-800 font-mono text-xs text-white">
                  <span className="text-slate-500 mr-2">Output:</span>Hello, World!
                </div>
              </div>

              <div className="bg-white/60 dark:bg-slate-900/40 p-4 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
                <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300 mb-2">Explanation</h4>
                <table className="w-full text-left border-collapse text-sm">
                  <tbody className="text-slate-700 dark:text-slate-300">
                    <tr>
                      <td className="p-2 border-b border-slate-200 dark:border-slate-800 font-mono text-indigo-600 dark:text-indigo-400 font-bold">print()</td>
                      <td className="p-2 border-b border-slate-200 dark:border-slate-800">Built-in function to display output</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-mono text-amber-600 dark:text-amber-400 font-bold">"Hello, World!"</td>
                      <td className="p-2">String message</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Syntax Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center">
            <Terminal className="w-8 h-8 mr-3 text-indigo-500" />
            Interactive Syntax Lab
          </h2>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setActiveTab('basics')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'basics' ? 'bg-indigo-600 text-white shadow-indigo-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <BoxSelect className="w-4 h-4 mr-2" /> Basics
            </button>
            <button
              onClick={() => setActiveTab('structure')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'structure' ? 'bg-indigo-600 text-white shadow-indigo-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <AlignLeft className="w-4 h-4 mr-2" /> Structure
            </button>
            <button
              onClick={() => setActiveTab('statements')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'statements' ? 'bg-indigo-600 text-white shadow-indigo-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <SplitSquareHorizontal className="w-4 h-4 mr-2" /> Statements
            </button>
            <button
              onClick={resetConsole}
              className="flex items-center px-4 py-2 bg-slate-100 text-slate-700 dark:bg-slate-800/80 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shadow-sm ml-2"
              title="Clear Console"
            >
              Clear
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 min-h-[500px] overflow-y-auto">

              {activeTab === 'basics' && (
                <div className="animate-fade-in space-y-5">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">3️⃣ Indentation & 5️⃣ Variables</h3>

                  <button onClick={() => runDemo('indentation')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors relative shadow-sm">
                      <div className="absolute top-4 right-4 text-xs font-bold text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-1 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN</div>
                      <h4 className="font-bold text-sm text-indigo-600 dark:text-indigo-400 mb-2">Python Uses Indentation</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">Python uses indentation (4 spaces) to define code blocks.</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
                        <span className="text-blue-500 font-bold">if</span> <span className="text-emerald-500">5</span> <span className="text-slate-400">&gt;</span> <span className="text-emerald-500">2</span>:<br />
                        <span className="bg-neutral-200 dark:bg-neutral-800">    </span><span className="text-blue-500">print</span>(<span className="text-amber-500">"Five is greater than two"</span>)
                      </pre>
                    </div>
                  </button>

                  <button onClick={() => runDemo('variables')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors relative shadow-sm">
                      <div className="absolute top-4 right-4 text-xs font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-1 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN</div>
                      <h4 className="font-bold text-sm text-emerald-600 dark:text-emerald-400 mb-2 flex items-center"><Variable className="w-4 h-4 mr-1.5" /> Python Variables</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">Variables store data. Python does not require declaring types.</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
                        name = <span className="text-amber-500">"John"</span><br />
                        age = <span className="text-emerald-500">21</span><br /><br />
                        <span className="text-blue-500">print</span>(name)<br />
                        <span className="text-blue-500">print</span>(age)
                      </pre>
                    </div>
                  </button>

                  <button onClick={() => runDemo('comments')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-blue-300 dark:hover:border-blue-700 transition-colors relative shadow-sm">
                      <div className="absolute top-4 right-4 text-xs font-bold text-blue-500 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN</div>
                      <h4 className="font-bold text-sm text-blue-600 dark:text-blue-400 mb-2 flex items-center"><Hash className="w-4 h-4 mr-1.5" /> 6️⃣ Python Comments</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">Ignored by Python. Use # for single, """ for multi-line.</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
                        <span className="text-slate-400 italic"># This is a single-line comment</span><br />
                        <span className="text-blue-500">print</span>(<span className="text-amber-500">"Hello"</span>)<br /><br />
                        <span className="text-slate-400 italic">"""<br />
                          This is considered a<br />
                          multi-line comment<br />
                          """</span>
                      </pre>
                    </div>
                  </button>

                </div>
              )}

              {activeTab === 'structure' && (
                <div className="animate-fade-in space-y-4">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">Code Structure</h3>

                  <button onClick={() => runDemo('case_sensitive')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-rose-300 dark:hover:border-rose-700 transition-colors relative">
                      <div className="absolute top-4 right-4 text-xs font-bold text-rose-500 bg-rose-100 dark:bg-rose-900/30 px-2 py-1 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN</div>
                      <h4 className="font-bold text-sm text-rose-600 dark:text-rose-400 mb-2">7️⃣ Case Sensitivity</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">`name` and `Name` are completely different variables.</p>
                      <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-hidden">
                        name = <span className="text-amber-500">"John"</span><br />
                        Name = <span className="text-amber-500">"David"</span><br /><br />
                        <span className="text-blue-500">print</span>(name)<br />
                        <span className="text-blue-500">print</span>(Name)
                      </pre>
                    </div>
                  </button>

                  <button onClick={() => runDemo('multi_line')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-amber-300 dark:hover:border-amber-700 transition-colors relative">
                      <div className="absolute top-4 right-4 text-xs font-bold text-amber-500 bg-amber-100 dark:bg-amber-900/30 px-2 py-1 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN</div>
                      <h4 className="font-bold text-sm text-amber-600 dark:text-amber-400 mb-2">8️⃣ Multiple Statements in One Line</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">Uses semicolons (;) but is NOT recommended for readability.</p>
                      <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-hidden w-full">
                        x = <span className="text-emerald-500">5</span>; y = <span className="text-emerald-500">10</span>; <span className="text-blue-500">print</span>(x + y)
                      </pre>
                    </div>
                  </button>

                  <button onClick={() => runDemo('line_continuation')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-blue-300 dark:hover:border-blue-700 transition-colors relative">
                      <div className="absolute top-4 right-4 text-xs font-bold text-blue-500 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN</div>
                      <h4 className="font-bold text-sm text-blue-600 dark:text-blue-400 mb-2">9️⃣ Line Continuation</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">Split long statements across multiple lines with \ or parentheses.</p>
                      <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-hidden w-full">
                        <span className="text-slate-400 italic"># Method 1</span><br />
                        total = <span className="text-emerald-500">10</span> + <span className="text-emerald-500">20</span> + <span className="text-emerald-500">30</span> + \<br />
                        <span className="text-emerald-500">40</span> + <span className="text-emerald-500">50</span><br /><br />
                        <span className="text-slate-400 italic"># Method 2 (Parentheses)</span><br />
                        total2 = (<span className="text-emerald-500">10</span> + <span className="text-emerald-500">20</span> + <span className="text-emerald-500">30</span> + <br />
                        <span className="text-emerald-500">40</span> + <span className="text-emerald-500">50</span>)<br />
                        <span className="text-blue-500">print</span>(total)
                      </pre>
                    </div>
                  </button>

                </div>
              )}

              {activeTab === 'statements' && (
                <div className="animate-fade-in space-y-4">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">Blocks & Statements</h3>

                  <button onClick={() => runDemo('code_blocks')} className="w-full text-left group">
                    <div className="bg-purple-50 dark:bg-purple-900/10 border border-purple-200 dark:border-purple-800/50 rounded-xl p-3 sm:p-4 hover:border-purple-400 dark:hover:border-purple-600 transition-colors relative shadow-sm">
                      <div className="absolute top-4 right-4 text-xs font-bold text-white bg-purple-500 px-2 py-0.5 rounded opacity-80 group-hover:opacity-100 transition-opacity shadow-sm">RUN</div>
                      <h4 className="font-bold text-sm text-purple-700 dark:text-purple-400 mb-2 flex items-center">🔟 Code Blocks</h4>
                      <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-white/60 dark:bg-slate-950/50 p-3 rounded-lg border border-purple-100 dark:border-purple-800/30">
                        age = <span className="text-emerald-500">18</span><br /><br />
                        <span className="text-blue-500 font-bold">if</span> age &gt;= <span className="text-emerald-500">18</span>:<br />
                        <span className="text-blue-500">print</span>(<span className="text-amber-500">"You are an adult"</span>)<br /><br />
                        <span className="text-blue-500 font-bold">for</span> i <span className="text-blue-500 font-bold">in</span> <span className="text-blue-500 font-bold">range</span>(<span className="text-emerald-500">3</span>):<br />
                        <span className="text-blue-500">print</span>(i)
                      </pre>
                    </div>
                  </button>

                  <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mt-2">
                    <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200 mb-3">1️⃣1️⃣ Types of Statements</h4>
                    <table className="w-full text-left border-collapse text-xs">
                      <thead className="bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                        <tr>
                          <th className="p-2 font-bold border-b border-slate-300 dark:border-slate-700">Type</th>
                          <th className="p-2 font-bold border-b border-slate-300 dark:border-slate-700">Example</th>
                        </tr>
                      </thead>
                      <tbody className="text-slate-700 dark:text-slate-300 font-mono">
                        <tr>
                          <td className="p-2 border-b border-slate-200 dark:border-slate-800">Assignment</td>
                          <td className="p-2 border-b border-slate-200 dark:border-slate-800 text-neutral-400">x = 10</td>
                        </tr>
                        <tr>
                          <td className="p-2 border-b border-slate-200 dark:border-slate-800">Conditional</td>
                          <td className="p-2 border-b border-slate-200 dark:border-slate-800 text-neutral-400"><span className="text-blue-500 font-bold">if</span> x &gt; 5:</td>
                        </tr>
                        <tr>
                          <td className="p-2 border-b border-slate-200 dark:border-slate-800">Loop</td>
                          <td className="p-2 border-b border-slate-200 dark:border-slate-800 text-neutral-400"><span className="text-blue-500 font-bold">for</span> i <span className="text-blue-500 font-bold">in</span> <span className="text-blue-500 font-bold">range</span>(5):</td>
                        </tr>
                        <tr>
                          <td className="p-2 border-b border-slate-200 dark:border-slate-800">Function call</td>
                          <td className="p-2 border-b border-slate-200 dark:border-slate-800 text-neutral-400"><span className="text-blue-500">print</span>()</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <button onClick={() => runDemo('real_world')} className="w-full text-left group mt-2">
                    <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/50 rounded-xl p-3 sm:p-4 hover:border-amber-400 dark:hover:border-amber-600 transition-colors relative shadow-sm">
                      <div className="absolute top-4 right-4 text-[10px] font-bold text-amber-600 bg-amber-200 dark:bg-amber-800/50 px-2 py-0.5 rounded opacity-80 group-hover:opacity-100 transition-opacity shadow-sm">RUN</div>
                      <h4 className="font-bold text-sm text-amber-700 dark:text-amber-400 mb-2 flex items-center">1️⃣2️⃣ Real-World Greeting Program</h4>
                      <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-white/60 dark:bg-slate-950/50 p-2 rounded-lg border border-amber-100 dark:border-amber-800/30">
                        name = <span className="text-amber-500">"Alice"</span><br />
                        <span className="text-blue-500">print</span>(<span className="text-amber-500">"Welcome to Python"</span>)<br />
                        <span className="text-blue-500">print</span>(<span className="text-amber-500">"Hello"</span>, name)
                      </pre>
                    </div>
                  </button>

                </div>
              )}

            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-[#1e1e1e] rounded-2xl p-6 border border-slate-800 h-full min-h-[500px] shadow-2xl relative overflow-hidden flex flex-col mt-4 lg:mt-0">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <h3 className="font-bold text-slate-300 uppercase text-xs tracking-wider flex items-center">
                    <Terminal className="w-4 h-4 mr-2 text-indigo-400" />
                    Execution Console
                  </h3>
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                  </div>
                </div>

                <div className="font-mono text-sm flex flex-col flex-1 overflow-y-auto max-h-[440px]">
                  {consoleOutput.length === 0 ? (
                    <div className="text-slate-500 animate-pulse flex flex-col items-center justify-center mt-32">
                      <Code className="w-12 h-12 mb-4 opacity-20" />
                      <span>Run a demo block to view output...</span>
                    </div>
                  ) : (
                    consoleOutput.map((line, i) => (
                      <div key={i} className={`mb-1.5 animate-fade-in whitespace-pre text-white font-medium`}>
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

      {/* 4. Common Errors & Best Practices Data blocks */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">

        {/* Errors Block */}
        <div className="bg-rose-50 dark:bg-rose-900/10 p-8 rounded-3xl border border-rose-200 dark:border-rose-800/30 shadow-sm relative overflow-hidden h-full">
          <div className="absolute right-0 bottom-0 opacity-5">
            <AlertCircle className="w-48 h-48 text-rose-500" />
          </div>
          <h2 className="text-2xl font-bold text-rose-900 dark:text-rose-400 mb-6 flex items-center border-b border-rose-200 dark:border-rose-800/50 pb-4 relative z-10">
            1️⃣3️⃣ Common Beginner Mistakes
          </h2>

          <div className="space-y-6 relative z-10">
            <div>
              <h4 className="font-bold text-rose-700 dark:text-rose-400 mb-2">Missing Colon (:) at end of conditional</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border-t-4 border-rose-500 shadow-sm text-center">
                  <div className="text-rose-600 dark:text-rose-400 font-bold text-sm mb-2 uppercase tracking-wide">❌ Wrong</div>
                  <code className="block bg-rose-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-mono text-xs px-2 py-3 rounded mb-2 text-left w-full mx-auto">
                    <span className="text-blue-500 font-bold">if</span> x &gt; <span className="text-emerald-500">5</span><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-500">print</span>(x)
                  </code>
                  <div className="text-xs text-rose-500 font-bold">Error: SyntaxError</div>
                </div>

                <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border-t-4 border-emerald-500 shadow-sm text-center">
                  <div className="text-emerald-600 dark:text-emerald-400 font-bold text-sm mb-2 uppercase tracking-wide">✔ Correct</div>
                  <code className="block bg-emerald-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-mono text-xs px-2 py-3 rounded mb-2 text-left w-full mx-auto">
                    <span className="text-blue-500 font-bold">if</span> x &gt; <span className="text-emerald-500">5</span>:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-500">print</span>(x)
                  </code>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-rose-700 dark:text-rose-400 mb-2">Incorrect Indentation</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border-t-4 border-rose-500 shadow-sm text-center">
                  <div className="text-rose-600 dark:text-rose-400 font-bold text-sm mb-2 uppercase tracking-wide">❌ Wrong</div>
                  <code className="block bg-rose-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-mono text-xs px-2 py-3 rounded mb-2 text-left w-full">
                    <span className="text-blue-500 font-bold">if</span> <span className="text-indigo-400 font-bold">True</span>:<br />
                    <span className="text-blue-500">print</span>(<span className="text-amber-500">"Hello"</span>)
                  </code>
                  <div className="text-[10px] text-rose-500 font-bold">IndentationError</div>
                </div>

                <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border-t-4 border-emerald-500 shadow-sm text-center">
                  <div className="text-emerald-600 dark:text-emerald-400 font-bold text-sm mb-2 uppercase tracking-wide">✔ Correct</div>
                  <code className="block bg-emerald-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-mono text-xs px-2 py-3 rounded mb-2 text-left w-full">
                    <span className="text-blue-500 font-bold">if</span> <span className="text-indigo-400 font-bold">True</span>:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-500">print</span>(<span className="text-amber-500">"Hello"</span>)
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pro Tips Block */}
        <div className="bg-gradient-to-br from-indigo-800 to-indigo-950 p-8 rounded-3xl border border-indigo-700 shadow-xl relative overflow-hidden h-full text-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center border-b border-indigo-700 pb-4 relative z-10">
            <Lightbulb className="w-6 h-6 text-yellow-400 mr-3 shrink-0" />
            1️⃣4️⃣ Tips & Tricks
          </h2>

          <div className="space-y-4 relative z-10">
            <div className="bg-white/10 p-4 rounded-xl border border-white/10 flex items-start hover:bg-white/20 transition-colors">
              <div className="bg-indigo-500/30 p-2 rounded-lg mr-4 mt-0.5">
                <ShieldCheck className="w-5 h-5 text-indigo-300" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Follow PEP 8 Style Guide</h4>
                <p className="text-sm text-indigo-100 mb-2">Industry standard best practices:</p>
                <ul className="text-xs text-indigo-200 list-disc list-inside space-y-1">
                  <li>Use 4 spaces for indentation</li>
                  <li>Use meaningful variable names (<code className="bg-black/40 px-1 py-0.5 rounded text-white">user_name</code> vs <code className="bg-black/40 px-1 py-0.5 rounded text-white">un</code>)</li>
                  <li>Make code readable</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 p-4 rounded-xl border border-white/10 flex items-start hover:bg-white/20 transition-colors">
              <div className="bg-pink-500/30 p-2 rounded-lg mr-4 mt-0.5">
                <AlignLeft className="w-5 h-5 text-pink-300" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Avoid One-Line Programs</h4>
                <p className="text-sm text-indigo-100 mb-1">Don't sacrifice readability for shortness.</p>
                <code className="block bg-black/40 text-xs font-mono p-2 rounded text-rose-300 mb-2">x=5;y=6;print(x+y) # BAD</code>
                <code className="block bg-black/40 text-xs font-mono p-2 rounded text-emerald-300">x = 5<br />y = 6<br />print(x + y) # GOOD</code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Best Practices Checklist */}
      <section className="max-w-4xl mx-auto pb-16">
        <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800 p-8 rounded-3xl shadow-sm relative">
          <ShieldCheck className="absolute top-6 right-6 w-12 h-12 text-emerald-500/20" />
          <h2 className="text-2xl font-bold text-emerald-900 dark:text-emerald-400 mb-6 flex items-center">
            1️⃣5️⃣ Best Practices Summary
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center bg-white dark:bg-slate-800 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800/30 shadow-sm relative overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-400 group-hover:w-2 transition-all"></div>
              <div className="bg-emerald-100 dark:bg-emerald-900/40 p-2 rounded-full mr-4 ml-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Follow Python indentation rules (4 block spaces)</span>
            </div>
            <div className="flex items-center bg-white dark:bg-slate-800 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800/30 shadow-sm relative overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-400 group-hover:w-2 transition-all"></div>
              <div className="bg-emerald-100 dark:bg-emerald-900/40 p-2 rounded-full mr-4 ml-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Write readable and clean code</span>
            </div>
            <div className="flex items-center bg-white dark:bg-slate-800 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800/30 shadow-sm relative overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-400 group-hover:w-2 transition-all"></div>
              <div className="bg-emerald-100 dark:bg-emerald-900/40 p-2 rounded-full mr-4 ml-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Use meaningful & lowercase variable names</span>
            </div>
            <div className="flex items-center bg-white dark:bg-slate-800 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800/30 shadow-sm relative overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-400 group-hover:w-2 transition-all"></div>
              <div className="bg-emerald-100 dark:bg-emerald-900/40 p-2 rounded-full mr-4 ml-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Follow Python style guidelines (PEP-8)</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PythonSyntax;