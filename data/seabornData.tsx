import React from 'react';
import type { SidebarSection } from '../types';

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
