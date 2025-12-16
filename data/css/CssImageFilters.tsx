import React, { useState } from 'react';
import { Sliders, Droplet, Sun, Eye, Layers, RotateCw, Image, Code, Check, Copy, RefreshCw, Zap } from 'lucide-react';

// --- Utility Components ---

const ControlSlider = ({ label, value, onChange, min, max, step, unit }) => (
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

const FilterCard = ({ title, description, icon: Icon, exampleCode }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all">
    <div className="flex items-center mb-4">
      <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg mr-3">
        <Icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
      </div>
      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
    </div>
    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
      {description}
    </p>
    <div className="bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
      <code className="text-xs font-mono text-gray-700 dark:text-indigo-300 block">
        {exampleCode}
      </code>
    </div>
  </div>
);

// --- Main Component ---

const CssImageFilters = () => {
  // Filter State
  const [blur, setBlur] = useState(0);
  const [grayscale, setGrayscale] = useState(0);
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [saturate, setSaturate] = useState(100);
  const [sepia, setSepia] = useState(0);
  const [hueRotate, setHueRotate] = useState(0);
  const [opacity, setOpacity] = useState(100);

  const resetFilters = () => {
    setBlur(0);
    setGrayscale(0);
    setBrightness(100);
    setContrast(100);
    setSaturate(100);
    setSepia(0);
    setHueRotate(0);
    setOpacity(100);
  };

  const getFilterString = () => {
    const filters = [];
    if (blur > 0) filters.push(`blur(${blur}px)`);
    if (grayscale > 0) filters.push(`grayscale(${grayscale}%)`);
    if (brightness !== 100) filters.push(`brightness(${brightness}%)`);
    if (contrast !== 100) filters.push(`contrast(${contrast}%)`);
    if (saturate !== 100) filters.push(`saturate(${saturate}%)`);
    if (sepia > 0) filters.push(`sepia(${sepia}%)`);
    if (hueRotate > 0) filters.push(`hue-rotate(${hueRotate}deg)`);
    if (opacity !== 100) filters.push(`opacity(${opacity}%)`);

    return filters.length > 0 ? filters.join(' ') : 'none';
  };

  const generatedCss = `img {
  filter: ${getFilterString()};
}`;

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-gray-900 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl mb-4">
          <Sliders className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          CSS Image Filters
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Apply professional visual effects like blur, grayscale, and contrast adjustments directly in the browser—no Photoshop required.
        </p>
      </header>

      {/* Interactive Sandbox */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Zap className="w-6 h-6 mr-2 text-indigo-500" />
            Filter Lab
          </h2>
          <div className="flex items-center space-x-4">
            <button
              onClick={resetFilters}
              className="flex items-center text-sm font-medium text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
            >
              <RefreshCw className="w-4 h-4 mr-1" /> Reset
            </button>
            <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-bold uppercase tracking-wider">
              Interactive
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Controls */}
          <div className="lg:col-span-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 h-fit">
            <h3 className="font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-100 dark:border-gray-700">
              Adjustments
            </h3>

            <div className="space-y-2">
              <ControlSlider label="Blur" value={blur} onChange={setBlur} min={0} max={20} step={1} unit="px" />
              <ControlSlider label="Grayscale" value={grayscale} onChange={setGrayscale} min={0} max={100} step={1} unit="%" />
              <ControlSlider label="Brightness" value={brightness} onChange={setBrightness} min={0} max={200} step={1} unit="%" />
              <ControlSlider label="Contrast" value={contrast} onChange={setContrast} min={0} max={200} step={1} unit="%" />
              <ControlSlider label="Saturate" value={saturate} onChange={setSaturate} min={0} max={200} step={1} unit="%" />
              <ControlSlider label="Sepia" value={sepia} onChange={setSepia} min={0} max={100} step={1} unit="%" />
              <ControlSlider label="Hue Rotate" value={hueRotate} onChange={setHueRotate} min={0} max={360} step={1} unit="deg" />
              <ControlSlider label="Opacity" value={opacity} onChange={setOpacity} min={0} max={100} step={1} unit="%" />
            </div>
          </div>

          {/* Preview & Code */}
          <div className="lg:col-span-8 space-y-6">
            {/* Live Preview */}
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 min-h-[400px] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

              <div className="relative w-full max-w-lg aspect-video rounded-lg overflow-hidden shadow-2xl transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80"
                  alt="Landscape"
                  className="w-full h-full object-cover"
                  style={{ filter: getFilterString() }}
                />

                {/* Comparison Split (Visual Hint) */}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white text-xs font-bold px-2 py-1 rounded">
                  Filtered
                </div>
              </div>
            </div>

            {/* Generated Code */}
            <CodeSnippetBlock codeSnippet={generatedCss} title="Generated CSS" />
          </div>
        </div>
      </section>

      {/* Filter Types Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          Filter Types Explained
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FilterCard
            title="Blur"
            icon={Droplet}
            description="Applies a Gaussian blur to the image. Higher values create more blur."
            exampleCode="filter: blur(5px);"
          />
          <FilterCard
            title="Grayscale"
            icon={Image}
            description="Converts the image to black and white. 100% is completely grayscale."
            exampleCode="filter: grayscale(100%);"
          />
          <FilterCard
            title="Brightness"
            icon={Sun}
            description="Adjusts the brightness. 0% is black, 100% is original, >100% is brighter."
            exampleCode="filter: brightness(150%);"
          />
          <FilterCard
            title="Contrast"
            icon={Eye}
            description="Adjusts the contrast. 0% is gray, 100% is original, >100% increases contrast."
            exampleCode="filter: contrast(200%);"
          />
          <FilterCard
            title="Sepia"
            icon={Layers}
            description="Applies a vintage brownish tone to the image."
            exampleCode="filter: sepia(100%);"
          />
          <FilterCard
            title="Hue Rotate"
            icon={RotateCw}
            description="Rotates the phase of the colors. Useful for color shifting."
            exampleCode="filter: hue-rotate(90deg);"
          />
        </div>
      </section>

      {/* Advanced Techniques */}
      <section className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-4">
          Advanced Techniques
        </h2>

        {/* Hover Effect */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
              <Zap className="w-5 h-5 mr-2 text-indigo-500" />
              Hover Transition
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Combine filters with CSS transitions to create engaging hover effects (e.g., grayscale to color).
            </p>
          </div>
          <div className="grid md:grid-cols-2">
            <div className="p-6 bg-gray-50 dark:bg-gray-900/50 flex items-center justify-center">
              <div className="w-64 h-40 rounded-lg overflow-hidden shadow-lg cursor-pointer group">
                <img
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=400&q=80"
                  alt="Tech"
                  className="w-full h-full object-cover filter grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
                />
              </div>
            </div>
            <div className="p-6 bg-gray-900 border-l border-gray-800">
              <code className="text-sm font-mono text-gray-300 whitespace-pre">
                {`img {
  filter: grayscale(100%);
  transition: all 0.5s ease;
}

img:hover {
  filter: grayscale(0%);
  transform: scale(1.1);
}`}
              </code>
            </div>
          </div>
        </div>

        {/* Drop Shadow */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
              <Layers className="w-5 h-5 mr-2 text-indigo-500" />
              Drop Shadow vs Box Shadow
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Unlike <code className="text-indigo-500 font-mono">box-shadow</code>, <code className="text-indigo-500 font-mono">drop-shadow</code> respects the transparency of PNG images.
            </p>
          </div>
          <div className="grid md:grid-cols-2">
            <div className="p-6 bg-gray-50 dark:bg-gray-900/50 flex items-center justify-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png"
                alt="CSS Logo"
                className="w-24 h-24"
                style={{ filter: 'drop-shadow(0 10px 8px rgba(0,0,0,0.5))' }}
              />
            </div>
            <div className="p-6 bg-gray-900 border-l border-gray-800">
              <code className="text-sm font-mono text-gray-300 whitespace-pre">
                {`img {
  /* Follows the shape of the image */
  filter: drop-shadow(0 10px 8px rgba(0,0,0,0.5));
}`}
              </code>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
};

export default CssImageFilters;