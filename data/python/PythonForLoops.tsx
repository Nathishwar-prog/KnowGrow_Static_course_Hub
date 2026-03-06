import React, { useState, useEffect, useRef } from 'react';
import { 
  Repeat, List, Type, Hash, ShieldAlert,
  Terminal, Target, RefreshCw, Check, Copy, 
  Lightbulb, BookOpen, Play, ArrowRight,
  Settings, CheckCircle2, ChevronRight, StopCircle
} from 'lucide-react';

const CodeSnippetBlock = ({ codeSnippet, title, highlightLines = [] }: { codeSnippet: string, title?: string, highlightLines?: number[] }) => {
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
            className="p-1.5 rounded-md bg-slate-800 text-slate-400 hover:bg-neutral-600 hover:text-white transition-colors border border-slate-700"
            title="Copy code"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </div>
        <pre className="p-4 overflow-x-auto text-sm font-mono text-neutral-300 leading-relaxed">
          <code>
            {codeSnippet.split('\n').map((line, index) => {
              const isComment = line.trim().startsWith('#');
              return (
                <div key={index} className={`${highlightLines.includes(index) ? 'bg-neutral-800/80 -mx-4 px-4 py-0.5 border-l-2 border-orange-500' : ''}`}>
                  <span className={isComment ? 'text-neutral-500 italic' : 
                    line.includes('for ') || line.includes('in ') || line.includes('if ') || line.includes('else:') || line.includes('break') || line.includes('continue') ? 'text-fuchsia-400 font-bold' :
                    line.includes('range') || line.includes('print') || line.includes('sum') || line.includes('len') || line.includes('enumerate') ? 'text-blue-400' : 
                    line.includes('"') || line.includes("'") ? 'text-emerald-400' :
                    line.includes('=') || line.includes('==') ? 'text-neutral-300' : 
                    line.includes('[') || line.includes(']') ? 'text-yellow-300' : 'text-neutral-200'}>
                    {line}
                  </span>
                </div>
              );
            })}
          </code>
        </pre>
      </div>
    </div>
  );
};

