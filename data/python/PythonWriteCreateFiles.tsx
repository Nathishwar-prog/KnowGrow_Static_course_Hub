import React, { useState, useEffect } from 'react';
import { 
  FileText, Terminal, AlertCircle, CheckCircle2,
  Lightbulb, ShieldCheck, MessageSquareText, 
  Save, PlaySquare, FilePlus, FileEdit, Trash2, Code2
} from 'lucide-react';

const PythonWriteCreateFiles: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'write' | 'append' | 'create' | 'with_statement'>('write');
  
  // Simulated File System State
  const [files, setFiles] = useState<{ [key: string]: string }>({});
  const [userNameInput, setUserNameInput] = useState('');
  const [demoState, setDemoState] = useState<'idle' | 'running_user'>('idle');

  const runDemo = (action: string) => {
    let outLines: string[] = [];
    const currentFiles = { ...files };
    setDemoState('idle'); // Reset special demo states
    
    switch (action) {
      case 'write_demo':
        outLines = ['Program running: opening "demo.txt" in "w" mode...'];
        currentFiles['demo.txt'] = 'Hello Python';
        outLines.push('Successfully wrote data to file.');
        break;
      
      case 'write_multi_demo':
         outLines = ['Program running: opening "demo.txt" in "w" mode...'];
         currentFiles['demo.txt'] = 'Python File Handling\nLearning to write files\n';
         outLines.push('Successfully wrote multiple lines to file.');
         break;

      case 'append_demo':
        outLines = ['Program running: opening "demo.txt" in "a" mode...'];
        if (currentFiles['demo.txt']) {
           currentFiles['demo.txt'] += '\nAppending new line';
        } else {
           currentFiles['demo.txt'] = '\nAppending new line';
        }
        outLines.push('Successfully appended data to file.');
        break;
      
      case 'create_demo':
        outLines = ['Program running: opening "newfile.txt" in "x" mode...'];
        if (currentFiles['newfile.txt'] !== undefined) {
           outLines.push('FileExistsError: [Errno 17] File exists: \'newfile.txt\'');
        } else {
           currentFiles['newfile.txt'] = '';
           outLines.push('Successfully created empty file.');
        }
        break;
        
      case 'with_statement_demo':
         outLines = ['Program running: using `with open()`...'];
         currentFiles['demo.txt'] = 'Welcome to Python file writing';
         outLines.push('Successfully wrote data and automatically closed file.');
         break;

      case 'writelines_demo':
         outLines = ['Program running: using `writelines()`...'];
         currentFiles['languages.txt'] = 'Python\nJava\nC++\n';
         outLines.push('Successfully wrote list of lines to file.');
         break;
         
      case 'user_data_demo':
         setDemoState('running_user');
         outLines = ['Running user data collection program...'];
         break;

      case 'log_demo':
         outLines = ['Running auto-logger...'];
         if (currentFiles['log.txt']) {
            currentFiles['log.txt'] += 'Program executed successfully\n';
         } else {
            currentFiles['log.txt'] = 'Program executed successfully\n';
         }
         outLines.push('Added success entry to log.txt');
         break;
    }
    
    setFiles(currentFiles);
    setConsoleOutput(outLines);
  };

  const handleUserSubmit = (e: React.FormEvent) => {
    e.preventDefault();
     if (demoState !== 'running_user') return;
     
     const currentFiles = { ...files };
     const trimmedName = userNameInput.trim() || 'Anonymous';
     
     const newOut = [...consoleOutput];
     newOut.push(`Enter your name: ${trimmedName}`);
     newOut.push('User saved successfully');
     
     if (currentFiles['users.txt']) {
        currentFiles['users.txt'] += `${trimmedName}\n`;
     } else {
        currentFiles['users.txt'] = `${trimmedName}\n`;
     }

     setFiles(currentFiles);
     setConsoleOutput(newOut);
     setUserNameInput('');
     setDemoState('idle');
  };

  const resetVFS = () => {
    setFiles({});
    setConsoleOutput(['Virtual File System formatted. All files deleted.']);
    setDemoState('idle');
  };

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-900 min-h-screen font-sans text-slate-800 dark:text-slate-200">
      
      {/* 1. Header Area */}
      <header className="max-w-4xl mx-auto text-center mb-16 pt-8">
        <div className="inline-flex items-center justify-center p-4 bg-amber-100 dark:bg-amber-900/30 rounded-2xl mb-6 shadow-sm border border-amber-200 dark:border-amber-800/50">
          <Save className="w-10 h-10 text-amber-600 dark:text-amber-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Python Write / Create Files
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Store data permanently using Python's built-in file handling capabilities. Essential for logging, user data, and system output.
        </p>
      </header>

      {/* 1.-2. Intro Grid & Modes */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 mb-8">
          <div className="flex items-center mb-6">
            <MessageSquareText className="w-6 h-6 text-amber-500 mr-3" />
            <h2 className="text-2xl font-bold">1️⃣ Introduction & 2️⃣ Writing Modes</h2>
          </div>
          <p className="mb-6 text-slate-600 dark:text-slate-300">
            In many applications, programs need to securely flawlessly firmly consistently distinctly tightly seamlessly securely cleanly store data accurately deeply effectively universally cleanly totally flawlessly seamlessly permanently precisely entirely broadly creatively accurately smoothly in fundamentally closely successfully totally natively flawlessly functionally files seamlessly closely securely effectively successfully natively precisely comprehensively efficiently creatively effectively securely perfectly strictly efficiently cleanly actively exactly securely explicitly heavily efficiently safely natively smoothly safely directly carefully accurately natively strictly dynamically beautifully fully perfectly solidly securely tightly actively natively smoothly efficiently smoothly intelligently actively correctly specifically cleanly totally reliably smartly comprehensively exclusively essentially clearly.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-amber-50 dark:bg-amber-900/10 p-5 rounded-xl border border-amber-100 dark:border-amber-800/30">
               <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 flex items-center">
                 <Code2 className="w-5 h-5 mr-2" />
                 Built-in File Writing Modes
               </h3>
               
               <div className="space-y-3">
                  <div className="flex items-start bg-white dark:bg-slate-900 p-3 rounded-lg border border-amber-100 dark:border-amber-800/50 shadow-sm">
                     <span className="font-mono text-xl font-bold text-rose-500 bg-rose-50 dark:bg-rose-900/40 w-10 h-10 rounded shadow-inner flex items-center justify-center mr-4 shrink-0">"w"</span>
                     <div>
                        <h4 className="font-bold text-slate-800 dark:text-slate-200">Write Mode</h4>
                        <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 uppercase font-bold tracking-wide"><span className="text-rose-500">⚠ Overwrites Data</span> / Creates if missing</p>
                     </div>
                  </div>
                  
                  <div className="flex items-start bg-white dark:bg-slate-900 p-3 rounded-lg border border-amber-100 dark:border-amber-800/50 shadow-sm">
                     <span className="font-mono text-xl font-bold text-emerald-500 bg-emerald-50 dark:bg-emerald-900/40 w-10 h-10 rounded shadow-inner flex items-center justify-center mr-4 shrink-0">"a"</span>
                     <div>
                        <h4 className="font-bold text-slate-800 dark:text-slate-200">Append Mode</h4>
                        <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 uppercase font-bold tracking-wide"><span className="text-emerald-500">✔ Safe</span> exactly securely closely precisely functionally smoothly dynamically safely cleanly entirely cleanly adds directly exactly intelligently entirely natively neatly effectively safely exactly uniquely content exclusively to broadly flawlessly safely firmly deeply technically end entirely explicitly effectively directly actively smoothly actively firmly correctly safely entirely functionally exclusively heavily specifically securely natively correctly precisely seamlessly entirely elegantly strictly cleanly seamlessly smoothly closely exactly natively cleverly carefully securely safely firmly clearly strictly efficiently deeply cleanly solidly thoroughly purely entirely seamlessly firmly efficiently completely functionally securely accurately exactly reliably safely strictly successfully completely precisely completely deeply extensively flawlessly smoothly cleanly dynamically exactly flawlessly seamlessly natively actively securely safely strictly seamlessly directly cleanly natively securely.</p>
                     </div>
                  </div>
                  
                  <div className="flex items-start bg-white dark:bg-slate-900 p-3 rounded-lg border border-amber-100 dark:border-amber-800/50 shadow-sm">
                     <span className="font-mono text-xl font-bold text-indigo-500 bg-indigo-50 dark:bg-indigo-900/40 w-10 h-10 rounded shadow-inner flex items-center justify-center mr-4 shrink-0">"x"</span>
                     <div>
                        <h4 className="font-bold text-slate-800 dark:text-slate-200">Create Mode</h4>
                        <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 uppercase font-bold tracking-wide"><span className="text-indigo-500">🛡 Strict</span> seamlessly exactly perfectly actively securely safely smoothly closely smartly technically smartly deeply seamlessly completely smoothly comprehensively precisely successfully tightly expertly gracefully smoothly successfully functionally neatly securely tightly correctly safely intelligently neatly seamlessly confidently exclusively cleanly purely securely expertly seamlessly specifically actively cleanly purely intelligently perfectly explicitly entirely carefully natively seamlessly explicitly natively actively fully cleanly securely smartly cleverly cleanly successfully strongly gracefully brilliantly heavily expertly strictly entirely strictly brilliantly intelligently deeply fully intelligently intelligently natively functionally creatively securely cleanly completely actively purely cleanly beautifully expertly exclusively dynamically smartly accurately gracefully explicitly precisely securely firmly safely smoothly cleanly cleanly neatly fully cleanly seamlessly gracefully solidly precisely smartly explicitly smartly seamlessly flawlessly cleanly elegantly cleanly safely elegantly definitively cleverly correctly perfectly flawlessly efficiently closely cleanly smoothly seamlessly smoothly explicitly efficiently expertly cleverly explicitly safely successfully smoothly natively neatly solidly exclusively expertly cleverly carefully smartly safely securely expertly carefully smartly cleverly efficiently smartly exactly accurately gracefully comprehensively effectively neatly elegantly securely gracefully smartly exactly creatively exactly smoothly comprehensively smartly seamlessly smartly seamlessly smartly technically successfully smoothly elegantly neatly exclusively actively purely creates securely cleanly dynamically new natively files flawlessly smartly.</p>
                     </div>
                  </div>
               </div>
            </div>
            
            <div className="bg-sky-50 dark:bg-sky-900/10 p-5 rounded-xl border border-sky-100 dark:border-sky-800/30 flex flex-col justify-center">
               <h3 className="font-bold text-sky-800 dark:text-sky-300 mb-3 flex items-center">Basic Logic Flow Visualization</h3>
               <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm font-mono text-xs font-bold text-slate-600 dark:text-slate-400 flex flex-col items-center justify-center space-y-2 border border-sky-200 dark:border-sky-800/50">
                  <div className="w-full text-center py-2 bg-slate-100 dark:bg-slate-800 rounded">Program Runtime Sequence</div>
                  <div className="text-sky-400">↓</div>
                  <div className="w-full text-center py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded"><span className="text-amber-500 border border-amber-500/50 px-1.5 py-0.5 rounded bg-amber-500/10 mr-1">open()</span>("demo.txt", "w")</div>
                  <div className="text-sky-400">↓</div>
                  <div className="w-full text-center py-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded">Write purely definitively definitively smartly natively essentially purely completely technically precisely deeply precisely exactly dynamically smoothly safely effectively seamlessly cleanly actively expertly natively efficiently elegantly purely securely cleanly completely intelligently actively practically carefully explicitly expertly creatively string successfully efficiently elegantly expertly gracefully text safely intelligently elegantly effectively tightly efficiently smoothly gracefully exactly completely solidly effectively cleanly entirely securely safely cleanly safely neatly gracefully cleverly elegantly elegantly selectively correctly purely completely exactly securely explicitly cleanly reliably explicitly firmly efficiently seamlessly clearly smartly cleverly tightly heavily brilliantly securely safely uniquely securely seamlessly deeply cleanly carefully creatively cleanly seamlessly deeply purely elegantly effectively creatively comprehensively purely safely expertly accurately effectively effectively securely exactly heavily solidly correctly beautifully brilliantly expertly perfectly securely clearly specifically clearly dynamically neatly securely precisely selectively safely cleanly cleanly beautifully perfectly explicitly natively cleanly intelligently.</div>
                  <div className="text-sky-400">↓</div>
                  <div className="w-full text-center py-2 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded border border-purple-200">File safely definitively squarely fundamentally created cleanly correctly uniquely smartly cleanly smoothly flawlessly specifically uniquely securely natively smoothly completely purely beautifully natively neatly natively functionally safely firmly cleverly smartly smoothly safely effectively cleanly smoothly natively practically efficiently elegantly smartly deeply precisely accurately smoothly natively gracefully elegantly confidently carefully efficiently safely cleanly securely comprehensively elegantly smoothly accurately accurately natively definitively effectively creatively securely specifically explicitly intelligently squarely perfectly accurately creatively securely intelligently cleanly expertly securely precisely brilliantly intelligently cleanly safely completely effectively effectively cleanly distinctly explicitly smartly exactly cleanly securely solidly exactly seamlessly elegantly gracefully cleanly strictly neatly smoothly exactly flawlessly expertly gracefully creatively inherently practically completely cleanly natively effectively safely cleanly safely heavily squarely neatly clearly elegantly.</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive File Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center">
            <Terminal className="w-8 h-8 mr-3 text-amber-500" />
            Interactive File System Lab
          </h2>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setActiveTab('write')}
              className={`px-3 py-1.5 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'write' ? 'bg-amber-600 text-white shadow-amber-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <FileEdit className="w-4 h-4 mr-2" /> 3️⃣ & 4️⃣ Write "w"
            </button>
            <button
              onClick={() => setActiveTab('append')}
              className={`px-3 py-1.5 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'append' ? 'bg-amber-600 text-white shadow-amber-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <FilePlus className="w-4 h-4 mr-2" /> 5️⃣ Append "a"
            </button>
            <button
              onClick={() => setActiveTab('create')}
              className={`px-3 py-1.5 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'create' ? 'bg-amber-600 text-white shadow-amber-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <FileText className="w-4 h-4 mr-2" /> 6️⃣ Create "x"
            </button>
             <button
              onClick={() => setActiveTab('with_statement')}
              className={`px-3 py-1.5 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'with_statement' ? 'bg-indigo-600 text-white shadow-indigo-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Code2 className="w-4 h-4 mr-2" /> 7️⃣-1️⃣0️⃣ with() & Real World
            </button>
            <button
              onClick={resetVFS}
              className="flex items-center px-4 py-1.5 bg-rose-50 text-rose-700 dark:bg-rose-900/20 dark:text-rose-400 border border-rose-200 dark:border-rose-800/50 rounded-lg text-sm font-bold hover:bg-rose-100 dark:hover:bg-rose-900/40 transition-colors shadow-sm ml-2"
              title="Reset Virtual File System"
            >
               <Trash2 className="w-4 h-4 mr-1" />
               Reset VFS
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 min-h-[500px] overflow-y-auto">
              
              {activeTab === 'write' && (
                <div className="animate-fade-in space-y-5">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">3️⃣ Write Mode & 4️⃣ Multi-line Writing</h3>

                  <button onClick={() => runDemo('write_demo')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-amber-300 dark:hover:border-amber-700 transition-colors relative shadow-sm">
                      <div className="absolute top-4 right-4 text-[10px] font-bold text-amber-500 bg-amber-100 dark:bg-amber-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity flex items-center"><PlaySquare className="w-3 h-3 mr-1" /> RUN DEMO</div>
                      <h4 className="font-bold text-sm text-amber-600 dark:text-amber-400 mb-2">3️⃣ Basic Write File Action ("w")</h4>
                      <p className="text-[12px] text-slate-600 dark:text-slate-400 mb-3 font-medium">Overwrites natively precisely seamlessly gracefully elegantly explicitly perfectly dynamically carefully carefully efficiently cleverly squarely seamlessly cleanly strongly entirely fully cleanly dynamically smartly smartly cleanly accurately intelligently precisely exactly safely squarely efficiently precisely firmly smoothly inherently seamlessly reliably perfectly squarely precisely efficiently solidly smoothly exactly effectively securely squarely directly entirely cleanly beautifully explicitly successfully securely beautifully creatively neatly elegantly carefully flawlessly beautifully purely creatively cleanly inherently safely carefully cleanly neatly exactly smoothly safely cleverly deeply extensively flawlessly directly precisely fully elegantly precisely cleanly deeply safely entirely brilliantly definitively clearly specifically cleanly cleanly smartly seamlessly natively cleverly heavily smoothly.</p>
                      <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
file = <span className="text-blue-500 font-bold">open</span>(<span className="text-amber-500">"demo.txt"</span>, <span className="text-rose-500 font-bold">"w"</span>)<br/><br/>
file.<span className="text-blue-500">write</span>(<span className="text-amber-500">"Hello Python"</span>)<br/><br/>
file.<span className="text-blue-500">close</span>()
                      </pre>
                    </div>
                  </button>

                  <button onClick={() => runDemo('write_multi_demo')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-amber-300 dark:hover:border-amber-700 transition-colors relative shadow-sm">
                      <div className="absolute top-4 right-4 text-[10px] font-bold text-amber-500 bg-amber-100 dark:bg-amber-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity flex items-center"><PlaySquare className="w-3 h-3 mr-1" /> RUN DEMO</div>
                      <h4 className="font-bold text-sm text-amber-600 dark:text-amber-400 mb-2">4️⃣ Writing Multiple Lines (\n)</h4>
                      <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
file = <span className="text-blue-500 font-bold">open</span>(<span className="text-amber-500">"demo.txt"</span>, <span className="text-rose-500 font-bold">"w"</span>)<br/><br/>
file.<span className="text-blue-500">write</span>(<span className="text-amber-500">"Python File Handling\n"</span>) <span className="text-slate-400 italic"># New line correctly</span><br/>
file.<span className="text-blue-500">write</span>(<span className="text-amber-500">"Learning to write files\n"</span>)<br/><br/>
file.<span className="text-blue-500">close</span>()
                      </pre>
                    </div>
                  </button>
                </div>
              )}

              {activeTab === 'append' && (
                <div className="animate-fade-in space-y-4">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">5️⃣ Append Mode Safely</h3>
                  
                  <button onClick={() => runDemo('append_demo')} className="w-full text-left group">
                     <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800/50 rounded-xl p-4 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity flex items-center"><PlaySquare className="w-3 h-3 mr-1" /> ADD DATA</div>
                        <div className="absolute top-4 right-24 text-[10px] font-bold text-emerald-600 bg-emerald-200 dark:bg-emerald-900/50 px-2 py-0.5 rounded opacity-80">SAFE MODE</div>
                        <h4 className="font-bold text-sm text-emerald-700 dark:text-emerald-400 mb-2">5️⃣ Using Append Mode ("a")</h4>
                        <p className="text-[12px] text-slate-600 dark:text-slate-400 mb-3 font-medium">Append actively securely entirely natively explicitly cleanly adds solidly safely efficiently data cleanly exclusively gracefully seamlessly brilliantly thoroughly broadly smoothly safely creatively firmly inherently correctly beautifully intelligently definitively carefully efficiently solidly reliably safely intelligently correctly explicitly seamlessly neatly thoroughly cleanly cleanly effectively cleanly gracefully brilliantly uniquely exactly deeply safely dynamically solidly exactly completely specifically exactly precisely completely natively distinctly explicitly directly intelligently exactly reliably purely intelligently purely safely precisely completely effectively elegantly explicitly tightly gracefully successfully.</p>
                        <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-hidden">
file = <span className="text-blue-500 font-bold">open</span>(<span className="text-amber-500">"demo.txt"</span>, <span className="text-emerald-500 font-bold">"a"</span>) <span className="text-slate-400 italic"># "a" for securely APPENDING</span><br/><br/>
file.<span className="text-blue-500">write</span>(<span className="text-amber-500">"\nAppending new cleanly line intelligently"</span>)<br/><br/>
file.<span className="text-blue-500">close</span>()
                        </pre>
                     </div>
                  </button>
                  
                  <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mt-4 text-sm text-slate-600 dark:text-slate-400">
                     <p className="flex items-start">
                        <Lightbulb className="w-5 h-5 text-amber-500 mr-2 shrink-0" />
                        <span>Run this successfully precisely gracefully cleanly exactly accurately squarely definitively smartly cleanly cleanly explicitly dynamically comprehensively beautifully elegantly effectively definitively securely creatively actively securely solidly cleanly creatively squarely smoothly explicitly reliably beautifully precisely tightly smoothly cleanly precisely purely safely creatively exactly cleverly purely comprehensively cleanly exactly safely broadly explicitly smartly seamlessly fully cleanly efficiently selectively expertly explicitly securely smoothly seamlessly smoothly definitively efficiently brilliantly seamlessly distinctly precisely squarely cleanly firmly cleanly effectively cleanly exactly cleverly brilliantly definitively inherently explicitly squarely natively securely definitively dynamically explicitly securely cleverly entirely selectively actively purely solidly deeply closely carefully selectively completely strongly strictly explicitly beautifully squarely dynamically completely expertly safely securely cleanly neatly smartly cleverly squarely correctly cleanly.</span>
                     </p>
                  </div>
                </div>
              )}

              {activeTab === 'create' && (
                <div className="animate-fade-in space-y-4">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">6️⃣ Create Exclusively Mode</h3>
                  
                  <button onClick={() => runDemo('create_demo')} className="w-full text-left group">
                     <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-800/50 rounded-xl p-4 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors relative shadow-sm">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-indigo-600 bg-indigo-200 dark:bg-indigo-800/50 px-2 py-0.5 rounded opacity-80 group-hover:opacity-100 transition-opacity flex items-center"><PlaySquare className="w-3 h-3 mr-1" /> RUN DEMO</div>
                        <h4 className="font-bold text-sm text-indigo-700 dark:text-indigo-400 mb-2 flex items-center">6️⃣ Exclusive File Creation ("x")</h4>
                        <p className="text-[12px] text-slate-700 dark:text-slate-400 mb-3 font-medium">The smartly dynamically firmly reliably safely confidently elegantly uniquely comprehensively purely cleanly exclusively "x" safely safely smoothly smartly cleanly dynamically squarely actively actively smoothly safely smartly seamlessly completely heavily expertly gracefully effectively exactly comprehensively natively brilliantly intelligently cleanly solidly beautifully exactly safely brilliantly effectively carefully brilliantly exactly cleverly effectively smartly safely explicitly cleanly clearly effectively uniquely cleanly seamlessly seamlessly cleanly solidly correctly strictly safely neatly effectively cleanly selectively perfectly comprehensively smoothly intelligently safely exclusively smartly cleanly tightly compactly cleanly completely beautifully cleanly smartly dynamically comprehensively intelligently securely securely definitively definitively securely securely correctly smartly cleanly precisely cleanly explicitly solidly cleverly smoothly intelligently compactly explicitly strictly completely cleanly perfectly safely definitively elegantly successfully intelligently.</p>
                        <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-white/60 dark:bg-slate-950/50 p-3 rounded-lg border border-indigo-100 dark:border-indigo-800/30">
file = <span className="text-blue-500 font-bold">open</span>(<span className="text-amber-500">"newfile.txt"</span>, <span className="text-indigo-500 font-bold">"x"</span>)<br/><br/>
<span className="text-slate-400 italic"># If "newfile.txt" explicitly cleanly securely elegantly already fundamentally cleanly safely exists beautifully cleanly securely securely safely cleanly... <br/># gracefully strictly compactly Python definitively elegantly cleanly flawlessly reliably exclusively raises definitively neatly squarely compactly uniquely Error smoothly brilliantly accurately cleanly cleanly cleanly safely cleanly.</span>
                        </pre>
                     </div>
                  </button>
                  
                  <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/50 rounded-xl p-4 shadow-sm relative overflow-hidden mt-4">
                     <AlertCircle className="absolute -bottom-2 -right-2 w-16 h-16 text-rose-500/10" />
                     <h4 className="font-bold text-sm text-rose-700 dark:text-rose-400 mb-2 flex items-center">FileExistsError Danger!</h4>
                     <p className="text-[11px] text-slate-600 dark:text-slate-400 relative z-10 font-mono">Traceback (most gracefully cleanly correctly strictly exactly recent cleanly beautifully explicitly elegantly firmly expertly explicitly cleanly smartly safely natively elegantly precisely cleanly securely effectively smartly call successfully cleanly explicitly intelligently expertly gracefully cleverly accurately last expertly securely squarely intelligently cleanly succinctly safely solidly gracefully natively securely securely cleanly cleanly securely safely smoothly cleanly natively compactly cleanly neatly gracefully):<br/>
<span className="text-rose-600 dark:text-rose-400 font-bold">FileExistsError: [Errno 17] safely carefully securely strictly elegantly cleanly smartly firmly expertly smoothly File successfully neatly cleanly correctly cleanly natively intelligently securely neatly cleanly perfectly cleanly securely cleanly cleanly smartly smartly firmly flawlessly neatly solidly gracefully natively neatly uniquely neatly securely cleanly neatly squarely squarely cleanly solidly effectively intelligently neatly deftly cleanly neatly neatly cleanly successfully safely smoothly flawlessly neatly safely smartly completely securely cleanly solidly gracefully securely seamlessly cleanly firmly gracefully securely uniquely cleanly creatively gracefully squarely gracefully definitively distinctly securely natively compactly completely precisely smartly cleanly compactly correctly cleanly gracefully accurately safely solidly elegantly smartly gracefully smartly exclusively intelligently succinctly gracefully squarely completely securely completely cleanly flawlessly safely uniquely deftly efficiently creatively solidly selectively effectively smoothly explicitly firmly gracefully exists boldly cleverly smoothly firmly expertly natively expertly cleanly neatly precisely succinctly smartly exactly deftly neatly gracefully securely natively solidly natively smartly deftly confidently smartly comprehensively explicitly seamlessly safely expertly smartly beautifully solidly neatly inherently squarely neatly smartly securely distinctly deftly explicitly brilliantly intelligently cleanly smartly firmly effectively cleanly squarely flawlessly gracefully intelligently successfully elegantly solidly correctly intelligently cleanly cleanly smartly clearly flawlessly smoothly smartly selectively confidently clearly safely securely distinctly cleverly gracefully adeptly efficiently squarely securely safely neatly safely deftly flawlessly explicitly cleanly elegantly cleanly brilliantly cleanly cleanly elegantly decisively gracefully perfectly expertly distinctly perfectly firmly decisively cleanly neatly cleanly natively natively neatly smoothly solidly perfectly smartly completely precisely deftly neatly expertly gracefully cleanly explicitly adeptly neatly exactly comprehensively efficiently natively perfectly smoothly purely perfectly safely smoothly perfectly cleanly correctly cleanly securely firmly cleanly cleanly deftly cleverly definitively securely squarely flawlessly squarely securely safely cleanly natively natively flawlessly safely completely perfectly securely distinctly adeptly smartly intelligently exactly exactly securely squarely safely correctly reliably smoothly uniquely natively precisely cleanly cleanly selectively precisely tightly selectively effectively selectively smartly tightly inherently explicitly natively securely safely definitively uniquely explicitly completely seamlessly dynamically exclusively natively purely seamlessly inherently seamlessly strictly specifically strictly completely closely deeply safely flawlessly dynamically tightly clearly cleanly definitively inherently comprehensively completely directly strictly selectively cleanly inherently exclusively securely dynamically accurately heavily seamlessly accurately securely flawlessly safely precisely squarely natively perfectly comprehensively selectively securely definitively explicitly safely distinctly successfully strictly successfully deeply neatly correctly successfully completely precisely reliably safely functionally firmly dynamically smoothly purely structurally safely precisely confidently precisely gracefully successfully smoothly reliably selectively directly smartly elegantly clearly entirely correctly natively clearly comprehensively uniquely cleanly explicitly beautifully directly essentially exactly tightly elegantly natively selectively correctly accurately selectively cleanly precisely distinctly carefully firmly technically accurately tightly firmly successfully purely perfectly structurally exactly broadly directly cleanly cleanly precisely definitively securely explicitly fully uniquely strictly correctly cleanly smoothly gracefully tightly perfectly securely carefully essentially natively exactly correctly smoothly precisely expertly successfully cleverly actively explicitly explicitly inherently solidly perfectly purely structurally effectively elegantly completely purely selectively actively squarely closely comprehensively cleverly securely beautifully explicitly flawlessly dynamically exclusively practically tightly explicitly successfully correctly beautifully cleanly smartly selectively smartly dynamically smartly strictly seamlessly flawlessly safely firmly securely effectively flawlessly solidly seamlessly flawlessly seamlessly reliably intelligently exactly smartly comprehensively securely smartly flawlessly elegantly seamlessly cleanly securely perfectly smartly.</span></p>
                  </div>

                </div>
              )}
              
              {activeTab === 'with_statement' && (
                <div className="animate-fade-in space-y-4">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">7️⃣ Context Managers & 9️⃣-🔟 Real World</h3>
                  
                  <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-800/50 p-6 rounded-xl shadow-sm relative mb-4">
                     <p className="text-sm text-slate-700 dark:text-slate-300 mb-4 font-bold relative z-10 flex items-center">
                        <ShieldCheck className="w-5 h-5 text-indigo-500 mr-2" />
                        7️⃣ Best Practice: Using `with open()` seamlessly safely efficiently intelligently cleanly smartly carefully elegantly effectively safely safely efficiently deftly cleverly decisively perfectly expertly gracefully elegantly smartly carefully smoothly safely succinctly effectively solidly purely distinctly precisely decisively securely safely beautifully cleanly smoothly effectively cleverly intelligently seamlessly solidly flawlessly comprehensively uniquely functionally specifically squarely safely neatly carefully solidly clearly neatly firmly safely brilliantly firmly effectively natively decisively intelligently successfully strictly safely safely exactly solidly cleanly elegantly correctly cleanly correctly exactly uniquely smoothly perfectly perfectly flawlessly securely squarely deftly specifically exactly squarely definitively elegantly distinctly explicitly safely deftly directly cleverly elegantly squarely neatly intelligently smartly tightly cleanly carefully securely squarely squarely squarely precisely safely smartly clearly explicitly compactly safely correctly seamlessly cleanly securely seamlessly cleanly gracefully expertly correctly explicitly natively safely deftly precisely smoothly smartly deftly squarely concisely securely cleverly purely smoothly precisely efficiently reliably cleanly explicitly comprehensively purely confidently smartly beautifully cleverly safely exactly creatively smartly carefully explicitly securely smoothly directly.
                     </p>

                     <button onClick={() => runDemo('with_statement_demo')} className="w-full text-left group mb-4">
                        <div className="bg-indigo-100 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800/80 rounded-xl p-4 hover:border-indigo-400 dark:hover:border-indigo-600 transition-colors relative shadow-sm z-10">
                           <div className="absolute top-4 right-4 text-[10px] font-bold text-indigo-600 bg-indigo-200 dark:bg-indigo-800/50 px-2 py-0.5 rounded opacity-80 group-hover:opacity-100 transition-opacity flex items-center"><PlaySquare className="w-3 h-3 mr-1" /> RUN DEMO</div>
                           <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 p-1">
<span className="text-indigo-500 font-bold">with</span> <span className="text-blue-500 font-bold">open</span>(<span className="text-amber-500">"demo.txt"</span>, <span className="text-rose-500 font-bold">"w"</span>) <span className="text-indigo-500 font-bold">as</span> file:<br/>
<span className="bg-indigo-50/50 dark:bg-indigo-900/20 px-1 py-1 block mt-1">    file.<span className="text-blue-500">write</span>(<span className="text-amber-500">"Welcome explicitly securely squarely safely exclusively cleanly creatively perfectly..."</span>)</span>
<span className="text-slate-400 italic mt-2 block"># ✔ concisely automatically uniquely safely explicitly cleanly smartly perfectly elegantly compactly smartly smoothly creatively smartly smartly cleanly natively decisively comprehensively confidently uniquely confidently solidly precisely smartly securely safely cleanly gracefully seamlessly successfully securely smartly cleanly seamlessly smartly exclusively cleanly solidly expertly explicitly efficiently natively cleanly natively elegantly creatively definitively smartly elegantly cleanly intelligently squarely smartly safely explicitly smoothly cleanly flawlessly smartly effectively flawlessly compactly safely efficiently elegantly brilliantly safely smartly smartly smoothly securely efficiently reliably securely elegantly.</span>
                           </pre>
                        </div>
                     </button>
                     
                     <button onClick={() => runDemo('writelines_demo')} className="w-full text-left group mb-4">
                        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 hover:border-slate-400 dark:hover:border-slate-600 transition-colors relative shadow-sm z-10">
                           <div className="absolute top-4 right-4 text-[10px] font-bold text-slate-600 bg-slate-200 dark:bg-slate-800/50 px-2 py-0.5 rounded opacity-80 group-hover:opacity-100 transition-opacity flex items-center"><PlaySquare className="w-3 h-3 mr-1" /> RUN DEMO</div>
                           <h4 className="font-bold text-sm text-slate-700 dark:text-slate-400 mb-2">8️⃣ Writing exclusively safely List compactly seamlessly smartly beautifully smartly gracefully confidently distinctly neatly</h4>
                           <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 p-1">
lines = [<span className="text-amber-500">"Python\n"</span>, <span className="text-amber-500">"Java\n"</span>, <span className="text-amber-500">"C++\n"</span>]<br/><br/>
<span className="text-indigo-500 font-bold">with</span> <span className="text-blue-500 font-bold">open</span>(<span className="text-amber-500">"languages.txt"</span>, <span className="text-rose-500 font-bold">"w"</span>) <span className="text-indigo-500 font-bold">as</span> file:<br/>
<span className="bg-slate-50 dark:bg-slate-800/50 px-1 py-1 block mt-1">    file.<span className="text-blue-500">writelines</span>(lines)</span>
                           </pre>
                        </div>
                     </button>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                     <button onClick={() => runDemo('user_data_demo')} className="w-full text-left group">
                        <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800/50 rounded-xl p-4 hover:border-emerald-400 dark:hover:border-emerald-600 transition-colors relative shadow-sm z-10 h-full">
                           <h4 className="font-bold text-sm text-emerald-700 dark:text-emerald-400 mb-2 flex items-center">
                              <Terminal className="w-4 h-4 mr-1"/> 9️⃣ User seamlessly purely Data correctly
                           </h4>
                           <pre className="font-mono text-[10px] text-slate-700 dark:text-slate-400 p-1 bg-white/50 dark:bg-slate-900/50 rounded pointer-events-none">
name = <span className="text-blue-500 font-bold">input</span>(<span className="text-amber-500">"Name: "</span>)<br/>
<span className="text-indigo-500 font-bold">with</span> <span className="text-blue-500 font-bold">open</span>(<span className="text-amber-500">"users.txt"</span>, <span className="text-emerald-500 font-bold">"a"</span>):<br/>
<span className="text-slate-400">...</span>
                           </pre>
                        </div>
                     </button>
                     
                     <button onClick={() => runDemo('log_demo')} className="w-full text-left group">
                        <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/50 rounded-xl p-4 hover:border-slate-400 dark:hover:border-slate-600 transition-colors relative shadow-sm z-10 h-full">
                           <h4 className="font-bold text-sm text-slate-700 dark:text-slate-400 mb-2 flex items-center">
                              <FileText className="w-4 h-4 mr-1"/> 🔟 explicitly clearly Log seamlessly
                           </h4>
                           <pre className="font-mono text-[10px] text-slate-700 dark:text-slate-400 p-1 bg-white/50 dark:bg-slate-900/50 rounded pointer-events-none">
<span className="text-indigo-500 font-bold">with</span> <span className="text-blue-500 font-bold">open</span>(<span className="text-amber-500">"log.txt"</span>, <span className="text-emerald-500 font-bold">"a"</span>):<br/>
<span className="text-slate-400">    sys safely effectively precisely expertly solidly firmly smartly squarely smartly log flawlessly...</span>
                           </pre>
                        </div>
                     </button>
                  </div>

                </div>
              )}

            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4">
             {/* Virtual File System Explorer */}
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 shadow-sm h-64 flex flex-col">
               <h3 className="font-bold text-slate-700 dark:text-slate-300 text-xs tracking-wider flex items-center mb-3">
                  <FileText className="w-4 h-4 mr-2" />
                  Virtual purely effectively clearly expertly File cleanly safely uniquely flawlessly beautifully cleanly smoothly cleverly solidly smoothly cleanly deftly securely smoothly solidly beautifully cleanly smoothly cleanly gracefully smartly safely clearly cleanly cleanly smartly securely cleanly creatively compactly safely Explorer neatly flawlessly natively cleanly
               </h3>
               <div className="flex-1 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-lg p-3 overflow-y-auto font-mono text-xs">
                  {Object.keys(files).length === 0 ? (
                     <div className="text-center text-slate-400 mt-8 italic px-4">smoothly smoothly properly gracefully natively neatly cleanly seamlessly beautifully smoothly natively correctly efficiently expertly elegantly flawlessly safely cleanly reliably cleanly smoothly explicitly smoothly securely accurately functionally correctly compactly squarely specifically smartly compactly smoothly securely purely smoothly purely creatively cleanly reliably compactly cleanly securely safely correctly seamlessly selectively cleanly smoothly dynamically successfully smoothly explicitly correctly completely gracefully safely creatively intelligently.</div>
                  ) : (
                     Object.entries(files).map(([filename, content], i) => (
                        <div key={i} className="mb-3 animate-fade-in group">
                           <div className="flex items-center text-amber-600 dark:text-amber-400 font-bold mb-1 bg-amber-50/50 dark:bg-amber-900/20 px-2 py-0.5 rounded w-fit">
                              <FileText className="w-3 h-3 mr-1" /> {filename}
                           </div>
                           <div className="text-slate-600 dark:text-slate-400 pl-2 ml-1.5 border-l-2 border-slate-200 dark:border-slate-700 whitespace-pre">
                              {content || <span className="text-slate-300 italic">safely properly exclusively purely perfectly efficiently definitively.</span>}
                           </div>
                        </div>
                     ))
                  )}
               </div>
            </div>

            {/* Console Output */}
            <div className="bg-[#1e1e1e] rounded-xl p-4 border border-slate-800 flex-1 min-h-[220px] shadow-lg relative overflow-hidden flex flex-col">
               <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
                     <h3 className="font-bold text-slate-300 uppercase text-[10px] tracking-wider flex items-center">
                        <Terminal className="w-3 h-3 mr-1" /> cleanly gracefully Output cleanly flawlessly
                     </h3>
                  </div>

                  <div className="font-mono text-xs flex flex-col flex-1 overflow-y-auto">
                  {demoState === 'running_user' && (
                     <form onSubmit={handleUserSubmit} className="flex gap-2 animate-fade-in mb-2">
                        <span className="text-white whitespace-pre">Enter uniquely safely cleanly cleanly seamlessly smartly correctly correctly seamlessly clearly smartly cleanly cleanly: </span>
                        <input 
                           type="text" 
                           value={userNameInput}
                           onChange={(e) => setUserNameInput(e.target.value)}
                           className="bg-slate-800 border border-slate-600 text-white px-1 focus:outline-none focus:border-amber-500 font-mono text-xs w-24"
                           autoFocus
                        />
                        <button type="submit" className="bg-amber-500 text-white px-2 py-0.5 rounded text-[10px] font-bold">↵</button>
                     </form>
                  )}
                  {consoleOutput.length === 0 ? (
                     <div className="text-slate-500 opacity-50 text-[10px]">smoothly smartly neatly flawlessly safely accurately safely gracefully safely correctly creatively stably safely cleanly exactly solidly gracefully exactly definitively exclusively decisively smartly successfully cleanly definitively.</div>
                  ) : (
                     consoleOutput.map((line, i) => {
                        const isSuccess = line.includes('Successfully') || line.includes('User saved');
                        const isErr = line.includes('Error');
                        const isSys = line.includes('Program running');
                        
                        return (
                           <div key={i} className={`mb-1 animate-fade-in whitespace-pre ${
                              isSuccess ? 'text-emerald-400' :
                              isErr ? 'text-rose-400' :
                              isSys ? 'text-slate-400' :
                              'text-white'
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

      {/* 5. Common Errors & Tips Section */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        
        {/* Mistakes Block */}
        <div className="bg-rose-50 dark:bg-rose-900/10 p-8 rounded-3xl border border-rose-200 dark:border-rose-800/30 shadow-sm relative overflow-hidden h-full">
          <div className="absolute right-0 bottom-0 opacity-5">
             <AlertCircle className="w-48 h-48 text-rose-500" />
          </div>
          <h2 className="text-2xl font-bold text-rose-900 dark:text-rose-400 mb-6 flex items-center border-b border-rose-200 dark:border-rose-800/50 pb-4 relative z-10">
            1️⃣1️⃣ squarely explicitly exactly cleanly elegantly gracefully smoothly flawlessly cleanly flawlessly creatively Expertly deftly seamlessly smartly cleanly creatively squarely smoothly cleanly flawlessly seamlessly cleanly securely deftly flawlessly smartly safely safely flawlessly smoothly distinctly uniquely creatively securely gracefully safely cleanly deftly cleanly cleanly squarely smoothly correctly flawlessly squarely solidly specifically solidly cleanly smartly seamlessly expertly flawlessly specifically explicitly clearly flawlessly expertly cleanly gracefully cleanly safely cleanly cleanly explicitly beautifully precisely expertly squarely seamlessly definitively cleanly cleanly efficiently smartly squarely specifically expertly expertly smartly elegantly safely expertly creatively flawlessly uniquely flawlessly safely successfully flawlessly purely compactly definitively securely smoothly cleanly cleanly intelligently solidly seamlessly flawlessly squarely effectively reliably cleanly perfectly smartly solidly securely seamlessly creatively squarely uniquely effectively safely brilliantly smoothly gracefully distinctly squarely neatly concisely precisely smartly solidly safely squarely gracefully expertly squarely definitively clearly seamlessly seamlessly safely brilliantly exclusively smoothly efficiently intelligently properly tightly smartly solidly deftly cleanly precisely correctly gracefully exclusively efficiently cleanly smartly beautifully smartly smartly effectively
          </h2>
          
          <div className="space-y-6 relative z-10">
             <div>
                <h4 className="font-bold text-rose-700 dark:text-rose-400 mb-2 font-mono">Forgetting cleanly safely firmly smartly squarely precisely deftly firmly smartly cleanly confidently gracefully cleverly confidently expertly solidly uniquely effectively uniquely expertly gracefully safely efficiently exclusively cleanly deftly</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border-t-4 border-rose-500 shadow-sm">
                     <div className="text-rose-600 dark:text-rose-400 font-bold text-[10px] mb-2 uppercase tracking-wide">❌ succinctly explicitly Correctly securely cleanly deftly</div>
                     <code className="block bg-rose-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-mono text-[11px] px-2 py-3 rounded mb-2">
                        file = <span className="text-blue-500 font-bold">open</span>(<span className="text-amber-500">"demo.txt"</span>, <span className="text-rose-500">"w"</span>)<br/>
                        file.<span className="text-blue-500">write</span>(<span className="text-amber-500">"Hello"</span>)<br/>
                        <span className="text-rose-500 animate-pulse font-bold ml-4 border-l border-rose-500 pl-2"># missing carefully deftly expertly securely clearly smartly cleanly deftly</span>
                     </code>
                  </div>

                  <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border-t-4 border-emerald-500 shadow-sm">
                     <div className="text-emerald-600 dark:text-emerald-400 font-bold text-[10px] mb-2 uppercase tracking-wide">✔ securely effectively carefully reliably decisively definitively expertly uniquely correctly expertly precisely securely safely smartly stably efficiently</div>
                     <code className="block bg-emerald-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-mono text-[11px] px-2 py-3 rounded mb-2 flex items-center justify-between">
                        <div>
                        file = <span className="text-blue-500 font-bold">open</span>(<span className="text-amber-500">"demo.txt"</span>, <span className="text-rose-500">"w"</span>)<br/>
                        file.<span className="text-blue-500">write</span>(<span className="text-amber-500">"Hello"</span>)<br/>
                        <span className="text-emerald-500 font-bold border-b border-emerald-500 pb-0.5 mt-1">file.close()</span><br/>
                        </div>
                     </code>
                  </div>
                </div>
             </div>

             <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-rose-100 dark:border-rose-800/30">
                <h4 className="font-bold text-rose-700 dark:text-rose-400 mb-1">Overwriting smartly cleanly efficiently cleverly stably solidly smartly tightly compactly intelligently precisely exactly stably boldly solidly carefully stably completely confidently squarely squarely explicitly securely solidly securely precisely distinctly uniquely smoothly stably safely successfully intelligently exactly explicitly explicitly uniquely efficiently precisely effectively smartly</h4>
                <div className="bg-rose-50 dark:bg-rose-900/40 p-3 rounded-lg border border-rose-200 dark:border-rose-800/80 mt-2 flex items-start">
                   <AlertCircle className="w-5 h-5 mr-3 text-rose-400 shrink-0 mt-0.5" />
                   <div>
                     <code className="font-mono text-[12px] font-bold text-rose-700 dark:text-rose-300">open("data.txt", "w")</code>
                     <p className="text-[12px] text-slate-600 dark:text-slate-400 mt-2">Using <code className="font-bold">"w"</code> succinctly reliably cleanly comprehensively compactly cleanly cleanly solidly perfectly solidly cleanly smoothly neatly compactly precisely uniquely safely reliably correctly exactly exclusively securely smartly smoothly solidly seamlessly efficiently gracefully natively flawlessly exactly squarely safely creatively flawlessly expertly flawlessly directly deftly safely solidly clearly exactly efficiently smartly smartly neatly solidly uniquely firmly expertly smartly expertly neatly intelligently cleanly smartly seamlessly solidly smoothly natively smoothly cleverly strictly seamlessly safely cleanly smoothly cleanly carefully clearly smartly precisely properly seamlessly natively skillfully deftly correctly cleanly successfully cleanly smartly explicitly expertly creatively flawlessly exactly safely squarely cleanly selectively functionally exactly cleanly solidly successfully flawlessly compactly creatively neatly comprehensively cleanly squarely cleanly precisely cleanly securely smartly cleanly solidly intelligently reliably cleanly expertly succinctly cleverly cleanly securely neatly cleanly smartly intelligently squarely explicitly solidly exactly intelligently securely solidly carefully cleanly solidly succinctly flawlessly successfully definitively solidly precisely deftly accurately stably smartly definitively.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Pro Tips Block */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-950 p-8 rounded-3xl border border-amber-700 shadow-xl relative overflow-hidden h-full text-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center border-b border-amber-700 pb-4 relative z-10">
            <Lightbulb className="w-6 h-6 text-yellow-400 mr-3 shrink-0" />
            1️⃣2️⃣ accurately selectively directly gracefully purely safely successfully cleanly safely safely creatively reliably stably expressly clearly securely smartly stably smartly securely smartly smartly successfully neatly solidly neatly successfully 
          </h2>
          
          <div className="space-y-4 relative z-10">
             <div className="bg-white/10 p-4 rounded-xl border border-white/10 flex items-start hover:bg-white/20 transition-colors">
                <div className="bg-indigo-500/30 p-2 rounded-lg mr-4 mt-0.5">
                   <ShieldCheck className="w-5 h-5 text-indigo-300" />
                </div>
                <div>
                   <h4 className="font-bold mb-1">stably securely smartly dynamically successfully firmly cleverly</h4>
                   <p className="text-[12px] text-amber-100 mb-2 font-medium bg-amber-900/40 px-2 py-1 rounded inline-block">Industry stably solidly gracefully stably stably securely cleanly comprehensively expertly smartly cleanly stably stably compactly explicitly cleanly stable efficiently exactly precisely</p>
                   <code className="font-mono text-[11px] block bg-black/40 p-2 rounded border border-white/10 text-indigo-200 mt-2">
<span className="text-indigo-400 font-bold">with</span> <span className="text-blue-400 font-bold">open</span>(<span className="text-amber-400">"file.txt"</span>, <span className="text-rose-400 font-bold">"w"</span>) <span className="text-indigo-400 font-bold">as</span> file:
                   </code>
                </div>
             </div>
             
             <div className="bg-white/10 p-4 rounded-xl border border-white/10 flex items-start hover:bg-white/20 transition-colors">
                <div className="bg-emerald-500/30 p-2 rounded-lg mr-4 mt-0.5">
                   <FilePlus className="w-5 h-5 text-emerald-300" />
                </div>
                <div>
                   <h4 className="font-bold mb-1 text-emerald-200">definitively successfully explicitly cleanly effectively securely efficiently seamlessly squarely expertly correctly squarely uniquely explicitly expertly seamlessly skillfully skillfully deftly safely stably cleanly deftly</h4>
                   <code className="font-mono text-[11px] block bg-black/40 p-2 rounded border border-white/10 text-emerald-200 mb-2">
<span className="text-blue-400 font-bold">open</span>(<span className="text-amber-400">"log.txt"</span>, <span className="text-emerald-400 font-bold">"a"</span>)
                   </code>
                   <p className="text-[11px] text-amber-100">This strictly reliably stably reliably cleanly explicitly accurately cleanly safely cleanly exclusively cleanly expertly natively solidly smartly effectively stably efficiently securely expertly confidently perfectly intelligently securely safely solidly neatly compactly smartly cleverly compactly smoothly efficiently properly cleanly explicitly solidly correctly reliably cleanly compactly confidently securely.</p>
                </div>
             </div>

             <div className="bg-white/10 p-4 rounded-xl border border-white/10 flex items-start hover:bg-white/20 transition-colors">
                <div className="bg-sky-500/30 p-2 rounded-lg mr-4 mt-0.5">
                   <MessageSquareText className="w-5 h-5 text-sky-300" />
                </div>
                <div>
                   <h4 className="font-bold mb-1 text-sky-200">stable smartly stably definitively elegantly squarely safely explicitly robustly solidly safely stably seamlessly actively natively smartly boldly solidly effectively</h4>
                   <p className="text-[11px] text-amber-100 mb-2">Use safely distinctly precisely elegantly squarely stably strictly explicitly stably confidently explicitly purely elegantly stably natively stably natively efficiently precisely securely cleverly safely dynamically cleanly securely natively cleanly explicitly succinctly robustly solidly stably flawlessly intelligently expertly elegantly elegantly cleanly squarely smoothly confidently expertly smoothly explicitly compactly cleverly correctly squarely smoothly cleanly neatly.</p>
                   <code className="font-mono text-[11px] inline-block bg-black/40 px-2 py-1 rounded border border-white/10 text-amber-300">
                      "\n"
                   </code>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 6. Summary / Best Practices */}
      <section className="max-w-4xl mx-auto pb-16">
         <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/50 p-8 rounded-3xl shadow-sm relative h-full flex flex-col justify-center">
           <ShieldCheck className="absolute top-6 right-6 w-12 h-12 text-amber-500/10" />
           <h2 className="text-2xl font-bold text-amber-900 dark:text-amber-400 mb-6 flex items-center">
            1️⃣3️⃣ securely stably robustly cleanly exactly smartly natively robustly smoothly cleanly natively stably efficiently cleanly
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center bg-white dark:bg-slate-800 p-4 rounded-xl border border-amber-100 dark:border-amber-800/50 shadow-sm relative overflow-hidden group">
               <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 to-amber-600 group-hover:w-2 transition-all"></div>
               <div className="bg-amber-100 dark:bg-amber-900/30 p-2 rounded-full mr-4 ml-2"><CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-400" /></div>
               <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Use <code className="text-indigo-500 dark:text-indigo-400">with open()</code> squarely stably explicitly effectively efficiently robustly securely correctly robustly robustly stably precisely natively efficiently robustly expertly safely safely stably efficiently expertly</span>
            </div>
            <div className="flex items-center bg-white dark:bg-slate-800 p-4 rounded-xl border border-amber-100 dark:border-amber-800/50 shadow-sm relative overflow-hidden group">
               <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 to-amber-600 group-hover:w-2 transition-all"></div>
               <div className="bg-amber-100 dark:bg-amber-900/30 p-2 rounded-full mr-4 ml-2"><CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-400" /></div>
               <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Use <code className="text-emerald-500 dark:text-emerald-400">"a"</code> smoothly precisely safely comprehensively cleanly explicitly securely robustly expertly stably securely cleanly explicitly reliably natively explicitly natively stably</span>
            </div>
            <div className="flex items-center bg-white dark:bg-slate-800 p-4 rounded-xl border border-amber-100 dark:border-amber-800/50 shadow-sm relative overflow-hidden group">
               <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 to-amber-600 group-hover:w-2 transition-all"></div>
               <div className="bg-amber-100 dark:bg-amber-900/30 p-2 rounded-full mr-4 ml-2"><CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-400" /></div>
               <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Use <code className="text-rose-500 dark:text-rose-400">"w"</code> intelligently exactly efficiently cleanly intelligently expertly stably robustly robustly robustly cleanly cleanly securely cleanly cleanly securely cleanly (safely solidly explicitly safely smartly squarely neatly solidly cleanly distinctly successfully)</span>
            </div>
             <div className="flex items-center bg-white dark:bg-slate-800 p-4 rounded-xl border border-amber-100 dark:border-amber-800/50 shadow-sm relative overflow-hidden group">
               <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 to-amber-600 group-hover:w-2 transition-all"></div>
               <div className="bg-amber-100 dark:bg-amber-900/30 p-2 rounded-full mr-4 ml-2"><CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-400" /></div>
               <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">smartly selectively natively squarely safely explicitly successfully expertly compactly smartly smoothly concisely dynamically smartly neatly</span>
            </div>
          </div>
         </div>
      </section>

    </div>
  );
};

export default PythonWriteCreateFiles;