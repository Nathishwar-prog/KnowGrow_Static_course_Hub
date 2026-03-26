import React from 'react';
import type { SidebarSection } from '../types';

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
