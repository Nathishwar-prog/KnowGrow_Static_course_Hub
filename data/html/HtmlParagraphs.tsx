import React from 'react';
import { CodeBlock, InfoBox } from '../components';

const HtmlParagraphs: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">The HTML <code>&lt;p&gt;</code> element defines a paragraph.</p>
    <p className="text-lg leading-relaxed mt-4">A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a paragraph.</p>
    
    <CodeBlock>{`<p>This is a paragraph.</p>
<p>This is another paragraph.</p>`}</CodeBlock>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />
    
    <h2 className="text-3xl font-bold mt-10 mb-4">HTML Display</h2>
    <p className="text-lg leading-relaxed">You cannot be sure how HTML will be displayed. Large or small screens, and resized windows will create different results.</p>
    <p className="text-lg leading-relaxed mt-4">With HTML, you cannot change the display by adding extra spaces or extra lines in your HTML code.</p>
    <p className="text-lg leading-relaxed mt-4">The browser will automatically remove any extra spaces and lines when the page is displayed:</p>

    <CodeBlock>{`<p>
This paragraph
contains a lot of lines
in the source code,
but the browser
ignores it.
</p>

<p>
This paragraph
contains         a lot of spaces
in the source         code,
but the        browser
ignores it.
</p>`}</CodeBlock>

    <h2 className="text-3xl font-bold mt-10 mb-4">Horizontal Rules</h2>
    <p className="text-lg leading-relaxed">The <code>&lt;hr&gt;</code> tag defines a thematic break in an HTML page, and is most often displayed as a horizontal rule.</p>
    <p className="text-lg leading-relaxed mt-4">The <code>&lt;hr&gt;</code> element is used to separate content (or define a change) in an HTML page:</p>
    <CodeBlock>{`<h1>This is heading 1</h1>
<p>This is some text.</p>
<hr>
<h2>This is heading 2</h2>
<p>This is some other text.</p>`}</CodeBlock>
    <InfoBox className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-blue-800 dark:text-blue-300">
      <p>The <code>&lt;hr&gt;</code> tag is an empty tag, which means that it has no end tag.</p>
    </InfoBox>

    <h2 className="text-3xl font-bold mt-10 mb-4">Line Breaks</h2>
    <p className="text-lg leading-relaxed">The HTML <code>&lt;br&gt;</code> element defines a line break.</p>
    <p className="text-lg leading-relaxed mt-4">Use <code>&lt;br&gt;</code> if you want a line break (a new line) without starting a new paragraph:</p>
    <CodeBlock>{`<p>This is<br>a paragraph<br>with line breaks.</p>`}</CodeBlock>
    <InfoBox className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-blue-800 dark:text-blue-300">
      <p>The <code>&lt;br&gt;</code> tag is an empty tag, which means that it has no end tag.</p>
    </InfoBox>

    <h2 className="text-3xl font-bold mt-10 mb-4">The Poem Problem</h2>
    <p className="text-lg leading-relaxed">This poem will display on a single line:</p>
    <CodeBlock>{`<p>
  My Bonnie lies over the ocean.

  My Bonnie lies over the sea.

  My Bonnie lies over the ocean.

  Oh, bring back my Bonnie to me.
</p>`}</CodeBlock>

    <h2 className="text-3xl font-bold mt-10 mb-4">The &lt;pre&gt; Element</h2>
    <p className="text-lg leading-relaxed">The HTML <code>&lt;pre&gt;</code> element defines preformatted text.</p>
    <p className="text-lg leading-relaxed mt-4">The text inside a <code>&lt;pre&gt;</code> element is displayed in a fixed-width font (usually Courier), and it preserves both spaces and line breaks:</p>
    <CodeBlock>{`<pre>
  My Bonnie lies over the ocean.

  My Bonnie lies over the sea.

  My Bonnie lies over the ocean.

  Oh, bring back my Bonnie to me.
</pre>`}</CodeBlock>

  </>
);

export default HtmlParagraphs;
