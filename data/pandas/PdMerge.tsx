import React from 'react';
import MergeSimulator from '../../components/visualizers/MergeSimulator';

export default function PdMerge() {
  return (
    <div className="space-y-12">
      <section className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
          The <code className="text-brand-500 font-bold italic">pd.merge()</code> function is the most powerful tool in Pandas for combining datasets. 
          It allows you to join DataFrames based on common "keys" or IDs, similar to SQL joins.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
            <h4 className="text-white font-bold mb-2">Inner Join</h4>
            <p className="text-sm text-slate-500 m-0">Only keys that exist in <span className="text-white">both</span> DataFrames are kept.</p>
          </div>
          <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
            <h4 className="text-white font-bold mb-2">Outer Join</h4>
            <p className="text-sm text-slate-500 m-0">All keys from <span className="text-white">both</span> DataFrames are kept. Missing values become NaN.</p>
          </div>
        </div>
      </section>

      <div className="my-16">
        <MergeSimulator />
      </div>

      <section className="prose prose-slate dark:prose-invert max-w-none">
        <h3 className="text-2xl font-bold text-white mb-6">Common Parameters</h3>
        <ul className="space-y-4">
          <li>
            <strong className="text-indigo-400">left/right</strong>: The DataFrames you want to merge.
          </li>
          <li>
            <strong className="text-indigo-400">on</strong>: The column name(s) to join on. Must be found in both DataFrames.
          </li>
          <li>
            <strong className="text-indigo-400">how</strong>: Type of merge to be performed ('left', 'right', 'outer', 'inner').
          </li>
        </ul>

        <h4 className="text-xl font-bold text-white mt-10 mb-4">Code Example</h4>
        <div className="bg-slate-900 rounded-xl p-6 font-mono text-sm border border-slate-800">
          <div className="text-slate-500 mb-2"># Merging two DataFrames on 'id'</div>
          <div className="text-indigo-400">import pandas as pd</div>
          <div className="text-indigo-400">result = pd.merge(df1, df2, on='id', how='inner')</div>
          <div className="text-emerald-400 mt-2">print(result.head())</div>
        </div>
      </section>
    </div>
  );
}

