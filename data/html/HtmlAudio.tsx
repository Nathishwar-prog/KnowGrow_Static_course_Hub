import React from 'react';
import { CodeBlock, InfoBox } from '../components';

const HtmlAudio: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">The HTML <code>&lt;audio&gt;</code> element is used to embed sound content in documents. It may contain one or more audio sources, represented using the <code>src</code> attribute or the <code>&lt;source&gt;</code> element.</p>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">The &lt;audio&gt; Element</h2>
    <p className="text-lg leading-relaxed">To play an audio file in HTML, use the <code>&lt;audio&gt;</code> element.</p>
    <p className="text-lg leading-relaxed mt-4">The <code>controls</code> attribute adds audio controls, like play, pause, and volume.</p>
    <p className="text-lg leading-relaxed mt-4">The <code>&lt;source&gt;</code> element allows you to specify alternative audio files which the browser may choose from. The browser will use the first recognized format.</p>
    
    <CodeBlock language="html">{`<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>`}</CodeBlock>

    <div className="p-4 my-4 bg-gray-100 dark:bg-gray-800/50 rounded-md">
        <audio controls className="w-full">
            <source src="https://www.w3schools.com/html/horse.ogg" type="audio/ogg" />
            <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
    </div>

    <h2 className="text-3xl font-bold mt-10 mb-4">Autoplay Audio</h2>
    <p className="text-lg leading-relaxed">To start an audio file automatically, use the <code>autoplay</code> attribute. Similar to videos, most browsers prevent scripts from playing audio without user interaction. To make autoplay work, you may need to add the <code>muted</code> attribute if the browser's policy requires it.</p>
    <CodeBlock language="html">{`<audio controls autoplay muted>
  <source src="horse.mp3" type="audio/mpeg">
</audio>`}</CodeBlock>
    <InfoBox className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-blue-800 dark:text-blue-300">
        <p>Autoplay can be disruptive for users. Use it sparingly and consider letting the user control the playback.</p>
    </InfoBox>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">Common Audio Attributes</h2>
    <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 my-6">
        <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
                <th className="text-left font-bold py-2 px-4 border-b dark:border-gray-600">Attribute</th>
                <th className="text-left font-bold py-2 px-4 border-b dark:border-gray-600">Description</th>
            </tr>
        </thead>
        <tbody>
            <tr className="border-b dark:border-gray-700"><td className="py-2 px-4"><code>autoplay</code></td><td className="py-2 px-4">Specifies that the audio will start playing as soon as it is ready</td></tr>
            <tr className="border-b dark:border-gray-700"><td className="py-2 px-4"><code>controls</code></td><td className="py-2 px-4">Specifies that audio controls should be displayed</td></tr>
            <tr className="border-b dark:border-gray-700"><td className="py-2 px-4"><code>loop</code></td><td className="py-2 px-4">Specifies that the audio will start over again, every time it is finished</td></tr>
            <tr className="border-b dark:border-gray-700"><td className="py-2 px-4"><code>muted</code></td><td className="py-2 px-4">Specifies that the audio output should be muted</td></tr>
            <tr className="border-b dark:border-gray-700"><td className="py-2 px-4"><code>preload</code></td><td className="py-2 px-4">Specifies if and how the author thinks the audio should be loaded when the page loads</td></tr>
            <tr><td className="py-2 px-4"><code>src</code></td><td className="py-2 px-4">Specifies the URL of the audio file</td></tr>
        </tbody>
    </table>
  </>
);

export default HtmlAudio;