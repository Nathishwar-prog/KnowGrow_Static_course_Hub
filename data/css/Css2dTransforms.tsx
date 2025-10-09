import React, { useState, useMemo, useCallback } from 'react';
import { Move, RotateCw, ZoomIn, BoxSelect, Square, Grid3x3, Code, Copy, Check, Target, Zap, TrendingUp } from 'lucide-react'; // Added new icons

// --- Utility Components ---

/**
 * Slider component for controlling transform values.
 */
const ControlSlider = ({ label, value, onChange, min, max, step, unit }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      {label}: <span className="font-semibold text-indigo-600 dark:text-indigo-400">{value}{unit}</span>
    </label>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(parseFloat(e.target.value))}
      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-gray-700 accent-indigo-500"
    />
  </div>
);

/**
 * Code snippet display block with copy functionality and attractive dark styling.
 */
const CodeSnippetBlock = ({ codeSnippet }) => {
  const [copied, setCopied] = useState(false);
  const codeRef = React.useRef(null);

  const handleCopy = () => {
    if (codeRef.current) {
      // Create a temporary textarea to hold the text for copying
      const textarea = document.createElement('textarea');
      // Prepend 'transform: ' to the snippet content for a complete CSS property
      textarea.value = `transform: ${codeSnippet.replace(/\n\n/g, '\n')}`; 
      document.body.appendChild(textarea);
      textarea.select();
      
      try {
        // Use document.execCommand('copy') as it's more reliable in iframe environments
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
        className="p-3 bg-gray-900 dark:bg-gray-900 rounded-lg text-xs font-mono overflow-x-auto text-green-400 border border-gray-700 dark:border-gray-700 shadow-inner"
        style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
      >
        <code className="text-pink-400">transform:</code> {codeSnippet}
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-1 rounded transition-all duration-200 text-gray-400 hover:text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        aria-label="Copy code to clipboard"
      >
        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
      </button>
    </div>
  );
};


/**
 * Card component for explaining each transform function, now including code and demo.
 */
const TransformCard = ({ title, description, icon: Icon, color, codeSnippet, demoStyle }) => (
  <div className={`p-6 rounded-xl shadow-lg border-t-4 ${color} bg-white dark:bg-gray-800 transition-all hover:shadow-2xl`}>
    <div className="flex items-center space-x-3 mb-3">
      <Icon className={`w-6 h-6 ${color}`} />
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
    </div>
    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{description}</p>

    <h4 className="text-sm font-semibold mb-2 text-gray-800 dark:text-gray-200 flex items-center">
      <Code className="w-4 h-4 mr-1"/> Syntax & Code Snippet:
    </h4>
    
    <CodeSnippetBlock codeSnippet={codeSnippet} />

    <h4 className="text-sm font-semibold mb-2 text-gray-800 dark:text-gray-200">Animated Demo:</h4>
    <div className="flex justify-center items-center h-20 bg-gray-50 dark:bg-gray-900 border border-dashed border-gray-300 dark:border-gray-600 rounded-lg">
      <div
        className="w-10 h-10 bg-indigo-500 rounded-md shadow-xl flex items-center justify-center text-white font-bold text-xs"
        style={demoStyle}
      >
        LIVE
      </div>
    </div>
  </div>
);

// --- Main Component ---

const Css2dTransforms = () => {
  // State for all transform properties
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [rotate, setRotate] = useState(0);
  const [scaleX, setScaleX] = useState(1);
  const [scaleY, setScaleY] = useState(1);
  const [skewX, setSkewX] = useState(0);
  const [skewY, setSkewY] = useState(0);

  // Memoized function to combine all transforms into a single CSS string
  const transformStyle = useMemo(() => {
    return `
      translateX(${translateX}px)
      translateY(${translateY}px)
      rotate(${rotate}deg)
      scaleX(${scaleX})
      scaleY(${scaleY})
      skewX(${skewX}deg)
      skewY(${skewY}deg)
    `.replace(/\s+/g, ' ').trim(); // Clean up whitespace
  }, [translateX, translateY, rotate, scaleX, scaleY, skewX, skewY]);

  // Handler to reset all values
  const resetTransforms = useCallback(() => {
    setTranslateX(0);
    setTranslateY(0);
    setRotate(0);
    setScaleX(1);
    setScaleY(1);
    setSkewX(0);
    setSkewY(0);
  }, []);

  // --- Animation Styles (Defined as a string to be injected via <style>) ---
  // Using single file component convention, we define keyframes inline.
  const animationStyles = `
    @keyframes translateDemo {
      0%, 100% { transform: translateX(0); }
      50% { transform: translateX(20px); }
    }
    @keyframes rotateDemo {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    @keyframes scaleDemo {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.5); }
    }
    @keyframes skewDemo {
      0%, 100% { transform: skew(0deg); }
      50% { transform: skew(10deg, 5deg); }
    }
  `;

  // Descriptions for the transform functions with added examples and demo styles
  const transformDescriptions = [
    {
      title: 'translate()',
      icon: Move,
      color: 'border-t-yellow-500 text-yellow-500',
      description: 'Moves an element from its current position along the X and Y axes. It’s ideal for smooth positioning without affecting surrounding elements. This is one of the most performant transforms as it avoids triggering layout recalculations.',
      codeSnippet: 'translate(50px, 100%);\n\n/* Separate axes functions are also available */\ntranslateX(50px);\ntranslateY(100%);',
      demoStyle: { animation: 'translateDemo 2s infinite alternate ease-in-out' },
    },
    {
      title: 'rotate()',
      icon: RotateCw,
      color: 'border-t-red-500 text-red-500',
      description: 'Rotates an element clockwise or counter-clockwise around its origin (default: center) by a specified degree (deg). The transform is applied around the Z-axis in a 2D plane.',
      codeSnippet: 'rotate(45deg);\n\n/* Change the pivot point with transform-origin */\n/* This also requires setting transform-origin: */\n\n/* transform-origin: top left; */\nrotate(-90deg);',
      demoStyle: { animation: 'rotateDemo 3s infinite linear' },
    },
    {
      title: 'scale()',
      icon: ZoomIn,
      color: 'border-t-green-500 text-green-500',
      description: 'Increases or decreases the size of an element. A value less than 1 shrinks it; a value greater than 1 enlarges it. Scaling is always relative to the element’s `transform-origin`.',
      codeSnippet: 'scale(1.5); /* Scales X and Y by 1.5 */\n\n/* Independent scaling */\nscaleX(2) scaleY(0.5);',
      demoStyle: { animation: 'scaleDemo 2s infinite alternate ease-in-out' },
    },
    {
      title: 'skew()',
      icon: BoxSelect,
      color: 'border-t-blue-500 text-blue-500',
      description: 'Tilts an element along the X and Y axes, distorting its shape into a parallelogram. Skew is measured in degrees (`deg`) and is often used for creating perspective or slanted text effects.',
      codeSnippet: 'skew(15deg); /* Skews X by 15deg */\n\n/* Skewing both axes */\nskew(20deg, -10deg);',
      demoStyle: { animation: 'skewDemo 2.5s infinite alternate ease-in-out' },
    },
    {
      title: 'matrix() (Advanced)',
      icon: Grid3x3,
      color: 'border-t-purple-500 text-purple-500',
      description: 'The most powerful function; it combines all 2D transforms (translate, rotate, scale, skew) into a single 6-value function based on matrix algebra. All other 2D transforms are special cases of the matrix function.',
      codeSnippet: '/* matrix(a, b, c, d, tx, ty) */\nmatrix(1, 0.5, 0, 1, 50, 0);\n\n/* This example is a combination of scale, skew, and translate. */',
      demoStyle: { transform: 'matrix(1.2, 0.2, 0, 1.2, 10, 10)', transition: 'transform 0.5s' }, // Static demo for matrix complexity
    },
  ];

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-950 min-h-screen font-sans">
      {/* Inject animation styles */}
      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />

      {/* --- Course Header Section --- */}
      <header className="text-center mb-12 py-8 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-2xl border-b-4 border-indigo-500">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-2">
          Mastering CSS 2D Transforms
        </h1>
        <p className="text-xl text-indigo-600 dark:text-indigo-400 font-semibold">
          Lesson 1: Translate, Rotate, Scale, and Skew
        </p>
      </header>

      {/* --- Learning Objectives --- */}
      <div className="mb-12 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border-l-4 border-indigo-400">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 flex items-center">
          <Target className="w-6 h-6 mr-2 text-indigo-500"/> Learning Objectives
        </h2>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300 list-inside">
          <li className="flex items-start"><span className="text-indigo-500 mr-2 font-bold">•</span> Understand the difference between `transform` and standard positioning.</li>
          <li className="flex items-start"><span className="text-indigo-500 mr-2 font-bold">•</span> Apply the four core 2D transform functions (`translate`, `rotate`, `scale`, `skew`).</li>
          <li className="flex items-start"><span className="text-indigo-500 mr-2 font-bold">•</span> Learn to combine multiple transform functions for complex effects.</li>
          <li className="flex items-start"><span className="text-indigo-500 mr-2 font-bold">•</span> Recognize the performance benefits of using the `transform` property.</li>
        </ul>
      </div>

      {/* --- Interactive Playground Section (Module 1) --- */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 border-b pb-2 border-indigo-200 dark:border-indigo-700 flex items-center">
          <Zap className="w-6 h-6 mr-2 text-yellow-500"/> Module 1: The Transform Combinator
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          Use this interactive simulator to see how applying multiple transforms sequentially affects the final position, size, and orientation of the element.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Transform Controls Panel */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-2xl h-fit border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-6 flex items-center">
              <Square className="w-5 h-5 mr-2" /> Live Controls
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-x-6">
              {/* Translate */}
              <ControlSlider label="Translate X (px)" value={translateX} onChange={setTranslateX} min={-100} max={100} step={1} unit="px" />
              <ControlSlider label="Translate Y (px)" value={translateY} onChange={setTranslateY} min={-100} max={100} step={1} unit="px" />
              
              {/* Rotate */}
              <ControlSlider label="Rotate (deg)" value={rotate} onChange={setRotate} min={-180} max={180} step={1} unit="deg" />
              
              {/* Scale */}
              <ControlSlider label="Scale X (factor)" value={scaleX} onChange={setScaleX} min={0.1} max={3} step={0.1} unit="" />
              <ControlSlider label="Scale Y (factor)" value={scaleY} onChange={setScaleY} min={0.1} max={3} step={0.1} unit="" />

              {/* Skew */}
              <ControlSlider label="Skew X (deg)" value={skewX} onChange={setSkewX} min={-45} max={45} step={1} unit="deg" />
              <ControlSlider label="Skew Y (deg)" value={skewY} onChange={setSkewY} min={-45} max={45} step={1} unit="deg" />
            </div>

            <div className="mt-4">
              <button
                onClick={resetTransforms}
                className="w-full py-2 px-4 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition duration-200"
              >
                Reset All Transforms
              </button>
            </div>
          </div>
          
          {/* Transform Preview Area */}
          <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 relative overflow-hidden min-h-[400px]">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
              <div className="w-full h-full" style={{ 
                  backgroundImage: 'repeating-linear-gradient(0deg, #ccc 0, #ccc 1px, transparent 1px, transparent 20px), repeating-linear-gradient(-90deg, #ccc 0, #ccc 1px, transparent 1px, transparent 20px)', 
                  backgroundSize: '20px 20px',
                  opacity: 0.5
              }}></div>
            </div>

            {/* The Live Transform Box */}
            <div
              className="w-32 h-32 flex items-center justify-center rounded-lg shadow-2xl transition-all duration-300 ease-in-out font-bold text-white text-lg absolute bg-indigo-500"
              style={{ transform: transformStyle }}
            >
              TRANSFORM ME!
            </div>

            {/* Display Current CSS Value */}
            <div className="absolute bottom-4 left-4 right-4 bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-xs font-mono break-all shadow-inner">
              <span className="text-gray-900 dark:text-gray-100">Current CSS: </span>
              <span className="text-green-600 dark:text-green-400">{transformStyle};</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- Theoretical Explanation Section (Module 2) --- */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b pb-2 border-indigo-200 dark:border-indigo-700 flex items-center">
          <TrendingUp className="w-6 h-6 mr-2 text-green-500"/> Module 2: The Five Core Functions
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          Below is a detailed reference guide for each 2D transform function, including syntax and a dedicated animation to showcase its primary effect.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {transformDescriptions.map((desc) => (
            <TransformCard key={desc.title} {...desc} />
          ))}
        </div>
      </section>

      {/* --- Performance Note --- */}
      <div className="p-6 bg-indigo-50 dark:bg-indigo-900/50 rounded-xl shadow-inner border border-indigo-200 dark:border-indigo-700">
        <h3 className="text-xl font-bold text-indigo-800 dark:text-indigo-200 mb-2">
          ⚡ Advanced Topic: Performance and the Compositor Layer
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          The `transform` property is highly performant because it can be handled by the GPU (Graphics Processing Unit). Specifically, `translate` (when used with `translateZ(0)` or `translate3d`), `rotate`, and `scale` are considered "cheap" transforms as they only trigger the **Composite** stage of the rendering pipeline, avoiding costly **Layout** and **Paint** stages. This is why using CSS transforms for animations is generally better than animating properties like `top`, `left`, `width`, or `height`. Always prefer transforms for animations!
        </p>
      </div>
    </div>
  );
};

export default Css2dTransforms;
