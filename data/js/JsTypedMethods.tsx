import React, { useState } from 'react';
import { 
  Wrench, Type, Hash, Layers, Boxes, Zap, Info, Terminal, 
  CodeXml, AlertCircle, CheckCircle, ShieldCheck, Share2, 
  MousePointer2, Settings, Clipboard, Check, Copy, 
  ArrowRight, Maximize2, GitMerge, ListFilter, Braces,
  Binary, FunctionSquare, Globe
} from 'lucide-react';

// ─── Code Block Component ───────────────────────────────────────────────────
const CodeBlock = ({ code, title, language = 'js' }: { code: string; title?: string; language?: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <div className="mb-6 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm relative group w-full">
      {title && (
        <div className="bg-gray-50 dark:bg-gray-800 px-4 py-2.5 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="flex space-x-1.5 grayscale opacity-50">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
            </div>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-2">{title}</span>
          </div>
          <span className="text-[10px] font-bold text-gray-400 uppercase">{language}</span>
        </div>
      )}
      <div className="absolute top-12 right-3 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <button onClick={handleCopy} className="p-2 rounded-lg bg-gray-800/80 backdrop-blur-sm text-gray-400 hover:bg-violet-500 hover:text-white transition-all border border-gray-700 shadow-lg" title="Copy code">
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-5 overflow-x-auto text-sm font-mono bg-[#0d1117] text-violet-300 leading-relaxed rounded-b-xl">
        <code>{code}</code>
      </pre>
    </div>
  );
};

// ─── Transformation Engine Sandbox ──────────────────────────────────────────
const TransformationEngine = () => {
  const [type, setType] = useState<'string' | 'number' | 'array'>('string');
  const [inputVal, setInputVal] = useState<any>("Hello World");
  const [method, setMethod] = useState('');
  const [result, setResult] = useState<any>("Hello World");

  const runMethod = (m: string, fn: any) => {
    setMethod(m);
    setResult(fn(inputVal));
  };

  const types = {
    string: { 
      icon: Type, color: 'bg-indigo-500', initial: "Hello World",
      methods: [
        { name: '.toUpperCase()', fn: (v: string) => v.toUpperCase() },
        { name: '.toLowerCase()', fn: (v: string) => v.toLowerCase() },
        { name: '.slice(0, 5)', fn: (v: string) => v.slice(0, 5) },
        { name: '.includes("World")', fn: (v: string) => v.includes("World").toString() }
      ]
    },
    number: {
      icon: Hash, color: 'bg-emerald-500', initial: 123.456,
      methods: [
        { name: '.toFixed(2)', fn: (v: number) => v.toFixed(2) },
        { name: 'Number.isInteger()', fn: (v: number) => Number.isInteger(v).toString() },
        { name: 'parseInt()', fn: (v: number) => parseInt(v.toString()) }
      ]
    },
    array: {
      icon: Layers, color: 'bg-rose-500', initial: [1, 2, 3],
      methods: [
        { name: '.map(x => x*2)', fn: (v: number[]) => JSON.stringify(v.map(x => x * 2)) },
        { name: '.filter(x => x > 1)', fn: (v: number[]) => JSON.stringify(v.filter(x => x > 1)) },
        { name: '.push(4) / .pop()', fn: (v: number[]) => "[Modifies original array]" }
      ]
    }
  };

  const switchType = (t: any) => {
    setType(t);
    setInputVal(types[t].initial);
    setResult(types[t].initial);
    setMethod('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-[3.5rem] p-8 lg:p-14 border border-gray-200 dark:border-gray-700 shadow-2xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-10 opacity-5 text-indigo-500 transition-transform duration-1000 group-hover:scale-110">
         <Wrench className="w-96 h-96" />
      </div>

      <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
         <div className="lg:col-span-12 space-y-4">
            <h3 className="text-3xl font-black italic tracking-tighter uppercase flex items-center gap-4 underline decoration-indigo-500/20 underline-offset-8">
              <Zap className="text-indigo-500 w-8 h-8" /> Transformation Engine
            </h3>
            <p className="text-sm font-black text-gray-400 uppercase tracking-[0.2em] italic">Selecting data type → Binding methods → Outputting results</p>
         </div>

         <div className="lg:col-span-5 space-y-8">
            <div className="flex gap-3">
               {(['string', 'number', 'array'] as const).map((t) => (
                 <button
                   key={t}
                   onClick={() => switchType(t)}
                   className={`p-4 rounded-3xl border-2 flex flex-col items-center gap-2 flex-1 transition-all ${
                     type === t 
                       ? 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-500 shadow-xl shadow-indigo-500/10' 
                       : 'bg-gray-50 dark:bg-gray-900/50 border-gray-100 dark:border-gray-800 opacity-60'
                   }`}
                 >
                    <div className={`p-2 rounded-xl text-white ${type === t ? types[t].color : 'bg-gray-400'}`}>
                       {React.createElement(types[t].icon, { size: 18 })}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest">{t}</span>
                 </button>
               ))}
            </div>

            <div className="space-y-3">
               <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-2">Apply Method</label>
               <div className="flex flex-col gap-2">
                  {types[type].methods.map((m, i) => (
                    <button
                      key={i}
                      onClick={() => runMethod(m.name, m.fn)}
                      className={`w-full p-4 rounded-2xl text-start font-mono text-xs flex justify-between items-center transition-all ${
                        method === m.name 
                          ? 'bg-indigo-500 text-white shadow-lg' 
                          : 'bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-300'
                      }`}
                    >
                       <span>{m.name}</span>
                       <ArrowRight size={14} className={method === m.name ? 'opacity-100' : 'opacity-0'} />
                    </button>
                  ))}
               </div>
            </div>
         </div>

         <div className="lg:col-span-7 bg-slate-900 rounded-[3rem] p-10 border border-white/5 relative min-h-[300px] flex flex-col justify-between">
            <div className="space-y-6">
               <div className="flex items-center gap-4">
                  <div className="w-1.5 h-10 bg-indigo-500 rounded-full"></div>
                  <div>
                     <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1 italic">Source Input</h4>
                     <code className="text-xl font-black text-white italic">{JSON.stringify(inputVal)}</code>
                  </div>
               </div>

               {method && (
                 <div className="pt-6 border-t border-white/5 animate-in fade-in slide-in-from-left-4">
                    <h4 className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-4 italic">Computed Result</h4>
                    <div className="bg-white/5 p-6 rounded-[2rem] border border-white/10">
                       <code className="text-3xl font-black text-emerald-400 break-all">{result.toString()}</code>
                    </div>
                 </div>
               )}
            </div>

            <div className="mt-8 text-[10px] font-black text-slate-600 uppercase tracking-widest text-end">
               Transformation Ready
            </div>
         </div>
      </div>
    </div>
  );
};

// ─── Main Component ──────────────────────────────────────────────────────────
const JsTypedMethods: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8faff] dark:bg-[#08090b] min-h-screen font-sans text-gray-800 dark:text-gray-200 selection:bg-indigo-100 selection:text-indigo-700">
      
      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-br from-indigo-400/10 to-violet-400/10 rounded-full blur-[120px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-5 bg-gradient-to-tr from-indigo-500 to-violet-600 rounded-[2.5rem] mb-10 shadow-2xl shadow-indigo-500/20 transform hover:scale-110 active:scale-95 transition-all duration-500 cursor-pointer group">
          <Wrench className="w-14 h-14 text-white shadow-xl group-hover:rotate-45 transition-transform" />
        </div>
        <h1 className="text-6xl sm:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tight leading-none uppercase italic">
          Typed <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-600 font-black italic">Methods</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed italic">
          Unlock the powerful built-in functionalities tailored for every data type. Streamline your logic with high-performance transformations and immutable operations.
        </p>
      </header>

      {/* ── 1. What are Typed Methods ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-10">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-100 dark:border-indigo-800/50">
            <Info className="w-4 h-4" /> The Definition
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white leading-none tracking-tighter italic">
            Language-Bound <br /> Capabilities
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
            In JavaScript, every primary data type is equipped with its own set of "Typed Methods"—dedicated functions that allow for seamless manipulation and querying of data based on its structural blueprint.
          </p>

          <div className="p-8 rounded-[3rem] bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/30 flex items-start gap-5">
             <Zap className="text-indigo-500 w-12 h-12 flex-shrink-0 mt-1" />
             <div>
                <span className="text-indigo-500 font-black uppercase text-xs tracking-widest block mb-2 underline decoration-2 underline-offset-4">Logic Pattern</span>
                <p className="text-sm font-bold text-gray-700 dark:text-gray-300 leading-relaxed italic">
                   "Typed methods are purpose-built tools designed to work exclusively with specific types like Strings, Arrays, and Numbers."
                </p>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
           {[
             { border: 'border-rose-100 dark:border-rose-900/30', bg: 'bg-rose-50 dark:bg-rose-950/10', color: 'text-rose-500', title: 'The Old Way', desc: 'Complex logic loops, hard to manipulate data, and manual state tracking 😓' },
             { border: 'border-indigo-100 dark:border-indigo-900/30', bg: 'bg-indigo-50 dark:bg-indigo-950/10', color: 'text-indigo-500', title: 'The Modern Way', desc: 'Powerful transformations, clean readable code, and superior efficiency 😎' }
           ].map((card, i) => (
             <div key={i} className={`p-10 rounded-[3.5rem] border-2 shadow-sm transition-all hover:-translate-y-2 ${card.bg} ${card.border}`}>
                <div className={`${card.color} mb-6`}>{i === 0 ? <AlertCircle size={32} /> : <CheckCircle size={32} />}</div>
                <h4 className="font-black text-gray-900 dark:text-white text-xl mb-4 italic leading-none">{card.title}</h4>
                <p className="text-xs font-bold text-gray-500 dark:text-gray-400 leading-relaxed uppercase tracking-tighter opacity-70 italic">
                   {card.desc}
                </p>
             </div>
           ))}
        </div>
      </section>

      {/* ── INTERACTIVE SANDBOX ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <TransformationEngine />
      </section>

      {/* ── 3. Methods Catalog ── */}
      <section className="max-w-6xl mx-auto mb-32 grid md:grid-cols-2 gap-x-12 gap-y-16">
         {/* String Methods */}
         <div className="space-y-6">
            <h3 className="text-2xl font-black italic flex items-center gap-3">
               <Type className="text-indigo-500" /> String Manipulation
            </h3>
            <p className="text-sm font-bold text-gray-500 uppercase tracking-widest italic opacity-50 border-b border-gray-100 pb-4">Primary text processing methods</p>
            <CodeBlock 
              language="javascript"
              title="String.prototype"
              code={`let text = "Hello World";\n\ntext.toUpperCase();     // "HELLO WORLD"\ntext.toLowerCase();     // "hello world"\ntext.includes("World");  // true\ntext.slice(0, 5);       // "Hello"`} 
            />
         </div>

         {/* Number Methods */}
         <div className="space-y-6">
            <h3 className="text-2xl font-black italic flex items-center gap-3">
               <Binary className="text-emerald-500" /> Numeric Operations
            </h3>
            <p className="text-sm font-bold text-gray-500 uppercase tracking-widest italic opacity-50 border-b border-gray-100 pb-4">Precision and type normalization</p>
            <CodeBlock 
              language="javascript"
              title="Number / Global"
              code={`let num = 123.456;\n\nnum.toFixed(2);       // "123.46"\nNumber.isInteger(num); // false\nparseInt("100");       // 100`} 
            />
         </div>

         {/* Array Methods */}
         <div className="space-y-6">
            <h3 className="text-2xl font-black italic flex items-center gap-3">
               <ListFilter className="text-rose-500" /> Array Collections
            </h3>
            <p className="text-sm font-bold text-gray-500 uppercase tracking-widest italic opacity-50 border-b border-gray-100 pb-4">List processing and functional maps</p>
            <CodeBlock 
              language="javascript"
              title="Array.prototype"
              code={`let arr = [1, 2, 3];\n\narr.push(4);          // [1,2,3,4]\narr.pop();           // [1,2,3]\narr.map(x => x*2);   // [2,4,6]\narr.filter(x => x > 1); // [2,3]`} 
            />
         </div>

         {/* Object Methods */}
         <div className="space-y-6">
            <h3 className="text-2xl font-black italic flex items-center gap-3">
               <Braces className="text-sky-500" /> Object Meta-Data
            </h3>
            <p className="text-sm font-bold text-gray-500 uppercase tracking-widest italic opacity-50 border-b border-gray-100 pb-4">Key/Value pair iterations</p>
            <CodeBlock 
              language="javascript"
              title="Object Constructor"
              code={`let user = { name: "Issac", age: 20 };\n\nObject.keys(user);    // ["name", "age"]\nObject.values(user);  // ["Issac", 20]\nObject.entries(user); // [["name","I"], ["age",20]]`} 
            />
         </div>
      </section>

      {/* ── 5. Function Methods ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-16 items-center">
         <div className="bg-slate-900 p-12 lg:p-20 rounded-[4rem] text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 transition-transform duration-1000 group-hover:rotate-45">
               <FunctionSquare className="w-96 h-96 text-white" />
            </div>
            <div className="relative z-10 space-y-8">
               <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/5 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/20 italic">
                 Functional Execution
               </div>
               <h3 className="text-4xl font-black italic italic leading-none">Function Methods</h3>
               <p className="text-lg text-slate-300 font-medium leading-relaxed italic opacity-80">
                 Functions are also objects in JavaScript. They have built-in methods to control context and execution.
               </p>
               <CodeBlock language="javascript" code={`function greet() {\n  console.log("Hi");\n}\n\ngreet.call();  // Execution\ngreet.apply(); // Execution via Arg list`} />
            </div>
         </div>

         <div className="space-y-12">
            <div className="space-y-6">
               <div className="inline-flex items-center gap-2 px-5 py-2 bg-violet-50 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-violet-100 dark:border-violet-800/50">
                 <GitMerge className="w-4 h-4" /> Fluent API Design
               </div>
               <h3 className="text-4xl font-black italic tracking-tighter uppercase leading-none">Method Chaining</h3>
               <p className="text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed italic">
                 Most string and array methods can be combined into a single continuous chain for highly expressive logic.
               </p>
            </div>
            <CodeBlock 
              language="javascript" 
              title="Execution Chain"
              code={`"hello world"\n  .toUpperCase()\n  .slice(0, 5);\n\n// Output: "HELLO"`} 
            />
         </div>
      </section>

      {/* ── 8. Pro Tips ── */}
      <section className="max-w-6xl mx-auto mb-32 space-y-16">
         <div className="relative p-12 lg:p-24 rounded-[5rem] bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/30 overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-10">
               <ShieldCheck className="w-64 h-64 text-indigo-500" />
            </div>
            <h3 className="text-4xl font-black text-indigo-900 dark:text-indigo-100 mb-16 flex items-center gap-4 italic uppercase tracking-tighter">
              <Zap className="text-indigo-500 animate-pulse" /> Senior Logic Patterns
              <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.4em] ml-auto italic border-b-2 border-indigo-500/20 pb-1">EST. 15 YRS EXP.</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-12 relative z-10 font-sans">
               {[
                 { tip: 'Use Array Methods Instead of Loops', body: 'Prefer map, filter, and reduce. They are declarative, cleaner, and less prone to off-by-one errors.' },
                 { tip: 'Chain Methods Smartly', body: 'Avoid storing intermediate transformation results in unnecessary variables. Maintain a clean data flow.' },
                 { tip: 'Know Immutable vs Mutable', body: 'Strings are IMMUTABLE (methods return fresh values). Arrays are often MUTABLE (original list can change).' },
                 { tip: 'Adopt Modern Standards', body: 'Favor modern high-performance methods like find() and includes() over old-school for-loop manual searches.' }
               ].map((item, i) => (
                 <div key={i} className="bg-white dark:bg-gray-800/90 backdrop-blur-xl p-10 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:scale-[1.03] transition-all hover:shadow-indigo-500/10">
                    <span className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.4em] mb-4 block group-hover:translate-x-2 transition-transform italic underline decoration-indigo-500/20 underline-offset-4">LOGIC_FLOW_0{i+1}</span>
                    <h5 className="font-black text-gray-900 dark:text-white text-xl mb-4 italic leading-tight">{item.tip}</h5>
                    <p className="text-sm font-bold text-gray-500 dark:text-gray-400 leading-relaxed italic opacity-80">{item.body}</p>
                 </div>
               ))}
            </div>
         </div>

         {/* ── 9. Common Mistakes ── */}
         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
            {[
              { title: 'Accidental Mutation', body: 'Modifying the original array in a place where a new one was expected (e.g. using .sort()).' },
              { title: 'map vs forEach Confusion', body: 'Using map() for side-effects without utilizing the returned new array.' },
              { title: 'Return Omission', body: 'Forgetting to include a return statement inside a map or filter callback arrow function.' },
              { title: 'Invalid Type Target', body: 'Attempting to call string-only methods (like .toUpperCase) on a number variable.' }
            ].map((err, i) => (
              <div key={i} className="p-10 rounded-[3.5rem] bg-rose-50/50 dark:bg-rose-950/20 border-2 border-rose-100 dark:border-rose-900/40 transform group transition-all hover:rotate-2">
                 <div className="text-rose-500 mb-8"><AlertCircle size={36} /></div>
                 <h5 className="font-black text-rose-800 dark:text-rose-100 text-sm mb-4 uppercase italic leading-none underline decoration-rose-500/10 underline-offset-4">{err.title}</h5>
                 <p className="text-[11px] text-rose-700/60 dark:text-rose-400 font-bold leading-relaxed italic opacity-80">{err.body}</p>
              </div>
            ))}
         </div>
      </section>

      {/* ── Summary Footer ── */}
      <footer className="max-w-6xl mx-auto mb-20 text-center space-y-12">
         <div className="bg-slate-900 p-12 lg:p-24 rounded-[6rem] relative overflow-hidden group shadow-2xl border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <h2 className="text-6xl font-black text-white mb-8 relative z-10 italic uppercase tracking-tighter leading-none">Execute Your Logic</h2>
            <p className="text-slate-400 max-w-3xl mx-auto mb-12 font-bold relative z-10 italic leading-relaxed text-xl opacity-70">
              "Mastering typed methods is the secret to writing expressive, declarative, and high-performance JavaScript. Own your transformations."
            </p>
            <div className="flex flex-wrap justify-center gap-10 relative z-10">
               <button className="px-14 py-5 bg-indigo-500 text-white rounded-full font-black text-xs uppercase tracking-[0.2em] hover:scale-110 shadow-xl shadow-indigo-500/20 transition-all active:scale-95">Explore Method Library</button>
               <button className="px-14 py-5 border border-slate-700 text-white rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-slate-800 transition-all hover:border-indigo-500/50">MDN Reference</button>
            </div>
         </div>
         <p className="text-[11px] font-black text-gray-400 uppercase tracking-[1.5em] opacity-10 py-10 italic">Method Implementation Layer — KnowGrow Hub v4.0</p>
      </footer>

    </div>
  );
};

export default JsTypedMethods;