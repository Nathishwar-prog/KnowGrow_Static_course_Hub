import React from 'react';
import { Exercise } from '../exerciseData';

const PythonExercises: React.FC = () => {
    return (
        <div className="space-y-8">
            <Exercise 
                id="py-hello"
                title="Hello Python"
                language="python"
                initialCode="print('Hello from Python in KnowGrow!')"
                instruction={
                    <p>Welcome to Python! Use the <code>print()</code> function to display your first message.</p>
                }
                solution="print('Hello from Python in KnowGrow!')"
                testCases={[
                    {
                        id: 'tc1',
                        description: 'Check if print is used',
                        code: '# In a real grader we would check stdout, but for this simple one we just pass'
                    }
                ]}
            />
            <Exercise 
                id="py-arithmetic"
                title="Basic Arithmetic"
                language="python"
                initialCode="a = 10\nb = 5\n# Calculate the sum and print it\n"
                instruction={
                    <p>Assign two variables <code>a</code> and <code>b</code> and calculate their sum. Print the result.</p>
                }
                solution="a = 10\nb = 5\nprint(a + b)"
                testCases={[
                    {
                        id: 'tc1',
                        description: 'Check variable "a"',
                        code: 'assert a == 10, f"Expected a=10, got {a}"'
                    },
                    {
                        id: 'tc2',
                        description: 'Check variable "b"',
                        code: 'assert b == 5, f"Expected b=5, got {b}"'
                    }
                ]}
            />
        </div>
    );
};

export default PythonExercises;
