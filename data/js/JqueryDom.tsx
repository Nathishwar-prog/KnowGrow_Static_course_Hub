import React, { useState } from 'react';
import {
  Code2, TreeDeciduous, Layout, Activity, Type,
  Hash, Layers, MousePointer2, AlertTriangle,
  Lightbulb, Check, Copy, Link, FileText,
  PlusCircle, Trash2, ArrowRight, Zap, Target
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
            <div className="w-2.5 h-2.5 rounded-full bg-rose-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-orange-400/80"></div>
          </div>
        </div>
      )}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-orange-500 hover:text-white transition-colors border border-gray-700"
          title="Copy code"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono bg-gray-900 text-orange-300 leading-relaxed rounded-b-xl">
        <code>{code}</code>
      </pre>
    </div>
  );
};

const JqueryDom: React.FC = () => {
  // Sandbox State for Section 8
  const [titleText, setTitleText] = useState("Original Title");
  const [titleColor, setTitleColor] = useState("inherit"); // Use inherited color for light/dark
  const [paragraphs, setParagraphs] = useState<string[]>([]);
  
  const handleSandboxClick = () => {
    setTitleText("Title Changed!");
    setTitleColor("#3b82f6"); // blue color as requested
    setParagraphs(prev => [...prev, "New paragraph added!"]);
  };

  const handleSandboxReset = () => {
    setTitleText("Original Title");
    setTitleColor("inherit");
    setParagraphs([]);
  };

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-orange-50 to-rose-50 dark:from-gray-900 dark:to-orange-900/10 min-h-screen font-sans">
      
      {/* ── Hero Header ── */}
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-orange-400/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-rose-400/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-orange-600 to-rose-600 rounded-2xl mb-6 shadow-xl transform hover:rotate-3 transition-transform cursor-pointer">
          <TreeDeciduous className="w-8 h-8 text-white fill-current/20" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          jQuery DOM
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          Select, manipulate, add, remove, and traverse HTML elements dynamically using jQuery's powerful methods.
        </p>
      </header>

      {/* ── Section 1 & 2: What is DOM / jQuery DOM ── */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-start">
        {/* What is DOM? */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-[2rem] shadow-sm border border-gray-100 dark:border-gray-700 h-full">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <FileText className="w-6 h-6 mr-3 text-orange-500" /> What is DOM?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 font-medium">
            <strong className="text-orange-600 dark:text-orange-400">DOM = Document Object Model</strong>
            <br/>
            It represents the structure of an HTML page as a tree.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
             <CodeBlock 
               title="HTML"
               code={`<html>\n  <body>\n    <h1>Hello</h1>\n    <p>Welcome</p>\n  </body>\n</html>`}
             />
             <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-xl border border-orange-100 dark:border-orange-800 font-mono text-xs overflow-hidden text-orange-800 dark:text-orange-300">
               <div>Document</div>
               <div className="pl-2">└── html</div>
               <div className="pl-6">└── body</div>
               <div className="pl-10">├── h1</div>
               <div className="pl-10">└── p</div>
             </div>
          </div>
        </div>

        {/* What is jQuery DOM? */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-[2rem] shadow-sm border border-gray-100 dark:border-gray-700 h-full">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <Layout className="w-6 h-6 mr-3 text-rose-500" /> What is jQuery DOM?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 font-medium">
            jQuery DOM allows you to <strong className="text-rose-600 dark:text-rose-400">control and manipulate webpage structure dynamically</strong>.
          </p>
          
          <ul className="space-y-3 mb-6">
            {[
              "Select HTML elements",
              "Modify content",
              "Change attributes",
              "Add/remove elements",
              "Traverse (move through elements)"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium">
                <Check className="text-rose-500 w-5 h-5 flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Section 3: Why jQuery DOM? ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-8 flex items-center">
          <Lightbulb className="text-amber-500 w-8 h-8 mr-4" /> Why jQuery DOM?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
           {[
             { title: "Easy selectors", desc: '$("#id")', icon: <Target size={20} /> },
             { title: "Short syntax", desc: "Less code", icon: <Code2 size={20} /> },
             { title: "Cross-browser", desc: "Works everywhere", icon: <Layout size={20} /> },
             { title: "Powerful methods", desc: "Faster development", icon: <Zap size={20} /> }
           ].map((item, i) => (
             <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 bg-amber-50 dark:bg-amber-900/40 rounded-full flex items-center justify-center text-amber-500 mb-4">
                  {item.icon}
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1">{item.title}</h4>
                <p className="text-sm font-mono text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 px-3 py-1 rounded w-full">{item.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* ── Section 4: jQuery Selectors ── */}
      <section className="max-w-6xl mx-auto mb-16">
         <div className="bg-white dark:bg-gray-800 rounded-[2.5rem] p-8 lg:p-12 shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-8 flex items-center">
              <Hash className="text-orange-500 w-8 h-8 mr-4" /> jQuery Selectors (Foundation 🔥)
            </h2>

            <div className="bg-gray-900 p-6 rounded-2xl mb-8 border-l-4 border-orange-500 inline-block">
              <h4 className="text-[10px] font-black text-orange-400 uppercase tracking-widest mb-1">Syntax</h4>
              <code className="text-xl text-white font-mono">
                $(<span className="text-orange-400">selector</span>)
              </code>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
               <div className="space-y-4">
                 <h4 className="font-bold text-gray-800 dark:text-white">Examples:</h4>
                 <CodeBlock 
                   code={`$("#id")        // Select by ID\n$(".class")     // Select by class\n$("p")          // Select all <p>\n$("div p")      // Select <p> inside <div>`} 
                 />
               </div>
               <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-2xl border border-orange-200 dark:border-orange-800/50 flex flex-col justify-center">
                 <div className="flex items-start gap-4 mb-4">
                   <Target className="text-orange-600 w-6 h-6 flex-shrink-0 mt-1" />
                   <div>
                     <h4 className="font-bold text-gray-900 dark:text-white mb-1">Choosing Elements</h4>
                     <p className="text-sm text-gray-600 dark:text-gray-300">
                       Selectors tell jQuery exactly which HTML elements you want to interact with. They are almost identical to CSS selectors!
                     </p>
                   </div>
                 </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 5: DOM Manipulation Methods ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-8 flex items-center">
          <Type className="text-rose-500 w-8 h-8 mr-4" /> Manipulation Methods
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-[2rem] border border-gray-100 dark:border-gray-700 shadow-sm">
             <h3 className="text-xl font-bold flex items-center gap-2 mb-4 text-gray-900 dark:text-white">
               Change & Get Content
             </h3>
             <CodeBlock title=".text() - Only Text" code={`$("#demo").text("Hello World");\nlet data = $("#demo").text();`} />
             <div className="my-4"></div>
             <CodeBlock title=".html() - Includes HTML" code={`$("#demo").html("<b>Hello</b>");`} />
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-[2rem] border border-gray-100 dark:border-gray-700 shadow-sm">
             <h3 className="text-xl font-bold flex items-center gap-2 mb-4 text-gray-900 dark:text-white">
               Change Attributes & Value
             </h3>
             <CodeBlock title=".attr() - Attributes" code={`$("#img").attr("src", "image.jpg");\n// Get attribute:\nlet src = $("#img").attr("src");`} />
             <div className="my-4"></div>
             <CodeBlock title=".val() - Input Values" code={`$("#inputBox").val("New Value");`} />
          </div>
        </div>
      </section>

      {/* ── Section 6 & 7: Add/Remove & Traversing ── */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-start">
         <div className="bg-gray-900 text-white p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 p-8 opacity-10"><PlusCircle size={120} /></div>
            <h2 className="text-2xl font-black mb-6 flex items-center relative z-10">
              <PlusCircle className="text-rose-400 mr-3" /> Add & Remove
            </h2>
            <div className="space-y-6 relative z-10">
               <div>
                 <h4 className="text-rose-400 font-bold text-sm mb-3">Add Elements</h4>
                 <div className="space-y-2">
                   <div className="flex gap-2 text-sm"><code className="text-orange-300 w-24">.append()</code> <span className="text-gray-400">Inside, at end</span></div>
                   <div className="flex gap-2 text-sm"><code className="text-orange-300 w-24">.prepend()</code> <span className="text-gray-400">Inside, at beginning</span></div>
                   <div className="flex gap-2 text-sm"><code className="text-orange-300 w-24">.after()</code> <span className="text-gray-400">Outside, directly after</span></div>
                   <div className="flex gap-2 text-sm"><code className="text-orange-300 w-24">.before()</code> <span className="text-gray-400">Outside, directly before</span></div>
                 </div>
               </div>
               <div>
                 <h4 className="text-rose-400 font-bold text-sm mb-3 text-red-400">Remove Elements</h4>
                 <div className="space-y-2">
                   <div className="flex gap-2 text-sm"><code className="text-red-300 w-24">.remove()</code> <span className="text-gray-400">Removes element & content</span></div>
                   <div className="flex gap-2 text-sm"><code className="text-red-300 w-24">.empty()</code> <span className="text-gray-400">Removes content only</span></div>
                 </div>
               </div>
            </div>
         </div>

         <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-sm h-full">
            <h2 className="text-2xl font-black mb-6 flex items-center text-gray-900 dark:text-white">
              <Link className="text-orange-500 mr-3" /> DOM Traversing 🔍
            </h2>
            <p className="text-sm text-gray-500 mb-6">Move through the HTML elements based on their relationship to other elements.</p>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { method: ".parent()", desc: "Get direct parent" },
                { method: ".children()", desc: "Get all direct children" },
                { method: ".siblings()", desc: "Get elements on same level" },
                { method: '.find("p")', desc: "Find specific descendants" }
              ].map((item, i) => (
                <div key={i} className="p-4 bg-orange-50 dark:bg-orange-900/10 rounded-xl border border-orange-100 dark:border-orange-800">
                   <code className="text-sm font-bold text-orange-600 dark:text-orange-400 mb-2 block">{item.method}</code>
                   <p className="text-xs text-gray-600 dark:text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* ── Section 8 & 9: Complete Sandbox & Chaining ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gray-900 rounded-[3rem] p-8 lg:p-12 shadow-2xl">
          <h2 className="text-3xl font-black text-white mb-8 flex items-center">
            <Zap className="text-amber-400 w-8 h-8 mr-4" /> Interactive Demo & Chaining
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Sandbox */}
            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 flex flex-col">
               <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] font-black text-white/50 uppercase tracking-widest">DOM Output</span>
                  <button onClick={handleSandboxReset} className="text-xs text-gray-400 hover:text-white">Reset</button>
               </div>
               
               <div className="flex-grow bg-white/10 p-6 rounded-2xl border border-white/5 text-center min-h-[250px] flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="w-full max-w-sm border-2 border-dashed border-white/20 p-6 rounded-xl">
                    <div className="text-white/30 text-[10px] absolute top-2 left-3 font-mono">#container</div>
                    
                    {/* Elements being manipulated */}
                    <h2 
                       className="text-2xl font-bold transition-colors duration-300 mb-6"
                       style={{ color: titleColor === 'inherit' ? 'var(--tw-text-white)' : titleColor }}
                    >
                      {titleText}
                    </h2>
                    
                    <button 
                      onClick={handleSandboxClick}
                      className="px-6 py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-lg font-bold shadow-lg shadow-orange-600/20 transition-all active:scale-95 mb-4"
                    >
                      Click Me
                    </button>

                    <div className="mt-4 space-y-2 text-white/80 animate-in fade-in slide-in-from-top-2">
                       {paragraphs.map((p, i) => (
                         <p key={i} className="text-sm border border-emerald-400/30 bg-emerald-400/10 rounded px-2 py-1 text-emerald-300">
                           {p}
                         </p>
                       ))}
                    </div>
                  </div>
               </div>
            </div>

            {/* Code & Chaining */}
            <div className="space-y-6">
               <div className="bg-white/5 p-6 rounded-[2rem] border border-white/10">
                 <h4 className="text-sm font-bold text-white mb-3">jQuery Code for Demo</h4>
                 <CodeBlock 
                   code={`$("#btn").click(function() {\n  $("#title").text("Title Changed!");\n  $("#container").append("<p>New paragraph added!</p>");\n  $("#title").css("color", "blue");\n});`}
                 />
               </div>

               <div className="bg-gradient-to-br from-amber-500/20 to-orange-600/20 p-6 rounded-[2rem] border border-amber-500/30">
                 <h4 className="text-lg font-black text-amber-400 mb-2 flex items-center">
                   <Link size={18} className="mr-2" /> Chaining (Power Feature 🔥)
                 </h4>
                 <p className="text-sm text-amber-100/70 mb-4">One line → multiple actions</p>
                 <CodeBlock 
                   code={`$("#box")\n  .text("Updated")\n  .css("color", "red")\n  .slideUp(500)\n  .slideDown(500);`}
                 />
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Section 10, 11, 12: Mistakes, Uses, Recommendations ── */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-3 gap-6">
         {/* Mistakes */}
         <div className="bg-rose-50 dark:bg-rose-900/10 p-8 rounded-[2rem] border border-rose-200 dark:border-rose-900/50">
           <h3 className="text-xl font-black text-rose-800 dark:text-rose-400 mb-4 flex items-center">
             <AlertTriangle className="mr-2" /> Common Mistakes
           </h3>
           <div className="space-y-4">
             <div>
               <p className="text-sm font-bold text-rose-900 dark:text-rose-300 flex items-start gap-1">
                 <span className="text-red-500">❌</span> Forgetting $(document).ready()
               </p>
               <p className="text-xs text-rose-700/80 dark:text-rose-400/80 mt-1 pl-5">Always wrap your logic so elements load first.</p>
             </div>
             <div>
               <p className="text-sm font-bold text-rose-900 dark:text-rose-300 flex items-start gap-1">
                 <span className="text-red-500">❌</span> Using .text() for HTML tags
               </p>
               <code className="text-[10px] block mt-1 pl-5 text-gray-600 dark:text-gray-400 bg-white/50 dark:bg-black/20 p-1 rounded">
                 $("#demo").text("&lt;b&gt;Hello&lt;/b&gt;");
               </code>
               <p className="text-[10px] italic pl-5 mt-1 text-rose-700 dark:text-rose-400">Gets output literally as tags, use .html()</p>
             </div>
           </div>
         </div>

         {/* Real World Uses */}
         <div className="bg-white dark:bg-gray-800 p-8 rounded-[2rem] border border-gray-100 dark:border-gray-700 shadow-sm">
           <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4 flex items-center">
             <Activity className="mr-2 text-orange-500" /> Real-World Use Cases
           </h3>
           <ul className="space-y-2">
             {["Form validation", "Dynamic content loading", "Chat applications", "Todo lists", "Interactive dashboards"].map((use, i) => (
                <li key={i} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <ArrowRight size={14} className="text-orange-400 mr-2" /> {use}
                </li>
             ))}
           </ul>
         </div>

         {/* Recommendation */}
         <div className="bg-gradient-to-br from-orange-500 to-rose-600 p-8 rounded-[2rem] text-white shadow-lg">
           <h3 className="text-xl font-black mb-4 flex items-center text-white">
             <Lightbulb className="mr-2 text-yellow-300" /> Pro Tip
           </h3>
           
           <p className="font-bold text-lg mb-4 text-orange-100 leading-tight">
             "First select → then manipulate"
           </p>

           <p className="text-sm text-orange-100 mb-4 opacity-90 leading-relaxed">
             Focus heavily on selectors and traversal first. Why? Because 80% of real problems involve simply targeting the correct element on the page.
           </p>
           
           <div className="inline-block bg-black/20 px-3 py-1.5 rounded-lg text-xs font-bold font-mono">
             $(selector).action()
           </div>
         </div>
      </section>

      {/* Footer Branding */}
      <footer className="max-w-6xl mx-auto text-center py-12 opacity-50 border-t border-gray-100 dark:border-gray-800 uppercase tracking-widest text-xs font-black text-gray-400">
        <div className="flex items-center justify-center gap-2 mb-2 italic">
          <TreeDeciduous className="w-5 h-5 fill-current" /> KNOWGROW HUB
        </div>
        <p>JavaScript Course Components • jQuery DOM Module</p>
      </footer>

    </div>
  );
};

export default JqueryDom;