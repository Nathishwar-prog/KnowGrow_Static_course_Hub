import React from 'react';

const AnimatedBlock: React.FC<{ children: React.ReactNode; delay: number; className?: string }> = ({ children, delay, className = '' }) => (
    <div
        className={`bg-gray-100 dark:bg-gray-700/50 p-4 my-2 rounded-md border border-gray-300 dark:border-gray-600 anim-fade-in-up ${className}`}
        style={{ animationDelay: `${delay}s` }}
    >
        {children}
    </div>
);

const HtmlDocumentStructure: React.FC = () => (
    <div className="font-mono">
        <p className="mb-4 text-lg text-center font-sans anim-fade-in-up" style={{ animationDelay: '0s' }}>
            An HTML document has a clear, nested structure.
        </p>
        
        <AnimatedBlock delay={0.2}>
            <code>&lt;!DOCTYPE html&gt;</code>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 font-sans">The document type declaration.</p>
        </AnimatedBlock>

        <AnimatedBlock delay={0.6}>
            <code>&lt;html&gt;</code>
            <div className="ml-6 mt-2 border-l-2 border-dashed border-gray-400 dark:border-gray-500 pl-4">
                 <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-sans">The root element.</p>
                 <AnimatedBlock delay={1.0}>
                     <code>&lt;head&gt;...&lt;/head&gt;</code>
                     <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 font-sans">Contains meta-information (not visible).</p>
                 </AnimatedBlock>
                 <AnimatedBlock delay={1.4}>
                     <code>&lt;body&gt;...&lt;/body&gt;</code>
                     <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 font-sans">Contains the page's visible content.</p>
                 </AnimatedBlock>
            </div>
            <code>&lt;/html&gt;</code>
        </AnimatedBlock>
    </div>
);

export default HtmlDocumentStructure;