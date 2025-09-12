import React from 'react';
import { CodeBlock, InfoBox } from '../components';

const HtmlYoutube: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">The easiest way to play videos in HTML is to use videos from YouTube.</p>
    <p className="text-lg leading-relaxed mt-4">YouTube provides a simple way to embed videos in your website by using an <code>&lt;iframe&gt;</code> tag.</p>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">How to Embed a YouTube Video</h2>
    <p className="text-lg leading-relaxed">Follow these steps to embed a video from YouTube:</p>
    <ol className="list-decimal list-inside space-y-2 pl-4 text-lg mt-4">
        <li>Navigate to the YouTube video you want to embed.</li>
        <li>Below the video, click the <strong>Share</strong> button.</li>
        <li>In the popup that appears, click the <strong>Embed</strong> button.</li>
        <li>Copy the HTML code provided in the box.</li>
        <li>Paste this code into the HTML of your web page where you want the video to appear.</li>
    </ol>

    <h3 className="text-2xl font-bold mt-8 mb-3">Example Embed Code</h3>
    <p className="text-lg leading-relaxed">The code you copy will look something like this:</p>
    <CodeBlock language="html">{`<iframe 
  width="560" 
  height="315" 
  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen>
</iframe>`}</CodeBlock>

    <div className="p-4 my-4 bg-gray-100 dark:bg-gray-800/50 rounded-md text-center">
        <iframe 
            className="mx-auto rounded-md shadow-lg max-w-full"
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
        </iframe>
    </div>

    <h2 className="text-3xl font-bold mt-10 mb-4">Customizing the Player</h2>
    <p className="text-lg leading-relaxed">You can customize the YouTube player by adding parameters to the end of the video URL in the <code>src</code> attribute.</p>
    <ul className="list-disc list-inside space-y-2 pl-4 text-lg mt-4">
        <li><code>autoplay=1</code> - Autoplays the video (requires user interaction or `mute=1` in most browsers).</li>
        <li><code>loop=1</code> - Plays the video in a loop (requires the `playlist` parameter to be set to the video ID).</li>
        <li><code>controls=0</code> - Hides the player controls.</li>
        <li><code>mute=1</code> - Mutes the video by default.</li>
    </ul>
    <CodeBlock language="html">{`<!-- Example with autoplay and muted -->
<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1">
</iframe>`}</CodeBlock>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />
    
    <InfoBox className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 text-emerald-800 dark:text-emerald-300">
        <h4 className="font-bold">Responsive & Privacy-Enhanced Mode</h4>
        <p className="mt-2">To make the video responsive, you can use CSS to style the iframe. For privacy, you can use `youtube-nocookie.com` instead of `youtube.com` in the URL to prevent YouTube from setting cookies on a user's computer until they play the video.</p>
    </InfoBox>
  </>
);

export default HtmlYoutube;