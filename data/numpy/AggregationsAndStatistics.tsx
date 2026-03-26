import React, { useState } from 'react';
import {
  Calculator, BarChart2, CircleCheck, AlertTriangle, Lightbulb, Zap,
  Terminal, Layers, Activity, Table, ArrowRight, ArrowDownRight, Check, Copy, AlertCircle, ChevronRight, TrendingUp, Presentation, BrainCircuit, Activity as HeartPulse,
  BookOpen,
  Globe,
  Settings
} from 'lucide-react';

// ─── Code Block with Copy ────────────────────────────────────────────────────
const CodeBlock = ({ code, title, language = 'python' }: { code: string; title?: string; language?: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <div className="mb-4 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm relative group w-full">
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
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <button onClick={handleCopy} className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-sky-500 hover:text-white transition-colors border border-gray-700" title="Copy code">
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono bg-gray-900 text-sky-300 leading-relaxed rounded-b-xl">
        <code>{code}</code>
      </pre>
    </div>
  );
};

// ─── Real World App Card ─────────────────────────────────────────────────────
const AppCard = ({
  icon: Icon, title, color, bgColor, borderColor, preview
}: {
  icon: React.ElementType; title: string; color: string; bgColor: string; borderColor: string; preview: React.ReactNode;
}) => (
  <div className={`bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 ${borderColor} shadow-sm hover:shadow-md transition-all`}>
    <div className="flex items-center mb-4">
      <div className={`p-2 rounded-xl ${bgColor} mr-3`}>
        <Icon className={`w-5 h-5 ${color}`} />
      </div>
      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
    </div>
    <div className="bg-gray-50 dark:bg-gray-900/60 rounded-xl p-4 border border-gray-100 dark:border-gray-700 font-mono text-sm text-gray-600 dark:text-gray-300">
      {preview}
    </div>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────
const AggregationsAndStatistics: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-900 dark:to-indigo-900/10 min-h-screen font-sans">
      
      {/* ── Hero Header ── */}
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 left-1/4 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-indigo-400/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-6 shadow-xl transform hover:rotate-3 transition-transform cursor-default">
          <Calculator className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          Aggregations & Statistics
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          Summarize massive datasets by reducing multiple values into valuable insights with NumPy.
        </p>
      </header>

      {/* ── Section 1: What & Why ── */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <BarChart2 className="w-6 h-6 mr-3 text-blue-500" /> What are Aggregations?
          </h2>
          <div className="p-4 bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-xl mb-6">
            <span className="font-bold text-blue-800 dark:text-blue-400 text-lg">
              Reducing Data to Insights
            </span>
            <p className="mt-2 text-sm text-blue-700 dark:text-blue-300">
              Aggregations are operations that summarize data by reducing multiple values into a single value, such as finding the sum, mean, or standard deviation.
            </p>
          </div>
          <div className="flex flex-col gap-3 p-4 bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-700 rounded-xl">
            <p className="text-sm font-bold text-gray-900 dark:text-white mb-2 uppercase tracking-wide">Common Uses:</p>
            {['Data analysis', 'Machine learning', 'Scientific computing'].map((use, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 font-medium">
                <ChevronRight className="w-4 h-4 text-blue-500" /> {use}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white p-8 rounded-3xl shadow-xl flex flex-col justify-center relative overflow-hidden border border-indigo-800/50">
          <div className="absolute top-0 right-0 -m-6 text-indigo-500/10">
            <Layers className="w-48 h-48" />
          </div>
          <h2 className="text-2xl font-bold flex items-center text-white mb-4 relative z-10">
            <Lightbulb className="w-6 h-6 mr-3 text-yellow-400" /> Why Aggregations Matter?
          </h2>
          <p className="text-indigo-200 text-sm mb-6 relative z-10">Imagine you have thousands of data points — you can't read them all individually.</p>
          
          <div className="space-y-4 relative z-10">
            <div className="bg-white/10 p-4 rounded-xl border border-white/10 flex items-start gap-4">
              <div className="p-2 bg-red-500/20 rounded-lg text-red-300 shrink-0">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">The Problem</h4>
                <p className="text-xs text-indigo-200 mt-1">Analyzing each value manually is impossible and inefficient.</p>
              </div>
            </div>
            
            <div className="bg-white/10 p-4 rounded-xl border border-white/10 flex items-start gap-4">
              <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-300 shrink-0">
                <CircleCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">The Solution</h4>
                <p className="text-xs text-indigo-200 mt-1">Extract insights quickly.</p>
                <div className="mt-2 text-xs font-mono text-emerald-200 space-y-1">
                  <div>Instead of checking all marks → find avg score</div>
                  <div>Instead of checking all temps → find max/min</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Core Functions ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white flex items-center mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
            <Table className="text-blue-500 w-8 h-8 mr-3" /> Core Aggregation Functions
          </h2>
          <div className="overflow-x-auto ring-1 ring-gray-200 dark:ring-gray-700 rounded-xl">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 dark:bg-gray-900/80 text-gray-900 dark:text-white uppercase font-bold text-xs">
                <tr>
                  <th className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 w-1/3">Function</th>
                  <th className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">Description</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 font-medium text-gray-700 dark:text-gray-300">
                {[
                  { fn: 'np.sum()', desc: 'Sum of all elements', color: 'text-orange-500' },
                  { fn: 'np.mean()', desc: 'Average of elements', color: 'text-blue-500' },
                  { fn: 'np.min()', desc: 'Minimum value', color: 'text-emerald-500' },
                  { fn: 'np.max()', desc: 'Maximum value', color: 'text-red-500' },
                  { fn: 'np.std()', desc: 'Standard deviation', color: 'text-purple-500' },
                  { fn: 'np.var()', desc: 'Variance', color: 'text-amber-500' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors border-b border-gray-100 dark:border-gray-700/50">
                    <td className={`px-6 py-4 font-mono font-bold ${row.color}`}>{row.fn}</td>
                    <td className="px-6 py-4">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Section 3: Axis-Based Aggregation (CRITICAL) ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-r from-rose-50 to-orange-50 dark:from-rose-900/20 dark:to-orange-900/20 rounded-3xl p-8 lg:p-12 shadow-sm border border-rose-200 dark:border-rose-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <AlertTriangle className="w-64 h-64 text-rose-500" />
          </div>
          <h2 className="text-3xl font-black text-rose-800 dark:text-rose-400 flex items-center mb-4 relative z-10">
            <AlertTriangle className="text-rose-500 w-8 h-8 mr-3" /> Axis-Based Aggregation (VERY IMPORTANT ⚠️)
          </h2>
          <p className="text-rose-900/80 dark:text-rose-200 mb-8 font-medium text-lg relative z-10 max-w-3xl">
            NumPy works with multi-dimensional arrays. The <code className="bg-rose-100 dark:bg-rose-900/50 px-2 py-1 rounded text-rose-700 dark:text-rose-300 font-mono">axis</code> parameter defines the direction of the aggregation.
          </p>

          <div className="grid md:grid-cols-2 gap-6 relative z-10">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border-2 border-rose-100 dark:border-rose-900 shadow-sm flex items-start gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/40 rounded-xl">
                <ArrowDownRight className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-mono text-gray-900 dark:text-white mb-2">axis=0</h3>
                <p className="text-gray-600 dark:text-gray-400 font-medium">Aggregates <span className="font-bold text-blue-600 dark:text-blue-400">Column-wise</span>.</p>
                <p className="text-sm text-gray-500 mt-2 italic">Operation moves down across rows.</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border-2 border-rose-100 dark:border-rose-900 shadow-sm flex items-start gap-4">
              <div className="p-3 bg-emerald-100 dark:bg-emerald-900/40 rounded-xl">
                <ArrowRight className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-mono text-gray-900 dark:text-white mb-2">axis=1</h3>
                <p className="text-gray-600 dark:text-gray-400 font-medium">Aggregates <span className="font-bold text-emerald-600 dark:text-emerald-400">Row-wise</span>.</p>
                <p className="text-sm text-gray-500 mt-2 italic">Operation moves across columns.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Step-by-Step Code Example ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white flex items-center mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
            <Terminal className="text-indigo-500 w-8 h-8 mr-3" /> Step-by-Step Code Example
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <CodeBlock title="NumPy Aggregations" language="python" code={`import numpy as np

# Create sample data (students marks)
data = np.array([
    [85, 90, 88],
    [78, 82, 80],
    [92, 95, 94]
])

print("Data:\\n", data)

# ── General Aggregations ──
print("\\nTotal Sum:", np.sum(data))
print("Mean:", np.mean(data))
print("Minimum:", np.min(data))
print("Maximum:", np.max(data))
print("Standard Deviation:", np.std(data))
print("Variance:", np.var(data))

# ── Axis-based Aggregation ──
print("\\nColumn-wise Sum:", np.sum(data, axis=0))
print("Row-wise Mean:", np.mean(data, axis=1))`} />
            </div>
            
            <div className="flex flex-col h-full space-y-4">
              <div className="bg-gray-900 rounded-2xl p-6 border border-gray-700 h-full flex flex-col font-mono text-sm">
                <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-2">
                  <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">Console Output</span>
                  <Activity className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-sky-300 flex-grow space-y-4 whitespace-pre">
                  <div>
                    <span className="text-gray-500">Data:</span>
                    <br />[[85  90  88]
                    <br /> [78  82  80]
                    <br /> [92  95  94]]
                  </div>
                  <div>
                    <span className="text-yellow-300">Total Sum:</span> 784
                    <br /><span className="text-yellow-300">Mean:</span> 87.11
                    <br /><span className="text-yellow-300">Minimum:</span> 78
                    <br /><span className="text-yellow-300">Maximum:</span> 95
                    <br /><span className="text-yellow-300">Standard Deviation:</span> ~5.5
                    <br /><span className="text-yellow-300">Variance:</span> ~30.2
                  </div>
                  <div>
                    <span className="text-purple-300">Column-wise Sum:</span> [255 267 262]
                    <span className="text-gray-500 text-xs ml-2"># Sum of each col</span>
                    <br /><span className="text-pink-300">Row-wise Mean:</span> [87.67 80.00 93.67]
                    <span className="text-gray-500 text-xs ml-2"># Mean of each row</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-xl p-5">
                <h4 className="font-bold text-indigo-900 dark:text-indigo-300 flex items-center mb-2">
                  <Lightbulb className="w-4 h-4 mr-2" /> Key Insights Extracted:
                </h4>
                <ul className="text-sm text-indigo-800 dark:text-indigo-200 font-medium space-y-1 ml-6 list-disc">
                  <li>Highest score = <span className="font-black text-indigo-600 dark:text-indigo-400">95</span></li>
                  <li>Average performance ≈ <span className="font-black text-indigo-600 dark:text-indigo-400">87</span></li>
                  <li>Third student performed best (mean: <span className="font-black text-indigo-600 dark:text-indigo-400">93.67</span>)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Rich Visualization & Advanced ── */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <Presentation className="w-6 h-6 mr-3 text-emerald-500" /> Viz: Understanding Data
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-medium">Patterns are easier to see visually.</p>
          <CodeBlock title="Matplotlib Visualization" language="python" code={`import matplotlib.pyplot as plt

students_avg = np.mean(data, axis=1)

plt.bar(["Student1", "Student2", "Student3"], students_avg)
plt.title("Average Marks per Student")
plt.xlabel("Students")
plt.ylabel("Average Marks")
plt.show()`} />
          <div className="mt-4 p-4 bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30 rounded-xl flex items-start gap-3">
            <CircleCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
            <p className="text-sm text-emerald-800 dark:text-emerald-300 font-medium">
               Visualizing aggregations like <span className="font-mono">row-wise mean</span> helps users see patterns and make decisions instantly.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-violet-900 to-indigo-950 text-white p-8 rounded-3xl shadow-sm border border-violet-800/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Zap className="w-48 h-48" />
          </div>
          <h2 className="text-2xl font-bold flex items-center text-white mb-6 relative z-10">
            <BrainCircuit className="w-6 h-6 mr-3 text-violet-400" /> Advanced Aggregations (Pro)
          </h2>
          
          <div className="space-y-4 relative z-10">
            <div className="bg-black/30 p-4 rounded-xl border border-white/10 font-mono text-sm text-violet-200 space-y-2">
              <div className="text-gray-400"># Cumulative sum</div>
              <div className="text-white bg-violet-900/50 p-2 rounded">np.cumsum(data)</div>
            </div>
            
            <div className="bg-black/30 p-4 rounded-xl border border-white/10 font-mono text-sm text-violet-200 space-y-2">
              <div className="text-gray-400"># Percentile (Median = 50th)</div>
              <div className="text-white bg-violet-900/50 p-2 rounded">np.percentile(data, 50)</div>
            </div>
            
            <div className="bg-black/30 p-4 rounded-xl border border-white/10 font-mono text-sm text-violet-200 space-y-2">
              <div className="text-gray-400"># Median directly</div>
              <div className="text-white bg-violet-900/50 p-2 rounded">np.median(data)</div>
            </div>
            
            <div className="bg-black/30 p-4 rounded-xl border border-white/10 font-mono text-sm text-violet-200 space-y-2">
              <div className="text-gray-400"># Handle NaN logically</div>
              <div className="text-white bg-violet-900/50 p-2 rounded">np.nanmean(data)</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 6: Pro Tips & Suggestions ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-black text-center text-gray-900 dark:text-white mb-4">
          💡 Pro Suggestions & Tricks
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-10 font-medium">From 15+ years of data analysis experience.</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-800 p-6 rounded-2xl">
            <h3 className="font-bold text-yellow-800 dark:text-yellow-400 mb-3 flex items-center">
              <Settings className="w-5 h-5 mr-2" /> Start Analysis With...
            </h3>
            <div className="grid grid-cols-2 gap-2 font-mono text-sm text-yellow-700 dark:text-yellow-300 font-bold mb-3">
              <span className="bg-yellow-100 dark:bg-yellow-900/30 px-2 py-1 rounded text-center">mean</span>
              <span className="bg-yellow-100 dark:bg-yellow-900/30 px-2 py-1 rounded text-center">min</span>
              <span className="bg-yellow-100 dark:bg-yellow-900/30 px-2 py-1 rounded text-center">max</span>
              <span className="bg-yellow-100 dark:bg-yellow-900/30 px-2 py-1 rounded text-center">std</span>
            </div>
            <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200">These 4 metrics alone provide 80% understanding of your data instantly.</p>
          </div>
          
          <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800 p-6 rounded-2xl">
            <h3 className="font-bold text-emerald-800 dark:text-emerald-400 mb-3 flex items-center">
              <Activity className="w-5 h-5 mr-2" /> Watch Out for Mean!
            </h3>
            <p className="text-sm font-medium text-emerald-800 dark:text-emerald-200 mb-3">
              Don't rely <em>only</em> on the mean. Mean can be highly misleading because of outliers.
            </p>
            <p className="text-sm text-emerald-700 dark:text-emerald-300 italic">Always check median / std dev to verify data distribution.</p>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 p-6 rounded-2xl">
            <h3 className="font-bold text-blue-800 dark:text-blue-400 mb-3 flex items-center">
              <Layers className="w-5 h-5 mr-2" /> Use Axis Wisely
            </h3>
            <p className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-3">
              Beginners often confuse axis operations. Always practice with small 2x2 or 3x3 arrays first before applying to large datasets.
            </p>
          </div>
        </div>

        {/* Tricks */}
        <div className="bg-gray-900 dark:bg-black rounded-3xl p-8 border border-gray-800">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center">
            <Zap className="w-5 h-5 mr-3 text-yellow-400" /> Rapid Fire Tricks
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-5 rounded-xl border border-gray-700">
              <span className="text-yellow-400 font-black text-xs uppercase tracking-widest mb-2 block">Trick 1</span>
              <code className="text-sky-300 font-mono text-sm">np.mean(data, axis=0)</code>
              <p className="text-gray-400 text-sm mt-3">Gives subject-wise / column-wise performance instantly.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-xl border border-gray-700">
              <span className="text-yellow-400 font-black text-xs uppercase tracking-widest mb-2 block">Trick 2</span>
              <code className="text-emerald-300 font-mono text-sm break-all">np.mean(..., keepdims=True)</code>
              <p className="text-gray-400 text-sm mt-3">Maintains original dimensions, crucial for broadcasting later.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-xl border border-gray-700">
              <span className="text-yellow-400 font-black text-xs uppercase tracking-widest mb-2 block">Trick 3</span>
              <code className="text-pink-300 font-mono text-sm">np.max(d) - np.min(d)</code>
              <p className="text-gray-400 text-sm mt-3">Combine aggregations to find the exact Range of data easily.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 7: Common Mistakes & Real-World Use Cases ── */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-red-50 dark:bg-red-900/10 p-8 rounded-3xl shadow-sm border border-red-200 dark:border-red-900/50">
          <h2 className="text-2xl font-bold flex items-center text-red-900 dark:text-red-400 mb-6">
            <AlertCircle className="w-6 h-6 mr-3 text-red-500" /> Common Mistakes ❌
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="bg-red-200 dark:bg-red-800/50 text-red-700 dark:text-red-300 p-1 rounded font-bold text-xs mt-0.5">X</span>
              <div>
                <strong className="text-red-900 dark:text-red-200 block">Forgetting axis</strong>
                <span className="text-red-700 dark:text-red-400 text-sm">Leads to global aggregation instead of row/column-wise, resulting in wrong dimensions.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-red-200 dark:bg-red-800/50 text-red-700 dark:text-red-300 p-1 rounded font-bold text-xs mt-0.5">X</span>
              <div>
                <strong className="text-red-900 dark:text-red-200 block">Using Python Loops</strong>
                <span className="text-red-700 dark:text-red-400 text-sm">Using <code className="font-mono text-xs">for</code> loops instead of NumPy's built in functions destroys the speed benefits of C-optimized operations.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-red-200 dark:bg-red-800/50 text-red-700 dark:text-red-300 p-1 rounded font-bold text-xs mt-0.5">X</span>
              <div>
                <strong className="text-red-900 dark:text-red-200 block">Ignoring NaN Values</strong>
                <span className="text-red-700 dark:text-red-400 text-sm">Standard functions fail on NaN. Use <code className="font-mono text-xs">np.nanmean()</code> and similar nan-safe functions instead.</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <Globe className="w-6 h-6 mr-3 text-sky-500" /> Real-World Use Cases
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: BookOpen, title: 'Student Analysis', desc: 'Avg marks, grading curves', bg: 'bg-blue-100 text-blue-600' },
              { icon: TrendingUp, title: 'Stock Market', desc: 'Price trends, volatility (std)', bg: 'bg-emerald-100 text-emerald-600' },
              { icon: BrainCircuit, title: 'Machine Learning', desc: 'Feature scaling (Mean/Std)', bg: 'bg-purple-100 text-purple-600' },
              { icon: HeartPulse, title: 'Medical Data', desc: 'Vitals ranges, avg metrics', bg: 'bg-rose-100 text-rose-600' }
            ].map((uc, i) => (
              <div key={i} className="p-4 border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 rounded-2xl flex flex-col items-start hover:shadow-md transition-shadow">
                <div className={`p-2 rounded-xl ${uc.bg} mb-3`}>
                  <uc.icon className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">{uc.title}</h4>
                <p className="text-xs text-gray-500 font-medium">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default AggregationsAndStatistics;
