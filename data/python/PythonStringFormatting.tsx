import React, { useState } from 'react';
import { 
  Type, Terminal, Check, Copy, Quote, 
  BookOpen, AlertCircle, CheckCircle2, Code,
  Lightbulb, ShieldCheck, ArrowRightLeft, AlignLeft,
  MessageSquareText, Hash, Receipt, Award
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
                    line.includes('print') || line.includes('.format') ? 'text-blue-400' : 
                    line.includes('f"') || line.includes('"') || line.includes("'") ? 'text-amber-300' :
                    line.match(/\b\d+(\.\d+)?\b/) ? 'text-emerald-400' :
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

const PythonStringFormatting: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'old' | 'format' | 'fstring' | 'advanced'>('fstring');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'percent_s':
        outLines = `My name is Alice and I am 22 years old.`.split('\n');
        break;
      case 'percent_f':
        outLines = `Price: 25.500000`.split('\n');
        break;
      case 'format_basic':
        outLines = `My name is David and I am 25 years old.`.split('\n');
        break;
      case 'format_indexed':
        outLines = `My name is David and I am 25`.split('\n');
        break;
      case 'fstring_basic':
        outLines = `My name is Emma and I am 24 years old.`.split('\n');
        break;
      case 'fstring_math':
        outLines = `Total price is 30`.split('\n');
        break;
      case 'fstring_decimal':
        outLines = `Price: 49.57`.split('\n');
        break;
      case 'fstring_large':
        outLines = `1,000,000`.split('\n');
        break;
      case 'fstring_align':
        outLines = `Python     is fun\n    Python is fun\n  Python   is fun`.split('\n');
        break;
      case 'report_demo':
        outLines = `Student Name: John\nMarks: 88\nStatus: Pass`.split('\n');
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
          <Quote className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Python String Formatting
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          String Formatting is the process of inserting dynamic variables inside a string. Learn the evolution of Python formatting from <code className="text-indigo-600 dark:text-indigo-400 font-bold bg-indigo-50 dark:bg-indigo-900/30 px-2 py-0.5 rounded">%s</code> to powerful modern <code className="text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 rounded">f-Strings</code>.
        </p>
      </header>

      {/* 2. Intro & Methods Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 mb-8">
          <div className="flex items-center mb-6">
            <MessageSquareText className="w-6 h-6 text-indigo-500 mr-3" />
            <h2 className="text-2xl font-bold">1️⃣ Why Format Strings?</h2>
          </div>
          <p className="mb-6 text-slate-600 dark:text-slate-300">
            Inserting variables into strings in a readable and structured way helps create dynamic text output. It's heavily used in:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-2">
            {[
              { label: 'User messages', icon: '👤' },
              { label: 'Reports', icon: '📊' },
              { label: 'Logs', icon: '📝' },
              { label: 'Data display', icon: '🖥️' },
            ].map((item, i) => (
               <div key={i} className="bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl p-4 text-center hover:shadow-md transition-shadow">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="font-bold text-sm text-slate-700 dark:text-slate-300">{item.label}</div>
               </div>
            ))}
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-6 flex items-center justify-center text-center">
            2️⃣ The 3 Methods of Formatting
        </h3>
        
        <div className="grid md:grid-cols-3 gap-6">
           <div className="bg-slate-200 dark:bg-slate-800 p-6 rounded-2xl border-t-4 border-slate-400 relative opacity-80">
              <div className="absolute top-2 right-2 text-[10px] font-bold uppercase bg-slate-300 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-1 rounded">Legacy</div>
              <h4 className="font-bold text-slate-700 dark:text-slate-200 text-xl mb-2 font-mono">% Operator</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Old style formatting used in older Python versions. Harder to read with multiple variables.</p>
           </div>
           <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-2xl border-t-4 border-blue-400 relative">
              <div className="absolute top-2 right-2 text-[10px] font-bold uppercase bg-blue-200 dark:bg-blue-800 text-blue-700 dark:text-blue-200 px-2 py-1 rounded">Modern</div>
              <h4 className="font-bold text-blue-800 dark:text-blue-300 text-xl mb-2 font-mono">.format()</h4>
              <p className="text-sm text-blue-700 dark:text-blue-200/80">More flexible and readable. Uses curly braces <code className="font-bold">{`{}`}</code> as placeholders.</p>
           </div>
           <div className="bg-emerald-50 dark:bg-emerald-900/10 p-6 rounded-2xl border-t-4 border-emerald-500 relative transform transition hover:scale-105 shadow-md">
              <div className="absolute -top-3 right-4 text-xs font-bold uppercase bg-emerald-500 text-white px-3 py-1 rounded-full shadow-lg flex items-center">⭐ Best Method</div>
              <h4 className="font-bold text-emerald-800 dark:text-emerald-300 text-xl mb-2 font-mono">f-Strings</h4>
              <p className="text-sm text-emerald-700 dark:text-emerald-200/80">Introduced in Python 3.6. The fastest, cleanest, and most recommended way today.</p>
           </div>
        </div>
      </section>

      {/* 3. Interactive Formatting Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center">
            <Terminal className="w-8 h-8 mr-3 text-indigo-500" />
            Interactive Formatting Lab
          </h2>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setActiveTab('old')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm ${activeTab === 'old' ? 'bg-indigo-600 text-white shadow-indigo-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              3. % Operator
            </button>
            <button
              onClick={() => setActiveTab('format')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm ${activeTab === 'format' ? 'bg-indigo-600 text-white shadow-indigo-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              4. .format()
            </button>
            <button
              onClick={() => setActiveTab('fstring')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'fstring' ? 'bg-emerald-600 text-white shadow-emerald-500/20' : 'bg-white dark:bg-slate-800 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-slate-700 border border-emerald-200 dark:border-emerald-800'}`}
            >
              ⭐ 5-6. f-Strings
            </button>
            <button
              onClick={() => setActiveTab('advanced')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'advanced' ? 'bg-indigo-600 text-white shadow-indigo-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              7-11. Advanced
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
              
              {activeTab === 'old' && (
                <div className="animate-fade-in space-y-5">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">3️⃣ Old Style Formatting</h3>
                  <div className="grid grid-cols-3 gap-2 mb-4 text-xs font-mono font-bold text-center">
                     <div className="bg-slate-100 dark:bg-slate-900 py-2 rounded border border-slate-200 dark:border-slate-700"><span className="text-amber-500">%s</span> = String</div>
                     <div className="bg-slate-100 dark:bg-slate-900 py-2 rounded border border-slate-200 dark:border-slate-700"><span className="text-emerald-500">%d</span> = Integer</div>
                     <div className="bg-slate-100 dark:bg-slate-900 py-2 rounded border border-slate-200 dark:border-slate-700"><span className="text-blue-500">%f</span> = Float</div>
                  </div>

                  <button onClick={() => runDemo('percent_s')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors relative shadow-sm">
                      <div className="absolute top-4 right-4 text-xs font-bold text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-1 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN</div>
                      <h4 className="font-bold text-sm text-indigo-600 dark:text-indigo-400 mb-2">Basic % Operator</h4>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
name = <span className="text-amber-500">"Alice"</span><br/>
age = <span className="text-emerald-500">22</span><br/><br/>
<span className="text-blue-500">print</span>(<span className="text-amber-500">"My name is <span className="text-rose-500 font-bold">%s</span> and I am <span className="text-rose-500 font-bold">%d</span> years old."</span> % (name, age))
                      </pre>
                    </div>
                  </button>

                  <button onClick={() => runDemo('percent_f')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-slate-400 dark:hover:border-slate-600 transition-colors relative shadow-sm">
                      <div className="absolute top-4 right-4 text-xs font-bold text-slate-500 bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN</div>
                      <h4 className="font-bold text-sm text-slate-600 dark:text-slate-400 mb-2">Floating Point (%f)</h4>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
price = <span className="text-emerald-500">25.50</span><br/>
<span className="text-blue-500">print</span>(<span className="text-amber-500">"Price: <span className="text-blue-500 font-bold">%f</span>"</span> % price)
                      </pre>
                    </div>
                  </button>
                </div>
              )}

              {activeTab === 'format' && (
                <div className="animate-fade-in space-y-4">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">4️⃣ The .format() Method</h3>
                  
                  <button onClick={() => runDemo('format_basic')} className="w-full text-left group">
                     <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-blue-300 dark:hover:border-blue-700 transition-colors relative">
                        <div className="absolute top-4 right-4 text-xs font-bold text-blue-500 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN</div>
                        <h4 className="font-bold text-sm text-blue-600 dark:text-blue-400 mb-2">Basic Usage</h4>
                        <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-hidden">
name = <span className="text-amber-500">"David"</span><br/>
age = <span className="text-emerald-500">25</span><br/>
<span className="text-blue-500">print</span>(<span className="text-amber-500">"My name is <span className="text-rose-500 font-bold">{`{}`}</span> and I am <span className="text-rose-500 font-bold">{`{}`}</span>"</span>.<span className="text-blue-500 font-bold">format</span>(name, age))
                        </pre>
                     </div>
                  </button>

                  <button onClick={() => runDemo('format_indexed')} className="w-full text-left group">
                     <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-purple-300 dark:hover:border-purple-700 transition-colors relative">
                        <div className="absolute top-4 right-4 text-xs font-bold text-purple-500 bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN</div>
                        <h4 className="font-bold text-sm text-purple-600 dark:text-purple-400 mb-2 flex items-center">Using Index & Named Arguments</h4>
                        <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-hidden w-full">
<span className="text-slate-500 italic"># Indexed</span><br/>
t1 = <span className="text-amber-500">"My name is <span className="text-rose-500 font-bold">{`{0}`}</span> and I am <span className="text-rose-500 font-bold">{`{1}`}</span>"</span>.<span className="text-blue-500 font-bold">format</span>(<span className="text-amber-500">"David"</span>, <span className="text-emerald-500">25</span>)<br/><br/>
<span className="text-slate-500 italic"># Named</span><br/>
t2 = <span className="text-amber-500">"I am <span className="text-rose-500 font-bold">{`{age}`}</span>"</span>.<span className="text-blue-500 font-bold">format</span>(name=<span className="text-amber-500">"David"</span>, age=<span className="text-emerald-500">25</span>)
                        </pre>
                     </div>
                  </button>
                  
                </div>
              )}

              {activeTab === 'fstring' && (
                <div className="animate-fade-in space-y-4">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-emerald-500" /> 5️⃣ & 6️⃣ f-Strings (Best Method!)
                  </h3>
                  
                  <div className="bg-emerald-50 dark:bg-emerald-900/10 border-2 border-emerald-200 dark:border-emerald-800/50 p-4 rounded-xl relative shadow-sm">
                     <h4 className="font-bold text-emerald-800 dark:text-emerald-400 mb-2 flex items-center">Basic Syntax</h4>
                     <p className="text-sm text-emerald-700 dark:text-emerald-300 mb-3">
                        Prefix a string with <code className="font-bold font-mono bg-white dark:bg-black/30 px-1 py-0.5 rounded text-lg">f</code> and simply put variables inside <code className="font-bold font-mono bg-white dark:bg-black/30 px-1 py-0.5 rounded">{`{}`}</code>.
                     </p>
                     <button onClick={() => runDemo('fstring_basic')} className="w-full text-left group">
                        <div className="bg-white/60 dark:bg-slate-950/50 p-3 rounded-lg border border-emerald-100 dark:border-emerald-800 hover:border-emerald-300 transition-colors relative">
                           <div className="absolute top-3 right-3 text-[10px] font-bold text-white bg-emerald-500 px-2 py-0.5 rounded opacity-80 group-hover:opacity-100 transition-opacity">RUN</div>
                           <pre className="font-mono text-xs text-slate-700 dark:text-slate-300">
name = <span className="text-amber-500">"Emma"</span><br/>
age = <span className="text-emerald-500">24</span><br/>
<span className="text-blue-500">print</span>(<span className="text-rose-500 font-bold text-base">f</span><span className="text-amber-500">"My name is <span className="text-indigo-400 font-bold">{`{name}`}</span> and I am <span className="text-indigo-400 font-bold">{`{age}`}</span> years old."</span>)
                           </pre>
                        </div>
                     </button>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-900/80 p-5 rounded-xl border border-slate-200 dark:border-slate-700 relative overflow-hidden">
                     <div className="absolute right-0 bottom-0 opacity-10">
                        <Type className="w-24 h-24 text-indigo-500" />
                     </div>
                     <h4 className="font-bold text-slate-900 dark:text-white mb-2 relative z-10">6️⃣ Expressions Inside f-Strings</h4>
                     <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 relative z-10">You can perform live math calculations inside the braces!</p>
                     
                     <button onClick={() => runDemo('fstring_math')} className="w-full text-left group relative z-10">
                        <div className="bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-indigo-400 transition-colors">
                           <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300">
price = <span className="text-emerald-500">10</span><br/>
qty = <span className="text-emerald-500">3</span><br/>
<span className="text-blue-500">print</span>(<span className="text-rose-500 font-bold text-base">f</span><span className="text-amber-500">"Total price is <span className="text-indigo-400 font-bold bg-indigo-50 dark:bg-indigo-900/40 px-1">{`{price * qty}`}</span>"</span>)
                           </pre>
                        </div>
                     </button>
                  </div>
                  
                </div>
              )}

              {activeTab === 'advanced' && (
                <div className="animate-fade-in space-y-4">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">7️⃣-1️⃣1️⃣ Advanced Formatting</h3>
                  
                  <div className="grid grid-cols-2 gap-3">
                     <button onClick={() => runDemo('fstring_decimal')} className="w-full text-left group">
                        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-3 hover:border-blue-300 transition-colors relative h-full">
                           <h4 className="font-bold text-xs text-blue-600 dark:text-blue-400 mb-1">Decimal Places (.2f)</h4>
                           <pre className="font-mono text-[10px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-2 rounded">
x = <span className="text-emerald-500">49.5678</span><br/>
<span className="text-rose-500 font-bold">f</span><span className="text-amber-500">"Price: {`{x:.2f}`}"</span>
                           </pre>
                        </div>
                     </button>
                     <button onClick={() => runDemo('fstring_large')} className="w-full text-left group">
                        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-3 hover:border-emerald-300 transition-colors relative h-full">
                           <h4 className="font-bold text-xs text-emerald-600 dark:text-emerald-400 mb-1">Thousands Separator (,)</h4>
                           <pre className="font-mono text-[10px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-2 rounded">
x = <span className="text-emerald-500">1000000</span><br/>
<span className="text-rose-500 font-bold">f</span><span className="text-amber-500">"{`{x:,}`}"</span>
                           </pre>
                        </div>
                     </button>
                  </div>

                  <button onClick={() => runDemo('fstring_align')} className="w-full text-left group mt-2">
                     <div className="bg-purple-50 dark:bg-purple-900/10 border border-purple-200 dark:border-purple-800/50 rounded-xl p-3 sm:p-4 hover:border-purple-400 dark:hover:border-purple-600 transition-colors relative shadow-sm">
                        <div className="absolute top-4 right-4 text-xs font-bold text-white bg-purple-500 px-2 py-0.5 rounded opacity-80 group-hover:opacity-100 transition-opacity shadow-sm">RUN</div>
                        <h4 className="font-bold text-sm text-purple-700 dark:text-purple-400 mb-2 flex items-center"><AlignLeft className="w-4 h-4 mr-1.5" /> 9️⃣ Aligning Text (Spacing)</h4>
                        <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-white/60 dark:bg-slate-950/50 p-2 rounded-lg border border-purple-100 dark:border-purple-800/30">
n = <span className="text-amber-500">"Python"</span><br/>
<span className="text-blue-500">print</span>(<span className="text-rose-500 font-bold text-base">f</span><span className="text-amber-500">"<span className="text-indigo-500 font-bold">{`{n:<10}`}</span> is fun"</span>) <span className="text-slate-500 italic"># Left align</span><br/>
<span className="text-blue-500">print</span>(<span className="text-rose-500 font-bold text-base">f</span><span className="text-amber-500">"<span className="text-indigo-500 font-bold">{`{n:>10}`}</span> is fun"</span>) <span className="text-slate-500 italic"># Right align</span><br/>
<span className="text-blue-500">print</span>(<span className="text-rose-500 font-bold text-base">f</span><span className="text-amber-500">"<span className="text-indigo-500 font-bold">{`{n:^10}`}</span> is fun"</span>) <span className="text-slate-500 italic"># Center align</span>
                        </pre>
                     </div>
                  </button>

                  <button onClick={() => runDemo('report_demo')} className="w-full text-left group mt-2">
                     <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/50 rounded-xl p-3 sm:p-4 hover:border-amber-400 dark:hover:border-amber-600 transition-colors relative shadow-sm">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-amber-600 bg-amber-200 dark:bg-amber-800/50 px-2 py-0.5 rounded opacity-80 group-hover:opacity-100 transition-opacity shadow-sm">RUN</div>
                        <h4 className="font-bold text-sm text-amber-700 dark:text-amber-400 mb-2 flex items-center"><Receipt className="w-4 h-4 mr-1.5" /> 🔟 Real-World Report Gen</h4>
                        <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-white/60 dark:bg-slate-950/50 p-2 rounded-lg border border-amber-100 dark:border-amber-800/30">
marks = <span className="text-emerald-500">88</span><br/>
<span className="text-blue-500">print</span>(<span className="text-rose-500 font-bold text-base">f</span><span className="text-amber-500">"Marks: <span className="text-indigo-500 font-bold">{`{marks}`}</span>"</span>)<br/>
<span className="text-blue-500">print</span>(<span className="text-rose-500 font-bold text-base">f</span><span className="text-amber-500">"Status: <span className="text-indigo-500 font-bold">{`{'Pass' if marks >= 50 else 'Fail'}`}</span>"</span>)
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
                      <span>Run a demo on the left to see formatted strings...</span>
                    </div>
                  ) : (
                    consoleOutput.map((line, i) => (
                      <div key={i} className={`mb-1.5 animate-fade-in whitespace-pre ${
                          line.includes('25.500000') ? 'text-blue-300 font-medium' :
                          line.startsWith('Python') || line.endsWith('fun') ? 'text-amber-300 font-medium' :
                          line.startsWith('Status: Pass') ? 'text-emerald-400 font-bold' :
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
             <AlertCircle className="w-48 h-48 text-rose-500" />
          </div>
          <h2 className="text-2xl font-bold text-rose-900 dark:text-rose-400 mb-6 flex items-center border-b border-rose-200 dark:border-rose-800/50 pb-4 relative z-10">
            1️⃣2️⃣ Common Beginner Mistake
          </h2>
          
          <div className="space-y-6 relative z-10">
             <h4 className="font-bold text-xl text-rose-700 dark:text-rose-400 mb-2">Forgetting the `f` character</h4>
             <p className="text-sm text-slate-600 dark:text-slate-300">If you forget to put the `f` at the start of your string, Python will literally just print out the curly braces instead of evaluating the variable inside!</p>
             
             <div className="grid sm:grid-cols-2 gap-4">
               <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border-t-4 border-rose-500 shadow-sm text-center">
                  <div className="text-rose-600 dark:text-rose-400 font-bold text-sm mb-2 uppercase tracking-wide">❌ Wrong</div>
                  <code className="block bg-rose-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-mono text-xs px-2 py-3 rounded mb-2">
                     print(<span className="text-amber-500">"Hello {`{name}`} "</span>)
                  </code>
                  <div className="text-xs text-rose-500 font-bold">Output: Hello {`{name}`}</div>
               </div>

               <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border-t-4 border-emerald-500 shadow-sm text-center">
                  <div className="text-emerald-600 dark:text-emerald-400 font-bold text-sm mb-2 uppercase tracking-wide">✔ Correct</div>
                  <code className="block bg-emerald-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-mono text-xs px-2 py-3 rounded mb-2">
                     print(<span className="text-emerald-500 font-bold text-base">f</span><span className="text-amber-500">"Hello <span className="text-indigo-500 font-bold">{`{name}`}</span> "</span>)
                  </code>
                  <div className="text-xs text-emerald-500 font-bold">Output: Hello Sam</div>
               </div>
             </div>
          </div>
        </div>

        {/* Pro Tips Block */}
        <div className="bg-gradient-to-br from-indigo-800 to-indigo-950 p-8 rounded-3xl border border-indigo-700 shadow-xl relative overflow-hidden h-full text-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center border-b border-indigo-700 pb-4 relative z-10">
            <Lightbulb className="w-6 h-6 text-yellow-400 mr-3 shrink-0" />
            1️⃣3️⃣ Tips (From a Python Dev)
          </h2>
          
          <div className="space-y-4 relative z-10">
             <div className="bg-white/10 p-4 rounded-xl border border-white/10 flex items-start hover:bg-white/20 transition-colors">
                <div className="bg-indigo-500/30 p-2 rounded-lg mr-4 mt-0.5">
                   <Award className="w-5 h-5 text-indigo-300" />
                </div>
                <div>
                   <h4 className="font-bold mb-1">Always Prefer f-Strings</h4>
                   <p className="text-sm text-indigo-100">Unless you are working in an extremely old legacy codebase (Python 3.5 or older), f-strings are unanimously the industry standard. They evaluate faster and are far cleaner.</p>
                </div>
             </div>
             
             <div className="bg-white/10 p-4 rounded-xl border border-white/10 flex items-start hover:bg-white/20 transition-colors">
                <div className="bg-pink-500/30 p-2 rounded-lg mr-4 mt-0.5">
                   <Hash className="w-5 h-5 text-pink-300" />
                </div>
                <div>
                   <h4 className="font-bold mb-1">Perform Math Inline</h4>
                   <p className="text-sm text-indigo-100">Don't create useless variables! If you just need a sum for a print statement, use an expression directly inline: <code className="bg-black/30 text-pink-300 px-1 py-0.5 rounded font-mono text-xs">f"Total: {`{a + b}`}"</code>.</p>
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
            1️⃣4️⃣ Best Practices Summary
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center bg-white dark:bg-slate-800 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800/30 shadow-sm relative overflow-hidden group">
               <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-400 group-hover:w-2 transition-all"></div>
               <div className="bg-emerald-100 dark:bg-emerald-900/40 p-2 rounded-full mr-4 ml-2">
                 <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
               </div>
               <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Always prefer <strong>f-strings</strong> in modern Python</span>
            </div>
            <div className="flex items-center bg-white dark:bg-slate-800 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800/30 shadow-sm relative overflow-hidden group">
               <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-400 group-hover:w-2 transition-all"></div>
               <div className="bg-emerald-100 dark:bg-emerald-900/40 p-2 rounded-full mr-4 ml-2">
                 <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
               </div>
               <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Use <code className="font-bold text-emerald-600 dark:text-emerald-400">:.2f</code> for decimal formatting (currency)</span>
            </div>
            <div className="flex items-center bg-white dark:bg-slate-800 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800/30 shadow-sm relative overflow-hidden group">
               <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-400 group-hover:w-2 transition-all"></div>
               <div className="bg-emerald-100 dark:bg-emerald-900/40 p-2 rounded-full mr-4 ml-2">
                 <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
               </div>
               <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Use text alignment (<code className="font-bold text-emerald-600 dark:text-emerald-400">{`<>^`}</code>) for neat CLI reports</span>
            </div>
            <div className="flex items-center bg-white dark:bg-slate-800 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800/30 shadow-sm relative overflow-hidden group">
               <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-400 group-hover:w-2 transition-all"></div>
               <div className="bg-emerald-100 dark:bg-emerald-900/40 p-2 rounded-full mr-4 ml-2">
                 <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
               </div>
               <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Do not clutter strings with complex math blocks</span>
            </div>
          </div>
         </div>
      </section>

    </div>
  );
};

export default PythonStringFormatting;