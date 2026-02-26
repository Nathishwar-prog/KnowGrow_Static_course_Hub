import React, { useState } from 'react';
import { Grid, Columns, Rows, Maximize, Minimize, Code, Check, Copy, Layout, ArrowRight } from 'lucide-react';

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

const CssGridColumnsRows = () => {
  const [colCount, setColCount] = useState(3);
  const [colUnit, setColUnit] = useState('1fr');
  const [rowCount, setRowCount] = useState(2);
  const [rowUnit, setRowUnit] = useState('100px');
  const [gap, setGap] = useState(10);

  const getGeneratedCss = () => {
    return `.container {
  display: grid;
  grid-template-columns: repeat(${colCount}, ${colUnit});
  grid-template-rows: repeat(${rowCount}, ${rowUnit});
  gap: ${gap}px;
}`;
  };

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-gray-900 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl mb-4">
          <Grid className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          CSS Grid: Columns & Rows
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          The building blocks of the web. Define the structure of your layout with precision.
        </p>
      </header>

      {/* Interactive Sandbox */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Layout className="w-6 h-6 mr-2 text-indigo-500" />
            Structure Studio
          </h2>
          <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-bold uppercase tracking-wider">
            Interactive
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Controls */}
          <div className="lg:col-span-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 h-fit">
            <h3 className="font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-100 dark:border-gray-700">
              Template Definition
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center">
                  <Columns className="w-4 h-4 mr-1" /> Columns
                </h4>
                <ControlSlider label="Count" value={colCount} onChange={setColCount} min={1} max={6} step={1} />
                <ControlSelect
                  label="Size Unit"
                  value={colUnit}
                  onChange={setColUnit}
                  options={['1fr', '200px', 'minmax(100px, 1fr)', 'auto']}
                />
              </div>

              <div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center">
                  <Rows className="w-4 h-4 mr-1" /> Rows
                </h4>
                <ControlSlider label="Count" value={rowCount} onChange={setRowCount} min={1} max={4} step={1} />
                <ControlSelect
                  label="Size Unit"
                  value={rowUnit}
                  onChange={setRowUnit}
                  options={['100px', '1fr', 'auto', 'minmax(50px, auto)']}
                />
              </div>

              <div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Spacing</h4>
                <ControlSlider label="Gap" value={gap} onChange={setGap} min={0} max={50} step={5} unit="px" />
              </div>
            </div>
          </div>

          {/* Preview & Code */}
          <div className="lg:col-span-8 space-y-6">
            {/* Live Preview */}
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 min-h-[400px] flex flex-col relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

              {/* Grid Container */}
              <div
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border-2 border-dashed border-indigo-300 dark:border-indigo-700 transition-all duration-300 p-4 overflow-auto"
                style={{
                  display: 'grid',
                  gridTemplateColumns: `repeat(${colCount}, ${colUnit})`,
                  gridTemplateRows: `repeat(${rowCount}, ${rowUnit})`,
                  gap: `${gap}px`,
                  height: '100%',
                  minHeight: '300px'
                }}
              >
                {Array.from({ length: colCount * rowCount }).map((_, index) => (
                  <div
                    key={index}
                    className="bg-indigo-500 text-white font-bold text-xl flex items-center justify-center rounded shadow-md transition-all duration-300 hover:bg-indigo-600 relative group"
                    style={{ minHeight: '50px' }}
                  >
                    {index + 1}
                    <div className="absolute inset-0 border-2 border-white/20 rounded opacity-0 group-hover:opacity-100 pointer-events-none flex items-center justify-center bg-black/10 text-xs font-mono">
                      {colUnit} x {rowUnit}
                    </div>
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
          Power Functions
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Repeat Function */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-3">
                <ArrowRight className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">repeat()</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">DRY (Don't Repeat Yourself)</p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              Instead of writing <code className="text-indigo-500 font-mono">1fr 1fr 1fr</code>, use <code className="text-indigo-500 font-mono">repeat(3, 1fr)</code>. It keeps your code clean and scalable.
            </p>

            <CodeSnippetBlock codeSnippet={`grid-template-columns: repeat(12, 1fr);`} />
          </div>

          {/* Minmax Function */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                <Maximize className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">minmax()</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Responsive Boundaries</p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              Define a range for your tracks. <code className="text-indigo-500 font-mono">minmax(100px, 1fr)</code> means "at least 100px wide, but grow to fill available space if possible".
            </p>

            <CodeSnippetBlock codeSnippet={`grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));`} />
          </div>

        </div>
      </section>

    </div>
  );
};

export default CssGridColumnsRows;