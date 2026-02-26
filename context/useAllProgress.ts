import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from './AuthContext';

export interface CourseProgressRecord {
    topic_id: string;
    course_id: string;
}

export const useAllProgress = () => {
    const { user } = useAuth();
    const [allCompletedTopics, setAllCompletedTopics] = useState<CourseProgressRecord[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchAllProgress = useCallback(async () => {
        if (!user) {
            setAllCompletedTopics([]);
            setIsLoading(false);
            return;
        }

        try {
            setIsLoading(true);
            const { data, error } = await supabase
                .from('user_progress')
                .select('topic_id, course_id')
                .eq('user_id', user.id);

            if (error) throw error;

            if (data) {
                setAllCompletedTopics(data);
            }
        } catch (error) {
            console.error('Error fetching all progress:', error);
        } finally {
            setIsLoading(false);
        }
    }, [user]);

    useEffect(() => {
        fetchAllProgress();
    }, [fetchAllProgress]);

    return {
        allCompletedTopics,
        isLoading,
        refreshProgress: fetchAllProgress
    };
};
