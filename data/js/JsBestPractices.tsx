import React, { useState, useMemo } from 'react';
import { 
  Zap, 
  CheckCircle, 
  AlertTriangle, 
  Terminal, 
  Code2, 
  Copy, 
  Check, 
  Eye, 
  Layers, 
  Database, 
  Globe, 
  Layout, 
  Package, 
  Activity, 
  ArrowRight,
  Info,
  Cpu,
  RefreshCw,
  Waves,
  Play,
  Pause,
  CloudLightning,
  ShieldCheck,
  ShieldAlert,
  Sparkles,
  Users,
  Target,
  Search,
  BookOpen,
  Scale,
  Bug,
  Construction,
  Fingerprint,
  Monitor,
  Trophy,
  Workflow,
  MousePointer2,
  Lock,
  GitCompare,
  ArrowUpDown
} from 'lucide-react';

// ─── Shared Components ────────────────────────────────────────────────────────

const CodeBlock = ({ code, title, language = 'javascript', variant = 'default' }: { code: string; title?: string; language?: string; variant?: 'default' | 'good' | 'bad' }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const bgStyles = {
    default: 'bg-[#1e1e1e]',
    good: 'bg-[#064e3b] border-[#059669]/30',
    bad: 'bg-[#450a0a] border-[#b91c1c]/30'
  };

  return (
    <div className={`mb-6 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg relative group w-full ${bgStyles[variant]}`}>
      {title && (
        <div className="bg-black/20 px-4 py-3 border-b border-white/5 flex justify-between items-center">
          <div className="flex items-center gap-2">
             {variant === 'good' && <CheckCircle size={12} className="text-emerald-400" />}
             {variant === 'bad' && <AlertTriangle size={12} className="text-rose-400" />}
            <span className="text-[10px] font-black text-gray-300 uppercase tracking-[0.2em]">{title}</span>
          </div>
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-md hover:bg-white/10 text-gray-400 transition-colors"
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

const JsBestPractices: React.FC = () => {
  const [auditorMode, setAuditorMode] = useState<'bad' | 'good'>('good');

  const practices = [
    {
      id: 3,
      title: 'Variable Declarations',
      bad: {
        code: `var x = 10; // outdated ❌\nlet a = "Karthick"; // why let?`,
        title: 'Legacy Var'
      },
      good: {
        code: `const name = "Karthick";\nlet count = 0; // use let only if changing`,
        title: 'Modern Const/Let'
      }
    },
    {
      id: 5,
      title: 'Functions Style',
      bad: {
        code: `function add(a, b) {\n    return a + b;\n}`,
        title: 'Traditional Function'
      },
      good: {
        code: `const add = (a, b) => a + b;\n\n// Default parameters\nfunction greet(name = "Guest") {\n    return "Hello " + name;\n}`,
        title: 'Arrow & Default Params'
      }
    },
    {
       id: 9,
       title: 'DOM Security',
       bad: {
         code: `element.innerHTML = userInput; // ⚠️ XSS Risk`,
         title: 'Vulnerable Injection'
       },
       good: {
         code: `element.textContent = userInput; // ✅ Safe Text`,
         title: 'Protected textContent'
       }
    }
  ];

  return (
    <div className="p-4 sm:p-10 bg-[#f0f9ff] dark:bg-[#0f172a] min-h-screen font-sans selection:bg-sky-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-sky-600 dark:text-sky-400 text-[10px] font-black mb-8 border border-sky-100 dark:border-sky-900/50 shadow-xl shadow-sky-500/5 animate-pulse tracking-[0.2em]">
          <ShieldCheck size={14} className="fill-current" /> SOFTWARE CRAFTSMANSHIP
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          JS Best<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-600 drop-shadow-2xl">
            Practices
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The difference between "it works" and <span className="text-gray-900 dark:text-white font-bold underline decoration-sky-500 underline-offset-4">"it's professional"</span> boils down to the standards you follow.
        </p>
      </header>

      {/* ── Section 1-2: Philosophy ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <SectionHeader icon={Construction} title="1. What & 2. Why?" subtitle="Recommended ways of writing clean, efficient code." color="text-sky-500" />
            <div className="p-8 bg-white dark:bg-gray-800 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-700">
                  <Workflow size={120} className="text-sky-500" />
               </div>
               <h4 className="text-[10px] font-black text-sky-500 uppercase tracking-[0.4em] mb-6">The Best Practice ROI</h4>
               <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Reduces', text: 'Bugs 🐛', color: 'bg-rose-500' },
                    { label: 'Improves', text: 'Readability 👀', color: 'bg-sky-500' },
                    { label: 'Eases', text: 'Teamwork 🤝', color: 'bg-emerald-500' },
                    { label: 'Boosts', text: 'Performance ⚡', color: 'bg-amber-500' }
                  ].map((item, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-700">
                       <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest block mb-1">{item.label}</span>
                       <span className="text-xs font-bold text-gray-700 dark:text-gray-300">{item.text}</span>
                    </div>
                  ))}
               </div>
               <div className="mt-6 flex items-center gap-4 p-4 bg-sky-500/5 rounded-2xl border border-sky-500/10">
                  <Trophy className="text-sky-500" size={20} />
                  <span className="text-xs font-bold text-sky-700 dark:text-sky-400 uppercase tracking-tighter">Helps in Technical Interviews 💼</span>
               </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-[3.5rem] blur-2xl opacity-10 group-hover:opacity-20 transition duration-1000"></div>
            <div className="relative bg-[#0b1120] p-10 rounded-[3.5rem] border border-white/5 shadow-2xl overflow-hidden min-h-[500px]">
               <div className="flex justify-between items-center mb-10">
                  <h3 className="text-white font-black text-xl flex items-center gap-3">
                     <Search className="text-sky-500 animate-pulse" size={24} /> Code Auditor
                  </h3>
                  <div className="flex bg-white/5 p-1 rounded-xl border border-white/10">
                     <button 
                       onClick={() => setAuditorMode('bad')}
                       className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase transition-all ${auditorMode === 'bad' ? 'bg-rose-500 text-white shadow-lg' : 'text-gray-500 hover:text-white'}`}
                     >
                       Legacy
                     </button>
                     <button 
                       onClick={() => setAuditorMode('good')}
                       className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase transition-all ${auditorMode === 'good' ? 'bg-sky-500 text-white shadow-lg' : 'text-gray-500 hover:text-white'}`}
                     >
                       Modern
                     </button>
                  </div>
               </div>

               <div className="space-y-6">
                  {practices.map((p) => (
                    <div key={p.id} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                       <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${auditorMode === 'bad' ? 'bg-rose-500 animate-pulse' : 'bg-sky-500 shadow-[0_0_8px_rgba(14,165,233,0.5)]'}`}></div>
                          {p.title}
                       </h4>
                       <CodeBlock 
                         variant={auditorMode} 
                         title={auditorMode === 'good' ? p.good.title : p.bad.title} 
                         code={auditorMode === 'good' ? p.good.code : p.bad.code} 
                       />
                    </div>
                  ))}
               </div>
               
               <div className="mt-8 flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                  <MousePointer2 className="text-gray-500" size={16} />
                  <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                     Toggle switch to audit code patterns
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Structure & 11: DRY ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
         <div className="bg-white dark:bg-gray-800 p-10 rounded-[3rem] shadow-xl border border-gray-100 dark:border-gray-700 relative group overflow-hidden">
            <SectionHeader icon={Layout} title="4. Structure & Formatting" subtitle="Readability is as important as logic." color="text-amber-500" />
            <div className="space-y-6">
               <div className="flex gap-4">
                  <div className="flex-1 p-4 bg-amber-500/5 rounded-2xl border border-amber-500/10">
                     <span className="text-[10px] font-black text-amber-600 block mb-2 uppercase tracking-tighter">Consistency</span>
                     <p className="text-xs text-gray-500 leading-relaxed">Use consistent spacing and proper indentation.</p>
                  </div>
                  <div className="flex-1 p-4 bg-amber-500/5 rounded-2xl border border-amber-500/10">
                     <span className="text-[10px] font-black text-amber-600 block mb-2 uppercase tracking-tighter">Small Functions</span>
                     <p className="text-xs text-gray-500 leading-relaxed">Break down complex tasks into small, specific units.</p>
                  </div>
               </div>
               <CodeBlock title="Small, Specific Functions" code={`// ✅ Good\nfunction calculateTotal() { }\nfunction displayResult() { }`} />
            </div>
         </div>

         <div className="bg-white dark:bg-gray-800 p-10 rounded-[3rem] shadow-xl border border-gray-100 dark:border-gray-700 relative overflow-hidden group">
            <SectionHeader icon={RefreshCw} title="11. DRY Principle" subtitle="Don't Repeat Yourself." color="text-indigo-500" />
            <div className="space-y-6">
               <p className="text-sm text-gray-500 font-medium leading-relaxed italic">
                 "If you find yourself writing the same logic multiple times, extract it into a reusable function."
               </p>
               <CodeBlock title="Abstraction over Repetition" code={`// ❌ Bad\nlet total1 = a + b;\nlet total2 = c + d;\n\n// ✅ Good\nfunction add(x, y) {\n    return x + y;\n}`} />
               <div className="p-4 bg-indigo-500/5 rounded-2xl border border-indigo-500/10 text-[10px] font-black text-indigo-700 uppercase tracking-widest text-center">
                  Encapsulation Wins
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 6: Data & 12: Naming ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-12">
               <div className="bg-white dark:bg-gray-800 p-10 rounded-[3rem] shadow-xl border border-gray-100 dark:border-gray-700">
                  <SectionHeader icon={Layers} title="6. Data Best Practices" subtitle="Modern techniques for arrays and objects." color="text-emerald-500" />
                  <div className="space-y-6">
                     <ul className="space-y-4">
                        {[
                          { label: 'Map/Filter over Loops', icon: RefreshCw },
                          { label: 'Destructuring Patterns', icon: Target },
                          { label: 'Spread for Immutability', icon: Zap }
                        ].map((li, i) => (
                           <li key={i} className="flex items-center gap-4 group cursor-default">
                              <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                                 <li.icon size={16} />
                              </div>
                              <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{li.label}</span>
                           </li>
                        ))}
                     </ul>
                     <CodeBlock title="Modern Array Transformation" code={`const result = arr.map(x => x * 2);\nconst { name, age } = user; // Destructuring`} />
                  </div>
               </div>
            </div>

            <div className="bg-slate-900 p-10 rounded-[4rem] shadow-2xl relative overflow-hidden flex flex-col justify-center border border-white/5">
               <div className="absolute top-0 right-0 p-8 text-white opacity-5">
                  <Fingerprint size={140} />
               </div>
               <h3 className="text-white font-black text-3xl mb-10 flex items-center gap-4">
                  <Terminal className="text-sky-500" /> 12. Naming Conventions
               </h3>
               <div className="space-y-4">
                  {[
                    { type: 'Variables', style: 'camelCase', example: 'totalMarks', color: 'border-sky-500/20' },
                    { type: 'Functions', style: 'camelCase', example: 'calculateTotal', color: 'border-blue-500/20' },
                    { type: 'Constants', style: 'UPPER_CASE', example: 'MAX_LIMIT', color: 'border-indigo-500/20' },
                    { type: 'Classes', style: 'PascalCase', example: 'UserAccount', color: 'border-purple-500/20' }
                  ].map((row, i) => (
                    <div key={i} className={`flex items-center justify-between p-5 bg-white/5 rounded-3xl border ${row.color} hover:bg-white/10 transition-all`}>
                       <span className="text-xs font-black text-gray-400 uppercase tracking-widest">{row.type}</span>
                       <div className="text-right">
                          <code className="text-white text-sm font-black block">{row.style}</code>
                          <span className="text-[10px] font-mono text-gray-500">e.g. {row.example}</span>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 8: Performance ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="bg-indigo-900/10 p-12 rounded-[4rem] border border-indigo-500/20 relative group overflow-hidden">
           <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 group-hover:rotate-0 transition-transform duration-1000">
              <Zap size={150} className="text-indigo-500" />
           </div>
           <SectionHeader icon={Zap} title="8. Performance Tips ⚡" subtitle="Write code that doesn't just work, but sings." color="text-indigo-500" />
           <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                { title: 'DOM Caching', desc: 'Store document lookups in variables to avoid repetitive expensive queries.', icon: Monitor },
                { title: 'Avoid Loops', icon: RefreshCw, desc: 'Use efficient data structures or built-in iterators over basic for-loops.' },
                { title: 'Debouncing', icon: Workflow, desc: 'Limit the rate at which a function fires (essential for search inputs).' }
              ].map((card, i) => (
                <div key={i} className="p-8 bg-white dark:bg-gray-800 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700 relative z-10">
                   <div className="p-3 bg-indigo-500 text-white rounded-2xl w-fit mb-6 shadow-lg shadow-indigo-500/20">
                      <card.icon size={20} />
                   </div>
                   <h4 className="text-sm font-black mb-4 dark:text-white uppercase tracking-tighter">{card.title}</h4>
                   <p className="text-xs text-gray-500 leading-relaxed font-medium">{card.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* ── Section 7 & 10: Logic ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
         <div className="bg-white dark:bg-gray-800 p-10 rounded-[3rem] shadow-xl border border-gray-100 dark:border-gray-700">
            <SectionHeader icon={CloudLightning} title="7. Async Best Practices" subtitle="Handling time with grace." color="text-blue-500" />
            <CodeBlock title="Async/Await Safety" code={`try {\n    const data = await fetchData();\n} catch (err) {\n    console.log(err);\n}`} />
            <div className="p-4 bg-blue-500/5 rounded-2xl border border-blue-500/10 text-[10px] font-black text-blue-700 dark:text-blue-400 uppercase tracking-widest text-center">
               Handle Every Promise Rejection
            </div>
         </div>

         <div className="bg-white dark:bg-gray-800 p-10 rounded-[3rem] shadow-xl border border-gray-100 dark:border-gray-700">
            <SectionHeader icon={Info} title="10. Error Exhaustion" subtitle="Meaningful messages save hours." color="text-sky-500" />
            <p className="text-gray-500 mb-8 font-medium italic underline decoration-sky-500/30">Never swallow errors silently. Logging the specific context helps debugging.</p>
            <CodeBlock title="Contextual Logging" code={`try {\n    riskyCode();\n} catch (e) {\n    console.error("Critical Failure in Data Layer:", e);\n}`} />
         </div>
      </section>

      {/* ── Section 14: Mistakes ── */}
      <section className="max-w-4xl mx-auto mb-32">
         <SectionHeader icon={Bug} title="14. Common Mistakes" subtitle="Don't walk into these traps." color="text-rose-600" />
         <div className="grid gap-6">
            {[
              { title: 'Implicit Type Coercion', code: 'if (a == b) // ❌ Unsafe', fix: 'Always use === for strict equality.' },
              { title: 'Obvious Comments', code: '// Add 1 to x\nx++; // ❌ Redundant', fix: 'Write comments that explain the "WHY", not the "WHAT".' },
              { title: 'Global Pollution', code: 'let globalVar = 10; // ⚠️ Risky', fix: 'Keep variables scoped to their modules or functions.' }
            ].map((err, i) => (
               <div key={i} className="flex items-start gap-6 p-8 bg-rose-500/5 border border-rose-500/10 rounded-[2.5rem] relative group">
                  <div className="p-3 bg-rose-500 text-white rounded-xl shadow-lg relative z-10 shadow-rose-500/20">
                     <AlertTriangle size={20} />
                  </div>
                  <div className="relative z-10">
                     <h4 className="font-black text-gray-900 dark:text-gray-100 mb-2">{err.title}</h4>
                     <code className="text-rose-500 font-mono text-xs block mb-2">{err.code}</code>
                     <p className="text-xs text-gray-400 font-medium">{err.fix}</p>
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* ── Section 15: Real World ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Globe} title="15. Real-World Standards 🌍" color="text-emerald-500" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
           {[
             { title: 'ES6 Modules', icon: Package, color: 'text-indigo-500' },
             { title: 'ESLint / Linters', icon: Search, color: 'text-sky-500' },
             { title: 'Coding Standards', icon: BookOpen, color: 'text-amber-500' },
             { title: 'Unit Testing', icon: Workflow, color: 'text-rose-500' }
           ].map((item, i) => (
             <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:scale-[1.02] transition-transform overflow-hidden relative text-center">
                <div className={`p-4 rounded-2xl ${item.color} bg-opacity-10 w-fit mx-auto mb-6`}>
                   <item.icon size={24} className={item.color} />
                </div>
                <span className="font-black text-gray-900 dark:text-white text-[10px] block relative z-10 uppercase tracking-[0.2em]">{item.title}</span>
                <div className={`absolute -bottom-4 -right-4 w-12 h-12 ${item.color} opacity-5 rounded-full group-hover:scale-[10] transition-transform duration-1000`}></div>
             </div>
           ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
         <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-sky-500 to-transparent mx-auto mb-10"></div>
         <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
           Quality is a Habit.
         </p>
         <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose max-w-2xl mx-auto italic">
            "Programs must be written for people to read, and only incidentally for machines to execute."<br />
            - Harold Abelson
         </p>
      </footer>

    </div>
  );
};

export default JsBestPractices;