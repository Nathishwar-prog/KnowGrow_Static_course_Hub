import React, { useState } from 'react';
import { Grid, Layout, Maximize, Minimize, Code, Check, Copy, Hash, ArrowRight, Move } from 'lucide-react';

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

const ControlSlider = ({ label, value, onChange, min, max, step }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>
      <span className="text-sm font-mono text-indigo-600 dark:text-indigo-400">{value}</span>
    </div>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(parseInt(e.target.value))}
      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-indigo-500"
    />
  </div>
);

// --- Main Component ---

const CssGridLines = () => {
  const [colStart, setColStart] = useState(1);
  const [colEnd, setColEnd] = useState(3);
  const [rowStart, setRowStart] = useState(1);
  const [rowEnd, setRowEnd] = useState(2);
  const [useSpan, setUseSpan] = useState(false);

  const getGeneratedCss = () => {
    if (useSpan) {
      return `.item {
  grid-column: ${colStart} / span ${colEnd - colStart > 0 ? colEnd - colStart : 1};
  grid-row: ${rowStart} / span ${rowEnd - rowStart > 0 ? rowEnd - rowStart : 1};
}`;
    }
    return `.item {
  grid-column: ${colStart} / ${colEnd};
  grid-row: ${rowStart} / ${rowEnd};
}`;
  };

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-gray-900 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl mb-4">
          <Hash className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          CSS Grid Lines
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Master the coordinate system of CSS Grid. Position items precisely using start and end lines.
        </p>
      </header>

      {/* Interactive Sandbox */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Move className="w-6 h-6 mr-2 text-indigo-500" />
            Placement Studio
          </h2>
          <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-bold uppercase tracking-wider">
            Interactive
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Controls */}
          <div className="lg:col-span-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 h-fit">
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-gray-900 dark:text-white">Item Position</h3>
              <button
                onClick={() => setUseSpan(!useSpan)}
                className={`text-xs px-2 py-1 rounded font-bold transition-colors ${useSpan ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-500'}`}
              >
                {useSpan ? 'Using Span' : 'Using Lines'}
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Columns (1-5)</h4>
                <ControlSlider label="Start Line" value={colStart} onChange={setColStart} min={1} max={5} step={1} />
                <ControlSlider label={useSpan ? "Span Count" : "End Line"} value={useSpan ? (colEnd - colStart) : colEnd} onChange={(v) => setColEnd(useSpan ? colStart + v : v)} min={1} max={6} step={1} />
              </div>

              <div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Rows (1-5)</h4>
                <ControlSlider label="Start Line" value={rowStart} onChange={setRowStart} min={1} max={5} step={1} />
                <ControlSlider label={useSpan ? "Span Count" : "End Line"} value={useSpan ? (rowEnd - rowStart) : rowEnd} onChange={(v) => setRowEnd(useSpan ? rowStart + v : v)} min={1} max={6} step={1} />
              </div>
            </div>
          </div>

          {/* Preview & Code */}
          <div className="lg:col-span-8 space-y-6">
            {/* Live Preview */}
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 min-h-[400px] flex flex-col relative overflow-hidden">

              {/* Grid Container with Lines Visualization */}
              <div
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-300 dark:border-gray-600 relative"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gridTemplateRows: 'repeat(4, 80px)',
                  gap: '10px',
                  padding: '30px', // Extra padding for line numbers
                  height: '400px'
                }}
              >
                {/* Grid Line Indicators (Absolute Positioning) */}
                {/* Column Lines */}
                {[1, 2, 3, 4, 5].map(line => (
                  <div key={`col-${line}`} className="absolute top-0 bottom-0 flex flex-col items-center" style={{ left: `calc(${((line - 1) / 4) * 100}% - ${(line - 1) * 2.5}px + 30px)` }}>
                    <span className="absolute -top-6 text-xs font-mono font-bold text-gray-400">{line}</span>
                    <div className="h-full w-px border-l border-dashed border-gray-300 dark:border-gray-700"></div>
                    <span className="absolute -bottom-6 text-xs font-mono font-bold text-gray-400">{line}</span>
                  </div>
                ))}
                {/* Row Lines */}
                {[1, 2, 3, 4, 5].map(line => (
                  <div key={`row-${line}`} className="absolute left-0 right-0 flex flex-row items-center" style={{ top: `calc(${((line - 1) / 4) * 100}% - ${(line - 1) * 2.5}px + 30px)` }}>
                    <span className="absolute -left-6 text-xs font-mono font-bold text-gray-400">{line}</span>
                    <div className="w-full h-px border-t border-dashed border-gray-300 dark:border-gray-700"></div>
                    <span className="absolute -right-6 text-xs font-mono font-bold text-gray-400">{line}</span>
                  </div>
                ))}

                {/* Background Cells for Reference */}
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 rounded"></div>
                ))}

                {/* The Target Item */}
                <div
                  className="bg-indigo-500/90 backdrop-blur-sm text-white font-bold text-xl flex items-center justify-center rounded shadow-lg border-2 border-indigo-400 transition-all duration-300 z-10"
                  style={{
                    gridColumnStart: colStart,
                    gridColumnEnd: colEnd,
                    gridRowStart: rowStart,
                    gridRowEnd: rowEnd,
                  }}
                >
                  Target
                </div>

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
          Grid Line Concepts
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {/* Numbering */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                <Hash className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Line Numbers</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
              Lines are counted from 1. A 3-column grid has 4 vertical lines.
            </p>
            <div className="text-xs font-mono bg-gray-100 dark:bg-gray-700 p-2 rounded text-gray-600 dark:text-gray-300">
              1 | 2 | 3 | 4
            </div>
          </div>

          {/* Negative Numbers */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg mr-3">
                <ArrowRight className="w-5 h-5 text-red-600 dark:text-red-400 rotate-180" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Negative Lines</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
              You can count from the end using negative numbers. -1 is the last line.
            </p>
            <div className="text-xs font-mono bg-gray-100 dark:bg-gray-700 p-2 rounded text-gray-600 dark:text-gray-300">
              grid-column: 1 / -1; (Full Width)
            </div>
          </div>

          {/* Span Keyword */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-3">
                <Maximize className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Span Keyword</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
              Don't want to calculate the end line? Just tell the item how many tracks to span.
            </p>
            <div className="text-xs font-mono bg-gray-100 dark:bg-gray-700 p-2 rounded text-gray-600 dark:text-gray-300">
              grid-column: span 2;
            </div>
          </div>

        </div>
      </section>

      {/* Named Lines Example */}
      <section className="max-w-4xl mx-auto mb-16">
        <div className="bg-indigo-900 rounded-xl p-8 shadow-xl text-white">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-indigo-800 rounded-lg">
              <Code className="w-6 h-6 text-indigo-300" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Named Lines</h3>
              <p className="text-indigo-200 mb-6">
                For complex layouts, you can name your lines to make the CSS more readable.
              </p>
              <CodeSnippetBlock
                title="Named Lines Syntax"
                codeSnippet={`.container {
  grid-template-columns: [start] 1fr [middle] 2fr [end];
}

.item {
  grid-column: start / middle;
}`}
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CssGridLines;