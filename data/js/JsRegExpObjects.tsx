import React, { useState, useMemo } from 'react';
import {
  Zap,
  Activity,
  Terminal,
  Info,
  CheckCircle,
  AlertTriangle,
  RotateCcw,
  Package,
  List,
  Binary,
  Box,
  Search,
  BookOpen,
  Grid,
  ShieldCheck,
  MousePointer2,
  Database,
  Repeat,
  Lightbulb,
  Plus,
  ArrowRight,
  Code2,
  Layers,
  Eye,
  Settings,
  Sparkles,
  HelpCircle,
  Download,
  Maximize,
  Anchor,
  Globe,
  Star,
  ShieldAlert,
  Hash,
  TextCursor,
  CirclePlay,
  Scissors
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
        <div className="bg-[#252526] px-4 py-3 border-b border-gray-800 flex justify-between items-center text-white/90">
          <div className="flex items-center gap-2">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <span className="ml-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] font-sans">{title}</span>
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
      <pre className="p-5 overflow-x-auto text-sm font-mono leading-relaxed text-gray-300 scrollbar-thin scrollbar-thumb-gray-700 font-medium">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-rose-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
  <div className="mb-8 font-sans">
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

const JsRegExpObjects: React.FC = () => {
  const [testText, setTestText] = useState('I love JS and JS loves me!');
  const [regexPattern, setRegexPattern] = useState('JS');
  const [activeFlags, setActiveFlags] = useState('g');

  const executionResult = useMemo(() => {
    try {
      const re = new RegExp(regexPattern, activeFlags);
      const isMatch = re.test(testText);
      const matchedArray = testText.match(re);
      return { isMatch, matchedArray: matchedArray ? Array.from(matchedArray) : [] };
    } catch (e) {
      return { isMatch: false, matchedArray: [] };
    }
  }, [testText, regexPattern, activeFlags]);

  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#020617] min-h-screen font-sans selection:bg-rose-500/30 overflow-x-hidden text-gray-900 dark:text-white">

      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-500/5 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-[140px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-rose-600 dark:text-rose-400 text-[10px] font-black mb-8 border border-rose-100 dark:border-rose-900/50 shadow-xl shadow-rose-500/5 animate-pulse tracking-[0.2em]">
          <Box size={14} className="fill-current" /> INTERNAL MATCHING ENGINE
        </div>
        <h1 className="text-6xl sm:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
          JS RegExp <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-500 to-violet-600 drop-shadow-2xl">
            Objects
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed italic">
          Master the internal mechanics of Regular Expressions in JavaScript to <span className="text-gray-900 dark:text-white font-bold underline decoration-rose-500/30 font-sans tracking-widest text-sm uppercase">Search</span>, <span className="text-gray-900 dark:text-white font-bold underline decoration-rose-500/30 font-sans tracking-widest text-sm uppercase">Validate</span>, and <span className="text-gray-900 dark:text-white font-bold underline decoration-rose-500/30 font-sans tracking-widest text-sm uppercase">Extract</span> complex data strings.
        </p>
      </header>

      {/* ── Section 1: Intro & Creation ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <SectionHeader icon={Info} title="1. What is a RegExp Object?" subtitle="The fundamental matching engine in JavaScript." color="text-rose-500" />
          <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-10 relative overflow-hidden group">
            <div className="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:scale-110 transition-transform duration-1000">
               <Database size={180} />
            </div>
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300 italic leading-relaxed font-sans">
              "A RegExp object is a persistent pattern used to perform matching against text. It's the internal blueprint that JS uses whenever you search or validate strings."
            </p>
            <div className="grid grid-cols-3 gap-4">
               {[
                 { label: "Search 🔍", color: "text-rose-500", bg: "bg-rose-500/5" },
                 { label: "Validate ✔️", color: "text-emerald-500", bg: "bg-emerald-500/5" },
                 { label: "Extract 📦", color: "text-violet-500", bg: "bg-violet-500/5" }
               ].map((goal, i) => (
                 <div key={i} className={`p-4 ${goal.bg} border border-current/5 rounded-2xl text-center group transition-all hover:scale-105`}>
                    <span className={`text-[10px] font-black uppercase tracking-widest ${goal.color}`}>{goal.label}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <SectionHeader icon={Terminal} title="2. Creation Methods" subtitle="Literal syntax vs Constructor syntax." color="text-violet-500" />
          <div className="p-1 sm:p-2 bg-gradient-to-br from-rose-500/20 to-violet-500/20 rounded-[3rem]">
            <div className="bg-white dark:bg-gray-950 rounded-[2.8rem] p-10 shadow-inner space-y-8">
               <div className="space-y-6">
                  <div>
                     <h5 className="text-sm font-black uppercase text-rose-500 tracking-widest mb-4 flex items-center gap-2">
                        <Zap size={14} /> Literal Syntax (Most Common)
                     </h5>
                     <CodeBlock code={`let regex = /hello/;`} title="Literal Notation" />
                  </div>
                  <div className="h-px bg-gray-100 dark:bg-gray-800"></div>
                  <div>
                     <h5 className="text-sm font-black uppercase text-violet-500 tracking-widest mb-4 flex items-center gap-2">
                        <RotateCcw size={14} /> Constructor Syntax
                     </h5>
                     <CodeBlock code={`let regex = new RegExp("hello");`} title="Dynamic Constructor" />
                     <p className="text-[10px] text-gray-500 mt-2 font-medium italic">👉 Useful when patterns need to be built dynamically from variables.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Flags & Visualization ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <SectionHeader icon={Settings} title="3. RegExp Flags" subtitle="Modifying the behavior of the search engine." color="text-rose-500" />
           <div className="p-8 bg-gray-950 rounded-[4rem] border border-white/5 relative group overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:scale-125 transition-transform duration-[2000ms]">
                 <RotateCcw size={300} className="text-rose-500" />
              </div>
              <div className="relative z-10">
                 <div className="overflow-x-auto">
                    <table className="w-full text-left">
                       <thead>
                          <tr className="border-b border-white/10">
                             <th className="py-6 px-4 text-xs font-black text-rose-500 uppercase tracking-widest italic">Flag</th>
                             <th className="py-6 px-4 text-xs font-black text-gray-500 uppercase tracking-widest italic underline decoration-rose-500/20">Meaning</th>
                          </tr>
                       </thead>
                       <tbody className="divide-y divide-white/5">
                          {[
                            { f: "g", m: "Global (find all matches)" },
                            { f: "i", m: "Case-insensitive matching" },
                            { f: "m", m: "Multi-line matching" },
                            { f: "s", m: "Dot matches newline character" },
                            { f: "u", m: "Unicode support" },
                            { f: "y", m: "Sticky matching" }
                          ].map((flag, i) => (
                            <tr key={i} className="group/row hover:bg-white/5 transition-all">
                               <td className="py-4 px-4 font-mono text-rose-500 font-black text-lg">{flag.f}</td>
                               <td className="py-4 px-4 text-gray-400 font-medium italic text-[11px] leading-tight">{flag.m}</td>
                            </tr>
                          ))}
                       </tbody>
                    </table>
                 </div>
                 <div className="mt-8">
                    <CodeBlock title="Flag Example" code={`let regex = /hello/gi;`} />
                 </div>
              </div>
           </div>
        </div>

        <div className="space-y-8">
           <SectionHeader icon={Eye} title="4. Pattern Visualization" subtitle="Anatomy of a RegExp Object." color="text-violet-500" />
           <div className="p-2 sm:p-4 bg-gradient-to-br from-violet-500/20 via-rose-500/20 to-amber-500/20 rounded-[4rem]">
              <div className="bg-white dark:bg-gray-950 rounded-[3.8rem] p-10 md:p-14 shadow-inner space-y-12 relative overflow-hidden">
                 <div className="text-center italic space-y-4">
                    <span className="text-xs font-black text-violet-500 uppercase tracking-widest underline decoration-violet-500/20">Structure: RegExp → /pattern/flags</span>
                    <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-[2.5rem] border-2 border-dashed border-gray-100 dark:border-gray-800">
                       <code className="text-4xl sm:text-5xl font-black text-emerald-500 font-mono italic underline decoration-transparent">/\d+/g</code>
                    </div>
                 </div>

                 <div className="space-y-6">
                    {[
                      { char: "\\d", desc: "digit [0-9]", color: "text-emerald-400", bg: "bg-emerald-400/10" },
                      { char: "+", desc: "one or more occurrences", color: "text-rose-400", bg: "bg-rose-400/10" },
                      { char: "g", desc: "global search (all instances)", color: "text-violet-400", bg: "bg-violet-400/10" }
                    ].map((part, i) => (
                      <div key={i} className="flex items-center gap-6 group">
                         <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-mono text-xl font-black ${part.bg} ${part.color} group-hover:scale-110 transition-transform shadow-lg shadow-current/5`}>
                            {part.char}
                         </div>
                         <div className="flex flex-col">
                            <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest italic group-hover:translate-x-1 transition-transform">{part.desc}</span>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 3: RegExp Methods Sandbox ── */}
      <section className="max-w-6xl mx-auto mb-32 relative group">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[120px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
        <SectionHeader icon={Terminal} title="5. RegExp Methods Sandbox" subtitle="Execute test() and exec() in real-time." color="text-amber-500" />
        
        <div className="p-1 sm:p-2 bg-gradient-to-br from-amber-500/20 via-rose-500/20 to-violet-500/20 rounded-[4rem] text-white">
          <div className="bg-white dark:bg-gray-950 rounded-[3.8rem] p-10 md:p-20 shadow-inner font-sans italic text-gray-900 dark:text-white">
             <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-10">
                   <div className="space-y-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-2 italic">Test Text</label>
                        <textarea
                          value={testText}
                          onChange={(e) => setTestText(e.target.value)}
                          className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 rounded-3xl px-8 py-5 font-black italic outline-none transition-all focus:border-rose-500 text-gray-900 dark:text-white font-sans italic w-full min-h-[120px] resize-none"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-2 italic underline decoration-transparent">Regex Pattern</label>
                        <div className="relative group/input">
                          <input
                            type="text"
                            value={regexPattern}
                            onChange={(e) => setRegexPattern(e.target.value)}
                            className="w-full bg-gray-50 dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 rounded-2xl px-12 py-5 font-black italic outline-none transition-all focus:border-violet-500 text-gray-900 dark:text-white font-sans italic"
                          />
                          <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within/input:text-violet-500 transition-colors">/</div>
                          <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-2">
                            <span className="text-gray-400 group-focus-within/input:text-violet-500 transition-colors">/</span>
                            <input 
                               type="text" 
                               value={activeFlags} 
                               onChange={(e) => setActiveFlags(e.target.value)}
                               className="w-8 bg-transparent text-rose-500 font-black outline-none"
                               maxLength={3}
                            />
                          </div>
                        </div>
                      </div>
                   </div>

                   <div className="grid grid-cols-2 gap-4">
                      <div className="p-6 bg-rose-500/5 rounded-3xl border border-rose-500/10 space-y-4">
                         <div className="flex items-center gap-3 text-rose-500 mb-2">
                            <Zap size={16} />
                            <h6 className="text-[10px] font-black uppercase tracking-widest">test() Result</h6>
                         </div>
                         <div className={`text-4xl font-black italic tracking-tighter transition-all ${executionResult.isMatch ? 'text-emerald-500' : 'text-rose-500 opacity-50'}`}>
                            {executionResult.isMatch.toString()}
                         </div>
                         <p className="text-[9px] text-gray-500 font-medium">👉 Boolean: Found pattern in text?</p>
                      </div>
                      <div className="p-6 bg-violet-500/5 rounded-3xl border border-violet-500/10 space-y-4">
                         <div className="flex items-center gap-3 text-violet-500 mb-2">
                            <Activity size={16} />
                            <h6 className="text-[10px] font-black uppercase tracking-widest">exec() Result</h6>
                         </div>
                         <div className="text-xl font-black text-violet-500 italic truncate underline decoration-transparent">
                            {executionResult.matchedArray.length > 0 ? `["${executionResult.matchedArray[0]}"]` : "null"}
                         </div>
                         <p className="text-[9px] text-gray-500 font-medium">👉 Matches data chunks.</p>
                      </div>
                   </div>
                </div>

                <div className="space-y-6">
                   <div className="p-8 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-6">
                      <h4 className="flex items-center gap-3 text-lg font-black italic text-rose-500 uppercase tracking-tight">
                         <CirclePlay size={20} /> Method breakdown
                      </h4>
                      <div className="space-y-4">
                         <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl space-y-2">
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest underline pb-2 block">.test()</span>
                            <CodeBlock code={`regex.test("${testText.slice(0, 10)}...")`} />
                         </div>
                         <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl space-y-2">
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest underline pb-2 block">.exec()</span>
                            <CodeBlock code={`regex.exec("${testText.slice(0, 10)}...")`} />
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: String Methods with RegExp ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12 font-sans italic">
        <div className="space-y-8">
           <SectionHeader icon={Scissors} title="6. String Methods + RegExp" subtitle="Powerful textual transformations." color="text-violet-500" />
           <div className="grid grid-cols-1 gap-6">
              {[
                { m: "match()", desc: "Extract matches into an array.", code: 'console.log("cat bat".match(/at/g));', res: '["at", "at"]' },
                { m: "replace()", desc: "Swap target patterns with new text.", code: 'console.log("Hello JS".replace(/JS/, "World"));', res: '"Hello World"' },
                { m: "search()", desc: "Find position index of pattern.", code: 'console.log("Hello JS".search(/JS/));', res: "6" },
                { m: "split()", desc: "Cut string into array using regex.", code: 'console.log("a,b,c".split(/,/));', res: '["a", "b", "c"]' }
              ].map((item, i) => (
                <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:shadow-2xl transition-all">
                   <div className="flex justify-between items-center mb-4">
                      <h4 className="text-xl font-black italic text-violet-500 uppercase tracking-tighter flex items-center gap-2">
                         <Sparkles size={16} /> {item.m}
                      </h4>
                      <span className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em]">{item.desc}</span>
                   </div>
                   <CodeBlock code={item.code} />
                   <div className="p-3 bg-violet-500/5 border border-violet-500/10 rounded-xl text-xs font-mono text-center">
                      <span className="text-violet-500 font-black italic uppercase underline decoration-transparent mr-2">Result:</span> {item.res}
                   </div>
                </div>
              ))}
           </div>
        </div>

        <div className="space-y-12">
           <div className="space-y-8">
              <SectionHeader icon={Database} title="7. RegExp Properties" subtitle="Inspect existing patterns dynamically." color="text-rose-500" />
              <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-6">
                 <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 font-mono text-xs italic">
                    let regex = /hello/gi;
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="p-5 bg-rose-500/5 rounded-2xl border border-rose-500/10 space-y-2">
                       <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">.source</span>
                       <span className="text-xl font-black text-rose-500 italic">"hello"</span>
                    </div>
                    <div className="p-5 bg-violet-500/5 rounded-2xl border border-violet-500/10 space-y-2">
                       <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">.flags</span>
                       <span className="text-xl font-black text-violet-500 italic">"gi"</span>
                    </div>
                 </div>
              </div>
           </div>

           <div className="space-y-8">
              <SectionHeader icon={Repeat} title="8. test() vs match()" subtitle="Choosing the right tool for the job." color="text-amber-500" />
              <div className="p-10 bg-gray-950 rounded-[3.5rem] border border-white/5 shadow-2xl overflow-hidden relative group">
                 <div className="absolute inset-0 bg-violet-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 <div className="relative z-10 overflow-x-auto">
                    <table className="w-full text-left">
                       <thead>
                          <tr className="border-b border-white/10">
                             <th className="py-5 px-6 text-xs font-black text-gray-500 uppercase tracking-widest">Feature</th>
                             <th className="py-5 px-6 text-xs font-black text-rose-500 uppercase tracking-widest italic underline decoration-rose-500/10">test()</th>
                             <th className="py-5 px-6 text-xs font-black text-violet-500 uppercase tracking-widest italic underline decoration-violet-500/10">match()</th>
                          </tr>
                       </thead>
                       <tbody className="divide-y divide-white/5">
                          {[
                            { f: "Output", t: "Boolean", m: "Array" },
                            { f: "Use Case", t: "Check/Verify", m: "Extract Data" }
                          ].map((row, i) => (
                            <tr key={i} className="hover:bg-white/5 transition-colors">
                               <td className="py-6 px-6 text-gray-400 text-xs font-black uppercase tracking-widest">{row.f}</td>
                               <td className="py-6 px-6 text-rose-500 font-black italic">{row.t}</td>
                               <td className="py-6 px-6 text-violet-500 font-black italic">{row.m}</td>
                            </tr>
                          ))}
                       </tbody>
                    </table>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 5: Real World Logic ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={ShieldCheck} title="9. Real-World Power Examples" subtitle="RegExp Objects in production scenarios." color="text-rose-500" />
        <div className="grid md:grid-cols-3 gap-8">
           {[
             {
               title: "Email Validation",
               code: `let regex = /^[\\w.-]+@[a-z]+\\.[a-z]{2,}$/;\nregex.test("test@gmail.com"); // true`,
               icon: Globe,
               color: "text-emerald-500",
               desc: "Boolean verification."
             },
             {
               title: "Extract Numbers",
               code: `let text = "Price: 500";\ntext.match(/\\d+/); // ["500"]`,
               icon: Hash,
               color: "text-rose-500",
               desc: "Data extraction."
             },
             {
               title: "Replace Multiple",
               code: `let text = "JS is JS";\ntext.replace(/JS/g, "JavaScript");\n// "JavaScript is JavaScript"`,
               icon: Scissors,
               color: "text-violet-500",
               desc: "Bulk text processing."
             }
           ].map((app, i) => (
             <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-2 transition-transform duration-500 h-full flex flex-col italic">
                <div className="flex justify-between items-start mb-6">
                   <div className={`p-4 rounded-2xl bg-gray-50 dark:bg-gray-950 ${app.color} group-hover:scale-110 transition-transform`}>
                      <app.icon size={22} />
                   </div>
                   <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{app.desc}</span>
                </div>
                <h4 className="text-xl font-black italic mb-4 tracking-tight">🎯 {app.title}</h4>
                <div className="mt-auto">
                   <CodeBlock title={app.title} code={app.code} />
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* ── Section 6: Recommendations & Tips ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12 font-sans italic">
        <div className="space-y-8">
          <SectionHeader icon={Lightbulb} title="Expert Advice" subtitle="Production-level logic for RegExp development." color="text-amber-500" />
          <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-12">
            {[
              { label: "Use test() for Validation", text: "Fast, simple, and returns a boolean. Perfect for if-statements.", icon: ShieldCheck, color: "text-emerald-500" },
              { label: "Use match() for Extraction", text: "When you need the actual data strings instead of just knowing it exists.", icon: Download, color: "text-violet-500" },
              { label: "Prefer Literal Syntax", text: "Literal syntax (/pattern/) is cleaner, faster, and easier to read.", icon: Zap, color: "text-rose-500" },
              { label: "replace() for Processing", text: "Extremely powerful for sanitizing input or formatting text blocks.", icon: Scissors, color: "text-blue-500" }
            ].map((rec, i) => (
              <div key={i} className="flex gap-6 items-start group">
                <div className={`p-4 rounded-2xl bg-gray-50 dark:bg-gray-950 shadow-sm ${rec.color} group-hover:scale-110 transition-transform`}>
                  <rec.icon size={20} />
                </div>
                <div>
                  <h6 className={`text-sm font-black italic underline decoration-transparent ${rec.color} block mb-1 uppercase tracking-widest`}>{rec.label}</h6>
                  <p className="text-xs text-gray-500 font-medium italic underline decoration-gray-500/10 leading-relaxed font-sans">{rec.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <SectionHeader icon={Zap} title="⚡ Workflow Power" subtitle="Speed up your development cycle." color="text-rose-500" />
          <div className="grid grid-cols-1 gap-4">
            {[
              { title: "Combine Flags", text: "Use flags like /gi to perform global, case-insensitive searches simultaneously.", code: "/hello/gi", icon: Repeat },
              { title: "Debug Regex", text: "Always console.log(regex) or use Regex101 to verify pattern logic.", code: "Visual Logic Check", icon: Search },
              { title: "Global Behavior", text: "Be careful! The 'g' flag changes the behavior of .exec() as it tracks lastIndex.", code: "Advanced State Risk", icon: AlertTriangle },
              { title: "Dynamic Logic", text: "Use the constructor new RegExp() ONLY when patterns depend on user input or variables.", code: "new RegExp(userInput, 'g')", icon: RotateCcw }
            ].map((tip, i) => (
              <div key={i} className="p-8 bg-gray-950 rounded-[2.8rem] border border-white/5 shadow-2xl space-y-4 group">
                <div className="flex justify-between items-center">
                  <h5 className="text-white font-black italic underline decoration-rose-500/20 underline decoration-transparent flex items-center gap-3">
                     <tip.icon size={16} className="text-rose-500" /> {tip.title}
                  </h5>
                  <ArrowRight size={16} className="text-rose-500 opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0" />
                </div>
                <p className="text-gray-500 text-[11px] italic leading-relaxed">{tip.text}</p>
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl font-mono text-[10px] text-rose-400 underline decoration-transparent">{tip.code}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24 relative italic">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-rose-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em] leading-tight font-sans">
          Internal Pattern. <br /> External Match.
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium italic underline decoration-transparent max-w-2xl mx-auto font-medium font-sans leading-relaxed">
          RegExp Objects are the bridge between raw patterns and executable code. Understanding their methods and flags is the key to building high-performance text logic in modern JavaScript applications.
        </p>
      </footer>

    </div>
  );
};

export default JsRegExpObjects;