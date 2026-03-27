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
  Image as ImageIcon,
  Link,
  FormInput,
  SearchCode,
  Type,
  Palette,
  Settings2,
  Wrench,
  Monitor
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

const JsHtmlObjects: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#110805] min-h-screen font-sans selection:bg-orange-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-orange-600 dark:text-orange-400 text-[10px] font-black mb-8 border border-orange-100 dark:border-orange-900/50 shadow-xl shadow-orange-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <Box size={14} className="fill-current" /> DOM MANIPULATION
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          JavaScript <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-500 drop-shadow-2xl">
            HTML Objects
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The true power of JavaScript. Learn how it converts elements into <span className="text-gray-900 dark:text-white font-bold underline decoration-orange-500 underline-offset-4 tracking-tight">controllable objects</span> using the DOM tree.
        </p>
      </header>

      {/* ── Section 1 & 2: What are Objects & DOM Tree ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden h-full">
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-colors duration-700"></div>
             <div className="flex flex-col gap-6 relative z-10 h-full">
               <div className="p-4 bg-orange-50 dark:bg-orange-500/10 rounded-2xl text-orange-500 w-max border border-orange-100 dark:border-orange-500/20 shadow-lg">
                 <Box size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">1. What are HTML Objects?</h3>
                 <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                   👉 HTML Objects are JavaScript representations of HTML elements inside the browser.
                 </p>
                 <div className="bg-amber-50 dark:bg-amber-500/5 p-5 rounded-2xl border border-amber-200 dark:border-amber-500/20">
                    <p className="font-bold text-amber-700 dark:text-amber-400 flex items-center gap-2 mb-2">
                       <Info size={18}/> In simple terms:
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                       Every HTML element becomes an <span className="font-bold text-gray-900 dark:text-white">object</span> that JavaScript can control.
                    </p>
                 </div>
               </div>
             </div>
           </div>
        </div>

        <div className="space-y-6 flex flex-col justify-center">
           <div className="bg-[#0b1120] p-10 rounded-[3rem] border border-orange-500/20 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
               <div className="absolute right-0 top-0 opacity-10 p-6"><Network size={150} className="text-orange-500"/></div>
               <SectionHeader icon={Network} title="2. The DOM Tree" subtitle="Document Object Model." color="text-orange-400" />
               <p className="text-gray-300 font-medium mb-6 relative z-10">
                  👉 The browser converts HTML into a tree structure of objects called the <b>DOM</b>.
               </p>
               <div className="grid md:grid-cols-2 gap-4 relative z-10">
                  <div>
                     <h4 className="text-xs uppercase tracking-widest font-black text-gray-500 mb-2">HTML Code</h4>
                     <div className="bg-white/5 p-4 rounded-xl border border-white/5 font-mono text-sm text-gray-300">
                        &lt;body&gt;<br/>
                        &nbsp;&nbsp;&lt;h1&gt;Hello&lt;/h1&gt;<br/>
                        &lt;/body&gt;
                     </div>
                  </div>
                  <div>
                     <h4 className="text-xs uppercase tracking-widest font-black text-orange-400 mb-2">Becomes DOM Tree:</h4>
                     <div className="bg-orange-500/10 p-4 rounded-xl border border-orange-500/20 font-mono text-sm text-orange-300">
                        document<br/>
                        &nbsp;└── body<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── h1
                     </div>
                  </div>
               </div>
           </div>
        </div>
      </section>

      {/* ── Section 3: Important HTML Objects ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <SectionHeader icon={Globe} title="3. Important HTML Objects" subtitle="Pre-built properties." color="text-amber-500" />
         
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-lg hover:-translate-y-1 transition-transform">
               <h4 className="font-black text-lg text-amber-500 mb-2 flex items-center gap-2"><Globe size={20}/> document Object</h4>
               <p className="text-sm font-medium text-gray-500 mb-4">Represents the entire webpage.</p>
               <CodeBlock code={`console.log(document.title);`} />
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-lg hover:-translate-y-1 transition-transform">
               <h4 className="font-black text-lg text-blue-500 mb-2 flex items-center gap-2"><Monitor size={20}/> window Object</h4>
               <p className="text-sm font-medium text-gray-500 mb-4">Represents the browser window itself.</p>
               <CodeBlock code={`console.log(window.innerWidth);`} />
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-lg hover:-translate-y-1 transition-transform">
               <h4 className="font-black text-lg text-teal-500 mb-2 flex items-center gap-2"><FormInput size={20}/> forms Object</h4>
               <p className="text-sm font-medium text-gray-500 mb-4">Access a collection of all forms.</p>
               <CodeBlock code={`document.forms[0]`} />
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-lg hover:-translate-y-1 transition-transform">
               <h4 className="font-black text-lg text-rose-500 mb-2 flex items-center gap-2"><ImageIcon size={20}/> images Object</h4>
               <p className="text-sm font-medium text-gray-500 mb-4">Access all images on the page.</p>
               <CodeBlock code={`document.images[0]`} />
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-lg hover:-translate-y-1 transition-transform lg:col-span-2">
               <h4 className="font-black text-lg text-violet-500 mb-2 flex items-center gap-2"><Link size={20}/> links Object</h4>
               <p className="text-sm font-medium text-gray-500 mb-4">Retrieves all hyperlinks in the document.</p>
               <CodeBlock code={`document.links`} />
            </div>
         </div>
      </section>

      {/* ── Section 4: Accessing HTML Elements ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-[#0b1120] border border-orange-500/20 p-12 rounded-[4rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5"><SearchCode size={250} className="text-orange-500"/></div>
            
            <SectionHeader icon={SearchCode} title="4. Accessing HTML Elements" subtitle="Selecting nodes in the DOM." color="text-orange-400" />
            
            <div className="grid md:grid-cols-3 gap-6 relative z-10 mt-8">
               <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
                  <h4 className="font-black text-orange-400 flex items-center gap-2 mb-4"><Target size={18}/> By ID</h4>
                  <CodeBlock code={`document.getElementById("demo");`} />
               </div>

               <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
                  <h4 className="font-black text-amber-400 flex items-center gap-2 mb-4"><Layers size={18}/> By Class</h4>
                  <CodeBlock code={`document.getElementsByClassName("box");`} />
               </div>

               <div className="bg-orange-500/10 border border-orange-500/30 p-6 rounded-3xl shadow-[0_0_30px_rgba(249,115,22,0.15)]">
                  <h4 className="font-black text-orange-400 flex items-center gap-2 mb-4"><CheckCircle size={18}/> Query Selector</h4>
                  <p className="text-xs text-orange-300 font-bold mb-4 uppercase tracking-widest">(Modern approach)</p>
                  <CodeBlock code={`document.querySelector(".box");`} />
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 5 & 6: Changing Content & Styles ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-white dark:bg-gray-800 border border-t-4 border-t-blue-500 border-gray-100 dark:border-gray-700 p-10 rounded-[2.5rem] shadow-xl flex flex-col h-full">
            <SectionHeader icon={Type} title="5. Change HTML Content" subtitle="Modify what the user sees." color="text-blue-500" />
            <div className="flex-1 mt-4">
               <h4 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-3">HTML</h4>
               <CodeBlock language="html" code={`<p id="text">Hello</p>`} />
               <h4 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-3 mt-6">JavaScript</h4>
               <CodeBlock code={`document.getElementById("text").innerHTML = "Welcome!";`} />
            </div>
         </div>

         <div className="bg-white dark:bg-gray-800 border border-t-4 border-t-pink-500 border-gray-100 dark:border-gray-700 p-10 rounded-[2.5rem] shadow-xl flex flex-col h-full">
            <SectionHeader icon={Palette} title="6. Changing Styles" subtitle="Modify appearances safely." color="text-pink-500" />
            <div className="flex-1 mt-4">
               <h4 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-3">JavaScript</h4>
               <CodeBlock code={`document.getElementById("text").style.color = "red";`} />
               <div className="mt-8 bg-pink-50 dark:bg-pink-500/10 p-5 rounded-2xl border border-pink-100 dark:border-pink-500/20">
                  <p className="font-bold text-pink-700 dark:text-pink-400 flex items-center gap-2">
                     <Settings2 size={18}/> Direct Property Access
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 font-medium mt-2">
                     Use <code>.style</code> followed by camelCased CSS property names (e.g., <code>backgroundColor</code>).
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 7 & 8: Properties & Methods Tables ── */}
      <section className="max-w-6xl mx-auto mb-32 space-y-12">
         <div className="bg-white dark:bg-gray-800 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
            <div className="p-8 pb-4">
                <SectionHeader icon={Settings2} title="7. HTML Object Properties" subtitle="What the objects 'have'." color="text-orange-500" />
            </div>
            <table className="w-full text-left text-sm">
               <thead>
                  <tr className="bg-gray-50 dark:bg-gray-900/50">
                     <th className="p-6 font-black text-orange-500 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700">Property</th>
                     <th className="p-6 font-black text-gray-500 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700 border-l">Description</th>
                  </tr>
               </thead>
               <tbody className="font-medium text-gray-700 dark:text-gray-300 divide-y divide-gray-100 dark:divide-gray-700">
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                     <td className="p-6 font-mono text-orange-600 dark:text-orange-400 font-bold">innerHTML</td><td className="p-6 border-l">Change content</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                     <td className="p-6 font-mono text-orange-600 dark:text-orange-400 font-bold">value</td><td className="p-6 border-l">Input value</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                     <td className="p-6 font-mono text-orange-600 dark:text-orange-400 font-bold">style</td><td className="p-6 border-l">CSS styles</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                     <td className="p-6 font-mono text-orange-600 dark:text-orange-400 font-bold">src</td><td className="p-6 border-l">Image source</td>
                  </tr>
               </tbody>
            </table>
         </div>

         <div className="bg-white dark:bg-gray-800 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
            <div className="p-8 pb-4">
                <SectionHeader icon={Wrench} title="8. HTML Object Methods" subtitle="What the objects can 'do'." color="text-amber-500" />
            </div>
            <table className="w-full text-left text-sm">
               <thead>
                  <tr className="bg-gray-50 dark:bg-gray-900/50">
                     <th className="p-6 font-black text-amber-500 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700">Method</th>
                     <th className="p-6 font-black text-gray-500 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700 border-l">Purpose</th>
                  </tr>
               </thead>
               <tbody className="font-medium text-gray-700 dark:text-gray-300 divide-y divide-gray-100 dark:divide-gray-700">
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                     <td className="p-6 font-mono text-amber-600 dark:text-amber-400 font-bold">getElementById()</td><td className="p-6 border-l">Select element</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                     <td className="p-6 font-mono text-amber-600 dark:text-amber-400 font-bold">querySelector()</td><td className="p-6 border-l">Modern selector</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                     <td className="p-6 font-mono text-amber-600 dark:text-amber-400 font-bold">addEventListener()</td><td className="p-6 border-l">Handle events</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </section>

      {/* ── Section 9 & 10: Forms & Collections ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-[#0b1120] border border-orange-500/20 p-10 rounded-[3rem] shadow-xl">
            <SectionHeader icon={FormInput} title="9. Forms Object Example" subtitle="Directly access nested named elements." color="text-orange-400" />
            <div className="mt-8 space-y-6">
               <CodeBlock language="html" code={`<form id="myForm">\n  <input type="text" name="username">\n</form>`} />
               <CodeBlock code={`let value = document.forms["myForm"]["username"].value;\n\nconsole.log(value);`} />
            </div>
         </div>

         <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border border-amber-500/20 p-10 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Package} title="10. Collections" subtitle="(Very Important Array-likes)" color="text-amber-400" />
            <p className="text-gray-300 font-medium mb-6">👉 Some objects return collections (which behave like arrays but aren't pure arrays).</p>
            <div className="space-y-4">
               <div className="bg-white/5 p-4 rounded-xl border border-white/10 font-mono text-amber-300 flex flex-col gap-2">
                  <span>document.images</span>
                  <span>document.forms</span>
                  <span>document.links</span>
               </div>
               <div className="bg-[#0b1120] p-6 rounded-2xl shadow-inner mt-4 border border-white/5">
                  <p className="font-bold text-gray-400 uppercase tracking-widest text-xs mb-3">👉 Access them like standard arrays:</p>
                  <CodeBlock code={`document.images[0] // The first image`} />
               </div>
            </div>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          HIERARCHY MASTERED
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-orange-500/10 decoration-2">
          "The DOM bridges the gap between static HTML markup and dynamic JavaScript logic. Controlling objects gives you absolute power over the webpage."
        </p>
      </footer>

    </div>
  );
};

export default JsHtmlObjects;