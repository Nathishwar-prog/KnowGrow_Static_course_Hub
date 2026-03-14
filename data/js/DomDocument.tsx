import React, { useState } from 'react';
import {
  FileCode, GitBranch, Terminal, Table, AlertTriangle, 
  Info, Activity, MousePointer2, PlusCircle, Layout,
  Check, Copy, Globe, ExternalLink, Box, Settings,
  Hash, Code2, Layers, Cpu, RefreshCw
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
        <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{title}</span>
          <div className="flex space-x-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-indigo-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400/80"></div>
          </div>
        </div>
      )}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-blue-500 hover:text-white transition-colors border border-gray-700"
          title="Copy code"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono bg-gray-900 text-blue-300 leading-relaxed rounded-b-xl">
        <code>{code}</code>
      </pre>
    </div>
  );
};

const DomDocument: React.FC = () => {
  const [demoText, setDemoText] = useState("Hello JavaScript");
  const [addedElements, setAddedElements] = useState<string[]>([]);

  const handleIdDemo = () => {
    setDemoText("Welcome to DOM");
  };

  const handleCreateElement = () => {
    setAddedElements(prev => [...prev, "New paragraph created"]);
  };

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-900/10 min-h-screen font-sans">
      
      {/* ── Hero Header ── */}
      <header className="max-w-4xl mx-auto text-center mb-20 relative">
        <div className="absolute top-0 left-1/4 w-48 h-48 bg-blue-400/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-0 right-1/4 w-40 h-40 bg-indigo-400/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3.5 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl mb-8 shadow-2xl transform hover:scale-110 transition-transform cursor-pointer">
          <FileCode className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-5xl sm:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          DOM Document
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed">
          The ultimate entry point. Understand how the <code className="text-blue-600 dark:text-blue-400 font-black">document</code> object orchestrates the entire HTML universe.
        </p>
      </header>

      {/* ── Section 1: What is DOM Document? ── */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-stretch">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col justify-center">
          <h2 className="text-3xl font-black flex items-center text-gray-900 dark:text-white mb-6">
            <Info className="w-8 h-8 mr-3 text-blue-500" /> What is DOM Document?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
            The <strong className="text-blue-600 dark:text-blue-400">Document object</strong> represents the entire HTML document. When a webpage loads, the browser converts the HTML structure into a <strong className="italic">DOM tree</strong>.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-3xl border-l-4 border-blue-500 shadow-inner">
             <h4 className="text-xs font-black text-blue-500 uppercase tracking-widest mb-2 flex items-center gap-2">
               <Cpu size={14} /> Simple Definition
             </h4>
             <p className="text-base font-bold text-gray-800 dark:text-gray-200 leading-snug">
               The DOM Document is the top-level object in the DOM that allows JavaScript to access and manipulate the entire webpage.
             </p>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center space-y-4">
          <div className="p-6 bg-gray-900 rounded-3xl border border-gray-800 shadow-2xl">
            <div className="flex items-center gap-2 mb-4 text-gray-400">
              <Terminal size={14} />
              <span className="text-[10px] font-black uppercase tracking-widest">Entry Point</span>
            </div>
            <code className="text-blue-400 font-mono text-lg block animate-pulse">console.log(document);</code>
            <p className="text-gray-500 text-xs mt-4 italic font-medium">// Returns the root of the document tree</p>
          </div>
        </div>
      </section>

      {/* ── Section 2: Structure visualization ── */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="bg-white dark:bg-gray-800 rounded-[3rem] p-10 shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-10 opacity-[0.03] rotate-12 pointer-events-none">
            <GitBranch size={400} />
          </div>
          <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-10 flex items-center">
            <GitBranch className="text-indigo-500 w-10 h-10 mr-4" /> DOM Tree Representation
          </h2>
          
          <div className="flex justify-center items-start pt-10 pb-10 overflow-x-auto">
            <div className="flex flex-col items-center">
              {/* Root */}
              <div className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-lg font-black text-sm relative mb-12">
                Document
                <div className="absolute left-1/2 -bottom-12 w-0.5 h-12 bg-gray-300 dark:bg-gray-600"></div>
              </div>
              {/* HTML */}
              <div className="px-6 py-3 bg-blue-500 text-white rounded-xl shadow-lg font-black text-sm relative mb-12">
                html
                <div className="absolute left-1/2 -bottom-12 w-0.5 h-12 bg-gray-300 dark:bg-gray-600"></div>
                <div className="absolute left-0 top-1/2 -translate-x-full w-0.5 h-0 bg-transparent lg:w-32 lg:h-0.5 lg:bg-gray-200 dark:lg:bg-gray-700 hidden"></div>
              </div>
              
              <div className="flex gap-20 sm:gap-40 items-start">
                {/* Head */}
                <div className="flex flex-col items-center relative">
                  <div className="absolute left-1/2 top-[-48px] w-0.5 h-12 bg-gray-300 dark:bg-gray-600"></div>
                  <div className="absolute right-[-20px] top-[-48px] w-[calc(50%+20px)] h-0.5 bg-gray-300 dark:bg-gray-600 sm:right-[-80px] sm:w-[calc(50%+80px)]"></div>
                  <div className="px-5 py-2.5 bg-cyan-500 text-white rounded-lg shadow-md font-bold text-xs relative mb-8">
                    head
                    <div className="absolute left-1/2 -bottom-8 w-0.5 h-8 bg-gray-300 dark:bg-gray-600"></div>
                  </div>
                  <div className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white rounded-lg border-2 border-dashed border-cyan-400 font-medium text-[10px]">
                    title
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-col items-center relative">
                  <div className="absolute left-1/2 top-[-48px] w-0.5 h-12 bg-gray-300 dark:bg-gray-600"></div>
                  <div className="absolute left-[-20px] top-[-48px] w-[calc(50%+20px)] h-0.5 bg-gray-300 dark:bg-gray-600 sm:left-[-80px] sm:w-[calc(50%+80px)]"></div>
                  <div className="px-5 py-2.5 bg-indigo-500 text-white rounded-lg shadow-md font-bold text-xs relative mb-8">
                    body
                  </div>
                  <div className="flex gap-8">
                    <div className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white rounded-lg border-2 border-indigo-400/50 font-medium text-[10px]">
                      h1
                    </div>
                    <div className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white rounded-lg border-2 border-indigo-400/50 font-medium text-[10px]">
                      p
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-gray-400 text-xs font-bold mt-12 uppercase tracking-[0.2em]">The Root entry point for all elements</p>
        </div>
      </section>

      {/* ── Section 4: Methods Table ── */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100 dark:border-gray-700">
           <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
              <div>
                <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-2 flex items-center">
                  <Table className="w-8 h-8 mr-4 text-blue-500" /> Common Selector Methods
                </h2>
                <p className="text-gray-500 dark:text-gray-400 font-medium tracking-wide">Essential tools for finding elements in the DOM tree.</p>
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 text-[10px] font-black rounded-full border border-blue-100 dark:border-blue-800 tracking-tighter uppercase">READ-ONLY</span>
                <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 text-[10px] font-black rounded-full border border-indigo-100 dark:border-indigo-800 tracking-tighter uppercase">DYNAMIC</span>
              </div>
           </div>

           <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <th className="py-5 px-4 text-xs font-black text-gray-400 uppercase tracking-widest">Method</th>
                    <th className="py-5 px-4 text-xs font-black text-gray-400 uppercase tracking-widest leading-relaxed">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
                  {[
                    { m: "getElementById()", d: "Select element by unique ID" },
                    { m: "getElementsByTagName()", d: "Select elements by tag name (e.g., 'p')" },
                    { m: "getElementsByClassName()", d: "Select elements by class name" },
                    { m: "querySelector()", d: "Select first element matching CSS selector" },
                    { m: "querySelectorAll()", d: "Select all elements matching CSS selector" }
                  ].map((row, i) => (
                    <tr key={i} className="group hover:bg-blue-50/30 dark:hover:bg-blue-900/10 transition-colors">
                      <td className="py-5 px-4 font-mono text-xs font-bold text-blue-600 dark:text-blue-400">{row.m}</td>
                      <td className="py-5 px-4 text-sm text-gray-600 dark:text-gray-300 font-medium">{row.d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
           </div>
        </div>
      </section>

      {/* ── Section 5 & 6: Interactive Sandbox ── */}
      <section className="max-w-6xl mx-auto mb-20 grid lg:grid-cols-2 gap-12">
        {/* Interaction 1: getElementById */}
        <div className="flex flex-col gap-6">
           <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-gray-700 relative overflow-hidden h-full">
              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <Hash className="text-blue-500" /> Element Access Demo
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-8 leading-relaxed">
                The <code className="text-blue-500 font-bold">getElementById()</code> method is the most direct way to target an element.
              </p>
              
              <div className="p-8 bg-gray-50 dark:bg-gray-900/50 rounded-3xl border-2 border-dashed border-gray-200 dark:border-gray-700 mb-8 flex flex-col items-center gap-6">
                 <p id="demo" className="text-2xl font-black text-indigo-600 dark:text-indigo-400 transition-all duration-300 transform scale-110">
                   {demoText}
                 </p>
                 <button 
                  onClick={handleIdDemo}
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-sm shadow-xl shadow-blue-500/20 active:scale-95 transition-all flex items-center gap-2 group"
                 >
                   <MousePointer2 size={16} className="group-hover:rotate-12 transition-transform" /> Change Text
                 </button>
              </div>

              <CodeBlock 
                title="Access Script"
                code={`document.getElementById("demo")
  .innerHTML = "Welcome to DOM";`} 
              />
           </div>
        </div>

        {/* Interaction 2: createElement */}
        <div className="flex flex-col gap-6">
           <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-gray-700 h-full">
              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <PlusCircle className="text-indigo-500" /> Create Element Sandbox
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-8">
                Build the page on the fly with <code className="text-indigo-500 font-bold">createElement()</code> and <code className="text-indigo-500 font-bold">appendChild()</code>.
              </p>
              
              <div className="min-h-[160px] p-6 bg-gray-900 rounded-3xl mb-8 flex flex-col gap-2 overflow-y-auto max-h-[250px] scrollbar-hide border border-gray-800">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-[10px] text-gray-500 font-black uppercase tracking-tighter">Live Body Preview</span>
                </div>
                {addedElements.map((text, i) => (
                  <div key={i} className="px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs rounded-lg animate-in slide-in-from-left-5 fade-in duration-300">
                    {text}
                  </div>
                ))}
                {addedElements.length === 0 && (
                   <div className="flex flex-col items-center justify-center h-20 text-gray-600 italic text-xs">
                     Waiting for element creation...
                   </div>
                )}
              </div>

              <button 
                onClick={handleCreateElement}
                className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black text-sm shadow-xl shadow-indigo-500/20 transition-all flex items-center justify-center gap-2 mb-8 active:scale-95"
              >
                <PlusCircle size={18} /> Spawn New Paragraph
              </button>

              <CodeBlock 
                title="Creation Script"
                code={`let newElement = document.createElement("p");
newElement.innerHTML = "New paragraph created";
document.body.appendChild(newElement);`} 
              />
           </div>
        </div>
      </section>

      {/* ── Section 8: Document Properties ── */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[3rem] p-10 lg:p-16 text-white shadow-2xl relative overflow-hidden border border-white/5">
           <div className="absolute top-0 right-[-5%] p-10 rotate-[15deg] opacity-[0.07] pointer-events-none">
              <Globe size={400} />
           </div>
           <div className="relative z-10">
              <h2 className="text-4xl font-black mb-12 flex items-center">
                <Settings className="w-10 h-10 mr-4 text-blue-300" /> Document Properties
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {[
                  { p: "document.title", d: "Returns page title", icon: <Layout size={18} /> },
                  { p: "document.body", d: "Returns body element", icon: <Layers size={18} /> },
                  { p: "document.URL", d: "Returns page URL", icon: <Globe size={18} /> },
                  { p: "document.domain", d: "Returns domain name", icon: <ExternalLink size={18} /> }
                ].map((prop, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl hover:bg-white/20 transition-all group">
                     <div className="w-10 h-10 rounded-2xl bg-white/15 flex items-center justify-center mb-4 group-hover:bg-white/25 transition-colors">
                        {prop.icon}
                     </div>
                     <div className="text-blue-200 font-mono text-[10px] font-black mb-1 uppercase tracking-widest">{prop.p}</div>
                     <div className="text-sm font-bold leading-snug">{prop.d}</div>
                  </div>
                ))}
              </div>

              <CodeBlock 
                title="Reading Properties"
                code={`console.log(document.title); // Output: My Web Page`} 
              />
           </div>
        </div>
      </section>

      {/* ── Section 9: Warning Section ── */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="bg-amber-50 dark:bg-amber-900/10 border-2 border-amber-200 dark:border-amber-800 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 overflow-hidden relative group">
           <div className="absolute top-[-20px] left-[-20px] p-10 opacity-[0.03] rotate-[-15deg] group-hover:rotate-0 transition-transform duration-700">
             <AlertTriangle size={150} />
           </div>
           <div className="shrink-0 w-24 h-24 rounded-full bg-amber-500 shadow-xl shadow-amber-500/20 flex items-center justify-center text-white scale-110">
              <AlertTriangle size={48} strokeWidth={2.5} />
           </div>
           <div>
              <h2 className="text-3xl font-black text-amber-800 dark:text-amber-400 mb-4 flex items-center gap-3">
                Legacy Method: document.write()
              </h2>
              <p className="text-amber-800/80 dark:text-amber-500/80 font-medium mb-6 leading-relaxed max-w-2xl">
                The <code className="bg-amber-200/50 dark:bg-amber-500/20 px-1.5 py-0.5 rounded font-black tracking-tight italic">document.write()</code> method writes content directly to the page. 
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                 <div className="bg-white dark:bg-gray-900 p-4 rounded-2xl border border-amber-100 dark:border-amber-900/50 shadow-sm flex-1">
                    <p className="text-[10px] font-black text-amber-600 uppercase mb-2">Modern Risk</p>
                    <p className="text-xs font-bold text-gray-700 dark:text-gray-300">This method can overwrite existing HTML if called after the page has finished loading.</p>
                 </div>
                 <div className="bg-white dark:bg-gray-900 p-4 rounded-2xl border border-amber-100 dark:border-amber-900/50 shadow-sm flex-1">
                    <p className="text-[10px] font-black text-blue-600 uppercase mb-2">Modern Alternative</p>
                    <p className="text-xs font-bold text-gray-700 dark:text-gray-300 text-blue-700/80">Use DOM creation methods like <code className="text-[11px] font-black">createElement</code> instead.</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 10: Real-World Use Cases ── */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="bg-white dark:bg-gray-800 rounded-[3rem] p-10 lg:p-16 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4 flex items-center">
              <Activity className="w-10 h-10 mr-4 text-blue-500" /> Real-World Applications
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
              The <code className="text-blue-500 font-bold">document</code> object is used in almost every web application for structural interactions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Form Validation", desc: "Access and validate input fields", icon: <Box className="text-emerald-500" /> },
              { title: "Dynamic Content", desc: "Update text and images on the fly", icon: <RefreshCw className="text-blue-500" /> },
              { title: "Event Handling", desc: "Manage button clicks and keyboard", icon: <MousePointer2 className="text-amber-500" /> },
              { title: "UI Updates", desc: "Modify page styles and layouts", icon: <Layout className="text-indigo-500" /> },
              { title: "Web Apps", desc: "Build whole interactive interfaces", icon: <Code2 className="text-rose-500" /> }
            ].map((app, i) => (
              <div key={i} className="group p-8 bg-gray-50 dark:bg-gray-900/50 rounded-3xl border border-gray-100 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-500/5 cursor-default">
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    {app.icon}
                  </div>
                  <h4 className="text-xl font-black text-gray-900 dark:text-white mb-2">{app.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed italic">Example: {app.desc}</p>
              </div>
            ))}
            
            {/* Quick Access Tip */}
            <div className="p-8 bg-blue-600 rounded-3xl flex flex-col justify-center items-center text-center text-white shadow-xl shadow-blue-500/20">
               <span className="text-[10px] font-black uppercase tracking-widest mb-4 opacity-70">Power Tip</span>
               <p className="text-lg font-bold leading-snug mb-4 italic">"Targeting a specific element instantly"</p>
               <code className="text-xs bg-white/10 px-3 py-1.5 rounded-lg border border-white/20 font-mono tracking-tight">document.getElementById("loginBtn")</code>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Branding */}
      <footer className="max-w-4xl mx-auto text-center py-20 opacity-40">
        <div className="flex items-center justify-center gap-3 mb-4 font-black text-gray-500 dark:text-gray-400 uppercase tracking-tighter text-3xl">
          <FileCode className="w-8 h-8 opacity-50" />
          KNOWGROW Hub
        </div>
        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent mx-auto mb-4"></div>
        <p className="text-base font-bold text-gray-400 dark:text-gray-500 tracking-wide uppercase">The Foundation of Modern Web Logic</p>
      </footer>

    </div>
  );
};

export default DomDocument;