const PythonForLoops: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'range' | 'controls' | 'nested'>('basics');
  const [currentStep, setCurrentStep] = useState<number>(-1);
  const [liveVar, setLiveVar] = useState<any>(null);
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const formatOut = (v: any) => typeof v === 'string' ? `'${v}'` : v;

  const runAnimatedDemo = (action: string) => {
    // Clear previous
    if (timerRef.current) clearInterval(timerRef.current);
    setConsoleOutput([]);
    setLiveVar(null);
    setCurrentStep(-1);

    let frames: { out: string, var: any }[] = [];
    
    switch (action) {
      case 'loop_range_5':
        // for i in range(5)
        for (let i = 0; i < 5; i++) frames.push({ out: `${i}`, var: i });
        break;
      case 'loop_list':
        // for fruit in ["apple", "banana", "cherry"]
        const fruits = ["apple", "banana", "cherry"];
        for (let f of fruits) frames.push({ out: `${f}`, var: f });
        break;
      case 'loop_string':
        // for letter in "Python"
        const str = "Python";
        for (let char of str) frames.push({ out: `${char}`, var: char });
        break;
      case 'range_start_end':
        // for i in range(2, 6)
        for (let i = 2; i < 6; i++) frames.push({ out: `${i}`, var: i });
        break;
      case 'range_step':
        // for i in range(1, 10, 2)
        for (let i = 1; i < 10; i += 2) frames.push({ out: `${i}`, var: i });
        break;
      case 'break_statement':
        // for i in range(10): if i == 5: break; print(i)
        for (let i = 0; i <= 5; i++) {
           if (i === 5) {
             frames.push({ out: `[BREAK Triggered]`, var: 5 });
             break;
           }
           frames.push({ out: `${i}`, var: i });
        }
        break;
      case 'continue_statement':
        // for i in range(5): if i == 2: continue; print(i)
        for (let i = 0; i < 5; i++) {
           if (i === 2) {
             frames.push({ out: `[SKIPPED 2 via Continue]`, var: 2 });
             continue;
           }
           frames.push({ out: `${i}`, var: i });
        }
        break;
      case 'else_block':
        // for i in range(3): print(i) \n else: print("Loop finished")
        for (let i = 0; i < 3; i++) frames.push({ out: `${i}`, var: i });
        frames.push({ out: `Loop finished`, var: null });
        break;
      case 'nested_loop':
        // for i in range(3): for j in range(2): print(i, j)
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 2; j++) {
                frames.push({ out: `${i} ${j}`, var: `i=${i}, j=${j}` });
            }
        }
        break;
      case 'realworld':
         const marks = [85, 90, 78, 92];
         for (let mark of marks) frames.push({ out: `Mark: ${mark}`, var: mark });
         break;
    }

    let i = 0;
    const outs: string[] = [];
    
    timerRef.current = setInterval(() => {
        if (i < frames.length) {
            outs.push(frames[i].out);
            setConsoleOutput([...outs]);
            setLiveVar(frames[i].var);
            setCurrentStep(i);
            i++;
        } else {
            setCurrentStep(-1);
            if (timerRef.current) clearInterval(timerRef.current);
        }
    }, action.includes('nested') ? 400 : 700); // speed up nested loops
  };

  const resetConsole = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setConsoleOutput([]);
    setLiveVar(null);
    setCurrentStep(-1);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-900 min-h-screen font-sans text-slate-800 dark:text-slate-200">
      
      {/* 1. Header Area */}
      <header className="max-w-4xl mx-auto text-center mb-16 pt-8">
        <div className="inline-flex items-center justify-center p-4 bg-orange-100 dark:bg-orange-900/30 rounded-2xl mb-6 shadow-sm border border-orange-200 dark:border-orange-800/50">
          <Repeat className="w-10 h-10 text-orange-600 dark:text-orange-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Python <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">For Loops</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          The engine of automation. Learn how to iterate over sequences, ranges, and structures to execute repeating logic efficiently in Python.
        </p>
      </header>

      {/* 2. What is & Visualizer */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 text-orange-500 mr-3" />
            <h2 className="text-2xl font-bold">1️⃣ What is a for Loop?</h2>
          </div>
          <p className="mb-6 text-slate-600 dark:text-slate-300">
            A <code className="font-mono text-fuchsia-500 bg-fuchsia-50 dark:bg-fuchsia-900/20 px-1.5 py-0.5 rounded font-bold">for</code> loop is used to <strong className="text-orange-600 dark:text-orange-400">iterate over a sequence</strong>. It allows Python to execute a blocked section of code multiple times—once for every item in that sequence.
          </p>
          
          <div className="bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-4 rounded-xl mb-6">
            <h4 className="font-bold text-sm text-slate-900 dark:text-slate-300 mb-3 flex items-center">Sequences You Can Loop:</h4>
            <div className="grid grid-cols-2 gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
               <div className="flex items-center"><List className="w-4 h-4 mr-2 text-indigo-500" /> Lists, Tuples, Sets</div>
               <div className="flex items-center"><Type className="w-4 h-4 mr-2 text-fuchsia-500" /> Strings</div>
               <div className="flex items-center"><Hash className="w-4 h-4 mr-2 text-amber-500" /> Ranges</div>
               <div className="flex items-center"><Terminal className="w-4 h-4 mr-2 text-emerald-500" /> Dictionaries</div>
            </div>
          </div>

          <div className="bg-slate-900 text-slate-300 p-4 rounded-xl font-mono text-sm border border-slate-800 shadow-inner">
             <div className="flex items-center text-orange-400 mb-2"><Repeat className="w-4 h-4 mr-2"/> Basic Syntax</div>
             <div><span className="text-fuchsia-400 font-bold">for</span> variable <span className="text-fuchsia-400 font-bold">in</span> sequence:</div>
             <div className="ml-4 border-l-2 border-slate-700 pl-4">
                <span className="text-slate-500 italic"># Code block executes here</span><br/>
             </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl shadow-sm border border-slate-700 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Repeat className="w-48 h-48 text-white" />
          </div>
          
          <div className="relative z-10 w-full">
            <h2 className="text-xl font-bold text-white mb-6 text-center border-b border-slate-700 pb-4 flex items-center justify-center">
              <ChevronRight className="w-5 h-5 mr-2 text-orange-400" />
              📊 Loop Execution Flow
            </h2>
            
            <div className="flex flex-col items-center justify-center space-y-2 font-mono text-xs max-w-sm mx-auto">
              
              <div className="bg-emerald-900/80 border border-emerald-500/50 text-emerald-100 font-bold px-4 py-2 rounded-lg w-full text-center shadow-lg">
                 Start Loop
              </div>
              
              <div className="flex flex-col items-center group relative z-20">
                 <ArrowRight className="w-4 h-4 text-slate-400 rotate-90 my-1" />
                 
                 <div className="bg-slate-700 border border-slate-500 text-white font-bold px-4 py-3 rounded-lg w-56 text-center shadow-lg transform -translate-x-10">
                    Get Next sequence Item
                 </div>
                 
                 <ArrowRight className="w-4 h-4 text-slate-400 rotate-90 my-1 -translate-x-10" />
                 
                 <div className="bg-blue-900/80 border border-blue-500/50 text-blue-100 font-bold px-4 py-3 rounded-lg w-56 text-center shadow-lg transform -translate-x-10">
                    Execute indentation block
                 </div>
                 
                 <ArrowRight className="w-4 h-4 text-slate-400 rotate-90 my-1 -translate-x-10" />
                 
                 <div className="bg-slate-700 border border-slate-500 text-white font-bold px-4 py-3 rounded-lg w-56 text-center shadow-lg transform -translate-x-10">
                    More Items in Sequence?
                 </div>
                 
                 {/* Loop Back Line visually built with absolute divs */}
                 <div className="absolute left-[200px] top-[10px] w-12 h-36 border-t-2 border-r-2 border-b-2 border-amber-500/80 rounded-r-xl border-dashed"></div>
                 <div className="absolute left-[162px] top-[146px] flex flex-col items-center text-amber-400 font-bold">
                     <ArrowRight className="w-4 h-4 rotate-180 absolute -left-6 top-1" />
                     <span className="bg-slate-900 px-1 absolute -left-6 -top-20">Yes</span>
                 </div>
              </div>
              
              <div className="flex flex-col items-center">
                 <ArrowRight className="w-4 h-4 text-slate-400 rotate-90 my-1 -translate-x-5" />
                 <span className="text-xs text-rose-400 font-bold absolute mt-1 mr-24">No</span>
              </div>

              <div className="bg-rose-900/80 border border-rose-500/50 text-rose-100 font-bold px-4 py-2 rounded-lg w-full text-center shadow-lg">
                 Stop Loop
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center">
            <Terminal className="w-8 h-8 mr-3 text-orange-500" />
            Interactive Loop Visualizer
          </h2>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setActiveTab('basics')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm ${activeTab === 'basics' ? 'bg-orange-500 text-white shadow-orange-500/20' : 'bg-white dark:bg-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              List / Strings
            </button>
            <button
              onClick={() => setActiveTab('range')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm ${activeTab === 'range' ? 'bg-orange-500 text-white shadow-orange-500/20' : 'bg-white dark:bg-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              The Range() Gen
            </button>
            <button
              onClick={() => setActiveTab('controls')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm ${activeTab === 'controls' ? 'bg-orange-500 text-white shadow-orange-500/20' : 'bg-white dark:bg-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              Break / Continue
            </button>
            <button
              onClick={() => setActiveTab('nested')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm ${activeTab === 'nested' ? 'bg-orange-500 text-white shadow-orange-500/20' : 'bg-white dark:bg-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              Nested Loops
            </button>
            
            <button
              onClick={resetConsole}
              className="flex items-center px-4 py-2 bg-slate-100 text-slate-700 dark:bg-slate-800/80 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shadow-sm ml-2"
              title="Stop Animation"
            >
              <StopCircle className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 min-h-[550px] overflow-y-auto">
              
              {activeTab === 'basics' && (
                <div className="animate-fade-in space-y-6">
                  
                  <button onClick={() => runAnimatedDemo('loop_list')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-orange-300 dark:hover:border-orange-700 transition-colors relative shadow-sm">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-orange-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300 mb-1">3️⃣ Looping Through a List</h4>
                      <p className="text-xs text-slate-500 mb-3">Notice how it grabs each item dynamically in order.</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 mt-2">
fruits = [<span className="text-emerald-500">"apple"</span>, <span className="text-emerald-500">"banana"</span>, <span className="text-emerald-500">"cherry"</span>]<br/><br/>
<span className="text-fuchsia-500 font-bold">for</span> fruit <span className="text-fuchsia-500 font-bold">in</span> fruits:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-500">print</span>(fruit)
                      </pre>
                    </div>
                  </button>

                  <button onClick={() => runAnimatedDemo('loop_string')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-orange-300 dark:hover:border-orange-700 transition-colors relative shadow-sm">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-orange-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300 mb-1">4️⃣ Looping Through a String</h4>
                      <p className="text-xs text-slate-500 mb-3">Strings are just sequences of characters. Loops grab 1 char at a time.</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 mt-2">
<span className="text-fuchsia-500 font-bold">for</span> letter <span className="text-fuchsia-500 font-bold">in</span> <span className="text-emerald-500">"Python"</span>:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-500">print</span>(letter)
                      </pre>
                    </div>
                  </button>

                  <button onClick={() => runAnimatedDemo('realworld')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors relative shadow-sm">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-indigo-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-indigo-700 dark:text-indigo-400 mb-1">🔟 Real World Example</h4>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 mt-2">
marks = [<span className="text-blue-400">85</span>, <span className="text-blue-400">90</span>, <span className="text-blue-400">78</span>, <span className="text-blue-400">92</span>]<br/><br/>
<span className="text-fuchsia-500 font-bold">for</span> mark <span className="text-fuchsia-500 font-bold">in</span> marks:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-500">print</span>(<span className="text-emerald-500">"Mark:"</span>, mark)
                      </pre>
                    </div>
                  </button>

                </div>
              )}

              {activeTab === 'range' && (
                <div className="animate-fade-in space-y-6">
                  
                  <div className="bg-blue-50 dark:bg-blue-900/10 p-3 rounded-xl border border-blue-200 dark:border-blue-800/50 mb-4 text-xs font-bold text-blue-800 dark:text-blue-300 tracking-wide text-center">
                    The <code className="bg-white dark:bg-slate-800 px-1 rounded mx-1">range()</code> function mathematically generates sequences of numbers up to, <strong className="font-extrabold text-rose-500">BUT NOT INCLUDING</strong>, the end number.
                  </div>

                  <button onClick={() => runAnimatedDemo('loop_range_5')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-blue-300 dark:hover:border-blue-700 transition-colors relative shadow-sm">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-blue-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300 mb-1">5️⃣ Basic <code className="text-blue-500 font-mono text-sm mx-1">range(stop)</code></h4>
                      <p className="text-xs text-slate-500 mb-2">Starts at 0 by default. Stops BEFORE 5.</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
<span className="text-fuchsia-500 font-bold">for</span> i <span className="text-fuchsia-500 font-bold">in</span> <span className="text-blue-500 font-bold">range</span>(5):<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-500">print</span>(i)
                      </pre>
                    </div>
                  </button>

                  <button onClick={() => runAnimatedDemo('range_start_end')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-blue-300 dark:hover:border-blue-700 transition-colors relative shadow-sm">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-blue-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300 mb-1">With <code className="text-blue-500 font-mono text-sm mx-1">range(start, stop)</code></h4>
                      <p className="text-xs text-slate-500 mb-2">Starts exactly at 2. Stops BEFORE 6.</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
<span className="text-fuchsia-500 font-bold">for</span> i <span className="text-fuchsia-500 font-bold">in</span> <span className="text-blue-500 font-bold">range</span>(2, 6):<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-500">print</span>(i)
                      </pre>
                    </div>
                  </button>

                  <button onClick={() => runAnimatedDemo('range_step')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-blue-300 dark:hover:border-blue-700 transition-colors relative shadow-sm">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-blue-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300 mb-1">With <code className="text-blue-500 font-mono text-sm mx-1">range(start, stop, step)</code></h4>
                      <p className="text-xs text-slate-500 mb-2">Notice how it skips by +2 increments!</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
<span className="text-fuchsia-500 font-bold">for</span> i <span className="text-fuchsia-500 font-bold">in</span> <span className="text-blue-500 font-bold">range</span>(1, 10, 2):<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-500">print</span>(i)
                      </pre>
                    </div>
                  </button>
                  
                </div>
              )}

              {activeTab === 'controls' && (
                <div className="animate-fade-in space-y-6">

                  <button onClick={() => runAnimatedDemo('break_statement')} className="w-full text-left group">
                    <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/40 rounded-xl p-4 hover:border-rose-400 dark:hover:border-rose-600 transition-colors relative shadow-sm">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-rose-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-rose-700 dark:text-rose-400 mb-1 flex items-center">6️⃣ Stop execution with <code className="bg-white/50 dark:bg-black/30 px-1 rounded font-mono ml-2 text-rose-600">break</code></h4>
                      <p className="text-xs text-rose-600 dark:text-rose-300/80 mb-3">Notice how execution stops entirely once `i == 5`.</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white/60 dark:bg-slate-950/50 p-3 rounded-lg border border-rose-100 dark:border-rose-800/30">
<span className="text-fuchsia-500 font-bold">for</span> i <span className="text-fuchsia-500 font-bold">in</span> <span className="text-blue-500 font-bold">range</span>(10):<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-fuchsia-500 font-bold">if</span> i == <span className="text-blue-400">5</span>:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-fuchsia-500 font-bold">break</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-500">print</span>(i)
                      </pre>
                    </div>
                  </button>

                  <button onClick={() => runAnimatedDemo('continue_statement')} className="w-full text-left group">
                    <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800/40 rounded-xl p-4 hover:border-emerald-400 dark:hover:border-emerald-600 transition-colors relative shadow-sm">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-emerald-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-emerald-700 dark:text-emerald-400 mb-1 flex items-center">7️⃣ Skip execution with <code className="bg-white/50 dark:bg-black/30 px-1 rounded font-mono ml-2 text-emerald-600">continue</code></h4>
                      <p className="text-xs text-emerald-600 dark:text-emerald-300/80 mb-3">Notice how 2 is completely skipped from the print output.</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white/60 dark:bg-slate-950/50 p-3 rounded-lg border border-emerald-100 dark:border-emerald-800/30">
<span className="text-fuchsia-500 font-bold">for</span> i <span className="text-fuchsia-500 font-bold">in</span> <span className="text-blue-500 font-bold">range</span>(5):<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-fuchsia-500 font-bold">if</span> i == <span className="text-blue-400">2</span>:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-fuchsia-500 font-bold">continue</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-500">print</span>(i)
                      </pre>
                    </div>
                  </button>

                  <button onClick={() => runAnimatedDemo('else_block')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-amber-300 dark:hover:border-amber-700 transition-colors relative shadow-sm">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-amber-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300 mb-1">8️⃣ The 'else' block</h4>
                      <p className="text-xs text-slate-500 mb-3">Executes logically exactly when the sequence exhausts itself.</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
<span className="text-fuchsia-500 font-bold">for</span> i <span className="text-fuchsia-500 font-bold">in</span> <span className="text-blue-500 font-bold">range</span>(3):<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-500">print</span>(i)<br/>
<span className="text-fuchsia-500 font-bold">else</span>:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-500">print</span>(<span className="text-emerald-500">"Loop finished"</span>)
                      </pre>
                    </div>
                  </button>

                </div>
              )}

              {activeTab === 'nested' && (
                <div className="animate-fade-in space-y-6">
                  
                  <div className="bg-indigo-50 dark:bg-indigo-900/10 p-4 rounded-xl border border-indigo-200 dark:border-indigo-800/50 mb-4 flex items-start">
                    <ShieldAlert className="w-6 h-6 mr-3 text-indigo-500 shrink-0 mt-1"/>
                    <div>
                       <h4 className="font-bold text-indigo-800 dark:text-indigo-300 mb-1">9️⃣ Nested for Loops</h4>
                       <p className="text-sm text-indigo-600 dark:text-indigo-400/80">Placing a loop inside a loop! The "Inner loop" finishes all of its iterations <strong className="font-bold border-b border-indigo-400/50">every single time</strong> the "Outer loop" iterates once. Frequently used for 2D X/Y grids.</p>
                    </div>
                  </div>

                  <button onClick={() => runAnimatedDemo('nested_loop')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors relative shadow-sm">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-indigo-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 mt-2">
<span className="text-fuchsia-500 font-bold">for</span> i <span className="text-fuchsia-500 font-bold">in</span> <span className="text-blue-500 font-bold">range</span>(3):<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-400 italic"># Inner loop runs entirely</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-fuchsia-500 font-bold">for</span> j <span className="text-fuchsia-500 font-bold">in</span> <span className="text-blue-500 font-bold">range</span>(2):<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-500">print</span>(i, j)
                      </pre>
                    </div>
                  </button>

                </div>
              )}

            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            {/* Terminal Console */}
            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 h-[380px] shadow-xl relative overflow-hidden flex flex-col">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#f97316 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <h3 className="font-bold text-slate-300 uppercase text-xs tracking-wider flex items-center">
                    <Terminal className="w-4 h-4 mr-2" />
                    Python output
                  </h3>
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                  </div>
                </div>

                <div className="font-mono text-sm flex flex-col flex-1 overflow-y-auto custom-scrollbar">
                  {consoleOutput.length === 0 ? (
                    <div className="text-slate-500 animate-pulse flex flex-col items-center justify-center mt-20">
                      <Terminal className="w-8 h-8 mb-4 opacity-20" />
                      <span className="text-xs">Execute a loop...</span>
                    </div>
                  ) : (
                    <div className="space-y-1.5">
                    {consoleOutput.map((line, i) => {
                      let colorClass = "text-emerald-400 font-bold";
                      if (line.includes('[BREAK')) colorClass = "text-rose-400 font-bold bg-rose-900/30 px-2 rounded -ml-2";
                      else if (line.includes('[SKIPPED')) colorClass = "text-amber-400 font-bold italic";
                      else if (line === 'Loop finished') colorClass = "text-slate-300 text-xs tracking-wider uppercase";
                      else if (line.includes('Mark:')) colorClass = "text-cyan-400 font-bold";
                      
                      const isNewlyAdded = currentStep === i;
                      
                      return (
                      <div key={i} className={`${colorClass} ${isNewlyAdded ? 'animate-pulse scale-[1.02] transform origin-left transition-transform' : ''}`}>
                        {line}
                      </div>
                    )})}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Live Variable Tracker */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 h-[154px] shadow-xl relative overflow-hidden flex flex-col items-center justify-center transition-all bg-gradient-to-r from-slate-900 to-slate-800">
               <h3 className="absolute top-4 left-6 text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-700 pb-1 w-full text-left">Live Variable Inspection Tracker</h3>
               
               <div className="text-center mt-4">
                  {liveVar !== null ? (
                    <div className="animate-fade-in flex items-center justify-center">
                       <span className="px-4 py-2 border-2 text-fuchsia-400 font-bold font-mono border-fuchsia-500/50 bg-fuchsia-900/20 rounded-xl mr-4 text-xl">
                          variable =
                       </span>
                       <span className={`px-4 py-2 bg-slate-100 text-slate-900 font-mono font-black text-2xl rounded-xl shadow-lg border-2 ${typeof liveVar === 'string' && liveVar.includes('i=') ? 'border-indigo-400' : 'border-emerald-400'} scale-110`}>
                          {formatOut(liveVar)}
                       </span>
                    </div>
                  ) : (
                    <span className="text-slate-600 font-mono text-sm italic items-center flex justify-center"><Repeat className="w-4 h-4 mr-2 animate-spin-slow opacity-50"/> Awaiting next iteration...</span>
                  )}
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Tips & Recommendations */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-r from-orange-800 via-rose-700 to-amber-800 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden mb-12 border border-orange-500/50">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-yellow-400 opacity-20 rounded-full blur-3xl"></div>
          
          <h2 className="text-3xl font-extrabold mb-6 flex items-center relative z-10 text-white">
            <Lightbulb className="w-8 h-8 mr-3 text-yellow-300" />
            Developer Recommendations
          </h2>
          <p className="text-orange-100 mb-8 font-bold italic relative z-10 text-lg">From a Developer with 15+ years of Python experience:</p>
          
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            <div className="bg-black/30 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-black/40 transition-colors">
              <h3 className="font-bold text-xl mb-3 flex items-center text-white">1️⃣ Meaningful Names</h3>
              <p className="text-sm text-orange-100 mb-3 font-medium">Use grammatically correct logic. Use <code className="bg-black/50 font-mono px-1 rounded block mt-1 border-emerald-500 border text-emerald-300">for number in numbers:</code> NEVER use <code className="bg-black/50 font-mono px-1 rounded block mt-1 border border-rose-500/50 text-rose-300 text-xs">for x in abc:</code></p>
            </div>
            <div className="bg-black/30 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-black/40 transition-colors">
              <h3 className="font-bold text-xl mb-3 text-white">2️⃣ Avoid Unnecessary Loops</h3>
              <p className="text-sm text-orange-100 mb-3 font-medium">Don't reinvent the wheel. If you are looping to calculate a total, just use Python's built-in <code className="bg-black/50 px-1 font-mono rounded text-blue-300">sum()</code> or <code className="bg-black/50 px-1 font-mono rounded text-blue-300">max()</code> functions.</p>
            </div>
            <div className="bg-black/30 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-black/40 transition-colors">
              <h3 className="font-bold text-xl mb-3 flex items-center text-white">3️⃣ The enumerate() Trick</h3>
              <p className="text-sm text-orange-100 mb-3 font-medium">If you need the item, AND the numerical index at the same time, wrap your array in <code className="bg-black/50 text-blue-400 font-bold font-mono px-1 rounded">enumerate()</code>.</p>
              <pre className="text-[10px] bg-black/50 p-2 rounded text-slate-300 font-mono"><span className="text-fuchsia-400 font-bold">for</span> index, item <span className="text-fuchsia-400 font-bold">in</span> <span className="text-blue-400">enumerate</span>(arr):<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">print</span>(index, item)</pre>
            </div>
          </div>
        </div>

        {/* Tricks Grid */}
        <div className="grid md:grid-cols-3 gap-4">
           <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between">
             <h4 className="font-bold text-orange-600 dark:text-orange-400 mb-2 ext-sm flex items-center">🚀 Trick 1: Reverse Loop</h4>
             <p className="text-xs text-slate-500 mb-2">Step backwards using -1.</p>
             <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 p-3 rounded-lg mt-auto"><span className="text-fuchsia-500 font-bold">for</span> i <span className="text-fuchsia-500 font-bold">in</span> <span className="text-blue-500 font-bold">range</span>(5, 0, -1):<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-500">print</span>(i)</pre>
           </div>
           <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between">
             <h4 className="font-bold text-orange-600 dark:text-orange-400 mb-2 text-sm">🚀 Trick 2: Dict Items</h4>
             <p className="text-xs text-slate-500 mb-2">Unpack key/value sets.</p>
             <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 p-3 rounded-lg mt-auto"><span className="text-fuchsia-500 font-bold">for</span> k, v <span className="text-fuchsia-500 font-bold">in</span> dict.<span className="text-blue-500 font-bold">items</span>():<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-500">print</span>(k, v)</pre>
           </div>
           <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between">
             <h4 className="font-bold text-orange-600 dark:text-orange-400 mb-2 text-sm">🚀 Trick 3: List Comprehension</h4>
             <p className="text-xs text-slate-500 mb-2">Build lists in one line.</p>
             <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 p-3 rounded-lg mt-auto">nums = [x*2 <span className="text-fuchsia-500 font-bold">for</span> x <span className="text-fuchsia-500 font-bold">in</span> <span className="text-blue-500 font-bold">range</span>(5)]</pre>
           </div>
        </div>
      </section>

      {/* 5. Practice */}
      <section className="max-w-4xl mx-auto pb-16">
        <div className="bg-gradient-to-br from-indigo-100 to-orange-100 dark:from-indigo-900/30 dark:to-orange-900/20 p-8 rounded-3xl border border-indigo-200 dark:border-orange-800/30 shadow-lg relative">
          <Target className="absolute top-6 right-6 w-12 h-12 text-indigo-500/30" />
          <h2 className="text-2xl font-bold text-indigo-900 dark:text-indigo-400 mb-4 flex items-center">
            🧩 Practice Exercise
          </h2>
          <p className="mb-4 text-indigo-800 dark:text-indigo-300 font-medium tracking-wide">
            Task: Write a simple program that prints numbers 1 to 10 out to the terminal automatically using a loop.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-indigo-50 dark:bg-slate-900 p-5 rounded-xl border border-indigo-200 dark:border-indigo-800">
              <h4 className="font-bold text-sm uppercase tracking-wider text-indigo-800 dark:text-indigo-400 mb-3">Expected Output</h4>
              <div className="font-mono text-sm font-bold text-slate-700 dark:text-slate-300 bg-white/50 dark:bg-black/30 rounded p-4 shadow-inner leading-relaxed">
                1<br/>2<br/>3<br/>.<br/>.<br/>.<br/>10
              </div>
            </div>

            <div className="bg-white/60 dark:bg-black/40 p-5 rounded-xl backdrop-blur-sm border border-white/50 dark:border-white/10 group relative overflow-hidden">
               <div className="absolute inset-0 bg-slate-900/80 backdrop-blur flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300 z-10 cursor-pointer">
                <span className="text-white font-bold flex items-center bg-orange-600 px-4 py-2 rounded-lg"><Lightbulb className="w-4 h-4 mr-2" /> Hover for Solution</span>
              </div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-3 flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-indigo-500" /> Example Solution</h4>
              <pre className="font-mono text-xs text-slate-800 dark:text-slate-300">
<span className="text-slate-500 italic"># Remember, range stops 1 number early.</span><br/>
<span className="text-slate-500 italic"># Because it stops before the number 11,</span><br/>
<span className="text-slate-500 italic"># you get 1 to 10!</span><br/><br/>
<span className="text-fuchsia-500 font-bold">for</span> i <span className="text-fuchsia-500 font-bold">in</span> <span className="text-blue-500 font-bold">range</span>(1, 11):<br/>
&nbsp;&nbsp;&nbsp;&nbsp;print(i)
              </pre>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PythonForLoops;