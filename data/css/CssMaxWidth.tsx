import React, { useState } from 'react';
import {
  BookOpen, Target, Code, CheckCircle, ArrowRight,
  Lightbulb, Ruler, Maximize, Monitor, ArrowDown, Zap
} from 'lucide-react';

// --- Reusable UI Components ---

/**
 * A syntax-highlighted code block for displaying CSS and HTML.
 */
const InteractiveCodeBlock = ({ code, language = 'css', title }) => (
  <div className="relative group">
    {title && (
      <div className="absolute -top-3 left-4 px-3 py-1 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-xs font-semibold rounded-full shadow-lg">
        {title}
      </div>
    )}
    <div className="mt-2 p-6 rounded-2xl bg-slate-900 shadow-2xl overflow-x-auto border border-slate-700 group-hover:border-violet-500 transition-all duration-300">
      <pre className="text-sm lg:text-base">
        <code className="font-mono leading-relaxed">
          {code.split('\n').map((line, i) => (
            <div key={i} className="hover:bg-slate-800/50 px-2 -mx-2 rounded transition-colors">
              {line.split(/(\s+|[{}():;\[\]>\+\~=\^\|\*\$\/\*#])/g).map((part, j) => {
                // Comments and HTML tags are highlighted separately
                if (part.includes('/*') || part.includes('*/') || part.match(/<!--.*?-->/)) {
                  return <span key={j} className="text-slate-500 italic font-semibold">{part}</span>;
                }
                if (part.match(/^(div|p|\.[\w-]+|#[\w-]+)$/)) {
                  return <span key={j} className="text-amber-400 font-semibold">{part}</span>; // Selectors
                }
                if (part.match(/^(max-width|width|height|padding|margin|color|background-color)$/)) {
                  return <span key={j} className="text-cyan-400">{part}</span>; // CSS Properties
                }
                if (['{', '}', ':', ';', '(', ')', '%'].includes(part)) {
                  return <span key={j} className="text-pink-400 font-bold">{part}</span>; // Punctuation
                }
                if (part.match(/^(#[0-9a-fA-F]+|solid|dotted|double|\d+px|0|auto)$/)) {
                  return <span key={j} className="text-emerald-400">{part}</span>; // Values
                }
                return <span key={j} className="text-slate-300">{part}</span>; // Standard text
              })}
            </div>
          ))}
        </code>
      </pre>
    </div>
  </div>
);

/**
 * A visually distinct card for explaining individual lesson properties/concepts.
 */
const LessonPropertyCard = ({ title, icon: Icon, color, description, syntaxCode, keyBenefit }) => (
  <div className="group relative p-8 bg-white dark:bg-slate-800/90 rounded-3xl shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-1 border-2 border-slate-200 dark:border-slate-700 h-full">
    <div className="flex items-center mb-6">
      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${
        color.includes('red') ? 'from-red-500/20 to-red-600/20' :
        color.includes('green') ? 'from-green-500/20 to-green-600/20' :
        color.includes('blue') ? 'from-blue-500/20 to-blue-600/20' :
        'from-purple-500/20 to-purple-600/20'
      } flex items-center justify-center mr-4`}>
        <Icon className={`w-7 h-7 ${color}`} />
      </div>
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h3>
    </div>
    
    <p className="text-base lg:text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
      {description.split(/(\*\*.*?\*\*)/g).map((part, i) =>
        part.startsWith('**') && part.endsWith('**') ? 
        <strong key={i} className={`font-semibold ${color}`}>{part.slice(2, -2)}</strong> : 
        <span key={i}>{part}</span>
      )}
    </p>

    <div className="mt-6 space-y-4">
      {syntaxCode && <InteractiveCodeBlock code={syntaxCode} title="Syntax Example" />}
      <div className="p-3 bg-indigo-50 dark:bg-indigo-900/40 rounded-xl border-l-4 border-indigo-500 flex items-start space-x-3">
        <Lightbulb className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1"/>
        <p className="text-sm font-semibold text-indigo-700 dark:text-indigo-300">
          <strong className="mr-1">Key Tip:</strong>{keyBenefit}
        </p>
      </div>
    </div>
  </div>
);

// --- Main Component ---
const CssMaxWidth = () => {
  const [containerWidth, setContainerWidth] = useState(400); // Simulated container width
  const [maxWidthValue, setMaxWidthValue] = useState(250); // max-width value

  const maxClasses = `mx-auto p-4 text-center rounded-xl shadow-lg transition-all duration-500 text-white font-bold text-lg`;
  const containerStyle = {
    width: `${containerWidth}px`,
    transition: 'width 0.3s ease-in-out',
  };
  const boxStyle = {
    maxWidth: `${maxWidthValue}px`,
  };

  const currentBoxWidth = Math.min(containerWidth, maxWidthValue);

  const coreProperties = [
    {
      title: 'The Core Concept',
      icon: Target,
      color: 'text-red-600',
      description: 'The `max-width` property sets the **maximum width** an element is allowed to occupy. If the content or parent width is smaller, the element shrinks accordingly. If the parent is wider, the element stops growing at the `max-width` value.',
      syntaxCode: `.element {\n  max-width: 600px;\n  width: 100%; /* Important pairing */\n}`,
      keyBenefit: 'This property is the **foundation of responsive design**, preventing content from stretching too wide on large screens.',
    },
    {
      title: 'max-width: 100%',
      icon: Ruler,
      color: 'text-green-600',
      description: 'Used almost universally on images (`<img>`) to ensure they scale down on small screens without exceeding their container size, preventing horizontal scrolling.',
      syntaxCode: `img {\n  max-width: 100%;\n  height: auto;\n}`,
      keyBenefit: 'Essential for creating responsive media that gracefully handles varying screen sizes.',
    },
    {
      title: 'Centering with max-width',
      icon: Maximize,
      color: 'text-blue-600',
      description: 'When `max-width` is combined with `margin: auto` (horizontal margins), a block-level element will be centered perfectly within its parent once it hits its maximum size.',
      syntaxCode: `.container {\n  max-width: 960px;\n  margin: 0 auto;\n}`,
      keyBenefit: 'This is the standard technique for creating centered, constrained content columns on modern websites.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50/30 to-slate-50 dark:from-slate-900 dark:via-violet-900/10 dark:to-slate-900">
      
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="relative px-6 lg:px-12 py-16 lg:py-24 text-center bg-white dark:bg-slate-800/90 rounded-b-3xl shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-pink-600 to-indigo-600 shadow-2xl mb-8">
            <Monitor className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-indigo-600 to-violet-600 mb-6 leading-tight">
            CSS `max-width`
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            The fundamental property for responsive design, guaranteeing elements never exceed a set size.
          </p>
        </div>
      </header>

      <main className="px-6 lg:px-12 py-12 lg:py-20">
        
        {/* Section 1: Interactive Sandbox */}
        <section className="mb-20 p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border-2 border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-12">
            <Zap className="w-8 h-8 mr-4 text-teal-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 1: Interactive Max-Width Demo
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Controls Column */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Controls</h4>
              
              {/* Max-Width Value Slider */}
              <div className="space-y-2 pt-4">
                <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block">
                  `max-width` Value: <span className="text-violet-600 font-extrabold">{maxWidthValue}px</span>
                </label>
                <input
                  type="range"
                  min="100"
                  max="500"
                  value={maxWidthValue}
                  onChange={(e) => setMaxWidthValue(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-slate-700"
                />
              </div>

              {/* Container Width Slider */}
              <div className="space-y-2 pt-4">
                <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block">
                  Simulated Container Width: <span className="text-pink-600 font-extrabold">{containerWidth}px</span>
                </label>
                <input
                  type="range"
                  min="200"
                  max="600"
                  value={containerWidth}
                  onChange={(e) => setContainerWidth(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-slate-700"
                />
              </div>

              <InteractiveCodeBlock 
                code={`/* Parent Container CSS */\n.container { width: ${containerWidth}px; }\n\n/* Element CSS */\n.box {\n  max-width: ${maxWidthValue}px;\n  width: 100%;\n  margin: 0 auto;\n}`}
                title="Live CSS Output"
              />
            </div>
            
            {/* Visualization Column */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">Live Behavior Preview</h4>
              
              <div className="p-4 bg-slate-100 dark:bg-slate-700 rounded-xl shadow-inner border border-slate-300 dark:border-slate-600 min-h-48 overflow-hidden">
                <h5 className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">Parent Container (`width: {containerWidth}px`):</h5>
                
                <div 
                  className="bg-gray-300 dark:bg-gray-600 p-2 rounded-lg relative"
                  style={containerStyle}
                >
                  <p className="text-xs text-gray-800 dark:text-gray-200 mb-1">Container Edge</p>
                  
                  {/* The Max-Width Element */}
                  <div 
                    className={`${maxClasses} bg-indigo-500`}
                    style={boxStyle}
                  >
                    Box Width: {currentBoxWidth}px
                    <p className="text-xs font-normal opacity-70">
                      (Max allowed: {maxWidthValue}px)
                    </p>
                  </div>

                </div>
              </div>
              
              <div className="p-3 bg-red-50 dark:bg-red-900/40 rounded-xl border-l-4 border-red-500 flex items-start space-x-3">
                <ArrowDown className="w-5 h-5 text-red-600 flex-shrink-0 mt-1"/>
                <p className="text-sm font-semibold text-red-700 dark:text-red-300">
                    If **Container Width** is less than **Max-Width**, the box shrinks to fit the container. If the **Container Width** is greater, the box stops growing at the **Max-Width** limit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Key Max-Width Applications */}
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <BookOpen className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 2: Practical Applications
            </h2>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-4xl">
            `max-width` is rarely used alone; it works best when combined with other dimensional properties.
          </p>
          <div className="space-y-12">
            {coreProperties.map((prop, index) => (
              <LessonPropertyCard key={index} {...prop} />
            ))}
          </div>
        </section>


        {/* Success Message */}
        <footer className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 to-purple-600 p-12 lg:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10">
            <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">Lesson Complete: `max-width` Mastered!</h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              You now know the most important tool for ensuring your designs are beautifully responsive on all screen sizes.
            </p>
            <button className="mt-8 px-8 py-4 bg-white text-violet-600 rounded-xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center">
              Continue to Next Lesson
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default CssMaxWidth;
