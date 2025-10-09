import React from 'react';
import { Exercise } from '../exerciseData';

const HtmlExercises: React.FC = () => {
    return (
        <div>
            <Exercise
                title="Exercise 1: Add a Heading"
                instruction={<p>Add an <code>&lt;h1&gt;</code> tag with the text "My First Heading". The output will appear in the preview below.</p>}
                initialCode={`<!-- Type your code here -->`}
                solution={`<h1>My First Heading</h1>`}
                language="html"
            />

            <Exercise
                title="Exercise 2: Create a Link"
                instruction={<p>Create an <code>&lt;a&gt;</code> tag that links to "https://www.knowgrow.dev" and has the text "Visit KnowGrow".</p>}
                initialCode={`<!-- Type your code here -->`}
                solution={`<a href="https://www.knowgrow.dev">Visit KnowGrow</a>`}
                language="html"
            />
        </div>
    );
};

export default HtmlExercises;