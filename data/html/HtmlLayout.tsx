import React from 'react';
import { CodeBlock, InfoBox } from '../components';

const HtmlLayout: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">Websites often display content in multiple columns (like a magazine or a newspaper). HTML5 offers semantic elements that define the different parts of a web page, making it easier to create structured and meaningful layouts.</p>
    
    <hr className="my-8 border-gray-200 dark:border-gray-600" />
    
    <h2 className="text-3xl font-bold mt-10 mb-4">HTML5 Layout Elements</h2>
    <p className="text-lg leading-relaxed">Here are the main semantic elements used for page layout:</p>
    <ul className="list-disc list-inside space-y-2 pl-4 text-lg mt-4">
        <li><code>&lt;header&gt;</code> - Defines a header for a document or section.</li>
        <li><code>&lt;nav&gt;</code> - Defines a set of navigation links.</li>
        <li><code>&lt;section&gt;</code> - Defines a thematic grouping of content.</li>
        <li><code>&lt;article&gt;</code> - Defines independent, self-contained content.</li>
        <li><code>&lt;aside&gt;</code> - Defines content aside from the content it is placed in (like a sidebar).</li>
        <li><code>&lt;footer&gt;</code> - Defines a footer for a document or section.</li>
        <li><code>&lt;details&gt;</code> & <code>&lt;summary&gt;</code> - For creating interactive disclosure widgets.</li>
    </ul>

    <h3 className="text-2xl font-bold mt-8 mb-3">Example Page Layout</h3>
    <p className="text-lg leading-relaxed">The following example shows how these elements can be combined to create a common webpage layout. CSS is used to style the elements.</p>

    <div className="my-6 p-4 border border-gray-300 dark:border-gray-600 rounded-lg">
        <header className="bg-gray-200 dark:bg-gray-700 p-4 text-center rounded-md">
            <h2 className="font-bold">&lt;header&gt; - Website Title</h2>
        </header>
        <nav className="bg-gray-300 dark:bg-gray-600 p-3 my-2 text-center rounded-md">
            <span className="font-bold">&lt;nav&gt; - Navigation Links</span>
        </nav>
        <div className="flex flex-col md:flex-row gap-2">
            <main className="flex-grow">
                <section className="bg-gray-200 dark:bg-gray-700 p-4 rounded-md">
                    <h3 className="font-bold">&lt;section&gt;</h3>
                    <article className="bg-gray-100 dark:bg-gray-800 p-3 mt-2 rounded-md">
                        <h4 className="font-bold">&lt;article&gt; - Blog Post Title</h4>
                        <p className="text-sm mt-1">Content of the blog post...</p>
                    </article>
                    <article className="bg-gray-100 dark:bg-gray-800 p-3 mt-2 rounded-md">
                        <h4 className="font-bold">&lt;article&gt; - Another Post</h4>
                        <p className="text-sm mt-1">More content...</p>
                    </article>
                </section>
            </main>
            <aside className="bg-gray-300 dark:bg-gray-600 p-4 rounded-md md:w-1/3 text-center">
                <span className="font-bold">&lt;aside&gt; - Sidebar</span>
            </aside>
        </div>
        <footer className="bg-gray-200 dark:bg-gray-700 p-4 mt-2 text-center rounded-md">
            <p className="font-bold">&lt;footer&gt; - Copyright Information</p>
        </footer>
    </div>
    
    <CodeBlock language="html">{`<header>
  <h1>My Website</h1>
</header>

<nav>
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</nav>

<section>
  <article>
    <h2>Blog Post Title</h2>
    <p>Some content...</p>
  </article>
</section>

<aside>
  <h3>Related Links</h3>
  <ul>...</ul>
</aside>

<footer>
  <p>Copyright © 2024</p>
</footer>`}</CodeBlock>

    <InfoBox className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 text-yellow-800 dark:text-yellow-300">
        <h4 className="font-bold">Old vs. New</h4>
        <p className="mt-2">Historically, developers used <code>&lt;div&gt;</code> elements with IDs (e.g., <code>&lt;div id="header"&gt;</code>) or even <code>&lt;table&gt;</code> elements for layout. Using semantic HTML5 layout tags is now the standard and is better for accessibility, SEO, and code clarity.</p>
    </InfoBox>

  </>
);

export default HtmlLayout;