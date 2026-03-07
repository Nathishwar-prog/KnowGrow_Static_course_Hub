import React, { useState } from 'react';
import { 
  Search, Terminal, Check, Copy, Binary, 
  BookOpen, AlertCircle, CheckCircle2, Code,
  Lightbulb, FileSearch, ShieldAlert,
  Target, Fingerprint, TextCursor, FileWarning
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
                    line.includes('import ') || line.includes('if ') || line.includes('else:') ? 'text-rose-400 font-bold' : 
                    line.includes('re.') || line.includes('print') ? 'text-blue-400' : 
                    line.includes('"') || line.includes('r"') ? 'text-amber-300' :
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

const PythonRegEx: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'patterns' | 'realworld'>('basics');

  const runDemo = (action: string) => {
    let codeStr = '';

    switch (action) {
      case 'search':
        codeStr = `>>> import re\n>>> text = "I love learning Python programming"\n>>> result = re.search("Python", text)\n>>> print(result)\n<re.Match object; span=(16, 22), match='Python'>`;
        break;
      case 'findall':
        codeStr = `>>> import re\n>>> text = "Python is powerful. Python is easy."\n>>> print(re.findall("Python", text))\n['Python', 'Python']`;
        break;
      case 'split':
        codeStr = `>>> import re\n>>> text = "apple,banana,orange"\n>>> print(re.split(",", text))\n['apple', 'banana', 'orange']`;
        break;
      case 'sub':
        codeStr = `>>> import re\n>>> text = "I love Java"\n>>> print(re.sub("Java", "Python", text))\nI love Python`;
        break;
      case 'characterset':
        codeStr = `>>> import re\n>>> text = "cat bat rat mat"\n>>> print(re.findall("[cbr]at", text))\n['cat', 'bat', 'rat']`;
        break;
      case 'find_numbers':
        codeStr = `>>> import re\n>>> text = "Order number is 2456"\n>>> print(re.findall("\\d", text))\n['2', '4', '5', '6']`;
        break;
      case 'email':
        codeStr = `>>> import re\n>>> email = "user@gmail.com"\n>>> pattern = r"\\w+@\\w+\\.\\w+"\n>>> result = re.search(pattern, email)\n>>> if result:\n...     print("Valid Email")\n... else:\n...     print("Invalid Email")\nValid Email`;
        break;
      case 'phone':
        codeStr = `>>> import re\n>>> text = "Call me at 9876543210"\n>>> print(re.findall("\\d{10}", text))\n['9876543210']`;
        break;
    }

    setConsoleOutput(codeStr.split('\n'));
  };

  const resetConsole = () => setConsoleOutput([]);

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-900 min-h-screen font-sans text-slate-800 dark:text-slate-200">
      
      {/* 1. Header Area */}
      <header className="max-w-4xl mx-auto text-center mb-16 pt-8">
        <div className="inline-flex items-center justify-center p-4 bg-fuchsia-100 dark:bg-fuchsia-900/30 rounded-2xl mb-6 shadow-sm border border-fuchsia-200 dark:border-fuchsia-800/50">
          <Fingerprint className="w-10 h-10 text-fuchsia-600 dark:text-fuchsia-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Python RegEx (Regular Expressions)
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Master the <code className="font-mono text-fuchsia-600 dark:text-fuchsia-400 bg-fuchsia-50 dark:bg-fuchsia-900/30 px-2 py-1 rounded">re</code> module. RegEx is a powerful tool used to search, match, and manipulate complex text patterns safely and efficiently.
        </p>
      </header>

      {/* 2. Intro & Importing */}
      <section className="max-w-6xl mx-auto mb-16 grid md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 text-fuchsia-500 mr-3" />
            <h2 className="text-2xl font-bold">1️⃣ What is RegEx?</h2>
          </div>
          <p className="mb-6 text-slate-600 dark:text-slate-300">
            A <strong>Regular Expression</strong> is a sequence of characters that defines a specific search pattern. It is incredibly powerful when working with:
          </p>

          <div className="grid grid-cols-2 gap-3 mb-6">
            {[
              { label: 'Text processing', icon: <TextCursor className="w-4 h-4 text-blue-500" /> },
              { label: 'Data validation', icon: <ShieldAlert className="w-4 h-4 text-emerald-500" /> },
              { label: 'Pattern Searching', icon: <Search className="w-4 h-4 text-amber-500" /> },
              { label: 'Data Extraction', icon: <Binary className="w-4 h-4 text-purple-500" /> },
            ].map((item, i) => (
              <div key={i} className="flex items-center bg-slate-50 dark:bg-slate-900 px-3 py-2.5 rounded-lg border border-slate-100 dark:border-slate-800 text-sm font-bold text-slate-700 dark:text-slate-300">
                <span className="mr-2 bg-white dark:bg-slate-800 p-1 rounded-md border border-slate-200 dark:border-slate-700 shadow-sm">{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>

          <div className="bg-fuchsia-50 dark:bg-fuchsia-900/10 p-5 rounded-xl border border-fuchsia-100 dark:border-fuchsia-800/30">
            <h4 className="font-bold text-fuchsia-900 dark:text-fuchsia-300 mb-1 flex items-center"><Target className="w-4 h-4 mr-1.5" /> 2️⃣ The `re` module</h4>
            <p className="text-sm text-fuchsia-800 dark:text-fuchsia-200 mb-3">
              Before using any RegEx function, you MUST import the built-in module.
            </p>
            <code className="font-mono text-fuchsia-600 dark:text-fuchsia-400 font-bold block bg-white dark:bg-slate-900 p-2 rounded border border-fuchsia-200 dark:border-fuchsia-800/50">
              <span className="text-rose-500">import</span> re
            </code>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-6">
            <FileSearch className="w-6 h-6 text-blue-500 mr-3" />
            <h2 className="text-2xl font-bold">4️⃣ Built-in RegEx Functions</h2>
          </div>
          
          <div className="space-y-4">
            {[
              { func: 're.search()', desc: 'Finds the FIRST match anywhere in the string.', color: 'blue' },
              { func: 're.findall()', desc: 'Returns ALL matches as a list of strings.', color: 'emerald' },
              { func: 're.split()', desc: 'Splits the string using the pattern as a delimiter.', color: 'amber' },
              { func: 're.sub()', desc: 'Replaces the matched pattern with another text.', color: 'purple' },
            ].map((item, i) => (
              <div key={i} className={`flex items-start p-4 rounded-xl border border-${item.color}-200 dark:border-${item.color}-900/30 bg-${item.color}-50 dark:bg-slate-900/50 hover:border-${item.color}-400 transition-colors`}>
                <div className={`bg-${item.color}-100 dark:bg-${item.color}-900/40 text-${item.color}-700 dark:text-${item.color}-400 px-3 py-1 rounded-md font-mono font-bold text-sm mr-4 mt-0.5 shadow-sm whitespace-nowrap`}>
                  {item.func}
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 pt-1 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Interactive RegEx Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center">
            <Terminal className="w-8 h-8 mr-3 text-fuchsia-500" />
            Interactive Pattern Lab
          </h2>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setActiveTab('basics')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm ${activeTab === 'basics' ? 'bg-fuchsia-600 text-white shadow-fuchsia-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              Functions (3,5-7)
            </button>
            <button
              onClick={() => setActiveTab('patterns')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm ${activeTab === 'patterns' ? 'bg-fuchsia-600 text-white shadow-fuchsia-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              Patterns (9-10)
            </button>
            <button
              onClick={() => setActiveTab('realworld')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm ${activeTab === 'realworld' ? 'bg-fuchsia-600 text-white shadow-fuchsia-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              Real World (11-12)
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
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">Basic Functional Examples</h3>
                  
                  <button onClick={() => runDemo('search')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-blue-300 dark:hover:border-blue-700 transition-colors relative shadow-sm">
                      <div className="absolute top-4 right-4 text-xs font-bold text-blue-500 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN</div>
                      <h4 className="font-bold text-sm text-blue-600 dark:text-blue-400 mb-1 flex items-center">3️⃣ re.search()</h4>
                      <p className="text-xs text-slate-500 mb-2">Returns a Match object if found, identifying the span.</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
<span className="text-rose-500 font-bold">import</span> re<br/>
text = <span className="text-amber-500">"I love learning Python programming"</span><br/>
<span className="text-blue-500">print</span>(re.<span className="text-blue-500 font-bold">search</span>(<span className="text-amber-500">"Python"</span>, text))
                      </pre>
                    </div>
                  </button>

                  <button onClick={() => runDemo('findall')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors relative shadow-sm">
                      <div className="absolute top-4 right-4 text-xs font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-1 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN</div>
                      <h4 className="font-bold text-sm text-emerald-600 dark:text-emerald-400 mb-1 flex items-center">5️⃣ re.findall()</h4>
                      <p className="text-xs text-slate-500 mb-2">Returns all occurrences as a list.</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
text = <span className="text-amber-500">"Python is powerful. Python is easy."</span><br/>
<span className="text-blue-500">print</span>(re.<span className="text-blue-500 font-bold">findall</span>(<span className="text-amber-500">"Python"</span>, text))
                      </pre>
                    </div>
                  </button>

                  <div className="grid grid-cols-2 gap-4">
                     <button onClick={() => runDemo('split')} className="w-full text-left group">
                        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-3 sm:p-4 hover:border-amber-300 dark:hover:border-amber-700 transition-colors relative shadow-sm h-full">
                           <h4 className="font-bold text-sm text-amber-600 dark:text-amber-400 mb-1">6️⃣ re.split()</h4>
                           <pre className="font-mono text-[10px] sm:text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-2 sm:p-3 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-hidden">
text = <span className="text-amber-500">"a,b,c"</span><br/>
<span className="text-blue-500">print</span>(re.<span className="text-blue-500 font-bold">split</span>(<span className="text-amber-500">","</span>, text))
                           </pre>
                        </div>
                     </button>
                     <button onClick={() => runDemo('sub')} className="w-full text-left group">
                        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-3 sm:p-4 hover:border-purple-300 dark:hover:border-purple-700 transition-colors relative shadow-sm h-full">
                           <h4 className="font-bold text-sm text-purple-600 dark:text-purple-400 mb-1">7️⃣ re.sub()</h4>
                           <pre className="font-mono text-[10px] sm:text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-2 sm:p-3 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-hidden">
t = <span className="text-amber-500">"I love Java"</span><br/>
<span className="text-blue-500">print</span>(re.<span className="text-blue-500 font-bold">sub</span>(<span className="text-amber-500">"Java"</span>,<span className="text-amber-500">"Py"</span>,t))
                           </pre>
                        </div>
                     </button>
                  </div>

                </div>
              )}

              {activeTab === 'patterns' && (
                <div className="animate-fade-in space-y-6">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                    Pattern Demonstrations
                  </h3>
                  
                  <button onClick={() => runDemo('characterset')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors relative mb-4">
                      <div className="absolute top-4 right-4 text-xs font-bold text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-1 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN</div>
                      <h4 className="font-bold text-sm text-indigo-600 dark:text-indigo-400 mb-1">9️⃣ Character Sets `[]`</h4>
                      <p className="text-xs text-slate-500 mb-3"><code className="font-bold bg-white dark:bg-slate-800 px-1 rounded">[cbr]</code> matches "c" OR "b" OR "r" followed by "at".</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
text = <span className="text-amber-500">"cat bat rat mat"</span><br/>
<span className="text-blue-500">print</span>(re.<span className="text-blue-500 font-bold">findall</span>(<span className="text-amber-500">"[cbr]at"</span>, text))
                      </pre>
                    </div>
                  </button>

                  <button onClick={() => runDemo('find_numbers')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors relative mb-4">
                      <div className="absolute top-4 right-4 text-xs font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-1 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN</div>
                      <h4 className="font-bold text-sm text-emerald-600 dark:text-emerald-400 mb-1">🔟 Special Sequence `\d`</h4>
                      <p className="text-xs text-slate-500 mb-3"><code className="font-bold bg-white dark:bg-slate-800 px-1 rounded">\d</code> extracts only the integer digits from a string.</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
text = <span className="text-amber-500">"Order number is 2456"</span><br/>
<span className="text-blue-500">print</span>(re.<span className="text-blue-500 font-bold">findall</span>(<span className="text-amber-500">r"\d"</span>, text))
                      </pre>
                    </div>
                  </button>
                  
                </div>
              )}

              {activeTab === 'realworld' && (
                <div className="animate-fade-in space-y-6">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                    Real-World Form Validations
                  </h3>
                  
                  <button onClick={() => runDemo('email')} className="w-full text-left group">
                    <div className="bg-fuchsia-50 dark:bg-fuchsia-900/10 border-2 border-fuchsia-200 dark:border-fuchsia-800/50 rounded-xl p-4 hover:border-fuchsia-400 dark:hover:border-fuchsia-600 transition-colors relative shadow-sm">
                      <div className="absolute top-4 right-4 text-xs font-bold text-fuchsia-500 bg-white dark:bg-fuchsia-900/40 px-2 py-1 rounded opacity-80 group-hover:opacity-100 transition-opacity shadow-sm">RUN DEMO</div>
                      <h4 className="font-bold text-sm text-fuchsia-700 dark:text-fuchsia-400 mb-2 flex items-center">1️⃣1️⃣ Email Validation Logic</h4>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white/60 dark:bg-slate-950/50 p-3 rounded-lg border border-fuchsia-100 dark:border-fuchsia-800/30">
email = <span className="text-amber-500">"user@gmail.com"</span><br/>
pattern = <span className="text-amber-500 font-bold">r"\w+@\w+\.\w+"</span><br/>
<span className="text-slate-500 italic"># \w+ means 'one or more word characters'</span><br/><br/>
<span className="text-rose-500 font-bold">if</span> re.<span className="text-blue-500 font-bold">search</span>(pattern, email):<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-500">print</span>(<span className="text-amber-500">"Valid Email"</span>)<br/>
<span className="text-rose-500 font-bold">else:</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-500">print</span>(<span className="text-amber-500">"Invalid Email"</span>)
                      </pre>
                    </div>
                  </button>

                  <button onClick={() => runDemo('phone')} className="w-full text-left group mt-4">
                    <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800/50 rounded-xl p-4 hover:border-blue-400 dark:hover:border-blue-600 transition-colors relative shadow-sm">
                      <div className="absolute top-4 right-4 text-xs font-bold text-blue-500 bg-white dark:bg-blue-900/40 px-2 py-1 rounded opacity-80 group-hover:opacity-100 transition-opacity shadow-sm">RUN DEMO</div>
                      <h4 className="font-bold text-sm text-blue-700 dark:text-blue-400 mb-2 flex items-center">1️⃣2️⃣ Extract exactly 10-digit Phone Numbers</h4>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white/60 dark:bg-slate-950/50 p-3 rounded-lg border border-blue-100 dark:border-blue-800/30">
text = <span className="text-amber-500">"Call me at 9876543210"</span><br/><br/>
<span className="text-slate-500 italic"># \d implies digit, {'{10}'} implies exactly 10</span><br/>
<span className="text-blue-500">print</span>(re.<span className="text-blue-500 font-bold">findall</span>(<span className="text-amber-500 font-bold">r"\d{'{10}'}"</span>, text))
                      </pre>
                    </div>
                  </button>
                </div>
              )}

            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-[#1e1e1e] rounded-2xl p-6 border border-slate-800 h-full min-h-[500px] shadow-2xl relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/10 rounded-full blur-3xl"></div>
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <h3 className="font-bold text-slate-300 uppercase text-xs tracking-wider flex items-center">
                    <Terminal className="w-4 h-4 mr-2 text-fuchsia-400" />
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
                      <span>Run a Regex demo on the left...</span>
                    </div>
                  ) : (
                    consoleOutput.map((line, i) => (
                      <div key={i} className={`mb-1.5 animate-fade-in ${
                          line.startsWith('>>>') || line.startsWith('...') ? 'text-slate-400 font-medium' :
                          line.startsWith('<re.Match') ? 'text-blue-300' :
                          line.startsWith('[') ? 'text-emerald-300 font-bold' :
                          line.includes('Valid Email') ? 'text-emerald-400 font-bold' :
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

      {/* 4. Cheat Sheet Tables Block */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        
        {/* Table 1: Common Patterns */}
        <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden h-full">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center border-b border-slate-100 dark:border-slate-700 pb-4">
            <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-fuchsia-500 mr-2 sm:mr-3 shrink-0" />
            8️⃣ Common RegEx Patterns
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-900 leading-normal text-slate-500 uppercase text-xs font-bold border-b border-slate-200 dark:border-slate-700">
                  <th className="px-4 py-3">Pattern</th>
                  <th className="px-4 py-3">Meaning</th>
                </tr>
              </thead>
              <tbody className="text-sm font-medium">
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="px-4 py-3"><code className="font-mono font-bold text-fuchsia-600 dark:text-fuchsia-400 bg-fuchsia-50 dark:bg-fuchsia-900/20 px-2 py-0.5 rounded text-base">.</code></td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Any single character</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="px-4 py-3 flex gap-2">
                     <code className="font-mono font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-0.5 rounded text-base">^</code>
                     <code className="font-mono font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-0.5 rounded text-base">$</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Starts with / Ends with</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="px-4 py-3 flex gap-2">
                     <code className="font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-0.5 rounded text-base">*</code>
                     <code className="font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-0.5 rounded text-base">+</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Zero or more / One or more occurrences</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="px-4 py-3"><code className="font-mono font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 px-2 py-0.5 rounded text-base">?</code></td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Zero or one occurrence (Optional)</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="px-4 py-3"><code className="font-mono font-bold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 px-2 py-0.5 rounded text-base">{`{}`}</code></td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Specific number of repetitions (e.g., <code className="font-bold bg-slate-100 dark:bg-slate-700 px-1 rounded">{`{10}`}</code>)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3"><code className="font-mono font-bold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-900/20 px-2 py-0.5 rounded text-base">[]</code></td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Set of characters OR match</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Table 2: Special Sequences */}
        <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden h-full">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center border-b border-slate-100 dark:border-slate-700 pb-4">
            <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500 mr-2 sm:mr-3 shrink-0" />
            🔟 Special Sequences
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-900 leading-normal text-slate-500 uppercase text-xs font-bold border-b border-slate-200 dark:border-slate-700">
                  <th className="px-4 py-3 shrink-0">Pattern</th>
                  <th className="px-4 py-3">Description</th>
                </tr>
              </thead>
              <tbody className="text-sm font-medium">
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="px-4 py-3 flex gap-2">
                     <code className="font-mono font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-0.5 rounded">\d</code>
                     <code className="font-mono font-bold text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-800 px-2 py-0.5 rounded">\D</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300"><strong className="text-blue-500">Digit</strong> (0-9) vs Non-digit</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="px-4 py-3 flex gap-2">
                     <code className="font-mono font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 px-2 py-0.5 rounded">\w</code>
                     <code className="font-mono font-bold text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-800 px-2 py-0.5 rounded">\W</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300"><strong className="text-amber-500">Word</strong> character vs Non-word</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                   <td className="px-4 py-3 flex gap-2">
                     <code className="font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-0.5 rounded">\s</code>
                     <code className="font-mono font-bold text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-800 px-2 py-0.5 rounded">\S</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300"><strong className="text-emerald-500">Whitespace</strong> vs Non-whitespace</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 bg-slate-50 dark:bg-slate-900/80 p-4 rounded-xl border border-slate-200 dark:border-slate-700 flex items-start">
             <AlertCircle className="w-5 h-5 text-fuchsia-500 mr-3 shrink-0 mt-0.5"/>
             <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-bold">
                 Capital letters signify the OPPOSITE (e.g. \D = Anything that is NOT a digit)
             </p>
          </div>
        </div>
      </section>

       {/* 5. Warning About Raw Strings */}
       <section className="max-w-4xl mx-auto mb-16">
        <div className="bg-gradient-to-r from-rose-50 to-red-50 dark:from-rose-900/10 dark:to-red-900/10 border-2 border-rose-200 dark:border-rose-800/50 p-6 sm:p-8 rounded-3xl shadow-sm relative overflow-hidden">
           <FileWarning className="absolute -bottom-6 -right-6 w-32 h-32 text-rose-500/10 rotate-12" />
           <h2 className="text-2xl font-bold text-rose-900 dark:text-rose-400 mb-4 flex items-center relative z-10">
            1️⃣3️⃣ Always use Raw Strings (`r""`)
          </h2>
          <p className="text-slate-700 dark:text-slate-300 mb-6 font-medium relative z-10">
             Because <code className="font-bold bg-white dark:bg-slate-800 px-1 rounded">\</code> is an escape character in standard Python strings, you should ALWAYS prefix your RegEx patterns with an <code className="font-bold text-rose-600 dark:text-rose-400 font-mono text-lg">r</code> (standing for "raw"). This prevents Python from improperly interpreting characters like `\n` or `\d`.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 relative z-10">
             <div className="bg-rose-100 dark:bg-rose-900/30 p-4 rounded-xl border border-rose-200 dark:border-rose-800 shadow-sm relative">
                <div className="absolute top-2 right-2 text-xs font-bold bg-rose-200 dark:bg-rose-800/80 text-rose-800 dark:text-rose-200 px-2 py-0.5 rounded">AVOID</div>
                <code className="font-mono font-bold block mt-4 text-center text-slate-800 dark:text-slate-200">pattern = <span className="text-rose-600 dark:text-rose-400 text-lg">"</span>\\d+<span className="text-rose-600 dark:text-rose-400 text-lg">"</span></code>
             </div>
             <div className="bg-emerald-100 dark:bg-emerald-900/30 p-4 rounded-xl border border-emerald-200 dark:border-emerald-800 shadow-sm relative">
                <div className="absolute top-2 right-2 text-xs font-bold bg-emerald-200 dark:bg-emerald-800/80 text-emerald-800 dark:text-emerald-200 px-2 py-0.5 rounded">PREFER</div>
                <code className="font-mono font-bold block mt-4 text-center text-slate-800 dark:text-slate-200">pattern = <span className="text-emerald-600 dark:text-emerald-400 text-lg">r"</span>\d+<span className="text-emerald-600 dark:text-emerald-400 text-lg">"</span></code>
             </div>
          </div>
        </div>
      </section>

      {/* 6. Developer Recommendations */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-r from-fuchsia-800 to-indigo-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-8 flex items-center relative z-10">
            <Lightbulb className="w-8 h-8 mr-3 text-yellow-300 shrink-0" />
            1️⃣4️⃣ Tips & Tricks (From a Python Dev)
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
              <h3 className="font-bold text-lg mb-3">1. Use Raw Strings</h3>
              <p className="text-sm text-fuchsia-100">Never write double backslashes <code className="font-mono bg-black/30 px-1 rounded">"\\d+"</code>. Always use raw syntax <code className="font-mono bg-black/30 px-1 rounded">r"\d+"</code>. It's much cleaner and easier to read.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
              <h3 className="font-bold text-lg mb-3">2. Test RegEx First</h3>
              <p className="text-sm text-fuchsia-100 mb-3">Before writing complex Python code, test your patterns online:</p>
              <ul className="text-sm font-bold font-mono space-y-1 text-emerald-300 pl-2">
                 <li>👉 regex101.com</li>
                 <li>👉 regexr.com</li>
              </ul>
              <p className="text-xs text-white/50 mt-2">This saves hours of debugging time!</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
              <h3 className="font-bold text-lg mb-3">3. Avoid Over-Complex RegEx</h3>
              <p className="text-sm text-fuchsia-100 mb-3">Massive, illegible patterns reduce readability. If a pattern looks like a password, break the logic into multiple Python steps or <code className="font-bold">if/else</code> conditions instead.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Best Practices Checklist */}
      <section className="max-w-4xl mx-auto pb-16">
        <div className="bg-emerald-50 dark:bg-slate-900 border border-emerald-200 dark:border-emerald-800 p-8 rounded-3xl shadow-sm relative">
           <ShieldAlert className="absolute top-6 right-6 w-12 h-12 text-emerald-500/20" />
           <h2 className="text-2xl font-bold text-emerald-900 dark:text-emerald-400 mb-6 flex items-center">
            1️⃣5️⃣ Best Practices Summary
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center bg-white dark:bg-slate-800 p-4 rounded-xl border border-emerald-100 dark:border-slate-700 shadow-sm">
               <div className="bg-emerald-100 dark:bg-emerald-900/40 p-2 rounded-full mr-4">
                 <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
               </div>
               <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Must import <code className="font-mono text-fuchsia-500 bg-slate-100 dark:bg-slate-900 px-1 rounded">re</code> module first</span>
            </div>
            <div className="flex items-center bg-white dark:bg-slate-800 p-4 rounded-xl border border-emerald-100 dark:border-slate-700 shadow-sm">
               <div className="bg-emerald-100 dark:bg-emerald-900/40 p-2 rounded-full mr-4">
                 <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
               </div>
               <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Use raw strings <code className="font-mono text-fuchsia-500 bg-slate-100 dark:bg-slate-900 px-1 rounded">r""</code></span>
            </div>
            <div className="flex items-center bg-white dark:bg-slate-800 p-4 rounded-xl border border-emerald-100 dark:border-slate-700 shadow-sm">
               <div className="bg-emerald-100 dark:bg-emerald-900/40 p-2 rounded-full mr-4">
                 <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
               </div>
               <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Keep patterns readable & simple</span>
            </div>
            <div className="flex items-center bg-white dark:bg-slate-800 p-4 rounded-xl border border-emerald-100 dark:border-slate-700 shadow-sm">
               <div className="bg-emerald-100 dark:bg-emerald-900/40 p-2 rounded-full mr-4">
                 <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
               </div>
               <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Test patterns before production</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PythonRegEx;