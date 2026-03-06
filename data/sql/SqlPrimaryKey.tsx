import React, { useState } from 'react';
import {
  Terminal, Copy, Check, Database, Zap, ArrowRight, Table2,
  AlertTriangle, Lightbulb, CheckCircle2, XCircle, BrainCircuit,
  GraduationCap, Target, Layers, Key, ShieldCheck, Fingerprint, Info, HeartPulse
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
    <div className="mb-6 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm relative group w-full">
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
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-violet-500 hover:text-white transition-colors border border-gray-700"
          title="Copy code"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono bg-gray-900 text-purple-300 leading-relaxed border-t-0 border border-gray-800 rounded-b-xl">
        <code>{codeSnippet}</code>
      </pre>
    </div>
  );
};

const DataTable = ({ headers, rows }: { headers: string[], rows: any[][] }) => (
  <div className="w-full overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm mb-6">
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-50 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 font-medium border-b border-gray-200 dark:border-gray-700">
          <tr>
            {headers.map((h, i) => (
              <th key={i} className="px-6 py-3 whitespace-nowrap">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900/50">
          {rows.map((row, i) => (
            <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
              {row.map((cell, j) => (
                <td key={j} className="px-6 py-3 font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const SqlPrimaryKey: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:to-orange-950/20 min-h-screen font-sans">

      {/* Hero Header */}
      <header className="max-w-5xl mx-auto text-center mb-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl mb-6 shadow-xl transform hover:scale-105 transition-transform cursor-default">
          <Key className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          SQL <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">PRIMARY KEY</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          The ultimate identifier for your data. Learn how to maintain absolute uniqueness and protect database integrity.
        </p>
      </header>

      {/* Intro Definition */}
      <section className="max-w-5xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-bl-full -z-10"></div>
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <Fingerprint className="w-7 h-7 mr-3 text-amber-500" /> What is a PRIMARY KEY?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 font-medium mb-6 text-lg">
            A PRIMARY KEY is a column (or set of columns) in a table that uniquely identifies each record.
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center text-gray-700 dark:text-gray-300 font-medium bg-amber-50 dark:bg-amber-900/10 p-3 rounded-lg border border-amber-100 dark:border-amber-900/30">
              <CheckCircle2 className="w-5 h-5 mr-3 text-emerald-500 shrink-0" /> Each row has a unique value
            </li>
            <li className="flex items-center text-gray-700 dark:text-gray-300 font-medium bg-amber-50 dark:bg-amber-900/10 p-3 rounded-lg border border-amber-100 dark:border-amber-900/30">
              <CheckCircle2 className="w-5 h-5 mr-3 text-emerald-500 shrink-0" /> No duplicate values are allowed
            </li>
            <li className="flex items-center text-gray-700 dark:text-gray-300 font-medium bg-amber-50 dark:bg-amber-900/10 p-3 rounded-lg border border-amber-100 dark:border-amber-900/30">
              <CheckCircle2 className="w-5 h-5 mr-3 text-emerald-500 shrink-0" /> No NULL values are allowed
            </li>
          </ul>
          <div className="bg-amber-100 dark:bg-amber-900/40 p-4 rounded-xl border border-amber-200 dark:border-amber-800/50 font-bold text-amber-800 dark:text-amber-400 text-center">
            In simple words: Primary Key = Unique identifier for every row in a table.
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-amber-950 p-8 rounded-3xl shadow-lg border border-amber-800 flex flex-col justify-center text-white relative">
          <h2 className="text-2xl font-bold flex items-center text-white mb-6">
            <ShieldCheck className="w-7 h-7 mr-3 text-amber-400" /> 2️⃣ Why is it Important?
          </h2>
          <p className="text-amber-200 font-medium mb-6">In real-world databases, precision is everything:</p>

          <div className="grid gap-3 mb-6">
            <div className="bg-white/10 p-4 rounded-xl border border-white/5 flex items-center">
              <span className="bg-amber-500 w-2 h-2 rounded-full mr-3"></span> Every student must have a unique student ID
            </div>
            <div className="bg-white/10 p-4 rounded-xl border border-white/5 flex items-center">
              <span className="bg-amber-500 w-2 h-2 rounded-full mr-3"></span> Every employee must have a unique employee ID
            </div>
            <div className="bg-white/10 p-4 rounded-xl border border-white/5 flex items-center">
              <span className="bg-amber-500 w-2 h-2 rounded-full mr-3"></span> Every order must have a unique order number
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-amber-800 relative z-10">
            <p className="text-sm font-bold text-rose-400 uppercase tracking-wider mb-2 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" /> Without a primary key:</p>
            <ul className="text-sm text-gray-300 space-y-1 ml-6 list-disc">
              <li>Duplicate records may occur</li>
              <li>Data becomes unreliable</li>
              <li>Relationships between tables break</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Characteristics Table */}
      <section className="max-w-5xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <Target className="w-7 h-7 mr-3 text-emerald-500" /> 3️⃣ Characteristics of PRIMARY KEY
          </h2>
          <DataTable
            headers={['Feature', 'Explanation']}
            rows={[
              [<span className="font-bold text-amber-600 dark:text-amber-400">Unique</span>, 'No two rows can have the same value'],
              [<span className="font-bold text-rose-600 dark:text-rose-400">NOT NULL</span>, 'Cannot contain NULL values'],
              [<span className="font-bold text-blue-600 dark:text-blue-400">One per table</span>, 'Each table can have only one primary key'],
              [<span className="font-bold text-purple-600 dark:text-purple-400">Indexed automatically</span>, 'Improves search performance heavily'],
            ]}
          />
        </div>
      </section>

      {/* Demo Setup */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-8 flex items-center">
          <Table2 className="w-8 h-8 mr-3 text-amber-500" /> 🧪 Practical Example
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                <span className="bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-400 px-2 py-1 rounded text-sm mr-3">Step 1</span>
                Create Table
              </h3>
            </div>
            <div className="bg-amber-50 dark:bg-amber-900/10 p-5 rounded-2xl border border-amber-200 dark:border-amber-800/50 relative overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-amber-500"></div>
              <CodeSnippetBlock codeSnippet={`CREATE TABLE Students (\n    StudentID INT PRIMARY KEY,\n    Name VARCHAR(50),\n    Marks INT,\n    City VARCHAR(50)\n);`} />
              <p className="text-sm font-bold text-amber-800 dark:text-amber-400 mt-2 text-center bg-white dark:bg-gray-800 py-1 rounded shadow-sm">StudentID is the primary key.</p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
              <span className="bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-400 px-2 py-1 rounded text-sm mr-3">Step 4</span>
              Insert Data
            </h3>
            <CodeSnippetBlock
              title="Mock Data Insert"
              codeSnippet={`INSERT INTO Students VALUES\n(1,'Arun',85,'Chennai'),\n(2,'Divya',92,'Madurai'),\n(3,'Kiran',40,'Chennai');`}
            />
          </div>
        </div>

        <div className="mb-4 bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            📊 Table Structure Visualization
          </h3>
          <DataTable
            headers={['StudentID', 'Name', 'Marks', 'City']}
            rows={[
              [<span className="flex items-center font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/30 px-2 py-0.5 rounded-full w-fit"><Key className="w-3 h-3 mr-1" /> 1</span>, 'Arun', '85', 'Chennai'],
              [<span className="flex items-center font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/30 px-2 py-0.5 rounded-full w-fit"><Key className="w-3 h-3 mr-1" /> 2</span>, 'Divya', '92', 'Madurai'],
              [<span className="flex items-center font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/30 px-2 py-0.5 rounded-full w-fit"><Key className="w-3 h-3 mr-1" /> 3</span>, 'Kiran', '40', 'Chennai'],
            ]}
          />
        </div>
      </section>

      {/* Rules Enforcement Grid */}
      <section className="max-w-5xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">

        {/* Prevents Duplicates */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-rose-500 transition-colors">
          <h2 className="text-xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <span className="bg-rose-500 text-white w-8 h-8 rounded-lg flex items-center justify-center mr-3 font-bold shadow-md">5</span>
            Prevents Duplicate Values
          </h2>
          <p className="text-gray-600 dark:text-gray-400 font-medium mb-4">Attempting to insert a duplicate ID:</p>
          <CodeSnippetBlock codeSnippet={`INSERT INTO Students VALUES\n(1,'Rahul',70,'Salem');`} />

          <div className="bg-rose-50 dark:bg-rose-900/10 p-5 rounded-2xl border border-rose-200 dark:border-rose-800/30 mt-4 flex flex-col items-center">
            <div className="flex items-center text-rose-600 dark:text-rose-400 font-bold mb-2">
              <XCircle className="w-5 h-5 mr-2" /> Error occurs:
            </div>
            <code className="text-xs font-mono bg-white dark:bg-gray-800 text-rose-700 dark:text-rose-300 px-3 py-2 rounded border border-rose-100 dark:border-rose-900/50 shadow-sm w-full text-center">
              Duplicate entry '1' for key 'PRIMARY'
            </code>
            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 mt-3">Because primary keys must be unique.</p>
          </div>
        </div>

        {/* Prevents NULL */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-rose-500 transition-colors">
          <h2 className="text-xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <span className="bg-rose-500 text-white w-8 h-8 rounded-lg flex items-center justify-center mr-3 font-bold shadow-md">6</span>
            Cannot be NULL
          </h2>
          <p className="text-gray-600 dark:text-gray-400 font-medium mb-4">Attempting to insert an empty/missing ID:</p>
          <CodeSnippetBlock codeSnippet={`INSERT INTO Students VALUES\n(NULL,'Meena',75,'Coimbatore');`} />

          <div className="bg-rose-50 dark:bg-rose-900/10 p-5 rounded-2xl border border-rose-200 dark:border-rose-800/30 mt-4 flex flex-col items-center justify-center h-[120px]">
            <div className="flex items-center text-rose-600 dark:text-rose-400 font-bold mb-2">
              <XCircle className="w-5 h-5 mr-2" /> Error occurs
            </div>
            <p className="text-sm font-bold text-gray-700 dark:text-gray-300 mt-2 text-center px-4">Because PRIMARY KEY absolutely <strong className="text-rose-600">does not allow</strong> NULL values.</p>
          </div>
        </div>

      </section>

      {/* Advanced Usages Grid */}
      <section className="max-w-5xl mx-auto mb-16 space-y-8">

        {/* ALTER TABLE */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row gap-8 items-center">
          <div className="flex-1">
            <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-4">
              <span className="bg-blue-500 text-white w-8 h-8 rounded-lg flex items-center justify-center mr-3 font-bold shadow-md text-base">7</span>
              Creating via ALTER TABLE
            </h2>
            <p className="text-gray-600 dark:text-gray-400 font-medium mb-2">If the table already exists and you want to designate a column as the primary key after the fact:</p>
            <p className="text-sm font-bold text-blue-600 dark:text-blue-400 italic">This converts StudentID into a primary key.</p>
          </div>
          <div className="flex-1 w-full sm:w-auto">
            <CodeSnippetBlock codeSnippet={`ALTER TABLE Students\nADD PRIMARY KEY (StudentID);`} />
          </div>
        </div>

        {/* Composite Keys */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-900/10 p-8 rounded-3xl shadow-sm border border-indigo-200 dark:border-indigo-800/30">
          <div className="flex flex-col md:flex-row justify-between md:items-center mb-6">
            <h2 className="text-2xl font-black flex items-center text-indigo-900 dark:text-indigo-400">
              <span className="bg-indigo-500 text-white w-8 h-8 rounded-lg flex items-center justify-center mr-3 font-bold shadow-md text-base">8</span>
              Composite PRIMARY KEY
            </h2>
            <span className="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider mt-4 md:mt-0 border border-indigo-200 dark:border-indigo-700 w-fit">Advanced Concept</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-gray-700 dark:text-gray-300 font-medium mb-4">Sometimes one column is not enough to uniquely identify rows.<br />In such cases, <strong className="text-indigo-600 dark:text-indigo-400">multiple columns together</strong> form a primary key.</p>
              <CodeSnippetBlock codeSnippet={`CREATE TABLE CourseEnrollment (\n    StudentID INT,\n    CourseID INT,\n    EnrollmentDate DATE,\n    PRIMARY KEY (StudentID, CourseID)\n);`} />
              <div className="bg-white/60 dark:bg-gray-900/60 p-4 rounded-xl border border-indigo-100 dark:border-indigo-800/50 text-center font-bold text-indigo-800 dark:text-indigo-300">
                <p>Meaning:</p>
                <p className="text-sm mt-1 mb-2">A student cannot enroll in the same course twice.</p>
                <p className="text-xs text-rose-500 flex items-center justify-center mt-2 border-t border-indigo-200 dark:border-indigo-800 pt-2">(Combination of StudentID + CourseID must be unique)</p>
              </div>
            </div>

            <div className="flex flex-col h-full justify-center">
              <h3 className="font-bold text-indigo-900 dark:text-indigo-400 flex items-center mb-3 text-sm uppercase tracking-widest"><Table2 className="w-4 h-4 mr-2" /> Composite Key Example</h3>
              <DataTable
                headers={['StudentID', 'CourseID', 'EnrollmentDate']}
                rows={[
                  [<span className="flex items-center font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded-full w-fit">1</span>, <span className="flex items-center font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded-full w-fit">C101</span>, '2024-01-10'],
                  [<span className="flex items-center font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded-full w-fit">1</span>, <span className="flex items-center font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded-full w-fit">C102</span>, '2024-01-12'],
                  [<span className="flex items-center font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded-full w-fit">2</span>, <span className="flex items-center font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded-full w-fit">C101</span>, '2024-01-15'],
                ]}
              />
            </div>
          </div>
        </div>

        {/* Auto Increment */}
        <div className="bg-emerald-50 dark:bg-emerald-900/10 p-8 rounded-3xl shadow-sm border border-emerald-200 dark:border-emerald-800/30 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-black flex items-center text-emerald-900 dark:text-emerald-400 mb-4">
              <span className="bg-emerald-500 text-white w-8 h-8 rounded-lg flex items-center justify-center mr-3 font-bold shadow-md text-base">9</span>
              With AUTO_INCREMENT
            </h2>
            <p className="text-emerald-800 dark:text-emerald-300 font-medium mb-4">Most real databases generate primary keys automatically.</p>
            <CodeSnippetBlock codeSnippet={`CREATE TABLE Employees (\n    EmpID INT AUTO_INCREMENT PRIMARY KEY,\n    Name VARCHAR(50),\n    Salary INT\n);`} />
          </div>

          <div className="flex flex-col space-y-4">
            <CodeSnippetBlock title="Insert (No ID Needed)" codeSnippet={`INSERT INTO Employees (Name, Salary)\nVALUES ('Arun',40000);`} />
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"></div>
              <DataTable
                headers={['EmpID', 'Name', 'Salary']}
                rows={[
                  [<span className="font-bold text-emerald-600 dark:text-emerald-400 ring-2 ring-emerald-500/20 px-1 rounded">1</span>, 'Arun', '40000'],
                ]}
              />
              <p className="text-xs font-bold text-gray-500 dark:text-gray-400 text-center italic mt-[-10px]">Next record automatically becomes 2, 3, 4…</p>
            </div>
          </div>
        </div>
      </section>

      {/* Difference Table (vs UNIQUE) */}
      <section className="max-w-5xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 relative overflow-hidden group">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-48 bg-blue-500/5 rounded-full blur-3xl -z-10 group-hover:bg-blue-500/10 transition-colors"></div>
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6 justify-center">
            <BrainCircuit className="w-8 h-8 mr-3 text-blue-500" /> Difference Between PRIMARY KEY and UNIQUE
          </h2>
          <div className="mx-auto max-w-4xl pt-4">
            <div className="w-full overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 shadow-xl">
              <table className="w-full text-sm text-center">
                <thead className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white font-black border-b border-gray-200 dark:border-gray-700">
                  <tr>
                    <th className="px-6 py-4 uppercase tracking-wider text-xs">Feature</th>
                    <th className="px-6 py-4 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 border-x border-gray-200 dark:border-gray-700">PRIMARY KEY</th>
                    <th className="px-6 py-4 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400">UNIQUE Constraint</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-800/50 font-medium">
                  <tr>
                    <td className="px-6 py-4 text-left font-bold text-gray-600 dark:text-gray-300">Duplicate values</td>
                    <td className="px-6 py-4 border-x border-gray-200 dark:border-gray-700 text-rose-500 font-bold"><XCircle className="w-4 h-4 inline mr-1" /> Not allowed</td>
                    <td className="px-6 py-4 text-rose-500 font-bold"><XCircle className="w-4 h-4 inline mr-1" /> Not allowed</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-left font-bold text-gray-600 dark:text-gray-300">NULL values</td>
                    <td className="px-6 py-4 border-x border-gray-200 dark:border-gray-700 text-rose-500 font-bold bg-amber-50/50 dark:bg-amber-900/10"><XCircle className="w-4 h-4 inline mr-1" /> Not allowed</td>
                    <td className="px-6 py-4 text-emerald-500 font-bold bg-blue-50/50 dark:bg-blue-900/10"><CheckCircle2 className="w-4 h-4 inline mr-1" /> Allowed</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-left font-bold text-gray-600 dark:text-gray-300">Number per table</td>
                    <td className="px-6 py-4 border-x border-gray-200 dark:border-gray-700 font-bold text-amber-600 dark:text-amber-400"><Target className="w-4 h-4 inline mr-1 text-amber-500" /> Only one</td>
                    <td className="px-6 py-4 font-bold text-blue-600 dark:text-blue-400"><Layers className="w-4 h-4 inline mr-1 text-blue-500" /> Multiple allowed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Real World Scenario */}
      <section className="max-w-5xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-rose-50 to-red-50 dark:from-rose-950/20 dark:to-red-900/10 p-8 flex flex-col md:flex-row items-center gap-8 rounded-3xl shadow-sm border border-rose-200 dark:border-rose-900/30 overflow-hidden relative">
          <div className="absolute top-1/2 left-10 -translate-y-1/2 w-40 h-40 bg-rose-500/10 rounded-full blur-3xl -z-10"></div>

          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-bold flex items-center text-rose-900 dark:text-rose-400 mb-2">
              <HeartPulse className="w-8 h-8 mr-3 text-rose-500" /> 🧩 Real-World Example
            </h2>
            <p className="text-rose-800 dark:text-rose-300 font-medium text-lg">
              In your <strong>LifeLink AI</strong> blood bank project:
            </p>
            <p className="text-rose-900 dark:text-rose-200 bg-white/50 dark:bg-black/20 p-4 rounded-xl border border-rose-200 dark:border-rose-900/50 font-medium shadow-sm">
              <code className="text-rose-600 font-bold mr-1 bg-white dark:bg-black/50 px-1 rounded shadow-sm">DonorID</code> uniquely identifies each donor across the entire system.
            </p>
          </div>

          <div className="flex-1 w-full bg-slate-900/5 p-4 rounded-2xl border border-slate-200 dark:border-slate-800/50">
            <CodeSnippetBlock codeSnippet={`CREATE TABLE Donors (\n    DonorID INT PRIMARY KEY,\n    Name VARCHAR(100) NOT NULL,\n    BloodGroup VARCHAR(5) NOT NULL,\n    Phone VARCHAR(15),\n    LastDonationDate DATE\n);`} />
          </div>
        </div>
      </section>

      {/* Developer Wisdom */}
      <section className="max-w-5xl mx-auto mb-8">
        <div className="bg-indigo-900 dark:bg-indigo-950 p-8 rounded-3xl shadow-xl border border-indigo-700 hover:border-indigo-500 transition-colors">
          <h2 className="text-2xl font-black flex items-center text-white mb-8">
            <GraduationCap className="w-8 h-8 mr-3 text-indigo-400" />
            <div>
              <span className="block text-xs font-bold text-indigo-300 uppercase tracking-widest mb-1 mt-1">15+ Years Experience</span>
              Professional Developer Tips
            </div>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white/10 p-5 rounded-2xl border border-white/10 flex flex-col items-center text-center">
              <CheckCircle2 className="w-8 h-8 text-emerald-400 mb-3" />
              <h4 className="font-bold text-white mb-2">Always use primary keys</h4>
              <p className="text-sm text-indigo-200 font-medium">Every standard table should have one. Period.</p>
            </div>

            <div className="bg-white/10 p-5 rounded-2xl border border-white/10 flex flex-col items-center text-center">
              <Terminal className="w-8 h-8 text-blue-400 mb-3" />
              <h4 className="font-bold text-white mb-2">Use numeric keys</h4>
              <p className="text-sm text-indigo-200 font-medium mb-3">Example: <code className="bg-black/50 px-2 py-0.5 rounded text-emerald-400 font-mono text-xs">INT AUTO_INCREMENT</code></p>
              <p className="text-xs text-indigo-300">Provides better performance than text keys.</p>
            </div>

            <div className="bg-rose-900/30 p-5 rounded-2xl border border-rose-500/30 flex flex-col items-center text-center">
              <XCircle className="w-8 h-8 text-rose-400 mb-3" />
              <h4 className="font-bold text-white mb-2">Avoid meaningful keys</h4>
              <p className="text-sm text-rose-200 font-medium mb-3">Bad example: Using PhoneNumber as a primary key.</p>
              <p className="text-xs text-rose-300 italic">Phone numbers change. Use generated IDs instead.</p>
            </div>

            <div className="bg-amber-900/30 p-5 rounded-2xl border border-amber-500/30 flex flex-col items-center text-center">
              <AlertTriangle className="w-8 h-8 text-amber-400 mb-3" />
              <h4 className="font-bold text-white mb-2">Composite keys sparingly</h4>
              <p className="text-sm text-amber-200 font-medium px-4">Too many columns combined in a primary key can drastically slow down queries.</p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default SqlPrimaryKey;