import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  Target, 
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
  Shuffle, 
  Layout, 
  Package, 
  Activity, 
  User, 
  Hash, 
  ArrowRight,
  Info,
  HelpCircle,
  Cpu,
  Fingerprint,
  Users,
  SearchCode,
  ArrowBigRight,
  ClipboardList,
  GitCompare,
  ShieldCheck
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

// ─── Main Component ───────────────────────────────────────────────────────────

const JsArraySearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [users] = useState([
    { id: 1, name: "Alice", role: "Admin" },
    { id: 2, name: "Bob", role: "User" },
    { id: 3, name: "Charlie", role: "Editor" },
    { id: 4, name: "Diana", role: "User" }
  ]);
  const [numbers] = useState([10, 20, 30, 40, 20, 50]);

  const searchResults = useMemo(() => {
    const query = searchQuery.toLowerCase();
    const numQuery = parseInt(searchQuery);

    return {
      includes: numbers.includes(numQuery),
      indexOf: numbers.indexOf(numQuery),
      find: users.find(u => u.name.toLowerCase().includes(query) || u.id === numQuery),
      filter: users.filter(u => u.name.toLowerCase().includes(query) || u.role.toLowerCase().includes(query))
    };
  }, [searchQuery, users, numbers]);

  return (
    <div className="p-4 sm:p-10 bg-[#f0f4f8] dark:bg-[#0f172a] min-h-screen font-sans selection:bg-sky-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-sky-600 dark:text-sky-400 text-[10px] font-black mb-8 border border-sky-100 dark:border-sky-900/50 shadow-xl shadow-sky-500/5 animate-pulse tracking-[0.2em]">
          <SearchCode size={14} className="fill-current" /> ARRAY INTELLIGENCE
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          JS Array<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-600 drop-shadow-2xl">
            Search
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The art of finding precisely what you need in a sea of data using <span className="text-gray-900 dark:text-white font-bold underline decoration-sky-500 underline-offset-4">built-in efficient methods</span>.
        </p>
      </header>

      {/* ── Section 1: Definition ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <SectionHeader icon={Target} title="1. What is Array Search?" subtitle="Finding needles in haystacks effectively." color="text-sky-500" />
            <div className="space-y-6">
              <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed">
                👉 Array search means finding elements in an array based on a <span className="text-sky-500 font-bold uppercase italic tracking-wider">value</span> or <span className="text-indigo-500 font-bold uppercase italic tracking-wider">condition</span>.
              </p>
              
              <div className="p-8 bg-white dark:bg-gray-800 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-700">
                    <Fingerprint size={120} className="text-sky-500" />
                 </div>
                 <h4 className="text-[10px] font-black text-sky-500 uppercase tracking-[0.4em] mb-6">Search Spectrum</h4>
                 <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: 'Equality', text: 'find "Admin"' },
                      { label: 'Condition', text: 'id > 10' },
                      { label: 'Existence', text: 'includes(7)' },
                      { label: 'Position', text: 'indexOf(100)' }
                    ].map((item, i) => (
                      <div key={i} className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-700 flex flex-col items-center">
                         <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1">{item.label}</span>
                         <span className="text-xs font-mono text-gray-700 dark:text-gray-300 font-bold">{item.text}</span>
                      </div>
                    ))}
                 </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-[3.5rem] blur-2xl opacity-10 group-hover:opacity-20 transition duration-1000"></div>
            <div className="relative bg-white dark:bg-gray-900 p-10 rounded-[3.5rem] border border-gray-100 dark:border-gray-800 shadow-2xl">
               <div className="flex justify-between items-center mb-8">
                  <h3 className="font-black text-xl flex items-center gap-3 text-gray-900 dark:text-white">
                     <Search className="text-sky-500 animate-pulse" size={24} /> Search Lab
                  </h3>
                  <div className="px-3 py-1 bg-sky-500/10 text-sky-500 rounded-lg text-[8px] font-black uppercase tracking-widest">Live Engine</div>
               </div>

               <div className="mb-8">
                  <div className="relative">
                    <input 
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search users or numbers..."
                      className="w-full bg-gray-50 dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 rounded-2xl px-12 py-4 font-mono text-sm focus:border-sky-500 outline-none transition-all dark:text-white"
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  </div>
               </div>

               <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-indigo-500/5 border border-indigo-500/10">
                     <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] font-black text-indigo-500 uppercase tracking-tighter">.filter() Results</span>
                        <span className="text-[10px] font-mono text-gray-400">[{searchResults.filter.length} items]</span>
                     </div>
                     <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                        {searchResults.filter.map(u => (
                          <div key={u.id} className="shrink-0 px-3 py-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 text-[10px] font-bold dark:text-white">
                             {u.name}
                          </div>
                        ))}
                        {searchResults.filter.length === 0 && <span className="text-[10px] text-gray-400 italic">No matches</span>}
                     </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                     <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
                        <span className="text-[10px] font-black text-emerald-500 uppercase tracking-tighter block mb-2">.includes()</span>
                        <span className={`text-xl font-black ${searchResults.includes ? 'text-emerald-500' : 'text-rose-400'}`}>
                           {searchResults.includes ? 'TRUE' : 'FALSE'}
                        </span>
                     </div>
                     <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/10">
                        <span className="text-[10px] font-black text-amber-500 uppercase tracking-tighter block mb-2">.indexOf()</span>
                        <span className="text-xl font-black text-amber-600">
                           {searchResults.indexOf}
                        </span>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Types Table ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={ClipboardList} title="2. Types of Search" subtitle="Choosing the right tool for the specific job." />
        <div className="bg-white dark:bg-gray-800 rounded-[3rem] shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
           <div className="overflow-x-auto">
              <table className="w-full text-left">
                 <thead>
                    <tr className="bg-gray-50 dark:bg-gray-900/50">
                       <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">TYPE</th>
                       <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">METHOD</th>
                       <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">PURPOSE</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-gray-100 dark:divide-gray-700 font-medium text-sm">
                    {[
                      { type: 'Check existence', method: 'includes()', desc: 'Simple boolean yes/no check' },
                      { type: 'Find index', method: 'indexOf()', desc: 'Get position of primitive value' },
                      { type: 'Find last index', method: 'lastIndexOf()', desc: 'Get last position of primitive' },
                      { type: 'Find element', method: 'find()', desc: 'Get first element matching condition' },
                      { type: 'Find index (condition)', method: 'findIndex()', desc: 'Get position of matching element' },
                      { type: 'Filter multiple', method: 'filter()', desc: 'Get all elements matching condition' }
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-sky-50/30 dark:hover:bg-sky-900/10 transition-colors">
                         <td className="px-8 py-5 text-gray-900 dark:text-white capitalize">{row.type}</td>
                         <td className="px-8 py-5"><code className="text-sky-500 font-black">{row.method}</code></td>
                         <td className="px-8 py-5 text-gray-400">{row.desc}</td>
                      </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </div>
      </section>

      {/* ── Section 3-5: Simple Search ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700 relative group overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/5 rounded-full -translate-y-8 translate-x-8"></div>
               <div className="p-3 bg-sky-500 text-white rounded-xl w-fit mb-6 shadow-lg shadow-sky-500/20">
                  <CheckCircle size={24} />
               </div>
               <h3 className="text-xl font-black mb-4 dark:text-white">3. .includes()</h3>
               <p className="text-sm text-gray-500 mb-6 leading-relaxed">Returns <span className="text-emerald-500 font-bold">true/false</span> if a value is found in the array.</p>
               <CodeBlock code={`[1, 2, 3].includes(2); // true`} />
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700 relative group overflow-hidden">
               <div className="p-3 bg-amber-500 text-white rounded-xl w-fit mb-6 shadow-lg shadow-amber-500/20">
                  <Activity size={24} />
               </div>
               <h3 className="text-xl font-black mb-4 dark:text-white">4. .indexOf()</h3>
               <p className="text-sm text-gray-500 mb-6 leading-relaxed">Returns the <span className="text-amber-600 font-bold underline">first index</span> or <span className="text-rose-400 font-bold">-1</span> if not found.</p>
               <CodeBlock code={`[5, 10, 15].indexOf(10); // 1`} />
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700 relative group overflow-hidden">
               <div className="p-3 bg-indigo-500 text-white rounded-xl w-fit mb-6 shadow-lg shadow-indigo-500/20">
                  <Shuffle size={24} />
               </div>
               <h3 className="text-xl font-black mb-4 dark:text-white">5. .lastIndexOf()</h3>
               <p className="text-sm text-gray-500 mb-6 leading-relaxed">Returns the <span className="text-indigo-600 font-bold underline">last index</span> of a repeating value.</p>
               <CodeBlock code={`[1, 2, 3, 2].lastIndexOf(2); // 3`} />
            </div>
         </div>
      </section>

      {/* ── Section 6-8: Complex Search ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-12">
               <div className="bg-white dark:bg-gray-800 p-10 rounded-[3rem] shadow-xl border border-gray-100 dark:border-gray-700 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                    <Zap size={100} className="text-amber-500" />
                  </div>
                  <h3 className="text-2xl font-black mb-6 flex items-center gap-4 dark:text-white">
                    <Target className="text-amber-500" /> 6. .find() <span className="text-xs px-2 py-1 bg-amber-500 text-white rounded">CORE</span>
                  </h3>
                  <p className="text-gray-500 mb-8 font-medium italic underline decoration-amber-500/30 font-mono">Returns the first matching element itself.</p>
                  <CodeBlock code={`const arr = [10, 20, 30];
const result = arr.find(x => x > 15); // 20`} />
                  <div className="p-4 bg-amber-500/5 rounded-2xl border border-amber-500/10 text-xs font-bold text-amber-700 dark:text-amber-400">
                     🎯 Use Case: Pulling a specific profile from a list of users.
                  </div>
               </div>

               <div className="bg-white dark:bg-gray-800 p-10 rounded-[3rem] shadow-xl border border-gray-100 dark:border-gray-700 relative overflow-hidden">
                  <h3 className="text-2xl font-black mb-6 flex items-center gap-4 dark:text-white">
                    <SearchCode className="text-indigo-500" /> 8. .filter()
                  </h3>
                  <p className="text-gray-500 mb-8 font-medium">Returns a <span className="text-indigo-500 font-bold">New Array</span> containing ALL matches.</p>
                  <CodeBlock code={`const nums = [10, 20, 30];
const big = nums.filter(x => x > 15); // [20, 30]`} />
                  <div className="p-4 bg-indigo-500/5 rounded-2xl border border-indigo-500/10 text-xs font-bold text-indigo-700 dark:text-indigo-400">
                     🎯 Use Case: Search results or price filtering.
                  </div>
               </div>
            </div>

            <div className="bg-slate-900 p-12 rounded-[4rem] shadow-2xl relative overflow-hidden flex flex-col justify-center border border-white/5">
               <div className="absolute top-0 right-0 p-8 text-white opacity-10">
                  <Cpu size={140} />
               </div>
               <h3 className="text-white font-black text-4xl mb-8 flex items-center gap-4">
                  <Fingerprint className="text-sky-500" /> 7. .findIndex()
               </h3>
               <p className="text-gray-400 mb-10 leading-relaxed font-medium">
                  Ideal for scenarios where you need the position of an element based on a condition rather than exact value.
               </p>
               <CodeBlock title="ID Based Search" code={`const arr = [5, 50, 500];
const idx = arr.findIndex(x => x > 40); // 1`} />
               <div className="mt-6 flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                  <Info className="text-sky-500" size={20} />
                  <span className="text-xs text-white/50 font-mono">Returns -1 if no element passes the test.</span>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 9: Objects in Arrays ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <SectionHeader icon={Users} title="9. Searching Objects" subtitle="Navigating collections of data models." color="text-rose-500" />
         <div className="bg-white dark:bg-gray-800 p-12 rounded-[4rem] shadow-xl border border-gray-100 dark:border-gray-700">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div className="space-y-8">
                  <div className="space-y-4">
                     <p className="text-gray-900 dark:text-white font-black text-xl italic uppercase tracking-wider">The "Predicate" Function</p>
                     <p className="text-gray-500 font-medium leading-relaxed">Searching objects requires use of a callback function to access properties.</p>
                  </div>
                  <CodeBlock title="Object Search Logic" code={`const users = [
  { id: 1, name: "A" },
  { id: 2, name: "B" }
];

const user = users.find(u => u.id === 2);
// { id: 2, name: "B" }`} />
               </div>
               <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-rose-500 to-indigo-500 rounded-2xl blur-xl opacity-10"></div>
                  <div className="bg-[#111111] p-8 rounded-3xl border border-white/5 text-xs font-mono text-gray-400 leading-relaxed">
                     <span className="text-rose-500 font-black">// How .find() works internally:</span><br/>
                     1. Iterate through users<br/>
                     2. Pass each user <span className="text-white">u</span> to callback<br/>
                     3. Is <span className="text-white">u.id === 2</span>?<br/>
                     4. YES? Stop and return <span className="text-sky-500 font-bold">u</span><br/>
                     5. NO? Check next item.
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 10: Complete Example ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="bg-slate-900 p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-transparent to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black text-white mb-6 uppercase tracking-tight">10. All-in-One Example 🎯</h2>
              <div className="space-y-4">
                 {[
                   { label: 'Check', text: 'numbers.includes(10)', res: 'true', color: 'bg-emerald-500' },
                   { label: 'Index', text: 'numbers.indexOf(15)', res: '2', color: 'bg-amber-500' },
                   { label: 'Find', text: 'numbers.find(n => n > 10)', res: '15', color: 'bg-sky-500' },
                   { label: 'Filter', text: 'numbers.filter(n => n > 10)', res: '[15, 20]', color: 'bg-indigo-500' }
                 ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-3xl border border-white/5 hover:bg-white/10 transition-all">
                       <div className={`w-3 h-12 ${item.color} rounded-sm shrink-0 shadow-lg`}></div>
                       <div className="flex-1">
                          <code className="text-gray-300 text-xs block">{item.text}</code>
                       </div>
                       <div className="text-white font-mono text-xs opacity-40">→ {item.res}</div>
                    </div>
                 ))}
              </div>
            </div>
            <CodeBlock title="Master Search Script" code={`const numbers = [5, 10, 15, 20];

console.log(numbers.includes(10)); // true
console.log(numbers.indexOf(15));  // 2
console.log(numbers.find(n => n > 10)); // 15
console.log(numbers.filter(n => n > 10)); // [15, 20]`} />
          </div>
        </div>
      </section>

      {/* ── Section 11: Comparison ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <SectionHeader icon={GitCompare} title="11. Comparison Guide" subtitle="A quick reference for returns and use cases." color="text-indigo-500" />
         <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { m: 'includes', ret: 'boolean', use: 'Existence', color: 'text-emerald-500' },
              { m: 'indexOf', ret: 'number', use: 'Exact Value', color: 'text-amber-500' },
              { m: 'find', ret: 'element', use: 'Condition', color: 'text-sky-500' },
              { m: 'findIndex', ret: 'number', use: 'Condition', color: 'text-indigo-500' },
              { m: 'filter', ret: 'array', use: 'Multiple', color: 'text-rose-500' }
            ].map((item, i) => (
               <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl text-center group">
                  <h4 className={`text-sm font-black mb-4 uppercase tracking-tighter ${item.color}`}>{item.m}()</h4>
                  <div className="h-[2px] w-8 bg-gray-100 dark:bg-gray-700 mx-auto mb-4 group-hover:w-16 transition-all"></div>
                  <span className="text-[10px] font-mono text-gray-400 block mb-1">Returns:</span>
                  <span className="text-xs font-black text-gray-900 dark:text-white capitalize">{item.ret}</span>
                  <span className="text-[10px] bg-gray-50 dark:bg-gray-900 px-2 py-1 rounded mt-4 block text-gray-400">{item.use}</span>
               </div>
            ))}
         </div>
      </section>

      {/* ── Section 12: Mistakes ── */}
      <section className="max-w-4xl mx-auto mb-32">
         <SectionHeader icon={AlertTriangle} title="12. Common Mistakes" subtitle="Avoid pitfalls with references and return types." color="text-rose-600" />
         <div className="grid gap-6">
            {[
              { title: 'Using indexOf() for objects', code: 'users.indexOf({id:1}); // ❌ won\'t work', fix: 'Use .find() for objects instead.' },
              { title: 'Expecting filter() to return one value', code: 'Always returns an array ❗', fix: 'Use .find() if you only want ONE result.' }
            ].map((err, i) => (
               <div key={i} className="flex items-start gap-6 p-8 bg-rose-500/5 border border-rose-500/10 rounded-3xl">
                  <div className="p-3 bg-rose-500 text-white rounded-xl">
                     <AlertTriangle size={20} />
                  </div>
                  <div>
                     <h4 className="font-black text-rose-900 dark:text-rose-200 mb-2">{err.title}</h4>
                     <code className="text-rose-600 font-mono text-xs block mb-2">{err.code}</code>
                     <p className="text-xs text-gray-400 font-medium">{err.fix}</p>
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* ── Section 13: Real World ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Globe} title="13. Real-World Use Cases" subtitle="Production applications of searching." color="text-sky-500" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
           {[
             { title: 'Search Bars', icon: Search, color: 'text-sky-500' },
             { title: 'E-commerce Filters', icon: Layout, color: 'text-amber-500' },
             { title: 'User Lookup', icon: Users, color: 'text-indigo-500' },
             { title: 'Validation', icon: ShieldCheck, color: 'text-emerald-500' },
             { title: 'Autocomplete', icon: Activity, color: 'text-purple-500' }
           ].map((item, i) => (
             <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-2 transition-transform overflow-hidden relative">
                <item.icon size={28} className={`${item.color} mb-4 relative z-10`} />
                <span className="font-black text-gray-900 dark:text-white text-xs block relative z-10 uppercase tracking-widest leading-relaxed">{item.title}</span>
                <div className={`absolute -bottom-4 -right-4 w-12 h-12 ${item.color} opacity-5 rounded-full group-hover:scale-[10] transition-transform duration-1000`}></div>
             </div>
           ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
         <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-sky-500 to-transparent mx-auto mb-10"></div>
         <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
           Find Your Needle.
         </p>
         <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose">
           Binary search, linear search, or built-in filter?<br />
           The best search is the one that's most readable and most efficient for your data size.
         </p>
      </footer>

    </div>
  );
};

export default JsArraySearch;