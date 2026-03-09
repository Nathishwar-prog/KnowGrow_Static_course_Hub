import React from 'react';
import type { SidebarSection } from '../types';
const ComingSoon = React.lazy(() => import('./Comming'));
// HTML Tutorial Topics
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

// CSS Tutorial Topics
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

// JS Tutorial Topics
const JsHome = React.lazy(() => import('./js/JsHome'));
const JsIntroduction = React.lazy(() => import('./js/JsIntroduction'));
const JsWhereTo = React.lazy(() => import('./js/JsWhereTo'));
const JsOutput = React.lazy(() => import('./js/JsOutput'));
const JsSyntax = React.lazy(() => import('./js/JsSyntax'));
const JsStatements = React.lazy(() => import('./js/JsStatements'));
const JsComments = React.lazy(() => import('./js/JsComments'));
const JsVariables = React.lazy(() => import('./js/JsVariables'));
const JsDataTypes = React.lazy(() => import('./js/JsDataTypes'));
const JsLet = React.lazy(() => import('./js/JsLet'));
const JsConst = React.lazy(() => import('./js/JsConst'));
const JsOperators = React.lazy(() => import('./js/JsOperators'));
const JsArithmetic = React.lazy(() => import('./js/JsArithmetic'));
const JsAssignment = React.lazy(() => import('./js/JsAssignment'));
const JsFunctions = React.lazy(() => import('./js/JsFunctions'));
const JsObjects = React.lazy(() => import('./js/JsObjects'));
const JsEvents = React.lazy(() => import('./js/JsEvents'));
const JsStrings = React.lazy(() => import('./js/JsStrings'));
const JsStringTemplates = React.lazy(() => import('./js/JsStringTemplates'));
const JsNumbers = React.lazy(() => import('./js/JsNumbers'));
const JsArrays = React.lazy(() => import('./js/JsArrays'));
const JsDates = React.lazy(() => import('./js/JsDates'));
const JsMath = React.lazy(() => import('./js/JsMath'));
const JsBooleans = React.lazy(() => import('./js/JsBooleans'));
const JsComparisons = React.lazy(() => import('./js/JsComparisons'));
const JsLogical = React.lazy(() => import('./js/JsLogical'));
const JsIfElse = React.lazy(() => import('./js/JsIfElse'));
const JsSwitch = React.lazy(() => import('./js/JsSwitch'));
const JsLoops = React.lazy(() => import('./js/JsLoops'));
const JsBreak = React.lazy(() => import('./js/JsBreak'));
const JsContinue = React.lazy(() => import('./js/JsContinue'));
const JsErrors = React.lazy(() => import('./js/JsErrors'));
const JsScope = React.lazy(() => import('./js/JsScope'));
const JsCodeBlocks = React.lazy(() => import('./js/JsCodeBlocks'));
const JsUtf8Characters = React.lazy(() => import('./js/JsUtf8Characters'));
const JsNews = React.lazy(() => import('./js/JsNews'));
const JsKeywordsRef = React.lazy(() => import('./js/JsKeywordsRef'));
const JsKeywordsReserved = React.lazy(() => import('./js/JsKeywordsReserved'));
const JsComparisonOperators = React.lazy(() => import('./js/JsComparisonOperators'));
const JsLogicalOperators = React.lazy(() => import('./js/JsLogicalOperators'));
const JsBitwiseOperators = React.lazy(() => import('./js/JsBitwiseOperators'));
const JsOperatorRef = React.lazy(() => import('./js/JsOperatorRef'));
const JsOperatorPrecedence = React.lazy(() => import('./js/JsOperatorPrecedence'));
const JsTypeof = React.lazy(() => import('./js/JsTypeof'));
const JsToString = React.lazy(() => import('./js/JsToString'));
const JsTypeConversion = React.lazy(() => import('./js/JsTypeConversion'));
const JsStringMethods = React.lazy(() => import('./js/JsStringMethods'));
const JsStringSearch = React.lazy(() => import('./js/JsStringSearch'));
const JsStringRef = React.lazy(() => import('./js/JsStringRef'));
const JsNumberMethods = React.lazy(() => import('./js/JsNumberMethods'));
const JsNumberProperties = React.lazy(() => import('./js/JsNumberProperties'));
const JsNumberRef = React.lazy(() => import('./js/JsNumberRef'));
const JsMathRef = React.lazy(() => import('./js/JsMathRef'));
const JsRandom = React.lazy(() => import('./js/JsRandom'));
const JsBigInt = React.lazy(() => import('./js/JsBigInt'));
const JsBitwise = React.lazy(() => import('./js/JsBitwise'));
const JsDateFormats = React.lazy(() => import('./js/JsDateFormats'));
const JsDateGet = React.lazy(() => import('./js/JsDateGet'));
const JsDateSet = React.lazy(() => import('./js/JsDateSet'));
const JsDateRef = React.lazy(() => import('./js/JsDateRef'));
const JsArrayMethods = React.lazy(() => import('./js/JsArrayMethods'));
const JsArraySearch = React.lazy(() => import('./js/JsArraySearch'));
const JsArraySort = React.lazy(() => import('./js/JsArraySort'));
const JsArrayIterations = React.lazy(() => import('./js/JsArrayIterations'));
const JsArrayRef = React.lazy(() => import('./js/JsArrayRef'));
const JsArrayConst = React.lazy(() => import('./js/JsArrayConst'));
const JsFunctionDefinitions = React.lazy(() => import('./js/JsFunctionDefinitions'));
const JsFunctionArrows = React.lazy(() => import('./js/JsFunctionArrows'));
const JsFunctionParameters = React.lazy(() => import('./js/JsFunctionParameters'));
const JsFunctionInvocation = React.lazy(() => import('./js/JsFunctionInvocation'));
const JsFunctionThis = React.lazy(() => import('./js/JsFunctionThis'));
const JsFunctionCall = React.lazy(() => import('./js/JsFunctionCall'));
const JsFunctionApply = React.lazy(() => import('./js/JsFunctionApply'));
const JsFunctionBind = React.lazy(() => import('./js/JsFunctionBind'));
const JsFunctionClosures = React.lazy(() => import('./js/JsFunctionClosures'));
const JsObjectDefinitions = React.lazy(() => import('./js/JsObjectDefinitions'));
const JsObjectProperties = React.lazy(() => import('./js/JsObjectProperties'));
const JsObjectMethods = React.lazy(() => import('./js/JsObjectMethods'));
const JsObjectDisplay = React.lazy(() => import('./js/JsObjectDisplay'));
const JsObjectConstructors = React.lazy(() => import('./js/JsObjectConstructors'));
const JsObjectThis = React.lazy(() => import('./js/JsObjectThis'));
const JsObjectDestructuring = React.lazy(() => import('./js/JsObjectDestructuring'));
const JsObjectPrototypes = React.lazy(() => import('./js/JsObjectPrototypes'));
const JsObjectIterations = React.lazy(() => import('./js/JsObjectIterations'));
const JsObjectManagement = React.lazy(() => import('./js/JsObjectManagement'));
const JsObjectGetSet = React.lazy(() => import('./js/JsObjectGetSet'));
const JsObjectProtection = React.lazy(() => import('./js/JsObjectProtection'));
const JsObjectRef = React.lazy(() => import('./js/JsObjectRef'));
const JsClasses = React.lazy(() => import('./js/JsClasses'));
const JsClassInheritance = React.lazy(() => import('./js/JsClassInheritance'));
const JsClassStatic = React.lazy(() => import('./js/JsClassStatic'));
const JsSets = React.lazy(() => import('./js/JsSets'));
const JsSetMethods = React.lazy(() => import('./js/JsSetMethods'));
const JsSetLogic = React.lazy(() => import('./js/JsSetLogic'));
const JsSetWeakSet = React.lazy(() => import('./js/JsSetWeakSet'));
const JsSetRef = React.lazy(() => import('./js/JsSetRef'));
const JsMaps = React.lazy(() => import('./js/JsMaps'));
const JsMapMethods = React.lazy(() => import('./js/JsMapMethods'));
const JsMapWeakMap = React.lazy(() => import('./js/JsMapWeakMap'));
const JsMapRef = React.lazy(() => import('./js/JsMapRef'));
const JsLoopFor = React.lazy(() => import('./js/JsLoopFor'));
const JsLoopWhile = React.lazy(() => import('./js/JsLoopWhile'));
const JsLoopForIn = React.lazy(() => import('./js/JsLoopForIn'));
const JsLoopForOf = React.lazy(() => import('./js/JsLoopForOf'));
const JsIterables = React.lazy(() => import('./js/JsIterables'));
const JsIterators = React.lazy(() => import('./js/JsIterators'));
const JsGenerators = React.lazy(() => import('./js/JsGenerators'));
const JsRegExp = React.lazy(() => import('./js/JsRegExp'));
const JsRegExpFlags = React.lazy(() => import('./js/JsRegExpFlags'));
const JsRegExpClasses = React.lazy(() => import('./js/JsRegExpClasses'));
const JsRegExpMetachars = React.lazy(() => import('./js/JsRegExpMetachars'));
const JsRegExpAssertions = React.lazy(() => import('./js/JsRegExpAssertions'));
const JsRegExpQuantifiers = React.lazy(() => import('./js/JsRegExpQuantifiers'));
const JsRegExpPatterns = React.lazy(() => import('./js/JsRegExpPatterns'));
const JsRegExpObjects = React.lazy(() => import('./js/JsRegExpObjects'));
const JsRegExpMethods = React.lazy(() => import('./js/JsRegExpMethods'));
const JsTypedArrays = React.lazy(() => import('./js/JsTypedArrays'));
const JsTypedMethods = React.lazy(() => import('./js/JsTypedMethods'));
const JsTypedRef = React.lazy(() => import('./js/JsTypedRef'));
const JsCallbacks = React.lazy(() => import('./js/JsCallbacks'));
const JsAsynchronous = React.lazy(() => import('./js/JsAsynchronous'));
const JsPromises = React.lazy(() => import('./js/JsPromises'));
const JsAsyncAwait = React.lazy(() => import('./js/JsAsyncAwait'));
const JsStrictMode = React.lazy(() => import('./js/JsStrictMode'));
const JsScopes = React.lazy(() => import('./js/JsScopes'));
const JsHoisting = React.lazy(() => import('./js/JsHoisting'));
const JsDebugging = React.lazy(() => import('./js/JsDebugging'));
const JsModules = React.lazy(() => import('./js/JsModules'));
const JsStyleGuide = React.lazy(() => import('./js/JsStyleGuide'));
const JsBestPractices = React.lazy(() => import('./js/JsBestPractices'));
const JsMistakes = React.lazy(() => import('./js/JsMistakes'));
const JsPerformance = React.lazy(() => import('./js/JsPerformance'));
const DomIntro = React.lazy(() => import('./js/DomIntro'));
const DomMethods = React.lazy(() => import('./js/DomMethods'));
const DomDocument = React.lazy(() => import('./js/DomDocument'));
const DomElements = React.lazy(() => import('./js/DomElements'));
const DomHtml = React.lazy(() => import('./js/DomHtml'));
const DomForms = React.lazy(() => import('./js/DomForms'));
const DomCss = React.lazy(() => import('./js/DomCss'));
const DomAnimations = React.lazy(() => import('./js/DomAnimations'));
const DomEventListener = React.lazy(() => import('./js/DomEventListener'));
const DomNavigation = React.lazy(() => import('./js/DomNavigation'));
const DomNodes = React.lazy(() => import('./js/DomNodes'));
const DomCollections = React.lazy(() => import('./js/DomCollections'));
const DomNodeLists = React.lazy(() => import('./js/DomNodeLists'));
const JsWindow = React.lazy(() => import('./js/JsWindow'));
const JsScreen = React.lazy(() => import('./js/JsScreen'));
const JsLocation = React.lazy(() => import('./js/JsLocation'));
const JsHistory = React.lazy(() => import('./js/JsHistory'));
const JsNavigator = React.lazy(() => import('./js/JsNavigator'));
const JsPopupAlert = React.lazy(() => import('./js/JsPopupAlert'));
const JsTiming = React.lazy(() => import('./js/JsTiming'));
const JsCookies = React.lazy(() => import('./js/JsCookies'));
const WebApiIntro = React.lazy(() => import('./js/WebApiIntro'));
const WebValidationApi = React.lazy(() => import('./js/WebValidationApi'));
const WebHistoryApi = React.lazy(() => import('./js/WebHistoryApi'));
const WebStorageApi = React.lazy(() => import('./js/WebStorageApi'));
const WebWorkerApi = React.lazy(() => import('./js/WebWorkerApi'));
const WebFetchApi = React.lazy(() => import('./js/WebFetchApi'));
const WebGeolocationApi = React.lazy(() => import('./js/WebGeolocationApi'));
const AjaxIntro = React.lazy(() => import('./js/AjaxIntro'));
const AjaxXmlHttp = React.lazy(() => import('./js/AjaxXmlHttp'));
const AjaxRequest = React.lazy(() => import('./js/AjaxRequest'));
const AjaxResponse = React.lazy(() => import('./js/AjaxResponse'));
const AjaxXmlFile = React.lazy(() => import('./js/AjaxXmlFile'));
const AjaxPhp = React.lazy(() => import('./js/AjaxPhp'));
const AjaxAsp = React.lazy(() => import('./js/AjaxAsp'));
const AjaxDatabase = React.lazy(() => import('./js/AjaxDatabase'));
const AjaxApplications = React.lazy(() => import('./js/AjaxApplications'));
const AjaxExamples = React.lazy(() => import('./js/AjaxExamples'));
const JsonIntro = React.lazy(() => import('./js/JsonIntro'));
const JsonSyntax = React.lazy(() => import('./js/JsonSyntax'));
const JsonVsXml = React.lazy(() => import('./js/JsonVsXml'));
const JsonDataTypes = React.lazy(() => import('./js/JsonDataTypes'));
const JsonParse = React.lazy(() => import('./js/JsonParse'));
const JsonStringify = React.lazy(() => import('./js/JsonStringify'));
const JsonObjects = React.lazy(() => import('./js/JsonObjects'));
const JsonArrays = React.lazy(() => import('./js/JsonArrays'));
const JsonServer = React.lazy(() => import('./js/JsonServer'));
const JsonPhp = React.lazy(() => import('./js/JsonPhp'));
const JsonHtml = React.lazy(() => import('./js/JsonHtml'));
const JsonJsonp = React.lazy(() => import('./js/JsonJsonp'));
const JquerySelectors = React.lazy(() => import('./js/JquerySelectors'));
const JqueryHtml = React.lazy(() => import('./js/JqueryHtml'));
const JqueryCss = React.lazy(() => import('./js/JqueryCss'));
const JqueryDom = React.lazy(() => import('./js/JqueryDom'));
const JsGraphics = React.lazy(() => import('./js/JsGraphics'));
const JsCanvas = React.lazy(() => import('./js/JsCanvas'));
const JsPlotly = React.lazy(() => import('./js/JsPlotly'));
const JsChartJs = React.lazy(() => import('./js/JsChartJs'));
const JsGoogleChart = React.lazy(() => import('./js/JsGoogleChart'));
const JsD3Js = React.lazy(() => import('./js/JsD3Js'));
const JsHtmlInput = React.lazy(() => import('./js/JsHtmlInput'));
const JsHtmlObjects = React.lazy(() => import('./js/JsHtmlObjects'));
const JsHtmlEventsRef = React.lazy(() => import('./js/JsHtmlEventsRef'));
const DomObjectsRef = React.lazy(() => import('./js/DomObjectsRef'));

