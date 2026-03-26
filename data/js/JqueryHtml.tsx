import React, { useState } from 'react';
import {
  Code2, Layout, FileCode, Edit3, Type,
  AlertTriangle, Lightbulb, Check, Copy, Link,
  PlusCircle, Trash2, ArrowRight, Zap, Target, ShieldAlert
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
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-teal-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-blue-400/80"></div>
          </div>
        </div>
      )}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-cyan-500 hover:text-white transition-colors border border-gray-700"
          title="Copy code"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className={`p-4 overflow-x-auto text-sm font-mono bg-gray-900 ${language === 'html' ? 'text-blue-300' : 'text-cyan-300'} leading-relaxed rounded-b-xl`}>
        <code>{code}</code>
      </pre>
    </div>
  );
};

const JqueryHtml: React.FC = () => {
  // Demo 1 State (Complete Example)
  const [demoContent, setDemoContent] = useState("Old Content");
  const [isBold, setIsBold] = useState(false);
  const [demoParagraphs, setDemoParagraphs] = useState<string[]>([]);

  // Demo 2 State (Real-Time Use Case)
  const [comments, setComments] = useState([{ id: 1, text: "First comment!" }]);
  const [commentInput, setCommentInput] = useState("");

  const handleUpdateClick = () => {
    setDemoContent("New Bold Content");
    setIsBold(true);
    setDemoParagraphs(prev => [...prev, "Extra paragraph added!"]);
  };

  const handleUpdateReset = () => {
    setDemoContent("Old Content");
    setIsBold(false);
    setDemoParagraphs([]);
  };

  const handleAddComment = () => {
    if (commentInput.trim()) {
      setComments(prev => [...prev, { id: Date.now(), text: commentInput }]);
      setCommentInput("");
    }
  };

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-gray-900 dark:to-cyan-900/10 min-h-screen font-sans">
      
      {/* ── Hero Header ── */}
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl mb-6 shadow-xl transform hover:rotate-3 transition-transform cursor-pointer">
          <FileCode className="w-8 h-8 text-white fill-current/20" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          jQuery HTML
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          Control the inner content of HTML elements dynamically. Get, Set, Insert, and Replace HTML seamlessly.
        </p>
      </header>

      {/* ── Section 1 & 2: What & Why ── */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-stretch">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-[2rem] shadow-sm border border-gray-100 dark:border-gray-700">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <Layout className="w-6 h-6 mr-3 text-cyan-500" /> What is jQuery HTML?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 font-medium">
            jQuery HTML refers to methods used to Get HTML content, Set HTML content, Insert new HTML elements, and Replace existing HTML.
          </p>
          <div className="bg-cyan-50 dark:bg-cyan-900/20 p-5 rounded-2xl border-l-4 border-cyan-500">
             <h4 className="text-[10px] font-black text-cyan-500 uppercase tracking-widest mb-2">In Simple Words</h4>
             <p className="text-sm font-bold text-gray-800 dark:text-gray-200 leading-snug">
               "Control the inner content of HTML elements dynamically"
             </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-[2rem] shadow-sm border border-gray-100 dark:border-gray-700">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <Lightbulb className="w-6 h-6 mr-3 text-blue-500" /> Why jQuery HTML?
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              { feature: "Easy content update", benefit: "Dynamic UI" },
              { feature: "Less code", benefit: "Faster development" },
              { feature: "Interactive pages", benefit: "Better UX" },
              { feature: "Works with DOM", benefit: "Powerful combination" }
            ].map((item, i) => (
               <div key={i} className="p-4 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-800/50 hover:-translate-y-1 transition-transform">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1">{item.feature}</h4>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">→ {item.benefit}</p>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Core Methods ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-8 flex items-center">
          <Edit3 className="text-cyan-500 w-8 h-8 mr-4" /> Core jQuery HTML Methods 🔥
        </h2>
        
        {/* .html() Method */}
        <div className="bg-gray-900 p-8 rounded-[2rem] mb-8 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Code2 size={120} className="text-cyan-500" />
          </div>
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-cyan-400 font-mono">.html()</span> Method (Most Important)
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-[10px] font-black text-cyan-400 uppercase tracking-widest mb-2">Syntax</h4>
                <code className="text-lg text-white font-mono block mb-6 px-4 py-2 bg-black/30 rounded-lg border border-white/10">
                  $(<span className="text-cyan-400">selector</span>).html(<span className="text-teal-400">content</span>);
                </code>
                
                <h4 className="text-[10px] font-black text-cyan-400 uppercase tracking-widest mb-2">Set HTML</h4>
                <CodeBlock code={`$("#demo").html("<h2>Hello World</h2>");`} />
                <p className="text-xs text-gray-400 italic font-medium">👉 The content becomes a real &lt;h2&gt; element</p>
              </div>
              
              <div>
                <h4 className="text-[10px] font-black text-cyan-400 uppercase tracking-widest mb-2">Get HTML</h4>
                <CodeBlock code={`let data = $("#demo").html();\nconsole.log(data);`} />
                <div className="mt-3 bg-black/40 p-3 rounded-lg border border-white/5">
                  <span className="text-xs text-gray-500 font-bold uppercase tracking-wider block mb-1">Output</span>
                  <code className="text-cyan-300 text-sm font-mono">&lt;h2&gt;Hello World&lt;/h2&gt;</code>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Text vs HTML */}
        <div className="mb-8 bg-blue-50 dark:bg-blue-900/20 p-8 rounded-[2rem] border border-blue-200 dark:border-blue-800 shadow-sm relative">
           <AlertTriangle className="absolute top-8 right-8 text-blue-500/20 w-24 h-24" />
           <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
             <span className="text-blue-600 dark:text-blue-400 font-mono">.text()</span> vs <span className="text-blue-600 dark:text-blue-400 font-mono">.html()</span> ⚠️
           </h3>
           <div className="grid md:grid-cols-2 gap-6">
             <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm z-10 relative">
                <CodeBlock title=".text()" code={`$("#demo").text("<b>Hello</b>");`} />
                <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-700">
                  <span className="text-[10px] font-bold text-gray-500 uppercase">Output (Plain Text)</span>
                  <p className="text-gray-800 dark:text-gray-200 font-mono mt-1">&lt;b&gt;Hello&lt;/b&gt;</p>
                </div>
             </div>
             <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm z-10 relative">
                <CodeBlock title=".html()" code={`$("#demo").html("<b>Hello</b>");`} />
                <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-700">
                  <span className="text-[10px] font-bold text-gray-500 uppercase">Output (Rendered HTML)</span>
                  <p className="text-gray-800 dark:text-gray-200 mt-1"><b>Hello</b></p>
                </div>
             </div>
           </div>
        </div>

        {/* .val() & .attr() */}
        <div className="grid md:grid-cols-2 gap-6">
           <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
             <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4"><span className="font-mono text-cyan-500">.val()</span> (Form Handling)</h4>
             <CodeBlock code={`$("#inputBox").val("New Value");\n\n// Get value:\nlet value = $("#inputBox").val();`} />
           </div>
           <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
             <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4"><span className="font-mono text-cyan-500">.attr()</span> (HTML Attributes)</h4>
             <CodeBlock code={`$("#img").attr("src", "new.jpg");\n\n// Get attribute:\nlet src = $("#img").attr("src");`} />
           </div>
        </div>
      </section>

      {/* ── Section 4 & 5: Adding & Removing Elements ── */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-start">
         <div className="bg-teal-50 dark:bg-teal-900/10 p-8 rounded-[2rem] border border-teal-200 dark:border-teal-900/50 shadow-sm h-full">
            <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-6 flex items-center">
              <PlusCircle className="text-teal-500 mr-3" /> Adding HTML Dynamically
            </h2>
            <div className="space-y-4">
              <div className="flex flex-col gap-1">
                <code className="text-sm font-bold text-teal-700 dark:text-teal-400">$("#box").append("&lt;p&gt;Added at end&lt;/p&gt;");</code>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">Adds content inside, at the end</p>
              </div>
              <div className="flex flex-col gap-1">
                <code className="text-sm font-bold text-teal-700 dark:text-teal-400">$("#box").prepend("&lt;p&gt;Added at start&lt;/p&gt;");</code>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">Adds content inside, at the beginning</p>
              </div>
              <div className="flex flex-col gap-1 mt-4 pt-4 border-t border-teal-200 dark:border-teal-800">
                <code className="text-sm font-bold text-teal-700 dark:text-teal-400">$("#box").after("&lt;p&gt;After box&lt;/p&gt;");</code>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">Adds content outside, directly after element</p>
              </div>
              <div className="flex flex-col gap-1">
                <code className="text-sm font-bold text-teal-700 dark:text-teal-400">$("#box").before("&lt;p&gt;Before box&lt;/p&gt;");</code>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">Adds content outside, directly before element</p>
              </div>
            </div>
         </div>

         <div className="bg-white dark:bg-gray-800 p-8 rounded-[2rem] border border-gray-100 dark:border-gray-700 shadow-sm h-full">
            <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-6 flex items-center">
              <Trash2 className="text-red-500 mr-3" /> Removing & Replacing
            </h2>
            <div className="grid gap-6">
              <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
                <h4 className="text-sm font-bold mb-2 flex items-center gap-2 text-gray-800 dark:text-gray-200"><Trash2 size={16}/> Remove element</h4>
                <code className="text-sm text-red-600 dark:text-red-400 block mb-1">$("#box").remove();</code>
                <p className="text-xs text-gray-500">Removes the element entirely.</p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
                <h4 className="text-sm font-bold mb-2 flex items-center gap-2 text-gray-800 dark:text-gray-200"><Layout size={16}/> Empty content</h4>
                <code className="text-sm text-amber-600 dark:text-amber-400 block mb-1">$("#box").empty();</code>
                <p className="text-xs text-gray-500">Removes child elements/text inside.</p>
              </div>
              <div className="p-4 bg-cyan-50 dark:bg-cyan-900/10 rounded-xl border border-cyan-200 dark:border-cyan-800">
                <h4 className="text-sm font-bold mb-2 flex items-center gap-2 text-cyan-800 dark:text-cyan-200"><Edit3 size={16}/> Replace HTML</h4>
                <code className="text-sm text-cyan-600 dark:text-cyan-400 block mb-1">$("#box").html("&lt;h3&gt;New Content&lt;/h3&gt;");</code>
              </div>
            </div>
         </div>
      </section>

      {/* ── Section 6: Complete Example with Visualization ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gray-900 rounded-[3rem] p-8 lg:p-12 shadow-2xl relative overflow-hidden">
          <h2 className="text-3xl font-black text-white mb-8 flex items-center relative z-10">
            <Target className="text-cyan-400 w-8 h-8 mr-4" /> Example Visualization
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 relative z-10">
            {/* Output Sandbox */}
            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 flex flex-col">
               <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] font-black text-white/50 uppercase tracking-widest">Live Document Preview</span>
                  <button onClick={handleUpdateReset} className="text-xs text-gray-400 hover:text-white transition-colors">Reset</button>
               </div>
               
               <div className="flex-grow bg-white border border-gray-200 dark:border-gray-700 p-6 rounded-2xl flex flex-col items-center justify-center min-h-[250px] shadow-inner text-gray-800">
                  <div className="w-full max-w-sm p-6 rounded-xl relative border-2 border-dashed border-gray-300">
                    <div className="absolute top-2 left-3 text-[10px] font-mono text-gray-400">#container</div>
                    
                    {/* Element #text */}
                    <p 
                      id="text"
                      className={`text-xl transition-all duration-300 mb-6 font-serif ${isBold ? 'font-black' : ''}`}
                    >
                      {demoContent}
                    </p>
                    
                    <button 
                      onClick={handleUpdateClick}
                      className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold shadow-md shadow-blue-600/20 transition-all active:scale-95 mb-4"
                    >
                      Update Content
                    </button>

                    <div className="mt-4 space-y-2 text-left w-full">
                       {demoParagraphs.map((p, i) => (
                         <div key={i} className="animate-in fade-in slide-in-from-top-2 p-2 bg-gray-100 rounded text-sm border-l-4 border-cyan-500 text-gray-700">
                           {p}
                         </div>
                       ))}
                    </div>
                  </div>
               </div>
            </div>

            {/* Code Context */}
            <div className="space-y-6">
               <CodeBlock 
                 title="HTML Structure"
                 language="html"
                 code={`<div id="container">\n  <p id="text">Old Content</p>\n  <button id="btn">Update</button>\n</div>`}
               />
               <CodeBlock 
                 title="jQuery Logic"
                 code={`$(document).ready(function() {\n  $("#btn").click(function() {\n    // Replace inner HTML\n    $("#text").html("<b>New Bold Content</b>");\n    \n    // Add new element at end of container\n    $("#container").append("<p>Extra paragraph added!</p>");\n  });\n});`}
               />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 7 & 8: Real-Time Use Case & Chaining ── */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-start">
         
         <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-gray-700 h-full flex flex-col">
            <h2 className="text-2xl font-black mb-6 flex items-center text-gray-900 dark:text-white">
              <Type className="text-blue-500 mr-3" /> Live Comment System
            </h2>
            <div className="flex-grow">
               <CodeBlock 
                 code={`$("#submit").click(function() {\n  let comment = $("#input").val();\n  $("#comments").append("<p>" + comment + "</p>");\n});`}
               />
               
               {/* Mini Comment Demo */}
               <div className="mt-8 bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                  <div className="flex gap-2 mb-4">
                    <input 
                      type="text" 
                      value={commentInput}
                      onChange={(e) => setCommentInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleAddComment()}
                      placeholder="Type a comment..."
                      className="flex-grow px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button 
                      onClick={handleAddComment}
                      className="px-4 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700"
                    >
                      Post
                    </button>
                  </div>
                  <div className="space-y-2">
                    {comments.map((c) => (
                      <div key={c.id} className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 text-sm text-gray-800 dark:text-gray-200 animate-in fade-in slide-in-from-left-4">
                        {c.text}
                      </div>
                    ))}
                  </div>
               </div>
            </div>
         </div>
         
         <div className="bg-gradient-to-br from-cyan-600 to-blue-700 p-8 rounded-[2.5rem] shadow-xl text-white h-full">
            <h2 className="text-2xl font-black mb-6 flex items-center">
              <Link className="text-cyan-300 mr-3" /> Chaining (Advanced 🔥)
            </h2>
            <p className="text-blue-100 mb-8 font-medium">Chain multiple methods together to perform complex manipulations in a single, readable statement.</p>
            
            <div className="bg-black/30 p-6 rounded-2xl backdrop-blur-sm border border-white/10 shadow-inner">
               <pre className="text-sm font-mono leading-relaxed text-cyan-200 overflow-x-auto">
                 <code>
                   $("#box")<br/>
                   &nbsp;&nbsp;.html(<span className="text-yellow-300">"<b>Updated</b>"</span>)<br/>
                   &nbsp;&nbsp;.css(<span className="text-green-300">"color"</span>, <span className="text-yellow-300">"blue"</span>)<br/>
                   &nbsp;&nbsp;.fadeOut(<span className="text-orange-300">500</span>)<br/>
                   &nbsp;&nbsp;.fadeIn(<span className="text-orange-300">500</span>);
                 </code>
               </pre>
            </div>
         </div>

      </section>

      {/* ── Section 9: Common Mistakes ── */}
      <section className="max-w-6xl mx-auto mb-16">
         <div className="bg-rose-50 dark:bg-rose-900/10 p-8 lg:p-12 rounded-[3rem] border border-rose-200 dark:border-rose-900/50 shadow-sm relative overflow-hidden">
           <AlertTriangle className="absolute top-[-20px] left-[-20px] text-rose-500/10 w-64 h-64 -rotate-12" />
           <div className="relative z-10">
             <h2 className="text-3xl font-black text-rose-800 dark:text-rose-400 mb-8 flex items-center">
               <ShieldAlert className="w-8 h-8 mr-4" /> Common Mistakes ⚠️
             </h2>
             
             <div className="grid md:grid-cols-2 gap-8">
               
               <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-rose-100 dark:border-rose-800 shadow-sm">
                 <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
                   <span className="text-rose-500">❌</span> Using .html() with user input
                 </h4>
                 <code className="text-xs bg-gray-100 dark:bg-gray-900 p-2 rounded block mb-2 font-mono text-gray-800 dark:text-gray-200">
                   $("#box").html(userInput);
                 </code>
                 <p className="text-sm text-rose-600 dark:text-rose-400 font-bold mb-4">❗ Risk: XSS Attack</p>
                 
                 <div className="border-t border-gray-100 dark:border-gray-700 pt-4 mt-4">
                   <h4 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-2">
                     <span className="text-emerald-500">✅</span> Safer way:
                   </h4>
                   <code className="text-xs bg-gray-100 dark:bg-gray-900 p-2 rounded block font-mono text-emerald-600 dark:text-emerald-400">
                     $("#box").text(userInput);
                   </code>
                 </div>
               </div>

               <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-rose-100 dark:border-rose-800 shadow-sm">
                 <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
                   <span className="text-rose-500">❌</span> Forgetting quotes
                 </h4>
                 <code className="text-xs bg-gray-100 dark:bg-gray-900 p-2 rounded block mb-4 font-mono text-gray-800 dark:text-gray-200">
                   $("#box").html(&lt;h1&gt;Hello&lt;/h1&gt;);
                 </code>
                 
                 <div className="border-t border-gray-100 dark:border-gray-700 pt-4">
                   <h4 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-2">
                     <span className="text-emerald-500">✅</span> Correct:
                   </h4>
                   <code className="text-xs bg-gray-100 dark:bg-gray-900 p-2 rounded block font-mono text-emerald-600 dark:text-emerald-400">
                     $("#box").html("&lt;h1&gt;Hello&lt;/h1&gt;");
                   </code>
                 </div>
               </div>

             </div>
           </div>
         </div>
      </section>

      {/* Footer Branding */}
      <footer className="max-w-6xl mx-auto text-center py-12 opacity-50 border-t border-gray-100 dark:border-gray-800 uppercase tracking-widest text-xs font-black text-gray-400">
        <div className="flex items-center justify-center gap-2 mb-2 italic">
          <FileCode className="w-5 h-5 fill-current" /> KNOWGROW HUB
        </div>
        <p>JavaScript Course Components • jQuery HTML Module</p>
      </footer>

    </div>
  );
};

export default JqueryHtml;