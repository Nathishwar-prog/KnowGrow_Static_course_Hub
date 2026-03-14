import React, { useState } from 'react';
import {
  Palette, Type, Settings, Zap, EyeOff, Layout, Copy, Check,
  Activity, Monitor, Plus, Minus, ToggleLeft, RefreshCw,
  CheckCircle, Globe, Terminal, MousePointer2, Box, Info, Layers, AlertCircle
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
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{title}</span>
          <div className="flex space-x-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-purple-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-pink-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-orange-400/80"></div>
          </div>
        </div>
      )}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-purple-500 hover:text-white transition-colors border border-gray-700"
          title="Copy code"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono bg-gray-900 text-purple-300 leading-relaxed rounded-b-xl">
        <code>{code}</code>
      </pre>
    </div>
  );
};

const DomCss: React.FC = () => {
  const [boxStyles, setBoxStyles] = useState({
    backgroundColor: 'rgba(168, 85, 247, 0.2)',
    width: '100px',
    height: '100px',
    color: '#3b82f6',
    display: 'flex'
  });

  const toggleVisibility = () => {
    setBoxStyles(prev => ({
      ...prev,
      display: prev.display === 'none' ? 'flex' : 'none'
    }));
  };

  const changeBoxColor = () => {
    setBoxStyles(prev => ({
      ...prev,
      backgroundColor: `hsl(${Math.random() * 360}, 70%, 50%)`
    }));
  };

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-900/10 min-h-screen font-sans">
      
      {/* ── Hero Header ── */}
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 left-1/4 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-pink-400/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl mb-6 shadow-xl transform hover:rotate-6 transition-transform cursor-default">
          <Palette className="w-8 h-8 text-white fill-current" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          DOM CSS Styling
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          The art of dynamic layout. Manipulate styles, switch themes, and create interactive interfaces using JavaScript's style interface.
        </p>
      </header>

      {/* ── Section 1: What is DOM CSS? ── */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-center">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <Info className="w-6 h-6 mr-3 text-purple-500" /> What is DOM CSS?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            The <strong className="text-purple-600 dark:text-purple-400">DOM CSS</strong> interface allows JavaScript to access and modify CSS properties of HTML elements dynamically.
          </p>
          <div className="bg-purple-50 dark:bg-purple-900/10 p-5 rounded-2xl border-l-4 border-purple-500">
             <h4 className="text-[10px] font-black text-purple-500 uppercase tracking-widest mb-2">Simple Definition</h4>
             <p className="text-sm font-bold text-gray-800 dark:text-gray-200 leading-snug">
               DOM CSS is the technique of manipulating CSS styles of HTML elements using JavaScript through the DOM.
             </p>
          </div>
        </div>
        <div className="w-full">
          <CodeBlock 
            title="Style Manipulation Access"
            code={`// Access CSS using the style object
element.style.property = "value";`} 
          />
        </div>
      </section>

      {/* ── Section 2: Why DOM CSS is Used ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-2 flex items-center">
            <Activity className="text-purple-500 w-8 h-8 mr-4" /> Why Use DOM CSS?
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-medium mb-10 border-b border-gray-100 dark:border-gray-700 pb-6">
            It is essential for creating interactive and dynamic web pages that respond to user needs.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Dynamic Styling", desc: "Change styles during runtime", icon: <RefreshCw className="text-purple-500" /> },
              { title: "Interactive UI", desc: "Respond to user actions", icon: <MousePointer2 className="text-pink-500" /> },
              { title: "Animation Effects", desc: "Visual transitions", icon: <Zap className="text-orange-500" /> },
              { title: "Theme Switching", desc: "Light/Dark mode support", icon: <Monitor className="text-indigo-500" /> }
            ].map((benefit, i) => (
              <div key={i} className="p-6 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-700 transition-all hover:translate-y-[-4px]">
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-1 leading-tight">{benefit.title}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4 & 5: Live Stylist Sandbox ── */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white">
            Accessing & Changing Styles
          </h2>
          <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
            JavaScript accesses CSS properties using the <code className="text-purple-500 font-bold">style</code> property of an element.
          </p>
          <CodeBlock 
            title="Single Property Example"
            code={`// Change text color
document.getElementById("text")
  .style.color = "blue";`} 
          />
          <CodeBlock 
            title="Multiple Property Example"
            code={`let element = document.getElementById("box");

element.style.backgroundColor = "yellow";
element.style.width = "200px";
element.style.height = "100px";`} 
          />
        </div>

        {/* Live CSS Sandbox */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-[2rem] shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden relative">
          <div className="absolute top-4 right-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">
            Live Sandbox
          </div>
          <h4 className="text-sm font-black text-gray-800 dark:text-white mb-8 flex items-center gap-2">
            <Settings className="w-4 h-4 text-purple-500" /> Style Interaction
          </h4>
          
          <div className="flex flex-col items-center gap-10">
            {/* The Target Element */}
            <div 
              style={{
                backgroundColor: boxStyles.backgroundColor,
                width: boxStyles.width,
                height: boxStyles.height,
                display: boxStyles.display,
                color: boxStyles.color
              }}
              className="rounded-2xl shadow-lg shadow-purple-500/10 transition-all duration-300 flex items-center justify-center border-4 border-white dark:border-gray-700 text-center font-bold p-4"
            >
              <span className={boxStyles.display === 'none' ? 'hidden' : 'block text-xs uppercase'}>
                {boxStyles.backgroundColor.startsWith('hsl') ? 'Dynamic Style!' : 'Box Element'}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 w-full">
              <button 
                onClick={changeBoxColor}
                className="flex items-center justify-center gap-2 p-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold text-xs transition-all shadow-lg shadow-purple-500/20 active:scale-95"
              >
                <Palette size={14} /> Random Color
              </button>
              <button 
                onClick={toggleVisibility}
                className="flex items-center justify-center gap-2 p-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-xl font-bold text-xs transition-all active:scale-95"
              >
                {boxStyles.display === 'none' ? <Plus size={14} /> : <EyeOff size={14} />} {boxStyles.display === 'none' ? 'Show Box' : 'Hide Box'}
              </button>
            </div>
            
            <div className="w-full space-y-2 mt-4">
              <p className="text-[10px] font-black uppercase text-gray-400 tracking-wider">Applied Properties:</p>
              <div className="bg-gray-50 dark:bg-gray-900 font-mono text-[10px] p-3 rounded-lg border border-gray-100 dark:border-gray-800 text-purple-600 dark:text-purple-400">
                <div>backgroundColor: "{boxStyles.backgroundColor}"</div>
                <div>display: "{boxStyles.display}"</div>
                <div>width: "{boxStyles.width}"</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 7: CamelCase Naming Convention ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-purple-900 to-indigo-950 rounded-3xl p-8 lg:p-12 text-white shadow-2xl relative border border-purple-800/50 overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
             <Terminal className="w-72 h-72" />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-black mb-6 flex items-center">
              <Type className="w-8 h-8 mr-4 text-purple-400" /> Property Naming Convention
            </h2>
            <p className="text-purple-100 text-lg mb-10 max-w-3xl leading-relaxed">
              In CSS, we use hyphens (<code className="text-white font-bold">background-color</code>). In JavaScript, these must be written in <strong className="text-white italic">camelCase</strong>.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { css: "background-color", js: "backgroundColor" },
                { css: "font-size", js: "fontSize" },
                { css: "text-align", js: "textAlign" },
                { css: "margin-left", js: "marginLeft" }
              ].map((name, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-5 rounded-2xl group hover:bg-white/10 transition-colors">
                   <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                         <span className="text-[8px] font-black uppercase tracking-widest text-purple-400">CSS</span>
                         <span className="text-[10px] text-gray-400 font-mono">{name.css}</span>
                      </div>
                      <div className="w-full h-px bg-white/10"></div>
                      <div className="flex items-center justify-between">
                         <span className="text-[8px] font-black uppercase tracking-widest text-green-400">JavaScript</span>
                         <span className="text-[11px] text-white font-mono font-bold animate-pulse-slow">{name.js}</span>
                      </div>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 8 & 9: Reading & Class Management ── */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        {/* Reading Styles */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-sm border border-gray-200 dark:border-gray-700">
           <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6 flex items-center gap-3">
             <Settings className="text-blue-500" /> Reading CSS Values
           </h3>
           <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-6">
             JavaScript can also retrieve existing CSS values from an element.
           </p>
           <CodeBlock 
             title="Value Retrieval Script"
             code={`let color = document.getElementById("text").style.color;
console.log(color);`} 
           />
           <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-dashed border-gray-200 dark:border-gray-700 flex items-center justify-center group pointer-events-none">
              <span className="text-xs text-gray-400 font-bold group-hover:text-blue-500 transition-colors tracking-widest uppercase flex items-center gap-2">
                 <Terminal size={14} /> Output logged to console
              </span>
           </div>
        </div>

        {/* classList Management */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-sm border border-gray-200 dark:border-gray-700">
           <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6 flex items-center gap-3">
             <Layers className="text-purple-500" /> Using classList
           </h3>
           <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-6">
             The preferred way to change styles is adding/removing CSS classes.
           </p>
           <CodeBlock 
             title="classList Method"
             code={`// Apply a CSS class dynamically
document.getElementById("title")
  .classList.add("highlight");`} 
           />
           <div className="grid grid-cols-3 gap-2 mt-4">
             {['add()', 'remove()', 'toggle()'].map(m => (
               <span key={m} className="px-3 py-1.5 bg-purple-50 dark:bg-purple-900/20 text-purple-600 text-[10px] font-bold text-center rounded-lg border border-purple-100 dark:border-purple-800/50">{m}</span>
             ))}
           </div>
        </div>
      </section>

      {/* ── Section 10: Real-World Scenarios ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gray-900 rounded-[3rem] p-8 lg:p-12 shadow-2xl relative overflow-hidden border border-slate-800">
          <div className="absolute top-0 right-0 p-8 opacity-10 text-purple-500">
            <Globe className="w-64 h-64" />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-black text-white mb-4 flex items-center">
              <Globe className="w-8 h-8 mr-4 text-purple-400" /> Real-World Applications
            </h2>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-10 border-b border-white/5 pb-4">
              Modern websites use DOM CSS for almost every interactive state.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { label: "Dark mode", desc: "Toggle theme", icon: <Monitor size={16} /> },
                { label: "Form alerts", desc: "Highlight errors", icon: <AlertCircle size={16} /> },
                { label: "Nav menus", desc: "Show/hide state", icon: <Layout size={16} /> },
                { label: "Animations", desc: "Smooth movement", icon: <Zap size={16} /> },
                { label: "Buttons", desc: "Hover feedback", icon: <MousePointer2 size={16} /> }
              ].map((app, i) => (
                <div key={i} className="p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors text-center group">
                  <div className="w-8 h-8 rounded-lg bg-white/5 mx-auto mb-3 flex items-center justify-center text-purple-400 group-hover:scale-125 transition-transform">
                    {app.icon}
                  </div>
                  <h4 className="font-bold text-white text-xs mb-1">{app.label}</h4>
                  <p className="text-[10px] text-gray-500 font-medium italic">{app.desc}</p>
                </div>
              ))}
            </div>

            {/* Example Highlight Section */}
            <div className="mt-12 bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 max-w-2xl mx-auto flex items-center gap-8 shadow-inner">
               <div className="w-16 h-16 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/20 flex items-center justify-center text-white scale-110">
                 <Check size={32} strokeWidth={3} />
               </div>
               <div>
                  <h3 className="text-lg font-black text-white mb-2 italic">Success State!</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Changing button colors upon success is a classic DOM CSS use case:
                  </p>
                  <code className="text-xs text-emerald-400 font-mono mt-2 block">button.style.backgroundColor = "green";</code>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Branding */}
      <footer className="max-w-6xl mx-auto text-center py-10 opacity-50 border-t border-gray-100 dark:border-gray-800">
        <div className="flex items-center justify-center gap-2 mb-2 font-black text-gray-500 dark:text-gray-400 uppercase tracking-tighter text-2xl">
          <Palette className="w-6 h-6 fill-current" />
          KNOWGROW Hub
        </div>
        <p className="text-sm font-medium text-gray-400">Mastering Dynamic Page Styling</p>
      </footer>

    </div>
  );
};

export default DomCss;