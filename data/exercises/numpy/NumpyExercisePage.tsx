import React from 'react';
import NumpyExercises from './NumpyExercises';

const NumpyExercisePage: React.FC = () => {
    return (
        <div>
            <h1 className="text-5xl font-bold mb-4 text-gray-800 dark:text-gray-100">NumPy Exercises</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Master multi-dimensional arrays with these hands-on NumPy challenges.</p>

            <div className="mt-8">
                <NumpyExercises />
            </div>
        </div>
    );
};

export default NumpyExercisePage;