// SQL Tutorial Topics
const SqlHome = React.lazy(() => import('./sql/SqlHome'));
const SqlIntro = React.lazy(() => import('./sql/SqlIntro'));
const SqlSyntax = React.lazy(() => import('./sql/SqlSyntax'));
const SqlSelect = React.lazy(() => import('./sql/SqlSelect'));
const SqlSelectDistinct = React.lazy(() => import('./sql/SqlSelectDistinct'));
const SqlWhere = React.lazy(() => import('./sql/SqlWhere'));
const SqlOrderBy = React.lazy(() => import('./sql/SqlOrderBy'));
const SqlAnd = React.lazy(() => import('./sql/SqlAnd'));
const SqlOr = React.lazy(() => import('./sql/SqlOr'));
const SqlNot = React.lazy(() => import('./sql/SqlNot'));
const SqlInsertInto = React.lazy(() => import('./sql/SqlInsertInto'));
const SqlNullValues = React.lazy(() => import('./sql/SqlNullValues'));
const SqlUpdate = React.lazy(() => import('./sql/SqlUpdate'));
const SqlDelete = React.lazy(() => import('./sql/SqlDelete'));
const SqlSelectTop = React.lazy(() => import('./sql/SqlSelectTop'));
const SqlAggregateFunctions = React.lazy(() => import('./sql/SqlAggregateFunctions'));
const SqlMinAndMax = React.lazy(() => import('./sql/SqlMinAndMax'));
const SqlCount = React.lazy(() => import('./sql/SqlCount'));
const SqlSum = React.lazy(() => import('./sql/SqlSum'));
const SqlAvg = React.lazy(() => import('./sql/SqlAvg'));
const SqlLike = React.lazy(() => import('./sql/SqlLike'));
const SqlWildcards = React.lazy(() => import('./sql/SqlWildcards'));
const SqlIn = React.lazy(() => import('./sql/SqlIn'));
const SqlBetween = React.lazy(() => import('./sql/SqlBetween'));
const SqlAliases = React.lazy(() => import('./sql/SqlAliases'));
const SqlJoins = React.lazy(() => import('./sql/SqlJoins'));
const SqlInnerJoin = React.lazy(() => import('./sql/SqlInnerJoin'));
const SqlLeftJoin = React.lazy(() => import('./sql/SqlLeftJoin'));
const SqlRightJoin = React.lazy(() => import('./sql/SqlRightJoin'));
const SqlFullJoin = React.lazy(() => import('./sql/SqlFullJoin'));
const SqlSelfJoin = React.lazy(() => import('./sql/SqlSelfJoin'));
const SqlUnion = React.lazy(() => import('./sql/SqlUnion'));
const SqlUnionAll = React.lazy(() => import('./sql/SqlUnionAll'));
const SqlGroupBy = React.lazy(() => import('./sql/SqlGroupBy'));
const SqlHaving = React.lazy(() => import('./sql/SqlHaving'));
const SqlExists = React.lazy(() => import('./sql/SqlExists'));
const SqlAnyAll = React.lazy(() => import('./sql/SqlAnyAll'));
const SqlSelectInto = React.lazy(() => import('./sql/SqlSelectInto'));
const SqlInsertIntoSelect = React.lazy(() => import('./sql/SqlInsertIntoSelect'));
const SqlCase = React.lazy(() => import('./sql/SqlCase'));
const SqlNullFunctions = React.lazy(() => import('./sql/SqlNullFunctions'));
const SqlStoredProcedures = React.lazy(() => import('./sql/SqlStoredProcedures'));
const SqlComments = React.lazy(() => import('./sql/SqlComments'));
const SqlOperators = React.lazy(() => import('./sql/SqlOperators'));
const SqlCreateDb = React.lazy(() => import('./sql/SqlCreateDb'));
const SqlDropDb = React.lazy(() => import('./sql/SqlDropDb'));
const SqlBackupDb = React.lazy(() => import('./sql/SqlBackupDb'));
const SqlCreateTable = React.lazy(() => import('./sql/SqlCreateTable'));
const SqlDropTable = React.lazy(() => import('./sql/SqlDropTable'));
const SqlAlterTable = React.lazy(() => import('./sql/SqlAlterTable'));
const SqlConstraints = React.lazy(() => import('./sql/SqlConstraints'));
const SqlNotNull = React.lazy(() => import('./sql/SqlNotNull'));
const SqlUnique = React.lazy(() => import('./sql/SqlUnique'));
const SqlPrimaryKey = React.lazy(() => import('./sql/SqlPrimaryKey'));
const SqlForeignKey = React.lazy(() => import('./sql/SqlForeignKey'));
const SqlCheck = React.lazy(() => import('./sql/SqlCheck'));
const SqlDefault = React.lazy(() => import('./sql/SqlDefault'));
const SqlIndex = React.lazy(() => import('./sql/SqlIndex'));
const SqlAutoIncrement = React.lazy(() => import('./sql/SqlAutoIncrement'));
const SqlDates = React.lazy(() => import('./sql/SqlDates'));
const SqlViews = React.lazy(() => import('./sql/SqlViews'));
const SqlInjection = React.lazy(() => import('./sql/SqlInjection'));
const SqlHosting = React.lazy(() => import('./sql/SqlHosting'));
const SqlDataTypes = React.lazy(() => import('./sql/SqlDataTypes'));
const SqlKeywords = React.lazy(() => import('./sql/SqlKeywords'));
const MySqlFunctions = React.lazy(() => import('./sql/MySqlFunctions'));
const SqlServerFunctions = React.lazy(() => import('./sql/SqlServerFunctions'));
const MsAccessFunctions = React.lazy(() => import('./sql/MsAccessFunctions'));
const SqlQuickRef = React.lazy(() => import('./sql/SqlQuickRef'));
const SqlExamples = React.lazy(() => import('./sql/SqlExamples'));
const SqlEditor = React.lazy(() => import('./sql/SqlEditor'));
const SqlExercises = React.lazy(() => import('./sql/SqlExercises'));
const SqlServer = React.lazy(() => import('./sql/SqlServer'));
const SqlSyllabus = React.lazy(() => import('./sql/SqlSyllabus'));
const SqlStudyPlan = React.lazy(() => import('./sql/SqlStudyPlan'));
const SqlBootcamp = React.lazy(() => import('./sql/SqlBootcamp'));
const SqlCertificate = React.lazy(() => import('./sql/SqlCertificate'));
const SqlTraining = React.lazy(() => import('./sql/SqlTraining'));

