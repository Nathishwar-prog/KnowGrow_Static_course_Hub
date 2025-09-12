import React from 'react';
import { SimpleTable, InfoBox } from '../components';

const HtmlAudioVideoRef: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">This page provides a reference for the attributes, methods, and events associated with the HTML <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code> elements.</p>
    <p className="text-lg leading-relaxed mt-4">These elements share a common API for controlling media playback.</p>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">Media Element Attributes</h2>
    <SimpleTable
      headers={['Attribute', 'Description']}
      rows={[
        ['autoplay', 'Starts playing the media automatically as soon as it can.'],
        ['controls', 'Displays the default browser controls for playback.'],
        ['crossorigin', 'Configures the CORS requests for the media element.'],
        ['loop', 'Causes the media to automatically seek back to the start upon reaching the end.'],
        ['muted', 'Sets the audio volume to mute by default.'],
        ['preload', 'Hints to the browser how much of the file to download when the page loads. (auto, metadata, none)'],
        ['src', 'The URL of the media file to be embedded.'],
        ['poster', '(Video only) A URL for an image to be shown before the video plays.'],
        ['width', '(Video only) The width of the video\'s display area, in CSS pixels.'],
        ['height', '(Video only) The height of the video\'s display area, in CSS pixels.'],
      ]}
    />

    <h2 className="text-3xl font-bold mt-10 mb-4">Media Element Methods</h2>
    <p className="text-lg leading-relaxed">These methods are accessed via JavaScript to control playback. Example: `myVideo.play();`</p>
    <SimpleTable
      headers={['Method', 'Description']}
      rows={[
        ['play()', 'Starts media playback.'],
        ['pause()', 'Pauses media playback.'],
        ['load()', 'Resets the media element and restarts the loading process.'],
        ['canPlayType(type)', 'Checks if the browser can play the specified media type.'],
      ]}
    />
    
    <h2 className="text-3xl font-bold mt-10 mb-4">Media Element Properties</h2>
    <p className="text-lg leading-relaxed">These properties are accessed via JavaScript to get information about the media. Example: `let duration = myVideo.duration;`</p>
    <SimpleTable
      headers={['Property', 'Description']}
      rows={[
        ['currentTime', 'Gets or sets the current playback time in seconds.'],
        ['duration', 'Returns the length of the media in seconds.'],
        ['paused', 'Returns true if the media is paused, otherwise false.'],
        ['ended', 'Returns true if the media has finished playing, otherwise false.'],
        ['volume', 'Gets or sets the volume of the audio (0.0 to 1.0).'],
        ['muted', 'Gets or sets whether the audio is muted.'],
      ]}
    />

    <h2 className="text-3xl font-bold mt-10 mb-4">Media Element Events</h2>
    <p className="text-lg leading-relaxed">These events can be listened for to react to changes in the media's state.</p>
    <SimpleTable
      headers={['Event', 'Description']}
      rows={[
        ['onplay', 'Fires when the media has started or is no longer paused.'],
        ['onpause', 'Fires when the media has been paused.'],
        ['onended', 'Fires when the media has finished playing.'],
        ['ontimeupdate', 'Fires when the current playback position has changed.'],
        ['onvolumechange', 'Fires when the volume has changed.'],
        ['oncanplay', 'Fires when the browser can start playing the media.'],
        ['onerror', 'Fires when an error occurs while fetching the media data.'],
      ]}
    />
  </>
);

export default HtmlAudioVideoRef;