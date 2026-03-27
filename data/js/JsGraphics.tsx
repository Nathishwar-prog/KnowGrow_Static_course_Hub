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
  MonitorPlay,
  Palette,
  Image as ImageIcon,
  PenTool,
  Square,
  Circle,
  Minus,
  PlaySquare,
  MousePointerClick,
  Gamepad2
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

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-orange-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
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

const JsGraphics: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0c0a09] min-h-screen font-sans selection:bg-orange-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-orange-600 dark:text-orange-400 text-[10px] font-black mb-8 border border-orange-100 dark:border-orange-900/50 shadow-xl shadow-orange-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <Palette size={14} className="fill-current" /> VISUAL RENDERING
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          JavaScript <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-500 drop-shadow-2xl">
            Graphics
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          Learn how to draw and render visual elements like <span className="text-gray-900 dark:text-white font-bold underline decoration-orange-500 underline-offset-4 tracking-tight">shapes, images, and animations</span> using Canvas, SVG, and WebGL.
        </p>
      </header>

      {/* ── Section 1: What is Graphics ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden h-full">
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-colors duration-700"></div>
             <div className="flex flex-col gap-6 relative z-10 h-full">
               <div className="p-4 bg-orange-50 dark:bg-orange-500/10 rounded-2xl text-orange-500 w-max border border-orange-100 dark:border-orange-500/20 shadow-lg">
                 <Info size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">1. What is JavaScript Graphics?</h3>
                 <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                   JavaScript Graphics refers to drawing and rendering visual elements (shapes, images, animations, 2D/3D objects) in the browser using JavaScript.
                 </p>
                 <div className="space-y-2 bg-orange-500/5 p-4 rounded-xl border border-orange-500/20">
                    <p className="font-bold text-gray-800 dark:text-orange-200">👉 It is mainly done using:</p>
                    <ul className="text-sm font-bold text-gray-600 dark:text-gray-400 ml-2 space-y-1">
                       <li>• Canvas API</li>
                       <li>• SVG (Scalable Vector Graphics)</li>
                       <li>• WebGL (3D Graphics)</li>
                    </ul>
                 </div>
               </div>
             </div>
           </div>
        </div>

        <div className="space-y-4 flex flex-col justify-center">
           <SectionHeader icon={Layers} title="2. Types of Graphics in JavaScript" subtitle="The Big Three engines." color="text-amber-500" />
           
           <div className="grid gap-4">
               {/* Canvas */}
               <div className="bg-[#0b1120] p-6 rounded-2xl border border-white/5 flex items-start gap-4 shadow-lg group">
                  <div className="bg-blue-500/20 p-3 rounded-xl"><ImageIcon className="text-blue-400" size={24}/></div>
                  <div>
                     <h4 className="font-black text-white text-lg flex items-center gap-2">🟦 1. Canvas <span className="text-xs text-blue-400 font-mono">(2D Graphics)</span></h4>
                     <p className="text-sm text-gray-400 font-medium mt-1">👉 Pixel-based drawing (like painting)</p>
                     <p className="text-xs text-green-400 font-bold mt-2">✔ Best for: Games, Animations, Real-time rendering</p>
                  </div>
               </div>
               
               {/* SVG */}
               <div className="bg-[#0b1120] p-6 rounded-2xl border border-white/5 flex items-start gap-4 shadow-lg group">
                  <div className="bg-green-500/20 p-3 rounded-xl"><PenTool className="text-green-400" size={24}/></div>
                  <div>
                     <h4 className="font-black text-white text-lg flex items-center gap-2">🟩 2. SVG <span className="text-xs text-green-400 font-mono">(Vector Graphics)</span></h4>
                     <p className="text-sm text-gray-400 font-medium mt-1">👉 Shape-based graphics (DOM elements)</p>
                     <p className="text-xs text-green-400 font-bold mt-2">✔ Best for: Icons, Charts, UI graphics</p>
                  </div>
               </div>

               {/* WebGL */}
               <div className="bg-[#0b1120] p-6 rounded-2xl border border-white/5 flex items-start gap-4 shadow-lg group">
                  <div className="bg-red-500/20 p-3 rounded-xl"><Box className="text-red-400" size={24}/></div>
                  <div>
                     <h4 className="font-black text-white text-lg flex items-center gap-2">🟥 3. WebGL <span className="text-xs text-red-400 font-mono">(3D Graphics)</span></h4>
                     <p className="text-sm text-gray-400 font-medium mt-1">👉 GPU-powered rendering</p>
                     <p className="text-xs text-green-400 font-bold mt-2">✔ Best for: 3D games, Simulations, Advanced visualizations</p>
                  </div>
               </div>
           </div>
        </div>
      </section>

      {/* ── Section 3: Canvas Setup ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-gradient-to-r from-orange-900/20 to-amber-900/20 border border-orange-500/20 p-12 rounded-[4rem] shadow-xl relative overflow-hidden">
            <SectionHeader icon={Zap} title="3. Canvas Basics" subtitle="(Most Important for Beginners)" color="text-orange-400" />
            
            <div className="grid md:grid-cols-2 gap-8 mt-8 relative z-10">
               <div>
                  <h4 className="font-black text-white flex items-center gap-2 mb-4">
                     <span className="text-orange-400">✅</span> Step 1: HTML Canvas
                  </h4>
                  <CodeBlock language="html" code={`<canvas id="myCanvas" width="400" height="200"></canvas>`} />
               </div>
               <div>
                  <h4 className="font-black text-white flex items-center gap-2 mb-4">
                     <span className="text-orange-400">✅</span> Step 2: JavaScript Setup
                  </h4>
                  <CodeBlock code={`const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");`} />
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 4: Drawing Shapes ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={PenTool} title="4. Drawing Shapes" subtitle="The basic building blocks." color="text-yellow-500" />
        
        <div className="grid md:grid-cols-3 gap-8">
           <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700">
              <h4 className="font-black text-gray-900 dark:text-white flex items-center gap-2 mb-6 text-xl">
                 <Square className="text-blue-500 fill-blue-500/20"/> Rectangle
              </h4>
              <CodeBlock code={`ctx.fillStyle = "blue";
ctx.fillRect(50, 50, 150, 100);`} />
           </div>

           <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700">
              <h4 className="font-black text-gray-900 dark:text-white flex items-center gap-2 mb-6 text-xl">
                 <Circle className="text-purple-500 fill-purple-500/20"/> Circle
              </h4>
              <CodeBlock code={`ctx.beginPath();
ctx.arc(200, 100, 50, 0, 2 * Math.PI);
ctx.fill();`} />
           </div>

           <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700">
              <h4 className="font-black text-gray-900 dark:text-white flex items-center gap-2 mb-6 text-xl">
                 <Minus className="text-green-500" strokeWidth={4}/> Line
              </h4>
              <CodeBlock code={`ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();`} />
           </div>
        </div>
      </section>

      {/* ── Section 5 & 6: Animations & SVG ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-[#0b1120] border border-white/5 p-10 rounded-[3rem] shadow-2xl">
               <SectionHeader icon={PlaySquare} title="5. Animation Example" subtitle="(Very Important)" color="text-orange-400" />
               <CodeBlock code={`let x = 0;

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillRect(x, 50, 50, 50);
    
    x += 2;
    
    requestAnimationFrame(animate);
}

animate();`} />
               <div className="mt-6 p-4 bg-orange-500/10 rounded-2xl border border-orange-500/20">
                  <h4 className="font-black text-orange-400 mb-2 flex items-center gap-2">🧠 Output:</h4>
                  <p className="text-sm font-bold text-gray-300">👉 Moving square across screen (smooth animation)</p>
               </div>
            </div>

            <div className="space-y-8 flex flex-col justify-between">
               <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-10 rounded-[3rem] shadow-xl">
                  <SectionHeader icon={Layers} title="6. SVG Example" subtitle="Vector mastery." color="text-amber-500" />
                  <p className="text-lg font-bold text-gray-600 dark:text-gray-300 bg-amber-50 dark:bg-amber-500/10 p-6 rounded-2xl border border-amber-100 dark:border-amber-500/20">
                     👉 SVG is part of DOM → easy to style with CSS.
                  </p>
               </div>

               <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-10 rounded-[3rem] shadow-xl">
                  <SectionHeader icon={MousePointerClick} title="9. Advanced Example" subtitle="(Interactive Drawing)" color="text-rose-500" />
                  <CodeBlock code={`canvas.addEventListener("mousemove", (e) => {
    ctx.fillRect(e.offsetX, e.offsetY, 5, 5);
});`} />
                  <p className="text-sm font-bold text-gray-600 dark:text-gray-300">👉 Draw with mouse 🎨</p>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 7: Canvas vs SVG vs WebGL ── */}
      <section className="max-w-5xl mx-auto mb-32">
         <SectionHeader icon={List} title="7. Canvas vs SVG vs WebGL" subtitle="How do they compare?" color="text-purple-500" />
         <div className="bg-white dark:bg-gray-800 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
            <div className="overflow-x-auto">
               <table className="w-full text-left border-collapse">
                  <thead>
                     <tr className="bg-gray-50 dark:bg-gray-900/50">
                        <th className="p-6 text-sm font-black text-gray-500 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700">Feature</th>
                        <th className="p-6 text-sm font-black text-blue-500 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700 border-l bg-blue-50/50 dark:bg-blue-900/5">Canvas</th>
                        <th className="p-6 text-sm font-black text-green-500 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700 border-l bg-green-50/50 dark:bg-green-900/5">SVG</th>
                        <th className="p-6 text-sm font-black text-red-500 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700 border-l bg-red-50/50 dark:bg-red-900/5">WebGL</th>
                     </tr>
                  </thead>
                  <tbody className="text-sm font-medium text-gray-700 dark:text-gray-300">
                     <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                        <td className="p-6 border-b border-gray-100 dark:border-gray-700 font-bold">Type</td>
                        <td className="p-6 border-b border-gray-100 dark:border-gray-700 border-l text-blue-600 dark:text-blue-400">Pixel</td>
                        <td className="p-6 border-b border-gray-100 dark:border-gray-700 border-l text-green-600 dark:text-green-400">Vector</td>
                        <td className="p-6 border-b border-gray-100 dark:border-gray-700 border-l text-red-600 dark:text-red-400">3D</td>
                     </tr>
                     <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                        <td className="p-6 border-b border-gray-100 dark:border-gray-700 font-bold">Performance</td>
                        <td className="p-6 border-b border-gray-100 dark:border-gray-700 border-l">High</td>
                        <td className="p-6 border-b border-gray-100 dark:border-gray-700 border-l">Medium</td>
                        <td className="p-6 border-b border-gray-100 dark:border-gray-700 border-l">Very High</td>
                     </tr>
                     <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                        <td className="p-6 border-b border-gray-100 dark:border-gray-700 font-bold">Use Case</td>
                        <td className="p-6 border-b border-gray-100 dark:border-gray-700 border-l">Games</td>
                        <td className="p-6 border-b border-gray-100 dark:border-gray-700 border-l">UI / Charts</td>
                        <td className="p-6 border-b border-gray-100 dark:border-gray-700 border-l">3D Apps</td>
                     </tr>
                     <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                        <td className="p-6 font-bold">DOM Control</td>
                        <td className="p-6 border-l text-red-500">No</td>
                        <td className="p-6 border-l text-green-500">Yes</td>
                        <td className="p-6 border-l text-red-500">No</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </section>

      {/* ── Section 8: Real-World Use Cases ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Globe} title="8. Real-World Use Cases" subtitle="Where this is used." color="text-indigo-500" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
           <div className="bg-white dark:bg-gray-800 p-6 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl text-center group hover:-translate-y-2 transition-transform">
             <div className="w-16 h-16 mx-auto bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6">
                <Gamepad2 size={32} className="text-blue-500" />
             </div>
             <h4 className="text-lg font-black text-gray-900 dark:text-white mb-4">🎮 Games</h4>
             <ul className="space-y-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                <li>Player movement</li>
                <li>Collision detection</li>
             </ul>
           </div>

           <div className="bg-white dark:bg-gray-800 p-6 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl text-center group hover:-translate-y-2 transition-transform">
             <div className="w-16 h-16 mx-auto bg-green-500/10 rounded-2xl flex items-center justify-center mb-6">
                <Activity size={32} className="text-green-500" />
             </div>
             <h4 className="text-lg font-black text-gray-900 dark:text-white mb-4">📊 Charts</h4>
             <ul className="space-y-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                <li>Custom graphs</li>
                <li>Visual rendering</li>
             </ul>
           </div>

           <div className="bg-white dark:bg-gray-800 p-6 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl text-center group hover:-translate-y-2 transition-transform">
             <div className="w-16 h-16 mx-auto bg-pink-500/10 rounded-2xl flex items-center justify-center mb-6">
                <MonitorPlay size={32} className="text-pink-500" />
             </div>
             <h4 className="text-lg font-black text-gray-900 dark:text-white mb-4">🎥 Animations</h4>
             <ul className="space-y-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                <li>Interactive UI</li>
                <li>Visual effects</li>
             </ul>
           </div>

           <div className="bg-white dark:bg-gray-800 p-6 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl text-center group hover:-translate-y-2 transition-transform">
             <div className="w-16 h-16 mx-auto bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6">
                <CloudLightning size={32} className="text-orange-500" />
             </div>
             <h4 className="text-lg font-black text-gray-900 dark:text-white mb-4">🧠 Simulations</h4>
             <ul className="space-y-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                <li>Physics engines</li>
                <li>Real-world models</li>
             </ul>
           </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          RENDER THE WEB
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-orange-500/10 decoration-2">
          "From basic shapes to fully immersive 3D worlds, JS Graphics opens up endless creative possibilities."
        </p>
      </footer>

    </div>
  );
};

export default JsGraphics;