// Python Tutorial Topics
const PythonHome = React.lazy(() => import('./python/PythonHome'));
const PythonIntro = React.lazy(() => import('./python/PythonIntro'));
const PythonGetStarted = React.lazy(() => import('./python/PythonGetStarted'));
const PythonSyntax = React.lazy(() => import('./python/PythonSyntax'));
const PythonComments = React.lazy(() => import('./python/PythonComments'));
const PythonVariables = React.lazy(() => import('./python/PythonVariables'));
const PythonDataTypes = React.lazy(() => import('./python/PythonDataTypes'));
const PythonNumbers = React.lazy(() => import('./python/PythonNumbers'));
const PythonCasting = React.lazy(() => import('./python/PythonCasting'));
const PythonStrings = React.lazy(() => import('./python/PythonStrings'));
const PythonBooleans = React.lazy(() => import('./python/PythonBooleans'));
const PythonOperators = React.lazy(() => import('./python/PythonOperators'));
const PythonLists = React.lazy(() => import('./python/PythonLists'));
const PythonTuples = React.lazy(() => import('./python/PythonTuples'));
const PythonSets = React.lazy(() => import('./python/PythonSets'));
const PythonDictionaries = React.lazy(() => import('./python/PythonDictionaries'));
const PythonIfElse = React.lazy(() => import('./python/PythonIfElse'));
const PythonMatch = React.lazy(() => import('./python/PythonMatch'));
const PythonWhileLoops = React.lazy(() => import('./python/PythonWhileLoops'));
const PythonForLoops = React.lazy(() => import('./python/PythonForLoops'));
const PythonFunctions = React.lazy(() => import('./python/PythonFunctions'));
const PythonDecorators = React.lazy(() => import('./python/PythonDecorators'));
const PythonRange = React.lazy(() => import('./python/PythonRange'));
const PythonLambda = React.lazy(() => import('./python/PythonLambda'));
const PythonArrays = React.lazy(() => import('./python/PythonArrays'));
const PythonOOP = React.lazy(() => import('./python/PythonOOP'));
const PythonClassesObjects = React.lazy(() => import('./python/PythonClassesObjects'));
const PythonInheritance = React.lazy(() => import('./python/PythonInheritance'));
const PythonIterators = React.lazy(() => import('./python/PythonIterators'));
const PythonPolymorphism = React.lazy(() => import('./python/PythonPolymorphism'));
const PythonScope = React.lazy(() => import('./python/PythonScope'));
const PythonModules = React.lazy(() => import('./python/PythonModules'));
const PythonDates = React.lazy(() => import('./python/PythonDates'));
const PythonMath = React.lazy(() => import('./python/PythonMath'));
const PythonJSON = React.lazy(() => import('./python/PythonJSON'));
const PythonRegEx = React.lazy(() => import('./python/PythonRegEx'));
const PythonPIP = React.lazy(() => import('./python/PythonPIP'));
const PythonTryExcept = React.lazy(() => import('./python/PythonTryExcept'));
const PythonStringFormatting = React.lazy(() => import('./python/PythonStringFormatting'));
const PythonNone = React.lazy(() => import('./python/PythonNone'));
const PythonUserInput = React.lazy(() => import('./python/PythonUserInput'));
const PythonVirtualEnv = React.lazy(() => import('./python/PythonVirtualEnv'));
const PythonFileHandling = React.lazy(() => import('./python/PythonFileHandling'));
const PythonReadFiles = React.lazy(() => import('./python/PythonReadFiles'));
const PythonWriteCreateFiles = React.lazy(() => import('./python/PythonWriteCreateFiles'));
const PythonDeleteFiles = React.lazy(() => import('./python/PythonDeleteFiles'));


// Numpy Tutorial Topics

const NumpyHome = React.lazy(() => import('./numpy/NumpyHome'));
const NumpyIntro = React.lazy(() => import('./numpy/NumpyIntro'));
const NumpyMathOperations = React.lazy(() => import('./numpy/MathematicalOperations'));
const BasicArithmetic = React.lazy(() => import('./numpy/BasicArithmetic'));
const AggregationsAndStatistics = React.lazy(() => import('./numpy/AggregationsAndStatistics'));
const LinearAlgebra = React.lazy(() => import('./numpy/LinearAlgebra'));

// NumPy Modules
const NpArray = React.lazy(() => import('./numpy/NpArray'));
const NpArange = React.lazy(() => import('./numpy/NpArange'));
const NpLinspace = React.lazy(() => import('./numpy/NpLinspace'));
const NpZeros = React.lazy(() => import('./numpy/NpZeros'));
const NpOnes = React.lazy(() => import('./numpy/NpOnes'));
const NpEmpty = React.lazy(() => import('./numpy/NpEmpty'));
const NpEye = React.lazy(() => import('./numpy/NpEye'));
const NpFull = React.lazy(() => import('./numpy/NpFull'));
const NpReshape = React.lazy(() => import('./numpy/NpReshape'));
const NpRavel = React.lazy(() => import('./numpy/NpRavel'));
const NpFlatten = React.lazy(() => import('./numpy/NpFlatten'));
const NpTranspose = React.lazy(() => import('./numpy/NpTranspose'));
const NpConcatenate = React.lazy(() => import('./numpy/NpConcatenate'));
const NpVstack = React.lazy(() => import('./numpy/NpVstack'));
const NpHstack = React.lazy(() => import('./numpy/NpHstack'));
const NpSplit = React.lazy(() => import('./numpy/NpSplit'));
const NpAppend = React.lazy(() => import('./numpy/NpAppend'));
const NpInsert = React.lazy(() => import('./numpy/NpInsert'));
const NpDelete = React.lazy(() => import('./numpy/NpDelete'));
const NpAdd = React.lazy(() => import('./numpy/NpAdd'));
const NpSubtract = React.lazy(() => import('./numpy/NpSubtract'));
const NpMultiply = React.lazy(() => import('./numpy/NpMultiply'));
const NpDivide = React.lazy(() => import('./numpy/NpDivide'));
const NpPower = React.lazy(() => import('./numpy/NpPower'));
const NpMod = React.lazy(() => import('./numpy/NpMod'));
const NpAbsolute = React.lazy(() => import('./numpy/NpAbsolute'));
const NpSin = React.lazy(() => import('./numpy/NpSin'));
const NpCos = React.lazy(() => import('./numpy/NpCos'));
const NpTan = React.lazy(() => import('./numpy/NpTan'));
const NpExp = React.lazy(() => import('./numpy/NpExp'));
const NpLog = React.lazy(() => import('./numpy/NpLog'));
const NpLog10 = React.lazy(() => import('./numpy/NpLog10'));
const NpSqrt = React.lazy(() => import('./numpy/NpSqrt'));
const NpSum = React.lazy(() => import('./numpy/NpSum'));
const NpMean = React.lazy(() => import('./numpy/NpMean'));
const NpMedian = React.lazy(() => import('./numpy/NpMedian'));
const NpStd = React.lazy(() => import('./numpy/NpStd'));
const NpVar = React.lazy(() => import('./numpy/NpVar'));
const NpMin = React.lazy(() => import('./numpy/NpMin'));
const NpMax = React.lazy(() => import('./numpy/NpMax'));
const NpArgmin = React.lazy(() => import('./numpy/NpArgmin'));
const NpArgmax = React.lazy(() => import('./numpy/NpArgmax'));
const NpPercentile = React.lazy(() => import('./numpy/NpPercentile'));
const NpDot = React.lazy(() => import('./numpy/NpDot'));
const NpMatmul = React.lazy(() => import('./numpy/NpMatmul'));
const NpLinalgInv = React.lazy(() => import('./numpy/NpLinalgInv'));
const NpLinalgDet = React.lazy(() => import('./numpy/NpLinalgDet'));
const NpLinalgEig = React.lazy(() => import('./numpy/NpLinalgEig'));
const NpLinalgSolve = React.lazy(() => import('./numpy/NpLinalgSolve'));

// Newly created 18 NumPy Components
const NpShapeDimensions = React.lazy(() => import('./numpy/NpShapeDimensions'));
const NpDataTypes = React.lazy(() => import('./numpy/NpDataTypes'));
const NpBroadcasting = React.lazy(() => import('./numpy/NpBroadcasting'));
const NpIndexing = React.lazy(() => import('./numpy/NpIndexing'));
const NpSlicing = React.lazy(() => import('./numpy/NpSlicing'));
const NpAdvancedIndexing = React.lazy(() => import('./numpy/NpAdvancedIndexing'));
const NpIterating = React.lazy(() => import('./numpy/NpIterating'));
const NpSort = React.lazy(() => import('./numpy/NpSort'));
const NpWhere = React.lazy(() => import('./numpy/NpWhere'));
const NpExtract = React.lazy(() => import('./numpy/NpExtract'));
const NpRandomIntro = React.lazy(() => import('./numpy/NpRandomIntro'));
const NpRandomDistributions = React.lazy(() => import('./numpy/NpRandomDistributions'));
const NpUnique = React.lazy(() => import('./numpy/NpUnique'));
const NpSetOperations = React.lazy(() => import('./numpy/NpSetOperations'));
const NpSaveLoad = React.lazy(() => import('./numpy/NpSaveLoad'));
const NpTxtFiles = React.lazy(() => import('./numpy/NpTxtFiles'));


// Pandas Tutorial Topics

const PandasHome = React.lazy(() => import('./pandas/PandasHome'));
const PandasIntro = React.lazy(() => import('./pandas/PandasIntro'));
const PdSeries = React.lazy(() => import('./pandas/PdSeries'));
const PdDataFrame = React.lazy(() => import('./pandas/PdDataFrame'));
const PdIndex = React.lazy(() => import('./pandas/PdIndex'));
const PdReadCsv = React.lazy(() => import('./pandas/PdReadCsv'));
const PdReadExcel = React.lazy(() => import('./pandas/PdReadExcel'));
const PdReadJson = React.lazy(() => import('./pandas/PdReadJson'));
const PdReadSql = React.lazy(() => import('./pandas/PdReadSql'));
const PdToCsv = React.lazy(() => import('./pandas/PdToCsv'));
const PdToExcel = React.lazy(() => import('./pandas/PdToExcel'));
const PdHeadTail = React.lazy(() => import('./pandas/PdHeadTail'));
const PdInfo = React.lazy(() => import('./pandas/PdInfo'));
const PdDescribe = React.lazy(() => import('./pandas/PdDescribe'));
const PdShape = React.lazy(() => import('./pandas/PdShape'));
const PdDtypes = React.lazy(() => import('./pandas/PdDtypes'));
const PdColumns = React.lazy(() => import('./pandas/PdColumns'));
const PdLoc = React.lazy(() => import('./pandas/PdLoc'));
const PdIloc = React.lazy(() => import('./pandas/PdIloc'));
const PdBooleanIndexing = React.lazy(() => import('./pandas/PdBooleanIndexing'));
const PdQuery = React.lazy(() => import('./pandas/PdQuery'));
const PdDrop = React.lazy(() => import('./pandas/PdDrop'));
const PdFilter = React.lazy(() => import('./pandas/PdFilter'));
const PdIsna = React.lazy(() => import('./pandas/PdIsna'));
const PdDropna = React.lazy(() => import('./pandas/PdDropna'));
const PdFillna = React.lazy(() => import('./pandas/PdFillna'));
const PdReplace = React.lazy(() => import('./pandas/PdReplace'));
const PdDuplicated = React.lazy(() => import('./pandas/PdDuplicated'));
const PdDropDuplicates = React.lazy(() => import('./pandas/PdDropDuplicates'));
const PdApply = React.lazy(() => import('./pandas/PdApply'));
const PdMap = React.lazy(() => import('./pandas/PdMap'));
const PdRename = React.lazy(() => import('./pandas/PdRename'));
const PdSortValues = React.lazy(() => import('./pandas/PdSortValues'));
const PdSortIndex = React.lazy(() => import('./pandas/PdSortIndex'));
const PdAstype = React.lazy(() => import('./pandas/PdAstype'));
const PdValueCounts = React.lazy(() => import('./pandas/PdValueCounts'));
const PdGroupBy = React.lazy(() => import('./pandas/PdGroupBy'));
const PdAgg = React.lazy(() => import('./pandas/PdAgg'));
const PdPivotTable = React.lazy(() => import('./pandas/PdPivotTable'));
const PdCrossTab = React.lazy(() => import('./pandas/PdCrossTab'));
const PdMerge = React.lazy(() => import('./pandas/PdMerge'));
const PdConcat = React.lazy(() => import('./pandas/PdConcat'));
const PdJoin = React.lazy(() => import('./pandas/PdJoin'));
const PdToDatetime = React.lazy(() => import('./pandas/PdToDatetime'));
const PdDateRange = React.lazy(() => import('./pandas/PdDateRange'));
const PdShift = React.lazy(() => import('./pandas/PdShift'));
const PdResample = React.lazy(() => import('./pandas/PdResample'));


