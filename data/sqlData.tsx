import React from 'react';
import type { SidebarSection } from '../types';

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
