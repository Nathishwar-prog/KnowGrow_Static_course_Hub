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
import HtmlForms from './html/HtmlForms';
import HtmlFormAttributes from './html/HtmlFormAttributes';
import HtmlFormElements from './html/HtmlFormElements';
import HtmlInputTypes from './html/HtmlInputTypes';
import HtmlInputAttributes from './html/HtmlInputAttributes';
import InputFormAttributes from './html/InputFormAttributes';
import HtmlCanvas from './html/HtmlCanvas';
import HtmlSvg from './html/HtmlSvg';
import HtmlMedia from './html/HtmlMedia';
import HtmlVideo from './html/HtmlVideo';
import HtmlAudio from './html/HtmlAudio';
import HtmlPlugins from './html/HtmlPlugins';
import HtmlYoutube from './html/HtmlYoutube';
import HtmlWebApis from './html/HtmlWebApis';
import HtmlGeolocation from './html/HtmlGeolocation';
import HtmlDragAndDrop from './html/HtmlDragAndDrop';
import HtmlWebStorage from './html/HtmlWebStorage';
import HtmlWebWorkers from './html/HtmlWebWorkers';
import HtmlSse from './html/HtmlSse';
import HtmlQuiz from './html/HtmlQuiz';
import HtmlExercises from './html/HtmlExercises';
import HtmlInterviewPrep from './html/HtmlInterviewPrep';
import HtmlCertificate from './html/HtmlCertificate';
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

// CSS Tutorial Topics
import CssHome from './css/CssHome';
import CssIntroduction from './css/CssIntroduction';
import CssSyntax from './css/CssSyntax';
import CssSelectors from './css/CssSelectors';
import CssHowTo from './css/CssHowTo';
import CssComments from './css/CssComments';
import CssErrors from './css/CssErrors';
import CssColors from './css/CssColors';
import CssBackgrounds from './css/CssBackgrounds';
import CssBorders from './css/CssBorders';
import CssMargins from './css/CssMargins';
import CssPadding from './css/CssPadding';
import CssHeightWidth from './css/CssHeightWidth';
import CssBoxModel from './css/CssBoxModel';
import CssOutline from './css/CssOutline';
import CssText from './css/CssText';
import CssFonts from './css/CssFonts';
import CssIcons from './css/CssIcons';
import CssLinks from './css/CssLinks';
import CssLists from './css/CssLists';
import CssTables from './css/CssTables';
import CssDisplay from './css/CssDisplay';
import CssMaxWidth from './css/CssMaxWidth';
import CssPosition from './css/CssPosition';
import CssZIndex from './css/CssZIndex';
import CssOverflow from './css/CssOverflow';
import CssFloat from './css/CssFloat';
import CssInlineBlock from './css/CssInlineBlock';
import CssAlign from './css/CssAlign';
import CssCombinators from './css/CssCombinators';
import CssPseudoClasses from './css/CssPseudoClasses';
import CssPseudoElements from './css/CssPseudoElements';
import CssOpacity from './css/CssOpacity';
import CssNavigationBars from './css/CssNavigationBars';
import CssDropdowns from './css/CssDropdowns';
import CssImageGallery from './css/CssImageGallery';
import CssImageSprites from './css/CssImageSprites';
import CssAttrSelectors from './css/CssAttrSelectors';
import CssForms from './css/CssForms';
import CssCounters from './css/CssCounters';
import CssUnits from './css/CssUnits';
import CssSpecificity from './css/CssSpecificity';
import CssImportant from './css/CssImportant';
import CssMathFunctions from './css/CssMathFunctions';
import CssOptimization from './css/CssOptimization';
import CssAccessibility from './css/CssAccessibility';
import CssWebsiteLayout from './css/CssWebsiteLayout';

