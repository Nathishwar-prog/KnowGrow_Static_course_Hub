import React from 'react';
import { InfoBox, SimpleTable } from '../components';

const HtmlMedia: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">Multimedia on the web is sound, music, videos, movies, and animations that you can add to your web pages.</p>
    <p className="text-lg leading-relaxed mt-4">HTML provides powerful elements like <code>&lt;video&gt;</code> and <code>&lt;audio&gt;</code> to embed media directly into your documents without needing plug-ins.</p>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">What is Multimedia?</h2>
    <p className="text-lg leading-relaxed">Multimedia comes in many different formats. It can be almost anything you can hear or see, like images, music, sound, videos, records, films, animations, and more.</p>
    <p className="text-lg leading-relaxed mt-4">Web pages often contain multimedia elements of different types and formats.</p>

    <h2 className="text-3xl font-bold mt-10 mb-4">Common Media Formats</h2>
    <p className="text-lg leading-relaxed">The format of a media file is known as its container format. The most common video formats on the web are MPEG-4 (MP4), WebM, and Ogg. For audio, the most common are MP3, WAV, and Ogg.</p>

    <h3 className="text-2xl font-bold mt-8 mb-3">Common Video Formats</h3>
    <SimpleTable
      headers={['Format', 'File Extension', 'Description']}
      rows={[
        ['MPEG-4', '.mp4', 'The most popular format on the web. Supported by all modern browsers. Uses H.264 video codec and AAC audio codec.'],
        ['WebM', '.webm', 'An open, royalty-free format developed for the web. Supported by most modern browsers. Uses VP8/VP9 video codec and Vorbis/Opus audio codec.'],
        ['Ogg', '.ogv', 'An open container format developed by Xiph.Org. Supported by Firefox, Chrome, and Opera. Uses Theora video codec and Vorbis audio codec.'],
      ]}
    />

    <h3 className="text-2xl font-bold mt-8 mb-3">Common Audio Formats</h3>
     <SimpleTable
      headers={['Format', 'File Extension', 'Description']}
      rows={[
        ['MPEG-3', '.mp3', 'The most popular audio format. Supported by all modern browsers.'],
        ['WAV', '.wav', 'Often uncompressed, resulting in larger file sizes but higher quality. Supported by all modern browsers.'],
        ['Ogg', '.ogg', 'An open container format for audio. Supported by Firefox, Chrome, and Opera.'],
      ]}
    />

    <InfoBox className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-blue-800 dark:text-blue-300">
      <p>The following chapters will cover the <code>&lt;video&gt;</code>, <code>&lt;audio&gt;</code>, <code>&lt;embed&gt;</code>, and <code>&lt;object&gt;</code> elements in more detail.</p>
    </InfoBox>
  </>
);

export default HtmlMedia;
