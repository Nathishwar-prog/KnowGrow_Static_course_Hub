import React, { useState } from 'react';
import { CSS_QUIZ_DATA } from './quizData';

const CssQuiz: React.FC = () => {
    const [quizState, setQuizState] = useState({
        started: false,
        currentQuestionIndex: 0,
        selectedAnswerIndex: null as number | null,
        score: 0,
        showResult: false,
        answerSubmitted: false,
    });

    const currentQuestion = CSS_QUIZ_DATA[quizState.currentQuestionIndex];

    const handleStartQuiz = () => {
        setQuizState({ ...quizState, started: true });
    };

    const handleAnswerSelect = (answerIndex: number) => {
        if (quizState.answerSubmitted) return;
        setQuizState({ ...quizState, selectedAnswerIndex: answerIndex });
    };

    const handleSubmitAnswer = () => {
        if (quizState.selectedAnswerIndex === null) return;

        const isCorrect = quizState.selectedAnswerIndex === currentQuestion.correctAnswerIndex;
        
        setQuizState({
            ...quizState,
            score: isCorrect ? quizState.score + 1 : quizState.score,
            answerSubmitted: true,
        });
    };

    const handleNextQuestion = () => {
        if (quizState.currentQuestionIndex < CSS_QUIZ_DATA.length - 1) {
            setQuizState({
                ...quizState,
                currentQuestionIndex: quizState.currentQuestionIndex + 1,
                selectedAnswerIndex: null,
                answerSubmitted: false,
            });
        } else {
            setQuizState({ ...quizState, showResult: true });
        }
    };
    
    const handleRestartQuiz = () => {
        setQuizState({
            started: true,
            currentQuestionIndex: 0,
            selectedAnswerIndex: null,
            score: 0,
            showResult: false,
            answerSubmitted: false,
        });
    };

    const getScoreMessage = (score: number) => {
        const percentage = (score / CSS_QUIZ_DATA.length) * 100;
        if (percentage === 100) return "Perfect Score! You're a CSS master!";
        if (percentage >= 80) return "Excellent work! You really know your CSS.";
        if (percentage >= 50) return "Good effort! A little more practice and you'll be an expert.";
        return "Keep practicing! Every expert was once a beginner.";
    };
    
    const getOptionClasses = (optionIndex: number) => {
        let classes = 'quiz-option';
        if (quizState.answerSubmitted) {
            if (optionIndex === currentQuestion.correctAnswerIndex) {
                classes += ' correct';
            } else if (optionIndex === quizState.selectedAnswerIndex) {
                classes += ' incorrect';
            } else {
                 classes += ' disabled';
            }
        } else if (optionIndex === quizState.selectedAnswerIndex) {
            classes += ' selected';
        }
        return classes;
    };


    if (quizState.showResult) {
        return (
            <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-4">Quiz Completed!</h2>
                <p className="text-5xl font-bold text-indigo-500 my-4">
                    {quizState.score} / {CSS_QUIZ_DATA.length}
                </p>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">{getScoreMessage(quizState.score)}</p>
                <button
                    onClick={handleRestartQuiz}
                    className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-700 transition-colors text-lg"
                >
                    Try Again
                </button>
            </div>
        );
    }

    if (!quizState.started) {
        return (
            <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <h2 className="text-4xl font-bold mb-4">CSS Quiz</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Test your knowledge of CSS with these {CSS_QUIZ_DATA.length} questions.</p>
                <button
                    onClick={handleStartQuiz}
                    className="bg-green-600 text-white font-bold py-3 px-8 rounded-full hover:bg-green-700 transition-colors text-lg shadow-lg animate-pulse-green"
                >
                    Start Quiz
                </button>
            </div>
        );
    }

    return (
        <div className="p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <div className="mb-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">Question {quizState.currentQuestionIndex + 1} of {CSS_QUIZ_DATA.length}</p>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mt-2">
                    <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: `${((quizState.currentQuestionIndex + 1) / CSS_QUIZ_DATA.length) * 100}%` }}></div>
                </div>
            </div>

            <h3 className="text-2xl font-bold my-6">{currentQuestion.question}</h3>
            
            <div className="space-y-3">
                {currentQuestion.options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        className={getOptionClasses(index)}
                        disabled={quizState.answerSubmitted}
                    >
                        <span className="quiz-option-letter">{String.fromCharCode(65 + index)}</span>
                        {option}
                        {quizState.answerSubmitted && (
                            <span className="quiz-option-icon">
                                {index === currentQuestion.correctAnswerIndex ? <i className="fa-solid fa-check"></i> : (index === quizState.selectedAnswerIndex && <i className="fa-solid fa-times"></i>)}
                            </span>
                        )}
                    </button>
                ))}
            </div>

            {quizState.answerSubmitted && (
                 <div className="mt-6 p-4 rounded-md bg-gray-100 dark:bg-gray-700/50 border-l-4 border-gray-400">
                     <p className="font-bold">Explanation:</p>
                     <p className="text-gray-600 dark:text-gray-300">{currentQuestion.explanation}</p>
                 </div>
            )}
            
            <div className="mt-8 text-right">
                {quizState.answerSubmitted ? (
                    <button
                        onClick={handleNextQuestion}
                        className="bg-indigo-600 text-white font-bold py-2 px-6 rounded-md hover:bg-indigo-700 transition-colors"
                    >
                       {quizState.currentQuestionIndex < CSS_QUIZ_DATA.length - 1 ? 'Next Question' : 'Show Results'} <i className="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                ) : (
                    <button
                        onClick={handleSubmitAnswer}
                        disabled={quizState.selectedAnswerIndex === null}
                        className="bg-gray-600 text-white font-bold py-2 px-6 rounded-md hover:bg-gray-700 disabled:bg-gray-300 dark:disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors"
                    >
                        Submit Answer
                    </button>
                )}
            </div>
        </div>
    );
};

export default CssQuiz;
