import React from 'react';
import { SimpleTable, InfoBox } from '../components';

const HtmlHttpMethods: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">The Hypertext Transfer Protocol (HTTP) is designed to enable communications between clients and servers. It works as a request-response protocol between a client and server.</p>
    <p className="text-lg leading-relaxed mt-4">An HTTP method indicates the desired action to be performed for a given resource. They are sometimes referred to as "HTTP verbs".</p>
    
    <hr className="my-8 border-gray-200 dark:border-gray-600" />
    
    <h2 className="text-3xl font-bold mt-10 mb-4">Common HTTP Request Methods</h2>
    <SimpleTable
      headers={['Method', 'Description']}
      rows={[
        ['GET', 'Requests a representation of the specified resource. Requests using GET should only retrieve data and should have no other effect.'],
        ['POST', 'Submits an entity to the specified resource, often causing a change in state or side effects on the server. Used for submitting form data or uploading files.'],
        ['PUT', 'Replaces all current representations of the target resource with the request payload. Used for updating a resource.'],
        ['DELETE', 'Deletes the specified resource.'],
        ['HEAD', 'Asks for a response identical to that of a GET request, but without the response body. Useful for checking what a GET request will return before actually making one (e.g., checking for a resource\'s size or last-modified date).'],
        ['OPTIONS', 'Describes the communication options for the target resource. Often used to check which methods a server supports.'],
        ['PATCH', 'Applies partial modifications to a resource. Unlike PUT, it only needs to contain the changes to the resource, not the complete resource.'],
        ['CONNECT', 'Establishes a tunnel to the server identified by the target resource.'],
      ]}
    />

    <InfoBox className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-blue-800 dark:text-blue-300 mt-10">
      <h4 className="font-bold">Idempotent vs. Safe</h4>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li><strong>Safe</strong> methods are HTTP methods that do not modify resources. For instance, using GET or HEAD on a resource URL should NEVER change the resource. (GET, HEAD, OPTIONS are safe).</li>
        <li><strong>Idempotent</strong> methods are those that can be called many times without different outcomes. It would not matter if the method is called only once, or ten times over. The result should be the same. (GET, HEAD, PUT, DELETE are idempotent).</li>
      </ul>
    </InfoBox>
  </>
);

export default HtmlHttpMethods;