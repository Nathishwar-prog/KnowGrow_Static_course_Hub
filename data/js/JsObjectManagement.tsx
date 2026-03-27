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
  LogOut, Wrench, UserCheck, MonitorPlay
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
            <span className="ml-2 text-[10px] font-black text-orange-400 uppercase tracking-[0.2em]">{title}</span>
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

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-orange-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
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

const JsObjectManagement: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0c0908] min-h-screen font-sans selection:bg-orange-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-orange-600 dark:text-orange-400 text-[10px] font-black mb-8 border border-orange-100 dark:border-orange-900/50 shadow-xl shadow-orange-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <Settings size={14} className="fill-current" /> SYSTEM LIFECYCLE
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          Object <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-500 drop-shadow-2xl">
            Management
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The CRUD of JavaScript variables. Learn to safely <span className="text-gray-900 dark:text-white font-bold underline decoration-orange-500 underline-offset-4 tracking-tight">Create, Update, Copy,</span> and <span className="text-gray-900 dark:text-white font-bold underline decoration-amber-500 underline-offset-4 tracking-tight">Control</span> objects without causing catastrophic data mutations in your apps.
        </p>
      </header>

      {/* ── Section 8: The Lifecycle Visualization ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-[#120a06] border border-orange-500/20 p-10 md:p-14 rounded-[4rem] shadow-2xl relative overflow-hidden flex flex-col items-center">
             <div className="absolute right-0 top-0 opacity-5 p-10"><Workflow size={250} className="text-orange-500"/></div>
             <h3 className="font-black text-orange-500 text-3xl tracking-tighter mb-10 flex items-center justify-center gap-3 relative z-10"><RefreshCw size={32}/> 8. The Complete Lifecycle</h3>
             
             <div className="w-full relative z-10 flex flex-wrap justify-center items-center gap-4">
                 <div className="bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 font-bold px-5 py-3 rounded-full flex items-center gap-2"><PlusSquare size={16}/> Create</div>
                 <ArrowRight size={20} className="text-gray-700" />
                 <div className="bg-sky-950/50 border border-sky-500/30 text-sky-300 font-bold px-5 py-3 rounded-full flex items-center gap-2"><Eye size={16}/> Read</div>
                 <ArrowRight size={20} className="text-gray-700" />
                 <div className="bg-amber-950/50 border border-amber-500/30 text-amber-300 font-bold px-5 py-3 rounded-full flex items-center gap-2"><Save size={16}/> Update</div>
                 <ArrowRight size={20} className="text-gray-700" />
                 <div className="bg-rose-950/50 border border-rose-500/30 text-rose-300 font-bold px-5 py-3 rounded-full flex items-center gap-2"><Trash2 size={16}/> Delete</div>
                 <ArrowRight size={20} className="text-gray-700" />
                 <div className="bg-fuchsia-950/50 border border-fuchsia-500/30 text-fuchsia-300 font-bold px-5 py-3 rounded-full flex items-center gap-2"><Copy size={16}/> Copy</div>
                 <ArrowRight size={20} className="text-gray-700" />
                 <div className="bg-indigo-950/50 border border-indigo-500/30 text-indigo-300 font-bold px-5 py-3 rounded-full flex items-center gap-2"><Lock size={16}/> Control</div>
             </div>
         </div>
      </section>

      {/* ── Section 1 & 2: Intro & Benefits ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden h-full">
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-colors duration-700"></div>
             <div className="flex flex-col gap-6 relative z-10 h-full">
               <div className="p-4 bg-orange-50 dark:bg-orange-500/10 rounded-2xl text-orange-500 w-max border border-orange-100 dark:border-orange-500/20 shadow-lg">
                 <Settings size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">1. What is Management?</h3>
                 <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                   Object Management represents the core foundational mechanics of manipulating JSON data efficiently in code.
                 </p>
                 <div className="bg-[#120a05] p-5 rounded-2xl border border-orange-500/20 text-sm">
                    <p className="font-bold text-orange-500 flex items-center gap-2 mb-2">
                       <Lightbulb size={16}/> The Professional Standard
                    </p>
                    <p className="text-gray-400 font-medium leading-relaxed italic">
                       "Almost everything in a modern React or Node.js application is an Object. Knowing how to duplicate them without destroying the original is the hallmark of a senior developer."
                    </p>
                 </div>
               </div>
             </div>
           </div>
        </div>

        <div className="space-y-6 flex flex-col justify-center">
           <div className="bg-white dark:bg-gray-800 p-10 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative overflow-hidden h-full flex flex-col justify-center">
               <div className="absolute right-0 top-0 opacity-5 p-6"><Target size={150} className="text-gray-900 dark:text-white"/></div>
               <SectionHeader icon={Star} title="2. Why It Matters" subtitle="Preventing application failure" color="text-amber-500" />
               <ul className="space-y-4 font-medium text-gray-700 dark:text-gray-300 relative z-10 w-full mt-4">
                  <li className="flex items-center gap-3"><RefreshCw size={20} className="text-amber-500 shrink-0"/> Handle API data properly without mutative overrides</li>
                  <li className="flex items-center gap-3"><MonitorPlay size={20} className="text-amber-500 shrink-0"/> Manage application states correctly (React Redux/Context)</li>
                  <li className="flex items-center gap-3"><Cpu size={20} className="text-amber-500 shrink-0"/> Improve memory mapping performance</li>
                  <li className="flex items-center gap-3"><ShieldAlert size={20} className="text-amber-500 shrink-0"/> Completely avoid "ghost" bugs caused by strict-reference matching</li>
               </ul>
           </div>
        </div>
      </section>

      {/* ── Section 3: Core CRUD Operations ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-[#100705] p-10 md:p-14 border border-orange-500/20 rounded-[4rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-[0.03]"><Settings size={300} className="text-orange-500"/></div>
            
            <SectionHeader icon={Database} title="3. The CRUD Operations" subtitle="Create, Update, Add, Delete" color="text-orange-500" />
            
            <div className="grid lg:grid-cols-4 gap-6 mt-10 relative z-10">
               
               {/* 3.1 Create */}
               <div className="bg-black/40 border border-gray-800 p-6 rounded-3xl shadow-inner flex flex-col">
                   <h4 className="font-black text-emerald-500 text-lg mb-4 flex items-center gap-2 border-b border-gray-800 pb-2"><PlusSquare size={16}/> 3.1 Create</h4>
                   <CodeBlock code={`const user = {\n  name: "Karthick",\n  age: 22\n};`} />
               </div>

               {/* 3.2 Add Properties */}
               <div className="bg-black/40 border border-gray-800 p-6 rounded-3xl shadow-inner flex flex-col">
                   <h4 className="font-black text-sky-500 text-lg mb-4 flex items-center gap-2 border-b border-gray-800 pb-2"><LogOut size={16} className="rotate-180"/> 3.2 Add</h4>
                   <CodeBlock code={`// Dot syntax\nuser.city = "Chennai";\n\n// Bracket syntax\nuser["role"] = "Dev";`} />
               </div>

               {/* 3.3 Update */}
               <div className="bg-black/40 border border-gray-800 p-6 rounded-3xl shadow-inner flex flex-col">
                   <h4 className="font-black text-amber-500 text-lg mb-4 flex items-center gap-2 border-b border-gray-800 pb-2"><Save size={16}/> 3.3 Update</h4>
                   <CodeBlock code={`// Overwrites existing\nuser.age = 23;`} />
               </div>

               {/* 3.4 Delete */}
               <div className="bg-black/40 border border-gray-800 p-6 rounded-3xl shadow-inner flex flex-col">
                   <h4 className="font-black text-rose-500 text-lg mb-4 flex items-center gap-2 border-b border-gray-800 pb-2"><Trash2 size={16}/> 3.4 Delete</h4>
                   <CodeBlock code={`// Erases property entirely\ndelete user.role;`} />
               </div>

            </div>
         </div>
      </section>

      {/* ── Section 4 & 5: Copy Problems & Solutions ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-white dark:bg-gray-800 p-10 md:p-14 border border-rose-500/20 rounded-[4rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5"><ShieldX size={300} className="text-rose-500"/></div>
            
            <SectionHeader icon={AlertOctagon} title="4. The Copy Problem" subtitle="Reference Mutation" color="text-rose-500" />
            
            <div className="grid lg:grid-cols-3 gap-8 mt-10 relative z-10 w-full">
                
                {/* The Trap */}
                <div className="bg-rose-50 dark:bg-[#160608] border border-rose-200 dark:border-rose-900/50 p-6 rounded-3xl shadow-inner col-span-1 lg:col-span-3">
                   <h4 className="font-black text-rose-600 dark:text-rose-400 text-xl mb-4 flex items-center gap-2"><XOctagon size={20}/> The Shallow Copy Trap</h4>
                   <p className="text-gray-700 dark:text-gray-300 font-medium mb-4">You <strong className="text-rose-500">CANNOT</strong> just use <code>const obj2 = obj1</code>. In JS, objects are mapped by memory reference. Changing <code>obj2</code> will permanently overwrite <code>obj1</code>'s data.</p>
                   <CodeBlock code={`const obj1 = { name: "JS" };\nconst obj2 = obj1; // Maps to exact same memory slot!\n\nobj2.name = "React";\n\nconsole.log(obj1.name); // React 😱 (Original is destroyed)`} />
                </div>

                {/* Fix 1 */}
                <div className="bg-emerald-50 dark:bg-[#071109] border border-emerald-200 dark:border-emerald-900/50 p-6 rounded-3xl shadow-inner lg:col-span-1">
                   <h4 className="font-black text-emerald-600 dark:text-emerald-400 text-lg mb-4 flex items-center gap-2"><CheckCircle size={18}/> Spread Syntax</h4>
                   <p className="text-gray-700 dark:text-gray-400 text-sm mb-4 h-10">Unpacks a brand new object clone matching 1 layer deep.</p>
                   <CodeBlock code={`const obj2 = { ...obj1 };`} />
                </div>

                {/* Fix 2 */}
                <div className="bg-emerald-50 dark:bg-[#071109] border border-emerald-200 dark:border-emerald-900/50 p-6 rounded-3xl shadow-inner lg:col-span-1">
                   <h4 className="font-black text-emerald-600 dark:text-emerald-400 text-lg mb-4 flex items-center gap-2"><CheckCircle size={18}/> Object.assign</h4>
                   <p className="text-gray-700 dark:text-gray-400 text-sm mb-4 h-10">Older but identical to spread; copies properties into a new <code>{`{}`}</code>.</p>
                   <CodeBlock code={`const obj2 = Object.assign({}, obj1);`} />
                 </div>

                {/* 5. Deep Copy */}
                <div className="bg-[#120511] border border-fuchsia-500/30 p-6 rounded-3xl shadow-inner lg:col-span-1">
                   <h4 className="font-black text-fuchsia-500 text-lg mb-4 flex items-center gap-2"><Layers size={18}/> 5. Deep Copy</h4>
                   <p className="text-gray-400 text-sm mb-4 h-10">Absolute full-depth clone. Disconnects completely from origin.</p>
                   <CodeBlock title="Advanced" code={`// Stringifies it flat, then converts back\nconst deepCopy = JSON.parse(\n  JSON.stringify(obj)\n);`} />
                 </div>
            </div>

         </div>
      </section>

      {/* ── Section 6: Utilities ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-1 gap-8 items-start">
         <div className="bg-[#050f14] border border-sky-500/20 p-10 md:p-14 rounded-[4rem] shadow-xl flex flex-col relative overflow-hidden h-full">
            <div className="absolute right-0 top-0 opacity-10 p-10"><Wrench size={200} className="text-sky-500"/></div>
            <SectionHeader icon={BoxSelect} title="6. Utilities & Control" subtitle="Native Object Mechanics" color="text-sky-400" />
            
            <div className="grid lg:grid-cols-3 gap-6 mt-6 relative z-10 w-full flex-1">
               <div className="bg-black/50 border border-gray-800 rounded-3xl p-6">
                  <p className="font-bold text-gray-300 mb-2 flex flex-col gap-1"><span className="text-sky-500 font-bold uppercase tracking-widest text-[10px]">Returns Keys Array</span> Object.keys()</p>
                  <code className="text-gray-500">Object.keys(user);</code>
               </div>
               <div className="bg-black/50 border border-gray-800 rounded-3xl p-6">
                  <p className="font-bold text-gray-300 mb-2 flex flex-col gap-1"><span className="text-sky-500 font-bold uppercase tracking-widest text-[10px]">Returns Values Array</span> Object.values()</p>
                  <code className="text-gray-500">Object.values(user);</code>
               </div>
               <div className="bg-black/50 border border-gray-800 rounded-3xl p-6">
                  <p className="font-bold text-gray-300 mb-2 flex flex-col gap-1"><span className="text-sky-500 font-bold uppercase tracking-widest text-[10px]">Returns 2D Map</span> Object.entries()</p>
                  <code className="text-gray-500">Object.entries(user);</code>
               </div>
               <div className="bg-blue-950/30 border border-blue-500/30 rounded-3xl p-6 lg:col-span-1">
                  <p className="font-bold text-blue-300 mb-2 flex flex-col gap-1"><span className="text-amber-500 font-bold uppercase tracking-widest text-[10px] flex items-center gap-1"><Lock size={12}/> Allows edits, No Adds</span> Object.seal()</p>
                  <code className="text-gray-400">Object.seal(user);</code>
               </div>
               <div className="bg-rose-950/30 border border-rose-500/30 rounded-3xl p-6 lg:col-span-2">
                  <p className="font-bold text-rose-300 mb-2 flex flex-col gap-1"><span className="text-rose-500 font-bold uppercase tracking-widest text-[10px] flex items-center gap-1"><Ban size={12}/> Total Locked Lockdown</span> Object.freeze()</p>
                  <code className="text-gray-400 mb-2 block">Object.freeze(user);</code>
                  <p className="text-xs text-rose-200/50">Absolutely protects the object. It cannot be updated, added to, or deleted from.</p>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 7: Real World Mini Project ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-1 gap-8 items-center">
         
         <div className="bg-white dark:bg-gray-800 p-10 md:p-14 border border-gray-100 dark:border-gray-700 rounded-[4rem] shadow-2xl relative overflow-hidden flex flex-col md:flex-row gap-12 items-center">
            
            <div className="absolute top-0 right-0 p-10 opacity-5"><UserCheck size={300} className="text-gray-900 dark:text-white"/></div>
            
            <div className="flex-1 w-full relative z-10">
               <SectionHeader icon={Terminal} title="7. User System Block" subtitle="Real-world script execution" color="text-gray-900 dark:text-white" />
               <p className="text-gray-500 dark:text-gray-400 font-medium mb-6">A complete execution combining all four primary structural mutations (<code>Create</code>, <code>Add</code>, <code>Update</code>, <code>Delete</code>) applied sequentially onto a single simulated backend database node.</p>
               <CodeBlock language="javascript" code={`const user = {\n  name: "Karthick",\n  age: 22\n};\n\n// Add\nuser.city = "Chennai";\n\n// Update\nuser.age = 23;\n\n// Delete\ndelete user.city;\n\nconsole.log(user);`} />
            </div>

            <div className="w-full md:w-auto flex justify-center relative z-10">
                <div className="bg-gray-50 dark:bg-black/80 p-8 rounded-3xl border border-gray-200 dark:border-gray-600 shadow-2xl shadow-black/20 text-left min-w-[200px]">
                   <p className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-4 flex items-center justify-center gap-2 border-b border-gray-200 dark:border-gray-800 pb-2"><Terminal size={14}/> Console Print</p>
                   <pre className="font-mono text-gray-800 dark:text-gray-300 font-bold text-sm leading-loose">
{`{
  name: 'Karthick', 
  age: 23
}`}
                   </pre>
                </div>
            </div>
         </div>
         
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          DATA CONTROL
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-orange-500/10 decoration-2">
          "Handling API state responses in React relies natively on these copy schemas. Using reference spreads inside setState ensures flawless UI component re-renders without unprompted data mutations."
        </p>
      </footer>

    </div>
  );
};

export default JsObjectManagement;