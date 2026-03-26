import { useState, useEffect, useCallback, useRef } from 'react';

export type PyodideStatus = 'idle' | 'loading' | 'ready' | 'error';

export const usePyodide = () => {
  const [status, setStatus] = useState<PyodideStatus>('idle');
  const [error, setError] = useState<string | null>(null);
  
  const workerRef = useRef<Worker | null>(null);
  const resolversRef = useRef<{ [key: string]: { resolve: (val: any) => void; reject: (err: any) => void } }>({});
  
  const initPyodide = useCallback(async () => {
    if (workerRef.current && status === 'ready') return;
    
    setStatus('loading');
    setError(null);

    return new Promise<void>((resolve, reject) => {
      // Create new worker instance
      const worker = new Worker(new URL('./pyodideWorker.ts', import.meta.url), { type: 'module' });
      workerRef.current = worker;

      worker.onmessage = (e) => {
        const { type, error: msgError, id, output } = e.data;
        if (type === 'INIT_DONE') {
          setStatus('ready');
          resolve();
        } else if (type === 'INIT_ERROR') {
          setError(msgError || 'Failed to initialize Python Worker');
          setStatus('error');
          reject(new Error(msgError));
        } else if (type === 'RUN_DONE') {
          if (resolversRef.current[id]) {
            resolversRef.current[id].resolve({ output, error: msgError });
            delete resolversRef.current[id];
          }
        }
      };

      worker.onerror = (e) => {
        setError('Worker encountered a fatal error');
        setStatus('error');
        reject(e);
      };

      // Start initialization
      worker.postMessage({ type: 'INIT' });
    });
  }, [status]);

  const runPython = useCallback(async (code: string) => {
    if (status !== 'ready' || !workerRef.current) {
      await initPyodide();
    }

    return new Promise<{ output: string; error: string | null }>((resolve) => {
      const id = Math.random().toString(36).substr(2, 9);
      resolversRef.current[id] = { resolve, reject: () => {} };

      workerRef.current?.postMessage({ type: 'RUN', code, id });

      // Timeout execution: 10 seconds limit to catch infinite loops
      setTimeout(() => {
        if (resolversRef.current[id]) {
          resolve({ output: '', error: 'Execution Timed Out (Possible Infinite Loop)' });
          delete resolversRef.current[id];
          
          // Terminate and recreate the worker to restore state
          workerRef.current?.terminate();
          setStatus('idle');
          workerRef.current = null;
        }
      }, 10000);
    });
  }, [status, initPyodide]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (workerRef.current) {
        workerRef.current.terminate();
      }
    };
  }, []);

  return { status, error, runPython, initPyodide };
};
