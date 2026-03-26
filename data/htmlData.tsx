import React from 'react';
import type { SidebarSection } from '../types';

const HtmlHome = React.lazy(() => import('./html/HtmlHome'));
const HtmlIntroduction = React.lazy(() => import('./html/HtmlIntroduction'));
const HtmlEditors = React.lazy(() => import('./html/HtmlEditors'));
const HtmlIntroQuiz = React.lazy(() => import('./html/HtmlIntroQuiz'));
const HtmlBasic = React.lazy(() => import('./html/HtmlBasic'));
const HtmlElements = React.lazy(() => import('./html/HtmlElements'));
const HtmlAttributes = React.lazy(() => import('./html/HtmlAttributes'));
const HtmlHeadings = React.lazy(() => import('./html/HtmlHeadings'));
const HtmlParagraphs = React.lazy(() => import('./html/HtmlParagraphs'));
const HtmlStyles = React.lazy(() => import('./html/HtmlStyles'));
const HtmlFormatting = React.lazy(() => import('./html/HtmlFormatting'));
const HtmlQuotations = React.lazy(() => import('./html/HtmlQuotations'));
const HtmlComments = React.lazy(() => import('./html/HtmlComments'));
const HtmlColors = React.lazy(() => import('./html/HtmlColors'));
const HtmlCss = React.lazy(() => import('./html/HtmlCss'));
const HtmlLinks = React.lazy(() => import('./html/HtmlLinks'));
const HtmlImages = React.lazy(() => import('./html/HtmlImages'));
const HtmlFavicon = React.lazy(() => import('./html/HtmlFavicon'));
const HtmlPageTitle = React.lazy(() => import('./html/HtmlPageTitle'));
const HtmlTables = React.lazy(() => import('./html/HtmlTables'));
const HtmlLists = React.lazy(() => import('./html/HtmlLists'));
const HtmlBlockInline = React.lazy(() => import('./html/HtmlBlockInline'));
const HtmlDiv = React.lazy(() => import('./html/HtmlDiv'));
const HtmlClasses = React.lazy(() => import('./html/HtmlClasses'));
const HtmlId = React.lazy(() => import('./html/HtmlId'));
const HtmlIframes = React.lazy(() => import('./html/HtmlIframes'));
const HtmlJavascript = React.lazy(() => import('./html/HtmlJavascript'));
const HtmlFilePaths = React.lazy(() => import('./html/HtmlFilePaths'));
const HtmlHead = React.lazy(() => import('./html/HtmlHead'));
const HtmlLayout = React.lazy(() => import('./html/HtmlLayout'));
const HtmlResponsive = React.lazy(() => import('./html/HtmlResponsive'));
const HtmlComputercode = React.lazy(() => import('./html/HtmlComputercode'));
const HtmlSemantics = React.lazy(() => import('./html/HtmlSemantics'));
const HtmlStyleGuide = React.lazy(() => import('./html/HtmlStyleGuide'));
const HtmlEntities = React.lazy(() => import('./html/HtmlEntities'));
const HtmlSymbols = React.lazy(() => import('./html/HtmlSymbols'));
const HtmlEmojis = React.lazy(() => import('./html/HtmlEmojis'));
const HtmlCharsets = React.lazy(() => import('./html/HtmlCharsets'));
const HtmlUrlEncode = React.lazy(() => import('./html/HtmlUrlEncode'));
const HtmlVsXhtml = React.lazy(() => import('./html/HtmlVsXhtml'));
const HtmlForms = React.lazy(() => import('./html/HtmlForms'));
const HtmlFormAttributes = React.lazy(() => import('./html/HtmlFormAttributes'));
const HtmlFormElements = React.lazy(() => import('./html/HtmlFormElements'));
const HtmlInputTypes = React.lazy(() => import('./html/HtmlInputTypes'));
const HtmlInputAttributes = React.lazy(() => import('./html/HtmlInputAttributes'));
const InputFormAttributes = React.lazy(() => import('./html/InputFormAttributes'));
const HtmlCanvas = React.lazy(() => import('./html/HtmlCanvas'));
const HtmlSvg = React.lazy(() => import('./html/HtmlSvg'));
const HtmlMedia = React.lazy(() => import('./html/HtmlMedia'));
const HtmlVideo = React.lazy(() => import('./html/HtmlVideo'));
const HtmlAudio = React.lazy(() => import('./html/HtmlAudio'));
const HtmlPlugins = React.lazy(() => import('./html/HtmlPlugins'));
const HtmlYoutube = React.lazy(() => import('./html/HtmlYoutube'));
const HtmlWebApis = React.lazy(() => import('./html/HtmlWebApis'));
const HtmlGeolocation = React.lazy(() => import('./html/HtmlGeolocation'));
const HtmlDragAndDrop = React.lazy(() => import('./html/HtmlDragAndDrop'));
const HtmlWebStorage = React.lazy(() => import('./html/HtmlWebStorage'));
const HtmlWebWorkers = React.lazy(() => import('./html/HtmlWebWorkers'));
const HtmlSse = React.lazy(() => import('./html/HtmlSse'));
const HtmlInterviewPrep = React.lazy(() => import('./html/HtmlInterviewPrep'));
const HtmlCertificate = React.lazy(() => import('./html/HtmlCertificate'));
const HtmlTagList = React.lazy(() => import('./html/HtmlTagList'));
const HtmlAttributesRef = React.lazy(() => import('./html/HtmlAttributesRef'));
const HtmlGlobalAttributes = React.lazy(() => import('./html/HtmlGlobalAttributes'));
const HtmlBrowserSupport = React.lazy(() => import('./html/HtmlBrowserSupport'));
const HtmlEvents = React.lazy(() => import('./html/HtmlEvents'));
const HtmlColorsRef = React.lazy(() => import('./html/HtmlColorsRef'));
const HtmlCanvasRef = React.lazy(() => import('./html/HtmlCanvasRef'));
const HtmlAudioVideoRef = React.lazy(() => import('./html/HtmlAudioVideoRef'));
const HtmlDoctypes = React.lazy(() => import('./html/HtmlDoctypes'));
const HtmlCharacterSets = React.lazy(() => import('./html/HtmlCharacterSets'));
const HtmlUrlEncodeRef = React.lazy(() => import('./html/HtmlUrlEncodeRef'));
const HtmlLangCodes = React.lazy(() => import('./html/HtmlLangCodes'));
const HtmlHttpMessages = React.lazy(() => import('./html/HtmlHttpMessages'));
const HtmlHttpMethods = React.lazy(() => import('./html/HtmlHttpMethods'));
const PxToEmConverter = React.lazy(() => import('./html/PxToEmConverter'));
const KeyboardShortcuts = React.lazy(() => import('./html/KeyboardShortcuts'));

