import React, { useState, useEffect } from 'react';
import { Smartphone, Tablet, Monitor, Layout, Code, Check, Copy, Maximize, Minimize, Grid } from 'lucide-react';

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

const DeviceButton = ({ icon: Icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all duration-200 w-24 h-24 ${active
        ? 'bg-indigo-50 dark:bg-indigo-900/30 border-indigo-500 text-indigo-700 dark:text-indigo-300'
        : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-indigo-300 dark:hover:border-indigo-700 hover:text-indigo-600'
      }`}
  >
    <Icon className="w-8 h-8 mb-2" />
    <span className="text-xs font-bold">{label}</span>
  </button>
);

// --- Main Component ---

const CssFlexResponsive = () => {
  const [viewportWidth, setViewportWidth] = useState(1000);
  const [activeDevice, setActiveDevice] = useState('desktop');

  // Update viewport width when device changes
  useEffect(() => {
    switch (activeDevice) {
      case 'mobile': setViewportWidth(375); break;
      case 'tablet': setViewportWidth(768); break;
      case 'desktop': setViewportWidth(1200); break;
    }
  }, [activeDevice]);

  // Determine active layout based on width
  const getLayoutState = (width) => {
    if (width <= 480) return 'mobile';
    if (width <= 768) return 'tablet';
    return 'desktop';
  };

  const layoutState = getLayoutState(viewportWidth);

  const getCodeSnippet = () => {
    return `/* Base Styles (Desktop) */
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
}
.card {
  flex: 1 1 200px; /* Grow, Shrink, Basis */
}

/* Tablet (< 768px) */
@media (max-width: 768px) {
  .container {
    justify-content: space-around;
  }
}

/* Mobile (< 480px) */
@media (max-width: 480px) {
  .container {
    flex-direction: column;
    align-items: center;
  }
  .card {
    flex-basis: 100%; /* Full width */
  }
}`;
  };

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-gray-900 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl mb-4">
          <Layout className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          Responsive Flexbox
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Combine the power of Flexbox with Media Queries to create layouts that adapt perfectly to any device.
        </p>
      </header>

      {/* Interactive Sandbox */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Maximize className="w-6 h-6 mr-2 text-indigo-500" />
            Responsive Lab
          </h2>
          <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-bold uppercase tracking-wider">
            Interactive
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Controls */}
          <div className="lg:col-span-4 space-y-6">

            {/* Device Switcher */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Simulate Device</h3>
              <div className="flex gap-4 justify-center">
                <DeviceButton
                  icon={Smartphone}
                  label="Mobile"
                  active={activeDevice === 'mobile'}
                  onClick={() => setActiveDevice('mobile')}
                />
                <DeviceButton
                  icon={Tablet}
                  label="Tablet"
                  active={activeDevice === 'tablet'}
                  onClick={() => setActiveDevice('tablet')}
                />
                <DeviceButton
                  icon={Monitor}
                  label="Desktop"
                  active={activeDevice === 'desktop'}
                  onClick={() => setActiveDevice('desktop')}
                />
              </div>
            </div>

            {/* Width Slider */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex justify-between mb-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Viewport Width</label>
                <span className="text-sm font-mono text-indigo-600 dark:text-indigo-400">{viewportWidth}px</span>
              </div>
              <input
                type="range"
                min="320"
                max="1200"
                value={viewportWidth}
                onChange={(e) => {
                  setViewportWidth(parseInt(e.target.value));
                  setActiveDevice('custom');
                }}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-indigo-500"
              />
            </div>

            {/* Current State Info */}
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl border border-indigo-100 dark:border-indigo-800/30">
              <div className="flex items-center mb-2">
                <div className={`w-3 h-3 rounded-full mr-2 ${layoutState === 'mobile' ? 'bg-pink-500' :
                    layoutState === 'tablet' ? 'bg-purple-500' : 'bg-indigo-500'
                  }`}></div>
                <span className="font-bold text-indigo-900 dark:text-indigo-300 uppercase">
                  {layoutState} Layout
                </span>
              </div>
              <p className="text-sm text-indigo-700 dark:text-indigo-400">
                {layoutState === 'mobile' && "Stacked vertically. Items take full width."}
                {layoutState === 'tablet' && "Wrapping enabled. Items share space."}
                {layoutState === 'desktop' && "Full grid. Items distributed evenly."}
              </p>
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
                style={{ width: `${Math.min(viewportWidth, 700)}px`, height: '400px' }}
              >
                <div className="bg-gray-200 dark:bg-gray-700 p-2 text-center text-xs text-gray-500 border-b border-gray-300 dark:border-gray-600">
                  Browser Window ({viewportWidth}px)
                </div>

                <div className="p-4 overflow-y-auto flex-1">
                  <div
                    className="flex flex-wrap gap-4 transition-all duration-300"
                    style={{
                      flexDirection: layoutState === 'mobile' ? 'column' : 'row',
                      justifyContent: layoutState === 'tablet' ? 'space-around' : 'center',
                      alignItems: layoutState === 'mobile' ? 'center' : 'stretch'
                    }}
                  >
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="bg-indigo-500 text-white font-bold rounded-lg p-6 shadow-sm flex items-center justify-center transition-all duration-300"
                        style={{
                          flex: '1 1 200px',
                          minWidth: '150px',
                          width: layoutState === 'mobile' ? '100%' : 'auto',
                          flexBasis: layoutState === 'mobile' ? '100%' : '200px'
                        }}
                      >
                        Card {i}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Generated Code */}
            <CodeSnippetBlock
              codeSnippet={getCodeSnippet()}
              title="Responsive CSS Logic"
            />
          </div>
        </div>
      </section>

      {/* Concepts Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          Key Techniques
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Flex Wrap */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-3">
                <Grid className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Wrapping is Key</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">flex-wrap: wrap</p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              Without wrapping, flex items will try to squeeze onto a single line, causing overflow or shrinking too much. <code className="text-indigo-500 font-mono">flex-wrap: wrap</code> allows items to flow to the next line when space runs out.
            </p>
          </div>

          {/* Flex Basis */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                <Minimize className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Smart Sizing</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">flex: 1 1 200px</p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              Using the shorthand <code className="text-indigo-500 font-mono">flex: 1 1 200px</code> tells the item to grow (1), shrink (1), and start at a base width of 200px. This creates fluid grids without complex math.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default CssFlexResponsive;