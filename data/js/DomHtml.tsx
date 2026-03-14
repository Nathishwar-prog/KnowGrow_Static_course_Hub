import React, { useState } from 'react';
import {
  FileCode, Type, Link, Image as ImageIcon, 
  Edit3, Sparkles, Info, Settings, Terminal, 
  Layout, Check, Copy, RefreshCw, Eye, 
  MousePointer2, ExternalLink, User, Camera,
  Code, Zap, Layers, Wrench
} from 'lucide-react';

// ─── Code Block Component ─────────────────────────────────────────────────────
const CodeBlock = ({ code, title }: { code: string; title?: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <div className="mb-4 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm relative group w-full">
      {title && (
        <div className="bg-slate-50 dark:bg-slate-800 px-4 py-2 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{title}</span>
          <div className="flex space-x-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-teal-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400/80"></div>
          </div>
        </div>
      )}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-md bg-slate-800 text-slate-400 hover:bg-emerald-500 hover:text-white transition-colors border border-slate-700"
          title="Copy code"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono bg-slate-900 text-emerald-300 leading-relaxed rounded-b-xl">
        <code>{code}</code>
      </pre>
    </div>
  );
};

const DomHtml: React.FC = () => {
  // Section 2: Content Lab
  const [contentMode, setContentMode] = useState<'innerHTML' | 'innerText' | 'textContent'>('innerHTML');
  const [rawText, setRawText] = useState("Hello <b>World</b>!");

  const getContentResult = () => {
    if (contentMode === 'innerHTML') return rawText;
    if (contentMode === 'innerText') return rawText.replace(/<[^>]*>?/gm, ''); // Simplified strip for demo
    return rawText; // textContent usually keeps raw tags as text
  };

  // Section 3: Attribute Sandbox
  const [imgUrl, setImgUrl] = useState("https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=200");
  const [linkHref, setLinkHref] = useState("https://google.com");

  // Section 6: Profile Preview
  const [profName, setProfName] = useState("Karthick");
  const [profBio, setProfBio] = useState("Frontend Developer & UI Enthusiast");
  const [profColor, setProfColor] = useState("#10b981");

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-slate-900 dark:to-emerald-900/10 min-h-screen font-sans">
      
      {/* ── Hero Header ── */}
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-emerald-400/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl -z-10 animate-pulse delay-700"></div>
        <div className="inline-flex items-center justify-center p-3.5 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl mb-8 shadow-2xl transform hover:rotate-3 transition-transform cursor-pointer">
          <FileCode className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-5xl sm:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
          DOM HTML
        </h1>
        <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed">
          The art of dynamic structure. Learn how to transform page content and element behavior in real-time.
        </p>
      </header>

      {/* ── Section 1: Introduction ── */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-stretch">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col justify-center">
          <h2 className="text-3xl font-black flex items-center text-slate-900 dark:text-white mb-6">
            <Sparkles className="w-8 h-8 mr-3 text-emerald-500" /> Structure Control
          </h2>
          <p className="text-slate-700 dark:text-slate-300 mb-6 text-lg leading-relaxed">
            The HTML DOM allows JavaScript to change the <span className="text-emerald-500 font-bold underline decoration-wavy underline-offset-4">content</span> and <span className="text-teal-500 font-bold underline decoration-wavy underline-offset-4">attributes</span> of HTML elements.
          </p>
          <div className="grid grid-cols-2 gap-4">
             <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800">
                <Type className="w-6 h-6 text-emerald-600 mb-2" />
                <h4 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-tighter">Content</h4>
                <p className="text-[10px] text-slate-500 leading-tight">Change inner text, HTML tags, and nested structures.</p>
             </div>
             <div className="p-4 bg-teal-50 dark:bg-teal-900/20 rounded-2xl border border-teal-100 dark:border-teal-800">
                <Settings className="w-6 h-6 text-teal-600 mb-2" />
                <h4 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-tighter">Attributes</h4>
                <p className="text-[10px] text-slate-500 leading-tight">Update src, href, class, id, and custom data-attrs.</p>
             </div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-[2.5rem] p-8 border border-slate-800 flex flex-col">
           <div className="flex items-center gap-2 mb-6 text-[10px] font-black text-emerald-500 uppercase tracking-[0.2em]">
             <Terminal size={14} /> Core Syntax
           </div>
           <CodeBlock 
             title="Content Manipulation"
             code={`document.getElementById("p1").innerHTML = "New text!";\ndocument.getElementById("img1").src = "landscape.jpg";`} 
           />
           <div className="mt-auto p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
              <p className="text-xs text-emerald-300 font-medium leading-relaxed italic">
                "JavaScript is to HTML what an architect is to a building site—constantly rearranging the bricks."
              </p>
           </div>
        </div>
      </section>

      {/* ── Section 2: Content Lab ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-slate-800 rounded-[3rem] p-10 lg:p-16 shadow-sm border border-slate-100 dark:border-slate-700 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400/5 rounded-full blur-[100px] -z-10"></div>
           
           <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                 <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6">Content Lab</h2>
                 <p className="text-slate-500 dark:text-slate-400 mb-8 font-medium leading-relaxed italic">
                    Understand the subtle differences between innerHTML, innerText, and textContent.
                 </p>
                 
                 <div className="flex flex-wrap gap-2 mb-6">
                    {['innerHTML', 'innerText', 'textContent'].map((mode) => (
                      <button
                        key={mode}
                        onClick={() => setContentMode(mode as any)}
                        className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                          contentMode === mode 
                          ? 'bg-emerald-600 text-white shadow-lg' 
                          : 'bg-slate-100 dark:bg-slate-700 text-slate-400 dark:text-slate-500 hover:bg-emerald-100 hover:text-emerald-600'
                        }`}
                      >
                        {mode}
                      </button>
                    ))}
                 </div>

                 <div className="space-y-4">
                    <div className="relative group">
                       <Edit3 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                       <input 
                         type="text" 
                         value={rawText}
                         onChange={(e) => setRawText(e.target.value)}
                         className="w-full h-14 bg-slate-50 dark:bg-slate-900 rounded-2xl pl-12 pr-4 border-2 border-slate-100 dark:border-slate-700 outline-none focus:border-emerald-500 font-bold transition-all text-sm"
                         placeholder="Enter text with <b>tags</b>"
                       />
                    </div>
                    <div className="p-6 bg-slate-900 rounded-3xl border border-white/5 font-mono text-xs overflow-x-auto whitespace-pre">
                       <span className="text-slate-500">{"// Result: "}</span>
                       {contentMode === 'innerHTML' && <span className="text-emerald-400" dangerouslySetInnerHTML={{ __html: rawText }} />}
                       {contentMode === 'innerText' && <span className="text-sky-400">{rawText.replace(/<[^>]*>?/gm, '')}</span>}
                       {contentMode === 'textContent' && <span className="text-amber-400">{rawText}</span>}
                    </div>
                 </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-inner">
                 <div className="flex items-center gap-3 mb-6">
                    <Layers className="text-emerald-500" />
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Property Inspector</span>
                 </div>
                 <div className="space-y-6">
                    <div className="flex justify-between items-center pb-4 border-b border-slate-200 dark:border-slate-800">
                       <span className="text-xs font-bold text-slate-500">Parses HTML tags?</span>
                       <span className={contentMode === 'innerHTML' ? 'text-emerald-500 font-black' : 'text-slate-400 font-black'}>
                          {contentMode === 'innerHTML' ? 'YES' : 'NO'}
                       </span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-slate-200 dark:border-slate-800">
                       <span className="text-xs font-bold text-slate-500">Ignores hidden text?</span>
                       <span className={contentMode === 'innerText' ? 'text-emerald-500 font-black' : 'text-slate-400 font-black'}>
                          {contentMode === 'innerText' ? 'YES' : 'NO'}
                       </span>
                    </div>
                    <div className="flex justify-between items-center">
                       <span className="text-xs font-bold text-slate-500">Security Risk?</span>
                       <span className={contentMode === 'innerHTML' ? 'text-rose-500 font-black' : 'text-emerald-500 font-black'}>
                          {contentMode === 'innerHTML' ? 'HIGH (XSS)' : 'LOW'}
                       </span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 3-5: Attribute Labs ── */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-stretch">
        {/* Attribute vs Property */}
        <div className="bg-emerald-600 rounded-[3rem] p-10 lg:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col justify-center transform hover:scale-[1.01] transition-all">
           <Zap className="absolute top-[-5%] right-[-5%] w-64 h-64 text-white/5 -rotate-12" />
           <h2 className="text-3xl font-black mb-6 flex items-center gap-3 relative z-10">
             <Code className="w-8 h-8" /> Attributes vs Properties
           </h2>
           <p className="text-emerald-100 font-medium mb-8 text-lg leading-relaxed relative z-10">
             Attributes are defined in HTML, while properties are defined in the DOM. Most map 1:1, but some differ!
           </p>
           <div className="grid grid-cols-2 gap-4 relative z-10">
              <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                 <p className="text-[10px] font-black uppercase mb-1">HTML Attribute</p>
                 <code className="text-xs text-emerald-200 block">class="btn"</code>
              </div>
              <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                 <p className="text-[10px] font-black uppercase mb-1">DOM Property</p>
                 <code className="text-xs text-emerald-200 block">className = "btn"</code>
              </div>
           </div>
           <div className="mt-8 relative z-10">
              <CodeBlock 
                title="Direct property access"
                code={`element.id = "main";\nelement.src = "pic.jpg";`} 
              />
           </div>
        </div>

        {/* Live Attribute Sandbox */}
        <div className="bg-white dark:bg-slate-800 rounded-[3rem] p-10 border border-slate-100 dark:border-slate-700 flex flex-col shadow-sm">
           <div className="flex items-center gap-2 mb-8 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
             <Wrench size={14}/> Dynamic Modifier
           </div>
           
           <div className="space-y-8 flex-1">
              <div className="space-y-4">
                 <div className="flex items-center justify-between">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-tighter">Image Source</label>
                    <div className="flex gap-2">
                       <button onClick={() => setImgUrl("https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=200")} className="p-1 px-3 bg-slate-100 dark:bg-slate-900 rounded-lg text-[8px] font-black hover:bg-emerald-500 hover:text-white transition-colors">REACT</button>
                       <button onClick={() => setImgUrl("https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=200")} className="p-1 px-3 bg-slate-100 dark:bg-slate-900 rounded-lg text-[8px] font-black hover:bg-teal-500 hover:text-white transition-colors">CODE</button>
                    </div>
                 </div>
                 <div className="relative group p-4 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 flex items-center gap-6 overflow-hidden">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg shrink-0 scale-hover">
                       <img src={imgUrl} key={imgUrl} alt="Preview" className="w-full h-full object-cover animate-in fade-in zoom-in-75 duration-500" />
                    </div>
                    <div className="flex-1 space-y-2 truncate">
                       <p className="text-[10px] font-black text-emerald-500 uppercase">DOM STATE</p>
                       <code className="text-[10px] font-mono text-slate-400 block truncate">img.src = "{imgUrl.substring(0, 30)}..."</code>
                    </div>
                 </div>
              </div>

              <div className="space-y-4">
                 <div className="flex items-center justify-between">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-tighter">Link Destination</label>
                    <div className="flex gap-2">
                       <button onClick={() => setLinkHref("https://react.dev")} className="p-1 px-3 bg-slate-100 dark:bg-slate-900 rounded-lg text-[8px] font-black hover:bg-emerald-500 hover:text-white transition-colors">DOCS</button>
                       <button onClick={() => setLinkHref("https://github.com")} className="p-1 px-3 bg-slate-100 dark:bg-slate-900 rounded-lg text-[8px] font-black hover:bg-teal-500 hover:text-white transition-colors">GITHUB</button>
                    </div>
                 </div>
                 <a 
                   href={linkHref} 
                   target="_blank" 
                   rel="noreferrer"
                   className="flex items-center justify-center gap-3 w-full py-4 px-6 bg-slate-900 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-emerald-600 transition-all group"
                 >
                    Visitor Link <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                 </a>
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 6: Direct vs setAttribute ── */}
      <section className="max-w-6xl mx-auto mb-16 h-[180px] flex items-center justify-center">
         <div className="text-center group cursor-help">
            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4 italic group-hover:text-emerald-500 transition-colors">Two Ways to Manipulate</h2>
            <div className="flex items-center justify-center gap-12 mt-8">
               <div className="text-center">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Direct Access</p>
                  <code className="text-xs font-mono bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400 p-2 px-4 rounded-xl">el.src = val;</code>
               </div>
               <div className="h-10 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block"></div>
               <div className="text-center">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Standard Method</p>
                  <code className="text-xs font-mono bg-teal-50 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400 p-2 px-4 rounded-xl">el.setAttribute('src', val);</code>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 7: Real-World Example (Profile Preview) ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-teal-500 to-emerald-700 rounded-[4rem] p-10 lg:p-20 text-white shadow-3xl relative overflow-hidden">
           <User className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] text-white/5 -rotate-12" />
           <Sparkles className="absolute top-10 right-10 w-20 h-20 text-white/10 animate-spin-slow" />
           
           <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
              <div>
                 <h2 className="text-5xl font-black mb-8 leading-tight">Dynamic Profile Builder</h2>
                 <p className="text-teal-50 font-medium mb-12 text-xl leading-relaxed">
                   Witness the true power of DOM HTML: building complex, reactive user interfaces with direct property binding.
                 </p>
                 <div className="space-y-6">
                    <div className="flex items-center gap-6 p-5 bg-white/10 rounded-[2rem] border border-white/10 backdrop-blur-md">
                       <div className="w-12 h-12 bg-emerald-400/20 rounded-2xl flex items-center justify-center">
                          <ImageIcon className="text-emerald-300" />
                       </div>
                       <div>
                          <p className="text-xs font-black uppercase tracking-widest">Image Persistence</p>
                          <p className="text-[10px] text-teal-100">Updates avatar src in real-time.</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-6 p-5 bg-white/10 rounded-[2rem] border border-white/10 backdrop-blur-md">
                       <div className="w-12 h-12 bg-emerald-400/20 rounded-2xl flex items-center justify-center">
                          <Type className="text-emerald-300" />
                       </div>
                       <div>
                          <p className="text-xs font-black uppercase tracking-widest">Textual Binding</p>
                          <p className="text-[10px] text-teal-100">Maps input strings to h3.innerHTML.</p>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="relative">
                 {/* Card Background Decoration */}
                 <div className="absolute -inset-4 bg-white/20 blur-2xl rounded-[3.5rem]"></div>
                 
                 <div className="relative bg-white rounded-[3.5rem] p-8 lg:p-12 shadow-2xl text-slate-900 border border-white">
                    <div className="flex flex-col items-center text-center mb-10">
                       <div className="w-32 h-32 rounded-full border-4 border-emerald-500/20 p-2 mb-6 relative">
                          <img 
                            src={`https://ui-avatars.com/api/?name=${profName}&background=f0fdf4&color=10b981&size=200`} 
                            alt="Avatar" 
                            className="w-full h-full rounded-full object-cover transition-all" 
                          />
                          <div className="absolute bottom-1 right-1 p-2 bg-emerald-500 rounded-full text-white shadow-lg">
                             <Camera size={16} />
                          </div>
                       </div>
                       <h3 className="text-3xl font-black text-slate-900 transition-all" style={{ color: profColor }}>{profName || 'New User'}</h3>
                       <p className="text-sm font-bold text-slate-400 mt-1 max-w-[200px] leading-relaxed italic">{profBio || 'Set your professional bio...'}</p>
                    </div>

                    <div className="space-y-6">
                       <div className="space-y-1">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Update Name</label>
                          <div className="relative">
                             <User size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
                             <input 
                               value={profName}
                               onChange={(e) => setProfName(e.target.value)}
                               className="w-full h-12 bg-slate-50 rounded-2xl pl-10 pr-4 text-sm font-bold border border-slate-100 outline-none focus:border-emerald-500 transition-colors"
                             />
                          </div>
                       </div>
                       <div className="space-y-1">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Modify Bio</label>
                          <input 
                            value={profBio}
                            onChange={(e) => setProfBio(e.target.value)}
                            className="w-full h-12 bg-slate-50 rounded-2xl px-4 text-sm font-bold border border-slate-100 outline-none focus:border-emerald-500 transition-colors"
                          />
                       </div>
                       <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                          <div className="flex-1 h-px bg-slate-100"></div>
                          <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Live State</span>
                          <div className="flex gap-2">
                             {['#10b981', '#06b6d4', '#6366f1'].map((c) => (
                               <button 
                                 key={c}
                                 onClick={() => setProfColor(c)}
                                 className="w-6 h-6 rounded-full border-2 border-white shadow-sm transition-transform hover:scale-125"
                                 style={{ backgroundColor: c }}
                               />
                             ))}
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Footer Branding */}
      <footer className="max-w-4xl mx-auto text-center py-20 opacity-40">
        <div className="flex items-center justify-center gap-3 mb-4 font-black text-slate-500 dark:text-slate-400 uppercase tracking-tighter text-3xl">
          <Sparkles className="w-8 h-8 opacity-50" />
          KNOWGROW Hub
        </div>
        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-emerald-300 dark:via-emerald-600 to-transparent mx-auto mb-4"></div>
        <p className="text-base font-bold text-slate-400 dark:text-slate-500 tracking-wide uppercase italic">The Document Object Model Specialist</p>
      </footer>

    </div>
  );
};

export default DomHtml;