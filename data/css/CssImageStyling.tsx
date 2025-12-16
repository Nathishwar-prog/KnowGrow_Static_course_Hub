import React, { useState } from 'react';
import { Image, Sliders, Layers, Maximize, Eye, Sun, Aperture, Code, Check, Copy, Layout, Box } from 'lucide-react';

// --- Utility Components ---

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

const FeatureCard = ({ title, description, icon: Icon, code }) => (
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
    {code && (
      <div className="bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
        <code className="text-xs font-mono text-gray-700 dark:text-indigo-300 block whitespace-pre-wrap">
          {code}
        </code>
      </div>
    )}
  </div>
);

// --- Main Component ---

const CssImageStyling = () => {
  // Sandbox State
  const [borderRadius, setBorderRadius] = useState(0);
  const [opacity, setOpacity] = useState(100);
  const [grayscale, setGrayscale] = useState(0);
  const [blur, setBlur] = useState(0);
  const [brightness, setBrightness] = useState(100);
  const [objectFit, setObjectFit] = useState('cover');
  const [shadow, setShadow] = useState('none');
  const [border, setBorder] = useState('none');

  const getGeneratedCss = () => {
    const filters = [];
    if (grayscale > 0) filters.push(`grayscale(${grayscale}%)`);
    if (blur > 0) filters.push(`blur(${blur}px)`);
    if (brightness !== 100) filters.push(`brightness(${brightness}%)`);

    return `img {
  width: 100%;
  height: 300px;
  object-fit: ${objectFit};
  border-radius: ${borderRadius}px;
  opacity: ${opacity / 100};
  ${border !== 'none' ? `border: ${border};` : ''}
  ${shadow !== 'none' ? `box-shadow: ${shadow};` : ''}
  ${filters.length > 0 ? `filter: ${filters.join(' ')};` : ''}
}`;
  };

  const shadowOptions = {
    'none': 'none',
    'Subtle': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    'Medium': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    'Heavy': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    'Glow': '0 0 15px rgba(99, 102, 241, 0.5)',
  };

  const borderOptions = {
    'none': 'none',
    'Solid': '4px solid #6366f1',
    'Dashed': '4px dashed #6366f1',
    'Double': '8px double #6366f1',
  };

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-gray-900 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl mb-4">
          <Image className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          CSS Image Styling
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Master the art of displaying images. Control size, alignment, filters, and responsive behavior with CSS.
        </p>
      </header>

      {/* Interactive Sandbox */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Sliders className="w-6 h-6 mr-2 text-indigo-500" />
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
              Adjustments
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Shape & Border</h4>
                <ControlSlider label="Border Radius" value={borderRadius} onChange={setBorderRadius} min={0} max={150} step={1} unit="px" />
                <ControlSelect label="Border Style" value={border} onChange={setBorder} options={Object.keys(borderOptions).map(k => borderOptions[k] === 'none' ? 'none' : k)} />
                <ControlSelect label="Shadow" value={shadow} onChange={(val) => setShadow(shadowOptions[val])} options={Object.keys(shadowOptions)} />
              </div>

              <div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Filters & Effects</h4>
                <ControlSlider label="Opacity" value={opacity} onChange={setOpacity} min={0} max={100} step={1} unit="%" />
                <ControlSlider label="Grayscale" value={grayscale} onChange={setGrayscale} min={0} max={100} step={1} unit="%" />
                <ControlSlider label="Blur" value={blur} onChange={setBlur} min={0} max={20} step={1} unit="px" />
                <ControlSlider label="Brightness" value={brightness} onChange={setBrightness} min={0} max={200} step={10} unit="%" />
              </div>

              <div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Layout</h4>
                <ControlSelect label="Object Fit" value={objectFit} onChange={setObjectFit} options={['cover', 'contain', 'fill', 'none', 'scale-down']} />
              </div>
            </div>
          </div>

          {/* Preview & Code */}
          <div className="lg:col-span-8 space-y-6">
            {/* Live Preview */}
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 min-h-[400px] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

              <div className="w-full max-w-md bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="relative w-full h-[300px] bg-gray-200 dark:bg-gray-700 rounded overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                    alt="Laptop on desk"
                    className="w-full h-full transition-all duration-300"
                    style={{
                      borderRadius: `${borderRadius}px`,
                      opacity: opacity / 100,
                      filter: `grayscale(${grayscale}%) blur(${blur}px) brightness(${brightness}%)`,
                      objectFit: objectFit,
                      boxShadow: shadow === 'none' ? 'none' : shadow,
                      border: border === 'none' ? 'none' : borderOptions[Object.keys(borderOptions).find(k => borderOptions[k] === border) || 'none']
                    }}
                  />
                </div>
                <p className="mt-3 text-center text-sm text-gray-500 dark:text-gray-400 font-medium">
                  Preview Image
                </p>
              </div>
            </div>

            {/* Generated Code */}
            <CodeSnippetBlock codeSnippet={getGeneratedCss()} title="Generated CSS" />
          </div>
        </div>
      </section>

      {/* Key Concepts Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          Core Concepts
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            title="Responsive Sizing"
            icon={Maximize}
            description="Ensure images look good on all devices by setting max-width to 100% and height to auto."
            code={`img {
  max-width: 100%;
  height: auto;
}`}
          />

          <FeatureCard
            title="Rounded Corners"
            icon={Aperture}
            description="Use border-radius to create soft corners or perfect circles (50%)."
            code={`img {
  border-radius: 10px; /* Rounded */
  border-radius: 50%; /* Circle */
}`}
          />

          <FeatureCard
            title="Object Fit"
            icon={Layout}
            description="Control how an image fills its container without distorting the aspect ratio."
            code={`img {
  width: 300px;
  height: 200px;
  object-fit: cover;
}`}
          />

          <FeatureCard
            title="Shadows & Depth"
            icon={Layers}
            description="Add depth to your images using box-shadow."
            code={`img {
  box-shadow: 0 10px 15px rgba(0,0,0,0.1);
}`}
          />

          <FeatureCard
            title="Filters"
            icon={Sun}
            description="Apply visual effects like blur, brightness, and grayscale directly in CSS."
            code={`img {
  filter: grayscale(100%) blur(2px);
}`}
          />

          <FeatureCard
            title="Hover Effects"
            icon={Eye}
            description="Create interactive zoom effects using transform and transition."
            code={`img:hover {
  transform: scale(1.1);
  transition: transform 0.3s;
}`}
          />
        </div>
      </section>

      {/* Advanced Techniques */}
      <section className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-4">
          Advanced Techniques
        </h2>

        {/* Image Overlay */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
              <Layers className="w-5 h-5 mr-2 text-indigo-500" />
              Image Overlay
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Position text over an image using absolute positioning within a relative container.
            </p>
          </div>
          <div className="grid md:grid-cols-2">
            <div className="p-6 bg-gray-50 dark:bg-gray-900/50 flex items-center justify-center">
              <div className="relative rounded-lg overflow-hidden shadow-lg w-64 h-40 group cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=400&q=80"
                  alt="Tech"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                  <span className="text-white font-bold text-lg">Overlay Text</span>
                </div>
              </div>
            </div>
            <div className="p-6 bg-gray-900 border-l border-gray-800">
              <code className="text-sm font-mono text-gray-300 whitespace-pre">
                {`.container { position: relative; }

.text {
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: white;
}`}
              </code>
            </div>
          </div>
        </div>

        {/* Image Reflection */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
              <Box className="w-5 h-5 mr-2 text-indigo-500" />
              Image Reflection
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Create a reflection effect using the <code className="text-indigo-500 font-mono">-webkit-box-reflect</code> property (supported in WebKit browsers).
            </p>
          </div>
          <div className="grid md:grid-cols-2">
            <div className="p-6 bg-gray-50 dark:bg-gray-900/50 flex items-center justify-center pb-12">
              <div className="w-40">
                <img
                  src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=300&q=80"
                  alt="Cube"
                  className="w-full rounded-lg shadow-lg"
                  style={{ WebkitBoxReflect: 'below 10px linear-gradient(transparent, rgba(0,0,0,0.4))' }}
                />
              </div>
            </div>
            <div className="p-6 bg-gray-900 border-l border-gray-800">
              <code className="text-sm font-mono text-gray-300 whitespace-pre">
                {`img {
  -webkit-box-reflect: below 10px 
  linear-gradient(
    transparent, 
    rgba(0,0,0,0.4)
  );
}`}
              </code>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
};

export default CssImageStyling;