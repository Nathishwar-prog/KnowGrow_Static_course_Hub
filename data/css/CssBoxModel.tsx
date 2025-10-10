import React, { useState, useMemo } from 'react';
import { BookOpen, Code, CheckCircle, ArrowRight, Layers, Maximize, Ruler, Lightbulb, Box, Zap, Target, AlignCenter, LayoutGrid } from 'lucide-react';

const CssBoxModel = () => {
  // Interactive Demo State
  const [contentWidth] = useState(200);
  const [padding, setPadding] = useState(20);
  const [border, setBorder] = useState(5);
  const [margin, setMargin] = useState(30);
  const [boxSizingType, setBoxSizingType] = useState('content-box');

  // Logic to calculate the element's resulting widths based on box-sizing
  const { totalContentWidth, totalElementWidth, totalOuterWidth } = useMemo(() => {
    let contentW = contentWidth;
    let elementW; // Width including padding and border
    let outerW;   // Width including margin

    if (boxSizingType === 'content-box') {
      elementW = contentW + (2 * padding) + (2 * border);
      outerW = elementW + (2 * margin);
    } else { // border-box
      // In border-box, padding and border are subtracted from the defined contentWidth
      elementW = contentW;
      outerW = elementW + (2 * margin);
    }

    // When using border-box, the visual content area width shrinks
    const visualContentW = boxSizingType === 'border-box' ? (elementW - (2 * padding) - (2 * border)) : contentW;

    return {
      totalContentWidth: visualContentW,
      totalElementWidth: elementW,
      totalOuterWidth: outerW,
    };
  }, [contentWidth, padding, border, margin, boxSizingType]);


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
                  if (part.match(/^(div|\.[\w-]+|#[\w-]+|\.box)$/)) {
                    return <span key={j} className="text-amber-400 font-semibold">{part}</span>; // Selectors
                  }
                  if (part.match(/^(width|height|padding|border|margin|box-sizing|background-color)$/)) {
                    return <span key={j} className="text-cyan-400">{part}</span>; // Properties/Attributes
                  }
                  if (['{', '}', ':', ';'].includes(part)) {
                    return <span key={j} className="text-pink-400 font-bold">{part}</span>; // Punctuation
                  }
                  if (part.match(/^(#[0-9a-fA-F]+|content-box|border-box|\d+px|solid)$/)) {
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

  // Data for Box Model Layers
  const boxModelLayers = [
    {
      title: '1. Content',
      icon: Code,
      color: 'text-red-600',
      description: 'The innermost area where the element\'s **actual content** (text, images, other elements) resides. Its size is controlled by `width` and `height`.',
      syntaxCode: `div {\n  width: 200px;\n  height: 100px;\n}`,
      keyBenefit: 'This is the only layer that holds user-visible information.',
    },
    {
      title: '2. Padding',
      icon: Layers,
      color: 'text-green-600',
      description: 'The **internal space or cushion** between the content and the border. Padding takes the background color of the element.',
      syntaxCode: `div {\n  padding: 20px 40px;\n}`,
      keyBenefit: 'Use padding to create necessary **readability gutters** and increase the clickable area of buttons.',
    },
    {
      title: '3. Border',
      icon: Target,
      color: 'text-blue-600',
      description: 'The customizable **visual boundary** surrounding the padding and content. It requires `width`, `style`, and `color` to be visible.',
      syntaxCode: `div {\n  border: 5px solid #4f46e5;\n}`,
      keyBenefit: 'Borders are the visual divider between the element and its external space.',
    },
    {
      title: '4. Margin',
      icon: Maximize,
      color: 'text-purple-600',
      description: 'The **external space** that separates the element from other elements. Margins are always transparent.',
      syntaxCode: `div {\n  margin: 30px auto;\n}`,
      keyBenefit: 'Use margins for **horizontal centering** (`margin: 0 auto;`) and controlling element-to-element flow.',
    },
  ];

  const boxSizingStyles = [
    { label: 'content-box (Default)', value: 'content-box', description: 'Padding and Border **ADD** to the width/height.' },
    { label: 'border-box (Modern)', value: 'border-box', description: 'Padding and Border are **INCLUDED** in the width/height.' },
  ];

  // Helper to display the calculated width in the visualizer
  const renderWidthInfo = (label, width, color) => (
    <div className="flex justify-between font-mono text-sm">
        <span className={`font-semibold ${color}`}>{label}:</span>
        <span className={`font-bold ${color}`}>{Math.round(width)}px</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50/30 to-slate-50 dark:from-slate-900 dark:via-violet-900/10 dark:to-slate-900">
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="relative px-6 lg:px-12 py-16 lg:py-24 text-center bg-white dark:bg-slate-800/90 rounded-b-3xl shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-pink-600 to-indigo-600 shadow-2xl mb-8">
            <Box className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-indigo-600 to-violet-600 mb-6 leading-tight">
            CSS Box Model
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Every HTML element is a rectangular box. Understand its four layers: Content, Padding, Border, and Margin.
          </p>
          <div className="flex items-center justify-center mt-8 space-x-4">
            <div className="flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-slate-700/80 rounded-full backdrop-blur-sm">
              <LayoutGrid className="w-5 h-5 text-indigo-500" />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Layout Foundation</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-slate-700/80 rounded-full backdrop-blur-sm">
              <Zap className="w-5 h-5 text-yellow-500" />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Critical for Sizing</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 lg:px-12 py-12 lg:py-20">
        
        {/* Section 1: The Four Layers (Vertical Stack) */}
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <BookOpen className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 1: The Four Core Layers
            </h2>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-4xl">
            The box model consists of four concentric layers, starting from the content and extending outward to the margin.
          </p>

          <div className="space-y-12">
            {boxModelLayers.map((prop, index) => (
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

        {/* Section 2: Interactive Box Model (Interactive) */}
        <section className="mb-20 p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border-2 border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-12">
            <Maximize className="w-8 h-8 mr-4 text-teal-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 2: Interactive Box Model & `box-sizing`
            </h2>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-4xl">
            Use the controls to adjust the layers and observe how **padding** and **border** affect the final size, depending on the `box-sizing` property.
          </p>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Controls */}
            <div className="space-y-6">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Box Layer Controls</h4>
                
                {/* Box Sizing Selector */}
                <div>
                    <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block mb-3">1. `box-sizing` Property</label>
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

                {/* Padding Slider */}
                <div className="space-y-2 pt-4">
                    <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block">2. Padding: <span className="text-green-600 font-extrabold">{padding}px</span></label>
                    <input
                        type="range"
                        min="0"
                        max="50"
                        value={padding}
                        onChange={(e) => setPadding(parseInt(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-slate-700"
                    />
                </div>

                {/* Border Slider */}
                <div className="space-y-2">
                    <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block">3. Border: <span className="text-blue-600 font-extrabold">{border}px</span></label>
                    <input
                        type="range"
                        min="0"
                        max="20"
                        value={border}
                        onChange={(e) => setBorder(parseInt(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-slate-700"
                    />
                </div>

                {/* Margin Slider */}
                <div className="space-y-2">
                    <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block">4. Margin: <span className="text-purple-600 font-extrabold">{margin}px</span></label>
                    <input
                        type="range"
                        min="0"
                        max="50"
                        value={margin}
                        onChange={(e) => setMargin(parseInt(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-slate-700"
                    />
                </div>
            </div>
            
            {/* Live Visualization and Calculation */}
            <div className="space-y-6">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">Visual Result & Calculations</h4>
                
                {/* Visualization */}
                <div className="flex flex-col items-center p-4 bg-slate-100 dark:bg-slate-700 rounded-xl shadow-inner border border-slate-300 dark:border-slate-600">
                    
                    {/* Margin Area (Outer Container) */}
                    <div 
                        className="bg-purple-300/30 dark:bg-purple-900/40 flex items-center justify-center transition-all duration-300 shadow-xl"
                        style={{ 
                            width: `${totalOuterWidth}px`, 
                            height: '250px',
                            margin: `${margin}px`,
                        }}
                    >
                        {/* Box (Padding + Border + Content) */}
                        <div 
                            className="bg-blue-200/50 dark:bg-blue-900/40 flex flex-col items-center justify-center transition-all duration-300"
                            style={{
                                width: `${totalElementWidth}px`, 
                                height: `${contentWidth + (2 * padding) + (2 * border)}px`, // Height is fixed for simplicity
                                border: `${border}px solid #10B981`, // emerald-500
                                padding: `${padding}px`,
                                boxSizing: 'content-box', /* Use content-box here to apply the padding/border visually */
                            }}
                        >
                            {/* Content Area */}
                            <div 
                                className="bg-red-500 dark:bg-red-700 flex items-center justify-center text-white font-bold text-sm transition-all duration-300 overflow-hidden"
                                style={{
                                    width: `${totalContentWidth}px`,
                                    height: `${contentWidth - (boxSizingType === 'border-box' ? (2 * padding) + (2 * border) : 0)}px`,
                                    minWidth: 50,
                                }}
                            >
                                Content ({Math.round(totalContentWidth)}px)
                            </div>
                        </div>
                    </div>
                </div>

                {/* Calculations */}
                <div className="p-4 bg-indigo-100 dark:bg-indigo-900/40 rounded-xl font-mono text-sm text-indigo-800 dark:text-indigo-300 shadow-md">
                    <div className="font-bold text-lg mb-2 text-pink-600 dark:text-pink-400">Total Size Breakdown (Horizontal)</div>
                    {/* Replaced <p> with <div> below to fix DOM nesting issue */}
                    <div className="space-y-1">
                        {renderWidthInfo('1. Content Area (Fixed)', contentWidth, 'text-red-700 dark:text-red-300')}
                        {boxSizingType === 'content-box' ? 
                            renderWidthInfo('   + Padding (2x)', padding * 2, 'text-green-700 dark:text-green-300') : 
                            renderWidthInfo('   - Padding (2x)', padding * 2, 'text-green-700 dark:text-green-300')
                        }
                        {boxSizingType === 'content-box' ? 
                            renderWidthInfo('   + Border (2x)', border * 2, 'text-blue-700 dark:text-blue-300') :
                            renderWidthInfo('   - Border (2x)', border * 2, 'text-blue-700 dark:text-blue-300')
                        }
                        <hr className="my-2 border-indigo-300 dark:border-indigo-600"/>
                        {renderWidthInfo('Total Element Width', totalElementWidth, 'text-cyan-700 dark:text-cyan-300')}
                        {renderWidthInfo('+ Margin (2x)', margin * 2, 'text-purple-700 dark:text-purple-300')}
                        <hr className="my-2 border-indigo-300 dark:border-indigo-600"/>
                        {/* THIS LINE WAS THE FINAL ISSUE: Changed <p> to <div> */}
                        <div className="font-bold text-lg mt-2">
                            {renderWidthInfo('Total Space Occupied', totalOuterWidth, 'text-pink-600 dark:text-pink-400')}
                        </div>
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
              Lesson Complete: The Box Model Mastered!
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              You now have the structural foundation for all CSS layout and sizing decisions.
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

export default CssBoxModel;
