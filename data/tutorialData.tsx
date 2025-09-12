import React from 'react';
import type { SidebarSection } from '../types';

// HTML Tutorial Topics
import HtmlHome from './html/HtmlHome';
import HtmlIntroduction from './html/HtmlIntroduction';
import HtmlEditors from './html/HtmlEditors';
import HtmlBasic from './html/HtmlBasic';
import HtmlElements from './html/HtmlElements';
import HtmlAttributes from './html/HtmlAttributes';
import HtmlHeadings from './html/HtmlHeadings';
import HtmlParagraphs from './html/HtmlParagraphs';
import HtmlStyles from './html/HtmlStyles';
import HtmlFormatting from './html/HtmlFormatting';
import HtmlQuotations from './html/HtmlQuotations';
import HtmlComments from './html/HtmlComments';
import HtmlColors from './html/HtmlColors';
import HtmlCss from './html/HtmlCss';
import HtmlLinks from './html/HtmlLinks';
import HtmlImages from './html/HtmlImages';
import HtmlFavicon from './html/HtmlFavicon';
import HtmlPageTitle from './html/HtmlPageTitle';
import HtmlTables from './html/HtmlTables';
import HtmlLists from './html/HtmlLists';
import HtmlBlockInline from './html/HtmlBlockInline';
import HtmlDiv from './html/HtmlDiv';
import HtmlClasses from './html/HtmlClasses';
import HtmlId from './html/HtmlId';
import HtmlIframes from './html/HtmlIframes';
import HtmlJavascript from './html/HtmlJavascript';
import HtmlFilePaths from './html/HtmlFilePaths';
import HtmlHead from './html/HtmlHead';
import HtmlLayout from './html/HtmlLayout';
import HtmlResponsive from './html/HtmlResponsive';
import HtmlComputercode from './html/HtmlComputercode';
import HtmlSemantics from './html/HtmlSemantics';
import HtmlStyleGuide from './html/HtmlStyleGuide';
import HtmlEntities from './html/HtmlEntities';
import HtmlSymbols from './html/HtmlSymbols';
import HtmlEmojis from './html/HtmlEmojis';
import HtmlCharsets from './html/HtmlCharsets';
import HtmlUrlEncode from './html/HtmlUrlEncode';
import HtmlVsXhtml from './html/HtmlVsXhtml';

// HTML Forms Topics
import HtmlForms from './html/HtmlForms';
import HtmlFormAttributes from './html/HtmlFormAttributes';
import HtmlFormElements from './html/HtmlFormElements';
import HtmlInputTypes from './html/HtmlInputTypes';
import HtmlInputAttributes from './html/HtmlInputAttributes';
import InputFormAttributes from './html/InputFormAttributes';

// HTML Graphics Topics
import HtmlCanvas from './html/HtmlCanvas';
import HtmlSvg from './html/HtmlSvg';

// HTML Media Topics
import HtmlMedia from './html/HtmlMedia';
import HtmlVideo from './html/HtmlVideo';
import HtmlAudio from './html/HtmlAudio';
import HtmlPlugins from './html/HtmlPlugins';
import HtmlYoutube from './html/HtmlYoutube';

// HTML APIs Topics
import HtmlWebApis from './html/HtmlWebApis';
import HtmlGeolocation from './html/HtmlGeolocation';
import HtmlDragAndDrop from './html/HtmlDragAndDrop';
import HtmlWebStorage from './html/HtmlWebStorage';
import HtmlWebWorkers from './html/HtmlWebWorkers';
import HtmlSse from './html/HtmlSse';

// HTML Examples Topics
import HtmlExamples from './html/HtmlExamples';
import HtmlEditor from './html/HtmlEditor';
import HtmlQuiz from './html/HtmlQuiz';
import HtmlExercises from './html/HtmlExercises';
import HtmlWebsite from './html/HtmlWebsite';
import HtmlSyllabus from './html/HtmlSyllabus';
import HtmlStudyPlan from './html/HtmlStudyPlan';
import HtmlInterviewPrep from './html/HtmlInterviewPrep';
import HtmlBootcamp from './html/HtmlBootcamp';
import HtmlCertificate from './html/HtmlCertificate';
import HtmlSummary from './html/HtmlSummary';
import HtmlAccessibility from './html/HtmlAccessibility';

// HTML References Topics
import HtmlTagList from './html/HtmlTagList';
import HtmlAttributesRef from './html/HtmlAttributesRef';
import HtmlGlobalAttributes from './html/HtmlGlobalAttributes';
import HtmlBrowserSupport from './html/HtmlBrowserSupport';
import HtmlEvents from './html/HtmlEvents';
import HtmlColorsRef from './html/HtmlColorsRef';
import HtmlCanvasRef from './html/HtmlCanvasRef';
import HtmlAudioVideoRef from './html/HtmlAudioVideoRef';
import HtmlDoctypes from './html/HtmlDoctypes';
import HtmlCharacterSets from './html/HtmlCharacterSets';
import HtmlUrlEncodeRef from './html/HtmlUrlEncodeRef';
import HtmlLangCodes from './html/HtmlLangCodes';
import HtmlHttpMessages from './html/HtmlHttpMessages';
import HtmlHttpMethods from './html/HtmlHttpMethods';
import PxToEmConverter from './html/PxToEmConverter';
import KeyboardShortcuts from './html/KeyboardShortcuts';

export const TUTORIAL_DATA: SidebarSection[] = [
  {
    title: 'HTML Tutorial',
    topics: [
      { id: 'html_home', title: 'HTML HOME', content: <HtmlHome /> },
      { id: 'html_introduction', title: 'HTML Introduction', content: <HtmlIntroduction /> },
      { id: 'html_editors', title: 'HTML Editors', content: <HtmlEditors /> },
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
      { id: 'html_examples', title: 'HTML Examples', content: <HtmlExamples /> },
      { id: 'html_editor', title: 'HTML Editor', content: <HtmlEditor /> },
      { id: 'html_quiz', title: 'HTML Quiz', content: <HtmlQuiz /> },
      { id: 'html_exercises', title: 'HTML Exercises', content: <HtmlExercises /> },
      { id: 'html_website', title: 'HTML Website', content: <HtmlWebsite /> },
      { id: 'html_syllabus', title: 'HTML Syllabus', content: <HtmlSyllabus /> },
      { id: 'html_study_plan', title: 'HTML Study Plan', content: <HtmlStudyPlan /> },
      { id: 'html_interview_prep', title: 'HTML Interview Prep', content: <HtmlInterviewPrep /> },
      { id: 'html_bootcamp', title: 'HTML Bootcamp', content: <HtmlBootcamp /> },
      { id: 'html_certificate', title: 'HTML Certificate', content: <HtmlCertificate /> },
      { id: 'html_summary', title: 'HTML Summary', content: <HtmlSummary /> },
      { id: 'html_accessibility', title: 'HTML Accessibility', content: <HtmlAccessibility /> },
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
