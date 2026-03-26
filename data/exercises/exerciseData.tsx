import React, { useState } from 'react';
import type { Course } from '../../App';
import HtmlExercisePage from './html/HtmlExercisePage';
import CssExercisePage from './css/CssExercisePage';
import JsExercisePage from './js/JsExercisePage';
import SqlExercisePage from './sql/SqlExercisePage';
import PythonExercisePage from './python/PythonExercisePage';
import NumpyExercisePage from './numpy/NumpyExercisePage';
import { BrowserMockup } from '../components';
import PythonRunner from '../../components/PythonRunner';
import { useAllProgress } from '../../context/useAllProgress';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import Editor from '@monaco-editor/react';
import { useTheme } from '../../context/ThemeContext';

const PandasExercisePage = () => <div className="p-8 text-center text-gray-500">Pandas Exercises Coming Soon</div>;
const MatplotlibExercisePage = () => <div className="p-8 text-center text-gray-500">Matplotlib Exercises Coming Soon</div>;
const SeabornExercisePage = () => <div className="p-8 text-center text-gray-500">Seaborn Exercises Coming Soon</div>;

export interface TestCase {
    id: string;
    description: string;
    code: string; // Python code to run after user code, should raise Exception on failure
}

interface ExerciseProps {
    id: string; // Unique ID for progress tracking
    title: string;
    instruction: React.ReactNode;
    initialCode: string;
    solution: string;
    language: 'html' | 'javascript' | 'python';
    testCases?: TestCase[];
}

