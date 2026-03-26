import type { SidebarSection } from '../types';
import { HTML_TUTORIAL_DATA } from './htmlData';
import { CSS_TUTORIAL_DATA } from './cssData';
import { JS_TUTORIAL_DATA } from './jsData';
import { SQL_TUTORIAL_DATA } from './sqlData';
import { PYTHON_TUTORIAL_DATA } from './pythonData';
import { NUMPY_TUTORIAL_DATA } from './numpyData';
import { PANDAS_TUTORIAL_DATA } from './pandasData';
import { MATPLOTLIB_TUTORIAL_DATA } from './matplotlibData';
import { SEABORN_TUTORIAL_DATA } from './seabornData';

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
