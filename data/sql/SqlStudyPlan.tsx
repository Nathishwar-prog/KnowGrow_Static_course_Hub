import React, { useState } from 'react';
import { 
  Database, Terminal, Copy, Check, Target, 
  Map, Lightbulb, DatabaseZap, Workflow, Layers, 
  Network, Code2, Cpu, ShieldCheck
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
        <button onClick={handleCopy} className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-slate-700 hover:text-white transition-colors border border-gray-700" title="Copy code">
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-xs sm:text-sm font-mono bg-gray-900 text-gray-300 leading-relaxed border-t-0 border border-gray-800 rounded-b-xl">
        <code>{codeSnippet}</code>
      </pre>
    </div>
  );
};

const PhaseCard = ({ 
    phaseNum, 
    colorDot,
    colorTheme,
    icon: Icon,
    title, 
    week, 
    subtitle, 
    topics, 
    exampleCode 
}: { 
    phaseNum: string, 
    colorDot: string,
    colorTheme: string,
    icon: any,
    title: string, 
    week: string, 
    subtitle: string, 
    topics: React.ReactNode, 
    exampleCode?: string 
}) => {
    return (
        <div className={`bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 border-t-4 ${colorTheme} transition-transform hover:-translate-y-1 group relative overflow-hidden`}>
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] transition-opacity group-hover:opacity-10 dark:opacity-[0.05] dark:group-hover:opacity-[0.15]">
                <Icon className="w-48 h-48" />
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-gray-100 dark:border-gray-700 relative z-10">
                <div className="flex items-center gap-4">
                     <span className="text-3xl">{colorDot}</span>
                     <div>
                         <span className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400 flex items-center gap-2 mb-1">
                             <span className="bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded text-[10px]">{week}</span>
                             Phase {phaseNum}
                         </span>
                         <h3 className="text-2xl font-black text-gray-900 dark:text-white flex items-center">
                            {title}
                         </h3>
                     </div>
                </div>
            </div>

            <p className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-6 relative z-10">{subtitle}</p>

            <div className="mb-6 relative z-10">
                <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-3 ml-2 flex items-center gap-2">
                    <Target size={14} /> Topics to Learn
                </h4>
                <div className="bg-gray-50 dark:bg-gray-900/50 p-4 sm:p-5 rounded-2xl border border-gray-100 dark:border-gray-800">
                    {topics}
                </div>
            </div>

            {exampleCode && (
                <div className="relative z-10">
                     <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-2 ml-2 flex items-center gap-2">
                        <Terminal size={14} /> Practice Example
                     </h4>
                     <CodeSnippetBlock codeSnippet={exampleCode} />
                </div>
            )}
        </div>
    );
};


