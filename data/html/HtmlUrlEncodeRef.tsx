import React from 'react';
import { SimpleTable, InfoBox } from '../components';

const HtmlUrlEncodeRef: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">URL encoding, or percent-encoding, converts characters into a format that can be safely transmitted over the Internet.</p>
    <p className="text-lg leading-relaxed mt-4">Only a specific set of characters (alphanumeric and a few special characters like `-`, `_`, `.`, `~`) are considered "URL-safe" and do not need to be encoded.</p>
    <p className="text-lg leading-relaxed mt-4">Other characters, especially reserved characters that have special meaning in a URL (like `?`, `&`, `/`) and non-ASCII characters, must be encoded.</p>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />
    
    <h2 className="text-3xl font-bold mt-10 mb-4">ASCII Control Characters</h2>
    <p className="text-lg leading-relaxed">Control characters are non-printable and must always be encoded.</p>
    <SimpleTable
        headers={['Character', 'Encoded Value']}
        rows={[
            ['NUL (null)', '%00'],
            ['TAB', '%09'],
            ['LF (line feed)', '%0A'],
            ['CR (carriage return)', '%0D'],
        ]}
    />
    
    <h2 className="text-3xl font-bold mt-10 mb-4">URL Reserved Characters</h2>
    <p className="text-lg leading-relaxed">These characters have special meanings within a URL and must be encoded if they are being used as part of a data value (e.g., in a query parameter).</p>
    <SimpleTable
        headers={['Character', 'Encoded Value']}
        rows={[
            ['  (space)', '%20 or +'],
            ['!', '%21'],
            ['"', '%22'],
            ['#', '%23'],
            ['$', '%24'],
            ['%', '%25'],
            ['&', '%26'],
            ["'", '%27'],
            ['(', '%28'],
            [')', '%29'],
            ['*', '%2A'],
            ['+', '%2B'],
            [',', '%2C'],
            ['/', '%2F'],
            [':', '%3A'],
            [';', '%3B'],
            ['<', '%3C'],
            ['=', '%3D'],
            ['>', '%3E'],
            ['?', '%3F'],
            ['@', '%40'],
            ['[', '%5B'],
            ['\\', '%5C'],
            [']', '%5D'],
            ['^', '%5E'],
            ['`', '%60'],
            ['{', '%7B'],
            ['|', '%7C'],
            ['}', '%7D'],
        ]}
    />
    
    <InfoBox className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-blue-800 dark:text-blue-300 mt-10">
        <p>Most of the time, browsers and server-side languages handle URL encoding automatically. This reference is useful when you need to manually construct URLs or debug encoding issues.</p>
    </InfoBox>
  </>
);

export default HtmlUrlEncodeRef;