import React from 'react';
import type { SidebarSection } from '../types';
import ComingSoon from './Comming';
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
import CssFlexboxIntro from './css/CssFlexboxIntro';
import CssFlexContainer from './css/CssFlexContainer';
import CssFlexItems from './css/CssFlexItems';
import CssFlexResponsive from './css/CssFlexResponsive';
import CssGridIntro from './css/CssGridIntro';
import CssGridColumnsRows from './css/CssGridColumnsRows';
import CssGridLines from './css/CssGridLines';
import CssGridContainer from './css/CssGridContainer';
import CssGridItem from './css/CssGridItem';
import CssSupports from './css/CssSupports';
import CssRwdIntro from './css/CssRwdIntro';
import CssRwdViewport from './css/CssRwdViewport';
import CssRwdGridView from './css/CssRwdGridView';
import CssRwdMediaQueries from './css/CssRwdMediaQueries';
import CssRwdImages from './css/CssRwdImages';
import CssRwdVideos from './css/CssRwdVideos';
import CssRwdFrameworks from './css/CssRwdFrameworks';
import CssRwdTemplates from './css/CssRwdTemplates';
import CssSassTutorial from './css/CssSassTutorial';

// JS Tutorial Topics
import JsHome from './js/JsHome';
import JsIntroduction from './js/JsIntroduction';
import JsWhereTo from './js/JsWhereTo';
import JsOutput from './js/JsOutput';
import JsSyntax from './js/JsSyntax';
import JsStatements from './js/JsStatements';
import JsComments from './js/JsComments';
import JsVariables from './js/JsVariables';
import JsDataTypes from './js/JsDataTypes';
import JsLet from './js/JsLet';
import JsConst from './js/JsConst';
import JsOperators from './js/JsOperators';
import JsArithmetic from './js/JsArithmetic';
import JsAssignment from './js/JsAssignment';
import JsFunctions from './js/JsFunctions';
import JsObjects from './js/JsObjects';
import JsEvents from './js/JsEvents';
import JsStrings from './js/JsStrings';
import JsStringTemplates from './js/JsStringTemplates';
import JsNumbers from './js/JsNumbers';
import JsArrays from './js/JsArrays';
import JsDates from './js/JsDates';
import JsMath from './js/JsMath';
import JsBooleans from './js/JsBooleans';
import JsComparisons from './js/JsComparisons';
import JsLogical from './js/JsLogical';
import JsIfElse from './js/JsIfElse';
import JsSwitch from './js/JsSwitch';
import JsLoops from './js/JsLoops';
import JsBreak from './js/JsBreak';
import JsContinue from './js/JsContinue';
import JsErrors from './js/JsErrors';
import JsScope from './js/JsScope';
import JsCodeBlocks from './js/JsCodeBlocks';
import JsUtf8Characters from './js/JsUtf8Characters';
import JsNews from './js/JsNews';
import JsKeywordsRef from './js/JsKeywordsRef';
import JsKeywordsReserved from './js/JsKeywordsReserved';
import JsComparisonOperators from './js/JsComparisonOperators';
import JsLogicalOperators from './js/JsLogicalOperators';
import JsBitwiseOperators from './js/JsBitwiseOperators';
import JsOperatorRef from './js/JsOperatorRef';
import JsOperatorPrecedence from './js/JsOperatorPrecedence';
import JsTypeof from './js/JsTypeof';
import JsToString from './js/JsToString';
import JsTypeConversion from './js/JsTypeConversion';
import JsStringMethods from './js/JsStringMethods';
import JsStringSearch from './js/JsStringSearch';
import JsStringRef from './js/JsStringRef';
import JsNumberMethods from './js/JsNumberMethods';
import JsNumberProperties from './js/JsNumberProperties';
import JsNumberRef from './js/JsNumberRef';
import JsMathRef from './js/JsMathRef';
import JsRandom from './js/JsRandom';
import JsBigInt from './js/JsBigInt';
import JsBitwise from './js/JsBitwise';
import JsDateFormats from './js/JsDateFormats';
import JsDateGet from './js/JsDateGet';
import JsDateSet from './js/JsDateSet';
import JsDateRef from './js/JsDateRef';
import JsArrayMethods from './js/JsArrayMethods';
import JsArraySearch from './js/JsArraySearch';
import JsArraySort from './js/JsArraySort';
import JsArrayIterations from './js/JsArrayIterations';
import JsArrayRef from './js/JsArrayRef';
import JsArrayConst from './js/JsArrayConst';
import JsFunctionDefinitions from './js/JsFunctionDefinitions';
import JsFunctionArrows from './js/JsFunctionArrows';
import JsFunctionParameters from './js/JsFunctionParameters';
import JsFunctionInvocation from './js/JsFunctionInvocation';
import JsFunctionThis from './js/JsFunctionThis';
import JsFunctionCall from './js/JsFunctionCall';
import JsFunctionApply from './js/JsFunctionApply';
import JsFunctionBind from './js/JsFunctionBind';
import JsFunctionClosures from './js/JsFunctionClosures';
import JsObjectDefinitions from './js/JsObjectDefinitions';
import JsObjectProperties from './js/JsObjectProperties';
import JsObjectMethods from './js/JsObjectMethods';
import JsObjectDisplay from './js/JsObjectDisplay';
import JsObjectConstructors from './js/JsObjectConstructors';
import JsObjectThis from './js/JsObjectThis';
import JsObjectDestructuring from './js/JsObjectDestructuring';
import JsObjectPrototypes from './js/JsObjectPrototypes';
import JsObjectIterations from './js/JsObjectIterations';
import JsObjectManagement from './js/JsObjectManagement';
import JsObjectGetSet from './js/JsObjectGetSet';
import JsObjectProtection from './js/JsObjectProtection';
import JsObjectRef from './js/JsObjectRef';
import JsClasses from './js/JsClasses';
import JsClassInheritance from './js/JsClassInheritance';
import JsClassStatic from './js/JsClassStatic';
import JsSets from './js/JsSets';
import JsSetMethods from './js/JsSetMethods';
import JsSetLogic from './js/JsSetLogic';
import JsSetWeakSet from './js/JsSetWeakSet';
import JsSetRef from './js/JsSetRef';
import JsMaps from './js/JsMaps';
import JsMapMethods from './js/JsMapMethods';
import JsMapWeakMap from './js/JsMapWeakMap';
import JsMapRef from './js/JsMapRef';
import JsLoopFor from './js/JsLoopFor';
import JsLoopWhile from './js/JsLoopWhile';
import JsLoopForIn from './js/JsLoopForIn';
import JsLoopForOf from './js/JsLoopForOf';
import JsIterables from './js/JsIterables';
import JsIterators from './js/JsIterators';
import JsGenerators from './js/JsGenerators';
import JsRegExp from './js/JsRegExp';
import JsRegExpFlags from './js/JsRegExpFlags';
import JsRegExpClasses from './js/JsRegExpClasses';
import JsRegExpMetachars from './js/JsRegExpMetachars';
import JsRegExpAssertions from './js/JsRegExpAssertions';
import JsRegExpQuantifiers from './js/JsRegExpQuantifiers';
import JsRegExpPatterns from './js/JsRegExpPatterns';
import JsRegExpObjects from './js/JsRegExpObjects';
import JsRegExpMethods from './js/JsRegExpMethods';
import JsTypedArrays from './js/JsTypedArrays';
import JsTypedMethods from './js/JsTypedMethods';
import JsTypedRef from './js/JsTypedRef';
import JsCallbacks from './js/JsCallbacks';
import JsAsynchronous from './js/JsAsynchronous';
import JsPromises from './js/JsPromises';
import JsAsyncAwait from './js/JsAsyncAwait';
import JsStrictMode from './js/JsStrictMode';
import JsScopes from './js/JsScopes';
import JsHoisting from './js/JsHoisting';
import JsDebugging from './js/JsDebugging';
import JsModules from './js/JsModules';
import JsStyleGuide from './js/JsStyleGuide';
import JsBestPractices from './js/JsBestPractices';
import JsMistakes from './js/JsMistakes';
import JsPerformance from './js/JsPerformance';
import DomIntro from './js/DomIntro';
import DomMethods from './js/DomMethods';
import DomDocument from './js/DomDocument';
import DomElements from './js/DomElements';
import DomHtml from './js/DomHtml';
import DomForms from './js/DomForms';
import DomCss from './js/DomCss';
import DomAnimations from './js/DomAnimations';
import DomEventListener from './js/DomEventListener';
import DomNavigation from './js/DomNavigation';
import DomNodes from './js/DomNodes';
import DomCollections from './js/DomCollections';
import DomNodeLists from './js/DomNodeLists';
import JsWindow from './js/JsWindow';
import JsScreen from './js/JsScreen';
import JsLocation from './js/JsLocation';
import JsHistory from './js/JsHistory';
import JsNavigator from './js/JsNavigator';
import JsPopupAlert from './js/JsPopupAlert';
import JsTiming from './js/JsTiming';
import JsCookies from './js/JsCookies';
import WebApiIntro from './js/WebApiIntro';
import WebValidationApi from './js/WebValidationApi';
import WebHistoryApi from './js/WebHistoryApi';
import WebStorageApi from './js/WebStorageApi';
import WebWorkerApi from './js/WebWorkerApi';
import WebFetchApi from './js/WebFetchApi';
import WebGeolocationApi from './js/WebGeolocationApi';
import AjaxIntro from './js/AjaxIntro';
import AjaxXmlHttp from './js/AjaxXmlHttp';
import AjaxRequest from './js/AjaxRequest';
import AjaxResponse from './js/AjaxResponse';
import AjaxXmlFile from './js/AjaxXmlFile';
import AjaxPhp from './js/AjaxPhp';
import AjaxAsp from './js/AjaxAsp';
import AjaxDatabase from './js/AjaxDatabase';
import AjaxApplications from './js/AjaxApplications';
import AjaxExamples from './js/AjaxExamples';
import JsonIntro from './js/JsonIntro';
import JsonSyntax from './js/JsonSyntax';
import JsonVsXml from './js/JsonVsXml';
import JsonDataTypes from './js/JsonDataTypes';
import JsonParse from './js/JsonParse';
import JsonStringify from './js/JsonStringify';
import JsonObjects from './js/JsonObjects';
import JsonArrays from './js/JsonArrays';
import JsonServer from './js/JsonServer';
import JsonPhp from './js/JsonPhp';
import JsonHtml from './js/JsonHtml';
import JsonJsonp from './js/JsonJsonp';
import JquerySelectors from './js/JquerySelectors';
import JqueryHtml from './js/JqueryHtml';
import JqueryCss from './js/JqueryCss';
import JqueryDom from './js/JqueryDom';
import JsGraphics from './js/JsGraphics';
import JsCanvas from './js/JsCanvas';
import JsPlotly from './js/JsPlotly';
import JsChartJs from './js/JsChartJs';
import JsGoogleChart from './js/JsGoogleChart';
import JsD3Js from './js/JsD3Js';
import JsHtmlInput from './js/JsHtmlInput';
import JsHtmlObjects from './js/JsHtmlObjects';
import JsHtmlEventsRef from './js/JsHtmlEventsRef';
import DomObjectsRef from './js/DomObjectsRef';

