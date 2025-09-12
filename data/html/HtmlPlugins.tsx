import React from 'react';
import { CodeBlock, InfoBox } from '../components';

const HtmlPlugins: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">Plug-ins are computer programs that extend the standard functionality of a web browser.</p>
    <p className="text-lg leading-relaxed mt-4">In the past, plug-ins were widely used to play audio and video, display 3D graphics, and run Java applets. Famous plug-ins included Adobe Flash Player, Apple QuickTime, and Microsoft Silverlight.</p>
    
    <InfoBox className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 text-yellow-800 dark:text-yellow-300">
        <h4 className="font-bold">Plug-ins are Mostly Obsolete</h4>
        <p className="mt-2">Most browsers have deprecated support for plug-ins. With the rise of HTML5, native browser capabilities like the <code>&lt;video&gt;</code>, <code>&lt;audio&gt;</code>, and <code>&lt;canvas&gt;</code> elements have replaced the need for most plug-ins.</p>
    </InfoBox>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">The &lt;object&gt; Element</h2>
    <p className="text-lg leading-relaxed">The <code>&lt;object&gt;</code> element was originally designed to embed plug-ins into a web page. However, it can also be used to embed another web page, a PDF, or an SVG file.</p>
    <CodeBlock language="html">{`<!-- Embedding a PDF file -->
<object data="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" type="application/pdf" width="600" height="400">
  <p>Your browser does not support PDFs. <a href="myfile.pdf">Download the PDF</a>.</p>
</object>

<!-- Embedding an HTML file -->
<object data="snippet.html" width="100%" height="200"></object>`}</CodeBlock>

    <h2 className="text-3xl font-bold mt-10 mb-4">The &lt;embed&gt; Element</h2>
    <p className="text-lg leading-relaxed">The <code>&lt;embed&gt;</code> element also defines a container for an external resource, such as a web page, a picture, a media player, or a plug-in application.</p>
    <p className="text-lg leading-relaxed mt-4">It is a void element, meaning it has no closing tag. It was not part of the HTML 4 specification but was added in HTML5.</p>
    <CodeBlock language="html">{`<!-- Embedding an SVG image -->
<embed src="https://www.w3.org/Icons/SVG/svg-logo-v.svg" type="image/svg+xml" width="100" height="100">

<!-- Embedding a video -->
<embed src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" width="400" height="300">`}</CodeBlock>

    <InfoBox className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-blue-800 dark:text-blue-300">
        <h4 className="font-bold"><code>&lt;object&gt;</code> vs. <code>&lt;embed&gt;</code></h4>
        <p className="mt-2">Both tags can achieve similar results. The <code>&lt;object&gt;</code> element is more standardized and allows for fallback content if the resource cannot be loaded, which is better for accessibility. The <code>&lt;embed&gt;</code> tag is simpler to use but less flexible.</p>
        <p className="mt-2">For most modern use cases like video and audio, you should use the dedicated <code>&lt;video&gt;</code> and <code>&lt;audio&gt;</code> tags.</p>
    </InfoBox>
  </>
);

export default HtmlPlugins;