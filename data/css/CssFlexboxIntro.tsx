import React, { useState } from 'react';
import { Layout, AlignCenter, AlignJustify, ArrowRight, Code, Check, Copy, Grid, Layers, Maximize } from 'lucide-react';

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

const CssFlexboxIntro = () => {
  const [flexDirection, setFlexDirection] = useState('row');
  const [justifyContent, setJustifyContent] = useState('flex-start');
  const [alignItems, setAlignItems] = useState('stretch');
  const [flexWrap, setFlexWrap] = useState('nowrap');

  const getGeneratedCss = () => {
    return `.container {
  display: flex;
  flex-direction: ${flexDirection};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  flex-wrap: ${flexWrap};
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
          CSS Flexbox
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          The ultimate layout tool. Align, distribute, and order items with ease, regardless of their size.
        </p>
      </header>

      {/* Interactive Sandbox */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Grid className="w-6 h-6 mr-2 text-indigo-500" />
            Flex Playground
          </h2>
          <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-bold uppercase tracking-wider">
            Interactive
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Controls */}
          <div className="lg:col-span-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 h-fit">
            <h3 className="font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-100 dark:border-gray-700">
              Container Properties
            </h3>

            <div className="space-y-4">
              <ControlSelect
                label="flex-direction"
                value={flexDirection}
                onChange={setFlexDirection}
                options={['row', 'row-reverse', 'column', 'column-reverse']}
              />
              <ControlSelect
                label="justify-content"
                value={justifyContent}
                onChange={setJustifyContent}
                options={['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']}
              />
              <ControlSelect
                label="align-items"
                value={alignItems}
                onChange={setAlignItems}
                options={['stretch', 'flex-start', 'flex-end', 'center', 'baseline']}
              />
              <ControlSelect
                label="flex-wrap"
                value={flexWrap}
                onChange={setFlexWrap}
                options={['nowrap', 'wrap', 'wrap-reverse']}
              />
            </div>
          </div>

          {/* Preview & Code */}
          <div className="lg:col-span-8 space-y-6">
            {/* Live Preview */}
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 min-h-[400px] flex flex-col relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

              {/* Flex Container */}
              <div
                className="flex-1 bg-white dark:bg-gray-800 rounded-lg shadow-sm border-2 border-dashed border-indigo-300 dark:border-indigo-700 transition-all duration-300 overflow-hidden"
                style={{
                  display: 'flex',
                  flexDirection: flexDirection,
                  justifyContent: justifyContent,
                  alignItems: alignItems,
                  flexWrap: flexWrap,
                  minHeight: '300px',
                  padding: '10px'
                }}
              >
                {[1, 2, 3, 4, 5].map((item) => (
                  <div
                    key={item}
                    className="w-16 h-16 m-2 bg-indigo-500 text-white font-bold text-xl flex items-center justify-center rounded shadow-md transition-all duration-300 hover:scale-110 hover:bg-indigo-600"
                    style={{
                      minWidth: '64px', // Ensure items don't shrink to 0 in some layouts
                      height: alignItems === 'stretch' ? 'auto' : '64px' // Demonstrate stretch
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Generated Code */}
            <CodeSnippetBlock codeSnippet={getGeneratedCss()} title="Generated CSS" />
          </div>
        </div>
      </section>

      {/* Core Concepts Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          Key Concepts
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Main Axis</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Controlled by <code className="text-indigo-500 font-mono">flex-direction</code>. It's the primary direction items are laid out (row or column). <code className="text-indigo-500 font-mono">justify-content</code> works along this axis.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-3">
                <AlignJustify className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Cross Axis</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Perpendicular to the main axis. If main is row, cross is vertical. <code className="text-indigo-500 font-mono">align-items</code> works along this axis.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg mr-3">
                <Maximize className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Flex Items</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Children of a flex container can grow to fill space (<code className="text-indigo-500 font-mono">flex-grow</code>) or shrink to prevent overflow (<code className="text-indigo-500 font-mono">flex-shrink</code>).
            </p>
          </div>

        </div>
      </section>

      {/* Advanced Item Properties */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          Item Properties
        </h2>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
            <h3 className="font-bold text-gray-900 dark:text-white flex items-center">
              <Layers className="w-5 h-5 mr-2 text-indigo-500" />
              The "flex" Shorthand
            </h3>
          </div>
          <div className="p-6">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              The <code className="text-indigo-500 font-mono">flex</code> property is a shorthand for <code className="text-indigo-500 font-mono">flex-grow</code>, <code className="text-indigo-500 font-mono">flex-shrink</code>, and <code className="text-indigo-500 font-mono">flex-basis</code>.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-center">
                <div className="font-mono font-bold text-indigo-600 dark:text-indigo-400 mb-1">flex: 1</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Grow to fill available space equally</div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-center">
                <div className="font-mono font-bold text-indigo-600 dark:text-indigo-400 mb-1">flex: 0 1 auto</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Default behavior (shrink only)</div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-center">
                <div className="font-mono font-bold text-indigo-600 dark:text-indigo-400 mb-1">flex: none</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Fixed size, no growing or shrinking</div>
              </div>
            </div>

            <CodeSnippetBlock codeSnippet={`.item {
  flex: 1; /* Grow to fill space */
}

.sidebar {
  flex: 0 0 250px; /* Fixed width sidebar */
}`} />
          </div>
        </div>
      </section>

    </div>
  );
};

export default CssFlexboxIntro;