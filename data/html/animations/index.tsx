import React from 'react';
import HtmlDocumentStructure from './HtmlDocumentStructure';
import HtmlElementStructure from './HtmlElementStructure';
import LiveTypingAnimation from './LiveTypingAnimation';
import HtmlRenderProcess from './HtmlRenderProcess';
import HtmlEditorWorkflow from './HtmlEditorWorkflow';
import HtmlAttributeAnimation from './HtmlAttributeAnimation';
import CssClassSelectorAnimation from './CssClassSelectorAnimation';
import HtmlLivePreview from './HtmlLivePreview';

export const ANIMATION_MAP: { [key: string]: { component: React.FC<any>, title: string } } = {
  'html-document-structure': {
    component: HtmlDocumentStructure,
    title: 'HTML Document Structure',
  },
  'html-element-structure': {
    component: HtmlElementStructure,
    title: 'Anatomy of an HTML Element',
  },
  'live-typing-animation': {
    component: LiveTypingAnimation,
    title: 'Live Example',
  },
  'html-live-preview': {
    component: HtmlLivePreview,
    title: 'Live Code & Preview',
  },
  'html-render-process': {
    component: HtmlRenderProcess,
    title: 'How a Browser Renders HTML',
  },
  'html-editor-workflow': {
    component: HtmlEditorWorkflow,
    title: 'From Code to Web Page',
  },
  'html-attribute-animation': {
    component: HtmlAttributeAnimation,
    title: 'HTML Attributes',
  },
  'css-class-selector-animation': {
    component: CssClassSelectorAnimation,
    title: 'CSS Class Selector',
  },
};