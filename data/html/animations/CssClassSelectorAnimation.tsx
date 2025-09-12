import React from 'react';

const Highlight: React.FC<{children: React.ReactNode, delay: number, color: string}> = ({children, delay, color}) => (
    <span className={`rounded px-1 anim-highlight-${color}`} style={{ animationDelay: `${delay}s`, animationDuration: '1.5s' }}>
        {children}
    </span>
);

const CssClassSelectorAnimation: React.FC = () => {
    return (
        <div>
            <p className="mb-6 text-lg text-center anim-fade-in-up">A CSS class selector finds all HTML elements with that class name.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="anim-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <h4 className="font-bold mb-2 text-center">CSS</h4>
                    <pre className="font-mono bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-sm shadow-inner">
                        <code>
                            .<Highlight delay={0.8} color="emerald">city</Highlight>
                            {` {
  background-color: tomato;
  color: white;
}`}
                        </code>
                    </pre>
                </div>
                <div className="anim-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    <h4 className="font-bold mb-2 text-center">HTML</h4>
                    <pre className="font-mono bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-sm shadow-inner">
                        <code>
                            {`<h2>London</h2>
<div `}
                            <Highlight delay={1.5} color="emerald">class="city"</Highlight>
                            {`>
...
</div>
<h2>Paris</h2>
<div `}
                            <Highlight delay={2.2} color="emerald">class="city"</Highlight>
                            {`>
...
</div>
`}
                        </code>
                    </pre>
                </div>
            </div>
            <p className="mt-6 text-lg text-center opacity-0 anim-fade-in-up" style={{ animationDelay: '2.8s' }}>The style is applied to both elements!</p>
        </div>
    );
};

export default CssClassSelectorAnimation;