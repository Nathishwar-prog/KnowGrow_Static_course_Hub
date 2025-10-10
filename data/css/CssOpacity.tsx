import React, { useState } from 'react';
import {
  BookOpen, Code, CheckCircle, ArrowRight,
  Layers, Droplets, Blend
} from 'lucide-react';

// --- Reusable Components (Copied from established pattern) ---

const InteractiveCodeBlock = ({ code, language = 'css', title, style = {} }) => (
  <div className="relative group" style={style}>
    {title && (
      <div className="absolute -top-3 left-4 px-3 py-1 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-xs font-semibold rounded-full">
        {title}
      </div>
    )}
    <div className="mt-2 p-6 rounded-2xl bg-slate-900 shadow-2xl overflow-x-auto border border-slate-700 group-hover:border-violet-500 transition-all duration-300">
      <pre className="text-sm lg:text-base">
        <code className="font-mono leading-relaxed">
          {code.split('\n').map((line, i) => (
            <div key={i} className="hover:bg-slate-800/50 px-2 -mx-2 rounded transition-colors">
              {line.split(/(\s+|[{}():;\[\]>\+\~=\^\|\*\$\/\*#"])/g).map((part, j) => {
                if (part.includes('/*') || part.includes('*/')) {
                  return <span key={j} className="text-slate-500 italic font-semibold">{part}</span>;
                }
                if (part.match(/^(div|\.[\w-]+)$/)) {
                  return <span key={j} className="text-amber-400 font-semibold">{part}</span>;
                }
                if (part.match(/^(opacity|background-color|color)$/)) {
                  return <span key={j} className="text-cyan-400">{part}</span>;
                }
                if (['{', '}', ':', ';', ',', '(', ')'].includes(part)) {
                  return <span key={j} className="text-pink-400 font-bold">{part}</span>;
                }
                if (part.match(/^(rgba|[\d\.]+)$/)) {
                  return <span key={j} className="text-emerald-400">{part}</span>;
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

const LessonPropertyCard = ({ title, icon: Icon, color, description, syntaxCode }) => (
    <div className="group relative p-8 bg-white dark:bg-slate-800/90 rounded-3xl shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-1 border-2 border-slate-200 dark:border-slate-700 h-full">
      <div className="flex items-center mb-6">
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${
          color.includes('blue') ? 'from-blue-500/20 to-blue-600/20' :
          'from-green-500/20 to-green-600/20'
        } flex items-center justify-center mr-4`}>
          <Icon className={`w-7 h-7 ${color}`} />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h3>
      </div>
      
      <p className="text-base lg:text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
        {description}
      </p>

      {syntaxCode && <InteractiveCodeBlock code={syntaxCode} title="Syntax Example" />}
    </div>
  );
// --- End Reusable Components ---

const CssOpacity = () => {
    const [opacity, setOpacity] = useState(0.5);

    const mainProperties = [
        {
            id: 'opacity',
            title: 'The Opacity Property',
            icon: Layers,
            color: 'text-blue-600',
            description: 'Controls the transparency level for an entire element, including its content, background, and border. The value ranges from 1 (fully opaque) to 0 (fully transparent).',
            syntaxCode: `div {\n  /* 30% visible */\n  opacity: 0.3;\n}`,
        },
        {
            id: 'rgba-vs-opacity',
            title: 'Opacity vs. RGBA Alpha',
            icon: Droplets,
            color: 'text-green-600',
            description: 'Opacity affects the whole element. RGBA/HSLA alpha only affects the transparency of a single color property (like background or text color), leaving other parts of the element untouched.',
            syntaxCode: `/* Entire box is 50% transparent */\n.box-1 { opacity: 0.5; }\n\n/* Only background is 50% transparent */\n.box-2 { background-color: rgba(0,0,0, 0.5); }`,
        },
    ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50/30 to-slate-50 dark:from-slate-900 dark:via-sky-900/10 dark:to-slate-900">
      
      <header className="relative overflow-hidden">
        <div className="relative px-6 lg:px-12 py-16 lg:py-24 text-center bg-white dark:bg-slate-800/90 rounded-b-3xl shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-sky-500 to-indigo-600 shadow-2xl mb-8">
            <Blend className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-indigo-500 to-blue-600 mb-6 leading-tight">
            CSS Opacity
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Controlling the transparency of elements to create depth, overlays, and disabled states.
          </p>
        </div>
      </header>

      <main className="px-6 lg:px-12 py-12 lg:py-20">
        
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <BookOpen className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 1: The Core Concepts
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-12">
            {mainProperties.map((item) => (
              <LessonPropertyCard key={item.id} {...item} />
            ))}
          </div>
        </section>

        <section className="mb-20 p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border-2 border-slate-200 dark:border-slate-700">
            <div className="flex items-center mb-12">
              <Code className="w-8 h-8 mr-4 text-pink-600" />
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                Section 2: Interactive Sandbox
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-10 items-start">
                <div className="space-y-6">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">Live Controls</h4>
                    
                    <div className="space-y-2">
                        <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block">Transparency Level: <span className="text-blue-600 font-extrabold">{opacity.toFixed(2)}</span></label>
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={opacity}
                            onChange={(e) => setOpacity(parseFloat(e.target.value))}
                            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-slate-700"
                        />
                    </div>
                    
                    <InteractiveCodeBlock 
                        code={`.opacity-box {\n  opacity: ${opacity.toFixed(2)};\n}\n\n.rgba-box {\n  background-color: rgba(22, 163, 74, ${opacity.toFixed(2)});\n}`}
                        title="Live CSS Output"
                    />
                </div>

                <div className="p-4 bg-slate-100 dark:bg-slate-700/50 rounded-xl shadow-inner border border-slate-300 dark:border-slate-600 min-h-[250px] flex flex-col justify-center space-y-4">
                    <div className="opacity-box p-4 rounded-lg text-white font-bold text-center bg-indigo-600" style={{ opacity: opacity }}>
                        This entire element (including this text) has `opacity: {opacity.toFixed(2)}`.
                    </div>
                    <div className="rgba-box p-4 rounded-lg text-white font-bold text-center" style={{ backgroundColor: `rgba(22, 163, 74, ${opacity})` }}>
                        Only the background of this element has `alpha: {opacity.toFixed(2)}`.
                    </div>
                </div>
            </div>
        </section>

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-sky-500 to-indigo-600 p-12 lg:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10">
            <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Lesson Complete: Opacity Mastered!
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              You now understand how to control element transparency and can correctly choose between `opacity` and RGBA alpha for different effects.
            </p>
            <button className="mt-8 px-8 py-4 bg-white text-sky-600 rounded-xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center">
              Next Lesson
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CssOpacity;
