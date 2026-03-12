import React from 'react';
import BroadcastingVisualizer from '../../components/visualizers/BroadcastingVisualizer';

export default function NpBroadcasting() {
  return (
    <div className="space-y-12">
      <section className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
          The term <strong className="text-brand-500">Broadcasting</strong> describes how NumPy treats arrays with different shapes during arithmetic operations. 
          Subject to certain constraints, the smaller array is "broadcast" across the larger array so that they have compatible shapes.
        </p>
        
        <div className="bg-indigo-500/5 border-l-4 border-indigo-500 p-6 my-8 rounded-r-xl">
          <h4 className="text-indigo-600 dark:text-indigo-400 font-bold mb-2">The Golden Rule</h4>
          <p className="text-sm m-0">
            Two dimensions are compatible when:
            <ul className="mt-2 list-disc list-inside">
              <li>They are equal, OR</li>
              <li>One of them is 1</li>
            </ul>
          </p>
        </div>
      </section>

      <div className="my-16">
        <BroadcastingVisualizer />
      </div>

      <section className="prose prose-slate dark:prose-invert max-w-none">
        <h3 className="text-2xl font-bold text-white mb-6">Why Broadcasting?</h3>
        <p>
          Broadcasting provides a means of vectorizing array operations so that looping occurs in C instead of Python. 
          It does this without making needless copies of data and usually leads to efficient algorithm implementations.
        </p>

        <h4 className="text-xl font-bold text-white mt-10 mb-4">Example: Scalar Addition</h4>
        <div className="bg-slate-900 rounded-xl p-6 font-mono text-sm border border-slate-800">
          <div className="text-slate-500 mb-2"># Adding a scalar to an array</div>
          <div className="text-indigo-400">a = np.array([1.0, 2.0, 3.0])</div>
          <div className="text-indigo-400">b = 2.0</div>
          <div className="text-indigo-400">a * b</div>
          <div className="text-emerald-400 mt-2"># Result: array([2.0, 4.0, 6.0])</div>
        </div>
        <p className="mt-4 text-sm text-slate-400 italic">
          In this case, the scalar '2.0' is broadcast to match the shape of 'a' automatically.
        </p>
      </section>
    </div>
  );
}

