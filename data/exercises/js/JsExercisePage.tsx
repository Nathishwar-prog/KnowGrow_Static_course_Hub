import React, { useState } from 'react';
import JsExercises from './JsExercises';
import JsQuiz from './JsQuiz';

type ActiveView = 'exercises' | 'quiz';

const TabButton: React.FC<{ active: boolean; onClick: () => void; children: React.ReactNode }> = ({ active, onClick, children }) => (
    <button
        onClick={onClick}
        className={`py-2 px-5 font-bold rounded-t-lg transition-colors ${
            active 
            ? 'bg-white dark:bg-gray-800 border-b-2 border-indigo-500 text-indigo-500' 
            : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
        }`}
    >
        {children}
    </button>
);


const JsExercisePage: React.FC = () => {
    const [activeView, setActiveView] = useState<ActiveView>('exercises');

    return (
        <div>
            <h1 className="text-5xl font-bold mb-4 text-gray-800 dark:text-gray-100">JavaScript Exercises</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Test your JS skills with our exercises and quizzes.</p>

            <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
                <TabButton active={activeView === 'exercises'} onClick={() => setActiveView('exercises')}>
                    <i className="fa-solid fa-pencil mr-2"></i> Exercises
                </TabButton>
                <TabButton active={activeView === 'quiz'} onClick={() => setActiveView('quiz')}>
                    <i className="fa-solid fa-question-circle mr-2"></i> Quiz
                </TabButton>
            </div>

            <div>
                {activeView === 'exercises' && <JsExercises />}
                {activeView === 'quiz' && <JsQuiz />}
            </div>
        </div>
    );
};

export default JsExercisePage;
