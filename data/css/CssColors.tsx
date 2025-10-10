import React, { useState, useCallback, useMemo } from 'react';
import { BookOpen, Palette, Code, CheckCircle, ArrowRight, Sun, Layers, Zap, Scale, Blend } from 'lucide-react';

const CssColors = () => {
  const [hexInput, setHexInput] = useState('#10B981');
  const [rgbInput, setRgbInput] = useState('16, 185, 129');
  const [hslInput, setHslInput] = useState('157, 83%, 39%');

  // --- Helper Functions for Color Conversion and Formatting ---

  // Converts HEX to RGB
  const hexToRgb = (hex) => {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : null;
  };

  // Converts RGB to HSL
  const rgbToHsl = (r, g, b) => {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
      h = s = 0; // achromatic
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
        default: h = 0; // Should not happen
      }
      h /= 6;
    }
    
    // Format to CSS HSL string
    const hDeg = Math.round(h * 360);
    const sPerc = Math.round(s * 100);
    const lPerc = Math.round(l * 100);
    return `${hDeg}, ${sPerc}%, ${lPerc}%`;
  };

  // Synchronize color state based on the last input changed
  const handleColorChange = useCallback((format, value) => {
    let newHex = hexInput;
    let newRgb = rgbInput;
    let newHsl = hslInput;

    if (format === 'hex') {
      // Basic HEX validation before conversion
      if (/^#?([0-9a-fA-F]{3}){1,2}$/.test(value)) {
        newHex = value;
        const rgbStr = hexToRgb(value);
        if (rgbStr) {
          newRgb = rgbStr;
          const [r, g, b] = rgbStr.split(',').map(n => parseInt(n.trim(), 10));
          newHsl = rgbToHsl(r, g, b);
        }
      }
    } else if (format === 'rgb') {
      newRgb = value;
      const parts = value.split(',').map(n => parseInt(n.trim(), 10));
      if (parts.length === 3 && parts.every(n => n >= 0 && n <= 255)) {
        const [r, g, b] = parts;
        newHsl = rgbToHsl(r, g, b);
        newHex = '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
      }
    } else if (format === 'hsl') {
        newHsl = value;
        // HSL -> RGB -> HEX is complex, but we can just use the direct CSS value for the sandbox
        // For simplicity in the interactive block, we just update the HSL string.
    }

    setHexInput(newHex);
    setRgbInput(newRgb);
    setHslInput(newHsl);
  }, [hexInput, rgbInput, hslInput]);
  
  // Computed final color string for the live box (using valid CSS input)
  const liveColor = useMemo(() => {
    // We prioritize using the HSL/RGB string as it's more robust for direct CSS use
    if (hslInput && hslInput.includes('%')) {
        return `hsl(${hslInput})`;
    }
    if (rgbInput && rgbInput.split(',').length === 3) {
        return `rgb(${rgbInput})`;
    }
    // Fallback to HEX
    return hexInput;
  }, [hexInput, rgbInput, hslInput]);

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
                  // Enhanced Syntax Highlighting, with emphasis on colors
                  if (part.includes('/*') || part.includes('*/')) {
                    return <span key={j} className="text-slate-500 italic font-semibold">{part}</span>; // Comments
                  }
                  if (part.match(/^(p|h1|div|\.[\w-]+|#[\w-]+|\*)$/)) {
                    return <span key={j} className="text-amber-400 font-semibold">{part}</span>; // Selectors
                  }
                  if (part.match(/^(color|background|border-color|--main-color)$/)) {
                    return <span key={j} className="text-cyan-400">{part}</span>; // Properties/Attributes
                  }
                  if (['{', '}', ':', ';'].includes(part)) {
                    return <span key={j} className="text-pink-400 font-bold">{part}</span>; // Punctuation
                  }
                  if (part.match(/^(#[0-9a-fA-F]+|rgb\(.*?\)|hsl\(.*?\)|red|blue|var\(.*?\))$/)) {
                    return <span key={j} className="text-emerald-400">{part}</span>; // Values (Colors)
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

  // Color Format Card Component (Highly Stylized, designed for vertical stack)
  const ColorFormatCard = ({ title, icon: Icon, color, description, syntaxCode, keyBenefit }) => (
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
        <InteractiveCodeBlock code={syntaxCode} title="Syntax Example" />
        <div className="p-3 bg-indigo-50 dark:bg-indigo-900/40 rounded-xl border-l-4 border-indigo-500 flex items-start space-x-3">
            <Zap className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1"/>
            <p className="text-sm font-semibold text-indigo-700 dark:text-indigo-300">
                **Key Benefit:** {keyBenefit}
            </p>
        </div>
      </div>
    </div>
  );
  
  // Data for Color Formats
  const colorFormats = [
    {
      title: 'HEX (#RRGGBB)',
      icon: Code,
      color: 'text-red-600',
      description: 'The most popular format. Uses a **hash symbol (#)** followed by six hexadecimal digits (0-9, A-F) representing Red, Green, and Blue intensity. Offers great **precision** but is hard to adjust manually.',
      syntaxCode: `.header { background-color: #33A8FF; }\n.footer { background-color: #0F0; }`,
      keyBenefit: 'Highest portability and common standard for web design tools.',
    },
    {
      title: 'RGB (Red, Green, Blue)',
      icon: Layers,
      color: 'text-green-600',
      description: 'Defines color via the intensity of Red, Green, and Blue light, where each channel is an integer from **0 to 255**. It is often preferred when working with transparent colors using the **`rgba()`** function (Red, Green, Blue, Alpha).',
      syntaxCode: `.box-1 { color: rgb(16, 185, 129); }\n.box-2 { background: rgba(0, 0, 0, 0.5); }`,
      keyBenefit: 'Allows for easy control over **opacity (alpha channel)**.',
    },
    {
      title: 'HSL (Hue, Saturation, Lightness)',
      icon: Sun,
      color: 'text-blue-600',
      description: 'The most **human-readable** format. **Hue** is the color wheel position (0-360), **Saturation** is intensity (0-100%), and **Lightness** is brightness (0-100%). Easy to create variants by just adjusting the **Lightness** value.',
      syntaxCode: `.primary { color: hsl(240, 100%, 50%); }\n.secondary { color: hsl(240, 100%, 80%); }`,
      keyBenefit: 'Extremely simple to create harmonious **light and dark variations**.',
    },
    {
      title: 'HWB (Hue, Whiteness, Blackness)',
      icon: Palette,
      color: 'text-purple-600',
      description: 'A modern, intuitive format. You start with a **Hue** (0-360) and then mix in **Whiteness** and **Blackness** percentages. Simpler than HSL for thinking about color mixing and often resulting in a more predictable outcome.',
      syntaxCode: `.text { color: hwb(120 10% 20%); }\n.border { color: hwb(0 0% 50%); }`,
      keyBenefit: 'Easier to conceptualize and mix colors (especially for tints and shades).',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50/30 to-slate-50 dark:from-slate-900 dark:via-violet-900/10 dark:to-slate-900">
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="relative px-6 lg:px-12 py-16 lg:py-24 text-center bg-white dark:bg-slate-800/90 rounded-b-3xl shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-600 to-teal-600 shadow-2xl mb-8">
            <Palette className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 mb-6 leading-tight">
            CSS Colors: Formats and Functions
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Master the spectrum of color definitions—from HEX and RGB to modern HSL and HWB.
          </p>
          <div className="flex items-center justify-center mt-8 space-x-4">
            <div className="flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-slate-700/80 rounded-full backdrop-blur-sm">
              <Scale className="w-5 h-5 text-indigo-500" />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Color Models</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-slate-700/80 rounded-full backdrop-blur-sm">
              <Blend className="w-5 h-5 text-green-500" />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Accessibility Focus</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 lg:px-12 py-12 lg:py-20">
        
        {/* Section 1: Color Formats (Vertical Stack) */}
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <BookOpen className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 1: The Four Core Color Formats
            </h2>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-4xl">
            CSS gives you several ways to define the exact shade you want. Understanding the strengths of each format is key to efficient styling.
          </p>

          <div className="space-y-12">
            {colorFormats.map((format, index) => (
              <ColorFormatCard
                key={index}
                title={format.title}
                icon={format.icon}
                color={format.color}
                description={format.description}
                syntaxCode={format.syntaxCode}
                keyBenefit={format.keyBenefit}
              />
            ))}
          </div>
        </section>

        {/* Section 2: Live Color Sandbox (Interactive) */}
        <section className="mb-20 p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border-2 border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-12">
            <Zap className="w-8 h-8 mr-4 text-pink-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 2: Live Color Sandbox & Conversion
            </h2>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-4xl">
            Interact with the inputs to see how the major color formats relate to each other in real-time. The Live Preview box is updated instantly.
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Input Columns */}
            {[
              { label: 'HEX', value: hexInput, handler: (e) => handleColorChange('hex', e.target.value), placeholder: '#RRGGBB (e.g., #FF9900)' },
              { label: 'RGB', value: rgbInput, handler: (e) => handleColorChange('rgb', e.target.value), placeholder: 'R, G, B (e.g., 255, 153, 0)' },
              { label: 'HSL', value: hslInput, handler: (e) => handleColorChange('hsl', e.target.value), placeholder: 'H, S%, L% (e.g., 36, 100%, 50%)' }
            ].map(({ label, value, handler, placeholder }, index) => (
              <div key={index} className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 block">{label} Value</label>
                <input
                  type="text"
                  value={value}
                  onChange={handler}
                  placeholder={placeholder}
                  className="w-full p-3 border-2 border-slate-300 dark:border-slate-600 rounded-xl focus:border-violet-500 dark:focus:border-violet-400 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white transition-colors font-mono"
                />
              </div>
            ))}
          </div>
          
          {/* Live Preview and CSS Output */}
          <div className="mt-12 p-8 bg-slate-100 dark:bg-slate-900 rounded-3xl border-2 border-dashed border-slate-300 dark:border-slate-600 grid lg:grid-cols-2 gap-10">
            
            {/* Live Preview */}
            <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-700 rounded-xl shadow-inner">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Live Color Preview</h4>
                <div 
                    className="w-full h-32 rounded-xl shadow-lg border-4 border-slate-200 dark:border-slate-600 transition-colors duration-500" 
                    style={{ backgroundColor: liveColor }}
                ></div>
                <p className="text-center mt-3 text-lg font-mono font-semibold text-slate-900 dark:text-white">
                    {liveColor}
                </p>
            </div>

            {/* CSS Output */}
            <div className="space-y-4">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">CSS Declaration</h4>
                <InteractiveCodeBlock 
                    code={`.element {\n  background-color: ${liveColor};\n}`} 
                    title="CSS Code"
                />
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-4">
                    *Note: The actual color displayed depends on the browser's support for modern HSL/HWB syntax.
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
              Lesson Complete: Color Fundamentals Mastered!
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              You now have a solid understanding of how colors are defined in CSS. Next, let's explore **Advanced Colors** including LCH and `color-mix()`.
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

export default CssColors;
