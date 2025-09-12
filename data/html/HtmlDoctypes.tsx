import React from 'react';
import { SimpleTable, CodeBlock, InfoBox } from '../components';

const HtmlDoctypes: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">All HTML documents must start with a <code>&lt;!DOCTYPE&gt;</code> declaration.</p>
    <p className="text-lg leading-relaxed mt-4">The declaration is not an HTML tag. It is an "information" to the browser about what document type to expect. It ensures that the web page is parsed and rendered correctly by the browser in "standards mode".</p>
    
    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">HTML5 Doctype</h2>
    <p className="text-lg leading-relaxed">The Doctype declaration for HTML5 is very simple and is the only one you need for modern web development.</p>
    <CodeBlock language="html">{`<!DOCTYPE html>`}</CodeBlock>

    <h2 className="text-3xl font-bold mt-10 mb-4">Older HTML and XHTML Doctypes</h2>
    <p className="text-lg leading-relaxed">In older versions of HTML (4 and below) and in XHTML, the doctype declaration was more complicated because it referred to a Document Type Definition (DTD). A DTD defines the legal building blocks of an XML or HTML document.</p>
    <p className="text-lg leading-relaxed mt-4">You may encounter these in legacy codebases, but they should not be used for new projects.</p>

    <SimpleTable
        headers={['Version', 'Doctype Declaration']}
        rows={[
            [
                'HTML 4.01 Strict',
                <code>&lt;!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt;</code>
            ],
            [
                'HTML 4.01 Transitional',
                <code>&lt;!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"&gt;</code>
            ],
            [
                'XHTML 1.0 Strict',
                <code>&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"&gt;</code>
            ],
            [
                'XHTML 1.0 Transitional',
                <code>&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"&gt;</code>
            ],
            [
                'XHTML 1.1',
                <code>&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd"&gt;</code>
            ],
        ]}
    />

    <InfoBox className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 text-emerald-800 dark:text-emerald-300 mt-10">
        <h4 className="font-bold">Summary</h4>
        <p className="mt-2">For any new website, always start your HTML file with <code>&lt;!DOCTYPE html&gt;</code>. It's simple, standard, and ensures your pages render as expected in all modern browsers.</p>
    </InfoBox>
  </>
);

export default HtmlDoctypes;