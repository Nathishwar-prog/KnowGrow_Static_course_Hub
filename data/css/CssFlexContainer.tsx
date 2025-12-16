import React, { useState } from 'react';
import { Layout, Grid, AlignCenter, AlignJustify, ArrowRight, Code, Check, Copy, Box, Maximize, Minimize } from 'lucide-react';

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

const ControlSlider = ({ label, value, onChange, min, max, step, unit = 'px' }) => (
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

// --- Main Component ---

const CssFlexContainer = () => {
  const [flexDirection, setFlexDirection] = useState('row');
  const [justifyContent, setJustifyContent] = useState('flex-start');
  const [alignItems, setAlignItems] = useState('stretch');
  const [flexWrap, setFlexWrap] = useState('nowrap');
  const [alignContent, setAlignContent] = useState('stretch');
  const [gap, setGap] = useState(10);

  const getGeneratedCss = () => {
    return `.container {
  display: flex;
  flex-direction: ${flexDirection};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  flex-wrap: ${flexWrap};
  align-content: ${alignContent};
  gap: ${gap}px;
}`;
  };

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-gray-900 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl mb-4">
          <Box className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          CSS Flex Container
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Master the parent element. Control the flow, alignment, and spacing of your layout with precision.
        </p>
      </header>

      {/* Interactive Sandbox */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Layout className="w-6 h-6 mr-2 text-indigo-500" />
            Container Studio
          </h2>
          <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-bold uppercase tracking-wider">
            Interactive
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Controls */}
          <div className="lg:col-span-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 h-fit">
            <h3 className="font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-100 dark:border-gray-700">
              Parent Properties
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
              <ControlSelect
                label="align-content (Multi-line)"
                value={alignContent}
                onChange={setAlignContent}
                options={['stretch', 'flex-start', 'flex-end', 'center', 'space-between', 'space-around']}
              />
              <ControlSlider label="gap" value={gap} onChange={setGap} min={0} max={50} step={5} />
            </div>
          </div>

          {/* Preview & Code */}
          <div className="lg:col-span-8 space-y-6">
            {/* Live Preview */}
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 min-h-[500px] flex flex-col relative overflow-hidden">
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
                  alignContent: alignContent,
                  gap: `${gap}px`,
                  padding: '20px',
                  minHeight: '400px'
                }}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                  <div
                    key={item}
                    className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-bold text-2xl flex items-center justify-center rounded-lg shadow-md transition-all duration-300 hover:scale-105"
                    style={{
                      minWidth: '80px', // Prevent shrinking to 0
                      height: alignItems === 'stretch' ? 'auto' : '80px' // Demonstrate stretch
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

      {/* Advanced Concepts Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          Advanced Layout Control
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Align Content vs Align Items */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-3">
                <Grid className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">align-items vs align-content</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">The common confusion</p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-gray-600 dark:text-gray-300">
              <p>
                <strong className="text-indigo-600 dark:text-indigo-400">align-items:</strong> Controls alignment of items within a <em>single line</em>.
              </p>
              <p>
                <strong className="text-indigo-600 dark:text-indigo-400">align-content:</strong> Controls alignment of <em>multiple lines</em> (rows) relative to the container. Only works when <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">flex-wrap: wrap</code> is active and there are multiple lines.
              </p>
            </div>
          </div>

          {/* Gap Property */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg mr-3">
                <Maximize className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">The Gap Property</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Modern spacing</p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              Forget about using negative margins on containers and margins on items. The <code className="text-indigo-500 font-mono">gap</code> property creates equal spacing between flex items without affecting the outer edges.
            </p>

            <CodeSnippetBlock codeSnippet={`.container {
  display: flex;
  gap: 20px; /* Applies to both row and column gaps */
}`} />
          </div>

        </div>
      </section>

    </div>
  );
};

export default CssFlexContainer;