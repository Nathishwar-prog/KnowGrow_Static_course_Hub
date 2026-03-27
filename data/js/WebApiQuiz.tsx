import React, { useState } from 'react';
import { 
  Trophy, Brain, CheckCircle2, XCircle, ChevronRight, 
  RotateCcw, Zap, Target, BookOpen, Stars, 
  Lightbulb, Rocket, ShieldCheck, HelpCircle, 
  MousePointer2, Info, ArrowRight, Activity, Lock
} from 'lucide-react';
import { WEB_API_QUIZ_DATA } from './quizData';

// ─── Quiz Styles (Glassmorphism + Premium Dark) ──────────────────────────────
const glassStyles = "bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 shadow-2xl";

// ─── Main Component ───────────────────────────────────────────────────────────
const WebApiQuiz: React.FC = () => {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [answeredCount, setAnsweredCount] = useState(0);

  const currentQuestion = WEB_API_QUIZ_DATA[currentQuestionIdx];
  const progress = ((currentQuestionIdx + 1) / WEB_API_QUIZ_DATA.length) * 100;

  const handleOptionSelect = (idx: number) => {
    if (selectedOption !== null) return;
    
    setSelectedOption(idx);
    setShowExplanation(true);
    setAnsweredCount(prev => prev + 1);

    if (idx === currentQuestion.correctAnswerIndex) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIdx < WEB_API_QUIZ_DATA.length - 1) {
      setCurrentQuestionIdx(prev => prev + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setIsFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIdx(0);
    setSelectedOption(null);
    setShowExplanation(false);
    setScore(0);
    setIsFinished(false);
    setAnsweredCount(0);
  };

  // ─── Render Completed State ──────────────────────────────────────────────────
  if (isFinished) {
    const percentage = Math.round((score / WEB_API_QUIZ_DATA.length) * 100);
    return (
      <div className="p-4 sm:p-10 bg-[#f8faff] dark:bg-[#08090b] min-h-screen font-sans text-gray-800 dark:text-gray-200">
        <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-5 duration-700">
          
          {/* Result Card */}
          <div className={`${glassStyles} rounded-[3rem] p-10 lg:p-16 text-center relative overflow-hidden`}>
             <div className="absolute top-0 right-0 p-12 opacity-5 -rotate-12">
                <Trophy className="w-96 h-96 text-indigo-500" />
             </div>
             
             <div className="relative z-10">
                <div className="inline-flex items-center justify-center p-6 bg-gradient-to-tr from-indigo-500 to-indigo-600 rounded-[2.5rem] mb-8 shadow-2xl shadow-indigo-500/20">
                   <Stars className="w-12 h-12 text-white" />
                </div>
                <h1 className="text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tight uppercase italic">Assessment Complete</h1>
                <p className="text-xl text-gray-500 dark:text-gray-400 mb-12 font-medium">You've traversed the Web API Universe. Here is your rank.</p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-12 mb-16">
                   <div className="space-y-2">
                      <div className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Mastery Level</div>
                      <div className="text-6xl font-black text-gray-900 dark:text-white">{percentage}%</div>
                   </div>
                   <div className="w-[2px] h-20 bg-gray-100 dark:bg-gray-800 hidden sm:block"></div>
                   <div className="space-y-2">
                      <div className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Correct Hits</div>
                      <div className="text-6xl font-black text-gray-900 dark:text-white">{score}/{WEB_API_QUIZ_DATA.length}</div>
                   </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-6 text-start">
                   {/* Level Designation */}
                   <div className="p-8 rounded-[2.5rem] bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800">
                      <div className="flex items-center gap-3 mb-4">
                         <Target className="text-indigo-500 w-5 h-5" />
                         <span className="text-xs font-black uppercase text-indigo-600 dark:text-indigo-400 tracking-widest">Designation</span>
                      </div>
                      <h4 className="text-xl font-black mb-2 italic">
                         {percentage === 100 ? 'Architect of the Open Web' : 
                          percentage >= 80 ? 'Web Environment Expert' : 
                          percentage >= 50 ? 'Intermediate Navigator' : 'Beginner Web Explorer'}
                      </h4>
                      <p className="text-xs font-bold text-gray-500 leading-relaxed uppercase tracking-widest opacity-60">
                         {percentage >= 80 ? 'You demonstrate elite understanding of browser-layer logic.' : 'Continue exploring the documentation to master the async stack.'}
                      </p>
                   </div>

                   {/* Pro Tip Section */}
                   <div className="p-8 rounded-[2.5rem] bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800">
                      <div className="flex items-center gap-3 mb-4">
                         <Zap className="text-amber-500 w-5 h-5" />
                         <span className="text-xs font-black uppercase text-amber-600 dark:text-amber-400 tracking-widest">Mastery Tip</span>
                      </div>
                      <h4 className="text-sm font-black text-gray-900 dark:text-white mb-2 uppercase">Diverse Skill-Mixing</h4>
                      <p className="text-xs font-bold text-gray-500 dark:text-gray-400 leading-relaxed">
                         To master Web APIs, mix Multiple Choice questions with Code Output and Debugging tasks. This improves real-world thinking and technical clarity.
                      </p>
                   </div>
                </div>

                <button 
                  onClick={resetQuiz}
                  className="mt-16 px-12 py-5 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full font-black text-sm uppercase tracking-[0.2em] shadow-xl shadow-indigo-500/20 transform hover:-translate-y-1 active:translate-y-0 transition-all flex items-center mx-auto gap-3"
                >
                  <RotateCcw className="w-4 h-4" /> Restart Assessment
                </button>
             </div>
          </div>

          {/* Bonus Challenge Card */}
          <div className="bg-slate-900 p-12 lg:p-16 rounded-[4rem] text-white shadow-2xl relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 transition-all duration-1000 group-hover:rotate-45">
                <Rocket className="w-80 h-80 text-indigo-500" />
             </div>
             
             <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-12 space-y-8">
                   <div className="inline-flex items-center gap-3 px-5 py-2 bg-indigo-500/20 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/30">
                      <Rocket className="w-4 h-4 text-indigo-400" /> Bonus Final Challenge
                   </div>
                   <h2 className="text-5xl font-black italic tracking-tighter">Build Your Own!</h2>
                   <p className="text-xl text-slate-300 font-medium leading-relaxed italic max-w-4xl">
                      "Real mastery comes through creation. Use your knowledge to build a Quiz App that leverages the very APIs you just learned."
                   </p>
                   
                   <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {[
                        { title: 'DOM API', desc: 'Structure the questions and interface.', color: 'border-indigo-500 bg-indigo-500/10' },
                        { title: 'Storage API', desc: 'Save high scores and user preferences.', color: 'border-emerald-500 bg-emerald-500/10' },
                        { title: 'Fetch API', desc: 'Load dynamic questions from a remote server.', color: 'border-sky-500 bg-sky-500/10' },
                        { title: 'Custom Quiz', desc: 'Design 5 unique questions of your own.', color: 'border-amber-500 bg-amber-500/10' }
                      ].map((card, i) => (
                        <div key={i} className={`p-6 rounded-3xl border ${card.color} space-y-3`}>
                           <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center font-black text-xs">{i+1}</div>
                           <h5 className="font-black text-sm uppercase">{card.title}</h5>
                           <p className="text-[10px] text-slate-400 font-bold leading-relaxed">{card.desc}</p>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    );
  }

  // ─── Render Active Quiz ──────────────────────────────────────────────────────
  return (
    <div className="p-4 sm:p-10 bg-[#f8faff] dark:bg-[#08090b] min-h-screen font-sans text-gray-800 dark:text-gray-200 selection:bg-indigo-100 selection:text-indigo-700">
      
      {/* Hero Header */}
      <header className="max-w-5xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-br from-indigo-400/10 to-emerald-400/10 rounded-full blur-[120px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-5 bg-gradient-to-tr from-indigo-500 to-indigo-600 rounded-[2.5rem] mb-10 shadow-2xl shadow-indigo-500/20 transform hover:-rotate-6 transition-all duration-500">
          <Brain className="w-12 h-12 text-white shadow-xl" />
        </div>
        <h1 className="text-5xl sm:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tighter leading-none uppercase italic">
          Mastery <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-600">Quiz</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
          Validate your understanding of the Web API ecosystem. Testing covers everything from the Event Loop to specific hardware-layer and network-layer APIs.
        </p>
      </header>

      <main className="max-w-4xl mx-auto">
         {/* Progress and Level Indicators */}
         <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8 px-4">
            <div className="flex items-center gap-4">
               <div className="px-5 py-2 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 shadow-sm flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse"></div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                     Section {currentQuestionIdx + 1 < 5 ? 'Beginner' : currentQuestionIdx + 1 < 9 ? 'Intermediate' : 'Advanced'}
                  </span>
               </div>
               <div className="text-xs font-black text-indigo-500">
                  {currentQuestionIdx + 1} / {WEB_API_QUIZ_DATA.length}
               </div>
            </div>
            
            <div className="flex-1 max-w-[300px] h-3 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden p-0.5">
               <div 
                 className="h-full bg-indigo-500 rounded-full transition-all duration-500 ease-out shadow-lg shadow-indigo-500/20"
                 style={{ width: `${progress}%` }}
               ></div>
            </div>

            <div className="flex items-center gap-3 px-5 py-2 rounded-full bg-emerald-500 text-white font-black text-[10px] uppercase tracking-widest shadow-xl shadow-emerald-500/20">
               <ShieldCheck className="w-3.5 h-3.5" /> Security: {score} Tokens
            </div>
         </div>

         {/* Question Section */}
         <div className={`${glassStyles} rounded-[3rem] p-10 lg:p-14 relative overflow-hidden transition-all duration-500`}>
            {/* Background Accent */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10 space-y-12">
               {/* Question Header */}
               <div className="space-y-4">
                  <div className="flex items-center gap-3">
                     <HelpCircle className="text-indigo-500 w-5 h-5" />
                     <span className="text-xs font-black uppercase text-indigo-400 tracking-widest leading-none">The Query</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white leading-snug">
                     {currentQuestion.question}
                  </h2>
               </div>

               {/* Options Grid */}
               <div className="grid grid-cols-1 gap-4">
                  {currentQuestion.options.map((option, idx) => {
                    const isSelected = selectedOption === idx;
                    const isCorrect = idx === currentQuestion.correctAnswerIndex;
                    const isWrong = isSelected && !isCorrect;
                    
                    let bgClass = "bg-gray-50 dark:bg-gray-900/50 border-gray-100 dark:border-gray-800 hover:border-indigo-500 hover:bg-white dark:hover:bg-gray-800 hover:shadow-lg";
                    if (selectedOption !== null) {
                      if (isCorrect) bgClass = "bg-emerald-50 border-emerald-500 text-emerald-900 dark:bg-emerald-900/20 dark:text-emerald-300";
                      else if (isWrong) bgClass = "bg-rose-50 border-rose-500 text-rose-900 dark:bg-rose-900/20 dark:text-rose-300 opacity-60";
                      else bgClass = "bg-gray-50 dark:bg-gray-900/50 border-gray-100 dark:border-gray-800 opacity-40 grayscale pointer-events-none";
                    }

                    return (
                      <button
                        key={idx}
                        disabled={selectedOption !== null}
                        onClick={() => handleOptionSelect(idx)}
                        className={`w-full p-6 sm:p-8 rounded-[2rem] border-2 text-start flex items-center justify-between transition-all duration-300 relative group overflow-hidden ${bgClass}`}
                      >
                         <div className="flex items-center gap-6 relative z-10">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-xs transition-colors ${
                              isSelected || (selectedOption !== null && isCorrect) ? 'bg-current text-white' : 'bg-white dark:bg-gray-800 text-gray-400 group-hover:text-indigo-500'
                            }`}>
                               {String.fromCharCode(65 + idx)}
                            </div>
                            <span className="text-sm sm:text-base font-black tracking-tight">{option}</span>
                         </div>
                         
                         {selectedOption !== null && (
                           <div className="relative z-10 scale-in-center">
                              {isCorrect ? <CheckCircle2 className="w-6 h-6 text-emerald-500" /> : isWrong ? <XCircle className="w-6 h-6 text-rose-500" /> : null}
                           </div>
                         )}
                      </button>
                    );
                  })}
               </div>

               {/* Explanation Section */}
               <div className={`transition-all duration-700 overflow-hidden ${showExplanation ? 'max-h-[500px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 translate-y-10'}`}>
                  <div className="p-8 rounded-[2.5rem] bg-indigo-50/50 dark:bg-indigo-950/20 border-2 border-indigo-100 dark:border-indigo-900/50 relative">
                     <div className="absolute top-0 right-0 p-6 opacity-30 text-indigo-500">
                        <Info className="w-8 h-8" />
                     </div>
                     <span className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.2em] mb-4 block">Rationale Logic</span>
                     <p className="text-sm font-bold text-gray-600 dark:text-gray-300 leading-relaxed italic">
                        "{currentQuestion.explanation}"
                     </p>
                  </div>
               </div>

               {/* Action Footer */}
               <div className="flex items-center justify-end pt-8 border-t border-gray-100 dark:border-gray-800">
                  <button
                    disabled={selectedOption === null}
                    onClick={handleNext}
                    className={`px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest flex items-center gap-3 transition-all ${
                      selectedOption === null 
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                        : 'bg-indigo-500 text-white hover:scale-105 shadow-xl shadow-indigo-500/20'
                    }`}
                  >
                     {currentQuestionIdx < WEB_API_QUIZ_DATA.length - 1 ? 'Next Logic Gap' : 'Final Results'}
                     <ChevronRight className="w-4 h-4" />
                  </button>
               </div>
            </div>
         </div>
      </main>

      {/* Footer Meta */}
      <footer className="max-w-4xl mx-auto mt-20 text-center space-y-4">
         <div className="flex flex-wrap justify-center gap-8 opacity-30 font-black text-[10px] uppercase tracking-[0.4em]">
            <div className="flex items-center gap-2"><Lock className="w-3 h-3" /> Secure Protocol</div>
            <div className="flex items-center gap-2"><Activity className="w-3 h-3" /> Real-time Feedback</div>
            <div className="flex items-center gap-2"><Stars className="w-3 h-3" /> Merit Layer</div>
         </div>
         <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.6em] opacity-20 py-10">Web API Assessment Layer — KnowGrow Hub v4.0</p>
      </footer>

      <style>{`
        @keyframes scale-in-center {
          0% { transform: scale(0); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .scale-in-center {
          animation: scale-in-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        }
      `}</style>
    </div>
  );
};

export default WebApiQuiz;
