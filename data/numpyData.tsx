import React from 'react';
import type { SidebarSection } from '../types';

const NumpyHome = React.lazy(() => import('./numpy/NumpyHome'));
const NumpyIntro = React.lazy(() => import('./numpy/NumpyIntro'));
const NumpyMathOperations = React.lazy(() => import('./numpy/MathematicalOperations'));
const BasicArithmetic = React.lazy(() => import('./numpy/BasicArithmetic'));
const AggregationsAndStatistics = React.lazy(() => import('./numpy/AggregationsAndStatistics'));
const LinearAlgebra = React.lazy(() => import('./numpy/LinearAlgebra'));
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
