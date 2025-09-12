import React from 'react';
import { CodeBlock, SimpleTable } from '../components';

const HtmlComputercode: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">HTML provides several inline elements for formatting text that represents computer code, keyboard input, variables, and program output.</p>
    <p className="text-lg leading-relaxed mt-4">These elements are not just for styling; they provide semantic meaning to the content, which is beneficial for accessibility and search engines.</p>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <SimpleTable
        headers={['Tag', 'Description']}
        rows={[
            [<code>&lt;code&gt;</code>, 'Defines a piece of computer code.'],
            [<code>&lt;kbd&gt;</code>, 'Defines keyboard input.'],
            [<code>&lt;samp&gt;</code>, 'Defines sample output from a computer program.'],
            [<code>&lt;var&gt;</code>, 'Defines a variable.'],
            [<code>&lt;pre&gt;</code>, 'Defines preformatted text, preserving spaces and line breaks.']
        ]}
    />
    
    <h2 className="text-3xl font-bold mt-10 mb-4">The &lt;code&gt; Element</h2>
    <p className="text-lg leading-relaxed">The <code>&lt;code&gt;</code> element is used to define a piece of computer code. The content inside is displayed in the browser's default monospace font.</p>
    <CodeBlock>{`<p>The HTML <code>&lt;p&gt;</code> element defines a paragraph.</p>`}</CodeBlock>

    <h2 className="text-3xl font-bold mt-10 mb-4">The &lt;kbd&gt; Element</h2>
    <p className="text-lg leading-relaxed">The <code>&lt;kbd&gt;</code> element is used to define keyboard input. The content inside is displayed in the browser's default monospace font.</p>
    <CodeBlock>{`<p>Save the document by pressing <kbd>Ctrl + S</kbd></p>`}</CodeBlock>
    <div className="p-4 my-4 bg-gray-100 dark:bg-gray-800/50 rounded-md text-lg">
        <p>Save the document by pressing <kbd className="bg-gray-300 dark:bg-gray-600 p-1 rounded-md border-b-2 border-gray-400 dark:border-gray-500">Ctrl</kbd> + <kbd className="bg-gray-300 dark:bg-gray-600 p-1 rounded-md border-b-2 border-gray-400 dark:border-gray-500">S</kbd></p>
    </div>

    <h2 className="text-3xl font-bold mt-10 mb-4">The &lt;samp&gt; Element</h2>
    <p className="text-lg leading-relaxed">The <code>&lt;samp&gt;</code> element is used to define sample output from a computer program. The content inside is displayed in the browser's default monospace font.</p>
    <CodeBlock>{`<p>If you input an incorrect value, the program will output:</p>
<p><samp>Error: Invalid input.</samp></p>`}</CodeBlock>
    
    <h2 className="text-3xl font-bold mt-10 mb-4">The &lt;var&gt; Element</h2>
    <p className="text-lg leading-relaxed">The <code>&lt;var&gt;</code> element is used to define a variable. The content inside is typically displayed in italics.</p>
    <CodeBlock>{`<p>The area of a triangle is: 1/2 x <var>b</var> x <var>h</var>, where <var>b</var> is the base, and <var>h</var> is the vertical height.</p>`}</CodeBlock>

    <h2 className="text-3xl font-bold mt-10 mb-4">The &lt;pre&gt; Element</h2>
    <p className="text-lg leading-relaxed">The <code>&lt;pre&gt;</code> element defines preformatted text. The text inside a <code>&lt;pre&gt;</code> element is displayed in a fixed-width font, and it preserves both spaces and line breaks. It's commonly used to display blocks of code.</p>
    <CodeBlock>{`<pre>
  <code>
    let x = 5;
    let y = 10;
    let z = x + y;
  </code>
</pre>`}</CodeBlock>
  </>
);

export default HtmlComputercode;
