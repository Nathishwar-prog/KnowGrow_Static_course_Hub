import React, { useState, useEffect } from 'react';
import { 
  Type, Globe, Zap, Info, Terminal, CodeXml, 
  Layers, Boxes, Binary, MessageSquare, Languages, 
  Banknote, ShieldCheck, AlertCircle, CheckCircle, 
  Smartphone, MousePointer2, Settings, Clipboard, 
  Check, Copy, ArrowRight, Maximize2, Activity, 
  Cpu, Laptop, Hash, Table, Monitor
} from 'lucide-react';

// ─── Code Block Component ───────────────────────────────────────────────────
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
        <button onClick={handleCopy} className="p-2 rounded-lg bg-gray-800/80 backdrop-blur-sm text-gray-400 hover:bg-violet-500 hover:text-white transition-all border border-gray-700 shadow-lg" title="Copy code">
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-5 overflow-x-auto text-sm font-mono bg-[#0d1117] text-violet-300 leading-relaxed rounded-b-xl">
        <code>{code}</code>
      </pre>
    </div>
  );
};

// ─── Unicode Explorer Sandbox ────────────────────────────────────────────────
const UnicodeExplorer = () => {
  const [input, setInput] = useState('😄');
  
  const char = [...input][0] || '';
  const charCode = char ? char.charCodeAt(0) : 0;
  const codePoint = char ? char.codePointAt(0) : 0;
  const hex = codePoint ? codePoint.toString(16).toUpperCase() : '';
  const length = char ? char.length : 0;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-[2.5rem] p-8 lg:p-12 border border-gray-200 dark:border-gray-700 shadow-2xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-8 opacity-5 text-violet-500 group-hover:scale-125 transition-transform duration-1000">
         <Binary className="w-80 h-80" />
      </div>

      <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
         <div className="lg:col-span-12 mb-4">
            <h3 className="text-2xl font-black flex items-center gap-3">
               <Hash className="text-violet-500 w-6 h-6" /> Unicode Inspector
            </h3>
            <p className="text-sm font-medium text-gray-400 mt-2 uppercase tracking-widest italic">Live Decoding: Input → Unicode → Bytes</p>
         </div>

         <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
               <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-2">Type a character or emoji</label>
               <input 
                 type="text" 
                 maxLength={2}
                 value={input}
                 onChange={(e) => setInput(e.target.value)}
                 className="w-full text-5xl p-8 rounded-[2rem] bg-gray-50 dark:bg-gray-900 border-4 border-violet-500/20 focus:border-violet-500 text-center outline-none transition-all shadow-inner font-sans"
               />
            </div>

            <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/30 p-6 rounded-3xl flex items-start gap-4">
               <div className="w-10 h-10 rounded-2xl bg-amber-500 text-white flex items-center justify-center flex-shrink-0 animate-pulse">
                  <Monitor size={20} />
               </div>
               <p className="text-xs font-bold text-amber-700 dark:text-amber-400 leading-relaxed italic">
                 <strong>Length Fact:</strong> Notice how emojis like {char} have a .length of {length}. This is because JS uses UTF-16 internally!
               </p>
            </div>
         </div>

         <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4">
               {[
                 { label: 'Hex Code', value: `U+${hex}`, color: 'bg-violet-500', icon: <Binary size={16} /> },
                 { label: 'Code Point', value: codePoint, color: 'bg-indigo-500', icon: <Terminal size={16} /> },
                 { label: 'charCodeAt(0)', value: charCode, color: 'bg-emerald-500', icon: <CodeXml size={16} /> },
                 { label: 'String Length', value: `${length} UTF-16`, color: 'bg-rose-500', icon: <Activity size={16} /> }
               ].map((item, i) => (
                 <div key={i} className="bg-gray-50 dark:bg-gray-900 rounded-[2rem] p-6 border-2 border-gray-100 dark:border-gray-800 hover:border-violet-500/30 transition-all flex flex-col justify-center gap-2">
                    <div className="flex items-center gap-2 text-gray-400">
                       <div className={`p-1.5 rounded-lg ${item.color} text-white`}>{item.icon}</div>
                       <span className="text-[10px] font-black uppercase tracking-tighter">{item.label}</span>
                    </div>
                    <div className="text-xl font-black text-gray-900 dark:text-white font-mono">{item.value}</div>
                 </div>
               ))}
            </div>

            <div className="mt-6 p-6 rounded-[2rem] bg-slate-900 border border-white/5 space-y-4">
               <div className="flex justify-between items-center text-[10px] font-black uppercase text-slate-500 tracking-widest">
                  <span>Native Generator Code</span>
                  <CheckCircle className="text-emerald-500 w-3 h-3" />
               </div>
               <code className="text-sm font-mono text-violet-400 block break-all">
                  String.fromCodePoint({codePoint}); // → "{char}"
               </code>
               <code className="text-sm font-mono text-slate-400 block break-all">
                  {`\\u{${hex}}`} // ES6 Escape
               </code>
            </div>
         </div>
      </div>
    </div>
  );
};

