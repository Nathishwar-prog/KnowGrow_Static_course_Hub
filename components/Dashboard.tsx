import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useAllProgress } from '../context/useAllProgress';
import { ALL_COURSES } from '../data/tutorialData';
import type { Course } from '../App';
import LoadingSpinner from './LoadingSpinner';
import { ALL_FLASHCARDS } from '../data/flashcards/flashcardData';
import { isCardDue } from '../utils/srsUtils';
import { Brain, Sparkles, ArrowRight } from 'lucide-react';

const Dashboard: React.FC = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const { allCompletedTopics, quizScores, totalXp, streak, srsData, isLoading } = useAllProgress();

    const dueCardsCount = ALL_FLASHCARDS.filter(card => {
        const stats = srsData[card.id];
        if (!stats) return true;
        return isCardDue(stats.nextReview);
    }).length;

    const getRank = (xp: number) => {
        if (xp < 100) return { title: 'Beginner', color: 'text-gray-400' };
        if (xp < 500) return { title: 'Code Apprentice', color: 'text-emerald-500' };
        if (xp < 1000) return { title: 'Logic Master', color: 'text-brand-500' };
        if (xp < 2000) return { title: 'Data Scientist', color: 'text-indigo-500' };
        return { title: 'KnowGrow Guru', color: 'text-amber-500' };
    };

    const rank = getRank(totalXp);

    if (!user) {
        return (
            <div className="flex flex-col items-center justify-center flex-1 text-center px-4 py-20 relative overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-brand-400/20 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>

                <h1 className="text-5xl font-extrabold tracking-tight mb-6 text-gray-900 dark:text-white relative z-10">
                    Welcome to <span className="bg-gradient-to-r from-brand-600 to-emerald-500 text-transparent bg-clip-text">KnowGrow</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-xl relative z-10">
                    Please login to view your personal dashboard, track your progress, and continue your learning journey.
                </p>
                <button
                    onClick={() => navigate('/')}
                    className="relative z-10 px-8 py-4 bg-gradient-to-r from-brand-600 to-indigo-600 text-white font-bold rounded-2xl shadow-xl shadow-brand-500/20 hover:shadow-2xl hover:shadow-brand-500/30 hover:-translate-y-1 transition-all duration-300 transform"
                >
                    Return to Home
                </button>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="flex items-center justify-center flex-1 py-32">
                <LoadingSpinner />
            </div>
        );
    }

    const courseStats = Object.keys(ALL_COURSES).map((courseKey) => {
        const courseId = courseKey as Course;
        const courseData = ALL_COURSES[courseId];

        // Calculate total topics
        const totalTopics = courseData.data.reduce((acc, section) => acc + section.topics.length, 0);

        // Calculate completed topics for this course
        const completedTopics = allCompletedTopics.filter(t => t.course_id === courseId).length;

        const percentage = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;

        // Calculate average quiz score for this course
        const courseQuizScores = quizScores.filter(q => q.course_id === courseId);
        let averageQuizScore = 0;
        if (courseQuizScores.length > 0) {
            const totalScore = courseQuizScores.reduce((acc, q) => acc + (q.score / q.total), 0);
            averageQuizScore = Math.round((totalScore / courseQuizScores.length) * 100);
        }

        return {
            id: courseId,
            name: courseId.toUpperCase(),
            total: totalTopics,
            completed: completedTopics,
            percentage,
            averageQuizScore,
            homeUrl: `/tutorial/${courseId}/${courseData.homeTopicId}`
        };
    }).filter(stat => stat.total > 0);

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-10 md:py-16 flex-1 relative">
            <div className="absolute top-0 right-0 w-1/2 h-64 bg-gradient-to-bl from-brand-200/40 via-transparent to-transparent dark:from-brand-900/20 rounded-bl-full pointer-events-none blur-3xl -z-10"></div>

            <div className="mb-12 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-3">
                        My Dashboard
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Welcome back, <span className="font-semibold text-brand-600 dark:text-brand-400">{user.email}</span>
                    </p>
                </div>
                
                {/* Gamification Stats Bar */}
                <div className="flex flex-wrap gap-4 md:gap-8 justify-center md:justify-end">
                    <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-md p-4 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 flex items-center space-x-3 shadow-sm shadow-brand-500/5">
                        <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center text-amber-600 dark:text-amber-400">
                            <i className="fa-solid fa-bolt text-xl"></i>
                        </div>
                        <div>
                            <div className="text-2xl font-black text-gray-900 dark:text-white leading-none">{totalXp}</div>
                            <div className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-tighter">Total XP</div>
                        </div>
                    </div>

                    <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-md p-4 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 flex items-center space-x-3 shadow-sm shadow-orange-500/5">
                        <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center text-orange-600 dark:text-orange-400">
                            <i className="fa-solid fa-fire text-xl"></i>
                        </div>
                        <div>
                            <div className="text-2xl font-black text-gray-900 dark:text-white leading-none">{streak}</div>
                            <div className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-tighter">Streak Day</div>
                        </div>
                    </div>

                    <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-md p-4 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 flex items-center space-x-3 shadow-sm shadow-emerald-500/5">
                        <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                            <i className="fa-solid fa-award text-xl"></i>
                        </div>
                        <div>
                            <div className={`text-xl font-black leading-none ${rank.color}`}>{rank.title}</div>
                            <div className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-tighter">Current Rank</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {/* SRS Flashcard Review Card */}
                <div className="group bg-gradient-to-br from-brand-600 to-indigo-700 rounded-3xl shadow-xl shadow-brand-500/20 p-7 flex flex-col transition-all duration-500 hover:shadow-2xl hover:shadow-brand-500/40 hover:-translate-y-2 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                        <Brain className="w-24 h-24" />
                    </div>
                    <div className="relative z-10 flex flex-col h-full">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                                <Sparkles className="w-4 h-4 text-brand-200" />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-brand-100">Daily Goal</span>
                        </div>
                        
                        <h2 className="text-2xl font-black text-white mb-2">Daily Review</h2>
                        <p className="text-brand-100/80 text-sm mb-6 font-medium">
                            Keep your concepts sharp with spaced repetition.
                        </p>

                        <div className="mt-auto">
                            <div className="flex items-end justify-between mb-4">
                                <div>
                                    <div className="text-4xl font-black text-white leading-none">{dueCardsCount}</div>
                                    <div className="text-[10px] font-bold text-brand-200 uppercase tracking-widest mt-1">Cards Due</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-lg font-black text-white leading-none">{ALL_FLASHCARDS.length}</div>
                                    <div className="text-[10px] font-bold text-brand-200 uppercase tracking-widest mt-1">Total Cards</div>
                                </div>
                            </div>

                            <Link
                                to="/review"
                                className="w-full bg-white text-brand-700 py-3.5 rounded-2xl font-black text-sm flex items-center justify-center group-hover:bg-brand-50 transition-colors shadow-lg"
                            >
                                Start Review <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>

                {courseStats.map((stat) => (
                    <div key={stat.id} className="group bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-3xl shadow-sm border border-gray-200/60 dark:border-gray-700/60 p-7 flex flex-col transition-all duration-500 hover:shadow-2xl hover:shadow-brand-500/10 hover:-translate-y-2 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/0 dark:from-white/5 dark:to-transparent pointer-events-none rounded-3xl"></div>

                        <div className="relative z-10">
                            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">{stat.name}</h2>

                            <div className="flex items-center justify-between mb-3">
                                <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Progress</span>
                                <span className="text-sm font-black text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/30 px-2.5 py-1 rounded-lg">
                                    {stat.percentage}%
                                </span>
                            </div>

                            {/* Progress Bar Component */}
                            <div className="w-full bg-gray-100 dark:bg-gray-900/80 rounded-full h-3.5 mb-5 overflow-hidden shadow-inner">
                                <div
                                    className="h-full rounded-full transition-all duration-1000 ease-out relative overflow-hidden bg-gradient-to-r from-brand-500 to-indigo-500"
                                    style={{ width: `${stat.percentage}%` }}
                                >
                                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] animate-[glimmer_2.5s_infinite]"></div>
                                </div>
                            </div>

                            <div className="flex justify-between items-center mb-8 gap-2">
                                <div className="text-sm text-gray-600 dark:text-gray-400 flex-1 font-medium bg-gray-50/50 dark:bg-gray-900/30 rounded-xl p-3 border border-gray-100 dark:border-gray-800">
                                    <i className="fa-solid fa-graduation-cap mr-2 text-brand-500 dark:text-brand-400"></i>
                                    {stat.completed} <span className="opacity-70">of</span> {stat.total}
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400 flex-1 font-medium bg-amber-50/50 dark:bg-amber-900/10 rounded-xl p-3 border border-amber-100 dark:border-amber-800/30">
                                    <i className="fa-solid fa-trophy mr-2 text-amber-500 dark:text-amber-400"></i>
                                    {stat.averageQuizScore}% <span className="opacity-70">Avg</span>
                                </div>
                            </div>

                            <Link
                                to={stat.homeUrl}
                                className={`mt-auto w-full text-center px-5 py-3.5 font-bold rounded-2xl transition-all duration-300 transform active:scale-95 ${stat.completed === 0
                                    ? 'bg-gradient-to-r from-brand-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-brand-500/25'
                                    : stat.percentage === 100
                                        ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white hover:shadow-lg hover:shadow-green-500/25'
                                        : 'bg-brand-50 text-brand-700 dark:bg-brand-900/30 dark:text-brand-300 hover:bg-brand-100 dark:hover:bg-brand-900/50 border border-brand-200/50 dark:border-brand-800/50 hover:border-brand-300 dark:hover:border-brand-700'
                                    }`}
                            >
                                {stat.completed === 0 ? 'Start Course' : stat.percentage === 100 ? 'Review completed' : 'Continue learning'}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
