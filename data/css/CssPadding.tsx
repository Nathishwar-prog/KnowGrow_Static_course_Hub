import React, { useState, useMemo } from 'react';
import { BookOpen, Code, CheckCircle, ArrowRight, Layers, Maximize, Minus, LayoutGrid, Lightbulb, Zap, Target, Divide } from 'lucide-react';

const CssPadding = () => {
  const [paddingSize, setPaddingSize] = useState(20);
  const [contentWidth, setContentWidth] = useState(200);
  const [boxSizingType, setBoxSizingType] = useState('content-box');

  // Logic to calculate the element's resulting width
  const totalWidth = useMemo(() => {
    // Width is set to contentWidth, padding adds 2x to it
    if (boxSizingType === 'content-box') {
      return contentWidth + (paddingSize * 2);
    }
    // Width is fixed to contentWidth, padding is contained within
    return contentWidth;
  }, [contentWidth, paddingSize, boxSizingType]);

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
                  if (part.match(/^(padding|padding-top|padding-right|padding-bottom|padding-left|box-sizing|width)$/)) {
                    return <span key={j} className="text-cyan-400">{part}</span>; // Properties/Attributes
                  }
                  if (['{', '}', ':', ';'].includes(part)) {
                    return <span key={j} className="text-pink-400 font-bold">{part}</span>; // Punctuation
                  }
                  if (part.match(/^(#[0-9a-fA-F]+|content-box|border-box|\d+px)$/)) {
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

  // Data for Padding Properties
  const paddingProperties = [
    {
      title: 'padding-top / padding-bottom',
      icon: Maximize,
      color: 'text-red-600',
      description: 'Controls the **internal vertical space** above and below the element\'s content. Essential for spacing text away from the top and bottom borders.',
      syntaxCode: `.header {\n  padding-top: 2rem;\n  padding-bottom: 1rem;\n}`,
      keyBenefit: 'Always use padding (not margin) to create space *inside* a clickable element, like a button, ensuring the entire padded area is interactive.',
    },
    {
      title: 'padding-left / padding-right',
      icon: Layers,
      color: 'text-green-600',
      description: 'Controls the **internal horizontal space** on the left and right sides of the element\'s content. Critical for preventing text from hugging the edges.',
      syntaxCode: `.card-body {\n  padding-left: 20px;\n  padding-right: 20px;\n}`,
      keyBenefit: 'Horizontal padding is key to readability, especially on smaller screens, by creating a "gutter" inside your main content wrappers.',
    },
    {
      title: 'The `padding` Shorthand',
      icon: Code,
      color: 'text-blue-600',
      description: 'The most common way to declare padding, combining all four sides into one declaration using **1 to 4 values**. The order is always **Top, Right, Bottom, Left**.',
      syntaxCode: `.box-1 { padding: 20px; } /* All 4 sides */\n.box-2 { padding: 10px 20px; } /* Top/Bottom | Left/Right */\n.box-3 { padding: 5px 10px 15px 20px; } /* T | R | B | L */`,
      keyBenefit: 'The **2-value syntax (`10px 20px`)** is the best practice for setting vertical and horizontal padding uniformly.',
    },
  ];

  const boxSizingStyles = [
    { label: 'Content Box (Default)', value: 'content-box', description: 'Padding is **added** to the element\'s defined width/height.' },
    { label: 'Border Box (Modern)', value: 'border-box', description: 'Padding is **included** within the element\'s defined width/height.' },
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50/30 to-slate-50 dark:from-slate-900 dark:via-violet-900/10 dark:to-slate-900">
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="relative px-6 lg:px-12 py-16 lg:py-24 text-center bg-white dark:bg-slate-800/90 rounded-b-3xl shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-green-600 to-teal-600 shadow-2xl mb-8">
            <LayoutGrid className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-teal-600 to-cyan-600 mb-6 leading-tight">
            CSS Padding: Internal Cushioning
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Control the space **between** the content and the border of an element.
          </p>
          <div className="flex items-center justify-center mt-8 space-x-4">
            <div className="flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-slate-700/80 rounded-full backdrop-blur-sm">
              <Zap className="w-5 h-5 text-yellow-500" />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Content Clarity</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-slate-700/80 rounded-full backdrop-blur-sm">
              <Target className="w-5 h-5 text-purple-500" />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Visual Gutter</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 lg:px-12 py-12 lg:py-20">
        
        {/* Section 1: Core Padding Properties (Vertical Stack) */}
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <BookOpen className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 1: Individual and Shorthand Properties
            </h2>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-4xl">
            Padding is the empty space **inside** the element's border, increasing the visual area of the element.
          </p>

          <div className="space-y-12">
            {paddingProperties.map((prop, index) => (
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

        {/* Section 2: Padding's Impact on Layout (Interactive Box-Sizing) */}
        <section className="mb-20 p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border-2 border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-12">
            <Divide className="w-8 h-8 mr-4 text-orange-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 2: Padding and Box-Sizing
            </h2>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-4xl">
            Padding always increases the element's size, **unless** the `box-sizing: border-box` property is set.
          </p>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Controls */}
            <div className="space-y-6">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Interactive Size Calculator</h4>
                
                {/* Content Width Slider */}
                <div className="space-y-2">
                    <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block">1. Base Width: <span className="text-cyan-600 font-extrabold">{contentWidth}px</span></label>
                    <input
                        type="range"
                        min="100"
                        max="300"
                        step="10"
                        value={contentWidth}
                        onChange={(e) => setContentWidth(parseInt(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-slate-700"
                    />
                </div>

                {/* Padding Size Slider */}
                <div className="space-y-2">
                    <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block">2. Padding Size: <span className="text-green-600 font-extrabold">{paddingSize}px</span> (x2 for width)</label>
                    <input
                        type="range"
                        min="0"
                        max="50"
                        value={paddingSize}
                        onChange={(e) => setPaddingSize(parseInt(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-slate-700"
                    />
                </div>

                {/* Box Sizing Selector */}
                <div>
                    <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block mb-3">3. Box Sizing (`box-sizing`)</label>
                    <div className="flex flex-col space-y-3">
                        {boxSizingStyles.map(b => (
                            <button
                                key={b.value}
                                onClick={() => setBoxSizingType(b.value)}
                                className={`p-3 rounded-xl text-left transition-all shadow-md border-2 ${boxSizingType === b.value ? 'bg-indigo-600 text-white border-indigo-700 shadow-lg' : 'bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:bg-indigo-50 dark:hover:bg-slate-600 border-slate-300'}`}
                            >
                                <strong className="block text-lg">{b.label}</strong>
                                <span className="text-sm opacity-90">{b.description}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="p-4 bg-indigo-100 dark:bg-indigo-900/40 rounded-xl mt-6 font-mono text-sm text-indigo-800 dark:text-indigo-300">
                    <p className="font-bold mb-1">Resulting Dimensions:</p>
                    <p>Defined Width: {contentWidth}px</p>
                    <p>Padding (total horizontal): {paddingSize * 2}px</p>
                    <p className="font-bold text-lg mt-2 text-pink-600 dark:text-pink-400">
                        Final Width: {totalWidth}px
                    </p>
                </div>
            </div>
            
            {/* Live Preview and Explanation */}
            <div className="space-y-4">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">Visual Result</h4>

                <div className="p-4 bg-slate-200 dark:bg-slate-700 rounded-xl shadow-inner flex items-center justify-center">
                    
                    {/* The Box */}
                    <div 
                        className="transition-all duration-300 rounded-lg shadow-lg border-2 border-dashed border-gray-400 dark:border-gray-500"
                        style={{ 
                            width: `${totalWidth}px`, 
                            height: '150px', 
                            backgroundColor: '#60A5FA', // blue-400
                            boxSizing: boxSizingType,
                            padding: `${paddingSize}px`,
                        }}
                    >
                        <div 
                            className="w-full h-full bg-blue-600 dark:bg-blue-800 rounded-sm flex items-center justify-center text-white font-bold text-sm overflow-hidden"
                        >
                            <span className='px-1'>Content Area ({boxSizingType})</span>
                        </div>
                    </div>
                </div>

                <h4 className="text-xl font-bold text-slate-900 dark:text-white mt-8">Code Used:</h4>
                <InteractiveCodeBlock 
                    code={`.box {\n  width: ${contentWidth}px;\n  padding: ${paddingSize}px;\n  box-sizing: ${boxSizingType};\n}`} 
                    title="Layout Example"
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
              Lesson Complete: Padding Mastered!
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              You've secured the internal space and understand the vital role of `box-sizing`.
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

export default CssPadding;
