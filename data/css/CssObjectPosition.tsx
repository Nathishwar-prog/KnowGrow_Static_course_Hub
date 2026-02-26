import React, { useState } from 'react';
import { Move, Focus, Target, Layout, Image, Video, Code, Check, Copy, Percent, Maximize2 } from 'lucide-react';

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

const PositionControl = ({ label, x, y, setX, setY }) => (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">{label}</label>
        <div className="grid grid-cols-2 gap-4">
            <div>
                <span className="text-xs text-gray-500 dark:text-gray-400 mb-1 block">Horizontal (X)</span>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={x}
                    onChange={(e) => setX(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-indigo-500"
                />
                <div className="text-right text-xs font-mono text-indigo-600 dark:text-indigo-400 mt-1">{x}%</div>
            </div>
            <div>
                <span className="text-xs text-gray-500 dark:text-gray-400 mb-1 block">Vertical (Y)</span>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={y}
                    onChange={(e) => setY(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-indigo-500"
                />
                <div className="text-right text-xs font-mono text-indigo-600 dark:text-indigo-400 mt-1">{y}%</div>
            </div>
        </div>
    </div>
);

const PresetButton = ({ label, value, onClick, active }) => (
    <button
        onClick={() => onClick(value)}
        className={`px-3 py-2 text-sm rounded-lg font-medium transition-all ${active
                ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300 ring-1 ring-indigo-500'
                : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
    >
        {label}
    </button>
);

// --- Main Component ---

const CssObjectPosition = () => {
    const [posX, setPosX] = useState(50);
    const [posY, setPosY] = useState(50);
    const [activePreset, setActivePreset] = useState('center');

    const presets = {
        'top left': { x: 0, y: 0 },
        'top': { x: 50, y: 0 },
        'top right': { x: 100, y: 0 },
        'left': { x: 0, y: 50 },
        'center': { x: 50, y: 50 },
        'right': { x: 100, y: 50 },
        'bottom left': { x: 0, y: 100 },
        'bottom': { x: 50, y: 100 },
        'bottom right': { x: 100, y: 100 },
    };

    const handlePresetClick = (preset) => {
        setActivePreset(preset);
        setPosX(presets[preset].x);
        setPosY(presets[preset].y);
    };

    const getPositionString = () => `${posX}% ${posY}%`;

    return (
        <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-gray-900 min-h-screen font-sans">

            {/* Header */}
            <header className="max-w-4xl mx-auto text-center mb-12">
                <div className="inline-flex items-center justify-center p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl mb-4">
                    <Target className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
                    CSS Object Position
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Precisely control which part of an image or video is visible when it's cropped by its container.
                </p>
            </header>

            {/* Interactive Sandbox */}
            <section className="max-w-6xl mx-auto mb-16">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                        <Focus className="w-6 h-6 mr-2 text-indigo-500" />
                        Position Lab
                    </h2>
                    <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-bold uppercase tracking-wider">
                        Interactive
                    </span>
                </div>

                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Controls */}
                    <div className="lg:col-span-4 space-y-6">

                        {/* Presets Grid */}
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Quick Presets</label>
                            <div className="grid grid-cols-3 gap-2">
                                {Object.keys(presets).map((preset) => (
                                    <PresetButton
                                        key={preset}
                                        label={preset}
                                        value={preset}
                                        active={activePreset === preset && posX === presets[preset].x && posY === presets[preset].y}
                                        onClick={handlePresetClick}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Fine Tuning */}
                        <PositionControl
                            label="Fine Tune Position"
                            x={posX}
                            y={posY}
                            setX={(val) => { setPosX(val); setActivePreset('custom'); }}
                            setY={(val) => { setPosY(val); setActivePreset('custom'); }}
                        />

                    </div>

                    {/* Preview & Code */}
                    <div className="lg:col-span-8 space-y-6">
                        {/* Live Preview */}
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 min-h-[400px] flex flex-col items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                            <div className="w-full max-w-md bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                                <div className="relative w-full h-[300px] bg-gray-300 dark:bg-gray-700 rounded overflow-hidden border-2 border-dashed border-gray-400 dark:border-gray-600 group">
                                    <img
                                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80"
                                        alt="Portrait"
                                        className="w-full h-full transition-all duration-300"
                                        style={{
                                            objectFit: 'cover',
                                            objectPosition: getPositionString()
                                        }}
                                    />

                                    {/* Visual Crosshair Overlay */}
                                    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute w-4 h-4 border-2 border-white rounded-full shadow-sm transform -translate-x-1/2 -translate-y-1/2 bg-indigo-500/50"
                                            style={{ left: `${posX}%`, top: `${posY}%` }}></div>
                                        <div className="absolute w-full h-px bg-white/30" style={{ top: `${posY}%` }}></div>
                                        <div className="absolute h-full w-px bg-white/30" style={{ left: `${posX}%` }}></div>
                                    </div>

                                    {/* Label */}
                                    <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                                        object-fit: cover
                                    </div>
                                </div>
                            </div>

                            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 text-center">
                                Hover over the image to see the focal point.
                            </p>
                        </div>

                        {/* Generated Code */}
                        <CodeSnippetBlock
                            codeSnippet={`img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: ${getPositionString()};
}`}
                            title="Generated CSS"
                        />
                    </div>
                </div>
            </section>

            {/* Concepts Grid */}
            <section className="max-w-6xl mx-auto mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
                    Core Concepts
                </h2>

                <div className="grid md:grid-cols-2 gap-8">

                    {/* Keywords vs Percentages */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center mb-4">
                            <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-3">
                                <Percent className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Keywords vs. Percentages</h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                            You can use keywords like <code className="text-indigo-500 font-mono">top</code>, <code className="text-indigo-500 font-mono">center</code>, <code className="text-indigo-500 font-mono">bottom</code> or precise percentages. <code className="text-indigo-500 font-mono">0% 0%</code> is top-left, <code className="text-indigo-500 font-mono">100% 100%</code> is bottom-right.
                        </p>
                        <CodeSnippetBlock codeSnippet={`/* Keywords */
object-position: top right;

/* Percentages */
object-position: 100% 0%;`} />
                    </div>

                    {/* Video Application */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center mb-4">
                            <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg mr-3">
                                <Video className="w-5 h-5 text-red-600 dark:text-red-400" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Video Banners</h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                            Essential for responsive video headers where you want to keep the subject in frame regardless of the screen aspect ratio.
                        </p>
                        <CodeSnippetBlock codeSnippet={`video {
  width: 100vw;
  height: 50vh;
  object-fit: cover;
  object-position: center 20%;
}`} />
                    </div>

                </div>
            </section>

        </div>
    );
};

export default CssObjectPosition;
