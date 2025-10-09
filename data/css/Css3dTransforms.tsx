import React, { useState, useMemo, useCallback } from 'react';
import { Target, Zap, TrendingUp, Grid3x3, Code, Copy, Check, RotateCcw, Rss, Layers, Move3d } from 'lucide-react';

// --- Utility Components (Reused/Adapted) ---

/**
 * Slider component for controlling transform values.
 */
const ControlSlider = ({ label, value, onChange, min, max, step, unit }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      {label}: <span className="font-semibold text-pink-600 dark:text-pink-400">{value}{unit}</span>
    </label>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(parseFloat(e.target.value))}
      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-gray-700 accent-pink-500"
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
      const isPerspective = codeSnippet.includes('perspective');
      const prefix = isPerspective ? '' : 'transform: ';
      
      // Create a temporary textarea to hold the text for copying
      const textarea = document.createElement('textarea');
      // Replace double newlines with single for clean copy
      textarea.value = `${prefix}${codeSnippet.replace(/\n\n/g, '\n')}`; 
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

  const isPerspective = codeSnippet.includes('perspective');

  return (
    <div className="relative mb-4">
      <pre 
        ref={codeRef}
        className="p-3 bg-gray-900 dark:bg-gray-900 rounded-lg text-xs font-mono overflow-x-auto text-green-400 border border-gray-700 dark:border-gray-700 shadow-inner"
        style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
      >
        <code className="text-pink-400">{isPerspective ? 'perspective:' : 'transform:'}</code> {codeSnippet}
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-1 rounded transition-all duration-200 text-gray-400 hover:text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
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
    <div className="flex justify-center items-center h-20 bg-gray-50 dark:bg-gray-900 border border-dashed border-gray-300 dark:border-gray-600 rounded-lg perspective-demo">
      <div
        className="w-10 h-10 bg-pink-500 rounded-md shadow-xl flex items-center justify-center text-white font-bold text-xs"
        style={demoStyle}
      >
        LIVE
      </div>
    </div>
  </div>
);

// --- Main Component ---

