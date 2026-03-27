import React, { useState, useEffect } from 'react';
import {
  Globe, Server, Cpu, ShieldCheck, ShieldAlert, AlertCircle, 
  Info, Terminal, CodeXml, Layers, Boxes, RefreshCw, Zap, 
  Search, Send, Save, Trash2, ArrowRight, MousePointer2, 
  Activity, Wifi, CheckCircle, Smartphone, Copy, Check, 
  XCircle, Filter, ChevronRight, Lock, Key, Layout
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
            <div className="flex space-x-1.5 grayscale opacity-50 text-[10px]">
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

// ─── Interactive Fetch Sandbox ───────────────────────────────────────────────
const FetchSandbox = () => {
  const [data, setData] = useState<any[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [requestLog, setRequestLog] = useState<string[]>([]);

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);
    setData(null);
    setRequestLog(prev => [...prev.slice(-4), `GET /posts [${new Date().toLocaleTimeString()}]`]);

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
      if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      const json = await response.json();
      setData(json);
      setRequestLog(prev => [...prev.slice(-4), `RECV status: 200 OK`]);
    } catch (err: any) {
      setError(err.message);
      setRequestLog(prev => [...prev.slice(-4), `ERR client/network: ${err.message}`]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-[3rem] p-8 lg:p-12 border border-gray-200 dark:border-gray-700 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 flex gap-2">
         <div className="px-3 py-1 bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-sky-200 dark:border-sky-800/50 flex items-center gap-1.5">
            <Activity className="w-3 h-3" /> Live API Lab
         </div>
      </div>

      <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2 flex items-center gap-4">
        <Wifi className="w-8 h-8 text-sky-500" /> Interactive Fetch Sandbox
      </h3>
      <p className="text-[10px] font-black text-gray-400 mb-10 uppercase tracking-[0.2em]">Request/Response Loop Simulator</p>

      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5 space-y-6">
           <div className="p-8 rounded-[2.5rem] bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 flex flex-col items-center justify-center min-h-[300px] text-center">
              <div className={`w-16 h-16 rounded-[1.5rem] mb-6 flex items-center justify-center transition-all shadow-xl ${loading ? 'bg-sky-500 animate-pulse rotate-12' : 'bg-white dark:bg-gray-800 rotate-0'}`}>
                 {loading ? <RefreshCw className="w-8 h-8 text-white animate-spin" /> : 
                  error ? <XCircle className="w-8 h-8 text-rose-500" /> :
                  data ? <CheckCircle className="w-8 h-8 text-emerald-500" /> :
                  <Search className="w-8 h-8 text-gray-300" />}
              </div>
              
              <div className="space-y-3">
                 <h4 className="text-lg font-black text-gray-900 dark:text-white">
                    {loading ? 'Fetching Data...' : 
                     error ? 'Connection Failed' : 
                     data ? 'Data Retrieved' : 'Ready to Request'}
                 </h4>
                 <p className="text-xs font-bold text-gray-400 max-w-[200px] mx-auto leading-relaxed">
                    Click the button below to initiate an asynchronous GET request to JSONPlaceholder API.
                 </p>
              </div>

              <button 
                onClick={fetchPosts}
                disabled={loading}
                className="mt-8 px-8 py-3.5 bg-sky-500 text-white rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg shadow-sky-500/20"
              >
                {loading ? 'Waiting...' : 'Fetch PostsNow'}
              </button>
           </div>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-6">
           {/* Terminal Window */}
           <div className="bg-slate-900 rounded-[2.5rem] p-8 border border-white/5 shadow-2xl flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                 <div className="flex gap-1.5 opacity-30">
                    <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                 </div>
                 <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">JSON Output / Network Log</span>
                 <Terminal className="text-sky-500 w-4 h-4" />
              </div>

              <div className="flex-1 space-y-4 font-mono text-[11px] overflow-auto custom-scrollbar pr-2 max-h-[350px]">
                 <div className="space-y-1">
                    <span className="text-slate-500 italic">// Activity History</span>
                    {requestLog.map((log, i) => (
                      <div key={i} className={`flex items-center gap-2 ${log.includes('ERR') ? 'text-rose-400' : 'text-emerald-400'}`}>
                         <span className="text-slate-500">➜</span> {log}
                      </div>
                    ))}
                 </div>

                 {data && (
                   <div className="mt-8 space-y-4 pt-4 border-t border-white/5">
                      <span className="text-sky-400 font-bold tracking-widest uppercase text-[10px]">// Response Payload (Array)</span>
                      <pre className="text-sky-300 leading-relaxed whitespace-pre-wrap">
                         {JSON.stringify(data, null, 2)}
                      </pre>
                   </div>
                 )}

                 {!data && !loading && !error && (
                   <div className="text-slate-700 italic border-t border-white/5 pt-4">
                      Waiting for server handshake...
                   </div>
                 )}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────
const WebFetchApi: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#fdfdff] dark:bg-[#0a0c10] min-h-screen font-sans text-gray-800 dark:text-gray-200 selection:bg-sky-100 selection:text-sky-700 dark:selection:bg-sky-900/40">
      
      {/* ── Hero Header ── */}
      <header className="max-w-5xl mx-auto text-center mb-24 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-br from-sky-400/10 to-indigo-600/10 rounded-full blur-[120px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-5 bg-gradient-to-[135deg] from-sky-500 to-indigo-600 rounded-[2.5rem] mb-10 shadow-2xl shadow-sky-500/20 transform hover:-rotate-6 transition-all duration-500">
          <Wifi className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-6xl sm:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tight leading-none uppercase">
          Web Fetch <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">API</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The modern standard for network requests. Seamlessly fetch, send, and manipulate server data using clean, promise-based syntax.
        </p>
      </header>

      {/* ── 1. What is Fetch API ── */}
      <section className="max-w-6xl mx-auto mb-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-50 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-sky-100 dark:border-sky-800/50">
            <Info className="w-4 h-4" /> Core Interface
          </div>
          <h2 className="text-4xl font-black text-gray-900 dark:text-white leading-tight">
            The Modern Standard <br /> for HTTP Requests
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
            The Fetch API is a modern JavaScript interface used to make HTTP requests (GET, POST, PUT, DELETE) to servers. It replaces the old, complex <strong>XMLHttpRequest</strong> with a cleaner, Promise-based implementation.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4">
             <div className="p-6 rounded-[2.5rem] bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-800/30 group hover:shadow-lg transition-all">
                <Zap className="w-10 h-10 text-indigo-500 mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="font-black text-gray-900 dark:text-white text-lg mb-2 leading-none uppercase tracking-tighter">Promise Based</h4>
                <p className="text-[11px] font-bold text-indigo-700/60 dark:text-indigo-400/60 leading-relaxed uppercase tracking-widest">Native async support</p>
             </div>
             <div className="p-6 rounded-[2.5rem] bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-800/30 group hover:shadow-lg transition-all">
                <Globe className="w-10 h-10 text-emerald-500 mb-6 group-hover:rotate-12 transition-transform" />
                <h4 className="font-black text-gray-900 dark:text-white text-lg mb-2 leading-none uppercase tracking-tighter">Universal UI</h4>
                <p className="text-[11px] font-bold text-emerald-700/60 dark:text-emerald-400/60 leading-relaxed uppercase tracking-widest">Works with any API</p>
             </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-10 lg:p-14 rounded-[4rem] border border-gray-100 dark:border-gray-700 shadow-xl relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-8 opacity-5 text-sky-500">
              <Server className="w-64 h-64 animate-pulse" />
           </div>
           
           <div className="relative z-10 space-y-12">
              <h3 className="text-3xl font-black leading-tight border-b dark:border-gray-700 pb-4">The Fetch <br/> Request Lifecycle</h3>
              <div className="space-y-6">
                 {[
                   { step: 1, label: 'Initiate Request', desc: 'Call fetch() with the target URL.' },
                   { step: 2, label: 'Receive Response', desc: 'The server returns a Response object.' },
                   { step: 3, label: 'Convert Data', desc: 'Transform stream into JSON, Text, or Blob.' },
                   { step: 4, label: 'Deploy to UI', desc: 'State updates and the UI renders the data.' }
                 ].map((s, i) => (
                   <div key={i} className="flex items-center gap-6 group/item">
                      <div className="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/30 border border-sky-200 dark:border-sky-800 flex items-center justify-center font-black text-sky-600 text-lg group-hover/item:scale-110 transition-transform">
                         {s.step}
                      </div>
                      <div>
                         <h5 className="font-black text-sm uppercase tracking-widest">{s.label}</h5>
                         <p className="text-[10px] font-bold text-gray-500 dark:text-gray-400 leading-relaxed">{s.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* ── 4 & 5. Basic Syntax ── */}
      <section className="max-w-6xl mx-auto mb-24 grid lg:grid-cols-12 gap-10 items-start">
         <div className="lg:col-span-5 space-y-8">
            <h2 className="text-4xl font-black text-gray-900 dark:text-white">Clean & Readable</h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 font-medium">Fetch provides a logic-driven API that flows naturally using Promises.</p>
            
            <div className="space-y-4">
               {[
                 { title: 'The Old Way', tech: 'XMLHttpRequest', status: '❌ Obsolete', color: 'text-rose-500', mood: '😓 Complex & hard to manage' },
                 { title: 'The Modern Way', tech: 'Fetch API', status: '✅ Standard', color: 'text-emerald-500', mood: '😎 Simple & scalable' }
               ].map((item, i) => (
                 <div key={i} className="p-6 rounded-3xl bg-white dark:bg-gray-800 border-2 border-gray-50 dark:border-gray-700 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                       <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">{item.title}</span>
                       <span className={`text-[10px] font-black uppercase ${item.color}`}>{item.status}</span>
                    </div>
                    <h4 className="text-xl font-black mb-1">{item.tech}</h4>
                    <p className="text-xs font-bold text-gray-500 italic">"{item.mood}"</p>
                 </div>
               ))}
            </div>
         </div>

         <div className="lg:col-span-7">
            <CodeBlock 
              title="Standard Promise Chain (GET)"
              language="javascript"
              code={`// Basic Fetch Syntax
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => {
     // 1. Convert stream to JSON
     return response.json();
  })
  .then(data => {
     // 2. Access the data array
     console.log(data); 
  })
  .catch(error => {
     // 3. Handle network failures
     console.error(error);
  });`}
            />
         </div>
      </section>

      {/* ── 7. Best Practice: Async/Await ── */}
      <section className="max-w-6xl mx-auto mb-24">
         <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-[3.5rem] p-10 lg:p-16 text-white relative overflow-hidden shadow-2xl group">
            <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 transition-all duration-1000 group-hover:rotate-45">
               <Cpu className="w-80 h-80 text-indigo-500" />
            </div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
               <div className="space-y-8">
                  <h2 className="text-4xl font-black">Native Async/Await</h2>
                  <p className="text-slate-400 font-medium leading-relaxed italic">The preferred, most scalable way to write Fetch requests in modern JavaScript.</p>
                  
                  <div className="grid grid-cols-1 gap-4">
                     {[
                       'Flattened code structure',
                       'Native try/catch error handling',
                       'Easily chain multiple dependent requests',
                       'Highly readable for complex teams'
                     ].map((point, i) => (
                       <div key={i} className="flex items-center gap-3">
                          <CheckCircle className="text-emerald-400 w-5 h-5" />
                          <span className="text-xs font-bold text-slate-300">{point}</span>
                       </div>
                     ))}
                  </div>
               </div>

               <CodeBlock 
                 title="Best Practice Fetch (async/await)"
                 language="javascript"
                 code={`async function getData() {
  try {
    const res = await fetch("https://api.example.com/data");
    
    // Check if network level was OK
    if (!res.ok) throw new Error("HTTP Status Error");

    const data = await res.json();
    console.log(data);
  } catch (error) {
    // Catches network errors AND manual throws
    console.error("Fetch failure:", error);
  }
}

getData();`}
               />
            </div>
         </div>
      </section>

      {/* ── INTERACTIVE SANDBOX ── */}
      <section className="max-w-6xl mx-auto mb-24">
         <FetchSandbox />
      </section>

      {/* ── 8 & 9. POST and Methods ── */}
      <section className="max-w-6xl mx-auto mb-24 grid lg:grid-cols-12 gap-12 items-start">
         <div className="lg:col-span-7">
            <CodeBlock 
              title="Sending Data (POST Request)"
              language="javascript"
              code={`fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST", // Specify the method
  headers: {
    // Tell the server we are sending JSON
    "Content-Type": "application/json",
    "Authorization": "Bearer TOKEN_STRING"
  },
  body: JSON.stringify({
    title: "New Post",
    body: "Content goes here",
    userId: 1
  })
})
.then(res => res.json())
.then(data => console.log("Created:", data));`}
            />
         </div>

         <div className="lg:col-span-5 space-y-6">
            <h3 className="text-3xl font-black flex items-center gap-3 mb-4">
               <Layers className="text-sky-500" /> HTTP Verb Map
            </h3>
            <div className="space-y-3">
               {[
                 { method: 'GET', desc: 'Fetch resource / data', color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-950/20' },
                 { method: 'POST', desc: 'Create new entry', color: 'text-sky-500', bg: 'bg-sky-50 dark:bg-sky-900/20' },
                 { method: 'PUT', desc: 'Update existing entry', color: 'text-indigo-500', bg: 'bg-indigo-50 dark:bg-indigo-950/20' },
                 { method: 'DELETE', desc: 'Remove entry from server', color: 'text-rose-500', bg: 'bg-rose-50 dark:bg-rose-950/20' }
               ].map((verb, i) => (
                 <div key={i} className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl group hover:shadow-md transition-shadow">
                    <span className={`px-4 py-1.5 rounded-lg ${verb.bg} ${verb.color} font-black text-xs`}>{verb.method}</span>
                    <span className="text-[10px] uppercase font-black text-gray-400 group-hover:text-gray-700 transition-colors">{verb.desc}</span>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* ── 10. The res.ok Pitfall ── */}
      <section className="max-w-6xl mx-auto mb-24">
         <div className="p-10 lg:p-16 rounded-[4rem] bg-rose-50 dark:bg-rose-950/10 border-2 border-rose-100 dark:border-rose-900/40 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5 text-rose-500">
               <ShieldAlert className="w-48 h-48" />
            </div>
            
            <div className="max-w-3xl relative z-10 space-y-6">
               <h3 className="text-3xl font-black text-rose-600 dark:text-rose-400 flex items-center gap-4">
                  <AlertCircle /> The res.ok Protocol
               </h3>
               <p className="text-lg text-rose-900/70 dark:text-rose-400/60 font-medium leading-relaxed">
                 A common mistake is assuming <code>fetch</code> will fail if the server returns a 404 or 500 status code. <b>It won't!</b> Fetch only throws on hardware/network failures.
               </p>
               
               <div className="p-6 rounded-3xl bg-white dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/50">
                  <h5 className="font-black text-rose-600 italic mb-2 text-sm">Mandatory Check:</h5>
                  <code className="text-base font-black text-rose-800 dark:text-rose-300 block">
                    if (!response.ok) &#123; throw new Error("HTTP Error!"); &#125;
                  </code>
               </div>

               <p className="text-xs font-bold text-rose-900/40 uppercase tracking-widest">
                  Without this check, your app may process empty or error data as a "Success".
               </p>
            </div>
         </div>
      </section>

      {/* ── 12. Real World Use Cases ── */}
      <section className="max-w-6xl mx-auto mb-24">
        <h2 className="text-4xl font-black text-center mb-16 italic tracking-tighter">Global Deployment</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {[
             { title: 'API Integrations', icon: Boxes, color: 'text-sky-500', bg: 'bg-sky-50 dark:bg-sky-900/20', desc: 'Consuming REST APIs from JSONPlaceholder, Stripe, or GitHub.' },
             { title: 'Authentication', icon: Lock, color: 'text-indigo-500', bg: 'bg-indigo-50 dark:bg-indigo-950/20', desc: 'Secure login systems using JSON Web Tokens (JWT) in headers.' },
             { title: 'Weather Stations', icon: RefreshCw, color: 'text-teal-500', bg: 'bg-teal-50 dark:bg-teal-900/20', desc: 'Real-time syncing with weather satellites and global sensors.' },
             { title: 'E-commerce', icon: Layout, color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-900/20', desc: 'Loading product catalogs and sending secure order payloads.' },
             { title: 'Social Feeds', icon: Activity, color: 'text-violet-500', bg: 'bg-violet-50 dark:bg-violet-900/20', desc: 'Dynamic scrolling feeds with thousands of community posts.' },
             { title: 'Mobile Sync', icon: Smartphone, color: 'text-rose-500', bg: 'bg-rose-50 dark:bg-rose-900/20', desc: 'Updating account states and configuration files silently.' },
           ].map((item, i) => (
             <div key={i} className="group p-8 rounded-[3.5rem] bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all">
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
         <div className="bg-sky-600 rounded-[4rem] p-10 lg:p-16 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-10">
               <Zap className="w-64 h-64" />
            </div>
            <h3 className="text-3xl font-black mb-12 flex items-center gap-4">
               <Zap className="text-white" /> Professional Data Strategies
               <span className="text-[10px] font-black text-sky-200 uppercase tracking-[0.3em] ml-auto">EST. 15 YRS</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-12 relative z-10">
               <div className="space-y-8">
                  {[
                    { tip: 'Mandatory ok check', body: 'Always check if res.ok is true to prevent processing invalid HTTP responses.' },
                    { tip: 'Standardize Async', body: 'Use async/await consistently across your team for readable, scalable logic.' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 p-6 rounded-3xl bg-white/10 border border-white/10 hover:bg-white/20 transition-all">
                       <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-white font-black text-sm flex-shrink-0">{i+1}</div>
                       <div>
                          <h5 className="font-black text-base mb-1">{item.tip}</h5>
                          <p className="text-xs text-sky-100/60 font-medium leading-relaxed">{item.body}</p>
                       </div>
                    </div>
                  ))}
               </div>
               <div className="space-y-8">
                  {[
                    { tip: 'Abstract API Logic', body: 'Seperate your fetch calls into a dedicated service file for better maintenance.' },
                    { tip: 'User Visual Cues', body: 'Always implement loading spinners/skeletons to keep users informed during fetch.' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 p-6 rounded-3xl bg-white/10 border border-white/10 hover:bg-white/20 transition-all">
                       <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-white font-black text-sm flex-shrink-0">{i+3}</div>
                       <div>
                          <h5 className="font-black text-base mb-1">{item.tip}</h5>
                          <p className="text-xs text-sky-100/60 font-medium leading-relaxed">{item.body}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Ignored Errors', body: 'Failing to catch network failures or HTTP errors properly.' },
              { title: 'Forgotten Await', body: 'Calling .json() without await, returning a pending promise.' },
              { title: 'Header Mismatch', body: 'Sending JSON body but not setting Content-Type: application/json.' },
              { title: '404 Assumptions', body: 'Assuming fetch throws on 404. It only throws on network failure!' }
            ].map((err, i) => (
              <div key={i} className="p-8 rounded-[2.5rem] bg-rose-50/50 dark:bg-rose-950/10 border border-rose-100 dark:border-rose-900/20">
                 <h5 className="text-rose-500 font-black uppercase text-[10px] tracking-widest mb-3">API_FAULT_0{i+1}</h5>
                 <h4 className="font-black text-rose-900 dark:text-rose-200 text-sm mb-2">{err.title}</h4>
                 <p className="text-[10px] text-rose-700/60 dark:text-rose-400/60 font-bold leading-relaxed">{err.body}</p>
              </div>
            ))}
         </div>
      </section>

      {/* ── Summary Banner ── */}
      <footer className="max-w-6xl mx-auto mb-20">
         <div className="bg-slate-900 p-16 lg:p-24 rounded-[5rem] text-center relative overflow-hidden group shadow-2xl border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <h2 className="text-5xl font-black text-white mb-8 relative z-10 italic uppercase tracking-tighter">Connect Your Logic</h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-12 font-bold relative z-10 leading-relaxed text-lg">
               Mastering the Fetch API is the bridge between static interfaces and dynamic, world-class network applications.
            </p>
            <div className="flex flex-wrap justify-center gap-6 relative z-10 font-black uppercase tracking-widest text-[10px]">
               <div className="px-12 py-5 bg-sky-500 text-white rounded-full hover:scale-105 transition-transform cursor-pointer shadow-xl shadow-sky-500/20">Read MDN Docs</div>
               <div className="px-12 py-5 border border-slate-700 text-white rounded-full hover:bg-slate-800 transition-all cursor-pointer">Live API Feed</div>
            </div>
         </div>
         <p className="mt-12 text-center text-[10px] font-black text-gray-400 uppercase tracking-[0.5em] opacity-30">Network Layer Access © 2026</p>
      </footer>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #0ea5e9;
          border-radius: 10px;
        }
        @keyframes rotate-12 {
          to { transform: rotate(12deg); }
        }
      `}</style>

    </div>
  );
};

export default WebFetchApi;