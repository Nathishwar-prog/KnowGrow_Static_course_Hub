import React, { useState } from 'react';
import {
  Code, BookOpen, Star, RefreshCw, Box, MonitorPlay,
  FileCode, Cpu, AlertTriangle, Database, FastForward, CheckCircle2,
  Terminal, Check, Copy, Link, Server, FileText, ChevronRight, Play,
  Globe, ArrowRight, Shield, Layers, Activity, Filter, Zap, LayoutList,
  CheckSquare, Combine, ArrowDown, Calculator, FunctionSquare, PlusSquare, Target
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

const PythonMath: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);

  const runDemo = (action: string) => {
    setConsoleOutput([]);
    let output: string[] = [];

    switch (action) {
      case 'minmax':
        output = [
          ">>> x = min(5, 10, 25)",
          ">>> y = max(5, 10, 25)",
          ">>> print(x)",
          "5",
          ">>> print(y)",
          "25"
        ];
        break;
      case 'abs':
        output = [
          ">>> x = abs(-7.25)",
          ">>> print(x)",
          "7.25"
        ];
        break;
      case 'pow':
        output = [
          ">>> x = pow(4, 3)",
          ">>> print(x)",
          "64"
        ];
        break;
      case 'sqrt':
        output = [
          ">>> import math",
          ">>> x = math.sqrt(64)",
          ">>> print(x)",
          "8.0"
        ];
        break;
      case 'round':
        output = [
          ">>> import math",
          ">>> print(math.ceil(1.4))",
          "2",
          ">>> print(math.floor(1.4))",
          "1"
        ];
        break;
      case 'trig':
        output = [
          ">>> import math",
          ">>> x = math.sin(math.radians(90))",
          ">>> print(x)",
          "1.0"
        ];
        break;
      case 'log':
        output = [
          ">>> import math",
          ">>> x = math.log(10)",
          ">>> print(x)",
          "2.302585092994046"
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
        <div className="inline-flex items-center justify-center p-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl mb-6 shadow-sm border border-indigo-200 dark:border-indigo-800/50">
          <Calculator className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Python Math Operations
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Python provides deeply integrated built-in mathematical functions combined with an extensive standard <code className="bg-slate-200 dark:bg-slate-800 px-1 rounded font-mono">math</code> module that allows you to execute complex numerical science calculations efficiently.
        </p>
      </header>

      {/* 1. Intro & 2. Built in Maths */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-6">
            <BookOpen className="w-6 h-6 text-indigo-500 mr-3" />
            <h2 className="text-2xl font-bold">1. Introduction to Math</h2>
          </div>
          <p className="mb-4 text-slate-600 dark:text-slate-300">
            Basic native operators support simple operations directly:
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
             <span className="bg-slate-100 dark:bg-slate-900 px-3 py-1 rounded-full text-sm font-bold border border-slate-200 dark:border-slate-700">Addition <span className="text-indigo-500 ml-1">+</span></span>
             <span className="bg-slate-100 dark:bg-slate-900 px-3 py-1 rounded-full text-sm font-bold border border-slate-200 dark:border-slate-700">Subtraction <span className="text-indigo-500 ml-1">-</span></span>
             <span className="bg-slate-100 dark:bg-slate-900 px-3 py-1 rounded-full text-sm font-bold border border-slate-200 dark:border-slate-700">Multiplication <span className="text-indigo-500 ml-1">*</span></span>
             <span className="bg-slate-100 dark:bg-slate-900 px-3 py-1 rounded-full text-sm font-bold border border-slate-200 dark:border-slate-700">Division <span className="text-indigo-500 ml-1">/</span></span>
          </div>

          <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl border border-indigo-100 dark:border-indigo-800/50">
            <h3 className="font-bold text-indigo-800 dark:text-indigo-300 text-sm flex items-center mb-2">
               The "math" module
            </h3>
            <p className="text-indigo-700 dark:text-indigo-400 text-sm">
               For equations like Power, Square root, and Geometry algorithms, the standalone standard <code className="bg-indigo-100 dark:bg-indigo-900/50 px-1 rounded font-bold">math</code> module contains many highly-optimized C-backend mathematical functions.
            </p>
          </div>
        </div>

        <div className="bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-800 relative overflow-hidden flex flex-col justify-center">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <FunctionSquare className="w-48 h-48 text-indigo-400" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center mb-6">
              <Box className="w-6 h-6 text-emerald-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">2. Built-in Math Functions</h2>
            </div>
            
            <p className="text-slate-300 text-sm mb-4">Python strictly provides immediate accessible functions loaded inside memory absolutely globally that never require importing anything.</p>

            <div className="grid grid-cols-2 gap-4">
               <div>
                 <h4 className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">Min() & Max()</h4>
                 <CodeSnippetBlock codeSnippet={`x = min(5, 10, 25)\ny = max(5, 10, 25)\n\nprint(x) # 5\nprint(y) # 25`} />
               </div>
               <div>
                 <h4 className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">Absolute abs()</h4>
                 <CodeSnippetBlock codeSnippet={`x = abs(-7.25)\nprint(x)\n\n# Output: 7.25`} />
               </div>
            </div>

            <div className="mt-2">
               <h4 className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">Power pow()</h4>
               <CodeSnippetBlock codeSnippet={`x = pow(4, 3)\nprint(x)\n\n# Output: 64 (4³ = 64)`} />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Using Math Module & 4. Square Root & 5. Rounding */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
            <Box className="w-8 h-8 text-indigo-500 mr-3" />
            3. Using the Advanced Math Module
          </h2>
          <p className="text-slate-600 dark:text-slate-400">To use advanced algorithms securely, you forcefully must first explicitly import it.</p>
          <div className="mt-4 px-4 py-2 bg-slate-900 text-white font-mono rounded-lg border border-slate-700 shadow-md inline-flex">
             <span className="text-rose-400 mr-2">import</span> <span className="text-emerald-400 relative overflow-hidden group">math
             <span className="absolute bottom-0 left-0 w-full h-[1px] bg-emerald-400 transition-transform scale-x-0 group-hover:scale-x-100 origon-left"></span>
             </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
           {/* Square Root */}
           <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col">
               <div className="flex items-center mb-4 text-emerald-500 font-bold text-xl relative z-10">
                 <Target className="w-6 h-6 mr-2" /> 4. Square Root
               </div>
               <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 h-10">
                 The <code className="bg-slate-100 dark:bg-slate-900 px-1 rounded font-bold">sqrt()</code> algorithmic function mathematically calculates the exact root extraction.
               </p>
               <CodeSnippetBlock codeSnippet={`import math\n\nx = math.sqrt(64)\nprint(x)\n\n# Output: 8.0 (√64 = 8)`} />
           </div>

           {/* Rounding Float Numbers */}
           <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col">
               <div className="flex items-center mb-4 text-blue-500 font-bold text-xl relative z-10">
                 <ArrowDown className="w-6 h-6 mr-2" /> 5. Rounding Numbers
               </div>
               <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 h-10">
                  <span className="inline-block"><code className="bg-slate-100 dark:bg-slate-900 px-1 rounded font-bold text-blue-500">ceil()</code> : Rounds UP.</span><br/>
                  <span className="inline-block mt-1"><code className="bg-slate-100 dark:bg-slate-900 px-1 rounded font-bold text-blue-500">floor()</code> : Rounds DOWN.</span>
               </p>
               <div className="flex gap-4">
                  <div className="flex-1"><CodeSnippetBlock codeSnippet={`math.ceil(1.4)\n# Output: 2`} /></div>
                  <div className="flex-1"><CodeSnippetBlock codeSnippet={`math.floor(1.4)\n# Output: 1`} /></div>
               </div>
           </div>
        </div>
      </section>

      {/* Interactive Testing Console Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-lg">
          <div className="bg-slate-100 dark:bg-slate-900/50 p-6 border-b border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center">
              <Play className="w-8 h-8 text-indigo-500 mr-3" />
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Math Executions Lab</h2>
                <p className="text-slate-500 text-sm">Test the built-in and advanced mathematics functions</p>
              </div>
            </div>
            <button
              onClick={() => runDemo('clear')}
              className="flex items-center px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-lg text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition"
            >
              <RefreshCw className="w-4 h-4 mr-2" /> Clear Console
            </button>
          </div>

          <div className="grid md:grid-cols-2">
            <div className="p-6 border-r border-slate-200 dark:border-slate-700 space-y-2">
              <h3 className="font-bold text-slate-700 dark:text-slate-300 mb-3">Execute Calculations:</h3>
              <div className="grid grid-cols-2 gap-2">
                 <button onClick={() => runDemo('minmax')} className="w-full text-left p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-emerald-500 bg-slate-50 dark:bg-slate-900/50 transition-colors">
                   <div className="font-bold text-emerald-600 dark:text-emerald-400 text-sm">min() / max()</div>
                 </button>
                 <button onClick={() => runDemo('abs')} className="w-full text-left p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-emerald-500 bg-slate-50 dark:bg-slate-900/50 transition-colors">
                   <div className="font-bold text-emerald-600 dark:text-emerald-400 text-sm">abs() (Absolute)</div>
                 </button>
                 <button onClick={() => runDemo('pow')} className="w-full text-left p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-emerald-500 bg-slate-50 dark:bg-slate-900/50 transition-colors">
                   <div className="font-bold text-emerald-600 dark:text-emerald-400 text-sm">pow() (Power)</div>
                 </button>
                 <button onClick={() => runDemo('sqrt')} className="w-full text-left p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-500 bg-indigo-50/50 dark:bg-indigo-900/20 transition-colors border-l-4 border-l-indigo-400">
                   <div className="font-bold text-indigo-600 dark:text-indigo-400 text-sm">math.sqrt()</div>
                 </button>
                 <button onClick={() => runDemo('round')} className="w-full text-left p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-500 bg-indigo-50/50 dark:bg-indigo-900/20 transition-colors border-l-4 border-l-indigo-400">
                   <div className="font-bold text-indigo-600 dark:text-indigo-400 text-sm">ceil() & floor()</div>
                 </button>
                 <button onClick={() => runDemo('trig')} className="w-full text-left p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-500 bg-indigo-50/50 dark:bg-indigo-900/20 transition-colors border-l-4 border-l-indigo-400">
                   <div className="font-bold text-indigo-600 dark:text-indigo-400 text-sm">math.sin()</div>
                 </button>
                 <button onClick={() => runDemo('log')} className="col-span-2 w-full text-center p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-500 bg-indigo-50/50 dark:bg-indigo-900/20 transition-colors border-l-4 border-l-indigo-400">
                   <div className="font-bold text-indigo-600 dark:text-indigo-400 text-sm">math.log() (Logarithms)</div>
                 </button>
              </div>
            </div>

            <div className="bg-slate-900 p-6 min-h-[300px] flex flex-col font-mono relative">
              <div className="text-xs font-bold text-slate-500 mb-4 border-b border-slate-800 pb-2 flex items-center">
                 <Terminal className="w-4 h-4 mr-2" /> REPL Integrated Calculations Panel
              </div>
              <div className="flex-1 overflow-y-auto whitespace-pre">
                {consoleOutput.length === 0 ? (
                  <div className="mt-20 text-center text-slate-600 animate-pulse">Select an algorithmic operation...</div>
                ) : (
                  consoleOutput.map((line, idx) => (
                    <div key={idx} className={`text-sm mb-1 ${line.startsWith('>>>') || line.startsWith('...') ? 'text-blue-400' : 'text-emerald-400 font-bold'}`}>
                      {line}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Constants, 7. Trigonometry, 8. Logarithms */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-3 gap-6">
         {/* Constants */}
         <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col">
             <div className="flex items-center mb-4 text-rose-500 font-bold text-xl relative z-10">
               <Database className="w-6 h-6 mr-2" /> 6. Global Constants
             </div>
             <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
               The module persistently provides important rigid mathematical constants.
             </p>
             <div className="bg-rose-50 dark:bg-rose-900/10 rounded-xl p-3 mb-4 flex flex-col gap-2 font-mono text-xs border border-rose-100 dark:border-rose-900/50">
                <div className="flex justify-between border-b border-rose-200 dark:border-rose-800/50 pb-1">
                  <span className="font-bold text-rose-700 dark:text-rose-400">math.pi</span>
                  <span className="text-slate-500">Value of π</span>
                </div>
                <div className="flex justify-between border-b border-rose-200 dark:border-rose-800/50 pb-1">
                  <span className="font-bold text-rose-700 dark:text-rose-400">math.e</span>
                  <span className="text-slate-500">Euler's number</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold text-rose-700 dark:text-rose-400">math.inf</span>
                  <span className="text-slate-500">Infinity value</span>
                </div>
             </div>
             <CodeSnippetBlock codeSnippet={`import math\nprint(math.pi)\n# 3.141592653...`} />
         </div>

         {/* Trigonometry */}
         <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col">
             <div className="flex items-center mb-4 text-indigo-500 font-bold text-xl relative z-10">
               <Activity className="w-6 h-6 mr-2" /> 7. Trigonometry
             </div>
             <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
               The module includes a dense toolkit of deeply implemented trigonometric calculators.
             </p>
             <div className="bg-indigo-50 dark:bg-indigo-900/10 rounded-xl p-3 mb-4 flex flex-col gap-2 font-mono text-xs border border-indigo-100 dark:border-indigo-900/50">
                <div className="flex justify-between border-b border-indigo-200 dark:border-indigo-800/50 pb-1">
                  <span className="font-bold text-indigo-700 dark:text-indigo-400">sin()</span>
                  <span className="text-slate-500">Sine value</span>
                </div>
                <div className="flex justify-between border-b border-indigo-200 dark:border-indigo-800/50 pb-1">
                  <span className="font-bold text-indigo-700 dark:text-indigo-400">cos()</span>
                  <span className="text-slate-500">Cosine value</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold text-indigo-700 dark:text-indigo-400">tan()</span>
                  <span className="text-slate-500">Tangent value</span>
                </div>
             </div>
             <CodeSnippetBlock codeSnippet={`import math\nx = math.sin(math.radians(90))\nprint(x) # 1.0`} />
         </div>

         {/* Logarithms */}
         <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col">
             <div className="flex items-center mb-4 text-teal-500 font-bold text-xl relative z-10">
               <Layers className="w-6 h-6 mr-2" /> 8. Logarithms
             </div>
             <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
               Complex recursive logarithmic formulas scaling capabilities are explicitly completely supported.
             </p>
             <div className="bg-teal-50 dark:bg-teal-900/10 rounded-xl p-3 mb-4 flex flex-col gap-2 font-mono text-xs border border-teal-100 dark:border-teal-900/50">
                <div className="flex justify-between border-b border-teal-200 dark:border-teal-800/50 pb-1">
                  <span className="font-bold text-teal-700 dark:text-teal-400">log(x)</span>
                  <span className="text-slate-500">Natural Log</span>
                </div>
                <div className="flex justify-between border-b border-teal-200 dark:border-teal-800/50 pb-1">
                  <span className="font-bold text-teal-700 dark:text-teal-400">log10(x)</span>
                  <span className="text-slate-500">Base-10 Log</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold text-teal-700 dark:text-teal-400">log2(x)</span>
                  <span className="text-slate-500">Base-2 Log</span>
                </div>
             </div>
             <CodeSnippetBlock codeSnippet={`import math\nx = math.log(10)\nprint(x) # 2.302585...`} />
         </div>
      </section>

      {/* 9. Execution Vis & 10. Real World Application */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
         <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 shadow-xl overflow-hidden relative flex flex-col justify-center items-center">
            <h3 className="text-2xl font-bold text-white mb-6 z-10 w-full text-center">9. Execution Flow of Math</h3>
            
            <div className="flex flex-col items-center gap-3 w-full font-mono text-sm relative z-10">
               <div className="bg-slate-800 w-48 p-3 rounded text-center text-slate-300 border border-slate-700 shadow-sm relative font-bold">Input Number (25)</div>
               <ArrowDown className="w-4 h-4 text-emerald-500" />
               <div className="bg-indigo-900/50 w-48 p-3 rounded text-center text-indigo-300 border border-indigo-700 shadow-sm relative font-bold">math.sqrt(25)</div>
               <ArrowDown className="w-4 h-4 text-emerald-500" />
               <div className="bg-sky-900/50 w-48 p-3 rounded text-center text-sky-300 border border-sky-700 shadow-sm relative font-bold">Calculate √25</div>
               <ArrowDown className="w-4 h-4 text-emerald-500" />
               <div className="bg-emerald-600 shadow-[0_0_15px_rgba(16,185,129,0.5)] w-48 p-3 rounded text-center text-white border border-emerald-500 relative font-bold text-lg">Return 5.0</div>
            </div>
         </div>

         <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/10 dark:to-blue-900/10 p-8 rounded-2xl shadow-sm border border-indigo-100 dark:border-indigo-800/30">
            <div className="flex items-center mb-6">
              <RefreshCw className="w-8 h-8 text-indigo-500 mr-3" />
              <h2 className="text-2xl font-bold dark:text-indigo-100">10. Real-World Example</h2>
            </div>
            
            <p className="mb-4 text-slate-700 dark:text-slate-300">
               Math functions are widely effectively used heavily in:
               <strong className="block mt-2 font-mono text-sm pl-4 border-l-2 border-indigo-300">
                  Data science · Scientific computing · Game development · Engineering applications
               </strong>
            </p>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
               <h4 className="font-bold text-slate-800 dark:text-white mb-2 pb-2 border-b border-slate-200 dark:border-slate-700">Calculate Area of a Circle <span className="float-right text-xs opacity-50 px-2 py-1 bg-slate-100 dark:bg-slate-900 rounded">Area = π × r²</span></h4>
               <CodeSnippetBlock 
                  codeSnippet={`import math\n\nradius = 5\n\narea = math.pi * radius**2\n\nprint("Area:", area)`}
               />
               <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded text-indigo-800 dark:text-indigo-300 font-mono text-sm text-center border border-indigo-200 dark:border-indigo-800 font-bold">
                  Output: Area: 78.53981633974483
               </div>
            </div>
         </div>
      </section>

      {/* 11. Mistakes & 12. Dev Tips */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 p-8 opacity-20"><Target className="w-48 h-48 text-white" /></div>
          
          <h2 className="text-3xl font-extrabold mb-4 flex items-center relative z-10">
            <Star className="w-8 h-8 mr-3 text-yellow-300 fill-yellow-300" />
            12. Personal Developer Tips
          </h2>
          <p className="text-indigo-100 mb-10 font-medium italic relative z-10 text-lg border-b border-indigo-400/30 pb-4 inline-block">From a Developer with 15+ years of Python experience:</p>
          
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors">
              <h3 className="font-bold text-xl mb-4 flex items-center"><Zap className="text-yellow-300 mr-2" /> Tip 1 — Built-ins</h3>
              <p className="text-sm text-indigo-50 mb-4">For tremendously simple generic structural operations try strictly to stick with utilizing directly built-in natively available functions. <code className="block mt-2 bg-black/30 p-1 text-center rounded">min(), max(), abs(), pow()</code><br/>These are noticeably remarkably consistently faster!</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors">
              <h3 className="font-bold text-xl mb-4 flex items-center"><Server className="text-sky-300 mr-2" /> Tip 2 — Math Module</h3>
              <p className="text-sm text-indigo-50 mb-4">You should systematically definitively invoke the heavily optimized C-compiled <code className="bg-black/30 rounded px-1">math</code> library rigorously only when intensely executing: Trigonometry, Geometry, Logarithms or heavy Statistics.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors">
              <h3 className="font-bold text-xl mb-4 flex items-center"><PlusSquare className="text-emerald-300 mr-2" /> Tip 3 — Pythonic Power **</h3>
              <p className="text-sm text-indigo-50">Instead of deploying standard heavy functions like <code className="bg-black/20 p-1 rounded font-mono">pow(2,3)</code><br/><br/>You should aggressively prefer relying natively upon the standard algebraic exponentially styled Pythonic operator syntax format:<br/><code className="block text-center text-lg mt-2 bg-black/40 p-2 rounded text-emerald-300 font-bold">2 ** 3</code>
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-8 border-b border-slate-200 dark:border-slate-700 pb-4 flex items-center">
          <AlertTriangle className="w-8 h-8 text-rose-500 mr-3" />
          11. Common Beginner Mistakes
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-lg mb-4 flex items-center text-slate-800 dark:text-slate-200">
              <span className="bg-rose-100 text-rose-600 px-2 py-1 rounded text-xs mr-3">Mistake 1</span> 
              Forgetting to Import Math
            </h4>
            <div className="space-y-4 font-mono text-sm">
              <div className="bg-rose-50 dark:bg-rose-900/20 p-4 rounded border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300">
                <span className="font-bold uppercase text-xs block mb-2">Wrong ❌ (NameError Exception)</span>
                x = math.sqrt(25)
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300">
                <span className="font-bold uppercase text-xs block mb-2">Correct ✔</span>
                import math<br/>
                x = math.sqrt(25)
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-lg mb-4 flex items-center text-slate-800 dark:text-slate-200">
              <span className="bg-rose-100 text-rose-600 px-2 py-1 rounded text-xs mr-3">Mistake 2</span> 
              Using Wrong Unknown Function Names
            </h4>
            <div className="space-y-4 font-mono text-sm flex-1 flex flex-col justify-center">
              <div className="bg-rose-50 dark:bg-rose-900/20 p-4 rounded border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300">
                <span className="font-bold uppercase text-xs block mb-2">Wrong ❌</span>
                math.square(5)
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300">
                <span className="font-bold uppercase text-xs block mb-2">Correct ✔</span>
                math.sqrt(25)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. Practice Exercises */}
      <section className="max-w-4xl mx-auto mb-16 text-center">
         <h2 className="text-3xl font-bold mb-6 flex items-center justify-center">
            <CheckSquare className="w-8 h-8 text-indigo-500 mr-3" />
            13. Practice Exercises
         </h2>
         <p className="text-slate-600 dark:text-slate-400 mb-8">Ready to test your math knowledge? Try these hands-on challenges.</p>
         
         <div className="space-y-4 text-left">
            <div className="border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
               <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2 flex items-center">
                 <span className="bg-indigo-600 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs mr-3">1</span> 
                 Exercise 1: Extraction
               </h3>
               <p className="text-slate-700 dark:text-slate-300">Write a tightly integrated numerical program securely operating dynamically to calculate and strictly locate the exact analytical mathematical square-root of <code className="font-bold mx-1">81</code>.</p>
            </div>
            
            <div className="border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
               <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2 flex items-center">
                 <span className="bg-indigo-600 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs mr-3">2</span> 
                 Exercise 2: Largest Value Analysis
               </h3>
               <p className="text-slate-700 dark:text-slate-300">Write an analytical testing evaluation algorithm executing natively dynamically verifying checking output values isolating reliably validating extracting the strictly explicitly largest mathematical numbers among identically provided raw statistical three core integer parameters values simultaneously passed down accurately utilizing dynamically integrated natively available standard built-in functions.</p>
            </div>
            
            <div className="border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
               <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2 flex items-center">
                 <span className="bg-indigo-600 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs mr-3">3</span> 
                 Exercise 3: Circumference Computation
               </h3>
               <p className="text-slate-700 dark:text-slate-300">Write an advanced mathematical physics application geometry-based statistics mathematical equations algorithms natively utilizing fully importing dynamically reliably referencing module global constants successfully calculating extracting outputting standard analytical dimensional mathematical calculated Area of an explicit generic standard Circle directly exploiting utilizing reliably mathematically accurately global explicit integrated available floating metric precision decimal value <code className="font-bold bg-indigo-100 dark:bg-indigo-900/50 px-1 rounded mx-1">π</code> (pi) exactly smoothly executing internally inherently perfectly safely directly flawlessly accurately dynamically globally strictly continuously flawlessly internally.</p>
            </div>
         </div>
      </section>

    </div>
  );
};

export default PythonMath;