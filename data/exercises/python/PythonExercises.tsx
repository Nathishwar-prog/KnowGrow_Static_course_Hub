import React from 'react';
import { Exercise } from '../exerciseData';

const PythonExercises: React.FC = () => {
    return (
        <div className="space-y-8">
            <Exercise 
                title="Hello Python"
                language="python"
                initialCode="print('Hello from Python in KnowGrow!')"
                instruction={
                    <p>Welcome to Python! Use the <code>print()</code> function to display your first message.</p>
                }
                solution="print('Hello from Python in KnowGrow!')"
            />
            <Exercise 
                title="Basic Arithmetic"
                language="python"
                initialCode="a = 10\nb = 5\n# Calculate the sum and print it\n"
                instruction={
                    <p>Assign two variables <code>a</code> and <code>b</code> and calculate their sum. Print the result.</p>
                }
                solution="a = 10\nb = 5\nprint(a + b)"
            />
        </div>
    );
};

export default PythonExercises;
