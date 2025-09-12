import React from 'react';
import { SimpleTable, InfoBox, CodeBlock } from '../components';

const HtmlElements: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">An HTML element is defined by a start tag, some content, and an end tag.</p>
    <p className="text-lg leading-relaxed mt-4">The HTML <strong>element</strong> is everything from the start tag to the end tag. The following example shows a basic paragraph element.</p>
    
    <CodeBlock language="html" animationId="html-element-structure">{`<p>My first paragraph.</p>`}</CodeBlock>

    <p className="text-lg leading-relaxed mt-4">Examples of some other HTML elements:</p>
    <SimpleTable
      headers={['Start tag', 'Element content', 'End tag']}
      rows={[
        [<code>&lt;h1&gt;</code>, 'My First Heading', <code>&lt;/h1&gt;</code>],
        [<code>&lt;p&gt;</code>, 'My first paragraph.', <code>&lt;/p&gt;</code>],
        [<code>&lt;br&gt;</code>, <em>none</em>, <em>none</em>],
      ]}
    />
    <InfoBox className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-blue-800 dark:text-blue-300">
      <p><strong>Note:</strong> Some HTML elements have no content (like the &lt;br&gt; element). These elements are called empty elements. Empty elements do not have a closing tag.</p>
    </InfoBox>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />
    
    <h2 className="text-3xl font-bold mt-10 mb-4">Nested HTML Elements</h2>
    <p className="text-lg leading-relaxed">HTML elements can be nested (this means that elements can contain other elements).</p>
    <p className="text-lg leading-relaxed mt-4">All HTML documents consist of nested HTML elements.</p>
    <p className="text-lg leading-relaxed mt-4">The following example contains four HTML elements (<code>&lt;html&gt;</code>, <code>&lt;body&gt;</code>, <code>&lt;h1&gt;</code> and <code>&lt;p&gt;</code>):</p>
    <CodeBlock language="html">{`<!DOCTYPE html>
<html>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>`}</CodeBlock>

    <h3 className="text-2xl font-bold mt-8 mb-3">Example Explained</h3>
    <p className="text-lg leading-relaxed">The <code>&lt;html&gt;</code> element is the root element and it defines the whole HTML document.</p>
    <p className="text-lg leading-relaxed mt-4">It has a start tag <code>&lt;html&gt;</code> and an end tag <code>&lt;/html&gt;</code>.</p>
    <p className="text-lg leading-relaxed mt-4">Then, inside the <code>&lt;html&gt;</code> element there is a <code>&lt;body&gt;</code> element:</p>
    <CodeBlock language="html">{`<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>`}</CodeBlock>
    <p className="text-lg leading-relaxed mt-4">The <code>&lt;body&gt;</code> element defines the document's body.</p>
    <p className="text-lg leading-relaxed mt-4">It has a start tag <code>&lt;body&gt;</code> and an end tag <code>&lt;/body&gt;</code>.</p>
    <p className="text-lg leading-relaxed mt-4">Then, inside the <code>&lt;body&gt;</code> element there are two other elements: <code>&lt;h1&gt;</code> and <code>&lt;p&gt;</code>:</p>
    <CodeBlock language="html">{`<h1>My First Heading</h1>
<p>My first paragraph.</p>`}</CodeBlock>
    <p className="text-lg leading-relaxed mt-4">The <code>&lt;h1&gt;</code> element defines a heading. It has a start tag <code>&lt;h1&gt;</code> and an end tag <code>&lt;/h1&gt;</code>.</p>
    <p className="text-lg leading-relaxed mt-4">The <code>&lt;p&gt;</code> element defines a paragraph. It has a start tag <code>&lt;p&gt;</code> and an end tag <code>&lt;/p&gt;</code>.</p>
    
    <hr className="my-8 border-gray-200 dark:border-gray-600" />
    
    <h2 className="text-3xl font-bold mt-10 mb-4">Never Skip the End Tag</h2>
    <p className="text-lg leading-relaxed">Some HTML elements will display correctly, even if you forget the end tag.</p>
    <CodeBlock language="html">{`<html>
<body>

<p>This is a paragraph
<p>This is a paragraph

</body>
</html>`}</CodeBlock>
    <InfoBox className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 text-red-800 dark:text-red-300">
      <p>However, <strong>never rely on this!</strong> Unexpected results and errors may occur if you forget the end tag!</p>
    </InfoBox>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">Empty HTML Elements</h2>
    <p className="text-lg leading-relaxed">HTML elements with no content are called empty elements.</p>
    <p className="text-lg leading-relaxed mt-4">The <code>&lt;br&gt;</code> tag defines a line break, and is an empty element without a closing tag:</p>
    <CodeBlock language="html">{`<p>This is a <br> paragraph with a line break.</p>`}</CodeBlock>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">HTML is Not Case Sensitive</h2>
    <p className="text-lg leading-relaxed">HTML tags are not case sensitive: <code>&lt;P&gt;</code> means the same as <code>&lt;p&gt;</code>.</p>
    <InfoBox className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 text-emerald-800 dark:text-emerald-300">
        <p>At KnowGrow we recommend using <strong>lowercase</strong> tag names. The W3C recommends lowercase in HTML, and demands lowercase for stricter document types like XHTML.</p>
    </InfoBox>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />
    
    <h2 className="text-3xl font-bold mt-10 mb-4">HTML Tag Reference</h2>
    <p className="text-lg leading-relaxed">Our tag reference contains additional information about these tags and their attributes.</p>
    <SimpleTable 
        headers={['Tag', 'Description']}
        rows={[
            ['<html>', 'Defines the root of an HTML document'],
            ['<body>', "Defines the document's body"],
            ['<h1> to <h6>', 'Defines HTML headings'],
        ]}
    />
     <p className="text-lg leading-relaxed mt-4">For a complete list of all available HTML tags, visit our <a href="#" className="text-indigo-500 hover:underline">HTML Tag Reference</a>.</p>
  </>
);

export default HtmlElements;