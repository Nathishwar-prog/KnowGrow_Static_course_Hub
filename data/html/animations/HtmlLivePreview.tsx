import React from 'react';
import { BrowserMockup } from '../../components';
import LiveTypingAnimation from './LiveTypingAnimation';
import { ANIMATION_STYLES } from './animationStyles';

interface HtmlLivePreviewProps {
    code: string;
    language: string;
}

/**
 * Generates a full, valid HTML document string from a code snippet.
 * It intelligently extracts <head>, <body>, and <script> content.
 * All scripts are moved to the end of the body to prevent race conditions,
 * ensuring the DOM is fully available before scripts are executed.
 * @param code The raw HTML code string.
 * @returns A string containing a full HTML document.
 */
const generateIframeContent = (code: string): string => {
    // 1. Find all script tags and store them.
    const scriptRegex = /<script\b[^>]*>[\s\S]*?<\/script>/gi;
    const scripts: string[] = [];
    const codeWithoutScripts = code.replace(scriptRegex, (scriptTag) => {
        scripts.push(scriptTag);
        return '<!-- script moved to end of body -->'; // Remove script from its original position
    });

    // 2. Extract head and body from the script-less HTML
    const headMatch = codeWithoutScripts.match(/<head[^>]*>([\s\S]*)<\/head>/i);
    const bodyMatch = codeWithoutScripts.match(/<body[^>]*>([\s\S]*)<\/body>/i);

    let headContent = headMatch ? headMatch[1] : '';
    let bodyContent = '';

    if (bodyMatch) {
        bodyContent = bodyMatch[1];
    } else if (!/<html/i.test(code)) {
        // If it's not a full HTML document, treat the whole script-less snippet as body content.
        bodyContent = codeWithoutScripts;
    }
    
    const scriptsToAppend = scripts.join('\n');

    // 3. Construct the final HTML, appending scripts at the end of the body.
    return `
        <!DOCTYPE html>
        <html style="font-family: sans-serif;">
        <head>
            <meta charset="UTF-8">
            <style>
                /* Basic styles for a clean preview */
                body { 
                    padding: 1rem; 
                    margin: 0;
                    color: #1f2937; /* Default text color for light mode */
                }
                /* Injected animation styles */
                ${ANIMATION_STYLES}
            </style>
            ${headContent}
        </head>
        <body>
            ${bodyContent}
            ${scriptsToAppend}
        </body>
        </html>
    `;
};


const HtmlLivePreview: React.FC<HtmlLivePreviewProps> = ({ code, language }) => {
    const iframeSrcDoc = generateIframeContent(code);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start h-full">
            <div className="anim-fade-in-up h-full flex flex-col">
                <h3 id="code-heading" className="text-xl font-bold mb-4 text-center">Your Code</h3>
                <div className="flex-grow" role="region" aria-labelledby="code-heading">
                    <LiveTypingAnimation code={code} language={language} />
                </div>
            </div>
            <div className="anim-fade-in-up lg:mt-0" style={{ animationDelay: '0.3s' }}>
                <h3 id="browser-output-heading" className="text-xl font-bold mb-4 text-center">Browser Output</h3>
                <BrowserMockup title="Live Preview">
                    <iframe
                        key={code} // Force re-mount on code change to ensure a clean slate
                        srcDoc={iframeSrcDoc}
                        title="Live preview of the code example"
                        sandbox="allow-scripts allow-same-origin"
                        className="w-full h-[400px] border-0 bg-white"
                        aria-labelledby="browser-output-heading"
                    />
                </BrowserMockup>
            </div>
        </div>
    );
};

export default HtmlLivePreview;