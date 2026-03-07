import React, { useState } from 'react';
import {
  Users, Check, Copy, Terminal,
  BookOpen, Code, Layers,
  CheckCircle2, AlertTriangle, Star, Lightbulb, UserPlus,
  GitBranch, Share2, Box, ArrowRight, TreeDeciduous,
  RefreshCw, Play, Shield, Target, Combine, Globe,
  Cpu, BarChart, Database, Lock, Settings, MonitorPlay,
  Clock, Calendar, CpuIcon, ListTree, Zap, ArrowDown, Activity, FastForward, Repeat
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

const PythonIterators: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);

  const runDemo = (action: string) => {
    setConsoleOutput([]);
    let output: string[] = [];

    switch (action) {
      case 'loop':
        output = [
          ">>> numbers = [1, 2, 3, 4]",
          ">>> for num in numbers:",
          ">>>     print(num)",
          "1",
          "2",
          "3",
          "4"
        ];
        break;
      case 'protocol':
        output = [
          ">>> mytuple = (\"apple\", \"banana\", \"cherry\")",
          ">>> myiter = iter(mytuple)",
          ">>> print(next(myiter))",
          "apple",
          ">>> print(next(myiter))",
          "banana",
          ">>> print(next(myiter))",
          "cherry"
        ];
        break;
      case 'stop':
        output = [
          ">>> mylist = [1, 2]",
          ">>> it = iter(mylist)",
          ">>> print(next(it))",
          "1",
          ">>> print(next(it))",
          "2",
          ">>> print(next(it))",
          "StopIteration: "
        ];
        break;
      case 'string':
        output = [
          ">>> text = \"Python\"",
          ">>> it = iter(text)",
          ">>> print(next(it))",
          "P",
          ">>> print(next(it))",
          "y",
          ">>> print(next(it))",
          "t"
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
      
      {/* 1. Header Area */}
      <header className="max-w-4xl mx-auto text-center mb-16 pt-8">
        <div className="inline-flex items-center justify-center p-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl mb-6 shadow-sm border border-indigo-200 dark:border-indigo-800/50">
          <Repeat className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Python Iterators
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          An iterator allows you to traverse through a collection of elements one at a time, letting Python process elements without loading everything at once.
        </p>
      </header>

      {/* 1. Intro & 2. Iteration */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-4">
            <ListTree className="w-6 h-6 text-indigo-500 mr-3" />
            <h2 className="text-2xl font-bold">1. Introduction to Iterators</h2>
          </div>
          <p className="mb-4 text-slate-600 dark:text-slate-300">
            Iterators are commonly used with collections like <strong className="text-slate-900 dark:text-white">Lists, Tuples, Dictionaries, Sets, and Strings</strong>.
          </p>
          <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl border-l-4 border-indigo-400 mb-6">
             <p className="font-medium text-indigo-900 dark:text-indigo-200 text-sm">
               In simple terms: An iterator allows Python to access elements one by one without loading everything at once.
             </p>
          </div>
          <h4 className="font-bold mb-2 text-slate-800 dark:text-slate-200">Example Collection</h4>
          <CodeSnippetBlock codeSnippet={`numbers = [10, 20, 30, 40]`} />
          <p className="text-sm text-slate-500 dark:text-slate-400 italic">
            Python can iterate through these values one by one.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-4">
            <RefreshCw className="w-6 h-6 text-emerald-500 mr-3" />
            <h2 className="text-2xl font-bold">2. What is Iteration?</h2>
          </div>
          <p className="mb-6 text-slate-600 dark:text-slate-300">
            Iteration means repeating a process for each item in a sequence.
          </p>

          <CodeSnippetBlock 
            title="Iteration Loop Example"
            codeSnippet={`numbers = [1, 2, 3, 4]\n\nfor num in numbers:\n    print(num)`} 
          />
          <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg font-mono text-sm border border-slate-200 dark:border-slate-700">
            <div className="text-slate-500 mb-2 text-xs font-bold uppercase tracking-wider">Output:</div>
            <div className="text-emerald-600 dark:text-emerald-400">1<br/>2<br/>3<br/>4</div>
          </div>
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-400 font-medium">
            Here the <code className="bg-slate-100 dark:bg-slate-700 px-1 rounded text-slate-800 dark:text-slate-200">for</code> loop automatically uses an iterator behind the scenes.
          </p>
        </div>
      </section>

      {/* 3. Protocol & 4. StopIteration */}
      <section className="max-w-6xl mx-auto mb-16 grid md:grid-cols-2 gap-8">
        <div className="bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 left-0 p-8 opacity-5">
            <Code className="w-48 h-48 text-white" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center mb-6">
               <Settings className="w-6 h-6 text-blue-400 mr-3" />
               <h2 className="text-2xl font-bold text-white">3. Iterator Protocol</h2>
            </div>
            <p className="text-slate-300 mb-6 text-sm">
              For an object to be an iterator, it must implement two special methods:
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-center">
               <div className="bg-blue-900/40 border border-blue-500/30 rounded-xl p-4">
                  <div className="font-mono text-blue-300 font-bold mb-2">__iter__()</div>
                  <div className="text-slate-400 text-xs">Returns the iterator object</div>
               </div>
               <div className="bg-emerald-900/40 border border-emerald-500/30 rounded-xl p-4">
                  <div className="font-mono text-emerald-300 font-bold mb-2">__next__()</div>
                  <div className="text-slate-400 text-xs">Returns the next value</div>
               </div>
            </div>
            <CodeSnippetBlock 
              title="Manual Iteration using iter() and next()"
              codeSnippet={`mytuple = ("apple", "banana", "cherry")\n\nmyiter = iter(mytuple)\n\nprint(next(myiter)) # apple\nprint(next(myiter)) # banana\nprint(next(myiter)) # cherry`}
            />
          </div>
        </div>

        <div className="bg-rose-50 dark:bg-rose-900/10 p-8 rounded-2xl shadow-sm border border-rose-200 dark:border-rose-800/30 flex flex-col justify-center">
            <div className="flex items-center mb-6">
              <AlertTriangle className="w-8 h-8 text-rose-500 mr-3" />
              <h2 className="text-2xl font-bold dark:text-rose-100">4. StopIteration</h2>
            </div>
            <p className="mb-6 text-rose-900 dark:text-rose-200">
              When there are no more elements, Python raises a <code className="font-bold bg-rose-100 dark:bg-rose-900/40 px-1 rounded">StopIteration</code> error to indicate that the iterator has reached the end.
            </p>
            <CodeSnippetBlock 
              codeSnippet={`mylist = [1, 2]\n\nit = iter(mylist)\n\nprint(next(it)) # 1\nprint(next(it)) # 2\nprint(next(it)) # Error`}
            />
            <div className="bg-rose-100 dark:bg-rose-900/40 p-4 rounded-lg font-mono text-sm border border-rose-200 dark:border-rose-800 flex flex-col">
              <span className="text-emerald-700 dark:text-emerald-400">1</span>
              <span className="text-emerald-700 dark:text-emerald-400">2</span>
              <span className="text-rose-600 dark:text-rose-400 font-bold mt-1">StopIteration</span>
            </div>
        </div>
      </section>

      {/* 5. Custom Iterator & 6. Flow */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-6">
            <Box className="w-8 h-8 text-purple-500 mr-3" />
            <h2 className="text-2xl font-bold">5. Creating a Custom Iterator</h2>
          </div>
          <p className="mb-6 text-slate-600 dark:text-slate-300">
            You can create your own iterator using a class by implementing the <code className="font-mono bg-slate-100 dark:bg-slate-700 px-1 rounded">__iter__()</code> and <code className="font-mono bg-slate-100 dark:bg-slate-700 px-1 rounded">__next__()</code> functions.
          </p>
          <CodeSnippetBlock 
             title="Custom Class Iterator"
             codeSnippet={`class MyNumbers:\n    def __iter__(self):\n        self.num = 1\n        return self\n    \n    def __next__(self):\n        if self.num <= 5:\n            x = self.num\n            self.num += 1\n            return x\n        else:\n            raise StopIteration\n\nobj = MyNumbers()\nmyiter = iter(obj)\n\nfor i in myiter:\n    print(i)`}
          />
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl border border-purple-100 dark:border-purple-800">
             <div className="font-bold text-purple-800 dark:text-purple-300 mb-2">Explanation:</div>
             <ul className="text-sm text-purple-700 dark:text-purple-200 space-y-2">
               <li><code className="font-mono font-bold">__iter__()</code> initializes the iterator</li>
               <li><code className="font-mono font-bold">__next__()</code> returns the next value, and raises StopIteration to end the loop after 5.</li>
             </ul>
          </div>
        </div>

        <div className="lg:col-span-5 bg-amber-50 dark:bg-amber-900/10 p-8 rounded-2xl shadow-sm border border-amber-200 dark:border-amber-800/30 flex flex-col items-center">
            <div className="flex items-center mb-6 self-start">
              <Activity className="w-6 h-6 text-amber-500 mr-3" />
              <h2 className="text-2xl font-bold text-amber-900 dark:text-amber-100">6. Execution Flow</h2>
            </div>

            <div className="flex flex-col items-center py-4 w-full">
               <div className="bg-white dark:bg-slate-800 border-2 border-amber-300 dark:border-amber-700 p-3 rounded-lg w-full max-w-[220px] text-center font-bold text-slate-700 dark:text-slate-200 shadow-sm z-10">
                  Iterable Object <span className="text-xs block font-normal text-slate-500 mt-1">[10, 20, 30]</span>
               </div>
               
               <div className="flex flex-col items-center my-2 text-amber-500 py-2">
                 <ArrowDown className="w-5 h-5 mb-1" />
                 <span className="font-mono font-bold text-xs bg-amber-100 dark:bg-amber-900/50 px-2 rounded">iter()</span>
                 <ArrowDown className="w-5 h-5 mt-1" />
               </div>
               
               <div className="bg-amber-500 p-3 rounded-lg w-full max-w-[220px] text-center font-bold text-white shadow-sm z-10">
                  Iterator Created
               </div>
               
               <div className="flex flex-col items-center my-2 text-amber-500 py-2">
                 <ArrowDown className="w-5 h-5 mb-1" />
                 <span className="font-mono font-bold text-xs bg-amber-100 dark:bg-amber-900/50 px-2 rounded">next()</span>
                 <ArrowDown className="w-5 h-5 mt-1" />
               </div>
               
               <div className="bg-emerald-500 p-3 rounded-lg w-full max-w-[220px] text-center font-bold text-white shadow-sm z-10 flex flex-col">
                  <span>Return Next Value</span>
                  <div className="text-xs bg-black/20 mt-2 p-1 rounded font-mono">
                    10 &rarr; 20 &rarr; 30
                  </div>
               </div>
            </div>
        </div>
      </section>

      {/* Interactive Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-lg">
          <div className="bg-slate-100 dark:bg-slate-900/50 p-6 border-b border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center">
              <Play className="w-8 h-8 text-blue-500 mr-3" />
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Python Lab</h2>
                <p className="text-slate-500 text-sm">Test iterators in real-time</p>
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
              <button onClick={() => runDemo('loop')} className="w-full text-left p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-400 bg-slate-50 dark:bg-slate-900/50 transition-colors group">
                <div className="font-bold text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 mb-1">1. Automatic Iteration (Loop)</div>
                <div className="text-xs text-slate-500">Run a standard "for in" loop.</div>
              </button>
              <button onClick={() => runDemo('protocol')} className="w-full text-left p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-400 bg-slate-50 dark:bg-slate-900/50 transition-colors group">
                <div className="font-bold text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 mb-1">2. Iterator Protocol</div>
                <div className="text-xs text-slate-500">Manual calls to iter() and next()</div>
              </button>
              <button onClick={() => runDemo('stop')} className="w-full text-left p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-rose-500 dark:hover:border-rose-400 bg-slate-50 dark:bg-slate-900/50 transition-colors group">
                <div className="font-bold text-rose-600 dark:text-rose-400 group-hover:text-rose-700 dark:group-hover:text-rose-300 mb-1">3. StopIteration Exception</div>
                <div className="text-xs text-slate-500">See what happens when an iterator ends.</div>
              </button>
              <button onClick={() => runDemo('string')} className="w-full text-left p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 bg-slate-50 dark:bg-slate-900/50 transition-colors group">
                <div className="font-bold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 mb-1">4. String Iterator</div>
                <div className="text-xs text-slate-500">Iterate over the characters of a string.</div>
              </button>
            </div>

            <div className="bg-slate-900 p-6 min-h-[300px] flex flex-col font-mono relative">
              <div className="text-xs font-bold text-slate-500 mb-4 border-b border-slate-800 pb-2 flex items-center">
                <Terminal className="w-4 h-4 mr-2" /> Python Interactive Console
              </div>
              <div className="flex-1 overflow-y-auto">
                {consoleOutput.length === 0 ? (
                  <div className="mt-20 text-center text-slate-600 animate-pulse">Select an example to run...</div>
                ) : (
                  consoleOutput.map((line, idx) => (
                    <div key={idx} className={`text-sm mb-1 ${line.startsWith('>>>') ? 'text-blue-400' : 'text-emerald-400 font-bold'} ${line.startsWith('StopIteration') ? 'text-rose-400' : ''}`}>
                      {line}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Iterable vs Iterator & 8. Iterating String */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
           <div className="flex items-center mb-6">
            <Combine className="w-6 h-6 text-orange-500 mr-3" />
            <h2 className="text-2xl font-bold">7. Iterable vs Iterator</h2>
          </div>
          <p className="mb-6 text-slate-600 dark:text-slate-300">
            Many beginners confuse iterables and iterators.
          </p>
          
          <table className="w-full mb-6 border-collapse">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-900/50">
                <th className="p-3 text-left border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-bold">Iterable</th>
                <th className="p-3 text-left border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-bold">Iterator</th>
              </tr>
            </thead>
            <tbody className="text-sm">
               <tr>
                 <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">A collection of items</td>
                 <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">Object used to iterate</td>
               </tr>
               <tr className="bg-slate-50 dark:bg-slate-800/50">
                 <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">Examples: list, tuple</td>
                 <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">Created using <code className="bg-slate-200 dark:bg-slate-700 px-1 rounded">iter()</code></td>
               </tr>
               <tr>
                 <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">Can produce an iterator</td>
                 <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">Returns next element</td>
               </tr>
            </tbody>
          </table>

          <CodeSnippetBlock codeSnippet={`mylist = [1,2,3]\n\niterator = iter(mylist)`} />
          <div className="flex gap-4 font-mono text-sm mt-4">
             <div className="flex-1 bg-slate-100 dark:bg-slate-900 p-3 rounded text-center border border-slate-200 dark:border-slate-700">
                <span className="text-indigo-600 dark:text-indigo-400 font-bold">mylist</span><br/>&darr;<br/>Iterable
             </div>
             <div className="flex-1 bg-slate-100 dark:bg-slate-900 p-3 rounded text-center border border-slate-200 dark:border-slate-700">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">iterator</span><br/>&darr;<br/>Iterator
             </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
           <div className="flex items-center mb-6">
            <CpuIcon className="w-6 h-6 text-teal-500 mr-3" />
            <h2 className="text-2xl font-bold">8. Iterating Through a String</h2>
          </div>
          <p className="mb-6 text-slate-600 dark:text-slate-300">
            Strings are also iterable. You can get an iterator from a string and step through its characters.
          </p>
          <CodeSnippetBlock codeSnippet={`text = "Python"\n\nit = iter(text)\n\nprint(next(it))\nprint(next(it))\nprint(next(it))`} />
          <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-xl border-l-4 border-teal-500">
             <div className="text-xs font-bold text-teal-800 dark:text-teal-400 uppercase tracking-wider mb-2">Output</div>
             <div className="font-mono text-sm text-teal-900 dark:text-teal-200 flex flex-col space-y-1">
                <span>P</span>
                <span>y</span>
                <span>t</span>
             </div>
          </div>
        </div>
      </section>

      {/* 9. Real World & 10. Advantages */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
           <div className="flex items-center mb-6">
            <Globe className="w-6 h-6 text-blue-500 mr-3" />
            <h2 className="text-2xl font-bold">9. Real-World Example</h2>
          </div>
          <p className="mb-6 text-slate-600 dark:text-slate-300">
            Example: reading data one line at a time. Iterators help process large datasets efficiently without exhausting memory limits.
          </p>
          <CodeSnippetBlock codeSnippet={`numbers = [100, 200, 300, 400]\n\nit = iter(numbers)\n\nfor value in it:\n    print("Processing:", value)`} />
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800">
             <div className="text-xs font-bold text-blue-800 dark:text-blue-400 uppercase tracking-wider mb-2">Output</div>
             <div className="font-mono text-sm text-blue-900 dark:text-blue-200 space-y-1">
                <div>Processing: 100</div>
                <div>Processing: 200</div>
                <div>Processing: 300</div>
                <div>Processing: 400</div>
             </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-8 rounded-2xl shadow-sm border border-emerald-100 dark:border-emerald-800/30">
          <div className="flex items-center mb-6">
            <Zap className="w-8 h-8 text-emerald-500 mr-3" />
            <h2 className="text-2xl font-bold dark:text-emerald-100">10. Advantages of Iterators</h2>
          </div>
          
          <div className="space-y-3 mb-8">
             <div className="flex items-center bg-white dark:bg-slate-800 p-3 rounded-lg shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3" />
                <span className="font-medium text-slate-800 dark:text-slate-200">Memory efficient</span>
             </div>
             <div className="flex items-center bg-white dark:bg-slate-800 p-3 rounded-lg shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3" />
                <span className="font-medium text-slate-800 dark:text-slate-200">Used for large datasets</span>
             </div>
             <div className="flex items-center bg-white dark:bg-slate-800 p-3 rounded-lg shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3" />
                <span className="font-medium text-slate-800 dark:text-slate-200">Lazy evaluation (values generated when needed)</span>
             </div>
             <div className="flex items-center bg-white dark:bg-slate-800 p-3 rounded-lg shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3" />
                <span className="font-medium text-slate-800 dark:text-slate-200">Useful in streaming data</span>
             </div>
          </div>

          <h3 className="font-bold mb-3 text-emerald-900 dark:text-emerald-200">Iterators are widely used in:</h3>
          <div className="grid grid-cols-2 gap-3 text-sm font-medium">
             <div className="bg-emerald-100 dark:bg-emerald-800/50 p-2 rounded text-emerald-800 dark:text-emerald-200 text-center">Data science</div>
             <div className="bg-emerald-100 dark:bg-emerald-800/50 p-2 rounded text-emerald-800 dark:text-emerald-200 text-center">File processing</div>
             <div className="bg-emerald-100 dark:bg-emerald-800/50 p-2 rounded text-emerald-800 dark:text-emerald-200 text-center">Machine learning pipelines</div>
             <div className="bg-emerald-100 dark:bg-emerald-800/50 p-2 rounded text-emerald-800 dark:text-emerald-200 text-center">Large data processing</div>
          </div>
        </div>
      </section>

      {/* 11. Mistakes & 12. Dev Advice */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
          <h2 className="text-3xl font-extrabold mb-4 flex items-center relative z-10">
            <Star className="w-8 h-8 mr-3 text-yellow-300" />
            12. Personal Developer Tips
          </h2>
          <p className="text-indigo-100 mb-8 font-medium italic relative z-10">From a Developer with 15+ years of Python experience:</p>
          
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
               <h3 className="font-bold text-xl mb-3 flex items-center"><Database className="text-emerald-300 mr-2" /> Tip 1 — Large Data</h3>
               <p className="text-sm text-indigo-100 mb-4">
                 Instead of loading entire data into memory, use iterators to process data gradually.
               </p>
               <div className="bg-black/30 p-3 rounded-lg text-sm text-emerald-200 font-mono space-y-1">
                 <div>&rarr; File Reading</div>
                 <div>&rarr; Database Records</div>
                 <div>&rarr; Data Streams</div>
               </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
               <h3 className="font-bold text-xl mb-3 flex items-center"><FastForward className="text-yellow-300 mr-2" /> Tip 2 — Combine</h3>
               <p className="text-sm text-indigo-100 mb-4">
                 Generators make iterator creation easier. They are a simpler way to build custom iterators.
               </p>
               <div className="bg-black/30 p-3 rounded-lg text-xs text-white font-mono space-y-1 overflow-x-auto">
{`def count():
    for i in range(5):
        yield i`}
               </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
               <h3 className="font-bold text-xl mb-3 flex items-center"><Repeat className="text-rose-300 mr-2" /> Tip 3 — 'for' Loops</h3>
               <p className="text-sm text-indigo-100 mb-4">
                 Remember: <code className="bg-black/30 px-1 rounded">for</code> loops use Iterators behind the scenes! When you write <code className="bg-black/30 px-1 rounded">for item in data:</code>
               </p>
               <div className="bg-black/30 p-3 rounded-lg text-xs text-rose-200 font-mono">
                 Python automatically calls <strong className="text-white">iter()</strong> and <strong className="text-white">next()</strong> invisibly!
               </div>
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
              Calling next() on Non-Iterator
            </h4>
            <div className="space-y-4 font-mono text-sm">
              <div className="bg-rose-50 dark:bg-rose-900/20 p-4 rounded border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300">
                <span className="font-bold uppercase text-xs block mb-2">Wrong ❌</span>
                mylist = [1,2,3]<br/>next(mylist)
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300">
                <span className="font-bold uppercase text-xs block mb-2">Correct ✔</span>
                it = iter(mylist)<br/>next(it)
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-lg mb-4 flex items-center text-slate-800 dark:text-slate-200">
              <span className="bg-rose-100 text-rose-600 px-2 py-1 rounded text-xs mr-3">Mistake 2</span> 
              Forgetting StopIteration
            </h4>
            <div className="space-y-4 font-mono text-sm">
              <div className="bg-rose-50 dark:bg-rose-900/20 p-4 rounded border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300">
                <span className="font-bold uppercase text-xs block mb-2">Wrong ❌</span>
                def __next__(self):<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;return self.num
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300">
                <span className="font-bold uppercase text-xs block mb-2">Correct ✔ (Custom iterators must raise it)</span>
                if condition:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;return value<br/>
                else:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;raise StopIteration
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. Practice Exercises */}
      <section className="max-w-4xl mx-auto mb-16 text-center">
         <h2 className="text-3xl font-bold mb-6 flex items-center justify-center">
            <Layers className="w-8 h-8 text-indigo-500 mr-3" />
            13. Practice Exercises
         </h2>
         <p className="text-slate-600 dark:text-slate-400 mb-8">Ready to test your knowledge? Try these hands-on challenges.</p>
         
         <div className="space-y-4 text-left">
            <div className="border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-6 shadow-sm">
               <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2 flex items-center">
                 <span className="bg-indigo-600 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs mr-3">1</span> 
                 Exercise 1
               </h3>
               <p className="text-slate-700 dark:text-slate-300">Create a list <code className="font-mono bg-indigo-100 dark:bg-indigo-900/50 px-1 rounded">[10, 20, 30, 40]</code> and iterate using <code className="font-mono bg-indigo-100 dark:bg-indigo-900/50 px-1 rounded">next()</code>.</p>
            </div>
            
            <div className="border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-6 shadow-sm">
               <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2 flex items-center">
                 <span className="bg-indigo-600 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs mr-3">2</span> 
                 Exercise 2
               </h3>
               <p className="text-slate-700 dark:text-slate-300">Create a custom iterator that prints numbers from 1 to 10.</p>
            </div>
            
            <div className="border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-6 shadow-sm">
               <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2 flex items-center">
                 <span className="bg-indigo-600 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs mr-3">3</span> 
                 Exercise 3
               </h3>
               <p className="text-slate-700 dark:text-slate-300">Create an iterator that prints each character of a string.</p>
            </div>
         </div>
      </section>

    </div>
  );
};

export default PythonIterators;