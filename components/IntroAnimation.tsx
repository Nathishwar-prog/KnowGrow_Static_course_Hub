import React, { useEffect, useState } from 'react';

interface IntroAnimationProps {
  onAnimationComplete: () => void;
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onAnimationComplete }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Total animation sequence is now longer and more graceful.
    // Start fading out after 4.5 seconds
    const animationTimer = setTimeout(() => {
      setIsExiting(true);
    }, 4500);

    // Call the completion callback after the fade-out is done (4.5s + 1s fade)
    const completionTimer = setTimeout(() => {
      onAnimationComplete();
    }, 5500);

    return () => {
      clearTimeout(animationTimer);
      clearTimeout(completionTimer);
    };
  }, [onAnimationComplete]);

  return (
    <div
      className={`fixed inset-0 bg-gray-900 flex items-center justify-center z-[100] transition-opacity duration-1000 ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
      aria-hidden={isExiting}
    >
      <div className="relative text-7xl md:text-9xl font-bold text-center">
        {/* Shadow Element */}
        <div
          className="absolute inset-0 flex items-center justify-center text-transparent intro-shadow"
          aria-hidden="true"
        >
          KG
        </div>
        
        {/* Text Element */}
        <div className="intro-text-container text-white">
          <span style={{ animationDelay: '1.5s' }}>K</span>
          <span style={{ animationDelay: '1.6s' }}>n</span>
          <span style={{ animationDelay: '1.7s' }}>o</span>
          <span style={{ animationDelay: '1.8s' }}>w</span>
          <span className="text-indigo-400" style={{ animationDelay: '2.1s' }}>G</span>
          <span className="text-indigo-400" style={{ animationDelay: '2.2s' }}>r</span>
          <span className="text-indigo-400" style={{ animationDelay: '2.3s' }}>o</span>
          <span className="text-indigo-400" style={{ animationDelay: '2.4s' }}>w</span>
        </div>
      </div>
    </div>
  );
};

export default IntroAnimation;