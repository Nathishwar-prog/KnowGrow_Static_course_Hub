import React from 'react';
import { CodeBlock, InfoBox } from '../components';

const HtmlLinks: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">Links are found in nearly all web pages. Links allow users to click their way from page to page.</p>
    
    <hr className="my-8 border-gray-200 dark:border-gray-600" />
    
    <h2 className="text-3xl font-bold mt-10 mb-4">HTML Links - Hyperlinks</h2>
    <p className="text-lg leading-relaxed">HTML links are hyperlinks. You can click on a link and jump to another document.</p>
    <p className="text-lg leading-relaxed mt-2">The HTML <code>&lt;a&gt;</code> tag defines a hyperlink. It has the following syntax:</p>
    <CodeBlock language="html">{`<a href="url">link text</a>`}</CodeBlock>
    <p className="text-lg leading-relaxed mt-4">The most important attribute of the <code>&lt;a&gt;</code> element is the <code>href</code> attribute, which indicates the link's destination.</p>
    <p className="text-lg leading-relaxed mt-2">The <em>link text</em> is the part that will be visible to the reader. Clicking on the link text will send the reader to the specified URL address.</p>
    <CodeBlock language="html">{`<a href="https://www.knowgrow.dev/">Visit KnowGrow</a>`}</CodeBlock>

    <InfoBox className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-blue-800 dark:text-blue-300">
        <p>By default, links will appear as follows in all browsers:
            <ul className="list-disc list-inside mt-2">
                <li>An unvisited link is underlined and blue</li>
                <li>A visited link is underlined and purple</li>
                <li>An active link is underlined and red</li>
            </ul>
        </p>
    </InfoBox>

    <h2 className="text-3xl font-bold mt-10 mb-4">The target Attribute</h2>
    <p className="text-lg leading-relaxed">By default, the linked page will be displayed in the current browser window. To change this, you must specify another target for the link.</p>
    <p className="text-lg leading-relaxed mt-2">The <code>target</code> attribute can have one of the following values:</p>
    <ul className="list-disc list-inside space-y-2 pl-4 text-lg mt-4">
        <li><code>_self</code> - Default. Opens the document in the same window/tab as it was clicked</li>
        <li><code>_blank</code> - Opens the document in a new window or tab</li>
        <li><code>_parent</code> - Opens the document in the parent frame</li>
        <li><code>_top</code> - Opens the document in the full body of the window</li>
    </ul>
    <p className="text-lg leading-relaxed mt-4">This example will open the linked document in a new browser window or tab:</p>
    <CodeBlock language="html">{`<a href="https://www.knowgrow.dev/" target="_blank">Visit KnowGrow</a>`}</CodeBlock>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">Absolute URLs vs. Relative URLs</h2>
    <p className="text-lg leading-relaxed">Both examples above are using an <strong>absolute URL</strong> (a full web address) in the <code>href</code> attribute.</p>
    <p className="text-lg leading-relaxed mt-2">A <strong>relative URL</strong> points to a file within a web site, like <code>href="html_images.asp"</code>.</p>
    
    <h3 className="text-2xl font-bold mt-6 mb-3">Absolute URL Example</h3>
    <CodeBlock language="html">{`<a href="https://www.knowgrow.dev/html/default.asp">HTML tutorial</a>`}</CodeBlock>
    
    <h3 className="text-2xl font-bold mt-6 mb-3">Relative URL Example</h3>
    <CodeBlock language="html">{`<a href="/html/default.asp">HTML tutorial</a>`}</CodeBlock>

    <InfoBox className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 text-emerald-800 dark:text-emerald-300">
        <p>It is best practice to use relative URLs for internal links (links to other pages on your own website). This prevents issues if you ever change your domain name.</p>
    </InfoBox>

    <h2 className="text-3xl font-bold mt-10 mb-4">HTML Links - Image as a Link</h2>
    <p className="text-lg leading-relaxed">To use an image as a link, just put the <code>&lt;img&gt;</code> tag inside the <code>&lt;a&gt;</code> tag:</p>
    <CodeBlock language="html">{`<a href="default.asp">
  <img src="https://picsum.photos/seed/smiley/42/42" alt="HTML tutorial" style="width:42px;height:42px;">
</a>`}</CodeBlock>

    <h2 className="text-3xl font-bold mt-10 mb-4">Link to an Email Address</h2>
    <p className="text-lg leading-relaxed">Use <code>mailto:</code> inside the <code>href</code> attribute to create a link that opens the user's email program (to let them send a new email):</p>
    <CodeBlock language="html">{`<a href="mailto:someone@example.com">Send email</a>`}</CodeBlock>

    <h2 className="text-3xl font-bold mt-10 mb-4">Button as a Link</h2>
    <p className="text-lg leading-relaxed">To use an HTML button as a link, you have to add some JavaScript code. JavaScript allows you to specify what happens at certain events, such as a click of a button:</p>
    <CodeBlock language="html">{`<button onclick="document.location='default.asp'">HTML Tutorial</button>`}</CodeBlock>
    
    <h2 className="text-3xl font-bold mt-10 mb-4">Link Titles</h2>
    <p className="text-lg leading-relaxed">The <code>title</code> attribute specifies extra information about an element. The information is most often shown as a tooltip text when the mouse moves over the element.</p>
    <CodeBlock language="html">{`<a href="https://www.knowgrow.dev/html/" title="Go to KnowGrow HTML section">Visit our HTML Tutorial</a>`}</CodeBlock>
    <div className="p-4 my-4 bg-gray-100 dark:bg-gray-800/50 rounded-md">
        <a href="#" className="text-indigo-500 hover:underline" title="Go to KnowGrow HTML section">Visit our HTML Tutorial</a>
    </div>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">Chapter Summary</h2>
    <ul className="list-disc list-inside space-y-2 pl-4 text-lg">
        <li>Use the <code>&lt;a&gt;</code> element to define a link</li>
        <li>Use the <code>href</code> attribute to define the link address</li>
        <li>Use the <code>target</code> attribute to define where to open the linked document</li>
        <li>Use the <code>&lt;img&gt;</code> element (inside <code>&lt;a&gt;</code>) to use an image as a link</li>
        <li>Use the <code>mailto:</code> scheme inside the <code>href</code> attribute to create a link that opens the user's email program</li>
    </ul>

  </>
);

export default HtmlLinks;