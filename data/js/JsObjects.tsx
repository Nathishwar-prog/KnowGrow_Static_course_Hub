import React, { useState } from 'react';
import { Box, Key, Edit3, Trash2, Check, Copy, Play, Terminal, Layers, User, Plus } from 'lucide-react';

// --- Utility Components ---

const CodeSnippetBlock = ({ codeSnippet, language = 'javascript', title }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="mb-6 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
      {title && (
        <div className="bg-gray-50 dark:bg-gray-800 px-4 py-2 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{title}</span>
          <div className="flex space-x-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
          </div>
        </div>
      )}
      <div className="relative group bg-gray-900">
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-yellow-500 hover:text-gray-900 transition-colors border border-gray-700"
            title="Copy code"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </div>
        <pre className="p-4 overflow-x-auto text-sm font-mono text-yellow-300 leading-relaxed">
          <code>{codeSnippet}</code>
        </pre>
      </div>
    </div>
  );
};

// --- Main Component ---

const JsObjects = () => {
  const [activeTab, setActiveTab] = useState('access'); // access, modify, methods
  const [consoleOutput, setConsoleOutput] = useState([]);

  // Interactive Object State
  const [person, setPerson] = useState({
    name: "Hari",
    age: 22,
    city: "Delhi"
  });

  const runDemo = (action) => {
    setConsoleOutput([]);
    let code;

    switch (action) {
      case 'dot':
        code = `> console.log(person.name);\n> "${person.name}"`;
        break;
      case 'bracket':
        code = `> console.log(person["city"]);\n> "${person.city}"`;
        break;
      case 'update':
        setPerson(prev => ({ ...prev, age: prev.age + 1 }));
        code = `> person.age = ${person.age + 1};\n> console.log(person.age);\n> ${person.age + 1}`;
        break;
      case 'add':
        setPerson(prev => ({ ...prev, country: "India" }));
        code = `> person.country = "India";\n> console.log(person);\n> { name: "${person.name}", age: ${person.age}, city: "${person.city}", country: "India" }`;
        break;
      case 'delete':
        const { city, ...rest } = person;
        setPerson(rest);
        code = `> delete person.city;\n> console.log(person);\n> { name: "${person.name}", age: ${person.age} }`;
        break;
      case 'method':
        code = `> person.greet();\n> "Hello, my name is ${person.name}"`;
        break;
      default:
        return;
    }

    setConsoleOutput(code.split('\n'));
  };

  const resetObject = () => {
    setPerson({ name: "Hari", age: 22, city: "Delhi" });
    setConsoleOutput([]);
  };

  const getObjectData = () => {
    switch (activeTab) {
      case 'access':
        return {
          title: 'Accessing Properties',
          description: 'Use dot notation (person.name) or bracket notation (person["name"]).',
          code: `let person = {
  name: "Hari",
  age: 22
};

console.log(person.name); // Hari
console.log(person["age"]); // 22`
        };
      case 'modify':
        return {
          title: 'Modifying Objects',
          description: 'Objects are mutable. You can add, update, or delete properties.',
          code: `let car = { brand: "Toyota" };

car.model = "Corolla"; // Add
car.brand = "Honda";   // Update
delete car.brand;      // Delete`
        };
      case 'methods':
        return {
          title: 'Object Methods',
          description: 'Functions stored as object properties. Use "this" to access other properties.',
          code: `let person = {
  name: "Hari",
  greet: function() {
    return "Hello " + this.name;
  }
};

console.log(person.greet());`
        };
      default:
        return {};
    }
  };

  const data = getObjectData();

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-yellow-50 dark:from-gray-900 dark:to-gray-900 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl mb-4">
          <Box className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          JavaScript Objects
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          The building blocks of JS. Store data in key-value pairs and create complex structures.
        </p>
      </header>

      {/* Interactive Object Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Terminal className="w-6 h-6 mr-2 text-yellow-500" />
            Object Lab
          </h2>
          <button
            onClick={resetObject}
            className="flex items-center px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
          >
            Reset Object
          </button>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Controls */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-100 dark:border-gray-700">
                Current Object State
              </h3>

              {/* Visual Object Representation */}
              <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg font-mono text-sm mb-6 border border-gray-200 dark:border-gray-700">
                <span className="text-purple-600 dark:text-purple-400">const</span> <span className="text-blue-600 dark:text-blue-400">person</span> = {'{'}
                <div className="pl-4 space-y-1 mt-1">
                  {Object.entries(person).map(([key, value]) => (
                    <div key={key} className="animate-fade-in">
                      <span className="text-red-500">{key}</span>: <span className="text-green-600 dark:text-green-400">"{value}"</span>,
                    </div>
                  ))}
                  {/* Method visualization */}
                  <div className="text-gray-500 italic">// greet() method exists</div>
                </div>
                {'}'};
              </div>

              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => { setActiveTab('access'); runDemo('dot'); }}
                  className="flex items-center justify-center p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 transition-all text-sm font-bold text-gray-700 dark:text-gray-300"
                >
                  <Key className="w-4 h-4 mr-2 text-blue-500" /> Access (Dot)
                </button>
                <button
                  onClick={() => { setActiveTab('access'); runDemo('bracket'); }}
                  className="flex items-center justify-center p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 transition-all text-sm font-bold text-gray-700 dark:text-gray-300"
                >
                  <Box className="w-4 h-4 mr-2 text-blue-500" /> Access [" "]
                </button>
                <button
                  onClick={() => { setActiveTab('modify'); runDemo('update'); }}
                  className="flex items-center justify-center p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-green-50 dark:hover:bg-green-900/20 hover:border-green-300 transition-all text-sm font-bold text-gray-700 dark:text-gray-300"
                >
                  <Edit3 className="w-4 h-4 mr-2 text-green-500" /> Update Age
                </button>
                <button
                  onClick={() => { setActiveTab('modify'); runDemo('add'); }}
                  className="flex items-center justify-center p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-green-50 dark:hover:bg-green-900/20 hover:border-green-300 transition-all text-sm font-bold text-gray-700 dark:text-gray-300"
                >
                  <Plus className="w-4 h-4 mr-2 text-green-500" /> Add Country
                </button>
                <button
                  onClick={() => { setActiveTab('modify'); runDemo('delete'); }}
                  className="flex items-center justify-center p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-red-50 dark:hover:bg-red-900/20 hover:border-red-300 transition-all text-sm font-bold text-gray-700 dark:text-gray-300"
                >
                  <Trash2 className="w-4 h-4 mr-2 text-red-500" /> Delete City
                </button>
                <button
                  onClick={() => { setActiveTab('methods'); runDemo('method'); }}
                  className="flex items-center justify-center p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:border-purple-300 transition-all text-sm font-bold text-gray-700 dark:text-gray-300"
                >
                  <Play className="w-4 h-4 mr-2 text-purple-500" /> Call Method
                </button>
              </div>
            </div>
          </div>

          {/* Visualization & Code */}
          <div className="lg:col-span-7 space-y-6">
            {/* Live Preview Area */}
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 min-h-[300px] flex flex-col relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#eab308 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-gray-700 dark:text-gray-300">{data.title}</h3>
                </div>

                {/* Console Output Simulator */}
                <div className="bg-black rounded-lg border border-gray-800 p-4 font-mono text-sm h-48 overflow-y-auto shadow-inner flex-1 mb-6">
                  <div className="text-gray-500 border-b border-gray-800 pb-1 mb-2">Console Output</div>
                  {consoleOutput.length === 0 ? (
                    <span className="text-gray-600 italic">Interact with the object to see results...</span>
                  ) : (
                    consoleOutput.map((line, i) => (
                      <div key={i} className={`mb-1 animate-fade-in ${line.startsWith('>') ? 'text-yellow-300' :
                          'text-green-400'
                        }`}>
                        {line}
                      </div>
                    ))
                  )}
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  {data.description}
                </p>
              </div>
            </div>

            {/* Generated Code */}
            <CodeSnippetBlock codeSnippet={data.code} title={`${data.title} Syntax`} />
          </div>
        </div>
      </section>

      {/* Concepts Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          Advanced Concepts
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Nested Objects */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Nested Objects</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Objects can contain other objects inside them.
            </p>
            <CodeSnippetBlock
              title="Nested Example"
              codeSnippet={`let student = {
  name: "Hari",
  marks: { 
    math: 90, 
    english: 85 
  }
};
console.log(student.marks.math); // 90`}
            />
          </div>

          {/* 'this' Keyword */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-3">
                <User className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">'this' Keyword</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Refers to the current object instance inside a method.
            </p>
            <CodeSnippetBlock
              title="'this' Example"
              codeSnippet={`let car = {
  brand: "Toyota",
  showBrand() {
    console.log(this.brand);
  }
};`}
            />
          </div>

        </div>
      </section>

    </div>
  );
};

export default JsObjects;