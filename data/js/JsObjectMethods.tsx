import React, { useState } from 'react';
import {
  Check, Copy, Terminal, Settings, Scale, Maximize, Minimize, Infinity as InfinityIcon,
  XOctagon, ShieldAlert, ShieldCheck, DollarSign, ArrowRightLeft, Banknote, AlertTriangle,
  Info, Layers, Code2, Box, Layout, Database, Globe, Activity, Package, RefreshCw, Eye,
  Target, CloudLightning, List, Network, GitBranch, Repeat, FunctionSquare, BoxSelect,
  AlertOctagon, Clock, MoreHorizontal, BookOpen, Lock, Ban, FileWarning, Compass, Link,
  Map as MapIcon, Search, Hash, LogIn, RotateCcw, ToggleLeft, ToggleRight, Cpu, Power,
  ChevronRight, Calculator, Aperture, Lightbulb, PlayCircle, Shuffle, Star, Key, KeyRound,
  ListOrdered, Timer, FolderOpen, FileText, PlusSquare, MinusSquare, Trash2, HelpCircle,
  Bookmark, ShoppingCart, Ghost, Trash, Dices, Percent, Sigma, Bug, Strikethrough, Code,
  CheckCircle, PieChart, Binary, Split, Workflow, Download, Unlock, Unplug, DoorOpen,
  DoorClosed, Shield, EyeOff, FolderTree, Repeat1, ArrowRight, Save, ShieldX,
  LogOut, Wrench, UserCheck, MonitorPlay, Play, Smartphone, FunctionSquare as FuncSquare,
  PencilRuler
} from 'lucide-react';

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
            <span className="ml-2 text-[10px] font-black text-blue-400 uppercase tracking-[0.2em]">{title}</span>
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
      <pre className="p-5 overflow-x-auto text-sm font-mono leading-relaxed text-gray-300 w-full" style={{ wordBreak: 'break-word', whiteSpace: 'pre-wrap' }}>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-blue-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
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

