import React, { useState, useMemo } from 'react';
import { 
  Play, 
  RotateCcw, 
  Search, 
  Filter, 
  Shuffle, 
  Layers, 
  Code2, 
  CheckCircle, 
  ShieldCheck,
  Terminal, 
  ArrowRight,
  Monitor,
  Cpu,
  RefreshCw,
  Zap,
  Box,
  Hash,
  Copy,
  Check,
  Package,
  Activity,
  Infinity,
  Database,
  Eye,
  Settings,
  Target,
  PlusCircle,
  MinusCircle,
  Scissors,
  Table,
  AlertTriangle,
  Globe,
  ShoppingCart,
  BarChart3,
  Layout
} from 'lucide-react';

// ─── Shared Components ────────────────────────────────────────────────────────

const CodeBlock = ({ code, title, language = 'javascript' }: { code: string; title?: string; language?: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="mb-6 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg relative group w-full bg-[#1e1e1e]">
      {title && (
        <div className="bg-[#252526] px-4 py-3 border-b border-gray-800 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <span className="ml-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">{title}</span>
          </div>
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-md hover:bg-gray-700 text-gray-400 transition-colors"
            title="Copy code"
          >
            {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
          </button>
        </div>
      )}
      <pre className="p-5 overflow-x-auto text-sm font-mono leading-relaxed text-gray-300 scrollbar-thin scrollbar-thumb-gray-700">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-sky-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
  <div className="mb-8">
    <h2 className="text-3xl font-black flex items-center text-gray-900 dark:text-white mb-2 tracking-tight">
      <div className={`p-2.5 rounded-2xl bg-white dark:bg-gray-800 mr-4 shadow-xl border border-gray-100 dark:border-gray-700 ${color}`}>
        <Icon size={28} />
      </div>
      {title}
    </h2>
    {subtitle && <p className="text-gray-500 dark:text-gray-400 ml-16 font-medium leading-relaxed">{subtitle}</p>}
  </div>
);

const MethodCard = ({ 
  icon: Icon, 
  title, 
  description, 
  code, 
  output, 
  colorClass = "sky",
  badge = "Standard"
}: { 
  icon: any; 
  title: string; 
  description: string; 
  code: string; 
  output: string;
  colorClass?: string;
  badge?: string;
}) => (
  <div className="group relative bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
    <div className={`absolute top-6 right-6 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${
      colorClass === 'sky' ? 'bg-sky-50 text-sky-600 border-sky-100 dark:bg-sky-900/30 dark:text-sky-400' :
      colorClass === 'amber' ? 'bg-amber-50 text-amber-600 border-amber-100 dark:bg-amber-900/30 dark:text-amber-400' :
      'bg-emerald-50 text-emerald-600 border-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-400'
    }`}>
      {badge}
    </div>
    
    <div className="flex items-start gap-5 mb-6">
      <div className={`p-4 rounded-2xl ${
        colorClass === 'sky' ? 'bg-sky-500 shadow-sky-500/20' :
        colorClass === 'amber' ? 'bg-amber-500 shadow-amber-500/20' :
        'bg-emerald-500 shadow-emerald-500/20'
      } text-white shadow-lg`}>
        <Icon size={24} />
      </div>
      <div>
        <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-1 font-mono">.{title}()</h3>
        <p className="text-sm text-gray-500 font-medium leading-relaxed">{description}</p>
      </div>
    </div>

    <div className="space-y-4">
      <CodeBlock title={title + " Example"} code={code} />
      <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-700 font-mono text-sm leading-none overflow-hidden">
        <Target size={16} className="text-sky-500 shrink-0" />
        <span className="text-gray-400 mr-2 shrink-0">Output:</span>
        <span className="text-emerald-500 font-bold truncate">{output}</span>
      </div>
    </div>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const JsArrayMethods: React.FC = () => {
  const [arr, setArr] = useState([1, 2, 3, 4]);
  const [lastAction, setLastAction] = useState('Initial state');

  const handleAction = (type: string) => {
    let newArr = [...arr];
    switch (type) {
      case 'push': 
        newArr.push(newArr.length + 1);
        setLastAction(`arr.push(${newArr.length});`);
        break;
      case 'pop':
        const poppped = newArr.pop();
        setLastAction(`arr.pop(); // removed ${poppped}`);
        break;
      case 'unshift':
        newArr.unshift(0);
        setLastAction(`arr.unshift(0);`);
        break;
      case 'shift':
        const shifted = newArr.shift();
        setLastAction(`arr.shift(); // removed ${shifted}`);
        break;
      case 'reverse':
        newArr.reverse();
        setLastAction(`arr.reverse();`);
        break;
      case 'sort':
        newArr.sort((a,b) => a - b);
        setLastAction(`arr.sort((a,b) => a - b);`);
        break;
      case 'reset':
        newArr = [1, 2, 3, 4];
        setLastAction('Reset array');
        break;
    }
    setArr(newArr);
  };

  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0f172a] min-h-screen font-sans selection:bg-sky-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[140px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-sky-600 dark:text-sky-400 text-[10px] font-black mb-8 border border-sky-100 dark:border-sky-900/50 shadow-xl shadow-sky-500/5 animate-pulse tracking-[0.2em]">
          <Package size={14} className="fill-current" /> BUILT-IN TOOLKIT
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          JS Array<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 drop-shadow-2xl">
            Methods
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          Master the built-in functions to <span className="text-gray-900 dark:text-white font-bold">Add</span>, <span className="text-gray-900 dark:text-white font-bold">Remove</span>, <span className="text-gray-900 dark:text-white font-bold">Transform</span>, and <span className="text-gray-900 dark:text-white font-bold">Search</span> complex data.
        </p>
      </header>

      {/* ── Section 1: Intro ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <SectionHeader icon={InfoIcon} title="1. What are Array Methods?" subtitle="The essential toolbox for any JavaScript developer." color="text-sky-500" />
            <div className="space-y-6">
              <p className="text-lg font-medium text-gray-600 dark:text-gray-300">
                👉 Array methods are built-in functions used to perform common operations efficiently:
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { text: 'Add/Remove elements', icon: PlusCircle },
                  { text: 'Transform data', icon: RefreshCw },
                  { text: 'Search/filter values', icon: Search },
                  { text: 'Perform operations', icon: Cpu }
                ].map((item, i) => (
                  <div key={i} className="p-5 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm flex items-center gap-4">
                    <div className="p-2.5 rounded-xl bg-sky-50 dark:bg-sky-900/30 text-sky-500">
                      <item.icon size={20} />
                    </div>
                    <span className="font-bold text-gray-700 dark:text-gray-200 text-sm tracking-tight">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="p-6 bg-sky-500/5 rounded-3xl border border-sky-500/10">
                <p className="text-sky-600 dark:text-sky-400 font-black flex items-center gap-2">
                  <Zap size={20} /> Think of them as tools to work efficiently with arrays.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-indigo-600 rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-white dark:bg-gray-800 p-8 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-2xl">
              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                <Activity size={24} className="text-sky-500" /> Live Methods Lab
              </h3>
              <div className="space-y-8">
                <div className="p-8 bg-gray-950 rounded-[2.5rem] border border-white/5 space-y-6 overflow-hidden">
                   <div className="flex justify-between items-center text-[10px] font-black text-white/30 tracking-[0.4em] uppercase">
                     <span>Live Memory</span>
                     <span className="text-sky-500">{lastAction}</span>
                   </div>
                   <div className="flex flex-wrap gap-4 justify-center py-4">
                     {arr.map((n, i) => (
                        <div key={i} className="w-16 h-16 rounded-[1.5rem] bg-sky-500 text-white flex items-center justify-center text-3xl font-black shadow-xl shadow-sky-500/20 animate-in zoom-in duration-300">
                          {n}
                        </div>
                     ))}
                     {arr.length === 0 && <div className="text-gray-500 font-mono italic">Array is empty</div>}
                   </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { id: 'push', label: 'Push', color: 'bg-emerald-500' },
                    { id: 'pop', label: 'Pop', color: 'bg-rose-500' },
                    { id: 'unshift', label: 'Unshift', color: 'bg-indigo-500' },
                    { id: 'shift', label: 'Shift', color: 'bg-orange-500' },
                    { id: 'reverse', label: 'Reverse', color: 'bg-sky-500' },
                    { id: 'sort', label: 'Sort', color: 'bg-amber-500' },
                  ].map((btn) => (
                    <button
                      key={btn.id}
                      onClick={() => handleAction(btn.id)}
                      className={`px-4 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest text-white shadow-lg transition-all hover:scale-105 active:scale-95 ${btn.color}`}
                    >
                      {btn.label}
                    </button>
                  ))}
                  <button
                    onClick={() => handleAction('reset')}
                    className="col-span-2 px-4 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300 hover:bg-gray-200"
                  >
                    Reset Array
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Adding & Removing ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={PlusCircle} title="3. Adding & Removing Elements" subtitle="Control the ends and middle of your arrays." color="text-emerald-500" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           <MethodCard 
            icon={PlusCircle}
            title="push"
            description="Adds one or more elements to the end of an array."
            code={`const arr = [1, 2];
arr.push(3);`}
            output="[1, 2, 3]"
            colorClass="emerald"
           />
           <MethodCard 
            icon={MinusCircle}
            title="pop"
            description="Removes the last element from an array."
            code={`const arr = [1, 2, 3];
arr.pop();`}
            output="[1, 2]"
            colorClass="emerald"
           />
           <MethodCard 
            icon={ArrowRight}
            title="unshift"
            description="Adds one or more elements to the beginning of an array."
            code={`const arr = [1, 2];
arr.unshift(0);`}
            output="[0, 1, 2]"
            colorClass="sky"
           />
           <MethodCard 
            icon={Shuffle}
            title="shift"
            description="Removes the first element from an array."
            code={`const arr = [0, 1, 2];
arr.shift();`}
            output="[1, 2]"
            colorClass="sky"
           />
           <MethodCard 
            icon={Scissors}
            title="splice"
            description="Adds or removes elements from any position."
            code={`const arr = [1, 2, 3, 4];
arr.splice(1, 2); // At index 1, remove 2`}
            output="[1, 4]"
            colorClass="amber"
            badge="Power Tool 🔥"
           />
        </div>
      </section>

      {/* ── Section 3: Transformation ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={RefreshCw} title="4. Transformation Methods" subtitle="Modify and transform your data without loops." color="text-indigo-500" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           <MethodCard 
            icon={RefreshCw}
            title="map"
            description="Transforms each element into something else."
            code={`const arr = [1, 2, 3];
const result = arr.map(x => x * 2);`}
            output="[2, 4, 6]"
            colorClass="indigo"
           />
           <MethodCard 
            icon={Filter}
            title="filter"
            description="Returns elements that match a specific condition."
            code={`const arr = [1, 2, 3];
const result = arr.filter(x => x > 1);`}
            output="[2, 3]"
            colorClass="indigo"
           />
           <MethodCard 
            icon={Zap}
            title="reduce"
            description="Reduces an array to a single value (sum, obj, etc)."
            code={`const arr = [1, 2, 3];
const sum = arr.reduce((acc, val) => acc + val, 0);`}
            output="6"
            colorClass="sky"
            badge="Advanced 🔥"
           />
        </div>
      </section>

      {/* ── Section 4: Searching ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Search} title="5. Searching Methods" subtitle="Find exactly what you are looking for." color="text-sky-500" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
           <MethodCard 
            icon={Target}
            title="find"
            description="Returns the first matching value."
            code={`arr.find(x => x > 2);`}
            output="3"
            colorClass="sky"
           />
           <MethodCard 
            icon={Hash}
            title="findIndex"
            description="Returns index of the first match."
            code={`arr.findIndex(x => x > 2);`}
            output="2"
            colorClass="sky"
           />
           <MethodCard 
            icon={CheckCircle}
            title="includes"
            description="Checks if value exists (true/false)."
            code={`arr.includes(2);`}
            output="true"
            colorClass="emerald"
           />
           <MethodCard 
            icon={Shuffle}
            title="indexOf"
            description="Returns index of a specific value."
            code={`arr.indexOf(2);`}
            output="1"
            colorClass="amber"
           />
        </div>
      </section>

      {/* ── Section 5: Other Methods ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Settings} title="6. Other Important Methods" subtitle="Utility functions for sorting, joining, and more." color="text-gray-500" />
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
           {[
             { title: 'slice', desc: 'Non-destructive cut', out: '[2, 3]', code: 'const newArr = arr.slice(1, 3);' },
             { title: 'concat', desc: 'Merge arrays', out: '[1, 2, 3, 4]', code: 'const res = a.concat(b);' },
             { title: 'join', desc: 'Array to string', out: '"a-b-c"', code: 'arr.join("-");' },
             { title: 'reverse', desc: 'Flip order', out: '[3, 2, 1]', code: 'arr.reverse();' },
             { title: 'sort', desc: 'Order elements', out: '[1, 2, 3]', code: 'arr.sort((a,b)=>a-b);' },
           ].map((m, i) => (
             <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all group">
                <h4 className="font-black text-gray-900 dark:text-white mb-2 group-hover:text-sky-500 transition-colors">.{m.title}()</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 font-medium">{m.desc}</p>
                <div className="text-[10px] font-mono text-emerald-500 bg-emerald-500/5 p-2 rounded-lg border border-emerald-500/10">
                  {m.out}
                </div>
             </div>
           ))}
        </div>
      </section>

       {/* ── Section 6: Mutation Table ── */}
       <section className="max-w-6xl mx-auto mb-32">
        <div className="bg-white dark:bg-gray-800 p-12 rounded-[3.5rem] shadow-2xl border border-gray-100 dark:border-gray-700 relative overflow-hidden">
          <SectionHeader icon={Table} title="9. Mutable vs Immutable Methods" subtitle="Understanding how methods affect the original array." color="text-indigo-500" />
          
          <div className="overflow-x-auto mt-10">
             <table className="w-full text-left">
               <thead>
                 <tr className="border-b border-gray-100 dark:border-gray-700">
                   <th className="py-5 px-6 text-sm font-black text-gray-400 uppercase tracking-widest">Method Name</th>
                   <th className="py-5 px-6 text-sm font-black text-gray-400 uppercase tracking-widest">Type</th>
                   <th className="py-5 px-6 text-sm font-black text-gray-400 uppercase tracking-widest">Behavior</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-gray-50 dark:divide-gray-700/50">
                 {[
                   { name: 'push, pop, splice, sort, reverse', type: 'Mutable ✅', desc: 'Changes the ORIGINAL array in memory.', color: 'text-rose-500 bg-rose-500/5' },
                   { name: 'map, filter, slice, concat', type: 'Immutable ❌', desc: 'Returns a NEW array. Original is safe.', color: 'text-emerald-500 bg-emerald-500/5' },
                 ].map((row, i) => (
                   <tr key={i} className="group hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                     <td className="py-6 px-6 font-mono text-gray-900 dark:text-white font-bold">{row.name}</td>
                     <td className="py-6 px-6">
                        <span className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-tighter ${row.color}`}>
                          {row.type}
                        </span>
                     </td>
                     <td className="py-6 px-6 text-gray-500 text-sm font-medium">{row.desc}</td>
                   </tr>
                 ))}
               </tbody>
             </table>
          </div>
          <div className="mt-12 p-8 bg-indigo-50 dark:bg-indigo-900/20 rounded-[2.5rem] border border-indigo-100 dark:border-indigo-800/50 flex flex-col sm:flex-row gap-6 items-center">
            <div className="p-4 rounded-2xl bg-indigo-500 text-white shadow-xl">
               <ShieldCheck size={32} />
            </div>
            <div>
               <p className="text-indigo-900 dark:text-indigo-200 font-black text-lg">Golden Rule:</p>
               <p className="text-indigo-700/80 dark:text-indigo-400 font-medium">Mutation changes original array, Non-mutation keeps original safe.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 7: Common Mistakes ── */}
      <section className="max-w-4xl mx-auto mb-32 space-y-8">
        <SectionHeader icon={AlertTriangle} title="10. Common Mistakes" subtitle="Don't let these tricky behaviors break your apps." color="text-rose-500" />
        
        <div className="p-8 bg-rose-50 dark:bg-rose-900/10 rounded-[2.5rem] border border-rose-100 dark:border-rose-900/50 space-y-6">
           <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-rose-500 text-white flex items-center justify-center shrink-0">
                <MinusCircle size={20} />
              </div>
              <div>
                <h4 className="font-black text-rose-900 dark:text-rose-200 text-xl mb-2">Sorting without a function</h4>
                <p className="text-rose-700/70 dark:text-rose-400 mb-6">JS sorts alphabetically by default, which breaks numbers.</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <span className="text-[10px] font-black text-rose-400 uppercase tracking-widest">Wrong</span>
                    <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl border border-rose-200 dark:border-rose-800 font-mono text-sm">
                      [10, 2, 5].sort(); <br />
                      <span className="text-rose-500">// [10, 2, 5] ❌</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Correct</span>
                    <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl border border-emerald-200 dark:border-emerald-800 font-mono text-sm">
                      [10, 2, 5].sort((a,b)=&gt;a-b); <br />
                      <span className="text-emerald-500">// [2, 5, 10] ✅</span>
                    </div>
                  </div>
                </div>
              </div>
           </div>
        </div>

        <div className="p-8 bg-amber-50 dark:bg-amber-900/10 rounded-[2.5rem] border border-amber-100 dark:border-amber-900/50 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0">
            <RefreshCw size={20} />
          </div>
          <div>
            <h4 className="font-black text-amber-900 dark:text-amber-200 text-xl mb-1">forEach returns undefined</h4>
            <p className="text-amber-700/70 dark:text-amber-400 text-sm font-medium">Expecting forEach to return a new array is a common error. Use <span className="font-bold underline">map</span> instead.</p>
          </div>
        </div>
      </section>

      {/* ── Section 8: Example ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="bg-gradient-to-br from-slate-900 to-black p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
            <Layout size={300} className="text-white" />
          </div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black text-white mb-6 tracking-tight">8. Complete Example 🎯</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed font-medium">Chaining methods allows you to build powerful data pipelines in just a few lines of code.</p>
              <div className="space-y-4">
                {[
                  { label: 'Sort', text: 'numbers.sort((a,b)=>a-b);' },
                  { label: 'Filter', text: 'const filtered = numbers.filter(n=>n>2);' },
                  { label: 'Map', text: 'const doubled = filtered.map(n=>n*2);' },
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg bg-sky-500 text-white flex items-center justify-center text-[10px] font-black shrink-0">{i+1}</div>
                    <div>
                      <span className="text-white font-black text-sm block">{step.label}</span>
                      <code className="text-sky-400 text-xs font-mono">{step.text}</code>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <CodeBlock title="Full Implementation" code={`const numbers = [5, 2, 8, 1];

// 1. Sort
numbers.sort((a, b) => a - b);

// 2. Filter values > 2
const filtered = numbers.filter(n => n > 2);

// 3. Map to double the values
const doubled = filtered.map(n => n * 2);

console.log(numbers);  // [1, 2, 5, 8]
console.log(filtered); // [5, 8]
console.log(doubled);  // [10, 16]`} />
               <div className="p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-3xl">
                  <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-4 block">Final Results</span>
                  <div className="flex flex-wrap gap-4">
                     <div className="px-4 py-2 bg-black/40 rounded-xl border border-white/10 text-white font-mono text-xs">Numbers: [1, 2, 5, 8]</div>
                     <div className="px-4 py-2 bg-black/40 rounded-xl border border-white/10 text-white font-mono text-xs">Filtered: [5, 8]</div>
                     <div className="px-4 py-2 bg-black/40 rounded-xl border border-white/10 text-white font-mono text-xs">Doubled: [10, 16]</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 9: Use Cases ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Globe} title="11. Real-World Use Cases" subtitle="Where you will actually use these in production apps." color="text-sky-500" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
           {[
             { title: 'E-commerce', desc: 'Filtering products by price or category.', icon: ShoppingCart, color: 'text-rose-500 bg-rose-500/10' },
             { title: 'Search', desc: 'Live search functionality for user lists.', icon: Search, color: 'text-sky-500 bg-sky-500/10' },
             { title: 'Data Analytics', desc: 'Calculating averages and totals.', icon: BarChart3, color: 'text-indigo-500 bg-indigo-500/10' },
             { title: 'API Handling', desc: 'Mapping JSON responses to UI components.', icon: Database, color: 'text-emerald-500 bg-emerald-500/10' },
           ].map((item, i) => (
             <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-2 transition-transform duration-500">
                <div className={`p-4 rounded-2xl w-fit mb-6 shadow-lg ${item.color.split(' ')[1]}`}>
                  <item.icon size={28} className={item.color.split(' ')[0]} />
                </div>
                <h4 className="font-black text-gray-900 dark:text-white text-xl mb-3">{item.title}</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
         <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-sky-500 to-transparent mx-auto mb-10"></div>
         <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
           Code with Precision.
         </p>
         <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose">
           Mastering Array Methods is the transition from a beginner to a pro JavaScript developer.<br />
           They make your code cleaner, faster, and much more readable.
         </p>
      </footer>

    </div>
  );
};

const InfoIcon = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

export default JsArrayMethods;