// MatplotLib Tutorial Topics

const MatplotlibHome = React.lazy(() => import('./matplotlib/MatplotLibHome'));
const MatplotlibIntro = React.lazy(() => import('./matplotlib/MatplotLibIntro'));
const MplPyplot = React.lazy(() => import('./matplotlib/MplPyplot'));
const MplPlotting = React.lazy(() => import('./matplotlib/MplPlotting'));
const MplMarkers = React.lazy(() => import('./matplotlib/MplMarkers'));
const MplLine = React.lazy(() => import('./matplotlib/MplLine'));
const MplLabels = React.lazy(() => import('./matplotlib/MplLabels'));
const MplTitle = React.lazy(() => import('./matplotlib/MplTitle'));
const MplGrid = React.lazy(() => import('./matplotlib/MplGrid'));
const MplSubplots = React.lazy(() => import('./matplotlib/MplSubplots'));
const MplScatter = React.lazy(() => import('./matplotlib/MplScatter'));
const MplBars = React.lazy(() => import('./matplotlib/MplBars'));
const MplHistograms = React.lazy(() => import('./matplotlib/MplHistograms'));
const MplPieCharts = React.lazy(() => import('./matplotlib/MplPieCharts'));
const MplBox = React.lazy(() => import('./matplotlib/MplBox'));
const MplViolin = React.lazy(() => import('./matplotlib/MplViolin'));
const MplLegend = React.lazy(() => import('./matplotlib/MplLegend'));
const MplColors = React.lazy(() => import('./matplotlib/MplColors'));
const MplTicks = React.lazy(() => import('./matplotlib/MplTicks'));
const MplText = React.lazy(() => import('./matplotlib/MplText'));
const MplAnnotations = React.lazy(() => import('./matplotlib/MplAnnotations'));
const MplFigure = React.lazy(() => import('./matplotlib/MplFigure'));
const MplSavefig = React.lazy(() => import('./matplotlib/MplSavefig'));
const MplStyles = React.lazy(() => import('./matplotlib/MplStyles'));
// Seaborn Tutorial Topics
const SeabornHome = React.lazy(() => import('./seaborn/SeabornHome'));
const SeabornIntro = React.lazy(() => import('./seaborn/SeabornIntro'));
const SbRelplot = React.lazy(() => import('./seaborn/SbRelplot'));
const SbScatterplot = React.lazy(() => import('./seaborn/SbScatterplot'));
const SbLineplot = React.lazy(() => import('./seaborn/SbLineplot'));
const SbDisplot = React.lazy(() => import('./seaborn/SbDisplot'));
const SbHistplot = React.lazy(() => import('./seaborn/SbHistplot'));
const SbKdeplot = React.lazy(() => import('./seaborn/SbKdeplot'));
const SbEcdfplot = React.lazy(() => import('./seaborn/SbEcdfplot'));
const SbRugplot = React.lazy(() => import('./seaborn/SbRugplot'));
const SbCatplot = React.lazy(() => import('./seaborn/SbCatplot'));
const SbStripplot = React.lazy(() => import('./seaborn/SbStripplot'));
const SbSwarmplot = React.lazy(() => import('./seaborn/SbSwarmplot'));
const SbBoxplot = React.lazy(() => import('./seaborn/SbBoxplot'));
const SbViolinplot = React.lazy(() => import('./seaborn/SbViolinplot'));
const SbBoxenplot = React.lazy(() => import('./seaborn/SbBoxenplot'));
const SbPointplot = React.lazy(() => import('./seaborn/SbPointplot'));
const SbBarplot = React.lazy(() => import('./seaborn/SbBarplot'));
const SbCountplot = React.lazy(() => import('./seaborn/SbCountplot'));
const SbLmplot = React.lazy(() => import('./seaborn/SbLmplot'));
const SbRegplot = React.lazy(() => import('./seaborn/SbRegplot'));
const SbResidplot = React.lazy(() => import('./seaborn/SbResidplot'));
const SbHeatmap = React.lazy(() => import('./seaborn/SbHeatmap'));
const SbClustermap = React.lazy(() => import('./seaborn/SbClustermap'));
const SbFacetGrid = React.lazy(() => import('./seaborn/SbFacetGrid'));
const SbPairplot = React.lazy(() => import('./seaborn/SbPairplot'));
const SbJointplot = React.lazy(() => import('./seaborn/SbJointplot'));
const SbSetTheme = React.lazy(() => import('./seaborn/SbSetTheme'));
const SbColorPalettes = React.lazy(() => import('./seaborn/SbColorPalettes'));

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

