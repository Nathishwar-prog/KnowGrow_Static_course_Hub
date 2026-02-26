import React, { useState } from 'react';
import { Box, Maximize, Minimize, Layout, Code, Check, Copy, Ruler, Info, Layers } from 'lucide-react';

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

const CssBoxSizing = () => {
  const [boxSizing, setBoxSizing] = useState('content-box');
  const [width, setWidth] = useState(200);
  const [padding, setPadding] = useState(20);
  const [border, setBorder] = useState(5);

  // Calculate total dimensions based on box-sizing
  const totalWidth = boxSizing === 'content-box'
    ? width + (padding * 2) + (border * 2)
    : width;

  const contentWidth = boxSizing === 'content-box'
    ? width
    : width - (padding * 2) - (border * 2);

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-gray-900 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl mb-4">
          <Box className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          CSS Box Sizing
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Stop the math. Understand how padding and borders affect the actual size of your elements.
        </p>
      </header>

      {/* Interactive Sandbox */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Ruler className="w-6 h-6 mr-2 text-indigo-500" />
            Size Calculator
          </h2>
          <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-bold uppercase tracking-wider">
            Interactive
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Controls */}
          <div className="lg:col-span-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 h-fit">
            <h3 className="font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-100 dark:border-gray-700">
              Properties
            </h3>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Box Sizing Model</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setBoxSizing('content-box')}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${boxSizing === 'content-box'
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                >
                  content-box
                </button>
                <button
                  onClick={() => setBoxSizing('border-box')}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${boxSizing === 'border-box'
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                >
                  border-box
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <ControlSlider label="CSS Width" value={width} onChange={setWidth} min={100} max={400} step={10} />
              <ControlSlider label="Padding" value={padding} onChange={setPadding} min={0} max={50} step={5} />
              <ControlSlider label="Border" value={border} onChange={setBorder} min={0} max={20} step={1} />
            </div>

            <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-200 dark:border-gray-700">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Total Rendered Width</h4>
              <div className="text-3xl font-mono font-bold text-indigo-600 dark:text-indigo-400">
                {totalWidth}px
              </div>
              <div className="text-xs text-gray-500 mt-1 font-mono">
                {boxSizing === 'content-box'
                  ? `${width} (w) + ${padding * 2} (p) + ${border * 2} (b)`
                  : `${width} (w) [Includes padding & border]`}
              </div>
            </div>
          </div>

          {/* Preview & Code */}
          <div className="lg:col-span-8 space-y-6">
            {/* Live Preview */}
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 min-h-[400px] flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

              {/* The Box */}
              <div
                className="relative bg-blue-200 dark:bg-blue-900/50 border-indigo-500 transition-all duration-300 flex items-center justify-center text-center overflow-hidden"
                style={{
                  width: `${width}px`,
                  height: '150px', // Fixed height for simplicity
                  padding: `${padding}px`,
                  borderWidth: `${border}px`,
                  borderStyle: 'solid',
                  boxSizing: boxSizing
                }}
              >
                <div className="w-full h-full bg-blue-400/30 dark:bg-blue-500/30 border border-dashed border-blue-600/50 flex items-center justify-center text-xs font-mono text-blue-900 dark:text-blue-100">
                  Content: {contentWidth}px
                </div>

                {/* Dimension Markers */}
                <div className="absolute -bottom-8 left-0 w-full flex items-center justify-center">
                  <div className="h-px bg-gray-500 w-full absolute top-1/2"></div>
                  <div className="h-2 w-px bg-gray-500 absolute left-0 top-0"></div>
                  <div className="h-2 w-px bg-gray-500 absolute right-0 top-0"></div>
                  <span className="bg-gray-100 dark:bg-gray-900 px-2 text-xs font-mono text-gray-600 dark:text-gray-400 relative z-10">
                    Total: {totalWidth}px
                  </span>
                </div>
              </div>

              <p className="mt-12 text-sm text-gray-500 dark:text-gray-400 max-w-md text-center">
                {boxSizing === 'content-box'
                  ? "In content-box, padding and border are ADDED to your specified width."
                  : "In border-box, padding and border are absorbed INSIDE your specified width."}
              </p>
            </div>

            {/* Generated Code */}
            <CodeSnippetBlock
              codeSnippet={`.box {
  width: ${width}px;
  padding: ${padding}px;
  border: ${border}px solid #6366f1;
  box-sizing: ${boxSizing};
}`}
              title="Generated CSS"
            />
          </div>
        </div>
      </section>

      {/* Comparison Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          Why it matters
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Content Box */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg mr-3">
                <Maximize className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">content-box (Default)</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">The "Additive" Model</p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              If you set width to 100% and add padding, the element will become wider than 100%, causing horizontal scrollbars or breaking layouts.
            </p>

            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded border border-red-100 dark:border-red-800/30">
              <code className="text-red-700 dark:text-red-300 text-sm">Width = Content Width</code>
            </div>
          </div>

          {/* Border Box */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              Best Practice
            </div>
            <div className="flex items-center mb-6">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg mr-3">
                <Minimize className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">border-box</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">The "Intuitive" Model</p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              The width you set is the width you get. Padding and border push the content inward rather than expanding the box outward.
            </p>

            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded border border-green-100 dark:border-green-800/30">
              <code className="text-green-700 dark:text-green-300 text-sm">Width = Content + Padding + Border</code>
            </div>
          </div>

        </div>
      </section>

      {/* Global Reset */}
      <section className="max-w-4xl mx-auto mb-16">
        <div className="bg-indigo-900 rounded-xl p-8 shadow-xl text-white">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-indigo-800 rounded-lg">
              <Layers className="w-6 h-6 text-indigo-300" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">The Golden Rule of CSS</h3>
              <p className="text-indigo-200 mb-6">
                Most developers apply <code className="text-white font-mono">border-box</code> globally to make layout sizing predictable across the entire site.
              </p>
              <CodeSnippetBlock
                title="Global Reset"
                codeSnippet={`/* Apply to all elements */
*, *::before, *::after {
  box-sizing: border-box;
}`}
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CssBoxSizing;