import React, { useState } from 'react';
import {
  BookOpen, Code, CheckCircle, ArrowRight,
  Layers, Sparkles, Text, TestTube
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
                if (part.match(/^(\.[\w-]+|#[\w-]+|div|p|h1|body|span)$/)) {
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
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 flex items-center justify-center mr-4`}>
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

const CssShadows = () => {
  const [offsetX, setOffsetX] = useState(10);
  const [offsetY, setOffsetY] = useState(10);
  const [blurRadius, setBlurRadius] = useState(15);
  const [spreadRadius, setSpreadRadius] = useState(0);
  const [shadowColor, setShadowColor] = useState('rgba(0, 0, 0, 0.25)');
  const [isInset, setIsInset] = useState(false);

  const boxShadowValue = `${isInset ? 'inset ' : ''}${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px ${shadowColor}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-slate-50 dark:from-slate-900 dark:via-indigo-900/10 dark:to-slate-900">
      <header className="relative overflow-hidden">
        <div className="relative px-6 lg:px-12 py-16 lg:py-24 text-center bg-white dark:bg-slate-800/90 rounded-b-3xl shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-indigo-500 to-blue-600 shadow-2xl mb-8">
            <Layers className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-500 to-sky-500 mb-6 leading-tight">
            CSS Shadows
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Add depth, emphasis, and a sense of realism to your elements with `box-shadow` and `text-shadow`.
          </p>
        </div>
      </header>

      <main className="px-6 lg:px-12 py-12 lg:py-20">
        
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <BookOpen className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 1: The Core Shadow Properties
            </h2>
          </div>
          <div className="space-y-12">
            <LessonPropertyCard
              title="box-shadow"
              icon={Layers}
              color="text-indigo-500"
              description="Applies a shadow to an element's entire box frame. The syntax is `offset-x | offset-y | blur-radius | spread-radius | color`. You can also add the `inset` keyword to create an inner shadow."
            >
              <InteractiveCodeBlock language="css" title="CSS Example" code={`.card {\n  box-shadow: 10px 10px 15px 0px rgba(0,0,0,0.25);\n}`} />
            </LessonPropertyCard>

            <LessonPropertyCard
              title="text-shadow"
              icon={Text}
              color="text-sky-500"
              description="Applies a shadow directly to the text content of an element. The syntax is simpler: `offset-x | offset-y | blur-radius | color`. There is no spread radius for text shadows."
            >
              <InteractiveCodeBlock language="css" title="CSS Example" code={`.title {\n  text-shadow: 2px 2px 5px rgba(0,0,0,0.5);\n}`} />
            </LessonPropertyCard>
          </div>
        </section>

        <section className="mb-20 p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border-2 border-slate-200 dark:border-slate-700">
            <div className="flex items-center mb-8">
              <TestTube className="w-8 h-8 mr-4 text-pink-600" />
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                Section 2: Interactive `box-shadow` Sandbox
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-4">
                    <div>
                        <label className="font-semibold block mb-1">Offset X: <span className="font-bold text-indigo-500">{offsetX}px</span></label>
                        <input type="range" min="-50" max="50" value={offsetX} onChange={e => setOffsetX(Number(e.target.value))} className="w-full" />
                    </div>
                    <div>
                        <label className="font-semibold block mb-1">Offset Y: <span className="font-bold text-indigo-500">{offsetY}px</span></label>
                        <input type="range" min="-50" max="50" value={offsetY} onChange={e => setOffsetY(Number(e.target.value))} className="w-full" />
                    </div>
                    <div>
                        <label className="font-semibold block mb-1">Blur Radius: <span className="font-bold text-indigo-500">{blurRadius}px</span></label>
                        <input type="range" min="0" max="100" value={blurRadius} onChange={e => setBlurRadius(Number(e.target.value))} className="w-full" />
                    </div>
                    <div>
                        <label className="font-semibold block mb-1">Spread Radius: <span className="font-bold text-indigo-500">{spreadRadius}px</span></label>
                        <input type="range" min="-50" max="50" value={spreadRadius} onChange={e => setSpreadRadius(Number(e.target.value))} className="w-full" />
                    </div>
                    <div className="flex items-center justify-between">
                         <label className="font-semibold">Color:</label>
                         <input type="color" value={shadowColor} onChange={e => setShadowColor(e.target.value)} className="w-24 h-10 p-1 border rounded" />
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" id="inset-toggle" checked={isInset} onChange={() => setIsInset(!isInset)} className="w-5 h-5 mr-2" />
                        <label htmlFor="inset-toggle" className="font-semibold">Use `inset` shadow</label>
                    </div>
                    <InteractiveCodeBlock title="Live CSS" code={`.box {\n  box-shadow: ${boxShadowValue};\n}`} />
                </div>
                <div className="p-6 bg-slate-100 dark:bg-slate-900/50 rounded-xl shadow-inner border border-slate-300 dark:border-slate-600 flex items-center justify-center">
                    <div className="w-48 h-48 bg-white dark:bg-slate-700 rounded-2xl transition-all duration-200" style={{ boxShadow: boxShadowValue }}></div>
                </div>
            </div>
        </section>

        <section>
          <div className="flex items-center mb-12">
            <Sparkles className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 3: Visual Showcase - Advanced Techniques
            </h2>
          </div>
          <div className="space-y-12">
             <LessonPropertyCard
                title="Layered Shadows for Depth"
                icon={Layers}
                color="text-green-500"
                description="You can apply multiple comma-separated shadows to a single element. By using slightly different offsets and colors, you can create a realistic sense of depth."
            >
                <InteractiveCodeBlock language="css" title="CSS Example" code={`.deep-box {\n  box-shadow:\n    0px 2px 2px rgba(0,0,0,0.1),\n    0px 4px 4px rgba(0,0,0,0.1),\n    0px 8px 8px rgba(0,0,0,0.1);\n}`}/>
                <div className="mt-4">
                    <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">Visual Output:</h4>
                    <div className="p-4 bg-slate-100 dark:bg-slate-700/50 rounded-lg flex justify-center">
                        <div className="w-32 h-32 bg-white rounded-lg" style={{ boxShadow: '0px 2px 2px rgba(0,0,0,0.1), 0px 4px 4px rgba(0,0,0,0.1), 0px 8px 8px rgba(0,0,0,0.1)' }}></div>
                    </div>
                </div>
            </LessonPropertyCard>
            <LessonPropertyCard
                title="Glowing Text Effect"
                icon={Text}
                color="text-rose-500"
                description="By applying multiple text shadows with the same offsets but different blur radii and colors, you can create a beautiful neon glow effect."
            >
                <InteractiveCodeBlock language="css" title="CSS Example" code={`.glow {\n  text-shadow:\n    0 0 5px #fff,\n    0 0 10px #fff,\n    0 0 20px #ff00de,\n    0 0 30px #ff00de;\n}`}/>
                <div className="mt-4">
                    <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">Visual Output:</h4>
                    <div className="p-8 bg-slate-900 rounded-lg flex justify-center">
                        <span className="text-5xl font-black text-white" style={{ textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ff00de, 0 0 30px #ff00de' }}>Glow</span>
                    </div>
                </div>
            </LessonPropertyCard>
          </div>
        </section>

        <div className="mt-20 relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-500 to-blue-600 p-12 lg:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10">
            <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Lesson Complete: Shadows Mastered!
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              You now know how to lift elements off the page and add stylistic flair to your typography, creating modern and visually engaging designs.
            </p>
            <button className="mt-8 px-8 py-4 bg-white text-indigo-600 rounded-xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center">
              Next Lesson
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CssShadows;
