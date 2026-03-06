import React, { useState } from 'react';
import { 
  Database, Type, Hash, Binary, List, GripHorizontal, 
  BookOpen, Terminal, Target, RefreshCw, Check, Copy, 
  Lightbulb, ShieldCheck, Zap, Maximize, Play, CheckCircle2,
  AlertTriangle
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
                <div key={index} className={`${highlightLines.includes(index) ? 'bg-neutral-800/80 -mx-4 px-4 py-0.5 border-l-2 border-fuchsia-500' : ''}`}>
                  <span className={isComment ? 'text-neutral-500 italic' : line.includes('print') || line.includes('type(') ? 'text-blue-400' : line.includes('=') ? 'text-neutral-300' : line.includes('&lt;class') ? 'text-fuchsia-400' : 'text-emerald-400'}>
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

const PythonDataTypes: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'numeric' | 'text' | 'sequence' | 'collections'>('numeric');

  const runDemo = (action: string) => {
    let codeStr = '';

    switch (action) {
      case 'int':
        codeStr = `>>> x = 10\n>>> print(type(x))\n<class 'int'>`;
        break;
      case 'float':
        codeStr = `>>> price = 10.5\n>>> print(type(price))\n<class 'float'>`;
        break;
      case 'complex':
        codeStr = `>>> x = 2 + 3j\n>>> print(type(x))\n<class 'complex'>`;
        break;
      case 'str':
        codeStr = `>>> name = "Issac"\n>>> print(type(name))\n<class 'str'>\n>>> text = "Python Programming"\n>>> print(text)\nPython Programming`;
        break;
      case 'bool':
        codeStr = `>>> x = True\n>>> print(type(x))\n<class 'bool'>\n>>> print(10 > 5)\nTrue`;
        break;
      case 'list':
        codeStr = `>>> numbers = [10, 20, 30, 40]\n>>> print(numbers)\n[10, 20, 30, 40]`;
        break;
      case 'tuple':
        codeStr = `>>> colors = ("red", "blue", "green")\n>>> print(colors)\n('red', 'blue', 'green')`;
        break;
      case 'set':
        codeStr = `>>> numbers = {1, 2, 3, 4}\n>>> print(numbers)\n{1, 2, 3, 4}\n>>> nums = {1, 1, 2, 2, 3}\n>>> print(nums)\n{1, 2, 3}`;
        break;
      case 'dict':
        codeStr = `>>> student = {"name": "Issac", "age": 19, "course": "Python"}\n>>> print(student)\n{'name': 'Issac', 'age': 19, 'course': 'Python'}`;
        break;
      case 'none':
        codeStr = `>>> x = None\n>>> print(type(x))\n<class 'NoneType'>`;
        break;
    }

    setConsoleOutput(codeStr.split('\n'));
  };

  const resetConsole = () => setConsoleOutput([]);

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-900 min-h-screen font-sans text-slate-800 dark:text-slate-200">
      
      {/* 1. Header Area */}
      <header className="max-w-4xl mx-auto text-center mb-16 pt-8">
        <div className="inline-flex items-center justify-center p-4 bg-fuchsia-100 dark:bg-fuchsia-900/30 rounded-2xl mb-6 shadow-sm border border-fuchsia-200 dark:border-fuchsia-800/50">
          <Database className="w-10 h-10 text-fuchsia-600 dark:text-fuchsia-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Python Data Types
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          The foundation of Python programming. Learn how Python stores, classifies, and interacts with different kinds of data.
        </p>
      </header>

      {/* 2. What are Data Types? */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 text-fuchsia-500 mr-3" />
            <h2 className="text-2xl font-bold">1️⃣ What are Data Types?</h2>
          </div>
          <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border-l-4 border-amber-400 mb-6">
            <h4 className="font-bold flex items-center text-amber-800 dark:text-amber-400 mb-1">
              <span className="mr-2">📌</span> Definition
            </h4>
            <p className="text-sm text-amber-800 dark:text-amber-300">
              A Data Type defines the <strong className="font-bold">type of value</strong> a variable can store. It tells Python what kind of data it is and what operations can be performed on it.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800 text-center">
              <Hash className="w-6 h-6 text-blue-500 mx-auto mb-2" />
              <div className="font-mono text-lg font-bold text-slate-800 dark:text-slate-200">10</div>
              <div className="text-sm text-blue-600 dark:text-blue-400 font-bold mt-1">Integer</div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800 text-center">
              <Type className="w-6 h-6 text-emerald-500 mx-auto mb-2" />
              <div className="font-mono text-lg font-bold text-slate-800 dark:text-slate-200">"Hello"</div>
              <div className="text-sm text-emerald-600 dark:text-emerald-400 font-bold mt-1">String</div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col justify-between">
          <div>
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-6 h-6 text-rose-500 mr-3" />
              <h2 className="text-2xl font-bold">2️⃣ Why they matter?</h2>
            </div>
            <p className="mb-6 text-slate-600 dark:text-slate-300">
              Data types dictate how Python processes data. Look what happens when we mix types:
            </p>
            
            <CodeSnippetBlock 
              codeSnippet={`print(5 + 5)\n# Output: 10 (Addition)\n\nprint("5" + "5")\n# Output: 55 (String concatenation)`} 
            />
            
            <div className="bg-rose-50 dark:bg-rose-900/10 p-4 rounded-xl border border-rose-100 dark:border-rose-800/30">
              <p className="text-sm font-bold text-rose-800 dark:text-rose-300 flex items-center">
                <Zap className="w-4 h-4 mr-2" /> Same visual value "5", totally different results!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Data Types Table */}
      <section className="max-w-4xl mx-auto mb-16">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <List className="w-6 h-6 text-indigo-500 mr-3" />
            3️⃣ Main Python Data Types
          </h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm border-collapse rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700">
              <thead className="bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300">
                <tr>
                  <th className="p-4 border-b dark:border-slate-700 font-bold uppercase tracking-wider">Category</th>
                  <th className="p-4 border-b dark:border-slate-700 font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Data Types & Examples</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="p-4 font-bold">Numeric</td>
                  <td className="p-4 font-mono text-indigo-600 dark:text-indigo-400">int (10), float (3.14), complex (2+3j)</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="p-4 font-bold">Text</td>
                  <td className="p-4 font-mono text-indigo-600 dark:text-indigo-400">str ("Hello")</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="p-4 font-bold">Boolean</td>
                  <td className="p-4 font-mono text-indigo-600 dark:text-indigo-400">bool (True / False)</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="p-4 font-bold">Sequence</td>
                  <td className="p-4 font-mono text-indigo-600 dark:text-indigo-400">list ([1, 2]), tuple ((1, 2)), range</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="p-4 font-bold">Set</td>
                  <td className="p-4 font-mono text-indigo-600 dark:text-indigo-400">set (&#123;1, 2&#125;)</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="p-4 font-bold">Mapping</td>
                  <td className="p-4 font-mono text-indigo-600 dark:text-indigo-400">dict (&#123;"name": "John"&#125;)</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="p-4 font-bold">None Type</td>
                  <td className="p-4 font-mono text-indigo-600 dark:text-indigo-400">NoneType (None)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Interactive Discovery Lab Area */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center">
            <Maximize className="w-8 h-8 mr-3 text-fuchsia-500" />
            Interactive Type Explorer
          </h2>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setActiveTab('numeric')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm ${activeTab === 'numeric' ? 'bg-fuchsia-600 text-white shadow-fuchsia-500/20' : 'bg-white dark:bg-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              Numeric & Types
            </button>
            <button
              onClick={() => setActiveTab('text')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm ${activeTab === 'text' ? 'bg-fuchsia-600 text-white shadow-fuchsia-500/20' : 'bg-white dark:bg-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              Text & Bool
            </button>
            <button
              onClick={() => setActiveTab('sequence')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm ${activeTab === 'sequence' ? 'bg-fuchsia-600 text-white shadow-fuchsia-500/20' : 'bg-white dark:bg-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              Lists & Tuples
            </button>
            <button
              onClick={() => setActiveTab('collections')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm ${activeTab === 'collections' ? 'bg-fuchsia-600 text-white shadow-fuchsia-500/20' : 'bg-white dark:bg-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              Sets & Dicts
            </button>
            <button
              onClick={resetConsole}
              className="flex items-center px-4 py-2 bg-slate-100 text-slate-700 dark:bg-slate-800/80 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shadow-sm ml-2"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 min-h-[500px] overflow-y-auto">
              
              {activeTab === 'numeric' && (
                <div className="animate-fade-in space-y-6">
                  <div className="bg-fuchsia-50 dark:bg-fuchsia-900/10 p-4 rounded-xl border border-fuchsia-100 dark:border-fuchsia-800/30 mb-6">
                    <h3 className="font-bold flex items-center text-fuchsia-800 dark:text-fuchsia-400 mb-2">
                       1️⃣2️⃣ Checking Data Types
                    </h3>
                    <p className="text-sm text-fuchsia-800 dark:text-fuchsia-300">
                      Python provides the <code className="font-bold bg-white/50 dark:bg-black/30 px-1 rounded">type()</code> function to magically reveal the type of any variable!
                    </p>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">4️⃣ Numeric Data Types</h3>
                  
                  <button onClick={() => runDemo('int')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-blue-300 dark:hover:border-blue-700 transition-colors relative">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-blue-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-blue-600 dark:text-blue-400 mb-1">Integer (<code className="font-mono">int</code>)</h4>
                      <p className="text-xs text-slate-500 mb-3">Whole numbers without decimals (e.g. 0, 5, 100, -30)</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300">
x = <span className="text-emerald-500">10</span><br/>
<span className="text-blue-500">print</span>(<span className="text-blue-500">type</span>(x))
                      </pre>
                    </div>
                  </button>

                  <button onClick={() => runDemo('float')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-amber-300 dark:hover:border-amber-700 transition-colors relative">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-amber-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-amber-600 dark:text-amber-400 mb-1">Float (<code className="font-mono">float</code>)</h4>
                      <p className="text-xs text-slate-500 mb-3">Numbers with decimal points (e.g. 3.14, -10.25)</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300">
price = <span className="text-emerald-500">10.5</span><br/>
<span className="text-blue-500">print</span>(<span className="text-blue-500">type</span>(price))
                      </pre>
                    </div>
                  </button>

                  <button onClick={() => runDemo('complex')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-purple-300 dark:hover:border-purple-700 transition-colors relative">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-purple-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-purple-600 dark:text-purple-400 mb-1">Complex (<code className="font-mono">complex</code>)</h4>
                      <p className="text-xs text-slate-500 mb-3">Real and imaginary parts. Mainly for scientific math.</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300">
x = <span className="text-emerald-500">2 + 3j</span><br/>
<span className="text-blue-500">print</span>(<span className="text-blue-500">type</span>(x))
                      </pre>
                    </div>
                  </button>
                </div>
              )}

              {activeTab === 'text' && (
                <div className="animate-fade-in space-y-6">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">5️⃣ Text & 6️⃣ Booleans</h3>
                  
                  <button onClick={() => runDemo('str')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors relative mb-4">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-emerald-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-emerald-600 dark:text-emerald-400 mb-1">String (<code className="font-mono">str</code>)</h4>
                      <p className="text-xs text-slate-500 mb-3">Represents text inside 'single' or "double" quotes.</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300">
name = <span className="text-orange-500">"Issac"</span><br/>
<span className="text-blue-500">print</span>(<span className="text-blue-500">type</span>(name))<br/><br/>
text = <span className="text-orange-500">"Python Programming"</span><br/>
<span className="text-blue-500">print</span>(text)
                      </pre>
                    </div>
                  </button>

                  <button onClick={() => runDemo('bool')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-rose-300 dark:hover:border-rose-700 transition-colors relative mb-4">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-rose-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-rose-600 dark:text-rose-400 mb-1">Boolean (<code className="font-mono">bool</code>)</h4>
                      <p className="text-xs text-slate-500 mb-3">Represents logic states: True or False.</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300">
x = <span className="text-blue-500 font-bold">True</span><br/>
<span className="text-blue-500">print</span>(<span className="text-blue-500">type</span>(x))<br/><br/>
<span className="text-blue-500">print</span>(<span className="text-emerald-500">10 &gt; 5</span>)
                      </pre>
                    </div>
                  </button>

                  <button onClick={() => runDemo('none')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-slate-400 dark:hover:border-slate-600 transition-colors relative">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-slate-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-slate-600 dark:text-slate-400 mb-1">1️⃣1️⃣ NoneType (<code className="font-mono">None</code>)</h4>
                      <p className="text-xs text-slate-500 mb-3">Represents no value or emptiness.</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300">
x = <span className="text-blue-500 font-bold">None</span><br/>
<span className="text-blue-500">print</span>(<span className="text-blue-500">type</span>(x))
                      </pre>
                    </div>
                  </button>
                </div>
              )}

              {activeTab === 'sequence' && (
                <div className="animate-fade-in space-y-6">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">7️⃣ & 8️⃣ Sequence Types</h3>
                  
                  <button onClick={() => runDemo('list')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors relative mb-4">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-indigo-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-indigo-600 dark:text-indigo-400 mb-1">List (<code className="font-mono">list</code>)</h4>
                      <p className="text-xs text-slate-500 mb-3">Stores multiple ordered, changeable values.</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300">
numbers = [<span className="text-emerald-500">10, 20, 30, 40</span>]<br/>
<span className="text-blue-500">print</span>(numbers)
                      </pre>
                      
                      <div className="mt-4 bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 font-mono text-xs">
                        <div className="flex justify-between text-slate-400 mb-1 border-b pb-1 dark:border-slate-700"><span>Index:</span><span>0</span><span>1</span><span>2</span><span>3</span></div>
                        <div className="flex justify-between text-indigo-600 dark:text-indigo-400 font-bold"><span>Value:</span><span>10</span><span>20</span><span>30</span><span>40</span></div>
                      </div>
                    </div>
                  </button>

                  <button onClick={() => runDemo('tuple')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors relative">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-indigo-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-indigo-600 dark:text-indigo-400 mb-1">Tuple (<code className="font-mono">tuple</code>)</h4>
                      <p className="text-xs text-slate-500 mb-3">Similar to lists but <strong className="text-rose-500">cannot be changed</strong> (immutable).</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300">
colors = (<span className="text-orange-500">"red", "blue", "green"</span>)<br/>
<span className="text-blue-500">print</span>(colors)
                      </pre>
                    </div>
                  </button>
                </div>
              )}

              {activeTab === 'collections' && (
                <div className="animate-fade-in space-y-6">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">9️⃣ Set & 🔟 Dictionary</h3>
                  
                  <button onClick={() => runDemo('set')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-teal-300 dark:hover:border-teal-700 transition-colors relative mb-4">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-teal-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-teal-600 dark:text-teal-400 mb-1">Set (<code className="font-mono">set</code>)</h4>
                      <p className="text-xs text-slate-500 mb-3">Stores mathematical sets of <strong className="font-bold">unique</strong> values. Removes duplicates automatically!</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300">
numbers = &#123;<span className="text-emerald-500">1, 2, 3, 4</span>&#125;<br/>
<span className="text-blue-500">print</span>(numbers)<br/><br/>
nums = &#123;<span className="text-emerald-500">1, 1, 2, 2, 3</span>&#125; <span className="text-neutral-400 italic"># Duplicates!</span><br/>
<span className="text-blue-500">print</span>(nums)
                      </pre>
                    </div>
                  </button>

                  <button onClick={() => runDemo('dict')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-teal-300 dark:hover:border-teal-700 transition-colors relative">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-teal-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-teal-600 dark:text-teal-400 mb-1">Dictionary (<code className="font-mono">dict</code>)</h4>
                      <p className="text-xs text-slate-500 mb-3">Stores data as Key: Value mapping pairs.</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300">
student = &#123;<br/>
    <span className="text-orange-500">"name"</span>: <span className="text-orange-500">"Issac"</span>,<br/>
    <span className="text-orange-500">"age"</span>: <span className="text-emerald-500">19</span>,<br/>
    <span className="text-orange-500">"course"</span>: <span className="text-orange-500">"Python"</span><br/>
&#125;<br/>
<span className="text-blue-500">print</span>(student)
                      </pre>
                      
                      <div className="mt-4 bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 font-mono text-xs flex justify-around">
                        <div className="text-center"><div className="font-bold text-slate-400 border-b pb-1 dark:border-slate-700 mb-1">Key</div><div className="font-bold text-orange-500">name<br/>age<br/>course</div></div>
                        <div className="text-center"><div className="font-bold text-slate-400 border-b pb-1 dark:border-slate-700 mb-1">Value</div><div className="font-bold text-teal-600 dark:text-teal-400">Issac<br/>19<br/>Python</div></div>
                      </div>
                    </div>
                  </button>
                </div>
              )}

            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 h-full min-h-[500px] shadow-2xl relative overflow-hidden flex flex-col">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#d946ef 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <h3 className="font-bold text-slate-300 uppercase text-xs tracking-wider flex items-center">
                    <Terminal className="w-4 h-4 mr-2" />
                    Python Type Console
                  </h3>
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                  </div>
                </div>

                <div className="font-mono text-sm flex flex-col flex-1">
                  {consoleOutput.length === 0 ? (
                    <div className="text-slate-500 animate-pulse flex flex-col items-center justify-center mt-32">
                      <Terminal className="w-12 h-12 mb-4 opacity-20" />
                      <span>Click an operation on the left to execute...</span>
                    </div>
                  ) : (
                    consoleOutput.map((line, i) => (
                      <div key={i} className={`mb-1.5 animate-fade-in ${
                          line.startsWith('>>>') ? 'text-blue-400 font-bold' :
                          line.includes('<class') ? 'text-fuchsia-400 font-bold' :
                          'text-emerald-300 font-bold'
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

      {/* 5. Developer Recommendations & Tips */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-r from-fuchsia-700 to-purple-800 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
          <h2 className="text-3xl font-extrabold mb-6 flex items-center relative z-10">
            <Lightbulb className="w-8 h-8 mr-3 text-yellow-300" />
            💡 Developer Recommendations
          </h2>
          <p className="text-fuchsia-100 mb-8 font-medium italic relative z-10 text-lg">From a Developer with 15+ years of Python experience:</p>
          
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <h3 className="font-bold text-xl mb-3 flex items-center">1️⃣ Choose Correctly</h3>
              <p className="text-sm text-fuchsia-100 mb-3">Using the correct type improves performance and readability massively.</p>
              <div className="space-y-1 mt-3">
                <div className="flex justify-between border-b border-fuchsia-500/30 pb-1 text-sm"><span className="text-fuchsia-200">Age</span> <span className="font-mono font-bold text-amber-300">int</span></div>
                <div className="flex justify-between border-b border-fuchsia-500/30 pb-1 text-sm pt-1"><span className="text-fuchsia-200">Price</span> <span className="font-mono font-bold text-amber-300">float</span></div>
                <div className="flex justify-between pb-1 text-sm pt-1"><span className="text-fuchsia-200">Name</span> <span className="font-mono font-bold text-emerald-300">str</span></div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <h3 className="font-bold text-xl mb-3">2️⃣ Dynamic Data = Lists</h3>
              <p className="text-sm text-fuchsia-100 mb-3">Lists are flexible and commonly used when you don't know the exact size of data beforehand.</p>
              <code className="bg-black/30 p-2 rounded text-xs block font-mono">students = ["John", "Emma", "Alex"]</code>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <h3 className="font-bold text-xl mb-3">3️⃣ Dictionaries for Structure</h3>
              <p className="text-sm text-fuchsia-100 mb-3">Widely used in Web Development and APIs to parse JSON data reliably.</p>
              <code className="bg-black/30 p-2 rounded text-xs block font-mono">user = &#123;<br/>"name": "Issac",<br/>"email": "user@email.com"<br/>&#125;</code>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-8 border-b border-slate-200 dark:border-slate-700 pb-4 flex items-center">
          <Zap className="w-8 h-8 text-yellow-500 mr-3" />
          🚀 Essential Type Tricks
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-lg mb-4 text-blue-600 dark:text-blue-400">Trick 1 — Mixed Lists</h4>
            <p className="text-sm text-slate-500 mb-3">Unlike arrays in C++, Python lists can store multiple data types together!</p>
            <CodeSnippetBlock codeSnippet={`data = [10, "Python", True]\n\nprint(data)\n# [10, 'Python', True]`} />
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-lg mb-4 text-fuchsia-600 dark:text-fuchsia-400">Trick 2 — Casting Types</h4>
            <p className="text-sm text-slate-500 mb-3">Change a string variable to an integer variable to do math.</p>
            <CodeSnippetBlock codeSnippet={`x = "10"\n\ny = int(x)\nprint(y + 5) # 15`} />
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-lg mb-4 text-amber-600 dark:text-amber-400">Trick 3 — Inline Checking</h4>
            <p className="text-sm text-slate-500 mb-3">Pass raw values directly into <code className="font-mono">type()</code> without assigning a variable.</p>
            <CodeSnippetBlock codeSnippet={`print(type(3.5))\n\n# <class 'float'>`} />
          </div>
        </div>
      </section>

      {/* 6. Practice */}
      <section className="max-w-4xl mx-auto pb-16">
        <div className="bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 p-8 rounded-3xl border border-amber-200 dark:border-amber-700 shadow-lg relative">
          <Target className="absolute top-6 right-6 w-12 h-12 text-amber-500/30" />
          <h2 className="text-2xl font-bold text-amber-900 dark:text-amber-400 mb-4 flex items-center">
            🧩 Practice Exercise (For Students)
          </h2>
          <p className="mb-4 text-amber-800 dark:text-amber-300 font-medium tracking-wide">
            Task: Create variables representing a Person with the correct data types, then print their types!
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6 text-amber-900 dark:text-amber-200 font-bold bg-white/40 dark:bg-black/20 p-4 rounded-xl max-w-sm">
            <li>Name</li>
            <li>Age</li>
            <li>Price</li>
            <li>Is Student</li>
          </ul>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-amber-500/10 dark:bg-amber-900/30 p-5 rounded-xl backdrop-blur-sm border border-amber-500/30">
              <h4 className="font-bold text-sm uppercase tracking-wider text-amber-800 dark:text-amber-400 mb-3">Example Output</h4>
              <div className="font-mono text-sm font-bold text-amber-700 dark:text-amber-300 bg-white/50 dark:bg-black/30 rounded p-4 shadow-inner">
                &lt;class 'str'&gt;<br/>
                &lt;class 'int'&gt;<br/>
                &lt;class 'float'&gt;<br/>
                &lt;class 'bool'&gt;
              </div>
            </div>

            <div className="bg-white/60 dark:bg-black/40 p-5 rounded-xl backdrop-blur-sm border border-white/50 dark:border-white/10 group relative overflow-hidden">
               <div className="absolute inset-0 bg-slate-900/80 backdrop-blur flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300 z-10 cursor-pointer">
                <span className="text-white font-bold flex items-center bg-amber-500 px-4 py-2 rounded-lg"><Lightbulb className="w-4 h-4 mr-2" /> Hover for Idea</span>
              </div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-3 flex items-center"><CheckCircle2 className="w-4 h-4 mr-2" /> Example Solution Code</h4>
              <pre className="font-mono text-xs text-slate-800 dark:text-slate-300">
name = "John"<br/>
age = 20<br/>
price = 15.5<br/>
is_student = True<br/><br/>
print(type(name))<br/>
print(type(age))<br/>
print(type(price))<br/>
print(type(is_student))
              </pre>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PythonDataTypes;