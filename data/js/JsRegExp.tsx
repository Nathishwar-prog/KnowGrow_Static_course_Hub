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
  Compass,
  Layout,
  FileSearch,
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
      <pre className="p-5 overflow-x-auto text-sm font-mono leading-relaxed text-gray-300 scrollbar-thin scrollbar-thumb-gray-700 font-medium font-sans border-transparent">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-sky-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
  <div className="mb-8 font-sans">
    <h2 className="text-3xl font-black flex items-center text-gray-900 dark:text-white mb-2 tracking-tight italic underline decoration-transparent">
      <div className={`p-2.5 rounded-2xl bg-white dark:bg-gray-800 mr-4 shadow-xl border border-gray-100 dark:border-gray-700 ${color}`}>
        <Icon size={28} />
      </div>
      {title}
    </h2>
    {subtitle && <p className="text-gray-500 dark:text-gray-400 ml-16 font-medium leading-relaxed italic border-transparent">{subtitle}</p>}
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const JsRegExp: React.FC = () => {
  const [visStr, setVisStr] = useState('Hello123');
  const [visPat, setVisPat] = useState('\\d+');

  const visMatches = useMemo(() => {
    try {
      const re = new RegExp(visPat, 'g');
      const res = visStr.match(re);
      return res ? Array.from(res) : [];
    } catch (e) {
      return [];
    }
  }, [visStr, visPat]);

  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#020617] min-h-screen font-sans selection:bg-sky-500/30 overflow-x-hidden text-gray-900 dark:text-white border-transparent">

      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[140px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative italic">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-sky-600 dark:text-sky-400 text-[10px] font-black mb-8 border border-sky-100 dark:border-sky-900/50 shadow-xl shadow-sky-500/5 animate-pulse tracking-[0.2em] italic">
          <Compass size={14} className="fill-current" /> PATTERN SEARCH FOUNDATION
        </div>
        <h1 className="text-6xl sm:text-8xl font-black mb-8 tracking-tighter leading-[0.9] italic underline decoration-transparent">
          JS Regular <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-500 to-violet-600 drop-shadow-2xl font-sans italic">
            Expressions
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed italic border-transparent border-transparent">
          Master the powerful search engine built into JavaScript that allows you to <span className="text-gray-900 dark:text-white font-bold underline decoration-sky-500/30">search</span>, <span className="text-gray-900 dark:text-white font-bold underline decoration-sky-500/30">match</span>, and <span className="text-gray-900 dark:text-white font-bold underline decoration-sky-500/30">manipulate</span> text with precision templates.
        </p>
      </header>

      {/* ── Section 1: Definition & Purpose ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12 items-center italic">
        <div className="space-y-8 italic">
          <SectionHeader icon={Info} title="1. What is a Regular Expression?" subtitle="The ultimate search tool inside JS." color="text-sky-500" />
          <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-10 relative overflow-hidden group italic">
            <div className="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:scale-110 transition-transform duration-1000 rotate-12 italic border-transparent">
               <Cpu size={180} />
            </div>
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300 italic leading-relaxed font-sans italic decoration-transparent border-transparent border-transparent">
              "A Regular Expression (RegExp) is a sequence of characters that forms a search pattern. When you search for data in text, you can use this search pattern to describe what you are looking for."
            </p>
            <div className="grid grid-cols-2 gap-4 italic border-transparent">
               {[
                 { label: "Search Text", icon: Search },
                 { label: "Validate Input", icon: ShieldCheck },
                 { label: "Replace Strings", icon: Scissors },
                 { label: "Extract Data", icon: Database }
               ].map((cat, i) => (
                 <div key={i} className="p-6 bg-sky-500/5 border border-sky-500/10 rounded-3xl group transition-all hover:scale-105 flex items-center gap-4 italic border-transparent">
                    <div className="text-sky-500 italic"><cat.icon size={20} /></div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-900 dark:text-white italic underline decoration-transparent">{cat.label}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>

        <div className="space-y-8 italic">
           <SectionHeader icon={Zap} title="2. Why Use RegExp?" subtitle="When simple methods aren't enough." color="text-indigo-500" />
           <div className="p-10 bg-gray-950 rounded-[4rem] border border-white/5 relative group overflow-hidden shadow-2xl italic">
              <div className="absolute top-0 right-0 p-12 opacity-[0.02] group-hover:scale-125 transition-transform duration-[2000ms] italic border-transparent">
                 <Grid size={300} className="text-sky-500" />
              </div>
              <div className="space-y-6 italic">
                 <p className="text-xl font-black italic text-sky-400 uppercase tracking-tighter italic border-transparent decoration-transparent underline">Functional Power:</p>
                 <ul className="space-y-4 text-gray-400 font-medium italic italic border-transparent border-transparent">
                    <li className="flex items-center gap-4">
                       <CheckCircle size={18} className="text-sky-500" /> Validate emails and passwords.
                    </li>
                    <li className="flex items-center gap-4">
                       <CheckCircle size={18} className="text-sky-500" /> Pull phone numbers from text data.
                    </li>
                    <li className="flex items-center gap-4">
                       <CheckCircle size={18} className="text-sky-500" /> Clean and reformat user inputs.
                    </li>
                    <li className="flex items-center gap-4">
                       <CheckCircle size={18} className="text-sky-500" /> Build complex text transformers.
                    </li>
                 </ul>
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 2: Construction ── */}
      <section className="max-w-6xl mx-auto mb-32 italic">
        <SectionHeader icon={Code2} title="3. Creating a RegExp" subtitle="Instructional syntax for matching." color="text-sky-500" />
        <div className="grid lg:grid-cols-2 gap-8 italic font-sans italic">
           <div className="bg-white dark:bg-gray-800 p-10 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-6 italic group overflow-hidden relative">
              <div className="absolute top-0 right-0 p-8 opacity-5 italic border-transparent border-transparent">
                 <Zap size={60} className="text-sky-500" />
              </div>
              <h4 className="text-2xl font-black italic text-sky-500 underline decoration-sky-500/20 italic">3.1 Literal Syntax</h4>
              <p className="text-gray-500 font-medium italic underline decoration-transparent italic border-transparent underline decoration-transparent">"The most common way. Written between two forward slashes."</p>
              <CodeBlock title="Literal pattern creation" code={`let pattern = /hello/;`} />
           </div>

           <div className="bg-white dark:bg-gray-800 p-10 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-6 italic group overflow-hidden relative">
              <div className="absolute top-0 right-0 p-8 opacity-5 italic border-transparent border-transparent">
                 <Workflow size={60} className="text-indigo-500" />
              </div>
              <h4 className="text-2xl font-black italic text-indigo-500 underline decoration-indigo-500/20 italic">3.2 Constructor Syntax</h4>
              <p className="text-gray-500 font-medium italic underline decoration-transparent italic border-transparent underline decoration-transparent">"Used when patterns are dynamic or coming from strings."</p>
              <CodeBlock title="Constructor pattern creation" code={`let pattern = new RegExp("hello");`} />
           </div>
        </div>
      </section>

      {/* ── Section 3: Methods ── */}
      <section className="max-w-6xl mx-auto mb-32 italic">
        <SectionHeader icon={Terminal} title="4. Basic Methods" subtitle="The functions that execute patterns." color="text-indigo-500" />
        <div className="grid lg:grid-cols-2 gap-8 italic font-sans italic">
           {[
             { 
               title: "test()", 
               desc: "Returns true or false if pattern matches.", 
               code: 'let text = "Hello World";\nconsole.log(/Hello/.test(text)); // true',
               icon: ShieldCheck, 
               color: "sky"
             },
             { 
               title: "match()", 
               desc: "Returns an array of matched results.", 
               code: 'let text = "cat bat cat";\nconsole.log(text.match(/cat/g)); // ["cat", "cat"]',
               icon: Database, 
               color: "indigo"
             },
             { 
               title: "replace()", 
               desc: "Swap matched patterns with new text.", 
               code: 'let text = "Hello World";\nconsole.log(text.replace(/World/, "JS")); // Hello JS',
               icon: Scissors, 
               color: "violet"
             },
             { 
               title: "search()", 
               desc: "Retrieves index of the first match found.", 
               code: 'let text = "Hello JS";\nconsole.log(text.search(/JS/)); // 6',
               icon: Search, 
               color: "teal"
             }
           ].map((m, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:shadow-2xl transition-all h-full flex flex-col italic border-transparent">
                 <div className="flex justify-between items-center mb-6 italic border-transparent">
                    <h4 className="text-xl font-black italic flex items-center gap-3 tracking-tighter italic border-transparent border-transparent decoration-transparent underline underline decoration-transparent">
                       <m.icon size={18} className={`text-${m.color}-500`} /> {m.title}
                    </h4>
                    <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest italic underline decoration-transparent">{m.desc}</span>
                 </div>
                 <div className="mt-auto italic border-transparent border-transparent decoration-transparent">
                    <CodeBlock code={m.code} title={m.title} />
                 </div>
              </div>
           ))}
        </div>
      </section>

      {/* ── Section 4: Basic Patterns ── */}
      <section className="max-w-6xl mx-auto mb-32 italic">
        <SectionHeader icon={Star} title="5. Basic Patterns" subtitle="The simple building blocks of complex search templates." color="text-sky-500" />
        <div className="grid lg:grid-cols-3 gap-6 italic">
           {[
             { title: "Exact Word", pattern: "/hello/", desc: "Targets the specific literal text.", icon: TextCursor },
             { title: "Digits (\d+)", pattern: "/\\d+/", desc: "Targets numeric sequences.", icon: Hash },
             { title: "Words (\w+)", pattern: "/\\w+/", desc: "Targets alphanumeric characters.", icon: Box }
           ].map((pat, i) => (
              <div key={i} className="p-8 bg-gray-950 rounded-[3rem] border border-white/5 shadow-2xl space-y-4 group italic border-transparent border-transparent decoration-transparent">
                 <div className="p-4 bg-white/5 border border-white/10 rounded-2xl w-fit text-sky-400 group-hover:scale-110 transition-transform italic border-transparent">
                    <pat.icon size={22} />
                 </div>
                 <h5 className="text-white font-black italic tracking-tight italic underline decoration-transparent">{pat.title}</h5>
                 <code className="text-sky-400 text-sm font-mono block italic underline decoration-transparent">{pat.pattern}</code>
                 <p className="text-gray-500 text-[10px] italic underline decoration-transparent">{pat.desc}</p>
              </div>
           ))}
        </div>
      </section>

      {/* ── Section 5: Visualization ── */}
      <section className="max-w-6xl mx-auto mb-32 relative group font-sans italic border-transparent">
        <SectionHeader icon={Eye} title="6. Engine Visualization" subtitle="Witessing patterns find their target." color="text-indigo-500" />
        
        <div className="p-1 sm:p-2 bg-gradient-to-br from-sky-500/20 via-indigo-500/20 to-violet-500/20 rounded-[4rem] italic border-transparent border-transparent decoration-transparent border-transparent">
          <div className="bg-white dark:bg-gray-950 rounded-[3.8rem] p-10 md:p-20 shadow-inner italic overflow-hidden relative italic border-transparent border-transparent decoration-transparent border-transparent">
             <div className="grid lg:grid-cols-2 gap-16 items-center italic border-transparent border-transparent decoration-transparent border-transparent">
                <div className="space-y-8 italic border-transparent border-transparent">
                   <div className="space-y-2 italic border-transparent border-transparent">
                      <label className="text-[10px] font-black uppercase text-gray-400 tracking-[0.4em] italic mb-4 block italic underline decoration-sky-500/20 border-transparent border-transparent">Input String</label>
                      <input 
                         type="text" 
                         value={visStr} 
                         onChange={(e) => setVisStr(e.target.value)}
                         className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 rounded-3xl px-8 py-5 font-black italic outline-none transition-all focus:border-sky-500 text-gray-900 dark:text-white w-full border-transparent border-transparent"
                      />
                   </div>
                   <div className="space-y-4 italic border-transparent border-transparent">
                      <h3 className="text-4xl font-black italic tracking-tighter leading-tight italic border-transparent border-transparent underline decoration-transparent">
                        Pattern: <span className="text-indigo-500">{visPat}</span>
                      </h3>
                      <div className="flex gap-2 font-mono italic">
                         {['\\d+', '\\w+', 'Hello', 'World'].map((p) => (
                           <button 
                             key={p} 
                             onClick={() => setVisPat(p)}
                             className={`px-4 py-2 rounded-xl text-[10px] font-black outline-none transition-all ${visPat === p ? 'bg-indigo-500 text-white shadow-xl shadow-indigo-500/10' : 'bg-gray-100 dark:bg-gray-800 text-gray-500 italic'}`}
                           >
                             {p}
                           </button>
                         ))}
                      </div>
                      <p className="text-gray-500 font-medium italic underline decoration-gray-500/10 italic border-transparent border-transparent decoration-transparent border-transparent">Witness how the engine finds segments based on your conceptual rules.</p>
                   </div>
                </div>

                <div className="relative italic border-transparent border-transparent">
                   <div className="p-12 bg-gray-950 rounded-[3rem] border border-white/5 shadow-2xl space-y-8 relative group overflow-hidden text-center min-h-[350px] flex flex-col justify-center italic border-transparent border-transparent decoration-transparent border-transparent">
                      <div className="absolute top-0 right-0 p-10 opacity-[0.02] group-hover:rotate-45 transition-transform duration-1000 italic border-transparent border-transparent decoration-transparent border-transparent">
                         <Workflow size={200} className="text-sky-500 italic border-transparent border-transparent decoration-transparent border-transparent" />
                      </div>
                      <div className="relative z-10 space-y-8 uppercase underline decoration-transparent italic border-transparent border-transparent decoration-transparent border-transparent">
                         <span className="text-[10px] font-black italic tracking-[0.3em] text-gray-500 italic border-transparent border-transparent decoration-transparent border-transparent border-transparent">Engine Extraction</span>
                         <div className="flex flex-wrap gap-3 justify-center italic border-transparent border-transparent decoration-transparent border-transparent border-transparent">
                            {visMatches.length === 0 ? (
                               <span className="text-gray-700 italic font-black uppercase tracking-widest text-xs italic border-transparent border-transparent decoration-transparent border-transparent border-transparent">Total Null Result</span>
                            ) : (
                               visMatches.map((m, i) => (
                                  <div key={i} className="px-6 py-2 bg-sky-500 text-white font-black rounded-xl shadow-lg shadow-sky-500/20 animate-in zoom-in italic border-transparent border-transparent decoration-transparent border-transparent border-transparent">
                                     {m}
                                  </div>
                               ))
                            )}
                         </div>
                         <div className="h-px bg-white/5 w-1/2 mx-auto italic border-transparent border-transparent decoration-transparent border-transparent border-transparent"></div>
                         <code className="text-sky-400 text-xs font-mono block italic underline decoration-transparent italic border-transparent border-transparent decoration-transparent border-transparent border-transparent">Result: {JSON.stringify(visMatches)}</code>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── Section 6: Real-World Examples ── */}
      <section className="max-w-6xl mx-auto mb-32 italic border-transparent">
        <SectionHeader icon={ShieldCheck} title="7. Real-World Applications" subtitle="Practical code for everyday dev logic." color="text-indigo-500" />
        <div className="grid md:grid-cols-3 gap-8 italic font-sans italic border-transparent">
           {[
             { 
               title: "📌 Email Check", 
               desc: "Basic identifier validation.", 
               code: 'let email = "test@gmail.com";\nlet pattern = /^[a-z0-9]+@[a-z]+\\.[a-z]{2,}$/;\npattern.test(email); // true', 
               color: "sky" 
             },
             { 
               title: "📌 Number Pull", 
               desc: "Extracting specific figures.", 
               code: 'let text = "Price: 500 INR";\ntext.match(/\\d+/g); // ["500"]',
               color: "indigo" 
             },
             { 
               title: "📌 Space Purge", 
               desc: "Formatting data on the fly.", 
               code: 'let text = "Hello World JS";\ntext.replace(/\\s/g, "-");\n// Hello-World-JS', 
               color: "violet" 
             }
           ].map((app, i) => (
              <div key={i} className={`bg-white dark:bg-gray-800 p-8 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-2 transition-transform duration-500 h-full flex flex-col italic border-transparent border-transparent decoration-transparent`}>
                 <h4 className={`text-xl font-black italic mb-4 text-${app.color}-500 italic border-transparent border-transparent decoration-transparent`}>{app.title}</h4>
                 <p className="text-gray-500 text-[10px] font-medium mb-6 italic underline decoration-transparent border-transparent border-transparent">{app.desc}</p>
                 <div className="mt-auto italic border-transparent border-transparent decoration-transparent border-transparent">
                    <CodeBlock code={app.code} title={app.title} />
                 </div>
              </div>
           ))}
        </div>

        <div className="mt-16 bg-white dark:bg-gray-800 p-12 rounded-[4rem] border border-gray-100 dark:border-gray-700 shadow-xl italic group overflow-hidden relative italic border-transparent border-transparent">
           <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:scale-110 transition-transform italic border-transparent border-transparent border-transparent border-transparent">
              <Layers size={200} className="text-sky-500 italic border-transparent border-transparent border-transparent border-transparent border-transparent border-transparent border-transparent" />
           </div>
           <div className="flex flex-col md:flex-row gap-12 items-center relative z-10 italic border-transparent border-transparent border-transparent border-transparent border-transparent border-transparent border-transparent border-transparent">
              <div className="md:w-1/3 text-center italic border-transparent border-transparent border-transparent border-transparent">
                 <div className="p-8 bg-sky-500 text-white rounded-[2.5rem] shadow-2xl shadow-sky-500/20 mb-6 inline-block rotate-3 italic border-transparent border-transparent border-transparent">
                    <Layout size={40} />
                 </div>
                 <h3 className="text-3xl font-black italic tracking-tighter italic border-transparent border-transparent border-transparent border-transparent border-transparent">8. Combining Everything</h3>
              </div>
              <div className="flex-1 space-y-6 italic border-transparent border-transparent border-transparent">
                 <p className="text-gray-500 font-medium italic underline decoration-transparent italic border-transparent border-transparent border-transparent border-transparent">You can merge anchors, character classes, and logic into a single cohesive pattern.</p>
                 <CodeBlock title="Full pattern logic" code={`let text = "User123";\nlet pattern = /^\\w+$/;\npattern.test(text); // true`} />
                 <div className="flex flex-wrap gap-4 text-[10px] italic border-transparent border-transparent">
                    <span className="text-sky-500 font-black italic underline decoration-sky-500/20">^ $ → anchors</span>
                    <span className="text-indigo-500 font-black italic underline decoration-indigo-500/20">\w → character class</span>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 7: Common Mistakes ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12 font-sans italic border-transparent">
        <div className="space-y-8 italic border-transparent">
           <SectionHeader icon={AlertTriangle} title="9. Common Mistakes ⚠️" subtitle="Common logic traps for beginners." color="text-rose-500" />
           <div className="bg-rose-500/5 border border-rose-500/10 p-10 rounded-[3.5rem] space-y-10 group overflow-hidden relative italic border-transparent">
              <div className="absolute top-0 right-0 p-8 opacity-5 text-rose-500 rotate-12 italic border-transparent">
                 <CircleSlash size={60} />
              </div>
              {[
                { label: "Forgetting the g Flag", text: "/cat/ finds 1st match; /cat/g finds ALL matches.", icon: Repeat },
                { label: "Not Escaping Special Chars", text: "/./ matches ANY char; /\\./ matches a literal dot.", icon: Code2 },
                { label: "Over-Complex Patterns", text: "Don't build a 50-char regex for simple tasks. Keep it readable.", icon: Sparkles }
              ].map((err, i) => (
                 <div key={i} className="flex gap-6 items-start italic border-transparent border-transparent">
                    <div className="p-4 rounded-xl bg-white dark:bg-gray-950 text-rose-500 h-fit italic border-transparent border-transparent shadow shadow-rose-900/5">
                       <err.icon size={20} />
                    </div>
                    <div>
                       <h6 className="text-[11px] font-black text-rose-600 uppercase tracking-widest italic underline decoration-transparent mb-1 italic border-transparent border-transparent">{err.label}</h6>
                       <p className="text-[10px] text-gray-500 font-medium italic underline decoration-rose-500/10 underline decoration-transparent italic border-transparent border-transparent">{err.text}</p>
                    </div>
                 </div>
              ))}
           </div>
        </div>

        <div className="space-y-8 italic border-transparent">
           <SectionHeader icon={Lightbulb} title="10. Practitioner Advice" subtitle="15+ Years of Industry Logic." color="text-amber-500" />
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-8 italic border-transparent">
              {[
                { label: "Start Simple → Expand", text: "Start with \\d, then \\d+, then pin it with ^ and $ anchors.", icon: Zap, color: "text-sky-500" },
                { label: "Use Online Testers", text: "Visualize your patterns in real-time before moving them to production code.", icon: Globe, color: "text-indigo-500" },
                { label: "Combine Smartly", text: "Patterns like /^\\w+@\\w+\\.\\w+$/ are great foundations for logic blocks.", icon: Link, color: "text-violet-500" },
                { label: "Only When Needed", text: "Don't overuse complexity for simple string.includes() or startsWith().", icon: SearchCode, color: "text-amber-500" }
              ].map((tip, i) => (
                <div key={i} className="flex gap-6 items-start group italic border-transparent border-transparent">
                   <div className={`p-4 rounded-2xl bg-gray-50 dark:bg-gray-950 shadow-sm ${tip.color} group-hover:scale-110 transition-transform italic border-transparent border-transparent`}>
                      <tip.icon size={20} />
                   </div>
                   <div className="flex flex-col italic border-transparent border-transparent border-transparent">
                      <h6 className={`text-sm font-black italic underline decoration-transparent ${tip.color} block mb-1 uppercase tracking-widest italic border-transparent border-transparent`}>🚀 {tip.label}</h6>
                      <p className="text-[10px] text-gray-500 font-medium italic underline decoration-gray-500/10 leading-relaxed font-sans italic border-transparent border-transparent">{tip.text}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* ── Section 10: Practice Challenges ── */}
      <section className="max-w-6xl mx-auto mb-32 relative italic border-transparent">
         <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sky-500/5 rounded-full blur-[120px] -z-10 italic border-transparent"></div>
         <SectionHeader icon={Target} title="11. Skills Practice" subtitle="Test your foundational understanding." color="text-sky-500" />
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 italic border-transparent">
            {[
               { title: "Phone Validation", desc: "Validate exactly 10 numeric digits.", pattern: "/^\\d{10}$/" },
               { title: "Extract Words", desc: "Isolate all contiguous word segments.", pattern: "/\\w+/g" },
               { title: "Space Re-format", desc: "Swap all whitespaces with underscores.", pattern: "/\\s/g" },
               { title: "Lowercase Rule", desc: "Verify string contains only lowercase letters.", pattern: "/^[a-z]+$/" }
            ].map((tip, i) => (
               <div key={i} className="p-8 bg-gray-950 rounded-[3rem] border border-white/5 shadow-2xl space-y-4 group relative overflow-hidden italic border-transparent decoration-transparent border-transparent">
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/5 rounded-full blur-xl group-hover:scale-150 transition-transform italic border-transparent"></div>
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-sky-400 group-hover:bg-white/10 transition-all italic border-transparent">
                     <Target size={20} />
                  </div>
                  <h5 className="text-white font-black italic tracking-tight italic border-transparent underline decoration-transparent">Task {i+1}</h5>
                  <p className="text-gray-500 text-[10px] italic underline decoration-transparent border-transparent border-transparent">{tip.title}</p>
                  <div className="p-4 bg-white/5 rounded-xl font-mono text-[9px] text-sky-400 underline decoration-transparent font-black italic border-transparent">{tip.pattern}</div>
               </div>
            ))}
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24 relative italic font-sans italic border-transparent border-transparent">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-sky-500 to-transparent mx-auto mb-10 italic border-transparent border-transparent"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em] font-sans leading-tight italic border-transparent border-transparent">
          Foundational Patterns. <br /> Total Text Mastery.
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium italic underline decoration-transparent max-w-2xl mx-auto font-sans leading-relaxed italic border-transparent border-transparent">
          Regular Expressions are one of the most powerful utilities in a developer's arsenal. By mastering the basic syntax and methods, you gain the ability to search through and transform data with a level of precision that standard string methods simply cannot match.
        </p>
      </footer>

    </div>
  );
};

// Mock components to replace non-existent lucide icons used in mapping
const Link = (props: any) => <Star {...props} />;

export default JsRegExp;