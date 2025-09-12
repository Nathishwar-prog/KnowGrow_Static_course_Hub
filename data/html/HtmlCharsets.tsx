import React from 'react';
import { CodeBlock, InfoBox, SimpleTable } from '../components';

const HtmlCharsets: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">To display an HTML page correctly, a web browser must know which character set to use. This is crucial for correctly interpreting and rendering text, especially with international languages and special symbols.</p>
    
    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">What is Character Encoding?</h2>
    <p className="text-lg leading-relaxed">Computers only understand numbers. Character encoding is a system that maps characters (like letters, numbers, and symbols) to numerical values that a computer can process.</p>
    
    <h3 className="text-2xl font-bold mt-8 mb-3">The Evolution of Character Sets</h3>
    <ul className="list-disc list-inside space-y-2 pl-4 text-lg mt-4">
        <li><strong>ASCII:</strong> The first character encoding standard. It defined 128 characters (English alphabet, numbers, basic symbols).</li>
        <li><strong>ANSI (Windows-1252):</strong> The original Windows character set. It was an extension of ASCII with 256 characters.</li>
        <li><strong>ISO-8859-1:</strong> The default character set for HTML 4. It was also an extension of ASCII.</li>
        <li><strong>UTF-8 (Unicode):</strong> The modern standard. UTF-8 covers almost all of the characters and symbols in the world.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-10 mb-4">The HTML5 Standard: UTF-8</h2>
    <p className="text-lg leading-relaxed">The HTML5 specification encourages web developers to use the UTF-8 character set, which is the default character encoding for HTML files. It can handle a vast range of characters and symbols, making it ideal for international websites.</p>
    
    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">How to Specify the Character Set</h2>
    <p className="text-lg leading-relaxed">To ensure your page is displayed correctly, you should always include a <code>&lt;meta&gt;</code> tag specifying the character encoding inside the <code>&lt;head&gt;</code> element.</p>
    <p className="text-lg leading-relaxed mt-4">For HTML5, this is very simple:</p>
    <CodeBlock language="html">{`<meta charset="UTF-8">`}</CodeBlock>

    <h3 className="text-2xl font-bold mt-8 mb-3">Example Document</h3>
    <CodeBlock language="html">{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Web Page</title>
</head>
<body>

  <p>This page uses UTF-8 to display characters like é, ö, and π.</p>
  <p>And even emojis like 👍 and 🚀!</p>

</body>
</html>`}</CodeBlock>

    <InfoBox className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 text-emerald-800 dark:text-emerald-300">
        <h4 className="font-bold">Important</h4>
        <p className="mt-2">The <code>&lt;meta charset="UTF-8"&gt;</code> tag should be one of the very first elements inside the <code>&lt;head&gt;</code> section. This allows the browser to know the encoding before it starts parsing the content.</p>
    </InfoBox>

  </>
);

export default HtmlCharsets;