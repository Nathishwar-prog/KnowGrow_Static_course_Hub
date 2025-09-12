import React from 'react';
import { CodeBlock, InfoBox } from '../components';

const HtmlHeadings: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">HTML headings are titles or subtitles that you want to display on a webpage.</p>
    <p className="text-lg leading-relaxed mt-4">HTML headings are defined with the <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> tags.</p>
    <p className="text-lg leading-relaxed mt-4"><code>&lt;h1&gt;</code> defines the most important heading. <code>&lt;h6&gt;</code> defines the least important heading.</p>

    <CodeBlock language="html">{`<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`}</CodeBlock>

    <InfoBox className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-blue-800 dark:text-blue-300">
      <p><strong>Note:</strong> Browsers automatically add some white space (a margin) before and after a heading.</p>
    </InfoBox>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">Headings Are Important</h2>
    <p className="text-lg leading-relaxed">Search engines use the headings to index the structure and content of your web pages.</p>
    <p className="text-lg leading-relaxed mt-4">Users often skim a page by its headings. It is important to use headings to show the document structure.</p>
    <p className="text-lg leading-relaxed mt-4"><code>&lt;h1&gt;</code> headings should be used for main headings, followed by <code>&lt;h2&gt;</code> headings, then the less important <code>&lt;h3&gt;</code>, and so on.</p>

    <InfoBox className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 text-yellow-800 dark:text-yellow-300">
      <p><strong>Tip:</strong> Use HTML headings for headings only. Don't use headings to make text <strong>BIG</strong> or <strong>bold</strong>.</p>
    </InfoBox>

    <h2 className="text-3xl font-bold mt-10 mb-4">Bigger Headings</h2>
    <p className="text-lg leading-relaxed">Each HTML heading has a default size. However, you can specify the size for any heading with the <code>style</code> attribute, using the CSS <code>font-size</code> property:</p>
    <CodeBlock language="html">{`<h1 style="font-size:60px;">Heading 1</h1>`}</CodeBlock>
  </>
);

export default HtmlHeadings;