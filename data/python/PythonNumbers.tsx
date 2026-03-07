import React, { useState } from 'react';
import {
  Code, BookOpen, Calculator, RefreshCw, Activity, Shuffle,
  ArrowRight, Box, Target, AlertTriangle, Lightbulb, User,
  Terminal, CheckCircle2, Play, ChevronRight, XCircle, Check, ArrowDown, CheckSquare
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

const PythonNumbers: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);

  const runDemo = (action: string) => {
    switch (action) {
      case 'int_float':
        setConsoleOutput([">>> x = 10", ">>> print(type(x))", "<class 'int'>", ">>> y = 3.14", ">>> print(type(y))", "<class 'float'>"]);
        break;
      case 'complex':
        setConsoleOutput([">>> c = 3 + 4j", ">>> print(c.real)", "3.0", ">>> print(c.imag)", "4.0"]);
        break;
      case 'conversion':
        setConsoleOutput([">>> x = 5", ">>> print(float(x))", "5.0", ">>> y = 2.5", ">>> print(int(y))", "2"]);
        break;
      case 'math':
        setConsoleOutput([">>> import math", ">>> print(pow(2, 3))", "8", ">>> print(abs(-10))", "10", ">>> print(math.sqrt(16))", "4.0"]);
        break;
      case 'random':
        setConsoleOutput([">>> import random", ">>> print(random.randrange(1, 10))", Math.floor(Math.random() * 9 + 1).toString()]);
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
          <Calculator className="w-10 h-10 text-slate-500 dark:text-slate-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">Python Numbers</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-6">
          In Python, numbers are data types used to store numeric values. Python mainly provides three numeric types used in calculations, data processing, and scientific computing.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm font-bold">
          <span className="px-4 py-2 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-lg">int</span>
          <span className="px-4 py-2 bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 rounded-lg">float</span>
          <span className="px-4 py-2 bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 rounded-lg">complex</span>
        </div>
      </header>

      {/* 2, 3, 4: Int, Float, Complex */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <h2 className="text-xl font-bold mb-4 flex items-center"><Box className="w-5 h-5 mr-3 text-blue-500" /> 2. Integer (int)</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 h-12">
            A whole number without decimals. Positive or negative with unlimited precision.
          </p>
          <CodeSnippetBlock codeSnippet={`x = 10\ny = -5\n\nprint(type(x))\n# <class 'int'>`} />
          <p className="text-xs bg-slate-100 dark:bg-slate-900 p-2 rounded text-slate-500">
            Can handle very large strings: <br/><code className="font-bold">large_number = 9876543210</code>
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <h2 className="text-xl font-bold mb-4 flex items-center"><Activity className="w-5 h-5 mr-3 text-emerald-500" /> 3. Float</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 h-12">
            A floating point number representing numbers with decimal points.
          </p>
          <CodeSnippetBlock codeSnippet={`price = 10.5\nquantity = 3\ntotal = price * quantity\n\nprint(total) # 31.5`} />
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl shadow-xl border border-indigo-900 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10"><Target className="w-32 h-32 text-indigo-400" /></div>
          <div className="relative z-10 text-white">
            <h2 className="text-xl font-bold mb-4 flex items-center"><CheckCircle2 className="w-5 h-5 mr-3 text-indigo-400" /> 4. Complex</h2>
            <p className="text-sm text-slate-300 mb-4 h-12">
              Contains a real and imaginary part. Used in engineering and scientific calcs.
            </p>
            <CodeSnippetBlock codeSnippet={`x = 3 + 4j\n\nprint(x.real) # 3.0\nprint(x.imag) # 4.0`} />
          </div>
        </div>
      </section>

      {/* 5. Type Conversion & 6. Random */}
      <section className="max-w-4xl mx-auto mb-16 grid md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
           <h2 className="text-xl font-bold mb-4 flex items-center">5. Type Conversion</h2>
           <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Python allows direct conversion between number types using built-in functions.</p>
           <CodeSnippetBlock codeSnippet={`x = 5\ny = 2.5\n\nprint(float(x)) # 5.0\nprint(int(y))   # 2\nprint(complex(x)) # (5+0j)`} />
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
           <h2 className="text-xl font-bold mb-4 flex items-center"><Shuffle className="w-5 h-5 mr-3 text-rose-500" /> 6. Random Numbers</h2>
           <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Python generates random numbers using the built-in <code>random</code> module.</p>
           <CodeSnippetBlock codeSnippet={`import random\n\n# Generates random num 1-9\nprint(random.randrange(1, 10))\n# Output: 7`} />
        </div>
      </section>

      {/* 7. Operations & 8. Math */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-2xl font-bold mb-6 flex items-center">7. Operations & 8. Math Functions</h2>
        <div className="grid lg:grid-cols-2 gap-6">
           <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
             <table className="w-full text-sm text-left">
                <thead className="bg-slate-100 dark:bg-slate-900 font-bold text-slate-600 dark:text-slate-400">
                  <tr><th className="p-3">Operator</th><th className="p-3">Name</th><th className="p-3">Example</th></tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  <tr><td className="p-3 font-mono text-emerald-500">+</td><td className="p-3">Addition</td><td className="p-3 font-mono">5 + 3</td></tr>
                  <tr><td className="p-3 font-mono text-emerald-500">-</td><td className="p-3">Subtraction</td><td className="p-3 font-mono">5 - 3</td></tr>
                  <tr><td className="p-3 font-mono text-emerald-500">*</td><td className="p-3">Multiplication</td><td className="p-3 font-mono">5 * 3</td></tr>
                  <tr><td className="p-3 font-mono text-emerald-500">/</td><td className="p-3">Division</td><td className="p-3 font-mono">5 / 2</td></tr>
                  <tr><td className="p-3 font-mono text-emerald-500">%</td><td className="p-3">Modulus</td><td className="p-3 font-mono">5 % 2</td></tr>
                  <tr><td className="p-3 font-mono text-emerald-500">**</td><td className="p-3">Power</td><td className="p-3 font-mono">2 ** 3</td></tr>
                </tbody>
             </table>
           </div>
           
           <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
             <CodeSnippetBlock title="Built-in Math Functions" codeSnippet={`print(abs(-10))    # 10 (Absolute value)\nprint(pow(2, 3))   # 8  (Power)\nprint(round(3.75)) # 4  (Round nearest)`} />
             <CodeSnippetBlock title="The Math Module" codeSnippet={`import math\na = 10\nb = 3\nprint(a / b) # 3.33333333335`} />
           </div>
        </div>
      </section>

      {/* Interactive Testing Console Lab */}
      <section className="max-w-4xl mx-auto mb-16">
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-lg">
          <div className="bg-slate-100 dark:bg-slate-900 p-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
            <h2 className="text-xl font-bold flex items-center"><Terminal className="mr-2" /> Num Console Lab</h2>
            <button onClick={() => runDemo('clear')} className="p-2 bg-slate-200 dark:bg-slate-800 rounded-lg hover:bg-slate-300 transition text-slate-600 dark:text-slate-300 font-bold text-xs flex"><RefreshCw className="w-4 h-4 mr-1"/> Clear</button>
          </div>
          <div className="grid md:grid-cols-2">
            <div className="p-4 border-r border-slate-200 dark:border-slate-700 space-y-2 text-sm font-bold">
               <button onClick={() => runDemo('int_float')} className="w-full text-left p-2 border border-slate-200 dark:border-slate-700 rounded hover:border-blue-500">Int vs Float</button>
               <button onClick={() => runDemo('complex')} className="w-full text-left p-2 border border-slate-200 dark:border-slate-700 rounded hover:border-purple-500">Complex Parts</button>
               <button onClick={() => runDemo('conversion')} className="w-full text-left p-2 border border-slate-200 dark:border-slate-700 rounded hover:border-emerald-500">Type Casting</button>
               <button onClick={() => runDemo('math')} className="w-full text-left p-2 border border-slate-200 dark:border-slate-700 rounded hover:border-orange-500">Math Library</button>
               <button onClick={() => runDemo('random')} className="w-full text-left p-2 border border-slate-200 dark:border-slate-700 rounded hover:border-rose-500">Random Generation</button>
            </div>
            <div className="bg-slate-900 p-4 font-mono text-sm leading-relaxed overflow-y-auto h-64">
              {consoleOutput.length === 0 ? <span className="text-slate-600">Click a scenario...</span> : consoleOutput.map((l, i) => (
                <div key={i} className={l.startsWith('>') ? 'text-blue-400' : 'text-slate-300'}>{l}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9 & 10. Execution Flow & Real World */}
      <section className="max-w-6xl mx-auto mb-16 grid md:grid-cols-2 gap-6">
        <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl flex flex-col items-center border border-slate-800 text-sm">
           <h2 className="text-xl font-bold mb-6">9. Execution Flow Path</h2>
           <div className="flex flex-col items-center space-y-2 font-mono text-slate-300">
             <div className="bg-slate-800 p-2 rounded border border-slate-700">Number Variables</div>
             <ArrowDown className="w-4 h-4" />
             <div className="bg-blue-900/50 p-2 rounded border border-blue-700">Arithmetic Operation</div>
             <ArrowDown className="w-4 h-4" />
             <div className="bg-emerald-900/50 p-2 rounded border border-emerald-700">Result Stored</div>
             <ArrowDown className="w-4 h-4" />
             <div className="bg-slate-800 p-2 rounded border border-slate-700">Output Displayed</div>
           </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
           <h2 className="text-xl font-bold mb-6 text-slate-800 dark:text-slate-200">10. Real-World Applications</h2>
           <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm bg-slate-100 dark:bg-slate-900 p-4 rounded-xl italic">
             "Numeric operations are universally utilized in Data Science, Finance Systems, Game Development, and Scientific Research."
           </p>
           <CodeSnippetBlock title="Grade Calculator" codeSnippet={`math = 85\nscience = 90\nenglish = 80\n\naverage = (math + science + english) / 3\nprint("Average:", average) # 85.0`} />
        </div>
      </section>

      {/* 11 & 12. Errors & Developer Tips */}
      <section className="max-w-6xl mx-auto mb-16 space-y-6">
        <h2 className="text-2xl font-bold border-b border-slate-200 dark:border-slate-700 pb-2">11. Common Mistakes & 12. Dev Tips</h2>
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-900/50 p-6 rounded-2xl">
             <h3 className="font-bold flex items-center text-rose-700 dark:text-rose-400 mb-4"><AlertTriangle className="mr-2"/> Common Beginner Mistakes</h3>
             <ul className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
               <li>
                 <strong className="block mb-1">1. Dividing Integers</strong>
                 Python always returns a float for division. <code className="bg-white dark:bg-slate-800 px-1 rounded">5/2</code> returns 2.5, not 2.
               </li>
               <li>
                 <strong className="block mb-1">2. Mixing String and Number</strong>
                 Cannot concatenate string and int directly.<br/>
                 <span className="text-rose-500">❌ print("Age:" + 20)</span><br/>
                 <span className="text-emerald-500">✅ print("Age:", 20)</span>
               </li>
             </ul>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-900/50 p-6 rounded-2xl">
             <h3 className="font-bold flex items-center text-blue-700 dark:text-blue-400 mb-4"><Lightbulb className="mr-2"/> Dev Tips (15+ Years Exp)</h3>
             <ul className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
               <li>
                 <strong className="block mb-1">Tip 1: Use // for Integer Division</strong>
                 <code className="bg-white dark:bg-slate-800 px-1 rounded">print(10 // 3)</code> outputs exactly 3. Perfect for loops/indices.
               </li>
               <li>
                 <strong className="block mb-1">Tip 2: Float Precision Bugs</strong>
                 <code className="bg-white dark:bg-slate-800 px-1 rounded">0.1 + 0.2</code> outputs <code className="text-rose-500">0.30000000000000004</code> due to floating point precision logic errors natively inside chips.
               </li>
               <li>
                 <strong className="block mb-1">Tip 3: The Math Toolkit</strong>
                 Use <code className="bg-white dark:bg-slate-800 px-1 rounded">import math</code> explicitly for complex scientific processing vs basic built-in tools.
               </li>
             </ul>
          </div>
        </div>
      </section>

      {/* 13. Practice Exercises */}
      <section className="max-w-4xl mx-auto mb-16 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 shadow-sm">
        <h2 className="text-2xl font-bold flex items-center mb-6"><CheckSquare className="w-6 h-6 mr-3 text-emerald-500" /> 13. Practice Exercises</h2>
        <div className="space-y-4 font-mono text-sm">
          <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg flex items-start border-l-4 border-l-blue-500">
            <span className="bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 p-1 rounded mr-3 text-xs">Ex 1</span> Create variables for an integer, float, and complex number. Print their types.
          </div>
          <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg flex items-start border-l-4 border-l-purple-500">
            <span className="bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200 p-1 rounded mr-3 text-xs">Ex 2</span> Write a program that calculates the square of a specific number.
          </div>
          <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg flex items-start border-l-4 border-l-rose-500">
            <span className="bg-rose-200 dark:bg-rose-800 text-rose-800 dark:text-rose-200 p-1 rounded mr-3 text-xs">Ex 3</span> Generate a random number specifically naturally inherently between 1 and 20.
          </div>
        </div>
      </section>

    </div>
  );
};

export default PythonNumbers;