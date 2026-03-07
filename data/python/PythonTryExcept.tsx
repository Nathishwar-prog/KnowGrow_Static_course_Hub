import React, { useState } from 'react';
import { 
  Code, Terminal, AlertCircle, CheckCircle2,
  Lightbulb, ShieldCheck, MessageSquareText, 
  Settings, ServerCrash, XCircle, SearchX, Layers, Zap
} from 'lucide-react';

const PythonTryExcept: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basic' | 'multiple' | 'flow' | 'raise'>('basic');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'without_handling':
        outLines = ['ZeroDivisionError: division by zero'];
        break;
      case 'basic_try':
        outLines = ['An error occurred'];
        break;
      case 'specific_try':
        outLines = ['You cannot divide by zero'];
        break;
      case 'multiple_exceptions':
        outLines = ['Invalid number'];
        break;
      case 'else_block':
        outLines = ['Result: 5.0'];
        break;
      case 'finally_block':
        outLines = ['Execution completed'];
        break;
      case 'full_example':
        outLines = ['Enter a number: 2', 'Result: 5.0', 'Program finished'];
        break;
      case 'raise_exception':
        outLines = ['ValueError: Number cannot be negative'];
        break;
    }

    setConsoleOutput(outLines);
  };

  const resetConsole = () => setConsoleOutput([]);

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-900 min-h-screen font-sans text-slate-800 dark:text-slate-200">
      
      {/* 1. Header Area */}
      <header className="max-w-4xl mx-auto text-center mb-16 pt-8">
        <div className="inline-flex items-center justify-center p-4 bg-rose-100 dark:bg-rose-900/30 rounded-2xl mb-6 shadow-sm border border-rose-200 dark:border-rose-800/50">
          <ServerCrash className="w-10 h-10 text-rose-600 dark:text-rose-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Python Try...Except <br/>
          <span className="text-2xl sm:text-3xl text-slate-500 font-medium mt-2 block">(Exception Handling)</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          In programming, errors can occur during program execution. Python provides exception handling using the <strong>try...except</strong> statement to prevent crashing.
        </p>
      </header>

      {/* 2. Intro Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 mb-8">
          <div className="flex items-center mb-6">
            <MessageSquareText className="w-6 h-6 text-rose-500 mr-3" />
            <h2 className="text-2xl font-bold">1️⃣ Introduction & 2️⃣ What is an Exception?</h2>
          </div>
          <p className="mb-6 text-slate-600 dark:text-slate-300">
            An exception is an error that occurs while a program is running. Instead of stopping the program entirely, Python allows you to handle the error and continue running gracefully.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-rose-50 dark:bg-rose-900/10 p-5 rounded-xl border border-rose-100 dark:border-rose-800/30">
               <h3 className="font-bold text-rose-800 dark:text-rose-300 mb-2 flex items-center"><XCircle className="w-4 h-4 mr-2"/> Without Handling</h3>
               <pre className="font-mono text-xs bg-slate-900 text-slate-300 p-3 rounded-lg border border-slate-800 mb-3">
<span className="text-blue-400">print</span>(<span className="text-emerald-400">10</span> / <span className="text-emerald-400">0</span>)
               </pre>
               <div className="text-xs bg-black/40 text-rose-400 p-2 rounded font-mono break-all font-bold">Output: ZeroDivisionError: division by zero</div>
               <p className="text-xs text-rose-700 dark:text-rose-300 mt-2">Here, Python completely stops the program because division by zero is mathematically not allowed.</p>
            </div>
            
            <div className="bg-emerald-50 dark:bg-emerald-900/10 p-5 rounded-xl border border-emerald-100 dark:border-emerald-800/30">
               <h3 className="font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center"><CheckCircle2 className="w-4 h-4 mr-2"/> With Handling (try...except)</h3>
               <p className="text-sm text-emerald-700 dark:text-emerald-200 mb-3">The <code className="font-bold text-emerald-800 dark:text-emerald-300">try</code> block contains potentially error-inducing code, and <code className="font-bold text-emerald-800 dark:text-emerald-300">except</code> handles it.</p>
               <pre className="font-mono text-xs bg-slate-900 text-slate-300 p-3 rounded-lg border border-slate-800">
<span className="text-blue-500 font-bold">try</span>:<br/>
<span className="bg-neutral-800 px-2 py-0.5 mt-0.5 rounded inline-block text-neutral-400 w-full"><span className="text-slate-500 italic"># code that may cause error</span></span><br/>
<span className="text-blue-500 font-bold">except</span>:<br/>
<span className="bg-neutral-800 px-2 py-0.5 mt-0.5 rounded inline-block text-neutral-400 w-full"><span className="text-slate-500 italic"># code to handle the error</span></span>
               </pre>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Syntax Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center">
            <Terminal className="w-8 h-8 mr-3 text-rose-500" />
            Exception Handling Lab
          </h2>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setActiveTab('basic')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'basic' ? 'bg-rose-600 text-white shadow-rose-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Zap className="w-4 h-4 mr-2" /> Basics
            </button>
            <button
              onClick={() => setActiveTab('multiple')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'multiple' ? 'bg-rose-600 text-white shadow-rose-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Layers className="w-4 h-4 mr-2" /> Multiple Excepts
            </button>
            <button
              onClick={() => setActiveTab('flow')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'flow' ? 'bg-rose-600 text-white shadow-rose-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Settings className="w-4 h-4 mr-2" /> Flow (else/finally)
            </button>
            <button
              onClick={() => setActiveTab('raise')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'raise' ? 'bg-rose-600 text-white shadow-rose-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <AlertCircle className="w-4 h-4 mr-2" /> Raise
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
            <div className="bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 min-h-[550px] overflow-y-auto">
              
              {activeTab === 'basic' && (
                <div className="animate-fade-in space-y-5">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">3️⃣-5️⃣ Core Try/Except Syntax</h3>

                  <button onClick={() => runDemo('without_handling')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-rose-300 dark:hover:border-rose-700 transition-colors relative shadow-sm">
                      <div className="absolute top-4 right-4 text-xs font-bold text-rose-500 bg-rose-100 dark:bg-rose-900/30 px-2 py-1 rounded opacity-50 group-hover:opacity-100 transition-opacity">CRASH DETECTED</div>
                      <h4 className="font-bold text-sm text-rose-600 dark:text-rose-400 mb-2">No Exception Handling</h4>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
<span className="text-blue-500">print</span>(<span className="text-emerald-500">10</span> / <span className="text-emerald-500">0</span>)
                      </pre>
                    </div>
                  </button>

                  <button onClick={() => runDemo('basic_try')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-amber-300 dark:hover:border-amber-700 transition-colors relative shadow-sm">
                      <div className="absolute top-4 right-4 text-xs font-bold text-amber-500 bg-amber-100 dark:bg-amber-900/30 px-2 py-1 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN</div>
                      <h4 className="font-bold text-sm text-amber-600 dark:text-amber-400 mb-2">4️⃣ Basic 'blanket' Catch</h4>
                      <div className="flex items-center text-[10px] text-slate-500 mb-2 bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded inline-block w-auto font-mono">
                         Try Block → Error Occurs → Except Block Executes
                      </div>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
<span className="text-blue-500 font-bold">try</span>:<br/>
<span className="bg-neutral-200 dark:bg-neutral-800">    </span><span className="text-blue-500">print</span>(<span className="text-emerald-500">10</span> / <span className="text-emerald-500">0</span>)<br/>
<span className="text-blue-500 font-bold">except</span>:<br/>
<span className="bg-neutral-200 dark:bg-neutral-800">    </span><span className="text-blue-500">print</span>(<span className="text-amber-500">"An error occurred"</span>)
                      </pre>
                    </div>
                  </button>

                  <button onClick={() => runDemo('specific_try')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors relative shadow-sm">
                      <div className="absolute top-4 right-4 text-xs font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-1 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN</div>
                      <h4 className="font-bold text-sm text-emerald-600 dark:text-emerald-400 mb-2">5️⃣ Specific Exception Catching</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">Instead of catching ALL errors, it's safer to catch specific ones.</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
<span className="text-blue-500 font-bold">try</span>:<br/>
<span className="bg-neutral-200 dark:bg-neutral-800">    </span>x = <span className="text-emerald-500">10</span> / <span className="text-emerald-500">0</span><br/>
<span className="text-blue-500 font-bold">except</span> <span className="text-rose-500 font-bold">ZeroDivisionError</span>:<br/>
<span className="bg-neutral-200 dark:bg-neutral-800">    </span><span className="text-blue-500">print</span>(<span className="text-amber-500">"You cannot divide by zero"</span>)
                      </pre>
                    </div>
                  </button>
                  
                </div>
              )}

              {activeTab === 'multiple' && (
                <div className="animate-fade-in space-y-4">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">6️⃣ Multiple Exceptions</h3>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">A program can declare multiple <code className="bg-slate-200 dark:bg-slate-700 px-1 py-0.5 rounded font-mono text-xs">except</code> blocks to handle different types of failures dynamically.</p>

                  <button onClick={() => runDemo('multiple_exceptions')} className="w-full text-left group">
                     <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-purple-300 dark:hover:border-purple-700 transition-colors relative">
                        <div className="absolute top-4 right-4 text-xs font-bold text-purple-500 bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN</div>
                        <h4 className="font-bold text-sm text-purple-600 dark:text-purple-400 mb-2">Handling varying error types</h4>
                        <pre className="font-mono text-[11.5px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-hidden">
<span className="text-blue-500 font-bold">try</span>:<br/>
<span className="bg-neutral-200 dark:bg-neutral-800">    </span>number = <span className="text-blue-500 font-bold">int</span>(<span className="text-amber-500">"Python"</span>) <span className="text-slate-400 italic"># Causes ValueError</span><br/>
<span className="text-blue-500 font-bold">except</span> <span className="text-rose-500 font-bold">ValueError</span>:<br/>
<span className="bg-neutral-200 dark:bg-neutral-800">    </span><span className="text-blue-500">print</span>(<span className="text-amber-500">"Invalid number"</span>)<br/>
<span className="text-blue-500 font-bold">except</span> <span className="text-rose-500 font-bold">TypeError</span>:<br/>
<span className="bg-neutral-200 dark:bg-neutral-800">    </span><span className="text-blue-500">print</span>(<span className="text-amber-500">"Type error occurred"</span>)
                        </pre>
                     </div>
                  </button>

                  <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/50 p-4 rounded-xl shadow-sm">
                     <h4 className="font-bold text-sm text-rose-800 dark:text-rose-300 mb-3 flex items-center"><SearchX className="w-4 h-4 mr-2"/> 1️⃣1️⃣ Common Exception Types</h4>
                     <table className="w-full text-left border-collapse bg-white dark:bg-slate-900 rounded-lg overflow-hidden border border-rose-200 dark:border-rose-800 text-xs">
                        <thead className="bg-rose-100 dark:bg-rose-900/50 text-rose-800 dark:text-rose-200">
                           <tr>
                              <th className="p-2 font-bold border-b border-rose-200 dark:border-rose-800">Exception</th>
                              <th className="p-2 font-bold border-b border-rose-200 dark:border-rose-800">Description</th>
                           </tr>
                        </thead>
                        <tbody className="text-slate-700 dark:text-slate-300 font-mono">
                           <tr>
                              <td className="p-2 border-b border-rose-100 dark:border-rose-900/30 text-rose-600 dark:text-rose-400 font-bold">ZeroDivisionError</td><td className="p-2 border-b border-rose-100 dark:border-rose-900/30 text-sans text-neutral-500">Division by zero</td>
                           </tr>
                           <tr>
                              <td className="p-2 border-b border-rose-100 dark:border-rose-900/30 text-rose-600 dark:text-rose-400 font-bold">ValueError</td><td className="p-2 border-b border-rose-100 dark:border-rose-900/30 text-sans text-neutral-500">Invalid value</td>
                           </tr>
                           <tr>
                              <td className="p-2 border-b border-rose-100 dark:border-rose-900/30 text-rose-600 dark:text-rose-400 font-bold">TypeError</td><td className="p-2 border-b border-rose-100 dark:border-rose-900/30 text-sans text-neutral-500">Wrong data type</td>
                           </tr>
                           <tr>
                              <td className="p-2 border-b border-rose-100 dark:border-rose-900/30 text-rose-600 dark:text-rose-400 font-bold">IndexError</td><td className="p-2 border-b border-rose-100 dark:border-rose-900/30 text-sans text-neutral-500">Index out of range</td>
                           </tr>
                           <tr>
                              <td className="p-2 text-rose-600 dark:text-rose-400 font-bold">FileNotFoundError</td><td className="p-2 text-sans text-neutral-500">File not found</td>
                           </tr>
                        </tbody>
                     </table>
                  </div>

                </div>
              )}

              {activeTab === 'flow' && (
                <div className="animate-fade-in space-y-4">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">Execution Flow Additions</h3>
                  
                  <button onClick={() => runDemo('else_block')} className="w-full text-left group">
                     <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-blue-300 dark:hover:border-blue-700 transition-colors relative">
                        <div className="absolute top-4 right-4 text-xs font-bold text-blue-500 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN</div>
                        <h4 className="font-bold text-sm text-blue-600 dark:text-blue-400 mb-2">7️⃣ Using `else`</h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">The else block runs <span className="font-bold border-b border-slate-400">only if no exception occurs</span>.</p>
                        <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-hidden w-full">
<span className="text-blue-500 font-bold">try</span>:<br/>
<span className="bg-neutral-200 dark:bg-neutral-800">    </span>result = <span className="text-emerald-500">10</span> / <span className="text-emerald-500">2</span><br/>
<span className="text-blue-500 font-bold">except</span> <span className="text-rose-500 font-bold">ZeroDivisionError</span>:<br/>
<span className="bg-neutral-200 dark:bg-neutral-800">    </span><span className="text-blue-500">print</span>(<span className="text-amber-500">"Division by zero"</span>)<br/>
<span className="text-blue-500 font-bold">else</span>:<br/>
<span className="bg-neutral-200 dark:bg-neutral-800">    </span><span className="text-blue-500">print</span>(<span className="text-amber-500">"Result:"</span>, result)
                        </pre>
                     </div>
                  </button>

                  <button onClick={() => runDemo('finally_block')} className="w-full text-left group">
                     <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors relative">
                        <div className="absolute top-4 right-4 text-xs font-bold text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-1 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN</div>
                        <h4 className="font-bold text-sm text-indigo-600 dark:text-indigo-400 mb-2">8️⃣ Using `finally`</h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mb-2 text-wrap pr-12">Executes ALWAYS, error or not. Critical for cleanup (closing files, DBs).</p>
                        <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-hidden w-full">
<span className="text-blue-500 font-bold">try</span>:<br/>
<span className="bg-neutral-200 dark:bg-neutral-800">    </span>x = <span className="text-emerald-500">10</span> / <span className="text-emerald-500">2</span><br/>
<span className="text-blue-500 font-bold">except</span>:<br/>
<span className="bg-neutral-200 dark:bg-neutral-800">    </span><span className="text-blue-500">print</span>(<span className="text-amber-500">"Error occurred"</span>)<br/>
<span className="text-blue-500 font-bold">finally</span>:<br/>
<span className="bg-neutral-200 dark:bg-neutral-800">    </span><span className="text-blue-500">print</span>(<span className="text-amber-500">"Execution completed"</span>)
                        </pre>
                     </div>
                  </button>

                  <button onClick={() => runDemo('full_example')} className="w-full text-left group">
                     <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors relative">
                        <div className="absolute top-4 right-4 text-xs font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-1 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN SIMULATION</div>
                        <h4 className="font-bold text-sm text-emerald-600 dark:text-emerald-400 mb-2">9️⃣ Full Try/Except Stack</h4>
                        <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-hidden w-full">
<span className="text-blue-500 font-bold">try</span>:<br/>
<span className="bg-neutral-200 dark:bg-neutral-800">    </span>num = <span className="text-blue-500 font-bold">int</span>(<span className="text-blue-500 font-bold">input</span>(<span className="text-amber-500">"Enter a number: "</span>))<br/>
<span className="bg-neutral-200 dark:bg-neutral-800">    </span>result = <span className="text-emerald-500">10</span> / num<br/>
<span className="text-blue-500 font-bold">except</span> <span className="text-rose-500 font-bold">ZeroDivisionError</span>:<br/>
<span className="bg-neutral-200 dark:bg-neutral-800">    </span><span className="text-blue-500">print</span>(<span className="text-amber-500">"Cannot divide by zero"</span>)<br/>
<span className="text-blue-500 font-bold">except</span> <span className="text-rose-500 font-bold">ValueError</span>:<br/>
<span className="bg-neutral-200 dark:bg-neutral-800">    </span><span className="text-blue-500">print</span>(<span className="text-amber-500">"Invalid input"</span>)<br/>
<span className="text-blue-500 font-bold">else</span>:<br/>
<span className="bg-neutral-200 dark:bg-neutral-800">    </span><span className="text-blue-500">print</span>(<span className="text-amber-500">"Result:"</span>, result)<br/>
<span className="text-blue-500 font-bold">finally</span>:<br/>
<span className="bg-neutral-200 dark:bg-neutral-800">    </span><span className="text-blue-500">print</span>(<span className="text-amber-500">"Program finished"</span>)
                        </pre>
                     </div>
                  </button>
                  
                </div>
              )}

              {activeTab === 'raise' && (
                <div className="animate-fade-in space-y-4">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">🔟 Raising Exceptions</h3>
                  
                  <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/50 p-4 rounded-xl shadow-sm">
                     <p className="text-sm text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">Python allows you to <span className="font-bold text-rose-600 dark:text-rose-400">manually</span> trigger an exception using the <code className="bg-rose-100 dark:bg-rose-900/50 text-rose-800 dark:text-rose-200 px-1 py-0.5 rounded font-mono text-xs font-bold">raise</code> keyword. This is incredibly useful for validating logic in your script.</p>

                     <button onClick={() => runDemo('raise_exception')} className="w-full text-left group">
                        <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-4 hover:border-rose-300 dark:hover:border-rose-700 transition-colors relative shadow-sm">
                           <div className="absolute top-4 right-4 text-[10px] font-bold text-rose-600 bg-rose-100 dark:bg-rose-900/50 px-2 py-0.5 rounded opacity-80 group-hover:opacity-100 transition-opacity">RUN</div>
                           <h4 className="font-bold text-sm text-rose-600 dark:text-rose-400 mb-2">Example: Value Checking</h4>
                           <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
x = <span className="text-emerald-500">-5</span><br/><br/>
<span className="text-blue-500 font-bold">if</span> x &lt; <span className="text-emerald-500">0</span>:<br/>
<span className="bg-neutral-200 dark:bg-neutral-800">    </span><span className="text-blue-500 font-bold">raise</span> <span className="text-rose-500 font-bold">ValueError</span>(<span className="text-amber-500">"Number cannot be negative"</span>)
                           </pre>
                        </div>
                     </button>
                  </div>
                  
                  <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-xl mt-4">
                     <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200 mb-2">1️⃣2️⃣ Real World Equivalent: Safe Calculator</h4>
                     <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">Instead of crashing your service when someone passes bad math.</p>
                     <pre className="font-mono text-[10px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
<span className="text-blue-500 font-bold">try</span>:<br/>
<span className="bg-neutral-200 dark:bg-neutral-800">    </span>a = <span className="text-blue-500 font-bold">int</span>(<span className="text-blue-500 font-bold">input</span>(<span className="text-amber-500">"1st num: "</span>))<br/>
<span className="bg-neutral-200 dark:bg-neutral-800">    </span>b = <span className="text-blue-500 font-bold">int</span>(<span className="text-blue-500 font-bold">input</span>(<span className="text-amber-500">"2nd num: "</span>))<br/>
<span className="bg-neutral-200 dark:bg-neutral-800">    </span><span className="text-blue-500">print</span>(a / b)<br/>
<span className="text-blue-500 font-bold">except</span> <span className="text-rose-500 font-bold">ZeroDivisionError</span>:<br/>
<span className="bg-neutral-200 dark:bg-neutral-800">    </span><span className="text-blue-500">print</span>(<span className="text-amber-500">"Cannot divide by zero"</span>)<br/>
<span className="text-blue-500 font-bold">except</span> <span className="text-rose-500 font-bold">ValueError</span>:<br/>
<span className="bg-neutral-200 dark:bg-neutral-800">    </span><span className="text-blue-500">print</span>(<span className="text-amber-500">"Please enter valid numbers"</span>)
                     </pre>
                  </div>
                </div>
              )}

            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-[#1e1e1e] rounded-2xl p-6 border border-slate-800 h-full min-h-[550px] shadow-2xl relative overflow-hidden flex flex-col mt-4 lg:mt-0">
               <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full blur-3xl"></div>
               <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <h3 className="font-bold text-slate-300 uppercase text-xs tracking-wider flex items-center">
                     <Terminal className="w-4 h-4 mr-2 text-rose-400" />
                     Interpreter Log
                  </h3>
                  <div className="flex space-x-1.5">
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                  </div>
                  </div>

                  <div className="font-mono text-sm flex flex-col flex-1 overflow-y-auto max-h-[500px]">
                  {consoleOutput.length === 0 ? (
                     <div className="text-slate-500 animate-pulse flex flex-col items-center justify-center mt-32">
                        <Code className="w-12 h-12 mb-4 opacity-20" />
                        <span>Run a try-except block to see output...</span>
                     </div>
                  ) : (
                     consoleOutput.map((line, i) => (
                        <div key={i} className={`mb-1.5 animate-fade-in whitespace-pre font-medium ${
                           line.includes('Error') || line.includes('error') ? 'text-rose-400 font-bold' :
                           line.includes('Result:') ? 'text-blue-300' :
                           line.includes('completed') || line.includes('finished') ? 'text-slate-400 italic' :
                           'text-white'
                        }`}>
                           {line.includes('Enter') ? <span className="text-slate-400">{line}</span> : line}
                        </div>
                     ))
                  )}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Common Errors & Tips Section */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        
        {/* Mistakes Block */}
        <div className="bg-rose-50 dark:bg-rose-900/10 p-8 rounded-3xl border border-rose-200 dark:border-rose-800/30 shadow-sm relative overflow-hidden h-full">
          <div className="absolute right-0 bottom-0 opacity-5">
             <AlertCircle className="w-48 h-48 text-rose-500" />
          </div>
          <h2 className="text-2xl font-bold text-rose-900 dark:text-rose-400 mb-6 flex items-center border-b border-rose-200 dark:border-rose-800/50 pb-4 relative z-10">
            1️⃣3️⃣ Common Beginner Mistakes
          </h2>
          
          <div className="space-y-6 relative z-10">
             <div>
                <h4 className="font-bold text-rose-700 dark:text-rose-400 mb-2">1. Catching ALL Exceptions Secretly</h4>
                <p className="text-xs text-rose-800/70 dark:text-rose-300/70 mb-2">A "blanket" catch hides critical runtime errors and limits debugging capability.</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border-t-4 border-rose-500 shadow-sm">
                     <div className="text-rose-600 dark:text-rose-400 font-bold text-sm mb-2 uppercase tracking-wide flex items-center"><XCircle className="w-4 h-4 mr-1"/> Wrong</div>
                     <code className="block bg-rose-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-mono text-xs px-2 py-3 rounded mb-2">
                        <span className="text-blue-500 font-bold">except</span>:<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-500 font-bold">pass</span>
                     </code>
                  </div>

                  <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border-t-4 border-emerald-500 shadow-sm">
                     <div className="text-emerald-600 dark:text-emerald-400 font-bold text-sm mb-2 uppercase tracking-wide flex items-center"><CheckCircle2 className="w-4 h-4 mr-1"/> Correct</div>
                     <code className="block bg-emerald-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-mono text-xs px-2 py-3 rounded mb-2">
                     <span className="text-blue-500 font-bold">except</span> <span className="text-rose-500 font-bold">ValueError</span>:<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-500 italic"># handle it explicitly</span>
                     </code>
                  </div>
                </div>
             </div>

             <div>
                <h4 className="font-bold text-rose-700 dark:text-rose-400 mb-2">2. Wrong Exception Fallthrough Order</h4>
                <p className="text-xs text-rose-800/70 dark:text-rose-300/70 mb-2">Specific exceptions should always be caught <b>before</b> generalized ones.</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border-t-4 border-rose-500 shadow-sm">
                     <div className="text-rose-600 dark:text-rose-400 font-bold text-sm mb-2 uppercase tracking-wide">❌ Wrong</div>
                     <code className="block bg-rose-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-mono text-[11px] px-2 py-3 rounded mb-2">
                        <span className="text-blue-500 font-bold">except</span> <span className="text-rose-500 font-bold">Exception</span>:<br/>
                        <span className="text-blue-500 font-bold">except</span> <span className="text-rose-500 font-bold">ValueError</span>:
                     </code>
                  </div>

                  <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border-t-4 border-emerald-500 shadow-sm">
                     <div className="text-emerald-600 dark:text-emerald-400 font-bold text-sm mb-2 uppercase tracking-wide">✔ Correct</div>
                     <code className="block bg-emerald-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-mono text-[11px] px-2 py-3 rounded mb-2">
                        <span className="text-blue-500 font-bold">except</span> <span className="text-rose-500 font-bold">ValueError</span>:<br/>
                        <span className="text-blue-500 font-bold">except</span> <span className="text-rose-500 font-bold">Exception</span>:
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
            1️⃣4️⃣ Pro Dev Tips
          </h2>
          
          <div className="space-y-4 relative z-10">
             <div className="bg-white/10 p-4 rounded-xl border border-white/10 flex items-start hover:bg-white/20 transition-colors">
                <div className="bg-indigo-500/30 p-2 rounded-lg mr-4 mt-0.5">
                   <ShieldCheck className="w-5 h-5 text-indigo-300" />
                </div>
                <div>
                   <h4 className="font-bold mb-1">Keep Try Blocks Small</h4>
                   <p className="text-sm text-indigo-100 mb-2">Don't wrap hundreds of lines of code inside a single try block. Only wrap the exact line or lines that might actually fail.</p>
                   <code className="block bg-black/40 text-xs font-mono p-2 rounded text-emerald-300">try:<br/>&nbsp;&nbsp;&nbsp;&nbsp;value = int(input())</code>
                </div>
             </div>
             
             <div className="bg-white/10 p-4 rounded-xl border border-white/10 flex items-start hover:bg-white/20 transition-colors">
                <div className="bg-pink-500/30 p-2 rounded-lg mr-4 mt-0.5">
                   <AlertCircle className="w-5 h-5 text-pink-300" />
                </div>
                <div>
                   <h4 className="font-bold mb-1">Use Specific Catching</h4>
                   <p className="text-sm text-indigo-100 mb-1">Instead of <code className="bg-black/40 text-xs p-0.5 rounded text-white font-mono font-bold">except:</code> exclusively use <code className="bg-black/40 text-xs p-0.5 rounded text-white font-mono font-bold">except ValueError:</code>. It vastly improves debugging capabilities across projects.</p>
                </div>
             </div>

             <div className="bg-white/10 p-4 rounded-xl border border-white/10 flex items-start hover:bg-white/20 transition-colors">
                <div className="bg-amber-500/30 p-2 rounded-lg mr-4 mt-0.5">
                   <Layers className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                   <h4 className="font-bold mb-1">Use Finally for Resources</h4>
                   <p className="text-sm text-indigo-100 mb-1">Always use <code className="bg-black/40 text-xs p-0.5 rounded text-white font-mono font-bold">finally: file.close()</code> style block ending when operating on live files or database connections so they are cleanly closed.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 5. Summary / Best Practices */}
      <section className="max-w-6xl mx-auto pb-16 grid lg:grid-cols-2 gap-8">
         <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 p-8 rounded-3xl shadow-sm relative overflow-hidden h-full">
            <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-400 mb-6 flex items-center">
               1️⃣6️⃣ Quick Summary Reference
            </h2>
            <table className="w-full text-left border-collapse bg-white dark:bg-slate-900 rounded-lg overflow-hidden border border-blue-200 dark:border-blue-800 text-sm">
               <thead className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200">
                  <tr>
                     <th className="p-3 font-bold border-b border-blue-200 dark:border-blue-800">Keyword</th>
                     <th className="p-3 font-bold border-b border-blue-200 dark:border-blue-800">Purpose</th>
                  </tr>
               </thead>
               <tbody className="text-slate-700 dark:text-slate-300">
                  <tr>
                     <td className="p-3 border-b border-blue-100 dark:border-blue-900/30 text-blue-600 dark:text-blue-400 font-bold font-mono">try</td><td className="p-3 border-b border-blue-100 dark:border-blue-900/30">Code that might cause an error</td>
                  </tr>
                  <tr>
                     <td className="p-3 border-b border-blue-100 dark:border-blue-900/30 text-blue-600 dark:text-blue-400 font-bold font-mono">except</td><td className="p-3 border-b border-blue-100 dark:border-blue-900/30">Handles the error execution track</td>
                  </tr>
                  <tr>
                     <td className="p-3 border-b border-blue-100 dark:border-blue-900/30 text-blue-600 dark:text-blue-400 font-bold font-mono">else</td><td className="p-3 border-b border-blue-100 dark:border-blue-900/30">Runs if no error occurs in try block</td>
                  </tr>
                  <tr>
                     <td className="p-3 border-b border-blue-100 dark:border-blue-900/30 text-blue-600 dark:text-blue-400 font-bold font-mono">finally</td><td className="p-3 border-b border-blue-100 dark:border-blue-900/30">Always executes regardless of errors</td>
                  </tr>
                  <tr>
                     <td className="p-3 text-blue-600 dark:text-blue-400 font-bold font-mono">raise</td><td className="p-3">Manually trigger an exception event</td>
                  </tr>
               </tbody>
            </table>
         </div>

         <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800 p-8 rounded-3xl shadow-sm relative h-full flex flex-col justify-center">
           <ShieldCheck className="absolute top-6 right-6 w-12 h-12 text-emerald-500/20" />
           <h2 className="text-2xl font-bold text-emerald-900 dark:text-emerald-400 mb-6 flex items-center">
            1️⃣5️⃣ Best Practices Summary
          </h2>
          <div className="grid gap-4">
            <div className="flex items-center bg-white dark:bg-slate-800 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800/30 shadow-sm relative overflow-hidden group">
               <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-400 group-hover:w-2 transition-all"></div>
               <div className="bg-emerald-100 dark:bg-emerald-900/40 p-2 rounded-full mr-4 ml-2">
                 <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
               </div>
               <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Catch explicit/specific exceptions, not blanket exceptions</span>
            </div>
            <div className="flex items-center bg-white dark:bg-slate-800 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800/30 shadow-sm relative overflow-hidden group">
               <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-400 group-hover:w-2 transition-all"></div>
               <div className="bg-emerald-100 dark:bg-emerald-900/40 p-2 rounded-full mr-4 ml-2">
                 <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
               </div>
               <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Use <strong>finally</strong> for important resource cleanup tasks</span>
            </div>
            <div className="flex items-center bg-white dark:bg-slate-800 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800/30 shadow-sm relative overflow-hidden group">
               <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-400 group-hover:w-2 transition-all"></div>
               <div className="bg-emerald-100 dark:bg-emerald-900/40 p-2 rounded-full mr-4 ml-2">
                 <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
               </div>
               <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Avoid completely silent exception handling (`pass`)</span>
            </div>
            <div className="flex items-center bg-white dark:bg-slate-800 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800/30 shadow-sm relative overflow-hidden group">
               <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-400 group-hover:w-2 transition-all"></div>
               <div className="bg-emerald-100 dark:bg-emerald-900/40 p-2 rounded-full mr-4 ml-2">
                 <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
               </div>
               <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Keep try blocks incredibly minimal in code lines</span>
            </div>
          </div>
         </div>
      </section>

    </div>
  );
};

export default PythonTryExcept;