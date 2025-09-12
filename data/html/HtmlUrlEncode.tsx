import React from 'react';
import { CodeBlock, SimpleTable, InfoBox } from '../components';

const HtmlUrlEncode: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">URL encoding, also known as percent-encoding, is a mechanism for encoding information in a Uniform Resource Identifier (URI) under certain circumstances.</p>
    <p className="text-lg leading-relaxed mt-4">This is necessary because URLs can only be sent over the internet using the ASCII character-set. Since URLs often contain characters outside the ASCII set, the URL has to be converted into a valid ASCII format.</p>
    
    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">How URL Encoding Works</h2>
    <p className="text-lg leading-relaxed">URL encoding replaces unsafe ASCII characters with a "%" followed by two hexadecimal digits that represent the character's value.</p>
    <p className="text-lg leading-relaxed mt-4">For example:</p>
    <ul className="list-disc list-inside space-y-2 pl-4 text-lg mt-4">
        <li>A space character (" ") is encoded as <code>%20</code> or a plus sign (<code>+</code>).</li>
        <li>A forward slash ("/") is encoded as <code>%2F</code>.</li>
        <li>A question mark ("?") is encoded as <code>%3F</code>.</li>
    </ul>

    <CodeBlock language="html">{`<!-- A URL with a space and a special character -->
<a href="my page.php?name=Ståle">Link</a>

<!-- The encoded version -->
<a href="my%20page.php?name=St%C3%A5le">Link</a>`}</CodeBlock>
    
    <InfoBox className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-blue-800 dark:text-blue-300">
        <p>You will often see URL encoding in the address bar of your browser after submitting a form or performing a search. Luckily, you usually don't have to do this manually. Browsers and web servers will typically handle the encoding and decoding for you.</p>
    </InfoBox>
    
    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">Common URL Encoding Characters</h2>
    <SimpleTable
        headers={['Character', 'Encoded Value']}
        rows={[
            [' ', <code>%20</code>],
            ['!', <code>%21</code>],
            ['#', <code>%23</code>],
            ['$', <code>%24</code>],
            ['%', <code>%25</code>],
            ['&', <code>%26</code>],
            ["'", <code>%27</code>],
            ['(', <code>%28</code>],
            [')', <code>%29</code>],
            ['*', <code>%2A</code>],
            ['+', <code>%2B</code>],
            [',', <code>%2C</code>],
            ['/', <code>%2F</code>],
            [':', <code>%3A</code>],
            [';', <code>%3B</code>],
            ['=', <code>%3D</code>],
            ['?', <code>%3F</code>],
            ['@', <code>%40</code>],
            ['[', <code>%5B</code>],
            [']', <code>%5D</code>],
        ]}
    />
  </>
);

export default HtmlUrlEncode;