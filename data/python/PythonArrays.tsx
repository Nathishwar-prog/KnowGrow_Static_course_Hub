import React, { useState } from 'react';
import { 
  List, Plus, Trash2, Search, ArrowRight, Check, Copy, Terminal, 
  Grid, RefreshCw, AlertTriangle, Star, CheckCircle2, XCircle, 
  Lightbulb, BookOpen, Code, Cpu, Target, ArrowDownToLine, Layers
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

const PythonArrays: React.FC = () => {
  const [numbers, setNumbers] = useState([10, 20, 30, 40]);
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [newItem, setNewItem] = useState("50");

  const runDemo = (action: string) => {
    setConsoleOutput([]);
    let codeStr = '';
    let newNumbers = [...numbers];
    const numValue = parseInt(newItem) || 0;

    switch (action) {
      case 'append':
        newNumbers.push(numValue);
        setNumbers(newNumbers);
        codeStr = `>>> numbers.append(${numValue})\n>>> print(numbers)\n[${newNumbers.join(", ")}]`;
        break;
      case 'remove':
        if (newNumbers.length > 0) {
            const valToRemove = parseInt(newItem);
            const index = newNumbers.indexOf(valToRemove);
            if(index !== -1) {
                newNumbers.splice(index, 1);
                setNumbers(newNumbers);
                codeStr = `>>> numbers.remove(${valToRemove})\n>>> print(numbers)\n[${newNumbers.join(", ")}]`;
            } else {
                 codeStr = `>>> numbers.remove(${valToRemove})\nValueError: list.remove(x): x not in list`;
            }
        }
        break;
      case 'sort':
        newNumbers.sort((a,b) => a-b);
        setNumbers(newNumbers);
        codeStr = `>>> numbers.sort()\n>>> print(numbers)\n[${newNumbers.join(", ")}]`;
        break;
      case 'length':
        codeStr = `>>> print(len(numbers))\n${numbers.length}`;
        break;
      case 'reset':
        setNumbers([10, 20, 30, 40]);
        codeStr = `>>> numbers = [10, 20, 30, 40]`;
        break;
      default:
        return;
    }

    setConsoleOutput(codeStr.split('\n'));
  };

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-900 min-h-screen font-sans text-slate-800 dark:text-slate-200">
      
      {/* 1. Header Area */}
      <header className="max-w-4xl mx-auto text-center mb-16 pt-8">
        <div className="inline-flex items-center justify-center p-4 bg-blue-100 dark:bg-blue-900/30 rounded-2xl mb-6 shadow-sm border border-blue-200 dark:border-blue-800/50">
          <List className="w-10 h-10 text-blue-600 dark:text-blue-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Python Arrays & Lists
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Store multiple values efficiently. Uncover the power of Lists, the Array Module, and best practices from seasoned developers.
        </p>
      </header>

      {/* 2. What is an Array? & Python context */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 text-blue-500 mr-3" />
            <h2 className="text-2xl font-bold">1️⃣ What is an Array?</h2>
          </div>
          <p className="mb-4 text-slate-600 dark:text-slate-300">
            An array is a data structure used to store multiple values in a single variable. Instead of creating many variables, we can store them together.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-rose-50 dark:bg-rose-900/20 p-4 rounded-xl border border-rose-100 dark:border-rose-800">
              <span className="text-xs font-bold text-rose-500 uppercase block mb-2">Separate Variables</span>
              <code className="text-sm font-mono text-rose-700 dark:text-rose-300 block">a = 10<br/>b = 20<br/>c = 30<br/>d = 40</code>
            </div>
            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800">
              <span className="text-xs font-bold text-emerald-500 uppercase block mb-2">Single Array</span>
              <code className="text-sm font-mono text-emerald-700 dark:text-emerald-300 block"><br/>[10, 20, 30, 40]</code>
            </div>
          </div>
          <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border-l-4 border-yellow-400">
            <h4 className="font-bold flex items-center text-yellow-800 dark:text-yellow-400 mb-1">
              <span className="mr-2">📌</span> Definition
            </h4>
            <p className="text-sm text-yellow-800 dark:text-yellow-300">
              An array is a collection of elements of the same data type stored in contiguous memory locations and accessed using an index.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-4">
            <Code className="w-6 h-6 text-purple-500 mr-3" />
            <h2 className="text-2xl font-bold">2️⃣ Arrays in Python</h2>
          </div>
          <p className="mb-4 text-slate-600 dark:text-slate-300">
            Unlike some languages like C or Java, Python mainly uses <strong className="text-slate-900 dark:text-white">lists</strong> instead of arrays. However, Python also provides a true array module.
          </p>
          <ul className="mb-6 space-y-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
            <li className="flex items-center">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
              <span><strong>1️⃣ Using Lists</strong> (most common)</span>
            </li>
            <li className="flex items-center">
              <Cpu className="w-5 h-5 text-blue-500 mr-3 shrink-0" />
              <span><strong>2️⃣ Using Array Module</strong> (less common)</span>
            </li>
          </ul>
          
          <h3 className="text-xl font-bold mb-3 mt-6">3️⃣ Python List <span className="text-slate-500 text-sm font-normal uppercase">(Array Alternative)</span></h3>
          <p className="mb-4 text-slate-600 dark:text-slate-300">
            Lists behave like arrays but are more flexible.
          </p>
          <CodeSnippetBlock 
            title="Example"
            codeSnippet={`numbers = [10, 20, 30, 40, 50]\nprint(numbers)\n\n# Output\n# [10, 20, 30, 40, 50]`} 
          />
        </div>
      </section>

      {/* 3. Interactive Lab Area */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center">
            <Terminal className="w-8 h-8 mr-3 text-blue-500" />
            Interactive List Lab
          </h2>
          <button
            onClick={() => runDemo('reset')}
            className="flex items-center px-4 py-2 bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 rounded-lg text-sm font-bold uppercase tracking-wider hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shadow-sm"
          >
            <RefreshCw className="w-4 h-4 mr-2" /> Reset
          </button>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-6 pb-4 border-b border-slate-100 dark:border-slate-700">
                Manage List Elements
              </h3>

              {/* Memory / List state UI */}
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-xl font-mono text-sm mb-6 border border-slate-200 dark:border-slate-700 shadow-inner overflow-x-auto">
                <span className="text-purple-600 dark:text-purple-400">numbers</span> = [
                <div className="flex flex-wrap gap-2 mt-2 mb-2">
                  {numbers.map((num, idx) => (
                    <span key={idx} className="bg-white dark:bg-slate-800 px-3 py-1.5 rounded-md border border-slate-300 dark:border-slate-600 text-emerald-600 dark:text-emerald-400 font-bold shadow-sm animate-fade-in relative group">
                      {num}{idx < numbers.length - 1 ? ',' : ''}
                      <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-[10px] text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">idx:{idx}</span>
                    </span>
                  ))}
                </div>
                ];
              </div>

              <div className="mb-6">
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Item Value (e.g. 50)</label>
                <div className="flex gap-3">
                  <input
                    type="number"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none font-mono text-lg shadow-inner"
                  />
                </div>
              </div>

              <h3 className="font-bold text-slate-900 dark:text-white mb-4">Mutations</h3>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => runDemo('append')}
                  className="flex items-center justify-center p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:border-emerald-300 transition-all text-sm font-bold shadow-sm"
                >
                  <Plus className="w-5 h-5 mr-2 text-emerald-500" /> append()
                </button>
                <button
                  onClick={() => runDemo('remove')}
                  className="flex items-center justify-center p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800 hover:bg-rose-50 dark:hover:bg-rose-900/20 hover:border-rose-300 transition-all text-sm font-bold shadow-sm"
                >
                  <Trash2 className="w-5 h-5 mr-2 text-rose-500" /> remove()
                </button>
                <button
                  onClick={() => runDemo('sort')}
                  className="flex items-center justify-center p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:border-purple-300 transition-all text-sm font-bold shadow-sm"
                >
                  <List className="w-5 h-5 mr-2 text-purple-500" /> sort()
                </button>
                <button
                  onClick={() => runDemo('length')}
                  className="flex items-center justify-center p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 transition-all text-sm font-bold shadow-sm"
                >
                  <Search className="w-5 h-5 mr-2 text-blue-500" /> len()
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 h-full min-h-[350px] shadow-2xl relative overflow-hidden flex flex-col">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <h3 className="font-bold text-slate-300 uppercase text-xs tracking-wider flex items-center">
                    <Terminal className="w-4 h-4 mr-2" />
                    Python Console
                  </h3>
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                  </div>
                </div>

                <div className="font-mono text-smflex flex-col flex-1">
                  {consoleOutput.length === 0 ? (
                    <div className="text-slate-500 animate-pulse text-center mt-20">Waiting for actions...</div>
                  ) : (
                    consoleOutput.map((line, i) => (
                      <div key={i} className={`mb-1.5 ${
                          line.startsWith('>>>') ? 'text-blue-400 font-bold' :
                          line.includes('Error') ? 'text-rose-400' :
                          'text-emerald-300'
                        }`}>
                        {line}
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Operations Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 border-b border-slate-200 dark:border-slate-700 pb-4">
          Core Operations
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Search className="w-6 h-6 text-blue-500 mr-2" />
              4️⃣ Accessing Array Elements
            </h3>
            <p className="mb-6 text-slate-600 dark:text-slate-300">Each element has an index starting from 0.</p>
            <CodeSnippetBlock 
              codeSnippet={`numbers = [10, 20, 30, 40]\n\nprint(numbers[0]) # Output: 10\nprint(numbers[2]) # Output: 30`} 
            />
            
            <div className="mt-6 bg-slate-50 dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
              <h4 className="text-sm font-bold text-slate-500 uppercase mb-4 text-center">📊 Visualization & Memory Layout (9️⃣)</h4>
              <div className="flex gap-2 justify-center mb-2 overflow-x-auto">
                {[10, 20, 30, 40, 50].map((val, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 dark:bg-blue-900/30 border-2 border-blue-500 text-blue-800 dark:text-blue-200 font-bold text-lg sm:text-xl flex items-center justify-center rounded-lg shadow-sm">
                      {val}
                    </div>
                    <div className="text-sm font-mono text-slate-500 mt-2 font-bold">{idx}</div>
                  </div>
                ))}
              </div>
              <div className="text-center text-xs font-mono text-slate-400">(Index positions)</div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <RefreshCw className="w-6 h-6 text-emerald-500 mr-2" />
                8️⃣ Looping Through an Array
              </h3>
              <p className="mb-4 text-slate-600 dark:text-slate-300">You can use a <code className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-1.5 py-0.5 rounded">for</code> loop to access each element efficiently.</p>
              <CodeSnippetBlock 
                codeSnippet={`numbers = [5, 10, 15, 20]\n\nfor num in numbers:\n    print(num)\n    \n# Output:\n# 5\n# 10\n# 15\n# 20`} 
              />
            </div>

            {/* Arrays Module Table */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Cpu className="w-6 h-6 text-purple-500 mr-2" />
                5️⃣ Creating Arrays (Array Module)
              </h3>
              <p className="mb-4 text-slate-600 dark:text-slate-300">Python has a built-in module called <code className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-1.5 py-0.5 rounded">array</code>.</p>
              <CodeSnippetBlock 
                codeSnippet={`import array\n\n# array_name = array.array(typecode, [elements])\narr = array.array('i', [1, 2, 3, 4, 5])\nprint(arr)\n\n# Output: array('i', [1, 2, 3, 4, 5])\n\n# Example with float\narr_f = array.array('f', [1.2, 2.4, 3.6])`} 
              />
              <h4 className="font-bold mb-3 mt-6">Typecodes Table</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700">
                  <thead className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 uppercase">
                    <tr><th className="p-3 border-b dark:border-slate-600">Typecode</th><th className="p-3 border-b dark:border-slate-600">Data Type</th></tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800"><td className="p-3 font-mono font-bold text-blue-500">i</td><td className="p-3">Integer</td></tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800"><td className="p-3 font-mono font-bold text-blue-500">f</td><td className="p-3">Float</td></tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800"><td className="p-3 font-mono font-bold text-blue-500">d</td><td className="p-3">Double</td></tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800"><td className="p-3 font-mono font-bold text-blue-500">b</td><td className="p-3">Signed char</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Pros Cons & Real World */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-3 gap-6">
        <div className="bg-emerald-50 dark:bg-emerald-900/10 p-6 rounded-2xl shadow-sm border border-emerald-100 dark:border-emerald-800/30">
          <h3 className="text-xl font-bold mb-4 flex items-center text-emerald-800 dark:text-emerald-400">
            <CheckCircle2 className="w-6 h-6 mr-2" />
            🔟 Advantages 
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start"><span className="text-emerald-500 mr-2">✔</span> Store multiple values in one variable</li>
            <li className="flex items-start"><span className="text-emerald-500 mr-2">✔</span> Faster access using index</li>
            <li className="flex items-start"><span className="text-emerald-500 mr-2">✔</span> Easy to iterate using loops</li>
            <li className="flex items-start"><span className="text-emerald-500 mr-2">✔</span> Organized data storage</li>
          </ul>
        </div>
        <div className="bg-rose-50 dark:bg-rose-900/10 p-6 rounded-2xl shadow-sm border border-rose-100 dark:border-rose-800/30">
          <h3 className="text-xl font-bold mb-4 flex items-center text-rose-800 dark:text-rose-400">
            <AlertTriangle className="w-6 h-6 mr-2" />
            ⚠️ Limitations
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start"><span className="text-rose-500 font-bold mr-2">❌</span> Fixed size (in traditional arrays)</li>
            <li className="flex items-start"><span className="text-rose-500 font-bold mr-2">❌</span> Same data type required</li>
            <li className="flex items-start"><span className="text-rose-500 font-bold mr-2">❌</span> Less flexible than Python lists</li>
          </ul>
        </div>
        <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-800/30">
          <h3 className="text-xl font-bold mb-4 flex items-center text-blue-800 dark:text-blue-400">
            <Layers className="w-6 h-6 mr-2" />
            🧠 Real-World Example
          </h3>
          <p className="text-sm mb-4 text-blue-900 dark:text-blue-200">Suppose you store student marks and want the average:</p>
          <CodeSnippetBlock 
            codeSnippet={`marks = [85, 90, 78, 92, 88]\naverage = sum(marks)/len(marks)\nprint("Avg:", average)\n\n# Output:\n# Avg: 86.6`} 
          />
        </div>
      </section>

      {/* 6. Developer Recommendations & Tips */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
          <h2 className="text-3xl font-extrabold mb-6 flex items-center relative z-10">
            <Star className="w-8 h-8 mr-3 text-yellow-300" />
            💡 Personal Recommendations
          </h2>
          <p className="text-indigo-100 mb-8 font-medium italic relative z-10">From a Developer with 15+ years of Python development:</p>
          
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <h3 className="font-bold text-xl mb-3">1️⃣ Use Lists Instead</h3>
              <p className="text-sm text-indigo-100 mb-3">Lists are easier, more flexible, and widely used. They can hold mixed types.</p>
              <code className="bg-black/30 p-2 rounded text-xs block font-mono">data = [1, "Hello", 3.14]</code>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <h3 className="font-bold text-xl mb-3">2️⃣ NumPy for AI/ML</h3>
              <p className="text-sm text-indigo-100 mb-3">For data science, AI, and computing, always use NumPy.</p>
              <code className="bg-black/30 p-2 rounded text-xs block font-mono">import numpy as np<br/>arr = np.array([1,2,3])</code>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <h3 className="font-bold text-xl mb-3">3️⃣ Practice Indexing</h3>
              <p className="text-sm text-indigo-100 mb-3">Beginners struggle with IndexError. Practice <code className="bg-indigo-900/50 px-1 rounded">-1</code> and <code className="bg-indigo-900/50 px-1 rounded">-2</code> indexes.</p>
              <code className="bg-black/30 p-2 rounded text-xs block font-mono">nums = [10,20,30]<br/>print(nums[-1]) # 30</code>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-8 border-b border-slate-200 dark:border-slate-700 pb-4 flex items-center">
          <Lightbulb className="w-8 h-8 text-yellow-500 mr-3" />
          🚀 Tips & Tricks
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-lg mb-4 text-blue-600 dark:text-blue-400">Trick 1 — Reverse Array</h4>
            <CodeSnippetBlock codeSnippet={`nums = [1,2,3,4]\nprint(nums[::-1])\n\n# [4,3,2,1]`} />
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-lg mb-4 text-orange-600 dark:text-orange-400">Trick 2 — Max Value</h4>
            <CodeSnippetBlock codeSnippet={`nums = [5,10,2,25,7]\nprint(max(nums))\n\n# 25`} />
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-lg mb-4 text-purple-600 dark:text-purple-400">Trick 3 — Sort Array</h4>
            <CodeSnippetBlock codeSnippet={`nums = [4,2,7,1]\nnums.sort()\nprint(nums)\n\n# [1,2,4,7]`} />
          </div>
        </div>
      </section>

      {/* 7. Practice */}
      <section className="max-w-4xl mx-auto pb-16">
        <div className="bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 p-8 rounded-3xl border border-yellow-200 dark:border-yellow-700 shadow-lg relative">
          <Target className="absolute top-6 right-6 w-12 h-12 text-yellow-500/30" />
          <h2 className="text-2xl font-bold text-yellow-900 dark:text-yellow-400 mb-4 flex items-center">
            🧩 Practice Exercise (for you)
          </h2>
          <p className="mb-4 text-yellow-800 dark:text-yellow-300">
            Create a Python array (list) with 5 numbers and print:
          </p>
          <ul className="list-decimal list-inside space-y-2 mb-6 text-yellow-900 dark:text-yellow-200 font-medium">
            <li>First element</li>
            <li>Last element</li>
            <li>Sum of all numbers</li>
          </ul>
          
          <div className="bg-white/60 dark:bg-black/30 p-4 rounded-xl backdrop-blur-sm border border-white/50 dark:border-white/10">
            <h4 className="font-bold text-sm uppercase tracking-wider text-yellow-800 dark:text-yellow-500 mb-2">Example Output:</h4>
            <pre className="font-mono text-sm text-slate-800 dark:text-slate-300">
              First Element: 10<br/>
              Last Element: 50<br/>
              Sum: 150
            </pre>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PythonArrays;