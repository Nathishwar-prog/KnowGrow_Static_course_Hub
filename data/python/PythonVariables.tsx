import React, { useState } from 'react';
import { 
  Code, Terminal, AlertCircle, CheckCircle2,
  Lightbulb, ShieldCheck, MessageSquareText, 
  Variable, BringToFront, SplitSquareHorizontal, Boxes
} from 'lucide-react';

const PythonVariables: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'assignment' | 'strings' | 'globals'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'create_vars':
        outLines = ['5', 'Hello'];
        break;
      case 'change_type':
        outLines = ['10', 'Python'];
        break;
      case 'case_sensitive':
        outLines = ['John', 'David'];
        break;
      case 'multiple_vars':
        outLines = ['10', '20', '30'];
        break;
      case 'same_value':
        outLines = ['100', '100', '100'];
        break;
      case 'unpacking':
        outLines = ['apple', 'banana', 'mango'];
        break;
      case 'output_vars':
        outLines = ['Name: Alice', 'Age: 25'];
        break;
      case 'combine_strings':
        outLines = ['Hello Alice'];
        break;
      case 'f_strings':
        outLines = ['Hello Alice'];
        break;
      case 'var_types':
        outLines = ["<class 'int'>", "<class 'str'>"];
        break;
      case 'globals':
        outLines = ['I love Python'];
        break;
      case 'real_world':
        outLines = ['Student Name: John', 'Age: 21', 'Course: Data Science'];
        break;
    }

    setConsoleOutput(outLines);
  };

  const resetConsole = () => setConsoleOutput([]);

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-900 min-h-screen font-sans text-slate-800 dark:text-slate-200">
      
      {/* 1. Header Area */}
      <header className="max-w-4xl mx-auto text-center mb-16 pt-8">
        <div className="inline-flex items-center justify-center p-4 bg-orange-100 dark:bg-orange-900/30 rounded-2xl mb-6 shadow-sm border border-orange-200 dark:border-orange-800/50">
          <Variable className="w-10 h-10 text-orange-600 dark:text-orange-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Python Variables
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Variables are containers used to store data values in a program that can be utilized and manipulated dynamically.
        </p>
      </header>

      {/* 2. Intro Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 mb-8">
          <div className="flex items-center mb-6">
            <MessageSquareText className="w-6 h-6 text-orange-500 mr-3" />
            <h2 className="text-2xl font-bold">1️⃣ Introduction to Variables</h2>
          </div>
          <p className="mb-6 text-slate-600 dark:text-slate-300">
            A variable is a container designed to safely house data types, such as Numbers, Text (Strings), Lists, and Objects securely in memory for logic execution. In Python, variables are created the exact moment you assign a value to a named tag. 
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-orange-50 dark:bg-orange-900/10 p-5 rounded-xl border border-orange-100 dark:border-orange-800/30">
               <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-2 font-mono flex items-center">
                 2️⃣ Variable Creation 
               </h3>
               <p className="text-sm text-orange-700 dark:text-orange-200 mb-3">Unlike static languages (C++ / Java), you <b>do not</b> need to declare the variable type first. Python implicitly determines the data type instantly.</p>
               <pre className="font-mono text-xs bg-slate-900 text-slate-300 p-3 flex justify-between rounded-lg border border-slate-800 mb-3 relative overflow-hidden">
                  <span className="text-indigo-500/10 font-black text-6xl absolute -left-2 top-0 pointer-events-none">#</span>
                  <div>
                    x = <span className="text-emerald-400">5</span><br/>
                    y = <span className="text-amber-400">"Hello"</span>
                  </div>
                  <div className="border-l border-slate-700 pl-4 ml-4">
                     <span className="text-slate-500 italic text-[10px] block"># Visualization in Logic</span>
                     <span className="text-slate-400">x</span> <span className="text-cyan-500 font-bold">→</span> <span className="text-emerald-400 font-bold">5</span><br/>
                     <span className="text-slate-400">y</span> <span className="text-cyan-500 font-bold">→</span> <span className="text-amber-400 font-bold">"Hello"</span>
                  </div>
               </pre>
            </div>
            
            <div className="bg-orange-50 dark:bg-orange-900/10 p-5 rounded-xl border border-orange-100 dark:border-orange-800/30 flex flex-col justify-center">
               <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-2 flex items-center">4️⃣ Explicit Naming Rules</h3>
               <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <div className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 shrink-0"/> Must strictly start with a letter or underscore <code className="bg-slate-200 dark:bg-slate-700 text-xs px-1 py-0.5 rounded mx-1">_age = 25</code></div>
                  <div className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 shrink-0"/> Can contain alphanumerics & underscores <code className="bg-slate-200 dark:bg-slate-700 text-xs px-1 py-0.5 rounded mx-1">user1 = "Admin"</code></div>
                  <div className="flex items-start"><AlertCircle className="w-4 h-4 text-rose-500 mr-2 mt-0.5 shrink-0"/> Cannot start with a numerical value. <span className="text-rose-500 ml-1 text-xs font-mono line-through">1name = "John"</span></div>
                  <div className="flex items-start"><AlertCircle className="w-4 h-4 text-rose-500 mr-2 mt-0.5 shrink-0"/> Cannot contain standard hyphens. <span className="text-rose-500 ml-1 text-xs font-mono line-through">user-name = "A"</span></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Variables Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center">
            <Terminal className="w-8 h-8 mr-3 text-orange-500" />
            Interactive Variables Lab
          </h2>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setActiveTab('basics')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'basics' ? 'bg-orange-600 text-white shadow-orange-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Variable className="w-4 h-4 mr-2" /> Typing & Basics
            </button>
            <button
              onClick={() => setActiveTab('assignment')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'assignment' ? 'bg-orange-600 text-white shadow-orange-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <SplitSquareHorizontal className="w-4 h-4 mr-2" /> Multi-Assignment
            </button>
            <button
              onClick={() => setActiveTab('strings')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'strings' ? 'bg-orange-600 text-white shadow-orange-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Code className="w-4 h-4 mr-2" /> Combining & Output
            </button>
             <button
              onClick={() => setActiveTab('globals')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'globals' ? 'bg-orange-600 text-white shadow-orange-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Boxes className="w-4 h-4 mr-2" /> Scope
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
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">3️⃣-5️⃣ Core Mechanics</h3>

                  <button onClick={() => runDemo('create_vars')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-orange-300 dark:hover:border-orange-700 transition-colors relative shadow-sm">
                      <div className="absolute top-4 right-4 text-[10px] font-bold text-orange-500 bg-orange-100 dark:bg-orange-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN</div>
                      <h4 className="font-bold text-sm text-orange-600 dark:text-orange-400 mb-2">Creating Basic Variants</h4>
                      <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
x = <span className="text-emerald-500">5</span><br/>
y = <span className="text-amber-500">"Hello"</span><br/><br/>
<span className="text-blue-500">print</span>(x)<br/>
<span className="text-blue-500">print</span>(y)
                      </pre>
                    </div>
                  </button>

                  <button onClick={() => runDemo('change_type')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors relative shadow-sm">
                      <div className="absolute top-4 right-4 text-[10px] font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN</div>
                      <h4 className="font-bold text-sm text-emerald-600 dark:text-emerald-400 mb-2">3️⃣ Dynamic Typing (Changing Types)</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">Python is dynamically typed, meaning variables seamlessly switch types during reassignment without errors.</p>
                      
                      <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
x = <span className="text-emerald-500">10</span> <span className="text-slate-400 italic"># Initially an int</span><br/>
<span className="text-blue-500">print</span>(x)<br/><br/>
x = <span className="text-amber-500">"Python"</span> <span className="text-slate-400 italic"># Cast to string</span><br/>
<span className="text-blue-500">print</span>(x)
                      </pre>
                    </div>
                  </button>

                  <button onClick={() => runDemo('case_sensitive')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-rose-300 dark:hover:border-rose-700 transition-colors relative shadow-sm">
                      <div className="absolute top-4 right-4 text-[10px] font-bold text-rose-500 bg-rose-100 dark:bg-rose-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN</div>
                      <h4 className="font-bold text-sm text-rose-600 dark:text-rose-400 mb-2">5️⃣ Case Sensitivity</h4>
                      <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
name = <span className="text-amber-500">"John"</span><br/>
Name = <span className="text-amber-500">"David"</span><br/><br/>
<span className="text-blue-500">print</span>(name)<br/>
<span className="text-blue-500">print</span>(Name) <span className="text-slate-400 italic"># Two entirely different tags</span>
                      </pre>
                    </div>
                  </button>

                </div>
              )}

              {activeTab === 'assignment' && (
                <div className="animate-fade-in space-y-4">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">6️⃣-8️⃣ Assignment Models</h3>
                  
                  <button onClick={() => runDemo('multiple_vars')} className="w-full text-left group">
                     <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN</div>
                        <h4 className="font-bold text-sm text-emerald-600 dark:text-emerald-400 mb-2">6️⃣ Assigning Multiple Variables</h4>
                        <p className="text-[12px] text-slate-600 dark:text-slate-400 mb-3">Python allows assigning multiple distinct values to variables cleanly in one simple line.</p>
                        <pre className="font-mono text-[11.5px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-hidden">
x, y, z = <span className="text-emerald-500">10</span>, <span className="text-emerald-500">20</span>, <span className="text-emerald-500">30</span><br/><br/>
<span className="text-blue-500">print</span>(x)<br/>
<span className="text-blue-500">print</span>(y)<br/>
<span className="text-blue-500">print</span>(z)
                        </pre>
                     </div>
                  </button>

                  <button onClick={() => runDemo('same_value')} className="w-full text-left group">
                     <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-blue-300 dark:hover:border-blue-700 transition-colors relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-blue-500 bg-blue-100 dark:bg-blue-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN</div>
                        <h4 className="font-bold text-sm text-blue-600 dark:text-blue-400 mb-2">7️⃣ Same Value Syncing</h4>
                        <pre className="font-mono text-[11.5px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-hidden">
x = y = z = <span className="text-emerald-500">100</span><br/><br/>
<span className="text-blue-500">print</span>(x)<br/>
<span className="text-blue-500">print</span>(y)<br/>
<span className="text-blue-500">print</span>(z)
                        </pre>
                     </div>
                  </button>

                  <button onClick={() => runDemo('unpacking')} className="w-full text-left group mt-4">
                     <div className="bg-purple-50 dark:bg-purple-900/10 border border-purple-200 dark:border-purple-800/50 rounded-xl p-4 hover:border-purple-400 transition-colors relative shadow-sm">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-purple-600 bg-purple-200 dark:bg-purple-800/50 px-2 py-0.5 rounded opacity-80 group-hover:opacity-100 transition-opacity">RUN</div>
                        <h4 className="font-bold text-sm text-purple-700 dark:text-purple-400 mb-2 flex items-center">8️⃣ Unpacking a Collection</h4>
                        <p className="text-[12px] text-slate-700 dark:text-slate-400 mb-3 font-medium">Extract values seamlessly from Lists (`[]`) instantly into designated variables mapped sequentially.</p>
                        <pre className="font-mono text-[10.5px] text-slate-700 dark:text-slate-300 bg-white/60 dark:bg-slate-950/50 p-3 rounded-lg border border-purple-100 dark:border-purple-800/30">
fruits = [<span className="text-amber-500">"apple"</span>, <span className="text-amber-500">"banana"</span>, <span className="text-amber-500">"mango"</span>]<br/><br/>
x, y, z = fruits<br/><br/>
<span className="text-blue-500">print</span>(x)<br/>
<span className="text-blue-500">print</span>(y)<br/>
<span className="text-blue-500">print</span>(z)
                        </pre>
                     </div>
                  </button>

                </div>
              )}

              {activeTab === 'strings' && (
                <div className="animate-fade-in space-y-4">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">9️⃣-1️⃣1️⃣ Outputs and Typing</h3>
                  
                  <button onClick={() => runDemo('output_vars')} className="w-full text-left group">
                     <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-teal-300 dark:hover:border-teal-700 transition-colors relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-teal-500 bg-teal-100 dark:bg-teal-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN</div>
                        <h4 className="font-bold text-sm text-teal-600 dark:text-teal-400 mb-2">9️⃣ Multi-output Display</h4>
                        <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-hidden w-full">
name = <span className="text-amber-500">"Alice"</span><br/>
age = <span className="text-emerald-500">25</span><br/><br/>
<span className="text-blue-500">print</span>(<span className="text-amber-500">"Name:"</span>, name)<br/>
<span className="text-blue-500">print</span>(<span className="text-amber-500">"Age:"</span>, age)
                        </pre>
                     </div>
                  </button>

                  <div className="bg-indigo-50 dark:bg-indigo-900/10 p-4 rounded-xl border border-indigo-100 dark:border-indigo-800/30">
                     <h4 className="font-bold text-sm text-indigo-800 dark:text-indigo-300 mb-2">🔟 Combining Strings</h4>

                     <div className="space-y-3">
                        <button onClick={() => runDemo('combine_strings')} className="w-full text-left group">
                           <div className="bg-white dark:bg-slate-950 border border-indigo-200 dark:border-indigo-800/50 rounded-xl p-3 hover:border-indigo-400 transition-colors relative shadow-sm">
                              <div className="absolute top-3 right-3 text-[10px] font-bold text-indigo-600 bg-indigo-100 dark:bg-indigo-900/50 px-2 py-0.5 rounded opacity-80 group-hover:opacity-100 transition-opacity">RUN (Concat)</div>
                              <pre className="font-mono text-[10.5px] text-slate-700 dark:text-slate-300">
name = <span className="text-amber-500">"Alice"</span><br/>
<span className="text-blue-500">print</span>(<span className="text-amber-500">"Hello "</span> + name)
                              </pre>
                           </div>
                        </button>

                        <button onClick={() => runDemo('f_strings')} className="w-full text-left group">
                           <div className="bg-white dark:bg-slate-950 border border-emerald-200 dark:border-emerald-800/50 rounded-xl p-3 hover:border-emerald-400 transition-colors relative shadow-sm">
                              <div className="absolute top-3 right-3 text-[10px] font-bold text-emerald-600 bg-emerald-100 dark:bg-emerald-900/50 px-2 py-0.5 rounded opacity-80 group-hover:opacity-100 transition-opacity">RUN (F-String)</div>
                              <div className="flex items-center text-emerald-600 dark:text-emerald-400 font-bold mb-2 text-xs"><CheckCircle2 className="w-4 h-4 mr-1"/> Recommended</div>
                              <pre className="font-mono text-[10px] text-slate-700 dark:text-slate-300">
name = <span className="text-amber-500">"Alice"</span><br/>
<span className="text-blue-500">print</span>(<span className="text-blue-400 font-bold">f</span><span className="text-amber-500">"Hello </span><span className="text-blue-400 font-bold">&#123;</span><span className="text-slate-900 dark:text-slate-100 font-bold">name</span><span className="text-blue-400 font-bold">&#125;</span><span className="text-amber-500">"</span>)
                              </pre>
                           </div>
                        </button>
                     </div>
                  </div>

                  <button onClick={() => runDemo('var_types')} className="w-full text-left group mt-4">
                     <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-slate-300 dark:hover:border-slate-600 transition-colors relative shadow-sm">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-slate-600 bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded opacity-80 group-hover:opacity-100 transition-opacity">RUN</div>
                        <h4 className="font-bold text-sm text-slate-700 dark:text-slate-400 mb-2">1️⃣1️⃣ Getting Variable Type</h4>
                        <p className="text-[12px] text-slate-500 dark:text-slate-400 mb-2">You can always reliably verify dynamic definitions via <code className="font-mono font-bold">type()</code>.</p>
                        <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-white/60 dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
x = <span className="text-emerald-500">5</span><br/>
y = <span className="text-amber-500">"Python"</span><br/><br/>
<span className="text-blue-500">print</span>(<span className="text-blue-400 font-bold">type</span>(x))<br/>
<span className="text-blue-500">print</span>(<span className="text-blue-400 font-bold">type</span>(y))
                        </pre>
                     </div>
                  </button>

                </div>
              )}
              
              {activeTab === 'globals' && (
                <div className="animate-fade-in space-y-4">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">1️⃣2️⃣-1️⃣3️⃣ Scope & Systems</h3>
                  
                  <div className="bg-teal-50 dark:bg-teal-900/10 border border-teal-200 dark:border-teal-800 p-4 rounded-xl shadow-sm">
                     <p className="text-sm text-teal-800 dark:text-teal-300 mb-3 leading-relaxed">
                        Variables created independently outside functions inherently become <span className="font-bold">Global Variables</span> freely accessible within child functions safely.
                     </p>
                     
                     <button onClick={() => runDemo('globals')} className="w-full text-left group">
                        <div className="bg-white dark:bg-slate-950 border border-teal-200 dark:border-teal-800 rounded-xl p-4 hover:border-teal-400 dark:hover:border-teal-600 transition-colors relative shadow-sm">
                           <div className="absolute top-4 right-4 text-[10px] font-bold text-teal-600 bg-teal-100 dark:bg-teal-900/50 px-2 py-0.5 rounded opacity-80 group-hover:opacity-100 transition-opacity">RUN DEMO</div>
                           <h4 className="font-bold text-sm text-teal-700 dark:text-teal-400 mb-3">1️⃣2️⃣ Global Scopes</h4>
                           <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 p-1">
x = <span className="text-amber-500">"Python"</span> <span className="text-slate-400 italic"># Global Creation</span><br/><br/>
<span className="text-blue-500 font-bold">def</span> <span className="text-yellow-400 font-bold">my_function</span>():<br/>
<span className="bg-neutral-200 dark:bg-neutral-800">  </span><span className="text-blue-500">print</span>(<span className="text-amber-500">"I love "</span> + x)<br/><br/>
my_function()
                           </pre>
                        </div>
                     </button>
                  </div>

                  <button onClick={() => runDemo('real_world')} className="w-full text-left group mt-4">
                     <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-slate-300 dark:hover:border-slate-600 transition-colors relative shadow-sm">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-slate-600 bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded opacity-80 group-hover:opacity-100 transition-opacity">RUN SIMULATION</div>
                        <h4 className="font-bold text-sm text-slate-700 dark:text-slate-400 mb-2">1️⃣3️⃣ Real-World Implementation</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">Combining basic properties for a Student Information app program struct.</p>
                        <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-white/60 dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
name = <span className="text-amber-500">"John"</span><br/>
age = <span className="text-emerald-500">21</span><br/>
course = <span className="text-amber-500">"Data Science"</span><br/><br/>
<span className="text-blue-500">print</span>(<span className="text-amber-500">"Student Name:"</span>, name)<br/>
<span className="text-blue-500">print</span>(<span className="text-amber-500">"Age:"</span>, age)<br/>
<span className="text-blue-500">print</span>(<span className="text-amber-500">"Course:"</span>, course)
                        </pre>
                     </div>
                  </button>

                </div>
              )}

            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-[#1e1e1e] rounded-2xl p-6 border border-slate-800 h-full min-h-[500px] shadow-2xl relative overflow-hidden flex flex-col mt-4 lg:mt-0">
               <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl"></div>
               <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <h3 className="font-bold text-slate-300 uppercase text-xs tracking-wider flex items-center">
                     <Terminal className="w-4 h-4 mr-2 text-orange-400" />
                     Interpreter Console Log
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
                        <span>Run a variables simulation to see execution stdout...</span>
                     </div>
                  ) : (
                     consoleOutput.map((line, i) => {
                        const isNum = !isNaN(Number(line));
                        return (
                           <div key={i} className={`mb-1.5 animate-fade-in whitespace-pre font-medium ${
                              line.includes('class') ? 'text-blue-300' :
                              line.includes('Name:') || line.includes('Age:') || line.includes('Course:') ? 'text-amber-300' :
                              isNum ? 'text-emerald-400' :
                              'text-white'
                           }`}>
                              {line}
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
            1️⃣4️⃣ Common Beginner Mistakes
          </h2>
          
          <div className="space-y-6 relative z-10">
             <div>
                <h4 className="font-bold text-rose-700 dark:text-rose-400 mb-2">Using Spaces in Variable Names</h4>
                <p className="text-xs text-rose-800/70 dark:text-rose-300/70 mb-2">Python compiler expects continuous alphanumeric naming syntax. Spaces implicitly break evaluation rules.</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border-t-4 border-rose-500 shadow-sm">
                     <div className="text-rose-600 dark:text-rose-400 font-bold text-sm mb-2 uppercase tracking-wide">❌ Wrong</div>
                     <code className="block bg-rose-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-mono text-[11px] px-2 py-3 rounded mb-2">
                        user name = <span className="text-amber-500">"John"</span>
                     </code>
                  </div>

                  <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border-t-4 border-emerald-500 shadow-sm">
                     <div className="text-emerald-600 dark:text-emerald-400 font-bold text-sm mb-2 uppercase tracking-wide">✔ Correct</div>
                     <code className="block bg-emerald-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-mono text-[11px] px-2 py-3 rounded mb-2 flex items-center justify-between">
                        <span>user_name = <span className="text-amber-500">"John"</span></span>
                     </code>
                  </div>
                </div>
             </div>

             <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-rose-100 dark:border-rose-800/30">
                <h4 className="font-bold text-rose-700 dark:text-rose-400 mb-1">Using Reserved Keyword Constraints</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">Python core system designated keywords functionally dictate interpreter logic and explicitly cannot be overriden as local user variable tag names.</p>
                
                <div className="bg-rose-50 dark:bg-rose-900/40 p-3 rounded-lg border border-rose-200 dark:border-rose-800/80 mt-2">
                   <div className="text-rose-600 dark:text-rose-400 font-bold text-sm mb-2 uppercase tracking-wide flex items-center">❌ Wrong Override attempt</div>
                   <code className="block bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-mono text-[12px] px-2 py-2 rounded">
                     <span className="text-blue-500 font-bold">class</span> = <span className="text-amber-500">"Python"</span>
                   </code>
                </div>
             </div>
          </div>
        </div>

        {/* Pro Tips Block */}
        <div className="bg-gradient-to-br from-indigo-800 to-indigo-950 p-8 rounded-3xl border border-indigo-700 shadow-xl relative overflow-hidden h-full text-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl"></div>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center border-b border-indigo-700 pb-4 relative z-10">
            <Lightbulb className="w-6 h-6 text-yellow-400 mr-3 shrink-0" />
            1️⃣5️⃣ Dev Tips & Tricks
          </h2>
          
          <div className="space-y-4 relative z-10">
             <div className="bg-white/10 p-4 rounded-xl border border-white/10 flex items-start hover:bg-white/20 transition-colors">
                <div className="bg-orange-500/30 p-2 rounded-lg mr-4 mt-0.5">
                   <BringToFront className="w-5 h-5 text-orange-300" />
                </div>
                <div>
                   <h4 className="font-bold mb-1">Use Meaningful Logic Tag Names</h4>
                   <p className="text-[13px] text-indigo-100 mb-3">Refusals actively destroy readable scaling capacities. It strictly improves base level readability.</p>
                   <div className="grid grid-cols-2 gap-2 text-xs font-mono font-bold">
                     <div className="bg-rose-500/20 p-1.5 rounded text-rose-200">Bad: <span className="text-white bg-black/50 px-1 font-normal ml-1">x = 10</span></div>
                     <div className="bg-emerald-500/20 p-1.5 rounded text-emerald-200">Good: <span className="text-white bg-black/50 px-1 font-normal ml-1">total_score = 10</span></div>
                   </div>
                </div>
             </div>
             
             <div className="bg-white/10 p-4 rounded-xl border border-white/10 flex items-start hover:bg-white/20 transition-colors">
                <div className="bg-teal-500/30 p-2 rounded-lg mr-4 mt-0.5">
                   <Variable className="w-5 h-5 text-teal-300" />
                </div>
                <div>
                   <h4 className="font-bold mb-1">Follow Python PEP8 Naming Styles</h4>
                   <p className="text-[12px] text-indigo-100 mb-2">Exclusively use semantic <code className="bg-black/40 text-[10px] px-1 py-0.5 rounded text-teal-200 ml-1">snake_case</code> structurally entirely.</p>
                   <div className="flex gap-2 font-mono text-[10px] text-teal-300">
                     <div className="bg-black/30 px-2 py-1 rounded">user_name</div>
                     <div className="bg-black/30 px-2 py-1 rounded">total_price</div>
                     <div className="bg-black/30 px-2 py-1 rounded">student_age</div>
                   </div>
                </div>
             </div>

             <div className="bg-white/10 p-4 rounded-xl border border-white/10 flex items-start hover:bg-white/20 transition-colors">
                <div className="bg-amber-500/30 p-2 rounded-lg mr-4 mt-0.5">
                   <Boxes className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                   <h4 className="font-bold mb-1">Minimize Global State Overload Variants</h4>
                   <p className="text-[12px] text-indigo-100 mb-2">Refrain deeply from building numerous global variables. Instead, functionally isolate variables dynamically dynamically natively explicitly passed inside local function spaces completely:</p>
                   <code className="font-mono text-[10px] block bg-black/40 p-2 rounded border border-white/10 text-amber-200">