export const JS_TUTORIAL_DATA: SidebarSection[] = [
  {
    title: 'JS Tutorial',
    topics: [
      { id: 'js_home', title: 'JS HOME', content: <JsHome /> },
      { id: 'js_introduction', title: 'JS Introduction', content: <JsIntroduction /> },
      { id: 'js_where_to', title: 'JS Where To', content: <JsWhereTo /> },
      { id: 'js_output', title: 'JS Output', content: <JsOutput /> },
      { id: 'js_syntax', title: 'JS Syntax', content: <JsSyntax /> },
      { id: 'js_statements', title: 'JS Statements', content: <JsStatements /> },
      { id: 'js_comments', title: 'JS Comments', content: <JsComments /> },
      { id: 'js_variables', title: 'JS Variables', content: <JsVariables /> },
      { id: 'js_data_types', title: 'JS Data Types', content: <JsDataTypes /> },
      { id: 'js_let', title: 'JS Let', content: <JsLet /> },
      { id: 'js_const', title: 'JS Const', content: <JsConst /> },
      { id: 'js_operators', title: 'JS Operators', content: <JsOperators /> },
      { id: 'js_arithmetic', title: 'JS Arithmetic', content: <JsArithmetic /> },
      { id: 'js_assignment', title: 'JS Assignment', content: <JsAssignment /> },
      { id: 'js_functions', title: 'JS Functions', content: <JsFunctions /> },
      { id: 'js_objects', title: 'JS Objects', content: <JsObjects /> },
      { id: 'js_events', title: 'JS Events', content: <JsEvents /> },
      { id: 'js_strings', title: 'JS Strings', content: <JsStrings /> },
      { id: 'js_string_templates', title: 'JS String Templates', content: <JsStringTemplates /> },
      { id: 'js_numbers', title: 'JS Numbers', content: <JsNumbers /> },
      { id: 'js_arrays', title: 'JS Arrays', content: <JsArrays /> },
      { id: 'js_dates', title: 'JS Dates', content: <JsDates /> },
      { id: 'js_math', title: 'JS Math', content: <JsMath /> },
      { id: 'js_booleans', title: 'JS Booleans', content: <JsBooleans /> },
      { id: 'js_comparisons', title: 'JS Comparisons', content: <JsComparisons /> },
      { id: 'js_logical', title: 'JS Logical', content: <JsLogical /> },
      { id: 'js_if_else', title: 'JS If Else', content: <JsIfElse /> },
      { id: 'js_switch', title: 'JS Switch', content: <JsSwitch /> },
      { id: 'js_loops', title: 'JS Loops', content: <JsLoops /> },
      { id: 'js_break', title: 'JS Break', content: <JsBreak /> },
      { id: 'js_continue', title: 'JS Continue', content: <JsContinue /> },
      { id: 'js_errors', title: 'JS Errors', content: <JsErrors /> },
      { id: 'js_scope', title: 'JS Scope', content: <JsScope /> },
      { id: 'js_code_blocks', title: 'JS Code Blocks', content: <JsCodeBlocks /> },
      { id: 'js_utf8', title: 'JS UTF-8 Characters', content: <JsUtf8Characters /> },
      { id: 'js_news', title: 'JS News 2025-2015', content: <JsNews /> },
    ],
  },
  {
    title: 'JS Statements',
    topics: [
      { id: 'js_statements_ref', title: 'JS Statements', content: <JsStatements /> },
      { id: 'js_keywords_ref', title: 'JS Keywords Reference', content: <JsKeywordsRef /> },
      { id: 'js_keywords_reserved', title: 'JS Keywords Reserved', content: <JsKeywordsReserved /> },
    ],
  },
  {
    title: 'JS Operators',
    topics: [
      { id: 'js_assignment_ops', title: 'JS Assignment', content: <JsAssignment /> },
      { id: 'js_arithmetic_ops', title: 'JS Arithmetic', content: <JsArithmetic /> },
      { id: 'js_comparison_ops', title: 'JS Comparison', content: <JsComparisonOperators /> },
      { id: 'js_logical_ops', title: 'JS Logical Operators', content: <JsLogicalOperators /> },
      { id: 'js_bitwise_ops', title: 'JS Bitwise Operators', content: <JsBitwiseOperators /> },
      { id: 'js_operator_ref', title: 'JS Operator Reference', content: <JsOperatorRef /> },
      { id: 'js_operator_precedence', title: 'JS Operator Precedence', content: <JsOperatorPrecedence /> },
    ],
  },
  {
    title: 'JS Data Types',
    topics: [
      { id: 'js_data_types_ref', title: 'JS Data Types', content: <JsDataTypes /> },
      { id: 'js_typeof', title: 'JS typeof', content: <JsTypeof /> },
      { id: 'js_tostring', title: 'JS toString()', content: <JsToString /> },
      { id: 'js_type_conversion', title: 'JS Type Conversion', content: <JsTypeConversion /> },
    ],
  },
  {
    title: 'JS Strings',
    topics: [
      { id: 'js_string_methods', title: 'JS String Methods', content: <JsStringMethods /> },
      { id: 'js_string_search', title: 'JS String Search', content: <JsStringSearch /> },
      { id: 'js_string_ref', title: 'JS String Reference', content: <JsStringRef /> },
    ],
  },
  {
    title: 'JS Numbers',
    topics: [
      { id: 'js_number_methods', title: 'JS Number Methods', content: <JsNumberMethods /> },
      { id: 'js_number_properties', title: 'JS Number Properties', content: <JsNumberProperties /> },
      { id: 'js_number_ref', title: 'JS Number Reference', content: <JsNumberRef /> },
      { id: 'js_math_ref', title: 'JS Math Reference', content: <JsMathRef /> },
      { id: 'js_random', title: 'JS Random', content: <JsRandom /> },
      { id: 'js_bigint', title: 'JS BigInt', content: <JsBigInt /> },
      { id: 'js_bitwise', title: 'JS Bitwise', content: <JsBitwise /> },
    ],
  },
  {
    title: 'JS Dates',
    topics: [
      { id: 'js_date_formats', title: 'JS Date Formats', content: <JsDateFormats /> },
      { id: 'js_date_get', title: 'JS Date Get', content: <JsDateGet /> },
      { id: 'js_date_set', title: 'JS Date Set', content: <JsDateSet /> },
      { id: 'js_date_ref', title: 'JS Date Reference', content: <JsDateRef /> },
    ],
  },
  {
    title: 'JS Arrays',
    topics: [
      { id: 'js_array_methods', title: 'JS Array Methods', content: <JsArrayMethods /> },
      { id: 'js_array_search', title: 'JS Array Search', content: <JsArraySearch /> },
      { id: 'js_array_sort', title: 'JS Array Sort', content: <JsArraySort /> },
      { id: 'js_array_iterations', title: 'JS Array Iterations', content: <JsArrayIterations /> },
      { id: 'js_array_ref', title: 'JS Array Reference', content: <JsArrayRef /> },
      { id: 'js_array_const', title: 'JS Array Const', content: <JsArrayConst /> },
    ],
  },
  {
    title: 'JS Functions',
    topics: [
      { id: 'js_func_definitions', title: 'Function Definitions', content: <JsFunctionDefinitions /> },
      { id: 'js_func_arrows', title: 'Function Arrows', content: <JsFunctionArrows /> },
      { id: 'js_func_parameters', title: 'Function Parameters', content: <JsFunctionParameters /> },
      { id: 'js_func_invocation', title: 'Function Invocation', content: <JsFunctionInvocation /> },
      { id: 'js_func_this', title: 'Function this', content: <JsFunctionThis /> },
      { id: 'js_func_call', title: 'Function Call', content: <JsFunctionCall /> },
      { id: 'js_func_apply', title: 'Function Apply', content: <JsFunctionApply /> },
      { id: 'js_func_bind', title: 'Function Bind', content: <JsFunctionBind /> },
      { id: 'js_func_closures', title: 'Function Closures', content: <JsFunctionClosures /> },
    ],
  },
  {
    title: 'JS Objects',
    topics: [
      { id: 'js_obj_definitions', title: 'Object Definitions', content: <JsObjectDefinitions /> },
      { id: 'js_obj_properties', title: 'Object Properties', content: <JsObjectProperties /> },
      { id: 'js_obj_methods', title: 'Object Methods', content: <JsObjectMethods /> },
      { id: 'js_obj_display', title: 'Object Display', content: <JsObjectDisplay /> },
      { id: 'js_obj_constructors', title: 'Object Constructors', content: <JsObjectConstructors /> },
      { id: 'js_obj_this', title: 'Object this', content: <JsObjectThis /> },
      { id: 'js_obj_destructuring', title: 'Object Destructuring', content: <JsObjectDestructuring /> },
      { id: 'js_obj_prototypes', title: 'Object Prototypes', content: <JsObjectPrototypes /> },
      { id: 'js_obj_iterations', title: 'Object Iterations', content: <JsObjectIterations /> },
      { id: 'js_obj_management', title: 'Object Management', content: <JsObjectManagement /> },
      { id: 'js_obj_getset', title: 'Object Get / Set', content: <JsObjectGetSet /> },
      { id: 'js_obj_protection', title: 'Object Protection', content: <JsObjectProtection /> },
      { id: 'js_obj_ref', title: 'Object Reference', content: <JsObjectRef /> },
    ],
  },
  {
    title: 'JS Classes',
    topics: [
      { id: 'js_classes', title: 'JS Classes', content: <JsClasses /> },
      { id: 'js_class_inheritance', title: 'JS Class Inheritance', content: <JsClassInheritance /> },
      { id: 'js_class_static', title: 'JS Class Static', content: <JsClassStatic /> },
    ],
  },
  {
    title: 'JS Sets & Maps',
    topics: [
      { id: 'js_sets', title: 'JS Sets', content: <JsSets /> },
      { id: 'js_set_methods', title: 'JS Set Methods', content: <JsSetMethods /> },
      { id: 'js_set_logic', title: 'JS Set Logic', content: <JsSetLogic /> },
      { id: 'js_set_weakset', title: 'JS Set WeakSet', content: <JsSetWeakSet /> },
      { id: 'js_set_ref', title: 'JS Set Reference', content: <JsSetRef /> },
      { id: 'js_maps', title: 'JS Maps', content: <JsMaps /> },
      { id: 'js_map_methods', title: 'JS Map Methods', content: <JsMapMethods /> },
      { id: 'js_map_weakmap', title: 'JS Map WeakMap', content: <JsMapWeakMap /> },
      { id: 'js_map_ref', title: 'JS Map Reference', content: <JsMapRef /> },
    ],
  },
  {
    title: 'JS Iterations',
    topics: [
      { id: 'js_loops_iter', title: 'JS Loops', content: <JsLoops /> },
      { id: 'js_loop_for', title: 'JS Loop for', content: <JsLoopFor /> },
      { id: 'js_loop_while', title: 'JS Loop while', content: <JsLoopWhile /> },
      { id: 'js_loop_forin', title: 'JS Loop for...in', content: <JsLoopForIn /> },
      { id: 'js_loop_forof', title: 'JS Loop for...of', content: <JsLoopForOf /> },
      { id: 'js_iterables', title: 'JS Iterables', content: <JsIterables /> },
      { id: 'js_iterators', title: 'JS Iterators', content: <JsIterators /> },
      { id: 'js_generators', title: 'JS Generators', content: <JsGenerators /> },
    ],
  },
  {
    title: 'JS RegExp',
    topics: [
      { id: 'js_regexp', title: 'JS RegExp', content: <JsRegExp /> },
      { id: 'js_regexp_flags', title: 'JS RegExp Flags', content: <JsRegExpFlags /> },
      { id: 'js_regexp_classes', title: 'JS RegExp Classes', content: <JsRegExpClasses /> },
      { id: 'js_regexp_metachars', title: 'JS RegExp Metachars', content: <JsRegExpMetachars /> },
      { id: 'js_regexp_assertions', title: 'JS RegExp Assertions', content: <JsRegExpAssertions /> },
      { id: 'js_regexp_quantifiers', title: 'JS RegExp Quantifiers', content: <JsRegExpQuantifiers /> },
      { id: 'js_regexp_patterns', title: 'JS RegExp Patterns', content: <JsRegExpPatterns /> },
      { id: 'js_regexp_objects', title: 'JS RegExp Objects', content: <JsRegExpObjects /> },
      { id: 'js_regexp_methods', title: 'JS RegExp Methods', content: <JsRegExpMethods /> },
    ],
  },
  {
    title: 'JS Typed Arrays',
    topics: [
      { id: 'js_typed_arrays', title: 'JS Typed Arrays', content: <JsTypedArrays /> },
      { id: 'js_typed_methods', title: 'JS Typed Methods', content: <JsTypedMethods /> },
      { id: 'js_typed_ref', title: 'JS Typed Reference', content: <JsTypedRef /> },
    ],
  },
  {
    title: 'JS Async',
    topics: [
      { id: 'js_callbacks', title: 'JS Callbacks', content: <JsCallbacks /> },
      { id: 'js_asynchronous', title: 'JS Asynchronous', content: <JsAsynchronous /> },
      { id: 'js_promises', title: 'JS Promises', content: <JsPromises /> },
      { id: 'js_async_await', title: 'JS Async/Await', content: <JsAsyncAwait /> },
    ],
  },
  {
    title: 'JS Programming',
    topics: [
      { id: 'js_strict_mode', title: 'JS Strict Mode', content: <JsStrictMode /> },
      { id: 'js_scopes', title: 'JS Scopes', content: <JsScopes /> },
      { id: 'js_hoisting', title: 'JS Hoisting', content: <JsHoisting /> },
      { id: 'js_debugging', title: 'JS Debugging', content: <JsDebugging /> },
      { id: 'js_modules', title: 'JS Modules', content: <JsModules /> },
      { id: 'js_style_guide', title: 'JS Style Guide', content: <JsStyleGuide /> },
      { id: 'js_best_practices', title: 'JS Best Practices', content: <JsBestPractices /> },
      { id: 'js_mistakes', title: 'JS Mistakes', content: <JsMistakes /> },
      { id: 'js_performance', title: 'JS Performance', content: <JsPerformance /> },
    ],
  },
  {
    title: 'JS HTML DOM',
    topics: [
      { id: 'js_dom_intro', title: 'DOM Intro', content: <DomIntro /> },
      { id: 'js_dom_methods', title: 'DOM Methods', content: <DomMethods /> },
      { id: 'js_dom_document', title: 'DOM Document', content: <DomDocument /> },
      { id: 'js_dom_elements', title: 'DOM Elements', content: <DomElements /> },
      { id: 'js_dom_html', title: 'DOM HTML', content: <DomHtml /> },
      { id: 'js_dom_forms', title: 'DOM Forms', content: <DomForms /> },
      { id: 'js_dom_css', title: 'DOM CSS', content: <DomCss /> },
      { id: 'js_dom_animations', title: 'DOM Animations', content: <DomAnimations /> },
      { id: 'js_dom_events', title: 'DOM Events', content: <JsEvents /> },
      { id: 'js_dom_event_listener', title: 'DOM Event Listener', content: <DomEventListener /> },
      { id: 'js_dom_navigation', title: 'DOM Navigation', content: <DomNavigation /> },
      { id: 'js_dom_nodes', title: 'DOM Nodes', content: <DomNodes /> },
      { id: 'js_dom_collections', title: 'DOM Collections', content: <DomCollections /> },
      { id: 'js_dom_node_lists', title: 'DOM Node Lists', content: <DomNodeLists /> },
    ],
  },
  {
    title: 'JS Browser BOM',
    topics: [
      { id: 'js_window', title: 'JS Window', content: <JsWindow /> },
      { id: 'js_screen', title: 'JS Screen', content: <JsScreen /> },
      { id: 'js_location', title: 'JS Location', content: <JsLocation /> },
      { id: 'js_history', title: 'JS History', content: <JsHistory /> },
      { id: 'js_navigator', title: 'JS Navigator', content: <JsNavigator /> },
      { id: 'js_popup_alert', title: 'JS Popup Alert', content: <JsPopupAlert /> },
      { id: 'js_timing', title: 'JS Timing', content: <JsTiming /> },
      { id: 'js_cookies', title: 'JS Cookies', content: <JsCookies /> },
    ],
  },
  {
    title: 'JS Web APIs',
    topics: [
      { id: 'js_web_api_intro', title: 'Web API Intro', content: <WebApiIntro /> },
      { id: 'js_web_validation_api', title: 'Web Validation API', content: <WebValidationApi /> },
      { id: 'js_web_history_api', title: 'Web History API', content: <WebHistoryApi /> },
      { id: 'js_web_storage_api', title: 'Web Storage API', content: <WebStorageApi /> },
      { id: 'js_web_worker_api', title: 'Web Worker API', content: <WebWorkerApi /> },
      { id: 'js_web_fetch_api', title: 'Web Fetch API', content: <WebFetchApi /> },
      { id: 'js_web_geolocation_api', title: 'Web Geolocation API', content: <WebGeolocationApi /> },
    ],
  },
  {
    title: 'JS AJAX',
    topics: [
      { id: 'js_ajax_intro', title: 'AJAX Intro', content: <AjaxIntro /> },
      { id: 'js_ajax_xmlhttp', title: 'AJAX XMLHttp', content: <AjaxXmlHttp /> },
      { id: 'js_ajax_request', title: 'AJAX Request', content: <AjaxRequest /> },
      { id: 'js_ajax_response', title: 'AJAX Response', content: <AjaxResponse /> },
      { id: 'js_ajax_xml_file', title: 'AJAX XML File', content: <AjaxXmlFile /> },
      { id: 'js_ajax_php', title: 'AJAX PHP', content: <AjaxPhp /> },
      { id: 'js_ajax_asp', title: 'AJAX ASP', content: <AjaxAsp /> },
      { id: 'js_ajax_database', title: 'AJAX Database', content: <AjaxDatabase /> },
      { id: 'js_ajax_applications', title: 'AJAX Applications', content: <AjaxApplications /> },
      { id: 'js_ajax_examples', title: 'AJAX Examples', content: <AjaxExamples /> },
    ],
  },
  {
    title: 'JS JSON',
    topics: [
      { id: 'js_json_intro', title: 'JSON Intro', content: <JsonIntro /> },
      { id: 'js_json_syntax', title: 'JSON Syntax', content: <JsonSyntax /> },
      { id: 'js_json_vs_xml', title: 'JSON vs XML', content: <JsonVsXml /> },
      { id: 'js_json_data_types', title: 'JSON Data Types', content: <JsonDataTypes /> },
      { id: 'js_json_parse', title: 'JSON Parse', content: <JsonParse /> },
      { id: 'js_json_stringify', title: 'JSON Stringify', content: <JsonStringify /> },
      { id: 'js_json_objects', title: 'JSON Objects', content: <JsonObjects /> },
      { id: 'js_json_arrays', title: 'JSON Arrays', content: <JsonArrays /> },
      { id: 'js_json_server', title: 'JSON Server', content: <JsonServer /> },
      { id: 'js_json_php', title: 'JSON PHP', content: <JsonPhp /> },
      { id: 'js_json_html', title: 'JSON HTML', content: <JsonHtml /> },
      { id: 'js_json_jsonp', title: 'JSON JSONP', content: <JsonJsonp /> },
    ],
  },
  {
    title: 'JS vs jQuery',
    topics: [
      { id: 'js_jquery_selectors', title: 'jQuery Selectors', content: <JquerySelectors /> },
      { id: 'js_jquery_html', title: 'jQuery HTML', content: <JqueryHtml /> },
      { id: 'js_jquery_css', title: 'jQuery CSS', content: <JqueryCss /> },
      { id: 'js_jquery_dom', title: 'jQuery DOM', content: <JqueryDom /> },
    ],
  },
  {
    title: 'JS Graphics',
    topics: [
      { id: 'js_graphics', title: 'JS Graphics', content: <JsGraphics /> },
      { id: 'js_canvas', title: 'JS Canvas', content: <JsCanvas /> },
      { id: 'js_plotly', title: 'JS Plotly', content: <JsPlotly /> },
      { id: 'js_chartjs', title: 'JS Chart.js', content: <JsChartJs /> },
      { id: 'js_google_chart', title: 'JS Google Chart', content: <JsGoogleChart /> },
      { id: 'js_d3js', title: 'JS D3.js', content: <JsD3Js /> },
    ],
  },
  {
    title: 'JS and HTML Elements',
    topics: [
      { id: 'js_html_input', title: 'JS HTML Input', content: <JsHtmlInput /> },
      { id: 'js_html_objects', title: 'JS HTML Objects', content: <JsHtmlObjects /> },
      { id: 'js_html_events', title: 'JS HTML Events', content: <JsHtmlEventsRef /> },
    ],
  },
  {
    title: 'JS References',
    topics: [
      { id: 'js_ref_objects', title: 'JavaScript Objects', content: <JsObjectRef /> },
      { id: 'js_ref_dom_objects', title: 'HTML DOM Objects', content: <DomObjectsRef /> },
    ],
  },
];

