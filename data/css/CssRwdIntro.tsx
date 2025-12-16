import React, { useState, useEffect } from 'react';
import { Smartphone, Tablet, Monitor, Layout, Code, Check, Copy, Maximize, Image as ImageIcon, Scale } from 'lucide-react';

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

const CssRwdIntro = () => {
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
    return `/* Base Styles (Desktop First) */
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.card {
  flex: 1 1 200px;
}
img {
  max-width: 100%; /* Flexible Image */
  height: auto;
}

/* Tablet (< 768px) */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}

/* Mobile (< 480px) */
@media (max-width: 480px) {
  .container {
    padding: 10px;
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
          Responsive Web Design
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          One codebase, every device. Learn the core principles of building layouts that adapt to any screen size.
        </p>
      </header>

      {/* Interactive Sandbox */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Maximize className="w-6 h-6 mr-2 text-indigo-500" />
            Responsive Simulator
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
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Test Device</h3>
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
                  {layoutState} View
                </span>
              </div>
              <p className="text-sm text-indigo-700 dark:text-indigo-400">
                {layoutState === 'mobile' && "Single column stack. Padding reduced."}
                {layoutState === 'tablet' && "Vertical stack. Standard padding."}
                {layoutState === 'desktop' && "Horizontal row. Multi-column layout."}
              </p>
            </div>

          </div>

          {/* Preview & Code */}
          <div className="lg:col-span-8 space-y-6">
            {/* Live Preview */}
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 min-h-[500px] flex flex-col items-center justify-center relative overflow-hidden transition-all duration-300">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

              {/* Resizable Container */}
              <div
                className="bg-white dark:bg-gray-800 shadow-2xl rounded-lg overflow-hidden border-x-4 border-gray-300 dark:border-gray-600 transition-all duration-300 ease-out flex flex-col"
                style={{ width: `${Math.min(viewportWidth, 700)}px`, height: '400px' }}
              >
                <div className="bg-gray-200 dark:bg-gray-700 p-2 text-center text-xs text-gray-500 border-b border-gray-300 dark:border-gray-600">
                  {viewportWidth}px
                </div>

                <div className="p-4 overflow-y-auto flex-1">
                  {/* Responsive Content */}
                  <div
                    className="flex gap-4 transition-all duration-300"
                    style={{
                      flexDirection: layoutState === 'desktop' ? 'row' : 'column',
                      padding: layoutState === 'mobile' ? '10px' : '20px'
                    }}
                  >
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="bg-indigo-500 text-white rounded-lg p-6 shadow-sm flex flex-col items-center justify-center transition-all duration-300"
                        style={{ flex: '1 1 0' }}
                      >
                        <div className="w-12 h-12 bg-white/20 rounded-full mb-3 flex items-center justify-center">
                          <span className="font-bold text-lg">{i}</span>
                        </div>
                        <div className="h-2 w-20 bg-white/20 rounded mb-2"></div>
                        <div className="h-2 w-14 bg-white/20 rounded"></div>
                      </div>
                    ))}
                  </div>

                  {/* Flexible Image Demo */}
                  <div className="mt-6 px-4">
                    <h4 className="text-xs font-bold text-gray-500 uppercase mb-2">Flexible Image</h4>
                    <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 p-2 rounded-lg">
                      <img
                        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                        alt="Landscape"
                        className="rounded w-full h-auto"
                      />
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Generated Code */}
            <CodeSnippetBlock
              codeSnippet={getCodeSnippet()}
              title="Responsive Logic"
            />
          </div>
        </div>
      </section>

      {/* Core Principles Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          The Three Pillars of RWD
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {/* Fluid Grids */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                <Layout className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Fluid Grids</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Use relative units like <code className="text-indigo-500 font-mono">%</code> or <code className="text-indigo-500 font-mono">fr</code> instead of fixed pixels.
            </p>
            <CodeSnippetBlock
              language="css"
              codeSnippet={`.container { width: 90%; }`}
            />
          </div>

          {/* Flexible Images */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-3">
                <ImageIcon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Flexible Images</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Ensure images never overflow their container.
            </p>
            <CodeSnippetBlock
              language="css"
              codeSnippet={`img { max-width: 100%; height: auto; }`}
            />
          </div>

          {/* Media Queries */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg mr-3">
                <Scale className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Media Queries</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Apply styles based on the device's characteristics.
            </p>
            <CodeSnippetBlock
              language="css"
              codeSnippet={`@media (max-width: 768px) { ... }`}
            />
          </div>

        </div>
      </section>

      {/* Viewport Meta Tag */}
      <section className="max-w-4xl mx-auto mb-16">
        <div className="bg-indigo-900 rounded-xl p-8 shadow-xl text-white">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-indigo-800 rounded-lg">
              <Code className="w-6 h-6 text-indigo-300" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">The Magic Meta Tag</h3>
              <p className="text-indigo-200 mb-6">
                Without this line in your HTML <code className="text-white font-mono">&lt;head&gt;</code>, your responsive CSS won't work correctly on mobile devices.
              </p>
              <CodeSnippetBlock
                language="html"
                title="Required HTML"
                codeSnippet={`<meta name="viewport" content="width=device-width, initial-scale=1.0">`}
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CssRwdIntro;