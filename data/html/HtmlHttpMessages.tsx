import React from 'react';
import { SimpleTable, InfoBox } from '../components';

const HtmlHttpMessages: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">When a browser requests a web page from a server, the server sends back an HTTP status code before sending the page content. This code provides information about the status of the request.</p>
    <p className="text-lg leading-relaxed mt-4">These codes are grouped into five classes, indicated by the first digit.</p>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">HTTP Status Code Classes</h2>
    <ul className="list-disc list-inside space-y-2 pl-4 text-lg">
        <li><strong>1xx (Informational):</strong> The request was received, continuing process.</li>
        <li><strong>2xx (Successful):</strong> The request was successfully received, understood, and accepted.</li>
        <li><strong>3xx (Redirection):</strong> Further action needs to be taken in order to complete the request.</li>
        <li><strong>4xx (Client Error):</strong> The request contains bad syntax or cannot be fulfilled.</li>
        <li><strong>5xx (Server Error):</strong> The server failed to fulfill an apparently valid request.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-10 mb-4">Common HTTP Status Codes</h2>
    
    <h3 className="text-2xl font-bold mt-8 mb-3">2xx Success</h3>
    <SimpleTable
      headers={['Code', 'Message', 'Description']}
      rows={[
        ['200', 'OK', 'The request has succeeded.'],
        ['201', 'Created', 'The request has been fulfilled and resulted in a new resource being created.'],
      ]}
    />
    
    <h3 className="text-2xl font-bold mt-8 mb-3">3xx Redirection</h3>
    <SimpleTable
      headers={['Code', 'Message', 'Description']}
      rows={[
        ['301', 'Moved Permanently', 'The requested resource has been assigned a new permanent URI.'],
        ['302', 'Found', 'The requested resource resides temporarily under a different URI (temporary redirect).'],
      ]}
    />
    
    <h3 className="text-2xl font-bold mt-8 mb-3">4xx Client Error</h3>
    <SimpleTable
      headers={['Code', 'Message', 'Description']}
      rows={[
        ['400', 'Bad Request', 'The server could not understand the request due to invalid syntax.'],
        ['401', 'Unauthorized', 'The request requires user authentication.'],
        ['403', 'Forbidden', 'The server understood the request, but is refusing to authorize it.'],
        ['404', 'Not Found', 'The server has not found anything matching the Request-URI.'],
      ]}
    />
    
    <h3 className="text-2xl font-bold mt-8 mb-3">5xx Server Error</h3>
    <SimpleTable
      headers={['Code', 'Message', 'Description']}
      rows={[
        ['500', 'Internal Server Error', 'The server encountered an unexpected condition which prevented it from fulfilling the request.'],
        ['503', 'Service Unavailable', 'The server is currently unable to handle the request due to temporary overloading or maintenance.'],
      ]}
    />

    <InfoBox className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-blue-800 dark:text-blue-300 mt-10">
        <p>Understanding these codes is essential for web developers, especially when working with APIs or debugging server issues.</p>
    </InfoBox>
  </>
);

export default HtmlHttpMessages;