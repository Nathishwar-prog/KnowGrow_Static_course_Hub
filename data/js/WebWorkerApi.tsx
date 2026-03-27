import React, { useState, useEffect, useRef } from 'react';
import {
  Zap, Cpu, MessageSquare, AlertCircle, CheckCircle, Info, Activity,
  Terminal, CodeXml, Layers, Boxes, Play, Pause, Trash2, Gauge,
  ArrowRight, Copy, Check, MousePointer2, Settings, Smartphone,
  BarChart3, Image as ImageIcon, FileArchive, Globe, Gamepad2
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

// ─── Flow Step ───────────────────────────────────────────────────────────────
const FlowStep = ({ step, label, color, description }: { step: number; label: string; color: string; description: string }) => (
  <div className="flex flex-col items-center relative flex-1">
    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-white text-lg shadow-xl transform hover:scale-110 transition-transform ${color}`}>
      {step}
    </div>
    <div className="mt-4 text-sm font-bold text-center text-gray-900 dark:text-white uppercase tracking-tight">{label}</div>
    <p className="mt-1 text-[11px] text-center text-gray-500 dark:text-gray-400 font-medium leading-tight max-w-[120px]">{description}</p>
    {step < 4 && (
      <div className="hidden lg:flex absolute top-6 -right-1/2 transform translate-x-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent -z-10">
      </div>
    )}
  </div>
);

// ─── Interactive Demo ────────────────────────────────────────────────────────
const WebWorkerDemo = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [isWorkerRunning, setIsWorkerRunning] = useState(false);
  const [mainResult, setMainResult] = useState<number | null>(null);
  const [workerResult, setWorkerResult] = useState<number | null>(null);
  const [counter, setCounter] = useState(0);
  const animationRef = useRef<number | null>(null);

  // Smooth animation to test UI responsiveness
  useEffect(() => {
    const animate = () => {
      setCounter(prev => (prev + 1) % 100);
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const runOnMainThread = () => {
    setIsRunning(true);
    setMainResult(null);
    
    // Use setTimeout to allow UI to update to "Running" state before blocking
    setTimeout(() => {
      const startTime = performance.now();
      let result = 0;
      // Heavy calculation
      for (let i = 0; i < 2000000000; i++) {
        result += i;
      }
      const endTime = performance.now();
      setMainResult(Math.round(endTime - startTime));
      setIsRunning(false);
    }, 50);
  };

  const runOnWorker = () => {
    setIsWorkerRunning(true);
    setWorkerResult(null);

    const blob = new Blob([`
      self.onmessage = function(e) {
        const startTime = performance.now();
        let result = 0;
        for (let i = 0; i < 2000000000; i++) {
          result += i;
        }
        const endTime = performance.now();
        self.postMessage(Math.round(endTime - startTime));
      };
    `], { type: 'application/javascript' });

    const worker = new Worker(URL.createObjectURL(blob));
    worker.onmessage = (e) => {
      setWorkerResult(e.data);
      setIsWorkerRunning(false);
      worker.terminate();
    };
    worker.postMessage('start');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700 shadow-xl overflow-hidden relative">
      <div className="absolute top-0 right-0 p-4">
         <div className="flex items-center gap-2 px-3 py-1 bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 rounded-full text-xs font-bold">
            <Activity className="w-3 h-3 animate-pulse" /> UI Monitor
         </div>
      </div>

      <h3 className="text-xl font-black text-gray-900 dark:text-white mb-6 flex items-center">
        <Gauge className="w-6 h-6 mr-3 text-sky-500" /> Interactive Performance Test
      </h3>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Visual Monitor */}
        <div className="space-y-6">
          <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-700 flex flex-col items-center justify-center min-h-[180px]">
            <div className="text-xs font-bold text-gray-400 uppercase mb-4">UI Smoothness Observer</div>
            <div className="flex gap-1 items-end h-16 w-full max-w-[200px]">
              {[...Array(20)].map((_, i) => (
                <div 
                  key={i} 
                  className={`flex-1 rounded-t-sm transition-all duration-300 ${isRunning ? 'bg-red-400 opacity-20 scale-y-50' : 'bg-emerald-400'}`}
                  style={{ 
                    height: `${Math.sin((counter + i * 5) * 0.2) * 20 + 30}%`,
                    opacity: isRunning ? 0.3 : 1
                  }}
                ></div>
              ))}
            </div>
            <div className={`mt-4 text-xs font-black uppercase tracking-widest ${isRunning ? 'text-red-500 animate-pulse' : 'text-emerald-500'}`}>
              {isRunning ? 'UI Frozen / Blocked' : 'UI Smooth / 60 FPS'}
            </div>
            <p className="mt-2 text-[10px] text-gray-500 text-center px-4 italic">
              When the bars stop moving, the Main Thread is blocked and the user cannot interact with the page.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={runOnMainThread}
              disabled={isRunning || isWorkerRunning}
              className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${isRunning ? 'bg-red-50 border-red-200 text-red-500 cursor-not-allowed' : 'bg-white hover:bg-red-50 border-gray-100 hover:border-red-200 text-gray-700 hover:text-red-600'}`}
            >
              <Cpu className="w-6 h-6" />
              <span className="text-xs font-black uppercase">Main Thread (Blocking)</span>
            </button>
            <button 
              onClick={runOnWorker}
              disabled={isRunning || isWorkerRunning}
              className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${isWorkerRunning ? 'bg-sky-50 border-sky-200 text-sky-500 cursor-not-allowed' : 'bg-white hover:bg-sky-50 border-gray-100 hover:border-sky-200 text-gray-700 hover:text-sky-600'}`}
            >
              <Zap className="w-6 h-6" />
              <span className="text-xs font-black uppercase">Web Worker (Parallel)</span>
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="bg-slate-900 rounded-2xl p-6 font-mono text-sm border border-slate-800 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-slate-500 text-xs">Processing Stats</span>
              <span className="text-sky-400 text-xs font-bold uppercase tracking-widest">v1.2 // real-time</span>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Iterations:</span>
                <span className="text-white font-bold">2,000,000,000</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-200 flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${mainResult ? 'bg-red-500' : 'bg-slate-700'}`}></div>
                  Main Thread:
                </span>
                <span className={mainResult ? 'text-red-400 font-bold animate-in fade-in slide-in-from-right-2' : 'text-slate-600 italic'}>
                  {mainResult ? `${mainResult}ms (Blocked!)` : isRunning ? 'Processing...' : 'Wait...'}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-200 flex items-center gap-2">
                   <div className={`w-2 h-2 rounded-full ${workerResult ? 'bg-emerald-500' : 'bg-slate-700'}`}></div>
                  Web Worker:
                </span>
                <span className={workerResult ? 'text-emerald-400 font-bold animate-in fade-in slide-in-from-right-2' : 'text-slate-600 italic'}>
                  {workerResult ? `${workerResult}ms (Smooth!)` : isWorkerRunning ? 'Processing...' : 'Wait...'}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-xl bg-sky-500/10 border border-sky-500/20 text-[11px] text-sky-300 leading-relaxed italic">
            <strong>Insight:</strong> {mainResult && !workerResult && "Notice how the UI froze during the calculation. If you were scrolling or clicking a button, it wouldn't work!"}
            {workerResult && "The calculation finished in the background. The UI remained fully responsive and the animation never skipped a frame."}
            {!mainResult && !workerResult && "Try running on the Main Thread and watch the bars above stop moving. Then try the Web Worker!"}
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────
const WebWorkerApi: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#fdfdff] dark:bg-[#0a0c10] min-h-screen font-sans text-gray-800 dark:text-gray-200 selection:bg-sky-100 selection:text-sky-700 dark:selection:bg-sky-900/40">
      
      {/* ── Hero Header ── */}
      <header className="max-w-5xl mx-auto text-center mb-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-br from-sky-400/10 to-indigo-600/10 rounded-full blur-[120px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-gradient-to-tr from-sky-500 to-indigo-600 rounded-[2.5rem] mb-8 shadow-2xl shadow-sky-500/20 transform hover:scale-110 transition-all duration-500 cursor-none">
          <Cpu className="w-10 h-10 text-white animate-pulse" />
        </div>
        <h1 className="text-6xl sm:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tight leading-none">
          Web Worker <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">API</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          Unlock true parallelism in JavaScript. Run heavy scripts in background threads without freezing your user interface.
        </p>
      </header>

      {/* ── 1. What is Web Worker ── */}
      <section className="max-w-6xl mx-auto mb-24 grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-50 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 rounded-full text-xs font-black uppercase tracking-widest border border-sky-100 dark:border-sky-800/50">
            <Info className="w-4 h-4" /> Core Concept
          </div>
          <h2 className="text-4xl font-black text-gray-900 dark:text-white leading-tight">
            The Power of <br /> Multi-Threaded JS
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
            The Web Worker API allows JavaScript to run scripts in background threads, separate from the main UI thread. 
            By default, JavaScript is <strong className="text-indigo-500">single-threaded</strong>, meaning heavy operations block the user experience.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center mb-4">
                <Smartphone className="w-5 h-5 text-sky-600" />
              </div>
              <h4 className="font-black text-gray-900 dark:text-white text-sm mb-2">Dedicated Threads</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Parallel execution away from the main interaction thread.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-4">
                <Activity className="w-5 h-5 text-emerald-600" />
              </div>
              <h4 className="font-black text-gray-900 dark:text-white text-sm mb-2">Zero UI Freezing</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Keep animations smooth and inputs responsive during heavy tasks.</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-indigo-600 rounded-[3rem] blur-2xl opacity-10 -z-10 animate-pulse"></div>
          <div className="bg-white dark:bg-gray-800 border-4 border-gray-50 dark:border-gray-800 p-8 rounded-[3rem] shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-sky-500 to-indigo-600"></div>
             <div className="space-y-6">
                <div className="flex items-center justify-between border-b dark:border-gray-700 pb-4">
                   <span className="font-black text-gray-400 text-xs uppercase tracking-widest">Logic Visualization</span>
                   <Boxes className="text-sky-500 w-5 h-5" />
                </div>
                
                {/* Visual Representation of Threads */}
                <div className="space-y-8 py-4">
                   <div className="space-y-3">
                      <div className="flex items-center justify-between text-[10px] font-black uppercase text-gray-400">
                        <span>Main Thread (UI)</span>
                        <span className="text-emerald-500">Smooth 60 FPS</span>
                      </div>
                      <div className="h-6 w-full bg-gray-100 dark:bg-gray-900 rounded-full overflow-hidden flex items-center px-1">
                        <div className="h-4 w-1/4 bg-emerald-400 rounded-full animate-progress-slow"></div>
                        <div className="w-1 h-1 bg-white mx-2 rounded-full"></div>
                        <div className="h-4 w-1/6 bg-emerald-400 rounded-full"></div>
                        <div className="w-1 h-1 bg-white mx-2 rounded-full"></div>
                        <div className="h-4 w-1/3 bg-emerald-400 rounded-full"></div>
                      </div>
                   </div>

                   <div className="flex justify-center flex-col items-center gap-1 opacity-40">
                      <ArrowRight className="w-4 h-4 text-gray-300 rotate-90" />
                      <div className="text-[10px] font-bold text-gray-400">postMessage()</div>
                   </div>

                   <div className="space-y-3">
                      <div className="flex items-center justify-between text-[10px] font-black uppercase text-gray-400">
                        <span>Worker Thread (BG)</span>
                        <span className="text-sky-500">Heavy Task Running</span>
                      </div>
                      <div className="h-10 w-full bg-slate-900 rounded-xl overflow-hidden flex items-center p-1.5 border border-slate-700 shadow-inner">
                        <div className="h-full w-full bg-gradient-to-r from-sky-600 to-indigo-600 rounded-lg animate-pulse relative flex items-center justify-center">
                           <span className="text-[10px] text-white font-black italic tracking-tighter">DATA CRUNCHING...</span>
                        </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── 2. Why Web Workers? ── */}
      <section className="max-w-6xl mx-auto mb-24">
        <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-[3.5rem] p-10 lg:p-16 text-white relative overflow-hidden shadow-2xl border border-white/5">
          <div className="absolute top-0 right-0 -m-20 opacity-10 transform scale-150 rotate-12">
            <Zap className="w-96 h-96" />
          </div>
          <div className="max-w-3xl relative z-10">
            <h2 className="text-4xl font-black mb-8 flex items-center">
              <Zap className="text-yellow-400 w-10 h-10 mr-4" /> Why Web Workers?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 my-10">
              <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 group hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-red-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold">❌</span>
                </div>
                <h3 className="text-xl font-black mb-3 text-red-300">The Problem</h3>
                <ul className="space-y-4 text-slate-300 text-sm font-medium">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0"></div>
                    Heavy calculations block UI thread
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0"></div>
                    Page becomes totally unresponsive
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0"></div>
                    Poor, "laggy" user experience 😓
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 group hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold">✅</span>
                </div>
                <h3 className="text-xl font-black mb-3 text-emerald-300">The Solution</h3>
                <ul className="space-y-4 text-slate-300 text-sm font-medium">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0"></div>
                    Background processing for logic
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0"></div>
                    Fluid UI even during large tasks
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0"></div>
                    Modern, premium performance 🚀
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="p-6 rounded-2xl bg-sky-500/20 border border-sky-400/30 flex items-center gap-4">
               <Info className="w-6 h-6 text-sky-300 flex-shrink-0" />
               <p className="text-sky-100 text-sm font-semibold italic">
                 "Simple Definition: A Web Worker lets you run heavy tasks in the background without freezing the UI."
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE DEMO ── */}
      <section className="max-w-6xl mx-auto mb-24">
        <WebWorkerDemo />
      </section>

      {/* ── 3. How it Works (Flow) ── */}
      <section className="max-w-6xl mx-auto mb-24">
        <div className="bg-white dark:bg-gray-800 rounded-[3.5rem] p-10 lg:p-16 border border-gray-100 dark:border-gray-700 shadow-sm text-center">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-2">Workflow & Communication</h2>
          <p className="text-gray-500 dark:text-gray-400 font-medium mb-16">The lifecycle of a Web Worker from creation to completion.</p>
          
          <div className="flex flex-wrap lg:flex-nowrap gap-8 justify-between relative">
            <FlowStep 
              step={1} 
              label="Initialize" 
              color="bg-sky-500" 
              description="Main thread creates the worker script." 
            />
            <FlowStep 
              step={2} 
              label="Run Task" 
              color="bg-indigo-500" 
              description="Worker runs logic in a separate core." 
            />
            <FlowStep 
              step={3} 
              label="Exchange" 
              color="bg-violet-500" 
              description="Data is sent via event messages." 
            />
            <FlowStep 
              step={4} 
              label="Deliver" 
              color="bg-emerald-500" 
              description="Worker returns final result to UI." 
            />
          </div>
        </div>
      </section>

      {/* ── 4 & 5. Setup & Example ── */}
      <section className="max-w-6xl mx-auto mb-24">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4 space-y-6">
            <h2 className="text-3xl font-black flex items-center gap-3">
              <Terminal className="text-sky-500 w-8 h-8" /> Implementation
            </h2>
            <p className="text-gray-500 dark:text-gray-400 font-medium text-sm leading-relaxed">
              Setting up a Web Worker requires a separate file for the worker script. 
              The browser loads this file in its own thread environment.
            </p>
            
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700">
               <div className="text-xs font-black uppercase text-gray-400 mb-6 tracking-widest">File Structure</div>
               <div className="space-y-3 font-mono text-xs">
                  <div className="flex items-center gap-3 p-2 bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-700">
                     <Globe className="w-4 h-4 text-sky-500" /> index.html
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-700">
                     <CodeXml className="w-4 h-4 text-yellow-500" /> main.js
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-700 shadow-indigo-500/10 shadow-lg border-sky-300 dark:border-sky-800">
                     <Zap className="w-4 h-4 text-indigo-500 animate-pulse" /> worker.js
                  </div>
               </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <CodeBlock 
              title="worker.js (Background Script)" 
              language="javascript" 
              code={`self.onmessage = function(event) {
    let num = event.data;

    // Heavy task simulation
    let result = 0;
    for (let i = 0; i < num; i++) {
        result += i;
    }

    // Send result back to main thread
    self.postMessage(result);
};`} 
            />
            <CodeBlock 
              title="main.js (Main Thread UI)" 
              language="javascript" 
              code={`// 1. Create the worker
const worker = new Worker("worker.js");

// 2. Send data to worker
worker.postMessage(1000000000);

// 3. Listen for result
worker.onmessage = function(event) {
    console.log("Calculation Result:", event.data);
};`} 
            />
          </div>
        </div>
      </section>

      {/* ── 7. Communication Methods ── */}
      <section className="max-w-6xl mx-auto mb-24">
         <div className="bg-slate-900 rounded-[3.5rem] p-10 lg:p-16 border border-slate-800 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-10 opacity-5 grayscale group-hover:grayscale-0 transition-all duration-700">
               <MessageSquare className="w-64 h-64 text-sky-500" />
            </div>
            
            <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
               <div className="flex-1 space-y-6">
                  <h2 className="text-4xl font-black text-white">The Bridge</h2>
                  <p className="text-slate-400 font-medium leading-relaxed">
                     Workers communicate with the main thread using an event-driven model. 
                     Data is copied (not shared) during this transfer.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                      <div className="flex items-center gap-3 mb-2 text-sky-400">
                        <ArrowRight className="w-5 h-5 rotate-[-45deg]" />
                        <span className="font-black uppercase text-xs tracking-tighter">📤 Sending Data</span>
                      </div>
                      <code className="text-indigo-300 text-sm font-mono block">worker.postMessage(data);</code>
                    </div>
                    
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                      <div className="flex items-center gap-3 mb-2 text-emerald-400">
                        <ArrowRight className="w-5 h-5 rotate-[135deg]" />
                        <span className="font-black uppercase text-xs tracking-tighter">📥 Receiving Data</span>
                      </div>
                      <code className="text-emerald-300 text-sm font-mono block">
                        worker.onmessage = (event) =&gt; &#123; <br />
                        &nbsp;&nbsp;console.log(event.data); <br />
                        &#125;;
                      </code>
                    </div>
                  </div>
               </div>

               <div className="flex-1 w-full max-w-md">
                 <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700">
                    <h4 className="text-xs font-black text-slate-500 uppercase mb-8 text-center tracking-widest">Logical Flow Diagram</h4>
                    <div className="flex flex-col items-center gap-4">
                       <div className="w-full h-12 bg-sky-500/20 border border-sky-500/40 rounded-xl flex items-center justify-center font-bold text-sky-300">MAIN THREAD</div>
                       <div className="h-10 w-[2px] bg-gradient-to-b from-sky-500/50 to-indigo-500/50"></div>
                       <div className="px-4 py-2 bg-indigo-500 text-white rounded-full text-[10px] font-black uppercase shadow-lg shadow-indigo-500/20">postMessage(123)</div>
                       <div className="h-10 w-[2px] bg-gradient-to-b from-indigo-500/50 to-emerald-500/50"></div>
                       <div className="w-full h-12 bg-emerald-500/20 border border-emerald-500/40 rounded-xl flex items-center justify-center font-bold text-emerald-300">WORKER THREAD (BG)</div>
                    </div>
                 </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── 8. Limitations & Capabilities ── */}
      <section className="max-w-6xl mx-auto mb-24 grid lg:grid-cols-2 gap-8">
         <div className="p-10 rounded-[3rem] bg-rose-50 dark:bg-rose-900/10 border-2 border-rose-100 dark:border-rose-900/30">
            <h3 className="text-2xl font-black text-rose-600 dark:text-rose-400 mb-6 flex items-center gap-3 uppercase tracking-tight">
               <AlertCircle /> Strict Limitations
            </h3>
            <p className="text-rose-700/70 dark:text-rose-300/60 mb-8 font-medium italic text-sm">
               Due to their execution in separate threads, Workers have restricted access to global objects.
            </p>
            <div className="grid grid-cols-1 gap-3">
               {[
                 'NO access to the DOM (document, window)',
                 'NO access to "this" as Window context',
                 'CANNOT access parent variables directly',
                 'CANNOT run browser UI alerts/modals'
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-3 p-4 bg-white dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/50 rounded-2xl shadow-sm text-sm font-bold text-rose-900 dark:text-rose-300">
                    <span className="text-xs">❌</span> {item}
                 </div>
               ))}
            </div>
         </div>

         <div className="p-10 rounded-[3rem] bg-emerald-50 dark:bg-emerald-900/10 border-2 border-emerald-100 dark:border-emerald-900/30">
            <h3 className="text-2xl font-black text-emerald-600 dark:text-emerald-400 mb-6 flex items-center gap-3 uppercase tracking-tight">
               <CheckCircle /> Full Capabilities
            </h3>
            <p className="text-emerald-700/70 dark:text-emerald-300/60 mb-8 font-medium italic text-sm">
               Workers can still perform almost any computational or network task.
            </p>
            <div className="grid grid-cols-1 gap-3">
               {[
                 'Native Fetch / AJAX support',
                 'Full WebSocket communication',
                 'Timeouts & Intervals supported',
                 'Full access to IndexedDB'
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-3 p-4 bg-white dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/50 rounded-2xl shadow-sm text-sm font-bold text-emerald-900 dark:text-emerald-300">
                    <span className="text-xs">✅</span> {item}
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* ── 10. Real World Use Cases ── */}
      <section className="max-w-6xl mx-auto mb-24">
        <h2 className="text-3xl font-black text-center mb-12">Real-World Applications</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
           {[
             { title: 'Image Processing', icon: ImageIcon, color: 'text-indigo-500', bg: 'bg-indigo-50 dark:bg-indigo-900/20', desc: 'Applying filters and resizing large photos locally.' },
             { title: 'Data Analysis', icon: BarChart3, color: 'text-sky-500', bg: 'bg-sky-50 dark:bg-sky-900/20', desc: 'Parsing huge JSON datasets or running complex statistics.' },
             { title: 'File Compression', icon: FileArchive, color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-900/20', desc: 'Zipping files before upload without lag.' },
             { title: 'Game Logic', icon: Gamepad2, color: 'text-rose-500', bg: 'bg-rose-50 dark:bg-rose-900/20', desc: 'Pathfinding and physics calculations for web games.' },
             { title: 'Background API', icon: Globe, color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-900/20', desc: 'Syncing large chunks of local data with a server.' },
             { title: 'Audio Processing', icon: Activity, color: 'text-violet-500', bg: 'bg-violet-50 dark:bg-violet-900/20', desc: 'Analyzing waveforms and frequency data in real-time.' },
           ].map((item, i) => (
             <div key={i} className="group p-8 rounded-3xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-6`}>
                   <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h4 className="text-lg font-black text-gray-900 dark:text-white mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* ── 9. Types of Workers ── */}
      <section className="max-w-6xl mx-auto mb-24 grid lg:grid-cols-2 gap-10">
         <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 p-10 rounded-[3rem] text-white shadow-xl shadow-indigo-500/10">
            <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
               <Cpu className="opacity-50" /> 1. Dedicated Worker
            </h3>
            <p className="font-bold text-indigo-100/80 mb-6 text-sm">Used by a single script in a single tab.</p>
            <div className="p-6 bg-black/20 rounded-2xl border border-white/10 font-mono text-xs">
               const myWorker = new Worker("worker.js");
            </div>
         </div>
         <div className="bg-gradient-to-br from-sky-500 to-sky-700 p-10 rounded-[3rem] text-white shadow-xl shadow-sky-500/10">
            <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
               <Layers className="opacity-50" /> 2. Shared Worker
            </h3>
            <p className="font-bold text-sky-100/80 mb-6 text-sm">Shared between multiple scripts (Tabs, Iframes).</p>
            <div className="p-6 bg-black/20 rounded-2xl border border-white/10 font-mono text-xs">
               const sharedWorker = new SharedWorker("s.js");
            </div>
         </div>
      </section>

      {/* ── 11 & 12. Pro Tips & Mistakes ── */}
      <section className="max-w-6xl mx-auto mb-20 grid lg:grid-cols-2 gap-10">
         <div className="space-y-6">
            <h3 className="text-3xl font-black text-gray-900 dark:text-white flex items-center gap-4">
               <Zap className="text-yellow-500" /> Pro Tips
               <span className="text-xs font-black text-gray-400 uppercase tracking-widest ml-auto">15+ YRS Experience</span>
            </h3>
            
            <div className="space-y-4">
               {[
                 { tip: 'Don\'t overuse workers!', body: 'There is a performance cost to creating a worker. Great for heavy stuff, overkill for 1+1.', color: 'text-yellow-500' },
                 { tip: 'Use Transferable Objects', body: 'Instead of cloning data (slow), use buffers to pass ownership (zero-copy speed!).', color: 'text-sky-500' },
                 { tip: 'Always Terminate', body: 'Use worker.terminate() after the task to prevent nasty memory leaks.', color: 'text-indigo-500' },
                 { tip: 'Blob Workers', body: 'You can create workers from dynamic strings using URL.createObjectURL(blob).', color: 'text-emerald-500' }
               ].map((item, i) => (
                 <div key={i} className="p-6 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-[2rem] shadow-sm hover:shadow-md transition-all">
                    <h5 className={`font-black text-sm mb-1 ${item.color}`}>{item.tip}</h5>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold">{item.body}</p>
                 </div>
               ))}
            </div>
         </div>

         <div className="space-y-6">
            <h3 className="text-3xl font-black text-gray-900 dark:text-white flex items-center gap-4">
               <AlertCircle className="text-rose-500" /> Fatal Mistakes
               <span className="text-xs font-black text-gray-400 uppercase tracking-widest ml-auto">Common Pitfalls</span>
            </h3>
            
            <div className="space-y-4">
               {[
                 { title: 'Blocking the main UI loop', body: 'Never run heavy logic on the main thread when a worker is available.' },
                 { title: 'Forgetting "self" keyword', body: 'In workers, use self or just global names instead of window objects.' },
                 { title: 'Huge Data Transfer', body: 'Sending massive objects frequently via postMessage can be slow due to cloning.' },
                 { title: 'DOM Access attempts', body: 'Trying to select elements (document.querySelector) will crash the worker.' }
               ].map((item, i) => (
                 <div key={i} className="p-6 bg-rose-50/50 dark:bg-rose-950/10 border border-rose-100 dark:border-rose-900/30 rounded-[2rem]">
                    <h5 className="font-black text-rose-600 dark:text-rose-400 text-sm mb-1 uppercase italic tracking-tighter">🚨 {item.title}</h5>
                    <p className="text-xs text-rose-800/60 dark:text-rose-400/60 font-medium leading-relaxed">{item.body}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* ── Summary Banner ── */}
      <footer className="max-w-6xl mx-auto mb-20">
         <div className="bg-slate-900 p-12 lg:p-16 rounded-[4rem] text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-transparent"></div>
            <h2 className="text-4xl font-black text-white mb-6 relative z-10">Ready to build parallel apps?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-10 font-bold relative z-10">
               Web Workers are the key to high-performance web applications that feel fluid, interactive, and professional.
            </p>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
               <div className="px-8 py-3 bg-white text-slate-900 rounded-full font-black text-sm hover:scale-105 transition-transform cursor-pointer">Start Coding</div>
               <div className="px-8 py-3 bg-slate-800 text-white rounded-full font-black text-sm hover:bg-slate-700 transition-all cursor-pointer">View Docs</div>
            </div>
         </div>
      </footer>

      {/* Tailwind-like utility animations */}
      <style>{`
        @keyframes progress-slow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
        .animate-progress-slow {
          animation: progress-slow 4s linear infinite;
        }
      `}</style>

    </div>
  );
};

export default WebWorkerApi;