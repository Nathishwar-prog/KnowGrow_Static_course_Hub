import React, { useState } from 'react';
import {
  BookOpen, Code, CheckCircle, ArrowRight,
  Ruler, Scale, Text, Maximize, Smartphone
} from 'lucide-react';

// --- Reusable Components (Copied from established pattern) ---

const InteractiveCodeBlock = ({ code, language = 'html', title }) => (
  <div className="relative group">
    {title && (
      <div className="absolute -top-3 left-4 px-3 py-1 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-xs font-semibold rounded-full">
        {title}
      </div>
    )}
    <div className="mt-2 p-6 rounded-2xl bg-slate-900 shadow-2xl overflow-x-auto border border-slate-700 group-hover:border-violet-500 transition-all duration-300">
      <pre className="text-sm lg-text-base">
        <code className="font-mono leading-relaxed">
          {code.split('\n').map((line, i) => (
            <div key={i} className="hover:bg-slate-800/50 px-2 -mx-2 rounded transition-colors">
              {line.split(/(\s+|[{}():;\[\]>\+\~=\^\|\*\$\/\*#"'])/g).map((part, j) => {
                if (part.includes('/*') || part.includes('*/') || part.includes('<!--') || part.includes('-->')) {
                  return <span key={j} className="text-slate-500 italic font-semibold">{part}</span>;
                }
                if (part.match(/^(<[\/]?[\w-]+)$/)) {
                  return <span key={j} className="text-pink-400 font-bold">{part}</span>;
                }
                 if (part.match(/^(class|href|id|src|alt|for|type|name|placeholder|rows)$/)) {
                  return <span key={j} className="text-cyan-400">{part}</span>;
                }
                 if (part.match(/^('|").*('|")$/)) {
                  return <span key={j} className="text-emerald-400">{part}</span>;
                }
                if (part.match(/^(\.[\w-]+|body|html|div|p|h1)$/)) {
                  return <span key={j} className="text-amber-400 font-semibold">{part}</span>;
                }
                return <span key={j} className="text-slate-300">{part}</span>;
              })}
            </div>
          ))}
        </code>
      </pre>
    </div>
  </div>
);

const LessonPropertyCard = ({ title, icon: Icon, color, description, children }) => (
    <div className="group relative p-8 bg-white dark:bg-slate-800/90 rounded-3xl shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-1 border-2 border-slate-200 dark:border-slate-700 h-full">
      <div className="flex items-center mb-6">
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-600/20 flex items-center justify-center mr-4`}>
          <Icon className={`w-7 h-7 ${color}`} />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h3>
      </div>
      
      <p className="text-base lg:text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
        {description}
      </p>

      {children}
    </div>
  );
// --- End Reusable Components ---

const CssUnits = () => {
    const [rootFontSize, setRootFontSize] = useState(16);
    const [parentFontSize, setParentFontSize] = useState(20);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50/30 to-slate-50 dark:from-slate-900 dark:via-green-900/10 dark:to-slate-900">
      <header className="relative overflow-hidden">
        <div className="relative px-6 lg:px-12 py-16 lg:py-24 text-center bg-white dark:bg-slate-800/90 rounded-b-3xl shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-2xl mb-8">
            <Ruler className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 mb-6 leading-tight">
            CSS Units
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Understanding the difference between absolute and relative units is key to building scalable and responsive web designs.
          </p>
        </div>
      </header>

      <main className="px-6 lg:px-12 py-12 lg:py-20">
        
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <BookOpen className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 1: Absolute Units
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <LessonPropertyCard
              title="Pixels (px)"
              icon={Ruler}
              color="text-red-500"
              description="Pixels are a fixed-size unit. 1px is equal to one dot on the screen. While easy to understand, they don't scale with user preferences (like browser font size settings), making them less ideal for accessibility and responsive typography."
            >
              <InteractiveCodeBlock 
                language="css"
                title="CSS Example"
                code={`p {\n  font-size: 16px; /* Always 16 pixels */\n  width: 300px; /* Always 300 pixels wide */\n}`}
              />
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">Visual Output:</h4>
                <div className="p-4 bg-slate-100 dark:bg-slate-700/50 rounded-xl shadow-inner border border-slate-300 dark:border-slate-600">
                  <div style={{ width: '300px', maxWidth: '100%', border: '2px dashed #94a3b8' }}>
                    <p style={{ fontSize: '16px', margin: 0, padding: '10px', color: '#334155' }} className="dark:text-slate-300">This text is 16px. The container is 300px wide.</p>
                  </div>
                </div>
              </div>
            </LessonPropertyCard>
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center mb-12">
            <Scale className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 2: Relative Units
            </h2>
          </div>
          <div className="space-y-12">
            <LessonPropertyCard
              title="em"
              icon={Text}
              color="text-blue-500"
              description="The `em` unit is relative to the font-size of its direct parent element. If a parent has `font-size: 20px`, then `1.5em` on a child element will compute to `30px` (20 * 1.5). This can lead to complex nested calculations."
            >
                <InteractiveCodeBlock language="css" title="CSS Example" code={`.parent {\n  font-size: 20px;\n}\n.child {\n  font-size: 1.5em; /* Computes to 30px */\n}`} />
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">Visual Output:</h4>
                  <div className="p-4 bg-slate-100 dark:bg-slate-700/50 rounded-xl shadow-inner border border-slate-300 dark:border-slate-600">
                      <div style={{ fontSize: '20px' }} className="p-2 border border-dashed border-slate-400 rounded text-slate-700 dark:text-slate-300">
                          <p className="text-xs mb-1">Parent (font-size: 20px)</p>
                          <div style={{ fontSize: '1.5em' }} className="text-slate-900 dark:text-slate-100">Child (font-size: 1.5em). Computed: 30px.</div>
                      </div>
                  </div>
              </div>
            </LessonPropertyCard>
            
            <LessonPropertyCard
              title="rem (Root em)"
              icon={Text}
              color="text-green-500"
              description="The `rem` unit is relative to the font-size of the root element (the `<html>` tag). This avoids nesting issues and provides a consistent reference point for sizing across the entire application. It's the modern standard for scalable layouts."
            >
                <InteractiveCodeBlock language="css" title="CSS Example" code={`html {\n  font-size: 16px; /* Browser default */\n}\n.component {\n  padding: 2rem; /* Computes to 32px */\n}`} />
                 <div className="mt-6">
                    <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">Visual Output:</h4>
                    <div className="p-4 bg-slate-100 dark:bg-slate-700/50 rounded-xl shadow-inner border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-200">
                        {/* Assuming root font-size is 16px for this demo */}
                        <div style={{ padding: '2rem' }} className="bg-green-200 dark:bg-green-800/50 border border-green-500 rounded">
                            This div has a padding of 2rem (32px).
                        </div>
                    </div>
                </div>
            </LessonPropertyCard>

            <LessonPropertyCard
              title="Percentage (%)"
              icon={Maximize}
              color="text-purple-500"
              description="The `%` unit is relative to the size of the parent element for a given property. A `width: 50%` means the element will be half the width of its parent container. It's essential for fluid layouts."
            >
                <InteractiveCodeBlock language="css" title="CSS Example" code={`.parent {\n  width: 800px;\n}\n.child {\n  width: 50%; /* Computes to 400px */\n}`} />
                <div className="mt-6">
                    <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">Visual Output:</h4>
                    <div className="p-4 bg-slate-100 dark:bg-slate-700/50 rounded-xl shadow-inner border border-slate-300 dark:border-slate-600">
                        <div style={{ width: '100%' }} className="bg-purple-100 dark:bg-purple-900/30 p-2 border border-dashed border-purple-300 dark:border-purple-700 rounded text-slate-700 dark:text-slate-300">
                            <p className="text-xs mb-1">Parent (width: 100%)</p>
                            <div style={{ width: '50%' }} className="bg-purple-300 dark:bg-purple-700/50 p-2 rounded text-slate-900 dark:text-slate-100">
                                Child (width: 50%)
                            </div>
                        </div>
                    </div>
                </div>
            </LessonPropertyCard>

            <LessonPropertyCard
              title="Viewport Units (vw and vh)"
              icon={Smartphone}
              color="text-orange-500"
              description="Viewport units are relative to the browser window's dimensions. `1vw` is 1% of the viewport's width, and `1vh` is 1% of its height. They are perfect for creating full-screen sections or typography that scales with the window size."
            >
                <InteractiveCodeBlock language="css" title="CSS Example" code={`.hero-section {\n  height: 100vh; /* Fills the entire screen height */\n}\nh1 {\n  font-size: 5vw; /* Text scales with window width */\n}`} />
                <div className="mt-6">
                    <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">Visual Output:</h4>
                    <div className="p-4 bg-slate-100 dark:bg-slate-700/50 rounded-xl shadow-inner border border-slate-300 dark:border-slate-600">
                        <div style={{ height: '10vh', width: '100%' }} className="bg-orange-200 dark:bg-orange-800/50 border border-orange-500 rounded mb-4 p-2 flex items-center justify-center text-orange-800 dark:text-orange-200 font-semibold">
                            This box has a height of 10vh.
                        </div>
                        <p style={{ fontSize: '3vw' }} className="text-orange-700 dark:text-orange-300 font-bold leading-none">font-size: 3vw.</p>
                        <p className="text-xs text-slate-500 mt-2">(Resize your browser window to see the effect)</p>
                    </div>
                </div>
            </LessonPropertyCard>
          </div>
        </section>
        
        <section className="mb-20 p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border-2 border-slate-200 dark:border-slate-700">
            <div className="flex items-center mb-8">
              <Code className="w-8 h-8 mr-4 text-pink-600" />
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                Section 3: Interactive Sandbox (rem vs. em)
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
                <div>
                    <div className="mb-6">
                        <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block">Root Font Size (for `rem`): <span className="font-bold text-green-600">{rootFontSize}px</span></label>
                        <input type="range" min="10" max="24" value={rootFontSize} onChange={(e) => setRootFontSize(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-slate-700" />
                    </div>
                    <div className="mb-6">
                        <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block">Parent Font Size (for `em`): <span className="font-bold text-blue-600">{parentFontSize}px</span></label>
                        <input type="range" min="10" max="30" value={parentFontSize} onChange={(e) => setParentFontSize(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-slate-700" />
                    </div>
                     <InteractiveCodeBlock title="Live CSS" code={`/* Root Font Size */\nhtml {\n  font-size: ${rootFontSize}px;\n}\n\n/* Parent Font Size */\n.parent-div {\n  font-size: ${parentFontSize}px;\n}\n\n/* This box uses rem */\n.rem-box {\n  width: 10rem;\n  font-size: 1.5rem;\n}\n\n/* This box uses em */\n.em-box {\n  width: 10em;\n  font-size: 1.5em;\n}`} />
                </div>
                <div className="p-4 bg-slate-100 dark:bg-slate-900/50 rounded-xl shadow-inner border border-slate-300 dark:border-slate-600 space-y-4" style={{ fontSize: `${rootFontSize}px` }}>
                    <p className="text-center text-sm font-semibold text-slate-600 dark:text-slate-400">Notice how changing the sliders affects each box differently.</p>
                    {/* Rem Box */}
                    <div className="p-4 bg-green-200 dark:bg-green-800/50 border-2 border-green-500 rounded-lg" style={{width: '10rem', fontSize: '1.5rem'}}>
                        <h4 className="font-bold text-green-800 dark:text-green-200" style={{fontSize: '1rem', marginBottom: '0.5rem'}}>rem box (1.5rem font)</h4>
                        <p className="text-sm text-green-700 dark:text-green-300" style={{fontSize: '0.875rem'}}>My size is relative to the **root** font size ({rootFontSize}px).</p>
                        <p className="text-sm font-bold text-green-800 dark:text-green-200" style={{fontSize: '0.875rem'}}>Computed Font Size: {(1.5 * rootFontSize).toFixed(1)}px</p>
                    </div>

                    {/* Em Box */}
                    <div style={{ fontSize: `${parentFontSize}px`}}>
                         <div className="p-4 bg-blue-200 dark:bg-blue-800/50 border-2 border-blue-500 rounded-lg" style={{width: '10em', fontSize: '1.5em'}}>
                            <h4 className="font-bold text-blue-800 dark:text-blue-200" style={{fontSize: '1rem', marginBottom: '0.5rem'}}>em box (1.5em font)</h4>
                            <p className="text-sm text-blue-700 dark:text-blue-300" style={{fontSize: '0.875rem'}}>My size is relative to my **parent** font size ({parentFontSize}px).</p>
                             <p className="text-sm font-bold text-blue-800 dark:text-blue-200" style={{fontSize: '0.875rem'}}>Computed Font Size: {(1.5 * parentFontSize).toFixed(1)}px</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-green-500 to-emerald-600 p-12 lg:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10">
            <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Lesson Complete: Units Mastered!
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              You now understand how to choose the right unit for the job, with a strong preference for `rem` to build flexible and accessible websites.
            </p>
            <button className="mt-8 px-8 py-4 bg-white text-green-600 rounded-xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center">
              Next Lesson
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CssUnits;

