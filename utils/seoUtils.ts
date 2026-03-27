/**
 * SEO Utilities for KnowGrow
 * Generates dynamic metadata for tutorials and other pages.
 */

export interface SEOData {
  title: string;
  description: string;
  keywords: string;
}

export const generateSEOData = (
  topicTitle: string,
  courseId: string,
  sectionTitle?: string
): SEOData => {
  const brand = 'KnowGrow';
  
  // 1. Title Pattern: "{Topic} Tutorial | KnowGrow"
  // If it's a home page, use a simpler title
  const isHome = topicTitle.toLowerCase().includes('home');
  const displayTitle = isHome 
    ? `${courseId.toUpperCase()} Programming Course` 
    : `${topicTitle} Tutorial`;
    
  const title = `${displayTitle} | ${brand}`;

  // 2. Description Pattern: 140–160 characters
  // Clear, human-readable, include keywords naturally
  const courseName = courseId.toUpperCase();
  const baseDescription = `Learn ${topicTitle} in our comprehensive ${courseName} tutorial. Master web development with interactive examples, exercises, and step-by-step guides on ${brand}.`;
  
  // Ensure length is between 140-160 (trim or pad if needed, but here it's naturally around that)
  let description = baseDescription;
  if (description.length > 160) {
    description = description.substring(0, 157) + '...';
  } else if (description.length < 140) {
    description += ` Start your ${courseName} coding journey today with the best resources available.`;
    description = description.substring(0, 160);
  }

  // 3. Keywords: 5–10 relevant keywords per page
  const keywordList = [
    `${courseId} tutorial`,
    `learn ${courseId}`,
    `${topicTitle.toLowerCase()}`,
    `${courseId} basics`,
    'web development',
    'programming tutorial',
    'knowgrow',
    'coding for beginners',
    `${sectionTitle?.toLowerCase() || ''}`,
    `${topicTitle.toLowerCase()} examples`
  ].filter(k => k.trim() !== '').slice(0, 10);

  const keywords = keywordList.join(', ');

  return { title, description, keywords };
};

export const getDefaultSEO = (): SEOData => ({
  title: 'KnowGrow - Learn Programming & Web Development',
  description: 'Learn programming with structured tutorials, exercises, and real-world examples. Master HTML, CSS, JavaScript, Python, and more with KnowGrow.',
  keywords: 'programming tutorial, web development, coding for beginners, learn html, learn python, javascript tutorial'
});
