import React from 'react';
import type { SidebarSection } from '../types';

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
