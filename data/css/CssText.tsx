import React, { useState } from 'react';
import {
  BookOpen, Target, Code, CheckCircle, ArrowRight,
  Layers, Lightbulb, Type, AlignLeft, Aperture, Palette, Minus, Sun
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
                if (part.includes('/*') || part.includes('*/')) {
                  return <span key={j} className="text-slate-500 italic font-semibold">{part}</span>;
                }
                if (part.match(/^(p|\.[\w-]+|#[\w-]+|\.text-box)$/)) {
                  return <span key={j} className="text-amber-400 font-semibold">{part}</span>;
                }
                if (part.match(/^(color|text-align|font-size|text-decoration|line-height|letter-spacing|text-shadow)$/)) {
                  return <span key={j} className="text-cyan-400">{part}</span>;
                }
                if (['{', '}', ':', ';'].includes(part)) {
                  return <span key={j} className="text-pink-400 font-bold">{part}</span>;
                }
                if (part.match(/^(#[0-9a-fA-F]+|solid|dotted|center|justify|underline|\d+px|\d+em)$/)) {
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

/**
 * A visually distinct card for explaining individual text properties.
 */
const TextPropertyCard = ({ title, icon, color, description, syntaxCode, keyBenefit }) => {
  const Icon = icon;
  return (
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
};


// --- Main Component ---
function CssText() {
  const [textColor, setTextColor] = useState('#007bff');
  const [shadowX, setShadowX] = useState(2);
  const [shadowY, setShadowY] = useState(2);
  const [shadowBlur, setShadowBlur] = useState(4);
  const [textAlign, setTextAlign] = useState('center');
  const shadowColor = 'rgba(0,0,0,0.5)';

  const formattingProperties = [
    {
      title: 'color',
      icon: Palette,
      color: 'text-red-600',
      description: 'Sets the **foreground color** of an element\'s text. Can accept HEX, RGB, HSL, or named colors.',
      syntaxCode: `p {\n  color: #333333;\n}`,
      keyBenefit: 'Always ensure your color choice provides high contrast with the background for readability (Accessibility).',
    },
    {
      title: 'text-align',
      icon: AlignLeft,
      color: 'text-blue-600',
      description: 'Aligns the **inline content** (text) within a block-level element. Common values are `left`, `right`, `center`, and `justify`.',
      syntaxCode: `h1 {\n  text-align: center;\n}`,
      keyBenefit: 'Avoid using `justify` on small blocks of text, as it can create distracting white gaps between words.',
    },
    {
      title: 'text-decoration',
      icon: Minus,
      color: 'text-purple-600',
      description: 'Adds lines to the text, usually used for **underlines** (`underline`), strikethroughs (`line-through`), or removing link underlines (`none`).',
      syntaxCode: `a {\n  text-decoration: none;\n}`,
      keyBenefit: 'Use \`text-decoration: none\` on links, but always provide an alternative hover state for clarity.',
    },
  ];

  const spacingProperties = [
    {
      title: 'line-height',
      icon: Layers,
      color: 'text-teal-600',
      description: 'Controls the **vertical spacing** between lines of text (the distance from one baseline to the next). Usually set as a unitless value (e.g., 1.5).',
      syntaxCode: `p {\n  line-height: 1.6;\n}`,
      keyBenefit: 'A unitless value (1.5, 1.6) is preferred as it scales relative to the font-size of the element.',
    },
    {
      title: 'letter-spacing',
      icon: Aperture,
      color: 'text-orange-600',
      description: 'Controls the **horizontal spacing** between characters. Can be used to tighten or loosen text.',
      syntaxCode: `h2 {\n  letter-spacing: 0.1em;\n}`,
      keyBenefit: 'Subtle positive letter-spacing (0.05em) can make capitalized headings look more professional.',
    },
    {
      title: 'text-shadow',
      icon: Sun,
      color: 'text-yellow-600',
      description: 'Applies a **shadow** effect to the text. Takes X-offset, Y-offset, blur radius, and color.',
      syntaxCode: `h1 {\n  text-shadow: 2px 2px 4px #000000;\n}`,
      keyBenefit: 'Can be used to add depth or help text stand out against a busy background image.',
    },
  ];

  const textAlignOptions = [
    { value: 'left', label: 'Left' },
    { value: 'center', label: 'Center' },
    { value: 'right', label: 'Right' },
    { value: 'justify', label: 'Justify' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50/30 to-slate-50 dark:from-slate-900 dark:via-violet-900/10 dark:to-slate-900">
      
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="relative px-6 lg:px-12 py-16 lg:py-24 text-center bg-white dark:bg-slate-800/90 rounded-b-3xl shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-pink-600 to-indigo-600 shadow-2xl mb-8">
            <Type className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-indigo-600 to-violet-600 mb-6 leading-tight">
            CSS Text Styling
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Control the appearance, layout, and visual effects of your typography.
          </p>
        </div>
      </header>

      <main className="px-6 lg:px-12 py-12 lg:py-20">
        
        {/* Section 1: Formatting Fundamentals (NOW VERTICAL) */}
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <AlignLeft className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 1: Core Text Formatting
            </h2>
          </div>
          {/* Changed from grid to vertical space-y-8 */}
          <div className="space-y-8">
            {formattingProperties.map((prop, index) => (
              <TextPropertyCard key={index} {...prop} />
            ))}
          </div>
        </section>
        
        {/* Section 2: Interactive Text Playground (Layout unchanged as it uses columns for controls/demo) */}
        <section className="mb-20 p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border-2 border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-12">
            <Aperture className="w-8 h-8 mr-4 text-teal-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 2: Live Text Playground
            </h2>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-4xl">
            Use the controls below to instantly visualize how `color`, `text-shadow`, and `text-align` affect the text appearance.
          </p>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Controls Column */}
            <div className="space-y-6">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Appearance Controls</h4>
                
                {/* Color Picker */}
                <div className="space-y-2 pt-4 flex items-center justify-between">
                    <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block">Text Color</label>
                    <input
                        type="color"
                        value={textColor}
                        onChange={(e) => setTextColor(e.target.value)}
                        className="w-10 h-10 border-none rounded-full cursor-pointer"
                    />
                </div>

                {/* Text Align Selector */}
                <div className="space-y-2">
                    <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block">Alignment</label>
                    <select
                        value={textAlign}
                        onChange={(e) => setTextAlign(e.target.value)}
                        className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors"
                    >
                        {textAlignOptions.map((option) => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </div>

                <h4 className="text-xl font-bold text-slate-900 dark:text-white pt-4 border-t border-slate-200 dark:border-slate-700">Text Shadow Controls</h4>
                
                {/* Shadow X Offset */}
                <div className="space-y-2">
                    <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block">X Offset: <span className="text-green-600 font-extrabold">{shadowX}px</span></label>
                    <input
                        type="range" min="-10" max="10" value={shadowX}
                        onChange={(e) => setShadowX(parseInt(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700"
                    />
                </div>
                
                {/* Shadow Y Offset */}
                <div className="space-y-2">
                    <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block">Y Offset: <span className="text-green-600 font-extrabold">{shadowY}px</span></label>
                    <input
                        type="range" min="-10" max="10" value={shadowY}
                        onChange={(e) => setShadowY(parseInt(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700"
                    />
                </div>

                {/* Shadow Blur */}
                <div className="space-y-2">
                    <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block">Blur Radius: <span className="text-green-600 font-extrabold">{shadowBlur}px</span></label>
                    <input
                        type="range" min="0" max="15" value={shadowBlur}
                        onChange={(e) => setShadowBlur(parseInt(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700"
                    />
                </div>
            </div>
            
            {/* Demonstration Column */}
            <div className="space-y-6">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">Live Preview</h4>
                <div className="h-48 flex items-center justify-center p-4 bg-gray-100 dark:bg-slate-700 rounded-xl shadow-inner border border-slate-300 dark:border-slate-600">
                    <p 
                        className="text-4xl font-extrabold transition-all duration-300"
                        style={{
                            color: textColor,
                            textAlign: textAlign,
                            textShadow: `${shadowX}px ${shadowY}px ${shadowBlur}px ${shadowColor}`,
                        }}
                    >
                        CSS Text Magic ✨
                    </p>
                </div>
                
                <InteractiveCodeBlock 
                    code={`.text-box {\n  color: ${textColor};\n  text-align: ${textAlign};\n  text-shadow: ${shadowX}px ${shadowY}px ${shadowBlur}px ${shadowColor};\n}`}
                    title="Live CSS Output"
                />
            </div>
          </div>
        </section>

        {/* Section 3: Spacing and Effects (NOW VERTICAL) */}
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <Code className="w-8 h-8 mr-4 text-purple-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 3: Spacing & Other Effects
            </h2>
          </div>
          {/* Changed from grid to vertical space-y-8 */}
          <div className="space-y-8">
            {spacingProperties.map((prop, index) => (
              <TextPropertyCard key={index} {...prop} />
            ))}
          </div>
        </section>

        {/* Success Message */}
        <footer className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 to-purple-600 p-12 lg:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10">
            <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">Lesson Complete: Text Styling Mastered!</h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              You now have the tools to style any text, from simple colors to complex shadow effects and precise spacing.
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
}

export default CssText;
