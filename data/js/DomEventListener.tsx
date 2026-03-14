import React, { useState, useRef, useEffect } from 'react';
import {
  Zap, MousePointer2, Keyboard, Trash2, ShieldAlert,
  Info, Activity, Layout, Check, Copy, MoreHorizontal,
  MousePointerClick, RefreshCw, Eye, ArrowUp, ArrowDown,
  Settings, Terminal, Box, PlayCircle
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
    <div className="mb-4 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm relative group w-full">
      {title && (
        <div className="bg-gray-50 dark:bg-gray-800 px-4 py-2 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{title}</span>
          <div className="flex space-x-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-orange-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-rose-400/80"></div>
          </div>
        </div>
      )}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-amber-500 hover:text-white transition-colors border border-gray-700"
          title="Copy code"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono bg-gray-900 text-amber-300 leading-relaxed rounded-b-xl">
        <code>{code}</code>
      </pre>
    </div>
  );
};

const DomEventListener: React.FC = () => {
  // Demo 3: Click
  const [clickText, setClickText] = useState("");
  // Demo 4: Hover
  const [isHovered, setIsHovered] = useState(false);
  // Demo 5-6: Removal
  const [listenerEnabled, setListenerEnabled] = useState(true);
  const [removeAlerts, setRemoveAlerts] = useState<string[]>([]);
  // Demo 7: Inspector
  const [lastEvent, setLastEvent] = useState<{ target: string; type: string } | null>(null);
  // Demo 9: Propagation
  const [propMode, setPropMode] = useState<'bubbling' | 'capturing'>('bubbling');
  const [propLog, setPropLog] = useState<string[]>([]);
  // Demo 10: Counter
  const [count, setCount] = useState(0);

  const handleIdDemo = () => {
    setClickText("Button Clicked!");
  };

  const handleRemovalDemo = () => {
    if (listenerEnabled) {
      setRemoveAlerts(prev => ["Alert: Registration Active", ...prev].slice(0, 3));
    }
  };

  const logPropagation = (level: string) => {
    setPropLog(prev => [`${level} triggered (${propMode})`, ...prev].slice(0, 5));
  };

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-amber-50 to-rose-50 dark:from-gray-900 dark:to-amber-900/10 min-h-screen font-sans">
      
      {/* ── Hero Header ── */}
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-amber-400/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-rose-400/20 rounded-full blur-3xl -z-10 animate-pulse delay-700"></div>
        <div className="inline-flex items-center justify-center p-3.5 bg-gradient-to-br from-amber-500 to-rose-600 rounded-2xl mb-8 shadow-2xl transform hover:scale-110 transition-transform cursor-pointer">
          <Zap className="w-10 h-10 text-white fill-current" />
        </div>
        <h1 className="text-5xl sm:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          DOM Event Listener
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed">
          The ears of your webpage. Learn how to respond to user actions like clicks, keypresses, and movement.
        </p>
      </header>

      {/* ── Section 1-2: Introduction ── */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-stretch">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col justify-center">
          <h2 className="text-3xl font-black flex items-center text-gray-900 dark:text-white mb-6">
            <Info className="w-8 h-8 mr-3 text-amber-500" /> Introduction
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
            A DOM Event Listener is a JavaScript feature that executes a function when a specific user action occurs on an HTML element.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
             <div className="flex items-center gap-3 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-2xl border border-amber-100 dark:border-amber-800">
                <MousePointerClick className="w-5 h-5 text-amber-600" />
                <span className="text-xs font-bold text-gray-700 dark:text-gray-200 uppercase tracking-tighter">Clicking</span>
             </div>
             <div className="flex items-center gap-3 p-3 bg-rose-50 dark:bg-rose-900/20 rounded-2xl border border-rose-100 dark:border-rose-800">
                <Keyboard className="w-5 h-5 text-rose-600" />
                <span className="text-xs font-bold text-gray-700 dark:text-gray-200 uppercase tracking-tighter">Typing</span>
             </div>
          </div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 italic">
            "Event listeners make pages interactive and dynamic. Without them, websites are just static documents."
          </p>
        </div>
        <div className="space-y-4">
           <CodeBlock 
            title="Standard Syntax"
            code={`element.addEventListener(\n  "event", \n  functionName, \n  useCapture\n);`} 
           />
           <div className="bg-gray-900 rounded-3xl p-6 border border-gray-800">
              <div className="flex items-center gap-2 mb-4 text-[10px] font-black text-amber-500 uppercase tracking-widest">
                <Settings size={14} /> Parameter Guide
              </div>
              <div className="grid grid-cols-4 gap-4 text-center">
                 <div className="space-y-1">
                   <div className="text-[10px] text-gray-500 uppercase font-black">Target</div>
                   <div className="text-xs text-white font-mono break-all leading-tight">element</div>
                 </div>
                 <div className="space-y-1">
                   <div className="text-[10px] text-gray-500 uppercase font-black">Type</div>
                   <div className="text-xs text-amber-400 font-mono italic">"click"</div>
                 </div>
                 <div className="space-y-1">
                   <div className="text-[10px] text-gray-500 uppercase font-black">Logic</div>
                   <div className="text-xs text-rose-400 font-mono">callback</div>
                 </div>
                 <div className="space-y-1">
                   <div className="text-[10px] text-gray-500 uppercase font-black">Phase</div>
                   <div className="text-xs text-gray-400 font-mono">false</div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 3: Click Event Demo ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-[3rem] p-10 lg:p-16 shadow-sm border border-gray-100 dark:border-gray-700 text-center">
           <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-6">Button Click Lab</h2>
           <p className="text-gray-500 dark:text-gray-400 mb-12 font-medium max-w-2xl mx-auto">
             Selecting an element and attaching a listener that modifies the DOM content on every interaction.
           </p>
           
           <div className="flex flex-col items-center gap-8 mb-12">
              <button 
                id="myButton"
                onClick={handleIdDemo}
                className="group relative px-10 py-5 bg-gradient-to-br from-amber-500 to-rose-600 text-white rounded-[2rem] font-black text-lg shadow-2xl shadow-rose-500/30 active:scale-95 transition-all overflow-hidden"
              >
                 <span className="relative z-10 flex items-center gap-3">
                   <MousePointerClick size={24} className="group-hover:rotate-12 transition-transform" /> Click Me
                 </span>
                 <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              
              <div className="min-h-[40px] px-8 py-3 bg-rose-50 dark:bg-rose-900/10 border-2 border-dashed border-rose-200 dark:border-rose-900/50 rounded-2xl flex items-center justify-center">
                 <p className="text-rose-600 dark:text-rose-400 font-black tracking-tight text-xl animate-in fade-in zoom-in duration-300">
                    {clickText || <span className="opacity-20 uppercase text-sm tracking-widest">Waiting for click...</span>}
                 </p>
              </div>
           </div>

           <CodeBlock 
             title="Implementation Script"
             code={`document.getElementById("myButton")\n.addEventListener("click", function() {\n    document.getElementById("demo").innerHTML = "Button Clicked!";\n});`} 
           />
        </div>
      </section>

      {/* ── Section 4: Hover Event Demo ── */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-12 items-center">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-gray-700 h-full flex flex-col justify-center">
           <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-6 flex items-center gap-3">
             <MousePointer2 className="text-rose-500" /> Mouse Hover Interaction
           </h3>
           <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
             React to the mouse cursor entering the boundaries of an element using the <code className="text-rose-500 font-bold">mouseover</code> event.
           </p>
           <CodeBlock 
             title="Hover Script"
             code={`box.addEventListener("mouseover", function() {\n    this.style.backgroundColor = "rose";\n});`} 
           />
        </div>
        
        <div className="flex flex-col items-center justify-center">
           <div 
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
             className={`w-[280px] h-[180px] rounded-[3rem] shadow-2xl transition-all duration-700 flex flex-col items-center justify-center text-center p-8 group cursor-help ${
               isHovered 
               ? 'bg-rose-600 scale-105 shadow-rose-500/40 rotate-1' 
               : 'bg-amber-400 shadow-amber-500/20 -rotate-1'
             }`}
           >
              <MousePointer2 size={48} className={`mb-4 transition-all duration-500 ${isHovered ? 'text-white rotate-45 scale-125' : 'text-amber-900/50'}`} />
              <h4 className={`text-xl font-black transition-colors ${isHovered ? 'text-white' : 'text-amber-900'}`}>
                {isHovered ? "Dynamic Rose!" : "Hover Over Me"}
              </h4>
              <p className={`text-[10px] font-bold uppercase tracking-widest mt-2 ${isHovered ? 'text-rose-200' : 'text-amber-800/40'}`}>
                Event: mouseover
              </p>
           </div>
        </div>
      </section>

      {/* ── Section 5-6: Multiple & Removal ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gray-900 rounded-[3rem] p-8 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-10 text-amber-500 group-hover:rotate-12 transition-transform duration-1000">
             <Trash2 size={240} />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-black text-white mb-8 flex items-center">
              <Settings className="w-8 h-8 mr-4 text-amber-400" /> Listener Lifecycle
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12">
               <div className="space-y-6">
                  <p className="text-gray-400 font-medium text-lg leading-relaxed italic">
                    "Sometimes you need to register multiple reactions to one trigger, or clean up your listeners to prevent memory leaks."
                  </p>
                  <CodeBlock 
                    title="Removing Event"
                    code={`element.removeEventListener(\n  "click", \n  myFunction\n);`} 
                  />
               </div>
               
               <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                     <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${listenerEnabled ? 'text-amber-400' : 'text-gray-500'}`}>
                       Status: {listenerEnabled ? 'Active' : 'Destroyed'}
                     </span>
                     <button 
                       onClick={() => setListenerEnabled(!listenerEnabled)}
                       className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase border transition-all ${
                         listenerEnabled 
                         ? 'border-gray-700 text-gray-500 hover:text-white' 
                         : 'border-amber-500 bg-amber-500 text-black'
                       }`}
                     >
                       {listenerEnabled ? 'Destroy Listener' : 'Register Listener'}
                     </button>
                  </div>
                  
                  <button 
                    onClick={handleRemovalDemo}
                    className={`w-full py-5 rounded-2xl font-black text-sm transition-all flex items-center justify-center gap-3 ${
                      listenerEnabled 
                      ? 'bg-amber-500 hover:bg-amber-600 text-black shadow-xl shadow-amber-500/20 active:scale-95' 
                      : 'bg-gray-800 text-gray-600 cursor-not-allowed border border-white/5'
                    }`}
                  >
                    <PlayCircle size={20} /> Execute Logic
                  </button>
                  
                  <div className="flex flex-col gap-2 min-h-[120px]">
                    {removeAlerts.map((msg, i) => (
                      <div key={i} className="px-4 py-2 bg-white/5 border border-white/5 text-xs text-amber-300/60 rounded-xl animate-in slide-in-from-right-2">
                        {msg}
                      </div>
                    ))}
                    {removeAlerts.length === 0 && (
                      <div className="flex-1 flex flex-col items-center justify-center text-gray-600 text-[10px] uppercase font-bold tracking-widest">
                        No alerts intercepted
                      </div>
                    )}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 8: Common Events Grid ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-8 flex items-center">
           <Activity className="text-rose-500 w-8 h-8 mr-4" /> Common Event Types
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
           {[
             { title: "click", desc: "User single clicks", icon: <MousePointerClick size={16} /> },
             { title: "dblclick", desc: "User double clicks", icon: <MousePointer2 size={16} /> },
             { title: "keydown", desc: "Keyboard key pressed", icon: <Keyboard size={16} /> },
             { title: "submit", desc: "Form is submitted", icon: <ShieldAlert size={16} /> },
             { title: "change", desc: "Input value updated", icon: <RefreshCw size={16} /> },
             { title: "mouseover", desc: "Entering an element", icon: <Eye size={16} /> },
             { title: "mouseout", desc: "Leaving an element", icon: <Eye size={16} className="opacity-40" /> },
             { title: "keyup", desc: "Key released", icon: <Keyboard size={16} className="rotate-180" /> }
           ].map((ev, i) => (
             <div key={i} className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-amber-400 transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 flex items-center justify-center text-gray-400 group-hover:text-amber-500 mb-4 transition-colors">
                  {ev.icon}
                </div>
                <h4 className="text-sm font-black text-gray-900 dark:text-white mb-1 font-mono tracking-tighter italic">{ev.title}</h4>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tight">{ev.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* ── Section 9: Event Propagation ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-[3rem] p-8 lg:p-12 shadow-sm border border-gray-100 dark:border-gray-700">
           <div className="flex flex-col lg:flex-row gap-12">
              <div className="flex-1">
                 <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">Event Propagation</h2>
                 <p className="text-gray-600 dark:text-gray-400 font-medium mb-8">
                   Determines how events move through the DOM tree. Bubbling (Up) vs Capturing (Down).
                 </p>
                 
                 <div className="flex gap-4 mb-8">
                   <button 
                     onClick={() => setPropMode('bubbling')}
                     className={`flex-1 p-4 rounded-3xl border-2 transition-all flex flex-col items-center gap-2 ${
                       propMode === 'bubbling' ? 'bg-amber-500 border-amber-600 shadow-lg scale-105' : 'bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800 opacity-60'
                     }`}
                   >
                     <ArrowUp size={24} className={propMode === 'bubbling' ? 'text-black animate-bounce' : 'text-gray-400'} />
                     <span className={`text-[10px] font-black uppercase tracking-widest ${propMode === 'bubbling' ? 'text-black' : 'text-gray-500'}`}>Bubbling</span>
                   </button>
                   <button 
                     onClick={() => setPropMode('capturing')}
                     className={`flex-1 p-4 rounded-3xl border-2 transition-all flex flex-col items-center gap-2 ${
                       propMode === 'capturing' ? 'bg-rose-500 border-rose-600 shadow-lg scale-105' : 'bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800 opacity-60'
                     }`}
                   >
                     <ArrowDown size={24} className={propMode === 'capturing' ? 'text-white animate-bounce' : 'text-gray-400'} />
                     <span className={`text-[10px] font-black uppercase tracking-widest ${propMode === 'capturing' ? 'text-white' : 'text-gray-500'}`}>Capturing</span>
                   </button>
                 </div>
                 
                 <div className="bg-gray-900 rounded-2xl p-4 min-h-[160px] font-mono text-[10px]">
                    <div className="flex items-center gap-2 mb-4 text-gray-500 border-b border-white/5 pb-2 uppercase font-black">
                      <Terminal size={12} /> Propagation Log
                    </div>
                    {propLog.length === 0 && <div className="text-gray-700 italic">Click the visualizer components to see results...</div>}
                    {propLog.map((log, i) => (
                      <div key={i} className="mb-1 text-emerald-400/90 leading-tight">
                        <span className="text-gray-600 pr-2">[{new Date().toLocaleTimeString().split(' ')[0]}]</span> 
                        {log}
                      </div>
                    ))}
                 </div>
              </div>

              <div className="flex-1 flex flex-col items-center justify-center">
                 <div 
                   onClick={() => logPropagation('Parent Div')}
                   className="w-[280px] h-[220px] bg-gray-100 dark:bg-gray-900 rounded-[2.5rem] border border-gray-200 dark:border-gray-800 p-8 flex flex-col items-center justify-center gap-6 relative group cursor-pointer"
                 >
                    <div className="absolute top-4 text-[10px] font-black text-gray-400 rotate-0">PARENT LAYER</div>
                    <button 
                      onClick={(e) => {
                         if (propMode === 'capturing') {
                           // Technical simulation of capturing logic in React is complex,
                           // we visually mock the order for student understanding
                         }
                         logPropagation('Child Button');
                         // React stops propagation by default if needed, here we let it flow
                      }}
                      className="px-8 py-3 bg-white dark:bg-gray-800 text-amber-600 rounded-xl font-black text-xs border border-amber-500/20 shadow-xl group-hover:scale-110 transition-transform"
                    >
                      NESTED CHILD
                    </button>
                 </div>
                 <p className="mt-8 text-xs text-gray-400 italic text-center leading-relaxed">
                   In <strong className="text-amber-500">Bubbling</strong>, child triggers first. <br/>
                   In <strong className="text-rose-500">Capturing</strong>, parent triggers first.
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 10: Interactive Project (Counter) ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-rose-600 to-amber-600 rounded-[3rem] p-10 lg:p-16 text-white shadow-2xl relative overflow-hidden group">
           <Activity className="absolute bottom-[-20%] right-[-5%] w-[400px] h-[400px] text-white/5 rotate-12" />
           
           <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
              <h2 className="text-4xl font-black mb-8">Real-World Application: Counter</h2>
              <p className="text-rose-100 font-bold mb-12 tracking-wide text-lg">
                Attaching permanent click listeners to manage application state.
              </p>
              
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-12 rounded-[3.5rem] flex flex-col items-center gap-8 min-w-[320px] shadow-2xl">
                 <div className="text-sm font-black uppercase tracking-[0.3em] opacity-60">Current Count</div>
                 <div className="text-[120px] font-black leading-none drop-shadow-lg tabular-nums">
                   {count}
                 </div>
                 
                 <div className="flex gap-4">
                    <button 
                      onClick={() => setCount(prev => prev + 1)}
                      className="group px-10 py-5 bg-white text-rose-600 rounded-[2rem] font-black text-xl flex items-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-black/10"
                    >
                       <Zap size={24} className="fill-current" /> Increase
                    </button>
                    <button 
                      onClick={() => setCount(0)}
                      className="p-5 bg-rose-900/40 text-rose-100 rounded-[2rem] hover:bg-rose-900/60 transition-all active:scale-95 border border-white/5"
                    >
                      <RefreshCw size={24} />
                    </button>
                 </div>
              </div>

              <div className="mt-12 max-w-xl">
                 <CodeBlock 
                   title="Interaction Logic"
                   code={`let count = 0;\nbtn.addEventListener("click", function() {\n    count++;\n    display.innerHTML = count;\n});`} 
                 />
              </div>
           </div>
        </div>
      </section>

      {/* Footer Branding */}
      <footer className="max-w-4xl mx-auto text-center py-20 opacity-40">
        <div className="flex items-center justify-center gap-3 mb-4 font-black text-gray-500 dark:text-gray-400 uppercase tracking-tighter text-3xl">
          <Zap className="w-8 h-8 fill-current opacity-50" />
          KNOWGROW Hub
        </div>
        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-amber-300 dark:via-amber-600 to-transparent mx-auto mb-4"></div>
        <p className="text-base font-bold text-gray-400 dark:text-gray-500 tracking-wide uppercase">Interactive Web Interaction Specialist</p>
      </footer>

    </div>
  );
};

export default DomEventListener;