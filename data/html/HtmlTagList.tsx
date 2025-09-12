import React from 'react';
import { SimpleTable } from '../components';

const HtmlTagList: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">This page provides a comprehensive list of standard HTML tags, categorized by their function. Use this as a quick reference for building your web pages.</p>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">Basic HTML</h2>
    <SimpleTable
      headers={['Tag', 'Description']}
      rows={[
        ['<!DOCTYPE>', 'Defines the document type'],
        ['<html>', 'Defines the root of an HTML document'],
        ['<head>', 'Contains metadata/information for the document'],
        ['<title>', 'Defines a title for the document'],
        ['<body>', 'Defines the document\'s body'],
        ['<h1> to <h6>', 'Defines HTML headings'],
        ['<p>', 'Defines a paragraph'],
        ['<br>', 'Inserts a single line break'],
        ['<hr>', 'Defines a thematic change in the content (horizontal rule)'],
      ]}
    />

    <h2 className="text-3xl font-bold mt-10 mb-4">Formatting</h2>
    <SimpleTable
      headers={['Tag', 'Description']}
      rows={[
        ['<b>', 'Defines bold text'],
        ['<strong>', 'Defines important text (semantically strong)'],
        ['<i>', 'Defines a part of text in an alternate voice or mood (italic)'],
        ['<em>', 'Defines emphasized text'],
        ['<mark>', 'Defines marked/highlighted text'],
        ['<small>', 'Defines smaller text'],
        ['<del>', 'Defines deleted text'],
        ['<ins>', 'Defines inserted text'],
        ['<sub>', 'Defines subscripted text'],
        ['<sup>', 'Defines superscripted text'],
        ['<code>', 'Defines a piece of computer code'],
        ['<pre>', 'Defines preformatted text'],
      ]}
    />

    <h2 className="text-3xl font-bold mt-10 mb-4">Forms and Input</h2>
    <SimpleTable
      headers={['Tag', 'Description']}
      rows={[
        ['<form>', 'Defines an HTML form for user input'],
        ['<input>', 'Defines an input control'],
        ['<textarea>', 'Defines a multiline input control (text area)'],
        ['<button>', 'Defines a clickable button'],
        ['<select>', 'Defines a drop-down list'],
        ['<option>', 'Defines an option in a drop-down list'],
        ['<label>', 'Defines a label for an <input> element'],
        ['<fieldset>', 'Groups related elements in a form'],
        ['<legend>', 'Defines a caption for a <fieldset> element'],
      ]}
    />

    <h2 className="text-3xl font-bold mt-10 mb-4">Images, Audio, and Video</h2>
    <SimpleTable
      headers={['Tag', 'Description']}
      rows={[
        ['<img>', 'Defines an image'],
        ['<map>', 'Defines a client-side image map'],
        ['<area>', 'Defines an area inside an image map'],
        ['<canvas>', 'Used to draw graphics, on the fly, via scripting'],
        ['<figcaption>', 'Defines a caption for a <figure> element'],
        ['<figure>', 'Specifies self-contained content, like illustrations, diagrams, photos'],
        ['<audio>', 'Defines sound content'],
        ['<source>', 'Defines multiple media resources for <video> and <audio>'],
        ['<track>', 'Defines text tracks for media elements (<video> and <audio>)'],
        ['<video>', 'Defines a video or movie'],
      ]}
    />
    
    <h2 className="text-3xl font-bold mt-10 mb-4">Links, Lists, and Tables</h2>
    <SimpleTable
      headers={['Tag', 'Description']}
      rows={[
        ['<a>', 'Defines a hyperlink'],
        ['<ul>', 'Defines an unordered list'],
        ['<ol>', 'Defines an ordered list'],
        ['<li>', 'Defines a list item'],
        ['<table>', 'Defines a table'],
        ['<tr>', 'Defines a row in a table'],
        ['<td>', 'Defines a cell in a table'],
        ['<th>', 'Defines a header cell in a table'],
        ['<thead>', 'Groups the header content in a table'],
        ['<tbody>', 'Groups the body content in a table'],
        ['<tfoot>', 'Groups the footer content in a table'],
      ]}
    />
    
    <h2 className="text-3xl font-bold mt-10 mb-4">Semantic and Structural Elements</h2>
    <SimpleTable
      headers={['Tag', 'Description']}
      rows={[
        ['<div>', 'Defines a section or division in a document'],
        ['<span>', 'Defines a section in a document (inline)'],
        ['<header>', 'Defines a header for a document or section'],
        ['<footer>', 'Defines a footer for a document or section'],
        ['<main>', 'Specifies the main content of a document'],
        ['<section>', 'Defines a section in a document'],
        ['<article>', 'Defines an article'],
        ['<aside>', 'Defines content aside from the page content'],
        ['<nav>', 'Defines navigation links'],
        ['<details>', 'Defines additional details that the user can view or hide'],
        ['<summary>', 'Defines a visible heading for a <details> element'],
      ]}
    />
  </>
);

export default HtmlTagList;