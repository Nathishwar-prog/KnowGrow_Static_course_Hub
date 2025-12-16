import React, { useState } from 'react';
import { Columns, Layout, Split, Maximize, Code, Check, Copy, AlignJustify, ArrowRightLeft, FileText } from 'lucide-react';

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

const CssMultipleColumns = () => {
  const [columnCount, setColumnCount] = useState(3);
  const [columnGap, setColumnGap] = useState(30);
  const [columnRuleStyle, setColumnRuleStyle] = useState('solid');
  const [columnRuleWidth, setColumnRuleWidth] = useState(1);
  const [columnRuleColor, setColumnRuleColor] = useState('#d1d5db');
  const [columnSpan, setColumnSpan] = useState('none');

  const ruleStyles = ['none', 'solid', 'dashed', 'dotted', 'double'];

  const getGeneratedCss = () => {
    return `.content {
  column-count: ${columnCount};
  column-gap: ${columnGap}px;
  column-rule: ${columnRuleWidth}px ${columnRuleStyle} ${columnRuleColor};
}

h2 {
  column-span: ${columnSpan};
}`;
  };

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-gray-900 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl mb-4">
          <Columns className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          CSS Multiple Columns
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Create elegant, newspaper-style layouts where content flows automatically between columns.
        </p>
      </header>

      {/* Interactive Sandbox */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Layout className="w-6 h-6 mr-2 text-indigo-500" />
            Column Studio
          </h2>
          <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-bold uppercase tracking-wider">
            Interactive
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Controls */}
          <div className="lg:col-span-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 h-fit">
            <h3 className="font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-100 dark:border-gray-700">
              Layout Settings
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Columns</h4>
                <ControlSlider label="Count" value={columnCount} onChange={setColumnCount} min={1} max={6} step={1} />
                <ControlSlider label="Gap" value={columnGap} onChange={setColumnGap} min={0} max={100} step={5} unit="px" />
              </div>

              <div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Divider Rule</h4>
                <ControlSelect label="Style" value={columnRuleStyle} onChange={setColumnRuleStyle} options={ruleStyles} />
                <ControlSlider label="Width" value={columnRuleWidth} onChange={setColumnRuleWidth} min={1} max={10} step={1} unit="px" />
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Color</label>
                  <input
                    type="color"
                    value={columnRuleColor}
                    onChange={(e) => setColumnRuleColor(e.target.value)}
                    className="w-full h-10 rounded cursor-pointer"
                  />
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Headline</h4>
                <ControlSelect label="Span Columns" value={columnSpan} onChange={setColumnSpan} options={['none', 'all']} />
              </div>
            </div>
          </div>

          {/* Preview & Code */}
          <div className="lg:col-span-8 space-y-6">
            {/* Live Preview */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 min-h-[400px] shadow-sm">
              <div className="prose dark:prose-invert max-w-none">
                <h2
                  className="text-2xl font-bold mb-4 text-indigo-600 dark:text-indigo-400 border-b border-gray-200 dark:border-gray-700 pb-2"
                  style={{ columnSpan: columnSpan }}
                >
                  The Future of Web Design
                </h2>

                <div style={{
                  columnCount: columnCount,
                  columnGap: `${columnGap}px`,
                  columnRule: `${columnRuleWidth}px ${columnRuleStyle} ${columnRuleColor}`
                }}>
                  <p className="mb-4 text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p className="mb-4 text-justify">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <p className="mb-4 text-justify">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                  <p className="mb-4 text-justify">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
                  </p>
                  <div className="mb-4 bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg break-inside-avoid">
                    <strong className="block text-indigo-700 dark:text-indigo-300 mb-1">Pro Tip:</strong>
                    <span className="text-sm">Use <code className="text-xs bg-white dark:bg-gray-800 px-1 rounded border border-indigo-200 dark:border-indigo-700">break-inside: avoid</code> to prevent elements like this box from being split across columns.</span>
                  </div>
                  <p className="mb-4 text-justify">
                    Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
                  </p>
                </div>
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
          Key Features
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Column Span */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-3">
                <Maximize className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Spanning Columns</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Breaking the flow</p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              Use <code className="text-indigo-500 font-mono">column-span: all</code> to make an element (like a headline or image) stretch across all columns, effectively interrupting the multi-column flow.
            </p>

            <CodeSnippetBlock codeSnippet={`h2 {
  column-span: all;
}`} />
          </div>

          {/* Break Inside */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                <Split className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Controlling Breaks</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Preventing awkward splits</p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              Prevent images, quotes, or important boxes from being sliced in half at the bottom of a column using <code className="text-indigo-500 font-mono">break-inside: avoid</code>.
            </p>

            <CodeSnippetBlock codeSnippet={`.card {
  break-inside: avoid;
  /* page-break-inside: avoid; (older browsers) */
}`} />
          </div>

        </div>
      </section>

    </div>
  );
};

export default CssMultipleColumns;