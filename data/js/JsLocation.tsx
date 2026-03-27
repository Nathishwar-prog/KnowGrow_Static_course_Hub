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
  Network,
  GitBranch,
  Repeat,
  FunctionSquare,
  BoxSelect,
  AlertOctagon,
  Clock,
  MoreHorizontal,
  BookOpen,
  Lock,
  Ban,
  ShieldAlert,
  FileWarning,
  Compass,
  Link,
  Map,
  Search,
  Hash,
  LogIn,
  RotateCcw
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

const JsLocation: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#070b14] min-h-screen font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-indigo-600 dark:text-indigo-400 text-[10px] font-black mb-8 border border-indigo-100 dark:border-indigo-900/50 shadow-xl shadow-indigo-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <Compass size={14} className="fill-current" /> BROWSER NAVIGATION
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          JavaScript <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-500 to-cyan-500 drop-shadow-2xl">
            Location
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          Master URL manipulation. Navigate the web seamlessly using the <span className="text-gray-900 dark:text-white font-bold underline decoration-indigo-500 underline-offset-4 tracking-tight">window.location</span> object.
        </p>
      </header>

      {/* ── Section 1 & 2: What & Where ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden h-full">
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-colors duration-700"></div>
             <div className="flex flex-col gap-6 relative z-10 h-full">
               <div className="p-4 bg-indigo-50 dark:bg-indigo-500/10 rounded-2xl text-indigo-500 w-max border border-indigo-100 dark:border-indigo-500/20 shadow-lg">
                 <Map size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">1. What is JavaScript Location?</h3>
                 <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                   👉 The <code className="text-indigo-500 font-bold bg-indigo-50 dark:bg-indigo-900/30 px-2 py-0.5 rounded">location</code> object is part of the browser's <code className="text-indigo-500 font-bold bg-indigo-50 dark:bg-indigo-900/30 px-2 py-0.5 rounded">window</code> object and is used to get and control the current URL.
                 </p>
                 <div className="bg-cyan-50 dark:bg-cyan-500/5 p-5 rounded-2xl border border-cyan-200 dark:border-cyan-500/20">
                    <p className="font-bold text-cyan-700 dark:text-cyan-400 flex items-center gap-2 mb-2">
                       <Info size={18}/> Simple definition:
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                       location = information about the current webpage URL + ability to change it.
                    </p>
                 </div>
               </div>
             </div>
           </div>
        </div>

        <div className="space-y-6 flex flex-col justify-center">
           <div className="bg-[#0b101c] p-10 rounded-[3rem] border border-blue-500/20 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
               <div className="absolute right-0 top-0 opacity-10 p-6"><Globe size={150} className="text-blue-500"/></div>
               <SectionHeader icon={Terminal} title="2. Where is it?" subtitle="In the window object." color="text-blue-400" />
               <div className="relative z-10">
                  <CodeBlock code={`window.location\n\n// Or simply:\nlocation`} />
               </div>
           </div>
        </div>
      </section>

      {/* ── Section 3 & 4: Example URL & Breakdown ── */}
      <section className="max-w-6xl mx-auto mb-32 space-y-12">
         <div className="bg-gradient-to-r from-blue-900/20 to-indigo-900/20 border border-indigo-500/20 p-10 rounded-[3rem] shadow-xl text-center">
             <p className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-4">3. Example URL Structure</p>
             <div className="inline-block bg-[#0b101c] py-4 px-6 rounded-2xl border border-blue-500/30 font-mono text-sm md:text-lg break-all">
                 <span className="text-rose-400">https:</span>//
                 <span className="text-amber-400">www.example.com</span>:
                 <span className="text-emerald-400">8080</span>
                 <span className="text-blue-400">/page</span>
                 <span className="text-fuchsia-400">?name=js</span>
                 <span className="text-indigo-400">#section1</span>
             </div>
             <p className="text-blue-300 mt-4 text-sm font-medium">👉 JavaScript can break this down into easily accessible properties!</p>
         </div>

         <div className="bg-white dark:bg-gray-800 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
            <div className="p-8 pb-4">
                <SectionHeader icon={List} title="4. Important Properties" subtitle="Deconstructing the URL." color="text-blue-500" />
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                   <thead>
                      <tr className="bg-gray-50 dark:bg-gray-900/50">
                         <th className="p-6 font-black text-blue-500 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700 w-1/3">Property</th>
                         <th className="p-6 font-black text-gray-500 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700 border-l">Description</th>
                      </tr>
                   </thead>
                   <tbody className="font-medium text-gray-700 dark:text-gray-300 divide-y divide-gray-100 dark:divide-gray-700 font-mono text-[15px]">
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                         <td className="p-6 font-bold text-white bg-blue-500/10">href</td>
                         <td className="p-6 border-l text-gray-600 dark:text-gray-400 font-sans">Full URL (e.g., the entire string above)</td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                         <td className="p-6 font-bold text-rose-500">protocol</td>
                         <td className="p-6 border-l text-gray-600 dark:text-gray-400 font-sans"><span className="text-rose-400">http:</span> or <span className="text-rose-400">https:</span></td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                         <td className="p-6 font-bold text-amber-500">hostname</td>
                         <td className="p-6 border-l text-gray-600 dark:text-gray-400 font-sans">Domain name (e.g., <span className="text-amber-400">www.example.com</span>)</td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                         <td className="p-6 font-bold text-emerald-500">port</td>
                         <td className="p-6 border-l text-gray-600 dark:text-gray-400 font-sans">Port number (e.g., <span className="text-emerald-400">8080</span>)</td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                         <td className="p-6 font-bold text-blue-500">pathname</td>
                         <td className="p-6 border-l text-gray-600 dark:text-gray-400 font-sans">Page path (e.g., <span className="text-blue-400">/page</span>)</td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                         <td className="p-6 font-bold text-fuchsia-500">search</td>
                         <td className="p-6 border-l text-gray-600 dark:text-gray-400 font-sans">Query string (e.g., <span className="text-fuchsia-400">?name=js</span>)</td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                         <td className="p-6 font-bold text-indigo-500">hash</td>
                         <td className="p-6 border-l text-gray-600 dark:text-gray-400 font-sans">Anchor (e.g., <span className="text-indigo-400">#section1</span>)</td>
                      </tr>
                   </tbody>
                </table>
            </div>
         </div>
         
         <div className="bg-[#0b101c] border border-blue-500/20 p-10 rounded-[3rem] shadow-xl">
             <SectionHeader icon={Terminal} title="5. Output Example" color="text-slate-400" />
             <div className="grid md:grid-cols-2 gap-8">
                 <CodeBlock code={`console.log(location.href);\nconsole.log(location.hostname);\nconsole.log(location.pathname);`} />
                 <div className="bg-black/50 border border-gray-800 p-6 rounded-2xl font-mono text-sm text-green-400 flex flex-col justify-center">
                    <div><span className="text-gray-500">// Full URL</span><br/>https://example.com/page</div>
                    <div className="mt-2"><span className="text-gray-500">// Domain</span><br/>example.com</div>
                    <div className="mt-2"><span className="text-gray-500">// Path</span><br/>/page</div>
                 </div>
             </div>
         </div>
      </section>

      {/* ── Sections 6 & 7: Changing URL & Reload ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Globe} title="6. Changing URL" subtitle="(Redirecting)." color="text-indigo-500" />
            
            <div className="space-y-6">
                <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-500/20 p-5 rounded-2xl">
                    <h4 className="flex items-center gap-2 font-black text-indigo-600 dark:text-indigo-400 mb-2"><CheckCircle size={18}/> Using href</h4>
                    <CodeBlock code={`location.href = "https://google.com";`} />
                    <p className="text-sm font-medium text-gray-500">👉 Redirects user (keeps history - back button works)</p>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-500/20 p-5 rounded-2xl">
                    <h4 className="flex items-center gap-2 font-black text-blue-600 dark:text-blue-400 mb-2"><CheckCircle size={18}/> Using assign()</h4>
                    <CodeBlock code={`location.assign("https://google.com");`} />
                    <p className="text-sm font-medium text-gray-500">👉 Exact same behavior as updating href</p>
                </div>

                <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-500/20 p-5 rounded-2xl">
                    <h4 className="flex items-center gap-2 font-black text-red-600 dark:text-red-400 mb-2"><Ban size={18}/> Using replace()</h4>
                    <CodeBlock code={`location.replace("https://google.com");`} />
                    <p className="text-sm font-medium text-red-400">👉 No back button (Current history entry is removed)</p>
                </div>
            </div>
         </div>

         <div className="space-y-8 flex flex-col justify-between">
            <div className="bg-gradient-to-br from-[#0b101c] to-indigo-950 p-10 border border-indigo-500/20 rounded-[3rem] shadow-xl flex-1 flex flex-col justify-center">
                <SectionHeader icon={RotateCcw} title="7. Reload Page" color="text-cyan-400" />
                <CodeBlock code={`location.reload();`} />
                <p className="text-cyan-300 font-medium">👉 This forcefully refreshes the current page.</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl flex-1 flex flex-col justify-center">
                <SectionHeader icon={Hash} title="9. Hash & Anchors" color="text-emerald-500" />
                <CodeBlock code={`console.log(location.hash); // #section1`} />
                <p className="text-sm text-gray-500 font-medium">Useful for single-page routing without reloading the browser.</p>
            </div>
         </div>
      </section>

      {/* ── Section 8: Query Parameters ── */}
      <section className="max-w-4xl mx-auto mb-32">
         <div className="bg-[#0b101c] border border-cyan-500/20 p-10 md:p-14 rounded-[4rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5"><Search size={250} className="text-cyan-500"/></div>
            <SectionHeader icon={Search} title="8. Query Parameters" subtitle="(Very Important feature)." color="text-cyan-400" />
            
            <div className="relative z-10">
                <div className="mb-6 font-mono text-cyan-300 text-sm bg-cyan-950/40 border border-cyan-500/20 p-4 rounded-xl inline-block">
                    Full URL segment: <span className="font-bold text-white">?name=Karthick&age=20</span>
                </div>
                <CodeBlock code={`// Best modern way to read search parameters:\nlet params = new URLSearchParams(location.search);\n\nconsole.log(params.get("name")); // "Karthick"`} />
            </div>
         </div>
      </section>

      {/* ── Section 10 & 11: Real World & Use Cases ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={LogIn} title="10. Real-World Example" subtitle="Conditional login redirect." color="text-indigo-500" />
            <CodeBlock code={`if (isLoggedIn) {\n    location.href = "/dashboard";\n} else {\n    location.href = "/login";\n}`} />
         </div>

         <div className="bg-gradient-to-br from-indigo-900/20 to-[#0b101c] border border-indigo-500/20 p-10 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Network} title="11. Common Use Cases" color="text-indigo-400" />
            
            <div className="mt-8 space-y-6">
               <div className="bg-black/20 p-5 rounded-2xl border border-indigo-500/10 hover:border-indigo-500/30 transition-colors">
                  <h4 className="font-black text-indigo-400 text-lg flex items-center gap-2 mb-2"><Compass size={20}/> Navigation</h4>
                  <p className="text-gray-300 font-medium">Programmatically redirect users based on actions or state.</p>
               </div>
               
               <div className="bg-black/20 p-5 rounded-2xl border border-blue-500/10 hover:border-blue-500/30 transition-colors">
                  <h4 className="font-black text-blue-400 text-lg flex items-center gap-2 mb-2"><Activity size={20}/> Tracking & Data</h4>
                  <p className="text-gray-300 font-medium">Read URL search parameters safely using <code className="text-blue-300">URLSearchParams</code>.</p>
               </div>
               
               <div className="bg-black/20 p-5 rounded-2xl border border-cyan-500/10 hover:border-cyan-500/30 transition-colors">
                  <h4 className="font-black text-cyan-400 text-lg flex items-center gap-2 mb-2"><Layers size={20}/> Single Page Apps</h4>
                  <p className="text-gray-300 font-medium">Handle routing internally utilizing the <code className="text-cyan-300">location.hash</code> (<code className="text-emerald-300">#home</code>, <code className="text-emerald-300">#about</code>).</p>
               </div>
            </div>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          URL MASTERY
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-indigo-500/10 decoration-2">
          "The browser location object is your gateway to web navigation and parameter passing. Use it wisely to seamlessly guide users through your applications."
        </p>
      </footer>

    </div>
  );
};

export default JsLocation;