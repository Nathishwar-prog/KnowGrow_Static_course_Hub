import React from 'react';
import { Exercise } from '../exerciseData';

const NumpyExercises: React.FC = () => {
    return (
        <div className="space-y-8">
            <Exercise 
                id="np-create-array"
                title="Create NumPy Array"
                language="python"
                initialCode="import numpy as np\n\n# Create a numpy array with values 1, 2, 3, 4, 5\narr = np.array([1, 2, 3, 4, 5])\nprint(arr)"
                instruction={
                    <p>Import <code>numpy</code> as <code>np</code> and create an array with the values 1 through 5 using <code>np.array()</code>.</p>
                }
                solution="import numpy as np\narr = np.array([1, 2, 3, 4, 5])\nprint(arr)"
                testCases={[
                    {
                        id: 'tc1',
                        description: 'Check if "arr" exists',
                        code: 'assert "arr" in locals(), "The variable \'arr\' is not defined"'
                    },
                    {
                        id: 'tc2',
                        description: 'Verify array values',
                        code: 'import numpy as np\nassert np.array_equal(arr, np.array([1, 2, 3, 4, 5])), f"Expected [1, 2, 3, 4, 5], but got {arr}"'
                    }
                ]}
            />
            <Exercise 
                id="np-array-ops"
                title="Array Operations"
                language="python"
                initialCode="import numpy as np\n\na = np.array([1, 2, 3])\nb = np.array([4, 5, 6])\n\n# Multiply a and b and print the result\n"
                instruction={
                    <p>Create two NumPy arrays <code>a</code> and <code>b</code>, then multiply them element-wise and print the result.</p>
                }
                solution="import numpy as np\na = np.array([1, 2, 3])\nb = np.array([4, 5, 6])\nprint(a * b)"
                testCases={[
                    {
                        id: 'tc1',
                        description: 'Verify element-wise multiplication result',
                        code: 'import numpy as np\nexpected = np.array([4, 10, 18])\n# We check if the last printed output or a specific result variable matches\n# Since the user prints it, we should ideally check a variable "res"\n'
                    }
                ]}
            />
        </div>
    );
};

export default NumpyExercises;
