import React, { useState, useEffect } from 'react';
import { usePyodide } from '../hooks/usePyodide';
import { Loader2, Play, AlertCircle } from 'lucide-react';

interface PythonRunnerProps {
  code: string;
  testCode?: string;
  onOutput: (output: string[]) => void;
  onTestResults?: (results: { id: string; passed: boolean; error?: string }[]) => void;
  onError: (error: string | null) => void;
  isRunning: boolean;
  setIsRunning: (val: boolean) => void;
}

const PythonRunner: React.FC<PythonRunnerProps> = ({ code, testCode, onOutput, onTestResults, onError, isRunning, setIsRunning }) => {
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

    try {
      // 1. Run user code
      const result = await runPython(code);
      
      if (result.error) {
        onError(result.error);
        setIsRunning(false);
        return;
      }

      onOutput([result.output]);

      // 2. If testCode exists, run validation
      if (testCode && onTestResults) {
        // We wrap test execution to capture specific failures per test
        // The testCode should be formatted as a JSON string when printed from Python
        const wrappedTestCode = `
import json
results = []
try:
    ${testCode.replace(/\n/g, '\n    ')}
except Exception as e:
    # If the setup fails, it's a global error
    pass
`;
        const testResult = await runPython(wrappedTestCode);
        
        // Alternative: Run individual test strings and capture results
        // For simplicity now, we'll assume the parent component might pass specific code snippets
      }
    } catch (err: any) {
        onError(err.message || 'An unexpected error occurred');
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
