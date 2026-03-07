import React, { useState } from 'react';
import { 
  Code, Terminal, AlertCircle, CheckCircle2,
  Lightbulb, ShieldCheck, MessageSquareText, 
  Keyboard, Type, ArrowRightLeft, ListMinus, SplitSquareHorizontal
} from 'lucide-react';

const PythonUserInput: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'casting' | 'multiple' | 'lists'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'basic_input':
        outLines = ['Enter your name: John', 'Hello John'];
        break;
      case 'input_string':
        outLines = ['Enter your age: 25', "<class 'str'>"];
        break;
      case 'cast_int':
        outLines = ['Enter your age: 20', '25'];
        break;
      case 'cast_float':
        outLines = ['Enter price: 10.5', '10.5'];
        break;
      case 'multiple_inputs':
        outLines = ['Enter your name: John', 'Enter your city: Chennai', 'John lives in Chennai'];
        break;
      case 'split_input':
        outLines = ['Enter two numbers: 10 20', '10', '20'];
        break;
      case 'map_integers':
        outLines = ['Enter two numbers: 5 7', '12'];
        break;
      case 'simple_calc':
        outLines = ['Enter first number: 5', 'Enter second number: 10', 'Sum = 15'];
        break;
      case 'list_input':
        outLines = ['Enter numbers: 1 2 3 4', '[1, 2, 3, 4]'];
        break;
      case 'default_msg':
        outLines = ['Enter your username: admin', 'Welcome admin'];
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
          <Keyboard className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Python User Input
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          In many programs, we need to get information from the user while the program is running. Python allows this using the <code className="bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 font-bold px-2 py-0.5 rounded">input()</code> function.
        </p>
      </header>

      {/* 2. Intro Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 mb-8">
          <div className="flex items-center mb-6">
            <MessageSquareText className="w-6 h-6 text-indigo-500 mr-3" />
            <h2 className="text-2xl font-bold">1️⃣ Introduction & 2️⃣ The `input()` Function</h2>
          </div>
          <p className="mb-6 text-slate-600 dark:text-slate-300">
            User input in Python means receiving data from the user using the keyboard. It is essential for creating interactive programs, building calculators, and collecting specific runtime information.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-indigo-50 dark:bg-indigo-900/10 p-5 rounded-xl border border-indigo-100 dark:border-indigo-800/30">
               <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2">Syntax Usage</h3>
               <pre className="font-mono text-xs bg-slate-900 text-slate-300 p-3 rounded-lg border border-slate-800 mb-3">
<span className="text-blue-400 font-bold">input</span>(<span className="text-emerald-400">"message"</span>)
               </pre>
               <table className="w-full text-left border-collapse bg-white/60 dark:bg-slate-950/50 rounded-lg overflow-hidden border border-indigo-100 dark:border-indigo-800/30 text-xs">
                  <thead className="bg-indigo-100/50 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300">
                     <tr>
                        <th className="p-2 font-bold border-b border-indigo-100 dark:border-indigo-800/50">Part</th>
                        <th className="p-2 font-bold border-b border-indigo-100 dark:border-indigo-800/50">Description</th>
                     </tr>
                  </thead>
                  <tbody className="text-slate-700 dark:text-slate-300">
                     <tr>
                        <td className="p-2 border-b border-indigo-50 dark:border-indigo-900/20 font-mono font-bold">input()</td><td className="p-2 border-b border-indigo-50 dark:border-indigo-900/20 text-neutral-500">Reads user input from keyboard</td>
                     </tr>
                     <tr>
                        <td className="p-2 font-mono font-bold text-amber-600 dark:text-amber-400">"message"</td><td className="p-2 text-neutral-500">Prompt message displayed</td>
                     </tr>
                  </tbody>
               </table>
            </div>
            
            <div className="bg-amber-50 dark:bg-amber-900/10 p-5 rounded-xl border border-amber-100 dark:border-amber-800/30 flex flex-col justify-center">
               <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center">Visualization Flow</h3>
               <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm font-mono text-xs font-bold text-slate-600 dark:text-slate-400 text-center flex flex-col items-center justify-center space-y-2 relative border border-amber-200 dark:border-amber-800/50">
                  <div className="w-full py-1.5 bg-slate-100 dark:bg-slate-800 rounded">Program <span className="text-amber-500 mx-2">→</span> Asks User</div>
                  <div className="text-amber-400">↓</div>
                  <div className="w-full py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded">User types "John"</div>
                  <div className="text-amber-400">↓</div>
                  <div className="w-full py-1.5 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded">Program Prints "Hello John"</div>
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
            Interactive Input Lab
          </h2>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setActiveTab('basics')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'basics' ? 'bg-indigo-600 text-white shadow-indigo-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Type className="w-4 h-4 mr-2" /> Basics & Strings
            </button>
            <button
              onClick={() => setActiveTab('casting')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'casting' ? 'bg-indigo-600 text-white shadow-indigo-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <ArrowRightLeft className="w-4 h-4 mr-2" /> Type Casting
            </button>
            <button
              onClick={() => setActiveTab('multiple')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'multiple' ? 'bg-indigo-600 text-white shadow-indigo-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <SplitSquareHorizontal className="w-4 h-4 mr-2" /> Multiple / Split
            </button>
            <button
              onClick={() => setActiveTab('lists')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'lists' ? 'bg-indigo-600 text-white shadow-indigo-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <ListMinus className="w-4 h-4 mr-2" /> Lists & Config
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
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">3️⃣-4️⃣ Basics & String Types</h3>

                  <button onClick={() => runDemo('basic_input')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors relative shadow-sm">
                      <div className="absolute top-4 right-4 text-[10px] font-bold text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">SIMULATE</div>
                      <h4 className="font-bold text-sm text-indigo-600 dark:text-indigo-400 mb-2">3️⃣ Basic Example</h4>
                      <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
name = <span className="text-blue-500 font-bold">input</span>(<span className="text-amber-500">"Enter your name: "</span>)<br/><br/>
<span className="text-blue-500">print</span>(<span className="text-amber-500">"Hello"</span>, name)
                      </pre>
                    </div>
                  </button>

                  <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/50 rounded-xl p-4 shadow-sm relative overflow-hidden">
                     <AlertCircle className="absolute -bottom-2 -right-2 w-16 h-16 text-rose-500/10" />
                     <h4 className="font-bold text-sm text-rose-700 dark:text-rose-400 mb-2">4️⃣ Input Always Returns a String</h4>
                     <p className="text-xs text-rose-800/80 dark:text-rose-300/80 mb-3">Even if the user enters strictly numbers (like age), Python treats the data specifically as `<code className="font-bold">str</code>` by default.</p>
                     
                     <button onClick={() => runDemo('input_string')} className="w-full text-left group">
                        <div className="bg-white/80 dark:bg-slate-950/80 p-3 rounded-lg border border-rose-200 dark:border-rose-800/50 hover:border-rose-400 transition-colors relative z-10">
                           <div className="absolute top-3 right-3 text-[10px] font-bold text-rose-600 bg-rose-200 dark:bg-rose-900/50 px-2 py-0.5 rounded opacity-80 group-hover:opacity-100 transition-opacity">SIMULATE</div>
                           <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300">
age = <span className="text-blue-500 font-bold">input</span>(<span className="text-amber-500">"Enter your age: "</span>)<br/><br/>
<span className="text-blue-500">print</span>(<span className="text-blue-400 font-bold">type</span>(age))
                           </pre>
                        </div>
                     </button>
                  </div>
                </div>
              )}

              {activeTab === 'casting' && (
                <div className="animate-fade-in space-y-4">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">5️⃣ Type Casting</h3>
                  <p className="text-[13px] text-slate-600 dark:text-slate-400">To use input mathematically or logically, we <b>must</b> explicitly convert (cast) the string data.</p>
                  
                  <button onClick={() => runDemo('cast_int')} className="w-full text-left group">
                     <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">SIMULATE</div>
                        <h4 className="font-bold text-sm text-emerald-600 dark:text-emerald-400 mb-2">Integer Input Casting</h4>
                        <pre className="font-mono text-[11.5px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-hidden">
age = <span className="text-emerald-500 font-bold">int</span>(<span className="text-blue-500 font-bold">input</span>(<span className="text-amber-500">"Enter your age: "</span>))<br/><br/>
<span className="text-blue-500">print</span>(age + <span className="text-emerald-500">5</span>)
                        </pre>
                     </div>
                  </button>

                  <button onClick={() => runDemo('cast_float')} className="w-full text-left group">
                     <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-amber-300 dark:hover:border-amber-700 transition-colors relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-amber-500 bg-amber-100 dark:bg-amber-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">SIMULATE</div>
                        <h4 className="font-bold text-sm text-amber-600 dark:text-amber-400 mb-2">Float Input Casting</h4>
                        <pre className="font-mono text-[11.5px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-hidden">
price = <span className="text-amber-500 font-bold">float</span>(<span className="text-blue-500 font-bold">input</span>(<span className="text-amber-500">"Enter price: "</span>))<br/><br/>
<span className="text-blue-500">print</span>(price)
                        </pre>
                     </div>
                  </button>

                  <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-xl shadow-sm mt-4">
                     <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200 mb-2">8️⃣ Real-World Example: Simple Calc</h4>
                     
                     <button onClick={() => runDemo('simple_calc')} className="w-full text-left group">
                        <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-3 hover:border-slate-400 transition-colors relative shadow-sm">
                           <div className="absolute top-3 right-3 text-[10px] font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded opacity-80 group-hover:opacity-100 transition-opacity">SIMULATE</div>
                           <pre className="font-mono text-[10px] text-slate-700 dark:text-slate-300">
n1 = <span className="text-emerald-500 font-bold">int</span>(<span className="text-blue-500 font-bold">input</span>(<span className="text-amber-500">"Enter 1st num: "</span>))<br/>
n2 = <span className="text-emerald-500 font-bold">int</span>(<span className="text-blue-500 font-bold">input</span>(<span className="text-amber-500">"Enter 2nd num: "</span>))<br/><br/>
res = n1 + n2<br/>
<span className="text-blue-500">print</span>(<span className="text-amber-500">"Sum ="</span>, res)
                           </pre>
                        </div>
                     </button>
                  </div>
                </div>
              )}

              {activeTab === 'multiple' && (
                <div className="animate-fade-in space-y-4">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">6️⃣-7️⃣ Multiple & Split Inputs</h3>
                  
                  <button onClick={() => runDemo('multiple_inputs')} className="w-full text-left group">
                     <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-blue-300 dark:hover:border-blue-700 transition-colors relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-blue-500 bg-blue-100 dark:bg-blue-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">SIMULATE</div>
                        <h4 className="font-bold text-sm text-blue-600 dark:text-blue-400 mb-2">6️⃣ Multiple Standard Inputs</h4>
                        <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-hidden w-full">
name = <span className="text-blue-500 font-bold">input</span>(<span className="text-amber-500">"Enter your name: "</span>)<br/>
city = <span className="text-blue-500 font-bold">input</span>(<span className="text-amber-500">"Enter your city: "</span>)<br/><br/>
<span className="text-blue-500">print</span>(name, <span className="text-amber-500">"lives in"</span>, city)
                        </pre>
                     </div>
                  </button>

                  <div className="bg-purple-50 dark:bg-purple-900/10 p-4 rounded-xl border border-purple-100 dark:border-purple-800/30">
                     <h4 className="font-bold text-sm text-purple-800 dark:text-purple-300 mb-2">7️⃣ Taking Multiple Values conditionally inline</h4>
                     <p className="text-xs text-purple-700 dark:text-purple-200 mb-3">Use <code className="font-bold bg-white/50 dark:bg-slate-900/50 px-1 rounded">split()</code> to separate values.</p>

                     <div className="space-y-3">
                        <button onClick={() => runDemo('split_input')} className="w-full text-left group">
                           <div className="bg-white dark:bg-slate-950 border border-purple-200 dark:border-purple-800/50 rounded-xl p-3 hover:border-purple-400 transition-colors relative shadow-sm">
                              <div className="absolute top-3 right-3 text-[10px] font-bold text-purple-600 bg-purple-100 dark:bg-purple-900/50 px-2 py-0.5 rounded opacity-80 group-hover:opacity-100 transition-opacity">SIMULATE (Strings)</div>
                              <pre className="font-mono text-[10.5px] text-slate-700 dark:text-slate-300">
a, b = <span className="text-blue-500 font-bold">input</span>(<span className="text-amber-500">"Enter 2 numbers: "</span>).<span className="text-purple-500 font-bold">split</span>()<br/><br/>
<span className="text-blue-500">print</span>(a)<br/>
<span className="text-blue-500">print</span>(b)
                              </pre>
                           </div>
                        </button>

                        <button onClick={() => runDemo('map_integers')} className="w-full text-left group">
                           <div className="bg-white dark:bg-slate-950 border border-emerald-200 dark:border-emerald-800/50 rounded-xl p-3 hover:border-emerald-400 transition-colors relative shadow-sm">
                              <div className="absolute top-3 right-3 text-[10px] font-bold text-emerald-600 bg-emerald-100 dark:bg-emerald-900/50 px-2 py-0.5 rounded opacity-80 group-hover:opacity-100 transition-opacity">SIMULATE (Map ints)</div>
                              <p className="text-[10px] text-slate-500 dark:text-slate-400 mb-2 font-medium">Converting to Integers via Map:</p>
                              <pre className="font-mono text-[10px] text-slate-700 dark:text-slate-300">
a,b = <span className="text-blue-400 font-bold">map</span>(<span className="text-emerald-500 font-bold">int</span>, <span className="text-blue-500 font-bold">input</span>(<span className="text-amber-500">"Nums: "</span>).<span className="text-purple-500 font-bold">split</span>())<br/><br/>
<span className="text-blue-500">print</span>(a + b)
                              </pre>
                           </div>
                        </button>
                     </div>
                  </div>
                </div>
              )}

              {activeTab === 'lists' && (
                <div className="animate-fade-in space-y-4">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">9️⃣-🔟 Lists & Prompts</h3>
                  
                  <div className="bg-teal-50 dark:bg-teal-900/10 border border-teal-200 dark:border-teal-800 p-4 rounded-xl shadow-sm">
                     <p className="text-sm text-teal-800 dark:text-teal-300 mb-3 leading-relaxed">
                        Wrap mapped separated input dynamically in a <code className="font-bold bg-white/50 dark:bg-slate-900/50 px-1 rounded">list()</code> wrapper for immediate algorithm processing arrays.
                     </p>
                     
                     <button onClick={() => runDemo('list_input')} className="w-full text-left group">
                        <div className="bg-white dark:bg-slate-950 border border-teal-200 dark:border-teal-800 rounded-xl p-4 hover:border-teal-400 dark:hover:border-teal-600 transition-colors relative shadow-sm">
                           <div className="absolute top-4 right-4 text-[10px] font-bold text-teal-600 bg-teal-100 dark:bg-teal-900/50 px-2 py-0.5 rounded opacity-80 group-hover:opacity-100 transition-opacity">SIMULATE</div>
                           <h4 className="font-bold text-sm text-teal-700 dark:text-teal-400 mb-2">9️⃣ Taking List Input</h4>
                           <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 p-1">
nums = <span className="text-blue-400 font-bold">list</span>(<br/>
<span className="bg-neutral-200 dark:bg-neutral-800">  </span><span className="text-blue-400 font-bold">map</span>(<span className="text-emerald-500 font-bold">int</span>, <span className="text-blue-500 font-bold">input</span>(<span className="text-amber-500">"Nums: "</span>).<span className="text-purple-500 font-bold">split</span>())<br/>
)<br/>
<span className="text-blue-500">print</span>(nums)
                           </pre>
                        </div>
                     </button>
                  </div>

                  <button onClick={() => runDemo('default_msg')} className="w-full text-left group mt-4">
                     <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-slate-300 dark:hover:border-slate-600 transition-colors relative shadow-sm">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-slate-600 bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded opacity-80 group-hover:opacity-100 transition-opacity">SIMULATE</div>
                        <h4 className="font-bold text-sm text-slate-700 dark:text-slate-400 mb-2">🔟 Input with Default Message</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">Always give a clear prompt to guide users on exactly what you need.</p>
                        <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-white/60 dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
username = <span className="text-blue-500 font-bold">input</span>(<span className="text-amber-500">"Enter your username: "</span>)
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
                     Execution / CLI Log
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
                        <span>Run an input simulation to see output...</span>
                     </div>
                  ) : (
                     consoleOutput.map((line, i) => {
                        const isInputLine = line.includes('Enter');
                        return (
                           <div key={i} className={`mb-1.5 animate-fade-in whitespace-pre font-medium ${
                              line.includes('class') ? 'text-blue-300' :
                              line.includes('[') ? 'text-amber-300 italic' :
                              (isInputLine && !line.includes('15') && !line.includes('12')) ? 'text-emerald-400' :
                              'text-white'
                           }`}>
                              {isInputLine ? (
                                 <>
                                    <span className="text-slate-400">{line.split(':')[0]}:</span>
                                    <span className="text-emerald-400 ml-1">{line.split(':')[1]}</span>
                                 </>
                              ) : line}
                           </div>
                        )
                     })
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
            1️⃣1️⃣ Common Beginner Mistakes
          </h2>
          
          <div className="space-y-6 relative z-10">
             <div>
                <h4 className="font-bold text-rose-700 dark:text-rose-400 mb-2">Forgetting Type Conversion</h4>
                <p className="text-xs text-rose-800/70 dark:text-rose-300/70 mb-2">Because Python joins strings by default, summing pure inputs causes concatenation.</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border-t-4 border-rose-500 shadow-sm">
                     <div className="text-rose-600 dark:text-rose-400 font-bold text-sm mb-2 uppercase tracking-wide">❌ Wrong (Joins)</div>
                     <code className="block bg-rose-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-mono text-[10px] px-2 py-3 rounded mb-2">
                        a = <span className="text-blue-500 font-bold">input</span>(<span className="text-amber-500">"N:"</span>)<br/>
                        b = <span className="text-blue-500 font-bold">input</span>(<span className="text-amber-500">"N:"</span>)<br/>
                        <span className="text-blue-500">print</span>(a+b) <span className="text-rose-500 italic"># "23"</span>
                     </code>
                  </div>

                  <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border-t-4 border-emerald-500 shadow-sm">
                     <div className="text-emerald-600 dark:text-emerald-400 font-bold text-sm mb-2 uppercase tracking-wide">✔ Correct (Maps Int)</div>
                     <code className="block bg-emerald-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-mono text-[10px] px-2 py-3 rounded mb-2">
                        a = <span className="text-emerald-500 font-bold">int</span>(<span className="text-blue-500 font-bold">input</span>(<span className="text-amber-500">"N:"</span>))<br/>
                        b = <span className="text-emerald-500 font-bold">int</span>(<span className="text-blue-500 font-bold">input</span>(<span className="text-amber-500">"N:"</span>))<br/>
                        <span className="text-blue-500">print</span>(a+b) <span className="text-emerald-500 italic"># 5</span>
                     </code>
                  </div>
                </div>
             </div>

             <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-rose-100 dark:border-rose-800/30">
                <h4 className="font-bold text-rose-700 dark:text-rose-400 mb-1">Invalid Number Input Crash</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">If a user enters text where an integer is functionally required (<code className="font-mono">int(input())</code>), it throws a total <code className="font-bold text-rose-500 uppercase tracking-widest text-[10px] bg-rose-50 py-0.5 px-1 rounded dark:bg-slate-900 border border-rose-200">ValueError</code>.</p>
                <div className="bg-rose-100/50 dark:bg-rose-900/30 text-rose-800 dark:text-rose-300 text-[11px] p-2 rounded border border-rose-200 dark:border-rose-800 flex items-center">
                   <ShieldCheck className="w-4 h-4 mr-2" />
                   Fix: Use exception handling (try-except) in production programs.
                </div>
             </div>
          </div>
        </div>

        {/* Pro Tips Block */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-950 p-8 rounded-3xl border border-slate-700 shadow-xl relative overflow-hidden h-full text-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center border-b border-slate-700 pb-4 relative z-10">
            <Lightbulb className="w-6 h-6 text-yellow-400 mr-3 shrink-0" />
            1️⃣2️⃣ Dev Tips & Tricks
          </h2>
          
          <div className="space-y-4 relative z-10">
             <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-start hover:bg-white/10 transition-colors">
                <div className="bg-indigo-500/30 p-2 rounded-lg mr-4 mt-0.5">
                   <ArrowRightLeft className="w-5 h-5 text-indigo-300" />
                </div>
                <div>
                   <h4 className="font-bold mb-1">Always Evaluate & Convert Explicitly</h4>
                   <p className="text-sm text-slate-300 mb-2">If it logically represents a number, lock it down structurally immediately with <code className="font-mono text-[10px] bg-black/40 px-1 py-0.5 rounded text-emerald-300">num = int(input())</code>.</p>
                </div>
             </div>
             
             <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-start hover:bg-white/10 transition-colors">
                <div className="bg-teal-500/30 p-2 rounded-lg mr-4 mt-0.5">
                   <ListMinus className="w-5 h-5 text-teal-300" />
                </div>
                <div>
                   <h4 className="font-bold mb-1">Use `strip()` for Sanitation</h4>
                   <p className="text-[12px] text-slate-300 mb-1">Users frequently append random whitespaces accidentally. Strip it on ingestion: <code className="font-mono text-[10px] bg-black/40 px-1 py-0.5 rounded text-teal-200 ml-1">name = input().strip()</code>.</p>
                </div>
             </div>

             <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-start hover:bg-white/10 transition-colors">
                <div className="bg-amber-500/30 p-2 rounded-lg mr-4 mt-0.5">
                   <Terminal className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                   <h4 className="font-bold mb-1">Combine Input and F-String Formatting</h4>
                   <p className="text-[12px] text-slate-300 mb-2">Create vastly more interactive experiences contextually.</p>
                   <code className="font-mono text-[10px] block bg-black/40 p-2 rounded border border-white/10 text-amber-200">
                     name = input("Name: ")<br/>print(f"Welcome {{name}}!")
                   </code>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 5. Summary / Best Practices */}
      <section className="max-w-4xl mx-auto pb-16">
         <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl shadow-sm relative h-full flex flex-col justify-center">
           <ShieldCheck className="absolute top-6 right-6 w-12 h-12 text-slate-500/10" />
           <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-400 mb-6 flex items-center">
            1️⃣3️⃣ Best Practices
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-800/50 shadow-sm relative overflow-hidden group">
               <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-400 group-hover:w-2 transition-all"></div>
               <div className="bg-indigo-100 dark:bg-indigo-900/40 p-2 rounded-full mr-4 ml-2">
                 <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
               </div>
               <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Always provide explicitly <b className="text-indigo-600 dark:text-indigo-400">clear</b> input prompts for UX.</span>
            </div>
            <div className="flex items-center bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-800/50 shadow-sm relative overflow-hidden group">
               <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-400 group-hover:w-2 transition-all"></div>
               <div className="bg-indigo-100 dark:bg-indigo-900/40 p-2 rounded-full mr-4 ml-2">
                 <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
               </div>
               <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Strictly <b className="text-indigo-600 dark:text-indigo-400">convert input</b> to required underlying data types immediately.</span>
            </div>
            <div className="flex items-center bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-800/50 shadow-sm relative overflow-hidden group">
               <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-400 group-hover:w-2 transition-all"></div>
               <div className="bg-indigo-100 dark:bg-indigo-900/40 p-2 rounded-full mr-4 ml-2">
                 <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
               </div>
               <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Vigorously <b className="text-indigo-600 dark:text-indigo-400">validate</b> user input configurations when technically necessary.</span>
            </div>
            <div className="flex items-center bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-800/50 shadow-sm relative overflow-hidden group">
               <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-400 group-hover:w-2 transition-all"></div>
               <div className="bg-indigo-100 dark:bg-indigo-900/40 p-2 rounded-full mr-4 ml-2">
                 <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
               </div>
               <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Use <b className="text-indigo-600 dark:text-indigo-400">try-except</b> wrappers systematically for safer overall flow control.</span>
            </div>
          </div>
         </div>
      </section>

    </div>
  );
};

export default PythonUserInput;