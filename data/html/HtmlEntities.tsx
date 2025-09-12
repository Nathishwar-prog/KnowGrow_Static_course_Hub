import React from 'react';
import { CodeBlock, SimpleTable, InfoBox } from '../components';

const HtmlEntities: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">Reserved characters in HTML must be replaced with character entities.</p>
    <p className="text-lg leading-relaxed mt-4">Characters that are not present on your keyboard can also be replaced by entities.</p>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />
    
    <h2 className="text-3xl font-bold mt-10 mb-4">What are HTML Entities?</h2>
    <p className="text-lg leading-relaxed">Some characters are reserved in HTML. For example, you cannot use the less than (<code>&lt;</code>) or greater than (<code>&gt;</code>) signs within your text, because the browser could mistake them for tags.</p>
    <p className="text-lg leading-relaxed mt-4">To display a reserved character in HTML, you must use a character entity.</p>
    <p className="text-lg leading-relaxed mt-4">An entity has two parts: an ampersand (<code>&</code>) and an entity name or number, followed by a semicolon (<code>;</code>).</p>
    <CodeBlock>{`<!-- To display a less than sign (<), we must write: &lt; -->
<p>This is a &lt;p&gt; tag.</p>`}</CodeBlock>

    <InfoBox className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 text-emerald-800 dark:text-emerald-300">
        <h4 className="font-bold">Advantage of using entity names:</h4>
        <p>An entity name is easy to remember. Disadvantage: Not all browsers support all entity names, but the support for numbers is very good.</p>
    </InfoBox>
    
    <h2 className="text-3xl font-bold mt-10 mb-4">Non-breaking Space</h2>
    <p className="text-lg leading-relaxed">A common character entity used in HTML is the non-breaking space: <code>&amp;nbsp;</code>.</p>
    <p className="text-lg leading-relaxed mt-4">A non-breaking space is a space that will not break into a new line. Two words separated by a non-breaking space will stick together (not break into a new line). This is handy for breaking up words that should not be divided.</p>
    <p className="text-lg leading-relaxed mt-4">Another common use of the non-breaking space is to prevent browsers from truncating spaces in HTML pages. If you write 10 spaces in your text, the browser will remove 9 of them. To add real spaces to your text, you can use the <code>&amp;nbsp;</code> character entity.</p>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">Some Commonly Used HTML Entities</h2>
    <SimpleTable
        headers={['Result', 'Description', 'Entity Name', 'Entity Number']}
        rows={[
            [' ', 'non-breaking space', <code>&amp;nbsp;</code>, <code>&amp;#160;</code>],
            ['<', 'less than', <code>&amp;lt;</code>, <code>&amp;#60;</code>],
            ['>', 'greater than', <code>&amp;gt;</code>, <code>&amp;#62;</code>],
            ['&', 'ampersand', <code>&amp;amp;</code>, <code>&amp;#38;</code>],
            ['"', 'double quotation mark', <code>&amp;quot;</code>, <code>&amp;#34;</code>],
            ["'", "single quotation mark (apostrophe)", <code>&amp;apos;</code>, <code>&amp;#39;</code>],
            ['¢', 'cent', <code>&amp;cent;</code>, <code>&amp;#162;</code>],
            ['£', 'pound', <code>&amp;pound;</code>, <code>&amp;#163;</code>],
            ['¥', 'yen', <code>&amp;yen;</code>, <code>&amp;#165;</code>],
            ['€', 'euro', <code>&amp;euro;</code>, <code>&amp;#8364;</code>],
            ['©', 'copyright', <code>&amp;copy;</code>, <code>&amp;#169;</code>],
            ['®', 'registered trademark', <code>&amp;reg;</code>, <code>&amp;#174;</code>],
        ]}
    />
  </>
);

export default HtmlEntities;
