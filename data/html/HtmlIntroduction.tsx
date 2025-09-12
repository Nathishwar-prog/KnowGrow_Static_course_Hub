import React from 'react';
import { CodeBlock, SimpleTable, InfoBox, BrowserMockup } from '../components';

const HtmlIntroduction: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">HTML is the standard markup language for creating Web pages.</p>
    <h2 className="text-3xl font-bold mt-10 mb-4">What is HTML?</h2>
    <ul className="list-disc list-inside space-y-2 pl-4 text-lg">
      <li>HTML stands for Hyper Text Markup Language</li>
      <li>HTML is the standard markup language for creating Web pages</li>
      <li>HTML describes the structure of a Web page</li>
      <li>HTML consists of a series of elements</li>
      <li>HTML elements tell the browser how to display the content</li>
      <li>HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.</li>
    </ul>
    <h2 className="text-3xl font-bold mt-10 mb-4">A Simple HTML Document</h2>
    <CodeBlock>{`<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>`}</CodeBlock>
    <h3 className="text-2xl font-bold mt-8 mb-3">Example Explained</h3>
    <ul className="list-disc list-inside space-y-2 pl-4 text-lg">
        <li>The <code>&lt;!DOCTYPE html&gt;</code> declaration defines that this document is an HTML5 document</li>
        <li>The <code>&lt;html&gt;</code> element is the root element of an HTML page</li>
        <li>The <code>&lt;head&gt;</code> element contains meta information about the HTML page</li>
        <li>The <code>&lt;title&gt;</code> element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)</li>
        <li>The <code>&lt;body&gt;</code> element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.</li>
        <li>The <code>&lt;h1&gt;</code> element defines a large heading</li>
        <li>The <code>&lt;p&gt;</code> element defines a paragraph</li>
    </ul>
    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">What is an HTML Element?</h2>
    <p className="text-lg leading-relaxed">An HTML element is defined by a start tag, some content, and an end tag:</p>
    <p className="text-lg bg-gray-100 dark:bg-gray-700/50 p-4 rounded-md my-4"><code>&lt;tagname&gt;</code> Content goes here... <code>&lt;/tagname&gt;</code></p>
    <p className="text-lg leading-relaxed">The HTML <strong>element</strong> is everything from the start tag to the end tag:</p>
    <p className="text-lg bg-gray-100 dark:bg-gray-700/50 p-4 rounded-md my-4"><code>&lt;h1&gt;</code>My First Heading<code>&lt;/h1&gt;</code></p>
    <p className="text-lg bg-gray-100 dark:bg-gray-700/50 p-4 rounded-md my-4"><code>&lt;p&gt;</code>My first paragraph.<code>&lt;/p&gt;</code></p>

    <SimpleTable 
        headers={['Start tag', 'Element content', 'End tag']}
        rows={[
            [<code>&lt;h1&gt;</code>, 'My First Heading', <code>&lt;/h1&gt;</code>],
            [<code>&lt;p&gt;</code>, 'My first paragraph.', <code>&lt;/p&gt;</code>],
        ]}
    />

    <InfoBox className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 text-yellow-800 dark:text-yellow-300">
        <p><strong>Note:</strong> Some HTML elements have no content (like the &lt;br&gt; element). These elements are called empty elements. Empty elements do not have an end tag!</p>
    </InfoBox>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />
    <h2 className="text-3xl font-bold mt-10 mb-4">Web Browsers</h2>
    <p className="text-lg leading-relaxed">The purpose of a web browser (Chrome, Edge, Firefox, Safari) is to read HTML documents and display them correctly.</p>
    <p className="text-lg leading-relaxed mt-2">A browser does not display the HTML tags, but uses them to determine how to display the document:</p>
    <BrowserMockup title="index.htm">
        <h1 className="text-4xl font-bold">My First Heading</h1>
        <p className="mt-4 text-lg">My first paragraph.</p>
    </BrowserMockup>

    <h2 className="text-3xl font-bold mt-10 mb-4">HTML Page Structure</h2>
    <div className="border-2 border-gray-300 dark:border-gray-600 rounded-lg p-4 my-6">
        <span className="font-mono">&lt;html&gt;</span>
        <div className="ml-5 mt-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg p-4">
            <span className="font-mono">&lt;head&gt;</span>
            <div className="ml-5 mt-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg p-4">
                <span className="font-mono">&lt;title&gt;Page title&lt;/title&gt;</span>
            </div>
            <span className="font-mono mt-2 block">&lt;/head&gt;</span>
        </div>
         <div className="ml-5 mt-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg p-4">
            <span className="font-mono">&lt;body&gt;</span>
            <div className="ml-5 mt-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg p-4">
                <span className="font-mono">&lt;h1&gt;This is a heading&lt;/h1&gt;</span>
            </div>
            <div className="ml-5 mt-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg p-4">
                <span className="font-mono">&lt;p&gt;This is a paragraph.&lt;/p&gt;</span>
            </div>
             <div className="ml-5 mt-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg p-4">
                <span className="font-mono">&lt;p&gt;This is another paragraph.&lt;/p&gt;</span>
            </div>
            <span className="font-mono mt-2 block">&lt;/body&gt;</span>
        </div>
        <span className="font-mono mt-2 block">&lt;/html&gt;</span>
    </div>
    <InfoBox className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 text-blue-800 dark:text-blue-300">
        <p><strong>Note:</strong> The content inside the &lt;body&gt; section will be displayed in a browser. The content inside the &lt;title&gt; element will be shown in the browser's title bar or in the page's tab.</p>
    </InfoBox>

    <h2 className="text-3xl font-bold mt-10 mb-4">HTML History</h2>
     <p className="text-lg leading-relaxed">Since the early days of the World Wide Web, there have been many versions of HTML:</p>
    <SimpleTable
        headers={['Year', 'Version']}
        rows={[
            ['1989', 'Tim Berners-Lee invented www'],
            ['1991', 'Tim Berners-Lee invented HTML'],
            ['1993', 'Dave Raggett drafted HTML+'],
            ['1999', 'W3C Recommendation: HTML 4.01'],
            ['2000', 'W3C Recommendation: XHTML 1.0'],
            ['2008', 'WHATWG HTML5 First Public Draft'],
            ['2012', 'WHATWG HTML5 Living Standard'],
            ['2014', 'W3C Recommendation: HTML5'],
            ['2016', 'W3C Candidate Recommendation: HTML 5.1'],
            ['2017', 'W3C Recommendation: HTML5.1 2nd Edition'],
            ['2017', 'W3C Recommendation: HTML5.2'],
        ]}
    />
     <p className="text-lg leading-relaxed">This tutorial follows the latest HTML5 standard.</p>
  </>
);

export default HtmlIntroduction;
