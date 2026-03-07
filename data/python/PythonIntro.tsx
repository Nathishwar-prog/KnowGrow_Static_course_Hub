import React, { useState } from 'react';
import {
  Users, Check, Copy, Terminal,
  BookOpen, Code, Layers,
  CheckCircle2, AlertTriangle, Star, Lightbulb, UserPlus,
  GitBranch, Share2, Box, ArrowRight, TreeDeciduous,
  RefreshCw, Play, Shield, Target, Combine, Globe,
  Cpu, BarChart, Database, Lock, Settings, MonitorPlay,
  Clock, Calendar, CpuIcon
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
          <div className="flex space-x-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80"></div>
          </div>
        </div>
      )}
      <div className="relative group bg-slate-900 border-t border-slate-800">
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-md bg-slate-800 text-slate-400 hover:bg-blue-600 hover:text-white transition-colors border border-slate-700"
            title="Copy code"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </div>
        <pre className="p-4 overflow-x-auto text-sm font-mono text-blue-300 leading-relaxed">
          <code>{codeSnippet}</code>
        </pre>
      </div>
    </div>
  );
};

const PythonIntro: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);

  const runDemo = (action: string) => {
    setConsoleOutput([]);
    let output: string[] = [];

    switch (action) {
      case 'hello':
        output = [">>> print(\"Hello, World!\")", "Hello, World!"];
        break;
      case 'automation':
        output = [
          ">>> for i in range(3):",
          ">>>     print(\"Automation Task Completed\")",
          "Automation Task Completed",
          "Automation Task Completed",
          "Automation Task Completed"
        ];
        break;
      case 'variables':
        output = [
          ">>> name = \"Issac\"",
          ">>> age = 19",
          ">>> print(\"Name:\", name)",
          ">>> print(\"Age:\", age)",
          "Name: Issac",
          "Age: 19"
        ];
        break;
      case 'welcome':
        output = [
          ">>> print(\"Welcome to Python Programming\")",
          ">>> print(\"Let's start learning!\")",
          "Welcome to Python Programming",
          "Let's start learning!"
        ];
        break;
      case 'clear':
        output = [];
        break;
      default:
        break;
    }
    setConsoleOutput(output);
  };

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-900 min-h-screen font-sans text-slate-800 dark:text-slate-200">
      
      {/* 1. Header Area */}
      <header className="max-w-4xl mx-auto text-center mb-16 pt-8">
        <div className="inline-flex items-center justify-center p-4 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl mb-6 shadow-sm border border-yellow-200 dark:border-yellow-800/50">
          <Code className="w-10 h-10 text-yellow-600 dark:text-yellow-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Python Overview
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Python is a high-level, interpreted programming language known for its simplicity, readability, and versatility.
        </p>
      </header>

      {/* 1. What is Python & 2. Why Popular */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 text-blue-500 mr-3" />
            <h2 className="text-2xl font-bold">1. What is Python?</h2>
          </div>
          <p className="mb-4 text-slate-600 dark:text-slate-300">
            Created by <strong className="text-slate-900 dark:text-white">Guido van Rossum</strong> and first released in 1991, Python is designed to be easy for beginners while still powerful enough for professional developers.
          </p>
          <CodeSnippetBlock 
            title="Simple Python Example"
            codeSnippet={`print("Hello, World!")`} 
          />
          <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg font-mono text-sm border border-slate-200 dark:border-slate-700">
            <div className="text-slate-500 mb-1 text-xs font-bold uppercase tracking-wider">Output:</div>
            <span className="text-emerald-600 dark:text-emerald-400">Hello, World!</span>
          </div>
          <p className="mt-4 text-sm text-slate-500 italic">This simple program prints a message on the screen.</p>
        </div>

        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-4">
            <Star className="w-6 h-6 text-yellow-500 mr-3" />
            <h2 className="text-2xl font-bold">2. Why Python is So Popular</h2>
          </div>
          <p className="mb-6 text-slate-600 dark:text-slate-300">
            Python has become one of the most widely used programming languages in the world.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            <div className="flex items-center p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-700">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3" />
              <span className="font-medium text-sm">Easy to read and write</span>
            </div>
            <div className="flex items-center p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-700">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3" />
              <span className="font-medium text-sm">Beginner-friendly syntax</span>
            </div>
            <div className="flex items-center p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-700">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3" />
              <span className="font-medium text-sm">Large community support</span>
            </div>
            <div className="flex items-center p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-700">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3" />
              <span className="font-medium text-sm">Thousands of libraries</span>
            </div>
            <div className="col-span-1 sm:col-span-2 flex items-center p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-700">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3" />
              <span className="font-medium text-sm">Used in many modern technologies</span>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border border-blue-100 dark:border-blue-800/50">
            <p className="text-sm font-bold text-blue-800 dark:text-blue-300 mb-2">Used heavily by major tech companies:</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full text-xs font-bold border border-blue-200 dark:border-blue-700 shadow-sm text-blue-700 dark:text-blue-400">Google</span>
              <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full text-xs font-bold border border-blue-200 dark:border-blue-700 shadow-sm text-pink-600 dark:text-pink-400">Instagram</span>
              <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full text-xs font-bold border border-blue-200 dark:border-blue-700 shadow-sm text-red-600 dark:text-red-400">Netflix</span>
              <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full text-xs font-bold border border-blue-200 dark:border-blue-700 shadow-sm text-emerald-600 dark:text-emerald-400">Spotify</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What Python Can Do */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
            <Layers className="w-8 h-8 text-teal-500 mr-3" />
            3. What Python Can Do
          </h2>
          <p className="text-slate-600 dark:text-slate-400">Python can be used to build many types of applications.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <Globe className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-bold text-lg mb-2">Web Development</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Build websites and APIs.</p>
          </div>
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <BarChart className="w-8 h-8 text-indigo-500 mb-4" />
            <h3 className="font-bold text-lg mb-2">Data Science</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Data analysis and visualization.</p>
          </div>
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <Cpu className="w-8 h-8 text-emerald-500 mb-4" />
            <h3 className="font-bold text-lg mb-2">Artificial Intelligence</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Machine learning models.</p>
          </div>
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <Settings className="w-8 h-8 text-slate-500 dark:text-slate-400 mb-4" />
            <h3 className="font-bold text-lg mb-2">Automation</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Automate repetitive tasks.</p>
          </div>
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <MonitorPlay className="w-8 h-8 text-purple-500 mb-4" />
            <h3 className="font-bold text-lg mb-2">Game Development</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Simple game development.</p>
          </div>
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <Lock className="w-8 h-8 text-red-500 mb-4" />
            <h3 className="font-bold text-lg mb-2">Cybersecurity</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Security tools and scripts.</p>
          </div>
        </div>

        <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Settings className="w-48 h-48 text-white animate-spin-slow" />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
               <h3 className="text-2xl font-bold text-white mb-4">Example Automation Code</h3>
               <CodeSnippetBlock 
                 codeSnippet={`for i in range(3):\n    print("Automation Task Completed")`}
                 title="script.py"
               />
            </div>
            <div className="md:w-1/2 w-full">
               <div className="bg-black/50 p-6 rounded-xl border border-slate-700">
                  <div className="text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2 flex items-center">
                     <Terminal className="w-4 h-4 mr-2" /> Output
                  </div>
                  <div className="font-mono text-sm text-slate-300 space-y-1">
                     <div>Automation Task Completed</div>
                     <div>Automation Task Completed</div>
                     <div>Automation Task Completed</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Easy to Learn & 5. Features */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-8 rounded-2xl shadow-sm border border-indigo-100 dark:border-indigo-800/30">
          <div className="flex items-center mb-6">
            <Lightbulb className="w-8 h-8 text-indigo-500 mr-3" />
            <h2 className="text-2xl font-bold dark:text-indigo-100">4. Why Python is Easy to Learn</h2>
          </div>
          <p className="mb-6 text-indigo-900 dark:text-indigo-200">
            Python uses simple English-like syntax, making it easy to understand. Python programs require less code and fewer symbols, making them beginner-friendly.
          </p>
          
          <div className="space-y-4">
            <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 shadow-sm">
              <div className="bg-slate-800 px-4 py-2 text-xs font-bold text-slate-400 border-b border-slate-700 flex justify-between items-center">
                <span>C Language Equivalent (Complex)</span>
              </div>
              <pre className="p-4 text-sm font-mono text-slate-300">
{`#include<stdio.h>
int main(){
    printf("Hello World");
    return 0;
}`}
              </pre>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="text-indigo-400 rotate-90 md:rotate-0" />
            </div>

            <div className="bg-slate-900 rounded-xl overflow-hidden border border-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
               <div className="bg-indigo-900/50 px-4 py-2 text-xs font-bold text-indigo-300 border-b border-indigo-800/50 flex justify-between items-center">
                <span>Python Equivalent (Simple)</span>
                <Check className="w-4 h-4 text-emerald-400" />
              </div>
              <pre className="p-4 text-sm font-mono text-emerald-300 font-bold">
{`print("Hello World")`}
              </pre>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-6">
            <Combine className="w-8 h-8 text-orange-500 mr-3" />
            <h2 className="text-2xl font-bold">5. Features of Python</h2>
          </div>
          <p className="mb-6 text-slate-600 dark:text-slate-300">
            Python has many powerful features and is officially maintained by the Python Software Foundation.
          </p>

          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-orange-100 dark:bg-orange-900/50 p-2 rounded-lg text-orange-600 dark:text-orange-400 mr-4 shrink-0 mt-1">
                <span className="font-bold">1</span>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">Easy to Learn</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Python syntax is simple and readable.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-orange-100 dark:bg-orange-900/50 p-2 rounded-lg text-orange-600 dark:text-orange-400 mr-4 shrink-0 mt-1">
                <span className="font-bold">2</span>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">Interpreted Language</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Python executes code line by line using an interpreter.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-orange-100 dark:bg-orange-900/50 p-2 rounded-lg text-orange-600 dark:text-orange-400 mr-4 shrink-0 mt-1">
                <span className="font-bold">3</span>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">Object-Oriented</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Python supports object-oriented programming (OOP).</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-orange-100 dark:bg-orange-900/50 p-2 rounded-lg text-orange-600 dark:text-orange-400 mr-4 shrink-0 mt-1">
                <span className="font-bold">4</span>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">Cross-Platform</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Python runs on Windows, Linux, and macOS.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-orange-100 dark:bg-orange-900/50 p-2 rounded-lg text-orange-600 dark:text-orange-400 mr-4 shrink-0 mt-1">
                <span className="font-bold">5</span>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">Large Standard Library</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Python includes thousands of built-in modules.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Real Life & 7. Execution Flow */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
           <div className="flex items-center mb-6">
            <Globe className="w-8 h-8 text-emerald-500 mr-3" />
            <h2 className="text-2xl font-bold">6. Python in Real Life</h2>
          </div>
          <p className="mb-6 text-slate-600 dark:text-slate-300">
            Python powers many real-world technologies:
          </p>
          <ul className="grid grid-cols-2 gap-3 mb-8">
            <li className="flex items-center bg-slate-50 dark:bg-slate-900/50 p-2 rounded text-sm text-slate-700 dark:text-slate-300 border border-slate-100 dark:border-slate-700">
               <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2"></span> AI Systems
            </li>
            <li className="flex items-center bg-slate-50 dark:bg-slate-900/50 p-2 rounded text-sm text-slate-700 dark:text-slate-300 border border-slate-100 dark:border-slate-700">
               <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2"></span> Chatbots
            </li>
            <li className="flex items-center bg-slate-50 dark:bg-slate-900/50 p-2 rounded text-sm text-slate-700 dark:text-slate-300 border border-slate-100 dark:border-slate-700">
               <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2"></span> Data Analysis
            </li>
            <li className="flex items-center bg-slate-50 dark:bg-slate-900/50 p-2 rounded text-sm text-slate-700 dark:text-slate-300 border border-slate-100 dark:border-slate-700">
               <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2"></span> Automation
            </li>
            <li className="flex items-center bg-slate-50 dark:bg-slate-900/50 p-2 rounded text-sm text-slate-700 dark:text-slate-300 border border-slate-100 dark:border-slate-700">
               <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2"></span> Web Apps
            </li>
            <li className="flex items-center bg-slate-50 dark:bg-slate-900/50 p-2 rounded text-sm text-slate-700 dark:text-slate-300 border border-slate-100 dark:border-slate-700">
               <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2"></span> Scientific Software
            </li>
          </ul>

          <h3 className="font-bold mb-3 text-slate-800 dark:text-slate-200">Example Program:</h3>
          <CodeSnippetBlock codeSnippet={`name = "Issac"\nage = 19\n\nprint("Name:", name)\nprint("Age:", age)`} />
          <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-xl border-l-4 border-emerald-500">
             <div className="text-xs font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider mb-2">Output</div>
             <div className="font-mono text-sm text-emerald-900 dark:text-emerald-200">
                Name: Issac<br/>Age: 19
             </div>
          </div>
        </div>

        <div className="bg-amber-50 dark:bg-amber-900/10 p-8 rounded-2xl shadow-sm border border-amber-200 dark:border-amber-800/30">
          <div className="flex items-center mb-6">
            <RefreshCw className="w-8 h-8 text-amber-500 mr-3" />
            <h2 className="text-2xl font-bold text-amber-900 dark:text-amber-100">7. Python Execution Flow</h2>
          </div>
          <p className="mb-6 text-amber-800 dark:text-amber-200 text-sm">
            Python programs follow a simple execution process, making it easy to debug and test.
          </p>

          <div className="flex flex-col items-center justify-center space-y-3 font-mono text-sm py-8 relative">
             <div className="bg-white dark:bg-slate-800 border-2 border-amber-300 dark:border-amber-700 p-4 rounded-xl shadow-sm w-full max-w-xs text-center font-bold text-amber-900 dark:text-amber-300 z-10 flex items-center justify-center">
                <Code className="w-5 h-5 mr-3 text-amber-500" /> Write Python Code
             </div>
             
             <div className="h-6 border-l-2 border-amber-300 dark:border-amber-700 border-dashed z-0"></div>
             
             <div className="bg-white dark:bg-slate-800 border-2 border-amber-400 dark:border-amber-600 p-4 rounded-xl shadow-sm w-full max-w-xs text-center font-bold text-amber-900 dark:text-amber-300 z-10 flex items-center justify-center">
                 <Terminal className="w-5 h-5 mr-3 text-amber-500" /> Python Interpreter
             </div>
             
             <div className="h-6 border-l-2 border-amber-400 dark:border-amber-600 border-dashed z-0"></div>
             
             <div className="bg-white dark:bg-slate-800 border-2 border-amber-500 dark:border-amber-500 p-4 rounded-xl shadow-sm w-full max-w-xs text-center font-bold text-amber-900 dark:text-amber-300 z-10 flex items-center justify-center relative overflow-hidden">
                 <div className="absolute inset-0 bg-amber-100 dark:bg-amber-900/40 translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>
                 <Cpu className="w-5 h-5 mr-3 text-amber-600" /> Executed Line by Line
             </div>
             
             <div className="h-6 border-l-2 border-amber-500 dark:border-amber-500 border-dashed z-0"></div>
             
             <div className="bg-amber-500 dark:bg-amber-600 p-4 rounded-xl shadow-md w-full max-w-xs text-center font-bold text-white z-10 flex items-center justify-center">
                 <CheckCircle2 className="w-5 h-5 mr-3 text-white" /> Output Displayed
             </div>
          </div>
        </div>
      </section>

      {/* 8. History & 9. Beginner Program */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
           <div className="flex items-center mb-6">
              <Clock className="w-6 h-6 text-rose-500 mr-3" />
              <h2 className="text-2xl font-bold">8. Version History</h2>
           </div>
           
           <table className="w-full text-left border-collapse rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700">
             <thead className="bg-slate-100 dark:bg-slate-900">
               <tr>
                 <th className="p-3 font-bold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700">Version</th>
                 <th className="p-3 font-bold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700">Status</th>
               </tr>
             </thead>
             <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
               <tr className="bg-white dark:bg-slate-800">
                 <td className="p-3 font-mono text-sm text-slate-600 dark:text-slate-400">Python 1.x</td>
                 <td className="p-3 text-sm text-slate-500">Initial release</td>
               </tr>
               <tr className="bg-slate-50 dark:bg-slate-800/50">
                 <td className="p-3 font-mono text-sm text-slate-600 dark:text-slate-400">Python 2.x</td>
                 <td className="p-3 text-sm text-slate-500">Legacy version</td>
               </tr>
               <tr className="bg-emerald-50 dark:bg-emerald-900/10 border-l-2 border-emerald-500">
                 <td className="p-3 font-mono text-sm font-bold text-emerald-700 dark:text-emerald-400">Python 3.x</td>
                 <td className="p-3 text-sm font-medium text-emerald-700 dark:text-emerald-400 flex items-center">
                    Current version <CheckCircle2 className="w-4 h-4 ml-2" />
                 </td>
               </tr>
             </tbody>
           </table>
           <p className="mt-4 text-xs text-slate-500 italic">Today developers use Python 3, which includes many improvements and features.</p>
        </div>

        <div className="lg:col-span-7 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col justify-center">
           <div className="flex items-center mb-6">
              <Play className="w-6 h-6 text-indigo-500 mr-3" />
              <h2 className="text-2xl font-bold">9. Simple Beginner Program</h2>
           </div>
           <CodeSnippetBlock 
              codeSnippet={`print("Welcome to Python Programming")\nprint("Let's start learning!")`} 
              title="welcome.py"
           />
           <div className="bg-black/90 p-4 rounded-xl border border-slate-700 shadow-inner">
             <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Terminal Output</div>
             <div className="font-mono text-sm text-emerald-400">
               Welcome to Python Programming<br/>
               Let's start learning!
             </div>
           </div>
        </div>
      </section>

      {/* Interactive Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-lg">
          <div className="bg-slate-100 dark:bg-slate-900/50 p-6 border-b border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center">
              <Play className="w-8 h-8 text-blue-500 mr-3" />
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Python Lab</h2>
                <p className="text-slate-500 text-sm">Test simple Python scripts in real-time</p>
              </div>
            </div>
            <button
              onClick={() => runDemo('clear')}
              className="flex items-center px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-lg text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition"
            >
              <RefreshCw className="w-4 h-4 mr-2" /> Clear Console
            </button>
          </div>

          <div className="grid md:grid-cols-2">
            <div className="p-6 border-r border-slate-200 dark:border-slate-700 space-y-3">
              <h3 className="font-bold text-slate-700 dark:text-slate-300 mb-4">Run Code Snippets:</h3>
              <button onClick={() => runDemo('hello')} className="w-full text-left p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-400 bg-slate-50 dark:bg-slate-900/50 transition-colors group">
                <div className="font-bold text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 mb-1">1. Hello World</div>
                <div className="text-xs text-slate-500">Run the classic "Hello, World!" program.</div>
              </button>
              <button onClick={() => runDemo('automation')} className="w-full text-left p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-400 bg-slate-50 dark:bg-slate-900/50 transition-colors group">
                <div className="font-bold text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 mb-1">2. Basic Automation Loop</div>
                <div className="text-xs text-slate-500">See how to repeat tasks 3 times.</div>
              </button>
              <button onClick={() => runDemo('variables')} className="w-full text-left p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 bg-slate-50 dark:bg-slate-900/50 transition-colors group">
                <div className="font-bold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 mb-1">3. Values & Variables</div>
                <div className="text-xs text-slate-500">Store and print user information.</div>
              </button>
              <button onClick={() => runDemo('welcome')} className="w-full text-left p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-orange-500 dark:hover:border-orange-400 bg-slate-50 dark:bg-slate-900/50 transition-colors group">
                <div className="font-bold text-orange-600 dark:text-orange-400 group-hover:text-orange-700 dark:group-hover:text-orange-300 mb-1">4. Welcome Message</div>
                <div className="text-xs text-slate-500">Print multiple lines consecutively.</div>
              </button>
            </div>

            <div className="bg-slate-900 p-6 min-h-[300px] flex flex-col font-mono relative">
              <div className="text-xs font-bold text-slate-500 mb-4 border-b border-slate-800 pb-2 flex items-center">
                <Terminal className="w-4 h-4 mr-2" /> Python Interactive Console
              </div>
              <div className="flex-1 overflow-y-auto">
                {consoleOutput.length === 0 ? (
                  <div className="mt-20 text-center text-slate-600 animate-pulse">Select an example to run...</div>
                ) : (
                  consoleOutput.map((line, idx) => (
                    <div key={idx} className={`text-sm mb-1 ${line.startsWith('>>>') ? 'text-blue-400' : 'text-emerald-400 font-bold'}`}>
                      {line}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Developer Advice */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-r from-teal-500 to-emerald-600 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 p-8 opacity-20"><Star className="w-32 h-32 text-white" /></div>
          
          <h2 className="text-3xl font-extrabold mb-4 flex items-center relative z-10">
            <Star className="w-8 h-8 mr-3 text-yellow-300 fill-yellow-300" />
            10. Personal Developer Advice
          </h2>
          <p className="text-teal-100 mb-10 font-medium italic relative z-10 text-lg border-b border-teal-400/30 pb-4 inline-block">From a Developer with 15+ years of Python experience:</p>
          
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors">
              <h3 className="font-bold text-xl mb-4 flex items-center"><Target className="text-yellow-300 mr-2" /> Tip 1 — Fundamentals</h3>
              <p className="text-sm text-teal-50 mb-4">Before learning advanced topics like AI, Machine Learning, or Data Science, you must understand:</p>
              <ul className="grid grid-cols-2 gap-2 text-xs font-bold bg-black/20 p-4 rounded-xl">
                 <li className="flex items-center"><Check className="w-3 h-3 text-emerald-300 mr-1"/> Variables</li>
                 <li className="flex items-center"><Check className="w-3 h-3 text-emerald-300 mr-1"/> Loops</li>
                 <li className="flex items-center"><Check className="w-3 h-3 text-emerald-300 mr-1"/> Functions</li>
                 <li className="flex items-center"><Check className="w-3 h-3 text-emerald-300 mr-1"/> Data strucs</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors">
              <h3 className="font-bold text-xl mb-4 flex items-center"><Layers className="text-blue-300 mr-2" /> Tip 2 — Small Projects</h3>
              <p className="text-sm text-teal-50 mb-4">Instead of only reading tutorials, build small programs to improve learning speed:</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                 <span className="bg-black/20 px-3 py-1.5 rounded-lg text-xs font-bold font-mono">Calculator</span>
                 <span className="bg-black/20 px-3 py-1.5 rounded-lg text-xs font-bold font-mono border-l-2 border-emerald-400">Guessing Game</span>
                 <span className="bg-black/20 px-3 py-1.5 rounded-lg text-xs font-bold font-mono border-l-2 border-orange-400">To-do list</span>
                 <span className="bg-black/20 px-3 py-1.5 rounded-lg text-xs font-bold font-mono border-l-2 border-rose-400">Gen Password</span>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors">
              <h3 className="font-bold text-xl mb-4 flex items-center"><Calendar className="text-purple-300 mr-2" /> Tip 3 — Practice </h3>
              <p className="text-sm text-teal-50 mb-4">Even <strong className="text-white">20–30 minutes</strong> of daily coding can significantly improve programming skills.</p>
              <div className="bg-emerald-500/30 p-4 rounded-xl border border-emerald-400/50 mt-4 text-center">
                 <p className="font-bold text-sm tracking-wide">Consistency is the key to mastering Python.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. What You Will Learn Next */}
      <section className="max-w-4xl mx-auto mb-16 text-center">
         <h2 className="text-3xl font-bold mb-6 flex items-center justify-center">
            <ArrowRight className="w-8 h-8 text-teal-500 mr-3" />
            11. What You Will Learn Next
         </h2>
         <p className="text-slate-600 dark:text-slate-400 mb-8">After this introduction, the next topics in the course include:</p>
         
         <div className="flex flex-wrap justify-center gap-3">
            {['Get Started', 'Syntax', 'Variables', 'Data Types', 'Operators', 'Conditions', 'Loops', 'Functions', 'Classes & Objects', 'File Handling'].map((topic, index) => (
                <div key={index} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-6 py-3 rounded-full shadow-sm font-bold text-slate-700 dark:text-slate-300 flex items-center hover:bg-slate-50 dark:hover:bg-slate-700 transition cursor-default">
                   <span className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-900 text-xs flex items-center justify-center mr-3 text-slate-500">
                     {index + 1}
                   </span>
                   {topic}
                </div>
            ))}
         </div>
      </section>

    </div>
  );
};

export default PythonIntro;