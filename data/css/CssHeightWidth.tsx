import React, { useState, useMemo } from 'react';
import { BookOpen, Code, CheckCircle, ArrowRight, Layers, Maximize, Ruler, Lightbulb, Zap, Target, AlignCenter, LayoutGrid } from 'lucide-react';

const CssHeightWidth = () => {
  const [containerWidth, setContainerWidth] = useState(600);
  const [childWidthUnit, setChildWidthUnit] = useState('percent');
  const [childWidthValue, setChildWidthValue] = useState(50); // 50% or 50px

  // Logic to calculate the child element's final width
  const finalChildWidth = useMemo(() => {
    if (childWidthUnit === 'percent') {
      return (containerWidth * childWidthValue) / 100;
    }
    // Fixed pixel width
    return childWidthValue;
  }, [containerWidth, childWidthValue, childWidthUnit]);

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
                  if (part.match(/^(div|\.[\w-]+|#[\w-]+|\.container|\.child)$/)) {
                    return <span key={j} className="text-amber-400 font-semibold">{part}</span>; // Selectors
                  }
                  if (part.match(/^(width|height|min-width|max-width|min-height|max-height)$/)) {
                    return <span key={j} className="text-cyan-400">{part}</span>; // Properties/Attributes
                  }
                  if (['{', '}', ':', ';'].includes(part)) {
                    return <span key={j} className="text-pink-400 font-bold">{part}</span>; // Punctuation
                  }
                  if (part.match(/^(#[0-9a-fA-F]+|auto|fit-content|\d+px|\d+%|\d+vh)$/)) {
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

  // Data for Height/Width Properties
  const dimensionProperties = [
    {
      title: 'width',
      icon: Maximize,
      color: 'text-red-600',
      description: 'Sets the horizontal dimension of an element\'s **content area**. For block elements (like `<div>`), the default width is **`100%`** of the parent. Inline elements ignore `width`.',
      syntaxCode: `div {\n  width: 50%;\n}\n\n.icon { width: 32px; }`,
      keyBenefit: 'Use **percentages (%)** for responsive elements that should shrink or grow with the viewport/parent.',
    },
    {
      title: 'height',
      icon: Layers,
      color: 'text-green-600',
      description: 'Sets the vertical dimension of the element\'s content area. The default value is **`auto`**, meaning it grows to fit its content. Block elements ignore `height` unless their parent has a defined height.',
      syntaxCode: `.hero {\n  height: 500px;\n}\n\n.full-screen { height: 100vh; }`,
      keyBenefit: 'Use **`vh` (viewport height)** units for making full-screen sections that adapt to the browser window size.',
    },
    {
      title: 'min-width / max-width',
      icon: Target,
      color: 'text-blue-600',
      description: 'These are your **most important responsive tools**. They override the standard `width` to ensure the element never gets smaller than the `min-width` or larger than the `max-width`.',
      syntaxCode: `.card {\n  width: 90%;\n  max-width: 400px; /* Never wider than 400px */\n}\n.logo { min-width: 150px; }`,
      keyBenefit: 'Always pair a **percentage width** with a **`max-width` (in px)** to make elements fluid but controllable.',
    },
    {
      title: 'min-height / max-height',
      icon: Ruler,
      color: 'text-purple-600',
      description: 'Prevents the element\'s height from collapsing below a minimum size (`min-height`) or expanding beyond a maximum limit (`max-height`), regardless of content length.',
      syntaxCode: `.content-box {\n  min-height: 200px;\n  max-height: 80vh;\n  overflow-y: auto;\n}`,
      keyBenefit: 'Use **`min-height`** to ensure empty or short content sections maintain a consistent visual presence on the page.',
    },
  ];
  
  const widthCode = childWidthUnit === 'percent' 
    ? `.child {\n  width: ${childWidthValue}%; /* Fluid */\n}`
    : `.child {\n  width: ${childWidthValue}px; /* Fixed */\n}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50/30 to-slate-50 dark:from-slate-900 dark:via-violet-900/10 dark:to-slate-900">
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="relative px-6 lg:px-12 py-16 lg:py-24 text-center bg-white dark:bg-slate-800/90 rounded-b-3xl shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-pink-600 to-red-600 shadow-2xl mb-8">
            <Ruler className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-red-600 to-orange-600 mb-6 leading-tight">
            CSS Height & Width
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Master the properties that define the size of your elements, from fixed pixels to dynamic units.
          </p>
          <div className="flex items-center justify-center mt-8 space-x-4">
            <div className="flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-slate-700/80 rounded-full backdrop-blur-sm">
              <Maximize className="w-5 h-5 text-indigo-500" />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Dimension Control</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-slate-700/80 rounded-full backdrop-blur-sm">
              <Target className="w-5 h-5 text-purple-500" />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Responsiveness</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 lg:px-12 py-12 lg:py-20">
        
        {/* Section 1: Core Dimension Properties (Vertical Stack) */}
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <BookOpen className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 1: Basic and Constraint Properties
            </h2>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-4xl">
            Dimensions are defined on the **content area** of the element and are affected by the **Box Model**.
          </p>

          <div className="space-y-12">
            {dimensionProperties.map((prop, index) => (
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

        {/* Section 2: Fixed vs. Fluid Width (Interactive) */}
        <section className="mb-20 p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border-2 border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-12">
            <Layers className="w-8 h-8 mr-4 text-teal-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 2: Interactive Width Demo (Fixed vs. Fluid)
            </h2>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-4xl">
            Watch how a child element's width behaves when its parent container size changes, based on whether the child uses **fixed pixels** or **fluid percentages**.
          </p>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Controls */}
            <div className="space-y-6">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Controls</h4>
                
                {/* Container Width Slider */}
                <div className="space-y-2">
                    <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block">1. Parent Container Width: <span className="text-red-600 font-extrabold">{containerWidth}px</span></label>
                    <input
                        type="range"
                        min="300"
                        max="800"
                        step="10"
                        value={containerWidth}
                        onChange={(e) => setContainerWidth(parseInt(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-slate-700"
                    />
                </div>

                {/* Width Unit Toggle */}
                <div className="space-y-2">
                    <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block mb-3">2. Child Element Width Unit</label>
                    <div className="flex space-x-4">
                        <button
                            onClick={() => setChildWidthUnit('percent')}
                            className={`p-3 rounded-xl font-bold transition-all shadow-md border-2 ${childWidthUnit === 'percent' ? 'bg-indigo-600 text-white border-indigo-700 shadow-lg' : 'bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:bg-indigo-50 dark:hover:bg-slate-600 border-slate-300'}`}
                        >
                            % (Fluid)
                        </button>
                        <button
                            onClick={() => setChildWidthUnit('pixel')}
                            className={`p-3 rounded-xl font-bold transition-all shadow-md border-2 ${childWidthUnit === 'pixel' ? 'bg-indigo-600 text-white border-indigo-700 shadow-lg' : 'bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:bg-indigo-50 dark:hover:bg-slate-600 border-slate-300'}`}
                        >
                            px (Fixed)
                        </button>
                    </div>
                </div>

                {/* Width Value Slider (Changes Label based on Unit) */}
                <div className="space-y-2">
                    <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block">3. Child Width Value: 
                        <span className="text-cyan-600 font-extrabold ml-1">
                            {childWidthValue}{childWidthUnit === 'percent' ? '%' : 'px'}
                        </span>
                    </label>
                    <input
                        type="range"
                        min="10"
                        max={childWidthUnit === 'percent' ? "100" : "300"} // Max 300px if fixed
                        step={childWidthUnit === 'percent' ? "5" : "10"}
                        value={childWidthValue}
                        onChange={(e) => setChildWidthValue(parseInt(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-slate-700"
                    />
                </div>

                <div className="p-4 bg-indigo-100 dark:bg-indigo-900/40 rounded-xl mt-6 font-mono text-sm text-indigo-800 dark:text-indigo-300">
                    <p className="font-bold mb-1">Resulting Width:</p>
                    <p>Parent: {containerWidth}px</p>
                    <p>Child CSS: {childWidthValue}{childWidthUnit === 'percent' ? '%' : 'px'}</p>
                    <p className="font-bold text-lg mt-2 text-pink-600 dark:text-pink-400">
                        Final Rendered Width: {Math.round(finalChildWidth)}px
                    </p>
                </div>
            </div>
            
            {/* Live Preview and CSS Output */}
            <div className="space-y-4">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">Visual Result</h4>

                <div className="p-4 bg-slate-200 dark:bg-slate-700 rounded-xl shadow-inner flex flex-col items-start justify-start">
                    
                    {/* Parent Container */}
                    <div 
                        className="transition-all duration-300 border-2 border-dashed border-red-500/70 p-2 bg-red-100 dark:bg-red-900/40"
                        style={{ width: `${containerWidth}px` }}
                    >
                        <p className="text-xs font-semibold text-red-700 dark:text-red-300 mb-2">Parent ({containerWidth}px)</p>
                        
                        {/* Child Box */}
                        <div 
                            className="bg-blue-600 dark:bg-blue-800 rounded-sm flex items-center justify-center text-white font-bold text-sm overflow-hidden shadow-lg transition-all duration-300"
                            style={{ 
                                width: childWidthUnit === 'percent' ? `${childWidthValue}%` : `${childWidthValue}px`, 
                                height: '50px', 
                            }}
                        >
                            Child ({childWidthValue}{childWidthUnit === 'percent' ? '%' : 'px'})
                        </div>
                    </div>
                </div>

                <h4 className="text-xl font-bold text-slate-900 dark:text-white mt-8">Code Used:</h4>
                <InteractiveCodeBlock 
                    code={`.container {\n  width: ${containerWidth}px;\n}\n\n.child {\n  width: ${childWidthValue}${childWidthUnit === 'percent' ? '%' : 'px'};\n}`} 
                    title="Fixed vs. Fluid"
                />
            </div>
          </div>
        </section>


        {/* Success Message */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 to-purple-600 p-12 lg:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10">
            <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Lesson Complete: Dimension Control Secured!
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              You've mastered setting element sizes and understand the responsive power of `min/max` constraints.
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

export default CssHeightWidth;
