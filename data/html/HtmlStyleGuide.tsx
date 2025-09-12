import React from 'react';
import { CodeBlock, InfoBox } from '../components';

const HtmlStyleGuide: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">A coding style guide provides conventions for writing code. This helps to improve the readability and maintainability of the code, especially when working in a team.</p>
    <p className="text-lg leading-relaxed mt-4">This page provides a set of best practices and style guidelines for writing clean and professional HTML.</p>
    
    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">HTML Coding Conventions</h2>
    
    <h3 className="text-2xl font-bold mt-8 mb-3">1. Always Declare Document Type</h3>
    <p className="text-lg leading-relaxed">Always start your HTML document with <code>&lt;!DOCTYPE html&gt;</code> to ensure the browser renders the page in standards mode.</p>

    <h3 className="text-2xl font-bold mt-8 mb-3">2. Use Lowercase Element Names</h3>
    <p className="text-lg leading-relaxed">Use lowercase for all HTML element and attribute names. While HTML is case-insensitive, it's a common convention and required for stricter document types like XHTML.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div><CodeBlock language="html">{`<!-- Good -->
<section>
  <p>This is a paragraph.</p>
</section>`}</CodeBlock></div>
        <div><CodeBlock language="html">{`<!-- Bad -->
<SECTION>
  <P>This is a paragraph.</P>
</SECTION>`}</CodeBlock></div>
    </div>
    
    <h3 className="text-2xl font-bold mt-8 mb-3">3. Close All HTML Elements</h3>
    <p className="text-lg leading-relaxed">In HTML5, you don't have to close all elements (for example the <code>&lt;p&gt;</code> element). However, it is strongly recommended. It produces cleaner, more readable code and is required by XML-based parsers.</p>
    
    <h3 className="text-2xl font-bold mt-8 mb-3">4. Use Quotes for Attribute Values</h3>
    <p className="text-lg leading-relaxed">Always use quotation marks for attribute values. Double quotes are the most common convention.</p>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div><CodeBlock language="html">{`<!-- Good -->
<a href="/about">About Us</a>`}</CodeBlock></div>
        <div><CodeBlock language="html">{`<!-- Bad -->
<a href=/about>About Us</a>`}</CodeBlock></div>
    </div>

    <h3 className="text-2xl font-bold mt-8 mb-3">5. Specify alt, width, and height for Images</h3>
    <p className="text-lg leading-relaxed">Always specify the <code>alt</code>, <code>width</code>, and <code>height</code> attributes for images. This improves accessibility and prevents layout shifts as the image loads.</p>
    <CodeBlock language="html">{`<img src="logo.png" alt="KnowGrow Logo" width="200" height="50">`}</CodeBlock>

    <h3 className="text-2xl font-bold mt-8 mb-3">6. Indent Your Code</h3>
    <p className="text-lg leading-relaxed">Always use indentation to show the nesting of elements. This greatly improves readability. A common choice is two spaces per level of indentation.</p>
    
    <h3 className="text-2xl font-bold mt-8 mb-3">7. Use External CSS Files</h3>
    <p className="text-lg leading-relaxed">Avoid using inline styles (<code>style</code> attribute) or internal style sheets (<code>&lt;style&gt;</code> tag). Keep your content (HTML) and presentation (CSS) separate by using external <code>.css</code> files. This makes the code easier to maintain.</p>
    
    <hr className="my-8 border-gray-200 dark:border-gray-600" />
    
    <h2 className="text-3xl font-bold mt-10 mb-4">A Good Example</h2>
    <p className="text-lg leading-relaxed">This code block demonstrates many of the best practices mentioned above.</p>
    <CodeBlock language="html">{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sample Page</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <header>
    <h1>A Well-Structured Page</h1>
  </header>

  <main>
    <section>
      <h2>Article Section</h2>
      <article>
        <p>This is a paragraph inside an article.</p>
      </article>
    </section>
  </main>

</body>
</html>`}</CodeBlock>

    <InfoBox className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-blue-800 dark:text-blue-300">
        <p>Following a consistent style guide will make your HTML more predictable and easier to manage over time.</p>
    </InfoBox>
  </>
);

export default HtmlStyleGuide;