import React from 'react';
import { CodeBlock, InfoBox, SimpleTable } from '../components';

const HtmlFilePaths: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">A file path describes the location of a file in a web site's folder structure.</p>
    <p className="text-lg leading-relaxed mt-4">File paths are used when linking to external files, like:
        <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
            <li>Web pages (<code>&lt;a href="..."&gt;</code>)</li>
            <li>Images (<code>&lt;img src="..."&gt;</code>)</li>
            <li>Style sheets (<code>&lt;link rel="stylesheet" href="..."&gt;</code>)</li>
            <li>JavaScript files (<code>&lt;script src="..."&gt;</code>)</li>
        </ul>
    </p>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />
    
    <h2 className="text-3xl font-bold mt-10 mb-4">Absolute File Paths</h2>
    <p className="text-lg leading-relaxed">An absolute file path is the full URL to a file on the internet.</p>
    <CodeBlock>{`<img src="https://www.knowgrow.dev/images/picture.jpg" alt="A picture">`}</CodeBlock>
    
    <h2 className="text-3xl font-bold mt-10 mb-4">Relative File Paths</h2>
    <p className="text-lg leading-relaxed">A relative file path points to a file relative to the current page. This is the most common way to link to files on your own website.</p>
    <p className="text-lg leading-relaxed mt-4">The following table explains the different types of relative file paths:</p>
    
    <SimpleTable 
        headers={['Path', 'Description']}
        rows={[
            [<code>&lt;img src="picture.jpg"&gt;</code>, 'The file is located in the same folder as the current page.'],
            [<code>&lt;img src="images/picture.jpg"&gt;</code>, 'The file is located in the "images" folder, which is in the current folder.'],
            [<code>&lt;img src="/images/picture.jpg"&gt;</code>, 'The file is located in the "images" folder at the root of the current web site.'],
            [<code>&lt;img src="../picture.jpg"&gt;</code>, 'The file is located in the folder one level up from the current folder.']
        ]}
    />

    <div className="my-8 p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800/50">
        <h4 className="font-bold text-lg mb-2">Folder Structure Example:</h4>
        <pre className="text-sm">
            <code>
{`root/
├── index.html
├── contact.html
├── images/
│   ├── logo.png
│   └── hero.jpg
└── pages/
    └── about.html`}
            </code>
        </pre>
        <p className="text-lg leading-relaxed mt-4">If you are on <code>index.html</code>, to link to <code>logo.png</code> you would use: <code>&lt;img src="images/logo.png"&gt;</code>.</p>
        <p className="text-lg leading-relaxed mt-2">If you are on <code>about.html</code>, to link to <code>logo.png</code> you would use: <code>&lt;img src="../images/logo.png"&gt;</code>.</p>
    </div>

    <InfoBox className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 text-emerald-800 dark:text-emerald-300">
        <h4 className="font-bold">Best Practice</h4>
        <p className="mt-2">It is best practice to use relative file paths for links to other pages and resources on your own website. This ensures that your links won't be broken if you change your domain name or move your website to another server.</p>
    </InfoBox>

  </>
);

export default HtmlFilePaths;
