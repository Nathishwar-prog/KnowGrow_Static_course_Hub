import React from 'react';
import type { SidebarSection } from '../types';

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
