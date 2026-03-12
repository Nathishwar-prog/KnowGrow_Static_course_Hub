import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Shape = [number, number];

const BroadcastingVisualizer: React.FC = () => {
  const [shapeA, setShapeA] = useState<Shape>([3, 1]);
  const [shapeB, setShapeB] = useState<Shape>([1, 3]);
  const [step, setStep] = useState<0 | 1 | 2>(0); // 0: Start, 1: Broadcast, 2: Result

  const resultShape = useMemo(() => {
    return [
      Math.max(shapeA[0], shapeB[0]),
      Math.max(shapeA[1], shapeB[1])
    ] as Shape;
  }, [shapeA, shapeB]);

  const isValid = useMemo(() => {
    const dim1Match = shapeA[0] === shapeB[0] || shapeA[0] === 1 || shapeB[0] === 1;
    const dim2Match = shapeA[1] === shapeB[1] || shapeA[1] === 1 || shapeB[1] === 1;
    return dim1Match && dim2Match;
  }, [shapeA, shapeB]);

  const renderGrid = (shape: Shape, colorClass: string, isBroadcasting: boolean = false, opacity: number = 1) => {
    const rows = isBroadcasting ? resultShape[0] : shape[0];
    const cols = isBroadcasting ? resultShape[1] : shape[1];

    return (
      <div 
        className="grid gap-1.5 p-3 rounded-xl bg-slate-900/50 border border-slate-800"
        style={{ 
          gridTemplateColumns: `repeat(${cols}, minmax(40px, 1fr))`,
          gridTemplateRows: `repeat(${rows}, 40px)`
        }}
      >
        {Array.from({ length: rows * cols }).map((_, i) => {
          const r = Math.floor(i / cols);
          const c = i % cols;
          
          // Check if this cell is purely "broadcasted" (ghost)
          const isGhost = isBroadcasting && (r >= shape[0] || c >= shape[1]);
          
          return (
            <motion.div
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: isGhost ? 0.3 : 1,
                borderStyle: isGhost ? 'dashed' : 'solid'
              }}
              className={`w-full h-full rounded-md flex items-center justify-center text-xs font-bold border-2 ${colorClass} ${isGhost ? 'bg-transparent' : ''}`}
            >
              {step === 2 ? (r + c) : `${r},${c}`}
            </motion.div>
          );
        })}
      </div>
    );
  };

  const getStepTitle = () => {
    if (step === 0) return "Initial Arrays";
    if (step === 1) return "Stretching (Broadcasting)";
    return "Resulting Array";
  };

  return (
    <div className="w-full bg-slate-950/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h3 className="text-3xl font-black text-white mb-2 tracking-tight">Broadcasting Visualizer</h3>
          <p className="text-slate-400 text-sm font-medium uppercase tracking-widest">{getStepTitle()}</p>
        </div>
        
        <div className="flex gap-2 bg-slate-900 p-1.5 rounded-2xl border border-slate-800">
          <button 
            onClick={() => setStep(0)}
            className={`px-6 py-2.5 rounded-xl font-bold transition-all duration-300 ${step === 0 ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/20' : 'text-slate-500 hover:text-white'}`}
          >
            Reset
          </button>
          <button 
            onClick={() => setStep(1)}
            disabled={!isValid || step > 1}
            className={`px-6 py-2.5 rounded-xl font-bold transition-all duration-300 ${step === 1 ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-500 hover:text-white disabled:opacity-20 flex items-center'}`}
          >
            Broadcast
            {step === 0 && isValid && <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity }} className="ml-2">→</motion.div>}
          </button>
          <button 
            onClick={() => setStep(2)}
            disabled={step !== 1}
            className={`px-6 py-2.5 rounded-xl font-bold transition-all duration-300 ${step === 2 ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/20' : 'text-slate-500 hover:text-white disabled:opacity-20'}`}
          >
            Add
          </button>
        </div>
      </div>

      {!isValid && (
        <div className="mb-8 p-4 bg-rose-500/10 border border-rose-500/30 rounded-2xl text-rose-400 text-sm font-bold flex items-center">
          <i className="fa-solid fa-circle-exclamation mr-3 text-lg"></i>
          DANGER: These shapes are not broadcast-compatible! One dimension must be 1 Or shapes must match.
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        {/* Array A */}
        <div className="space-y-6">
          <div className="flex justify-between items-center bg-slate-900/40 p-3 rounded-xl border border-slate-800/50">
            <span className="text-indigo-400 font-black text-sm uppercase">Array A</span>
            <div className="flex items-center space-x-3">
              <input 
                type="number" min="1" max="5" 
                value={shapeA[0]} 
                onChange={e => setShapeA([Math.min(5, Math.max(1, +e.target.value)), shapeA[1]])}
                className="w-12 bg-slate-800 border-none rounded-lg text-center font-bold text-white focus:ring-2 focus:ring-indigo-500"
              />
              <span className="text-slate-600 text-xs">×</span>
              <input 
                type="number" min="1" max="5" 
                value={shapeA[1]} 
                onChange={e => setShapeA([shapeA[0], Math.min(5, Math.max(1, +e.target.value))])}
                className="w-12 bg-slate-800 border-none rounded-lg text-center font-bold text-white focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
          <div className="flex justify-center h-64 items-center">
            {renderGrid(shapeA, 'border-indigo-500/50 bg-indigo-500/10 text-indigo-400', step >= 1)}
          </div>
        </div>

        {/* Operator */}
        <div className="flex flex-col items-center justify-center py-6">
          <motion.div 
            animate={step === 1 ? { rotate: 360 } : {}}
            className="w-16 h-16 rounded-3xl bg-slate-900 border border-slate-800 flex items-center justify-center text-4xl font-black text-slate-500 shadow-xl"
          >
            +
          </motion.div>
          <div className="mt-4 text-xs font-bold text-slate-600 uppercase tracking-widest">Element-wise</div>
        </div>

        {/* Array B */}
        <div className="space-y-6">
          <div className="flex justify-between items-center bg-slate-900/40 p-3 rounded-xl border border-slate-800/50">
            <span className="text-amber-400 font-black text-sm uppercase">Array B</span>
            <div className="flex items-center space-x-3">
              <input 
                type="number" min="1" max="5" 
                value={shapeB[0]} 
                onChange={e => setShapeB([Math.min(5, Math.max(1, +e.target.value)), shapeB[1]])}
                className="w-12 bg-slate-800 border-none rounded-lg text-center font-bold text-white focus:ring-2 focus:ring-amber-500"
              />
              <span className="text-slate-600 text-xs">×</span>
              <input 
                type="number" min="1" max="5" 
                value={shapeB[1]} 
                onChange={e => setShapeB([shapeB[0], Math.min(5, Math.max(1, +e.target.value))])}
                className="w-12 bg-slate-800 border-none rounded-lg text-center font-bold text-white focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>
          <div className="flex justify-center h-64 items-center">
            {renderGrid(shapeB, 'border-amber-500/50 bg-amber-500/10 text-amber-400', step >= 1)}
          </div>
        </div>
      </div>

      {step === 2 && (
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mt-12 p-8 bg-emerald-500/5 border border-emerald-500/20 rounded-3xl"
        >
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-emerald-400 font-black uppercase text-sm flex items-center">
              <i className="fa-solid fa-equals mr-2"></i> Resulting Matrix
            </h4>
            <span className="text-xs font-bold text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              {resultShape[0]} × {resultShape[1]}
            </span>
          </div>
          <div className="flex justify-center">
            {renderGrid(resultShape, 'border-emerald-500/50 bg-emerald-500/10 text-emerald-400')}
          </div>
        </motion.div>
      )}

      <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row gap-6 text-sm text-slate-500 font-medium italic">
        <p className="flex-1">
          <strong className="text-indigo-400 not-italic uppercase text-xs block mb-1">Concept</strong>
          Numpy compares array shapes element-wise, starting from the trailing dimensions. 
          Dimensions are compatible when they are equal, or one of them is 1.
        </p>
        <p className="flex-1">
          <strong className="text-amber-400 not-italic uppercase text-xs block mb-1">Visual Rule</strong>
          Wait, why did Array B stretch? Because its column dimension was 1, so it repeated 3 times to match Array A.
        </p>
      </div>
    </div>
  );
};

export default BroadcastingVisualizer;