<span className="text-blue-400 font-bold">def</span> <span className="text-amber-400 font-bold">add</span>(a, b):<br/>
<span className="bg-black/20 text-transparent">--</span><span className="text-blue-400 font-bold">return</span> a + b
                   </code>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 5. Summary / Best Practices */}
      <section className="max-w-4xl mx-auto pb-16">
         <div className="bg-orange-50 dark:bg-orange-900/40 border border-orange-200 dark:border-orange-800 p-8 rounded-3xl shadow-sm relative h-full flex flex-col justify-center">
           <ShieldCheck className="absolute top-6 right-6 w-12 h-12 text-orange-500/10" />
           <h2 className="text-2xl font-bold text-orange-900 dark:text-orange-400 mb-6 flex items-center">
            1️⃣6️⃣ Best Practices
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center bg-white dark:bg-slate-800 p-4 rounded-xl border border-orange-100 dark:border-orange-800/50 shadow-sm relative overflow-hidden group">
               <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-400 to-orange-600 group-hover:w-2 transition-all"></div>
               <div className="bg-orange-100 dark:bg-orange-900/40 p-2 rounded-full mr-4 ml-2">
                 <CheckCircle2 className="w-5 h-5 text-orange-600 dark:text-orange-400" />
               </div>
               <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Always strictly generate structurally <b className="text-orange-600 dark:text-orange-400">descriptive</b> contextually distinct variable names.</span>
            </div>
            <div className="flex items-center bg-white dark:bg-slate-800 p-4 rounded-xl border border-orange-100 dark:border-orange-800/50 shadow-sm relative overflow-hidden group">
               <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-400 to-orange-600 group-hover:w-2 transition-all"></div>
               <div className="bg-orange-100 dark:bg-orange-900/40 p-2 rounded-full mr-4 ml-2">
                 <CheckCircle2 className="w-5 h-5 text-orange-600 dark:text-orange-400" />
               </div>
               <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Routinely strictly enforce standardized <b className="text-orange-600 dark:text-orange-400">snake_case</b> python syntax logic naming protocol styles inherently.</span>
            </div>
            <div className="flex items-center bg-white dark:bg-slate-800 p-4 rounded-xl border border-orange-100 dark:border-orange-800/50 shadow-sm relative overflow-hidden group">
               <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-400 to-orange-600 group-hover:w-2 transition-all"></div>
               <div className="bg-orange-100 dark:bg-orange-900/40 p-2 rounded-full mr-4 ml-2">
                 <CheckCircle2 className="w-5 h-5 text-orange-600 dark:text-orange-400" />
               </div>
               <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Familiarize thoroughly exactly explicitly explicitly <b className="text-orange-600 dark:text-orange-400">avoid using deeply tightly core reserved logical program compiler keywords natively</b> unconditionally.</span>
            </div>
            <div className="flex items-center bg-white dark:bg-slate-800 p-4 rounded-xl border border-orange-100 dark:border-orange-800/50 shadow-sm relative overflow-hidden group">
               <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-400 to-orange-600 group-hover:w-2 transition-all"></div>
               <div className="bg-orange-100 dark:bg-orange-900/40 p-2 rounded-full mr-4 ml-2">
                 <CheckCircle2 className="w-5 h-5 text-orange-600 dark:text-orange-400" />
               </div>
               <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Keep explicitly implicitly absolutely generated deeply strictly <b className="text-orange-600 dark:text-orange-400">simple broadly directly easily readable universally easily securely deeply understandable explicitly inherently meaningful uniformly standardized</b> completely.</span>
            </div>
          </div>
         </div>
      </section>

    </div>
  );
};

export default PythonVariables;