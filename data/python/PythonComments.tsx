import React, { useState } from 'react';
import { 
  MessageSquare, CheckCircle2, AlertTriangle, Lightbulb, 
  BookOpen, Terminal, Target, RefreshCw, Check, Copy, 
  Code, EyeOff, LayoutTemplate, Users, Zap, Play
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
              const isCommentUrl = line.trim().startsWith('#') || line.trim().startsWith('"""') || line.trim().endsWith('"""');
              return (
                <div key={index} className={`${highlightLines.includes(index) ? 'bg-neutral-800/80 -mx-4 px-4 py-0.5 border-l-2 border-emerald-500' : ''}`}>
                  <span className={isCommentUrl ? 'text-neutral-500 italic' : line.includes('print') ? 'text-blue-400' : line.includes('=') ? 'text-neutral-300' : 'text-emerald-400'}>
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

const PythonComments: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'single' | 'multi' | 'inline' | 'disable'>('single');

  const runDemo = (action: string) => {
    let codeStr = '';

    switch (action) {
      case 'hello_world':
        codeStr = `Hello World`;
        break;
      case 'single':
        codeStr = `Welcome to Python`;
        break;
      case 'multi1':
        codeStr = `Learning Python`;
        break;
      case 'multi2':
        codeStr = `Python is easy`;
        break;
      case 'inline':
        codeStr = `30`;
        break;
      case 'disable':
        codeStr = `Start Program\nEnd Program`;
        break;
      case 'real_world':
        codeStr = `Total Marks: 240`;
        break;
      case 'visualization':
        codeStr = `15`;
        break;
    }

    setConsoleOutput(codeStr.split('\n'));
  };

  const resetConsole = () => setConsoleOutput([]);

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-900 min-h-screen font-sans text-slate-800 dark:text-slate-200">
      
      {/* 1. Header Area */}
      <header className="max-w-4xl mx-auto text-center mb-16 pt-8">
        <div className="inline-flex items-center justify-center p-4 bg-neutral-200 dark:bg-neutral-800 rounded-2xl mb-6 shadow-sm border border-neutral-300 dark:border-neutral-700">
          <MessageSquare className="w-10 h-10 text-neutral-600 dark:text-neutral-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Python Comments
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Document your code, explain logic, and debug effectively. Learn how to write meaningful comments that make your programs readable.
        </p>
      </header>

      {/* 2. What are Comments & Why? */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 text-neutral-500 mr-3" />
            <h2 className="text-2xl font-bold">1️⃣ What are Comments?</h2>
          </div>
          <p className="mb-4 text-slate-600 dark:text-slate-300">
            A comment is a line in the code that Python <strong className="font-bold text-rose-500">ignores during execution</strong>.
          </p>
          
          <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 mb-6 flex flex-col items-center">
            <EyeOff className="w-10 h-10 text-neutral-400 mb-3" />
            <h4 className="font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide text-sm">Invisible to the computer</h4>
            <p className="text-sm text-center text-slate-500">Comments are meant strictly for humans to read. The machine skips right over them.</p>
          </div>

          <CodeSnippetBlock 
            codeSnippet={`# This is a comment\nprint("Hello World")`} 
            highlightLines={[0]}
          />
          <button 
            onClick={() => runDemo('hello_world')}
            className="w-full text-center text-xs font-bold uppercase tracking-wider bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-600 dark:text-neutral-400 py-2 rounded-lg transition"
          >
            Run to see output
          </button>
        </div>

        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col justify-between">
          <div>
            <div className="flex items-center mb-4">
              <Lightbulb className="w-6 h-6 text-yellow-500 mr-3" />
              <h2 className="text-2xl font-bold">2️⃣ Why they matter?</h2>
            </div>
            <p className="mb-6 text-slate-600 dark:text-slate-300">
              Comments make programs infinitely easier to understand, especially when returning to code months later.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start bg-emerald-50 dark:bg-emerald-900/10 p-3 rounded-lg border border-emerald-100 dark:border-emerald-800/30">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                <span className="text-sm font-medium text-emerald-900 dark:text-emerald-200">Explain complex logic</span>
              </li>
              <li className="flex items-start bg-blue-50 dark:bg-blue-900/10 p-3 rounded-lg border border-blue-100 dark:border-blue-800/30">
                <Users className="w-5 h-5 text-blue-500 mr-3 shrink-0" />
                <span className="text-sm font-medium text-blue-900 dark:text-blue-200">Help future developers understand the flow</span>
              </li>
              <li className="flex items-start bg-indigo-50 dark:bg-indigo-900/10 p-3 rounded-lg border border-indigo-100 dark:border-indigo-800/30">
                <LayoutTemplate className="w-5 h-5 text-indigo-500 mr-3 shrink-0" />
                <span className="text-sm font-medium text-indigo-900 dark:text-indigo-200">Improve overall code readability</span>
              </li>
              <li className="flex items-start bg-rose-50 dark:bg-rose-900/10 p-3 rounded-lg border border-rose-100 dark:border-rose-800/30">
                <AlertTriangle className="w-5 h-5 text-rose-500 mr-3 shrink-0" />
                <span className="text-sm font-medium text-rose-900 dark:text-rose-200">Useful for temporarily disabling code (debugging)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Interactive Lab Area */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center">
            <Terminal className="w-8 h-8 mr-3 text-neutral-500" />
            Interactive Comment Lab
          </h2>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setActiveTab('single')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm ${activeTab === 'single' ? 'bg-neutral-600 text-white shadow-neutral-500/20' : 'bg-white dark:bg-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              Single-Line
            </button>
            <button
              onClick={() => setActiveTab('multi')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm ${activeTab === 'multi' ? 'bg-neutral-600 text-white shadow-neutral-500/20' : 'bg-white dark:bg-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              Multi-Line
            </button>
            <button
              onClick={() => setActiveTab('inline')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm ${activeTab === 'inline' ? 'bg-neutral-600 text-white shadow-neutral-500/20' : 'bg-white dark:bg-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              Inline
            </button>
            <button
              onClick={() => setActiveTab('disable')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm ${activeTab === 'disable' ? 'bg-neutral-600 text-white shadow-neutral-500/20' : 'bg-white dark:bg-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              Debugging
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
              
              {activeTab === 'single' && (
                <div className="animate-fade-in">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-6 pb-4 border-b border-slate-100 dark:border-slate-700 flex items-center">
                    <Code className="w-5 h-5 mr-2 text-neutral-500" /> 3️⃣ Single-Line Comments
                  </h3>
                  
                  <div className="space-y-4">
                    <p className="text-sm text-slate-600 dark:text-slate-300">A single-line comment starts with the <strong className="font-mono text-blue-500 text-lg">#</strong> symbol.</p>
                    
                    <button onClick={() => runDemo('single')} className="w-full text-left group">
                      <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors relative">
                        <Play className="absolute top-4 right-4 w-5 h-5 text-neutral-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                        <pre className="font-mono text-sm text-slate-700 dark:text-slate-300">
<span className="text-neutral-400 italic"># This program prints a message</span><br/>
<span className="text-blue-500">print</span>(<span className="text-orange-500">"Welcome to Python"</span>)
                        </pre>
                      </div>
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'multi' && (
                <div className="animate-fade-in">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-6 pb-4 border-b border-slate-100 dark:border-slate-700 flex items-center">
                    <Code className="w-5 h-5 mr-2 text-neutral-500" /> 4️⃣ Multi-Line Comments
                  </h3>
                  
                  <div className="space-y-4">
                    <p className="text-sm text-slate-600 dark:text-slate-300">Python doesn't have a special multi-line symbol. We use multiple <code className="font-mono font-bold">#</code> or triple quotes.</p>
                    
                    <button onClick={() => runDemo('multi1')} className="w-full text-left group">
                      <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors relative">
                        <Play className="absolute top-4 right-4 w-5 h-5 text-neutral-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                        <h4 className="font-bold text-xs text-neutral-500 uppercase mb-2 tracking-wider">Method 1: Multiple Hashtags</h4>
                        <pre className="font-mono text-xs text-slate-700 dark:text-slate-300">
<span className="text-neutral-400 italic"># This is a program<br/># that explains<br/># Python comments</span><br/>
<span className="text-blue-500">print</span>(<span className="text-orange-500">"Learning Python"</span>)
                        </pre>
                      </div>
                    </button>

                    <button onClick={() => runDemo('multi2')} className="w-full text-left group">
                      <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors relative">
                        <Play className="absolute top-4 right-4 w-5 h-5 text-neutral-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                        <h4 className="font-bold text-xs text-neutral-500 uppercase mb-2 tracking-wider">Method 2: Triple Quotes</h4>
                        <pre className="font-mono text-xs text-slate-700 dark:text-slate-300">
<span className="text-neutral-400 italic">"""<br/>This is a multi-line comment<br/>used for explanation<br/>"""</span><br/><br/>
<span className="text-blue-500">print</span>(<span className="text-orange-500">"Python is easy"</span>)
                        </pre>
                      </div>
                      <p className="text-xs text-rose-500 mt-2 flex"><AlertTriangle className="w-3 h-3 mr-1 inline" /> Triple quotes are technically strings not assigned to variables, but act as comments.</p>
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'inline' && (
                <div className="animate-fade-in">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-6 pb-4 border-b border-slate-100 dark:border-slate-700 flex items-center">
                    <Code className="w-5 h-5 mr-2 text-neutral-500" /> 5️⃣ Comments Inside Code
                  </h3>
                  
                  <div className="space-y-4">
                    <p className="text-sm text-slate-600 dark:text-slate-300">Comments can be placed safely at the end of a line of code.</p>
                    
                    <button onClick={() => runDemo('inline')} className="w-full text-left group">
                      <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors relative">
                        <Play className="absolute top-4 right-4 w-5 h-5 text-neutral-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                        <pre className="font-mono text-sm text-slate-700 dark:text-slate-300">
x = <span className="text-emerald-500">10</span>  <span className="text-neutral-400 italic"># store value 10</span><br/>
y = <span className="text-emerald-500">20</span>  <span className="text-neutral-400 italic"># store value 20</span><br/><br/>
<span className="text-blue-500">print</span>(x + y)
                        </pre>
                      </div>
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'disable' && (
                <div className="animate-fade-in">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-6 pb-4 border-b border-slate-100 dark:border-slate-700 flex items-center">
                    <Code className="w-5 h-5 mr-2 text-neutral-500" /> 6️⃣ Commenting Out Code (Debugging)
                  </h3>
                  
                  <div className="space-y-4">
                    <p className="text-sm text-slate-600 dark:text-slate-300">Developers disable code temporarily using comments to find bugs or test logic.</p>
                    
                    <button onClick={() => runDemo('disable')} className="w-full text-left group">
                      <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors relative">
                        <Play className="absolute top-4 right-4 w-5 h-5 text-neutral-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                        <pre className="font-mono text-sm text-slate-700 dark:text-slate-300">
<span className="text-blue-500">print</span>(<span className="text-orange-500">"Start Program"</span>)<br/><br/>
<span className="text-neutral-400 italic bg-rose-100 dark:bg-rose-900/30 px-1 line-through"># print("This line is disabled")</span><br/><br/>
<span className="text-blue-500">print</span>(<span className="text-orange-500">"End Program"</span>)
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
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#737373 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <h3 className="font-bold text-slate-300 uppercase text-xs tracking-wider flex items-center">
                    <Terminal className="w-4 h-4 mr-2" />
                    Console Output
                  </h3>
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                  </div>
                </div>

                <div className="font-mono text-sm flex flex-col flex-1">
                  {consoleOutput.length === 0 ? (
                    <div className="text-slate-500 animate-pulse flex flex-col items-center justify-center mt-24">
                      <Terminal className="w-12 h-12 mb-4 opacity-20" />
                      <span>Click an operation on the left to execute...</span>
                    </div>
                  ) : (
                    consoleOutput.map((line, i) => (
                      <div key={i} className={`mb-1.5 animate-fade-in text-neutral-300 font-bold tracking-wide`}>
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

      {/* 4. Code Visualization & Real World */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 border-b border-slate-200 dark:border-slate-700 pb-4">
          Structuring with Comments
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <LayoutTemplate className="w-6 h-6 text-indigo-500 mr-2" />
                7️⃣ Code Visualization
              </h3>
              <p className="mb-4 text-slate-600 dark:text-slate-300">Using comments to break down code into readable logical steps.</p>
              
              <CodeSnippetBlock 
                codeSnippet={`# Step 1: store numbers\na = 5\nb = 10\n\n# Step 2: calculate sum\nsum = a + b\n\n# Step 3: print result\nprint(sum)`} 
                highlightLines={[0, 4, 7]}
              />

              <div className="mt-6 bg-indigo-50 dark:bg-indigo-900/10 p-5 rounded-xl border border-indigo-100 dark:border-indigo-800/30">
                <h4 className="font-bold text-indigo-800 dark:text-indigo-400 mb-4 text-sm uppercase tracking-wider text-center">Program Flow</h4>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <div className="bg-white dark:bg-slate-800 px-3 py-2 rounded-lg text-sm font-bold text-indigo-700 dark:text-indigo-300 shadow-sm border border-indigo-200 dark:border-indigo-800">Store values</div>
                  <span className="text-indigo-400">&rarr;</span>
                  <div className="bg-white dark:bg-slate-800 px-3 py-2 rounded-lg text-sm font-bold text-indigo-700 dark:text-indigo-300 shadow-sm border border-indigo-200 dark:border-indigo-800">Add numbers</div>
                  <span className="text-indigo-400">&rarr;</span>
                  <div className="bg-white dark:bg-slate-800 px-3 py-2 rounded-lg text-sm font-bold text-indigo-700 dark:text-indigo-300 shadow-sm border border-indigo-200 dark:border-indigo-800">Display result</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/10 dark:to-teal-900/10 p-8 rounded-2xl shadow-sm border border-emerald-100 dark:border-emerald-800/30 h-full">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-emerald-500 mr-3" />
                <h3 className="text-2xl font-bold text-emerald-900 dark:text-emerald-400">8️⃣ Real World Example</h3>
              </div>
              <p className="mb-6 text-emerald-800 dark:text-emerald-300">A Student Marks Calculation system neatly documented.</p>
              
              <CodeSnippetBlock 
                codeSnippet={`# Student marks\nmath = 80\nscience = 75\nenglish = 85\n\n# Calculate total marks\ntotal = math + science + english\n\n# Print result\nprint("Total Marks:", total)\n\n# Output:\n# Total Marks: 240`} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Developer Recommendations & Tips */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-r from-neutral-700 to-slate-800 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
          <h2 className="text-3xl font-extrabold mb-6 flex items-center relative z-10">
            <Lightbulb className="w-8 h-8 mr-3 text-yellow-400" />
            💡 Developer Recommendations
          </h2>
          <p className="text-neutral-300 mb-8 font-medium italic relative z-10 text-lg">From a Developer with 15+ years of Python experience:</p>
          
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <h3 className="font-bold text-xl mb-3 flex items-center">1️⃣ Meaningful Comments</h3>
              <p className="text-sm text-neutral-300 mb-3">Don't state the obvious. Explain the <span className="font-bold text-white">WHY</span>, not the <span className="font-bold text-white">WHAT</span>.</p>
              <code className="bg-rose-900/50 p-2 rounded text-xs block font-mono mb-2 text-rose-300 border border-rose-500/30 line-through"># add numbers<br/>x = x + 1</code>
              <code className="bg-emerald-900/50 p-2 rounded text-xs block font-mono text-emerald-300 border border-emerald-500/30"># Increase counter for next iteration<br/>x = x + 1</code>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <h3 className="font-bold text-xl mb-3">2️⃣ Don't Overuse Comments</h3>
              <p className="text-sm text-neutral-300 mb-3">Code should be self-explanatory. Use good variable naming!</p>
              <code className="bg-rose-900/50 p-2 rounded text-xs block font-mono mb-2 text-rose-300 border border-rose-500/30 line-through"># store 10<br/>x = 10</code>
              <code className="bg-emerald-900/50 p-2 rounded text-xs block font-mono text-emerald-300 border border-emerald-500/30"><span className="text-neutral-500 italic"># (No comment needed)</span><br/>total_students = 10</code>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <h3 className="font-bold text-xl mb-3">3️⃣ Explain Business Logic</h3>
              <p className="text-sm text-neutral-300 mb-3">Use comments to explain real-world rules that aren't obvious from syntax.</p>
              <code className="bg-black/30 p-2 rounded text-xs block font-mono"># Apply discount if purchase exceeds 1000<br/>if price &gt; 1000:<br/>    price = price * 0.9</code>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-8 border-b border-slate-200 dark:border-slate-700 pb-4 flex items-center">
          <Zap className="w-8 h-8 text-yellow-500 mr-3" />
          🚀 Editor Tips & Tricks
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-lg mb-4 text-blue-600 dark:text-blue-400">Trick 1 — Keyboard Shortcut</h4>
            <p className="text-sm text-slate-500 mb-3">Most editors (like VSCode) use this to instantly comment/uncomment lines:</p>
            <div className="flex justify-center my-6">
              <div className="bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 px-4 py-2 rounded-lg font-mono font-bold text-slate-700 dark:text-slate-300 shadow-sm flex items-center">
                <kbd className="bg-white dark:bg-slate-700 px-2 py-1 rounded shadow-sm border dark:border-slate-600 mr-2">Ctrl</kbd> + <kbd className="bg-white dark:bg-slate-700 px-2 py-1 rounded shadow-sm border dark:border-slate-600 ml-2">/</kbd>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-lg mb-4 text-rose-600 dark:text-rose-400">Trick 2 — Find Errors Fast</h4>
            <p className="text-sm text-slate-500 mb-3">Comment out lines one by one to isolate where an error is happening.</p>
            <CodeSnippetBlock codeSnippet={`print("Step 1")\n\n# print("Step 2")\n\nprint("Step 3")`} />
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-lg mb-4 text-purple-600 dark:text-purple-400">Trick 3 — Document Functions</h4>
            <p className="text-sm text-slate-500 mb-3">Always explain what a custom function does before defining it.</p>
            <CodeSnippetBlock codeSnippet={`# Function to calculate square\ndef square(num):\n    return num * num`} />
          </div>
        </div>
      </section>

      {/* 6. Practice */}
      <section className="max-w-4xl mx-auto pb-16">
        <div className="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 p-8 rounded-3xl border border-blue-200 dark:border-blue-700 shadow-lg relative">
          <BookOpen className="absolute top-6 right-6 w-12 h-12 text-blue-500/30" />
          <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-400 mb-4 flex items-center">
            🧩 Practice Exercise (For Students)
          </h2>
          <p className="mb-4 text-blue-800 dark:text-blue-300 font-medium tracking-wide">
            Task: Write a Python program that does the following, and add comments explaining each step:
          </p>
          <ul className="list-decimal list-inside space-y-2 mb-6 text-blue-900 dark:text-blue-200 font-bold bg-white/40 dark:bg-black/20 p-4 rounded-xl max-w-sm">
            <li>Stores two numbers</li>
            <li>Adds them</li>
            <li>Prints the result</li>
          </ul>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-500/10 dark:bg-blue-900/30 p-5 rounded-xl backdrop-blur-sm border border-blue-500/30">
              <h4 className="font-bold text-sm uppercase tracking-wider text-blue-800 dark:text-blue-400 mb-3">Expected Output</h4>
              <div className="font-mono text-lg font-bold text-blue-700 dark:text-blue-300 bg-white/50 dark:bg-black/30 rounded p-4 text-center shadow-inner">
                Sum: 25
              </div>
            </div>

            <div className="bg-white/60 dark:bg-black/40 p-5 rounded-xl backdrop-blur-sm border border-white/50 dark:border-white/10 group relative overflow-hidden">
               <div className="absolute inset-0 bg-slate-900/80 backdrop-blur flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300 z-10 cursor-pointer">
                <span className="text-white font-bold flex items-center bg-blue-500 px-4 py-2 rounded-lg"><Lightbulb className="w-4 h-4 mr-2" /> Hover for Idea</span>
              </div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-3 flex items-center"><LayoutTemplate className="w-4 h-4 mr-2" /> Example Structure</h4>
              <pre className="font-mono text-xs text-slate-800 dark:text-slate-300">
<span className="text-slate-500 italic"># store numbers</span><br/>
a = 10<br/>
b = 15<br/><br/>
<span className="text-slate-500 italic"># calculate sum</span><br/>
sum = a + b<br/><br/>
<span className="text-slate-500 italic"># display result</span><br/>
print(sum)
              </pre>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PythonComments;