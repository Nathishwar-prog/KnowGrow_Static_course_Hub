import React from 'react';
import { Exercise } from '../exerciseData';

const JsExercises: React.FC = () => {
    return (
        <div>
            <Exercise
                title="Exercise 1: Console Log"
                instruction={<p>Use <code>console.log()</code> to print the message "Hello, World!" to the console. Click "Run Code" to see the output.</p>}
                initialCode={`// Your code here`}
                solution={`console.log("Hello, World!");`}
                language="javascript"
            />

            <Exercise
                title="Exercise 2: Variables"
                instruction={<p>Declare a variable named <code>message</code> and assign it the value "This is a message". Then, log the variable to the console.</p>}
                initialCode={`// Your code here`}
                solution={`let message = "This is a message";
console.log(message);`}
                language="javascript"
            />
        </div>
    );
};

export default JsExercises;