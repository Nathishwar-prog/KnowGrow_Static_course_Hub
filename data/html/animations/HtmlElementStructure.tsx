import React from 'react';

const AnimatedPart: React.FC<{ children: React.ReactNode; delay: number; colorClass: string; label: string }> = ({ children, delay, colorClass, label }) => (
    <div className="text-center anim-fade-in-up" style={{ animationDelay: `${delay}s` }}>
        <div className={`font-mono text-xl md:text-2xl p-4 border-2 ${colorClass} rounded-lg inline-block shadow-md bg-white dark:bg-gray-800`}>
            {children}
        </div>
        <p className={`mt-2 font-bold ${colorClass.replace('border-', 'text-')}`}>{label}</p>
    </div>
);

const HtmlElementStructure: React.FC = () => (
    <div>
        <p className="mb-8 text-lg text-center anim-fade-in-up">Most HTML elements are made of three parts: a start tag, the content, and an end tag.</p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <AnimatedPart delay={0.4} colorClass="border-sky-500" label="Start Tag">
                <code>&lt;p&gt;</code>
            </AnimatedPart>
            <AnimatedPart delay={0.8} colorClass="border-emerald-500" label="Content">
                <span>My first paragraph.</span>
            </AnimatedPart>
            <AnimatedPart delay={1.2} colorClass="border-rose-500" label="End Tag">
                <code>&lt;/p&gt;</code>
            </AnimatedPart>
        </div>

        <div className="mt-10 text-center anim-scale-in" style={{ animationDelay: '1.8s' }}>
             <p className="mb-2 text-lg">Together, they form a complete element:</p>
             <div className="font-mono text-lg md:text-xl p-4 bg-gray-100 dark:bg-gray-700 rounded-lg inline-block shadow-inner">
                <span className="text-sky-500 font-bold">&lt;p&gt;</span>
                <span className="text-emerald-500">My first paragraph.</span>
                <span className="text-rose-500 font-bold">&lt;/p&gt;</span>
             </div>
        </div>
    </div>
);

export default HtmlElementStructure;