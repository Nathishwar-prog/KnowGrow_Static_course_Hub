import React, { useState } from 'react';
import { Database, Terminal, Copy, Check, Table2, ArrowRight, Zap, Target, LayoutTemplate, Briefcase, Server, CheckCircle, HelpCircle, AlertTriangle, AlertOctagon, Link2, BoxSelect, Filter, DatabaseZap, Clock, Hash, Smartphone, Image as ImageIcon, Banknote, ShieldAlert, Cpu, PlusCircle, Rows, Key, Shield, UserPlus, Layers, Settings, Type } from 'lucide-react';

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
        <button onClick={handleCopy} className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-violet-500 hover:text-white transition-colors border border-gray-700" title="Copy code">
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono bg-gray-900 text-violet-300 leading-relaxed border-t-0 border border-gray-800 rounded-b-xl">
        <code>{codeSnippet}</code>
      </pre>
    </div>
  );
};

const SqlInsertInto: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-gray-900 dark:to-violet-900/10 min-h-screen font-sans">
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-violet-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl mb-6 shadow-xl transform hover:-rotate-3 transition-transform cursor-default">
          <PlusCircle className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight flex items-center justify-center">
          SQL INSERT INTO
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          The command to add new records (rows) into a table. Add new data into your database securely and efficiently.
        </p>
      </header>

      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-4">
            <Rows className="w-6 h-6 mr-3 text-emerald-500" /> Basic Syntax
          </h2>
          <p className="text-gray-600 dark:text-gray-400 font-medium mb-4 text-sm">
            Professional developers prefer <strong>Method 2</strong> because it is safer and clearer even if table structures change.
          </p>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 flex items-center"><span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>Method 1: Insert All Columns</p>
              <CodeSnippetBlock codeSnippet={`INSERT INTO table_name\nVALUES (value1, value2, value3);`} />
            </div>
            <div>
              <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mb-2 flex items-center"><span className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></span>Method 2: Insert Specific Columns (Recommended)</p>
              <CodeSnippetBlock codeSnippet={`INSERT INTO table_name (column1, column2)\nVALUES (value1, value2);`} />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-4">
            <DatabaseZap className="w-6 h-6 mr-3 text-violet-500" /> Practical Example
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4"><strong>Step 1: Create Table</strong></p>
          <CodeSnippetBlock codeSnippet={`CREATE TABLE Students (\n    StudentID INT PRIMARY KEY,\n    Name VARCHAR(50),\n    Age INT,\n    Department VARCHAR(50)\n);`} language="sql" />
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 mt-4"><strong>Step 2: Insert Data (Best Practice)</strong></p>
          <CodeSnippetBlock codeSnippet={`INSERT INTO Students (StudentID, Name, Age, Department)\nVALUES (2, 'Anjali', 20, 'HR');`} language="sql" />
        </div>
      </section>

      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-2 flex items-center">
          <Zap className="w-8 h-8 mr-3 text-amber-500" /> Advanced Insert Techniques
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 shadow-sm relative text-white hover:border-emerald-500 transition-colors">
            <Layers className="w-8 h-8 mb-4 text-emerald-500" />
            <h3 className="text-xl font-bold mb-3 border-b border-gray-700 pb-2">Insert Multiple Rows</h3>
            <p className="text-sm text-gray-400 font-medium mb-4">Faster and more efficient than inserting one by one.</p>
            <CodeSnippetBlock codeSnippet={`INSERT INTO Students (StudentID, Name, Age, Department)\nVALUES\n(3, 'Rahul', 22, 'Finance'),\n(4, 'Sneha', 21, 'Marketing');`} />
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 shadow-sm relative text-white hover:border-blue-500 transition-colors">
            <Settings className="w-8 h-8 mb-4 text-blue-500" />
            <h3 className="text-xl font-bold mb-3 border-b border-gray-700 pb-2">DEFAULT Values</h3>
            <p className="text-sm text-gray-400 font-medium mb-4">Omit a column to let the database use its default value (e.g., 'Active').</p>
            <CodeSnippetBlock codeSnippet={`INSERT INTO Users (UserID, Name)\nVALUES (1, 'Karthick');\n-- Status automatically becomes 'Active'`} />
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 shadow-sm relative text-white hover:border-violet-500 transition-colors">
            <Copy className="w-8 h-8 mb-4 text-violet-500" />
            <h3 className="text-xl font-bold mb-3 border-b border-gray-700 pb-2">INSERT INTO ... SELECT</h3>
            <p className="text-sm text-gray-400 font-medium mb-4">Copy data from another table. Very useful in real-world data migration.</p>
            <CodeSnippetBlock codeSnippet={`INSERT INTO IT_Students (StudentID, Name)\nSELECT StudentID, Name\nFROM Students\nWHERE Department = 'IT';`} />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-red-50 to-rose-50 dark:from-rose-950/20 dark:to-black p-8 rounded-3xl shadow-sm border border-red-200 dark:border-red-900/30 flex flex-col md:flex-row gap-8 items-center hover:border-red-500 transition-colors">
          <div className="flex-1">
            <h2 className="text-2xl font-bold flex items-center text-red-900 dark:text-red-400 mb-4 relative z-10">
              <ShieldAlert className="w-6 h-6 mr-3 text-red-500" /> Security Consideration: SQL Injection
            </h2>
            <p className="text-red-800 dark:text-red-300 font-medium mb-4 text-sm">
              Never build queries by concatenating raw strings. This can cause severe security breaches like SQL Injection. Always use parameterized queries.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-bold text-red-600 dark:text-red-400 text-xs mb-2">❌ BAD (Vulnerable)</p>
                <code className="block bg-red-100 dark:bg-red-900/50 p-3 rounded-lg text-xs font-mono font-bold text-red-800 dark:text-red-200 border border-red-200 dark:border-red-800">
                  "INSERT INTO Users VALUES ('" + username + "')"
                </code>
              </div>
              <div>
                <p className="font-bold text-emerald-600 dark:text-emerald-400 text-xs mb-2">✅ GOOD (Parameterized)</p>
                <code className="block bg-emerald-100 dark:bg-emerald-900/50 p-3 rounded-lg text-xs font-mono font-bold text-emerald-800 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800">
                  connection.execute(<br />
                  &nbsp;&nbsp;"INSERT INTO Users (Name) VALUES (?)",<br />
                  &nbsp;&nbsp;[username]<br />
                  );
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <AlertTriangle className="w-6 h-6 mr-3 text-amber-500" /> Common Errors
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
              <p className="font-bold text-red-500 flex items-center mb-1"><Target className="w-4 h-4 mr-2" /> Missing Values</p>
              <code className="text-xs text-gray-600 dark:text-gray-400">INSERT INTO Students VALUES (5, 'Arjun');</code>
              <p className="text-xs text-gray-500 mt-2 italic">ERROR: Column count mismatch.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
              <p className="font-bold text-red-500 flex items-center mb-1"><Key className="w-4 h-4 mr-2" /> Duplicate Primary Key</p>
              <code className="text-xs text-gray-600 dark:text-gray-400">INSERT INTO Students VALUES (1, 'NewName', 25, 'IT');</code>
              <p className="text-xs text-gray-500 mt-2 italic">ERROR: Primary key already exists.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
              <p className="font-bold text-red-500 flex items-center mb-1"><Type className="w-4 h-4 mr-2" /> Data Type Mismatch</p>
              <code className="text-xs text-gray-600 dark:text-gray-400">INSERT INTO Students VALUES ('ABC', 'Name', 21, 'IT');</code>
              <p className="text-xs text-gray-500 mt-2 italic">ERROR: StudentID must be INT.</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm relative overflow-hidden">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <Briefcase className="w-7 h-7 mr-3 text-violet-500" /> 15+ Years Professional Advice
          </h2>
          <div className="space-y-4 text-sm font-medium text-gray-600 dark:text-gray-400">
            <div className="flex items-start">
              <span className="text-violet-500 font-black text-lg mr-3">1</span>
              <div>
                <p className="text-gray-900 dark:text-gray-100 font-bold">Always Specify Column Names</p>
                <p>Safer and future-proof. Protects against schema changes.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-violet-500 font-black text-lg mr-3">2</span>
              <div>
                <p className="text-gray-900 dark:text-gray-100 font-bold">Use Batch Inserts for Performance</p>
                <p>Insert multiple rows at once to reduce connection overhead.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-violet-500 font-black text-lg mr-3">3</span>
              <div>
                <p className="text-gray-900 dark:text-gray-100 font-bold">Validate Data Before Inserting</p>
                <p>Check for null values, data types, length limits, and business rules.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-violet-500 font-black text-lg mr-3">4</span>
              <div>
                <p className="text-gray-900 dark:text-gray-100 font-bold">Use Transactions for Critical Inserts</p>
                <p>Wrap multiple inserts in <code>BEGIN...COMMIT</code>. If one fails, <code>ROLLBACK</code>.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-violet-500 font-black text-lg mr-3">5</span>
              <div>
                <p className="text-gray-900 dark:text-gray-100 font-bold">Index Primary & Foreign Keys</p>
                <p>Improves performance for large insert-heavy systems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-r from-violet-600 to-purple-700 rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10">
            <Target className="w-64 h-64 -mt-16 -mr-16" />
          </div>
          <div className="relative z-10 w-full lg:w-3/4">
            <h2 className="text-3xl font-black mb-4 flex items-center">
              <CheckCircle className="w-8 h-8 mr-3 text-emerald-400" /> Practice Exercises
            </h2>
            <p className="text-violet-100 text-lg mb-6">Reinforce your knowledge. Try executing these queries in your local SQL environment.</p>
            <ul className="space-y-3 font-semibold text-lg text-violet-50">
              <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-emerald-400 mr-3"></span> Insert 5 new students</li>
              <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-emerald-400 mr-3"></span> Insert data with default values</li>
              <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-emerald-400 mr-3"></span> Insert using SELECT from another table</li>
              <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-emerald-400 mr-3"></span> Try inserting a duplicate primary key</li>
              <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-emerald-400 mr-3"></span> Insert multiple rows in one query</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto mb-8 border-t border-gray-200 dark:border-gray-800 pt-8 text-center text-gray-500 dark:text-gray-400">
        <p className="flex items-center justify-center font-medium">
          <UserPlus className="w-5 h-5 mr-3 text-violet-500" />
          Real-world use cases: User Registration, Order Placement, Logs, Chat Messages, Transactions.
        </p>
      </section>
    </div>
  );
};

export default SqlInsertInto;