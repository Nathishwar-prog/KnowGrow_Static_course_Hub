import React, { useState } from 'react';
import { 
  Database, Terminal, Copy, Check, Table2, Zap, Target, 
  Briefcase, HelpCircle, Layers, Code2, Network,
  ShieldCheck, Activity, LineChart, FileCode2,
  BoxSelect, Braces, Settings, ArrowRight, BookOpen, Search
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
    <div className="mt-4 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm relative group w-full">
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
      <pre className="p-4 overflow-x-auto text-xs sm:text-sm font-mono bg-gray-900 text-violet-300 leading-relaxed border-t-0 border border-gray-800 rounded-b-xl">
        <code>{codeSnippet}</code>
      </pre>
    </div>
  );
};

const ModuleCard = ({ 
    num, 
    title, 
    icon: Icon,
    topics, 
    exampleCode,
    exampleIsTable = false,
    tableData,
    highlightBadge
}: { 
    num: string, 
    title: string, 
    icon: any,
    topics: string[], 
    exampleCode?: string,
    exampleIsTable?: boolean,
    tableData?: { headers: string[], rows: (string | number)[][] },
    highlightBadge?: string
}) => {
    return (
        <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-violet-400 transition-colors group relative overflow-hidden flex flex-col h-full">
            {highlightBadge && (
                <div className="absolute top-0 right-0 bg-violet-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-bl-xl shadow-sm z-20">
                    {highlightBadge}
                </div>
            )}
            
            <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity z-0">
                <Icon className="w-32 h-32 text-violet-500" />
            </div>
            
            <div className="flex items-center gap-3 w-full border-b border-gray-100 dark:border-gray-700 pb-4 mb-5 relative z-10">
                <div className="w-10 h-10 shrink-0 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400 rounded-xl flex items-center justify-center font-black text-lg">
                    {num}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                    {title}
                </h3>
            </div>

            <div className="mb-6 flex-1 relative z-10">
                <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-3">Topics Covered</p>
                <div className="flex flex-wrap gap-2">
                    {topics.map((t, i) => (
                        <span key={i} className="bg-gray-50 dark:bg-gray-900/50 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-lg text-xs font-semibold border border-gray-200/50 dark:border-gray-700/50 flex items-center">
                            <span className="w-1.5 h-1.5 bg-violet-400 rounded-full mr-2"></span> {t}
                        </span>
                    ))}
                </div>
            </div>

            {exampleCode && !exampleIsTable && (
                <div className="mt-auto relative z-10">
                    <p className="text-[10px] bg-violet-50 dark:bg-violet-900/20 text-violet-700 dark:text-violet-400 w-max px-2 py-0.5 rounded font-black uppercase tracking-widest border border-violet-100 dark:border-violet-800/30">Example Syntax</p>
                    <CodeSnippetBlock codeSnippet={exampleCode} />
                </div>
            )}
            
            {exampleIsTable && tableData && (
                <div className="mt-auto relative z-10">
                    <p className="text-[10px] bg-fuchsia-50 dark:bg-fuchsia-900/20 text-fuchsia-700 dark:text-fuchsia-400 w-max px-2 py-0.5 rounded font-black uppercase tracking-widest border border-fuchsia-100 dark:border-fuchsia-800/30 mb-2">Visualization Example</p>
                     <div className="overflow-x-auto ring-1 ring-gray-200 dark:ring-gray-700 rounded-xl shadow-sm text-xs">
                        <table className="w-full text-left">
                          <thead className="bg-gray-50 dark:bg-gray-900/80 text-gray-900 dark:text-white uppercase font-bold">
                            <tr>
                              {tableData.headers.map((h, i) => (
                                <th key={i} className="px-3 py-2 border-b border-gray-200 dark:border-gray-700">{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="bg-white dark:bg-gray-800 font-medium text-gray-700 dark:text-gray-300">
                            {tableData.rows.map((row, i) => (
                              <tr key={i} className="border-b border-gray-100 dark:border-gray-700/50">
                                {row.map((cell, j) => (
                                   <td key={j} className="px-3 py-2">{cell}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                </div>
            )}
        </div>
    );
};

const SqlSyllabus: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gray-50 dark:bg-gray-900 min-h-screen font-sans">
      <header className="max-w-4xl mx-auto text-center mb-16 pt-8 relative">
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-violet-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-20 left-1/4 w-48 h-48 bg-fuchsia-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-2xl mb-6 shadow-xl transform transition-transform cursor-default">
          <BookOpen className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          Complete SQL Syllabus
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
          The comprehensive 20-module enterprise curriculum masterclass spanning absolute basics rigidly to extreme logical architecture optimizations.
        </p>
      </header>
      
      {/* 20 Module Grid Section */}
      <div className="max-w-7xl mx-auto mb-20 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          
        <ModuleCard 
            num="1" 
            title="SQL Introduction (Beginner Level)" 
            icon={BookOpen}
            topics={['What is SQL','History of SQL','SQL vs Database','Types of Databases','What is DBMS','What is RDBMS','SQL Syntax Basics','SQL Case Sensitivity','SQL Comments']}
            highlightBadge="Beginner"
        />

        <ModuleCard 
            num="2" 
            title="Database Basics" 
            icon={Database}
            topics={['Database Concepts','Tables','Rows','Columns','Primary Keys','Foreign Keys','Relationships']}
            exampleIsTable={true}
            tableData={{ headers: ['ID', 'Name', 'City'], rows: [[1, 'John', 'NY'], [2, 'David', 'LA']] }}
        />

        <ModuleCard 
            num="3" 
            title="SQL Data Types" 
            icon={Braces}
            topics={['Numeric Data Types','String Data Types','Date and Time','Boolean','NULL Values']}
            exampleCode={`INT\nVARCHAR\nDATE\nBOOLEAN\nFLOAT`}
        />

        <ModuleCard 
            num="4" 
            title="SQL Database Operations" 
            icon={Terminal}
            topics={['SQL CREATE DATABASE','SQL DROP DATABASE','SQL BACKUP DATABASE','SQL RESTORE DATABASE']}
            exampleCode={`CREATE DATABASE company;`}
        />

        <ModuleCard 
            num="5" 
            title="SQL Table Operations" 
            icon={Table2}
            topics={['CREATE TABLE','ALTER TABLE','DROP TABLE','TRUNCATE TABLE','RENAME TABLE']}
            exampleCode={`CREATE TABLE employees(\n  id INT,\n  name VARCHAR(50),\n  salary INT\n);`}
        />

        <ModuleCard 
            num="6" 
            title="Data Manipulation (DML)" 
            icon={Activity}
            topics={['SQL INSERT','SQL SELECT','SQL UPDATE','SQL DELETE']}
            exampleCode={`INSERT INTO employees\nVALUES(1,'John',50000);`}
            highlightBadge="Most Important"
        />

        <ModuleCard 
            num="7" 
            title="SQL Filtering Data" 
            icon={Search}
            topics={['SQL WHERE','SQL AND','SQL OR','SQL NOT','SQL BETWEEN','SQL IN','SQL LIKE','SQL IS NULL']}
            exampleCode={`SELECT *\nFROM employees\nWHERE salary > 40000;`}
        />

        <ModuleCard 
            num="8" 
            title="SQL Sorting and Limiting" 
            icon={Target}
            topics={['SQL ORDER BY','SQL ASC','SQL DESC','SQL LIMIT','SQL TOP']}
            exampleCode={`SELECT *\nFROM employees\nORDER BY salary DESC;`}
        />

        <ModuleCard 
            num="9" 
            title="SQL Aggregate Functions" 
            icon={LineChart}
            topics={['SQL COUNT()','SQL SUM()','SQL AVG()','SQL MIN()','SQL MAX()']}
            exampleCode={`SELECT SUM(salary)\nFROM employees;`}
        />

        <ModuleCard 
            num="10" 
            title="GROUP BY & HAVING" 
            icon={Layers}
            topics={['GROUP BY','HAVING Clause','Aggregate Filtering']}
            exampleCode={`SELECT department, SUM(salary)\nFROM employees\nGROUP BY department;`}
        />

        <ModuleCard 
            num="11" 
            title="SQL Joins" 
            icon={Network}
            topics={['INNER JOIN','LEFT JOIN','RIGHT JOIN','FULL JOIN','SELF JOIN','CROSS JOIN']}
            exampleCode={`SELECT o.id, c.name\nFROM orders o\nINNER JOIN customers c\nON o.customer_id = c.id;`}
            highlightBadge="Very Important"
        />

        <ModuleCard 
            num="12" 
            title="SQL Subqueries" 
            icon={BoxSelect}
            topics={['Subqueries','Nested Queries','Correlated Subqueries','EXISTS','ANY','ALL']}
            exampleCode={`SELECT name\nFROM employees\nWHERE salary >\n(SELECT AVG(salary) FROM employees);`}
        />

        <ModuleCard 
            num="13" 
            title="SQL Constraints" 
            icon={ShieldCheck}
            topics={['NOT NULL','UNIQUE','PRIMARY KEY','FOREIGN KEY','CHECK','DEFAULT']}
            exampleCode={`CREATE TABLE users(\n  id INT PRIMARY KEY,\n  email VARCHAR(100) UNIQUE\n);`}
        />

        <ModuleCard 
            num="14" 
            title="SQL Indexes" 
            icon={Zap}
            topics={['What is Index','CREATE INDEX','DROP INDEX','Performance Optimization']}
            exampleCode={`CREATE INDEX idx_name\nON employees(name);`}
        />

        <ModuleCard 
            num="15" 
            title="SQL Views" 
            icon={BoxSelect}
            topics={['CREATE VIEW','Updating Views','Dropping Views']}
            exampleCode={`CREATE VIEW high_salary AS\nSELECT name, salary\nFROM employees\nWHERE salary > 50000;`}
        />

        <ModuleCard 
            num="16" 
            title="SQL Stored Procedures" 
            icon={FileCode2}
            topics={['Stored Procedures','Parameters','Calling Procedures']}
            exampleCode={`CREATE PROCEDURE GetEmployees\nAS\nSELECT * FROM employees;`}
        />

        <ModuleCard 
            num="17" 
            title="SQL Transactions" 
            icon={Briefcase}
            topics={['COMMIT','ROLLBACK','SAVEPOINT','ACID Properties']}
            exampleCode={`BEGIN TRANSACTION;\n\nUPDATE accounts\nSET balance = balance - 100\nWHERE id = 1;\n\nCOMMIT;`}
        />

        <ModuleCard 
            num="18" 
            title="SQL Security" 
            icon={ShieldCheck}
            topics={['SQL Injection','SQL Users','Permissions','GRANT','REVOKE']}
            exampleCode={`GRANT SELECT\nON employees\nTO user1;`}
        />

        <ModuleCard 
            num="19" 
            title="Performance Optimization" 
            icon={Activity}
            topics={['Query Optimization','Index Optimization','Execution Plans','Query Analysis']}
        />

        <ModuleCard 
            num="20" 
            title="Real-World SQL Projects" 
            icon={Code2}
            topics={['E-commerce database','Banking system','Library management system','Student management system','Sales analytics dashboard']}
        />
      </div>

      {/* Structured Path Map */}
      <section className="max-w-4xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-gray-900 to-black p-8 sm:p-12 rounded-[2.5rem] shadow-2xl border border-gray-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 text-violet-500">
                <Target className="w-64 h-64" />
            </div>

            <h2 className="text-3xl font-black text-white mb-4 relative z-10 flex items-center justify-center">
              Recommended Learning Flow
            </h2>
            <p className="text-gray-400 font-medium text-center mb-10 relative z-10">Follow this explicit rigid linear track architecture mathematically structuring your brain directly to complete absolutely mastery perfectly seamlessly.</p>
            
            <div className="flex flex-col items-center relative z-10 font-bold mx-auto w-max space-y-2">
                
                <div className="bg-violet-600/20 text-violet-300 border border-violet-500/50 px-8 py-3 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.3)] w-64 text-center">SQL Basics</div>
                <ArrowRight className="text-gray-600 w-5 h-5 rotate-90" />
                
                <div className="bg-fuchsia-600/20 text-fuchsia-300 border border-fuchsia-500/50 px-8 py-3 rounded-full w-64 text-center">Filtering Data</div>
                <ArrowRight className="text-gray-600 w-5 h-5 rotate-90" />
                
                <div className="bg-sky-600/20 text-sky-300 border border-sky-500/50 px-8 py-3 rounded-full w-64 text-center">Aggregate Functions</div>
                <ArrowRight className="text-gray-600 w-5 h-5 rotate-90" />
                
                <div className="bg-teal-600/20 text-teal-300 border border-teal-500/50 px-8 py-3 rounded-full w-64 text-center">GROUP BY</div>
                <ArrowRight className="text-gray-600 w-5 h-5 rotate-90" />
                
                <div className="bg-amber-600/20 text-amber-300 border border-amber-500/50 px-8 py-3 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.3)] w-64 text-center text-xl font-black">JOINS</div>
                <ArrowRight className="text-gray-600 w-5 h-5 rotate-90" />
                
                <div className="bg-rose-600/20 text-rose-300 border border-rose-500/50 px-8 py-3 rounded-full w-64 text-center">Subqueries</div>
                <ArrowRight className="text-gray-600 w-5 h-5 rotate-90" />
                
                <div className="bg-emerald-600/20 text-emerald-300 border border-emerald-500/50 px-8 py-3 rounded-full w-64 text-center">Indexes</div>
                <ArrowRight className="text-gray-600 w-5 h-5 rotate-90" />

                <div className="bg-blue-600/20 text-blue-300 border border-blue-500/50 px-8 py-3 rounded-full w-64 text-center">Views</div>
                <ArrowRight className="text-gray-600 w-5 h-5 rotate-90" />
                
                <div className="bg-indigo-600/20 text-indigo-300 border border-indigo-500/50 px-8 py-3 rounded-full w-64 text-center">Stored Procedures</div>
                <ArrowRight className="text-gray-600 w-5 h-5 rotate-90" />
                
                <div className="bg-zinc-800 text-zinc-300 border border-zinc-600 px-8 py-3 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.1)] w-64 text-center font-black">Optimization</div>

            </div>
        </div>
      </section>

    </div>
  );
};

export default SqlSyllabus;