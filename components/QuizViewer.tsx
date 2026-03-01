import React, { useState } from 'react';
import { CheckCircle2, XCircle, ArrowRight, RefreshCw } from 'lucide-react';
import { Quiz } from '../data/quizData';
import { motion, AnimatePresence } from 'framer-motion';

interface QuizViewerProps {
    quiz: Quiz;
    onComplete?: (score: number, total: number) => void;
}

export const QuizViewer: React.FC<QuizViewerProps> = ({ quiz, onComplete }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);
    const [score, setScore] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);

    const question = quiz.questions[currentQuestionIndex];

    const handleOptionSelect = (index: number) => {
        if (isAnswerRevealed) return;
        setSelectedOption(index);
        setIsAnswerRevealed(true);

        if (index === question.correctAnswerIndex) {
            setScore((prev) => prev + 1);
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < quiz.questions.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
            setSelectedOption(null);
            setIsAnswerRevealed(false);
        } else {
            setQuizFinished(true);
            if (onComplete) {
                // Pass the final score. Since state updates are async, 
                // calculate if the current answer added a point.
                const finalScore = score + (selectedOption === question.correctAnswerIndex ? 1 : 0);
                onComplete(finalScore, quiz.questions.length);
            }
        }
    };

    const handleRetake = () => {
        setCurrentQuestionIndex(0);
        setSelectedOption(null);
        setIsAnswerRevealed(false);
        setScore(0);
        setQuizFinished(false);
    };

    if (quizFinished) {
        const percentage = Math.round((score / quiz.questions.length) * 100);

        return (
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 max-w-2xl mx-auto my-8 text-center">
                <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-6">Quiz Completed!</h2>
                <div className="flex justify-center mb-6">
                    <div className="relative w-32 h-32 flex items-center justify-center rounded-full bg-brand-50 dark:bg-brand-900/20">
                        <svg className="w-full h-full transform -rotate-90 absolute" viewBox="0 0 36 36">
                            <path
                                className="text-gray-200 dark:text-gray-700"
                                strokeWidth="3"
                                stroke="currentColor"
                                fill="none"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <path
                                className="text-brand-600 dark:text-brand-400"
                                strokeDasharray={`${percentage}, 100`}
                                strokeWidth="3"
                                strokeLinecap="round"
                                stroke="currentColor"
                                fill="none"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                        </svg>
                        <span className="text-2xl font-bold text-gray-900 dark:text-white">{percentage}%</span>
                    </div>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                    You scored {score} out of {quiz.questions.length} correct answers.
                </p>
                <div className="flex justify-center space-x-4">
                    <button
                        onClick={handleRetake}
                        className="flex items-center px-6 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-xl transition-colors font-medium"
                    >
                        <RefreshCw className="w-5 h-5 mr-2" />
                        Retake Quiz
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl p-6 md:p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 max-w-3xl mx-auto my-8">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white">{quiz.title}</h2>
                <span className="text-sm font-medium px-3 py-1 bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 rounded-full">
                    Question {currentQuestionIndex + 1} of {quiz.questions.length}
                </span>
            </div>

            <div className="mb-8">
                <h3 className="text-xl text-gray-800 dark:text-gray-200 font-medium mb-6">
                    {question.question}
                </h3>
                <div className="space-y-3">
                    {question.options.map((option, index) => {
                        const isSelected = selectedOption === index;
                        const isCorrect = index === question.correctAnswerIndex;
                        const showCorrect = isAnswerRevealed && isCorrect;
                        const showIncorrect = isAnswerRevealed && isSelected && !isCorrect;

                        let optionClasses = "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ";

                        if (!isAnswerRevealed) {
                            optionClasses += "border-gray-200 dark:border-gray-700 hover:border-brand-500 dark:hover:border-brand-500 hover:bg-brand-50/50 dark:hover:bg-brand-900/20";
                        } else if (showCorrect) {
                            optionClasses += "border-green-500 bg-green-50 dark:bg-green-900/20";
                        } else if (showIncorrect) {
                            optionClasses += "border-red-500 bg-red-50 dark:bg-red-900/20";
                        } else {
                            optionClasses += "border-gray-200 dark:border-gray-700 opacity-50";
                        }

                        return (
                            <button
                                key={index}
                                onClick={() => handleOptionSelect(index)}
                                disabled={isAnswerRevealed}
                                className={optionClasses}
                            >
                                <div className="flex justify-between items-center">
                                    <span className={`text-lg ${showCorrect ? 'text-green-700 dark:text-green-400 font-medium' : showIncorrect ? 'text-red-700 dark:text-red-400 font-medium' : 'text-gray-700 dark:text-gray-300'}`}>
                                        {option}
                                    </span>
                                    {showCorrect && <CheckCircle2 className="w-6 h-6 text-green-500" />}
                                    {showIncorrect && <XCircle className="w-6 h-6 text-red-500" />}
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>

            <AnimatePresence>
                {isAnswerRevealed && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className={`p-4 rounded-xl mb-6 ${selectedOption === question.correctAnswerIndex
                                ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800'
                                : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
                            }`}
                    >
                        <p className={`font-medium ${selectedOption === question.correctAnswerIndex ? 'text-green-800 dark:text-green-300' : 'text-red-800 dark:text-red-300'}`}>
                            {selectedOption === question.correctAnswerIndex ? 'Correct!' : 'Incorrect.'}
                        </p>
                        <p className="mt-1 text-gray-700 dark:text-gray-300 text-sm">
                            {question.explanation}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="flex justify-end mt-6">
                <button
                    onClick={handleNextQuestion}
                    disabled={!isAnswerRevealed}
                    className={`flex items-center px-6 py-3 rounded-xl transition-all font-medium ${isAnswerRevealed
                            ? 'bg-brand-600 hover:bg-brand-700 text-white shadow-md hover:shadow-lg'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed'
                        }`}
                >
                    {currentQuestionIndex < quiz.questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                    <ArrowRight className="w-5 h-5 ml-2" />
                </button>
            </div>
        </div>
    );
};
