import React from 'react';
import { SimpleTable } from '../components';

const HtmlSymbols: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">Many mathematical, technical, and currency symbols, are not present on a normal keyboard. To add these symbols to an HTML page, you can use an HTML entity name or number.</p>
    <p className="text-lg leading-relaxed mt-4">If a character does not have an entity name, you can use its entity number (a decimal or hexadecimal reference).</p>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />
    
    <h2 className="text-3xl font-bold mt-10 mb-4">Adding Symbols</h2>
    <p className="text-lg leading-relaxed">You can add a symbol by referencing its entity name or number. For example, the Euro symbol (€) can be added as <code>&amp;euro;</code> or <code>&amp;#8364;</code>.</p>
    
    <h3 className="text-2xl font-bold mt-8 mb-3">Some Mathematical Symbols</h3>
    <p className="text-lg leading-relaxed">Here are some common mathematical symbols supported by HTML:</p>
    <SimpleTable 
        headers={['Symbol', 'Entity Name', 'Entity Number']}
        rows={[
            ['∀', <code>&amp;forall;</code>, <code>&amp;#8704;</code>],
            ['∂', <code>&amp;part;</code>, <code>&amp;#8706;</code>],
            ['∃', <code>&amp;exist;</code>, <code>&amp;#8707;</code>],
            ['∅', <code>&amp;empty;</code>, <code>&amp;#8709;</code>],
            ['∇', <code>&amp;nabla;</code>, <code>&amp;#8711;</code>],
            ['∈', <code>&amp;isin;</code>, <code>&amp;#8712;</code>],
            ['∉', <code>&amp;notin;</code>, <code>&amp;#8713;</code>],
            ['∋', <code>&amp;ni;</code>, <code>&amp;#8715;</code>],
            ['∏', <code>&amp;prod;</code>, <code>&amp;#8719;</code>],
            ['∑', <code>&amp;sum;</code>, <code>&amp;#8721;</code>],
        ]}
    />
    
    <h3 className="text-2xl font-bold mt-8 mb-3">Some Greek Letters</h3>
    <p className="text-lg leading-relaxed">Here are some common Greek letters supported by HTML:</p>
    <SimpleTable 
        headers={['Symbol', 'Entity Name', 'Entity Number']}
        rows={[
            ['Α', <code>&amp;Alpha;</code>, <code>&amp;#913;</code>],
            ['Β', <code>&amp;Beta;</code>, <code>&amp;#914;</code>],
            ['Γ', <code>&amp;Gamma;</code>, <code>&amp;#915;</code>],
            ['Δ', <code>&amp;Delta;</code>, <code>&amp;#916;</code>],
            ['Ε', <code>&amp;Epsilon;</code>, <code>&amp;#917;</code>],
            ['Ζ', <code>&amp;Zeta;</code>, <code>&amp;#918;</code>],
        ]}
    />

    <h3 className="text-2xl font-bold mt-8 mb-3">Other Supported Symbols</h3>
    <p className="text-lg leading-relaxed">Many other symbols for currencies, arrows, shapes, and more are also supported.</p>
    <SimpleTable 
        headers={['Symbol', 'Entity Name', 'Entity Number']}
        rows={[
            ['©', <code>&amp;copy;</code>, <code>&amp;#169;</code>],
            ['®', <code>&amp;reg;</code>, <code>&amp;#174;</code>],
            ['€', <code>&amp;euro;</code>, <code>&amp;#8364;</code>],
            ['™', <code>&amp;trade;</code>, <code>&amp;#8482;</code>],
            ['←', <code>&amp;larr;</code>, <code>&amp;#8592;</code>],
            ['↑', <code>&amp;uarr;</code>, <code>&amp;#8593;</code>],
            ['→', <code>&amp;rarr;</code>, <code>&amp;#8594;</code>],
            ['↓', <code>&amp;darr;</code>, <code>&amp;#8595;</code>],
            ['♠', <code>&amp;spades;</code>, <code>&amp;#9824;</code>],
            ['♣', <code>&amp;clubs;</code>, <code>&amp;#9827;</code>],
            ['♥', <code>&amp;hearts;</code>, <code>&amp;#9829;</code>],
            ['♦', <code>&amp;diams;</code>, <code>&amp;#9830;</code>],
        ]}
    />
  </>
);

export default HtmlSymbols;
