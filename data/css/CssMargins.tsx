import React, { useState, useMemo } from 'react';
import { BookOpen, Code, CheckCircle, ArrowRight, Layers, Maximize, Minus, AlignCenter, LayoutGrid, Lightbulb } from 'lucide-react';

const CssMargins = () => {
  const [boxAMargin, setBoxAMargin] = useState(30);
  const [boxBMargin, setBoxBMargin] = useState(20);

  // --- Helper Components ---

  // Interactive Code Preview Component (Syntax Highlighting - reusable)
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
                    return <span key={j} className="text-slate-500 italic font-semibold">{part}</span>; // Comments
                  }
                  if (part.match(/^(div|\.[\w-]+|#[\w-]+)$/)) {
                    return <span key={j} className="text-amber-400 font-semibold">{part}</span>; // Selectors
                  }
                  if (part.match(/^(margin|margin-top|margin-right|margin-bottom|margin-left|width|auto)$/)) {
                    return <span key={j} className="text-cyan-400">{part}</span>; // Properties/Attributes
                  }
                  if (['{', '}', ':', ';'].includes(part)) {
                    return <span key={j} className="text-pink-400 font-bold">{part}</span>; // Punctuation
                  }
                  if (part.match(/^(#[0-9a-fA-F]+|\d+px|solid|auto)$/)) {
                    return <span key={j} className="text-emerald-400">{part}</span>; // Values
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

  // Property Card Component (Highly Stylized, designed for vertical stack)
  const PropertyCard = ({ title, icon: Icon, color, description, syntaxCode, keyBenefit }) => (
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
        {description.split(/(\*\*.*?\*\*)/g).map((part, i) => (
          part.startsWith('**') && part.endsWith('**') ? 
          <strong key={i} className={`font-semibold ${color}`}>{part.slice(2, -2)}</strong> : 
          <span key={i}>{part}</span>
        ))}
      </p>

      {/* Code and Benefit Block */}
      <div className="mt-6 space-y-4">
        {syntaxCode && <InteractiveCodeBlock code={syntaxCode} title="Syntax Example" />}
        <div className="p-3 bg-indigo-50 dark:bg-indigo-900/40 rounded-xl border-l-4 border-indigo-500 flex items-start space-x-3">
            <Lightbulb className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1"/>
            <p className="text-sm font-semibold text-indigo-700 dark:text-indigo-300">
                **Key Tip:** {keyBenefit}
            </p>
        </div>
      </div>
    </div>
  );

  // Data for Margin Properties
  const marginProperties = [
    {
      title: 'margin-top / margin-bottom',
      icon: Maximize,
      color: 'text-red-600',
      description: 'Controls the external vertical space. Used for separating elements above and below. These are the properties most affected by **margin collapsing**.',
      syntaxCode: `h2 {\n  margin-top: 3rem;\n  margin-bottom: 1.5rem;\n}`,
      keyBenefit: 'Always use **relative units (rem, em)** for vertical spacing to ensure scale and consistency with typography.',
    },
    {
      title: 'margin-left / margin-right',
      icon: Layers,
      color: 'text-green-600',
      description: 'Controls the external horizontal space. These properties are **not affected** by margin collapsing.',
      syntaxCode: `.sidebar-item {\n  margin-left: 20px;\n}`,
      keyBenefit: 'To prevent unexpected horizontal movement, avoid setting a fixed `margin-left` and `margin-right` on responsive containers.',
    },
    {
      title: 'The `margin` Shorthand',
      icon: Code,
      color: 'text-blue-600',
      description: 'Combines all four margins into a single, efficient declaration. The number of values dictates which sides are set.',
      syntaxCode: `.box-1 { margin: 20px; } /* All 4 sides */\n.box-2 { margin: 10px 20px; } /* Top/Bottom | Left/Right */\n.box-3 { margin: 5px 10px 15px 20px; } /* Top | Right | Bottom | Left */`,
      keyBenefit: 'Using **1 or 2 values** in the shorthand is best practice for concise, predictable spacing.',
    },
    {
      title: 'Centering with `auto`',
      icon: AlignCenter,
      color: 'text-purple-600',
      description: 'The standard technique for horizontally **centering a block element** (like a `<div>`) within its parent. It requires the element to have a defined `width`.',
      syntaxCode: `.container {\n  width: 80%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n/* Shorthand */\n.container { margin: 0 auto; }`,
      keyBenefit: 'Only `margin-left: auto;` and `margin-right: auto;` work for centering; vertical auto margins are ignored.',
    },
  ];

  // Logic to determine the margin collapse result
  const collapsedMargin = Math.max(boxAMargin, boxBMargin);
  const totalSpace = boxAMargin + boxBMargin;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50/30 to-slate-50 dark:from-slate-900 dark:via-violet-900/10 dark:to-slate-900">
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="relative px-6 lg:px-12 py-16 lg:py-24 text-center bg-white dark:bg-slate-800/90 rounded-b-3xl shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-teal-600 to-blue-600 shadow-2xl mb-8">
            <Maximize className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600 mb-6 leading-tight">
            CSS Margins: Space Outside the Box
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Master the Box Model's outermost layer to control separation between elements.
          </p>
          <div className="flex items-center justify-center mt-8 space-x-4">
            <div className="flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-slate-700/80 rounded-full backdrop-blur-sm">
              <Minus className="w-5 h-5 text-red-500" />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">External Spacing</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-slate-700/80 rounded-full backdrop-blur-sm">
              <LayoutGrid className="w-5 h-5 text-indigo-500" />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Layout Control</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 lg:px-12 py-12 lg:py-20">
        
        {/* Section 1: Core Margin Properties (Vertical Stack) */}
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <BookOpen className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 1: Individual and Shorthand Properties
            </h2>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-4xl">
            Margins control the empty space **outside** of the element's border.
          </p>

          <div className="space-y-12">
            {marginProperties.map((prop, index) => (
              <PropertyCard
                key={index}
                title={prop.title}
                icon={prop.icon}
                color={prop.color}
                description={prop.description}
                syntaxCode={prop.syntaxCode}
                keyBenefit={prop.keyBenefit}
              />
            ))}
          </div>
        </section>

        {/* Section 2: Margin Collapse Mystery (Interactive) */}
        <section className="mb-20 p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border-2 border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-12">
            <Layers className="w-8 h-8 mr-4 text-orange-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 2: The Margin Collapse Mystery
            </h2>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-4xl">
            When the **top margin** of one element touches the **bottom margin** of another, only the **largest** of the two margins is rendered. They do not add up.
          </p>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Controls */}
            <div className="space-y-6">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Live Collapse Demo Controls</h4>
                
                {/* Box A Margin Bottom */}
                <div className="space-y-2">
                    <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block">Box A: `margin-bottom`: <span className="text-red-600 font-extrabold">{boxAMargin}px</span></label>
                    <input
                        type="range"
                        min="0"
                        max="50"
                        value={boxAMargin}
                        onChange={(e) => setBoxAMargin(parseInt(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-slate-700"
                    />
                </div>

                {/* Box B Margin Top */}
                <div className="space-y-2">
                    <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block">Box B: `margin-top`: <span className="text-green-600 font-extrabold">{boxBMargin}px</span></label>
                    <input
                        type="range"
                        min="0"
                        max="50"
                        value={boxBMargin}
                        onChange={(e) => setBoxBMargin(parseInt(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-slate-700"
                    />
                </div>

                <div className="p-4 bg-indigo-100 dark:bg-indigo-900/40 rounded-xl mt-6 font-mono text-sm text-indigo-800 dark:text-indigo-300">
                    <p className="font-bold mb-1">Calculation:</p>
                    <p>Box A Margin: {boxAMargin}px</p>
                    <p>Box B Margin: {boxBMargin}px</p>
                    <p className="font-bold text-lg mt-2 text-pink-600 dark:text-pink-400">
                        Resulting Space (Collapsed): {collapsedMargin}px
                    </p>
                </div>
            </div>
            
            {/* Live Preview and Explanation */}
            <div className="space-y-4">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">Visual Result</h4>

                <div className="flex flex-col items-center">
                    
                    {/* Box A */}
                    <div 
                        className="w-full max-w-sm h-16 bg-red-400 dark:bg-red-700/80 rounded-lg shadow-md flex items-center justify-center text-white font-bold"
                        style={{ marginBottom: `${boxAMargin}px` }}
                    >
                        Box A (`margin-bottom: {boxAMargin}px`)
                    </div>
                    
                    {/* Separator / Visual Space Indicator */}
                    <div 
                        className="w-1 h-20 relative" 
                        style={{ height: `${collapsedMargin}px` }}
                    >
                        <div className="absolute inset-0 bg-red-300/50 dark:bg-red-900/50 border-dashed border-x border-red-500/70" />
                        <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 text-sm font-semibold text-pink-600 dark:text-pink-400">
                            {collapsedMargin}px GAP
                        </span>
                    </div>

                    {/* Box B */}
                    <div 
                        className="w-full max-w-sm h-16 bg-green-400 dark:bg-green-700/80 rounded-lg shadow-md flex items-center justify-center text-white font-bold"
                        style={{ marginTop: `${boxBMargin}px` }}
                    >
                        Box B (`margin-top: {boxBMargin}px`)
                    </div>

                </div>
            </div>
          </div>
        </section>


        {/* Success Message */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 to-purple-600 p-12 lg:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10">
            <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Lesson Complete: Margin Fundamentals Secured!
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              You've mastered external spacing and the essential concept of Margin Collapse.
            </p>
            <button className="mt-8 px-8 py-4 bg-white text-violet-600 rounded-xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center">
              Continue Learning
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CssMargins;
