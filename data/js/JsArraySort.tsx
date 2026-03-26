import React, { useState, useMemo, useEffect } from 'react';
import { 
  ArrowDownNarrowWide, 
  ArrowUpWideNarrow, 
  Shuffle, 
  Zap, 
  CheckCircle, 
  AlertTriangle, 
  Terminal, 
  Code2, 
  Copy, 
  Check, 
  Eye, 
  Layers, 
  Database, 
  Globe, 
  Layout, 
  Package, 
  Activity, 
  ArrowRight,
  Info,
  Cpu,
  RefreshCw,
  BarChart3,
  ListOrdered,
  History,
  ShieldCheck,
  GitCompare,
  ArrowUpDown,
  Filter,
  Users,
  Box,
  Hash,
  Type,
  MousePointer2,
  Target
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

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-amber-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
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

// ─── Main Component ───────────────────────────────────────────────────────────

const JsArraySort: React.FC = () => {
  const [data, setData] = useState([10, 2, 30, 5, 100]);
  const [sortType, setSortType] = useState<'default' | 'asc' | 'desc'>('default');
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    let sorted = [...data];
    if (sortType === 'default') {
      sorted.sort();
    } else if (sortType === 'asc') {
      sorted.sort((a, b) => a - b);
    } else {
      sorted.sort((a, b) => b - a);
    }
    setItems(sorted);
  }, [data, sortType]);

  const randomize = () => {
    setData(Array.from({ length: 5 }, () => Math.floor(Math.random() * 100) + 1));
  };

  return (
    <div className="p-4 sm:p-10 bg-[#fffbeb] dark:bg-[#0f172a] min-h-screen font-sans selection:bg-amber-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-amber-600 dark:text-amber-400 text-[10px] font-black mb-8 border border-amber-100 dark:border-amber-900/50 shadow-xl shadow-amber-500/5 animate-pulse tracking-[0.2em]">
          <ListOrdered size={14} className="fill-current" /> ARRAY ORDERING
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          JS Array<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 drop-shadow-2xl">
            Sorting
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The fine art of reordering data while avoiding the <span className="text-gray-900 dark:text-white font-bold underline decoration-amber-500 underline-offset-4">lexicographical trap</span>.
        </p>
      </header>

      {/* ── Section 1: Intro ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <SectionHeader icon={Shuffle} title="1. What is Array Sorting?" subtitle="Arranging elements in a readable, logical order." color="text-amber-500" />
            <div className="space-y-6">
              <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed">
                👉 Sorting means arranging elements in a specific order (ascending or descending). JavaScript provides a built-in <code className="text-amber-500 font-bold">.sort()</code> method for this.
              </p>
              
              <div className="relative p-8 bg-white dark:bg-gray-800 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl">
                 <div className="absolute -top-4 -right-4 bg-rose-500 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg animate-bounce">
                    Lexical Trap!
                 </div>
                 <h4 className="text-[10px] font-black text-amber-500 uppercase tracking-[0.4em] mb-6">2. Basic .sort() Behavior</h4>
                 <p className="text-sm font-medium text-gray-500 mb-6 leading-relaxed">By default, JS sorts everything as <span className="text-rose-500 underline underline-offset-4">strings</span>. This causes 10 to come before 2.</p>
                 <CodeBlock title="The Wrong Sort" code={`[10, 2, 5].sort(); // [10, 2, 5] ❌`} />
                 <div className="mt-4 p-4 bg-rose-500/5 rounded-2xl border border-rose-500/10 flex items-center gap-4">
                    <AlertTriangle size={20} className="text-rose-500" />
                    <span className="text-xs font-bold text-rose-600 dark:text-rose-400">Always use a compare function for numbers!</span>
                 </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 to-rose-500 rounded-[3.5rem] blur-2xl opacity-10 group-hover:opacity-20 transition duration-1000"></div>
            <div className="relative bg-[#111111] p-10 rounded-[3.5rem] border border-white/5 shadow-2xl overflow-hidden min-h-[500px] flex flex-col justify-between">
               <div className="flex justify-between items-center mb-8">
                  <h3 className="text-white font-black text-xl flex items-center gap-3">
                     <BarChart3 className="text-amber-500 animate-pulse" size={24} /> Sorting Studio
                  </h3>
                  <button 
                    onClick={randomize}
                    className="p-2.5 bg-white/5 hover:bg-white/10 rounded-xl text-gray-400 transition-all hover:rotate-180"
                  >
                    <RefreshCw size={18} />
                  </button>
               </div>

               <div className="flex items-end justify-around h-48 mb-12">
                  {items.map((val, i) => (
                    <div key={i} className="flex flex-col items-center gap-4 transition-all duration-700 w-full group/item">
                       <span className="text-[10px] font-black text-gray-500 font-mono">{val}</span>
                       <div 
                         className="w-10 rounded-t-xl bg-gradient-to-t from-amber-600 to-amber-400 shadow-lg shadow-amber-500/20 group-hover/item:from-rose-500 group-hover/item:to-rose-400 transition-all"
                         style={{ height: `${Math.max(20, val)}%` }}
                       ></div>
                    </div>
                  ))}
               </div>

               <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'default', label: 'Default', icon: Type },
                    { id: 'asc', label: 'a - b', icon: ArrowUpWideNarrow },
                    { id: 'desc', label: 'b - a', icon: ArrowDownNarrowWide }
                  ].map((btn) => (
                    <button 
                      key={btn.id}
                      onClick={() => setSortType(btn.id as any)}
                      className={`flex flex-col items-center gap-2 p-4 rounded-3xl border transition-all ${
                        sortType === btn.id 
                          ? 'bg-amber-500 border-amber-400 shadow-xl shadow-amber-500/40 text-white' 
                          : 'bg-white/5 border-white/5 text-gray-500 hover:text-white'
                      }`}
                    >
                      <btn.icon size={20} />
                      <span className="text-[10px] font-black uppercase tracking-tighter">{btn.label}</span>
                    </button>
                  ))}
               </div>

               <div className="mt-8 p-4 bg-white/5 rounded-2xl text-center">
                  <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                     {sortType === 'default' ? '⚠️ Lexicographical (String) Sort' : `✅ ${sortType === 'asc' ? 'Numeric Ascending' : 'Numeric Descending'}`}
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Numeric Sorting ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="grid lg:grid-cols-2 gap-10 items-stretch">
            <div className="bg-white dark:bg-gray-800 p-10 rounded-[3rem] shadow-xl border border-gray-100 dark:border-gray-700">
               <SectionHeader icon={GitCompare} title="3. Correct Numeric Sorting" subtitle="Passing a callback for precision." color="text-amber-600" />
               <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                     <div className="p-5 bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-800 rounded-2xl">
                        <h4 className="text-[10px] font-black text-amber-600 uppercase tracking-widest mb-2">Ascending</h4>
                        <code className="text-xs font-mono dark:text-gray-300">(a, b) =&gt; a - b</code>
                     </div>
                     <div className="p-5 bg-rose-50 dark:bg-rose-900/10 border border-rose-100 dark:border-rose-800 rounded-2xl">
                        <h4 className="text-[10px] font-black text-rose-600 uppercase tracking-widest mb-2">Descending</h4>
                        <code className="text-xs font-mono dark:text-gray-300">(a, b) =&gt; b - a</code>
                     </div>
                  </div>
                  <CodeBlock title="Numeric Sort implementation" code={`const arr = [5, 2, 8, 1];
arr.sort((a, b) => a - b); // [1, 2, 5, 8]`} />
               </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-black p-12 rounded-[3rem] shadow-2xl relative overflow-hidden flex flex-col justify-center">
               <div className="absolute top-0 right-0 p-8 text-white opacity-5">
                  <Cpu size={140} />
               </div>
               <h3 className="text-white font-black text-3xl mb-8 flex items-center gap-4">
                  <Info className="text-amber-500" /> 4. Compare Function Logic
               </h3>
               <div className="space-y-4">
                  {[
                    { cond: 'a - b < 0', act: 'A comes first', color: 'bg-emerald-500' },
                    { cond: 'a - b > 0', act: 'B comes first', color: 'bg-rose-500' },
                    { cond: '0', act: 'No change', color: 'bg-gray-500' }
                  ].map((row, i) => (
                    <div key={i} className="flex items-center gap-6 p-4 bg-white/5 rounded-2xl border border-white/5">
                       <div className={`w-3 h-3 rounded-full ${row.color} shadow-lg shadow-current/20`}></div>
                       <code className="text-amber-400 font-black text-sm w-24">{row.cond}</code>
                       <span className="text-gray-400 font-medium text-xs">→ {row.act}</span>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 3: Strings & Objects ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="grid lg:grid-cols-2 gap-12">
           <div className="bg-white dark:bg-gray-800 p-10 rounded-[3rem] shadow-xl border border-gray-100 dark:border-gray-700">
              <SectionHeader icon={Type} title="5. Sorting Strings" subtitle="Native sort and case-sensitivity." color="text-orange-500" />
              <CodeBlock title="String Sorting" code={`const fruits = ["banana", "apple", "cherry"];
fruits.sort(); // ["apple", "banana", "cherry"]

// Case-Insensitive
fruits.sort((a, b) => a.localeCompare(b));`} />
              <div className="mt-6 p-4 bg-orange-500/5 rounded-2xl border border-orange-500/10 flex items-center gap-4">
                 <ShieldCheck className="text-orange-500" size={24} />
                 <p className="text-xs font-medium text-orange-700 dark:text-orange-400">
                    Use <span className="font-bold">localeCompare</span> for better international and case-sensitive string handling.
                 </p>
              </div>
           </div>

           <div className="bg-white dark:bg-gray-800 p-10 rounded-[3rem] shadow-xl border border-gray-100 dark:border-gray-700">
              <SectionHeader icon={Users} title="6. Sorting Objects" subtitle="Sorting by specific property keys." color="text-indigo-500" />
              <CodeBlock title="Object Properties" code={`const users = [{ age: 25 }, { age: 20 }];

// Sort by age
users.sort((a, b) => a.age - b.age);

// Sort by name
users.sort((a, b) => a.name.localeCompare(b.name));`} />
              <div className="flex gap-4 mt-6">
                 <div className="flex-1 p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl flex items-center justify-center gap-2">
                    <Database size={16} className="text-indigo-500" />
                    <span className="text-[10px] font-black text-indigo-700 uppercase">Pro Tip: API Results</span>
                 </div>
                 <div className="flex-1 p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl flex items-center justify-center gap-2">
                    <Zap size={16} className="text-emerald-500" />
                    <span className="text-[10px] font-black text-emerald-700 uppercase">Most Frequent task</span>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 4: Mutation ── */}
      <section className="max-w-6xl mx-auto mb-32 relative">
         <div className="absolute inset-0 bg-rose-500/5 rounded-[4rem] blur-3xl"></div>
         <div className="relative bg-white dark:bg-gray-800 p-12 rounded-[4rem] shadow-xl border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center">
            <SectionHeader icon={RefreshCw} title="8. Important: Mutation ⚠️" color="text-rose-500" />
            <p className="max-w-xl text-gray-500 mb-12 font-medium leading-relaxed">
               The <code className="text-rose-500 font-bold">.sort()</code> method is <span className="text-rose-600 font-black italic underline decoration-rose-500/20">destructive</span>. It modifies the original array directly in memory.
            </p>
            <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
               <div className="p-8 bg-gray-50 dark:bg-gray-900/50 rounded-3xl border border-gray-100 dark:border-gray-700">
                  <h4 className="text-xs font-black text-rose-500 uppercase tracking-widest mb-6 px-4 py-1 bg-rose-500/10 rounded-full w-fit mx-auto animate-pulse">Dangerous Way</h4>
                  <CodeBlock code={`const arr = [3, 1, 2];
arr.sort(); // arr is now [1, 2, 3]!`} />
               </div>
               <div className="p-8 bg-emerald-500/5 rounded-3xl border border-emerald-500/10 shadow-2xl">
                  <h4 className="text-xs font-black text-emerald-500 uppercase tracking-widest mb-6 px-4 py-1 bg-emerald-500/10 rounded-full w-fit mx-auto">Safe Way (Cloning)</h4>
                  <CodeBlock code={`const sorted = [...arr].sort();
// arr remains unchanged!`} />
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 5: Examples ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="bg-slate-900 p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          <SectionHeader icon={CheckCircle} title="7. Complete Example" subtitle="Putting it all together." color="text-white" />
          <div className="grid lg:grid-cols-2 gap-12 mt-12 items-center">
             <div className="space-y-6">
                <div className="flex items-center gap-6 bg-white/5 p-5 rounded-3xl border border-white/5">
                   <div className="w-12 h-12 bg-amber-500 text-white rounded-2xl flex items-center justify-center shadow-lg">
                      <ArrowUpWideNarrow size={24} />
                   </div>
                   <div>
                      <span className="text-white font-black text-[10px] uppercase tracking-widest block mb-1">Ascending</span>
                      <code className="text-gray-400 text-xs">a - b</code>
                   </div>
                   <ArrowRight className="text-white/20 ml-auto" />
                </div>
                <div className="flex items-center gap-6 bg-white/5 p-5 rounded-3xl border border-white/5">
                   <div className="w-12 h-12 bg-rose-500 text-white rounded-2xl flex items-center justify-center shadow-lg">
                      <ArrowDownNarrowWide size={24} />
                   </div>
                   <div>
                      <span className="text-white font-black text-[10px] uppercase tracking-widest block mb-1">Descending</span>
                      <code className="text-gray-400 text-xs">b - a</code>
                   </div>
                   <ArrowRight className="text-white/20 ml-auto" />
                </div>
             </div>
             <CodeBlock title="Testing Logic" code={`const nums = [4, 1, 7, 3];

const asc = [...nums].sort((a,b) => a-b);
const desc = [...nums].sort((a,b) => b-a);

console.log(asc); // [1, 3, 4, 7]`} />
          </div>
        </div>
      </section>

      {/* ── Section 6: Advanced ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-800 p-10 rounded-[3rem] shadow-xl border border-gray-100 dark:border-gray-700">
               <SectionHeader icon={Zap} title="10. Advanced Techniques" subtitle="Multi-level and chained operations." color="text-amber-500" />
               <p className="text-gray-500 mb-8 font-medium">Handle complex ties by returning a secondary comparison if the primary one is zero.</p>
               <CodeBlock title="Multi-level Sort" code={`users.sort((a, b) => {
    if (a.age === b.age) {
        return a.name.localeCompare(b.name);
    }
    return a.age - b.age;
});`} />
               <div className="mt-6 flex items-center justify-between p-4 bg-amber-500/5 rounded-2xl border border-amber-500/10">
                  <span className="text-[10px] font-black text-amber-600 uppercase">Reverse Chaining</span>
                  <code className="text-xs text-gray-400 font-mono">.sort().reverse()</code>
               </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-10 rounded-[3rem] shadow-xl border border-gray-100 dark:border-gray-700">
               <SectionHeader icon={Box} title="9. Sorting Mixed Data" subtitle="Ensuring type-safety during sort." color="text-sky-500" />
               <p className="text-gray-500 mb-8 font-medium">Mixed arrays of strings and numbers should be normalized during comparison.</p>
               <CodeBlock title="Mixed Sort" code={`const arr = [10, "2", 5];

arr.sort((a, b) => {
    return Number(a) - Number(b);
});`} />
               <div className="p-4 bg-sky-500/5 rounded-2xl border border-sky-500/10 flex items-center gap-4 mt-6">
                  <Target size={20} className="text-sky-500" />
                  <p className="text-[10px] font-black text-sky-700 uppercase tracking-widest">Normalizing to Numbers</p>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 7: Mistakes ── */}
      <section className="max-w-4xl mx-auto mb-32">
         <SectionHeader icon={AlertTriangle} title="11. Common Mistakes" subtitle="Critical errors to watch for." color="text-rose-600" />
         <div className="grid gap-6">
            {[
              { title: 'Forgetting compare function', code: '[10, 2].sort(); // [10, 2] ❌', fix: 'Results in wrong numeric sorting.' },
              { title: 'Mutating original array', code: 'myArr.sort(); // state changed ❗', fix: 'Cloning prevents unintended state bugs.' },
              { title: 'Invalid Object Comparison', code: 'users.sort((a,b) => a - b); // ❌ NaN', fix: 'Access the specific property (a.age - b.age).' }
            ].map((err, i) => (
               <div key={i} className="flex items-start gap-6 p-8 bg-white dark:bg-gray-900/50 border border-rose-500/10 rounded-[2.5rem] relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-125 transition-transform duration-1000">
                     <AlertTriangle size={80} />
                  </div>
                  <div className="p-3 bg-rose-500 text-white rounded-xl shadow-lg relative z-10 font-bold italic shadow-rose-500/20">
                     <AlertTriangle size={20} />
                  </div>
                  <div className="relative z-10">
                     <h4 className="font-black text-gray-900 dark:text-gray-100 mb-2">{err.title}</h4>
                     <code className="text-rose-500 font-mono text-xs block mb-2">{err.code}</code>
                     <p className="text-xs text-gray-400 font-medium">{err.fix}</p>
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* ── Section 8: Real World ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Globe} title="12. Real-World Use Cases" subtitle="Where users see sorting in action." color="text-emerald-500" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
           {[
             { title: 'Price Filters', icon: ArrowUpDown, color: 'text-amber-500' },
             { title: 'Leaderboards', icon: BarChart3, color: 'text-emerald-500' },
             { title: 'Search Results', icon: Filter, color: 'text-sky-500' },
             { title: 'Data Tables', icon: Layout, color: 'text-indigo-500' },
             { title: 'Dashboards', icon: Database, color: 'text-rose-500' }
           ].map((item, i) => (
             <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-2 transition-transform overflow-hidden relative">
                <item.icon size={28} className={`${item.color} mb-4 relative z-10`} />
                <span className="font-black text-gray-900 dark:text-white text-xs block relative z-10 uppercase tracking-widest">{item.title}</span>
                <div className={`absolute -bottom-4 -right-4 w-12 h-12 ${item.color} opacity-5 rounded-full group-hover:scale-[10] transition-transform duration-1000`}></div>
             </div>
           ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
         <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-10"></div>
         <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
           Order Matters.
         </p>
         <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose">
           From simple strings to complex nested API objects,<br />
           knowledge of compare functions prevents the silent bugs of lexicographical default.
         </p>
      </footer>

    </div>
  );
};

export default JsArraySort;