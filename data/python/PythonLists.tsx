import React, { useState } from 'react';
import {
  Code, BookOpen, Star, RefreshCw, Box, MonitorPlay,
  FileCode, Cpu, AlertTriangle, Database, FastForward, CheckCircle2,
  Terminal, Check, Copy, Link, Server, FileText, ChevronRight, Play,
  Globe, ArrowRight, Shield, Layers, Activity, Filter, Zap, LayoutList,
  CheckSquare, Combine, ArrowDown, ListTree, Scissors, MousePointerClick, TrendingUp
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

const PythonLists: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);

  const runDemo = (action: string) => {
    setConsoleOutput([]);
    let output: string[] = [];

    switch (action) {
      case 'create':
        output = [
          ">>> fruits = [\"apple\", \"banana\", \"mango\"]",
          ">>> print(fruits)",
          "['apple', 'banana', 'mango']"
        ];
        break;
      case 'access':
        output = [
          ">>> fruits = [\"apple\", \"banana\", \"mango\"]",
          ">>> print(fruits[0])",
          "apple",
          ">>> print(fruits[-1])",
          "mango"
        ];
        break;
      case 'modify':
        output = [
          ">>> fruits = [\"apple\", \"banana\", \"mango\"]",
          ">>> fruits[1] = \"orange\"",
          ">>> print(fruits)",
          "['apple', 'orange', 'mango']"
        ];
        break;
      case 'add':
        output = [
          ">>> fruits = [\"apple\", \"banana\"]",
          ">>> fruits.append(\"mango\")",
          ">>> print(fruits)",
          "['apple', 'banana', 'mango']"
        ];
        break;
      case 'remove':
        output = [
          ">>> numbers = [10, 20, 30]",
          ">>> numbers.pop(1)",
          ">>> print(numbers)",
          "[10, 30]"
        ];
        break;
      case 'slice':
        output = [
          ">>> numbers = [10, 20, 30, 40, 50]",
          ">>> print(numbers[1:4])",
          "[20, 30, 40]"
        ];
        break;
      case 'sort':
        output = [
          ">>> numbers = [5, 2, 8, 1]",
          ">>> numbers.sort()",
          ">>> print(numbers)",
          "[1, 2, 5, 8]"
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
        <div className="inline-flex items-center justify-center p-4 bg-sky-100 dark:bg-sky-900/30 rounded-2xl mb-6 shadow-sm border border-sky-200 dark:border-sky-800/50">
          <ListTree className="w-10 h-10 text-sky-600 dark:text-sky-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Python Lists
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          A List in Python is a collection data type used to store multiple items in a single variable. Lists are one of the most commonly used data structures.
        </p>
      </header>

      {/* 1. Intro & 2. Creating */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-6">
            <BookOpen className="w-6 h-6 text-sky-500 mr-3" />
            <h2 className="text-2xl font-bold">1. Introduction to Lists</h2>
          </div>
          <p className="mb-4 text-slate-600 dark:text-slate-300">
            Key characteristics of Python lists:
          </p>
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="flex items-center p-3 bg-sky-50 dark:bg-sky-900/10 rounded-lg border border-sky-100 dark:border-sky-800/30">
              <CheckCircle2 className="w-5 h-5 text-sky-500 mr-2" />
              <span className="font-medium text-sm text-sky-900 dark:text-sky-300">Ordered</span>
            </div>
            <div className="flex items-center p-3 bg-sky-50 dark:bg-sky-900/10 rounded-lg border border-sky-100 dark:border-sky-800/30">
              <CheckCircle2 className="w-5 h-5 text-sky-500 mr-2" />
              <span className="font-medium text-sm text-sky-900 dark:text-sky-300">Changeable (Mutable)</span>
            </div>
            <div className="flex items-center p-3 bg-sky-50 dark:bg-sky-900/10 rounded-lg border border-sky-100 dark:border-sky-800/30">
              <CheckCircle2 className="w-5 h-5 text-sky-500 mr-2" />
              <span className="font-medium text-sm text-sky-900 dark:text-sky-300">Allows duplicate values</span>
            </div>
            <div className="flex items-center p-3 bg-sky-50 dark:bg-sky-900/10 rounded-lg border border-sky-100 dark:border-sky-800/30">
              <CheckCircle2 className="w-5 h-5 text-sky-500 mr-2" />
              <span className="font-medium text-sm text-sky-900 dark:text-sky-300">Store diff data types</span>
            </div>
          </div>
          <CodeSnippetBlock 
            title="List declaration"
            codeSnippet={`fruits = ["apple", "banana", "mango"]\nprint(fruits)\n\n# Output: ['apple', 'banana', 'mango']`} 
          />
        </div>

        <div className="bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Code className="w-48 h-48 text-white" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center mb-6">
              <Box className="w-6 h-6 text-purple-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">2. Creating a List</h2>
            </div>
            
            <p className="mb-4 text-slate-300">Lists are created using square brackets <code className="bg-slate-800 px-2 py-0.5 rounded text-purple-300 font-bold">[ ]</code>.</p>
            
            <CodeSnippetBlock 
               title="List of numbers"
               codeSnippet={`numbers = [10, 20, 30, 40]\nprint(numbers)\n\n# Output: [10, 20, 30, 40]`}
            />

            <p className="mb-4 text-slate-300 mt-6">Lists can also contain elements of entirely different data types.</p>

            <CodeSnippetBlock 
               title="Mixed Data Types"
               codeSnippet={`data = ["Issac", 19, True]\nprint(data)\n\n# Output: ['Issac', 19, True]`}
            />
          </div>
        </div>
      </section>

      {/* 3. Accessing & 4. Length */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
         <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
             <div className="flex items-center mb-6">
              <MousePointerClick className="w-6 h-6 text-indigo-500 mr-3" />
              <h2 className="text-2xl font-bold">3. Accessing List Elements</h2>
            </div>
            
            <p className="mb-4 text-slate-600 dark:text-slate-300">List items are accessed using index numbers. <strong className="text-slate-900 dark:text-white">Index starts from 0.</strong></p>
            <CodeSnippetBlock codeSnippet={`fruits = ["apple", "banana", "mango"]\n\nprint(fruits[0]) # apple\nprint(fruits[1]) # banana`} />
            
            <div className="mt-8 border-t border-slate-200 dark:border-slate-700 pt-6">
               <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-200">Negative Indexing</h3>
               <p className="mb-4 text-slate-600 dark:text-slate-300">Python supports reverse searching using negative indices. <code className="bg-slate-100 dark:bg-slate-900 px-1 font-mono rounded">-1</code> represents the last item.</p>
               <CodeSnippetBlock codeSnippet={`print(fruits[-1]) # mango`} />
            </div>
         </div>

         <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col justify-center">
             <div className="flex items-center mb-6">
              <Activity className="w-6 h-6 text-emerald-500 mr-3" />
              <h2 className="text-2xl font-bold">4. List Length</h2>
            </div>
            <p className="mb-6 text-slate-600 dark:text-slate-300">
              To dynamically calculate the number of items stored inside a list, use the builtin <code className="bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded font-mono font-bold text-emerald-600 dark:text-emerald-400">len()</code> function.
            </p>
            <CodeSnippetBlock 
               title="Calculate Size"
               codeSnippet={`numbers = [10, 20, 30, 40]\n\nprint(len(numbers))`}
            />
            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800 text-center font-mono font-bold text-2xl text-emerald-700 dark:text-emerald-400">
               4
            </div>
         </div>
      </section>

      {/* CRUD Ops: 5. Change, 6. Add, 7. Remove */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
            <RefreshCw className="w-8 h-8 text-blue-500 mr-3" />
            Modifying Lists (Mutability)
          </h2>
          <p className="text-slate-600 dark:text-slate-400">Lists are heavily manipulated using these standard operational methods.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
           {/* Change */}
           <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col">
               <h3 className="flex items-center mb-4 text-blue-600 dark:text-blue-400 font-bold text-xl relative z-10">
                 5. Changing Items
               </h3>
               <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 h-10">
                 Overwrite an existing value entirely using its exact positional index mapping.
               </p>
               <CodeSnippetBlock codeSnippet={`fruits = ["apple", "banana", "mango"]\n\nfruits[1] = "orange"\n\nprint(fruits)`} />
               <div className="bg-slate-100 dark:bg-slate-900 mt-auto p-3 rounded font-mono text-xs font-bold border border-slate-200 dark:border-slate-800 text-center">
                  ['apple', 'orange', 'mango']
               </div>
           </div>

           {/* Add */}
           <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col">
               <h3 className="flex items-center mb-4 text-emerald-600 dark:text-emerald-400 font-bold text-xl relative z-10">
                 6. Adding Items
               </h3>
               <div className="text-sm text-slate-600 dark:text-slate-400 mb-4 flex-1">
                  <p className="mb-2"><code className="font-bold bg-slate-100 dark:bg-slate-900 px-1 rounded">append()</code> : Adds to the end.</p>
                  <p><code className="font-bold bg-slate-100 dark:bg-slate-900 px-1 rounded">insert(i, val)</code> : Extends at a specific pos.</p>
               </div>
               <CodeSnippetBlock codeSnippet={`fruits = ["apple", "banana"]\n\nfruits.append("mango")\nfruits.insert(1, "kiwi")`} />
               <div className="bg-slate-100 dark:bg-slate-900 mt-auto p-3 rounded font-mono text-xs font-bold border border-slate-200 dark:border-slate-800 text-center">
                  ['apple', 'kiwi', 'banana', 'mango']
               </div>
           </div>

           {/* Remove */}
           <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col">
               <h3 className="flex items-center mb-4 text-rose-600 dark:text-rose-400 font-bold text-xl relative z-10">
                 7. Removing Items
               </h3>
               <div className="text-sm text-slate-600 dark:text-slate-400 mb-4 flex-1">
                 <p className="mb-2"><code className="font-bold bg-slate-100 dark:bg-slate-900 px-1 rounded">remove(val)</code> : Delete a specific item.</p>
                 <p><code className="font-bold bg-slate-100 dark:bg-slate-900 px-1 rounded">pop(i)</code> : Delete item by index mapping.</p>
               </div>
               <div className="mb-2">
                 <CodeSnippetBlock codeSnippet={`fruits = ["A", "B", "C"]\n\nfruits.remove("B")\nfruits.pop(1)`} />
               </div>
               <div className="bg-slate-100 dark:bg-slate-900 mt-auto p-3 rounded font-mono text-xs font-bold border border-slate-200 dark:border-slate-800 text-center text-rose-600 dark:text-rose-400">
                  ['A']
               </div>
           </div>
        </div>
      </section>

      {/* Interactive Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-lg">
          <div className="bg-slate-100 dark:bg-slate-900/50 p-6 border-b border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center">
              <Play className="w-8 h-8 text-sky-500 mr-3" />
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">List Operations Lab</h2>
                <p className="text-slate-500 text-sm">Test common list manipulation tactics</p>
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
            <div className="p-6 border-r border-slate-200 dark:border-slate-700 space-y-3">
              <h3 className="font-bold text-slate-700 dark:text-slate-300 mb-4">Run Code Snippets:</h3>
              <div className="grid grid-cols-2 gap-3">
                 <button onClick={() => runDemo('create')} className="w-full text-left p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-sky-500 dark:hover:border-sky-400 bg-slate-50 dark:bg-slate-900/50 transition-colors group">
                   <div className="font-bold text-sky-600 dark:text-sky-400 group-hover:text-sky-700 mb-1 text-sm">1. Create</div>
                 </button>
                 <button onClick={() => runDemo('access')} className="w-full text-left p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-400 bg-slate-50 dark:bg-slate-900/50 transition-colors group">
                   <div className="font-bold text-purple-600 dark:text-purple-400 group-hover:text-purple-700 mb-1 text-sm">2. Access Index</div>
                 </button>
                 <button onClick={() => runDemo('modify')} className="w-full text-left p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 bg-slate-50 dark:bg-slate-900/50 transition-colors group">
                   <div className="font-bold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 mb-1 text-sm">3. Modify</div>
                 </button>
                 <button onClick={() => runDemo('add')} className="w-full text-left p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-400 bg-slate-50 dark:bg-slate-900/50 transition-colors group">
                   <div className="font-bold text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-700 mb-1 text-sm">4. Add (append)</div>
                 </button>
                 <button onClick={() => runDemo('remove')} className="w-full text-left p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-rose-500 dark:hover:border-rose-400 bg-slate-50 dark:bg-slate-900/50 transition-colors group">
                   <div className="font-bold text-rose-600 dark:text-rose-400 group-hover:text-rose-700 mb-1 text-sm">5. Remove (pop)</div>
                 </button>
                 <button onClick={() => runDemo('slice')} className="w-full text-left p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-amber-500 dark:hover:border-amber-400 bg-slate-50 dark:bg-slate-900/50 transition-colors group">
                   <div className="font-bold text-amber-600 dark:text-amber-400 group-hover:text-amber-700 mb-1 text-sm">6. Slicing</div>
                 </button>
                 <button onClick={() => runDemo('sort')} className="col-span-2 w-full text-center p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-400 bg-slate-50 dark:bg-slate-900/50 transition-colors group">
                   <div className="font-bold text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-700 mb-1 text-sm">7. Sorting Elements</div>
                 </button>
              </div>
            </div>

            <div className="bg-slate-900 p-6 min-h-[300px] flex flex-col font-mono relative">
              <div className="text-xs font-bold text-slate-500 mb-4 border-b border-slate-800 pb-2 flex items-center">
                <Terminal className="w-4 h-4 mr-2" /> Python Interactive Console
              </div>
              <div className="flex-1 overflow-y-auto whitespace-pre">
                {consoleOutput.length === 0 ? (
                  <div className="mt-20 text-center text-slate-600 animate-pulse">Select an operation to run...</div>
                ) : (
                  consoleOutput.map((line, idx) => (
                    <div key={idx} className={`text-sm mb-1 ${line.startsWith('>>>') ? 'text-blue-400' : 'text-emerald-400 font-bold'}`}>
                      {line}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Looping, 9. Slicing, 10. Sorting, 11. Copying */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
         <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
             <div className="flex items-center mb-6">
              <RefreshCw className="w-6 h-6 text-fuchsia-500 mr-3" />
              <h2 className="text-2xl font-bold">8. Looping Through a List</h2>
            </div>
            <p className="mb-4 text-slate-600 dark:text-slate-300">
              You can iterate through list elements successively using a standard <code className="bg-slate-100 dark:bg-slate-700 px-1 rounded">for</code> loop.
            </p>
            <CodeSnippetBlock codeSnippet={`fruits = ["apple", "banana", "mango"]\n\nfor fruit in fruits:\n    print(fruit)`} />
            <div className="bg-fuchsia-50 dark:bg-fuchsia-900/10 p-3 rounded border border-fuchsia-200 dark:border-fuchsia-800 font-mono text-xs text-fuchsia-700 dark:text-fuchsia-300">
               apple<br/>banana<br/>mango
            </div>
         </div>

         <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
             <div className="flex items-center mb-6">
              <Scissors className="w-6 h-6 text-amber-500 mr-3" />
              <h2 className="text-2xl font-bold">9. List Slicing</h2>
            </div>
            <p className="mb-4 text-slate-600 dark:text-slate-300">
              Slicing allows you to abstract out a range of sequential items. Syntax: <code className="bg-slate-100 dark:bg-slate-700 px-1 rounded font-bold">list[start:end]</code>.
            </p>
            <CodeSnippetBlock codeSnippet={`numbers = [10, 20, 30, 40, 50]\n\n# Get items from index 1 up to (but excluding) 4\nprint(numbers[1:4])`} />
            <div className="bg-amber-50 dark:bg-amber-900/10 p-3 rounded border border-amber-200 dark:border-amber-800 font-mono text-xs font-bold text-amber-700 dark:text-amber-300 text-center">
               [20, 30, 40]
            </div>
         </div>

         <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
             <div className="flex items-center mb-6">
              <LayoutList className="w-6 h-6 text-indigo-500 mr-3" />
              <h2 className="text-2xl font-bold">10. Sorting Lists</h2>
            </div>
            <p className="mb-4 text-slate-600 dark:text-slate-300">
               Python provides built-in functions to auto-arrange variables. Reverse it via parameters.
            </p>
            <CodeSnippetBlock codeSnippet={`numbers = [5, 2, 8, 1]\n\nnumbers.sort()\nprint(numbers) # [1, 2, 5, 8]\n\nnumbers.sort(reverse=True)\nprint(numbers) # [8, 5, 2, 1]`} />
         </div>

         <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
             <div className="flex items-center mb-6">
              <Copy className="w-6 h-6 text-emerald-500 mr-3" />
              <h2 className="text-2xl font-bold">11. Copying a List</h2>
            </div>
            <p className="mb-4 text-slate-600 dark:text-slate-300">
               To forcefully allocate new memory duplicating a list without reference referencing, use the <code className="bg-slate-100 dark:bg-slate-700 px-1 rounded">copy()</code> method.
            </p>
            <CodeSnippetBlock codeSnippet={`list1 = [1, 2, 3]\n\nlist2 = list1.copy()\n\nprint(list2) # [1, 2, 3]`} />
         </div>
      </section>

      {/* 12. Execution Visualization */}
      <section className="max-w-4xl mx-auto mb-16 bg-slate-900 rounded-2xl p-8 border border-slate-800 shadow-xl overflow-hidden relative">
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#38bdf8 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
         <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left md:w-1/3">
               <h3 className="text-2xl font-bold text-white mb-2">12. Execution Visualization</h3>
               <p className="text-slate-400 text-sm">The lifecycle of typical list operations logic flow.</p>
               
               <div className="mt-6 border border-slate-700/50 bg-slate-800/50 p-4 rounded-xl">
                 <div className="font-mono text-center mb-4">
                   <div className="text-slate-300 font-bold bg-slate-950 p-2 rounded tracking-[0.5em]">[10, 20, 30, 40]</div>
                   <div className="text-sky-400 text-xs tracking-[1em] mt-1 ml-3 font-bold">0  1  2  3</div>
                 </div>
               </div>
            </div>
            
            <div className="flex-1 flex flex-col gap-3 w-full font-mono text-sm">
               <div className="bg-slate-800/80 p-3 rounded text-center text-white border border-slate-700 shadow-sm relative group">List Created</div>
               <ArrowDown className="w-4 h-4 text-slate-600 mx-auto" />
               <div className="bg-indigo-900/40 p-3 rounded text-center text-indigo-300 border border-indigo-700/50 shadow-sm">Access Elements</div>
               <ArrowDown className="w-4 h-4 text-slate-600 mx-auto" />
               <div className="bg-purple-900/40 p-3 rounded text-center text-purple-300 border border-purple-700/50 shadow-sm">Modify Items</div>
               <ArrowDown className="w-4 h-4 text-slate-600 mx-auto" />
               <div className="bg-emerald-900/40 p-3 rounded text-center text-emerald-300 border border-emerald-700/50 shadow-sm">Add / Remove Items</div>
               <ArrowDown className="w-4 h-4 text-slate-600 mx-auto" />
               <div className="bg-orange-900/40 p-3 rounded text-center text-orange-300 border border-orange-700/50 shadow-sm">Process Using Loops</div>
            </div>
         </div>
      </section>

      {/* 13. Real World */}
      <section className="max-w-6xl mx-auto mb-16">
         <div className="bg-gradient-to-r from-sky-50 to-indigo-50 dark:from-sky-900/10 dark:to-indigo-900/10 p-8 rounded-2xl shadow-sm border border-sky-100 dark:border-sky-800/30">
            <div className="flex items-center mb-6">
              <TrendingUp className="w-8 h-8 text-sky-500 mr-3" />
              <h2 className="text-2xl font-bold dark:text-sky-100">13. Real-World Example</h2>
            </div>
            <p className="mb-6 text-slate-700 dark:text-slate-300">
              Lists are widely used in data processing and analytics. Here we find analytical results from simulated student marks:
            </p>
            <CodeSnippetBlock 
               title="Evaluating Highest & Min Dataset Points"
               codeSnippet={`marks = [85, 90, 78, 92]\n\nprint("Highest mark:", max(marks))\nprint("Lowest mark:", min(marks))`}
            />
            <div className="bg-sky-100 dark:bg-sky-900/30 p-4 rounded-xl font-mono text-sm text-sky-800 dark:text-sky-300 font-bold border border-sky-200 dark:border-sky-700">
               <div>Highest mark: 92</div>
               <div>Lowest mark: 78</div>
            </div>
         </div>
      </section>

      {/* 14. Mistakes & 15. Dev Tips */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-r from-sky-500 to-indigo-600 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 p-8 opacity-20"><ListTree className="w-48 h-48 text-white" /></div>
          
          <h2 className="text-3xl font-extrabold mb-4 flex items-center relative z-10">
            <Star className="w-8 h-8 mr-3 text-yellow-300 fill-yellow-300" />
            15. Personal Developer Tips
          </h2>
          <p className="text-sky-100 mb-10 font-medium italic relative z-10 text-lg border-b border-sky-400/30 pb-4 inline-block">From a Developer with 15+ years of Python experience:</p>
          
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors">
              <h3 className="font-bold text-xl mb-4 flex items-center"><ListTree className="text-yellow-300 mr-2" /> Tip 1 — Ordered Data</h3>
              <p className="text-sm text-sky-50 mb-4">Lists are inherently ideal when data needs to maintain timeline or operational order. <br/><br/>Examples: Student records, Product lists, Transaction history.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors">
              <h3 className="font-bold text-xl mb-4 flex items-center"><Zap className="text-amber-300 mr-2" /> Tip 2 — Comprehensions</h3>
              <p className="text-sm text-sky-50 mb-4">Python provides a powerful one-liner way to create lists extremely quickly dynamically.</p>
              <div className="bg-black/30 p-2 rounded-lg font-mono text-xs overflow-x-auto text-amber-200">
                 [x*2 for x in range(5)]
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors">
              <h3 className="font-bold text-xl mb-4 flex items-center"><Server className="text-emerald-300 mr-2" /> Tip 3 — Memory Warning</h3>
              <p className="text-sm text-sky-50">Avoid deploying extremely large generated Lists into runtime Memory. For 100k+ large datasets, consider using <strong className="text-emerald-300">Generators</strong> or <strong className="text-emerald-300">Iterators</strong> to massively improve scalability and hardware performance.</p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-8 border-b border-slate-200 dark:border-slate-700 pb-4 flex items-center">
          <AlertTriangle className="w-8 h-8 text-rose-500 mr-3" />
          14. Common Beginner Mistakes
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-lg mb-4 flex items-center text-slate-800 dark:text-slate-200">
              <span className="bg-rose-100 text-rose-600 px-2 py-1 rounded text-xs mr-3">Mistake 1</span> 
              Using Parentheses Instead of Brackets
            </h4>
            <div className="space-y-4 font-mono text-sm">
              <div className="bg-rose-50 dark:bg-rose-900/20 p-4 rounded border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300">
                <span className="font-bold uppercase text-xs block mb-2">Wrong ❌ (This creates a Tuple)</span>
                numbers = (1, 2, 3)
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300">
                <span className="font-bold uppercase text-xs block mb-2">Correct ✔</span>
                numbers = [1, 2, 3]
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-lg mb-4 flex items-center text-slate-800 dark:text-slate-200">
              <span className="bg-rose-100 text-rose-600 px-2 py-1 rounded text-xs mr-3">Mistake 2</span> 
              Index Out of Range Errors
            </h4>
            <div className="space-y-4 font-mono text-sm flex-1 flex flex-col justify-center">
              <div className="bg-rose-50 dark:bg-rose-900/20 p-4 rounded border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300">
                <span className="font-bold uppercase text-xs block mb-2">Wrong ❌</span>
                numbers = [10, 20, 30]<br/>
                print(numbers[5])
              </div>
              <p className="text-slate-500 text-sm font-sans mt-2">Error occurs and halts crashes your script entirely because the positional memory index (5) simply does not exist assigned to the List.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 16. Practice Exercises */}
      <section className="max-w-4xl mx-auto mb-16 text-center">
         <h2 className="text-3xl font-bold mb-6 flex items-center justify-center">
            <CheckSquare className="w-8 h-8 text-sky-500 mr-3" />
            16. Practice Exercises
         </h2>
         <p className="text-slate-600 dark:text-slate-400 mb-8">Ready to test your knowledge? Try these hands-on challenges.</p>
         
         <div className="space-y-4 text-left">
            <div className="border border-sky-200 dark:border-sky-800 bg-sky-50 dark:bg-sky-900/20 rounded-xl p-6 shadow-sm">
               <h3 className="font-bold text-sky-800 dark:text-sky-300 mb-2 flex items-center">
                 <span className="bg-sky-600 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs mr-3">1</span> 
                 Exercise 1
               </h3>
               <p className="text-slate-700 dark:text-slate-300">Create a List containing 5 numbers and strictly print them all to the terminal output sequentially.</p>
            </div>
            
            <div className="border border-sky-200 dark:border-sky-800 bg-sky-50 dark:bg-sky-900/20 rounded-xl p-6 shadow-sm">
               <h3 className="font-bold text-sky-800 dark:text-sky-300 mb-2 flex items-center">
                 <span className="bg-sky-600 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs mr-3">2</span> 
                 Exercise 2
               </h3>
               <p className="text-slate-700 dark:text-slate-300">Write a program code to add a new item to an existing List dynamically.</p>
            </div>
            
            <div className="border border-sky-200 dark:border-sky-800 bg-sky-50 dark:bg-sky-900/20 rounded-xl p-6 shadow-sm">
               <h3 className="font-bold text-sky-800 dark:text-sky-300 mb-2 flex items-center">
                 <span className="bg-sky-600 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs mr-3">3</span> 
                 Exercise 3
               </h3>
               <p className="text-slate-700 dark:text-slate-300">Write a logic program relying on standard tools or iteration loops to evaluate and find the largest overall number sitting within a mixed list.</p>
            </div>
         </div>
      </section>

    </div>
  );
};

export default PythonLists;