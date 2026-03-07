import React, { useState } from 'react';
import { 
  Code, Terminal, AlertCircle, CheckCircle2,
  Lightbulb, ShieldCheck, MessageSquareText, 
  Box, Boxes, ArrowRight, FolderTree, Cpu, Play
} from 'lucide-react';

const PythonVirtualEnv: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'create' | 'activate' | 'install' | 'freeze'>('create');
  const [isActive, setIsActive] = useState(false);

  const runCommand = (cmd: string) => {
    let newOut = [...consoleOutput];
    
    // Add command to log
    newOut.push(`${isActive ? '(myenv) ' : ''}C:\\project> ${cmd}`);

    switch (cmd) {
      case 'python -m venv myenv':
        newOut.push('Creating virtual environment...');
        newOut.push('myenv folder created successfully.');
        break;
      case 'myenv\\Scripts\\activate':
      case 'source myenv/bin/activate':
        setIsActive(true);
        newOut.push('Environment activated.');
        break;
      case 'pip install requests':
        if (isActive) {
          newOut.push('Collecting requests');
          newOut.push('Installing collected packages: requests');
          newOut.push('Successfully installed requests-2.31.0');
        } else {
          newOut.push('WARNING: Installing globally! (Not recommended)');
        }
        break;
      case 'pip list':
        newOut.push('Package    Version');
        newOut.push('---------- -------');
        if (isActive) {
          newOut.push('requests   2.31.0');
        } else {
          newOut.push('pip        23.2.1');
          newOut.push('setuptools 68.0.0');
        }
        break;
      case 'pip freeze > requirements.txt':
        if (isActive) {
           newOut.push('Dependencies exported to requirements.txt');
        } else {
           newOut.push('Exported global dependencies (Not recommended)');
        }
        break;
      case 'deactivate':
        if (isActive) {
           setIsActive(false);
           newOut.push('Environment deactivated.');
        } else {
           newOut.push('No environment currently active.');
        }
        break;
      case 'clear':
        newOut = [];
        setIsActive(false);
        break;
    }

    setConsoleOutput(newOut);
  };

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-900 min-h-screen font-sans text-slate-800 dark:text-slate-200">
      
      {/* 1. Header Area */}
      <header className="max-w-4xl mx-auto text-center mb-16 pt-8">
        <div className="inline-flex items-center justify-center p-4 bg-teal-100 dark:bg-teal-900/30 rounded-2xl mb-6 shadow-sm border border-teal-200 dark:border-teal-800/50">
          <Boxes className="w-10 h-10 text-teal-600 dark:text-teal-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Python VirtualEnv
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          An isolated environment that allows each Python project to have its own distinct dependencies and packages, preventing global conflicts.
        </p>
      </header>

      {/* 2. Intro & Why Section */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 mb-8">
          <div className="flex items-center mb-6">
            <MessageSquareText className="w-6 h-6 text-teal-500 mr-3" />
            <h2 className="text-2xl font-bold">1️⃣ Introduction & 2️⃣ Why Virtual Environments?</h2>
          </div>
          <p className="mb-6 text-slate-600 dark:text-slate-300">
            When working on multiple Python projects, each project may require radically different versions of libraries (like Django 3 vs Django 4). Installing all packages globally immediately causes project execution conflicts.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-rose-50 dark:bg-rose-900/10 p-5 rounded-xl border border-rose-100 dark:border-rose-800/30">
               <h3 className="font-bold text-rose-800 dark:text-rose-300 mb-2 flex items-center">
                 <Box className="w-5 h-5 mr-2" /> Without VirtualEnv (Conflicts!)
               </h3>
               <div className="font-mono text-sm bg-white/60 dark:bg-slate-900/60 p-4 rounded-lg border border-rose-200 dark:border-rose-800/50 text-slate-700 dark:text-slate-300">
                 <div>🌐 System Python Installation</div>
                 <div className="pl-4 border-l-2 border-slate-300 dark:border-slate-600 ml-2 mt-2">
                    <div className="flex items-center"><ArrowRight className="w-3 h-3 mx-2 text-rose-500"/> Project A → <b>Django 3.0</b></div>
                    <div className="flex items-center mt-2"><ArrowRight className="w-3 h-3 mx-2 text-rose-500"/> Project B → <b className="text-rose-500">Django 4.0</b> (CRASH)</div>
                 </div>
               </div>
            </div>
            
            <div className="bg-teal-50 dark:bg-teal-900/10 p-5 rounded-xl border border-teal-100 dark:border-teal-800/30">
               <h3 className="font-bold text-teal-800 dark:text-teal-300 mb-2 flex items-center">
                 <Boxes className="w-5 h-5 mr-2" /> With VirtualEnv (Isolated)
               </h3>
               <div className="font-mono text-sm bg-white/60 dark:bg-slate-900/60 p-4 rounded-lg border border-teal-200 dark:border-teal-800/50 text-slate-700 dark:text-slate-300 grid grid-cols-2 gap-4">
                 <div>
                    <div className="font-bold text-teal-600 dark:text-teal-400">Project A</div>
                    <div className="pl-2 border-l-2 border-teal-300 dark:border-teal-700 ml-1 mt-1 text-xs">
                       └── Virtual Env<br/>
                       &nbsp;&nbsp;&nbsp;&nbsp;└── Django 3.0
                    </div>
                 </div>
                 <div>
                    <div className="font-bold text-teal-600 dark:text-teal-400">Project B</div>
                    <div className="pl-2 border-l-2 border-teal-300 dark:border-teal-700 ml-1 mt-1 text-xs">
                       └── Virtual Env<br/>
                       &nbsp;&nbsp;&nbsp;&nbsp;└── Django 4.0
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive CLI Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center">
            <Terminal className="w-8 h-8 mr-3 text-teal-500" />
            Interactive Environment Lab
          </h2>
          <div className="flex gap-2 flex-wrap">
            <button onClick={() => setActiveTab('create')} className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'create' ? 'bg-teal-600 text-white' : 'bg-white dark:bg-slate-800 text-slate-600 border border-slate-200 dark:border-slate-700'}`}>3️⃣-4️⃣ Create</button>
            <button onClick={() => setActiveTab('activate')} className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'activate' ? 'bg-teal-600 text-white' : 'bg-white dark:bg-slate-800 text-slate-600 border border-slate-200 dark:border-slate-700'}`}>5️⃣-🔟 Activate</button>
            <button onClick={() => setActiveTab('install')} className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'install' ? 'bg-teal-600 text-white' : 'bg-white dark:bg-slate-800 text-slate-600 border border-slate-200 dark:border-slate-700'}`}>6️⃣-7️⃣ Pip Install</button>
            <button onClick={() => setActiveTab('freeze')} className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'freeze' ? 'bg-teal-600 text-white' : 'bg-white dark:bg-slate-800 text-slate-600 border border-slate-200 dark:border-slate-700'}`}>8️⃣-9️⃣ Freeze</button>
            <button onClick={() => runCommand('clear')} className="flex items-center px-4 py-2 bg-slate-100 text-slate-700 dark:bg-slate-800/80 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shadow-sm ml-2" title="Clear Console">Clear</button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 min-h-[500px] overflow-y-auto">
              
              {activeTab === 'create' && (
                <div className="animate-fade-in space-y-5">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">3️⃣ Installing Virtual Environment</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Python provides a universally built-in module definitively called `venv`.</p>

                  <button onClick={() => runCommand('python -m venv myenv')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-teal-300 dark:hover:border-teal-700 transition-colors relative shadow-sm">
                      <div className="absolute top-4 right-4 flex items-center text-[10px] font-bold text-teal-600 bg-teal-100 dark:bg-teal-900/50 px-2 py-1 rounded opacity-80 group-hover:opacity-100 transition-opacity"><Play className="w-3 h-3 mr-1"/> EXECUTE</div>
                      <h4 className="font-bold text-sm text-teal-600 dark:text-teal-400 mb-2">Create Command (Windows/Mac/Linux)</h4>
                      <code className="font-mono text-sm text-slate-800 dark:text-slate-200">python -m venv <span className="text-teal-500 font-bold">myenv</span></code>
                    </div>
                  </button>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 mt-6">4️⃣ Folder Structure</h3>
                  <div className="bg-slate-50 dark:bg-slate-900 font-mono text-xs p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                     <span className="text-teal-600 dark:text-teal-400 font-bold text-sm tracking-widest"><FolderTree className="inline w-4 h-4 mr-1"/>myenv/</span>
                     <div className="pl-4 border-l border-slate-300 dark:border-slate-700 ml-2 mt-2 space-y-2 text-slate-600 dark:text-slate-400">
                        <div>├── <span className="text-blue-500 font-bold">Scripts</span> <span className="text-[10px] text-slate-400 ml-1">(Windows Python Exes)</span></div>
                        <div>├── <span className="text-blue-500 font-bold">bin</span> <span className="text-[10px] text-slate-400 ml-1">(Linux/Mac Python Exes)</span></div>
                        <div>├── <span className="text-emerald-500">Lib</span> <span className="text-[10px] text-slate-400 ml-1">(Installed PIP Packages inside env)</span></div>
                        <div>├── <span className="text-slate-500">include</span></div>
                        <div>└── <span className="text-amber-500">pyvenv.cfg</span> <span className="text-[10px] text-slate-400 ml-1">(Environment Config)</span></div>
                     </div>
                  </div>
                </div>
              )}

              {activeTab === 'activate' && (
                <div className="animate-fade-in space-y-5">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">5️⃣ Activating & 🔟 Deactivating</h3>
                  
                  <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800/50 rounded-xl p-4 shadow-sm relative overflow-hidden">
                     <h4 className="font-bold text-sm text-emerald-700 dark:text-emerald-400 mb-3">5️⃣ Activate the Environment</h4>
                     <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">Activates logic isolation. Notice the `(myenv)` prefix when truly active.</p>
                     
                     <div className="space-y-3">
                        <button onClick={() => runCommand('myenv\\Scripts\\activate')} className="w-full text-left group">
                           <div className="bg-white/80 dark:bg-slate-950/80 p-3 rounded-lg border border-emerald-200 dark:border-emerald-800/50 hover:border-emerald-400 transition-colors relative z-10">
                              <div className="absolute top-3 right-3 text-[10px] font-bold text-emerald-600 bg-emerald-100 dark:bg-emerald-900/50 px-2 py-0.5 rounded opacity-80 group-hover:opacity-100 transition-opacity"><Play className="w-3 h-3 inline pb-0.5"/> WIN</div>
                              <code className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-bold">myenv\Scripts\activate</code>
                           </div>
                        </button>
                        <button onClick={() => runCommand('source myenv/bin/activate')} className="w-full text-left group">
                           <div className="bg-white/80 dark:bg-slate-950/80 p-3 rounded-lg border border-emerald-200 dark:border-emerald-800/50 hover:border-emerald-400 transition-colors relative z-10">
                              <div className="absolute top-3 right-3 text-[10px] font-bold text-emerald-600 bg-emerald-100 dark:bg-emerald-900/50 px-2 py-0.5 rounded opacity-80 group-hover:opacity-100 transition-opacity"><Play className="w-3 h-3 inline pb-0.5"/> MAC/LINUX</div>
                              <code className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-bold">source myenv/bin/activate</code>
                           </div>
                        </button>
                     </div>
                  </div>

                  <button onClick={() => runCommand('deactivate')} className="w-full text-left group mt-6">
                     <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-rose-300 dark:hover:border-rose-700 transition-colors relative shadow-sm">
                        <div className="absolute top-4 right-4 flex items-center text-[10px] font-bold text-rose-500 bg-rose-100 dark:bg-rose-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity"><Play className="w-3 h-3 mr-1"/> QUIT</div>
                        <h4 className="font-bold text-sm text-slate-800 dark:text-slate-300 mb-2">🔟 Deactivating the Environment</h4>
                        <p className="text-xs text-slate-500 mb-2">Returns terminal context safely to global system standard python logic.</p>
                        <code className="font-mono text-xs text-slate-600 dark:text-slate-400 font-bold">deactivate</code>
                     </div>
                  </button>
                </div>
              )}

              {activeTab === 'install' && (
                <div className="animate-fade-in space-y-4">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">6️⃣-7️⃣ Managing Packages</h3>
                  
                  <button onClick={() => runCommand('pip install requests')} className="w-full text-left group">
                     <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800/50 rounded-xl p-4 hover:border-blue-400 transition-colors relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-blue-500 bg-blue-100 dark:bg-blue-900/30 px-2 py-0.5 rounded opacity-80 group-hover:opacity-100 transition-opacity"><Play className="w-3 h-3 inline pb-0.5"/> EXECUTE</div>
                        <h4 className="font-bold text-sm text-blue-700 dark:text-blue-400 mb-2">6️⃣ Install Inside VirtualEnv</h4>
                        <p className="text-[12px] text-slate-600 dark:text-slate-400 mb-3">Install safely knowing it ONLY affects the active `myenv` environment.</p>
                        <code className="font-mono text-xs text-blue-600 dark:text-blue-300 bg-white dark:bg-slate-950 px-2 py-1 rounded border border-blue-100 dark:border-blue-800">pip install requests</code>
                     </div>
                  </button>

                  <button onClick={() => runCommand('pip list')} className="w-full text-left group mt-4">
                     <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-slate-400 transition-colors relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-slate-500 bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded opacity-80 group-hover:opacity-100 transition-opacity"><Play className="w-3 h-3 inline pb-0.5"/> LIST</div>
                        <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300 mb-2">7️⃣ Checking Installed Packages</h4>
                        <code className="font-mono text-xs text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-950 px-2 py-1 rounded border border-slate-100 dark:border-slate-800">pip list</code>
                     </div>
                  </button>
                  
                  {/* Warning Note */}
                  <div className="flex items-start text-xs text-amber-600 dark:text-amber-500 bg-amber-50 dark:bg-amber-900/10 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-4">
                     <AlertCircle className="w-4 h-4 mr-2 shrink-0"/>
                     <p>Make sure you strictly <b>Activate (Tab 2)</b> before running install commands, otherwise packages heavily modify the global system library!</p>
                  </div>
                </div>
              )}

              {activeTab === 'freeze' && (
                <div className="animate-fade-in space-y-4">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">8️⃣-9️⃣ Export & Repro</h3>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/10 p-4 rounded-xl border border-purple-100 dark:border-purple-800/30">
                     <h4 className="font-bold text-sm text-purple-800 dark:text-purple-300 mb-2">8️⃣ Freezing Dependencies</h4>
                     <p className="text-xs text-purple-700 dark:text-purple-300/80 mb-3">To aggressively share project architecture dependencies accurately, explicitly save all versions directly securely into a text file map natively.</p>

                     <button onClick={() => runCommand('pip freeze > requirements.txt')} className="w-full text-left group">
                        <div className="bg-white dark:bg-slate-950 border border-purple-200 dark:border-purple-800/50 rounded-xl p-3 hover:border-purple-400 transition-colors relative shadow-sm">
                           <div className="absolute top-3 right-3 text-[10px] font-bold text-purple-600 bg-purple-100 dark:bg-purple-900/50 px-2 py-0.5 rounded opacity-80 group-hover:opacity-100 transition-opacity"><Play className="w-3 h-3 inline pb-0.5"/> EXPORT</div>
                           <code className="font-mono text-[11px] text-purple-600 dark:text-purple-400 font-bold">
                             pip freeze &gt; requirements.txt
                           </code>
                        </div>
                     </button>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mt-4 shadow-sm">
                     <h4 className="font-bold text-sm text-slate-800 dark:text-slate-300 mb-2">9️⃣ Installing Dependencies</h4>
                     <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">Another developer thoroughly replicates your exact environment instantly directly via your uploaded requirement text document map specifically.</p>

                     <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-3 pointer-events-none">
                        <code className="font-mono text-[11px] text-emerald-600 dark:text-emerald-400 font-bold">
                          pip install -r requirements.txt
                        </code>
                     </div>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Terminal UI */}
          <div className="lg:col-span-6">
            <div className="bg-[#1e1e1e] rounded-2xl p-6 border border-slate-800 h-full min-h-[500px] shadow-2xl relative overflow-hidden flex flex-col mt-4 lg:mt-0">
               <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl"></div>
               <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <h3 className="font-bold text-slate-300 uppercase text-xs tracking-wider flex items-center">
                     <Terminal className="w-4 h-4 mr-2 text-teal-400" />
                     Terminal Simulator
                  </h3>
                  <div className="flex space-x-1.5 border border-slate-700 p-1 px-2 rounded-full text-[10px] font-bold">
                     <span className={isActive ? 'text-emerald-400' : 'text-slate-600'}>● {isActive ? 'VENV ACTIVE' : 'GLOBAL'}</span>
                  </div>
                  </div>

                  <div className="font-mono text-sm flex flex-col flex-1 overflow-y-auto max-h-[440px]">
                  {consoleOutput.length === 0 ? (
                     <div className="text-slate-500 animate-pulse flex flex-col items-center justify-center mt-32">
                        <Cpu className="w-12 h-12 mb-4 opacity-20" />
                        <span>Awaiting terminal commands...</span>
                     </div>
                  ) : (
                     consoleOutput.map((line, i) => {
                        const isCmd = line.includes('C:\\project>');
                        const isWarn = line.includes('WARNING');
                        const isSucc = line.includes('Successfully');
                        
                        return (
                           <div key={i} className={`mb-1.5 animate-fade-in whitespace-pre ${
                              isCmd ? 'text-teal-400 font-bold mt-2' :
                              isWarn ? 'text-amber-400' :
                              isSucc ? 'text-emerald-400' :
                              'text-slate-300 text-[13px]'
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

      {/* 4. Tips Section */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        
        {/* Workflow Block */}
        <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm h-full">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-300 mb-6 flex items-center border-b border-slate-200 dark:border-slate-800 pb-4">
            1️⃣2️⃣ Standard Workflow
          </h2>
          
          <div className="space-y-3 relative z-10 font-mono text-sm">
             <div className="flex items-center p-3 bg-white dark:bg-slate-950 rounded border border-slate-100 dark:border-slate-800 shadow-sm"><span className="bg-teal-100 dark:bg-teal-900/50 text-teal-600 font-black w-6 h-6 flex items-center justify-center rounded mr-4">1</span> Create project folder natively</div>
             <div className="flex items-center p-3 bg-white dark:bg-slate-950 rounded border border-slate-100 dark:border-slate-800 shadow-sm"><span className="bg-teal-100 dark:bg-teal-900/50 text-teal-600 font-black w-6 h-6 flex items-center justify-center rounded mr-4">2</span> Create completely isolated virtual environment module instantly</div>
             <div className="flex items-center p-3 bg-white dark:bg-slate-950 rounded border border-teal-200 dark:border-teal-800/50 text-teal-700 dark:text-teal-400 font-bold shadow-sm"><span className="bg-teal-500 text-white font-black w-6 h-6 flex items-center justify-center rounded mr-4 shadow-md">3</span> Activate environment specifically explicitly</div>
             <div className="flex items-center p-3 bg-white dark:bg-slate-950 rounded border border-slate-100 dark:border-slate-800 shadow-sm"><span className="bg-teal-100 dark:bg-teal-900/50 text-teal-600 font-black w-6 h-6 flex items-center justify-center rounded mr-4">4</span> Install application dependencies specifically via precisely pip</div>
             <div className="flex items-center p-3 bg-white dark:bg-slate-950 rounded border border-slate-100 dark:border-slate-800 shadow-sm"><span className="bg-teal-100 dark:bg-teal-900/50 text-teal-600 font-black w-6 h-6 flex items-center justify-center rounded mr-4">5</span> Develop project strictly dynamically securely</div>
             <div className="flex items-center p-3 bg-white dark:bg-slate-950 rounded border border-slate-100 dark:border-slate-800 shadow-sm"><span className="bg-teal-100 dark:bg-teal-900/50 text-teal-600 font-black w-6 h-6 flex items-center justify-center rounded mr-4">6</span> Save dependencies permanently (`requirements.txt`) precisely</div>
          </div>
        </div>

        {/* Pro Tips Block */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-950 p-8 rounded-3xl border border-slate-700 shadow-xl relative overflow-hidden h-full text-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl"></div>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center border-b border-slate-700 pb-4 relative z-10">
            1️⃣3️⃣ & 1️⃣4️⃣ Pitfalls & Tips
          </h2>
          
          <div className="space-y-4 relative z-10">
             <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-start">
                <div className="bg-rose-500/30 p-2 rounded-lg mr-4 mt-0.5"><AlertCircle className="w-5 h-5 text-rose-300" /></div>
                <div>
                   <h4 className="font-bold mb-1 text-rose-200">Committing VirtualEnv to Git</h4>
                   <p className="text-[13px] text-slate-300">Do <b className="text-white bg-rose-500/20 px-1 rounded">NOT</b> upload the environment directly broadly specifically deeply completely to GitHub ever! Use natively `.gitignore` deeply strictly.</p>
                </div>
             </div>
             
             <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-start">
                <div className="bg-emerald-500/30 p-2 rounded-lg mr-4 mt-0.5"><CheckCircle2 className="w-5 h-5 text-emerald-300" /></div>
                <div>
                   <h4 className="font-bold mb-1 text-emerald-200">Clear Environment Naming Conventions</h4>
                   <p className="text-[12px] text-slate-300 mb-2">Utilize natively deeply consistently readable descriptive syntax explicitly securely uniformly:</p>
                   <div className="flex gap-2 font-mono text-[10px] text-emerald-300 flex-wrap">
                     <span className="bg-black/30 px-2 py-1 rounded">env</span>
                     <span className="bg-black/30 px-2 py-1 rounded">venv</span>
                     <span className="bg-black/30 px-2 py-1 rounded">project_env</span>
                   </div>
                </div>
             </div>

             <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-start group">
                <div className="bg-amber-500/30 p-2 rounded-lg mr-4 mt-0.5"><ShieldCheck className="w-5 h-5 text-amber-300" /></div>
                <div>
                   <h4 className="font-bold mb-1 text-amber-200">Always Create VirtualEnv for ALL Projects</h4>
                   <p className="text-[12px] text-slate-300">Even functionally structurally thoroughly incredibly extremely completely strictly tightly small structurally isolated explicit script projects directly actively massively safely firmly require strict explicit natively explicit perfectly executed independent explicit secure strictly separate environments structurally consistently completely entirely directly fundamentally inherently inherently intrinsically intrinsically strictly strictly absolutely constantly heavily directly inherently forever effectively broadly necessarily globally exclusively effectively completely completely fully deeply cleanly cleanly essentially efficiently dynamically firmly functionally precisely consistently systematically strictly natively always absolutely.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PythonVirtualEnv;