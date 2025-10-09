import React, { useState } from 'react';
import type { Course } from '../../App';
import HtmlExercisePage from './html/HtmlExercisePage';
import CssExercisePage from './css/CssExercisePage';
import JsExercisePage from './js/JsExercisePage';
import SqlExercisePage from './sql/SqlExercisePage';
import PythonExercisePage from './python/PythonExercisePage';
import { BrowserMockup } from '../components';

interface ExerciseProps {
    title: string;
    instruction: React.ReactNode;
    initialCode: string;
    solution: string;
    language: 'html' | 'javascript';
}

export const Exercise: React.FC<ExerciseProps> = ({ title, instruction, initialCode, solution, language }) => {
    const [code, setCode] = useState(initialCode);
    const [showSolution, setShowSolution] = useState(false);
    const [jsOutput, setJsOutput] = useState<string[]>([]);

    const iframeSrcDoc = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { 
              font-family: sans-serif; 
              padding: 1rem; 
              color: #1f2937; /* Default text color for light mode */
            }
          </style>
        </head>
        <body>
          ${code}
        </body>
        </html>
    `;

    const runJsCode = () => {
        const newOutput: string[] = [];
        const originalConsoleLog = console.log;
        
        // Override console.log to capture output
        console.log = (...args) => {
            newOutput.push(args.map(arg => {
                try {
                    if (arg === undefined) return 'undefined';
                    if (arg === null) return 'null';
                    if (typeof arg === 'object') {
                        return JSON.stringify(arg, null, 2);
                    }
                    return String(arg);
                } catch (e) {
                    return '[Unserializable Object]';
                }
            }).join(' '));
        };

        try {
            // Use Function constructor for a slightly safer execution context than eval
            new Function(code)();
        } catch (error: any) {
            newOutput.push(`Error: ${error.message}`);
        } finally {
            // Restore original console.log and update state with captured output
            console.log = originalConsoleLog;
            setJsOutput(newOutput);
        }
    };

    return (
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg mb-8">
            <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-t-lg border-b border-gray-200 dark:border-gray-700">
                <h4 className="font-bold text-xl text-gray-800 dark:text-gray-100">{title}</h4>
            </div>
            <div className="p-4">
                <div className="prose dark:prose-invert max-w-none prose-indigo mb-4">{instruction}</div>
                <textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="w-full h-32 p-2 font-mono text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500"
                    aria-label="Code editor for exercise"
                    spellCheck="false"
                />
                <div className="mt-4 flex space-x-2">
                    {language === 'javascript' && (
                        <button
                            onClick={runJsCode}
                            className="bg-green-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700 transition-colors text-sm flex items-center"
                        >
                            <i className="fa-solid fa-play mr-2"></i>Run Code
                        </button>
                    )}
                    <button
                        onClick={() => setShowSolution(!showSolution)}
                        className="bg-gray-500 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-600 transition-colors text-sm"
                    >
                        {showSolution ? 'Hide Answer' : 'Show Answer'}
                    </button>
                </div>
                {showSolution && (
                    <div className="mt-4 p-4 bg-emerald-50 dark:bg-emerald-900/30 rounded-md border-l-4 border-emerald-500">
                        <h5 className="font-bold text-emerald-800 dark:text-emerald-300">Solution:</h5>
                        <pre className="font-mono text-sm mt-2 bg-white dark:bg-gray-800 p-2 rounded overflow-x-auto">
                            <code>{solution}</code>
                        </pre>
                    </div>
                )}
            </div>

            {/* Output Section */}
            {(language === 'html' || (language === 'javascript' && jsOutput.length > 0)) && (
                 <div className="border-t border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-b-lg">
                    <h5 className="font-bold text-lg mb-2 text-gray-700 dark:text-gray-200">Output</h5>
                    {language === 'html' && (
                        <BrowserMockup title="Output Preview">
                             <iframe
                                 srcDoc={iframeSrcDoc}
                                 title="HTML Output"
                                 sandbox="allow-scripts"
                                 className="w-full h-48 border-0 bg-white"
                             />
                         </BrowserMockup>
                    )}
                     {language === 'javascript' && jsOutput.length > 0 && (
                         <pre className="bg-gray-900 text-white font-mono text-sm p-4 rounded-md max-h-48 overflow-y-auto">
                             <code>
                                 {jsOutput.join('\n')}
                             </code>
                         </pre>
                     )}
                 </div>
            )}
        </div>
    );
};


export const ALL_EXERCISES: { [key in Course]: { component: React.FC<any> } } = {
    html: { component: HtmlExercisePage },
    css: { component: CssExercisePage },
    js: { component: JsExercisePage },
    sql: { component: SqlExercisePage },
    python: { component: PythonExercisePage },
};