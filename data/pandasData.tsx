import React from 'react';
import type { SidebarSection } from '../types';

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
