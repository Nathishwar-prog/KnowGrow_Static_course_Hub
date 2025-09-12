import React from 'react';
import { CodeBlock, InfoBox } from '../components';

const HtmlImages: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">Images can improve the design and the appearance of a web page.</p>
    <p className="text-lg leading-relaxed mt-4">This chapter will teach you how to use images in your HTML.</p>

    <div className="my-6 p-4 bg-gray-100 dark:bg-gray-800/50 rounded-lg text-center">
        <img src="https://www.w3schools.com/html/img_chania.jpg" alt="Flowers in Chania" className="mx-auto rounded-md shadow-lg" />
        <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">Example: A beautiful picture from Chania, Crete.</p>
    </div>
    
    <hr className="my-8 border-gray-200 dark:border-gray-600" />
    
    <h2 className="text-3xl font-bold mt-10 mb-4">HTML Images Syntax</h2>
    <p className="text-lg leading-relaxed">The HTML <code>&lt;img&gt;</code> tag is used to embed an image in a web page. The <code>&lt;img&gt;</code> tag is an empty tag, meaning it contains attributes only, and does not have a closing tag.</p>
    <CodeBlock>{`<img src="url" alt="alternatetext">`}</CodeBlock>

    <h3 className="text-2xl font-bold mt-8 mb-3">The src Attribute</h3>
    <p className="text-lg leading-relaxed">The required <code>src</code> attribute specifies the path (URL) to the image. When a web page loads, it is the browser, at that moment, that gets the image from a web server and inserts it into the page.</p>
    
    <h3 className="text-2xl font-bold mt-8 mb-3">The alt Attribute</h3>
    <p className="text-lg leading-relaxed">The required <code>alt</code> attribute provides an alternate text for an image, if the user for some reason cannot view it (because of slow connection, an error in the src attribute, or if the user uses a screen reader).</p>
    <p className="text-lg leading-relaxed mt-2">The value of the <code>alt</code> attribute should describe the image:</p>
    <CodeBlock>{`<img src="img_chania.jpg" alt="Flowers in Chania">`}</CodeBlock>
    <InfoBox className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 text-yellow-800 dark:text-yellow-300">
        <h4 className="font-bold">Accessibility Tip</h4>
        <p className="mt-2">The <code>alt</code> attribute is crucial for web accessibility. Screen readers read the alt text aloud to visually impaired users, so it's important to write descriptive and meaningful alt text.</p>
    </InfoBox>
    
    <h2 className="text-3xl font-bold mt-10 mb-4">Image Size - Width and Height</h2>
    <p className="text-lg leading-relaxed">You can use the <code>width</code> and <code>height</code> attributes to specify the size of an image.</p>
    <CodeBlock>{`<img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">`}</CodeBlock>
    <div className="my-6 p-4 bg-gray-100 dark:bg-gray-800/50 rounded-lg text-center">
        <img src="https://www.w3schools.com/html/img_girl.jpg" alt="Girl in a jacket" width="250" height="300" className="mx-auto rounded-md shadow-lg" />
    </div>
    <InfoBox className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-blue-800 dark:text-blue-300">
        <h4 className="font-bold">Performance Note</h4>
        <p className="mt-2">Always specify the <code>width</code> and <code>height</code> of an image. If these attributes are not set, the web page might flicker while the image loads, because the browser doesn't know how much space to reserve for the image.</p>
    </InfoBox>
    <p className="text-lg leading-relaxed mt-4">Alternatively, you can use the <code>style</code> attribute to specify the width and height. Using the style attribute will override any width and height attributes.</p>
    <CodeBlock>{`<img src="img_girl.jpg" alt="Girl in a jacket" style="width:500px;height:600px;">`}</CodeBlock>
    
    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">Image Paths</h2>
    <p className="text-lg leading-relaxed">The <code>src</code> attribute can point to an image on another server (an absolute URL) or to an image in your own website's folder structure (a relative URL).</p>
    
    <h3 className="text-2xl font-bold mt-6 mb-3">Absolute URL</h3>
    <p className="text-lg leading-relaxed">An absolute URL is the full web address for an image. This is used when you are linking to an image hosted on another website.</p>
    <CodeBlock>{`<img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools.com">`}</CodeBlock>
    <InfoBox className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 text-red-800 dark:text-red-300">
      <p><strong>Warning:</strong> External images might be under copyright. You may be violating copyright laws by using an image you do not own. In addition, you cannot control external images; they can suddenly be removed or changed.</p>
    </InfoBox>

    <h3 className="text-2xl font-bold mt-6 mb-3">Relative URL</h3>
    <p className="text-lg leading-relaxed">A relative URL points to an image within your website. Here, the URL does not include the domain name. If the URL starts without a slash, it will be relative to the current page.</p>
    <CodeBlock>{`<!-- Image is in the same folder as the current page -->
<img src="picture.jpg" alt="My Picture">

<!-- Image is in an 'images' folder in the current folder -->
<img src="images/picture.jpg" alt="My Picture">`}</CodeBlock>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />
    
    <h2 className="text-3xl font-bold mt-10 mb-4">Animated Images</h2>
    <p className="text-lg leading-relaxed">HTML allows animated GIFs:</p>
    <CodeBlock>{`<img src="programming.gif" alt="Computer Man" style="width:48px;height:48px;">`}</CodeBlock>
    <div className="my-6 p-4 bg-gray-100 dark:bg-gray-800/50 rounded-lg text-center">
        <img src="https://www.w3schools.com/html/programming.gif" alt="Computer Man" style={{width:'48px', height:'48px'}} className="mx-auto" />
    </div>

    <h2 className="text-3xl font-bold mt-10 mb-4">Image as a Link</h2>
    <p className="text-lg leading-relaxed">To use an image as a link, put the <code>&lt;img&gt;</code> tag inside the <code>&lt;a&gt;</code> tag:</p>
    <CodeBlock>{`<a href="default.asp">
  <img src="smiley.gif" alt="HTML tutorial" style="width:42px;height:42px;">
</a>`}</CodeBlock>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">Chapter Summary</h2>
    <ul className="list-disc list-inside space-y-2 pl-4 text-lg">
        <li>Use the <code>&lt;img&gt;</code> element to embed an image</li>
        <li>Use the <code>src</code> attribute to specify the path to the image</li>
        <li>Use the <code>alt</code> attribute to specify an alternate text for the image</li>
        <li>Use the <code>width</code> and <code>height</code> attributes to specify the size of the image</li>
        <li>Use the CSS <code>width</code> and <code>height</code> properties to style the image size</li>
        <li>Put the <code>&lt;img&gt;</code> tag inside an <code>&lt;a&gt;</code> tag to use an image as a link</li>
    </ul>
  </>
);

export default HtmlImages;