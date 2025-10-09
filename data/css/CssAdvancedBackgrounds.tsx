import React, { useState, useMemo, useCallback } from 'react';
import { Target, Zap, TrendingUp, Code, Copy, Check, Layers, GalleryHorizontal, Scissors, Maximize, Sunrise, Settings, Layers3, Image } from 'lucide-react';

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
      className="w-full py-2 px-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg shadow-sm focus:ring-amber-500 focus:border-amber-500 text-gray-900 dark:text-gray-100 transition duration-150"
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
        className="absolute top-2 right-2 p-1 rounded transition-all duration-200 text-gray-400 hover:text-white hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
        aria-label="Copy code to clipboard"
      >
        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
      </button>
    </div>
  );
};


/**
 * Card component for explaining each background principle, featuring a two-column layout.
 */
const BackgroundCard = ({ title, description, icon: Icon, color, codeSnippet }) => (
  <div className={`py-10 px-8 rounded-xl shadow-2xl border-l-4 ${color} bg-white dark:bg-gray-800 transition-all hover:shadow-3xl`}>
    {/* Increased gap-x-12 for better visual separation on desktop */}
    <div className="grid md:grid-cols-2 gap-y-6 md:gap-x-12 items-start"> 
      
      {/* LEFT SIDE: Content (Title, Icon, Description) */}
      <div className="md:pr-6">
        <div className="flex items-center space-x-4 mb-4">
          <Icon className={`w-8 h-8 ${color} p-1 rounded-full bg-current/10`} />
          <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white">{title}</h3>
        </div>
        {/* Increased text size for stronger visual impact */}
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

const CssAdvancedBackgrounds = () => {

  // Default images/gradients for the interactive demo
  const image1 = `url('https://placehold.co/400x400/8B5CF6/ffffff?text=Image+1')`; // Purple
  const image2 = `url('https://placehold.co/400x400/F97316/ffffff?text=Image+2')`; // Orange

  const gradients = {
    linear: `linear-gradient(45deg, rgba(234, 179, 8, 0.9), rgba(245, 158, 11, 0.4))`, // Amber/Yellow
    radial: `radial-gradient(circle, rgba(234, 179, 8, 0.9), transparent 70%)`
  };

  const [bg1Type, setBg1Type] = useState('gradient');
  const [bg2Type, setBg2Type] = useState('image');
  const [size, setSize] = useState('cover');
  const [repeat, setRepeat] = useState('no-repeat');
  const [blendMode, setBlendMode] = useState('normal');

  // Logic to build the final background-image string
  const finalBackground = useMemo(() => {
    // Top layer (BG1)
    const bg1 = bg1Type === 'gradient' ? gradients.linear : image1;
    // Bottom layer (BG2)
    const bg2 = bg2Type === 'gradient' ? gradients.radial : image2;

    return `${bg1}, ${bg2}`;
  }, [bg1Type, bg2Type, image1, image2, gradients]);

  // Logic to build the final CSS style object
  const interactiveStyle = useMemo(() => {
    return {
      backgroundImage: finalBackground,
      backgroundSize: `${size}, 150px 150px`, // Size applies to both layers
      backgroundPosition: 'left top, right bottom',
      backgroundRepeat: `${repeat}, repeat`,
      backgroundBlendMode: blendMode,
      transition: 'all 0.5s ease-in-out',
      minHeight: '300px',
      border: '4px solid #3b82f6', // Add border to show origin/clip context
    };
  }, [finalBackground, size, repeat, blendMode]);
  
  // Logic to build the final CSS code string
  const finalCodeSnippet = useMemo(() => {
    return `background-image: ${finalBackground};
background-size: ${size}, 150px 150px;
background-position: left top, right bottom;
background-repeat: ${repeat}, repeat;
background-blend-mode: ${blendMode};`;
  }, [finalBackground, size, repeat, blendMode]);


  // Descriptions for the advanced background principles
  const principleDescriptions = [
    {
      title: 'Multiple Backgrounds & Layers',
      icon: Layers3,
      color: 'border-t-amber-500 text-amber-500',
      description: 'You can define multiple images and gradients for a single element, separated by commas. Layers are stacked like Photoshop: the **first listed background is the topmost layer**, and the last is closest to the element’s background color.',
      codeSnippet: `background-image: 
  url('circle.png'),
  linear-gradient(to right, red, blue);
  
/* Each property (size, position, etc.) is also comma-separated and corresponds to the image list. */
background-size: 50px 50px, cover; 
background-repeat: no-repeat, no-repeat;`,
    },
    {
      title: 'Background Clip',
      icon: Scissors,
      color: 'border-t-orange-500 text-orange-500',
      description: 'Defines how far the background (image/color) should extend within an element. Key values are **`border-box`** (default), **`padding-box`**, and the powerful **`text`** (clips the background to the foreground text shape).',
      codeSnippet: `/* Clips background to padding area (stops before border) */
background-clip: padding-box;

/* Clips background to the shape of the text. Requires -webkit- prefix and transparent text. */
.text-effect {
  background-clip: text;
  -webkit-background-clip: text; /* Vendor prefix required */
  color: transparent; /* Text must be transparent to show background */
  background-image: linear-gradient(red, blue);
}`,
    },
    {
      title: 'Background Size',
      icon: Maximize,
      color: 'border-t-red-500 text-red-500',
      description: 'Controls the size of the background image. **`cover`** scales to cover the entire container (possibly cropping). **`contain`** scales to ensure the entire image is visible (leaving empty space if needed).',
      codeSnippet: `/* Scales image to cover the entire container */
background-size: cover;

/* Scales image to fit entirely within the container */
background-size: contain;

/* Custom sizing for multiple images */
background-size: 100% 100%, 50px 50px;`,
    },
    {
      title: 'Gradients (Linear & Radial)',
      icon: Sunrise,
      color: 'border-t-green-500 text-green-500',
      description: 'Gradients are treated as **images**, not colors. This means you can use them in multiple layers. Linear gradients travel in a straight line; Radial gradients start at a center point and expand outward.',
      codeSnippet: `/* Linear Gradient: direction, color stops */
background-image: 
  linear-gradient(to right, #00c6ff, #0072ff);

/* Radial Gradient: shape, size, color stops */
background-image: 
  radial-gradient(circle at 70% 30%, yellow, orange, red);`,
    },
    {
      title: 'Background Blend Mode',
      icon: Settings,
      color: 'border-t-blue-500 text-blue-500',
      description: 'Defines how an element\'s background layers should blend with each other and the background color, borrowing concepts from graphic design software. Common values include **`multiply`**, **`screen`**, and **`overlay`**.',
      codeSnippet: `/* Blends the top background layer with the layers below it */
background-blend-mode: multiply;

/* Can be defined per layer in a comma-separated list */
background-image: 
  url('texture.png'), linear-gradient(gray, black);
background-blend-mode: overlay, normal;`,
    },
    {
      title: 'Background Attachment',
      icon: Image,
      color: 'border-t-purple-500 text-purple-500',
      description: 'Determines if the background image scrolls with the element content (`scroll`), is fixed relative to the viewport (`fixed`), or scrolls with the element content inside a scrollable container (`local`).',
      codeSnippet: `/* Image stays fixed in viewport, creating parallax scroll */
background-attachment: fixed; 

/* Image scrolls with the content inside the element */
.scroll-box {
  overflow-y: scroll;
  background-attachment: local;
}`,
    },
  ];

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-amber-100 dark:from-gray-900 dark:to-amber-950 min-h-screen font-sans">
      {/* --- Course Header Section --- */}
      <header className="text-center mb-12 py-8 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-2xl border-b-4 border-amber-500">
        <h1 className="4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-2">
          Mastering CSS Advanced Backgrounds
        </h1>
        <p className="text-xl text-amber-600 dark:text-amber-400 font-semibold">
          Lesson 4: Layers, Gradients, and Blending
        </p>
      </header>

      {/* --- Learning Objectives --- */}
      <div className="mb-12 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border-l-4 border-amber-400">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 flex items-center">
          <Target className="w-6 h-6 mr-2 text-amber-500"/> Learning Objectives
        </h2>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300 list-inside">
          <li className="flex items-start"><span className="text-amber-500 mr-2 font-bold">•</span> Define and manage **multiple stacked background layers**.</li>
          <li className="flex items-start"><span className="text-amber-500 mr-2 font-bold">•</span> Create complex **linear and radial gradients**.</li>
          <li className="flex items-start"><span className="text-amber-500 mr-2 font-bold">•</span> Use **`background-clip`** to confine the background to the content or text.</li>
          <li className="flex items-start"><span className="text-amber-500 mr-2 font-bold">•</span> Apply **`background-blend-mode`** to visually combine layers.</li>
        </ul>
      </div>

      {/* --- Interactive Playground Section (Module 1) --- */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 border-b pb-2 border-amber-200 dark:border-amber-700 flex items-center">
          <Zap className="w-6 h-6 mr-2 text-yellow-500"/> Module 1: The Layer Blending Sandbox
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          Experiment with stacking two different background layers (an Image and a Gradient) and see how `background-blend-mode` changes the final appearance.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Background Controls Panel */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-2xl h-fit border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-amber-600 dark:text-amber-400 mb-6 flex items-center">
              <Layers className="w-5 h-5 mr-2" /> Layer Configuration
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-x-6">
              {/* BG 1 (Top Layer) */}
              <ControlSelect 
                label="BG 1 (Top Layer) Type" 
                value={bg1Type} 
                onChange={setBg1Type} 
                options={[
                  { value: 'gradient', label: 'Gradient Overlay' },
                  { value: 'image', label: 'Placeholder Image 1' },
                ]}
              />

              {/* BG 2 (Bottom Layer) */}
              <ControlSelect 
                label="BG 2 (Bottom Layer) Type" 
                value={bg2Type} 
                onChange={setBg2Type} 
                options={[
                  { value: 'image', label: 'Placeholder Image 2' },
                  { value: 'gradient', label: 'Radial Gradient' },
                ]}
              />
              
              {/* Background Size */}
              <ControlSelect 
                label="Background Size (BG 1)" 
                value={size} 
                onChange={setSize} 
                options={[
                  { value: 'cover', label: 'Cover' },
                  { value: 'contain', label: 'Contain' },
                  { value: '50% 50%', label: '50% 50%' },
                ]}
              />

              {/* Background Repeat */}
              <ControlSelect 
                label="Background Repeat (BG 1)" 
                value={repeat} 
                onChange={setRepeat} 
                options={[
                  { value: 'no-repeat', label: 'No Repeat' },
                  { value: 'repeat', label: 'Repeat' },
                  { value: 'repeat-x', label: 'Repeat X' },
                ]}
              />

              {/* Background Blend Mode */}
              <div className="sm:col-span-2">
                <ControlSelect 
                  label="Background Blend Mode (Interaction)" 
                  value={blendMode} 
                  onChange={setBlendMode} 
                  options={[
                    { value: 'normal', label: 'normal (No Blend)' },
                    { value: 'multiply', label: 'multiply' },
                    { value: 'screen', label: 'screen' },
                    { value: 'overlay', label: 'overlay' },
                    { value: 'hard-light', label: 'hard-light' },
                  ]}
                />
              </div>
            </div>
          </div>
          
          {/* Background Preview Area */}
          <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 relative overflow-hidden min-h-[400px]">

            {/* The Live Background Box */}
            <div
              className="w-full h-full p-4 text-white text-lg font-bold flex items-center justify-center rounded-lg"
              style={interactiveStyle}
            >
              <div className="p-4 bg-black/50 rounded-lg backdrop-blur-sm">
                Advanced Backgrounds in Action!
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
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b pb-2 border-amber-200 dark:border-amber-700 flex items-center">
          <TrendingUp className="w-6 h-6 mr-2 text-green-500"/> Module 2: Key Advanced Properties
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          These properties allow fine-grained control over how images are sized, positioned, and combined with an element's layers.
        </p>

        {/* Increased gap-8 between cards */}
        <div className="grid grid-cols-1 gap-10">
          {principleDescriptions.map((desc) => (
            <BackgroundCard key={desc.title} {...desc} />
          ))}
        </div>
      </section>

      {/* --- Background Shorthand Note --- */}
      <div className="p-6 bg-amber-50 dark:bg-amber-900/50 rounded-xl shadow-inner border border-amber-200 dark:border-amber-700">
        <h3 className="text-xl font-bold text-amber-800 dark:text-amber-200 mb-2 flex items-center">
          <GalleryHorizontal className="w-5 h-5 mr-2"/> The `background` Shorthand Trap
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          When using **multiple backgrounds**, the `background` shorthand property becomes complex. For two layers, you must provide two full sets of values, separated by commas, which can include size/position pairs separated by a forward slash (`/`).
        </p>
        <CodeSnippetBlock codeSnippet={`/* Syntax: [image] [position] / [size] [repeat] [attachment] [origin] [clip] */
background: 
  url(top.png) center center/50% 50% no-repeat, 
  url(bottom.jpg) left top/cover fixed;

/* Note: background-color and background-blend-mode must be set separately. */`} prefix='Shorthand' />
      </div>
    </div>
  );
};

export default CssAdvancedBackgrounds;