export const HTML_TUTORIAL_DATA: SidebarSection[] = [
  {
    title: 'HTML Tutorial',
    topics: [
      { id: 'html_home', title: 'HTML HOME', content: <HtmlHome /> },
      { id: 'html_introduction', title: 'HTML Introduction', content: <HtmlIntroduction /> },
      { id: 'html_editors', title: 'HTML Editors', content: <HtmlEditors /> },
      { id: 'html_intro_quiz', title: 'HTML Intro Quiz', content: <HtmlIntroQuiz /> },
      { id: 'html_basic', title: 'HTML Basic', content: <HtmlBasic /> },
      { id: 'html_elements', title: 'HTML Elements', content: <HtmlElements /> },
      { id: 'html_attributes', title: 'HTML Attributes', content: <HtmlAttributes /> },
      { id: 'html_headings', title: 'HTML Headings', content: <HtmlHeadings /> },
      { id: 'html_paragraphs', title: 'HTML Paragraphs', content: <HtmlParagraphs /> },
      { id: 'html_styles', title: 'HTML Styles', content: <HtmlStyles /> },
      { id: 'html_formatting', title: 'HTML Formatting', content: <HtmlFormatting /> },
      { id: 'html_quotations', title: 'HTML Quotations', content: <HtmlQuotations /> },
      { id: 'html_comments', title: 'HTML Comments', content: <HtmlComments /> },
      { id: 'html_colors', title: 'HTML Colors', content: <HtmlColors /> },
      { id: 'html_css', title: 'HTML CSS', content: <HtmlCss /> },
      { id: 'html_links', title: 'HTML Links', content: <HtmlLinks /> },
      { id: 'html_images', title: 'HTML Images', content: <HtmlImages /> },
      { id: 'html_favicon', title: 'HTML Favicon', content: <HtmlFavicon /> },
      { id: 'html_page_title', title: 'HTML Page Title', content: <HtmlPageTitle /> },
      { id: 'html_tables', title: 'HTML Tables', content: <HtmlTables /> },
      { id: 'html_lists', title: 'HTML Lists', content: <HtmlLists /> },
      { id: 'html_block_inline', title: 'HTML Block & Inline', content: <HtmlBlockInline /> },
      { id: 'html_div', title: 'HTML Div', content: <HtmlDiv /> },
      { id: 'html_classes', title: 'HTML Classes', content: <HtmlClasses /> },
      { id: 'html_id', title: 'HTML Id', content: <HtmlId /> },
      { id: 'html_iframes', title: 'HTML Iframes', content: <HtmlIframes /> },
      { id: 'html_javascript', title: 'HTML JavaScript', content: <HtmlJavascript /> },
      { id: 'html_file_paths', title: 'HTML File Paths', content: <HtmlFilePaths /> },
      { id: 'html_head', title: 'HTML Head', content: <HtmlHead /> },
      { id: 'html_layout', title: 'HTML Layout', content: <HtmlLayout /> },
      { id: 'html_responsive', title: 'HTML Responsive', content: <HtmlResponsive /> },
      { id: 'html_computercode', title: 'HTML Computercode', content: <HtmlComputercode /> },
      { id: 'html_semantics', title: 'HTML Semantics', content: <HtmlSemantics /> },
      { id: 'html_style_guide', title: 'HTML Style Guide', content: <HtmlStyleGuide /> },
      { id: 'html_entities', title: 'HTML Entities', content: <HtmlEntities /> },
      { id: 'html_symbols', title: 'HTML Symbols', content: <HtmlSymbols /> },
      { id: 'html_emojis', title: 'HTML Emojis', content: <HtmlEmojis /> },
      { id: 'html_charsets', title: 'HTML Charsets', content: <HtmlCharsets /> },
      { id: 'html_url_encode', title: 'HTML URL Encode', content: <HtmlUrlEncode /> },
      { id: 'html_vs_xhtml', title: 'HTML vs. XHTML', content: <HtmlVsXhtml /> },
    ],
  },
  {
    title: 'HTML Forms',
    topics: [
      { id: 'html_forms', title: 'HTML Forms', content: <HtmlForms /> },
      { id: 'html_form_attributes', title: 'HTML Form Attributes', content: <HtmlFormAttributes /> },
      { id: 'html_form_elements', title: 'HTML Form Elements', content: <HtmlFormElements /> },
      { id: 'html_input_types', title: 'HTML Input Types', content: <HtmlInputTypes /> },
      { id: 'html_input_attributes', title: 'HTML Input Attributes', content: <HtmlInputAttributes /> },
      { id: 'input_form_attributes', title: 'Input Form Attributes', content: <InputFormAttributes /> },
    ],
  },
  {
    title: 'HTML Graphics',
    topics: [
      { id: 'html_canvas', title: 'HTML Canvas', content: <HtmlCanvas /> },
      { id: 'html_svg', title: 'HTML SVG', content: <HtmlSvg /> },
    ],
  },
  {
    title: 'HTML Media',
    topics: [
      { id: 'html_media', title: 'HTML Media', content: <HtmlMedia /> },
      { id: 'html_video', title: 'HTML Video', content: <HtmlVideo /> },
      { id: 'html_audio', title: 'HTML Audio', content: <HtmlAudio /> },
      { id: 'html_plug-ins', title: 'HTML Plug-ins', content: <HtmlPlugins /> },
      { id: 'html_youtube', title: 'HTML YouTube', content: <HtmlYoutube /> },
    ],
  },
  {
    title: 'HTML APIs',
    topics: [
      { id: 'html_web_apis', title: 'HTML Web APIs', content: <HtmlWebApis /> },
      { id: 'html_geolocation', title: 'HTML Geolocation', content: <HtmlGeolocation /> },
      { id: 'html_drag_and_drop', title: 'HTML Drag and Drop', content: <HtmlDragAndDrop /> },
      { id: 'html_web_storage', title: 'HTML Web Storage', content: <HtmlWebStorage /> },
      { id: 'html_web_workers', title: 'HTML Web Workers', content: <HtmlWebWorkers /> },
      { id: 'html_sse', title: 'HTML SSE', content: <HtmlSse /> },
    ],
  },
  {
    title: 'HTML Examples',
    topics: [
      { id: 'html_interview_prep', title: 'HTML Interview Prep', content: <HtmlInterviewPrep /> },
      { id: 'html_certificate', title: 'HTML Certificate', content: <HtmlCertificate /> },
    ],
  },
  {
    title: 'HTML References',
    topics: [
      { id: 'html_tag_list', title: 'HTML Tag List', content: <HtmlTagList /> },
      { id: 'html_attributes_ref', title: 'HTML Attributes', content: <HtmlAttributesRef /> },
      { id: 'html_global_attributes', title: 'HTML Global Attributes', content: <HtmlGlobalAttributes /> },
      { id: 'html_browser_support', title: 'HTML Browser Support', content: <HtmlBrowserSupport /> },
      { id: 'html_events', title: 'HTML Events', content: <HtmlEvents /> },
      { id: 'html_colors_ref', title: 'HTML Colors', content: <HtmlColorsRef /> },
      { id: 'html_canvas_ref', title: 'HTML Canvas', content: <HtmlCanvasRef /> },
      { id: 'html_audio_video_ref', title: 'HTML Audio/Video', content: <HtmlAudioVideoRef /> },
      { id: 'html_doctypes', title: 'HTML Doctypes', content: <HtmlDoctypes /> },
      { id: 'html_character_sets', title: 'HTML Character Sets', content: <HtmlCharacterSets /> },
      { id: 'html_url_encode_ref', title: 'HTML URL Encode', content: <HtmlUrlEncodeRef /> },
      { id: 'html_lang_codes', title: 'HTML Lang Codes', content: <HtmlLangCodes /> },
      { id: 'html_http_messages', title: 'HTTP Messages', content: <HtmlHttpMessages /> },
      { id: 'html_http_methods', title: 'HTTP Methods', content: <HtmlHttpMethods /> },
      { id: 'px_to_em_converter', title: 'PX to EM Converter', content: <PxToEmConverter /> },
      { id: 'keyboard_shortcuts', title: 'Keyboard Shortcuts', content: <KeyboardShortcuts /> },
    ],
  },
];
