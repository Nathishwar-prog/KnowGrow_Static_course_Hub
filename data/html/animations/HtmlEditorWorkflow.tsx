import React from 'react';

const AnimatedStep: React.FC<{ children: React.ReactNode; delay: number; icon: string; title: string; }> = ({ children, delay, icon, title }) => (
    <div className="flex items-start opacity-0 anim-slide-in" style={{ animationDelay: `${delay}s` }}>
        <div className="text-3xl text-indigo-400 mr-4 mt-1 w-8 text-center"><i className={`fa-solid ${icon}`}></i></div>
        <div>
            <h4 className="font-bold text-lg">{title}</h4>
            <div className="text-gray-600 dark:text-gray-300">{children}</div>
        </div>
    </div>
);

const HtmlEditorWorkflow: React.FC = () => (
    <div className="space-y-8">
        <AnimatedStep delay={0.2} icon="fa-file-lines" title="Step 1: Open Text Editor">
            <p>Start with a blank file in a simple editor like Notepad or TextEdit.</p>
        </AnimatedStep>

        <AnimatedStep delay={0.8} icon="fa-keyboard" title="Step 2: Write HTML">
            <p>Write your HTML code, defining the structure and content of your page.</p>
            <pre className="font-mono bg-gray-100 dark:bg-gray-700 p-2 rounded-md text-xs mt-2 overflow-x-auto">
                <code>{`<!DOCTYPE html>
<html>
<body>
  <h1>Hello!</h1>
</body>
</html>`}</code>
            </pre>
        </AnimatedStep>

        <AnimatedStep delay={1.4} icon="fa-floppy-disk" title="Step 3: Save the File">
            <p>Save the file with an <code>.html</code> or <code>.htm</code> extension. For example, <code>index.html</code>.</p>
        </AnimatedStep>

        <AnimatedStep delay={2.0} icon="fa-globe" title="Step 4: View in Browser">
            <p>Open the saved file in your web browser to see your page live!</p>
        </AnimatedStep>
    </div>
);

export default HtmlEditorWorkflow;
