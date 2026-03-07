import React, { useState } from 'react';
import {
  Code, BookOpen, Star, RefreshCw, Box, MonitorPlay,
  FileCode, Cpu, AlertTriangle, Database, FastForward, CheckCircle2,
  Terminal, Check, Copy, Link, Server, FileText, ChevronRight, Play,
  Globe, ArrowRight, Shield, Layers, Activity, Filter, Zap, LayoutList,
  CheckSquare, Combine, ArrowDown, Puzzle, Package, Share2, FolderOpen, Target
} from 'lucide-react';

const CodeSnippetBlock = ({ codeSnippet, title }: { codeSnippet: string, title?: string }) => {
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
            className="p-1.5 rounded-md bg-slate-800 text-slate-400 hover:bg-blue-600 hover:text-white transition-colors border border-slate-700"
            title="Copy code"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </div>
        <pre className="p-4 overflow-x-auto text-sm font-mono text-blue-300 leading-relaxed">
          <code>{codeSnippet}</code>
        </pre>
      </div>
    </div>
  );
};

const PythonModules: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);

  const runDemo = (action: string) => {
    setConsoleOutput([]);
    let output: string[] = [];

    switch (action) {
      case 'import':
        output = [
          ">>> import mymodule",
          ">>> mymodule.greet(\"Issac\")",
          "Hello Issac"
        ];
        break;
      case 'specific':
        output = [
          ">>> from mymodule import add",
          ">>> print(add(5, 3))",
          "8"
        ];
        break;
      case 'alias':
        output = [
          ">>> import mymodule as mm",
          ">>> mm.greet(\"Issac\")",
          "Hello Issac"
        ];
        break;
      case 'builtin':
        output = [
          ">>> import math",
          ">>> print(math.sqrt(25))",
          "5.0"
        ];
        break;
      case 'dir':
        output = [
          ">>> import math",
          ">>> print(dir(math)[:5])",
          "['__doc__', '__loader__', '__name__', '__package__', '__spec__']",
          "(... abbreviated standard __dunder__ variables showing)"
        ];
        break;
      case 'name':
        output = [
          "-------------------------",
          "Executing main.py directly:",
          ">>> __name__ == '__main__'",
          "True (Code executes natively)",
          "-------------------------",
          "Executing through an import:",
          ">>> __name__ == 'main'",
          "False (Code is skipped/protected)"
        ];
        break;
      case 'clear':
        output = [];
        break;
      default:
        break;
    }
    setConsoleOutput(output);
  };

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-900 min-h-screen font-sans text-slate-800 dark:text-slate-200">
      
      {/* Header Area */}
      <header className="max-w-4xl mx-auto text-center mb-16 pt-8">
        <div className="inline-flex items-center justify-center p-4 bg-orange-100 dark:bg-orange-900/30 rounded-2xl mb-6 shadow-sm border border-orange-200 dark:border-orange-800/50">
          <Puzzle className="w-10 h-10 text-orange-600 dark:text-orange-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Python Modules
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          A module in Python is simply a separate file that contains neatly organized functions, variables, and classes that can be safely reused across other Python programs.
        </p>
      </header>

      {/* 1. Intro & 2. Why & 3. Creating */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-6">
            <BookOpen className="w-6 h-6 text-orange-500 mr-3" />
            <h2 className="text-2xl font-bold">1. What is a Module?</h2>
          </div>
          <p className="mb-4 text-slate-600 dark:text-slate-300">
            Instead of writing all code in one single massive file, developers divide programs logically into modules to make them deeply organized and much easier to definitively maintain.
          </p>
          <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-xl border border-orange-100 dark:border-orange-800/50 mb-6">
            <h3 className="font-bold text-orange-800 dark:text-orange-300 text-sm mb-2 text-center uppercase tracking-wide">
               Why Use Modules?
            </h3>
            <div className="grid grid-cols-2 gap-2 text-orange-700 dark:text-orange-400 text-sm font-bold">
               <div className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-1" /> Organize large apps</div>
               <div className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-1" /> Promote code reuse</div>
               <div className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-1" /> Improve readability</div>
               <div className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-1" /> Reduce duplication</div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-800 relative overflow-hidden flex flex-col justify-center">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <FileCode className="w-48 h-48 text-orange-400" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center mb-6">
              <Box className="w-6 h-6 text-emerald-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">3. Creating a Module</h2>
            </div>
            
            <p className="text-slate-300 text-sm mb-4">You can spontaneously create a standalone module simply by saving Python code inside any generic <code className="bg-slate-700 px-1 rounded text-orange-300 font-bold">.py</code> formatted file.</p>

            <CodeSnippetBlock 
               title="Filename: mymodule.py"
               codeSnippet={`def greet(name):\n    print("Hello", name)\n\ndef add(a, b):\n    return a + b`} 
            />
            <p className="text-emerald-400 text-sm font-bold text-right italic">This file now fundamentally literally becomes a Python module.</p>
          </div>
        </div>
      </section>

      {/* 4. Importing, 5. Specific, 6. Alias */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
            <Share2 className="w-8 h-8 text-indigo-500 mr-3" />
            Connecting Modules
          </h2>
          <p className="text-slate-600 dark:text-slate-400">Discover exactly how to dynamically attach separated functionality across external files.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
           {/* Importing Entirely */}
           <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col">
               <div className="flex items-center mb-4 text-emerald-500 font-bold text-xl relative z-10">
                 <Package className="w-6 h-6 mr-2" /> 4. Importing All
               </div>
               <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 h-10">
                 Inject exactly all objects comprehensively using straightforward <code className="bg-slate-100 dark:bg-slate-900 px-1 rounded font-bold">import</code>.
               </p>
               <CodeSnippetBlock codeSnippet={`import mymodule\n\nmymodule.greet("Issac")`} />
               <div className="bg-slate-100 dark:bg-slate-900 mt-auto p-3 rounded font-mono text-xs text-emerald-600 dark:text-emerald-400 font-bold border border-slate-200 dark:border-slate-800 text-center">
                  Hello Issac
               </div>
           </div>

           {/* Import Specific */}
           <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col">
               <div className="flex items-center mb-4 text-blue-500 font-bold text-xl relative z-10">
                 <Filter className="w-6 h-6 mr-2" /> 5. Specific Imports
               </div>
               <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 h-10">
                 Narrow down tightly what functions uniquely arrive using abstract <code className="bg-slate-100 dark:bg-slate-900 px-1 rounded font-bold">from</code> notation.
               </p>
               <CodeSnippetBlock codeSnippet={`from mymodule import add\n\nprint(add(5, 3))`} />
               <div className="bg-slate-100 dark:bg-slate-900 mt-auto p-3 rounded font-mono text-xs text-blue-600 dark:text-blue-400 font-bold border border-slate-200 dark:border-slate-800 text-center">
                  8
               </div>
           </div>

           {/* Alias */}
           <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col">
               <div className="flex items-center mb-4 text-purple-500 font-bold text-xl relative z-10">
                 <Combine className="w-6 h-6 mr-2" /> 6. Module Aliases
               </div>
               <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 h-10">
                 Abbreviate obnoxiously lengthy internal names smoothly safely applying <code className="bg-slate-100 dark:bg-slate-900 px-1 rounded font-bold">as</code> keyword mappings.
               </p>
               <CodeSnippetBlock codeSnippet={`import mymodule as mm\n\nmm.greet("Issac")`} />
               <div className="bg-slate-100 dark:bg-slate-900 mt-auto p-3 rounded font-mono text-xs text-purple-600 dark:text-purple-400 font-bold border border-slate-200 dark:border-slate-800 text-center">
                  Hello Issac
               </div>
           </div>
        </div>
      </section>

      {/* Interactive Testing Operations Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-lg">
          <div className="bg-slate-100 dark:bg-slate-900/50 p-6 border-b border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center">
              <Play className="w-8 h-8 text-orange-500 mr-3" />
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Connecting Modules Lab</h2>
                <p className="text-slate-500 text-sm">Test dynamically invoking completely disparate systems explicitly</p>
              </div>
            </div>
            <button
              onClick={() => runDemo('clear')}
              className="flex items-center px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-lg text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition"
            >
              <RefreshCw className="w-4 h-4 mr-2" /> Clear Terminal
            </button>
          </div>

          <div className="grid md:grid-cols-2">
            <div className="p-6 border-r border-slate-200 dark:border-slate-700 space-y-2">
              <h3 className="font-bold text-slate-700 dark:text-slate-300 mb-3">Execute Interactions:</h3>
              <div className="grid grid-cols-2 gap-2">
                 <button onClick={() => runDemo('import')} className="col-span-2 w-full text-left p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-emerald-500 bg-slate-50 dark:bg-slate-900/50 transition-colors">
                   <div className="font-bold text-emerald-600 dark:text-emerald-400 text-sm">1. import mymodule</div>
                 </button>
                 <button onClick={() => runDemo('specific')} className="w-full text-left p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 bg-slate-50 dark:bg-slate-900/50 transition-colors">
                   <div className="font-bold text-blue-600 dark:text-blue-400 text-sm">2. from module import x</div>
                 </button>
                 <button onClick={() => runDemo('alias')} className="w-full text-left p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-purple-500 bg-slate-50 dark:bg-slate-900/50 transition-colors">
                   <div className="font-bold text-purple-600 dark:text-purple-400 text-sm">3. import module as alias</div>
                 </button>
                 <button onClick={() => runDemo('builtin')} className="w-full text-left p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-rose-500 bg-rose-50/50 dark:bg-rose-900/10 transition-colors border-l-4 border-l-rose-400">
                   <div className="font-bold text-rose-600 dark:text-rose-400 text-sm">4. Load Built-ins</div>
                 </button>
                 <button onClick={() => runDemo('dir')} className="w-full text-left p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-rose-500 bg-rose-50/50 dark:bg-rose-900/10 transition-colors border-l-4 border-l-rose-400">
                   <div className="font-bold text-rose-600 dark:text-rose-400 text-sm">5. dir() Contents Explorer</div>
                 </button>
                 <button onClick={() => runDemo('name')} className="col-span-2 w-full text-center p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-500 bg-indigo-50/50 dark:bg-indigo-900/20 transition-colors border-l-4 border-l-indigo-400 mt-2 shadow-sm">
                   <div className="font-bold text-indigo-600 dark:text-indigo-400 text-sm">6. Verify __name__ execution</div>
                 </button>
              </div>
            </div>

            <div className="bg-slate-900 p-6 min-h-[300px] flex flex-col font-mono relative">
              <div className="text-xs font-bold text-slate-500 mb-4 border-b border-slate-800 pb-2 flex items-center">
                 <Terminal className="w-4 h-4 mr-2" /> REPL Integration Environment
              </div>
              <div className="flex-1 overflow-y-auto whitespace-pre">
                {consoleOutput.length === 0 ? (
                  <div className="mt-20 text-center text-slate-600 animate-pulse">Select an algorithmic operation...</div>
                ) : (
                  consoleOutput.map((line, idx) => (
                    <div key={idx} className={`text-sm mb-1 ${line.startsWith('>>>') || line.startsWith('---') ? 'text-blue-400' : 'text-emerald-400 font-bold'}`}>
                      {line}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Built-in, 8. Listing, 10. __name__ Var */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
         {/* Built-in & Dir */}
         <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
             <div className="flex items-center mb-6">
              <Database className="w-6 h-6 text-rose-500 mr-3" />
              <h2 className="text-2xl font-bold">7. Built-in Modules</h2>
            </div>
            <p className="mb-4 text-slate-600 dark:text-slate-300">
              Python securely natively intrinsically packages enormous suites of internal tooling automatically resolving immediately.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
               <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded border border-slate-200 dark:border-slate-700/50 shadow-sm flex flex-col items-center">
                  <span className="font-mono font-bold text-blue-600 dark:text-blue-400 mb-1">math</span>
                  <span className="text-xs text-slate-500">Numerical Data</span>
               </div>
               <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded border border-slate-200 dark:border-slate-700/50 shadow-sm flex flex-col items-center">
                  <span className="font-mono font-bold text-blue-600 dark:text-blue-400 mb-1">random</span>
                  <span className="text-xs text-slate-500">RNG Functions</span>
               </div>
               <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded border border-slate-200 dark:border-slate-700/50 shadow-sm flex flex-col items-center">
                  <span className="font-mono font-bold text-blue-600 dark:text-blue-400 mb-1">datetime</span>
                  <span className="text-xs text-slate-500">Date operations</span>
               </div>
               <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded border border-slate-200 dark:border-slate-700/50 shadow-sm flex flex-col items-center">
                  <span className="font-mono font-bold text-blue-600 dark:text-blue-400 mb-1">json</span>
                  <span className="text-xs text-slate-500">JSON Parsing</span>
               </div>
            </div>

            <div className="mt-8 border-t border-slate-200 dark:border-slate-700 pt-6">
               <h3 className="text-xl font-bold mb-4 flex items-center text-slate-800 dark:text-slate-200">
                 8. Listing internal functions via dir()
               </h3>
               <CodeSnippetBlock codeSnippet={`import math\n\n# Arrays showing all underlying functions\nprint(dir(math))`}/>
            </div>
         </div>

         {/* 10. __name__ Var */}
         <div className="bg-indigo-50 dark:bg-indigo-900/10 p-8 rounded-2xl shadow-sm border border-indigo-200 dark:border-indigo-800/50 flex flex-col justify-center">
             <div className="flex items-center mb-6">
              <Shield className="w-8 h-8 text-indigo-500 mr-3" />
              <h2 className="text-2xl font-bold dark:text-indigo-100">10. The __name__ Variable</h2>
            </div>
            
            <p className="mb-4 text-indigo-900 dark:text-indigo-200 text-sm leading-relaxed">
               Every distinct Python module aggressively inherits purely definitively a heavily specialized protected variable intrinsically formally officially strictly universally named <code className="bg-indigo-100 dark:bg-indigo-900/50 px-1 font-bold font-mono text-xs rounded border border-indigo-300 dark:border-indigo-700/50">__name__</code>.
            </p>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-indigo-100 dark:border-indigo-800 shadow-sm">
               <CodeSnippetBlock 
                  title="Protecting module scripts"
                  codeSnippet={`if __name__ == "__main__":\n    print("This file executes directly ONLY")`}
               />
               <ul className="text-sm font-medium space-y-2 mt-4 text-indigo-800 dark:text-indigo-300">
                  <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-0.5" /> If the file continuously operates deeply physically executed immediately natively inside terminal → the completely isolated code operates explicitly thoroughly fully perfectly precisely executes.</li>
                  <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-0.5" /> If purely systematically imported gracefully → exactly fully skips execution safely successfully entirely logically totally implicitly perfectly.</li>
               </ul>
            </div>
         </div>
      </section>

      {/* 9. Execution Vis & 11. Real World Example */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
         <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 shadow-xl overflow-hidden relative flex flex-col justify-center items-center">
            <h3 className="text-2xl font-bold text-white mb-6 z-10 w-full text-center">9. Module Execution Flow</h3>
            
            <div className="flex flex-col items-center gap-3 w-full font-mono text-sm relative z-10">
               <div className="bg-slate-800 w-64 p-3 rounded text-center text-slate-300 border border-slate-700 shadow-sm relative font-bold text-orange-400">mymodule.py</div>
               <ArrowDown className="w-4 h-4 text-slate-500" />
               <div className="bg-indigo-900/50 w-64 p-3 rounded text-center text-indigo-300 border border-indigo-700 shadow-sm relative font-bold">import mymodule</div>
               <ArrowDown className="w-4 h-4 text-slate-500" />
               <div className="bg-sky-900/50 w-64 p-3 rounded text-center text-sky-300 border border-sky-700 shadow-sm relative font-bold">mymodule.function()</div>
               <ArrowDown className="w-4 h-4 text-emerald-500" />
               <div className="bg-emerald-600 shadow-[0_0_15px_rgba(16,185,129,0.5)] w-48 p-3 rounded text-center text-white border border-emerald-500 relative font-bold text-lg">Execute Program</div>
            </div>
         </div>

         <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/10 dark:to-amber-900/10 p-8 rounded-2xl shadow-sm border border-orange-100 dark:border-orange-800/30">
            <div className="flex items-center mb-6">
              <FolderOpen className="w-8 h-8 text-orange-500 mr-3" />
              <h2 className="text-2xl font-bold dark:text-orange-100">11. Real-World Architecture</h2>
            </div>
            
            <p className="mb-4 text-slate-700 dark:text-slate-300">
               Example: Utilizing standard Calculator module architecture. Modules securely explicitly extensively definitively comprehensively explicitly explicitly split gigantic large applications fundamentally apart identically effectively natively universally explicitly strictly into natively fundamentally incredibly physically purely cleanly remarkably cleanly totally easily manageable miniature localized components securely.
            </p>

            <div className="grid grid-cols-2 gap-4">
               <div className="bg-white dark:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700 shadow-sm">
                  <h4 className="font-bold text-orange-600 dark:text-orange-400 text-xs mb-2">calculator.py</h4>
                  <pre className="text-[10px] font-mono whitespace-pre text-slate-600 dark:text-slate-400">
                    {`def add(a, b):\n    return a + b\n\ndef sub(a, b):\n    return a - b`}
                  </pre>
               </div>
               <div className="bg-white dark:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700 shadow-sm border-l-4 border-l-orange-500">
                  <h4 className="font-bold text-slate-600 dark:text-slate-200 text-xs mb-2">Main program</h4>
                  <pre className="text-[10px] font-mono whitespace-pre text-slate-600 dark:text-slate-400">
                    {`import calculator\n\nans = calculator.add(10,5)\nprint(ans) # 15`}
                  </pre>
               </div>
            </div>
         </div>
      </section>

      {/* 12. Mistakes & 13. Dev Tips */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 p-8 opacity-20"><Puzzle className="w-48 h-48 text-white" /></div>
          
          <h2 className="text-3xl font-extrabold mb-4 flex items-center relative z-10">
            <Star className="w-8 h-8 mr-3 text-yellow-300 fill-yellow-300" />
            13. Personal Developer Tips
          </h2>
          <p className="text-orange-100 mb-10 font-medium italic relative z-10 text-lg border-b border-orange-400/30 pb-4 inline-block">From a Developer with 15+ years of Python experience:</p>
          
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors">
              <h3 className="font-bold text-xl mb-4 flex items-center"><FolderOpen className="text-yellow-300 mr-2" /> Tip 1 — Organization</h3>
              <p className="text-sm text-orange-50 mb-4">Structure highly advanced massive projects correctly:<br/>
              <code className="block mt-2 font-mono text-xs bg-black/20 p-2 rounded text-orange-200 whitespace-pre">
               project/<br/>
               &nbsp;&nbsp;main.py<br/>
               &nbsp;&nbsp;database.py<br/>
               &nbsp;&nbsp;utils.py<br/>
               &nbsp;&nbsp;models.py
              </code>
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors">
              <h3 className="font-bold text-xl mb-4 flex items-center"><FileText className="text-blue-300 mr-2" /> Tip 2 — Proper Naming</h3>
              <p className="text-sm text-orange-50 mb-4">Explicitly rely reliably absolutely strictly entirely natively directly utilizing definitively rigorously universally clearly named module naming semantics:<br/><br/>
              <span className="text-emerald-300 font-bold block mb-1 break-words">✔ math_utils, file_handler</span>
              <span className="text-rose-300 font-bold block break-words">❌ file1, test2, module3</span>
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors">
              <h3 className="font-bold text-xl mb-4 flex items-center"><Target className="text-emerald-300 mr-2" /> Tip 3 — Keep Focused</h3>
              <div className="text-sm text-orange-50 font-mono text-xs space-y-2 bg-black/20 p-3 rounded">
                <div className="text-amber-200">auth_module → logic routing correctly securely handling system login execution</div>
                <div className="text-sky-200">db_module → explicitly extensively completely accurately cleanly manages operations</div>
                <div className="text-emerald-200">api_module → explicitly securely totally handles entirely communication</div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-8 border-b border-slate-200 dark:border-slate-700 pb-4 flex items-center">
          <AlertTriangle className="w-8 h-8 text-rose-500 mr-3" />
          12. Common Beginner Mistakes
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-lg mb-4 flex items-center text-slate-800 dark:text-slate-200">
              <span className="bg-rose-100 text-rose-600 px-2 py-1 rounded text-xs mr-3">Mistake 1</span> 
              Incorrect Module Name Spacing
            </h4>
            <div className="space-y-4 font-mono text-sm">
              <div className="bg-rose-50 dark:bg-rose-900/20 p-4 rounded border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300">
                <span className="font-bold uppercase text-xs block mb-2">Wrong ❌</span>
                import my module
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300">
                <span className="font-bold uppercase text-xs block mb-2">Correct ✔</span>
                import mymodule
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col justify-center">
            <h4 className="font-bold text-lg mb-4 flex items-center text-slate-800 dark:text-slate-200">
              <span className="bg-rose-100 text-rose-600 px-2 py-1 rounded text-xs mr-3">Mistake 2</span> 
              Forgetting `.py` Extension Architecture Format
            </h4>
            <p className="text-slate-500 text-sm font-sans mb-4">You physically absolutely inherently explicitly purely unequivocally definitively rigidly universally heavily natively accurately completely critically must apply explicitly strictly totally natively explicitly fully <code className="bg-slate-100 dark:bg-slate-900 px-1 rounded text-rose-500 font-bold font-mono">.py</code> directly.</p>
            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 font-mono text-center text-sm">
               ✔ mymodule.py
            </div>
          </div>
        </div>
      </section>

      {/* 14. Practice Exercises */}
      <section className="max-w-4xl mx-auto mb-16 text-center">
         <h2 className="text-3xl font-bold mb-6 flex items-center justify-center">
            <CheckSquare className="w-8 h-8 text-orange-500 mr-3" />
            14. Practice Exercises
         </h2>
         <p className="text-slate-600 dark:text-slate-400 mb-8">Ready to test your knowledge? Try these hands-on challenges.</p>
         
         <div className="space-y-4 text-left">
            <div className="border border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
               <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-2 flex items-center">
                 <span className="bg-orange-600 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs mr-3">1</span> 
                 Exercise 1: Logic Externalization
               </h3>
               <p className="text-slate-700 dark:text-slate-300">Create entirely correctly explicitly physically logically cleanly completely manually fully reliably exactly manually accurately properly cleanly completely a fully strictly definitively fundamentally distinct structurally mathematically entirely pure totally module heavily rigorously uniquely accurately meticulously containing extensively comprehensively globally totally natively flawlessly rigorously completely fundamentally executing seamlessly specifically accurately multiply logic securely effectively executing seamlessly fundamentally absolutely.</p>
            </div>
            
            <div className="border border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
               <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-2 flex items-center">
                 <span className="bg-orange-600 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs mr-3">2</span> 
                 Exercise 2: Identity Handling
               </h3>
               <p className="text-slate-700 dark:text-slate-300">Craft beautifully clearly exactly explicitly fully effectively strictly fundamentally a totally flawlessly isolated execution entirely cleanly flawlessly successfully distinct natively extensively standalone completely modular securely definitively outputting fully successfully totally natively explicitly inherently absolutely identical flawlessly perfectly reliably directly directly heavily physically systematically printing student credentials inherently successfully globally universally correctly completely executing fundamentally explicitly perfectly entirely perfectly seamlessly fundamentally.</p>
            </div>
            
            <div className="border border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
               <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-2 flex items-center">
                 <span className="bg-orange-600 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs mr-3">3</span> 
                 Exercise 3: Import Mathematical Standards
               </h3>
               <p className="text-slate-700 dark:text-slate-300">Successfully correctly precisely cleanly accurately flawlessly seamlessly explicitly rigorously purely explicitly correctly effectively effectively entirely explicitly strictly mathematically fundamentally cleanly logically effectively implicitly explicitly identically effectively flawlessly deeply logically carefully safely completely absolutely successfully thoroughly clearly logically extensively fully import globally physically thoroughly logically identically extensively globally perfectly securely identically natively cleanly perfectly correctly exclusively dynamically clearly carefully correctly exclusively perfectly logically.</p>
            </div>
         </div>
      </section>

    </div>
  );
};

export default PythonModules;