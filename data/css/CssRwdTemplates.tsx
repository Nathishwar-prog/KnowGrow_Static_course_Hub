import React, { useState } from 'react';
import { Layout, Columns, Grid, Smartphone, Monitor, Code, Check, Copy, Sidebar } from 'lucide-react';

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

const CssRwdTemplates = () => {
  const [activeTemplate, setActiveTemplate] = useState('holy-grail'); // holy-grail, sidebar, grid
  const [isMobile, setIsMobile] = useState(false);

  const getTemplateData = () => {
    switch (activeTemplate) {
      case 'holy-grail':
        return {
          title: 'Holy Grail Layout',
          description: 'The classic structure: Header, Footer, Main Content flanked by two sidebars (or one).',
          code: `.container {
  display: grid;
  grid-template-areas:
    "header header"
    "nav nav"
    "main aside"
    "footer footer";
  grid-template-columns: 3fr 1fr;
}

/* Mobile View */
@media (max-width: 768px) {
  .container {
    grid-template-areas:
      "header"
      "nav"
      "main"
      "aside"
      "footer";
    grid-template-columns: 1fr;
  }
}`
        };
      case 'sidebar':
        return {
          title: 'Sidebar Layout',
          description: 'A common pattern for dashboards and blogs. Main content takes priority, sidebar collapses on mobile.',
          code: `.layout {
  display: flex;
  gap: 20px;
}
.main { flex: 3; }
.sidebar { flex: 1; }

/* Mobile View */
@media (max-width: 768px) {
  .layout {
    flex-direction: column;
  }
}`
        };
      case 'grid':
        return {
          title: 'Card Grid',
          description: 'Perfect for portfolios and galleries. Uses auto-fit to create as many columns as possible.',
          code: `.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}
/* No media queries needed! It's intrinsically responsive. */`
        };
      default:
        return {};
    }
  };

  const data = getTemplateData();

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-gray-900 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl mb-4">
          <Layout className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          RWD Templates
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Jumpstart your project with battle-tested layout patterns. From the classic Holy Grail to modern Card Grids.
        </p>
      </header>

      {/* Interactive Sandbox */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Columns className="w-6 h-6 mr-2 text-indigo-500" />
            Template Gallery
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
                Choose Layout
              </h3>

              <div className="space-y-3">
                <button
                  onClick={() => setActiveTemplate('holy-grail')}
                  className={`w-full flex items-center p-4 rounded-xl border-2 transition-all duration-200 ${activeTemplate === 'holy-grail'
                      ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700'
                    }`}
                >
                  <div className={`p-2 rounded-lg mr-4 ${activeTemplate === 'holy-grail' ? 'bg-indigo-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
                    <Layout className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900 dark:text-white">Holy Grail</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Classic Website Structure</div>
                  </div>
                </button>

                <button
                  onClick={() => setActiveTemplate('sidebar')}
                  className={`w-full flex items-center p-4 rounded-xl border-2 transition-all duration-200 ${activeTemplate === 'sidebar'
                      ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700'
                    }`}
                >
                  <div className={`p-2 rounded-lg mr-4 ${activeTemplate === 'sidebar' ? 'bg-indigo-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
                    <Sidebar className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900 dark:text-white">Sidebar Layout</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Blog / Dashboard</div>
                  </div>
                </button>

                <button
                  onClick={() => setActiveTemplate('grid')}
                  className={`w-full flex items-center p-4 rounded-xl border-2 transition-all duration-200 ${activeTemplate === 'grid'
                      ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700'
                    }`}
                >
                  <div className={`p-2 rounded-lg mr-4 ${activeTemplate === 'grid' ? 'bg-indigo-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
                    <Grid className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900 dark:text-white">Card Grid</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Portfolio / Gallery</div>
                  </div>
                </button>
              </div>
            </div>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border border-indigo-100 dark:border-indigo-800/30">
              <h3 className="font-bold text-indigo-900 dark:text-indigo-300 mb-4">Device Simulator</h3>
              <div className="flex gap-4">
                <button
                  onClick={() => setIsMobile(false)}
                  className={`flex-1 py-2 rounded-lg font-bold transition-all flex items-center justify-center ${!isMobile ? 'bg-indigo-600 text-white shadow-md' : 'bg-white dark:bg-gray-800 text-gray-500'
                    }`}
                >
                  <Monitor className="w-4 h-4 mr-2" /> Desktop
                </button>
                <button
                  onClick={() => setIsMobile(true)}
                  className={`flex-1 py-2 rounded-lg font-bold transition-all flex items-center justify-center ${isMobile ? 'bg-indigo-600 text-white shadow-md' : 'bg-white dark:bg-gray-800 text-gray-500'
                    }`}
                >
                  <Smartphone className="w-4 h-4 mr-2" /> Mobile
                </button>
              </div>
            </div>
          </div>

          {/* Preview & Code */}
          <div className="lg:col-span-8 space-y-6">
            {/* Live Preview */}
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 min-h-[500px] flex flex-col items-center justify-center relative overflow-hidden transition-all duration-300">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

              {/* Simulated Browser Window */}
              <div
                className="bg-white dark:bg-gray-800 shadow-2xl rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600 transition-all duration-500 ease-in-out flex flex-col"
                style={{
                  width: isMobile ? '320px' : '100%',
                  height: '400px',
                  maxWidth: '700px'
                }}
              >
                {/* Browser Bar */}
                <div className="bg-gray-200 dark:bg-gray-700 p-2 flex items-center space-x-2 border-b border-gray-300 dark:border-gray-600">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <div className="flex-1 bg-white dark:bg-gray-600 rounded px-2 py-0.5 text-xs text-gray-500 dark:text-gray-300 text-center">
                    {data.title} - {isMobile ? 'Mobile View' : 'Desktop View'}
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 p-4 overflow-y-auto bg-gray-50 dark:bg-gray-900/50">

                  {/* Holy Grail Layout */}
                  {activeTemplate === 'holy-grail' && (
                    <div
                      className="grid gap-2 h-full"
                      style={{
                        gridTemplateAreas: isMobile
                          ? '"header" "nav" "main" "aside" "footer"'
                          : '"header header" "nav nav" "main aside" "footer footer"',
                        gridTemplateColumns: isMobile ? '1fr' : '3fr 1fr',
                        gridTemplateRows: isMobile ? 'auto auto 1fr auto auto' : 'auto auto 1fr auto'
                      }}
                    >
                      <div className="bg-indigo-500 text-white p-4 rounded font-bold flex items-center justify-center" style={{ gridArea: 'header' }}>Header</div>
                      <div className="bg-blue-500 text-white p-2 rounded font-bold flex items-center justify-center" style={{ gridArea: 'nav' }}>Nav</div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded border border-gray-200 dark:border-gray-600 font-bold flex items-center justify-center" style={{ gridArea: 'main' }}>Main Content</div>
                      <div className="bg-purple-500 text-white p-4 rounded font-bold flex items-center justify-center" style={{ gridArea: 'aside' }}>Sidebar</div>
                      <div className="bg-gray-700 text-white p-4 rounded font-bold flex items-center justify-center" style={{ gridArea: 'footer' }}>Footer</div>
                    </div>
                  )}

                  {/* Sidebar Layout */}
                  {activeTemplate === 'sidebar' && (
                    <div
                      className="flex gap-4 h-full"
                      style={{ flexDirection: isMobile ? 'column' : 'row' }}
                    >
                      <div className="bg-white dark:bg-gray-700 p-4 rounded border border-gray-200 dark:border-gray-600 font-bold flex items-center justify-center" style={{ flex: 3 }}>
                        Main Content Area
                      </div>
                      <div className="bg-indigo-500 text-white p-4 rounded font-bold flex items-center justify-center" style={{ flex: 1 }}>
                        Sidebar
                      </div>
                    </div>
                  )}

                  {/* Grid Layout */}
                  {activeTemplate === 'grid' && (
                    <div
                      className="grid gap-4"
                      style={{
                        gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))' // Adjusted minmax for small preview container
                      }}
                    >
                      {[1, 2, 3, 4, 5, 6].map(i => (
                        <div key={i} className="bg-white dark:bg-gray-700 h-24 rounded border border-gray-200 dark:border-gray-600 flex items-center justify-center font-bold shadow-sm">
                          Item {i}
                        </div>
                      ))}
                    </div>
                  )}

                </div>
              </div>
            </div>

            {/* Generated Code */}
            <CodeSnippetBlock codeSnippet={data.code} title={`${data.title} CSS`} />
          </div>
        </div>
      </section>

      {/* Core Concepts Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          Template Strategies
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {/* Mobile First */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                <Smartphone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Mobile-First</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Start with a single-column layout for mobile, then use media queries to expand into multi-column layouts for larger screens.
            </p>
          </div>

          {/* Flexbox vs Grid */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-3">
                <Layout className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Flexbox vs Grid</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Use <strong>Flexbox</strong> for 1D layouts (navbars, sidebars). Use <strong>Grid</strong> for 2D layouts (whole page structure).
            </p>
          </div>

          {/* Semantic HTML */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg mr-3">
                <Code className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Semantic Structure</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Always use proper tags like <code className="text-indigo-500 font-mono">&lt;header&gt;</code>, <code className="text-indigo-500 font-mono">&lt;main&gt;</code>, and <code className="text-indigo-500 font-mono">&lt;footer&gt;</code> for better accessibility and SEO.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default CssRwdTemplates;