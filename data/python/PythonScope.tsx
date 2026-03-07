import React, { useState } from 'react';
import { 
  Box, Terminal, Check, Copy, FileCode2, 
  BookOpen, AlertCircle, CheckCircle2, Code,
  Lightbulb, Globe, ArrowRight, Layers, Home, EyeOff
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
                <div key={index} className={`${highlightLines.includes(index) ? 'bg-neutral-800/80 -mx-4 px-4 py-0.5 border-l-2 border-sky-500' : ''}`}>
                  <span className={isComment ? 'text-neutral-500 italic' : 
                    line.includes('def ') || line.includes('global') ? 'text-rose-400 font-bold' : 
                    line.includes('print(') ? 'text-blue-400' : 
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

const PythonScope: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'local' | 'global' | 'naming' | 'keyword'>('local');

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-900 min-h-screen font-sans text-slate-800 dark:text-slate-200">
      
      {/* 1. Header Area */}
      <header className="max-w-4xl mx-auto text-center mb-16 pt-8">
        <div className="inline-flex items-center justify-center p-4 bg-sky-100 dark:bg-sky-900/30 rounded-2xl mb-6 shadow-sm border border-sky-200 dark:border-sky-800/50">
          <Layers className="w-10 h-10 text-sky-600 dark:text-sky-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Python Scope
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          A variable is only available from inside the region it is created. This concept is called <strong>Scope</strong>. Master the difference between Local and Global scope in Python.
        </p>
      </header>

      {/* 2. Intro & Definition */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 text-sky-500 mr-3" />
            <h2 className="text-2xl font-bold">What is Scope?</h2>
          </div>
          <p className="mb-6 text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
            In programming, <strong className="text-sky-600 dark:text-sky-400">Scope</strong> determines exactly where a variable is accessible within your code. Python distinguishes between variables created inside functions (Local) and variables created in the main body (Global).
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-indigo-50 dark:bg-indigo-900/10 p-5 rounded-xl border border-indigo-100 dark:border-indigo-800/40 relative overflow-hidden group hover:shadow-md transition-shadow">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Home className="w-16 h-16 text-indigo-500" />
               </div>
               <h3 className="font-bold text-indigo-800 dark:text-indigo-400 flex items-center mb-2 z-10 relative"><Home className="w-4 h-4 mr-2"/> Local Scope</h3>
               <p className="text-sm text-indigo-700 dark:text-indigo-300/80 mb-2 z-10 relative">Variables created <strong>inside</strong> a function.</p>
               <p className="text-xs font-medium text-slate-500 z-10 relative bg-white/50 dark:bg-black/20 p-2 rounded">They belong to the local scope of that function, and can only be used inside that function.</p>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/10 p-5 rounded-xl border border-blue-100 dark:border-blue-800/40 relative overflow-hidden group hover:shadow-md transition-shadow">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Globe className="w-16 h-16 text-blue-500" />
               </div>
               <h3 className="font-bold text-blue-800 dark:text-blue-400 flex items-center mb-2 z-10 relative"><Globe className="w-4 h-4 mr-2"/> Global Scope</h3>
               <p className="text-sm text-blue-700 dark:text-blue-300/80 mb-2 z-10 relative">Variables created in the <strong>main body</strong> of the Python code.</p>
               <p className="text-xs font-medium text-slate-500 z-10 relative bg-white/50 dark:bg-black/20 p-2 rounded">Global variables are available from within any scope, global and local.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Examples */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-3xl font-bold flex items-center">
             <FileCode2 className="w-8 h-8 mr-3 text-sky-500" />
             Scope Demonstrations
          </h2>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className="flex border-b border-slate-200 dark:border-slate-700 overflow-x-auto overflow-y-hidden">
             <button onClick={() => setActiveTab('local')} className={`whitespace-nowrap px-6 py-4 font-bold text-sm border-b-2 transition-colors flex items-center ${activeTab === 'local' ? 'border-sky-500 text-sky-600 dark:text-sky-400 bg-sky-50/50 dark:bg-sky-900/10' : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900'}`}>
                <Box className="w-4 h-4 mr-2" /> Local Scope
             </button>
             <button onClick={() => setActiveTab('global')} className={`whitespace-nowrap px-6 py-4 font-bold text-sm border-b-2 transition-colors flex items-center ${activeTab === 'global' ? 'border-blue-500 text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/10' : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900'}`}>
                <Globe className="w-4 h-4 mr-2" /> Global Scope
             </button>
             <button onClick={() => setActiveTab('naming')} className={`whitespace-nowrap px-6 py-4 font-bold text-sm border-b-2 transition-colors flex items-center ${activeTab === 'naming' ? 'border-purple-500 text-purple-600 dark:text-purple-400 bg-purple-50/50 dark:bg-purple-900/10' : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900'}`}>
                <AlertCircle className="w-4 h-4 mr-2" /> Naming Variables
             </button>
             <button onClick={() => setActiveTab('keyword')} className={`flex-1 whitespace-nowrap px-6 py-4 font-bold text-sm border-b-2 transition-colors flex items-center ${activeTab === 'keyword' ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400 bg-emerald-50/50 dark:bg-emerald-900/10' : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900'}`}>
                <Code className="w-4 h-4 mr-2" /> The `global` Keyword
             </button>
          </div>

          <div className="p-8">
            {activeTab === 'local' && (
               <div className="animate-fade-in grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-400 mb-4 flex items-center"><Home className="w-5 h-5 mr-3" /> Local Scope</h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                       A variable created inside a function belongs to the <strong>local scope</strong> of that function, and can only be used inside that function.
                    </p>
                    <div className="bg-rose-50 dark:bg-rose-900/10 border-l-4 border-rose-500 p-4 rounded-r-lg mb-6">
                       <p className="text-sm font-bold text-rose-800 dark:text-rose-300 flex items-start">
                          <EyeOff className="w-4 h-4 mr-2 shrink-0 mt-0.5" /> 
                          Error Warning: If you try to print or use `x` outside of `myfunc()`, Python will throw a NameError because `x` is hidden from the outside global world!
                       </p>
                    </div>
                  </div>
                  <div>
                    <CodeSnippetBlock title="local_scope.py" codeSnippet={`def myfunc():\n  # Local variable\n  x = 300\n  print(x)\n\nmyfunc()\n\n# print(x) # This will cause an ERROR`} highlightLines={[2, 3]} />
                    <div className="bg-[#1e1e1e] rounded-xl p-4 border border-slate-700 shadow-inner">
                       <div className="text-xs uppercase font-bold text-slate-500 tracking-wider mb-2">Console Output</div>
                       <div className="font-mono text-emerald-400 font-bold">300</div>
                    </div>
                  </div>
               </div>
            )}

            {activeTab === 'global' && (
               <div className="animate-fade-in grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-400 mb-4 flex items-center"><Globe className="w-5 h-5 mr-3" /> Global Scope</h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                       A variable created in the main body of the Python code is a <strong>global variable</strong> and belongs to the global scope. Global variables are available from within any scope, global and local.
                    </p>
                    <div className="bg-blue-50 dark:bg-blue-900/10 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6">
                       <p className="text-sm font-medium text-blue-800 dark:text-blue-300 flex items-start">
                          <CheckCircle2 className="w-4 h-4 mr-2 shrink-0 mt-0.5" /> 
                          Notice how `x` was defined OUTSIDE the function, but `myfunc()` was still able to read it and print it perfectly fine.
                       </p>
                    </div>
                  </div>
                  <div>
                    <CodeSnippetBlock title="global_scope.py" codeSnippet={`# Global variable\nx = 300\n\ndef myfunc():\n  # Can be read inside the local function!\n  print(x)\n\nmyfunc()\n\n# Can also be read globally here\nprint(x)`} highlightLines={[1, 5, 10]} />
                    <div className="bg-[#1e1e1e] rounded-xl p-4 border border-slate-700 shadow-inner">
                       <div className="text-xs uppercase font-bold text-slate-500 tracking-wider mb-2">Console Output</div>
                       <div className="font-mono text-emerald-400 font-bold">300<br/>300</div>
                    </div>
                  </div>
               </div>
            )}

            {activeTab === 'naming' && (
               <div className="animate-fade-in grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-400 mb-4 flex items-center"><AlertCircle className="w-5 h-5 mr-3" /> Naming Variables</h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                       If you operate with the same variable name inside and outside of a function, Python will treat them as <strong>two separate variables</strong>.
                    </p>
                    <p className="text-slate-600 dark:text-slate-300">
                       One available in the global scope (outside the function) and one available in the local scope (inside the function).
                    </p>
                  </div>
                  <div>
                    <CodeSnippetBlock title="naming_conflict.py" codeSnippet={`x = 300 # Global x\n\ndef myfunc():\n  x = 200 # Local x (different variable!)\n  print("Local x is:", x)\n\nmyfunc()\n\nprint("Global x is:", x)`} highlightLines={[0, 3]} />
                    <div className="bg-[#1e1e1e] rounded-xl p-4 border border-slate-700 shadow-inner">
                       <div className="text-xs uppercase font-bold text-slate-500 tracking-wider mb-2">Console Output</div>
                       <div className="font-mono text-white">Local x is: <span className="text-emerald-400 font-bold">200</span></div>
                       <div className="font-mono text-white">Global x is: <span className="text-emerald-400 font-bold">300</span></div>
                    </div>
                  </div>
               </div>
            )}

            {activeTab === 'keyword' && (
               <div className="animate-fade-in grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-emerald-900 dark:text-emerald-400 mb-4 flex items-center"><Code className="w-5 h-5 mr-3" /> The `global` Keyword</h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                       Normally, when you create a variable inside a function, that variable is local. By using the <code className="font-bold text-emerald-600 dark:text-emerald-400 font-mono bg-emerald-50 dark:bg-emerald-900/30 px-1 rounded">global</code> keyword, the variable will belong to the global scope instead!
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 mb-6">
                       Also, use the <code className="font-mono">global</code> keyword if you want to make a change to a global variable inside a function.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <CodeSnippetBlock title="global_keyword.py" codeSnippet={`def myfunc():\n  # Attach variable to global scope\n  global x\n  x = 300\n\nmyfunc()\n\n# Even though x was defined in the function,\n# we can print it here!\nprint(x)`} highlightLines={[2, 3]} />
                    <div className="bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-xl border border-emerald-200 dark:border-emerald-800 flex items-start">
                       <Lightbulb className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mr-3 shrink-0" />
                       <p className="text-sm font-bold text-emerald-800 dark:text-emerald-300">
                          The global keyword essentially "punches a hole" in the wall from the local scope to the global scope.
                       </p>
                    </div>
                  </div>
               </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. Best Practices Summary */}
       <section className="max-w-4xl mx-auto pb-16">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-8 rounded-3xl shadow-xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl"></div>
           <h2 className="text-2xl font-bold text-white mb-6 flex items-center relative z-10">
            <CheckCircle2 className="w-6 h-6 mr-3 text-sky-400" />
            Scope Summary Best Practices
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 relative z-10">
            <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20">
               <h3 className="font-bold text-sky-300 flex items-center mb-2"><Globe className="w-4 h-4 mr-2" /> Global Variables</h3>
               <p className="text-sm text-slate-300">Minimize their use. Overusing global variables can make your code harder to read, debug, and test since their state can be changed from anywhere.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20">
               <h3 className="font-bold text-indigo-300 flex items-center mb-2"><Home className="w-4 h-4 mr-2" /> Local Variables</h3>
               <p className="text-sm text-slate-300">Prefer passing data into functions using parameters, and returning data using the <code className="font-mono text-fuchsia-300">return</code> statement instead of relying on global scopes.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20">
               <h3 className="font-bold text-rose-300 flex items-center mb-2"><AlertCircle className="w-4 h-4 mr-2" /> Shadowing</h3>
               <p className="text-sm text-slate-300">Avoid naming your local variables the exact same name as your global variables. This is confusing and leads to logical bugs.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20">
               <h3 className="font-bold text-emerald-300 flex items-center mb-2"><Code className="w-4 h-4 mr-2" /> The `global` Keyword</h3>
               <p className="text-sm text-slate-300">Use sparingly. If you find yourself using <code className="font-mono text-emerald-300">global</code> frequently, it usually means your program architecture needs refactoring.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PythonScope;