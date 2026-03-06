import React, { useState } from 'react';
import { 
  Box, Blocks, AlertTriangle, Lightbulb, BookOpen, 
  Terminal, Target, RefreshCw, Check, Copy, 
  Cpu, Users, Briefcase, Car, Play, CheckCircle2,
  XCircle, Eraser, Trash2, ArrowRightLeft, ArrowDown
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
            className="p-1.5 rounded-md bg-slate-800 text-slate-400 hover:bg-orange-600 hover:text-white transition-colors border border-slate-700"
            title="Copy code"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </div>
        <pre className="p-4 overflow-x-auto text-sm font-mono text-orange-300 leading-relaxed">
          <code>{codeSnippet}</code>
        </pre>
      </div>
    </div>
  );
};

const PythonClassesObjects: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'blueprint' | 'memory' | 'methods'>('blueprint');

  const runDemo = (action: string) => {
    let codeStr = '';

    switch (action) {
      case 'create_class':
        codeStr = `>>> class Student:\n...     name = "Issac"\n...     age = 19\n>>> print("Class successfully created")\nClass successfully created`;
        break;
      case 'create_obj':
        codeStr = `>>> s1 = Student()\n>>> print(s1.name)\nIssac\n>>> print(s1.age)\n19`;
        break;
      case 'init_method':
        codeStr = `>>> class Student:\n...     def __init__(self, name, age):\n...         self.name = name\n...         self.age = age\n>>> s1 = Student("John", 20)\n>>> s2 = Student("Emma", 21)\n>>> print(s1.name)\nJohn\n>>> print(s2.name)\nEmma`;
        break;
      case 'call_method':
        codeStr = `>>> class Student:\n...     def __init__(self, name):\n...         self.name = name\n...     def greet(self):\n...         print("Hello", self.name)\n>>> s1 = Student("Issac")\n>>> s1.greet()\nHello Issac`;
        break;
      case 'real_world':
        codeStr = `>>> class BankAccount:\n...     def __init__(self, owner, balance):\n...         self.owner = owner\n...         self.balance = balance\n...     def show_balance(self):\n...         print("Balance:", self.balance)\n>>> acc1 = BankAccount("Issac", 5000)\n>>> acc1.show_balance()\nBalance: 5000`;
        break;
    }

    setConsoleOutput(codeStr.split('\n'));
  };

  const resetConsole = () => setConsoleOutput([]);

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-900 min-h-screen font-sans text-slate-800 dark:text-slate-200">
      
      {/* 1. Header Area */}
      <header className="max-w-4xl mx-auto text-center mb-16 pt-8">
        <div className="inline-flex items-center justify-center p-4 bg-orange-100 dark:bg-orange-900/30 rounded-2xl mb-6 shadow-sm border border-orange-200 dark:border-orange-800/50">
          <Blocks className="w-10 h-10 text-orange-600 dark:text-orange-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Python Classes & Objects
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Master Object-Oriented Programming (OOP) in Python. Learn to build blueprints, spawn objects, and write modular, professional code.
        </p>
      </header>

      {/* 2. What is a Class vs Object? */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 text-orange-500 mr-3" />
            <h2 className="text-2xl font-bold">1️⃣ What is a Class?</h2>
          </div>
          <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border-l-4 border-yellow-400 mb-6">
            <h4 className="font-bold flex items-center text-yellow-800 dark:text-yellow-400 mb-1">
              <span className="mr-2">📌</span> Definition
            </h4>
            <p className="text-sm text-yellow-800 dark:text-yellow-300">
              A Class is a <strong className="font-bold">blueprint</strong> for creating objects. It defines the properties (variables) and behaviors (functions) that objects will have.
            </p>
          </div>
          
          <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 mb-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full -mr-10 -mt-10 blur-xl"></div>
            <h4 className="font-bold text-slate-700 dark:text-slate-300 mb-4 text-sm uppercase tracking-wide">Analogy: Car Blueprint</h4>
            <div className="flex items-center gap-4">
              <div className="flex-1 bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 text-center shadow-sm">
                <Box className="w-8 h-8 mx-auto text-blue-500 mb-2 opacity-50" />
                <div className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400 mb-1">CLASS</div>
                <div className="text-sm">Car Blueprint</div>
                <div className="text-xs text-slate-400 mt-2 text-left">
                  • Color<br/>• Model<br/>• Speed
                </div>
              </div>
              <ArrowRightLeft className="w-6 h-6 text-slate-300" />
              <div className="flex-1 bg-white dark:bg-slate-800 p-4 rounded-lg border border-orange-200 dark:border-orange-700 text-center shadow-md">
                <Car className="w-8 h-8 mx-auto text-orange-500 mb-2" />
                <div className="font-mono text-xs font-bold text-orange-600 dark:text-orange-400 mb-1">OBJECT</div>
                <div className="text-sm">Actual Car</div>
                <div className="text-xs text-slate-400 mt-2 text-left">
                  • Red<br/>• Tesla<br/>• 150mph
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col justify-between">
          <div>
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 text-blue-500 mr-3" />
              <h2 className="text-2xl font-bold">2️⃣ What is an Object?</h2>
            </div>
            <p className="mb-6 text-slate-600 dark:text-slate-300">
              An Object is an <strong className="text-slate-900 dark:text-white font-bold">instance</strong> of a class. It is the actual entity created using the class blueprint.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 bg-blue-50 dark:bg-blue-900/10 p-4 rounded-xl border border-blue-100 dark:border-blue-800 text-center font-bold text-blue-800 dark:text-blue-400">
                Class &rarr; <span className="font-mono">Student</span>
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800 text-center">
                <div className="text-sm font-bold text-emerald-800 dark:text-emerald-400 mb-1">Object 1</div>
                <div className="font-mono text-emerald-600 dark:text-emerald-300">John</div>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/10 p-4 rounded-xl border border-purple-100 dark:border-purple-800 text-center">
                <div className="text-sm font-bold text-purple-800 dark:text-purple-400 mb-1">Object 2</div>
                <div className="font-mono text-purple-600 dark:text-purple-300">Emma</div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-bold text-slate-900 dark:text-white mb-4">📊 Class vs Object</h4>
              <table className="min-w-full text-left text-sm border-collapse rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700">
                <thead className="bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300">
                  <tr>
                    <th className="p-3 border-b border-r dark:border-slate-700">Feature</th>
                    <th className="p-3 border-b border-r dark:border-slate-700 text-blue-600 dark:text-blue-400 font-bold">Class</th>
                    <th className="p-3 border-b dark:border-slate-700 text-orange-600 dark:text-orange-400 font-bold">Object</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50"><td className="p-3 border-r dark:border-slate-800 font-bold">Meaning</td><td className="p-3 border-r dark:border-slate-800">Blueprint</td><td className="p-3">Instance</td></tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50"><td className="p-3 border-r dark:border-slate-800 font-bold">Memory</td><td className="p-3 border-r dark:border-slate-800">No memory allocated</td><td className="p-3">Memory allocated</td></tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50"><td className="p-3 border-r dark:border-slate-800 font-bold">Example</td><td className="p-3 border-r dark:border-slate-800 font-mono">Student</td><td className="p-3 font-mono">John</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Lab Area */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center">
            <Terminal className="w-8 h-8 mr-3 text-orange-500" />
            Interactive OOP Lab
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('blueprint')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm ${activeTab === 'blueprint' ? 'bg-orange-500 text-white shadow-orange-500/20' : 'bg-white dark:bg-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              Basics
            </button>
            <button
              onClick={() => setActiveTab('methods')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm ${activeTab === 'methods' ? 'bg-orange-500 text-white shadow-orange-500/20' : 'bg-white dark:bg-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              __init__ & Methods
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
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 min-h-[420px]">
              
              {activeTab === 'blueprint' && (
                <div className="animate-fade-in">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-6 pb-4 border-b border-slate-100 dark:border-slate-700 flex items-center">
                    <Box className="w-5 h-5 mr-2 text-blue-500" /> 3️⃣ & 4️⃣ Classes and Objects
                  </h3>
                  
                  <div className="space-y-4">
                    <p className="text-sm text-slate-600 dark:text-slate-300">Create a blueprint, then instantiate it to spawn an object.</p>
                    
                    <button onClick={() => runDemo('create_class')} className="w-full text-left group">
                      <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-blue-300 dark:hover:border-blue-700 transition-colors relative">
                        <Play className="absolute top-4 right-4 w-5 h-5 text-blue-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                        <h4 className="font-bold text-sm text-blue-600 dark:text-blue-400 mb-2">Step 1: Define Class (Blueprint)</h4>
                        <pre className="font-mono text-xs text-slate-700 dark:text-slate-300">
<span className="text-purple-500">class</span> Student:<br/>
    name = <span className="text-orange-500">"Issac"</span><br/>
    age = <span className="text-emerald-500">19</span>
                        </pre>
                      </div>
                    </button>

                    <button onClick={() => runDemo('create_obj')} className="w-full text-left group">
                      <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-orange-300 dark:hover:border-orange-700 transition-colors relative">
                        <Play className="absolute top-4 right-4 w-5 h-5 text-orange-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                        <h4 className="font-bold text-sm text-orange-600 dark:text-orange-400 mb-2">Step 2: Create Object (Instance)</h4>
                        <pre className="font-mono text-xs text-slate-700 dark:text-slate-300">
s1 = Student() <span className="text-slate-400 italic"># Invokes the class</span><br/>
<br/>
<span className="text-blue-500">print</span>(s1.name)<br/>
<span className="text-blue-500">print</span>(s1.age)
                        </pre>
                      </div>
                    </button>
                    
                    <div className="bg-indigo-50 dark:bg-indigo-900/10 p-4 rounded-xl border border-indigo-100 dark:border-indigo-800/30 flex justify-between items-center text-sm font-mono mt-4">
                      <span className="text-indigo-800 dark:text-indigo-300">Class: <span className="font-bold">Student</span></span>
                      <ArrowRightLeft className="w-4 h-4 text-indigo-400" />
                      <span className="text-indigo-800 dark:text-indigo-300">Object: <span className="font-bold">s1</span></span>
                    </div>

                  </div>
                </div>
              )}

              {activeTab === 'methods' && (
                <div className="animate-fade-in">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-6 pb-4 border-b border-slate-100 dark:border-slate-700 flex items-center">
                    <Cpu className="w-5 h-5 mr-2 text-purple-500" /> 6️⃣ & 8️⃣ Constructors & Methods
                  </h3>
                  
                  <div className="space-y-4">
                    <button onClick={() => runDemo('init_method')} className="w-full text-left group">
                      <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-purple-300 dark:hover:border-purple-700 transition-colors relative">
                        <Play className="absolute top-4 right-4 w-5 h-5 text-purple-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                        <h4 className="font-bold text-sm text-purple-600 dark:text-purple-400 mb-2">The __init__() Constructor</h4>
                        <p className="text-xs text-slate-500 mb-3">Initializes values dynamically when objects are created.</p>
                        <pre className="font-mono text-xs text-slate-700 dark:text-slate-300">
<span className="text-purple-500">class</span> Student:<br/>
    <span className="text-purple-500">def</span> <span className="text-blue-500">__init__</span>(<span className="text-rose-400">self</span>, name, age):<br/>
        <span className="text-rose-400">self</span>.name = name<br/>
        <span className="text-rose-400">self</span>.age = age<br/><br/>
s1 = Student(<span className="text-orange-500">"John"</span>, 20)<br/>
s2 = Student(<span className="text-orange-500">"Emma"</span>, 21)
                        </pre>
                      </div>
                    </button>

                    <button onClick={() => runDemo('call_method')} className="w-full text-left group">
                      <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors relative">
                        <Play className="absolute top-4 right-4 w-5 h-5 text-emerald-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                        <h4 className="font-bold text-sm text-emerald-600 dark:text-emerald-400 mb-2">Class Methods (Behaviors)</h4>
                        <p className="text-xs text-slate-500 mb-3">Methods are functions stored inside a class.</p>
                        <pre className="font-mono text-xs text-slate-700 dark:text-slate-300">
<span className="text-purple-500">class</span> Student:<br/>
    ...<br/>
    <span className="text-purple-500">def</span> <span className="text-blue-500">greet</span>(<span className="text-rose-400">self</span>):<br/>
        <span className="text-blue-500">print</span>(<span className="text-orange-500">"Hello"</span>, <span className="text-rose-400">self</span>.name)<br/><br/>
s1.greet()
                        </pre>
                      </div>
                    </button>

                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 h-full min-h-[420px] shadow-2xl relative overflow-hidden flex flex-col">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#f97316 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
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

                <div className="font-mono text-sm flex flex-col flex-1">
                  {consoleOutput.length === 0 ? (
                    <div className="text-slate-500 animate-pulse flex flex-col items-center justify-center mt-20">
                      <Terminal className="w-12 h-12 mb-4 opacity-20" />
                      <span>Click an operation on the left to execute...</span>
                    </div>
                  ) : (
                    consoleOutput.map((line, i) => (
                      <div key={i} className={`mb-1.5 animate-fade-in ${
                          line.startsWith('>>>') || line.startsWith('...') ? 'text-blue-400 font-bold' :
                          'text-orange-300 font-bold'
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

      {/* 4. Deep Dives: Self, Memory, Real World */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 border-b border-slate-200 dark:border-slate-700 pb-4">
          Core OOP Concepts
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Target className="w-6 h-6 text-rose-500 mr-2" />
                7️⃣ The <code className="ml-2 bg-slate-100 dark:bg-slate-900 px-2 rounded font-mono text-rose-600 dark:text-rose-400">self</code> Keyword
              </h3>
              <p className="mb-4 text-slate-600 dark:text-slate-300"><code className="bg-slate-100 dark:bg-slate-900 px-1 rounded font-mono font-bold text-rose-500">self</code> refers to the <strong className="font-bold">current object</strong> being created or operated on.</p>
              
              <div className="bg-rose-50 dark:bg-rose-900/10 p-5 rounded-xl border border-rose-100 dark:border-rose-800/50 mb-6">
                <p className="text-sm font-mono text-slate-700 dark:text-slate-300 text-center">
                  <span className="font-bold text-rose-600 dark:text-rose-400">self.name</span> <br/>
                  <ArrowDown className="w-4 h-4 mx-auto my-2 text-rose-300" />
                  translates to <br/>
                  <ArrowDown className="w-4 h-4 mx-auto my-2 text-rose-300" />
                  <span className="font-bold">name of the current object</span>
                </p>
              </div>

              <CodeSnippetBlock 
                codeSnippet={`class Car:\n    def __init__(self, brand):\n        self.brand = brand\n\nc1 = Car("BMW")\nprint(c1.brand)\n\n# Output: BMW`} 
              />
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-2" />
                🔟 Multiple Objects Example
              </h3>
              <p className="mb-4 text-slate-600 dark:text-slate-300">You can create as many objects as you want from a single class blueprint.</p>
              <CodeSnippetBlock 
                codeSnippet={`class Car:\n    def __init__(self, brand):\n        self.brand = brand\n\ncar1 = Car("Tesla")\ncar2 = Car("BMW")\ncar3 = Car("Audi")\n\nprint(car1.brand, car2.brand, car3.brand)\n# Tesla BMW Audi`} 
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-8 rounded-2xl shadow-sm border border-indigo-100 dark:border-indigo-800/30 h-full">
              <div className="flex items-center mb-6">
                <Briefcase className="w-8 h-8 text-indigo-500 mr-3" />
                <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-400">9️⃣ Real World Example</h3>
              </div>
              <p className="mb-6 text-indigo-800 dark:text-indigo-300">A Bank Account system combining properties (owner, balance) and behaviors (show_balance).</p>
              
              <CodeSnippetBlock 
                codeSnippet={`class BankAccount:\n    def __init__(self, owner, balance):\n        self.owner = owner\n        self.balance = balance\n\n    def show_balance(self):\n        print(f"Balance: {self.balance}")\n\nacc1 = BankAccount("Issac", 5000)\nacc1.show_balance()\n\n# Output:\n# Balance: 5000`} 
              />

              <div className="mt-8 flex justify-center">
                <button 
                  onClick={() => {setActiveTab('blueprint'); runDemo('real_world'); window.scrollTo(0,0);}}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-lg transition shadow flex items-center"
                >
                  <Play className="w-4 h-4 mr-2" /> Run in Console
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Developer Recommendations & Tips */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
          <h2 className="text-3xl font-extrabold mb-6 flex items-center relative z-10">
            <Lightbulb className="w-8 h-8 mr-3 text-yellow-300" />
            💡 Developer Recommendations
          </h2>
          <p className="text-orange-100 mb-8 font-medium italic relative z-10 text-lg">From a Developer with 15+ years of Python experience:</p>
          
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <h3 className="font-bold text-xl mb-3">1️⃣ Use Classes for Large Programs</h3>
              <p className="text-sm text-orange-100 mb-3">Classes help organize code in large projects to keep it clean and modular.</p>
              <ul className="text-sm font-mono bg-black/20 p-3 rounded-lg text-orange-200">
                <li>• User class</li>
                <li>• Product class</li>
                <li>• Order class</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <h3 className="font-bold text-xl mb-3">2️⃣ Meaningful Class Names</h3>
              <p className="text-sm text-orange-100 mb-3">Always capitalize class names and make them descriptive.</p>
              <div className="space-y-1 mt-3">
                <div className="flex items-center text-emerald-300 text-sm font-mono"><CheckCircle2 className="w-4 h-4 mr-2" /> class Student</div>
                <div className="flex items-center text-rose-300 text-sm font-mono"><XCircle className="w-4 h-4 mr-2" /> class s</div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <h3 className="font-bold text-xl mb-3">3️⃣ Keep Classes Simple</h3>
              <p className="text-sm text-orange-100 mb-3">Each class should represent exactly <strong className="text-white">one concept</strong>. Don't mix everything into one massive class.</p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-8 border-b border-slate-200 dark:border-slate-700 pb-4 flex items-center">
          <Check className="w-8 h-8 text-emerald-500 mr-3" />
          🚀 Tips & Tricks (Modifying Objects)
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-lg mb-4 text-blue-600 dark:text-blue-400 flex items-center"><RefreshCw className="w-4 h-4 mr-2" />Trick 1 — Change Value</h4>
            <p className="text-sm text-slate-500 mb-3">You can overwrite properties after creation.</p>
            <CodeSnippetBlock codeSnippet={`s1 = Student()\ns1.name = "Issac"\nprint(s1.name) # Issac`} />
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-lg mb-4 text-rose-600 dark:text-rose-400 flex items-center"><Eraser className="w-4 h-4 mr-2" />Trick 2 — Delete Property</h4>
            <p className="text-sm text-slate-500 mb-3">Use <code className="font-mono">del</code> to remove a property entirely.</p>
            <CodeSnippetBlock codeSnippet={`del s1.name`} />
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-lg mb-4 text-rose-600 dark:text-rose-400 flex items-center"><Trash2 className="w-4 h-4 mr-2" />Trick 3 — Delete Object</h4>
            <p className="text-sm text-slate-500 mb-3">Use <code className="font-mono">del</code> to destroy the entire object.</p>
            <CodeSnippetBlock codeSnippet={`del s1`} />
          </div>
        </div>
      </section>

      {/* 6. Practice */}
      <section className="max-w-4xl mx-auto pb-16">
        <div className="bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 p-8 rounded-3xl border border-emerald-200 dark:border-emerald-700 shadow-lg relative">
          <Target className="absolute top-6 right-6 w-12 h-12 text-emerald-500/30" />
          <h2 className="text-2xl font-bold text-emerald-900 dark:text-emerald-400 mb-4 flex items-center">
            🧩 Practice Exercise (For Students)
          </h2>
          <p className="mb-4 text-emerald-800 dark:text-emerald-300 font-medium tracking-wide">
            Task: Create a <strong className="font-mono bg-white/30 px-1 rounded">Car</strong> class with:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6 text-emerald-900 dark:text-emerald-200 font-bold bg-white/40 dark:bg-black/20 p-4 rounded-xl max-w-sm">
            <li>brand</li>
            <li>model</li>
          </ul>
          <p className="mb-6 text-emerald-800 dark:text-emerald-300">Then, create two object instances and print them.</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-emerald-500/10 dark:bg-emerald-900/30 p-5 rounded-xl backdrop-blur-sm border border-emerald-500/30">
              <h4 className="font-bold text-sm uppercase tracking-wider text-emerald-800 dark:text-emerald-400 mb-3">Example Output</h4>
              <div className="font-mono text-sm font-bold text-emerald-700 dark:text-emerald-300 bg-white/50 dark:bg-black/30 rounded p-3 shadow-inner">
                Brand: Tesla Model: Model S<br/>
                Brand: BMW Model: X5
              </div>
            </div>

            <div className="bg-white/60 dark:bg-black/40 p-5 rounded-xl backdrop-blur-sm border border-white/50 dark:border-white/10 group relative overflow-hidden">
              <div className="absolute inset-0 bg-slate-900/80 backdrop-blur flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300 z-10 cursor-pointer">
                <span className="text-white font-bold flex items-center bg-emerald-500 px-4 py-2 rounded-lg"><Lightbulb className="w-4 h-4 mr-2" /> Hover for Idea</span>
              </div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-3 flex items-center"><CheckCircle2 className="w-4 h-4 mr-2" /> Example Solution Idea</h4>
              <pre className="font-mono text-xs text-slate-800 dark:text-slate-300">
class Car:<br/>
    def __init__(self, brand, model):<br/>
        self.brand = brand<br/>
        self.model = model
              </pre>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PythonClassesObjects;