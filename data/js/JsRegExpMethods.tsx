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
  ClipboardList
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

const JsRegExpMethods: React.FC = () => {
  const [testString, setTestString] = useState('one two three 123 456');
  const [pattern, setPattern] = useState('\\d+');
  const [flags, setFlags] = useState('g');

  const methodResults = useMemo(() => {
    try {
      const re = new RegExp(pattern, flags);
      const isTest = re.test(testString);
      const reExec = new RegExp(pattern, flags);
      const execResult = reExec.exec(testString);
      const matchResult = testString.match(re);
      
      return { 
        test: isTest, 
        exec: execResult ? Array.from(execResult) : null,
        match: matchResult ? Array.from(matchResult) : null
      };
    } catch (e) {
      return { test: false, exec: null, match: null };
    }
  }, [testString, pattern, flags]);

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
          <Workflow size={14} className="fill-current" /> PATTERN EXECUTION CORE
        </div>
        <h1 className="text-6xl sm:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
          JS RegExp <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-500 to-teal-600 drop-shadow-2xl font-sans italic">
            Methods
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed italic">
          Master the functions used to <span className="text-gray-900 dark:text-white font-bold underline decoration-sky-500/30">test</span>, <span className="text-gray-900 dark:text-white font-bold underline decoration-indigo-500/30">search</span>, and <span className="text-gray-900 dark:text-white font-bold underline decoration-teal-500/30">extract</span> data from strings using powerful regex patterns.
        </p>
      </header>

      {/* ── Section 1: Intro ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <SectionHeader icon={Info} title="1. What are RegExp Methods?" subtitle="The functional interface for pattern matching." color="text-sky-500" />
          <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-10 relative overflow-hidden group">
            <div className="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:scale-110 transition-transform duration-1000">
               <Cpu size={180} />
            </div>
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300 italic leading-relaxed">
              "RegExp methods are specialized functions used to perform complex string operations. They allow you to go beyond simple includes() and handle dynamic pattern verification."
            </p>
            <div className="grid grid-cols-2 gap-4">
               {[
                 { label: "RegExp Object Methods", icon: Box, color: "text-sky-500", bg: "bg-sky-500/5", desc: 'Methods like test() & exec()' },
                 { label: "String Methods + Regex", icon: TextCursor, color: "text-indigo-500", bg: "bg-indigo-500/5", desc: 'Methods like match() & search()' }
               ].map((cat, i) => (
                 <div key={i} className={`p-6 ${cat.bg} border border-current/10 rounded-3xl group transition-all hover:scale-105`}>
                    <div className={`${cat.color} mb-3`}><cat.icon size={24} /></div>
                    <span className="text-[10px] font-black uppercase tracking-widest block text-gray-900 dark:text-white mb-1">{cat.label}</span>
                    <p className="text-[9px] text-gray-500 font-medium italic">{cat.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>

        <div className="relative">
           <div className="absolute -inset-4 bg-gradient-to-br from-sky-400/20 to-indigo-600/20 rounded-[4rem] blur-[30px] -z-10"></div>
           <div className="bg-white dark:bg-gray-950 p-12 rounded-[3.5rem] border border-gray-100 dark:border-gray-800 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-10 opacity-[0.02] group-hover:rotate-12 transition-transform duration-1000">
                 <Eye size={200} className="text-sky-500" />
              </div>
              <h4 className="text-2xl font-black text-gray-900 dark:text-white mb-8 flex items-center gap-3 italic">
                 <Search size={24} className="text-sky-500" /> Simple Visualization
              </h4>
              <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-[2.5rem] border-2 border-dashed border-gray-100 dark:border-gray-800 text-center space-y-4">
                 <div className="text-sm font-black text-gray-400 uppercase tracking-widest">Input String</div>
                 <div className="text-4xl font-black text-gray-900 dark:text-white italic tracking-tighter">"Hello<span className="text-sky-500 underline decoration-sky-500/20">123</span>"</div>
                 <div className="h-px bg-gray-200 dark:bg-gray-700 w-1/2 mx-auto"></div>
                 <div className="text-[10px] font-black text-indigo-500 uppercase tracking-widest">Pattern: /\d+/</div>
                 <ArrowRight size={24} className="mx-auto text-sky-500 animate-pulse" />
                 <div className="text-2xl font-black text-teal-500 italic">Result → "123"</div>
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 2: RegExp Object Methods ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Terminal} title="2. RegExp Object Methods" subtitle="Methods attached to the /regex/ literal." color="text-sky-500" />
        <div className="grid lg:grid-cols-2 gap-8">
           <div className="bg-white dark:bg-gray-800 p-10 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-8 relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                 <Zap size={60} className="text-sky-500" />
              </div>
              <div>
                 <h4 className="text-2xl font-black italic text-sky-500 mb-2 flex items-center gap-3 uppercase tracking-tighter">
                    <CheckCircle size={24} /> test()
                 </h4>
                 <p className="text-gray-500 font-medium italic mb-6">"Most important method: Checks if the pattern exists in the string."</p>
                 <CodeBlock title="test() Example" code={`let regex = /js/i;\n\nconsole.log(regex.test("I love JS"));\n\n// Output: true`} />
                 <div className="flex items-center gap-4 p-4 bg-sky-500/5 border border-sky-500/10 rounded-2xl">
                    <span className="text-[10px] font-black text-sky-600 uppercase tracking-widest">Returns:</span>
                    <span className="text-xs font-black italic underline decoration-sky-500/20">true or false (Boolean)</span>
                 </div>
              </div>
           </div>

           <div className="bg-white dark:bg-gray-800 p-10 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-8 relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                 <Activity size={60} className="text-indigo-500" />
              </div>
              <div>
                 <h4 className="text-2xl font-black italic text-indigo-500 mb-2 flex items-center gap-3 uppercase tracking-tighter">
                    <RotateCcw size={24} /> exec()
                 </h4>
                 <p className="text-gray-500 font-medium italic mb-6">"Returns specific match details including capture groups and location."</p>
                 <CodeBlock title="exec() Example" code={`let regex = /\\d+/;\n\nconsole.log(regex.exec("Order123"));\n\n// Output: ["123"]`} />
                 <div className="flex items-center gap-4 p-4 bg-indigo-500/5 border border-indigo-500/10 rounded-2xl">
                    <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">Returns:</span>
                    <span className="text-xs font-black italic underline decoration-indigo-500/20 text-gray-900 dark:text-white">Array (info) or null</span>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 3: String Methods ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Scissors} title="3. String Methods with RegExp" subtitle="When text objects utilize pattern power." color="text-indigo-500" />
        <div className="grid lg:grid-cols-2 gap-8 italic">
           {[
             { 
               title: "match()", 
               desc: "Extract matches into an array.", 
               code: 'let text = "cat bat rat";\nconsole.log(text.match(/at/g));\n\n// Output: ["at", "at", "at"]',
               color: "sky"
             },
             { 
               title: "matchAll()", 
               desc: "Advanced: extract all matches with full details (iterator).", 
               code: 'let text = "test1 test2";\nlet matches = text.matchAll(/test\\d/g);\nfor (let m of matches) { console.log(m[0]); }',
               color: "indigo"
             },
             { 
               title: "search()", 
               desc: "Find the position index of the first valid match.", 
               code: 'let text = "Hello JS";\nconsole.log(text.search(/JS/));\n\n// Output: 6',
               color: "teal"
             },
             { 
               title: "split()", 
               desc: "Cut string into elements using your pattern.", 
               code: 'let text = "a,b,c";\nconsole.log(text.split(/,/));\n\n// Output: ["a", "b", "c"]',
               color: "rose"
             }
           ].map((item, i) => (
             <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:shadow-2xl transition-all h-full flex flex-col">
                <div className="flex justify-between items-center mb-6">
                   <h4 className="text-xl font-black italic flex items-center gap-3 tracking-tighter">
                      <Sparkles size={18} className={`text-${item.color}-500`} /> {item.title}
                   </h4>
                   <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{item.desc}</span>
                </div>
                <div className="mt-auto">
                   <CodeBlock code={item.code} title={item.title} />
                </div>
             </div>
           ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-8 italic">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-6">
             <div className="flex justify-between items-center">
                <h4 className="text-xl font-black italic flex items-center gap-3 tracking-tighter">
                   <Repeat size={18} className="text-emerald-500" /> replace()
                </h4>
                <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Swap first match.</span>
             </div>
             <CodeBlock code={`let text = "JS is fun";\nconsole.log(text.replace(/JS/, "JavaScript"));\n\n// Output: "JavaScript is fun"`} title="replace()" />
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-6">
             <div className="flex justify-between items-center">
                <h4 className="text-xl font-black italic flex items-center gap-3 tracking-tighter">
                   <Grid size={18} className="text-amber-500" /> replaceAll()
                </h4>
                <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Swap all matches.</span>
             </div>
             <CodeBlock code={`let text = "JS JS JS";\nconsole.log(text.replaceAll(/JS/g, "JavaScript"));\n\n// Output: "JavaScript JavaScript JavaScript"`} title="replaceAll()" />
          </div>
        </div>
      </section>

      {/* ── Section 4: Comparison Table ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Table} title="4. Method Comparison Table" subtitle="At-a-glance guide to choosing the right tool." color="text-teal-500" />
        <div className="p-8 sm:p-12 bg-gray-950 rounded-[4rem] border border-white/5 shadow-2xl relative overflow-hidden group">
           <div className="absolute inset-0 bg-sky-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
           <div className="relative z-10 overflow-x-auto">
              <table className="w-full text-left">
                 <thead>
                    <tr className="border-b border-white/10 uppercase tracking-[0.2em] italic font-black text-[10px] text-gray-500">
                       <th className="py-6 px-4">Method</th>
                       <th className="py-6 px-4">Purpose</th>
                       <th className="py-6 px-4 text-sky-500">Return Type</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-white/5">
                    {[
                      { m: "test()", p: "Check if pattern exists", r: "Boolean" },
                      { m: "exec()", p: "Identify match index & details", r: "Array / null" },
                      { m: "match()", p: "Collect all extracted matches", r: "Array / null" },
                      { m: "matchAll()", p: "All matches with group details", r: "Iterator" },
                      { m: "search()", p: "Locate index of first match", r: "Number" },
                      { m: "replace()", p: "Substitute patterns with text", r: "String" },
                      { m: "split()", p: "Fragment string via regex", r: "Array" }
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-white/5 transition-all group/row">
                         <td className="py-5 px-4 font-mono font-black text-sky-400 text-lg group-hover/row:translate-x-1 transition-transform">{row.m}</td>
                         <td className="py-5 px-4 text-gray-400 font-medium italic text-sm">{row.p}</td>
                         <td className="py-5 px-4 font-mono text-indigo-400 font-bold text-xs">{row.r}</td>
                      </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </div>
      </section>

      {/* ── Section 5: Real-World Sandbox ── */}
      <section className="max-w-6xl mx-auto mb-32 relative group">
         <div className="absolute top-0 left-0 w-full h-full bg-sky-500/5 blur-[100px] pointer-events-none -z-10 group-hover:bg-sky-500/10 transition-colors"></div>
         <SectionHeader icon={ClipboardList} title="5. Real-World Applications" subtitle="Practical use cases for regex methods." color="text-sky-500" />
         
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Email Validation", 
                code: 'let regex = /^[\\w.-]+@[a-z]+\\.[a-z]{2,}$/;\nregex.test("user@gmail.com");', 
                res: 'true', 
                icon: ShieldCheck, 
                color: "emerald" 
              },
              { 
                title: "Number Pull", 
                code: 'let text = "Price: 500";\ntext.match(/\\d+/);', 
                res: '["500"]', 
                icon: Hash, 
                color: "sky" 
              },
              { 
                title: "Global Swap", 
                code: 'let text = "hello hello";\ntext.replace(/hello/g, "hi");', 
                res: '"hi hi"', 
                icon: Repeat, 
                color: "indigo" 
              },
              { 
                title: "Delimited Split", 
                code: 'let text = "one two three";\ntext.split(/\\s/);', 
                res: '["one", "two", "three"]', 
                icon: Scissors, 
                color: "teal" 
              }
            ].map((app, i) => (
               <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-lg flex flex-col italic group hover:-translate-y-2 transition-transform h-full">
                  <div className={`p-3 rounded-xl bg-${app.color}-500/10 text-${app.color}-500 w-fit mb-4 group-hover:scale-110 transition-transform`}>
                     <app.icon size={20} />
                  </div>
                  <h5 className="text-sm font-black italic mb-4">🎯 {app.title}</h5>
                  <div className="text-[9px] font-mono text-gray-400 bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl border border-gray-100 dark:border-gray-800 mb-4 h-24 overflow-y-auto overflow-x-hidden">
                     {app.code}
                  </div>
                  <div className={`mt-auto p-2 bg-${app.color}-500/5 border border-${app.color}-500/10 rounded-lg text-center`}>
                     <span className={`text-[8px] font-black uppercase text-${app.color}-500 tracking-widest`}>Result: {app.res}</span>
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* ── Section 6: Important Behavior & Advice ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12 font-sans italic">
        <div className="space-y-8">
           <SectionHeader icon={AlertTriangle} title="6. Important Behavior ⚠️" subtitle="Common pitfalls and engine mechanics." color="text-rose-500" />
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-8 group overflow-hidden relative">
              <div className="absolute bottom-0 right-0 p-8 opacity-5 group-hover:translate-x-4 transition-transform">
                 <Workflow size={120} />
              </div>
              <h5 className="text-xl font-black italic text-rose-500 mb-4 underline decoration-rose-500/20">The Global (g) Flag Effect</h5>
              <p className="text-gray-500 font-medium leading-relaxed">
                 When utilizing the global flag with <code>exec()</code>, the method remembers the last match index and continues searching from that point on subsequent calls.
              </p>
              <CodeBlock code={`let regex = /\\d+/g;\nregex.exec("123 456");\n\n// moves forward each call!`} title="Position Tracking" />
              <div className="p-4 bg-rose-500/5 border border-rose-500/10 rounded-2xl flex items-center gap-3">
                 <Package size={16} className="text-rose-500" />
                 <span className="text-[10px] font-black uppercase tracking-widest text-rose-600 italic">Behavior: exec() tracks state.</span>
              </div>
           </div>
        </div>

        <div className="space-y-8">
          <SectionHeader icon={Lightbulb} title="Expert Advice" subtitle="Production logic for clean regex work." color="text-amber-500" />
          <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-6">
            {[
              { label: "Use test() for Validation", text: "It's the fastest and simplest way to confirm if data follows your rules.", icon: ShieldCheck, color: "text-emerald-500" },
              { label: "match() for Extraction", text: "When you need the actual data values instead of just knowing it exists.", icon: Download, color: "text-sky-500" },
              { label: "UI Text Processing", text: "Always reach for replace() to format strings dynamically in your interface components.", icon: CirclePlay, color: "text-violet-500" },
              { label: "Keep it Readable", text: "Avoid over-nesting complex patterns. Readability is more important than pattern brevity.", icon: BookOpen, color: "text-indigo-500" }
            ].map((rec, i) => (
              <div key={i} className="flex gap-5 items-start bg-gray-50 dark:bg-gray-950 p-6 rounded-3xl group transition-all hover:scale-[1.02]">
                <div className={`p-4 rounded-2xl bg-white dark:bg-gray-800 shadow-sm ${rec.color} group-hover:scale-110 transition-transform`}>
                  <rec.icon size={20} />
                </div>
                <div className="flex flex-col">
                  <h6 className={`text-sm font-black italic uppercase tracking-widest ${rec.color} mb-1 underline decoration-transparent`}>{rec.label}</h6>
                  <p className="text-[10px] text-gray-500 font-medium italic underline decoration-gray-500/10 leading-relaxed font-sans">{rec.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 10: Tips & Tricks ── */}
      <section className="max-w-6xl mx-auto mb-32 relative">
         <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sky-500/5 rounded-full blur-[120px] -z-10"></div>
         <SectionHeader icon={Zap} title="⚡ Speed Run: Tips & Tricks" subtitle="Pro moves for pattern efficiency." color="text-sky-500" />
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
               { title: "Combine Flags", desc: "Use /gi for global case-insensitivity.", code: "/hello/gi", icon: Repeat, color: "text-sky-500" },
               { title: "Debug Easily", desc: "Use console.log(regex.exec(text)) for raw data.", code: "Raw Engine View", icon: Search, color: "text-indigo-500" },
               { title: "matchAll() Power", desc: "Superior to match() for accessing groups in loops.", code: "Modern Strategy", icon: Sparkles, color: "text-teal-500" },
               { title: "Use Anchors", desc: "Enforce strict length and position rules.", code: "/^\\d{10}$/", icon: Anchor, color: "text-rose-500" }
            ].map((tip, i) => (
               <div key={i} className="p-8 bg-gray-950 rounded-[3rem] border border-white/5 shadow-2xl space-y-4 group relative overflow-hidden">
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/5 rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
                  <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center ${tip.color} group-hover:bg-white/10 transition-all`}>
                     <tip.icon size={20} />
                  </div>
                  <h5 className="text-white font-black italic tracking-tight">{tip.title}</h5>
                  <p className="text-gray-500 text-[10px] italic">{tip.desc}</p>
                  <div className={`p-4 bg-white/5 rounded-xl font-mono text-[9px] ${tip.color} underline decoration-transparent font-black`}>{tip.code}</div>
               </div>
            ))}
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24 relative italic">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-sky-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em] font-sans leading-tight">
          Functional Search. <br /> Total Execution.
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium italic underline decoration-transparent max-w-2xl mx-auto font-sans leading-relaxed">
          Understanding the difference between RegExp methods and String methods allows you to select the most efficient tool for extraction, validation, or transformation. Mastering these functions is essential for any high-level JavaScript developer.
        </p>
      </footer>

    </div>
  );
};

export default JsRegExpMethods;