const JsObjectMethods: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#060812] min-h-screen font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 text-[10px] font-black mb-8 border border-blue-100 dark:border-blue-900/50 shadow-xl shadow-blue-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <Play size={14} className="fill-current" /> BEHAVIOR & ACTIONS
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          Object <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-violet-500 drop-shadow-2xl">
            Methods
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          Variables are the data; Methods are the <span className="text-gray-900 dark:text-white font-bold underline decoration-blue-500 underline-offset-4 tracking-tight">Actions</span>. Learn how to transform passive objects into active agents by embedding functions directly inside them.
        </p>
      </header>

      {/* ── Section 1 & 8: Intro & Mental Model ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden h-full">
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors duration-700"></div>
             <div className="flex flex-col gap-6 relative z-10 h-full">
               <div className="p-4 bg-blue-50 dark:bg-blue-500/10 rounded-2xl text-blue-500 w-max border border-blue-100 dark:border-blue-500/20 shadow-lg">
                 <Cpu size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">1. What are Methods?</h3>
                 <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                   Object Methods are simply <strong className="text-blue-500">Functions stored inside Objects</strong>. They allow objects to actually "do" things instead of just holding data.
                 </p>
                 <div className="bg-[#050b14] p-5 rounded-2xl border border-blue-500/20 text-sm flex items-center justify-between shadow-inner">
                    <div className="flex flex-col items-center gap-2 text-gray-400">
                       <Smartphone size={24} className="text-blue-500"/>
                       <span className="font-bold tracking-widest text-[#5c7c9e]">OBJECT</span>
                       <span>Phone</span>
                    </div>
                    <ArrowRight size={20} className="text-blue-500/30" />
                    <div className="flex flex-col items-center gap-2 text-gray-400">
                       <Play size={24} className="text-indigo-500"/>
                       <span className="font-bold tracking-widest text-indigo-400">METHOD</span>
                       <span>Call() / Message()</span>
                    </div>
                 </div>
               </div>
             </div>
           </div>
        </div>

        {/* Section 8 inside Hero grid */}
        <div className="space-y-6 flex flex-col justify-center">
           <div className="bg-[#080c16] p-10 rounded-[3rem] border border-blue-500/20 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
               <div className="absolute right-0 top-0 opacity-10 p-6"><Target size={150} className="text-blue-500"/></div>
               <SectionHeader icon={Star} title="2. Why They Matter" subtitle="Core OOP Mechanics" color="text-blue-400" />
               <ul className="space-y-4 font-medium text-gray-300 relative z-10 w-full mt-4">
                  <li className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl shadow-inner"><Activity size={20} className="text-blue-400 shrink-0"/> Add executable behavior to static lists</li>
                  <li className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl shadow-inner"><Globe size={20} className="text-blue-400 shrink-0"/> The basis of Real-world modeling</li>
                  <li className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl shadow-inner"><Layers size={20} className="text-blue-400 shrink-0"/> The absolute core concept of OOP</li>
                  <li className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl shadow-inner"><Code size={20} className="text-blue-400 shrink-0"/> Every JS application relies on them</li>
               </ul>
           </div>
        </div>
      </section>

      {/* ── Section 8: Visualization Tree ── */}
      <section className="max-w-4xl mx-auto mb-32">
         <div className="bg-[#050812] border border-blue-500/20 p-10 rounded-[4rem] shadow-2xl relative overflow-hidden flex flex-col items-center">
             <div className="absolute right-0 top-0 opacity-5 p-10"><Workflow size={250} className="text-blue-500"/></div>
             <h3 className="font-black text-blue-500 text-3xl tracking-tighter mb-8 flex items-center justify-center gap-3 relative z-10"><Terminal size={32}/> 8. The Anatomy Tree</h3>
             
             <div className="w-full relative z-10 flex flex-col items-center text-center max-w-sm font-mono bg-black/50 border border-gray-800 p-8 rounded-3xl shadow-inner">
                <div className="bg-blue-900/50 text-blue-300 font-black px-6 py-2 rounded-xl mb-6 shadow-[0_0_15px_rgba(59,130,246,0.5)] border border-blue-500/50">Object User</div>
                
                <div className="w-0.5 h-6 bg-gray-700"></div>
                <div className="w-full flex justify-between px-10 relative">
                    <div className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-gray-700"></div>
                    <div className="absolute top-0 left-1/4 w-0.5 h-6 bg-gray-700"></div>
                    <div className="absolute top-0 right-1/4 w-0.5 h-6 bg-gray-700"></div>
                </div>
                
                <div className="flex justify-between w-full mt-6 px-4">
                    <div className="flex flex-col items-center">
                       <span className="text-sky-500 font-bold mb-3 tracking-widest text-[10px]">PROPERTIES</span>
                       <code className="text-gray-400">name, age</code>
                    </div>
                    <div className="flex flex-col items-center">
                       <span className="text-fuchsia-500 font-bold mb-3 tracking-widest text-[10px]">METHODS</span>
                       <code className="text-gray-400">getDetails()</code>
                    </div>
                </div>
             </div>
         </div>
      </section>

      {/* ── Section 3: Creation Syntax ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-white dark:bg-gray-800 p-10 md:p-14 border border-gray-100 dark:border-gray-700 rounded-[4rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-[0.03]"><PencilRuler size={300} className="text-blue-500"/></div>
            
            <SectionHeader icon={Code2} title="3. Creating Methods" subtitle="Old vs Modern Syntax" color="text-blue-500" />
            
            <div className="grid lg:grid-cols-2 gap-8 mt-10 relative z-10">
               
               <div className="bg-gray-50 dark:bg-[#080d11] p-8 rounded-3xl border border-gray-200 dark:border-gray-700 flex flex-col h-full shadow-md">
                   <h4 className="font-black text-gray-500 text-lg mb-4 flex items-center gap-2"><ToggleLeft size={18}/> 3.1 Basic Method</h4>
                   <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-4 flex-1">👉 Manually equating a key to an anonymous function. Older style, slightly more verbose.</p>
                   <CodeBlock language="javascript" code={`const user = {\n  name: "Karthick",\n  greet: function() {\n    return "Hello!";\n  }\n};\n\nconsole.log(user.greet());`} />
               </div>

               <div className="bg-blue-50 dark:bg-[#07101b] p-8 rounded-3xl border border-blue-200 dark:border-blue-900/50 flex flex-col h-full shadow-md">
                   <h4 className="font-black text-blue-600 dark:text-blue-400 text-lg mb-4 flex items-center gap-2"><ToggleRight size={18}/> 3.2 Shorthand (Modern)</h4>
                   <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-4 flex-1">👉 Skips the <code>: function</code> entirely. Cleanest, most recommended syntax in Modern JS.</p>
                   <CodeBlock language="javascript" code={`const user = {\n  name: "Karthick",\n  greet() {\n    return "Hello!";\n  }\n};\n\n// RECOMMENDED ✅`} />
               </div>
               
            </div>
         </div>
      </section>

      {/* ── Section 4 & 5: The "this" Keyword ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8 items-start">
         <div className="bg-[#05060f] border border-blue-500/20 p-10 rounded-[3rem] shadow-xl flex flex-col relative overflow-hidden h-full">
            <div className="absolute right-0 top-0 opacity-10 p-10"><KeyRound size={200} className="text-blue-500"/></div>
            <SectionHeader icon={Key} title="4. The 'this' Keyword" subtitle="Internal Data Access" color="text-blue-400" />
            
            <div className="space-y-6 mt-4 relative z-10 w-full flex-1">
               <p className="text-gray-400 font-medium">To access a property <i>inside</i> the same object from a method, you absolutely must use <code className="text-blue-400 font-bold bg-blue-900/30 px-2 rounded">this</code>. It essentially means "This Current Object".</p>
               <CodeBlock code={`const user = {\n  name: "Karthick",\n  greet() {\n    return "Hello " + this.name;\n  }\n};\n\nconsole.log(user.greet());\n// Hello Karthick`} />
            </div>
         </div>

         <div className="bg-rose-50 dark:bg-[#120508] border border-rose-200 dark:border-rose-900/50 p-10 rounded-[3rem] shadow-xl flex flex-col h-full relative overflow-hidden">
             <div className="absolute right-0 top-0 opacity-5 p-10"><XOctagon size={200} className="text-rose-500"/></div>
             <SectionHeader icon={AlertOctagon} title="5. Arrow Function Warning" subtitle="The Fatal Mistake" color="text-rose-500" />
             
             <div className="space-y-6 mt-4 relative z-10 flex-1 flex flex-col justify-center">
                 <p className="text-gray-700 dark:text-gray-300 font-medium bg-red-500/10 border border-red-500/20 p-4 rounded-xl leading-relaxed">
                     <strong className="text-rose-500 block mb-2">NEVER USE ARROW FUNCTIONS FOR METHODS!</strong>
                     Arrow functions <code>() ={'>'} {'{}'}</code> do <strong>NOT</strong> have their own <code>this</code>. They inherit it globally, causing properties to drop flat to <code>undefined</code>.
                 </p>
                 <CodeBlock code={`const user = {\n  name: "Karthick",\n  // BUG! Arrow function ❌\n  greet: () => {\n    console.log(this.name); // undefined\n  }\n};`} />
             </div>
         </div>
      </section>

      {/* ── Section 6: Native Utilities ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-1 gap-8 items-start">
         <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-10 md:p-14 rounded-[4rem] shadow-xl flex flex-col relative overflow-hidden h-full">
            <div className="absolute right-0 top-0 opacity-[0.03]"><Wrench size={300} className="text-blue-500"/></div>
            <SectionHeader icon={BoxSelect} title="6. Built-in Methods" subtitle="The Global Prototype API" color="text-indigo-500" />
            
            <div className="grid lg:grid-cols-3 gap-6 mt-6 relative z-10 w-full flex-1">
               <div className="bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-gray-800 rounded-3xl p-6">
                  <p className="font-bold text-gray-800 dark:text-gray-300 mb-2 flex flex-col gap-1"><span className="text-sky-500 font-bold uppercase tracking-widest text-[10px]">Returns Keys</span> Object.keys()</p>
               </div>
               <div className="bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-gray-800 rounded-3xl p-6">
                  <p className="font-bold text-gray-800 dark:text-gray-300 mb-2 flex flex-col gap-1"><span className="text-sky-500 font-bold uppercase tracking-widest text-[10px]">Returns Values</span> Object.values()</p>
               </div>
               <div className="bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-gray-800 rounded-3xl p-6">
                  <p className="font-bold text-gray-800 dark:text-gray-300 mb-2 flex flex-col gap-1"><span className="text-sky-500 font-bold uppercase tracking-widest text-[10px]">Returns Pairs</span> Object.entries()</p>
               </div>
               <div className="bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-gray-800 rounded-3xl p-6">
                  <p className="font-bold text-gray-800 dark:text-gray-300 mb-2 flex flex-col gap-1"><span className="text-indigo-500 font-bold uppercase tracking-widest text-[10px]">Copy / Merge Objects</span> Object.assign()</p>
               </div>
               <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/50 rounded-3xl p-6">
                  <p className="font-bold text-blue-700 dark:text-blue-300 mb-2 flex flex-col gap-1"><span className="text-blue-500 font-bold uppercase tracking-widest text-[10px]">Prevent Add/Delete</span> Object.seal(user)</p>
               </div>
               <div className="bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/50 rounded-3xl p-6">
                  <p className="font-bold text-rose-700 dark:text-rose-300 mb-2 flex flex-col gap-1"><span className="text-rose-500 font-bold uppercase tracking-widest text-[10px]">Total Freeze</span> Object.freeze(user)</p>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 7: Real World Mini Project ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-1 gap-8 items-center">
         
         <div className="bg-[#051114] p-10 md:p-14 border border-blue-500/20 rounded-[4rem] shadow-2xl relative overflow-hidden flex flex-col md:flex-row gap-12 items-center">
            
            <div className="absolute top-0 right-0 p-10 opacity-5"><UserCheck size={300} className="text-sky-500"/></div>
            
            <div className="flex-1 w-full relative z-10">
               <SectionHeader icon={Terminal} title="7. Real-World Handling" subtitle="Modeling a User Profile" color="text-sky-400" />
               <p className="text-gray-400 font-medium mb-6">A complete execution showing how properties and methods integrate. The <code className="text-amber-300">updateAge()</code> method actively mutations its own sibling property using <code className="text-blue-300 font-bold">this</code>.</p>
               <CodeBlock language="javascript" code={`const user = {\n  name: "Karthick",\n  age: 22,\n\n  getDetails() {\n    return \`\${this.name} is \${this.age} years old\`;\n  },\n\n  updateAge(newAge) {\n    this.age = newAge;\n  }\n};\n\nuser.updateAge(23);\nconsole.log(user.getDetails());`} />
            </div>

            <div className="w-full md:w-auto flex justify-center relative z-10">
                <div className="bg-black/60 p-8 rounded-3xl border border-sky-500/30 shadow-2xl shadow-sky-900/50 text-left min-w-[200px]">
                   <p className="text-xs font-bold uppercase tracking-widest text-sky-500 mb-4 flex items-center justify-center gap-2 border-b border-sky-900/50 pb-2"><Eye size={14}/> Output Render</p>
                   <p className="font-mono text-white font-bold text-lg mt-4 drop-shadow-md">"Karthick is <span className="text-sky-400">23</span> years old"</p>
                </div>
            </div>
         </div>
         
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          EXECUTION MODELING
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-blue-500/10 decoration-2">
          "Methods transform simple JSON data blobs into active, self-managing OOP entities capable of running internal logic loops and validating their own behavior."
        </p>
      </footer>

    </div>
  );
};

export default JsObjectMethods;