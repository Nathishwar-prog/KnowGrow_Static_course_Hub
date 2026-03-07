import React, { useState } from 'react';
import {
  Code, BookOpen, Download, RefreshCw, Box, Copy, Package, 
  Terminal, CheckCircle2, AlertTriangle, Lightbulb, CheckSquare, 
  Check, ArrowDown, Search, ArrowUpCircle, XCircle, FileText, Server, HardDrive
} from 'lucide-react';

const CodeSnippetBlock = ({ codeSnippet, title }: { codeSnippet: string, title?: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="mb-6 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm w-full">
      {title && (
        <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{title}</span>
        </div>
      )}
      <div className="relative group bg-slate-900 border-t border-slate-800">
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-md bg-slate-800 text-slate-400 hover:bg-blue-600 hover:text-white border border-slate-700 z-10"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
        <pre className="p-4 overflow-x-auto text-sm font-mono text-blue-300 leading-relaxed">
          <code>{codeSnippet}</code>
        </pre>
      </div>
    </div>
  );
};

const PythonPIP: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);

  const runDemo = (action: string) => {
    setConsoleOutput([]); // Clear before showing new
    
    switch (action) {
      case 'version':
        setConsoleOutput([
          "$ pip --version",
          "pip 23.2.1 from /usr/lib/python3.11/site-packages/pip (python 3.11)"
        ]);
        break;
      case 'install':
        setConsoleOutput([
          "$ pip install requests",
          "Collecting requests",
          "  Downloading requests-2.31.0-py3-none-any.whl (62 kB)",
          "     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 62.6/62.6 kB 2.3 MB/s",
          "Installing collected packages: urllib3, idna, charset-normalizer, certifi, requests",
          "Successfully installed certifi-2023.7.22 charset-normalizer-3.3.2 idna-3.6 requests-2.31.0 urllib3-2.1.0"
        ]);
        break;
      case 'list':
        setConsoleOutput([
          "$ pip list",
          "Package            Version",
          "------------------ ---------",
          "certifi            2023.7.22",
          "charset-normalizer 3.3.2",
          "idna               3.6",
          "numpy              1.25.0",
          "pandas             2.0.0",
          "pip                23.2.1",
          "requests           2.31.0",
          "urllib3            2.1.0"
        ]);
        break;
      case 'specific':
        setConsoleOutput([
          "$ pip install numpy==1.24.0",
          "Collecting numpy==1.24.0",
          "  Downloading numpy-1.24.0-cp311-cp311-manylinux_2_17_x86_64.whl (17.3 MB)",
          "     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 17.3/17.3 MB 45.2 MB/s",
          "Installing collected packages: numpy",
          "  Attempting uninstall: numpy",
          "    Found existing installation: numpy 1.25.0",
          "    Uninstalling numpy-1.25.0:",
          "      Successfully uninstalled numpy-1.25.0",
          "Successfully installed numpy-1.24.0"
        ]);
        break;
      case 'upgrade':
        setConsoleOutput([
          "$ pip install --upgrade requests",
          "Requirement already satisfied: requests in /usr/lib/python3.11/site-packages (2.31.0)",
          "Collecting requests",
          "  Downloading requests-2.32.0-py3-none-any.whl (64 kB)",
          "     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 64.1/64.1 kB 2.4 MB/s",
          "Installing collected packages: requests",
          "  Attempting uninstall: requests",
          "    Found existing installation: requests 2.31.0",
          "    Uninstalling requests-2.31.0:",
          "      Successfully uninstalled requests-2.31.0",
          "Successfully installed requests-2.32.0"
        ]);
        break;
      case 'uninstall':
        setConsoleOutput([
          "$ pip uninstall requests",
          "Found existing installation: requests 2.32.0",
          "Uninstalling requests-2.32.0:",
          "  Would remove:",
          "    /usr/lib/python3.11/site-packages/requests-2.32.0.dist-info/*",
          "    /usr/lib/python3.11/site-packages/requests/*",
          "Proceed (Y/n)? Y",
          "  Successfully uninstalled requests-2.32.0"
        ]);
        break;
      case 'requirements':
        setConsoleOutput([
          "$ cat requirements.txt",
          "numpy",
          "pandas",
          "requests",
          "$ pip install -r requirements.txt",
          "Requirement already satisfied: numpy in /usr/lib/python3.11/site-packages (from -r requirements.txt (line 1))",
          "Requirement already satisfied: pandas in /usr/lib/python3.11/site-packages (from -r requirements.txt (line 2))",
          "Collecting requests",
          "  Downloading requests-2.31.0-py3-none-any.whl (62 kB)",
          "Installing collected packages: requests",
          "Successfully installed requests-2.31.0"
        ]);
        break;
      case 'clear':
        setConsoleOutput([]);
        break;
    }
  };

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-900 min-h-screen font-sans text-slate-800 dark:text-slate-200">
      
      {/* 1. Header & Intro */}
      <header className="max-w-4xl mx-auto text-center mb-16 pt-8">
        <div className="inline-flex items-center justify-center p-4 bg-slate-200 dark:bg-slate-800 rounded-2xl mb-6 shadow-sm border border-slate-300 dark:border-slate-700">
          <Download className="w-10 h-10 text-blue-500 dark:text-blue-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">Python PIP</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          PIP is the standard Package Manager for Python used to explicitly install and manage external libraries and dependent packages natively locally on your computer from the Python Package Index.
        </p>
      </header>

      {/* 2. Packages Table & 3. Validation Code */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <h2 className="text-2xl font-bold mb-4 flex items-center text-slate-900 dark:text-white"><Package className="w-6 h-6 mr-3 text-emerald-500" /> 2. What is a Package?</h2>
          <p className="mb-4 text-slate-600 dark:text-slate-400 text-sm">
            A package is a collection of external Python modules that strictly natively provide additional modular functionality tools.
          </p>
          <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
            <table className="w-full text-sm text-left">
               <thead className="bg-slate-100 dark:bg-slate-900 font-bold text-slate-600 dark:text-slate-400">
                 <tr><th className="p-3">Package</th><th className="p-3">Purpose</th></tr>
               </thead>
               <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300 font-mono">
                 <tr className="bg-white dark:bg-slate-800">
                   <td className="p-3 font-bold text-emerald-600 dark:text-emerald-400">NumPy</td>
                   <td className="p-3 text-xs">Numerical computing</td>
                 </tr>
                 <tr className="bg-slate-50 dark:bg-slate-800/50">
                   <td className="p-3 font-bold text-emerald-600 dark:text-emerald-400">Pandas</td>
                   <td className="p-3 text-xs">Data analysis</td>
                 </tr>
                 <tr className="bg-white dark:bg-slate-800">
                   <td className="p-3 font-bold text-emerald-600 dark:text-emerald-400">Requests</td>
                   <td className="p-3 text-xs">HTTP requests</td>
                 </tr>
                 <tr className="bg-slate-50 dark:bg-slate-800/50">
                   <td className="p-3 font-bold text-emerald-600 dark:text-emerald-400">Flask</td>
                   <td className="p-3 text-xs">Web development</td>
                 </tr>
                 <tr className="bg-white dark:bg-slate-800">
                   <td className="p-3 font-bold text-emerald-600 dark:text-emerald-400">Matplotlib</td>
                   <td className="p-3 text-xs">Data visualization</td>
                 </tr>
               </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6">
           <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-2xl border border-blue-200 dark:border-blue-800/50 shadow-sm flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-3 flex items-center text-blue-800 dark:text-blue-400"><Terminal className="w-5 h-5 mr-3" /> 3. Checking PIP Installation</h3>
              <p className="text-sm text-blue-700 dark:text-blue-300 mb-4">Most modern Python installations inherently structurally globally include PIP. Verify it via terminal natively:</p>
              <CodeSnippetBlock title="Terminal" codeSnippet={`pip --version\n\n# pip 23.2.1 from ... (python 3.x)`} />
           </div>
        </div>
      </section>

      {/* Interactive Testing PIP Terminal Console Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-slate-900 rounded-2xl border border-slate-700 shadow-xl overflow-hidden flex flex-col lg:flex-row">
          
          <div className="lg:w-1/3 bg-slate-800 border-r border-slate-700 flex flex-col">
            <div className="p-4 border-b border-slate-700 flex items-center text-white font-bold">
               <Terminal className="mr-2 w-5 h-5 text-emerald-500" /> CLI Package Manager Lab
            </div>
            <div className="p-4 space-y-2 overflow-y-auto flex-1 font-mono text-sm">
               <button onClick={() => runDemo('version')} className="w-full text-left p-3 rounded-lg bg-slate-900 border border-slate-700 hover:border-blue-500 text-slate-300 transition flex items-center">
                 <span className="text-blue-400 mr-2">3.</span> Check Version
               </button>
               <button onClick={() => runDemo('install')} className="w-full text-left p-3 rounded-lg bg-slate-900 border border-slate-700 hover:border-emerald-500 text-slate-300 transition flex items-center">
                 <span className="text-emerald-400 mr-2">4.</span> Install Package
               </button>
               <button onClick={() => runDemo('list')} className="w-full text-left p-3 rounded-lg bg-slate-900 border border-slate-700 hover:border-purple-500 text-slate-300 transition flex items-center">
                 <span className="text-purple-400 mr-2">5.</span> List Packages
               </button>
               <button onClick={() => runDemo('specific')} className="w-full text-left p-3 rounded-lg bg-slate-900 border border-slate-700 hover:border-orange-500 text-slate-300 transition flex items-center">
                 <span className="text-orange-400 mr-2">6.</span> Specific Version
               </button>
               <button onClick={() => runDemo('upgrade')} className="w-full text-left p-3 rounded-lg bg-slate-900 border border-slate-700 hover:border-indigo-500 text-slate-300 transition flex items-center">
                 <span className="text-indigo-400 mr-2">7.</span> Upgrade Package
               </button>
               <button onClick={() => runDemo('uninstall')} className="w-full text-left p-3 rounded-lg bg-slate-900 border border-slate-700 hover:border-rose-500 text-slate-300 transition flex items-center">
                 <span className="text-rose-400 mr-2">8.</span> Uninstall
               </button>
               <button onClick={() => runDemo('requirements')} className="w-full text-left p-3 rounded-lg bg-slate-900 border border-slate-700 hover:border-amber-500 text-slate-300 transition flex items-center">
                 <span className="text-amber-400 mr-2">11.</span> Install from File
               </button>
            </div>
          </div>

          <div className="lg:w-2/3 bg-black p-4 font-mono text-sm leading-relaxed overflow-y-auto h-[450px] relative">
            <div className="flex justify-between items-center text-xs font-bold text-slate-500 mb-4 border-b border-slate-800 pb-2">
               <span className="flex items-center"><Server className="w-4 h-4 mr-2" /> Local Environment Shell</span>
               <button onClick={() => runDemo('clear')} className="hover:text-white transition"><RefreshCw className="w-4 h-4" /></button>
            </div>
            {consoleOutput.length === 0 ? (
               <div className="text-slate-600 flex flex-col items-center justify-center h-full pb-10">
                 <Terminal className="w-12 h-12 mb-4 opacity-50" />
                 <span>Select a PIP command to execute in the virtual shell...</span>
               </div>
            ) : (
                <div className="space-y-1">
                  {consoleOutput.map((l, i) => {
                     let colorClass = 'text-slate-300';
                     if (l.startsWith('$')) colorClass = 'text-emerald-400 font-bold';
                     if (l.includes('Successfully')) colorClass = 'text-green-400 font-bold';
                     if (l.includes('Downloading') || l.includes('━━━━━━━━━━')) colorClass = 'text-blue-400';
                     if (l.includes('Uninstalling') || l.includes('removing') || l.includes('Would remove')) colorClass = 'text-rose-400';
                     if (l.includes('Requirement already satisfied')) colorClass = 'text-slate-500';
                     
                     return <div key={i} className={colorClass}>{l}</div>;
                  })}
                </div>
            )}
          </div>
        </div>
      </section>

      {/* 9. Searching & 10. Multiple Packages */}
      <section className="max-w-6xl mx-auto mb-16 grid md:grid-cols-2 gap-6">
         <div className="bg-slate-100 dark:bg-slate-800/80 p-6 rounded-2xl border border-slate-300 dark:border-slate-700">
            <h3 className="text-lg font-bold mb-3 flex items-center text-slate-900 dark:text-white"><Search className="w-5 h-5 mr-2 text-indigo-500" /> 9. Searching for Packages</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">You can structurally browse PyPI (Python Package Index) website directly natively globally online for categories like Machine learning, Web development, Data analysis, Cybersecurity, and Automation tools.</p>
         </div>
         <div className="bg-slate-100 dark:bg-slate-800/80 p-6 rounded-2xl border border-slate-300 dark:border-slate-700">
            <h3 className="text-lg font-bold mb-3 flex items-center text-slate-900 dark:text-white"><Package className="w-5 h-5 mr-2 text-rose-500" /> 10. Installing Multiple Packages</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">You can definitively sequentially structurally explicitly natively install structurally safely multiple modular packages concurrently together at once.</p>
            <div className="bg-white dark:bg-slate-900 p-2 rounded font-mono text-xs border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
              <span className="text-emerald-500 font-bold">$ pip install</span> numpy pandas matplotlib
            </div>
         </div>
      </section>

      {/* 12. Execution Flow & 13. Real World */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-12 gap-6">
        <div className="lg:col-span-4 bg-slate-900 text-white p-6 rounded-2xl shadow-xl flex flex-col items-center border border-slate-800 text-sm">
           <h2 className="text-xl font-bold mb-6 text-blue-400">12. PIP Execution Flow</h2>
           <div className="flex flex-col items-center space-y-2 font-mono text-slate-300 w-full px-4">
             <div className="bg-slate-800 p-3 rounded border border-slate-700 w-full text-center shadow flex items-center justify-center"><Terminal className="w-4 h-4 mr-2" /> Developer Request</div>
             <ArrowDown className="w-5 h-5 text-slate-500" />
             <div className="bg-blue-900/50 p-3 rounded border border-blue-700 w-full text-center shadow font-bold text-blue-300">pip install command</div>
             <ArrowDown className="w-5 h-5 text-slate-500" />
             <div className="bg-slate-800 p-3 rounded border border-slate-700 w-full text-center shadow flex items-center justify-center"><Server className="w-4 h-4 mr-2" /> Connect to PyPI</div>
             <ArrowDown className="w-5 h-5 text-slate-500" />
             <div className="bg-slate-800 p-3 rounded border border-slate-700 w-full text-center shadow flex items-center justify-center"><Download className="w-4 h-4 mr-2" /> Download Package</div>
             <ArrowDown className="w-5 h-5 text-slate-500" />
             <div className="bg-emerald-900/40 p-3 rounded border border-emerald-600/50 w-full text-center shadow text-emerald-300 font-bold flex items-center justify-center"><HardDrive className="w-4 h-4 mr-2" /> Install in Environment</div>
           </div>
        </div>

        <div className="lg:col-span-8 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
           <h2 className="text-2xl font-bold mb-6 flex items-center text-slate-900 dark:text-white"><BookOpen className="w-6 h-6 mr-3 text-emerald-500" /> 13. Real-World Data Science Setup</h2>
           <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm">Example: Installing and universally utilizing a core data science library iteratively globally.</p>
           
           <div className="grid md:grid-cols-2 gap-4">
               <div>
                  <h4 className="font-bold text-sm mb-2 text-slate-700 dark:text-slate-300">Terminal Shell</h4>
                  <CodeSnippetBlock codeSnippet={`$ pip install numpy`} />
               </div>
               <div>
                  <h4 className="font-bold text-sm mb-2 text-slate-700 dark:text-slate-300">Python Script (`app.py`)</h4>
                  <CodeSnippetBlock codeSnippet={`import numpy as np\n\narr = np.array([1,2,3])\nprint(arr)\n\n# Output: [1 2 3]`} />
               </div>
           </div>
        </div>
      </section>

      {/* 14 & 15. Errors & Developer Tips */}
      <section className="max-w-6xl mx-auto mb-16 space-y-6">
        <h2 className="text-2xl font-bold border-b border-slate-200 dark:border-slate-700 pb-2">14. Common Mistakes & 15. Dev Tips</h2>
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-900/50 p-6 rounded-2xl">
             <h3 className="font-bold flex items-center text-rose-700 dark:text-rose-400 mb-4"><AlertTriangle className="mr-2"/> Common Beginner Mistakes</h3>
             <ul className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
               <li className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
                 <strong className="block mb-1 text-rose-600 dark:text-rose-400">1. Wrong Python Version mapping</strong>
                 Sometimes system terminals naturally map PIP natively incorrectly to legacy versions.<br/>
                 Fix: Use explicitly <code className="bg-slate-100 dark:bg-slate-900 px-1 rounded font-mono font-bold">pip3 install package_name</code>.
               </li>
               <li className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
                 <strong className="block mb-1 text-rose-600 dark:text-rose-400">2. Running Offline / Wrong Spelling</strong>
                 PIP mandates strict pure internet connectivity. Further, typing package names incorrectly will permanently organically structurally crash installations. Always definitively explicitly universally strictly implicitly natively verify package names on PyPI identically safely.
               </li>
             </ul>
          </div>
          
          <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-900/50 p-6 rounded-2xl">
             <h3 className="font-bold flex items-center text-emerald-700 dark:text-emerald-400 mb-4"><Lightbulb className="mr-2"/> Dev Tips (15+ Years Exp)</h3>
             <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
               <li className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-emerald-100 dark:border-emerald-800 shadow-sm">
                 <strong className="block mb-1 text-emerald-600 dark:text-emerald-400">Tip 1: Always Use Virtual Environments</strong>
                 Avoid natively strictly explicitly installing global system-wide root packages.<br/>
                 Instead use isolated scoped natively containerized project virtual-environments purely strictly systematically fundamentally definitively structurally.
               </li>
               <li className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-emerald-100 dark:border-emerald-800 shadow-sm">
                 <strong className="block mb-1 text-emerald-600 dark:text-emerald-400">Tip 2 & 3: Requirements.txt & Security Upgrades</strong>
                 Use <code className="bg-slate-100 dark:bg-slate-900 px-1 rounded font-mono text-xs text-blue-500">requirements.txt</code> structurally exclusively completely naturally effectively sequentially perfectly logically to strictly strictly implicitly natively securely lock natively project tracking recursively accurately rigorously accurately globally fundamentally iteratively cleanly globally independently smoothly natively dependently precisely explicitly statically correctly thoroughly cleanly optimally intuitively reliably predictably efficiently systematically flawlessly statically sequentially.
               </li>
             </ul>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PythonPIP;