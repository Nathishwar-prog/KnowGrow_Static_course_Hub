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
  CirclePlay
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

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-emerald-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
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

const JsRegExpPatterns: React.FC = () => {
  const [testText, setTestText] = useState('The quick brown fox jumps over 123 dogs!');
  const [pattern, setPattern] = useState('fox');
  const [flags, setFlags] = useState('g');

  const matches = useMemo(() => {
    try {
      if (!pattern) return [];
      const re = new RegExp(pattern, flags);
      const res = testText.match(re);
      return res ? Array.from(res) : [];
    } catch (e) {
      return [];
    }
  }, [testText, pattern, flags]);

  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#020617] min-h-screen font-sans selection:bg-emerald-500/30 overflow-x-hidden text-gray-900 dark:text-white">

      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-[140px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 text-[10px] font-black mb-8 border border-emerald-100 dark:border-emerald-900/50 shadow-xl shadow-emerald-500/5 animate-pulse tracking-[0.2em]">
          <Search size={14} className="fill-current" /> PATTERN SYNTAX GUIDE
        </div>
        <h1 className="text-6xl sm:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
          JS RegExp <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-500 to-violet-600 drop-shadow-2xl">
            Patterns
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed italic">
          Master the sequence of characters that define specific search rules and unlock high-level text processing.
        </p>
      </header>

      {/* ── Section 1: Intro & Creation ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <SectionHeader icon={Info} title="1. What is a RegExp Pattern?" subtitle="A sequence of characters that defines a search rule." color="text-emerald-500" />
          <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-6 relative overflow-hidden group">
            <div className="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:scale-110 transition-transform duration-1000">
               <Search size={180} />
            </div>
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300 italic leading-relaxed">
              "A RegExp pattern is essentially a template. When you apply it to a string, JavaScript looks for any portion of that string that matches the pattern's structure."
            </p>
            <div className="p-6 bg-emerald-500/5 border border-emerald-500/10 rounded-3xl">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-2">Example</span>
              <code className="text-xl font-black text-emerald-500 italic">/hello/</code>
              <p className="text-[11px] text-gray-500 mt-2 font-medium">👉 This matches the word <span className="text-gray-900 dark:text-white font-bold">"hello"</span> exactly as written.</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <SectionHeader icon={Terminal} title="2. Creation Syntax" subtitle="Ways to bring a pattern to life." color="text-violet-500" />
          <div className="p-1 sm:p-2 bg-gradient-to-br from-emerald-500/20 to-violet-500/20 rounded-[3rem]">
            <div className="bg-white dark:bg-gray-950 rounded-[2.8rem] p-10 shadow-inner space-y-8">
              <div className="space-y-6">
                 <div>
                    <h5 className="text-sm font-black uppercase text-violet-500 tracking-widest mb-4 flex items-center gap-2">
                       <Zap size={14} /> Literal Syntax
                    </h5>
                    <CodeBlock code={`let regex = /hello/;`} title="Literal Notation (Static)" />
                 </div>
                 <div className="h-px bg-gray-100 dark:bg-gray-800"></div>
                 <div>
                    <h5 className="text-sm font-black uppercase text-emerald-500 tracking-widest mb-4 flex items-center gap-2">
                       <RotateCcw size={14} /> Constructor
                    </h5>
                    <CodeBlock code={`let regex = new RegExp("hello");`} title="Dynamic Constructor" />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Basic Patterns & Flags ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Activity} title="3. Basic Patterns & Flags" subtitle="Controlling case, global search, and exactness." color="text-teal-500" />
        <div className="grid lg:grid-cols-3 gap-8">
           {[
             { 
               title: "Exact Match", 
               desc: "Matches the exact sequence of letters.", 
               code: `let regex = /cat/;\nconsole.log("cat".match(regex));\n\n// Matches: "cat"`, 
               icon: CirclePlay,
               color: "text-emerald-500",
               bg: "bg-emerald-500/10"
             },
             { 
               title: "Case-Insensitive (i)", 
               desc: "Ignore upper/lower case differences.", 
               code: `let regex = /cat/i;\nconsole.log("Cat".match(regex));\n\n// Matches: "Cat"`, 
               icon: TextCursor,
               color: "text-violet-500",
               bg: "bg-violet-500/10"
             },
             { 
               title: "Global Search (g)", 
               desc: "Find all matches instead of just the first.", 
               code: `let regex = /cat/g;\nconsole.log("cat cat".match(regex));\n\n// Matches: ["cat", "cat"]`, 
               icon: Globe,
               color: "text-blue-500",
               bg: "bg-blue-500/10"
             }
           ].map((item, i) => (
             <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:shadow-2xl transition-all h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                   <div className={`p-4 rounded-2xl ${item.bg} ${item.color} group-hover:scale-110 transition-transform`}>
                      <item.icon size={24} />
                   </div>
                   <h4 className="text-xl font-black italic tracking-tight">{item.title}</h4>
                </div>
                <p className="text-gray-500 text-sm font-medium mb-6 italic">{item.desc}</p>
                <div className="mt-auto">
                   <CodeBlock code={item.code} title={item.title} />
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* ── Section 3: Interactive Playground ── */}
      <section className="max-w-6xl mx-auto mb-32 relative">
        <div className="absolute -top-24 -left-20 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="p-1 sm:p-2 bg-gradient-to-br from-emerald-500/20 via-violet-500/20 to-teal-500/20 rounded-[4rem]">
          <div className="bg-white dark:bg-gray-950 rounded-[3.8rem] p-10 md:p-20 shadow-inner font-sans italic relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 text-[10px] font-black uppercase tracking-widest font-sans italic">
                   <Terminal size={12} /> Live Engine
                </div>
                <h3 className="text-4xl font-black italic tracking-tighter leading-tight font-sans italic underline decoration-transparent">
                  Regex <span className="text-emerald-500 font-sans italic">Pattern</span> Playground
                </h3>
                <p className="text-gray-500 font-medium italic underline decoration-gray-500/10 font-sans italic">Test your patterns against custom text and see the extraction magic happen instantly.</p>

                <div className="space-y-6 italic">
                  <div className="flex flex-col gap-2 italic">
                    <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-2 italic">Input String</label>
                    <textarea
                      value={testText}
                      onChange={(e) => setTestText(e.target.value)}
                      className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 rounded-3xl px-8 py-5 font-black italic outline-none transition-all focus:border-emerald-500 text-gray-900 dark:text-white font-sans italic w-full min-h-[120px] resize-none"
                      placeholder="Enter text..."
                    />
                  </div>
                  <div className="flex flex-col gap-2 font-sans italic">
                    <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-2 font-sans italic underline decoration-transparent">Regex Pattern</label>
                    <div className="relative group">
                      <input
                        type="text"
                        value={pattern}
                        onChange={(e) => setPattern(e.target.value)}
                        className="w-full bg-gray-50 dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 rounded-2xl px-12 py-5 font-black italic outline-none transition-all focus:border-violet-500 text-gray-900 dark:text-white font-sans italic"
                        placeholder="e.g. \d+"
                      />
                      <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-violet-500 transition-colors">/</div>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-2">
                        <span className="text-gray-400 group-focus-within:text-violet-500 transition-colors">/</span>
                        <input 
                           type="text" 
                           value={flags} 
                           onChange={(e) => setFlags(e.target.value)}
                           className="w-8 bg-transparent text-emerald-500 font-black outline-none"
                           maxLength={3}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="p-10 bg-gray-950 rounded-[3rem] border border-white/5 shadow-2xl min-h-[400px] flex flex-col justify-center font-sans italic border-emerald-500/10 underline decoration-transparent relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-12 opacity-[0.02] rotate-12 group-hover:rotate-0 transition-all duration-1000">
                     <Code2 size={240} className="text-emerald-500" />
                  </div>
                  <div className="flex flex-wrap gap-2 mb-8 underline decoration-transparent bg-white/5 p-12 rounded-[2.5rem] border border-white/5 shadow-inner backdrop-blur-3xl min-h-[150px] items-center justify-center">
                    {matches.length === 0 ? (
                      <span className="text-gray-600 font-black italic uppercase tracking-widest text-xs">No Matches Extracted</span>
                    ) : (
                      matches.map((match, i) => (
                        <div key={i} className="px-5 py-2.5 bg-emerald-500 text-white font-black italic rounded-xl shadow-lg shadow-emerald-500/20 animate-in zoom-in duration-300">
                          {match as string}
                        </div>
                      ))
                    )}
                  </div>
                  <div className="text-center italic underline decoration-transparent space-y-4">
                    <span className="text-[10px] font-black uppercase text-gray-500 tracking-[0.3em]">Execution Result</span>
                    <div className="mt-4 p-6 border border-white/5 rounded-3xl bg-white/5 backdrop-blur-xl">
                      <code className="text-emerald-500 font-bold italic font-mono text-xs break-all">
                        {`Matches Found: ${matches.length}`}
                      </code>
                      <div className="mt-2 h-px bg-white/5"></div>
                      <code className="text-violet-400 text-[10px] font-mono block mt-2 overflow-x-auto">
                        {`Raw: ${JSON.stringify(matches)}`}
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Character Classes ── */}
      <section className="max-w-6xl mx-auto mb-32 font-sans italic">
        <SectionHeader icon={Grid} title="4. Character Classes" subtitle="Match sets, ranges, and digits." color="text-emerald-500" />
        <div className="grid lg:grid-cols-2 gap-8">
           {[
             { title: "[abc]", desc: "Match any ONE character from the set.", items: ['"a"', '"b"', '"c"'], color: "text-emerald-500", pattern: "/[abc]/" },
             { title: "[a-z]", desc: "Any character in the lowercase range.", items: ["Any lowercase letter"], color: "text-violet-500", pattern: "/[a-z]/" },
             { title: "\\d (Digits)", desc: "Matches any numeric character [0-9].", items: ["Any digit"], color: "text-blue-500", pattern: "/\\d/" },
             { title: "[^abc] (Negated)", desc: "Match anything EXCEPT a, b, or c.", items: ["Any char NOT in set"], color: "text-rose-500", pattern: "/[^abc]/" }
           ].map((cls, i) => (
             <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl flex flex-col md:flex-row gap-8 items-center group">
                <div className="md:w-1/3 text-center space-y-4">
                   <div className={`text-4xl font-black ${cls.color}`}>{cls.title}</div>
                   <code className="text-[10px] font-black uppercase text-gray-400 tracking-widest">{cls.pattern}</code>
                </div>
                <div className="flex-1 space-y-4">
                   <p className="text-gray-500 font-medium italic">{cls.desc}</p>
                   <div className="flex flex-wrap gap-2">
                      {cls.items.map((it, idx) => (
                         <span key={idx} className={`px-4 py-1 rounded-full text-[10px] font-black uppercase ${cls.color} bg-current/10`}>{it}</span>
                      ))}
                   </div>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* ── Section 5: Special Characters Table ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Sparkles} title="5. Special Characters" subtitle="The shorthand shortcuts for common patterns." color="text-violet-500" />
        <div className="p-8 sm:p-12 bg-gray-950 rounded-[4rem] border border-white/5 shadow-2xl relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:scale-125 transition-transform duration-[2000ms]">
              <Database size={300} className="text-violet-500" />
           </div>
           
           <div className="relative z-10">
              <div className="overflow-x-auto">
                 <table className="w-full text-left">
                    <thead>
                       <tr className="border-b border-white/10">
                          <th className="py-6 px-4 text-xs font-black text-gray-500 uppercase tracking-widest italic">Symbol</th>
                          <th className="py-6 px-4 text-xs font-black text-emerald-500 uppercase tracking-widest italic underline decoration-emerald-500/20">Meaning</th>
                          <th className="py-6 px-4 text-xs font-black text-violet-500 uppercase tracking-widest italic">Example Result</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                       {[
                         { sym: ".", mean: "Any single character", ex: "Matches letters, digits, spaces" },
                         { sym: "\\d", mean: "Any digit [0-9]", ex: "Matches '1', '9'" },
                         { sym: "\\w", mean: "Word character [a-zA-Z0-9_]", ex: "Matches 'a', '1', '_'" },
                         { sym: "\\s", mean: "Whitespace character", ex: "Matches ' ', '\\t', '\\n'" },
                         { sym: "\\D", mean: "NOT a digit", ex: "Matches 'A', '$', ' '" },
                         { sym: "\\W", mean: "NOT a word character", ex: "Matches '!', '@', ' '" },
                         { sym: "\\S", mean: "NOT whitespace", ex: "Matches 'A', '1', '!'" }
                       ].map((row, i) => (
                         <tr key={i} className="group/row hover:bg-white/5 transition-all">
                            <td className="py-5 px-4 font-mono text-emerald-500 font-black text-lg group-hover/row:translate-x-2 transition-transform">{row.sym}</td>
                            <td className="py-5 px-4 text-gray-400 font-medium italic text-sm">{row.mean}</td>
                            <td className="py-5 px-4 font-mono text-violet-400 text-[10px] break-words">{row.ex}</td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
              <div className="mt-12">
                 <CodeBlock title="Special Char Usage" code={`let regex = /\\d/;\nconsole.log("A1".match(regex)); // ["1"]`} />
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 6: Anchors & Position ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12 font-sans italic">
        <div className="space-y-8">
           <SectionHeader icon={Anchor} title="6. Anchors (Positioning)" subtitle="Pinning patterns to start or end." color="text-teal-500" />
           <div className="grid grid-cols-1 gap-6">
              <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-4 group">
                 <div className="flex items-center gap-4">
                    <div className="p-4 rounded-2xl bg-teal-500/10 text-teal-500 font-black text-2xl">^</div>
                    <h4 className="text-xl font-black italic">Start Anchor</h4>
                 </div>
                 <p className="text-gray-500 text-sm font-medium">Ensures the match begins at the very first character of the string.</p>
                 <CodeBlock code={`/^Hello/ // Must start with "Hello"`} />
              </div>
              <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-4 group">
                 <div className="flex items-center gap-4">
                    <div className="p-4 rounded-2xl bg-indigo-500/10 text-indigo-500 font-black text-2xl">$</div>
                    <h4 className="text-xl font-black italic">End Anchor</h4>
                 </div>
                 <p className="text-gray-500 text-sm font-medium">Ensures the match terminates at the very end of the string.</p>
                 <CodeBlock code={`/world$/ // Must end with "world"`} />
              </div>
           </div>
        </div>

        <div className="space-y-8">
           <SectionHeader icon={Layers} title="7. Groups & Alternation" subtitle="Complex branches and capturing." color="text-violet-500" />
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-10">
              <div className="space-y-4">
                 <h5 className="text-lg font-black italic text-violet-500 flex items-center gap-3">
                    <Package size={20} /> Grouping ( )
                 </h5>
                 <p className="text-gray-500 text-sm font-medium">Encapsulate a sub-pattern to apply operators or capture it.</p>
                 <CodeBlock code={`/(cat)/ // Grouping "cat"`} />
              </div>
              <div className="h-px bg-gray-100 dark:bg-gray-700"></div>
              <div className="space-y-4">
                 <h5 className="text-lg font-black italic text-emerald-500 flex items-center gap-3">
                    <Binary size={20} /> Alternation |
                 </h5>
                 <p className="text-gray-500 text-sm font-medium">The "OR" logic. Match expression A or expression B.</p>
                 <CodeBlock code={`/cat|dog/ // Matches "cat" OR "dog"`} />
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 7: Combining Patterns ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="p-12 bg-gradient-to-br from-gray-900 to-black rounded-[4rem] text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-emerald-500/5 backdrop-blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10 flex flex-col items-center text-center space-y-8">
               <div className="p-5 rounded-[2rem] bg-emerald-500 text-white shadow-2xl shadow-emerald-500/20">
                  <Repeat size={40} />
               </div>
               <h2 className="text-4xl font-black italic tracking-tighter">8. Combining Patterns</h2>
               <p className="text-gray-400 max-w-2xl text-lg font-medium italic">
                  Combine classes, anchors, and quantifiers to create industrial-strength validation rules.
               </p>
               <div className="w-full max-w-3xl">
                  <CodeBlock 
                     code={`let regex = /^[a-zA-Z]+$/;\nconsole.log(regex.test("Hello")); // true\n\n// Breakdown: ^ (start) [a-zA-Z] (letters) + (one or more) $ (end)`} 
                     title="Word Only Validation" 
                  />
                  <div className="p-5 bg-white/5 border border-white/10 rounded-2xl">
                     <span className="text-emerald-500 font-mono text-sm font-black italic tracking-widest uppercase">Target: Only letters allowed from start to finish.</span>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 8: Real-World Examples ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={ShieldCheck} title="9. Real-World Applications" subtitle="Practical patterns for production software." color="text-emerald-500" />
        <div className="grid md:grid-cols-3 gap-8">
           {[
             {
               title: "Username Validation",
               pattern: "/^[a-zA-Z0-9_]{3,10}$/",
               desc: "Alphanumeric + Underscore, length 3-10.",
               icon: Database,
               color: "text-blue-500",
               test: '"user_123"'
             },
             {
               title: "Basic Email Pattern",
               pattern: "/^[\\w.-]+@[a-z]+\\.[a-z]{2,}$/",
               desc: "Simple valid email format detection.",
               icon: Globe,
               color: "text-emerald-500",
               test: '"test@gmail.com"'
             },
             {
               title: "Extract Numbers",
               pattern: "/\\d+/",
               desc: "Pulls numeric sequences from mixed text.",
               icon: Hash,
               color: "text-violet-500",
               test: '"Order123"'
             }
           ].map((app, i) => (
             <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-2 transition-transform duration-500">
                <div className="flex justify-between items-start mb-6">
                   <div className={`p-4 rounded-2xl bg-gray-50 dark:bg-gray-900 ${app.color}`}>
                      <app.icon size={22} />
                   </div>
                   <div className="p-1 px-3 bg-gray-100 dark:bg-gray-700 rounded-full text-[8px] font-black uppercase text-gray-500 tracking-widest">PRO USE</div>
                </div>
                <h4 className="text-xl font-black italic mb-4">🎯 {app.title}</h4>
                <p className="text-gray-500 text-xs font-medium mb-6 italic underline decoration-transparent">{app.desc}</p>
                <div className="space-y-4 mt-auto">
                   <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 font-mono text-[10px] text-gray-900 dark:text-white break-all">
                      {app.pattern}
                   </div>
                   <div className="p-3 bg-emerald-500/5 border border-emerald-500/10 rounded-xl flex items-center justify-between">
                      <span className="text-[10px] font-black italic uppercase text-emerald-600">Test: {app.test}</span>
                      <CheckCircle size={14} className="text-emerald-500" />
                   </div>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* ── Section 9: Visualization Block ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Eye} title="10. Pattern Visualization" subtitle="Breaking down complex expressions into logic." color="text-violet-500" />
        <div className="p-12 bg-gray-950 rounded-[4rem] border border-white/5 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:rotate-45 transition-transform duration-[2000ms]">
            <Layers size={250} className="text-violet-500" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-8">
              <h4 className="text-4xl font-black italic text-white underline decoration-emerald-500/20">/^[a-z]+$/</h4>
              <p className="text-gray-500 font-medium italic leading-relaxed">
                 A fundamental pattern for strictly validating lowercase string content with no interruptions.
              </p>

              <div className="space-y-4">
                {[
                  { char: "^", mean: "START of the string", color: "text-emerald-500" },
                  { char: "[a-z]", mean: "Lowercase letters ONLY", color: "text-violet-500" },
                  { char: "+", mean: "ONE OR MORE occurrences", color: "text-blue-500" },
                  { char: "$", mean: "END of the string", color: "text-emerald-500" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 p-4 bg-white/5 border border-white/5 rounded-2xl group transition-all hover:bg-white/10">
                    <span className={`font-mono ${item.color} font-black italic tracking-widest w-12 text-2xl`}>{item.char}</span>
                    <span className="text-[10px] font-black uppercase text-white/40 tracking-widest italic group-hover:text-white/80 transition-colors">→ {item.mean}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:block hidden">
              <div className="p-12 bg-emerald-500/10 border border-emerald-500/20 rounded-[4rem] text-center space-y-4 backdrop-blur-3xl">
                 <MousePointer2 size={60} className="text-emerald-500 mx-auto animate-bounce" />
                 <h5 className="text-2xl font-black text-white italic">Strict Validation</h5>
                 <p className="text-emerald-500/60 text-xs font-black uppercase tracking-[0.3em] font-mono italic">Data Integrity Verified</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 10: Recommendations & Tips ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12 font-sans italic">
        <div className="space-y-8">
          <SectionHeader icon={Lightbulb} title="Expert Advice" subtitle="Production-level logic from deep experience." color="text-amber-500" />
          <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-6">
            {[
              { label: "Start Simple", text: "Build your regex step-by-step. Don't try to write the final complex pattern all at once.", icon: CheckCircle, color: "text-emerald-500" },
              { label: "Use Anchors", text: "Always use ^ and $ for validation to prevent partial matching in unintended locations.", icon: Anchor, color: "text-violet-500" },
              { label: "Avoid Over-Complexity", text: "Extremely complex regex is hard to debug and maintain. Sometimes simple string methods are better.", icon: AlertTriangle, color: "text-rose-500" }
            ].map((rec, i) => (
              <div key={i} className="flex gap-6 items-start p-6 bg-gray-50 dark:bg-gray-950 rounded-3xl group transition-all hover:scale-[1.02]">
                <div className={`p-4 rounded-2xl bg-white dark:bg-gray-800 shadow-lg ${rec.color} group-hover:scale-110 transition-transform`}>
                  <rec.icon size={20} />
                </div>
                <div>
                  <h6 className={`text-sm font-black italic underline decoration-transparent ${rec.color} block mb-1 uppercase tracking-widest`}>{rec.label}</h6>
                  <p className="text-xs text-gray-500 font-medium italic underline decoration-gray-500/10 leading-relaxed">{rec.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <SectionHeader icon={Zap} title="⚡ Workflow Power" subtitle="Speed up your pattern development." color="text-teal-500" />
          <div className="grid grid-cols-1 gap-4">
            {[
              { title: "Test Quickly", text: "Use regex.test(\"value\") for fast boolean checks in conditionals.", code: "Perfect for Form Validation" },
              { title: "Extract Data", text: "Combine match() with capturing groups to pull specific segments from strings.", code: "Data Mining Strategy" },
              { title: "Combine with Quantifiers", text: "Patterns like /[a-z]{3,}/ match text with specific length requirements.", code: "Precision Control" },
              { title: "Debug Regex Online", text: "Use regex101 or RegExr to visualize your capture groups and execution cost.", code: "Visual Logic Verification" }
            ].map((tip, i) => (
              <div key={i} className="p-8 bg-gray-950 rounded-[2.8rem] border border-white/5 shadow-2xl space-y-4 group">
                <div className="flex justify-between items-center">
                  <h5 className="text-white font-black italic underline decoration-teal-500/20 underline decoration-transparent">{tip.title}</h5>
                  <ArrowRight size={16} className="text-teal-500 opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0" />
                </div>
                <p className="text-gray-500 text-xs italic">{tip.text}</p>
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl font-mono text-[10px] text-teal-400 underline decoration-transparent">{tip.code}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24 relative italic">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em] leading-tight">
          Define Patterns. <br /> Master Extraction.
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium italic underline decoration-transparent max-w-2xl mx-auto font-medium leading-relaxed">
          RegExp patterns are the "Search Logic" of JavaScript. Understanding their syntax transforms you from a basic text searcher into a master of data validation and processing.
        </p>
      </footer>

    </div>
  );
};

export default JsRegExpPatterns;