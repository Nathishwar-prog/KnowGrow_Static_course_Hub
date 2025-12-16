import React, { useState } from 'react';
import { Layout, Maximize, Minimize, ArrowUp, Code, Check, Copy, Layers, ListOrdered, AlignCenter } from 'lucide-react';

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

const CssFlexItems = () => {
  const [selectedItem, setSelectedItem] = useState(1);
  const [itemProps, setItemProps] = useState({
    1: { flexGrow: 1, flexShrink: 1, flexBasis: 'auto', alignSelf: 'auto', order: 0 },
    2: { flexGrow: 1, flexShrink: 1, flexBasis: 'auto', alignSelf: 'auto', order: 0 },
    3: { flexGrow: 1, flexShrink: 1, flexBasis: 'auto', alignSelf: 'auto', order: 0 },
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
  flex-grow: ${props.flexGrow};
  flex-shrink: ${props.flexShrink};
  flex-basis: ${props.flexBasis === 'auto' ? 'auto' : props.flexBasis + 'px'};
  align-self: ${props.alignSelf};
  order: ${props.order};
}`;
  };

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-gray-900 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl mb-4">
          <Layers className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          CSS Flex Items
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Fine-tune individual children. Control how they grow, shrink, align, and order themselves within the container.
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
              {[1, 2, 3].map(id => (
                <button
                  key={id}
                  onClick={() => setSelectedItem(id)}
                  className={`flex-1 py-2 rounded-lg font-bold transition-all ${selectedItem === id
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                >
                  Item {id}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              <ControlSlider
                label="flex-grow"
                value={itemProps[selectedItem].flexGrow}
                onChange={(v) => updateItemProp('flexGrow', v)}
                min={0} max={5} step={1}
              />
              <ControlSlider
                label="flex-shrink"
                value={itemProps[selectedItem].flexShrink}
                onChange={(v) => updateItemProp('flexShrink', v)}
                min={0} max={5} step={1}
              />

              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">flex-basis</label>
                  <span className="text-sm font-mono text-indigo-600 dark:text-indigo-400">
                    {itemProps[selectedItem].flexBasis === 'auto' ? 'auto' : `${itemProps[selectedItem].flexBasis}px`}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="300"
                  step="10"
                  value={itemProps[selectedItem].flexBasis === 'auto' ? 0 : itemProps[selectedItem].flexBasis}
                  onChange={(e) => updateItemProp('flexBasis', e.target.value == 0 ? 'auto' : parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-indigo-500"
                />
                <div className="text-xs text-gray-400 mt-1 text-right">0 = auto</div>
              </div>

              <ControlSelect
                label="align-self"
                value={itemProps[selectedItem].alignSelf}
                onChange={(v) => updateItemProp('alignSelf', v)}
                options={['auto', 'flex-start', 'flex-end', 'center', 'stretch', 'baseline']}
              />

              <ControlSlider
                label="order"
                value={itemProps[selectedItem].order}
                onChange={(v) => updateItemProp('order', v)}
                min={-1} max={5} step={1}
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
                className="flex-1 bg-white dark:bg-gray-800 rounded-lg shadow-sm border-2 border-dashed border-indigo-300 dark:border-indigo-700 transition-all duration-300 flex p-4 gap-2"
                style={{ minHeight: '300px' }}
              >
                {[1, 2, 3].map((id) => {
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
                        flexGrow: props.flexGrow,
                        flexShrink: props.flexShrink,
                        flexBasis: props.flexBasis === 'auto' ? 'auto' : `${props.flexBasis}px`,
                        alignSelf: props.alignSelf,
                        order: props.order,
                        minHeight: '80px',
                        minWidth: '80px' // Base size for visibility
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

      {/* Advanced Concepts Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          Mastering Flex Items
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {/* Flex Grow */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg mr-3">
                <Maximize className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">flex-grow</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
              Defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion.
            </p>
            <div className="text-xs font-mono bg-gray-100 dark:bg-gray-700 p-2 rounded text-gray-600 dark:text-gray-300">
              Default: 0 (do not grow)
            </div>
          </div>

          {/* Flex Shrink */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg mr-3">
                <Minimize className="w-5 h-5 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">flex-shrink</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
              Defines the ability for a flex item to shrink if necessary. Useful when the container is too small.
            </p>
            <div className="text-xs font-mono bg-gray-100 dark:bg-gray-700 p-2 rounded text-gray-600 dark:text-gray-300">
              Default: 1 (shrink to fit)
            </div>
          </div>

          {/* Order */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                <ListOrdered className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">order</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
              Controls the order in which items appear in the flex container. Items with the same order revert to source order.
            </p>
            <div className="text-xs font-mono bg-gray-100 dark:bg-gray-700 p-2 rounded text-gray-600 dark:text-gray-300">
              Default: 0
            </div>
          </div>

        </div>
      </section>

      {/* Align Self Special Case */}
      <section className="max-w-4xl mx-auto mb-16">
        <div className="bg-indigo-900 rounded-xl p-8 shadow-xl text-white">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-indigo-800 rounded-lg">
              <AlignCenter className="w-6 h-6 text-indigo-300" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Override with align-self</h3>
              <p className="text-indigo-200 mb-6">
                Need one item to break the rules? Use <code className="text-white font-mono">align-self</code> to override the container's <code className="text-white font-mono">align-items</code> property for a specific child.
              </p>
              <CodeSnippetBlock
                title="Example"
                codeSnippet={`.container {
  align-items: flex-start;
}

.special-item {
  align-self: flex-end; /* Moves only this item to the bottom */
}`}
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CssFlexItems;