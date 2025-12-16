import React, { useState } from 'react';
import { Image as ImageIcon, Layout, Code, Check, Copy, Maximize, Smartphone, Monitor, Crop } from 'lucide-react';

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

const CssRwdImages = () => {
  const [containerWidth, setContainerWidth] = useState(100);
  const [maxWidth, setMaxWidth] = useState('100%');
  const [objectFit, setObjectFit] = useState('cover');
  const [activeTab, setActiveTab] = useState('fluid'); // fluid, art-direction, object-fit

  const getCodeSnippet = () => {
    if (activeTab === 'fluid') {
      return `img {
  max-width: ${maxWidth};
  height: auto;
  display: block;
}`;
    } else if (activeTab === 'art-direction') {
      return `<picture>
  <source media="(max-width: 480px)" srcset="small.jpg">
  <source media="(max-width: 768px)" srcset="medium.jpg">
  <img src="large.jpg" alt="Responsive Image">
</picture>`;
    } else {
      return `.img-container {
  width: 300px;
  height: 200px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: ${objectFit};
}`;
    }
  };

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-gray-900 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl mb-4">
          <ImageIcon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          Responsive Images
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Images that adapt, scale, and fit perfectly on any device. No more overflow or distortion.
        </p>
      </header>

      {/* Interactive Sandbox */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Layout className="w-6 h-6 mr-2 text-indigo-500" />
            Image Studio
          </h2>
          <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-bold uppercase tracking-wider">
            Interactive
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Controls */}
          <div className="lg:col-span-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 h-fit">
            <h3 className="font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-100 dark:border-gray-700">
              Configuration
            </h3>

            {/* Mode Switcher */}
            <div className="flex bg-gray-100 dark:bg-gray-700 p-1 rounded-lg mb-6">
              {[
                { id: 'fluid', label: 'Fluid' },
                { id: 'object-fit', label: 'Object Fit' },
                { id: 'art-direction', label: 'Art Direction' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-2 text-xs font-bold rounded-md transition-all ${activeTab === tab.id
                      ? 'bg-white dark:bg-gray-600 text-indigo-600 dark:text-white shadow-sm'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="space-y-6">
              {activeTab === 'fluid' && (
                <>
                  <ControlSlider
                    label="Container Width"
                    value={containerWidth}
                    onChange={setContainerWidth}
                    min={20} max={100} step={1} unit="%"
                  />
                  <ControlSelect
                    label="max-width"
                    value={maxWidth}
                    onChange={setMaxWidth}
                    options={['100%', '50%', 'none']}
                  />
                </>
              )}

              {activeTab === 'object-fit' && (
                <ControlSelect
                  label="object-fit"
                  value={objectFit}
                  onChange={setObjectFit}
                  options={['cover', 'contain', 'fill', 'none', 'scale-down']}
                />
              )}

              {activeTab === 'art-direction' && (
                <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-100 dark:border-indigo-800">
                  <p className="text-xs text-indigo-700 dark:text-indigo-300">
                    Resize the container width to see the image source change dynamically!
                  </p>
                  <div className="mt-4">
                    <ControlSlider
                      label="Viewport Width Simulator"
                      value={containerWidth}
                      onChange={setContainerWidth}
                      min={30} max={100} step={1} unit="%"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Preview & Code */}
          <div className="lg:col-span-8 space-y-6">
            {/* Live Preview */}
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 min-h-[400px] flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

              {/* Fluid Image Demo */}
              {activeTab === 'fluid' && (
                <div
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md transition-all duration-300 border-2 border-dashed border-gray-300 dark:border-gray-600"
                  style={{ width: `${containerWidth}%`, maxWidth: '100%' }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                    alt="Nature"
                    className="rounded shadow-sm transition-all duration-300"
                    style={{ maxWidth: maxWidth, height: 'auto', display: 'block', width: maxWidth === 'none' ? 'auto' : '100%' }}
                  />
                  <p className="text-center text-xs text-gray-500 mt-2">Container Width: {containerWidth}%</p>
                </div>
              )}

              {/* Object Fit Demo */}
              {activeTab === 'object-fit' && (
                <div
                  className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-md border-2 border-dashed border-indigo-300 dark:border-indigo-700 overflow-hidden relative"
                  style={{ width: '300px', height: '200px' }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1535083783855-76ae62b2914e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                    alt="Cat"
                    className="rounded transition-all duration-300"
                    style={{ width: '100%', height: '100%', objectFit: objectFit }}
                  />
                  <div className="absolute inset-0 border-2 border-red-500/30 pointer-events-none"></div>
                </div>
              )}

              {/* Art Direction Demo */}
              {activeTab === 'art-direction' && (
                <div
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md transition-all duration-300 border-2 border-dashed border-gray-300 dark:border-gray-600 flex flex-col items-center"
                  style={{ width: `${containerWidth}%`, maxWidth: '100%' }}
                >
                  {/* Simulating picture element behavior with JS for demo purposes */}
                  <img
                    src={
                      containerWidth < 50
                        ? "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" // Small/Portrait
                        : "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" // Large/Landscape
                    }
                    alt="Responsive"
                    className="rounded shadow-sm w-full h-auto"
                  />
                  <div className="mt-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400">
                    {containerWidth < 50 ? 'Mobile Image (Small/Portrait)' : 'Desktop Image (Large/Landscape)'}
                  </div>
                </div>
              )}
            </div>

            {/* Generated Code */}
            <CodeSnippetBlock codeSnippet={getCodeSnippet()} title={activeTab === 'art-direction' ? 'HTML Structure' : 'CSS Rules'} language={activeTab === 'art-direction' ? 'html' : 'css'} />
          </div>
        </div>
      </section>

      {/* Core Concepts Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          Responsive Image Techniques
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {/* Fluid Images */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                <Maximize className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Fluid Images</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              The classic technique. <code className="text-indigo-500 font-mono">max-width: 100%</code> ensures the image scales down but never up beyond its original size.
            </p>
          </div>

          {/* Art Direction */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-3">
                <Smartphone className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Art Direction</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Use the <code className="text-indigo-500 font-mono">&lt;picture&gt;</code> element to serve completely different images (cropped or zoomed) for different devices.
            </p>
          </div>

          {/* Object Fit */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg mr-3">
                <Crop className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Object Fit</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Control how an image fills its container, similar to <code className="text-indigo-500 font-mono">background-size</code>. Great for cards and galleries.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default CssRwdImages;