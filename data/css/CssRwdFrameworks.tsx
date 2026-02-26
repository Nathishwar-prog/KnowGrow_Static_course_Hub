import React, { useState } from 'react';
import { Package, Layout, Code, Check, Copy, Layers, Box, Wind, Zap } from 'lucide-react';

// --- Utility Components ---

const CodeSnippetBlock = ({ codeSnippet, language = 'html', title }) => {
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

const CssRwdFrameworks = () => {
  const [activeFramework, setActiveFramework] = useState('bootstrap'); // bootstrap, tailwind, bulma

  const getFrameworkData = () => {
    switch (activeFramework) {
      case 'bootstrap':
        return {
          title: 'Bootstrap',
          description: 'The most popular framework. Uses a 12-column grid system and pre-built components.',
          color: 'bg-purple-600',
          textColor: 'text-purple-600',
          borderColor: 'border-purple-600',
          code: `<div class="container">
  <div class="row">
    <div class="col-md-4 col-sm-6">Column 1</div>
    <div class="col-md-4 col-sm-6">Column 2</div>
    <div class="col-md-4 col-sm-12">Column 3</div>
  </div>
</div>`
        };
      case 'tailwind':
        return {
          title: 'Tailwind CSS',
          description: 'A utility-first framework. Highly customizable with responsive prefixes like md: and lg:.',
          color: 'bg-cyan-500',
          textColor: 'text-cyan-500',
          borderColor: 'border-cyan-500',
          code: `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="bg-blue-500 p-4">Box 1</div>
  <div class="bg-blue-500 p-4">Box 2</div>
  <div class="bg-blue-500 p-4">Box 3</div>
</div>`
        };
      case 'bulma':
        return {
          title: 'Bulma',
          description: 'Modern, Flexbox-based framework with simple, readable syntax. No JS required.',
          color: 'bg-emerald-500',
          textColor: 'text-emerald-500',
          borderColor: 'border-emerald-500',
          code: `<div class="columns">
  <div class="column is-half">Half Width</div>
  <div class="column is-half">Half Width</div>
</div>`
        };
      default:
        return {};
    }
  };

  const data = getFrameworkData();

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-gray-900 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl mb-4">
          <Package className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          RWD Frameworks
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Don't reinvent the wheel. Use battle-tested libraries to build responsive layouts faster and more consistently.
        </p>
      </header>

      {/* Interactive Sandbox */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Layout className="w-6 h-6 mr-2 text-indigo-500" />
            Framework Comparison
          </h2>
          <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-bold uppercase tracking-wider">
            Interactive
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Controls */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-100 dark:border-gray-700">
                Select Framework
              </h3>

              <div className="space-y-3">
                <button
                  onClick={() => setActiveFramework('bootstrap')}
                  className={`w-full flex items-center p-4 rounded-xl border-2 transition-all duration-200 ${activeFramework === 'bootstrap'
                      ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700'
                    }`}
                >
                  <div className={`p-2 rounded-lg mr-4 ${activeFramework === 'bootstrap' ? 'bg-purple-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
                    <Box className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900 dark:text-white">Bootstrap</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">The Classic Standard</div>
                  </div>
                </button>

                <button
                  onClick={() => setActiveFramework('tailwind')}
                  className={`w-full flex items-center p-4 rounded-xl border-2 transition-all duration-200 ${activeFramework === 'tailwind'
                      ? 'border-cyan-500 bg-cyan-50 dark:bg-cyan-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-cyan-300 dark:hover:border-cyan-700'
                    }`}
                >
                  <div className={`p-2 rounded-lg mr-4 ${activeFramework === 'tailwind' ? 'bg-cyan-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
                    <Wind className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900 dark:text-white">Tailwind CSS</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Utility-First Powerhouse</div>
                  </div>
                </button>

                <button
                  onClick={() => setActiveFramework('bulma')}
                  className={`w-full flex items-center p-4 rounded-xl border-2 transition-all duration-200 ${activeFramework === 'bulma'
                      ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-700'
                    }`}
                >
                  <div className={`p-2 rounded-lg mr-4 ${activeFramework === 'bulma' ? 'bg-emerald-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
                    <Layers className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900 dark:text-white">Bulma</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Modern & Simple</div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Preview & Code */}
          <div className="lg:col-span-8 space-y-6">
            {/* Live Preview */}
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 min-h-[400px] flex flex-col relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

              <div className="relative z-10">
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white mb-4 ${data.color}`}>
                  {data.title} Demo
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg">
                  {data.description}
                </p>

                {/* Simulated Grid Visualization */}
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                  <div className="flex flex-wrap gap-4">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className={`
                          flex-1 min-w-[150px] h-24 rounded-lg flex items-center justify-center text-white font-bold shadow-sm transition-all
                          ${activeFramework === 'bootstrap' ? 'bg-purple-500' : activeFramework === 'tailwind' ? 'bg-cyan-500' : 'bg-emerald-500'}
                        `}
                      >
                        {activeFramework === 'bootstrap' ? `col-md-4` : activeFramework === 'tailwind' ? `md:w-1/3` : `column`}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 mt-2 text-center">Resize window to see responsive behavior (simulated)</p>
                </div>
              </div>
            </div>

            {/* Generated Code */}
            <CodeSnippetBlock codeSnippet={data.code} title={`${data.title} Syntax`} />
          </div>
        </div>
      </section>

      {/* Core Concepts Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          Why Use a Framework?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {/* Speed */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Speed</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Skip the boilerplate. Get a responsive grid and styled components out of the box.
            </p>
          </div>

          {/* Consistency */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-3">
                <Layout className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Consistency</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Ensure your design looks and behaves the same across all browsers and devices.
            </p>
          </div>

          {/* Grid Systems */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg mr-3">
                <Box className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Grid Systems</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Powerful 12-column grids that handle the math of responsiveness for you.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default CssRwdFrameworks;