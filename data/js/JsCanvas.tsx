import React, { useState, useEffect, useRef } from 'react';
import { 
  Zap, 
  CheckCircle, 
  AlertTriangle, 
  Terminal, 
  Code2, 
  Copy, 
  Check, 
  Eye, 
  Layers, 
  Database, 
  Globe, 
  Layout, 
  Package, 
  Activity, 
  ArrowRight,
  Info,
  Cpu,
  RefreshCw,
  ShieldCheck,
  ShieldAlert,
  Sparkles,
  Search,
  BookOpen,
  Scale,
  Bug,
  Construction,
  Fingerprint,
  Monitor,
  Trophy,
  Workflow,
  Lock,
  GitCompare,
  ArrowUpDown,
  Infinity,
  Divide,
  Calculator,
  Binary,
  Bitcoin,
  Coins,
  ShieldQuestion,
  AlertCircle,
  Hash,
  FastForward,
  Shuffle,
  Flag,
  Key,
  Unlock,
  Shield,
  Dna,
  Play,
  StopCircle,
  PlayCircle,
  ArrowRightCircle,
  Trash2,
  Columns,
  SkipForward,
  LogOut,
  Repeat,
  History,
  Link,
  ChevronRight,
  BrainCircuit,
  Network,
  Palette,
  Square,
  Circle,
  Type,
  Move,
  Gamepad2,
  Brush
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

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-indigo-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
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

const JsCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeSection, setActiveSection] = useState<'rect' | 'circle' | 'line' | 'text' | 'anim'>('rect');
  const [isAnimating, setIsAnimating] = useState(false);
  const animationRef = useRef<number>(undefined);
  const [animX, setAnimX] = useState(0);

  // Drawing Logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Reset
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (activeSection === 'rect') {
      ctx.fillStyle = "blue";
      ctx.fillRect(50, 50, 150, 100);
      ctx.strokeStyle = "red";
      ctx.strokeRect(50, 50, 150, 100);
      ctx.clearRect(80, 80, 30, 30);
    } else if (activeSection === 'circle') {
      ctx.beginPath();
      ctx.arc(200, 100, 60, 0, Math.PI * 2);
      ctx.fillStyle = "emerald"; // Use standard color string for canvas
      ctx.fillStyle = "#10b981"; 
      ctx.fill();
      ctx.strokeStyle = "#333";
      ctx.lineWidth = 4;
      ctx.stroke();
    } else if (activeSection === 'line') {
      ctx.beginPath();
      ctx.moveTo(50, 20);
      ctx.lineTo(350, 180);
      ctx.strokeStyle = "#4f46e5";
      ctx.lineWidth = 10;
      ctx.stroke();
    } else if (activeSection === 'text') {
      ctx.font = "bold 40px Arial";
      ctx.fillStyle = "#6366f1";
      ctx.fillText("Hello Canvas", 80, 100);
    }
  }, [activeSection]);

  // Animation Logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || activeSection !== 'anim') return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let x = animX;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#f43f5e";
      ctx.fillRect(x, 75, 50, 50);
      x = (x + 2) % (canvas.width);
      setAnimX(x);
      if (isAnimating) {
        animationRef.current = requestAnimationFrame(draw);
      }
    };

    if (isAnimating) {
      animationRef.current = requestAnimationFrame(draw);
    } else {
      draw(); // Draw once while paused
    }

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [activeSection, isAnimating]);

  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#020617] min-h-screen font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose-500/5 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 text-[10px] font-black mb-8 border border-indigo-100 dark:border-indigo-900/50 shadow-xl shadow-indigo-500/5 animate-pulse tracking-[0.2em]">
          <Palette size={14} className="fill-current" /> DYNAMIC VISUAL ENGINE
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          JS Canvas<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 drop-shadow-2xl">
            Graphics
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The programmable paintbrush. Create <span className="text-gray-900 dark:text-white font-bold underline decoration-indigo-500 underline-offset-4 tracking-tight uppercase italic">Live Visuals</span>, game worlds, and data dashboards directly in the browser.
        </p>
      </header>

      {/* ── Section 1-2: What & Structure ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-16 items-center">
         <div className="space-y-8">
            <SectionHeader icon={Info} title="1. What & 2. Structure" subtitle="The canvas for your digital logic." color="text-indigo-500" />
            <div className="space-y-6">
               <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed italic">
                 👉 The <span className="text-indigo-500 font-black px-2 py-0.5 bg-indigo-500/5 rounded-lg border border-indigo-500/10">&lt;canvas&gt;</span> element is used to draw graphics dynamically. It requires a <span className="italic font-bold text-gray-900 dark:text-white">context</span> (the drawing tool).
               </p>
               <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Shapes', text: 'Rects & Circles ⭕', icon: Square },
                    { label: 'Gaming', text: 'Interactive Worlds 🎮', icon: Gamepad2 },
                    { label: 'Charts', text: 'Data Visuals 📊', icon: Activity },
                    { label: 'Art', text: 'Drawing Apps ✏️', icon: Brush }
                  ].map((item, i) => (
                    <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-[2rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-1 transition-transform">
                       <item.icon className="text-indigo-500 mb-3" size={20} />
                       <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest block mb-1">{item.label}</span>
                       <span className="text-xs font-bold text-gray-700 dark:text-gray-300">{item.text}</span>
                    </div>
                  ))}
               </div>
            </div>
         </div>

         <div className="bg-white dark:bg-gray-800 p-10 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl">
            <CodeBlock title="JS Setup 🛠️" code={`const canvas = document.getElementById("myCanvas");\nconst ctx = canvas.getContext("2d");\n\n// ctx is your drawing tool!`} />
            <div className="p-6 bg-slate-900 rounded-3xl border border-white/5 flex items-center justify-between">
               <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Tag Structure</span>
               <code className="text-xs text-indigo-400 font-mono font-bold italic">&lt;canvas width="400" height="200"&gt;</code>
            </div>
         </div>
      </section>

      {/* ── Section 3: Coordinate System ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-slate-900 p-16 rounded-[5rem] overflow-hidden shadow-2xl relative group border border-white/5">
            <div className="absolute top-0 right-0 p-16 opacity-5 group-hover:scale-110 transition-transform duration-1000">
               <Move size={200} className="text-white" />
            </div>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div>
                  <SectionHeader icon={Hash} title="3. Coordinate System 🧠" subtitle="Spatial logic for the grid." color="text-indigo-400" />
                  <ul className="space-y-6">
                     {[
                       { t: '(0, 0)', d: 'Top-left corner origin.' },
                       { t: 'X-Axis', d: 'Increases to the RIGHT.' },
                       { t: 'Y-Axis', d: 'Increases DOWNWARDS.' }
                     ].map((point, i) => (
                       <li key={i} className="flex gap-6 items-center">
                          <div className="w-12 h-12 bg-indigo-500 text-white rounded-2xl flex items-center justify-center font-black italic shadow-lg shadow-indigo-500/20">
                             {point.t[0]}
                          </div>
                          <div>
                             <h4 className="font-black text-white text-xs uppercase tracking-widest mb-1 italic">{point.t}</h4>
                             <p className="text-xs text-gray-500 font-medium">{point.d}</p>
                          </div>
                       </li>
                     ))}
                  </ul>
               </div>
               <div className="relative p-10 border-2 border-dashed border-white/20 rounded-3xl aspect-[2/1] bg-white/5 flex items-start justify-start">
                  <div className="absolute top-0 left-0 p-4 bg-indigo-500 text-white text-[10px] font-black rounded-br-2xl">(0, 0)</div>
                  <div className="absolute top-4 left-4 w-full h-[1px] bg-gradient-to-r from-indigo-500 to-transparent"></div>
                  <div className="absolute top-4 left-4 h-full w-[1px] bg-gradient-to-b from-indigo-500 to-transparent"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-700 font-black text-4xl opacity-10">THE GRID</div>
                  <div className="mt-8 ml-8 p-4 bg-white/10 rounded-xl text-[10px] font-mono text-gray-400 italic">
                     Draw at (X, Y) relative to top-left.
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Live Canvas Studio (Sections 4-8, 10) ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <SectionHeader icon={Monitor} title="Drawing Studio & Animation 🎨" subtitle="Real-time renderer lab." color="text-rose-500" />
         
         <div className="grid lg:grid-cols-2 gap-8 h-[600px]">
            <div className="bg-white dark:bg-gray-800 p-10 rounded-[4rem] border border-gray-100 dark:border-gray-700 shadow-xl flex flex-col space-y-6">
               <div className="flex flex-wrap gap-2">
                  {[
                    { id: 'rect', label: 'Shapes', icon: Square },
                    { id: 'circle', label: 'Circles', icon: Circle },
                    { id: 'line', label: 'Lines', icon: Move },
                    { id: 'text', label: 'Text', icon: Type },
                    { id: 'anim', label: 'Animation', icon: PlayCircle }
                  ].map((btn) => (
                    <button 
                      key={btn.id}
                      onClick={() => { setActiveSection(btn.id as any); setIsAnimating(false); }}
                      className={`px-6 py-3 rounded-2xl flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-all ${activeSection === btn.id ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-500/20' : 'bg-gray-100 dark:bg-gray-700 text-gray-500'}`}
                    >
                       <btn.icon size={14} /> {btn.label}
                    </button>
                  ))}
               </div>

               <div className="flex-1 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-inner overflow-hidden relative">
                  <canvas 
                    ref={canvasRef} 
                    width={400} 
                    height={200}
                    className="w-full h-full object-contain cursor-crosshair"
                  ></canvas>
                  
                  {activeSection === 'anim' && (
                    <button 
                      onClick={() => setIsAnimating(!isAnimating)}
                      className="absolute bottom-6 right-6 p-4 bg-rose-500 text-white rounded-full shadow-2xl hover:scale-110 transition-transform"
                    >
                       {isAnimating ? <StopCircle size={24} /> : <PlayCircle size={24} />}
                    </button>
                  )}
               </div>

               <div className="p-6 bg-gray-50 dark:bg-gray-900/50 rounded-3xl border border-gray-100 dark:border-gray-700">
                  <span className="text-[8px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest block mb-2 underline decoration-indigo-500/30">Active Render Logic</span>
                  <p className="text-xs font-mono text-gray-600 dark:text-gray-400 italic">
                    {activeSection === 'rect' && 'ctx.fillRect(50, 50, 150, 100);'}
                    {activeSection === 'circle' && 'ctx.arc(100, 100, 50, 0, PI * 2); ctx.fill();'}
                    {activeSection === 'line' && 'ctx.moveTo(0,0); ctx.lineTo(200,100); ctx.stroke();'}
                    {activeSection === 'text' && 'ctx.fillText("Hello Canvas", 50, 50);'}
                    {activeSection === 'anim' && 'requestAnimationFrame(draw); // Loop active'}
                  </p>
               </div>
            </div>

            <div className="space-y-4 overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-indigo-500/20">
               <div className="bg-indigo-500/5 p-8 rounded-[3rem] border border-indigo-500/10">
                  <h4 className="text-[10px] font-black text-indigo-500 uppercase tracking-widest mb-6 italic">Drawing Specs 🔧</h4>
                  <ul className="space-y-4">
                     <li className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed italic">👉 <b>Fill:</b> ctx.fillStyle = "color"</li>
                     <li className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed italic">👉 <b>Stroke:</b> ctx.strokeStyle = "color"</li>
                     <li className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed italic">👉 <b>Line Width:</b> ctx.lineWidth = 5</li>
                  </ul>
               </div>
               <CodeBlock title="Master Example" code={`// Shape Logic\nctx.beginPath();\nctx.arc(100, 100, 50, 0, Math.PI * 2);\nctx.fill();`} />
               <div className="bg-rose-500/5 p-8 rounded-[3rem] border border-rose-500/10">
                   <h4 className="text-[10px] font-black text-rose-500 uppercase tracking-widest mb-6 italic">10. Animation Logic 🎬</h4>
                   <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed italic border-l-2 border-rose-500 pl-4 py-2">
                      Use `requestAnimationFrame` for buttery smooth 60fps animations. It pauses when the tab is hidden!
                   </p>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 9: Complete Example ── */}
      <section className="max-w-4xl mx-auto mb-32">
         <SectionHeader icon={Terminal} title="9. Complete System Demo" subtitle="The full graphics toolkit in action." color="text-indigo-500" />
         <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-rose-500 rounded-[3rem] blur opacity-15"></div>
            <CodeBlock title="canvas_pro.js" code={`const canvas = document.getElementById("myCanvas");\nconst ctx = canvas.getContext("2d");\n\n// Rectangle\nctx.fillStyle = "blue";\nctx.fillRect(20, 20, 100, 50);\n\n// Circle\nctx.beginPath();\nctx.arc(200, 100, 40, 0, Math.PI * 2);\nctx.fillStyle = "red";\nctx.fill();`} />
         </div>
      </section>

      {/* ── Section 11: Real-World Use Cases ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <SectionHeader icon={Globe} title="11. Real-World Applications 🌍" subtitle="Where canvas powers the web." color="text-teal-500" />
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: '2D Games', d: 'Snake, Pong, Platformers 🎮', icon: Gamepad2 },
              { t: 'Dataviz', d: 'High-perf charts & graphs 📈', icon: Activity },
              { t: 'Image Tools', d: 'Filters & pixel manipulation 📸', icon: Palette },
              { t: 'Effects', d: 'Particles & transitions ✨', icon: Sparkles }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl text-center group hover:-translate-y-2 transition-transform">
                 <div className="w-16 h-16 bg-teal-500 text-white rounded-[2rem] flex items-center justify-center mx-auto mb-6 shadow-xl shadow-teal-500/20 group-hover:rotate-12 transition-transform">
                    <item.icon size={28} />
                 </div>
                 <h5 className="font-black text-gray-900 dark:text-white uppercase tracking-[0.2em] text-[10px] mb-2">{item.t}</h5>
                 <p className="text-[10px] text-gray-500 font-medium italic underline decoration-teal-500/20 underline-offset-4">{item.d}</p>
              </div>
            ))}
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
         <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto mb-10"></div>
         <p className="text-4xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.4em]">
           Art in Code.
         </p>
         <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto italic border-y border-indigo-500/5 py-4">
           "Graphic design is the visual voice of code; the Canvas is where that voice speaks most clearly."
         </p>
      </footer>

    </div>
  );
};

export default JsCanvas;