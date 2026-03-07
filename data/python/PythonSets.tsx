import React, { useState } from 'react';
import { 
  Box, Terminal, Check, Copy, Layers, 
  BookOpen, AlertCircle, CheckCircle2, Code,
  Lightbulb, Combine, GitCompare, MinusSquare,
  Network, Flame, FastForward, ShieldAlert, Zap
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
                    line.includes('for ') || line.includes('in ') || line.includes('set(') || line.includes('frozenset(') ? 'text-rose-400 font-bold' : 
                    line.includes('print') || line.includes('.add') || line.includes('.update') || line.includes('.remove') || line.includes('.discard') || line.includes('.union') || line.includes('.intersection') || line.includes('.difference') || line.includes('len(') ? 'text-blue-400' : 
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

const PythonSets: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'modify' | 'math' | 'realworld'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'create':
        outLines = `['apple', 'banana', 'mango']\n# Note: Order may vary!`.split('\n');
        break;
      case 'duplicates':
        outLines = `{1, 2, 3, 4}`.split('\n');
        break;
      case 'loop':
        outLines = `apple\nbanana\nmango`.split('\n');
        break;
      case 'add':
        outLines = `{'apple', 'banana', 'orange'}`.split('\n');
        break;
      case 'update':
        outLines = `{'apple', 'banana', 'mango', 'orange'}`.split('\n');
        break;
      case 'remove':
        outLines = `{'apple', 'mango'}`.split('\n');
        break;
      case 'union':
        outLines = `{1, 2, 3, 4, 5}`.split('\n');
        break;
      case 'intersection':
        outLines = `{2, 3}`.split('\n');
        break;
      case 'difference':
        outLines = `{1}`.split('\n');
        break;
      case 'dedupe':
        outLines = `{1, 2, 3, 4, 5}`.split('\n');
        break;
      case 'frozenset':
        outLines = `frozenset({1, 2, 3})`.split('\n');
        break;
      case 'membership':
        outLines = `True`.split('\n');
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
          <Box className="w-10 h-10 text-rose-600 dark:text-rose-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Python Sets
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          A <strong className="text-rose-600 dark:text-rose-400">Set</strong> is an unordered, unindexed collection of <strong>unique</strong> elements. Learn how to remove duplicates and perform powerful mathematical operations instantly.
        </p>
      </header>

      {/* 2. Intro & Characteristics */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 text-rose-500 mr-3" />
            <h2 className="text-2xl font-bold">1️⃣ What is a Set?</h2>
          </div>
          <p className="mb-6 text-slate-600 dark:text-slate-300">
            A set is used to store multiple unique items in a single variable. They are written using curly brackets <code className="font-bold bg-slate-100 dark:bg-slate-700 px-1 rounded">{`{}`}</code>.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-amber-50 dark:bg-amber-900/10 p-4 rounded-xl border border-amber-100 dark:border-amber-800/30">
               <h4 className="font-bold text-amber-800 dark:text-amber-400 text-sm mb-1 flex items-center"><FastForward className="w-4 h-4 mr-1.5"/> Unordered</h4>
               <p className="text-xs text-amber-700 dark:text-amber-300">Items do not have a fixed order and cannot be accessed via index.</p>
            </div>
            <div className="bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800/30">
               <h4 className="font-bold text-emerald-800 dark:text-emerald-400 text-sm mb-1 flex items-center"><ShieldAlert className="w-4 h-4 mr-1.5"/> No Duplicates</h4>
               <p className="text-xs text-emerald-700 dark:text-emerald-300">Duplicate values are strictly forbidden and automatically removed.</p>
            </div>
          </div>

          <div className="bg-rose-50 dark:bg-rose-900/10 p-5 rounded-xl border border-rose-100 dark:border-rose-800/30 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10">
                <Network className="w-24 h-24 text-rose-500" />
             </div>
             <h4 className="font-bold text-rose-900 dark:text-rose-300 mb-2 relative z-10">Common Use Cases:</h4>
             <ul className="text-sm font-medium text-rose-800 dark:text-rose-200/80 space-y-1 ml-4 list-disc relative z-10">
                <li>Removing duplicate values from a list</li>
                <li>Performing mathematical operations (Union, Intersect)</li>
                <li>Extremely fast membership testing (`in` keyword)</li>
             </ul>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col justify-between">
          <div>
            <div className="flex items-center mb-6">
              <Flame className="w-6 h-6 text-orange-500 mr-3" />
              <h2 className="text-2xl font-bold">4️⃣ No Duplicates Allowed</h2>
            </div>
            <p className="text-slate-600 dark:text-slate-300 mb-6 font-medium">
               If duplicate values exist in the definition, Python silently and automatically removes them when the set is created.
            </p>
            
            <CodeSnippetBlock codeSnippet={`numbers = {1, 2, 3, 3, 4, 4}\nprint(numbers)`} title="duplicates.py" />

            <div className="bg-slate-50 dark:bg-slate-900/80 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
               <div className="flex justify-between items-center px-4 py-2 border-b border-slate-200 dark:border-slate-700 mb-2 font-mono text-sm text-slate-500 font-bold uppercase tracking-wider">
                  <span>Input</span>
                  <span>Stored Result</span>
               </div>
               <div className="flex justify-between items-center px-4 font-mono font-bold text-lg">
                  <span className="text-rose-500 line-through decoration-2 opacity-70">{`{1,2,3,3,4,4}`}</span>
                  <span className="text-emerald-500">{`{1,2,3,4}`}</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Set Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center">
            <Terminal className="w-8 h-8 mr-3 text-rose-500" />
            Interactive Set Lab
          </h2>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setActiveTab('basics')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm ${activeTab === 'basics' ? 'bg-rose-600 text-white shadow-rose-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              Basics
            </button>
            <button
              onClick={() => setActiveTab('modify')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm ${activeTab === 'modify' ? 'bg-rose-600 text-white shadow-rose-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              Modify
            </button>
            <button
              onClick={() => setActiveTab('math')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'math' ? 'bg-rose-600 text-white shadow-rose-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              Math
            </button>
            <button
              onClick={() => setActiveTab('realworld')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'realworld' ? 'bg-rose-600 text-white shadow-rose-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              Real World
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
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">2️⃣ & 5️⃣ Creating & Looping</h3>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-xl border border-blue-100 dark:border-blue-800/30 text-sm text-blue-800 dark:text-blue-300">
                    Because sets are unindexed, you <strong>cannot</strong> use <code className="font-bold">fruits[0]</code>. You must use a <code className="font-bold text-rose-500">for</code> loop to iterate through them.
                  </div>

                  <button onClick={() => runDemo('create')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-amber-300 dark:hover:border-amber-700 transition-colors relative shadow-sm">
                      <div className="absolute top-4 right-4 text-xs font-bold text-amber-500 bg-amber-100 dark:bg-amber-900/30 px-2 py-1 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN</div>
                      <h4 className="font-bold text-sm text-amber-600 dark:text-amber-400 mb-2">Create a Set</h4>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
fruits = {`{`}<span className="text-amber-500">"apple"</span>, <span className="text-amber-500">"banana"</span>, <span className="text-amber-500">"mango"</span>{`}`}<br/>
<span className="text-blue-500">print</span>(fruits)
                      </pre>
                    </div>
                  </button>

                  <button onClick={() => runDemo('loop')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-fuchsia-300 dark:hover:border-fuchsia-700 transition-colors relative shadow-sm">
                      <div className="absolute top-4 right-4 text-xs font-bold text-fuchsia-500 bg-fuchsia-100 dark:bg-fuchsia-900/30 px-2 py-1 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN</div>
                      <h4 className="font-bold text-sm text-fuchsia-600 dark:text-fuchsia-400 mb-2">Accessing Items (Loop)</h4>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
fruits = {`{`}<span className="text-amber-500">"apple"</span>, <span className="text-amber-500">"banana"</span>, <span className="text-amber-500">"mango"</span>{`}`}<br/><br/>
<span className="text-rose-500 font-bold">for</span> fruit <span className="text-rose-500 font-bold">in</span> fruits:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-500">print</span>(fruit)
                      </pre>
                    </div>
                  </button>

                </div>
              )}

              {activeTab === 'modify' && (
                <div className="animate-fade-in space-y-4">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">6️⃣, 7️⃣ & 8️⃣ Adding & Removing</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                     <button onClick={() => runDemo('add')} className="w-full text-left group">
                        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-3 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors relative h-full">
                           <h4 className="font-bold text-sm text-emerald-600 dark:text-emerald-400 mb-1">.add()</h4>
                           <p className="text-[10px] text-slate-500 mb-2">Add exactly 1 item.</p>
                           <pre className="font-mono text-[10px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-2 rounded border border-slate-100 dark:border-slate-800">
fruits.<span className="text-blue-500 font-bold">add</span>(<span className="text-amber-500">"orange"</span>)
                           </pre>
                        </div>
                     </button>
                     <button onClick={() => runDemo('update')} className="w-full text-left group">
                        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-3 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors relative h-full">
                           <h4 className="font-bold text-sm text-emerald-600 dark:text-emerald-400 mb-1">.update()</h4>
                           <p className="text-[10px] text-slate-500 mb-2">Add multiple items.</p>
                           <pre className="font-mono text-[10px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-2 rounded border border-slate-100 dark:border-slate-800">
fruits.<span className="text-blue-500 font-bold">update</span>([<span className="text-amber-500">"x"</span>, <span className="text-amber-500">"y"</span>])
                           </pre>
                        </div>
                     </button>
                  </div>

                  <button onClick={() => runDemo('remove')} className="w-full text-left group mt-4">
                     <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-rose-300 dark:hover:border-rose-700 transition-colors relative">
                        <div className="absolute top-4 right-4 text-xs font-bold text-rose-500 bg-rose-100 dark:bg-rose-900/30 px-2 py-1 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN</div>
                        <h4 className="font-bold text-sm text-rose-600 dark:text-rose-400 mb-2">Removing Items</h4>
                        <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
fruits = {`{`}<span className="text-amber-500">"apple"</span>, <span className="text-amber-500">"banana"</span>, <span className="text-amber-500">"mango"</span>{`}`}<br/><br/>
<span className="text-slate-500 italic"># Removes banana</span><br/>
fruits.<span className="text-blue-500 font-bold">remove</span>(<span className="text-amber-500">"banana"</span>)<br/><br/>
<span className="text-slate-500 italic"># Safer alternative (doesn't error if not found)</span><br/>
fruits.<span className="text-blue-500 font-bold">discard</span>(<span className="text-amber-500">"kiwi"</span>) 
                        </pre>
                     </div>
                  </button>
                  
                </div>
              )}

              {activeTab === 'math' && (
                <div className="animate-fade-in space-y-4">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                    Mathematical Operations (11-14)
                  </h3>
                  
                  <button onClick={() => runDemo('union')} className="w-full text-left group">
                     <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-3 hover:border-blue-300 dark:hover:border-blue-700 transition-colors relative flex items-center justify-between">
                        <div>
                           <h4 className="font-bold text-sm text-blue-600 dark:text-blue-400 flex items-center"><Combine className="w-4 h-4 mr-1.5"/> Union (Combine all)</h4>
                           <code className="text-xs bg-white dark:bg-slate-950 px-1 rounded block max-w-fit mt-1 text-slate-500">{`{1,2} | {2,3} -> {1,2,3}`}</code>
                        </div>
                        <div className="bg-blue-100 text-blue-700 px-2 py-1 text-xs font-bold rounded">RUN</div>
                     </div>
                  </button>

                  <button onClick={() => runDemo('intersection')} className="w-full text-left group">
                     <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-3 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors relative flex items-center justify-between">
                        <div>
                           <h4 className="font-bold text-sm text-emerald-600 dark:text-emerald-400 flex items-center"><GitCompare className="w-4 h-4 mr-1.5"/> Intersection (Common only)</h4>
                           <code className="text-xs bg-white dark:bg-slate-950 px-1 rounded block max-w-fit mt-1 text-slate-500">{`{1,2} & {2,3} -> {2}`}</code>
                        </div>
                        <div className="bg-emerald-100 text-emerald-700 px-2 py-1 text-xs font-bold rounded">RUN</div>
                     </div>
                  </button>

                  <button onClick={() => runDemo('difference')} className="w-full text-left group">
                     <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-3 hover:border-purple-300 dark:hover:border-purple-700 transition-colors relative flex items-center justify-between">
                        <div>
                           <h4 className="font-bold text-sm text-purple-600 dark:text-purple-400 flex items-center"><MinusSquare className="w-4 h-4 mr-1.5"/> Difference (Subtract)</h4>
                           <code className="text-xs bg-white dark:bg-slate-950 px-1 rounded block max-w-fit mt-1 text-slate-500">{`{1,2} - {2,3} -> {1}`}</code>
                        </div>
                        <div className="bg-purple-100 text-purple-700 px-2 py-1 text-xs font-bold rounded">RUN</div>
                     </div>
                  </button>

                  <div className="bg-amber-50 dark:bg-amber-900/10 p-3 rounded border border-amber-200 dark:border-amber-800 text-xs text-amber-800 dark:text-amber-300 font-medium">
                     * Note: You can also use <code className="font-bold">set1.symmetric_difference(set2)</code> to keep everything EXCEPT the common elements!
                  </div>
                  
                </div>
              )}

              {activeTab === 'realworld' && (
                <div className="animate-fade-in space-y-5">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">1️⃣5️⃣ & 1️⃣6️⃣ Real-World Use Cases</h3>
                  
                  <button onClick={() => runDemo('dedupe')} className="w-full text-left group">
                    <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800/50 rounded-xl p-4 hover:border-emerald-400 dark:hover:border-emerald-600 transition-colors relative shadow-sm">
                      <div className="absolute top-4 right-4 text-xs font-bold text-emerald-500 bg-white dark:bg-emerald-900/40 px-2 py-1 rounded opacity-80 group-hover:opacity-100 transition-opacity shadow-sm">RUN</div>
                      <h4 className="font-bold text-sm text-emerald-700 dark:text-emerald-400 mb-1 flex items-center"><Layers className="w-4 h-4 mr-1.5" /> Remove List Duplicates</h4>
                      <p className="text-xs text-slate-500 mb-2">The most common use case. Wrap a list in `set()` to deduplicate.</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white/60 dark:bg-slate-950/50 p-3 rounded-lg border border-emerald-100 dark:border-emerald-800/30">
numbers_list = [1, 2, 3, 3, 4, 4, 5]<br/>
unique_numbers = <span className="text-rose-500 font-bold">set</span>(numbers_list)<br/>
<span className="text-blue-500">print</span>(unique_numbers)
                      </pre>
                    </div>
                  </button>

                  <div className="grid grid-cols-2 gap-4">
                     <button onClick={() => runDemo('frozenset')} className="w-full text-left group">
                        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-3 hover:border-blue-300 transition-colors relative h-full">
                           <h4 className="font-bold text-sm text-blue-600 dark:text-blue-400 mb-1">Frozen Sets</h4>
                           <p className="text-[10px] text-slate-500 mb-2">Immutable sets. Items cannot be changed.</p>
                           <pre className="font-mono text-[10px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-2 rounded">
x = <span className="text-rose-500 font-bold">frozenset</span>([1, 2])
                           </pre>
                        </div>
                     </button>
                     <button onClick={() => runDemo('membership')} className="w-full text-left group">
                        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-3 hover:border-fuchsia-300 transition-colors relative h-full">
                           <h4 className="font-bold text-sm text-fuchsia-600 dark:text-fuchsia-400 mb-1">Fast Testing</h4>
                           <p className="text-[10px] text-slate-500 mb-2">Sets are faster than lists for checking data.</p>
                           <pre className="font-mono text-[10px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-2 rounded">
<span className="text-blue-500">print</span>(3 <span className="text-rose-500 font-bold">in</span> {`{1,2,3}`})
                           </pre>
                        </div>
                     </button>
                  </div>

                </div>
              )}

            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-[#1e1e1e] rounded-2xl p-6 border border-slate-800 h-full min-h-[500px] shadow-2xl relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full blur-3xl"></div>
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <h3 className="font-bold text-slate-300 uppercase text-xs tracking-wider flex items-center">
                    <Terminal className="w-4 h-4 mr-2 text-rose-400" />
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
                      <span>Run a demo on the left to inspect set operations...</span>
                    </div>
                  ) : (
                    consoleOutput.map((line, i) => (
                      <div key={i} className={`mb-1.5 animate-fade-in ${
                          line.startsWith('#') ? 'text-slate-500 italic' :
                          line.startsWith('{') ? 'text-emerald-300 font-bold' :
                          line.startsWith('True') ? 'text-emerald-400 font-bold' :
                          line.includes('frozenset') ? 'text-blue-300 font-bold' :
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

      {/* 4. Common Errors & Best Practices Data blocks */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        
        {/* Errors Block */}
        <div className="bg-rose-50 dark:bg-rose-900/10 p-8 rounded-3xl border border-rose-200 dark:border-rose-800/30 shadow-sm relative overflow-hidden h-full">
          <div className="absolute right-0 bottom-0 opacity-5">
             <ShieldAlert className="w-48 h-48 text-rose-500" />
          </div>
          <h2 className="text-2xl font-bold text-rose-900 dark:text-rose-400 mb-6 flex items-center border-b border-rose-200 dark:border-rose-800/50 pb-4 relative z-10">
            1️⃣7️⃣ Common Beginner Mistakes
          </h2>
          
          <div className="space-y-6 relative z-10">
             <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border-l-4 border-rose-500 shadow-sm">
                <h4 className="font-bold text-rose-700 dark:text-rose-400 mb-2">Mistake 1: Using Indices</h4>
                <code className="block bg-rose-50 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 font-mono font-bold px-3 py-2 rounded mb-2 w-fit">
                   fruits[0] <span className="ml-2 font-normal">❌</span>
                </code>
                <p className="text-sm text-slate-600 dark:text-slate-300">Sets are strictly unindexed. You cannot target elements by their position.</p>
             </div>

             <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border-l-4 border-orange-500 shadow-sm">
                <h4 className="font-bold text-orange-700 dark:text-orange-400 mb-2">Mistake 2: Expecting Order</h4>
                <code className="block bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 font-mono font-bold px-3 py-2 rounded mb-2 w-fit">
                   {`{'apple', 'banana'}`}
                </code>
                <p className="text-sm text-slate-600 dark:text-slate-300">Sets are unordered. The output order may arbitrarily change during execution.</p>
             </div>
          </div>
        </div>

        {/* Pro Tips Block */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700 shadow-xl relative overflow-hidden h-full">
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"></div>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center border-b border-slate-700 pb-4 relative z-10">
            <Lightbulb className="w-6 h-6 text-yellow-400 mr-3" />
            1️⃣8️⃣ Tips & Tricks (From a Dev)
          </h2>
          
          <div className="space-y-4 relative z-10">
             <div className="bg-white/10 p-4 rounded-xl border border-white/10 flex items-start">
                <div className="bg-emerald-500/20 p-2 rounded-lg mr-4 mt-0.5">
                   <Zap className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                   <h4 className="font-bold text-white mb-1">Fast Membership Testing</h4>
                   <p className="text-sm text-slate-300 mb-2">Need to check if a massive list contains a certain ID? Convert it to a set first.</p>
                   <code className="block text-xs font-mono bg-black/40 text-emerald-300 px-2 py-1 rounded">print(val in huge_set) # Instant!</code>
                </div>
             </div>
             
             <div className="bg-white/10 p-4 rounded-xl border border-white/10 flex items-start">
                <div className="bg-rose-500/20 p-2 rounded-lg mr-4 mt-0.5">
                   <Combine className="w-5 h-5 text-rose-400" />
                </div>
                <div>
                   <h4 className="font-bold text-white mb-1">Data Comparison</h4>
                   <p className="text-sm text-slate-300">Sets are incredibly useful for Data Analysts to find common overlaps using <code className="text-xs bg-white/20 px-1 rounded mx-1">intersection()</code> or to identify missing metrics using <code className="text-xs bg-white/20 px-1 rounded mx-1">difference()</code>.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 5. Summary Table & Best Practices Checklist */}
      <section className="max-w-6xl mx-auto pb-16 grid lg:grid-cols-12 gap-8">
         <div className="lg:col-span-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 rounded-3xl shadow-sm">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wider text-sm">2️⃣0️⃣ Quick Summary</h3>
            <div className="space-y-3">
               <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-700">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Syntax</span>
                  <span className="font-bold font-mono text-rose-500">{`{}`}</span>
               </div>
               <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-700">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Ordered</span>
                  <span className="font-bold text-rose-500">No</span>
               </div>
               <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-700">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Indexed</span>
                  <span className="font-bold text-rose-500">No</span>
               </div>
               <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-700">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Duplicates Allow</span>
                  <span className="font-bold text-rose-500">No</span>
               </div>
               <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Mutable (Changeable)</span>
                  <span className="font-bold text-emerald-500">Yes</span>
               </div>
            </div>
         </div>

         <div className="lg:col-span-8 bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800 p-6 rounded-3xl shadow-sm relative">
           <CheckCircle2 className="absolute top-6 right-6 w-12 h-12 text-emerald-500/20" />
           <h2 className="text-2xl font-bold text-emerald-900 dark:text-emerald-400 mb-6 flex items-center">
            1️⃣9️⃣ Best Practices Checklist
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center bg-white dark:bg-slate-800 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800/30 shadow-sm">
               <div className="bg-emerald-100 dark:bg-emerald-900/40 p-2 rounded-full mr-4">
                 <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
               </div>
               <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Use sets when duplicates must be avoided</span>
            </div>
            <div className="flex items-center bg-white dark:bg-slate-800 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800/30 shadow-sm">
               <div className="bg-emerald-100 dark:bg-emerald-900/40 p-2 rounded-full mr-4">
                 <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
               </div>
               <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Use sets for fast membership lookups</span>
            </div>
            <div className="flex items-center bg-white dark:bg-slate-800 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800/30 shadow-sm">
               <div className="bg-emerald-100 dark:bg-emerald-900/40 p-2 rounded-full mr-4">
                 <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
               </div>
               <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Do not rely on insertion order</span>
            </div>
            <div className="flex items-center bg-white dark:bg-slate-800 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800/30 shadow-sm">
               <div className="bg-emerald-100 dark:bg-emerald-900/40 p-2 rounded-full mr-4">
                 <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
               </div>
               <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Leverage mathematical operations (Union/Intersect) limit manual looping</span>
            </div>
          </div>
         </div>
      </section>

    </div>
  );
};

export default PythonSets;