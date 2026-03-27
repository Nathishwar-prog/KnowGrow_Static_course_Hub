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

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-sky-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
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

const JsRegExpFlags: React.FC = () => {
  const [engineText, setEngineText] = useState('Cat cat CAT');
  const [engineFlags, setEngineFlags] = useState('gi');

  const engineMatches = useMemo(() => {
    try {
      const re = new RegExp('cat', engineFlags);
      const res = engineText.match(re);
      return res ? Array.from(res) : [];
    } catch (e) {
      return [];
    }
  }, [engineText, engineFlags]);

  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#020617] min-h-screen font-sans selection:bg-sky-500/30 overflow-x-hidden text-gray-900 dark:text-white">

      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[140px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-sky-600 dark:text-sky-400 text-[10px] font-black mb-8 border border-sky-100 dark:border-sky-900/50 shadow-xl shadow-sky-500/5 animate-pulse tracking-[0.2em]">
          <Settings size={14} className="fill-current" /> PATTERN BEHAVIOR MODIFIERS
        </div>
        <h1 className="text-6xl sm:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
          JS RegExp <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-500 to-indigo-600 drop-shadow-2xl font-sans italic">
            Flags
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed italic">
          Master the modifiers that fundamentally change how the search engine traverses text, from <span className="text-gray-900 dark:text-white font-bold underline decoration-sky-500/30">global reach</span> to <span className="text-gray-900 dark:text-white font-bold underline decoration-sky-500/30">unicode precision</span>.
        </p>
      </header>

      {/* ── Section 1: Intro ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <SectionHeader icon={Info} title="1. What are RegExp Flags?" subtitle="Modifiers that change pattern behavior." color="text-sky-500" />
          <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-10 relative overflow-hidden group">
            <div className="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:scale-110 transition-transform duration-1000 rotate-12">
               <Workflow size={180} />
            </div>
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300 italic leading-relaxed font-sans">
              "RegExp flags are modifiers written after the pattern's closing slash. They dictate the global settings for your search engine, such as whether it should find all matches or ignore character case."
            </p>
            <div className="p-8 bg-sky-500/5 border border-sky-500/10 rounded-[2.5rem] italic text-center">
               <code className="text-3xl font-black text-sky-500 font-mono tracking-tighter">/pattern/<span className="text-white bg-sky-500 px-2 rounded-lg">flags</span></code>
            </div>
          </div>
        </div>

        <div className="space-y-8">
           <SectionHeader icon={Table} title="2. The Flag Catalog" subtitle="A complete list of engine modifiers." color="text-indigo-500" />
           <div className="p-8 bg-gray-950 rounded-[4rem] border border-white/5 relative group overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-12 opacity-[0.02] group-hover:scale-125 transition-transform duration-[2000ms]">
                 <Grid size={300} className="text-sky-500" />
              </div>
              <div className="relative z-10 overflow-x-auto text-[10px]">
                 <table className="w-full text-left">
                    <thead>
                       <tr className="border-b border-white/10 uppercase tracking-[0.2em] italic font-black text-gray-500">
                          <th className="py-4 px-4">Flag</th>
                          <th className="py-4 px-4 text-sky-500">Name</th>
                          <th className="py-4 px-4 text-indigo-500">Description</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                       {[
                         { f: "g", n: "Global", d: "Match all occurrences" },
                         { f: "i", n: "In-sensitive", d: "Ignore character case" },
                         { f: "m", n: "Multiline", d: "^ and $ work per line" },
                         { f: "s", n: "DotAll", d: ". matches newline too" },
                         { f: "u", n: "Unicode", d: "Full Unicode support" },
                         { f: "y", n: "Sticky", d: "Match from exact position" },
                         { f: "d", n: "Indices", d: "Returns match offsets" }
                       ].map((row, i) => (
                         <tr key={i} className="hover:bg-white/5 transition-all group/row">
                            <td className="py-3 px-4 font-mono font-black text-sky-500 text-lg group-hover/row:translate-x-1 transition-transform">{row.f}</td>
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

      {/* ── Section 2: Core Flags Explained ── */}
      <section className="max-w-6xl mx-auto mb-32 italic">
        <SectionHeader icon={Terminal} title="3. Core Flags Deep Dive" subtitle="How each modifier transforms your patterns." color="text-sky-500" />
        
        <div className="grid lg:grid-cols-2 gap-x-12 gap-y-16">
           {/* Global */}
           <div className="space-y-6 group">
              <h4 className="text-2xl font-black italic text-sky-500 flex items-center gap-4">
                 <div className="p-3 bg-sky-500/10 rounded-2xl shadow-xl shadow-sky-500/5">
                    <Globe size={24} />
                 </div>
                 3.1 Global Flag (g)
              </h4>
              <p className="text-gray-500 font-medium italic font-sans italic">Finds ALL matches throughout the string instead of stopping at the very first successful match.</p>
              <CodeBlock title="Global matching" code={`let text = "cat bat cat";\nlet result = text.match(/cat/g);\n\nconsole.log(result); // ["cat", "cat"]`} />
              <div className="p-3 bg-sky-500/5 border border-sky-500/10 rounded-xl text-[10px] text-sky-600 font-black">👉 Without g, only the first match is returned.</div>
           </div>

           {/* Case Insensitive */}
           <div className="space-y-6 group">
              <h4 className="text-2xl font-black italic text-indigo-500 flex items-center gap-4">
                 <div className="p-3 bg-indigo-500/10 rounded-2xl shadow-xl shadow-indigo-500/5">
                    <TextCursor size={24} />
                 </div>
                 3.2 Case-Insensitive (i)
              </h4>
              <p className="text-gray-500 font-medium italic font-sans italic">Ignores the distinction between uppercase and lowercase characters during the matching process.</p>
              <CodeBlock title="Ignore Case search" code={`let text = "Cat cAt caT";\nlet result = text.match(/cat/gi);\n\nconsole.log(result); // ["Cat", "cAt", "caT"]`} />
           </div>

           {/* Multiline */}
           <div className="space-y-6 group">
              <h4 className="text-2xl font-black italic text-teal-500 flex items-center gap-4">
                 <div className="p-3 bg-teal-500/10 rounded-2xl shadow-xl shadow-teal-500/5">
                    <Layers size={24} />
                 </div>
                 3.3 Multiline (m)
              </h4>
              <p className="text-gray-500 font-medium italic font-sans italic">Changes behavior of ^ and $ anchors to match at the beginning and end of each individual line (\n).</p>
              <CodeBlock title="Per-line anchoring" code={`let text = "Hello\\nWorld";\nlet result = text.match(/^World/m);\n\nconsole.log(result); // ["World"]`} />
              <div className="p-3 bg-teal-500/5 border border-teal-500/10 rounded-xl text-[10px] text-teal-600 font-black">👉 Without m, it won't match "World" as a start.</div>
           </div>

           {/* DotAll */}
           <div className="space-y-6 group">
              <h4 className="text-2xl font-black italic text-rose-500 flex items-center gap-4">
                 <div className="p-3 bg-rose-500/10 rounded-2xl shadow-xl shadow-rose-500/5">
                    <Sparkles size={24} />
                 </div>
                 3.4 DotAll (s)
              </h4>
              <p className="text-gray-500 font-medium italic font-sans italic">Allows the dot (.) character class to match newline characters (\n), which it normally ignores.</p>
              <CodeBlock title="Matching including newlines" code={`let text = "Hello\\nWorld";\nlet result = /Hello.World/s.test(text);\n\nconsole.log(result); // true`} />
           </div>

           {/* Unicode */}
           <div className="space-y-6 group">
              <h4 className="text-2xl font-black italic text-amber-500 flex items-center gap-4">
                 <div className="p-3 bg-amber-500/10 rounded-2xl shadow-xl shadow-amber-500/5">
                    <Globe size={24} />
                 </div>
                 3.5 Unicode (u)
              </h4>
              <p className="text-gray-500 font-medium italic font-sans italic">Enables correct handling of surrogate pairs and advanced character sets (like emojis).</p>
              <CodeBlock title="Emoji & Unicode support" code={`let text = "😊";\nconsole.log(/^.$/.test(text));   // false\nconsole.log(/^.$/u.test(text)); // true`} />
              <div className="p-3 bg-amber-500/5 border border-amber-500/10 rounded-xl text-[10px] text-amber-600 font-black underline decoration-transparent">👉 Essential for modern apps supporting emojis.</div>
           </div>

           {/* Sticky */}
           <div className="space-y-6 group">
              <h4 className="text-2xl font-black italic text-sky-600 flex items-center gap-4">
                 <div className="p-3 bg-sky-600/10 rounded-2xl shadow-xl shadow-sky-600/5">
                    <MousePointer2 size={24} />
                 </div>
                 3.6 Sticky (y)
              </h4>
              <p className="text-gray-500 font-medium italic font-sans italic">Matches only correctly if the match starts exactly at the current lastIndex position.</p>
              <CodeBlock title="Precision position matching" code={`let regex = /cat/y;\nlet text = "cat cat";\n\nregex.lastIndex = 4;\nconsole.log(regex.exec(text)); // ["cat"] at pos 4`} />
           </div>

           {/* Indices */}
           <div className="space-y-6 group lg:col-span-2">
              <h4 className="text-2xl font-black italic text-indigo-400 flex items-center gap-4 underline decoration-indigo-400/20 underline decoration-transparent">
                 <div className="p-3 bg-indigo-400/10 rounded-2xl shadow-xl shadow-indigo-400/5">
                    <Hash size={24} />
                 </div>
                 3.7 Indices (d)
              </h4>
              <p className="text-gray-500 font-medium italic font-sans italic">Returns the exact start and end position for each captive group match.</p>
              <CodeBlock title="Match boundary coordinates" code={`let regex = /(cat)/d;\nlet result = regex.exec("cat");\n\nconsole.log(result.indices); // [[0, 3], [0, 3]]`} />
           </div>
        </div>
      </section>

      {/* ── Section 3: Visual Interpretation ── */}
      <section className="max-w-6xl mx-auto mb-32 relative group font-sans italic">
        <SectionHeader icon={Eye} title="4. Visual Pattern Engine" subtitle="Step-by-step logic of flag execution." color="text-sky-500" />
        
        <div className="p-1 sm:p-2 bg-gradient-to-br from-sky-500/20 via-indigo-500/20 to-teal-500/20 rounded-[4rem]">
          <div className="bg-white dark:bg-gray-950 rounded-[3.8rem] p-10 md:p-20 shadow-inner italic overflow-hidden relative">
             <div className="grid lg:grid-cols-2 gap-16 items-center italic">
                <div className="space-y-8 italic">
                   <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-gray-500 tracking-[0.4em] italic mb-4 block underline decoration-sky-500/20">Input Target Text</label>
                      <input 
                         type="text" 
                         value={engineText} 
                         onChange={(e) => setEngineText(e.target.value)}
                         className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 rounded-2xl px-8 py-5 font-black italic outline-none transition-all focus:border-sky-500 text-gray-900 dark:text-white w-full"
                      />
                   </div>
                   <div className="space-y-4">
                      <h3 className="text-4xl font-black italic tracking-tighter leading-tight">
                        Regex: <span className="text-sky-500">/cat/</span>
                        <input 
                           type="text" 
                           value={engineFlags} 
                           onChange={(e) => setEngineFlags(e.target.value)}
                           className="w-12 bg-sky-500 text-white px-2 rounded-lg ml-2 font-black outline-none italic underline decoration-transparent"
                           maxLength={3}
                        />
                      </h3>
                      <p className="text-gray-500 font-medium italic underline decoration-gray-500/10">Modify the flags to witness changes in the match result instantly.</p>
                   </div>
                   
                   <div className="space-y-4">
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest italic">Workflow Breakdown</span>
                      <div className="space-y-3">
                         <div className="flex items-center gap-4 text-sm font-medium">
                            <ArrowRight size={14} className="text-sky-500" /> 
                            <span>'C' matches → <span className="text-sky-500">i flag</span> ignores casing logic.</span>
                         </div>
                         <div className="flex items-center gap-4 text-sm font-medium">
                            <ArrowRight size={14} className="text-indigo-500" /> 
                            <span>Engine proceeds → <span className="text-indigo-500">g flag</span> allows search to continue past the first match.</span>
                         </div>
                      </div>
                   </div>
                </div>

                <div className="relative">
                   <div className="p-12 bg-gray-950 rounded-[3rem] border border-white/5 shadow-2xl space-y-8 relative group overflow-hidden text-center min-h-[350px] flex flex-col justify-center">
                      <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:rotate-45 transition-transform duration-1000">
                         <Cpu size={200} className="text-sky-500" />
                      </div>
                      <div className="relative z-10 space-y-8 uppercase underline decoration-transparent italic">
                         <span className="text-[10px] font-black italic tracking-[0.3em] text-gray-500">Engine Output</span>
                         <div className="flex flex-wrap gap-3 justify-center">
                            {engineMatches.length === 0 ? (
                               <span className="text-gray-700 italic font-black">Null / No Match</span>
                            ) : (
                               engineMatches.map((m, i) => (
                                  <div key={i} className="px-6 py-2 bg-sky-500 text-white font-black rounded-xl shadow-lg shadow-sky-500/20 animate-in zoom-in">
                                     {m}
                                  </div>
                               ))
                            )}
                         </div>
                         <div className="h-px bg-white/5 w-1/2 mx-auto"></div>
                         <code className="text-sky-400 text-xs font-mono block">Result: {JSON.stringify(engineMatches)}</code>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Real-World Use Cases ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12 font-sans italic">
        <div className="space-y-8">
           <SectionHeader icon={ShieldCheck} title="5. Strategic Use Cases" subtitle="Production implementations of flag logic." color="text-indigo-500" />
           <div className="grid grid-cols-1 gap-6">
              {[
                { 
                  title: "Find All Occurrences", 
                  code: 'let text = "JS is fun. JS is powerful.";\nlet result = text.match(/JS/g);\nconsole.log(result); // ["JS", "JS"]', 
                  icon: Search, 
                  color: "text-sky-500",
                  desc: "Global matching for analytics."
                },
                { 
                  title: "Case-Insensitive Login", 
                  code: 'let username = "Admin";\nlet pattern = /^admin$/i;\nconsole.log(pattern.test(username)); // true', 
                  icon: Key, 
                  color: "text-indigo-500",
                  desc: "Flexible user-input validation."
                },
                { 
                  title: "Multiline Log Parsing", 
                  code: 'let text = `start\\nmiddle\\nend`;\nconsole.log(/^middle$/m.test(text)); // true', 
                  icon: FileText, 
                  color: "text-teal-500",
                  desc: "Strict per-line verification."
                }
              ].map((app, i) => (
                 <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-4 group">
                    <div className="flex justify-between items-start">
                       <div className={`p-4 rounded-2xl bg-gray-50 dark:bg-gray-950 ${app.color}`}>
                          {app.icon ? <app.icon size={22} /> : <Search size={22} />}
                       </div>
                       <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{app.desc}</span>
                    </div>
                    <h4 className="text-xl font-black italic">🎯 {app.title}</h4>
                    <CodeBlock code={app.code} title={app.title} />
                 </div>
              ))}
           </div>
        </div>

        <div className="space-y-8">
           <SectionHeader icon={Plus} title="6. Combining Flags" subtitle="Merging behaviors for absolute precision." color="text-teal-500" />
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-10 group overflow-hidden relative">
              <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:scale-110 transition-transform">
                 <Repeat size={120} />
              </div>
              <p className="text-gray-500 text-sm font-medium leading-relaxed italic">
                 Regular expression engine allows you to concatenate multiple flags to achieve complex behavior modifiers at the same time.
              </p>
              <div className="space-y-6">
                 <div>
                    <h5 className="text-sm font-black text-teal-600 block mb-3 uppercase tracking-widest">Example: Global + Case-Insensitive (gi)</h5>
                    <CodeBlock code={`let text = "Cat cat";\nlet result = text.match(/cat/gi);\nconsole.log(result); // ["Cat", "cat"]`} />
                 </div>
                 <div className="p-6 bg-teal-500/5 border border-teal-500/10 rounded-2xl italic">
                    <span className="text-[10px] font-black text-teal-600 uppercase tracking-widest block underline pb-2">Pro Tip</span>
                    <p className="text-[11px] text-gray-400 italic">The order of flags does not matter: /gi is the same as /ig.</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 5: Common Mistakes ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={AlertTriangle} title="7. Engine Pitfalls ⚠️" subtitle="Common errors when utilizing flags." color="text-rose-500" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 italic font-sans italic">
           {[
             { 
               error: "Forgetting the g Flag", 
               m: '"cat cat".match(/cat/)', 
               res: 'Only the very first match is returned.',
               solution: "Append 'g' for total collection." 
             },
             { 
               error: "Misusing the i Flag", 
               m: '/Admin/.test("admin")', 
               res: 'Fails due to strict casing.',
               solution: "Use /Admin/i for true matches." 
             },
             { 
               error: "Ignoring Unicode", 
               m: '/^.$/.test("😊")', 
               res: 'Fails for multi-byte sequences.',
               solution: "Enable /u flag for emojis." 
             }
           ].map((mistake, i) => (
              <div key={i} className="bg-rose-500/5 border border-rose-500/10 p-10 rounded-[3rem] space-y-6 group overflow-hidden relative transition-all hover:bg-rose-500/10">
                 <div className="absolute top-0 right-0 p-6 opacity-20 text-rose-500">
                    <CircleSlash size={32} />
                 </div>
                 <h4 className="text-lg font-black italic text-rose-500 tracking-tight">{mistake.error}</h4>
                 <div className="p-4 bg-white dark:bg-gray-950 rounded-2xl font-mono text-[9px] text-rose-400">
                    {mistake.m}
                 </div>
                 <p className="text-[10px] text-gray-500 font-medium italic underline decoration-rose-500/10 underline decoration-transparent">{mistake.res}</p>
                 <div className="p-3 bg-emerald-500 text-white rounded-xl text-[9px] font-black uppercase text-center tracking-widest shadow-lg shadow-emerald-500/10">
                    ✓ {mistake.solution}
                 </div>
              </div>
           ))}
        </div>
      </section>

      {/* ── Section 6: Pro Tips ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12 font-sans italic">
        <div className="space-y-8">
           <SectionHeader icon={Lightbulb} title="Expert Advice" subtitle="Production logic from seasoned developers." color="text-amber-500" />
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-8">
              {[
                { label: "The Default Combo", text: "The most commonly used flag combination in software is /gi for general search utility.", icon: Zap, color: "text-sky-500" },
                { label: "m for Logs & Files", text: "Always reach for the /m flag when parsing external log files or multi-line text-editor content.", icon: FileText, color: "text-indigo-500" },
                { label: "u for Modern Apps", text: "If your app supports emojis or multiple languages, always include the /u flag to prevent encoding errors.", icon: Globe, color: "text-rose-500" },
                { label: "Deep Debugging", text: "Use the .exec() method instead of .match() when you need a deep, stateful view into the search progress.", icon: Terminal, color: "text-sky-600" }
              ].map((tip, i) => (
                <div key={i} className="flex gap-6 items-start group">
                   <div className={`p-4 rounded-2xl bg-gray-50 dark:bg-gray-950 shadow-sm ${tip.color} group-hover:scale-110 transition-transform`}>
                      <tip.icon size={20} />
                   </div>
                   <div className="flex flex-col">
                      <h6 className={`text-sm font-black italic underline decoration-transparent ${tip.color} block mb-1 uppercase tracking-widest`}>🚀 {tip.label}</h6>
                      <p className="text-[11px] text-gray-500 font-medium italic underline decoration-gray-500/10 leading-relaxed font-sans">{tip.text}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>

        <div className="space-y-8">
           <SectionHeader icon={Target} title="8. Practice Challenges" subtitle="Test your flag logic awareness." color="text-indigo-500" />
           <div className="grid grid-cols-1 gap-4">
              {[
                { title: "Match all 'hello'", desc: "Perform a total case-insensitive collection.", pattern: "/hello/gi" },
                { title: "Start of Each Line", desc: "Pin matching to the start boundary of multi-line blocks.", pattern: "/^word/m" },
                { title: "Emoji Matching", desc: "Correctly identify multi-byte Unicode emoji chars.", pattern: "/^.$/u" },
                { title: "Find All Numbers", desc: "Extract every numeric sequence from a mixed string.", pattern: "/\\d+/g" }
              ].map((chal, i) => (
                <div key={i} className="p-8 bg-gray-950 rounded-[2.8rem] border border-white/5 shadow-2xl space-y-4 group">
                   <div className="flex justify-between items-center">
                      <h5 className="text-white font-black italic flex items-center gap-3">
                         <div className="w-2 h-2 rounded-full bg-indigo-500"></div> {chal.title}
                      </h5>
                      <span className="text-[8px] font-black text-gray-400 italic tracking-widest uppercase">Task {i+1}</span>
                   </div>
                   <p className="text-gray-500 text-[10px] italic">{chal.desc}</p>
                   <div className="p-4 bg-white/5 border border-white/10 rounded-xl font-mono text-[10px] text-indigo-400 group-hover:border-indigo-500/30 transition-colors">
                      {chal.pattern}
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24 relative italic font-sans italic">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-sky-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em] font-sans leading-tight">
          Behavioral Logic. <br /> Precise Selection.
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium italic underline decoration-transparent max-w-2xl mx-auto font-sans leading-relaxed">
          RegExp flags are the "Personality" of your pattern. Mastering their combinations allows you to control exactly how the engine scans, remembers, and ignores characters, turning basic patterns into sophisticated search engines.
        </p>
      </footer>

    </div>
  );
};

// Mock components to replace non-existent lucide icons used in mapping
const FileText = (props: any) => <ClipboardList {...props} />;
const Key = (props: any) => <ShieldCheck {...props} />;

export default JsRegExpFlags;