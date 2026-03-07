import React, { useState } from 'react';
import { 
  Type, Terminal, Check, Copy, Quote, 
  BookOpen, AlertCircle, CheckCircle2, Code,
  Lightbulb, ShieldCheck, MessageSquareText, 
  Scissors, Zap, Link, RefreshCw
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
           <div className="flex items-center">
              <Code className="w-4 h-4 text-indigo-500 mr-2" />
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{title}</span>
           </div>
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
                <div key={index} className={`${highlightLines.includes(index) ? 'bg-neutral-800/80 -mx-4 px-4 py-0.5 border-l-2 border-indigo-500' : ''}`}>
                  <span className={isComment ? 'text-neutral-500 italic' : 
                    line.includes('print') || line.includes('len(') || line.includes('.upper') || line.includes('.lower') || line.includes('.strip') || line.includes('.replace') || line.includes('.split') ? 'text-blue-400' : 
                    line.includes('f"') || line.includes('"') || line.includes("'") ? 'text-amber-300' :
                    line.match(/\b\d+(\.\d+)?\b/) ? 'text-emerald-400' :
                    line.includes('=') || line.includes('+') || line.includes('*') || line.includes('in') ? 'text-neutral-300' : 'text-neutral-200'}>
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

const PythonStrings: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'slicing' | 'methods' | 'operations'>('slicing');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'access':
        outLines = `P\nh`.split('\n');
        break;
      case 'negative':
        outLines = `n\no`.split('\n');
        break;
      case 'slice':
        outLines = `Python`.split('\n');
        break;
      case 'upper':
        outLines = `HELLO PYTHON\nHello python`.split('\n');
        break;
      case 'replace':
        outLines = `I love Python`.split('\n');
        break;
      case 'split':
        outLines = `['apple', 'banana', 'orange']`.split('\n');
        break;
      case 'concat':
        outLines = `Hello World`.split('\n');
        break;
      case 'repeat':
        outLines = `Python Python Python `.split('\n');
        break;
      case 'in':
        outLines = `True\nFalse`.split('\n');
        break;
      case 'loop':
        outLines = `P\ny\nt\nh\no\nn`.split('\n');
        break;
      case 'len':
        outLines = `6`.split('\n');
        break;
      case 'real_world':
        outLines = `Welcome John\nHello John, have a great day!`.split('\n');
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
          <Type className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Python Strings
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          A String in Python is a sequence of characters used to store text data. It is one of the most commonly used data types in Python.
        </p>
      </header>

      {/* 2. Intro Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 mb-8">
          <div className="flex items-center mb-6">
            <MessageSquareText className="w-6 h-6 text-indigo-500 mr-3" />
            <h2 className="text-2xl font-bold">1️⃣ Introduction & Definition</h2>
          </div>
          <p className="mb-6 text-slate-600 dark:text-slate-300">
            A Python string is a sequence of characters enclosed in quotes. They are used to represent:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
            {[
              { label: 'Names', icon: '👤' },
              { label: 'Messages', icon: '✉️' },
              { label: 'Sentences', icon: '📝' },
              { label: 'File paths', icon: '📁' },
              { label: 'User Data', icon: '📊' },
            ].map((item, i) => (
               <div key={i} className="bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl p-4 text-center hover:shadow-md transition-shadow">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="font-bold text-sm text-slate-700 dark:text-slate-300">{item.label}</div>
               </div>
            ))}
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/10 p-5 rounded-xl border border-blue-100 dark:border-blue-800/30">
            <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Creating Strings</h3>
            <p className="text-sm text-blue-700 dark:text-blue-200 mb-3">Python allows strings to be written using single quotes, double quotes, or triple quotes for multiline text.</p>
            <div className="grid md:grid-cols-2 gap-4">
               <pre className="font-mono text-xs bg-slate-900 text-slate-300 p-3 rounded-lg border border-slate-800">
# Single & Double Quotes
text1 = "Hello Python"
text2 = 'Welcome to programming'

print(text1)
print(text2)
               </pre>
               <pre className="font-mono text-xs bg-slate-900 text-slate-300 p-3 rounded-lg border border-slate-800">
# Multiline Strings
message = """Python is easy
Python is powerful
Python is popular"""

print(message)
               </pre>
            </div>
            
            <div className="mt-4 p-4 bg-white/60 dark:bg-slate-900/40 rounded-lg text-center font-mono text-sm border border-blue-200/50 dark:border-blue-800/30">
              <div className="mb-2 font-bold text-slate-700 dark:text-slate-300">String Character Index Visualization: <span className="text-amber-500">"Hello Python"</span></div>
              <div className="flex justify-center flex-wrap gap-1">
                 {['H','e','l','l','o',' ','P','y','t','h','o','n'].map((char, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                       <span className="w-8 h-8 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 font-bold rounded shadow-sm border border-indigo-200 dark:border-indigo-700">{char === ' ' ? '_' : char}</span>
                       <span className="text-[10px] text-slate-500 mt-1">{idx}</span>
                    </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Formatting Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center">
            <Terminal className="w-8 h-8 mr-3 text-indigo-500" />
            Interactive String Lab
          </h2>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setActiveTab('slicing')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'slicing' ? 'bg-indigo-600 text-white shadow-indigo-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Scissors className="w-4 h-4 mr-2" /> Slicing & Indexing
            </button>
            <button
              onClick={() => setActiveTab('methods')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'methods' ? 'bg-indigo-600 text-white shadow-indigo-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Zap className="w-4 h-4 mr-2" /> Methods
            </button>
            <button
              onClick={() => setActiveTab('operations')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'operations' ? 'bg-indigo-600 text-white shadow-indigo-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Link className="w-4 h-4 mr-2" /> Operations
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
              
              {activeTab === 'slicing' && (
                <div className="animate-fade-in space-y-5">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">Accessing & Slicing</h3>

                  <button onClick={() => runDemo('access')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors relative shadow-sm">
                      <div className="absolute top-4 right-4 text-xs font-bold text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-1 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN</div>
                      <h4 className="font-bold text-sm text-indigo-600 dark:text-indigo-400 mb-2">Positive Indexing</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">Strings are indexed starting from 0.</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
text = <span className="text-amber-500">"Python"</span><br/>
<span className="text-blue-500">print</span>(text[<span className="text-emerald-500">0</span>])  <span className="text-slate-500 italic"># Output: P</span><br/>
<span className="text-blue-500">print</span>(text[<span className="text-emerald-500">3</span>])  <span className="text-slate-500 italic"># Output: h</span>
                      </pre>
                    </div>
                  </button>

                  <button onClick={() => runDemo('negative')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-rose-300 dark:hover:border-rose-700 transition-colors relative shadow-sm">
                      <div className="absolute top-4 right-4 text-xs font-bold text-slate-500 bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN</div>
                      <h4 className="font-bold text-sm text-rose-600 dark:text-rose-400 mb-2">Negative Indexing</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">Negative indices count from the end of the string.</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
text = <span className="text-amber-500">"Python"</span><br/>
<span className="text-blue-500">print</span>(text[<span className="text-emerald-500">-1</span>])  <span className="text-slate-500 italic"># Output: n</span><br/>
<span className="text-blue-500">print</span>(text[<span className="text-emerald-500">-2</span>])  <span className="text-slate-500 italic"># Output: o</span>
                      </pre>
                    </div>
                  </button>

                  <button onClick={() => runDemo('slice')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-blue-300 dark:hover:border-blue-700 transition-colors relative shadow-sm">
                      <div className="absolute top-4 right-4 text-xs font-bold text-blue-500 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN</div>
                      <h4 className="font-bold text-sm text-blue-600 dark:text-blue-400 mb-2">String Slicing [start:end]</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">Slicing extracts a portion of a string (end is exclusive).</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
text = <span className="text-amber-500">"Python Programming"</span><br/>
<span className="text-blue-500">print</span>(text[<span className="text-emerald-500">0</span>:<span className="text-emerald-500">6</span>])  <span className="text-slate-500 italic"># Output: Python</span>
                      </pre>
                    </div>
                  </button>
                  
                </div>
              )}

              {activeTab === 'methods' && (
                <div className="animate-fade-in space-y-4">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">Common String Methods</h3>
                  
                  <button onClick={() => runDemo('upper')} className="w-full text-left group">
                     <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-blue-300 dark:hover:border-blue-700 transition-colors relative">
                        <div className="absolute top-4 right-4 text-xs font-bold text-blue-500 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN</div>
                        <h4 className="font-bold text-sm text-blue-600 dark:text-blue-400 mb-2">Case Conversion</h4>
                        <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-hidden">
text = <span className="text-amber-500">"hello python"</span><br/>
<span className="text-blue-500">print</span>(text.<span className="text-blue-500 font-bold">upper</span>())<br/>
<span className="text-blue-500">print</span>(text.<span className="text-blue-500 font-bold">capitalize</span>())
                        </pre>
                     </div>
                  </button>

                  <button onClick={() => runDemo('replace')} className="w-full text-left group">
                     <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors relative">
                        <div className="absolute top-4 right-4 text-xs font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-1 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN</div>
                        <h4 className="font-bold text-sm text-emerald-600 dark:text-emerald-400 mb-2">Replace Text</h4>
                        <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-hidden w-full">
text = <span className="text-amber-500">"I love Java"</span><br/>
<span className="text-blue-500">print</span>(text.<span className="text-blue-500 font-bold">replace</span>(<span className="text-amber-500">"Java"</span>, <span className="text-amber-500">"Python"</span>))
                        </pre>
                     </div>
                  </button>

                  <button onClick={() => runDemo('split')} className="w-full text-left group">
                     <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-amber-300 dark:hover:border-amber-700 transition-colors relative">
                        <div className="absolute top-4 right-4 text-xs font-bold text-amber-500 bg-amber-100 dark:bg-amber-900/30 px-2 py-1 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN</div>
                        <h4 className="font-bold text-sm text-amber-600 dark:text-amber-400 mb-2">Split String</h4>
                        <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-hidden w-full">
text = <span className="text-amber-500">"apple,banana,orange"</span><br/>
<span className="text-blue-500">print</span>(text.<span className="text-blue-500 font-bold">split</span>(<span className="text-amber-500">","</span>))
                        </pre>
                     </div>
                  </button>
                  
                </div>
              )}

              {activeTab === 'operations' && (
                <div className="animate-fade-in space-y-4">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">String Operations</h3>
                  
                  <div className="grid grid-cols-2 gap-3">
                     <button onClick={() => runDemo('concat')} className="w-full text-left group">
                        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-3 hover:border-blue-300 transition-colors relative h-full">
                           <h4 className="font-bold text-xs text-blue-600 dark:text-blue-400 mb-1">Concatenation (+)</h4>
                           <pre className="font-mono text-[10px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-2 rounded break-all whitespace-pre-wrap">
first = <span className="text-amber-500">"Hello"</span>
second = <span className="text-amber-500">"World"</span>
res = first + <span className="text-amber-500">" "</span> + second
<span className="text-blue-500">print</span>(res)
                           </pre>
                        </div>
                     </button>
                     <button onClick={() => runDemo('repeat')} className="w-full text-left group">
                        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-3 hover:border-emerald-300 transition-colors relative h-full">
                           <h4 className="font-bold text-xs text-emerald-600 dark:text-emerald-400 mb-1">Repetition (*)</h4>
                           <pre className="font-mono text-[10px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-2 rounded break-all whitespace-pre-wrap">
txt = <span className="text-amber-500">"Python "</span>
<span className="text-blue-500">print</span>(txt * <span className="text-emerald-500">3</span>)
                           </pre>
                        </div>
                     </button>
                  </div>

                  <button onClick={() => runDemo('in')} className="w-full text-left group mt-2">
                     <div className="bg-purple-50 dark:bg-purple-900/10 border border-purple-200 dark:border-purple-800/50 rounded-xl p-3 sm:p-4 hover:border-purple-400 dark:hover:border-purple-600 transition-colors relative shadow-sm">
                        <div className="absolute top-4 right-4 text-xs font-bold text-white bg-purple-500 px-2 py-0.5 rounded opacity-80 group-hover:opacity-100 transition-opacity shadow-sm">RUN</div>
                        <h4 className="font-bold text-sm text-purple-700 dark:text-purple-400 mb-2 flex items-center">Checking Text (in)</h4>
                        <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-white/60 dark:bg-slate-950/50 p-2 rounded-lg border border-purple-100 dark:border-purple-800/30">
text = <span className="text-amber-500">"Python Programming"</span><br/>
<span className="text-blue-500">print</span>(<span className="text-amber-500">"Python"</span> in text) <span className="text-slate-500 italic"># output: True</span><br/>
<span className="text-blue-500">print</span>(<span className="text-amber-500">"Java"</span> in text) <span className="text-slate-500 italic"># output: False</span>
                        </pre>
                     </div>
                  </button>

                  <div className="grid grid-cols-2 gap-3 mt-2">
                     <button onClick={() => runDemo('loop')} className="w-full text-left group">
                        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-3 hover:border-blue-300 transition-colors relative h-full">
                           <h4 className="font-bold text-xs text-blue-600 dark:text-blue-400 mb-1">Looping</h4>
                           <pre className="font-mono text-[10px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-2 rounded break-all whitespace-pre-wrap">
text = <span className="text-amber-500">"Python"</span>
<span className="text-blue-400 font-bold">for</span> char <span className="text-blue-400 font-bold">in</span> text:
    <span className="text-blue-500">print</span>(char)
                           </pre>
                        </div>
                     </button>
                     <button onClick={() => runDemo('len')} className="w-full text-left group">
                        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-3 hover:border-emerald-300 transition-colors relative h-full">
                           <h4 className="font-bold text-xs text-emerald-600 dark:text-emerald-400 mb-1">String Length (len)</h4>
                           <pre className="font-mono text-[10px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-2 rounded break-all whitespace-pre-wrap">
text = <span className="text-amber-500">"Python"</span>
<span className="text-blue-500">print</span>(<span className="text-blue-500 font-bold">len</span>(text))
                           </pre>
                        </div>
                     </button>
                  </div>

                  <button onClick={() => runDemo('real_world')} className="w-full text-left group mt-2">
                     <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/50 rounded-xl p-3 sm:p-4 hover:border-amber-400 dark:hover:border-amber-600 transition-colors relative shadow-sm">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-amber-600 bg-amber-200 dark:bg-amber-800/50 px-2 py-0.5 rounded opacity-80 group-hover:opacity-100 transition-opacity shadow-sm">RUN</div>
                        <h4 className="font-bold text-sm text-amber-700 dark:text-amber-400 mb-2 flex items-center">Real-World: User Greeting Program</h4>
                        <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-white/60 dark:bg-slate-950/50 p-2 rounded-lg border border-amber-100 dark:border-amber-800/30">
name = <span className="text-amber-500">"John"</span><br/>
<span className="text-blue-500">print</span>(<span className="text-amber-500">"Welcome"</span>, name)<br/>
<span className="text-blue-500">print</span>(<span className="text-amber-500">"Hello "</span> + name + <span className="text-amber-500">", have a great day!"</span>)
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
                     Console Output
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
                        <span>Run a demo on the left to see string operations...</span>
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

      {/* 4. Details / Escape chars etc */}
      <section className="max-w-6xl mx-auto mb-16">
         <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold mb-6 flex items-center border-b border-slate-100 dark:border-slate-700 pb-4">
               Escape Characters
            </h2>
            <p className="mb-4 text-slate-600 dark:text-slate-300">
               Escape characters allow you to insert special characters in strings that would otherwise be illegal (like a quote inside a quoted string).
            </p>
            <div className="grid md:grid-cols-2 gap-8">
               <table className="w-full text-left border-collapse bg-slate-50 dark:bg-slate-900 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700">
                  <thead className="bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                     <tr>
                        <th className="p-3 font-bold border-b border-slate-300 dark:border-slate-700">Escape</th>
                        <th className="p-3 font-bold border-b border-slate-300 dark:border-slate-700">Meaning</th>
                     </tr>
                  </thead>
                  <tbody className="text-slate-700 dark:text-slate-300 text-sm">
                     <tr>
                        <td className="p-3 border-b border-slate-200 dark:border-slate-800 font-mono text-indigo-600 dark:text-indigo-400">\n</td>
                        <td className="p-3 border-b border-slate-200 dark:border-slate-800">New line</td>
                     </tr>
                     <tr>
                        <td className="p-3 border-b border-slate-200 dark:border-slate-800 font-mono text-indigo-600 dark:text-indigo-400">\t</td>
                        <td className="p-3 border-b border-slate-200 dark:border-slate-800">Tab</td>
                     </tr>
                     <tr>
                        <td className="p-3 font-mono text-indigo-600 dark:text-indigo-400">\"</td>
                        <td className="p-3">Double quote</td>
                     </tr>
                  </tbody>
               </table>
               
               <div className="bg-indigo-50 dark:bg-indigo-900/10 p-4 rounded-xl border border-indigo-100 dark:border-indigo-800/30 font-mono text-sm leading-loose text-slate-700 dark:text-slate-300">
                  <span className="text-blue-500 font-bold">print</span>(<span className="text-amber-500">"Hello<span className="text-indigo-500 font-bold">\n</span>Python"</span>)<br/>
                  <span className="text-slate-500 italic"># Output:</span><br/>
                  Hello<br/>
                  Python
               </div>
            </div>
         </div>
      </section>

      {/* 5. Common Errors & Best Practices Data blocks */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        
        {/* Errors Block */}
        <div className="bg-rose-50 dark:bg-rose-900/10 p-8 rounded-3xl border border-rose-200 dark:border-rose-800/30 shadow-sm relative overflow-hidden h-full">
          <div className="absolute right-0 bottom-0 opacity-5">
             <AlertCircle className="w-48 h-48 text-rose-500" />
          </div>
          <h2 className="text-2xl font-bold text-rose-900 dark:text-rose-400 mb-6 flex items-center border-b border-rose-200 dark:border-rose-800/50 pb-4 relative z-10">
            Common Beginner Mistakes
          </h2>
          
          <div className="space-y-6 relative z-10">
             <div>
                <h4 className="font-bold text-rose-700 dark:text-rose-400 mb-2">1. Missing Quotes</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border-t-4 border-rose-500 shadow-sm text-center">
                     <div className="text-rose-600 dark:text-rose-400 font-bold text-sm mb-2 uppercase tracking-wide">❌ Wrong</div>
                     <code className="block bg-rose-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-mono text-xs px-2 py-3 rounded mb-2">
                        text = Hello
                     </code>
                     <div className="text-xs text-rose-500 font-bold">Error: NameError</div>
                  </div>

                  <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border-t-4 border-emerald-500 shadow-sm text-center">
                     <div className="text-emerald-600 dark:text-emerald-400 font-bold text-sm mb-2 uppercase tracking-wide">✔ Correct</div>
                     <code className="block bg-emerald-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-mono text-xs px-2 py-3 rounded mb-2">
                        text = <span className="text-amber-500">"Hello"</span>
                     </code>
                  </div>
                </div>
             </div>

             <div>
                <h4 className="font-bold text-rose-700 dark:text-rose-400 mb-2">2. Index Out of Range</h4>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-rose-200 dark:border-rose-800/50 shadow-sm font-mono text-sm">
                   text = <span className="text-amber-500">"Python"</span><br/>
                   <span className="text-blue-500">print</span>(text[<span className="text-emerald-500">10</span>]) <span className="text-slate-500 italic"># IndexError! String only has 6 chars.</span>
                </div>
             </div>
          </div>
        </div>

        {/* Pro Tips Block */}
        <div className="bg-gradient-to-br from-indigo-800 to-indigo-950 p-8 rounded-3xl border border-indigo-700 shadow-xl relative overflow-hidden h-full text-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center border-b border-indigo-700 pb-4 relative z-10">
            <Lightbulb className="w-6 h-6 text-yellow-400 mr-3 shrink-0" />
            Tips & Tricks (From a Dev)
          </h2>
          
          <div className="space-y-4 relative z-10">
             <div className="bg-white/10 p-4 rounded-xl border border-white/10 flex items-start hover:bg-white/20 transition-colors">
                <div className="bg-indigo-500/30 p-2 rounded-lg mr-4 mt-0.5">
                   <ShieldCheck className="w-5 h-5 text-indigo-300" />
                </div>
                <div>
                   <h4 className="font-bold mb-1">1️⃣ Strings Are Immutable</h4>
                   <p className="text-sm text-indigo-100 mb-2">Strings cannot be changed directly via indexing.</p>
                   <code className="block bg-black/40 text-xs font-mono p-2 rounded text-rose-300">text[0] = "J" # Causes an Error</code>
                   <p className="text-xs text-indigo-200 mt-2">Instead, create a new string: <code className="bg-black/40 text-xs px-1 py-0.5 rounded text-indigo-100">"J" + text[1:]</code></p>
                </div>
             </div>
             
             <div className="bg-white/10 p-4 rounded-xl border border-white/10 flex items-start hover:bg-white/20 transition-colors">
                <div className="bg-pink-500/30 p-2 rounded-lg mr-4 mt-0.5">
                   <Zap className="w-5 h-5 text-pink-300" />
                </div>
                <div>
                   <h4 className="font-bold mb-1">2️⃣ Use f-Strings</h4>
                   <p className="text-sm text-indigo-100 mb-1">Best practice for dynamic text formatting.</p>
                   <code className="block bg-black/40 text-xs font-mono p-2 rounded text-indigo-200">print(f"Hello {'{name}'}")</code>
                </div>
             </div>

             <div className="bg-white/10 p-4 rounded-xl border border-white/10 flex items-start hover:bg-white/20 transition-colors">
                <div className="bg-amber-500/30 p-2 rounded-lg mr-4 mt-0.5">
                   <RefreshCw className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                   <h4 className="font-bold mb-1">3️⃣ Use strip() for Input</h4>
                   <p className="text-sm text-indigo-100 mb-1">User input often contains invisible spaces at ends.</p>
                   <code className="block bg-black/40 text-xs font-mono p-2 rounded text-indigo-200">name = input().strip()</code>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 6. Best Practices Checklist */}
      <section className="max-w-4xl mx-auto pb-16">
         <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800 p-8 rounded-3xl shadow-sm relative">
           <ShieldCheck className="absolute top-6 right-6 w-12 h-12 text-emerald-500/20" />
           <h2 className="text-2xl font-bold text-emerald-900 dark:text-emerald-400 mb-6 flex items-center">
            Best Practices Summary
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center bg-white dark:bg-slate-800 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800/30 shadow-sm relative overflow-hidden group">
               <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-400 group-hover:w-2 transition-all"></div>
               <div className="bg-emerald-100 dark:bg-emerald-900/40 p-2 rounded-full mr-4 ml-2">
                 <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
               </div>
               <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Use meaningful string names</span>
            </div>
            <div className="flex items-center bg-white dark:bg-slate-800 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800/30 shadow-sm relative overflow-hidden group">
               <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-400 group-hover:w-2 transition-all"></div>
               <div className="bg-emerald-100 dark:bg-emerald-900/40 p-2 rounded-full mr-4 ml-2">
                 <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
               </div>
               <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Use <strong>f-strings</strong> for formatting</span>
            </div>
            <div className="flex items-center bg-white dark:bg-slate-800 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800/30 shadow-sm relative overflow-hidden group">
               <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-400 group-hover:w-2 transition-all"></div>
               <div className="bg-emerald-100 dark:bg-emerald-900/40 p-2 rounded-full mr-4 ml-2">
                 <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
               </div>
               <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Avoid unnecessary concatenation</span>
            </div>
            <div className="flex items-center bg-white dark:bg-slate-800 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800/30 shadow-sm relative overflow-hidden group">
               <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-400 group-hover:w-2 transition-all"></div>
               <div className="bg-emerald-100 dark:bg-emerald-900/40 p-2 rounded-full mr-4 ml-2">
                 <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
               </div>
               <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Use string methods for cleaner code</span>
            </div>
          </div>
         </div>
      </section>

    </div>
  );
};

export default PythonStrings;