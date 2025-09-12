import React from 'react';
import { SimpleTable, CodeBlock, InfoBox } from '../components';

const HtmlLangCodes: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">The <code>lang</code> attribute in HTML is used to declare the language of the web page or a specific part of its content.</p>
    <p className="text-lg leading-relaxed mt-4">This is important for accessibility (screen readers can use the correct pronunciation) and for search engines (to correctly index the page for language-specific searches).</p>
    
    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">Declaring Language</h2>
    <p className="text-lg leading-relaxed">The language should be declared on the root <code>&lt;html&gt;</code> element.</p>
    {/* FIX: Added missing 'language' prop. */}
    <CodeBlock language="html">{`<html lang="en">`}</CodeBlock>

    <p className="text-lg leading-relaxed mt-4">The language codes are defined by the ISO 639-1 standard. You can also add a country code to specify a dialect.</p>
    {/* FIX: Added missing 'language' prop. */}
    <CodeBlock language="html">{`<!-- English (US) -->
<html lang="en-US">

<!-- English (Great Britain) -->
<html lang="en-GB">`}</CodeBlock>

    <h2 className="text-3xl font-bold mt-10 mb-4">Common Language Codes (ISO 639-1)</h2>
    <SimpleTable
      headers={['Language', 'Code']}
      rows={[
        ['English', 'en'],
        ['Spanish', 'es'],
        ['French', 'fr'],
        ['German', 'de'],
        ['Chinese (Mandarin)', 'zh'],
        ['Japanese', 'ja'],
        ['Russian', 'ru'],
        ['Arabic', 'ar'],
        ['Portuguese', 'pt'],
        ['Hindi', 'hi'],
        ['Italian', 'it'],
        ['Korean', 'ko'],
      ]}
    />

    <InfoBox className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-blue-800 dark:text-blue-300 mt-10">
      <p>This is just a small sample. A full list of language codes can be found by searching for "ISO 639-1 language codes".</p>
    </InfoBox>
  </>
);

export default HtmlLangCodes;
