import React, { useState } from 'react';
import {
  BookOpen, Code, CheckCircle, ArrowRight,
  Sparkles, Baseline, Pilcrow, CaseSensitive, TestTube
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
                if (part.match(/^(\.[\w-]+|#[\w-]+|div|p|h1|body|span|@keyframes)$/)) {
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
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500/20 to-rose-600/20 flex items-center justify-center mr-4`}>
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

const CssTextEffects = () => {
  const [strokeWidth, setStrokeWidth] = useState(1);
  const [strokeColor, setStrokeColor] = useState('#1e293b');

  const strokeStyle = {
      WebkitTextStroke: `${strokeWidth}px ${strokeColor}`,
      textStroke: `${strokeWidth}px ${strokeColor}`,
      WebkitTextFillColor: 'transparent',
      textFillColor: 'transparent',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-rose-50/30 to-slate-50 dark:from-slate-900 dark:via-rose-900/10 dark:to-slate-900">
      <header className="relative overflow-hidden">
        <div className="relative px-6 lg:px-12 py-16 lg:py-24 text-center bg-white dark:bg-slate-800/90 rounded-b-3xl shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-rose-500 to-red-600 shadow-2xl mb-8">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-red-500 to-orange-500 mb-6 leading-tight">
            CSS Text Effects
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Explore advanced techniques to create visually stunning and unique typography with pure CSS.
          </p>
        </div>
      </header>

      <main className="px-6 lg:px-12 py-12 lg:py-20">
        
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <BookOpen className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 1: Core Text Effects
            </h2>
          </div>
          <div className="space-y-12">
            <LessonPropertyCard
              title="Text Truncation"
              icon={Pilcrow}
              color="text-rose-500"
              description="The `text-overflow: ellipsis;` property is a clean way to handle text that overflows its container. It truncates the text and adds an ellipsis (...) to indicate that there is more content."
            >
              <InteractiveCodeBlock language="css" title="CSS" code={`.truncate {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 250px;\n}`}/>
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">Visual Output:</h4>
                <div className="p-4 bg-slate-100 dark:bg-slate-700/50 rounded-lg">
                  <p className="p-2 border border-dashed" style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '250px'}}>This is a very long line of text that will be truncated.</p>
                </div>
              </div>
            </LessonPropertyCard>

            <LessonPropertyCard
              title="Vertical Text"
              icon={Baseline}
              color="text-indigo-500"
              description="The `writing-mode` property changes the orientation of text from horizontal to vertical. This is commonly used in designs that need to mimic traditional East Asian typography or for creative layouts."
            >
              <InteractiveCodeBlock language="css" title="CSS" code={`.vertical-text {\n  writing-mode: vertical-rl;\n  text-orientation: mixed;\n}`}/>
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">Visual Output:</h4>
                <div className="p-4 bg-slate-100 dark:bg-slate-700/50 rounded-lg h-40 flex justify-center">
                  <p className="font-bold text-2xl" style={{writingMode: 'vertical-rl', textOrientation: 'mixed'}}>Vertical Text</p>
                </div>
              </div>
            </LessonPropertyCard>

            <LessonPropertyCard
              title="Text Casing"
              icon={CaseSensitive}
              color="text-amber-500"
              description="The `text-transform` property allows you to change the case of text without altering the source HTML. You can force text to be `uppercase`, `lowercase`, or `capitalize` the first letter of each word."
            >
              <InteractiveCodeBlock language="css" title="CSS" code={`.heading {\n  text-transform: uppercase;\n}`}/>
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">Visual Output:</h4>
                <div className="p-4 bg-slate-100 dark:bg-slate-700/50 rounded-lg">
                  <p className="font-bold" style={{textTransform: 'uppercase'}}>This text is now uppercase.</p>
                  <p style={{textTransform: 'capitalize'}}>this text is capitalized.</p>
                </div>
              </div>
            </LessonPropertyCard>
          </div>
        </section>

        <section className="mb-20 p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border-2 border-slate-200 dark:border-slate-700">
            <div className="flex items-center mb-8">
              <TestTube className="w-8 h-8 mr-4 text-pink-600" />
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                Section 2: Interactive Sandbox - Stroked Text
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-4">
                    <div>
                        <label className="font-semibold block mb-1">Stroke Width: <span className="font-bold text-rose-500">{strokeWidth}px</span></label>
                        <input type="range" min="0" max="5" step="0.5" value={strokeWidth} onChange={e => setStrokeWidth(Number(e.target.value))} className="w-full" />
                    </div>
                    <div>
                        <label className="font-semibold block mb-1">Stroke Color:</label>
                        <input type="color" value={strokeColor} onChange={e => setStrokeColor(e.target.value)} className="w-full h-12 p-1 border rounded" />
                    </div>
                    <InteractiveCodeBlock title="Live CSS" code={`.stroked-text {\n  -webkit-text-stroke: ${strokeWidth}px ${strokeColor};\n  -webkit-text-fill-color: transparent;\n}`}/>
                </div>
                <div className="p-6 bg-slate-100 dark:bg-slate-900/50 rounded-xl shadow-inner border border-slate-300 dark:border-slate-600 flex items-center justify-center">
                    <p className="text-7xl font-black text-center" style={strokeStyle}>STROKE</p>
                </div>
            </div>
        </section>

        <section>
          <div className="flex items-center mb-12">
            <Sparkles className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 3: Visual Showcase - Creative Effects
            </h2>
          </div>
          <div className="space-y-12">
            <LessonPropertyCard
                title="3D Text"
                icon={Baseline}
                color="text-sky-500"
                description="Create a convincing 3D effect by layering multiple `text-shadow` declarations. Each shadow is offset by 1px from the last, with progressively darker colors, simulating depth."
            >
                <InteractiveCodeBlock language="css" title="CSS" code={`.three-d-text {\n  text-shadow:\n    1px 1px 0 #ccc,\n    2px 2px 0 #ccc,\n    3px 3px 0 #ccc,\n    4px 4px 0 #ccc,\n    5px 5px 0 #666;\n}`}/>
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">Visual Output:</h4>
                  <div className="p-8 bg-slate-200 dark:bg-slate-800/50 rounded-lg flex justify-center">
                    <p className="text-7xl font-black text-white" style={{textShadow: '1px 1px 0 #bbb, 2px 2px 0 #bbb, 3px 3px 0 #bbb, 4px 4px 0 #bbb, 5px 5px 0 #555'}}>3D</p>
                  </div>
                </div>
            </LessonPropertyCard>
            <LessonPropertyCard
                title="Animated Gradient Text"
                icon={Sparkles}
                color="text-fuchsia-500"
                description="Combine the gradient text effect with a CSS animation. By making the gradient background much larger than the text and animating its `background-position`, you can create a shimmering, dynamic effect."
            >
                <InteractiveCodeBlock language="css" title="CSS" code={`@keyframes shimmer {\n  0% { background-position: -200% center; }\n  100% { background-position: 200% center; }\n}\n\n.animated-gradient {\n  background-size: 200% auto;\n  animation: shimmer 3s linear infinite;\n  /* other gradient text styles... */\n}`}/>
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">Visual Output:</h4>
                  <div className="p-8 bg-slate-900 rounded-lg flex justify-center">
                     <p className="text-5xl font-black" style={{
                       backgroundImage: 'linear-gradient(90deg, #ec4899, #8b5cf6, #ec4899)',
                       color: 'transparent',
                       backgroundClip: 'text',
                       WebkitBackgroundClip: 'text',
                       backgroundSize: '200% auto',
                       animation: 'shimmer 3s linear infinite'
                     }}>ANIMATED</p>
                     <style>{`@keyframes shimmer {0%{background-position:-200% center} 100%{background-position:200% center}}`}</style>
                  </div>
                </div>
            </LessonPropertyCard>
          </div>
        </section>

        <div className="mt-20 relative overflow-hidden rounded-3xl bg-gradient-to-r from-rose-500 to-red-600 p-12 lg:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10">
            <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Lesson Complete: Text Effects Mastered!
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              You now have a range of powerful techniques to make your typography stand out, from practical utilities to stunning visual effects.
            </p>
            <button className="mt-8 px-8 py-4 bg-white text-rose-600 rounded-xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center">
              Next Lesson
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CssTextEffects;
