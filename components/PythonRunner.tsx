import React, { useState, useEffect } from 'react';
import { usePyodide } from '../hooks/usePyodide';
import { Loader2, Play, AlertCircle } from 'lucide-react';

interface PythonRunnerProps {
  code: string;
  onOutput: (output: string[]) => void;
  onError: (error: string | null) => void;
  isRunning: boolean;
  setIsRunning: (val: boolean) => void;
}

const PythonRunner: React.FC<PythonRunnerProps> = ({ code, onOutput, onError, isRunning, setIsRunning }) => {
  const { status, error: initError, runPython, initPyodide } = usePyodide();

  useEffect(() => {
    if (isRunning) {
      handleRun();
    }
  }, [isRunning]);

  const handleRun = async () => {
    setIsRunning(true);
    onError(null);

    if (status === 'idle') {
      await initPyodide();
    }

    const result = await runPython(code);
    
    if (result.error) {
      onError(result.error);
    } else {
      onOutput([result.output]);
    }
    
    setIsRunning(false);
  };

  if (status === 'loading') {
    return (
      <div className="flex items-center space-x-2 text-indigo-500 py-2">
        <Loader2 className="h-4 w-4 animate-spin" />
        <span className="text-sm font-medium">Initializing Python Engine...</span>
      </div>
    );
  }

  if (status === 'error' || initError) {
    return (
      <div className="flex items-center space-x-2 text-red-500 py-2 bg-red-50 dark:bg-red-900/20 px-3 rounded-md">
        <AlertCircle className="h-4 w-4" />
        <span className="text-sm">{initError || 'Python initialization failed'}</span>
      </div>
    );
  }

  return null; // The actual button is rendered in the parent for now
};

export default PythonRunner;
