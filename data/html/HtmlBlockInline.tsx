import React from 'react';
import { CodeBlock, InfoBox, SimpleTable } from '../components';

const HtmlBlockInline: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">Every HTML element has a default display value, depending on what type of element it is. The two most common display values are <strong>block</strong> and <strong>inline</strong>.</p>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">Block-level Elements</h2>
    <p className="text-lg leading-relaxed">A block-level element always starts on a new line and takes up the full width available (stretches out to the left and right as far as it can).</p>
    <p className="text-lg leading-relaxed mt-2">A block-level element has a top and a bottom margin, whereas an inline element does not.</p>
    <p className="text-lg leading-relaxed mt-4">Here are the block-level elements in HTML:</p>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 my-4 text-sm">
        <ul className="list-disc list-inside">
            <li>&lt;address&gt;</li>
            <li>&lt;article&gt;</li>
            <li>&lt;aside&gt;</li>
            <li>&lt;blockquote&gt;</li>
            <li>&lt;canvas&gt;</li>
            <li>&lt;dd&gt;</li>
            <li>&lt;div&gt;</li>
            <li>&lt;dl&gt;</li>
        </ul>
        <ul className="list-disc list-inside">
            <li>&lt;dt&gt;</li>
            <li>&lt;fieldset&gt;</li>
            <li>&lt;figcaption&gt;</li>
            <li>&lt;figure&gt;</li>
            <li>&lt;footer&gt;</li>
            <li>&lt;form&gt;</li>
            <li>&lt;h1&gt;-&lt;h6&gt;</li>
            <li>&lt;header&gt;</li>
        </ul>
        <ul className="list-disc list-inside">
            <li>&lt;hr&gt;</li>
            <li>&lt;li&gt;</li>
            <li>&lt;main&gt;</li>
            <li>&lt;nav&gt;</li>
            <li>&lt;noscript&gt;</li>
            <li>&lt;ol&gt;</li>
            <li>&lt;p&gt;</li>
            <li>&lt;pre&gt;</li>
        </ul>
         <ul className="list-disc list-inside">
            <li>&lt;section&gt;</li>
            <li>&lt;table&gt;</li>
            <li>&lt;tfoot&gt;</li>
            <li>&lt;ul&gt;</li>
            <li>&lt;video&gt;</li>
        </ul>
    </div>
    
    <div className="p-4 my-6 bg-gray-100 dark:bg-gray-800/50 rounded-md">
        <p style={{border: '2px solid #4f46e5'}} className="p-2 mb-2">This is a paragraph (a block-level element).</p>
        <div style={{border: '2px solid #10b981'}} className="p-2">This is a div (another block-level element).</div>
    </div>


    <h2 className="text-3xl font-bold mt-10 mb-4">Inline Elements</h2>
    <p className="text-lg leading-relaxed">An inline element does not start on a new line. It only takes up as much width as necessary.</p>
    <p className="text-lg leading-relaxed mt-4">Here are the inline elements in HTML:</p>
     <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 my-4 text-sm">
        <ul className="list-disc list-inside">
            <li>&lt;a&gt;</li>
            <li>&lt;abbr&gt;</li>
            <li>&lt;acronym&gt;</li>
            <li>&lt;b&gt;</li>
            <li>&lt;bdo&gt;</li>
            <li>&lt;big&gt;</li>
            <li>&lt;br&gt;</li>
            <li>&lt;button&gt;</li>
        </ul>
        <ul className="list-disc list-inside">
            <li>&lt;cite&gt;</li>
            <li>&lt;code&gt;</li>
            <li>&lt;dfn&gt;</li>
            <li>&lt;em&gt;</li>
            <li>&lt;i&gt;</li>
            <li>&lt;img&gt;</li>
            <li>&lt;input&gt;</li>
            <li>&lt;kbd&gt;</li>
        </ul>
        <ul className="list-disc list-inside">
            <li>&lt;label&gt;</li>
            <li>&lt;map&gt;</li>
            <li>&lt;object&gt;</li>
            <li>&lt;output&gt;</li>
            <li>&lt;q&gt;</li>
            <li>&lt;samp&gt;</li>
            <li>&lt;script&gt;</li>
            <li>&lt;select&gt;</li>
        </ul>
        <ul className="list-disc list-inside">
            <li>&lt;small&gt;</li>
            <li>&lt;span&gt;</li>
            <li>&lt;strong&gt;</li>
            <li>&lt;sub&gt;</li>
            <li>&lt;sup&gt;</li>
            <li>&lt;textarea&gt;</li>
            <li>&lt;time&gt;</li>
            <li>&lt;tt&gt;</li>
            <li>&lt;var&gt;</li>
        </ul>
    </div>
    <div className="p-4 my-6 bg-gray-100 dark:bg-gray-800/50 rounded-md">
        <p>This is a paragraph with <span style={{border: '2px solid #4f46e5'}} className="p-1">a &lt;span&gt; element</span> inside, which is an inline element.</p>
    </div>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />
    
    <h2 className="text-3xl font-bold mt-10 mb-4">The &lt;div&gt; and &lt;span&gt; Elements</h2>
    <p className="text-lg leading-relaxed">The <code>&lt;div&gt;</code> element is a block-level element and is often used as a container for other HTML elements.</p>
    <p className="text-lg leading-relaxed mt-4">The <code>&lt;span&gt;</code> element is an inline element and is often used as a container for some text.</p>
    <p className="text-lg leading-relaxed mt-4">Neither element has any required attributes, but <code>style</code> and <code>class</code> are common.</p>
    
    <InfoBox className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-blue-800 dark:text-blue-300">
        <h4 className="font-bold">Summary</h4>
        <SimpleTable
            headers={['', 'Block-level', 'Inline']}
            rows={[
                ['Starts on new line?', 'Yes', 'No'],
                ['Takes full width?', 'Yes', 'Only necessary width'],
                ['Can contain other block elements?', 'Yes', 'No (generally)'],
                ['Example Tags', '<code>&lt;div&gt;, &lt;p&gt;, &lt;h1&gt;</code>', '<code>&lt;span&gt;, &lt;a&gt;, &lt;img&gt;</code>'],
            ]}
        />
    </InfoBox>
  </>
);

export default HtmlBlockInline;
