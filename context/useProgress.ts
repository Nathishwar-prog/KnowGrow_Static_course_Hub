import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from './AuthContext';

interface UserProgress {
    id: string;
    user_id: string;
    course_id: string;
    topic_id: string;
    completed_at: string;
}

export const useProgress = (courseId: string) => {
    const { user } = useAuth();
    const [completedTopics, setCompletedTopics] = useState<Set<string>>(new Set());
    const [isLoading, setIsLoading] = useState(true);

    // Fetch all completed topics for this user and course
    const fetchProgress = useCallback(async () => {
        if (!user) {
            setCompletedTopics(new Set());
            setIsLoading(false);
            return;
        }

        try {
            setIsLoading(true);
            const { data, error } = await supabase
                .from('user_progress')
                .select('topic_id')
                .eq('user_id', user.id)
                .eq('course_id', courseId);

            if (error) throw error;

            if (data) {
                setCompletedTopics(new Set(data.map(item => item.topic_id)));
            }
        } catch (error) {
            console.error('Error fetching progress:', error);
        } finally {
            setIsLoading(false);
        }
    }, [user, courseId]);

    useEffect(() => {
        fetchProgress();
    }, [fetchProgress]);

    // Mark a topic as complete
    const markAsComplete = async (topicId: string) => {
        if (!user) return false;

        try {
            const { error } = await supabase
                .from('user_progress')
                .insert({
                    user_id: user.id,
                    course_id: courseId,
                    topic_id: topicId,
                });

            if (error && error.code !== '23505') { // Ignore unique constraint violations
                throw error;
            }

            setCompletedTopics(prev => new Set(prev).add(topicId));
            return true;
        } catch (error) {
            console.error('Error marking topic complete:', error);
            return false;
        }
    };

    // Mark a topic as incomplete
    const markAsIncomplete = async (topicId: string) => {
        if (!user) return false;

        try {
            const { error } = await supabase
                .from('user_progress')
                .delete()
                .match({ user_id: user.id, course_id: courseId, topic_id: topicId });

            if (error) throw error;

            setCompletedTopics(prev => {
                const newSet = new Set(prev);
                newSet.delete(topicId);
                return newSet;
            });
            return true;
        } catch (error) {
            console.error("Error un-marking topic:", error);
            return false;
        }
    }

    return {
        completedTopics,
        isLoading,
        markAsComplete,
        markAsIncomplete,
        refreshProgress: fetchProgress
    };
};