export const SQL_TUTORIAL_DATA: SidebarSection[] = [
  {
    title: 'SQL Tutorial',
    topics: [
      { id: 'sql_home', title: 'SQL HOME', content: <SqlHome /> },
      { id: 'sql_intro', title: 'SQL Intro', content: <SqlIntro /> },
      { id: 'sql_syntax', title: 'SQL Syntax', content: <SqlSyntax /> },
      { id: 'sql_select', title: 'SQL Select', content: <SqlSelect /> },
      { id: 'sql_select_distinct', title: 'SQL Select Distinct', content: <SqlSelectDistinct /> },
      { id: 'sql_where', title: 'SQL Where', content: <SqlWhere /> },
      { id: 'sql_order_by', title: 'SQL Order By', content: <SqlOrderBy /> },
      { id: 'sql_and', title: 'SQL And', content: <SqlAnd /> },
      { id: 'sql_or', title: 'SQL Or', content: <SqlOr /> },
      { id: 'sql_not', title: 'SQL Not', content: <SqlNot /> },
      { id: 'sql_insert_into', title: 'SQL Insert Into', content: <SqlInsertInto /> },
      { id: 'sql_null_values', title: 'SQL Null Values', content: <SqlNullValues /> },
      { id: 'sql_update', title: 'SQL Update', content: <SqlUpdate /> },
      { id: 'sql_delete', title: 'SQL Delete', content: <SqlDelete /> },
      { id: 'sql_select_top', title: 'SQL Select Top', content: <SqlSelectTop /> },
      { id: 'sql_aggregate_functions', title: 'SQL Aggregate Functions', content: <SqlAggregateFunctions /> },
      { id: 'sql_min_and_max', title: 'SQL Min and Max', content: <SqlMinAndMax /> },
      { id: 'sql_count', title: 'SQL Count', content: <SqlCount /> },
      { id: 'sql_sum', title: 'SQL Sum', content: <SqlSum /> },
      { id: 'sql_avg', title: 'SQL Avg', content: <SqlAvg /> },
      { id: 'sql_like', title: 'SQL Like', content: <SqlLike /> },
      { id: 'sql_wildcards', title: 'SQL Wildcards', content: <SqlWildcards /> },
      { id: 'sql_in', title: 'SQL In', content: <SqlIn /> },
      { id: 'sql_between', title: 'SQL Between', content: <SqlBetween /> },
      { id: 'sql_aliases', title: 'SQL Aliases', content: <SqlAliases /> },
      { id: 'sql_joins', title: 'SQL Joins', content: <SqlJoins /> },
      { id: 'sql_inner_join', title: 'SQL Inner Join', content: <SqlInnerJoin /> },
      { id: 'sql_left_join', title: 'SQL Left Join', content: <SqlLeftJoin /> },
      { id: 'sql_right_join', title: 'SQL Right Join', content: <SqlRightJoin /> },
      { id: 'sql_full_join', title: 'SQL Full Join', content: <SqlFullJoin /> },
      { id: 'sql_self_join', title: 'SQL Self Join', content: <SqlSelfJoin /> },
      { id: 'sql_union', title: 'SQL Union', content: <SqlUnion /> },
      { id: 'sql_union_all', title: 'SQL Union All', content: <SqlUnionAll /> },
      { id: 'sql_group_by', title: 'SQL Group By', content: <SqlGroupBy /> },
      { id: 'sql_having', title: 'SQL Having', content: <SqlHaving /> },
      { id: 'sql_exists', title: 'SQL Exists', content: <SqlExists /> },
      { id: 'sql_any_all', title: 'SQL Any, All', content: <SqlAnyAll /> },
      { id: 'sql_select_into', title: 'SQL Select Into', content: <SqlSelectInto /> },
      { id: 'sql_insert_into_select', title: 'SQL Insert Into Select', content: <SqlInsertIntoSelect /> },
      { id: 'sql_case', title: 'SQL Case', content: <SqlCase /> },
      { id: 'sql_null_functions', title: 'SQL Null Functions', content: <SqlNullFunctions /> },
      { id: 'sql_stored_procedures', title: 'SQL Stored Procedures', content: <SqlStoredProcedures /> },
      { id: 'sql_comments', title: 'SQL Comments', content: <SqlComments /> },
      { id: 'sql_operators', title: 'SQL Operators', content: <SqlOperators /> },
    ]
  },
  {
    title: 'SQL Database',
    topics: [
      { id: 'sql_create_db', title: 'SQL Create DB', content: <SqlCreateDb /> },
      { id: 'sql_drop_db', title: 'SQL Drop DB', content: <SqlDropDb /> },
      { id: 'sql_backup_db', title: 'SQL Backup DB', content: <SqlBackupDb /> },
      { id: 'sql_create_table', title: 'SQL Create Table', content: <SqlCreateTable /> },
      { id: 'sql_drop_table', title: 'SQL Drop Table', content: <SqlDropTable /> },
      { id: 'sql_alter_table', title: 'SQL Alter Table', content: <SqlAlterTable /> },
      { id: 'sql_constraints', title: 'SQL Constraints', content: <SqlConstraints /> },
      { id: 'sql_not_null', title: 'SQL Not Null', content: <SqlNotNull /> },
      { id: 'sql_unique', title: 'SQL Unique', content: <SqlUnique /> },
      { id: 'sql_primary_key', title: 'SQL Primary Key', content: <SqlPrimaryKey /> },
      { id: 'sql_foreign_key', title: 'SQL Foreign Key', content: <SqlForeignKey /> },
      { id: 'sql_check', title: 'SQL Check', content: <SqlCheck /> },
      { id: 'sql_default', title: 'SQL Default', content: <SqlDefault /> },
      { id: 'sql_index', title: 'SQL Index', content: <SqlIndex /> },
      { id: 'sql_auto_increment', title: 'SQL Auto Increment', content: <SqlAutoIncrement /> },
      { id: 'sql_dates', title: 'SQL Dates', content: <SqlDates /> },
      { id: 'sql_views', title: 'SQL Views', content: <SqlViews /> },
      { id: 'sql_injection', title: 'SQL Injection', content: <SqlInjection /> },
      { id: 'sql_hosting', title: 'SQL Hosting', content: <SqlHosting /> },
      { id: 'sql_data_types', title: 'SQL Data Types', content: <SqlDataTypes /> },
    ]
  },
  {
    title: 'SQL References',
    topics: [
      { id: 'sql_keywords', title: 'SQL Keywords', content: <SqlKeywords /> },
      { id: 'mysql_functions', title: 'MySQL Functions', content: <MySqlFunctions /> },
      { id: 'sql_server_functions', title: 'SQL Server Functions', content: <SqlServerFunctions /> },
      { id: 'ms_access_functions', title: 'MS Access Functions', content: <MsAccessFunctions /> },
      { id: 'sql_quick_ref', title: 'SQL Quick Ref', content: <SqlQuickRef /> },
    ]
  },
  {
    title: 'SQL Examples',
    topics: [
      { id: 'sql_examples', title: 'SQL Examples', content: <SqlExamples /> },
      { id: 'sql_editor', title: 'SQL Editor', content: <SqlEditor /> },
      { id: 'sql_exercises', title: 'SQL Exercises', content: <SqlExercises /> },
      { id: 'sql_server', title: 'SQL Server', content: <SqlServer /> },
      { id: 'sql_syllabus', title: 'SQL Syllabus', content: <SqlSyllabus /> },
      { id: 'sql_study_plan', title: 'SQL Study Plan', content: <SqlStudyPlan /> },
      { id: 'sql_bootcamp', title: 'SQL Bootcamp', content: <SqlBootcamp /> },
      { id: 'sql_certificate', title: 'SQL Certificate', content: <SqlCertificate /> },
      { id: 'sql_training', title: 'SQL Training', content: <SqlTraining /> },
    ]
  }
];

