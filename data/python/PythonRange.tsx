import React, { useState } from 'react';
import { 
  Play, Terminal, Check, Copy, FastForward, 
  BookOpen, AlertCircle, CheckCircle2, Code,
  Lightbulb, ArrowRight, LayoutTemplate,
  RefreshCw, ListOrdered, XCircle, Database,
  Activity
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
                <div key={index} className={`${highlightLines.includes(index) ? 'bg-neutral-800/80 -mx-4 px-4 py-0.5 border-l-2 border-rose-500' : ''}`}>
                  <span className={isComment ? 'text-neutral-500 italic' : 
                    line.includes('for ') || line.includes('in ') ? 'text-rose-400 font-bold' : 
                    line.includes('print') || line.includes('range') || line.includes('list') || line.includes('len') || line.includes('enumerate') ? 'text-blue-400' : 
                    line.includes('"') || line.includes("'") ? 'text-amber-300' :
                    line.match(/\b\d+\b/) ? 'text-emerald-400' :
                    line.includes('=') ? 'text-neutral-300' : 'text-neutral-200'}>
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

const PythonRange: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'advanced' | 'realworld'>('basics');

  const runDemo = (action: string) => {
    let codeStr = '';

    switch (action) {
      case 'basic':
        codeStr = `>>> for i in range(5):\n...     print(i)\n0\n1\n2\n3\n4`;
        break;
      case 'start_stop':
        codeStr = `>>> for i in range(2, 6):\n...     print(i)\n2\n3\n4\n5`;
        break;
      case 'step':
        codeStr = `>>> for i in range(1, 10, 2):\n...     print(i)\n1\n3\n5\n7\n9`;
        break;
      case 'reverse':
        codeStr = `>>> for i in range(10, 0, -2):\n...     print(i)\n10\n8\n6\n4\n2`;
        break;
      case 'list':
        codeStr = `>>> numbers = list(range(5))\n>>> print(numbers)\n[0, 1, 2, 3, 4]`;
        break;
      case 'index':
        codeStr = `>>> fruits = ["Apple", "Mango", "Orange"]\n>>> for i in range(len(fruits)):\n...     print(i, fruits[i])\n0 Apple\n1 Mango\n2 Orange`;
        break;
      case 'table':
        codeStr = `>>> num = 5\n>>> for i in range(1, 11):\n...     print(num, "x", i, "=", num * i)\n5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20\n5 x 5 = 25\n5 x 6 = 30\n5 x 7 = 35\n5 x 8 = 40\n5 x 9 = 45\n5 x 10 = 50`;
        break;
    }

    setConsoleOutput(codeStr.split('\n'));
  };

  const resetConsole = () => setConsoleOutput([]);

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-900 min-h-screen font-sans text-slate-800 dark:text-slate-200">
      
      {/* 1. Header Area */}
      <header className="max-w-4xl mx-auto text-center mb-16 pt-8">
        <div className="inline-flex items-center justify-center p-4 bg-purple-100 dark:bg-purple-900/30 rounded-2xl mb-6 shadow-sm border border-purple-200 dark:border-purple-800/50">
          <FastForward className="w-10 h-10 text-purple-600 dark:text-purple-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Python Range()
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          The <code className="font-mono text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30 px-2 py-1 rounded">range()</code> function is used to generate a sequence of numbers efficiently. It's an indispensable tool for looping a specific number of times and creating number sequences dynamically.
        </p>
      </header>

      {/* 2. Intro & Syntax */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 text-purple-500 mr-3" />
            <h2 className="text-2xl font-bold">1️⃣ What is `range()`?</h2>
          </div>
          <p className="mb-6 text-slate-600 dark:text-slate-300">
            Instead of manually creating lists like <code className="bg-slate-100 dark:bg-slate-900 px-1 py-0.5 rounded font-mono">[0,1,2,3,4]</code>, Python provides <code className="font-bold text-purple-600 dark:text-purple-400">range()</code> to generate numbers efficiently and dynamically.
          </p>

          <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-3 border-b border-slate-100 dark:border-slate-700 pb-2">Widely used in:</h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
              <span className="text-slate-600 dark:text-slate-400">Looping a specific number of times</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
              <span className="text-slate-600 dark:text-slate-400">Iterating over indexes</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
              <span className="text-slate-600 dark:text-slate-400">Creating number sequences</span>
            </li>
          </ul>

          <div className="bg-purple-50 dark:bg-purple-900/10 p-5 rounded-xl border border-purple-100 dark:border-purple-800/30">
            <h4 className="font-bold text-purple-900 dark:text-purple-300 mb-2">Basic Syntax</h4>
            <code className="font-mono text-lg text-purple-600 dark:text-purple-400 font-bold block bg-white dark:bg-slate-900 p-3 rounded">
              range(start, stop, step)
            </code>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col justify-between">
          <div>
            <div className="flex items-center mb-4">
              <LayoutTemplate className="w-6 h-6 text-blue-500 mr-3" />
              <h2 className="text-2xl font-bold">2️⃣ Parameters</h2>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 hover:border-blue-300 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono font-bold text-blue-600 dark:text-blue-400">start</span>
                  <span className="text-xs font-bold bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full text-center">Optional</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Starting number. If omitted, default is <code className="font-bold">0</code>.</p>
              </div>

              <div className="p-4 rounded-xl border border-rose-200 dark:border-rose-900/50 bg-rose-50 dark:bg-rose-900/10 hover:border-rose-300 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono font-bold text-rose-600 dark:text-rose-400">stop</span>
                  <span className="text-xs font-bold bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300 px-2 py-1 rounded-full text-center">Required</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 text-center sm:text-left">Ending number. <strong className="text-rose-600 dark:text-rose-400 uppercase">Not included</strong> in the generated sequence.</p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 hover:border-emerald-300 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">step</span>
                  <span className="text-xs font-bold bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 px-2 py-1 rounded-full text-center">Optional</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Increment value. If omitted, default is <code className="font-bold">1</code>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Range Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center">
            <Terminal className="w-8 h-8 mr-3 text-purple-500" />
            Interactive Range Lab
          </h2>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setActiveTab('basics')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm ${activeTab === 'basics' ? 'bg-purple-600 text-white shadow-purple-500/20' : 'bg-white dark:bg-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              Range Arguments
            </button>
            <button
              onClick={() => setActiveTab('advanced')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm ${activeTab === 'advanced' ? 'bg-purple-600 text-white shadow-purple-500/20' : 'bg-white dark:bg-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              Lists & Indexes
            </button>
            <button
              onClick={() => setActiveTab('realworld')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm ${activeTab === 'realworld' ? 'bg-purple-600 text-white shadow-purple-500/20' : 'bg-white dark:bg-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              Real World example
            </button>
            <button
              onClick={resetConsole}
              className="flex items-center px-4 py-2 bg-slate-100 text-slate-700 dark:bg-slate-800/80 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shadow-sm ml-2"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 min-h-[500px] overflow-y-auto">
              
              {activeTab === 'basics' && (
                <div className="animate-fade-in space-y-5">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">3️⃣ to 6️⃣ Exploring Arguments</h3>
                  
                  <button onClick={() => runDemo('basic')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-purple-300 dark:hover:border-purple-700 transition-colors relative">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-purple-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-purple-600 dark:text-purple-400 mb-1 flex items-center">range(stop)</h4>
                      <p className="text-xs text-slate-500 mb-3">Generates: <code className="font-bold">0 → 1 → 2 → 3 → 4</code> (Stop before 5!)</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
<span className="text-rose-500 font-bold">for</span> i <span className="text-rose-500 font-bold">in</span> <span className="text-blue-500">range</span>(<span className="text-emerald-500">5</span>):<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-500">print</span>(i)
                      </pre>
                    </div>
                  </button>

                  <button onClick={() => runDemo('start_stop')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-blue-300 dark:hover:border-blue-700 transition-colors relative">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-blue-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-blue-600 dark:text-blue-400 mb-1 flex items-center">range(start, stop)</h4>
                      <p className="text-xs text-slate-500 mb-3">Generates: <code className="font-bold">2 → 3 → 4 → 5</code> (Stop before 6!)</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
<span className="text-rose-500 font-bold">for</span> i <span className="text-rose-500 font-bold">in</span> <span className="text-blue-500">range</span>(<span className="text-emerald-500">2</span>, <span className="text-emerald-500">6</span>):<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-500">print</span>(i)
                      </pre>
                    </div>
                  </button>

                  <button onClick={() => runDemo('step')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors relative">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-indigo-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-indigo-600 dark:text-indigo-400 mb-1 flex items-center">range(start, stop, step)</h4>
                      <p className="text-xs text-slate-500 mb-3">Generates: <code className="font-bold">1 → 3 → 5 → 7 → 9</code> (Step increases by +2)</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
<span className="text-rose-500 font-bold">for</span> i <span className="text-rose-500 font-bold">in</span> <span className="text-blue-500">range</span>(<span className="text-emerald-500">1</span>, <span className="text-emerald-500">10</span>, <span className="text-emerald-500">2</span>):<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-500">print</span>(i)
                      </pre>
                    </div>
                  </button>

                  <button onClick={() => runDemo('reverse')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-rose-300 dark:hover:border-rose-700 transition-colors relative">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-rose-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-rose-600 dark:text-rose-400 mb-1 flex items-center">Reverse Range</h4>
                      <p className="text-xs text-slate-500 mb-3">Generates: <code className="font-bold">10 ← 8 ← 6 ← 4 ← 2</code> (Step = -2)</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
<span className="text-rose-500 font-bold">for</span> i <span className="text-rose-500 font-bold">in</span> <span className="text-blue-500">range</span>(<span className="text-emerald-500">10</span>, <span className="text-emerald-500">0</span>, <span className="text-emerald-500">-2</span>):<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-500">print</span>(i)
                      </pre>
                    </div>
                  </button>
                </div>
              )}

              {activeTab === 'advanced' && (
                <div className="animate-fade-in space-y-6">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                    7️⃣ & 8️⃣ Usage with Lists
                  </h3>
                  
                  <button onClick={() => runDemo('list')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors relative mb-4">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-emerald-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-emerald-600 dark:text-emerald-400 mb-1">Converting `range()` to a List</h4>
                      <p className="text-xs text-slate-500 mb-3"><code className="font-bold bg-white dark:bg-black/30 px-1 rounded">range()</code> creates a lazy object. Convert it to a list to see all values at once.</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
numbers = <span className="text-blue-500 font-bold">list</span>(<span className="text-blue-500">range</span>(<span className="text-emerald-500">5</span>))<br/>
<span className="text-blue-500">print</span>(numbers)
                      </pre>
                    </div>
                  </button>

                  <button onClick={() => runDemo('index')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-amber-400 dark:hover:border-amber-600 transition-colors relative">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-amber-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-amber-600 dark:text-amber-400 mb-1">Using `range()` with List Index</h4>
                      <p className="text-xs text-slate-500 mb-3">A common (though older) way to loop through list lengths.</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
fruits = [<span className="text-amber-500">"Apple"</span>, <span className="text-amber-500">"Mango"</span>, <span className="text-amber-500">"Orange"</span>]<br/><br/>
<span className="text-rose-500 font-bold">for</span> i <span className="text-rose-500 font-bold">in</span> <span className="text-blue-500">range</span>(<span className="text-blue-500 font-bold">len</span>(fruits)):<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-500">print</span>(i, fruits[i])
                      </pre>
                    </div>
                  </button>
                  
                </div>
              )}

              {activeTab === 'realworld' && (
                <div className="animate-fade-in space-y-6">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                    🔟 Real-World Example
                  </h3>
                  
                  <button onClick={() => runDemo('table')} className="w-full text-left group h-full">
                    <div className="bg-indigo-50 dark:bg-indigo-900/10 border-2 border-indigo-200 dark:border-indigo-800/50 rounded-xl p-5 hover:border-indigo-400 dark:hover:border-indigo-600 transition-colors relative shadow-sm h-full">
                      <Play className="absolute top-4 right-4 w-6 h-6 text-indigo-500 opacity-80 group-hover:opacity-100 transition-opacity group-hover:scale-110" />
                      <h4 className="font-bold text-lg text-indigo-700 dark:text-indigo-400 mb-2 flex items-center"><ListOrdered className="w-5 h-5 mr-2"/> Multiplication Table</h4>
                      <p className="text-sm text-indigo-600 dark:text-indigo-500/80 mb-4">Easily build structured, repeating outputs like a times table.</p>
                      <pre className="font-mono text-xs sm:text-sm text-slate-700 dark:text-slate-300 bg-white/60 dark:bg-slate-950/50 p-4 rounded-lg border border-indigo-100 dark:border-indigo-800/30">
num = <span className="text-emerald-500">5</span><br/><br/>
<span className="text-rose-500 font-bold">for</span> i <span className="text-rose-500 font-bold">in</span> <span className="text-blue-500">range</span>(<span className="text-emerald-500">1</span>, <span className="text-emerald-500">11</span>):<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-500">print</span>(num, <span className="text-amber-500">"x"</span>, i, <span className="text-amber-500">"="</span>, num * i)
                      </pre>
                    </div>
                  </button>
                </div>
              )}

            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-[#1e1e1e] rounded-2xl p-6 border border-slate-800 h-full min-h-[500px] shadow-2xl relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <h3 className="font-bold text-slate-300 uppercase text-xs tracking-wider flex items-center">
                    <Terminal className="w-4 h-4 mr-2 text-purple-400" />
                    Console Output
                  </h3>
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                  </div>
                </div>

                <div className="font-mono text-sm flex flex-col flex-1 overflow-y-auto max-h-[400px]">
                  {consoleOutput.length === 0 ? (
                    <div className="text-slate-500 animate-pulse flex flex-col items-center justify-center mt-32">
                      <Code className="w-12 h-12 mb-4 opacity-20" />
                      <span>Run an example to see output...</span>
                    </div>
                  ) : (
                    consoleOutput.map((line, i) => (
                      <div key={i} className={`mb-1.5 animate-fade-in ${
                          line.startsWith('>>>') || line.startsWith('...') ? 'text-slate-400 font-medium' :
                          line.startsWith('[') ? 'text-emerald-300 font-bold' :
                          'text-white font-medium'
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

      {/* 4. Memory Efficiency & Common Mistake */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/10 dark:to-teal-900/10 p-8 rounded-2xl shadow-sm border border-emerald-200 dark:border-emerald-800/30">
          <div className="flex items-center mb-4">
            <Database className="w-8 h-8 text-emerald-500 mr-3" />
            <h2 className="text-2xl font-bold text-emerald-900 dark:text-emerald-400">9️⃣ Why `range()` instead of List?</h2>
          </div>
          <p className="mb-4 text-emerald-800 dark:text-emerald-200">
            <code className="font-bold font-mono bg-white dark:bg-black/30 px-1 py-0.5 rounded">range()</code> is memory efficient because it uses lazy evaluation.
          </p>
          <div className="bg-white/60 dark:bg-black/20 p-4 rounded-xl mb-4 border border-emerald-100 dark:border-emerald-800/50">
            <p className="text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">Think about running this command:</p>
            <code className="font-mono font-bold text-rose-500 block text-center text-lg bg-black/5 rounded p-2">range(1000000)</code>
          </div>
          <p className="text-sm text-emerald-700 dark:text-emerald-300 leading-relaxed font-medium">
            Python <strong className="uppercase underline underline-offset-4 decoration-emerald-400/50">does not</strong> store 1 million numbers in memory! It only calculates the next number sequence when the loop asks for it. This keeps Python applications fast and responsive even with millions of iterations.
          </p>
        </div>

        <div className="bg-gradient-to-br from-rose-50 to-red-50 dark:from-rose-900/10 dark:to-red-900/10 p-8 rounded-2xl shadow-sm border border-rose-200 dark:border-rose-800/30">
          <div className="flex items-center mb-4">
            <XCircle className="w-8 h-8 text-rose-500 mr-3" />
            <h2 className="text-2xl font-bold text-rose-900 dark:text-rose-400">1️⃣1️⃣ Common Beginner Mistake</h2>
          </div>
          <p className="mb-4 text-rose-800 dark:text-rose-200">
            A common trap beginners fall into when defining loops:
          </p>
          
          <div className="bg-white/60 dark:bg-black/20 p-4 rounded-xl mb-6 border border-rose-100 dark:border-rose-800/50">
            <h4 className="font-bold text-rose-600 dark:text-rose-400 text-sm mb-1 uppercase tracking-wider">The Mistake</h4>
            <code className="font-mono block text-center font-bold mb-2">range(1, 10)</code>
            <p className="text-sm text-slate-600 dark:text-slate-400 text-center italic">"I want it to loop up to and include the number 10!"</p>
          </div>

          <div className="bg-white/60 dark:bg-black/20 p-4 rounded-xl border border-rose-100 dark:border-rose-800/50">
             <h4 className="font-bold text-emerald-600 dark:text-emerald-400 text-sm mb-2 uppercase tracking-wider">Correct Understanding</h4>
             <p className="font-mono text-sm text-center font-bold tracking-widest text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 p-2 rounded">
              1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9
             </p>
             <p className="text-sm text-rose-800 dark:text-rose-300 font-bold mt-3 text-center">Stop value is EXCLUDED.</p>
          </div>
        </div>
      </section>

      {/* 5. Developer Recommendations & Summary */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-purple-500 opacity-20 rounded-full blur-3xl"></div>
          <h2 className="text-3xl font-extrabold mb-6 flex items-center relative z-10">
            <Lightbulb className="w-8 h-8 mr-3 text-yellow-300" />
            1️⃣2️⃣ Tips & Tricks (From a Python Dev)
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
              <h3 className="font-bold text-lg mb-3">1. Use `range(len())` Carefully</h3>
              <p className="text-sm text-slate-300 mb-3">Instead of using <code className="font-mono text-rose-300 italic">for i in range(len(items)):</code></p>
              <div className="bg-black/30 p-3 rounded font-mono text-xs text-emerald-300">
                <span className="text-rose-400">for</span> item <span className="text-rose-400">in</span> items:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;print(item)
              </div>
              <p className="text-xs text-slate-400 mt-2 font-bold uppercase tracking-wider">Cleaner & Pythonic</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
              <h3 className="font-bold text-lg mb-3">2. Need both? Use `enumerate()`</h3>
              <p className="text-sm text-slate-300 mb-3">If you really need the index AND the value, use <code className="font-bold">enumerate</code>:</p>
              <div className="bg-black/30 p-3 rounded font-mono text-xs text-emerald-300">
                <span className="text-rose-400">for</span> i, fruit <span className="text-rose-400">in</span> <span className="text-blue-400">enumerate</span>(fruits):<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;print(i, fruit)
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
              <h3 className="font-bold text-lg mb-3">1️⃣3️⃣ Best Practices</h3>
              <ul className="space-y-2 text-sm text-slate-200">
                <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2 shrink-0 mt-0.5" /> Use <code className="mx-1 text-purple-300 font-mono">range()</code> for fixed iterations</li>
                <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2 shrink-0 mt-0.5" /> Use enumerate for index + value</li>
                <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2 shrink-0 mt-0.5" /> Use negative step for reverse loop</li>
                <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-rose-400 mr-2 shrink-0 mt-0.5" /> Remember: <strong className="text-rose-200 ml-1">stop value is excluded</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* 6. Quick Summary */}
      <section className="max-w-4xl mx-auto pb-16">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center border-b border-slate-100 dark:border-slate-700 pb-4">
            <Activity className="w-6 h-6 text-purple-500 mr-3" />
            1️⃣4️⃣ Quick Summary
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-900 leading-normal text-slate-500 uppercase text-xs font-bold border-b border-slate-200 dark:border-slate-700">
                  <th className="px-6 py-4">Feature</th>
                  <th className="px-6 py-4">Description</th>
                </tr>
              </thead>
              <tbody className="text-sm font-medium">
                <tr className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4">
                    <code className="font-mono bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300 px-2 py-1 rounded font-bold">range(stop)</code>
                  </td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-300">Starts from <code className="font-bold">0</code> and increments by <code className="font-bold">1</code>.</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4">
                    <code className="font-mono bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300 px-2 py-1 rounded font-bold">range(start, stop)</code>
                  </td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-300">Starts from <code className="font-bold">start</code> value.</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4">
                    <code className="font-mono bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300 px-2 py-1 rounded font-bold">range(start, stop, step)</code>
                  </td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-300">Custom increment/decrement specified by <code className="font-bold">step</code>.</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 font-bold text-rose-600 dark:text-rose-400">
                    Stop value
                  </td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-300"><strong className="text-rose-600 dark:text-rose-400">Not included</strong> in output.</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors border-t border-slate-200 dark:border-slate-700">
                  <td className="px-6 py-4 font-bold text-emerald-600 dark:text-emerald-400">
                    Memory
                  </td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-300 font-bold">Highly Efficient (Lazy Evaluation)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PythonRange;