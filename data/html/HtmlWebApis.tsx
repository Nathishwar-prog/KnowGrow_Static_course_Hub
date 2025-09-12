import React from 'react';
import { InfoBox } from '../components';

const HtmlWebApis: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">A Web API is an application programming interface for the Web. They are built into your web browser and can be accessed using JavaScript.</p>
    <p className="text-lg leading-relaxed mt-4">These APIs extend the functionality of your web browser, allowing you to create more complex and powerful web applications, from accessing a user's location to running scripts in the background.</p>
    
    <hr className="my-8 border-gray-200 dark:border-gray-600" />
    
    <h2 className="text-3xl font-bold mt-10 mb-4">What is an API?</h2>
    <p className="text-lg leading-relaxed">API stands for <strong>Application Programming Interface</strong>. In the context of web development, a Web API is a set of tools, protocols, and definitions that allow your JavaScript code to interact with features of the browser or other web services.</p>

    <h2 className="text-3xl font-bold mt-10 mb-4">Common Web APIs</h2>
    <p className="text-lg leading-relaxed">Modern browsers come with a rich set of APIs that you can use in your applications. This section will cover some of the most common and useful ones:</p>
    
    <ul className="list-disc list-inside space-y-3 pl-4 text-lg mt-6">
      <li>
        <strong>Geolocation API:</strong> Used to get the geographical position of a user. It's a powerful feature for location-aware applications.
      </li>
      <li>
        <strong>Drag and Drop API:</strong> Provides a native way to implement drag-and-drop functionality in your web pages.
      </li>
      <li>
        <strong>Web Storage API:</strong> A modern way to store key/value data in the browser, offering more space and flexibility than cookies. It's split into `localStorage` and `sessionStorage`.
      </li>
      <li>
        <strong>Web Workers API:</strong> Allows you to run scripts in a background thread, separate from the main execution thread of your web application. This is great for performance-intensive tasks that shouldn't block the user interface.
      </li>
      <li>
        <strong>Server-Sent Events (SSE) API:</strong> Enables a web page to get automatic updates from a server. It's a simple, one-way communication channel from the server to the client.
      </li>
    </ul>

    <InfoBox className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-blue-800 dark:text-blue-300 mt-10">
      <h4 className="font-bold">Browser APIs vs. Third-Party APIs</h4>
      <p className="mt-2">The APIs covered in this section are built directly into the browser. There are also many third-party APIs available on the web (like the Google Maps API or the Twitter API) that allow you to access data and services from other companies.</p>
    </InfoBox>
  </>
);

export default HtmlWebApis;