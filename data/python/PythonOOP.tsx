import React, { useState } from 'react';
import {
  Code, BookOpen, User, RefreshCw, Box, Play, Target,
  Cpu, LayoutTemplate, Briefcase, Trash2, Edit3, Settings,
  Shield, Network, Workflow, Library, Award, ChevronRight,
  TrendingDown, CheckCircle2, AlertTriangle, Lightbulb, CheckSquare,
  ArrowDown, Check, Columns, Activity, Terminal
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
          {copied ? <Check size={14} /> : <Code size={14} />}
        </button>
        <pre className="p-4 overflow-x-auto text-sm font-mono text-blue-300 leading-relaxed">
          <code>{codeSnippet}</code>
        </pre>
      </div>
    </div>
  );
};

const PythonOOP: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);

  const runDemo = (action: string) => {
    switch (action) {
      case 'simple_class':
        setConsoleOutput([
          ">>> class Student:",
          "...     name = 'Issac'",
          ">>> s1 = Student()",
          ">>> print(s1.name)",
          "Issac"
        ]);
        break;
      case 'init_method':
        setConsoleOutput([
          ">>> class Student:",
          "...     def __init__(self, name, age):",
          "...         self.name = name",
          "...         self.age = age",
          ">>> s1 = Student('Issac', 19)",
          ">>> print(s1.name, s1.age)",
          "Issac 19"
        ]);
        break;
      case 'self_param':
        setConsoleOutput([
          ">>> class Person:",
          "...     def greet(self):",
          "...         print('Hello')",
          ">>> p1 = Person()",
          ">>> p1.greet()",
          "Hello"
        ]);
        break;
      case 'methods':
        setConsoleOutput([
          ">>> class Student:",
          "...     def __init__(self, name):",
          "...         self.name = name",
          "...     def show(self):",
          "...         print('Student name:', self.name)",
          ">>> s1 = Student('Issac')",
          ">>> s1.show()",
          "Student name: Issac"
        ]);
        break;
      case 'modify_delete':
        setConsoleOutput([
          ">>> s1 = Student('Issac')",
          ">>> s1.name = 'David' # Modifying",
          ">>> print(s1.name)",
          "David",
          ">>> del s1.name # Deleting property",
          ">>> print(s1.name)",
          "AttributeError: 'Student' object has no attribute 'name'"
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
          <Box className="w-10 h-10 text-indigo-500 dark:text-indigo-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">Python OOP</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Object-Oriented Programming (OOP) is a programming paradigm that organizes code using objects and classes. Instead of writing long procedural programs, OOP allows developers to model real-world entities like <span className="font-bold text-slate-800 dark:text-slate-200">Students, Cars, Employees, and Products</span>.
        </p>
      </header>

      {/* Intro Code & Concepts */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <h2 className="text-2xl font-bold mb-4 flex items-center text-slate-900 dark:text-white"><BookOpen className="w-6 h-6 mr-3 text-emerald-500" /> Intro to OOP</h2>
          <p className="mb-4 text-slate-600 dark:text-slate-400 text-sm">
            In Python, OOP helps create modular, reusable, and scalable programs. Here is an example of a simple class:
          </p>
          <CodeSnippetBlock codeSnippet={`class Student:\n    name = "Issac"\n\ns1 = Student()\nprint(s1.name) # Issac`} />
        </div>

        <div className="grid grid-rows-2 gap-6">
          <div className="bg-indigo-50 dark:bg-indigo-900/10 p-6 rounded-2xl border border-indigo-200 dark:border-indigo-800/50 shadow-sm flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-3 flex items-center text-indigo-800 dark:text-indigo-400"><LayoutTemplate className="w-5 h-5 mr-3" /> 2. What is a Class?</h3>
            <p className="text-sm text-indigo-700 dark:text-indigo-300 mb-2">A class is a blueprint used to create objects. Think of a class like a template.</p>
            <div className="bg-white dark:bg-slate-900 p-3 rounded font-mono text-xs border border-indigo-100 dark:border-indigo-800">
              class Car:<br/>  brand = "Toyota"<br/><br/><span className="text-slate-500"># Car → Class<br/># brand → Attribute</span>
            </div>
          </div>
          <div className="bg-emerald-50 dark:bg-emerald-900/10 p-6 rounded-2xl border border-emerald-200 dark:border-emerald-800/50 shadow-sm flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-3 flex items-center text-emerald-800 dark:text-emerald-400"><Target className="w-5 h-5 mr-3" /> 3. What is an Object?</h3>
            <p className="text-sm text-emerald-700 dark:text-emerald-300 mb-2">An object is an instance of a class.</p>
            <div className="bg-white dark:bg-slate-900 p-3 rounded font-mono text-xs border border-emerald-100 dark:border-emerald-800">
              c1 = Car()<br/>print(c1.brand) <span className="text-slate-500"># Toyota</span><br/><br/><span className="text-slate-500"># c1 → Object</span>
            </div>
          </div>
        </div>
      </section>

      {/* Anatomy: __init__, self, Methods */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 flex items-center border-b border-slate-200 dark:border-slate-700 pb-4">
          <Settings className="w-8 h-8 mr-3 text-slate-500" /> Class Anatomy & Methods
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col">
             <h3 className="font-bold text-lg mb-4 text-purple-600 dark:text-purple-400 flex items-center"><Activity className="mr-2" /> 4. The `__init__` Method</h3>
             <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 flex-grow">
               The <code className="bg-slate-100 dark:bg-slate-900 px-1 rounded">__init__()</code> method is a special method (constructor) that runs when an object is created to initialize attributes.
             </p>
             <CodeSnippetBlock codeSnippet={`class Student:\n  def __init__(self, name, age):\n    self.name = name\n    self.age = age\n\ns1 = Student("Issac", 19)\nprint(s1.name) # Issac`} />
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col">
             <h3 className="font-bold text-lg mb-4 text-rose-600 dark:text-rose-400 flex items-center"><User className="mr-2" /> 5. The `self` Parameter</h3>
             <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 flex-grow">
               <code className="bg-slate-100 dark:bg-slate-900 px-1 rounded">self</code> refers to the current object instance. It allows access to object properties and methods within the class.
             </p>
             <CodeSnippetBlock codeSnippet={`class Person:\n  def greet(self):\n    print("Hello")\n\np1 = Person()\np1.greet() # Hello`} />
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col">
             <h3 className="font-bold text-lg mb-4 text-blue-600 dark:text-blue-400 flex items-center"><Briefcase className="mr-2" /> 6. Object Methods</h3>
             <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 flex-grow">
               Methods are functions defined inside a class that operate on the object's data.
             </p>
             <CodeSnippetBlock codeSnippet={`class Student:\n  def __init__(self, name):\n    self.name = name\n\n  def show(self):\n    print("Name:", self.name)\n\ns1 = Student("Issac")\ns1.show()`} />
          </div>
        </div>
      </section>

      {/* Interactive Testing Console Lab - OOP Simulator */}
      <section className="max-w-5xl mx-auto mb-16">
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-lg">
          <div className="bg-slate-100 dark:bg-slate-900 p-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
            <h2 className="text-xl font-bold flex items-center"><Terminal className="mr-2" /> OOP Sandbox Console</h2>
            <button onClick={() => runDemo('clear')} className="p-2 bg-slate-200 dark:bg-slate-800 rounded-lg hover:bg-slate-300 transition text-slate-600 dark:text-slate-300 font-bold text-xs flex"><RefreshCw className="w-4 h-4 mr-1"/> Clear</button>
          </div>
          <div className="grid md:grid-cols-2">
            <div className="p-4 border-r border-slate-200 dark:border-slate-700 space-y-2 text-sm font-bold bg-slate-50 dark:bg-slate-900/50">
               <button onClick={() => runDemo('simple_class')} className="w-full text-left p-2 border border-slate-200 dark:border-slate-700 rounded hover:border-blue-500 bg-white dark:bg-slate-800 transition">1. Simple Class & Object</button>
               <button onClick={() => runDemo('init_method')} className="w-full text-left p-2 border border-slate-200 dark:border-slate-700 rounded hover:border-purple-500 bg-white dark:bg-slate-800 transition">2. The __init__ Constructor</button>
               <button onClick={() => runDemo('self_param')} className="w-full text-left p-2 border border-slate-200 dark:border-slate-700 rounded hover:border-emerald-500 bg-white dark:bg-slate-800 transition">3. The self Parameter</button>
               <button onClick={() => runDemo('methods')} className="w-full text-left p-2 border border-slate-200 dark:border-slate-700 rounded hover:border-orange-500 bg-white dark:bg-slate-800 transition">4. Class Methods Executing</button>
               <button onClick={() => runDemo('modify_delete')} className="w-full text-left p-2 border border-slate-200 dark:border-slate-700 rounded hover:border-rose-500 bg-white dark:bg-slate-800 transition">5. Modifying & Deleting Properties (10/11)</button>
            </div>
            <div className="bg-slate-900 p-4 font-mono text-sm leading-relaxed overflow-y-auto h-72 relative">
              <div className="text-xs font-bold text-slate-500 mb-2 border-b border-slate-800 pb-2">Python Runtime Simulator</div>
              {consoleOutput.length === 0 ? <span className="text-slate-600">Click a scenario to execute class logic...</span> : consoleOutput.map((l, i) => (
                <div key={i} className={l.startsWith('>>>') || l.startsWith('...') ? 'text-blue-400' : l.includes('Error') ? 'text-rose-400 font-bold' : 'text-slate-300'}>{l}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Flow & 8. Core Concepts */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5 bg-slate-900 text-white p-8 rounded-2xl shadow-xl flex flex-col items-center border border-slate-800 text-sm">
           <h2 className="text-xl font-bold mb-6 text-emerald-400">7. OOP Execution Flow</h2>
           <div className="flex flex-col items-center space-y-2 font-mono text-slate-300 w-full px-8">
             <div className="bg-slate-800 p-3 rounded border border-slate-700 w-full text-center shadow">1. Create Class (Student)</div>
             <ArrowDown className="w-5 h-5 text-slate-500" />
             <div className="bg-slate-800 p-3 rounded border border-slate-700 w-full text-center shadow">2. Create Object (s1)</div>
             <ArrowDown className="w-5 h-5 text-slate-500" />
             <div className="bg-slate-800 p-3 rounded border border-slate-700 w-full text-center shadow">3. Initialize Attributes (__init__)</div>
             <ArrowDown className="w-5 h-5 text-slate-500" />
             <div className="bg-slate-800 p-3 rounded border border-slate-700 w-full text-center shadow">4. Call Methods (show())</div>
             <ArrowDown className="w-5 h-5 text-slate-500" />
             <div className="bg-emerald-900/40 p-3 rounded border border-emerald-600/50 w-full text-center shadow text-emerald-300 font-bold">5. Program Output</div>
           </div>
        </div>

        <div className="lg:col-span-7 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
           <h2 className="text-2xl font-bold mb-6 flex items-center text-slate-900 dark:text-white"><Library className="w-6 h-6 mr-3 text-indigo-500" /> 8. Core Concepts of OOP</h2>
           <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm">OOP is based on four major principles that help build structured and maintainable applications.</p>
           
           <div className="grid grid-cols-2 gap-4">
             <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-900/50">
               <h4 className="font-bold text-emerald-600 dark:text-emerald-400 flex mb-2"><Shield className="w-4 h-4 mr-2" /> Encapsulation</h4>
               <p className="text-xs text-slate-600 dark:text-slate-400">Hiding internal data and requiring method interaction.</p>
             </div>
             <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-900/50">
               <h4 className="font-bold text-blue-600 dark:text-blue-400 flex mb-2"><Network className="w-4 h-4 mr-2" /> Inheritance</h4>
               <p className="text-xs text-slate-600 dark:text-slate-400">Reusing and extending code properties from another class.</p>
             </div>
             <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-900/50">
               <h4 className="font-bold text-purple-600 dark:text-purple-400 flex mb-2"><Columns className="w-4 h-4 mr-2" /> Polymorphism</h4>
               <p className="text-xs text-slate-600 dark:text-slate-400">One interface managing multiple implementations.</p>
             </div>
             <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-900/50">
               <h4 className="font-bold text-rose-600 dark:text-rose-400 flex mb-2"><Workflow className="w-4 h-4 mr-2" /> Abstraction</h4>
               <p className="text-xs text-slate-600 dark:text-slate-400">Hiding complex implementation details from the user.</p>
             </div>
           </div>
        </div>
      </section>

      {/* 9. Employee & 12. Real-World Bank Example */}
      <section className="max-w-6xl mx-auto mb-16">
         <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-100 dark:bg-slate-800/80 p-6 rounded-2xl border border-slate-300 dark:border-slate-700">
               <h3 className="text-lg font-bold mb-4">9. Example: Simple Employee Class</h3>
               <CodeSnippetBlock codeSnippet={`class Employee:\n  def __init__(self, name, salary):\n    self.name = name\n    self.salary = salary\n\n  def display(self):\n    print("Employee:", self.name)\n    print("Salary:", self.salary)\n\ne1 = Employee("John", 50000)\ne1.display()\n\n# Output:\n# Employee: John\n# Salary: 50000`} />
            </div>

            <div className="bg-slate-800 dark:bg-slate-900 text-slate-100 p-6 rounded-2xl border border-slate-700 shadow-xl overflow-hidden relative">
               <div className="absolute top-4 right-4 opacity-20"><Briefcase className="w-16 h-16" /></div>
               <h3 className="text-lg font-bold mb-4 text-emerald-400">12. Real-World Application</h3>
               <p className="text-xs text-slate-400 mb-4 z-10 relative">Example: Bank Account System. OOP is widely used in Banking systems, E-commerce platforms, Game development, and Web applications.</p>
               <CodeSnippetBlock codeSnippet={`class BankAccount:\n  def __init__(self, owner, balance):\n    self.owner = owner\n    self.balance = balance\n\n  def deposit(self, amount):\n    self.balance += amount\n    print("New balance:", self.balance)\n\nacc = BankAccount("Issac", 1000)\nacc.deposit(500) # New balance: 1500`} />
            </div>
         </div>
      </section>

      {/* 10 & 11 Property modification handled in Interactive Lab (Step 5) - But text shown here */}
      <section className="max-w-6xl mx-auto mb-16 grid md:grid-cols-2 gap-6">
         <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center">
            <Edit3 className="w-8 h-8 text-blue-500 mr-4 flex-shrink-0" />
            <div>
              <h3 className="font-bold mb-1">10. Modifying Properties</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Object properties can be changed after creation simply by assigning a new value: <code className="bg-slate-100 dark:bg-slate-900 p-1 rounded font-mono text-xs">s1.name = "David"</code>.</p>
            </div>
         </div>
         <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center">
            <Trash2 className="w-8 h-8 text-rose-500 mr-4 flex-shrink-0" />
            <div>
              <h3 className="font-bold mb-1">11. Deleting Properties & Objects</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">You can remove attributes or entirely delete objects using the <strong className="text-rose-500">del</strong> keyword: <code className="bg-slate-100 dark:bg-slate-900 p-1 rounded font-mono text-xs">del s1.name</code> and <code className="bg-slate-100 dark:bg-slate-900 p-1 rounded font-mono text-xs">del s1</code>.</p>
            </div>
         </div>
      </section>


      {/* 13 & 14. Errors & Developer Tips */}
      <section className="max-w-6xl mx-auto mb-16 space-y-6">
        <h2 className="text-2xl font-bold border-b border-slate-200 dark:border-slate-700 pb-2">13. Common Mistakes & 14. Dev Tips</h2>
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-900/50 p-6 rounded-2xl">
             <h3 className="font-bold flex items-center text-rose-700 dark:text-rose-400 mb-4"><AlertTriangle className="mr-2"/> Common Beginner Mistakes</h3>
             <ul className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
               <li>
                 <strong className="block mb-1">1. Forgetting `self`</strong>
                 Methods defined in objects need `self` to map to the instance.<br/>
                 <span className="text-rose-500">❌ Wrong: def greet():</span><br/>
                 <span className="text-emerald-500">✅ Correct: def greet(self):</span>
               </li>
               <li>
                 <strong className="block mb-1">2. Not Using a Constructor</strong>
                 Without the <code className="bg-white dark:bg-slate-800 font-mono px-1 rounded">__init__</code> method, setting up an object's initial required runtime state configuration becomes severely difficult.
               </li>
             </ul>
          </div>
          
          <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-900/50 p-6 rounded-2xl">
             <h3 className="font-bold flex items-center text-indigo-700 dark:text-indigo-400 mb-4"><Lightbulb className="mr-2"/> Dev Tips (15+ Years Exp)</h3>
             <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
               <li>
                 <strong className="block mb-1"><span className="text-indigo-500">Tip 1:</span> Design Classes Around Real Objects</strong>
                 Names like `Car`, `Student`, `Product`, `Order` make code instantly understandable.
               </li>
               <li>
                 <strong className="block mb-1"><span className="text-indigo-500">Tip 2:</span> Keep Classes Focused</strong>
                 One class = one responsibility. Ex: <span className="font-mono bg-white dark:bg-slate-800 px-1 rounded text-xs">User</span> (Auth), <span className="font-mono bg-white dark:bg-slate-800 px-1 rounded text-xs">Payment</span> (Money).
               </li>
               <li>
                 <strong className="block mb-1"><span className="text-indigo-500">Tip 3:</span> PascalCase Naming</strong>
                 Class names should explicitly follow PascalCase conventions: `StudentRecord`, `BankAccount`, etc.
               </li>
             </ul>
          </div>
        </div>
      </section>

      {/* 15. Practice Exercises */}
      <section className="max-w-4xl mx-auto mb-16 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 shadow-sm">
        <h2 className="text-2xl font-bold flex items-center mb-6"><CheckSquare className="w-6 h-6 mr-3 text-emerald-500" /> 15. Practice Exercises</h2>
        <div className="space-y-4 font-mono text-sm">
          <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg flex items-start border-l-4 border-l-blue-500">
            <span className="bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 p-1 rounded mr-3 text-xs">Ex 1</span> Create a class <strong className="mx-1">Car</strong> with attributes: brand, model, year.
          </div>
          <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg flex items-start border-l-4 border-l-purple-500">
            <span className="bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200 p-1 rounded mr-3 text-xs">Ex 2</span> Create a class <strong className="mx-1">Student</strong> with a method display().
          </div>
          <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg flex items-start border-l-4 border-l-rose-500">
            <span className="bg-rose-200 dark:bg-rose-800 text-rose-800 dark:text-rose-200 p-1 rounded mr-3 text-xs">Ex 3</span> Create a class <strong className="mx-1">Rectangle</strong> that calculates and retrieves the geometric area.
          </div>
        </div>
      </section>

    </div>
  );
};

export default PythonOOP;