// SQL Tutorial Topics
import SqlHome from './sql/SqlHome';
import SqlIntro from './sql/SqlIntro';
import SqlSyntax from './sql/SqlSyntax';
import SqlSelect from './sql/SqlSelect';
import SqlSelectDistinct from './sql/SqlSelectDistinct';
import SqlWhere from './sql/SqlWhere';
import SqlOrderBy from './sql/SqlOrderBy';
import SqlAnd from './sql/SqlAnd';
import SqlOr from './sql/SqlOr';
import SqlNot from './sql/SqlNot';
import SqlInsertInto from './sql/SqlInsertInto';
import SqlNullValues from './sql/SqlNullValues';
import SqlUpdate from './sql/SqlUpdate';
import SqlDelete from './sql/SqlDelete';
import SqlSelectTop from './sql/SqlSelectTop';
import SqlAggregateFunctions from './sql/SqlAggregateFunctions';
import SqlMinAndMax from './sql/SqlMinAndMax';
import SqlCount from './sql/SqlCount';
import SqlSum from './sql/SqlSum';
import SqlAvg from './sql/SqlAvg';
import SqlLike from './sql/SqlLike';
import SqlWildcards from './sql/SqlWildcards';
import SqlIn from './sql/SqlIn';
import SqlBetween from './sql/SqlBetween';
import SqlAliases from './sql/SqlAliases';
import SqlJoins from './sql/SqlJoins';
import SqlInnerJoin from './sql/SqlInnerJoin';
import SqlLeftJoin from './sql/SqlLeftJoin';
import SqlRightJoin from './sql/SqlRightJoin';
import SqlFullJoin from './sql/SqlFullJoin';
import SqlSelfJoin from './sql/SqlSelfJoin';
import SqlUnion from './sql/SqlUnion';
import SqlUnionAll from './sql/SqlUnionAll';
import SqlGroupBy from './sql/SqlGroupBy';
import SqlHaving from './sql/SqlHaving';
import SqlExists from './sql/SqlExists';
import SqlAnyAll from './sql/SqlAnyAll';
import SqlSelectInto from './sql/SqlSelectInto';
import SqlInsertIntoSelect from './sql/SqlInsertIntoSelect';
import SqlCase from './sql/SqlCase';
import SqlNullFunctions from './sql/SqlNullFunctions';
import SqlStoredProcedures from './sql/SqlStoredProcedures';
import SqlComments from './sql/SqlComments';
import SqlOperators from './sql/SqlOperators';
import SqlCreateDb from './sql/SqlCreateDb';
import SqlDropDb from './sql/SqlDropDb';
import SqlBackupDb from './sql/SqlBackupDb';
import SqlCreateTable from './sql/SqlCreateTable';
import SqlDropTable from './sql/SqlDropTable';
import SqlAlterTable from './sql/SqlAlterTable';
import SqlConstraints from './sql/SqlConstraints';
import SqlNotNull from './sql/SqlNotNull';
import SqlUnique from './sql/SqlUnique';
import SqlPrimaryKey from './sql/SqlPrimaryKey';
import SqlForeignKey from './sql/SqlForeignKey';
import SqlCheck from './sql/SqlCheck';
import SqlDefault from './sql/SqlDefault';
import SqlIndex from './sql/SqlIndex';
import SqlAutoIncrement from './sql/SqlAutoIncrement';
import SqlDates from './sql/SqlDates';
import SqlViews from './sql/SqlViews';
import SqlInjection from './sql/SqlInjection';
import SqlHosting from './sql/SqlHosting';
import SqlDataTypes from './sql/SqlDataTypes';
import SqlKeywords from './sql/SqlKeywords';
import MySqlFunctions from './sql/MySqlFunctions';
import SqlServerFunctions from './sql/SqlServerFunctions';
import MsAccessFunctions from './sql/MsAccessFunctions';
import SqlQuickRef from './sql/SqlQuickRef';
import SqlExamples from './sql/SqlExamples';
import SqlEditor from './sql/SqlEditor';
import SqlExercises from './sql/SqlExercises';
import SqlServer from './sql/SqlServer';
import SqlSyllabus from './sql/SqlSyllabus';
import SqlStudyPlan from './sql/SqlStudyPlan';
import SqlBootcamp from './sql/SqlBootcamp';
import SqlCertificate from './sql/SqlCertificate';
import SqlTraining from './sql/SqlTraining';

