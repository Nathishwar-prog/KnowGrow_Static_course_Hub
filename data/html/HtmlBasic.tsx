import React from 'react';
import { CodeBlock } from '../components';

const HtmlBasic: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">In this chapter, we will show some basic HTML examples.</p>
    <p className="text-lg leading-relaxed mt-4">Don't worry if we use tags you have not learned about yet.</p>
    
    <hr className="my-8 border-gray-200 dark:border-gray-600" />
    
    <h2 className="text-3xl font-bold mt-10 mb-4">HTML Documents</h2>
    <p>All HTML documents must start with a document type declaration: <code>&lt;!DOCTYPE html&gt;</code>.</p>
    <p className="mt-2">The HTML document itself begins with <code>&lt;html&gt;</code> and ends with <code>&lt;/html&gt;</code>.</p>
    <p className="mt-2">The visible part of the HTML document is between <code>&lt;body&gt;</code> and <code>&lt;/body&gt;</code>.</p>
    <CodeBlock>{`<!DOCTYPE html>
<html>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>`}</CodeBlock>

    <h2 className="text-3xl font-bold mt-12 mb-4">The &lt;!DOCTYPE&gt; Declaration</h2>
    <p>The <code>&lt;!DOCTYPE&gt;</code> declaration represents the document type, and helps browsers to display web pages correctly.</p>
    <p className="mt-2">It must only appear once, at the top of the page (before any HTML tags).</p>
    <p className="mt-2">The <code>&lt;!DOCTYPE&gt;</code> declaration is not case sensitive.</p>
    <p className="mt-2">The <code>&lt;!DOCTYPE&gt;</code> declaration for HTML5 is:</p>
    <CodeBlock>{`<!DOCTYPE html>`}</CodeBlock>
    
    <h2 className="text-3xl font-bold mt-12 mb-4">HTML Headings</h2>
    <p>HTML headings are defined with the <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> tags.</p>
    <p className="mt-2"><code>&lt;h1&gt;</code> defines the most important heading. <code>&lt;h6&gt;</code> defines the least important heading:</p>
    <CodeBlock>{`<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>`}</CodeBlock>
    
    <h2 className="text-3xl font-bold mt-12 mb-4">HTML Paragraphs</h2>
    <p>HTML paragraphs are defined with the <code>&lt;p&gt;</code> tag:</p>
    <CodeBlock>{`<p>This is a paragraph.</p>
<p>This is another paragraph.</p>`}</CodeBlock>
    
    <h2 className="text-3xl font-bold mt-12 mb-4">HTML Links</h2>
    <p>HTML links are defined with the <code>&lt;a&gt;</code> tag:</p>
    <CodeBlock>{`<a href="https://www.w3schools.com">This is a link</a>`}</CodeBlock>
    <p className="mt-4">The link's destination is specified in the <code>href</code> attribute.</p>
    <p className="mt-2">Attributes are used to provide additional information about HTML elements.</p>
    <p className="mt-2">You will learn more about attributes in a later chapter.</p>
    
    <h2 className="text-3xl font-bold mt-12 mb-4">HTML Images</h2>
    <p>HTML images are defined with the <code>&lt;img&gt;</code> tag.</p>
    <p className="mt-2">The source file (<code>src</code>), alternative text (<code>alt</code>), <code>width</code>, and <code>height</code> are provided as attributes:</p>
    <CodeBlock>{`<img src="w3schools.jpg" alt="W3Schools.com" width="104" height="142">`}</CodeBlock>
    
    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">How to View HTML Source</h2>
    <p>Have you ever seen a Web page and wondered "Hey! How did they do that?"</p>
    
    <h3 className="text-2xl font-bold mt-8 mb-3">View HTML Source Code:</h3>
    <p>Click CTRL + U in an HTML page, or right-click on the page and select "View Page Source". This will open a new tab containing the HTML source code of the page.</p>

    <h3 className="text-2xl font-bold mt-8 mb-3">Inspect an HTML Element:</h3>
    <p>Right-click on an element (or a blank area), and choose "Inspect" to see what elements are made up of (you will see both the HTML and the CSS). You can also edit the HTML or CSS on-the-fly in the Elements or Styles panel that opens.</p>
  </>
);

export default HtmlBasic;