export const PYTHON_TUTORIAL_DATA: SidebarSection[] = [
  {
    title: 'Python Tutorial',
    topics: [
      { id: 'python_home', title: 'Python HOME', content: <PythonHome /> },
      { id: 'python_intro', title: 'Python Intro', content: <PythonIntro /> },
      { id: 'python_get_started', title: 'Python Get Started', content: <PythonGetStarted /> },
      { id: 'python_syntax', title: 'Python Syntax', content: <PythonSyntax /> },
      { id: 'python_comments', title: 'Python Comments', content: <PythonComments /> },
      { id: 'python_variables', title: 'Python Variables', content: <PythonVariables /> },
      { id: 'python_data_types', title: 'Python Data Types', content: <PythonDataTypes /> },
      { id: 'python_numbers', title: 'Python Numbers', content: <PythonNumbers /> },
      { id: 'python_casting', title: 'Python Casting', content: <PythonCasting /> },
      { id: 'python_strings', title: 'Python Strings', content: <PythonStrings /> },
      { id: 'python_booleans', title: 'Python Booleans', content: <PythonBooleans /> },
      { id: 'python_operators', title: 'Python Operators', content: <PythonOperators /> },
      { id: 'python_lists', title: 'Python Lists', content: <PythonLists /> },
      { id: 'python_tuples', title: 'Python Tuples', content: <PythonTuples /> },
      { id: 'python_sets', title: 'Python Sets', content: <PythonSets /> },
      { id: 'python_dictionaries', title: 'Python Dictionaries', content: <PythonDictionaries /> },
      { id: 'python_if_else', title: 'Python If...Else', content: <PythonIfElse /> },
      { id: 'python_match', title: 'Python Match', content: <PythonMatch /> },
      { id: 'python_while_loops', title: 'Python While Loops', content: <PythonWhileLoops /> },
      { id: 'python_for_loops', title: 'Python For Loops', content: <PythonForLoops /> },
      { id: 'python_functions', title: 'Python Functions', content: <PythonFunctions /> },
      { id: 'python_decorators', title: 'Python Decorators', content: <PythonDecorators /> },
      { id: 'python_range', title: 'Python Range', content: <PythonRange /> },
      { id: 'python_lambda', title: 'Python Lambda', content: <PythonLambda /> },
      { id: 'python_arrays', title: 'Python Arrays', content: <PythonArrays /> },
      { id: 'python_oop', title: 'Python OOP', content: <PythonOOP /> },
      { id: 'python_classes_objects', title: 'Python Classes/Objects', content: <PythonClassesObjects /> },
      { id: 'python_inheritance', title: 'Python Inheritance', content: <PythonInheritance /> },
      { id: 'python_iterators', title: 'Python Iterators', content: <PythonIterators /> },
      { id: 'python_polymorphism', title: 'Python Polymorphism', content: <PythonPolymorphism /> },
      { id: 'python_scope', title: 'Python Scope', content: <PythonScope /> },
      { id: 'python_modules', title: 'Python Modules', content: <PythonModules /> },
      { id: 'python_dates', title: 'Python Dates', content: <PythonDates /> },
      { id: 'python_math', title: 'Python Math', content: <PythonMath /> },
      { id: 'python_json', title: 'Python JSON', content: <PythonJSON /> },
      { id: 'python_regex', title: 'Python RegEx', content: <PythonRegEx /> },
      { id: 'python_pip', title: 'Python PIP', content: <PythonPIP /> },
      { id: 'python_try_except', title: 'Python Try...Except', content: <PythonTryExcept /> },
      { id: 'python_string_formatting', title: 'Python String Formatting', content: <PythonStringFormatting /> },
      { id: 'python_none', title: 'Python None', content: <PythonNone /> },
      { id: 'python_user_input', title: 'Python User Input', content: <PythonUserInput /> },
      { id: 'python_virtualenv', title: 'Python VirtualEnv', content: <PythonVirtualEnv /> },
    ]
  },
  {
    title: 'File Handling',
    topics: [
      { id: 'python_file_handling', title: 'Python File Handling', content: <PythonFileHandling /> },
      { id: 'python_read_files', title: 'Python Read Files', content: <PythonReadFiles /> },
      { id: 'python_write_create_files', title: 'Python Write/Create Files', content: <PythonWriteCreateFiles /> },
      { id: 'python_delete_files', title: 'Python Delete Files', content: <PythonDeleteFiles /> },
    ]
  }
];

export const NUMPY_TUTORIAL_DATA: SidebarSection[] = [
  {
    title: 'NumPy Tutorial',
    topics: [
      { id: 'numpy_home', title: 'NumPy HOME', content: <NumpyHome /> },
      { id: 'numpy_intro', title: 'NumPy Intro', content: <NumpyIntro /> },
    ]
  },
  {
    title: 'Array Creation',
    topics: [
      { id: 'np_array', title: 'np.array()', content: <NpArray /> },
      { id: 'np_arange', title: 'np.arange()', content: <NpArange /> },
      { id: 'np_linspace', title: 'np.linspace()', content: <NpLinspace /> },
      { id: 'np_zeros', title: 'np.zeros()', content: <NpZeros /> },
      { id: 'np_ones', title: 'np.ones()', content: <NpOnes /> },
      { id: 'np_empty', title: 'np.empty()', content: <NpEmpty /> },
      { id: 'np_eye', title: 'np.eye()', content: <NpEye /> },
      { id: 'np_full', title: 'np.full()', content: <NpFull /> },
    ]
  },
  {
    title: 'Core Properties',
    topics: [
      { id: 'np_shape_dimensions', title: 'Shape & Dimensions', content: <NpShapeDimensions /> },
      { id: 'np_data_types', title: 'Data Types', content: <NpDataTypes /> },
      { id: 'np_broadcasting', title: 'Broadcasting', content: <NpBroadcasting /> },
    ]
  },
  {
    title: 'Indexing & Slicing',
    topics: [
      { id: 'np_indexing', title: 'Indexing', content: <NpIndexing /> },
      { id: 'np_slicing', title: 'Slicing', content: <NpSlicing /> },
      { id: 'np_advanced_indexing', title: 'Advanced Indexing', content: <NpAdvancedIndexing /> },
      { id: 'np_iterating', title: 'Iterating', content: <NpIterating /> },
    ]
  },
  {
    title: 'Sorting & Filtering',
    topics: [
      { id: 'np_sort', title: 'np.sort()', content: <NpSort /> },
      { id: 'np_where', title: 'np.where()', content: <NpWhere /> },
      { id: 'np_extract', title: 'np.extract()', content: <NpExtract /> },
    ]
  },
  {
    title: 'Random Module',
    topics: [
      { id: 'np_random_intro', title: 'Random Intro', content: <NpRandomIntro /> },
      { id: 'np_random_distributions', title: 'Distributions', content: <NpRandomDistributions /> },
    ]
  },
  {
    title: 'Set Operations',
    topics: [
      { id: 'np_unique', title: 'np.unique()', content: <NpUnique /> },
      { id: 'np_set_operations', title: 'Set Operations', content: <NpSetOperations /> },
    ]
  },
  {
    title: 'I/O Operations',
    topics: [
      { id: 'np_save_load', title: 'Save / Load (.npy)', content: <NpSaveLoad /> },
      { id: 'np_txt_files', title: 'Text Files (.txt)', content: <NpTxtFiles /> },
    ]
  },
  {
    title: 'Array Manipulation',
    topics: [
      { id: 'np_reshape', title: 'np.reshape()', content: <NpReshape /> },
      { id: 'np_ravel', title: 'np.ravel()', content: <NpRavel /> },
      { id: 'np_flatten', title: 'np.flatten()', content: <NpFlatten /> },
      { id: 'np_transpose', title: 'np.transpose()', content: <NpTranspose /> },
      { id: 'np_concatenate', title: 'np.concatenate()', content: <NpConcatenate /> },
      { id: 'np_vstack', title: 'np.vstack()', content: <NpVstack /> },
      { id: 'np_hstack', title: 'np.hstack()', content: <NpHstack /> },
      { id: 'np_split', title: 'np.split()', content: <NpSplit /> },
      { id: 'np_append', title: 'np.append()', content: <NpAppend /> },
      { id: 'np_insert', title: 'np.insert()', content: <NpInsert /> },
      { id: 'np_delete', title: 'np.delete()', content: <NpDelete /> },
    ]
  },
  {
    title: 'Math Operations',
    topics: [
      { id: 'numpy_math_operations', title: 'Math Overview', content: <NumpyMathOperations /> },
      { id: 'numpy_basic_arithmetic', title: 'Basic Arithmetic', content: <BasicArithmetic /> },
      { id: 'np_add', title: 'np.add()', content: <NpAdd /> },
      { id: 'np_subtract', title: 'np.subtract()', content: <NpSubtract /> },
      { id: 'np_multiply', title: 'np.multiply()', content: <NpMultiply /> },
      { id: 'np_divide', title: 'np.divide()', content: <NpDivide /> },
      { id: 'np_power', title: 'np.power()', content: <NpPower /> },
      { id: 'np_mod', title: 'np.remainder()', content: <NpMod /> },
      { id: 'np_absolute', title: 'np.absolute()', content: <NpAbsolute /> },
      { id: 'np_sin', title: 'np.sin()', content: <NpSin /> },
      { id: 'np_cos', title: 'np.cos()', content: <NpCos /> },
      { id: 'np_tan', title: 'np.tan()', content: <NpTan /> },
      { id: 'np_exp', title: 'np.exp()', content: <NpExp /> },
      { id: 'np_log', title: 'np.log()', content: <NpLog /> },
      { id: 'np_log10', title: 'np.log10()', content: <NpLog10 /> },
      { id: 'np_sqrt', title: 'np.sqrt()', content: <NpSqrt /> },
    ]
  },
  {
    title: 'Statistics',
    topics: [
      { id: 'numpy_aggregations_stats', title: 'Aggregations', content: <AggregationsAndStatistics /> },
      { id: 'np_sum', title: 'np.sum()', content: <NpSum /> },
      { id: 'np_mean', title: 'np.mean()', content: <NpMean /> },
      { id: 'np_median', title: 'np.median()', content: <NpMedian /> },
      { id: 'np_std', title: 'np.std()', content: <NpStd /> },
      { id: 'np_var', title: 'np.var()', content: <NpVar /> },
      { id: 'np_min', title: 'np.min()', content: <NpMin /> },
      { id: 'np_max', title: 'np.max()', content: <NpMax /> },
      { id: 'np_argmin', title: 'np.argmin()', content: <NpArgmin /> },
      { id: 'np_argmax', title: 'np.argmax()', content: <NpArgmax /> },
      { id: 'np_percentile', title: 'np.percentile()', content: <NpPercentile /> },
    ]
  },
  {
    title: 'Linear Algebra',
    topics: [
      { id: 'numpy_linear_algebra', title: 'LinAlg Overview', content: <LinearAlgebra /> },
      { id: 'np_dot', title: 'np.dot()', content: <NpDot /> },
      { id: 'np_matmul', title: 'np.matmul()', content: <NpMatmul /> },
      { id: 'np_linalg_inv', title: 'linalg.inv()', content: <NpLinalgInv /> },
      { id: 'np_linalg_det', title: 'linalg.det()', content: <NpLinalgDet /> },
      { id: 'np_linalg_eig', title: 'linalg.eig()', content: <NpLinalgEig /> },
      { id: 'np_linalg_solve', title: 'linalg.solve()', content: <NpLinalgSolve /> },
    ]
  }
];

