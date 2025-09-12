import React from 'react';
import { CodeBlock, InfoBox } from '../components';

const HtmlTables: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">HTML tables allow web developers to arrange data into rows and columns.</p>
    
    <div className="overflow-x-auto my-6">
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700">
            <thead>
                <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="text-left font-bold py-2 px-4 border dark:border-gray-600">Company</th>
                    <th className="text-left font-bold py-2 px-4 border dark:border-gray-600">Contact</th>
                    <th className="text-left font-bold py-2 px-4 border dark:border-gray-600">Country</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-b dark:border-gray-700">
                    <td className="py-2 px-4 border dark:border-gray-600">Alfreds Futterkiste</td>
                    <td className="py-2 px-4 border dark:border-gray-600">Maria Anders</td>
                    <td className="py-2 px-4 border dark:border-gray-600">Germany</td>
                </tr>
                <tr className="border-b dark:border-gray-700">
                    <td className="py-2 px-4 border dark:border-gray-600">Centro comercial Moctezuma</td>
                    <td className="py-2 px-4 border dark:border-gray-600">Francisco Chang</td>
                    <td className="py-2 px-4 border dark:border-gray-600">Mexico</td>
                </tr>
                 <tr>
                    <td className="py-2 px-4 border dark:border-gray-600">Ernst Handel</td>
                    <td className="py-2 px-4 border dark:border-gray-600">Roland Mendel</td>
                    <td className="py-2 px-4 border dark:border-gray-600">Austria</td>
                </tr>
            </tbody>
        </table>
    </div>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />
    
    <h2 className="text-3xl font-bold mt-10 mb-4">Defining an HTML Table</h2>
    <p className="text-lg leading-relaxed">A table in HTML consists of table cells inside rows.</p>
    <ul className="list-disc list-inside space-y-2 pl-4 text-lg mt-4">
        <li><code>&lt;table&gt;</code> - The wrapper element for the entire table.</li>
        <li><code>&lt;tr&gt;</code> - Defines a table row.</li>
        <li><code>&lt;td&gt;</code> - Defines a table data cell.</li>
        <li><code>&lt;th&gt;</code> - Defines a table header cell. By default, text in <code>&lt;th&gt;</code> elements are bold and centered.</li>
    </ul>

    <CodeBlock>{`<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>`}</CodeBlock>

    <h2 className="text-3xl font-bold mt-10 mb-4">HTML Table Borders</h2>
    <p className="text-lg leading-relaxed">By default, HTML tables have no borders. To add borders, you need to use CSS.</p>
    <CodeBlock>{`<style>
table, th, td {
  border: 1px solid black;
}
</style>`}</CodeBlock>

    <p className="text-lg leading-relaxed mt-4">To collapse the borders into a single border, use the CSS <code>border-collapse</code> property.</p>
    <CodeBlock>{`<style>
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
</style>`}</CodeBlock>

    <h2 className="text-3xl font-bold mt-10 mb-4">Cell Padding</h2>
    <p className="text-lg leading-relaxed">To add space between the content and the border in a table cell, use the CSS <code>padding</code> property.</p>
    <CodeBlock>{`<style>
th, td {
  padding: 15px;
}
</style>`}</CodeBlock>
    
    <h2 className="text-3xl font-bold mt-10 mb-4">Colspan and Rowspan</h2>
    <p className="text-lg leading-relaxed">You can make a cell span over multiple columns or rows.</p>
    <ul className="list-disc list-inside space-y-2 pl-4 text-lg mt-4">
        <li><code>colspan</code> - Makes a cell span multiple columns.</li>
        <li><code>rowspan</code> - Makes a cell span multiple rows.</li>
    </ul>
    <CodeBlock>{`<table>
  <tr>
    <th>Name</th>
    <th colspan="2">Telephone</th>
  </tr>
  <tr>
    <td>Bill Gates</td>
    <td>55577854</td>
    <td>55577855</td>
  </tr>
</table>`}</CodeBlock>

    <h2 className="text-3xl font-bold mt-10 mb-4">Table Structure: thead, tbody, tfoot</h2>
    <p className="text-lg leading-relaxed">For more complex tables, you can use <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, and <code>&lt;tfoot&gt;</code> to group the header, body, and footer content of a table. This helps with semantics and can be useful for styling or for scrolling table bodies independently of the header/footer.</p>
    <CodeBlock>{`<table>
  <thead>
    <tr>
      <th>Month</th>
      <th>Savings</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$100</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$80</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Sum</td>
      <td>$180</td>
    </tr>
  </tfoot>
</table>`}</CodeBlock>
    <InfoBox className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 text-yellow-800 dark:text-yellow-300">
        <h4 className="font-bold">Accessibility Note</h4>
        <p>Tables should be used for displaying tabular data, not for page layout. Using tables for layout can create significant accessibility issues for screen reader users. Use CSS for layout instead.</p>
    </InfoBox>
  </>
);

export default HtmlTables;
