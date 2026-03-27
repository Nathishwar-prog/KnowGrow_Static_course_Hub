import React, { useState } from 'react';
import { 
  Type, 
  FileCode, 
  CheckCircle, 
  XCircle, 
  ShieldCheck, 
  RefreshCw, 
  Terminal, 
  Settings, 
  ArrowRight,
  Info,
  Code2,
  Zap,
  Play,
  RotateCcw,
  Box,
  Layers,
  Search,
  Check,
  PlusCircle,
  MinusCircle,
  Copy,
  Package,
  Cpu,
  Hash,
  Activity,
  User,
  Layout,
  BookOpen,
  Eye,
  Edit3,
  MessageSquare,
  AlertTriangle,
  Globe,
  Award,
  Flame
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

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-emerald-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
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

const JsStyleGuide: React.FC = () => {
  const [showClean, setShowClean] = useState(false);

  const messyCode = `let a=10;function x(){console.log(a)}`;
  const cleanCode = `const age = 10;

function printAge() {
  console.log(age);
}`;

  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0f172a] min-h-screen font-sans selection:bg-emerald-500/30 overflow-x-hidden text-gray-900 dark:text-white">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[140px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 text-[10px] font-black mb-8 border border-emerald-100 dark:border-emerald-900/50 shadow-xl shadow-emerald-500/5 animate-pulse tracking-[0.2em]">
          <Award size={14} className="fill-current" /> CODE CRAFTSMANSHIP
        </div>
        <h1 className="text-6xl sm:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
          Style <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-500 to-sky-600 drop-shadow-2xl">
            Guide
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The art of writing clean, <span className="text-gray-900 dark:text-white font-bold italic underline decoration-emerald-500/30">readable</span>, and professional JavaScript. For humans, not just machines.
        </p>
      </header>

      {/* ── Section 1: Definition ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <SectionHeader icon={Info} title="1. What is a Style Guide?" subtitle="A set of rules for clean architectural patterns." color="text-emerald-500" />
            <div className="p-8 bg-white dark:bg-gray-800 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl">
              <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                A JavaScript Style Guide is a set of rules and best practices for writing clean, readable, and maintainable code.
              </p>
              <div className="grid grid-cols-2 gap-4">
                 {[
                   { label: "Readability", icon: Eye, desc: "Easy for others to scan" },
                   { label: "Collaboration", icon: User, desc: "Seamless team sync" },
                   { label: "Debugging", icon: Search, desc: "Fix bugs faster" },
                   { label: "Consistency", icon: Layout, desc: "Uniform project feel" }
                 ].map((item, i) => (
                   <div key={i} className="p-5 bg-gray-50 dark:bg-gray-900/50 rounded-3xl border border-gray-100 dark:border-gray-800 flex items-center gap-4">
                      <div className="p-3 rounded-2xl bg-emerald-500 text-white shadow-lg shadow-emerald-500/20">
                         <item.icon size={18} />
                      </div>
                      <div>
                         <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">{item.label}</span>
                         <span className="font-mono text-[10px] font-black">{item.desc}</span>
                      </div>
                   </div>
                 ))}
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-600 rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-white dark:bg-gray-800 p-10 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-2xl overflow-hidden">
               <div className="flex justify-between items-center mb-8">
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white flex items-center gap-3 italic tracking-tight">
                     <RefreshCw size={24} className="text-emerald-500" /> Before vs After
                  </h3>
                  <button 
                    onClick={() => setShowClean(!showClean)}
                    className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                       showClean ? 'bg-emerald-500 text-white shadow-xl shadow-emerald-500/40' : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                     {showClean ? "Styled Code" : "Original Mess"}
                  </button>
               </div>

               <div className="p-8 bg-gray-950 rounded-[2.5rem] border border-white/5 relative min-h-[200px] flex items-center justify-center">
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                    <Zap size={100} className="text-emerald-500" />
                  </div>
                  <pre className="font-mono text-sm text-emerald-400 whitespace-pre-wrap leading-relaxed animate-in fade-in zoom-in duration-500">
                    {showClean ? cleanCode : messyCode}
                  </pre>
               </div>
               <div className="mt-8 flex items-center gap-4 text-gray-500 text-xs font-medium italic">
                  <ShieldCheck size={16} className="text-emerald-500" />
                  {showClean ? "Clean code = easy to understand + professional" : "Hover or click to see the transformation!"}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Naming Conventions ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Type} title="2. Naming Conventions" subtitle="Standardizing the language of your code." color="text-emerald-500" />
        <div className="grid md:grid-cols-3 gap-8">
           {[
             { 
               title: "camelCase", 
               type: "Variables & Functions", 
               example: 'userName, calculateTotal()', 
               icon: Edit3, 
               color: "text-emerald-500 bg-emerald-500/10" 
             },
             { 
               title: "UPPER_CASE", 
               type: "Constants", 
               example: 'MAX_LIMIT, API_KEY', 
               icon: Flame, 
               color: "text-rose-500 bg-rose-500/10" 
             },
             { 
               title: "PascalCase", 
               type: "Classes", 
               example: 'UserProfile, DataFetcher', 
               icon: Box, 
               color: "text-sky-500 bg-sky-500/10" 
             }
           ].map((item, i) => (
             <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-4 group hover:-translate-y-2 transition-transform duration-500">
                <div className={`p-4 rounded-2xl w-fit ${item.color}`}>
                   <item.icon size={24} />
                </div>
                <div>
                   <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">{item.type}</span>
                   <h4 className="text-2xl font-black tracking-tight">{item.title}</h4>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-800 font-mono text-[10px] text-gray-400">
                   {item.example}
                </div>
             </div>
           ))}
        </div>
        <div className="mt-12 p-8 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl flex flex-wrap items-center gap-12">
           <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-500 text-white rounded-2xl shadow-lg">
                 <Package size={20} />
              </div>
              <div>
                 <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block font-sans">Files & Folders</span>
                 <span className="font-mono text-sm font-black text-indigo-500">kebab-case (user-profile.js)</span>
              </div>
           </div>
           <div className="h-8 w-[1px] bg-gray-200 dark:bg-gray-700 hidden md:block" />
           <div className="flex items-center gap-4">
              <div className="p-3 bg-emerald-500 text-white rounded-2xl shadow-lg">
                 <ShieldCheck size={20} />
              </div>
              <div>
                 <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block font-sans">Strict Equality</span>
                 <span className="font-mono text-sm font-black text-emerald-500">Always use ===</span>
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 3: The Rules Grid ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
         {/* Spacing & Indentation */}
         <div className="space-y-8">
            <SectionHeader icon={Layout} title="3. Structure & Formatting" subtitle="Visual discipline for your source code." color="text-sky-500" />
            <div className="bg-white dark:bg-gray-800 p-8 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-8">
               <div className="space-y-4">
                  <h5 className="font-black italic flex items-center gap-2 text-sky-500">
                    <Layout size={18} /> Proper Indentation
                  </h5>
                  <p className="text-sm text-gray-500 font-medium">Use a consistent 2 or 4 spaces across the entire project.</p>
                  <CodeBlock title="Good Practice" code={`if (age > 18) {
  console.log("Adult");
}`} />
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 bg-emerald-500/5 rounded-3xl border border-emerald-500/10">
                     <span className="text-emerald-500 font-black text-[10px] uppercase tracking-widest block mb-2 underline">Quotes Style</span>
                     <p className="text-[10px] font-medium text-gray-500 leading-relaxed uppercase tracking-widest">'Single' or "Double" — stay consistent.</p>
                  </div>
                  <div className="p-5 bg-sky-500/5 rounded-3xl border border-sky-500/10">
                     <span className="text-sky-500 font-black text-[10px] uppercase tracking-widest block mb-2 underline">Semicolons</span>
                     <p className="text-[10px] font-medium text-gray-500 leading-relaxed uppercase tracking-widest">Recommended to always use trailing semicolons.</p>
                  </div>
               </div>
            </div>
         </div>

         {/* Variables & Functions */}
         <div className="space-y-8">
            <SectionHeader icon={Code2} title="4. Logic Best Practices" subtitle="Writing modern, safer functions." color="text-indigo-500" />
            <div className="bg-white dark:bg-gray-800 p-8 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-8">
               <div className="space-y-4">
                  <h5 className="font-black italic flex items-center gap-2 text-indigo-500">
                    <ShieldCheck size={18} /> Prefer let and const
                  </h5>
                  <p className="text-sm text-gray-500 font-medium">Avoid <code>var</code> at all costs to prevent scoping bugs.</p>
                  <CodeBlock title="Variable Declaration" code={`const name = "Issac"; // Immutable
let score = 10;       // Re-assignable`} />
               </div>
               <div className="flex gap-4">
                  <div className="flex-1 p-6 bg-indigo-50 dark:bg-indigo-950/20 rounded-3xl border border-indigo-100 dark:border-indigo-950/40">
                     <span className="text-indigo-500 font-black text-[10px] uppercase tracking-widest block mb-3">Arrow Functions</span>
                     <code className="text-[10px] font-mono font-bold text-gray-400">{"const add = (a, b) => a + b;"}</code>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 4: Formatting Details ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div className="bg-white dark:bg-gray-800 p-10 rounded-[4rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-8 h-fit">
           <h4 className="text-2xl font-black text-gray-900 dark:text-white flex items-center gap-4 italic tracking-tight">
             <Layers size={21} className="text-emerald-500" /> Objects & Arrays
           </h4>
           <div className="space-y-6">
              <CodeBlock title="Standard Object" code={`const user = {
  name: "John",
  age: 25,
};`} />
              <CodeBlock title="Standard Array" code={`const numbers = [1, 2, 3, 4];`} />
           </div>
        </div>

        <div className="bg-gray-950 p-10 rounded-[4rem] border border-white/5 relative overflow-hidden group shadow-2xl h-fit">
           <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none group-hover:scale-125 transition-transform duration-1000">
             <AlertTriangle size={200} className="text-rose-500" />
           </div>
           <h4 className="text-2xl font-black text-white italic mb-10 tracking-tight flex items-center gap-4">
              <Settings size={21} className="text-rose-500" /> Error Handling
           </h4>
           <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Always wrap risky operations in <code>try...catch</code> blocks to ensure your application doesn't crash on users.
           </p>
           <CodeBlock title="Safe Execution" code={`try {
  riskyFunction();
} catch (error) {
  console.error(error);
}`} />
        </div>
      </section>

      {/* ── Section 5: The "Wise & Unwise" List ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="grid md:grid-cols-2 gap-8">
           <div className="p-10 bg-emerald-500/10 rounded-[4rem] border border-emerald-500/20 relative group overflow-hidden">
              <CheckCircle size={100} className="absolute -bottom-10 -right-10 text-emerald-500 opacity-10 group-hover:rotate-12 transition-transform duration-700" />
              <h4 className="text-3xl font-black text-emerald-600 mb-8 italic tracking-tight">The "Clean" List ✅</h4>
              <ul className="space-y-4">
                 {[
                   "Descriptive Names (totalPrice vs x)",
                   "Grouped Related Code",
                   "Early Return Pattern",
                   "Consistent File Structure",
                   "Small, Single-Responsibility Functions"
                 ].map((item, i) => (
                   <li key={i} className="flex gap-4 items-center">
                      <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0"><Check size={12} /></div>
                      <span className="text-emerald-700 dark:text-emerald-400 font-medium text-sm">{item}</span>
                   </li>
                 ))}
              </ul>
           </div>

           <div className="p-10 bg-rose-500/10 rounded-[4rem] border border-rose-500/20 relative group overflow-hidden">
              <XCircle size={100} className="absolute -bottom-10 -right-10 text-rose-500 opacity-10 group-hover:-rotate-12 transition-transform duration-700" />
              <h4 className="text-3xl font-black text-rose-600 mb-8 italic tracking-tight">The "Dirty" List ❌</h4>
              <ul className="space-y-4">
                 {[
                   "Global Variable Pollution",
                   "Obvious/Redundant Comments",
                   "Deep If-Else Nesting",
                   "Loose Equality Checking (==)",
                   "Using var for Declarations"
                 ].map((item, i) => (
                   <li key={i} className="flex gap-4 items-center">
                      <div className="w-5 h-5 rounded-full bg-rose-500 flex items-center justify-center text-white shrink-0"><RotateCcw size={12} /></div>
                      <span className="text-rose-700 dark:text-rose-400 font-medium text-sm">{item}</span>
                   </li>
                 ))}
              </ul>
           </div>
        </div>
      </section>

      {/* ── Section 6: Popular Standards ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="bg-white dark:bg-gray-800 p-12 rounded-[4rem] shadow-2xl border border-gray-100 dark:border-gray-700">
           <SectionHeader icon={Globe} title="5. Industry Standards" subtitle="Following the path of the giants." color="text-sky-500" />
           <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                { name: "Airbnb Style Guide", desc: "The gold standard for modern JS.", rating: "Popular ⭐" },
                { name: "Google Style Guide", desc: "Enterprise readiness and high performance.", rating: "Formal" },
                { name: "StandardJS", desc: "Zero configuration, no semicolons required.", rating: "Clean" }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-gray-50 dark:bg-gray-900/50 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 text-center space-y-4">
                   <div className="w-12 h-12 bg-sky-500 text-white rounded-2xl flex items-center justify-center mx-auto shadow-xl"><Globe size={24} /></div>
                   <h5 className="text-xl font-black italic">{item.name}</h5>
                   <p className="text-xs text-gray-500 font-medium leading-relaxed uppercase tracking-tighter">{item.desc}</p>
                   <div className="inline-block px-3 py-1 bg-sky-500/10 text-sky-500 rounded-full text-[10px] font-black">{item.rating}</div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* ── Section 7: Final Recommendations ── */}
      <section className="max-w-5xl mx-auto mb-32">
        <SectionHeader icon={ShieldCheck} title="6. Senior Recommendations" subtitle="Mastering the craftsmanship." color="text-emerald-500" />
        <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-emerald-950 p-10 rounded-[4rem] shadow-2xl border border-white/5 space-y-8 flex flex-col justify-center text-center items-center group">
               <div className="p-6 bg-emerald-500 rounded-[2.5rem] text-white shadow-2xl group-hover:scale-110 transition-transform">
                  <BookOpen size={48} />
               </div>
               <h4 className="text-4xl font-black text-white italic tracking-tighter drop-shadow-lg">Write for Humans, <br /><span className="text-emerald-400">Not Machines</span></h4>
               <p className="text-emerald-200/50 text-sm font-medium leading-relaxed max-w-xs">
                  "Code should be readable like a story. If a human can't understand it, it's not good code."
               </p>
            </div>

            <div className="space-y-6">
                <div className="p-8 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl flex gap-6 items-center">
                   <div className="p-4 bg-sky-500/10 text-sky-500 rounded-2xl">
                      <RefreshCw size={24} />
                   </div>
                   <div>
                      <h5 className="font-black text-lg italic">Use Prettier</h5>
                      <p className="text-xs text-gray-500 font-medium">Automatic formatting for total consistency.</p>
                   </div>
                </div>
                <div className="p-8 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl flex gap-6 items-center">
                   <div className="p-4 bg-indigo-500/10 text-indigo-500 rounded-2xl">
                      <ShieldCheck size={24} />
                   </div>
                   <div>
                      <h5 className="font-black text-lg italic">Use ESLint</h5>
                      <p className="text-xs text-gray-500 font-medium">Catch syntax and logic errors automatically.</p>
                   </div>
                </div>
                <div className="p-8 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl flex gap-6 items-center">
                   <div className="p-4 bg-emerald-500/10 text-emerald-500 rounded-2xl">
                      <CheckCircle size={24} />
                   </div>
                   <div>
                      <h5 className="font-black text-lg italic">Follow One Guide</h5>
                      <p className="text-xs text-gray-500 font-medium">Strictly adhere to a singular guide. Don't mix.</p>
                   </div>
                </div>
            </div>
        </div>

        {/* ── Tips Lab footer ── */}
        <div className="bg-gray-950 p-12 rounded-[4rem] border border-white/5 relative overflow-hidden group shadow-2xl">
           <h4 className="text-2xl font-black text-white mb-10 flex items-center gap-4 italic tracking-tight">
              <Zap size={24} className="text-emerald-500 italic" /> Final Style Hacks
           </h4>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
              {[
                { title: "Descriptive Names", text: "totalPrice vs x", icon: Type },
                { title: "Avoid Deep Nesting", text: "Use Early Returns", icon: RefreshCw },
                { title: "Short Lines", text: "Max 80-100 chars", icon: ShieldCheck }
              ].map((tip, i) => (
                <div key={i} className="space-y-2">
                   <div className="flex gap-3 items-center text-white mb-2 font-black italic tracking-tight">
                      <tip.icon size={16} className="text-emerald-500" /> {tip.title}
                   </div>
                   <div className="p-4 bg-white/5 rounded-2xl border border-white/5 font-mono text-[10px] text-gray-500 italic">
                      {tip.text}
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
         <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto mb-10"></div>
         <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
            Code is Communication.
         </p>
         <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose">
            A style guide isn't just about syntax; it's about making your logic accessible to others.<br />
            Adopt a standard, use the tools, and write code that tells a clear story.
         </p>
      </footer>

    </div>
  );
};

export default JsStyleGuide;