import React from 'react';
import { CodeBlock, InfoBox } from '../components';

const HtmlComments: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">HTML comments are not displayed in the browser, but they can help document your HTML source code.</p>
    
    <hr className="my-8 border-gray-200 dark:border-gray-600" />
    
    <h2 className="text-3xl font-bold mt-10 mb-4">HTML Comment Tag</h2>
    <p className="text-lg leading-relaxed">You can add comments to your HTML source by using the following syntax:</p>
    <CodeBlock language="html">{`<!-- Write your comments here -->`}</CodeBlock>
    
    <InfoBox className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-blue-800 dark:text-blue-300">
        <p>Notice that there is an exclamation point (!) in the start tag, but not in the end tag.</p>
    </InfoBox>

    <p className="text-lg leading-relaxed mt-4">With comments you can place notifications and reminders in your HTML code:</p>
    <CodeBlock language="html">{`<!-- This is a comment -->

<p>This is a paragraph.</p>

<!-- Remember to add more information here -->`}</CodeBlock>
    
    <hr className="my-8 border-gray-200 dark:border-gray-600" />
    
    <h2 className="text-3xl font-bold mt-10 mb-4">Hide Content</h2>
    <p className="text-lg leading-relaxed">Comments can be used to hide content. This can be helpful if you hide content temporarily for debugging:</p>
    <CodeBlock language="html">{`<p>This is a paragraph.</p>
<!-- <p>This is another paragraph </p> -->
<p>This is a paragraph too.</p>`}</CodeBlock>
    
    <p className="text-lg leading-relaxed mt-4">You can also hide more than one line. Everything between the <code>&lt;!--</code> and <code>--&gt;</code> will be hidden from the display.</p>
    <CodeBlock language="html">{`<!--
  <p>Look at this cool image:</p>
  <img border="0" src="pic_trulli.jpg" alt="Trulli">
-->`}</CodeBlock>

    <p className="text-lg leading-relaxed mt-4">Comments are also great for debugging HTML, because you can comment out HTML lines of code, one at a time, to search for errors.</p>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />
    
    <h2 className="text-3xl font-bold mt-10 mb-4">Hide Inline Content</h2>
    <p className="text-lg leading-relaxed">Comments can be used to hide parts of the code in the middle of a line.</p>
    <CodeBlock language="html">{`<p>This <!-- great text --> is a paragraph.</p>`}</CodeBlock>

    <InfoBox className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 text-red-800 dark:text-red-300">
        <h4 className="font-bold">Important Security Note</h4>
        <p className="mt-2">While comments are not displayed in the browser, they are still part of the HTML source code. Anyone can view the source of your page and read your comments. Never put sensitive or private information in HTML comments.</p>
    </InfoBox>

  </>
);

export default HtmlComments;