import React, { useState } from 'react';
import { 
  Trash2, FolderX, AlertTriangle, ShieldCheck, 
  Terminal, Target, RefreshCw, Check, Copy, 
  Lightbulb, BookOpen, Play, FileWarning,
  ArrowRight, ShieldAlert, CheckCircle2, FileQuestion
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
                    line.includes('import ') ? 'text-rose-400 font-bold' : 
                    line.includes('if ') || line.includes('else:') || line.includes('for ') ? 'text-fuchsia-400 font-bold' :
                    line.includes('os.') || line.includes('shutil.') ? 'text-amber-300' :
                    line.includes('print') ? 'text-blue-400' : 
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

const PythonDeleteFiles: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'files' | 'safety' | 'folders' | 'realworld'>('files');

  // We simulate a mock file system state for the interactive lab to make it feel real
  const [mockFS, setMockFS] = useState({
    'example.txt': true,
    'data.txt': true,
    'myfolder': true, // empty folder
    'project_folder': true, // folder with files
    'temp1.txt': true,
    'temp2.txt': true
  });

  const runDemo = (action: string) => {
    let codeStr = '';
    const updatedFS = { ...mockFS };

    switch (action) {
      case 'remove_file':
        codeStr = `>>> import os\n>>> os.remove("example.txt")`;
        if (updatedFS['example.txt']) {
          codeStr += `\nFile example.txt deleted successfully`;
          updatedFS['example.txt'] = false;
        } else {
          codeStr += `\nTraceback (most recent call last):\nFileNotFoundError: [WinError 2] The system cannot find the file specified: 'example.txt'`;
        }
        break;
      case 'safe_delete':
        codeStr = `>>> import os\n>>> if os.path.exists("data.txt"):\n...     os.remove("data.txt")\n...     print("File deleted")\n... else:\n...     print("File not found")`;
        if (updatedFS['data.txt']) {
          codeStr += `\nFile deleted`;
          updatedFS['data.txt'] = false;
        } else {
          codeStr += `\nFile not found`;
        }
        break;
      case 'rmdir':
        codeStr = `>>> import os\n>>> os.rmdir("myfolder")`;
        if (updatedFS['myfolder']) {
           codeStr += `\nFolder deleted`;
           updatedFS['myfolder'] = false;
        } else {
           codeStr += `\nFileNotFoundError: [WinError 2] The system cannot find the file specified: 'myfolder'`;
        }
        break;
      case 'shutil':
        codeStr = `>>> import shutil\n>>> shutil.rmtree("project_folder")`;
        if (updatedFS['project_folder']) {
           codeStr += `\nFolder and all files deleted`;
           updatedFS['project_folder'] = false;
        } else {
           codeStr += `\nFileNotFoundError: [WinError 3] The system cannot find the path specified: 'project_folder'`;
        }
        break;
      case 'cleanup':
        codeStr = `>>> import os\n>>> files = ["temp1.txt", "temp2.txt"]\n>>> for file in files:\n...     if os.path.exists(file):\n...         os.remove(file)\n...         print(file, "deleted")`;
        if (updatedFS['temp1.txt'] || updatedFS['temp2.txt']) {
            if (updatedFS['temp1.txt']) { codeStr += `\ntemp1.txt deleted`; updatedFS['temp1.txt'] = false; }
            if (updatedFS['temp2.txt']) { codeStr += `\ntemp2.txt deleted`; updatedFS['temp2.txt'] = false; }
        } else {
            codeStr += `\n# No files were found to delete.`;
        }
        break;
    }

    setMockFS(updatedFS);
    setConsoleOutput(codeStr.split('\n'));
  };

  const resetConsole = () => {
    setConsoleOutput([]);
    setMockFS({
      'example.txt': true,
      'data.txt': true,
      'myfolder': true,
      'project_folder': true,
      'temp1.txt': true,
      'temp2.txt': true
    });
  };

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-900 min-h-screen font-sans text-slate-800 dark:text-slate-200">
      
      {/* 1. Header Area */}
      <header className="max-w-4xl mx-auto text-center mb-16 pt-8">
        <div className="inline-flex items-center justify-center p-4 bg-rose-100 dark:bg-rose-900/30 rounded-2xl mb-6 shadow-sm border border-rose-200 dark:border-rose-800/50">
          <Trash2 className="w-10 h-10 text-rose-600 dark:text-rose-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Python Delete Files
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Learn how to interact with the Operating System to permanently remove files, destroy directories, and safely clean up data using <code className="font-mono bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded text-rose-600 dark:text-rose-400">os</code> and <code className="font-mono bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded text-rose-600 dark:text-rose-400">shutil</code>.
        </p>
      </header>

      {/* 2. What Does Deleting Mean & Auth Flow */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 text-rose-500 mr-3" />
            <h2 className="text-2xl font-bold">1️⃣ File Deletion</h2>
          </div>
          <p className="mb-6 text-slate-600 dark:text-slate-300">
            Deleting a file means permanently removing a file from the system using Python code. The most commonly used built-in module for this is <strong className="font-mono text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-900/30 px-1 rounded">os</strong>.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-4 rounded-xl flex items-center">
              <FileWarning className="w-8 h-8 text-amber-500 mr-3" />
              <div>
                <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300">Target Files</h4>
                <p className="text-xs text-slate-500">os.remove()</p>
              </div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-4 rounded-xl flex items-center">
              <FolderX className="w-8 h-8 text-fuchsia-500 mr-3" />
              <div>
                <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300">Target Folders</h4>
                <p className="text-xs text-slate-500">os.rmdir() / shutil</p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/10 p-5 rounded-xl border border-amber-100 dark:border-amber-800/30 flex items-start">
            <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400 mr-3 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-amber-900 dark:text-amber-300 mb-1">Permanent Removal</h4>
              <p className="text-sm text-amber-800 dark:text-amber-200/80">
                Unlike deleting a file in your OS GUI, deleting files with Python skips the Recycle Bin. <strong className="font-bold text-rose-500">It is completely permanent!</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl shadow-sm border border-slate-700 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Trash2 className="w-48 h-48 text-white" />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-xl font-bold text-white mb-6 text-center border-b border-slate-700 pb-4">4️⃣ & 🔟 Safe Deletion Flow</h2>
            
            <div className="flex flex-col items-center justify-center space-y-2 font-mono text-sm max-w-sm mx-auto">
              <div className="bg-slate-700 text-white font-bold px-4 py-2 rounded-lg w-full text-center shadow-lg border border-slate-600 flex justify-center items-center">
                 <FileQuestion className="w-4 h-4 mr-2 text-blue-400"/>
                 Check os.path.exists()
              </div>
              
              <div className="flex justify-between w-full px-8">
                 <div className="flex flex-col items-center">
                    <ArrowRight className="w-5 h-5 text-emerald-400 rotate-90 my-1" />
                    <span className="text-xs text-emerald-400 font-bold mb-1">Yes (True)</span>
                 </div>
                 <div className="flex flex-col items-center">
                    <ArrowRight className="w-5 h-5 text-rose-400 rotate-90 my-1" />
                    <span className="text-xs text-rose-400 font-bold mb-1">No (False)</span>
                 </div>
              </div>

              <div className="flex justify-between w-full gap-4">
                 <div className="bg-emerald-900/80 border border-emerald-500/50 text-emerald-100 font-bold px-2 py-3 rounded-lg w-1/2 text-center shadow-lg">
                    Delete File<br/><span className="text-[10px] text-emerald-300">os.remove()</span>
                 </div>
                 <div className="bg-rose-900/80 border border-rose-500/50 text-rose-100 font-bold px-2 py-3 rounded-lg w-1/2 text-center shadow-lg">
                    Error/Ignore<br/><span className="text-[10px] text-rose-300">Prevent Crash</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Deletion Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center">
            <Terminal className="w-8 h-8 mr-3 text-rose-500" />
            Interactive Deletion Lab
          </h2>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setActiveTab('files')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm ${activeTab === 'files' ? 'bg-rose-600 text-white shadow-rose-500/20' : 'bg-white dark:bg-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              Dangerous Delete
            </button>
            <button
              onClick={() => setActiveTab('safety')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm ${activeTab === 'safety' ? 'bg-rose-600 text-white shadow-rose-500/20' : 'bg-white dark:bg-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              Safe Delete
            </button>
            <button
              onClick={() => setActiveTab('folders')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm ${activeTab === 'folders' ? 'bg-rose-600 text-white shadow-rose-500/20' : 'bg-white dark:bg-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              Folders
            </button>
            <button
              onClick={() => setActiveTab('realworld')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm ${activeTab === 'realworld' ? 'bg-rose-600 text-white shadow-rose-500/20' : 'bg-white dark:bg-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              Loops / Clean
            </button>
            
            <button
              onClick={resetConsole}
              className="flex items-center px-4 py-2 bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 rounded-lg text-sm font-bold hover:bg-emerald-200 dark:hover:bg-emerald-800 transition-colors shadow-sm ml-2 group"
              title="Reset Simulated OS Files"
            >
              <RefreshCw className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform duration-500" />
              Restore Mock Files
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 min-h-[550px] overflow-y-auto">
              
              {activeTab === 'files' && (
                <div className="animate-fade-in space-y-6">
                  
                  <div className="bg-slate-900 text-slate-300 p-4 rounded-xl font-mono text-xs border border-slate-800 flex justify-between items-center mb-6">
                     <span className="flex items-center"><FileWarning className="w-4 h-4 mr-2 text-slate-500"/> Current OS State:</span>
                     <span className={mockFS['example.txt'] ? 'text-emerald-400 font-bold' : 'text-rose-400 line-through'}>example.txt</span>
                  </div>

                  <button onClick={() => runDemo('remove_file')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-rose-300 dark:hover:border-rose-700 transition-colors relative shadow-sm">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-rose-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-rose-600 dark:text-rose-400 mb-1 flex items-center">3️⃣ Raw File Deletion (`os.remove`)</h4>
                      <p className="text-xs text-slate-500 mb-3">If you press play twice, you will see a Python <span className="text-rose-500 font-bold">FileNotFoundError</span> crash.</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
<span className="text-rose-500 font-bold">import</span> os<br/><br/>
<span className="text-slate-400 italic"># Dangerous: Assumes file exists</span><br/>
os.<span className="text-blue-500 font-bold">remove</span>(<span className="text-emerald-500">"example.txt"</span>)
                      </pre>
                    </div>
                  </button>
                </div>
              )}

              {activeTab === 'safety' && (
                <div className="animate-fade-in space-y-6">

                  <div className="bg-slate-900 text-slate-300 p-4 rounded-xl font-mono text-xs border border-slate-800 flex justify-between items-center mb-6">
                     <span className="flex items-center"><ShieldCheck className="w-4 h-4 mr-2 text-emerald-500"/> Current OS State:</span>
                     <span className={mockFS['data.txt'] ? 'text-emerald-400 font-bold' : 'text-rose-400 line-through'}>data.txt</span>
                  </div>
                  
                  <button onClick={() => runDemo('safe_delete')} className="w-full text-left group">
                    <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800/30 rounded-xl p-4 hover:border-emerald-400 dark:hover:border-emerald-600 transition-colors relative shadow-sm">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-emerald-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-emerald-700 dark:text-emerald-400 mb-1 flex items-center">5️⃣ Safe Deletion Flow</h4>
                      <p className="text-xs text-emerald-600 dark:text-emerald-500/80 mb-3">Press play twice. Python won't crash the second time because the `if` statement catches it!</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white/60 dark:bg-slate-950/50 p-3 rounded-lg border border-emerald-100 dark:border-emerald-800/30">
<span className="text-rose-500 font-bold">import</span> os<br/><br/>
<span className="text-fuchsia-500 font-bold">if</span> os.path.<span className="text-blue-500 font-bold">exists</span>(<span className="text-emerald-500">"data.txt"</span>):<br/>
&nbsp;&nbsp;&nbsp;&nbsp;os.<span className="text-blue-500 font-bold">remove</span>(<span className="text-emerald-500">"data.txt"</span>)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-500">print</span>(<span className="text-emerald-500">"File deleted"</span>)<br/>
<span className="text-fuchsia-500 font-bold">else</span>:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-500">print</span>(<span className="text-emerald-500">"File not found"</span>)
                      </pre>
                    </div>
                  </button>
                </div>
              )}

              {activeTab === 'folders' && (
                <div className="animate-fade-in space-y-6">
                  
                  <div className="bg-slate-900 text-slate-300 p-4 rounded-xl font-mono text-xs border border-slate-800 flex justify-between items-center mb-6">
                     <span className="flex items-center"><FolderX className="w-4 h-4 mr-2 text-fuchsia-400"/> Folders:</span>
                     <div className="flex gap-4">
                        <span className={mockFS['myfolder'] ? 'text-amber-400 font-bold' : 'text-rose-400 line-through'}>myfolder/</span>
                        <span className={mockFS['project_folder'] ? 'text-red-400 font-bold' : 'text-rose-400 line-through'}>project_folder/</span>
                     </div>
                  </div>

                  <button onClick={() => runDemo('rmdir')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-amber-300 dark:hover:border-amber-600 transition-colors relative mb-4">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-amber-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-amber-600 dark:text-amber-400 mb-1">6️⃣ Empty Folders (`os.rmdir`)</h4>
                      <p className="text-xs text-slate-500 mb-3">Only works if absolutely nothing is inside.</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
<span className="text-rose-500 font-bold">import</span> os<br/>
os.<span className="text-blue-500 font-bold">rmdir</span>(<span className="text-emerald-500">"myfolder"</span>)
                      </pre>
                    </div>
                  </button>

                  <button onClick={() => runDemo('shutil')} className="w-full text-left group">
                    <div className="bg-red-50 dark:bg-red-900/10 border-2 border-red-200 dark:border-red-800/30 rounded-xl p-4 hover:border-red-400 dark:hover:border-red-700 transition-colors relative shadow-sm">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-red-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-red-700 dark:text-red-400 mb-1 flex items-center"><ShieldAlert className="w-4 h-4 mr-2 text-red-500"/> 7️⃣ Folders With Files (`shutil.rmtree`)</h4>
                      <p className="text-xs text-red-600 dark:text-red-500/80 mb-3">DANGER: Instantly nukes a folder and everything inside it.</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white/60 dark:bg-slate-950/50 p-3 rounded-lg border border-red-100 dark:border-red-800/30">
<span className="text-rose-500 font-bold">import</span> shutil<br/>
shutil.<span className="text-blue-500 font-bold">rmtree</span>(<span className="text-emerald-500">"project_folder"</span>)
                      </pre>
                    </div>
                  </button>
                </div>
              )}

              {activeTab === 'realworld' && (
                <div className="animate-fade-in space-y-6">
                  
                  <div className="bg-slate-900 text-slate-300 p-4 rounded-xl font-mono text-xs border border-slate-800 flex justify-between items-center mb-6">
                     <span className="flex items-center"><RefreshCw className="w-4 h-4 mr-2 text-indigo-400"/> Batch State:</span>
                     <div className="flex gap-4">
                        <span className={mockFS['temp1.txt'] ? 'text-indigo-400 font-bold' : 'text-slate-600 line-through'}>temp1.txt</span>
                        <span className={mockFS['temp2.txt'] ? 'text-indigo-400 font-bold' : 'text-slate-600 line-through'}>temp2.txt</span>
                     </div>
                  </div>

                  <button onClick={() => runDemo('cleanup')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors relative shadow-sm">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-indigo-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-indigo-600 dark:text-indigo-400 mb-1 flex items-center">8️⃣ Real-World Example: Cleanup Script</h4>
                      <p className="text-xs text-slate-500 mb-3">Looping through an array of filenames and safely deleting them.</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
<span className="text-rose-500 font-bold">import</span> os<br/><br/>
files = [<span className="text-emerald-500">"temp1.txt"</span>, <span className="text-emerald-500">"temp2.txt"</span>]<br/><br/>
<span className="text-fuchsia-500 font-bold">for</span> file <span className="text-fuchsia-500 font-bold">in</span> files:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-fuchsia-500 font-bold">if</span> os.path.<span className="text-blue-500 font-bold">exists</span>(file):<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;os.<span className="text-blue-500 font-bold">remove</span>(file)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-500">print</span>(file, <span className="text-emerald-500">"deleted"</span>)
                      </pre>
                    </div>
                  </button>
                  
                </div>
              )}

            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 h-full min-h-[500px] shadow-2xl relative overflow-hidden flex flex-col">
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

                <div className="font-mono text-sm flex flex-col flex-1">
                  {consoleOutput.length === 0 ? (
                    <div className="text-slate-500 animate-pulse flex flex-col items-center justify-center mt-32">
                      <Terminal className="w-12 h-12 mb-4 opacity-20" />
                      <span>Execute a deletion function...</span>
                    </div>
                  ) : (
                    <div className="space-y-1.5">
                    {consoleOutput.map((line, i) => {
                      let colorClass = "text-slate-300"; 
                      if (line.startsWith('>>>') || line.startsWith('...')) colorClass = "text-blue-400 opacity-75";
                      else if (line.includes('deleted') || line.includes('successfully')) colorClass = "text-emerald-400 font-bold";
                      else if (line.includes('Error') || line.includes('not found')) colorClass = "text-rose-400 font-bold";
                      else if (line.startsWith('#')) colorClass = "text-slate-500 italic";
                      
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
          </div>
        </div>
      </section>

      {/* 4. Tips & Recommendations */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-r from-red-800 via-rose-700 to-orange-800 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden mb-12 border border-rose-600 border-t-2 border-t-red-400 border-opacity-50">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-yellow-400 opacity-10 rounded-full blur-3xl"></div>
          
          <h2 className="text-3xl font-extrabold mb-6 flex items-center relative z-10">
            <Lightbulb className="w-8 h-8 mr-3 text-yellow-300" />
            💡 Developer Recommendations
          </h2>
          <p className="text-rose-100 mb-8 font-medium italic relative z-10 text-lg">From a Developer with 15+ years of Python experience:</p>
          
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            <div className="bg-black/30 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-black/40 transition-colors">
              <h3 className="font-bold text-xl mb-3 flex items-center">1️⃣ Never Assume Exists</h3>
              <p className="text-sm text-rose-100 mb-3">If you write <code className="bg-white/20 px-1 rounded mx-1">os.remove()</code> without <code className="bg-white/20 px-1 rounded mx-1">os.path.exists()</code>, your application <strong className="text-red-300 font-bold">will crash</strong> in production eventually when a file is missing.</p>
            </div>
            <div className="bg-black/30 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-black/40 transition-colors">
              <h3 className="font-bold text-xl mb-3">2️⃣ Use Absolute Paths</h3>
              <p className="text-sm text-rose-100 mb-3">In production, avoid relative paths like <code className="bg-white/20 px-1 rounded">"data.txt"</code>. Always use full Absolute paths to avoid deleting something in the wrong working directory.</p>
              <code className="text-[11px] font-mono bg-black/50 p-2 rounded block text-emerald-300 break-all">os.remove("C:/Users/files/data.txt")</code>
            </div>
            <div className="bg-red-900/60 backdrop-blur-md p-6 rounded-2xl border border-red-500/50 hover:bg-red-900/80 transition-colors text-white">
              <h3 className="font-bold text-xl mb-3 flex items-center"><AlertTriangle className="w-5 h-5 mr-2 text-yellow-400"/>3️⃣ Caution with shutil</h3>
              <p className="text-sm text-red-100 mb-3"><code className="bg-red-950 border border-red-800 px-1 rounded text-red-300 font-mono">shutil.rmtree()</code> acts like `rm -rf`. It permanently destroys massive folder trees with no prompt and <strong className="underline">no undo</strong>.</p>
            </div>
          </div>
        </div>

        {/* Tricks Grid */}
        <div className="grid md:grid-cols-3 gap-6">
           <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
             <h4 className="font-bold text-rose-600 dark:text-rose-400 mb-2">🚀 Trick 1: Delete Array</h4>
             <p className="text-xs text-slate-500 mb-3">Loop an array.</p>
             <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 p-3 rounded-lg"><span className="text-fuchsia-500">for</span> f <span className="text-fuchsia-500">in</span> [<span className="text-emerald-500">"a.txt"</span>, <span className="text-emerald-500">"b.txt"</span>]:<br/>&nbsp;&nbsp;&nbsp;&nbsp;os.remove(f)</pre>
           </div>
           <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
             <h4 className="font-bold text-rose-600 dark:text-rose-400 mb-2">🚀 Trick 2: Delete by Ext</h4>
             <p className="text-xs text-slate-500 mb-3">Match .endswith()</p>
             <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 p-3 rounded-lg"><span className="text-fuchsia-500">for</span> file <span className="text-fuchsia-500">in</span> os.listdir():<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-fuchsia-500">if</span> file.endswith(<span className="text-emerald-500">".txt"</span>):<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;os.remove(file)</pre>
           </div>
           <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
             <h4 className="font-bold text-rose-600 dark:text-rose-400 mb-2">🚀 Trick 3: Auto Clean</h4>
             <p className="text-xs text-slate-500 mb-3">Check & delete dir.</p>
             <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 p-3 rounded-lg"><span className="text-fuchsia-500">if</span> os.path.exists(d):<br/>&nbsp;&nbsp;&nbsp;&nbsp;os.rmdir(d)</pre>
           </div>
        </div>
      </section>

      {/* 5. Practice */}
      <section className="max-w-4xl mx-auto pb-16">
        <div className="bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 p-8 rounded-3xl border border-indigo-200 dark:border-indigo-700 shadow-lg relative">
          <Target className="absolute top-6 right-6 w-12 h-12 text-indigo-500/30" />
          <h2 className="text-2xl font-bold text-indigo-900 dark:text-indigo-400 mb-4 flex items-center">
            🧩 Practice Exercise
          </h2>
          <p className="mb-4 text-indigo-800 dark:text-indigo-300 font-medium tracking-wide">
            Task: Create a program that checks if a file named <code className="font-mono bg-white/50 dark:bg-black/30 px-1 rounded">sample.txt</code> exists. If it does, permanently delete it. Otherwise, print "File not found" to inform the user safely.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-indigo-50 dark:bg-slate-900 p-5 rounded-xl border border-indigo-200 dark:border-indigo-800">
              <h4 className="font-bold text-sm uppercase tracking-wider text-indigo-800 dark:text-indigo-400 mb-3">Target Output</h4>
              <div className="font-mono text-sm font-bold text-emerald-600 dark:text-emerald-400 bg-white/50 dark:bg-black/30 rounded p-4 shadow-inner mb-2">
                File deleted
              </div>
              <p className="text-xs text-indigo-600 dark:text-indigo-400 font-bold mb-2 uppercase text-center w-full">OR</p>
              <div className="font-mono text-sm font-bold text-rose-600 dark:text-rose-400 bg-white/50 dark:bg-black/30 rounded p-4 shadow-inner">
                File not found
              </div>
            </div>

            <div className="bg-white/60 dark:bg-black/40 p-5 rounded-xl backdrop-blur-sm border border-white/50 dark:border-white/10 group relative overflow-hidden">
               <div className="absolute inset-0 bg-slate-900/80 backdrop-blur flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300 z-10 cursor-pointer">
                <span className="text-white font-bold flex items-center bg-indigo-600 px-4 py-2 rounded-lg"><Lightbulb className="w-4 h-4 mr-2" /> Hover for Solution</span>
              </div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-3 flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-indigo-500" /> Example Solution</h4>
              <pre className="font-mono text-xs text-slate-800 dark:text-slate-300">
import os<br/><br/>
<span className="text-slate-500 italic"># 1️⃣ Check existence</span><br/>
if os.path.exists("sample.txt"):<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-500 italic"># 2️⃣ Execution block</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;os.remove("sample.txt")<br/>
&nbsp;&nbsp;&nbsp;&nbsp;print("File deleted")<br/>
<span className="text-slate-500 italic"># 3️⃣ Safe Catch block</span><br/>
else:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;print("File not found")
              </pre>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PythonDeleteFiles;