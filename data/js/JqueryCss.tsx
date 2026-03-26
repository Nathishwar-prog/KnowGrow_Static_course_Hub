import React, { useState } from 'react';
import {
  Palette, Code2, PaintBucket, Type, Eye,
  Layout, Check, Copy, Activity, MousePointer2,
  BoxSelect, Layers, Zap, Hexagon
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
            <div className="w-2.5 h-2.5 rounded-full bg-violet-400/80"></div>
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

const JqueryCss: React.FC = () => {
  // Sandbox state
  const [boxState, setBoxState] = useState({
    color: '#1f2937', // normal text color default
    backgroundColor: 'transparent',
    fontSize: '16px',
    padding: '0px',
    borderRadius: '0px',
    isStyled: false,
    isHighlighted: false,
    isHovered: false,
    isAnimated: false
  });

  const resetBox = () => {
    setBoxState({
      color: '#1f2937',
      backgroundColor: 'transparent',
      fontSize: '16px',
      padding: '0px',
      borderRadius: '0px',
      isStyled: false,
      isHighlighted: false,
      isHovered: false,
      isAnimated: false
    });
  };

  const setBoxStyle = () => {
    setBoxState(prev => ({
      ...prev,
      color: 'white',
      backgroundColor: 'green',
      fontSize: '24px',
      padding: '15px',
      borderRadius: '10px',
      isStyled: true
    }));
  };

  const toggleHighlight = () => {
    setBoxState(prev => ({
      ...prev,
      isHighlighted: !prev.isHighlighted
    }));
  };

  const animateBox = () => {
    setBoxState(prev => ({
      ...prev,
      isAnimated: true
    }));
    setTimeout(() => {
      setBoxState(prev => ({
        ...prev,
        isAnimated: false
      }));
    }, 1500); // revert animation state after it completes
  };

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-900/10 min-h-screen font-sans">
      
      {/* ── Hero Header ── */}
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-violet-400/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl mb-6 shadow-xl transform hover:rotate-3 transition-transform cursor-pointer">
          <Palette className="w-8 h-8 text-white fill-current/20" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          jQuery CSS
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          Control the design and style of your webpage using JavaScript in an easy, cleaner, and cross-browser compatible way.
        </p>
      </header>

      {/* ── Section 1: What is jQuery CSS? ── */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-center">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <Layout className="w-6 h-6 mr-3 text-blue-500" /> What is jQuery CSS?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            jQuery CSS refers to methods in jQuery that allow you to Get CSS property values, Set CSS property values, Dynamically modify styles, and Create interactive UI effects.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-2xl border-l-4 border-blue-500">
             <h4 className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-2">In Simple Words</h4>
             <p className="text-sm font-bold text-gray-800 dark:text-gray-200 leading-snug">
               jQuery CSS lets you control the design (style) of your webpage using JavaScript in an easy way.
             </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { tag: "Get", desc: "Read current CSS values.", icon: <Eye size={20} /> },
            { tag: "Set", desc: "Update existing styles.", icon: <PaintBucket size={20} /> },
            { tag: "Dynamic", desc: "Modify styles on the fly.", icon: <Zap size={20} /> },
            { tag: "Interactive", desc: "Create slick UI effects.", icon: <MousePointer2 size={20} /> },
          ].map((item, i) => (
             <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-[2rem] border border-gray-100 dark:border-gray-700 flex flex-col items-center justify-center text-center shadow-sm">
                <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/40 rounded-xl flex items-center justify-center text-blue-500 mb-3">
                  {item.icon}
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white text-sm">{item.tag}</h4>
                <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
             </div>
          ))}
        </div>
      </section>

      {/* ── Section 2: Why Use jQuery for CSS? ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-8 flex items-center justify-center">
          <Activity className="text-indigo-500 w-8 h-8 mr-4" /> Why Use jQuery for CSS?
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <div className="bg-gray-50 dark:bg-gray-900/50 p-8 rounded-[2rem] border border-gray-200 dark:border-gray-700">
             <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
               Vanilla JS 
             </h3>
             <CodeBlock code={`document.getElementById("box").style.color = "red";`} />
          </div>
          <div className="bg-indigo-50 dark:bg-indigo-900/20 p-8 rounded-[2rem] border border-indigo-200 dark:border-indigo-800 shadow-md">
             <h3 className="text-xl font-bold text-indigo-800 dark:text-indigo-300 mb-4 flex items-center gap-2">
               With jQuery 
             </h3>
             <CodeBlock code={'$("#box").css("color", "red");'} />
             <div className="mt-6 flex flex-wrap gap-3">
               {["Cleaner", "Shorter", "Easier to read", "Cross-browser compatible"].map((benefit, i) => (
                 <span key={i} className="bg-white dark:bg-gray-800 px-3 py-1.5 rounded-lg text-xs font-bold text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-700/50 flex items-center gap-1 shadow-sm">
                   <Check size={12} /> {benefit}
                 </span>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* ── Section 3-6: jQuery .css() Methods ── */}
      <section className="max-w-6xl mx-auto mb-16">
         <div className="bg-white dark:bg-gray-800 rounded-[2.5rem] p-8 lg:p-12 shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-8 flex items-center">
              <Code2 className="text-blue-500 w-8 h-8 mr-4" /> Core Concept: .css() Method
            </h2>

            <div className="bg-gray-900 p-6 rounded-2xl mb-10 border-l-4 border-blue-500 flex flex-col sm:flex-row items-center justify-between">
              <div>
                <h4 className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1">Syntax</h4>
                <code className="text-lg text-white font-mono">
                  $(<span className="text-blue-400">selector</span>).css(<span className="text-yellow-300">property</span>, <span className="text-green-400">value</span>);
                </code>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-blue-500" /> Get Value
                </h3>
                <CodeBlock 
                  title="JS"
                  code={`let color = $("#box").css("color");\nconsole.log(color);\n// Output: rgb(255, 0, 0)`}
                />
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200 flex items-center gap-2">
                  <PaintBucket className="w-5 h-5 text-indigo-500" /> Set Value
                </h3>
                <CodeBlock 
                  title="JS"
                  code={`$("#box").css("color", "blue");`}
                />
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-violet-500" /> Set Multiple
                </h3>
                <CodeBlock 
                  title="JS"
                  code={`$("#box").css({\n  "color": "white",\n  "background-color": "black",\n  "padding": "20px"\n});`}
                />
              </div>
            </div>
         </div>
      </section>

      {/* ── Section 8: Important CSS Methods ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-8 flex items-center">
          <BoxSelect className="text-violet-500 w-8 h-8 mr-4" /> Important CSS Methods
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { method: ".addClass()", code: '$("#box").addClass("highlight");', desc: "Adds one or more class names to the selected elements." },
            { method: ".removeClass()", code: '$("#box").removeClass("highlight");', desc: "Removes one or more class names from the selected elements." },
            { method: ".toggleClass()", code: '$("#box").toggleClass("highlight");', desc: "Toggles between adding and removing a class name." }
          ].map((item, i) => (
             <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow group">
               <h4 className="text-lg font-black text-violet-600 dark:text-violet-400 mb-2 font-mono">{item.method}</h4>
               <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{item.desc}</p>
               <div className="bg-gray-900 rounded-lg p-1">
                 <code className="text-xs text-violet-300 font-mono block p-2">{item.code}</code>
               </div>
             </div>
          ))}
        </div>
      </section>

      {/* ── Section 7 & 9 & 10: Complete Interactive Sandbox ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gray-900 rounded-[3rem] p-8 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5 text-blue-500 pointer-events-none">
            <Hexagon size={240} className="animate-[spin_40s_linear_infinite]" />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-black text-white mb-4 flex items-center">
              <Zap className="text-yellow-400 w-8 h-8 mr-4" /> Interactive Sandbox
            </h2>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-10 border-b border-white/10 pb-4">
              Try out Complete Style change, Toggle Class, Hover Effects, and Animations dynamically!
            </p>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              
              {/* Output Visualization */}
              <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 backdrop-blur-sm min-h-[350px] flex flex-col">
                 <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-black text-white/50 uppercase tracking-widest">Live Output</span>
                    <button 
                      onClick={resetBox}
                      className="text-xs text-gray-400 hover:text-white transition-colors"
                    >
                      Reset All
                    </button>
                 </div>
                 
                 <div className="flex-grow flex items-center justify-center relative overflow-hidden rounded-2xl bg-white/5 border border-white/5 p-4">
                    <div 
                      id="box"
                      className={`
                        transition-all duration-300 flex items-center justify-center
                        ${boxState.isHighlighted ? 'bg-yellow-300 text-gray-900 font-bold w-auto h-auto' : ''}
                        ${boxState.isHovered ? 'bg-orange-500 text-white w-auto h-auto' : ''}
                        ${boxState.isAnimated ? '!w-[300px] !h-[200px] opacity-50' : 'w-auto h-auto'}
                      `}
                      style={{
                        color: boxState.isHovered && !boxState.isHighlighted && !boxState.isStyled ? 'white' : (boxState.isHighlighted ? 'black' : boxState.color),
                        backgroundColor: boxState.isHovered ? 'orange' : (boxState.isHighlighted ? 'yellow' : boxState.backgroundColor),
                        fontSize: boxState.fontSize,
                        padding: boxState.padding || '10px 20px',
                        borderRadius: boxState.borderRadius,
                        transition: 'width 1s, height 1s, opacity 1s, background-color 0.3s'
                      }}
                      onMouseEnter={() => setBoxState(prev => ({...prev, isHovered: true}))}
                      onMouseLeave={() => setBoxState(prev => ({...prev, isHovered: false}))}
                    >
                       {boxState.isStyled ? 'Styled Box' : 'Hello World'}
                    </div>
                 </div>

                 <div className="flex flex-wrap gap-2 mt-6 justify-center">
                   <button id="btn" onClick={setBoxStyle} className="px-3 py-2 bg-green-600 hover:bg-green-500 rounded-xl text-white text-xs font-bold transition-colors shadow-sm">
                     Change Style
                   </button>
                   <button onClick={toggleHighlight} className="px-3 py-2 bg-yellow-500 hover:bg-yellow-400 rounded-xl text-yellow-900 text-xs font-bold transition-colors shadow-sm">
                     Toggle Class
                   </button>
                   <button onClick={animateBox} className="px-3 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-white text-xs font-bold transition-colors shadow-sm">
                     Animate
                   </button>
                 </div>
                 <div className="text-center mt-3 text-white/40 text-[10px]">
                   Hover over the box to test <span className="text-orange-400 font-bold">.hover()</span> effect!
                 </div>
              </div>

              {/* Code Snippets corresponding to actions */}
              <div className="space-y-4">
                 <CodeBlock 
                   title=".css() Complete Example"
                   code={`$("#btn").click(function() {\n  $("#box").css({\n    "color": "white",\n    "background-color": "green",\n    "font-size": "24px",\n    "padding": "15px",\n    "border-radius": "10px"\n  });\n});`}
                 />
                 <CodeBlock 
                   title=".toggleClass() Example"
                   code={`.highlight {\n  background-color: yellow;\n  font-weight: bold;\n}\n\n$("#toggleBtn").click(function() {\n  $("#box").toggleClass("highlight");\n});`}
                 />
                 <CodeBlock 
                   title=".hover() Real-World Use Case"
                   code={`$("#box").hover(\n  function() { $(this).css("background-color", "orange"); },\n  function() { $(this).css("background-color", "white"); }\n);`}
                 />
                 <CodeBlock 
                   title=".animate() Bonus 🔥"
                   code={`$("#animateBtn").click(function() {\n  $("#box").animate({\n    width: "300px",\n    height: "200px",\n    opacity: 0.5\n  }, 1000);\n});`}
                 />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Footer Branding */}
      <footer className="max-w-6xl mx-auto text-center py-12 opacity-50 border-t border-gray-100 dark:border-gray-800 uppercase tracking-widest text-xs font-black text-gray-400">
        <div className="flex items-center justify-center gap-2 mb-2 italic">
          <Hexagon className="w-5 h-5 fill-current" /> KNOWGROW HUB
        </div>
        <p>JavaScript Course Components • jQuery CSS Module</p>
      </footer>

    </div>
  );
};

export default JqueryCss;