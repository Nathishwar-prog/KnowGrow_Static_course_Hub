import React from 'react';
import { CodeBlock, InfoBox } from '../components';

const HtmlLists: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">HTML lists allow web developers to group a set of related items in lists.</p>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">Unordered HTML List</h2>
    <p className="text-lg leading-relaxed">An unordered list starts with the <code>&lt;ul&gt;</code> tag. Each list item starts with the <code>&lt;li&gt;</code> tag.</p>
    <p className="text-lg leading-relaxed mt-2">The list items will be marked with bullets (small black circles) by default.</p>
    <CodeBlock>{`<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>`}</CodeBlock>
    <div className="p-4 my-4 bg-gray-100 dark:bg-gray-800/50 rounded-md">
        <ul className="list-disc list-inside">
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
        </ul>
    </div>
    <p className="text-lg leading-relaxed mt-4">You can change the list item marker with the CSS <code>list-style-type</code> property:</p>
    <CodeBlock>{`<ul style="list-style-type:square;">
  ...
</ul>`}</CodeBlock>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />
    
    <h2 className="text-3xl font-bold mt-10 mb-4">Ordered HTML List</h2>
    <p className="text-lg leading-relaxed">An ordered list starts with the <code>&lt;ol&gt;</code> tag. Each list item starts with the <code>&lt;li&gt;</code> tag.</p>
    <p className="text-lg leading-relaxed mt-2">The list items will be marked with numbers by default.</p>
    <CodeBlock>{`<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>`}</CodeBlock>
    <div className="p-4 my-4 bg-gray-100 dark:bg-gray-800/50 rounded-md">
        <ol className="list-decimal list-inside">
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
        </ol>
    </div>
    <p className="text-lg leading-relaxed mt-4">The <code>type</code> attribute of the <code>&lt;ol&gt;</code> tag, can be used to specify the type of the list item marker:</p>
    <ul className="list-disc list-inside space-y-2 pl-4 text-lg mt-4">
        <li><code>type="1"</code> - The list items will be numbered with numbers (default)</li>
        <li><code>type="A"</code> - The list items will be numbered with uppercase letters</li>
        <li><code>type="a"</code> - The list items will be numbered with lowercase letters</li>
        <li><code>type="I"</code> - The list items will be numbered with uppercase roman numbers</li>
        <li><code>type="i"</code> - The list items will be numbered with lowercase roman numbers</li>
    </ul>
    
    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">HTML Description Lists</h2>
    <p className="text-lg leading-relaxed">HTML also supports description lists. A description list is a list of terms, with a description of each term.</p>
    <ul className="list-disc list-inside space-y-2 pl-4 text-lg mt-4">
        <li>The <code>&lt;dl&gt;</code> tag defines the description list.</li>
        <li>The <code>&lt;dt&gt;</code> tag defines the term (name).</li>
        <li>The <code>&lt;dd&gt;</code> tag describes each term.</li>
    </ul>
    <CodeBlock>{`<dl>
  <dt>Coffee</dt>
  <dd>- black hot drink</dd>
  <dt>Milk</dt>
  <dd>- white cold drink</dd>
</dl>`}</CodeBlock>
    <div className="p-4 my-4 bg-gray-100 dark:bg-gray-800/50 rounded-md">
        <dl>
            <dt className="font-bold">Coffee</dt>
            <dd className="pl-4">- black hot drink</dd>
            <dt className="font-bold mt-2">Milk</dt>
            <dd className="pl-4">- white cold drink</dd>
        </dl>
    </div>

    <h2 className="text-3xl font-bold mt-10 mb-4">Nested HTML Lists</h2>
    <p className="text-lg leading-relaxed">Lists can be nested (list inside a list):</p>
    <CodeBlock>{`<ul>
  <li>Coffee</li>
  <li>Tea
    <ul>
      <li>Black tea</li>
      <li>Green tea</li>
    </ul>
  </li>
  <li>Milk</li>
</ul>`}</CodeBlock>
    <div className="p-4 my-4 bg-gray-100 dark:bg-gray-800/50 rounded-md">
        <ul className="list-disc list-inside">
            <li>Coffee</li>
            <li>Tea
                <ul className="list-circle list-inside ml-8">
                    <li>Black tea</li>
                    <li>Green tea</li>
                </ul>
            </li>
            <li>Milk</li>
        </ul>
    </div>
  </>
);

export default HtmlLists;