// Python Tutorial Topics
import PythonHome from './python/PythonHome';
import PythonIntro from './python/PythonIntro';
import PythonGetStarted from './python/PythonGetStarted';
import PythonSyntax from './python/PythonSyntax';
import PythonComments from './python/PythonComments';
import PythonVariables from './python/PythonVariables';
import PythonDataTypes from './python/PythonDataTypes';
import PythonNumbers from './python/PythonNumbers';
import PythonCasting from './python/PythonCasting';
import PythonStrings from './python/PythonStrings';
import PythonBooleans from './python/PythonBooleans';
import PythonOperators from './python/PythonOperators';
import PythonLists from './python/PythonLists';
import PythonTuples from './python/PythonTuples';
import PythonSets from './python/PythonSets';
import PythonDictionaries from './python/PythonDictionaries';
import PythonIfElse from './python/PythonIfElse';
import PythonMatch from './python/PythonMatch';
import PythonWhileLoops from './python/PythonWhileLoops';
import PythonForLoops from './python/PythonForLoops';
import PythonFunctions from './python/PythonFunctions';
import PythonDecorators from './python/PythonDecorators';
import PythonRange from './python/PythonRange';
import PythonLambda from './python/PythonLambda';
import PythonArrays from './python/PythonArrays';
import PythonOOP from './python/PythonOOP';
import PythonClassesObjects from './python/PythonClassesObjects';
import PythonInheritance from './python/PythonInheritance';
import PythonIterators from './python/PythonIterators';
import PythonPolymorphism from './python/PythonPolymorphism';
import PythonScope from './python/PythonScope';
import PythonModules from './python/PythonModules';
import PythonDates from './python/PythonDates';
import PythonMath from './python/PythonMath';
import PythonJSON from './python/PythonJSON';
import PythonRegEx from './python/PythonRegEx';
import PythonPIP from './python/PythonPIP';
import PythonTryExcept from './python/PythonTryExcept';
import PythonStringFormatting from './python/PythonStringFormatting';
import PythonNone from './python/PythonNone';
import PythonUserInput from './python/PythonUserInput';
import PythonVirtualEnv from './python/PythonVirtualEnv';
import PythonFileHandling from './python/PythonFileHandling';
import PythonReadFiles from './python/PythonReadFiles';
import PythonWriteCreateFiles from './python/PythonWriteCreateFiles';
import PythonDeleteFiles from './python/PythonDeleteFiles';


