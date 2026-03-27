import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useAllProgress } from '../context/useAllProgress';
import { ALL_COURSES } from '../data/tutorialData';
import type { Course } from '../App';
import LoadingSpinner from './LoadingSpinner';
import { ALL_FLASHCARDS } from '../data/flashcards/flashcardData';
import { isCardDue } from '../utils/srsUtils';
import { Brain, Sparkles, ArrowRight, Award, Zap, Flame, Layout, Compass, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Dashboard: React.FC = () => {
    const { user, isLoading: isAuthLoading } = useAuth();
    const navigate = useNavigate();
    const { allCompletedTopics, quizScores, totalXp, streak, srsData, isLoading: isProgressLoading } = useAllProgress();

    const dueCardsCount = ALL_FLASHCARDS.filter(card => {
        const stats = srsData[card.id];
        if (!stats) return true;
        return isCardDue(stats.nextReview);
    }).length;

    const getRank = (xp: number) => {
        if (xp < 100) return { title: 'Beginner', color: 'text-slate-400', bg: 'bg-slate-100 dark:bg-slate-900/40', icon: 'fa-seedling' };
        if (xp < 500) return { title: 'Code Apprentice', color: 'text-emerald-500', bg: 'bg-emerald-100 dark:bg-emerald-900/40', icon: 'fa-graduation-cap' };
        if (xp < 1000) return { title: 'Logic Master', color: 'text-brand-500', bg: 'bg-brand-100 dark:bg-brand-900/40', icon: 'fa-brain' };
        if (xp < 2000) return { title: 'Data Scientist', color: 'text-indigo-500', bg: 'bg-indigo-100 dark:bg-indigo-900/40', icon: 'fa-database' };
        return { title: 'KnowGrow Guru', color: 'text-amber-500', bg: 'bg-amber-100 dark:bg-amber-900/40', icon: 'fa-crown' };
    };

    const rank = getRank(totalXp);

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: { type: "spring", stiffness: 100, damping: 20 }
        }
    };

    const blobVariants = {
        animate: {
            scale: [1, 1.1, 1],
            x: [0, 20, 0],
            y: [0, -20, 0],
            rotate: [0, 5, 0],
            transition: {
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    if (isAuthLoading) {
        return (
            <div className="flex items-center justify-center flex-1 py-32 bg-gray-50/50 dark:bg-gray-900/50 backdrop-blur-sm">
                <LoadingSpinner />
            </div>
        );
    }

    if (!user) {
        return (
            <div className="flex flex-col items-center justify-center flex-1 text-center px-4 py-20 relative overflow-hidden bg-slate-50 dark:bg-slate-950">
                <motion.div 
                    variants={blobVariants}
                    animate="animate"
                    className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-400/20 rounded-full blur-[100px] pointer-events-none"
                />
                <motion.div 
                    variants={blobVariants}
                    animate="animate"
                    className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" 
                    style={{ animationDirection: 'reverse' }}
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative z-10 max-w-2xl"
                >
                    <h1 className="text-6xl font-black tracking-tight mb-8 text-slate-900 dark:text-white leading-tight font-display">
                        Elevate Your Skills with <span className="bg-gradient-to-r from-brand-600 via-indigo-500 to-emerald-500 text-transparent bg-clip-text drop-shadow-sm">KnowGrow</span>
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 font-medium leading-relaxed">
                        Join thousands of students mastering programming through interactive exercises and academic-focused tutorials.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05, translateY: -4 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/')}
                        className="px-10 py-5 bg-gradient-to-r from-brand-600 to-indigo-700 text-white font-black rounded-2xl shadow-2xl shadow-brand-500/30 transition-all duration-300 flex items-center mx-auto gap-3"
                    >
                        Start Learning Now <ArrowRight className="w-5 h-5" />
                    </motion.button>
                </motion.div>
            </div>
        );
    }

    if (isProgressLoading) {
        return (
            <div className="flex items-center justify-center flex-1 py-32">
                <LoadingSpinner />
            </div>
        );
    }

    const courseStats = Object.keys(ALL_COURSES).map((courseKey) => {
        const courseId = courseKey as Course;
        const courseData = ALL_COURSES[courseId];
        const totalTopics = courseData.data.reduce((acc, section) => acc + section.topics.length, 0);
        const completedTopics = allCompletedTopics.filter(t => t.course_id === courseId).length;
        const percentage = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;

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
        <div className="relative min-h-screen bg-slate-50 dark:bg-[#0b0f1a] overflow-hidden">
            {/* Background Decorative Elements */}
            <motion.div 
                animate={{ 
                    x: [0, 40, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-24 -left-24 w-96 h-96 bg-brand-500/10 rounded-full blur-[100px] pointer-events-none"
            />
            <motion.div 
                animate={{ 
                    x: [0, -60, 0],
                    y: [0, 30, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 -right-24 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none"
            />

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="w-full max-w-7xl mx-auto px-6 py-12 md:py-20 relative z-10"
            >
                {/* Header Welcome Section */}
                <motion.div variants={itemVariants} className="mb-16 flex flex-col md:flex-row md:items-center justify-between gap-8">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-[10px] font-black uppercase tracking-[0.2em] rounded-full">Dashboard</span>
                            <div className="h-px w-12 bg-brand-200 dark:bg-brand-800"></div>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white mb-4 font-display">
                            Welcome back, <br className="hidden sm:block" /> 
                            <span className="bg-gradient-to-r from-brand-600 to-indigo-500 text-transparent bg-clip-text lowercase">
                                {user.email?.split('@')[0]}
                            </span>
                        </h1>
                        <p className="text-lg font-medium text-slate-500 dark:text-slate-400 max-w-lg">
                            Track your progress and continue your journey to becoming a Guru.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
                        {[
                            { value: totalXp, label: 'Total XP', icon: <Zap className="w-5 h-5" />, color: 'amber', glow: 'shadow-amber-500/20' },
                            { value: streak, label: 'Day Streak', icon: <Flame className="w-5 h-5" />, color: 'orange', glow: 'shadow-orange-500/20' },
                            { value: rank.title, label: 'Current Rank', icon: <Award className="w-5 h-5" />, color: 'indigo', glow: rank.color.includes('amber') ? 'shadow-amber-500/20' : 'shadow-indigo-500/20' }
                        ].map((stat, i) => (
                            <motion.div 
                                key={stat.label}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className={`bg-white/70 dark:bg-slate-800/40 backdrop-blur-xl p-5 rounded-3xl border border-white/40 dark:border-white/5 shadow-xl ${stat.glow} flex flex-col items-center text-center`}
                            >
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-3 bg-${stat.color}-100 dark:bg-${stat.color}-900/40 text-${stat.color}-600 dark:text-${stat.color}-400`}>
                                    {stat.icon}
                                </div>
                                <div className={`text-xl font-black text-slate-900 dark:text-white truncate max-w-full ${stat.label === 'Current Rank' ? 'text-sm' : ''}`}>{stat.value}</div>
                                <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-1">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {/* SRS Flashcard Review Card */}
                    <motion.div variants={itemVariants} className="md:col-span-2 group">
                        <div className="h-full bg-gradient-to-br from-indigo-700 via-brand-600 to-indigo-800 rounded-[40px] shadow-2xl shadow-indigo-600/30 p-10 flex flex-col md:flex-row items-center transition-all duration-500 relative overflow-hidden ring-1 ring-white/20">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 ease-out">
                                <Brain className="w-64 h-64" />
                            </div>
                            
                            <div className="relative z-10 flex-1 flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full mb-6">
                                    <Sparkles className="w-4 h-4 text-amber-300" />
                                    <span className="text-[10px] font-black uppercase tracking-wider text-white">Daily Review Goal</span>
                                </div>
                                
                                <h2 className="text-4xl md:text-5xl font-black text-white mb-4 font-display">Daily Mind Sharpening</h2>
                                <p className="text-indigo-100 text-lg mb-8 max-w-md font-medium opacity-90">
                                    Refresh your memory with our spaced repetition system. Master concepts for the long term.
                                </p>

                                <Link
                                    to="/review"
                                    className="px-8 py-5 bg-white text-indigo-700 rounded-2xl font-black text-sm flex items-center gap-3 shadow-2xl shadow-black/20 hover:bg-slate-50 transition-all hover:scale-105 active:scale-95 group-hover:shadow-indigo-400/20"
                                >
                                    Start Session Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            <div className="relative z-10 grid grid-cols-2 gap-4 w-full md:w-auto">
                                <motion.div animate={{ scale: dueCardsCount > 0 ? [1, 1.05, 1] : 1 }} transition={{ repeat: Infinity, duration: 2 }} className="bg-white/10 backdrop-blur-md rounded-3xl p-6 flex flex-col items-center justify-center min-w-[140px] border border-white/20">
                                    <div className="text-5xl font-black text-white">{dueCardsCount}</div>
                                    <div className="text-[10px] font-bold text-indigo-100 uppercase tracking-widest mt-2">{dueCardsCount === 1 ? 'Card' : 'Cards'} Due</div>
                                </motion.div>
                                <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 flex flex-col items-center justify-center min-w-[140px] border border-white/10">
                                    <div className="text-4xl font-black text-white/60">{ALL_FLASHCARDS.length}</div>
                                    <div className="text-[10px] font-bold text-indigo-100/50 uppercase tracking-widest mt-2">Total Pack</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Progress Card for each course */}
                    {courseStats.map((stat) => (
                        <motion.div 
                            key={stat.id} 
                            variants={itemVariants} 
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="bg-white/70 dark:bg-[#1a202e] backdrop-blur-2xl rounded-[40px] shadow-sm border border-white/50 dark:border-white/5 p-8 flex flex-col transition-all duration-300 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-600/5 to-transparent rounded-bl-full -z-0"></div>
                            
                            <div className="relative z-10 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-8">
                                    <h2 className="text-3xl font-black text-slate-900 dark:text-white font-display leading-tight">{stat.name}</h2>
                                    <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-brand-500 transition-colors duration-500 group-hover:rotate-[360deg]">
                                        <BookOpen className="w-6 h-6 text-slate-500 dark:text-slate-400 group-hover:text-white" />
                                    </div>
                                </div>

                                <div className="space-y-6 mb-10">
                                    <div>
                                        <div className="flex items-center justify-between mb-3 px-1">
                                            <span className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Efficiency</span>
                                            <span className="text-xs font-black text-brand-600 dark:text-brand-400">
                                                {stat.percentage}%
                                            </span>
                                        </div>
                                        <div className="w-full bg-slate-100 dark:bg-slate-900 rounded-full h-4 overflow-hidden p-1 shadow-inner ring-1 ring-slate-200 dark:ring-slate-800">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${stat.percentage}%` }}
                                                transition={{ duration: 1.5, ease: "circOut" }}
                                                className="h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-400 relative"
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] animate-[glimmer_3s_infinite]" />
                                            </motion.div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="bg-slate-50 dark:bg-slate-950/50 rounded-2xl p-3 border border-slate-100 dark:border-slate-900">
                                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter mb-1">Topics</div>
                                            <div className="text-sm font-black text-slate-700 dark:text-slate-300">{stat.completed} / {stat.total}</div>
                                        </div>
                                        <div className="bg-slate-50 dark:bg-slate-950/50 rounded-2xl p-3 border border-slate-100 dark:border-slate-900">
                                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter mb-1">Quiz</div>
                                            <div className="text-sm font-black text-emerald-600 dark:text-emerald-400">{stat.averageQuizScore}%</div>
                                        </div>
                                    </div>
                                </div>

                                <Link
                                    to={stat.homeUrl}
                                    className={`w-full py-4 rounded-2xl font-black text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                                        stat.completed === 0
                                        ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xl shadow-slate-900/20 dark:shadow-white/10 hover:scale-[1.02]'
                                        : stat.percentage === 100
                                            ? 'bg-emerald-500 text-white shadow-xl shadow-emerald-500/20'
                                            : 'bg-brand-50 text-brand-700 dark:bg-brand-900/30 dark:text-brand-300 border border-brand-200/50 dark:border-brand-800/50 hover:bg-brand-100'
                                    }`}
                                >
                                    {stat.completed === 0 ? 'Start Course' : stat.percentage === 100 ? 'Course Mastered' : 'Resume Lesson'}
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Dashboard;
