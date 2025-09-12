import React from 'react';
// FIX: Added SimpleTable to imports to render the position object properties.
import { CodeBlock, InfoBox, SimpleTable } from '../components';

const HtmlGeolocation: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">The HTML Geolocation API is used to get the geographical position of a user.</p>
    <p className="text-lg leading-relaxed mt-4">Since this can compromise privacy, the position is not available unless the user approves it.</p>
    
    <InfoBox className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 text-yellow-800 dark:text-yellow-300">
        <p>Geolocation is most accurate for devices with GPS, like smartphones.</p>
    </InfoBox>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />
    
    <h2 className="text-3xl font-bold mt-10 mb-4">Locate the User's Position</h2>
    <p className="text-lg leading-relaxed">The <code>navigator.geolocation.getCurrentPosition()</code> method is used to get the user's current position.</p>
    <p className="text-lg leading-relaxed mt-4">It takes a callback function as its first parameter. This function is executed when the position is successfully retrieved.</p>
    
    <h3 className="text-2xl font-bold mt-8 mb-3">Example</h3>
    <p className="text-lg leading-relaxed">Here is a basic example of how to get a user's location. The result is displayed in a paragraph with `id="demo"`.</p>
    <CodeBlock language="html">{`<!DOCTYPE html>
<html>
<body>

<p>Click the button to get your coordinates.</p>

<button onclick="getLocation()">Try It</button>

<p id="demo"></p>

<script>
const x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}
</script>

</body>
</html>`}</CodeBlock>

    <h2 className="text-3xl font-bold mt-10 mb-4">Handling Errors and Rejections</h2>
    <p className="text-lg leading-relaxed">The second parameter of the <code>getCurrentPosition()</code> method is used to handle errors. It specifies a function to run if it fails to get the user's location.</p>
    <CodeBlock language="javascript">{`function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred."
      break;
  }
}

// Call with error handler
navigator.geolocation.getCurrentPosition(showPosition, showError);`}</CodeBlock>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />
    
    <h2 className="text-3xl font-bold mt-10 mb-4">The Position Object</h2>
    {/* FIX: Completed the explanation of the Position object and removed extraneous text. */}
    <p className="text-lg leading-relaxed">If successful, the Geolocation API returns a <code>Position</code> object. This object contains a <code>coords</code> object with the location data, and a <code>timestamp</code> when the location was retrieved.</p>
    <SimpleTable
      headers={['Property', 'Description']}
      rows={[
        ['coords.latitude', 'The latitude as a decimal number'],
        ['coords.longitude', 'The longitude as a decimal number'],
        ['coords.accuracy', 'The accuracy of the position in meters'],
        ['coords.altitude', 'The altitude in meters above the mean sea level (if available)'],
        ['coords.altitudeAccuracy', 'The altitude accuracy in meters (if available)'],
        ['coords.heading', 'The heading as degrees from north (if available)'],
        ['coords.speed', 'The speed in meters per second (if available)'],
        ['timestamp', 'The date/time of the response'],
      ]}
    />
  </>
);

export default HtmlGeolocation;
