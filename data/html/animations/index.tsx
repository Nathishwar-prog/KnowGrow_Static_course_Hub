import React from 'react';
import HtmlDocumentStructure from './HtmlDocumentStructure';
import HtmlElementStructure from './HtmlElementStructure';
import GenericCodeAnimation from './GenericCodeAnimation';
import HtmlRenderProcess from './HtmlRenderProcess';
import HtmlEditorWorkflow from './HtmlEditorWorkflow';

export const ANIMATION_MAP: { [key: string]: { component: React.FC, title: string } } = {
  'html-document-structure': {
    component: HtmlDocumentStructure,
    title: 'HTML Document Structure',
  },
  'html-element-structure': {
    component: HtmlElementStructure,
    title: 'Anatomy of an HTML Element',
  },
  'generic-code-animation': {
    component: GenericCodeAnimation,
    title: 'Live Example',
  },
  'html-render-process': {
    component: HtmlRenderProcess,
    title: 'How a Browser Renders HTML',
  },
  'html-editor-workflow': {
    component: HtmlEditorWorkflow,
    title: 'From Code to Web Page',
  },
  // Add other animations here
};