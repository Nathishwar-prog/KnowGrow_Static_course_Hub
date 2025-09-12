import React from 'react';
import { CodeBlock, InfoBox, SimpleTable } from '../components';

const HtmlHead: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">The HTML <code>&lt;head&gt;</code> element is a container for metadata (data about data) and is placed between the <code>&lt;html&gt;</code> tag and the <code>&lt;body&gt;</code> tag.</p>
    <p className="text-lg leading-relaxed mt-4">Metadata is data about the HTML document. Metadata is not displayed in the browser window, but is used by browsers (how to display content), search engines (keywords), and other web services.</p>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />
    
    <h2 className="text-3xl font-bold mt-10 mb-4">Anatomy of the &lt;head&gt; Element</h2>
    <p className="text-lg leading-relaxed">The following elements can go inside the <code>&lt;head&gt;</code> element:</p>
    <ul className="list-disc list-inside space-y-2 pl-4 text-lg mt-4">
        <li><code>&lt;title&gt;</code> (required in every HTML document)</li>
        <li><code>&lt;style&gt;</code></li>
        <li><code>&lt;base&gt;</code></li>
        <li><code>&lt;link&gt;</code></li>
        <li><code>&lt;meta&gt;</code></li>
        <li><code>&lt;script&gt;</code></li>
        <li><code>&lt;noscript&gt;</code></li>
    </ul>

    <SimpleTable 
        headers={['Tag', 'Description']}
        rows={[
            [<code>&lt;title&gt;</code>, 'Defines the title of the document, shown in the browser tab.'],
            [<code>&lt;style&gt;</code>, 'Used to define internal CSS styles for a document.'],
            [<code>&lt;link&gt;</code>, 'Defines the relationship between the current document and an external resource (most often a stylesheet).'],
            [<code>&lt;meta&gt;</code>, 'Defines metadata such as character set, page description, keywords, author, and viewport settings.'],
            [<code>&lt;script&gt;</code>, 'Used to embed client-side scripts (JavaScript).'],
            [<code>&lt;base&gt;</code>, 'Specifies the base URL and/or target for all relative URLs in a document.']
        ]}
    />
    
    <h3 className="text-2xl font-bold mt-8 mb-3">Example</h3>
    <CodeBlock>{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Free Web tutorials">
  <meta name="keywords" content="HTML, CSS, JavaScript">
  <meta name="author" content="John Doe">
  
  <title>HTML Head Tutorial</title>

  <link rel="stylesheet" href="mystyle.css">
  
  <style>
    body {background-color: powderblue;}
    h1 {color: red;}
  </style>
</head>
<body>
...
</body>
</html>`}</CodeBlock>

    <h2 className="text-3xl font-bold mt-10 mb-4">The Viewport &lt;meta&gt; Tag</h2>
    <p className="text-lg leading-relaxed">The viewport is the user's visible area of a web page. It varies with the device - it will be smaller on a mobile phone than on a computer screen.</p>
    <p className="text-lg leading-relaxed mt-4">You should include the following <code>&lt;meta&gt;</code> element in all your web pages:</p>
    <CodeBlock>{`<meta name="viewport" content="width=device-width, initial-scale=1.0">`}</CodeBlock>
    <p className="text-lg leading-relaxed mt-4">This gives the browser instructions on how to control the page's dimensions and scaling.</p>
    <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
      <li><code>width=device-width</code> sets the width of the page to follow the screen-width of the device.</li>
      <li><code>initial-scale=1.0</code> sets the initial zoom level when the page is first loaded by the browser.</li>
    </ul>

    <InfoBox className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-blue-800 dark:text-blue-300">
      <h4 className="font-bold">Good to Know</h4>
      <p className="mt-2">Omitting the viewport meta tag can lead to mobile browsers rendering your page at a desktop screen width and then scaling it down, making it very difficult to read without zooming.</p>
    </InfoBox>
  </>
);

export default HtmlHead;
