import React from 'react';
import { CodeBlock, InfoBox, BrowserMockup } from '../components';

const HtmlFavicon: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">A favicon is a small image displayed next to the page title in the browser tab.</p>
    <p className="text-lg leading-relaxed mt-4">It is also known as a shortcut icon, website icon, tab icon, URL icon, or bookmark icon.</p>
    
    <BrowserMockup title="My Page Title">
      <div className="flex items-center">
          <img src="https://www.w3schools.com/favicon.ico" alt="Favicon" className="w-4 h-4 mr-2" />
          <span>My Page Title</span>
      </div>
    </BrowserMockup>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">How To Add a Favicon in HTML</h2>
    <p className="text-lg leading-relaxed">To add a favicon to your website, add a <code>&lt;link&gt;</code> tag in the <code>&lt;head&gt;</code> section of your HTML file:</p>
    <CodeBlock>{`<!DOCTYPE html>
<html>
<head>
  <title>My Page Title</title>
  <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
</head>
<body>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>

</body>
</html>`}</CodeBlock>

    <InfoBox className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-blue-800 dark:text-blue-300">
      <h4 className="font-bold">Modern Browsers</h4>
      <p className="mt-2">Most modern browsers will find and display a favicon even if it's not explicitly linked in your HTML. They will look for a file named <code>favicon.ico</code> in the root directory of your website. However, it is always best practice to include the <code>&lt;link&gt;</code> tag to ensure compatibility and avoid confusion.</p>
    </InfoBox>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />
    
    <h2 className="text-3xl font-bold mt-10 mb-4">Favicon File Format Support</h2>
    <p className="text-lg leading-relaxed">The ICO format is the traditional and most widely supported format for favicons. However, modern browsers support several other image formats.</p>
    <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 my-6">
        <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
                <th className="text-left font-bold py-2 px-4 border-b dark:border-gray-600">Format</th>
                <th className="text-left font-bold py-2 px-4 border-b dark:border-gray-600">Description</th>
            </tr>
        </thead>
        <tbody>
            <tr className="border-b dark:border-gray-700">
                <td className="py-2 px-4">ICO</td>
                <td className="py-2 px-4">The original and most supported format. Can contain multiple sizes.</td>
            </tr>
            <tr className="border-b dark:border-gray-700">
                <td className="py-2 px-4">PNG</td>
                <td className="py-2 px-4">Good choice for transparency. Widely supported.</td>
            </tr>
            <tr className="border-b dark:border-gray-700">
                <td className="py-2 px-4">GIF</td>
                <td className="py-2 px-4">Supports animation, but quality can be lower.</td>
            </tr>
            <tr className="border-b dark:border-gray-700">
                <td className="py-2 px-4">JPEG</td>
                <td className="py-2 px-4">Good for photographic icons, but does not support transparency.</td>
            </tr>
            <tr>
                <td className="py-2 px-4">SVG</td>
                <td className="py-2 px-4">Scalable vector format. Excellent quality at any size.</td>
            </tr>
        </tbody>
    </table>

    <p className="text-lg leading-relaxed">Here is an example of how to use a PNG file as a favicon:</p>
    <CodeBlock>{`<link rel="icon" type="image/png" href="/images/favicon.png">`}</CodeBlock>

     <InfoBox className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 text-emerald-800 dark:text-emerald-300">
        <h4 className="font-bold">Tip: Favicon Best Practices</h4>
        <p className="mt-2">For best compatibility, create a 16x16 or 32x32 pixel ICO file and name it <code>favicon.ico</code>. Place it in the root directory of your website and include the standard <code>&lt;link&gt;</code> tag in your HTML head.</p>
    </InfoBox>
  </>
);

export default HtmlFavicon;
