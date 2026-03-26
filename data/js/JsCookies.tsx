import React, { useState, useEffect } from 'react';
import { 
  Cookie, 
  Info, 
  Database, 
  RefreshCw, 
  Trash2, 
  ShieldCheck, 
  Lock, 
  Globe, 
  Layers, 
  Zap, 
  Monitor, 
  Copy, 
  Check, 
  PlusCircle, 
  Save, 
  Eye, 
  Search, 
  Terminal, 
  Key, 
  ShieldAlert, 
  Activity, 
  Scale, 
  ArrowRight,
  HardDrive
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

const JsCookies: React.FC = () => {
  const [cookieSim, setCookieSim] = useState<{ key: string, value: string }[]>([]);
  const [newKey, setNewKey] = useState('');
  const [newVal, setNewVal] = useState('');

  const addCookie = () => {
    if (newKey && newVal) {
      setCookieSim(prev => {
        const existing = prev.findIndex(c => c.key === newKey);
        if (existing !== -1) {
          const updated = [...prev];
          updated[existing] = { key: newKey, value: newVal };
          return updated;
        }
        return [...prev, { key: newKey, value: newVal }];
      });
      setNewKey('');
      setNewVal('');
    }
  };

  const deleteCookie = (key: string) => {
    setCookieSim(prev => prev.filter(c => c.key !== key));
  };

  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#020617] min-h-screen font-sans selection:bg-amber-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-amber-600 dark:text-amber-400 text-[10px] font-black mb-8 border border-amber-100 dark:border-amber-900/50 shadow-xl shadow-amber-500/5 animate-pulse tracking-[0.2em]">
          <Cookie size={14} className="fill-current" /> WEB STORAGE
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          JS <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-400 to-yellow-500 drop-shadow-2xl">
            Cookies
          </span><br />
          Management
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          Cookies are small pieces of data stored in the browser that websites use to <span className="text-gray-900 dark:text-white font-bold underline decoration-amber-500 underline-offset-4 tracking-tight">remember information</span> about users.
        </p>
      </header>

      {/* ── Section 1: Definition & Use Cases ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-16 items-center">
         <div className="space-y-8">
            <SectionHeader icon={Info} title="1. What & 2. Why?" subtitle="Small data with big impact on UX." color="text-amber-500" />
            <div className="space-y-6">
               <div className="p-8 bg-white dark:bg-gray-800 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group">
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center text-white rotate-12 group-hover:rotate-0 transition-transform shadow-lg shadow-amber-500/20">
                     <Zap size={24} />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4">🧠 Simple Definition:</h3>
                  <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed italic">
                    Cookies are small text files placed on your device to store data so that a web server can retrieve it later.
                  </p>
               </div>

               <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'SESSIONS', text: 'User Login 🔐', icon: Lock },
                    { label: 'CART', text: 'Shopping Data 🛒', icon: PlusCircle },
                    { label: 'PREFS', text: 'Themes/Lang 🎯', icon: Eye },
                    { label: 'ANALYTICS', text: 'User Tracking 📊', icon: Activity }
                  ].map((item, i) => (
                    <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-[2rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-1 transition-transform">
                       <item.icon className="text-amber-500 mb-3" size={20} />
                       <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest block mb-1">{item.label}</span>
                       <span className="text-xs font-bold text-gray-700 dark:text-gray-300">{item.text}</span>
                    </div>
                  ))}
               </div>
            </div>
         </div>

         <div className="bg-[#0b1120] p-10 rounded-[3.5rem] border border-white/5 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-5 animate-pulse">
               <Globe size={150} className="text-amber-500" />
            </div>
            <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3 italic">
               <RefreshCw className="text-amber-500" size={24} /> 3. How they Work?
            </h3>
            <div className="space-y-6 relative z-10">
               {[
                 { step: '1', text: 'Server sends cookie → Browser stores it' },
                 { step: '2', text: 'Browser sends cookie back → Every request' },
                 { step: '3', text: 'Server reads cookie → Identifies user' }
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-4 group/item">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-amber-500 font-black group-hover/item:bg-amber-500 group-hover/item:text-white transition-colors">
                       {item.step}
                    </div>
                    <p className="text-gray-400 font-medium">{item.text}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* ── Section 2: Cookie Manager Lab ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <SectionHeader icon={Database} title="Cookie Manager Lab" subtitle="Simulating browser cookie storage." color="text-amber-500" />
         
         <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-800 p-10 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl flex flex-col justify-between">
               <div>
                  <h3 className="text-xl font-black text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                     <Save className="text-amber-500" size={20} /> Set a Cookie
                  </h3>
                  <div className="space-y-4">
                     <div>
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-2 px-1">Cookie Key</label>
                        <input 
                           type="text" 
                           value={newKey}
                           onChange={(e) => setNewKey(e.target.value)}
                           placeholder="e.g. username"
                           className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-4 rounded-2xl outline-none focus:ring-2 ring-amber-500/20 font-mono text-sm"
                        />
                     </div>
                     <div>
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-2 px-1">Cookie Value</label>
                        <input 
                           type="text" 
                           value={newVal}
                           onChange={(e) => setNewVal(e.target.value)}
                           placeholder="e.g. Karthick"
                           className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-4 rounded-2xl outline-none focus:ring-2 ring-amber-500/20 font-mono text-sm"
                        />
                     </div>
                  </div>
               </div>
               <button 
                  onClick={addCookie}
                  className="mt-8 bg-amber-500 hover:bg-amber-600 text-white font-black py-4 rounded-2xl shadow-xl shadow-amber-500/20 transition-all active:scale-95 flex items-center justify-center gap-2"
               >
                  <PlusCircle size={20} /> STORE IN BROWSER
               </button>
            </div>

            <div className="bg-[#0b1120] p-10 rounded-[3.5rem] border border-white/5 shadow-2xl overflow-hidden relative">
               <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Monitor size={100} className="text-white" />
               </div>
               <h3 className="text-xl font-black text-white mb-8 flex items-center gap-2 italic">
                  <Eye className="text-amber-500" size={20} /> Browser Memory (document.cookie)
               </h3>
               
               <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/10">
                  {cookieSim.length === 0 ? (
                    <div className="text-gray-500 font-mono text-sm p-4 border border-white/5 rounded-2xl bg-white/5">
                       No cookies found for this domain.
                    </div>
                  ) : (
                    cookieSim.map((c, i) => (
                      <div key={i} className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl group/cookie animate-in fade-in slide-in-from-right duration-300">
                         <div className="font-mono text-xs">
                            <span className="text-amber-400 font-bold">{c.key}</span>
                            <span className="text-white/30 mx-2">=</span>
                            <span className="text-emerald-400">{c.value}</span>
                         </div>
                         <button 
                           onClick={() => deleteCookie(c.key)}
                           className="p-2 text-rose-500 hover:bg-rose-500/10 rounded-xl transition-colors opacity-0 group/cookie:opacity-100"
                         >
                           <Trash2 size={16} />
                         </button>
                      </div>
                    ))
                  )}
               </div>

               <div className="mt-8 pt-8 border-t border-white/5">
                  <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest block mb-1">Raw Output String:</span>
                  <div className="p-4 bg-black rounded-xl font-mono text-[10px] text-gray-400 overflow-x-auto whitespace-nowrap border border-white/5">
                     {cookieSim.length === 0 ? '""' : cookieSim.map(c => `${c.key}=${c.value}`).join('; ')}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 3: CRUD Operations ── */}
      <section className="max-w-6xl mx-auto mb-32 space-y-12">
         <SectionHeader icon={Terminal} title="JS Cookie CRUD" subtitle="Create, Read, Update, & Delete." color="text-amber-500" />
         
         <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
               <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group">
                  <h4 className="text-[10px] font-black text-amber-500 uppercase tracking-widest mb-4 italic underline decoration-amber-500/20 underline-offset-4">4. Creating & 6. Updating</h4>
                  <p className="text-gray-500 mb-6 font-medium text-sm">Simply assign to <span className="text-amber-500 font-mono">document.cookie</span>. Overwriting the same key updates it.</p>
                  <CodeBlock code={`// Basic Creation\ndocument.cookie = "username=Karthick";\n\n// Update\ndocument.cookie = "username=Raja";`} />
               </div>

               <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group">
                  <h4 className="text-[10px] font-black text-amber-500 uppercase tracking-widest mb-4 italic underline decoration-amber-500/20 underline-offset-4">7. Deleting</h4>
                  <p className="text-gray-500 mb-6 font-medium text-sm">Set the expiry date to the past. The browser will auto-cull it.</p>
                  <CodeBlock code={`document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";`} />
               </div>
            </div>

            <div className="space-y-6">
               <div className="bg-[#0b1120] p-8 rounded-[2.5rem] border border-white/5 shadow-2xll relative overflow-hidden h-full">
                  <h4 className="text-[10px] font-black text-amber-500 uppercase tracking-widest mb-4 italic underline decoration-amber-500/30 underline-offset-4">5. Practical Attributes (The Full Syntax)</h4>
                  <p className="text-gray-400 mb-8 font-medium text-sm">Real-world cookies usually need an <span className="text-emerald-400">expiry</span> and a <span className="text-blue-400">path</span>.</p>
                  <CodeBlock language="javascript" title="Setting Expiry" code={`let date = new Date();\ndate.setTime(date.getTime() + (24 * 60 * 60 * 1000)); // 1 day\n\n// Create with Expiry and Path\ndocument.cookie = "user=Karthick; expires=" + date.toUTCString() + "; path=/";`} />
                  <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                     <p className="text-xs text-gray-400 flex items-center gap-2">
                        <Search size={14} className="text-amber-500" />
                        <span>Reading: <code className="text-amber-400">console.log(document.cookie);</code></span>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 4: Practical Example ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="p-16 bg-white dark:bg-gray-800 rounded-[5rem] shadow-2xl border border-gray-50 dark:border-gray-700 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-16 opacity-5 group-hover:scale-125 transition-transform duration-1000">
               <Activity size={200} className="text-indigo-500" />
            </div>
            <div className="max-w-2xl relative z-10">
               <SectionHeader icon={Terminal} title="8. Complete Practical Example" subtitle="Reusable helper functions." color="text-indigo-500" />
               <p className="text-xl text-gray-500 dark:text-gray-400 mb-10 leading-relaxed font-serif italic border-l-4 border-indigo-500/20 pl-8">
                 In large apps, you don't write "document.cookie" everywhere. You build <span className="text-indigo-500 font-bold uppercase tracking-tight">helper functions</span> to handle storage.
               </p>
               <CodeBlock title="Cookie Helpers" language="javascript" code={`// Set cookie\nfunction setCookie(name, value, days) {\n    let d = new Date();\n    d.setTime(d.getTime() + (days*24*60*60*1000));\n    let expires = "expires=" + d.toUTCString();\n    document.cookie = name + "=" + value + ";" + expires + ";path=/";\n}\n\n// Get cookie\nfunction getCookie(name) {\n    let cookies = document.cookie.split(";");\n    for (let c of cookies) {\n        let [key, value] = c.trim().split("=");\n        if (key === name) return value;\n    }\n    return "";\n}\n\n// Usage\nsetCookie("user", "Karthick", 7);`} />
            </div>
         </div>
      </section>

      {/* ── Section 5: Attributes & Security ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-16">
         <div>
            <SectionHeader icon={ShieldCheck} title="9. Attributes & 🔐 Security" subtitle="Keeping data safe and scoped." color="text-emerald-500" />
            <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-[2.5rem] shadow-xl overflow-hidden">
               <table className="w-full text-left">
                  <thead>
                     <tr className="bg-emerald-500 text-white">
                        <th className="p-6 text-[10px] font-black uppercase tracking-widest">Attribute</th>
                        <th className="p-6 text-[10px] font-black uppercase tracking-widest">Description</th>
                     </tr>
                  </thead>
                  <tbody className="text-sm">
                     {[
                       { attr: 'expires', desc: 'When the cookie self-destructs' },
                       { attr: 'path', desc: 'Where the cookie is accessible' },
                       { attr: 'domain', desc: 'Domain scope of the cookie' },
                       { attr: 'secure', desc: 'Only sent over HTTPS' },
                       { attr: 'SameSite', desc: 'Defense against CSRF attacks' }
                     ].map((row, i) => (
                       <tr key={i} className="border-b border-gray-50 dark:border-gray-800/50 hover:bg-emerald-500/5 transition-colors">
                          <td className="p-6 font-bold text-emerald-600 dark:text-emerald-400 font-mono text-xs">{row.attr}</td>
                          <td className="p-6 text-gray-500 dark:text-gray-400 font-medium italic">{row.desc}</td>
                       </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>

         <div className="flex flex-col justify-center space-y-8">
            <div className="p-8 bg-black rounded-[3rem] border border-white/10 shadow-3xl group">
               <h4 className="text-xs font-black text-emerald-400 uppercase mb-4 tracking-widest italic flex items-center gap-2">
                  <Lock size={16} /> 10. Real-World Security Example
               </h4>
               <CodeBlock title="Secure Cookies" code={`document.cookie = "user=Karthick; Secure; SameSite=Strict";`} />
               <p className="text-gray-500 text-xs italic">This cookie will only work on HTTPS and prevents cross-site leaks.</p>
            </div>

            <div className="p-8 bg-indigo-500/5 rounded-[3.5rem] border border-indigo-500/10">
               <h4 className="text-xl font-black text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <Monitor className="text-indigo-500" size={24} /> 🎯 App Strategy: Theme Saving
               </h4>
               <p className="text-gray-500 mb-6 font-medium italic leading-relaxed">
                  Save a user's choice (like Dark Mode) even after they refresh the page.
               </p>
               <CodeBlock code={`// Save theme\ndocument.cookie = "theme=dark; path=/";\n\n// Apply on page load\nif (document.cookie.includes("theme=dark")) {\n    document.body.style.background = "black";\n}`} />
            </div>
         </div>
      </section>

      {/* ── Section 6: Comparison ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <SectionHeader icon={Scale} title="11. Storage Comparison" subtitle="Cookies vs Storage APIs." color="text-indigo-500" />
         <div className="bg-white dark:bg-gray-800 rounded-[4rem] border border-gray-100 dark:border-gray-700 shadow-2xl overflow-x-auto">
            <table className="w-full text-left">
               <thead>
                  <tr className="bg-indigo-600 text-white">
                     <th className="p-8 text-[10px] font-black uppercase tracking-[0.2em]">Feature</th>
                     <th className="p-8 text-[10px] font-black uppercase tracking-[0.2em]">Cookies 🍪</th>
                     <th className="p-8 text-[10px] font-black uppercase tracking-[0.2em]">LocalStorage 📦</th>
                     <th className="p-8 text-[10px] font-black uppercase tracking-[0.2em]">SessionStorage 📂</th>
                  </tr>
               </thead>
               <tbody className="text-sm font-medium">
                  {[
                    { f: 'Storage Size', c: 'Small (~4KB)', l: 'Large (~5MB)', s: 'Large (~5MB)' },
                    { f: 'Expiry', c: 'Yes (custom)', l: 'No (persistent)', s: 'On tab close' },
                    { f: 'Sent to Server', c: '✅ Yes', l: '❌ No', s: '❌ No' }
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-gray-50 dark:border-gray-900/50 hover:bg-indigo-500/5 transition-colors">
                       <td className="p-8 text-gray-400 font-bold italic">{row.f}</td>
                       <td className="p-8 text-amber-600 dark:text-amber-400 font-black italic">{row.c}</td>
                       <td className="p-8 text-gray-900 dark:text-white font-black">{row.l}</td>
                       <td className="p-8 text-gray-500 dark:text-gray-400">{row.s}</td>
                    </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
         <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-10"></div>
         <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
           Memory Unlocked.
         </p>
         <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto italic underline decoration-amber-500/10 decoration-2">
           "Cookies are the breadcrumbs of the web. They help us find our way back to the states we've created, making the web feel more human and tailored."
         </p>
      </footer>

    </div>
  );
};

const RotateCw = ({ size, className }: { size?: number, className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || 24}
    height={size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
    <path d="M21 3v5h-5" />
  </svg>
);

export default JsCookies;