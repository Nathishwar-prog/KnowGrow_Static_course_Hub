import React, { useState, useEffect } from 'react';
import { Rocket, Code, Sparkles, Clock, Smartphone, Database, CheckCircle, X } from 'lucide-react';

export default function ComingSoon() {
  const [dots, setDots] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [animationStage, setAnimationStage] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const handleNotifyMe = async () => {
    setIsSubmitting(true);
    setAnimationStage(0);
    
    // Stage 1: Rocket launch
    setTimeout(() => setAnimationStage(1), 300);
    
    // Stage 2: Flying to database
    setTimeout(() => setAnimationStage(2), 1200);
    
    // Stage 3: Database received
    setTimeout(() => setAnimationStage(3), 2000);
    
    // Stage 4: Return to phone
    setTimeout(() => setAnimationStage(4), 2800);
    
    // Stage 5: Show success
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 4000);
    }, 3600);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '0.7s'}}></div>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-8 max-w-md mx-4 shadow-2xl transform scale-100 animate-bounce-in">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="bg-green-500 rounded-full p-2">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Success!</h3>
                  <p className="text-gray-600 text-sm">Your interest is recorded</p>
                </div>
              </div>
              <button onClick={() => setShowSuccess(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="bg-green-50 rounded-xl p-4 mb-4">
              <p className="text-gray-700 text-center">
                🎉 <strong>We'll notify you</strong> as soon as the course is available!
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <Smartphone className="w-4 h-4" />
              <span>Check your phone for updates</span>
            </div>
          </div>
        </div>
      )}

      {/* Loading Animation Overlay */}
      {isSubmitting && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-lg h-64">
            {/* Rocket */}
            <div 
              className={`absolute transition-all duration-1000 ${
                animationStage >= 1 ? 'left-1/2 bottom-1/2 -translate-x-1/2 scale-150 rotate-45' : 'left-10 bottom-10 scale-100'
              } ${
                animationStage >= 2 ? 'left-1/2 top-20 -translate-x-1/2 scale-100' : ''
              } ${
                animationStage >= 4 ? 'left-10 bottom-10 scale-100 rotate-0' : ''
              }`}
            >
              <div className="bg-gradient-to-br from-orange-400 to-red-500 p-4 rounded-2xl shadow-2xl">
                <Rocket className={`w-12 h-12 text-white ${animationStage >= 1 && animationStage < 4 ? 'animate-pulse' : ''}`} />
              </div>
              {animationStage === 1 && (
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                  <div className="text-4xl animate-bounce">🔥</div>
                </div>
              )}
            </div>

            {/* Database */}
            <div 
              className={`absolute right-10 top-20 transition-all duration-500 ${
                animationStage >= 2 ? 'scale-125' : 'scale-100'
              }`}
            >
              <div className={`bg-gradient-to-br from-blue-400 to-purple-500 p-4 rounded-2xl shadow-2xl ${
                animationStage === 2 || animationStage === 3 ? 'ring-4 ring-yellow-400 animate-pulse' : ''
              }`}>
                <Database className="w-12 h-12 text-white" />
              </div>
              {animationStage === 3 && (
                <div className="absolute -top-2 -right-2">
                  <div className="bg-green-500 rounded-full p-1">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                </div>
              )}
            </div>

            {/* Phone */}
            <div 
              className={`absolute left-10 bottom-10 transition-all duration-500 ${
                animationStage >= 4 ? 'scale-125 ring-4 ring-green-400' : 'scale-100'
              }`}
            >
              <div className="bg-gradient-to-br from-green-400 to-emerald-500 p-4 rounded-2xl shadow-2xl">
                <Smartphone className="w-12 h-12 text-white" />
              </div>
              {animationStage === 4 && (
                <div className="absolute -top-2 -right-2 animate-bounce">
                  <div className="text-2xl">📩</div>
                </div>
              )}
            </div>

            {/* Connecting Lines */}
            {animationStage >= 2 && animationStage < 4 && (
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <line 
                  x1="50%" y1="50%" 
                  x2="80%" y2="30%" 
                  stroke="rgba(255,255,255,0.3)" 
                  strokeWidth="2" 
                  strokeDasharray="5,5"
                  className="animate-pulse"
                />
              </svg>
            )}
            {animationStage >= 4 && (
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <line 
                  x1="80%" y1="30%" 
                  x2="20%" y2="80%" 
                  stroke="rgba(34,197,94,0.5)" 
                  strokeWidth="3" 
                  strokeDasharray="5,5"
                  className="animate-pulse"
                />
              </svg>
            )}

            {/* Status Text */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
              <div className="bg-white/90 backdrop-blur rounded-full px-6 py-3 shadow-lg">
                <p className="text-gray-800 font-semibold">
                  {animationStage === 0 && "Preparing..."}
                  {animationStage === 1 && "Sending your interest..."}
                  {animationStage === 2 && "Saving to database..."}
                  {animationStage === 3 && "Processing..."}
                  {animationStage === 4 && "Notification sent!"}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="relative z-10 max-w-3xl w-full">
        {/* Main card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
          {/* Floating icons */}
          <div className="flex justify-center gap-6 mb-8">
            <div className="animate-float">
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 p-4 rounded-2xl shadow-lg">
                <Code className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="animate-float" style={{animationDelay: '0.2s'}}>
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-4 rounded-2xl shadow-lg">
                <Rocket className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="animate-float" style={{animationDelay: '0.4s'}}>
              <div className="bg-gradient-to-br from-pink-400 to-pink-600 p-4 rounded-2xl shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-yellow-400/20 text-yellow-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-yellow-400/30">
              <Clock className="w-4 h-4" />
              Coming Soon
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">Amazing</span> is Coming
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-200 mb-4">
              Our developers are building something interesting for you{dots}
            </p>
            
            <p className="text-lg text-blue-300/80 mb-8 max-w-2xl mx-auto">
              We're crafting an extraordinary learning experience that will transform the way you learn. Stay tuned!
            </p>

            {/* Progress indicator */}
            <div className="max-w-md mx-auto mb-8">
              <div className="bg-white/10 rounded-full h-3 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 h-full animate-pulse w-3/4 rounded-full"></div>
              </div>
              <p className="text-blue-200 text-sm mt-3">Course in development</p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={handleNotifyMe}
                disabled={isSubmitting}
                className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? 'Processing...' : 'Notify Me'}
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                  {isSubmitting ? '⏳' : '→'}
                </span>
              </button>
              <a 
                href="https://example.com/learn-more" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur text-white px-8 py-4 rounded-xl font-semibold text-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Features preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
            {[
              { icon: '🚀', title: 'Interactive', desc: 'Hands-on learning' },
              { icon: '💎', title: 'Premium', desc: 'High-quality content' },
              { icon: '⚡', title: 'Fast', desc: 'Quick to master' }
            ].map((feature, i) => (
              <div key={i} className="bg-white/5 backdrop-blur rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="text-3xl mb-2">{feature.icon}</div>
                <h3 className="text-white font-semibold text-lg">{feature.title}</h3>
                <p className="text-blue-200 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer text */}
        <p className="text-center text-blue-300/60 mt-8 text-sm">
          Be patient, it will be worth the wait ✨
        </p>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes bounce-in {
          0% { transform: scale(0.3); opacity: 0; }
          50% { transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-bounce-in {
          animation: bounce-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}