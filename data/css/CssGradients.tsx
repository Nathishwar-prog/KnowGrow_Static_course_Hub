import React, { useState } from 'react';
import {
  BookOpen, Code, CheckCircle, ArrowRight,
  Paintbrush, Waves, Circle, PieChart, Text
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
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-fuchsia-500/20 to-fuchsia-600/20 flex items-center justify-center mr-4`}>
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

const CssGradients = () => {
  const [angle, setAngle] = useState(90);
  const [color1, setColor1] = useState('#ec4899');
  const [color2, setColor2] = useState('#8b5cf6');

  const gradientString = `linear-gradient(${angle}deg, ${color1}, ${color2})`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-fuchsia-50/30 to-slate-50 dark:from-slate-900 dark:via-fuchsia-900/10 dark:to-slate-900">
      <header className="relative overflow-hidden">
        <div className="relative px-6 lg:px-12 py-16 lg:py-24 text-center bg-white dark:bg-slate-800/90 rounded-b-3xl shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-fuchsia-500 to-purple-600 shadow-2xl mb-8">
            <Paintbrush className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-purple-500 to-indigo-500 mb-6 leading-tight">
            CSS Gradients
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Create smooth transitions between two or more colors to add depth and vibrancy to your designs.
          </p>
        </div>
      </header>

      <main className="px-6 lg:px-12 py-12 lg:py-20">
        
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <BookOpen className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 1: The Three Types of Gradients
            </h2>
          </div>
          <div className="space-y-12">
            <LessonPropertyCard
              title="Linear Gradients"
              icon={Waves}
              color="text-fuchsia-500"
              description="Creates a gradient of colors along a straight line. You can control the direction (angle or keywords like `to right`) and the colors (called 'color stops')."
            >
              <InteractiveCodeBlock language="css" title="CSS Example" code={`.box {\n  background-image: linear-gradient(90deg, #ec4899, #8b5cf6);\n}`}/>
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">Visual Output:</h4>
                <div className="h-24 w-full rounded-lg" style={{ backgroundImage: 'linear-gradient(90deg, #ec4899, #8b5cf6)' }}></div>
              </div>
            </LessonPropertyCard>

            <LessonPropertyCard
              title="Radial Gradients"
              icon={Circle}
              color="text-blue-500"
              description="Creates a gradient that radiates outwards from a central point. You can control the shape (circle or ellipse), position, and color stops."
            >
              <InteractiveCodeBlock language="css" title="CSS Example" code={`.box {\n  background-image: radial-gradient(circle, #fde047, #f97316);\n}`}/>
               <div className="mt-4">
                <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">Visual Output:</h4>
                <div className="h-24 w-full rounded-lg" style={{ backgroundImage: 'radial-gradient(circle, #fde047, #f97316)' }}></div>
              </div>
            </LessonPropertyCard>
            
            <LessonPropertyCard
              title="Conic Gradients"
              icon={PieChart}
              color="text-green-500"
              description="Creates a gradient that is swept around a center point, similar to a pie chart or color wheel. This is great for creating charts, borders, and unique patterns."
            >
              <InteractiveCodeBlock language="css" title="CSS Example" code={`.box {\n  background-image: conic-gradient(from 90deg, #10b981, #3b82f6);\n}`}/>
               <div className="mt-4">
                <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">Visual Output:</h4>
                <div className="h-24 w-full rounded-lg" style={{ backgroundImage: 'conic-gradient(from 90deg, #10b981, #3b82f6)' }}></div>
              </div>
            </LessonPropertyCard>
          </div>
        </section>

        <section className="mb-20 p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border-2 border-slate-200 dark:border-slate-700">
            <div className="flex items-center mb-8">
              <Code className="w-8 h-8 mr-4 text-pink-600" />
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                Section 2: Interactive Linear Gradient Sandbox
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
                <div>
                    <div className="mb-6">
                        <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block">Angle: <span className="font-bold text-fuchsia-600">{angle}°</span></label>
                        <input type="range" min="0" max="360" value={angle} onChange={(e) => setAngle(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-slate-700" />
                    </div>
                    <div className="mb-6 flex space-x-4">
                        <div>
                            <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block mb-2">Color 1</label>
                            <input type="color" value={color1} onChange={e => setColor1(e.target.value)} className="w-full h-12 p-1 border-2 rounded-lg" />
                        </div>
                        <div>
                            <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block mb-2">Color 2</label>
                            <input type="color" value={color2} onChange={e => setColor2(e.target.value)} className="w-full h-12 p-1 border-2 rounded-lg" />
                        </div>
                    </div>
                     <InteractiveCodeBlock title="Live CSS" code={`.gradient {\n  background-image: ${gradientString};\n}`} />
                </div>
                <div className="p-4 bg-slate-100 dark:bg-slate-900/50 rounded-xl shadow-inner border border-slate-300 dark:border-slate-600 flex flex-col items-center justify-center">
                    <h3 className="text-xl font-bold text-center mb-4 text-slate-800 dark:text-slate-200">Visual Output</h3>
                    <div className="w-full h-64 rounded-lg" style={{ backgroundImage: gradientString }}></div>
                </div>
            </div>
        </section>

        <section>
          <div className="flex items-center mb-12">
            <Text className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 3: Visual Showcase - Advanced Techniques
            </h2>
          </div>
          <div className="space-y-12">
             <LessonPropertyCard
                title="Repeating Gradients"
                icon={Waves}
                color="text-amber-500"
                description="Use `repeating-linear-gradient` or `repeating-radial-gradient` to create patterns. By defining color stops within a small size, the gradient will tile itself across the element."
            >
                <InteractiveCodeBlock language="css" title="CSS Striped Pattern" code={`.striped {\n  background-image: repeating-linear-gradient(\n    45deg,\n    #fde047,\n    #fde047 10px,\n    #f97316 10px,\n    #f97316 20px\n  );\n}`}/>
                <div className="mt-4">
                    <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">Visual Output:</h4>
                    <div className="h-24 w-full rounded-lg" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fde047, #fde047 10px, #f97316 10px, #f97316 20px)' }}></div>
                </div>
            </LessonPropertyCard>
            <LessonPropertyCard
                title="Gradient Text"
                icon={Text}
                color="text-rose-500"
                description="A popular modern technique where a gradient is used as the text color. This is achieved by setting the background to a gradient, making the text color transparent, and then clipping the background to the text itself."
            >
                <InteractiveCodeBlock language="css" title="CSS Example" code={`.gradient-text {\n  background-image: linear-gradient(45deg, #fb7185, #6366f1);\n  color: transparent;\n  background-clip: text;\n  -webkit-background-clip: text; /* For Safari */\n}`}/>
                <div className="mt-4">
                    <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">Visual Output:</h4>
                    <div className="p-4 bg-slate-100 dark:bg-slate-700/50 rounded-lg flex justify-center">
                        <span className="text-5xl font-black" style={{ backgroundImage: 'linear-gradient(45deg, #fb7185, #6366f1)', color: 'transparent', backgroundClip: 'text', WebkitBackgroundClip: 'text' }}>Hello World</span>
                    </div>
                </div>
            </LessonPropertyCard>
          </div>
        </section>

        <div className="mt-20 relative overflow-hidden rounded-3xl bg-gradient-to-r from-fuchsia-500 to-purple-600 p-12 lg:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10">
            <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Lesson Complete: Gradients Mastered!
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              You can now create beautiful, vibrant color transitions and patterns, adding a professional touch to backgrounds, text, and UI elements.
            </p>
            <button className="mt-8 px-8 py-4 bg-white text-fuchsia-600 rounded-xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center">
              Next Lesson
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CssGradients;
