import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetFile = path.join(__dirname, 'data', 'tutorialData.tsx');
let content = fs.readFileSync(targetFile, 'utf8');

const importRegex = /^import\s+([A-Z]\w+)\s+from\s+['"](\.\/[\w/]+)['"];?/gm;
content = content.replace(importRegex, 'const $1 = React.lazy(() => import(\'$2\'));');

fs.writeFileSync(targetFile, content);
console.log('Refactored imports to React.lazy()');