// CSS Advanced Topics
import CssRoundedCorners from './css/CssRoundedCorners';
import CssBorderImages from './css/CssBorderImages';
import CssAdvancedBackgrounds from './css/CssAdvancedBackgrounds';
import CssAdvancedColors from './css/CssAdvancedColors';
import CssColorKeywords from './css/CssColorKeywords';
import CssGradients from './css/CssGradients';
import CssShadows from './css/CssShadows';
import CssTextEffects from './css/CssTextEffects';
import CssWebFonts from './css/CssWebFonts';
import Css2dTransforms from './css/Css2dTransforms';
import Css3dTransforms from './css/Css3dTransforms';
import CssTransitions from './css/CssTransitions';
import CssAnimations from './css/CssAnimations';
import CssTooltips from './css/CssTooltips';
import CssImageStyling from './css/CssImageStyling';
import CssImageCentering from './css/CssImageCentering';
import CssImageFilters from './css/CssImageFilters';
import CssImageShapes from './css/CssImageShapes';
import CssObjectFit from './css/CssObjectFit';
import CssObjectPosition from './css/CssObjectPosition';
import CssMasking from './css/CssMasking';
import CssButtons from './css/CssButtons';
import CssPagination from './css/CssPagination';
import CssMultipleColumns from './css/CssMultipleColumns';
import CssUserInterface from './css/CssUserInterface';
import CssVariables from './css/CssVariables';
import CssProperty from './css/CssProperty';
import CssBoxSizing from './css/CssBoxSizing';
import CssMediaQueries from './css/CssMediaQueries';
import CssMqExamples from './css/CssMqExamples';

// CSS Flexbox Topics
import CssFlexboxIntro from './css/CssFlexboxIntro';
import CssFlexContainer from './css/CssFlexContainer';
import CssFlexItems from './css/CssFlexItems';
import CssFlexResponsive from './css/CssFlexResponsive';

// CSS Grid Topics
import CssGridIntro from './css/CssGridIntro';
import CssGridColumnsRows from './css/CssGridColumnsRows';
import CssGridLines from './css/CssGridLines';
import CssGridContainer from './css/CssGridContainer';
import CssGridItem from './css/CssGridItem';
import CssSupports from './css/CssSupports';

// CSS Responsive Topics
import CssRwdIntro from './css/CssRwdIntro';
import CssRwdViewport from './css/CssRwdViewport';
import CssRwdGridView from './css/CssRwdGridView';
import CssRwdMediaQueries from './css/CssRwdMediaQueries';
import CssRwdImages from './css/CssRwdImages';
import CssRwdVideos from './css/CssRwdVideos';
import CssRwdFrameworks from './css/CssRwdFrameworks';
import CssRwdTemplates from './css/CssRwdTemplates';

// CSS SASS Topics
import CssSassTutorial from './css/CssSassTutorial';

// CSS Quiz
import CssQuiz from './css/CssQuiz';


