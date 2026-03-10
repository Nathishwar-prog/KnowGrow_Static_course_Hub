import React from 'react';
import { renderToString } from 'react-dom/server';
import PdConcat from './data/pandas/PdConcat';

try {
  const html = renderToString(React.createElement(PdConcat));
  console.log('Render successful: ', html.substring(0, 50));
} catch (e) {
  console.error('Render failed:', e);
}