const SqlStudyPlan: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gray-50 dark:bg-gray-900 min-h-screen font-sans">
      <header className="max-w-4xl mx-auto text-center mb-16 pt-8 relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-48 bg-gray-300 dark:bg-gray-700 rounded-full blur-[100px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-gray-700 to-gray-900 dark:from-gray-600 dark:to-gray-800 rounded-2xl mb-6 shadow-xl transform transition-transform cursor-default">
          <Map className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          SQL Study Plan
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
          The ultimate roadmap to master database querying, manipulation, and performance scaling over 8 weeks.
        </p>
      </header>

      <div className="max-w-5xl mx-auto space-y-8 relative">
        {/* Connection Line */}
        <div className="absolute left-8 sm:left-1/2 top-10 bottom-10 w-1 bg-gray-200 dark:bg-gray-800 transform sm:-translate-x-1/2 rounded-full hidden sm:block"></div>

        <PhaseCard 
            phaseNum="1"
            colorDot="🟡"
            colorTheme="border-t-yellow-400"
            icon={Lightbulb}
            title="SQL Fundamentals"
            week="Week 1"
            subtitle="Focus on basic SQL concepts and querying foundations."
            topics={
                <ul className="grid sm:grid-cols-2 gap-y-2 gap-x-6 text-sm font-medium text-gray-700 dark:text-gray-300">
                    <li><strong className="text-gray-400">1️⃣</strong> What is SQL</li>
                    <li><strong className="text-gray-400">2️⃣</strong> Database and Tables</li>
                    <li><strong className="text-gray-400">3️⃣</strong> SQL Syntax</li>
                    <li><strong className="text-gray-400">4️⃣</strong> SQL Data Types</li>
                    <li><strong className="text-gray-400">5️⃣</strong> SELECT Statement</li>
                    <li><strong className="text-gray-400">6️⃣</strong> SELECT DISTINCT</li>
                    <li><strong className="text-gray-400">7️⃣</strong> WHERE Clause</li>
                    <li><strong className="text-gray-400">8️⃣</strong> AND, OR, NOT Operators</li>
                    <li><strong className="text-gray-400">9️⃣</strong> ORDER BY</li>
                    <li><strong className="text-gray-400">🔟</strong> LIMIT / TOP</li>
                </ul>
            }
            exampleCode={`SELECT Name, Marks\nFROM Students\nWHERE Marks > 80\nORDER BY Marks DESC;`}
        />

        <PhaseCard 
            phaseNum="2"
            colorDot="🟡"
            colorTheme="border-t-amber-500"
            icon={DatabaseZap}
            title="Data Manipulation"
            week="Week 2"
            subtitle="Learn how to explicitly insert, update, and delete core data records."
            topics={
                <div className="grid sm:grid-cols-2 gap-6 text-sm font-medium text-gray-700 dark:text-gray-300">
                    <ul className="space-y-2">
                        <li className="font-bold text-gray-900 dark:text-white mb-2">Core DML</li>
                        <li className="flex items-center text-amber-600 dark:text-amber-400"><div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></div> INSERT INTO</li>
                        <li className="flex items-center text-amber-600 dark:text-amber-400"><div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></div> UPDATE</li>
                        <li className="flex items-center text-amber-600 dark:text-amber-400"><div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></div> DELETE</li>
                        <li className="flex items-center text-amber-600 dark:text-amber-400"><div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></div> SELECT INTO</li>
                    </ul>
                    <ul className="space-y-2 p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 font-mono text-xs">
                        <li className="font-sans font-bold text-gray-900 dark:text-white mb-2 uppercase text-[10px] tracking-widest text-center border-b border-gray-100 dark:border-gray-700 pb-2">SQL Constraints</li>
                        <li className="bg-gray-50 dark:bg-gray-900 px-2 py-1 rounded border border-gray-100 dark:border-gray-700">PRIMARY KEY</li>
                        <li className="bg-gray-50 dark:bg-gray-900 px-2 py-1 rounded border border-gray-100 dark:border-gray-700">FOREIGN KEY</li>
                        <li className="bg-gray-50 dark:bg-gray-900 px-2 py-1 rounded border border-gray-100 dark:border-gray-700">UNIQUE</li>
                        <li className="bg-gray-50 dark:bg-gray-900 px-2 py-1 rounded border border-gray-100 dark:border-gray-700">NOT NULL</li>
                        <li className="bg-gray-50 dark:bg-gray-900 px-2 py-1 rounded border border-gray-100 dark:border-gray-700">CHECK</li>
                    </ul>
                </div>
            }
            exampleCode={`INSERT INTO Students\nVALUES (1,'Arun',85);`}
        />

        <PhaseCard 
            phaseNum="3"
            colorDot="🟠"
            colorTheme="border-t-orange-500"
            icon={Workflow}
            title="SQL Functions"
            week="Week 3"
            subtitle="Learn powerfully how to process and analyze massive sets of internal data."
            topics={
                <div className="grid sm:grid-cols-3 gap-6 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                    <div className="bg-gray-100 dark:bg-gray-800/80 p-4 rounded-xl">
                        <h5 className="font-bold text-orange-600 dark:text-orange-400 mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">Aggregate</h5>
                        <ul className="space-y-2 font-mono">
                            <li>COUNT()</li>
                            <li>SUM()</li>
                            <li>AVG()</li>
                            <li>MIN()</li>
                            <li>MAX()</li>
                        </ul>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800/80 p-4 rounded-xl">
                        <h5 className="font-bold text-orange-600 dark:text-orange-400 mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">String</h5>
                        <ul className="space-y-2 font-mono">
                            <li>UPPER()</li>
                            <li>LOWER()</li>
                            <li>LEN()</li>
                            <li>SUBSTRING()</li>
                        </ul>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800/80 p-4 rounded-xl">
                        <h5 className="font-bold text-orange-600 dark:text-orange-400 mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">Date</h5>
                        <ul className="space-y-2 font-mono">
                            <li>GETDATE()</li>
                            <li>DATEADD()</li>
                            <li>DATEDIFF()</li>
                        </ul>
                    </div>
                </div>
            }
            exampleCode={`SELECT AVG(Marks)\nFROM Students;`}
        />

        <PhaseCard 
            phaseNum="4"
            colorDot="🔵"
            colorTheme="border-t-blue-500"
            icon={Network}
            title="Joins"
            week="Week 4"
            subtitle="Understand table joins, one of the most critical foundational SQL concepts natively."
            topics={
                <div className="flex flex-wrap gap-3 text-sm font-bold text-white">
                    <span className="bg-blue-600 px-4 py-2 rounded-lg shadow-sm">INNER JOIN</span>
                    <span className="bg-blue-500 px-4 py-2 rounded-lg shadow-sm">LEFT JOIN</span>
                    <span className="bg-blue-400 px-4 py-2 rounded-lg shadow-sm">RIGHT JOIN</span>
                    <span className="bg-blue-700 px-4 py-2 rounded-lg shadow-sm">FULL JOIN</span>
                    <span className="bg-sky-500 px-4 py-2 rounded-lg shadow-sm border border-blue-400">SELF JOIN</span>
                </div>
            }
            exampleCode={`SELECT Students.Name, Courses.CourseName\nFROM Students\nINNER JOIN Courses\nON Students.StudentID = Courses.StudentID;`}
        />

        <PhaseCard 
            phaseNum="5"
            colorDot="🟣"
            colorTheme="border-t-purple-500"
            icon={Layers}
            title="Advanced SQL"
            week="Week 5"
            subtitle="Master highly advanced query techniques combining nested conditions."
            topics={
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm font-bold text-purple-800 dark:text-purple-300">
                    <div className="bg-purple-100 dark:bg-purple-900/30 px-4 py-3 rounded-lg border border-purple-200 dark:border-purple-800">✔ GROUP BY</div>
                    <div className="bg-purple-100 dark:bg-purple-900/30 px-4 py-3 rounded-lg border border-purple-200 dark:border-purple-800">✔ HAVING</div>
                    <div className="bg-purple-100 dark:bg-purple-900/30 px-4 py-3 rounded-lg border border-purple-200 dark:border-purple-800">✔ Subqueries</div>
                    <div className="bg-purple-100 dark:bg-purple-900/30 px-4 py-3 rounded-lg border border-purple-200 dark:border-purple-800">✔ EXISTS</div>
                    <div className="bg-purple-100 dark:bg-purple-900/30 px-4 py-3 rounded-lg border border-purple-200 dark:border-purple-800">✔ UNION</div>
                    <div className="bg-purple-100 dark:bg-purple-900/30 px-4 py-3 rounded-lg border border-purple-200 dark:border-purple-800">✔ CASE Statements</div>
                </div>
            }
            exampleCode={`SELECT City, COUNT(*)\nFROM Students\nGROUP BY City;`}
        />

        <PhaseCard 
            phaseNum="6"
            colorDot="🔴"
            colorTheme="border-t-red-500"
            icon={Code2}
            title="Database Programming"
            week="Week 6"
            subtitle="Script custom backend logic flows entirely contained inside SQL Server."
            topics={
                 <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-xs sm:text-sm text-center font-bold text-white">
                    <div className="bg-red-600 py-3 px-2 rounded-xl shadow-md flex items-center justify-center">Stored Procedures</div>
                    <div className="bg-red-500 py-3 px-2 rounded-xl shadow-md flex items-center justify-center">Functions</div>
                    <div className="bg-red-400 py-3 px-2 rounded-xl shadow-md flex items-center justify-center text-red-950">Triggers</div>
                    <div className="bg-rose-600 py-3 px-2 rounded-xl shadow-md flex items-center justify-center">Transactions</div>
                    <div className="bg-rose-500 py-3 px-2 rounded-xl shadow-md flex items-center justify-center text-rose-100">Views</div>
                 </div>
            }
            exampleCode={`CREATE PROCEDURE GetStudents\nAS\nSELECT * FROM Students;`}
        />

        <PhaseCard 
            phaseNum="7"
            colorDot="🟤"
            colorTheme="border-t-stone-500"
            icon={Cpu}
            title="Performance & Optimization"
            week="Week 7-8"
            subtitle="Study real-world enterprise database tuning logic and performance optimization paths."
            topics={
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-4 bg-stone-50 dark:bg-stone-900/50 p-4 rounded-xl border border-stone-200 dark:border-stone-800">
                         <div className="w-10 h-10 shrink-0 bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-300 rounded-lg flex items-center justify-center font-black">1</div>
                         <p className="font-bold text-stone-900 dark:text-stone-300 text-sm">Indexes & Query Optimization</p>
                    </div>
                    <div className="flex items-center gap-4 bg-stone-50 dark:bg-stone-900/50 p-4 rounded-xl border border-stone-200 dark:border-stone-800">
                         <div className="w-10 h-10 shrink-0 bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-300 rounded-lg flex items-center justify-center font-black">2</div>
                         <p className="font-bold text-stone-900 dark:text-stone-300 text-sm">Execution Plans</p>
                    </div>
                    <div className="flex items-center gap-4 bg-stone-50 dark:bg-stone-900/50 p-4 rounded-xl border border-stone-200 dark:border-stone-800">
                         <div className="w-10 h-10 shrink-0 bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-300 rounded-lg flex items-center justify-center font-black">3</div>
                         <p className="font-bold text-stone-900 dark:text-stone-300 text-sm">Database Normalization</p>
                    </div>
                    <div className="flex items-center gap-4 bg-stone-50 dark:bg-stone-900/50 p-4 rounded-xl border border-stone-200 dark:border-stone-800">
                         <div className="w-10 h-10 shrink-0 bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-300 rounded-lg flex items-center justify-center font-black flex-col text-xs"><ShieldCheck size={16}/> </div>
                         <p className="font-bold text-stone-900 dark:text-stone-300 text-sm">Security and Permissions</p>
                    </div>
                </div>
            }
        />

      </div>
    </div>
  );
};

export default SqlStudyPlan;