import React, { useState } from 'react';
import {
  BookOpen, Target, Code, CheckCircle, ArrowRight,
  Maximize, Scissors, Eye, MoveHorizontal, MoveVertical
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
              {line.split(/(\s+|[{}():;\[\]>\+\~=\^\|\*\$\/\*#])/g).map((part, j) => {
                if (part.includes('/*') || part.includes('*/')) {
                  return <span key={j} className="text-slate-500 italic font-semibold">{part}</span>;
                }
                if (part.match(/^(div|\.[\w-]+|#[\w-]+)$/)) {
                  return <span key={j} className="text-amber-400 font-semibold">{part}</span>;
                }
                if (part.match(/^(overflow|overflow-x|overflow-y|width|height|background-color)$/)) {
                  return <span key={j} className="text-cyan-400">{part}</span>;
                }
                if (['{', '}', ':', ';'].includes(part)) {
                  return <span key={j} className="text-pink-400 font-bold">{part}</span>;
                }
                if (part.match(/^(#[0-9a-fA-F]+|visible|hidden|scroll|auto|\d+px?)$/)) {
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
          color.includes('red') ? 'from-red-500/20 to-red-600/20' :
          color.includes('green') ? 'from-green-500/20 to-green-600/20' :
          'from-purple-500/20 to-purple-600/20'
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

const CssOverflow = () => {
  const [containerSize, setContainerSize] = useState(150);
  const [overflowValue, setOverflowValue] = useState('hidden');

  const coreProperties = [
    {
      title: 'overflow: visible',
      icon: Eye,
      color: 'text-green-600',
      description: 'The default value. Content is not clipped and may render outside the element\'s box.',
      syntaxCode: `div {\n  overflow: visible;\n}`,
    },
    {
      title: 'overflow: hidden',
      icon: Scissors,
      color: 'text-red-600',
      description: 'The content is clipped, and the rest of the content will be invisible. No scrollbars are provided.',
      syntaxCode: `div {\n  overflow: hidden;\n}`,
    },
    {
      title: 'overflow: scroll',
      icon: MoveVertical,
      color: 'text-blue-600',
      description: 'The content is clipped, but a scrollbar is added to see the rest of the content, whether it is needed or not.',
      syntaxCode: `div {\n  overflow: scroll;\n}`,
    },
    {
      title: 'overflow: auto',
      icon: Code,
      color: 'text-purple-600',
      description: 'The browser decides. If the content fits, it looks like `visible`. If it overflows, it adds scrollbars like `scroll`.',
      syntaxCode: `div {\n  overflow: auto;\n}`,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 dark:from-slate-900 dark:via-blue-900/10 dark:to-slate-900">
      
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="relative px-6 lg:px-12 py-16 lg:py-24 text-center bg-white dark:bg-slate-800/90 rounded-b-3xl shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-600 to-teal-600 shadow-2xl mb-8">
            <Maximize className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-600 to-cyan-600 mb-6 leading-tight">
            CSS Overflow
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Controlling what happens when content is too big to fit in its container.
          </p>
        </div>
      </header>

      <main className="px-6 lg:px-12 py-12 lg:py-20">
        
        {/* Section 1: Core Concepts */}
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <BookOpen className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 1: The Four Main Values
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-12">
            {coreProperties.map((prop, index) => (
              <LessonPropertyCard
                key={index}
                title={prop.title}
                icon={prop.icon}
                color={prop.color}
                description={prop.description}
                syntaxCode={prop.syntaxCode}
              />
            ))}
          </div>
        </section>

        {/* Section 2: Interactive Sandbox */}
        <section className="mb-20 p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border-2 border-slate-200 dark:border-slate-700">
            <div className="flex items-center mb-12">
              <Code className="w-8 h-8 mr-4 text-teal-600" />
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                Section 2: Interactive Overflow Sandbox
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-10">
                {/* Controls */}
                <div className="space-y-6">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">Live Controls</h4>
                    
                    <div className="space-y-4 pt-4">
                        <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block">Container Size: <span className="text-blue-600 font-extrabold">{containerSize}px</span></label>
                        <input type="range" min="100" max="250" value={containerSize} onChange={e => setContainerSize(parseInt(e.target.value))} className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-blue-900/50" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block">Overflow Value:</label>
                      <div className="grid grid-cols-2 gap-3">
                        {['visible', 'hidden', 'scroll', 'auto'].map(val => (
                          <button
                            key={val}
                            onClick={() => setOverflowValue(val)}
                            className={`p-3 rounded-xl font-semibold transition-all duration-200 ${
                              overflowValue === val ? 'bg-indigo-600 text-white shadow-lg' : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600'
                            }`}
                          >
                            {val}
                          </button>
                        ))}
                      </div>
                    </div>

                    <InteractiveCodeBlock 
                        code={`.container {\n  width: ${containerSize}px;\n  height: ${containerSize}px;\n  overflow: ${overflowValue};\n}`}
                        title="Live CSS Output"
                    />
                </div>

                {/* Live Visualization */}
                <div className="flex flex-col items-center justify-center">
                    <div 
                        className="bg-slate-100 dark:bg-slate-700/50 rounded-xl shadow-inner border border-slate-300 dark:border-slate-600 transition-all duration-300 p-2"
                        style={{ 
                            width: `${containerSize}px`, 
                            height: `${containerSize}px`, 
                            overflow: overflowValue 
                        }}
                    >
                        <div className="w-[250px] h-[250px] bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg p-4 text-white font-semibold flex items-start justify-start">
                            <p className="text-sm">This content is 250px by 250px. If the container is smaller, the `overflow` property will determine how I am displayed.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Success Message */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-teal-600 p-12 lg:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10">
            <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Lesson Complete: Content Flow Mastered!
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              You now understand how to manage content boundaries and prevent your layouts from breaking.
            </p>
            <button className="mt-8 px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center">
              Continue Learning
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CssOverflow;


