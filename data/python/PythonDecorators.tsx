import React, { useState } from 'react';
import { 
  Gift, PackageOpen, Zap, Layers, 
  Terminal, Target, RefreshCw, Check, Copy, 
  Lightbulb, BookOpen, AlertCircle, Play, 
  ArrowRight, ShieldCheck, Clock, Settings,
  CheckCircle2, BoxSelect
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
                  <span className={isComment ? 'text-neutral-500 italic' : 
                    line.includes('def ') || line.includes('return ') ? 'text-rose-400 font-bold' : 
                    line.startsWith('@') ? 'text-amber-400 font-bold' :
                    line.includes('print') ? 'text-blue-400' : 
                    line.includes('"') || line.includes("'") ? 'text-emerald-400' :
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

const PythonDecorators: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'args' | 'realworld'>('basics');

  const runDemo = (action: string) => {
    let codeStr = '';

    switch (action) {
      case 'first_class':
        codeStr = `>>> def greet():\n...     print("Hello")\n>>> say_hello = greet\n>>> say_hello()\nHello`;
        break;
      case 'manual':
        codeStr = `>>> def my_decorator(func):\n...     def wrapper():\n...         print("Something before the function")\n...         func()\n...         print("Something after the function")\n...     return wrapper\n>>>\n>>> def say_hello():\n...     print("Hello!")\n>>>\n>>> say_hello = my_decorator(say_hello)\n>>> say_hello()\nSomething before the function\nHello!\nSomething after the function`;
        break;
      case 'at_syntax':
        codeStr = `>>> def my_decorator(func):\n...     def wrapper():\n...         print("Before function")\n...         func()\n...         print("After function")\n...     return wrapper\n>>>\n>>> @my_decorator\n... def greet():\n...     print("Hello")\n>>>\n>>> greet()\nBefore function\nHello\nAfter function`;
        break;
      case 'args':
        codeStr = `>>> def decorator(func):\n...     def wrapper(name):\n...         print("Welcome!")\n...         func(name)\n...     return wrapper\n>>>\n>>> @decorator\n... def greet(name):\n...     print("Hello", name)\n>>>\n>>> greet("Issac")\nWelcome!\nHello Issac`;
        break;
      case 'multiple':
        codeStr = `>>> def decorator1(func):\n...     def wrapper():\n...         print("Decorator 1")\n...         func()\n...     return wrapper\n>>>\n>>> def decorator2(func):\n...     def wrapper():\n...         print("Decorator 2")\n...         func()\n...     return wrapper\n>>>\n>>> @decorator1\n... @decorator2\n... def say_hi():\n...     print("Hi!")\n>>>\n>>> say_hi()\nDecorator 1\nDecorator 2\nHi!`;
        break;
      case 'auth':
        codeStr = `>>> def login_required(func):\n...     def wrapper():\n...         print("Checking login...")\n...         func()\n...     return wrapper\n>>>\n>>> @login_required\n... def dashboard():\n...     print("Welcome to Dashboard")\n>>>\n>>> dashboard()\nChecking login...\nWelcome to Dashboard`;
        break;
      case 'timing':
        codeStr = `>>> import time\n>>> def timer(func):\n...     def wrapper():\n...         start = time.time()\n...         func()\n...         end = time.time()\n...         print("Execution time:", round(end - start, 5))\n...     return wrapper\n>>>\n>>> @timer\n... def process():\n...     for i in range(1000000):\n...         pass\n>>>\n>>> process()\nExecution time: 0.05423`;
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
          <Layers className="w-10 h-10 text-fuchsia-600 dark:text-fuchsia-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Python Decorators
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Unlock Python's meta-programming horsepower. Learn how to wrap, modify, and supercharge your functions without changing their source code.
        </p>
      </header>

      {/* 2. What is & Analogy */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 text-fuchsia-500 mr-3" />
            <h2 className="text-2xl font-bold">1️⃣ What is a Decorator?</h2>
          </div>
          <p className="mb-6 text-slate-600 dark:text-slate-300">
            A Decorator is a function that <strong className="text-fuchsia-600 dark:text-fuchsia-400">modifies the behavior of another function</strong> without changing its original code.
          </p>
          
          <div className="mb-6 bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
            <h4 className="font-bold text-sm text-slate-500 uppercase tracking-wider mb-3">Common Uses</h4>
            <div className="grid grid-cols-2 gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
               <div className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-emerald-500" /> Logging</div>
               <div className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-emerald-500" /> Auth & Privacy</div>
               <div className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-emerald-500" /> Performance</div>
               <div className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-emerald-500" /> Input Validation</div>
            </div>
          </div>

          <div className="bg-fuchsia-50 dark:bg-fuchsia-900/10 p-5 rounded-xl border border-fuchsia-100 dark:border-fuchsia-800/30 flex items-start">
            <Layers className="w-6 h-6 text-fuchsia-600 dark:text-fuchsia-400 mr-3 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-fuchsia-900 dark:text-fuchsia-300 mb-1">In Simple Terms</h4>
              <p className="text-sm text-fuchsia-800 dark:text-fuchsia-200">
                Decorator → <span className="font-bold">Wraps</span> another function and adds extra functionality.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 p-8 rounded-2xl shadow-sm border border-indigo-100 dark:border-indigo-800/30 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Gift className="w-48 h-48 text-indigo-900" />
          </div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-2xl font-bold text-indigo-900 dark:text-indigo-300 mb-2">2️⃣ The Gift Analogy</h2>
            <p className="text-indigo-700 dark:text-indigo-400 mb-8 max-w-sm mx-auto">Think of a gift box. The gift remains the same, but the wrapper adds appearance or features.</p>
            
            <div className="flex flex-col items-center justify-center space-y-3">
              <div className="bg-white dark:bg-slate-800 border-2 border-fuchsia-400 text-fuchsia-600 dark:text-fuchsia-400 font-bold px-6 py-3 rounded-lg w-48 shadow-lg shadow-fuchsia-500/20 transform hover:-translate-y-1 transition-transform">
                Wrapper (Decorator)
              </div>
              <ArrowRight className="w-6 h-6 text-indigo-400 rotate-90" />
              <div className="bg-white dark:bg-slate-800 border-2 border-indigo-400 text-indigo-600 dark:text-indigo-400 font-bold px-6 py-3 rounded-lg w-48 shadow-lg">
                Gift (Original func)
              </div>
              <ArrowRight className="w-6 h-6 text-emerald-400 rotate-90" />
              <div className="bg-emerald-500 text-white font-bold px-6 py-3 rounded-lg w-48 shadow-lg shadow-emerald-500/30">
                Modified Output!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Decorator Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center">
            <Settings className="w-8 h-8 mr-3 text-fuchsia-500" />
            Interactive Decorator Lab
          </h2>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setActiveTab('basics')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm ${activeTab === 'basics' ? 'bg-fuchsia-600 text-white shadow-fuchsia-500/20' : 'bg-white dark:bg-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              Basics & Syntax
            </button>
            <button
              onClick={() => setActiveTab('args')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm ${activeTab === 'args' ? 'bg-fuchsia-600 text-white shadow-fuchsia-500/20' : 'bg-white dark:bg-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              Args & Stacking
            </button>
            <button
              onClick={() => setActiveTab('realworld')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm ${activeTab === 'realworld' ? 'bg-fuchsia-600 text-white shadow-fuchsia-500/20' : 'bg-white dark:bg-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              Real World Demos
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
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 min-h-[550px] overflow-y-auto">
              
              {activeTab === 'basics' && (
                <div className="animate-fade-in space-y-6">
                  
                  <button onClick={() => runDemo('first_class')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-slate-400 dark:hover:border-slate-600 transition-colors relative">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-slate-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300 mb-1 flex items-center">3️⃣ Functions as First-Class Objects</h4>
                      <p className="text-xs text-slate-500 mb-3">In Python, functions can be saved to variables and passed around!</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
<span className="text-rose-500 font-bold">def</span> greet():<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-500">print</span>(<span className="text-emerald-500">"Hello"</span>)<br/><br/>
<span className="text-slate-400 italic"># Passed like a variable, NO PARENTHESES</span><br/>
say_hello = greet <br/><br/>
say_hello()
                      </pre>
                    </div>
                  </button>

                  <button onClick={() => runDemo('manual')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors relative">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-indigo-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-indigo-600 dark:text-indigo-400 mb-1 flex items-center">4️⃣ Creating a Simple Decorator</h4>
                      <p className="text-xs text-slate-500 mb-3">Manually passing a function inside another function.</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
<span className="text-rose-500 font-bold">def</span> my_decorator(func):<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-rose-500 font-bold">def</span> wrapper():<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-500">print</span>(<span className="text-emerald-500">"Before"</span>)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;func() <span className="text-slate-400 italic"># Running original code</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-500">print</span>(<span className="text-emerald-500">"After"</span>)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-rose-500 font-bold">return</span> wrapper<br/><br/>
<span className="text-rose-500 font-bold">def</span> say_hello(): <span className="text-blue-500">print</span>(<span className="text-emerald-500">"Hello!"</span>)<br/><br/>
<span className="text-slate-400 italic"># Manual decoration</span><br/>
say_hello = my_decorator(say_hello)
                      </pre>
                    </div>
                  </button>

                  <button onClick={() => runDemo('at_syntax')} className="w-full text-left group">
                    <div className="bg-fuchsia-50 dark:bg-fuchsia-900/10 border-2 border-fuchsia-200 dark:border-fuchsia-800/50 rounded-xl p-4 hover:border-fuchsia-400 dark:hover:border-fuchsia-600 transition-colors relative shadow-sm">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-fuchsia-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-fuchsia-700 dark:text-fuchsia-400 mb-1 flex items-center">5️⃣ The `@` Syntax (Pythonic Way)</h4>
                      <p className="text-xs text-fuchsia-600 dark:text-fuchsia-500/80 mb-3">Python provides a clean, elegant syntax using <code className="font-bold">@</code>.</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white/60 dark:bg-slate-950/50 p-3 rounded-lg border border-fuchsia-100 dark:border-fuchsia-800/30">
<span className="text-rose-500 font-bold">def</span> my_decorator(func): ...<br/><br/>
<span className="text-amber-500 font-bold text-sm bg-amber-100 dark:bg-amber-900/40 px-1 rounded animate-pulse">@my_decorator</span><br/>
<span className="text-rose-500 font-bold">def</span> greet():<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-500">print</span>(<span className="text-emerald-500">"Hello"</span>)<br/><br/>
greet()
                      </pre>
                    </div>
                  </button>
                </div>
              )}

              {activeTab === 'args' && (
                <div className="animate-fade-in space-y-6">
                  
                  <button onClick={() => runDemo('args')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-blue-300 dark:hover:border-blue-700 transition-colors relative mb-4">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-blue-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-blue-600 dark:text-blue-400 mb-1">6️⃣ Decorators with Arguments</h4>
                      <p className="text-xs text-slate-500 mb-3">The `wrapper` must accept the same arguments as the original function!</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
<span className="text-rose-500 font-bold">def</span> decorator(func):<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-400 italic"># Note the 'name' parameter</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-rose-500 font-bold">def</span> wrapper(<span className="text-amber-500 font-bold">name</span>):<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-500">print</span>(<span className="text-emerald-500">"Welcome!"</span>)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;func(<span className="text-amber-500 font-bold">name</span>)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-rose-500 font-bold">return</span> wrapper<br/><br/>
<span className="text-amber-500 font-bold text-sm">@decorator</span><br/>
<span className="text-rose-500 font-bold">def</span> greet(<span className="text-amber-500 font-bold">name</span>):<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-500">print</span>(<span className="text-emerald-500">"Hello"</span>, name)
                      </pre>
                    </div>
                  </button>

                  <div className="py-2">
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 mb-4">7️⃣ Multiple Stacked Decorators</h3>
                    <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-xl border border-blue-100 dark:border-blue-800/30 mb-4 flex">
                       <BoxSelect className="w-5 h-5 text-blue-500 mr-2 shrink-0"/>
                       <p className="text-xs text-blue-800 dark:text-blue-300">
                         Python evaluates stacked decorators from <strong className="font-bold">bottom up</strong>, meaning the decorator closest to the function wraps it first!
                       </p>
                    </div>
                  </div>

                  <button onClick={() => runDemo('multiple')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-blue-300 dark:hover:border-blue-700 transition-colors relative">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-blue-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
<span className="text-amber-500 font-bold text-sm">@decorator1</span><br/>
<span className="text-amber-500 font-bold text-sm">@decorator2</span><br/>
<span className="text-rose-500 font-bold">def</span> say_hi():<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-500">print</span>(<span className="text-emerald-500">"Hi!"</span>)
                      </pre>
                    </div>
                  </button>
                </div>
              )}

              {activeTab === 'realworld' && (
                <div className="animate-fade-in space-y-6">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex justify-between items-center">
                    <span>8️⃣ & 9️⃣ Real-World Scenarios</span>
                  </h3>
                  
                  <button onClick={() => runDemo('auth')} className="w-full text-left group">
                    <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800/30 rounded-xl p-4 hover:border-emerald-400 dark:hover:border-emerald-600 transition-colors relative shadow-sm">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-emerald-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-emerald-700 dark:text-emerald-400 mb-1 flex items-center"><ShieldCheck className="w-4 h-4 mr-2"/> Login Auth Decorator</h4>
                      <p className="text-xs text-emerald-600 dark:text-emerald-500/80 mb-3">Very commonly used in Django and Flask to block users.</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white/60 dark:bg-slate-950/50 p-3 rounded-lg border border-emerald-100 dark:border-emerald-800/30">
<span className="text-rose-500 font-bold">def</span> login_required(func):<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-rose-500 font-bold">def</span> wrapper():<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-500">print</span>(<span className="text-emerald-500">"Checking login..."</span>)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;func()<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-rose-500 font-bold">return</span> wrapper<br/><br/>
<span className="text-amber-500 font-bold">@login_required</span><br/>
<span className="text-rose-500 font-bold">def</span> dashboard(): ...
                      </pre>
                    </div>
                  </button>

                  <button onClick={() => runDemo('timing')} className="w-full text-left group">
                    <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/30 rounded-xl p-4 hover:border-amber-400 dark:hover:border-amber-600 transition-colors relative shadow-sm">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-amber-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-amber-700 dark:text-amber-400 mb-1 flex items-center"><Clock className="w-4 h-4 mr-2"/> Performance Timing</h4>
                      <p className="text-xs text-amber-600 dark:text-amber-500/80 mb-3">Measures how long any function takes to run.</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white/60 dark:bg-slate-950/50 p-3 rounded-lg border border-amber-100 dark:border-amber-800/30">
<span className="text-rose-500 font-bold">import</span> time<br/><br/>
<span className="text-rose-500 font-bold">def</span> timer(func):<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-rose-500 font-bold">def</span> wrapper():<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;start = time.time()<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;func()<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;end = time.time()<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-500">print</span>(<span className="text-emerald-500">"Execution time:"</span>, end - start)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-rose-500 font-bold">return</span> wrapper
                      </pre>
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
                    Python Shell Output
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
                      <span>Execute a decorated function...</span>
                    </div>
                  ) : (
                    <div className="space-y-1.5">
                    {consoleOutput.map((line, i) => {
                      // Apply custom coloring logic for the terminal output based on common decorator prints
                      let colorClass = "text-slate-300"; // default
                      if (line.startsWith('>>>') || line.startsWith('...')) colorClass = "text-blue-400 font-bold opacity-75";
                      else if (line.includes('Before') || line.includes('After') || line.includes('Checking') || line.includes('Welcome!')) colorClass = "text-fuchsia-400 font-bold tracking-wide";
                      else if (line.includes('Execution')) colorClass = "text-amber-400 font-bold";
                      else if (line.includes('Hello') || line.includes('Welcome') || line.includes('Hi!')) colorClass = "text-emerald-400 font-bold";
                      else if (line.includes('Decorator')) colorClass = "text-fuchsia-400";
                      
                      return (
                      <div key={i} className={`animate-fade-in ${colorClass}`}>
                        {line}
                      </div>
                    )})}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Optional step viz diagram in shell */}
              {activeTab === 'realworld' && consoleOutput.length > 0 && consoleOutput.join().includes('Execution') && (
                 <div className="mt-6 border-t border-slate-700/50 pt-4 animate-fade-in">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">🔟 Execution Flow</h4>
                    <div className="flex justify-between items-center text-xs font-mono">
                      <div className="bg-slate-800 text-fuchsia-400 px-2 py-1 rounded">@Intercept</div>
                      <ArrowRight className="w-3 h-3 text-slate-600"/>
                      <div className="bg-slate-800 text-amber-400 px-2 py-1 rounded">Start timer</div>
                      <ArrowRight className="w-3 h-3 text-slate-600"/>
                      <div className="bg-slate-800 text-emerald-400 px-2 py-1 rounded">func()</div>
                      <ArrowRight className="w-3 h-3 text-slate-600"/>
                      <div className="bg-slate-800 text-amber-400 px-2 py-1 rounded">End timer</div>
                    </div>
                 </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Tips & Recommendations */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-r from-fuchsia-700 via-purple-700 to-indigo-800 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden mb-12 border border-fuchsia-600">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-fuchsia-400 opacity-20 rounded-full blur-3xl"></div>
          
          <h2 className="text-3xl font-extrabold mb-6 flex items-center relative z-10">
            <Lightbulb className="w-8 h-8 mr-3 text-yellow-300" />
            💡 Developer Recommendations
          </h2>
          <p className="text-fuchsia-100 mb-8 font-medium italic relative z-10 text-lg">From a Developer with 15+ years of Python experience:</p>
          
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-colors">
              <h3 className="font-bold text-xl mb-3 flex items-center">1️⃣ Write Reusable Logic</h3>
              <p className="text-sm text-fuchsia-100 mb-3">Don't repeat code! If you find yourself writing the same Auth or Logging code inside 10 endpoints, rip it out into a single Decorator!</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-colors">
              <h3 className="font-bold text-xl mb-3">2️⃣ Keep them Simple</h3>
              <p className="text-sm text-fuchsia-100 mb-3">Huge, monolithic decorators are impossible to read and debug. It is fundamentally better to write 3 small specialized decorators and <strong className="text-white bg-black/30 px-1 rounded">@stack</strong> them.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-colors">
              <h3 className="font-bold text-xl mb-3">3️⃣ Use functools.wraps</h3>
              <p className="text-sm text-fuchsia-100 mb-3">Decorators wipe out your original function's `__name__` and `__doc__` string. ALWAYS use python's built-in <code className="text-fuchsia-300 bg-black/40 px-1 font-mono text-xs rounded">@wraps()</code> to preserve your metadata!</p>
<pre className="text-[10px] font-mono bg-black/50 p-2 rounded text-slate-300 mt-2">
from functools import wraps<br/>
def dec(func):<br/>
&nbsp;&nbsp;&nbsp;&nbsp;@wraps(func)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;def wrp(): func()
</pre>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Practice */}
      <section className="max-w-4xl mx-auto pb-16">
        <div className="bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 p-8 rounded-3xl border border-indigo-200 dark:border-indigo-700 shadow-lg relative">
          <Target className="absolute top-6 right-6 w-12 h-12 text-indigo-500/30" />
          <h2 className="text-2xl font-bold text-indigo-900 dark:text-indigo-400 mb-4 flex items-center">
            🧩 Practice Exercise
          </h2>
          <p className="mb-4 text-indigo-800 dark:text-indigo-300 font-medium tracking-wide">
            Task: Create a decorator that prints "Starting function..." right before running whatever function is passed into it.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-indigo-50 dark:bg-slate-900 p-5 rounded-xl border border-indigo-200 dark:border-indigo-800">
              <h4 className="font-bold text-sm uppercase tracking-wider text-indigo-800 dark:text-indigo-400 mb-3">Target Output</h4>
              <div className="font-mono text-sm font-bold text-slate-700 dark:text-slate-300 bg-white/50 dark:bg-black/30 rounded p-4 shadow-inner leading-relaxed">
                Starting function...<br/>
                Hello World
              </div>
            </div>

            <div className="bg-white/60 dark:bg-black/40 p-5 rounded-xl backdrop-blur-sm border border-white/50 dark:border-white/10 group relative overflow-hidden">
               <div className="absolute inset-0 bg-slate-900/80 backdrop-blur flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300 z-10 cursor-pointer">
                <span className="text-white font-bold flex items-center bg-indigo-600 px-4 py-2 rounded-lg"><Lightbulb className="w-4 h-4 mr-2" /> Hover for Solution</span>
              </div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-3 flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-indigo-500" /> Example Solution</h4>
              <pre className="font-mono text-xs text-slate-800 dark:text-slate-300">
def start_decorator(func):<br/>
&nbsp;&nbsp;&nbsp;&nbsp;def wrapper():<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("Starting function...")<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;func()<br/>
&nbsp;&nbsp;&nbsp;&nbsp;return wrapper<br/><br/>
@start_decorator<br/>
def say_hello():<br/>
&nbsp;&nbsp;&nbsp;&nbsp;print("Hello World")<br/><br/>
say_hello()
              </pre>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PythonDecorators;