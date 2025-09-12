import React from 'react';
import { CodeBlock, InfoBox } from '../components';

const HtmlStyles: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">The HTML <code>style</code> attribute is used to add styles to an element, such as color, font, size, and more.</p>
    <p className="text-lg leading-relaxed mt-4">The <code>style</code> attribute has the following syntax:</p>
    <p className="text-lg bg-gray-100 dark:bg-gray-700/50 p-4 rounded-md my-4"><code>&lt;tagname style="property:value;"&gt;</code></p>
    <p className="text-lg leading-relaxed">The <strong>property</strong> is a CSS property. The <strong>value</strong> is a CSS value.</p>
    
    <hr className="my-8 border-gray-200 dark:border-gray-600" />
    
    <h2 className="text-3xl font-bold mt-10 mb-4">Background Color</h2>
    <p className="text-lg leading-relaxed">The CSS <code>background-color</code> property defines the background color for an HTML element.</p>
    <p className="text-lg leading-relaxed mt-4">This example sets the background color for the page to powderblue:</p>
    <CodeBlock language="html">{`<body style="background-color:powderblue;">

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>`}</CodeBlock>

    <h2 className="text-3xl font-bold mt-10 mb-4">Text Color</h2>
    <p className="text-lg leading-relaxed">The CSS <code>color</code> property defines the text color for an HTML element:</p>
    <CodeBlock language="html">{`<h1 style="color:blue;">This is a heading</h1>
<p style="color:red;">This is a paragraph.</p>`}</CodeBlock>
    
    <h2 className="text-3xl font-bold mt-10 mb-4">Fonts</h2>
    <p className="text-lg leading-relaxed">The CSS <code>font-family</code> property defines the font to be used for an HTML element:</p>
    <CodeBlock language="html">{`<h1 style="font-family:verdana;">This is a heading</h1>
<p style="font-family:courier;">This is a paragraph.</p>`}</CodeBlock>

    <h2 className="text-3xl font-bold mt-10 mb-4">Text Size</h2>
    <p className="text-lg leading-relaxed">The CSS <code>font-size</code> property defines the text size for an HTML element:</p>
    <CodeBlock language="html">{`<h1 style="font-size:300%;">This is a heading</h1>
<p style="font-size:160%;">This is a paragraph.</p>`}</CodeBlock>

    <h2 className="text-3xl font-bold mt-10 mb-4">Text Alignment</h2>
    <p className="text-lg leading-relaxed">The CSS <code>text-align</code> property defines the horizontal text alignment for an HTML element:</p>
    <CodeBlock language="html">{`<h1 style="text-align:center;">Centered Heading</h1>
<p style="text-align:center;">Centered paragraph.</p>`}</CodeBlock>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">Chapter Summary</h2>
    <ul className="list-disc list-inside space-y-2 pl-4 text-lg">
        <li>Use the <code>style</code> attribute for styling HTML elements</li>
        <li>Use <code>background-color</code> for background color</li>
        <li>Use <code>color</code> for text colors</li>
        <li>Use <code>font-family</code> for text fonts</li>
        <li>Use <code>font-size</code> for text sizes</li>
        <li>Use <code>text-align</code> for text alignment</li>
    </ul>

    <InfoBox className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 text-yellow-800 dark:text-yellow-300">
        <h4 className="font-bold">Best Practice: Inline vs. External CSS</h4>
        <p className="mt-2">Using the <code>style</code> attribute (inline styling) can be useful for quick tests or very specific, one-time styles. However, for styling an entire website, it is highly recommended to use external CSS stylesheets. This separates your content (HTML) from its presentation (CSS), making your code much easier to read, maintain, and reuse across multiple pages.</p>
    </InfoBox>
  </>
);

export default HtmlStyles;