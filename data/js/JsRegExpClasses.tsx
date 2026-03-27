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
  Type
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

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-violet-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
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

const JsRegExpClasses: React.FC = () => {
  const [visualStr, setVisualStr] = useState('User_123 @2026');
  const [activeClass, setActiveClass] = useState('\\w+');

  const visualMatches = useMemo(() => {
    try {
      const re = new RegExp(activeClass, 'g');
      const res = visualStr.match(re);
      return res ? Array.from(res) : [];
    } catch (e) {
      return [];
    }
  }, [visualStr, activeClass]);

  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#020617] min-h-screen font-sans selection:bg-violet-500/30 overflow-x-hidden text-gray-900 dark:text-white">

      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[140px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-violet-600 dark:text-violet-400 text-[10px] font-black mb-8 border border-violet-100 dark:border-violet-900/50 shadow-xl shadow-violet-500/5 animate-pulse tracking-[0.2em]">
          <Type size={14} className="fill-current" /> PATTERN CHARACTER SETS
        </div>
        <h1 className="text-6xl sm:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
          JS RegExp <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-500 to-emerald-600 drop-shadow-2xl font-sans italic">
            Classes
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed italic">
          Master the predefined and custom character sets that allow you to categorize and capture text with <span className="text-gray-900 dark:text-white font-bold underline decoration-violet-500/30">powerful shorthand</span> instead of exhaustive patterns.
        </p>
      </header>

      {/* ── Section 1: Intro ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <SectionHeader icon={Info} title="1. What are Character Classes?" subtitle="Functional shortcuts for character sets." color="text-violet-500" />
          <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-10 relative overflow-hidden group">
            <div className="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:scale-110 transition-transform duration-1000 rotate-12">
               <Grid size={180} />
            </div>
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300 italic leading-relaxed font-sans">
              "Character classes are the categorizers of the regex world. Instead of writing [0123456789], you can simply write \\d. These shortcuts make your patterns cleaner, faster, and much more readable."
            </p>
            <div className="p-6 bg-violet-500/5 border border-violet-500/10 rounded-2xl italic">
               <span className="text-[10px] font-black text-violet-600 uppercase tracking-widest block underline pb-2">Pro Philosophy</span>
               <p className="text-[11px] text-gray-400 italic font-sans leading-relaxed">Modern regular expressions utilize these classes to build sophisticated search templates that can isolate anything from whitespace to complex alphanumeric hashes with just 2 characters.</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
           <SectionHeader icon={Table} title="2. Types of Classes" subtitle="Complete reference catalog." color="text-indigo-500" />
           <div className="p-8 bg-gray-950 rounded-[4rem] border border-white/5 relative group overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-12 opacity-[0.02] group-hover:scale-125 transition-transform duration-[2000ms]">
                 <Binary size={300} className="text-violet-500" />
              </div>
              <div className="relative z-10 overflow-x-auto text-[10px] space-y-8">
                 <div>
                    <h5 className="text-[10px] font-black text-violet-500 uppercase tracking-[0.3em] italic mb-4">Predefined Classes</h5>
                    <table className="w-full text-left">
                       <tbody className="divide-y divide-white/5">
                          {[
                            { c: "\\d", m: "Digit [0–9]" },
                            { c: "\\D", m: "Non-digit" },
                            { c: "\\w", n: "Word char (A-Z, 0-9, _)" },
                            { c: "\\W", n: "Non-word character" },
                            { c: "\\s", m: "Whitespace (tab, newline)" },
                            { c: "\\S", m: "Non-whitespace char" }
                          ].map((row, i) => (
                            <tr key={i} className="hover:bg-white/5 transition-all group/row font-mono italic">
                               <td className="py-3 px-4 font-black text-violet-500 text-lg group-hover/row:translate-x-1 transition-transform">{row.c}</td>
                               <td className="py-3 px-4 text-gray-400 font-medium italic">{row.m || row.n}</td>
                            </tr>
                          ))}
                       </tbody>
                    </table>
                 </div>

                 <div>
                    <h5 className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.3em] italic mb-4">Custom Classes</h5>
                    <table className="w-full text-left font-mono">
                       <tbody className="divide-y divide-white/5">
                          {[
                            { s: "[abc]", m: "Matches a, b, or c" },
                            { s: "[a-z]", m: "Lowercase range" },
                            { s: "[0-9]", m: "Exact digit range" },
                            { s: "[^abc]", m: "Negated char set" }
                          ].map((row, i) => (
                            <tr key={i} className="hover:bg-white/5 transition-all group/row italic">
                               <td className="py-3 px-4 font-black text-emerald-500 text-lg">{row.s}</td>
                               <td className="py-3 px-4 text-gray-400 font-medium italic underline decoration-transparent">{row.m}</td>
                            </tr>
                          ))}
                       </tbody>
                    </table>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 2: Detailed Explanations ── */}
      <section className="max-w-6xl mx-auto mb-32 italic">
        <SectionHeader icon={Terminal} title="3. Predefined Classes Deep Dive" subtitle="Harnessing the power of categorical shorthand." color="text-violet-500" />
        
        <div className="grid lg:grid-cols-2 gap-x-12 gap-y-16">
           {/* d */}
           <div className="space-y-6 group">
              <h4 className="text-2xl font-black italic text-violet-500 flex items-center gap-4">
                 <div className="p-3 bg-violet-500/10 rounded-2xl shadow-xl shadow-violet-500/5">
                    <Hash size={24} />
                 </div>
                 3.1 Digit (\d)
              </h4>
              <p className="text-gray-500 font-medium italic font-sans italic leading-relaxed">Target all numeric sequences within a string using the digit shorthand.</p>
              <CodeBlock title="\d+ Match" code={`let text = "Order 1234";\nlet result = text.match(/\\d+/g);\n\nconsole.log(result); // ["1234"]`} />
           </div>

           {/* Non-d */}
           <div className="space-y-6 group">
              <h4 className="text-2xl font-black italic text-indigo-500 flex items-center gap-4">
                 <div className="p-3 bg-indigo-500/10 rounded-2xl shadow-xl shadow-indigo-500/5">
                    <AlertTriangle size={24} />
                 </div>
                 3.2 Non-Digit (\D)
              </h4>
              <p className="text-gray-500 font-medium italic font-sans italic leading-relaxed">The reverse search: extracts everything that is definitely NOT a numeric character.</p>
              <CodeBlock title="\D+ Extraction" code={`let text = "123ABC";\nlet result = text.match(/\\D+/g);\n\nconsole.log(result); // ["ABC"]`} />
           </div>

           {/* w */}
           <div className="space-y-6 group border-t border-gray-100 dark:border-gray-800 pt-12">
              <h4 className="text-2xl font-black italic text-emerald-500 flex items-center gap-4">
                 <div className="p-3 bg-emerald-500/10 rounded-2xl shadow-xl shadow-emerald-500/5">
                    <Box size={24} />
                 </div>
                 3.3 Word Character (\w)
              </h4>
              <p className="text-gray-500 font-medium italic font-sans italic leading-relaxed">A broader class that captures letters, numbers, and the underscore symbol (_).</p>
              <CodeBlock title="\w+ Word Match" code={`let text = "user_123";\nlet result = text.match(/\\w+/g);\n\nconsole.log(result); // ["user_123"]`} />
           </div>

           {/* Non-w */}
           <div className="space-y-6 group border-t border-gray-100 dark:border-gray-800 pt-12">
              <h4 className="text-2xl font-black italic text-rose-500 flex items-center gap-4">
                 <div className="p-3 bg-rose-500/10 rounded-2xl shadow-xl shadow-rose-500/5">
                    <CircleSlash size={24} />
                 </div>
                 3.4 Non-Word (\W)
              </h4>
              <p className="text-gray-500 font-medium italic font-sans italic leading-relaxed">Pulls symbols and boundary characters (@, !, etc.) that fall outside the word-character category.</p>
              <CodeBlock title="\W+ Symbol Detection" code={`let text = "hello@world!";\nlet result = text.match(/\\W+/g);\n\nconsole.log(result); // ["@", "!"]`} />
           </div>

           {/* s */}
           <div className="space-y-6 group border-t border-gray-100 dark:border-gray-800 pt-12">
              <h4 className="text-2xl font-black italic text-amber-500 flex items-center gap-4">
                 <div className="p-3 bg-amber-500/10 rounded-2xl shadow-xl shadow-amber-500/5">
                    <MousePointer2 size={24} />
                 </div>
                 3.5 Whitespace (\s)
              </h4>
              <p className="text-gray-500 font-medium italic font-sans italic leading-relaxed">Crucial for formatting logic. Matches space, tab, and newline boundaries.</p>
              <CodeBlock title="\s Detection" code={`let text = "Hello World";\nlet result = text.match(/\\s/g);\n\nconsole.log(result); // [" "]`} />
           </div>

           {/* Non-s */}
           <div className="space-y-6 group border-t border-gray-100 dark:border-gray-800 pt-12">
              <h4 className="text-2xl font-black italic text-sky-500 flex items-center gap-4">
                 <div className="p-3 bg-sky-500/10 rounded-2xl shadow-xl shadow-sky-500/5">
                    <Maximize size={24} />
                 </div>
                 3.6 Non-Whitespace (\S)
              </h4>
              <p className="text-gray-500 font-medium italic font-sans italic leading-relaxed">Captures all contiguous alphanumeric or symbolic content by ignoring the gaps.</p>
              <CodeBlock title="\S+ Word extraction" code={`let text = "Hi There";\nlet result = text.match(/\\S+/g);\n\nconsole.log(result); // ["Hi", "There"]`} />
           </div>
        </div>
      </section>

      {/* ── Section 3: Visual Interpretation ── */}
      <section className="max-w-6xl mx-auto mb-32 relative group font-sans italic">
        <SectionHeader icon={Eye} title="4. Visual Set Interaction" subtitle="Witness the differentiation engine." color="text-violet-500" />
        
        <div className="p-1 sm:p-2 bg-gradient-to-br from-violet-500/20 via-indigo-500/20 to-emerald-500/20 rounded-[4rem]">
          <div className="bg-white dark:bg-gray-950 rounded-[3.8rem] p-10 md:p-20 shadow-inner italic overflow-hidden relative">
             <div className="grid lg:grid-cols-2 gap-16 items-center italic">
                <div className="space-y-8 italic">
                   <div className="space-y-2 italic">
                      <label className="text-[10px] font-black uppercase text-gray-500 tracking-[0.4em] italic mb-4 block underline decoration-violet-500/20">Input Sandbox Text</label>
                      <input 
                         type="text" 
                         value={visualStr} 
                         onChange={(e) => setVisualStr(e.target.value)}
                         className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 rounded-3xl px-8 py-5 font-black italic outline-none transition-all focus:border-violet-500 text-gray-900 dark:text-white w-full"
                      />
                   </div>
                   <div className="space-y-4">
                      <h3 className="text-4xl font-black italic tracking-tighter leading-tight italic">
                        Active Class: <span className="text-violet-500">{activeClass}</span>
                      </h3>
                      <div className="flex flex-wrap gap-2">
                         {['\\w+', '\\W+', '\\d+', '\\D+', '\\s+', '\\S+'].map((c) => (
                            <button 
                               key={c}
                               onClick={() => setActiveClass(c)}
                               className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeClass === c ? 'bg-violet-500 text-white shadow-xl shadow-violet-500/20' : 'bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-gray-900 dark:hover:text-white'}`}
                            >
                               {c}
                            </button>
                         ))}
                      </div>
                      <p className="text-gray-500 text-xs font-medium italic underline decoration-gray-500/10">Toggle classes to see how the engine categorizes segments of your string.</p>
                   </div>
                </div>

                <div className="relative">
                   <div className="p-12 bg-gray-950 rounded-[3rem] border border-white/5 shadow-2xl space-y-8 relative group overflow-hidden text-center min-h-[350px] flex flex-col justify-center italic">
                      <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:rotate-45 transition-transform duration-1000">
                         <Workflow size={200} className="text-violet-500" />
                      </div>
                      <div className="relative z-10 space-y-8">
                         <span className="text-[10px] font-black italic tracking-[0.3em] text-gray-500 underline decoration-transparent">MATCHED CHUNKS</span>
                         <div className="flex flex-wrap gap-3 justify-center">
                            {visualMatches.length === 0 ? (
                               <span className="text-gray-700 italic font-black uppercase tracking-widest text-xs">Zero Segment Success</span>
                            ) : (
                               visualMatches.map((m, i) => (
                                  <div key={i} className="px-6 py-2 bg-violet-500 text-white font-black rounded-xl shadow-lg shadow-violet-500/20 animate-in zoom-in italic">
                                     {m}
                                  </div>
                               ))
                            )}
                         </div>
                         <div className="h-px bg-white/5 w-1/2 mx-auto"></div>
                         <code className="text-violet-400 text-xs font-mono block italic underline decoration-transparent">Result: {JSON.stringify(visualMatches)}</code>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Custom Classes ── */}
      <section className="max-w-6xl mx-auto mb-32 italic">
        <SectionHeader icon={Code2} title="5. Custom Character Classes" subtitle="Defining your own specific logical boundaries." color="text-indigo-500" />
        <div className="grid lg:grid-cols-3 gap-8">
           {[
             { 
               title: "Specific Matches", 
               desc: "Matches only the characters listed inside the square brackets.", 
               code: 'let text = "cat bat rat";\nlet res = text.match(/[cb]at/g);\n// Output: ["cat", "bat"]',
               pattern: "[abc]",
               color: "violet"
             },
             { 
               title: "Range Detection", 
               desc: "Using the hyphen to denote a spectrum of characters easily.", 
               code: 'let text = "abc XYZ";\nlet res = text.match(/[a-z]+/g);\n// Output: ["abc"]',
               pattern: "[a-z]",
               color: "emerald"
             },
             { 
               title: "Negation Logic", 
               desc: "Use the caret (^) inside brackets to match anything EXCEPT the set.", 
               code: 'let text = "123abc";\nlet res = text.match(/[^0-9]+/g);\n// Output: ["abc"]',
               pattern: "[^0-9]",
               color: "rose"
             }
           ].map((custom, i) => (
              <div key={i} className={`bg-white dark:bg-gray-800 p-8 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:shadow-2xl transition-all flex flex-col italic`}>
                 <div className="flex items-center gap-4 mb-6 italic">
                    <div className={`p-4 rounded-2xl bg-${custom.color}-500/10 text-${custom.color}-500 font-mono font-black text-xl`}>{custom.pattern}</div>
                    <h4 className="text-xl font-black italic tracking-tight">{custom.title}</h4>
                 </div>
                 <p className="text-gray-500 text-sm font-medium mb-6 leading-relaxed italic">{custom.desc}</p>
                 <div className="mt-auto">
                    <CodeBlock title={custom.title} code={custom.code} />
                 </div>
              </div>
           ))}
        </div>
      </section>

      {/* ── Section 5: Real-World Use Cases ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="bg-white dark:bg-gray-800 p-12 rounded-[4rem] shadow-2xl border border-gray-100 dark:border-gray-700 relative overflow-hidden group italic">
           <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:scale-110 transition-transform">
              <ShieldCheck size={180} />
           </div>
           <SectionHeader icon={Scissors} title="6. Real-World Applications" subtitle="Practical production implementations." color="text-violet-500" />
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 italic">
              <div>
                 <h5 className="text-lg font-black italic mb-4 flex items-center gap-3"><Target size={18} className="text-sky-500" /> Extract Numbers</h5>
                 <CodeBlock code={`let text = "Price: 500 INR";\nlet result = text.match(/\\d+/g);`} />
              </div>
              <div>
                 <h5 className="text-lg font-black italic mb-4 flex items-center gap-3"><ShieldCheck size={18} className="text-emerald-500" /> Username Rules</h5>
                 <CodeBlock code={`let username = "user_123";\nlet pattern = /^\\w+$/;\npattern.test(username);`} />
              </div>
              <div>
                 <h5 className="text-lg font-black italic mb-4 flex items-center gap-3"><Zap size={18} className="text-amber-500" /> Trash Removal</h5>
                 <CodeBlock code={`let text = "Hello World";\nlet result = text.replace(/\\s/g, "");`} />
              </div>
           </div>

           <div className="mt-16 bg-gray-50 dark:bg-gray-900 border border-current/5 p-10 rounded-[3rem] italic">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                 <div className="md:w-1/3 text-center italic">
                    <div className="p-6 bg-violet-500 text-white rounded-[2rem] shadow-2xl shadow-violet-500/20 mb-4 inline-block italic font-sans italic border-transparent border-transparent">
                       <Repeat size={40} />
                    </div>
                    <h5 className="text-2xl font-black italic tracking-tighter">7. Combining Classes</h5>
                 </div>
                 <div className="flex-1 space-y-6 italic">
                    <p className="text-gray-500 font-medium leading-relaxed italic">You can merge multiple ranges and classes within a single set for absolute alphanumeric capture power.</p>
                    <CodeBlock code={`let text = "User123!";\nlet res = text.match(/[A-Za-z0-9]+/g);\n// Output: ["User123"]`} />
                    <span className="text-[10px] font-black text-violet-500 uppercase tracking-widest italic underline pb-1">👉 Targets exactly alphanumeric chars.</span>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 6: Common Mistakes ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12 font-sans italic italic">
        <div className="space-y-8 italic">
           <SectionHeader icon={AlertTriangle} title="8. Common Mistakes ⚠️" subtitle="Avoid these categorical logic errors." color="text-rose-500" />
           <div className="bg-rose-500/5 border border-rose-500/10 p-10 rounded-[3.5rem] space-y-6 group overflow-hidden relative italic">
              <div className="absolute top-0 right-0 p-6 opacity-30 text-rose-500 rotate-12 italic">
                 <CircleSlash size={32} />
              </div>
              {[
                { error: "Confusing \w with letters only", m: "\\w also includes numbers [0-9] and underscores [_].", icon: Info },
                { error: "Forgetting the Global Flag", m: "/\\d+/ finds only 1st number; use /\\d+/g for all matches.", icon: Repeat },
                { error: "Wrong Negation Scope", m: "[^a-z] targets everything EXCEPT lowercase chars.", icon: CircleSlash }
              ].map((err, i) => (
                 <div key={i} className="flex gap-4 group/err">
                    <div className="p-4 rounded-xl bg-white dark:bg-gray-950 text-rose-500 h-fit italic">
                       <err.icon size={18} />
                    </div>
                    <div>
                       <h6 className="text-[11px] font-black text-rose-600 uppercase tracking-widest underline decoration-transparent mb-1 italic">#{i+1} {err.error}</h6>
                       <p className="text-[10px] text-gray-500 font-medium italic underline decoration-rose-500/10 underline decoration-transparent italic">{err.m}</p>
                    </div>
                 </div>
              ))}
           </div>
        </div>

        <div className="space-y-8 italic">
           <SectionHeader icon={Lightbulb} title="9. Practitioner Advice" subtitle="Production logic from decades of experience." color="text-amber-500" />
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-8 italic">
              {[
                { label: "Use \d instead of [0-9]", text: "It is significantly cleaner and much more readable for other developers on your team.", icon: Hash, color: "text-violet-500" },
                { label: "Combine Smartly", text: "Patterns like /^\\w+$/ are perfect for secure, standard username validation logic.", icon: ShieldCheck, color: "text-emerald-500" },
                { label: "Simpler is Faster", text: "Avoid over-complicating regex. High readability usually correlates with high performance.", icon: Zap, color: "text-amber-500" },
                { label: "s for Cleanup Task", text: "The whitespace class is perfect for trimming text or sanitizing form input data.", icon: Scissors, color: "text-sky-500" }
              ].map((tip, i) => (
                <div key={i} className="flex gap-6 items-start group italic">
                   <div className={`p-4 rounded-2xl bg-gray-50 dark:bg-gray-950 shadow-sm ${tip.color} group-hover:scale-110 transition-transform italic`}>
                      <tip.icon size={20} />
                   </div>
                   <div className="flex flex-col italic">
                      <h6 className={`text-sm font-black italic underline decoration-transparent ${tip.color} block mb-1 uppercase tracking-widest italic`}>🚀 {tip.label}</h6>
                      <p className="text-[11px] text-gray-500 font-medium italic underline decoration-gray-500/10 leading-relaxed font-sans italic">{tip.text}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* ── Section 10: Practice Challenges ── */}
      <section className="max-w-6xl mx-auto mb-32 relative italic">
         <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-[120px] -z-10 italic"></div>
         <SectionHeader icon={Target} title="10. Skill Drills" subtitle="Transform theory into practical pattern logic." color="text-emerald-500" />
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 italic">
            {[
               { title: "Target Exact Numbers", desc: "Identify all numeric sequences in a mixed string.", pattern: "/\\d+/g" },
               { title: "Categorical Extraction", desc: "Isolate words while ignoring all symbols and gaps.", pattern: "/\\w+/g" },
               { title: "Alpha-Numeric Rules", desc: "Validate strings containing ONLY letters and numbers.", pattern: "/^[a-zA-Z0-9]+$/" },
               { title: "Global Space Purge", desc: "Find and remove every whitespace character from a text.", pattern: "/\\s/g" }
            ].map((tip, i) => (
               <div key={i} className="p-8 bg-gray-950 rounded-[3rem] border border-white/5 shadow-2xl space-y-4 group relative overflow-hidden italic">
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/5 rounded-full blur-xl group-hover:scale-150 transition-transform italic"></div>
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-violet-400 group-hover:bg-white/10 transition-all italic">
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
      <footer className="max-w-4xl mx-auto text-center py-24 relative italic font-sans italic">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-violet-500 to-transparent mx-auto mb-10 italic"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em] font-sans leading-tight italic border-transparent">
          Categorical Logic. <br /> Maximum Speed.
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium italic underline decoration-transparent max-w-2xl mx-auto font-sans leading-relaxed italic border-transparent">
          Character classes are the true efficiency drivers in Regular Expressions. By mastering these sets and shortcuts, you simplify your logic, reduce error rates, and build patterns that are as fast to execute as they are to read.
        </p>
      </footer>

    </div>
  );
};

export default JsRegExpClasses;