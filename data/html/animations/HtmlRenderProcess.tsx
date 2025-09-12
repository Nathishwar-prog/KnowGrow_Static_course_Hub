import React from 'react';

const AnimatedLine: React.FC<{ children: React.ReactNode; delay: number }> = ({ children, delay }) => (
    <div className="opacity-0 anim-slide-in" style={{ animationDelay: `${delay}s` }}>
        {children}
    </div>
);

const HtmlRenderProcess: React.FC = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
            <h3 className="text-xl font-bold mb-4 text-center md:text-left">HTML Code</h3>
            <div className="font-mono bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-sm">
                <AnimatedLine delay={0.2}><code>&lt;body&gt;</code></AnimatedLine>
                <AnimatedLine delay={0.8}><code className="ml-4">&lt;h1&gt;My First Heading&lt;/h1&gt;</code></AnimatedLine>
                <AnimatedLine delay={1.4}><code className="ml-4">&lt;p&gt;My first paragraph.&lt;/p&gt;</code></AnimatedLine>
                <AnimatedLine delay={2.0}><code>&lt;/body&gt;</code></AnimatedLine>
            </div>
        </div>
        <div>
            <h3 className="text-xl font-bold mb-4 text-center md:text-left">Browser Renders...</h3>
            <div className="p-4 border border-gray-300 dark:border-gray-600 rounded-md min-h-[10rem]">
                <AnimatedLine delay={1.0}>
                    <h1 className="text-2xl font-bold">My First Heading</h1>
                </AnimatedLine>
                <AnimatedLine delay={1.6}>
                    <p className="mt-2">My first paragraph.</p>
                </AnimatedLine>
            </div>
        </div>
    </div>
);

export default HtmlRenderProcess;
