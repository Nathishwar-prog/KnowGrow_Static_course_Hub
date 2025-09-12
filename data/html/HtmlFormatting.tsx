import React from 'react';
import { CodeBlock, InfoBox, SimpleTable } from '../components';

const HtmlFormatting: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">HTML contains several elements for defining text with a special meaning.</p>
    <p className="text-lg leading-relaxed mt-4">These formatting elements were designed to display special types of text, distinguishing them from normal paragraph text.</p>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">Bold and Strong Text</h2>
    <p className="text-lg leading-relaxed">The HTML <code>&lt;b&gt;</code> element specifies bold text, without any extra importance.</p>
    <CodeBlock>{`<b>This text is bold</b>`}</CodeBlock>
    <div className="text-lg p-4 my-4 bg-gray-100 dark:bg-gray-800/50 rounded-md"><b>This text is bold</b></div>

    <p className="text-lg leading-relaxed mt-6">The HTML <code>&lt;strong&gt;</code> element defines text with strong importance. The content inside is typically displayed in bold.</p>
    <CodeBlock>{`<strong>This text is important!</strong>`}</CodeBlock>
    <div className="text-lg p-4 my-4 bg-gray-100 dark:bg-gray-800/50 rounded-md"><strong>This text is important!</strong></div>
    
    <InfoBox className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-blue-800 dark:text-blue-300">
        <h4 className="font-bold"><code>&lt;b&gt;</code> vs. <code>&lt;strong&gt;</code></h4>
        <p className="mt-2">Both tags make text bold, but <code>&lt;strong&gt;</code> is semantically important. Screen readers will recognize the emphasis of <code>&lt;strong&gt;</code>, making your site more accessible. Use <code>&lt;b&gt;</code> only for stylistic offset without adding importance.</p>
    </InfoBox>

    <h2 className="text-3xl font-bold mt-10 mb-4">Italic and Emphasized Text</h2>
    <p className="text-lg leading-relaxed">The HTML <code>&lt;i&gt;</code> element defines a part of text in an alternate voice or mood. The content inside is typically displayed in italic.</p>
    <CodeBlock>{`<i>This text is italic</i>`}</CodeBlock>
    <div className="text-lg p-4 my-4 bg-gray-100 dark:bg-gray-800/50 rounded-md"><i>This text is italic</i></div>

    <p className="text-lg leading-relaxed mt-6">The HTML <code>&lt;em&gt;</code> element defines emphasized text. The content inside is typically displayed in italic.</p>
    <CodeBlock>{`<em>This text is emphasized</em>`}</CodeBlock>
    <div className="text-lg p-4 my-4 bg-gray-100 dark:bg-gray-800/50 rounded-md"><em>This text is emphasized</em></div>

    <InfoBox className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-blue-800 dark:text-blue-300">
        <h4 className="font-bold"><code>&lt;i&gt;</code> vs. <code>&lt;em&gt;</code></h4>
        <p className="mt-2">Like bold tags, <code>&lt;em&gt;</code> carries semantic meaning for emphasis, which screen readers can convey. Use <code>&lt;i&gt;</code> for things like technical terms, foreign words, or thoughts, where there is no change in emphasis.</p>
    </InfoBox>
    
    <h2 className="text-3xl font-bold mt-10 mb-4">Other Formatting Elements</h2>

    <h3 className="text-2xl font-bold mt-8 mb-3">Marked Text</h3>
    <p className="text-lg leading-relaxed">The HTML <code>&lt;mark&gt;</code> element defines text that should be marked or highlighted.</p>
    <CodeBlock>{`<p>Do not forget to buy <mark>milk</mark> today.</p>`}</CodeBlock>
    <div className="p-4 my-4 bg-gray-100 dark:bg-gray-800/50 rounded-md"><p className="text-lg">Do not forget to buy <mark>milk</mark> today.</p></div>

    <h3 className="text-2xl font-bold mt-8 mb-3">Small Text</h3>
    <p className="text-lg leading-relaxed">The HTML <code>&lt;small&gt;</code> element defines smaller text.</p>
    <CodeBlock>{`<p>This is some normal text.</p>
<p><small>This is some smaller text.</small></p>`}</CodeBlock>
    <div className="p-4 my-4 bg-gray-100 dark:bg-gray-800/50 rounded-md"><p className="text-lg">This is some normal text.</p><p className="text-lg"><small>This is some smaller text.</small></p></div>

    <h3 className="text-2xl font-bold mt-8 mb-3">Deleted Text</h3>
    <p className="text-lg leading-relaxed">The HTML <code>&lt;del&gt;</code> element defines text that has been deleted from a document. Browsers will usually strike a line through deleted text.</p>
    <CodeBlock>{`<p>My favorite color is <del>blue</del> red.</p>`}</CodeBlock>
    <div className="p-4 my-4 bg-gray-100 dark:bg-gray-800/50 rounded-md"><p className="text-lg">My favorite color is <del>blue</del> red.</p></div>
    
    <h3 className="text-2xl font-bold mt-8 mb-3">Inserted Text</h3>
    <p className="text-lg leading-relaxed">The HTML <code>&lt;ins&gt;</code> element defines a text that has been inserted into a document. Browsers will usually underline inserted text.</p>
    <CodeBlock>{`<p>My favorite color is <del>blue</del> <ins>red</ins>.</p>`}</CodeBlock>
    <div className="p-4 my-4 bg-gray-100 dark:bg-gray-800/50 rounded-md"><p className="text-lg">My favorite color is <del>blue</del> <ins>red</ins>.</p></div>

    <h3 className="text-2xl font-bold mt-8 mb-3">Subscript Text</h3>
    <p className="text-lg leading-relaxed">The HTML <code>&lt;sub&gt;</code> element defines subscript text. Subscript text appears half a character below the normal line, and is sometimes rendered in a smaller font.</p>
    <CodeBlock>{`<p>This is <sub>subscripted</sub> text.</p>
<p>The chemical formula for water is H<sub>2</sub>O.</p>`}</CodeBlock>
    <div className="p-4 my-4 bg-gray-100 dark:bg-gray-800/50 rounded-md"><p className="text-lg">This is <sub>subscripted</sub> text.</p><p className="text-lg">The chemical formula for water is H<sub>2</sub>O.</p></div>

    <h3 className="text-2xl font-bold mt-8 mb-3">Superscript Text</h3>
    <p className="text-lg leading-relaxed">The HTML <code>&lt;sup&gt;</code> element defines superscript text. Superscript text appears half a character above the normal line, and is sometimes rendered in a smaller font.</p>
    <CodeBlock>{`<p>This is <sup>superscripted</sup> text.</p>
<p>The famous equation is E = mc<sup>2</sup>.</p>`}</CodeBlock>
    <div className="p-4 my-4 bg-gray-100 dark:bg-gray-800/50 rounded-md"><p className="text-lg">This is <sup>superscripted</sup> text.</p><p className="text-lg">The famous equation is E = mc<sup>2</sup>.</p></div>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />
    
    <h2 className="text-3xl font-bold mt-10 mb-4">HTML Formatting Elements Summary</h2>
    <SimpleTable 
        headers={['Tag', 'Description']}
        rows={[
            [<code>&lt;b&gt;</code>, 'Defines bold text'],
            [<code>&lt;strong&gt;</code>, 'Defines important text'],
            [<code>&lt;i&gt;</code>, 'Defines a part of text in an alternate voice or mood'],
            [<code>&lt;em&gt;</code>, 'Defines emphasized text '],
            [<code>&lt;mark&gt;</code>, 'Defines marked/highlighted text'],
            [<code>&lt;small&gt;</code>, 'Defines smaller text'],
            [<code>&lt;del&gt;</code>, 'Defines deleted text'],
            [<code>&lt;ins&gt;</code>, 'Defines inserted text'],
            [<code>&lt;sub&gt;</code>, 'Defines subscripted text'],
            [<code>&lt;sup&gt;</code>, 'Defines superscripted text'],
        ]}
    />
  </>
);

export default HtmlFormatting;