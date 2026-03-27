import React, { useState, useEffect } from 'react';
import {
  Database, HardDrive, Cpu, ShieldAlert, AlertCircle, Info, Terminal, 
  CodeXml, Layers, Boxes, Moon, Sun, ShoppingCart, Save, Trash2, 
  RefreshCw, Lock, Key, Check, Copy, ArrowRight, Zap, Ghost,
  User, Search, FileJson, Settings, Clock, Trash,
  CheckCircle,
  XCircle
} from 'lucide-react';

// ─── Code Block with Copy ────────────────────────────────────────────────────
const CodeBlock = ({ code, title, language = 'js' }: { code: string; title?: string; language?: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <div className="mb-6 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm relative group w-full">
      {title && (
        <div className="bg-gray-50 dark:bg-gray-800 px-4 py-2.5 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="flex space-x-1.5 grayscale opacity-50">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
            </div>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-2">{title}</span>
          </div>
          <span className="text-[10px] font-bold text-gray-400 uppercase">{language}</span>
        </div>
      )}
      <div className="absolute top-12 right-3 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <button onClick={handleCopy} className="p-2 rounded-lg bg-gray-800/80 backdrop-blur-sm text-gray-400 hover:bg-sky-500 hover:text-white transition-all border border-gray-700 shadow-lg" title="Copy code">
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-5 overflow-x-auto text-sm font-mono bg-[#0d1117] text-sky-300 leading-relaxed rounded-b-xl">
        <code>{code}</code>
      </pre>
    </div>
  );
};

// ─── Theme Persistence Demo ──────────────────────────────────────────────────
const ThemeDemo = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const saved = localStorage.getItem('demo_theme');
    if (saved) setTheme(saved);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('demo_theme', next);
  };

  return (
    <div className={`p-8 rounded-3xl border-2 transition-all duration-500 ${theme === 'dark' ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-gray-100 text-gray-900'}`}>
       <div className="flex items-center justify-between mb-6">
          <div className="text-[10px] font-black uppercase tracking-widest opacity-50">Persistence Engine</div>
          <div className={`px-2 py-0.5 rounded text-[10px] font-bold ${theme === 'dark' ? 'bg-sky-500 text-white' : 'bg-gray-100 text-gray-500'}`}>
             LOCAL_STORAGE
          </div>
       </div>
       <div className="text-center space-y-4">
          <div className={`inline-flex items-center justify-center p-4 rounded-full transition-transform duration-700 ${theme === 'dark' ? 'bg-sky-500/20 text-sky-400 rotate-[360deg]' : 'bg-amber-100 text-amber-500 rotate-0'}`}>
             {theme === 'dark' ? <Moon className="w-8 h-8" /> : <Sun className="w-8 h-8" />}
          </div>
          <h4 className="text-xl font-black">{theme === 'dark' ? 'Deep Night' : 'Golden Sun'}</h4>
          <p className="text-sm opacity-60 font-medium">Try toggling and refreshing this page!</p>
          <button 
             onClick={toggleTheme}
             className={`px-8 py-3 rounded-full font-black text-sm uppercase tracking-tight transition-all ${theme === 'dark' ? 'bg-white text-slate-900 hover:scale-105' : 'bg-slate-900 text-white hover:scale-105 shadow-xl shadow-slate-900/10'}`}
          >
             Toggle & Save Theme
          </button>
       </div>
    </div>
  );
};

