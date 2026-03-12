import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type JoinType = 'inner' | 'left' | 'right' | 'outer';

interface Row {
  id: number;
  name?: string;
  score?: number;
  city?: string;
}

const leftData: Row[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'David' },
];

const rightData: Row[] = [
  { id: 2, score: 85, city: 'NY' },
  { id: 3, score: 92, city: 'LA' },
  { id: 5, score: 78, city: 'CHI' },
  { id: 6, score: 88, city: 'MIA' },
];

const MergeSimulator: React.FC = () => {
  const [how, setHow] = useState<JoinType>('inner');

  const joinedData = useMemo(() => {
    const allIds = Array.from(new Set([...leftData.map(r => r.id), ...rightData.map(r => r.id)])).sort((a,b) => a - b);
    
    return allIds.map(id => {
      const left = leftData.find(r => r.id === id);
      const right = rightData.find(r => r.id === id);
      
      const inJoined = 
        (how === 'inner' && left && right) ||
        (how === 'left' && left) ||
        (how === 'right' && right) ||
        (how === 'outer');

      if (!inJoined) return null;

      return {
        id,
        name: left?.name || 'NaN',
        score: right?.score !== undefined ? right.score : 'NaN',
        city: right?.city || 'NaN',
        isMatch: !!(left && right)
      };
    }).filter(Boolean);
  }, [how]);

  const renderTable = (data: any[], title: string, colorClass: string) => (
    <div className="bg-slate-900/50 rounded-2xl border border-slate-800 p-4 shadow-xl">
      <div className={`text-xs font-black uppercase tracking-tighter mb-4 ${colorClass}`}>{title}</div>
      <table className="w-full text-xs">
        <thead className="text-slate-500 border-b border-slate-800">
          <tr>
            <th className="pb-2 text-left">ID</th>
            {Object.keys(data[0] || {}).map(key => key !== 'id' && key !== 'isMatch' && (
              <th key={key} className="pb-2 text-left capitalize">{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <motion.tr 
              key={row.id} 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="border-b border-slate-800/50 last:border-0"
            >
              <td className="py-2.5 font-bold text-slate-300">{row.id}</td>
              {Object.entries(row).map(([key, val]) => key !== 'id' && key !== 'isMatch' && (
                <td key={key} className={`py-2.5 ${val === 'NaN' ? 'text-slate-600 italic' : 'text-slate-400'}`}>
                  {val}
                </td>
              ))}
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="w-full bg-slate-950 border border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h3 className="text-3xl font-black text-white mb-2 tracking-tight">Merge Simulator</h3>
          <p className="text-slate-400 text-sm font-medium uppercase tracking-widest">Visualize Pandas Joins</p>
        </div>
        
        <div className="flex flex-wrap gap-2 bg-slate-900 p-1.5 rounded-2xl border border-slate-800">
          {(['inner', 'left', 'right', 'outer'] as JoinType[]).map(type => (
            <button 
              key={type}
              onClick={() => setHow(type)}
              className={`px-4 py-2 rounded-xl font-bold capitalize transition-all duration-300 ${how === type ? 'bg-brand-600 text-white shadow-lg' : 'text-slate-500 hover:text-white'}`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          {renderTable(leftData, 'df_left', 'text-indigo-400')}
          {renderTable(rightData, 'df_right', 'text-amber-400')}
        </div>

        <div className="relative">
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center space-y-2 text-slate-700">
            <i className="fa-solid fa-arrow-right text-xl"></i>
            <span className="text-[10px] font-black uppercase rotate-90 origin-left mt-4 whitespace-nowrap">JOINING ON 'ID'</span>
          </div>
          
          <div className="bg-slate-900/30 rounded-3xl border-2 border-dashed border-slate-800 p-6 min-h-[400px]">
            <div className="flex justify-between items-center mb-6">
              <span className="text-emerald-400 font-bold uppercase text-xs">pd.merge(df_left, df_right, how='{how}')</span>
              <span className="text-[10px] font-bold text-slate-500 bg-slate-800 px-2 py-0.5 rounded uppercase">
                {joinedData.length} Rows Resulting
              </span>
            </div>
            
            <table className="w-full text-xs">
              <thead className="text-slate-500 border-b border-slate-800">
                <tr>
                  <th className="pb-3 text-left">ID</th>
                  <th className="pb-3 text-left">Name</th>
                  <th className="pb-3 text-left">Score</th>
                  <th className="pb-3 text-left">City</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50">
                <AnimatePresence mode="popLayout">
                  {joinedData.map((row: any) => (
                    <motion.tr 
                      key={row.id}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className={`group transition-colors ${row.isMatch ? 'bg-emerald-500/5' : ''}`}
                    >
                      <td className="py-3 font-bold text-emerald-400">{row.id}</td>
                      <td className="py-3 text-slate-300">{row.name}</td>
                      <td className="py-3 text-slate-300">{row.score}</td>
                      <td className="py-3 text-slate-300">{row.city}</td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
            
            {joinedData.length === 0 && (
              <div className="flex flex-col items-center justify-center py-20 text-slate-600">
                <i className="fa-solid fa-filter-circle-xmark text-4xl mb-4"></i>
                <p className="font-bold">No matches found!</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-12 p-6 bg-slate-900/40 rounded-2xl border border-slate-800/50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
          <div>
            <h4 className="text-brand-400 font-black uppercase text-xs mb-3">Mechanism</h4>
            <p className="text-slate-400 italic">
              Python loops through the left table and looks for matching 'id' values in the right table. 
              The <span className="text-white not-italic font-bold">'{how}'</span> parameter determines which keys survive the merge.
            </p>
          </div>
          <div>
            <h4 className="text-brand-400 font-black uppercase text-xs mb-3">Key Insight</h4>
            <p className="text-slate-500">
              Notice how <span className="text-slate-300">NaN</span> (Not a Number) values are inserted when a match isn't found, 
              preserving the structure of the data based on your join type.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MergeSimulator;
