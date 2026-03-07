import React, { useState } from 'react';
import {
  Code, BookOpen, Star, RefreshCw, Box, MonitorPlay,
  FileCode, Cpu, AlertTriangle, Database, FastForward, CheckCircle2,
  Terminal, Check, Copy, Link, Server, FileText, ChevronRight, Play,
  Globe, ArrowRight, Shield, Layers, Activity, Filter, Zap, LayoutList,
  CheckSquare, Combine, ArrowDown, GitBranch, SplitSquareHorizontal, Gamepad2, Blocks
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

const PythonMatch: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);

  const runDemo = (action: string) => {
    setConsoleOutput([]);
    let output: string[] = [];

    switch (action) {
      case 'simple':
        output = [
          ">>> day = 3",
          ">>> match day:",
          "...     case 1: print('Monday')",
          "...     case 2: print('Tuesday')",
          "...     case 3: print('Wednesday')",
          "...     case _: print('Invalid day')",
          "Wednesday"
        ];
        break;
      case 'multiple':
        output = [
          ">>> day = 6",
          ">>> match day:",
          "...     case 1 | 2 | 3 | 4 | 5: print('Weekday')",
          "...     case 6 | 7: print('Weekend')",
          "Weekend"
        ];
        break;
      case 'default':
        output = [
          ">>> number = 10",
          ">>> match number:",
          "...     case 5: print('Five')",
          "...     case 10: print('Ten')",
          "...     case _: print('Unknown')",
          "Ten"
        ];
        break;
      case 'guards':
        output = [
          ">>> age = 20",
          ">>> match age:",
          "...     case age if age < 18: print('Minor')",
          "...     case age if age >= 18: print('Adult')",
          "Adult"
        ];
        break;
      case 'strings':
        output = [
          ">>> command = 'start'",
          ">>> match command:",
          "...     case 'start': print('System Starting')",
          "...     case 'stop': print('System Stopping')",
          "System Starting"
        ];
        break;
      case 'lists':
        output = [
          ">>> data = [1, 2]",
          ">>> match data:",
          "...     case [1, 2]: print('Matched list')",
          "...     case _: print('No match')",
          "Matched list"
        ];
        break;
      case 'calculator':
        output = [
          ">>> operator = '+'",
          ">>> match operator:",
          "...     case '+': print('Addition')",
          "...     case '-': print('Subtraction')",
          "Addition"
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
        <div className="inline-flex items-center justify-center p-4 bg-teal-100 dark:bg-teal-900/30 rounded-2xl mb-6 shadow-sm border border-teal-200 dark:border-teal-800/50">
          <GitBranch className="w-10 h-10 text-teal-600 dark:text-teal-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Python Match Statement
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          The match statement in Python evaluates an expression against multiple structural patterns and executes the block associated with the first matching case.
        </p>
      </header>

      {/* 1. Intro & 2. Basic Syntax */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-6">
            <BookOpen className="w-6 h-6 text-teal-500 mr-3" />
            <h2 className="text-2xl font-bold">1. Introduction</h2>
          </div>
          <p className="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed">
            It works similarly to the <code className="bg-slate-100 dark:bg-slate-700 px-1 rounded">switch</code> statement in other programming languages.
          </p>
          <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-xl border border-teal-100 dark:border-teal-800/50 mb-6">
            <p className="font-bold text-teal-800 dark:text-teal-300 text-sm flex items-center mb-2">
               <AlertTriangle className="w-4 h-4 mr-2" /> Python 3.10+ Only
            </p>
            <p className="text-teal-700 dark:text-teal-400 text-sm">
               The match statement was introduced in <strong>Structural Pattern Matching</strong> and is only available from Python 3.10 onwards.
            </p>
          </div>
          <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-xl border-l-4 border-slate-400">
             <p className="text-sm font-medium italic text-slate-600 dark:text-slate-400">
               "In simple terms: The match statement allows a program to elegantly select one block of code from many options."
             </p>
          </div>
        </div>

        <div className="bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Code className="w-48 h-48 text-white" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center mb-6">
              <Box className="w-6 h-6 text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">2. Basic Syntax</h2>
            </div>
            
            <CodeSnippetBlock codeSnippet={`match variable:\n    case value1:\n        # code block\n    case value2:\n        # code block\n    case _:\n        # default block`} />
            
            <table className="w-full text-sm text-slate-300 border-collapse mt-4">
              <thead>
                <tr className="border-b border-slate-700">
                   <th className="py-2 text-left font-bold text-white w-1/3">Keyword</th>
                   <th className="py-2 text-left font-bold text-white">Meaning</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-800/50">
                  <td className="py-3 font-mono text-teal-400 font-bold">match</td>
                  <td className="py-3">Starts pattern matching</td>
                </tr>
                <tr className="border-b border-slate-800/50">
                  <td className="py-3 font-mono text-blue-300 font-bold">case</td>
                  <td className="py-3">Defines a condition to verify</td>
                </tr>
                <tr>
                  <td className="py-3 font-mono text-emerald-400 font-bold">_</td>
                  <td className="py-3">Default wildcard catch-all (like <code className="bg-slate-800 px-1 rounded text-white">else</code>)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3. Simple & 4. Multiple & 5. Default */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-3 gap-6">
         {/* Simple Example */}
         <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col">
             <div className="flex items-center mb-4 text-emerald-500 font-bold text-xl relative z-10">
               <Activity className="w-6 h-6 mr-2" /> 3. Simple Match
             </div>
             <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 h-12">
               Python strictly compares the variable against each specific block sequentially until matched.
             </p>
             <div className="mb-2">
               <CodeSnippetBlock codeSnippet={`day = 3\n\nmatch day:\n    case 1:\n        print("Mon")\n    case 2:\n        print("Tue")\n    case 3:\n        print("Wed")\n    case _:\n        print("Invalid")`} />
             </div>
             <div className="bg-slate-100 dark:bg-slate-900 mt-auto p-3 rounded font-mono text-xs text-emerald-600 dark:text-emerald-400 font-bold border border-slate-200 dark:border-slate-800 text-center">
                Wed
             </div>
         </div>

         {/* Multiple Cases */}
         <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col">
             <div className="flex items-center mb-4 text-blue-500 font-bold text-xl relative z-10">
               <Blocks className="w-6 h-6 mr-2" /> 4. Multiple Cases
             </div>
             <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 h-12">
                Multiple potential values can easily share exactly the same code block using the <code className="bg-slate-100 dark:bg-slate-900 px-1 rounded font-bold text-blue-500">|</code> OR operator.
             </p>
             <div className="mb-2">
               <CodeSnippetBlock codeSnippet={`day = 6\n\nmatch day:\n    case 1 | 2 | 3 | 4 | 5:\n        print("Weekday")\n    case 6 | 7:\n        print("Weekend")`} />
             </div>
             <div className="bg-slate-100 dark:bg-slate-900 mt-auto p-3 rounded font-mono text-xs text-blue-600 dark:text-blue-400 font-bold border border-slate-200 dark:border-slate-800 text-center">
                Weekend
             </div>
         </div>

         {/* Default Case */}
         <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col">
             <div className="flex items-center mb-4 text-purple-500 font-bold text-xl relative z-10">
               <Shield className="w-6 h-6 mr-2" /> 5. Default Fallback
             </div>
             <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 h-12">
               The standalone underscore <code className="bg-slate-100 dark:bg-slate-900 px-1 rounded font-bold text-purple-500">_</code> acts as the catch-all wildcard condition if everything above completely fails.
             </p>
             <div className="mb-2">
               <CodeSnippetBlock codeSnippet={`number = 10\n\nmatch number:\n    case 5:\n        print("Five")\n    case 10:\n        print("Ten")\n    case _:\n        print("Unknown")`} />
             </div>
             <div className="bg-slate-100 dark:bg-slate-900 mt-auto p-3 rounded font-mono text-xs text-purple-600 dark:text-purple-400 font-bold border border-slate-200 dark:border-slate-800 text-center">
                Ten
             </div>
         </div>
      </section>

      {/* Interactive Case Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-lg">
          <div className="bg-slate-100 dark:bg-slate-900/50 p-6 border-b border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center">
              <Play className="w-8 h-8 text-teal-500 mr-3" />
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Pattern Matching Lab</h2>
                <p className="text-slate-500 text-sm">Test structural condition routing combinations</p>
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
              <h3 className="font-bold text-slate-700 dark:text-slate-300 mb-3">Run Code Snippets:</h3>
              <div className="grid grid-cols-2 gap-2">
                 <button onClick={() => runDemo('simple')} className="w-full text-left p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-teal-500 bg-slate-50 dark:bg-slate-900/50 transition-colors">
                   <div className="font-bold text-teal-600 dark:text-teal-400 text-sm">1. Basic Numbers</div>
                 </button>
                 <button onClick={() => runDemo('multiple')} className="w-full text-left p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 bg-slate-50 dark:bg-slate-900/50 transition-colors">
                   <div className="font-bold text-blue-600 dark:text-blue-400 text-sm">2. Multi-case (|)</div>
                 </button>
                 <button onClick={() => runDemo('default')} className="w-full text-left p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-purple-500 bg-slate-50 dark:bg-slate-900/50 transition-colors">
                   <div className="font-bold text-purple-600 dark:text-purple-400 text-sm">3. Wildcard Default (_)</div>
                 </button>
                 <button onClick={() => runDemo('guards')} className="w-full text-left p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-emerald-500 bg-slate-50 dark:bg-slate-900/50 transition-colors">
                   <div className="font-bold text-emerald-600 dark:text-emerald-400 text-sm">4. Guard If Statements</div>
                 </button>
                 <button onClick={() => runDemo('strings')} className="w-full text-left p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-rose-500 bg-slate-50 dark:bg-slate-900/50 transition-colors">
                   <div className="font-bold text-rose-600 dark:text-rose-400 text-sm">5. String Parsing</div>
                 </button>
                 <button onClick={() => runDemo('lists')} className="w-full text-left p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-amber-500 bg-slate-50 dark:bg-slate-900/50 transition-colors">
                   <div className="font-bold text-amber-600 dark:text-amber-400 text-sm">6. Complex Lists Arrays</div>
                 </button>
                 <button onClick={() => runDemo('calculator')} className="col-span-2 w-full text-center p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-500 bg-slate-50 dark:bg-slate-900/50 transition-colors">
                   <div className="font-bold text-indigo-600 dark:text-indigo-400 text-sm">7. Run Real-World Calculator</div>
                 </button>
              </div>
            </div>

            <div className="bg-slate-900 p-6 min-h-[250px] flex flex-col font-mono relative">
              <div className="text-xs font-bold text-slate-500 mb-4 border-b border-slate-800 pb-2 flex items-center">
                <Terminal className="w-4 h-4 mr-2" /> Python Interactive Console
              </div>
              <div className="flex-1 overflow-y-auto whitespace-pre">
                {consoleOutput.length === 0 ? (
                  <div className="mt-16 text-center text-slate-600 animate-pulse">Select an operation to run...</div>
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

      {/* 6. Guards, 7. Strings, 8. Lists */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-3 gap-6">
         {/* Guards */}
         <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col">
             <div className="flex items-center mb-4 text-emerald-600 dark:text-emerald-400 font-bold text-xl relative z-10">
               <Filter className="w-6 h-6 mr-2" /> 6. Guards (Ifs)
             </div>
             <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 h-16">
               You can inject extra validation conditionals utilizing inline <code className="bg-slate-100 dark:bg-slate-900 px-1 rounded font-bold">if</code> statements deeply buried inside cases.
             </p>
             <div className="mb-2">
               <CodeSnippetBlock codeSnippet={`age = 20\n\nmatch age:\n    case age if age < 18:\n        print("Minor")\n    case age if age >= 18:\n        print("Adult")`} />
             </div>
             <div className="bg-slate-100 dark:bg-slate-900 mt-auto p-3 rounded font-mono text-xs text-emerald-600 dark:text-emerald-400 font-bold border border-slate-200 dark:border-slate-800 text-center">
                Adult
             </div>
         </div>

         {/* Strings */}
         <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col">
             <div className="flex items-center mb-4 text-rose-500 font-bold text-xl relative z-10">
               <FileText className="w-6 h-6 mr-2" /> 7. Parsing Strings
             </div>
             <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 h-16">
                Directly matches exact textual string variables flawlessly. Excellent for command-line interpreters algorithms.
             </p>
             <div className="mb-2">
               <CodeSnippetBlock codeSnippet={`command = "start"\n\nmatch command:\n    case "start":\n        print("System Starting")\n    case "stop":\n        print("Stopping")\n    case "pause":\n        print("Paused")`} />
             </div>
             <div className="bg-slate-100 dark:bg-slate-900 mt-auto p-3 rounded font-mono text-xs text-rose-600 dark:text-rose-400 font-bold border border-slate-200 dark:border-slate-800 text-center">
                System Starting
             </div>
         </div>

         {/* Lists */}
         <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col">
             <div className="flex items-center mb-4 text-amber-500 font-bold text-xl relative z-10">
               <LayoutList className="w-6 h-6 mr-2" /> 8. Matching Lists
             </div>
             <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 h-16">
               Python can robustly structurally map deeply nested array shapes and sizes simultaneously mapping variables.
             </p>
             <div className="mb-2">
               <CodeSnippetBlock codeSnippet={`data = [1, 2]\n\nmatch data:\n    case [1, 2]:\n        print("Matched list")\n    case _:\n        print("No match")`} />
             </div>
             <div className="bg-slate-100 dark:bg-slate-900 mt-auto p-3 rounded font-mono text-xs text-amber-600 dark:text-amber-400 font-bold border border-slate-200 dark:border-slate-800 text-center">
                Matched list
             </div>
         </div>
      </section>

      {/* 9. Execution Visualization & 10. Match vs If */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
         <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 shadow-xl overflow-hidden relative">
            <div className="flex items-center mb-6 z-10 relative">
               <SplitSquareHorizontal className="w-6 h-6 text-teal-400 mr-3" />
               <h3 className="text-2xl font-bold text-white mb-2">9. Execution Flow of Match</h3>
            </div>
            <p className="text-slate-400 text-sm mb-6 z-10 relative">Assuming value = <code className="bg-slate-800 px-1 rounded text-teal-300">2</code></p>
            
            <div className="flex flex-col items-center gap-2 w-full font-mono text-sm relative z-10">
               <div className="bg-slate-800 w-48 p-2 rounded text-center text-white border border-slate-700 shadow-sm relative group z-20">match value</div>
               
               <div className="flex -mt-2">
                  <div className="w-24 h-8 border-b-2 border-l-2 border-slate-700 rounded-bl-lg -mt-3"></div>
                  <div className="w-24 h-8 border-b-2 border-r-2 border-slate-700 rounded-br-lg -mt-3"></div>
               </div>
               
               <div className="flex justify-between w-full max-w-[280px] mt-2 mb-2">
                  <div className="bg-rose-900/40 w-[120px] p-2 rounded text-center text-rose-300 border border-rose-700/50 shadow-sm opacity-50 relative line-through decoration-rose-500">
                    case 1
                    <span className="absolute -top-6 text-xs text-rose-400 -ml-3">✗ Fail</span>
                  </div>
                  
                  <div className="bg-emerald-900/40 w-[120px] p-2 rounded text-center text-emerald-300 border border-emerald-500/80 shadow-[0_0_15px_rgba(16,185,129,0.3)] relative font-bold transform scale-105">
                    case 2
                     <span className="absolute -top-6 text-xs text-emerald-400 -ml-5">✓ Match Found</span>
                  </div>
               </div>
               
               <ArrowDown className="w-5 h-5 text-emerald-500 ml-32" />
               
               <div className="flex justify-end w-full max-w-[280px]">
                  <div className="bg-indigo-900/80 w-[120px] p-2 rounded text-center text-indigo-300 border border-indigo-500 shadow-sm font-bold">
                     Execute Block
                     <div className="text-xs font-normal text-indigo-200 mt-1">print logic...</div>
                  </div>
               </div>
            </div>
         </div>

         <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="flex items-center mb-6">
              <Combine className="w-6 h-6 text-blue-500 mr-3" />
              <h2 className="text-2xl font-bold">10. Match vs If...Else</h2>
            </div>
            
            <table className="w-full mb-6 border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-900/50">
                  <th className="p-3 text-left border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-bold">If...Else</th>
                  <th className="p-3 text-left border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-bold">Match Statement</th>
                </tr>
              </thead>
              <tbody>
                 <tr>
                   <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">Used for simple true/false conditions</td>
                   <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">Used for multiple complex patterns</td>
                 </tr>
                 <tr className="bg-slate-50 dark:bg-slate-800/50">
                   <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">Hard to manage many conditions (messy)</td>
                   <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">Tremendously cleaner for many cases</td>
                 </tr>
                 <tr>
                   <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">Sequential waterfall checks</td>
                   <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">Pattern-based structural extraction</td>
                 </tr>
              </tbody>
            </table>

            <div className="grid grid-cols-2 gap-4">
               <div>
                  <h4 className="font-bold text-rose-700 dark:text-rose-400 text-sm mb-1 px-1">If (Messy):</h4>
                  <CodeSnippetBlock codeSnippet={`if day == 1:\n    print("Mon")\nelif day == 2:\n    print("Tue")`} />
               </div>
               <div>
                  <h4 className="font-bold text-teal-700 dark:text-teal-400 text-sm mb-1 px-1">Match (Clean):</h4>
                  <CodeSnippetBlock codeSnippet={`match day:\n    case 1:\n        print("Mon")\n    case 2:\n        print("Tue")`} />
               </div>
            </div>
         </div>
      </section>

      {/* 11. Real World Example Calculator */}
      <section className="max-w-6xl mx-auto mb-16">
         <div className="bg-gradient-to-r from-sky-50 to-teal-50 dark:from-sky-900/10 dark:to-teal-900/10 p-8 rounded-2xl shadow-sm border border-sky-100 dark:border-sky-800/30 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
               <div className="flex items-center mb-6">
                 <Globe className="w-8 h-8 text-sky-500 mr-3" />
                 <h2 className="text-2xl font-bold dark:text-sky-100">11. Real-World API Handlers</h2>
               </div>
               <p className="mb-4 text-slate-700 dark:text-slate-300">
                 Match statements are absolutely critical in software routing like:
               </p>
               <div className="space-y-2 mb-6 font-bold text-slate-600 dark:text-slate-400 pl-4 border-l-2 border-sky-300">
                  <p>✔ API request REST handling</p>
                  <p>✔ Terminal Command interpreters</p>
                  <p>✔ Application Menu systems</p>
                  <p>✔ Video Game logic input</p>
               </div>
            </div>
            
            <div className="flex-1 w-full bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
               <h4 className="font-bold text-slate-800 dark:text-white mb-2 pb-2 border-b border-slate-200 dark:border-slate-700">Example: Simple Calculator Engine</h4>
               <CodeSnippetBlock 
                  codeSnippet={`operator = "+"\n\nmatch operator:\n    case "+":\n        print("Addition selected")\n    case "-":\n        print("Subtraction selected")\n    case "*":\n        print("Multiplication selected")\n    case "/":\n        print("Division selected")`}
               />
               <div className="text-right text-sm text-sky-600 dark:text-sky-400 font-mono font-bold">
                  Output: Addition selected
               </div>
            </div>
         </div>
      </section>

      {/* 12. Mistakes & 13. Dev Tips */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-r from-teal-500 to-emerald-600 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 p-8 opacity-20"><Gamepad2 className="w-48 h-48 text-white" /></div>
          
          <h2 className="text-3xl font-extrabold mb-4 flex items-center relative z-10">
            <Star className="w-8 h-8 mr-3 text-yellow-300 fill-yellow-300" />
            13. Personal Developer Tips
          </h2>
          <p className="text-teal-100 mb-10 font-medium italic relative z-10 text-lg border-b border-teal-400/30 pb-4 inline-block">From a Developer with 15+ years of Python experience:</p>
          
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors">
              <h3 className="font-bold text-xl mb-4 flex items-center"><Terminal className="text-yellow-300 mr-2" /> Tip 1 — Replace Elifs</h3>
              <p className="text-sm text-teal-50 mb-4">If your program has numerous sprawling <code className="bg-black/30 px-1 rounded">elif</code> conditions scattered everywhere, blindly replace them immediately with <code className="bg-black/30 px-1 rounded">match</code>. It significantly improves codebase readability.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors">
              <h3 className="font-bold text-xl mb-4 flex items-center"><Shield className="text-rose-300 mr-2" /> Tip 2 — Minimal Logic</h3>
              <p className="text-sm text-teal-50 mb-4">Keep cases simple. Avoid placing heavily nested mathematical logic directly inside cases natively. Try to keep each case performing a clean, clear, single localized action.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors">
              <h3 className="font-bold text-xl mb-4 flex items-center"><Zap className="text-blue-300 mr-2" /> Tip 3 — Menu Driven</h3>
              <p className="text-sm text-teal-50">Match works incredibly well in systems navigating CLI Menus:<br/>
              <code className="text-xs bg-black/20 block p-2 rounded mt-2 text-white">1 → Add<br/>2 → Delete<br/>3 → Exit</code>
              </p>
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
              Using Match in Older Python Versions
            </h4>
            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
               <p>The <code className="font-bold bg-slate-100 dark:bg-slate-900 px-1 rounded">match</code> statement structural parsing logic strictly works ONLY in Python versions 3.10 natively installed or later.</p>
               <div className="p-3 bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-300 rounded border border-rose-200 dark:border-rose-800/50 font-mono text-xs shadow-sm">
                  SyntaxError: invalid syntax<br/>
                  <span className="text-slate-500"># (If executing this file on Python 3.9)</span>
               </div>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-lg mb-4 flex items-center text-slate-800 dark:text-slate-200">
              <span className="bg-rose-100 text-rose-600 px-2 py-1 rounded text-xs mr-3">Mistake 2</span> 
              Forgetting Default Case (_)
            </h4>
            <div className="space-y-3 font-mono text-sm">
              <div className="bg-rose-50 dark:bg-rose-900/20 p-3 rounded border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300">
                <span className="font-bold uppercase text-xs block mb-1">Bad Practice ❌</span>
                match x:<br/>&nbsp;&nbsp;&nbsp;&nbsp;case 1: print("One")
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300">
                <span className="font-bold uppercase text-xs block mb-1">Better ✔️</span>
                &nbsp;&nbsp;&nbsp;&nbsp;case _: print("Unknown value")
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 14. Practice Exercises */}
      <section className="max-w-4xl mx-auto mb-16 text-center">
         <h2 className="text-3xl font-bold mb-6 flex items-center justify-center">
            <CheckSquare className="w-8 h-8 text-teal-500 mr-3" />
            14. Practice Exercises
         </h2>
         <p className="text-slate-600 dark:text-slate-400 mb-8">Ready to test your knowledge? Try these hands-on challenges.</p>
         
         <div className="space-y-4 text-left">
            <div className="border border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/20 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
               <h3 className="font-bold text-teal-800 dark:text-teal-300 mb-2 flex items-center">
                 <span className="bg-teal-600 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs mr-3">1</span> 
                 Exercise 1: Day Finder
               </h3>
               <p className="text-slate-700 dark:text-slate-300">Create a program utilizing pattern matching that reliably prints out the exact Week Day Name resolving dynamically using assigned numbers (1–7).</p>
            </div>
            
            <div className="border border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/20 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
               <h3 className="font-bold text-teal-800 dark:text-teal-300 mb-2 flex items-center">
                 <span className="bg-teal-600 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs mr-3">2</span> 
                 Exercise 2: Grade Evaluator
               </h3>
               <p className="text-slate-700 dark:text-slate-300 mb-3">Create an intelligence program that verifies and checks grading statistics exclusively using <code className="bg-teal-100 dark:bg-teal-800/50 px-1 rounded font-mono">match</code> routes.</p>
               <div className="bg-white/50 dark:bg-black/20 p-3 rounded font-mono text-sm inline-block">
                 A → Excellent<br/>
                 B → Good<br/>
                 C → Average
               </div>
            </div>
            
            <div className="border border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/20 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
               <h3 className="font-bold text-teal-800 dark:text-teal-300 mb-2 flex items-center">
                 <span className="bg-teal-600 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs mr-3">3</span> 
                 Exercise 3: Full Calculator
               </h3>
               <p className="text-slate-700 dark:text-slate-300">Expand the real-world example to craft a natively functioning mathematical calculator strictly driven via matched conditionals executing for: <code className="bg-teal-100 dark:bg-teal-800/50 px-1 rounded font-mono font-bold text-black dark:text-white">+ - * /</code> values routing.</p>
            </div>
         </div>
      </section>

    </div>
  );
};

export default PythonMatch;