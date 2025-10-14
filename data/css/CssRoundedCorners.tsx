import React, { useState } from 'react';
import {
  BookOpen, Code, CheckCircle, ArrowRight,
  RectangleHorizontal, Circle, Ellipsis, Square
} from 'lucide-react';

// --- Reusable Components (Copied from established pattern) ---

const InteractiveCodeBlock = ({ code, language = 'css', title }) => (
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
                 if (part.match(/^(class|id|style)$/)) {
                  return <span key={j} className="text-cyan-400">{part}</span>;
                }
                 if (part.match(/^('|").*('|")$/)) {
                  return <span key={j} className="text-emerald-400">{part}</span>;
                }
                if (part.match(/^(\.[\w-]+|#[\w-]+|div|p|h1)$/)) {
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
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500/20 to-pink-600/20 flex items-center justify-center mr-4`}>
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

const CssRoundedCorners = () => {
  const [tl, setTl] = useState(24); // Top-left
  const [tr, setTr] = useState(24); // Top-right
  const [br, setBr] = useState(24); // Bottom-right
  const [bl, setBl] = useState(24); // Bottom-left

  const borderRadiusValue = `${tl}px ${tr}px ${br}px ${bl}px`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-pink-50/30 to-slate-50 dark:from-slate-900 dark:via-pink-900/10 dark:to-slate-900">
      <header className="relative overflow-hidden">
        <div className="relative px-6 lg:px-12 py-16 lg:py-24 text-center bg-white dark:bg-slate-800/90 rounded-b-3xl shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-pink-500 to-red-500 shadow-2xl mb-8">
            <RectangleHorizontal className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-red-500 to-orange-500 mb-6 leading-tight">
            CSS Rounded Corners
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Learn how the `border-radius` property can soften sharp corners and create a wide variety of shapes.
          </p>
        </div>
      </header>

      <main className="px-6 lg:px-12 py-12 lg:py-20">
        
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <BookOpen className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 1: The `border-radius` Property
            </h2>
          </div>
          <div className="space-y-12">
            <LessonPropertyCard
              title="Shorthand for All Corners"
              icon={Square}
              color="text-pink-500"
              description="The most common use is a single value, which applies the same radius to all four corners of the element, creating a uniform, softened shape."
            >
              <InteractiveCodeBlock 
                language="css"
                title="CSS Example"
                code={`.box {\n  border-radius: 15px;\n}`}
              />
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">Visual Output:</h4>
                <div className="p-4 bg-slate-100 dark:bg-slate-700/50 rounded-xl">
                    <div className="w-32 h-32 bg-pink-500" style={{ borderRadius: '15px' }}></div>
                </div>
              </div>
            </LessonPropertyCard>

             <LessonPropertyCard
              title="Controlling Individual Corners"
              icon={RectangleHorizontal}
              color="text-indigo-500"
              description="You can provide four values to control each corner individually. The order is top-left, top-right, bottom-right, and bottom-left (clockwise from top-left)."
            >
              <InteractiveCodeBlock 
                language="css"
                title="CSS Example"
                code={`.box {\n  border-radius: 10px 40px 10px 40px;\n}`}
              />
               <div className="mt-4">
                <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">Visual Output:</h4>
                <div className="p-4 bg-slate-100 dark:bg-slate-700/50 rounded-xl">
                    <div className="w-48 h-32 bg-indigo-500" style={{ borderRadius: '10px 40px 10px 40px' }}></div>
                </div>
              </div>
            </LessonPropertyCard>
          </div>
        </section>

        <section className="mb-20 p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border-2 border-slate-200 dark:border-slate-700">
            <div className="flex items-center mb-8">
              <Code className="w-8 h-8 mr-4 text-pink-600" />
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                Section 2: Interactive Sandbox
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
                <div>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                      <div>
                        <label className="font-semibold block mb-1">Top-Left: <span className="font-bold text-pink-500">{tl}px</span></label>
                        <input type="range" min="0" max="100" value={tl} onChange={e => setTl(Number(e.target.value))} className="w-full" />
                      </div>
                       <div>
                        <label className="font-semibold block mb-1">Top-Right: <span className="font-bold text-pink-500">{tr}px</span></label>
                        <input type="range" min="0" max="100" value={tr} onChange={e => setTr(Number(e.target.value))} className="w-full" />
                      </div>
                       <div>
                        <label className="font-semibold block mb-1">Bottom-Right: <span className="font-bold text-pink-500">{br}px</span></label>
                        <input type="range" min="0" max="100" value={br} onChange={e => setBr(Number(e.target.value))} className="w-full" />
                      </div>
                       <div>
                        <label className="font-semibold block mb-1">Bottom-Left: <span className="font-bold text-pink-500">{bl}px</span></label>
                        <input type="range" min="0" max="100" value={bl} onChange={e => setBl(Number(e.target.value))} className="w-full" />
                      </div>
                    </div>
                    <div className="mt-6">
                      <InteractiveCodeBlock title="Live CSS" code={`.shape {\n  border-radius: ${borderRadiusValue};\n}`} />
                    </div>
                </div>
                <div className="p-6 bg-slate-100 dark:bg-slate-900/50 rounded-xl shadow-inner border border-slate-300 dark:border-slate-600 flex items-center justify-center">
                    <div className="w-56 h-56 bg-pink-500 transition-all duration-200" style={{ borderRadius: borderRadiusValue }}></div>
                </div>
            </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center mb-12">
            <Code className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 3: Visual Showcase - Creating Shapes
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
              <LessonPropertyCard title="Creating a Circle" icon={Circle} color="text-green-500" description="To create a perfect circle from a square element, set `border-radius` to `50%`. This will curve all corners inward to meet at the center.">
                <InteractiveCodeBlock title="CSS" code={`.circle {\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n}`} />
                 <div className="mt-4">
                  <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">Visual Output:</h4>
                  <div className="p-4 bg-slate-100 dark:bg-slate-700/50 rounded-xl flex justify-center">
                      <div className="w-[150px] h-[150px] bg-green-500" style={{ borderRadius: '50%' }}></div>
                  </div>
                </div>
              </LessonPropertyCard>
              <LessonPropertyCard title="Creating a Pill Shape" icon={Ellipsis} color="text-blue-500" description="To create a 'pill' or 'stadium' shape from a rectangle, set `border-radius` to a very large value, like `9999px`. This ensures the ends will always be perfectly semicircular, regardless of the element's height.">
                 <InteractiveCodeBlock title="CSS" code={`.pill-button {\n  width: 200px;\n  height: 60px;\n  border-radius: 9999px;\n}`} />
                 <div className="mt-4">
                  <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">Visual Output:</h4>
                  <div className="p-4 bg-slate-100 dark:bg-slate-700/50 rounded-xl flex justify-center items-center h-[182px]">
                      <div className="w-[200px] h-[60px] bg-blue-500" style={{ borderRadius: '9999px' }}></div>
                  </div>
                </div>
              </LessonPropertyCard>
          </div>
        </section>

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-pink-500 to-red-500 p-12 lg:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10">
            <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Lesson Complete: Rounded Corners Mastered!
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              You can now soften user interfaces and create a variety of interesting shapes using a single, powerful CSS property.
            </p>
            <button className="mt-8 px-8 py-4 bg-white text-pink-600 rounded-xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center">
              Next Lesson
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CssRoundedCorners;
