import React, { useState, useMemo } from 'react';
import { Target, Zap, TrendingUp, Code, Copy, Check, Palette, Focus, Box, Sun, Blend, Feather } from 'lucide-react';

// --- Utility Components (Reused/Adapted) ---

/**
 * Control Select for background options.
 */
const ControlSelect = ({ label, value, onChange, options }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      {label}
    </label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full py-2 px-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 text-gray-900 dark:text-gray-100 transition duration-150"
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </select>
  </div>
);


/**
 * Code snippet display block with copy functionality and attractive dark styling.
 */
const CodeSnippetBlock = ({ codeSnippet, prefix = 'css' }) => {
  const [copied, setCopied] = useState(false);
  const codeRef = React.useRef(null);

  // Function to apply syntax highlighting using string manipulation (for basic syntax)
  const formatCodeWithSyntaxHighlighting = (code) => {
    // 1. Highlight Comments (/* ... */) in muted gray and italics
    let formattedCode = code.replace(
      /(\/\*[\s\S]*?\*\/)/g, 
      '<span class="text-gray-500 italic">$&</span>'
    );
    
    // 2. Highlight CSS Properties (the part before the colon) in cyan
    // This regex looks for text that is typically a CSS property name
    formattedCode = formattedCode.replace(
      /([a-z-]+):/g, 
      '<span class="text-cyan-400">$&</span>'
    );

    // 3. Highlight the "Shorthand" title/prefix in pink (handled outside)
    // Values will retain the base color of the <pre> block (green-400)

    // Replace newlines for clean rendering
    formattedCode = formattedCode.replace(/\n\n/g, '\n');
    
    return formattedCode;
  };


  const handleCopy = () => {
    if (codeRef.current) {
      const textarea = document.createElement('textarea');
      // Use the raw code snippet for copying, not the HTML-formatted version
      const finalCode = codeSnippet.startsWith('@') ? codeSnippet : `${codeSnippet.replace(/\n\n/g, '\n')}`;
      
      textarea.value = finalCode; 
      document.body.appendChild(textarea);
      textarea.select();
      
      try {
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
      
      document.body.removeChild(textarea);
    }
  };

  return (
    <div className="relative mb-4">
      <pre 
        ref={codeRef}
        // Base color for values is text-green-400
        className="p-3 bg-gray-900 dark:bg-gray-900 rounded-lg text-xs font-mono overflow-x-auto text-green-400 border border-gray-700 dark:border-gray-700 shadow-inner"
        style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
      >
        {/* Use dangerouslySetInnerHTML to render the styled code */}
        <code className="text-pink-400">{prefix}</code> 
        <span dangerouslySetInnerHTML={{ __html: formatCodeWithSyntaxHighlighting(codeSnippet) }} />
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-1 rounded transition-all duration-200 text-gray-400 hover:text-white hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
        aria-label="Copy code to clipboard"
      >
        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
      </button>
    </div>
  );
};


/**
 * Card component for explaining each color principle, featuring a two-column layout.
 */
const ColorCard = ({ title, description, icon: Icon, color, codeSnippet }) => (
  <div className={`py-10 px-8 rounded-xl shadow-2xl border-l-4 ${color} bg-white dark:bg-gray-800 transition-all hover:shadow-3xl`}>
    <div className="grid md:grid-cols-2 gap-y-6 md:gap-x-12 items-start"> 
      
      {/* LEFT SIDE: Content (Title, Icon, Description) */}
      <div className="md:pr-6">
        <div className="flex items-center space-x-4 mb-4">
          <Icon className={`w-8 h-8 ${color} p-1 rounded-full bg-current/10`} />
          <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white">{title}</h3>
        </div>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{description}</p>
      </div>

      {/* RIGHT SIDE: Code Snippet */}
      <div>
        <h4 className="text-base font-semibold mb-2 text-gray-800 dark:text-gray-200 flex items-center">
          <Code className="w-5 h-5 mr-2"/> Code Snippet:
        </h4>
        <CodeSnippetBlock codeSnippet={codeSnippet} prefix='CSS' />
      </div>
    </div>
  </div>
);

// --- Main Component ---

const CssAdvancedColors = () => {

  const [color1, setColor1] = useState('red');
  const [color2, setColor2] = useState('blue');
  const [mixMethod, setMixMethod] = useState('in srgb');
  const [mixPercent, setMixPercent] = useState(50);

  // Logic to build the final color-mix function
  const finalColorMix = useMemo(() => {
    // FIX: Removed the trailing semicolon to avoid React style prop warnings.
    return `color-mix(${mixMethod}, ${color1} ${mixPercent}%, ${color2})`;
  }, [mixMethod, color1, color2, mixPercent]);
  
  // FIX: The interactiveStyle now uses the calculated finalColorMix directly, 
  // and the useMemo dependency array is set correctly to ensure updates occur.
  const interactiveStyle = useMemo(() => {
    return {
      backgroundColor: finalColorMix, // Use the calculated color-mix string directly
      transition: 'background-color 0.5s ease',
      minHeight: '200px',
      border: `4px solid ${finalColorMix}`, // Use the calculated color-mix string directly
    };
  }, [finalColorMix]); // IMPORTANT: Depend on finalColorMix for updates
  
  // The actual CSS var definition needed for the mix demo
  const finalCodeSnippet = useMemo(() => {
    // Note: The code snippet shows how a developer would use a CSS variable, 
    // which is why this section differs from the React style property above.
    return `/* Define the mixed color using a CSS variable */
--mixed-color: ${finalColorMix}

/* Use the variable for an element's background */
background-color: var(--mixed-color);`;
  }, [finalColorMix]);


  // Descriptions for the advanced color principles
  const principleDescriptions = [
    {
      title: 'Modern Color Spaces (LCH, LAB)',
      icon: Palette,
      color: 'border-t-teal-500 text-teal-500',
      description: 'These spaces (Lightness, Chroma, Hue) are perceptually uniform, meaning changes in numeric value reflect changes perceived by the human eye. They prevent the "gray zone" and clipping issues common in RGB/HEX for vibrant colors.',
      codeSnippet: `/* LCH (Lightness, Chroma, Hue) */
color: lch(70% 80 150); 
background-color: oklch(50% 0.1 270); /* OKLCH is a modern variant */

/* LAB (Lightness, a-axis (green-red), b-axis (blue-yellow)) */
border-color: lab(50% -30 -30);`,
    },
    {
      title: 'The HSL/HWB Spaces',
      icon: Sun,
      color: 'border-t-yellow-500 text-yellow-500',
      description: 'HSL (Hue, Saturation, Lightness) is easy for humans to read, while HWB (Hue, Whiteness, Blackness) is more intuitive for mixing. Both are better than RGB for manipulating color properties independently.',
      codeSnippet: `/* HSL (Hue, Saturation, Lightness) */
color: hsl(200, 100%, 50%); /* Bright Cyan */
color: hsla(200, 100%, 50%, 0.7); /* Same, 70% opacity */

/* HWB (Hue, Whiteness, Blackness) - easy for darkening/lightening */
background: hwb(120 10% 20%); /* Green hue, 10% white, 20% black */`,
    },
    {
      title: 'The `color-mix()` Function',
      icon: Blend,
      color: 'border-t-indigo-500 text-indigo-500',
      description: 'This function allows you to blend two colors in a specified color space and ratio. This is critical for generating theme variants (like dark mode colors) or creating perceptually smooth transitions.',
      codeSnippet: `/* Mixes 60% of red and 40% of blue, blending in the LCH space. */
--purple-mix: color-mix(
  in lch, 
  red 60%, 
  blue 40%
);

color: var(--purple-mix);`,
    },
    {
      title: 'Opacity vs. Alpha Channel',
      icon: Feather,
      color: 'border-t-pink-500 text-pink-500',
      description: 'The **Alpha Channel** (used in RGBA/HSLA) makes the color transparent, but the element remains opaque. The **`opacity`** property makes the entire element (including children) transparent, which can be visually disruptive.',
      codeSnippet: `/* Alpha Channel: Only the background color is transparent. */
background-color: rgba(255, 0, 0, 0.5); 
/* OR */
background-color: lch(70% 80 150 / 0.5);

/* Opacity Property: Entire element (text, borders, children) is transparent. */
.faded-element {
  opacity: 0.5;
}`,
    },
  ];

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-teal-100 dark:from-gray-900 dark:to-teal-950 min-h-screen font-sans">
      {/* --- Course Header Section --- */}
      <header className="text-center mb-12 py-8 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-2xl border-b-4 border-teal-500">
        <h1 className="4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-2">
          Mastering CSS Advanced Colors
        </h1>
        <p className="text-xl text-teal-600 dark:text-teal-400 font-semibold">
          Lesson 5: LCH, LAB, and Perceptual Color Mixing
        </p>
      </header>

      {/* --- Learning Objectives --- */}
      <div className="mb-12 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border-l-4 border-teal-400">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 flex items-center">
          <Target className="w-6 h-6 mr-2 text-teal-500"/> Learning Objectives
        </h2>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300 list-inside">
          <li className="flex items-start"><span className="text-teal-500 mr-2 font-bold">•</span> Understand and apply **perceptually uniform color spaces** (LCH, LAB).</li>
          <li className="flex items-start"><span className="text-teal-500 mr-2 font-bold">•</span> Use the **`color-mix()`** function for dynamic color blending.</li>
          <li className="flex items-start"><span className="text-teal-500 mr-2 font-bold">•</span> Differentiate between **opacity** and **alpha channel** usage.</li>
          <li className="flex items-start"><span className="text-teal-500 mr-2 font-bold">•</span> Recognize when to use HSL/HWB for color manipulation.</li>
        </ul>
      </div>

      {/* --- Interactive Playground Section (Module 1) --- */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 border-b pb-2 border-teal-200 dark:border-teal-700 flex items-center">
          <Zap className="w-6 h-6 mr-2 text-green-500"/> Module 1: The `color-mix()` Sandbox
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          See the dramatic difference when mixing the same two colors using the old **`srgb`** space (which often desaturates colors) versus the perceptually correct **`lch`** space.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Color Controls Panel */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-2xl h-fit border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-teal-600 dark:text-teal-400 mb-6 flex items-center">
              <Focus className="w-5 h-5 mr-2" /> Color Mixer Configuration
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-x-6">
              {/* Color 1 */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Color 1 (Start)
                </label>
                <input
                  type="color"
                  value={color1}
                  onChange={(e) => setColor1(e.target.value)}
                  className="w-full h-10 p-1 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm"
                  style={{ backgroundColor: color1 }}
                />
              </div>

              {/* Color 2 */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Color 2 (End)
                </label>
                <input
                  type="color"
                  value={color2}
                  onChange={(e) => setColor2(e.target.value)}
                  className="w-full h-10 p-1 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm"
                  style={{ backgroundColor: color2 }}
                />
              </div>
              
              {/* Mixing Method */}
              <ControlSelect 
                label="Mixing Color Space (`in ...`)" 
                value={mixMethod} 
                onChange={setMixMethod} 
                options={[
                  { value: 'in srgb', label: 'sRGB (Traditional/Desaturated)' },
                  { value: 'in lch', label: 'LCH (Perceptually Correct)' },
                  { value: 'in lab', label: 'LAB (Alternative Perceptual)' },
                ]}
              />

              {/* Mix Percentage */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Mix Percentage (Color 1: {mixPercent}%)
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={mixPercent}
                  onChange={(e) => setMixPercent(e.target.value)}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-gray-700 accent-teal-500"
                />
              </div>
            </div>
          </div>
          
          {/* Color Preview Area */}
          <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 relative overflow-hidden min-h-[400px]">

            {/* The Live Mixed Color Box */}
            <div
              className="w-48 h-48 rounded-full shadow-inner flex items-center justify-center text-lg font-bold"
              style={interactiveStyle} // Now uses the updated style object
            >
              <div className="p-4 bg-black/30 rounded-lg backdrop-blur-sm text-white">
                Mixed Color Result
              </div>
            </div>

            {/* Display Current CSS Value */}
            <div className="absolute bottom-4 left-4 right-4 bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-xs font-mono break-all shadow-inner max-h-24 overflow-y-auto">
              <span className="text-gray-900 dark:text-gray-100">Live CSS:</span>
              <CodeSnippetBlock 
                codeSnippet={finalCodeSnippet} 
                prefix={'element'}
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- Theoretical Explanation Section (Module 2) --- */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b pb-2 border-teal-200 dark:border-teal-700 flex items-center">
          <TrendingUp className="w-6 h-6 mr-2 text-pink-500"/> Module 2: Understanding Modern Color Functions
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          Moving beyond HEX and RGB provides better tools for color manipulation, accessibility, and fidelity.
        </p>

        {/* Increased gap-8 between cards */}
        <div className="grid grid-cols-1 gap-10">
          {principleDescriptions.map((desc) => (
            <ColorCard key={desc.title} {...desc} />
          ))}
        </div>
      </section>

      {/* --- P3 Wide Gamut Note --- */}
      <div className="p-6 bg-teal-50 dark:bg-teal-900/50 rounded-xl shadow-inner border border-teal-200 dark:border-teal-700">
        <h3 className="text-xl font-bold text-teal-800 dark:text-teal-200 mb-2 flex items-center">
          <Box className="w-5 h-5 mr-2"/> Wide Gamut Colors (Display P3)
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          Modern displays can render colors outside the traditional sRGB range. You can access these vibrant colors directly in CSS using the **`color()`** function with the **`display-p3`** keyword. This is the future of web color!
        </p>
        <CodeSnippetBlock codeSnippet={`/* Defines a color in the wide-gamut Display P3 space */
color: color(display-p3 0.1 0.5 0.9); 

/* You can still provide an sRGB fallback for older browsers */
color: rgb(100, 150, 200); /* Fallback */
color: color(display-p3 0.1 0.5 0.9); /* Modern value */`} prefix='Display P3' />
      </div>
    </div>
  );
};

export default CssAdvancedColors;
