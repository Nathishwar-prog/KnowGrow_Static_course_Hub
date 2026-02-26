import React, { useState } from 'react';
import { Scissors, Layers, Image, Type, Code, Check, Copy, Eye, EyeOff, Layout } from 'lucide-react';

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

const MaskOption = ({ title, description, icon: Icon, active, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full text-left p-4 rounded-xl border transition-all duration-200 ${active
        ? 'bg-indigo-50 dark:bg-indigo-900/30 border-indigo-500 ring-1 ring-indigo-500'
        : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-md'
      }`}
  >
    <div className="flex items-center mb-2">
      <div className={`p-2 rounded-lg mr-3 ${active ? 'bg-indigo-200 dark:bg-indigo-800' : 'bg-gray-100 dark:bg-gray-700'}`}>
        <Icon className={`w-5 h-5 ${active ? 'text-indigo-700 dark:text-indigo-300' : 'text-gray-600 dark:text-gray-400'}`} />
      </div>
      <h3 className={`font-bold ${active ? 'text-indigo-900 dark:text-indigo-100' : 'text-gray-900 dark:text-white'}`}>
        {title}
      </h3>
    </div>
    <p className="text-sm text-gray-600 dark:text-gray-300 ml-12">
      {description}
    </p>
  </button>
);

// --- Main Component ---

const CssMasking = () => {
  const [activeMask, setActiveMask] = useState('linear-fade');

  const masks = {
    'linear-fade': {
      title: 'Linear Fade',
      icon: Layout,
      description: 'Smoothly fades the image from visible to transparent.',
      style: {
        WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
        maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'
      },
      code: `img {
  mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
}`
    },
    'radial-spotlight': {
      title: 'Radial Spotlight',
      icon: Eye,
      description: 'Creates a circular reveal effect, like a spotlight.',
      style: {
        WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 70%)',
        maskImage: 'radial-gradient(circle, black 40%, transparent 70%)'
      },
      code: `img {
  mask-image: radial-gradient(circle, black 40%, transparent 70%);
  -webkit-mask-image: radial-gradient(circle, black 40%, transparent 70%);
}`
    },
    'circle-crop': {
      title: 'Circle Crop',
      icon: Scissors,
      description: 'A hard-edged circular mask.',
      style: {
        WebkitMaskImage: 'radial-gradient(circle, black 60%, transparent 60.5%)',
        maskImage: 'radial-gradient(circle, black 60%, transparent 60.5%)'
      },
      code: `img {
  mask-image: radial-gradient(circle, black 60%, transparent 60.5%);
  -webkit-mask-image: radial-gradient(circle, black 60%, transparent 60.5%);
}`
    },
    'striped': {
      title: 'Striped Pattern',
      icon: Layers,
      description: 'Uses a repeating linear gradient for a striped effect.',
      style: {
        WebkitMaskImage: 'repeating-linear-gradient(45deg, black 0, black 10px, transparent 10px, transparent 20px)',
        maskImage: 'repeating-linear-gradient(45deg, black 0, black 10px, transparent 10px, transparent 20px)'
      },
      code: `img {
  mask-image: repeating-linear-gradient(
    45deg, 
    black 0, black 10px, 
    transparent 10px, transparent 20px
  );
}`
    }
  };

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-gray-900 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl mb-4">
          <EyeOff className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          CSS Masking
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Control visibility with precision. Use gradients and images to hide parts of elements and create stunning visual effects.
        </p>
      </header>

      {/* Interactive Sandbox */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Scissors className="w-6 h-6 mr-2 text-indigo-500" />
            Mask Studio
          </h2>
          <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-bold uppercase tracking-wider">
            Interactive
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Controls */}
          <div className="lg:col-span-4 space-y-3">
            {Object.entries(masks).map(([key, mask]) => (
              <MaskOption
                key={key}
                title={mask.title}
                description={mask.description}
                icon={mask.icon}
                active={activeMask === key}
                onClick={() => setActiveMask(key)}
              />
            ))}
          </div>

          {/* Preview & Code */}
          <div className="lg:col-span-8 space-y-6">
            {/* Live Preview */}
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 min-h-[400px] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

              <div className="relative w-full max-w-md aspect-square rounded-lg shadow-2xl overflow-hidden bg-white dark:bg-gray-800">
                {/* Background Pattern to show transparency */}
                <div className="absolute inset-0" style={{
                  backgroundImage: 'conic-gradient(#eee 90deg, #fff 90deg 180deg, #eee 180deg 270deg, #fff 270deg)',
                  backgroundSize: '20px 20px',
                  opacity: 0.5
                }}></div>

                <img
                  src="https://images.unsplash.com/photo-1558478551-1a378f63328e?auto=format&fit=crop&w=800&q=80"
                  alt="City"
                  className="w-full h-full object-cover relative z-10"
                  style={masks[activeMask].style}
                />
              </div>
            </div>

            {/* Generated Code */}
            <CodeSnippetBlock
              codeSnippet={masks[activeMask].code}
              title={`CSS for ${masks[activeMask].title}`}
            />
          </div>
        </div>
      </section>

      {/* Advanced Concepts Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          Advanced Techniques
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Text Masking */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <div className="p-2 bg-pink-100 dark:bg-pink-900/30 rounded-lg mr-3">
                <Type className="w-6 h-6 text-pink-600 dark:text-pink-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Text Masking</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Gradient text effects</p>
              </div>
            </div>

            <div className="mb-6 p-6 bg-gray-900 rounded-lg flex items-center justify-center">
              <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-500">
                GRADIENT
              </h1>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              While technically <code className="text-indigo-500 font-mono">background-clip: text</code>, this is often grouped with masking. It allows the background (image or gradient) to show through the text.
            </p>

            <CodeSnippetBlock codeSnippet={`h1 {
  background: linear-gradient(to right, #818cf8, #ec4899);
  -webkit-background-clip: text;
  color: transparent;
}`} />
          </div>

          {/* Image Masking */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                <Image className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Image-Based Masks</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Using PNGs as masks</p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              You can use any PNG image with transparency as a mask. The opaque parts of the PNG will reveal the element, while transparent parts will hide it.
            </p>

            <CodeSnippetBlock codeSnippet={`img {
  mask-image: url('mask-shape.png');
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
}`} />
          </div>

        </div>
      </section>

    </div>
  );
};

export default CssMasking;