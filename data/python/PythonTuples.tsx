import React, { useState } from 'react';
import { 
  Code, Terminal, AlertCircle, CheckCircle2,
  Lightbulb, ShieldCheck, MessageSquareText, 
  Layers, Lock, Variable, RefreshCcw, Combine, BoxSelect, SearchX, Zap
} from 'lucide-react';

const PythonTuples: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'operations' | 'unpacking' | 'methods'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'create_tuple':
        outLines = ["('apple', 'banana', 'mango')"];
        break;
      case 'access_items':
        outLines = ['red', 'blue'];
        break;
      case 'negative_idx':
        outLines = ['blue'];
        break;
      case 'length':
        outLines = ['4'];
        break;
      case 'single_item':
        outLines = ["<class 'tuple'>"];
        break;
      case 'loop_tuple':
        outLines = ['apple', 'banana', 'mango'];
        break;
      case 'check_item':
        outLines = ['True'];
        break;
      case 'concat':
        outLines = ['(1, 2, 3, 4, 5)'];
        break;
      case 'repeat':
        outLines = ['(1, 2, 1, 2, 1, 2)'];
        break;
      case 'unpack':
        outLines = ['John', '25', 'Engineer'];
        break;
      case 'real_world':
        outLines = ['X: 10', 'Y: 20'];
        break;
      case 'methods':
        outLines = ['2', '2'];
        break;
    }

    setConsoleOutput(outLines);
  };

  const resetConsole = () => setConsoleOutput([]);

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-900 min-h-screen font-sans text-slate-800 dark:text-slate-200">
      
      {/* 1. Header Area */}
      <header className="max-w-4xl mx-auto text-center mb-16 pt-8">
        <div className="inline-flex items-center justify-center p-4 bg-teal-100 dark:bg-teal-900/30 rounded-2xl mb-6 shadow-sm border border-teal-200 dark:border-teal-800/50">
          <Lock className="w-10 h-10 text-teal-600 dark:text-teal-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Python Tuples
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          A Tuple in Python is an ordered and immutable collection of elements used to store multiple items in a single variable.
        </p>
      </header>

      {/* 2. Intro & Characteristics Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 mb-8">
          <div className="flex items-center mb-6">
            <MessageSquareText className="w-6 h-6 text-teal-500 mr-3" />
            <h2 className="text-2xl font-bold">1️⃣ Introduction & Definition</h2>
          </div>
          <p className="mb-6 text-slate-600 dark:text-slate-300">
            Tuples are similar to lists, but the main difference is that tuples are <span className="font-bold text-rose-500">immutable</span>, meaning their values cannot be changed after creation. Tuples are written using parentheses <code className="bg-slate-100 dark:bg-slate-900 px-1 py-0.5 rounded font-mono font-bold">()</code>.
          </p>

          <div className="bg-teal-50 dark:bg-teal-900/10 p-5 rounded-xl border border-teal-100 dark:border-teal-800/30 mb-8">
            <h3 className="font-bold text-teal-800 dark:text-teal-300 mb-3">3️⃣ Tuple Characteristics</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center">
                 <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full mb-3 text-blue-600 dark:text-blue-400"><Layers className="w-5 h-5"/></div>
                 <h4 className="font-bold text-sm mb-1">Ordered</h4>
                 <p className="text-xs text-slate-500">Items have a fixed order</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center">
                 <div className="bg-rose-100 dark:bg-rose-900/30 p-2 rounded-full mb-3 text-rose-600 dark:text-rose-400"><Lock className="w-5 h-5"/></div>
                 <h4 className="font-bold text-sm mb-1 text-rose-600 dark:text-rose-400">Immutable</h4>
                 <p className="text-xs text-slate-500">Items cannot be changed</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center">
                 <div className="bg-amber-100 dark:bg-amber-900/30 p-2 rounded-full mb-3 text-amber-600 dark:text-amber-400"><BoxSelect className="w-5 h-5"/></div>
                 <h4 className="font-bold text-sm mb-1">Indexed</h4>
                 <p className="text-xs text-slate-500">Access items via index</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center">
                 <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded-full mb-3 text-emerald-600 dark:text-emerald-400"><Combine className="w-5 h-5"/></div>
                 <h4 className="font-bold text-sm mb-1">Duplicates</h4>
                 <p className="text-xs text-slate-500">Duplicate values allowed</p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* 3. Interactive Syntax Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center">
            <Terminal className="w-8 h-8 mr-3 text-teal-500" />
            Interactive Tuple Lab
          </h2>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setActiveTab('basics')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'basics' ? 'bg-teal-600 text-white shadow-teal-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <BoxSelect className="w-4 h-4 mr-2" /> Basics & Access
            </button>
            <button
              onClick={() => setActiveTab('operations')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'operations' ? 'bg-teal-600 text-white shadow-teal-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <RefreshCcw className="w-4 h-4 mr-2" /> Operations
            </button>
            <button
              onClick={() => setActiveTab('unpacking')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'unpacking' ? 'bg-teal-600 text-white shadow-teal-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Variable className="w-4 h-4 mr-2" /> Unpacking
            </button>
            <button
              onClick={() => setActiveTab('methods')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'methods' ? 'bg-teal-600 text-white shadow-teal-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <SearchX className="w-4 h-4 mr-2" /> Methods
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
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">Creation & Access</h3>

                  <button onClick={() => runDemo('create_tuple')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-teal-300 dark:hover:border-teal-700 transition-colors relative shadow-sm">
                      <div className="absolute top-4 right-4 text-[10px] font-bold text-teal-500 bg-teal-100 dark:bg-teal-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN</div>
                      <h4 className="font-bold text-sm text-teal-600 dark:text-teal-400 mb-2">2️⃣ Creating a Tuple</h4>
                      <div className="text-[10px] text-slate-500 mb-2 bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded inline-block w-auto flex justify-center w-full font-mono font-bold tracking-widest text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                         ( apple , banana , mango )
                      </div>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
fruits = (<span className="text-amber-500">"apple"</span>, <span className="text-amber-500">"banana"</span>, <span className="text-amber-500">"mango"</span>)<br/>
<span className="text-blue-500">print</span>(fruits)
                      </pre>
                    </div>
                  </button>

                  <button onClick={() => runDemo('access_items')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-blue-300 dark:hover:border-blue-700 transition-colors relative shadow-sm">
                      <div className="absolute top-4 right-4 text-[10px] font-bold text-blue-500 bg-blue-100 dark:bg-blue-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN</div>
                      <h4 className="font-bold text-sm text-blue-600 dark:text-blue-400 mb-2">4️⃣ Accessing Tuple Items (Positive Indexing)</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">Since tuples are indexed, we can access elements via index.</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
colors = (<span className="text-amber-500">"red"</span>, <span className="text-amber-500">"green"</span>, <span className="text-amber-500">"blue"</span>)<br/><br/>
<span className="text-blue-500">print</span>(colors[<span className="text-emerald-500">0</span>])<br/>
<span className="text-blue-500">print</span>(colors[<span className="text-emerald-500">2</span>])
                      </pre>
                    </div>
                  </button>

                  <div className="grid grid-cols-2 gap-3">
                     <button onClick={() => runDemo('negative_idx')} className="w-full text-left group">
                        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-3 hover:border-rose-300 transition-colors relative h-full">
                           <h4 className="font-bold text-[11px] text-rose-600 dark:text-rose-400 mb-1">5️⃣ Negative Indexing</h4>
                           <pre className="font-mono text-[10px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-2 rounded break-all whitespace-pre-wrap">
vars = (<span className="text-amber-500">"r"</span>, <span className="text-amber-500">"g"</span>, <span className="text-amber-500">"b"</span>)
<span className="text-blue-500">print</span>(vars[<span className="text-emerald-500">-1</span>])
                           </pre>
                        </div>
                     </button>
                     <button onClick={() => runDemo('length')} className="w-full text-left group">
                        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-3 hover:border-emerald-300 transition-colors relative h-full">
                           <h4 className="font-bold text-[11px] text-emerald-600 dark:text-emerald-400 mb-1">6️⃣ Tuple Length (len)</h4>
                           <pre className="font-mono text-[10px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-2 rounded break-all whitespace-pre-wrap">
nums = (<span className="text-emerald-500">10</span>, <span className="text-emerald-500">20</span>, <span className="text-emerald-500">30</span>, <span className="text-emerald-500">40</span>)
<span className="text-blue-500">print</span>(<span className="text-blue-400 font-bold">len</span>(nums))
                           </pre>
                        </div>
                     </button>
                  </div>

                  <button onClick={() => runDemo('single_item')} className="w-full text-left group">
                    <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/50 rounded-xl p-4 hover:border-amber-400 dark:hover:border-amber-600 transition-colors relative shadow-sm">
                      <div className="absolute top-4 right-4 text-[10px] font-bold text-amber-600 bg-amber-200 dark:bg-amber-800/50 px-2 py-0.5 rounded opacity-80 group-hover:opacity-100 transition-opacity shadow-sm">RUN</div>
                      <h4 className="font-bold text-sm text-amber-700 dark:text-amber-400 mb-2">7️⃣ Single Item Tuples</h4>
                      <p className="text-[11px] text-amber-700 dark:text-amber-300 mb-2">To create a tuple with one item, a comma is strictly <span className="font-bold uppercase border-b border-amber-400">required</span>.</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white/60 dark:bg-slate-950/50 p-3 rounded-lg border border-amber-100 dark:border-amber-800/30">
single = (<span className="text-amber-500">"apple"</span><span className="text-rose-500 font-bold text-base">,</span>)<br/><br/>
<span className="text-blue-500">print</span>(<span className="text-blue-400 font-bold">type</span>(single))
                      </pre>
                    </div>
                  </button>
                  
                </div>
              )}

              {activeTab === 'operations' && (
                <div className="animate-fade-in space-y-4">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">8️⃣-1️⃣1️⃣ Tuple Operations</h3>
                  
                  <button onClick={() => runDemo('loop_tuple')} className="w-full text-left group">
                     <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-blue-300 dark:hover:border-blue-700 transition-colors relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-blue-500 bg-blue-100 dark:bg-blue-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN</div>
                        <h4 className="font-bold text-sm text-blue-600 dark:text-blue-400 mb-2">8️⃣ Looping Through Tuples</h4>
                        <pre className="font-mono text-[11.5px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-hidden">
fruits = (<span className="text-amber-500">"apple"</span>, <span className="text-amber-500">"banana"</span>, <span className="text-amber-500">"mango"</span>)<br/><br/>
<span className="text-blue-400 font-bold">for</span> fruit <span className="text-blue-400 font-bold">in</span> fruits:<br/>
<span className="bg-neutral-200 dark:bg-neutral-800">    </span><span className="text-blue-500">print</span>(fruit)
                        </pre>
                     </div>
                  </button>

                  <button onClick={() => runDemo('check_item')} className="w-full text-left group">
                     <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-purple-300 dark:hover:border-purple-700 transition-colors relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-purple-500 bg-purple-100 dark:bg-purple-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN</div>
                        <h4 className="font-bold text-sm text-purple-600 dark:text-purple-400 mb-2">9️⃣ Checking if Item Exists (`in`)</h4>
                        <pre className="font-mono text-[11.5px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-hidden">
fruits = (<span className="text-amber-500">"apple"</span>, <span className="text-amber-500">"banana"</span>, <span className="text-amber-500">"mango"</span>)<br/>
<span className="text-blue-500">print</span>(<span className="text-amber-500">"apple"</span> <span className="text-blue-400 font-bold">in</span> fruits)
                        </pre>
                     </div>
                  </button>

                  <div className="grid grid-cols-2 gap-3 mt-2">
                     <button onClick={() => runDemo('concat')} className="w-full text-left group">
                        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-3 hover:border-teal-300 transition-colors relative h-full">
                           <h4 className="font-bold text-xs text-teal-600 dark:text-teal-400 mb-1">🔟 Concatenation (+)</h4>
                           <pre className="font-mono text-[10px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-2 rounded break-all whitespace-pre-wrap">
t1 = (<span className="text-emerald-500">1</span>, <span className="text-emerald-500">2</span>, <span className="text-emerald-500">3</span>)
t2 = (<span className="text-emerald-500">4</span>, <span className="text-emerald-500">5</span>)
<span className="text-blue-500">print</span>(t1 + t2)
                           </pre>
                        </div>
                     </button>
                     <button onClick={() => runDemo('repeat')} className="w-full text-left group">
                        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-3 hover:border-amber-300 transition-colors relative h-full">
                           <h4 className="font-bold text-xs text-amber-600 dark:text-amber-400 mb-1">1️⃣1️⃣ Repetition (*)</h4>
                           <pre className="font-mono text-[10px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-2 rounded break-all whitespace-pre-wrap">
nums = (<span className="text-emerald-500">1</span>, <span className="text-emerald-500">2</span>)
<span className="text-blue-500">print</span>(nums * <span className="text-emerald-500">3</span>)
                           </pre>
                        </div>
                     </button>
                  </div>

                </div>
              )}

              {activeTab === 'unpacking' && (
                <div className="animate-fade-in space-y-4">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">Packing & Unpacking</h3>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/10 p-5 rounded-xl border border-blue-100 dark:border-blue-800/30">
                     <h4 className="font-bold text-sm text-blue-800 dark:text-blue-300 mb-2">1️⃣2️⃣ Packing</h4>
                     <p className="text-xs text-blue-700 dark:text-blue-200 mb-2">Packing means storing multiple values in a newly created tuple.</p>
                     <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-hidden w-full">
person = (<span className="text-amber-500">"John"</span>, <span className="text-emerald-500">25</span>, <span className="text-amber-500">"Engineer"</span>)
                     </pre>
                  </div>

                  <button onClick={() => runDemo('unpack')} className="w-full text-left group">
                     <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN</div>
                        <h4 className="font-bold text-sm text-emerald-600 dark:text-emerald-400 mb-2">1️⃣3️⃣ Unpacking</h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">Unpacking rapidly extracts tuple values into corresponding variables.</p>
                        <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-hidden w-full">
person = (<span className="text-amber-500">"John"</span>, <span className="text-emerald-500">25</span>, <span className="text-amber-500">"Engineer"</span>)<br/><br/>
name, age, job = person <br/><br/>
<span className="text-blue-500">print</span>(name)<br/>
<span className="text-blue-500">print</span>(age)<br/>
<span className="text-blue-500">print</span>(job)
                        </pre>
                     </div>
                  </button>

                  <button onClick={() => runDemo('real_world')} className="w-full text-left group mt-2">
                     <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/50 rounded-xl p-3 sm:p-4 hover:border-amber-400 dark:hover:border-amber-600 transition-colors relative shadow-sm">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-amber-600 bg-amber-200 dark:bg-amber-800/50 px-2 py-0.5 rounded opacity-80 group-hover:opacity-100 transition-opacity shadow-sm">RUN</div>
                        <h4 className="font-bold text-sm text-amber-700 dark:text-amber-400 mb-2 flex items-center">1️⃣4️⃣ Real-World: Returning Multiple Values</h4>
                        <p className="text-[11px] text-amber-800 dark:text-amber-200/80 mb-2 font-medium">Tuples are commonly used to return multiple values from a function smoothly.</p>
                        <pre className="font-mono text-[10.5px] text-slate-700 dark:text-slate-300 bg-white/60 dark:bg-slate-950/50 p-2 rounded-lg border border-amber-100 dark:border-amber-800/30">
<span className="text-blue-500 font-bold">def</span> <span className="text-yellow-400 font-bold">get_coordinates</span>():<br/>
<span className="bg-neutral-200 dark:bg-neutral-800">    </span><span className="text-blue-500 font-bold">return</span> (<span className="text-emerald-500">10</span>, <span className="text-emerald-500">20</span>)<br/><br/>
x, y = get_coordinates()<br/><br/>
<span className="text-blue-500">print</span>(<span className="text-amber-500">"X:"</span>, x)<br/>
<span className="text-blue-500">print</span>(<span className="text-amber-500">"Y:"</span>, y)
                        </pre>
                     </div>
                  </button>

                </div>
              )}

              {activeTab === 'methods' && (
                <div className="animate-fade-in space-y-4">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">1️⃣6️⃣ Tuple Methods</h3>
                  
                  <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-xl shadow-sm">
                     <p className="text-sm text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">Unlike Lists, Tuples are immutable and strictly only provide <span className="font-bold">two</span> built-in methods.</p>

                     <table className="w-full text-left border-collapse bg-white dark:bg-slate-950 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 text-xs mb-4">
                        <thead className="bg-slate-200 dark:bg-slate-800/50 text-slate-800 dark:text-slate-200">
                           <tr>
                              <th className="p-2 font-bold border-b border-slate-200 dark:border-slate-800">Method</th>
                              <th className="p-2 font-bold border-b border-slate-200 dark:border-slate-800">Description</th>
                           </tr>
                        </thead>
                        <tbody className="text-slate-700 dark:text-slate-300 font-mono">
                           <tr>
                              <td className="p-2 border-b border-slate-100 dark:border-slate-800 font-bold text-blue-500">count()</td><td className="p-2 border-b border-slate-100 dark:border-slate-800 text-sans text-neutral-500">Counts occurrences of a value</td>
                           </tr>
                           <tr>
                              <td className="p-2 font-bold text-blue-500">index()</td><td className="p-2 text-sans text-neutral-500">Returns the index of a sequence value</td>
                           </tr>
                        </tbody>
                     </table>

                     <button onClick={() => runDemo('methods')} className="w-full text-left group">
                        <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-4 hover:border-slate-300 dark:hover:border-slate-700 transition-colors relative shadow-sm">
                           <div className="absolute top-4 right-4 text-[10px] font-bold text-slate-600 bg-slate-100 dark:bg-slate-900/50 px-2 py-0.5 rounded opacity-80 group-hover:opacity-100 transition-opacity">RUN DEMO</div>
                           <h4 className="font-bold text-sm text-slate-600 dark:text-slate-400 mb-2">Method Evaluation</h4>
                           <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
numbers = (<span className="text-emerald-500">1</span>, <span className="text-emerald-500">2</span>, <span className="text-emerald-500">3</span>, <span className="text-emerald-500">2</span>, <span className="text-emerald-500">4</span>)<br/><br/>
<span className="text-blue-500">print</span>(numbers.<span className="text-blue-400 font-bold">count</span>(<span className="text-emerald-500">2</span>))<br/>
<span className="text-blue-500">print</span>(numbers.<span className="text-blue-400 font-bold">index</span>(<span className="text-emerald-500">3</span>))
                           </pre>
                        </div>
                     </button>
                  </div>
                </div>
              )}

            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-[#1e1e1e] rounded-2xl p-6 border border-slate-800 h-full min-h-[500px] shadow-2xl relative overflow-hidden flex flex-col mt-4 lg:mt-0">
               <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl"></div>
               <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <h3 className="font-bold text-slate-300 uppercase text-xs tracking-wider flex items-center">
                     <Terminal className="w-4 h-4 mr-2 text-teal-400" />
                     Execution Log
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
                        <span>Run a tuple execution block to see output...</span>
                     </div>
                  ) : (
                     consoleOutput.map((line, i) => (
                        <div key={i} className={`mb-1.5 animate-fade-in whitespace-pre font-medium ${
                           line.includes('class') ? 'text-blue-300' :
                           line.includes('(') ? 'text-amber-300 italic' :
                           line.includes('True') ? 'text-emerald-400 font-bold' :
                           'text-white'
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

      {/* 4. Common Errors & Tips Section */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        
        {/* Mistakes Block */}
        <div className="bg-rose-50 dark:bg-rose-900/10 p-8 rounded-3xl border border-rose-200 dark:border-rose-800/30 shadow-sm relative overflow-hidden h-full">
          <div className="absolute right-0 bottom-0 opacity-5">
             <AlertCircle className="w-48 h-48 text-rose-500" />
          </div>
          <h2 className="text-2xl font-bold text-rose-900 dark:text-rose-400 mb-6 flex items-center border-b border-rose-200 dark:border-rose-800/50 pb-4 relative z-10">
            1️⃣5️⃣ Common Beginner Mistakes
          </h2>
          
          <div className="space-y-6 relative z-10">
             <div>
                <h4 className="font-bold text-rose-700 dark:text-rose-400 mb-2">Trying to Modify a Tuple</h4>
                <p className="text-xs text-rose-800/70 dark:text-rose-300/70 mb-2">Tuples are inherently immutable and will throw a fatal TypeError.</p>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border-t-4 border-rose-500 shadow-sm">
                   <div className="text-rose-600 dark:text-rose-400 font-bold text-sm mb-2 uppercase tracking-wide flex items-center">❌ Wrong</div>
                   <code className="block bg-rose-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-mono text-[11px] px-2 py-3 rounded mb-2">
                     colors = (<span className="text-amber-500">"red"</span>, <span className="text-amber-500">"green"</span>, <span className="text-amber-500">"blue"</span>)<br/><br/>
                     colors[<span className="text-emerald-500">0</span>] = <span className="text-amber-500">"yellow"</span>
                   </code>
                   <div className="text-[10px] text-rose-500 font-bold mt-1">TypeError: 'tuple' object does not support item assignment</div>
                </div>
             </div>

             <div>
                <h4 className="font-bold text-rose-700 dark:text-rose-400 mb-2">Forgetting Comma for Single Item</h4>
                <p className="text-xs text-rose-800/70 dark:text-rose-300/70 mb-2">Python will evaluate parens as algebraic/string unless suffixed by `,`.</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border-t-4 border-rose-500 shadow-sm">
                     <div className="text-rose-600 dark:text-rose-400 font-bold text-sm mb-2 uppercase tracking-wide">❌ Wrong</div>
                     <code className="block bg-rose-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-mono text-[11px] px-2 py-3 rounded mb-2">
                        single = (<span className="text-amber-500">"apple"</span>)
                     </code>
                  </div>

                  <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border-t-4 border-emerald-500 shadow-sm">
                     <div className="text-emerald-600 dark:text-emerald-400 font-bold text-sm mb-2 uppercase tracking-wide">✔ Correct</div>
                     <code className="block bg-emerald-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-mono text-[11px] px-2 py-3 rounded mb-2">
                        single = (<span className="text-amber-500">"apple"</span><span className="text-teal-500 font-bold">,</span>)
                     </code>
                  </div>
                </div>
             </div>
          </div>
        </div>

        {/* Pro Tips Block */}
        <div className="bg-gradient-to-br from-indigo-800 to-indigo-950 p-8 rounded-3xl border border-indigo-700 shadow-xl relative overflow-hidden h-full text-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl"></div>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center border-b border-indigo-700 pb-4 relative z-10">
            <Lightbulb className="w-6 h-6 text-yellow-400 mr-3 shrink-0" />
            1️⃣7️⃣ Dev Tips & Tricks
          </h2>
          
          <div className="space-y-4 relative z-10">
             <div className="bg-white/10 p-4 rounded-xl border border-white/10 flex items-start hover:bg-white/20 transition-colors">
                <div className="bg-teal-500/30 p-2 rounded-lg mr-4 mt-0.5">
                   <ShieldCheck className="w-5 h-5 text-teal-300" />
                </div>
                <div>
                   <h4 className="font-bold mb-1">Use Tuples for Fixed Data</h4>
                   <p className="text-sm text-indigo-100 mb-2">Ideal for statically representing data that has absolutely no need to morph over its lifecycle.</p>
                   <ul className="text-xs text-indigo-200 list-disc list-inside space-y-1 mb-2">
                     <li>Coordinates: <code className="bg-black/40 px-1 rounded">(10, 52)</code></li>
                     <li>RGB Colors: <code className="bg-black/40 px-1 rounded">(255, 0, 0)</code></li>
                     <li>DB Records</li>
                   </ul>
                </div>
             </div>
             
             <div className="bg-white/10 p-4 rounded-xl border border-white/10 flex items-start hover:bg-white/20 transition-colors">
                <div className="bg-emerald-500/30 p-2 rounded-lg mr-4 mt-0.5">
                   <Zap className="w-5 h-5 text-emerald-300" />
                </div>
                <div>
                   <h4 className="font-bold mb-1">Tuples Are Faster Than Lists</h4>
                   <p className="text-sm text-indigo-100 mb-1">Because their memory allocation is static upon instantiation, Tuples are inherently more memory-efficient and compile faster than mutable python lists.</p>
                </div>
             </div>

             <div className="bg-white/10 p-4 rounded-xl border border-white/10 flex items-start hover:bg-white/20 transition-colors">
                <div className="bg-amber-500/30 p-2 rounded-lg mr-4 mt-0.5">
                   <Variable className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                   <h4 className="font-bold mb-1">Take Advantage of Unpacking</h4>
                   <p className="text-[11px] text-indigo-100 mb-1">Instead of ugly explicit indexing mappings like <code className="bg-black/40 text-[10px] p-0.5 rounded text-rose-300">person[0]</code>, rapidly assign state utilizing unpacking: <code className="bg-black/40 text-[10px] p-0.5 rounded text-emerald-300">name, age = person</code>.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 5. Summary / Best Practices */}
      <section className="max-w-4xl mx-auto pb-16">
         <div className="bg-teal-50 dark:bg-teal-900/10 border border-teal-200 dark:border-teal-800 p-8 rounded-3xl shadow-sm relative h-full flex flex-col justify-center">
           <ShieldCheck className="absolute top-6 right-6 w-12 h-12 text-teal-500/20" />
           <h2 className="text-2xl font-bold text-teal-900 dark:text-teal-400 mb-6 flex items-center">
            1️⃣8️⃣ Best Practices
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center bg-white dark:bg-slate-800 p-4 rounded-xl border border-teal-100 dark:border-teal-800/30 shadow-sm relative overflow-hidden group">
               <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal-400 group-hover:w-2 transition-all"></div>
               <div className="bg-teal-100 dark:bg-teal-900/40 p-2 rounded-full mr-4 ml-2">
                 <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400" />
               </div>
               <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Use <b>tuples</b> for strictly fixed collections</span>
            </div>
            <div className="flex items-center bg-white dark:bg-slate-800 p-4 rounded-xl border border-teal-100 dark:border-teal-800/30 shadow-sm relative overflow-hidden group">
               <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal-400 group-hover:w-2 transition-all"></div>
               <div className="bg-teal-100 dark:bg-teal-900/40 p-2 rounded-full mr-4 ml-2">
                 <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400" />
               </div>
               <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Use <b>lists</b> for any mutable data structures</span>
            </div>
            <div className="flex items-center bg-white dark:bg-slate-800 p-4 rounded-xl border border-teal-100 dark:border-teal-800/30 shadow-sm relative overflow-hidden group">
               <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal-400 group-hover:w-2 transition-all"></div>
               <div className="bg-teal-100 dark:bg-teal-900/40 p-2 rounded-full mr-4 ml-2">
                 <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400" />
               </div>
               <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Use <b>tuple unpacking</b> for clean code standards</span>
            </div>
            <div className="flex items-center bg-white dark:bg-slate-800 p-4 rounded-xl border border-teal-100 dark:border-teal-800/30 shadow-sm relative overflow-hidden group">
               <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal-400 group-hover:w-2 transition-all"></div>
               <div className="bg-teal-100 dark:bg-teal-900/40 p-2 rounded-full mr-4 ml-2">
                 <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400" />
               </div>
               <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Avoid trying to modify tuple data state</span>
            </div>
          </div>
         </div>
      </section>

    </div>
  );
};

export default PythonTuples;