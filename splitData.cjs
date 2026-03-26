const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data', 'tutorialData.tsx');
const content = fs.readFileSync(filePath, 'utf-8');

// 1. Extract all React.lazy imports
const importRegex = /const (\w+) = React\.lazy\(\(\) => import\('([^']+)'\)\);/g;
const allImports = new Map(); // componentName -> full statement

let match;
while ((match = importRegex.exec(content)) !== null) {
  allImports.set(match[1], match[0]);
}

// 2. Extract each course's export block
const courseBlocks = [
  'HTML_TUTORIAL_DATA',
  'CSS_TUTORIAL_DATA',
  'JS_TUTORIAL_DATA',
  'SQL_TUTORIAL_DATA',
  'PYTHON_TUTORIAL_DATA',
  'NUMPY_TUTORIAL_DATA',
  'PANDAS_TUTORIAL_DATA',
  'MATPLOTLIB_TUTORIAL_DATA',
  'SEABORN_TUTORIAL_DATA'
];

const newTutorialDataImports = [];

for (const blockName of courseBlocks) {
  const blockStartRegex = new RegExp(`export const ${blockName}: SidebarSection\\[\\] = \\[`, 'g');
  const startMatch = blockStartRegex.exec(content);
  if (!startMatch) {
    console.log(`Could not find ${blockName}`);
    continue;
  }
  
  let blockContent = '';
  let bracketDepth = 1;
  let currentIndex = startMatch.index + startMatch[0].length;
  
  blockContent += startMatch[0];
  
  while (bracketDepth > 0 && currentIndex < content.length) {
    const char = content[currentIndex];
    blockContent += char;
    if (char === '[') bracketDepth++;
    if (char === ']') bracketDepth--;
    currentIndex++;
  }
  
  if (content[currentIndex] === ';') {
    blockContent += ';';
  }

  const requiredImports = [];
  for (const [componentName, importLine] of allImports.entries()) {
    if (blockContent.includes(`<${componentName}`) || blockContent.includes(` ${componentName} `) || blockContent.includes(` ${componentName},`)) {
      requiredImports.push(importLine);
    }
  }

  const lowerName = blockName.split('_')[0].toLowerCase();
  const newFileName = `${lowerName}Data.tsx`;
  
  let newFileContent = `import React from 'react';\nimport type { SidebarSection } from '../types';\n\n`;
  newFileContent += requiredImports.join('\n') + '\n\n';
  newFileContent += blockContent + '\n';
  
  fs.writeFileSync(path.join(__dirname, 'data', newFileName), newFileContent);
  console.log(`Created ${newFileName}`);
  
  newTutorialDataImports.push(`export { ${blockName} } from './${lowerName}Data';`);
}

// 3. Create the new tutorialData.tsx aggregate file
const allCoursesStartRegex = /export const ALL_COURSES = \{/g;
const startMatch = allCoursesStartRegex.exec(content);
let allCoursesContent = '';

if (startMatch) {
  let braceDepth = 1;
  let currentIndex = startMatch.index + startMatch[0].length;
  allCoursesContent += startMatch[0];
  
  while (braceDepth > 0 && currentIndex < content.length) {
    const char = content[currentIndex];
    allCoursesContent += char;
    if (char === '{') braceDepth++;
    if (char === '}') braceDepth--;
    currentIndex++;
  }
  if (content[currentIndex] === ';') {
      allCoursesContent += ';';
  }
}

let finalTutorialData = `import type { SidebarSection } from '../types';\n`;
// We changed this to export so ALL_COURSES can map it. Wait! ALL_COURSES needs the variable.
// I should use import { HTML_TUTORIAL_DATA } from './htmlData'; instead of export in tutorialData.tsx, since ALL_COURSES references it.

const newImportStatements = courseBlocks.map(block => {
  const lowerName = block.split('_')[0].toLowerCase();
  return `import { ${block} } from './${lowerName}Data';`;
});
finalTutorialData += newImportStatements.join('\n') + '\n\n';
finalTutorialData += allCoursesContent + '\n';

fs.writeFileSync(filePath, finalTutorialData);
console.log('Successfully updated tutorialData.tsx');
