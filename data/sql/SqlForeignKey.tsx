import React, { useState } from 'react';
import {
  Database, Zap, Check, Copy, Table2,
  Target, AlertTriangle, Lightbulb, Brain, Layers,
  CheckCircle2, XCircle, Link, Shield, Trash2, ArrowRight
} from 'lucide-react';

const CodeSnippetBlock = ({ codeSnippet, title, language = 'sql' }: { codeSnippet: string, title?: string, language?: string }) => {
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
      <div className="relative group bg-gray-900 flex-grow">
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-emerald-500 hover:text-white transition-colors border border-gray-700"
            title="Copy code"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </div>
        <pre className="p-4 overflow-x-auto text-sm font-mono text-emerald-300 leading-relaxed min-h-full">
          <code>{codeSnippet}</code>
        </pre>
      </div>
    </div>
  );
};

const SqlForeignKey: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-900/10 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-4 bg-indigo-100 dark:bg-indigo-900/40 rounded-3xl mb-6 shadow-sm border border-indigo-200 dark:border-indigo-800/50">
          <Link className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
          What is a Foreign Key?
        </h1>

        <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 max-w-3xl mx-auto text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-4 -mt-4 opacity-5 pointer-events-none">
            <CheckCircle2 className="w-32 h-32 text-indigo-500" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <span className="text-emerald-500 text-2xl mr-2">✅</span> Definition
          </h2>
          <p className="text-gray-700 dark:text-gray-300 font-medium mb-4 leading-relaxed bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl border border-indigo-100 dark:border-indigo-800/50">
            A <strong className="text-indigo-700 dark:text-indigo-300">Foreign Key</strong> is a column (or group of columns) in one table that refers to the <strong className="text-emerald-600 dark:text-emerald-400">Primary Key</strong> in another table. It creates a relationship between two tables.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
            <span className="text-gray-500 mr-4 font-bold uppercase tracking-wider mb-2 sm:mb-0">👉 IN SIMPLE WORDS:</span>
            <div className="flex items-center space-x-3 text-lg font-bold">
              <span className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 px-3 py-1 rounded-lg border border-emerald-200 dark:border-emerald-800">Primary Key = Parent</span>
              <ArrowRight className="text-gray-400" />
              <span className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300 px-3 py-1 rounded-lg border border-indigo-200 dark:border-indigo-800">Foreign Key = Child</span>
            </div>
          </div>
        </div>
      </header>

      {/* 2️⃣ Why Foreign Keys Are Important? */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-8 flex items-center">
          <span className="mr-3 text-4xl">🧠</span> 2️⃣ Why Foreign Keys Are Important?
        </h2>

        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {[
            { icon: <Shield className="w-6 h-6 text-emerald-500" />, text: "Data integrity" },
            { icon: <XCircle className="w-6 h-6 text-rose-500" />, text: "No invalid references" },
            { icon: <Layers className="w-6 h-6 text-indigo-500" />, text: "Structured relational database" },
            { icon: <Target className="w-6 h-6 text-amber-500" />, text: "Real-world relationship modeling" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex items-center">
              <div className="bg-gray-50 dark:bg-gray-900 p-2 rounded-lg mr-4 border border-gray-100 dark:border-gray-800">
                {item.icon}
              </div>
              <span className="font-bold text-gray-800 dark:text-gray-200 text-lg">{item.text}</span>
            </div>
          ))}
        </div>

        <div className="bg-rose-50 dark:bg-rose-900/20 p-4 rounded-xl border-l-4 border-l-rose-500 flex items-center">
          <AlertTriangle className="w-6 h-6 text-rose-500 mr-3 shrink-0" />
          <p className="font-bold text-rose-800 dark:text-rose-300 text-lg">
            Without foreign keys, databases become messy and inconsistent.
          </p>
        </div>
      </section>

      {/* 3️⃣ Visual Understanding */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-8 flex items-center">
          <span className="mr-3 text-4xl">🏗️</span> 3️⃣ Visual Understanding
        </h2>

        <div className="bg-gray-900 rounded-3xl border border-gray-800 p-8 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-400 via-gray-900 to-gray-900 blur-2xl pointer-events-none"></div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative z-10">
            {/* Parent Box */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl border-2 border-emerald-500 p-6 shadow-lg w-full max-w-sm">
              <h3 className="text-xl font-bold text-emerald-600 dark:text-emerald-400 flex items-center mb-4 border-b border-gray-100 dark:border-gray-700 pb-2">
                <span className="text-2xl mr-2">👨‍🎓</span> Students Table <span className="text-xs bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 px-2 py-0.5 rounded ml-2 uppercase tracking-wide">Parent</span>
              </h3>
              <div className="flex items-center space-x-3 bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded-xl border border-emerald-100 dark:border-emerald-800/50">
                <div className="bg-emerald-500 text-white font-bold px-2 py-1 rounded text-sm shadow-sm">4</div>
                <div className="flex-1">
                  <p className="font-bold text-gray-800 dark:text-gray-200 font-mono text-sm leading-tight">StudentID</p>
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 font-bold uppercase flex items-center"><Target className="w-3 h-3 mr-1" /> Primary Key</p>
                </div>
              </div>
            </div>

            {/* Arrow connecting */}
            <div className="hidden md:flex flex-col items-center">
              <span className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-2 uppercase tracking-wide tracking-widest shadow-sm">References</span>
              <ArrowRight className="text-indigo-500 w-10 h-10" />
            </div>
            <div className="md:hidden flex flex-row items-center my-2">
              <span className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full mr-2 uppercase tracking-wide tracking-widest shadow-sm">References</span>
              <div className="rotate-90"><ArrowRight className="text-indigo-500 w-8 h-8" /></div>
            </div>

            {/* Child Box */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl border-2 border-indigo-500 p-6 shadow-lg w-full max-w-sm">
              <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 flex items-center mb-4 border-b border-gray-100 dark:border-gray-700 pb-2">
                <span className="text-2xl mr-2">📚</span> Orders Table <span className="text-xs bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 px-2 py-0.5 rounded ml-2 uppercase tracking-wide">Child</span>
              </h3>
              <div className="flex items-center space-x-3 bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-xl border border-indigo-100 dark:border-indigo-800/50">
                <div className="bg-indigo-500 text-white font-bold px-2 py-1 rounded text-sm shadow-sm">4</div>
                <div className="flex-1">
                  <p className="font-bold text-gray-800 dark:text-gray-200 font-mono text-sm leading-tight">StudentID</p>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 font-bold uppercase flex items-center"><Link className="w-3 h-3 mr-1" /> Foreign Key</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4️⃣ Practical Example – Step by Step */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-8 flex items-center">
          <span className="mr-3 text-4xl">🏗️</span> 4️⃣ Practical Example – <span className="text-indigo-600 dark:text-indigo-400 ml-2">Step by Step</span>
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="mr-2 text-2xl">🧱</span> Step 1: Create Parent Table
            </h3>
            <CodeSnippetBlock codeSnippet={`CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    Name VARCHAR(50),
    Department VARCHAR(50)
);`} />
          </div>

          <div>
            <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="mr-2 text-2xl">🧱</span> Step 2: Create Child Table with Foreign Key
            </h3>
            <CodeSnippetBlock codeSnippet={`CREATE TABLE Fees (
    FeeID INT PRIMARY KEY,
    StudentID INT,
    Amount INT,
    FOREIGN KEY (StudentID)
    REFERENCES Students(StudentID)
);`} />
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-800/50 p-6 mt-8">
          <h4 className="font-bold text-blue-900 dark:text-blue-200 mb-4 flex items-center text-xl">
            <Brain className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" /> What This Does
          </h4>
          <ul className="space-y-3 font-medium text-blue-800 dark:text-blue-300">
            <li className="flex items-start bg-white/60 dark:bg-gray-900/40 p-3 rounded-lg border border-blue-200/50 dark:border-blue-800/30">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 shrink-0" />
              <span><code className="bg-blue-100 dark:bg-blue-900/60 px-1 py-0.5 rounded font-mono font-bold mx-1">StudentID</code> in Fees <strong className="underline decoration-blue-300 dark:decoration-blue-700 decoration-2 underline-offset-2">must exist</strong> in Students</span>
            </li>
            <li className="flex items-start bg-white/60 dark:bg-gray-900/40 p-3 rounded-lg border border-blue-200/50 dark:border-blue-800/30">
              <Shield className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 shrink-0" />
              <span>Prevents invalid data</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 5️⃣ Insert Data Example */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-8 flex items-center">
          <span className="mr-3 text-4xl">📝</span> 5️⃣ Insert Data Example
        </h2>

        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8 shadow-sm">
          <div className="space-y-8">
            {/* Insert into Students */}
            <div>
              <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3 flex items-center uppercase tracking-wider text-sm">
                <Database className="w-4 h-4 mr-2 text-indigo-500" /> Insert into Students (Parent)
              </h4>
              <CodeSnippetBlock codeSnippet={`INSERT INTO Students VALUES (1, 'Karthick', 'IT');
INSERT INTO Students VALUES (2, 'Anjali', 'HR');`} />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Insert Valid */}
              <div className="border border-emerald-200 dark:border-emerald-800/50 rounded-xl overflow-hidden bg-emerald-50/50 dark:bg-emerald-900/10">
                <div className="bg-emerald-100 dark:bg-emerald-900/40 px-4 py-2 border-b border-emerald-200 dark:border-emerald-800/50 flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mr-2" />
                  <span className="font-bold text-emerald-800 dark:text-emerald-300 text-sm uppercase tracking-wider">Insert into Fees (Valid)</span>
                </div>
                <div className="p-4">
                  <div className="font-mono text-sm bg-gray-900 p-3 rounded-lg text-emerald-300 mb-4 border border-gray-800 overflow-x-auto">
                    <code>INSERT INTO Fees VALUES (101, <span className="bg-blue-600/50 text-white px-1 rounded font-bold">1</span>, 5000);</code>
                  </div>
                  <p className="text-sm font-bold text-emerald-700 dark:text-emerald-400 flex items-center">
                    <Check className="w-4 h-4 mr-1" /> Works because StudentID = 1 exists.
                  </p>
                </div>
              </div>

              {/* Insert Invalid */}
              <div className="border border-rose-200 dark:border-rose-800/50 rounded-xl overflow-hidden bg-rose-50/50 dark:bg-rose-900/10">
                <div className="bg-rose-100 dark:bg-rose-900/40 px-4 py-2 border-b border-rose-200 dark:border-rose-800/50 flex items-center">
                  <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400 mr-2" />
                  <span className="font-bold text-rose-800 dark:text-rose-300 text-sm uppercase tracking-wider">Insert into Fees (Invalid)</span>
                </div>
                <div className="p-4">
                  <div className="font-mono text-sm bg-gray-900 p-3 rounded-lg text-rose-300 mb-4 border border-gray-800 overflow-x-auto opacity-80">
                    <code>INSERT INTO Fees VALUES (102, <span className="bg-rose-600/50 text-white px-1 rounded font-bold underline decoration-rose-400 decoration-2 underline-offset-2">5</span>, 6000);</code>
                  </div>
                  <p className="text-sm font-bold text-rose-700 dark:text-rose-400 flex items-start">
                    <XCircle className="w-4 h-4 mr-1 mt-0.5 shrink-0" />
                    <span>ERROR: StudentID <strong className="bg-rose-200 dark:bg-rose-800/60 px-1 rounded mx-0.5">5</strong> does not exist.</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-indigo-900 text-white p-4 rounded-xl shadow-inner mt-6 flex flex-col sm:flex-row items-center justify-between border border-indigo-700">
              <span className="text-indigo-200 font-bold uppercase tracking-widest text-sm mb-2 sm:mb-0">This is called:</span>
              <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Referential Integrity</span>
            </div>
          </div>
        </div>
      </section>

      {/* 🔥 6️⃣ Foreign Key with ON DELETE / ON UPDATE */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-4 flex items-center">
          <span className="mr-3 text-4xl">🔥</span> 6️⃣ Foreign Key Actions <span className="text-xs sm:text-sm bg-rose-100 text-rose-700 dark:bg-rose-900/60 dark:text-rose-300 border border-rose-200 dark:border-rose-800 px-3 py-1 rounded-full uppercase tracking-widest font-bold ml-4 shadow-sm relative -top-1 hidden sm:inline-block">Very Important</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 font-bold uppercase tracking-widest text-sm mb-8 bg-gray-100 dark:bg-gray-800/50 p-2 rounded inline-block">Very important for real-world systems.</p>

        <div className="space-y-6">
          {/* ON DELETE CASCADE */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden border-l-4 border-l-rose-500">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="text-blue-500 mr-2 text-2xl">🔹</span> <code className="bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300 px-2 py-1 rounded font-mono font-bold">ON DELETE CASCADE</code>
              </h3>
              <CodeSnippetBlock codeSnippet={`CREATE TABLE Fees (
    FeeID INT PRIMARY KEY,
    StudentID INT,
    Amount INT,
    FOREIGN KEY (StudentID)
    REFERENCES Students(StudentID)
    ON DELETE CASCADE
);`} />
              <div className="bg-rose-50 dark:bg-rose-900/20 p-4 rounded-xl border border-rose-100 dark:border-rose-800/50 mt-4 flex items-center">
                <Trash2 className="w-6 h-6 text-rose-500 mr-3 shrink-0" />
                <p className="font-bold text-rose-800 dark:text-rose-300">
                  <span className="text-gray-500 mr-2">👉</span> If a student is deleted → related fee records <strong className="underline decoration-rose-300 dark:decoration-rose-700 decoration-2 underline-offset-2">automatically delete.</strong>
                </p>
              </div>
            </div>
          </div>

          {/* ON DELETE SET NULL & ON UPDATE CASCADE */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm p-6 border-l-4 border-l-gray-400">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="text-blue-500 mr-2 text-xl">🔹</span> <code className="bg-gray-100 text-gray-800 dark:bg-gray-900/60 dark:text-gray-300 px-2 py-0.5 rounded font-mono font-bold text-sm">ON DELETE SET NULL</code>
              </h3>
              <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center h-[calc(100%-3rem)]">
                <p className="font-bold text-gray-700 dark:text-gray-300 text-sm">
                  If parent deleted → child foreign key becomes <strong className="text-blue-600 dark:text-blue-400 font-mono">NULL</strong>.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm p-6 border-l-4 border-l-emerald-500">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="text-blue-500 mr-2 text-xl">🔹</span> <code className="bg-emerald-50 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 px-2 py-0.5 rounded font-mono font-bold text-sm">ON UPDATE CASCADE</code>
              </h3>
              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800/50 flex items-center h-[calc(100%-3rem)]">
                <p className="font-bold text-emerald-800 dark:text-emerald-300 text-sm">
                  If primary key changes → foreign key updates <strong className="underline decoration-emerald-300 dark:decoration-emerald-700 decoration-2 underline-offset-2">automatically.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🧠 7️⃣ Real-World Example Scenarios */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-8 flex items-center">
          <span className="mr-3 text-4xl">🧠</span> 7️⃣ Real-World Scenarios
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {[
            { context: "E-commerce", parent: "Customers", child: "Orders", icon: "🛒" },
            { context: "Hospital", parent: "Patients", child: "Appointments", icon: "🏥" },
            { context: "Banking", parent: "Accounts", child: "Transactions", icon: "💳" },
            { context: "College", parent: "Students", child: "Marks", icon: "🎓" }
          ].map((scenario, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-4 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
              <span className="text-3xl mb-3">{scenario.icon}</span>
              <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">{scenario.context}</h4>
              <div className="flex flex-col items-center text-sm font-medium">
                <span className="text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 rounded mb-1 w-full">{scenario.parent}</span>
                <ArrowRight className="w-4 h-4 text-gray-400 my-1 rotate-90" />
                <span className="text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-2 py-0.5 rounded mt-1 w-full">{scenario.child}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-rose-900 text-white p-4 rounded-xl shadow-inner text-center font-bold text-lg border border-rose-700 flex items-center justify-center">
          <AlertTriangle className="w-5 h-5 mr-2 text-rose-400" /> Without foreign keys, <span className="text-rose-300 ml-1">data corruption happens.</span>
        </div>
      </section>

      {/* 🎯 8️⃣ Common Errors Students Make */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-8 flex items-center">
          <span className="mr-3 text-4xl">🎯</span> 8️⃣ Common Errors
        </h2>

        <div className="bg-gradient-to-r from-rose-50 to-orange-50 dark:from-rose-900/20 dark:to-orange-900/20 rounded-2xl border border-rose-200 dark:border-rose-800 p-6 sm:p-8 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-wider text-sm text-rose-700 dark:text-rose-400">Mistakes Students Frequently Make:</h3>
          <ul className="grid sm:grid-cols-2 gap-4">
            {[
              "Forgetting to create parent table first",
              "Data type mismatch (INT vs VARCHAR)",
              "Trying to delete parent without handling child",
              "Not indexing foreign keys for performance"
            ].map((err, idx) => (
              <li key={idx} className="bg-white/70 dark:bg-gray-800/70 p-4 rounded-xl shadow-sm border border-rose-100 dark:border-rose-800/50 flex items-start">
                <XCircle className="w-5 h-5 text-rose-500 mr-3 shrink-0 mt-0.5" />
                <span className="font-bold text-gray-800 dark:text-gray-200">{err}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 💡 9️⃣ My 15+ Years Professional Advice & Exercises */}
      <section className="max-w-6xl mx-auto space-y-8 mb-16">
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">

          {/* Advice */}
          <div className="lg:col-span-8 bg-gray-900 rounded-3xl border border-gray-800 p-8 shadow-xl relative overflow-hidden h-full flex flex-col">
            <h2 className="text-2xl sm:text-3xl font-bold flex flex-col sm:flex-row sm:items-center text-white mb-8 border-b border-gray-800 pb-5">
              <span className="flex items-center"><Lightbulb className="w-8 h-8 text-amber-400 mr-3" /> Professional Advice</span>
              <span className="bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mt-3 sm:mt-0 sm:ml-4 w-fit">15+ Years Experience</span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-6 relative z-10 flex-grow">
              <div className="space-y-6">
                {/* 1 */}
                <div className="bg-gray-800/50 p-5 rounded-2xl border border-gray-700 shadow-sm h-[calc(50%-12px)]">
                  <h4 className="font-bold text-white mb-3 text-lg"><span className="text-emerald-400 pr-1">1️⃣</span> Always Use FKs in Production</h4>
                  <p className="text-sm font-bold text-gray-300 italic mb-2 border-l-2 border-emerald-500 pl-3">Never build serious applications without foreign keys.</p>
                  <p className="text-xs text-rose-400 font-sans px-3 py-2 bg-rose-900/20 rounded border border-rose-800/50 mt-4 leading-relaxed">
                    Even startups ignore this for "speed" and regret it later when data becomes a mess.
                  </p>
                </div>

                {/* 3 */}
                <div className="bg-gray-800/50 p-5 rounded-2xl border border-gray-700 shadow-sm h-[calc(50%-12px)]">
                  <h4 className="font-bold text-white mb-3 text-lg"><span className="text-blue-400 pr-1">3️⃣</span> Choose CASCADE Carefully</h4>
                  <div className="space-y-3 mb-3 text-sm">
                    <p className="flex items-center text-rose-300 font-bold"><XCircle className="w-4 h-4 mr-2" /> Don’t blindly use ON DELETE CASCADE</p>
                    <p className="flex items-center text-emerald-300 font-bold"><CheckCircle2 className="w-4 h-4 mr-2" /> Use it only when business logic allows</p>
                  </div>
                  <div className="bg-black/30 p-3 rounded border border-gray-800 text-xs space-y-2 mt-4">
                    <p className="text-emerald-400"><strong className="uppercase">Good:</strong> OrderItems deleted when Order deleted</p>
                    <p className="text-rose-400"><strong className="uppercase">Bad:</strong> Deleting Customer deletes all financial history</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {/* 2 */}
                <div className="bg-gray-800/50 p-5 rounded-2xl border border-gray-700 shadow-sm h-[calc(50%-12px)]">
                  <h4 className="font-bold text-white mb-3 text-lg"><span className="text-indigo-400 pr-1">2️⃣</span> Index Your Foreign Keys</h4>
                  <code className="text-xs text-indigo-300 bg-black/50 p-3 rounded block font-mono border border-gray-800 mt-2 mb-4 whitespace-pre">CREATE INDEX idx_studentid
                    ON Fees(StudentID);</code>
                  <p className="text-sm font-bold text-emerald-400 font-sans mt-auto border-t border-gray-700 pt-3 flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-amber-400" /> Improves JOIN performance significantly.
                  </p>
                </div>

                {/* 4 */}
                <div className="bg-indigo-900/20 p-5 rounded-2xl border border-indigo-500/30 shadow-sm h-[calc(50%-12px)] border-l-4 border-l-amber-500">
                  <h4 className="font-bold text-white mb-3 text-lg"><span className="text-amber-400 pr-1">4️⃣</span> Think Like Real Life</h4>
                  <p className="text-sm text-indigo-200 font-medium mb-3 uppercase tracking-wider">Ask Yourself:</p>
                  <ul className="text-sm font-bold text-white bg-black/30 p-3 rounded-lg border border-indigo-900/50 space-y-2 mb-3 font-mono">
                    <li className="flex items-center"><Target className="w-3 h-3 mr-2 text-indigo-400" /> Is this One-to-One?</li>
                    <li className="flex items-center"><Target className="w-3 h-3 mr-2 text-indigo-400" /> One-to-Many?</li>
                    <li className="flex items-center"><Target className="w-3 h-3 mr-2 text-indigo-400" /> Many-to-Many?</li>
                  </ul>
                  <p className="text-sm font-bold text-amber-400 italic text-center w-full mt-2">Design properly BEFORE coding.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Exercises */}
          <div className="lg:col-span-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-8 rounded-3xl border border-emerald-200 dark:border-emerald-800 shadow-sm flex flex-col relative overflow-hidden h-full">
            <h2 className="text-2xl font-bold text-emerald-900 dark:text-emerald-300 mb-6 flex items-center relative z-10 border-b border-emerald-200 dark:border-emerald-800 pb-4">
              <span className="mr-3 text-3xl">🧪</span> Practice Exercises <span className="text-xs font-bold text-emerald-600 bg-emerald-100 dark:bg-emerald-900/60 dark:text-emerald-400 px-2 py-1 rounded-full uppercase ml-2">For Students</span>
            </h2>

            <ul className="space-y-4 relative z-10 font-medium">
              {[
                "Create a Customer & Orders table with foreign key",
                "Try deleting parent without CASCADE",
                "Add ON DELETE CASCADE and test",
                "Create Many-to-Many using junction table",
                "Try inserting invalid foreign key"
              ].map((q, idx) => (
                <li key={idx} className="bg-white/80 dark:bg-gray-900/70 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800/50 flex flex-col shadow-sm text-sm text-emerald-900 dark:text-emerald-100">
                  <span className="font-bold text-emerald-600 dark:text-emerald-400 text-xs mb-1 uppercase tracking-wide">Task {idx + 1}</span>
                  {q}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

    </div>
  );
};

export default SqlForeignKey;