import React, { useState, useEffect } from 'react';
import { Smartphone, Tablet, Monitor, Layout, Code, Check, Copy, ArrowRight, Grid } from 'lucide-react';

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

const CssMqExamples = () => {
  const [viewportWidth, setViewportWidth] = useState(1200);
  const [activeDevice, setActiveDevice] = useState('desktop');

  // Update viewport width when device changes
  useEffect(() => {
    switch (activeDevice) {
      case 'mobile': setViewportWidth(375); break;
      case 'tablet': setViewportWidth(768); break;
      case 'desktop': setViewportWidth(1200); break;
    }
  }, [activeDevice]);

  // Determine active breakpoint based on width
  const getBreakpoint = (width) => {
    if (width < 600) return 'mobile';
    if (width < 1024) return 'tablet';
    return 'desktop';
  };

  const currentBreakpoint = getBreakpoint(viewportWidth);

  const getLayoutInfo = () => {
    if (currentBreakpoint === 'mobile') {
      return {
        columns: 1,
        color: 'bg-blue-400',
        label: 'Mobile View (< 600px)',
        desc: 'Single column layout for small screens.'
      };
    } else if (currentBreakpoint === 'tablet') {
      return {
        columns: 2,
        color: 'bg-purple-500',
        label: 'Tablet View (≥ 600px)',
        desc: 'Two column grid for medium screens.'
      };
    } else {
      return {
        columns: 3,
        color: 'bg-indigo-600',
        label: 'Desktop View (≥ 1024px)',
        desc: 'Three column grid for large screens.'
      };
    }
  };

  const layoutInfo = getLayoutInfo();

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-gray-900 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl mb-4">
          <Grid className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          Responsive Grid Example
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          See how a single layout transforms from mobile to desktop using CSS Media Queries.
        </p>
      </header>

      {/* Interactive Sandbox */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Layout className="w-6 h-6 mr-2 text-indigo-500" />
            Live Demo
          </h2>

          {/* Device Toggles */}
          <div className="flex bg-white dark:bg-gray-800 rounded-lg p-1 shadow-sm border border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setActiveDevice('mobile')}
              className={`p-2 rounded-md transition-all ${activeDevice === 'mobile' ? 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400' : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
              title="Mobile"
            >
              <Smartphone size={20} />
            </button>
            <button
              onClick={() => setActiveDevice('tablet')}
              className={`p-2 rounded-md transition-all ${activeDevice === 'tablet' ? 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400' : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
              title="Tablet"
            >
              <Tablet size={20} />
            </button>
            <button
              onClick={() => setActiveDevice('desktop')}
              className={`p-2 rounded-md transition-all ${activeDevice === 'desktop' ? 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400' : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
              title="Desktop"
            >
              <Monitor size={20} />
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">

          {/* Visualizer */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 min-h-[500px] flex flex-col items-center justify-center relative overflow-hidden transition-all duration-500">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

              {/* Simulated Browser Window */}
              <div
                className="bg-white dark:bg-gray-800 shadow-2xl rounded-lg overflow-hidden border-x-4 border-gray-300 dark:border-gray-600 transition-all duration-500 ease-in-out flex flex-col"
                style={{ width: `${Math.min(viewportWidth, 650)}px`, height: '400px' }}
              >
                {/* Browser Header */}
                <div className="bg-gray-200 dark:bg-gray-700 p-2 flex items-center space-x-2 border-b border-gray-300 dark:border-gray-600">
                  <div className="flex space-x-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 text-center text-xs text-gray-500 font-mono">
                    {viewportWidth}px - {layoutInfo.label}
                  </div>
                </div>

                {/* Grid Content */}
                <div className="p-4 overflow-y-auto flex-1">
                  <div
                    className="grid gap-4 transition-all duration-500"
                    style={{
                      gridTemplateColumns: `repeat(${layoutInfo.columns}, 1fr)`
                    }}
                  >
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div
                        key={i}
                        className={`${layoutInfo.color} text-white font-bold rounded-lg p-6 flex items-center justify-center shadow-sm transition-all duration-500 transform hover:scale-105`}
                      >
                        Box {i}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl border border-indigo-100 dark:border-indigo-800/30 flex items-start gap-3">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-800 rounded-lg shrink-0">
                <Check className="w-5 h-5 text-indigo-600 dark:text-indigo-300" />
              </div>
              <div>
                <h3 className="font-bold text-indigo-900 dark:text-indigo-300 text-sm mb-1">Current State: {layoutInfo.label}</h3>
                <p className="text-sm text-indigo-700 dark:text-indigo-400">{layoutInfo.desc}</p>
              </div>
            </div>
          </div>

          {/* Code Explanation */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Code className="w-5 h-5 mr-2 text-indigo-500" />
                The Code Logic
              </h3>

              <div className="space-y-4">
                {/* Mobile Block */}
                <div className={`p-3 rounded-lg border transition-all ${currentBreakpoint === 'mobile' ? 'bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800' : 'bg-gray-50 border-gray-100 dark:bg-gray-900 dark:border-gray-800 opacity-50'}`}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Default (Mobile)</span>
                    {currentBreakpoint === 'mobile' && <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-bold">Active</span>}
                  </div>
                  <code className="text-xs font-mono block text-gray-700 dark:text-gray-300">
                    .container {'{'} grid-template-columns: 1fr; {'}'}
                  </code>
                </div>

                {/* Tablet Block */}
                <div className={`p-3 rounded-lg border transition-all ${currentBreakpoint === 'tablet' ? 'bg-purple-50 border-purple-200 dark:bg-purple-900/20 dark:border-purple-800' : 'bg-gray-50 border-gray-100 dark:bg-gray-900 dark:border-gray-800 opacity-50'}`}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Tablet (≥ 600px)</span>
                    {currentBreakpoint === 'tablet' && <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-bold">Active</span>}
                  </div>
                  <code className="text-xs font-mono block text-gray-700 dark:text-gray-300">
                    @media (min-width: 600px) {'{'}<br />
                    &nbsp;&nbsp;.container {'{'} grid-template-columns: 1fr 1fr; {'}'}<br />
                    {'}'}
                  </code>
                </div>

                {/* Desktop Block */}
                <div className={`p-3 rounded-lg border transition-all ${currentBreakpoint === 'desktop' ? 'bg-indigo-50 border-indigo-200 dark:bg-indigo-900/20 dark:border-indigo-800' : 'bg-gray-50 border-gray-100 dark:bg-gray-900 dark:border-gray-800 opacity-50'}`}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Desktop (≥ 1024px)</span>
                    {currentBreakpoint === 'desktop' && <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full font-bold">Active</span>}
                  </div>
                  <code className="text-xs font-mono block text-gray-700 dark:text-gray-300">
                    @media (min-width: 1024px) {'{'}<br />
                    &nbsp;&nbsp;.container {'{'} grid-template-columns: 1fr 1fr 1fr; {'}'}<br />
                    {'}'}
                  </code>
                </div>
              </div>
            </div>

            <CodeSnippetBlock
              title="Full CSS Source"
              codeSnippet={`/* Mobile First (Default) */
.container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}

/* Tablet */
@media (min-width: 600px) {
  .container {
    grid-template-columns: 1fr 1fr;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    grid-template-columns: 1fr 1fr 1fr;
  }
}`}
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default CssMqExamples;