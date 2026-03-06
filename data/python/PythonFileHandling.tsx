import React, { useState, useEffect } from 'react';
import { 
  FileText, FolderOpen, PenTool, Database, 
  Terminal, Target, RefreshCw, Check, Copy, 
  Lightbulb, BookOpen, Play, ArrowRight, 
  ShieldCheck, AlertTriangle, List, PlusCircle, CheckCircle2,
  HardDrive
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
                <div key={index} className={`${highlightLines.includes(index) ? 'bg-neutral-800/80 -mx-4 px-4 py-0.5 border-l-2 border-cyan-500' : ''}`}>
                  <span className={isComment ? 'text-neutral-500 italic' : 
                    line.includes('with ') || line.includes('as ') || line.includes('try:') || line.includes('except ') || line.includes('for ') || line.includes('in ') ? 'text-fuchsia-400 font-bold' :
                    line.includes('open') || line.includes('print') || line.includes('len') ? 'text-blue-400' : 
                    line.includes('"') || line.includes("'") ? 'text-emerald-400' :
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

const PythonFileHandling: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'read' | 'write' | 'with'>('basics');

  // Interactive Mock File System for the component
  const [mockFileContent, setMockFileContent] = useState<string | null>("Hello\nWelcome to Python");
  const [isDataTxtCreated, setIsDataTxtCreated] = useState<boolean>(true);
  const [isStudentsTxtCreated, setIsStudentsTxtCreated] = useState<boolean>(false);

  const runDemo = (action: string) => {
    let codeStr = '';
    
    switch (action) {
      case 'open_read':
        codeStr = `>>> file = open("data.txt", "r")\n>>> print(file.read())\n${mockFileContent || 'FileNotFoundError: [Errno 2] No such file or directory: \'data.txt\''}\n>>> file.close()`;
        break;
      case 'read_line':
        if (!isDataTxtCreated) {
          codeStr = `>>> file = open("data.txt", "r")\nFileNotFoundError: [Errno 2] No such file or directory: \'data.txt\'`;
        } else {
          const lines = mockFileContent ? mockFileContent.split('\n') : [];
          codeStr = `>>> file = open("data.txt", "r")\n>>> print(file.readline())\n${lines.length > 0 ? lines[0] : ''}\n>>> file.close()`;
        }
        break;
      case 'read_lines':
        if (!isDataTxtCreated) {
           codeStr = `>>> file = open("data.txt", "r")\nFileNotFoundError: [Errno 2] No such file or directory: \'data.txt\'`;
        } else {
           const linesArr = mockFileContent ? mockFileContent.split('\n').map(l => `'${l}\\n'`) : [];
           codeStr = `>>> file = open("data.txt", "r")\n>>> print(file.readlines())\n[${linesArr.join(', ')}]\n>>> file.close()`;
        }
        break;
      case 'write':
        setIsDataTxtCreated(true);
        setMockFileContent("Python File Handling");
        codeStr = `>>> file = open("data.txt", "w")\n>>> file.write("Python File Handling")\n>>> file.close()\n\n# Open panel below to view updated data.txt!`;
        break;
      case 'append':
        setIsDataTxtCreated(true);
        if (mockFileContent === null) {
          setMockFileContent("\nLearning Python");
        } else {
          setMockFileContent(mockFileContent + "\nLearning Python");
        }
        codeStr = `>>> file = open("data.txt", "a")\n>>> file.write("\\nLearning Python")\n>>> file.close()\n\n# Open panel below to view updated data.txt!`;
        break;
      case 'create_x':
        if (isDataTxtCreated) {
           codeStr = `>>> file = open("data.txt", "x")\nFileExistsError: [Errno 17] File exists: 'data.txt'`;
        } else {
           setIsDataTxtCreated(true);
           setMockFileContent("");
           codeStr = `>>> file = open("data.txt", "x")\n>>> file.close()\n# Created empty data.txt successfully!`;
        }
        break;
      case 'with_statement':
        if (!isDataTxtCreated) {
           codeStr = `>>> with open("data.txt", "r") as file:\n...     print(file.read())\nFileNotFoundError: [Errno 2] No such file or directory`;
        } else {
           codeStr = `>>> with open("data.txt", "r") as file:\n...     print(file.read())\n${mockFileContent}`;
        }
        break;
      case 'realworld':
        setIsStudentsTxtCreated(true);
        codeStr = `>>> with open("students.txt", "a") as file:\n...     file.write("Issac - Python Course\\n")\n\n# Created/Appended to students.txt!\n# The 'with' block automatically closed the file safely.`;
        break;
    }

    setConsoleOutput(codeStr.split('\n'));
  };

  const resetConsole = () => {
    setConsoleOutput([]);
    setMockFileContent("Hello\nWelcome to Python");
    setIsDataTxtCreated(true);
    setIsStudentsTxtCreated(false);
  };

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-900 min-h-screen font-sans text-slate-800 dark:text-slate-200">
      
      {/* 1. Header Area */}
      <header className="max-w-4xl mx-auto text-center mb-16 pt-8">
        <div className="inline-flex items-center justify-center p-4 bg-cyan-100 dark:bg-cyan-900/30 rounded-2xl mb-6 shadow-sm border border-cyan-200 dark:border-cyan-800/50">
          <HardDrive className="w-10 h-10 text-cyan-600 dark:text-cyan-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Python File Handling
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Break out of temporary memory and build permanence. Learn to read, write, append, and safely stream datasets to your OS hard drive with the built-in <code className="font-mono bg-slate-200 dark:bg-slate-800 border-slate-300 dark:border-slate-700 border px-1.5 py-0.5 rounded text-cyan-600 dark:text-cyan-400">open()</code> command.
        </p>
      </header>

      {/* 2. What is & Workflow Viz */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 text-cyan-500 mr-3" />
            <h2 className="text-2xl font-bold">1️⃣ File Handling</h2>
          </div>
          <p className="mb-6 text-slate-600 dark:text-slate-300">
            Files allow programs to store data <strong className="text-cyan-600 dark:text-cyan-400">permanently</strong> instead of keeping it only in memory (RAM). When the program ends, the data survives.
          </p>
          
          <div className="bg-cyan-50 dark:bg-cyan-900/10 border border-cyan-100 dark:border-cyan-800/50 p-4 rounded-xl mb-6">
            <h4 className="font-bold text-sm text-cyan-900 dark:text-cyan-300 mb-3 flex items-center"><Target className="w-4 h-4 mr-2"/> Common Uses</h4>
            <div className="grid grid-cols-2 gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
               <div className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-cyan-500" /> Saving User Data</div>
               <div className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-cyan-500" /> Storing Logs</div>
               <div className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-cyan-500" /> Config Files</div>
               <div className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-cyan-500" /> Datasets / CSVs</div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl text-slate-300">
             <h4 className="font-bold text-slate-400 uppercase text-xs tracking-wider mb-2 flex items-center">
                <FolderOpen className="w-4 h-4 mr-2"/> 2️⃣ The open() Function
             </h4>
             <div className="font-mono text-sm leading-relaxed">
               <div>file = <span className="text-blue-400">open</span>(<span className="text-emerald-400">"data.txt"</span>, <span className="text-rose-400">"r"</span>)</div>
               <div className="mt-3 pl-4 border-l-2 border-slate-700">
                  <div className="text-xs text-slate-400"><span className="text-emerald-400">"data.txt"</span> → Targeted File Name</div>
                  <div className="text-xs text-slate-400 mt-1"><span className="text-rose-400">"r"</span> → Mode Operator (Read)</div>
               </div>
             </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl shadow-sm border border-slate-700 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Database className="w-48 h-48 text-white" />
          </div>
          
          <div className="relative z-10 w-full max-w-sm">
            <h2 className="text-xl font-bold text-white mb-6 text-center border-b border-slate-700 pb-4">3️⃣ File Modes Cheat Sheet</h2>
            
            <div className="bg-slate-800/80 rounded-xl overflow-hidden border border-slate-600 shadow-xl font-mono text-sm">
                <div className="flex border-b border-slate-700 bg-slate-700/50">
                   <div className="w-1/4 py-3 text-center border-r border-slate-600 font-bold text-slate-300 uppercase text-xs tracking-wider">Mode</div>
                   <div className="w-3/4 py-3 px-4 font-bold text-slate-300 uppercase text-xs tracking-wider">Description</div>
                </div>
                <div className="flex border-b border-slate-700 hover:bg-slate-700 transition-colors">
                   <div className="w-1/4 py-3 text-center border-r border-slate-700 font-bold text-emerald-400">"r"</div>
                   <div className="w-3/4 py-3 px-4 text-emerald-100 flex items-center"><FileText className="w-4 h-4 mr-2 text-emerald-500 opacity-50"/> Read (Default)</div>
                </div>
                <div className="flex border-b border-slate-700 hover:bg-slate-700 transition-colors">
                   <div className="w-1/4 py-3 text-center border-r border-slate-700 font-bold text-rose-400">"w"</div>
                   <div className="w-3/4 py-3 px-4 text-rose-100 flex items-center"><PenTool className="w-4 h-4 mr-2 text-rose-500 opacity-50"/> Write (Overwrites)</div>
                </div>
                <div className="flex border-b border-slate-700 hover:bg-slate-700 transition-colors">
                   <div className="w-1/4 py-3 text-center border-r border-slate-700 font-bold text-fuchsia-400">"a"</div>
                   <div className="w-3/4 py-3 px-4 text-fuchsia-100 flex items-center"><PlusCircle className="w-4 h-4 mr-2 text-fuchsia-500 opacity-50"/> Append (Adds to end)</div>
                </div>
                <div className="flex hover:bg-slate-700 transition-colors">
                   <div className="w-1/4 py-3 text-center border-r border-slate-700 font-bold text-amber-400">"x"</div>
                   <div className="w-3/4 py-3 px-4 text-amber-100 flex items-center"><FolderOpen className="w-4 h-4 mr-2 text-amber-500 opacity-50"/> Create (Fails if exists)</div>
                </div>
            </div>

            <div className="mt-8">
               <h4 className="text-center font-bold text-slate-400 uppercase text-xs tracking-widest mb-3">🔟 File I/O Workflow</h4>
               <div className="flex justify-between items-center bg-slate-800 border border-slate-600 rounded-full px-4 py-2 text-xs font-mono font-bold">
                  <span className="text-blue-400">open()</span>
                  <ArrowRight className="w-4 h-4 text-slate-500"/>
                  <span className="text-amber-400 border-b border-amber-400 border-dashed">Read/Write</span>
                  <ArrowRight className="w-4 h-4 text-slate-500"/>
                  <span className="text-red-400">close()</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center">
            <Terminal className="w-8 h-8 mr-3 text-cyan-500" />
            Interactive Input/Output Lab
          </h2>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setActiveTab('basics')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm ${activeTab === 'basics' ? 'bg-cyan-600 text-white shadow-cyan-500/20' : 'bg-white dark:bg-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              Basics
            </button>
            <button
              onClick={() => setActiveTab('read')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm ${activeTab === 'read' ? 'bg-cyan-600 text-white shadow-cyan-500/20' : 'bg-white dark:bg-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              Read
            </button>
            <button
              onClick={() => setActiveTab('write')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm ${activeTab === 'write' ? 'bg-cyan-600 text-white shadow-cyan-500/20' : 'bg-white dark:bg-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              Write/Append
            </button>
            <button
              onClick={() => setActiveTab('with')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm ${activeTab === 'with' ? 'bg-cyan-600 text-white shadow-cyan-500/20' : 'bg-white dark:bg-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              The "With" Block
            </button>
            
            <button
              onClick={resetConsole}
              className="flex items-center px-4 py-2 mb-1 bg-slate-100 text-slate-700 dark:bg-slate-800/80 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shadow-sm ml-2 group"
              title="Reset state"
            >
              <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 min-h-[550px] overflow-y-auto">
              
              {activeTab === 'basics' && (
                <div className="animate-fade-in space-y-6">
                  
                  <button onClick={() => runDemo('open_read')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-cyan-300 dark:hover:border-cyan-700 transition-colors relative shadow-sm">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-cyan-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300 mb-1">4️⃣ Open & Read Everything</h4>
                      <p className="text-xs text-slate-500 mb-3">Opens the file, grabs all the text in one string, and closes it.</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 mt-2">
file = <span className="text-blue-500">open</span>(<span className="text-emerald-500">"data.txt"</span>, <span className="text-emerald-500">"r"</span>)<br/><br/>
<span className="text-blue-500">print</span>(file.read())<br/><br/>
<span className="text-slate-400 italic"># 7️⃣ Always close your files!</span><br/>
file.close()
                      </pre>
                    </div>
                  </button>

                  <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/30 rounded-xl p-4 flex">
                     <AlertTriangle className="w-6 h-6 mr-3 text-rose-500 shrink-0"/>
                     <div>
                       <h4 className="font-bold text-rose-700 dark:text-rose-400 mb-1 text-sm">Why close()?</h4>
                       <p className="text-xs text-rose-600 dark:text-rose-300/80">Every open() creates a lock on that file in the Operating System using memory resources. If you don't call close(), the file stays locked and resources slowly drain.</p>
                     </div>
                  </div>

                </div>
              )}

              {activeTab === 'read' && (
                <div className="animate-fade-in space-y-6">
                  
                  <button onClick={() => runDemo('read_line')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors relative shadow-sm">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-emerald-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-emerald-600 dark:text-emerald-400 mb-1 flex items-center">4️⃣ Read Only One Line <code className="mx-2 font-mono bg-white dark:bg-slate-800 px-1 rounded text-emerald-500">.readline()</code></h4>
                      <p className="text-xs text-slate-500 mb-2">Good for massive files where you don't want to load Megabytes of data into RAM.</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
file = <span className="text-blue-500">open</span>(<span className="text-emerald-500">"data.txt"</span>, <span className="text-emerald-500">"r"</span>)<br/>
<span className="text-blue-500">print</span>(file.readline())<br/>
file.close()
                      </pre>
                    </div>
                  </button>

                  <button onClick={() => runDemo('read_lines')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors relative shadow-sm">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-emerald-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-emerald-600 dark:text-emerald-400 mb-1 flex items-center">4️⃣ Read All Lines to Array <code className="mx-2 font-mono bg-white dark:bg-slate-800 px-1 rounded text-emerald-500">.readlines()</code></h4>
                      <p className="text-xs text-slate-500 mb-2">Splits the file into a List, where every item is a single line string.</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
file = <span className="text-blue-500">open</span>(<span className="text-emerald-500">"data.txt"</span>, <span className="text-emerald-500">"r"</span>)<br/>
<span className="text-blue-500">print</span>(file.readlines())<br/>
file.close()
                      </pre>
                    </div>
                  </button>
                  
                </div>
              )}

              {activeTab === 'write' && (
                <div className="animate-fade-in space-y-6">

                  <button onClick={() => runDemo('write')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-rose-300 dark:hover:border-rose-700 transition-colors relative shadow-sm">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-rose-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-rose-600 dark:text-rose-400 mb-1 flex items-center">5️⃣ Write Mode <code className="mx-2 font-mono text-rose-400 bg-rose-50 dark:bg-rose-900/40 px-1 rounded">"w"</code></h4>
                      <p className="text-xs text-slate-500 mb-3"><strong className="text-rose-500 font-bold">WARNING:</strong> Using "w" completely overwrites the file, destroying the previous content. If the file doesn't exist, it creates it.</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
file = <span className="text-blue-500">open</span>(<span className="text-emerald-500">"data.txt"</span>, <span className="text-rose-500 font-bold">"w"</span>)<br/>
file.write(<span className="text-emerald-500">"Python File Handling"</span>)<br/>
file.close()
                      </pre>
                    </div>
                  </button>

                  <button onClick={() => runDemo('append')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-fuchsia-300 dark:hover:border-fuchsia-700 transition-colors relative shadow-sm">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-fuchsia-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-fuchsia-600 dark:text-fuchsia-400 mb-1 flex items-center">6️⃣ Append Mode <code className="mx-2 font-mono text-fuchsia-400 bg-fuchsia-50 dark:bg-fuchsia-900/40 px-1 rounded">"a"</code></h4>
                      <p className="text-xs text-slate-500 mb-3">Safely adds new data to the very bottom of the file without deleting existing data.</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
file = <span className="text-blue-500">open</span>(<span className="text-emerald-500">"data.txt"</span>, <span className="text-fuchsia-400 font-bold">"a"</span>)<br/>
file.write(<span className="text-emerald-500">"\\nLearning Python"</span>)<br/>
file.close()
                      </pre>
                    </div>
                  </button>

                  <button onClick={() => runDemo('create_x')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-amber-300 dark:hover:border-amber-700 transition-colors relative shadow-sm">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-amber-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-amber-600 dark:text-amber-400 mb-1 flex items-center">9️⃣ Safe Create Mode <code className="mx-2 font-mono text-amber-500 bg-amber-50 dark:bg-amber-900/40 px-1 rounded">"x"</code></h4>
                      <p className="text-xs text-slate-500 mb-3">Creates a new file. <strong className="font-bold text-amber-600 dark:text-amber-500">Fails immediately</strong> if the file already exists, preventing accidental overwrites.</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
file = <span className="text-blue-500">open</span>(<span className="text-emerald-500">"newfile.txt"</span>, <span className="text-amber-500 font-bold">"x"</span>)<br/>
file.close()
                      </pre>
                    </div>
                  </button>

                </div>
              )}

              {activeTab === 'with' && (
                <div className="animate-fade-in space-y-6">
                  
                  <div className="bg-indigo-50 dark:bg-indigo-900/10 p-4 rounded-xl border border-indigo-200 dark:border-indigo-800/50 mb-4 flex items-start">
                    <ShieldCheck className="w-6 h-6 mr-3 text-indigo-500 shrink-0 mt-1"/>
                    <div>
                       <h4 className="font-bold text-indigo-800 dark:text-indigo-300 mb-1">8️⃣ The 'with' Statement</h4>
                       <p className="text-sm text-indigo-600 dark:text-indigo-400/80">Using <span className="font-mono font-bold">with open()</span> is standard best practice in Python. It automatically executes the <span className="font-mono">.close()</span> command whenever the block of code finishes or crashes—meaning you don't have to remember to do it manually.</p>
                    </div>
                  </div>

                  <button onClick={() => runDemo('with_statement')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors relative shadow-sm">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-indigo-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-indigo-600 dark:text-indigo-400 mb-1">With Statement Syntax</h4>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 mt-2">
<span className="text-fuchsia-500 font-bold">with</span> <span className="text-blue-500">open</span>(<span className="text-emerald-500">"data.txt"</span>, <span className="text-emerald-500">"r"</span>) <span className="text-fuchsia-500 font-bold">as</span> file:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-500">print</span>(file.read())<br/><br/>
<span className="text-slate-400 italic"># No close() necessary! Closed automatically.</span>
                      </pre>
                    </div>
                  </button>

                  <button onClick={() => runDemo('realworld')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors relative shadow-sm">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-indigo-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-indigo-600 dark:text-indigo-400 mb-1">🔟 Real World Logging</h4>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 mt-2">
<span className="text-fuchsia-500 font-bold">with</span> <span className="text-blue-500">open</span>(<span className="text-emerald-500">"students.txt"</span>, <span className="text-fuchsia-400 font-bold">"a"</span>) <span className="text-fuchsia-500 font-bold">as</span> file:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;file.write(<span className="text-emerald-500">"Issac - Python Course\\n"</span>)
                      </pre>
                    </div>
                  </button>

                </div>
              )}

            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            {/* Terminal Console */}
            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 h-[280px] shadow-xl relative overflow-hidden flex flex-col">
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <h3 className="font-bold text-slate-300 uppercase text-xs tracking-wider flex items-center">
                    <Terminal className="w-4 h-4 mr-2" />
                    Python Shell Output
                  </h3>
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                  </div>
                </div>

                <div className="font-mono text-sm flex flex-col flex-1 overflow-y-auto">
                  {consoleOutput.length === 0 ? (
                    <div className="text-slate-500 animate-pulse flex flex-col items-center justify-center mt-12">
                      <Terminal className="w-8 h-8 mb-4 opacity-20" />
                      <span className="text-xs">Execute a file handler...</span>
                    </div>
                  ) : (
                    <div className="space-y-1.5">
                    {consoleOutput.map((line, i) => {
                      let colorClass = "text-slate-300"; 
                      if (line.startsWith('>>>') || line.startsWith('...')) colorClass = "text-blue-400 opacity-75";
                      else if (line.includes('Error')) colorClass = "text-rose-400 font-bold";
                      else if (line.startsWith('#')) colorClass = "text-slate-500 italic text-xs";
                      else colorClass = "text-emerald-400 font-bold";
                      
                      return (
                      <div key={i} className={`animate-fade-in ${colorClass}`}>
                        {line}
                      </div>
                    )})}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Virtual File System UI */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 h-[254px] shadow-xl relative overflow-hidden flex flex-col">
              <div className="flex items-center justify-between mb-4 border-b border-slate-700 pb-3">
                  <h3 className="font-bold text-slate-300 uppercase text-xs tracking-wider flex items-center">
                    <FolderOpen className="w-4 h-4 mr-2 text-cyan-500" />
                    Virtual Hard Drive / Directory
                  </h3>
              </div>

              <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar">
                {isDataTxtCreated ? (
                <div className="group animate-fade-in">
                   <div className="flex items-center text-sm font-bold text-slate-200 mb-1">
                      <FileText className="w-4 h-4 mr-2 text-emerald-500"/> data.txt
                   </div>
                   <div className="bg-slate-900 border border-slate-700 rounded p-3 font-mono text-xs text-slate-400 shadow-inner whitespace-pre-wrap">
                      {mockFileContent || <span className="italic opacity-50">Empty file</span>}
                   </div>
                </div>
                ) : (
                   <div className="text-rose-400/80 italic text-xs font-mono ml-6 line-through animate-fade-in">data.txt (deleted)</div>
                )}
                
                {isStudentsTxtCreated && (
                <div className="group animate-fade-in">
                   <div className="flex items-center text-sm font-bold text-slate-200 mb-1">
                      <FileText className="w-4 h-4 mr-2 text-fuchsia-500"/> students.txt
                   </div>
                   <div className="bg-slate-900 border border-slate-700 rounded p-3 font-mono text-xs text-slate-400 shadow-inner">
                      Issac - Python Course
                   </div>
                </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Tips & Recommendations */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-r from-cyan-800 via-teal-700 to-emerald-800 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden mb-12 border border-cyan-500/50">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-cyan-400 opacity-20 rounded-full blur-3xl"></div>
          
          <h2 className="text-3xl font-extrabold mb-6 flex items-center relative z-10 text-white">
            <Lightbulb className="w-8 h-8 mr-3 text-yellow-300" />
            Developer Recommendations
          </h2>
          <p className="text-cyan-100 mb-8 font-bold italic relative z-10 text-lg">From a Developer with 15+ years of Python experience:</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            <div className="bg-black/30 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-black/40 transition-colors">
              <h3 className="font-bold text-xl mb-3 flex items-center text-white">1️⃣ Always Use `with`</h3>
              <p className="text-sm text-cyan-100 mb-3 font-medium">Almost never use floating <code className="bg-black/50 font-mono px-1 rounded">open()</code> statements. If your script crashes halfway through before calling <code className="bg-black/50 font-mono px-1 rounded">close()</code>, you leak memory and lock files.</p>
            </div>
            <div className="bg-black/30 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-black/40 transition-colors">
              <h3 className="font-bold text-xl mb-3 text-white">2️⃣ Handle IO Errors</h3>
              <p className="text-sm text-cyan-100 mb-3 font-medium">Webapps reading files should expect failures. Wrap it in a Try-Catch block to prevent a 500 Server Crash.</p>
              <pre className="text-[10px] bg-black/50 p-2 rounded text-slate-300 font-mono"><span className="text-fuchsia-400 font-bold">try:</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;...open files<br/><span className="text-fuchsia-400 font-bold">except</span> FileNotFoundError:<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">print</span>(<span className="text-emerald-400">"Safe Error"</span>)</pre>
            </div>
            <div className="bg-black/30 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-black/40 transition-colors">
              <h3 className="font-bold text-xl mb-3 flex items-center text-white">3️⃣ Map Logs with "a"</h3>
              <p className="text-sm text-cyan-100 mb-3 font-medium">When maintaining user event logs or system crash histories, always mount the file in Append <code className="bg-black/50 text-fuchsia-400 font-bold font-mono px-1 rounded">"a"</code> mode so you never lose previous history.</p>
            </div>
          </div>
        </div>

        {/* Tricks Grid */}
        <div className="grid md:grid-cols-3 gap-4">
           <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between">
             <h4 className="font-bold text-cyan-600 dark:text-cyan-400 mb-2 ext-sm flex items-center"><List className="w-4 h-4 mr-2"/> Trick 1: Loop the View</h4>
             <p className="text-xs text-slate-500 mb-2">Treat the file like an array.</p>
             <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 p-3 rounded-lg mt-auto"><span className="text-fuchsia-500 font-bold">with</span> <span className="text-blue-500">open</span>(<span className="text-emerald-500">"data.txt"</span>) <span className="text-fuchsia-500 font-bold">as</span> f:<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-fuchsia-500 font-bold">for</span> line <span className="text-fuchsia-500 font-bold">in</span> f:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-500">print</span>(line)</pre>
           </div>
           <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between">
             <h4 className="font-bold text-cyan-600 dark:text-cyan-400 mb-2 text-sm">Trick 2: Total Lines Fast</h4>
             <p className="text-xs text-slate-500 mb-2">Length of readlines().</p>
             <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 p-3 rounded-lg mt-auto"><span className="text-blue-500">len</span>(file.readlines())</pre>
           </div>
           <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between">
             <h4 className="font-bold text-cyan-600 dark:text-cyan-400 mb-2 text-sm">Trick 3: Bulk Arrays</h4>
             <p className="text-xs text-slate-500 mb-2">Dump list objects.</p>
             <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 p-3 rounded-lg mt-auto">file.<span className="text-blue-500 font-bold">writelines</span>([<br/>&nbsp;&nbsp;<span className="text-emerald-500">"P\\n"</span>, <span className="text-emerald-500">"J\\n"</span><br/>])</pre>
           </div>
        </div>
      </section>

      {/* 5. Practice */}
      <section className="max-w-4xl mx-auto pb-16">
        <div className="bg-gradient-to-br from-indigo-100 to-cyan-100 dark:from-indigo-900/30 dark:to-cyan-900/20 p-8 rounded-3xl border border-indigo-200 dark:border-cyan-800/30 shadow-lg relative">
          <Target className="absolute top-6 right-6 w-12 h-12 text-indigo-500/30" />
          <h2 className="text-2xl font-bold text-indigo-900 dark:text-indigo-400 mb-4 flex items-center">
            🧩 Practice Exercise
          </h2>
          <p className="mb-4 text-indigo-800 dark:text-indigo-300 font-medium tracking-wide">
            Task: Write a tiny script that creates a file called <code className="font-bold bg-white/50 px-1 rounded">notes.txt</code> and writes "Learning Python" to it using the safe `with` methodology.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-indigo-50 dark:bg-slate-900 p-5 rounded-xl border border-indigo-200 dark:border-indigo-800">
              <h4 className="font-bold text-sm uppercase tracking-wider text-indigo-800 dark:text-indigo-400 mb-3">Target internal File output</h4>
              <div className="font-mono text-sm font-bold text-slate-700 dark:text-slate-300 bg-white/50 dark:bg-black/30 rounded p-4 shadow-inner leading-relaxed">
                <div className="flex items-center text-xs font-bold text-slate-400 mb-2 border-b border-white/50 dark:border-white/10 pb-2">
                   <FileText className="w-3 h-3 mr-1 text-emerald-500"/> notes.txt
                </div>
                Learning Python
              </div>
            </div>

            <div className="bg-white/60 dark:bg-black/40 p-5 rounded-xl backdrop-blur-sm border border-white/50 dark:border-white/10 group relative overflow-hidden">
               <div className="absolute inset-0 bg-slate-900/80 backdrop-blur flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300 z-10 cursor-pointer">
                <span className="text-white font-bold flex items-center bg-cyan-600 px-4 py-2 rounded-lg"><Lightbulb className="w-4 h-4 mr-2" /> Hover for Solution</span>
              </div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-3 flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-indigo-500" /> Example Solution</h4>
              <pre className="font-mono text-xs text-slate-800 dark:text-slate-300">
<span className="text-fuchsia-500 font-bold">with</span> open(<span className="text-emerald-500">"notes.txt"</span>, <span className="text-rose-500 font-bold">"w"</span>) <span className="text-fuchsia-500 font-bold">as</span> file:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;file.write(<span className="text-emerald-500">"Learning Python"</span>)<br/><br/>
<span className="text-slate-500 italic"># Optionally read back:</span><br/>
<span className="text-fuchsia-500 font-bold">with</span> open(<span className="text-emerald-500">"notes.txt"</span>, <span className="text-emerald-500">"r"</span>) <span className="text-fuchsia-500 font-bold">as</span> file:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;print(file.read())
              </pre>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PythonFileHandling;