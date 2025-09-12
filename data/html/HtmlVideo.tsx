import React from 'react';
import { CodeBlock, InfoBox } from '../components';

const HtmlVideo: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">The HTML <code>&lt;video&gt;</code> element is used to embed video content in a document, such as a movie clip or other video streams.</p>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">The &lt;video&gt; Element</h2>
    <p className="text-lg leading-relaxed">To show a video in HTML, use the <code>&lt;video&gt;</code> element. You need to specify the video source and it's recommended to set the width and height.</p>
    <CodeBlock language="html">{`<video width="320" height="240" src="movie.mp4"></video>`}</CodeBlock>
    
    <h3 className="text-2xl font-bold mt-8 mb-3">The `controls` Attribute</h3>
    <p className="text-lg leading-relaxed">The <code>controls</code> attribute adds video controls, like play, pause, and volume. It is a boolean attribute; its presence means it is active.</p>
    <CodeBlock language="html">{`<video width="400" height="300" controls>
  <source src="movie.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>`}</CodeBlock>

    <div className="p-4 my-4 bg-gray-100 dark:bg-gray-800/50 rounded-md text-center">
        <video width="400" height="300" controls className="mx-auto rounded-md">
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>

    <h2 className="text-3xl font-bold mt-10 mb-4">Using Multiple &lt;source&gt; Elements</h2>
    <p className="text-lg leading-relaxed">The <code>&lt;source&gt;</code> element allows you to specify alternative video files which the browser may choose from, based on its media type or codec support.</p>
    <p className="text-lg leading-relaxed mt-4">The browser will use the first recognized format. This is the best way to ensure your video works on all modern browsers.</p>
    <CodeBlock language="html">{`<video width="400" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  <source src="movie.webm" type="video/webm">
  Your browser does not support the video tag.
</video>`}</CodeBlock>

    <h2 className="text-3xl font-bold mt-10 mb-4">Autoplay Videos</h2>
    <p className="text-lg leading-relaxed">To start a video automatically, use the <code>autoplay</code> attribute. However, most modern browsers do not allow autoplay with sound. To make autoplay work, you must also add the <code>muted</code> attribute.</p>
    <CodeBlock language="html">{`<video width="400" controls autoplay muted>
  <source src="movie.mp4" type="video/mp4">
</video>`}</CodeBlock>
    
    <InfoBox className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-blue-800 dark:text-blue-300">
        <p>Chromium browsers do not allow autoplay in most cases. However, muted autoplay is always allowed.</p>
    </InfoBox>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />
    
    <h2 className="text-3xl font-bold mt-10 mb-4">Common Video Attributes</h2>
    <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 my-6">
        <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
                <th className="text-left font-bold py-2 px-4 border-b dark:border-gray-600">Attribute</th>
                <th className="text-left font-bold py-2 px-4 border-b dark:border-gray-600">Description</th>
            </tr>
        </thead>
        <tbody>
            <tr className="border-b dark:border-gray-700"><td className="py-2 px-4"><code>autoplay</code></td><td className="py-2 px-4">Specifies that the video will start playing as soon as it is ready</td></tr>
            <tr className="border-b dark:border-gray-700"><td className="py-2 px-4"><code>controls</code></td><td className="py-2 px-4">Specifies that video controls should be displayed</td></tr>
            <tr className="border-b dark:border-gray-700"><td className="py-2 px-4"><code>height</code></td><td className="py-2 px-4">Sets the height of the video player</td></tr>
            <tr className="border-b dark:border-gray-700"><td className="py-2 px-4"><code>loop</code></td><td className="py-2 px-4">Specifies that the video will start over again, every time it is finished</td></tr>
            <tr className="border-b dark:border-gray-700"><td className="py-2 px-4"><code>muted</code></td><td className="py-2 px-4">Specifies that the audio output of the video should be muted</td></tr>
            <tr className="border-b dark:border-gray-700"><td className="py-2 px-4"><code>poster</code></td><td className="py-2 px-4">Specifies an image to be shown while the video is downloading, or until the user hits the play button</td></tr>
            <tr className="border-b dark:border-gray-700"><td className="py-2 px-4"><code>preload</code></td><td className="py-2 px-4">Specifies if and how the author thinks the video should be loaded when the page loads</td></tr>
            <tr className="border-b dark:border-gray-700"><td className="py-2 px-4"><code>src</code></td><td className="py-2 px-4">Specifies the URL of the video file</td></tr>
            <tr><td className="py-2 px-4"><code>width</code></td><td className="py-2 px-4">Sets the width of the video player</td></tr>
        </tbody>
    </table>
  </>
);

export default HtmlVideo;