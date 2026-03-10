import React from 'react';
import { renderToString } from 'react-dom/server';
import PdConcat from './data/pandas/PdConcat';

const tabs = ['basics', 'vertical', 'horizontal', 'advanced', 'workflow', 'tips'];

tabs.forEach(tab => {
  try {
    const el = React.createElement(PdConcat);
    // Since useState is local, we cannot easily mount different tabs using renderToString without changing state hook logic.
    // Wait, testing just component rendering doesn't test much beyond the default tab 'basics' because hooks run differently on server. 
  } catch (e) {
    console.error('Render failed:', e);
  }
});
