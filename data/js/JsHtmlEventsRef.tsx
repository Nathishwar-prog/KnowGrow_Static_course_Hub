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
  MousePointer2,
  Keyboard,
  Power,
  PlaySquare,
  Repeat,
  StopCircle,
  ShieldAlert,
  Hand,
  FormInput,
  Star,
  ArrowUpCircle
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

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-green-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
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

const JsHtmlEventsRef: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#06110f] min-h-screen font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-emerald-600 dark:text-emerald-400 text-[10px] font-black mb-8 border border-emerald-100 dark:border-emerald-900/50 shadow-xl shadow-emerald-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <Zap size={14} className="fill-current" /> INTERACTIVITY
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          JavaScript <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 drop-shadow-2xl">
            HTML Events
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          Learn how JavaScript "listens" to the browser. Respond to <span className="text-gray-900 dark:text-white font-bold underline decoration-emerald-500 underline-offset-4 tracking-tight">clicks, typing, forms, and mouse movement</span> with event handlers.
        </p>
      </header>

      {/* ── Section 1: What are Events? ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden h-full flex flex-col justify-center">
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-colors duration-700"></div>
             <div className="flex flex-col gap-6 relative z-10 h-full">
               <div className="p-4 bg-emerald-50 dark:bg-emerald-500/10 rounded-2xl text-emerald-500 w-max border border-emerald-100 dark:border-emerald-500/20 shadow-lg">
                 <Power size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">1. What are HTML Events?</h3>
                 <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                   👉 HTML Events are actions that happen in the browser, which JavaScript can respond to.
                 </p>
                 <div className="space-y-2 bg-emerald-50 dark:bg-emerald-500/5 p-5 rounded-2xl border border-emerald-100 dark:border-emerald-500/20">
                    <p className="font-bold text-gray-800 dark:text-emerald-300 flex items-center gap-2 mb-3">
                       <Info size={18}/> Examples:
                    </p>
                    <ul className="text-sm font-bold text-gray-600 dark:text-gray-400 ml-2 space-y-2">
                       <li className="flex items-center gap-2"><Check size={16} className="text-emerald-500"/> User clicks a button</li>
                       <li className="flex items-center gap-2"><Check size={16} className="text-emerald-500"/> Types in an input field</li>
                       <li className="flex items-center gap-2"><Check size={16} className="text-emerald-500"/> Submits a form</li>
                       <li className="flex items-center gap-2"><Check size={16} className="text-emerald-500"/> Moves the mouse</li>
                    </ul>
                 </div>
               </div>
             </div>
           </div>
        </div>

        <div className="space-y-4 flex flex-col justify-center">
           <SectionHeader icon={List} title="2. Common HTML Events" subtitle="The events you'll use every day." color="text-teal-500" />
           
           <div className="bg-white dark:bg-gray-800 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
               <table className="w-full text-left text-sm">
                  <thead>
                     <tr className="bg-gray-50 dark:bg-gray-900/50">
                        <th className="p-5 font-black text-cyan-500 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700">Event</th>
                        <th className="p-5 font-black text-gray-500 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700">Description</th>
                     </tr>
                  </thead>
                  <tbody className="font-medium text-gray-700 dark:text-gray-300 divide-y divide-gray-100 dark:divide-gray-700">
                     <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                        <td className="p-5 font-mono text-emerald-600 dark:text-emerald-400">onclick</td><td className="p-5">When user clicks</td>
                     </tr>
                     <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                        <td className="p-5 font-mono text-emerald-600 dark:text-emerald-400">onchange</td><td className="p-5">Input value changes</td>
                     </tr>
                     <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                        <td className="p-5 font-mono text-emerald-600 dark:text-emerald-400">onmouseover</td><td className="p-5">Mouse enters element</td>
                     </tr>
                     <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                        <td className="p-5 font-mono text-emerald-600 dark:text-emerald-400">onmouseout</td><td className="p-5">Mouse leaves element</td>
                     </tr>
                     <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                        <td className="p-5 font-mono text-emerald-600 dark:text-emerald-400">onkeydown</td><td className="p-5">Key pressed</td>
                     </tr>
                     <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                        <td className="p-5 font-mono text-emerald-600 dark:text-emerald-400">onload</td><td className="p-5">Page loaded</td>
                     </tr>
                     <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                        <td className="p-5 font-mono text-emerald-600 dark:text-emerald-400">onsubmit</td><td className="p-5">Form submitted</td>
                     </tr>
                  </tbody>
               </table>
           </div>
        </div>
      </section>

      {/* ── Section 3 & 4: Ways to Handle Events & Best Practices ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-[#0b1120] border border-emerald-500/20 p-12 rounded-[4rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5"><Zap size={250} className="text-emerald-500"/></div>
            
            <SectionHeader icon={Terminal} title="3. Ways to Handle Events" subtitle="How do we connect JS to HTML?" color="text-emerald-400" />
            
            <div className="grid md:grid-cols-3 gap-6 relative z-10 mt-8 mb-12">
               <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm">
                  <h4 className="font-black text-rose-400 flex items-center gap-2 mb-4 text-sm uppercase tracking-widest"><ShieldAlert size={16}/> 1. Inline Event</h4>
                  <p className="text-xs text-rose-300 font-bold mb-4 opacity-80">(Not Recommended)</p>
                  <CodeBlock language="html" code={`<button onclick="alert('Clicked!')">Click Me</button>`} />
               </div>

               <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm">
                  <h4 className="font-black text-blue-400 flex items-center gap-2 mb-4 text-sm uppercase tracking-widest"><RefreshCw size={16}/> 2. DOM Property</h4>
                  <p className="text-xs text-blue-300 font-bold mb-4 opacity-80">(Okay, but limits to 1 event)</p>
                  <CodeBlock code={`document.getElementById("btn").onclick = function () {\n    alert("Clicked!");\n};`} />
               </div>

               <div className="bg-emerald-500/10 border border-emerald-500/30 p-6 rounded-3xl shadow-[0_0_30px_rgba(16,185,129,0.15)] backdrop-blur-sm">
                  <h4 className="font-black text-emerald-400 flex items-center gap-2 mb-4 text-sm uppercase tracking-widest"><CheckCircle size={16}/> 3. addEventListener</h4>
                  <p className="text-xs text-emerald-300 font-bold mb-4 opacity-100">(Best Practice 🔥)</p>
                  <CodeBlock code={`document.getElementById("btn").addEventListener("click", function () {\n    alert("Clicked!");\n});`} />
               </div>
            </div>

            <div className="bg-black/40 border border-emerald-500/20 rounded-3xl p-8 relative z-10">
               <h4 className="text-xl font-black text-white mb-6 flex items-center gap-3">
                  <Star size={24} className="text-amber-400 fill-amber-400"/> 4. Why addEventListener is Best?
               </h4>
               <div className="grid sm:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3 text-emerald-300 font-bold bg-white/5 p-4 rounded-xl"><Check className="text-emerald-500 shrink-0"/> Multiple events can be attached</div>
                  <div className="flex items-center gap-3 text-emerald-300 font-bold bg-white/5 p-4 rounded-xl"><Check className="text-emerald-500 shrink-0"/> Cleaner code separation</div>
                  <div className="flex items-center gap-3 text-emerald-300 font-bold bg-white/5 p-4 rounded-xl"><Check className="text-emerald-500 shrink-0"/> Better control over the Event Flow</div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 5 & 6: Button Click & Event Object ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-10 rounded-[3rem] shadow-xl flex flex-col justify-between h-full">
            <SectionHeader icon={MousePointer2} title="5. Example: Button Click" subtitle="The classic hello world of events." color="text-teal-500" />
            <div className="flex-1">
               <CodeBlock language="html" code={`<button id="btn">Click Me</button>`} />
               <CodeBlock code={`document.getElementById("btn").addEventListener("click", () => {\n    console.log("Button Clicked!");\n});`} />
            </div>
         </div>

         <div className="bg-gradient-to-br from-cyan-900/20 to-teal-900/20 border border-cyan-500/20 p-10 rounded-[3rem] shadow-xl flex flex-col h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-20"><Target size={100} className="text-cyan-500"/></div>
            <SectionHeader icon={Package} title="6. The Event Object" subtitle="(Very Important)" color="text-cyan-400" />
            <div className="flex-1 relative z-10">
               <CodeBlock code={`document.addEventListener("click", function (event) {\n    console.log(event.target);\n});`} />
               <div className="mt-8 bg-[#0b1120] p-6 rounded-2xl border border-cyan-500/20 shadow-inner">
                  <p className="font-black text-cyan-400 mb-4 flex items-center gap-2">🧠 The <code className="bg-cyan-500/20 px-2 py-0.5 rounded">event</code> object automatically gives:</p>
                  <ul className="space-y-3 font-medium text-gray-300 text-sm">
                     <li className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5"><Target size={16} className="text-cyan-500"/> Target element (what was clicked)</li>
                     <li className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5"><MousePointer2 size={16} className="text-cyan-500"/> Mouse coordinates (X/Y position)</li>
                     <li className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5"><Keyboard size={16} className="text-cyan-500"/> Key pressed (for keyboard events)</li>
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 7: Bubbling & Capturing ── */}
      <section className="max-w-5xl mx-auto mb-32">
         <SectionHeader icon={Layers} title="7. Event Bubbling & Capturing" subtitle="How events travel through the DOM." color="text-emerald-500" />
         
         <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700 relative text-center flex flex-col items-center">
               <div className="bg-teal-50 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400 font-black px-4 py-2 rounded-xl mb-6 inline-flex items-center gap-2 border border-teal-200 dark:border-teal-500/20">
                  <ArrowUpCircle size={20}/> Event Bubbling
               </div>
               <p className="text-gray-500 dark:text-gray-400 font-bold mb-6 italic">Event flows upwards</p>
               <div className="flex flex-col items-center gap-2 font-mono text-lg text-emerald-600 dark:text-emerald-400 font-bold bg-[#f8fafc] dark:bg-[#0b1120] w-full p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
                  <div className="bg-white/50 dark:bg-white/5 w-full py-2 rounded-lg border border-gray-200 dark:border-white/10">Child</div>
                  <ArrowUpCircle size={20} className="text-teal-500"/>
                  <div className="bg-white/50 dark:bg-white/5 w-full py-2 rounded-lg border border-gray-200 dark:border-white/10">Parent</div>
                  <ArrowUpCircle size={20} className="text-teal-500"/>
                  <div className="bg-white/50 dark:bg-white/5 w-full py-2 rounded-lg border border-gray-200 dark:border-white/10">Document</div>
               </div>
               <div className="mt-8 w-full text-left">
                  <CodeBlock code={`element.addEventListener("click", handler, false); // Bubbling (Default)`} title="Syntax" />
               </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700 relative text-center flex flex-col items-center">
               <div className="bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-black px-4 py-2 rounded-xl mb-6 inline-flex items-center gap-2 border border-cyan-200 dark:border-cyan-500/20">
                  <div className="flex items-center justify-center transform scale-y-[-1]">
                     <ArrowUpCircle size={20}/> 
                  </div>
                  Event Capturing (Trickling)
               </div>
               <p className="text-gray-500 dark:text-gray-400 font-bold mb-6 italic">Event flows downwards</p>
               <div className="flex flex-col items-center gap-2 font-mono text-lg text-cyan-600 dark:text-cyan-400 font-bold bg-[#f8fafc] dark:bg-[#0b1120] w-full p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
                  <div className="bg-white/50 dark:bg-white/5 w-full py-2 rounded-lg border border-gray-200 dark:border-white/10">Document</div>
                  <div className="flex items-center justify-center transform scale-y-[-1] text-cyan-500">
                     <ArrowUpCircle size={20}/> 
                  </div>
                  <div className="bg-white/50 dark:bg-white/5 w-full py-2 rounded-lg border border-gray-200 dark:border-white/10">Parent</div>
                  <div className="flex items-center justify-center transform scale-y-[-1] text-cyan-500">
                     <ArrowUpCircle size={20}/> 
                  </div>
                  <div className="bg-white/50 dark:bg-white/5 w-full py-2 rounded-lg border border-gray-200 dark:border-white/10">Child</div>
               </div>
               <div className="mt-8 w-full text-left">
                  <CodeBlock code={`element.addEventListener("click", handler, true); // Capturing`} title="Syntax" />
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 8 & 9: Prevent Default & Stop Propagation ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-white dark:bg-gray-800 border border-t-4 border-t-amber-500 border-gray-100 dark:border-gray-700 p-10 rounded-[2.5rem] shadow-xl flex flex-col h-full">
            <SectionHeader icon={ShieldAlert} title="8. Prevent Default Behavior" subtitle="Stop natural instincts." color="text-amber-500" />
            <p className="text-gray-600 dark:text-gray-400 font-medium mb-6">Prevents the browser's default action (like a form submitting and refreshing the page).</p>
            <div className="flex-1 mt-auto">
               <CodeBlock code={`document.querySelector("form").addEventListener("submit", (e) => {\n    e.preventDefault();\n    console.log("Form prevented!");\n});`} />
            </div>
         </div>

         <div className="bg-white dark:bg-gray-800 border border-t-4 border-t-rose-500 border-gray-100 dark:border-gray-700 p-10 rounded-[2.5rem] shadow-xl flex flex-col h-full">
            <SectionHeader icon={StopCircle} title="9. Stop Propagation" subtitle="Kill the bubble." color="text-rose-500" />
            <p className="text-gray-600 dark:text-gray-400 font-medium mb-6">Prevents the event from bubbling up the DOM tree to parent elements.</p>
            <div className="flex-1 mt-auto">
               <CodeBlock code={`document.getElementById("btn").addEventListener("click", (e) => {\n    e.stopPropagation();\n    console.log("Stops bubbling");\n});`} />
            </div>
         </div>
      </section>

      {/* ── Section 10: Real-World Example ── */}
      <section className="max-w-5xl mx-auto mb-32">
         <div className="bg-[#0b1120] border border-cyan-500/20 p-10 md:p-14 rounded-[4rem] shadow-2xl">
            <SectionHeader icon={FormInput} title="10. Real-World Example" subtitle="Form Validation before submission." color="text-cyan-400" />
            
            <div className="grid md:grid-cols-2 gap-8 mt-10">
               <div>
                  <h4 className="text-gray-400 uppercase tracking-widest text-xs font-black mb-4">HTML Form</h4>
                  <CodeBlock language="html" code={`<form id="form">\n  <input type="text" id="name" />\n  <button type="submit">Submit</button>\n</form>`} />
               </div>
               <div>
                  <h4 className="text-cyan-400 uppercase tracking-widest text-xs font-black mb-4">JS Event Listener</h4>
                  <CodeBlock code={`document.getElementById("form").addEventListener("submit", function(e) {\n    e.preventDefault(); // Stop reload\n    \n    const name = document.getElementById("name").value;\n    \n    if(name === "") {\n        alert("Name required!");\n    } else {\n        alert("Form submitted!");\n    }\n});`} />
               </div>
            </div>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          LISTEN & REACT
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-emerald-500/10 decoration-2">
          "Mastering HTML events means mastering interactivity. Always remember to add listeners dynamically!"
        </p>
      </footer>

    </div>
  );
};

export default JsHtmlEventsRef;