export const HTML_TUTORIAL_DATA: SidebarSection[] = [
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
      { id: 'html_quiz', title: 'HTML Quiz', content: <HtmlQuiz /> },
      { id: 'html_exercises', title: 'HTML Exercises', content: <HtmlExercises /> },
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

export const CSS_TUTORIAL_DATA: SidebarSection[] = [
  {
    title: 'CSS Tutorial',
    topics: [
      { id: 'css_home', title: 'CSS HOME', content: <CssHome /> },
      { id: 'css_introduction', title: 'CSS Introduction', content: <CssIntroduction /> },
      { id: 'css_syntax', title: 'CSS Syntax', content: <CssSyntax /> },
      { id: 'css_selectors', title: 'CSS Selectors', content: <CssSelectors /> },
      { id: 'css_how_to', title: 'CSS How To', content: <CssHowTo /> },
      { id: 'css_comments', title: 'CSS Comments', content: <CssComments /> },
      { id: 'css_errors', title: 'CSS Errors', content: <CssErrors /> },
      { id: 'css_colors', title: 'CSS Colors', content: <CssColors /> },
      { id: 'css_backgrounds', title: 'CSS Backgrounds', content: <CssBackgrounds /> },
      { id: 'css_borders', title: 'CSS Borders', content: <CssBorders /> },
      { id: 'css_margins', title: 'CSS Margins', content: <CssMargins /> },
      { id: 'css_padding', title: 'CSS Padding', content: <CssPadding /> },
      { id: 'css_height_width', title: 'CSS Height/Width', content: <CssHeightWidth /> },
      { id: 'css_box_model', title: 'CSS Box Model', content: <CssBoxModel /> },
      { id: 'css_outline', title: 'CSS Outline', content: <CssOutline /> },
      { id: 'css_text', title: 'CSS Text', content: <CssText /> },
      { id: 'css_fonts', title: 'CSS Fonts', content: <CssFonts /> },
      { id: 'css_icons', title: 'CSS Icons', content: <CssIcons /> },
      { id: 'css_links', title: 'CSS Links', content: <CssLinks /> },
      { id: 'css_lists', title: 'CSS Lists', content: <CssLists /> },
      { id: 'css_tables', title: 'CSS Tables', content: <CssTables /> },
      { id: 'css_display', title: 'CSS Display', content: <CssDisplay /> },
      { id: 'css_max_width', title: 'CSS Max-width', content: <CssMaxWidth /> },
      { id: 'css_position', title: 'CSS Position', content: <CssPosition /> },
      { id: 'css_z_index', title: 'CSS Z-index', content: <CssZIndex /> },
      { id: 'css_overflow', title: 'CSS Overflow', content: <CssOverflow /> },
      { id: 'css_float', title: 'CSS Float', content: <CssFloat /> },
      { id: 'css_inline_block', title: 'CSS Inline-block', content: <CssInlineBlock /> },
      { id: 'css_align', title: 'CSS Align', content: <CssAlign /> },
      { id: 'css_combinators', title: 'CSS Combinators', content: <CssCombinators /> },
      { id: 'css_pseudo_classes', title: 'CSS Pseudo-classes', content: <CssPseudoClasses /> },
      { id: 'css_pseudo_elements', title: 'CSS Pseudo-elements', content: <CssPseudoElements /> },
      { id: 'css_opacity', title: 'CSS Opacity', content: <CssOpacity /> },
      { id: 'css_navigation_bars', title: 'CSS Navigation Bars', content: <CssNavigationBars /> },
      { id: 'css_dropdowns', title: 'CSS Dropdowns', content: <CssDropdowns /> },
      { id: 'css_image_gallery', title: 'CSS Image Gallery', content: <CssImageGallery /> },
      { id: 'css_image_sprites', title: 'CSS Image Sprites', content: <CssImageSprites /> },
      { id: 'css_attr_selectors', title: 'CSS Attr Selectors', content: <CssAttrSelectors /> },
      { id: 'css_forms', title: 'CSS Forms', content: <CssForms /> },
      { id: 'css_counters', title: 'CSS Counters', content: <CssCounters /> },
      { id: 'css_units', title: 'CSS Units', content: <CssUnits /> },
      { id: 'css_specificity', title: 'CSS Specificity', content: <CssSpecificity /> },
      { id: 'css_important', title: 'CSS !important', content: <CssImportant /> },
      { id: 'css_math_functions', title: 'CSS Math Functions', content: <CssMathFunctions /> },
      { id: 'css_optimization', title: 'CSS Optimization', content: <CssOptimization /> },
      { id: 'css_accessibility', title: 'CSS Accessibility', content: <CssAccessibility /> },
      { id: 'css_website_layout', title: 'CSS Website Layout', content: <CssWebsiteLayout /> },
    ],
  },
  {
    title: 'CSS Advanced',
    topics: [
      { id: 'css_rounded_corners', title: 'CSS Rounded Corners', content: <CssRoundedCorners /> },
      { id: 'css_border_images', title: 'CSS Border Images', content: <CssBorderImages /> },
      { id: 'css_advanced_backgrounds', title: 'CSS Backgrounds', content: <CssAdvancedBackgrounds /> },
      { id: 'css_advanced_colors', title: 'CSS Colors', content: <CssAdvancedColors /> },
      { id: 'css_color_keywords', title: 'CSS Color Keywords', content: <CssColorKeywords /> },
      { id: 'css_gradients', title: 'CSS Gradients', content: <CssGradients /> },
      { id: 'css_shadows', title: 'CSS Shadows', content: <CssShadows /> },
      { id: 'css_text_effects', title: 'CSS Text Effects', content: <CssTextEffects /> },
      { id: 'css_web_fonts', title: 'CSS Web Fonts', content: <CssWebFonts /> },
      { id: 'css_2d_transforms', title: 'CSS 2D Transforms', content: <Css2dTransforms /> },
      { id: 'css_3d_transforms', title: 'CSS 3D Transforms', content: <Css3dTransforms /> },
      { id: 'css_transitions', title: 'CSS Transitions', content: <CssTransitions /> },
      { id: 'css_animations', title: 'CSS Animations', content: <CssAnimations /> },
      { id: 'css_tooltips', title: 'CSS Tooltips', content: <CssTooltips /> },
      { id: 'css_image_styling', title: 'CSS Image Styling', content: <CssImageStyling /> },
      { id: 'css_image_centering', title: 'CSS Image Centering', content: <CssImageCentering /> },
      { id: 'css_image_filters', title: 'CSS Image Filters', content: <CssImageFilters /> },
      { id: 'css_image_shapes', title: 'CSS Image Shapes', content: <CssImageShapes /> },
      { id: 'css_object_fit', title: 'CSS object-fit', content: <CssObjectFit /> },
      { id: 'css_object_position', title: 'CSS object-position', content: <CssObjectPosition /> },
      { id: 'css_masking', title: 'CSS Masking', content: <CssMasking /> },
      { id: 'css_buttons', title: 'CSS Buttons', content: <CssButtons /> },
      { id: 'css_pagination', title: 'CSS Pagination', content: <CssPagination /> },
      { id: 'css_multiple_columns', title: 'CSS Multiple Columns', content: <CssMultipleColumns /> },
      { id: 'css_user_interface', title: 'CSS User Interface', content: <CssUserInterface /> },
      { id: 'css_variables', title: 'CSS Variables', content: <CssVariables /> },
      { id: 'css_property', title: 'CSS @property', content: <CssProperty /> },
      { id: 'css_box_sizing', title: 'CSS Box Sizing', content: <CssBoxSizing /> },
      { id: 'css_media_queries', title: 'CSS Media Queries', content: <CssMediaQueries /> },
      { id: 'css_mq_examples', title: 'CSS MQ Examples', content: <CssMqExamples /> },
    ],
  },
  {
    title: 'CSS Flexbox',
    topics: [
      { id: 'css_flexbox_intro', title: 'Flexbox Intro', content: <CssFlexboxIntro /> },
      { id: 'css_flex_container', title: 'Flex Container', content: <CssFlexContainer /> },
      { id: 'css_flex_items', title: 'Flex Items', content: <CssFlexItems /> },
      { id: 'css_flex_responsive', title: 'Flex Responsive', content: <CssFlexResponsive /> },
    ],
  },
  {
    title: 'CSS Grid',
    topics: [
      { id: 'css_grid_intro', title: 'Grid Intro', content: <CssGridIntro /> },
      { id: 'css_grid_columns_rows', title: 'Grid Columns/Rows', content: <CssGridColumnsRows /> },
      { id: 'css_grid_lines', title: 'Grid Lines', content: <CssGridLines /> },
      { id: 'css_grid_container', title: 'Grid Container', content: <CssGridContainer /> },
      { id: 'css_grid_item', title: 'Grid Item', content: <CssGridItem /> },
      { id: 'css_supports', title: 'CSS @supports', content: <CssSupports /> },
    ],
  },
  {
    title: 'CSS Responsive',
    topics: [
      { id: 'css_rwd_intro', title: 'RWD Intro', content: <CssRwdIntro /> },
      { id: 'css_rwd_viewport', title: 'RWD Viewport', content: <CssRwdViewport /> },
      { id: 'css_rwd_grid_view', title: 'RWD Grid View', content: <CssRwdGridView /> },
      { id: 'css_rwd_media_queries', title: 'RWD Media Queries', content: <CssRwdMediaQueries /> },
      { id: 'css_rwd_images', title: 'RWD Images', content: <CssRwdImages /> },
      { id: 'css_rwd_videos', title: 'RWD Videos', content: <CssRwdVideos /> },
      { id: 'css_rwd_frameworks', title: 'RWD Frameworks', content: <CssRwdFrameworks /> },
      { id: 'css_rwd_templates', title: 'RWD Templates', content: <CssRwdTemplates /> },
    ],
  },
  {
    title: 'CSS SASS',
    topics: [
      { id: 'css_sass_tutorial', title: 'SASS Tutorial', content: <CssSassTutorial /> },
    ],
  },
  {
    title: 'CSS Quiz',
    topics: [
        { id: 'css_quiz', title: 'CSS Quiz', content: <CssQuiz /> },
    ]
  }
];

export const ALL_COURSES = {
    html: {
        data: HTML_TUTORIAL_DATA,
        homeTopicId: 'html_home',
    },
    css: {
        data: CSS_TUTORIAL_DATA,
        homeTopicId: 'css_home',
    },
};
