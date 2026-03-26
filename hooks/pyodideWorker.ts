/// <reference lib="webworker" />

declare var loadPyodide: any;
declare var self: DedicatedWorkerGlobalScope & { pyodide: any };

self.addEventListener('message', async (event) => {
  const { type, code, id } = event.data;

  if (type === 'INIT') {
    try {
      if (!self.pyodide) {
        importScripts('https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js');
        self.pyodide = await loadPyodide({
          indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/',
        });
      }
      self.postMessage({ type: 'INIT_DONE' });
    } catch (error: any) {
      self.postMessage({ type: 'INIT_ERROR', error: error.message });
    }
  } else if (type === 'RUN') {
    try {
      let output: string[] = [];
      self.pyodide.setStdout({
        batched: (text: string) => {
           output.push(text);
        }
      });

      const packages = [];
      if (code.includes('import numpy') || code.includes('from numpy')) packages.push('numpy');
      if (code.includes('import pandas') || code.includes('from pandas')) packages.push('pandas');
      if (code.includes('import matplotlib') || code.includes('from matplotlib')) packages.push('matplotlib');
      if (packages.length > 0) {
        await self.pyodide.loadPackage(packages);
      }

      const result = await self.pyodide.runPythonAsync(code);
      if (output.length === 0 && result !== undefined) {
         output.push(String(result));
      }

      self.postMessage({ type: 'RUN_DONE', id, output: output.join('\n'), error: null });
    } catch (error: any) {
      self.postMessage({ type: 'RUN_DONE', id, output: '', error: error.message });
    }
  }
});
