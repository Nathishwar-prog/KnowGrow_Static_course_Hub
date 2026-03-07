import React, { useState } from 'react';
import {
  Code, BookOpen, Star, RefreshCw, Box, MonitorPlay,
  FileCode, Cpu, AlertTriangle, Database, FastForward, CheckCircle2,
  Terminal, Check, Copy, Link, Server, FileText, ChevronRight, Play,
  Globe, ArrowRight, Shield, Layers, Activity, Filter, Zap, LayoutList,
  CheckSquare, Combine, ArrowDown, HelpCircle, Variable, XCircle, Search
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

const PythonNone: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);

  const runDemo = (action: string) => {
    setConsoleOutput([]);
    let output: string[] = [];

    switch (action) {
      case 'intro':
        output = [
          ">>> x = None",
          ">>> print(x)",
          "None",
          ">>> print(type(x))",
          "<class 'NoneType'>"
        ];
        break;
      case 'check':
        output = [
          ">>> x = None",
          ">>> if x is None:",
          "...     print('x has no value')",
          "x has no value"
        ];
        break;
      case 'function':
        output = [
          ">>> def greet():",
          "...     print('Hello')",
          ">>> result = greet()",
          "Hello",
          ">>> print(result)",
          "None"
        ];
        break;
      case 'default':
        output = [
          ">>> def show_message(msg=None):",
          "...     if msg is None:",
          "...         print('No message')",
          "...     else:",
          "...         print(msg)",
          ">>> show_message()",
          "No message",
          ">>> show_message('Hello Python')",
          "Hello Python"
        ];
        break;
      case 'empty':
        output = [
          ">>> print(None == 0)",
          "False",
          ">>> print(None == '')",
          "False",
          ">>> print(None == [])",
          "False"
        ];
        break;
      case 'db':
        output = [
          ">>> user = None",
          ">>> if user is None:",
          "...     print('User not found')",
          "User not found"
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
        <div className="inline-flex items-center justify-center p-4 bg-slate-200 dark:bg-slate-800 rounded-2xl mb-6 shadow-sm border border-slate-300 dark:border-slate-700">
          <HelpCircle className="w-10 h-10 text-slate-500 dark:text-slate-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Python None Keyword
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          In Python, <code className="bg-slate-200 dark:bg-slate-800 px-1 rounded font-mono font-bold text-slate-700 dark:text-slate-300">None</code> is a special value that represents the absence of a value or a null value.
        </p>
      </header>

      {/* 1. Intro & 2. Type */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-6">
            <BookOpen className="w-6 h-6 text-slate-500 mr-3" />
            <h2 className="text-2xl font-bold">1. Introduction to None</h2>
          </div>
          <p className="mb-4 text-slate-600 dark:text-slate-300">
            It is often used to indicate that a variable does not contain any data.
          </p>
          <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700/50 mb-6 flex flex-col items-center">
             <span className="font-bold text-slate-700 dark:text-slate-300 italic mb-2">"None means nothing or no value assigned."</span>
          </div>

          <div className="flex items-center mb-4 mt-8">
            <Variable className="w-6 h-6 text-slate-500 mr-3" />
            <h2 className="text-xl font-bold">2. The NoneType</h2>
          </div>
          <p className="mb-4 text-slate-600 dark:text-slate-300">
            The value <code className="font-bold">None</code> has its own data type called NoneType.
          </p>

          <CodeSnippetBlock codeSnippet={`x = None\nprint(type(x))\n\n# Output: <class 'NoneType'>`} />
          <p className="text-sm font-bold mt-2 text-slate-500">NoneType is a built-in type used only for None.</p>
        </div>

        <div className="bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-800 relative overflow-hidden flex flex-col justify-center">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Box className="w-48 h-48 text-slate-400" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center mb-6">
              <CheckCircle2 className="w-6 h-6 text-emerald-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">3. Checking for None</h2>
            </div>
            
            <p className="text-slate-300 text-sm mb-4">
              In Python, the correct way to check for <code className="font-bold text-white bg-slate-800 px-1 rounded">None</code> is using the <code className="font-bold text-emerald-400 bg-slate-800 px-1 rounded">is</code> operator.
            </p>

            <CodeSnippetBlock codeSnippet={`x = None\n\nif x is None:\n    print("x has no value")`} />

            <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 mt-6 shadow-sm">
               <h4 className="font-bold mb-3 text-emerald-400 text-sm flex justify-between items-center pb-2 border-b border-slate-700">
                 <span className="flex items-center"><Check className="w-4 h-4 mr-2" /> Best Practice</span>
                 <span className="flex items-center text-rose-400"><XCircle className="w-4 h-4 mr-2" /> Not Recommended</span>
               </h4>
               <div className="flex justify-between font-mono text-sm">
                  <span className="text-emerald-300">if x is None</span>
                  <span className="text-rose-300">if x == None</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Functions Returning & 5. Default & 6. Vs Empty */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid lg:grid-cols-3 gap-6">
           {/* Functions Returning None */}
           <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col">
               <div className="flex items-center mb-4 text-emerald-500 font-bold text-xl relative z-10">
                 <Terminal className="w-6 h-6 mr-2" /> 4. Function Returns
               </div>
               <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 h-16">
                 If a function does not explicitly return a value, Python automatically returns <code className="font-bold">None</code>.
               </p>
               <CodeSnippetBlock codeSnippet={`def greet():\n    print("Hello")\n\nresult = greet()\nprint(result)\n\n# Output:\n# Hello\n# None`} />
           </div>

           {/* Default Value */}
           <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col">
               <div className="flex items-center mb-4 text-blue-500 font-bold text-xl relative z-10">
                 <FastForward className="w-6 h-6 mr-2" /> 5. Default Value
               </div>
               <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 h-16">
                 None is often used as a default value for function parameters.
               </p>
               <CodeSnippetBlock codeSnippet={`def show(msg=None):\n    if msg is None:\n        print("No msg")\n    else:\n        print(msg)`} />
               <div className="text-xs font-mono font-bold mt-2 text-slate-500">show() → "No msg"<br/>show("Hi") → "Hi"</div>
           </div>

           {/* Empty Values */}
           <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col">
               <div className="flex items-center mb-4 text-purple-500 font-bold text-xl relative z-10">
                 <AlertTriangle className="w-6 h-6 mr-2" /> 6. vs Empty
               </div>
               <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 h-16">
                 None is not the same as an empty string, empty list, or zero.
               </p>
               
               <div className="bg-slate-50 dark:bg-slate-900 list-none text-xs font-mono font-bold space-y-2 p-3 rounded mb-4">
                  <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-1"><span className="text-purple-500">None</span> <span className="text-slate-500">No value</span></div>
                  <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-1"><span className="text-blue-500">0</span> <span className="text-slate-500">Numeric Zero</span></div>
                  <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-1"><span className="text-rose-500">""</span> <span className="text-slate-500">Empty String</span></div>
                  <div className="flex justify-between"><span className="text-emerald-500">[] / {"{}"}</span> <span className="text-slate-500">Empty Coll.</span></div>
               </div>
               
               <CodeSnippetBlock codeSnippet={`print(None == 0)\nprint(None == "")\nprint(None == [])\n\n# All print False.`} />
           </div>
        </div>
      </section>

      {/* Interactive Testing Console Lab - None Operations */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-lg">
          <div className="bg-slate-100 dark:bg-slate-900/50 p-6 border-b border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center">
              <Play className="w-8 h-8 text-slate-500 mr-3" />
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Null Safety Operations Lab</h2>
                <p className="text-slate-500 text-sm">Testing how Python explicitly handles null boundaries.</p>
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
              <h3 className="font-bold text-slate-700 dark:text-slate-300 mb-3">Execute Logic Checks:</h3>
              <div className="grid grid-cols-2 gap-2">
                 <button onClick={() => runDemo('intro')} className="w-full text-left p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-emerald-500 bg-slate-50 dark:bg-slate-900/50 transition-colors">
                   <div className="font-bold text-emerald-600 dark:text-emerald-400 text-sm">1. intro execution</div>
                 </button>
                 <button onClick={() => runDemo('check')} className="w-full text-left p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 bg-slate-50 dark:bg-slate-900/50 transition-colors">
                   <div className="font-bold text-blue-600 dark:text-blue-400 text-sm">2. is None checks</div>
                 </button>
                 <button onClick={() => runDemo('function')} className="w-full text-left p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-purple-500 bg-slate-50 dark:bg-slate-900/50 transition-colors">
                   <div className="font-bold text-purple-600 dark:text-purple-400 text-sm">3. method return checks</div>
                 </button>
                 <button onClick={() => runDemo('default')} className="w-full text-left p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-rose-500 bg-slate-50 dark:bg-slate-900/50 transition-colors border-l-4 border-l-slate-400">
                   <div className="font-bold text-rose-600 dark:text-rose-400 text-sm">4. Function Argument log</div>
                 </button>
                 <button onClick={() => runDemo('empty')} className="w-full text-left p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-amber-500 bg-slate-50 dark:bg-slate-900/50 transition-colors border-l-4 border-l-slate-400">
                   <div className="font-bold text-amber-600 dark:text-amber-400 text-sm">5. vs Empty Boolean Test</div>
                 </button>
                 <button onClick={() => runDemo('db')} className="col-span-2 w-full text-center p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-500 bg-slate-50 dark:bg-slate-900/50 transition-colors border-l-4 border-l-slate-400 mt-2 shadow-sm">
                   <div className="font-bold text-indigo-600 dark:text-indigo-400 text-sm">6. Database Query Result </div>
                 </button>
              </div>
            </div>

            <div className="bg-slate-900 p-6 min-h-[300px] flex flex-col font-mono relative">
              <div className="text-xs font-bold text-slate-500 mb-4 border-b border-slate-800 pb-2 flex items-center">
                 <Terminal className="w-4 h-4 mr-2" /> Output Terminal
              </div>
              <div className="flex-1 overflow-y-auto whitespace-pre">
                {consoleOutput.length === 0 ? (
                  <div className="mt-20 text-center text-slate-600 animate-pulse">Select an algorithmic operation...</div>
                ) : (
                  consoleOutput.map((line, idx) => (
                    <div key={idx} className={`text-sm mb-1 ${line.startsWith('>>>') || line.startsWith('...') ? 'text-blue-400' : 'text-slate-300 font-bold'}`}>
                      {line}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Flow Visualization & 8. Real World */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
         <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 shadow-xl overflow-hidden relative flex flex-col justify-center items-center">
            <h3 className="text-2xl font-bold text-white mb-6 z-10 w-full text-center">7. Execution Flow Path</h3>
            
            <div className="flex flex-col items-center gap-3 w-full font-mono text-sm relative z-10 text-slate-300">
               <div className="bg-slate-800 w-48 p-3 rounded text-center border border-slate-700 font-bold">Input Value</div>
               <ArrowDown className="w-6 h-6 text-slate-500" />
               <div className="bg-indigo-900/50 w-full max-w-[280px] p-3 rounded text-center text-indigo-300 border border-indigo-700 shadow-sm relative font-bold ring-2 ring-indigo-500">Check if value is None</div>
               
               <div className="flex w-full max-w-[220px] justify-between px-6 -mt-1">
                 <div className="w-0.5 h-6 bg-slate-700 rounded ml-[20%] relative">
                    <span className="absolute -left-3 top-2 bg-slate-900 px-1 text-xs font-bold text-rose-400">Yes</span>
                 </div>
                 <div className="w-0.5 h-6 bg-slate-700 rounded mr-[20%] relative">
                    <span className="absolute -right-2 top-2 bg-slate-900 px-1 text-xs font-bold text-emerald-400">No</span>
                 </div>
               </div>
               
               <div className="flex w-full max-w-[280px] justify-between">
                  <div className="bg-rose-900/40 w-[120px] p-2 rounded text-center text-rose-300 border border-rose-700/50 shadow-sm relative">
                    Print<br/>Missing Value
                  </div>
                  
                  <div className="bg-emerald-900/40 w-[120px] p-2 rounded text-center text-emerald-300 border border-emerald-500/80 shadow-[0_0_15px_rgba(16,185,129,0.3)] relative font-bold transform scale-105">
                    Print<br/>Output Data
                  </div>
               </div>
            </div>
         </div>

         <div className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-800/50 p-8 rounded-2xl shadow-sm border border-slate-300 dark:border-slate-700/80">
            <div className="flex items-center mb-6">
              <Database className="w-8 h-8 text-slate-600 dark:text-slate-400 mr-3" />
              <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">8. Real-World Applications</h2>
            </div>
            
            <p className="mb-4 text-slate-700 dark:text-slate-300">
               <strong className="block mt-2 font-mono text-xs bg-slate-100 dark:bg-slate-900 px-1 py-1 rounded border-l-2 border-slate-500">None is returned implicitly.</strong>
            </p>
            
            <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-600 transition-colors">
              <h3 className="font-bold text-xl mb-4 flex items-center"><Search className="text-yellow-500 mr-2" /> Tip 2 — Missing Data</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">You should universally utilize exactly this functionality heavily rigorously natively when executing operations querying abstract datasets like APIs, Databases, and Searches.</p>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-600 transition-colors">
              <h3 className="font-bold text-xl mb-4 flex items-center"><CheckCircle2 className="text-emerald-500 mr-2" /> Tip 3 — Safety First</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 font-mono text-xs space-y-2">
                Always check explicitly.<br/><br/>
                <code className="bg-emerald-100 dark:bg-emerald-900/50 p-1 rounded font-bold">if data is not None: process(data)</code>
              </p>
            </div>
         </div>
      </section>

      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 border-b border-slate-200 dark:border-slate-700 pb-4 flex items-center">
          <AlertTriangle className="w-8 h-8 text-rose-500 mr-3" />
          9. Common Beginner Mistakes
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-lg mb-4 flex items-center text-slate-800 dark:text-slate-200">
              <span className="bg-rose-100 text-rose-600 px-2 py-1 rounded text-xs mr-3">Mistake 1</span> 
              Using == Instead of `is`
            </h4>
            <div className="space-y-4 font-mono text-sm">
              <div className="bg-rose-50 dark:bg-rose-900/20 p-4 rounded border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300">
                <span className="font-bold uppercase text-xs block mb-2">Wrong ❌</span>
                if x == None:
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300">
                <span className="font-bold uppercase text-xs block mb-2">Correct ✔</span>
                if x is None:
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col justify-center">
            <h4 className="font-bold text-lg mb-4 flex items-center text-slate-800 dark:text-slate-200">
              <span className="bg-rose-100 text-rose-600 px-2 py-1 rounded text-xs mr-3">Mistake 2</span> 
              Confusing None with Empty Values
            </h4>
            <div className="flex gap-4 font-mono text-sm h-full items-center">
              <div className="flex-1 bg-rose-50 dark:bg-rose-900/20 p-4 rounded border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300 text-center h-full flex flex-col justify-center">
                <span className="font-bold uppercase text-xs block mb-2">Wrong ❌</span>
                None = 0
              </div>
              <div className="flex-1 bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-center h-full flex flex-col justify-center gap-2">
                <span className="font-bold uppercase text-xs block mb-2">Correct ✔</span>
                <span>None means <strong className="border-b border-emerald-400">no value</strong></span>
                <span>0 is a <strong className="border-b border-emerald-400">numeric value</strong></span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PythonNone;