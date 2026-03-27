import React, { useState, useEffect, useRef } from 'react';
import {
  MapPin, Navigation, Map, Globe, ShieldCheck, ShieldAlert, 
  AlertCircle, Info, Terminal, CodeXml, Layers, Boxes, 
  Truck, Utensils, CloudSun, Activity, Cpu, Trash2, CheckCircle, 
  Smartphone, Watch, Copy, Check, MousePointer2, Radar, Compass,
  Locate, XCircle, Zap, ExternalLink, Settings
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
        <button onClick={handleCopy} className="p-2 rounded-lg bg-gray-800/80 backdrop-blur-sm text-gray-400 hover:bg-emerald-500 hover:text-white transition-all border border-gray-700 shadow-lg" title="Copy code">
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-5 overflow-x-auto text-sm font-mono bg-[#0d1117] text-emerald-300 leading-relaxed rounded-b-xl">
        <code>{code}</code>
      </pre>
    </div>
  );
};

// ─── Interactive Geolocation Sandbox ─────────────────────────────────────────
const LocationSandbox = () => {
  const [pos, setPos] = useState<{lat: number, lng: number} | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isWatching, setIsWatching] = useState(false);
  const watchId = useRef<number | null>(null);

  const getLocation = () => {
    setIsLoading(true);
    setError(null);

    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      setIsLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setPos({ 
          lat: parseFloat(position.coords.latitude.toFixed(4)), 
          lng: parseFloat(position.coords.longitude.toFixed(4)) 
        });
        setIsLoading(false);
      },
      (err) => {
        setError(err.message);
        setIsLoading(false);
      },
      { enableHighAccuracy: true, timeout: 5000 }
    );
  };

  const toggleWatch = () => {
    if (isWatching) {
      if (watchId.current !== null) {
        navigator.geolocation.clearWatch(watchId.current);
        watchId.current = null;
      }
      setIsWatching(false);
    } else {
      setIsWatching(true);
      watchId.current = navigator.geolocation.watchPosition(
        (position) => {
          setPos({ 
            lat: parseFloat(position.coords.latitude.toFixed(4)), 
            lng: parseFloat(position.coords.longitude.toFixed(4)) 
          });
        },
        (err) => setError(err.message),
        { enableHighAccuracy: true }
      );
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-[3rem] p-8 lg:p-12 border border-gray-200 dark:border-gray-700 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 flex gap-2">
         <div className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-200 dark:border-emerald-800/50 flex items-center gap-1.5">
            <Locate className="w-3 h-3" /> Real-time tracking
         </div>
      </div>

      <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2 flex items-center gap-4">
        <Radar className="w-8 h-8 text-emerald-500" /> Geolocation Sandbox
      </h3>
      <p className="text-[10px] font-black text-gray-400 mb-10 uppercase tracking-[0.2em]">Live coordinate engine v2.4</p>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-6">
           <div className="p-8 rounded-[2.5rem] bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 relative flex flex-col items-center justify-center min-h-[250px] overflow-hidden">
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                 <div className="w-full h-full border border-gray-400 rounded-full animate-ping"></div>
                 <div className="w-2/3 h-2/3 border border-gray-400 rounded-full animate-ping delay-75 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              </div>
              
              {isLoading ? (
                <div className="text-center space-y-4 animate-pulse">
                   <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto">
                      <Compass className="w-6 h-6 text-emerald-500 animate-spin" />
                   </div>
                   <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Searching Satellites...</p>
                </div>
              ) : error ? (
                <div className="text-center space-y-3">
                   <div className="w-12 h-12 bg-rose-500/20 rounded-full flex items-center justify-center mx-auto text-rose-500">
                      <XCircle />
                   </div>
                   <p className="text-xs font-bold text-rose-500">{error}</p>
                   <button onClick={getLocation} className="text-[10px] font-black text-gray-400 uppercase underline">Try Again</button>
                </div>
              ) : pos ? (
                <div className="text-center space-y-4 relative z-10 scale-in-center">
                   <MapPin className="w-10 h-10 text-emerald-500 mx-auto drop-shadow-xl" />
                   <div className="space-y-1">
                      <div className="text-3xl font-black text-gray-900 dark:text-white">{pos.lat}° N</div>
                      <div className="text-3xl font-black text-gray-900 dark:text-white">{pos.lng}° E</div>
                   </div>
                   <div className="inline-flex gap-2 px-3 py-1 bg-emerald-500/10 rounded-full">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse mt-1.5"></div>
                      <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Verified Position</span>
                   </div>
                </div>
              ) : (
                <div className="text-center space-y-4">
                   <div className="w-16 h-16 rounded-[2rem] bg-white dark:bg-gray-800 flex items-center justify-center mx-auto shadow-xl">
                      <Locate className="w-8 h-8 text-gray-300" />
                   </div>
                   <p className="text-xs font-bold text-gray-400">Click below to locate yourself</p>
                </div>
              )}
           </div>
           
           <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={getLocation} 
                className="py-4 bg-emerald-500 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-[1.03] transition-transform flex items-center justify-center gap-2"
              >
                <Locate size={14} /> Get Position
              </button>
              <button 
                onClick={toggleWatch} 
                className={`py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${
                  isWatching ? 'bg-indigo-500 text-white animate-pulse' : 'bg-gray-900 text-white dark:bg-white dark:text-black'
                }`}
              >
                {isWatching ? <Watch size={14} /> : <Navigation size={14} />}
                {isWatching ? 'Watching Live' : 'Watch Position'}
              </button>
           </div>
        </div>

        <div className="space-y-8">
           <div className="bg-slate-900 rounded-[2.5rem] p-8 border border-white/5 shadow-2xl">
              <h4 className="text-xs font-black text-indigo-400 uppercase tracking-[0.2em] mb-8 border-b border-white/5 pb-4">Logic Breakdown</h4>
              <div className="space-y-6">
                 <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-black text-indigo-400 text-sm flex-shrink-0">🚀</div>
                    <div>
                       <h5 className="font-extrabold text-white text-sm mb-1 uppercase tracking-tight">navigator.geolocation</h5>
                       <p className="text-[10px] text-slate-400 font-bold leading-relaxed">The main entry point for the browser API. Always check for existence first.</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-black text-emerald-400 text-sm flex-shrink-0">📡</div>
                    <div>
                       <h5 className="font-extrabold text-white text-sm mb-1 uppercase tracking-tight">position.coords</h5>
                       <p className="text-[10px] text-slate-400 font-bold leading-relaxed">The object containing Latitude, Longitude, and Accuracy data.</p>
                    </div>
                 </div>
                 <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3 font-mono text-[10px]">
                    <div className="flex justify-between border-b border-white/5 pb-2">
                       <span className="text-slate-500">Method used:</span>
                       <span className="text-indigo-400 font-bold">{isWatching ? 'watchPosition()' : 'getCurrentPosition()'}</span>
                    </div>
                    <div className="flex justify-between">
                       <span className="text-slate-500">Status:</span>
                       <span className={error ? 'text-rose-400' : 'text-emerald-400'}>{error ? 'Error' : pos ? 'Connected' : 'Idle'}</span>
                    </div>
                 </div>
              </div>
           </div>
           
           <div className="p-6 rounded-[2rem] bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/30">
              <h5 className="text-xs font-black text-indigo-600 dark:text-indigo-400 mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Permission Logic
              </h5>
              <p className="text-[11px] font-bold text-indigo-800/60 dark:text-indigo-400/60 leading-relaxed italic">
                Browsers will prompt the user with "Allow knowgrow.edu to access your location?". If denied, the <code>error</code> callback is triggered.
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────
const WebGeolocationApi: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#fdfdff] dark:bg-[#0a0c10] min-h-screen font-sans text-gray-800 dark:text-gray-200 selection:bg-emerald-100 selection:text-emerald-700 dark:selection:bg-emerald-900/40">
      
      {/* ── Hero Header ── */}
      <header className="max-w-5xl mx-auto text-center mb-24 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-br from-emerald-400/10 to-teal-600/10 rounded-full blur-[120px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-5 bg-gradient-to-tr from-emerald-500 to-emerald-600 rounded-[2.5rem] mb-10 shadow-2xl shadow-emerald-500/20 transform hover:scale-110 transition-all duration-500">
          <MapPin className="w-12 h-12 text-white shadow-xl" />
        </div>
        <h1 className="text-6xl sm:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tighter leading-none uppercase italic">
          Geolocation <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">API</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          Map your users in the real world. Access GPS, Wi-Fi, and IP data with precision while maintaining strict privacy protocols.
        </p>
      </header>

      {/* ── 1. What is Web Geolocation ── */}
      <section className="max-w-6xl mx-auto mb-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-100 dark:border-emerald-800/50">
            <Info className="w-4 h-4" /> Core Feature
          </div>
          <h2 className="text-4xl font-black text-gray-900 dark:text-white leading-tight">
            Connecting Code <br /> to Coordinates
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
            The Web Geolocation API allows websites to access the user’s geographic location (latitude & longitude) using the browser. It intelligently switches between GPS, Wi-Fi signals, and IP addresses to find the best match.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4">
             <div className="p-6 rounded-[2.5rem] bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-800/30 group hover:shadow-lg transition-all">
                <Globe className="w-10 h-10 text-emerald-500 mb-6 group-hover:rotate-12 transition-transform" />
                <h4 className="font-black text-gray-900 dark:text-white text-lg mb-2 leading-none uppercase tracking-tighter">Privacy First</h4>
                <p className="text-[11px] font-bold text-emerald-700/60 dark:text-emerald-400/60 leading-relaxed uppercase tracking-widest">Requires explicit permission 🔐</p>
             </div>
             <div className="p-6 rounded-[2.5rem] bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-800/30 group hover:shadow-lg transition-all">
                <Map className="w-10 h-10 text-indigo-500 mb-6 group-hover:-translate-y-1 transition-transform" />
                <h4 className="font-black text-gray-900 dark:text-white text-lg mb-2 leading-none uppercase tracking-tighter">Auto-Detection</h4>
                <p className="text-[11px] font-bold text-indigo-700/60 dark:text-indigo-400/60 leading-relaxed uppercase tracking-widest">No manual input needed 📍</p>
             </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-10 lg:p-14 rounded-[4rem] border border-gray-100 dark:border-gray-700 shadow-xl relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-8 opacity-5 text-emerald-500">
              <Settings className="w-64 h-64 animate-spin-slow" />
           </div>
           
           <div className="relative z-10 space-y-10">
              <h3 className="text-3xl font-black leading-tight">The 4-Step <br/> Permission Flow</h3>
              <div className="space-y-6">
                 {[
                   { step: 1, label: 'Request', desc: 'Browser calls API & asks permission.' },
                   { step: 2, label: 'Response', desc: 'User allows or denies the prompt.' },
                   { step: 3, label: 'Capture', desc: 'Location data is fetched from hardware.' },
                   { step: 4, label: 'Execute', desc: 'Coordinates are returned to the callback.' }
                 ].map((s, i) => (
                   <div key={i} className="flex items-center gap-6 group/item">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center font-black text-emerald-600 text-lg group-hover/item:scale-110 transition-transform">
                         {s.step}
                      </div>
                      <div>
                         <h5 className="font-black text-sm uppercase tracking-widest">{s.label}</h5>
                         <p className="text-[10px] font-bold text-gray-500 leading-relaxed">{s.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* ── 4 & 5. Basic Syntax & Methods ── */}
      <section className="max-w-6xl mx-auto mb-24 grid lg:grid-cols-12 gap-10 items-start">
         <div className="lg:col-span-4 space-y-10">
            <div>
               <h2 className="text-4xl font-black mb-4">Core Syntax</h2>
               <p className="text-lg text-gray-500 dark:text-gray-400 font-medium">The API uses a callback-based system to handle asynchronous results.</p>
            </div>
            
            <div className="p-8 rounded-[2.5rem] bg-emerald-50 dark:bg-emerald-950/20 border-2 border-emerald-100 dark:border-emerald-800 pb-12">
               <h4 className="text-xs font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-6">Success Object</h4>
               <div className="space-y-4">
                  {[
                    { key: 'latitude', value: '13.0827' },
                    { key: 'longitude', value: '80.2707' },
                    { key: 'accuracy', value: '± 20m' }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center pb-2 border-b border-emerald-200 dark:border-emerald-800">
                       <span className="text-[10px] font-black uppercase text-emerald-700/40">{item.key}</span>
                       <span className="text-sm font-mono font-black text-emerald-600">{item.value}</span>
                    </div>
                  ))}
               </div>
               <p className="text-[10px] text-emerald-800/40 mt-6 font-bold uppercase tracking-tighter">Example: Chennai Region 📍</p>
            </div>
         </div>

         <div className="lg:col-span-8">
            <CodeBlock 
              title="Get One-time Location"
              language="javascript"
              code={`navigator.geolocation.getCurrentPosition(
  function(position) {
    // SUCCESS: Data returned as a position object
    console.log("Latitude:", position.coords.latitude);
    console.log("Longitude:", position.coords.longitude);
  },
  function(error) {
    // ERROR: Handle denial or timeout
    console.error("Error Message:", error.message);
  }
);`}
            />
            <CodeBlock 
              title="Real-time Tracking"
              language="javascript"
              code={`// Watch user movement
const id = navigator.geolocation.watchPosition(
  (pos) => {
    console.log("Current Lat:", pos.coords.latitude);
    console.log("Current Lng:", pos.coords.longitude);
  }
);

// Stop watching to save battery
navigator.geolocation.clearWatch(id);`}
            />
         </div>
      </section>

      {/* ── INTERACTIVE SANDBOX ── */}
      <section className="max-w-6xl mx-auto mb-24">
         <LocationSandbox />
      </section>

      {/* ── 9. Advanced Options ── */}
      <section className="max-w-6xl mx-auto mb-24">
         <div className="bg-slate-900 p-10 lg:p-16 rounded-[4rem] text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 transition-all duration-1000 group-hover:rotate-45">
               <Layers className="w-96 h-96 text-emerald-500" />
            </div>
            
            <div className="relative z-10 max-w-4xl">
               <h2 className="text-4xl font-black mb-8 flex items-center gap-4">
                  <Settings className="text-emerald-400" /> Advanced Parameters
               </h2>
               <p className="text-slate-400 text-lg font-medium mb-12">Fine-tune your location retrieval for balance between accuracy and performance.</p>
               
               <div className="grid md:grid-cols-3 gap-6 mb-12">
                  {[
                    { opt: 'enableHighAccuracy', val: 'true/false', desc: 'Forces the use of dedicated GPS hardware if available.' },
                    { opt: 'timeout', val: '5000 (ms)', desc: 'The maximum wait time before throwing an error.' },
                    { opt: 'maximumAge', val: '0 (ms)', desc: 'How long to cache the previous position result.' }
                  ].map((item, i) => (
                    <div key={i} className="p-6 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                       <code className="text-xs font-black text-emerald-400 block mb-2">{item.opt}</code>
                       <div className="text-[10px] font-black text-slate-500 uppercase mb-4">Value: {item.val}</div>
                       <p className="text-[11px] text-slate-300 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
               </div>

               <CodeBlock 
                 title="Production-Ready Request"
                 language="javascript"
                 code={`const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

navigator.geolocation.getCurrentPosition(success, error, options);`}
               />
            </div>
         </div>
      </section>

      {/* ── 12. Real World Use Cases ── */}
      <section className="max-w-6xl mx-auto mb-24">
        <h2 className="text-4xl font-black text-center mb-16">Real-World Logic</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {[
             { title: 'Logistics & Delivery', icon: Truck, color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-950/20', desc: 'Real-time calculation of distances for food and package tracking.' },
             { title: 'Nearby Services', icon: Utensils, color: 'text-indigo-500', bg: 'bg-indigo-50 dark:bg-indigo-950/20', desc: 'Finding restaurants, hospitals, or service centers near user.' },
             { title: 'Hyper-Local Weather', icon: CloudSun, color: 'text-sky-500', bg: 'bg-sky-50 dark:bg-sky-950/20', desc: 'Precise weather forecasts based on exact street coordinates.' },
             { title: 'Fitness Tracking', icon: Activity, color: 'text-violet-500', bg: 'bg-violet-50 dark:bg-violet-950/20', desc: 'Mapping run routes and calculating speeds via watchPosition.' },
             { title: 'Smart Ride-Hails', icon: Navigation, color: 'text-rose-500', bg: 'bg-rose-50 dark:bg-rose-950/20', desc: 'Automatic pickup point selection for taxi and carpool apps.' },
             { title: 'Device Locators', icon: Smartphone, color: 'text-teal-500', bg: 'bg-teal-50 dark:bg-teal-950/20', desc: 'Security services like "Find My Phone" using background tracking.' },
           ].map((item, i) => (
             <div key={i} className="group p-8 rounded-[3.5rem] bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all">
                <div className={`w-16 h-16 rounded-[2rem] ${item.bg} flex items-center justify-center mb-6 ring-4 ring-transparent group-hover:ring-current/10 transition-all`}>
                   <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <h4 className="text-xl font-black text-gray-900 dark:text-white mb-2">{item.title}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-bold leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* ── 13 & 14. Pro Tips & Mistakes ── */}
      <section className="max-w-6xl mx-auto mb-20 space-y-12">
         <div className="bg-emerald-900 rounded-[4rem] p-10 lg:p-16 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-10">
               <Zap className="w-64 h-64" />
            </div>
            <h3 className="text-3xl font-black mb-12 flex items-center gap-4">
               <Zap className="text-amber-400" /> Professional Geo-Strategies
               <span className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.3em] ml-auto">EST. 15 YRS</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-12 relative z-10">
               <div className="space-y-8">
                  {[
                    { tip: 'Explicit Error Handling', body: 'Never call Geolocation without a crash handler for PERMISSION_DENIED.' },
                    { tip: 'IP-Based Fallbacks', body: 'If GPS fails, use an external API to guess location via IP address.' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 p-6 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all">
                       <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-black text-sm flex-shrink-0">{i+1}</div>
                       <div>
                          <h5 className="font-black text-base mb-1">{item.tip}</h5>
                          <p className="text-xs text-slate-300 font-medium leading-relaxed">{item.body}</p>
                       </div>
                    </div>
                  ))}
               </div>
               <div className="space-y-8">
                  {[
                    { tip: 'Battery Optimization', body: 'Avoid heavy watchPosition use. It drains smartphone battery 🔋 rapidly.' },
                    { tip: 'Map Integration', body: 'Combine raw data with Leaflet.js or Google Maps for actual visualization.' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 p-6 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all">
                       <div className="w-10 h-10 rounded-2xl bg-amber-500/20 flex items-center justify-center text-amber-400 font-black text-sm flex-shrink-0">{i+3}</div>
                       <div>
                          <h5 className="font-black text-base mb-1">{item.tip}</h5>
                          <p className="text-xs text-slate-300 font-medium leading-relaxed">{item.body}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Permissions Ignored', body: 'Failing to handle users clicking "Deny".' },
              { title: 'HTTPS Requirements', body: 'Geolocation will NOT work on non-secure HTTP sites.' },
              { title: 'Inaccuracy Indoors', body: 'Depending solely on GPS when signals are weak.' },
              { title: 'Ghost Watches', body: 'Forgetting clearWatch(), causing massive memory leaks.' }
            ].map((err, i) => (
              <div key={i} className="p-8 rounded-[2.5rem] bg-rose-50/50 dark:bg-rose-950/10 border border-rose-100 dark:border-rose-900/20">
                 <h5 className="text-rose-500 font-black uppercase text-[10px] tracking-widest mb-3">FAIL_VECTOR_0{i+1}</h5>
                 <h4 className="font-black text-rose-900 dark:text-rose-200 text-sm mb-2">{err.title}</h4>
                 <p className="text-[10px] text-rose-700/60 dark:text-rose-400/60 font-bold leading-relaxed">{err.body}</p>
              </div>
            ))}
         </div>
      </section>

      {/* ── Summary Banner ── */}
      <footer className="max-w-6xl mx-auto mb-20 text-center">
         <div className="bg-slate-900 p-16 lg:p-24 rounded-[5rem] relative overflow-hidden group shadow-2xl border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <h2 className="text-5xl font-black text-white mb-8 relative z-10 italic uppercase tracking-tighter">Navigate Your Users</h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-12 font-bold relative z-10 leading-relaxed text-lg">
               Master the Geolocation API to build world-class delivery apps, local utility services, and beautiful interactive maps.
            </p>
            <div className="flex flex-wrap justify-center gap-6 relative z-10 font-black uppercase tracking-widest text-[10px]">
               <div className="px-12 py-5 bg-emerald-500 text-white rounded-full hover:scale-105 transition-transform cursor-pointer shadow-xl shadow-emerald-500/20">Read Full Specs</div>
               <div className="px-12 py-5 border border-slate-700 text-white rounded-full hover:bg-slate-800 transition-all cursor-pointer">Live Map Demo</div>
            </div>
         </div>
         <p className="mt-12 text-[10px] font-black text-gray-400 uppercase tracking-[0.5em] opacity-30">The Coordinate Layer © 2026</p>
      </footer>

      <style>{`
        @keyframes scale-in-center {
          0% { transform: scale(0); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        .scale-in-center {
          animation: scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

    </div>
  );
};

export default WebGeolocationApi;