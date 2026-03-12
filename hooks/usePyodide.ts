import { useState, useEffect, useCallback } from 'react';

declare global {
  interface Window {
    loadPyodide: any;
    pyodide: any;
  }
}

export type PyodideStatus = 'idle' | 'loading' | 'ready' | 'error';

export const usePyodide = () => {
  const [status, setStatus] = useState<PyodideStatus>('idle');
  const [error, setError] = useState<string | null>(null);

  const initPyodide = useCallback(async () => {
    if (window.pyodide) {
      setStatus('ready');
      return;
    }

    if (status === 'loading') return;

    setStatus('loading');

    try {
      // Load the script if not already present
      if (!window.loadPyodide) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js';
        script.async = true;
        document.head.appendChild(script);

        await new Promise((resolve, reject) => {
          script.onload = resolve;
          script.onerror = reject;
        });
      }

      window.pyodide = await window.loadPyodide({
        indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/',
        stdout: (text: string) => {
           console.log('Python Output:', text);
           // We will handle output capture in the run function
        },
        stderr: (text: string) => {
           console.error('Python Error:', text);
        }
      });

      setStatus('ready');
    } catch (err: any) {
      console.error('Pyodide initialization failed:', err);
      setError(err.message || 'Failed to load Python engine');
      setStatus('error');
    }
  }, [status]);

  const runPython = useCallback(async (code: string) => {
    if (!window.pyodide || status !== 'ready') {
      await initPyodide();
    }

    if (!window.pyodide) return { output: '', error: 'Python engine not ready' };

    const output: string[] = [];
    
    // Override stdout to capture output for this specific run
    window.pyodide.setStdout({
      batched: (text: string) => {
        output.push(text);
      }
    });

    try {
      // Automatically load packages if detected in code
      const packages = [];
      if (code.includes('import numpy') || code.includes('from numpy')) packages.push('numpy');
      if (code.includes('import pandas') || code.includes('from pandas')) packages.push('pandas');
      if (code.includes('import matplotlib') || code.includes('from matplotlib')) packages.push('matplotlib');

      if (packages.length > 0) {
        await window.pyodide.loadPackage(packages);
      }

      const result = await window.pyodide.runPythonAsync(code);
      
      // If the last line returns something and we didn't print anything, show the result
      if (output.length === 0 && result !== undefined) {
         output.push(String(result));
      }

      return { output: output.join('\n'), error: null };
    } catch (err: any) {
      return { output: output.join('\n'), error: err.message };
    }
  }, [status, initPyodide]);

  return { status, error, runPython, initPyodide };
};
