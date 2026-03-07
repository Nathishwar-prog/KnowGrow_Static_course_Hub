import React, { useState } from 'react';
import {
  Code, BookOpen, Calculator, RefreshCw, Filter, Shield, 
  Settings, Terminal, CheckCircle2, AlertTriangle, Lightbulb, 
  CheckSquare, Check, ArrowDown, MoveRight, Sigma, Network, Grid, Target
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
        </div>
      )}
      <div className="relative group bg-slate-900 border-t border-slate-800">
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-md bg-slate-800 text-slate-400 hover:bg-blue-600 hover:text-white border border-slate-700 z-10"
        >
          {copied ? <Check size={14} /> : <Code size={14} />}
        </button>
        <pre className="p-4 overflow-x-auto text-sm font-mono text-blue-300 leading-relaxed">
          <code>{codeSnippet}</code>
        </pre>
      </div>
    </div>
  );
};

const PythonOperators: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);

  const runDemo = (action: string) => {
    switch (action) {
      case 'arithmetic':
        setConsoleOutput([
          ">>> a = 10",
          ">>> b = 3",
          ">>> print(a + b)",
          "13",
          ">>> print(a / b)",
          "3.3333333333333335",
          ">>> print(a % b)  # Modulus",
          "1",
          ">>> print(a // b) # Floor division",
          "3"
        ]);
        break;
      case 'assignment':
        setConsoleOutput([
          ">>> x = 5",
          ">>> x += 3",
          ">>> print(x)",
          "8",
          ">>> x *= 2",
          ">>> print(x)",
          "16"
        ]);
        break;
      case 'comparison':
        setConsoleOutput([
          ">>> a = 10",
          ">>> b = 5",
          ">>> print(a > b)",
          "True",
          ">>> print(a == b)",
          "False",
          ">>> print(a != b)",
          "True"
        ]);
        break;
      case 'logical':
        setConsoleOutput([
          ">>> x = 10",
          ">>> print(x > 5 and x < 20)",
          "True",
          ">>> print(x > 20 or x < 15)",
          "True",
          ">>> print(not(x > 5))",
          "False"
        ]);
        break;
      case 'identity':
        setConsoleOutput([
          ">>> x = ['apple', 'banana']",
          ">>> y = x",
          ">>> print(x is y)",
          "True",
          ">>> z = ['apple', 'banana']",
          ">>> print(x is z) # Same content, different object",
          "False"
        ]);
        break;
      case 'membership':
        setConsoleOutput([
          ">>> fruits = ['apple', 'banana', 'mango']",
          ">>> print('apple' in fruits)",
          "True",
          ">>> print('grape' not in fruits)",
          "True"
        ]);
        break;
      case 'bitwise':
        setConsoleOutput([
          ">>> a = 5 # 0101",
          ">>> b = 3 # 0011",
          ">>> print(a & b) # AND",
          "1         # 0001",
          ">>> print(a | b) # OR",
          "7         # 0111"
        ]);
        break;
      case 'clear':
        setConsoleOutput([]);
        break;
    }
  };

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-900 min-h-screen font-sans text-slate-800 dark:text-slate-200">
      
      {/* 1. Header & Intro */}
      <header className="max-w-4xl mx-auto text-center mb-16 pt-8">
        <div className="inline-flex items-center justify-center p-4 bg-slate-200 dark:bg-slate-800 rounded-2xl mb-6 shadow-sm border border-slate-300 dark:border-slate-700">
          <Calculator className="w-10 h-10 text-emerald-500 dark:text-emerald-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">Python Operators</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          In Python, operators are special symbols used to perform tasks such as mathematical calculations, comparing values, logical decisions, and bit-level operations.
        </p>
      </header>

      {/* Intro Code & 2. Operator Types */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4 flex items-center text-slate-900 dark:text-white"><BookOpen className="w-6 h-6 mr-3 text-emerald-500" /> 1. Intro Example</h2>
          <p className="mb-4 text-slate-600 dark:text-slate-400 text-sm">
            Here, <code className="bg-slate-100 dark:bg-slate-900 py-0.5 px-2 rounded font-bold text-emerald-600">+</code> is an operator used to add two numbers.
          </p>
          <CodeSnippetBlock codeSnippet={`a = 5\nb = 3\n\nprint(a + b)\n# Output: 8`} />
        </div>

        <div className="lg:col-span-7 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <h2 className="text-2xl font-bold mb-6 flex items-center text-slate-900 dark:text-white"><Filter className="w-6 h-6 mr-3 text-blue-500" /> 2. Types of Operators</h2>
          
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            <div className="p-3 border border-slate-200 dark:border-slate-700 rounded-lg flex items-center bg-slate-50 dark:bg-slate-900/50">
              <span className="font-bold text-slate-800 dark:text-slate-200 mr-2">Arithmetic</span> <span className="text-slate-500 text-xs ml-auto">Perform math (+ - * /)</span>
            </div>
            <div className="p-3 border border-slate-200 dark:border-slate-700 rounded-lg flex items-center bg-slate-50 dark:bg-slate-900/50">
              <span className="font-bold text-slate-800 dark:text-slate-200 mr-2">Assignment</span> <span className="text-slate-500 text-xs ml-auto">Assign values (= +=)</span>
            </div>
            <div className="p-3 border border-slate-200 dark:border-slate-700 rounded-lg flex items-center bg-slate-50 dark:bg-slate-900/50">
              <span className="font-bold text-slate-800 dark:text-slate-200 mr-2">Comparison</span> <span className="text-slate-500 text-xs ml-auto">Compare values (== &gt;)</span>
            </div>
            <div className="p-3 border border-slate-200 dark:border-slate-700 rounded-lg flex items-center bg-slate-50 dark:bg-slate-900/50">
              <span className="font-bold text-slate-800 dark:text-slate-200 mr-2">Logical</span> <span className="text-slate-500 text-xs ml-auto">Combine conditions (and or)</span>
            </div>
            <div className="p-3 border border-slate-200 dark:border-slate-700 rounded-lg flex items-center bg-slate-50 dark:bg-slate-900/50">
              <span className="font-bold text-slate-800 dark:text-slate-200 mr-2">Identity</span> <span className="text-slate-500 text-xs ml-auto">Check memory (is)</span>
            </div>
            <div className="p-3 border border-slate-200 dark:border-slate-700 rounded-lg flex items-center bg-slate-50 dark:bg-slate-900/50">
              <span className="font-bold text-slate-800 dark:text-slate-200 mr-2">Membership</span> <span className="text-slate-500 text-xs ml-auto">Test sequence (in)</span>
            </div>
            <div className="p-3 border border-slate-200 dark:border-slate-700 rounded-lg flex items-center bg-slate-50 dark:bg-slate-900/50 sm:col-span-2">
              <span className="font-bold text-slate-800 dark:text-slate-200 mr-2">Bitwise</span> <span className="text-slate-500 text-xs ml-auto">Bit-level ops (&amp; | &lt;&lt;)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Operators Details */}
      <section className="max-w-6xl mx-auto mb-16 space-y-8">
        <h2 className="text-3xl font-bold flex items-center border-b border-slate-200 dark:border-slate-700 pb-4">
          <Settings className="w-8 h-8 mr-3 text-slate-500" /> Core Operators
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 3. Arithmetic */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col">
             <h3 className="font-bold text-lg mb-4 text-emerald-600 dark:text-emerald-400 flex items-center"><Sigma className="mr-2" /> 3. Arithmetic</h3>
             <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-3 mb-4 text-sm font-mono flex-grow">
               <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 py-1"><span>Addition (+)</span><span>5 + 3 = 8</span></div>
               <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 py-1"><span>Subtraction (-)</span><span>5 - 3 = 2</span></div>
               <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 py-1"><span>Division (/)</span><span>5 / 3 = 1.66</span></div>
               <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 py-1 text-emerald-600 dark:text-emerald-400 font-bold"><span>Floor Div (//)</span><span>5 // 3 = 1</span></div>
               <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 py-1 text-purple-600 dark:text-purple-400 font-bold"><span>Modulus (%)</span><span>5 % 3 = 2</span></div>
               <div className="flex justify-between py-1 text-rose-600 dark:text-rose-400 font-bold"><span>Exponent (**)</span><span>5 ** 2 = 25</span></div>
             </div>
          </div>

          {/* 4. Assignment & 5. Comparison */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col">
             <h3 className="font-bold text-lg mb-4 text-blue-600 dark:text-blue-400 flex items-center"><MoveRight className="mr-2" /> 4. Assignment</h3>
             <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-lg text-sm font-mono mb-4 text-slate-700 dark:text-slate-300">
               <span className="block mb-1"><code className="font-bold text-blue-500">=</code> Assign: x = 5</span>
               <span className="block mb-1"><code className="font-bold text-blue-500">+=</code> Add & Assign: x += 3</span>
               <span className="block mb-1"><code className="font-bold text-blue-500">-=</code> Sub & Assign: x -= 3</span>
               <span className="block"><code className="font-bold text-blue-500">*=</code> Mult & Assign: x *= 3</span>
             </div>

             <h3 className="font-bold text-lg mb-4 text-orange-600 dark:text-orange-400 flex items-center mt-2"><Target className="mr-2" /> 5. Comparison</h3>
             <div className="grid grid-cols-2 gap-2 text-sm font-mono text-center">
               <div className="bg-slate-50 dark:bg-slate-900 p-2 rounded border border-slate-200 dark:border-slate-700"><span className="text-orange-500 font-bold">==</span> Equal</div>
               <div className="bg-slate-50 dark:bg-slate-900 p-2 rounded border border-slate-200 dark:border-slate-700"><span className="text-orange-500 font-bold">!=</span> Not Equal</div>
               <div className="bg-slate-50 dark:bg-slate-900 p-2 rounded border border-slate-200 dark:border-slate-700"><span className="text-orange-500 font-bold">&gt;=</span> Greater Equal</div>
               <div className="bg-slate-50 dark:bg-slate-900 p-2 rounded border border-slate-200 dark:border-slate-700"><span className="text-orange-500 font-bold">&lt;=</span> Less Equal</div>
             </div>
          </div>

          {/* 6. Logical */}
          <div className="bg-slate-900 p-6 rounded-2xl shadow-xl border border-indigo-900 flex flex-col text-white">
             <h3 className="font-bold text-lg mb-4 text-indigo-400 flex items-center"><Network className="mr-2" /> 6. Logical</h3>
             <p className="text-xs text-slate-400 mb-4 flex-grow">Used to combine multiple conditions cleanly.</p>
             <div className="space-y-3 font-mono text-sm">
               <div className="p-3 bg-slate-800 rounded border border-slate-700">
                 <span className="font-bold text-indigo-400 block mb-1">and</span>
                 <span className="text-xs text-slate-300">True if BOTH are true.</span>
               </div>
               <div className="p-3 bg-slate-800 rounded border border-slate-700">
                 <span className="font-bold text-indigo-400 block mb-1">or</span>
                 <span className="text-xs text-slate-300">True if at least ONE is true.</span>
               </div>
               <div className="p-3 bg-slate-800 rounded border border-slate-700">
                 <span className="font-bold text-indigo-400 block mb-1">not</span>
                 <span className="text-xs text-slate-300">Reverses the result.</span>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Advanced Operators (Identity, Membership, Bitwise) */}
      <section className="max-w-6xl mx-auto mb-16 grid md:grid-cols-3 gap-6">
         <div className="bg-slate-100 dark:bg-slate-800/80 p-6 rounded-2xl border border-slate-300 dark:border-slate-700">
            <h3 className="text-lg font-bold mb-3 flex items-center text-purple-600 dark:text-purple-400">7. Identity Operators</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">Compares if two variables refer to the exact same object in memory, not just same values.</p>
            <div className="bg-white dark:bg-slate-900 p-2 rounded font-mono text-xs border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 space-y-1">
              <div><strong className="text-purple-500">is</strong> - Returns True if same object.</div>
              <div><strong className="text-purple-500">is not</strong> - Returns True if different.</div>
            </div>
         </div>
         <div className="bg-slate-100 dark:bg-slate-800/80 p-6 rounded-2xl border border-slate-300 dark:border-slate-700">
            <h3 className="text-lg font-bold mb-3 flex items-center text-rose-600 dark:text-rose-400">8. Membership</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">Checks if a specific value or sequence natively exists within another sequence (list, string).</p>
            <div className="bg-white dark:bg-slate-900 p-2 rounded font-mono text-xs border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 space-y-1">
              <div><strong className="text-rose-500">in</strong> - True if value exists.</div>
              <div><strong className="text-rose-500">not in</strong> - True if it doesn't.</div>
            </div>
         </div>
         <div className="bg-slate-100 dark:bg-slate-800/80 p-6 rounded-2xl border border-slate-300 dark:border-slate-700">
            <h3 className="text-lg font-bold mb-3 flex items-center text-amber-600 dark:text-amber-400"><Grid className="w-5 h-5 mr-2" /> 9. Bitwise</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">Works on raw binary numbers. Used for optimization.</p>
            <div className="grid grid-cols-2 gap-2 bg-white dark:bg-slate-900 p-2 rounded font-mono text-xs border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
              <div><strong className="text-amber-500">&amp;</strong> AND</div>
              <div><strong className="text-amber-500">|</strong> OR</div>
              <div><strong className="text-amber-500">^</strong> XOR</div>
              <div><strong className="text-amber-500">~</strong> NOT</div>
              <div><strong className="text-amber-500">&lt;&lt;</strong> L-Shift</div>
              <div><strong className="text-amber-500">&gt;&gt;</strong> R-Shift</div>
            </div>
         </div>
      </section>

      {/* Interactive Testing Console Lab - Operator Evaluator */}
      <section className="max-w-5xl mx-auto mb-16">
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-lg">
          <div className="bg-slate-100 dark:bg-slate-900 p-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
            <h2 className="text-xl font-bold flex items-center"><Terminal className="mr-2" /> Evaluation Interactive Lab</h2>
            <button onClick={() => runDemo('clear')} className="p-2 bg-slate-200 dark:bg-slate-800 rounded-lg hover:bg-slate-300 transition text-slate-600 dark:text-slate-300 font-bold text-xs flex"><RefreshCw className="w-4 h-4 mr-1"/> Clear</button>
          </div>
          <div className="grid md:grid-cols-3">
            <div className="md:col-span-1 p-4 border-r border-slate-200 dark:border-slate-700 space-y-2 text-sm font-bold bg-slate-50 dark:bg-slate-900/50">
               <button onClick={() => runDemo('arithmetic')} className="w-full text-left p-2 border border-slate-200 dark:border-slate-700 rounded hover:border-emerald-500 bg-white dark:bg-slate-800 transition">Arithmetic Ops</button>
               <button onClick={() => runDemo('assignment')} className="w-full text-left p-2 border border-slate-200 dark:border-slate-700 rounded hover:border-blue-500 bg-white dark:bg-slate-800 transition">Assignment Ops</button>
               <button onClick={() => runDemo('comparison')} className="w-full text-left p-2 border border-slate-200 dark:border-slate-700 rounded hover:border-orange-500 bg-white dark:bg-slate-800 transition">Comparison Ops</button>
               <button onClick={() => runDemo('logical')} className="w-full text-left p-2 border border-slate-200 dark:border-slate-700 rounded hover:border-indigo-500 bg-white dark:bg-slate-800 transition">Logical Evaluator</button>
               <button onClick={() => runDemo('identity')} className="w-full text-left p-2 border border-slate-200 dark:border-slate-700 rounded hover:border-purple-500 bg-white dark:bg-slate-800 transition">Identity Tracking</button>
               <button onClick={() => runDemo('membership')} className="w-full text-left p-2 border border-slate-200 dark:border-slate-700 rounded hover:border-rose-500 bg-white dark:bg-slate-800 transition">Membership Search</button>
               <button onClick={() => runDemo('bitwise')} className="w-full text-left p-2 border border-slate-200 dark:border-slate-700 rounded hover:border-amber-500 bg-white dark:bg-slate-800 transition">Bitwise Shift/Logic</button>
            </div>
            <div className="md:col-span-2 bg-slate-900 p-4 font-mono text-sm leading-relaxed overflow-y-auto h-[340px] relative">
              <div className="text-xs font-bold text-slate-500 mb-2 border-b border-slate-800 pb-2 flex items-center"><Terminal className="w-4 h-4 mr-2" /> Python Engine View</div>
              {consoleOutput.length === 0 ? <span className="text-slate-600">Select an execution scenario to see engine runtime logic...</span> : consoleOutput.map((l, i) => (
                <div key={i} className={l.startsWith('>>>') || l.startsWith('...') ? 'text-blue-400' : l.includes('Error') ? 'text-rose-400 font-bold' : 'text-emerald-300 font-bold'}>{l}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. Execution Flow & 11. Real-World Applications */}
      <section className="max-w-6xl mx-auto mb-16 grid md:grid-cols-2 gap-6">
        <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl flex flex-col items-center border border-slate-800 text-sm">
           <h2 className="text-xl font-bold mb-6 text-emerald-400">10. Operator Execution Flow</h2>
           <div className="flex flex-col items-center space-y-2 font-mono text-slate-300 w-full px-8">
             <div className="bg-slate-800 p-3 rounded border border-slate-700 w-full text-center shadow">Variables (5, 3)</div>
             <ArrowDown className="w-5 h-5 text-slate-500" />
             <div className="bg-blue-900/50 p-3 rounded border border-blue-700 w-full text-center shadow">Operator Applied (+)</div>
             <ArrowDown className="w-5 h-5 text-slate-500" />
             <div className="bg-slate-800 p-3 rounded border border-slate-700 w-full text-center shadow">Calculation Logic</div>
             <ArrowDown className="w-5 h-5 text-slate-500" />
             <div className="bg-emerald-900/40 p-3 rounded border border-emerald-600/50 w-full text-center shadow text-emerald-300 font-bold">Result = 8</div>
           </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
           <h2 className="text-2xl font-bold mb-6 flex items-center text-slate-900 dark:text-white"><Shield className="w-6 h-6 mr-3 text-indigo-500" /> 11. Real-World Scenario</h2>
           <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm">Operators are heavily used in Financial calculations, Data analysis, Game logic, and Web applications.</p>
           <CodeSnippetBlock title="Discount Financial Calculation Example" codeSnippet={`price = 100\ndiscount = 20\n\nfinal_price = price - discount\n\nprint("Final price:", final_price)\n# Output: Final price: 80`} />
        </div>
      </section>

      {/* 12 & 13. Errors & Developer Tips */}
      <section className="max-w-6xl mx-auto mb-16 space-y-6">
        <h2 className="text-2xl font-bold border-b border-slate-200 dark:border-slate-700 pb-2">12. Common Mistakes & 13. Dev Tips</h2>
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-900/50 p-6 rounded-2xl">
             <h3 className="font-bold flex items-center text-rose-700 dark:text-rose-400 mb-4"><AlertTriangle className="mr-2"/> Common Beginner Mistakes</h3>
             <ul className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
               <li>
                 <strong className="block mb-1">1. Confusing `=` and `==`</strong>
                 `=` assigns value. `==` checks for equality.<br/>
                 <span className="text-rose-500">❌ Wrong: if x = 5:</span><br/>
                 <span className="text-emerald-500">✅ Correct: if x == 5:</span>
               </li>
               <li>
                 <strong className="block mb-1">2. Division Returning Float</strong>
                 Normally, strict integer division natively in Python ALWAYS forcefully returns a structural Float object regardless.<br/>
                 <code className="bg-white dark:bg-slate-800 font-mono px-1 rounded">print(10/2) # 5.0</code>
               </li>
             </ul>
          </div>
          
          <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-900/50 p-6 rounded-2xl">
             <h3 className="font-bold flex items-center text-indigo-700 dark:text-indigo-400 mb-4"><Lightbulb className="mr-2"/> Dev Tips (15+ Years Exp)</h3>
             <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
               <li>
                 <strong className="block mb-1"><span className="text-indigo-500">Tip 1:</span> Use Parentheses for Clarity</strong>
                 <span className="font-mono bg-white dark:bg-slate-800 px-1 rounded text-xs">result = (a + b) * c</span> makes execution steps perfectly strictly clear.
               </li>
               <li>
                 <strong className="block mb-1"><span className="text-indigo-500">Tip 2:</span> Avoid Long One-Line Logic Blocks</strong>
                 Group operations heavily cleanly using logic bounds.<br/>
                 <span className="text-emerald-500">✅ Better: if (a &gt; 5 and b &lt; 10) or c == 7:</span>
               </li>
               <li>
                 <strong className="block mb-1"><span className="text-indigo-500">Tip 3:</span> Double Check Conditionals</strong>
                 Always fully rigorously independently test Logical Boolean boundary states accurately to naturally avoid unpredicted behavior.
               </li>
             </ul>
          </div>
        </div>
      </section>

      {/* 14. Practice Exercises */}
      <section className="max-w-4xl mx-auto mb-16 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 shadow-sm">
        <h2 className="text-2xl font-bold flex items-center mb-6"><CheckSquare className="w-6 h-6 mr-3 text-emerald-500" /> 14. Practice Exercises</h2>
        <div className="space-y-4 font-mono text-sm">
          <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg flex items-start border-l-4 border-l-emerald-500">
            <span className="bg-emerald-200 dark:bg-emerald-800 text-emerald-800 dark:text-emerald-200 p-1 rounded mr-3 text-xs">Ex 1</span> Write a basic program clearly natively performing: Addition, Subtraction, Multiplication, and Division.
          </div>
          <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg flex items-start border-l-4 border-l-orange-500">
            <span className="bg-orange-200 dark:bg-orange-800 text-orange-800 dark:text-orange-200 p-1 rounded mr-3 text-xs">Ex 2</span> Write a program using operators that validates if a target tracked number strictly inherently is greater than 10.
          </div>
          <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg flex items-start border-l-4 border-l-rose-500">
            <span className="bg-rose-200 dark:bg-rose-800 text-rose-800 dark:text-rose-200 p-1 rounded mr-3 text-xs">Ex 3</span> Create a list internally and systematically check if a static targeted sequence value formally definitively natively independently exists purely structurally using the explicit <strong className="mx-1">`in`</strong> operator.
          </div>
        </div>
      </section>

    </div>
  );
};

export default PythonOperators;