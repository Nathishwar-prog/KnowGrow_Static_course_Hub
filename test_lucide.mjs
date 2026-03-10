import * as lucide from 'lucide-react';
import fs from 'fs';

let output = '';
const icons = ['Terminal', 'Lightbulb', 'MessageSquareText', 'Settings', 'Zap', 'Layers', 'Rows', 'Columns', 'DatabaseBackup', 'CheckCircle2', 'AlertTriangle', 'Blocks'];
icons.forEach(icon => {
  if (!lucide[icon]) {
    output += `Missing icon: ${icon}\n`;
  } else {
    output += `Found icon: ${icon}\n`;
  }
});
fs.writeFileSync('icon_results.txt', output);