export const PANDAS_TUTORIAL_DATA: SidebarSection[] = [
  {
    title: 'Pandas Tutorial',
    topics: [
      { id: 'pandas_home', title: 'Pandas HOME', content: <PandasHome /> },
      { id: 'pandas_intro', title: 'Pandas Intro', content: <PandasIntro /> },
    ]
  },
  {
    title: 'Core Data Structures',
    topics: [
      { id: 'pd_series', title: 'Series', content: <PdSeries /> },
      { id: 'pd_dataframe', title: 'DataFrame', content: <PdDataFrame /> },
      { id: 'pd_index', title: 'Index', content: <PdIndex /> },
    ]
  },
  {
    title: 'Data I/O',
    topics: [
      { id: 'pd_read_csv', title: 'pd.read_csv()', content: <PdReadCsv /> },
      { id: 'pd_read_excel', title: 'pd.read_excel()', content: <PdReadExcel /> },
      { id: 'pd_read_json', title: 'pd.read_json()', content: <PdReadJson /> },
      { id: 'pd_read_sql', title: 'pd.read_sql()', content: <PdReadSql /> },
      { id: 'pd_to_csv', title: 'df.to_csv()', content: <PdToCsv /> },
      { id: 'pd_to_excel', title: 'df.to_excel()', content: <PdToExcel /> },
    ]
  },
  {
    title: 'Inspecting Data',
    topics: [
      { id: 'pd_head_tail', title: 'head() & tail()', content: <PdHeadTail /> },
      { id: 'pd_info', title: 'df.info()', content: <PdInfo /> },
      { id: 'pd_describe', title: 'df.describe()', content: <PdDescribe /> },
      { id: 'pd_shape', title: 'df.shape', content: <PdShape /> },
      { id: 'pd_dtypes', title: 'df.dtypes', content: <PdDtypes /> },
      { id: 'pd_columns', title: 'df.columns', content: <PdColumns /> },
    ]
  },
  {
    title: 'Selecting & Subsetting',
    topics: [
      { id: 'pd_loc', title: 'df.loc[]', content: <PdLoc /> },
      { id: 'pd_iloc', title: 'df.iloc[]', content: <PdIloc /> },
      { id: 'pd_boolean_indexing', title: 'Boolean Indexing', content: <PdBooleanIndexing /> },
      { id: 'pd_query', title: 'df.query()', content: <PdQuery /> },
      { id: 'pd_drop', title: 'df.drop()', content: <PdDrop /> },
      { id: 'pd_filter', title: 'df.filter()', content: <PdFilter /> },
    ]
  },
  {
    title: 'Cleaning & Missing Data',
    topics: [
      { id: 'pd_isna', title: 'isna() / isnull()', content: <PdIsna /> },
      { id: 'pd_dropna', title: 'df.dropna()', content: <PdDropna /> },
      { id: 'pd_fillna', title: 'df.fillna()', content: <PdFillna /> },
      { id: 'pd_replace', title: 'df.replace()', content: <PdReplace /> },
      { id: 'pd_duplicated', title: 'df.duplicated()', content: <PdDuplicated /> },
      { id: 'pd_drop_duplicates', title: 'df.drop_duplicates()', content: <PdDropDuplicates /> },
    ]
  },
  {
    title: 'Manipulation & Operations',
    topics: [
      { id: 'pd_apply', title: 'apply() & applymap()', content: <PdApply /> },
      { id: 'pd_map', title: 'Series.map()', content: <PdMap /> },
      { id: 'pd_rename', title: 'df.rename()', content: <PdRename /> },
      { id: 'pd_sort_values', title: 'sort_values()', content: <PdSortValues /> },
      { id: 'pd_sort_index', title: 'sort_index()', content: <PdSortIndex /> },
      { id: 'pd_astype', title: 'astype()', content: <PdAstype /> },
      { id: 'pd_value_counts', title: 'value_counts()', content: <PdValueCounts /> },
    ]
  },
  {
    title: 'Grouping & Aggregation',
    topics: [
      { id: 'pd_groupby', title: 'df.groupby()', content: <PdGroupBy /> },
      { id: 'pd_agg', title: 'df.agg()', content: <PdAgg /> },
      { id: 'pd_pivot_table', title: 'pd.pivot_table()', content: <PdPivotTable /> },
      { id: 'pd_cross_tab', title: 'pd.crosstab()', content: <PdCrossTab /> },
    ]
  },
  {
    title: 'Merging & Joining',
    topics: [
      { id: 'pd_merge', title: 'pd.merge()', content: <PdMerge /> },
      { id: 'pd_concat', title: 'pd.concat()', content: <PdConcat /> },
      { id: 'pd_join', title: 'df.join()', content: <PdJoin /> },
    ]
  },
  {
    title: 'Time Series & Dates',
    topics: [
      { id: 'pd_to_datetime', title: 'pd.to_datetime()', content: <PdToDatetime /> },
      { id: 'pd_date_range', title: 'pd.date_range()', content: <PdDateRange /> },
      { id: 'pd_shift', title: 'df.shift()', content: <PdShift /> },
      { id: 'pd_resample', title: 'df.resample()', content: <PdResample /> },
    ]
  }
];

export const MATPLOTLIB_TUTORIAL_DATA: SidebarSection[] = [
  {
    title: 'Matplotlib Tutorial',
    topics: [
      { id: 'matplotlib_home', title: 'Matplotlib HOME', content: <MatplotlibHome /> },
      { id: 'matplotlib_intro', title: 'Matplotlib Intro', content: <MatplotlibIntro /> },
    ]
  },
  {
    title: 'Basics & Formatting',
    topics: [
      { id: 'mpl_pyplot', title: 'Pyplot', content: <MplPyplot /> },
      { id: 'mpl_plotting', title: 'Plotting', content: <MplPlotting /> },
      { id: 'mpl_markers', title: 'Markers', content: <MplMarkers /> },
      { id: 'mpl_line', title: 'Line', content: <MplLine /> },
      { id: 'mpl_labels', title: 'Labels', content: <MplLabels /> },
      { id: 'mpl_title', title: 'Title', content: <MplTitle /> },
      { id: 'mpl_grid', title: 'Grid', content: <MplGrid /> },
      { id: 'mpl_subplots', title: 'Subplots', content: <MplSubplots /> },
    ]
  },
  {
    title: 'Plot Types',
    topics: [
      { id: 'mpl_scatter', title: 'Scatter', content: <MplScatter /> },
      { id: 'mpl_bars', title: 'Bars', content: <MplBars /> },
      { id: 'mpl_histograms', title: 'Histograms', content: <MplHistograms /> },
      { id: 'mpl_pie_charts', title: 'Pie Charts', content: <MplPieCharts /> },
      { id: 'mpl_box', title: 'Box Plots', content: <MplBox /> },
      { id: 'mpl_violin', title: 'Violin Plots', content: <MplViolin /> },
    ]
  },
  {
    title: 'Advanced Customization',
    topics: [
      { id: 'mpl_legend', title: 'Legend', content: <MplLegend /> },
      { id: 'mpl_colors', title: 'Colors', content: <MplColors /> },
      { id: 'mpl_ticks', title: 'Ticks', content: <MplTicks /> },
      { id: 'mpl_text', title: 'Text', content: <MplText /> },
      { id: 'mpl_annotations', title: 'Annotations', content: <MplAnnotations /> },
    ]
  },
  {
    title: 'Figures & Saving',
    topics: [
      { id: 'mpl_figure', title: 'Figure Object', content: <MplFigure /> },
      { id: 'mpl_savefig', title: 'Saving Figures', content: <MplSavefig /> },
      { id: 'mpl_styles', title: 'Stylesheets', content: <MplStyles /> },
    ]
  }
];

export const SEABORN_TUTORIAL_DATA: SidebarSection[] = [
  {
    title: 'Seaborn Tutorial',
    topics: [
      { id: 'seaborn_home', title: 'Seaborn HOME', content: <SeabornHome /> },
      { id: 'seaborn_intro', title: 'Seaborn Intro', content: <SeabornIntro /> },
    ]
  },
  {
    title: 'Relational Plots',
    topics: [
      { id: 'sb_relplot', title: 'sns.relplot()', content: <SbRelplot /> },
      { id: 'sb_scatterplot', title: 'sns.scatterplot()', content: <SbScatterplot /> },
      { id: 'sb_lineplot', title: 'sns.lineplot()', content: <SbLineplot /> },
    ]
  },
  {
    title: 'Distribution Plots',
    topics: [
      { id: 'sb_displot', title: 'sns.displot()', content: <SbDisplot /> },
      { id: 'sb_histplot', title: 'sns.histplot()', content: <SbHistplot /> },
      { id: 'sb_kdeplot', title: 'sns.kdeplot()', content: <SbKdeplot /> },
      { id: 'sb_ecdfplot', title: 'sns.ecdfplot()', content: <SbEcdfplot /> },
      { id: 'sb_rugplot', title: 'sns.rugplot()', content: <SbRugplot /> },
    ]
  },
  {
    title: 'Categorical Plots',
    topics: [
      { id: 'sb_catplot', title: 'sns.catplot()', content: <SbCatplot /> },
      { id: 'sb_stripplot', title: 'sns.stripplot()', content: <SbStripplot /> },
      { id: 'sb_swarmplot', title: 'sns.swarmplot()', content: <SbSwarmplot /> },
      { id: 'sb_boxplot', title: 'sns.boxplot()', content: <SbBoxplot /> },
      { id: 'sb_violinplot', title: 'sns.violinplot()', content: <SbViolinplot /> },
      { id: 'sb_boxenplot', title: 'sns.boxenplot()', content: <SbBoxenplot /> },
      { id: 'sb_pointplot', title: 'sns.pointplot()', content: <SbPointplot /> },
      { id: 'sb_barplot', title: 'sns.barplot()', content: <SbBarplot /> },
      { id: 'sb_countplot', title: 'sns.countplot()', content: <SbCountplot /> },
    ]
  },
  {
    title: 'Regression Plots',
    topics: [
      { id: 'sb_lmplot', title: 'sns.lmplot()', content: <SbLmplot /> },
      { id: 'sb_regplot', title: 'sns.regplot()', content: <SbRegplot /> },
      { id: 'sb_residplot', title: 'sns.residplot()', content: <SbResidplot /> },
    ]
  },
  {
    title: 'Matrix Plots',
    topics: [
      { id: 'sb_heatmap', title: 'sns.heatmap()', content: <SbHeatmap /> },
      { id: 'sb_clustermap', title: 'sns.clustermap()', content: <SbClustermap /> },
    ]
  },
  {
    title: 'Multi-plot Grids',
    topics: [
      { id: 'sb_facetgrid', title: 'FacetGrid', content: <SbFacetGrid /> },
      { id: 'sb_pairplot', title: 'sns.pairplot()', content: <SbPairplot /> },
      { id: 'sb_jointplot', title: 'sns.jointplot()', content: <SbJointplot /> },
    ]
  },
  {
    title: 'Styling & Themes',
    topics: [
      { id: 'sb_set_theme', title: 'sns.set_theme()', content: <SbSetTheme /> },
      { id: 'sb_color_palettes', title: 'Color Palettes', content: <SbColorPalettes /> },
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
  js: {
    data: JS_TUTORIAL_DATA,
    homeTopicId: 'js_home',
  },
  sql: {
    data: SQL_TUTORIAL_DATA,
    homeTopicId: 'sql_home',
  },
  python: {
    data: PYTHON_TUTORIAL_DATA,
    homeTopicId: 'python_home',
  },
  numpy: {
    data: NUMPY_TUTORIAL_DATA,
    homeTopicId: 'numpy_home',
  },
  pandas: {
    data: PANDAS_TUTORIAL_DATA,
    homeTopicId: 'pandas_home',
  },
  matplotlib: {
    data: MATPLOTLIB_TUTORIAL_DATA,
    homeTopicId: 'matplotlib_home',
  },
  seaborn: {
    data: SEABORN_TUTORIAL_DATA,
    homeTopicId: 'seaborn_home',
  },
};