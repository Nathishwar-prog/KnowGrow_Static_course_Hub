import React, { useState } from 'react';
import {
  Code2, Layout, FileCode, CheckCircle, Search, Target,
  AlertTriangle, Lightbulb, Check, Copy, Link, Activity,
  Crosshair, Filter, ShieldAlert, ArrowRight, Zap, List
} from 'lucide-react';

// ─── Code Block Component ─────────────────────────────────────────────────────
const CodeBlock = ({ code, title, language = 'javascript' }: { code: string; title?: string; language?: string }) => {
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
            <div className="w-2.5 h-2.5 rounded-full bg-fuchsia-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-purple-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-pink-400/80"></div>
          </div>
        </div>
      )}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-fuchsia-500 hover:text-white transition-colors border border-gray-700"
          title="Copy code"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className={`p-4 overflow-x-auto text-sm font-mono bg-gray-900 ${language === 'html' ? 'text-pink-300' : 'text-fuchsia-300'} leading-relaxed rounded-b-xl`}>
        <code>{code}</code>
      </pre>
    </div>
  );
};

const JquerySelectors: React.FC = () => {
  // Demo State for Section 8
  const [itemColor, setItemColor] = useState('black');
  const [specialWeight, setSpecialWeight] = useState('normal');
  const [firstBg, setFirstBg] = useState('transparent');

  const handleDemoClick = () => {
    setItemColor('#3b82f6'); // blue
    setSpecialWeight('bold');
    setFirstBg('#fef08a'); // yellow
  };

  const handleDemoReset = () => {
    setItemColor('black');
    setSpecialWeight('normal');
    setFirstBg('transparent');
  };

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-gray-900 dark:to-purple-900/10 min-h-screen font-sans">
      
      {/* ── Hero Header ── */}
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-purple-400/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-fuchsia-400/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-purple-600 to-fuchsia-600 rounded-2xl mb-6 shadow-xl transform hover:rotate-3 transition-transform cursor-pointer">
          <Crosshair className="w-8 h-8 text-white fill-current/20" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          jQuery Selectors
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          The foundation of jQuery. Learn how to accurately find and target HTML elements before manipulating them.
        </p>
      </header>

      {/* ── Section 1, 2, 3: What, Syntax, Why ── */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-3 gap-6 items-stretch">
        
        <div className="bg-white dark:bg-gray-800 p-8 rounded-[2rem] shadow-sm border border-gray-100 dark:border-gray-700 col-span-1 lg:col-span-2">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-4">
            <Search className="w-6 h-6 mr-3 text-purple-500" /> What are jQuery Selectors?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 font-medium leading-relaxed">
            jQuery selectors are used to <strong className="text-purple-600 dark:text-purple-400">select and target HTML elements</strong> so you can manipulate them. 
          </p>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-2xl border-l-4 border-purple-500 flex items-start gap-3">
             <Lightbulb className="text-purple-500 mt-1 flex-shrink-0" size={20} />
             <div>
               <p className="text-sm font-bold text-gray-800 dark:text-gray-200">
                 Think of selectors as: <br/> “How you find elements before doing anything with them”
               </p>
             </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-fuchsia-600 to-purple-700 p-8 rounded-[2rem] shadow-xl text-white col-span-1 flex flex-col justify-center">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <Code2 className="w-5 h-5 mr-3 text-fuchsia-300" /> Basic Syntax
          </h2>
          <div className="bg-black/30 p-4 rounded-xl border border-white/10 mb-6 flex justify-center">
            <code className="text-2xl font-mono text-fuchsia-200">$(<span className="text-white">selector</span>)</code>
          </div>
          <ul className="text-sm space-y-2 text-fuchsia-100 font-medium">
            <li className="flex gap-2"><span className="text-fuchsia-300 font-bold">$</span> → jQuery function</li>
            <li className="flex gap-2"><span className="text-fuchsia-300 font-bold items-start">selector</span> → HTML element to target</li>
          </ul>
        </div>
        
      </section>

      {/* ── The Golden Rule ── */}
      <section className="max-w-4xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-[2rem] border-2 border-dashed border-fuchsia-300 dark:border-fuchsia-700/50 text-center relative shadow-sm">
           <Target className="absolute top-0 right-0 m-4 text-fuchsia-100 dark:text-fuchsia-900/20 w-32 h-32 -z-0" />
           <div className="relative z-10">
             <h3 className="text-lg font-black text-gray-400 uppercase tracking-widest mb-2">Why Selectors Matter</h3>
             <p className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
               Every jQuery action starts with a selector.
             </p>
             <div className="inline-block bg-gray-100 dark:bg-gray-900 px-6 py-3 rounded-xl border border-gray-200 dark:border-gray-700">
               <span className="font-mono text-fuchsia-600 dark:text-fuchsia-400 font-bold text-lg">$("#box").hide();</span>
             </div>
             <p className="mt-6 font-bold text-fuchsia-600 dark:text-fuchsia-400 flex items-center justify-center gap-2">
               First select <ArrowRight size={18} /> then perform action
             </p>
           </div>
        </div>
      </section>

      {/* ── Section 4: Basic Selectors ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-8 flex items-center">
          <Target className="text-purple-500 w-8 h-8 mr-4" /> Basic Selectors (Most Important 🔥)
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-[2rem] border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
             <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/40 rounded-xl flex items-center justify-center text-purple-600 mb-4">
               <span className="font-black text-2xl">#</span>
             </div>
             <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">ID Selector</h3>
             <code className="text-sm bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-300 px-2 py-1 rounded font-mono block mb-4 w-max">$("#id")</code>
             <CodeBlock code={`$("#title").css("color", "red");`} />
             <p className="text-xs text-gray-500 font-medium">👉 Selects element with id="title"</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-[2rem] border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
             <div className="w-12 h-12 bg-fuchsia-50 dark:bg-fuchsia-900/40 rounded-xl flex items-center justify-center text-fuchsia-600 mb-4">
               <span className="font-black text-2xl">.</span>
             </div>
             <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Class Selector</h3>
             <code className="text-sm bg-fuchsia-100 dark:bg-fuchsia-900/50 text-fuchsia-800 dark:text-fuchsia-300 px-2 py-1 rounded font-mono block mb-4 w-max">$(".class")</code>
             <CodeBlock code={`$(".item").hide();`} />
             <p className="text-xs text-gray-500 font-medium">👉 Selects all elements with class "item"</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-[2rem] border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
             <div className="w-12 h-12 bg-pink-50 dark:bg-pink-900/40 rounded-xl flex items-center justify-center text-pink-600 mb-4">
               <Code2 size={24} />
             </div>
             <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Element Selector</h3>
             <code className="text-sm bg-pink-100 dark:bg-pink-900/50 text-pink-800 dark:text-pink-300 px-2 py-1 rounded font-mono block mb-4 w-max">$("p")</code>
             <CodeBlock code={`$("p").css("font-size", "20px");`} />
             <p className="text-xs text-gray-500 font-medium">👉 Selects all &lt;p&gt; elements</p>
          </div>

        </div>
      </section>

      {/* ── Section 5: Advanced Selectors ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gray-900 rounded-[3rem] p-8 lg:p-12 shadow-xl relative overflow-hidden">
           <Filter className="absolute top-0 right-0 p-8 text-fuchsia-500/10 w-64 h-64 -rotate-12" />
           <h2 className="text-3xl font-black text-white mb-8 flex items-center relative z-10">
             <Search className="text-fuchsia-400 w-8 h-8 mr-4" /> Advanced Selectors 🔍
           </h2>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
              {[
                { title: "Multiple Selectors", code: '$("h1, p, .box")', desc: "Select multiple elements at once" },
                { title: "Descendant Selector", code: '$("div p")', desc: "Select <p> INSIDE <div>" },
                { title: "Child Selector", code: '$("div > p")', desc: "Select direct children only" },
                { title: "First & Last", code: '$("p:first")\n$("p:last")', desc: "Select first or last element" },
                { title: "Even & Odd", code: '$("tr:even")\n$("tr:odd")', desc: "Useful for striping tables" },
                { title: "eq() Selector", code: '$("p").eq(2)', desc: "Selects 3rd paragraph (index starts from 0)" }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm">
                   <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 inline-block"></span>
                      {item.title}
                   </h4>
                   <pre className="bg-black/50 p-3 rounded-lg border border-white/5 font-mono text-xs text-fuchsia-300 mb-3 overflow-x-auto">
                     <code>{item.code}</code>
                   </pre>
                   <p className="text-[11px] text-gray-400 font-medium border-t border-white/10 pt-2">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* ── Section 6 & 7: Attribute & Form Selectors ── */}
      <section className="max-w-6xl mx-auto mb-16 grid md:grid-cols-2 gap-8 items-start">
         
         {/* Attribute Selectors */}
         <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-gray-700 h-full">
            <h2 className="text-2xl font-black flex items-center text-gray-900 dark:text-white mb-6">
              <Layers className="w-6 h-6 mr-3 text-purple-500" /> Attribute Selectors
            </h2>
            <ul className="space-y-4">
              <li className="flex flex-col gap-1 border-b border-gray-100 dark:border-gray-700 pb-3">
                <span className="text-xs text-gray-500 font-bold uppercase">Has Attribute</span>
                <code className="text-purple-600 dark:text-purple-400 font-mono font-bold">$("[href]")</code>
              </li>
              <li className="flex flex-col gap-1 border-b border-gray-100 dark:border-gray-700 pb-3">
                <span className="text-xs text-gray-500 font-bold uppercase">Attribute Value</span>
                <code className="text-purple-600 dark:text-purple-400 font-mono font-bold">$("input[type='text']")</code>
              </li>
              <li className="flex flex-col gap-1 border-b border-gray-100 dark:border-gray-700 pb-3">
                <span className="text-xs text-gray-500 font-bold uppercase">Starts With</span>
                <code className="text-purple-600 dark:text-purple-400 font-mono font-bold">$("a[href^='https']")</code>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-xs text-gray-500 font-bold uppercase">Ends With</span>
                <code className="text-purple-600 dark:text-purple-400 font-mono font-bold">$("img[src$='.jpg']")</code>
              </li>
            </ul>
         </div>

         {/* Form Selectors */}
         <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-gray-700 h-full">
            <h2 className="text-2xl font-black flex items-center text-gray-900 dark:text-white mb-6">
              <List className="w-6 h-6 mr-3 text-fuchsia-500" /> Form Selectors 🔥
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">Incredibly useful for extracting data or styling specific inputs in HTML forms.</p>
            
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[":input", ":text", ":password", ":checkbox", ":submit"].map((sel, i) => (
                <div key={i} className="bg-fuchsia-50 dark:bg-fuchsia-900/10 border border-fuchsia-100 dark:border-fuchsia-800/50 p-2 rounded-lg text-center font-mono text-sm font-bold text-fuchsia-700 dark:text-fuchsia-400">
                  {sel}
                </div>
              ))}
            </div>
            
            <CodeBlock title="Example" code={`$(":text").css("border", "2px solid blue");`} />
         </div>

      </section>

      {/* ── Section 8: Complete Example Visualization ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-purple-900 rounded-[3rem] p-8 lg:p-12 shadow-2xl relative overflow-hidden text-white">
          <div className="absolute top-0 right-[-100px] w-96 h-96 bg-fuchsia-500/20 blur-3xl rounded-full mix-blend-screen pointer-events-none"></div>
          
          <h2 className="text-3xl font-black mb-8 flex items-center relative z-10">
            <Target className="text-fuchsia-300 w-8 h-8 mr-4" /> Complete Visualization 🎯
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 relative z-10">
            
            {/* Output Sandbox */}
            <div className="bg-white/10 border border-white/20 rounded-[2.5rem] p-8 backdrop-blur-md flex flex-col">
               <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] font-black text-fuchsia-200 uppercase tracking-widest bg-fuchsia-900/50 px-3 py-1 rounded-full">Live Result</span>
                  <button onClick={handleDemoReset} className="text-xs text-gray-300 hover:text-white">Reset Demo</button>
               </div>
               
               <div className="flex-grow bg-white p-8 rounded-2xl flex flex-col items-center justify-center text-gray-800 shadow-inner relative">
                  <span className="absolute top-3 left-4 text-xs font-mono text-gray-400">&lt;div&gt;</span>
                  
                  <div className="w-full max-w-xs space-y-4">
                     {/* .item 1 */}
                     <p 
                       style={{ color: itemColor, backgroundColor: firstBg }} 
                       className="p-3 border border-gray-200 rounded-lg transition-all duration-500 flex justify-between items-center"
                     >
                       <span>Item 1</span>
                       <span className="text-[10px] font-mono text-gray-400 bg-gray-100 px-2 py-0.5 rounded">class="item"</span>
                     </p>
                     
                     {/* .item 2 */}
                     <p 
                       style={{ color: itemColor }} 
                       className="p-3 border border-gray-200 rounded-lg transition-all duration-500 flex justify-between items-center"
                     >
                       <span>Item 2</span>
                       <span className="text-[10px] font-mono text-gray-400 bg-gray-100 px-2 py-0.5 rounded">class="item"</span>
                     </p>

                     {/* #special */}
                     <p 
                       style={{ fontWeight: specialWeight as any }} 
                       className="p-3 border border-purple-200 bg-purple-50 rounded-lg transition-all duration-500 flex justify-between items-center"
                     >
                       <span>Special Item</span>
                       <span className="text-[10px] font-mono text-purple-400 bg-purple-100 px-2 py-0.5 rounded uppercase font-bold">id="special"</span>
                     </p>

                     <button 
                       onClick={handleDemoClick}
                       className="w-full py-3 bg-fuchsia-600 hover:bg-fuchsia-500 text-white rounded-xl font-bold shadow-lg shadow-fuchsia-600/30 transition-transform active:scale-95 mt-4"
                     >
                       Click Button (#btn)
                     </button>
                  </div>
               </div>
            </div>

            {/* Code */}
            <div className="space-y-6">
               <CodeBlock 
                 title="HTML"
                 language="html"
                 code={`<div>\n  <p class="item">Item 1</p>\n  <p class="item">Item 2</p>\n  <p id="special">Special Item</p>\n  <button id="btn">Click</button>\n</div>`}
               />
               <CodeBlock 
                 title="jQuery"
                 code={`$(document).ready(function() {\n  $("#btn").click(function() {\n    $(".item").css("color", "blue");\n    $("#special").css("font-weight", "bold");\n    $("p:first").css("background", "yellow");\n  });\n});`}
               />
               <div className="bg-fuchsia-900/50 p-4 rounded-xl border border-fuchsia-500/30 text-sm font-medium">
                 <ul className="space-y-2">
                   <li className="flex gap-2"><ArrowRight size={16} className="text-fuchsia-400 flex-shrink-0" /> All .item → blue color</li>
                   <li className="flex gap-2"><ArrowRight size={16} className="text-fuchsia-400 flex-shrink-0" /> #special → bold</li>
                   <li className="flex gap-2"><ArrowRight size={16} className="text-fuchsia-400 flex-shrink-0" /> First paragraph (.item 1) → yellow background</li>
                 </ul>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Section 9: Selector Chaining ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-r from-purple-100 to-fuchsia-100 dark:from-purple-900/20 dark:to-fuchsia-900/20 p-8 rounded-[2.5rem] border border-purple-200 dark:border-purple-800">
          <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-6 flex items-center">
            <Link className="text-purple-500 mr-3 w-8 h-8" /> Selector Chaining (Power Feature 🔥)
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
             <div>
               <p className="text-gray-700 dark:text-gray-300 font-medium mb-4">
                 You can stack multiple jQuery actions and traversing methods right after your initial selector. This prevents you from querying the DOM multiple times, making your code faster and cleaner!
               </p>
             </div>
             <div className="bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-700">
               <pre className="font-mono text-sm text-fuchsia-300 leading-relaxed overflow-x-auto">
                 <code>
                   $(<span className="text-pink-300">"p"</span>)<br/>
                   &nbsp;&nbsp;.first()<br/>
                   &nbsp;&nbsp;.css(<span className="text-purple-300">"color"</span>, <span className="text-purple-300">"red"</span>)<br/>
                   &nbsp;&nbsp;.hide();
                 </code>
               </pre>
             </div>
          </div>
        </div>
      </section>

      {/* ── Section 10 & 11: Mistakes & Use Cases ── */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        
        {/* Mistakes */}
        <div className="bg-rose-50 dark:bg-rose-900/10 p-8 rounded-[2.5rem] border border-rose-200 dark:border-rose-900/50">
           <h2 className="text-2xl font-black text-rose-800 dark:text-rose-400 mb-8 flex items-center">
             <ShieldAlert className="w-8 h-8 mr-4" /> Common Mistakes ⚠️
           </h2>
           <div className="space-y-6">
             <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
               <p className="font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-2">
                 <span className="text-rose-500">❌</span> Missing # for ID
               </p>
               <code className="text-xs font-mono text-gray-500 block mb-2 px-2 py-1 bg-gray-100 dark:bg-gray-900 rounded line-through">$("title")</code>
               <p className="font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-2">
                 <span className="text-emerald-500">✅</span> Correct
               </p>
               <code className="text-xs font-mono text-emerald-600 dark:text-emerald-400 block px-2 py-1 bg-emerald-50 dark:bg-emerald-900/20 rounded">$("#title")</code>
             </div>
             
             <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
               <p className="font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-2">
                 <span className="text-rose-500">❌</span> Missing . for class
               </p>
               <code className="text-xs font-mono text-gray-500 block mb-2 px-2 py-1 bg-gray-100 dark:bg-gray-900 rounded line-through">$("item")</code>
               <p className="font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-2">
                 <span className="text-emerald-500">✅</span> Correct
               </p>
               <code className="text-xs font-mono text-emerald-600 dark:text-emerald-400 block px-2 py-1 bg-emerald-50 dark:bg-emerald-900/20 rounded">$(".item")</code>
             </div>

             <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
               <p className="font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-2">
                 <span className="text-rose-500">❌</span> Using wrong index
               </p>
               <code className="text-xs font-mono text-rose-600 dark:text-rose-400 block px-2 py-1 bg-rose-50 dark:bg-rose-900/20 rounded">$("p").eq(1) // 👈 This is 2nd element, not 1st! (Indexes start at 0)</code>
             </div>
           </div>
        </div>

        {/* Use Cases */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col h-full">
           <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-8 flex items-center">
             <Activity className="w-8 h-8 mr-4 text-purple-500" /> Real-World Use Cases 🌍
           </h2>
           <div className="flex-grow flex flex-col justify-center space-y-4">
             {[
               "Form validation (Targeting specific inputs)",
               "Highlight selected items (Applying active classes)",
               "Navigation menus (Toggling submenus)",
               "Filtering data (Hiding rows in a table)",
               "Dynamic UI updates (Changing themes, layouts)"
             ].map((use, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-purple-50 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-800/30 hover:-translate-y-1 transition-transform">
                  <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-800 flex justify-center items-center text-purple-600 dark:text-purple-300 flex-shrink-0">
                    {i + 1}
                  </div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">{use}</span>
                </div>
             ))}
           </div>
        </div>

      </section>

      {/* Footer Branding */}
      <footer className="max-w-6xl mx-auto text-center py-12 opacity-50 border-t border-gray-100 dark:border-gray-800 uppercase tracking-widest text-xs font-black text-gray-400">
        <div className="flex items-center justify-center gap-2 mb-2 italic">
          <Crosshair className="w-5 h-5 fill-current" /> KNOWGROW HUB
        </div>
        <p>JavaScript Course Components • jQuery Selectors Module</p>
      </footer>

    </div>
  );
};

export default JquerySelectors;