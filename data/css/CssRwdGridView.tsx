import React, { useState } from 'react';
import { Grid, Layout, Maximize, Minimize, Code, Check, Copy, Layers, AlignCenter, Box } from 'lucide-react';

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

const ControlSlider = ({ label, value, onChange, min, max, step, unit = '' }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>
      <span className="text-sm font-mono text-indigo-600 dark:text-indigo-400">{value}{unit}</span>
    </div>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(parseFloat(e.target.value))}
      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-indigo-500"
    />
  </div>
);

const ControlSelect = ({ label, value, onChange, options }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      {label}
    </label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-sm focus:ring-indigo-500 focus:border-indigo-500 dark:text-white transition-colors"
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

// --- Main Component ---

const CssRwdGridView = () => {
  const [activeView, setActiveView] = useState('basic'); // basic, responsive, areas
  const [gap, setGap] = useState(10);
  const [justifyItems, setJustifyItems] = useState('center');
  const [alignItems, setAlignItems] = useState('center');

  const getCodeSnippet = () => {
    if (activeView === 'basic') {
      return `.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 100px 100px;
  gap: ${gap}px;
  justify-items: ${justifyItems};
  align-items: ${alignItems};
}`;
    } else if (activeView === 'responsive') {
      return `.grid-container {
  display: grid;
  /* Auto-fit magic for responsiveness */
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: ${gap}px;
}`;
    } else {
      return `.grid-container {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 60px 200px 60px;
  gap: ${gap}px;
}`;
    }
  };

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-gray-900 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl mb-4">
          <Grid className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          CSS Grid View
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Visualize your layout. From basic grids to complex semantic areas and responsive magic.
        </p>
      </header>

      {/* Interactive Sandbox */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Layout className="w-6 h-6 mr-2 text-indigo-500" />
            Grid View Studio
          </h2>
          <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-bold uppercase tracking-wider">
            Interactive
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Controls */}
          <div className="lg:col-span-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 h-fit">
            <h3 className="font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-100 dark:border-gray-700">
              View Settings
            </h3>

            {/* View Mode Switcher */}
            <div className="flex bg-gray-100 dark:bg-gray-700 p-1 rounded-lg mb-6">
              {['basic', 'responsive', 'areas'].map((view) => (
                <button
                  key={view}
                  onClick={() => setActiveView(view)}
                  className={`flex-1 py-2 text-sm font-bold rounded-md transition-all capitalize ${activeView === view
                      ? 'bg-white dark:bg-gray-600 text-indigo-600 dark:text-white shadow-sm'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                    }`}
                >
                  {view}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              <ControlSlider label="Gap" value={gap} onChange={setGap} min={0} max={40} step={5} unit="px" />

              {activeView === 'basic' && (
                <>
                  <ControlSelect
                    label="justify-items"
                    value={justifyItems}
                    onChange={setJustifyItems}
                    options={['stretch', 'start', 'end', 'center']}
                  />
                  <ControlSelect
                    label="align-items"
                    value={alignItems}
                    onChange={setAlignItems}
                    options={['stretch', 'start', 'end', 'center']}
                  />
                </>
              )}

              {activeView === 'responsive' && (
                <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-100 dark:border-indigo-800">
                  <p className="text-xs text-indigo-700 dark:text-indigo-300">
                    Resize the browser window or the preview container to see the items reflow automatically!
                  </p>
                </div>
              )}

              {activeView === 'areas' && (
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-100 dark:border-purple-800">
                  <p className="text-xs text-purple-700 dark:text-purple-300">
                    Semantic areas defined: Header, Sidebar, Main, Footer.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Preview & Code */}
          <div className="lg:col-span-8 space-y-6">
            {/* Live Preview */}
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 min-h-[400px] flex flex-col relative overflow-hidden resize-x">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

              {/* Grid Container */}
              {activeView === 'basic' && (
                <div
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border-2 border-dashed border-indigo-300 dark:border-indigo-700 transition-all duration-300 p-4"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gridTemplateRows: '100px 100px',
                    gap: `${gap}px`,
                    justifyItems: justifyItems,
                    alignItems: alignItems,
                    height: '100%'
                  }}
                >
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="bg-indigo-500 text-white font-bold text-xl flex items-center justify-center rounded shadow-md" style={{ width: justifyItems === 'stretch' ? '100%' : '60px', height: alignItems === 'stretch' ? '100%' : '60px' }}>
                      {item}
                    </div>
                  ))}
                </div>
              )}

              {activeView === 'responsive' && (
                <div
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border-2 border-dashed border-indigo-300 dark:border-indigo-700 transition-all duration-300 p-4"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                    gap: `${gap}px`,
                    height: '100%'
                  }}
                >
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="bg-green-500 text-white font-bold text-xl flex items-center justify-center rounded shadow-md h-24">
                      Card {item}
                    </div>
                  ))}
                </div>
              )}

              {activeView === 'areas' && (
                <div
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border-2 border-dashed border-indigo-300 dark:border-indigo-700 transition-all duration-300 p-4"
                  style={{
                    display: 'grid',
                    gridTemplateAreas: `
                      "header header"
                      "sidebar main"
                      "footer footer"
                    `,
                    gridTemplateColumns: '1fr 3fr',
                    gridTemplateRows: '60px 200px 60px',
                    gap: `${gap}px`,
                    height: '100%'
                  }}
                >
                  <div className="bg-purple-500 text-white font-bold flex items-center justify-center rounded shadow-md" style={{ gridArea: 'header' }}>Header</div>
                  <div className="bg-blue-500 text-white font-bold flex items-center justify-center rounded shadow-md" style={{ gridArea: 'sidebar' }}>Sidebar</div>
                  <div className="bg-indigo-500 text-white font-bold flex items-center justify-center rounded shadow-md" style={{ gridArea: 'main' }}>Main Content</div>
                  <div className="bg-gray-500 text-white font-bold flex items-center justify-center rounded shadow-md" style={{ gridArea: 'footer' }}>Footer</div>
                </div>
              )}
            </div>

            {/* Generated Code */}
            <CodeSnippetBlock codeSnippet={getCodeSnippet()} title="Generated CSS" />
          </div>
        </div>
      </section>

      {/* Core Concepts Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          Grid View Strategies
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {/* Spanning */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                <Maximize className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Spanning Items</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Break the strict grid by making items span multiple columns or rows.
            </p>
            <CodeSnippetBlock
              language="css"
              codeSnippet={`.item { grid-column: 1 / 3; }`}
            />
          </div>

          {/* Named Areas */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-3">
                <Layers className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Named Areas</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Create a visual map of your layout directly in your CSS code.
            </p>
            <CodeSnippetBlock
              language="css"
              codeSnippet={`grid-template-areas: "header header";`}
            />
          </div>

          {/* Alignment */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg mr-3">
                <AlignCenter className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Alignment</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Control exactly where items sit within their grid cells.
            </p>
            <CodeSnippetBlock
              language="css"
              codeSnippet={`justify-items: center;`}
            />
          </div>

        </div>
      </section>

    </div>
  );
};

export default CssRwdGridView;