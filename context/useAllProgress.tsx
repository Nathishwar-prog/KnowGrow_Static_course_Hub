import React, { useState, useEffect, useCallback, createContext, useContext } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from './AuthContext';
import { SRSStats, calculateNextSRS, INITIAL_STATS } from '../utils/srsUtils';

export interface CourseProgressRecord {
    topic_id: string;
    course_id: string;
    completed_at?: string;
}

export interface QuizScoreRecord {
    topic_id: string;
    course_id: string;
    score: number;
    total: number;
}

interface ProgressState {
    completedTopics: CourseProgressRecord[];
    quizScores: QuizScoreRecord[];
    totalXp: number;
    streak: number;
    lastActivityDate: string | null;
    srsData?: Record<string, SRSStats>;
}

interface AllProgressContextType {
    allCompletedTopics: CourseProgressRecord[];
    quizScores: QuizScoreRecord[];
    totalXp: number;
    streak: number;
    srsData: Record<string, SRSStats>;
    isLoading: boolean;
    refreshProgress: () => Promise<void>;
    updateQuizScore: (courseId: string, topicId: string, score: number, total: number) => Promise<void>;
    markTopicAsCompleted: (courseId: string, topicId: string) => Promise<void>;
    updateFlashcard: (cardId: string, quality: number) => void;
}

const AllProgressContext = createContext<AllProgressContextType | undefined>(undefined);

const STORAGE_KEY = 'knowgrow_user_progress';

export const AllProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { user } = useAuth();
    const [allCompletedTopics, setAllCompletedTopics] = useState<CourseProgressRecord[]>([]);
    const [quizScores, setQuizScores] = useState<QuizScoreRecord[]>([]);
    const [totalXp, setTotalXp] = useState(0);
    const [streak, setStreak] = useState(0);
    const [srsData, setSrsData] = useState<Record<string, SRSStats>>({});
    const [isLoading, setIsLoading] = useState(true);

    const calculateStreak = (lastDateStr: string | null) => {
        if (!lastDateStr) return 0;
        const lastDate = new Date(lastDateStr);
        const today = new Date();
        
        const last = new Date(lastDate.getFullYear(), lastDate.getMonth(), lastDate.getDate());
        const curr = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        
        const diffDays = Math.floor((curr.getTime() - last.getTime()) / (1000 * 60 * 60 * 24));
        
        if (diffDays === 0) return -1; 
        if (diffDays === 1) return 1;  
        return 0; 
    };

    const loadLocalProgress = () => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            try {
                const parsed: ProgressState = JSON.parse(saved);
                setAllCompletedTopics(parsed.completedTopics || []);
                setQuizScores(parsed.quizScores || []);
                setTotalXp(parsed.totalXp || 0);
                setSrsData(parsed.srsData || {});
                
                const streakAction = calculateStreak(parsed.lastActivityDate);
                if (streakAction === 1) setStreak((parsed.streak || 0) + 1);
                else if (streakAction === 0) setStreak(0);
                else setStreak(parsed.streak || 0);

            } catch (e) {
                console.error('Failed to parse local progress', e);
            }
        }
    };

    const saveLocalProgress = (topics: CourseProgressRecord[], scores: QuizScoreRecord[], xp: number, currentStreak: number, currentSrs?: Record<string, SRSStats>) => {
        const state: ProgressState = {
            completedTopics: topics,
            quizScores: scores,
            totalXp: xp,
            streak: currentStreak,
            lastActivityDate: new Date().toISOString(),
            srsData: currentSrs || srsData
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    };

    const fetchAllProgress = useCallback(async () => {
        setIsLoading(true);
        loadLocalProgress(); 

        if (!user) {
            setIsLoading(false);
            return;
        }

        try {
            const [progressResult, quizResult] = await Promise.all([
                supabase
                    .from('user_progress')
                    .select('topic_id, course_id, completed_at')
                    .eq('user_id', user.id),
                supabase
                    .from('user_quiz_scores')
                    .select('topic_id, course_id, score, total')
                    .eq('user_id', user.id)
            ]);

            if (progressResult.data) {
                setAllCompletedTopics(progressResult.data);
                setTotalXp(progressResult.data.length * 10);
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

    const markTopicAsCompleted = async (courseId: string, topicId: string) => {
        if (allCompletedTopics.some(t => t.topic_id === topicId && t.course_id === courseId)) return;

        const newRecord = { course_id: courseId, topic_id: topicId, completed_at: new Date().toISOString() };
        const newTopics = [...allCompletedTopics, newRecord];
        const newXp = totalXp + 10;
        
        setAllCompletedTopics(newTopics);
        setTotalXp(newXp);
        
        const today = new Date().toISOString().split('T')[0];
        const savedRaw = localStorage.getItem(STORAGE_KEY);
        const lastActivity = savedRaw ? JSON.parse(savedRaw).lastActivityDate : null;
        const lastDay = lastActivity ? lastActivity.split('T')[0] : '';
        
        let newStreak = streak;
        if (lastDay !== today) {
            const streakAction = calculateStreak(lastActivity);
            if (streakAction === 1 || streakAction === 0 || lastActivity === null) {
                 newStreak = (streakAction === 1) ? streak + 1 : 1;
                 setStreak(newStreak);
            }
        }

        saveLocalProgress(newTopics, quizScores, newXp, newStreak);

        if (user) {
            try {
                await supabase.from('user_progress').upsert({
                    user_id: user.id,
                    course_id: courseId,
                    topic_id: topicId,
                    completed_at: new Date().toISOString()
                });
            } catch (e) {
                console.error('Failed to sync progress to Supabase', e);
            }
        }
    };

    const updateQuizScore = async (courseId: string, topicId: string, score: number, total: number) => {
        const newScores = [...quizScores.filter(q => q.topic_id !== topicId), { course_id: courseId, topic_id: topicId, score, total }];
        setQuizScores(newScores);
        saveLocalProgress(allCompletedTopics, newScores, totalXp, streak);

        if (!user) return;

        try {
            const { error } = await supabase
                .from('user_quiz_scores')
                .upsert(
                    { user_id: user.id, course_id: courseId, topic_id: topicId, score, total, completed_at: new Date().toISOString() },
                    { onConflict: 'user_id, course_id, topic_id' }
                );

            if (!error) {
                fetchAllProgress();
            }
        } catch (error) {
            console.error('Error in updateQuizScore:', error);
        }
    };

    const updateFlashcard = (cardId: string, quality: number) => {
        const currentStats = srsData[cardId] || INITIAL_STATS;
        const newStats = calculateNextSRS(currentStats, quality);
        
        const newSrsData = {
            ...srsData,
            [cardId]: newStats
        };
        
        setSrsData(newSrsData);
        saveLocalProgress(allCompletedTopics, quizScores, totalXp, streak, newSrsData);
    };

    useEffect(() => {
        fetchAllProgress();
    }, [fetchAllProgress]);

    const value = {
        allCompletedTopics,
        quizScores,
        totalXp,
        streak,
        srsData,
        isLoading,
        refreshProgress: fetchAllProgress,
        updateQuizScore,
        markTopicAsCompleted,
        updateFlashcard
    };

    return <AllProgressContext.Provider value={value}>{children}</AllProgressContext.Provider>;
};

export const useAllProgress = () => {
    const context = useContext(AllProgressContext);
    if (context === undefined) {
        throw new Error('useAllProgress must be used within an AllProgressProvider');
    }
    return context;
};

