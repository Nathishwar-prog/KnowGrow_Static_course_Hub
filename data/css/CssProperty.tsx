import React, { useState, useEffect } from 'react';
import { Settings, Zap, Play, Code, Check, Copy, RefreshCw, Layers, AlertTriangle } from 'lucide-react';

// --- Utility Components ---

const CodeSnippetBlock = ({ codeSnippet, language = 'css', title }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="mb-6 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
      {title && (
        <div className="bg-gray-50 dark:bg-gray-800 px-4 py-2 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{title}</span>
          <div className="flex space-x-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
          </div>
        </div>
      )}
      <div className="relative group bg-gray-900">
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-indigo-600 hover:text-white transition-colors border border-gray-700"
            title="Copy code"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </div>
        <pre className="p-4 overflow-x-auto text-sm font-mono text-gray-300 leading-relaxed">
          <code>{codeSnippet}</code>
        </pre>
      </div>
    </div>
  );
};

// --- Main Component ---

const CssProperty = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  // We inject styles dynamically to demonstrate @property
  // Note: @property support is good in modern browsers (Chrome/Edge/Safari), but we should handle it gracefully.
  const demoStyles = `
    @property --rotate-angle {
      syntax: '<angle>';
      initial-value: 0deg;
      inherits: false;
    }

    .demo-box {
      width: 150px;
      height: 150px;
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      color: white;
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
    }

    /* WITHOUT @property */
    .box-standard {
      --my-angle: 0deg;
      background: conic-gradient(from var(--my-angle), #4f46e5, #ec4899, #4f46e5);
      transition: --my-angle 2s ease-in-out; 
      /* This transition fails because the browser sees --my-angle as a string */
    }
    .box-standard.animate {
      --my-angle: 360deg;
    }

    /* WITH @property */
    .box-property {
      background: conic-gradient(from var(--rotate-angle), #4f46e5, #ec4899, #4f46e5);
      transition: --rotate-angle 2s ease-in-out;
    }
    .box-property.animate {
      --rotate-angle: 360deg;
    }
  `;

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-gray-900 min-h-screen font-sans">
      <style>{demoStyles}</style>

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl mb-4">
          <Settings className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          CSS @property
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Unlock the power of Houdini. Teach the browser how to interpret and animate your custom variables.
        </p>
      </header>

      {/* Interactive Sandbox */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Zap className="w-6 h-6 mr-2 text-indigo-500" />
            The Houdini Magic
          </h2>
          <button
            onClick={() => setIsAnimating(!isAnimating)}
            className={`flex items-center px-4 py-2 rounded-lg font-bold transition-all ${isAnimating
                ? 'bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400'
                : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg hover:shadow-indigo-500/30'
              }`}
          >
            {isAnimating ? <RefreshCw className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
            {isAnimating ? 'Reset Animation' : 'Start Animation'}
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Case 1: Standard Variable */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col items-center">
            <div className="mb-6 text-center">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 flex items-center justify-center">
                <AlertTriangle className="w-4 h-4 mr-2 text-amber-500" />
                Standard Variable
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Browser sees string "0deg" → "360deg"</p>
            </div>

            <div className={`demo-box box-standard ${isAnimating ? 'animate' : ''}`}>
              No Animation
            </div>

            <div className="mt-8 w-full">
              <CodeSnippetBlock
                title="Why it fails"
                codeSnippet={`.box {
  --angle: 0deg;
  /* Browser cannot interpolate strings! */
  transition: --angle 2s; 
}`}
              />
            </div>
          </div>

          {/* Case 2: @property */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col items-center relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              Recommended
            </div>
            <div className="mb-6 text-center">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 flex items-center justify-center">
                <Check className="w-4 h-4 mr-2 text-green-500" />
                With @property
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Browser sees type &lt;angle&gt;</p>
            </div>

            <div className={`demo-box box-property ${isAnimating ? 'animate' : ''}`}>
              Smooth!
            </div>

            <div className="mt-8 w-full">
              <CodeSnippetBlock
                title="The Solution"
                codeSnippet={`@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

.box {
  /* Now it knows how to interpolate! */
  transition: --angle 2s;
}`}
              />
            </div>
          </div>

        </div>
      </section>

      {/* Syntax Breakdown */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          Syntax Breakdown
        </h2>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
            <code className="text-indigo-600 dark:text-indigo-400 font-bold text-lg">@property --name</code>
          </div>

          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <div className="p-6 flex flex-col sm:flex-row gap-4">
              <div className="sm:w-1/3">
                <span className="font-mono text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-gray-800 dark:text-gray-200">syntax</span>
              </div>
              <div className="sm:w-2/3 text-gray-600 dark:text-gray-300">
                <p className="mb-2">Defines the data type. This is crucial for animation.</p>
                <ul className="list-disc list-inside text-sm space-y-1 text-gray-500 dark:text-gray-400">
                  <li><code>"&lt;number&gt;"</code> - Integers or floats</li>
                  <li><code>"&lt;color&gt;"</code> - Hex, rgb, hsl, etc.</li>
                  <li><code>"&lt;angle&gt;"</code> - deg, rad, turn</li>
                  <li><code>"&lt;length&gt;"</code> - px, em, rem, %</li>
                </ul>
              </div>
            </div>

            <div className="p-6 flex flex-col sm:flex-row gap-4">
              <div className="sm:w-1/3">
                <span className="font-mono text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-gray-800 dark:text-gray-200">initial-value</span>
              </div>
              <div className="sm:w-2/3 text-gray-600 dark:text-gray-300">
                <p>Sets the default value if the variable is not defined elsewhere. Required for most syntax types to ensure the browser can always render something.</p>
              </div>
            </div>

            <div className="p-6 flex flex-col sm:flex-row gap-4">
              <div className="sm:w-1/3">
                <span className="font-mono text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-gray-800 dark:text-gray-200">inherits</span>
              </div>
              <div className="sm:w-2/3 text-gray-600 dark:text-gray-300">
                <p><code>true</code> or <code>false</code>. Determines if the property value should be passed down to children elements. Usually <code>false</code> for component-specific animations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Use Case */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          Real World Use Case: Gradient Loader
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              One of the most powerful uses of <code className="text-indigo-500 font-mono">@property</code> is animating gradients. Standard CSS cannot transition between gradient positions or colors smoothly if they are complex. With typed properties, you can animate the percentage stops directly!
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <Layers className="w-4 h-4" />
              <span>Perfect for loading bars, shiny buttons, and borders.</span>
            </div>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
            <CodeSnippetBlock
              codeSnippet={`@property --p {
  syntax: '<percentage>';
  initial-value: 0%;
  inherits: false;
}

.loader {
  background: linear-gradient(
    to right, 
    #4f46e5 var(--p), 
    #e5e7eb 0
  );
  animation: load 2s infinite;
}

@keyframes load {
  to { --p: 100%; }
}`}
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default CssProperty;