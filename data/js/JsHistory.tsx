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
  History,
  Rocket,
  Server,
  Star,
  Users,
  Compass,
  Cpu,
  MonitorPlay,
  Puzzle,
  Lightbulb,
  Award
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

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-yellow-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
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

const JsHistory: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0f0e0a] min-h-screen font-sans selection:bg-yellow-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-yellow-600 dark:text-yellow-400 text-[10px] font-black mb-8 border border-yellow-100 dark:border-yellow-900/50 shadow-xl shadow-yellow-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <History size={14} className="fill-current" /> EVOLUTION OF JS
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          JavaScript <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 drop-shadow-2xl">
            History
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          How the language evolved from a <span className="text-gray-900 dark:text-white font-bold underline decoration-yellow-500 underline-offset-4 tracking-tight">simple scripting tool</span> into one of the most powerful programming languages in the world.
        </p>
      </header>

      {/* ── Section 1 & 2: What is it & The Birth ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden h-full">
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl group-hover:bg-yellow-500/20 transition-colors duration-700"></div>
             <div className="flex flex-col gap-6 relative z-10 h-full">
               <div className="p-4 bg-yellow-50 dark:bg-yellow-500/10 rounded-2xl text-yellow-500 w-max border border-yellow-100 dark:border-yellow-500/20 shadow-lg">
                 <History size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">1. What is JavaScript History?</h3>
                 <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                   JavaScript history explains the remarkable journey of the web's native language. Born in the early days of the internet, it survived browser wars, dark ages, and multiple revolutions to dominate both the frontend and backend of modern development.
                 </p>
               </div>
             </div>
           </div>
        </div>

        <div className="space-y-4 flex flex-col justify-center">
           <SectionHeader icon={Lightbulb} title="2. The Birth of JavaScript (1995)" subtitle="A rushed project that changed the world." color="text-amber-500" />
           
           <div className="grid gap-4">
               <div className="bg-[#0b1120] p-6 rounded-2xl border border-white/5 flex items-start gap-4 shadow-lg group relative overflow-hidden">
                  <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-yellow-500/10 to-transparent"></div>
                  <div className="bg-yellow-500/20 p-3 rounded-xl relative z-10"><Users className="text-yellow-400" size={24}/></div>
                  <div className="relative z-10">
                     <h4 className="font-black text-white text-lg flex items-center gap-2">🧠 Created by Brendan Eich</h4>
                     <p className="text-sm text-gray-400 font-medium mt-1">Developed at Netscape Communications</p>
                  </div>
               </div>
               
               <div className="bg-[#0b1120] p-6 rounded-2xl border border-white/5 flex items-start gap-4 shadow-lg group">
                  <div className="bg-orange-500/20 p-3 rounded-xl"><Zap className="text-orange-400" size={24}/></div>
                  <div>
                     <h4 className="font-black text-white text-lg flex items-center gap-2">😲 Built in just 10 days!</h4>
                     <p className="text-sm text-gray-400 font-medium mt-1">The rapid prototyping left some quirks, but secured its future.</p>
                  </div>
               </div>

               <div className="bg-[#0b1120] p-6 rounded-2xl border border-white/5 flex items-start gap-4 shadow-lg group">
                  <div className="bg-sky-500/20 p-3 rounded-xl"><Target className="text-sky-400" size={24}/></div>
                  <div>
                     <h4 className="font-black text-white text-lg flex items-center gap-2">Initially called:</h4>
                     <p className="text-sm text-gray-400 font-medium mt-2 flex items-center gap-2 flex-wrap">
                        <span className="bg-white/10 px-2 py-1 rounded mt-1">Mocha</span> <ArrowRight size={14} className="text-sky-500 mt-1"/>
                        <span className="bg-white/10 px-2 py-1 rounded mt-1">LiveScript</span> <ArrowRight size={14} className="text-sky-500 mt-1"/>
                        <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded font-bold border border-yellow-500/30 mt-1">JavaScript</span>
                     </p>
                  </div>
               </div>
               
               <p className="font-bold text-gray-900 dark:text-gray-300 mt-2 bg-yellow-500/10 px-4 py-3 rounded-xl border border-yellow-500/20">
                  👉 <b>Purpose:</b> Add interactivity to web pages.
               </p>
           </div>
        </div>
      </section>

      {/* ── Timeline Start ── */}
      <div className="max-w-4xl mx-auto relative mt-16 pb-16">
        {/* Timeline Line */}
        <div className="absolute left-[50%] top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-500 via-amber-500 to-orange-500 transform -translate-x-1/2 opacity-20 dark:opacity-50 hidden md:block"></div>

        {/* ── Section 3: Early Browser Era ── */}
        <section className="mb-24 relative w-full flex justify-center md:justify-start">
           <div className="absolute left-[50%] top-10 w-6 h-6 bg-amber-500 rounded-full border-4 border-[#f8fafc] dark:border-[#0f0e0a] transform -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(245,158,11,0.5)] hidden md:block"></div>
           <div className="w-full md:w-[45%] bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700 relative text-left md:text-right md:ml-0 md:mr-auto">
              <div className="bg-amber-500/10 text-amber-500 w-max px-3 py-1 rounded-full text-xs font-black tracking-widest uppercase mb-4 md:ml-auto">1996–1999</div>
              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4">🌐 3. Early Browser Era</h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium mb-4">
                 JavaScript became popular incredibly fast. Microsoft responded by reverse-engineering it and introducing <b>JScript</b> (their version for Internet Explorer).
              </p>
              <div className="flex items-start gap-3 justify-start md:justify-end">
                 <div className="text-left bg-red-50 dark:bg-red-500/10 p-4 rounded-xl border border-red-100 dark:border-red-500/20 flex gap-3 text-red-600 dark:text-red-400">
                    <AlertTriangle size={24} className="shrink-0"/>
                    <div>
                       <span className="font-bold">👉 Problem:</span>
                       <p className="text-sm font-medium mt-1">Browser incompatibility 😓. Writing code that worked in all browsers was a nightmare.</p>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* ── Section 4: Standardization ── */}
        <section className="mb-24 relative w-full flex justify-center md:justify-end">
           <div className="absolute left-[50%] top-10 w-6 h-6 bg-blue-500 rounded-full border-4 border-[#f8fafc] dark:border-[#0f0e0a] transform -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)] hidden md:block"></div>
           <div className="w-full md:w-[45%] bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700 relative text-left md:ml-auto">
              <div className="bg-blue-500/10 text-blue-500 w-max px-3 py-1 rounded-full text-xs font-black tracking-widest uppercase mb-4">1997–1999</div>
              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4">📏 4. Standardization</h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium mb-4">
                 To solve inconsistency issues, JavaScript was standardized as <b>ECMAScript (ES)</b> by <b>ECMA International</b>.
              </p>
              
              <div className="bg-[#0b1120] rounded-xl overflow-hidden border border-white/10 mt-6">
                 <table className="w-full text-left text-sm">
                    <thead>
                       <tr className="bg-white/5 text-gray-300 font-bold">
                          <th className="p-3 pl-4">Version</th>
                          <th className="p-3">Year</th>
                          <th className="p-3 pr-4">Features</th>
                       </tr>
                    </thead>
                    <tbody className="text-gray-400 font-medium divide-y divide-white/5">
                       <tr><td className="p-3 pl-4 text-blue-400 font-bold">ES1</td><td className="p-3">1997</td><td className="p-3 pr-4">First standard</td></tr>
                       <tr><td className="p-3 pl-4 text-blue-400 font-bold">ES2</td><td className="p-3">1998</td><td className="p-3 pr-4">Minor updates</td></tr>
                       <tr><td className="p-3 pl-4 text-blue-400 font-bold">ES3</td><td className="p-3">1999</td><td className="p-3 pr-4">Stable version</td></tr>
                    </tbody>
                 </table>
              </div>
           </div>
        </section>

        {/* ── Section 5: The "Dark Age" ── */}
        <section className="mb-24 relative w-full flex justify-center md:justify-start">
           <div className="absolute left-[50%] top-10 w-6 h-6 bg-gray-500 rounded-full border-4 border-[#f8fafc] dark:border-[#0f0e0a] transform -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(107,114,128,0.5)] hidden md:block"></div>
           <div className="w-full md:w-[45%] bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 p-8 rounded-[2.5rem] shadow-xl border border-gray-200 dark:border-gray-700 relative text-left md:text-right md:ml-0 md:mr-auto filter grayscale-[50%]">
              <div className="bg-gray-500/10 text-gray-600 dark:text-gray-400 w-max px-3 py-1 rounded-full text-xs font-black tracking-widest uppercase mb-4 md:ml-auto">2000–2008</div>
              <h3 className="text-2xl font-black text-gray-800 dark:text-gray-300 mb-4 flex items-center md:items-start gap-2 justify-start md:justify-end">
                 <MonitorPlay className="shrink-0" size={24}/> 5. The "Dark Age" 🧊
              </h3>
              <p className="font-medium mb-4">
                 👉 Very few updates 😴. ES4 was abandoned due to political differences between browser vendors.
              </p>
              <div className="text-left inline-block bg-white dark:bg-gray-900/50 p-4 rounded-xl border border-gray-300 dark:border-white/5">
                 <span className="font-bold text-gray-700 dark:text-gray-300 block mb-2">Developers struggled with:</span>
                 <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Poor tools</li>
                    <li>Browser differences</li>
                 </ul>
              </div>
           </div>
        </section>

        {/* ── Section 6: The Revolution ── */}
        <section className="mb-24 relative w-full flex justify-center md:justify-end">
           <div className="absolute left-[50%] top-10 w-6 h-6 bg-rose-500 rounded-full border-4 border-[#f8fafc] dark:border-[#0f0e0a] transform -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(244,63,94,0.5)] hidden md:block"></div>
           <div className="w-full md:w-[45%] bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700 relative text-left md:ml-auto">
              <div className="bg-rose-500/10 text-rose-500 w-max px-3 py-1 rounded-full text-xs font-black tracking-widest uppercase mb-4">Around 2005</div>
              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                 🚀 6. The Revolution
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium mb-4">
                 <b>AJAX & Web 2.0</b> changed everything.
              </p>
              <ul className="space-y-3 mb-6">
                 <li className="flex items-start gap-3">
                    <CheckCircle className="text-rose-500 shrink-0 mt-0.5" size={18}/>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">AJAX introduced (asynchronous requests without reloading the page).</span>
                 </li>
                 <li className="flex items-start gap-3">
                    <CheckCircle className="text-rose-500 shrink-0 mt-0.5" size={18}/>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Web apps became dynamic (like Google Maps & Gmail).</span>
                 </li>
              </ul>
              <div className="bg-gradient-to-r from-rose-500 to-orange-500 text-white p-4 rounded-xl font-bold shadow-lg shadow-rose-500/20">
                 👉 JavaScript became essential 🔥
              </div>
           </div>
        </section>

        {/* ── Section 7: Modern Era Begins ── */}
        <section className="mb-24 relative w-full flex justify-center md:justify-start">
           <div className="absolute left-[50%] top-10 w-6 h-6 bg-teal-500 rounded-full border-4 border-[#f8fafc] dark:border-[#0f0e0a] transform -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(20,184,166,0.5)] hidden md:block"></div>
           <div className="w-full md:w-[45%] bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700 relative text-left md:text-right md:ml-0 md:mr-auto">
              <div className="bg-teal-500/10 text-teal-500 w-max px-3 py-1 rounded-full text-xs font-black tracking-widest uppercase mb-4 md:ml-auto">2009</div>
              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4">⚡ 7. Modern Era Begins <span className="text-teal-400 text-lg ml-2">(ES5)</span></h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium mb-6">
                 The language finally woke up. ES5 was a solid, standardized update that browsers rapidly adopted.
              </p>
              <div className="text-left bg-teal-50 dark:bg-teal-500/10 border border-teal-100 dark:border-teal-500/20 p-5 rounded-2xl mb-4 text-teal-700 dark:text-teal-300">
                 <span className="font-bold block mb-3">ES5 introduced:</span>
                 <ul className="space-y-2 font-mono text-sm">
                    <li><code className="bg-white/50 dark:bg-black/20 px-2 py-0.5 rounded">JSON</code> support</li>
                    <li>Array methods <code className="bg-white/50 dark:bg-black/20 px-2 py-0.5 rounded">map</code>, <code className="bg-white/50 dark:bg-black/20 px-2 py-0.5 rounded">filter</code>, <code className="bg-white/50 dark:bg-black/20 px-2 py-0.5 rounded">reduce</code></li>
                    <li><code className="bg-white/50 dark:bg-black/20 px-2 py-0.5 rounded">"use strict"</code></li>
                 </ul>
              </div>
              <p className="font-bold text-gray-800 dark:text-gray-200">
                 👉 JavaScript became more powerful
              </p>
           </div>
        </section>

        {/* ── Section 8: Game-Changer ES6 ── */}
        <section className="mb-24 relative w-full flex justify-center md:justify-end">
           <div className="absolute left-[50%] top-10 w-8 h-8 bg-yellow-400 rounded-full border-4 border-[#f8fafc] dark:border-[#0f0e0a] transform -translate-x-1/2 z-20 shadow-[0_0_25px_rgba(250,204,21,0.8)] items-center justify-center hidden md:flex">
              <Star size={12} className="text-[#0f0e0a] fill-current" />
           </div>
           <div className="w-full md:w-[45%] bg-[#0b1120] border border-yellow-500/30 p-8 rounded-[2.5rem] shadow-2xl relative text-left md:ml-auto">
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-500/20 rounded-full blur-3xl pointer-events-none"></div>
              <div className="bg-yellow-500 text-black w-max px-3 py-1 rounded-full text-xs font-black tracking-widest uppercase mb-4 relative z-10">2015</div>
              <h3 className="text-3xl font-black text-white mb-2 relative z-10 flex items-center gap-2">
                 💥 8. Game-Changer
              </h3>
              <p className="text-xl font-black text-yellow-400 mb-6 relative z-10">ES6 (ECMAScript 2015)</p>
              
              <p className="text-gray-300 font-medium mb-6 relative z-10 italic">
                 👉 The biggest update ever! JavaScript grew up.
              </p>
              
              <div className="relative z-10 grid grid-cols-2 gap-3 font-mono text-sm text-yellow-300">
                 <div className="bg-white/5 border border-white/10 p-3 rounded-xl flex items-center justify-center">let, const</div>
                 <div className="bg-white/5 border border-white/10 p-3 rounded-xl flex items-center justify-center">() =&gt; Arrows</div>
                 <div className="bg-white/5 border border-white/10 p-3 rounded-xl flex items-center justify-center">Classes</div>
                 <div className="bg-white/5 border border-white/10 p-3 rounded-xl flex items-center justify-center">Promises</div>
                 <div className="bg-white/5 border border-white/10 p-3 rounded-xl col-span-2 flex items-center justify-center text-center">Modules (import/export)</div>
              </div>
           </div>
        </section>

        {/* ── Section 9: Continuous Updates ── */}
        <section className="mb-8 relative w-full flex justify-center md:justify-start">
           <div className="absolute left-[50%] top-10 w-6 h-6 bg-fuchsia-500 rounded-full border-4 border-[#f8fafc] dark:border-[#0f0e0a] transform -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(217,70,239,0.5)] hidden md:block"></div>
           <div className="w-full md:w-[45%] bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700 relative text-left md:text-right md:ml-0 md:mr-auto">
              <div className="bg-fuchsia-500/10 text-fuchsia-500 w-max px-3 py-1 rounded-full text-xs font-black tracking-widest uppercase mb-4 md:ml-auto">2016 TO TODAY</div>
              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4">🧩 9. Continuous Updates</h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium mb-6">
                 👉 JavaScript now updates every year (ES7 → ES2025). The process is managed by TC39.
              </p>
              <div className="text-left bg-fuchsia-50 dark:bg-fuchsia-500/10 border border-fuchsia-100 dark:border-fuchsia-500/20 p-5 rounded-2xl mb-4 text-fuchsia-700 dark:text-fuchsia-300">
                 <span className="font-bold block mb-3">Modern additions:</span>
                 <ul className="space-y-2 font-mono text-sm">
                    <li><code className="bg-white/50 dark:bg-black/20 px-2 py-0.5 rounded text-fuchsia-600 dark:text-fuchsia-400">async / await</code> (ES2017)</li>
                    <li><code className="bg-white/50 dark:bg-black/20 px-2 py-0.5 rounded text-fuchsia-600 dark:text-fuchsia-400">?.</code> Optional chaining</li>
                    <li><code className="bg-white/50 dark:bg-black/20 px-2 py-0.5 rounded text-fuchsia-600 dark:text-fuchsia-400">??</code> Nullish coalescing</li>
                 </ul>
              </div>
           </div>
        </section>
      </div>

      {/* ── Section 10: Rise of JavaScript Ecosystem ── */}
      <section className="max-w-6xl mx-auto mb-32 mt-16">
        <SectionHeader icon={Globe} title="10. Rise of JavaScript Ecosystem" subtitle="It swallowed the world." color="text-yellow-500" />
        
        <div className="bg-gradient-to-r from-yellow-500/10 to-transparent p-10 rounded-[3rem] border border-yellow-500/20 grid lg:grid-cols-2 gap-8 items-center shadow-xl">
           <div className="space-y-6">
              <h4 className="text-xl font-black text-gray-900 dark:text-white flex items-center gap-2">
                 <Layout className="text-blue-500"/> Frontend Frameworks
              </h4>
              <div className="flex gap-4">
                 <div className="flex-1 bg-white dark:bg-gray-800 p-4 rounded-2xl text-center border border-gray-100 dark:border-gray-700 shadow-sm font-bold text-cyan-500">React</div>
                 <div className="flex-1 bg-white dark:bg-gray-800 p-4 rounded-2xl text-center border border-gray-100 dark:border-gray-700 shadow-sm font-bold text-red-500">Angular</div>
                 <div className="flex-1 bg-white dark:bg-gray-800 p-4 rounded-2xl text-center border border-gray-100 dark:border-gray-700 shadow-sm font-bold text-emerald-500">Vue.js</div>
              </div>
           </div>
           
           <div className="space-y-6 lg:border-l border-yellow-500/20 lg:pl-8">
              <h4 className="text-xl font-black text-gray-900 dark:text-white flex items-center gap-2">
                 <Database className="text-green-500"/> Backend (Server-side JS)
              </h4>
              <div className="bg-[#0b1120] p-6 rounded-2xl border border-white/5">
                 <div className="flex items-center gap-3 mb-4">
                    <Server size={32} className="text-green-500"/>
                    <div>
                       <span className="text-xs text-green-500 font-bold uppercase tracking-widest">Powered by V8</span>
                       <h5 className="font-black text-white text-xl">Node.js</h5>
                    </div>
                 </div>
                 <ul className="text-sm font-medium text-gray-400 space-y-2">
                    <li className="flex items-center gap-2"><Check size={16} className="text-green-500"/> JavaScript runs on servers natively.</li>
                    <li className="flex items-center gap-2"><Check size={16} className="text-green-500"/> Full-stack development possible.</li>
                 </ul>
              </div>
           </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          ALWAYS EVOLVING
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-yellow-500/10 decoration-2">
          "From a 10-day experiment at Netscape to the undisputed king of web development."
        </p>
      </footer>

    </div>
  );
};

export default JsHistory;