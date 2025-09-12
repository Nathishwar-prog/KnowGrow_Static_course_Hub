import React from 'react';
import { CodeBlock, InfoBox } from '../components';

const HtmlCss: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">CSS stands for Cascading Style Sheets. CSS saves a lot of work. It can control the layout of multiple web pages all at once.</p>
    <p className="text-lg leading-relaxed mt-4">CSS is used to format the layout of a webpage. With CSS, you can control the color, font, the size of text, the spacing between elements, how elements are positioned and laid out, what background images or background colors are to be used, different displays for different devices and screen sizes, and much more!</p>
    
    <InfoBox className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 text-emerald-800 dark:text-emerald-300">
        <p><strong>Tip:</strong> The word <strong>cascading</strong> means that a style applied to a parent element will also apply to all children elements within the parent. So, if you set the color of the body text to "blue", all headings, paragraphs, and other text elements within the body will also get the same color (unless you specify something else)!</p>
    </InfoBox>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">Three Ways to Insert CSS</h2>
    <p className="text-lg leading-relaxed">There are three ways of inserting a style sheet:</p>
    <ul className="list-disc list-inside space-y-2 pl-4 text-lg mt-4">
        <li><strong>External CSS:</strong> Styles are defined in an external <code>.css</code> file.</li>
        <li><strong>Internal CSS:</strong> Styles are defined within a <code>&lt;style&gt;</code> element, inside the <code>&lt;head&gt;</code> section.</li>
        <li><strong>Inline CSS:</strong> Styles are defined directly inside an HTML element, using the <code>style</code> attribute.</li>
    </ul>

    <h3 className="text-2xl font-bold mt-8 mb-3">1. Inline CSS</h3>
    <p className="text-lg leading-relaxed">An inline style may be used to apply a unique style for a single element. To use inline styles, add the <code>style</code> attribute to the relevant element. The style attribute can contain any CSS property.</p>
    <CodeBlock>{`<h1 style="color:blue; text-align:center;">This is a Blue Heading</h1>
<p style="color:red;">This is a red paragraph.</p>`}</CodeBlock>
    <InfoBox className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 text-yellow-800 dark:text-yellow-300">
        <p>An inline style loses many of the advantages of a style sheet (by mixing content with presentation). Use this method sparingly.</p>
    </InfoBox>

    <h3 className="text-2xl font-bold mt-8 mb-3">2. Internal CSS</h3>
    <p className="text-lg leading-relaxed">An internal style sheet may be used if one single HTML page has a unique style. The internal style is defined inside the <code>&lt;style&gt;</code> element, inside the head section.</p>
    <CodeBlock>{`<!DOCTYPE html>
<html>
<head>
<style>
body {
  background-color: linen;
}

h1 {
  color: maroon;
  margin-left: 40px;
}
</style>
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>`}</CodeBlock>

    <h3 className="text-2xl font-bold mt-8 mb-3">3. External CSS</h3>
    <p className="text-lg leading-relaxed">An external style sheet is used to define the style for many HTML pages. With an external style sheet, you can change the look of an entire web site by changing one file!</p>
    <p className="text-lg leading-relaxed mt-2">To use an external style sheet, add a link to it in the <code>&lt;head&gt;</code> section of each HTML page:</p>
    <CodeBlock>{`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="mystyle.css">
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>`}</CodeBlock>
    <p className="text-lg leading-relaxed mt-4">Here is what the "mystyle.css" file looks like:</p>
    <div className="bg-gray-100 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-lg my-6 overflow-hidden">
        <div className="p-3 border-b border-gray-200 dark:border-gray-700 bg-gray-200 dark:bg-gray-700/50">
            <h3 className="font-bold text-gray-700 dark:text-gray-200">mystyle.css</h3>
        </div>
        <div className="p-4 bg-white dark:bg-black/30">
        <pre className="whitespace-pre-wrap text-sm">
          <code className="text-black dark:text-gray-200">{`body {
  background-color: lightblue;
}

h1 {
  color: navy;
  margin-left: 20px;
}`}</code>
        </pre>
      </div>
    </div>
    <InfoBox className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 text-emerald-800 dark:text-emerald-300">
        <h4 className="font-bold">Recommended Practice</h4>
        <p>External style sheets are the most flexible and maintainable way to style a website. They keep your HTML clean and separate content from presentation.</p>
    </InfoBox>
    
    <hr className="my-8 border-gray-200 dark:border-gray-600" />
    
    <h2 className="text-3xl font-bold mt-10 mb-4">Cascading Order</h2>
    <p className="text-lg leading-relaxed">What style will be used when there is more than one style specified for an HTML element?</p>
    <p className="text-lg leading-relaxed mt-2">All the styles in a page will "cascade" into a new "virtual" style sheet by the following rules, where number one has the highest priority:</p>
    <ol className="list-decimal list-inside space-y-2 pl-4 text-lg mt-4">
        <li><strong>Inline style</strong> (inside an HTML element)</li>
        <li><strong>External and internal style sheets</strong> (in the head section)</li>
        <li><strong>Browser default</strong></li>
    </ol>
    <p className="text-lg leading-relaxed mt-2">So, an inline style has the highest priority, and will override external and internal styles and browser defaults.</p>
  </>
);

export default HtmlCss;