export const Exercise: React.FC<ExerciseProps> = ({ id, title, instruction, initialCode, solution, language, testCases }) => {
    const [code, setCode] = useState(initialCode);
    const [showSolution, setShowSolution] = useState(false);
    const [jsOutput, setJsOutput] = useState<string[]>([]);
    const [isPythonRunning, setIsPythonRunning] = useState(false);
    const [pythonError, setPythonError] = useState<string | null>(null);
    const [testResults, setTestResults] = useState<{ id: string; passed: boolean; error?: string }[]>([]);
    const [allTestsPassed, setAllTestsPassed] = useState(false);

    const { markTopicAsCompleted } = useAllProgress();
    const { courseId = 'python' } = useParams<{ courseId: string }>();
    const { theme } = useTheme();

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

    const handleRunClick = () => {
        if (language === 'javascript') {
            runJsCode();
        } else if (language === 'python') {
            setIsPythonRunning(true);
        }
    };

    return (
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg mb-8">
            <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-t-lg border-b border-gray-200 dark:border-gray-700">
                <h4 className="font-bold text-xl text-gray-800 dark:text-gray-100">{title}</h4>
            </div>
            <div className="p-4">
                <div className="prose dark:prose-invert max-w-none prose-indigo mb-4">{instruction}</div>
                <div className="h-64 border border-gray-300 dark:border-gray-600 rounded-md overflow-hidden shadow-inner">
                    <Editor
                        height="100%"
                        language={language === 'javascript' ? 'javascript' : (language === 'python' ? 'python' : 'html')}
                        theme={theme === 'dark' ? 'vs-dark' : 'light'}
                        value={code}
                        onChange={(value) => setCode(value || '')}
                        options={{
                            minimap: { enabled: false },
                            fontSize: 14,
                            fontWeight: '500',
                            fontFamily: 'JetBrains Mono, Menlo, Monaco, Courier New, monospace',
                            padding: { top: 16, bottom: 16 },
                            scrollBeyondLastLine: false,
                            smoothScrolling: true,
                            cursorBlinking: 'smooth',
                        }}
                    />
                </div>
                <div className="mt-4 flex flex-col space-y-2">
                    {language === 'python' && (
                        <PythonRunner 
                            code={code} 
                            testCode={testCases?.map(tc => `
try:
    ${tc.code.replace(/\n/g, '\n    ')}
    print("__TEST_RESULT__${tc.id}:PASS")
except Exception as e:
    print(f"__TEST_RESULT__${tc.id}:FAIL:{str(e)}")
`).join('\n')}
                            onOutput={(lines) => {
                                // Extract test results from output
                                const newResults: typeof testResults = [];
                                const filteredOutput: string[] = [];
                                
                                lines.forEach(line => {
                                    if (line.startsWith('__TEST_RESULT__')) {
                                        const [_, content] = line.split('__TEST_RESULT__');
                                        const [id, status, ...error] = content.split(':');
                                        newResults.push({
                                            id,
                                            passed: status === 'PASS',
                                            error: error.join(':')
                                        });
                                    } else {
                                        filteredOutput.push(line);
                                    }
                                });
                                
                                setJsOutput(filteredOutput);
                                if (newResults.length > 0) {
                                    setTestResults(newResults);
                                    const allPassed = newResults.every(r => r.passed);
                                    setAllTestsPassed(allPassed);
                                    if (allPassed) {
                                        markTopicAsCompleted(courseId, id);
                                        confetti({
                                            particleCount: 100,
                                            spread: 70,
                                            origin: { y: 0.6 }
                                        });
                                    }
                                }
                            }} 
                            onError={setPythonError} 
                            isRunning={isPythonRunning} 
                            setIsRunning={setIsPythonRunning} 
                        />
                    )}
                    {pythonError && (
                        <div className="text-red-500 text-sm mb-2 flex items-center">
                            <i className="fa-solid fa-circle-exclamation mr-2"></i>
                            {pythonError}
                        </div>
                    )}
                    <div className="flex space-x-2">
                        {(language === 'javascript' || language === 'python') && (
                            <button
                                onClick={handleRunClick}
                                disabled={isPythonRunning}
                                className={`${isPythonRunning ? 'bg-green-400' : 'bg-green-600 hover:bg-green-700'} text-white font-bold py-2 px-4 rounded-md transition-colors text-sm flex items-center`}
                            >
                                <i className={`fa-solid ${isPythonRunning ? 'fa-spinner fa-spin' : 'fa-play'} mr-2`}></i>
                                {isPythonRunning ? 'Running...' : 'Run Code'}
                            </button>
                        )}
                        <button
                            onClick={() => setShowSolution(!showSolution)}
                            className="bg-gray-500 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-600 transition-colors text-sm"
                        >
                            {showSolution ? 'Hide Answer' : 'Show Answer'}
                        </button>
                    </div>
                </div>
                {showSolution && (
                    <div className="mt-4 p-4 bg-emerald-50 dark:bg-emerald-900/30 rounded-md border-l-4 border-emerald-500">
                        <h5 className="font-bold text-emerald-800 dark:text-emerald-300">Solution:</h5>
                        <pre className="font-mono text-sm mt-2 bg-white dark:bg-gray-800 p-2 rounded overflow-x-auto">
                            <code>{solution}</code>
                        </pre>
                    </div>
                )}

                {/* Test Cases Section */}
                {testCases && testCases.length > 0 && (
                    <div className="mt-8">
                        <h5 className="font-black text-xs uppercase tracking-widest text-slate-500 mb-4 flex items-center">
                            <i className="fa-solid fa-vial mr-2"></i>
                            Verification Tests
                        </h5>
                        <div className="space-y-3">
                            {testCases.map((tc) => {
                                const result = testResults.find(r => r.id === tc.id);
                                return (
                                    <div 
                                        key={tc.id}
                                        className={`flex items-center justify-between p-3 rounded-xl border-2 transition-all duration-300 ${
                                            result 
                                                ? result.passed 
                                                    ? 'bg-emerald-50 border-emerald-100 dark:bg-emerald-900/10 dark:border-emerald-900/40' 
                                                    : 'bg-red-50 border-red-100 dark:bg-red-900/10 dark:border-red-900/40'
                                                : 'bg-slate-50 border-slate-100 dark:bg-slate-800/50 dark:border-slate-800'
                                        }`}
                                    >
                                        <div className="flex items-center space-x-3">
                                            <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${
                                                result
                                                    ? result.passed ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white'
                                                    : 'bg-slate-200 dark:bg-slate-700 text-slate-400'
                                            }`}>
                                                <i className={`fa-solid ${
                                                    result
                                                        ? result.passed ? 'fa-check' : 'fa-xmark'
                                                        : 'fa-circle-dot text-[8px]'
                                                } text-xs`}></i>
                                            </div>
                                            <span className={`text-sm font-bold ${
                                                result 
                                                    ? result.passed ? 'text-emerald-700 dark:text-emerald-400' : 'text-red-700 dark:text-red-400'
                                                    : 'text-slate-600 dark:text-slate-400'
                                            }`}>
                                                {tc.description}
                                            </span>
                                        </div>
                                        {result && !result.passed && result.error && (
                                            <span className="text-[10px] bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-300 px-2 py-1 rounded-md font-mono">
                                                {result.error}
                                            </span>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {allTestsPassed && (
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-6 p-4 bg-emerald-100 dark:bg-emerald-900/40 border-2 border-emerald-500/20 rounded-2xl flex items-center space-x-4"
                    >
                        <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg shadow-emerald-500/30">
                            <i className="fa-solid fa-trophy"></i>
                        </div>
                        <div>
                            <h6 className="font-black text-emerald-800 dark:text-emerald-300">Perfect Solution!</h6>
                            <p className="text-sm text-emerald-700 dark:text-emerald-400">All test cases passed. You've earned 10 XP!</p>
                        </div>
                    </motion.div>
                )}
            </div>

            {/* Output Section */}
            {(language === 'html' || ((language === 'javascript' || language === 'python') && jsOutput.length > 0)) && (
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
                    {(language === 'javascript' || language === 'python') && jsOutput.length > 0 && (
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
    numpy: { component: NumpyExercisePage },
    pandas: { component: PandasExercisePage },
    matplotlib: { component: MatplotlibExercisePage },
    seaborn: { component: SeabornExercisePage },
};