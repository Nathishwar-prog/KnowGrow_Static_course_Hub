import React from 'react';
import type { SidebarSection } from '../types';

const CssHome = React.lazy(() => import('./css/CssHome'));
const CssIntroduction = React.lazy(() => import('./css/CssIntroduction'));
const CssSyntax = React.lazy(() => import('./css/CssSyntax'));
const CssSelectors = React.lazy(() => import('./css/CssSelectors'));
const CssIntroQuiz = React.lazy(() => import('./css/CssIntroQuiz'));
const CssHowTo = React.lazy(() => import('./css/CssHowTo'));
const CssComments = React.lazy(() => import('./css/CssComments'));
const CssErrors = React.lazy(() => import('./css/CssErrors'));
const CssColors = React.lazy(() => import('./css/CssColors'));
const CssBackgrounds = React.lazy(() => import('./css/CssBackgrounds'));
const CssBorders = React.lazy(() => import('./css/CssBorders'));
const CssMargins = React.lazy(() => import('./css/CssMargins'));
const CssPadding = React.lazy(() => import('./css/CssPadding'));
const CssHeightWidth = React.lazy(() => import('./css/CssHeightWidth'));
const CssBoxModel = React.lazy(() => import('./css/CssBoxModel'));
const CssOutline = React.lazy(() => import('./css/CssOutline'));
const CssText = React.lazy(() => import('./css/CssText'));
const CssFonts = React.lazy(() => import('./css/CssFonts'));
const CssIcons = React.lazy(() => import('./css/CssIcons'));
const CssLinks = React.lazy(() => import('./css/CssLinks'));
const CssLists = React.lazy(() => import('./css/CssLists'));
const CssTables = React.lazy(() => import('./css/CssTables'));
const CssDisplay = React.lazy(() => import('./css/CssDisplay'));
const CssMaxWidth = React.lazy(() => import('./css/CssMaxWidth'));
const CssPosition = React.lazy(() => import('./css/CssPosition'));
const CssZIndex = React.lazy(() => import('./css/CssZIndex'));
const CssOverflow = React.lazy(() => import('./css/CssOverflow'));
const CssFloat = React.lazy(() => import('./css/CssFloat'));
const CssInlineBlock = React.lazy(() => import('./css/CssInlineBlock'));
const CssAlign = React.lazy(() => import('./css/CssAlign'));
const CssCombinators = React.lazy(() => import('./css/CssCombinators'));
const CssPseudoClasses = React.lazy(() => import('./css/CssPseudoClasses'));
const CssPseudoElements = React.lazy(() => import('./css/CssPseudoElements'));
const CssOpacity = React.lazy(() => import('./css/CssOpacity'));
const CssNavigationBars = React.lazy(() => import('./css/CssNavigationBars'));
const CssDropdowns = React.lazy(() => import('./css/CssDropdowns'));
const CssImageGallery = React.lazy(() => import('./css/CssImageGallery'));
const CssImageSprites = React.lazy(() => import('./css/CssImageSprites'));
const CssAttrSelectors = React.lazy(() => import('./css/CssAttrSelectors'));
const CssForms = React.lazy(() => import('./css/CssForms'));
const CssCounters = React.lazy(() => import('./css/CssCounters'));
const CssUnits = React.lazy(() => import('./css/CssUnits'));
const CssSpecificity = React.lazy(() => import('./css/CssSpecificity'));
const CssImportant = React.lazy(() => import('./css/CssImportant'));
const CssMathFunctions = React.lazy(() => import('./css/CssMathFunctions'));
const CssOptimization = React.lazy(() => import('./css/CssOptimization'));
const CssAccessibility = React.lazy(() => import('./css/CssAccessibility'));
const CssWebsiteLayout = React.lazy(() => import('./css/CssWebsiteLayout'));
const CssRoundedCorners = React.lazy(() => import('./css/CssRoundedCorners'));
const CssBorderImages = React.lazy(() => import('./css/CssBorderImages'));
const CssAdvancedBackgrounds = React.lazy(() => import('./css/CssAdvancedBackgrounds'));
const CssAdvancedColors = React.lazy(() => import('./css/CssAdvancedColors'));
const CssColorKeywords = React.lazy(() => import('./css/CssColorKeywords'));
const CssGradients = React.lazy(() => import('./css/CssGradients'));
const CssShadows = React.lazy(() => import('./css/CssShadows'));
const CssTextEffects = React.lazy(() => import('./css/CssTextEffects'));
const CssWebFonts = React.lazy(() => import('./css/CssWebFonts'));
const Css2dTransforms = React.lazy(() => import('./css/Css2dTransforms'));
const Css3dTransforms = React.lazy(() => import('./css/Css3dTransforms'));
const CssTransitions = React.lazy(() => import('./css/CssTransitions'));
const CssAnimations = React.lazy(() => import('./css/CssAnimations'));
const CssTooltips = React.lazy(() => import('./css/CssTooltips'));
const CssImageStyling = React.lazy(() => import('./css/CssImageStyling'));
const CssImageCentering = React.lazy(() => import('./css/CssImageCentering'));
const CssImageFilters = React.lazy(() => import('./css/CssImageFilters'));
const CssImageShapes = React.lazy(() => import('./css/CssImageShapes'));
const CssObjectFit = React.lazy(() => import('./css/CssObjectFit'));
const CssObjectPosition = React.lazy(() => import('./css/CssObjectPosition'));
const CssMasking = React.lazy(() => import('./css/CssMasking'));
const CssButtons = React.lazy(() => import('./css/CssButtons'));
const CssPagination = React.lazy(() => import('./css/CssPagination'));
const CssMultipleColumns = React.lazy(() => import('./css/CssMultipleColumns'));
const CssUserInterface = React.lazy(() => import('./css/CssUserInterface'));
const CssVariables = React.lazy(() => import('./css/CssVariables'));
const CssProperty = React.lazy(() => import('./css/CssProperty'));
const CssBoxSizing = React.lazy(() => import('./css/CssBoxSizing'));
const CssMediaQueries = React.lazy(() => import('./css/CssMediaQueries'));
const CssMqExamples = React.lazy(() => import('./css/CssMqExamples'));
const CssFlexboxIntro = React.lazy(() => import('./css/CssFlexboxIntro'));
const CssFlexContainer = React.lazy(() => import('./css/CssFlexContainer'));
const CssFlexItems = React.lazy(() => import('./css/CssFlexItems'));
const CssFlexResponsive = React.lazy(() => import('./css/CssFlexResponsive'));
const CssGridIntro = React.lazy(() => import('./css/CssGridIntro'));
const CssGridColumnsRows = React.lazy(() => import('./css/CssGridColumnsRows'));
const CssGridLines = React.lazy(() => import('./css/CssGridLines'));
const CssGridContainer = React.lazy(() => import('./css/CssGridContainer'));
const CssGridItem = React.lazy(() => import('./css/CssGridItem'));
const CssSupports = React.lazy(() => import('./css/CssSupports'));
const CssRwdIntro = React.lazy(() => import('./css/CssRwdIntro'));
const CssRwdViewport = React.lazy(() => import('./css/CssRwdViewport'));
const CssRwdGridView = React.lazy(() => import('./css/CssRwdGridView'));
const CssRwdMediaQueries = React.lazy(() => import('./css/CssRwdMediaQueries'));
const CssRwdImages = React.lazy(() => import('./css/CssRwdImages'));
const CssRwdVideos = React.lazy(() => import('./css/CssRwdVideos'));
const CssRwdFrameworks = React.lazy(() => import('./css/CssRwdFrameworks'));
const CssRwdTemplates = React.lazy(() => import('./css/CssRwdTemplates'));
const CssSassTutorial = React.lazy(() => import('./css/CssSassTutorial'));

export const CSS_TUTORIAL_DATA: SidebarSection[] = [
  {
    title: 'CSS Tutorial',
    topics: [
      { id: 'css_home', title: 'CSS HOME', content: <CssHome /> },
      { id: 'css_introduction', title: 'CSS Introduction', content: <CssIntroduction /> },
      { id: 'css_syntax', title: 'CSS Syntax', content: <CssSyntax /> },
      { id: 'css_selectors', title: 'CSS Selectors', content: <CssSelectors /> },
      { id: 'css_intro_quiz', title: 'CSS Intro Quiz', content: <CssIntroQuiz /> },
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
];
