import React, { useState, useEffect } from 'react';
import {
  Play, Zap, Info, Activity, Monitor, Layout, Copy, Check, 
  Layers, ArrowDown, RefreshCw, Maximize, Palette, Terminal,
  CheckCircle, Globe, Move
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
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
          </div>
        </div>
      )}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-cyan-500 hover:text-white transition-colors border border-gray-700"
          title="Copy code"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono bg-gray-900 text-cyan-300 leading-relaxed rounded-b-xl">
        <code>{code}</code>
      </pre>
    </div>
  );
};

const DomAnimations: React.FC = () => {
  const [pos, setPos] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setPos(0);
  };

  useEffect(() => {
    if (isAnimating) {
      const interval = setInterval(() => {
        setPos((prev) => {
          if (prev >= 100) {
            setIsAnimating(false);
            return 100;
          }
          return prev + 1;
        });
      }, 20);
      return () => clearInterval(interval);
    }
  }, [isAnimating]);

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-rose-50 to-orange-50 dark:from-gray-900 dark:to-rose-900/10 min-h-screen font-sans">
      
      {/* ── Hero Header ── */}
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 left-1/4 w-40 h-40 bg-rose-400/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-orange-400/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-rose-500 to-orange-600 rounded-2xl mb-6 shadow-xl transform hover:rotate-3 transition-transform cursor-default">
          <Play className="w-8 h-8 text-white fill-current" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          DOM Animations
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          Bring your webpages to life. Move, fade, and resize elements dynamically using JavaScript timers and style manipulation.
        </p>
      </header>

      {/* ── Section 1: What is DOM? ── */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-center">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <Info className="w-6 h-6 mr-3 text-rose-500" /> What is DOM?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            The <strong className="text-rose-600 dark:text-rose-400">Document Object Model (DOM)</strong> is a programming interface that represents an HTML document as a tree structure of objects.
          </p>
          <div className="p-4 bg-orange-50 dark:bg-orange-900/10 border-l-4 border-orange-400 rounded-r-xl mb-4">
            <p className="text-sm text-orange-800 dark:text-orange-300 font-medium">
              JavaScript can access and manipulate these objects to change the webpage content and style dynamically.
            </p>
          </div>
        </div>
        <div className="w-full">
          <CodeBlock 
            title="DOM Manipulation Example"
            code={`// Change color using DOM
document.getElementById("box")
  .style.color = "red";`} 
          />
        </div>
      </section>

      {/* ── Section 2: What are DOM Animations? ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-rose-900 to-indigo-900 text-white p-8 lg:p-12 rounded-3xl shadow-xl relative overflow-hidden border border-rose-800/50">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Zap className="w-72 h-72" />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-black mb-6 flex items-center">
              <Zap className="w-8 h-8 mr-4 text-yellow-400 animate-pulse" /> What are DOM Animations?
            </h2>
            <p className="text-rose-100 text-lg mb-8 max-w-3xl leading-relaxed">
              DOM Animation means changing an element's position, size, color, or visibility **over time** using JavaScript.
            </p>
            
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 max-w-xl">
              <h4 className="text-yellow-400 font-black uppercase tracking-widest text-[10px] mb-2">Simple Definition</h4>
              <p className="text-white font-bold leading-snug">
                DOM animation is the process of creating movement or visual effects on HTML elements by modifying DOM properties using JavaScript.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Why DOM Animations are Used ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-2 flex items-center">
            <Activity className="text-rose-500 w-8 h-8 mr-4" /> Why Use DOM Animations?
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-medium mb-10 border-b border-gray-100 dark:border-gray-700 pb-6">
            Animations are not just for show — they improve user experience and interface design.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Interactive UI", desc: "Engaging user interfaces", icon: <Layout className="text-rose-500" /> },
              { title: "Smooth Transitions", desc: "Better visual effects", icon: <RefreshCw className="text-orange-500" /> },
              { title: "Dynamic Elements", desc: "Respond to user actions", icon: <Zap className="text-yellow-500" /> },
              { title: "Improved UX", desc: "More appealing websites", icon: <CheckCircle className="text-emerald-500" /> }
            ].map((benefit, i) => (
              <div key={i} className="p-6 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-700 transition-all hover:scale-105">
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">{benefit.title}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed font-medium">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Basic Concept ── */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white">
            How it Works
          </h2>
          <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
            DOM animations usually work using a combination of JavaScript timers, CSS style changes, and position manipulation.
          </p>
          <div className="space-y-4">
            {[
              { t: "JavaScript Timers", d: "Control the speed and timing.", icon: <Monitor className="text-rose-500" /> },
              { t: "CSS Style Changes", d: "Modify properties like left, top, opacity.", icon: <Palette className="text-orange-500" /> },
              { t: "Position Manipulation", d: "Change coordinates over time.", icon: <Move className="text-emerald-500" /> }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-gray-900/50 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-gray-200 text-sm">{item.t}</h4>
                  <p className="text-xs text-gray-500 font-medium">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Animation Process Flow */}
        <div className="bg-slate-900 rounded-3xl p-8 shadow-xl text-white flex flex-col justify-center border border-slate-800">
           <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-8 border-b border-slate-800 pb-4">Animation Process</h4>
           <div className="space-y-4">
             {[
               { label: "Element Created", color: "bg-rose-500" },
               { label: "JavaScript Changes Style", color: "bg-orange-500" },
               { label: "Position / Size Changes", color: "bg-yellow-500" },
               { label: "Animation Effect", color: "bg-emerald-500" }
             ].map((step, i, arr) => (
               <React.Fragment key={i}>
                 <div className="flex items-center gap-4">
                   <div className={`w-8 h-8 rounded-full ${step.color} flex items-center justify-center text-white font-black text-xs`}>{i + 1}</div>
                   <div className="flex-1 p-3 px-6 bg-white/5 border border-white/10 rounded-xl font-bold text-sm tracking-tight">{step.label}</div>
                 </div>
                 {i < arr.length - 1 && (
                   <div className="flex justify-center w-8 py-0.5">
                     <ArrowDown className="text-slate-700 w-4 h-4" />
                   </div>
                 )}
               </React.Fragment>
             ))}
           </div>
        </div>
      </section>

      {/* ── Section 5: Simple Example ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-8 flex items-center">
            <Terminal className="text-rose-500 w-8 h-8 mr-4" /> Interactive Demo
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <CodeBlock 
                title="HTML & CSS"
                code={`<div id="container" style="position:relative; width:400px; height:100px; background:lightgray;">
  <div id="box" style="position:absolute; width:50px; height:50px; background:red;"></div>
</div>`} 
              />
              <CodeBlock 
                title="JavaScript Logic"
                code={`function moveBox() {
  let box = document.getElementById("box");
  let pos = 0;
  let id = setInterval(frame, 10);
  
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      box.style.left = pos + "px";
    }
  }
}`} 
              />
            </div>

            {/* Live Visualization */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 flex flex-col gap-6">
              <header className="flex justify-between items-center">
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400">Live Simulation</h4>
                  <p className="text-sm font-bold text-gray-700 dark:text-gray-200">Horizontal Movement</p>
                </div>
                <button 
                  onClick={startAnimation}
                  disabled={isAnimating}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${isAnimating ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-rose-500 text-white shadow-lg shadow-rose-500/30 hover:scale-105 active:scale-95'}`}
                >
                  <Play size={14} className="fill-current" /> {isAnimating ? 'Moving...' : 'Start Animation'}
                </button>
              </header>

              <div className="relative w-full h-32 bg-gray-200 dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-300 dark:border-gray-700">
                <div 
                   className="absolute top-1/2 -translate-y-1/2 w-12 h-12 bg-rose-500 rounded-xl shadow-lg transition-all duration-75 flex items-center justify-center text-white"
                   style={{ left: `calc(${pos}% - ${pos > 0 ? '48px' : '0px'})` }}
                >
                  <Maximize size={20} />
                </div>
                {/* Scale Indicators */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-300 dark:bg-gray-700 flex justify-between px-2">
                  <div className="w-0.5 h-full bg-gray-400"></div>
                  <div className="w-0.5 h-full bg-gray-400"></div>
                  <div className="w-0.5 h-full bg-gray-400"></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
                   <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Initial State</p>
                   <p className="font-mono text-xs text-rose-500">box.style.left = "0px"</p>
                </div>
                <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl border border-rose-200 dark:border-rose-900/50">
                   <p className="text-[10px] font-bold text-rose-500 uppercase mb-1">Final State</p>
                   <p className="font-mono text-xs text-emerald-500">box.style.left = "350px"</p>
                </div>
              </div>
              <p className="text-xs text-center text-gray-400 italic font-medium">The box moves smoothly from left to right by changing the style.left property.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 6 & 7: setInterval vs requestAnimationFrame ── */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        {/* setInterval */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col">
          <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-4 flex items-center">
            <RefreshCw className="w-6 h-6 mr-3 text-rose-500" /> setInterval() Method
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-6 leading-relaxed">
            The <code className="text-rose-500 font-black">setInterval()</code> function repeatedly executes a function after a fixed time interval.
          </p>
          <div className="mt-auto">
            <CodeBlock 
              code={`setInterval(move, 10); // Runs every 10ms`} 
            />
            <p className="text-xs text-gray-500 font-medium italic mt-2">
              Note: This runs the animation at a fixed cadence regardless of browser refresh rate.
            </p>
          </div>
        </div>

        {/* requestAnimationFrame */}
        <div className="bg-gradient-to-br from-gray-900 to-indigo-950 p-8 rounded-3xl shadow-xl border border-slate-800 flex flex-col text-white">
          <h2 className="text-2xl font-black mb-4 flex items-center">
            <Zap className="w-6 h-6 mr-3 text-yellow-500" /> requestAnimationFrame()
          </h2>
          <p className="text-indigo-200 text-sm font-medium mb-6 leading-relaxed">
            Modern animations use <code className="text-yellow-400 font-bold">requestAnimationFrame()</code> for smoother performance and better battery life.
          </p>
          <div className="mt-auto">
            <CodeBlock 
              code={`function animate() {
  pos++;
  box.style.left = pos + "px";
  if (pos < 300) {
    requestAnimationFrame(animate);
  }
}
animate();`} 
            />
            <div className="mt-4 p-3 bg-white/5 border border-white/10 rounded-xl">
               <p className="text-[10px] text-emerald-400 font-black uppercase tracking-wider flex items-center gap-2">
                 <CheckCircle size={12} /> Smoother & More Efficient
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 8: Types of DOM Animations ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-8 text-center flex items-center justify-center">
          <Layers className="w-8 h-8 mr-3 text-rose-500" /> Types of DOM Animations
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              title: "Movement", 
              desc: "Elements move across the screen (Left → Right, Top → Bottom).", 
              code: "element.style.left = '100px';", 
              icon: <Move className="text-rose-500" /> 
            },
            { 
              title: "Fade", 
              desc: "Elements gradually appear or disappear by changing opacity.", 
              code: "element.style.opacity = '0.5';", 
              icon: <Zap className="text-orange-500" /> 
            },
            { 
              title: "Size", 
              desc: "Elements grow or shrink by changing width and height.", 
              code: "element.style.width = '200px';", 
              icon: <Maximize className="text-yellow-500" /> 
            },
            { 
              title: "Color", 
              desc: "Change colors dynamically for background or text.", 
              code: "element.style.background = 'blue';", 
              icon: <Palette className="text-indigo-500" /> 
            }
          ].map((type, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm hover:border-rose-400 transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-gray-50 dark:bg-gray-900/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {type.icon}
              </div>
              <h4 className="font-black text-gray-900 dark:text-white mb-2">{type.title}</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium leading-relaxed mb-4">{type.desc}</p>
              <code className="text-[10px] font-mono font-bold text-rose-500 dark:text-rose-400 bg-rose-50 dark:bg-rose-900/20 px-2 py-1 rounded">{type.code}</code>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 9: Real-World Uses ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gray-900 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden border border-slate-800">
          <div className="absolute top-0 right-0 p-8 opacity-5 text-rose-500">
            <Globe className="w-64 h-64" />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-black text-white mb-4 flex items-center">
              <Globe className="w-8 h-8 mr-4 text-rose-400" /> Real-World Applications
            </h2>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-10 border-b border-white/5 pb-4">
              Modern web experiences rely on these techniques everyday.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { app: "Navigation menus", ex: "Sliding menus", icon: <Layout /> },
                { app: "Image sliders", ex: "Carousel effects", icon: <Layers /> },
                { app: "Notifications", ex: "Fade-in alerts", icon: <Info /> },
                { app: "Visual Games", ex: "Moving objects", icon: <Play /> }
              ].map((row, i) => (
                <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center mb-4 group-hover:bg-rose-500/20">
                    {row.icon}
                  </div>
                  <h4 className="font-bold text-white mb-1">{row.app}</h4>
                  <p className="text-xs text-gray-400 font-medium italic opacity-70">{row.ex}</p>
                </div>
              ))}
            </div>

            {/* Simulated Loading Indicator */}
            <div className="mt-12 bg-black/40 rounded-3xl p-8 border border-white/10 max-w-xl">
               <h4 className="text-[10px] font-black text-rose-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                 <RefreshCw size={12} className="animate-spin" /> Loading Animation Example
               </h4>
               <div className="space-y-4">
                 <p className="text-sm font-bold text-gray-300">File Uploading...</p>
                 <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                   <div className="h-full bg-gradient-to-r from-rose-500 to-orange-500 animate-pulse w-[65%]"></div>
                 </div>
                 <p className="text-xs font-mono text-gray-500 mt-2">[====      ] 65%</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Branding */}
      <footer className="max-w-6xl mx-auto text-center py-10 opacity-50">
        <div className="flex items-center justify-center gap-2 mb-2 font-black text-gray-500 dark:text-gray-400 uppercase tracking-tighter text-2xl">
          <Play className="w-6 h-6 fill-current" />
          KNOWGROW Hub
        </div>
        <p className="text-sm font-medium text-gray-400">Mastering Dynamic DOM Manipulations</p>
      </footer>

    </div>
  );
};

export default DomAnimations;