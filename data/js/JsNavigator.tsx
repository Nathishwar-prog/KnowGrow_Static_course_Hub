import React, { useState } from 'react';
import {
  Zap,
  Check,
  Copy,
  Info,
  Layers,
  Terminal,
  ArrowRight,
  Code2,
  Box,
  Layout,
  Database,
  Globe,
  Activity,
  AlertTriangle,
  CheckCircle,
  Package,
  RefreshCw,
  Eye,
  Target,
  CloudLightning,
  ShieldCheck,
  List,
  Network,
  GitBranch,
  Repeat,
  FunctionSquare,
  BoxSelect,
  AlertOctagon,
  Clock,
  MoreHorizontal,
  BookOpen,
  Lock,
  Ban,
  ShieldAlert,
  FileWarning,
  Compass,
  Link,
  Map as MapIcon,
  Search,
  Hash,
  LogIn,
  RotateCcw,
  ToggleLeft,
  ToggleRight,
  Cpu,
  Power,
  ArrowDownToLine,
  ChevronRight,
  Calculator,
  Aperture,
  Lightbulb,
  Settings,
  PlayCircle,
  Shuffle,
  Star,
  Scale,
  Key,
  KeyRound,
  ListOrdered,
  Timer,
  FolderOpen,
  FileText,
  PlusSquare,
  MinusSquare,
  Trash2,
  Maximize,
  HelpCircle,
  Bookmark,
  ShoppingCart,
  Ghost,
  Trash,
  Dices,
  Percent,
  Sigma,
  Bug,
  Strikethrough,
  XOctagon,
  Code,
  Blocks,
  ArrowRightLeft,
  FolderTree,
  FileCode2,
  Wifi,
  WifiOff,
  Smartphone,
  Monitor,
  Fingerprint,
  MapPin
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
            <span className="ml-2 text-[10px] font-black text-cyan-400 uppercase tracking-[0.2em]">{title}</span>
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
      <pre className="p-5 overflow-x-auto text-sm font-mono leading-relaxed text-gray-300 scrollbar-thin scrollbar-thumb-gray-700 w-full">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-cyan-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
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

const JsNavigator: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#060b10] min-h-screen font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-slate-600/10 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-cyan-600 dark:text-cyan-400 text-[10px] font-black mb-8 border border-cyan-100 dark:border-cyan-900/50 shadow-xl shadow-cyan-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <Fingerprint size={14} className="fill-current" /> CLIENT DETECTION
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-500 drop-shadow-2xl">
            Navigator
          </span> Object
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The window's detective. Part of the <span className="text-gray-900 dark:text-white font-bold underline decoration-cyan-500 underline-offset-4 tracking-tight">Browser Object Model (BOM)</span> used to identify the user's browser, operating system, and hardware status.
        </p>
      </header>

      {/* ── Section 1, 2, 6: Intro, Abilities, Flowchart ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden h-full">
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-colors duration-700"></div>
             <div className="flex flex-col gap-6 relative z-10 h-full">
               <div className="p-4 bg-cyan-50 dark:bg-cyan-500/10 rounded-2xl text-cyan-500 w-max border border-cyan-100 dark:border-cyan-500/20 shadow-lg">
                 <Compass size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">1. What is Navigator?</h3>
                 <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                   👉 The <code className="text-cyan-500 font-bold bg-cyan-50 dark:bg-cyan-900/30 px-2 py-0.5 rounded">window.navigator</code> object provides deep hardware and software information about the system executing the code.
                 </p>
                 <div className="bg-sky-50 dark:bg-sky-500/5 p-5 rounded-2xl border border-sky-200 dark:border-sky-500/20 text-sm">
                    <p className="font-bold text-sky-700 dark:text-sky-400 flex items-center gap-2 mb-2">
                       <Lightbulb size={16}/> Think of it as:
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed italic">
                       "A tool to detect where, how, and on what device your website is running"
                    </p>
                 </div>
               </div>
             </div>
           </div>
        </div>

        <div className="space-y-6 flex flex-col justify-center">
           <div className="bg-[#0b1016] p-10 rounded-[3rem] border border-cyan-500/20 shadow-2xl relative overflow-hidden flex-1 flex flex-col justify-center">
               <div className="absolute right-0 top-0 opacity-10 p-6"><Cpu size={150} className="text-cyan-500"/></div>
               <SectionHeader icon={Target} title="2. Capabilities" subtitle="What can it do?" color="text-cyan-400" />
               <ul className="grid sm:grid-cols-2 gap-4 font-medium text-gray-300 relative z-10 mt-4 text-sm">
                  <li className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl shadow-inner"><Monitor size={16} className="text-cyan-400 shrink-0"/> Detect Browser Name/Ver</li>
                  <li className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl shadow-inner"><Cpu size={16} className="text-cyan-400 shrink-0"/> Get OS Details</li>
                  <li className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl shadow-inner"><Fingerprint size={16} className="text-cyan-400 shrink-0"/> Check Cookie Status</li>
                  <li className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl shadow-inner"><Wifi size={16} className="text-cyan-400 shrink-0"/> Online/Offline State</li>
                  <li className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl shadow-inner"><MapPin size={16} className="text-cyan-400 shrink-0"/> Access Geolocation</li>
                  <li className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl shadow-inner"><Smartphone size={16} className="text-cyan-400 shrink-0"/> Detect Device Type (Mobile)</li>
               </ul>
           </div>
           
           {/* Section 6: Diagram */}
           <div className="bg-sky-50 dark:bg-sky-950/20 p-6 rounded-3xl border border-sky-200 dark:border-sky-500/20 shadow-inner flex flex-col items-center">
               <div className="flex items-center justify-between w-full max-w-sm px-4">
                  <div className="flex flex-col items-center gap-2">
                     <Globe size={24} className="text-sky-500"/>
                     <span className="text-xs font-bold text-gray-500">Browser</span>
                  </div>
                  <ArrowRight className="text-gray-300 dark:text-gray-600"/>
                  <div className="flex flex-col items-center gap-2 bg-sky-500 text-white p-3 rounded-xl shadow-lg border-2 border-sky-400">
                     <Compass size={24}/>
                     <span className="text-[10px] font-black uppercase">Navigator</span>
                  </div>
                  <ArrowRight className="text-gray-300 dark:text-gray-600"/>
                  <div className="flex flex-col items-center gap-2">
                     <Cpu size={24} className="text-sky-500"/>
                     <span className="text-xs font-bold text-gray-500">System Info</span>
                  </div>
               </div>
           </div>
        </div>
      </section>

      {/* ── Section 3: Common Navigator Properties ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="flex items-center justify-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight flex items-center justify-center gap-3">
              <Database className="text-cyan-500" size={40} /> Essential Properties
            </h2>
         </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {/* 3.1 userAgent */}
            <div className="bg-[#0b1016] border border-cyan-500/30 p-8 rounded-3xl shadow-lg hover:border-cyan-500/60 transition-colors flex flex-col w-full lg:col-span-2">
               <h4 className="font-black text-cyan-400 text-xl mb-4 flex items-center gap-2"><Globe size={20}/> 3.1 userAgent</h4>
               <p className="text-gray-400 text-sm font-medium mb-6 flex-1">👉 Returns a massive string containing the browser build, underlying OS, and system framework.</p>
               <div className="space-y-4">
                  <CodeBlock code={`console.log(navigator.userAgent);`} />
                  <div className="bg-black/40 border border-cyan-400/20 p-4 rounded-xl">
                      <p className="text-[10px] uppercase font-bold text-gray-500 mb-2">Example Output</p>
                      <code className="text-emerald-300 text-xs block break-all leading-relaxed bg-black/50 p-3 rounded border border-gray-800">Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36</code>
                  </div>
               </div>
            </div>

            {/* 3.2 platform */}
            <div className="bg-[#0b1016] border border-sky-500/30 p-8 rounded-3xl shadow-lg hover:border-sky-500/60 transition-colors flex flex-col w-full">
               <h4 className="font-black text-sky-400 text-xl mb-4 flex items-center gap-2"><Cpu size={20}/> 3.2 platform</h4>
               <p className="text-gray-400 text-sm font-medium mb-6 flex-1">👉 Operating System architecture.</p>
               <div className="space-y-4">
                  <CodeBlock code={`console.log(\n  navigator.platform\n);`} />
                  <div className="bg-black/40 border border-sky-400/20 p-4 rounded-xl flex items-center justify-between">
                      <p className="text-[10px] uppercase font-bold text-gray-500">Output</p>
                      <code className="text-sky-300 text-xs font-bold bg-black p-1 rounded">Win32</code>
                  </div>
               </div>
            </div>

            {/* 3.3 language */}
            <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-8 rounded-3xl shadow-lg flex flex-col w-full">
               <h4 className="font-black text-gray-900 dark:text-white text-xl mb-4 flex items-center gap-2"><Globe size={20}/> 3.3 language</h4>
               <p className="text-gray-500 text-sm font-medium mb-6 flex-1">Browser's preferred interface language.</p>
               <div className="space-y-4">
                  <CodeBlock code={`console.log(navigator.language);`} />
                  <div className="bg-gray-50 dark:bg-black/30 border border-gray-200 dark:border-gray-700 p-4 rounded-xl flex items-center justify-between">
                      <p className="text-[10px] uppercase font-bold text-gray-400">Output</p>
                      <code className="text-indigo-500 dark:text-indigo-400 text-xs font-bold">en-US</code>
                  </div>
               </div>
            </div>

            {/* 3.4 onLine */}
            <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-8 rounded-3xl shadow-lg flex flex-col w-full">
               <h4 className="font-black text-gray-900 dark:text-white text-xl mb-4 flex items-center gap-2"><Wifi size={20}/> 3.4 onLine</h4>
               <p className="text-gray-500 text-sm font-medium mb-6 flex-1">Returns a strictly boolean connection state.</p>
               <div className="space-y-4">
                  <CodeBlock code={`console.log(navigator.onLine);`} />
                  <div className="bg-gray-50 dark:bg-black/30 border border-gray-200 dark:border-gray-700 p-4 rounded-xl flex items-center justify-between">
                      <p className="text-[10px] uppercase font-bold text-gray-400">Output</p>
                      <code className="text-emerald-500 text-xs font-bold">true</code>
                  </div>
               </div>
            </div>

            {/* 3.5 cookieEnabled */}
            <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-8 rounded-3xl shadow-lg flex flex-col w-full">
               <h4 className="font-black text-gray-900 dark:text-white text-xl mb-4 flex items-center gap-2"><Fingerprint size={20}/> 3.5 cookieEnabled</h4>
               <p className="text-gray-500 text-sm font-medium mb-6 flex-1">Checks if the browser is blocking state cookies.</p>
               <div className="space-y-4">
                  <CodeBlock code={`console.log(navigator.cookieEnabled);`} />
                  <div className="bg-gray-50 dark:bg-black/30 border border-gray-200 dark:border-gray-700 p-4 rounded-xl flex items-center justify-between">
                      <p className="text-[10px] uppercase font-bold text-gray-400">Output</p>
                      <code className="text-emerald-500 text-xs font-bold">true</code>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 4: Geolocation API ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-[#0b1016] border border-cyan-500/20 p-10 md:p-14 rounded-[4rem] shadow-2xl relative overflow-hidden flex flex-col lg:flex-row gap-12">
            <div className="absolute right-0 top-0 opacity-10 p-10"><MapPin size={250} className="text-cyan-500"/></div>
            
            <div className="flex-1 relative z-10">
               <SectionHeader icon={MapPin} title="4. Geolocation API" subtitle="(Very Important)" color="text-cyan-400" />
               <p className="text-gray-300 mb-8 font-medium">👉 The built-in spatial sensor used to get the user's latitude and longitude vectors.</p>
               
               <div className="space-y-4">
                  <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-2xl flex items-center gap-4">
                     <AlertTriangle size={24} className="text-amber-500"/>
                     <div className="text-sm font-medium text-amber-200">
                        <strong className="block text-amber-500 mb-1">Strict Requirements:</strong>
                        <ul className="list-disc list-inside space-y-1">
                           <li>Requires explicit browser permission from user.</li>
                           <li>Only functions over encrypted <code className="bg-black/50 px-1 rounded">HTTPS</code> connections.</li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>

            <div className="flex-[1.5] relative z-10 w-full flex flex-col justify-center">
               <CodeBlock language="javascript" code={`navigator.geolocation.getCurrentPosition(\n  position => {\n    console.log("Lat:", position.coords.latitude);\n    console.log("Lon:", position.coords.longitude);\n  },\n  error => {\n    console.log("Error:", error.message);\n  }\n);`} />
            </div>
         </div>
      </section>

      {/* ── Section 5: Real-World Use Cases ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl text-left flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5"><Wifi size={200} className="text-emerald-500"/></div>
            <div className="relative z-10">
               <SectionHeader icon={Wifi} title="5.1 Detect Online Status" subtitle="Real-world monitoring." color="text-emerald-500" />
               <div className="mt-4">
                   <CodeBlock code={`if (navigator.onLine) {\n  console.log("You are online ✅");\n} else {\n  console.log("You are offline ❌");\n}`} />
               </div>
               <p className="text-sm text-gray-500 font-medium bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700 shadow-inner mt-4">
                   Useful for building PWA (Progressive Web Apps) that seamlessly render offline fallbacks when the connection drops.
               </p>
            </div>
         </div>

         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl text-left flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5"><Smartphone size={200} className="text-blue-500"/></div>
            <div className="relative z-10">
               <SectionHeader icon={Smartphone} title="5.2 Detect Mobile Device" subtitle="User-Agent RegEx matching." color="text-blue-500" />
               <div className="mt-4">
                   <CodeBlock code={`if (/Mobi|Android/i.test(navigator.userAgent)) {\n  console.log("Mobile device 📱");\n} else {\n  console.log("Desktop 💻");\n}`} />
               </div>
               <p className="text-sm text-gray-500 font-medium bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700 shadow-inner mt-4">
                   Checks the massive `userAgent` string for specific keywords denoting handheld hardware to load mobile-specific assets.
               </p>
            </div>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          INTELLIGENT DETECTION
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-cyan-500/10 decoration-2">
          "The Navigator object bridges the exact gap between the abstract JavaScript runtime and the physical constraints of the user's hardware. Use it to load intelligently based on connection speeds, device types, and location."
        </p>
      </footer>

    </div>
  );
};

export default JsNavigator;