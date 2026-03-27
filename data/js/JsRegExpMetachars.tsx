import React, { useState } from 'react';
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
  Flame,
  Target,
  Smartphone,
  CircleSlash
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

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-amber-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
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

const JsRegExpMetachars: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#020617] min-h-screen font-sans selection:bg-amber-500/30 overflow-x-hidden text-gray-900 dark:text-white">

      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-rose-500/5 rounded-full blur-[140px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-amber-600 dark:text-amber-400 text-[10px] font-black mb-8 border border-amber-100 dark:border-amber-900/50 shadow-xl shadow-amber-500/5 animate-pulse tracking-[0.2em]">
          <Star size={14} className="fill-current" /> PATTERN LOGIC SHORTHAND
        </div>
        <h1 className="text-6xl sm:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
          JS RegExp <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-rose-600 drop-shadow-2xl font-sans italic">
            Metachars
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed italic">
          Master the special characters that carry deep semantic meaning, allowing you to build <span className="text-gray-900 dark:text-white font-bold underline decoration-amber-500/30">dynamic templates</span> and <span className="text-gray-900 dark:text-white font-bold underline decoration-amber-500/30">complex search rules</span>.
        </p>
      </header>

      {/* ── Section 1: Intro ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <SectionHeader icon={Info} title="1. What are Metacharacters?" subtitle="Characters with special symbolic meaning." color="text-amber-500" />
          <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-10 relative overflow-hidden group">
            <div className="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:scale-110 transition-transform duration-1000 rotate-12">
               <Cpu size={180} />
            </div>
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300 italic leading-relaxed font-sans">
              "Metacharacters are the building blocks of Regular Expressions. Instead of matching literal text, they represent structural concepts like 'any character', 'start of line', or 'optional occurrence'."
            </p>
            <div className="grid grid-cols-2 gap-4">
               {[
                 { label: "Match Patterns", icon: Search },
                 { label: "Validate Input", icon: ShieldCheck },
                 { label: "Search Efficiently", icon: Zap },
                 { label: "Replace Text", icon: Scissors }
               ].map((cat, i) => (
                 <div key={i} className="p-6 bg-amber-500/5 border border-amber-500/10 rounded-3xl group transition-all hover:scale-105 flex items-center gap-4">
                    <div className="text-amber-500"><cat.icon size={20} /></div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-900 dark:text-white">{cat.label}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
           <SectionHeader icon={Table} title="2. Fast Cheat Sheet" subtitle="Essential metacharacters at a glance." color="text-orange-500" />
           <div className="p-8 bg-gray-950 rounded-[4rem] border border-white/5 relative group overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-12 opacity-[0.02] group-hover:scale-125 transition-transform duration-[2000ms]">
                 <Grid size={300} className="text-amber-500" />
              </div>
              <div className="relative z-10 overflow-x-auto text-[10px]">
                 <table className="w-full text-left">
                    <thead>
                       <tr className="border-b border-white/10 uppercase tracking-[0.2em] italic font-black text-gray-500">
                          <th className="py-4 px-4">Meta</th>
                          <th className="py-4 px-4 text-amber-500">Meaning</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                       {[
                         { m: ".", d: "Any character (except newline)" },
                         { m: "^", d: "Start of string anchor" },
                         { m: "$", d: "End of string anchor" },
                         { m: "*", d: "0 or more repetitions" },
                         { m: "+", d: "1 or more repetitions" },
                         { m: "?", d: "0 or 1 (makes it optional)" },
                         { m: "[]", d: "Specific character set" },
                         { m: "[^]", d: "Negated character set" },
                         { m: "{}", d: "Exact count of repetitions" },
                         { m: "|", d: "OR operator (branching)" },
                         { m: "()", d: "Capturing group" }
                       ].map((row, i) => (
                         <tr key={i} className="hover:bg-white/5 transition-all group/row font-mono">
                            <td className="py-3 px-4 font-black text-amber-500 text-lg group-hover/row:translate-x-1 transition-transform">{row.m}</td>
                            <td className="py-3 px-4 text-gray-400 font-medium italic">{row.d}</td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 2: Core Explanations ── */}
      <section className="max-w-6xl mx-auto mb-32 italic">
        <SectionHeader icon={Terminal} title="3. Core Metacharacters Explained" subtitle="Deep diving into the most used search symbols." color="text-amber-500" />
        
        <div className="grid lg:grid-cols-2 gap-8">
           {[
             { 
               title: "3.1 Dot (.)", 
               desc: "Matches any single character except newline.", 
               code: 'let text = "cat bat rat";\nlet result = text.match(/.at/g);\nconsole.log(result);',
               res: '["cat", "bat", "rat"]',
               color: "text-amber-500"
             },
             { 
               title: "3.2 Caret (^)", 
               desc: "Matches the beginning of the string.", 
               code: 'let text = "Hello World";\nlet result = /^Hello/.test(text);\nconsole.log(result);',
               res: 'true',
               color: "text-orange-500"
             },
             { 
               title: "3.3 Dollar ($)", 
               desc: "Matches the end of the string.", 
               code: 'let text = "Hello World";\nlet result = /World$/.test(text);\nconsole.log(result);',
               res: 'true',
               color: "text-rose-500"
             },
             { 
               title: "3.4 Star (*)", 
               desc: "Matches zero or more repetitions of the previous character.", 
               code: 'let text = "goooal";\nlet result = text.match(/go*al/);\n// Matches: gal, goal, goooal',
               res: '["goooal"]',
               color: "text-yellow-500"
             },
             { 
               title: "3.5 Plus (+)", 
               desc: "Matches one or more repetitions. Must have at least one.", 
               code: 'let text = "goooal";\nlet result = text.match(/go+al/);\n// Requires at least one "o"',
               res: '["goooal"]',
               color: "text-orange-600"
             },
             { 
               title: "3.6 Question Mark (?)", 
               desc: "Makes the preceding character optional (0 or 1).", 
               code: 'let text = "color colour";\nlet result = text.match(/colou?r/g);\nconsole.log(result);',
               res: '["color", "colour"]',
               color: "text-amber-600"
             },
             { 
               title: "3.7 Character Set ([])", 
               desc: "Matches any character defined within the brackets.", 
               code: 'let text = "cat bat rat";\nlet result = text.match(/[cb]at/g);\nconsole.log(result);',
               res: '["cat", "bat"]',
               color: "text-orange-400"
             },
             { 
               title: "3.8 Negated Set ([^])", 
               desc: "Matches any character NOT in the set.", 
               code: 'let text = "cat bat rat";\nlet result = text.match(/[^c]at/g);\nconsole.log(result);',
               res: '["bat", "rat"]',
               color: "text-rose-400"
             },
             { 
               title: "3.9 Curly Braces ({})", 
               desc: "Matches an exact number of character repetitions.", 
               code: 'let text = "100 1000 10000";\nlet result = text.match(/\\d{3}/g);\nconsole.log(result);',
               res: '["100", "100", "100"]',
               color: "text-amber-500"
             },
             { 
               title: "3.10 OR Operator (|)", 
               desc: "Matches either the expression before or after the bar.", 
               code: 'let text = "cat dog";\nlet result = text.match(/cat|dog/g);\nconsole.log(result);',
               res: '["cat", "dog"]',
               color: "text-orange-500"
             },
             { 
               title: "3.11 Grouping (())", 
               desc: "Creates a capturing group to apply operators to multiples.", 
               code: 'let text = "ha haha hahaha";\nlet result = text.match(/(ha)+/g);\nconsole.log(result);',
               res: '["ha", "haha", "hahaha"]',
               color: "text-rose-500"
             }
           ].map((item, i) => (
             <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:shadow-2xl transition-all h-full flex flex-col">
                <h4 className={`text-xl font-black italic ${item.color} mb-4 uppercase tracking-tighter flex items-center justify-between`}>
                   {item.title}
                   <Sparkles size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </h4>
                <p className="text-gray-500 text-sm font-medium mb-6 leading-relaxed italic">{item.desc}</p>
                <div className="mt-auto">
                   <CodeBlock code={item.code} />
                   <div className="p-3 bg-gray-50 dark:bg-gray-900 border border-current/5 rounded-xl text-[10px] font-mono text-center">
                      <span className={`${item.color} font-black uppercase mr-2`}>Result:</span> {item.res}
                   </div>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* ── Section 3: Visualization ── */}
      <section className="max-w-6xl mx-auto mb-32 relative group font-sans">
        <SectionHeader icon={Eye} title="4. Visual Pattern Scanner" subtitle="Think of regex like an automated pattern reader." color="text-orange-500" />
        
        <div className="p-1 sm:p-2 bg-gradient-to-br from-amber-500/20 via-orange-500/20 to-rose-500/20 rounded-[4rem]">
          <div className="bg-white dark:bg-gray-950 rounded-[3.8rem] p-10 md:p-20 shadow-inner italic overflow-hidden relative">
             <div className="grid lg:grid-cols-2 gap-16 items-center italic">
                <div className="space-y-8 italic">
                   <h3 className="text-4xl font-black italic tracking-tighter leading-tight">
                      Pattern: <span className="text-amber-500">^\d{`{3}`}$</span>
                   </h3>
                   <p className="text-gray-500 font-medium italic underline decoration-gray-500/10">Exactly 3 digits only. No letters, no extra spaces.</p>
                   
                   <div className="space-y-4">
                      {[
                        { text: "123", valid: true, m: "Matches exactly 3" },
                        { text: "12", valid: false, m: "Too short" },
                        { text: "1234", valid: false, m: "Too long" }
                      ].map((item, i) => (
                         <div key={i} className="flex items-center gap-6 p-5 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 group/item hover:scale-[1.02] transition-transform">
                            <span className="font-mono text-2xl font-black italic tracking-widest w-24">"{item.text}"</span>
                            <div className="flex flex-col">
                               <span className={`text-[10px] font-black uppercase tracking-widest ${item.valid ? 'text-emerald-500' : 'text-rose-500'}`}>
                                  {item.valid ? '✅ VALID' : '❌ INVALID'}
                               </span>
                               <span className="text-[9px] text-gray-500 font-medium italic">{item.m}</span>
                            </div>
                         </div>
                      ))}
                   </div>
                </div>

                <div className="relative">
                   <div className="p-12 bg-gray-950 rounded-[3rem] border border-white/5 shadow-2xl space-y-8 relative group overflow-hidden text-center">
                      <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:rotate-45 transition-transform duration-1000">
                         <Target size={200} className="text-amber-500" />
                      </div>
                      <div className="space-y-4">
                         <h5 className="text-2xl font-black text-white italic tracking-tight">Scanner Logic</h5>
                         <div className="p-8 bg-white/5 border border-white/10 rounded-3xl space-y-6">
                            <div className="flex flex-col gap-2">
                               <span className="text-amber-500 font-mono text-xl font-black">^ \d{`{3}`} $</span>
                               <ArrowRight size={20} className="mx-auto text-amber-500 animate-pulse rotate-90" />
                               <div className="space-y-1">
                                  <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest block underline pb-2">Breakdown</span>
                                  <div className="flex justify-center gap-4 text-[9px] font-medium text-gray-400">
                                     <span>START</span>
                                     <span>3 DIGITS</span>
                                     <span>END</span>
                                  </div>
                                </div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Real-World Examples ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={ShieldCheck} title="5. Production Scenarios" subtitle="Practical metacharacter implementations." color="text-amber-500" />
        <div className="grid md:grid-cols-2 gap-8">
           {[
             {
               title: "Email Validation (Simple)",
               code: 'let email = "test@gmail.com";\nlet pattern = /^[a-z0-9]+@[a-z]+\\.[a-z]{2,}$/;\npattern.test(email); // true',
               icon: Globe,
               color: "text-amber-500",
               desc: "Strict alphanumeric + domain validation."
             },
             {
               title: "Phone Number Rules",
               code: 'let phone = "9876543210";\nlet pattern = /^\\d{10}$/;\npattern.test(phone); // true',
               icon: Smartphone,
               color: "text-rose-500",
               desc: "Enforcing exactly 10 numeric digits."
             }
           ].map((app, i) => (
             <div key={i} className="bg-white dark:bg-gray-800 p-10 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-2 transition-transform h-full flex flex-col italic">
                <div className="flex justify-between items-start mb-6">
                   <div className={`p-4 rounded-2xl bg-gray-50 dark:bg-gray-950 ${app.color} group-hover:scale-110 transition-transform shadow-lg shadow-current/5`}>
                      <app.icon size={28} />
                   </div>
                   <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest italic underline decoration-transparent">{app.desc}</span>
                </div>
                <h4 className="text-2xl font-black italic mb-6">📌 {app.title}</h4>
                <div className="mt-auto">
                   <CodeBlock title={app.title} code={app.code} />
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* ── Section 5: Common Mistakes ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={AlertTriangle} title="6. Common Mistakes ⚠️" subtitle="Avoid these typical pattern pitfalls." color="text-rose-500" />
        <div className="grid md:grid-cols-2 gap-8 italic font-sans italic">
           <div className="bg-rose-500/5 border border-rose-500/10 p-10 rounded-[3.5rem] space-y-6 group overflow-hidden relative">
              <div className="absolute top-0 right-0 p-6 opacity-30 text-rose-500">
                 <CircleSlash size={32} />
              </div>
              <h4 className="text-2xl font-black italic text-rose-500">Escaping Special Chars</h4>
              <p className="text-gray-500 font-medium">Forgetting to escape characters like <code>.</code> when you want to match a literal dot.</p>
              <div className="grid grid-cols-2 gap-4">
                 <div className="p-4 bg-white dark:bg-gray-950 rounded-2xl border border-rose-200 dark:border-rose-900/40">
                    <span className="text-[9px] font-black text-rose-500 uppercase block mb-1">Mistake</span>
                    <code className="text-xs font-mono">/./</code>
                    <span className="text-[8px] text-gray-500 block mt-1 leading-tight">Matches ANY character.</span>
                 </div>
                 <div className="p-4 bg-white dark:bg-gray-950 rounded-2xl border border-emerald-200 dark:border-emerald-900/40">
                    <span className="text-[9px] font-black text-emerald-500 uppercase block mb-1">Correct</span>
                    <code className="text-xs font-mono">/\./</code>
                    <span className="text-[8px] text-gray-500 block mt-1 leading-tight">Matches a literal ".".</span>
                 </div>
              </div>
           </div>

           <div className="bg-amber-500/5 border border-amber-500/10 p-10 rounded-[3.5rem] space-y-6 group overflow-hidden relative">
              <div className="absolute top-0 right-0 p-6 opacity-30 text-amber-500">
                 <Repeat size={32} />
              </div>
              <h4 className="text-2xl font-black italic text-amber-500">Wrong Repetition</h4>
              <p className="text-gray-500 font-medium italic">Using <code>*</code> when you meant to require at least one character.</p>
              <div className="p-5 bg-white dark:bg-gray-950 rounded-2xl border border-amber-100 dark:border-amber-900/30 text-[10px] space-y-2">
                 <div className="flex items-center gap-2">
                    <span className="text-rose-500 font-black italic">a*</span>
                    <span className="text-gray-500">Matches even an empty string!</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <span className="text-emerald-500 font-black italic underline pb-1">a+</span>
                    <span className="text-gray-500 italic">Requires at least one "a".</span>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 6: Pro Tips ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12 font-sans italic">
        <div className="space-y-8">
           <SectionHeader icon={Lightbulb} title="7. Expert Pro Tips" subtitle="Production logic from 15+ years experience." color="text-amber-500" />
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-8">
              {[
                { label: "Always Test Regex", text: "Use the browser console or online regex testers to verify your patterns before deploying.", icon: Search, color: "text-amber-500" },
                { label: "Start Simple", text: "Build pattern by pattern: start with \\d, then \\d{3}, then wrap with ^ and $.", icon: Zap, color: "text-orange-500" },
                { label: "Use Flags Properly", text: "Combine /g (global), /i (case), and /m (multi-line) to refine the engine's reach.", icon: RotateCcw, color: "text-rose-500" },
                { label: "Groups for Power", text: "Use capturing groups (like (ha)+) to apply quantifiers to complex fragments.", icon: Layers, color: "text-amber-600" }
              ].map((tip, i) => (
                <div key={i} className="flex gap-6 items-start group">
                   <div className={`p-4 rounded-2xl bg-gray-50 dark:bg-gray-950 shadow-sm ${tip.color} group-hover:scale-110 transition-transform`}>
                      <tip.icon size={20} />
                   </div>
                   <div>
                      <h6 className={`text-sm font-black italic underline decoration-transparent ${tip.color} block mb-1 uppercase tracking-widest`}>🚀 {tip.label}</h6>
                      <p className="text-[10px] text-gray-500 font-medium italic underline decoration-gray-500/10 leading-relaxed font-sans">{tip.text}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>

        <div className="space-y-8">
           <SectionHeader icon={Target} title="8. Mini Practice Lab" subtitle="Test your pattern-building skills." color="text-orange-500" />
           <div className="grid grid-cols-1 gap-4">
              {[
                { title: "Match only 5-digit numbers", desc: "Require exactly five numeric characters.", pattern: "/^\\d{5}$/" },
                { title: "Letters + Numbers Only", desc: "Validate username with alphanumeric chars.", pattern: "/^[a-zA-Z0-9]+$/" },
                { title: "Match words starting with 'a'", desc: "Any sequence beginning with the letter 'a'.", pattern: "/\\ba[a-z]*/i" },
                { title: "Match only lowercase", desc: "Fail if any uppercase or symbol is found.", pattern: "/^[a-z]+$/" }
              ].map((chal, i) => (
                <div key={i} className="p-8 bg-gray-950 rounded-[2.8rem] border border-white/5 shadow-2xl space-y-4 group">
                   <div className="flex justify-between items-center">
                      <h5 className="text-white font-black italic flex items-center gap-3">
                         <div className="w-2 h-2 rounded-full bg-orange-500"></div> {chal.title}
                      </h5>
                      <span className="text-[8px] font-black text-gray-500 italic tracking-widest">TASK {i+1}</span>
                   </div>
                   <p className="text-gray-500 text-[10px] italic">{chal.desc}</p>
                   <div className="p-4 bg-white/5 border border-white/10 rounded-xl font-mono text-[10px] text-orange-400 group-hover:border-orange-500/30 transition-colors">
                      {chal.pattern}
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24 relative italic">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em] font-sans leading-tight">
          Semantic Syntax. <br /> Absolute Control.
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium italic underline decoration-transparent max-w-2xl mx-auto font-sans leading-relaxed">
          Metacharacters are the soul of regular expressions. Mastering these symbols allows you to transition from simple text matching to building powerful, dynamic logic scanners that can profile any data string with surgical precision.
        </p>
      </footer>

    </div>
  );
};

export default JsRegExpMetachars;