import React from 'react';

const AnimatedCodeBlock: React.FC<{ children: React.ReactNode; delay: number }> = ({ children, delay }) => (
    <div
        className="font-mono bg-gray-100 dark:bg-gray-700 p-4 my-2 rounded-md border border-gray-300 dark:border-gray-600 opacity-0 anim-slide-in"
        style={{ animationDelay: `${delay}s` }}
    >
        {children}
    </div>
);

const HtmlDocumentStructure: React.FC = () => (
    <div>
        <p className="mb-4 text-lg">An HTML document has a clear, nested structure. Let's build it step by step.</p>
        
        <AnimatedCodeBlock delay={0.2}>
            <code>&lt;!DOCTYPE html&gt;</code>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">This declaration tells the browser it's an HTML5 document.</p>
        </AnimatedCodeBlock>

        <AnimatedCodeBlock delay={0.8}>
            <code>&lt;html&gt;</code>
            <div className="ml-6 mt-2">
                 <p className="text-sm text-gray-500 dark:text-gray-400">This is the root element that wraps everything.</p>
                 <AnimatedCodeBlock delay={1.4}>
                     <code>&lt;head&gt;</code>
                     <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Contains meta-information about the page (not visible).</p>
                     <code>&lt;/head&gt;</code>
                 </AnimatedCodeBlock>
                 <AnimatedCodeBlock delay={2.0}>
                     <code>&lt;body&gt;</code>
                     <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Contains all the visible content of the page.</p>
                     <code>&lt;/body&gt;</code>
                 </AnimatedCodeBlock>
            </div>
            <code>&lt;/html&gt;</code>
        </AnimatedCodeBlock>
    </div>
);

export default HtmlDocumentStructure;
