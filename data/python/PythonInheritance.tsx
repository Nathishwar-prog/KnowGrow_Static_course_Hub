import React, { useState } from 'react';
import {
  Users, Check, Copy, Terminal,
  BookOpen, Code, Layers,
  CheckCircle2, AlertTriangle, Star, Lightbulb, UserPlus,
  GitBranch, Share2, Box, ArrowRight, TreeDeciduous,
  RefreshCw, Play, Shield, Target, Combine
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

const PythonInheritance: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);

  const runDemo = (action: string) => {
    setConsoleOutput([]);
    let output: string[] = [];

    switch (action) {
      case 'simple':
        output = [
          ">>> class Person:",
          ">>>     def __init__(self, name):",
          ">>>         self.name = name",
          ">>>     def display(self):",
          ">>>         print('Name:', self.name)",
          ">>> ",
          ">>> class Student(Person): pass",
          ">>> ",
          ">>> s1 = Student('Issac')",
          ">>> s1.display()",
          "Name: Issac"
        ];
        break;
      case 'super':
        output = [
          ">>> class Person:",
          ">>>     def __init__(self, name): self.name = name",
          ">>> ",
          ">>> class Student(Person):",
          ">>>     def __init__(self, name, age):",
          ">>>         super().__init__(name)",
          ">>>         self.age = age",
          ">>>     def display(self):",
          ">>>         print('Name:', self.name)",
          ">>>         print('Age:', self.age)",
          ">>> ",
          ">>> s1 = Student('Issac', 19)",
          ">>> s1.display()",
          "Name: Issac",
          "Age: 19"
        ];
        break;
      case 'override':
        output = [
          ">>> class Animal:",
          ">>>     def sound(self): print('Animal makes sound')",
          ">>> ",
          ">>> class Dog(Animal):",
          ">>>     def sound(self): print('Dog barks') # Overridden",
          ">>> ",
          ">>> d = Dog()",
          ">>> d.sound()",
          "Dog barks"
        ];
        break;
      case 'multiple':
        output = [
          ">>> class Father:",
          ">>>     def skill1(self): print('Driving')",
          ">>> ",
          ">>> class Mother:",
          ">>>     def skill2(self): print('Cooking')",
          ">>> ",
          ">>> class Child(Father, Mother): pass",
          ">>> ",
          ">>> c = Child()",
          ">>> c.skill1()",
          "Driving",
          ">>> c.skill2()",
          "Cooking"
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
        <div className="inline-flex items-center justify-center p-4 bg-teal-100 dark:bg-teal-900/30 rounded-2xl mb-6 shadow-sm border border-teal-200 dark:border-teal-800/50">
          <Users className="w-10 h-10 text-teal-600 dark:text-teal-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Python Inheritance
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Inheritance is an important concept in Object-Oriented Programming (OOP) that allows one class to inherit properties and methods from another class.
        </p>
      </header>

      {/* 2. Intro & Why Use */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 text-teal-500 mr-3" />
            <h2 className="text-2xl font-bold">1. Introduction to Inheritance</h2>
          </div>
          <p className="mb-4 text-slate-600 dark:text-slate-300">
            In simple words: <strong className="text-slate-900 dark:text-white">Inheritance allows a class to reuse the code of another class.</strong>
          </p>
          <ul className="mb-6 space-y-3">
            <li className="flex items-start">
              <span className="w-2 h-2 rounded-full bg-teal-500 mt-2 mr-3 shrink-0"></span>
              <p>The class that is inherited from is called the <strong>Parent Class</strong> (Base Class).</p>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 shrink-0"></span>
              <p>The class that inherits is called the <strong>Child Class</strong> (Derived Class).</p>
            </li>
          </ul>

          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-l-4 border-blue-400 mb-6">
            <h4 className="font-bold flex items-center text-blue-800 dark:text-blue-400 mb-2">
              <UserPlus className="w-5 h-5 mr-2" /> Real-Life Example
            </h4>
            <p className="text-sm text-blue-800 dark:text-blue-300 mb-2">
              Think of family inheritance: A child inherits characteristics from parents. Similarly, a child class inherits properties from a parent class.
            </p>
            <div className="bg-white dark:bg-slate-800 rounded p-3 text-sm border border-blue-200 dark:border-blue-800 mt-3">
              <span className="font-bold">Parent:</span> Vehicle<br />
              <span className="font-bold">Child:</span> Car, Bike<br />
              <div className="mt-2 pt-2 border-t border-blue-100 dark:border-blue-800">
                All vehicles have <code className="text-blue-600 dark:text-blue-400">speed</code> and <code className="text-blue-600 dark:text-blue-400">engine</code>, but each child vehicle may also have its own unique features.
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-4">
            <Target className="w-6 h-6 text-purple-500 mr-3" />
            <h2 className="text-2xl font-bold">2. Why Use Inheritance?</h2>
          </div>
          <p className="mb-6 text-slate-600 dark:text-slate-300">
            Inheritance is widely used in large software systems because it helps programmers drastically optimize code architecture.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-700">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3" />
              <span className="font-medium">Reuse existing code</span>
            </div>
            <div className="flex items-center p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-700">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3" />
              <span className="font-medium">Reduce duplication</span>
            </div>
            <div className="flex items-center p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-700">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3" />
              <span className="font-medium">Improve maintainability</span>
            </div>
            <div className="flex items-center p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-700">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3" />
              <span className="font-medium">Hierarchical relationships</span>
            </div>
            <div className="col-span-1 sm:col-span-2 flex items-center p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-700">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3" />
              <span className="font-medium">Build scalable applications</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3 & 4. Syntax & Simple Example */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="flex items-center mb-4">
              <Code className="w-6 h-6 text-orange-500 mr-3" />
              <h2 className="text-2xl font-bold">3. Basic Syntax</h2>
            </div>
            <p className="mb-4 text-slate-600 dark:text-slate-300">
              The child class automatically inherits everything from the parent class by passing the parent class name as a parameter in parenthesis.
            </p>
            <CodeSnippetBlock
              codeSnippet={`class ParentClass:\n    # parent properties and methods\n\nclass ChildClass(ParentClass):\n    # child properties and methods`}
            />
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="flex items-center mb-4">
              <Layers className="w-6 h-6 text-pink-500 mr-3" />
              <h2 className="text-2xl font-bold">5. Adding Methods</h2>
            </div>
            <p className="mb-4 text-slate-600 dark:text-slate-300">
              Child classes can also define their own specific methods while still retaining parent methods.
            </p>
            <CodeSnippetBlock
              codeSnippet={`class Person:\n    def __init__(self, name):\n        self.name = name\n\nclass Student(Person):\n    def show_student(self):\n        print("Student Name:", self.name)\n\ns1 = Student("Issac")\ns1.show_student()\n\n# Output:\n# Student Name: Issac`}
            />
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#8b5cf6 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
          <div className="relative z-10">
            <div className="flex items-center mb-6">
              <Box className="w-6 h-6 text-indigo-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">4. Simple Example</h2>
            </div>
            <p className="text-indigo-200 mb-6">
              In this example, <code className="bg-indigo-900/50 px-1 rounded">Student</code> inherits from <code className="bg-indigo-900/50 px-1 rounded">Person</code>. Therefore it can use the <code className="bg-indigo-900/50 px-1 rounded">display()</code> method.
            </p>

            <div className="bg-slate-800/80 rounded-xl border border-slate-700 overflow-hidden mb-6">
              <div className="bg-slate-800 px-4 py-2 border-b border-slate-700 flex items-center text-xs font-bold text-slate-400">
                <Terminal className="w-3 h-3 mr-2" /> script.py
              </div>
              <pre className="p-4 text-sm font-mono text-emerald-300 overflow-x-auto">
                {`class Person:
    def __init__(self, name):
        self.name = name
    
    def display(self):
        print("Name:", self.name)

class Student(Person):
    pass

s1 = Student("Issac")
s1.display()`}
              </pre>
            </div>
            <div className="bg-black/50 rounded-xl p-4 border border-indigo-500/30">
              <div className="text-xs font-bold text-indigo-400 mb-2 uppercase tracking-wider">Output</div>
              <div className="font-mono text-white">Name: Issac</div>
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
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Inheritance Lab</h2>
                <p className="text-slate-500 text-sm">Test different inheritance scenarios in real-time</p>
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
              <h3 className="font-bold text-slate-700 dark:text-slate-300 mb-4">Run Examples:</h3>
              <button onClick={() => runDemo('simple')} className="w-full text-left p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 bg-slate-50 dark:bg-slate-900/50 transition-colors group">
                <div className="font-bold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 mb-1">1. Simple Inheritance</div>
                <div className="text-xs text-slate-500">Test Person &rarr; Student (no super)</div>
              </button>
              <button onClick={() => runDemo('super')} className="w-full text-left p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-400 bg-slate-50 dark:bg-slate-900/50 transition-colors group">
                <div className="font-bold text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 mb-1">2. Using super()</div>
                <div className="text-xs text-slate-500">Test inherited constructor with new child properties</div>
              </button>
              <button onClick={() => runDemo('override')} className="w-full text-left p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-400 bg-slate-50 dark:bg-slate-900/50 transition-colors group">
                <div className="font-bold text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 mb-1">3. Method Overriding</div>
                <div className="text-xs text-slate-500">Test Animal &rarr; Dog changing the sound() method</div>
              </button>
              <button onClick={() => runDemo('multiple')} className="w-full text-left p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-orange-500 dark:hover:border-orange-400 bg-slate-50 dark:bg-slate-900/50 transition-colors group">
                <div className="font-bold text-orange-600 dark:text-orange-400 group-hover:text-orange-700 dark:group-hover:text-orange-300 mb-1">4. Multiple Inheritance</div>
                <div className="text-xs text-slate-500">Test Child inheriting from Father & Mother</div>
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

  {/* 6. super() & 8. Method Overriding */}
  <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-emerald-50 dark:bg-emerald-900/10 p-8 rounded-2xl shadow-sm border border-emerald-100 dark:border-emerald-800/30">
          <div className="flex items-center mb-6">
            <Shield className="w-8 h-8 text-emerald-500 mr-3" />
            <h2 className="text-2xl font-bold dark:text-emerald-100">6. Using super() Function</h2>
          </div>
          <p className="mb-4 text-emerald-900 dark:text-emerald-200">
            The <code className="bg-emerald-100 dark:bg-emerald-800 px-1 rounded font-bold">super()</code> function allows the child class to call methods from the parent class automatically, usually the constructor.
          </p>
          <CodeSnippetBlock 
            title="Super Example"
            codeSnippet={`class Person:\n    def __init__(self, name):\n        self.name = name\n\nclass Student(Person):\n    def __init__(self, name, age):\n        super().__init__(name) # Calls parent init\n        self.age = age\n    \n    def display(self):\n        print("Name:", self.name)\n        print("Age:", self.age)\n\ns1 = Student("Issac", 19)\ns1.display()`}
          />
          <div className="mt-4 p-4 bg-emerald-100/50 dark:bg-emerald-800/30 rounded-lg text-emerald-900 dark:text-emerald-200 text-sm">
            <strong>Output:</strong><br/>
            Name: Issac<br/>
            Age: 19
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/10 p-8 rounded-2xl shadow-sm border border-purple-100 dark:border-purple-800/30">
          <div className="flex items-center mb-6">
            <RefreshCw className="w-8 h-8 text-purple-500 mr-3" />
            <h2 className="text-2xl font-bold dark:text-purple-100">8. Method Overriding</h2>
          </div>
          <p className="mb-4 text-purple-900 dark:text-purple-200">
            A child class can override a parent class method by defining a method with the exact same name. The child method replaces the parent method.
          </p>
          <CodeSnippetBlock 
            title="Override Example"
            codeSnippet={`class Animal:\n    def sound(self):\n        print("Animal makes sound")\n\nclass Dog(Animal):\n    def sound(self):\n        print("Dog barks") # Replaces parent\n\nd = Dog()\nd.sound()`}
          />
          <div className="mt-4 p-4 bg-purple-100/50 dark:bg-purple-800/30 rounded-lg text-purple-900 dark:text-purple-200 text-sm">
            <strong>Output:</strong><br/>
            Dog barks
          </div>
        </div>
      </section>

  {/* 7. Types of Inheritance */}
  <section className="max-w-6xl mx-auto mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
            <TreeDeciduous className="w-8 h-8 text-teal-500 mr-3" />
            7. Types of Inheritance in Python
          </h2>
          <p className="text-slate-600 dark:text-slate-400">Python supports several powerful ways to inherit attributes between classes.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-3 flex items-center text-blue-600 dark:text-blue-400">
              <span className="bg-blue-100 dark:bg-blue-900 w-8 h-8 flex items-center justify-center rounded-lg mr-3">1</span>
              Single Inheritance
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">A child class inherits from one parent class.</p>
            <div className="flex items-center justify-center mb-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl font-mono text-sm">
              <div className="flex flex-col items-center">
                <div className="border border-blue-300 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/50 px-3 py-1 rounded">Parent</div>
                <div className="text-slate-400 my-1">│</div>
                <div className="text-slate-400 my-1">▼</div>
                <div className="border border-emerald-300 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-900/50 px-3 py-1 rounded">Child</div>
              </div>
            </div>
            <CodeSnippetBlock codeSnippet={`class Animal:\n    def speak(self): print("Sound")\n\nclass Dog(Animal): pass\n\nd = Dog()\nd.speak() # Sound`} />
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-3 flex items-center text-purple-600 dark:text-purple-400">
              <span className="bg-purple-100 dark:bg-purple-900 w-8 h-8 flex items-center justify-center rounded-lg mr-3">2</span>
              Multiple Inheritance
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">A child class inherits from more than one parent class.</p>
            <div className="flex items-center justify-center mb-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl font-mono text-sm relative">
                <div className="flex gap-8 mb-8">
                   <div className="border border-purple-300 dark:border-purple-700 bg-purple-50 dark:bg-purple-900/50 px-3 py-1 rounded z-10">Parent1</div>
                   <div className="border border-purple-300 dark:border-purple-700 bg-purple-50 dark:bg-purple-900/50 px-3 py-1 rounded z-10">Parent2</div>
                </div>
                <div className="absolute top-10 left-1/2 -ml-[1px] w-[60px] h-[30px] border-l-2 border-r-2 border-b-2 border-slate-300 dark:border-slate-600 rounded-b-lg -translate-x-1/2"></div>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
                   <div className="text-slate-400 mb-1">▼</div>
                   <div className="border border-emerald-300 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-900/50 px-3 py-1 rounded">Child</div>
                </div>
            </div>
            <CodeSnippetBlock codeSnippet={`class Father:\n    def skill1(self): print("Driving")\nclass Mother:\n    def skill2(self): print("Cooking")\n\nclass Child(Father, Mother): pass`} />
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-3 flex items-center text-orange-600 dark:text-orange-400">
              <span className="bg-orange-100 dark:bg-orange-900 w-8 h-8 flex items-center justify-center rounded-lg mr-3">3</span>
              Multilevel Inheritance
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Inheritance chain across multiple standard classes.</p>
            <div className="flex items-center justify-center mb-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl font-mono text-sm">
               <div className="flex flex-col items-center">
                 <div className="border border-orange-300 px-3 py-1 rounded text-orange-600">Grandparent</div>
                 <div className="text-slate-400">▼</div>
                 <div className="border border-blue-300 px-3 py-1 rounded text-blue-600">Parent</div>
                 <div className="text-slate-400">▼</div>
                 <div className="border border-emerald-300 px-3 py-1 rounded text-emerald-600">Child</div>
               </div>
            </div>
            <CodeSnippetBlock codeSnippet={`class Grandparent:\n    def house(self): print("House")\nclass Parent(Grandparent): pass\nclass Child(Parent): pass\n\nc = Child()\nc.house() # Accesses deepest root`} />
          </div>

          {/* Card 4 */}
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-3 flex items-center text-rose-600 dark:text-rose-400">
              <span className="bg-rose-100 dark:bg-rose-900 w-8 h-8 flex items-center justify-center rounded-lg mr-3">4</span>
              Hierarchical Inheritance
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Multiple child classes inherit from exactly one parent.</p>
             <div className="flex items-center justify-center mb-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl font-mono text-sm relative h-[130px]">
                <div className="absolute top-4 border border-rose-300 dark:border-rose-700 bg-rose-50 dark:bg-rose-900/50 px-3 py-1 rounded z-10 w-24 text-center">Parent</div>
                <div className="absolute top-10 left-1/2 -ml-[1px] w-[80px] h-[30px] border-l-2 border-r-2 border-t-2 border-slate-300 dark:border-slate-600 rounded-t-lg -translate-x-1/2"></div>
                <div className="absolute bottom-4 left-1/2 -translate-x-[60px] flex flex-col items-center">
                   <div className="text-slate-400 mb-1">▼</div>
                   <div className="border border-emerald-300 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-900/50 px-2 py-1 rounded text-xs">Child 1</div>
                </div>
                <div className="absolute bottom-4 left-1/2 translate-x-[15px] flex flex-col items-center">
                   <div className="text-slate-400 mb-1">▼</div>
                   <div className="border border-emerald-300 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-900/50 px-2 py-1 rounded text-xs">Child 2</div>
                </div>
            </div>
            <CodeSnippetBlock codeSnippet={`class Vehicle:\n    def start(self): print("Start")\n\nclass Car(Vehicle): pass\nclass Bike(Vehicle): pass`} />
          </div>

        </div>
      </section>

  {/* 9. MRO & 10. Real World Example */}
  <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 bg-amber-50 dark:bg-amber-900/10 p-8 rounded-2xl shadow-sm border border-amber-200 dark:border-amber-800/30">
          <h2 className="text-2xl font-bold mb-6 flex items-center text-amber-900 dark:text-amber-400">
            <Combine className="w-6 h-6 mr-3" />
            9. Execution Flow (MRO)
          </h2>
          <p className="text-amber-800 dark:text-amber-200 mb-6">
            When a method is called, Python follows the <strong>Method Resolution Order (MRO)</strong> to find it:
          </p>
          <div className="pl-4 border-l-4 border-amber-400 space-y-4 text-amber-900 dark:text-amber-100 font-medium">
             <div className="bg-white/50 dark:bg-black/20 p-3 rounded shadow-sm flex items-center">
                 1. Create Object
             </div>
             <div className="flex justify-center text-amber-400">▼</div>
             <div className="bg-white/50 dark:bg-black/20 p-3 rounded shadow-sm">
                 2. Search Method in <strong className="text-amber-600 dark:text-amber-400">Child Class</strong>
             </div>
             <div className="flex justify-center text-amber-400">▼ If Not Found</div>
             <div className="bg-white/50 dark:bg-black/20 p-3 rounded shadow-sm">
                 3. Search in <strong className="text-amber-600 dark:text-amber-400">Parent Class</strong>
             </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Box className="w-6 h-6 text-blue-500 mr-3" />
            10. Real-World Example
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            Example: <strong>Employee Management System</strong>
          </p>
          <CodeSnippetBlock codeSnippet={`class Employee:\n    def __init__(self, name):\n        self.name = name\n    def show(self):\n        print("Employee:", self.name)\n\nclass Manager(Employee):\n    def department(self):\n        print("Department: IT")\n\nm = Manager("Issac")\nm.show()         # Prints -> Employee: Issac\nm.department()   # Prints -> Department: IT`} />
        </div>
      </section>

  {/* 11. Mistakes & 12. Dev Advice */}
  <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
          <h2 className="text-3xl font-extrabold mb-6 flex items-center relative z-10">
            <Star className="w-8 h-8 mr-3 text-yellow-300" />
            12. Personal Developer Advice
          </h2>
          <p className="text-indigo-100 mb-8 font-medium italic relative z-10">From a Developer with 15+ years of Python experience:</p>
          
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <h3 className="font-bold text-xl mb-3 flex items-center"><Check className="text-emerald-300 mr-2" /> True Relationship</h3>
              <p className="text-sm text-indigo-100 mb-3">
                Use inheritance ONLY when there is a true relationship.
              </p>
              <div className="text-xs space-y-2 font-mono bg-black/30 p-3 rounded">
                <div className="text-emerald-300">✔ Vehicle → Car</div>
                <div className="text-emerald-300">✔ Animal → Dog</div>
                <div className="text-rose-300 mt-2">❌ Car → Engine</div>
                <div className="text-white/60 text-[10px] mt-1">(This is composition, not inheritance)</div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <h3 className="font-bold text-xl mb-3 flex items-center"><AlertTriangle className="text-yellow-300 mr-2" /> Shallow Chains</h3>
              <p className="text-sm text-indigo-100 mb-3">Avoid deep inheritance chains.</p>
              <div className="text-xs space-y-2 font-mono bg-black/30 p-3 rounded">
                <div className="text-rose-300">Bad Design:</div>
                <div className="text-white">A → B → C → D → E</div>
                <div className="text-indigo-200 text-[10px] mt-2">Deep inheritance makes code impossible to track and maintain.</div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <h3 className="font-bold text-xl mb-3 flex items-center"><Layers className="text-blue-300 mr-2" /> Prefer Composition</h3>
              <p className="text-sm text-indigo-100 mb-3">Instead of heavy inheritance, sometimes using objects inside classes is much better for flexibility.</p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-8 border-b border-slate-200 dark:border-slate-700 pb-4 flex items-center">
          <AlertTriangle className="w-8 h-8 text-rose-500 mr-3" />
          11. Common Beginner Mistakes
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-lg mb-4 flex items-center text-slate-800 dark:text-slate-200">
              <span className="bg-rose-100 text-rose-600 px-2 py-1 rounded text-xs mr-3">Mistake 1</span> 
              Forgetting Parent Class Name
            </h4>
            <div className="space-y-3 font-mono text-sm">
              <div className="bg-rose-50 dark:bg-rose-900/20 p-3 rounded border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300">
                <span className="font-bold uppercase text-[10px] block mb-1">Wrong ❌</span>
                class Student:
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300">
                <span className="font-bold uppercase text-[10px] block mb-1">Correct ✔</span>
                class Student(Person):
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-lg mb-4 flex items-center text-slate-800 dark:text-slate-200">
              <span className="bg-rose-100 text-rose-600 px-2 py-1 rounded text-xs mr-3">Mistake 2</span> 
              Not Using super()
            </h4>
            <div className="space-y-3 font-mono text-sm">
              <div className="bg-rose-50 dark:bg-rose-900/20 p-3 rounded border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300">
                <span className="font-bold uppercase text-[10px] block mb-1">Wrong ❌</span>
                def __init__(self):<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;pass
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300">
                <span className="font-bold uppercase text-[10px] block mb-1">Better ✔</span>
                def __init__(self):<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;super().__init__()
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PythonInheritance;