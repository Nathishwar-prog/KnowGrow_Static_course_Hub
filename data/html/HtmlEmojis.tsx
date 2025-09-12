import React from 'react';
import { CodeBlock, InfoBox, SimpleTable } from '../components';

const HtmlEmojis: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">Emojis are characters from the UTF-8 character set. Emojis look like images, or icons, but they are not.</p>
    <p className="text-lg text-center my-6 text-6xl">
        <span>&#128512;</span>
        <span>&#128516;</span>
        <span>&#128525;</span>
        <span>&#128151;</span>
    </p>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">What are Emojis?</h2>
    <p className="text-lg leading-relaxed">Emojis are characters from the UTF-8 character set that are supported on nearly all operating systems. They are letters, numbers, and symbols, just like any other character you can type.</p>

    <h2 className="text-3xl font-bold mt-10 mb-4">The charset Attribute</h2>
    <p className="text-lg leading-relaxed">To display an HTML page correctly, a web browser must know the character set used in the page. This is specified in the <code>&lt;meta&gt;</code> tag inside the <code>&lt;head&gt;</code> section.</p>
    <p className="text-lg leading-relaxed mt-4">For emojis to work correctly, your page's character encoding must be set to UTF-8, which is the standard for HTML5.</p>
    <CodeBlock>{`<meta charset="UTF-8">`}</CodeBlock>

    <h2 className="text-3xl font-bold mt-10 mb-4">Using Emojis in HTML</h2>
    <p className="text-lg leading-relaxed">Since emojis are characters, they can be used almost anywhere you can use text in HTML: inside paragraph tags, headings, buttons, etc.</p>
    <p className="text-lg leading-relaxed mt-4">You can either copy and paste the emoji directly into your HTML code, or you can use its decimal or hexadecimal entity number.</p>
    
    <CodeBlock>{`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Emojis Example</title>
</head>
<body>

  <h1>My First Emoji &#128512;</h1>

  <p>This is a paragraph with an emoji: &#x1F600;</p>

</body>
</html>`}</CodeBlock>
    
    <SimpleTable 
        headers={['Emoji', 'Decimal Number', 'Hexadecimal Number']}
        rows={[
            ['😀', <code>&amp;#128512;</code>, <code>&amp;#x1F600;</code>],
            ['😍', <code>&amp;#128525;</code>, <code>&amp;#x1F60D;</code>],
            ['❤️', <code>&amp;#10084;</code>, <code>&amp;#x2764;</code>],
            ['👍', <code>&amp;#128077;</code>, <code>&amp;#x1F44D;</code>],
            ['🚀', <code>&amp;#128640;</code>, <code>&amp;#x1F680;</code>],
        ]}
    />
    
    <InfoBox className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-blue-800 dark:text-blue-300">
        <h4 className="font-bold">Emoji Support</h4>
        <p className="mt-2">The appearance of an emoji can vary slightly between different operating systems and browsers, as each platform uses its own emoji font. However, the meaning remains the same.</p>
    </InfoBox>
  </>
);

export default HtmlEmojis;