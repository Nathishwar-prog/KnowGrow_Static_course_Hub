import React, { useState } from 'react';
import {
  Code, BookOpen, Star, RefreshCw, Box, MonitorPlay,
  FileCode, Cpu, AlertTriangle, Database, FastForward, CheckCircle2,
  Terminal, Check, Copy, Link, Server, FileText, ChevronRight, Play,
  Globe, ArrowRight, Shield, Layers, Activity, Filter, Zap, LayoutList, CheckSquare, Combine, ArrowDown
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

const PythonLambda: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);

  const runDemo = (action: string) => {
    setConsoleOutput([]);
    let output: string[] = [];

    switch (action) {
      case 'basic':
        output = [
          ">>> square = lambda x: x * x",
          ">>> print(square(5))",
          "25"
        ];
        break;
      case 'multiple':
        output = [
          ">>> multiply = lambda x, y, z: x * y * z",
          ">>> print(multiply(2, 3, 4))",
          "24"
        ];
        break;
      case 'map':
        output = [
          ">>> numbers = [1, 2, 3, 4]",
          ">>> result = list(map(lambda x: x * 2, numbers))",
          ">>> print(result)",
          "[2, 4, 6, 8]"
        ];
        break;
      case 'filter':
        output = [
          ">>> numbers = [1, 2, 3, 4, 5, 6]",
          ">>> even_numbers = list(filter(lambda x: x % 2 == 0, numbers))",
          ">>> print(even_numbers)",
          "[2, 4, 6]"
        ];
        break;
      case 'sorted':
        output = [
          ">>> students = [('John', 80), ('Alice', 95), ('Bob', 70)]",
          ">>> sorted_students = sorted(students, key=lambda x: x[1])",
          ">>> print(sorted_students)",
          "[('Bob', 70), ('John', 80), ('Alice', 95)]"
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
        <div className="inline-flex items-center justify-center p-4 bg-orange-100 dark:bg-orange-900/30 rounded-2xl mb-6 shadow-sm border border-orange-200 dark:border-orange-800/50">
          <Zap className="w-10 h-10 text-orange-600 dark:text-orange-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Python Lambda Functions
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          A Lambda function in Python is a small anonymous function that can have any number of arguments but only one expression.
        </p>
      </header>

      {/* 1. Intro & 2. Syntax */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 text-orange-500 mr-3" />
            <h2 className="text-2xl font-bold">1. Introduction to Lambda</h2>
          </div>
          <p className="mb-4 text-slate-600 dark:text-slate-300">
            Unlike normal functions, lambda functions do not require a name and are written in a single line.
          </p>
          <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-xl border border-orange-100 dark:border-orange-800/50 mb-6">
            <p className="font-bold text-orange-800 dark:text-orange-300 text-sm">
              In simple words: A lambda function is a quick way to create small functions without using the <code className="bg-orange-100 dark:bg-orange-800/50 px-1 rounded">def</code> keyword.
            </p>
          </div>
        </div>

        <div className="bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Code className="w-48 h-48 text-white" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center mb-4">
              <Code className="w-6 h-6 text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">2. Syntax</h2>
            </div>
            
            <div className="my-6 bg-slate-800/80 p-4 rounded-xl border border-slate-700 font-mono text-center text-lg shadow-inner">
               <span className="text-orange-400 font-bold">lambda</span> <span className="text-blue-300">arguments</span> : <span className="text-emerald-400">expression</span>
            </div>
            
            <table className="w-full text-sm text-slate-300 border-collapse">
              <thead>
                <tr className="border-b border-slate-700">
                   <th className="py-2 text-left font-bold text-white w-1/3">Component</th>
                   <th className="py-2 text-left font-bold text-white">Meaning</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-800/50">
                  <td className="py-2 font-mono text-orange-400">lambda</td>
                  <td className="py-2">Keyword used to create a lambda function</td>
                </tr>
                <tr className="border-b border-slate-800/50">
                  <td className="py-2 font-mono text-blue-300">arguments</td>
                  <td className="py-2">Input parameters</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-emerald-400">expression</td>
                  <td className="py-2">The operation performed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3. Basic & 4. Multiple Args */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
         <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
             <div className="flex items-center mb-6">
              <Activity className="w-6 h-6 text-blue-500 mr-3" />
              <h2 className="text-2xl font-bold">3. Basic Lambda Example</h2>
            </div>
            
            <h4 className="font-bold text-slate-700 dark:text-slate-300 mb-2">Normal Function:</h4>
            <CodeSnippetBlock codeSnippet={`def square(x):\n    return x * x\n\nprint(square(5)) # 25`} />
            
            <h4 className="font-bold text-slate-700 dark:text-slate-300 mb-2">Lambda Function:</h4>
            <CodeSnippetBlock codeSnippet={`square = lambda x: x * x\nprint(square(5)) # 25`} />
            
            <p className="text-sm text-slate-600 dark:text-slate-400 font-medium italic mt-2">Lambda functions make the code shorter and simpler.</p>
         </div>

         <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
             <div className="flex items-center mb-6">
              <Layers className="w-6 h-6 text-purple-500 mr-3" />
              <h2 className="text-2xl font-bold">4. Multiple Arguments</h2>
            </div>
            <p className="mb-4 text-slate-600 dark:text-slate-300">
              Lambda functions can take multiple parameters separated by commas.
            </p>
            <CodeSnippetBlock 
               title="Adding Two Numbers"
               codeSnippet={`add = lambda a, b: a + b\n\nprint(add(5, 3)) # 8`}
            />
            <CodeSnippetBlock 
               title="Multiplying Three Numbers"
               codeSnippet={`multiply = lambda x, y, z: x * y * z\n\nprint(multiply(2, 3, 4)) # 24`}
            />
         </div>
      </section>

      {/* 5. Inside a function & 9. Execution flow */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-800/30">
          <div className="flex items-center mb-6">
            <Box className="w-8 h-8 text-blue-500 mr-3" />
            <h2 className="text-2xl font-bold dark:text-blue-100">5. Using Lambda Inside a Function</h2>
          </div>
          <p className="mb-6 text-blue-900 dark:text-blue-200">
             Lambda functions are often used inside other functions as anonymous function factories.
          </p>
          <CodeSnippetBlock 
             codeSnippet={`def myfunc(n):\n    return lambda a: a * n\n\ndouble = myfunc(2)\n\nprint(double(10))`}
          />
          <div className="bg-white/60 dark:bg-slate-900/60 p-4 rounded-xl border border-blue-200 dark:border-blue-800/50">
             <div className="text-xs font-bold text-blue-800 dark:text-blue-400 uppercase tracking-wider mb-2">Explanation</div>
             <ul className="text-sm text-blue-900 dark:text-blue-200 space-y-2 list-disc list-inside">
                <li><code className="bg-blue-100 dark:bg-blue-900/50 px-1 rounded">myfunc(2)</code> returns a new lambda function.</li>
                <li>That function multiplies the input <code className="bg-blue-100 dark:bg-blue-900/50 px-1 rounded">a</code> by 2.</li>
                <li>Output is <code className="bg-blue-100 dark:bg-blue-900/50 px-1 rounded font-bold">20</code>.</li>
             </ul>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col items-center">
            <div className="flex items-center mb-6 self-start">
              <Activity className="w-6 h-6 text-emerald-500 mr-3" />
              <h2 className="text-2xl font-bold">9. Lambda Execution Flow</h2>
            </div>

            <div className="flex flex-col items-center py-4 w-full">
               <div className="bg-slate-100 dark:bg-slate-900 border-2 border-emerald-300 dark:border-emerald-700 p-3 rounded-lg w-full max-w-[220px] text-center font-bold text-slate-700 dark:text-slate-200 shadow-sm z-10">
                  Input Arguments <span className="text-xs block font-normal text-slate-500 mt-1">x = 10</span>
               </div>
               
               <div className="flex flex-col items-center my-2 text-emerald-500 py-2">
                 <ArrowDown className="w-5 h-5 mb-1" />
               </div>
               
               <div className="bg-emerald-500 p-3 rounded-lg w-full max-w-[220px] text-center font-bold text-white shadow-sm z-10 font-mono text-sm">
                  lambda x: x + 5
               </div>
               
               <div className="flex flex-col items-center my-2 text-emerald-500 py-2">
                 <ArrowDown className="w-5 h-5 mb-1" />
               </div>
               
               <div className="bg-indigo-500 p-3 rounded-lg w-full max-w-[220px] text-center font-bold text-white shadow-sm z-10 flex flex-col">
                  <span>Return Result</span>
                  <div className="text-xs bg-black/20 mt-1 p-1 rounded font-mono">
                    10 + 5 = 15
                  </div>
               </div>
            </div>
        </div>
      </section>

      {/* 6. Map, 7. Filter, 8. Sorted */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
            <Layers className="w-8 h-8 text-orange-500 mr-3" />
            Built-in Data Processing
          </h2>
          <p className="text-slate-600 dark:text-slate-400">Lambda shines when combined with standard highly-performant Python iteration tools.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
           {/* map() */}
           <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col">
               <div className="flex items-center mb-4 text-emerald-500 font-bold text-xl relative z-10">
                 <RefreshCw className="w-6 h-6 mr-2" /> 6. map()
               </div>
               <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 h-10">
                 Runs the lambda on <strong className="text-slate-800 dark:text-slate-200">every single element</strong> in an iterable to transform data.
               </p>
               <CodeSnippetBlock codeSnippet={`numbers = [1, 2, 3, 4]\n\nresult = list(map(lambda x: x * 2, numbers))\n\nprint(result)`} />
               <div className="bg-slate-100 dark:bg-slate-900 mt-auto p-3 rounded font-mono text-xs text-emerald-600 dark:text-emerald-400 font-bold border border-slate-200 dark:border-slate-800 text-center">
                  [2, 4, 6, 8]
               </div>
           </div>

           {/* filter() */}
           <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col">
               <div className="flex items-center mb-4 text-blue-500 font-bold text-xl relative z-10">
                 <Filter className="w-6 h-6 mr-2" /> 7. filter()
               </div>
               <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 h-10">
                  Runs the lambda and selects elements only if they satisfy the <strong className="text-slate-800 dark:text-slate-200">conditional logic</strong>.
               </p>
               <CodeSnippetBlock codeSnippet={`numbers = [1, 2, 3, 4, 5, 6]\n\neven_nums = list(filter(lambda x: x % 2 == 0, numbers))\n\nprint(even_nums)`} />
               <div className="bg-slate-100 dark:bg-slate-900 mt-auto p-3 rounded font-mono text-xs text-blue-600 dark:text-blue-400 font-bold border border-slate-200 dark:border-slate-800 text-center">
                  [2, 4, 6]
               </div>
           </div>

           {/* sorted() */}
           <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col">
               <div className="flex items-center mb-4 text-purple-500 font-bold text-xl relative z-10">
                 <LayoutList className="w-6 h-6 mr-2" /> 8. sorted()
               </div>
               <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 h-10">
                 Reorders elements smoothly by providing a custom <strong className="text-slate-800 dark:text-slate-200">sorting key</strong> lambda metric.
               </p>
               <div className="mb-2">
                 <CodeSnippetBlock codeSnippet={`students = [\n  ("John", 80),\n  ("Alice", 95),\n  ("Bob", 70)\n]\n\nsorted_students = sorted(students, key=lambda x: x[1])`} />
               </div>
               <div className="bg-slate-100 dark:bg-slate-900 mt-auto p-3 rounded font-mono text-xs text-purple-600 dark:text-purple-400 font-bold border border-slate-200 dark:border-slate-800 text-center">
                  [('Bob', 70), ('John', 80), ...
               </div>
           </div>
        </div>
      </section>

      {/* Interactive Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-lg">
          <div className="bg-slate-100 dark:bg-slate-900/50 p-6 border-b border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center">
              <Play className="w-8 h-8 text-orange-500 mr-3" />
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Python Lambda Lab</h2>
                <p className="text-slate-500 text-sm">Test inline anonymous functions</p>
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
              <button onClick={() => runDemo('basic')} className="w-full text-left p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-400 bg-slate-50 dark:bg-slate-900/50 transition-colors group">
                <div className="font-bold text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 mb-1">1. Basic Lambda</div>
                <div className="text-xs text-slate-500">Run a simple square function.</div>
              </button>
              <button onClick={() => runDemo('multiple')} className="w-full text-left p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 bg-slate-50 dark:bg-slate-900/50 transition-colors group">
                <div className="font-bold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 mb-1">2. Multiple Arguments</div>
                <div className="text-xs text-slate-500">Passing x, y, z arguments inline.</div>
              </button>
              <button onClick={() => runDemo('map')} className="w-full text-left p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-400 bg-slate-50 dark:bg-slate-900/50 transition-colors group">
                <div className="font-bold text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 mb-1">3. map() Iteration</div>
                <div className="text-xs text-slate-500">Multiply all items in a list.</div>
              </button>
              <button onClick={() => runDemo('filter')} className="w-full text-left p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-orange-500 dark:hover:border-orange-400 bg-slate-50 dark:bg-slate-900/50 transition-colors group">
                <div className="font-bold text-orange-600 dark:text-orange-400 group-hover:text-orange-700 dark:group-hover:text-orange-300 mb-1">4. filter() Conditional</div>
                <div className="text-xs text-slate-500">Sift out only 'even' numbers.</div>
              </button>
              <button onClick={() => runDemo('sorted')} className="w-full text-left p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-rose-500 dark:hover:border-rose-400 bg-slate-50 dark:bg-slate-900/50 transition-colors group">
                <div className="font-bold text-rose-600 dark:text-rose-400 group-hover:text-rose-700 dark:group-hover:text-rose-300 mb-1">5. sorted() Key Sorting</div>
                <div className="text-xs text-slate-500">Provide a tuple index to sort by.</div>
              </button>
            </div>

            <div className="bg-slate-900 p-6 min-h-[300px] flex flex-col font-mono relative">
              <div className="text-xs font-bold text-slate-500 mb-4 border-b border-slate-800 pb-2 flex items-center">
                <Terminal className="w-4 h-4 mr-2" /> Python Interactive Console
              </div>
              <div className="flex-1 overflow-y-auto whitespace-pre">
                {consoleOutput.length === 0 ? (
                  <div className="mt-20 text-center text-slate-600 animate-pulse">Select an example to run...</div>
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

      {/* 10. Normal vs Lambda & 11. Real World */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
         <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
           <div className="flex items-center mb-6">
            <Combine className="w-6 h-6 text-indigo-500 mr-3" />
            <h2 className="text-2xl font-bold">10. Normal vs Lambda Function</h2>
          </div>
          
          <table className="w-full mb-6 border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-900/50">
                <th className="p-3 text-left border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-bold">Normal Function</th>
                <th className="p-3 text-left border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-bold">Lambda Function</th>
              </tr>
            </thead>
            <tbody>
               <tr>
                 <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">Defined using <code className="bg-slate-200 dark:bg-slate-700 px-1 rounded">def</code></td>
                 <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">Defined using <code className="bg-slate-200 dark:bg-slate-700 px-1 rounded">lambda</code></td>
               </tr>
               <tr className="bg-slate-50 dark:bg-slate-800/50">
                 <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">Can have multiple statements</td>
                 <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">Only one expression</td>
               </tr>
               <tr>
                 <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">Requires function name</td>
                 <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">Anonymous</td>
               </tr>
               <tr className="bg-slate-50 dark:bg-slate-800/50">
                 <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">Used for complex logic</td>
                 <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">Used for simple operations</td>
               </tr>
            </tbody>
          </table>

          <div className="flex flex-col sm:flex-row gap-4">
             <div className="flex-1">
               <h4 className="font-bold text-slate-700 dark:text-slate-300 text-sm mb-2">Normal:</h4>
               <CodeSnippetBlock codeSnippet={`def add(a, b):\n    return a + b`} />
             </div>
             <div className="flex-1">
               <h4 className="font-bold text-slate-700 dark:text-slate-300 text-sm mb-2">Lambda:</h4>
               <CodeSnippetBlock codeSnippet={`lambda a, b: a + b`} />
             </div>
          </div>
         </div>

         <div className="bg-emerald-50 dark:bg-emerald-900/10 p-8 rounded-2xl shadow-sm border border-emerald-200 dark:border-emerald-800/30 flex flex-col justify-center">
             <div className="flex items-center mb-6">
              <Globe className="w-8 h-8 text-emerald-500 mr-3" />
              <h2 className="text-2xl font-bold dark:text-emerald-100">11. Real-World Use Cases</h2>
            </div>
            
            <div className="space-y-2 mb-6 text-sm text-emerald-900 dark:text-emerald-200">
               <div className="flex items-center"><CheckSquare className="w-4 h-4 mr-2" /> Data analysis & Data science pipelines</div>
               <div className="flex items-center"><CheckSquare className="w-4 h-4 mr-2" /> Sorting datasets</div>
               <div className="flex items-center"><CheckSquare className="w-4 h-4 mr-2" /> Filtering large data</div>
               <div className="flex items-center"><CheckSquare className="w-4 h-4 mr-2" /> Functional programming map/reduce operations</div>
            </div>

            <CodeSnippetBlock 
               title="Example: Price Tax Calculation"
               codeSnippet={`prices = [100, 200, 300]\n\ntaxed = list(map(lambda x: x * 1.18, prices))\n\nprint(taxed)`}
            />
            <div className="bg-emerald-100 dark:bg-emerald-900/50 p-4 rounded-xl border border-emerald-200 dark:border-emerald-700 font-mono text-sm text-emerald-800 dark:text-emerald-300">
                [118.0, 236.0, 354.0]
            </div>
         </div>
      </section>

      {/* 12. Mistakes & 13. Dev Tips */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-r from-orange-500 to-rose-600 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 p-8 opacity-20"><FastForward className="w-48 h-48 text-white" /></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
          
          <h2 className="text-3xl font-extrabold mb-4 flex items-center relative z-10">
            <Star className="w-8 h-8 mr-3 text-yellow-300 fill-yellow-300" />
            13. Personal Developer Tips
          </h2>
          <p className="text-orange-100 mb-10 font-medium italic relative z-10 text-lg border-b border-orange-400/30 pb-4 inline-block">From a Developer with 15+ years of Python experience:</p>
          
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors">
              <h3 className="font-bold text-xl mb-4 flex items-center"><CheckCircle2 className="text-yellow-300 mr-2" /> Tip 1 — Small Tasks</h3>
              <p className="text-sm text-orange-50 mb-4">Lambda functions should be used for simple operations only. Use them strictly for sorting, filtering loops, and simple transformations in-place.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors">
              <h3 className="font-bold text-xl mb-4 flex items-center"><Shield className="text-blue-300 mr-2" /> Tip 2 — Readability</h3>
              <p className="text-sm text-orange-50 mb-4">Avoid overusing Lambda! Large, complex inline lambda expressions drastically reduce code readability. Prefer normal functions for large business logic.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors">
              <h3 className="font-bold text-xl mb-4 flex items-center"><Server className="text-emerald-300 mr-2" /> Tip 3 — Tools combos</h3>
              <p className="text-sm text-orange-50">Lambda works extremely well directly with: <code className="bg-black/30 px-1 rounded block mt-2 text-center">map(), filter(), reduce(), sorted()</code></p>
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
              Using Multiple Statements
            </h4>
            <div className="space-y-4 font-mono text-sm">
              <div className="bg-rose-50 dark:bg-rose-900/20 p-4 rounded border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300">
                <span className="font-bold uppercase text-xs block mb-2">Wrong ❌</span>
                lambda x:<br/>&nbsp;&nbsp;&nbsp;&nbsp;x + 1
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300">
                <span className="font-bold uppercase text-xs block mb-2">Correct ✔</span>
                lambda x: x + 1
              </div>
              <p className="text-slate-500 text-xs italic font-sans mt-2">Note: Lambda must contain only one single expression on one line.</p>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-lg mb-4 flex items-center text-slate-800 dark:text-slate-200">
              <span className="bg-rose-100 text-rose-600 px-2 py-1 rounded text-xs mr-3">Mistake 2</span> 
              Using Lambda for Complex Logic
            </h4>
            <div className="space-y-4 font-mono text-sm">
              <div className="bg-rose-50 dark:bg-rose-900/20 p-4 rounded border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300 overflow-x-auto">
                <span className="font-bold uppercase text-xs block mb-2">Bad Example ❌</span>
                lambda x: x+1 if x{'>'}10 else x*2 if x{'>'}5 else x-1
              </div>
              <p className="text-slate-500 text-sm font-sans mt-2">Better to use normal <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">def</code> functions for nested conditional logic to keep the file maintainable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 14. Practice Exercises */}
      <section className="max-w-4xl mx-auto mb-16 text-center">
         <h2 className="text-3xl font-bold mb-6 flex items-center justify-center">
            <Layers className="w-8 h-8 text-orange-500 mr-3" />
            14. Practice Exercises
         </h2>
         <p className="text-slate-600 dark:text-slate-400 mb-8">Ready to test your knowledge? Try these hands-on challenges.</p>
         
         <div className="space-y-4 text-left">
            <div className="border border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6 shadow-sm">
               <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-2 flex items-center">
                 <span className="bg-orange-600 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs mr-3">1</span> 
                 Exercise 1
               </h3>
               <p className="text-slate-700 dark:text-slate-300">Create a basic standalone lambda function that adds 10 to any provided number.</p>
            </div>
            
            <div className="border border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6 shadow-sm">
               <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-2 flex items-center">
                 <span className="bg-orange-600 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs mr-3">2</span> 
                 Exercise 2
               </h3>
               <p className="text-slate-700 dark:text-slate-300">Use <code className="font-mono bg-orange-100 dark:bg-orange-900/50 px-1 rounded">map()</code> along with a lambda function to square all numbered items in a list.</p>
            </div>
            
            <div className="border border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6 shadow-sm">
               <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-2 flex items-center">
                 <span className="bg-orange-600 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs mr-3">3</span> 
                 Exercise 3
               </h3>
               <p className="text-slate-700 dark:text-slate-300">Use <code className="font-mono bg-orange-100 dark:bg-orange-900/50 px-1 rounded">filter()</code> combined with a lambda to select numbers strictly greater than 50.</p>
            </div>
         </div>
      </section>

    </div>
  );
};

export default PythonLambda;

// Added missing Combine import for lucide-react down here.
// Re-importing at the top.