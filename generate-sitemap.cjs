const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://courses.knowgrow.tech';
const OUTPUT_DIR = path.join(__dirname, 'public');
const DATA_DIR = path.join(__dirname, 'data');

const COURSES = ['html', 'css', 'js', 'sql', 'python', 'numpy', 'pandas', 'matplotlib', 'seaborn'];

fs.mkdirSync(OUTPUT_DIR, { recursive: true });

function getFileLastMod(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return stats.mtime.toISOString().split('T')[0];
  } catch (e) {
    return new Date().toISOString().split('T')[0];
  }
}

const today = new Date().toISOString().split('T')[0];

function generateUrlXml(loc, lastmod, changefreq, priority) {
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

const sitemaps = [];

// 1. Generate sitemap-main.xml
const mainUrls = [];
mainUrls.push(generateUrlXml(`${DOMAIN}/`, today, 'daily', '1.0'));
mainUrls.push(generateUrlXml(`${DOMAIN}/courses`, today, 'weekly', '0.9'));
mainUrls.push(generateUrlXml(`${DOMAIN}/about`, today, 'weekly', '0.9'));
mainUrls.push(generateUrlXml(`${DOMAIN}/contact`, today, 'weekly', '0.9'));

const mainSitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${mainUrls.join('\n')}
</urlset>`;

fs.writeFileSync(path.join(OUTPUT_DIR, 'sitemap-main.xml'), mainSitemapContent, 'utf8');
sitemaps.push({ loc: `${DOMAIN}/sitemap-main.xml`, lastmod: today });

// 2. Generate course-specific sitemaps
COURSES.forEach(course => {
  const courseUrls = [];
  
  const dataFileTsx = path.join(DATA_DIR, `${course}Data.tsx`);
  const dataFileTs = path.join(DATA_DIR, `${course}Data.ts`);
  let filePath = fs.existsSync(dataFileTsx) ? dataFileTsx : fs.existsSync(dataFileTs) ? dataFileTs : null;
  
  let courseLastMod = today;
  if (filePath) {
    courseLastMod = getFileLastMod(filePath);
  }
  
  // Category page
  courseUrls.push(generateUrlXml(`${DOMAIN}/tutorial/${course}`, courseLastMod, 'weekly', '0.8'));
  
  // Section pages
  courseUrls.push(generateUrlXml(`${DOMAIN}/reference/${course}`, courseLastMod, 'weekly', '0.9'));
  courseUrls.push(generateUrlXml(`${DOMAIN}/exercise/${course}`, courseLastMod, 'weekly', '0.9'));

  if (filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const regex = /id:\s*['"]([^'"]+)['"]/g;
    let match;
    const extractedIds = new Set();
    while ((match = regex.exec(content)) !== null) {
      extractedIds.add(match[1]);
    }
    extractedIds.forEach(topicId => {
      // Core lesson page
      courseUrls.push(generateUrlXml(`${DOMAIN}/tutorial/${course}/${topicId}`, courseLastMod, 'weekly', '0.7'));
    });
  }
  
  const courseSitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${courseUrls.join('\n')}
</urlset>`;

  const fileName = `sitemap-${course}.xml`;
  fs.writeFileSync(path.join(OUTPUT_DIR, fileName), courseSitemapContent, 'utf8');
  sitemaps.push({ loc: `${DOMAIN}/${fileName}`, lastmod: courseLastMod });
});

// 3. Generate main sitemap index (sitemap.xml)
const indexSitemaps = sitemaps.map(s => `  <sitemap>
    <loc>${s.loc}</loc>
    <lastmod>${s.lastmod}</lastmod>
  </sitemap>`);

const sitemapIndexContent = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexSitemaps.join('\n')}
</sitemapindex>`;

fs.writeFileSync(path.join(OUTPUT_DIR, 'sitemap.xml'), sitemapIndexContent, 'utf8');

console.log('Sitemap index and sub-sitemaps successfully generated.');
