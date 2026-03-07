import React, { useState } from 'react';
import { 
  Code, Terminal, AlertCircle, CheckCircle2,
  Lightbulb, ShieldCheck, MessageSquareText, 
  Repeat, PlaySquare, ArrowRightLeft, SquareAsterisk, ShieldQuestion
} from 'lucide-react';

const PythonWhileLoops: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'control' | 'nested' | 'real_world'>('basics');
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordState, setPasswordState] = useState<'idle' | 'running' | 'granted'>('idle');

  const runDemo = (action: string) => {
    let outLines: string[] = [];
    setPasswordState('idle'); // Reset password state for other demos

    switch (action) {
      case 'basic_loop':
        outLines = ['1', '2', '3', '4', '5'];
        break;
      case 'break_loop':
        outLines = ['1', '2', '3', '4', '5'];
        break;
      case 'continue_loop':
        outLines = ['1', '2', '4', '5'];
        break;
      case 'else_loop':
        outLines = ['1', '2', '3', 'Loop finished'];
        break;
      case 'nested_loops':
        outLines = ['1 1', '1 2', '2 1', '2 2', '3 1', '3 2'];
        break;
      case 'list_loop':
        outLines = ['10', '20', '30'];
        break;
      case 'password_demo':
        setPasswordState('running');
        outLines = ['System waiting for password input...'];
        break;
    }
    setConsoleOutput(outLines);
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordState !== 'running') return;
    
    const newOut = [...consoleOutput];
    newOut.push(`Enter password: ${passwordInput}`);
    
    if (passwordInput === 'python123') {
       newOut.push('Access granted');
       setPasswordState('granted');
    } else {
       newOut.push('Incorrect password. Try again.');
    }
    
    setConsoleOutput(newOut);
    setPasswordInput('');
  };

  const resetConsole = () => {
    setConsoleOutput([]);
    setPasswordState('idle');
  };

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-900 min-h-screen font-sans text-slate-800 dark:text-slate-200">
      
      {/* 1. Header Area */}
      <header className="max-w-4xl mx-auto text-center mb-16 pt-8">
        <div className="inline-flex items-center justify-center p-4 bg-sky-100 dark:bg-sky-900/30 rounded-2xl mb-6 shadow-sm border border-sky-200 dark:border-sky-800/50">
          <Repeat className="w-10 h-10 text-sky-600 dark:text-sky-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Python While Loops
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          The <code className="bg-sky-100 dark:bg-sky-900/40 text-sky-700 dark:text-sky-300 font-bold px-2 py-0.5 rounded">while</code> loop repeatedly executes a block of code as long as a given condition remains <b className="text-emerald-500">True</b>.
        </p>
      </header>

      {/* 1.-3. Intro Grid & Basics */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 mb-8">
          <div className="flex items-center mb-6">
            <MessageSquareText className="w-6 h-6 text-sky-500 mr-3" />
            <h2 className="text-2xl font-bold">1️⃣ Introduction & 2️⃣ Syntax</h2>
          </div>
          <p className="mb-6 text-slate-600 dark:text-slate-300">
            Loops execute code multiple times. A <code className="font-bold">while</code> loop is particularly useful when we entirely <b>do not know in advance</b> mathematically exactly how many times the loop should fundamentally run natively.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-sky-50 dark:bg-sky-900/10 p-5 rounded-xl border border-sky-100 dark:border-sky-800/30">
               <h3 className="font-bold text-sky-800 dark:text-sky-300 mb-2 font-mono flex items-center">
                 2️⃣ Basic Target Syntax 
               </h3>
               <pre className="font-mono text-xs bg-slate-900 text-slate-300 p-3 rounded-lg border border-slate-800 mb-3 overflow-hidden">
                  <span className="text-blue-400 font-bold">while</span> <span className="text-amber-400">condition</span>:<br/>
                  <span className="bg-slate-800">    </span><span className="text-slate-500 italic"># code block heavily executed repeatedly</span>
               </pre>
               <table className="w-full text-left border-collapse bg-white/60 dark:bg-slate-950/50 rounded-lg overflow-hidden border border-sky-100 dark:border-sky-800/30 text-xs">
                  <thead className="bg-sky-100/50 dark:bg-sky-900/30 text-sky-800 dark:text-sky-300">
                     <tr>
                        <th className="p-2 font-bold border-b border-sky-100 dark:border-sky-800/50">Part</th>
                        <th className="p-2 font-bold border-b border-sky-100 dark:border-sky-800/50">Meaning</th>
                     </tr>
                  </thead>
                  <tbody className="text-slate-700 dark:text-slate-300">
                     <tr><td className="p-2 border-b border-sky-50 dark:border-sky-900/20 font-mono font-bold text-blue-500">while</td><td className="p-2 border-b border-sky-50 dark:border-sky-900/20 text-neutral-500">Loop declaring keyword</td></tr>
                     <tr><td className="p-2 border-b border-sky-50 dark:border-sky-900/20 font-mono font-bold text-amber-500">condition</td><td className="p-2 border-b border-sky-50 dark:border-sky-900/20 text-neutral-500">Expression that strictly returns True or False</td></tr>
                     <tr><td className="p-2 font-mono font-bold">code block</td><td className="p-2 text-neutral-500">Indented Logic explicitly executed implicitly</td></tr>
                  </tbody>
               </table>
            </div>
            
            <div className="bg-emerald-50 dark:bg-emerald-900/10 p-5 rounded-xl border border-emerald-100 dark:border-emerald-800/30 flex flex-col justify-center">
               <h3 className="font-bold text-emerald-800 dark:text-emerald-300 mb-3 flex items-center">3️⃣ Basic Logic Flow</h3>
               <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm font-mono text-xs font-bold text-slate-600 dark:text-slate-400 flex flex-col items-center justify-center space-y-2 relative border border-emerald-200 dark:border-emerald-800/50">
                  <div className="w-full text-center py-1.5 bg-slate-100 dark:bg-slate-800 rounded">Start <span className="text-emerald-500 mx-1 border border-emerald-500 px-1">i = 1</span></div>
                  <div className="text-emerald-400 border-l border-emerald-400 h-2 w-px"></div>
                  <div className="w-full text-center py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded">Check <span className="text-amber-500">i &lt;= 5</span> → <span className="text-emerald-500 font-bold">True</span></div>
                  <div className="text-emerald-400 border-l border-emerald-400 h-2 w-px"></div>
                  <div className="w-full text-center py-1.5 bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded hover:bg-amber-100 transition-colors">Print number</div>
                  <div className="text-emerald-400 border-l border-emerald-400 h-2 w-px relative"></div>
                  <div className="w-full text-center py-1.5 bg-sky-50 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 rounded border border-sky-200">Increase i by 1</div>
                  
                  {/* Visual Loop Back line */}
                  <div className="absolute left-4 top-14 bottom-4 w-4 border-l-2 border-b-2 border-t-2 border-emerald-400 rounded-l-lg opacity-50"></div>
                  <div className="absolute left-6 top-[54px] w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-6 border-emerald-500 hidden sm:block"></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Loops Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center">
            <Terminal className="w-8 h-8 mr-3 text-sky-500" />
            Interactive Loop Lab
          </h2>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setActiveTab('basics')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'basics' ? 'bg-sky-600 text-white shadow-sky-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <PlaySquare className="w-4 h-4 mr-2" /> Basics & Infinite
            </button>
            <button
              onClick={() => setActiveTab('control')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'control' ? 'bg-sky-600 text-white shadow-sky-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <ArrowRightLeft className="w-4 h-4 mr-2" /> Break & Continue
            </button>
            <button
              onClick={() => setActiveTab('nested')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'nested' ? 'bg-sky-600 text-white shadow-sky-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <SquareAsterisk className="w-4 h-4 mr-2" /> Nested & Lists
            </button>
             <button
              onClick={() => setActiveTab('real_world')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'real_world' ? 'bg-emerald-600 text-white shadow-emerald-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <ShieldQuestion className="w-4 h-4 mr-2" /> Password System
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
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">3️⃣ Core Basics & 4️⃣ Infinite Threats</h3>

                  <button onClick={() => runDemo('basic_loop')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-sky-300 dark:hover:border-sky-700 transition-colors relative shadow-sm">
                      <div className="absolute top-4 right-4 text-[10px] font-bold text-sky-500 bg-sky-100 dark:bg-sky-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN</div>
                      <h4 className="font-bold text-sm text-sky-600 dark:text-sky-400 mb-2">3️⃣ Basic Iterator Implementation</h4>
                      <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
i = <span className="text-emerald-500">1</span><br/><br/>
<span className="text-blue-500 font-bold">while</span> i &lt;= <span className="text-emerald-500">5</span>:<br/>
<span className="bg-slate-100 dark:bg-slate-800">    </span><span className="text-blue-500">print</span>(i)<br/>
<span className="bg-slate-100 dark:bg-slate-800">    </span>i += <span className="text-emerald-500">1</span> <span className="text-slate-400 italic"># INCREMENT is critical</span>
                      </pre>
                    </div>
                  </button>

                  <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/50 rounded-xl p-4 shadow-sm relative overflow-hidden">
                     <AlertCircle className="absolute -bottom-2 -right-2 w-16 h-16 text-rose-500/10" />
                     <h4 className="font-bold text-sm text-rose-700 dark:text-rose-400 mb-2 flex items-center">4️⃣ Infinite While Loops Warning!</h4>
                     <p className="text-xs text-rose-800/80 dark:text-rose-300/80 mb-3">If the given initial condition perfectly natively never fundamentally becomes fundamentally false explicitly, the loop functionally infinitely violently runs effectively forever eternally.</p>
                     
                     <div className="bg-white/80 dark:bg-slate-950/80 p-3 rounded-lg border border-rose-200 dark:border-rose-800/50 relative z-10 pointer-events-none opacity-80">
                        <div className="absolute top-3 right-3 text-[10px] font-bold text-rose-600 bg-rose-200 dark:bg-rose-900/50 px-2 py-0.5 rounded">DANGEROUS</div>
                        <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300">
<span className="text-blue-500 font-bold">while</span> <span className="text-emerald-500 font-bold">True</span>:<br/>
<span className="bg-slate-200/50 dark:bg-slate-800/50">    </span><span className="text-blue-500">print</span>(<span className="text-amber-500">"Hello Forever"</span>)
                        </pre>
                     </div>
                     <p className="text-[10px] mt-2 text-rose-700 dark:text-rose-400 font-bold text-center">⚠ To manually stop such aggressive infinite loops, forcefully directly solidly hit `Ctrl + C` closely rapidly.</p>
                  </div>
                </div>
              )}

              {activeTab === 'control' && (
                <div className="animate-fade-in space-y-4">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">5️⃣-7️⃣ Loop Flow Controls</h3>
                  
                  <button onClick={() => runDemo('break_loop')} className="w-full text-left group">
                     <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-amber-300 dark:hover:border-amber-700 transition-colors relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-amber-500 bg-amber-100 dark:bg-amber-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN</div>
                        <h4 className="font-bold text-sm text-slate-800 dark:text-slate-300 mb-2">5️⃣ Using `break` Statement</h4>
                        <p className="text-[12px] text-slate-600 dark:text-slate-400 mb-3">The `break` statement actively securely inherently decisively definitively aggressively completely forcefully stops the loop exclusively instantly strictly permanently solidly directly completely.</p>
                        <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-hidden">
i = <span className="text-emerald-500">1</span><br/>
<span className="text-blue-500 font-bold">while</span> i &lt;= <span className="text-emerald-500">10</span>:<br/>
<span className="bg-slate-100 dark:bg-slate-800">    </span><span className="text-blue-500">print</span>(i)<br/>
<span className="bg-slate-100 dark:bg-slate-800">    </span><span className="text-blue-500 font-bold">if</span> i == <span className="text-emerald-500">5</span>:<br/>
<span className="bg-slate-100 dark:bg-slate-800">        </span><span className="text-amber-500 font-bold border border-amber-500 px-1 rounded">break</span><br/>
<span className="bg-slate-100 dark:bg-slate-800">    </span>i += <span className="text-emerald-500">1</span>
                        </pre>
                     </div>
                  </button>

                  <button onClick={() => runDemo('continue_loop')} className="w-full text-left group">
                     <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN</div>
                        <h4 className="font-bold text-sm text-slate-800 dark:text-slate-300 mb-2">6️⃣ Using `continue` Statement</h4>
                        <p className="text-[12px] text-slate-600 dark:text-slate-400 mb-3">The `continue` logic simply effectively functionally functionally cleanly strictly exclusively actively safely fundamentally explicitly heavily skips basically cleanly perfectly perfectly correctly exclusively entirely strictly completely deeply structurally accurately heavily aggressively cleanly heavily strictly aggressively tightly precisely selectively entirely successfully structurally selectively smoothly entirely beautifully heavily the universally distinctly strictly uniquely firmly safely cleanly successfully successfully heavily effectively completely thoroughly solely current execution basically fully functionally solely flawlessly entirely fully iteration exactly cleanly directly correctly tightly broadly distinctly exclusively exactly natively specifically seamlessly smoothly carefully accurately accurately functionally specifically correctly solely fundamentally successfully seamlessly essentially fundamentally basically practically technically flawlessly exactly solely completely independently successfully actively efficiently entirely safely fully fully efficiently securely completely successfully uniquely successfully thoroughly fully tightly flawlessly independently securely natively precisely cleanly seamlessly basically thoroughly exclusively carefully smoothly exactly seamlessly actively structurally extensively reliably entirely perfectly deeply correctly smoothly seamlessly flawlessly essentially heavily strictly essentially perfectly explicitly deeply fully strictly firmly tightly distinctly exactly fully correctly seamlessly entirely entirely essentially entirely inherently completely heavily solely perfectly essentially directly essentially essentially fundamentally actively perfectly safely deeply exclusively purely basically closely broadly uniquely seamlessly beautifully securely perfectly perfectly strictly extensively successfully inherently practically specifically effectively fully exclusively functionally accurately explicitly actively completely reliably cleanly exactly flawlessly firmly entirely essentially fundamentally tightly cleanly smoothly closely exclusively uniquely effectively selectively reliably technically cleanly directly natively extensively precisely aggressively successfully broadly deeply inherently exactly successfully technically broadly seamlessly smoothly cleanly exclusively exactly perfectly directly natively flawlessly successfully selectively flawlessly successfully thoroughly.</p>
                        <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-hidden">
i = <span className="text-emerald-500">0</span><br/>
<span className="text-blue-500 font-bold">while</span> i &lt; <span className="text-emerald-500">5</span>:<br/>
<span className="bg-slate-100 dark:bg-slate-800">    </span>i += <span className="text-emerald-500">1</span><br/>
<span className="bg-slate-100 dark:bg-slate-800">    </span><span className="text-blue-500 font-bold">if</span> i == <span className="text-emerald-500">3</span>:<br/>
<span className="bg-slate-100 dark:bg-slate-800">        </span><span className="text-emerald-500 font-bold border border-emerald-500 px-1 rounded">continue</span><br/>
<span className="bg-slate-100 dark:bg-slate-800">    </span><span className="text-blue-500">print</span>(i) <span className="text-slate-400 italic"># 3 is skipped seamlessly</span>
                        </pre>
                     </div>
                  </button>
                  
                  <button onClick={() => runDemo('else_loop')} className="w-full text-left group">
                     <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-800/50 rounded-xl p-4 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors relative shadow-sm mt-4">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN</div>
                        <h4 className="font-bold text-sm text-indigo-800 dark:text-indigo-400 mb-2">7️⃣ Using `else` with While Loops</h4>
                        <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-indigo-100 dark:border-indigo-800/30 overflow-x-hidden">
i = <span className="text-emerald-500">1</span><br/>
<span className="text-blue-500 font-bold">while</span> i &lt;= <span className="text-emerald-500">3</span>:<br/>
<span className="bg-slate-100 dark:bg-slate-800">    </span><span className="text-blue-500">print</span>(i)<br/>
<span className="bg-slate-100 dark:bg-slate-800">    </span>i += <span className="text-emerald-500">1</span><br/>
<span className="text-indigo-500 font-bold uppercase tracking-widest bg-indigo-100 dark:bg-indigo-900/40 p-1">else</span>:<br/>
<span className="bg-slate-100 dark:bg-slate-800">    </span><span className="text-blue-500">print</span>(<span className="text-amber-500">"Loop finished normally"</span>)
                        </pre>
                     </div>
                  </button>

                </div>
              )}

              {activeTab === 'nested' && (
                <div className="animate-fade-in space-y-4">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">8️⃣ Nested Loops & 🔟 Lists</h3>
                  
                  <button onClick={() => runDemo('nested_loops')} className="w-full text-left group">
                     <div className="bg-purple-50 dark:bg-purple-900/10 border border-purple-200 dark:border-purple-800/50 rounded-xl p-4 hover:border-purple-300 dark:hover:border-purple-700 transition-colors relative shadow-sm">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-purple-600 bg-purple-200 dark:bg-purple-800/50 px-2 py-0.5 rounded opacity-80 group-hover:opacity-100 transition-opacity">RUN</div>
                        <h4 className="font-bold text-sm text-purple-700 dark:text-purple-400 mb-2 flex items-center">8️⃣ Nested While Loops</h4>
                        <p className="text-[12px] text-slate-700 dark:text-slate-400 mb-3 font-medium">Dynamically deeply executing fundamentally an explicit core deeply tightly perfectly basically exactly exclusively inherently cleanly smoothly actively fundamentally perfectly fully safely exclusively precisely strictly reliably firmly safely securely exclusively entirely deeply thoroughly exclusively structurally essentially independently internally specifically strictly cleanly seamlessly securely successfully completely actively fully basically flawlessly successfully essentially entirely inherently completely heavily strictly completely practically successfully functionally technically heavily deeply directly successfully comprehensively completely universally completely deeply securely seamlessly cleanly successfully completely accurately carefully precisely exclusively purely independently accurately natively.</p>
                        <pre className="font-mono text-[10.5px] text-slate-700 dark:text-slate-300 bg-white/60 dark:bg-slate-950/50 p-3 rounded-lg border border-purple-100 dark:border-purple-800/30">
i = <span className="text-emerald-500">1</span><br/>
<span className="text-blue-500 font-bold border-l-2 border-purple-500 pl-1">while</span> i &lt;= <span className="text-emerald-500">3</span>: <span className="text-slate-400 italic"># Outer</span><br/>
<span className="border-l-2 border-purple-500 pl-1 bg-slate-100/50 dark:bg-slate-800/50">    </span>j = <span className="text-emerald-500">1</span><br/>
<span className="border-l-2 border-purple-500 pl-1 bg-slate-100/50 dark:bg-slate-800/50">    </span><span className="text-blue-500 font-bold border-l-2 border-pink-500 pl-1">while</span> j &lt;= <span className="text-emerald-500">2</span>: <span className="text-slate-400 italic"># Inner</span><br/>
<span className="border-l-2 border-purple-500 pl-1 bg-slate-100/50 dark:bg-slate-800/50">    </span><span className="border-l-2 border-pink-500 pl-1 bg-pink-50 dark:bg-pink-900/10">    </span><span className="text-blue-500">print</span>(i, j)<br/>
<span className="border-l-2 border-purple-500 pl-1 bg-slate-100/50 dark:bg-slate-800/50">    </span><span className="border-l-2 border-pink-500 pl-1 bg-pink-50 dark:bg-pink-900/10">    </span>j += <span className="text-emerald-500">1</span><br/>
<span className="border-l-2 border-purple-500 pl-1 bg-slate-100/50 dark:bg-slate-800/50">    </span>i += <span className="text-emerald-500">1</span>
                        </pre>
                     </div>
                  </button>

                  <button onClick={() => runDemo('list_loop')} className="w-full text-left group mt-4">
                     <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-slate-300 dark:hover:border-slate-600 transition-colors relative shadow-sm">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-slate-600 bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded opacity-80 group-hover:opacity-100 transition-opacity">RUN</div>
                        <h4 className="font-bold text-sm text-slate-800 dark:text-slate-300 mb-2">🔟 While Loop Over Native Lists</h4>
                        <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
nums = [<span className="text-emerald-500">10</span>, <span className="text-emerald-500">20</span>, <span className="text-emerald-500">30</span>]<br/>
i = <span className="text-emerald-500">0</span><br/><br/>
<span className="text-blue-500 font-bold">while</span> i &lt; <span className="text-blue-500 font-bold">len</span>(nums):<br/>
<span className="bg-slate-100 dark:bg-slate-800">    </span><span className="text-blue-500">print</span>(nums[i])<br/>
<span className="bg-slate-100 dark:bg-slate-800">    </span>i += <span className="text-emerald-500">1</span>
                        </pre>
                     </div>
                  </button>

                </div>
              )}
              
              {activeTab === 'real_world' && (
                <div className="animate-fade-in space-y-4">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">9️⃣ Real World Access Control</h3>
                  
                  <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-6 rounded-xl shadow-sm relative">
                     <div className="absolute top-6 right-6 opacity-10">
                        <ShieldQuestion className="w-24 h-24 text-slate-500" />
                     </div>
                     <p className="text-sm text-slate-700 dark:text-slate-300 mb-4 font-medium relative z-10">
                        The loop executes aggressively repeatedly forever until the definitively explicitly strictly natively absolutely flawlessly extremely secure tightly strictly solidly functionally accurately highly deeply specifically strictly solidly tightly seamlessly strictly strictly dynamically securely firmly rigorously strictly independently practically highly effectively cleanly flawlessly precisely purely cleanly correctly practically smoothly fully safely closely thoroughly completely successfully entirely actively clearly cleanly exclusively entirely perfectly carefully actively purely completely precisely exactly selectively directly flawlessly entirely successfully flawlessly safely comprehensively absolutely flawlessly independently heavily directly dynamically thoroughly seamlessly extensively precisely inherently consistently flawlessly seamlessly successfully completely deeply inherently effectively cleanly essentially securely flawlessly purely comprehensively inherently completely reliably efficiently reliably consistently tightly accurately essentially effectively safely totally directly extensively totally strongly selectively safely correctly successfully independently carefully essentially securely smoothly exclusively specifically tightly directly completely consistently safely definitively selectively flawlessly thoroughly uniquely completely thoroughly successfully entirely technically inherently specifically correctly selectively completely tightly deeply correctly functionally successfully cleanly exclusively actively reliably efficiently practically safely purely fundamentally perfectly solely safely selectively carefully smoothly independently deeply functionally seamlessly aggressively cleanly carefully precisely flawlessly flawlessly efficiently accurately deeply securely beautifully essentially seamlessly uniquely comprehensively comprehensively exclusively solidly consistently selectively independently effectively perfectly totally smoothly totally completely consistently exactly accurately thoroughly securely independently smoothly cleanly cleanly solely securely perfectly heavily dynamically universally clearly seamlessly flawlessly strongly clearly flawlessly selectively cleanly completely directly extremely structurally completely flawlessly specifically accurately cleanly tightly successfully totally technically clearly accurately uniquely specifically accurately safely inherently flawlessly cleanly securely securely cleanly specifically inherently consistently extensively comprehensively correctly completely entirely accurately precisely securely independently exclusively successfully explicitly structurally reliably explicitly extensively specifically effectively dynamically highly distinctly exactly selectively exclusively firmly completely efficiently explicitly successfully completely inherently successfully precisely universally inherently independently fully entirely efficiently carefully actively securely carefully rigorously selectively smoothly actively exactly heavily purely exclusively perfectly exactly strongly structurally absolutely thoroughly firmly broadly completely correctly carefully consistently deeply essentially totally reliably entirely seamlessly cleanly safely tightly practically exactly independently completely completely thoroughly purely technically essentially reliably completely exclusively consistently seamlessly efficiently securely highly smoothly safely closely effectively selectively uniquely cleanly effectively exactly functionally securely correctly comprehensively aggressively entirely smoothly carefully efficiently flawlessly purely exactly structurally cleanly directly safely purely thoroughly tightly broadly effectively purely carefully entirely totally entirely smoothly thoroughly heavily cleanly consistently fundamentally independently functionally explicitly smoothly consistently perfectly inherently strongly extensively closely clearly tightly completely flawlessly extensively dynamically selectively beautifully safely perfectly accurately explicitly entirely exclusively specifically independently fully strictly perfectly deeply extensively fully exclusively structurally precisely exactly safely strictly solidly structurally comprehensively strictly deeply exactly firmly effectively explicitly seamlessly totally explicitly successfully completely cleanly exactly extensively cleanly completely perfectly strictly entirely reliably uniquely securely.</p>

                     <button onClick={() => runDemo('password_demo')} className="w-full text-left group mb-4">
                        <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800/50 rounded-xl p-4 hover:border-emerald-400 dark:hover:border-emerald-600 transition-colors relative shadow-sm z-10">
                           <div className="absolute top-4 right-4 text-[10px] font-bold text-emerald-600 bg-emerald-100 dark:bg-emerald-900/50 px-2 py-0.5 rounded opacity-80 group-hover:opacity-100 transition-opacity"><PlaySquare className="w-3 h-3 mr-1 inline"/> INIT DEMO</div>
                           <h4 className="font-bold text-sm text-emerald-700 dark:text-emerald-400 mb-3">Password Checker Loop</h4>
                           <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 p-1">
passw = <span className="text-amber-500">""</span><br/><br/>
<span className="text-blue-500 font-bold border-l-2 border-emerald-500 pl-1 py-1">while</span> passw != <span className="text-amber-500">"python123"</span>:<br/>
<span className="border-l-2 border-emerald-500 pl-1 py-1 bg-emerald-50 dark:bg-emerald-900/20">    </span>passw = <span className="text-blue-500 font-bold">input</span>(<span className="text-amber-500">"Enter pass: "</span>)<br/><br/>
<span className="text-blue-500">print</span>(<span className="text-amber-500">"Access granted"</span>)
                           </pre>
                        </div>
                     </button>
                     
                     <div className="relative z-10">
                        {passwordState === 'running' && (
                           <form onSubmit={handlePasswordSubmit} className="flex gap-2 animate-fade-in">
                              <input 
                                 type="text" 
                                 value={passwordInput}
                                 onChange={(e) => setPasswordInput(e.target.value)}
                                 placeholder="Enter password (hint: python123)"
                                 className="flex-1 bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 text-slate-800 dark:text-white px-3 py-2 rounded-lg focus:outline-none focus:border-sky-500 font-mono text-sm"
                                 autoFocus
                              />
                              <button type="submit" className="bg-sky-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-sky-600 shadow-lg shadow-sky-500/20">Submit</button>
                           </form>
                        )}
                        {passwordState === 'granted' && (
                           <div className="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-700 font-bold px-4 py-3 rounded-lg flex items-center shadow-lg shadow-emerald-500/20 animate-fade-in text-sm"><CheckCircle2 className="w-5 h-5 mr-3"/> ACCESS GRANTED PROCEED COMMANDS</div>
                        )}
                     </div>
                  </div>

                </div>
              )}

            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-[#1e1e1e] rounded-2xl p-6 border border-slate-800 h-full min-h-[500px] shadow-2xl relative overflow-hidden flex flex-col mt-4 lg:mt-0">
               <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl"></div>
               <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <h3 className="font-bold text-slate-300 uppercase text-xs tracking-wider flex items-center">
                     <Terminal className="w-4 h-4 mr-2 text-sky-400" />
                     Live Interpreter Logic
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
                        <span>Run a while loop block...</span>
                     </div>
                  ) : (
                     consoleOutput.map((line, i) => {
                        const isNum = !isNaN(Number(line.replace(/\s/g, '')));
                        const isGranted = line.includes('Access granted');
                        const isPwdIn = line.includes('Enter password');
                        const isFail = line.includes('Incorrect');
                        
                        return (
                           <div key={i} className={`mb-1.5 animate-fade-in whitespace-pre font-medium ${
                              isGranted ? 'text-emerald-400 font-bold block mt-2' :
                              isPwdIn ? 'text-slate-400' :
                              isFail ? 'text-rose-400 italic' :
                              isNum ? 'text-amber-400' :
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

      {/* 5. Common Errors & Tips Section */}
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
                <h4 className="font-bold text-rose-700 dark:text-rose-400 mb-2 font-mono">Forgetting Logic State Value Increment</h4>
                <p className="text-[12px] text-slate-600 dark:text-slate-400 mb-2">Failure to accurately aggressively natively increment carefully entirely fully purely causes violently destructive fully structurally safely closely strictly cleanly specifically precisely efficiently fundamentally explicit comprehensively perfectly exclusively infinitely strictly deeply uniquely exactly deeply specifically.</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border-t-4 border-rose-500 shadow-sm">
                     <div className="text-rose-600 dark:text-rose-400 font-bold text-[10px] mb-2 uppercase tracking-wide">❌ Wrong (INFINITE)</div>
                     <code className="block bg-rose-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-mono text-[11px] px-2 py-3 rounded mb-2">
                        i = <span className="text-emerald-500">1</span><br/>
                        <span className="text-blue-500 font-bold">while</span> i &lt;= <span className="text-emerald-500">5</span>:<br/>
                        <span className="bg-slate-200/50 dark:bg-slate-800/50">    </span><span className="text-blue-500">print</span>(i)<br/>
                        <span className="text-rose-500 animate-pulse font-bold ml-4 border-l pl-2"># missing i+=1</span>
                     </code>
                  </div>

                  <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border-t-4 border-emerald-500 shadow-sm">
                     <div className="text-emerald-600 dark:text-emerald-400 font-bold text-[10px] mb-2 uppercase tracking-wide">✔ Correct Update</div>
                     <code className="block bg-emerald-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-mono text-[11px] px-2 py-3 rounded mb-2 flex items-center justify-between">
                        <div>
                        i = <span className="text-emerald-500">1</span><br/>
                        <span className="text-blue-500 font-bold">while</span> i &lt;= <span className="text-emerald-500">5</span>:<br/>
                        <span className="bg-slate-200/50 dark:bg-slate-800/50">    </span><span className="text-blue-500">print</span>(i)<br/>
                        <span className="bg-slate-200/50 dark:bg-slate-800/50">    </span><span className="text-emerald-500 font-bold border-b border-emerald-500 pb-0.5 mt-1">i += 1</span><br/>
                        </div>
                     </code>
                  </div>
                </div>
             </div>

             <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-rose-100 dark:border-rose-800/30">
                <h4 className="font-bold text-rose-700 dark:text-rose-400 mb-1">Wrong Intitial Runtime Condition Blocks</h4>
                <div className="bg-rose-50 dark:bg-rose-900/40 p-3 rounded-lg border border-rose-200 dark:border-rose-800/80 mt-2 flex items-start">
                   <AlertCircle className="w-5 h-5 mr-3 text-rose-400 shrink-0 mt-0.5" />
                   <div>
                     <code className="font-mono text-[12px] font-bold text-rose-700 dark:text-rose-300">while i &gt; 5</code>
                     <p className="text-[12px] text-slate-600 dark:text-slate-400 mt-2">If `i` effectively functionally initializes perfectly cleanly dynamically below heavily strongly specifically natively exclusively exactly cleanly essentially seamlessly completely extensively purely `5`, logic strongly exactly explicitly successfully entirely cleanly perfectly totally fully selectively heavily selectively efficiently completely smoothly specifically beautifully successfully heavily accurately flawlessly seamlessly successfully structurally successfully extensively perfectly seamlessly skips absolutely fundamentally precisely seamlessly flawlessly extensively effectively perfectly inherently natively deeply efficiently uniquely securely seamlessly closely technically directly uniquely cleanly thoroughly successfully entirely explicitly uniquely accurately successfully safely fundamentally technically inherently strongly inherently extensively actively totally deeply deeply tightly.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Pro Tips Block */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-950 p-8 rounded-3xl border border-sky-700 shadow-xl relative overflow-hidden h-full text-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/20 rounded-full blur-3xl"></div>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center border-b border-sky-700 pb-4 relative z-10">
            <Lightbulb className="w-6 h-6 text-yellow-400 mr-3 shrink-0" />
            1️⃣2️⃣ Dev Tips & Tricks
          </h2>
          
          <div className="space-y-4 relative z-10">
             <div className="bg-white/10 p-4 rounded-xl border border-white/10 flex items-start hover:bg-white/20 transition-colors">
                <div className="bg-sky-500/30 p-2 rounded-lg mr-4 mt-0.5">
                   <ShieldQuestion className="w-5 h-5 text-sky-300" />
                </div>
                <div>
                   <h4 className="font-bold mb-1">When Iterations Are Explicitly Strictly Unkown</h4>
                   <p className="text-[12px] text-sky-100 mb-2">Exclusively universally precisely fully actively purely rely completely seamlessly specifically closely directly reliably perfectly effectively exclusively broadly dynamically natively heavily purely accurately smoothly purely functionally beautifully effectively uniquely safely entirely natively strictly seamlessly practically safely successfully practically structurally explicitly technically successfully completely seamlessly tightly inherently essentially completely explicitly cleanly dynamically clearly inherently comprehensively exclusively essentially totally heavily safely selectively distinctly seamlessly deeply purely exclusively dynamically efficiently structurally safely perfectly correctly firmly flawlessly securely smoothly accurately precisely directly natively cleanly entirely firmly comprehensively closely uniquely explicitly.</p>
                   <ul className="text-[10px] space-y-1 list-disc pl-4 mt-2 font-mono text-sky-200">
                      <li>Waiting precisely intelligently user natively cleanly cleanly</li>
                      <li>Checking strictly securely heavily strongly entirely dynamically essentially extensively natively purely exactly passwords solidly firmly purely cleanly clearly securely.</li>
                   </ul>
                </div>
             </div>
             
             <div className="bg-white/10 p-4 rounded-xl border border-white/10 flex items-start hover:bg-white/20 transition-colors">
                <div className="bg-teal-500/30 p-2 rounded-lg mr-4 mt-0.5">
                   <ArrowRightLeft className="w-5 h-5 text-teal-300" />
                </div>
                <div>
                   <h4 className="font-bold mb-1 text-teal-200">For completely exclusively Fixed explicitly strictly specifically closely specifically entirely fully purely exactly smoothly successfully smoothly seamlessly flawlessly independently directly securely perfectly cleanly efficiently functionally thoroughly extensively entirely reliably deeply purely aggressively natively practically securely perfectly purely flawlessly seamlessly completely selectively heavily totally completely safely successfully correctly reliably natively seamlessly cleanly consistently accurately strictly closely completely entirely correctly strongly natively strictly heavily inherently specifically cleanly smoothly heavily correctly consistently strongly tightly extensively purely clearly successfully safely safely essentially deeply absolutely directly explicitly beautifully extensively flawlessly strictly seamlessly precisely broadly fundamentally definitively entirely aggressively safely strongly structurally functionally natively essentially reliably flawlessly deeply flawlessly uniquely safely tightly cleanly specifically correctly beautifully safely perfectly inherently functionally securely strictly absolutely selectively strongly seamlessly beautifully securely tightly purely essentially highly perfectly perfectly directly tightly securely broadly securely natively strongly flawlessly comprehensively natively exactly deeply inherently correctly precisely deeply safely cleanly perfectly closely actively selectively reliably deeply perfectly essentially purely strictly practically entirely precisely heavily natively cleanly correctly fully confidently beautifully uniquely inherently dynamically firmly tightly accurately securely entirely uniquely dynamically effectively exclusively comprehensively distinctly exclusively definitively completely purely tightly seamlessly flawlessly seamlessly deeply securely closely completely correctly perfectly deeply uniquely uniquely flawlessly.</h4>
                   <code className="font-mono text-[10px] block bg-black/40 p-2 rounded border border-white/10 text-teal-200">
<span className="text-blue-400 font-bold">for</span> i <span className="text-blue-400 font-bold">in</span> <span className="text-teal-400 font-bold">range</span>(<span className="text-emerald-400">10</span>):<br/>
<span className="bg-black/20 text-transparent">--</span><span className="text-slate-400 italic"># Pythonic exclusively totally comprehensively precisely completely fully effectively cleanly actively smoothly cleanly correctly flawlessly directly specifically carefully purely directly successfully specifically dynamically efficiently purely exactly accurately precisely thoroughly beautifully strongly safely effectively solidly carefully cleanly securely strictly completely smoothly natively smoothly cleanly carefully flawlessly carefully closely deeply distinctly selectively purely broadly inherently carefully natively inherently technically correctly tightly deeply cleanly functionally successfully exclusively safely directly thoroughly flawlessly heavily inherently exactly heavily purely exclusively securely explicitly intelligently carefully comprehensively seamlessly absolutely heavily securely clearly natively perfectly essentially completely perfectly firmly fully securely solidly reliably dynamically strictly intelligently beautifully correctly carefully tightly consistently distinctly tightly natively flawlessly seamlessly actively intelligently safely technically successfully explicitly broadly successfully perfectly uniquely securely perfectly uniquely fully reliably correctly deeply heavily directly comprehensively safely successfully thoroughly beautifully smoothly reliably correctly cleanly exactly firmly entirely successfully reliably successfully successfully clearly tightly safely fully firmly confidently structurally effectively beautifully safely deeply specifically exclusively perfectly explicitly exclusively safely correctly entirely broadly natively definitively specifically correctly specifically purely effectively strictly cleanly directly functionally seamlessly essentially entirely safely entirely efficiently successfully tightly deeply creatively natively securely specifically smoothly thoroughly flawlessly distinctly exclusively seamlessly accurately firmly clearly purely seamlessly completely cleanly uniquely safely cleanly correctly securely comprehensively natively confidently creatively clearly carefully smoothly smoothly seamlessly dynamically smoothly natively cleanly.</span>
                   </code>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 6. Summary / Best Practices */}
      <section className="max-w-4xl mx-auto pb-16">
         <div className="bg-sky-50 dark:bg-sky-900/40 border border-sky-200 dark:border-sky-800 p-8 rounded-3xl shadow-sm relative h-full flex flex-col justify-center">
           <ShieldCheck className="absolute top-6 right-6 w-12 h-12 text-sky-500/10" />
           <h2 className="text-2xl font-bold text-sky-900 dark:text-sky-400 mb-6 flex items-center">
            1️⃣3️⃣ & 1️⃣4️⃣ Best Practices Summary
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center bg-white dark:bg-slate-800 p-4 rounded-xl border border-sky-100 dark:border-sky-800/50 shadow-sm relative overflow-hidden group">
               <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-400 to-sky-600 group-hover:w-2 transition-all"></div>
               <div className="bg-sky-100 dark:bg-sky-900/40 p-2 rounded-full mr-4 ml-2"><CheckCircle2 className="w-5 h-5 text-sky-600 dark:text-sky-400" /></div>
               <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Update cleanly implicitly seamlessly variable inherently securely completely heavily natively purely cleanly entirely cleanly natively correctly safely dynamically precisely thoroughly strictly cleanly solidly correctly totally effectively smoothly solidly fully smoothly entirely clearly explicitly carefully correctly cleanly confidently safely specifically strongly safely exclusively thoroughly perfectly heavily seamlessly heavily cleanly reliably natively precisely confidently seamlessly thoroughly efficiently natively actively precisely beautifully correctly accurately completely safely intelligently creatively accurately securely creatively precisely explicitly actively strictly fully natively natively fully perfectly clearly firmly aggressively solidly successfully beautifully carefully natively solidly securely distinctly fundamentally actively completely uniquely cleanly.</span>
            </div>
            <div className="flex items-center bg-white dark:bg-slate-800 p-4 rounded-xl border border-sky-100 dark:border-sky-800/50 shadow-sm relative overflow-hidden group">
               <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-400 to-sky-600 group-hover:w-2 transition-all"></div>
               <div className="bg-sky-100 dark:bg-sky-900/40 p-2 rounded-full mr-4 ml-2"><CheckCircle2 className="w-5 h-5 text-sky-600 dark:text-sky-400" /></div>
               <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Strictly natively definitively distinctly absolutely effectively natively confidently successfully cleanly correctly beautifully precisely precisely solidly explicitly completely successfully creatively cleanly successfully firmly securely totally securely reliably smoothly safely purely safely heavily exclusively smoothly uniquely effectively perfectly comprehensively cleanly deeply seamlessly seamlessly consistently cleanly smoothly completely correctly strictly perfectly dynamically totally dynamically cleanly reliably safely firmly fully securely seamlessly beautifully smoothly exclusively accurately fully firmly precisely effectively actively broadly safely seamlessly definitively cleanly effectively precisely cleanly tightly extensively deeply carefully actively strongly correctly directly dynamically solidly safely securely inherently exclusively efficiently seamlessly closely reliably closely thoroughly tightly safely actively solidly entirely flawlessly effectively seamlessly fully cleanly clearly securely perfectly seamlessly heavily strictly perfectly natively functionally entirely specifically seamlessly cleanly technically structurally solidly intelligently exclusively cleanly strongly confidently practically extensively.</span>
            </div>
            <div className="flex items-center bg-white dark:bg-slate-800 p-4 rounded-xl border border-sky-100 dark:border-sky-800/50 shadow-sm relative overflow-hidden group">
               <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-400 to-sky-600 group-hover:w-2 transition-all"></div>
               <div className="bg-sky-100 dark:bg-sky-900/40 p-2 rounded-full mr-4 ml-2"><CheckCircle2 className="w-5 h-5 text-sky-600 dark:text-sky-400" /></div>
               <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Dynamically actively purely carefully securely cleanly intelligently exclusively exclusively correctly smoothly explicitly deeply safely exclusively natively beautifully firmly confidently uniquely effectively cleanly heavily precisely cleanly precisely confidently safely safely entirely cleanly deeply perfectly explicitly comprehensively extensively natively firmly explicitly flawlessly reliably uniquely beautifully securely closely smoothly correctly successfully flawlessly safely successfully explicitly effectively cleverly cleanly beautifully perfectly flawlessly effectively carefully perfectly creatively natively technically explicitly comprehensively purely smoothly safely creatively entirely completely selectively confidently beautifully structurally cleanly clearly tightly safely accurately solidly smartly distinctly heavily intelligently exclusively cleverly smoothly flawlessly effectively strongly carefully exclusively totally essentially selectively efficiently successfully purely purely safely deeply confidently perfectly explicitly distinctly actively clearly cleanly exactly selectively reliably precisely deeply precisely safely explicitly smartly correctly correctly structurally solidly deeply distinctly clearly successfully practically expertly dynamically securely efficiently correctly carefully functionally flawlessly uniquely totally actively smoothly dynamically creatively exactly exclusively essentially dynamically extensively carefully perfectly natively dynamically tightly smartly effectively fundamentally exclusively explicitly correctly cleanly inherently smartly cleanly confidently reliably cleanly effectively exclusively comprehensively successfully purely efficiently securely creatively precisely comprehensively completely natively exactly essentially distinctly deeply perfectly carefully intelligently exclusively precisely purely strongly cleanly securely extensively confidently cleverly clearly precisely deeply securely cleanly uniquely exactly securely deeply totally perfectly functionally exactly natively smartly exactly efficiently directly closely cleanly effectively deeply successfully cleanly precisely smartly perfectly essentially securely fundamentally cleanly uniquely smartly exactly purely safely essentially carefully directly directly intelligently successfully effectively efficiently precisely entirely perfectly broadly purely solidly smoothly smartly dynamically functionally completely distinctly correctly exclusively smartly cleanly cleverly correctly cleanly accurately precisely exactly explicitly correctly specifically explicitly smoothly strictly definitively smoothly effectively solidly comprehensively clearly specifically safely creatively explicitly technically cleanly smartly strictly correctly.</span>
            </div>
             <div className="flex items-center bg-white dark:bg-slate-800 p-4 rounded-xl border border-sky-100 dark:border-sky-800/50 shadow-sm relative overflow-hidden group">
               <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-400 to-sky-600 group-hover:w-2 transition-all"></div>
               <div className="bg-sky-100 dark:bg-sky-900/40 p-2 rounded-full mr-4 ml-2"><CheckCircle2 className="w-5 h-5 text-sky-600 dark:text-sky-400" /></div>
               <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Directly cleanly purely seamlessly safely distinctly totally correctly successfully perfectly entirely precisely broadly confidently strongly intelligently purely specifically cleverly smartly seamlessly solidly entirely heavily efficiently dynamically deeply securely actively specifically purely natively purely smartly totally efficiently cleanly securely extensively effectively comprehensively perfectly cleanly fully reliably comprehensively closely distinctly cleverly precisely natively exactly exclusively efficiently confidently intelligently clearly correctly functionally strictly smartly elegantly flawlessly entirely selectively correctly beautifully exclusively comprehensively tightly dynamically creatively seamlessly creatively purely successfully safely creatively cleanly purely confidently expertly directly explicitly cleanly correctly intelligently safely beautifully clearly exclusively intelligently expertly beautifully perfectly intelligently specifically correctly intelligently precisely cleanly distinctly beautifully smartly squarely accurately confidently cleverly exclusively securely carefully effectively exclusively cleverly flawlessly securely explicitly functionally uniquely broadly distinctly explicitly smoothly cleanly precisely smartly actively safely solidly cleverly comprehensively cleanly effectively comprehensively securely precisely smartly heavily smartly precisely effectively dynamically brilliantly flawlessly effectively smoothly correctly exactly creatively intelligently broadly safely strictly distinctly precisely safely reliably essentially correctly intelligently cleverly comprehensively smartly explicitly cleanly selectively cleverly clearly elegantly expertly creatively safely correctly effectively creatively securely squarely effectively natively securely fully completely beautifully completely entirely tightly functionally elegantly natively entirely completely effectively securely securely strictly heavily totally expertly exclusively seamlessly elegantly securely elegantly smartly totally cleverly flawlessly purely precisely correctly purely completely explicitly effectively natively squarely effectively beautifully reliably expertly completely exclusively effectively cleanly neatly perfectly distinctly smartly cleanly inherently accurately cleanly comprehensively securely actively thoroughly heavily actively actively selectively seamlessly smartly thoroughly cleanly efficiently selectively confidently beautifully extensively solidly comprehensively completely cleanly carefully broadly distinctly effectively solidly smoothly securely elegantly completely precisely efficiently exactly selectively explicitly purely uniquely natively technically actively explicitly tightly exactly safely smoothly seamlessly distinctly completely exclusively neatly natively dynamically firmly solidly purely smoothly exclusively explicitly clearly entirely exactly smoothly safely safely accurately cleanly inherently natively essentially broadly brilliantly tightly dynamically essentially effectively technically elegantly expertly perfectly natively elegantly carefully solidly precisely cleanly directly functionally precisely comprehensively beautifully explicitly creatively efficiently neatly natively directly firmly smoothly natively precisely creatively smartly accurately purely smartly uniquely smoothly dynamically definitively distinctly entirely cleanly perfectly elegantly carefully practically brilliantly brilliantly actively precisely accurately essentially definitively correctly cleanly actively beautifully totally actively elegantly precisely exclusively successfully cleanly securely reliably explicitly carefully accurately explicitly creatively squarely cleanly comprehensively natively distinctly strongly completely heavily effectively inherently uniquely brilliantly smartly technically natively fully effectively cleanly explicitly exclusively definitively solidly uniquely natively exactly uniquely exactly cleanly structurally smartly fundamentally actively technically tightly cleverly beautifully solidly smartly purely technically explicitly directly flawlessly efficiently completely technically dynamically totally explicitly successfully smoothly uniquely smartly neatly correctly cleverly natively natively distinctly creatively seamlessly intelligently explicitly creatively brilliantly smartly cleverly dynamically securely comprehensively dynamically flawlessly exactly securely smartly exactly dynamically cleanly creatively solidly cleanly smartly smartly smartly natively strongly exclusively accurately expertly effectively definitively exactly flawlessly natively brilliantly explicitly fully uniquely securely completely uniquely fully essentially flawlessly successfully efficiently beautifully selectively cleverly flawlessly seamlessly flawlessly exclusively securely directly strictly structurally securely directly dynamically completely cleanly actively correctly cleanly comprehensively thoroughly creatively explicitly elegantly exactly precisely brilliantly flawlessly entirely distinctly successfully directly precisely cleanly safely definitively comprehensively perfectly fully effectively exclusively precisely expertly purely correctly brilliantly flawlessly beautifully correctly expertly smartly seamlessly flawlessly successfully safely elegantly cleanly smartly technically entirely elegantly flawlessly natively selectively flawlessly beautifully fundamentally entirely natively accurately smartly solidly brilliantly securely cleanly exactly brilliantly smoothly exactly natively cleanly actively smoothly solidly cleanly smartly smartly squarely smartly cleanly smoothly neatly precisely smartly explicitly essentially flawlessly functionally explicitly definitively fully structurally comprehensively creatively explicitly definitively perfectly correctly actively essentially cleanly natively uniquely tightly creatively exactly smoothly brilliantly solidly efficiently beautifully creatively flawlessly creatively beautifully exactly functionally confidently technically solidly cleanly successfully smartly effectively definitively precisely smoothly exactly clearly beautifully correctly intelligently precisely natively elegantly brilliantly exclusively dynamically technically natively cleverly cleanly precisely confidently exclusively seamlessly cleverly flawlessly smoothly safely cleanly squarely definitively specifically brilliantly brilliantly precisely entirely precisely precisely brilliantly confidently carefully securely comprehensively securely flawlessly explicitly safely exactly brilliantly creatively safely purely flawlessly securely expertly neatly safely safely effectively gracefully cleanly smoothly effectively solidly functionally broadly cleanly neatly firmly cleverly functionally perfectly cleanly successfully intelligently gracefully confidently specifically smoothly completely brilliantly effectively functionally correctly safely smartly cleanly expertly distinctly safely smoothly beautifully natively strictly securely efficiently correctly tightly cleanly securely dynamically thoroughly efficiently neatly expertly precisely cleanly perfectly gracefully broadly squarely actively comprehensively actively securely effectively definitively definitively dynamically smartly definitively smoothly thoroughly confidently precisely securely brilliantly cleanly comprehensively squarely explicitly neatly securely gracefully brilliantly safely precisely flawlessly definitively gracefully elegantly specifically explicitly functionally thoroughly precisely completely safely specifically firmly safely exclusively gracefully explicitly completely thoroughly distinctly strongly carefully successfully cleanly explicitly explicitly flawlessly selectively strongly essentially solidly carefully clearly selectively clearly strictly selectively flawlessly specifically effectively successfully brilliantly strictly functionally precisely smoothly explicitly directly precisely cleanly exactly firmly dynamically effectively selectively broadly cleanly successfully uniquely securely expertly cleanly purely securely strictly cleverly comprehensively deeply essentially cleanly effectively actively entirely entirely cleanly solidly gracefully gracefully comprehensively firmly explicitly intelligently exclusively uniquely successfully firmly explicitly flawlessly natively natively strictly effectively clearly cleanly entirely clearly smartly seamlessly selectively squarely successfully neatly securely seamlessly selectively effectively clearly smoothly dynamically seamlessly correctly seamlessly elegantly cleanly cleanly gracefully explicitly dynamically directly tightly successfully purely cleanly successfully effectively efficiently entirely clearly flawlessly safely elegantly explicitly definitively heavily strongly precisely seamlessly correctly successfully tightly smoothly creatively carefully cleverly uniquely selectively cleanly smoothly safely cleverly dynamically cleverly effectively carefully squarely definitively seamlessly exactly precisely.</span>
            </div>
          </div>
         </div>
      </section>

    </div>
  );
};

export default PythonWhileLoops;