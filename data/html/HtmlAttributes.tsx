import React from 'react';
import { CodeBlock, InfoBox } from '../components';

const HtmlAttributes: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">HTML attributes provide additional information about HTML elements.</p>
    <ul className="list-disc list-inside space-y-2 pl-4 text-lg mt-4">
      <li>All HTML elements can have <strong>attributes</strong></li>
      <li>Attributes provide <strong>additional information</strong> about elements</li>
      <li>Attributes are always specified in the <strong>start tag</strong></li>
      <li>Attributes usually come in name/value pairs like: <strong>name="value"</strong></li>
    </ul>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">The href Attribute</h2>
    <p className="text-lg leading-relaxed">The <code>&lt;a&gt;</code> tag defines a hyperlink. The <code>href</code> attribute specifies the URL of the page the link goes to:</p>
    <CodeBlock language="html">{`<a href="https://www.knowgrow.dev">Visit KnowGrow</a>`}</CodeBlock>

    <h2 className="text-3xl font-bold mt-10 mb-4">The src Attribute</h2>
    <p className="text-lg leading-relaxed">The <code>&lt;img&gt;</code> tag is used to embed an image in an HTML page. The <code>src</code> attribute specifies the path to the image to be displayed:</p>
    <CodeBlock language="html">{`<img src="img_knowgrow.jpg">`}</CodeBlock>
    
    <h2 className="text-3xl font-bold mt-10 mb-4">The width and height Attributes</h2>
    <p className="text-lg leading-relaxed">The <code>&lt;img&gt;</code> tag should also contain the <code>width</code> and <code>height</code> attributes, which specify the width and height of the image (in pixels):</p>
    <CodeBlock language="html">{`<img src="img_knowgrow.jpg" width="500" height="600">`}</CodeBlock>

    <h2 className="text-3xl font-bold mt-10 mb-4">The alt Attribute</h2>
    <p className="text-lg leading-relaxed">The required <code>alt</code> attribute for the <code>&lt;img&gt;</code> tag specifies an alternate text for an image, if the image for some reason cannot be displayed. This can be due to a slow connection, or an error in the <code>src</code> attribute, or if the user uses a screen reader.</p>
    <CodeBlock language="html">{`<img src="img_knowgrow.jpg" alt="KnowGrow Logo" width="500" height="600">`}</CodeBlock>

    <h2 className="text-3xl font-bold mt-10 mb-4">The style Attribute</h2>
    <p className="text-lg leading-relaxed">The <code>style</code> attribute is used to add styles to an element, such as color, font, size, and more.</p>
    <CodeBlock language="html">{`<p style="color:red;">This is a red paragraph.</p>`}</CodeBlock>

    <h2 className="text-3xl font-bold mt-10 mb-4">The lang Attribute</h2>
    <p className="text-lg leading-relaxed">You should always include the <code>lang</code> attribute inside the <code>&lt;html&gt;</code> tag, to declare the language of the Web page. This is meant to assist search engines and browsers.</p>
    <CodeBlock language="html">{`<!DOCTYPE html>
<html lang="en">
<body>
...
</body>
</html>`}</CodeBlock>
    <p className="text-lg leading-relaxed mt-4">Country codes can also be added to the language code in the <code>lang</code> attribute. So, the first two characters define the language of the HTML page, and the last two characters define the country.</p>
    
    <h2 className="text-3xl font-bold mt-10 mb-4">The title Attribute</h2>
    <p className="text-lg leading-relaxed">The <code>title</code> attribute defines some extra information about an element. The value of the title attribute will be displayed as a tooltip when you mouse over the element:</p>
    <CodeBlock language="html">{`<p title="I'm a tooltip">This is a paragraph.</p>`}</CodeBlock>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />
    
    <InfoBox className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 text-emerald-800 dark:text-emerald-300">
      <h4 className="font-bold">We Suggest: Use Lowercase Attributes</h4>
      <p className="mt-2">The HTML standard does not require lowercase attribute names. However, we recommend lowercase in HTML, and demand lowercase for stricter document types like XHTML.</p>
    </InfoBox>

    <InfoBox className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 text-yellow-800 dark:text-yellow-300">
      <h4 className="font-bold">We Suggest: Always Quote Attribute Values</h4>
      <p className="mt-2">The HTML standard does not require quotes around attribute values. However, we <strong>strongly recommend</strong> quotes in HTML. Sometimes you have to use quotes, for example when the value contains spaces.</p>
    </InfoBox>
  </>
);

export default HtmlAttributes;