// ─── Main Component ──────────────────────────────────────────────────────────
const JsUtf8Characters: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8faff] dark:bg-[#08090b] min-h-screen font-sans text-gray-800 dark:text-gray-200 selection:bg-violet-100 selection:text-violet-700">
      
      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-br from-violet-400/10 to-indigo-400/10 rounded-full blur-[120px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-5 bg-gradient-to-tr from-violet-500 to-indigo-600 rounded-[2.5rem] mb-10 shadow-2xl shadow-violet-500/20 transform hover:-rotate-6 transition-all duration-500">
          <Type className="w-14 h-14 text-white shadow-xl" />
        </div>
        <h1 className="text-6xl sm:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tight leading-none uppercase italic">
          UTF-8 <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-600">Characters</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The universal language of the web. Learn how JavaScript handles everything from simple ASCII to the latest multilingual symbols and complex emojis.
        </p>
      </header>

      {/* ── 1. What is UTF-8 ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-10">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-violet-50 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-violet-100 dark:border-violet-800/50">
            <Globe className="w-4 h-4" /> Global Encoding
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white leading-none tracking-tighter italic">
            A Universal Character <br /> Framework
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
            UTF-8 (Unicode Transformation Format - 8 bit) is a character encoding capable of representing almost every character in the world. It is the dominant encoding system for the modern web, ensuring your text looks perfect regardless of the user's language or device.
          </p>

          <div className="p-8 rounded-[3rem] bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/30 flex items-start gap-5 group">
             <Zap className="text-violet-500 w-12 h-12 flex-shrink-0 mt-1 transition-transform group-hover:scale-125" />
             <div>
                <span className="text-violet-500 font-black uppercase text-xs tracking-[0.2em] block mb-2 underline decoration-2 underline-offset-4">Simple Definition</span>
                <p className="text-sm font-bold text-gray-700 dark:text-gray-300 leading-relaxed">
                   "UTF-8 is a flexible system that lets JavaScript handle text from any language (Tamil, Hindi, Chinese), emojis 🌍, and complex symbols reliably."
                </p>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
           {[
             { border: 'border-rose-100 dark:border-rose-900/30', bg: 'bg-rose-50 dark:bg-rose-950/10', icon: '⚠️', title: 'Broken Strings', desc: 'Without UTF-8, text breaks into weird symbols () and limited language support fails.' },
             { border: 'border-emerald-100 dark:border-emerald-900/30', bg: 'bg-emerald-50 dark:bg-emerald-950/10', icon: '🚀', title: 'Global Logic', desc: 'Universal compatibility, full emoji support, and seamless cross-browser rendering.' }
           ].map((card, idx) => (
             <div key={idx} className={`p-10 rounded-[3.5rem] border-2 shadow-sm ${card.border} ${card.bg} transition-all hover:-translate-y-2`}>
                <div className="text-4xl mb-8">{card.icon}</div>
                <h4 className="font-black text-gray-900 dark:text-white text-xl mb-4 italic leading-none">{card.title}</h4>
                <p className="text-xs font-bold text-gray-500 dark:text-gray-400 leading-relaxed opacity-60 uppercase tracking-tighter">
                   {card.desc}
                </p>
             </div>
           ))}
        </div>
      </section>

      {/* ── INTERACTIVE UNICODE EXPLORER ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <UnicodeExplorer />
      </section>

      {/* ── 4. Code Implementation ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-12 gap-12 items-start">
         <div className="lg:col-span-5 space-y-8">
            <h2 className="text-4xl font-black italic flex items-center gap-4">
              <Terminal className="text-violet-500 w-10 h-10" /> Script Implementation
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 font-medium leading-relaxed italic">
              JavaScript uses <strong>UTF-16</strong> strings internally, but provides high-level APIs to work perfectly with <strong>UTF-8</strong> inputs.
            </p>

            <div className="space-y-4">
               {[
                 { method: 'charCodeAt(0)', desc: 'Returns a number (0-65535). Might break for emojis.', icon: <Binary className="text-violet-400" /> },
                 { method: 'codePointAt(0)', desc: 'Modern & Emoji Safe. Returns the full Unicode value.', icon: <CheckCircle className="text-emerald-400" /> },
                 { method: 'String.fromCodePoint()', desc: 'Generates any character from a large integer.', icon: <Zap className="text-amber-400" /> }
               ].map((m, i) => (
                 <div key={i} className="flex items-center gap-5 p-5 bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 rounded-3xl group hover:border-violet-300 transition-colors">
                    <div className="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-900 group-hover:scale-110 transition-transform">{m.icon}</div>
                    <div>
                       <code className="text-[10px] font-black uppercase text-violet-500 tracking-widest">{m.method}</code>
                       <p className="text-xs font-bold text-gray-400 mt-1 uppercase tracking-tighter">{m.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         <div className="lg:col-span-7">
            <CodeBlock 
              title="Unicode Escape & Methods"
              language="javascript"
              code={`// 1. Unicode Escapes
let char = "\\u0041";           // "A"
let emoji = "\\u{1F604}";      // "😄" (Extended)

// 2. Getting Unicode Index
console.log("A".charCodeAt(0));   // 65
console.log("😄".codePointAt(0)); // 128516 (Modern)

// 3. Generating Characters
console.log(String.fromCharCode(65));      // "A"
console.log(String.fromCodePoint(128516)); // "😄"`}
            />
         </div>
      </section>

      {/* ── 7. Comparison Table ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-white dark:bg-gray-800 rounded-[3.5rem] p-10 lg:p-16 border-2 border-gray-100 dark:border-gray-700 shadow-xl overflow-hidden relative">
            <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 text-emerald-500">
               <Table size={120} />
            </div>
            
            <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-10 flex items-center gap-4 relative z-10">
               <Binary className="text-emerald-500" /> UTF-8 vs UTF-16
            </h3>
            
            <div className="overflow-x-auto relative z-10">
               <table className="w-full text-start">
                  <thead>
                     <tr className="border-b-2 border-gray-100 dark:border-gray-700">
                        {['Feature', 'UTF-8', 'UTF-16'].map((h) => (
                          <th key={h} className="pb-6 text-[10px] font-black uppercase tracking-widest text-gray-400 px-6">{h}</th>
                        ))}
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
                     {[
                       { f: 'Encoding Type', v8: 'Variable (1–4 bytes)', v16: 'Variable (2–4 bytes)' },
                       { f: 'JS Internal Storage', v8: '❌ No', v16: '✅ Yes' },
                       { f: 'Global Web Standard', v8: '✅ Yes (99%)', v16: '❌ Minimal' },
                       { f: 'ASCII Coverage', v8: '1 Byte', v16: '2 Bytes' }
                     ].map((row, i) => (
                       <tr key={i} className="group hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                          <td className="py-6 px-6 text-sm font-black text-gray-900 dark:text-white">{row.f}</td>
                          <td className="py-6 px-6 text-sm font-mono text-violet-500">{row.v8}</td>
                          <td className="py-6 px-6 text-sm font-mono text-emerald-500">{row.v16}</td>
                       </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </section>

      {/* ── 8. Real World Use Cases ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <h2 className="text-4xl font-black mb-16 text-center italic tracking-tighter uppercase underline decoration-violet-500/20 underline-offset-8">Production Deployment</h2>
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Social Comms', detail: 'Advanced emoji support for real-time chat engines.', icon: <MessageSquare className="text-violet-500" /> },
              { title: 'Internationalization', detail: 'Serving content in localized scripts (Tamil, Arabic, etc.).', icon: <Globe className="text-emerald-500" /> },
              { title: 'Global Finance', detail: 'Accurate currency symbols ($ , € , ₹ , ¥) mapping.', icon: <Banknote className="text-amber-500" /> },
              { title: 'Form Resilience', detail: 'Validating and storing user names from all cultures.', icon: <ShieldCheck className="text-rose-500" /> }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[3rem] bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all">
                 <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-gray-900 flex items-center justify-center mb-6 shadow-inner ring-4 ring-transparent hover:ring-violet-500/10 transition-all">
                    {item.icon}
                 </div>
                 <h4 className="text-lg font-black text-gray-900 dark:text-white mb-2 italic leading-none">{item.title}</h4>
                 <p className="text-[10px] font-bold text-gray-500 dark:text-gray-400 leading-relaxed uppercase tracking-tighter italic">{item.detail}</p>
              </div>
            ))}
         </div>
      </section>

      {/* ── 9. Pro Tips ── */}
      <section className="max-w-6xl mx-auto mb-32 space-y-16">
         <div className="relative p-10 lg:p-20 rounded-[4rem] bg-violet-50 dark:bg-violet-900/10 border border-violet-100 dark:border-violet-800/30 overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-10">
               <Binary className="w-48 h-48 text-violet-500" />
            </div>
            <h3 className="text-3xl font-black text-violet-900 dark:text-violet-100 mb-12 flex items-center gap-4">
              <Zap className="text-amber-400 animate-pulse" /> Engineering Mastery
              <span className="text-[10px] font-black text-violet-400 uppercase tracking-[0.3em] ml-auto">EST. 15 YRS</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-12 relative z-10">
               {[
                 { tip: 'Declare UTF-8 in HTML', body: 'Always include <meta charset="UTF-8"> in your index.html to prevent encoding failures.' },
                 { tip: 'Standardize for Emojis', body: 'Always use codePointAt instead of charCodeAt for modern UI components using emojis.' },
                 { tip: 'Watch String Length', body: 'The .length property can return unexpected results (e.g. 2 for 1 emoji) because of surrogate pairs.' },
                 { tip: 'Normalize Inputs', body: 'Use text.normalize() to consolidate identical-looking characters from different sources.' }
               ].map((item, i) => (
                 <div key={i} className="flex gap-6 p-8 rounded-[3rem] bg-white dark:bg-gray-800/50 border border-white dark:border-gray-700 shadow-md">
                    <div className="w-12 h-12 rounded-2xl bg-violet-500 text-white flex items-center justify-center font-black flex-shrink-0 shadow-lg">
                       {i+1}
                    </div>
                    <div>
                       <h5 className="font-black text-gray-900 dark:text-white text-base mb-2 uppercase tracking-tight italic underline decoration-2 underline-offset-4 decoration-violet-500/20">{item.tip}</h5>
                       <p className="text-[11px] text-gray-500 dark:text-gray-400 font-bold leading-relaxed">{item.body}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         {/* ── 10. Common Mistakes ── */}
         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'The charCodeAt Trap', body: 'Attempting to use old legacy methods to parse multi-byte emoji characters.' },
              { title: 'Missing Meta Tags', body: 'Developing a multi-lingual site without specifying the UTF-8 charset meta tag.' },
              { title: 'One Char ≠ One Byte', body: 'Assuming string length or byte storage matches simple character counts.' },
              { title: 'Surrogate Ignoring', body: 'Incorrectly handling string slicing which might cut a surrogate pair in half.' }
            ].map((err, i) => (
              <div key={i} className="p-8 rounded-[2.5rem] bg-rose-50/50 dark:bg-rose-950/20 border-2 border-rose-100 dark:border-rose-900/40 transform hover:scale-[1.05] transition-transform">
                 <div className="text-rose-500 mb-4"><AlertCircle size={32} /></div>
                 <h6 className="text-[10px] font-black text-rose-500 uppercase tracking-widest mb-3">FATAL_ENCODING_ERROR_0{i+1}</h6>
                 <h5 className="font-black text-rose-800 dark:text-rose-100 text-sm mb-2 leading-tight uppercase italic">{err.title}</h5>
                 <p className="text-[10px] text-rose-700/60 dark:text-rose-400 font-bold leading-relaxed">{err.body}</p>
              </div>
            ))}
         </div>
      </section>

      {/* ── Summary Footer ── */}
      <footer className="max-w-6xl mx-auto mb-20">
         <div className="bg-slate-900 p-12 lg:p-20 rounded-[4rem] text-center relative overflow-hidden group shadow-2xl border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <h2 className="text-4xl font-black text-white mb-6 relative z-10 italic uppercase tracking-tighter">Code without Borders</h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-10 font-bold relative z-10 italic leading-relaxed">
              "Mastering UTF-8 is the first step toward building truly global applications. Go beyond ASCII and own the entire Unicode spectrum."
            </p>
            <div className="flex flex-wrap justify-center gap-6 relative z-10">
               <button className="px-12 py-4 bg-violet-500 text-white rounded-full font-black text-[10px] uppercase tracking-[0.2em] hover:scale-105 transition-transform shadow-xl shadow-violet-500/20">Explore Unicode Specs</button>
               <button className="px-12 py-4 border border-slate-700 text-white rounded-full font-black text-[10px] uppercase tracking-[0.2em] hover:bg-slate-800 transition-all">Character Map</button>
            </div>
         </div>
         <p className="text-center text-[10px] font-black text-gray-400 uppercase tracking-[0.8em] mt-20 opacity-20 py-10">Encoding Assessment Layer — KnowGrow Platform v4.0</p>
      </footer>

    </div>
  );
};

export default JsUtf8Characters;