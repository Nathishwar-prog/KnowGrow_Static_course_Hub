import React, { useState, useMemo } from 'react';
import { BookOpen, Palette, Code, CheckCircle, ArrowRight, Monitor, Layers, Maximize, Target, PenTool, Feather, Square, Lightbulb } from 'lucide-react';

const CssBorders = () => {
  // State for the Live Border Sandbox
  const [liveBorderStyle, setLiveBorderStyle] = useState('solid');
  const [liveBorderWidth, setLiveBorderWidth] = useState(6); // in pixels
  const [liveBorderRadius, setLiveBorderRadius] = useState(15); // in pixels
  const [liveBorderColor, setLiveBorderColor] = useState('#6366F1');

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
                  if (part.match(/^(border-width|border-style|border-color|border-radius|border)$/)) {
                    return <span key={j} className="text-cyan-400">{part}</span>; // Properties/Attributes
                  }
                  if (['{', '}', ':', ';'].includes(part)) {
                    return <span key={j} className="text-pink-400 font-bold">{part}</span>; // Punctuation
                  }
                  if (part.match(/^(#[0-9a-fA-F]+|rgb\(.*?\)|hsl\(.*?\)|solid|dashed|dotted|groove|ridge|inset|outset|none|transparent)$/)) {
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

  // Data for Border Properties
  const borderProperties = [
    {
      title: 'border-style',
      icon: PenTool,
      color: 'text-red-600',
      description: 'The **single most important property** for borders. It determines the visual appearance (e.g., **solid**, **dashed**, **dotted**). If this is not set, the border will not be visible.',
      syntaxCode: `.box { border-style: dotted; }`,
      keyBenefit: 'Choose from **nine distinct styles** (like groove, ridge, inset, outset) for unique 3D effects.',
    },
    {
      title: 'border-width',
      icon: Maximize,
      color: 'text-green-600',
      description: 'Sets the thickness of the border. It can be defined in pixels (**px**), viewport units, or using keywords (**thin**, **medium**, **thick**). You can use **1 to 4 values** to set widths for different sides.',
      syntaxCode: `div {\n  border-width: 5px 10px; /* Top/Bottom is 5px, Left/Right is 10px */\n}`,
      keyBenefit: 'Using **length units (px)** is highly recommended over keywords for precise cross-browser consistency.',
    },
    {
      title: 'border-color',
      icon: Palette,
      color: 'text-blue-600',
      description: 'Defines the color of the border. It accepts any valid CSS color value (HEX, RGB, HSL). If omitted, the color will default to the element\'s **`color`** property (text color).',
      syntaxCode: `.btn {\n  border-color: #33A8FF #000;\n}`,
      keyBenefit: 'To create a floating effect, set all border styles, but set one side to **`transparent`**.',
    },
    {
      title: 'border-radius',
      icon: Target,
      color: 'text-purple-600',
      description: 'The modern way to style corners. It creates **rounded corners** using length units (px) or percentages (%). Using **4 separate values** allows for unique, asymmetric shapes.',
      syntaxCode: `.circle {\n  border-radius: 50%;\n}\n.blob { border-radius: 10px 50px 0 30px; }`,
      keyBenefit: 'Use **`50%`** on a square element with equal width/height to instantly create a perfect circle.',
    },
    {
      title: 'border Shorthand',
      icon: Code,
      color: 'text-teal-600',
      description: 'The most efficient way to declare a border. It combines **`border-width`**, **`border-style`**, and **`border-color`** into a single line. The order is generally flexible, but consistency is key.',
      syntaxCode: `.alert {\n  /* Width | Style | Color */\n  border: 2px solid #DC2626;\n}`,
      keyBenefit: 'Shorthand is excellent, but remember it **resets all individual border properties** first.',
    },
  ];

  const borderStyles = [
      { label: 'solid', style: 'solid' }, 
      { label: 'dotted', style: 'dotted' }, 
      { label: 'dashed', style: 'dashed' }, 
      { label: 'double', style: 'double' },
      { label: 'groove', style: 'groove' },
      { label: 'ridge', style: 'ridge' },
  ];

  const liveCssCode = useMemo(() => {
      return `.preview-box {\n  border-width: ${liveBorderWidth}px;\n  border-style: ${liveBorderStyle};\n  border-color: ${liveBorderColor};\n  border-radius: ${liveBorderRadius}px;\n}`;
  }, [liveBorderWidth, liveBorderStyle, liveBorderColor, liveBorderRadius]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50/30 to-slate-50 dark:from-slate-900 dark:via-violet-900/10 dark:to-slate-900">
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="relative px-6 lg:px-12 py-16 lg:py-24 text-center bg-white dark:bg-slate-800/90 rounded-b-3xl shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-pink-600 to-red-600 shadow-2xl mb-8">
            <Square className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-red-600 to-orange-600 mb-6 leading-tight">
            CSS Borders: The Element Frame
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Learn to define the edge of any element using thickness, style, color, and rounding.
          </p>
          <div className="flex items-center justify-center mt-8 space-x-4">
            <div className="flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-slate-700/80 rounded-full backdrop-blur-sm">
              <Feather className="w-5 h-5 text-indigo-500" />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Precision Styling</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-slate-700/80 rounded-full backdrop-blur-sm">
              <Target className="w-5 h-5 text-purple-500" />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Shape Control</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 lg:px-12 py-12 lg:py-20">
        
        {/* Section 1: Core Border Properties (Vertical Stack) */}
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <BookOpen className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 1: The Four Pillars of Border Styling
            </h2>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-4xl">
            A border requires a minimum of **style** to be visible. Once visible, you can control its width, color, and curvature.
          </p>

          <div className="space-y-12">
            {borderProperties.map((prop, index) => (
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

        {/* Section 2: Live Border Sandbox (Interactive) */}
        <section className="mb-20 p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border-2 border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-12">
            <Square className="w-8 h-8 mr-4 text-orange-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 2: Live Border Sandbox
            </h2>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-4xl">
            Adjust the controls below to see the combined effect of border properties on a live box.
          </p>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Controls */}
            <div className="space-y-6">
                
                {/* Border Style Selector */}
                <div>
                    <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block mb-3">1. Border Style (`border-style`)</label>
                    <div className="flex flex-wrap gap-2">
                        {borderStyles.map(b => (
                            <button
                                key={b.label}
                                onClick={() => setLiveBorderStyle(b.style)}
                                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all shadow-md ${liveBorderStyle === b.style ? 'bg-indigo-600 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-indigo-100 dark:hover:bg-slate-600'}`}
                            >
                                {b.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Border Width Slider */}
                <div className="space-y-2">
                    <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block">2. Border Width (`border-width`): {liveBorderWidth}px</label>
                    <input
                        type="range"
                        min="0"
                        max="20"
                        value={liveBorderWidth}
                        onChange={(e) => setLiveBorderWidth(parseInt(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-slate-700"
                    />
                </div>

                {/* Border Radius Slider */}
                <div className="space-y-2">
                    <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block">3. Border Radius (`border-radius`): {liveBorderRadius}px</label>
                    <input
                        type="range"
                        min="0"
                        max="50"
                        value={liveBorderRadius}
                        onChange={(e) => setLiveBorderRadius(parseInt(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-slate-700"
                    />
                </div>

                 {/* Border Color Picker */}
                <div className="space-y-2">
                    <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block">4. Border Color (`border-color`)</label>
                    <input
                        type="color"
                        value={liveBorderColor}
                        onChange={(e) => setLiveBorderColor(e.target.value)}
                        className="w-full h-10 p-1 border-2 border-slate-300 rounded-xl cursor-pointer bg-white dark:bg-slate-700"
                    />
                </div>
            </div>
            
            {/* Live Preview and CSS Output */}
            <div className="space-y-8">
                {/* Live Preview Box */}
                <div className="flex items-center justify-center p-6 bg-slate-100 dark:bg-slate-700 rounded-xl shadow-inner h-64">
                    <div 
                        className="w-full h-full p-4 flex items-center justify-center text-center text-xl font-bold bg-white dark:bg-slate-900 rounded-xl shadow-lg transition-all duration-300"
                        style={{ 
                            borderStyle: liveBorderStyle,
                            borderWidth: `${liveBorderWidth}px`,
                            borderRadius: `${liveBorderRadius}px`,
                            borderColor: liveBorderColor,
                        }}
                    >
                        Live Preview Box
                    </div>
                </div>

                {/* CSS Output */}
                <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Resulting CSS Code</h4>
                    <InteractiveCodeBlock 
                        code={liveCssCode} 
                        title="Border Declaration"
                    />
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
              Lesson Complete: Border Styling Mastered!
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              You now know how to frame and round your elements with style and precision using the four key properties.
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

export default CssBorders;
