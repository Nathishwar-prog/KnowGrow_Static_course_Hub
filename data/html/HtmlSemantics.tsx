import React from 'react';
import { CodeBlock, InfoBox } from '../components';

const HtmlSemantics: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">Semantic HTML is the use of HTML markup to reinforce the meaning of the information in webpages rather than merely to define its presentation or look.</p>
    <p className="text-lg leading-relaxed mt-4">Semantic elements clearly describe their meaning in a human- and machine-readable way.</p>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />
    
    <h2 className="text-3xl font-bold mt-10 mb-4">What are Semantic Elements?</h2>
    <p className="text-lg leading-relaxed">Elements such as <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code> and <code>&lt;article&gt;</code> are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them.</p>
    <p className="text-lg leading-relaxed mt-4">In contrast, elements like <code>&lt;div&gt;</code> and <code>&lt;span&gt;</code> are non-semantic: they tell nothing about their content.</p>

    <h2 className="text-3xl font-bold mt-10 mb-4">Why Use Semantic HTML?</h2>
    <p className="text-lg leading-relaxed">The main advantages of writing semantic HTML are:</p>
    <ul className="list-disc list-inside space-y-2 pl-4 text-lg mt-4">
        <li><strong>Accessibility:</strong> Screen readers and other assistive technologies can better understand the context and content of your website, providing a better experience for users with disabilities.</li>
        <li><strong>SEO:</strong> It helps search engines like Google to better understand the content of your pages, which can improve your site's ranking.</li>
        <li><strong>Maintainability:</strong> It makes the code easier to read and understand for other developers (and for you in the future).</li>
        <li><strong>Clarity:</strong> It provides a clear structure to your document.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-10 mb-4">Semantic vs. Non-Semantic Example</h2>
    <p className="text-lg leading-relaxed">Imagine you are building a simple blog page. Here's how it might look with non-semantic and semantic markup.</p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div>
            <h3 className="text-2xl font-bold mb-3">Non-Semantic (using &lt;div&gt;)</h3>
            <CodeBlock language="html">{`<div id="header">
    <h1>My Blog</h1>
</div>

<div class="article">
    <h2>Post Title</h2>
    <p>Post content...</p>
</div>

<div id="footer">
    <p>Copyright info</p>
</div>`}</CodeBlock>
        </div>
        <div>
            <h3 className="text-2xl font-bold mb-3">Semantic HTML</h3>
            <CodeBlock language="html">{`<header>
    <h1>My Blog</h1>
</header>

<article>
    <h2>Post Title</h2>
    <p>Post content...</p>
</article>

<footer>
    <p>Copyright info</p>
</footer>`}</CodeBlock>
        </div>
    </div>
    <p className="text-lg leading-relaxed">While both examples might be styled to look identical, the semantic version is much easier to understand for both browsers and developers.</p>
    
    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">Key Semantic Elements in HTML5</h2>
    <ul className="list-disc list-inside space-y-2 pl-4 text-lg mt-4">
        <li><code>&lt;article&gt;</code></li>
        <li><code>&lt;aside&gt;</code></li>
        <li><code>&lt;details&gt;</code></li>
        <li><code>&lt;figcaption&gt;</code></li>
        <li><code>&lt;figure&gt;</code></li>
        <li><code>&lt;footer&gt;</code></li>
        <li><code>&lt;header&gt;</code></li>
        <li><code>&lt;main&gt;</code></li>
        <li><code>&lt;mark&gt;</code></li>
        <li><code>&lt;nav&gt;</code></li>
        <li><code>&lt;section&gt;</code></li>
        <li><code>&lt;summary&gt;</code></li>
        <li><code>&lt;time&gt;</code></li>
    </ul>

    <InfoBox className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 text-emerald-800 dark:text-emerald-300">
        <h4 className="font-bold">Summary</h4>
        <p className="mt-2">Always choose a semantic HTML element over a non-semantic one if a suitable option exists. Use <code>&lt;div&gt;</code> and <code>&lt;span&gt;</code> only for styling purposes when no better semantic element is available.</p>
    </InfoBox>

  </>
);

export default HtmlSemantics;