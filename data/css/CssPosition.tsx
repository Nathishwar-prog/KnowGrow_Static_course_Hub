import React, { useState } from 'react';
import {
  BookOpen, Target, Code, CheckCircle, ArrowRight,
  Lightbulb, Move, Maximize, Zap, ArrowDown, LayoutGrid, Globe
} from 'lucide-react';

// --- Reusable UI Components (Copied from established pattern) ---

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
                if (part.match(/^(position|top|left|right|bottom|z-index|width|height|color|background-color)$/)) {
                  return <span key={j} className="text-cyan-400">{part}</span>; // CSS Properties
                }
                if (['{', '}', ':', ';', '(', ')', '%'].includes(part)) {
                  return <span key={j} className="text-pink-400 font-bold">{part}</span>; // Punctuation
                }
                if (part.match(/^(#[0-9a-fA-F]+|static|relative|absolute|fixed|sticky|\d+px|0|auto)$/)) {
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
const CssPosition = () => {
  const [positionType, setPositionType] = useState('static');
  const [topOffset, setTopOffset] = useState(20);
  const [leftOffset, setLeftOffset] = useState(20);

  const isOffsetActive = positionType !== 'static';
  const parentPosition = positionType === 'absolute' ? 'relative' : 'static';

  const childStyle = {
    position: positionType,
    top: isOffsetActive ? `${topOffset}px` : 'auto',
    left: isOffsetActive ? `${leftOffset}px` : 'auto',
    zIndex: positionType === 'fixed' ? 1000 : 'auto',
    transition: 'all 0.3s ease-in-out',
  };

  const coreProperties = [
    {
      title: 'position: static (Default)',
      icon: LayoutGrid,
      color: 'text-gray-600',
      description: 'The default value. Elements render in their **normal document flow**. Offset properties (`top`, `left`, etc.) have **no effect**.',
      syntaxCode: `.element {\n  position: static;\n}`,
      keyBenefit: 'Use this for all elements unless you specifically need to take them out of the normal flow.',
    },
    {
      title: 'position: relative',
      icon: Move,
      color: 'text-green-600',
      description: 'The element remains in the **normal flow** but its final position is offset *relative to its original position*. Crucially, it leaves a gap where it should have been, and is often used to establish a **new positioning context** for absolute children.',
      syntaxCode: `.element {\n  position: relative;\n  top: 10px;\n  left: 20px;\n}`,
      keyBenefit: 'The most common use is setting the parent to `relative` so child elements can be correctly positioned `absolute` inside it.',
    },
    {
      title: 'position: absolute',
      icon: Target,
      color: 'text-red-600',
      description: 'The element is removed entirely from the normal flow. Its position is calculated *relative to its nearest **positioned** ancestor* (any ancestor that is NOT `static`). If no ancestor is positioned, it defaults to the `<body>`.',
      syntaxCode: `.child {\n  position: absolute;\n  top: 0;\n  right: 0;\n}`,
      keyBenefit: 'Perfect for drop-down menus, modals, tooltips, or overlaying content precisely within a parent boundary.',
    },
    {
      title: 'position: fixed',
      icon: Globe,
      color: 'text-blue-600',
      description: 'The element is removed entirely from the flow and is positioned *relative to the viewport* (the browser window). It stays in place even when the page is scrolled.',
      syntaxCode: `.header {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 100;\n}`,
      keyBenefit: 'Ideal for persistent navigation bars, sidebars, or "Back to Top" buttons.',
    },
    {
      title: 'position: sticky (Advanced)',
      icon: Zap,
      color: 'text-purple-600',
      description: 'A hybrid of `relative` and `fixed`. The element is treated as `relative` until its offset threshold (e.g., `top: 0`) is met, at which point it becomes `fixed` to the viewport. It requires at least one offset property to work.',
      syntaxCode: `.sidebar {\n  position: sticky;\n  top: 20px;\n}`,
      keyBenefit: 'Excellent for sticky table headers, social media sidebars, or navigational elements that should follow the user only up to a point.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50/30 to-slate-50 dark:from-slate-900 dark:via-violet-900/10 dark:to-slate-900">
      
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="relative px-6 lg:px-12 py-16 lg:py-24 text-center bg-white dark:bg-slate-800/90 rounded-b-3xl shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-pink-600 to-indigo-600 shadow-2xl mb-8">
            <Move className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-indigo-600 to-violet-600 mb-6 leading-tight">
            CSS Position
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            The mechanism for controlling the exact placement and stacking of elements in 2D space.
          </p>
        </div>
      </header>

      <main className="px-6 lg:px-12 py-12 lg:py-20">
        
        {/* Section 1: Interactive Sandbox */}
        <section className="mb-20 p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border-2 border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-12">
            <Zap className="w-8 h-8 mr-4 text-teal-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 1: Interactive Position Sandbox
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Controls Column */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Controls</h4>
              
              {/* Position Type Selector */}
              <div className="space-y-2 pt-4">
                <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block">
                  Select `position` Type: <span className="text-violet-600 font-extrabold">{positionType.toUpperCase()}</span>
                </label>
                <select
                  value={positionType}
                  onChange={(e) => {
                    setPositionType(e.target.value);
                    // Reset offsets if static is selected
                    if (e.target.value === 'static') {
                      setTopOffset(0);
                      setLeftOffset(0);
                    }
                  }}
                  className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors"
                >
                  <option value="static">static (Default)</option>
                  <option value="relative">relative</option>
                  <option value="absolute">absolute</option>
                  <option value="fixed">fixed</option>
                </select>
              </div>

              {/* Offset Sliders (Active only if not static) */}
              <div className={`space-y-4 transition-opacity duration-300 ${isOffsetActive ? 'opacity-100' : 'opacity-40 pointer-events-none'}`}>
                <h5 className="font-semibold text-slate-700 dark:text-slate-300">Offset Properties:</h5>
                
                {/* Top Offset */}
                <div className="space-y-2">
                  <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block">
                    `top`: <span className="text-pink-600 font-extrabold">{topOffset}px</span>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={topOffset}
                    onChange={(e) => setTopOffset(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-slate-700"
                  />
                </div>
                
                {/* Left Offset */}
                <div className="space-y-2">
                  <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block">
                    `left`: <span className="text-pink-600 font-extrabold">{leftOffset}px</span>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={leftOffset}
                    onChange={(e) => setLeftOffset(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-slate-700"
                  />
                </div>
              </div>

              <InteractiveCodeBlock 
                code={`/* Parent Container CSS */\n.parent {\n  position: ${parentPosition}; /* Important for 'absolute' */\n  border: 2px dashed #93C5FD;\n  height: 250px;\n}\n\n/* Child Element CSS */\n.child {\n  position: ${positionType};\n  ${isOffsetActive ? `top: ${topOffset}px;` : '/* top/left ignored */'}\n  ${isOffsetActive ? `left: ${leftOffset}px;` : ''}\n}`}
                title="Live CSS Output"
              />
            </div>
            
            {/* Visualization Column */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">Live Element Flow</h4>
              
              <div className="p-4 bg-slate-100 dark:bg-slate-700 rounded-xl shadow-inner border border-slate-300 dark:border-slate-600">
                <h5 className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">Parent Container (`position: {parentPosition}`)</h5>
                
                <div 
                  className="bg-gray-300 dark:bg-gray-600 p-4 rounded-lg relative border-4 border-dashed border-gray-400 dark:border-gray-500 min-h-[250px] flex flex-wrap gap-2"
                  style={{ position: parentPosition }} // Sets context for absolute
                >
                  <div className="w-16 h-16 bg-pink-300 rounded flex items-center justify-center text-xs font-bold text-pink-900">1</div>
                  <div className="w-16 h-16 bg-pink-300 rounded flex items-center justify-center text-xs font-bold text-pink-900">2</div>
                  
                  {/* The Positioned Child */}
                  <div 
                    className="w-20 h-20 bg-indigo-500 rounded shadow-md text-white font-bold flex items-center justify-center text-center text-sm"
                    style={childStyle}
                  >
                    Child ({positionType})
                  </div>
                  
                  <div className="w-16 h-16 bg-pink-300 rounded flex items-center justify-center text-xs font-bold text-pink-900">3</div>
                  <div className="w-16 h-16 bg-pink-300 rounded flex items-center justify-center text-xs font-bold text-pink-900">4</div>
                </div>
              </div>
              
              <div className="p-3 bg-red-50 dark:bg-red-900/40 rounded-xl border-l-4 border-red-500 flex items-start space-x-3">
                <ArrowDown className="w-5 h-5 text-red-600 flex-shrink-0 mt-1"/>
                <p className="text-sm font-semibold text-red-700 dark:text-red-300">
                    Try **`relative`** vs. **`absolute`**. Notice how `absolute` removes the child from the flow, letting items 3 and 4 move up!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: The Five Core Values */}
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <BookOpen className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 2: The Five Core Position Values
            </h2>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-4xl">
            Each position value determines an element's placement rules and its relationship to the document flow.
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
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">Lesson Complete: Position Mastered!</h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              You now have the tools to place any element exactly where you need it on the page.
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

export default CssPosition;
