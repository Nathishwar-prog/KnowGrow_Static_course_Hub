import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Hash, 
  Zap, 
  Play, 
  Terminal, 
  Activity, 
  Layout, 
  Info, 
  ArrowRight,
  Code2,
  CheckCircle,
  AlertTriangle,
  RotateCcw,
  ShieldCheck,
  Package,
  Cpu,
  RefreshCw,
  Eye,
  Type,
  List,
  Mail,
  Filter,
  Layers,
  Box,
  Binary
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
            {copied ? <CheckCircle size={14} className="text-green-400" /> : <Package size={14} />}
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

const JsStringSearch: React.FC = () => {
  const [sourceText, setSourceText] = useState("JavaScript is awesome");
  const [searchQuery, setSearchQuery] = useState("awesome");

  const searchResults = useMemo(() => {
    const lowerSource = sourceText.toLowerCase();
    const lowerQuery = searchQuery.toLowerCase();
    
    return {
      indexOf: sourceText.indexOf(searchQuery),
      includes: sourceText.includes(searchQuery),
      startsWith: sourceText.startsWith(searchQuery),
      endsWith: sourceText.endsWith(searchQuery),
      caseInsensitive: lowerSource.includes(lowerQuery)
    };
  }, [sourceText, searchQuery]);

  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0f172a] min-h-screen font-sans selection:bg-sky-500/30 overflow-x-hidden text-gray-900 dark:text-white">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[140px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-sky-600 dark:text-sky-400 text-[10px] font-black mb-8 border border-sky-100 dark:border-sky-900/50 shadow-xl shadow-sky-500/5 animate-pulse tracking-[0.2em]">
          <Search size={14} className="fill-current" /> PATTERN MATCHING CORE
        </div>
        <h1 className="text-6xl sm:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
          String <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 drop-shadow-2xl">
            Search
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          Master the art of finding <span className="text-gray-900 dark:text-white font-bold italic underline decoration-sky-500/30">characters</span> or <span className="text-gray-900 dark:text-white font-bold italic underline decoration-indigo-500/30">substrings</span> within text using modern JavaScript methods.
        </p>
      </header>

      {/* ── Section 1: Intro ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <SectionHeader icon={Info} title="1. What is String Search?" subtitle="Extracting meaning from raw characters." color="text-sky-500" />
            <div className="p-8 bg-white dark:bg-gray-800 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl">
              <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                String Search methods are used to find characters or substrings inside a string.
              </p>
              <div className="p-6 bg-sky-500/5 border border-sky-500/10 rounded-3xl flex items-center gap-4">
                 <div className="p-4 rounded-2xl bg-sky-500 text-white shadow-xl">
                    <Search size={24} />
                 </div>
                 <div>
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">Practical Example</span>
                    <p className="text-lg font-mono font-black italic">"Hello World" ➔ find "World"</p>
                 </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-lg group hover:shadow-2xl transition-all">
             <table className="w-full text-left">
                <thead>
                   <tr className="border-b border-gray-100 dark:border-gray-700">
                      <th className="py-4 px-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Method</th>
                      <th className="py-4 px-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Description</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 dark:divide-gray-700/50">
                   {[
                      { m: 'indexOf()', d: 'First occurrence' },
                      { m: 'lastIndexOf()', d: 'Last occurrence' },
                      { m: 'search()', d: 'Search with regex' },
                      { m: 'includes()', d: 'Returns true/false' },
                      { m: 'startsWith()', d: 'Check beginning' },
                      { m: 'endsWith()', d: 'Check ending' },
                      { m: 'match()', d: 'Extract matches' },
                      { m: 'matchAll()', d: 'Extract all matches' },
                   ].map((item, i) => (
                      <tr key={i} className="group/row hover:bg-sky-50 dark:hover:bg-sky-900/10 transition-colors">
                        <td className="py-3 px-4 font-mono text-sm text-sky-500 font-bold tracking-tighter italic">{item.m}</td>
                        <td className="py-3 px-4 text-xs text-gray-500 font-medium">{item.d}</td>
                      </tr>
                   ))}
                </tbody>
             </table>
          </div>
        </div>
      </section>

      {/* ── Section 2: Interactive Search Lab ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="bg-white dark:bg-gray-800 p-12 rounded-[4rem] shadow-2xl border border-gray-100 dark:border-gray-700 relative overflow-hidden">
          <SectionHeader icon={Activity} title="2. Real-Time Search Lab" subtitle="Interact with different methods to see matching results." color="text-sky-500" />
          
          <div className="grid lg:grid-cols-2 gap-12 mt-12 items-center">
             <div className="space-y-8">
                <p className="text-gray-500 font-medium leading-relaxed">
                   Type a source string and a query to see how various JavaScript methods interpret the search logic.
                </p>
                <div className="p-10 bg-gray-50 dark:bg-gray-900/50 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 space-y-8">
                   <div className="space-y-4">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block italic underline decoration-sky-500/20">Source Text</label>
                      <input 
                        type="text" 
                        value={sourceText} 
                        onChange={(e) => setSourceText(e.target.value)}
                        className="w-full p-5 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 font-mono text-lg font-black text-sky-600 focus:ring-2 focus:ring-sky-500 outline-none transition-all"
                      />
                   </div>
                   <div className="space-y-4">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block italic underline decoration-indigo-500/20">Search Query</label>
                      <input 
                        type="text" 
                        value={searchQuery} 
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full p-5 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 font-mono text-lg font-black text-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                      />
                   </div>
                </div>
                <div className="p-6 bg-amber-500/5 border border-amber-500/10 rounded-3xl">
                   <p className="text-amber-600 dark:text-amber-400 text-xs font-black flex items-center gap-2 italic">
                      <AlertTriangle size={18} /> JavaScript search is case-sensitive by default! "Java" != "java".
                   </p>
                </div>
             </div>

             <div className="bg-gray-950 p-12 rounded-[3.5rem] border border-white/5 space-y-8">
                <div className="flex justify-between items-center text-[10px] font-black text-white/20 tracking-[0.4em] uppercase">
                   <span>Method Results</span>
                   <span className="text-sky-500 italic underline">LIVE VIEW</span>
                </div>
                <div className="space-y-4 font-mono">
                   {[
                      { label: "indexOf()", res: searchResults.indexOf, desc: "Returns position or -1" },
                      { label: "includes()", res: searchResults.includes.toString(), desc: "Best for existence" },
                      { label: "startsWith()", res: searchResults.startsWith.toString(), desc: "Check beginning" },
                      { label: "endsWith()", res: searchResults.endsWith.toString(), desc: "Check ending" },
                      { label: "Safe Search", res: searchResults.caseInsensitive.toString(), desc: "Normalized Case" }
                   ].map((row, i) => (
                      <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl group/row">
                        <div className="flex flex-col">
                           <span className="text-sky-400 font-black text-xs">{row.label}</span>
                           <span className="text-[9px] text-white/20 uppercase tracking-widest">{row.desc}</span>
                        </div>
                        <div className={`text-lg font-black ${typeof row.res === 'number' ? (row.res === -1 ? 'text-rose-400' : 'text-emerald-400') : (row.res === 'true' ? 'text-emerald-400' : 'text-rose-400')}`}>
                           {row.res}
                        </div>
                      </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Index Visualization ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Hash} title="3. Positional Visualization" subtitle="Understanding the zero-indexed map." color="text-indigo-500" />
        <div className="bg-white dark:bg-gray-800 p-12 rounded-[4rem] border border-gray-100 dark:border-gray-700 shadow-xl overflow-x-auto overflow-y-hidden">
           <div className="inline-flex flex-col gap-6">
              <div className="flex gap-2">
                 {"JavaScript".split("").map((char, i) => (
                    <div key={i} className="w-12 h-16 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-800 flex items-center justify-center font-mono text-2xl font-black text-indigo-500 shadow-sm">
                       {char}
                    </div>
                 ))}
              </div>
              <div className="flex gap-2">
                 {"JavaScript".split("").map((_, i) => (
                    <div key={i} className="w-12 h-10 flex items-center justify-center font-mono text-xs font-black text-gray-400">
                       {i}
                    </div>
                 ))}
              </div>
           </div>
           <div className="mt-8 p-6 bg-indigo-500/5 border border-indigo-500/10 rounded-2xl flex items-center gap-6">
              <div className="p-3 bg-indigo-500 text-white rounded-xl shadow-lg shadow-indigo-500/20">
                 <Hash size={20} />
              </div>
              <code className="text-xl font-black text-indigo-500 italic">"JavaScript".indexOf("Script") ➔ 4</code>
           </div>
        </div>
      </section>

      {/* ── Section 4: Main Methods Detail ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="grid md:grid-cols-3 gap-8">
           {[
             { 
               title: "indexOf()", 
               icon: Hash, 
               color: "text-sky-500 bg-sky-500/10",
               body: "Returns the first occurrence of a substring. Returns -1 if not found.",
               code: 'text.indexOf("is"); // 11'
             },
             { 
               title: "lastIndexOf()", 
               icon: RefreshCw, 
               color: "text-indigo-500 bg-indigo-500/10",
               body: "Finds the last occurrence of the query. Essential for path parsing.",
               code: 'text.lastIndexOf("Hello"); // 6'
             },
             { 
               title: "includes()", 
               icon: Zap, 
               color: "text-emerald-500 bg-emerald-500/10",
               body: "Modern, readable check for existence. Returns boolean true/false.",
               code: 'text.includes("love"); // true'
             }
           ].map((item, i) => (
             <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-6 flex flex-col group hover:-translate-y-2 transition-transform duration-500">
                <div className={`p-4 rounded-2xl w-fit ${item.color}`}>
                   <item.icon size={24} />
                </div>
                <h4 className="text-2xl font-black italic tracking-tight">{item.title}</h4>
                <p className="text-sm text-gray-500 font-medium leading-relaxed">{item.body}</p>
                <div className="mt-auto p-4 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-800 font-mono text-[10px] text-gray-400 font-bold">
                   {item.code}
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* ── Section 5: Regex & Advanced Search ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-gradient-to-br from-gray-900 to-black p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group border border-white/5">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
               <Binary size={300} className="text-white" />
            </div>
            <SectionHeader icon={Cpu} title="4. Advanced Pattern Matching" subtitle="Leveraging Regex for complex extractions." color="text-indigo-400" />
            
            <div className="grid lg:grid-cols-2 gap-12 mt-12 items-center relative z-10">
               <div className="space-y-6">
                  <div className="p-8 bg-white/5 rounded-[3rem] border border-white/5 space-y-4">
                     <h5 className="text-white font-black text-xl italic flex items-center gap-2">
                        <Search size={20} className="text-indigo-400" /> search()
                     </h5>
                     <p className="text-gray-400 text-sm leading-relaxed mb-4 italic">
                        Similar to indexOf(), but supports powerful Regular Expressions.
                     </p>
                     <CodeBlock code={`let text = "Hello JS";
console.log(text.search("JS")); // 6`} />
                  </div>
                  <div className="p-8 bg-white/5 rounded-[3rem] border border-white/5 space-y-4">
                     <h5 className="text-white font-black text-xl italic flex items-center gap-2">
                        <Layers size={20} className="text-emerald-400" /> match() & matchAll()
                     </h5>
                     <p className="text-gray-400 text-sm leading-relaxed mb-4 italic">
                        Extract matches as arrays. Use matchAll for detailed iterator results.
                     </p>
                     <CodeBlock code={`let text = "cat bat rat";
console.log(text.match(/at/g)); // ["at", "at", "at"]`} />
                  </div>
               </div>

               <div className="space-y-6">
                  <CodeBlock title="matchAll Implementation" code={`let text = "test1 test2";
let matches = text.matchAll(/test\\d/g);

for (let m of matches) {
  console.log(m[0]);
}`} />
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 6: Real World ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Layout} title="5. Real-World Applications" subtitle="Implementing search logic in production." color="text-sky-500" />
        <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-8 group">
               <div className="flex items-center gap-4">
                  <div className="p-4 bg-emerald-500/10 text-emerald-500 rounded-2xl shadow-lg">
                    <Filter size={24} />
                  </div>
                  <h4 className="text-2xl font-black italic tracking-tight">Search Bar Filter</h4>
               </div>
               <p className="text-gray-500 font-medium">Using <code>.filter()</code> and <code>.includes()</code> to create dynamic search lists.</p>
               <CodeBlock code={`let result = products.filter(item =>
  item.toLowerCase().includes("an")
);
// ["Banana", "Mango"]`} title="Product Filter Logic" />
            </div>

            <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-8 group">
               <div className="flex items-center gap-4">
                  <div className="p-4 bg-amber-500/10 text-amber-500 rounded-2xl shadow-lg">
                    <Mail size={24} />
                  </div>
                  <h4 className="text-2xl font-black italic tracking-tight">Email Validation</h4>
               </div>
               <p className="text-gray-500 font-medium font-sans">Quick existence checks for required characters like '@'.</p>
               <CodeBlock code={`let email = "user@gmail.com";
if (email.includes("@")) {
  console.log("Valid");
}`} title="Quick Validation" />
            </div>
        </div>
      </section>

      {/* ── Section 7: Recommendations ── */}
      <section className="max-w-5xl mx-auto mb-32">
        <SectionHeader icon={ShieldCheck} title="6. Pro Recommendations & Tips" subtitle="How to search efficiently like a Senior Dev." color="text-sky-500" />
        <div className="grid md:grid-cols-3 gap-8 mb-12">
           {[
             { title: "Favor includes()", desc: "For simple existence checks, includes() is significantly more readable than indexOf().", icon: Zap, color: "text-emerald-500 bg-emerald-500/10" },
             { title: "Regex Caution", desc: "Use Regex only when patterns are complex. Avoid them for fixed character finding.", icon: Binary, color: "text-rose-500 bg-rose-500/10" },
             { title: "Normalize Always", desc: "Always call toLowerCase() before searching to prevent case-sensitivity bugs.", icon: RefreshCw, color: "text-sky-500 bg-sky-500/10" }
           ].map((item, i) => (
             <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-4">
                <div className={`p-4 rounded-2xl w-fit ${item.color}`}>
                   <item.icon size={24} />
                </div>
                <h4 className="text-xl font-black text-gray-900 dark:text-white tracking-tight italic underline decoration-sky-500/10">{item.title}</h4>
                <p className="text-sm text-gray-500 font-medium leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>

        {/* ── Tips Lab footer ── */}
        <div className="bg-gray-950 p-12 rounded-[4rem] border border-white/5 relative overflow-hidden group shadow-[0_0_50px_-12px_rgba(14,165,233,0.15)]">
           <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-125 transition-transform duration-1000">
              <Zap size={200} className="text-sky-500" />
           </div>
           <h4 className="text-2xl font-black text-white mb-10 flex items-center gap-4 italic tracking-tight">
              <Terminal size={24} className="text-sky-500" /> Advanced Tips & Tricks
           </h4>
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {[
                { label: "Quick Check", code: 'text.includes("JS")', icon: Zap },
                { label: "Pattern Check", code: "/\\d/ // numbers", icon: Binary },
                { label: "Best Practice", code: "text.toLowerCase()", icon: ShieldCheck },
                { label: "Combine Logic", code: "startsWith + endsWith", icon: Layout }
              ].map((tip, i) => (
                <div key={i} className="space-y-3 p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                   <div className="w-10 h-10 rounded-xl bg-sky-500 text-white flex items-center justify-center text-xs shadow-lg">
                      <tip.icon size={18} />
                   </div>
                   <div>
                      <span className="text-white font-black text-sm block mb-1">{tip.label}</span>
                      <code className="text-[10px] text-gray-500 font-mono italic tracking-tighter">{tip.code}</code>
                   </div>
                </div>
              ))}
           </div>
           <div className="mt-10 p-5 border border-rose-500/20 bg-rose-500/5 rounded-3xl flex items-center gap-4 group/warn">
              <AlertTriangle size={24} className="text-rose-500 animate-pulse" />
              <p className="text-xs font-black text-rose-500/80 italic tracking-tight">
                 AVOID using indexOf() !== -1 for boolean existence. includes() is the modern and correct approach.
              </p>
           </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
         <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-sky-500 to-transparent mx-auto mb-10"></div>
         <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
            Seek and Extract.
         </p>
         <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose">
            Understanding string search patterns is the foundation of powerful search engines and data validation tools.<br />
            Normalize your inputs, choose the right method for the job, and always code for performance.
         </p>
      </footer>

    </div>
  );
};

export default JsStringSearch;