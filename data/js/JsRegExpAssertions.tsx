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
  Scissors,
  Table,
  Cpu,
  Workflow,
  ClipboardList,
  CircleSlash,
  Target,
  Lock,
  Unlock,
  ShieldQuestion,
  SearchCode
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

const JsRegExpAssertions: React.FC = () => {
  const [visualText, setVisualText] = useState('100px 200em 300px');
  const [activeAssertion, setActiveAssertion] = useState('\\d+(?=px)');

  const visualMatches = useMemo(() => {
    try {
      const re = new RegExp(activeAssertion, 'g');
      const res = visualText.match(re);
      return res ? Array.from(res) : [];
    } catch (e) {
      return [];
    }
  }, [visualText, activeAssertion]);

  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#020617] min-h-screen font-sans selection:bg-rose-500/30 overflow-x-hidden text-gray-900 dark:text-white">

      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-500/5 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[140px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-rose-600 dark:text-rose-400 text-[10px] font-black mb-8 border border-rose-100 dark:border-rose-900/50 shadow-xl shadow-rose-500/5 animate-pulse tracking-[0.2em]">
          <ShieldQuestion size={14} className="fill-current" /> CONDITIONAL PATTERN LOGIC
        </div>
        <h1 className="text-6xl sm:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
          JS RegExp <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-500 to-indigo-600 drop-shadow-2xl font-sans italic">
            Assertions
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed italic">
          Master the conditional constraints that must be true for a match to succeed, but are <span className="text-gray-900 dark:text-white font-bold underline decoration-rose-500/30">never consumed</span> by the matching engine.
        </p>
      </header>

      {/* ── Section 1: Intro ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <SectionHeader icon={Info} title="1. What are Assertions?" subtitle="Look-ahead and boundary conditions." color="text-rose-500" />
          <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-10 relative overflow-hidden group">
            <div className="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:scale-110 transition-transform duration-1000 rotate-12">
               <SearchCode size={180} />
            </div>
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300 italic leading-relaxed font-sans">
              "Assertions are zero-width matches. They check a specific condition (like 'is there a $ sign before this?') but don't actually include that symbol in your final match result. Think of it as a logical check rather than a character grab."
            </p>
            <div className="p-6 bg-rose-500/5 border border-rose-500/10 rounded-2xl italic">
               <span className="text-[10px] font-black text-rose-600 uppercase tracking-widest block underline pb-2">Golden Rule</span>
               <p className="text-[11px] text-gray-400 italic font-sans leading-relaxed">“Check this condition… but don’t include it in the result.”</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
           <SectionHeader icon={Table} title="2. Types of Assertions" subtitle="The complete logic catalog." color="text-indigo-500" />
           <div className="p-8 bg-gray-950 rounded-[4rem] border border-white/5 relative group overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-12 opacity-[0.02] group-hover:scale-125 transition-transform duration-[2000ms]">
                 <Grid size={300} className="text-rose-500" />
              </div>
              <div className="relative z-10 overflow-x-auto text-[10px] space-y-8">
                 <table className="w-full text-left">
                    <thead>
                       <tr className="border-b border-white/10 uppercase tracking-[0.2em] italic font-black text-gray-500">
                          <th className="py-4 px-4">Assertion</th>
                          <th className="py-4 px-4 text-rose-500">Name</th>
                          <th className="py-4 px-4 text-indigo-500">Description</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 font-mono italic">
                       {[
                         { a: "^", n: "Start anchor", d: "Start of string" },
                         { a: "$", n: "End anchor", d: "End of string" },
                         { a: "\\b", n: "Word boundary", d: "Start/end of a word" },
                         { a: "\\B", n: "Non-word boundary", d: "Not a boundary" },
                         { a: "(?=...)", n: "Pos Lookahead", d: "Must be followed by" },
                         { a: "(?!...)", n: "Neg Lookahead", d: "Must NOT be followed" },
                         { a: "(?<=...)", n: "Pos Lookbehind", d: "Must be preceded by" },
                         { a: "(?<!...)", n: "Neg Lookbehind", d: "Must NOT be preceded" }
                       ].map((row, i) => (
                         <tr key={i} className="hover:bg-white/5 transition-all group/row">
                            <td className="py-3 px-4 font-black text-rose-500 text-lg group-hover/row:translate-x-1 transition-transform">{row.a}</td>
                            <td className="py-3 px-4 text-gray-400 font-black uppercase tracking-widest text-[8px]">{row.n}</td>
                            <td className="py-3 px-4 text-gray-500 font-medium italic leading-tight">{row.d}</td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 2: Anchor Assertions ── */}
      <section className="max-w-6xl mx-auto mb-32 italic">
        <SectionHeader icon={Anchor} title="3. Anchor Assertions" subtitle="Pinning patterns to boundaries and positions." color="text-rose-500" />
        
        <div className="grid lg:grid-cols-2 gap-x-12 gap-y-16">
           {/* ^ and $ */}
           <div className="space-y-6 group">
              <h4 className="text-2xl font-black italic text-rose-500 flex items-center gap-4">
                 <div className="p-3 bg-rose-500/10 rounded-2xl shadow-xl shadow-rose-500/5">
                    <Maximize size={24} />
                 </div>
                 3.1 & 3.2 Start & End (^, $)
              </h4>
              <p className="text-gray-500 font-medium italic font-sans italic leading-relaxed">Ensure your pattern matches exactly from the start to the end of the text stream.</p>
              <div className="grid grid-cols-2 gap-4">
                 <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 font-mono text-[9px] italic">
                    /^Hello/.test("Hello World"); // true
                 </div>
                 <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 font-mono text-[9px] italic">
                    /World$/.test("Hello World"); // true
                 </div>
              </div>
           </div>

           {/* Word Boundary */}
           <div className="space-y-6 group">
              <h4 className="text-2xl font-black italic text-indigo-500 flex items-center gap-4">
                 <div className="p-3 bg-indigo-500/10 rounded-2xl shadow-xl shadow-indigo-500/5">
                    <Grid size={24} />
                 </div>
                 3.3 Word Boundary (\b)
              </h4>
              <p className="text-gray-500 font-medium italic font-sans italic leading-relaxed">Matches only if the target is a whole word, not a fragment within another word.</p>
              <CodeBlock title="Exact word match" code={'let text = "cat scatter";\nlet result = text.match(/\\bcat\\b/g);\n\nconsole.log(result); // ["cat"]'} />
           </div>

           {/* Non-Word Boundary */}
           <div className="space-y-6 group border-t border-gray-100 dark:border-gray-800 pt-12 lg:col-span-2">
              <h4 className="text-2xl font-black italic text-emerald-500 flex items-center gap-4">
                 <div className="p-3 bg-emerald-500/10 rounded-2xl shadow-xl shadow-emerald-500/5">
                    <CircleSlash size={24} />
                 </div>
                 3.4 Non-Word Boundary (\B)
              </h4>
              <p className="text-gray-500 font-medium italic font-sans italic leading-relaxed md:w-1/2">The inverse requirement: matches only if the pattern is NOT at a word boundary (i.e. it's part of a larger word).</p>
              <CodeBlock title="Internal fragment match" code={'let text = "scatter";\nlet result = text.match(/\\Bcat/g);\n\nconsole.log(result); // ["cat"]'} />
           </div>
        </div>
      </section>

      {/* ── Section 3: Lookahead Assertions ── */}
      <section className="max-w-6xl mx-auto mb-32 italic">
        <SectionHeader icon={Search} title="4. Lookahead Assertions" subtitle="Inspecting the text ahead of your match." color="text-violet-500" />
        <div className="grid lg:grid-cols-2 gap-8">
           <div className="bg-white dark:bg-gray-800 p-10 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-8 relative group overflow-hidden h-full flex flex-col italic">
              <h4 className="text-2xl font-black italic text-violet-500 mb-2 flex items-center gap-3 uppercase tracking-tighter">
                 <Eye size={24} /> 4.1 Positive Lookahead (?=...)
              </h4>
              <p className="text-gray-500 font-medium italic mb-6">"Match only if followed by a specific pattern."</p>
              <CodeBlock title="Matching numbers only if followed by 'px'" code={'let text = "100px 200em 300px";\nlet result = text.match(/\\d+(?=px)/g);\n\nconsole.log(result); // ["100", "300"]'} />
              <div className="mt-auto p-4 bg-violet-500/5 border border-violet-500/10 rounded-2xl text-[10px] text-violet-600 font-black italic">👉 Matches numbers ONLY if followed by "px".</div>
           </div>

           <div className="bg-white dark:bg-gray-800 p-10 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-8 relative group overflow-hidden h-full flex flex-col italic">
              <h4 className="text-2xl font-black italic text-rose-500 mb-2 flex items-center gap-3 uppercase tracking-tighter">
                 <CircleSlash size={24} /> 4.2 Negative Lookahead (?!...)
              </h4>
              <p className="text-gray-500 font-medium italic mb-6">"Match only if NOT followed by a specific pattern."</p>
              <CodeBlock title="Excluding units" code={'let text = "100px 200em 300px";\nlet result = text.match(/\\d+(?!px)/g);\n\nconsole.log(result); // ["200"]'} />
              <div className="mt-auto p-4 bg-rose-500/5 border border-rose-500/10 rounded-2xl text-[10px] text-rose-600 font-black italic italic">👉 Matches numbers NOT followed by "px".</div>
           </div>
        </div>
      </section>

      {/* ── Section 4: Lookbehind Assertions ── */}
      <section className="max-w-6xl mx-auto mb-32 italic">
        <SectionHeader icon={RotateCcw} title="5. Lookbehind Assertions" subtitle="Inspecting the text behind your current match." color="text-indigo-500" />
        <div className="grid lg:grid-cols-2 gap-8">
           <div className="bg-white dark:bg-gray-800 p-10 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-8 relative group overflow-hidden h-full flex flex-col italic">
              <h4 className="text-2xl font-black italic text-emerald-500 mb-2 flex items-center gap-3 uppercase tracking-tighter">
                 <Unlock size={24} /> 5.1 Positive Lookbehind (?&lt;=...)
              </h4>
              <p className="text-gray-500 font-medium italic mb-6">"Match only if preceded by a specific pattern."</p>
              <CodeBlock title="Currency extraction" code={'let text = "$100 $200 €300";\nlet result = text.match(/(?<=\\$)\\d+/g);\n\nconsole.log(result); // ["100", "200"]'} />
           </div>

           <div className="bg-white dark:bg-gray-800 p-10 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-8 relative group overflow-hidden h-full flex flex-col italic">
              <h4 className="text-2xl font-black italic text-rose-500 mb-2 flex items-center gap-3 uppercase tracking-tighter">
                 <Lock size={24} /> 5.2 Negative Lookbehind (?&lt;!...)
              </h4>
              <p className="text-gray-500 font-medium italic mb-6">"Match only if NOT preceded by a specific pattern."</p>
              <CodeBlock title="Exclude dollar values" code={'let text = "$100 200 300";\nlet result = text.match(/(?<!\\$)\\d+/g);\n\nconsole.log(result); // ["200", "300"]'} />
           </div>
        </div>
      </section>

      {/* ── Section 5: Visualization ── */}
      <section className="max-w-6xl mx-auto mb-32 relative group font-sans">
        <SectionHeader icon={Eye} title="6. Condition Mapping" subtitle="Witnessing zero-width matching in real-time." color="text-rose-500" />
        
        <div className="p-1 sm:p-2 bg-gradient-to-br from-rose-500/20 via-violet-500/20 to-indigo-500/20 rounded-[4rem]">
          <div className="bg-white dark:bg-gray-950 rounded-[3.8rem] p-10 md:p-20 shadow-inner italic overflow-hidden relative">
             <div className="grid lg:grid-cols-2 gap-16 items-center italic">
                <div className="space-y-8 italic">
                   <div className="space-y-2 italic">
                      <label className="text-[10px] font-black uppercase text-gray-400 tracking-[0.4em] italic mb-4 block underline decoration-rose-500/20">Target String</label>
                      <input 
                         type="text" 
                         value={visualText} 
                         onChange={(e) => setVisualText(e.target.value)}
                         className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 rounded-3xl px-8 py-5 font-black italic outline-none transition-all focus:border-rose-500 text-gray-900 dark:text-white w-full"
                      />
                   </div>
                   <div className="space-y-4">
                      <h3 className="text-4xl font-black italic tracking-tighter leading-tight italic">
                        Assertion: <span className="text-rose-500">{activeAssertion}</span>
                      </h3>
                      <div className="flex flex-wrap gap-2">
                         {['\\d+(?=px)', '\\d+(?!px)', '(?<=\\$)\\d+', '(?<!\\$)\\d+'].map((a) => (
                            <button 
                               key={a}
                               onClick={() => setActiveAssertion(a)}
                               className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeAssertion === a ? 'bg-rose-500 text-white shadow-xl shadow-rose-500/20' : 'bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-gray-900 dark:hover:text-white'}`}
                            >
                               {a}
                            </button>
                         ))}
                      </div>
                      <div className="space-y-4 mt-8 italic">
                         <span className="text-[10px] font-black underline decoration-rose-500/10">Step-by-step logic:</span>
                         <div className="space-y-2 text-[11px] font-medium text-gray-500 italic">
                            <p>→ 100: checks if followed by px... ✅ Match!</p>
                            <p>→ 200: checks if followed by px... ❌ Fails (it's em)</p>
                         </div>
                      </div>
                   </div>
                </div>

                <div className="relative">
                   <div className="p-12 bg-gray-950 rounded-[3rem] border border-white/5 shadow-2xl space-y-8 relative group overflow-hidden text-center min-h-[350px] flex flex-col justify-center italic border-rose-500/10 underline decoration-transparent">
                      <div className="absolute top-0 right-0 p-10 opacity-[0.02] group-hover:rotate-45 transition-transform duration-1000">
                         <Workflow size={200} className="text-rose-500" />
                      </div>
                      <div className="relative z-10 space-y-8 uppercase underline decoration-transparent italic">
                         <span className="text-[10px] font-black italic tracking-[0.3em] text-gray-500 underline decoration-transparent">MATCH SUCCESS</span>
                         <div className="flex flex-wrap gap-3 justify-center">
                            {visualMatches.length === 0 ? (
                               <span className="text-gray-700 italic font-black uppercase tracking-widest text-xs">Zero Logical Success</span>
                            ) : (
                               visualMatches.map((m, i) => (
                                  <div key={i} className="px-6 py-2 bg-rose-500 text-white font-black rounded-xl shadow-lg shadow-rose-500/20 animate-in zoom-in italic">
                                     {m}
                                  </div>
                               ))
                            )}
                         </div>
                         <div className="h-px bg-white/5 w-1/2 mx-auto"></div>
                         <code className="text-rose-400 text-xs font-mono block italic underline decoration-transparent">Result: {JSON.stringify(visualMatches)}</code>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Real-World Scenarios ── */}
      <section className="max-w-6xl mx-auto mb-32 italic">
        <SectionHeader icon={ShieldCheck} title="7. Industrial Applications" subtitle="Assertions used in secure production environments." color="text-rose-500" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 italic">
           {[
             { 
                title: "Extract Price Values", 
                code: 'let text = "$100 $250 €300";\nlet res = text.match(/(?<=\\$)\\d+/g);', 
                icon: Database, 
                color: "rose",
                desc: "Matches figures preceded by Dollar."
             },
             { 
                title: "Password Robustness", 
                code: 'let pass = "abc123";\nlet re = /^(?=.*\\d).+$/;\nre.test(pass); // true', 
                icon: Key, 
                color: "violet",
                desc: "Must include at least one number."
             },
             { 
                title: "Whole Word Scoping", 
                code: 'let text = "cat scatter catalog";\nlet res = text.match(/\\bcat\\b/g);', 
                icon: Grid, 
                color: "indigo",
                desc: "Ignore fragments; match whole words."
             }
           ].map((app, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-2 transition-transform duration-500 h-full flex flex-col italic">
                 <div className="flex justify-between items-start mb-6">
                    <div className={`p-4 rounded-2xl bg-${app.color}-500/10 text-${app.color}-500 h-fit italic`}>
                       <app.icon size={22} />
                    </div>
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest italic underline decoration-transparent">{app.desc}</span>
                 </div>
                 <h4 className="text-xl font-black italic mb-6">🎯 {app.title}</h4>
                 <div className="mt-auto">
                    <CodeBlock title={app.title} code={app.code} />
                 </div>
              </div>
           ))}
        </div>

        <div className="mt-16 bg-white dark:bg-gray-800 p-12 rounded-[4rem] border border-gray-100 dark:border-gray-700 shadow-2xl relative overflow-hidden group italic">
           <div className="flex flex-col md:flex-row gap-12 items-center italic">
              <div className="md:w-1/3 text-center italic">
                 <div className="p-8 bg-indigo-500 text-white rounded-[2.5rem] shadow-2xl shadow-indigo-500/20 mb-6 inline-block rotate-3 italic">
                    <Workflow size={40} />
                 </div>
                 <h2 className="text-3xl font-black italic tracking-tighter italic">8. Combining Assertions</h2>
              </div>
              <div className="flex-1 space-y-8 italic">
                 <p className="text-gray-500 font-medium italic leading-relaxed">Combine positive lookbehinds and lookaheads for absolute precision, matching ONLY the text trapped between specific markers.</p>
                 <CodeBlock title="Precision trap" code={'let text = "$100px $200px €300px";\nlet result = text.match(/(?<=\\$)\\d+(?=px)/g);\n\n// Output: ["100", "200"]'} />
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 5: Common Mistakes ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12 font-sans italic italic">
        <div className="space-y-8 italic">
           <SectionHeader icon={AlertTriangle} title="9. Logical Failures ⚠️" subtitle="Common errors when implementing assertions." color="text-rose-500" />
           <div className="bg-rose-500/5 border border-rose-500/10 p-10 rounded-[3.5rem] space-y-10 group overflow-hidden relative italic">
              <div className="absolute top-0 right-0 p-8 opacity-5 text-rose-500 rotate-12 italic">
                 <CircleSlash size={60} />
              </div>
              <div className="space-y-4 italic">
                 <h5 className="text-lg font-black italic text-rose-600 uppercase tracking-widest italic">Character Consumption</h5>
                 <p className="text-xs text-gray-500 font-medium italic underline decoration-rose-500/10 italic">Mistakenly believing that assertions consume text. They are ZERO-WIDTH.</p>
                 <div className="p-4 bg-white dark:bg-gray-950 rounded-2xl border border-rose-200 dark:border-rose-900/40 text-[10px] italic">
                    <code className="text-rose-500 font-black italic">/(?=abc)/</code> doesn't match "abc", it only CHECKS if "abc" is coming.
                 </div>
              </div>
              <div className="h-px bg-rose-500/10"></div>
              <div className="space-y-4 italic">
                 <h5 className="text-lg font-black italic text-rose-600 uppercase tracking-widest">Compatibility & Boundaries</h5>
                 <p className="text-xs text-gray-500 font-medium italic italic">Lookbehind support is missing in older browsers. Also, misusing \b for fragments within words is a common logic failure.</p>
              </div>
           </div>
        </div>

        <div className="space-y-8 italic">
           <SectionHeader icon={Lightbulb} title="Expert Strategies" subtitle="Industry advice from years of regex practice." color="text-amber-500" />
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-6 italic">
              {[
                { label: "Lookahead Validation", text: "Always use lookahead for password logic: ^(?=.*[A-Z])(?=.*\\d).+$ ensures uppercase + number exists.", icon: Key, color: "text-rose-500" },
                { label: "Lookbehind Extraction", text: "Prefer lookbehind over messy capturing groups for pulling currency or specific ID values.", icon: Download, color: "text-indigo-500" },
                { label: "Absolute Precision", text: "Combine both (?<=\\$) and (?=px) to target text effectively between two bound units.", icon: Target, color: "text-emerald-500" },
                { label: "Assert over Groups", text: "Assertions are often cleaner and significantly easier to maintain than deep-nested capture hierarchies.", icon: Box, color: "text-violet-500" }
              ].map((tip, i) => (
                <div key={i} className="flex gap-6 items-start group italic">
                   <div className={`p-4 rounded-2xl bg-gray-50 dark:bg-gray-950 shadow-sm ${tip.color} group-hover:scale-110 transition-transform italic`}>
                      <tip.icon size={20} />
                   </div>
                   <div className="flex flex-col italic">
                      <h6 className={`text-sm font-black italic underline decoration-transparent ${tip.color} block mb-1 uppercase tracking-widest italic`}>🚀 {tip.label}</h6>
                      <p className="text-[10px] text-gray-500 font-medium italic underline decoration-gray-500/10 leading-relaxed font-sans italic">{tip.text}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* ── Section 10: Practice Challenges ── */}
      <section className="max-w-6xl mx-auto mb-32 relative italic">
         <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-rose-500/5 rounded-full blur-[120px] -z-10 italic"></div>
         <SectionHeader icon={Target} title="11. Logical Challenges" subtitle="Test your conditional pattern understanding." color="text-emerald-500" />
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 italic">
            {[
               { title: "Numbers after #", desc: "Identify all digits that are preceded by the hash symbol.", pattern: "/(?<=#)\\d+/g" },
               { title: "Exclude 'ing'", desc: "Match words ONLY if they are NOT followed by the suffix 'ing'.", pattern: "/\\w+(?!ing)/g" },
               { title: "Secure Password", desc: "Validate that the string contains at least one Upper and one Digit.", pattern: "/^(?=.*[A-Z])(?=.*\\d).+$/" },
               { title: "The trapped value", desc: "Extract numbers positioned exactly between $ and px markers.", pattern: "/(?<=\\$)\\d+(?=px)/g" }
            ].map((tip, i) => (
               <div key={i} className="p-8 bg-gray-950 rounded-[3rem] border border-white/5 shadow-2xl space-y-4 group relative overflow-hidden italic">
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/5 rounded-full blur-xl group-hover:scale-150 transition-transform italic"></div>
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-rose-400 group-hover:bg-white/10 transition-all italic">
                     <Target size={20} />
                  </div>
                  <h5 className="text-white font-black italic tracking-tight italic underline decoration-transparent">Task {i+1}</h5>
                  <p className="text-gray-500 text-[10px] italic leading-tight">{tip.title}</p>
                  <div className="p-4 bg-white/5 rounded-xl font-mono text-[9px] text-emerald-400 underline decoration-transparent font-black italic">{tip.pattern}</div>
               </div>
            ))}
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24 relative italic font-sans italic border-transparent">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-rose-500 to-transparent mx-auto mb-10 italic border-transparent"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em] font-sans leading-tight italic border-transparent">
          Zero-Width. <br /> Maximum Context.
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium italic underline decoration-transparent max-w-2xl mx-auto font-sans leading-relaxed italic border-transparent border-transparent">
          RegExp assertions allow you to build patterns that are hyper-aware of their surroundings. By mastering lookarounds and boundaries, you create search logic that matches exactly what you want, where you want it, without capturing a single unnecessary byte.
        </p>
      </footer>

    </div>
  );
};

// Mock components to replace non-existent lucide icons
const Key = (props: any) => <ShieldCheck {...props} />;

export default JsRegExpAssertions;