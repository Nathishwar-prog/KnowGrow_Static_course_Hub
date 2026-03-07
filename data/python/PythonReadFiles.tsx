import React, { useState } from 'react';
import { 
  FileText, FolderOpen, Terminal, Check, Copy, FileSearch, 
  BookOpen, AlertCircle, CheckCircle2, Code,
  Lightbulb, ShieldCheck, XOctagon, Target,
  RefreshCw, FileOutput, Server, Database, AlignLeft, Play
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
                <div key={index} className={`${highlightLines.includes(index) ? 'bg-neutral-800/80 -mx-4 px-4 py-0.5 border-l-2 border-amber-500' : ''}`}>
                  <span className={isComment ? 'text-neutral-500 italic' : 
                    line.includes('for ') || line.includes('in ') || line.includes('with ') || line.includes('as ') ? 'text-rose-400 font-bold' : 
                    line.includes('print') || line.includes('open') || line.includes('close') || line.includes('read') || line.includes('readline') || line.includes('readlines') || line.includes('strip') ? 'text-blue-400' : 
                    line.includes('"') || line.includes("'") ? 'text-amber-300' :
                    line.match(/\b\d+\b/) ? 'text-emerald-400' :
                    line.includes('=') || line.includes('+') ? 'text-neutral-300' : 'text-neutral-200'}>
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

const PythonReadFiles: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'read_all' | 'read_parts' | 'read_lines' | 'with_statement'>('read_all');

  const runDemo = (action: string) => {
    let codeStr = '';

    switch (action) {
      case 'read_all':
        codeStr = `>>> file = open("demo.txt", "r")\n>>> print(file.read())\nHello Python\nWelcome to File Handling\nLearning Python is fun\n>>> file.close()`;
        break;
      case 'read_5':
        codeStr = `>>> file = open("demo.txt", "r")\n>>> print(file.read(5))\nHello\n>>> file.close()`;
        break;
      case 'readline':
        codeStr = `>>> file = open("demo.txt", "r")\n>>> print(file.readline())\nHello Python\n\n>>> print(file.readline())\nWelcome to File Handling\n\n>>> file.close()`;
        break;
      case 'loop':
        codeStr = `>>> file = open("demo.txt", "r")\n>>> for line in file:\n...     print(line.strip())\nHello Python\nWelcome to File Handling\nLearning Python is fun\n>>> file.close()`;
        break;
      case 'with_statement':
        codeStr = `>>> with open("demo.txt", "r") as file:\n...     print(file.read())\nHello Python\nWelcome to File Handling\nLearning Python is fun\n>>> # File is automatically closed here!`;
        break;
      case 'count_lines':
        codeStr = `>>> with open("demo.txt", "r") as file:\n...     count = 0\n...     for line in file:\n...         count += 1\n>>> print("Total lines:", count)\nTotal lines: 3`;
        break;
      case 'readlines_list':
        codeStr = `>>> with open("demo.txt", "r") as file:\n...     lines = file.readlines()\n...     print(lines)\n['Hello Python\\n', 'Welcome to File Handling\\n', 'Learning Python is fun']`;
        break;
    }

    setConsoleOutput(codeStr.split('\n'));
  };

  const resetConsole = () => setConsoleOutput([]);

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-900 min-h-screen font-sans text-slate-800 dark:text-slate-200">
      
      {/* 1. Header Area border-amber-200 dark:border-amber-800/50 */}
      <header className="max-w-4xl mx-auto text-center mb-16 pt-8">
        <div className="inline-flex items-center justify-center p-4 bg-amber-100 dark:bg-amber-900/30 rounded-2xl mb-6 shadow-sm border border-amber-200 dark:border-amber-800/50">
          <FolderOpen className="w-10 h-10 text-amber-600 dark:text-amber-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Python Read Files
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          In real-world applications, programs need to read data files. Master Python's file handling functions to safely and efficiently access information stored in text, CSV, and log files. 
        </p>
      </header>

      {/* 2. Intro & Opening */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 text-amber-500 mr-3" />
            <h2 className="text-2xl font-bold">1️⃣ What is File Handling?</h2>
          </div>
          <p className="mb-6 text-slate-600 dark:text-slate-300 leading-relaxed">
            Reading files in Python means accessing and retrieving data stored inside a file using Python’s built-in file handling functions. Programs often read a variety of files:
          </p>

          <div className="grid grid-cols-2 gap-3 mb-6">
            {[
              { label: 'Text files', ext: '.txt', color: 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800' },
              { label: 'CSV data', ext: '.csv', color: 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800' },
              { label: 'JSON APIs', ext: '.json', color: 'bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800' },
              { label: 'Log & Config', ext: '.log/cfg', color: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700' },
            ].map((f, i) => (
              <div key={i} className={`flex items-center justify-between px-3 py-2 rounded-lg border ${f.color}`}>
                <span className="text-sm font-bold">{f.label}</span>
                <span className="text-xs font-mono opacity-80">{f.ext}</span>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/10 p-5 rounded-xl border border-amber-100 dark:border-amber-800/30 flex items-start">
             <Target className="w-5 h-5 text-amber-600 dark:text-amber-400 mr-3 shrink-0 mt-0.5" />
             <p className="text-sm text-amber-800 dark:text-amber-200 font-medium">
                Python mainly uses the built-in <code className="font-bold font-mono bg-white dark:bg-black/30 px-1 py-0.5 rounded">open()</code> function to read files efficiently.
             </p>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col justify-between">
          <div>
            <div className="flex items-center mb-4">
              <FileSearch className="w-6 h-6 text-blue-500 mr-3" />
              <h2 className="text-2xl font-bold">2️⃣ Opening a File</h2>
            </div>
            <p className="text-slate-600 dark:text-slate-300 mb-4">Before reading a file, we must open it using the syntax:</p>
            
            <code className="block font-mono text-center text-lg text-blue-600 dark:text-blue-400 font-bold bg-slate-50 dark:bg-slate-900 py-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 shadow-inner">
              open(<span className="text-emerald-500">filename</span>, <span className="text-rose-500">mode</span>)
            </code>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 px-2 py-1 rounded font-mono font-bold text-sm mr-4 mt-0.5 shadow-sm border border-emerald-200 dark:border-emerald-800 border-b-2">filename</div>
                <p className="text-sm text-slate-700 dark:text-slate-300 pt-1">The name or relative/absolute path of the file.</p>
              </div>
              <div className="flex items-start">
                <div className="bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300 px-2 py-1 rounded font-mono font-bold text-sm mr-4 mt-0.5 shadow-sm border border-rose-200 dark:border-rose-800 border-b-2">mode</div>
                <div className="text-sm text-slate-700 dark:text-slate-300 pt-1">
                  Defines how the file should be opened. For reading files, we use:<br/>
                  <code className="font-bold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-transparent px-1 rounded inline-block mt-2">"r" → Read mode (default)</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive File Reading Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center">
            <Server className="w-8 h-8 mr-3 text-amber-500" />
            Interactive File Lab
          </h2>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setActiveTab('read_all')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm ${activeTab === 'read_all' ? 'bg-amber-500 text-white shadow-amber-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              3. Read All
            </button>
            <button
              onClick={() => setActiveTab('read_parts')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm ${activeTab === 'read_parts' ? 'bg-amber-500 text-white shadow-amber-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              4. Read Parts
            </button>
            <button
              onClick={() => setActiveTab('read_lines')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm ${activeTab === 'read_lines' ? 'bg-amber-500 text-white shadow-amber-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              5. Read Lines
            </button>
            <button
              onClick={() => setActiveTab('with_statement')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'with_statement' ? 'bg-amber-500 text-white shadow-amber-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <ShieldCheck className="w-4 h-4 mr-1"/> 8. `with` Statement
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
            
            {/* Simulated file system context */}
            <div className="bg-slate-800 rounded-xl p-4 border border-slate-700 text-slate-300 flex items-start shadow-inner">
               <FileText className="w-8 h-8 text-slate-400 mr-3 shrink-0" />
               <div>
                  <h4 className="font-bold text-sm text-slate-200 flex items-center">Example File Content <span className="ml-2 text-xs font-mono bg-slate-700 px-2 py-0.5 rounded text-amber-300">demo.txt</span></h4>
                  <pre className="font-mono text-xs mt-2 text-slate-400 leading-relaxed border-l-2 border-slate-600 pl-3">Hello Python<br/>Welcome to File Handling<br/>Learning Python is fun</pre>
               </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 min-h-[460px] overflow-y-auto">
              
              {activeTab === 'read_all' && (
                <div className="animate-fade-in space-y-5">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">3️⃣ & 7️⃣ Basic File Reading & Closing</h3>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-xl border border-blue-100 dark:border-blue-800/30 mb-4 text-sm text-blue-800 dark:text-blue-300">
                    Use <code className="font-bold">open()</code> to open it, <code className="font-bold">read()</code> to extract the content, and <strong>ALWAYS</strong> use <code className="font-bold">close()</code> when you are done!
                  </div>

                  <button onClick={() => runDemo('read_all')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-amber-300 dark:hover:border-amber-700 transition-colors relative shadow-sm">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-amber-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-amber-600 dark:text-amber-400 mb-2 flex items-center">Read Entire File</h4>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
file = <span className="text-blue-500 font-bold">open</span>(<span className="text-amber-500">"demo.txt"</span>, <span className="text-amber-500">"r"</span>)<br/>
<span className="text-blue-500">print</span>(file.<span className="text-blue-500 font-bold">read</span>())<br/>
file.<span className="text-rose-500 font-bold">close</span>()
                      </pre>
                    </div>
                  </button>

                  <div className="bg-rose-50 dark:bg-rose-900/10 p-4 rounded-xl border border-rose-100 dark:border-rose-800/30">
                    <h4 className="font-bold text-rose-800 dark:text-rose-300 text-sm mb-2 flex items-center">
                       <ShieldCheck className="w-4 h-4 mr-1.5" /> Why Closing is Important
                    </h4>
                    <ul className="text-sm text-rose-700 dark:text-rose-200/80 space-y-1 ml-6 list-disc">
                       <li>Frees system resources</li>
                       <li>Prevents memory leaks</li>
                       <li>Avoids file corruption</li>
                    </ul>
                  </div>

                </div>
              )}

              {activeTab === 'read_parts' && (
                <div className="animate-fade-in space-y-6">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                    4️⃣ Reading Specific Characters
                  </h3>
                  
                  <button onClick={() => runDemo('read_5')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors relative mb-4">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-emerald-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-emerald-600 dark:text-emerald-400 mb-1">Read Only First 5 Characters</h4>
                      <p className="text-xs text-slate-500 mb-3">You can pass an integer to <code className="font-mono bg-slate-200 dark:bg-slate-800 px-1 rounded">read(n)</code>.</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
file = <span className="text-blue-500 font-bold">open</span>(<span className="text-amber-500">"demo.txt"</span>, <span className="text-amber-500">"r"</span>)<br/>
<span className="text-blue-500">print</span>(file.<span className="text-blue-500 font-bold">read</span>(<span className="text-emerald-500">5</span>))<br/>
file.<span className="text-rose-500 font-bold">close</span>()
                      </pre>
                    </div>
                  </button>

                  <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
                     <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center"><Terminal className="w-4 h-4 mr-2" /> Visualization</h4>
                     <div className="font-mono text-sm">
                        <div className="text-slate-500 mb-1">File Content:</div>
                        <div className="bg-slate-100 dark:bg-slate-800 p-2 rounded text-slate-700 dark:text-slate-300 mb-3 font-bold border-l-2 border-slate-300 dark:border-slate-600">
                           <span className="text-emerald-500 dark:text-emerald-400">Hello</span> Python
                        </div>
                        <div className="text-slate-500 mb-1">Reading 5 characters:</div>
                        <div className="flex gap-1 mb-2">
                           {['H','e','l','l','o'].map((char, i) => (
                              <div key={i} className="bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 w-8 h-8 flex items-center justify-center rounded border border-emerald-200 dark:border-emerald-800 font-bold">
                                 {char}
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
                  
                </div>
              )}

              {activeTab === 'read_lines' && (
                <div className="animate-fade-in space-y-5">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">5️⃣ & 6️⃣ Reading by Line</h3>
                  
                  <button onClick={() => runDemo('readline')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors relative">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-indigo-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-indigo-600 dark:text-indigo-400 mb-1 flex items-center"><AlignLeft className="w-4 h-4 mr-1.5" /> Read One Line (`readline`)</h4>
                      <p className="text-xs text-slate-500 mb-3">Calling it twice reads the first two lines consecutively.</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
file = <span className="text-blue-500 font-bold">open</span>(<span className="text-amber-500">"demo.txt"</span>, <span className="text-amber-500">"r"</span>)<br/>
<span className="text-blue-500">print</span>(file.<span className="text-blue-500 font-bold">readline</span>())<br/>
<span className="text-blue-500">print</span>(file.<span className="text-blue-500 font-bold">readline</span>())<br/>
file.<span className="text-rose-500 font-bold">close</span>()
                      </pre>
                    </div>
                  </button>

                  <button onClick={() => runDemo('loop')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-fuchsia-300 dark:hover:border-fuchsia-700 transition-colors relative shadow-sm">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-fuchsia-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-fuchsia-600 dark:text-fuchsia-400 mb-1 flex items-center"><RefreshCw className="w-4 h-4 mr-1.5" /> Read All Lines via Loop</h4>
                      <p className="text-xs text-slate-500 mb-2 font-medium">✨ Highly Memory Efficient ✨</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
file = <span className="text-blue-500 font-bold">open</span>(<span className="text-amber-500">"demo.txt"</span>, <span className="text-amber-500">"r"</span>)<br/><br/>
<span className="text-rose-500 font-bold">for</span> line <span className="text-rose-500 font-bold">in</span> file:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-500">print</span>(line)<br/><br/>
file.<span className="text-rose-500 font-bold">close</span>()
                      </pre>
                    </div>
                  </button>
                  
                </div>
              )}

              {activeTab === 'with_statement' && (
                <div className="animate-fade-in space-y-6">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                    8️⃣ & 9️⃣ The Recommended Approach
                  </h3>
                  
                  <div className="bg-emerald-50 dark:bg-emerald-900/10 border-2 border-emerald-200 dark:border-emerald-800/50 p-4 rounded-xl relative shadow-sm">
                    <h4 className="font-bold text-emerald-800 dark:text-emerald-400 mb-2 flex items-center"><ShieldCheck className="w-5 h-5 mr-2" /> Context Managers (`with`)</h4>
                    <p className="text-sm text-emerald-700 dark:text-emerald-300 mb-3">
                      This is the Pythonic benchmark. The <code className="font-mono font-bold">with</code> statement creates a context manager that <strong className="uppercase">automatically closes the file</strong> when the block ends—even if an error occurs inside.
                    </p>
                    <ul className="text-xs text-emerald-600 dark:text-emerald-400 space-y-1 mb-4 flex gap-4">
                       <li className="flex items-center"><CheckCircle2 className="w-3 h-3 mr-1"/> Auto-closes</li>
                       <li className="flex items-center"><CheckCircle2 className="w-3 h-3 mr-1"/> Cleaner code</li>
                    </ul>
                    <button onClick={() => runDemo('with_statement')} className="w-full text-left group">
                       <div className="bg-white/60 dark:bg-slate-950/50 p-3 rounded-lg border border-emerald-100 dark:border-emerald-800 hover:border-emerald-300 transition-colors relative">
                          <Play className="absolute top-3 right-3 w-4 h-4 text-emerald-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                          <pre className="font-mono text-xs text-slate-700 dark:text-slate-300">
<span className="text-rose-500 font-bold">with</span> <span className="text-blue-500 font-bold">open</span>(<span className="text-amber-500">"demo.txt"</span>, <span className="text-amber-500">"r"</span>) <span className="text-rose-500 font-bold">as</span> file:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-500">print</span>(file.<span className="text-blue-500 font-bold">read</span>())
                          </pre>
                       </div>
                    </button>
                  </div>

                  <button onClick={() => runDemo('count_lines')} className="w-full text-left group h-full cursor-pointer">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-slate-400 dark:hover:border-slate-600 transition-colors relative">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-slate-400 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300 mb-1 flex items-center">Real-World Application: Count Lines</h4>
                      <pre className="font-mono text-xs sm:text-sm text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-4 rounded-lg border border-slate-100 dark:border-slate-800 mt-2">
<span className="text-rose-500 font-bold">with</span> <span className="text-blue-500 font-bold">open</span>(<span className="text-amber-500">"demo.txt"</span>, <span className="text-amber-500">"r"</span>) <span className="text-rose-500 font-bold">as</span> file:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;count = <span className="text-emerald-500">0</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-rose-500 font-bold">for</span> line <span className="text-rose-500 font-bold">in</span> file:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;count += <span className="text-emerald-500">1</span><br/><br/>
<span className="text-blue-500">print</span>(<span className="text-amber-500">"Total lines:"</span>, count)
                      </pre>
                    </div>
                  </button>
                  
                </div>
              )}


            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-[#1e1e1e] rounded-2xl p-6 border border-slate-800 h-full min-h-[500px] shadow-2xl relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl"></div>
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <h3 className="font-bold text-slate-300 uppercase text-xs tracking-wider flex items-center">
                    <Terminal className="w-4 h-4 mr-2 text-amber-500" />
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
                      <span>Run an example to see output...</span>
                    </div>
                  ) : (
                    consoleOutput.map((line, i) => (
                      <div key={i} className={`mb-1.5 animate-fade-in ${
                          line.startsWith('>>>') || line.startsWith('...') ? 'text-slate-400 font-medium' :
                          line.startsWith('[') ? 'text-emerald-300 font-bold' :
                          line.startsWith('Total') ? 'text-blue-300 font-bold' :
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

      {/* 4. Reading Methods Table & Errors */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden h-full">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center border-b border-slate-100 dark:border-slate-700 pb-4">
            <Database className="w-6 h-6 text-blue-500 mr-3" />
            1️⃣1️⃣ Important Read Methods
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-900 leading-normal text-slate-500 uppercase text-xs font-bold border-b border-slate-200 dark:border-slate-700">
                  <th className="px-4 py-3">Method</th>
                  <th className="px-4 py-3">Description</th>
                </tr>
              </thead>
              <tbody className="text-sm font-medium">
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="px-4 py-3 font-mono font-bold text-blue-600 dark:text-blue-400">read()</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Reads entire file into a giant string.</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="px-4 py-3 font-mono font-bold text-blue-600 dark:text-blue-400">read(n)</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Reads <code className="font-bold">n</code> characters.</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="px-4 py-3 font-mono font-bold text-blue-600 dark:text-blue-400">readline()</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Reads one single line at a time.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono font-bold text-indigo-600 dark:text-indigo-400">readlines()</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Reads all lines and returns a <strong className="text-indigo-500 uppercase">List</strong>.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-800/50 p-4 rounded-xl relative group">
              <h4 className="font-bold text-indigo-800 dark:text-indigo-400 text-sm mb-2 flex items-center justify-between">
                 Example: `readlines()`
                 <button onClick={() => runDemo('readlines_list')} className="text-indigo-500 hover:text-indigo-700 bg-white dark:bg-slate-800 p-1 rounded-md shadow-sm border border-indigo-200 dark:border-indigo-700"><Play className="w-3 h-3"/></button>
              </h4>
              <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900/80 p-3 rounded border border-indigo-100 dark:border-indigo-800/30">
<span className="text-rose-500 font-bold">with</span> <span className="text-blue-500 font-bold">open</span>(<span className="text-amber-500">"demo.txt"</span>, <span className="text-amber-500">"r"</span>) <span className="text-rose-500 font-bold">as</span> file:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;lines = file.<span className="text-indigo-500 font-bold">readlines</span>()<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-500">print</span>(lines)
              </pre>
          </div>
        </div>

        <div className="bg-gradient-to-br from-rose-50 to-red-50 dark:from-rose-900/10 dark:to-red-900/10 p-8 rounded-3xl shadow-sm border border-rose-200 dark:border-rose-800/30 h-full">
          <div className="flex items-center mb-6 border-b border-rose-200 dark:border-rose-800/50 pb-4">
            <XOctagon className="w-8 h-8 text-rose-500 mr-3" />
            <h2 className="text-2xl font-bold text-rose-900 dark:text-rose-400">🔟 Common Beginner Error</h2>
          </div>
          
          <div className="bg-white/60 dark:bg-black/20 p-4 rounded-xl mb-6 border border-rose-100 dark:border-rose-800/50 shadow-sm relative">
            <h4 className="font-bold text-rose-600 dark:text-rose-400 text-sm mb-2 uppercase tracking-wider flex items-center"><Terminal className="w-4 h-4 mr-1.5"/> The Crash</h4>
            <code className="font-mono block text-slate-800 dark:text-slate-200 font-bold bg-white dark:bg-slate-900 p-2 rounded mb-2 border-l-4 border-rose-500">open("data.txt", "r")</code>
            <p className="font-mono text-sm text-rose-600 dark:text-rose-400 font-bold pl-2">❌ FileNotFoundError</p>
          </div>

          <div className="bg-emerald-50 dark:bg-emerald-900/20 p-5 rounded-xl border border-emerald-200 dark:border-emerald-800/50">
             <h4 className="font-bold text-emerald-700 dark:text-emerald-400 text-sm mb-3 uppercase tracking-wider flex items-center"><CheckCircle2 className="w-4 h-4 mr-1.5"/> Solution Checklist</h4>
             <ul className="space-y-2 text-sm text-emerald-800 dark:text-emerald-300 font-medium mb-4">
               <li className="flex items-center"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></div> Ensure file exists</li>
               <li className="flex items-center"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></div> Correct file path</li>
               <li className="flex items-center"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></div> Correct file name</li>
             </ul>

             <div className="bg-white dark:bg-slate-900 p-3 rounded border border-emerald-100 dark:border-emerald-800/30">
                <p className="text-xs font-bold text-slate-500 uppercase mb-1">Use Absolute Path if needed:</p>
                <code className="font-mono text-xs text-blue-600 dark:text-blue-400 block"><span className="text-blue-500 font-bold">open</span>(<span className="text-amber-500">"C:/Users/file.txt"</span>, <span className="text-amber-500">"r"</span>)</code>
             </div>
          </div>
        </div>
      </section>

      {/* 5. Developer Recommendations & Summary */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-r from-amber-600 to-orange-700 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
          <h2 className="text-3xl font-extrabold mb-8 flex items-center relative z-10">
            <Lightbulb className="w-8 h-8 mr-3 text-yellow-300" />
            1️⃣2️⃣ Tips & Tricks (From a Python Dev)
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            <div className="bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-black/30 transition-all">
              <h3 className="font-bold text-lg mb-3">1. Always use `with open()`</h3>
              <p className="text-sm text-orange-100 mb-3">It is industry standard practice. Avoid raw <code className="font-mono text-orange-200">file = open()</code> calls unless strictly necessary.</p>
              <div className="bg-black/40 p-3 rounded font-mono text-xs text-amber-300">
                <span className="text-rose-400">with</span> open(<span className="text-emerald-300">"demo.txt"</span>) <span className="text-rose-400">as</span> file:
              </div>
            </div>

            <div className="bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-black/30 transition-all">
              <h3 className="font-bold text-lg mb-3">2. Loops for Large Files</h3>
              <p className="text-sm text-orange-100 mb-3">If a file is 5GB, <code className="font-bold text-rose-300">read()</code> will crash your computer's RAM. Iterating line-by-line prevents memory overload.</p>
              <div className="bg-black/40 p-3 rounded font-mono text-xs text-amber-300">
                <span className="text-rose-400">for</span> line <span className="text-rose-400">in</span> file:
              </div>
            </div>

            <div className="bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-black/30 transition-all">
              <h3 className="font-bold text-lg mb-3">3. Strip Extra Spaces</h3>
              <p className="text-sm text-orange-100 mb-3 flex-1">Text files naturally have hidden newline characters <code className="font-mono text-orange-200">\n</code>. Strip them for clean output.</p>
              <div className="bg-black/40 p-3 rounded font-mono text-xs text-blue-300">
                <span className="text-rose-400">for</span> line <span className="text-rose-400">in</span> file:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;print(line.<span className="text-indigo-300 font-bold">strip</span>())
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Best Practices Checklist */}
      <section className="max-w-4xl mx-auto pb-16">
        <div className="bg-emerald-50 dark:bg-slate-900 border border-emerald-200 dark:border-emerald-800 p-8 rounded-3xl shadow-sm relative">
           <ShieldCheck className="absolute top-6 right-6 w-12 h-12 text-emerald-500/20" />
           <h2 className="text-2xl font-bold text-emerald-900 dark:text-emerald-400 mb-6 flex items-center">
            1️⃣3️⃣ Best Practices Checklist
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center bg-white dark:bg-slate-800 p-4 rounded-xl border border-emerald-100 dark:border-slate-700 shadow-sm">
               <div className="bg-emerald-100 dark:bg-emerald-900/40 p-2 rounded-full mr-4">
                 <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
               </div>
               <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Always handle files using <code className="text-emerald-600 dark:text-emerald-400">with</code></span>
            </div>
            <div className="flex items-center bg-white dark:bg-slate-800 p-4 rounded-xl border border-emerald-100 dark:border-slate-700 shadow-sm">
               <div className="bg-emerald-100 dark:bg-emerald-900/40 p-2 rounded-full mr-4">
                 <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
               </div>
               <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Close files properly</span>
            </div>
            <div className="flex items-center bg-white dark:bg-slate-800 p-4 rounded-xl border border-emerald-100 dark:border-slate-700 shadow-sm">
               <div className="bg-emerald-100 dark:bg-emerald-900/40 p-2 rounded-full mr-4">
                 <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
               </div>
               <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Use loops for large files</span>
            </div>
            <div className="flex items-center bg-white dark:bg-slate-800 p-4 rounded-xl border border-emerald-100 dark:border-slate-700 shadow-sm">
               <div className="bg-emerald-100 dark:bg-emerald-900/40 p-2 rounded-full mr-4">
                 <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
               </div>
               <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Handle file errors carefully</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PythonReadFiles;