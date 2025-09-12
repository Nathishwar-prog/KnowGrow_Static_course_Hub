import React from 'react';
import { SimpleTable, InfoBox, CodeBlock } from '../components';

const HtmlCharacterSets: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">A character set, or character encoding, is a set of characters that a computer can understand and display. It's a system that maps each character to a unique number.</p>
    <p className="text-lg leading-relaxed mt-4">Specifying the correct character set for your HTML document is crucial for the browser to display text correctly.</p>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />
    
    <h2 className="text-3xl font-bold mt-10 mb-4">UTF-8: The Web Standard</h2>
    <p className="text-lg leading-relaxed">The HTML5 specification encourages all web developers to use the UTF-8 character set. It is the most widely used character encoding on the Web.</p>
    <p className="text-lg leading-relaxed mt-4">UTF-8 supports all characters in the Unicode standard, which includes virtually all characters and symbols from all languages in the world, including emojis.</p>
    <p className="text-lg leading-relaxed mt-4">You should declare the character set using the <code>&lt;meta&gt;</code> tag inside the <code>&lt;head&gt;</code> element:</p>
    {/* FIX: Added missing 'language' prop. */}
    <CodeBlock language="html">{`<meta charset="UTF-8">`}</CodeBlock>

    <h2 className="text-3xl font-bold mt-10 mb-4">Common Character Sets</h2>
    <p className="text-lg leading-relaxed">While UTF-8 is the modern standard, you might encounter other character sets in older websites or specific contexts.</p>
    <SimpleTable
        headers={['Character Set', 'Description']}
        rows={[
            ['UTF-8', 'The standard for HTML5. Variable-width encoding for Unicode. Backwards compatible with ASCII.'],
            ['ISO-8859-1', 'The default for HTML 4. A single-byte encoding for the first 256 Unicode characters. Covers most Western European languages.'],
            ['Windows-1252', 'A superset of ISO-8859-1, common on older Windows systems.'],
            ['ASCII', 'The original 7-bit character set, containing 128 characters (English alphabet, numbers, basic punctuation).'],
        ]}
    />

    <InfoBox className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 text-emerald-800 dark:text-emerald-300 mt-10">
        <h4 className="font-bold">Always Use UTF-8</h4>
        <p className="mt-2">For any new web project, there is rarely a reason to use any character set other than UTF-8. It provides the most comprehensive character support and is the universally accepted standard.</p>
    </InfoBox>
  </>
);

export default HtmlCharacterSets;
