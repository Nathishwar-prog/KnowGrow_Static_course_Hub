import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Code, Check, Copy, Settings, Zap, Clock, Repeat, ArrowRightLeft, Layers } from 'lucide-react';

// --- Utility Components ---

const ControlSelect = ({ label, value, onChange, options }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      {label}
    </label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-sm focus:ring-indigo-500 focus:border-indigo-500 dark:text-white"
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

const ControlSlider = ({ label, value, onChange, min, max, step, unit }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      {label}: <span className="font-semibold text-indigo-600 dark:text-indigo-400">{value}{unit}</span>
    </label>
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

const CodeSnippetBlock = ({ codeSnippet, language = 'css' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="relative mb-6 group">
      <div className="absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-md bg-gray-700 text-gray-300 hover:bg-indigo-600 hover:text-white transition-colors"
          title="Copy code"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
      </div>
      <pre className="p-4 bg-gray-900 rounded-lg overflow-x-auto border border-gray-700 shadow-inner">
        <code className={`language-${language} text-sm font-mono text-gray-300`}>
          {codeSnippet}
        </code>
      </pre>
    </div>
  );
};

const PropertyCard = ({ title, property, values, example, icon: Icon }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-center">
        <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg mr-3">
          <Icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
          <code className="text-xs text-indigo-500 font-mono">{property}</code>
        </div>
      </div>
    </div>

    <div className="mb-4">
      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Common Values</h4>
      <div className="flex flex-wrap gap-2">
        {values.map((val) => (
          <span key={val} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md font-mono border border-gray-200 dark:border-gray-600">
            {val}
          </span>
        ))}
      </div>
    </div>

    <div className="bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
      <code className="text-sm font-mono text-gray-700 dark:text-gray-300">
        {example}
      </code>
    </div>
  </div>
);

// --- Main Component ---

const CssAnimations = () => {
  // Animation State
  const [duration, setDuration] = useState(2);
  const [timingFunction, setTimingFunction] = useState('ease-in-out');
  const [delay, setDelay] = useState(0);
  const [iterationCount, setIterationCount] = useState('infinite');
  const [direction, setDirection] = useState('alternate');
  const [fillMode, setFillMode] = useState('none');
  const [playState, setPlayState] = useState('running');
  const [key, setKey] = useState(0); // Used to force restart animation

  const restartAnimation = () => {
    setKey(prev => prev + 1);
    setPlayState('running');
  };

  const animationStyle = {
    animationName: 'moveBox',
    animationDuration: `${duration}s`,
    animationTimingFunction: timingFunction,
    animationDelay: `${delay}s`,
    animationIterationCount: iterationCount,
    animationDirection: direction,
    animationFillMode: fillMode,
    animationPlayState: playState,
  };

  const generatedCss = `.box {
  width: 100px;
  height: 100px;
  background-color: #6366f1;
  border-radius: 0.5rem;
  
  /* Animation Properties */
  animation-name: moveBox;
  animation-duration: ${duration}s;
  animation-timing-function: ${timingFunction};
  animation-delay: ${delay}s;
  animation-iteration-count: ${iterationCount};
  animation-direction: ${direction};
  animation-fill-mode: ${fillMode};
  animation-play-state: ${playState};
}

@keyframes moveBox {
  from { transform: translateX(0); }
  to { transform: translateX(calc(100% - 100px)); }
}`;

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-gray-900 min-h-screen font-sans">

      {/* Inject Keyframes */}
      <style>{`
        @keyframes moveBox {
          from { transform: translateX(0); background-color: #6366f1; }
          to { transform: translateX(200px); background-color: #ec4899; }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 0.5; }
          100% { transform: scale(2); opacity: 0; }
        }
      `}</style>

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl mb-4">
          <Zap className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          Mastering CSS Animations
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Bring your web pages to life with smooth, high-performance animations using only CSS. No JavaScript required.
        </p>
      </header>

      {/* Introduction Section */}
      <section className="max-w-4xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What are CSS Animations?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            CSS Animations enable you to animate HTML elements using <code className="text-indigo-600 dark:text-indigo-400 font-mono bg-indigo-50 dark:bg-indigo-900/30 px-1 py-0.5 rounded">@keyframes</code> and animation properties. They allow you to change the style of an element gradually from one style to another.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: 'No JavaScript', desc: 'Define everything in CSS', icon: Code },
              { title: 'Optimized', desc: 'Hardware accelerated by browser', icon: Zap },
              { title: 'Control', desc: 'Pause, reverse, and loop easily', icon: Settings },
            ].map((item) => (
              <div key={item.title} className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-100 dark:border-gray-700">
                <div className="flex items-center mb-2">
                  <item.icon className="w-4 h-4 text-indigo-500 mr-2" />
                  <h3 className="font-bold text-gray-900 dark:text-white">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Sandbox */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Settings className="w-6 h-6 mr-2 text-indigo-500" />
            Animation Sandbox
          </h2>
          <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-bold uppercase tracking-wider">
            Interactive
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Controls */}
          <div className="lg:col-span-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 h-fit">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-gray-900 dark:text-white">Properties</h3>
              <button
                onClick={restartAnimation}
                className="text-xs flex items-center text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 font-medium"
              >
                <RotateCcw className="w-3 h-3 mr-1" /> Reset
              </button>
            </div>

            <div className="space-y-1">
              <ControlSlider label="Duration" value={duration} onChange={setDuration} min={0.1} max={5} step={0.1} unit="s" />
              <ControlSelect
                label="Timing Function"
                value={timingFunction}
                onChange={setTimingFunction}
                options={['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out', 'steps(4)']}
              />
              <ControlSlider label="Delay" value={delay} onChange={setDelay} min={0} max={5} step={0.5} unit="s" />
              <ControlSelect
                label="Iteration Count"
                value={iterationCount}
                onChange={setIterationCount}
                options={['1', '2', '3', 'infinite']}
              />
              <ControlSelect
                label="Direction"
                value={direction}
                onChange={setDirection}
                options={['normal', 'reverse', 'alternate', 'alternate-reverse']}
              />
              <ControlSelect
                label="Fill Mode"
                value={fillMode}
                onChange={setFillMode}
                options={['none', 'forwards', 'backwards', 'both']}
              />
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Play State</label>
              <div className="flex bg-gray-100 dark:bg-gray-700 p-1 rounded-lg">
                <button
                  onClick={() => setPlayState('running')}
                  className={`flex-1 flex items-center justify-center py-2 rounded-md text-sm font-medium transition-all ${playState === 'running'
                      ? 'bg-white dark:bg-gray-600 text-indigo-600 dark:text-white shadow-sm'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700'
                    }`}
                >
                  <Play className="w-4 h-4 mr-1" /> Run
                </button>
                <button
                  onClick={() => setPlayState('paused')}
                  className={`flex-1 flex items-center justify-center py-2 rounded-md text-sm font-medium transition-all ${playState === 'paused'
                      ? 'bg-white dark:bg-gray-600 text-indigo-600 dark:text-white shadow-sm'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700'
                    }`}
                >
                  <Pause className="w-4 h-4 mr-1" /> Pause
                </button>
              </div>
            </div>
          </div>

          {/* Preview & Code */}
          <div className="lg:col-span-8 space-y-6">
            {/* Preview Box */}
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 min-h-[300px] flex items-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

              <div className="w-full relative z-10">
                <div className="w-[200px] h-[2px] bg-gray-300 dark:bg-gray-700 absolute top-1/2 left-0 -translate-y-1/2 w-full"></div>
                <div className="flex justify-between text-xs text-gray-400 font-mono absolute top-1/2 left-0 w-full -mt-6 px-1">
                  <span>0%</span>
                  <span>100%</span>
                </div>

                <div
                  key={key}
                  className="w-16 h-16 bg-indigo-500 rounded-xl shadow-xl flex items-center justify-center text-white font-bold text-xs z-20 relative"
                  style={animationStyle}
                >
                  BOX
                </div>
              </div>
            </div>

            {/* Generated Code */}
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-800">
              <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
                <span className="text-xs font-mono text-gray-400">Generated CSS</span>
                <div className="flex space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
                </div>
              </div>
              <CodeSnippetBlock codeSnippet={generatedCss} />
            </div>
          </div>
        </div>
      </section>

      {/* Key Concepts Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          Key Animation Properties
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <PropertyCard
            title="@keyframes"
            property="@keyframes name { ... }"
            icon={Code}
            values={['from', 'to', '0%', '50%', '100%']}
            example={`@keyframes slide {
  from { left: 0; }
  to { left: 100px; }
}`}
          />

          <PropertyCard
            title="Animation Duration"
            property="animation-duration"
            icon={Clock}
            values={['0.5s', '2s', '500ms']}
            example={`.box {
  animation-duration: 2s;
  /* 1s = 1000ms */
}`}
          />

          <PropertyCard
            title="Timing Function"
            property="animation-timing-function"
            icon={Layers}
            values={['linear', 'ease', 'ease-in-out', 'cubic-bezier(...)']}
            example={`.box {
  /* Smooth start and end */
  animation-timing-function: ease-in-out;
}`}
          />

          <PropertyCard
            title="Iteration Count"
            property="animation-iteration-count"
            icon={Repeat}
            values={['1', '3', 'infinite']}
            example={`.box {
  /* Loops forever */
  animation-iteration-count: infinite;
}`}
          />

          <PropertyCard
            title="Direction"
            property="animation-direction"
            icon={ArrowRightLeft}
            values={['normal', 'reverse', 'alternate']}
            example={`.box {
  /* Plays forward then backward */
  animation-direction: alternate;
}`}
          />

          <PropertyCard
            title="Fill Mode"
            property="animation-fill-mode"
            icon={Settings}
            values={['none', 'forwards', 'backwards', 'both']}
            example={`.box {
  /* Stays at the end state */
  animation-fill-mode: forwards;
}`}
          />
        </div>
      </section>

      {/* Shorthand Section */}
      <section className="max-w-4xl mx-auto bg-indigo-900 text-white rounded-2xl p-8 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-indigo-500 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-pink-500 rounded-full opacity-20 blur-3xl"></div>

        <h2 className="text-2xl font-bold mb-4 relative z-10">The Shorthand Property</h2>
        <p className="text-indigo-200 mb-6 relative z-10">
          Instead of writing out every property individually, you can use the single <code className="text-white font-mono bg-indigo-800 px-1 rounded">animation</code> property.
        </p>

        <div className="bg-indigo-950/50 rounded-lg p-4 border border-indigo-700/50 mb-6 relative z-10">
          <code className="font-mono text-sm text-indigo-300">
            animation: <span className="text-pink-400">[name]</span> <span className="text-yellow-400">[duration]</span> <span className="text-green-400">[timing-function]</span> <span className="text-blue-400">[delay]</span> <span className="text-purple-400">[iteration-count]</span> <span className="text-orange-400">[direction]</span> <span className="text-red-400">[fill-mode]</span>;
          </code>
        </div>

        <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 relative z-10">
          <code className="font-mono text-sm text-gray-300">
            .box {'{'}<br />
            &nbsp;&nbsp;animation: <span className="text-pink-400">moveBox</span> <span className="text-yellow-400">2s</span> <span className="text-green-400">ease-in-out</span> <span className="text-blue-400">0s</span> <span className="text-purple-400">infinite</span> <span className="text-orange-400">alternate</span>;<br />
            {'}'}
          </code>
        </div>
      </section>

    </div>
  );
};

export default CssAnimations;