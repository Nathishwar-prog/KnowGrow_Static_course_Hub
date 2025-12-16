import React, { useState } from 'react';
import { Grid, Layout, Maximize, Minimize, Code, Check, Copy, Box, Layers, AlignCenter } from 'lucide-react';

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

const CssGridItem = () => {
  const [selectedItem, setSelectedItem] = useState(1);
  const [itemProps, setItemProps] = useState({
    1: { colStart: 1, colSpan: 1, rowStart: 1, rowSpan: 1, justifySelf: 'stretch', alignSelf: 'stretch' },
    2: { colStart: 2, colSpan: 1, rowStart: 1, rowSpan: 1, justifySelf: 'stretch', alignSelf: 'stretch' },
    3: { colStart: 1, colSpan: 1, rowStart: 2, rowSpan: 1, justifySelf: 'stretch', alignSelf: 'stretch' },
    4: { colStart: 2, colSpan: 1, rowStart: 2, rowSpan: 1, justifySelf: 'stretch', alignSelf: 'stretch' },
  });

  const updateItemProp = (prop, value) => {
    setItemProps(prev => ({
      ...prev,
      [selectedItem]: { ...prev[selectedItem], [prop]: value }
    }));
  };

  const getGeneratedCss = () => {
    const props = itemProps[selectedItem];
    return `.item-${selectedItem} {
  grid-column: ${props.colStart} / span ${props.colSpan};
  grid-row: ${props.rowStart} / span ${props.rowSpan};
  justify-self: ${props.justifySelf};
  align-self: ${props.alignSelf};
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
          CSS Grid Items
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Take control of individual children. Position, span, and align items precisely within the grid.
        </p>
      </header>

      {/* Interactive Sandbox */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Layout className="w-6 h-6 mr-2 text-indigo-500" />
            Item Studio
          </h2>
          <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-bold uppercase tracking-wider">
            Interactive
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Controls */}
          <div className="lg:col-span-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 h-fit">
            <h3 className="font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-100 dark:border-gray-700">
              Configure Item {selectedItem}
            </h3>

            {/* Item Selector */}
            <div className="flex gap-2 mb-6">
              {[1, 2, 3, 4].map(id => (
                <button
                  key={id}
                  onClick={() => setSelectedItem(id)}
                  className={`flex-1 py-2 rounded-lg font-bold transition-all ${selectedItem === id
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                >
                  {id}
                </button>
              ))}
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Position & Span</h4>
                <ControlSlider
                  label="Column Start"
                  value={itemProps[selectedItem].colStart}
                  onChange={(v) => updateItemProp('colStart', v)}
                  min={1} max={4} step={1}
                />
                <ControlSlider
                  label="Column Span"
                  value={itemProps[selectedItem].colSpan}
                  onChange={(v) => updateItemProp('colSpan', v)}
                  min={1} max={3} step={1}
                />
                <ControlSlider
                  label="Row Start"
                  value={itemProps[selectedItem].rowStart}
                  onChange={(v) => updateItemProp('rowStart', v)}
                  min={1} max={4} step={1}
                />
                <ControlSlider
                  label="Row Span"
                  value={itemProps[selectedItem].rowSpan}
                  onChange={(v) => updateItemProp('rowSpan', v)}
                  min={1} max={3} step={1}
                />
              </div>

              <div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Self Alignment</h4>
                <ControlSelect
                  label="justify-self (Horizontal)"
                  value={itemProps[selectedItem].justifySelf}
                  onChange={(v) => updateItemProp('justifySelf', v)}
                  options={['stretch', 'start', 'end', 'center']}
                />
                <ControlSelect
                  label="align-self (Vertical)"
                  value={itemProps[selectedItem].alignSelf}
                  onChange={(v) => updateItemProp('alignSelf', v)}
                  options={['stretch', 'start', 'end', 'center']}
                />
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
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border-2 border-dashed border-indigo-300 dark:border-indigo-700 transition-all duration-300 p-4"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gridTemplateRows: 'repeat(4, 80px)',
                  gap: '10px',
                  height: '400px'
                }}
              >
                {[1, 2, 3, 4].map((id) => {
                  const props = itemProps[id];
                  const isSelected = selectedItem === id;
                  return (
                    <div
                      key={id}
                      className={`
                        rounded-lg shadow-md transition-all duration-300 flex items-center justify-center font-bold text-xl relative
                        ${isSelected
                          ? 'bg-indigo-600 text-white ring-4 ring-indigo-300 dark:ring-indigo-900 z-10'
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'}
                      `}
                      style={{
                        gridColumn: `${props.colStart} / span ${props.colSpan}`,
                        gridRow: `${props.rowStart} / span ${props.rowSpan}`,
                        justifySelf: props.justifySelf,
                        alignSelf: props.alignSelf,
                        width: props.justifySelf === 'stretch' ? 'auto' : '80%', // Visual aid for non-stretch
                        height: props.alignSelf === 'stretch' ? 'auto' : '80%'   // Visual aid for non-stretch
                      }}
                    >
                      {id}
                      {isSelected && (
                        <div className="absolute -top-3 -right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full shadow-sm">
                          Edit
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Generated Code */}
            <CodeSnippetBlock codeSnippet={getGeneratedCss()} title={`CSS for Item ${selectedItem}`} />
          </div>
        </div>
      </section>

      {/* Core Concepts Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          Item Superpowers
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Grid Area */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-3">
                <Layers className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Grid Area</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Semantic Positioning</p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              Assign items to named areas defined in the container. This makes your layout code incredibly readable and easy to maintain.
            </p>

            <CodeSnippetBlock codeSnippet={`.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }`} />
          </div>

          {/* Self Alignment */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                <AlignCenter className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Self Alignment</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Breaking the Rules</p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              Use <code className="text-indigo-500 font-mono">justify-self</code> and <code className="text-indigo-500 font-mono">align-self</code> to override the container's default alignment for a specific item.
            </p>

            <CodeSnippetBlock codeSnippet={`.item {
  justify-self: center; /* Center horizontally in cell */
  align-self: end;      /* Align to bottom of cell */
}`} />
          </div>

        </div>
      </section>

    </div>
  );
};

export default CssGridItem;