const Css3dTransforms = () => {
  // State for 3D transform properties
  const [perspective, setPerspective] = useState(500);
  const [rotateX, setRotateX] = useState(45);
  const [rotateY, setRotateY] = useState(-45);
  const [translateZ, setTranslateZ] = useState(0);

  // Memoized style for the parent container (Perspective)
  const perspectiveStyle = useMemo(() => {
    return { perspective: `${perspective}px` };
  }, [perspective]);

  // Memoized style for the interactive cube (3D Transforms)
  const transformStyle = useMemo(() => {
    return `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateZ(${translateZ}px)
    `.replace(/\s+/g, ' ').trim(); // Clean up whitespace
  }, [rotateX, rotateY, translateZ]);

  // Handler to reset all values
  const resetTransforms = useCallback(() => {
    setPerspective(500);
    setRotateX(0);
    setRotateY(0);
    setTranslateZ(0);
  }, []);

  // --- Animation Styles (Defined as a string to be injected via <style>) ---
  const animationStyles = `
    /* Container for the 3D cube */
    .cube-container {
      width: 100px;
      height: 100px;
      position: relative;
      transform-style: preserve-3d;
      transform: rotateX(20deg) rotateY(-30deg);
    }
    /* Faces of the 3D cube */
    .cube-face {
      position: absolute;
      width: 100px;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid rgba(0,0,0,0.2);
      font-size: 0.75rem;
      font-weight: bold;
      color: white;
      text-shadow: 0 0 3px black;
      opacity: 0.9;
    }
    .cube-front  { background: #ef4444; transform: rotateY(0deg) translateZ(50px); }
    .cube-back   { background: #3b82f6; transform: rotateY(180deg) translateZ(50px); }
    .cube-right  { background: #10b981; transform: rotateY(90deg) translateZ(50px); }
    .cube-left   { background: #f97316; transform: rotateY(-90deg) translateZ(50px); }
    .cube-top    { background: #a855f7; transform: rotateX(90deg) translateZ(50px); }
    .cube-bottom { background: #ec4899; transform: rotateX(-90deg) translateZ(50px); }

    /* Demo Animations */
    @keyframes rotateXDemo {
      0%, 100% { transform: rotateX(0deg); }
      50% { transform: rotateX(30deg); }
    }
    @keyframes rotateYDemo {
      0% { transform: rotateY(0deg); }
      100% { transform: rotateY(360deg); }
    }
    @keyframes translateZDemo {
      0%, 100% { transform: translateZ(0px); }
      50% { transform: translateZ(20px); }
    }
    .rotate-x-demo { animation: rotateXDemo 3s infinite alternate ease-in-out; }
    .rotate-y-demo { animation: rotateYDemo 4s infinite linear; }
    .translate-z-demo { animation: translateZDemo 2s infinite alternate ease-in-out; }

    .perspective-demo {
      perspective: 300px; /* Set perspective on card container */
    }
  `;

  // Descriptions for the 3D transform functions
  const transformDescriptions = [
    {
      title: 'perspective',
      icon: Layers,
      color: 'border-t-purple-500 text-purple-500',
      description: 'Crucial for 3D realism, this property defines the distance between the user and the Z=0 plane. It must be set on the **parent** element, not the element being transformed. Lower values create a more extreme, dramatic 3D effect.',
      codeSnippet: '300px;\n\n/* Parent Container CSS */\n.parent {\n  perspective: 600px;\n}',
      demoStyle: { transform: 'rotateX(20deg) rotateY(-10deg)', transition: 'transform 0.5s', transformOrigin: 'center center' },
    },
    {
      title: 'rotateX()',
      icon: RotateCcw,
      color: 'border-t-red-500 text-red-500',
      description: 'Rotates the element around the horizontal (X) axis. This creates an effect similar to looking up or down at a rotating object. The rotation angle is specified in degrees (`deg`).',
      codeSnippet: 'rotateX(75deg); \n\n/* Combination with Z-axis translation */\nrotateX(45deg) translateZ(100px);',
      demoStyle: { animation: 'rotateXDemo 3s infinite alternate ease-in-out' },
    },
    {
      title: 'rotateY()',
      icon: RotateCcw,
      color: 'border-t-blue-500 text-blue-500',
      description: 'Rotates the element around the vertical (Y) axis. This is the primary rotation used to create the turning or spinning effect in 3D space, similar to opening a door.',
      codeSnippet: 'rotateY(-90deg); \n\n/* Combine Y and Z rotation */\nrotateY(180deg) rotateZ(30deg);',
      demoStyle: { animation: 'rotateYDemo 4s infinite linear' },
    },
    {
      title: 'translateZ()',
      icon: Move3d,
      color: 'border-t-green-500 text-green-500',
      description: 'Moves the element along the Z-axis (depth). Positive values move the element closer to the viewer (making it appear larger), and negative values move it away (making it appear smaller). Requires `perspective` on the parent.',
      codeSnippet: 'translateZ(100px);\n\n/* The 3D version of translate: */\ntranslate3d(50px, -20px, 80px);',
      demoStyle: { animation: 'translateZDemo 2s infinite alternate ease-in-out' },
    },
    {
      title: 'transform-style: preserve-3d',
      icon: Rss,
      color: 'border-t-yellow-500 text-yellow-500',
      description: 'An essential property for creating complex 3D objects (like cubes). When set on a parent, it ensures that the parent’s children are rendered in the same 3D space, rather than flattening them back to the 2D plane.',
      codeSnippet: '/* Set on parent container */\ntransform-style: preserve-3d;',
      demoStyle: { transform: 'rotateX(10deg) rotateY(15deg)', transformStyle: 'preserve-3d', backgroundColor: 'transparent' }, 
      // This demo will be static as preserve-3d is a container property.
      // Use a custom demo for this card
      customDemo: (
        <div className="flex justify-center items-center h-20 bg-gray-50 dark:bg-gray-900 border border-dashed border-gray-300 dark:border-gray-600 rounded-lg perspective-demo">
          <div className="cube-container" style={{ transform: 'rotateX(20deg) rotateY(-30deg) scale(0.6)' }}>
            <div className="cube-face cube-front">FRONT</div>
            <div className="cube-face cube-back">BACK</div>
            <div className="cube-face cube-right">RIGHT</div>
          </div>
        </div>
      )
    },
    {
      title: 'matrix3d() (Ultimate)',
      icon: Grid3x3,
      color: 'border-t-pink-500 text-pink-500',
      description: 'The master transform function. It combines all possible 3D transforms (translate, rotate, scale, skew, and perspective) into a single 16-value matrix based on linear algebra. All other 3D functions are simply shorthands for specific `matrix3d` values.',
      codeSnippet: '/* 16 values! */\nmatrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);',
      demoStyle: { transform: 'matrix3d(1.1, 0.1, 0, 0, -0.1, 1.1, 0, 0, 0, 0, 1, 0.001, 10, 10, 0, 1.2)', transition: 'transform 0.5s' }, // Complex static demo
    },
  ];

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-pink-100 dark:from-gray-900 dark:to-pink-950 min-h-screen font-sans">
      {/* Inject animation styles */}
      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />

      {/* --- Course Header Section --- */}
      <header className="text-center mb-12 py-8 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-2xl border-b-4 border-pink-500">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-2">
          Mastering CSS 3D Transforms
        </h1>
        <p className="text-xl text-pink-600 dark:text-pink-400 font-semibold">
          Lesson 2: Depth, Perspective, and Spatial Movement
        </p>
      </header>

      {/* --- Learning Objectives --- */}
      <div className="mb-12 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border-l-4 border-pink-400">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 flex items-center">
          <Target className="w-6 h-6 mr-2 text-pink-500"/> Learning Objectives
        </h2>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300 list-inside">
          <li className="flex items-start"><span className="text-pink-500 mr-2 font-bold">•</span> Understand the role of **`perspective`** in creating depth.</li>
          <li className="flex items-start"><span className="text-pink-500 mr-2 font-bold">•</span> Apply rotation and translation along the three axes (X, Y, Z).</li>
          <li className="flex items-start"><span className="text-pink-500 mr-2 font-bold">•</span> Use **`transform-style: preserve-3d`** for building 3D objects.</li>
          <li className="flex items-start"><span className="text-pink-500 mr-2 font-bold">•</span> Combine 3D transforms to create complex, volumetric effects.</li>
        </ul>
      </div>

      {/* --- Interactive Playground Section (Module 1) --- */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 border-b pb-2 border-pink-200 dark:border-pink-700 flex items-center">
          <Zap className="w-6 h-6 mr-2 text-yellow-500"/> Module 1: The Interactive 3D Cube
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          Adjust the sliders below to control the perspective (distance from the viewer) and the orientation of the 3D cube. Notice how **`perspective`** (set on the container) controls how dramatic the rotation looks.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Transform Controls Panel */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-2xl h-fit border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-pink-600 dark:text-pink-400 mb-6 flex items-center">
              <Layers className="w-5 h-5 mr-2" /> 3D Spatial Controls
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-x-6">
              {/* Perspective (Parent) */}
              <ControlSlider label="Perspective (px - Parent)" value={perspective} onChange={setPerspective} min={100} max={1000} step={10} unit="px" />
              
              {/* Translate Z (Depth) */}
              <ControlSlider label="Translate Z (px - Depth)" value={translateZ} onChange={setTranslateZ} min={-100} max={100} step={1} unit="px" />
              
              {/* Rotate X (Pitch) */}
              <ControlSlider label="Rotate X (deg - Horizontal Axis)" value={rotateX} onChange={setRotateX} min={-180} max={180} step={1} unit="deg" />
              
              {/* Rotate Y (Yaw) */}
              <ControlSlider label="Rotate Y (deg - Vertical Axis)" value={rotateY} onChange={setRotateY} min={-180} max={180} step={1} unit="deg" />
            </div>

            <div className="mt-4">
              <button
                onClick={resetTransforms}
                className="w-full py-2 px-4 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition duration-200"
              >
                Reset 3D View
              </button>
            </div>
          </div>
          
          {/* Transform Preview Area - 3D Cube Demo */}
          <div 
            className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 relative overflow-hidden min-h-[400px]"
            style={perspectiveStyle} // PERSPECTIVE IS ON THE PARENT
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
              <div className="w-full h-full" style={{ 
                  backgroundImage: 'repeating-linear-gradient(0deg, #ccc 0, #ccc 1px, transparent 1px, transparent 20px), repeating-linear-gradient(-90deg, #ccc 0, #ccc 1px, transparent 1px, transparent 20px)', 
                  backgroundSize: '20px 20px',
                  opacity: 0.5
              }}></div>
            </div>

            {/* The 3D Cube Container (transform-style: preserve-3d) */}
            <div
              className="cube-container"
              style={{ 
                transform: transformStyle, // 3D TRANSFORMS ARE ON THE CHILD
                transition: 'transform 0.5s ease-out'
              }}
            >
              <div className="cube-face cube-front">FRONT</div>
              <div className="cube-face cube-back">BACK</div>
              <div className="cube-face cube-right">RIGHT</div>
              <div className="cube-face cube-left">LEFT</div>
              <div className="cube-face cube-top">TOP</div>
              <div className="cube-face cube-bottom">BOTTOM</div>
            </div>

            {/* Display Current CSS Value */}
            <div className="absolute bottom-4 left-4 right-4 bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-xs font-mono break-all shadow-inner">
              <span className="text-gray-900 dark:text-gray-100">Cube Transform: </span>
              <span className="text-green-600 dark:text-green-400">{transformStyle};</span>
              <br/>
              <span className="text-gray-900 dark:text-gray-100">Parent Perspective: </span>
              <span className="text-green-600 dark:text-green-400">perspective: {perspective}px;</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- Theoretical Explanation Section (Module 2) --- */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b pb-2 border-pink-200 dark:border-pink-700 flex items-center">
          <TrendingUp className="w-6 h-6 mr-2 text-green-500"/> Module 2: Essential 3D Properties
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          Here is a detailed breakdown of the functions that allow you to move and rotate elements in three dimensions. Pay close attention to where `perspective` is applied.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {transformDescriptions.map((desc) => (
            <TransformCard key={desc.title} {...desc} />
          ))}
        </div>
      </section>

      {/* --- Performance Note --- */}
      <div className="p-6 bg-pink-50 dark:bg-pink-900/50 rounded-xl shadow-inner border border-pink-200 dark:border-pink-700">
        <h3 className="text-xl font-bold text-pink-800 dark:text-pink-200 mb-2">
          ⚡ GPU Acceleration: The Secret to Smooth 3D
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          CSS 3D transforms are automatically GPU-accelerated by the browser, meaning they are incredibly fast and smooth. If you ever need to manually force an element onto the GPU to optimize a complex 2D animation, you can use the trick `transform: translateZ(0);` (often called the "null transform") or `will-change: transform;`. This ensures the element is ready to be composited directly by the graphics hardware, leading to buttery-smooth animations.
        </p>
      </div>
    </div>
  );
};

export default Css3dTransforms;