// ─── Storage Sandbox ─────────────────────────────────────────────────────────
const StorageSandbox = () => {
  const [items, setItems] = useState<{key: string, value: string}[]>([]);
  const [key, setKey] = useState('');
  const [val, setVal] = useState('');

  const refreshList = () => {
    const keys = Object.keys(localStorage).filter(k => k.startsWith('sandbox_'));
    const all = keys.map(k => ({ key: k, value: localStorage.getItem(k) || '' }));
    setItems(all);
  };

  useEffect(() => {
    refreshList();
    window.addEventListener('storage', refreshList);
    return () => window.removeEventListener('storage', refreshList);
  }, []);

  const saveItem = () => {
    if (key && val) {
      localStorage.setItem(`sandbox_${key}`, val);
      setKey(''); setVal('');
      refreshList();
    }
  };

  const removeItem = (k: string) => {
    localStorage.removeItem(k);
    refreshList();
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-[3rem] p-8 lg:p-12 border border-gray-200 dark:border-gray-700 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 flex gap-2">
         <div className="px-3 py-1 bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-sky-200 dark:border-sky-800/50 flex items-center gap-1.5">
            <Database className="w-3 h-3" /> Live Explorer
         </div>
      </div>

      <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-8 flex items-center gap-4">
        <HardDrive className="w-8 h-8 text-sky-500" /> Storage Sandbox
      </h3>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-6">
           <div className="p-6 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-700 space-y-4">
              <div className="space-y-4">
                 <div>
                    <label className="text-[10px] font-black text-gray-400 uppercase px-2 mb-1 block">Key Name</label>
                    <input 
                       value={key} onChange={e => setKey(e.target.value)}
                       placeholder="e.g. username"
                       className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-gray-800 outline-none focus:border-sky-500 transition-colors font-mono text-sm"
                    />
                 </div>
                 <div>
                    <label className="text-[10px] font-black text-gray-400 uppercase px-2 mb-1 block">Value</label>
                    <input 
                       value={val} onChange={e => setVal(e.target.value)}
                       placeholder="e.g. Issac"
                       className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-gray-800 outline-none focus:border-sky-500 transition-colors font-mono text-sm"
                    />
                 </div>
              </div>
              <button 
                 onClick={saveItem}
                 className="w-full py-4 bg-sky-500 hover:bg-sky-600 text-white rounded-xl font-black text-sm uppercase tracking-widest transform active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                 <Save className="w-4 h-4" /> Save to localStorage
              </button>
           </div>
           
           <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-900/30 flex items-start gap-3">
              <Zap className="text-amber-500 w-5 h-5 flex-shrink-0 mt-0.5" />
              <p className="text-[11px] font-bold text-amber-700 dark:text-amber-300 leading-relaxed italic">
                <strong>Mechanism:</strong> When you click Save, <code>localStorage.setItem()</code> is called. This data stays in your browser even if you leave the website!
              </p>
           </div>
        </div>

        <div className="space-y-4">
           <div className="flex items-center justify-between text-[10px] font-black text-gray-400 uppercase px-2 tracking-widest">
              <span>Saved Key-Value Pairs</span>
              <span>{items.length} Entries</span>
           </div>
           
           <div className="bg-slate-900 rounded-3xl border border-white/5 min-h-[300px] overflow-hidden flex flex-col">
              {items.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center opacity-30 gap-3">
                   <Ghost className="w-12 h-12" />
                   <span className="text-xs font-bold uppercase tracking-widest">Storage Empty</span>
                </div>
              ) : (
                <div className="divide-y divide-white/5 overflow-auto max-h-[400px]">
                   {items.map((item, i) => (
                     <div key={i} className="p-5 flex items-center justify-between group hover:bg-white/5 transition-colors">
                        <div className="font-mono text-xs">
                           <span className="text-sky-400 font-bold">{item.key.replace('sandbox_', '')}:</span>
                           <span className="text-slate-300 ml-2">"{item.value}"</span>
                        </div>
                        <button 
                           onClick={() => removeItem(item.key)}
                           className="p-2 rounded-lg text-slate-500 hover:text-rose-500 hover:bg-rose-500/10 transition-all opacity-0 group-hover:opacity-100"
                        >
                           <Trash2 size={14} />
                        </button>
                     </div>
                   ))}
                </div>
              )}
              {items.length > 0 && (
                <div className="p-4 border-t border-white/5">
                   <button 
                      onClick={() => { localStorage.clear(); refreshList(); }}
                      className="text-[10px] font-black text-rose-500 uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2 mx-auto"
                   >
                      <Trash className="w-3 h-3" /> Clear All Global Storage
                   </button>
                </div>
              )}
           </div>
        </div>
      </div>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────
const WebStorageApi: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#fdfdff] dark:bg-[#0a0c10] min-h-screen font-sans text-gray-800 dark:text-gray-200 selection:bg-sky-100 selection:text-sky-700 dark:selection:bg-sky-900/40">
      
      {/* ── Hero Header ── */}
      <header className="max-w-5xl mx-auto text-center mb-24 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-br from-sky-400/10 to-indigo-600/10 rounded-full blur-[120px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-gradient-to-tr from-sky-500 to-indigo-600 rounded-[2.5rem] mb-10 shadow-2xl shadow-sky-500/20 transform hover:-rotate-3 transition-all duration-500">
          <Database className="w-12 h-12 text-white shadow-xl" />
        </div>
        <h1 className="text-6xl sm:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tight leading-none uppercase">
          Web Storage <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">API</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          Store data directly in the browser—no database required. Keep settings, states, and preferences alive across every session.
        </p>
      </header>

      {/* ── 1. What is Web Storage ── */}
      <section className="max-w-6xl mx-auto mb-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-50 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-sky-100 dark:border-sky-800/50">
            <Info className="w-4 h-4" /> Core Concept
          </div>
          <h2 className="text-4xl font-black text-gray-900 dark:text-white leading-tight">
            Instant Client-Side <br /> Persistence
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
            The Web Storage API allows web applications to store string-based data directly in the browser. It eliminates the need for complex database setups for simple data like user themes or shopping carts.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4">
             <div className="p-6 rounded-[2rem] bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/30">
                <div className="text-3xl mb-4">❌</div>
                <h4 className="font-black text-gray-900 dark:text-white text-base mb-2">No Storage</h4>
                <p className="text-xs font-bold text-indigo-700/60 dark:text-indigo-400/60 leading-relaxed">
                   Refresh page = Data Lost. <br/> Poor UX & Frustrating UI.
                </p>
             </div>
             <div className="p-6 rounded-[2rem] bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30">
                <div className="text-3xl mb-4">✅</div>
                <h4 className="font-black text-gray-900 dark:text-white text-base mb-2">With Storage</h4>
                <p className="text-xs font-bold text-emerald-700/60 dark:text-emerald-400/60 leading-relaxed">
                   Saved Settings. Smooth Flows. <br/> High Performance ⚡
                </p>
             </div>
          </div>
        </div>

        <div className="bg-slate-900 p-8 rounded-[3.5rem] border border-white/5 relative shadow-2xl">
           <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
              <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest italic">Browser Data Layout</span>
              <Boxes className="text-sky-500 w-5 h-5" />
           </div>
           
           <div className="space-y-6">
              {[
                { name: 'localStorage', limit: '~5–10 MB', lifetime: 'Permanent', color: 'bg-emerald-500', desc: 'Data persists until manually cleared.' },
                { name: 'sessionStorage', limit: '~5 MB', lifetime: 'Tab Switch', color: 'bg-sky-500', desc: 'Auto-clears when the tab is closed.' }
              ].map((type, i) => (
                <div key={i} className="group p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all">
                   <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-sm font-black text-white">{type.name}</span>
                      <div className={`px-2 py-0.5 rounded text-[8px] font-black text-white uppercase ${type.color}`}>{type.lifetime}</div>
                   </div>
                   <div className="flex items-center gap-4">
                      <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                         <div className={`h-full ${type.color} w-3/4 opacity-40 group-hover:opacity-100 transition-opacity`}></div>
                      </div>
                      <span className="text-[10px] font-black text-slate-500">{type.limit}</span>
                   </div>
                   <p className="mt-3 text-[10px] font-bold text-slate-400 leading-relaxed">{type.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* ── 4. localStorage Methods ── */}
      <section className="max-w-6xl mx-auto mb-24">
         <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
                <h2 className="text-4xl font-black flex items-center gap-4">
                  <Terminal className="text-sky-500 w-10 h-10" /> Engine API
                </h2>
                <p className="text-lg text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                  Both <code>localStorage</code> and <code>sessionStorage</code> use the exact same methods to manage your data.
                </p>

                <div className="grid grid-cols-1 gap-3">
                   {[
                     { method: 'setItem(key, value)', icon: <Save className="w-4 h-4" />, color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-950/20' },
                     { method: 'getItem(key)', icon: <Search className="w-4 h-4" />, color: 'text-sky-500', bg: 'bg-sky-50 dark:bg-sky-950/20' },
                     { method: 'removeItem(key)', icon: <Trash2 className="w-4 h-4" />, color: 'text-rose-500', bg: 'bg-rose-50 dark:bg-rose-950/20' },
                     { method: 'clear()', icon: <RefreshCw className="w-4 h-4" />, color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-950/20' }
                   ].map((m, i) => (
                     <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:translate-x-1 transition-transform cursor-default">
                        <div className={`p-2 rounded-xl ${m.bg} ${m.color}`}>{m.icon}</div>
                        <code className="text-sm font-black text-gray-700 dark:text-gray-300 tracking-tighter">{m.method}</code>
                     </div>
                   ))}
                </div>
            </div>

            <div className="lg:col-span-7">
               <CodeBlock 
                 title="Persistent Theme Implementation"
                 language="javascript"
                 code={`// 1. Save Preference
function saveTheme() {
    localStorage.setItem("theme", "dark");
}

// 2. Load on Initialization / Refresh
window.onload = function() {
    const savedTheme = localStorage.getItem("theme");
    
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }
};

// 3. Clear data
function resetSettings() {
    localStorage.removeItem("theme");
}`}
               />
               <ThemeDemo />
            </div>
         </div>
      </section>

      {/* ── INTERACTIVE SANDBOX ── */}
      <section className="max-w-6xl mx-auto mb-24">
         <StorageSandbox />
      </section>

      {/* ── 8. Storing Objects ── */}
      <section className="max-w-6xl mx-auto mb-24">
         <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-[4rem] p-10 lg:p-16 text-white relative overflow-hidden shadow-2xl group">
            <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 transition-transform duration-1000 group-hover:rotate-45">
               <FileJson className="w-80 h-80" />
            </div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
               <div className="space-y-8">
                  <h2 className="text-4xl font-black">Storing Complexity</h2>
                  <p className="text-slate-400 font-medium leading-relaxed">
                     Web Storage only natively supports <strong>Strings</strong>. If you try to store an object directly, it will be converted to the string <code>"[object Object]"</code>, which is useless.
                  </p>
                  
                  <div className="space-y-4">
                     <div className="flex items-center gap-4 p-5 rounded-3xl bg-rose-500/10 border border-rose-500/20">
                        <XCircle className="text-rose-400 flex-shrink-0" />
                        <div>
                           <span className="text-rose-400 font-black text-xs uppercase italic">The Wrong Way</span>
                           <p className="text-sm font-mono text-slate-300 mt-1">localStorage.setItem("user", userObj);</p>
                        </div>
                     </div>
                     <div className="flex items-center gap-4 p-5 rounded-3xl bg-emerald-500/10 border border-emerald-500/20">
                        <CheckCircle className="text-emerald-400 flex-shrink-0" />
                        <div>
                           <span className="text-emerald-400 font-black text-xs uppercase italic">The Professional Way</span>
                           <p className="text-sm font-mono text-slate-100 mt-1">localStorage.setItem("user", JSON.stringify(userObj));</p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="space-y-4">
                  <CodeBlock 
                    title="Object serialization lifecycle"
                    language="javascript"
                    code={`const user = { name: "Issac", id: 101 };

// STEP 1: CONVERT & STORE
localStorage.setItem("user", JSON.stringify(user));

// STEP 2: RETRIEVE & RESTORE
const storedData = localStorage.getItem("user");
const parsedUser = JSON.parse(storedData);

console.log(parsedUser.name); // "Issac"`}
                  />
               </div>
            </div>
         </div>
      </section>

      {/* ── 9 & 10. Limitations & Security ── */}
      <section className="max-w-6xl mx-auto mb-24 grid lg:grid-cols-3 gap-8">
         <div className="lg:col-span-1 p-10 rounded-[3rem] bg-rose-50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/30">
            <h3 className="text-2xl font-black text-rose-600 dark:text-rose-400 mb-6 flex items-center gap-3">
               <ShieldAlert /> High Risk
            </h3>
            <p className="text-rose-900/50 dark:text-rose-400/50 font-bold text-xs uppercase tracking-widest mb-8">
               NEVER STORE THESE:
            </p>
            <div className="space-y-3">
               {[
                 { label: 'Plaintext Passwords', icon: <Lock /> },
                 { label: 'Auth Tokens (unencrypted)', icon: <Key /> },
                 { label: 'Sensitive PII Data', icon: <User /> }
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-3 p-4 bg-white dark:bg-rose-900/30 rounded-2xl shadow-sm font-black text-sm text-rose-500">
                    {item.icon} {item.label}
                 </div>
               ))}
            </div>
         </div>

         <div className="lg:col-span-2 p-10 rounded-[3.5rem] bg-slate-900 text-white relative overflow-hidden border border-white/5 shadow-2xl">
            <div className="absolute top-0 right-0 p-8 opacity-10">
               <AlertCircle className="w-48 h-48" />
            </div>
            <h3 className="text-3xl font-black mb-8">Platform Limitations</h3>
            
            <div className="grid sm:grid-cols-2 gap-8 relative z-10">
               {[
                 { title: 'Type Binding', body: 'The storage strictly accepts only strings. Objects require JSON scaling.', icon: <FileJson className="text-sky-400" /> },
                 { title: 'Volume Limit', body: 'Limited to ~5–10MB. Filling this will crash your storage attempts.', icon: <HardDrive className="text-emerald-400" /> },
                 { title: 'Sync-Only', body: 'Retrieving data is a blocking operation. Avoid massive data reads.', icon: <Cpu className="text-amber-400" /> },
                 { title: 'Security Context', body: 'Any script on your page can read localStorage. It is NOT secure storage.', icon: <ShieldAlert className="text-rose-400" /> }
               ].map((lim, i) => (
                 <div key={i} className="flex gap-4">
                    <div className="mt-1">{lim.icon}</div>
                    <div>
                       <h5 className="font-black text-sm mb-1">{lim.title}</h5>
                       <p className="text-xs text-slate-400 font-medium leading-relaxed">{lim.body}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* ── 11. Real World Use Cases ── */}
      <section className="max-w-6xl mx-auto mb-24">
        <h2 className="text-3xl font-black text-center mb-12">Product Applications</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
           {[
             { title: 'Dark Mode', icon: Moon, color: 'text-indigo-500', bg: 'bg-indigo-50 dark:bg-indigo-950/20', desc: 'Remember preferences over multiple visits.' },
             { title: 'E-commerce Cart', icon: ShoppingCart, color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-950/20', desc: 'Maintain items without a persistent login.' },
             { title: 'Form Recovery', icon: Save, color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-950/20', desc: 'Auto-save multi-step form progress safely.' },
             { title: 'User Settings', icon: Settings, color: 'text-sky-500', bg: 'bg-sky-50 dark:bg-sky-950/20', desc: 'Localization and interface configurations.' },
           ].map((item, i) => (
             <div key={i} className="p-8 rounded-[3.5rem] bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group">
                <div className={`w-14 h-14 rounded-[1.5rem] ${item.bg} flex items-center justify-center mb-6 ring-4 ring-transparent group-hover:ring-current/10 transition-all`}>
                   <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h4 className="text-lg font-black text-gray-900 dark:text-white mb-2">{item.title}</h4>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 font-bold leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* ── 12 & 13. Pro Tips & Mistakes ── */}
      <section className="max-w-6xl mx-auto mb-20 space-y-12">
         <div className="bg-indigo-900 rounded-[4rem] p-10 lg:p-16 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-10">
               <Zap className="w-64 h-64" />
            </div>
            <h3 className="text-3xl font-black mb-10 flex items-center gap-4">
               <Zap className="text-amber-400" /> Engineering Protocols
               <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] ml-auto">EST. 15 YRS</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-12 relative z-10">
               <div className="space-y-6">
                  {[
                    { tip: 'Standardize with Prefixes', body: 'Use prefixes like app_theme to avoid collisions with other scripts.' },
                    { tip: 'Atomic Null Checks', body: 'Always verify if(localStorage.getItem()) exists before running logic.' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-6 rounded-3xl bg-white/5 border border-white/5">
                       <div className="w-8 h-8 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400 font-black text-xs flex-shrink-0">{i+1}</div>
                       <div>
                          <h5 className="font-black text-sm mb-1">{item.tip}</h5>
                          <p className="text-xs text-slate-300 font-medium">{item.body}</p>
                       </div>
                    </div>
                  ))}
               </div>
               <div className="space-y-6">
                  {[
                    { tip: 'Session strategy', body: 'Use sessionStorage for sensitive short-term data (it clears on close).' },
                    { tip: 'Data Garbage Collection', body: 'Clean old, stale keys regularly to prevent storage saturation.' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-6 rounded-3xl bg-white/5 border border-white/5">
                       <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 font-black text-xs flex-shrink-0">{i+3}</div>
                       <div>
                          <h5 className="font-black text-sm mb-1">{item.tip}</h5>
                          <p className="text-xs text-slate-300 font-medium">{item.body}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Stringification Failure', body: 'Saving objects without JSON.stringify returns [object Object].' },
              { title: 'Storage Overflow', body: 'Hitting the ~5MB limit causes critical failures silently.' },
              { title: 'PII Leakage', body: 'Storing user personal info where any script can read it.' },
              { title: 'Null Management', body: 'Not handling the returns of non-existent keys (null).' }
            ].map((err, i) => (
              <div key={i} className="p-8 rounded-[2.5rem] bg-rose-50/50 dark:bg-rose-950/10 border border-rose-100 dark:border-rose-900/20">
                 <h5 className="text-rose-500 font-black uppercase text-[9px] tracking-widest mb-3">PITFALL_0{i+1}</h5>
                 <h4 className="font-black text-rose-900 dark:text-rose-200 text-sm mb-2">{err.title}</h4>
                 <p className="text-[10px] text-rose-700/60 dark:text-rose-400/60 font-bold leading-relaxed">{err.body}</p>
              </div>
            ))}
         </div>
      </section>

      {/* ── Summary Banner ── */}
      <footer className="max-w-6xl mx-auto mb-20">
         <div className="bg-slate-900 p-12 lg:p-16 rounded-[4rem] text-center relative overflow-hidden group shadow-2xl border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <h2 className="text-4xl font-black text-white mb-6 relative z-10 italic tracking-tighter uppercase">Power your Client States</h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-10 font-bold relative z-10">
               Web Storage is the foundation of modern, snappy user interfaces. Master it once, build persistent experiences forever.
            </p>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
               <div className="px-10 py-4 bg-white text-slate-900 rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform cursor-pointer shadow-xl shadow-white/10">Read Docs</div>
               <div className="px-10 py-4 border border-slate-700 text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-slate-800 transition-all cursor-pointer">Live Demo</div>
            </div>
         </div>
      </footer>

    </div>
  );
};

export default WebStorageApi;