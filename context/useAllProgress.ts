import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from './AuthContext';

export interface CourseProgressRecord {
    topic_id: string;
    course_id: string;
}

export interface QuizScoreRecord {
    topic_id: string;
    course_id: string;
    score: number;
    total: number;
}

export const useAllProgress = () => {
    const { user } = useAuth();
    const [allCompletedTopics, setAllCompletedTopics] = useState<CourseProgressRecord[]>([]);
    const [quizScores, setQuizScores] = useState<QuizScoreRecord[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchAllProgress = useCallback(async () => {
        if (!user) {
            setAllCompletedTopics([]);
            setQuizScores([]);
            setIsLoading(false);
            return;
        }

        try {
            setIsLoading(true);
            const [progressResult, quizResult] = await Promise.all([
                supabase
                    .from('user_progress')
                    .select('topic_id, course_id')
                    .eq('user_id', user.id),
                supabase
                    .from('user_quiz_scores')
                    .select('topic_id, course_id, score, total')
                    .eq('user_id', user.id)
            ]);

            if (progressResult.error) throw progressResult.error;

            // Don't throw for quiz errors in case the table is missing
            if (quizResult.error) {
                console.warn('Could not fetch quiz scores (table may be missing):', quizResult.error);
            }

            if (progressResult.data) {
                setAllCompletedTopics(progressResult.data);
            }
            if (quizResult.data) {
                setQuizScores(quizResult.data);
            }

        } catch (error) {
            console.error('Error fetching all progress:', error);
        } finally {
            setIsLoading(false);
        }
    }, [user]);

    const updateQuizScore = async (courseId: string, topicId: string, score: number, total: number) => {
        if (!user) return;

        try {
            const { error } = await supabase
                .from('user_quiz_scores')
                .upsert(
                    { user_id: user.id, course_id: courseId, topic_id: topicId, score, total, completed_at: new Date().toISOString() },
                    { onConflict: 'user_id, course_id, topic_id' }
                );

            if (error) {
                console.error('Error saving quiz score to Supabase. Table user_quiz_scores may not exist:', error);
            } else {
                fetchAllProgress(); // Refresh to get the new score
            }
        } catch (error) {
            console.error('Error in updateQuizScore:', error);
        }
    };

    useEffect(() => {
        fetchAllProgress();
    }, [fetchAllProgress]);

    return {
        allCompletedTopics,
        quizScores,
        isLoading,
        refreshProgress: fetchAllProgress,
        updateQuizScore
    };
};
