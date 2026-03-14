import React, { useState } from 'react';
import {
  Layers, List, Info, Code, Zap, Database, Copy, Check,
  Search, Grid, Layout, ArrowRight, RefreshCw, AlertCircle,
  CheckCircle, Globe, Terminal, MousePointer2
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
            <div className="w-2.5 h-2.5 rounded-full bg-blue-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-indigo-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-purple-400/80"></div>
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

const DomCollections: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-900/10 min-h-screen font-sans">
      
      {/* ── Hero Header ── */}
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 left-1/4 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-indigo-400/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl mb-6 shadow-xl transform hover:scale-110 transition-transform cursor-default">
          <Layers className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          DOM Collections
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          Manage multiple elements with ease. Learn how to access, loop through, and manipulate collections of HTML elements.
        </p>
      </header>

      {/* ── Section 1: What is a DOM Collection? ── */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-center">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <Info className="w-6 h-6 mr-3 text-blue-500" /> What is a DOM Collection?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            A DOM Collection is a list of DOM elements returned by specific JavaScript methods. Think of it as an <strong className="text-blue-600 dark:text-blue-400">array-like group</strong> of HTML elements.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/10 p-5 rounded-2xl border-l-4 border-blue-500">
             <h4 className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-2">Simple Definition</h4>
             <p className="text-sm font-bold text-gray-800 dark:text-gray-200 leading-snug">
               A DOM collection is an array-like group of HTML elements that can be accessed using index numbers in JavaScript.
             </p>
          </div>
        </div>
        <div className="space-y-4">
           <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
              <h4 className="text-xs font-black text-gray-400 uppercase mb-4 flex items-center gap-2">
                <Search size={14} /> Methods that return collections:
              </h4>
              <ul className="space-y-2">
                {['getElementsByTagName()', 'getElementsByClassName()', 'querySelectorAll()'].map((method, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-mono font-bold text-blue-500 dark:text-blue-400 p-2 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-100 dark:border-gray-800">
                    <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 flex items-center justify-center text-[10px]">{i + 1}</span>
                    {method}
                  </li>
                ))}
              </ul>
           </div>
        </div>
      </section>

      {/* ── Section 2 & 3: Example and Accessing Elements ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-8 flex items-center">
            <List className="text-blue-500 w-8 h-8 mr-4" /> Accessing Elements
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <CodeBlock 
                title="Example HTML"
                code={`<p>First paragraph</p>
<p>Second paragraph</p>
<p>Third paragraph</p>`} 
              />
              <CodeBlock 
                title="Access by Index"
                code={`let elements = document.getElementsByTagName("p");

console.log(elements[0]); // First paragraph
console.log(elements[1]); // Second paragraph
console.log(elements[2]); // Third paragraph`} 
              />
            </div>
            <div className="bg-slate-900 rounded-3xl p-8 text-white relative flex flex-col justify-center border border-slate-800 shadow-xl overflow-hidden">
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
               <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-8 border-b border-slate-800 pb-4">Collection Visualization</h4>
               
               <div className="space-y-4">
                 {[
                   { label: "Paragraph 1", index: 0, color: "text-blue-400" },
                   { label: "Paragraph 2", index: 1, color: "text-indigo-400" },
                   { label: "Paragraph 3", index: 2, color: "text-purple-400" }
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-4 group">
                     <span className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-mono text-[10px] text-slate-500 group-hover:border-blue-500 transition-colors">{item.index}</span>
                     <div className="flex-1 p-3 px-6 bg-white/5 border border-white/10 rounded-2xl font-bold flex justify-between items-center group-hover:bg-white/10 transition-all">
                        <span className="text-sm">{item.label}</span>
                        <ArrowRight size={14} className="text-slate-600 group-hover:translate-x-1 transition-transform" />
                     </div>
                   </div>
                 ))}
               </div>
               <p className="text-[10px] text-slate-500 mt-8 text-center italic font-medium">Indices always start from 0, just like standard arrays.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Looping Through Collections ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-3xl p-8 lg:p-12 text-white shadow-xl relative overflow-hidden border border-indigo-500/50">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <RefreshCw className="w-64 h-64" />
          </div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black mb-6 flex items-center">
                <RefreshCw className="w-10 h-10 mr-4 text-blue-200 animate-spin-slow" /> Looping Logic
              </h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed font-medium">
                To modify all elements at once, we iterate through the collection using a simple <code className="bg-white/10 px-2 py-0.5 rounded font-bold">for</code> loop.
              </p>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                <p className="text-sm font-bold flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-400 flex items-center justify-center text-[10px] text-indigo-900">!</span>
                  Result: All targeted elements will reflect the changes instantly.
                </p>
              </div>
            </div>
            <CodeBlock 
              title="Iteration Script"
              code={`let paragraphs = document.getElementsByTagName("p");

for(let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "blue";
}`} 
            />
          </div>
        </div>
      </section>

      {/* ── Section 5: Common Methods Table ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-200 dark:border-gray-700">
           <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-8 flex items-center">
            <Database className="text-blue-500 w-8 h-8 mr-4" /> Retrieval Methods
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 dark:border-gray-700">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-900/50">
                  <th className="p-5 text-sm font-black text-gray-400 uppercase tracking-widest border-b border-gray-200 dark:border-gray-700">Method</th>
                  <th className="p-5 text-sm font-black text-gray-400 uppercase tracking-widest border-b border-gray-200 dark:border-gray-700">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700 text-gray-700 dark:text-gray-300">
                {[
                  { m: "getElementsByTagName()", d: "Returns all elements with the given tag name (e.g., 'p', 'div')." },
                  { m: "getElementsByClassName()", d: "Returns all elements that have the specific class name." },
                  { m: "querySelectorAll()", d: "Returns all elements matching a CSS selector (e.g., '.box', '#id p')." }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-blue-50/50 dark:hover:bg-blue-900/5 transition-colors">
                    <td className="p-5 font-mono text-sm font-bold text-blue-600 dark:text-blue-400">{row.m}</td>
                    <td className="p-5 text-sm font-medium">{row.d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Section 6 & 8: Examples ── */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
           <h3 className="text-xl font-black text-gray-900 dark:text-white mb-6 flex items-center gap-3">
             <MousePointer2 size={24} className="text-blue-500" /> Class Selection
           </h3>
           <CodeBlock 
             title="HTML"
             code={`<div class="box">Box 1</div>
<div class="box">Box 2</div>`} 
           />
           <CodeBlock 
             title="JavaScript"
             code={`let boxes = document.getElementsByClassName("box");
boxes[0].style.background = "yellow";`} 
           />
           <p className="mt-4 text-xs text-gray-500 font-medium italic">Changes the background of only the first matched box.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
           <h3 className="text-xl font-black text-gray-900 dark:text-white mb-6 flex items-center gap-3">
             <Grid size={24} className="text-indigo-500" /> querySelectorAll()
           </h3>
           <CodeBlock 
             title="HTML"
             code={`<p class="text">Hello</p>
<p class="text">World</p>`} 
           />
           <CodeBlock 
             title="JavaScript with forEach"
             code={`let elements = document.querySelectorAll(".text");

elements.forEach(function(el) {
  el.style.fontSize = "20px";
});`} 
           />
           <div className="mt-4 p-3 bg-indigo-50 dark:bg-indigo-900/10 rounded-xl border border-indigo-100 dark:border-indigo-800">
              <p className="text-[10px] text-indigo-600 dark:text-indigo-300 font-black uppercase tracking-wider">Note</p>
              <p className="text-xs font-bold text-indigo-900 dark:text-indigo-200">Allows using modern array methods like .forEach() directly!</p>
           </div>
        </div>
      </section>

      {/* ── Section 7: HTMLCollection vs NodeList ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-slate-900 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden border border-slate-800">
           <div className="absolute top-0 right-0 p-8 opacity-5 text-indigo-500">
             <AlertCircle className="w-72 h-72" />
           </div>
           <div className="relative z-10">
             <h2 className="text-3xl font-black text-white mb-4 flex items-center">
               <Grid className="w-8 h-8 mr-4 text-indigo-400" /> HTMLCollection vs NodeList
             </h2>
             <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-10 border-b border-white/5 pb-4">Understanding the difference is crucial for debugging.</p>
             
             <div className="grid md:grid-cols-3 gap-6">
                {[
                  { feature: "Returned by", html: "getElementsByTagName", node: "querySelectorAll" },
                  { feature: "Type", html: "Live collection", node: "Static collection" },
                  { feature: "Auto Update", html: "Yes", node: "No" }
                ].map((row, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                     <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-4">{row.feature}</p>
                     <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-[8px] text-slate-500 uppercase mb-1">HTMLCollection</p>
                          <p className="text-xs font-bold text-white leading-relaxed">{row.html}</p>
                        </div>
                        <div>
                          <p className="text-[8px] text-slate-500 uppercase mb-1">NodeList</p>
                          <p className="text-xs font-bold text-blue-400 leading-relaxed">{row.node}</p>
                        </div>
                     </div>
                  </div>
                ))}
             </div>
             
             <div className="mt-10 grid md:grid-cols-2 gap-6">
                <CodeBlock title="Live Examples" code={`// HTMLCollection (Live)
document.getElementsByTagName("p")`} />
                <CodeBlock title="Static Examples" code={`// NodeList (Static)
document.querySelectorAll("p")`} />
             </div>
           </div>
        </div>
      </section>

      {/* ── Section 9 & 10: Properties and Real-World Uses ── */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
           <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-6">Properties</h2>
           <ul className="space-y-4">
             {[
               { p: "length", d: "Returns total count." },
               { p: "item()", d: "Accesses by index." },
               { p: "[index]", d: "Direct bracket access." }
             ].map((attr, i) => (
               <li key={i} className="flex flex-col">
                  <span className="font-mono text-xs font-black text-blue-500">{attr.p}</span>
                  <span className="text-sm font-medium text-gray-500">{attr.d}</span>
               </li>
             ))}
           </ul>
        </div>

        <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
           <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-6 flex items-center gap-3">
             <Globe className="text-indigo-500" /> Real-World Applications
           </h2>
           <div className="grid sm:grid-cols-2 gap-4">
              {[
                { t: "Form Validation", d: "Manage multiple input fields at once.", ex: "let inputs = document.getElementsByTagName('input');" },
                { t: "Image Galleries", d: "Apply styles or event listeners to all images.", ex: "elements.length" },
                { t: "Menu Systems", d: "Toggle highlight on all navigation items.", ex: "elements.forEach(...)" },
                { t: "Table Ops", d: "Process entire rows or specific columns.", ex: "Handling row indices" }
              ].map((use, i) => (
                <div key={i} className="p-4 bg-gray-50 dark:bg-blue-900/5 border border-gray-100 dark:border-blue-900/20 rounded-2xl group hover:border-blue-300 transition-colors">
                   <h4 className="font-bold text-gray-800 dark:text-gray-200 text-sm mb-1">{use.t}</h4>
                   <p className="text-xs text-gray-500 font-medium mb-3">{use.d}</p>
                   <code className="text-[10px] font-mono font-black text-blue-500/70">{use.ex}</code>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Footer Branding */}
      <footer className="max-w-6xl mx-auto text-center py-10 border-t border-gray-100 dark:border-gray-800 mt-8">
        <div className="flex items-center justify-center gap-2 mb-2 font-black text-gray-500 dark:text-gray-400 uppercase tracking-tighter text-2xl">
          <Layers className="w-6 h-6" />
          KNOWGROW Hub
        </div>
        <p className="text-sm font-medium text-gray-400">Mastering Web Element Collections</p>
      </footer>

    </div>
  );
};

export default DomCollections;