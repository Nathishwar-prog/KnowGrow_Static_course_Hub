import React, { useState } from 'react';
import { BookOpen, Palette, Code, CheckCircle, ArrowRight, Monitor, Layers, Image, Maximize, Sun, Lightbulb } from 'lucide-react';

const CssBackgrounds = () => {
  const [activeProperty, setActiveProperty] = useState('image'); // Used for the code tabs
  const [liveBgColor, setLiveBgColor] = useState('#6366F1');
  const [liveBgSize, setLiveBgSize] = useState('cover');

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
                  if (part.match(/^(p|h1|div|\.[\w-]+|#[\w-]+|\*|body|html)$/)) {
                    return <span key={j} className="text-amber-400 font-semibold">{part}</span>; // Selectors
                  }
                  if (part.match(/^(background-color|background-image|background-repeat|background-size|background-position|url)$/)) {
                    return <span key={j} className="text-cyan-400">{part}</span>; // Properties/Attributes
                  }
                  if (['{', '}', ':', ';'].includes(part)) {
                    return <span key={j} className="text-pink-400 font-bold">{part}</span>; // Punctuation
                  }
                  if (part.match(/^(#[0-9a-fA-F]+|rgb\(.*?\)|hsl\(.*?\)|no-repeat|repeat-x|repeat-y|cover|contain|center|top|bottom|left|right)$/)) {
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
  const PropertyCard = ({ title, icon: Icon, color, description, syntaxCode, keyBenefit, tabs, codeForTab }) => (
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
            {/* FIX: Replaced undefined Zap with the defined Lightbulb icon */}
            <Lightbulb className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1"/>
            <p className="text-sm font-semibold text-indigo-700 dark:text-indigo-300">
                **Key Tip:** {keyBenefit}
            </p>
        </div>
      </div>
    </div>
  );
  
  // Data for Background Properties
  const backgroundProperties = [
    {
      title: 'background-color',
      icon: Palette,
      color: 'text-red-600',
      description: 'Sets the **solid color** that fills the entire content, padding, and border area of an element. This color appears *behind* any background images.',
      syntaxCode: `div {\n  background-color: #F87171; /* A standard HEX value */\n}`,
      keyBenefit: 'Always serves as a **fallback** if your background image fails to load.',
    },
    {
      title: 'background-image',
      icon: Image,
      color: 'text-green-600',
      description: 'Specifies one or more **images or gradients** to be used as the background. Use the **`url()`** function for images and **`linear-gradient()`** or **`radial-gradient()`** for gradients.',
      syntaxCode: `.hero {\n  background-image: url('image.jpg');\n  background-color: #CCC;\n}`,
      keyBenefit: 'Multiple images can be layered, separated by **commas**, with the first image being on top.',
    },
    {
      title: 'background-repeat',
      icon: Layers,
      color: 'text-blue-600',
      description: 'Determines how background images are **repeated** to fill the element. Common values are **`repeat-x`** (horizontal), **`repeat-y`** (vertical), and **`no-repeat`** (used most often for single images).',
      syntaxCode: `.watermark {\n  background-repeat: no-repeat;\n}`,
      keyBenefit: 'Use **`space`** to evenly distribute non-tiling images without clipping them.',
    },
    {
      title: 'background-position',
      icon: Maximize,
      color: 'text-purple-600',
      description: 'Sets the **starting position** of the background image. You can use keywords (**`center`**, **`top`**, **`right`**), percentages, or fixed lengths (e.g., `50px 100px`).',
      syntaxCode: `.logo {\n  background-position: center top; /* X-axis, Y-axis */\n}`,
      keyBenefit: 'The most common setting is **`center center`** to perfectly align a single background image.',
    },
    {
      title: 'background-size',
      icon: Monitor,
      color: 'text-teal-600',
      description: 'Crucial for responsive design. It controls the **size** of the background image. The most popular values are **`cover`** (fills element, may crop image) and **`contain`** (shows full image, may leave gaps).',
      syntaxCode: `.full-bg {\n  background-size: cover;\n}`,
      keyBenefit: 'Always use **`cover`** for hero images to ensure the background fills the entire container.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50/30 to-slate-50 dark:from-slate-900 dark:via-violet-900/10 dark:to-slate-900">
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="relative px-6 lg:px-12 py-16 lg:py-24 text-center bg-white dark:bg-slate-800/90 rounded-b-3xl shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-teal-600 to-blue-600 shadow-2xl mb-8">
            <Monitor className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600 mb-6 leading-tight">
            CSS Backgrounds: The Foundation
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Understand the five core properties used to style the visual depth of any HTML element.
          </p>
          <div className="flex items-center justify-center mt-8 space-x-4">
            <div className="flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-slate-700/80 rounded-full backdrop-blur-sm">
              <Layers className="w-5 h-5 text-indigo-500" />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Image Layering</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-slate-700/80 rounded-full backdrop-blur-sm">
              <Sun className="w-5 h-5 text-yellow-500" />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Responsive Sizing</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 lg:px-12 py-12 lg:py-20">
        
        {/* Section 1: Core Background Properties (Vertical Stack) */}
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <BookOpen className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 1: The Five Pillars of `background`
            </h2>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-4xl">
            These properties allow you to control the color, image, placement, and scaling of an element's backdrop.
          </p>

          <div className="space-y-12">
            {backgroundProperties.map((prop, index) => (
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

        {/* Section 2: Background Shorthand (Interactive) */}
        <section className="mb-20 p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border-2 border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-12">
            <Code className="w-8 h-8 mr-4 text-pink-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 2: The `background` Shorthand
            </h2>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-4xl">
            The `background` property allows you to set all five properties in a single, convenient line. **Order matters!**
          </p>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Shorthand Explanation */}
            <div className="space-y-4">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">The Shorthand Order</h4>
                <InteractiveCodeBlock 
                    code={`/* Order: color image repeat attachment position / size */\n.box {\n  background: #333 url('img.png') no-repeat center / cover;\n}`} 
                    title="Shorthand Syntax"
                />
                <p className="text-base text-slate-600 dark:text-slate-300">
                    The background **size** must be placed immediately after the background **position**, separated by a forward slash (`/`).
                </p>
            </div>
            
            {/* Live Size Demo */}
            <div className="space-y-4">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">Live `background-size` Demo</h4>
                <div className="flex space-x-4 mb-4">
                    <button 
                        onClick={() => setLiveBgSize('cover')} 
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition ${liveBgSize === 'cover' ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-indigo-100 dark:hover:bg-slate-600'}`}
                    >
                        cover
                    </button>
                    <button 
                        onClick={() => setLiveBgSize('contain')} 
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition ${liveBgSize === 'contain' ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-indigo-100 dark:hover:bg-slate-600'}`}
                    >
                        contain
                    </button>
                    <button 
                        onClick={() => setLiveBgSize('50% 50%')} 
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition ${liveBgSize === '50% 50%' ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-indigo-100 dark:hover:bg-slate-600'}`}
                    >
                        50% 50%
                    </button>
                </div>
                <div 
                    className="h-40 w-full rounded-xl shadow-inner border-2 border-dashed border-slate-400 dark:border-slate-500 bg-center bg-no-repeat"
                    style={{ 
                        backgroundColor: '#CCC',
                        backgroundImage: `url('https://placehold.co/100x100/33A8FF/FFFFFF?text=CSS')`,
                        backgroundSize: liveBgSize,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                    }}
                ></div>
                <p className="text-sm font-mono text-slate-700 dark:text-slate-400 mt-2">
                    Size: {liveBgSize}
                </p>
            </div>
          </div>
        </section>


        {/* Success Message */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 to-purple-600 p-12 lg:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10">
            <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Lesson Complete: Background Fundamentals Secured!
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              You've mastered the building blocks of backgrounds. Next up: **Advanced Backgrounds** for clipping, blending, and complex layers.
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

export default CssBackgrounds;