// Numpy Tutorial Topics

import NumpyHome from './numpy/NumpyHome';
import NumpyIntro from './numpy/NumpyIntro';


// Pandas Tutorial Topics

import PandasHome from './pandas/PandasHome';
import PandasIntro from './pandas/PandasIntro';


// MatplotLib Tutorial Topics

import MatplotlibHome from './matplotlib/MatplotlibHome';
import MatplotlibIntro from './matplotlib/MatplotlibIntro';
// Seaborn Tutorial Topics

import SeabornHome from './seaborn/SeabornHome';
import SeabornIntro from './seaborn/SeabornIntro';
import NumpyMathOperations from './numpy/MathematicalOperations';
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
        title: 'Numpy Tutorial',
        topics: [
            { id: 'numpy_home', title: 'NumPy HOME', content: <NumpyHome/> },
            { id: 'numpy_intro', title: 'NumPy Intro', content: <NumpyIntro/> },
            { id: 'numpy_math_operations', title: 'NumPy Intro', content: <NumpyMathOperations/> },
        ]
    },
];

export const PANDAS_TUTORIAL_DATA: SidebarSection[] = [
    {
        title: 'Pandas Tutorial',
        topics: [
            { id: 'pandas_home', title: 'Pandas HOME', content: <ComingSoon/> },
            { id: 'pandas_intro', title: 'Pandas Intro', content: <ComingSoon/> },
        ]
    },
];

export const MATPLOTLIB_TUTORIAL_DATA: SidebarSection[] = [
    {
        title: 'MatplotLib Tutorial',
        topics: [
            { id: 'matplotlib_home', title: 'MatplotLib HOME', content: <ComingSoon/> },
            { id: 'matplotlib_intro', title: 'MatplotLib Intro', content: <ComingSoon/> },
        ]
    },
];

export const SEABORN_TUTORIAL_DATA: SidebarSection[] = [
    {
        title: 'Seaborn Tutorial',
        topics: [
            { id: 'seaborn_home', title: 'Seaborn HOME', content: <ComingSoon/> },
            { id: 'seaborn_intro', title: 'Seaborn Intro', content: <ComingSoon /> },
        ]
    },
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