import React, { useState, useEffect } from 'react';
import { Smartphone, Tablet, Monitor, Scale, Code, Check, Copy, ArrowRight, Layers, Settings } from 'lucide-react';

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

const CssRwdMediaQueries = () => {
  const [width, setWidth] = useState(1000);
  const [activeBreakpoint, setActiveBreakpoint] = useState('desktop');

  useEffect(() => {
    if (width <= 480) setActiveBreakpoint('mobile');
    else if (width <= 768) setActiveBreakpoint('tablet');
    else setActiveBreakpoint('desktop');
  }, [width]);

  const getActiveCode = () => {
    if (activeBreakpoint === 'mobile') {
      return `/* Mobile Styles (< 480px) */
@media (max-width: 480px) {
  .container {
    flex-direction: column;
    padding: 10px;
  }
  .box {
    width: 100%; /* Full width */
    background-color: #ef4444; /* Red for Mobile */
  }
}`;
    } else if (activeBreakpoint === 'tablet') {
      return `/* Tablet Styles (481px - 768px) */
@media (max-width: 768px) {
  .container {
    flex-direction: row;
    flex-wrap: wrap;
  }
  .box {
    width: 48%; /* 2 per row */
    background-color: #8b5cf6; /* Purple for Tablet */
  }
}`;
    } else {
      return `/* Desktop Styles (> 768px) */
.container {
  display: flex;
  flex-direction: row;
  gap: 20px;
}
.box {
  width: 30%; /* 3 per row */
  background-color: #3b82f6; /* Blue for Desktop */
}
/* No media query needed for base styles */`;
    }
  };

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-gray-900 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl mb-4">
          <Scale className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          CSS Media Queries
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          The brain of responsive design. Apply styles conditionally based on the device's characteristics.
        </p>
      </header>

      {/* Interactive Sandbox */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Settings className="w-6 h-6 mr-2 text-indigo-500" />
            Breakpoint Lab
          </h2>
          <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-bold uppercase tracking-wider">
            Interactive
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Controls */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-100 dark:border-gray-700 pb-2">
                Viewport Simulator
              </h3>

              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Screen Width</label>
                  <span className="text-sm font-mono text-indigo-600 dark:text-indigo-400">{width}px</span>
                </div>
                <input
                  type="range"
                  min="320"
                  max="1200"
                  value={width}
                  onChange={(e) => setWidth(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-indigo-500"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1 font-mono">
                  <span>320px</span>
                  <span>| 480px</span>
                  <span>| 768px</span>
                  <span>1200px</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setWidth(400)}
                  className={`flex flex-col items-center p-2 rounded-lg border transition-all ${activeBreakpoint === 'mobile'
                      ? 'bg-red-50 border-red-500 text-red-600 dark:bg-red-900/20 dark:text-red-400'
                      : 'border-gray-200 dark:border-gray-700 text-gray-500'
                    }`}
                >
                  <Smartphone className="w-5 h-5 mb-1" />
                  <span className="text-xs font-bold">Mobile</span>
                </button>
                <button
                  onClick={() => setWidth(700)}
                  className={`flex flex-col items-center p-2 rounded-lg border transition-all ${activeBreakpoint === 'tablet'
                      ? 'bg-purple-50 border-purple-500 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400'
                      : 'border-gray-200 dark:border-gray-700 text-gray-500'
                    }`}
                >
                  <Tablet className="w-5 h-5 mb-1" />
                  <span className="text-xs font-bold">Tablet</span>
                </button>
                <button
                  onClick={() => setWidth(1000)}
                  className={`flex flex-col items-center p-2 rounded-lg border transition-all ${activeBreakpoint === 'desktop'
                      ? 'bg-blue-50 border-blue-500 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
                      : 'border-gray-200 dark:border-gray-700 text-gray-500'
                    }`}
                >
                  <Monitor className="w-5 h-5 mb-1" />
                  <span className="text-xs font-bold">Desktop</span>
                </button>
              </div>
            </div>

            {/* Active Query Info */}
            <div className={`p-4 rounded-xl border transition-colors duration-300 ${activeBreakpoint === 'mobile' ? 'bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800' :
                activeBreakpoint === 'tablet' ? 'bg-purple-50 border-purple-200 dark:bg-purple-900/20 dark:border-purple-800' :
                  'bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800'
              }`}>
              <h4 className="text-xs font-bold uppercase tracking-wider mb-2 opacity-70">Active Media Query</h4>
              <code className="text-sm font-mono font-bold block">
                {activeBreakpoint === 'mobile' && '@media (max-width: 480px)'}
                {activeBreakpoint === 'tablet' && '@media (max-width: 768px)'}
                {activeBreakpoint === 'desktop' && 'Default Styles (No Query)'}
              </code>
            </div>
          </div>

          {/* Preview & Code */}
          <div className="lg:col-span-8 space-y-6">
            {/* Live Preview */}
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 min-h-[400px] flex flex-col items-center justify-center relative overflow-hidden transition-all duration-300">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

              {/* Resizable Container */}
              <div
                className="bg-white dark:bg-gray-800 shadow-2xl rounded-lg overflow-hidden border-x-4 border-gray-300 dark:border-gray-600 transition-all duration-300 ease-out flex flex-col"
                style={{ width: `${Math.min(width, 700)}px`, height: '350px' }}
              >
                <div className="bg-gray-200 dark:bg-gray-700 p-2 text-center text-xs text-gray-500 border-b border-gray-300 dark:border-gray-600 flex justify-between px-4">
                  <span>{width}px</span>
                  <span className="uppercase font-bold">{activeBreakpoint}</span>
                </div>

                <div className="p-4 overflow-y-auto flex-1">
                  <div
                    className="flex gap-4 transition-all duration-500"
                    style={{
                      flexDirection: activeBreakpoint === 'mobile' ? 'column' : 'row',
                      flexWrap: 'wrap',
                      padding: activeBreakpoint === 'mobile' ? '10px' : '0'
                    }}
                  >
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="rounded-lg p-6 shadow-sm flex items-center justify-center text-white font-bold text-xl transition-all duration-500"
                        style={{
                          width: activeBreakpoint === 'mobile' ? '100%' : activeBreakpoint === 'tablet' ? '47%' : '30%',
                          backgroundColor: activeBreakpoint === 'mobile' ? '#ef4444' : activeBreakpoint === 'tablet' ? '#8b5cf6' : '#3b82f6',
                          flexGrow: activeBreakpoint === 'tablet' && i === 3 ? 1 : 0
                        }}
                      >
                        Box {i}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Generated Code */}
            <CodeSnippetBlock
              codeSnippet={getActiveCode()}
              title="Applied CSS Rules"
            />
          </div>
        </div>
      </section>

      {/* Core Concepts Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          Media Query Logic
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Mobile First vs Desktop First */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                <Layers className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Mobile-First vs Desktop-First</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Choosing your strategy</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                <h4 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">Mobile-First</h4>
                <p className="text-xs text-gray-600 dark:text-gray-300 mb-2">Start small, expand up.</p>
                <code className="text-xs bg-white dark:bg-black/20 p-1 rounded block">min-width: 768px</code>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                <h4 className="font-bold text-purple-600 dark:text-purple-400 mb-2">Desktop-First</h4>
                <p className="text-xs text-gray-600 dark:text-gray-300 mb-2">Start big, shrink down.</p>
                <code className="text-xs bg-white dark:bg-black/20 p-1 rounded block">max-width: 768px</code>
              </div>
            </div>
          </div>

          {/* Logical Operators */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg mr-3">
                <Code className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Logical Operators</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Combining conditions</p>
              </div>
            </div>

            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="font-mono font-bold text-indigo-500 w-12">and</span>
                <span>Both conditions must be true. <br /><code className="text-xs bg-gray-100 dark:bg-gray-700 px-1 rounded">@media (min-width: 600px) and (orientation: landscape)</code></span>
              </li>
              <li className="flex items-start">
                <span className="font-mono font-bold text-indigo-500 w-12">, (or)</span>
                <span>At least one condition is true. <br /><code className="text-xs bg-gray-100 dark:bg-gray-700 px-1 rounded">@media (max-width: 600px), (orientation: portrait)</code></span>
              </li>
              <li className="flex items-start">
                <span className="font-mono font-bold text-indigo-500 w-12">not</span>
                <span>Negates the query. <br /><code className="text-xs bg-gray-100 dark:bg-gray-700 px-1 rounded">@media not all and (color)</code></span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* Common Breakpoints */}
      <section className="max-w-4xl mx-auto mb-16">
        <div className="bg-indigo-900 rounded-xl p-8 shadow-xl text-white">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-indigo-800 rounded-lg">
              <ArrowRight className="w-6 h-6 text-indigo-300" />
            </div>
            <div className="w-full">
              <h3 className="text-xl font-bold mb-4">Standard Breakpoints</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                  <Smartphone className="w-6 h-6 mx-auto mb-2 text-indigo-300" />
                  <div className="text-xs font-bold opacity-70">Mobile</div>
                  <div className="font-mono text-sm">&lt; 480px</div>
                </div>
                <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                  <Tablet className="w-6 h-6 mx-auto mb-2 text-indigo-300" />
                  <div className="text-xs font-bold opacity-70">Tablet</div>
                  <div className="font-mono text-sm">481 - 768px</div>
                </div>
                <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                  <Monitor className="w-6 h-6 mx-auto mb-2 text-indigo-300" />
                  <div className="text-xs font-bold opacity-70">Laptop</div>
                  <div className="font-mono text-sm">769 - 1024px</div>
                </div>
                <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                  <Monitor className="w-8 h-6 mx-auto mb-2 text-indigo-300" />
                  <div className="text-xs font-bold opacity-70">Desktop</div>
                  <div className="font-mono text-sm">&gt; 1024px</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CssRwdMediaQueries;