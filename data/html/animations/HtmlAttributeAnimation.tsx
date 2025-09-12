import React from 'react';

const HtmlAttributeAnimation: React.FC = () => {
  return (
    <div className="text-center">
      <p className="mb-6 text-lg anim-fade-in-up">Attributes provide extra information and are added to the start tag.</p>
      <div className="font-mono text-xl md:text-2xl p-4 bg-gray-100 dark:bg-gray-700 rounded-lg inline-flex items-center shadow-inner">
        <span className="opacity-0 anim-fade-in-up" style={{ animationDelay: '0.2s' }}>
          &lt;a
        </span>
        <span 
            className="attribute-container anim-slide-in-from-top"
            style={{ animationDelay: '0.8s' }}
        >
          <span className="text-amber-400"> href</span>
          <span className="text-gray-500">=</span>
          <span className="text-emerald-400">"..."</span>
        </span>
        <span className="opacity-0 anim-fade-in-up" style={{ animationDelay: '0.2s' }}>
          &gt;
        </span>
        <span className="opacity-0 anim-fade-in-up" style={{ animationDelay: '1.5s' }}>
          Visit KnowGrow
        </span>
        <span className="opacity-0 anim-fade-in-up" style={{ animationDelay: '1.7s' }}>
          &lt;/a&gt;
        </span>
      </div>
    </div>
  );
};

export default HtmlAttributeAnimation;