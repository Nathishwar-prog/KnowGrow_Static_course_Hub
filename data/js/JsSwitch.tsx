import React, { useState } from 'react';
import { 
  Split, 
  CheckCircle, 
  AlertTriangle, 
  ShieldCheck, 
  Terminal, 
  Layout, 
  List, 
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
  RefreshCw,
  Hash,
  Activity,
  User,
  LogOut,
  LogIn,
  UserPlus,
  Power
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

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-indigo-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
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

const JsSwitch: React.FC = () => {
  const [choice, setChoice] = useState('login');
  
  const getChoiceDesc = (val: string) => {
    switch(val) {
      case 'login': return 'Executes: console.log("User Login")';
      case 'signup': return 'Executes: console.log("User Signup")';
      case 'logout': return 'Executes: console.log("User Logout")';
      default: return 'Executes fallback default block';
    }
  };

  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0f172a] min-h-screen font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[140px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 text-[10px] font-black mb-8 border border-indigo-100 dark:border-indigo-900/50 shadow-xl shadow-indigo-500/5 animate-pulse tracking-[0.2em]">
          <Split size={14} className="fill-current" /> CONDITIONAL LOGIC CORE
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          JS <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-500 to-sky-600 drop-shadow-2xl">
            Switch
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The professional choice for <span className="text-gray-900 dark:text-white font-bold italic underline decoration-indigo-500/30">multi-way</span> branching. An elegant alternative to messy if...else chains.
        </p>
      </header>

      {/* ── Section 1: What is Switch? ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <SectionHeader icon={Info} title="1. What is Switch?" subtitle="A cleaner way to handle multiple fixed values." color="text-indigo-500" />
            <div className="p-8 bg-white dark:bg-gray-800 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl">
              <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                The switch statement evaluates an expression and matching the expression's value against <code>case</code> clauses.
              </p>
              <div className="p-6 bg-indigo-500/5 border border-indigo-500/10 rounded-3xl">
                <p className="text-indigo-600 dark:text-indigo-400 text-sm font-black flex items-center gap-2 italic">
                   <Zap size={18} /> It is an efficient alternative to multiple if...else blocks when comparing the same value.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative group">
             <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-blue-600 rounded-[3rem] blur opacity-20 transition duration-1000"></div>
             <div className="relative bg-white dark:bg-gray-800 p-8 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-2xl">
                <div className="flex justify-between items-center mb-8">
                   <h3 className="text-2xl font-black text-gray-900 dark:text-white flex items-center gap-3">
                      <Layout size={24} className="text-indigo-500" /> Syntax Guide
                   </h3>
                   <div className="px-3 py-1 bg-indigo-500/10 text-indigo-500 rounded-full text-[10px] font-black uppercase tracking-widest">
                      Structure
                   </div>
                </div>
                <CodeBlock code={`switch(expression) {
  case value1:
    // code block 1
    break;
  case value2:
    // code block 2
    break;
  default:
    // fallback code
}`} />
             </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Case Matching Simulator ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="bg-white dark:bg-gray-800 p-12 rounded-[4rem] shadow-2xl border border-gray-100 dark:border-gray-700 relative overflow-hidden">
          <SectionHeader icon={Activity} title="2. The Switch Simulator" subtitle="Interact with different options to see case matching." color="text-indigo-500" />
          
          <div className="grid lg:grid-cols-2 gap-12 mt-12 items-center">
             <div className="space-y-8">
                <p className="text-gray-500 font-medium leading-relaxed">
                   Select a menu option to see how the switch statement jumps to the matching case and stops at the <code>break</code>.
                </p>
                <div className="p-10 bg-gray-50 dark:bg-gray-900/50 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 space-y-8">
                   <div className="space-y-4">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">Choose Action</label>
                      <div className="grid grid-cols-2 gap-3">
                         {[
                           { id: 'login', icon: LogIn, label: 'Login' },
                           { id: 'signup', icon: UserPlus, label: 'Signup' },
                           { id: 'logout', icon: LogOut, label: 'Logout' },
                           { id: 'settings', icon: Settings, label: 'Unknown' }
                         ].map((item) => (
                           <button 
                            key={item.id}
                            onClick={() => setChoice(item.id)}
                            className={`p-4 rounded-xl flex items-center gap-3 text-xs font-black uppercase tracking-widest transition-all ${
                              choice === item.id 
                                ? 'bg-indigo-500 text-white shadow-xl shadow-indigo-500/40 scale-105' 
                                : 'bg-white dark:bg-gray-700 text-gray-500 hover:bg-gray-100'
                            }`}
                           >
                              <item.icon size={16} /> {item.label}
                           </button>
                         ))}
                      </div>
                   </div>
                   <div className="p-6 bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700">
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">Execution Status</span>
                      <p className="text-lg font-black text-indigo-500 italic underline decoration-indigo-500/20">{getChoiceDesc(choice)}</p>
                   </div>
                </div>
             </div>

             <div className="bg-gray-950 p-12 rounded-[3.5rem] border border-white/5 relative group overflow-hidden">
                <div className="relative z-10 space-y-6 font-mono text-sm leading-relaxed">
                   <div className="text-white/30 text-xs italic tracking-widest mb-4">// Logic Trace</div>
                   <div className={`transition-all duration-500 ${choice === 'login' ? 'text-white' : 'text-white/20'}`}>
                      case <span className="text-sky-400">"login"</span>: <br />
                      &nbsp;&nbsp;console.log(<span className="text-emerald-400">"Login"</span>); <br />
                      &nbsp;&nbsp;<span className="text-rose-400">break;</span>
                      {choice === 'login' && <div className="inline-block ml-4 text-[10px] bg-emerald-500 text-white px-2 py-0.5 rounded font-black uppercase tracking-widest animate-pulse">Matched</div>}
                   </div>
                   <div className={`transition-all duration-500 ${choice === 'signup' ? 'text-white' : 'text-white/20'}`}>
                      case <span className="text-sky-400">"signup"</span>: <br />
                      &nbsp;&nbsp;console.log(<span className="text-emerald-400">"Signup"</span>); <br />
                      &nbsp;&nbsp;<span className="text-rose-400">break;</span>
                      {choice === 'signup' && <div className="inline-block ml-4 text-[10px] bg-emerald-500 text-white px-2 py-0.5 rounded font-black uppercase tracking-widest animate-pulse">Matched</div>}
                   </div>
                   <div className={`transition-all duration-500 ${choice === 'logout' ? 'text-white' : 'text-white/20'}`}>
                      case <span className="text-sky-400">"logout"</span>: <br />
                      &nbsp;&nbsp;console.log(<span className="text-emerald-400">"Logout"</span>); <br />
                      &nbsp;&nbsp;<span className="text-rose-400">break;</span>
                      {choice === 'logout' && <div className="inline-block ml-4 text-[10px] bg-emerald-500 text-white px-2 py-0.5 rounded font-black uppercase tracking-widest animate-pulse">Matched</div>}
                   </div>
                   <div className={`transition-all duration-500 ${!['login','signup','logout'].includes(choice) ? 'text-white' : 'text-white/20'}`}>
                      default: <br />
                      &nbsp;&nbsp;console.log(<span className="text-emerald-400">"Invalid choice"</span>);
                      {!['login','signup','logout'].includes(choice) && <div className="inline-block ml-4 text-[10px] bg-sky-500 text-white px-2 py-0.5 rounded font-black uppercase tracking-widest animate-pulse">Fallback</div>}
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Fall-Through Behavior ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="bg-rose-500/5 dark:bg-rose-500/5 p-12 rounded-[4rem] border border-rose-500/10 shadow-xl relative overflow-hidden group">
          <SectionHeader icon={AlertTriangle} title="3. The Fall-Through Behavior ⚠️" subtitle="Why the 'break' statement is non-negotiable." color="text-rose-500" />
          
          <div className="grid lg:grid-cols-2 gap-12 mt-12 items-center">
             <div className="space-y-8">
                <p className="text-gray-500 font-medium leading-relaxed">
                   When you omit a <code>break</code>, JavaScript will continue executing the code in subsequent cases, even if their conditions don't match!
                </p>
                <div className="p-8 bg-white dark:bg-gray-800 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-6">
                   <h5 className="font-black text-rose-500 text-lg italic">Danger Output:</h5>
                   <div className="font-mono text-sm space-y-2">
                      <div className="flex gap-4 p-3 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-100 dark:border-rose-900/30 text-rose-600">
                         <span>1.</span> <strong>"One"</strong>
                      </div>
                      <div className="flex gap-4 p-3 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-100 dark:border-rose-900/30 text-rose-600">
                         <span>2.</span> <strong>"Two"</strong>
                      </div>
                   </div>
                </div>
             </div>
             
             <div className="relative">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none group-hover:rotate-12 transition-transform duration-700">
                  <RotateCcw size={200} className="text-rose-500" />
                </div>
                <CodeBlock title="Fall-through Example" code={`let value = 1;

switch(value) {
  case 1:
    console.log("One");
    // NO BREAK HERE!
  case 2:
    console.log("Two");
}`} />
             </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Best Practices & Scenarios ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div>
           <SectionHeader icon={ShieldCheck} title="4. Strict Comparison 🔥" subtitle="Switch uses === behind the scenes." color="text-emerald-500" />
           <div className="bg-white dark:bg-gray-800 p-10 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-8">
              <p className="text-gray-500 font-medium">Unlike loose equality (==), switch requires types to match exactly. A string "5" will NOT match a number 5.</p>
              <CodeBlock code={`switch("5") {
  case 5:
    console.log("Match"); // Wont run
    break;
  default:
    console.log("No match"); // This runs!
}`} />
           </div>
        </div>

        <div>
           <SectionHeader icon={List} title="5. Grouping Cases" subtitle="Cleaning up related conditions." color="text-sky-500" />
           <div className="bg-white dark:bg-gray-800 p-10 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-8">
              <p className="text-gray-500 font-medium">You can group multiple cases to execute the same block of code. This is very useful for categories.</p>
              <CodeBlock code={`let fruit = "apple";

switch(fruit) {
  case "apple":
  case "mango":
  case "banana":
    console.log("Fruit available");
    break;
  default:
    console.log("Not available");
}`} />
           </div>
        </div>
      </section>

      {/* ── Section 5: Advanced Logic ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="bg-gradient-to-br from-indigo-950 to-black p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group">
          <SectionHeader icon={Cpu} title="6. Advanced Logic Strategies" subtitle="Levels, Roles, and modern alternatives." color="text-indigo-400" />
          
          <div className="grid lg:grid-cols-2 gap-12 mt-12 items-center relative z-10">
             <div className="space-y-8">
                <div className="p-8 bg-white/5 rounded-[3rem] border border-white/5 space-y-4">
                   <h4 className="text-white font-black text-xl italic tracking-tight">Level Categorization</h4>
                   <p className="text-gray-400 text-sm italic">"Intentionally omitting breaks between grouped levels."</p>
                   <div className="p-4 bg-indigo-500/10 rounded-2xl border border-indigo-500/20 flex gap-4">
                      <div className="shrink-0 w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center text-white text-[10px] font-black italic">LV. 1-3</div>
                      <div className="text-white text-xs font-medium">Categorized as <span className="text-indigo-400 font-black tracking-widest italic uppercase underline decoration-indigo-400/20">Beginner Level</span></div>
                   </div>
                </div>

                <div className="p-8 bg-white/5 rounded-[3rem] border border-white/5 space-y-4 relative group overflow-hidden">
                   <div className="flex justify-between items-center mb-4">
                      <h4 className="text-white font-black text-xl italic tracking-tight">Object Mapping 💎</h4>
                      <Zap size={20} className="text-amber-500 animate-bounce" />
                   </div>
                   <p className="text-gray-400 text-sm leading-relaxed">
                      Instead of a 50-line <code>switch</code>, modern developers often use an object to map keys to functions.
                   </p>
                   <div className="p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-3xl">
                      <span className="text-emerald-400 text-[10px] font-black uppercase tracking-widest block mb-1 underline pb-2">Professional Strategy</span>
                      <code className="text-emerald-300 font-mono text-sm tracking-tighter italic whitespace-pre-wrap">
                        actions[choice] || actions["default"];
                      </code>
                   </div>
                </div>
             </div>
             
             <div className="space-y-6">
                <CodeBlock title="Level Logic" code={`let level = 2;

switch(level) {
  case 1:
  case 2:
  case 3:
    console.log("Beginner");
    break;

  case 4:
  case 5:
    console.log("Advanced");
    break;
}`} />
                <CodeBlock title="Object Mapping Pattern" code={`const actions = {
  login: () => console.log("Login"),
  signup: () => console.log("Signup")
};

// Execution
(actions[choice] || actions.default)();`} />
             </div>
          </div>
        </div>
      </section>

      {/* ── Section 6: Recommendations ── */}
      <section className="max-w-5xl mx-auto mb-32">
        <SectionHeader icon={ShieldCheck} title="7. Recommendations & Logic Rules" subtitle="When to switch and when to stay." color="text-indigo-500" />
        <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800 p-10 rounded-[3rem] shadow-xl border border-gray-100 dark:border-gray-700 space-y-10">
                <div className="space-y-4">
                   <h4 className="text-2xl font-black text-emerald-500 italic underline decoration-emerald-500/10 flex items-center gap-3">
                      <PlusCircle size={24} /> Use Switch When
                   </h4>
                   <div className="space-y-4 ml-8">
                      {["Many fixed values", "Menu selection systems", "Finite state handling"].map((rule, i) => (
                        <div key={i} className="flex gap-4 items-center">
                           <div className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0"><Check size={14} /></div>
                           <span className="text-gray-500 font-medium text-sm">{rule}</span>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="space-y-4">
                   <h4 className="text-2xl font-black text-rose-500 italic underline decoration-rose-500/10 flex items-center gap-3">
                      <MinusCircle size={24} /> Avoid Switch When
                   </h4>
                   <div className="space-y-4 ml-8">
                      {["Complex boolean conditions", "Checking ranges (0 to 100)", "Highly dynamic comparisons"].map((rule, i) => (
                        <div key={i} className="flex gap-4 items-center">
                           <div className="w-6 h-6 rounded-full bg-rose-500/10 text-rose-500 flex items-center justify-center shrink-0"><RotateCcw size={14} /></div>
                           <span className="text-gray-500 font-medium text-sm">{rule}</span>
                        </div>
                      ))}
                   </div>
                </div>
            </div>

            <div className="bg-gray-950 p-10 rounded-[3rem] border border-white/5 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none group-hover:scale-125 transition-transform duration-1000">
                  <Terminal size={200} className="text-indigo-500" />
               </div>
               <h4 className="text-2xl font-black text-white italic mb-10 tracking-tight">⚡ Tips & Master Hacks</h4>
               <div className="space-y-8 relative z-10">
                  {[
                    { label: "Always Use Break", desc: "Prevent unwanted logic continuation.", icon: Power },
                    { label: "Meaningful Cases", desc: "Use strings like 'ADMIN' instead of numbers.", icon: User },
                    { label: "Clean Formatting", desc: "Keep each case block visually distinct.", icon: Layout },
                    { label: "Modern Mapping", desc: "Replace large switches with Object Lookups.", icon: Zap }
                  ].map((tip, i) => (
                    <div key={i} className="flex gap-4 items-start group/tip">
                       <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-indigo-400 group-hover/tip:bg-indigo-500 group-hover/tip:text-white transition-all">
                          <tip.icon size={18} />
                       </div>
                       <div>
                          <span className="text-white font-black text-sm block italic">{tip.label}</span>
                          <span className="text-gray-500 text-[10px] font-medium leading-relaxed">{tip.desc}</span>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
         <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto mb-10"></div>
         <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
           Logical Branching.
         </p>
         <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose">
           Mastering the switch statement provides you with the precision to handle multi-way decisions elegantly.<br />
           Choose the right tool for your logic, and always keep your branches clean and readable.
         </p>
      </footer>

    </div>
  );
};

export default JsSwitch;