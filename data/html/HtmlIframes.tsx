import React from 'react';
import { CodeBlock, InfoBox } from '../components';

const HtmlIframes: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">An HTML iframe is used to display a web page within a web page.</p>
    <p className="text-lg leading-relaxed mt-4">The HTML <code>&lt;iframe&gt;</code> tag specifies an inline frame.</p>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">Iframe Syntax</h2>
    <p className="text-lg leading-relaxed">An HTML iframe embeds another document within the current HTML document.</p>
    <CodeBlock language="html">{`<iframe src="url" title="description"></iframe>`}</CodeBlock>
    
    <InfoBox className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 text-emerald-800 dark:text-emerald-300">
        <h4 className="font-bold">Accessibility Tip</h4>
        <p>Always include a <code>title</code> attribute for the <code>&lt;iframe&gt;</code>. This is crucial for screen reader users to understand what the content of the iframe is.</p>
    </InfoBox>

    <h2 className="text-3xl font-bold mt-10 mb-4">Iframe Height and Width</h2>
    <p className="text-lg leading-relaxed">Use the <code>height</code> and <code>width</code> attributes to specify the size of the iframe.</p>
    <CodeBlock language="html">{`<iframe src="/html/default.asp" height="200" width="300" title="KnowGrow HTML Example"></iframe>`}</CodeBlock>
    <p className="text-lg leading-relaxed mt-4">Alternatively, you can use the CSS <code>height</code> and <code>width</code> properties:</p>
    <CodeBlock language="html">{`<iframe src="/html/default.asp" style="height:200px;width:300px;" title="KnowGrow HTML Example"></iframe>`}</CodeBlock>

    <h2 className="text-3xl font-bold mt-10 mb-4">Remove the Iframe Border</h2>
    <p className="text-lg leading-relaxed">By default, an iframe has a border around it. To remove the border, add the CSS <code>border</code> property and set its value to <code>none</code>.</p>
    <CodeBlock language="html">{`<iframe src="/html/default.asp" style="border:none;" title="Iframe Example"></iframe>`}</CodeBlock>
    
    <h2 className="text-3xl font-bold mt-10 mb-4">Iframe as a Link Target</h2>
    <p className="text-lg leading-relaxed">An iframe can be used as the target frame for a link. The <code>target</code> attribute of a link must refer to the <code>name</code> attribute of the iframe.</p>
    <CodeBlock language="html">{`<!-- The iframe is given a name -->
<iframe src="demo_iframe.htm" name="iframe_a" title="Iframe Example"></iframe>

<!-- The link's target attribute refers to the iframe's name -->
<p><a href="https://www.knowgrow.dev" target="iframe_a">KnowGrow.dev</a></p>`}</CodeBlock>
    
    <InfoBox className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 text-red-800 dark:text-red-300">
        <h4 className="font-bold">Security Note</h4>
        <p className="mt-2">Many modern websites prevent themselves from being embedded in iframes on other domains for security reasons (to prevent "clickjacking"). They do this by sending an <code>X-Frame-Options: DENY</code> or <code>X-Frame-Options: SAMEORIGIN</code> HTTP header. If you try to load such a site, you will see a blank iframe or an error in the browser console.</p>
    </InfoBox>
  </>
);

export default HtmlIframes;