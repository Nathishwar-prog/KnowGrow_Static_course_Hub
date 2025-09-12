import React from 'react';
import { CodeBlock, InfoBox, SimpleTable } from '../components';

const HtmlQuotations: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">In this chapter, you will learn about various HTML elements used for quotations, citations, and defining terms.</p>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">HTML &lt;blockquote&gt; for Quotations</h2>
    <p className="text-lg leading-relaxed">The HTML <code>&lt;blockquote&gt;</code> element defines a section that is quoted from another source. Browsers usually indent <code>&lt;blockquote&gt;</code> elements.</p>
    <p className="text-lg leading-relaxed mt-2">The source of the quotation can be specified in the <code>cite</code> attribute.</p>
    <CodeBlock language="html">{`<blockquote cite="http://www.worldwildlife.org/who/index.html">
For 60 years, WWF has worked to help people and nature thrive. As the world's leading conservation organization, WWF works in nearly 100 countries. At every level, we collaborate with people around the world to develop and deliver innovative solutions that protect communities, wildlife, and the places in which they live.
</blockquote>`}</CodeBlock>
    <div className="p-4 my-4 bg-gray-100 dark:bg-gray-800/50 rounded-md">
        <blockquote className="border-l-4 border-gray-400 pl-4 italic" cite="http://www.worldwildlife.org/who/index.html">
        For 60 years, WWF has worked to help people and nature thrive. As the world's leading conservation organization, WWF works in nearly 100 countries. At every level, we collaborate with people around the world to develop and deliver innovative solutions that protect communities, wildlife, and the places in which they live.
        </blockquote>
    </div>

    <h2 className="text-3xl font-bold mt-10 mb-4">HTML &lt;q&gt; for Short Quotations</h2>
    <p className="text-lg leading-relaxed">The HTML <code>&lt;q&gt;</code> tag defines a short quotation. Browsers normally insert quotation marks around the quotation.</p>
    <CodeBlock language="html">{`<p>WWF's goal is to: <q>Build a future where people live in harmony with nature.</q></p>`}</CodeBlock>
    <div className="p-4 my-4 bg-gray-100 dark:bg-gray-800/50 rounded-md">
        <p className="text-lg">WWF's goal is to: <q>Build a future where people live in harmony with nature.</q></p>
    </div>

    <h2 className="text-3xl font-bold mt-10 mb-4">HTML &lt;abbr&gt; for Abbreviations</h2>
    <p className="text-lg leading-relaxed">The HTML <code>&lt;abbr&gt;</code> tag defines an abbreviation or an acronym, like "HTML", "CSS", "Mr.", "Dr.", "ASAP", "ATM".</p>
    <p className="text-lg leading-relaxed mt-2">Marking up abbreviations can give useful information to browsers, translation systems and search-engines. Use the global <code>title</code> attribute to show the full description of the abbreviation when you mouse over the element.</p>
    <CodeBlock language="html">{`<p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>`}</CodeBlock>
    <div className="p-4 my-4 bg-gray-100 dark:bg-gray-800/50 rounded-md">
        <p className="text-lg">The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>
    </div>

    <h2 className="text-3xl font-bold mt-10 mb-4">HTML &lt;address&gt; for Contact Information</h2>
    <p className="text-lg leading-relaxed">The HTML <code>&lt;address&gt;</code> tag defines the contact information for the author/owner of a document or an article. The text in the <code>&lt;address&gt;</code> element usually renders in italic, and browsers will always add a line break before and after the element.</p>
    <CodeBlock language="html">{`<address>
Written by John Doe.<br>
Visit us at:<br>
Example.com<br>
Box 564, Disneyland<br>
USA
</address>`}</CodeBlock>
     <div className="p-4 my-4 bg-gray-100 dark:bg-gray-800/50 rounded-md">
        <address className="not-italic">
        Written by John Doe.<br />
        Visit us at:<br />
        Example.com<br />
        Box 564, Disneyland<br />
        USA
        </address>
    </div>
    
    <h2 className="text-3xl font-bold mt-10 mb-4">HTML &lt;cite&gt; for Work Title</h2>
    <p className="text-lg leading-relaxed">The HTML <code>&lt;cite&gt;</code> tag defines the title of a creative work (e.g. a book, a poem, a song, a movie, a painting, a sculpture, etc.). The text in the <code>&lt;cite&gt;</code> element usually renders in italic.</p>
    <CodeBlock language="html">{`<p><cite>The Scream</cite> by Edvard Munch. Painted in 1893.</p>`}</CodeBlock>
    <div className="p-4 my-4 bg-gray-100 dark:bg-gray-800/50 rounded-md">
        <p className="text-lg"><cite>The Scream</cite> by Edvard Munch. Painted in 1893.</p>
    </div>

    <h2 className="text-3xl font-bold mt-10 mb-4">HTML &lt;bdo&gt; for Bi-Directional Override</h2>
    <p className="text-lg leading-relaxed">The HTML <code>&lt;bdo&gt;</code> tag is used to override the current text direction.</p>
    <CodeBlock language="html">{`<bdo dir="rtl">This text will be written from right to left</bdo>`}</CodeBlock>
    <div className="p-4 my-4 bg-gray-100 dark:bg-gray-800/50 rounded-md">
       <p className="text-lg"><bdo dir="rtl">This text will be written from right to left</bdo></p>
    </div>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />
    
    <h2 className="text-3xl font-bold mt-10 mb-4">Chapter Summary</h2>
    <SimpleTable 
        headers={['Tag', 'Description']}
        rows={[
            [<code>&lt;blockquote&gt;</code>, 'Defines a section that is quoted from another source'],
            [<code>&lt;q&gt;</code>, 'Defines a short inline quotation'],
            [<code>&lt;abbr&gt;</code>, 'Defines an abbreviation or an acronym'],
            [<code>&lt;address&gt;</code>, 'Defines contact information for the author/owner of a document'],
            [<code>&lt;cite&gt;</code>, 'Defines the title of a work'],
            [<code>&lt;bdo&gt;</code>, 'Defines the text direction'],
        ]}
    />
  </>
);

export default HtmlQuotations;