import React, { useState } from 'react';
import { 
  SplitSquareHorizontal, BookOpen, Code, Terminal, Target,
  RefreshCw, Check, Copy, AlertTriangle, Lightbulb,
  CheckCircle2, XCircle, Zap, Globe, Cpu, PlayCircle,
  ArrowRight, KeyRound, MonitorPlay, CheckSquare, ListTree
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
            className="p-1.5 rounded-md bg-slate-800 text-slate-400 hover:bg-emerald-600 hover:text-white transition-colors border border-slate-700"
            title="Copy code"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </div>
        <pre className="p-4 overflow-x-auto text-sm font-mono text-emerald-300 leading-relaxed">
          <code>{codeSnippet}</code>
        </pre>
      </div>
    </div>
  );
};

const PythonIfElse: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);

  const runDemo = (expression: string, result: string, multiline: boolean = false) => {
    if (multiline) {
        setConsoleOutput([`>>> ${expression}`, ...result.split('\\n')]);
    } else {
        const codeStr = `>>> ${expression}\n${result}`;
        setConsoleOutput(codeStr.split('\n'));
    }
  };

  const resetConsole = () => setConsoleOutput([]);

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-900 min-h-screen font-sans text-slate-800 dark:text-slate-200">
      
      {/* 1. Header Area */}
      <header className="max-w-4xl mx-auto text-center mb-16 pt-8">
        <div className="inline-flex items-center justify-center p-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl mb-6 shadow-sm border border-emerald-200 dark:border-emerald-800/50">
          <SplitSquareHorizontal className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Python If...Else
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Make decisions in your code. Execute different blocks depending on whether a condition is True or False.
        </p>
      </header>

      {/* 2. Introduction & Metaphor */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <BookOpen className="w-6 h-6 text-emerald-500 mr-3" />
              1. Intro to Conditionals
            </h2>
            <p className="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              In Python, conditional statements allow the program to make decisions based on certain conditions. The <code className="bg-slate-100 dark:bg-slate-900 px-1 rounded font-mono text-sm border border-slate-200 dark:border-slate-700">if...else</code> statement executes different blocks of code depending on whether a condition is <strong>True</strong> or <strong>False</strong>.
            </p>
            
            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-5 rounded-2xl border border-emerald-100 dark:border-emerald-800/50 mt-6">
              <h4 className="font-bold text-emerald-800 dark:text-emerald-400 mb-3 flex items-center text-sm uppercase tracking-wider">
                <KeyRound className="w-4 h-4 mr-2" /> Real-Life Example
              </h4>
              <p className="text-sm text-emerald-900 dark:text-emerald-300 mb-3 font-medium">Think about a door lock system:</p>
              <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mr-2 shrink-0" /> <span className="font-bold text-emerald-700 dark:text-emerald-400 mr-2">If</span> the password is correct → <span className="text-emerald-600 dark:text-emerald-300">Door opens</span></li>
                  <li className="flex items-center"><XCircle className="w-4 h-4 text-rose-500 mr-2 shrink-0" /> <span className="font-bold text-rose-600 dark:text-rose-400 mr-2">Else</span> → <span className="text-rose-600 dark:text-rose-400">Access denied</span></li>
              </ul>
            </div>
          </div>
          
          <div className="w-full md:w-1/3 bg-slate-900 p-6 rounded-2xl shadow-inner border border-slate-700 text-center relative overflow-hidden flex flex-col items-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500 opacity-10 rounded-full blur-2xl"></div>
              <h4 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-6">Decision Flow</h4>
              <div className="bg-slate-800 px-4 py-2 rounded-lg font-mono font-bold text-emerald-400 mb-2 border border-slate-700 shadow-sm z-10">Condition</div>
              <div className="flex w-full items-center justify-center my-1 z-10 relative">
                  <div className="w-1/2 h-0.5 bg-slate-600 absolute top-1/2 -translate-y-1/2"></div>
                  <div className="w-full flex justify-between px-6 z-10 absolute top-1/2 -translate-y-1/2">
                      <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                      <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                  </div>
              </div>
              <div className="flex w-full justify-between mt-4 z-10 text-xs font-bold uppercase">
                  <span className="text-emerald-500 bg-emerald-900/40 px-3 py-1 rounded border border-emerald-800/50">True</span>
                  <span className="text-rose-500 bg-rose-900/40 px-3 py-1 rounded border border-rose-800/50">False</span>
              </div>
               <div className="flex w-full justify-between mt-4 z-10 text-xs text-slate-300">
                  <span className="bg-slate-800 px-2 py-2 rounded text-center w-20 border border-slate-700">If Block</span>
                  <span className="bg-slate-800 px-2 py-2 rounded text-center w-20 border border-slate-700">Else Block</span>
              </div>
          </div>
        </div>
      </section>

      {/* 3. Syntax Explorer */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 border-b border-slate-200 dark:border-slate-700 pb-4">
          Core Syntax Elements
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-bold mb-2 flex items-center">2. Basic If Statement</h3>
            <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">Executes only if the condition evaluates to True.</p>
            
            <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-xl border border-slate-100 dark:border-slate-800 mb-4 font-mono text-xs text-slate-500">
                <span className="text-blue-500 font-bold">if</span> <span className="text-purple-500">condition</span>:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-400"># code to execute if condition is True</span>
            </div>
            
            <CodeSnippetBlock 
                codeSnippet={`age = 20\n\nif age >= 18:\n    print("You are eligible to vote")\n\n# Output:\n# You are eligible to vote`} 
            />
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-bold mb-2 flex items-center">3. If...Else Statement</h3>
            <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">The <code className="font-mono text-rose-500 text-xs">else</code> block runs when the condition is False.</p>
            
             <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-xl border border-slate-100 dark:border-slate-800 mb-4 font-mono text-xs text-slate-500">
                <span className="text-blue-500 font-bold">if</span> <span className="text-purple-500">condition</span>:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-400"># True block</span><br/>
                <span className="text-blue-500 font-bold">else</span>:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-400"># False block</span>
            </div>
            
            <CodeSnippetBlock 
                codeSnippet={`number = 10\n\nif number > 0:\n    print("Positive number")\nelse:\n    print("Negative number")\n\n# Output:\n# Positive number`} 
            />
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 mb-8">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 flex items-center">
                        <ListTree className="w-6 h-6 text-purple-500 mr-2" />
                        4. If...Elif...Else Statement
                    </h3>
                    <p className="mb-4 text-slate-600 dark:text-slate-300">
                        Sometimes we need to check multiple conditions. Python uses <code className="bg-slate-100 dark:bg-slate-900 px-1 rounded font-mono font-bold text-purple-500">elif</code> (else if) for this purpose.
                    </p>
                    <div className="bg-purple-50 dark:bg-purple-900/10 p-4 rounded-xl border border-purple-100 dark:border-purple-800/20 mb-4">
                        <p className="text-sm text-purple-800 dark:text-purple-300 font-medium mb-1 border-b border-purple-200 dark:border-purple-800/30 pb-2">How it works:</p>
                        <ul className="text-sm mt-3 space-y-1 text-purple-900 dark:text-purple-200">
                            <li>• Python checks conditions from top to bottom.</li>
                            <li>• The <strong>first True condition</strong> is executed.</li>
                            <li>• All subsequent blocks are skipped.</li>
                        </ul>
                    </div>
                </div>
                <div className="flex-1">
                    <CodeSnippetBlock 
                        codeSnippet={`marks = 75\n\nif marks >= 90:\n    print("Grade A")\nelif marks >= 60:\n    print("Grade B")\nelse:\n    print("Grade C")\n\n# Output:\n# Grade B`} 
                    />
                </div>
            </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-800 text-slate-200">
              <h3 className="text-xl font-bold mb-4 text-white">5. Nested If Statements</h3>
              <p className="mb-4 text-sm text-slate-400">An <code className="font-mono text-emerald-400">if</code> statement inside another <code className="font-mono text-emerald-400">if</code> statement is called a nested if.</p>
              
              <CodeSnippetBlock 
                codeSnippet={`age = 20\nhas_id = True\n\nif age >= 18:\n    if has_id:\n        print("You can enter")\n\n# Output:\n# You can enter`} 
              />
            </div>
            
            <div className="space-y-6">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                  <h3 className="text-lg font-bold mb-3">6. Short Hand If</h3>
                  <p className="mb-3 text-sm text-slate-600 dark:text-slate-400">Write simple statements in one line.</p>
                  
                  <div className="bg-slate-900 p-3 rounded-lg font-mono text-sm border-l-4 border-amber-400 text-slate-300">
                    {"if age >= 18: print(\"Adult\")"}
                  </div>
                </div>
                
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                  <h3 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">7. Ternary Operator</h3>
                  <p className="mb-3 text-sm text-slate-600 dark:text-slate-400">One-line shorthand for if...else.</p>
                  
                  <div className="bg-slate-900 p-3 rounded-lg font-mono text-sm border-l-4 border-amber-500 text-slate-300">
                    <div className="text-xs text-slate-500 mb-1">{"# format: [true_val] if [condition] else [false_val]"}</div>
                    {"res = \"Adult\" if age >= 18 else \"Minor\""}
                  </div>
                </div>
            </div>
        </div>
      </section>

      {/* 4. Interactive Simulator */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center">
            <Terminal className="w-8 h-8 mr-3 text-emerald-500" />
            Interactive Logic Lab
          </h2>
          <button
            onClick={resetConsole}
            className="flex items-center px-4 py-2 bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 rounded-lg text-sm font-bold uppercase tracking-wider hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shadow-sm"
          >
            <RefreshCw className="w-4 h-4 mr-2" /> Reset
          </button>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-6 pb-4 border-b border-slate-100 dark:border-slate-700">
                Run Conditional Scripts
              </h3>

              <div className="space-y-4">
                
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-2">8. Logical Operators</h4>
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800 mb-4 flex gap-2 w-full justify-between">
                    <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-xs font-bold font-mono text-center flex-1">and (both)</span>
                    <span className="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300 px-2 py-1 rounded text-xs font-bold font-mono text-center flex-1">or (either)</span>
                    <span className="bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-300 px-2 py-1 rounded text-xs font-bold font-mono text-center flex-1">not (reverse)</span>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  <button onClick={() => runDemo('python script.py', 'Eligible to vote', true)} className="w-full font-mono text-sm p-4 rounded-xl border border-blue-200 dark:border-blue-800/30 bg-blue-50/50 dark:bg-blue-900/10 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition shadow-sm text-left justify-between items-center group flex">
                    <div className="flex flex-col text-slate-700 dark:text-slate-300">
                        <span className="text-blue-600 dark:text-blue-400 mb-1">age = 22; citizen = True</span>
                        <span><span className="text-purple-500 font-bold">if</span> age &gt;= 18 <span className="text-purple-500 font-bold">and</span> citizen:</span>
                        <span className="ml-4">{"print(\"Eligible to vote\")"}</span>
                    </div>
                    <PlayCircle className="w-6 h-6 text-blue-500 opacity-0 group-hover:opacity-100 transition shrink-0 ml-4" />
                  </button>
                </div>

                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-6 pt-4 border-t border-slate-100 dark:border-slate-700">10. Even or Odd Checker</h4>
                 <div className="grid grid-cols-1 gap-3">
                  <button onClick={() => runDemo('python practice.py', 'Enter a number: 7\nOdd number', true)} className="font-mono text-sm p-4 rounded-xl border border-emerald-200 dark:border-emerald-800/30 bg-emerald-50/50 dark:bg-emerald-900/10 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition shadow-sm text-left justify-between items-center group flex">
                    <div className="flex flex-col text-slate-700 dark:text-slate-300">
                        <span className="text-emerald-700 dark:text-emerald-400 mb-1">num = 7</span>
                        <span><span className="text-purple-500 font-bold">if</span> num % 2 === 0:</span>
                        <span className="ml-4">{"print(\"Even number\")"}</span>
                        <span><span className="text-purple-500 font-bold">else</span>:</span>
                        <span className="ml-4">{"print(\"Odd number\")"}</span>
                    </div>
                    <PlayCircle className="w-6 h-6 text-emerald-500 opacity-0 group-hover:opacity-100 transition shrink-0 ml-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 h-full min-h-[350px] shadow-2xl relative overflow-hidden flex flex-col">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <h3 className="font-bold text-slate-300 uppercase text-xs tracking-wider flex items-center">
                    <MonitorPlay className="w-4 h-4 mr-2 text-emerald-500" />
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
                    <div className="text-slate-500 animate-pulse flex flex-col items-center justify-center mt-12">
                      <Terminal className="w-12 h-12 mb-4 opacity-20" />
                      <span>Click to run a block...</span>
                    </div>
                  ) : (
                    consoleOutput.map((line, i) => (
                      <div key={i} className={`mb-1.5 animate-fade-in ${
                          line.startsWith('>>>') ? 'text-emerald-400 font-bold' :
                          'text-slate-300'
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

      {/* 5. Warnings and Best Practices */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 border-b border-slate-200 dark:border-slate-700 pb-4">
          Best Practices & Mistakes
        </h2>

        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 mb-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
                <AlertTriangle className="w-8 h-8 text-rose-500 mr-3" />
                12. Common Beginner Mistakes
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-rose-50 dark:bg-rose-900/10 p-5 rounded-xl border border-rose-100 dark:border-rose-800/30">
                    <h4 className="font-bold font-sm text-rose-800 dark:text-rose-400 mb-3 flex items-center">
                        <span className="w-6 h-6 rounded-full bg-rose-200 dark:bg-rose-900/60 text-center leading-6 mr-2 font-mono text-xs">1</span>
                        Missing Colon
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                        <div><span className="text-xs text-rose-600 block mb-1">Wrong:</span> <code className="bg-rose-100 dark:bg-rose-900/50 p-2 rounded text-rose-800 dark:text-rose-300 block font-mono text-xs whitespace-pre">{"if age > 18\n  print(\"Adult\")"}</code></div>
                        <div><span className="text-xs text-emerald-600 block mb-1">Correct:</span> <code className="bg-emerald-100 dark:bg-emerald-900/50 p-2 rounded text-emerald-800 dark:text-emerald-300 block font-mono text-xs whitespace-pre">{"if age > 18:\n  print(\"Adult\")"}</code></div>
                    </div>
                </div>
                
                <div className="bg-rose-50 dark:bg-rose-900/10 p-5 rounded-xl border border-rose-100 dark:border-rose-800/30">
                    <h4 className="font-bold font-sm text-rose-800 dark:text-rose-400 mb-3 flex items-center">
                        <span className="w-6 h-6 rounded-full bg-rose-200 dark:bg-rose-900/60 text-center leading-6 mr-2 font-mono text-xs">2</span>
                        Incorrect Indentation
                    </h4>
                    <p className="text-xs text-rose-700 dark:text-rose-300 mb-3 border-b border-rose-200 dark:border-rose-800/50 pb-2">Python strictly requires proper indentation.</p>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <span className="text-xs text-rose-600 block mb-1">Wrong:</span> 
                            <div className="bg-rose-100 dark:bg-rose-900/50 p-2 rounded text-rose-800 dark:text-rose-300 font-mono text-xs whitespace-pre">{"if age > 18:\nprint(\"Adult\")"}</div>
                        </div>
                        <div>
                            <span className="text-xs text-emerald-600 block mb-1">Correct:</span> 
                            <div className="bg-emerald-100 dark:bg-emerald-900/50 p-2 rounded text-emerald-800 dark:text-emerald-300 font-mono text-xs whitespace-pre">{"if age > 18:\n    print(\"Adult\")"}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-600 to-teal-500 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
          <h2 className="text-3xl font-extrabold mb-6 flex items-center relative z-10">
            <Lightbulb className="w-8 h-8 mr-3 text-yellow-300" />
            13. Developer Advice (15+ Years Exp)
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            <div className="bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <h3 className="font-bold text-lg mb-3">Tip 1: Avoid Deep Nesting</h3>
              <p className="text-sm text-emerald-50 mb-3">Simplify logic instead of stacking ifs.</p>
              <div className="bg-black/30 p-2 rounded text-xs font-mono mb-2 text-rose-300 whitespace-pre">{"if c1:\n  if c2:\n    if c3:"}</div>
            </div>
            <div className="bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <h3 className="font-bold text-lg mb-3">Tip 2: Use Clear Conditions</h3>
              <p className="text-sm text-emerald-50 mb-3">Don't explicitly check against True or False.</p>
              <div className="bg-black/30 p-2 rounded text-xs font-mono mb-2 text-rose-300">{"Bad: if x == True:"}</div>
              <div className="bg-black/30 p-2 rounded text-xs font-mono text-emerald-300">{"Better: if x:"}</div>
            </div>
            <div className="bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <h3 className="font-bold text-lg mb-3">Tip 3: Chain Operators</h3>
              <p className="text-sm text-emerald-50 mb-3">Combine ranges cleanly.</p>
              <div className="bg-black/30 p-2 rounded text-xs font-mono mb-2 text-rose-300 whitespace-pre">{"if age > 18:\n  if age < 60:"}</div>
              <div className="bg-black/30 p-2 rounded text-xs font-mono text-emerald-300 whitespace-pre">{"if 18 < age < 60:"}</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Real World and Exercises */}
      <section className="max-w-6xl mx-auto pb-16">
        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-700 shadow-xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 pointer-events-none"></div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center relative z-10">
                <Globe className="w-8 h-8 text-blue-400 mr-3" />
                11. Real-World Apps
              </h2>
              <p className="mb-6 text-slate-300 relative z-10">
                Conditional statements are used in many real-world systems:
              </p>
              
              <ul className="grid grid-cols-2 gap-4 mb-6 relative z-10">
                  <li className="bg-slate-800 p-3 rounded-xl border border-slate-700 text-sm font-bold text-slate-300 text-center shadow-inner">Login systems</li>
                  <li className="bg-slate-800 p-3 rounded-xl border border-slate-700 text-sm font-bold text-slate-300 text-center shadow-inner">ATM machines</li>
                  <li className="bg-slate-800 p-3 rounded-xl border border-slate-700 text-sm font-bold text-slate-300 text-center shadow-inner">AI decision models</li>
                  <li className="bg-slate-800 p-3 rounded-xl border border-slate-700 text-sm font-bold text-slate-300 text-center shadow-inner">Game logic</li>
              </ul>
              
              <div className="relative z-10">
                  <CodeSnippetBlock codeSnippet={`password = "xyz123"\nuser_in = input("Pwd: ")\n\nif user_in == password:\n    print("Login Succesful")\nelse:\n    print("Access Denied")`} title="Login System" />
              </div>
            </div>

            <div className="bg-indigo-50 dark:bg-indigo-900/10 p-8 rounded-3xl border border-indigo-200 dark:border-indigo-800 shadow-lg relative">
              <Target className="absolute top-6 right-6 w-12 h-12 text-indigo-500/20" />
              <h2 className="text-2xl font-bold text-indigo-900 dark:text-indigo-400 mb-6 flex items-center">
                <CheckSquare className="w-8 h-8 mr-3 text-indigo-500" />
                14. Practice Exercises
              </h2>
              
              <div className="space-y-4">
                <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-indigo-700 dark:text-indigo-400 mb-2">Exercise 1</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Write a program that checks whether a number is <strong className="text-emerald-500">positive</strong> or <strong className="text-rose-500">negative</strong>.</p>
                </div>

                <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-indigo-700 dark:text-indigo-400 mb-2">Exercise 2</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Write a program that checks if a student passed or failed <span className="text-xs px-2 py-0.5 bg-slate-100 dark:bg-slate-900 rounded font-mono">(pass mark = 40)</span>.</p>
                </div>

                <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-indigo-700 dark:text-indigo-400 mb-2">Exercise 3</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Create a program that takes two inputs and prints the <strong>largest of two numbers</strong>.</p>
                </div>
              </div>
            </div>
        </div>
      </section>

    </div>
  );
};

export default PythonIfElse;