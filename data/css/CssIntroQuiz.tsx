import React from 'react';
import { QuizViewer } from '../../components/QuizViewer';
import { QUIZ_DATA } from '../quizData';
import { useAuth } from '../../context/AuthContext';
import { useAllProgress } from '../../context/useAllProgress';

const CssIntroQuiz: React.FC = () => {
    const { user } = useAuth();
    const { updateQuizScore } = useAllProgress();
    const quiz = QUIZ_DATA['css_intro_quiz'];

    const handleComplete = (score: number, total: number) => {
        if (user) {
            updateQuizScore(quiz.courseId, quiz.topicId, score, total);
        }
    };

    return <QuizViewer quiz={quiz} onComplete={handleComplete} />;
};

export default CssIntroQuiz;
